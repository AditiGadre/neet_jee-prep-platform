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
  usedDiagramsTracker?: Set<string>,
  fallbackPool?: Question[],
  excludeSignatures?: Set<string>
): Question[] {
  if ((!pool || pool.length === 0) && (!fallbackPool || fallbackPool.length === 0)) return [];

  const N = pool && pool.length > 0 ? pool.length : 0;
  const currentOffset = N > 0 ? getLoopCursor(subject, topicKey) % N : 0;
  const picked: Question[] = [];
  const pickedSignatures = new Set<string>();
  const localUsedDiagrams = usedDiagramsTracker || new Set<string>();

  let examined = 0;
  let cursor = currentOffset;

  // 1. First pass: Pick unique questions from primary pool
  while (picked.length < count && examined < N) {
    const rawQ = pool[cursor % N];
    cursor++;
    examined++;

    const textSig = (rawQ.questionText || '').trim().toLowerCase();
    const idSig = rawQ.id;

    if (pickedSignatures.has(textSig) || (idSig && pickedSignatures.has(idSig))) {
      continue;
    }
    if (excludeSignatures && (excludeSignatures.has(textSig) || (idSig && excludeSignatures.has(idSig)))) {
      continue;
    }

    pickedSignatures.add(textSig);
    if (idSig) pickedSignatures.add(idSig);

    let diagSvg: string | undefined = undefined;
    if (rawQ.diagramSvg) {
      if (!localUsedDiagrams.has(rawQ.diagramSvg)) {
        diagSvg = rawQ.diagramSvg;
        localUsedDiagrams.add(diagSvg);
      }
    } else if (rawQ.subject === 'Physics') {
      const hardDiag = getHardPhysicsDiagram(rawQ, localUsedDiagrams);
      if (hardDiag) {
        diagSvg = hardDiag;
      }
    }

    picked.push({
      ...rawQ,
      id: `loop-${subject.toLowerCase()}-${picked.length}-${rawQ.id}`,
      subject: (rawQ.subject || subject) as any,
      difficulty: 'Hard' as const,
      diagramSvg: diagSvg,
      questionText: formatMathAndFormulas(rawQ.questionText),
      options: rawQ.options.map(o => formatMathAndFormulas(o)),
      explanation: rawQ.explanation ? formatMathAndFormulas(rawQ.explanation) : ''
    });
  }

  // 2. Second pass: If pool didn't have enough unique questions, draw from fallbackPool
  if (picked.length < count && fallbackPool && fallbackPool.length > 0) {
    for (let j = 0; j < fallbackPool.length && picked.length < count; j++) {
      const rawQ = fallbackPool[j];
      const textSig = (rawQ.questionText || '').trim().toLowerCase();
      const idSig = rawQ.id;

      if (pickedSignatures.has(textSig) || (idSig && pickedSignatures.has(idSig))) {
        continue;
      }
      if (excludeSignatures && (excludeSignatures.has(textSig) || (idSig && excludeSignatures.has(idSig)))) {
        continue;
      }

      pickedSignatures.add(textSig);
      if (idSig) pickedSignatures.add(idSig);

      let diagSvg: string | undefined = undefined;
      if (rawQ.diagramSvg) {
        if (!localUsedDiagrams.has(rawQ.diagramSvg)) {
          diagSvg = rawQ.diagramSvg;
          localUsedDiagrams.add(diagSvg);
        }
      } else if (rawQ.subject === 'Physics') {
        const hardDiag = getHardPhysicsDiagram(rawQ, localUsedDiagrams);
        if (hardDiag) {
          diagSvg = hardDiag;
        }
      }

      picked.push({
        ...rawQ,
        id: `loop-${subject.toLowerCase()}-${picked.length}-${rawQ.id}`,
        subject: (rawQ.subject || subject) as any,
        difficulty: 'Hard' as const,
        diagramSvg: diagSvg,
        questionText: formatMathAndFormulas(rawQ.questionText),
        options: rawQ.options.map(o => formatMathAndFormulas(o)),
        explanation: rawQ.explanation ? formatMathAndFormulas(rawQ.explanation) : ''
      });
    }
  }

  if (advanceCursor && N > 0) {
    setLoopCursor(subject, topicKey, cursor % N);
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
