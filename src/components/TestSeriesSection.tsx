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
import {
  SUNDAY_DROPPER_PLANNER_TESTS,
  SUNDAY_11TH_PLANNER_TESTS,
  PLANNER_12TH_TESTS,
  REVISION_ANALYSIS_BUFFER_12TH,
  SundayPlannerTest,
  generateSundayTestQuestions,
  getSavedCustomSundayPaper
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
  const [activePhaseFilter, setActivePhaseFilter] = useState<'all' | 'cwt' | 'cumulative' | 'part' | 'full' | 'mock'>('all');
  const [showRevisionBuffer, setShowRevisionBuffer] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [reminderSetFor, setReminderSetFor] = useState<string | null>(null);
  const [showAdminApprovalModal, setShowAdminApprovalModal] = useState(false);
  const [accessRequestSent, setAccessRequestSent] = useState(false);
  const [pendingTestToStart, setPendingTestToStart] = useState<SundayPlannerTest | null>(null);

  // Admin Portal Controlled Test Access State
  const [isAdminAccessGranted, setIsAdminAccessGranted] = useState<boolean>(() => {
    try {
      return localStorage.getItem('neet_admin_test_access') === 'true';
    } catch {
      return false;
    }
  });

  // Listen for Admin Portal real-time access updates
  useEffect(() => {
    const handleAccessChange = (e: any) => {
      try {
        const granted = e?.detail?.accessGranted ?? (localStorage.getItem('neet_admin_test_access') === 'true');
        setIsAdminAccessGranted(Boolean(granted));
      } catch {
        setIsAdminAccessGranted(false);
      }
    };

    window.addEventListener('neet_admin_access_changed', handleAccessChange);
    window.addEventListener('storage', handleAccessChange);
    return () => {
      window.removeEventListener('neet_admin_access_changed', handleAccessChange);
      window.removeEventListener('storage', handleAccessChange);
    };
  }, []);

  const enrolledStudent = (() => {
    try {
      const raw = localStorage.getItem('neet_enrolled_student');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  })();

  const studentName = enrolledStudent?.studentName || 'Enrolled Student';
  const rollNumber = enrolledStudent?.rollNumber || 'NEET-2027-001';
  const studentPhone = enrolledStudent?.studentPhone || '9876543210';
  const parentPhone = enrolledStudent?.parentPhone || '9876543211';
  const parentName = enrolledStudent?.parentName || 'Parent / Guardian';

  const today = new Date();
  const isSundayToday = today.getDay() === 0;

  // Filter Dropper / Repeater tests based on Phase Filter & Search Query
  const filteredDropperTests = useMemo(() => {
    return SUNDAY_DROPPER_PLANNER_TESTS.filter(t => {
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

  const handleLaunchDirectSundayTest = (plannerTest: SundayPlannerTest) => {
    if (!isAdminAccessGranted) {
      setPendingTestToStart(plannerTest);
      setShowAdminApprovalModal(true);
      return;
    }

    // Check if admin has customized this specific Sunday test
    const customPaper = getSavedCustomSundayPaper(plannerTest.code);
    let testQuestions: Question[] = [];
    let syllabusStr = `Physics: ${plannerTest.physicsUnit} | Chemistry: ${plannerTest.chemistryUnit} | Botany: ${plannerTest.botanyBlock} | Zoology: ${plannerTest.zoologyBlock}`;

    if (customPaper && Array.isArray(customPaper.questions) && customPaper.questions.length === 180) {
      testQuestions = customPaper.questions;
      if (customPaper.customChapters) {
        syllabusStr = `Physics: ${customPaper.customChapters.physics.join(', ')} | Chemistry: ${customPaper.customChapters.chemistry.join(', ')} | Biology: ${customPaper.customChapters.biology.join(', ')}`;
      }
    } else {
      testQuestions = generateSundayTestQuestions(plannerTest, undefined, true, activeBatch);
    }

    const testItem: TestItem = {
      id: plannerTest.id,
      title: `${plannerTest.code}: ${plannerTest.title}`,
      category: 'neet_mock',
      exam: 'NEET',
      syllabus: syllabusStr,
      totalQuestions: 180,
      durationMinutes: 180,
      totalMarks: 720,
      negativeMarking: '+4 for correct, -1 for incorrect, 0 for unattempted (Total 720 Marks)',
      difficulty: 'Mixed',
      cbtMode: true,
      features: [
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

  const handleDownloadSundayPdf = (plannerTest: SundayPlannerTest) => {
    const questions = generateSundayTestQuestions(plannerTest, undefined, false, activeBatch);
    const testItem: TestItem = {
      id: plannerTest.id,
      title: `${plannerTest.code}: ${plannerTest.title}`,
      category: 'neet_mock',
      exam: 'NEET',
      syllabus: `Physics: ${plannerTest.physicsUnit} | Chemistry: ${plannerTest.chemistryUnit} | Botany: ${plannerTest.botanyBlock} | Zoology: ${plannerTest.zoologyBlock}`,
      totalQuestions: 180,
      durationMinutes: 180,
      totalMarks: 720,
      negativeMarking: '+4 for correct, -1 for incorrect (Total 720 Marks)',
      difficulty: 'Mixed',
      cbtMode: true,
      questions
    };
    downloadTestPaperPDF(testItem, false);
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
              33 Sunday Planner Tests
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
                ? 'NEET 2027 Dropper Sunday Test Series (Official 33-Sunday Cycle)'
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
              ) : (
                <>
                  Strictly aligned to official NMC/NTA NEET syllabus: <strong>180 Questions &bull; 180 Minutes (3.0 Hours) &bull; 720 Marks (Physics 180, Chemistry 180, Biology 360)</strong>. Every Sunday test follows the prescribed chapter progression: <strong>CWT (Chapter-Wise 1-19) &rarr; Cumulative (CUM 1-5) &rarr; Part Tests (PART 1-3) &rarr; Full Syllabus (FST 1-6)</strong>.
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

        {/* High Density Metric Cards */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {activeBatch === '11th' ? (
            <>
              <div className="p-3 rounded-xl bg-white border border-blue-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-blue-700 tracking-wider">Phase 1: Chapter-Wise</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">12 Sunday Tests</div>
                <div className="text-[10px] text-blue-700 font-semibold mt-0.5 font-mono">20 Sep 2026 – 21 Feb 2027</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-amber-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-amber-700 tracking-wider">Phase 1: Cumulative</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">5 Sunday Tests</div>
                <div className="text-[10px] text-amber-700 font-semibold mt-0.5 font-mono">25 Oct 2026 – 14 Feb 2027</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-emerald-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">Final Phase: Full Syllabus</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">3 Sunday Tests</div>
                <div className="text-[10px] text-emerald-600 font-semibold mt-0.5 font-mono">28 Feb – 14 Mar 2027</div>
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
                <div className="text-[10px] text-blue-700 font-semibold mt-0.5 font-mono">20 Sep – 25 Oct 2026</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-emerald-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">Phase 2: Complete Syllabus</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">10 Tests (Every 4d)</div>
                <div className="text-[10px] text-emerald-600 font-semibold mt-0.5 font-mono">29 Oct – 04 Dec 2026</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-amber-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-amber-700 tracking-wider">Phase 3: NEET Mocks</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">5 Mocks (Every 2d)</div>
                <div className="text-[10px] text-amber-700 font-semibold mt-0.5 font-mono">10 Dec – 18 Dec 2026</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-purple-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-purple-700 tracking-wider">Buffer &amp; Analysis</div>
                <div className="text-xl font-bold text-purple-700 mt-0.5 font-mono">7 Repair Cycles</div>
                <div className="text-[10px] text-purple-600 font-semibold mt-0.5 font-mono">11 Dec 2026 – 03 Feb 2027</div>
              </div>
            </>
          ) : (
            <>
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Phase 1: CWT & Cumulative</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">24 Sunday Tests</div>
                <div className="text-[10px] text-blue-700 font-semibold mt-0.5 font-mono">20 Sep 2026 – 28 Feb 2027</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Phase 2: Part Tests</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">3 Sunday Tests</div>
                <div className="text-[10px] text-emerald-600 font-semibold mt-0.5 font-mono">07 Mar – 21 Mar 2027</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Phase 3: Full Syllabus</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">6 Sunday Tests</div>
                <div className="text-[10px] text-amber-600 font-semibold mt-0.5 font-mono">28 Mar – 02 May 2027</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Total Sunday Cycle</div>
                <div className="text-xl font-bold text-purple-700 mt-0.5 font-mono">33 Tests (5,940 Qs)</div>
                <div className="text-[10px] text-purple-600 font-semibold mt-0.5 font-mono">180 Mins &bull; 180 Marks CBT</div>
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
              Test reminder scheduled for Sunday at <strong>8:00 AM</strong>. Candidate alert will be sent to <strong>+91 {studentPhone}</strong>. Exam window opens at 9:00 AM.
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
            : [
                { id: 'all', label: `All (${SUNDAY_DROPPER_PLANNER_TESTS.length})` },
                { id: 'cwt', label: 'Phase 1: CWT (19)' },
                { id: 'cumulative', label: 'Phase 1: Cumulative (5)' },
                { id: 'part', label: 'Phase 2: Part-Wise (3)' },
                { id: 'full', label: 'Phase 3: Full Syllabus (6)' }
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
            Official NTA NEET Standard &bull; 720 Marks
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
                      720 Marks &bull; 180 Mins &bull; 180 Qs
                    </span>

                    {!isAdminAccessGranted && (
                      <span className="text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-lg flex items-center gap-1">
                        <Lock className="w-3 h-3" /> Awaiting Admin Approval
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

                  {/* 4-Subject Exact Syllabus Breakdown Grid (180 Marks Each) */}
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
                </div>

                {/* Clean Single Action CTA */}
                <div className="flex flex-wrap lg:flex-col items-stretch sm:items-center lg:items-end gap-2 shrink-0 self-stretch lg:self-center">
                  <button
                    onClick={() => handleLaunchDirectSundayTest(mock)}
                    className={`px-5 py-3 rounded-xl text-white text-xs font-bold shadow-md transition flex items-center justify-center space-x-2 cursor-pointer w-full sm:w-auto ${
                      isAdminAccessGranted
                        ? isLive
                          ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-blue-500/20'
                          : 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-slate-800 hover:bg-slate-900 border border-slate-700'
                    }`}
                  >
                    {isAdminAccessGranted ? (
                      <>
                        <Play className="w-4 h-4 fill-current" />
                        <span>
                          {isLive
                            ? 'Start Live Test (720M)'
                            : activeBatch === '12th'
                            ? 'Start Scheduled Test (720M)'
                            : 'Start Sunday Test (720M)'}
                        </span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 text-amber-400" />
                        <span>Request Unlock from Admin</span>
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
            <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 p-5 text-white flex items-center justify-between">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-900 uppercase font-mono">
                  Administrator Authorization Gate
                </span>
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Lock className="w-5 h-5 text-amber-300" /> Admin Portal Access Required
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
                All 33 scheduled Sunday All-India Mock Tests (180 Questions &bull; 180 Marks &bull; AIR Prediction) are strictly controlled by the <strong>Institution Admin Portal</strong>. Access will unlock automatically once the administrator grants authorization for your enrollment.
              </p>

              {/* Student Identification Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <KeyRound className="w-4 h-4 text-blue-600" /> Candidate Verification Details:
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <div>
                    <span className="text-slate-500">Student:</span> <span className="font-bold text-slate-900">{studentName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Roll No:</span> <span className="font-bold text-blue-700">{rollNumber}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Contact:</span> <span className="font-bold text-slate-800">+91 {studentPhone}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Status:</span> <span className="font-bold text-amber-700">Pending Admin Approval</span>
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
                {!accessRequestSent && (
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
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
