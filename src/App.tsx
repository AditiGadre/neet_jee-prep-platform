import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Sidebar, TabType } from './components/Sidebar';
import { TestSeriesSection } from './components/TestSeriesSection';
import { supabase } from './supabaseClient';
import { EnrollmentGate, EnrolledStudent } from './components/EnrollmentGate';
import { SundayChapterSelection } from './components/SundayTestChapterModal';

// Lazy-load secondary tabs & heavy interactive modals for sub-second initial load
const WhatExtraSection = lazy(() => import('./components/WhatExtraSection').then(m => ({ default: m.WhatExtraSection })));
const AboutExamSection = lazy(() => import('./components/AboutExamSection').then(m => ({ default: m.AboutExamSection })));
const AboutUsSection = lazy(() => import('./components/AboutUsSection').then(m => ({ default: m.AboutUsSection })));
const ResultsSection = lazy(() => import('./components/ResultsSection').then(m => ({ default: m.ResultsSection })));
const SupportSection = lazy(() => import('./components/SupportSection').then(m => ({ default: m.SupportSection })));
const CBTTestModal = lazy(() => import('./components/CBTTestModal').then(m => ({ default: m.CBTTestModal })));
const LiveDoubtModal = lazy(() => import('./components/LiveDoubtModal').then(m => ({ default: m.LiveDoubtModal })));
const BookReaderModal = lazy(() => import('./components/BookReaderModal').then(m => ({ default: m.BookReaderModal })));
const AuthModal = lazy(() => import('./components/AuthModal').then(m => ({ default: m.AuthModal })));
const DownloadsModal = lazy(() => import('./components/DownloadsModal').then(m => ({ default: m.DownloadsModal })));
const SuperUserModal = lazy(() => import('./components/SuperUserModal').then(m => ({ default: m.SuperUserModal })));
const UploadContentModal = lazy(() => import('./components/UploadContentModal').then(m => ({ default: m.UploadContentModal })));

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
import { ExamType, TestItem, BookItem, UserTestResult } from './types';

export default function App() {
  const [activeExam, setActiveExam] = useState<ExamType>('NEET');
  const [activeTab, setActiveTab] = useState<TabType>('test-series');
  const [extraSubTab, setExtraSubTab] = useState<string>('custom-test');

  // Mandatory Enrollment Gate State - Persistent check for existing enrolled users
  const [enrolledStudent, setEnrolledStudent] = useState<EnrolledStudent | null>(() => {
    try {
      const saved = localStorage.getItem('neet_enrolled_student');
      if (saved) return JSON.parse(saved);
      const local = localStorage.getItem('neet_local_user');
      if (local) {
        const u = JSON.parse(local);
        const reconstructed: EnrolledStudent = {
          studentName: u.studentName || u.name || 'Aditi Sanjay Gadre',
          parentName: u.parentName || 'Sanjay Gadre',
          parentPhone: u.parentPhone ? String(u.parentPhone).replace(/\D/g, '') : '9876543210',
          studentPhone: u.studentPhone ? String(u.studentPhone).replace(/\D/g, '') : (u.phone ? String(u.phone).replace(/\D/g, '') : '9876543210'),
          caste: u.caste || 'General / Open',
          email: u.email || 'aditi.gadre@gmail.com',
          dob: u.dob || '2006-08-15',
          dobPin: u.dobPin || '15082006',
          targetYear: u.targetYear || '2026',
          enrolledAt: u.enrolledAt || new Date().toISOString(),
          rollNumber: u.rollNumber || 'NCBT-2026-784920',
          devices: u.devices || ['dev-1']
        };
        localStorage.setItem('neet_enrolled_student', JSON.stringify(reconstructed));
        localStorage.setItem('neet_user_enrolled', 'true');
        return reconstructed;
      }
      const enrolledFlag = localStorage.getItem('neet_user_enrolled');
      if (enrolledFlag === 'true') {
        const fallbackStudent: EnrolledStudent = {
          studentName: 'Aditi Sanjay Gadre',
          parentName: 'Sanjay Gadre',
          parentPhone: '9876543210',
          studentPhone: '9876543210',
          caste: 'General / Open',
          email: 'student@neetcbt.in',
          dob: '2006-08-15',
          dobPin: '15082006',
          targetYear: '2026',
          enrolledAt: new Date().toISOString(),
          rollNumber: 'NCBT-2026-784920',
          devices: ['dev-1']
        };
        localStorage.setItem('neet_enrolled_student', JSON.stringify(fallbackStudent));
        return fallbackStudent;
      }
      return null;
    } catch {
      return null;
    }
  });

  // Modal States
  const [activeTestForCBT, setActiveTestForCBT] = useState<TestItem | null>(null);
  const [selectedSundayChapters, setSelectedSundayChapters] = useState<SundayChapterSelection | undefined>(undefined);
  const [isDoubtModalOpen, setIsDoubtModalOpen] = useState(false);
  const [activeBookForReading, setActiveBookForReading] = useState<BookItem | null>(null);
  const [isDownloadsModalOpen, setIsDownloadsModalOpen] = useState(false);
  const [isSuperUserModalOpen, setIsSuperUserModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadSubject, setUploadSubject] = useState<'Physics' | 'Chemistry' | 'Biology'>('Biology');
  const [uploadChapter, setUploadChapter] = useState<string>('Molecular Basis of Inheritance');

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
          setEnrolledStudent(JSON.parse(student));
        }
      } catch (err) {
        console.error('Error syncing local auth:', err);
      }
    };

    const handleAuthRequired = () => {
      setIsAuthModalOpen(true);
    };

    window.addEventListener('neet_auth_change', syncAuth);
    window.addEventListener('neet_auth_required_for_download', handleAuthRequired);

    if (supabase) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          setUser(session.user);
        }
      }).catch(err => {
        console.warn('Supabase getSession failed, using local session:', err);
      });

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session?.user) {
          setUser(session.user);
        }
      });

      return () => {
        subscription.unsubscribe();
        window.removeEventListener('neet_auth_change', syncAuth);
        window.removeEventListener('neet_auth_required_for_download', handleAuthRequired);
      };
    }

    return () => {
      window.removeEventListener('neet_auth_change', syncAuth);
      window.removeEventListener('neet_auth_required_for_download', handleAuthRequired);
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
    setActiveTestForCBT(test);
    setSelectedSundayChapters(chapters);
  };

  const handleSaveTestResult = async (result: UserTestResult) => {
    setCompletedTests(prev => {
      const updated = [result, ...prev];
      localStorage.setItem('neet_completed_tests', JSON.stringify(updated));
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

  const handleSignOut = async () => {
    localStorage.removeItem('neet_local_user');
    setUser(null);
    if (supabase) {
      try {
        await supabase.auth.signOut();
      } catch (e) {
        // ignore
      }
    }
    window.dispatchEvent(new Event('neet_auth_change'));
  };

  const handleQuickMockTest = () => {
    const defaultMock = TEST_SERIES_DATA.find(t => t.category === 'neet_mock') || TEST_SERIES_DATA[0];
    setActiveTestForCBT(defaultMock);
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

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* MANDATORY ENROLLMENT GATE: Blocks access until student registers */}
      {!enrolledStudent && (
        <EnrollmentGate
          onEnrollSuccess={student => {
            setEnrolledStudent(student);
          }}
        />
      )}

      {/* Top Navigation Header */}
      <Header
        activeExam={activeExam}
        onSelectExam={setActiveExam}
        onOpenQuickTest={handleQuickMockTest}
        onOpenDoubtModal={() => setIsDoubtModalOpen(true)}
        completedTestsCount={completedTests.length}
        userEmail={user?.email ?? (enrolledStudent?.email || null)}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onSignOut={handleSignOut}
        onOpenDownloads={() => setIsDownloadsModalOpen(true)}
        onOpenSuperUser={() => setIsSuperUserModalOpen(true)}
        onOpenUploadModal={() => handleOpenUpload()}
      />

      {/* Main Layout Container */}
      <div className="flex-1 flex flex-col lg:flex-row w-full mx-auto">
        {/* Sidebar */}
        <Sidebar
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          extraSubTab={extraSubTab}
          onSelectExtraSubTab={setExtraSubTab}
        />

        {/* Dynamic Content Area */}
        <main className="flex-1 p-4 sm:p-5 lg:p-6 overflow-y-auto bg-slate-100 min-w-0">
          <Suspense fallback={<SectionLoadingFallback />}>
            {activeTab === 'test-series' && (
              <TestSeriesSection
                testItems={TEST_SERIES_DATA}
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

            {activeTab === 'about-us' && <AboutUsSection />}

            {activeTab === 'our-results' && <ResultsSection />}

            {activeTab === 'support' && (
              <SupportSection
                onOpenAskDoubtModal={() => setIsDoubtModalOpen(true)}
              />
            )}
          </Suspense>
        </main>
      </div>

      {/* Suspended Modals */}
      <Suspense fallback={null}>
        {/* CBT Test Simulation Modal */}
        {activeTestForCBT && (
          <CBTTestModal
            test={activeTestForCBT}
            selectedChapters={selectedSundayChapters}
            onClose={() => {
              setActiveTestForCBT(null);
              setSelectedSundayChapters(undefined);
            }}
            onSaveResult={handleSaveTestResult}
          />
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
          <AuthModal onClose={() => setIsAuthModalOpen(false)} />
        )}

        {/* Downloads Vault Modal */}
        {isDownloadsModalOpen && (
          <DownloadsModal onClose={() => setIsDownloadsModalOpen(false)} />
        )}

        {/* Super User & Admin Notification Center */}
        {isSuperUserModalOpen && (
          <SuperUserModal onClose={() => setIsSuperUserModalOpen(false)} />
        )}

        {/* Content Upload & Ingestion Modal */}
        {isUploadModalOpen && (
          <UploadContentModal
            onClose={() => setIsUploadModalOpen(false)}
            defaultSubject={uploadSubject}
            defaultChapter={uploadChapter}
          />
        )}
      </Suspense>
    </div>
  );
}
