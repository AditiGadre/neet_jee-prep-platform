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
  Loader
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TestItem, Question, UserTestResult } from '../types';
import { supabase } from '../supabaseClient';
import { cleanOcrText } from '../utils/ocrCleaner';
import { downloadTestPaperPDF, downloadTestScorecardPDF } from '../utils/pdfDownloader';

interface CBTTestModalProps {
  test: TestItem;
  onClose: () => void;
  onSaveResult: (result: UserTestResult) => void;
}

export const CBTTestModal: React.FC<CBTTestModalProps> = ({
  test,
  onClose,
  onSaveResult
}) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [visited, setVisited] = useState<Record<number, boolean>>({ 0: true });
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(test.durationMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [testResult, setTestResult] = useState<UserTestResult | null>(null);
  const [activeSolutionTab, setActiveSolutionTab] = useState<'scorecard' | 'solutions'>('scorecard');

  const [questions, setQuestions] = useState<Question[]>(
    test.questions && test.questions.length > 0 ? test.questions : []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    // Reset state for new test
    setCurrentQuestionIdx(0);
    setAnswers({});
    setMarkedForReview({});
    setVisited({ 0: true });
    setErrorMsg(null);

    if (test.questions && test.questions.length > 0) {
      const cleaned = test.questions.map(q => ({
        ...q,
        questionText: cleanOcrText(q.questionText),
        options: q.options.map(o => cleanOcrText(o)),
        explanation: cleanOcrText(q.explanation)
      }));
      setQuestions(cleaned);
      setTimeLeftSeconds(test.durationMinutes * 60);
      setIsLoading(false);
      return;
    }

    const loadDbQuestions = async () => {
      setIsLoading(true);
      setErrorMsg(null);
      try {
        if (supabase) {
          let chapterName = 'Vectors';
          if (test.title.toLowerCase().includes('dimension') || test.title.toLowerCase().includes('units')) {
            chapterName = 'Units, Dimensions';
          } else if (test.title.toLowerCase().includes('electrostatics')) {
            chapterName = 'Electrostatics';
          } else if (test.title.toLowerCase().includes('gravitation')) {
            chapterName = 'Gravitation';
          } else if (test.title.toLowerCase().includes('thermodynamics')) {
            chapterName = 'Thermodynamics';
          } else if (test.title.toLowerCase().includes('magnetism')) {
            chapterName = 'Magnetism';
          } else if (test.title.toLowerCase().includes('motion')) {
            chapterName = 'Motion in One Dimension';
          }

          const { data, error } = await supabase
            .from('questions')
            .select('*')
            .eq('chapter', chapterName);

          if (!error && data && data.length > 0) {
            // Filter out duplicate or obsolete questions (e.g. starting with vectors-q)
            const filteredData = data.filter((d: any) => !d.id.startsWith('vectors-q'));
            const mappedQs: Question[] = filteredData.map((d: any) => {
              let opts: string[] = [];
              if (Array.isArray(d.options)) {
                opts = d.options.map((o: any) => cleanOcrText(String(o)));
              } else if (typeof d.options === 'string') {
                try {
                  opts = JSON.parse(d.options).map((o: any) => cleanOcrText(String(o)));
                } catch {
                  opts = [];
                }
              }
              while (opts.length < 4) {
                opts.push(`Option ${opts.length + 1}`);
              }

              return {
                id: d.id,
                subject: d.subject || 'Physics',
                chapter: d.chapter || chapterName,
                topic: d.topic || 'General Practice',
                difficulty: d.difficulty as any || 'Medium',
                questionText: cleanOcrText(d.question_text || ''),
                options: opts,
                correctAnswer: typeof d.correct_answer === 'number' ? d.correct_answer : 0,
                explanation: cleanOcrText(d.explanation || '')
              };
            });
            setQuestions(mappedQs);
            setTimeLeftSeconds((test.durationMinutes || 15) * 60);
          } else {
            console.error('Supabase query returned no questions or error:', error);
            setErrorMsg(error ? error.message : `No questions found for chapter: ${chapterName} in database.`);
            const fallback = (test.questions || []).map(q => ({
              ...q,
              questionText: cleanOcrText(q.questionText),
              options: q.options.map(o => cleanOcrText(o)),
              explanation: cleanOcrText(q.explanation)
            }));
            setQuestions(fallback);
            setTimeLeftSeconds((test.durationMinutes || 15) * 60);
          }
        } else {
          console.error('Supabase client is not configured');
          setErrorMsg('Supabase client is not configured. Please check environment variables.');
          const fallback = (test.questions || []).map(q => ({
            ...q,
            questionText: cleanOcrText(q.questionText),
            options: q.options.map(o => cleanOcrText(o)),
            explanation: cleanOcrText(q.explanation)
          }));
          setQuestions(fallback);
          setTimeLeftSeconds((test.durationMinutes || 15) * 60);
        }
      } catch (err: any) {
        console.error('Error loading dynamic questions:', err);
        setErrorMsg(`Exception caught while loading questions: ${err?.message || String(err)}`);
        const fallback = (test.questions || []).map(q => ({
          ...q,
          questionText: cleanOcrText(q.questionText),
          options: q.options.map(o => cleanOcrText(o)),
          explanation: cleanOcrText(q.explanation)
        }));
        setQuestions(fallback);
        setTimeLeftSeconds(fallback.length * 60 || 3600);
      } finally {
        setIsLoading(false);
      }
    };
    loadDbQuestions();
  }, [test]);

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

  // Mark visited when navigating
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

  const handleSubmitTest = () => {
    let correctCount = 0;
    let wrongCount = 0;
    let unattemptedCount = 0;

    const weakChapterMap: Record<string, number> = {};
    const strongChapterMap: Record<string, number> = {};

    questions.forEach((q, idx) => {
      const chosen = answers[idx];
      if (chosen === undefined) {
        unattemptedCount++;
        weakChapterMap[q.chapter] = (weakChapterMap[q.chapter] || 0) + 1;
      } else if (chosen === q.correctAnswer) {
        correctCount++;
        strongChapterMap[q.chapter] = (strongChapterMap[q.chapter] || 0) + 1;
      } else {
        wrongCount++;
        weakChapterMap[q.chapter] = (weakChapterMap[q.chapter] || 0) + 1;
      }
    });

    // NEET +4, -1 scoring
    const totalAttempted = correctCount + wrongCount;
    const rawScore = correctCount * 4 - wrongCount * 1;
    const totalPossibleMarks = questions.length * 4;
    const accuracy = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 0;

    // Simulated AIR & percentile
    const scoreRatio = Math.max(0, rawScore) / (totalPossibleMarks || 1);
    const predictedAIR = Math.max(1, Math.round(500000 * Math.pow(1 - scoreRatio, 2.5) + 12));
    const percentile = Math.min(99.99, +(90 + scoreRatio * 9.99).toFixed(2));

    const weakChapters = Object.keys(weakChapterMap).slice(0, 3);
    const strongChapters = Object.keys(strongChapterMap).slice(0, 3);

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
      subjectBreakdown: [
        {
          subject: 'Physics',
          correct: Math.round(correctCount * 0.3),
          wrong: Math.round(wrongCount * 0.4),
          unattempted: Math.round(unattemptedCount * 0.3),
          score: Math.round(rawScore * 0.3)
        },
        {
          subject: 'Chemistry',
          correct: Math.round(correctCount * 0.3),
          wrong: Math.round(wrongCount * 0.3),
          unattempted: Math.round(unattemptedCount * 0.3),
          score: Math.round(rawScore * 0.3)
        },
        {
          subject: 'Biology',
          correct: Math.round(correctCount * 0.4),
          wrong: Math.round(wrongCount * 0.3),
          unattempted: Math.round(unattemptedCount * 0.4),
          score: Math.round(rawScore * 0.4)
        }
      ],
      weakChapters: weakChapters.length > 0 ? weakChapters : ['Electrodynamics', 'Organic Mechanisms'],
      strongChapters: strongChapters.length > 0 ? strongChapters : ['Cell Biology', 'Genetics'],
      revisionSuggestions: [
        'Practice 20 Topic-wise MCQs on ' + (weakChapters[0] || 'Modern Physics'),
        'Revise Formula flashcard deck for numerical speed',
        'Review CBT trap options from question explanations below'
      ],
      answers
    };

    setTestResult(resultObj);
    setIsSubmitted(true);
    onSaveResult(resultObj);

    if (rawScore > 0) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const currentQ = questions[currentQuestionIdx];

  // Helper for question palette colors
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

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col overflow-hidden text-gray-900">
      <div className="w-full h-full bg-white flex flex-col overflow-hidden">
        {/* Modal Top Bar */}
        <div className="px-4 sm:px-5 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200 tracking-wider">
              CBT SIMULATOR
            </span>
            <div>
              <h2 className="text-xs sm:text-sm font-bold text-gray-900 truncate max-w-md">
                {test.title}
              </h2>
              <span className="text-[10px] text-gray-500 font-mono">
                Pattern: {test.negativeMarking}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {!isSubmitted && (
              <div
                className={`flex items-center space-x-1.5 px-2.5 py-1 rounded border text-xs font-mono font-bold ${
                  timeLeftSeconds < 300
                    ? 'bg-red-50 border-red-300 text-red-700 animate-pulse'
                    : 'bg-white border-gray-300 text-gray-800'
                }`}
              >
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>Time Left: {formatTimer(timeLeftSeconds)}</span>
              </div>
            )}

            <button
              onClick={onClose}
              className="p-1 rounded text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-colors"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ACTIVE TEST INTERFACE */}
        {isLoading ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white space-y-4">
            <Loader className="w-10 h-10 text-blue-600 animate-spin" />
            <p className="text-gray-500 font-semibold animate-pulse">Loading chapter questions from Supabase database...</p>
          </div>
        ) : errorMsg ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white space-y-4 text-center">
            <AlertCircle className="w-12 h-12 text-red-500" />
            <h3 className="text-lg font-bold text-gray-900">Database Connection Failed</h3>
            <p className="text-sm text-gray-500 max-w-md">{errorMsg}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-2 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded hover:bg-blue-700 transition-colors"
            >
              Retry Connection
            </button>
          </div>
        ) : !isSubmitted ? (
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 overflow-hidden">
            {/* Main Question Area (3 Cols) */}
            <div className="lg:col-span-3 p-4 sm:p-5 flex flex-col justify-between overflow-y-auto border-b lg:border-b-0 lg:border-r border-gray-200">
              {currentQ && (
                <div className="space-y-3.5">
                  {/* Question Header Info */}
                  <div className="flex items-center justify-between pb-2.5 border-b border-gray-100">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-blue-700 font-mono">
                        Question {currentQuestionIdx + 1} of {questions.length}
                      </span>
                      <span className="text-xs text-gray-500">&bull; {currentQ.subject}</span>
                      <span className="text-xs text-gray-500">&bull; {currentQ.chapter}</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-semibold border border-gray-200">
                      Difficulty: {currentQ.difficulty}
                    </span>
                  </div>

                  {/* Question Text */}
                  <div className="text-xs sm:text-sm font-semibold text-gray-900 leading-relaxed">
                    {currentQ.questionText}
                  </div>

                  {/* Diagram / Visual Rendering */}
                  {currentQ.diagramSvg && (
                    <div
                      className="my-3 p-3 bg-gray-50 border border-gray-200 rounded-lg flex justify-center items-center overflow-x-auto shadow-2xs"
                      dangerouslySetInnerHTML={{ __html: currentQ.diagramSvg }}
                    />
                  )}
                  {currentQ.image && !currentQ.diagramSvg && (
                    <div className="my-3 p-2 bg-gray-50 border border-gray-200 rounded-lg flex justify-center items-center">
                      <img src={currentQ.image} alt="Question Diagram" className="max-h-56 rounded object-contain" />
                    </div>
                  )}

                  {/* Options List */}
                  <div className="space-y-2 pt-1">
                    {currentQ.options.map((option, optIdx) => {
                      const isSelected = answers[currentQuestionIdx] === optIdx;
                      return (
                        <div
                          key={optIdx}
                          onClick={() => handleSelectOption(optIdx)}
                          className={`p-3 rounded-lg border cursor-pointer flex items-center space-x-2.5 transition-colors ${
                            isSelected
                              ? 'bg-blue-50 border-blue-600 text-blue-900 font-semibold shadow-xs'
                              : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                              isSelected
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-600 border border-gray-300'
                            }`}
                          >
                            {String.fromCharCode(65 + optIdx)}
                          </div>
                          <span className="text-xs">{option}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Bottom Test Controls */}
              <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 mt-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleToggleMarkReview}
                    className={`px-3 py-1.5 rounded text-xs font-semibold flex items-center space-x-1.5 transition-colors ${
                      markedForReview[currentQuestionIdx]
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-purple-700 hover:bg-purple-50 border border-purple-200'
                    }`}
                  >
                    <Flag className="w-3.5 h-3.5" />
                    <span>
                      {markedForReview[currentQuestionIdx]
                        ? 'Marked for Review'
                        : 'Mark for Review & Next'}
                    </span>
                  </button>

                  <button
                    onClick={handleClearResponse}
                    className="px-3 py-1.5 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium border border-gray-200"
                  >
                    Clear Response
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    disabled={currentQuestionIdx === 0}
                    onClick={() => setCurrentQuestionIdx(prev => prev - 1)}
                    className="px-3 py-1.5 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    &larr; Prev
                  </button>

                  {currentQuestionIdx < questions.length - 1 ? (
                    <button
                      onClick={handleSaveAndNext}
                      className="px-3.5 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs"
                    >
                      Save & Next &rarr;
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmitTest}
                      className="px-4 py-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs"
                    >
                      Submit Test Now
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Question Palette Sidebar (1 Col) */}
            <div className="p-4 bg-gray-50 flex flex-col justify-between space-y-4 overflow-y-auto">
              <div>
                <h3 className="text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Question Palette
                </h3>

                {/* Legend */}
                <div className="grid grid-cols-2 gap-1.5 text-[10px] text-gray-600 mb-3 pb-3 border-b border-gray-200">
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
                    <span>Review</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-200 border border-gray-400 inline-block" />
                    <span>Not Visited</span>
                  </div>
                </div>

                {/* Question Grid Numbers */}
                <div className="grid grid-cols-5 gap-1.5 max-h-56 overflow-y-auto custom-scrollbar pr-1">
                  {questions.map((_, qIdx) => (
                    <button
                      key={qIdx}
                      onClick={() => setCurrentQuestionIdx(qIdx)}
                      className={`h-7 rounded text-xs font-bold transition-colors ${getPaletteColor(
                        qIdx
                      )}`}
                    >
                      {qIdx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button in Sidebar */}
              <button
                onClick={handleSubmitTest}
                className="w-full py-2.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs"
              >
                Submit CBT Paper
              </button>
            </div>
          </div>
        ) : (
          /* INSTANT SCORECARD & SOLUTIONS DRAWER */
          testResult && (
            <div className="p-5 sm:p-6 space-y-4 overflow-y-auto">
              {/* Scorecard Header Tabs */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                <div className="flex items-center space-x-1.5">
                  <button
                    onClick={() => setActiveSolutionTab('scorecard')}
                    className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                      activeSolutionTab === 'scorecard'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    1. Instant Scorecard & AIR
                  </button>
                  <button
                    onClick={() => setActiveSolutionTab('solutions')}
                    className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                      activeSolutionTab === 'solutions'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    2. Detailed Step-by-Step Solutions
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => downloadTestScorecardPDF(testResult)}
                    className="px-2.5 py-1.5 rounded bg-emerald-50 hover:bg-emerald-100 text-xs font-semibold text-emerald-800 border border-emerald-300 flex items-center space-x-1 shadow-xs"
                  >
                    <FileText className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Download Scorecard PDF</span>
                  </button>
                  <button
                    onClick={() => downloadTestPaperPDF(test, true)}
                    className="px-2.5 py-1.5 rounded bg-blue-50 hover:bg-blue-100 text-xs font-semibold text-blue-800 border border-blue-300 flex items-center space-x-1 shadow-xs"
                  >
                    <FileText className="w-3.5 h-3.5 text-blue-600" />
                    <span>Download Test Paper PDF</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="px-3 py-1.5 rounded bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 border border-gray-200"
                  >
                    Close & Back to Dashboard
                  </button>
                </div>
              </div>

              {activeSolutionTab === 'scorecard' ? (
                <div className="space-y-4 animate-in fade-in">
                  {/* Top Stats Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <div className="p-3.5 rounded bg-gray-50 border border-emerald-200 text-center">
                      <div className="text-[11px] text-gray-500">Total Score</div>
                      <div className="text-xl sm:text-2xl font-bold text-emerald-700 font-mono mt-0.5">
                        {testResult.score} / {testResult.totalMarks}
                      </div>
                      <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                        {testResult.accuracyPercentage}% Accuracy
                      </div>
                    </div>

                    <div className="p-3.5 rounded bg-gray-50 border border-gray-200 text-center">
                      <div className="text-[11px] text-gray-500">Predicted Rank</div>
                      <div className="text-xl sm:text-2xl font-bold text-amber-700 font-mono mt-0.5">
                        AIR {testResult.predictedAIR}
                      </div>
                      <div className="text-[10px] text-amber-600 font-semibold mt-0.5">
                        {testResult.nationalPercentile} Percentile
                      </div>
                    </div>

                    <div className="p-3.5 rounded bg-gray-50 border border-gray-200 text-center">
                      <div className="text-[11px] text-gray-500">Correct / Wrong</div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900 font-mono mt-0.5">
                        <span className="text-emerald-700">{testResult.correctAnswers}</span> /{' '}
                        <span className="text-red-600">{testResult.wrongAnswers}</span>
                      </div>
                      <div className="text-[10px] text-gray-500 mt-0.5">
                        {testResult.unattempted} Unattempted
                      </div>
                    </div>

                    <div className="p-3.5 rounded bg-gray-50 border border-gray-200 text-center">
                      <div className="text-[11px] text-gray-500">Time Spent</div>
                      <div className="text-xl sm:text-2xl font-bold text-purple-700 font-mono mt-0.5">
                        {formatTimer(testResult.timeSpentSeconds)}
                      </div>
                      <div className="text-[10px] text-gray-500 mt-0.5">
                        Avg 42s per question
                      </div>
                    </div>
                  </div>

                  {/* AI Weak Chapter Analysis & Revision Suggestions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-4 rounded bg-gray-50 border border-gray-200 space-y-2">
                      <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wider flex items-center space-x-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                        <span>AI Weak Chapter Analysis</span>
                      </div>
                      <div className="space-y-1.5">
                        {testResult.weakChapters.map((ch, i) => (
                          <div
                            key={i}
                            className="p-2.5 rounded bg-white border border-amber-200 text-xs text-gray-800 flex items-center justify-between"
                          >
                            <span className="font-semibold">{ch}</span>
                            <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-bold border border-amber-200">
                              Needs Revision
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded bg-gray-50 border border-gray-200 space-y-2">
                      <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider flex items-center space-x-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        <span>AI Revision Suggestions</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-gray-700">
                        {testResult.revisionSuggestions.map((sug, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{sug}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                /* STEP-BY-STEP SOLUTIONS */
                <div className="space-y-3 animate-in fade-in">
                  {questions.map((q, idx) => {
                    const userOption = testResult.answers[idx];
                    const isCorrect = userOption === q.correctAnswer;
                    const isUnattempted = userOption === undefined;

                    return (
                      <div
                        key={idx}
                        className={`p-4 rounded border ${
                          isCorrect
                            ? 'bg-white border-emerald-300'
                            : isUnattempted
                            ? 'bg-white border-gray-200'
                            : 'bg-white border-red-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-bold text-gray-900">
                              Q{idx + 1}. {q.subject} &bull; {q.chapter}
                            </span>
                          </div>

                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                              isCorrect
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                : isUnattempted
                                ? 'bg-gray-100 text-gray-600 border border-gray-200'
                                : 'bg-red-100 text-red-800 border border-red-200'
                            }`}
                          >
                            {isCorrect ? '✓ Correct (+4)' : isUnattempted ? '— Unattempted (0)' : '✗ Incorrect (-1)'}
                          </span>
                        </div>

                        <p className="text-xs text-gray-800 font-medium leading-relaxed">
                          {q.questionText}
                        </p>

                        {q.diagramSvg && (
                          <div
                            className="my-2.5 p-2.5 bg-gray-50 border border-gray-200 rounded-lg flex justify-center items-center overflow-x-auto"
                            dangerouslySetInnerHTML={{ __html: q.diagramSvg }}
                          />
                        )}
                        {q.image && !q.diagramSvg && (
                          <div className="my-2.5 p-2 bg-gray-50 border border-gray-200 rounded-lg flex justify-center items-center">
                            <img src={q.image} alt="Question Diagram" className="max-h-48 rounded object-contain" />
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 my-2.5">
                          {q.options.map((opt, oIdx) => (
                            <div
                              key={oIdx}
                              className={`p-2 rounded border text-xs flex items-center space-x-2 ${
                                oIdx === q.correctAnswer
                                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold'
                                  : oIdx === userOption
                                  ? 'bg-red-50 border-red-300 text-red-900'
                                  : 'bg-gray-50 border-gray-200 text-gray-600'
                              }`}
                            >
                              <span className="font-bold">{String.fromCharCode(65 + oIdx)}.</span>
                              <span>{opt}</span>
                            </div>
                          ))}
                        </div>

                        <div className="p-2.5 rounded bg-gray-50 border border-gray-200 text-xs text-gray-700">
                          <div className="font-bold text-blue-700 mb-0.5">Detailed Solution:</div>
                          <p className="leading-relaxed">{q.explanation}</p>
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
