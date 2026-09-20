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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers for universal admin access
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Admin-Email');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const adminEmail = (req.headers['x-admin-email'] as string) || 'admin@neetcbtexam.com';

  try {
    // -------------------------------------------------------------------------
    // GET: List all current questions (authoritative draft & published state)
    // -------------------------------------------------------------------------
    if (req.method === 'GET') {
      const { data, error } = await serverSupabase
        .from('question_bank_items')
        .select('*')
        .order('order_index', { ascending: true })
        .order('id', { ascending: true });

      if (error) {
        // Fallback: Query authoritative 'questions' table
        const { data: legacyData, error: legacyErr } = await serverSupabase
          .from('questions')
          .select('*')
          .order('id', { ascending: true })
          .limit(250);

        if (!legacyErr && legacyData && legacyData.length > 0) {
          const fallbackQuestions = legacyData.map((q: any, idx: number) => ({
            id: q.id,
            subject: q.subject || 'Physics',
            chapter: q.chapter || 'General',
            topic: q.topic || '',
            subtopic: '',
            difficulty: q.difficulty || 'Medium',
            questionText: q.question_text || '',
            options: q.options || [],
            correctAnswer: q.correct_answer !== undefined ? q.correct_answer : 0,
            explanation: q.explanation || '',
            diagramSvg: q.diagram_svg || null,
            tags: ['Central Bank'],
            status: 'published',
            orderIndex: idx + 1,
            version: 1,
            updatedBy: 'system',
            updatedAt: new Date().toISOString()
          }));

          return res.status(200).json({
            success: true,
            questions: fallbackQuestions,
            totalCount: fallbackQuestions.length,
            draftCount: 0,
            publishedCount: fallbackQuestions.length,
            message: 'Loaded central questions from authoritative database store.',
            serverTimestamp: new Date().toISOString()
          });
        }

        return res.status(200).json({
          success: true,
          questions: [],
          totalCount: 0,
          draftCount: 0,
          publishedCount: 0,
          message: 'Question bank initialized. Ready for authoring.',
          serverTimestamp: new Date().toISOString()
        });
      }

      const questions = (data || []).map((q: any) => ({
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
        status: q.status,
        orderIndex: q.order_index,
        version: q.version,
        updatedBy: q.updated_by,
        updatedAt: q.updated_at
      }));

      const draftCount = questions.filter(q => q.status === 'draft').length;
      const publishedCount = questions.filter(q => q.status === 'published').length;

      return res.status(200).json({
        success: true,
        questions,
        totalCount: questions.length,
        draftCount,
        publishedCount,
        serverTimestamp: new Date().toISOString()
      });
    }

    // -------------------------------------------------------------------------
    // POST: Create question OR Reorder questions
    // -------------------------------------------------------------------------
    if (req.method === 'POST') {
      const body = req.body || {};

      // Handle batch reorder
      if (body.action === 'reorder' && Array.isArray(body.orderedIds)) {
        const orderedIds: string[] = body.orderedIds;
        for (let i = 0; i < orderedIds.length; i++) {
          await serverSupabase
            .from('question_bank_items')
            .update({ order_index: i + 1, updated_at: new Date().toISOString() })
            .eq('id', orderedIds[i]);
        }
        return res.status(200).json({
          success: true,
          message: `Reordered ${orderedIds.length} questions successfully.`
        });
      }

      // Handle single question creation
      const q = body.question;
      if (!q || !q.questionText || !Array.isArray(q.options) || q.correctAnswer === undefined) {
        return res.status(400).json({
          success: false,
          error: 'Invalid question format. Required: questionText, options (array), correctAnswer.'
        });
      }

      // Determine next order_index
      const { data: maxOrderData } = await serverSupabase
        .from('question_bank_items')
        .select('order_index')
        .order('order_index', { ascending: false })
        .limit(1);

      const nextOrder = (maxOrderData && maxOrderData[0]?.order_index) ? maxOrderData[0].order_index + 1 : 1;
      const generatedId = q.id || `qb-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

      const rowToInsert = {
        id: generatedId,
        subject: q.subject || 'Physics',
        chapter: q.chapter || 'General',
        topic: q.topic || '',
        subtopic: q.subtopic || '',
        difficulty: q.difficulty || 'Medium',
        question_text: q.questionText,
        options: q.options,
        correct_answer: q.correctAnswer,
        explanation: q.explanation || '',
        diagram_svg: q.diagramSvg || null,
        tags: q.tags || [],
        status: 'draft',
        order_index: nextOrder,
        version: 1,
        updated_by: adminEmail,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      const { data: inserted, error: insertError } = await serverSupabase
        .from('question_bank_items')
        .insert(rowToInsert)
        .select()
        .single();

      if (insertError) {
        return res.status(500).json({ success: false, error: insertError.message });
      }

      return res.status(201).json({
        success: true,
        message: 'Draft question created successfully.',
        question: {
          id: inserted.id,
          subject: inserted.subject,
          chapter: inserted.chapter,
          topic: inserted.topic,
          subtopic: inserted.subtopic,
          difficulty: inserted.difficulty,
          questionText: inserted.question_text,
          options: inserted.options,
          correctAnswer: inserted.correct_answer,
          explanation: inserted.explanation,
          diagramSvg: inserted.diagram_svg,
          tags: inserted.tags,
          status: inserted.status,
          orderIndex: inserted.order_index,
          version: inserted.version,
          updatedBy: inserted.updated_by,
          updatedAt: inserted.updated_at
        }
      });
    }

    // -------------------------------------------------------------------------
    // PUT: Update existing question with OPTIMISTIC CONCURRENCY CHECK
    // -------------------------------------------------------------------------
    if (req.method === 'PUT') {
      const { id, expectedVersion, question } = req.body || {};

      if (!id || expectedVersion === undefined || !question) {
        return res.status(400).json({
          success: false,
          error: 'Required: id, expectedVersion, question object.'
        });
      }

      // 1. Fetch current question in database to verify concurrency version
      const { data: current, error: fetchErr } = await serverSupabase
        .from('question_bank_items')
        .select('*')
        .eq('id', id)
        .single();

      if (fetchErr || !current) {
        return res.status(404).json({ success: false, error: `Question with ID ${id} not found.` });
      }

      // Optimistic concurrency check:
      if (current.version !== expectedVersion) {
        return res.status(409).json({
          success: false,
          conflict: true,
          error: 'CONCURRENT_EDIT_CONFLICT: This question was modified by another administrator.',
          serverVersion: current.version,
          expectedVersion: expectedVersion,
          currentServerQuestion: {
            id: current.id,
            questionText: current.question_text,
            options: current.options,
            correctAnswer: current.correct_answer,
            explanation: current.explanation,
            version: current.version,
            updatedBy: current.updated_by,
            updatedAt: current.updated_at
          }
        });
      }

      // 2. Perform safe atomic update, incrementing version
      const nextVersion = expectedVersion + 1;
      const updatePayload: any = {
        question_text: question.questionText !== undefined ? question.questionText : current.question_text,
        options: question.options !== undefined ? question.options : current.options,
        correct_answer: question.correctAnswer !== undefined ? question.correctAnswer : current.correct_answer,
        explanation: question.explanation !== undefined ? question.explanation : current.explanation,
        diagram_svg: question.diagramSvg !== undefined ? question.diagramSvg : current.diagram_svg,
        subject: question.subject || current.subject,
        chapter: question.chapter || current.chapter,
        difficulty: question.difficulty || current.difficulty,
        tags: question.tags || current.tags,
        status: 'draft', // Any edits move it back to draft until published!
        version: nextVersion,
        updated_by: adminEmail,
        updated_at: new Date().toISOString()
      };

      const { data: updated, error: updateErr } = await serverSupabase
        .from('question_bank_items')
        .update(updatePayload)
        .eq('id', id)
        .eq('version', expectedVersion) // atomic guard
        .select()
        .single();

      if (updateErr || !updated) {
        return res.status(409).json({
          success: false,
          conflict: true,
          error: 'Concurrency conflict occurred during write. Please reload and try again.'
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Question updated in draft successfully.',
        question: {
          id: updated.id,
          subject: updated.subject,
          chapter: updated.chapter,
          questionText: updated.question_text,
          options: updated.options,
          correctAnswer: updated.correct_answer,
          explanation: updated.explanation,
          diagramSvg: updated.diagram_svg,
          status: updated.status,
          orderIndex: updated.order_index,
          version: updated.version,
          updatedBy: updated.updated_by,
          updatedAt: updated.updated_at
        }
      });
    }

    // -------------------------------------------------------------------------
    // DELETE: Delete question from question bank
    // -------------------------------------------------------------------------
    if (req.method === 'DELETE') {
      const id = (req.query.id as string) || req.body?.id;
      if (!id) {
        return res.status(400).json({ success: false, error: 'Question ID is required.' });
      }

      const { error } = await serverSupabase
        .from('question_bank_items')
        .delete()
        .eq('id', id);

      if (error) {
        return res.status(500).json({ success: false, error: error.message });
      }

      return res.status(200).json({
        success: true,
        message: `Question ${id} deleted successfully.`
      });
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (error: any) {
    console.error('Admin questions API error:', error);
    return res.status(500).json({ success: false, error: error.message || 'Internal Server Error' });
  }
}
