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

function getCanonicalPaperCode(paperCode: string): string {
  if (!paperCode) return 'CWT-01';
  const clean = paperCode.toUpperCase().trim();
  if (clean.startsWith('11TH-') || clean.startsWith('12TH-')) {
    return clean;
  }
  return clean.replace(/^(REPEATER|DROPPER)-/i, '').trim();
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 1. GET: Fetch commits list or single authoritative paper
  if (req.method === 'GET') {
    const action = (req.query.action as string) || 'fetch';
    const rawCode = (req.query.code as string) || 'CWT-01';
    const canonicalCode = getCanonicalPaperCode(rawCode);

    if (action === 'commits') {
      try {
        const { data, error } = await serverSupabase
          .from('questions')
          .select('id, topic, correct_answer, explanation, updated_at')
          .eq('subject', '__SYSTEM_SYNC__')
          .eq('chapter', 'SUNDAY_TEST_PAPERS')
          .order('correct_answer', { ascending: false })
          .limit(50);

        if (error) {
          return res.status(500).json({ error: error.message, commits: [] });
        }
        return res.status(200).json({ commits: data || [] });
      } catch (err: any) {
        return res.status(500).json({ error: err?.message || 'Server error', commits: [] });
      }
    }

    // Default GET: Fetch latest authoritative paper for code
    try {
      const { data, error } = await serverSupabase
        .from('questions')
        .select('id, topic, correct_answer, question_text, updated_at')
        .eq('subject', '__SYSTEM_SYNC__')
        .eq('chapter', 'SUNDAY_TEST_PAPERS')
        .eq('topic', canonicalCode)
        .order('correct_answer', { ascending: false })
        .limit(5);

      if (error || !data || data.length === 0) {
        return res.status(200).json({ success: false, paper: null });
      }

      for (const row of data) {
        try {
          if (!row.question_text) continue;
          const parsed = JSON.parse(row.question_text);
          if (parsed && Array.isArray(parsed.questions) && parsed.questions.length === 180) {
            parsed.revision = Number(row.correct_answer) || parsed.revision || 1;
            parsed.paperCode = canonicalCode;
            return res.status(200).json({ success: true, paper: parsed });
          }
        } catch {}
      }

      return res.status(200).json({ success: false, paper: null });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: err?.message || 'Fetch error' });
    }
  }

  // 2. POST: Commit and persist authoritative paper to Supabase
  if (req.method === 'POST') {
    try {
      const { paper, expectedRevision, adminUser } = req.body || {};
      if (!paper || !Array.isArray(paper.questions) || paper.questions.length === 0) {
        return res.status(400).json({ success: false, error: 'Invalid paper payload: questions array is required.' });
      }

      const canonicalCode = getCanonicalPaperCode(paper.paperCode);
      const now = Date.now();
      const isoTimestamp = new Date(now).toISOString();

      // Determine highest server revision
      let currentServerRev = 0;
      try {
        const { data } = await serverSupabase
          .from('questions')
          .select('correct_answer')
          .eq('subject', '__SYSTEM_SYNC__')
          .eq('chapter', 'SUNDAY_TEST_PAPERS')
          .eq('topic', canonicalCode)
          .order('correct_answer', { ascending: false })
          .limit(1);

        if (data && data.length > 0) {
          currentServerRev = Number(data[0].correct_answer) || 0;
        }
      } catch {}

      const nextRevision = Math.max(
        currentServerRev,
        paper.revision || 0,
        (expectedRevision && expectedRevision > 0) ? expectedRevision : 0
      ) + 1;

      const normalizedPaper = {
        ...paper,
        paperCode: canonicalCode,
        revision: nextRevision,
        updatedAt: isoTimestamp,
        publishedBy: adminUser || 'Institutional Master Admin'
      };

      const payloadJson = JSON.stringify(normalizedPaper);
      const rowId = `__SUNDAY_PAPER__${canonicalCode}__REV_${nextRevision}__${now}_${Math.random().toString(36).slice(2, 6)}`;

      const { error: insertErr } = await serverSupabase.from('questions').upsert({
        id: rowId,
        subject: '__SYSTEM_SYNC__',
        chapter: 'SUNDAY_TEST_PAPERS',
        topic: canonicalCode,
        difficulty: 'System',
        question_text: payloadJson,
        options: ['SYNC_PAYLOAD_V3', canonicalCode, `REV_${nextRevision}`],
        correct_answer: nextRevision,
        explanation: `Authoritative Sunday Paper: ${canonicalCode} Rev ${nextRevision}`
      }, { onConflict: 'id' });

      if (insertErr) {
        return res.status(500).json({ success: false, error: insertErr.message });
      }

      return res.status(200).json({
        success: true,
        paper: normalizedPaper,
        revision: nextRevision,
        timestamp: isoTimestamp
      });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: err?.message || 'Failed to save paper.' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
