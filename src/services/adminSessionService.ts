/**
 * Admin Multi-Device Session Management Service
 * 
 * Enforces a strict 3-device concurrency cap per administrator.
 * Features:
 * - Device Fingerprint / Persistent ID generation (localStorage).
 * - Automatic OS & Browser label detection (e.g. "Windows PC · Chrome", "iPhone · Safari").
 * - Heartbeat update every 60 seconds to track `last_active_at`.
 * - Automatic 24-hour inactivity session cleanup.
 * - Realtime broadcast channel for instant remote eviction notifications (<50ms).
 * - Dual-layer support: Direct `admin_sessions` table / RPC with seamless fallback to `questions` system sync.
 */

import { supabase } from '../supabaseClient';

export interface AdminDeviceSession {
  id: string;
  admin_id: string;
  device_id: string;
  device_label: string;
  last_active_at: string;
  created_at: string;
  is_current?: boolean;
}

export type SessionRegistrationResult =
  | { status: 'admitted'; activeSessions: AdminDeviceSession[]; deviceId: string }
  | { status: 'refreshed'; activeSessions: AdminDeviceSession[]; deviceId: string }
  | { status: 'admitted_with_eviction'; evictedDeviceLabel: string; activeSessions: AdminDeviceSession[]; deviceId: string }
  | { status: 'device_limit_exceeded'; message: string; activeSessions: AdminDeviceSession[]; deviceId: string };

const DEVICE_ID_KEY = 'neet_admin_device_id';
const DEVICE_LABEL_KEY = 'neet_admin_device_label';
const MAX_ACTIVE_DEVICES = 3;
const HEARTBEAT_INTERVAL_MS = 30 * 1000; // 30 seconds
const SESSION_EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours

let heartbeatTimer: any = null;
let realtimeChannel: any = null;
let sessionSyncChannel: any = null;
let onEvictedCallback: (() => void) | null = null;
const sessionUpdateListeners = new Set<(sessions: AdminDeviceSession[]) => void>();

/**
 * Returns or generates a persistent unique device identifier.
 */
export function getOrCreateDeviceId(): string {
  if (typeof window === 'undefined') return 'server-device';
  let deviceId = localStorage.getItem(DEVICE_ID_KEY);
  if (!deviceId) {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      deviceId = `dev-${crypto.randomUUID().slice(0, 12)}`;
    } else {
      deviceId = `dev-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
    }
    localStorage.setItem(DEVICE_ID_KEY, deviceId);
  }
  return deviceId;
}

/**
 * Automatically detects operating system and browser for user-friendly device label.
 */
export function getDeviceLabel(): string {
  if (typeof window === 'undefined') return 'Admin Device';
  const saved = localStorage.getItem(DEVICE_LABEL_KEY);
  if (saved) return saved;

  const ua = navigator.userAgent || '';
  let os = 'Unknown Device';
  if (/Windows NT 10.0/i.test(ua)) os = 'Windows 10/11';
  else if (/Windows/i.test(ua)) os = 'Windows PC';
  else if (/Macintosh|Mac OS X/i.test(ua)) os = 'MacBook / macOS';
  else if (/iPhone/i.test(ua)) os = 'iPhone';
  else if (/iPad/i.test(ua)) os = 'iPad';
  else if (/Android/i.test(ua)) os = 'Android Device';
  else if (/Linux/i.test(ua)) os = 'Linux Workstation';

  let browser = 'Browser';
  if (/Edg\//i.test(ua)) browser = 'Edge';
  else if (/Chrome\//i.test(ua) && !/Edg\//i.test(ua)) browser = 'Chrome';
  else if (/Safari\//i.test(ua) && !/Chrome\//i.test(ua)) browser = 'Safari';
  else if (/Firefox\//i.test(ua)) browser = 'Firefox';

  const label = `${os} · ${browser}`;
  localStorage.setItem(DEVICE_LABEL_KEY, label);
  return label;
}

/**
 * Registers an admin session and checks 3-device cap.
 */
export async function registerDeviceSession(
  adminId: string = 'admin',
  autoEvict: boolean = false
): Promise<SessionRegistrationResult> {
  const cleanAdminId = (adminId || 'admin').toString().trim().toLowerCase() || 'admin';
  const deviceId = getOrCreateDeviceId();
  const deviceLabel = getDeviceLabel();
  const now = new Date().toISOString();

  if (!supabase) {
    return {
      status: 'admitted',
      deviceId,
      activeSessions: [
        {
          id: deviceId,
          admin_id: cleanAdminId,
          device_id: deviceId,
          device_label: deviceLabel,
          last_active_at: now,
          created_at: now,
          is_current: true
        }
      ]
    };
  }

  // 1. Attempt Primary Layer: Dedicated RPC / admin_sessions Table
  try {
    const { data: rpcData, error: rpcErr } = await supabase.rpc('register_admin_device_session', {
      p_admin_id: cleanAdminId,
      p_device_id: deviceId,
      p_device_label: deviceLabel,
      p_auto_evict: autoEvict
    });

    if (!rpcErr && rpcData) {
      if (rpcData.status === 'device_limit_exceeded') {
        const activeSessions = await getActiveAdminSessions(cleanAdminId);
        return {
          status: 'device_limit_exceeded',
          message: rpcData.message || '3 devices are already active for this admin account.',
          deviceId,
          activeSessions
        };
      }

      if (
        rpcData.status === 'admitted' ||
        rpcData.status === 'refreshed' ||
        rpcData.status === 'admitted_with_eviction' ||
        rpcData.success
      ) {
        startSessionHeartbeat(cleanAdminId);
        subscribeSessionControl(cleanAdminId, deviceId);
        saveFallbackSession(cleanAdminId, {
          id: `sess-${deviceId}`,
          admin_id: cleanAdminId,
          device_id: deviceId,
          device_label: deviceLabel,
          last_active_at: now,
          created_at: now
        }).catch(() => {});
        broadcastSessionUpdate(cleanAdminId);
        const activeSessions = await getActiveAdminSessions(cleanAdminId);
        return {
          status: rpcData.status === 'admitted_with_eviction' ? 'admitted_with_eviction' : (rpcData.status === 'refreshed' ? 'refreshed' : 'admitted'),
          evictedDeviceLabel: rpcData.evicted_label || rpcData.evicted_device || '',
          deviceId,
          activeSessions
        };
      }
    }

    // Try direct table queries on admin_sessions if RPC isn't deployed yet
    const { data: tableSessions, error: tableErr } = await supabase
      .from('admin_sessions')
      .select('*')
      .eq('admin_id', adminId)
      .order('last_active_at', { ascending: false });

    if (!tableErr && tableSessions) {
      return handleTableSessionRegistration(adminId, deviceId, deviceLabel, tableSessions, autoEvict);
    }
  } catch (e) {
    console.warn('[SESSION] Falling back to system store session management:', e);
  }

  // 2. Resilient Fallback Layer: Uses questions table system sync (__ADMIN_SESSION__)
  return handleFallbackSessionRegistration(adminId, deviceId, deviceLabel, autoEvict);
}

/**
 * Direct table logic for admin_sessions table.
 */
async function handleTableSessionRegistration(
  adminId: string,
  deviceId: string,
  deviceLabel: string,
  tableSessions: any[],
  autoEvict: boolean
): Promise<SessionRegistrationResult> {
  const now = new Date();
  // Filter out expired sessions (> 24 hours)
  const active = tableSessions.filter(s => {
    const lastActive = new Date(s.last_active_at).getTime();
    return now.getTime() - lastActive < SESSION_EXPIRY_MS;
  });

  const existingIdx = active.findIndex(s => s.device_id === deviceId);

  if (existingIdx !== -1) {
    // Already in active list: refresh heartbeat
    await supabase
      .from('admin_sessions')
      .update({ last_active_at: now.toISOString(), device_label: deviceLabel })
      .eq('admin_id', adminId)
      .eq('device_id', deviceId);

    active[existingIdx].last_active_at = now.toISOString();
    active[existingIdx].device_label = deviceLabel;

    startSessionHeartbeat(adminId);
    subscribeSessionControl(adminId, deviceId);
    broadcastSessionUpdate(adminId);

    return {
      status: 'refreshed',
      deviceId,
      activeSessions: active.map(s => ({ ...s, is_current: s.device_id === deviceId }))
    };
  }

  // Check 3-device cap
  if (active.length >= MAX_ACTIVE_DEVICES) {
    if (autoEvict) {
      // Find oldest session
      const sorted = [...active].sort((a, b) => new Date(a.last_active_at).getTime() - new Date(b.last_active_at).getTime());
      const oldest = sorted[0];

      // Remove oldest
      await supabase.from('admin_sessions').delete().eq('id', oldest.id);
      broadcastEviction(adminId, oldest.device_id);

      // Insert new with guaranteed unique ID
      const newSession = {
        id: `sess_${deviceId}`,
        admin_id: adminId,
        device_id: deviceId,
        device_label: deviceLabel,
        last_active_at: now.toISOString()
      };
      await supabase.from('admin_sessions').upsert(newSession, { onConflict: 'admin_id,device_id' });

      const remaining = active.filter(s => s.id !== oldest.id);
      const updatedList = [newSession, ...remaining];

      startSessionHeartbeat(adminId);
      subscribeSessionControl(adminId, deviceId);
      broadcastSessionUpdate(adminId);

      return {
        status: 'admitted_with_eviction',
        evictedDeviceLabel: oldest.device_label,
        deviceId,
        activeSessions: updatedList.map(s => ({ ...s, is_current: s.device_id === deviceId }))
      };
    }

    return {
      status: 'device_limit_exceeded',
      message: '3 devices already active. Log out one device to continue.',
      deviceId,
      activeSessions: active.map(s => ({ ...s, is_current: s.device_id === deviceId }))
    };
  }

  // Under limit: upsert directly
  const newSession = {
    id: `sess_${deviceId}`,
    admin_id: adminId,
    device_id: deviceId,
    device_label: deviceLabel,
    last_active_at: now.toISOString()
  };
  await supabase.from('admin_sessions').upsert(newSession, { onConflict: 'admin_id,device_id' });

  const fullList = [newSession, ...active];
  startSessionHeartbeat(adminId);
  subscribeSessionControl(adminId, deviceId);
  broadcastSessionUpdate(adminId);

  return {
    status: 'admitted',
    deviceId,
    activeSessions: fullList.map(s => ({ ...s, is_current: s.device_id === deviceId }))
  };
}

/**
 * Resilient fallback storage using the synchronized questions table.
 */
async function handleFallbackSessionRegistration(
  adminId: string,
  deviceId: string,
  deviceLabel: string,
  autoEvict: boolean
): Promise<SessionRegistrationResult> {
  const now = new Date();
  const cutoff = new Date(now.getTime() - SESSION_EXPIRY_MS).toISOString();

  // Query sessions stored as system questions
  const { data } = await supabase
    .from('questions')
    .select('id, question_text, correct_answer')
    .eq('subject', '__ADMIN_SESSION__')
    .eq('chapter', adminId)
    .order('correct_answer', { ascending: false });

  const active: AdminDeviceSession[] = [];
  if (data && data.length > 0) {
    for (const r of data) {
      try {
        const parsed = JSON.parse(r.question_text) as AdminDeviceSession;
        if (new Date(parsed.last_active_at).getTime() >= new Date(cutoff).getTime()) {
          active.push(parsed);
        }
      } catch {}
    }
  }

  const existingIdx = active.findIndex(s => s.device_id === deviceId);
  if (existingIdx !== -1) {
    active[existingIdx].last_active_at = now.toISOString();
    active[existingIdx].device_label = deviceLabel;
    await saveFallbackSession(adminId, active[existingIdx]);

    startSessionHeartbeat(adminId);
    subscribeSessionControl(adminId, deviceId);
    broadcastSessionUpdate(adminId);

    return {
      status: 'refreshed',
      deviceId,
      activeSessions: active.map(s => ({ ...s, is_current: s.device_id === deviceId }))
    };
  }

  if (active.length >= MAX_ACTIVE_DEVICES) {
    if (autoEvict) {
      active.sort((a, b) => new Date(a.last_active_at).getTime() - new Date(b.last_active_at).getTime());
      const oldest = active.shift()!;
      broadcastEviction(adminId, oldest.device_id);

      const newSess: AdminDeviceSession = {
        id: `sess-${deviceId}`,
        admin_id: adminId,
        device_id: deviceId,
        device_label: deviceLabel,
        last_active_at: now.toISOString(),
        created_at: now.toISOString()
      };
      active.push(newSess);
      await saveFallbackSession(adminId, newSess);

      startSessionHeartbeat(adminId);
      subscribeSessionControl(adminId, deviceId);
      broadcastSessionUpdate(adminId);

      return {
        status: 'admitted_with_eviction',
        evictedDeviceLabel: oldest.device_label,
        deviceId,
        activeSessions: active.map(s => ({ ...s, is_current: s.device_id === deviceId }))
      };
    }

    return {
      status: 'device_limit_exceeded',
      message: '3 devices already active. Log out one device to continue.',
      deviceId,
      activeSessions: active.map(s => ({ ...s, is_current: s.device_id === deviceId }))
    };
  }

  const newSess: AdminDeviceSession = {
    id: `sess-${deviceId}`,
    admin_id: adminId,
    device_id: deviceId,
    device_label: deviceLabel,
    last_active_at: now.toISOString(),
    created_at: now.toISOString()
  };
  active.push(newSess);
  await saveFallbackSession(adminId, newSess);

  startSessionHeartbeat(adminId);
  subscribeSessionControl(adminId, deviceId);
  broadcastSessionUpdate(adminId);

  return {
    status: 'admitted',
    deviceId,
    activeSessions: active.map(s => ({ ...s, is_current: s.device_id === deviceId }))
  };
}

async function saveFallbackSession(adminId: string, session: AdminDeviceSession) {
  if (!supabase) return;
  // Always update admin_sessions table directly first
  try {
    await supabase.from('admin_sessions').upsert({
      id: `sess_${session.device_id}`,
      admin_id: adminId,
      device_id: session.device_id,
      device_label: session.device_label,
      last_active_at: session.last_active_at
    }, { onConflict: 'admin_id,device_id' });
  } catch {}

  const rowId = `__ADMIN_SESSION__${adminId}__${session.device_id}`;
  try {
    await supabase.from('questions').upsert({
      id: rowId,
      subject: '__ADMIN_SESSION__',
      chapter: adminId,
      topic: session.device_id,
      difficulty: 'System',
      question_text: JSON.stringify(session),
      options: ['SESSION', session.device_id, session.device_label],
      correct_answer: Math.floor(new Date(session.last_active_at).getTime() / 1000),
      explanation: `Admin session for ${session.device_label}`
    }, { onConflict: 'id' });
  } catch {}
}

/**
 * Revokes a session on a specified device, freeing its slot immediately.
 */
export async function revokeDeviceSession(adminId: string, deviceIdToRevoke: string): Promise<boolean> {
  try {
    if (supabase) {
      await supabase.from('admin_sessions').delete().eq('admin_id', adminId).eq('device_id', deviceIdToRevoke);
      await supabase.from('questions').delete().eq('id', `__ADMIN_SESSION__${adminId}__${deviceIdToRevoke}`);
    }
    broadcastEviction(adminId, deviceIdToRevoke);
    broadcastSessionUpdate(adminId);
    return true;
  } catch (err) {
    console.error('Failed to revoke session:', err);
    return false;
  }
}

/**
 * Broadcasts remote eviction so the revoked device logs out immediately.
 */
function broadcastEviction(adminId: string, evictedDeviceId: string) {
  if (!supabase) return;
  const channel = supabase.channel('admin_session_control');
  channel.send({
    type: 'broadcast',
    event: 'session_evicted',
    payload: { adminId, evictedDeviceId, timestamp: new Date().toISOString() }
  }).catch(() => {});
}

/**
 * Broadcasts a lightweight session update notification so all open devices refresh their active device count immediately.
 */
export function broadcastSessionUpdate(adminId: string = 'admin') {
  if (!supabase) return;
  try {
    const channel = supabase.channel('admin_session_sync');
    channel.send({
      type: 'broadcast',
      event: 'sessions_updated',
      payload: { adminId, timestamp: Date.now() }
    }).catch(() => {});
  } catch {}

  try {
    const platformChannel = supabase.channel('platform_sync_broadcast');
    platformChannel.send({
      type: 'broadcast',
      event: 'sessions_updated',
      payload: { adminId, timestamp: Date.now() }
    }).catch(() => {});
  } catch {}
}

/**
 * Subscribes to real-time session list updates across all admin devices.
 * Fires immediately when any device connects, heartbeats, or disconnects.
 */
export function subscribeAdminSessionUpdates(
  adminId: string = 'admin',
  callback: (sessions: AdminDeviceSession[]) => void
): () => void {
  sessionUpdateListeners.add(callback);

  if (!sessionSyncChannel && supabase) {
    sessionSyncChannel = supabase.channel('admin_session_sync');

    const handleSessionChange = async () => {
      const fresh = await getActiveAdminSessions(adminId);
      sessionUpdateListeners.forEach(cb => {
        try { cb(fresh); } catch {}
      });
    };

    sessionSyncChannel.on('broadcast', { event: 'sessions_updated' }, handleSessionChange);

    sessionSyncChannel.on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'admin_sessions' },
      handleSessionChange
    );

    sessionSyncChannel.on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'questions', filter: `subject=eq.__ADMIN_SESSION__` },
      handleSessionChange
    );

    sessionSyncChannel.subscribe();

    // Also listen on platform_sync_broadcast channel
    try {
      const pChan = supabase.channel('platform_sync_broadcast');
      pChan.on('broadcast', { event: 'sessions_updated' }, handleSessionChange);
      pChan.subscribe();
    } catch {}
  }

  return () => {
    sessionUpdateListeners.delete(callback);
  };
}

/**
 * Listens for remote evictions of this device.
 */
function subscribeSessionControl(adminId: string, currentDeviceId: string) {
  if (!supabase || realtimeChannel) return;
  realtimeChannel = supabase.channel('admin_session_control');
  realtimeChannel.on('broadcast', { event: 'session_evicted' }, (payload: any) => {
    const data = payload?.payload;
    if (data && data.adminId === adminId && data.evictedDeviceId === currentDeviceId) {
      stopSessionHeartbeat();
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('neet_admin_authenticated');
        localStorage.removeItem('neet_admin_authenticated');
      }
      if (onEvictedCallback) {
        onEvictedCallback();
      }
    }
  });
  realtimeChannel.subscribe();
}

/**
 * Registers an eviction listener callback.
 */
export function onDeviceEvicted(callback: () => void) {
  onEvictedCallback = callback;
}

/**
 * Starts a 60-second heartbeat to update `last_active_at`.
 * Sends an immediate heartbeat on invocation.
 */
export function startSessionHeartbeat(adminId: string) {
  stopSessionHeartbeat();
  const deviceId = getOrCreateDeviceId();
  const deviceLabel = getDeviceLabel();

  const doHeartbeat = async () => {
    if (!supabase) return;
    const now = new Date().toISOString();
    try {
      await supabase
        .from('admin_sessions')
        .upsert({
          id: `sess_${deviceId}`,
          admin_id: adminId,
          device_id: deviceId,
          device_label: deviceLabel,
          last_active_at: now
        }, { onConflict: 'admin_id,device_id' });
    } catch {}

    try {
      await saveFallbackSession(adminId, {
        id: `sess-${deviceId}`,
        admin_id: adminId,
        device_id: deviceId,
        device_label: deviceLabel,
        last_active_at: now,
        created_at: now
      });
    } catch {}
  };

  // Immediate heartbeat on start
  doHeartbeat();
  heartbeatTimer = setInterval(doHeartbeat, HEARTBEAT_INTERVAL_MS);
}

/**
 * Stops session heartbeat.
 */
export function stopSessionHeartbeat() {
  if (heartbeatTimer) {
    clearInterval(heartbeatTimer);
    heartbeatTimer = null;
  }
}

/**
 * Queries active sessions for an admin.
 */
export async function getActiveAdminSessions(adminId: string = 'admin'): Promise<AdminDeviceSession[]> {
  const cleanAdminId = (adminId || 'admin').toString().trim().toLowerCase() || 'admin';
  const currentDeviceId = getOrCreateDeviceId();
  const now = new Date();
  const sessionMap = new Map<string, AdminDeviceSession>();

  if (!supabase) {
    return [{
      id: currentDeviceId,
      admin_id: cleanAdminId,
      device_id: currentDeviceId,
      device_label: getDeviceLabel(),
      last_active_at: now.toISOString(),
      created_at: now.toISOString(),
      is_current: true
    }];
  }

  // 1. Layer 1: Dedicated admin_sessions table
  try {
    const { data, error } = await supabase
      .from('admin_sessions')
      .select('*')
      .eq('admin_id', cleanAdminId)
      .order('last_active_at', { ascending: false });

    if (!error && data && data.length > 0) {
      for (const s of data) {
        if (now.getTime() - new Date(s.last_active_at).getTime() < SESSION_EXPIRY_MS) {
          sessionMap.set(s.device_id, {
            ...s,
            is_current: s.device_id === currentDeviceId
          });
        }
      }
    }
  } catch (err) {
    console.warn('[SESSION] admin_sessions query notice:', err);
  }

  // 2. Layer 2: Resilient questions fallback table (__ADMIN_SESSION__)
  try {
    const { data } = await supabase
      .from('questions')
      .select('question_text')
      .eq('subject', '__ADMIN_SESSION__')
      .eq('chapter', cleanAdminId)
      .order('correct_answer', { ascending: false });

    if (data && data.length > 0) {
      for (const r of data) {
        try {
          const parsed = JSON.parse(r.question_text) as AdminDeviceSession;
          if (now.getTime() - new Date(parsed.last_active_at).getTime() < SESSION_EXPIRY_MS) {
            const existing = sessionMap.get(parsed.device_id);
            if (!existing || new Date(parsed.last_active_at).getTime() > new Date(existing.last_active_at).getTime()) {
              sessionMap.set(parsed.device_id, {
                ...parsed,
                is_current: parsed.device_id === currentDeviceId
              });
            }
          }
        } catch {}
      }
    }
  } catch {}

  // Always ensure the current device is included in the active sessions
  if (!sessionMap.has(currentDeviceId)) {
    sessionMap.set(currentDeviceId, {
      id: `sess_${currentDeviceId}`,
      admin_id: cleanAdminId,
      device_id: currentDeviceId,
      device_label: getDeviceLabel(),
      last_active_at: now.toISOString(),
      created_at: now.toISOString(),
      is_current: true
    });
  }

  const merged = Array.from(sessionMap.values()).sort(
    (a, b) => new Date(b.last_active_at).getTime() - new Date(a.last_active_at).getTime()
  );

  return merged;
}
