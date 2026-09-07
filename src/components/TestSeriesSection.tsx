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
  ShieldCheck,
  Lock,
  Unlock,
  GraduationCap,
  X
} from 'lucide-react';
import { TestItem, TestCategory } from '../types';
import { downloadTestPaperPDF } from '../utils/pdfDownloader';
import { SundayTestChapterModal, SundayChapterSelection } from './SundayTestChapterModal';

interface TestSeriesSectionProps {
  testItems: TestItem[];
  targetYear?: '2026' | '2027' | '2028';
  onStartTest: (test: TestItem, selectedChapters?: SundayChapterSelection) => void;
}

export const TestSeriesSection: React.FC<TestSeriesSectionProps> = ({
  testItems,
  targetYear = '2026',
  onStartTest
}) => {
  const [activeBatch, setActiveBatch] = useState<'12th' | '11th' | 'repeater'>('12th');
  const [isChapterModalOpen, setIsChapterModalOpen] = useState(false);
  const [targetSundayTest, setTargetSundayTest] = useState<TestItem | null>(null);
  const [reminderSetFor, setReminderSetFor] = useState<string | null>(null);
  const [showCoursePurchaseModal, setShowCoursePurchaseModal] = useState(false);
  const [pendingTestToStart, setPendingTestToStart] = useState<any | null>(null);

  // Course Access State
  const [isCoursePurchased, setIsCoursePurchased] = useState<boolean>(() => {
    try {
      return localStorage.getItem('neet_course_purchased') === 'true';
    } catch {
      return false;
    }
  });

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
  const isSundayToday = today.getDay() === 0;

  // 12th Batch Sunday Tests
  const batch12thSundays = [
    {
      id: 'test-sunday-12th-01',
      dateStr: '2026-09-06',
      title: '12th Batch Mock 01: Class 12 Core PCB All-India Test (180 Marks)',
      description: 'Physics (45 Marks: Electrostatics & Current) + Chemistry (45 Marks: Solutions & Electrochemistry) + Biology (45 Marks: Reproduction & Genetics)',
      physicsChapters: ['Electrostatics', 'Electrostatic Potential and Capacitance', 'Current Electricity'],
      chemistryChapters: ['Solutions', 'Electrochemistry', 'Chemical Kinetics'],
      biologyChapters: ['Sexual Reproduction in Flowering Plants', 'Human Reproduction', 'Principles of Inheritance and Variation', 'Molecular Basis of Inheritance'],
      isLiveToday: isSundayToday
    },
    {
      id: 'test-sunday-12th-02',
      dateStr: '2026-09-13',
      title: '12th Batch Mock 02: Magnetism, Coordination & Biotechnology (180 Marks)',
      description: 'Physics (45 Marks: Magnetism & EMI) + Chemistry (45 Marks: Coordination Compounds & Haloalkanes) + Biology (45 Marks: Biotechnology Principles & Applications)',
      physicsChapters: ['Magnetism and Matter', 'Electromagnetic Induction', 'Alternating Current'],
      chemistryChapters: ['Coordination Compounds', 'Haloalkanes and Haloarenes', 'Alcohols, Phenols and Ethers'],
      biologyChapters: ['Biotechnology: Principles and Processes', 'Biotechnology and its Applications', 'Human Health and Disease'],
      isLiveToday: false
    },
    {
      id: 'test-sunday-12th-03',
      dateStr: '2026-09-20',
      title: '12th Batch Mock 03: Optics, Modern Physics & Organic Chemistry (180 Marks)',
      description: 'Physics (45 Marks: Ray Optics & Modern Physics) + Chemistry (45 Marks: Carbonyl Compounds & Amines) + Biology (45 Marks: Ecology & Environment)',
      physicsChapters: ['Ray Optics and Optical Instruments', 'Wave Optics', 'Dual Nature of Radiation and Matter', 'Atoms', 'Nuclei', 'Semiconductors'],
      chemistryChapters: ['Aldehydes, Ketones and Carboxylic Acids', 'Amines', 'Biomolecules'],
      biologyChapters: ['Organisms and Populations', 'Ecosystem', 'Biodiversity and Conservation'],
      isLiveToday: false
    }
  ];

  // 11th Batch Sunday Tests
  const batch11thSundays = [
    {
      id: 'test-sunday-11th-01',
      dateStr: '2026-09-06',
      title: '11th Batch Mock 01: Kinematics, Structure of Atom & Cell Biology (180 Marks)',
      description: 'Physics (45 Marks: Units, Vectors & Kinematics) + Chemistry (45 Marks: Atomic Structure & Bonding) + Biology (45 Marks: Cell Unit of Life & Plant Diversity)',
      physicsChapters: ['Units and Measurement', 'Vectors', 'Motion in One Dimension', 'Motion in a Plane'],
      chemistryChapters: ['Some Basic Concepts of Chemistry', 'Structure of Atom', 'Chemical Bonding and Molecular Structure'],
      biologyChapters: ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Cell: The Unit of Life', 'Cell Cycle and Cell Division'],
      isLiveToday: isSundayToday
    },
    {
      id: 'test-sunday-11th-02',
      dateStr: '2026-09-13',
      title: '11th Batch Mock 02: Laws of Motion, Thermodynamics & Biomolecules (180 Marks)',
      description: 'Physics (45 Marks: Laws of Motion, Work Energy) + Chemistry (45 Marks: Thermodynamics & Equilibrium) + Biology (45 Marks: Biomolecules & Plant Physiology)',
      physicsChapters: ['Laws of Motion', 'Work, Energy and Power', 'Gravitation'],
      chemistryChapters: ['Thermodynamics', 'Equilibrium', 'Redox Reactions'],
      biologyChapters: ['Biomolecules', 'Photosynthesis in Higher Plants', 'Respiration in Plants'],
      isLiveToday: false
    },
    {
      id: 'test-sunday-11th-03',
      dateStr: '2026-09-20',
      title: '11th Batch Mock 03: Fluids, Waves & Human Physiology (180 Marks)',
      description: 'Physics (45 Marks: Fluid Mechanics, SHM & Waves) + Chemistry (45 Marks: Hydrocarbons & Periodic Table) + Biology (45 Marks: Complete Human Physiology)',
      physicsChapters: ['Mechanical Properties of Fluids', 'Simple Harmonic Motion', 'Waves and Sound'],
      chemistryChapters: ['Classification of Elements and Periodicity', 'Hydrocarbons', 'Organic Chemistry - Principles'],
      biologyChapters: ['Breathing and Exchange of Gases', 'Body Fluids and Circulation', 'Excretory Products', 'Locomotion and Movement', 'Neural Control'],
      isLiveToday: false
    }
  ];

  // Repeater / Dropper Batch Sunday Tests
  const repeaterSundays = [
    {
      id: 'test-sunday-rep-01',
      dateStr: '2026-09-06',
      title: 'Repeater Batch Mock 01: Rapid Full-Course PCB All-India Simulation (180 Marks)',
      description: 'Full 11th + 12th High-Yield Weightage &bull; Physics 45 Qs + Chemistry 45 Qs + Biology 90 Qs = 180 Marks Total',
      physicsChapters: ['Full Physics Syllabus (Class 11 + 12)'],
      chemistryChapters: ['Full Chemistry Syllabus (Physical, Organic, Inorganic)'],
      biologyChapters: ['Full Biology Syllabus (Botany + Zoology)'],
      isLiveToday: isSundayToday
    },
    {
      id: 'test-sunday-rep-02',
      dateStr: '2026-09-13',
      title: 'Repeater Batch Mock 02: High-Difficulty All-India Rank Challenger (180 Marks)',
      description: 'Challenging Multi-Concept Numerical & Analytical Test &bull; Physics 45 Qs + Chemistry 45 Qs + Biology 90 Qs',
      physicsChapters: ['Mechanics, Electrodynamics & Modern Physics'],
      chemistryChapters: ['Physical Chemistry Numerical Bank & Reaction Mechanisms'],
      biologyChapters: ['Genetics, Molecular Biology, Biotechnology & Physiology'],
      isLiveToday: false
    },
    {
      id: 'test-sunday-rep-03',
      dateStr: '2026-09-20',
      title: 'Repeater Batch Mock 03: Pre-NEET Grand National Mock (180 Marks)',
      description: 'NTA Standard Exact Mirror Test &bull; All India Rank Prediction & Government College Seat Probability',
      physicsChapters: ['Complete NCERT Physics'],
      chemistryChapters: ['Complete NCERT Chemistry'],
      biologyChapters: ['Complete NCERT Biology'],
      isLiveToday: false
    }
  ];

  const currentSundays = activeBatch === '12th'
    ? batch12thSundays
    : activeBatch === '11th'
    ? batch11thSundays
    : repeaterSundays;

  const handleStartSundayTestClick = (mockItem: any) => {
    if (!isCoursePurchased) {
      setPendingTestToStart(mockItem);
      setShowCoursePurchaseModal(true);
      return;
    }

    const baseTest = testItems.find(t => t.id === mockItem.id) || testItems[0];
    setTargetSundayTest({
      ...baseTest,
      id: mockItem.id,
      title: mockItem.title,
      syllabus: mockItem.description
    });
    setIsChapterModalOpen(true);
  };

  const handleUnlockCoursePass = () => {
    localStorage.setItem('neet_course_purchased', 'true');
    setIsCoursePurchased(true);
    setShowCoursePurchaseModal(false);

    if (pendingTestToStart) {
      const mockItem = pendingTestToStart;
      setPendingTestToStart(null);
      const baseTest = testItems.find(t => t.id === mockItem.id) || testItems[0];
      setTargetSundayTest({
        ...baseTest,
        id: mockItem.id,
        title: mockItem.title,
        syllabus: mockItem.description
      });
      setIsChapterModalOpen(true);
    }
  };

  const handleSetReminder = (testTitle: string, _date: string) => {
    setReminderSetFor(testTitle);
    setTimeout(() => {
      setReminderSetFor(null);
    }, 4500);
  };

  return (
    <div className="space-y-4">
      {/* 3 Dedicated Batch Tabs: 12th Batch, 11th Batch, Repeater Batch */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-2 sm:p-2.5 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setActiveBatch('12th')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 cursor-pointer ${
              activeBatch === '12th'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>12th Batch</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-current">Board + NEET</span>
          </button>

          <button
            onClick={() => setActiveBatch('11th')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 cursor-pointer ${
              activeBatch === '11th'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Atom className="w-4 h-4" />
            <span>11th Batch</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-current">Foundation</span>
          </button>

          <button
            onClick={() => setActiveBatch('repeater')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 cursor-pointer ${
              activeBatch === 'repeater'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Zap className="w-4 h-4 text-amber-300" />
            <span>Repeater Batch</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-current">Dropper Fast-Track</span>
          </button>
        </div>

        {/* Course Purchase Pass Status Badge */}
        <div className="flex items-center space-x-2">
          {isCoursePurchased ? (
            <span className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-bold flex items-center space-x-1.5 font-mono">
              <Unlock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sunday Test Access Active</span>
            </span>
          ) : (
            <button
              onClick={() => setShowCoursePurchaseModal(true)}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-xs font-bold shadow-xs transition flex items-center space-x-1.5 cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Unlock Sunday Tests</span>
            </button>
          )}
        </div>
      </div>

      {/* Header Banner for Current Batch */}
      <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50/50 border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider mb-2 shadow-xs">
              <Zap className="w-3.5 h-3.5 text-amber-300" /> NeetCbt All-India Sunday Test Series &bull; {activeBatch === '12th' ? '12th Batch' : activeBatch === '11th' ? '11th Batch' : 'Repeater Batch'} (Target {targetYear})
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {activeBatch === '12th' ? 'Class 12th Sunday All-India Test Series' : activeBatch === '11th' ? 'Class 11th Foundation Sunday All-India Test Series' : 'Repeater Dropper Sunday Grand Mock Series'}
            </h1>
            <p className="mt-1 text-xs text-slate-600 max-w-3xl leading-relaxed">
              Standard <strong>180 Questions &bull; 180 Minutes (3.0 Hours) &bull; 180 Marks (Physics 45, Chemistry 45, Biology 90)</strong> mock tests. Unlocks after course enrollment with automated parent/student WhatsApp & SMS reminders, chapter customization liberty, and national rank prediction.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <button
              onClick={() => handleStartSundayTestClick(currentSundays[0])}
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

      {/* SCHEDULED SUNDAYS CALENDAR LIST */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-blue-600" /> {activeBatch === '12th' ? '12th Batch Schedule' : activeBatch === '11th' ? '11th Batch Schedule' : 'Repeater Batch Schedule'}
          </h2>
          <span className="text-xs font-mono font-semibold text-slate-500">
            Sunday-to-Sunday All-India Ranking
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3.5">
          {currentSundays.map(mock => (
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

                  {!isCoursePurchased && (
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-lg flex items-center gap-1">
                      <Lock className="w-3 h-3" /> Course Purchase Required
                    </span>
                  )}
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
                  onClick={() => handleStartSundayTestClick(mock)}
                  className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold border border-slate-200 transition cursor-pointer"
                >
                  Choose Chapters
                </button>

                <button
                  onClick={() => handleStartSundayTestClick(mock)}
                  className={`px-5 py-2 rounded-xl text-white text-xs font-bold shadow-md transition flex items-center space-x-1.5 cursor-pointer ${
                    mock.isLiveToday
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-blue-500/20'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{mock.isLiveToday ? 'Start Live Sunday Test' : 'Start Test'}</span>
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

      {/* Course Purchase & Batch Unlock Modal */}
      {showCoursePurchaseModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-200 text-slate-900">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-700 p-5 text-white flex items-center justify-between">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-900 uppercase font-mono">
                  Official Course Access
                </span>
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Lock className="w-5 h-5 text-amber-300" /> Unlock Sunday All-India Test Series
                </h3>
              </div>
              <button
                onClick={() => setShowCoursePurchaseModal(false)}
                className="p-1.5 rounded-xl hover:bg-white/10 text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                Sunday All-India Mock Tests (180 Questions &bull; 180 Marks &bull; AIR Prediction & Government Medical College Seat Predictor) require an active <strong>{activeBatch === '12th' ? 'Class 12th' : activeBatch === '11th' ? 'Class 11th' : 'Repeater'} NEET {targetYear} Course Pass</strong>.
              </p>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
                <h4 className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-blue-600" /> Included in your Course Access:
                </h4>
                <ul className="text-xs text-blue-950 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Every Sunday 180-Question Mock Test with NTA CBT Engine</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>All-India Rank (AIR) & Medical College Predictor for {targetYear}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Parent SMS / WhatsApp Sunday Test Alerts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Unlimited Test Retakes with zero question exhaustion</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  onClick={handleUnlockCoursePass}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Unlock className="w-4 h-4" />
                  <span>Activate Enrolled Student Course Pass (Instant Unlock)</span>
                </button>

                <button
                  onClick={() => setShowCoursePurchaseModal(false)}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition cursor-pointer"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
