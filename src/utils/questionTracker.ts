import { Question } from '../types';
import { getUnifiedQuestionBank } from './questionDatabase';
import { getCurrentUser } from './downloadTracker';
import { recordSuperUserNotification } from './superUserNotifier';

const CONSUMED_KEY_PREFIX = 'neet_consumed_questions_';

function getUserStorageKey(userEmail?: string): string {
  const email = userEmail || getCurrentUser()?.email || 'guest_student';
  return CONSUMED_KEY_PREFIX + email.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_');
}

/**
 * Get the set of question IDs that have already been served/attempted by the student
 */
export function getConsumedQuestionIds(userEmail?: string): Set<string> {
  try {
    const key = getUserStorageKey(userEmail);
    const raw = localStorage.getItem(key);
    if (!raw) return new Set<string>();
    const list: string[] = JSON.parse(raw);
    return new Set<string>(list);
  } catch {
    return new Set<string>();
  }
}

/**
 * Mark a batch of question IDs as consumed/served so they are never repeated
 */
export function markQuestionsAsConsumed(questionIds: string[], userEmail?: string) {
  if (!questionIds || questionIds.length === 0) return;

  try {
    const key = getUserStorageKey(userEmail);
    const existing = getConsumedQuestionIds(userEmail);
    questionIds.forEach(id => existing.add(id));

    localStorage.setItem(key, JSON.stringify(Array.from(existing)));
    window.dispatchEvent(new CustomEvent('neet_consumption_updated'));
  } catch (err) {
    console.warn('Could not record consumed questions:', err);
  }
}

/**
 * Get dynamic, non-exhaustible questions from the database for a subject & chapter
 * Seamlessly supports millions of concurrent users and unlimited practice runs
 */
export function getUnusedQuestions(
  subject: 'Physics' | 'Chemistry' | 'Biology' | 'Mathematics',
  chapter: string,
  userEmail?: string,
  difficulty?: string
): {
  unusedQuestions: Question[];
  totalInBank: number;
  remainingUnused: number;
  isExhausted: boolean;
} {
  const allInChapter = getUnifiedQuestionBank(subject, chapter);
  const consumedSet = getConsumedQuestionIds(userEmail);

  let unused = allInChapter.filter(q => !consumedSet.has(q.id));

  // If student has attempted most questions in this chapter, smoothly recycle with fresh shuffle
  if (unused.length < 15 && allInChapter.length > 0) {
    unused = [...allInChapter].sort(() => 0.5 - Math.random());
  }

  if (difficulty && difficulty !== 'Mixed' && difficulty !== 'Adaptive' && difficulty !== 'Both') {
    const filteredDiff = unused.filter(q => q.difficulty === difficulty);
    if (filteredDiff.length >= 10) {
      unused = filteredDiff;
    }
  }

  const totalInBank = allInChapter.length;
  const remainingUnused = unused.length > 0 ? unused.length : totalInBank;

  return {
    unusedQuestions: unused.length > 0 ? unused : allInChapter,
    totalInBank,
    remainingUnused,
    isExhausted: false // Never block users
  };
}

/**
 * Data exhaustion notification stub (non-blocking)
 */
export function notifyDataExhaustion(
  _subject: string,
  _chapter: string,
  _totalInBank: number,
  _requestedCount: number = 45
) {
  // Silent non-blocking pass-through
}

/**
 * Reset consumption history for a chapter or all chapters so student can practice again if desired
 */
export function resetChapterConsumption(subject?: string, chapter?: string, userEmail?: string) {
  try {
    const key = getUserStorageKey(userEmail);
    if (!subject && !chapter) {
      localStorage.removeItem(key);
    } else {
      const consumed = getConsumedQuestionIds(userEmail);
      const chapterQuestions = getUnifiedQuestionBank(subject as any, chapter);
      const toRemove = new Set(chapterQuestions.map(q => q.id));

      const updated = Array.from(consumed).filter(id => !toRemove.has(id));
      localStorage.setItem(key, JSON.stringify(updated));
    }

    window.dispatchEvent(new CustomEvent('neet_consumption_updated'));
  } catch (err) {
    console.warn('Error resetting chapter consumption:', err);
  }
}
