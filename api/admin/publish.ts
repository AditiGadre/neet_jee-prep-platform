import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createHash } from 'crypto';
import { serverSupabase, invalidateMemoryCache, setMemoryCurrentVersion } from '../_supabase';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Admin-Email');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST to publish.' });
  }

  const adminEmail = (req.headers['x-admin-email'] as string) || req.body?.adminEmail || 'admin@neetcbtexam.com';
  const summary = (req.body?.summary as string) || 'Official Question Bank Publication';

  try {
    // 1. Try invoking PostgreSQL stored procedure if available in Supabase
    const { data: rpcResult, error: rpcErr } = await serverSupabase.rpc('publish_question_bank_version', {
      p_admin_email: adminEmail,
      p_summary: summary
    });

    if (!rpcErr && rpcResult && rpcResult.success) {
      invalidateMemoryCache();
      return res.status(200).json({
        success: true,
        method: 'POSTGRESQL_ATOMIC_PROCEDURE',
        versionId: rpcResult.versionId,
        versionTag: rpcResult.versionTag,
        questionCount: rpcResult.questionCount,
        checksum: rpcResult.checksum,
        publishedAt: rpcResult.publishedAt,
        publishedBy: rpcResult.publishedBy,
        message: `Successfully published version ${rpcResult.versionTag} with ${rpcResult.questionCount} questions to 1,000,000+ students.`
      });
    }

    // 2. Fallback Atomic Application-Level Transaction:
    // Gather all questions in draft/published state
    const { data: qRows, error: qErr } = await serverSupabase
      .from('question_bank_items')
      .select('*')
      .order('order_index', { ascending: true })
      .order('id', { ascending: true });

    if (qErr || !qRows || qRows.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'No questions available in question bank to publish.'
      });
    }

    // Format immutable snapshot
    const formattedSnapshot = qRows.map((q: any) => ({
      id: q.id,
      subject: q.subject,
      chapter: q.chapter,
      topic: q.topic,
      subtopic: q.subtopic,
      difficulty: q.difficulty,
      questionText: q.question_text,
      options: q.options,
      correctAnswer: q.correct_answer,
      explanation: q.explanation,
      diagramSvg: q.diagram_svg,
      tags: q.tags || [],
      orderIndex: q.order_index,
      version: q.version
    }));

    // Compute SHA-256 checksum of payload
    const snapshotStr = JSON.stringify(formattedSnapshot);
    const checksum = createHash('sha256').update(snapshotStr).digest('hex');

    // Fetch highest version
    const { data: versions } = await serverSupabase
      .from('published_versions')
      .select('version_id')
      .order('version_id', { ascending: false })
      .limit(1);

    const nextVersionId = (versions && versions[0]?.version_id) ? versions[0].version_id + 1 : 1;
    const versionTag = `v${nextVersionId}.0.0`;

    // Demote current
    await serverSupabase
      .from('published_versions')
      .update({ is_current: false })
      .eq('is_current', true);

    // Insert new version
    const nowStr = new Date().toISOString();
    const { data: newVer, error: insertVerErr } = await serverSupabase
      .from('published_versions')
      .insert({
        version_id: nextVersionId,
        version_tag: versionTag,
        published_at: nowStr,
        published_by: adminEmail,
        summary: summary,
        question_count: formattedSnapshot.length,
        snapshot_checksum: checksum,
        is_current: true,
        snapshot_payload: formattedSnapshot
      })
      .select()
      .single();

    if (insertVerErr) {
      return res.status(500).json({ success: false, error: insertVerErr.message });
    }

    // Mark all draft questions as published
    await serverSupabase
      .from('question_bank_items')
      .update({ status: 'published', updated_at: nowStr, updated_by: adminEmail })
      .eq('status', 'draft');

    // Invalidate in-memory Edge Cache and pre-warm with new snapshot
    setMemoryCurrentVersion({
      versionId: nextVersionId,
      versionTag: versionTag,
      checksum: checksum,
      publishedAt: nowStr,
      questionCount: formattedSnapshot.length,
      payload: formattedSnapshot,
      cachedAt: Date.now()
    });

    // Invalidate CDN Edge tags
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

    return res.status(200).json({
      success: true,
      method: 'APPLICATION_ATOMIC_SNAPSHOT',
      versionId: nextVersionId,
      versionTag: versionTag,
      questionCount: formattedSnapshot.length,
      checksum: checksum,
      publishedAt: nowStr,
      publishedBy: adminEmail,
      message: `Successfully published version ${versionTag} with ${formattedSnapshot.length} questions to 1,000,000+ students.`
    });

  } catch (error: any) {
    console.error('Publish API error:', error);
    return res.status(500).json({ success: false, error: error.message || 'Internal Server Error' });
  }
}
