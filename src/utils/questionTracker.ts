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
 * Get purely unused, unattempted questions from the database for a subject & chapter
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

  if (difficulty && difficulty !== 'Mixed' && difficulty !== 'Adaptive') {
    const filteredDiff = unused.filter(q => q.difficulty === difficulty);
    if (filteredDiff.length >= 10) {
      unused = filteredDiff;
    }
  }

  const totalInBank = allInChapter.length;
  const remainingUnused = unused.length;
  const isExhausted = remainingUnused === 0;

  return {
    unusedQuestions: unused,
    totalInBank,
    remainingUnused,
    isExhausted
  };
}

/**
 * Trigger explicit notification when question pool for a chapter/subject is exhausted
 */
export function notifyDataExhaustion(
  subject: string,
  chapter: string,
  totalInBank: number,
  requestedCount: number = 45
) {
  const user = getCurrentUser();
  const userName = user?.name || user?.user_metadata?.name || 'Enrolled Student';
  const userPhone = user?.phone || user?.user_metadata?.phone || '+91 9876543210';
  const userEmail = user?.email || 'student.target2026@neetprep.in';

  // 1. Notify Super User Admin Vault
  recordSuperUserNotification({
    contentTitle: `Question Pool Exhausted: ${subject} - ${chapter} (All ${totalInBank} Qs Completed by ${userName})`,
    category: 'Other',
    fileSize: '0.1 MB',
    subject
  });

  // 2. Broadcast student UI alert event
  window.dispatchEvent(
    new CustomEvent('neet_data_exhaustion_alert', {
      detail: {
        subject,
        chapter,
        totalInBank,
        requestedCount,
        studentName: userName,
        studentPhone: userPhone,
        studentEmail: userEmail,
        message: `All ${totalInBank} unique questions in "${chapter}" have been completed! No repeat questions will be served.`
      }
    })
  );
}

/**
 * Reset consumption history for a chapter or all chapters so student can practice again if desired
 */
export function resetChapterConsumption(subject?: string, chapter?: string, userEmail?: string) {
  try {
    const key = getUserStorageKey(userEmail);
    if (!subject && !chapter) {
      // Clear all
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
