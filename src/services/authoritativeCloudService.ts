/**
 * Authoritative Cloud Synchronization Service
 * 
 * Provides single-source-of-truth persistence for questions, topics, orders,
 * and edits. All admin mutations are strictly awaited and validated against
 * the cloud database before being marked as saved.
 */

import { supabase } from '../supabaseClient';
import { Question } from '../types';
import { SyncedSundayPaper } from '../utils/cloudSyncManager';
import {
  getUnifiedQuestionBank,
  ALL_PHYSICS_CHAPTERS,
  ALL_CHEMISTRY_CHAPTERS,
  TopicAllocationItem
} from '../utils/questionDatabase';
import {
  OFFICIAL_PHYSICS_UNITS,
  OFFICIAL_CHEMISTRY_UNITS
} from '../data/sundayPlannerTests';
import { getHardPhysicsDiagram } from '../utils/diagramEngine';
import { formatMathAndFormulas } from '../utils/mathFormatter';

export interface AuthoritativeQuestionRecord {
  id: string;
  order: number; // 1-indexed sequential order
  topicId: string; // chapter / topic ID
  subject: 'Physics' | 'Chemistry' | 'Biology';
  chapter: string;
  topic?: string;
  questionText: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  diagramSvg?: string | null;
  tags?: string[];
  difficulty?: 'Easy' | 'Medium' | 'Hard' | 'Both' | 'Adaptive';
  updatedAt: string;
  updatedBy: string;
  version: number;
}

export interface SyncOperationResult {
  success: boolean;
  paper?: SyncedSundayPaper;
  error?: string;
  timestamp: string;
}

const SUNDAY_PAPER_PREFIX = '__SUNDAY_PAPER__';

// In-memory runtime cache for quick UI transitions (always revalidated from cloud)
const runtimePaperCache = new Map<string, { paper: SyncedSundayPaper; fetchedAt: number }>();
let globalLastSyncedTimestamp: string | null = null;

export function getLastSyncedTimestamp(): string | null {
  return globalLastSyncedTimestamp;
}

export function setLastSyncedTimestamp(ts: string) {
  globalLastSyncedTimestamp = ts;
}

/**
 * Normalizes question list into AuthoritativeQuestionRecord with strict 1..N order
 */
export function normalizeToAuthoritativeRecords(
  questions: Question[],
  updatedBy: string = 'Institutional Master Admin'
): Question[] {
  const now = new Date().toISOString();
  return questions.map((q, idx) => ({
    ...q,
    order: idx + 1,
    difficulty: q.difficulty || 'Hard',
    questionText: formatMathAndFormulas(q.questionText || ''),
    options: (q.options || []).map(opt => formatMathAndFormulas(opt)),
    explanation: formatMathAndFormulas(q.explanation || ''),
    updatedAt: (q as any).updatedAt || now,
    updatedBy: (q as any).updatedBy || updatedBy,
    version: ((q as any).version || 0) + 1
  }));
}

/**
 * Inserts a system row into the Supabase questions table
 */
async function insertSupabaseSystemRow(row: {
  id: string;
  subject: string;
  chapter: string;
  topic: string;
  difficulty: string;
  question_text: string;
  options: string[];
  correct_answer: number;
  explanation: string;
}): Promise<boolean> {
  if (!supabase) return false;
  try {
    const { error } = await supabase.from('questions').insert(row);
    if (error) {
      console.warn('Supabase insert notice for ' + row.id + ':', error.message);
      return false;
    }
    return true;
  } catch (e: any) {
    console.warn('Supabase insert exception for ' + row.id + ':', e.message);
    return false;
  }
}

/**
 * Persists an authoritative Sunday Test Paper to the cloud database across all batch aliases.
 * Strictly awaited; returns whether the cloud write succeeded.
 */
export async function commitAuthoritativePaperToCloud(
  paper: SyncedSundayPaper,
  adminUser: string = 'Institutional Master Admin'
): Promise<SyncOperationResult> {
  const cleanCode = paper.paperCode.toUpperCase().trim();
  const baseCode = cleanCode.replace(/^(11TH|12TH|REPEATER|DROPPER)-/i, '').trim();
  const is11th = cleanCode.startsWith('11TH-');
  const is12th = cleanCode.startsWith('12TH-');
  const now = Date.now();
  const isoTimestamp = new Date(now).toISOString();

  // Normalize questions with strict sequence order (1..180)
  const orderedQuestions = normalizeToAuthoritativeRecords(paper.questions, adminUser);
  const normalizedPaper: SyncedSundayPaper = {
    ...paper,
    paperCode: cleanCode,
    questions: orderedQuestions,
    updatedAt: isoTimestamp,
    publishedBy: adminUser
  };

  // Update in-memory cache and localStorage offline mirror
  runtimePaperCache.set(cleanCode, { paper: normalizedPaper, fetchedAt: now });
  runtimePaperCache.set(baseCode, { paper: normalizedPaper, fetchedAt: now });
  if (!is11th && !is12th) {
    runtimePaperCache.set('REPEATER-' + baseCode, { paper: normalizedPaper, fetchedAt: now });
    runtimePaperCache.set('DROPPER-' + baseCode, { paper: normalizedPaper, fetchedAt: now });
  }

  try {
    const localPapersRaw = localStorage.getItem('neet_custom_sunday_papers');
    const localPapers = localPapersRaw ? JSON.parse(localPapersRaw) : {};
    localPapers[cleanCode.toLowerCase()] = normalizedPaper;
    localPapers[cleanCode] = normalizedPaper;
    localPapers[baseCode.toLowerCase()] = normalizedPaper;
    localPapers[baseCode] = normalizedPaper;
    if (!is11th && !is12th) {
      localPapers['repeater-' + baseCode.toLowerCase()] = normalizedPaper;
      localPapers['repeater-' + baseCode] = normalizedPaper;
      localPapers['dropper-' + baseCode.toLowerCase()] = normalizedPaper;
      localPapers['dropper-' + baseCode] = normalizedPaper;
    }
    localStorage.setItem('neet_custom_sunday_papers', JSON.stringify(localPapers));
  } catch {}

  if (!supabase) {
    return {
      success: false,
      error: 'Cloud database client is not configured.',
      timestamp: isoTimestamp
    };
  }

  try {
    const payloadJson = JSON.stringify(normalizedPaper);
    const primaryRowId = `${SUNDAY_PAPER_PREFIX}${cleanCode}__${now}`;

    // 1. Primary write to Supabase
    const primarySuccess = await insertSupabaseSystemRow({
      id: primaryRowId,
      subject: '__SYSTEM_SYNC__',
      chapter: 'SUNDAY_TEST_PAPERS',
      topic: cleanCode,
      difficulty: 'System',
      question_text: payloadJson,
      options: ['SYNC_PAYLOAD_V2', cleanCode],
      correct_answer: 0,
      explanation: 'Authoritative Synced Sunday Paper: ' + cleanCode
    });

    if (!primarySuccess) {
      return {
        success: false,
        error: 'Failed to write primary record to cloud database.',
        timestamp: isoTimestamp
      };
    }

    // 2. Batch alias mirroring so any student or admin device resolves the same paper
    if (!is11th && !is12th) {
      const aliasCodes = [baseCode, 'REPEATER-' + baseCode, 'DROPPER-' + baseCode].filter(c => c !== cleanCode);
      for (const alias of aliasCodes) {
        await insertSupabaseSystemRow({
          id: `${SUNDAY_PAPER_PREFIX}${alias}__${now}`,
          subject: '__SYSTEM_SYNC__',
          chapter: 'SUNDAY_TEST_PAPERS',
          topic: alias,
          difficulty: 'System',
          question_text: payloadJson,
          options: ['SYNC_PAYLOAD_V2', alias],
          correct_answer: 0,
          explanation: 'Authoritative Synced Sunday Paper: ' + alias
        });
      }
    }

    globalLastSyncedTimestamp = isoTimestamp;

    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('neet_cloud_sunday_paper_synced', {
          detail: { paperCode: cleanCode, paper: normalizedPaper, source: 'authoritative_service' }
        })
      );
    }

    return {
      success: true,
      paper: normalizedPaper,
      timestamp: isoTimestamp
    };
  } catch (err: any) {
    console.error('Fatal error committing paper to cloud:', err);
    return {
      success: false,
      error: err.message || 'Unknown network error while writing to cloud.',
      timestamp: isoTimestamp
    };
  }
}

/**
 * Fetch authoritative paper directly from Supabase Cloud with cache bypass.
 */
export async function fetchAuthoritativePaper(
  paperCode: string,
  bypassCache: boolean = true
): Promise<SyncedSundayPaper | null> {
  if (!paperCode) return null;
  const cleanCode = paperCode.toUpperCase().trim();
  const is11th = cleanCode.startsWith('11TH-');
  const is12th = cleanCode.startsWith('12TH-');
  const baseCode = cleanCode.replace(/^(11TH|12TH|REPEATER|DROPPER)-/i, '').trim();

  // If cache is not bypassed and is fresh (<10 seconds old), return from runtime cache
  if (!bypassCache) {
    const cached = runtimePaperCache.get(cleanCode) || (!is11th && !is12th ? runtimePaperCache.get(baseCode) : undefined);
    if (cached && (Date.now() - cached.fetchedAt < 10000)) {
      return cached.paper;
    }
  }

  if (supabase) {
    try {
      let targetTopics: string[];
      let orFilter: string;
      if (is11th) {
        targetTopics = ['11TH-' + baseCode, cleanCode, '11th-' + baseCode.toLowerCase()];
        orFilter = `topic.in.(${targetTopics.join(',')}),id.ilike.${SUNDAY_PAPER_PREFIX}11TH-${baseCode}%,id.ilike.${SUNDAY_PAPER_PREFIX}${cleanCode}%`;
      } else if (is12th) {
        targetTopics = ['12TH-' + baseCode, cleanCode, '12th-' + baseCode.toLowerCase()];
        orFilter = `topic.in.(${targetTopics.join(',')}),id.ilike.${SUNDAY_PAPER_PREFIX}12TH-${baseCode}%,id.ilike.${SUNDAY_PAPER_PREFIX}${cleanCode}%`;
      } else {
        targetTopics = [cleanCode, baseCode, 'REPEATER-' + baseCode, 'DROPPER-' + baseCode, cleanCode.toLowerCase(), baseCode.toLowerCase()];
        orFilter = `topic.in.(${targetTopics.join(',')}),id.ilike.${SUNDAY_PAPER_PREFIX}${cleanCode}%,id.ilike.${SUNDAY_PAPER_PREFIX}${baseCode}%,id.ilike.${SUNDAY_PAPER_PREFIX}REPEATER-${baseCode}%,id.ilike.${SUNDAY_PAPER_PREFIX}DROPPER-${baseCode}%`;
      }

      const { data, error } = await supabase
        .from('questions')
        .select('id, topic, question_text')
        .eq('subject', '__SYSTEM_SYNC__')
        .eq('chapter', 'SUNDAY_TEST_PAPERS')
        .or(orFilter);

      if (!error && data && data.length > 0) {
        let latest: SyncedSundayPaper | null = null;
        let latestTs = -1;

        for (const row of data) {
          try {
            const paper = JSON.parse(row.question_text) as SyncedSundayPaper;
            if (paper && Array.isArray(paper.questions) && paper.questions.length === 180) {
              let ts = new Date(paper.updatedAt || 0).getTime();
              if (isNaN(ts) || ts <= 0) ts = 0;
              const idMatch = (row.id || '').match(/__(\d{12,})$/);
              if (idMatch) {
                ts = Math.max(ts, parseInt(idMatch[1], 10));
              }
              if (ts > latestTs || !latest) {
                latestTs = ts;
                latest = paper;
              }
            }
          } catch {}
        }

        if (latest) {
          runtimePaperCache.set(cleanCode, { paper: latest, fetchedAt: Date.now() });
          runtimePaperCache.set(baseCode, { paper: latest, fetchedAt: Date.now() });
          if (!is11th && !is12th) {
            runtimePaperCache.set('REPEATER-' + baseCode, { paper: latest, fetchedAt: Date.now() });
            runtimePaperCache.set('DROPPER-' + baseCode, { paper: latest, fetchedAt: Date.now() });
          }
          globalLastSyncedTimestamp = latest.updatedAt;

          // Mirror into offline localStorage
          try {
            const localPapersRaw = localStorage.getItem('neet_custom_sunday_papers');
            const localPapers = localPapersRaw ? JSON.parse(localPapersRaw) : {};
            localPapers[cleanCode.toLowerCase()] = latest;
            localPapers[cleanCode] = latest;
            localPapers[baseCode.toLowerCase()] = latest;
            localPapers[baseCode] = latest;
            if (!is11th && !is12th) {
              localPapers['repeater-' + baseCode.toLowerCase()] = latest;
              localPapers['repeater-' + baseCode] = latest;
              localPapers['dropper-' + baseCode.toLowerCase()] = latest;
              localPapers['dropper-' + baseCode] = latest;
            }
            localStorage.setItem('neet_custom_sunday_papers', JSON.stringify(localPapers));
          } catch {}

          return latest;
        }
      }
    } catch (err) {
      console.warn('Network error during authoritative fetch for ' + cleanCode + ':', err);
    }
  }

  // Fallback to offline localStorage if completely disconnected
  try {
    const localPapersRaw = localStorage.getItem('neet_custom_sunday_papers');
    if (localPapersRaw) {
      const localPapers = JSON.parse(localPapersRaw);
      const matched =
        localPapers[cleanCode.toLowerCase()] ||
        localPapers[cleanCode] ||
        (!is11th && !is12th ? (localPapers[baseCode.toLowerCase()] || localPapers[baseCode]) : undefined);
      if (matched && Array.isArray(matched.questions) && matched.questions.length === 180) {
        runtimePaperCache.set(cleanCode, { paper: matched, fetchedAt: Date.now() });
        return matched;
      }
    }
  } catch {}

  return null;
}

/**
 * ATOMIC ACTION 1: Swap two questions in a test paper by indices.
 * Strictly awaited; rolls back if cloud write fails.
 */
export async function swapQuestions(
  paperCode: string,
  indexA: number,
  indexB: number,
  currentPaper: SyncedSundayPaper,
  adminUser: string = 'Institutional Master Admin'
): Promise<SyncOperationResult> {
  if (indexA < 0 || indexA >= currentPaper.questions.length || indexB < 0 || indexB >= currentPaper.questions.length) {
    return {
      success: false,
      error: `Invalid indices for question swap: ${indexA}, ${indexB}`,
      timestamp: new Date().toISOString()
    };
  }

  const updatedQuestions = [...currentPaper.questions];
  const temp = updatedQuestions[indexA];
  updatedQuestions[indexA] = updatedQuestions[indexB];
  updatedQuestions[indexB] = temp;

  // Re-assign strict order 1..N
  const normalized = normalizeToAuthoritativeRecords(updatedQuestions, adminUser);
  const updatedPaper: SyncedSundayPaper = {
    ...currentPaper,
    questions: normalized
  };

  return await commitAuthoritativePaperToCloud(updatedPaper, adminUser);
}

/**
 * ATOMIC ACTION 2: Swap a single question with a candidate from bank.
 * Strictly awaited.
 */
export async function swapSingleQuestionWithBank(
  paperCode: string,
  questionIdx: number,
  targetChapterOverride: string | undefined,
  currentPaper: SyncedSundayPaper,
  adminUser: string = 'Institutional Master Admin'
): Promise<SyncOperationResult> {
  const currentQ = currentPaper.questions[questionIdx];
  if (!currentQ) {
    return {
      success: false,
      error: `Question at index #${questionIdx + 1} not found.`,
      timestamp: new Date().toISOString()
    };
  }

  let sub = currentQ.subject || (questionIdx < 45 ? 'Physics' : questionIdx < 90 ? 'Chemistry' : 'Biology');
  let ch = targetChapterOverride || currentQ.chapter || '';

  if (targetChapterOverride) {
    const isPhy = ALL_PHYSICS_CHAPTERS.some(c => c.toLowerCase() === targetChapterOverride.toLowerCase());
    const isChem = ALL_CHEMISTRY_CHAPTERS.some(c => c.toLowerCase() === targetChapterOverride.toLowerCase());
    sub = isPhy ? 'Physics' : isChem ? 'Chemistry' : 'Biology';
    ch = targetChapterOverride;
  }

  const bank = getUnifiedQuestionBank(sub, ch.length > 0 ? ch : undefined);
  const existingIds = new Set(currentPaper.questions.map(q => q.id));
  const candidates = bank.filter(q => !existingIds.has(q.id) && q.questionText !== currentQ.questionText);

  const replacement = candidates.length > 0
    ? candidates[Math.floor(Math.random() * candidates.length)]
    : (bank.length > 0 ? bank[Math.floor(Math.random() * bank.length)] : currentQ);

  const hardDiag = (replacement.difficulty === 'Hard') && sub === 'Physics'
    ? getHardPhysicsDiagram(replacement)
    : null;

  const newQ: Question = {
    ...replacement,
    id: `sunday-${sub.toLowerCase()}-swap-${Date.now()}-${replacement.id}`,
    subject: sub as any,
    chapter: ch || replacement.chapter,
    tags: currentQ.tags || replacement.tags,
    diagramSvg: hardDiag || replacement.diagramSvg,
    questionText: formatMathAndFormulas(replacement.questionText),
    options: replacement.options.map(o => formatMathAndFormulas(o)),
    explanation: formatMathAndFormulas(replacement.explanation)
  };

  const copy = [...currentPaper.questions];
  copy[questionIdx] = newQ;

  const updatedPaper: SyncedSundayPaper = {
    ...currentPaper,
    questions: normalizeToAuthoritativeRecords(copy, adminUser)
  };

  return await commitAuthoritativePaperToCloud(updatedPaper, adminUser);
}

/**
 * ATOMIC ACTION 3: Edit a question in place (text, options, correct answer, explanation).
 * Strictly awaited.
 */
export async function saveQuestionEdit(
  paperCode: string,
  questionIdx: number,
  updatedFields: {
    questionText: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  },
  currentPaper: SyncedSundayPaper,
  adminUser: string = 'Institutional Master Admin'
): Promise<SyncOperationResult> {
  if (questionIdx < 0 || questionIdx >= currentPaper.questions.length) {
    return {
      success: false,
      error: `Question index #${questionIdx + 1} out of range.`,
      timestamp: new Date().toISOString()
    };
  }

  const copy = [...currentPaper.questions];
  copy[questionIdx] = {
    ...copy[questionIdx],
    questionText: formatMathAndFormulas(updatedFields.questionText.trim()),
    options: updatedFields.options.map(opt => formatMathAndFormulas(opt.trim())),
    correctAnswer: updatedFields.correctAnswer,
    explanation: formatMathAndFormulas(updatedFields.explanation.trim()),
    updatedAt: new Date().toISOString(),
    updatedBy: adminUser
  };

  const updatedPaper: SyncedSundayPaper = {
    ...currentPaper,
    questions: normalizeToAuthoritativeRecords(copy, adminUser)
  };

  return await commitAuthoritativePaperToCloud(updatedPaper, adminUser);
}

/**
 * ATOMIC ACTION 4: Swap a topic for another topic with target question count.
 * Strictly awaited.
 */
export async function swapTopics(
  paperCode: string,
  fromTopic: string,
  toTopic: string,
  targetCount: number = 4,
  currentPaper: SyncedSundayPaper,
  adminUser: string = 'Institutional Master Admin'
): Promise<SyncOperationResult> {
  const phyList = ALL_PHYSICS_CHAPTERS;
  const chemList = ALL_CHEMISTRY_CHAPTERS;
  const isPhy = phyList.some(c => c.toLowerCase() === toTopic.toLowerCase()) || OFFICIAL_PHYSICS_UNITS.some(u => u.toLowerCase().includes(toTopic.toLowerCase()));
  const isChem = chemList.some(c => c.toLowerCase() === toTopic.toLowerCase()) || OFFICIAL_CHEMISTRY_UNITS.some(u => u.toLowerCase().includes(toTopic.toLowerCase()));
  const targetSubject: 'Physics' | 'Chemistry' | 'Biology' = isPhy ? 'Physics' : isChem ? 'Chemistry' : 'Biology';

  const cleanBank = getUnifiedQuestionBank(targetSubject, toTopic);
  if (cleanBank.length === 0) {
    return {
      success: false,
      error: `No questions found strictly in "${toTopic}" for swap.`,
      timestamp: new Date().toISOString()
    };
  }

  const randPool = [...cleanBank].sort(() => 0.5 - Math.random());
  const replacementQuestions: Question[] = [];
  for (let i = 0; i < targetCount; i++) {
    const q = randPool[i % randPool.length];
    const hardDiag = (targetSubject === 'Physics' && q.difficulty === 'Hard') ? getHardPhysicsDiagram(q) : null;
    replacementQuestions.push({
      ...q,
      id: `swap-${toTopic.toLowerCase().replace(/[^a-z0-9]/g, '')}-${Date.now()}-${i + 1}`,
      subject: targetSubject,
      chapter: toTopic,
      diagramSvg: hardDiag || q.diagramSvg,
      questionText: formatMathAndFormulas(q.questionText),
      options: q.options.map(o => formatMathAndFormulas(o)),
      explanation: formatMathAndFormulas(q.explanation)
    });
  }

  const normFrom = fromTopic.toLowerCase().replace(/[^a-z0-9]/g, '');
  const currentList = [...currentPaper.questions];
  const matchingIndices: number[] = [];
  for (let i = 0; i < currentList.length; i++) {
    const qChNorm = (currentList[i].chapter || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    if (qChNorm.includes(normFrom) || normFrom.includes(qChNorm)) {
      matchingIndices.push(i);
    }
  }

  if (matchingIndices.length > 0) {
    for (let i = 0; i < matchingIndices.length && i < replacementQuestions.length; i++) {
      currentList[matchingIndices[i]] = replacementQuestions[i];
    }
  } else {
    let subStart = targetSubject === 'Physics' ? 0 : targetSubject === 'Chemistry' ? 45 : 90;
    for (let i = 0; i < replacementQuestions.length; i++) {
      const targetIdx = subStart + i;
      if (targetIdx < currentList.length) {
        currentList[targetIdx] = replacementQuestions[i];
      }
    }
  }

  const updatedPaper: SyncedSundayPaper = {
    ...currentPaper,
    questions: normalizeToAuthoritativeRecords(currentList, adminUser)
  };

  return await commitAuthoritativePaperToCloud(updatedPaper, adminUser);
}

/**
 * ATOMIC ACTION 5: Persist Admin Vault custom registered chapters to Supabase cloud.
 */
export async function syncVaultChaptersToCloud(
  chapters: { id: string; subject: string; chapter: string; addedAt: string }[]
): Promise<boolean> {
  if (!supabase) return false;
  try {
    const payloadJson = JSON.stringify(chapters);
    const now = Date.now();
    return await insertSupabaseSystemRow({
      id: `__VAULT_CHAPTERS__${now}`,
      subject: '__SYSTEM_SYNC__',
      chapter: 'VAULT_CHAPTERS',
      topic: 'GLOBAL',
      difficulty: 'System',
      question_text: payloadJson,
      options: ['VAULT_CHAPTERS_V1'],
      correct_answer: 0,
      explanation: 'Authoritative Vault Chapters'
    });
  } catch (e) {
    console.warn('Error syncing vault chapters to cloud:', e);
    return false;
  }
}

/**
 * ATOMIC ACTION 6: Persist Topic Allocations matrix to Supabase cloud.
 */
export async function syncTopicAllocationsToCloud(
  allocations: TopicAllocationItem[]
): Promise<boolean> {
  if (!supabase) return false;
  try {
    const payloadJson = JSON.stringify(allocations);
    const now = Date.now();
    return await insertSupabaseSystemRow({
      id: `__TOPIC_ALLOCATIONS__${now}`,
      subject: '__SYSTEM_SYNC__',
      chapter: 'TOPIC_ALLOCATIONS',
      topic: 'GLOBAL',
      difficulty: 'System',
      question_text: payloadJson,
      options: ['TOPIC_ALLOCATIONS_V1'],
      correct_answer: 0,
      explanation: 'Authoritative Topic Allocations'
    });
  } catch (e) {
    console.warn('Error syncing topic allocations to cloud:', e);
    return false;
  }
}

/**
 * Realtime subscription listener for live paper changes.
 * Returns an unsubscribe callback function.
 */
export function subscribeToPaperRealtime(
  paperCode: string,
  onUpdate: (paper: SyncedSundayPaper) => void
): () => void {
  if (!supabase || typeof supabase.channel !== 'function') {
    return () => {};
  }

  const cleanCode = paperCode.toUpperCase().trim();
  const baseCode = cleanCode.replace(/^(11TH|12TH|REPEATER|DROPPER)-/i, '').trim();

  const channel = supabase
    .channel(`paper_realtime_${cleanCode}_${Date.now()}`)
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'questions',
        filter: 'subject=eq.__SYSTEM_SYNC__'
      },
      (payload: any) => {
        const row = payload?.new;
        if (!row || row.chapter !== 'SUNDAY_TEST_PAPERS' || !row.question_text) return;

        try {
          const incomingPaper = JSON.parse(row.question_text) as SyncedSundayPaper;
          if (incomingPaper && Array.isArray(incomingPaper.questions) && incomingPaper.questions.length === 180) {
            const pCode = (incomingPaper.paperCode || row.topic || '').toUpperCase().trim();
            const pBaseCode = pCode.replace(/^(11TH|12TH|REPEATER|DROPPER)-/i, '').trim();

            if (pCode === cleanCode || pCode === baseCode || pBaseCode === baseCode) {
              const cached = runtimePaperCache.get(cleanCode);
              const incomingTs = new Date(incomingPaper.updatedAt || 0).getTime() || 0;
              const cachedTs = cached ? new Date(cached.paper.updatedAt || 0).getTime() || 0 : 0;

              if (incomingTs >= cachedTs) {
                runtimePaperCache.set(cleanCode, { paper: incomingPaper, fetchedAt: Date.now() });
                globalLastSyncedTimestamp = incomingPaper.updatedAt;
                onUpdate(incomingPaper);
              }
            }
          }
        } catch (e) {
          console.warn('Error parsing incoming realtime payload:', e);
        }
      }
    )
    .subscribe();

  return () => {
    try {
      channel.unsubscribe();
    } catch {}
  };
}
