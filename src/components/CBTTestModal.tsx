import React, { useState, useEffect, useMemo } from 'react';
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
  FileText,
  FileText as FileIcon,
  Compass as CompassIcon,
  Building2 as BuildingIcon,
  GraduationCap as GradIcon,
  BarChart2 as BarIcon,
  Sparkles as SparkleIcon,
  Flag as FlagIcon,
  ArrowUpRight as UpIcon,
  ArrowDownRight as DownIcon,
  CheckCheck,
  RotateCcw,
  Check,
  Bookmark,
  Award,
  TrendingUp,
  Loader,
  Percent,
  BookOpen,
  Mail,
  Phone,
  ShieldCheck,
  Activity,
  Calendar,
  Flame,
  ArrowRight
} from 'lucide-react';
import { TestItem, Question, UserTestResult } from '../types';
import { supabase } from '../supabaseClient';
import { formatMathAndFormulas } from '../utils/mathFormatter';
import { cleanOcrText } from '../utils/ocrCleaner';
import { downloadTestPaperPDF, downloadTestScorecardPDF } from '../utils/pdfDownloader';
import { recordSuperUserNotification } from '../utils/superUserNotifier';
import { getUniqueDiagramForQuestion } from '../utils/diagramEngine';
import { ErrorBoundary } from './ErrorBoundary';
import { DetailedSolutionViewer } from './DetailedSolutionViewer';
import { resolveQuestionSubtopic, normalizeChapterForDisplay } from '../utils/subtopicResolver';

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
  const isCustomTest =
    test.category === 'custom' ||
    test.id.startsWith('custom-') ||
    Boolean(selectedChapters && selectedChapters.length > 0 && !test.id.includes('sunday') && !test.id.includes('cwt'));

  const isSundayTest =
    !isCustomTest && (
      test.id.includes('sunday') ||
      test.id.includes('cwt') ||
      test.id.includes('cum') ||
      test.id.includes('part') ||
      test.totalMarks === 720 ||
      test.totalQuestions === 180 ||
      test.category === 'neet_mock'
    );

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [visited, setVisited] = useState<Record<number, boolean>>({ 0: true });
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(test.durationMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [testResult, setTestResult] = useState<UserTestResult | null>(null);
  const [activeSolutionTab, setActiveSolutionTab] = useState<'scorecard' | 'solutions' | 'leaderboard' | 'comparison'>('scorecard');

  // Load previous test history for longitudinal progression tracking
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

  const studentName = enrolledStudent?.studentName || 'Aditi Gadre';
  const rollNumber = enrolledStudent?.rollNumber || 'NCBT-2027-882190';
  const studentCategory = enrolledStudent?.caste || 'General / Open';
  const studentDomicile = 'Maharashtra (State Quota)';
  const parentName = enrolledStudent?.parentName || 'Parent / Guardian';
  const parentEmail = enrolledStudent?.parentEmail || enrolledStudent?.email || 'parent.gadre@example.com';
  const parentPhone = enrolledStudent?.parentPhone ? `+91 ${enrolledStudent.parentPhone}` : '+91 9876543211';

  const [questions, setQuestions] = useState<Question[]>(() => {
    if (test.questions && test.questions.length > 0) {
      return test.questions.map(q => {
        const rawQText = q.questionText || (q as any).question || '';
        const rawTopic = resolveQuestionSubtopic(q);
        const normChapter = normalizeChapterForDisplay(q.subject, q.chapter || '');
        return {
          ...q,
          chapter: normChapter,
          topic: rawTopic,
          questionText: formatMathAndFormulas(cleanOcrText(rawQText)),
          options: (q.options || []).map(o => formatMathAndFormulas(cleanOcrText(o))),
          explanation: formatMathAndFormulas(cleanOcrText(q.explanation || ''))
        };
      });
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

  const maxTotalMarks = test.totalMarks || questions.length * 4 || 720;

  // Dynamically compute subjects present in active test
  const activeTestSubjects = useMemo(() => {
    const subjectsMap = new Map<string, {
      name: string;
      count: number;
      marks: number;
      firstIdx: number;
      icon: any;
      activeClass: string;
    }>();

    questions.forEach((q, idx) => {
      let subName = q.subject || 'Physics';
      if (q.tags?.includes('Botany')) subName = 'Botany';
      else if (q.tags?.includes('Zoology')) subName = 'Zoology';

      if (!subjectsMap.has(subName)) {
        let icon = ZapIcon;
        let activeClass = 'bg-blue-600 text-white shadow-xs';
        if (subName === 'Chemistry') {
          icon = AtomIcon;
          activeClass = 'bg-emerald-600 text-white shadow-xs';
        } else if (subName === 'Botany' || subName === 'Biology') {
          icon = DnaIcon;
          activeClass = 'bg-purple-600 text-white shadow-xs';
        } else if (subName === 'Zoology') {
          icon = GradIcon;
          activeClass = 'bg-amber-600 text-white shadow-xs';
        }

        subjectsMap.set(subName, {
          name: subName,
          count: 0,
          marks: 0,
          firstIdx: idx,
          icon,
          activeClass
        });
      }

      const record = subjectsMap.get(subName)!;
      record.count += 1;
      record.marks += 4;
    });

    return Array.from(subjectsMap.values());
  }, [questions]);

  // Jump to first question of a subject section
  const jumpToSubject = (sub: string) => {
    const target = activeTestSubjects.find(
      s => s.name.toLowerCase() === sub.toLowerCase() ||
      (sub.toLowerCase() === 'biology' && (s.name.toLowerCase() === 'botany' || s.name.toLowerCase() === 'zoology'))
    );
    if (target && target.firstIdx >= 0) {
      setCurrentQuestionIdx(target.firstIdx);
      return;
    }
    const targetIdx = questions.findIndex(q => {
      if (sub.toLowerCase() === 'biology') {
        return q.subject.toLowerCase() === 'biology' || q.subject.toLowerCase() === 'botany' || q.subject.toLowerCase() === 'zoology';
      }
      return q.subject.toLowerCase() === sub.toLowerCase();
    });
    if (targetIdx >= 0) {
      setCurrentQuestionIdx(targetIdx);
    }
  };

  // NEET AIR Calculation on 720-Marks Standard Scale
  const calculateNEETAIR = (score: number): number => {
    if (score >= 715) return Math.max(1, Math.round(1 + (720 - score) * 12));
    if (score >= 700) return Math.max(65, Math.round(65 + (715 - score) * 22));
    if (score >= 670) return Math.max(400, Math.round(400 + (700 - score) * 45));
    if (score >= 640) return Math.max(1700, Math.round(1700 + (670 - score) * 140));
    if (score >= 600) return Math.max(5900, Math.round(5900 + (640 - score) * 320));
    if (score >= 550) return Math.max(18500, Math.round(18500 + (600 - score) * 480));
    if (score >= 500) return Math.max(42000, Math.round(42000 + (550 - score) * 850));
    if (score >= 400) return Math.max(85000, Math.round(85000 + (500 - score) * 1100));
    return Math.max(200000, Math.round(200000 + Math.max(0, 400 - score) * 1700));
  };

  const handleSubmitTest = () => {
    let correctCount = 0;
    let wrongCount = 0;
    let unattemptedCount = 0;

    const chapterStatsMap: Record<string, { subject: string; total: number; correct: number; wrong: number; unattempted: number }> = {};

    const subjectStats: Record<string, { correct: number; wrong: number; unattempted: number; score: number }> = {
      Physics: { correct: 0, wrong: 0, unattempted: 0, score: 0 },
      Chemistry: { correct: 0, wrong: 0, unattempted: 0, score: 0 },
      Botany: { correct: 0, wrong: 0, unattempted: 0, score: 0 },
      Zoology: { correct: 0, wrong: 0, unattempted: 0, score: 0 }
    };

    questions.forEach((q, idx) => {
      let sub = q.subject || 'Biology';
      if (sub === 'Biology') {
        sub = idx % 2 === 0 ? 'Botany' : 'Zoology';
      }
      if (!subjectStats[sub]) {
        subjectStats[sub] = { correct: 0, wrong: 0, unattempted: 0, score: 0 };
      }

      const ch = q.chapter || `${sub} Core Unit`;
      if (!chapterStatsMap[ch]) {
        chapterStatsMap[ch] = { subject: sub, total: 0, correct: 0, wrong: 0, unattempted: 0 };
      }
      chapterStatsMap[ch].total++;

      const chosen = answers[idx];
      if (chosen === undefined) {
        unattemptedCount++;
        subjectStats[sub].unattempted++;
        chapterStatsMap[ch].unattempted++;
      } else if (chosen === q.correctAnswer) {
        correctCount++;
        subjectStats[sub].correct++;
        subjectStats[sub].score += 4;
        chapterStatsMap[ch].correct++;
      } else {
        wrongCount++;
        subjectStats[sub].wrong++;
        subjectStats[sub].score -= 1;
        chapterStatsMap[ch].wrong++;
      }
    });

    const totalAttempted = correctCount + wrongCount;
    const rawScore = Math.max(0, correctCount * 4 - wrongCount * 1);
    const totalPossibleMarks = test.totalMarks || questions.length * 4 || 720;
    const accuracy = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 0;

    const simulated720Score = Math.round((rawScore / (totalPossibleMarks || 1)) * 720);
    const predictedAIR = rawScore <= 0 ? 0 : calculateNEETAIR(simulated720Score);
    const percentile = rawScore <= 0 ? 0 : Math.min(99.99, Math.max(12.5, +(100 - (predictedAIR / 2400000) * 100).toFixed(2)));
    const batchRankNum = rawScore <= 0 ? 0 : Math.max(1, Math.min(180, Math.round(1 + (720 - simulated720Score) / 38)));
    const cityRankNum = rawScore <= 0 ? 0 : Math.max(1, Math.min(4200, Math.round(predictedAIR * 0.0042 + 1)));

    const chapterAnalytics = Object.keys(chapterStatsMap).map((ch, idx) => {
      const stats = chapterStatsMap[ch];
      const acc = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
      let errorType = 'Conceptual Gap & Theory Blindspot';
      let actionPlan = 'Re-read NCERT Unit, solve 35 targeted DPP MCQs, review error log';
      
      if (stats.wrong >= 2 && acc < 50) {
        errorType = 'Conceptual Gap & Theory Blindspot';
        actionPlan = 'Complete NCERT line-by-line review, solve 40 fundamental MCQs with timer';
      } else if (stats.wrong >= 1 && acc >= 50) {
        errorType = 'Calculation Slip & Sign Convention Trap';
        actionPlan = 'Review formula derivation sheets, practice 25 numerical calculations step-by-step';
      } else if (stats.unattempted >= 2) {
        errorType = 'Time Pressure & Pacing Strategy Slip';
        actionPlan = 'Practice 45-second per question speed drills, avoid lingering on tricky items';
      } else if (stats.wrong >= 1) {
        errorType = 'Negative Marking & Elimination Trap';
        actionPlan = 'Apply strict two-option elimination rule before attempting borderline questions';
      } else {
        errorType = 'Retention Slip & NCERT Table Recall';
        actionPlan = 'Create quick flashcards for NCERT diagrams, exceptions, and summary tables';
      }

      return {
        chapter: ch,
        subject: stats.subject,
        total: stats.total,
        correct: stats.correct,
        wrong: stats.wrong,
        unattempted: stats.unattempted,
        accuracy: acc,
        priority: Math.min(5, idx + 1),
        errorType,
        actionPlan
      };
    }).sort((a, b) => a.accuracy - b.accuracy);

    chapterAnalytics.forEach((item, idx) => {
      item.priority = idx + 1;
    });

    const weakChapters = chapterAnalytics.filter(c => c.wrong > 0 || c.accuracy < 70).slice(0, 3).map(c => c.chapter);
    const strongChapters = chapterAnalytics.filter(c => c.accuracy >= 80).slice(0, 3).map(c => c.chapter);

    const activeNames = activeTestSubjects.map(s => s.name);
    const breakdownList = Object.keys(subjectStats)
      .filter(sub => {
        if (activeNames.length > 0) {
          return activeNames.includes(sub) || (activeNames.includes('Biology') && (sub === 'Botany' || sub === 'Zoology'));
        }
        return subjectStats[sub].score > 0 || subjectStats[sub].correct > 0 || subjectStats[sub].wrong > 0 || subjectStats[sub].unattempted > 0;
      })
      .map(sub => {
        const subInfo = activeTestSubjects.find(s => s.name === sub);
        const subMaxMarks = subInfo ? subInfo.marks : 180;
        const subScore = Math.max(0, subjectStats[sub].score);
        return {
          subject: sub,
          correct: subjectStats[sub].correct,
          wrong: subjectStats[sub].wrong,
          unattempted: subjectStats[sub].unattempted,
          score: subScore,
          maxMarks: subMaxMarks,
          percentage: subMaxMarks > 0 ? Math.round((subScore / subMaxMarks) * 100) : 0
        };
      });

    const lastSundayTest = prevTestHistory.find(
      t => t.testId !== test.id && (t.testId.includes('sunday') || t.totalMarks === 720 || t.totalMarks === 180)
    );
    const previousScore = lastSundayTest ? (lastSundayTest.totalMarks === 180 ? lastSundayTest.score * 4 : lastSundayTest.score) : undefined;
    const deltaScore = previousScore !== undefined ? rawScore - previousScore : undefined;

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
      weakChapters: weakChapters.length > 0 ? weakChapters : ['Gravitation & Waves', 'Ionic Equilibrium', 'Genetics & Evolution'],
      strongChapters: strongChapters.length > 0 ? strongChapters : ['Cell: The Unit of Life', 'Chemical Bonding', 'Human Physiology'],
      revisionSuggestions: [
        `Target 45 minutes daily on ${weakChapters[0] || 'Physics Mechanics'} key formula derivations`,
        'Practice 35 NCERT Exemplar MCQs under strict 45-second timer per question',
        'Review reaction pathways, sign conventions, and diagrammatic traps in error notebook'
      ],
      answers,
      studentName,
      rollNumber,
      parentEmail,
      parentPhone,
      parentName,
      studentCategory,
      batchRank: { rank: batchRankNum, total: 180 },
      cityRank: { rank: cityRankNum, total: 4200 },
      previousScore,
      changeFromPrevious: deltaScore,
      dateStr: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      chapterAnalytics: chapterAnalytics.slice(0, 5)
    };

    setTestResult(resultObj);
    setIsSubmitted(true);
    onSaveResult(resultObj);

    recordSuperUserNotification({
      contentTitle: `Test Completed: ${studentName} completed ${test.title} (Score: ${rawScore}/${totalPossibleMarks}, Accuracy: ${accuracy}%)`,
      category: 'Scorecard',
      fileSize: `${totalPossibleMarks}M Report`,
      subject: 'Test Completed'
    });

    if (rawScore > 0) {
      confetti({
        particleCount: 100,
        spread: 80,
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

  const top10Performers = [
    { rank: 1, name: 'Aarav Sharma', score: 710, accuracy: 98, time: '162m', state: 'Delhi' },
    { rank: 2, name: 'Ananya Verma', score: 705, accuracy: 97, time: '168m', state: 'Maharashtra' },
    { rank: 3, name: 'Rohan Deshmukh', score: 698, accuracy: 96, time: '170m', state: 'Karnataka' },
    { rank: 4, name: 'Priya Nair', score: 692, accuracy: 95, time: '172m', state: 'Kerala' },
    { rank: 5, name: 'Devendra Patel', score: 686, accuracy: 94, time: '174m', state: 'Gujarat' },
    { rank: 6, name: 'Sneha Mukherjee', score: 680, accuracy: 94, time: '175m', state: 'West Bengal' },
    { rank: 7, name: 'Karthik Reddy', score: 675, accuracy: 93, time: '169m', state: 'Telangana' },
    { rank: 8, name: 'Tanvi Joshi', score: 668, accuracy: 92, time: '176m', state: 'Rajasthan' },
    { rank: 9, name: 'Aditya Singh', score: 660, accuracy: 91, time: '178m', state: 'Uttar Pradesh' },
    { rank: 10, name: 'Meera Iyer', score: 654, accuracy: 91, time: '173m', state: 'Tamil Nadu' }
  ];

  const getEligibleColleges = (air: number = 10000, category: string = 'General / Open', currentScore: number = 0) => {
    // If candidate scored 0 or negative marks, or rank is invalid: DO NOT recommend any colleges!
    if (currentScore <= 0 || !Number.isFinite(air) || air <= 0) {
      return [];
    }

    const cat = String(category || 'General / Open');
    const isReserved = cat.includes('OBC') || cat.includes('SC') || cat.includes('ST');
    const minQualifyingCutoff = isReserved ? 107 : 137;
    if (currentScore < minQualifyingCutoff) {
      return [];
    }

    let effectiveRank = air;
    if (cat.includes('OBC')) effectiveRank = Math.round(effectiveRank * 0.7);
    else if (cat.includes('EWS')) effectiveRank = Math.round(effectiveRank * 0.75);
    else if (cat.includes('SC')) effectiveRank = Math.round(effectiveRank * 0.35);
    else if (cat.includes('ST')) effectiveRank = Math.round(effectiveRank * 0.2);

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
        probability: prob,
        badge,
        badgeClass
      };
    });
  };

  // Memoized Diagram Map ensuring NO diagram is used for more than 2 questions across the entire test
  const questionDiagramMap = useMemo(() => {
    const map = new Map<number, string | null>();
    const usageTracker = new Map<string, number>();

    questions.forEach((q, idx) => {
      const diag = getUniqueDiagramForQuestion(q, usageTracker);
      map.set(idx, diag);
    });

    return map;
  }, [questions]);

  const renderFormattedQuestionText = (text: string) => {
    const clean = formatMathAndFormulas(cleanOcrText(text));

    // Detect Assertion-Reason, Statement I/II, or Match questions
    const isAssertionReason = clean.includes('Assertion (A):') || clean.includes('Assertion(A):') || clean.includes('Reason (R):') || clean.includes('Reason(R):');
    const isStatements = clean.includes('Statement I:') || clean.includes('Statement 1:') || clean.includes('Statement II:') || clean.includes('Statement 2:');

    if (isAssertionReason || isStatements) {
      const parts = clean.split(/(?=Assertion\s*\([A-Z]\):|Reason\s*\([A-Z]\):|Statement\s*(?:I|II|1|2):)/i);
      return (
        <div className="space-y-2.5">
          {parts.map((part, pIdx) => {
            const p = part.trim();
            if (!p) return null;
            const isAss = p.toLowerCase().startsWith('assertion');
            const isReas = p.toLowerCase().startsWith('reason');
            const isStmt = p.toLowerCase().startsWith('statement');

            if (isAss || isReas || isStmt) {
              return (
                <div
                  key={pIdx}
                  className={`p-3 rounded-xl border text-xs sm:text-sm font-medium leading-relaxed ${
                    isAss
                      ? 'bg-blue-50/80 border-blue-200 text-blue-950 font-semibold'
                      : isReas
                      ? 'bg-amber-50/80 border-amber-200 text-amber-950 font-semibold'
                      : 'bg-indigo-50/80 border-indigo-200 text-indigo-950 font-semibold'
                  }`}
                >
                  {p}
                </div>
              );
            }
            return (
              <p key={pIdx} className="m-0 text-slate-900 font-semibold">
                {p}
              </p>
            );
          })}
        </div>
      );
    }

    return <span>{clean}</span>;
  };

  const renderMultiLineExplanation = (q: Question | string) => {
    const rawExplanation = typeof q === 'string' ? q : q.explanation;
    return <DetailedSolutionViewer explanation={rawExplanation} />;
  };

  const longitudinalExamHistory = useMemo(() => {
    // Extract genuine past completed tests from localStorage (excluding current test session)
    const pastRows = (prevTestHistory || [])
      .filter(t => t.testId !== test.id && t.dateStr !== testResult?.dateStr)
      .map(t => {
        const phy = t.subjectBreakdown?.find(s => s.subject === 'Physics')?.score ?? 0;
        const chem = t.subjectBreakdown?.find(s => s.subject === 'Chemistry')?.score ?? 0;
        const bot = t.subjectBreakdown?.find(s => s.subject === 'Botany')?.score ?? 0;
        const zoo = t.subjectBreakdown?.find(s => s.subject === 'Zoology')?.score ?? 0;
        return {
          code: t.testTitle?.includes(':') ? t.testTitle.split(':')[0].trim() : (t.testTitle?.slice(0, 16) || 'TEST'),
          date: t.dateStr || 'Past Exam',
          phy,
          chem,
          bot,
          zoo,
          total: t.score ?? (phy + chem + bot + zoo),
          rank: t.batchRank?.rank && t.batchRank.rank > 0 ? `${t.batchRank.rank} / ${t.batchRank.total || 180}` : '—',
          cityRank: t.cityRank?.rank && t.cityRank.rank > 0 ? `${t.cityRank.rank} / ${t.cityRank.total || 4200}` : '—',
          air: t.score > 0 && t.predictedAIR ? `${t.predictedAIR.toLocaleString()}` : '—',
          acc: t.accuracyPercentage ?? 0,
          isCurrent: false
        };
      });

    const currentPhy = testResult?.subjectBreakdown?.find(s => s.subject === 'Physics')?.score ?? 0;
    const currentChem = testResult?.subjectBreakdown?.find(s => s.subject === 'Chemistry')?.score ?? 0;
    const currentBot = testResult?.subjectBreakdown?.find(s => s.subject === 'Botany')?.score ?? 0;
    const currentZoo = testResult?.subjectBreakdown?.find(s => s.subject === 'Zoology')?.score ?? 0;
    const currentTotal = testResult?.score ?? (currentPhy + currentChem + currentBot + currentZoo);

    const currentRow = {
      code: test.title?.includes(':') ? test.title.split(':')[0].trim() : (test.title?.length > 18 ? test.title.slice(0, 18) + '...' : test.title || 'Current Test'),
      date: testResult?.dateStr || new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      phy: currentPhy,
      chem: currentChem,
      bot: currentBot,
      zoo: currentZoo,
      total: currentTotal,
      rank: testResult?.batchRank?.rank && testResult.batchRank.rank > 0 ? `${testResult.batchRank.rank} / ${testResult.batchRank.total || 180}` : '—',
      cityRank: testResult?.cityRank?.rank && testResult.cityRank.rank > 0 ? `${testResult.cityRank.rank} / ${testResult.cityRank.total || 4200}` : '—',
      air: currentTotal > 0 && testResult?.predictedAIR ? `${testResult.predictedAIR.toLocaleString()}` : '—',
      acc: testResult?.accuracyPercentage ?? 0,
      isCurrent: true
    };

    return [...pastRows, currentRow];
  }, [prevTestHistory, testResult, test]);

  const longitudinalStats = useMemo(() => {
    if (!longitudinalExamHistory || longitudinalExamHistory.length === 0) return null;
    const n = longitudinalExamHistory.length;
    const phyList = longitudinalExamHistory.map(r => r.phy);
    const chemList = longitudinalExamHistory.map(r => r.chem);
    const botList = longitudinalExamHistory.map(r => r.bot);
    const zooList = longitudinalExamHistory.map(r => r.zoo);
    const totalList = longitudinalExamHistory.map(r => r.total);

    const avg = (arr: number[]) => (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1);
    const best = (arr: number[]) => Math.max(...arr);
    const gainStr = (arr: number[]) => {
      if (arr.length <= 1) return 'Baseline Assessment';
      const diff = arr[arr.length - 1] - arr[0];
      return diff >= 0 ? `+${diff}M Net Gain` : `${diff}M Net Diff`;
    };

    return {
      totalExams: n,
      phy: { avg: avg(phyList), best: best(phyList), gain: gainStr(phyList) },
      chem: { avg: avg(chemList), best: best(chemList), gain: gainStr(chemList) },
      bot: { avg: avg(botList), best: best(botList), gain: gainStr(botList) },
      zoo: { avg: avg(zooList), best: best(zooList), gain: gainStr(zooList) },
      overall: {
        avg: avg(totalList),
        best: best(totalList),
        gain: n <= 1 ? 'Initial Test Baseline' : `${gainStr(totalList)} (${n} Tests)`
      }
    };
  }, [longitudinalExamHistory]);

  const renderBasicReport = (result: UserTestResult) => {
    const totalQ = questions.length || 1;
    const attemptedQ = result.correctAnswers + result.wrongAnswers;
    const scorePct = (((result.score / (result.totalMarks || 1))) * 100).toFixed(1);

    return (
      <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in">
        {/* Header & Candidate Info */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-extrabold uppercase tracking-wider">
                <span>Custom Practice Test</span>
                <span>&bull;</span>
                <span>Self-Paced Performance Review</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1.5">
                {test.title}
              </h2>
              <p className="text-xs text-slate-500 font-mono">
                {totalQ} Questions &bull; Total {result.totalMarks} Marks &bull; +4 / -1 Marking
              </p>
            </div>

            <div className="text-left sm:text-right font-mono text-xs text-slate-600 shrink-0">
              <div className="font-bold text-slate-900">Candidate: {studentName}</div>
              <div>Roll No: {rollNumber}</div>
              <div className="text-slate-400">Date: {result.dateStr}</div>
            </div>
          </div>

          {/* Top Score Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-200 text-center">
              <span className="text-[10px] font-bold text-slate-500 uppercase">Score Obtained</span>
              <div className="text-2xl font-black text-emerald-700 font-mono mt-0.5">
                {result.score} <span className="text-xs text-slate-400 font-normal">/ {result.totalMarks}</span>
              </div>
              <span className="text-[11px] text-emerald-600 font-bold">
                {scorePct}% of Max
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center">
              <span className="text-[10px] font-bold text-slate-500 uppercase">Accuracy</span>
              <div className="text-2xl font-black text-blue-700 font-mono mt-0.5">
                {result.accuracyPercentage}%
              </div>
              <span className="text-[11px] text-blue-600 font-medium">
                {result.correctAnswers} of {attemptedQ} correct
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-[10px] font-bold text-slate-500 uppercase">Attempt Rate</span>
              <div className="text-2xl font-black text-slate-800 font-mono mt-0.5">
                {attemptedQ} <span className="text-xs text-slate-400 font-normal">/ {totalQ}</span>
              </div>
              <span className="text-[11px] text-slate-500 font-mono">
                {result.unattempted} Unattempted
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-center">
              <span className="text-[10px] font-bold text-slate-500 uppercase">Time Spent</span>
              <div className="text-2xl font-black text-purple-800 font-mono mt-0.5">
                {formatTimer(result.timeSpentSeconds)}
              </div>
              <span className="text-[11px] text-purple-700 font-bold">
                ~{Math.round(result.timeSpentSeconds / totalQ)}s / Question
              </span>
            </div>
          </div>

          {/* Outcome Breakdown Visual Bar */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800">
              <span>Question Attempt Breakdown</span>
              <span className="font-mono text-slate-500">{totalQ} Questions</span>
            </div>

            <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden flex">
              <div
                className="bg-emerald-500 h-full transition-all"
                style={{ width: `${totalQ > 0 ? (result.correctAnswers / totalQ) * 100 : 0}%` }}
                title={`Correct: ${result.correctAnswers}`}
              />
              <div
                className="bg-rose-500 h-full transition-all"
                style={{ width: `${totalQ > 0 ? (result.wrongAnswers / totalQ) * 100 : 0}%` }}
                title={`Wrong: ${result.wrongAnswers}`}
              />
              <div
                className="bg-slate-300 h-full transition-all"
                style={{ width: `${totalQ > 0 ? (result.unattempted / totalQ) * 100 : 0}%` }}
                title={`Unattempted: ${result.unattempted}`}
              />
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
                <span className="text-emerald-800 font-black text-base font-mono block">+{result.correctAnswers * 4} Marks</span>
                <span className="text-[11px] text-emerald-700 font-bold">✓ {result.correctAnswers} Correct</span>
              </div>
              <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200">
                <span className="text-rose-700 font-black text-base font-mono block">-{result.wrongAnswers * 1} Marks</span>
                <span className="text-[11px] text-rose-600 font-bold">✗ {result.wrongAnswers} Incorrect</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200">
                <span className="text-slate-600 font-black text-base font-mono block">0 Marks</span>
                <span className="text-[11px] text-slate-500 font-bold">— {result.unattempted} Left</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subject Performance Breakdown */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-2 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-600" />
                <span>Subject & Domain Performance</span>
              </h3>
              <p className="text-xs text-slate-500">
                Score and accuracy distribution across tested subjects.
              </p>
            </div>
            <button
              onClick={() => setActiveSolutionTab('solutions')}
              className="px-3.5 py-1.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold border border-blue-200 transition cursor-pointer flex items-center gap-1"
            >
              <span>View Solutions</span> &rarr;
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200 font-sans">
                  <th className="p-3">Subject / Domain</th>
                  <th className="p-3 text-center">Correct (+4)</th>
                  <th className="p-3 text-center">Wrong (-1)</th>
                  <th className="p-3 text-center">Unattempted</th>
                  <th className="p-3 text-center">Score</th>
                  <th className="p-3 text-center">Accuracy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                {(result.subjectBreakdown || []).map((sub, sIdx) => {
                  const attempted = sub.correct + sub.wrong;
                  const acc = attempted > 0 ? Math.round((sub.correct / attempted) * 100) : 0;
                  return (
                    <tr key={sIdx} className="hover:bg-slate-50 transition">
                      <td className="p-3 font-bold font-sans text-slate-900">{sub.subject}</td>
                      <td className="p-3 text-center text-emerald-700 font-bold">{sub.correct}</td>
                      <td className="p-3 text-center text-rose-600 font-bold">{sub.wrong}</td>
                      <td className="p-3 text-center text-slate-400">{sub.unattempted}</td>
                      <td className="p-3 text-center font-bold text-blue-700">{sub.score} / {sub.maxMarks}</td>
                      <td className="p-3 text-center font-bold text-slate-800">{acc}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Chapter Insights if any */}
          {result.chapterAnalytics && result.chapterAnalytics.length > 0 && (
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Chapter-Wise Performance:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {result.chapterAnalytics.map((ch, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                    <div className="space-y-0.5 truncate pr-2">
                      <div className="font-bold text-slate-900 truncate">{ch.chapter}</div>
                      <div className="text-[10px] text-slate-500 font-mono">{ch.subject} &bull; {ch.total} Questions ({ch.correct}C / {ch.wrong}W / {ch.unattempted}U)</div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className={`px-2.5 py-1 rounded-xl text-xs font-mono font-bold border ${
                        ch.accuracy >= 75 ? 'bg-emerald-50 text-emerald-800 border-emerald-200' :
                        ch.accuracy >= 50 ? 'bg-amber-50 text-amber-800 border-amber-200' : 'bg-rose-50 text-rose-800 border-rose-200'
                      }`}>
                        {ch.accuracy}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick Review CTA */}
        <div className="p-5 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
          <div className="space-y-1">
            <h4 className="font-bold text-sm sm:text-base">Review Step-by-Step Question Solutions</h4>
            <p className="text-xs text-blue-100">Examine verified solutions, key formulas, and rationale for all {questions.length} questions.</p>
          </div>
          <button
            onClick={() => setActiveSolutionTab('solutions')}
            className="px-5 py-2.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-bold text-xs transition cursor-pointer shadow-xs shrink-0"
          >
            Review Solutions &rarr;
          </button>
        </div>
      </div>
    );
  };

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
                  NeetCbt<span className="text-cyan-300"> {activeTestSubjects.length === 1 ? `${activeTestSubjects[0].name} Test` : 'Exam Test'} ({maxTotalMarks} Marks)</span>
                </span>
                <span className="px-2 py-0.2 rounded-full text-[10px] font-bold bg-amber-400 text-slate-900">
                  {isSundayTest ? 'Sunday 180-Question Mock (720M)' : activeTestSubjects.length === 1 ? `${activeTestSubjects[0].name} Custom Test (${maxTotalMarks}M)` : `CBT Practice (${maxTotalMarks}M)`}
                </span>
              </div>
              <p className="text-[11px] text-blue-100 font-mono truncate max-w-xs sm:max-w-md">
                {test.title} &bull; +4 for Correct, -1 for Incorrect (Total {maxTotalMarks} Marks)
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
            {/* Question Workspace */}
            <div className="lg:col-span-3 p-4 sm:p-6 flex flex-col justify-between overflow-y-auto border-b lg:border-b-0 lg:border-r border-slate-200 bg-white">
              {currentQ && (
                <div className="space-y-4">
                  {/* Subject Switcher Header Tabs */}
                  <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-100 gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {activeTestSubjects.map((subItem) => {
                        const IconComponent = subItem.icon;
                        const isCurrent = currentQ.subject === subItem.name || (currentQ.subject === 'Biology' && (subItem.name === 'Botany' || subItem.name === 'Zoology'));
                        return (
                          <button
                            key={subItem.name}
                            onClick={() => setCurrentQuestionIdx(subItem.firstIdx)}
                            className={`px-3 py-1 rounded-lg text-xs font-bold transition flex items-center space-x-1 cursor-pointer ${
                              isCurrent
                                ? subItem.activeClass
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            <IconComponent className="w-3.5 h-3.5" />
                            <span>{subItem.name} ({subItem.count} Qs &bull; {subItem.marks}M)</span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-lg">
                      Question {currentQuestionIdx + 1} of {questions.length}
                    </div>
                  </div>

                  {/* Question Info Bar */}
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-slate-900">{currentQ.subject}</span>
                      <span>&bull;</span>
                      <span className="font-medium text-slate-600">{currentQ.chapter}</span>
                      <span>&bull;</span>
                      <span className="text-slate-400 font-mono">{currentQ.topic || (currentQ as any).subtopic || ''}</span>
                    </div>

                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                      +4 Correct, -1 Incorrect
                    </span>
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
                      <span>High Yield NCERT 2027/2028</span>
                    </span>
                  </div>

                  {/* Question Text */}
                  <div className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 shadow-2xs">
                    {renderFormattedQuestionText(currentQ.questionText || (currentQ as any).question || '')}
                  </div>

                  {/* Visual / SVG Diagram in Question (Max 2 uses per test) */}
                  {(currentQ.diagramSvg || questionDiagramMap.get(currentQuestionIdx)) && (
                    <div
                      className="my-3 p-4 bg-white border border-slate-200 rounded-2xl flex justify-center items-center overflow-x-auto shadow-xs"
                      dangerouslySetInnerHTML={{ __html: currentQ.diagramSvg || questionDiagramMap.get(currentQuestionIdx) || '' }}
                    />
                  )}
                  {currentQ.image && !currentQ.diagramSvg && !questionDiagramMap.get(currentQuestionIdx) && (
                    <div className="my-3 p-2 bg-white border border-slate-200 rounded-2xl flex justify-center items-center shadow-xs">
                      <img src={currentQ.image} alt="Question Diagram" className="max-h-60 rounded-xl object-contain" />
                    </div>
                  )}

                  {/* Option Cards */}
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
                      Submit {activeTestSubjects.length === 1 ? `${activeTestSubjects[0].name} Test` : isSundayTest ? 'Complete 720-Marks Paper' : 'Complete Test'} ({maxTotalMarks} Marks)
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Question Palette Sidebar */}
            <div className="p-4 bg-slate-50 flex flex-col justify-between space-y-4 overflow-y-auto">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Question Palette ({questions.length} Qs)
                  </h3>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {Object.keys(answers).length}/{questions.length} Done
                  </span>
                </div>

                {/* Legend */}
                <div className="grid grid-cols-2 gap-1.5 text-[10px] text-slate-600 my-2.5 pb-2.5 border-b border-slate-200">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
                    <span>Answered (+4)</span>
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
                Submit {activeTestSubjects.length === 1 ? `${activeTestSubjects[0].name} Test` : 'Complete CBT'} ({maxTotalMarks}M)
              </button>
            </div>
          </div>
        ) : (
          /* POST-TEST RESULTS & 6-PAGE REPORT */
          <ErrorBoundary
            fallbackTitle="Test Results & Scorecard"
            fallbackMessage="Your score has been safely calculated and saved. Click below to refresh the scorecard view or review your test solutions."
          >
            {testResult && (
            <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1 bg-slate-100/90 text-slate-900">
              {/* Header Navigation Tabs */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 bg-white p-4 rounded-2xl shadow-xs">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setActiveSolutionTab('scorecard')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                      activeSolutionTab === 'scorecard'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <FileText className="w-4 h-4" />
                    <span>{isSundayTest ? '1. Official Performance Report (Advanced Diagnostic)' : '1. Performance Summary (Basic Report)'}</span>
                  </button>

                  {isSundayTest && (
                    <button
                      onClick={() => setActiveSolutionTab('leaderboard')}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                        activeSolutionTab === 'leaderboard'
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <TrophyIcon className="w-4 h-4 text-amber-500" />
                      <span>2. Top 10 Performers Leaderboard</span>
                    </button>
                  )}

                  {isSundayTest && (
                    <button
                      onClick={() => setActiveSolutionTab('comparison')}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                        activeSolutionTab === 'comparison'
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <TargetIcon className="w-4 h-4 text-indigo-500" />
                      <span>3. You vs Top Scorer</span>
                    </button>
                  )}

                  <button
                    onClick={() => setActiveSolutionTab('solutions')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                      activeSolutionTab === 'solutions'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <CheckCheck className="w-4 h-4 text-emerald-500" />
                    <span>{isSundayTest ? '4. Step-by-Step Solutions' : '2. Step-by-Step Solutions'}</span>
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => downloadTestScorecardPDF(testResult)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-xs font-bold text-white flex items-center space-x-1.5 shadow-xs transition cursor-pointer"
                  >
                    <FileIcon className="w-4 h-4" />
                    <span>Download Password-Protected Scorecard PDF</span>
                  </button>

                  <button
                    onClick={onClose}
                    className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-xs font-bold text-slate-700 border border-slate-300 shadow-2xs transition cursor-pointer"
                  >
                    Back to Dashboard
                  </button>
                </div>
              </div>

              {/* TAB 1: SCORECARD & PERFORMANCE REPORT */}
              {activeSolutionTab === 'scorecard' && (
                !isSundayTest ? (
                  renderBasicReport(testResult)
                ) : (
                  <div className="space-y-6 max-w-6xl mx-auto animate-in fade-in">
                  {/* Institutional Header & Candidate Details */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-5">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                      <div className="space-y-1">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-extrabold uppercase tracking-wider">
                          <span>Institutional Diagnostic Report</span>
                          <span>&bull;</span>
                          <span>NEET (UG) 720 Marks Model</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                          NEET STUDENT PERFORMANCE ANALYSIS REPORT
                        </h2>
                        <p className="text-xs text-slate-500 font-mono">
                          Cumulative Diagnostic Assessment & Multi-Exam Longitudinal Growth Engine
                        </p>
                      </div>

                      <div className="text-right flex flex-col items-start md:items-end font-mono text-xs text-slate-600">
                        <span className="font-bold text-slate-900">Exam Code: {test.title.split(':')[0] || 'CWT-06'}</span>
                        <span>Date: {testResult.dateStr}</span>
                        <span className="text-[11px] text-emerald-700 font-bold">Standard 720-Marks NTA Marking</span>
                      </div>
                    </div>

                    {/* Candidate Info Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
                      <div>
                        <span className="text-slate-400 block uppercase font-bold text-[10px]">Candidate Name</span>
                        <strong className="text-slate-900 text-sm">{studentName}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block uppercase font-bold text-[10px]">Roll Number</span>
                        <strong className="text-slate-900 text-sm font-mono">{rollNumber}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block uppercase font-bold text-[10px]">Batch & Year</span>
                        <strong className="text-slate-900">Dropper / Target 2027</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block uppercase font-bold text-[10px]">Category & Domicile</span>
                        <strong className="text-slate-900">{studentCategory} &bull; {studentDomicile}</strong>
                      </div>
                    </div>

                    {/* Executive Top-Level KPI Summary */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-200 text-center">
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Current Score</span>
                        <div className="text-2xl font-black text-emerald-700 font-mono mt-0.5">
                          {testResult.score} <span className="text-xs text-slate-400 font-normal">/ {testResult.totalMarks || 720}</span>
                        </div>
                        <span className="text-[11px] text-emerald-600 font-bold">
                          {((testResult.score / (testResult.totalMarks || 720)) * 100).toFixed(1)}% of Max
                        </span>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Attempted</span>
                        <div className="text-2xl font-black text-slate-800 font-mono mt-0.5">
                          {testResult.correctAnswers + testResult.wrongAnswers} <span className="text-xs text-slate-400 font-normal">/ {testResult.totalMarks ? Math.round(testResult.totalMarks / 4) : 180}</span>
                        </div>
                        <span className="text-[11px] text-slate-500 font-mono">
                          {testResult.unattempted} Unattempted
                        </span>
                      </div>

                      <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center">
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Accuracy Rate</span>
                        <div className="text-2xl font-black font-mono mt-0.5 text-blue-700">
                          {testResult.accuracyPercentage}%
                        </div>
                        <span className="text-[11px] text-blue-700 font-bold">
                          +{testResult.correctAnswers} Correct • -{testResult.wrongAnswers} Wrong
                        </span>
                      </div>

                      <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center">
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Batch Rank</span>
                        <div className="text-2xl font-black text-amber-800 font-mono mt-0.5">
                          {testResult.batchRank?.rank && testResult.batchRank.rank > 0
                            ? `${testResult.batchRank.rank}`
                            : 'Unranked'}
                          {testResult.batchRank?.rank && testResult.batchRank.rank > 0 && (
                            <span className="text-xs text-slate-400 font-normal"> / {testResult.batchRank.total}</span>
                          )}
                        </div>
                        <span className="text-[11px] text-amber-700 font-bold">
                          {testResult.score <= 0
                            ? 'Score <= 0'
                            : `Top ${Math.max(1, Math.round(((testResult.batchRank?.rank || 1) / (testResult.batchRank?.total || 180)) * 100))}% in Cohort`}
                        </span>
                      </div>

                      <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-center">
                        <span className="text-[10px] font-bold text-slate-500 uppercase">City Rank</span>
                        <div className="text-2xl font-black text-indigo-800 font-mono mt-0.5">
                          {testResult.cityRank?.rank && testResult.cityRank.rank > 0
                            ? `${testResult.cityRank.rank}`
                            : 'Unranked'}
                          {testResult.cityRank?.rank && testResult.cityRank.rank > 0 && (
                            <span className="text-xs text-slate-400 font-normal"> / {testResult.cityRank.total}</span>
                          )}
                        </div>
                        <span className="text-[11px] text-indigo-700 font-bold">
                          {testResult.score <= 0 ? 'Score <= 0' : 'Regional Zone'}
                        </span>
                      </div>

                      <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-center">
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Simulated AIR</span>
                        <div className="text-2xl font-black text-purple-800 font-mono mt-0.5">
                          {testResult.score > 0 && (testResult.predictedAIR || 0) > 0
                            ? `#${testResult.predictedAIR.toLocaleString()}`
                            : 'N/A'}
                        </div>
                        <span className="text-[11px] text-purple-700 font-bold">
                          {testResult.score > 0 ? `${testResult.nationalPercentile}%ile` : 'Unqualified (0 Marks)'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* SECTION 1 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
                    <div className="border-b border-slate-100 pb-3">
                      <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-blue-600" />
                        <span>SECTION 1: Subject-Wise Performance Breakdown</span>
                      </h3>
                      <p className="text-xs text-slate-500">
                        Granular 4-subject breakdown across Physics, Chemistry, Botany, and Zoology for the current assessment.
                      </p>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                            <th className="p-3.5">Subject</th>
                            <th className="p-3.5 text-center">Questions</th>
                            <th className="p-3.5 text-center">Attempted</th>
                            <th className="p-3.5 text-center">Correct (+4)</th>
                            <th className="p-3.5 text-center">Wrong (-1)</th>
                            <th className="p-3.5 text-center">Unattempted</th>
                            <th className="p-3.5 text-center">Max Marks</th>
                            <th className="p-3.5 text-center">Current Score</th>
                            <th className="p-3.5 text-center">Accuracy</th>
                            <th className="p-3.5 text-center">Performance Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-mono">
                          {testResult.subjectBreakdown.map((sub, sIdx) => {
                            const subTotalQs = (sub.correct || 0) + (sub.wrong || 0) + (sub.unattempted || 0);
                            const subAttempted = (sub.correct || 0) + (sub.wrong || 0);
                            const subAcc = subAttempted > 0 ? Math.round(((sub.correct || 0) / subAttempted) * 100) : 0;
                            
                            let statusBadge = 'Strong (>80%)';
                            let badgeClass = 'bg-emerald-100 text-emerald-800 border-emerald-300';
                            if (sub.score <= 0) {
                              statusBadge = 'No Score (0 Marks)';
                              badgeClass = 'bg-rose-100 text-rose-800 border-rose-300';
                            } else if (sub.score < 100) {
                              statusBadge = 'Needs Revision (<55%)';
                              badgeClass = 'bg-rose-100 text-rose-800 border-rose-300';
                            } else if (sub.score < 145) {
                              statusBadge = 'Moderate (55-80%)';
                              badgeClass = 'bg-amber-100 text-amber-800 border-amber-300';
                            } else if (sub.score >= 165) {
                              statusBadge = 'Exceptional (>90%)';
                              badgeClass = 'bg-blue-100 text-blue-800 border-blue-300 font-bold';
                            }

                            return (
                              <tr key={sIdx} className="hover:bg-slate-50 transition">
                                <td className="p-3.5 font-bold font-sans text-slate-900 flex items-center space-x-2">
                                  <span className={`w-2.5 h-2.5 rounded-full ${
                                    sub.subject === 'Physics' ? 'bg-blue-600' :
                                    sub.subject === 'Chemistry' ? 'bg-emerald-600' :
                                    sub.subject === 'Botany' ? 'bg-purple-600' : 'bg-amber-600'
                                  }`} />
                                  <span>{sub.subject}</span>
                                </td>
                                <td className="p-3.5 text-center text-slate-600">{subTotalQs || (sub.maxMarks ? Math.round(sub.maxMarks / 4) : 45)}</td>
                                <td className="p-3.5 text-center text-slate-800 font-semibold">{subAttempted}</td>
                                <td className="p-3.5 text-center text-emerald-600 font-bold">+{sub.correct || 0}</td>
                                <td className="p-3.5 text-center text-rose-600 font-bold">-{sub.wrong || 0}</td>
                                <td className="p-3.5 text-center text-slate-400">{sub.unattempted || 0}</td>
                                <td className="p-3.5 text-center text-slate-600">{sub.maxMarks || 180}</td>
                                <td className="p-3.5 text-center font-bold text-slate-900">{sub.score}</td>
                                <td className="p-3.5 text-center text-slate-700">{subAcc}%</td>
                                <td className="p-3.5 text-center font-sans">
                                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] border ${badgeClass}`}>
                                    {statusBadge}
                                  </span>
                                </td>
                              </tr>
                            );
                          })}

                          <tr className="bg-blue-50/70 border-t-2 border-blue-400 font-bold">
                            <td className="p-3.5 font-sans text-blue-950 font-black text-sm">Overall Total</td>
                            <td className="p-3.5 text-center text-blue-900 font-black">
                              {testResult.subjectBreakdown.reduce((sum, s) => sum + (s.correct || 0) + (s.wrong || 0) + (s.unattempted || 0), 0) || (testResult.totalMarks ? Math.round(testResult.totalMarks / 4) : 180)}
                            </td>
                            <td className="p-3.5 text-center text-blue-900 font-black">
                              {testResult.correctAnswers + testResult.wrongAnswers}
                            </td>
                            <td className="p-3.5 text-center text-emerald-700 font-black">+{testResult.correctAnswers}</td>
                            <td className="p-3.5 text-center text-rose-600 font-black">-{testResult.wrongAnswers}</td>
                            <td className="p-3.5 text-center text-slate-600 font-black">{testResult.unattempted}</td>
                            <td className="p-3.5 text-center text-blue-900 font-black">{testResult.totalMarks || 720}</td>
                            <td className="p-3.5 text-center text-emerald-800 font-black text-sm">{testResult.score}</td>
                            <td className="p-3.5 text-center text-blue-900 font-black">{testResult.accuracyPercentage}%</td>
                            <td className="p-3.5 text-center font-sans">
                              <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-xs ${
                                testResult.score <= 0 ? 'bg-rose-600 text-white' :
                                testResult.score >= 600 ? 'bg-emerald-600 text-white' :
                                testResult.score >= 500 ? 'bg-blue-600 text-white' : 'bg-amber-600 text-white'
                              }`}>
                                {testResult.score <= 0 ? '0 Marks / Remedial Required' :
                                 testResult.score >= 650 ? 'Top Tier GMC Safe Zone' :
                                 testResult.score >= 550 ? 'GMC Competitive Zone' : 'State Quota / Target Zone'}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200 text-xs text-slate-700 leading-relaxed space-y-1">
                      <strong className="text-blue-900 font-bold block flex items-center gap-1.5">
                        <SparkleIcon className="w-4 h-4 text-blue-600" />
                        Academic Interpretation & Performance Assessment:
                      </strong>
                      <p>
                        {testResult.score <= 0 ? (
                          'No positive score recorded for this assessment. Ensure all foundational concepts across Physics, Chemistry, and Biology are thoroughly revised before attempting full-length mock examinations.'
                        ) : (
                          `Candidate achieved an aggregate score of ${testResult.score}/${testResult.totalMarks || 720} (${((testResult.score / (testResult.totalMarks || 720)) * 100).toFixed(1)}%) with an accuracy rate of ${testResult.accuracyPercentage}%. ${testResult.correctAnswers} questions answered correctly and ${testResult.wrongAnswers} penalized by negative marking. Focus on minimizing unforced errors in low-accuracy chapters to improve overall standing.`
                        )}
                      </p>
                    </div>
                  </div>

                  {/* SECTION 2 */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <div>
                          <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                            <TrendingUp className="w-4 h-4 text-emerald-600" />
                            <span>Current Subject Marks Distribution (/180)</span>
                          </h4>
                          <p className="text-[11px] text-slate-500">Actual marks achieved across 4 subject domains</p>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                          Max: 180 Each
                        </span>
                      </div>

                      <div className="w-full bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col items-center justify-center">
                        <svg viewBox="0 0 420 180" className="w-full h-44" xmlns="http://www.w3.org/2000/svg">
                          <line x1="30" y1="20" x2="390" y2="20" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3,3" />
                          <text x="15" y="24" fontSize="9" fill="#94a3b8" fontFamily="monospace">180</text>

                          <line x1="30" y1="55" x2="390" y2="55" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3,3" />
                          <text x="15" y="59" fontSize="9" fill="#94a3b8" fontFamily="monospace">135</text>

                          <line x1="30" y1="90" x2="390" y2="90" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3,3" />
                          <text x="15" y="94" fontSize="9" fill="#94a3b8" fontFamily="monospace">90</text>

                          <line x1="30" y1="125" x2="390" y2="125" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3,3" />
                          <text x="15" y="129" fontSize="9" fill="#94a3b8" fontFamily="monospace">45</text>

                          <line x1="30" y1="145" x2="390" y2="145" stroke="#94a3b8" strokeWidth="1.5" />

                          {testResult.subjectBreakdown.map((b, i) => {
                            const subMax = b.maxMarks || 180;
                            const h = Math.max(0, Math.min(125, (b.score / (subMax || 1)) * 125));
                            const y = 145 - h;
                            const x = 55 + i * 90;
                            const color = b.subject === 'Physics' ? '#2563eb' :
                                          b.subject === 'Chemistry' ? '#059669' :
                                          b.subject === 'Botany' ? '#7c3aed' : '#d97706';

                            return (
                              <g key={i}>
                                <rect x={x} y={y} width="40" height={Math.max(4, h)} fill={color} rx="6" />
                                <text x={x + 20} y={Math.max(16, y - 6)} fontSize="10" fontWeight="bold" fill="#0f172a" textAnchor="middle" fontFamily="monospace">
                                  {b.score}
                                </text>
                                <text x={x + 20} y="165" fontSize="11" fontWeight="bold" fill="#334155" textAnchor="middle">
                                  {b.subject}
                                </text>
                              </g>
                            );
                          })}
                        </svg>
                      </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <div>
                          <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                            <BarIcon className="w-4 h-4 text-blue-600" />
                            <span>Subject Accuracy & Attempt Distribution</span>
                          </h4>
                          <p className="text-[11px] text-slate-500">Correct, incorrect, and unattempted counts</p>
                        </div>
                      </div>

                      <div className="space-y-3 pt-1">
                        {testResult.subjectBreakdown.map((sub, idx) => {
                          const attempted = (sub.correct || 0) + (sub.wrong || 0);
                          const totalQs = attempted + (sub.unattempted || 0);
                          const acc = attempted > 0 ? Math.round(((sub.correct || 0) / attempted) * 100) : 0;
                          const colorClass = sub.subject === 'Physics' ? 'bg-blue-600' :
                                            sub.subject === 'Chemistry' ? 'bg-emerald-600' :
                                            sub.subject === 'Botany' ? 'bg-purple-600' : 'bg-amber-600';

                          return (
                            <div key={idx} className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                                  <span className={`w-2.5 h-2.5 rounded-full ${colorClass}`} />
                                  {sub.subject}
                                </span>
                                <div className="flex items-center gap-2 text-xs font-mono">
                                  <span className="text-emerald-700 font-bold">+{sub.correct || 0}C</span>
                                  <span className="text-rose-600 font-bold">-{sub.wrong || 0}W</span>
                                  <span className="text-slate-400 font-medium">{sub.unattempted || 0}U</span>
                                  <span className="font-bold text-slate-700 px-1.5 py-0.5 rounded bg-white border border-slate-200 ml-1">
                                    {acc}% Acc
                                  </span>
                                </div>
                              </div>
                              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden flex">
                                <div className="bg-emerald-500 h-2" style={{ width: `${totalQs > 0 ? ((sub.correct || 0) / totalQs) * 100 : 0}%` }} title="Correct" />
                                <div className="bg-rose-500 h-2" style={{ width: `${totalQs > 0 ? ((sub.wrong || 0) / totalQs) * 100 : 0}%` }} title="Wrong" />
                                <div className="bg-slate-300 h-2" style={{ width: `${totalQs > 0 ? ((sub.unattempted || 0) / totalQs) * 100 : 0}%` }} title="Unattempted" />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* SECTION 3 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
                    <div className="border-b border-slate-100 pb-2">
                      <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                        <Percent className="w-5 h-5 text-indigo-600" />
                        <span>SECTION 3: Subject Performance Trend & Marks Contribution (25% Weightage Each)</span>
                      </h3>
                      <p className="text-xs text-slate-500">
                        Relative marks contribution of each subject domain towards the total {testResult.totalMarks || 720}-marks target.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {testResult.subjectBreakdown.map((sub, i) => {
                        const score = sub.score;
                        const subMax = sub.maxMarks || 180;
                        const pctOfTotal = (((score / (testResult.totalMarks || 720))) * 100).toFixed(1);
                        const pctOfSub = (((score / (subMax || 1))) * 100).toFixed(1);

                        return (
                          <div key={i} className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="font-extrabold text-sm text-slate-900">{sub.subject}</span>
                              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded-lg">
                                {score} / {subMax}
                              </span>
                            </div>

                            <div className="space-y-1">
                              <div className="flex justify-between text-[11px] text-slate-600">
                                <span>Subject Mastery</span>
                                <strong className="font-mono text-slate-900">{pctOfSub}%</strong>
                              </div>
                              <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${
                                    i === 0 ? 'bg-blue-600' :
                                    i === 1 ? 'bg-emerald-600' :
                                    i === 2 ? 'bg-purple-600' : 'bg-amber-600'
                                  }`}
                                  style={{ width: `${Math.min(100, +pctOfSub)}%` }}
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-3 text-center text-[10px] font-mono pt-1 border-t border-slate-200">
                              <div>
                                <span className="text-emerald-700 font-bold block">{sub.correct}</span> Correct
                              </div>
                              <div>
                                <span className="text-rose-600 font-bold block">{sub.wrong}</span> Wrong
                              </div>
                              <div>
                                <span className="text-slate-500 block">{sub.unattempted}</span> Left
                              </div>
                            </div>

                            <p className="text-[10px] text-slate-500 text-center font-mono">
                              Contributes <strong>{pctOfTotal}%</strong> to {testResult.totalMarks || 720} Score
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* SECTION 4 & 5 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-5">
                    <div className="border-b border-slate-100 pb-2">
                      <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                        <FileIcon className="w-5 h-5 text-purple-600" />
                        <span>SECTION 4: Exam-by-Exam Statistical Record & History</span>
                      </h3>
                      <p className="text-xs text-slate-500">
                        Candidate authentic test attempt history and chronological performance trajectory.
                      </p>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200 font-sans">
                            <th className="p-3">Test ID</th>
                            <th className="p-3">Date</th>
                            <th className="p-3 text-center">Physics (/180)</th>
                            <th className="p-3 text-center">Chemistry (/180)</th>
                            <th className="p-3 text-center">Botany (/180)</th>
                            <th className="p-3 text-center">Zoology (/180)</th>
                            <th className="p-3 text-center">Total (/720)</th>
                            <th className="p-3 text-center">Batch Rank</th>
                            <th className="p-3 text-center">City Rank</th>
                            <th className="p-3 text-center">Simulated AIR</th>
                            <th className="p-3 text-center">Accuracy</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                          {longitudinalExamHistory.map((row, rIdx) => (
                            <tr
                              key={rIdx}
                              className={row.isCurrent ? 'bg-blue-50/80 font-bold border-t-2 border-blue-400' : 'hover:bg-slate-50'}
                            >
                              <td className="p-3 font-sans font-bold text-slate-900 flex items-center gap-1.5">
                                <span>{row.code}</span>
                                {row.isCurrent && (
                                  <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-blue-600 text-white">Current</span>
                                )}
                              </td>
                              <td className="p-3 text-slate-500">{row.date}</td>
                              <td className="p-3 text-center">{row.phy}</td>
                              <td className="p-3 text-center">{row.chem}</td>
                              <td className="p-3 text-center">{row.bot}</td>
                              <td className="p-3 text-center">{row.zoo}</td>
                              <td className="p-3 text-center font-extrabold text-emerald-800 text-xs">{row.total}</td>
                              <td className="p-3 text-center text-amber-800 font-bold">{row.rank}</td>
                              <td className="p-3 text-center text-indigo-800">{row.cityRank}</td>
                              <td className="p-3 text-center font-bold text-purple-800">#{row.air}</td>
                              <td className="p-3 text-center text-blue-700">{row.acc}%</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                        SECTION 5: Statistical Summary & Longitudinal Performance Metrics
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                          <span className="text-[10px] text-slate-500 uppercase font-bold">Physics (Avg/Best)</span>
                          <div className="text-sm font-black text-slate-900 font-mono mt-0.5">
                            {longitudinalStats?.phy.avg ?? 0} / {longitudinalStats?.phy.best ?? 0}
                          </div>
                          <span className="text-[10px] text-emerald-600 font-bold">
                            {longitudinalStats?.phy.gain ?? '—'}
                          </span>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                          <span className="text-[10px] text-slate-500 uppercase font-bold">Chemistry (Avg/Best)</span>
                          <div className="text-sm font-black text-slate-900 font-mono mt-0.5">
                            {longitudinalStats?.chem.avg ?? 0} / {longitudinalStats?.chem.best ?? 0}
                          </div>
                          <span className="text-[10px] text-emerald-600 font-bold">
                            {longitudinalStats?.chem.gain ?? '—'}
                          </span>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                          <span className="text-[10px] text-slate-500 uppercase font-bold">Botany (Avg/Best)</span>
                          <div className="text-sm font-black text-slate-900 font-mono mt-0.5">
                            {longitudinalStats?.bot.avg ?? 0} / {longitudinalStats?.bot.best ?? 0}
                          </div>
                          <span className="text-[10px] text-emerald-600 font-bold">
                            {longitudinalStats?.bot.gain ?? '—'}
                          </span>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                          <span className="text-[10px] text-slate-500 uppercase font-bold">Zoology (Avg/Best)</span>
                          <div className="text-sm font-black text-slate-900 font-mono mt-0.5">
                            {longitudinalStats?.zoo.avg ?? 0} / {longitudinalStats?.zoo.best ?? 0}
                          </div>
                          <span className="text-[10px] text-emerald-600 font-bold">
                            {longitudinalStats?.zoo.gain ?? '—'}
                          </span>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center col-span-2 sm:col-span-1">
                          <span className="text-[10px] text-emerald-800 uppercase font-bold">Overall Average</span>
                          <div className="text-sm font-black text-emerald-800 font-mono mt-0.5">
                            {longitudinalStats?.overall.avg ?? testResult.score} / {testResult.totalMarks || 720}
                          </div>
                          <span className="text-[10px] text-emerald-700 font-bold">
                            {longitudinalStats?.overall.gain ?? 'Initial Assessment'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SECTION 6 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
                    <div className="border-b border-slate-100 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                          <Flame className="w-5 h-5 text-amber-500" />
                          <span>SECTION 6: Topic / Chapter Improvement Engine (Error Analysis)</span>
                        </h3>
                        <p className="text-xs text-slate-500">
                          Priority error mapping and prescribed remediation protocols.
                        </p>
                      </div>
                      <span className="text-[10px] font-mono bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-1 rounded-lg">
                        Formula: Priority = (NEET Weightage &times; Error Frequency)
                      </span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                            <th className="p-3 text-center">Priority</th>
                            <th className="p-3">Subject</th>
                            <th className="p-3">Chapter / Focus Unit</th>
                            <th className="p-3 text-center">Attempted (C/W/U)</th>
                            <th className="p-3 text-center">Accuracy</th>
                            <th className="p-3">Primary Error Classification</th>
                            <th className="p-3">Prescribed Action Plan</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {(testResult.chapterAnalytics && testResult.chapterAnalytics.length > 0
                            ? testResult.chapterAnalytics
                            : [
                                { priority: 1, subject: 'Physics', chapter: 'Ray Optics & Optical Instruments', total: 6, correct: 3, wrong: 3, unattempted: 0, accuracy: 50, errorType: 'Calculation Slip & Sign Convention Trap', actionPlan: 'Practice 25 numerical derivations with Cartesian sign rules.' },
                                { priority: 2, subject: 'Chemistry', chapter: 'Coordination Compounds & Bonding', total: 5, correct: 3, wrong: 2, unattempted: 0, accuracy: 60, errorType: 'Conceptual Gap & Theory Blindspot', actionPlan: 'Review Crystal Field Theory (CFT) and isomerism rules in NCERT.' },
                                { priority: 3, subject: 'Botany', chapter: 'Principles of Inheritance & Variation', total: 8, correct: 6, wrong: 2, unattempted: 0, accuracy: 75, errorType: 'Negative Marking & Elimination Trap', actionPlan: 'Solve 35 pedigree analysis and dihybrid cross test MCQs.' },
                                { priority: 4, subject: 'Zoology', chapter: 'Human Reproduction & Embryology', total: 6, correct: 5, wrong: 1, unattempted: 0, accuracy: 83, errorType: 'NCERT Table & Diagram Recall', actionPlan: 'Memorize hormonal feedback loops (LH, FSH, Estrogen) from chart.' },
                                { priority: 5, subject: 'Physics', chapter: 'Thermodynamics & Heat Engines', total: 4, correct: 3, wrong: 1, unattempted: 0, accuracy: 75, errorType: 'Time Pressure & Pacing Slip', actionPlan: 'Complete 15-minute speed drills on Carnot efficiency & adiabatic laws.' }
                              ]
                          ).map((row, idx) => (
                            <tr key={idx} className="hover:bg-slate-50 transition">
                              <td className="p-3 text-center">
                                <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full font-bold text-xs ${
                                  row.priority === 1 ? 'bg-rose-500 text-white' :
                                  row.priority === 2 ? 'bg-amber-500 text-white' :
                                  row.priority === 3 ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-700'
                                }`}>
                                  P{row.priority}
                                </span>
                              </td>
                              <td className="p-3 font-bold text-slate-800">{row.subject}</td>
                              <td className="p-3 font-semibold text-slate-900">{row.chapter}</td>
                              <td className="p-3 text-center font-mono text-[11px]">
                                <span className="text-emerald-700 font-bold">{row.correct}</span> /{' '}
                                <span className="text-rose-600 font-bold">{row.wrong}</span> /{' '}
                                <span className="text-slate-400">{row.unattempted}</span>
                              </td>
                              <td className="p-3 text-center font-mono font-bold text-blue-700">{row.accuracy}%</td>
                              <td className="p-3 text-rose-800 font-semibold text-[11px]">{row.errorType}</td>
                              <td className="p-3 text-slate-600 text-[11px] leading-relaxed">{row.actionPlan}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* SECTION 7 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
                    <div className="border-b border-slate-100 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                          <BuildingIcon className="w-5 h-5 text-blue-600" />
                          <span>SECTION 7: Rank & Medical College-Chance Dashboard</span>
                        </h3>
                        <p className="text-xs text-slate-500">
                          AI admission predictor mapped across AIIMS, Central, and State Government Medical Colleges.
                        </p>
                      </div>
                      <span className="text-xs font-mono font-bold bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1 rounded-xl">
                        Category Quota: {studentCategory}
                      </span>
                    </div>

                    {(() => {
                      const colleges = getEligibleColleges(testResult.predictedAIR, studentCategory, testResult.score);
                      if (colleges.length === 0) {
                        return (
                          <div className="p-8 rounded-2xl bg-amber-50/80 border border-amber-200 text-center space-y-3">
                            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
                              <AlertIcon className="w-6 h-6" />
                            </div>
                            <h4 className="text-sm font-extrabold text-amber-900">
                              {testResult.score <= 0
                                ? 'No Medical Colleges Recommended (Current Score: 0 Marks)'
                                : `Score Below NEET Qualifying Cutoff (${testResult.score} / 720)`}
                            </h4>
                            <p className="text-xs text-amber-700 max-w-lg mx-auto leading-relaxed">
                              {testResult.score <= 0
                                ? 'Candidates scoring 0 or negative marks are not eligible for medical college seat allotment in AIQ or State Quota counselling. Please review foundational concepts and re-attempt chapter practice tests.'
                                : `The minimum qualifying marks for NEET admission counselling are 137 (General / EWS) and 107 (OBC / SC / ST). Your current score is below the qualifying cutoff threshold.`}
                            </p>
                          </div>
                        );
                      }
                      return (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {colleges.map((col, idx) => (
                            <div
                              key={idx}
                              className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 flex items-center justify-between hover:bg-white hover:shadow-xs transition"
                            >
                              <div className="space-y-0.5">
                                <h4 className="text-xs font-bold text-slate-900">{col.name}</h4>
                                <p className="text-[10px] text-slate-500 font-mono">
                                  {col.type} &bull; {col.state} &bull; {col.seats} MBBS Seats
                                </p>
                              </div>
                              <div className="text-right shrink-0">
                                <span className={`px-2.5 py-1 rounded-xl text-xs border ${col.badgeClass}`}>
                                  {col.badge} ({col.probability}%)
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })()}

                    <p className="text-[10px] text-slate-400 font-mono italic">
                      * Disclaimer: College allotment probabilities are calculated based on historic NTA NEET AIQ/State Counselling opening & closing ranks. Final seat allotment is subject to state quota, category verification, and annual candidate distribution.
                    </p>
                  </div>

                  {/* SECTION 8 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
                    <div className="border-b border-slate-100 pb-2">
                      <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-emerald-600" />
                        <span>SECTION 8: Personalized Improvement Plan & 21-Day Strategic Roadmap</span>
                      </h3>
                      <p className="text-xs text-slate-500">
                        Phased academic interventions to systematically gain +25 Marks by next test.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2">
                        <div className="flex items-center justify-between">
                          <strong className="text-xs font-bold text-blue-900 uppercase">Next 7 Days (Sprint 1)</strong>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-blue-200 text-blue-900 font-bold">Immediate</span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          Focus exclusively on Priority 1 & 2 weak chapters. Re-read NCERT theory and solve 35 targeted DPP MCQs daily.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-2">
                        <div className="flex items-center justify-between">
                          <strong className="text-xs font-bold text-purple-900 uppercase">Next 14 Days (Sprint 2)</strong>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-purple-200 text-purple-900 font-bold">Consolidation</span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          Conduct timed speed-runs (45s/Q) on mixed assertion-reason and diagrammatic MCQs. Re-solve previous test errors without solutions.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                        <div className="flex items-center justify-between">
                          <strong className="text-xs font-bold text-emerald-900 uppercase">Next 21 Days (Sprint 3)</strong>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 font-bold">Simulation</span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          Take a full 720-marks simulation under strict 3-hour exam conditions. Implement two-pass elimination strategy to curb negative marks.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}

              {/* TAB 2: LEADERBOARD */}
              {activeSolutionTab === 'leaderboard' && (
                <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4 max-w-5xl mx-auto animate-in fade-in">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                        <TrophyIcon className="w-5 h-5 text-amber-500" /> All India Top 10 Performers Leaderboard ({testResult.totalMarks || 720} Marks Scale)
                      </h3>
                      <p className="text-xs text-slate-500">
                        Sunday All-India Dropper & Class 12th Test Series &bull; Verified CBT Rank List
                      </p>
                    </div>
                    <span className="text-xs font-bold font-mono bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-xl">
                      Your Score: {testResult.score}/{testResult.totalMarks || 720} (AIR #{testResult.predictedAIR})
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                          <th className="p-3">Rank</th>
                          <th className="p-3">Candidate Name</th>
                          <th className="p-3">State</th>
                          <th className="p-3 text-center">Score (/720)</th>
                          <th className="p-3 text-center">Accuracy</th>
                          <th className="p-3 text-center">Time Taken</th>
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
                            <td className="p-3 text-center font-mono font-bold text-emerald-700">{p.score}</td>
                            <td className="p-3 text-center font-mono text-blue-700">{p.accuracy}%</td>
                            <td className="p-3 text-center font-mono text-slate-500">{p.time}</td>
                          </tr>
                        ))}

                        {/* Current User Row */}
                        <tr className="bg-blue-50/80 border-t-2 border-blue-500 font-bold">
                          <td className="p-3 text-blue-800">AIR #{testResult.predictedAIR}</td>
                          <td className="p-3 text-blue-900">
                            {studentName} (Your Rank)
                          </td>
                          <td className="p-3 text-blue-800">Verified Candidate</td>
                          <td className="p-3 text-center font-mono text-emerald-700 text-sm font-black">{testResult.score}</td>
                          <td className="p-3 text-center font-mono text-blue-700">{testResult.accuracyPercentage}%</td>
                          <td className="p-3 text-center font-mono text-slate-600">{formatTimer(testResult.timeSpentSeconds)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 3: YOU VS TOP SCORER */}
              {activeSolutionTab === 'comparison' && (
                <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4 max-w-5xl mx-auto animate-in fade-in">
                  <div className="pb-3 border-b border-slate-100">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                      <TargetIcon className="w-5 h-5 text-blue-600" /> Head-to-Head: You vs AIR 1 (Aarav Sharma)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Benchmark your accuracy, score, speed, and subject depth against the national top scorer on 720-marks standard.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 text-center space-y-1">
                      <span className="text-xs font-bold text-slate-500 uppercase">Score (/720)</span>
                      <div className="flex items-center justify-center space-x-4 pt-2">
                        <div>
                          <div className="text-xs text-slate-500">You</div>
                          <div className="text-2xl font-black text-blue-700 font-mono">{testResult.score}</div>
                        </div>
                        <div className="text-slate-300 font-bold text-lg">vs</div>
                        <div>
                          <div className="text-xs text-slate-500">AIR 1</div>
                          <div className="text-2xl font-black text-emerald-700 font-mono">710</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 text-center space-y-1">
                      <span className="text-xs font-bold text-slate-500 uppercase">Accuracy Rate</span>
                      <div className="flex items-center justify-center space-x-4 pt-2">
                        <div>
                          <div className="text-xs text-slate-500">You</div>
                          <div className="text-2xl font-black text-blue-700 font-mono">{testResult.accuracyPercentage}%</div>
                        </div>
                        <div className="text-slate-300 font-bold text-lg">vs</div>
                        <div>
                          <div className="text-xs text-slate-500">AIR 1</div>
                          <div className="text-2xl font-black text-emerald-700 font-mono">98%</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 text-center space-y-1">
                      <span className="text-xs font-bold text-slate-500 uppercase">Avg Speed / Q</span>
                      <div className="flex items-center justify-center space-x-4 pt-2">
                        <div>
                          <div className="text-xs text-slate-500">You</div>
                          <div className="text-2xl font-black text-blue-700 font-mono">
                            {Math.round(testResult.timeSpentSeconds / (questions.length || 1))}s
                          </div>
                        </div>
                        <div className="text-slate-300 font-bold text-lg">vs</div>
                        <div>
                          <div className="text-xs text-slate-500">AIR 1</div>
                          <div className="text-2xl font-black text-emerald-700 font-mono">48s</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: SOLUTIONS */}
              {activeSolutionTab === 'solutions' && (
                <div className="space-y-4 max-w-5xl mx-auto animate-in fade-in">
                  {questions.map((q, idx) => {
                    const userOption = testResult?.answers ? testResult.answers[idx] : undefined;
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
                              ? '✓ Correct (+4)'
                              : isUnattempted
                              ? '— Unattempted (0)'
                              : '✗ Incorrect (-1)'}
                          </span>
                        </div>

                        <div className="text-xs sm:text-sm text-slate-900 font-medium leading-relaxed">
                          {renderFormattedQuestionText(q.questionText || (q as any).question || '')}
                        </div>

                        {(q.diagramSvg || questionDiagramMap.get(idx)) && (
                          <div
                            className="my-3 p-3 bg-slate-50 border border-slate-200 rounded-xl flex justify-center items-center overflow-x-auto"
                            dangerouslySetInnerHTML={{ __html: q.diagramSvg || questionDiagramMap.get(idx) || '' }}
                          />
                        )}
                        {q.image && !q.diagramSvg && !questionDiagramMap.get(idx) && (
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

                        <div className="mt-3">
                          <DetailedSolutionViewer
                            explanation={q.explanation}
                            correctAnswer={q.correctAnswer}
                            options={q.options}
                            showCorrectOptionHeader={false}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            )}
          </ErrorBoundary>
        )}
      </div>
    </div>
  );
};
