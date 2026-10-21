import { SyncedSundayPaper } from '../utils/cloudSyncManager';
import { getCanonicalPaperCode, normalizeToAuthoritativeRecords } from './authoritativeCloudService';
import {
  SUNDAY_11TH_TRACK1_TESTS,
  SUNDAY_11TH_TRACK2_TESTS,
  SUNDAY_11TH_PLANNER_TESTS,
  PLANNER_12TH_TESTS,
  SUNDAY_DROPPER_PLANNER_TESTS,
  SUNDAY_DROPPER_TRACK2_TESTS,
  SUNDAY_DROPPER_PC_TESTS,
  generateSundayTestQuestions
} from '../data/sundayPlannerTests';

/**
 * Returns the official, deterministic base 180-question Sunday test paper.
 * Guarantees 100% uniformity across all PCs and client sessions when no custom
 * cloud revision has been committed yet.
 */
export function getOfficialBaseSundayPaper(paperCode: string): SyncedSundayPaper {
  const canonicalCode = getCanonicalPaperCode(paperCode);
  const is11th = canonicalCode.includes('11TH');
  const is12th = canonicalCode.includes('12TH');
  const pureCode = canonicalCode.replace(/^(11TH|12TH|REPEATER|DROPPER)-/i, '').trim().toUpperCase();

  const planner = is11th
    ? (SUNDAY_11TH_TRACK1_TESTS.find(t => t.code.toUpperCase() === pureCode || t.id.toUpperCase() === pureCode) ||
       SUNDAY_11TH_TRACK2_TESTS.find(t => t.code.toUpperCase() === pureCode || t.id.toUpperCase() === pureCode) ||
       SUNDAY_11TH_PLANNER_TESTS[0])
    : is12th
    ? (PLANNER_12TH_TESTS.find(t => t.code.toUpperCase() === pureCode || t.id.toUpperCase() === pureCode) || PLANNER_12TH_TESTS[0])
    : (SUNDAY_DROPPER_PLANNER_TESTS.find(t => t.code.toUpperCase() === pureCode || t.id.toUpperCase() === pureCode) ||
       SUNDAY_DROPPER_TRACK2_TESTS.find(t => t.code.toUpperCase() === pureCode || t.id.toUpperCase() === pureCode) ||
       SUNDAY_DROPPER_PC_TESTS.find(t => t.code.toUpperCase() === pureCode || t.id.toUpperCase() === pureCode) ||
       SUNDAY_DROPPER_PLANNER_TESTS[0]);

  const batch: 'repeater' | '12th' | '11th' = is11th ? '11th' : is12th ? '12th' : 'repeater';
  const questions = generateSundayTestQuestions(planner, undefined, false, batch);

  return {
    paperCode: canonicalCode,
    revision: 1,
    questions: normalizeToAuthoritativeRecords(questions, 'Official Master Default'),
    customChapters: {
      physics: [planner.physicsUnit],
      chemistry: [planner.chemistryUnit],
      biology: planner.code.startsWith('PC-') ? [] : [`[Botany] ${planner.botanyBlock}`, `[Zoology] ${planner.zoologyBlock}`]
    },
    testTitle: planner.title || `${canonicalCode}: Chapterwise Test`,
    updatedAt: new Date(1788000000000).toISOString(),
    publishedBy: 'Institutional Master Admin'
  };
}
