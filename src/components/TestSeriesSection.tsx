import { syncUnlockRequestsToCloud, fetchUnlockRequestsFromCloud } from '../services/authoritativeCloudService';
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
import { fetchSundayPaperFromCloud, fetchAllSundayPapersFromCloud } from '../utils/cloudSyncManager';
import { fetchAuthoritativePaper } from '../services/authoritativeCloudService';
import {
  SUNDAY_DROPPER_PLANNER_TESTS,
  SUNDAY_DROPPER_TRACK1_TESTS,
  SUNDAY_DROPPER_TRACK2_TESTS,
  SUNDAY_DROPPER_PC_TESTS,
  SUNDAY_11TH_PLANNER_TESTS,
  SUNDAY_11TH_TRACK1_TESTS,
  SUNDAY_11TH_TRACK2_TESTS,
  PLANNER_12TH_COMPLETE_TESTS,
  PLANNER_12TH_PC_TESTS,
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
  const [localCustomPapers, setLocalCustomPapers] = useState<Record<string, any>>(() => {
    try {
      const raw = localStorage.getItem('neet_custom_sunday_papers');
      return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
  });
  const [repeaterTrack, setRepeaterTrack] = useState<'track1' | 'track2' | 'pc'>('track1');
  const [class12Track, setClass12Track] = useState<'complete' | 'pc'>('complete');
  const [class11Track, setClass11Track] = useState<'track1' | 'track2'>('track1');
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

  useEffect(() => {
    let isMounted = true;
    const fetchCloudPapers = async () => {
      try {
        const cloudPapers = await fetchAllSundayPapersFromCloud();
        if (!isMounted || !cloudPapers || Object.keys(cloudPapers).length === 0) return;
        
        setLocalCustomPapers(prev => {
          const merged = { ...prev };
          let changed = false;
          for (const [key, paper] of Object.entries(cloudPapers)) {
            // Check if cloud paper is newer than local or if local doesn't exist
            if (!merged[key] || (paper.revision && merged[key].revision && paper.revision > merged[key].revision) || !merged[key].revision) {
              merged[key] = paper;
              merged[key.toLowerCase()] = paper;
              changed = true;
            }
          }
          if (changed) {
            try {
              localStorage.setItem('neet_custom_sunday_papers', JSON.stringify(merged));
            } catch {}
            return merged;
          }
          return prev;
        });
      } catch (err) {
        console.warn('Failed to fetch custom cloud papers:', err);
      }
    };
    
    fetchCloudPapers();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'neet_custom_sunday_papers' && e.newValue) {
        try {
          setLocalCustomPapers(JSON.parse(e.newValue));
        } catch {}
      }
    };

    const handleLocalSync = (e: any) => {
      const detail = e?.detail;
      if (detail && detail.paperCode && detail.paper) {
        setLocalCustomPapers(prev => {
          const merged = { ...prev };
          merged[detail.paperCode] = detail.paper;
          merged[detail.paperCode.toLowerCase()] = detail.paper;
          return merged;
        });
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('neet_cloud_sunday_paper_synced', handleLocalSync);

    return () => { 
      isMounted = false; 
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('neet_cloud_sunday_paper_synced', handleLocalSync);
    };
  }, []);

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

  useEffect(() => {
    const loadCloudAccess = async () => {
      const reqs = await fetchUnlockRequestsFromCloud();
      if (reqs && reqs.length > 0) {
        localStorage.setItem('neet_unlock_requests', JSON.stringify(reqs));
        setIsAdminAccessGranted(checkAdminAccess());
      }
    };
    loadCloudAccess();
    // Poll every 5 seconds for approval
    const interval = setInterval(loadCloudAccess, 5000);
    return () => clearInterval(interval);
  }, [rollNumber, studentPhone]);

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

  const active12thTests = useMemo(() => {
    if (class12Track === 'complete') return PLANNER_12TH_COMPLETE_TESTS;
    return PLANNER_12TH_PC_TESTS;
  }, [class12Track]);

  // Class 12th Batch Scheduled Tests
  const filtered12thTests = useMemo(() => {
    return active12thTests.filter(t => {
      // Phase Filter
      if (activePhaseFilter === 'part' && !t.code.startsWith('PART')) return false;
      if (activePhaseFilter === 'full' && !t.code.startsWith('FULL') && !t.code.startsWith('PC-')) return false;
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
  }, [active12thTests, activePhaseFilter, searchQuery]);

  const active11thTests = useMemo(() => {
    if (class11Track === 'track1') return SUNDAY_11TH_TRACK1_TESTS;
    return SUNDAY_11TH_TRACK2_TESTS;
  }, [class11Track]);

  // Class 11th Batch Sunday Tests
  const filtered11thTests = useMemo(() => {
    return active11thTests.filter(t => {
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
  }, [active11thTests, activePhaseFilter, searchQuery]);

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
    const paperLookupKey = plannerTest.id;
    let customPaper = await fetchAuthoritativePaper(paperLookupKey, true);
    let testQuestions: Question[] = [];
    let syllabusStr = isPCTest
      ? `Physics: ${plannerTest.physicsUnit} | Chemistry: ${plannerTest.chemistryUnit}`
      : `Physics: ${plannerTest.physicsUnit} | Chemistry: ${plannerTest.chemistryUnit} | Botany: ${plannerTest.botanyBlock} | Zoology: ${plannerTest.zoologyBlock}`;

    if (customPaper && Array.isArray(customPaper.questions) ) {
      testQuestions = customPaper.questions;
      if (customPaper.customChapters) {
        const bioPart = customPaper.customChapters.biology?.length ? ` | Biology: ${customPaper.customChapters.biology.join(', ')}` : '';
        syllabusStr = `Physics: ${(customPaper.customChapters.physics || []).join(', ')} | Chemistry: ${(customPaper.customChapters.chemistry || []).join(', ')}${bioPart}`;
      }
    } else {
      testQuestions = generateSundayTestQuestions(plannerTest, undefined, false, activeBatch);
    }

    const testItem: TestItem = {
      id: plannerTest.id,
      title: customPaper?.testTitle ? `${plannerTest.code}: ${customPaper.testTitle}` : `${plannerTest.code}: ${plannerTest.title}`,
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
      syncUnlockRequestsToCloud(list);
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

    const paperLookupKey = plannerTest.id;
    let customPaper = await fetchAuthoritativePaper(paperLookupKey, true);

    const questions = (customPaper && Array.isArray(customPaper.questions) )
      ? customPaper.questions
      : generateSundayTestQuestions(plannerTest, undefined, false, activeBatch);

    const testItem: TestItem = {
      id: plannerTest.id,
      title: customPaper?.testTitle ? `${plannerTest.code}: ${customPaper.testTitle}` : `${plannerTest.code}: ${plannerTest.title}`,
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
      {/* 3 Dedicated Batch Tabs with Dropdowns */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-sky-50/60 p-3 sm:p-3.5 rounded-2xl border border-sky-200 shadow-xs relative z-30">
          <div className="flex flex-wrap items-center gap-1.5">
            
            {/* Repeater Batch */}
            <div className="relative group">
              <button
                onClick={() => {
                  setActiveBatch('repeater');
                  setActivePhaseFilter('all');
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 cursor-pointer ${
                  activeBatch === 'repeater'
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'bg-sky-50 text-sky-800 hover:bg-sky-50 border border-sky-200'
                }`}
              >
                <Zap className={`w-4 h-4 ${activeBatch === 'repeater' ? 'text-cyan-300' : 'text-stone-400'}`} />
                <span>Repeater / Dropper Batch</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-sky-50/60/20 text-current font-mono">
                  Starts 11 Oct
                </span>
              </button>
              
              <div className="absolute left-0 top-[calc(100%-8px)] pt-2 w-72 bg-sky-50/60 border border-sky-200 shadow-xl rounded-xl p-2 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-2">
                <div className="text-[10px] font-black text-stone-400 uppercase tracking-wider px-2 py-1 mb-1">Select Track</div>
                <button onClick={() => { setActiveBatch('repeater'); setRepeaterTrack('track1'); setActivePhaseFilter('all'); }} className={`w-full text-left px-3 py-2.5 text-xs font-bold rounded-lg transition-colors ${repeaterTrack === 'track1' && activeBatch === 'repeater' ? 'bg-sky-50 text-sky-700' : 'text-sky-700 hover:bg-sky-50 hover:text-sky-600'}`}>
                  Track 1: Chapterwise, Partwise & Full (46 Tests)
                </button>
                <button onClick={() => { setActiveBatch('repeater'); setRepeaterTrack('track2'); setActivePhaseFilter('all'); }} className={`w-full text-left px-3 py-2.5 text-xs font-bold rounded-lg transition-colors ${repeaterTrack === 'track2' && activeBatch === 'repeater' ? 'bg-sky-50 text-sky-700' : 'text-sky-700 hover:bg-sky-50 hover:text-sky-600'}`}>
                  Track 2: 17-Week Fast-Track (46 Tests)
                </button>
                <button onClick={() => { setActiveBatch('repeater'); setRepeaterTrack('track3'); setActivePhaseFilter('all'); }} className={`w-full text-left px-3 py-2.5 text-xs font-bold rounded-lg transition-colors ${repeaterTrack === 'track3' && activeBatch === 'repeater' ? 'bg-sky-50 text-sky-700' : 'text-sky-700 hover:bg-sky-50 hover:text-sky-600'}`}>
                  Track 3: Physics & Chemistry Only (27 Tests)
                </button>
              </div>
            </div>

            {/* 12th Batch */}
            <div className="relative group">
              <button
                onClick={() => {
                  setActiveBatch('12th');
                  setActivePhaseFilter('all');
                  setShowRevisionBuffer(false);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 cursor-pointer ${
                  activeBatch === '12th'
                    ? 'bg-cyan-500 text-white shadow-md'
                    : 'bg-sky-50 text-sky-800 hover:bg-sky-50 border border-sky-200'
                }`}
              >
                <GraduationCap className={`w-4 h-4 ${activeBatch === '12th' ? 'text-white' : 'text-stone-400'}`} />
                <span>12th Batch</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-sky-50/60/20 text-current font-mono">
                  23 Tests
                </span>
              </button>
              
              <div className="absolute left-0 top-[calc(100%-8px)] pt-2 w-72 bg-sky-50/60 border border-sky-200 shadow-xl rounded-xl p-2 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-2">
                <div className="text-[10px] font-black text-stone-400 uppercase tracking-wider px-2 py-1 mb-1">Select Track</div>
                <button onClick={() => { setActiveBatch('12th'); setClass12Track('complete'); setActivePhaseFilter('all'); setShowRevisionBuffer(false); }} className={`w-full text-left px-3 py-2.5 text-xs font-bold rounded-lg transition-colors ${class12Track === 'complete' && activeBatch === '12th' ? 'bg-cyan-50 text-cyan-700' : 'text-sky-700 hover:bg-sky-50 hover:text-cyan-600'}`}>
                  Track 1: Complete Syllabus Master Series
                </button>
                <button onClick={() => { setActiveBatch('12th'); setClass12Track('pc'); setActivePhaseFilter('all'); setShowRevisionBuffer(false); }} className={`w-full text-left px-3 py-2.5 text-xs font-bold rounded-lg transition-colors ${class12Track === 'pc' && activeBatch === '12th' ? 'bg-cyan-50 text-cyan-700' : 'text-sky-700 hover:bg-sky-50 hover:text-cyan-600'}`}>
                  Track 2: Physics & Chemistry Series
                </button>
              </div>
            </div>

            {/* 11th Batch */}
            <div className="relative group">
              <button
                onClick={() => {
                  setActiveBatch('11th');
                  setActivePhaseFilter('all');
                  setShowRevisionBuffer(false);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 cursor-pointer ${
                  activeBatch === '11th'
                    ? 'bg-sky-500 text-white shadow-md'
                    : 'bg-sky-50 text-sky-800 hover:bg-sky-50 border border-sky-200'
                }`}
              >
                <Atom className={`w-4 h-4 ${activeBatch === '11th' ? 'text-white' : 'text-stone-400'}`} />
                <span>11th Batch</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-sky-50/60/20 text-current font-mono">
                  20 Tests
                </span>
              </button>
              
              <div className="absolute left-0 top-[calc(100%-8px)] pt-2 w-72 bg-sky-50/60 border border-sky-200 shadow-xl rounded-xl p-2 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-2">
                <div className="text-[10px] font-black text-stone-400 uppercase tracking-wider px-2 py-1 mb-1">Select Track</div>
                <button onClick={() => { setActiveBatch('11th'); setClass11Track('track1'); setActivePhaseFilter('all'); setShowRevisionBuffer(false); }} className={`w-full text-left px-3 py-2.5 text-xs font-bold rounded-lg transition-colors ${class11Track === 'track1' && activeBatch === '11th' ? 'bg-sky-50 text-sky-700' : 'text-sky-700 hover:bg-sky-50 hover:text-sky-600'}`}>
                  Track 1: Chapterwise, Partwise & Full
                </button>
                <button onClick={() => { setActiveBatch('11th'); setClass11Track('track2'); setActivePhaseFilter('all'); setShowRevisionBuffer(false); }} className={`w-full text-left px-3 py-2.5 text-xs font-bold rounded-lg transition-colors ${class11Track === 'track2' && activeBatch === '11th' ? 'bg-sky-50 text-sky-700' : 'text-sky-700 hover:bg-sky-50 hover:text-sky-600'}`}>
                  Track 2: CWT & Cumulative Master
                </button>
              </div>
            </div>
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
              className="px-3.5 py-1.5 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-cyan-900 border border-cyan-300 text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer shadow-2xs"
            >
              <Lock className="w-3.5 h-3.5 text-cyan-700" />
              <span>Awaiting Admin Portal Approval</span>
            </button>
          )}
        </div>
      </div>

      {/* Header Banner for Current Batch */}
      <div className="bg-gradient-to-br from-white via-stone-50 to-sky-50/50 border border-sky-200 rounded-2xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-200/80 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-sky-950 tracking-tight">
              {activeBatch === 'repeater'
                ? repeaterTrack === 'track1'
                  ? 'NEET 2026–27 Dropper Batch: Track 1 (20-Week Chapterwise • 46 Tests)'
                  : repeaterTrack === 'track2'
                  ? 'NEET 2026–27 Dropper Batch: Track 2 (17-Week Fast-Track • 46 Tests)'
                  : 'NEET 2026–27 Dropper Batch: Track 3 (Physics & Chemistry Series • 27 Tests)'
                : activeBatch === '12th'
                ? class12Track === 'complete'
                  ? 'Class 12th Complete Syllabus Master Test Series (Starting 11 Oct 2026)'
                  : 'Class 12th Physics & Chemistry Full-Syllabus Series (10 Mar – 30 Apr 2027)'
                : class11Track === 'track1'
                ? 'Class 11th 2026–27 Exam Planner: Track 1 (Chapterwise, Partwise & Full Syllabus • 20 Tests)'
                : 'Class 11th Foundation Sunday Test Series: Track 2 (CWT & Cumulative • 20 Tests)'}
            </h1>
            <p className="mt-1 text-xs text-sky-700 max-w-3xl leading-relaxed">
              {activeBatch === '11th' ? (
                class11Track === 'track1' ? (
                  <>
                    Starting <strong>11 October 2026</strong>: Official NEET (UG) Class 11 Exam Planner: <strong>11 Chapter-Wise Tests (CW-01 to CW-11)</strong> scheduled every 2nd Sunday through 21 Feb 2027 &rarr; <strong>6 Partwise Tests (PT-01 to PT-06)</strong> every 4 days covering complete Class 11 scope (01 Mar – 21 Mar 2027) &rarr; <strong>3 Full Syllabus Tests (FS-01 to FS-03)</strong> every 3 days through 30 March 2027. <strong>180 Questions • 180 Minutes • 720 Marks CBT</strong>.
                  </>
                ) : (
                  <>
                    Starting <strong>11 October 2026</strong>: <strong>12 Chapter-Wise Tests (CWT-01 to CWT-12)</strong> scheduled every second Sunday &rarr; <strong>5 Cumulative Checkpoints (CUM-01 to CUM-05)</strong> placed after learning blocks &rarr; <strong>3 Full Syllabus Tests (FST-01 to FST-03)</strong> through 28 March 2027. <strong>180 Questions • 180 Minutes • 720 Marks CBT</strong>.
                  </>
                )
              ) : activeBatch === '12th' ? (
                class12Track === 'complete' ? (
                  <>
                    Starting <strong>11 October 2026</strong>: 3-Phase NEET (UG) Master Planner for Class 12: <strong>Phase 1: 8 Part-Wise Tests (PART 1–8)</strong> every 5 days covering Class 11 &amp; 12 progressively; <strong>Phase 2: 10 Complete Syllabus Tests (FULL-01 to FULL-10)</strong> every 4 days focusing on baseline, error tagging, NCERT retention, reactions, and pacing; <strong>Phase 3: 5 NEET Mock Simulations (NEET MOCK-01 to 05)</strong> every 2 days with full analytics; followed by a <strong>7-Stage Revision &amp; Analysis Buffer</strong> through 17 Feb 2027. <strong>180 Questions • 180 Minutes • 720 Marks CBT</strong>.
                  </>
                ) : (
                  <>
                    Dedicated Full-Syllabus Physics &amp; Chemistry Series from <strong>10 March to 30 April 2027</strong> (post-Board Examinations): <strong>18 Tests (PC-01 to PC-18)</strong> scheduled every 3 days covering 100% of Physics and Chemistry syllabus. <strong>100 Questions (50 Physics + 50 Chemistry) • 120 Minutes • 400 Marks</strong>.
                  </>
                )
              ) : repeaterTrack === 'track1' ? (
                <>
                  Starting <strong>11 October 2026</strong>: <strong>20 Chapter-Wise Tests (CW-01 to CW-20)</strong> every Sunday with zero chapter repeats &rarr; <strong>8 Part-Wise Cumulative Tests (PT-01 to PT-08)</strong> every 4 days &rarr; <strong>18 Full Syllabus Tests (FS-01 to FS-18)</strong> every 3 and 2 days through 30 April 2027. <strong>180 Questions • 180 Minutes • 720 Marks CBT</strong>.
                </>
              ) : repeaterTrack === 'track2' ? (
                <>
                  Starting <strong>11 October 2026</strong>: <strong>17 Chapter-Wise Tests (T01 to T17)</strong> every Sunday with standalone high-yield focus &rarr; <strong>8 Part-Wise Tests (P01 to P08)</strong> every 4 days &rarr; <strong>21 Full Syllabus Tests (F01 to F21)</strong> every 3 days through 29 April 2027. <strong>180 Questions • 180 Minutes • 720 Marks CBT</strong>.
                </>
              ) : (
                <>
                  Dedicated Full-Syllabus Physics &amp; Chemistry Series from <strong>10 February to 29 April 2027</strong>: <strong>27 Tests (PC-01 to PC-27)</strong> scheduled every 3 days covering 100% of Physics and Chemistry syllabus. <strong>100 Questions (50 Physics + 50 Chemistry) • 120 Minutes • 400 Marks</strong>.
                </>
              )}
            </p>
          </div>

          <div className="flex items-center gap-4 self-start md:self-auto shrink-0">
            <span className="px-3.5 py-2 rounded-xl bg-sky-50 border border-sky-200 text-sky-800 text-xs font-mono font-bold flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>{isAdminAccessGranted ? '✓ Authorized by Admin' : '🔒 Admin Managed'}</span>
            </span>
          </div>
        </div>

        {/* 12th BATCH REVISION & ANALYSIS BUFFER PANEL */}
      {activeBatch === '12th' && showRevisionBuffer && (
        <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-50/80 via-white to-sky-50/50 border border-cyan-200 shadow-xs space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-cyan-100 pb-3">
            <div className="flex items-center gap-4.5">
              <span className="p-3 rounded-xl bg-cyan-500 text-white shadow-2xs">
                <Sparkles className="w-4 h-4 text-cyan-300" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-sky-950">
                  Revision &amp; Analysis Buffer (11 December 2026 – 03 February 2027)
                </h3>
                <p className="text-xs text-sky-700">
                  Structured 7-cycle post-mock remediation program to eliminate errors and cement 720-mark mastery.
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowRevisionBuffer(false)}
              className="px-3 py-1 text-xs font-semibold rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-800 self-start sm:self-auto cursor-pointer"
            >
              Hide Buffer
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {REVISION_ANALYSIS_BUFFER_12TH.map((stage, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-sky-50/60 border border-cyan-100 shadow-2xs hover:border-sky-300 transition space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-md font-mono">
                    Stage {idx + 1}
                  </span>
                  <span className="text-[11px] font-semibold text-sky-600 font-mono">
                    {stage.period}
                  </span>
                </div>
                <div className="text-xs font-bold text-sky-950">
                  {stage.action}
                </div>
                <div className="text-[11px] text-sky-700 leading-relaxed bg-sky-50/40 p-3 rounded-lg border border-cyan-100/60">
                  <span className="font-bold text-sky-900">Output:</span> {stage.output}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SCHEDULED SUNDAYS CALENDAR LIST */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-sm font-bold text-sky-900 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-sky-600" />
            <span>Showing {currentDisplayTests.length} {activeBatch === '12th' ? 'Scheduled Tests' : 'Scheduled Sunday Tests'}</span>
          </h2>
          <span className="text-xs font-mono font-semibold text-sky-600">
            {activeBatch === 'repeater' && repeaterTrack === 'pc' ? 'Physics & Chemistry Full Syllabus • 400 Marks' : 'Official NTA NEET Standard • 720 Marks'}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3.5">
          {currentDisplayTests.map((mock: SundayPlannerTest) => {
              const isLive = isSundayToday;
              const paperLookupKey = mock.id;
            const customPaper = localCustomPapers[paperLookupKey] || localCustomPapers[paperLookupKey.toLowerCase()];
            
            const displayTitle = customPaper?.testTitle ? `${mock.code}: ${customPaper.testTitle}` : mock.title;
            const displayDesc = customPaper?.description || mock.objective || mock.description;
            
            const displayPhysics = customPaper?.customChapters?.physics?.length ? customPaper.customChapters.physics.join(', ') : mock.physicsUnit;
            const displayChemistry = customPaper?.customChapters?.chemistry?.length ? customPaper.customChapters.chemistry.join(', ') : mock.chemistryUnit;
            const displayBotany = customPaper?.customChapters?.biology?.length ? customPaper.customChapters.biology.join(', ') : mock.botanyBlock;
            const displayZoology = customPaper?.customChapters?.biology?.length ? "Combined with Botany above" : mock.zoologyBlock;

            // Compute dynamic questions if custom paper is loaded
            let phyCount = 0, chemCount = 0, botCount = 0, zooCount = 0;
            const isPCTest = mock.code.startsWith('PC-');
            if (customPaper && Array.isArray(customPaper.questions)) {
              customPaper.questions.forEach(q => {
                if (q.subject === 'Physics') phyCount++;
                if (q.subject === 'Chemistry') chemCount++;
                if (q.subject === 'Botany') botCount++;
                if (q.subject === 'Zoology') zooCount++;
                if (q.subject === 'Biology') {
                  if (q.chapter && q.chapter.toLowerCase().includes('zoology')) zooCount++;
                  else botCount++;
                }
              });
            } else {
              phyCount = isPCTest ? 50 : 45;
              chemCount = isPCTest ? 50 : 45;
              botCount = isPCTest ? 0 : 45;
              zooCount = isPCTest ? 0 : 45;
            }
            
            const totalDynamicQs = phyCount + chemCount + botCount + zooCount;
            const totalDynamicMarks = totalDynamicQs * 4;
            const dynamicDuration = mock.durationMinutes || (isPCTest ? 120 : 180);

            const hasEdits = !!customPaper;

            return (
              <div
                key={mock.id}
                className={`p-5 rounded-2xl border transition hover:shadow-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 ${
                  isLive && isAdminAccessGranted
                    ? 'bg-gradient-to-br from-sky-50/70 via-white to-sky-50/40 border-sky-400 shadow-sm'
                    : 'bg-sky-50/60 border-sky-200'
                }`}
              >
                <div className="space-y-2 flex-1 w-full">
                  {/* Test Badges Row */}
                  <div className="flex flex-wrap items-center gap-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase font-mono tracking-wider flex items-center gap-1 ${
                        isLive && isAdminAccessGranted
                          ? 'bg-sky-600 text-white animate-pulse'
                          : 'bg-sky-50 text-sky-800'
                      }`}
                    >
                      {isLive && isAdminAccessGranted ? '🔴 LIVE TODAY (SUNDAY)' : `📅 ${mock.dateStr}`}
                    </span>

                    {(() => {
                      const isMock = mock.code.startsWith('NEET MOCK');
                      const isFull = mock.code.startsWith('FULL-') || mock.code.startsWith('FST-') || mock.code.startsWith('FS-') || mock.phaseGroup === 'full';
                      const isCum = mock.phaseGroup === 'cumulative' || mock.code.startsWith('CUM-');
                      const isPart = mock.code.startsWith('PART') || mock.code.startsWith('PT-') || mock.phaseGroup === 'part';
                      
                      let badgeColorClass = 'text-sky-700 bg-sky-50 border-sky-200';
                      if (isMock) {
                        badgeColorClass = 'text-cyan-800 bg-cyan-50 border-cyan-300';
                      } else if (isFull && !isMock) {
                        badgeColorClass = 'text-emerald-800 bg-emerald-50 border-emerald-300';
                      } else if (isCum) {
                        badgeColorClass = 'text-cyan-800 bg-cyan-50 border-cyan-300';
                      } else if (isPart) {
                        badgeColorClass = 'text-sky-800 bg-sky-50 border-sky-200';
                      }

                      return (
                        <span className={`text-xs font-bold font-mono px-2.5 py-0.5 rounded-lg border ${badgeColorClass}`}>
                          {mock.code} &bull; {mock.phase}
                        </span>
                      );
                    })()}

                    <span className="text-xs font-mono text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-lg">
                      {totalDynamicMarks} Marks &bull; {dynamicDuration} Mins &bull; {totalDynamicQs} Qs
                      {hasEdits && <span className="ml-1.5 text-sky-600 font-bold">(Edited by Admin)</span>}
                    </span>

                    {isSundayTestUnlocked ? (
                      <span className="text-[10px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 px-2 py-0.5 rounded-lg flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> ✓ Sunday Test Active
                      </span>
                    ) : isAdminAccessGranted && !isSundayToday ? (
                      <span className="text-[10px] font-bold bg-sky-100 text-sky-900 border border-sky-300 px-2 py-0.5 rounded-lg flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-sky-700" /> Authorized • Unlocks on Sunday
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold bg-cyan-100 text-cyan-900 border border-cyan-300 px-2 py-0.5 rounded-lg flex items-center gap-1">
                        <Lock className="w-3 h-3" /> Admin Approval Required
                      </span>
                    )}
                  </div>

                  {/* Title & Objective */}
                  <div>
                    <h3 className="text-base font-bold text-sky-950 leading-snug">
                      {displayTitle}
                    </h3>
                    <p className="text-xs text-sky-700 mt-0.5 leading-relaxed">
                      {displayDesc}
                    </p>
                  </div>

                  {/* Exact Syllabus Breakdown Grid (2 Cols for PC, 4 Cols for 4 Subjects) */}
                  {mock.code.startsWith('PC-') ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1.5">
                      <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-200 text-xs">
                        <div className="text-[10px] font-bold text-sky-800 uppercase flex items-center justify-between">
                          <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-sky-600" /> Physics</span>
                          <span className="font-mono text-sky-600">{phyCount} Qs &bull; {phyCount * 4}M</span>
                        </div>
                        <div className="text-[11px] font-semibold text-sky-950 mt-1 leading-snug">
                          {displayPhysics}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs">
                        <div className="text-[10px] font-bold text-emerald-800 uppercase flex items-center justify-between">
                          <span className="flex items-center gap-1"><Atom className="w-3 h-3 text-emerald-600" /> Chemistry</span>
                          <span className="font-mono text-emerald-600">{chemCount} Qs &bull; {chemCount * 4}M</span>
                        </div>
                        <div className="text-[11px] font-semibold text-emerald-950 mt-1 leading-snug">
                          {displayChemistry}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1.5">
                      <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-200 text-xs">
                        <div className="text-[10px] font-bold text-sky-800 uppercase flex items-center justify-between">
                          <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-sky-600" /> Physics</span>
                          <span className="font-mono text-sky-600">{phyCount} Qs &bull; {phyCount * 4}M</span>
                        </div>
                        <div className="text-[11px] font-semibold text-sky-950 mt-1 leading-snug">
                          {displayPhysics}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs">
                        <div className="text-[10px] font-bold text-emerald-800 uppercase flex items-center justify-between">
                          <span className="flex items-center gap-1"><Atom className="w-3 h-3 text-emerald-600" /> Chemistry</span>
                          <span className="font-mono text-emerald-600">{chemCount} Qs &bull; {chemCount * 4}M</span>
                        </div>
                        <div className="text-[11px] font-semibold text-emerald-950 mt-1 leading-snug">
                          {displayChemistry}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-200 text-xs">
                        <div className="text-[10px] font-bold text-sky-800 uppercase flex items-center justify-between">
                          <span className="flex items-center gap-1"><BookOpen className="w-3 h-3 text-sky-600" /> Botany</span>
                          <span className="font-mono text-sky-600">{botCount} Qs &bull; {botCount * 4}M</span>
                        </div>
                        <div className="text-[11px] font-semibold text-sky-950 mt-1 leading-snug">
                          {displayBotany}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-200 text-xs">
                        <div className="text-[10px] font-bold text-sky-800 uppercase flex items-center justify-between">
                          <span className="flex items-center gap-1"><Dna className="w-3 h-3 text-sky-600" /> Zoology</span>
                          <span className="font-mono text-sky-600">{zooCount} Qs &bull; {zooCount * 4}M</span>
                        </div>
                        <div className="text-[11px] font-semibold text-sky-950 mt-1 leading-snug">
                          {displayZoology}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action CTAs */}
                <div className="flex flex-wrap lg:flex-col items-stretch sm:items-center lg:items-end gap-4 shrink-0 self-stretch lg:self-center">
                  <button
                    onClick={() => handleLaunchDirectSundayTest(mock)}
                    className={`px-5 py-3 rounded-xl text-white text-xs font-bold shadow-md transition flex items-center justify-center space-x-2 cursor-pointer w-full sm:w-auto ${
                      isSundayTestUnlocked
                        ? isLive
                          ? 'bg-gradient-to-r from-sky-600 via-sky-600 to-sky-600 hover:from-sky-700 hover:to-sky-700 shadow-cyan-500/20'
                          : 'bg-sky-600 hover:bg-sky-700'
                        : isAdminAccessGranted && !isSundayToday
                        ? 'bg-sky-700 hover:bg-sky-800 border border-stone-600'
                        : 'bg-sky-800 hover:bg-sky-900 border border-stone-700'
                    }`}
                  >
                    {isSundayTestUnlocked ? (
                      <>
                        <Play className="w-4 h-4" />
                        <span>Test in CBT</span>
                      </>
                    ) : isAdminAccessGranted && !isSundayToday ? (
                      <>
                        <Calendar className="w-4 h-4 text-sky-400" />
                        <span>Authorized &bull; Unlocks on Sunday</span>
                      </>
                    ) : isSundayToday && !isAdminAccessGranted ? (
                      <>
                        <Lock className="w-4 h-4 text-cyan-400" />
                        <span>Sunday Live &bull; Request Admin Approval</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 text-cyan-400" />
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
        <div className="fixed inset-0 z-50 bg-sky-900/80 backdrop-blur-sm flex items-center justify-center p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-sky-50/60 border border-sky-200 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-200 text-sky-950">
            {/* Header */}
            <div className={`p-5 text-white flex items-center justify-between ${
              isAdminAccessGranted && !isSundayToday
                ? 'bg-gradient-to-r from-sky-700 via-sky-800 to-stone-900'
                : 'bg-gradient-to-r from-sky-700 via-sky-700 to-stone-900'
            }`}>
              <div className="space-y-1">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase font-mono ${
                  isAdminAccessGranted && !isSundayToday
                    ? 'bg-emerald-400 text-sky-950'
                    : 'bg-cyan-400 text-sky-950'
                }`}>
                  {isAdminAccessGranted && !isSundayToday ? '✓ Candidate Authorized' : 'Administrator Authorization Required'}
                </span>
                <h3 className="text-lg font-bold flex items-center gap-4">
                  {isAdminAccessGranted && !isSundayToday ? (
                    <>
                      <Calendar className="w-5 h-5 text-sky-300" />
                      <span>Scheduled for Sunday (720M CBT)</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5 text-cyan-300" />
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
                className="p-1.5 rounded-xl hover:bg-sky-50/60/10 text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <p className="text-xs text-sky-700 leading-relaxed">
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
              <div className="p-6 rounded-2xl bg-sky-50 border border-sky-200 space-y-2 text-xs">
                <div className="font-bold text-sky-900 flex items-center gap-1.5">
                  <KeyRound className="w-4 h-4 text-sky-600" /> Candidate Verification Details:
                </div>
                <div className="grid grid-cols-2 gap-4 text-[11px] font-mono">
                  <div>
                    <span className="text-sky-600">Student:</span> <span className="font-bold text-sky-950">{studentName || 'Registered Student'}</span>
                  </div>
                  <div>
                    <span className="text-sky-600">Roll No:</span> <span className="font-bold text-sky-700">{rollNumber || 'Enrolled'}</span>
                  </div>
                  <div>
                    <span className="text-sky-600">Contact:</span> <span className="font-bold text-sky-900">{studentPhone ? `+91 ${studentPhone}` : 'Enrolled Profile'}</span>
                  </div>
                  <div>
                    <span className="text-sky-600">Status:</span>{' '}
                    {isAdminAccessGranted ? (
                      <span className="font-bold text-emerald-700">✓ Approved by Admin</span>
                    ) : (
                      <span className="font-bold text-cyan-700">Pending Admin Approval</span>
                    )}
                  </div>
                </div>
              </div>

              {accessRequestSent ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-start space-x-3 animate-in fade-in">
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
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-sky-600 to-sky-600 hover:from-sky-700 hover:to-sky-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center space-x-2 cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/20 active:scale-95 "
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
                  className="w-full py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 font-semibold text-xs transition cursor-pointer"
                >
                  {isAdminAccessGranted && !isSundayToday ? 'OK, Got It' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};



