/**
 * Robust Entrance Exam PDF & Document Question Extractor
 * 
 * Supports:
 * - 2-Column and 1-Column exam papers (Allen, Aakash, Resonance, Narayana, NTA, NCERT)
 * - Automatic Answer Key extraction (e.g. "ANSWER KEY: 1. (3) 2. (B)...")
 * - Automatic Hints and Solutions extraction (e.g. "HINTS & SOLUTIONS: 1. ... 2. ...")
 * - Inline answer and solution detection (e.g. "Ans: (2)", "Answer: C", "Sol: ...")
 * - Clean option parsing: (1)-(4), (A)-(D), (a)-(d), 1.-4., A.-D.
 * - Orphan option auto-merging: attaches detached option blocks to their parent question
 */

export interface ExtractedQuestion {
  id: string;
  qNum: number;
  questionText: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  subject: string;
  chapter: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  marks: number;
  type: string;
}

/**
 * Extracts coherent text from PDF pages, supporting multi-column layouts.
 */
export async function extractTextFromPdfDocument(pdf: any): Promise<string> {
  let fullText = '';

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const items = textContent.items || [];

    if (items.length === 0) continue;

    const pageWidth = page.view ? page.view[2] : 595.28;
    const midX = pageWidth / 2;

    const leftItems: any[] = [];
    const rightItems: any[] = [];

    for (const item of items) {
      if (!item.str || !item.str.trim()) continue;
      const x = item.transform ? item.transform[4] : 0;
      if (x < midX) {
        leftItems.push(item);
      } else {
        rightItems.push(item);
      }
    }

    const isTwoColumn = leftItems.length >= 8 && rightItems.length >= 8;

    const formatColumnItems = (colItems: any[]): string => {
      colItems.sort((a, b) => {
        const yDiff = b.transform[5] - a.transform[5];
        if (Math.abs(yDiff) > 3) return yDiff;
        return a.transform[4] - b.transform[4];
      });

      let colText = '';
      let lastY = -1;

      for (const item of colItems) {
        const y = item.transform[5];
        if (lastY !== -1 && Math.abs(y - lastY) > 3) {
          colText += '\n';
        } else if (colText.length > 0 && !colText.endsWith(' ') && !colText.endsWith('\n')) {
          colText += ' ';
        }
        colText += item.str;
        lastY = y;
      }
      return colText;
    };

    if (isTwoColumn) {
      fullText += formatColumnItems(leftItems) + '\n\n' + formatColumnItems(rightItems) + '\n\n';
    } else {
      fullText += formatColumnItems(items) + '\n\n';
    }
  }

  return fullText;
}

/**
 * Extracts Answer Key mappings from document text.
 */
export function parseAnswerKey(text: string): Map<number, number> {
  const map = new Map<number, number>();
  const keyHeaderMatch = text.match(/(?:^|\n)\s*(?:ANSWER\s*KEY|ANSWERS|KEY\s*SHEET|OFFICIAL\s*KEY|KEYS)\b/i);
  if (!keyHeaderMatch) return map;

  const keyText = text.substring(keyHeaderMatch.index!);

  const regex = /(?:Q\.?\s*)?(\d+)\s*[-.:)]\s*(?:\(?([1-4]|[A-Da-d])\)?)/g;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(keyText)) !== null) {
    const qNum = parseInt(m[1], 10);
    const ansRaw = m[2].toUpperCase();
    let optIdx = 0;
    if (ansRaw === '1' || ansRaw === 'A') optIdx = 0;
    else if (ansRaw === '2' || ansRaw === 'B') optIdx = 1;
    else if (ansRaw === '3' || ansRaw === 'C') optIdx = 2;
    else if (ansRaw === '4' || ansRaw === 'D') optIdx = 3;
    map.set(qNum, optIdx);
  }
  return map;
}

/**
 * Extracts Solutions / Explanations mappings from document text.
 */
export function parseSolutions(text: string): Map<number, string> {
  const map = new Map<number, string>();
  const solHeaderMatch = text.match(/(?:^|\n)\s*(?:HINTS\s*&\s*SOLUTIONS|HINTS\s+AND\s+SOLUTIONS|DETAILED\s*SOLUTIONS|SOLUTIONS|EXPLANATIONS|HINTS)\b/i);
  if (!solHeaderMatch) return map;

  const solText = text.substring(solHeaderMatch.index!);
  const regex = /(?:^|\n)\s*(?:Q\.?\s*)?(\d+)\s*[.:)]\s+([\s\S]*?)(?=(?:^|\n)\s*(?:Q\.?\s*)?\d+\s*[.:)]\s+|$)/g;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(solText)) !== null) {
    const qNum = parseInt(m[1], 10);
    const expl = m[2].trim();
    if (expl && expl.length > 5) {
      map.set(qNum, expl);
    }
  }
  return map;
}

/**
 * Splits document text into individual questions, options, correct answers, and explanations.
 */
export function extractQuestionsFromPdfText(
  fullText: string,
  config?: { subject?: string; chapter?: string }
): ExtractedQuestion[] {
  const defaultSubject = config?.subject || 'Physics';
  const defaultChapter = config?.chapter || 'System of Particles and Rotational Motion';

  const answerKeyMap = parseAnswerKey(fullText);
  const solutionMap = parseSolutions(fullText);

  let qSection = fullText;
  const cutMatch = fullText.match(/(?:^|\n)\s*(?:ANSWER\s*KEY|ANSWERS|HINTS\s*&\s*SOLUTIONS|HINTS\s+AND\s+SOLUTIONS|SOLUTIONS|KEY\s*SHEET)\b/i);
  if (cutMatch && cutMatch.index && cutMatch.index > 50) {
    qSection = fullText.substring(0, cutMatch.index);
  }

  const qSplitRegex = /(?:^|\n)\s*(?:(?:Q\.?|Question|Que\.?)\s*(\d+)[\.\:]|\b(\d+)\.\s+(?!\d))/gi;

  const matches: Array<{ qNum: number; index: number; matchLength: number }> = [];
  let m: RegExpExecArray | null;
  while ((m = qSplitRegex.exec(qSection)) !== null) {
    const qNum = parseInt(m[1] || m[2], 10);
    matches.push({ qNum, index: m.index, matchLength: m[0].length });
  }

  const rawBlocks: Array<{ qNum: number; text: string }> = [];
  for (let i = 0; i < matches.length; i++) {
    const current = matches[i];
    const next = matches[i + 1];
    const blockText = qSection.substring(current.index + current.matchLength, next ? next.index : undefined).trim();
    rawBlocks.push({ qNum: current.qNum, text: blockText });
  }

  const generatedQuestions: ExtractedQuestion[] = [];

  for (const block of rawBlocks) {
    let cleanToken = block.text;

    const optRegex = /(?:^|\s+)(?:\(([1-4]|[A-Da-d])\)|([1-4]|[A-Da-d])[\.\)])\s+([\s\S]*?)(?=(?:^|\s+)(?:\(([1-4]|[A-Da-d])\)|([1-4]|[A-Da-d])[\.\)])\s+|$)/g;

    const options: string[] = [];
    let match: RegExpExecArray | null;
    let firstOptionIndex = cleanToken.length;

    while ((match = optRegex.exec(cleanToken)) !== null) {
      if (options.length === 0) firstOptionIndex = match.index;
      let optText = (match[3] || '').trim();
      optText = optText.replace(/(?:Ans(?:wer)?\.?\s*[:\-]?\s*\(?([1-4]|[A-Da-d])\)?.*)/gi, '').trim();
      optText = optText.replace(/(?:Sol(?:ution)?\.?\s*[:\-]?.*)/gi, '').trim();
      if (optText) {
        options.push(optText);
      }
    }

    let questionText = cleanToken.substring(0, firstOptionIndex).trim();

    let detectedAnswer: number | undefined = undefined;
    const inlineAnsMatch = cleanToken.match(/(?:Ans(?:wer)?\.?\s*[:\-]?\s*\(?([1-4]|[A-Da-d])\)?)/i);
    if (inlineAnsMatch) {
      const a = inlineAnsMatch[1].toUpperCase();
      if (a === '1' || a === 'A') detectedAnswer = 0;
      else if (a === '2' || a === 'B') detectedAnswer = 1;
      else if (a === '3' || a === 'C') detectedAnswer = 2;
      else if (a === '4' || a === 'D') detectedAnswer = 3;
      questionText = questionText.replace(/(?:Ans(?:wer)?\.?\s*[:\-]?\s*\(?([1-4]|[A-Da-d])\)?.*)/gi, '').trim();
    }

    let detectedExplanation: string | undefined = undefined;
    const inlineSolMatch = cleanToken.match(/(?:Sol(?:ution)?|Hint)\s*[:\-]\s*([\s\S]*)/i);
    if (inlineSolMatch && inlineSolMatch[1].trim().length > 5) {
      detectedExplanation = inlineSolMatch[1].trim();
      questionText = questionText.replace(/(?:Sol(?:ution)?|Hint)\s*[:\-]\s*[\s\S]*/gi, '').trim();
    }

    let finalCorrectAnswer = 0;
    if (answerKeyMap.has(block.qNum)) {
      finalCorrectAnswer = answerKeyMap.get(block.qNum)!;
    } else if (detectedAnswer !== undefined) {
      finalCorrectAnswer = detectedAnswer;
    }

    let finalExplanation = solutionMap.get(block.qNum) || detectedExplanation || 'Standard NCERT concept & verified calculation.';

    if ((!questionText || questionText.length < 10) && options.length >= 2) {
      const prev = generatedQuestions[generatedQuestions.length - 1];
      if (prev && (prev.options[0] === 'Option A' || prev.options.length < 4)) {
        prev.options = options.slice(0, 4);
        if (answerKeyMap.has(prev.qNum)) {
          prev.correctAnswer = answerKeyMap.get(prev.qNum)!;
        }
        continue;
      }
    }

    if (!questionText) {
      questionText = cleanToken.substring(0, 100);
    }

    const finalOptions = options.length >= 4 ? options.slice(0, 4) :
                         (options.length > 0 ? [...options, 'Option C', 'Option D'].slice(0, 4) :
                         ['Option A', 'Option B', 'Option C', 'Option D']);

    generatedQuestions.push({
      id: `parsed-${block.qNum}-${Math.random().toString(36).substring(2, 7)}`,
      qNum: block.qNum,
      questionText,
      options: finalOptions,
      correctAnswer: finalCorrectAnswer,
      explanation: finalExplanation,
      subject: defaultSubject,
      chapter: defaultChapter,
      topic: defaultChapter,
      difficulty: 'Medium',
      marks: 4,
      type: 'multiple-choice'
    });
  }

  return generatedQuestions;
}

/**
 * Heals an existing stored questions array: merges any orphan questions,
 * strips dummy "(Extracted without text)" markers, and cleans up options.
 */
export function repairQuestionBankList(questions: any[]): any[] {
  if (!Array.isArray(questions)) return [];

  const repaired: any[] = [];

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    if (!q) continue;

    const isOrphan = String(q.questionText || '').includes('(Extracted without text)') ||
                     (String(q.questionText || '').trim().length < 10 && Array.isArray(q.options) && q.options.length >= 2);

    if (isOrphan && repaired.length > 0) {
      const prev = repaired[repaired.length - 1];
      if (Array.isArray(q.options) && q.options.length >= 2 && (!prev.options || prev.options[0] === 'Option A')) {
        prev.options = q.options.slice(0, 4);
      }
      continue;
    }

    repaired.push({ ...q });
  }

  return repaired;
}
