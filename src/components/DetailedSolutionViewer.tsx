import React from 'react';
import { formatMathAndFormulas } from '../utils/mathFormatter';
import { cleanOcrText } from '../utils/ocrCleaner';
import { BookOpen, Sparkles, CheckCircle2, Zap, ArrowRight } from 'lucide-react';

interface DetailedSolutionViewerProps {
  explanation: string | null | undefined;
  correctAnswer?: number;
  options?: string[];
  className?: string;
  showCorrectOptionHeader?: boolean;
}

interface ParsedSection {
  type: 'concept' | 'derivation' | 'protip' | 'general';
  title: string;
  icon: React.ReactNode;
  lines: string[];
}

/**
 * Splits a derivation or calculation block into distinct, sequential, step-by-step lines.
 * Handles equations (e.g. W = ... dV W = ... W = ...) or multiple sentences squashed together,
 * ensuring each mathematical equation is on its own separate line with clear numbering.
 */
function splitDerivationSteps(text: string): string[] {
  if (!text) return [];

  // Split on real linebreaks first
  const rawLines = text
    .split(/\r?\n+/)
    .map(l => l.trim())
    .filter(l => l.length > 0);

  const steps: string[] = [];

  for (const line of rawLines) {
    // Strip leading bullet or step indicator if present
    const cleanLine = line.replace(/^[•\-\*]\s*/, '').trim();

    // Check if multiple equations or steps are joined on a single line without linebreaks
    // e.g. "W = ∫ ... dV W = n R T ... W = n R T ln..." or "; " or "Step 1: ... Step 2: ..."
    const subEquations = cleanLine
      .split(/(?<=[^\s=+\-*/(])\s+(?=[A-Za-z]\s*=\s*|Step\s*\d+:|\bHence,|\bTherefore,|\bFormula:|\bApply:|\bNow,|\bThus,|\bSubstituting|\bPutting)/)
      .map(s => s.trim())
      .filter(s => s.length > 0);

    if (subEquations.length > 1) {
      steps.push(...subEquations);
    } else {
      steps.push(cleanLine);
    }
  }

  return steps.filter(s => s.length > 0);
}

/**
 * Parses raw explanation into distinct semantic sections:
 * - 📘 NCERT Fundamental Concept
 * - ⚡ Step-by-Step Derivation & Calculations
 * - 💡 Examiner Pro-Tip / Core Principle
 * - Standard / General Fallback
 */
function parseExplanation(rawText: string): ParsedSection[] {
  if (!rawText || !rawText.trim()) return [];

  // Format math and clean OCR while preserving newlines
  const formatted = formatMathAndFormulas(cleanOcrText(rawText));

  // Regex to detect section demarcations:
  // "### 📘 NCERT Fundamental Concept" OR "📘 **NCERT Fundamental Concept**:" OR "### Concept:" etc.
  const sectionDividerRegex = /(?:###\s*(?:📘|⚡|✓|💡)?\s*([^\n\r#]+)|(?:\b📘\s*\*\*([^*]+)\*\*|\b⚡\s*\*\*([^*]+)\*\*|\b✓\s*\*\*([^*]+)\*\*|\b💡\s*\*\*([^*]+)\*\*|\*\*([^*]+)\*\*\s*:))/gi;

  const hasSections = sectionDividerRegex.test(formatted);

  if (!hasSections) {
    // Check if there are derivation / calculation lines or bullet points
    const rawLines = formatted
      .split(/\r?\n+/)
      .map(s => s.trim())
      .filter(s => s.length > 0);

    if (rawLines.length > 1) {
      return [
        {
          type: 'derivation',
          title: 'Step-by-Step Solution & Working',
          icon: <Zap className="w-4 h-4 text-amber-500" />,
          lines: splitDerivationSteps(formatted)
        }
      ];
    }

    // Single paragraph or simple sentence: split on sentence boundaries if lengthy
    const sentences = formatted
      .split(/(?<=[.!?])\s+(?=[A-Z0-9(])/g)
      .map(s => s.trim())
      .filter(s => s.length > 0);

    return [
      {
        type: 'general',
        title: 'Solution & Key Concept',
        icon: <BookOpen className="w-4 h-4 text-blue-500" />,
        lines: sentences.length > 0 ? sentences : [formatted]
      }
    ];
  }

  // Split into chunks by section headers
  const tokens = formatted.split(/(?=###|\b(?:📘|⚡|✓|💡)\s*\*\*)/i);
  const sections: ParsedSection[] = [];

  for (const token of tokens) {
    const trimmed = token.trim();
    if (!trimmed) continue;

    // Determine section type from header
    const lower = trimmed.toLowerCase();
    let type: 'concept' | 'derivation' | 'protip' | 'general' = 'general';
    let title = 'Conceptual Reference';
    let icon: React.ReactNode = <BookOpen className="w-4 h-4 text-blue-500" />;

    if (lower.includes('concept') || lower.includes('ncert') || lower.includes('theory') || lower.includes('fundamental')) {
      type = 'concept';
      title = 'NCERT Fundamental Concept';
      icon = <BookOpen className="w-4 h-4 text-blue-600" />;
    } else if (lower.includes('derivation') || lower.includes('calculation') || lower.includes('step') || lower.includes('working')) {
      type = 'derivation';
      title = 'Step-by-Step Derivation & Calculations';
      icon = <Zap className="w-4 h-4 text-amber-600" />;
    } else if (lower.includes('tip') || lower.includes('principle') || lower.includes('takeaway') || lower.includes('note') || lower.includes('examiner')) {
      type = 'protip';
      title = 'Examiner Pro-Tip & Core Principle';
      icon = <Sparkles className="w-4 h-4 text-emerald-600" />;
    }

    // Strip header line from the body
    let body = trimmed
      .replace(/^###\s*(?:📘|⚡|✓|💡)?\s*[^\n\r]+/i, '')
      .replace(/^(?:📘|⚡|✓|💡)\s*\*\*[^*]+\*\*\s*:?/i, '')
      .replace(/^\*\*[^*]+\*\*\s*:?/i, '')
      .trim();

    if (!body) continue;

    if (type === 'derivation') {
      const steps = splitDerivationSteps(body);
      sections.push({ type, title, icon, lines: steps });
    } else {
      // Split on newlines or sentence boundaries for clean readability
      const lines = body
        .split(/\r?\n+/)
        .map(l => l.trim().replace(/^[•\-\*]\s*/, ''))
        .filter(l => l.length > 0);

      // If single long block, split on sentence boundaries
      if (lines.length === 1 && lines[0].length > 100) {
        const sentences = lines[0]
          .split(/(?<=[.!?])\s+(?=[A-Z0-9(])/g)
          .map(s => s.trim())
          .filter(s => s.length > 0);
        sections.push({ type, title, icon, lines: sentences.length > 1 ? sentences : lines });
      } else {
        sections.push({ type, title, icon, lines });
      }
    }
  }

  return sections.length > 0 ? sections : [
    {
      type: 'general',
      title: 'Detailed Solution',
      icon: <BookOpen className="w-4 h-4 text-blue-500" />,
      lines: [formatted]
    }
  ];
}

export const DetailedSolutionViewer: React.FC<DetailedSolutionViewerProps> = ({
  explanation,
  correctAnswer,
  options,
  className = '',
  showCorrectOptionHeader = false
}) => {
  if (!explanation || !explanation.trim()) {
    return (
      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 italic">
        Standard NCERT textbook derivation & reference solution.
      </div>
    );
  }

  const sections = parseExplanation(explanation);

  return (
    <div className={`space-y-3 font-sans ${className}`}>
      {/* Optional Correct Answer Header Banner */}
      {showCorrectOptionHeader && typeof correctAnswer === 'number' && options && options[correctAnswer] && (
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-medium">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            Correct Option: <strong className="font-bold font-mono">({String.fromCharCode(65 + correctAnswer)})</strong> {options[correctAnswer]}
          </span>
        </div>
      )}

      {/* Render Each Structured Section */}
      {sections.map((sec, sIdx) => {
        if (sec.type === 'concept') {
          return (
            <div
              key={sIdx}
              className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/70 via-indigo-50/40 to-white p-3.5 sm:p-4 space-y-2 shadow-xs"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider border-b border-blue-100 pb-1.5">
                {sec.icon}
                <span>{sec.title}</span>
              </div>
              <div className="space-y-1.5 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                {sec.lines.map((line, lIdx) => (
                  <p key={lIdx} className="m-0">
                    {line.endsWith('.') || line.endsWith(';') || line.endsWith(':') || line.endsWith(')') ? line : `${line}.`}
                  </p>
                ))}
              </div>
            </div>
          );
        }

        if (sec.type === 'derivation') {
          return (
            <div
              key={sIdx}
              className="rounded-2xl border border-amber-200/90 bg-gradient-to-br from-amber-50/60 via-slate-50/40 to-white p-3.5 sm:p-4 space-y-3 shadow-xs"
            >
              <div className="flex items-center justify-between border-b border-amber-200/60 pb-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-950 uppercase tracking-wider">
                  {sec.icon}
                  <span>{sec.title}</span>
                </div>
                <span className="text-[10px] font-mono font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                  {sec.lines.length} Step{sec.lines.length === 1 ? '' : 's'}
                </span>
              </div>

              {/* Step-by-Step Distinct Lines with Visual Flow */}
              <div className="space-y-2 relative">
                {sec.lines.map((line, lIdx) => (
                  <div key={lIdx} className="relative flex items-start gap-2.5 sm:gap-3 group">
                    {/* Step Badge */}
                    <div className="shrink-0 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-amber-100/90 border border-amber-300 text-amber-900 font-mono text-[10px] sm:text-xs font-bold shadow-2xs mt-0.5">
                      {lIdx + 1}
                    </div>

                    {/* Step Equation / Calculation Box */}
                    <div className="flex-1 min-w-0 p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 font-mono leading-relaxed overflow-x-auto shadow-2xs">
                      {line}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        if (sec.type === 'protip') {
          return (
            <div
              key={sIdx}
              className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/70 via-teal-50/40 to-white p-3.5 sm:p-4 space-y-2 shadow-xs"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-950 uppercase tracking-wider border-b border-emerald-200/60 pb-1.5">
                {sec.icon}
                <span>{sec.title}</span>
              </div>
              <div className="space-y-1.5 text-xs sm:text-sm text-emerald-950 leading-relaxed">
                {sec.lines.map((line, lIdx) => (
                  <p key={lIdx} className="m-0 flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">
                      {line.endsWith('.') || line.endsWith(';') || line.endsWith(':') ? line : `${line}.`}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          );
        }

        // Fallback / General
        return (
          <div
            key={sIdx}
            className="rounded-2xl border border-slate-200 bg-slate-50/80 p-3.5 sm:p-4 space-y-2"
          >
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-1.5">
              {sec.icon}
              <span>{sec.title}</span>
            </div>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-800 leading-relaxed">
              {sec.lines.map((line, lIdx) => (
                <p key={lIdx} className="m-0">
                  {line.endsWith('.') || line.endsWith(';') || line.endsWith(':') ? line : `${line}.`}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
