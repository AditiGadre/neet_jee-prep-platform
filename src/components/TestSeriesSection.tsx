import React, { useState } from 'react';
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
  Play
} from 'lucide-react';
import { TestItem, TestCategory } from '../types';

interface TestSeriesSectionProps {
  testItems: TestItem[];
  onStartTest: (test: TestItem) => void;
}

export const TestSeriesSection: React.FC<TestSeriesSectionProps> = ({
  testItems,
  onStartTest
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewingTest, setViewingTest] = useState<TestItem | null>(null);

  const subjects = [
    { id: 'all', label: '🌟 All Subjects', count: testItems.length },
    { id: 'chemistry', label: '🧪 Chemistry (30 Chapters + 5 Mocks)', count: testItems.filter(t => t.title.toLowerCase().includes('chemistry') || t.syllabus.toLowerCase().includes('chemistry') || t.id.includes('chem')).length },
    { id: 'biology', label: '🧬 Biology (All 38 Chapters)', count: testItems.filter(t => t.title.toLowerCase().includes('biology') || t.syllabus.toLowerCase().includes('biology')).length },
    { id: 'physics', label: '⚡ Physics (Mechanics & Electrodynamics)', count: testItems.filter(t => t.title.toLowerCase().includes('vector') || t.title.toLowerCase().includes('dimension') || t.title.toLowerCase().includes('motion') || t.title.toLowerCase().includes('gravitation') || t.title.toLowerCase().includes('electrostatics') || t.title.toLowerCase().includes('magnetism') || t.title.toLowerCase().includes('thermodynamics')).length }
  ];

  const categories = [
    { id: 'all', label: 'All Test Series' },
    { id: 'minor', label: 'Minor Test Series' },
    { id: 'major', label: 'Major Test Series' },
    { id: 'part', label: 'Part Syllabus Test' },
    { id: 'full', label: 'Full Syllabus Test' },
    { id: 'neet_mock', label: 'NEET Mock Test' }
  ];

  const categoryFeaturesMap: Record<string, { title: string; bullets: string[]; tag: string }> = {
    minor: {
      title: 'Minor Test Series',
      tag: 'Chapter & Topic Mastery',
      bullets: [
        'Chapter-wise tests',
        'Topic-wise MCQs',
        'Instant scorecard',
        'Detailed solutions',
        'Time-based practice',
        'Difficulty-wise questions',
        'AI-based performance tracking'
      ]
    },
    major: {
      title: 'Major Test Series',
      tag: 'Multi-Chapter Full Evaluation',
      bullets: [
        'Multi-chapter syllabus',
        'NEET/JEE pattern',
        'National ranking',
        'Negative marking',
        'Detailed analysis',
        'Subject-wise reports',
        'Performance comparison'
      ]
    },
    part: {
      title: 'Part Syllabus Test',
      tag: 'Unit Tests & Calendar',
      bullets: [
        'Physics, Chemistry & Biology unit tests',
        'Scheduled calendar',
        'CBT mode',
        'Rank prediction'
      ]
    },
    full: {
      title: 'Full Syllabus Test',
      tag: 'Real Exam Simulation',
      bullets: [
        'Complete syllabus',
        'Real exam simulation',
        'AIR prediction',
        'Weak chapter analysis',
        'Revision suggestions'
      ]
    },
    neet_mock: {
      title: 'NEET Mock Test',
      tag: 'Latest Exam Pattern',
      bullets: [
        'Latest pattern',
        'Unlimited practice',
        'All India ranking',
        'Instant result',
        'Detailed solutions'
      ]
    }
  };

  const filteredTests = testItems.filter(test => {
    const matchesCategory = selectedCategory === 'all' || test.category === selectedCategory;
    
    let matchesSubject = true;
    if (selectedSubject === 'chemistry') {
      matchesSubject = test.title.toLowerCase().includes('chemistry') || 
                       test.syllabus.toLowerCase().includes('chemistry') || 
                       test.id.includes('chem');
    } else if (selectedSubject === 'biology') {
      matchesSubject = test.title.toLowerCase().includes('biology') || 
                       test.syllabus.toLowerCase().includes('biology') || 
                       test.id.includes('biology');
    } else if (selectedSubject === 'physics') {
      matchesSubject = test.title.toLowerCase().includes('vector') || 
                       test.title.toLowerCase().includes('dimension') || 
                       test.title.toLowerCase().includes('motion') || 
                       test.title.toLowerCase().includes('gravitation') || 
                       test.title.toLowerCase().includes('electrostatics') || 
                       test.title.toLowerCase().includes('magnetism') || 
                       test.title.toLowerCase().includes('thermodynamics') ||
                       test.title.toLowerCase().includes('physics');
    }

    const matchesQuery =
      test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.syllabus.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSubject && matchesQuery;
  });

  return (
    <div className="space-y-4">
      {/* Header Banner & Stats */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold uppercase tracking-wider mb-1.5">
              <Zap className="w-3 h-3 text-blue-600" /> Official CBT Practice Engine & Question Bank
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              1. Test Series & Computer-Based Tests (CBT)
            </h1>
            <p className="mt-1 text-xs text-gray-600 max-w-3xl">
              Engineered for top rankers with 30 NCERT Chemistry Chapterwise Tests, Full Syllabus Mock Tests 1-5, Biology 38 Chapters, Physics Practice, and instant solution reviews.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <span className="text-[10px] font-mono uppercase bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 rounded font-bold border-green-300">
              ● {filteredTests.length} Tests Available
            </span>
          </div>
        </div>

        {/* High Density Metric Cards */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded bg-gray-50 border border-gray-200">
            <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Total Test Series</div>
            <div className="text-xl font-bold text-gray-900 mt-0.5">{testItems.length} Tests</div>
            <div className="text-[10px] text-green-600 font-semibold mt-0.5 font-mono">30 Chemistry + 5 Mocks</div>
          </div>
          <div className="p-3 rounded bg-gray-50 border border-gray-200">
            <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">CBT Interface</div>
            <div className="text-xl font-bold text-gray-900 mt-0.5">100% CBT</div>
            <div className="text-[10px] text-blue-600 font-semibold mt-0.5 font-mono">Real Timer & Grid</div>
          </div>
          <div className="p-3 rounded bg-gray-50 border border-gray-200">
            <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Practice Mode</div>
            <div className="text-xl font-bold text-gray-900 mt-0.5">Instant View</div>
            <div className="text-[10px] text-purple-600 font-semibold mt-0.5 font-mono">Read All Qs & Solutions</div>
          </div>
          <div className="p-3 rounded bg-gray-50 border border-gray-200">
            <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Instant Feedback</div>
            <div className="text-xl font-bold text-gray-900 mt-0.5">0.02s</div>
            <div className="text-[10px] text-amber-600 font-semibold mt-0.5 font-mono">Step-by-Step NCERT</div>
          </div>
        </div>
      </div>

      {/* Subject Filter Bar */}
      <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
        <div className="text-xs font-bold text-gray-700 flex items-center gap-1.5 uppercase tracking-wider">
          <Filter className="w-3.5 h-3.5 text-blue-600" />
          <span>Subject Filter:</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {subjects.map(s => (
            <button
              key={s.id}
              onClick={() => setSelectedSubject(s.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedSubject === s.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {s.label} ({s.count})
            </button>
          ))}
        </div>
      </div>

      {/* 5 Core Document Categories Grid Overview */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center space-x-1.5">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Curriculum Test Breakdown</span>
          </h2>
          <span className="text-[10px] text-gray-400 font-mono">Click card to filter category</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {Object.entries(categoryFeaturesMap).map(([key, data]) => {
            const isCurrent = selectedCategory === key;
            return (
              <div
                key={key}
                onClick={() => setSelectedCategory(selectedCategory === key ? 'all' : key)}
                className={`cursor-pointer p-3 rounded-lg border transition-all ${
                  isCurrent
                    ? 'bg-blue-50/70 border-blue-500 shadow-xs ring-1 ring-blue-500'
                    : 'bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-xs text-gray-900 truncate">{data.title}</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-gray-100 text-gray-600 font-bold uppercase">
                    {key}
                  </span>
                </div>
                <div className="text-[10px] text-blue-700 font-semibold mb-2 truncate">
                  {data.tag}
                </div>
                <ul className="space-y-1">
                  {data.bullets.slice(0, 2).map((bullet, idx) => (
                    <li key={idx} className="text-[11px] text-gray-600 flex items-start space-x-1">
                      <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0 mt-0.5" />
                      <span className="truncate">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Category Pills & Search Bar */}
      <div className="bg-white p-3 rounded-lg border border-gray-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-0.5 custom-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search test by chapter or topic..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full sm:w-64 pl-3 pr-3 py-1 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Test Series Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredTests.map(test => (
          <div
            key={test.id}
            className="rounded-lg bg-white border border-gray-200 hover:border-blue-300 p-4 shadow-xs transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 font-mono">
                  {test.category.replace('_', ' ')}
                </span>
                <span className="text-xs text-gray-500 flex items-center space-x-1 font-mono">
                  <Clock className="w-3 h-3 text-gray-400" />
                  <span>{test.durationMinutes} mins</span>
                </span>
              </div>

              <h3 className="text-sm font-bold text-gray-900">
                {test.title}
              </h3>

              <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                <strong className="text-gray-800">Syllabus:</strong> {test.syllabus}
              </p>

              {/* Badges / Key Specs */}
              <div className="grid grid-cols-3 gap-2 my-3 py-1.5 px-2.5 rounded bg-gray-50 border border-gray-200 text-center font-mono">
                <div>
                  <div className="text-[9px] uppercase text-gray-400 font-semibold">Questions</div>
                  <div className="text-xs font-bold text-gray-800">{test.questions?.length || test.totalQuestions} Qs</div>
                </div>
                <div>
                  <div className="text-[9px] uppercase text-gray-400 font-semibold">Total Marks</div>
                  <div className="text-xs font-bold text-blue-700">{test.totalMarks} M</div>
                </div>
                <div>
                  <div className="text-[9px] uppercase text-gray-400 font-semibold">Marking</div>
                  <div className="text-xs font-bold text-amber-600">+4 / -1</div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-1 mb-3">
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Included Features:</div>
                <div className="flex flex-wrap gap-1">
                  {test.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-700 border border-gray-200"
                    >
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Launch Buttons */}
            <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between gap-2">
              <button
                onClick={() => setViewingTest(test)}
                className="px-3 py-1.5 rounded bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-xs flex items-center space-x-1 transition-all border border-gray-300"
              >
                <span>📖 View All Qs & Answers ({test.questions?.length || test.totalQuestions})</span>
              </button>

              <button
                id={`btn-launch-test-${test.id}`}
                onClick={() => onStartTest(test)}
                className="px-3.5 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center space-x-1.5 transition-all shadow-xs active:scale-95"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>Start CBT Test</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Question & Solution Browser Modal */}
      {viewingTest && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider bg-blue-100 text-blue-800 font-mono">
                  Question Bank & Solutions
                </span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-1">
                  {viewingTest.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {viewingTest.questions?.length || 0} Questions with Verified Answer Keys and Step-by-Step Solutions
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const testToStart = viewingTest;
                    setViewingTest(null);
                    onStartTest(testToStart);
                  }}
                  className="px-3 py-1.5 rounded bg-blue-600 text-white text-xs font-bold flex items-center gap-1 hover:bg-blue-700"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Start as CBT Exam</span>
                </button>
                <button
                  onClick={() => setViewingTest(null)}
                  className="p-1.5 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-bold"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Questions List */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-6 divide-y divide-gray-200">
              {viewingTest.questions && viewingTest.questions.length > 0 ? (
                viewingTest.questions.map((q, idx) => (
                  <div key={q.id || idx} className="pt-4 first:pt-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <span className="px-2 py-0.5 rounded bg-blue-600 text-white text-xs font-bold font-mono">
                        Q{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-600 border border-gray-200">
                        {q.difficulty || 'Medium'}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-gray-900 leading-relaxed">
                      {q.questionText}
                    </p>

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                      {q.options.map((opt, oIdx) => {
                        const isCorrect = oIdx === q.correctAnswer;
                        return (
                          <div
                            key={oIdx}
                            className={`p-2.5 rounded-lg border text-xs flex items-start space-x-2 ${
                              isCorrect
                                ? 'bg-green-50/80 border-green-400 text-green-900 font-semibold'
                                : 'bg-gray-50/50 border-gray-200 text-gray-700'
                            }`}
                          >
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                                isCorrect
                                  ? 'bg-green-600 text-white'
                                  : 'bg-gray-200 text-gray-700'
                              }`}
                            >
                              {String.fromCharCode(65 + oIdx)}
                            </span>
                            <span className="flex-1 pt-0.5">{opt}</span>
                            {isCorrect && (
                              <span className="text-[10px] font-bold text-green-700 px-1.5 py-0.2 rounded bg-green-200 font-mono">
                                Correct Answer
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation Box */}
                    {q.explanation && (
                      <div className="mt-3 p-3 rounded-lg bg-blue-50/60 border border-blue-200 text-xs text-blue-950">
                        <strong className="text-blue-900 font-bold block mb-1">
                          💡 Step-by-Step Solution / Explanation:
                        </strong>
                        <div className="leading-relaxed font-sans">
                          {q.explanation}
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-gray-500">
                  No questions currently loaded for this test item.
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-3 border-t border-gray-200 bg-gray-50 flex items-center justify-between text-xs text-gray-500">
              <span>Showing all {viewingTest.questions?.length || 0} questions & solutions</span>
              <button
                onClick={() => setViewingTest(null)}
                className="px-4 py-1.5 rounded bg-gray-800 text-white font-bold hover:bg-gray-900"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
