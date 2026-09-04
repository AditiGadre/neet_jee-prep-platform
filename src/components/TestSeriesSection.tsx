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
  Play,
  Download,
  FileText
} from 'lucide-react';
import { TestItem, TestCategory } from '../types';
import { downloadTestPaperPDF } from '../utils/pdfDownloader';

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

  const sundayTests = testItems.filter(t => t.id.startsWith('test-sunday-') || t.category === 'neet_mock' || !!t.scheduledDate);
  const biologyTests = testItems.filter(t => (t.title.toLowerCase().includes('biology') || t.syllabus.toLowerCase().includes('biology') || t.id.includes('bio') || t.id.startsWith('ft-bio-')) && !t.id.startsWith('test-sunday-'));
  const chemistryTests = testItems.filter(t => t.title.toLowerCase().includes('chemistry') || t.syllabus.toLowerCase().includes('chemistry') || t.id.includes('chem'));
  const physicsTests = testItems.filter(t => t.title.toLowerCase().includes('physics') || t.syllabus.toLowerCase().includes('physics') || t.id.includes('phy') || t.id.includes('vector') || t.id.includes('motion') || t.id.includes('gravitation') || t.id.includes('electrostatics') || t.id.includes('thermodynamics') || t.id.includes('units'));

  const subjects = [
    { id: 'all', label: '🌟 All Tests', count: testItems.length },
    { id: 'sunday', label: '📅 Sunday Scheduled Mocks (45 Qs)', count: sundayTests.length },
    { id: 'biology', label: '🧬 Biology Tests (45 Qs)', count: biologyTests.length },
    { id: 'chemistry', label: '🧪 Chemistry Tests (45 Qs)', count: chemistryTests.length },
    { id: 'physics', label: '⚡ Physics Tests (45 Qs)', count: physicsTests.length }
  ];

  const categories = [
    { id: 'all', label: 'All Test Series' },
    { id: 'neet_mock', label: 'Sunday / NEET Mock' },
    { id: 'minor', label: 'Chapterwise Minor Test (45 Qs)' },
    { id: 'major', label: 'Major Full Mock' },
    { id: 'part', label: 'Part Syllabus Unit Test' }
  ];

  const filteredTests = testItems.filter(test => {
    const matchesCategory = selectedCategory === 'all' || test.category === selectedCategory;
    
    let matchesSubject = true;
    if (selectedSubject === 'sunday') {
      matchesSubject = test.id.startsWith('test-sunday-') || test.category === 'neet_mock' || !!test.scheduledDate;
    } else if (selectedSubject === 'chemistry') {
      matchesSubject = test.title.toLowerCase().includes('chemistry') || 
                       test.syllabus.toLowerCase().includes('chemistry') || 
                       test.id.includes('chem');
    } else if (selectedSubject === 'biology') {
      matchesSubject = (test.title.toLowerCase().includes('biology') || 
                       test.syllabus.toLowerCase().includes('biology') || 
                       test.id.includes('bio') || test.id.startsWith('ft-bio-')) && !test.id.startsWith('test-sunday-');
    } else if (selectedSubject === 'physics') {
      matchesSubject = test.title.toLowerCase().includes('physics') || 
                       test.syllabus.toLowerCase().includes('physics') ||
                       test.id.includes('phy') ||
                       test.id.includes('vector') ||
                       test.id.includes('motion') ||
                       test.id.includes('gravitation') ||
                       test.id.includes('electrostatics') ||
                       test.id.includes('thermodynamics') ||
                       test.id.includes('units');
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
              <Zap className="w-3 h-3 text-blue-600" /> Standard 45-Question Speed CBT Engine (15 Minutes)
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              1. Test Series & Computer-Based Tests (CBT)
            </h1>
            <p className="mt-1 text-xs text-gray-600 max-w-3xl">
              Strictly standard <strong>45 Questions &bull; 15 Minutes (Speed CBT Mode) &bull; 180 Marks (+4/-1)</strong> tests. Features scheduled Sunday-to-Sunday All India Test Series, Class 11 & 12 chapter-wise tests, and downloadable PDF question papers with solutions.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <span className="text-[10px] font-mono uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded font-bold">
              ● {filteredTests.length} Standard Tests Active
            </span>
          </div>
        </div>

        {/* High Density Metric Cards */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded bg-gray-50 border border-gray-200">
            <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Sunday Mock Series</div>
            <div className="text-xl font-bold text-gray-900 mt-0.5">{sundayTests.length} Weekly Mocks</div>
            <div className="text-[10px] text-emerald-600 font-semibold mt-0.5 font-mono">Sunday-to-Sunday Live</div>
          </div>
          <div className="p-3 rounded bg-gray-50 border border-gray-200">
            <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Speed Test Format</div>
            <div className="text-xl font-bold text-blue-700 mt-0.5">45 Qs / 15 Mins</div>
            <div className="text-[10px] text-blue-600 font-semibold mt-0.5 font-mono">180 Marks (+4 / -1)</div>
          </div>
          <div className="p-3 rounded bg-gray-50 border border-gray-200">
            <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Question Bank</div>
            <div className="text-xl font-bold text-purple-700 mt-0.5">All Chapters</div>
            <div className="text-[10px] text-purple-600 font-semibold mt-0.5 font-mono">100% NCERT Verified</div>
          </div>
          <div className="p-3 rounded bg-gray-50 border border-gray-200">
            <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Offline PDFs</div>
            <div className="text-xl font-bold text-amber-700 mt-0.5">Instant Download</div>
            <div className="text-[10px] text-amber-600 font-semibold mt-0.5 font-mono">Papers, Keys & Scorecards</div>
          </div>
        </div>
      </div>

      {/* SUNDAY-TO-SUNDAY SCHEDULED TEST HIGHLIGHT */}
      {selectedSubject === 'all' || selectedSubject === 'sunday' ? (
        <div className="bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/80 border border-blue-200 rounded-lg p-4 sm:p-5 shadow-xs space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-100 pb-3">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-bold text-gray-900">
                  📅 All India Sunday-to-Sunday Scheduled Test Series (45 Questions Each)
                </h2>
                <p className="text-xs text-gray-600">
                  Weekly high-stakes mock tests scheduled every Sunday to track All India Percentile & Weak Topics.
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono font-bold bg-blue-100 text-blue-800 px-2.5 py-1 rounded border border-blue-300 self-start sm:self-auto">
              Every Sunday &bull; 15 Mins Speed CBT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
            {sundayTests.slice(0, 6).map((test, sIdx) => (
              <div
                key={test.id}
                className="rounded-lg bg-white border border-blue-200 p-3.5 flex flex-col justify-between hover:border-blue-400 hover:shadow-xs transition-all space-y-2.5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-mono">
                      {test.scheduledDate ? `Sunday: ${test.scheduledDate}` : `Sunday Mock #${sIdx + 1}`}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                      Live CBT
                    </span>
                  </div>

                  <h3 className="text-xs font-bold text-gray-900 mt-1.5 leading-snug line-clamp-2">
                    {test.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">
                    {test.syllabus}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <div className="text-[11px] text-gray-600 font-mono font-semibold">
                    45 Qs &bull; 15m &bull; 180 M
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <button
                      onClick={() => downloadTestPaperPDF(test, true)}
                      title="Download Question Paper & Solution PDF"
                      className="p-1.5 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs border border-gray-200 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onStartTest(test)}
                      className="px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center space-x-1 shadow-xs transition-colors"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Attempt Test</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* Subject Filter Bar */}
      <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
        <div className="text-xs font-bold text-gray-700 flex items-center gap-1.5 uppercase tracking-wider">
          <Filter className="w-3.5 h-3.5 text-blue-600" />
          <span>Filter Subject:</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {subjects.map(s => (
            <button
              key={s.id}
              onClick={() => setSelectedSubject(s.id)}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                selectedSubject === s.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {s.label} ({s.count})
            </button>
          ))}
        </div>
      </div>

      {/* Category Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-gray-900 text-white shadow-xs'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="w-full sm:w-72">
          <input
            type="text"
            placeholder="Search test title or chapter..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full px-3 py-1.5 rounded bg-white border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 shadow-xs"
          />
        </div>
      </div>

      {/* All Standard 45-Question Test Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredTests.map(test => (
          <div
            key={test.id}
            className="rounded-lg bg-white border border-gray-200 p-4 flex flex-col justify-between hover:border-gray-300 hover:shadow-xs transition-colors space-y-3"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-mono uppercase">
                  {test.category.replace('_', ' ')} &bull; {test.difficulty}
                </span>
                <span className="text-[11px] text-gray-500 font-mono font-semibold">
                  {test.totalQuestions} Qs &bull; {test.durationMinutes} Mins
                </span>
              </div>

              <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                {test.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                {test.syllabus}
              </p>

              <div className="mt-2.5 space-y-1">
                {test.features.slice(0, 2).map((f, i) => (
                  <div key={i} className="text-[11px] text-gray-600 flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" />
                    <span className="truncate">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between">
              <div className="text-[11px] text-gray-500 font-mono">
                {test.totalMarks} Marks (+4/-1)
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => downloadTestPaperPDF(test, true)}
                  title="Download Question Paper & Solution PDF"
                  className="px-2 py-1.5 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold border border-gray-200 flex items-center space-x-1 shadow-xs transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF</span>
                </button>
                <button
                  onClick={() => onStartTest(test)}
                  className="px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center space-x-1 shadow-xs transition-colors active:scale-95"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Start CBT</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
