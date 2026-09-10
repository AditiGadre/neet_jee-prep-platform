import { Question } from '../types';
import { formatMathAndFormulas } from './mathFormatter';
import { getHardPhysicsDiagram } from './diagramEngine';

const LOOP_STORAGE_KEY = 'neet_question_loop_cursors';

interface LoopCursorStore {
  [key: string]: number; // key -> current index offset
}

function getCursorStore(): LoopCursorStore {
  try {
    const raw = localStorage.getItem(LOOP_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveCursorStore(store: LoopCursorStore) {
  try {
    localStorage.setItem(LOOP_STORAGE_KEY, JSON.stringify(store));
  } catch (err) {
    console.warn('Failed to save loop cursors:', err);
  }
}

function buildKey(subject: string, topicKey: string = 'all'): string {
  const normSub = subject.toLowerCase().trim();
  const normTopic = topicKey.toLowerCase().replace(/[^a-z0-9]/g, '_');
  return `${normSub}__${normTopic}`;
}

/**
 * Returns the current cursor index offset for a subject and topic
 */
export function getLoopCursor(subject: string, topicKey: string = 'all'): number {
  const store = getCursorStore();
  const key = buildKey(subject, topicKey);
  return typeof store[key] === 'number' ? store[key] : 0;
}

/**
 * Updates the cursor offset for a subject and topic
 */
export function setLoopCursor(subject: string, topicKey: string = 'all', nextIndex: number): void {
  const store = getCursorStore();
  const key = buildKey(subject, topicKey);
  store[key] = Math.max(0, nextIndex);
  saveCursorStore(store);
}

/**
 * Resets the cursor offset to 0
 */
export function resetLoopCursor(subject: string, topicKey: string = 'all'): void {
  setLoopCursor(subject, topicKey, 0);
}

/**
 * Retrieves a sequential slice of questions from the pool using a round-robin cursor.
 * - Test 1 takes items 0 to count-1.
 * - Test 2 takes items count to 2*count-1.
 * - When items are exhausted, it wraps back to 0 so all data is used in a continuous loop.
 * - If new data is added, pool.length expands and the loop seamlessly incorporates the new data!
 * - Strictly enforces diagram uniqueness: zero duplicate diagrams in the same batch.
 */
export function getSequentialLoopQuestions(
  subject: string,
  pool: Question[],
  count: number = 45,
  topicKey: string = 'all',
  advanceCursor: boolean = true,
  usedDiagramsTracker?: Set<string>
): Question[] {
  if (!pool || pool.length === 0) return [];

  const N = pool.length;
  const currentOffset = getLoopCursor(subject, topicKey) % N;
  const picked: Question[] = [];
  const localUsedDiagrams = usedDiagramsTracker || new Set<string>();

  for (let i = 0; i < count; i++) {
    const rawQ = pool[(currentOffset + i) % N];

    // Check diagram: if question already has a diagram or hard physics diagram, ensure NO duplicate in this paper
    let diagSvg: string | undefined = undefined;
    if (rawQ.diagramSvg) {
      if (!localUsedDiagrams.has(rawQ.diagramSvg)) {
        diagSvg = rawQ.diagramSvg;
        localUsedDiagrams.add(diagSvg);
      }
    } else if (rawQ.subject === 'Physics' && (rawQ.difficulty === 'Hard' || (rawQ.difficulty as string) === 'hard')) {
      const hardDiag = getHardPhysicsDiagram(rawQ, localUsedDiagrams);
      if (hardDiag) {
        diagSvg = hardDiag;
      }
    }

    picked.push({
      ...rawQ,
      id: `loop-${subject.toLowerCase()}-${(currentOffset + i) % N}-${rawQ.id}`,
      subject: (rawQ.subject || subject) as any,
      diagramSvg: diagSvg,
      questionText: formatMathAndFormulas(rawQ.questionText),
      options: rawQ.options.map(o => formatMathAndFormulas(o)),
      explanation: rawQ.explanation ? formatMathAndFormulas(rawQ.explanation) : ''
    });
  }

  if (advanceCursor) {
    const nextOffset = (currentOffset + count) % N;
    setLoopCursor(subject, topicKey, nextOffset);
  }

  return picked;
}

/**
 * Returns statistics about the circular queue for UI badges
 */
export function getLoopStats(
  subject: string,
  topicKey: string = 'all',
  poolLength: number
): {
  currentCursor: number;
  totalQuestions: number;
  batchNumber: number;
  remainingInCurrentCycle: number;
} {
  if (poolLength === 0) {
    return { currentCursor: 0, totalQuestions: 0, batchNumber: 1, remainingInCurrentCycle: 0 };
  }

  const cursor = getLoopCursor(subject, topicKey) % poolLength;
  const batchNumber = Math.floor(cursor / 45) + 1;
  const remainingInCurrentCycle = Math.max(0, poolLength - cursor);

  return {
    currentCursor: cursor,
    totalQuestions: poolLength,
    batchNumber,
    remainingInCurrentCycle
  };
}
