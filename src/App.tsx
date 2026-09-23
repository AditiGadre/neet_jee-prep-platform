import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Sidebar, TabType } from './components/Sidebar';
import { TestSeriesSection } from './components/TestSeriesSection';
import { supabase } from './supabaseClient';
import { EnrollmentGate, EnrolledStudent } from './components/EnrollmentGate';
import { SundayChapterSelection } from './components/SundayTestChapterModal';
import { ErrorBoundary } from './components/ErrorBoundary';

// Lazy-load secondary tabs & heavy interactive modals for sub-second initial load
const WhatExtraSection = lazy(() => import('./components/WhatExtraSection').then(m => ({ default: m.WhatExtraSection })));
const AboutExamSection = lazy(() => import('./components/AboutExamSection').then(m => ({ default: m.AboutExamSection })));
const AboutPlatformSection = lazy(() => import('./components/AboutPlatformSection').then(m => ({ default: m.AboutPlatformSection })));
const SupportSection = lazy(() => import('./components/SupportSection').then(m => ({ default: m.SupportSection })));
const CBTTestModal = lazy(() => import('./components/CBTTestModal').then(m => ({ default: m.CBTTestModal })));
const LiveDoubtModal = lazy(() => import('./components/LiveDoubtModal').then(m => ({ default: m.LiveDoubtModal })));
const BookReaderModal = lazy(() => import('./components/BookReaderModal').then(m => ({ default: m.BookReaderModal })));
const AuthModal = lazy(() => import('./components/AuthModal').then(m => ({ default: m.AuthModal })));
const DownloadsModal = lazy(() => import('./components/DownloadsModal').then(m => ({ default: m.DownloadsModal })));
import { AdminSection } from './components/AdminSection';
import { AdminLoginModal } from './components/AdminLoginModal';
import { DobVerificationModal } from './components/DobVerificationModal';
const UploadContentModal = lazy(() => import('./components/UploadContentModal').then(m => ({ default: m.UploadContentModal })));
import { initCloudSync, fetchStudentByPhoneFromCloud, cleanPhoneNumber } from './utils/cloudSyncManager';
import { assertNoDuplicateQuestions } from './data/sundayPlannerTests';

const SectionLoadingFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-[350px] w-full p-8 text-center animate-in fade-in duration-200">
    <div className="relative w-12 h-12 mb-4">
      <div className="absolute inset-0 rounded-full border-4 border-blue-200 animate-ping opacity-75"></div>
      <div className="w-12 h-12 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
    </div>
    <p className="text-sm font-semibold text-slate-700">Loading module...</p>
    <p className="text-xs text-slate-400 mt-1">Preparing high-speed NCERT resources</p>
  </div>
);

import {
  TEST_SERIES_DATA,
  FLASHCARDS_DATA,
  MIND_MAPS_DATA,
  BOOKS_DATA,
  PYQS_DATA
} from './data/mockData';
import {
  SUNDAY_DROPPER_PLANNER_TESTS,
  generateSundayTestQuestions,
  getSavedCustomSundayPaper
} from './data/sundayPlannerTests';
import { fetchAuthoritativePaper } from './services/authoritativeCloudService';
import { ExamType, TestItem, BookItem, UserTestResult } from './types';

export default function App() {
  const [activeExam, setActiveExam] = useState<ExamType>('NEET');
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname.toLowerCase();
      return p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p;
    }
    return '/';
  });

  const navigateTo = (path: string) => {
    if (typeof window !== 'undefined') {
      const target = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
      if (window.location.pathname.toLowerCase() !== target.toLowerCase()) {
        window.history.pushState(null, '', target);
      }
      setCurrentPath(target.toLowerCase());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      if (typeof window !== 'undefined') {
        const p = window.location.pathname.toLowerCase();
        setCurrentPath(p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Initialize Global Cloud Sync (Sunday Papers, Admin State, Student Profile Registry)
  useEffect(() => {
    initCloudSync().catch(err => {
      console.warn('App cloud sync initialization notice:', err);
    });
  }, []);

  useEffect(() => {
    if (currentPath === '/about') {
      document.title = 'About NeetCbt | Exclusively for NEET-UG Exam Aspirants';
    } else {
      document.title = 'Neetcbt for neet aspirants | All-India CBT Test Series & Exam Simulator';
    }
  }, [currentPath]);

  const [activeTab, setActiveTab] = useState<TabType>(() => {
    try {
      const saved = localStorage.getItem('neet_active_tab');
      if (saved === 'test-series' || saved === 'what-extra' || saved === 'about-exam') {
        return saved;
      }
    } catch {}
    return 'test-series';
  });
  const [extraSubTab, setExtraSubTab] = useState<string>('books');
  const [enrollmentPackageId, setEnrollmentPackageId] = useState<string | undefined>(undefined);

  // Master Admin Session State across all systems
  const [isAdminSession, setIsAdminSession] = useState<boolean>(() => {
    try {
      return (
        sessionStorage.getItem('neet_admin_authenticated') === 'true' ||
        localStorage.getItem('neet_admin_authenticated') === 'true'
      );
    } catch {
      return false;
    }
  });

  // Mandatory Enrollment Gate State - Persistent check for existing enrolled users & saved logins
  const [enrolledStudent, setEnrolledStudent] = useState<EnrolledStudent | null>(() => {
    try {
      const saved = localStorage.getItem('neet_enrolled_student');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed && parsed.studentName && parsed.studentPhone && !parsed.studentPhone.includes('9876543210')) {
            return parsed;
          }
        } catch {}
      }
      const local = localStorage.getItem('neet_local_user');
      if (local) {
        try {
          const u = JSON.parse(local);
          const rawPhone = u.studentPhone || u.phone || u.parentPhone;
          const clean = cleanPhoneNumber(String(rawPhone || ''));
          if (clean && clean.length === 10 && !clean.includes('9876543210')) {
            const reconstructed: EnrolledStudent = {
              studentName: u.studentName || u.name || `Candidate ${clean.slice(-4)}`,
              parentName: u.parentName || 'Parent / Guardian',
              parentPhone: u.parentPhone ? cleanPhoneNumber(String(u.parentPhone)) : clean,
              studentPhone: clean,
              domicileState: u.domicileState || 'Maharashtra',
              caste: u.caste || 'General / Open',
              email: u.email || `student.${clean}@neetcbt.in`,
              dob: u.dob || '2006-08-15',
              dobPin: u.dobPin || '15082006',
              targetYear: u.targetYear || '2027',
              enrolledAt: u.enrolledAt || new Date().toISOString(),
              rollNumber: u.rollNumber || `NCBT-2027-${clean.slice(-6)}`,
              devices: u.devices || ['dev-1'],
              studentPhoto: u.studentPhoto || '',
              gender: u.gender || 'Female',
              disabilityStatus: u.disabilityStatus || 'No Disability',
              specialReservation: u.specialReservation || 'None'
            };
            localStorage.setItem('neet_enrolled_student', JSON.stringify(reconstructed));
            localStorage.setItem('neet_user_enrolled', 'true');
            return reconstructed;
          }
        } catch {}
      }
      return null;
    } catch {
      return null;
    }
  });

  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);

  // Modal States
  const [activeTestForCBT, setActiveTestForCBT] = useState<TestItem | null>(null);
  const [selectedSundayChapters, setSelectedSundayChapters] = useState<SundayChapterSelection | undefined>(undefined);
  const [isDoubtModalOpen, setIsDoubtModalOpen] = useState(false);
  const [activeBookForReading, setActiveBookForReading] = useState<BookItem | null>(null);
  const [isDownloadsModalOpen, setIsDownloadsModalOpen] = useState(false);
  const [isSuperUserModalOpen, setIsSuperUserModalOpen] = useState(false);
  const [isAdminLoginModalOpen, setIsAdminLoginModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadSubject, setUploadSubject] = useState<'Physics' | 'Chemistry' | 'Biology'>('Biology');
  const [uploadChapter, setUploadChapter] = useState<string>('Molecular Basis of Inheritance');
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  // User History & Stats - Load from localStorage if available
  const [completedTests, setCompletedTests] = useState<UserTestResult[]>(() => {
    try {
      const saved = localStorage.getItem('neet_completed_tests');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Auth State (Supabase + Local fallback)
  const [user, setUser] = useState<any>(() => {
    try {
      const local = localStorage.getItem('neet_local_user');
      return local ? JSON.parse(local) : null;
    } catch {
      return null;
    }
  });
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [dobModalState, setDobModalState] = useState<{
    isOpen: boolean;
    documentTitle: string;
    category: string;
    onVerified: () => void;
  }>({
    isOpen: false,
    documentTitle: '',
    category: '',
    onVerified: () => {}
  });

  useEffect(() => {
    const syncAuth = () => {
      try {
        const local = localStorage.getItem('neet_local_user');
        if (local) {
          setUser(JSON.parse(local));
        } else {
          setUser(null);
        }
        const student = localStorage.getItem('neet_enrolled_student');
        if (student) {
          const parsed = JSON.parse(student);
          if (parsed && parsed.studentPhone && !parsed.studentPhone.includes('9876543210')) {
            setEnrolledStudent(parsed);
          }
        } else {
          setEnrolledStudent(null);
        }
      } catch (err) {
        console.error('Error syncing local auth:', err);
      }
    };

    const syncAdmin = () => {
      try {
        const authed =
          sessionStorage.getItem('neet_admin_authenticated') === 'true' ||
          localStorage.getItem('neet_admin_authenticated') === 'true';
        setIsAdminSession(authed);
      } catch {}
    };

    const handleAuthRequired = () => {
      setIsAuthModalOpen(true);
    };

    const handleDobRequired = (e: any) => {
      const detail = e.detail || {};
      setDobModalState({
        isOpen: true,
        documentTitle: detail.documentTitle || 'Examination Document',
        category: detail.category || 'Test Paper',
        onVerified: detail.onVerified || (() => {})
      });
    };

    window.addEventListener('neet_auth_change', syncAuth);
    window.addEventListener('neet_auth_required_for_download', handleAuthRequired);
    window.addEventListener('neet_request_dob_verification', handleDobRequired);
    window.addEventListener('storage', syncAdmin);
    window.addEventListener('neet_admin_login_change', syncAdmin);

    // Initial student verification against cloud registry
    const rawSaved = localStorage.getItem('neet_enrolled_student');
    if (rawSaved) {
      try {
        const parsed = JSON.parse(rawSaved);
        const clean = cleanPhoneNumber(parsed.studentPhone || parsed.phone || '');
        if (clean && clean.length === 10 && !clean.includes('9876543210')) {
          fetchStudentByPhoneFromCloud(clean).then(cloudStudent => {
            if (cloudStudent && cloudStudent.studentName) {
              setEnrolledStudent(cloudStudent as any);
              localStorage.setItem('neet_enrolled_student', JSON.stringify(cloudStudent));
            }
          }).catch(() => {});
        }
      } catch {}
    }

    if (supabase) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          setUser(session.user);
          const rawPhone = session.user.user_metadata?.phone || session.user.phone || '';
          const clean = cleanPhoneNumber(rawPhone);
          if (clean && clean.length === 10 && !clean.includes('9876543210')) {
            fetchStudentByPhoneFromCloud(clean).then(cloudStudent => {
              if (cloudStudent) {
                setEnrolledStudent(cloudStudent as any);
                localStorage.setItem('neet_enrolled_student', JSON.stringify(cloudStudent));
                localStorage.setItem('neet_user_enrolled', 'true');
              }
            }).catch(() => {});
          }
        }
      }).catch(err => {
        console.warn('Supabase getSession notice:', err);
      });

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session?.user) {
          setUser(session.user);
          const rawPhone = session.user.user_metadata?.phone || session.user.phone || '';
          const clean = cleanPhoneNumber(rawPhone);
          if (clean && clean.length === 10 && !clean.includes('9876543210')) {
            fetchStudentByPhoneFromCloud(clean).then(cloudStudent => {
              if (cloudStudent) {
                setEnrolledStudent(cloudStudent as any);
                localStorage.setItem('neet_enrolled_student', JSON.stringify(cloudStudent));
                localStorage.setItem('neet_user_enrolled', 'true');
              }
            }).catch(() => {});
          }
        } else if (_event === 'SIGNED_OUT' || !session) {
          setUser(null);
          if (!localStorage.getItem('neet_enrolled_student')) {
            setEnrolledStudent(null);
          }
        }
      });

      return () => {
        subscription.unsubscribe();
        window.removeEventListener('neet_auth_change', syncAuth);
        window.removeEventListener('neet_auth_required_for_download', handleAuthRequired);
        window.removeEventListener('neet_request_dob_verification', handleDobRequired);
        window.removeEventListener('storage', syncAdmin);
        window.removeEventListener('neet_admin_login_change', syncAdmin);
      };
    }

    return () => {
      window.removeEventListener('neet_auth_change', syncAuth);
      window.removeEventListener('neet_auth_required_for_download', handleAuthRequired);
      window.removeEventListener('neet_request_dob_verification', handleDobRequired);
      window.removeEventListener('storage', syncAdmin);
      window.removeEventListener('neet_admin_login_change', syncAdmin);
    };
  }, []);

  useEffect(() => {
    if (!supabase || !user) return;

    const fetchTestResults = async () => {
      try {
        const { data, error } = await supabase
          .from('test_results')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data && data.length > 0) {
          const formatted = data.map((d: any) => ({
            testId: d.test_id,
            testTitle: d.test_title,
            score: d.score,
            totalMarks: d.total_marks,
            correctAnswers: d.correct_answers,
            wrongAnswers: d.wrong_answers,
            unattempted: d.unattempted,
            timeSpentSeconds: d.time_spent_seconds,
            accuracyPercentage: d.accuracy_percentage,
            predictedAIR: d.predicted_air,
            nationalPercentile: d.national_percentile,
            subjectBreakdown: d.subject_breakdown,
            weakChapters: d.weak_chapters,
            strongChapters: d.strong_chapters,
            revisionSuggestions: d.revision_suggestions,
            answers: d.answers,
          }));
          setCompletedTests(formatted);
          localStorage.setItem('neet_completed_tests', JSON.stringify(formatted));
        }
      } catch (err) {
        console.warn('Could not sync remote test results:', err);
      }
    };

    fetchTestResults();
  }, [user]);

  const handleStartTest = (test: TestItem, chapters?: SundayChapterSelection) => {
    // Strict zero-duplication guarantee across all tests before CBT simulation begins
    const validatedTest: TestItem = {
      ...test,
      questions: test.questions && test.questions.length > 0 ? assertNoDuplicateQuestions(test.questions) : test.questions
    };
    setActiveTestForCBT(validatedTest);
    setSelectedSundayChapters(chapters);
  };

  const handleSaveTestResult = async (result: UserTestResult) => {
    setCompletedTests(prev => {
      const updated = [result, ...prev];
      try {
        localStorage.setItem('neet_completed_tests', JSON.stringify(updated));
      } catch (err) {
        console.warn('Unable to cache completed tests to localStorage:', err);
      }
      return updated;
    });

    if (supabase && user && user.id && !String(user.id).startsWith('local-')) {
      try {
        await supabase.from('test_results').insert({
          user_id: user.id,
          test_id: result.testId,
          test_title: result.testTitle,
          score: result.score,
          total_marks: result.totalMarks,
          correct_answers: result.correctAnswers,
          wrong_answers: result.wrongAnswers,
          unattempted: result.unattempted,
          time_spent_seconds: result.timeSpentSeconds,
          accuracy_percentage: result.accuracyPercentage,
          predicted_air: result.predictedAIR,
          national_percentile: result.nationalPercentile,
          subject_breakdown: result.subjectBreakdown,
          weak_chapters: result.weakChapters,
          strong_chapters: result.strongChapters,
          revision_suggestions: result.revisionSuggestions,
          answers: result.answers,
        });
      } catch (error) {
        console.warn('Test result saved locally, remote sync failed:', error);
      }
    }
  };

  const [targetYear, setTargetYear] = useState<'2027' | '2028' | '2029'>(() => {
    try {
      const saved = localStorage.getItem('neet_target_year');
      if (saved === '2027' || saved === '2028' || saved === '2029') return saved;
    } catch {}
    return '2027';
  });

  const handleSelectTargetYear = (yr: '2027' | '2028' | '2029') => {
    setTargetYear(yr);
    localStorage.setItem('neet_target_year', yr);
  };

  const [signOutNotification, setSignOutNotification] = useState(false);

  const handleSignOut = async () => {
    // 1. Purge all student and local user credentials
    localStorage.removeItem('neet_local_user');
    localStorage.removeItem('neet_enrolled_student');
    localStorage.removeItem('neet_user_enrolled');
    localStorage.removeItem('neet_guest_mode');
    sessionStorage.removeItem('neet_admin_authenticated');
    localStorage.removeItem('neet_admin_authenticated');
    setIsAdminSession(false);

    // 2. Purge Supabase auth tokens from localStorage
    try {
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key && (key.startsWith('sb-') || key.includes('supabase') || key.includes('auth-token'))) {
          localStorage.removeItem(key);
        }
      }
    } catch {}

    // 3. Clear in-memory state
    setUser(null);
    setEnrolledStudent(null);
    setSignOutNotification(true);
    setTimeout(() => setSignOutNotification(false), 4000);

    // 4. Supabase signOut
    if (supabase) {
      try {
        await supabase.auth.signOut();
      } catch (e) {
        // ignore
      }
    }

    // 5. Broadcast changes across tabs and components
    window.dispatchEvent(new Event('neet_auth_change'));
    window.dispatchEvent(new Event('neet_downloads_change'));
    window.dispatchEvent(new Event('neet_admin_login_change'));
  };

  const handleQuickMockTest = async () => {
    const plannerTest = SUNDAY_DROPPER_PLANNER_TESTS[0];
    const customPaper = await fetchAuthoritativePaper('CWT-01', true);
    const questions = (customPaper && Array.isArray(customPaper.questions) && customPaper.questions.length === 180)
      ? customPaper.questions
      : generateSundayTestQuestions(plannerTest, undefined, false, 'repeater');

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
      questions
    };
    handleStartTest(testItem);
  };

  const handleOpenUpload = (sub?: string, ch?: string) => {
    if (sub === 'Biology' || sub === 'Chemistry' || sub === 'Physics') {
      setUploadSubject(sub);
    }
    if (ch) {
      setUploadChapter(ch);
    }
    setIsUploadModalOpen(true);
  };

  const handleOpenSuperUser = () => {
    const isAuthed =
      sessionStorage.getItem('neet_admin_authenticated') === 'true' ||
      localStorage.getItem('neet_admin_authenticated') === 'true';
    if (isAuthed) {
      setIsSuperUserModalOpen(true);
    } else {
      setIsAdminLoginModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sign Out Confirmation Toast */}
      {signOutNotification && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center space-x-2.5 text-xs font-semibold animate-in fade-in slide-in-from-bottom-3 duration-200 border border-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>✓ Signed out successfully. Complete candidate enrollment below.</span>
        </div>
      )}

      {/* MANDATORY ENROLLMENT GATE: Required for all new / signed-out candidates (Bypassed if Master Admin session is active) */}
      {(!enrolledStudent || isEnrollmentModalOpen) && !isAdminSession && (
        <EnrollmentGate
          initialData={enrolledStudent || undefined}
          initialPackageId={enrollmentPackageId}
          onEnrollSuccess={student => {
            setEnrolledStudent(student);
            setIsEnrollmentModalOpen(false);
          }}
          onClose={enrolledStudent ? () => setIsEnrollmentModalOpen(false) : undefined}
          onOpenAuth={() => setIsAuthModalOpen(true)}
          onOpenAdmin={() => setIsAdminLoginModalOpen(true)}
        />
      )}

      {/* Top Navigation Header */}
      <Header
        activeExam={activeExam}
        onSelectExam={setActiveExam}
        targetYear={targetYear}
        onSelectTargetYear={handleSelectTargetYear}
        onOpenQuickTest={handleQuickMockTest}
        onOpenDoubtModal={() => setIsDoubtModalOpen(true)}
        completedTestsCount={completedTests.length}
        enrolledStudent={enrolledStudent}
        userEmail={user?.email ?? (enrolledStudent?.email || null)}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onSignOut={handleSignOut}
        onOpenDownloads={() => setIsDownloadsModalOpen(true)}
        onOpenSuperUser={handleOpenSuperUser}
        onOpenUploadModal={() => handleOpenUpload()}
        onOpenAdminLogin={() => setIsAdminLoginModalOpen(true)}
        isAdmin={isAdminSession}
        onOpenEnrollment={pkg => {
          setEnrollmentPackageId(pkg?.id);
          setIsEnrollmentModalOpen(true);
        }}
        onNavigateHome={() => navigateTo('/')}
        onNavigateAbout={() => navigateTo('/about')}
      />

      {/* ROUTE 1: Dedicated Standalone /about Page View */}
      {currentPath === '/about' ? (
        <div className="flex-1 flex flex-col w-full bg-slate-100 min-h-[calc(100vh-3.5rem)] animate-in fade-in duration-150">
          {/* Sub-header Navigation Strip */}
          <div className="bg-white border-b border-slate-200 px-4 sm:px-8 py-3 flex items-center justify-between shadow-2xs">
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => navigateTo('/')}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer shadow-2xs"
              >
                <span>← Back to Test Series & Sunday Mocks</span>
              </button>
              <span className="text-slate-300">/</span>
              <span className="text-xs font-semibold text-slate-500">About Platform</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 font-mono">
              <span>https://neetcbtexam.com/about</span>
            </div>
          </div>

          {/* About Platform Content Container */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto w-full">
            <Suspense fallback={<SectionLoadingFallback />}>
              <AboutPlatformSection
                onNavigateToTestSeries={() => navigateTo('/')}
                onOpenEnrollment={() => setIsEnrollmentModalOpen(true)}
              />
            </Suspense>

            {/* Institutional Platform Footer on /about */}
            <footer className="mt-8 pt-4 pb-3 border-t border-slate-200/80 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2.5">
              <div className="text-[11px] text-slate-500">
                © 2026 NeetCbt Exam Test. Built exclusively for NEET-UG Exam Aspirants.
              </div>
              <div className="flex items-center space-x-3 text-[11px]">
                <button
                  type="button"
                  onClick={() => navigateTo('/')}
                  className="text-slate-600 hover:text-blue-600 font-semibold underline transition cursor-pointer"
                >
                  ← Test Series Dashboard
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={() => setIsTermsModalOpen(true)}
                  className="text-slate-600 hover:text-blue-600 font-semibold underline transition cursor-pointer"
                >
                  Terms & Conditions
                </button>
                <span>•</span>
                <span className="text-slate-400">2-Device Protected</span>
                <span>•</span>
                <span className="text-slate-400">DOB PIN Encrypted</span>
              </div>
            </footer>
          </main>
        </div>
      ) : (
        /* ROUTE 2: Main Application Dashboard */
        <div className="flex-1 flex flex-col lg:flex-row w-full mx-auto">
          {/* Sidebar */}
          <Sidebar
            activeTab={activeTab}
            onSelectTab={setActiveTab}
            extraSubTab={extraSubTab}
            onSelectExtraSubTab={setExtraSubTab}
            onNavigateToAbout={() => navigateTo('/about')}
          />

          {/* Dynamic Content Area */}
          <main className="flex-1 p-4 sm:p-5 lg:p-6 overflow-y-auto bg-slate-100 min-w-0">
            <Suspense fallback={<SectionLoadingFallback />}>
              {activeTab === 'test-series' && (
                <TestSeriesSection
                  testItems={TEST_SERIES_DATA}
                  targetYear={targetYear}
                  onStartTest={handleStartTest}
                />
              )}

              {activeTab === 'what-extra' && (
                <WhatExtraSection
                  activeSubTab={extraSubTab}
                  onSelectSubTab={setExtraSubTab}
                  flashcards={FLASHCARDS_DATA}
                  mindMaps={MIND_MAPS_DATA}
                  books={BOOKS_DATA}
                  pyqs={PYQS_DATA}
                  onStartCustomTest={handleStartTest}
                  onOpenBook={setActiveBookForReading}
                  completedTests={completedTests}
                  onOpenUploadModal={handleOpenUpload}
                />
              )}

              {activeTab === 'about-exam' && <AboutExamSection />}
            </Suspense>

            {/* Institutional Platform Footer */}
            <footer className="mt-8 pt-4 pb-3 border-t border-slate-200/80 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2.5">
              <div className="text-[11px] text-slate-500">
                © 2026 NeetCbt Exam Test. All rights reserved. Academic CBT Examination Simulator.
              </div>
              <div className="flex items-center space-x-3 text-[11px]">
                <a
                  href="/about"
                  onClick={e => {
                    e.preventDefault();
                    navigateTo('/about');
                  }}
                  className="text-slate-600 hover:text-blue-600 font-semibold underline transition cursor-pointer"
                >
                  About Platform (NEET Aspirants)
                </a>
                <span>•</span>
                <button
                  type="button"
                  onClick={() => setIsTermsModalOpen(true)}
                  className="text-slate-600 hover:text-blue-600 font-semibold underline transition cursor-pointer"
                >
                  Terms & Conditions
                </button>
                <span>•</span>
                <span className="text-slate-400">2-Device Protected</span>
                <span>•</span>
                <span className="text-slate-400">DOB PIN Encrypted</span>
              </div>
            </footer>
          </main>
        </div>
      )}

      {/* Suspended Modals */}
      <Suspense fallback={null}>
        {/* CBT Test Simulation Modal */}
        {activeTestForCBT && (
          <ErrorBoundary
            fallbackTitle="Exam Simulation Session"
            fallbackMessage="An unexpected display error occurred in the CBT exam window. You can safely return to the dashboard and try again."
            onReset={() => {
              setActiveTestForCBT(null);
              setSelectedSundayChapters(undefined);
            }}
          >
            <CBTTestModal
              test={activeTestForCBT}
              selectedChapters={selectedSundayChapters}
              onClose={() => {
                setActiveTestForCBT(null);
                setSelectedSundayChapters(undefined);
              }}
              onSaveResult={handleSaveTestResult}
            />
          </ErrorBoundary>
        )}

        {/* 24/7 Academic Doubt Modal */}
        {isDoubtModalOpen && (
          <LiveDoubtModal onClose={() => setIsDoubtModalOpen(false)} />
        )}

        {/* NCERT & Books Reader Modal */}
        {activeBookForReading && (
          <BookReaderModal
            book={activeBookForReading}
            onClose={() => setActiveBookForReading(null)}
          />
        )}

        {/* Auth Modal */}
        {isAuthModalOpen && (
          <AuthModal
            onClose={() => setIsAuthModalOpen(false)}
            onOpenEnrollment={() => {
              setIsAuthModalOpen(false);
              setIsEnrollmentModalOpen(true);
            }}
            onOpenAdminLogin={() => {
              setIsAuthModalOpen(false);
              setIsAdminLoginModalOpen(true);
            }}
          />
        )}

        {/* Downloads Vault Modal */}
        {isDownloadsModalOpen && (
          <DownloadsModal onClose={() => setIsDownloadsModalOpen(false)} />
        )}

        {/* Admin Login Authorization Gate */}
        {isAdminLoginModalOpen && (
          <AdminLoginModal
            isOpen={isAdminLoginModalOpen}
            onClose={() => setIsAdminLoginModalOpen(false)}
            onLoginSuccess={() => {
              setIsAdminLoginModalOpen(false);
              setIsAdminSession(true);
              setIsSuperUserModalOpen(true);
              window.dispatchEvent(new Event('neet_admin_login_change'));
            }}
          />
        )}

        {/* Super User & Admin Control Center (Custom Test Generator & Telemetry) */}
        {isSuperUserModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-in fade-in duration-150">
            <div className="w-full max-w-6xl bg-slate-100 border border-slate-700 rounded-3xl shadow-2xl flex flex-col max-h-[96vh] text-gray-900 relative animate-in zoom-in-95 duration-150 overflow-hidden">
              <div className="flex-1 overflow-y-auto p-3 sm:p-5">
                <ErrorBoundary
                  fallbackTitle="Admin & Faculty Studio Session"
                  fallbackMessage="An unexpected display issue occurred in the Admin Studio window. Click below to reload cleanly."
                  onReset={() => setIsSuperUserModalOpen(false)}
                >
                  <AdminSection
                    onClose={() => setIsSuperUserModalOpen(false)}
                    onStartCustomTest={handleStartTest}
                    onOpenUploadModal={handleOpenUpload}
                  />
                </ErrorBoundary>
              </div>
            </div>
          </div>
        )}

        {/* Content Upload & Ingestion Modal */}
        {isUploadModalOpen && (
          <UploadContentModal
            onClose={() => setIsUploadModalOpen(false)}
            defaultSubject={uploadSubject}
            defaultChapter={uploadChapter}
          />
        )}

        {/* Direct In-App DOB Verification Modal for Downloads */}
        {dobModalState.isOpen && (
          <DobVerificationModal
            isOpen={dobModalState.isOpen}
            onClose={() => setDobModalState(prev => ({ ...prev, isOpen: false }))}
            documentTitle={dobModalState.documentTitle}
            category={dobModalState.category}
            onVerified={dobModalState.onVerified}
          />
        )}

        {/* Terms & Conditions Modal */}
        {isTermsModalOpen && (
          <TermsAndConditionsModal
            isOpen={isTermsModalOpen}
            onClose={() => setIsTermsModalOpen(false)}
          />
        )}
      </Suspense>
    </div>
  );
}
