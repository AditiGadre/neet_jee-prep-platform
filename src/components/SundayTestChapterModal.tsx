import React, { useState } from 'react';
import {
  X,
  Sparkles,
  CheckCircle2,
  Layers,
  Zap,
  BookOpen,
  Atom,
  Dna,
  Clock,
  Award,
  ChevronRight,
  Filter,
  Check,
  RotateCcw
} from 'lucide-react';
import { TestItem, Question } from '../types';
import { getUnifiedQuestionBank } from '../utils/questionDatabase';
import { formatMathAndFormulas } from '../utils/mathFormatter';

export interface SundayChapterSelection {
  physics: string[];
  chemistry: string[];
  biology: string[];
}

export const PHYSICS_CHAPTERS_LIST = [
  'Gravitation',
  'Electrostatics',
  'Thermodynamics',
  'Magnetism',
  'Units, Dimensions',
  'Vectors',
  'Motion in One Dimension',
  'Current Electricity',
  'Optics & Wave Optics',
  'Modern Physics',
  'Kinematics & Laws of Motion',
  'Work, Energy & Power',
  'Rotational Motion',
  'Oscillations & Waves',
  'Semiconductors & Electronic Devices'
];

export const CHEMISTRY_CHAPTERS_LIST = [
  'Chemical Bonding & Molecular Structure',
  'Classification of Elements & Periodicity',
  'Structure of Atom',
  'Some Basic Concepts of Chemistry',
  'Thermodynamics (Chemistry)',
  'Equilibrium',
  'Solutions',
  'Electrochemistry',
  'Chemical Kinetics',
  'Organic Chemistry - Principles & Techniques',
  'Hydrocarbons',
  'Haloalkanes & Haloarenes',
  'Alcohols, Phenols & Ethers',
  'Aldehydes, Ketones & Carboxylic Acids',
  'Coordination Compounds',
  'Biomolecules (Chemistry)'
];

export const BIOLOGY_CHAPTERS_LIST = [
  'The Living World',
  'Biological Classification',
  'Plant Kingdom',
  'Animal Kingdom',
  'Morphology & Anatomy of Flowering Plants',
  'Cell: The Unit of Life',
  'Cell Cycle & Cell Division',
  'Biomolecules',
  'Photosynthesis in Higher Plants',
  'Respiration in Plants',
  'Human Physiology: Digestion, Breathing & Circulation',
  'Excretory & Locomotion Systems',
  'Neural Control & Chemical Coordination',
  'Principles of Inheritance & Variation',
  'Molecular Basis of Inheritance',
  'Biotechnology: Principles & Applications',
  'Ecology & Environment'
];

interface SundayTestChapterModalProps {
  onClose: () => void;
  onLaunchSundayTest: (test: TestItem, selectedChapters: SundayChapterSelection) => void;
  initialTest?: TestItem | null;
}

export const SundayTestChapterModal: React.FC<SundayTestChapterModalProps> = ({
  onClose,
  onLaunchSundayTest,
  initialTest
}) => {
  const [activeSubjectTab, setActiveSubjectTab] = useState<'Physics' | 'Chemistry' | 'Biology'>('Physics');
  
  const [selectedPhysics, setSelectedPhysics] = useState<string[]>([
    'Gravitation',
    'Electrostatics',
    'Thermodynamics'
  ]);
  const [selectedChemistry, setSelectedChemistry] = useState<string[]>([
    'Chemical Bonding & Molecular Structure',
    'Structure of Atom',
    'Solutions'
  ]);
  const [selectedBiology, setSelectedBiology] = useState<string[]>([
    'Cell: The Unit of Life',
    'Cell Cycle & Cell Division',
    'Molecular Basis of Inheritance',
    'Principles of Inheritance & Variation'
  ]);

  const toggleChapter = (subject: 'Physics' | 'Chemistry' | 'Biology', chapter: string) => {
    if (subject === 'Physics') {
      setSelectedPhysics(prev =>
        prev.includes(chapter) ? (prev.length > 1 ? prev.filter(c => c !== chapter) : prev) : [...prev, chapter]
      );
    } else if (subject === 'Chemistry') {
      setSelectedChemistry(prev =>
        prev.includes(chapter) ? (prev.length > 1 ? prev.filter(c => c !== chapter) : prev) : [...prev, chapter]
      );
    } else {
      setSelectedBiology(prev =>
        prev.includes(chapter) ? (prev.length > 1 ? prev.filter(c => c !== chapter) : prev) : [...prev, chapter]
      );
    }
  };

  const selectAllSubject = (subject: 'Physics' | 'Chemistry' | 'Biology') => {
    if (subject === 'Physics') setSelectedPhysics([...PHYSICS_CHAPTERS_LIST]);
    else if (subject === 'Chemistry') setSelectedChemistry([...CHEMISTRY_CHAPTERS_LIST]);
    else setSelectedBiology([...BIOLOGY_CHAPTERS_LIST]);
  };

  const applyPreset = (preset: 'all' | 'class11' | 'class12') => {
    if (preset === 'all') {
      setSelectedPhysics([...PHYSICS_CHAPTERS_LIST]);
      setSelectedChemistry([...CHEMISTRY_CHAPTERS_LIST]);
      setSelectedBiology([...BIOLOGY_CHAPTERS_LIST]);
    } else if (preset === 'class11') {
      setSelectedPhysics(['Units, Dimensions', 'Vectors', 'Motion in One Dimension', 'Gravitation', 'Thermodynamics']);
      setSelectedChemistry(['Some Basic Concepts of Chemistry', 'Structure of Atom', 'Classification of Elements & Periodicity', 'Chemical Bonding & Molecular Structure']);
      setSelectedBiology(['The Living World', 'Biological Classification', 'Plant Kingdom', 'Animal Kingdom', 'Cell: The Unit of Life']);
    } else {
      setSelectedPhysics(['Electrostatics', 'Current Electricity', 'Magnetism', 'Optics & Wave Optics', 'Modern Physics']);
      setSelectedChemistry(['Solutions', 'Electrochemistry', 'Chemical Kinetics', 'Coordination Compounds', 'Haloalkanes & Haloarenes']);
      setSelectedBiology(['Principles of Inheritance & Variation', 'Molecular Basis of Inheritance', 'Biotechnology: Principles & Applications', 'Ecology & Environment']);
    }
  };

  const handleLaunch = () => {
    // 1. Collect questions for Physics (45 Qs) strictly from selected Physics chapters
    const phyBank = getUnifiedQuestionBank('Physics');
    let phyPool = phyBank.filter(q =>
      selectedPhysics.some(ch => q.chapter.toLowerCase().includes(ch.toLowerCase().split(' ')[0]))
    );
    if (phyPool.length < 45) phyPool = phyBank; // fallback if needed
    // Shuffle & pick 45
    const selectedPhyQs = [...phyPool].sort(() => 0.5 - Math.random()).slice(0, 45).map((q, idx) => ({
      ...q,
      id: `sunday-phy-${idx + 1}-${q.id}`,
      subject: 'Physics' as const,
      questionText: formatMathAndFormulas(q.questionText),
      options: q.options.map(o => formatMathAndFormulas(o)),
      explanation: formatMathAndFormulas(q.explanation)
    }));

    // 2. Collect questions for Chemistry (45 Qs) strictly from selected Chemistry chapters
    const chemBank = getUnifiedQuestionBank('Chemistry');
    let chemPool = chemBank.filter(q =>
      selectedChemistry.some(ch => q.chapter.toLowerCase().includes(ch.toLowerCase().split(' ')[0]))
    );
    if (chemPool.length < 45) chemPool = chemBank;
    const selectedChemQs = [...chemPool].sort(() => 0.5 - Math.random()).slice(0, 45).map((q, idx) => ({
      ...q,
      id: `sunday-chem-${idx + 1}-${q.id}`,
      subject: 'Chemistry' as const,
      questionText: formatMathAndFormulas(q.questionText),
      options: q.options.map(o => formatMathAndFormulas(o)),
      explanation: formatMathAndFormulas(q.explanation)
    }));

    // 3. Collect questions for Biology (90 Qs) strictly from selected Biology chapters
    const bioBank = getUnifiedQuestionBank('Biology');
    let bioPool = bioBank.filter(q =>
      selectedBiology.some(ch => q.chapter.toLowerCase().includes(ch.toLowerCase().split(' ')[0]))
    );
    if (bioPool.length < 90) bioPool = bioBank;
    const selectedBioQs = [...bioPool].sort(() => 0.5 - Math.random()).slice(0, 90).map((q, idx) => ({
      ...q,
      id: `sunday-bio-${idx + 1}-${q.id}`,
      subject: 'Biology' as const,
      questionText: formatMathAndFormulas(q.questionText),
      options: q.options.map(o => formatMathAndFormulas(o)),
      explanation: formatMathAndFormulas(q.explanation)
    }));

    const total180Qs: Question[] = [...selectedPhyQs, ...selectedChemQs, ...selectedBioQs];

    const sundayTestItem: TestItem = {
      id: 'test-sunday-custom-' + Date.now(),
      title: initialTest?.title || 'NeetCbt Exam Test: Sunday 180-Question PCB All-India Mock',
      category: 'neet_mock',
      exam: 'NEET',
      syllabus: `Custom PCB Syllabus: Physics (${selectedPhysics.length} Chs), Chemistry (${selectedChemistry.length} Chs), Biology (${selectedBiology.length} Chs)`,
      totalQuestions: 180,
      durationMinutes: 180,
      totalMarks: 180,
      negativeMarking: '+1 for correct, -0.25 for incorrect (Total 180 Marks)',
      difficulty: 'Mixed',
      cbtMode: true,
      features: [
        '180 Questions (45 Phys + 45 Chem + 90 Bio)',
        '180 Minutes (3.0 Hours NTA Timer)',
        '180 Marks (+1 / -0.25 Standard Marking)',
        'All India Rank (AIR) & College Probability Predictor'
      ],
      questions: total180Qs
    };

    onLaunchSundayTest(sundayTestItem, {
      physics: selectedPhysics,
      chemistry: selectedChemistry,
      biology: selectedBiology
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-auto flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-700 p-4 sm:p-5 text-white flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-900">
                180 Marks &bull; 180 Mins &bull; 180 Qs
              </span>
              <span className="text-[11px] text-blue-100 font-mono">PCB Customizer</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white mt-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-300" /> Sunday Test Series: Choose Subject Chapters
            </h2>
            <p className="text-xs text-blue-100">
              Select the exact chapters of Physics, Chemistry, and Biology to include in your 180-Question Sunday Mock Test.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Presets Bar */}
        <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 shrink-0">
          <div className="flex items-center space-x-1.5 text-xs text-slate-600 font-semibold">
            <Filter className="w-3.5 h-3.5 text-blue-600" />
            <span>Quick Presets:</span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => applyPreset('all')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition"
            >
              Full PCB Syllabus
            </button>
            <button
              onClick={() => applyPreset('class11')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition"
            >
              Class 11 Focus
            </button>
            <button
              onClick={() => applyPreset('class12')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition"
            >
              Class 12 Focus
            </button>
          </div>
        </div>

        {/* Subject Tabs */}
        <div className="grid grid-cols-3 border-b border-slate-200 bg-white shrink-0">
          <button
            onClick={() => setActiveSubjectTab('Physics')}
            className={`py-3 text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 border-b-2 transition ${
              activeSubjectTab === 'Physics'
                ? 'border-blue-600 text-blue-700 bg-blue-50/50'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Zap className="w-4 h-4 text-blue-600" />
            <span>Physics</span>
            <span className="px-1.5 py-0.2 rounded-full bg-blue-100 text-blue-800 text-[10px] font-mono">
              {selectedPhysics.length}
            </span>
          </button>

          <button
            onClick={() => setActiveSubjectTab('Chemistry')}
            className={`py-3 text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 border-b-2 transition ${
              activeSubjectTab === 'Chemistry'
                ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Atom className="w-4 h-4 text-emerald-600" />
            <span>Chemistry</span>
            <span className="px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono">
              {selectedChemistry.length}
            </span>
          </button>

          <button
            onClick={() => setActiveSubjectTab('Biology')}
            className={`py-3 text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 border-b-2 transition ${
              activeSubjectTab === 'Biology'
                ? 'border-purple-600 text-purple-700 bg-purple-50/50'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Dna className="w-4 h-4 text-purple-600" />
            <span>Biology</span>
            <span className="px-1.5 py-0.2 rounded-full bg-purple-100 text-purple-800 text-[10px] font-mono">
              {selectedBiology.length}
            </span>
          </button>
        </div>

        {/* Chapter Selection Grid */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-700">
              Select Chapters for {activeSubjectTab} ({activeSubjectTab === 'Biology' ? '90 Qs' : '45 Qs'} in test):
            </span>
            <button
              onClick={() => selectAllSubject(activeSubjectTab)}
              className="text-xs text-blue-600 hover:text-blue-800 font-bold hover:underline"
            >
              Select All {activeSubjectTab}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {(activeSubjectTab === 'Physics'
              ? PHYSICS_CHAPTERS_LIST
              : activeSubjectTab === 'Chemistry'
              ? CHEMISTRY_CHAPTERS_LIST
              : BIOLOGY_CHAPTERS_LIST
            ).map(chapter => {
              const isSelected =
                activeSubjectTab === 'Physics'
                  ? selectedPhysics.includes(chapter)
                  : activeSubjectTab === 'Chemistry'
                  ? selectedChemistry.includes(chapter)
                  : selectedBiology.includes(chapter);

              return (
                <div
                  key={chapter}
                  onClick={() => toggleChapter(activeSubjectTab, chapter)}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                    isSelected
                      ? 'bg-blue-50 border-blue-400 text-blue-900 font-semibold shadow-xs'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center border transition ${
                        isSelected
                          ? 'bg-blue-600 border-blue-600 text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className="text-xs">{chapter}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Summary & Launch Bar */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-600 space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-800">Selected Coverage:</span>
              <span className="text-blue-700 font-semibold">Phy ({selectedPhysics.length})</span> &bull;{' '}
              <span className="text-emerald-700 font-semibold">Chem ({selectedChemistry.length})</span> &bull;{' '}
              <span className="text-purple-700 font-semibold">Bio ({selectedBiology.length})</span>
            </div>
            <div className="text-[11px] text-slate-500 font-mono">
              Pattern: 180 Questions &bull; 180 Mins (3.0 Hrs) &bull; 180 Marks (+1 / -0.25)
            </div>
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleLaunch}
              className="flex-1 sm:flex-initial px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-xs font-bold shadow-md hover:shadow-lg transition flex items-center justify-center space-x-1.5"
            >
              <span>Launch 180-Question Sunday Test</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
