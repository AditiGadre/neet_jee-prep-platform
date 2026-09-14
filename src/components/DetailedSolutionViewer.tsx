import React, { useMemo } from 'react';
import { formatMathAndFormulas } from '../utils/mathFormatter';
import { cleanOcrText } from '../utils/ocrCleaner';
import { BookOpen, Sparkles, CheckCircle2, Zap, ArrowRight, Play, ExternalLink } from 'lucide-react';

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

    // Check if multiple equations or steps are joined on a single line
    // e.g. "W = ∫ ... dV W = n R T ... W = n R T ln..." or "; " or "⟹" or "Step 1: ... Step 2: ..."
    const subEquations = cleanLine
      .split(/\s*(?:⟹|⇒)\s*|(?<=[^\s=+\-*/(])\s+(?=[A-Za-z]\s*=\s*|Step\s*\d+:|\bHence,|\bTherefore,|\bFormula:|\bApply:|\bNow,|\bThus,|\bSubstituting|\bPutting)/)
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
 * Normalizes explanations ensuring headings and bodies are cleanly separated by line breaks,
 * even if markdown headers were previously squashed onto a single line.
 */
function normalizeExplanationText(text: string): string {
  let out = text;

  // Step 1: Ensure newline after headers
  out = out.replace(
    /(###\s*(?:📘|⚡|✓|💡)?\s*(?:NCERT\s*(?:Fundamental\s*)?Concept|Step-by-Step\s*(?:Derivation\s*&\s*)?Calculations|Step-by-Step\s*Derivation|Examiner(?:'s)?\s*(?:Pro-)?Tip(?:\s*&\s*(?:Core\s*Principle|Key\s*Takeaway))?|Core\s*Principle|Detailed\s*(?:Concept\s*)?(?:Derivation|Solution)|Concept\s*Reference)\s*:?)\s*/gi,
    '$1\n\n'
  );

  // Step 2: Ensure newline before headers (if not start of string)
  out = out.replace(
    /(?<!^)\s*(###\s*(?:📘|⚡|✓|💡)?)/gi,
    '\n\n$1'
  );

  return out.trim();
}

/**
 * Intelligently organizes unstructured or sparse explanation text into
 * NCERT Concept, Step-by-Step Derivation & Calculations, and Core Principle sections.
 */
function organizeUnstructuredExplanation(text: string): ParsedSection[] {
  const rawSentences = text
    .split(/(?<=[.!?])\s+(?=[A-Z0-9(])/g)
    .map(s => s.trim())
    .filter(Boolean);

  if (rawSentences.length <= 1) {
    const hasMath = /[=+\-×/÷^∫√Δ]/.test(text) && /\d/.test(text);
    if (hasMath) {
      return [
        {
          type: 'derivation',
          title: 'Step-by-Step Derivation & Calculations',
          icon: <Zap className="w-4 h-4 text-amber-600 shrink-0" />,
          lines: splitDerivationSteps(text)
        }
      ];
    }
    return [
      {
        type: 'concept',
        title: 'NCERT Fundamental Concept',
        icon: <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />,
        lines: [text]
      }
    ];
  }

  const conceptLines: string[] = [];
  const derivationLines: string[] = [];
  const takeawayLines: string[] = [];

  for (let i = 0; i < rawSentences.length; i++) {
    const s = rawSentences[i];
    const isTakeaway =
      /^(?:Hence|Therefore|Thus|So|Consequently|Correct\s*Option|In\s*conclusion)/i.test(s) ||
      (i === rawSentences.length - 1 && rawSentences.length > 2);
    const isMath = /[=+\-×/÷^∫√Δ]/.test(s) && (/\d/.test(s) || s.includes('='));

    if (isTakeaway && (conceptLines.length > 0 || derivationLines.length > 0)) {
      takeawayLines.push(s);
    } else if (isMath) {
      derivationLines.push(s);
    } else {
      conceptLines.push(s);
    }
  }

  const sections: ParsedSection[] = [];
  if (conceptLines.length > 0) {
    sections.push({
      type: 'concept',
      title: 'NCERT Fundamental Concept',
      icon: <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />,
      lines: conceptLines
    });
  }
  if (derivationLines.length > 0) {
    const allMath = derivationLines.join('\n');
    sections.push({
      type: 'derivation',
      title: 'Step-by-Step Derivation & Calculations',
      icon: <Zap className="w-4 h-4 text-amber-600 shrink-0" />,
      lines: splitDerivationSteps(allMath)
    });
  }
  if (takeawayLines.length > 0) {
    sections.push({
      type: 'protip',
      title: 'Examiner Pro-Tip & Core Principle',
      icon: <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />,
      lines: takeawayLines
    });
  }

  return sections.length > 0
    ? sections
    : [
        {
          type: 'general',
          title: 'Detailed Solution',
          icon: <BookOpen className="w-4 h-4 text-blue-500 shrink-0" />,
          lines: [text]
        }
      ];
}

/**
 * Parses raw explanation into distinct semantic sections:
 * - 📘 NCERT Fundamental Concept
 * - ⚡ Step-by-Step Derivation & Calculations
 * - 💡 Examiner Pro-Tip / Core Principle
 */
function parseExplanation(rawText: string): ParsedSection[] {
  if (!rawText || !rawText.trim()) return [];

  // Format math and clean OCR while strictly preserving newlines
  const formatted = formatMathAndFormulas(cleanOcrText(rawText));

  // Normalize header and body demarcation
  const normalized = normalizeExplanationText(formatted);

  // Check if markdown section dividers exist
  const hasMarkdownSections = /###/i.test(normalized);

  if (!hasMarkdownSections) {
    return organizeUnstructuredExplanation(normalized);
  }

  // Split on markdown header boundaries
  const tokens = normalized.split(/(?=\n\n###|^###)/g).map(t => t.trim()).filter(Boolean);
  const sections: ParsedSection[] = [];

  for (const token of tokens) {
    const lines = token.split(/\r?\n+/).map(l => l.trim()).filter(Boolean);
    if (lines.length === 0) continue;

    const header = lines[0];
    const headerLower = header.toLowerCase();
    const rawBodyLines = lines.slice(1);

    let type: 'concept' | 'derivation' | 'protip' | 'general' = 'general';
    let title = 'NCERT Fundamental Concept';
    let icon: React.ReactNode = <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />;

    if (
      headerLower.includes('concept') ||
      headerLower.includes('ncert') ||
      headerLower.includes('fundamental') ||
      headerLower.includes('theory') ||
      header.includes('📘')
    ) {
      type = 'concept';
      title = 'NCERT Fundamental Concept';
      icon = <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />;
    } else if (
      headerLower.includes('derivation') ||
      headerLower.includes('calculation') ||
      headerLower.includes('step') ||
      headerLower.includes('working') ||
      header.includes('⚡')
    ) {
      type = 'derivation';
      title = 'Step-by-Step Derivation & Calculations';
      icon = <Zap className="w-4 h-4 text-amber-600 shrink-0" />;
    } else if (
      headerLower.includes('tip') ||
      headerLower.includes('principle') ||
      headerLower.includes('takeaway') ||
      headerLower.includes('examiner') ||
      header.includes('✓') ||
      header.includes('💡')
    ) {
      type = 'protip';
      title = 'Examiner Pro-Tip & Core Principle';
      icon = <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />;
    }

    // Join body lines and strip any accidental markdown header remnants
    let body = rawBodyLines.join('\n').replace(/^###\s*/g, '').replace(/###$/g, '').trim();

    // If body was somehow on the same line as header, strip header prefix
    if (!body && lines.length === 1) {
      body = header
        .replace(
          /^###\s*(?:📘|⚡|✓|💡)?\s*(?:NCERT\s*(?:Fundamental\s*)?Concept|Step-by-Step\s*(?:Derivation\s*&\s*)?Calculations|Step-by-Step\s*Derivation|Examiner(?:'s)?\s*(?:Pro-)?Tip(?:\s*&\s*(?:Core\s*Principle|Key\s*Takeaway))?|Core\s*Principle|Detailed\s*(?:Concept\s*)?(?:Derivation|Solution)|Concept\s*Reference)?\s*:?/i,
          ''
        )
        .trim();
    }

    if (!body) continue;

    if (type === 'derivation') {
      const steps = splitDerivationSteps(body);
      sections.push({ type, title, icon, lines: steps.length > 0 ? steps : [body] });
    } else {
      const cleanLines = body
        .split(/\r?\n+/)
        .map(l => l.trim().replace(/^[•\-\*]\s*/, ''))
        .filter(Boolean);

      if (cleanLines.length === 1 && cleanLines[0].length > 110) {
        const sentences = cleanLines[0]
          .split(/(?<=[.!?])\s+(?=[A-Z0-9(])/g)
          .map(s => s.trim())
          .filter(Boolean);
        sections.push({ type, title, icon, lines: sentences.length > 1 ? sentences : cleanLines });
      } else {
        sections.push({ type, title, icon, lines: cleanLines.length > 0 ? cleanLines : [body] });
      }
    }
  }

  return sections.length > 0 ? sections : organizeUnstructuredExplanation(normalized);
}

/** Official YouTube Play Logo */
const YouTubeIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
      fill="#FF0000"
    />
    <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FFFFFF" />
  </svg>
);

/**
 * Concept Video Referral Component:
 * Provides direct, interactive links to YouTube video lectures, derivations, and numerical tricks
 * targeted specifically at the question's concept and syllabus chapter.
 */
const ConceptVideoReferral: React.FC<{
  subject?: string;
  chapter?: string;
  topic?: string;
  subtopic?: string;
  questionText?: string;
  conceptTitle?: string;
}> = ({ subject, chapter, topic, subtopic, questionText, conceptTitle }) => {
  const queries = useMemo(() => {
    const cleanSubject = (subject || 'NEET').replace(/batch|dropper|test|exam/gi, '').trim();
    const cleanChapter = (chapter || '').replace(/\[.*?\]|\(.*?\)/g, '').replace(/test|dpp|exam/gi, '').trim();
    const cleanTopic = (topic || subtopic || conceptTitle || '').replace(/\[.*?\]|\(.*?\)/g, '').trim();

    let coreKeywords = `${cleanSubject} ${cleanChapter} ${cleanTopic}`.trim();
    if (!cleanTopic && questionText) {
      const strippedQ = questionText
        .replace(/<[^>]+>/g, '')
        .replace(/[^\w\s]/g, ' ')
        .split(/\s+/)
        .slice(0, 8)
        .join(' ');
      coreKeywords = `${cleanSubject} ${cleanChapter} ${strippedQ}`.trim();
    }

    const primaryQuery = `NEET ${coreKeywords} concept lecture derivation`.replace(/\s+/g, ' ').trim();
    const oneShotQuery = `NEET ${cleanSubject} ${cleanChapter} one shot lecture`.replace(/\s+/g, ' ').trim();
    const numericalTricksQuery = `NEET ${cleanSubject} ${cleanTopic || cleanChapter} numerical shortcuts tricks`.replace(/\s+/g, ' ').trim();
    const ncertLineQuery = `NEET NCERT ${cleanSubject} ${cleanChapter} line by line explanation`.replace(/\s+/g, ' ').trim();
    const pyqQuery = `NEET ${cleanSubject} ${cleanTopic || cleanChapter} pyq video solutions`.replace(/\s+/g, ' ').trim();

    return {
      primaryQuery,
      oneShotQuery,
      numericalTricksQuery,
      ncertLineQuery,
      pyqQuery,
      displayTopic: cleanTopic || cleanChapter || 'Concept Derivation'
    };
  }, [subject, chapter, topic, subtopic, questionText, conceptTitle]);

  const getYouTubeUrl = (query: string) =>
    `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

  return (
    <div className="rounded-2xl border border-red-200/80 bg-gradient-to-br from-red-50/70 via-rose-50/40 to-white p-3.5 sm:p-4 space-y-3 shadow-xs mt-3">
      {/* Header & Main Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-red-100 pb-2.5">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-xl bg-white border border-red-200 shadow-2xs shrink-0">
            <YouTubeIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Related Concept Lectures & Derivations
              </span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-red-100 text-red-700">
                YouTube
              </span>
            </div>
            <p className="text-[11px] text-slate-600 mt-0.5">
              Topic: <strong className="text-slate-900 font-semibold">{queries.displayTopic}</strong>
              {chapter && chapter !== queries.displayTopic ? (
                <span className="text-slate-500"> • {chapter}</span>
              ) : null}
            </p>
          </div>
        </div>

        {/* Primary Action Button */}
        <a
          href={getYouTubeUrl(queries.primaryQuery)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-xs font-semibold shadow-xs transition-colors group shrink-0"
        >
          <Play className="w-3.5 h-3.5 fill-current transition-transform group-hover:scale-110" />
          <span>Watch Lecture on YouTube</span>
          <ExternalLink className="w-3 h-3 opacity-80" />
        </a>
      </div>

      {/* Targeted Learning Pills */}
      <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mr-1">
          Quick Search:
        </span>
        <a
          href={getYouTubeUrl(queries.oneShotQuery)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white hover:bg-red-50 border border-slate-200 hover:border-red-300 text-[11px] font-medium text-slate-700 hover:text-red-700 transition-all shadow-2xs"
        >
          <span>▶ One-Shot Lecture</span>
          <ExternalLink className="w-2.5 h-2.5 opacity-60" />
        </a>
        <a
          href={getYouTubeUrl(queries.numericalTricksQuery)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white hover:bg-amber-50 border border-slate-200 hover:border-amber-300 text-[11px] font-medium text-slate-700 hover:text-amber-800 transition-all shadow-2xs"
        >
          <span>⚡ Numerical Tricks & Shortcuts</span>
          <ExternalLink className="w-2.5 h-2.5 opacity-60" />
        </a>
        <a
          href={getYouTubeUrl(queries.ncertLineQuery)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-[11px] font-medium text-slate-700 hover:text-blue-800 transition-all shadow-2xs"
        >
          <span>📘 NCERT Line-by-Line</span>
          <ExternalLink className="w-2.5 h-2.5 opacity-60" />
        </a>
        <a
          href={getYouTubeUrl(queries.pyqQuery)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-[11px] font-medium text-slate-700 hover:text-emerald-800 transition-all shadow-2xs"
        >
          <span>🎯 PYQ Video Derivations</span>
          <ExternalLink className="w-2.5 h-2.5 opacity-60" />
        </a>
      </div>
    </div>
  );
};

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
  questionText
}) => {
  const sections = useMemo(() => parseExplanation(explanation || ''), [explanation]);

  const conceptSection = sections.find(s => s.type === 'concept');
  const conceptText = conceptSection && conceptSection.lines.length > 0 ? conceptSection.lines[0] : '';

  if (!explanation || !explanation.trim()) {
    return (
      <div className={`space-y-3 font-sans ${className}`}>
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 italic">
          Standard NCERT textbook derivation & reference solution.
        </div>
        <ConceptVideoReferral
          subject={subject}
          chapter={chapter}
          topic={topic}
          subtopic={subtopic}
          questionText={questionText}
          conceptTitle={conceptText}
        />
      </div>
    );
  }

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

      {/* Render Each Structured Section - strictly one after another on next lines/cards */}
      {sections.map((sec, sIdx) => {
        if (sec.type === 'concept') {
          return (
            <div
              key={sIdx}
              className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/80 via-indigo-50/30 to-white p-3.5 sm:p-4 space-y-2 shadow-xs"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider border-b border-blue-100 pb-1.5">
                {sec.icon}
                <span>{sec.title}</span>
              </div>
              <div className="space-y-1.5 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                {sec.lines.map((line, lIdx) => (
                  <p key={lIdx} className="m-0 font-medium text-slate-900 bg-white/70 p-2.5 rounded-xl border border-blue-100/90 shadow-2xs">
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
              className="rounded-2xl border border-amber-200/90 bg-gradient-to-br from-amber-50/60 via-orange-50/20 to-white p-3.5 sm:p-4 space-y-3 shadow-xs"
            >
              <div className="flex items-center justify-between border-b border-amber-200/60 pb-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-950 uppercase tracking-wider">
                  {sec.icon}
                  <span>{sec.title}</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-amber-800 bg-amber-100/90 px-2 py-0.5 rounded-full border border-amber-200">
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
                    <div className="flex-1 min-w-0 p-2.5 sm:p-3 rounded-xl bg-white border border-amber-200/60 text-xs sm:text-sm text-slate-900 font-mono leading-relaxed overflow-x-auto shadow-2xs font-semibold">
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
              className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/80 via-teal-50/30 to-white p-3.5 sm:p-4 space-y-2 shadow-xs"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-950 uppercase tracking-wider border-b border-emerald-200/60 pb-1.5">
                {sec.icon}
                <span>{sec.title}</span>
              </div>
              <div className="space-y-1.5 text-xs sm:text-sm text-emerald-950 leading-relaxed">
                {sec.lines.map((line, lIdx) => (
                  <div key={lIdx} className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-emerald-200/60 shadow-2xs">
                    <ArrowRight className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-semibold">
                      {line.endsWith('.') || line.endsWith(';') || line.endsWith(':') ? line : `${line}.`}
                    </span>
                  </div>
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

      {/* 🎥 Related Concept Video & Lecture Referral (YouTube) */}
      <ConceptVideoReferral
        subject={subject}
        chapter={chapter}
        topic={topic}
        subtopic={subtopic}
        questionText={questionText}
        conceptTitle={conceptText}
      />
    </div>
  );
};
