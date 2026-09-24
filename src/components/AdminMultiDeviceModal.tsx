import React, { useState } from 'react';
import {
  Laptop,
  Smartphone,
  Tablet,
  ShieldAlert,
  ShieldCheck,
  X,
  LogOut,
  RefreshCw,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Zap
} from 'lucide-react';
import {
  AdminDeviceSession,
  revokeDeviceSession
} from '../services/adminSessionService';

interface AdminMultiDeviceModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessions: AdminDeviceSession[];
  currentDeviceId: string;
  adminId?: string;
  isConflictPrompt?: boolean;
  onDeviceEvicted?: (evictedDeviceId: string) => void;
  onAutoEvictOldest?: () => void;
}

export const AdminMultiDeviceModal: React.FC<AdminMultiDeviceModalProps> = ({
  isOpen,
  onClose,
  sessions,
  currentDeviceId,
  adminId = 'admin',
  isConflictPrompt = false,
  onDeviceEvicted,
  onAutoEvictOldest
}) => {
  const [revokingDeviceId, setRevokingDeviceId] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleRevoke = async (deviceIdToRevoke: string) => {
    setRevokingDeviceId(deviceIdToRevoke);
    const success = await revokeDeviceSession(adminId, deviceIdToRevoke);
    setRevokingDeviceId(null);

    if (success) {
      setSuccessMsg('Device session revoked successfully.');
      setTimeout(() => setSuccessMsg(null), 3000);
      if (onDeviceEvicted) {
        onDeviceEvicted(deviceIdToRevoke);
      }
    }
  };

  const getDeviceIcon = (label: string) => {
    const l = (label || '').toLowerCase();
    if (l.includes('iphone') || l.includes('android')) {
      return <Smartphone className="w-5 h-5 text-emerald-400" />;
    }
    if (l.includes('ipad') || l.includes('tablet')) {
      return <Tablet className="w-5 h-5 text-purple-400" />;
    }
    return <Laptop className="w-5 h-5 text-blue-400" />;
  };

  const formatLastActive = (isoString: string) => {
    try {
      const diffSec = Math.floor((Date.now() - new Date(isoString).getTime()) / 1000);
      if (diffSec < 30) return 'Active just now';
      if (diffSec < 60) return `${diffSec}s ago`;
      const diffMin = Math.floor(diffSec / 60);
      if (diffMin < 60) return `${diffMin}m ago`;
      const diffHours = Math.floor(diffMin / 60);
      return `${diffHours}h ago`;
    } catch {
      return 'Recently active';
    }
  };

  const activeCount = sessions.length;
  const isAtLimit = activeCount >= 3;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden text-slate-100 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg ${
              isConflictPrompt
                ? 'bg-gradient-to-tr from-amber-500 to-rose-600 shadow-rose-500/20'
                : 'bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-indigo-500/20'
            }`}>
              {isConflictPrompt ? (
                <ShieldAlert className="w-5 h-5 text-white" />
              ) : (
                <ShieldCheck className="w-5 h-5 text-white" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest font-mono font-bold bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded-full border border-indigo-500/30">
                  Multi-Device Sync
                </span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                  isAtLimit
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                    : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                }`}>
                  {activeCount} / 3 Devices Active
                </span>
              </div>
              <h2 className="text-base font-bold text-white mt-0.5">
                {isConflictPrompt ? 'Device Limit Reached (Max 3)' : 'Authorized Admin Devices'}
              </h2>
            </div>
          </div>

          {!isConflictPrompt && (
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Notice Banner */}
        <div className="px-6 pt-4 pb-2">
          {isConflictPrompt ? (
            <div className="p-3.5 rounded-2xl bg-amber-950/70 border border-amber-600/50 text-amber-200 text-xs flex items-start space-x-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Your account is currently active on <strong>3 devices</strong>. Under security policy, log out one existing session below to grant access to this device.
              </p>
            </div>
          ) : (
            <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/70 text-xs text-slate-300 flex items-start space-x-2.5">
              <Zap className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                All active devices receive realtime question swaps and edits concurrently (&lt;50ms) with zero page reloads.
              </p>
            </div>
          )}

          {successMsg && (
            <div className="mt-3 p-3 rounded-2xl bg-emerald-950/80 border border-emerald-600/60 text-emerald-200 text-xs flex items-center space-x-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}
        </div>

        {/* Device List */}
        <div className="px-6 py-3 space-y-2.5 max-h-72 overflow-y-auto">
          {sessions.map((session) => {
            const isCurrent = session.device_id === currentDeviceId;
            const isRevoking = revokingDeviceId === session.device_id;

            return (
              <div
                key={session.device_id}
                className={`p-3.5 rounded-2xl border transition flex items-center justify-between ${
                  isCurrent
                    ? 'bg-indigo-950/40 border-indigo-500/50 ring-1 ring-indigo-500/20'
                    : 'bg-slate-800/60 border-slate-700/70 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 shrink-0">
                    {getDeviceIcon(session.device_label)}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white truncate">
                        {session.device_label}
                      </span>
                      {isCurrent && (
                        <span className="text-[9px] uppercase font-mono font-bold bg-indigo-500/30 text-indigo-300 px-1.5 py-0.5 rounded border border-indigo-500/40 shrink-0">
                          This Device
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-0.5">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span>{formatLastActive(session.last_active_at)}</span>
                      <span className="text-slate-600">&bull;</span>
                      <span className="font-mono text-[10px] text-slate-500 truncate">
                        ID: {session.device_id.slice(0, 10)}...
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  {isCurrent ? (
                    <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Connected
                    </span>
                  ) : (
                    <button
                      onClick={() => handleRevoke(session.device_id)}
                      disabled={isRevoking}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-rose-950/60 hover:bg-rose-900 border border-rose-700/60 text-rose-200 transition flex items-center space-x-1.5 cursor-pointer disabled:opacity-50"
                      title="Log out this device"
                    >
                      {isRevoking ? (
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <LogOut className="w-3.5 h-3.5" />
                      )}
                      <span>{isConflictPrompt ? 'Disconnect & Enter' : 'Revoke'}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between">
          <div className="text-[10px] text-slate-500 font-mono">
            Heartbeat: 60s &bull; Auto-clean: 24h
          </div>

          <div className="flex items-center space-x-2">
            {isConflictPrompt && onAutoEvictOldest && (
              <button
                type="button"
                onClick={onAutoEvictOldest}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white transition flex items-center space-x-1.5 cursor-pointer shadow-md shadow-amber-600/20"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Auto-Evict Oldest & Continue</span>
              </button>
            )}

            {!isConflictPrompt && (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition cursor-pointer"
              >
                Close
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
