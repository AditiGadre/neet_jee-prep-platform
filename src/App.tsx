import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar, TabType } from './components/Sidebar';
import { TestSeriesSection } from './components/TestSeriesSection';
import { WhatExtraSection } from './components/WhatExtraSection';
import { AboutExamSection } from './components/AboutExamSection';
import { AboutUsSection } from './components/AboutUsSection';
import { ResultsSection } from './components/ResultsSection';
import { SupportSection } from './components/SupportSection';
import { CBTTestModal } from './components/CBTTestModal';
import { LiveDoubtModal } from './components/LiveDoubtModal';
import { BookReaderModal } from './components/BookReaderModal';
import { supabase } from './supabaseClient';
import { AuthModal } from './components/AuthModal';
import { DownloadsModal } from './components/DownloadsModal';
import { SuperUserModal } from './components/SuperUserModal';
import { UploadContentModal } from './components/UploadContentModal';
import { EnrollmentGate, EnrolledStudent } from './components/EnrollmentGate';
import { SundayChapterSelection } from './components/SundayTestChapterModal';

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
        </main>
      </div>

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
    </div>
  );
}
