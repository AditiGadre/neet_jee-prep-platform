import { supabase } from '../supabaseClient';
import { Question } from '../types';

export interface QuestionBankItem extends Question {
  status?: 'draft' | 'published' | 'archived';
  orderIndex?: number;
  version: number;
  updatedBy?: string;
  updatedAt?: string;
}

export interface PublishVersionInfo {
  versionId: number;
  versionTag: string;
  publishedAt: string;
  publishedBy: string;
  summary: string;
  questionCount: number;
  checksum: string;
  isCurrent: boolean;
}

export interface PublishResult {
  success: boolean;
  versionId?: number;
  versionTag?: string;
  questionCount?: number;
  checksum?: string;
  publishedAt?: string;
  error?: string;
  message?: string;
}

export interface ConcurrencyConflictResult {
  conflict: true;
  error: string;
  serverVersion: number;
  expectedVersion: number;
  currentServerQuestion: Partial<QuestionBankItem>;
}

// In-memory cache for student reads with ETag
let cachedStudentPublishedData: {
  versionId: number;
  versionTag: string;
  questions: Question[];
  etag: string;
  lastFetched: number;
} | null = null;

const API_BASE = typeof window !== 'undefined' ? window.location.origin : '';

/**
 * Fetch authoritative questions (both Draft and Published) directly from central source.
 */
export async function fetchAuthoritativeQuestions(adminEmail: string = 'admin@neetcbtexam.com'): Promise<{
  questions: QuestionBankItem[];
  draftCount: number;
  publishedCount: number;
  totalCount: number;
}> {
  try {
    // 1. Try REST API endpoint
    const res = await fetch(`${API_BASE}/api/admin/questions`, {
      headers: { 'X-Admin-Email': adminEmail }
    });

    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.questions)) {
        return {
          questions: json.questions,
          draftCount: json.draftCount || 0,
          publishedCount: json.publishedCount || 0,
          totalCount: json.totalCount || json.questions.length
        };
      }
    }
  } catch (err) {
    console.warn('API /api/admin/questions unavailable, checking direct Supabase fallback:', err);
  }

  // 2. Direct Supabase Fallback (Zero downtime if serverless is provisioning)
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('question_bank_items')
        .select('*')
        .order('order_index', { ascending: true })
        .order('id', { ascending: true });

      if (!error && data) {
        const questions: QuestionBankItem[] = data.map((q: any) => ({
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
          status: q.status || 'draft',
          orderIndex: q.order_index,
          version: q.version || 1,
          updatedBy: q.updated_by,
          updatedAt: q.updated_at
        }));

        const draftCount = questions.filter(q => q.status === 'draft').length;
        const publishedCount = questions.filter(q => q.status === 'published').length;

        return { questions, draftCount, publishedCount, totalCount: questions.length };
      }
    } catch (e) {
      console.warn('Direct Supabase read fallback error:', e);
    }
  }

  return { questions: [], draftCount: 0, publishedCount: 0, totalCount: 0 };
}

/**
 * Save / Update a question with OPTIMISTIC CONCURRENCY PROTECTION.
 */
export async function saveAuthoritativeQuestion(
  id: string,
  expectedVersion: number,
  question: Partial<QuestionBankItem>,
  adminEmail: string = 'admin@neetcbtexam.com'
): Promise<{ success: boolean; question?: QuestionBankItem } | ConcurrencyConflictResult> {
  try {
    const res = await fetch(`${API_BASE}/api/admin/questions`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Admin-Email': adminEmail
      },
      body: JSON.stringify({ id, expectedVersion, question })
    });

    const json = await res.json();

    if (res.status === 409 || json.conflict) {
      return {
        conflict: true,
        error: json.error || 'CONCURRENT_EDIT_CONFLICT: Another admin modified this question.',
        serverVersion: json.serverVersion,
        expectedVersion,
        currentServerQuestion: json.currentServerQuestion
      };
    }

    if (res.ok && json.success) {
      return { success: true, question: json.question };
    }
  } catch (err) {
    console.warn('API save error, trying Supabase optimistic lock directly:', err);
  }

  // Direct Supabase Fallback with Optimistic Guard
  if (supabase) {
    try {
      const { data: current } = await supabase
        .from('question_bank_items')
        .select('*')
        .eq('id', id)
        .single();

      if (current && current.version !== expectedVersion) {
        return {
          conflict: true,
          error: 'CONCURRENT_EDIT_CONFLICT: Another admin modified this question.',
          serverVersion: current.version,
          expectedVersion,
          currentServerQuestion: current
        };
      }

      const nextVersion = expectedVersion + 1;
      const { data: updated, error } = await supabase
        .from('question_bank_items')
        .update({
          question_text: question.questionText,
          options: question.options,
          correct_answer: question.correctAnswer,
          explanation: question.explanation,
          diagram_svg: question.diagramSvg,
          subject: question.subject,
          chapter: question.chapter,
          difficulty: question.difficulty,
          tags: question.tags,
          status: 'draft',
          version: nextVersion,
          updated_by: adminEmail,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .eq('version', expectedVersion)
        .select()
        .single();

      if (!error && updated) {
        return {
          success: true,
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
        };
      }
    } catch (e: any) {
      return { conflict: true, error: e.message, serverVersion: expectedVersion + 1, expectedVersion, currentServerQuestion: {} };
    }
  }

  return { conflict: true, error: 'Failed to connect to central database.', serverVersion: 0, expectedVersion, currentServerQuestion: {} };
}

/**
 * Create a new Draft question in the central database.
 */
export async function createAuthoritativeQuestion(
  question: Partial<QuestionBankItem>,
  adminEmail: string = 'admin@neetcbtexam.com'
): Promise<{ success: boolean; question?: QuestionBankItem; error?: string }> {
  try {
    const res = await fetch(`${API_BASE}/api/admin/questions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Admin-Email': adminEmail
      },
      body: JSON.stringify({ question })
    });

    const json = await res.json();
    if (res.ok && json.success) {
      return { success: true, question: json.question };
    }
    return { success: false, error: json.error };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

/**
 * Reorder questions in the central database.
 */
export async function reorderAuthoritativeQuestions(
  orderedIds: string[],
  adminEmail: string = 'admin@neetcbtexam.com'
): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE}/api/admin/questions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Admin-Email': adminEmail
      },
      body: JSON.stringify({ action: 'reorder', orderedIds })
    });
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * Delete a question from the central database.
 */
export async function deleteAuthoritativeQuestion(
  id: string,
  adminEmail: string = 'admin@neetcbtexam.com'
): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE}/api/admin/questions?id=${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: { 'X-Admin-Email': adminEmail }
    });
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * Atomically publish the current draft set to 1,000,000+ students.
 */
export async function publishQuestionBankVersion(
  summary: string,
  adminEmail: string = 'admin@neetcbtexam.com'
): Promise<PublishResult> {
  try {
    const res = await fetch(`${API_BASE}/api/admin/publish`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Admin-Email': adminEmail
      },
      body: JSON.stringify({ summary, adminEmail })
    });

    const json = await res.json();
    if (res.ok && json.success) {
      // Clear client-side memory cache
      cachedStudentPublishedData = null;
      return json;
    }
    return { success: false, error: json.error || 'Publish failed' };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

/**
 * Fetch publication version history.
 */
export async function fetchPublishVersionHistory(): Promise<PublishVersionInfo[]> {
  try {
    const res = await fetch(`${API_BASE}/api/admin/rollback`, { method: 'GET' });
    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.versions)) {
        return json.versions;
      }
    }
  } catch (err) {
    console.warn('Error fetching publish history:', err);
  }

  // Supabase fallback
  if (supabase) {
    const { data } = await supabase
      .from('published_versions')
      .select('version_id, version_tag, published_at, published_by, summary, question_count, snapshot_checksum, is_current')
      .order('version_id', { ascending: false });

    if (data) {
      return data.map((v: any) => ({
        versionId: v.version_id,
        versionTag: v.version_tag,
        publishedAt: v.published_at,
        publishedBy: v.published_by,
        summary: v.summary,
        questionCount: v.question_count,
        checksum: v.snapshot_checksum,
        isCurrent: v.is_current
      }));
    }
  }

  return [];
}

/**
 * Roll back to a previous version snapshot atomically.
 */
export async function rollbackQuestionBankVersion(
  targetVersionId: number,
  adminEmail: string = 'admin@neetcbtexam.com'
): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const res = await fetch(`${API_BASE}/api/admin/rollback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Admin-Email': adminEmail
      },
      body: JSON.stringify({ targetVersionId, adminEmail })
    });

    const json = await res.json();
    if (res.ok && json.success) {
      cachedStudentPublishedData = null;
      return { success: true, message: json.message };
    }
    return { success: false, error: json.error || 'Rollback failed' };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

/**
 * High-scale student read path: fetches the current published version from CDN/Edge.
 * Bounded by 60s staleness window with ETag caching.
 */
export async function fetchPublishedQuestionsForStudents(versionId?: number): Promise<{
  questions: Question[];
  versionId: number;
  versionTag: string;
  publishedAt: string;
  questionCount: number;
  isCached: boolean;
}> {
  // Check client memory cache within 30 seconds
  if (!versionId && cachedStudentPublishedData && (Date.now() - cachedStudentPublishedData.lastFetched < 30000)) {
    return {
      questions: cachedStudentPublishedData.questions,
      versionId: cachedStudentPublishedData.versionId,
      versionTag: cachedStudentPublishedData.versionTag,
      publishedAt: new Date(cachedStudentPublishedData.lastFetched).toISOString(),
      questionCount: cachedStudentPublishedData.questions.length,
      isCached: true
    };
  }

  try {
    const url = versionId 
      ? `${API_BASE}/api/questions/published?v=${versionId}`
      : `${API_BASE}/api/questions/published`;

    const headers: Record<string, string> = {};
    if (!versionId && cachedStudentPublishedData?.etag) {
      headers['If-None-Match'] = cachedStudentPublishedData.etag;
    }

    const res = await fetch(url, { headers });

    // Handle 304 Not Modified (0 bytes transferred)
    if (res.status === 304 && cachedStudentPublishedData) {
      cachedStudentPublishedData.lastFetched = Date.now();
      return {
        questions: cachedStudentPublishedData.questions,
        versionId: cachedStudentPublishedData.versionId,
        versionTag: cachedStudentPublishedData.versionTag,
        publishedAt: new Date().toISOString(),
        questionCount: cachedStudentPublishedData.questions.length,
        isCached: true
      };
    }

    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.questions)) {
        const etag = res.headers.get('ETag') || `v${json.versionId}-${json.checksum}`;
        if (!versionId) {
          cachedStudentPublishedData = {
            versionId: json.versionId,
            versionTag: json.versionTag,
            questions: json.questions,
            etag,
            lastFetched: Date.now()
          };
        }
        return {
          questions: json.questions,
          versionId: json.versionId,
          versionTag: json.versionTag,
          publishedAt: json.publishedAt,
          questionCount: json.questionCount || json.questions.length,
          isCached: res.headers.get('X-Cache-Status')?.startsWith('HIT') || false
        };
      }
    }
  } catch (err) {
    console.warn('Error fetching published questions from CDN:', err);
  }

  // Return cached copy if available during network interruption
  if (cachedStudentPublishedData) {
    return {
      questions: cachedStudentPublishedData.questions,
      versionId: cachedStudentPublishedData.versionId,
      versionTag: cachedStudentPublishedData.versionTag,
      publishedAt: new Date(cachedStudentPublishedData.lastFetched).toISOString(),
      questionCount: cachedStudentPublishedData.questions.length,
      isCached: true
    };
  }

  return {
    questions: [],
    versionId: 0,
    versionTag: 'v0.0.0',
    publishedAt: new Date().toISOString(),
    questionCount: 0,
    isCached: false
  };
}
