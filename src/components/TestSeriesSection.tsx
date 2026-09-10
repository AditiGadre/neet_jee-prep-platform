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
  SundayPlannerTest,
  generateSundayTestQuestions
} from '../data/sundayPlannerTests';

interface TestSeriesSectionProps {
  testItems: TestItem[];
  targetYear?: '2026' | '2027' | '2028';
  onStartTest: (test: TestItem) => void;
  onOpenAdmin?: () => void;
}

export const TestSeriesSection: React.FC<TestSeriesSectionProps> = ({
  testItems,
  targetYear = '2026',
  onStartTest,
  onOpenAdmin
}) => {
  const [activeBatch, setActiveBatch] = useState<'repeater' | '12th' | '11th'>('repeater');
  const [activePhaseFilter, setActivePhaseFilter] = useState<'all' | 'cwt' | 'cumulative' | 'part' | 'full'>('all');
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

  // Class 12th Batch Sunday Tests
  const batch12thSundays = useMemo(() => {
    return SUNDAY_DROPPER_PLANNER_TESTS.filter(t => 
      t.phaseGroup === 'full' || 
      t.phaseGroup === 'part' || 
      ['CWT-05', 'CWT-07', 'CWT-08', 'CWT-11', 'CWT-12', 'CWT-13', 'CWT-14', 'CWT-15', 'CWT-16', 'CWT-17', 'CWT-18', 'CWT-19', 'CUM-03', 'CUM-04', 'CUM-05'].includes(t.code)
    );
  }, []);

  // Class 11th Batch Sunday Tests
  const batch11thSundays = useMemo(() => {
    return SUNDAY_DROPPER_PLANNER_TESTS.filter(t => 
      ['CWT-01', 'CWT-02', 'CWT-03', 'CWT-04', 'CUM-01', 'CWT-05', 'CWT-06', 'CWT-07', 'CWT-08', 'CUM-02', 'CWT-09', 'CWT-10', 'PART-01'].includes(t.code)
    );
  }, []);

  const currentDisplayTests = activeBatch === 'repeater'
    ? filteredDropperTests
    : activeBatch === '12th'
    ? batch12thSundays
    : batch11thSundays;

  const handleLaunchDirectSundayTest = (plannerTest: SundayPlannerTest) => {
    if (!isAdminAccessGranted) {
      setPendingTestToStart(plannerTest);
      setShowAdminApprovalModal(true);
      return;
    }

    let testQuestions: Question[] = [];
    try {
      const publishedRaw = localStorage.getItem('neet_published_sunday_test');
      if (publishedRaw) {
        const parsed = JSON.parse(publishedRaw);
        if (parsed && Array.isArray(parsed.questions) && parsed.questions.length === 180) {
          testQuestions = parsed.questions;
        }
      }
    } catch {}
    if (testQuestions.length === 0) {
      testQuestions = generateSundayTestQuestions(plannerTest);
    }
    const testItem: TestItem = {
      id: plannerTest.id,
      title: `${plannerTest.code}: ${plannerTest.title}`,
      category: 'neet_mock',
      exam: 'NEET',
      syllabus: `Physics: ${plannerTest.physicsUnit} | Chemistry: ${plannerTest.chemistryUnit} | Botany: ${plannerTest.botanyBlock} | Zoology: ${plannerTest.zoologyBlock}`,
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
    const questions = generateSundayTestQuestions(plannerTest);
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
    downloadTestPaperPDF(testItem, questions);
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
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 cursor-pointer ${
              activeBatch === '12th'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>12th Batch</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-current">Board + NEET</span>
          </button>

          <button
            onClick={() => {
              setActiveBatch('11th');
              setActivePhaseFilter('all');
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 cursor-pointer ${
              activeBatch === '11th'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Atom className="w-4 h-4" />
            <span>11th Batch</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-current">Foundation</span>
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
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider mb-2 shadow-xs">
              <Calendar className="w-3.5 h-3.5 text-cyan-300" />
              <span>NEET 2027 Dropper Test Planner &bull; 15 Sep 2026 – 2 May 2027 &bull; Every Sunday</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {activeBatch === 'repeater'
                ? 'NEET 2027 Dropper Sunday Test Series (Official 33-Sunday Cycle)'
                : activeBatch === '12th'
                ? 'Class 12th Sunday All-India Test Series (Target 2026/2027)'
                : 'Class 11th Foundation Sunday All-India Test Series (Target 2027/2028)'}
            </h1>
            <p className="mt-1 text-xs text-slate-600 max-w-3xl leading-relaxed">
              Strictly aligned to official NMC/NTA NEET syllabus: <strong>180 Questions &bull; 180 Minutes (3.0 Hours) &bull; 180 Marks (Physics 45, Chemistry 45, Biology 90)</strong>. Every Sunday test follows the prescribed chapter progression: <strong>CWT (Chapter-Wise 1-19) &rarr; Cumulative (CUM 1-5) &rarr; Part Tests (PART 1-3) &rarr; Full Syllabus (FST 1-6)</strong>.
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
          {[
            { id: 'all', label: `All (${activeBatch === 'repeater' ? SUNDAY_DROPPER_PLANNER_TESTS.length : currentDisplayTests.length})` },
            { id: 'cwt', label: 'Phase 1: CWT (19)' },
            { id: 'cumulative', label: 'Phase 1: Cumulative (5)' },
            { id: 'part', label: 'Phase 2: Part-Wise (3)' },
            { id: 'full', label: 'Phase 3: Full Syllabus (6)' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setActivePhaseFilter(f.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                activePhaseFilter === f.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
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

      {/* SCHEDULED SUNDAYS CALENDAR LIST */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-blue-600" /> Showing {currentDisplayTests.length} Scheduled Sunday Tests
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

                    <span className="text-xs font-bold font-mono text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-lg">
                      {mock.code} &bull; {mock.phase}
                    </span>

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
                        <span>{isLive ? 'Start Live Sunday Test (720M)' : 'Start Sunday Test (720M)'}</span>
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
