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
  const [searchQuery, setSearchQuery] = useState<string>('');

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
    const matchesQuery =
      test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.syllabus.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-4">
      {/* Header Banner & Stats */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold uppercase tracking-wider mb-1.5">
              <Zap className="w-3 h-3 text-blue-600" /> Official CBT Practice Engine
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              1. Test Series & Computer-Based Tests (CBT)
            </h1>
            <p className="mt-1 text-xs text-gray-600 max-w-3xl">
              Engineered for top rankers with chapter-wise minor tests, multi-unit major test series, scheduled part-syllabus tests, full grand simulations, and official NEET mock papers.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <span className="text-[10px] font-mono uppercase bg-green-50 text-green-700 border border-green-200 px-2 py-1 rounded font-bold">
              ● CBT Matrix Active
            </span>
          </div>
        </div>

        {/* High Density Metric Cards */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded bg-gray-50 border border-gray-200">
            <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Curated MCQs</div>
            <div className="text-xl font-bold text-gray-900 mt-0.5">100,000+</div>
            <div className="text-[10px] text-green-600 font-semibold mt-0.5 font-mono">100% NCERT Verified</div>
          </div>
          <div className="p-3 rounded bg-gray-50 border border-gray-200">
            <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">CBT Interface</div>
            <div className="text-xl font-bold text-gray-900 mt-0.5">100% CBT</div>
            <div className="text-[10px] text-blue-600 font-semibold mt-0.5 font-mono">Real Timer & Grid</div>
          </div>
          <div className="p-3 rounded bg-gray-50 border border-gray-200">
            <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">AIR Predictor</div>
            <div className="text-xl font-bold text-gray-900 mt-0.5">AI Engine</div>
            <div className="text-[10px] text-purple-600 font-semibold mt-0.5 font-mono">Weak Areas Tagged</div>
          </div>
          <div className="p-3 rounded bg-gray-50 border border-gray-200">
            <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Instant Feedback</div>
            <div className="text-xl font-bold text-gray-900 mt-0.5">0.02s</div>
            <div className="text-[10px] text-amber-600 font-semibold mt-0.5 font-mono">Detailed Step-by-Step</div>
          </div>
        </div>
      </div>

      {/* 5 Core Document Categories Grid Overview */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center space-x-1.5">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Curriculum Test Breakdown (All 5 Pillars)</span>
          </h2>
          <span className="text-[10px] text-gray-400 font-mono">Click card to quick filter</span>
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
                  {data.bullets.slice(0, 3).map((bullet, idx) => (
                    <li key={idx} className="text-[11px] text-gray-600 flex items-start space-x-1">
                      <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0 mt-0.5" />
                      <span className="truncate">{bullet}</span>
                    </li>
                  ))}
                  {data.bullets.length > 3 && (
                    <li className="text-[10px] text-gray-400 font-mono">+{data.bullets.length - 3} more specs</li>
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filter Tabs & Search */}
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
            placeholder="Filter by chapter or subject..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full sm:w-60 pl-3 pr-3 py-1 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Test Series Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredTests.map(test => (
          <div
            key={test.id}
            className="rounded-lg bg-white border border-gray-200 hover:border-gray-300 p-4 shadow-xs transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider bg-gray-100 text-blue-700 border border-gray-200 font-mono">
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
                  <div className="text-xs font-bold text-gray-800">{test.totalQuestions} Qs</div>
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

              {/* Features List from Document */}
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

            {/* Launch Button & Info */}
            <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between">
              {test.scheduledDate ? (
                <div className="text-xs text-gray-600 flex items-center space-x-1 font-mono">
                  <Calendar className="w-3 h-3 text-blue-600" />
                  <span>Date: <strong className="text-gray-900">{test.scheduledDate}</strong></span>
                </div>
              ) : (
                <div className="text-xs text-gray-600 flex items-center space-x-1 font-mono">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  <span>Avg: <strong className="text-gray-900">{test.avgScore}/{test.totalMarks}</strong></span>
                </div>
              )}

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
    </div>
  );
};
