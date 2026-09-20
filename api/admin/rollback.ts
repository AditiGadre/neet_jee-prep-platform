import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 
  process.env.VITE_SUPABASE_URL || 
  process.env.SUPABASE_URL || 
  'https://emfnqqxsyidicqxnxxxj.supabase.co';

const SUPABASE_SERVICE_ROLE_OR_ANON_KEY = 
  process.env.SUPABASE_SERVICE_ROLE_KEY || 
  process.env.VITE_SUPABASE_ANON_KEY || 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtZm5xcXhzeWlkaWNxeG54eHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODczMjk3OTcsImV4cCI6MjEwMjkwNTc5N30.L-yNwKM4F3hOHnjiYjrMm9H9r4xWRTNHPxTjf8yfObg';

const serverSupabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_OR_ANON_KEY, {
  auth: { persistSession: false }
});

const invalidateMemoryCache = () => {};
const setMemoryCurrentVersion = (_v: any) => {};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Admin-Email');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const adminEmail = (req.headers['x-admin-email'] as string) || req.body?.adminEmail || 'admin@neetcbtexam.com';

  try {
    // -------------------------------------------------------------------------
    // GET: List all published version history
    // -------------------------------------------------------------------------
    if (req.method === 'GET') {
      const { data, error } = await serverSupabase
        .from('published_versions')
        .select('version_id, version_tag, published_at, published_by, summary, question_count, snapshot_checksum, is_current')
        .order('version_id', { ascending: false });

      if (error) {
        return res.status(200).json({ success: true, versions: [] });
      }

      return res.status(200).json({
        success: true,
        versions: (data || []).map((v: any) => ({
          versionId: v.version_id,
          versionTag: v.version_tag,
          publishedAt: v.published_at,
          publishedBy: v.published_by,
          summary: v.summary,
          questionCount: v.question_count,
          checksum: v.snapshot_checksum,
          isCurrent: v.is_current
        }))
      });
    }

    // -------------------------------------------------------------------------
    // POST: Rollback to a specific previous version
    // -------------------------------------------------------------------------
    if (req.method === 'POST') {
      const targetVersionId = Number(req.body?.targetVersionId);
      if (!targetVersionId) {
        return res.status(400).json({ success: false, error: 'targetVersionId is required for rollback.' });
      }

      // 1. Try PostgreSQL atomic procedure
      const { data: rpcResult, error: rpcErr } = await serverSupabase.rpc('rollback_question_bank_version', {
        p_target_version_id: targetVersionId,
        p_admin_email: adminEmail
      });

      if (!rpcErr && rpcResult && rpcResult.success) {
        invalidateMemoryCache();
        return res.status(200).json({
          success: true,
          method: 'POSTGRESQL_ROLLBACK_PROCEDURE',
          ...rpcResult,
          message: `Successfully rolled back active question set to Version #${targetVersionId}.`
        });
      }

      // 2. Application-Level Fallback:
      const { data: targetVersion, error: fetchErr } = await serverSupabase
        .from('published_versions')
        .select('*')
        .eq('version_id', targetVersionId)
        .single();

      if (fetchErr || !targetVersion) {
        return res.status(404).json({ success: false, error: `Version ${targetVersionId} not found in history.` });
      }

      // Demote current
      await serverSupabase
        .from('published_versions')
        .update({ is_current: false })
        .eq('is_current', true);

      // Create new rollback entry with target snapshot
      const { data: maxV } = await serverSupabase
        .from('published_versions')
        .select('version_id')
        .order('version_id', { ascending: false })
        .limit(1);

      const nextVersionId = (maxV && maxV[0]?.version_id) ? maxV[0].version_id + 1 : targetVersionId + 1;
      const rollbackTag = `v${nextVersionId}.0.0-rollback-to-v${targetVersionId}`;
      const nowStr = new Date().toISOString();

      await serverSupabase
        .from('published_versions')
        .insert({
          version_id: nextVersionId,
          version_tag: rollbackTag,
          published_at: nowStr,
          published_by: adminEmail,
          summary: `Emergency rollback to Version #${targetVersionId} (${targetVersion.version_tag})`,
          question_count: targetVersion.question_count,
          snapshot_checksum: targetVersion.snapshot_checksum,
          is_current: true,
          snapshot_payload: targetVersion.snapshot_payload
        });

      // Update in-memory cache
      setMemoryCurrentVersion({
        versionId: nextVersionId,
        versionTag: rollbackTag,
        checksum: targetVersion.snapshot_checksum,
        publishedAt: nowStr,
        questionCount: targetVersion.question_count,
        payload: targetVersion.snapshot_payload,
        cachedAt: Date.now()
      });

      return res.status(200).json({
        success: true,
        method: 'APPLICATION_ATOMIC_ROLLBACK',
        versionId: nextVersionId,
        versionTag: rollbackTag,
        rolledBackToVersionId: targetVersionId,
        questionCount: targetVersion.question_count,
        checksum: targetVersion.snapshot_checksum,
        restoredAt: nowStr,
        restoredBy: adminEmail,
        message: `Successfully rolled back active question set to Version #${targetVersionId}.`
      });
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (error: any) {
    console.error('Rollback API error:', error);
    return res.status(500).json({ success: false, error: error.message || 'Internal Server Error' });
  }
}
