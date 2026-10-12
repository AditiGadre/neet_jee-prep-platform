import React, { useMemo } from 'react';
import { formatMathAndFormulas } from '../utils/mathFormatter';
import { cleanOcrText } from '../utils/ocrCleaner';
import { CheckCircle2 } from 'lucide-react';

export interface DetailedSolutionViewerProps {
  explanation: string | null | undefined;
  correctAnswer?: number;
  options?: string[];
  className?: string;
  showCorrectOptionHeader?: boolean;
  subject?: string;
  chapter?: string;
  topic?: string;
  subtopic?: string;
  questionText?: string;
  solutionImage?: string;
}

interface FormattedBlock {
  type: 'concept' | 'derivation' | 'note' | 'general';
  title?: string;
  lines: string[];
}

const TRUNCATED_WORDS_MAP: Record<string, string> = {
  'quaring': 'Squaring',
  'ractional': 'Fractional',
  'iven': 'Given',
  'herefore': 'Therefore',
  'ormula': 'Formula',
  'ercentage': 'Percentage',
  'otice': 'Notice',
  'ubstituting': 'Substituting',
  'ividing': 'Dividing',
  'ultiplying': 'Multiplying',
  'alculating': 'Calculating',
  'alculation': 'Calculation',
  'onsider': 'Consider',
  'ssuming': 'Assuming',
  'rom': 'From',
  'ence': 'Hence',
  'hus': 'Thus',
  'ince': 'Since',
  'alue': 'Value',
  'atio': 'Ratio'
};

function restoreTrimmedWords(text: string): string {
  if (!text) return text;
  let out = text;
  for (const [truncated, restored] of Object.entries(TRUNCATED_WORDS_MAP)) {
    out = out.replace(new RegExp(`(^|\\n)\\s*${truncated}\\b`, 'gi'), `$1${restored}`);
    out = out.replace(new RegExp(`(:\\s*)${truncated}\\b`, 'gi'), `$1${restored}`);
  }
  return out;
}

function healLineStartWord(line: string): string {
  let cleaned = line.trim();
  for (const [truncated, restored] of Object.entries(TRUNCATED_WORDS_MAP)) {
    if (cleaned.toLowerCase().startsWith(truncated.toLowerCase())) {
      const rest = cleaned.slice(truncated.length);
      if (rest.length === 0 || /^\s|[^a-zA-Z]/.test(rest)) {
        return restored + rest;
      }
    }
  }
  return cleaned;
}

/**
 * Parses raw explanation into clean, authentic textbook solution blocks.
 * Preserves math formulas, side-by-side tables (e.g. SI | New system), and step numbers.
 */
function parseSolutionBlocks(rawText: string): FormattedBlock[] {
  if (!rawText || !rawText.trim()) return [];

  // 1. Clean OCR, math typography & restore any trimmed words
  const cleaned = restoreTrimmedWords(formatMathAndFormulas(cleanOcrText(rawText)));

  // 2. Normalize and split by section or newlines
  const rawLines = cleaned
    .split(/\r?\n+/)
    .map(l => healLineStartWord(l.trim()))
    .filter(l => l.length > 0);

  const blocks: FormattedBlock[] = [];
  let currentBlock: FormattedBlock = { type: 'general', lines: [] };

  for (const line of rawLines) {
    const stripped = line.replace(/[📘⚡💡✓✨]/g, '').trim();

    // Check for Section Header triggers
    const isConceptHeader = /^(?:NCERT\s*(?:Fundamental\s*)?Concept|Core\s*Concept|Concept\s*Reference)\s*:?/i.test(stripped);
    const isDerivationHeader = /^(?:Step-by-Step\s*(?:Derivation\s*&\s*)?Calculations|Step-by-Step\s*Derivation|Working\s*&\s*Calculation|Derivation|Calculations)\s*:?/i.test(stripped);
    const isNoteHeader = /^(?:Examiner(?:'s)?\s*(?:Pro-)?Tip|Core\s*Principle|Key\s*(?:Takeaway|Formula|Note)|Exam\s*Tip)\s*:?/i.test(stripped);

    if (isConceptHeader) {
      if (currentBlock.lines.length > 0) blocks.push(currentBlock);
      const afterColon = stripped.replace(/^(?:NCERT\s*(?:Fundamental\s*)?Concept|Core\s*Concept|Concept\s*Reference)\s*:?\s*/i, '').trim();
      currentBlock = {
        type: 'concept',
        title: 'Concept & Principle',
        lines: afterColon ? [healLineStartWord(afterColon)] : []
      };
      continue;
    }

    if (isDerivationHeader) {
      if (currentBlock.lines.length > 0) blocks.push(currentBlock);
      const afterColon = stripped.replace(/^(?:Step-by-Step\s*(?:Derivation\s*&\s*)?Calculations|Step-by-Step\s*Derivation|Working\s*&\s*Calculation|Derivation|Calculations)\s*:?\s*/i, '').trim();
      currentBlock = {
        type: 'derivation',
        title: 'Step-by-Step Derivation & Calculations',
        lines: afterColon ? [healLineStartWord(afterColon)] : []
      };
      continue;
    }

    if (isNoteHeader) {
      if (currentBlock.lines.length > 0) blocks.push(currentBlock);
      const afterColon = stripped.replace(/^(?:Examiner(?:'s)?\s*(?:Pro-)?Tip|Core\s*Principle|Key\s*(?:Takeaway|Formula|Note)|Exam\s*Tip)\s*:?\s*/i, '').trim();
      currentBlock = {
        type: 'note',
        title: 'Key Note & Strategy',
        lines: afterColon ? [healLineStartWord(afterColon)] : []
      };
      continue;
    }

    // Clean inline headers if present
    let cleanLine = stripped
      .replace(/^###\s*/, '')
      .replace(/^\*\*(.*?)\*\*:?/, '$1:')
      .trim();

    // Add line to current active block
    if (cleanLine) {
      currentBlock.lines.push(healLineStartWord(cleanLine));
    }
  }

  if (currentBlock.lines.length > 0) {
    blocks.push(currentBlock);
  }

  return blocks;
}

/**
 * Checks whether a line contains a column divider (e.g. "SI | New system" or "M1 = 1 kg | M2 = a kg")
 */
function isTableLine(line: string): boolean {
  return line.includes('|') && line.split('|').length === 2;
}

export const DetailedSolutionViewer: React.FC<DetailedSolutionViewerProps> = ({
  explanation,
  correctAnswer,
  options,
  className = '',
  showCorrectOptionHeader = false,
  subject,
  chapter,
  topic,
  subtopic,
  questionText,
  solutionImage
}) => {
  const blocks = useMemo(() => parseSolutionBlocks(explanation || ''), [explanation]);

  if (!explanation || !explanation.trim()) {
    return (
      <div className={`p-4 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs text-stone-500 italic ${className}`}>
        Standard textbook derivation & solution reference.
      </div>
    );
  }

  const correctOptionLetter = typeof correctAnswer === 'number' ? String.fromCharCode(65 + correctAnswer) : null;
  const correctOptionText = typeof correctAnswer === 'number' && options && options[correctAnswer] ? options[correctAnswer] : null;

  return (
    <div className={`rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/90 shadow-xs p-4 sm:p-6 text-stone-800 dark:text-stone-200 ${className}`}>
      {/* Solution Image if provided */}
      {solutionImage && (
        <div className="mb-4 p-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg flex justify-center items-center">
          <img src={solutionImage} alt="Solution Diagram" className="max-h-80 rounded object-contain" />
        </div>
      )}

      {/* Header: Answer / Solution Banner (matching image 3) */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-stone-100 dark:border-stone-800">
        <div className="flex items-center gap-2">
          <span className="font-serif font-bold text-base sm:text-lg text-stone-950 dark:text-stone-50">
            Answer:
          </span>
          {correctOptionLetter && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs sm:text-sm font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Option ({correctOptionLetter})</span>
              {correctOptionText && (
                <span className="font-normal text-emerald-900 dark:text-emerald-100 border-l border-emerald-300 dark:border-emerald-700 pl-1.5 ml-0.5 truncate max-w-xs sm:max-w-md">
                  {correctOptionText}
                </span>
              )}
            </span>
          )}
        </div>

        {chapter && (
          <span className="text-[11px] font-medium text-stone-500 dark:text-stone-400">
            {chapter}
          </span>
        )}
      </div>

      {/* Main Solution Body */}
      <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
        {blocks.map((block, bIdx) => (
          <div key={bIdx} className="space-y-2">
            {/* Clean Section Subheading if applicable */}
            {block.title && (
              <div className="text-xs font-bold tracking-wide uppercase text-stone-700 dark:text-stone-300 pt-1 pb-0.5 border-b border-stone-100 dark:border-stone-800/60">
                {block.title}:
              </div>
            )}

            {/* Content Lines */}
            <div className="space-y-2 font-sans">
              {block.lines.map((line, lIdx) => {
                // Table / Column line with '|' (e.g. SI | New system)
                if (isTableLine(line)) {
                  const [left, right] = line.split('|').map(s => s.trim());
                  return (
                    <div key={lIdx} className="grid grid-cols-2 gap-4 py-1.5 px-3 bg-stone-50/70 dark:bg-stone-800/40 rounded border border-stone-100 dark:border-stone-800 text-xs sm:text-sm">
                      <div className="text-left font-mono font-medium">{left}</div>
                      <div className="border-l border-stone-200 dark:border-stone-700 pl-4 font-mono font-medium">{right}</div>
                    </div>
                  );
                }

                // Step-by-Step numbered lines (e.g. "1. Formula: ...", "2. ...", "Step 1: ...")
                const stepMatch = line.match(/^(\d+\.|Step\s*\d+:?)\s*(.*)/i);
                if (stepMatch) {
                  const stepNum = stepMatch[1];
                  const stepBody = stepMatch[2];
                  return (
                    <div key={lIdx} className="flex items-start gap-2.5 py-0.5 pl-1">
                      <span className="font-semibold text-stone-900 dark:text-stone-100 shrink-0 font-mono text-xs sm:text-sm">
                        {stepNum}
                      </span>
                      <span className="flex-1 text-stone-800 dark:text-stone-200">
                        {stepBody}
                      </span>
                    </div>
                  );
                }

                // Clean derivation and calculation lines matching textbook style
                return (
                  <p key={lIdx} className="m-0 text-stone-800 dark:text-stone-200 font-normal leading-relaxed">
                    {line}
                  </p>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
