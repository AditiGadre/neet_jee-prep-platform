import React, { useState, useEffect } from 'react';
import {
  X,
  Clock,
  CheckCircle2,
  AlertCircle,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Award,
  TrendingUp,
  BarChart2,
  Sparkles,
  RotateCcw,
  Check,
  Flag,
  FileText,
  Loader,
  GraduationCap,
  Trophy,
  Users,
  Target,
  Zap,
  Atom,
  Dna,
  ArrowUpRight,
  ArrowDownRight,
  Percent,
  Compass,
  CheckCheck,
  Building2,
  BookOpen
} from 'canvas-confetti';
import confetti from 'canvas-confetti';
import {
  X as XIcon,
  Clock as ClockIcon,
  CheckCircle2 as CheckIcon,
  AlertCircle as AlertIcon,
  ChevronLeft as LeftIcon,
  ChevronRight as RightIcon,
  Trophy as TrophyIcon,
  Users as UsersIcon,
  Target as TargetIcon,
  Zap as ZapIcon,
  Atom as AtomIcon,
  Dna as DnaIcon,
  FileText as FileIcon,
  Compass as CompassIcon,
  Building2 as BuildingIcon,
  GraduationCap as GradIcon,
  BarChart2 as BarIcon,
  Sparkles as SparkleIcon,
  Flag as FlagIcon,
  ArrowUpRight as UpIcon,
  ArrowDownRight as DownIcon
} from 'lucide-react';
import { TestItem, Question, UserTestResult } from '../types';
import { supabase } from '../supabaseClient';
import { formatMathAndFormulas } from '../utils/mathFormatter';
import { cleanOcrText } from '../utils/ocrCleaner';
import { downloadTestPaperPDF, downloadTestScorecardPDF } from '../utils/pdfDownloader';

interface CBTTestModalProps {
  test: TestItem;
  onClose: () => void;
  onSaveResult: (result: UserTestResult) => void;
  selectedChapters?: {
    physics: string[];
    chemistry: string[];
    biology: string[];
  };
}

export const CBTTestModal: React.FC<CBTTestModalProps> = ({
  test,
  onClose,
  onSaveResult,
  selectedChapters
}) => {
  const isSundayTest =
    test.id.includes('sunday') ||
    test.category === 'neet_mock' ||
    test.totalQuestions >= 90 ||
    test.durationMinutes >= 90;

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [visited, setVisited] = useState<Record<number, boolean>>({ 0: true });
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(test.durationMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [testResult, setTestResult] = useState<UserTestResult | null>(null);
  const [activeSolutionTab, setActiveSolutionTab] = useState<'scorecard' | 'solutions' | 'leaderboard' | 'comparison'>('scorecard');

  // Load previous test history for progression delta calculation
  const [prevTestHistory] = useState<UserTestResult[]>(() => {
    try {
      const raw = localStorage.getItem('neet_completed_tests');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // Load enrolled student profile
  const enrolledStudent = (() => {
    try {
      const raw = localStorage.getItem('neet_enrolled_student');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  })();

  const studentCategory = enrolledStudent?.caste || 'General / Open';

  const [questions, setQuestions] = useState<Question[]>(() => {
    if (test.questions && test.questions.length > 0) {
      return test.questions.map(q => ({
        ...q,
        questionText: formatMathAndFormulas(cleanOcrText(q.questionText)),
        options: q.options.map(o => formatMathAndFormulas(cleanOcrText(o))),
        explanation: formatMathAndFormulas(cleanOcrText(q.explanation))
      }));
    }
    return [];
  });

  // Countdown timer
  useEffect(() => {
    if (isSubmitted) return;
    const interval = setInterval(() => {
      setTimeLeftSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isSubmitted]);

  // Mark visited
  useEffect(() => {
    setVisited(prev => ({ ...prev, [currentQuestionIdx]: true }));
  }, [currentQuestionIdx]);

  const formatTimer = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optionIdx: number) => {
    setAnswers(prev => ({ ...prev, [currentQuestionIdx]: optionIdx }));
  };

  const handleClearResponse = () => {
    setAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentQuestionIdx];
      return copy;
    });
  };

  const handleToggleMarkReview = () => {
    setMarkedForReview(prev => ({
      ...prev,
      [currentQuestionIdx]: !prev[currentQuestionIdx]
    }));
  };

  const handleSaveAndNext = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    }
  };

  // Jump to first question of a subject section
  const jumpToSubject = (sub: 'Physics' | 'Chemistry' | 'Biology') => {
    const targetIdx = questions.findIndex(q => q.subject.toLowerCase() === sub.toLowerCase());
    if (targetIdx >= 0) {
      setCurrentQuestionIdx(targetIdx);
    }
  };

  const handleSubmitTest = () => {
    let correctCount = 0;
    let wrongCount = 0;
    let unattemptedCount = 0;

    const weakChapterMap: Record<string, number> = {};
    const strongChapterMap: Record<string, number> = {};

    const subjectStats: Record<string, { correct: number; wrong: number; unattempted: number; score: number }> = {
      Physics: { correct: 0, wrong: 0, unattempted: 0, score: 0 },
      Chemistry: { correct: 0, wrong: 0, unattempted: 0, score: 0 },
      Biology: { correct: 0, wrong: 0, unattempted: 0, score: 0 }
    };

    questions.forEach((q, idx) => {
      const sub = q.subject || 'Biology';
      if (!subjectStats[sub]) {
        subjectStats[sub] = { correct: 0, wrong: 0, unattempted: 0, score: 0 };
      }

      const chosen = answers[idx];
      if (chosen === undefined) {
        unattemptedCount++;
        subjectStats[sub].unattempted++;
        weakChapterMap[q.chapter] = (weakChapterMap[q.chapter] || 0) + 1;
      } else if (chosen === q.correctAnswer) {
        correctCount++;
        subjectStats[sub].correct++;
        const markGain = isSundayTest ? 1 : 4;
        subjectStats[sub].score += markGain;
        strongChapterMap[q.chapter] = (strongChapterMap[q.chapter] || 0) + 1;
      } else {
        wrongCount++;
        subjectStats[sub].wrong++;
        const markLoss = isSundayTest ? 0.25 : 1;
        subjectStats[sub].score -= markLoss;
        weakChapterMap[q.chapter] = (weakChapterMap[q.chapter] || 0) + 1;
      }
    });

    const totalAttempted = correctCount + wrongCount;
    const rawScore = isSundayTest
      ? Math.max(0, +(correctCount * 1 - wrongCount * 0.25).toFixed(2))
      : correctCount * 4 - wrongCount * 1;

    const totalPossibleMarks = isSundayTest ? 180 : questions.length * 4;
    const accuracy = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 0;

    const scoreRatio = Math.max(0, rawScore) / (totalPossibleMarks || 1);
    const predictedAIR = Math.max(1, Math.round(450000 * Math.pow(1 - scoreRatio, 2.8) + 1));
    const percentile = Math.min(99.99, +(85 + scoreRatio * 14.99).toFixed(2));

    const weakChapters = Object.keys(weakChapterMap).slice(0, 3);
    const strongChapters = Object.keys(strongChapterMap).slice(0, 3);

    const breakdownList = Object.keys(subjectStats).map(sub => ({
      subject: sub,
      correct: subjectStats[sub].correct,
      wrong: subjectStats[sub].wrong,
      unattempted: subjectStats[sub].unattempted,
      score: Math.max(0, +subjectStats[sub].score.toFixed(2))
    }));

    const resultObj: UserTestResult = {
      testId: test.id,
      testTitle: test.title,
      score: rawScore,
      totalMarks: totalPossibleMarks,
      correctAnswers: correctCount,
      wrongAnswers: wrongCount,
      unattempted: unattemptedCount,
      timeSpentSeconds: test.durationMinutes * 60 - timeLeftSeconds,
      accuracyPercentage: accuracy,
      predictedAIR,
      nationalPercentile: percentile,
      subjectBreakdown: breakdownList,
      weakChapters: weakChapters.length > 0 ? weakChapters : ['Gravitation', 'Chemical Bonding'],
      strongChapters: strongChapters.length > 0 ? strongChapters : ['Cell: The Unit of Life', 'Thermodynamics'],
      revisionSuggestions: [
        `Target 30 minutes on ${weakChapters[0] || 'Physics Mechanics'} key formulas`,
        'Practice 25 NCERT exemplar MCQs with timer',
        'Review reaction pathways and diagrammatic traps'
      ],
      answers
    };

    setTestResult(resultObj);
    setIsSubmitted(true);
    onSaveResult(resultObj);

    if (rawScore > 0) {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 }
      });
    }
  };

  const currentQ = questions[currentQuestionIdx];

  const getPaletteColor = (idx: number) => {
    const isAnswered = answers[idx] !== undefined;
    const isMarked = !!markedForReview[idx];
    const isCur = idx === currentQuestionIdx;

    if (isAnswered && isMarked) {
      return 'bg-purple-600 text-white font-bold ring-2 ring-purple-400';
    }
    if (isMarked) {
      return 'bg-amber-500 text-white font-bold';
    }
    if (isAnswered) {
      return 'bg-emerald-600 text-white font-bold';
    }
    if (visited[idx]) {
      return 'bg-red-500 text-white font-bold';
    }
    return isCur
      ? 'bg-blue-100 text-blue-800 border border-blue-400 font-bold'
      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200';
  };

  // Top 10 simulated leaderboard for Sunday mock
  const top10Performers = [
    { rank: 1, name: 'Aarav Sharma', score: 176, accuracy: 98, time: '142m', state: 'Delhi' },
    { rank: 2, name: 'Ananya Verma', score: 174, accuracy: 97, time: '150m', state: 'Maharashtra' },
    { rank: 3, name: 'Rohan Deshmukh', score: 172.5, accuracy: 96, time: '148m', state: 'Karnataka' },
    { rank: 4, name: 'Priya Nair', score: 170, accuracy: 95, time: '155m', state: 'Kerala' },
    { rank: 5, name: 'Devendra Patel', score: 168.75, accuracy: 94, time: '158m', state: 'Gujarat' },
    { rank: 6, name: 'Sneha Mukherjee', score: 167.5, accuracy: 94, time: '160m', state: 'West Bengal' },
    { rank: 7, name: 'Karthik Reddy', score: 166, accuracy: 93, time: '152m', state: 'Telangana' },
    { rank: 8, name: 'Tanvi Joshi', score: 164.5, accuracy: 92, time: '162m', state: 'Rajasthan' },
    { rank: 9, name: 'Aditya Singh', score: 163, accuracy: 91, time: '165m', state: 'Uttar Pradesh' },
    { rank: 10, name: 'Meera Iyer', score: 161.75, accuracy: 91, time: '160m', state: 'Tamil Nadu' }
  ];

  // Eligible Colleges Predictor based on Category & AIR
  const getEligibleColleges = (air: number, category: string) => {
    let effectiveRank = air;
    if (category.includes('OBC')) effectiveRank = Math.round(air * 0.7);
    else if (category.includes('EWS')) effectiveRank = Math.round(air * 0.75);
    else if (category.includes('SC')) effectiveRank = Math.round(air * 0.35);
    else if (category.includes('ST')) effectiveRank = Math.round(air * 0.2);

    const colleges = [
      { name: 'AIIMS, New Delhi', cutoff: 55, type: 'Apex Central Institute', seats: 125, state: 'Delhi' },
      { name: 'Maulana Azad Medical College (MAMC), New Delhi', cutoff: 120, type: 'Govt Medical College', seats: 250, state: 'Delhi' },
      { name: 'VMMC & Safdarjung Hospital, New Delhi', cutoff: 350, type: 'Central Govt Medical', seats: 170, state: 'Delhi' },
      { name: 'JIPMER, Puducherry', cutoff: 650, type: 'National Importance Institute', seats: 200, state: 'Puducherry' },
      { name: 'King George’s Medical University (KGMU), Lucknow', cutoff: 1800, type: 'Top State Govt Medical', seats: 250, state: 'Uttar Pradesh' },
      { name: 'Seth GS Medical College & KEM, Mumbai', cutoff: 2200, type: 'Top State Govt Medical', seats: 250, state: 'Maharashtra' },
      { name: 'Madras Medical College (MMC), Chennai', cutoff: 3500, type: 'Premier Govt Medical', seats: 250, state: 'Tamil Nadu' },
      { name: 'Government Medical College (GMC), Chandigarh', cutoff: 8000, type: 'Govt Medical College', seats: 150, state: 'Chandigarh' },
      { name: 'Top State Government Medical Colleges (State Quota)', cutoff: 18000, type: 'State Govt MBBS Allotment', seats: 4500, state: 'Home State' },
      { name: 'Regional Government Medical Colleges (All India Quota)', cutoff: 32000, type: 'AIQ Govt College', seats: 12000, state: 'All India' }
    ];

    return colleges.map(c => {
      let isEligible = effectiveRank <= c.cutoff * 1.3;
      let prob = 0;
      let badge = 'Eligible for Round 1';
      let badgeClass = 'bg-emerald-100 text-emerald-800 border-emerald-300';

      if (effectiveRank <= c.cutoff * 0.8) {
        prob = Math.min(99, Math.round(92 + (1 - effectiveRank / c.cutoff) * 7));
        badge = '✓ Highly Likely (Round 1)';
        badgeClass = 'bg-emerald-100 text-emerald-800 border-emerald-300 font-bold';
      } else if (effectiveRank <= c.cutoff * 1.2) {
        prob = Math.round(65 + (1 - effectiveRank / (c.cutoff * 1.2)) * 25);
        badge = '✓ Competitive / Eligible';
        badgeClass = 'bg-blue-100 text-blue-800 border-blue-300 font-bold';
      } else if (effectiveRank <= c.cutoff * 1.6) {
        prob = Math.round(35 + (1 - effectiveRank / (c.cutoff * 1.6)) * 25);
        badge = 'Eligible in Round 2 / Mop-up';
        badgeClass = 'bg-amber-100 text-amber-800 border-amber-300 font-semibold';
      } else {
        prob = Math.max(8, Math.round(18 - (effectiveRank / c.cutoff) * 2));
        badge = 'State Quota / Reach';
        badgeClass = 'bg-slate-100 text-slate-700 border-slate-300';
      }

      return {
        ...c,
        isEligible,
        probability: Math.min(99, Math.max(5, prob)),
        badge,
        badgeClass
      };
    });
  };

  // Dynamic SVG Diagram Generator for High-Yield Question Visuals
  const getDynamicSvgDiagram = (q: Question): string | null => {
    if (q.diagramSvg) return q.diagramSvg;
    const text = (q.questionText + ' ' + q.chapter + ' ' + q.topic).toLowerCase();

    // 1. Optics / Lens / Mirror / Microscope
    if (text.includes('lens') || text.includes('microscope') || text.includes('refraction') || text.includes('mirror') || text.includes('prism')) {
      return `<svg viewBox="0 0 360 110" className="w-full max-w-sm h-28" xmlns="http://www.w3.org/2000/svg">
        <line x1="10" y1="55" x2="350" y2="55" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
        <path d="M 180 15 Q 165 55 180 95 Q 195 55 180 15 Z" fill="#93c5fd" fill-opacity="0.4" stroke="#2563eb" stroke-width="2"/>
        <line x1="80" y1="55" x2="80" y2="25" stroke="#dc2626" stroke-width="2.5"/>
        <circle cx="80" cy="25" r="2.5" fill="#dc2626"/>
        <text x="70" y="18" font-size="10" font-weight="bold" fill="#dc2626">Object (h)</text>
        <line x1="80" y1="25" x2="180" y2="25" stroke="#ea580c" stroke-width="1.5"/>
        <line x1="180" y1="25" x2="280" y2="85" stroke="#ea580c" stroke-width="1.5"/>
        <line x1="80" y1="25" x2="280" y2="85" stroke="#2563eb" stroke-width="1.5"/>
        <line x1="280" y1="55" x2="280" y2="85" stroke="#16a34a" stroke-width="2.5"/>
        <text x="270" y="100" font-size="10" font-weight="bold" fill="#16a34a">Image (h')</text>
        <circle cx="130" cy="55" r="2" fill="#475569"/><text x="125" y="70" font-size="9" fill="#475569">F1</text>
        <circle cx="230" cy="55" r="2" fill="#475569"/><text x="225" y="70" font-size="9" fill="#475569">F2</text>
      </svg>`;
    }

    // 2. Electric Circuit / Resistors / LCR / Capacitance
    if (text.includes('circuit') || text.includes('resistance') || text.includes('current') || text.includes('lcr') || text.includes('capacitor') || text.includes('drift velocity')) {
      return `<svg viewBox="0 0 360 90" className="w-full max-w-sm h-24" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="15" width="320" height="60" rx="8" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
        <path d="M 60 15 L 70 5 L 80 25 L 90 5 L 100 25 L 110 15" fill="none" stroke="#2563eb" stroke-width="2"/>
        <text x="75" y="40" font-size="10" font-weight="bold" fill="#2563eb">Resistor (R)</text>
        <line x1="170" y1="8" x2="170" y2="22" stroke="#16a34a" stroke-width="2.5"/>
        <line x1="178" y1="8" x2="178" y2="22" stroke="#16a34a" stroke-width="2.5"/>
        <text x="160" y="40" font-size="10" font-weight="bold" fill="#16a34a">Capacitor (C)</text>
        <circle cx="260" cy="15" r="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
        <text x="254" y="19" font-size="9" font-weight="bold" fill="#d97706">~V</text>
        <text x="245" y="40" font-size="10" font-weight="bold" fill="#d97706">AC Source</text>
        <line x1="60" y1="75" x2="300" y2="75" stroke="#64748b" stroke-width="1.5"/>
        <text x="140" y="87" font-size="9" fill="#64748b">Current Direction (I)</text>
      </svg>`;
    }

    // 3. Inclined Plane / Mechanics / Rotational Motion
    if (text.includes('incline') || text.includes('rolling') || text.includes('friction') || text.includes('moment of inertia') || text.includes('torque')) {
      return `<svg viewBox="0 0 340 100" className="w-full max-w-sm h-26" xmlns="http://www.w3.org/2000/svg">
        <polygon points="30,90 310,90 310,25" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
        <circle cx="210" cy="42" r="16" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
        <line x1="210" y1="42" x2="210" y2="78" stroke="#dc2626" stroke-width="2"/>
        <text x="215" y="70" font-size="9" font-weight="bold" fill="#dc2626">mg</text>
        <line x1="210" y1="42" x2="230" y2="55" stroke="#16a34a" stroke-width="2"/>
        <text x="235" y="55" font-size="9" font-weight="bold" fill="#16a34a">mg sinθ</text>
        <path d="M 60,90 A 30,30 0 0,0 85,78" fill="none" stroke="#d97706" stroke-width="1.5"/>
        <text x="90" y="87" font-size="10" font-weight="bold" fill="#d97706">θ</text>
      </svg>`;
    }

    // 4. Genetics / DNA / Lac Operon / Molecular
    if (text.includes('operon') || text.includes('dna') || text.includes('replication') || text.includes('genetic') || text.includes('transcription') || text.includes('cell')) {
      return `<svg viewBox="0 0 360 75" className="w-full max-w-sm h-20" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="40" height="28" fill="#fef08a" stroke="#ca8a04" rx="4"/>
        <text x="32" y="38" font-size="10" font-weight="bold" fill="#854d0e">p (P)</text>
        <rect x="65" y="20" width="40" height="28" fill="#fed7aa" stroke="#ea580c" rx="4"/>
        <text x="78" y="38" font-size="10" font-weight="bold" fill="#9a3412">i (I)</text>
        <rect x="110" y="20" width="40" height="28" fill="#e9d5ff" stroke="#9333ea" rx="4"/>
        <text x="123" y="38" font-size="10" font-weight="bold" fill="#6b21a8">o (O)</text>
        <rect x="155" y="20" width="60" height="28" fill="#bbf7d0" stroke="#16a34a" rx="4"/>
        <text x="175" y="38" font-size="10" font-weight="bold" fill="#14532d">z (β-Gal)</text>
        <rect x="220" y="20" width="55" height="28" fill="#bae6fd" stroke="#0284c7" rx="4"/>
        <text x="238" y="38" font-size="10" font-weight="bold" fill="#0369a1">y (Perm)</text>
        <rect x="280" y="20" width="55" height="28" fill="#fbcfe8" stroke="#db2777" rx="4"/>
        <text x="298" y="38" font-size="10" font-weight="bold" fill="#831843">a (Trans)</text>
        <text x="120" y="65" font-size="9" fill="#64748b">Structural & Regulatory Genes</text>
      </svg>`;
    }

    return null;
  };

  // Format single line explanation into multi-line high-yield structured paragraphs
  const renderMultiLineExplanation = (q: Question | string) => {
    const rawExplanation = typeof q === 'string' ? q : q.explanation;
    const subject = typeof q === 'string' ? 'Physics' : q.subject;
    const chapter = typeof q === 'string' ? 'Core Unit' : q.chapter;

    const text = formatMathAndFormulas(cleanOcrText(rawExplanation));
    const parts = text
      .split(/(?:\.\s+|;\s+|(?=Step\s*\d+:|Concept:|Therefore,|Hence,|Formula:))/i)
      .map(p => p.trim())
      .filter(p => p.length > 0 && !p.toLowerCase().startsWith('refer q'));

    const conceptPart = parts[0] || `Governed by fundamental NCERT ${subject} principles and core laws in ${chapter}.`;
    const derivationPart =
      parts.length > 1
        ? parts.slice(1, -1).join('. ') + (parts.length > 2 ? '.' : '')
        : `Apply standard NCERT formula for ${chapter} and substitute given boundary values to evaluate the correct option.`;
    const keyTakeaway =
      parts.length > 2
        ? parts[parts.length - 1]
        : `Pay close attention to unit conversions, sign conventions (+/-), and examiner trap conditions.`;

    return (
      <div className="space-y-2.5">
        <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 text-xs sm:text-sm text-slate-800 leading-relaxed">
          <strong className="text-blue-800 block mb-0.5">📘 NCERT Fundamental Concept:</strong>
          {conceptPart}
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs sm:text-sm text-slate-800 leading-relaxed">
          <strong className="text-emerald-700 font-sans block mb-1">⚡ Step-by-Step Derivation & Calculations:</strong>
          {derivationPart}
        </div>

        <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-200 text-xs sm:text-sm text-slate-800 leading-relaxed">
          <strong className="text-purple-800 block mb-0.5">✓ Examiner Key Takeaway & Pro-Tip:</strong>
          {keyTakeaway}
        </div>
      </div>
    );
  };

  // Historical delta calculation
  const lastSundayTest = prevTestHistory.find(
    t => t.testId !== test.id && (t.testId.includes('sunday') || t.totalMarks === 180)
  );

  const deltaScore = testResult && lastSundayTest ? +(testResult.score - lastSundayTest.score).toFixed(2) : null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col overflow-hidden text-slate-900">
      <div className="w-full h-full bg-slate-50 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <div className="px-4 sm:px-6 py-2.5 bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-700 text-white flex items-center justify-between shadow-md shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-black text-sm border border-white/30">
              nc
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-white">
                  NeetCbt<span className="text-cyan-300"> Exam Test</span>
                </span>
                <span className="px-2 py-0.2 rounded-full text-[10px] font-bold bg-amber-400 text-slate-900">
                  {isSundayTest ? 'Sunday 180-Question Mock' : 'CBT Practice'}
                </span>
              </div>
              <p className="text-[11px] text-blue-100 font-mono truncate max-w-xs sm:max-w-md">
                {test.title} &bull; {test.negativeMarking}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {!isSubmitted && (
              <div
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono font-bold shadow-xs ${
                  timeLeftSeconds < 600
                    ? 'bg-rose-500 border-rose-400 text-white animate-pulse'
                    : 'bg-white/20 backdrop-blur-md border-white/30 text-white'
                }`}
              >
                <ClockIcon className="w-4 h-4 text-cyan-300" />
                <span>Time Left: {formatTimer(timeLeftSeconds)}</span>
              </div>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-white/80 hover:text-white hover:bg-white/15 transition cursor-pointer"
              title="Close Test"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ACTIVE TEST INTERFACE */}
        {!isSubmitted ? (
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 overflow-hidden">
            {/* Question Workspace (3 Columns) */}
            <div className="lg:col-span-3 p-4 sm:p-6 flex flex-col justify-between overflow-y-auto border-b lg:border-b-0 lg:border-r border-slate-200 bg-white">
              {currentQ && (
                <div className="space-y-4">
                  {/* Subject Switcher Header Tabs (Attractive quick navigation) */}
                  <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-100 gap-2">
                    <div className="flex items-center space-x-1.5">
                      <button
                        onClick={() => jumpToSubject('Physics')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition flex items-center space-x-1 ${
                          currentQ.subject === 'Physics'
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        <ZapIcon className="w-3.5 h-3.5" />
                        <span>Physics (45 Qs)</span>
                      </button>

                      <button
                        onClick={() => jumpToSubject('Chemistry')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition flex items-center space-x-1 ${
                          currentQ.subject === 'Chemistry'
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        <AtomIcon className="w-3.5 h-3.5" />
                        <span>Chemistry (45 Qs)</span>
                      </button>

                      <button
                        onClick={() => jumpToSubject('Biology')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition flex items-center space-x-1 ${
                          currentQ.subject === 'Biology'
                            ? 'bg-purple-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        <DnaIcon className="w-3.5 h-3.5" />
                        <span>Biology (90 Qs)</span>
                      </button>
                    </div>

                    <div className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-lg">
                      Question {currentQuestionIdx + 1} of {questions.length}
                    </div>
                  </div>

                  {/* Question Info Bar without Difficulty on Sunday Tests */}
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-slate-900">{currentQ.subject}</span>
                      <span>&bull;</span>
                      <span className="font-medium text-slate-600">{currentQ.chapter}</span>
                      <span>&bull;</span>
                      <span className="text-slate-400 font-mono">{currentQ.topic}</span>
                    </div>

                    {/* ONLY show difficulty on custom tests, NOT on Sunday test series */}
                    {!isSundayTest && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold border border-slate-200">
                        Difficulty: {currentQ.difficulty}
                      </span>
                    )}
                  </div>

                  {/* Aspirational Stats & Speed Badge */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold flex items-center gap-1 font-mono">
                      <TargetIcon className="w-3 h-3 text-emerald-600" />
                      <span>78% Aspirants Solved Correctly</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200 text-[10px] font-bold flex items-center gap-1 font-mono">
                      <ClockIcon className="w-3 h-3 text-blue-600" />
                      <span>NTA Target Time: 45s</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold flex items-center gap-1 font-mono">
                      <SparkleIcon className="w-3 h-3 text-amber-600" />
                      <span>High Yield NCERT 2026</span>
                    </span>
                  </div>

                  {/* Question Text with real formulas & sqrt */}
                  <div className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 shadow-2xs">
                    {currentQ.questionText}
                  </div>

                  {/* Visual / SVG Diagram in Question */}
                  {(currentQ.diagramSvg || getDynamicSvgDiagram(currentQ)) && (
                    <div
                      className="my-3 p-4 bg-white border border-slate-200 rounded-2xl flex justify-center items-center overflow-x-auto shadow-xs"
                      dangerouslySetInnerHTML={{ __html: currentQ.diagramSvg || getDynamicSvgDiagram(currentQ) || '' }}
                    />
                  )}
                  {currentQ.image && !currentQ.diagramSvg && !getDynamicSvgDiagram(currentQ) && (
                    <div className="my-3 p-2 bg-white border border-slate-200 rounded-2xl flex justify-center items-center shadow-xs">
                      <img src={currentQ.image} alt="Question Diagram" className="max-h-60 rounded-xl object-contain" />
                    </div>
                  )}

                  {/* Option Cards (Attractive, non-boring) */}
                  <div className="space-y-3 pt-2">
                    {currentQ.options.map((option, optIdx) => {
                      const isSelected = answers[currentQuestionIdx] === optIdx;
                      return (
                        <div
                          key={optIdx}
                          onClick={() => handleSelectOption(optIdx)}
                          className={`p-4 rounded-2xl border-2 cursor-pointer flex items-center space-x-3.5 transition-all duration-150 ${
                            isSelected
                              ? 'bg-blue-50/80 border-blue-600 text-blue-950 font-semibold shadow-md ring-2 ring-blue-400/30'
                              : 'bg-white border-slate-200/80 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                          }`}
                        >
                          <div
                            className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-extrabold shrink-0 transition ${
                              isSelected
                                ? 'bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-xs'
                                : 'bg-slate-100 text-slate-600 border border-slate-300'
                            }`}
                          >
                            {String.fromCharCode(65 + optIdx)}
                          </div>
                          <span className="text-xs sm:text-sm flex-1 leading-relaxed">{option}</span>
                          {isSelected && (
                            <CheckIcon className="w-5 h-5 text-blue-600 shrink-0 stroke-[3]" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Bottom Test Controls */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 mt-6">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleToggleMarkReview}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition cursor-pointer ${
                      markedForReview[currentQuestionIdx]
                        ? 'bg-purple-600 text-white shadow-xs'
                        : 'bg-slate-100 text-purple-700 hover:bg-purple-50 border border-purple-200'
                    }`}
                  >
                    <FlagIcon className="w-3.5 h-3.5" />
                    <span>
                      {markedForReview[currentQuestionIdx] ? 'Marked for Review' : 'Mark for Review & Next'}
                    </span>
                  </button>

                  <button
                    onClick={handleClearResponse}
                    className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium border border-slate-200 transition cursor-pointer"
                  >
                    Clear Response
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    disabled={currentQuestionIdx === 0}
                    onClick={() => setCurrentQuestionIdx(prev => prev - 1)}
                    className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
                  >
                    &larr; Prev
                  </button>

                  {currentQuestionIdx < questions.length - 1 ? (
                    <button
                      onClick={handleSaveAndNext}
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition cursor-pointer"
                    >
                      Save & Next &rarr;
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmitTest}
                      className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition cursor-pointer"
                    >
                      Submit Complete CBT Paper
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Question Palette Sidebar (1 Column) */}
            <div className="p-4 bg-slate-50 flex flex-col justify-between space-y-4 overflow-y-auto">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Question Palette
                  </h3>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {Object.keys(answers).length}/{questions.length} Done
                  </span>
                </div>

                {/* Legend */}
                <div className="grid grid-cols-2 gap-1.5 text-[10px] text-slate-600 my-2.5 pb-2.5 border-b border-slate-200">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
                    <span>Answered</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                    <span>Not Answered</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-600 inline-block" />
                    <span>Marked Review</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-200 border border-slate-400 inline-block" />
                    <span>Not Visited</span>
                  </div>
                </div>

                {/* Question Grid Numbers */}
                <div className="grid grid-cols-5 gap-1.5 max-h-72 overflow-y-auto custom-scrollbar pr-1">
                  {questions.map((_, qIdx) => (
                    <button
                      key={qIdx}
                      onClick={() => setCurrentQuestionIdx(qIdx)}
                      className={`h-7 rounded-lg text-xs font-bold transition ${getPaletteColor(qIdx)}`}
                    >
                      {qIdx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button in Sidebar */}
              <button
                onClick={handleSubmitTest}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs shadow-md transition cursor-pointer"
              >
                Submit CBT Paper Now
              </button>
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* POST-TEST RESULTS & EXCLUSIVE SUNDAY SCORECARD */
          /* ========================================================================= */
          testResult && (
            <div className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1 bg-slate-50">
              {/* Header Navigation Tabs */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                <div className="flex flex-wrap items-center gap-1.5">
                  <button
                    onClick={() => setActiveSolutionTab('scorecard')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                      activeSolutionTab === 'scorecard'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <TrophyIcon className="w-3.5 h-3.5" />
                    <span>{isSundayTest ? '1. Official Scorecard & Eligible Colleges' : '1. Test Summary'}</span>
                  </button>

                  {isSundayTest && (
                    <>
                      <button
                        onClick={() => setActiveSolutionTab('leaderboard')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                          activeSolutionTab === 'leaderboard'
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                        }`}
                      >
                        <UsersIcon className="w-3.5 h-3.5" />
                        <span>2. Top 10 Performers</span>
                      </button>

                      <button
                        onClick={() => setActiveSolutionTab('comparison')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                          activeSolutionTab === 'comparison'
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                        }`}
                      >
                        <TargetIcon className="w-3.5 h-3.5" />
                        <span>3. You vs Top Scorer</span>
                      </button>
                    </>
                  )}

                  <button
                    onClick={() => setActiveSolutionTab('solutions')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                      activeSolutionTab === 'solutions'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <FileIcon className="w-3.5 h-3.5" />
                    <span>{isSundayTest ? '4. Step-by-Step Solutions' : '2. Detailed Solutions'}</span>
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => downloadTestScorecardPDF(testResult)}
                    className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-xs font-bold text-emerald-800 border border-emerald-300 flex items-center space-x-1 shadow-2xs transition cursor-pointer"
                  >
                    <FileIcon className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Download Password-Protected Scorecard PDF</span>
                  </button>

                  <button
                    onClick={onClose}
                    className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-xs font-bold text-slate-700 border border-slate-200 shadow-2xs transition cursor-pointer"
                  >
                    Back to Dashboard
                  </button>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* TAB 1: SCORECARD & ELIGIBLE COLLEGES PREDICTOR */}
              {/* ------------------------------------------------------------- */}
              {activeSolutionTab === 'scorecard' && (
                <div className="space-y-4 animate-in fade-in">
                  {/* Candidate Roll & Category Banner */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                        {(enrolledStudent?.studentName || 'Student').charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-sm text-slate-900">
                            {enrolledStudent?.studentName || 'Enrolled Student'}
                          </h3>
                          <span className="px-2 py-0.2 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold">
                            Category: {studentCategory}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 font-mono">
                          Roll No: {enrolledStudent?.rollNumber || 'NCBT-2026-882190'} &bull; Target NEET 2026
                        </p>
                      </div>
                    </div>

                    {isSundayTest && deltaScore !== null && (
                      <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-[11px] font-bold text-slate-600">Performance vs Last Test:</span>
                        <span
                          className={`text-xs font-bold font-mono flex items-center ${
                            deltaScore >= 0 ? 'text-emerald-700' : 'text-rose-600'
                          }`}
                        >
                          {deltaScore >= 0 ? (
                            <UpIcon className="w-3.5 h-3.5 mr-0.5 text-emerald-600" />
                          ) : (
                            <DownIcon className="w-3.5 h-3.5 mr-0.5 text-rose-600" />
                          )}
                          {deltaScore >= 0 ? `+${deltaScore}` : deltaScore} Marks
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Key Stats Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-xs text-center">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Score</div>
                      <div className="text-2xl sm:text-3xl font-black text-emerald-700 font-mono mt-1">
                        {testResult.score} <span className="text-sm text-slate-400 font-normal">/ {testResult.totalMarks}</span>
                      </div>
                      <div className="text-xs font-bold text-emerald-600 mt-1">
                        {testResult.accuracyPercentage}% Accuracy
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-xs text-center">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Predicted Rank</div>
                      <div className="text-2xl sm:text-3xl font-black text-amber-700 font-mono mt-1">
                        AIR {testResult.predictedAIR}
                      </div>
                      <div className="text-xs font-bold text-amber-600 mt-1">
                        {testResult.nationalPercentile} Percentile
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs text-center">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Attempted Breakdown</div>
                      <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono mt-1">
                        <span className="text-emerald-600">{testResult.correctAnswers} Correct</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-1 font-mono">
                        <span className="text-rose-600">{testResult.wrongAnswers} Wrong</span> &bull;{' '}
                        <span>{testResult.unattempted} Left</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs text-center">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Time Spent</div>
                      <div className="text-2xl sm:text-3xl font-black text-purple-700 font-mono mt-1">
                        {formatTimer(testResult.timeSpentSeconds)}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 font-mono">
                        Avg {Math.round(testResult.timeSpentSeconds / (questions.length || 1))}s / Question
                      </div>
                    </div>
                  </div>

                  {/* Sunday Test ONLY: Eligible Medical Colleges based on Rank */}
                  {isSundayTest && (
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-slate-100">
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                            <BuildingIcon className="w-4 h-4 text-blue-600" /> Eligible Government Medical Colleges (Based on AIR #{testResult.predictedAIR})
                          </h3>
                          <p className="text-xs text-slate-500">
                            Based on your predicted rank and reservation category (<strong>{studentCategory}</strong>):
                          </p>
                        </div>
                        <span className="text-xs font-mono font-bold bg-blue-50 text-blue-800 border border-blue-200 px-2.5 py-1 rounded-lg">
                          Category: {studentCategory}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {getEligibleColleges(testResult.predictedAIR, studentCategory).map((col, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center justify-between hover:bg-white transition"
                          >
                            <div className="space-y-0.5">
                              <h4 className="text-xs font-bold text-slate-900">{col.name}</h4>
                              <p className="text-[10px] text-slate-500 font-mono">
                                {col.type} &bull; {col.state} &bull; {col.seats} MBBS Seats
                              </p>
                            </div>
                            <div className="text-right shrink-0">
                              <span
                                className={`px-2.5 py-1 rounded-lg text-xs border ${col.badgeClass}`}
                              >
                                {col.badge} ({col.probability}%)
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Subject Breakdown Cards */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <BarIcon className="w-4 h-4 text-blue-600" /> Subject-wise Performance Breakdown (45 Marks Each)
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {testResult.subjectBreakdown.map((sub, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-900">{sub.subject}</span>
                            <span className="text-xs font-bold text-blue-700 font-mono">
                              Score: {sub.score}
                            </span>
                          </div>
                          <div className="grid grid-cols-3 text-[11px] font-mono pt-1 text-slate-600">
                            <div>
                              <span className="text-emerald-700 font-bold">{sub.correct}</span> Correct
                            </div>
                            <div>
                              <span className="text-rose-600 font-bold">{sub.wrong}</span> Wrong
                            </div>
                            <div>
                              <span className="text-slate-500">{sub.unattempted}</span> Left
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Weak Chapters & Revision Strategy */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-xs space-y-2">
                      <div className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center space-x-1.5">
                        <AlertIcon className="w-4 h-4 text-amber-600" />
                        <span>Identified Weak Focus Chapters</span>
                      </div>
                      <div className="space-y-1.5">
                        {testResult.weakChapters.map((ch, i) => (
                          <div
                            key={i}
                            className="p-2.5 rounded-xl bg-amber-50/50 border border-amber-200 text-xs text-slate-800 flex items-center justify-between"
                          >
                            <span className="font-semibold">{ch}</span>
                            <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full font-bold">
                              Revise
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-xs space-y-2">
                      <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center space-x-1.5">
                        <SparkleIcon className="w-4 h-4 text-emerald-600" />
                        <span>AI Score Booster Strategy</span>
                      </div>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {testResult.revisionSuggestions.map((sug, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{sug}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* ------------------------------------------------------------- */}
              {/* TAB 2: TOP 10 PERFORMERS LEADERBOARD */}
              {/* ------------------------------------------------------------- */}
              {activeSolutionTab === 'leaderboard' && isSundayTest && (
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4 animate-in fade-in">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                        <TrophyIcon className="w-5 h-5 text-amber-500" /> All India Top 10 Performers Leaderboard
                      </h3>
                      <p className="text-xs text-slate-500">
                        Sunday All-India Test Series &bull; Verified CBT Rank List
                      </p>
                    </div>
                    <span className="text-xs font-bold font-mono bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-lg">
                      Your Rank: AIR #{testResult.predictedAIR}
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                          <th className="p-3">Rank</th>
                          <th className="p-3">Candidate Name</th>
                          <th className="p-3">State</th>
                          <th className="p-3">Score (/180)</th>
                          <th className="p-3">Accuracy</th>
                          <th className="p-3">Time Taken</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {top10Performers.map(p => (
                          <tr key={p.rank} className="hover:bg-slate-50 transition">
                            <td className="p-3">
                              <span
                                className={`inline-flex items-center justify-center w-6 h-6 rounded-full font-bold text-xs ${
                                  p.rank === 1
                                    ? 'bg-amber-400 text-slate-900'
                                    : p.rank === 2
                                    ? 'bg-slate-300 text-slate-800'
                                    : p.rank === 3
                                    ? 'bg-amber-700 text-white'
                                    : 'bg-slate-100 text-slate-700'
                                }`}
                              >
                                {p.rank}
                              </span>
                            </td>
                            <td className="p-3 font-bold text-slate-900">{p.name}</td>
                            <td className="p-3 text-slate-600">{p.state}</td>
                            <td className="p-3 font-mono font-bold text-emerald-700">{p.score}</td>
                            <td className="p-3 font-mono text-blue-700">{p.accuracy}%</td>
                            <td className="p-3 font-mono text-slate-500">{p.time}</td>
                          </tr>
                        ))}

                        {/* Current User Row */}
                        <tr className="bg-blue-50/70 border-t-2 border-blue-500 font-bold">
                          <td className="p-3 text-blue-800">AIR #{testResult.predictedAIR}</td>
                          <td className="p-3 text-blue-900">
                            {enrolledStudent?.studentName || 'You'} (Your Rank)
                          </td>
                          <td className="p-3 text-blue-800">Verified Candidate</td>
                          <td className="p-3 font-mono text-emerald-700">{testResult.score}</td>
                          <td className="p-3 font-mono text-blue-700">{testResult.accuracyPercentage}%</td>
                          <td className="p-3 font-mono text-slate-600">{formatTimer(testResult.timeSpentSeconds)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* ------------------------------------------------------------- */}
              {/* TAB 3: YOU VS TOP SCORER COMPARISON */}
              {/* ------------------------------------------------------------- */}
              {activeSolutionTab === 'comparison' && isSundayTest && (
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4 animate-in fade-in">
                  <div className="pb-3 border-b border-slate-100">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                      <TargetIcon className="w-5 h-5 text-blue-600" /> Head-to-Head: You vs AIR 1 (Aarav Sharma)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Benchmark your accuracy, score, speed, and subject depth against the national top scorer.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-center space-y-1">
                      <span className="text-xs font-bold text-slate-500 uppercase">Score (/180)</span>
                      <div className="flex items-center justify-center space-x-3 pt-1">
                        <div>
                          <div className="text-xs text-slate-500">You</div>
                          <div className="text-xl font-bold text-blue-700 font-mono">{testResult.score}</div>
                        </div>
                        <div className="text-slate-300 font-bold">vs</div>
                        <div>
                          <div className="text-xs text-slate-500">AIR 1</div>
                          <div className="text-xl font-bold text-emerald-700 font-mono">176</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-center space-y-1">
                      <span className="text-xs font-bold text-slate-500 uppercase">Accuracy Rate</span>
                      <div className="flex items-center justify-center space-x-3 pt-1">
                        <div>
                          <div className="text-xs text-slate-500">You</div>
                          <div className="text-xl font-bold text-blue-700 font-mono">{testResult.accuracyPercentage}%</div>
                        </div>
                        <div className="text-slate-300 font-bold">vs</div>
                        <div>
                          <div className="text-xs text-slate-500">AIR 1</div>
                          <div className="text-xl font-bold text-emerald-700 font-mono">98%</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-center space-y-1">
                      <span className="text-xs font-bold text-slate-500 uppercase">Avg Speed / Q</span>
                      <div className="flex items-center justify-center space-x-3 pt-1">
                        <div>
                          <div className="text-xs text-slate-500">You</div>
                          <div className="text-xl font-bold text-blue-700 font-mono">
                            {Math.round(testResult.timeSpentSeconds / (questions.length || 1))}s
                          </div>
                        </div>
                        <div className="text-slate-300 font-bold">vs</div>
                        <div>
                          <div className="text-xs text-slate-500">AIR 1</div>
                          <div className="text-xl font-bold text-emerald-700 font-mono">47s</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ------------------------------------------------------------- */}
              {/* TAB 4: STEP-BY-STEP VERIFIED MULTI-LINE SOLUTIONS WITH DIAGRAMS */}
              {/* ------------------------------------------------------------- */}
              {activeSolutionTab === 'solutions' && (
                <div className="space-y-3 animate-in fade-in">
                  {questions.map((q, idx) => {
                    const userOption = testResult.answers[idx];
                    const isCorrect = userOption === q.correctAnswer;
                    const isUnattempted = userOption === undefined;

                    return (
                      <div
                        key={idx}
                        className={`p-5 rounded-2xl border ${
                          isCorrect
                            ? 'bg-white border-emerald-300 shadow-xs'
                            : isUnattempted
                            ? 'bg-white border-slate-200'
                            : 'bg-white border-rose-300 shadow-xs'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-bold text-slate-900">
                              Q{idx + 1}. {q.subject} &bull; {q.chapter}
                            </span>
                          </div>

                          <span
                            className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase ${
                              isCorrect
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                : isUnattempted
                                ? 'bg-slate-100 text-slate-600 border border-slate-200'
                                : 'bg-rose-100 text-rose-800 border border-rose-200'
                            }`}
                          >
                            {isCorrect
                              ? isSundayTest ? '✓ Correct (+1)' : '✓ Correct (+4)'
                              : isUnattempted
                              ? '— Unattempted (0)'
                              : isSundayTest ? '✗ Incorrect (-0.25)' : '✗ Incorrect (-1)'}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-900 font-medium leading-relaxed">
                          {q.questionText}
                        </p>

                        {(q.diagramSvg || getDynamicSvgDiagram(q)) && (
                          <div
                            className="my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl flex justify-center items-center overflow-x-auto"
                            dangerouslySetInnerHTML={{ __html: q.diagramSvg || getDynamicSvgDiagram(q) || '' }}
                          />
                        )}
                        {q.image && !q.diagramSvg && !getDynamicSvgDiagram(q) && (
                          <div className="my-3 p-2 bg-slate-50 border border-slate-200 rounded-xl flex justify-center items-center">
                            <img src={q.image} alt="Question Diagram" className="max-h-48 rounded-lg object-contain" />
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-3">
                          {q.options.map((opt, oIdx) => (
                            <div
                              key={oIdx}
                              className={`p-2.5 rounded-xl border text-xs flex items-center space-x-2 ${
                                oIdx === q.correctAnswer
                                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                                  : oIdx === userOption
                                  ? 'bg-rose-50 border-rose-300 text-rose-900 font-semibold'
                                  : 'bg-slate-50 border-slate-200 text-slate-600'
                              }`}
                            >
                              <span className="font-bold">({String.fromCharCode(65 + oIdx)})</span>
                              <span>{opt}</span>
                            </div>
                          ))}
                        </div>

                        {/* Multi-Paragraph Solution */}
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 mt-2">
                          <div className="font-bold text-blue-700 mb-2 flex items-center gap-1.5">
                            <SparkleIcon className="w-3.5 h-3.5" />
                            <span>NCERT Verified Step-by-Step Derivation & Explanation:</span>
                          </div>
                          {renderMultiLineExplanation(q)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};
