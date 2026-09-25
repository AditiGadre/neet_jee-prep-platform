import React, { useState, useEffect, useMemo } from 'react';
import {
  FileCheck2,
  Clock,
  Award,
  BarChart3,
  Calendar,
  Layers,
  ChevronRight,
  Filter,
  CheckCircle2,
  Brain,
  Zap,
  TrendingUp,
  AlertCircle,
  Play,
  Download,
  FileText,
  Sparkles,
  Atom,
  Dna,
  Bell,
  Check,
  Phone,
  MessageSquare,
  ShieldCheck,
  Lock,
  Unlock,
  GraduationCap,
  X,
  Search,
  BookOpen,
  Send,
  KeyRound
} from 'lucide-react';
import { TestItem, TestCategory, Question } from '../types';
import { downloadTestPaperPDF } from '../utils/pdfDownloader';
import { recordSuperUserNotification } from '../utils/superUserNotifier';
import { fetchSundayPaperFromCloud } from '../utils/cloudSyncManager';
import { fetchAuthoritativePaper } from '../services/authoritativeCloudService';
import {
  SUNDAY_DROPPER_PLANNER_TESTS,
  SUNDAY_DROPPER_TRACK1_TESTS,
  SUNDAY_DROPPER_TRACK2_TESTS,
  SUNDAY_DROPPER_PC_TESTS,
  SUNDAY_11TH_PLANNER_TESTS,
  PLANNER_12TH_TESTS,
  REVISION_ANALYSIS_BUFFER_12TH,
  SundayPlannerTest,
  generateSundayTestQuestions,
  getSavedCustomSundayPaper,
  assertNoDuplicateQuestions
} from '../data/sundayPlannerTests';

interface TestSeriesSectionProps {
  testItems: TestItem[];
  targetYear?: '2027' | '2028' | '2029';
  onStartTest: (test: TestItem) => void;
  onOpenAdmin?: () => void;
}

export const TestSeriesSection: React.FC<TestSeriesSectionProps> = ({
  testItems,
  targetYear = '2027',
  onStartTest,
  onOpenAdmin
}) => {
  const [activeBatch, setActiveBatch] = useState<'repeater' | '12th' | '11th'>('repeater');
  const [repeaterTrack, setRepeaterTrack] = useState<'track1' | 'track2' | 'pc'>('track1');
  const [activePhaseFilter, setActivePhaseFilter] = useState<'all' | 'cwt' | 'cumulative' | 'part' | 'full' | 'mock'>('all');
  const [showRevisionBuffer, setShowRevisionBuffer] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [reminderSetFor, setReminderSetFor] = useState<string | null>(null);
  const [showAdminApprovalModal, setShowAdminApprovalModal] = useState(false);
  const [accessRequestSent, setAccessRequestSent] = useState(false);
  const [pendingTestToStart, setPendingTestToStart] = useState<SundayPlannerTest | null>(null);

  const enrolledStudent = (() => {
    try {
      const raw = localStorage.getItem('neet_enrolled_student');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  })();

  const studentName = enrolledStudent?.studentName || '';
  const rollNumber = enrolledStudent?.rollNumber || '';
  const studentPhone = enrolledStudent?.studentPhone || '';
  const parentPhone = enrolledStudent?.parentPhone || '';
  const parentName = enrolledStudent?.parentName || '';

  // Check whether Admin has approved Sunday test access
  const checkAdminAccess = () => {
    try {
      if (localStorage.getItem('neet_admin_test_access') === 'true') return true;
      if (sessionStorage.getItem('neet_admin_authenticated') === 'true') return true;

      const rawReqs = localStorage.getItem('neet_unlock_requests');
      if (rawReqs) {
        const reqs = JSON.parse(rawReqs);
        if (Array.isArray(reqs)) {
          return reqs.some((r: any) => {
            if (r.status !== 'approved') return false;
            const rCode = (r.testCode || '').toUpperCase();
            return (
              rCode === 'ALL SUNDAY TESTS' ||
              (rollNumber && r.rollNumber === rollNumber) ||
              (studentPhone && r.studentPhone === studentPhone)
            );
          });
        }
      }
    } catch {
      return false;
    }
    return false;
  };

  // Admin Portal Controlled Test Access State
  const [isAdminAccessGranted, setIsAdminAccessGranted] = useState<boolean>(() => checkAdminAccess());

  // Listen for Admin Portal real-time access updates
  useEffect(() => {
    const handleAccessChange = (e: any) => {
      try {
        const granted = e?.detail?.accessGranted ?? checkAdminAccess();
        setIsAdminAccessGranted(Boolean(granted));
      } catch {
        setIsAdminAccessGranted(false);
      }
    };

    window.addEventListener('neet_admin_access_changed', handleAccessChange);
    window.addEventListener('neet_unlock_request_sent', handleAccessChange);
    window.addEventListener('storage', handleAccessChange);
    return () => {
      window.removeEventListener('neet_admin_access_changed', handleAccessChange);
      window.removeEventListener('neet_unlock_request_sent', handleAccessChange);
      window.removeEventListener('storage', handleAccessChange);
    };
  }, [rollNumber, studentPhone]);

  // Check if today is Sunday (accounting for Indian Standard Time)
  const isSundayToday = useMemo(() => {
    try {
      const now = new Date();
      const istOffset = 5.5 * 60 * 60 * 1000;
      const istTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + istOffset);
      return now.getDay() === 0 || istTime.getDay() === 0;
    } catch {
      return new Date().getDay() === 0;
    }
  }, []);

  const isAdminInSession = typeof sessionStorage !== 'undefined' && sessionStorage.getItem('neet_admin_authenticated') === 'true';

  // Sunday tests unlock ON SUNDAYS and AFTER ADMIN APPROVAL (Faculty preview bypasses schedule)
  const isSundayTestUnlocked = (isSundayToday && isAdminAccessGranted) || isAdminInSession;

  const activeRepeaterTests = useMemo(() => {
    if (repeaterTrack === 'track1') return SUNDAY_DROPPER_TRACK1_TESTS;
    if (repeaterTrack === 'track2') return SUNDAY_DROPPER_TRACK2_TESTS;
    return SUNDAY_DROPPER_PC_TESTS;
  }, [repeaterTrack]);

  // Filter Dropper / Repeater tests based on Phase Filter & Search Query
  const filteredDropperTests = useMemo(() => {
    return activeRepeaterTests.filter(t => {
      // Phase Filter
      if (activePhaseFilter === 'cwt' && t.phaseGroup !== 'cwt') return false;
      if (activePhaseFilter === 'cumulative' && t.phaseGroup !== 'cumulative') return false;
      if (activePhaseFilter === 'part' && t.phaseGroup !== 'part') return false;
      if (activePhaseFilter === 'full' && t.phaseGroup !== 'full') return false;

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inCode = t.code.toLowerCase().includes(q);
        const inTitle = t.title.toLowerCase().includes(q);
        const inPhy = t.physicsUnit.toLowerCase().includes(q);
        const inChem = t.chemistryUnit.toLowerCase().includes(q);
        const inBot = t.botanyBlock.toLowerCase().includes(q);
        const inZoo = t.zoologyBlock.toLowerCase().includes(q);
        const inDate = t.dateStr.includes(q);
        return inCode || inTitle || inPhy || inChem || inBot || inZoo || inDate;
      }
      return true;
    });
  }, [activeRepeaterTests, activePhaseFilter, searchQuery]);

  // Class 12th Batch Scheduled Tests (23 Tests from PDF Planner: 8 Part, 10 Complete Syllabus, 5 NEET Mocks)
  const filtered12thTests = useMemo(() => {
    return PLANNER_12TH_TESTS.filter(t => {
      // Phase Filter
      if (activePhaseFilter === 'part' && !t.code.startsWith('PART')) return false;
      if (activePhaseFilter === 'full' && !t.code.startsWith('FULL')) return false;
      if (activePhaseFilter === 'mock' && !t.code.startsWith('NEET MOCK')) return false;

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inCode = t.code.toLowerCase().includes(q);
        const inTitle = t.title.toLowerCase().includes(q);
        const inPhy = t.physicsUnit.toLowerCase().includes(q);
        const inChem = t.chemistryUnit.toLowerCase().includes(q);
        const inBot = t.botanyBlock.toLowerCase().includes(q);
        const inZoo = t.zoologyBlock.toLowerCase().includes(q);
        const inDate = t.dateStr.includes(q);
        return inCode || inTitle || inPhy || inChem || inBot || inZoo || inDate;
      }
      return true;
    });
  }, [activePhaseFilter, searchQuery]);

  // Class 11th Batch Sunday Tests (Full 20-Sunday Cycle from Planner PDF)
  const filtered11thTests = useMemo(() => {
    return SUNDAY_11TH_PLANNER_TESTS.filter(t => {
      // Phase Filter
      if (activePhaseFilter === 'cwt' && t.phaseGroup !== 'cwt') return false;
      if (activePhaseFilter === 'cumulative' && t.phaseGroup !== 'cumulative') return false;
      if (activePhaseFilter === 'part' && t.phaseGroup !== 'part') return false;
      if (activePhaseFilter === 'full' && t.phaseGroup !== 'full') return false;

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inCode = t.code.toLowerCase().includes(q);
        const inTitle = t.title.toLowerCase().includes(q);
        const inPhy = t.physicsUnit.toLowerCase().includes(q);
        const inChem = t.chemistryUnit.toLowerCase().includes(q);
        const inBot = t.botanyBlock.toLowerCase().includes(q);
        const inZoo = t.zoologyBlock.toLowerCase().includes(q);
        const inDate = t.dateStr.includes(q);
        return inCode || inTitle || inPhy || inChem || inBot || inZoo || inDate;
      }
      return true;
    });
  }, [activePhaseFilter, searchQuery]);

  const currentDisplayTests = activeBatch === 'repeater'
    ? filteredDropperTests
    : activeBatch === '12th'
    ? filtered12thTests
    : filtered11thTests;

  const handleLaunchDirectSundayTest = async (plannerTest: SundayPlannerTest) => {
    if (!isSundayTestUnlocked) {
      setPendingTestToStart(plannerTest);
      setShowAdminApprovalModal(true);
      return;
    }

    const isPCTest = plannerTest.code.startsWith('PC-') || plannerTest.totalQuestions === 100;
    const targetQCount = isPCTest ? 100 : (plannerTest.totalQuestions || 180);
    const targetMarks = isPCTest ? 400 : (plannerTest.totalMarks || 720);
    const targetDuration = isPCTest ? 120 : (plannerTest.durationMinutes || 180);

    // Query authoritative cloud paper directly (single source of truth with highest server revision)
    const paperLookupKey = activeBatch !== 'repeater' ? `${activeBatch}-${plannerTest.code}` : plannerTest.code;
    const customPaper = await fetchAuthoritativePaper(paperLookupKey, true);
    let testQuestions: Question[] = [];
    let syllabusStr = isPCTest
      ? `Physics: ${plannerTest.physicsUnit} | Chemistry: ${plannerTest.chemistryUnit}`
      : `Physics: ${plannerTest.physicsUnit} | Chemistry: ${plannerTest.chemistryUnit} | Botany: ${plannerTest.botanyBlock} | Zoology: ${plannerTest.zoologyBlock}`;

    if (customPaper && Array.isArray(customPaper.questions) && (customPaper.questions.length === targetQCount || customPaper.questions.length === 180 || customPaper.questions.length === 100)) {
      testQuestions = assertNoDuplicateQuestions(customPaper.questions);
      if (customPaper.customChapters) {
        const bioPart = customPaper.customChapters.biology?.length ? ` | Biology: ${customPaper.customChapters.biology.join(', ')}` : '';
        syllabusStr = `Physics: ${(customPaper.customChapters.physics || []).join(', ')} | Chemistry: ${(customPaper.customChapters.chemistry || []).join(', ')}${bioPart}`;
      }
    } else {
      testQuestions = generateSundayTestQuestions(plannerTest, undefined, false, activeBatch);
    }

    const testItem: TestItem = {
      id: plannerTest.id,
      title: `${plannerTest.code}: ${plannerTest.title}`,
      category: 'neet_mock',
      exam: 'NEET',
      syllabus: syllabusStr,
      totalQuestions: targetQCount,
      durationMinutes: targetDuration,
      totalMarks: targetMarks,
      negativeMarking: `+4 for correct, -1 for incorrect, 0 for unattempted (Total ${targetMarks} Marks)`,
      difficulty: 'Mixed',
      cbtMode: true,
      features: isPCTest ? [
        '100 Questions (50 Physics + 50 Chemistry)',
        '120 Minutes (2.0 Hours NTA Timer)',
        '400 Marks (+4 / -1 NTA Official Standard)',
        'Dual-Subject Speed & Accuracy Breakdown'
      ] : [
        '180 Questions (45 Phys + 45 Chem + 45 Bot + 45 Zoo)',
        '180 Minutes (3.0 Hours NTA Timer)',
        '720 Marks (+4 / -1 NTA Official Standard)',
        'All India Rank (AIR) & College Probability Predictor'
      ],
      questions: testQuestions
    };

    onStartTest(testItem);
  };

  const handleSendAccessRequest = () => {
    setAccessRequestSent(true);

    const newRequest = {
      id: `req-${Date.now()}`,
      studentName,
      rollNumber,
      studentPhone,
      parentPhone,
      parentEmail: enrolledStudent?.parentEmail || enrolledStudent?.email || 'parent@example.com',
      targetExam: 'NEET (UG)',
      targetBatch: activeBatch === 'repeater' ? 'Dropper / Target 2027' : activeBatch === '12th' ? 'Class 12th Batch' : 'Class 11th Batch',
      testCode: pendingTestToStart?.code || 'All Sunday Tests',
      testTitle: pendingTestToStart?.title || 'Sunday All-India Test Series (720 Marks)',
      requestedAt: new Date().toISOString(),
      status: 'pending' as const
    };

    try {
      const raw = localStorage.getItem('neet_unlock_requests');
      const list = raw ? JSON.parse(raw) : [];
      list.unshift(newRequest);
      localStorage.setItem('neet_unlock_requests', JSON.stringify(list));
      window.dispatchEvent(new Event('neet_unlock_request_sent'));
    } catch {}

    recordSuperUserNotification({
      contentTitle: `Sunday Test Access Request: Candidate ${studentName} (Roll #${rollNumber}) requested authorization for ${pendingTestToStart?.code || 'All Sunday Tests'}`,
      category: 'Test Paper',
      fileSize: 'Test Access',
      subject: 'Sunday Test Series'
    });
  };

  const handleDownloadSundayPdf = async (plannerTest: SundayPlannerTest, includeSolutions: boolean = false) => {
    if (!isSundayTestUnlocked) {
      setPendingTestToStart(plannerTest);
      setShowAdminApprovalModal(true);
      return;
    }

    const isPCTest = plannerTest.code.startsWith('PC-') || plannerTest.totalQuestions === 100;
    const targetQCount = isPCTest ? 100 : (plannerTest.totalQuestions || 180);
    const targetMarks = isPCTest ? 400 : (plannerTest.totalMarks || 720);
    const targetDuration = isPCTest ? 120 : (plannerTest.durationMinutes || 180);

    const paperLookupKey = activeBatch !== 'repeater' ? `${activeBatch}-${plannerTest.code}` : plannerTest.code;
    const customPaper = await fetchAuthoritativePaper(paperLookupKey, true);

    const questions = (customPaper && Array.isArray(customPaper.questions) && (customPaper.questions.length === targetQCount || customPaper.questions.length === 180 || customPaper.questions.length === 100))
      ? assertNoDuplicateQuestions(customPaper.questions)
      : generateSundayTestQuestions(plannerTest, undefined, false, activeBatch);

    const testItem: TestItem = {
      id: plannerTest.id,
      title: `${plannerTest.code}: ${plannerTest.title}`,
      category: 'neet_mock',
      exam: 'NEET',
      syllabus: isPCTest
        ? `Physics: ${plannerTest.physicsUnit} | Chemistry: ${plannerTest.chemistryUnit}`
        : customPaper?.customChapters
        ? `Physics: ${(customPaper.customChapters.physics || []).join(', ')} | Chemistry: ${(customPaper.customChapters.chemistry || []).join(', ')}${customPaper.customChapters.biology?.length ? ` | Biology: ${customPaper.customChapters.biology.join(', ')}` : ''}`
        : `Physics: ${plannerTest.physicsUnit} | Chemistry: ${plannerTest.chemistryUnit} | Botany: ${plannerTest.botanyBlock} | Zoology: ${plannerTest.zoologyBlock}`,
      totalQuestions: targetQCount,
      durationMinutes: targetDuration,
      totalMarks: targetMarks,
      negativeMarking: `+4 for correct, -1 for incorrect, 0 for unattempted (Total ${targetMarks} Marks)`,
      difficulty: 'Mixed',
      cbtMode: true,
      questions
    };
    downloadTestPaperPDF(testItem, includeSolutions);
  };

  const handleSetReminder = (testTitle: string, dateStr: string) => {
    setReminderSetFor(`${testTitle} (${dateStr})`);
    setTimeout(() => {
      setReminderSetFor(null);
    }, 4500);
  };

  return (
    <div className="space-y-4">
      {/* 3 Dedicated Batch Tabs: Repeater / Dropper Batch, 12th Batch, 11th Batch */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-2 sm:p-2.5 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => {
              setActiveBatch('repeater');
              setActivePhaseFilter('all');
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 cursor-pointer ${
              activeBatch === 'repeater'
                ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white shadow-md'
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Zap className="w-4 h-4 text-amber-300" />
            <span>Repeater / Dropper Batch</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-current font-mono">
              Starts 04 Oct 2026
            </span>
          </button>

          <button
            onClick={() => {
              setActiveBatch('12th');
              setActivePhaseFilter('all');
              setShowRevisionBuffer(false);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 cursor-pointer ${
              activeBatch === '12th'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>12th Batch</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-current font-mono">
              23 Tests + Buffer
            </span>
          </button>

          <button
            onClick={() => {
              setActiveBatch('11th');
              setActivePhaseFilter('all');
              setShowRevisionBuffer(false);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 cursor-pointer ${
              activeBatch === '11th'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Atom className="w-4 h-4" />
            <span>11th Batch</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-current font-mono">
              20 Sunday Tests
            </span>
          </button>
        </div>

        {/* Admin Authorization Status Badge */}
        <div className="flex items-center space-x-2">
          {isAdminAccessGranted ? (
            <span className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-bold flex items-center space-x-1.5 font-mono shadow-2xs">
              <Unlock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Admin Access Granted (Tests Unlocked)</span>
            </span>
          ) : (
            <button
              onClick={() => setShowAdminApprovalModal(true)}
              className="px-3.5 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer shadow-2xs"
            >
              <Lock className="w-3.5 h-3.5 text-amber-700" />
              <span>Awaiting Admin Portal Approval</span>
            </button>
          )}
        </div>
      </div>

      {/* Header Banner for Current Batch */}
      <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50/50 border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {activeBatch === 'repeater'
                ? repeaterTrack === 'track1'
                  ? 'NEET 2026–27 Dropper Batch: Track 1 (20-Week Chapterwise • 46 Tests)'
                  : repeaterTrack === 'track2'
                  ? 'NEET 2026–27 Dropper Batch: Track 2 (17-Week Fast-Track • 46 Tests)'
                  : 'NEET 2026–27 Dropper Batch: Track 3 (Physics & Chemistry Series • 27 Tests)'
                : activeBatch === '12th'
                ? 'Class 12th Complete Syllabus Test Series (Official 23-Test Cycle + Buffer)'
                : 'Class 11th Foundation Sunday All-India Test Series (Official 20-Sunday Cycle)'}
            </h1>
            <p className="mt-1 text-xs text-slate-600 max-w-3xl leading-relaxed">
              {activeBatch === '11th' ? (
                <>
                  Strictly aligned to official NMC/NTA NEET syllabus: <strong>Complete chapter-wise testing by the last week of February, followed by three complete Class 11 NEET syllabus tests</strong>. Chapter-wise tests (<strong>CWT-01 to CWT-12</strong>) scheduled every second Sunday, Cumulative tests (<strong>CUM-01 to CUM-05</strong>) placed after learning blocks, and Full Syllabus Tests (<strong>FST-01 to FST-03</strong>). <strong>180 Questions • 180 Minutes • 720 Marks CBT</strong>.
                </>
              ) : activeBatch === '12th' ? (
                <>
                  Structured 3-Phase NEET (UG) Master Planner for Class 12: <strong>Phase 1: 8 Part-Wise Tests (PART 1–8)</strong> every 5 days covering Class 11 &amp; 12 progressively; <strong>Phase 2: 10 Complete Syllabus Tests (FULL-01 to FULL-10)</strong> every 4 days focusing on baseline, error tagging, NCERT retention, reactions, and pacing; <strong>Phase 3: 5 NEET Mock Simulations (NEET MOCK-01 to 05)</strong> every 2 days with full analytics; followed by a <strong>7-Stage Revision &amp; Analysis Buffer</strong> through 03 Feb 2027. <strong>180 Questions • 180 Minutes • 720 Marks CBT</strong>.
                </>
              ) : repeaterTrack === 'track1' ? (
                <>
                  Starting <strong>04 October 2026</strong>: <strong>20 Chapter-Wise Tests (CW-01 to CW-20)</strong> every Sunday with zero chapter repeats &rarr; <strong>8 Part-Wise Cumulative Tests (PT-01 to PT-08)</strong> every 4 days &rarr; <strong>18 Full Syllabus Tests (FS-01 to FS-18)</strong> every 3 and 2 days through 30 April 2027. <strong>180 Questions • 180 Minutes • 720 Marks CBT</strong>.
                </>
              ) : repeaterTrack === 'track2' ? (
                <>
                  Starting <strong>04 October 2026</strong>: <strong>17 Chapter-Wise Tests (T01 to T17)</strong> every Sunday with standalone high-yield focus &rarr; <strong>8 Part-Wise Tests (P01 to P08)</strong> every 4 days &rarr; <strong>21 Full Syllabus Tests (F01 to F21)</strong> every 3 days through 29 April 2027. <strong>180 Questions • 180 Minutes • 720 Marks CBT</strong>.
                </>
              ) : (
                <>
                  Dedicated Full-Syllabus Physics &amp; Chemistry Series from <strong>10 February to 29 April 2027</strong>: <strong>27 Tests (PC-01 to PC-27)</strong> scheduled every 3 days covering 100% of Physics and Chemistry syllabus. <strong>100 Questions (50 Physics + 50 Chemistry) • 120 Minutes • 400 Marks</strong>.
                </>
              )}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <span className="px-3.5 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-bold flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>{isAdminAccessGranted ? '✓ Authorized by Admin' : '🔒 Admin Managed'}</span>
            </span>
          </div>
        </div>

        {/* Track Switcher Segmented Control for Repeater / Dropper Batch */}
        {activeBatch === 'repeater' && (
          <div className="mt-4 p-2 bg-slate-100/90 rounded-2xl border border-slate-200 flex flex-wrap gap-2 items-center">
            <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider px-1">
              Select Track:
            </span>
            <button
              onClick={() => {
                setRepeaterTrack('track1');
                setActivePhaseFilter('all');
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 cursor-pointer ${
                repeaterTrack === 'track1'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              <span>Track 1: 20-Week Chapterwise (46 Tests)</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${repeaterTrack === 'track1' ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800'}`}>
                Starts 04 Oct
              </span>
            </button>

            <button
              onClick={() => {
                setRepeaterTrack('track2');
                setActivePhaseFilter('all');
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 cursor-pointer ${
                repeaterTrack === 'track2'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              <span>Track 2: 17-Week Fast-Track (46 Tests)</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${repeaterTrack === 'track2' ? 'bg-white/20 text-white' : 'bg-indigo-100 text-indigo-800'}`}>
                Starts 04 Oct
              </span>
            </button>

            <button
              onClick={() => {
                setRepeaterTrack('pc');
                setActivePhaseFilter('all');
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 cursor-pointer ${
                repeaterTrack === 'pc'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              <span>Track 3: Physics &amp; Chemistry (27 Tests)</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${repeaterTrack === 'pc' ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'}`}>
                10 Feb – 29 Apr
              </span>
            </button>
          </div>
        )}

        {/* High Density Metric Cards */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {activeBatch === '11th' ? (
            <>
              <div className="p-3 rounded-xl bg-white border border-blue-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-blue-700 tracking-wider">Phase 1: Chapter-Wise</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">12 Sunday Tests</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-amber-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-amber-700 tracking-wider">Phase 1: Cumulative</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">5 Sunday Tests</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-emerald-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">Final Phase: Full Syllabus</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">3 Sunday Tests</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-purple-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-purple-700 tracking-wider">Total 11th Cycle</div>
                <div className="text-xl font-bold text-purple-700 mt-0.5 font-mono">20 Tests (3,600 Qs)</div>
                <div className="text-[10px] text-purple-600 font-semibold mt-0.5 font-mono">180 Mins &bull; 720 Marks CBT</div>
              </div>
            </>
          ) : activeBatch === '12th' ? (
            <>
              <div className="p-3 rounded-xl bg-white border border-blue-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-blue-700 tracking-wider">Phase 1: Part-Wise</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">8 Tests (Every 5d)</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-emerald-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">Phase 2: Complete Syllabus</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">10 Tests (Every 4d)</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-amber-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-amber-700 tracking-wider">Phase 3: NEET Mocks</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">5 Mocks (Every 2d)</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-purple-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-purple-700 tracking-wider">Buffer &amp; Analysis</div>
                <div className="text-xl font-bold text-purple-700 mt-0.5 font-mono">7 Repair Cycles</div>
              </div>
            </>
          ) : repeaterTrack === 'track1' ? (
            <>
              <div className="p-3 rounded-xl bg-white border border-blue-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-blue-700 tracking-wider">Phase 1: Chapter-Wise</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">20 Tests (04 Oct - 14 Feb)</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-indigo-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-indigo-700 tracking-wider">Phase 2: Part-Wise</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">8 Tests (18 Feb - 18 Mar)</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-emerald-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">Phase 3: Full Syllabus</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">18 Tests (22 Mar - 30 Apr)</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-purple-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-purple-700 tracking-wider">Track 1 Total Cycle</div>
                <div className="text-xl font-bold text-purple-700 mt-0.5 font-mono">46 Tests (8,280 Qs)</div>
                <div className="text-[10px] text-purple-600 font-semibold mt-0.5 font-mono">180 Mins &bull; 720 Marks CBT</div>
              </div>
            </>
          ) : repeaterTrack === 'track2' ? (
            <>
              <div className="p-3 rounded-xl bg-white border border-blue-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-blue-700 tracking-wider">Phase 1: Fast-Track</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">17 Tests (04 Oct - 24 Jan)</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-indigo-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-indigo-700 tracking-wider">Phase 2: Part-Wise</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">8 Tests (28 Jan - 25 Feb)</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-emerald-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">Phase 3: Full Syllabus</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">21 Tests (28 Feb - 29 Apr)</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-purple-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-purple-700 tracking-wider">Track 2 Total Cycle</div>
                <div className="text-xl font-bold text-purple-700 mt-0.5 font-mono">46 Tests (8,280 Qs)</div>
                <div className="text-[10px] text-purple-600 font-semibold mt-0.5 font-mono">180 Mins &bull; 720 Marks CBT</div>
              </div>
            </>
          ) : (
            <>
              <div className="p-3 rounded-xl bg-white border border-blue-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-blue-700 tracking-wider">Subject 1: Physics</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">20 Official Units (50 Qs)</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-emerald-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">Subject 2: Chemistry</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">20 Official Units (50 Qs)</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-amber-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-amber-700 tracking-wider">Cadence</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">Every 3 Days (10 Feb - 29 Apr)</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-purple-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-purple-700 tracking-wider">Track 3 Total Cycle</div>
                <div className="text-xl font-bold text-purple-700 mt-0.5 font-mono">27 Tests (2,700 Qs)</div>
                <div className="text-[10px] text-purple-600 font-semibold mt-0.5 font-mono">120 Mins &bull; 400 Marks CBT</div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* REMINDER SUCCESS TOAST */}
      {reminderSetFor && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-start space-x-3 shadow-md animate-in slide-in-from-top-2 duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-0.5 text-xs">
            <div className="font-bold text-emerald-900">
              🔔 Automated Sunday Test Reminder Activated for {reminderSetFor}!
            </div>
            <p className="text-emerald-800">
              Test reminder scheduled for Sunday at <strong>8:00 AM</strong>. Candidate alert will be sent to <strong>{studentPhone ? `+91 ${studentPhone}` : 'registered mobile'}</strong>. Exam window opens at 9:00 AM.
            </p>
          </div>
        </div>
      )}

      {/* PHASE FILTER PILLS & SEARCH BAR */}
      <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {(activeBatch === '11th'
            ? [
                { id: 'all', label: `All (${SUNDAY_11TH_PLANNER_TESTS.length})` },
                { id: 'cwt', label: 'Phase 1: CWT (12)' },
                { id: 'cumulative', label: 'Phase 1: Cumulative (5)' },
                { id: 'full', label: 'Final Phase: Full Syllabus (3)' }
              ]
            : activeBatch === '12th'
            ? [
                { id: 'all', label: `All (23 Tests)` },
                { id: 'part', label: 'Phase 1: Part-Wise (8)' },
                { id: 'full', label: 'Phase 2: Complete Syllabus (10)' },
                { id: 'mock', label: 'Phase 3: NEET Mocks (5)' }
              ]
            : repeaterTrack === 'track1'
            ? [
                { id: 'all', label: `All (${SUNDAY_DROPPER_TRACK1_TESTS.length})` },
                { id: 'cwt', label: 'Phase 1: Chapter-Wise (20)' },
                { id: 'part', label: 'Phase 2: Part-Wise (8)' },
                { id: 'full', label: 'Phase 3: Full Syllabus (18)' }
              ]
            : repeaterTrack === 'track2'
            ? [
                { id: 'all', label: `All (${SUNDAY_DROPPER_TRACK2_TESTS.length})` },
                { id: 'cwt', label: 'Phase 1: Fast-Track (17)' },
                { id: 'part', label: 'Phase 2: Part-Wise (8)' },
                { id: 'full', label: 'Phase 3: Full Syllabus (21)' }
              ]
            : [
                { id: 'all', label: `All (${SUNDAY_DROPPER_PC_TESTS.length} Tests)` },
                { id: 'full', label: 'Full Syllabus PC Series (27)' }
              ]
          ).map(f => (
            <button
              key={f.id}
              onClick={() => {
                setActivePhaseFilter(f.id as any);
                setShowRevisionBuffer(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                activePhaseFilter === f.id && !showRevisionBuffer
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}

          {activeBatch === '12th' && (
            <button
              onClick={() => setShowRevisionBuffer(!showRevisionBuffer)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                showRevisionBuffer
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-purple-50 text-purple-800 hover:bg-purple-100 border border-purple-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Revision &amp; Analysis Buffer (7 Stages)</span>
            </button>
          )}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search test code or chapter..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* 12th BATCH REVISION & ANALYSIS BUFFER PANEL */}
      {activeBatch === '12th' && showRevisionBuffer && (
        <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50/80 via-white to-indigo-50/50 border border-purple-200 shadow-xs space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-100 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-purple-600 text-white shadow-2xs">
                <Sparkles className="w-4 h-4 text-amber-300" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Revision &amp; Analysis Buffer (11 December 2026 – 03 February 2027)
                </h3>
                <p className="text-xs text-slate-600">
                  Structured 7-cycle post-mock remediation program to eliminate errors and cement 720-mark mastery.
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowRevisionBuffer(false)}
              className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 self-start sm:self-auto cursor-pointer"
            >
              Hide Buffer
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {REVISION_ANALYSIS_BUFFER_12TH.map((stage, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-purple-100 shadow-2xs hover:border-purple-300 transition space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-md font-mono">
                    Stage {idx + 1}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 font-mono">
                    {stage.period}
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-900">
                  {stage.action}
                </div>
                <div className="text-[11px] text-slate-600 leading-relaxed bg-purple-50/40 p-2 rounded-lg border border-purple-100/60">
                  <span className="font-bold text-purple-900">Output:</span> {stage.output}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SCHEDULED SUNDAYS CALENDAR LIST */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span>Showing {currentDisplayTests.length} {activeBatch === '12th' ? 'Scheduled Tests' : 'Scheduled Sunday Tests'}</span>
          </h2>
          <span className="text-xs font-mono font-semibold text-slate-500">
            {activeBatch === 'repeater' && repeaterTrack === 'pc' ? 'Physics & Chemistry Full Syllabus • 400 Marks' : 'Official NTA NEET Standard • 720 Marks'}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3.5">
          {currentDisplayTests.map((mock: SundayPlannerTest) => {
            const isLive = isSundayToday;
            return (
              <div
                key={mock.id}
                className={`p-5 rounded-2xl border transition hover:shadow-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 ${
                  isLive && isAdminAccessGranted
                    ? 'bg-gradient-to-br from-blue-50/70 via-white to-cyan-50/40 border-blue-400 shadow-sm'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="space-y-2 flex-1 w-full">
                  {/* Test Badges Row */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase font-mono tracking-wider flex items-center gap-1 ${
                        isLive && isAdminAccessGranted
                          ? 'bg-rose-600 text-white animate-pulse'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {isLive && isAdminAccessGranted ? '🔴 LIVE TODAY (SUNDAY)' : `📅 ${mock.dateStr}`}
                    </span>

                    {(() => {
                      const isMock = mock.code.startsWith('NEET MOCK');
                      const isFull = mock.code.startsWith('FULL-') || mock.code.startsWith('FST-') || mock.phaseGroup === 'full';
                      const isCum = mock.phaseGroup === 'cumulative' || mock.code.startsWith('CUM-');
                      const isPart = mock.code.startsWith('PART');
                      
                      let badgeColorClass = 'text-blue-700 bg-blue-50 border-blue-200';
                      if (isMock) {
                        badgeColorClass = 'text-amber-800 bg-amber-50 border-amber-300';
                      } else if (isFull && !isMock) {
                        badgeColorClass = 'text-emerald-800 bg-emerald-50 border-emerald-300';
                      } else if (isCum) {
                        badgeColorClass = 'text-amber-800 bg-amber-50 border-amber-300';
                      } else if (isPart) {
                        badgeColorClass = 'text-indigo-800 bg-indigo-50 border-indigo-200';
                      }

                      return (
                        <span className={`text-xs font-bold font-mono px-2.5 py-0.5 rounded-lg border ${badgeColorClass}`}>
                          {mock.code} &bull; {mock.phase}
                        </span>
                      );
                    })()}

                    <span className="text-xs font-mono text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-lg">
                      {mock.totalMarks || 720} Marks &bull; {mock.durationMinutes || 180} Mins &bull; {mock.totalQuestions || 180} Qs
                    </span>

                    {isSundayTestUnlocked ? (
                      <span className="text-[10px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 px-2 py-0.5 rounded-lg flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> ✓ Sunday Test Active
                      </span>
                    ) : isAdminAccessGranted && !isSundayToday ? (
                      <span className="text-[10px] font-bold bg-cyan-100 text-cyan-900 border border-cyan-300 px-2 py-0.5 rounded-lg flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-cyan-700" /> Authorized • Unlocks on Sunday
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-lg flex items-center gap-1">
                        <Lock className="w-3 h-3" /> Admin Approval Required
                      </span>
                    )}
                  </div>

                  {/* Title & Objective */}
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {mock.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {mock.objective || mock.description}
                    </p>
                  </div>

                  {/* Exact Syllabus Breakdown Grid (2 Cols for PC, 4 Cols for 4 Subjects) */}
                  {mock.code.startsWith('PC-') ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1.5">
                      <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs">
                        <div className="text-[10px] font-bold text-blue-800 uppercase flex items-center justify-between">
                          <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-blue-600" /> Physics</span>
                          <span className="font-mono text-blue-600">50 Qs &bull; 200M</span>
                        </div>
                        <div className="text-[11px] font-semibold text-blue-950 mt-1 leading-snug">
                          {mock.physicsUnit}
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs">
                        <div className="text-[10px] font-bold text-emerald-800 uppercase flex items-center justify-between">
                          <span className="flex items-center gap-1"><Atom className="w-3 h-3 text-emerald-600" /> Chemistry</span>
                          <span className="font-mono text-emerald-600">50 Qs &bull; 200M</span>
                        </div>
                        <div className="text-[11px] font-semibold text-emerald-950 mt-1 leading-snug">
                          {mock.chemistryUnit}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-1.5">
                      <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs">
                        <div className="text-[10px] font-bold text-blue-800 uppercase flex items-center justify-between">
                          <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-blue-600" /> Physics</span>
                          <span className="font-mono text-blue-600">45 Qs &bull; 180M</span>
                        </div>
                        <div className="text-[11px] font-semibold text-blue-950 mt-1 leading-snug">
                          {mock.physicsUnit}
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs">
                        <div className="text-[10px] font-bold text-emerald-800 uppercase flex items-center justify-between">
                          <span className="flex items-center gap-1"><Atom className="w-3 h-3 text-emerald-600" /> Chemistry</span>
                          <span className="font-mono text-emerald-600">45 Qs &bull; 180M</span>
                        </div>
                        <div className="text-[11px] font-semibold text-emerald-950 mt-1 leading-snug">
                          {mock.chemistryUnit}
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-teal-50/70 border border-teal-200 text-xs">
                        <div className="text-[10px] font-bold text-teal-800 uppercase flex items-center justify-between">
                          <span className="flex items-center gap-1"><BookOpen className="w-3 h-3 text-teal-600" /> Botany</span>
                          <span className="font-mono text-teal-600">45 Qs &bull; 180M</span>
                        </div>
                        <div className="text-[11px] font-semibold text-teal-950 mt-1 leading-snug">
                          {mock.botanyBlock}
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-200 text-xs">
                        <div className="text-[10px] font-bold text-purple-800 uppercase flex items-center justify-between">
                          <span className="flex items-center gap-1"><Dna className="w-3 h-3 text-purple-600" /> Zoology</span>
                          <span className="font-mono text-purple-600">45 Qs &bull; 180M</span>
                        </div>
                        <div className="text-[11px] font-semibold text-purple-950 mt-1 leading-snug">
                          {mock.zoologyBlock}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action CTAs */}
                <div className="flex flex-wrap lg:flex-col items-stretch sm:items-center lg:items-end gap-2 shrink-0 self-stretch lg:self-center">
                  <button
                    onClick={() => handleLaunchDirectSundayTest(mock)}
                    className={`px-5 py-3 rounded-xl text-white text-xs font-bold shadow-md transition flex items-center justify-center space-x-2 cursor-pointer w-full sm:w-auto ${
                      isSundayTestUnlocked
                        ? isLive
                          ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-blue-500/20'
                          : 'bg-blue-600 hover:bg-blue-700'
                        : isAdminAccessGranted && !isSundayToday
                        ? 'bg-slate-700 hover:bg-slate-800 border border-slate-600'
                        : 'bg-slate-800 hover:bg-slate-900 border border-slate-700'
                    }`}
                  >
                    {isSundayTestUnlocked ? (
                      <>
                        <Play className="w-4 h-4 fill-current" />
                        <span>
                          {mock.code.startsWith('PC-')
                            ? 'Start Physics & Chemistry Test (400M)'
                            : isLive
                            ? 'Start Live Sunday Test (720M)'
                            : activeBatch === '12th'
                            ? 'Start Scheduled Test (720M)'
                            : 'Start Sunday Test (720M)'}
                        </span>
                      </>
                    ) : isAdminAccessGranted && !isSundayToday ? (
                      <>
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span>Authorized &bull; Unlocks on Sunday</span>
                      </>
                    ) : isSundayToday && !isAdminAccessGranted ? (
                      <>
                        <Lock className="w-4 h-4 text-amber-400" />
                        <span>Sunday Live &bull; Request Admin Approval</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 text-amber-400" />
                        <span>Unlocks on Sunday with Admin Approval</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Admin Authorization Required Modal */}
      {showAdminApprovalModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-200 text-slate-900">
            {/* Header */}
            <div className={`p-5 text-white flex items-center justify-between ${
              isAdminAccessGranted && !isSundayToday
                ? 'bg-gradient-to-r from-cyan-700 via-blue-800 to-slate-900'
                : 'bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900'
            }`}>
              <div className="space-y-1">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase font-mono ${
                  isAdminAccessGranted && !isSundayToday
                    ? 'bg-emerald-400 text-slate-900'
                    : 'bg-amber-400 text-slate-900'
                }`}>
                  {isAdminAccessGranted && !isSundayToday ? '✓ Candidate Authorized' : 'Administrator Authorization Required'}
                </span>
                <h3 className="text-lg font-bold flex items-center gap-2">
                  {isAdminAccessGranted && !isSundayToday ? (
                    <>
                      <Calendar className="w-5 h-5 text-cyan-300" />
                      <span>Scheduled for Sunday (720M CBT)</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5 text-amber-300" />
                      <span>{isSundayToday ? 'Sunday Live Test • Admin Approval' : 'Sunday Test Series Authorization'}</span>
                    </>
                  )}
                </h3>
              </div>
              <button
                onClick={() => {
                  setShowAdminApprovalModal(false);
                  setAccessRequestSent(false);
                }}
                className="p-1.5 rounded-xl hover:bg-white/10 text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                {isAdminAccessGranted && !isSundayToday ? (
                  <>
                    Your candidate registration has been verified and authorized by the institution administrator! Sunday All-India Mock Tests (720 Marks) are conducted on Sundays according to the academic planner. This test room will open automatically on Sunday.
                  </>
                ) : isSundayToday ? (
                  <>
                    Sunday tests are conducted on Sundays and unlock after administrator approval. Send your authorization request below to obtain faculty approval and unlock your 720-marks CBT access.
                  </>
                ) : (
                  <>
                    Sunday All-India Mock Tests (180 Questions &bull; 720 Marks &bull; AIR Prediction) are conducted on Sundays and unlock after administrator approval. You can submit your authorization request now to have your profile approved ahead of Sunday.
                  </>
                )}
              </p>

              {/* Student Identification Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <KeyRound className="w-4 h-4 text-blue-600" /> Candidate Verification Details:
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <div>
                    <span className="text-slate-500">Student:</span> <span className="font-bold text-slate-900">{studentName || 'Registered Student'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Roll No:</span> <span className="font-bold text-blue-700">{rollNumber || 'Enrolled'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Contact:</span> <span className="font-bold text-slate-800">{studentPhone ? `+91 ${studentPhone}` : 'Enrolled Profile'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Status:</span>{' '}
                    {isAdminAccessGranted ? (
                      <span className="font-bold text-emerald-700">✓ Approved by Admin</span>
                    ) : (
                      <span className="font-bold text-amber-700">Pending Admin Approval</span>
                    )}
                  </div>
                </div>
              </div>

              {accessRequestSent ? (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-start space-x-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="space-y-0.5 text-xs">
                    <div className="font-bold text-emerald-950">✓ Access Request Sent to Admin Portal!</div>
                    <p className="text-emerald-800">
                      Your test authorization request has been logged in the Admin Portal. Once faculty approves, tests will unlock automatically.
                    </p>
                  </div>
                </div>
              ) : null}

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                {!isAdminAccessGranted && !accessRequestSent && (
                  <button
                    onClick={handleSendAccessRequest}
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Access Request to Administrator</span>
                  </button>
                )}

                <button
                  onClick={() => {
                    setShowAdminApprovalModal(false);
                    setAccessRequestSent(false);
                  }}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition cursor-pointer"
                >
                  {isAdminAccessGranted && !isSundayToday ? 'OK, Got It' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
