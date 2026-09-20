import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 
  process.env.VITE_SUPABASE_URL || 
  process.env.SUPABASE_URL || 
  'https://emfnqqxsyidicqxnxxxj.supabase.co';

const SUPABASE_SERVICE_ROLE_OR_ANON_KEY = 
  process.env.SUPABASE_SERVICE_ROLE_KEY || 
  process.env.VITE_SUPABASE_ANON_KEY || 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtZm5xcXhzeWlkaWNxeG54eHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODczMjk3OTcsImV4cCI6MjEwMjkwNTc5N30.L-yNwKM4F3hOHnjiYjrMm9H9r4xWRTNHPxTjf8yfObg';

export const serverSupabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_OR_ANON_KEY, {
  auth: { persistSession: false }
});

// Shared in-memory Edge Cache for sub-millisecond student reads
interface CachedVersion {
  versionId: number;
  versionTag: string;
  checksum: string;
  publishedAt: string;
  questionCount: number;
  payload: any[];
  cachedAt: number;
}

let memoryCurrentVersionCache: CachedVersion | null = null;
const memoryVersionSnapshots = new Map<number, CachedVersion>();

export function getMemoryCurrentVersion(): CachedVersion | null {
  // In-memory cache valid for 15 seconds to offload database completely
  if (memoryCurrentVersionCache && (Date.now() - memoryCurrentVersionCache.cachedAt < 15000)) {
    return memoryCurrentVersionCache;
  }
  return null;
}

export function setMemoryCurrentVersion(v: CachedVersion) {
  memoryCurrentVersionCache = { ...v, cachedAt: Date.now() };
  memoryVersionSnapshots.set(v.versionId, memoryCurrentVersionCache);
}

export function getMemoryVersion(versionId: number): CachedVersion | null {
  return memoryVersionSnapshots.get(versionId) || null;
}

export function invalidateMemoryCache() {
  memoryCurrentVersionCache = null;
}
