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
import { User } from '@supabase/supabase-js';

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

  // Modal States
  const [activeTestForCBT, setActiveTestForCBT] = useState<TestItem | null>(null);
  const [isDoubtModalOpen, setIsDoubtModalOpen] = useState(false);
  const [activeBookForReading, setActiveBookForReading] = useState<BookItem | null>(null);

  // User History & Stats
  const [completedTests, setCompletedTests] = useState<UserTestResult[]>([]);

  // Supabase Auth State
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    if (!supabase) {
      console.warn("Supabase is not configured. Local/mock mode active.");
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!supabase) return;

    if (user) {
      // Fetch completed tests
      const fetchTestResults = async () => {
        const { data, error } = await supabase
          .from('test_results')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data) {
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
        }
      };

      fetchTestResults();
    } else {
      setCompletedTests([]);
    }
  }, [user]);

  const handleStartTest = (test: TestItem) => {
    setActiveTestForCBT(test);
  };

  const handleSaveTestResult = async (result: UserTestResult) => {
    setCompletedTests(prev => [result, ...prev]);

    if (supabase && user) {
      const { error } = await supabase.from('test_results').insert({
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
      if (error) {
        console.error('Error saving test result to Supabase:', error);
      }
    }
  };



  const handleQuickMockTest = () => {
    const defaultMock = TEST_SERIES_DATA.find(t => t.category === 'neet_mock') || TEST_SERIES_DATA[0];
    setActiveTestForCBT(defaultMock);
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#1F2937] flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navigation Header */}
      <Header
        activeExam={activeExam}
        onSelectExam={setActiveExam}
        onOpenQuickTest={handleQuickMockTest}
        onOpenDoubtModal={() => setIsDoubtModalOpen(true)}
        completedTestsCount={completedTests.length}
        userEmail={user?.email ?? null}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onSignOut={() => supabase?.auth.signOut()}
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
        <main className="flex-1 p-4 sm:p-5 lg:p-6 overflow-y-auto bg-[#F3F4F6] min-w-0">
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
          onClose={() => setActiveTestForCBT(null)}
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
    </div>
  );
}
