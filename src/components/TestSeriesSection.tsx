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
  FileText,
  SlidersHorizontal,
  Sparkles,
  Atom,
  Dna,
  Bell,
  Check,
  Phone,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { TestItem, TestCategory } from '../types';
import { downloadTestPaperPDF } from '../utils/pdfDownloader';
import { SundayTestChapterModal, SundayChapterSelection } from './SundayTestChapterModal';

interface TestSeriesSectionProps {
  testItems: TestItem[];
  onStartTest: (test: TestItem, selectedChapters?: SundayChapterSelection) => void;
}

export const TestSeriesSection: React.FC<TestSeriesSectionProps> = ({
  testItems,
  onStartTest
}) => {
  const [isChapterModalOpen, setIsChapterModalOpen] = useState(false);
  const [targetSundayTest, setTargetSundayTest] = useState<TestItem | null>(null);
  const [reminderSetFor, setReminderSetFor] = useState<string | null>(null);

  const enrolledStudent = (() => {
    try {
      const raw = localStorage.getItem('neet_enrolled_student');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  })();

  const studentPhone = enrolledStudent?.studentPhone || '9876543210';
  const parentPhone = enrolledStudent?.parentPhone || '9876543211';
  const parentName = enrolledStudent?.parentName || 'Parent / Guardian';

  const today = new Date();
  const isSundayToday = today.getDay() === 0; // 0 = Sunday

  // Scheduled Sunday Mocks (Clean, uncluttered, dynamically live on Sunday only)
  const scheduledSundays = [
    {
      id: 'test-sunday-01',
      dateStr: '2026-09-06',
      title: 'Sunday Mock 01: All-India Comprehensive PCB Test (180 Marks)',
      description: 'Physics (45 Marks: Gravitation & Mechanics) + Chemistry (45 Marks: Bonding & Atomic Structure) + Biology (45 Marks: Genetics & Cell Biology)',
      physicsChapters: ['Gravitation', 'Units, Dimensions', 'Vectors'],
      chemistryChapters: ['Chemical Bonding', 'Structure of Atom'],
      biologyChapters: ['Cell: The Unit of Life', 'Molecular Basis of Inheritance'],
      isLiveToday: isSundayToday
    },
    {
      id: 'test-sunday-02',
      dateStr: '2026-09-13',
      title: 'Sunday Mock 02: All-India High-Yield PCB Mock (180 Marks)',
      description: 'Physics (45 Marks: Electrostatics & Current) + Chemistry (45 Marks: Thermodynamics & Solutions) + Biology (45 Marks: Human & Plant Physiology)',
      physicsChapters: ['Electrostatics', 'Current Electricity'],
      chemistryChapters: ['Thermodynamics', 'Solutions'],
      biologyChapters: ['Photosynthesis in Higher Plants', 'Respiration in Plants'],
      isLiveToday: false
    },
    {
      id: 'test-sunday-03',
      dateStr: '2026-09-20',
      title: 'Sunday Mock 03: All-India Rank Booster PCB Mock (180 Marks)',
      description: 'Physics (45 Marks: Magnetism & Modern Physics) + Chemistry (45 Marks: Equilibrium & Kinetics) + Biology (45 Marks: Reproduction & Ecology)',
      physicsChapters: ['Magnetism', 'Modern Physics'],
      chemistryChapters: ['Equilibrium', 'Chemical Kinetics'],
      biologyChapters: ['Principles of Inheritance & Variation', 'Ecology & Environment'],
      isLiveToday: false
    },
    {
      id: 'test-sunday-04',
      dateStr: '2026-09-27',
      title: 'Sunday Mock 04: Grand Pre-NEET All-India Mock (180 Marks)',
      description: 'Full Syllabus Simulation &bull; Physics 45 Marks + Chemistry 45 Marks + Biology 45 Marks = 180 Marks Total',
      physicsChapters: ['Full Physics Syllabus'],
      chemistryChapters: ['Full Chemistry Syllabus'],
      biologyChapters: ['Full Biology Syllabus'],
      isLiveToday: false
    }
  ];

  const handleOpenCustomizeSunday = (mockItem: any) => {
    const baseTest = testItems.find(t => t.id === mockItem.id) || testItems[0];
    setTargetSundayTest({
      ...baseTest,
      id: mockItem.id,
      title: mockItem.title,
      syllabus: mockItem.description
    });
    setIsChapterModalOpen(true);
  };

  const handleSetReminder = (testTitle: string, date: string) => {
    setReminderSetFor(testTitle);
    setTimeout(() => {
      setReminderSetFor(null);
    }, 4500);
  };

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50/50 border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider mb-2 shadow-xs">
              <Zap className="w-3.5 h-3.5 text-amber-300" /> NeetCbt All-India Sunday Test Series
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              1. Scheduled Sunday All-India Test Series (180 Marks PCB)
            </h1>
            <p className="mt-1 text-xs text-slate-600 max-w-3xl leading-relaxed">
              Standard <strong>180 Questions &bull; 180 Minutes (3.0 Hours) &bull; 180 Marks (Physics 45, Chemistry 45, Biology 45)</strong> mock tests. Unlocks on Sundays with automated parent/student WhatsApp & SMS reminders, chapter liberty, and eligible medical college predictors.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <button
              onClick={() => handleOpenCustomizeSunday(scheduledSundays[0])}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold shadow-md hover:shadow-lg transition flex items-center space-x-1.5 cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4 text-cyan-300" />
              <span>Customize PCB Chapters</span>
            </button>
          </div>
        </div>

        {/* High Density Metric Cards */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Pattern & Timing</div>
            <div className="text-xl font-bold text-slate-900 mt-0.5">180 Mins / 180 Qs</div>
            <div className="text-[10px] text-blue-700 font-semibold mt-0.5 font-mono">180 Total Marks (+1/-0.25)</div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Physics Section</div>
            <div className="text-xl font-bold text-slate-900 mt-0.5">45 Marks (45 Qs)</div>
            <div className="text-[10px] text-emerald-600 font-semibold mt-0.5 font-mono">Formulas & Numericals</div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Chemistry Section</div>
            <div className="text-xl font-bold text-slate-900 mt-0.5">45 Marks (45 Qs)</div>
            <div className="text-[10px] text-amber-600 font-semibold mt-0.5 font-mono">Physical, Inorg, Organic</div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Biology Section</div>
            <div className="text-xl font-bold text-slate-900 mt-0.5">45 Marks (90 Qs)</div>
            <div className="text-[10px] text-purple-600 font-semibold mt-0.5 font-mono">Botany & Zoology Core</div>
          </div>
        </div>
      </div>

      {/* REMINDER SUCCESS TOAST */}
      {reminderSetFor && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-start space-x-3 shadow-md animate-in slide-in-from-top-2 duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-0.5 text-xs">
            <div className="font-bold text-emerald-900">
              🔔 Automated Sunday Test Reminder Activated!
            </div>
            <p className="text-emerald-800">
              SMS and WhatsApp alerts will be dispatched on Sunday at <strong>8:00 AM</strong> to Parent <strong>{parentName} (+91 {parentPhone})</strong> and Candidate <strong>(+91 {studentPhone})</strong>.
            </p>
          </div>
        </div>
      )}

      {/* SCHEDULED SUNDAYS CALENDAR LIST (Clean & Uncluttered) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-blue-600" /> Official Sunday Test Calendar & Schedule
          </h2>
          <span className="text-xs font-mono font-semibold text-slate-500">
            Sunday-to-Sunday All-India Ranking
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3.5">
          {scheduledSundays.map((mock, idx) => (
            <div
              key={mock.id}
              className={`p-5 rounded-2xl border transition hover:shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                mock.isLiveToday
                  ? 'bg-gradient-to-br from-blue-50/70 via-white to-cyan-50/40 border-blue-400 shadow-sm'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase font-mono tracking-wider flex items-center gap-1 ${
                      mock.isLiveToday
                        ? 'bg-rose-600 text-white animate-pulse'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {mock.isLiveToday ? '🔴 LIVE TODAY (SUNDAY)' : `📅 ${mock.dateStr}`}
                  </span>

                  <span className="text-xs font-bold font-mono text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-lg">
                    180 Marks &bull; 180 Mins &bull; 180 Questions (PCB)
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {mock.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {mock.description}
                  </p>
                </div>

                {/* Subject Distribution Badges */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 text-[11px] font-medium border border-blue-200">
                    ⚡ Physics: 45 Marks
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-medium border border-emerald-200">
                    🧪 Chemistry: 45 Marks
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 text-[11px] font-medium border border-purple-200">
                    🧬 Biology: 45 Marks (90 Qs)
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 self-stretch md:self-auto shrink-0">
                <button
                  onClick={() => handleSetReminder(mock.title, mock.dateStr)}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-amber-50 hover:text-amber-900 text-slate-700 text-xs font-semibold border border-slate-200 flex items-center space-x-1.5 transition cursor-pointer"
                  title="Notify Student & Parent on WhatsApp/SMS"
                >
                  <Bell className="w-3.5 h-3.5 text-amber-600" />
                  <span>Notify Parent / SMS</span>
                </button>

                <button
                  onClick={() => handleOpenCustomizeSunday(mock)}
                  className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold border border-slate-200 transition cursor-pointer"
                >
                  Choose Chapters
                </button>

                <button
                  onClick={() => handleOpenCustomizeSunday(mock)}
                  className={`px-5 py-2 rounded-xl text-white text-xs font-bold shadow-md transition flex items-center space-x-1.5 cursor-pointer ${
                    mock.isLiveToday
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-blue-500/20'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{mock.isLiveToday ? 'Start Live Sunday Test' : 'Take Practice Test'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter Selection Modal */}
      {isChapterModalOpen && (
        <SundayTestChapterModal
          initialTest={targetSundayTest}
          onClose={() => setIsChapterModalOpen(false)}
          onLaunchSundayTest={(test, selectedChapters) => {
            setIsChapterModalOpen(false);
            onStartTest(test, selectedChapters);
          }}
        />
      )}
    </div>
  );
};
