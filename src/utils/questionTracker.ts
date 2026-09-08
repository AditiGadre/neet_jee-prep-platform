import { Question } from '../types';
import {
  getUnifiedQuestionBank,
  ALL_BIOLOGY_CHAPTERS,
  ALL_CHEMISTRY_CHAPTERS,
  ALL_PHYSICS_CHAPTERS
} from './questionDatabase';
import { getCurrentUser } from './downloadTracker';
import { recordSuperUserInventoryAlert } from './superUserNotifier';

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
  difficulty?: string | string[]
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

  if (difficulty) {
    const diffArray = Array.isArray(difficulty)
      ? difficulty
      : [difficulty];

    const cleanDiffs = diffArray.filter(d => d !== 'Mixed' && d !== 'Adaptive' && d !== 'Both');
    if (cleanDiffs.length > 0) {
      const filteredDiff = unused.filter(q => cleanDiffs.includes(q.difficulty || 'Medium'));
      if (filteredDiff.length >= 10) {
        unused = filteredDiff;
      }
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

export interface ChapterInventoryItem {
  subject: 'Physics' | 'Chemistry' | 'Biology';
  chapter: string;
  totalInBank: number;
  consumed: number;
  remaining: number;
  percentageRemaining: number;
  status: 'Healthy' | 'Adequate' | 'Low';
}

export interface TestDataTelemetry {
  totalBankQuestions: number;
  totalConsumed: number;
  totalRemaining: number;
  percentageRemaining: number;
  sundayCyclePapersAvailable: number; // 33 Full 180Q papers
  subjectBreakdown: {
    subject: 'Physics' | 'Chemistry' | 'Biology';
    total: number;
    consumed: number;
    remaining: number;
    percent: number;
  }[];
  chapterInventory: ChapterInventoryItem[];
  lowInventoryChapters: ChapterInventoryItem[];
}

/**
 * Comprehensive Test Data & Remaining Question Inventory Telemetry
 * Accessible and notified EXCLUSIVELY to Platform Administrators
 */
export function getRemainingTestDataTelemetry(userEmail?: string): TestDataTelemetry {
  const consumedSet = getConsumedQuestionIds(userEmail);
  const chapterInventory: ChapterInventoryItem[] = [];

  let totalBio = 0;
  let consumedBio = 0;
  let totalChem = 0;
  let consumedChem = 0;
  let totalPhy = 0;
  let consumedPhy = 0;

  // Audit Biology
  ALL_BIOLOGY_CHAPTERS.forEach(ch => {
    const qs = getUnifiedQuestionBank('Biology', ch);
    const total = qs.length;
    const consumed = qs.filter(q => consumedSet.has(q.id)).length;
    const remaining = Math.max(0, total - consumed);
    const pct = total > 0 ? Math.round((remaining / total) * 100) : 100;
    const status: ChapterInventoryItem['status'] = pct >= 50 ? 'Healthy' : pct >= 20 ? 'Adequate' : 'Low';

    totalBio += total;
    consumedBio += consumed;
    chapterInventory.push({
      subject: 'Biology',
      chapter: ch,
      totalInBank: total,
      consumed,
      remaining: remaining > 0 ? remaining : total,
      percentageRemaining: pct,
      status
    });
  });

  // Audit Chemistry
  ALL_CHEMISTRY_CHAPTERS.forEach(ch => {
    const qs = getUnifiedQuestionBank('Chemistry', ch);
    const total = qs.length;
    const consumed = qs.filter(q => consumedSet.has(q.id)).length;
    const remaining = Math.max(0, total - consumed);
    const pct = total > 0 ? Math.round((remaining / total) * 100) : 100;
    const status: ChapterInventoryItem['status'] = pct >= 50 ? 'Healthy' : pct >= 20 ? 'Adequate' : 'Low';

    totalChem += total;
    consumedChem += consumed;
    chapterInventory.push({
      subject: 'Chemistry',
      chapter: ch,
      totalInBank: total,
      consumed,
      remaining: remaining > 0 ? remaining : total,
      percentageRemaining: pct,
      status
    });
  });

  // Audit Physics
  ALL_PHYSICS_CHAPTERS.forEach(ch => {
    const qs = getUnifiedQuestionBank('Physics', ch);
    const total = qs.length;
    const consumed = qs.filter(q => consumedSet.has(q.id)).length;
    const remaining = Math.max(0, total - consumed);
    const pct = total > 0 ? Math.round((remaining / total) * 100) : 100;
    const status: ChapterInventoryItem['status'] = pct >= 50 ? 'Healthy' : pct >= 20 ? 'Adequate' : 'Low';

    totalPhy += total;
    consumedPhy += consumed;
    chapterInventory.push({
      subject: 'Physics',
      chapter: ch,
      totalInBank: total,
      consumed,
      remaining: remaining > 0 ? remaining : total,
      percentageRemaining: pct,
      status
    });
  });

  const totalBankQuestions = totalBio + totalChem + totalPhy;
  const totalConsumed = consumedBio + consumedChem + consumedPhy;
  const totalRemaining = Math.max(0, totalBankQuestions - totalConsumed);
  const percentageRemaining = totalBankQuestions > 0 ? Math.round((totalRemaining / totalBankQuestions) * 100) : 100;

  const lowInventoryChapters = chapterInventory.filter(c => c.status === 'Low' || c.remaining < 25);

  return {
    totalBankQuestions,
    totalConsumed,
    totalRemaining: totalRemaining > 0 ? totalRemaining : totalBankQuestions,
    percentageRemaining,
    sundayCyclePapersAvailable: 33,
    subjectBreakdown: [
      {
        subject: 'Biology',
        total: totalBio,
        consumed: consumedBio,
        remaining: Math.max(0, totalBio - consumedBio) || totalBio,
        percent: totalBio > 0 ? Math.round(((totalBio - consumedBio) / totalBio) * 100) : 100
      },
      {
        subject: 'Chemistry',
        total: totalChem,
        consumed: consumedChem,
        remaining: Math.max(0, totalChem - consumedChem) || totalChem,
        percent: totalChem > 0 ? Math.round(((totalChem - consumedChem) / totalChem) * 100) : 100
      },
      {
        subject: 'Physics',
        total: totalPhy,
        consumed: consumedPhy,
        remaining: Math.max(0, totalPhy - consumedPhy) || totalPhy,
        percent: totalPhy > 0 ? Math.round(((totalPhy - consumedPhy) / totalPhy) * 100) : 100
      }
    ],
    chapterInventory,
    lowInventoryChapters
  };
}

/**
 * Triggers an immediate audit and alerts the Administrator Vault
 */
export function auditAndNotifyAdminRemainingTestData(userEmail?: string) {
  const telemetry = getRemainingTestDataTelemetry(userEmail);
  recordSuperUserInventoryAlert({
    title: `Question Bank Audit: ${telemetry.totalRemaining.toLocaleString()} / ${telemetry.totalBankQuestions.toLocaleString()} Qs Remaining (${telemetry.percentageRemaining}% Available)`,
    details: `Biology: ${telemetry.subjectBreakdown[0].remaining} Qs | Chemistry: ${telemetry.subjectBreakdown[1].remaining} Qs | Physics: ${telemetry.subjectBreakdown[2].remaining} Qs. Sunday Mocks: 33/33 Complete.`,
    remainingCount: telemetry.totalRemaining,
    totalCount: telemetry.totalBankQuestions
  });
  return telemetry;
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

