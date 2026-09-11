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
import {
  OFFICIAL_PHYSICS_UNITS,
  OFFICIAL_CHEMISTRY_UNITS,
  OFFICIAL_BOTANY_BLOCKS,
  OFFICIAL_ZOOLOGY_BLOCKS
} from '../data/sundayPlannerTests';

export interface SundayChapterSelection {
  physics: string[];
  chemistry: string[];
  biology: string[];
}

export const PHYSICS_CHAPTERS_LIST = OFFICIAL_PHYSICS_UNITS;
export const CHEMISTRY_CHAPTERS_LIST = OFFICIAL_CHEMISTRY_UNITS;
export const BIOLOGY_CHAPTERS_LIST = [
  ...OFFICIAL_BOTANY_BLOCKS.map(b => `[Botany] ${b}`),
  ...OFFICIAL_ZOOLOGY_BLOCKS.map(z => `[Zoology] ${z}`)
];

interface SundayTestChapterModalProps {
  onClose: () => void;
  onLaunchSundayTest: (test: TestItem, selectedChapters: SundayChapterSelection) => void;
  initialTest?: (TestItem & {
    physicsKeywords?: string[];
    chemistryKeywords?: string[];
    botanyKeywords?: string[];
    zoologyKeywords?: string[];
    physicsUnit?: string;
    chemistryUnit?: string;
    botanyBlock?: string;
    zoologyBlock?: string;
  }) | null;
}

export const SundayTestChapterModal: React.FC<SundayTestChapterModalProps> = ({
  onClose,
  onLaunchSundayTest,
  initialTest
}) => {
  const [activeSubjectTab, setActiveSubjectTab] = useState<'Physics' | 'Chemistry' | 'Biology'>('Physics');
  
  // Initialize with initialTest units if available, or default syllabus units
  const [selectedPhysics, setSelectedPhysics] = useState<string[]>(() => {
    if (initialTest?.physicsUnit) {
      const match = OFFICIAL_PHYSICS_UNITS.filter(u => 
        initialTest.physicsUnit?.toLowerCase().includes(u.split(':')[0].toLowerCase()) ||
        initialTest.physicsKeywords?.some(kw => u.toLowerCase().includes(kw.toLowerCase()))
      );
      if (match.length > 0) return match;
    }
    return [OFFICIAL_PHYSICS_UNITS[0], OFFICIAL_PHYSICS_UNITS[1]];
  });

  const [selectedChemistry, setSelectedChemistry] = useState<string[]>(() => {
    if (initialTest?.chemistryUnit) {
      const match = OFFICIAL_CHEMISTRY_UNITS.filter(u =>
        initialTest.chemistryUnit?.toLowerCase().includes(u.split(':')[0].toLowerCase()) ||
        initialTest.chemistryKeywords?.some(kw => u.toLowerCase().includes(kw.toLowerCase()))
      );
      if (match.length > 0) return match;
    }
    return [OFFICIAL_CHEMISTRY_UNITS[0], OFFICIAL_CHEMISTRY_UNITS[1]];
  });

  const [selectedBiology, setSelectedBiology] = useState<string[]>(() => {
    const list: string[] = [];
    if (initialTest?.botanyBlock) {
      const bMatch = BIOLOGY_CHAPTERS_LIST.filter(b => 
        initialTest.botanyBlock?.toLowerCase().includes(b.replace('[Botany] ', '').toLowerCase()) ||
        initialTest.botanyKeywords?.some(kw => b.toLowerCase().includes(kw.toLowerCase()))
      );
      list.push(...bMatch);
    }
    if (initialTest?.zoologyBlock) {
      const zMatch = BIOLOGY_CHAPTERS_LIST.filter(z => 
        initialTest.zoologyBlock?.toLowerCase().includes(z.replace('[Zoology] ', '').toLowerCase()) ||
        initialTest.zoologyKeywords?.some(kw => z.toLowerCase().includes(kw.toLowerCase()))
      );
      list.push(...zMatch);
    }
    if (list.length > 0) return list;
    return [BIOLOGY_CHAPTERS_LIST[0], BIOLOGY_CHAPTERS_LIST[20]]; // Living World + Animal Kingdom
  });

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
    if (subject === 'Physics') setSelectedPhysics([...OFFICIAL_PHYSICS_UNITS]);
    else if (subject === 'Chemistry') setSelectedChemistry([...OFFICIAL_CHEMISTRY_UNITS]);
    else setSelectedBiology([...BIOLOGY_CHAPTERS_LIST]);
  };

  const applyPreset = (preset: 'all' | 'class11' | 'class12') => {
    if (preset === 'all') {
      setSelectedPhysics([...OFFICIAL_PHYSICS_UNITS]);
      setSelectedChemistry([...OFFICIAL_CHEMISTRY_UNITS]);
      setSelectedBiology([...BIOLOGY_CHAPTERS_LIST]);
    } else if (preset === 'class11') {
      setSelectedPhysics(OFFICIAL_PHYSICS_UNITS.slice(0, 10));
      setSelectedChemistry(OFFICIAL_CHEMISTRY_UNITS.slice(0, 10));
      setSelectedBiology(BIOLOGY_CHAPTERS_LIST.slice(0, 20));
    } else {
      setSelectedPhysics(OFFICIAL_PHYSICS_UNITS.slice(10));
      setSelectedChemistry(OFFICIAL_CHEMISTRY_UNITS.slice(10));
      setSelectedBiology(BIOLOGY_CHAPTERS_LIST.slice(20));
    }
  };

  const handleLaunch = () => {
    const matchChapterStrict = (q: Question, selectedUnits: string[]) => {
      const qCh = (q.chapter || '').toLowerCase().trim();
      const qTop = (q.topic || '').toLowerCase().trim();
      const normQCh = qCh.replace(/[^a-z0-9]/g, '');

      return selectedUnits.some(unit => {
        const clean = unit
          .replace(/^Unit \d+:\s*/i, '')
          .replace(/^\[(Botany|Zoology)\]\s*\d*\.?\s*/i, '')
          .toLowerCase()
          .trim();
        const normUnit = clean.replace(/[^a-z0-9]/g, '');

        if (normQCh && normUnit && (normQCh.includes(normUnit) || normUnit.includes(normQCh))) {
          return true;
        }

        const keywords = clean
          .split(/[^a-z0-9]+/)
          .filter(w => w.length >= 4 && !['unit', 'chapter', 'part', 'test', 'class'].includes(w));

        return keywords.length > 0 && keywords.every(kw => qCh.includes(kw) || qTop.includes(kw));
      });
    };

    // 1. Collect questions for Physics (45 Qs) strictly from selected Physics chapters
    const phyBank = getUnifiedQuestionBank('Physics');
    let phyPool = phyBank.filter(q => matchChapterStrict(q, selectedPhysics));
    if (phyPool.length === 0) {
      phyPool = phyBank.filter(q => selectedPhysics.some(u => (q.chapter || '').toLowerCase().includes(u.toLowerCase())));
    }
    if (phyPool.length === 0) phyPool = phyBank; // ultimate fallback only if 0 found
    
    // Pick 45 questions strictly from phyPool without cross-chapter mixing
    const randomizedPhy = [...phyPool].sort(() => 0.5 - Math.random());
    const selectedPhyQs: Question[] = [];
    for (let idx = 0; idx < 45; idx++) {
      const q = randomizedPhy[idx % randomizedPhy.length];
      selectedPhyQs.push({
        ...q,
        id: `sunday-phy-${idx + 1}-${q.id}`,
        subject: 'Physics' as const,
        questionText: formatMathAndFormulas(q.questionText || (q as any).question || ''),
        options: (q.options || []).map(o => formatMathAndFormulas(o)),
        explanation: formatMathAndFormulas(q.explanation || '')
      });
    }

    // 2. Collect questions for Chemistry (45 Qs) strictly from selected Chemistry chapters
    const chemBank = getUnifiedQuestionBank('Chemistry');
    let chemPool = chemBank.filter(q => matchChapterStrict(q, selectedChemistry));
    if (chemPool.length === 0) {
      chemPool = chemBank.filter(q => selectedChemistry.some(u => (q.chapter || '').toLowerCase().includes(u.toLowerCase())));
    }
    if (chemPool.length === 0) chemPool = chemBank;
    
    const randomizedChem = [...chemPool].sort(() => 0.5 - Math.random());
    const selectedChemQs: Question[] = [];
    for (let idx = 0; idx < 45; idx++) {
      const q = randomizedChem[idx % randomizedChem.length];
      selectedChemQs.push({
        ...q,
        id: `sunday-chem-${idx + 1}-${q.id}`,
        subject: 'Chemistry' as const,
        questionText: formatMathAndFormulas(q.questionText || (q as any).question || ''),
        options: (q.options || []).map(o => formatMathAndFormulas(o)),
        explanation: formatMathAndFormulas(q.explanation || '')
      });
    }

    // 3. Collect questions for Biology (90 Qs) strictly from selected Biology chapters
    const bioBank = getUnifiedQuestionBank('Biology');
    let bioPool = bioBank.filter(q => matchChapterStrict(q, selectedBiology));
    if (bioPool.length === 0) {
      bioPool = bioBank.filter(q => selectedBiology.some(u => (q.chapter || '').toLowerCase().includes(u.toLowerCase())));
    }
    if (bioPool.length === 0) bioPool = bioBank;

    const randomizedBio = [...bioPool].sort(() => 0.5 - Math.random());
    const selectedBioQs: Question[] = [];
    for (let idx = 0; idx < 90; idx++) {
      const q = randomizedBio[idx % randomizedBio.length];
      selectedBioQs.push({
        ...q,
        id: `sunday-bio-${idx + 1}-${q.id}`,
        subject: 'Biology' as const,
        questionText: formatMathAndFormulas(q.questionText || (q as any).question || ''),
        options: (q.options || []).map(o => formatMathAndFormulas(o)),
        explanation: formatMathAndFormulas(q.explanation || '')
      });
    }

    const total180Qs: Question[] = [...selectedPhyQs, ...selectedChemQs, ...selectedBioQs];

    const sundayTestItem: TestItem = {
      id: 'test-sunday-custom-' + Date.now(),
      title: initialTest?.title || 'NeetCbt Exam Test: Sunday 180-Question PCB All-India Mock',
      category: 'neet_mock',
      exam: 'NEET',
      syllabus: `Calendar Syllabus: Physics (${selectedPhysics.length} Units), Chemistry (${selectedChemistry.length} Units), Biology (${selectedBiology.length} Blocks)`,
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
              <span className="text-[11px] text-blue-100 font-mono">Sunday Calendar Syllabus Selector</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white mt-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-300" /> Sunday Test Series: Syllabus & Chapter Customizer
            </h2>
            <p className="text-xs text-blue-100">
              {initialTest ? initialTest.title : 'Configure official NEET units for Physics (45 Qs), Chemistry (45 Qs), and Biology (90 Qs).'}
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
            <span>Quick Syllabus Presets:</span>
          </div>

          <div className="flex items-center space-x-1.5">
            <button
              onClick={() => applyPreset('all')}
              className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition cursor-pointer"
            >
              Full NEET Syllabus
            </button>
            <button
              onClick={() => applyPreset('class11')}
              className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition cursor-pointer"
            >
              Class 11th Units
            </button>
            <button
              onClick={() => applyPreset('class12')}
              className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition cursor-pointer"
            >
              Class 12th Units
            </button>
          </div>
        </div>

        {/* Subject Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-white shrink-0">
          <button
            onClick={() => setActiveSubjectTab('Physics')}
            className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 border-b-2 transition cursor-pointer ${
              activeSubjectTab === 'Physics'
                ? 'border-blue-600 text-blue-600 bg-blue-50/50'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Physics ({selectedPhysics.length} Units)</span>
          </button>

          <button
            onClick={() => setActiveSubjectTab('Chemistry')}
            className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 border-b-2 transition cursor-pointer ${
              activeSubjectTab === 'Chemistry'
                ? 'border-emerald-600 text-emerald-600 bg-emerald-50/50'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Atom className="w-4 h-4 text-emerald-500" />
            <span>Chemistry ({selectedChemistry.length} Units)</span>
          </button>

          <button
            onClick={() => setActiveSubjectTab('Biology')}
            className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 border-b-2 transition cursor-pointer ${
              activeSubjectTab === 'Biology'
                ? 'border-purple-600 text-purple-600 bg-purple-50/50'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Dna className="w-4 h-4 text-purple-500" />
            <span>Biology ({selectedBiology.length} Blocks)</span>
          </button>
        </div>

        {/* Selection Content Area */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700">
              Select {activeSubjectTab} chapters to include in test pool:
            </span>
            <button
              onClick={() => selectAllSubject(activeSubjectTab)}
              className="text-xs font-semibold text-blue-600 hover:underline flex items-center space-x-1 cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Select All {activeSubjectTab}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {activeSubjectTab === 'Physics' &&
              OFFICIAL_PHYSICS_UNITS.map(ch => {
                const isSelected = selectedPhysics.includes(ch);
                return (
                  <button
                    key={ch}
                    onClick={() => toggleChapter('Physics', ch)}
                    className={`p-2.5 rounded-xl text-left text-xs font-semibold border transition flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-blue-50/80 border-blue-400 text-blue-900 shadow-2xs font-bold'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="pr-2 leading-relaxed">{ch}</span>
                    <div
                      className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border ${
                        isSelected
                          ? 'bg-blue-600 border-blue-600 text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}

            {activeSubjectTab === 'Chemistry' &&
              OFFICIAL_CHEMISTRY_UNITS.map(ch => {
                const isSelected = selectedChemistry.includes(ch);
                return (
                  <button
                    key={ch}
                    onClick={() => toggleChapter('Chemistry', ch)}
                    className={`p-2.5 rounded-xl text-left text-xs font-semibold border transition flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-50/80 border-emerald-400 text-emerald-900 shadow-2xs font-bold'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="pr-2 leading-relaxed">{ch}</span>
                    <div
                      className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border ${
                        isSelected
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}

            {activeSubjectTab === 'Biology' &&
              BIOLOGY_CHAPTERS_LIST.map(ch => {
                const isSelected = selectedBiology.includes(ch);
                return (
                  <button
                    key={ch}
                    onClick={() => toggleChapter('Biology', ch)}
                    className={`p-2.5 rounded-xl text-left text-xs font-semibold border transition flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-purple-50/80 border-purple-400 text-purple-900 shadow-2xs font-bold'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="pr-2 leading-relaxed">{ch}</span>
                    <div
                      className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border ${
                        isSelected
                          ? 'bg-purple-600 border-purple-600 text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center space-x-3 text-xs text-slate-600 font-mono">
            <span>
              Selected: <strong>{selectedPhysics.length}</strong> Phys + <strong>{selectedChemistry.length}</strong> Chem + <strong>{selectedBiology.length}</strong> Bio
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200 transition cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleLaunch}
              className="px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-md transition flex items-center space-x-1.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Launch 180-Question Sunday CBT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
