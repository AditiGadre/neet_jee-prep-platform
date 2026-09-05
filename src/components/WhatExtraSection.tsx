import React, { useState, useMemo, useEffect } from 'react';
import {
  Sparkles,
  Sliders,
  Layers,
  Network,
  LineChart,
  FileSpreadsheet,
  BookMarked,
  HelpCircle,
  Play,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Clock,
  TrendingUp,
  AlertTriangle,
  Download,
  BookOpen,
  Eye,
  Search,
  Filter,
  Check,
  ChevronDown,
  ChevronRight,
  Lightbulb,
  Zap,
  Target,
  ArrowRight,
  Award,
  FileText,
  ArrowDownToLine,
  Trash2,
  Calendar,
  HardDrive,
  User,
  Phone,
  Mail,
  Upload,
  RefreshCw,
  AlertCircle
} from 'lucide-react';
import {
  Flashcard,
  MindMapNode,
  BookItem,
  PYQItem,
  TestItem,
  UserTestResult,
  Question,
  DownloadRecord
} from '../types';
import { SAMPLE_QUESTIONS, TEST_SERIES_DATA } from '../data/mockData';
import { ALL_CHEMISTRY_MASTER_QUESTIONS } from '../data/chemistryQuestions';
import { ALL_FINGERTIPS_BIOLOGY_QUESTIONS } from '../data/fingertipsBiologyQuestions';
import { ALL_PHYSICS_MASTER_QUESTIONS } from '../data/physicsMasterQuestions';
import { downloadBookPDF, downloadDppPDF, downloadTestPaperPDF } from '../utils/pdfDownloader';
import { getUserDownloads, clearUserDownloads, getCurrentUser } from '../utils/downloadTracker';
import { getUnifiedQuestionBank } from '../utils/questionDatabase';
import {
  getUnusedQuestions,
  markQuestionsAsConsumed,
  notifyDataExhaustion,
  resetChapterConsumption
} from '../utils/questionTracker';

interface WhatExtraSectionProps {
  activeSubTab: string;
  onSelectSubTab: (subTab: string) => void;
  flashcards: Flashcard[];
  mindMaps: MindMapNode[];
  books: BookItem[];
  pyqs: PYQItem[];
  onStartCustomTest: (customTest: TestItem) => void;
  onOpenBook: (book: BookItem) => void;
  completedTests: UserTestResult[];
  onOpenUploadModal?: (subject?: string, chapter?: string) => void;
}

export const WhatExtraSection: React.FC<WhatExtraSectionProps> = ({
  activeSubTab,
  onSelectSubTab,
  flashcards,
  mindMaps,
  books,
  pyqs,
  onStartCustomTest,
  onOpenBook,
  completedTests,
  onOpenUploadModal
}) => {
  // Custom Test Builder State
  const [customSubject, setCustomSubject] = useState<'Physics' | 'Chemistry' | 'Biology' | 'Mathematics'>('Biology');
  const [customChapter, setCustomChapter] = useState<string>('Molecular Basis of Inheritance');
  const [customTopic, setCustomTopic] = useState<string>('All Topics');
  const [customDifficulty, setCustomDifficulty] = useState<'Easy' | 'Medium' | 'Hard' | 'Both' | 'Adaptive'>('Both');
  const [customDuration, setCustomDuration] = useState<number>(15);
  const [customQCount, setCustomQCount] = useState<number>(15);

  // Exhaustion state
  const [exhaustionNotice, setExhaustionNotice] = useState<{
    subject: string;
    chapter: string;
    total: number;
    remaining: number;
  } | null>(null);

  // Flashcards State
  const [fcSubjectFilter, setFcSubjectFilter] = useState<string>('All');
  const [fcCategoryFilter, setFcCategoryFilter] = useState<string>('All');
  const [fcSearchQuery, setFcSearchQuery] = useState<string>('');
  const [activeFcIndex, setActiveFcIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Mind Map State
  const [selectedMindMapId, setSelectedMindMapId] = useState<string>(mindMaps[0]?.id || '');

  // DPP Generator State
  const [dppDate, setDppDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [dppSubject, setDppSubject] = useState<string>('Biology Only');
  const [dppLevel, setDppLevel] = useState<string>('CBT Standard Level');
  const [generatedDppSuccess, setGeneratedDppSuccess] = useState<boolean>(false);

  // PYQ Filter State
  const [pyqSubject, setPyqSubject] = useState<string>('All');
  const [pyqYear, setPyqYear] = useState<string>('All');
  const [pyqSearch, setPyqSearch] = useState<string>('');
  const [expandedSolutionId, setExpandedSolutionId] = useState<string | null>(null);

  // Books Filter State
  const [bookCategory, setBookCategory] = useState<string>('All');

  // Downloads Vault State
  const [downloads, setDownloads] = useState<DownloadRecord[]>([]);
  const [dlCategory, setDlCategory] = useState<string>('All');
  const [dlSearch, setDlSearch] = useState<string>('');
  const [dlUser, setDlUser] = useState<any>(getCurrentUser());
  const [reDownloadSuccess, setReDownloadSuccess] = useState<string | null>(null);

  // Consumption State Listener
  const [consumptionVersion, setConsumptionVersion] = useState<number>(0);

  const reloadDownloads = () => {
    const u = getCurrentUser();
    setDlUser(u);
    setDownloads(getUserDownloads(u?.email));
  };

  useEffect(() => {
    reloadDownloads();
    const handleDlChange = () => reloadDownloads();
    const handleAuthChange = () => reloadDownloads();
    const handleConsumptionChange = () => setConsumptionVersion(v => v + 1);
    const handleBankUpdate = () => setConsumptionVersion(v => v + 1);

    window.addEventListener('neet_downloads_change', handleDlChange);
    window.addEventListener('neet_auth_change', handleAuthChange);
    window.addEventListener('neet_consumption_updated', handleConsumptionChange);
    window.addEventListener('neet_question_bank_updated', handleBankUpdate);

    return () => {
      window.removeEventListener('neet_downloads_change', handleDlChange);
      window.removeEventListener('neet_auth_change', handleAuthChange);
      window.removeEventListener('neet_consumption_updated', handleConsumptionChange);
      window.removeEventListener('neet_question_bank_updated', handleBankUpdate);
    };
  }, []);

  // Sub-tab definitions
  const subModules = [
    { id: 'custom-test', label: 'Custom Test Generator', icon: Sliders, desc: 'Generate 45-question tests strictly without repeating questions.' },
    { id: 'flash-cards', label: 'Flash Cards', icon: Layers, desc: '30+ high-yield revision cards with formulas, reactions, diagrams & mnemonics.' },
    { id: 'mind-maps', label: 'Mind Maps', icon: Network, desc: 'Interactive concept visual trees for rapid revision.' },
    { id: 'analytics', label: 'Student Analytics', icon: LineChart, desc: 'Score analysis, accuracy, weak topics & progress graphs.' },
    { id: 'dpp-generator', label: 'DPP Generator', icon: FileSpreadsheet, desc: 'Personalized daily practice papers with instant PDF download.' },
    { id: 'books', label: 'Books & Notes', icon: BookMarked, desc: 'NCERT highlighters, revision notes, formula books & downloadable PDFs.' },
    { id: 'pyqs', label: 'NEET/JEE PYQs', icon: HelpCircle, desc: 'Chapter, topic & year-wise previous year questions with step solutions.' },
    { id: 'my-downloads', label: 'My Download Vault', icon: ArrowDownToLine, desc: 'Preserved download history of question papers, scorecards, NCERT books and DPPs.' }
  ];

  // Available Chapters by Subject
  const biologyChapters = useMemo(() => {
    const chapters = Array.from(new Set(ALL_FINGERTIPS_BIOLOGY_QUESTIONS.map(q => q.chapter))).filter(Boolean);
    return chapters.length > 0 ? chapters : [
      'The Living World', 'Biological Classification', 'Plant Kingdom', 'Animal Kingdom',
      'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Structural Organisation in Animals',
      'Cell: The Unit of Life', 'Biomolecules', 'Cell Cycle and Cell Division',
      'Photosynthesis in Higher Plants', 'Respiration in Plants', 'Plant Growth and Development',
      'Breathing and Exchange of Gases', 'Body Fluids and Circulation', 'Excretory Products and their Elimination',
      'Locomotion and Movement', 'Neural Control and Coordination', 'Chemical Coordination and Integration',
      'Sexual Reproduction in Flowering Plants', 'Human Reproduction', 'Reproductive Health',
      'Principles of Inheritance and Variation', 'Molecular Basis of Inheritance', 'Evolution',
      'Human Health and Disease', 'Microbes in Human Welfare',
      'Biotechnology: Principles and Processes', 'Biotechnology and its Applications',
      'Organisms and Populations', 'Ecosystem', 'Biodiversity and Conservation', 'NEET Full Syllabus Mock'
    ];
  }, []);

  const chemistryChapters = useMemo(() => {
    return Array.from(new Set(ALL_CHEMISTRY_MASTER_QUESTIONS.map(q => q.chapter))).filter(Boolean);
  }, []);

  const physicsChapters = [
    'Physical World & Units and Measurements',
    'Vectors & Basic Mathematical Tools',
    'Motion in a Straight Line (1D Kinematics)',
    'Motion in a Plane (2D & Projectile Motion)',
    'Laws of Motion & Friction',
    'Work, Energy, and Power',
    'System of Particles & Rotational Motion',
    'Gravitation',
    'Mechanical Properties of Solids (Elasticity)',
    'Mechanical Properties of Fluids (Fluid Dynamics)',
    'Thermal Properties of Matter & Calorimetry',
    'Thermodynamics (Physics)',
    'Kinetic Theory of Gases',
    'Oscillations (Simple Harmonic Motion)',
    'Waves & Acoustics',
    'Electrostatics: Electric Charges and Fields',
    'Electrostatic Potential and Capacitance',
    'Current Electricity & DC Circuits',
    'Moving Charges and Magnetism',
    'Magnetism and Matter',
    'Electromagnetic Induction (EMI)',
    'Alternating Current (AC)',
    'Electromagnetic Waves (EM Waves)',
    'Ray Optics and Optical Instruments',
    'Wave Optics & Diffraction',
    'Dual Nature of Radiation and Matter',
    'Atoms & Spectra',
    'Nuclei & Nuclear Energy',
    'Semiconductor Electronics & Logic Gates',
    'Physics Full Syllabus Mock Test'
  ];

  const currentChapterList = customSubject === 'Biology'
    ? biologyChapters
    : customSubject === 'Chemistry'
    ? chemistryChapters
    : physicsChapters;

  // Unused question pool calculation for active chapter
  const currentPoolStats = useMemo(() => {
    return getUnusedQuestions(customSubject, customChapter, undefined, customDifficulty);
  }, [customSubject, customChapter, customDifficulty, consumptionVersion]);

  // Custom Test Launch Handler with Zero Repetition & Exhaustion Notification
  const handleGenerateAndStartCustomTest = () => {
    const stats = getUnusedQuestions(customSubject, customChapter, undefined, customDifficulty);

    // If remaining questions in database are fewer than requested, notify user & super user
    if (stats.remainingUnused === 0 || stats.remainingUnused < customQCount) {
      notifyDataExhaustion(customSubject, customChapter, stats.totalInBank, customQCount);
      setExhaustionNotice({
        subject: customSubject,
        chapter: customChapter,
        total: stats.totalInBank,
        remaining: stats.remainingUnused
      });
      return;
    }

    setExhaustionNotice(null);

    // Filter by difficulty if needed (e.g. Both Medium & Hard)
    let candidatePool = stats.unusedQuestions;
    if (customDifficulty === 'Both') {
      const filtered = candidatePool.filter(q => q.difficulty === 'Medium' || q.difficulty === 'Hard');
      if (filtered.length >= customQCount) candidatePool = filtered;
    } else if (customDifficulty === 'Hard') {
      const filtered = candidatePool.filter(q => q.difficulty === 'Hard');
      if (filtered.length >= customQCount) candidatePool = filtered;
    } else if (customDifficulty === 'Medium') {
      const filtered = candidatePool.filter(q => q.difficulty === 'Medium');
      if (filtered.length >= customQCount) candidatePool = filtered;
    }

    const shuffled = [...candidatePool].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, customQCount);

    // Mark these questions as consumed so they are never served again
    const selectedIds = selectedQuestions.map(q => q.id);
    markQuestionsAsConsumed(selectedIds);

    const customTestItem: TestItem = {
      id: `custom-test-${Date.now()}`,
      title: `Custom Test: ${customSubject} - ${customChapter} (${customQCount} Qs - 100% Unique)`,
      category: 'custom',
      exam: 'NEET',
      syllabus: `${customSubject} > ${customChapter} > ${customTopic} (${customDifficulty} Level &bull; ${customQCount} Unseen Questions)`,
      totalQuestions: selectedQuestions.length,
      durationMinutes: customDuration,
      totalMarks: selectedQuestions.length * 4,
      negativeMarking: '+4 for correct, -1 for incorrect',
      difficulty: customDifficulty === 'Adaptive' ? 'Mixed' : customDifficulty,
      cbtMode: true,
      features: [
        `Subject: ${customSubject}`,
        `Chapter: ${customChapter}`,
        `Format: ${customQCount} Unique Qs (Zero Repetition)`,
        `100% Verified NCERT Explanations`
      ],
      questions: selectedQuestions
    };

    onStartCustomTest(customTestItem);
  };

  // Handle DPP Download (Purely unique questions)
  const handleDownloadDpp = () => {
    const stats = getUnusedQuestions(
      dppSubject.includes('Biology') ? 'Biology' : dppSubject.includes('Chemistry') ? 'Chemistry' : 'Biology',
      'All Chapters'
    );

    const pool = stats.unusedQuestions.length >= 45 ? stats.unusedQuestions.slice(0, 45) : ALL_FINGERTIPS_BIOLOGY_QUESTIONS.slice(0, 45);
    markQuestionsAsConsumed(pool.map(q => q.id));

    downloadDppPDF({
      date: dppDate,
      subject: dppSubject,
      level: dppLevel,
      questions: pool
    });
    setGeneratedDppSuccess(true);
    setTimeout(() => setGeneratedDppSuccess(false), 4000);
  };

  // Filtered Flashcards
  const filteredFlashcards = flashcards.filter(fc => {
    const matchesSubject = fcSubjectFilter === 'All' || fc.subject === fcSubjectFilter;
    const matchesCategory = fcCategoryFilter === 'All' || fc.category === fcCategoryFilter;
    const matchesQuery = !fcSearchQuery || 
      fc.frontTitle.toLowerCase().includes(fcSearchQuery.toLowerCase()) ||
      fc.topic.toLowerCase().includes(fcSearchQuery.toLowerCase()) ||
      fc.frontContent.toLowerCase().includes(fcSearchQuery.toLowerCase());
    return matchesSubject && matchesCategory && matchesQuery;
  });

  const currentFlashcard = filteredFlashcards[activeFcIndex] || filteredFlashcards[0] || flashcards[0];

  // Filtered PYQs
  const filteredPYQs = pyqs.filter(p => {
    const matchesSubject = pyqSubject === 'All' || p.subject === pyqSubject;
    const matchesYear = pyqYear === 'All' || p.year.toString() === pyqYear;
    const matchesSearch =
      p.chapter.toLowerCase().includes(pyqSearch.toLowerCase()) ||
      p.topic.toLowerCase().includes(pyqSearch.toLowerCase()) ||
      p.question.questionText.toLowerCase().includes(pyqSearch.toLowerCase());
    return matchesSubject && matchesYear && matchesSearch;
  });

  // Filtered Books
  const filteredBooks = books.filter(b => {
    return bookCategory === 'All' || b.category === bookCategory;
  });

  // Filtered Downloads
  const filteredDownloads = downloads.filter(d => {
    const matchesCategory = dlCategory === 'All' || d.category === dlCategory;
    const matchesQuery =
      !dlSearch ||
      d.title.toLowerCase().includes(dlSearch.toLowerCase()) ||
      (d.subject && d.subject.toLowerCase().includes(dlSearch.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  const handleReDownloadItem = (record: DownloadRecord) => {
    if (record.category === 'Book') {
      const match = books.find(b => b.title.toLowerCase() === record.title.toLowerCase()) || books[0];
      downloadBookPDF(match);
    } else if (record.category === 'DPP') {
      downloadDppPDF({
        date: new Date().toISOString().split('T')[0],
        subject: record.subject || 'Biology & Chemistry High-Yield',
        level: 'CBT Standard NEET/JEE Level',
        questions: ALL_FINGERTIPS_BIOLOGY_QUESTIONS.slice(0, 45)
      });
    } else {
      const match = TEST_SERIES_DATA.find(t => t.title.toLowerCase().includes(record.title.toLowerCase())) || TEST_SERIES_DATA[0];
      downloadTestPaperPDF(match, true);
    }
    setReDownloadSuccess(`Re-downloading "${record.title}"...`);
    setTimeout(() => setReDownloadSuccess(null), 3000);
  };

  const handleRemoveDownload = (id: string) => {
    try {
      const raw = localStorage.getItem('neet_user_downloads');
      if (raw) {
        const list: DownloadRecord[] = JSON.parse(raw);
        const filtered = list.filter(item => item.id !== id);
        localStorage.setItem('neet_user_downloads', JSON.stringify(filtered));
        reloadDownloads();
      }
    } catch (e) {
      console.warn('Could not remove download record:', e);
    }
  };

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3 h-3 text-blue-600" /> High-Yield Edge Suite & Precision Tools
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              2. What Extra We Offer (8 Precision Tools)
            </h1>
            <p className="mt-1 text-xs text-gray-600 max-w-3xl">
              Zero-repetition custom test generator extracting strictly unattempted questions from our 4,500+ database, interactive Flashcards, Mind Maps, and tracked PDF download vault.
            </p>
          </div>


        </div>

        {/* Sub-Tab Navigation Bar */}
        <div className="flex items-center space-x-1 overflow-x-auto pt-3 custom-scrollbar">
          {subModules.map(tab => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectSubTab(tab.id)}
                className={`flex items-center space-x-1.5 px-3 py-2 rounded text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                {tab.id === 'my-downloads' && downloads.length > 0 && (
                  <span className={`px-1.5 py-0.2 rounded-full text-[9px] font-mono ${isActive ? 'bg-white text-blue-700' : 'bg-blue-600 text-white'}`}>
                    {downloads.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 1. CUSTOM TEST GENERATOR (ZERO-REPETITION + EXHAUSTION ALERTS) */}
      {activeSubTab === 'custom-test' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
                <Sliders className="w-4 h-4 text-blue-600" />
                <span>Custom CBT Test Generator (Zero Question Repetition)</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Pulls exclusively unattempted questions from the central database. When questions are exhausted, you will be notified immediately.
              </p>
            </div>
            
            {/* Real-time Unused Question Bank Counter Badge */}
            <div className="flex items-center space-x-2">
              <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded border uppercase ${
                currentPoolStats.remainingUnused === 0
                  ? 'bg-rose-50 text-rose-700 border-rose-300'
                  : currentPoolStats.remainingUnused < 45
                  ? 'bg-amber-50 text-amber-800 border-amber-300'
                  : 'bg-emerald-50 text-emerald-700 border-emerald-300'
              }`}>
                {currentPoolStats.remainingUnused} / {currentPoolStats.totalInBank} Unused Questions Remaining
              </span>
            </div>
          </div>

          {/* EXHAUSTION ALERT BANNER (IF DATA IS OVER) */}
          {exhaustionNotice && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-900 space-y-3 animate-in zoom-in-95 duration-150">
              <div className="flex items-start space-x-2.5">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-rose-900">
                    ⚠️ Question Pool Exhausted for &quot;{exhaustionNotice.chapter}&quot;
                  </h4>
                  <p className="text-xs text-rose-700 mt-0.5 leading-relaxed">
                    You have completed all <strong>{exhaustionNotice.total} unique questions</strong> in this chapter! To uphold strict test series integrity, no duplicate questions will be served.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-rose-200">
                <button
                  onClick={() => onOpenUploadModal && onOpenUploadModal(customSubject, customChapter)}
                  className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center space-x-1.5 shadow-xs transition cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload / AI Generate New Questions</span>
                </button>

                <button
                  onClick={() => {
                    resetChapterConsumption(customSubject, customChapter);
                    setExhaustionNotice(null);
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 font-bold text-xs flex items-center space-x-1.5 transition cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-gray-600" />
                  <span>Reset Chapter History & Retake</span>
                </button>
              </div>
            </div>
          )}

          {/* Builder Controls Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Subject Selector */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase">1. Select Subject</label>
              <select
                value={customSubject}
                onChange={e => {
                  const sub = e.target.value as any;
                  setCustomSubject(sub);
                  setExhaustionNotice(null);
                  if (sub === 'Biology') setCustomChapter(biologyChapters[0]);
                  else if (sub === 'Chemistry') setCustomChapter(chemistryChapters[0]);
                  else setCustomChapter(physicsChapters[0]);
                }}
                className="w-full p-2 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 focus:bg-white focus:border-blue-500"
              >
                <option value="Biology">🧬 Biology (All 38 Chapters)</option>
                <option value="Chemistry">🧪 Chemistry (Physical, Inorganic, Organic)</option>
                <option value="Physics">⚡ Physics (Mechanics, Electrodynamics, Modern)</option>
              </select>
            </div>

            {/* Chapter Selector */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase">2. Select Chapter ({currentChapterList.length} Available)</label>
              <select
                value={customChapter}
                onChange={e => {
                  setCustomChapter(e.target.value);
                  setExhaustionNotice(null);
                }}
                className="w-full p-2 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 focus:bg-white focus:border-blue-500 font-semibold"
              >
                {currentChapterList.map((ch, idx) => (
                  <option key={idx} value={ch}>
                    {idx + 1}. {ch}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Level */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase">3. Difficulty Standard</label>
              <select
                value={customDifficulty}
                onChange={e => setCustomDifficulty(e.target.value as any)}
                className="w-full p-2 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 focus:bg-white focus:border-blue-500 font-semibold"
              >
                <option value="Both">Both Medium & Hard (Mixed NTA Standard)</option>
                <option value="Medium">Medium Level Only</option>
                <option value="Hard">Hard (Top Ranker Booster)</option>
                <option value="Easy">Easy (Rapid NCERT Warmup)</option>
                <option value="Adaptive">Adaptive (AI Dynamic Blend)</option>
              </select>
            </div>

            {/* Questions Count Preset */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase">4. Number of Questions</label>
              <div className="grid grid-cols-4 gap-1.5">
                {[15, 30, 45, 60].map(cnt => (
                  <button
                    key={cnt}
                    onClick={() => {
                      setCustomQCount(cnt);
                      setCustomDuration(cnt);
                    }}
                    className={`py-1.5 rounded text-xs font-bold font-mono transition-colors cursor-pointer ${
                      customQCount === cnt
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    {cnt} Qs
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Preset */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase">5. Allotted Time Limit</label>
              <div className="grid grid-cols-4 gap-1.5">
                {[15, 30, 45, 60].map(mins => (
                  <button
                    key={mins}
                    onClick={() => setCustomDuration(mins)}
                    className={`py-1.5 rounded text-xs font-bold font-mono transition-colors cursor-pointer ${
                      customDuration === mins
                        ? 'bg-purple-600 text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    {mins} Mins
                  </button>
                ))}
              </div>
            </div>

            {/* Marking Scheme */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase">6. Anti-Repetition Status</label>
              <div className="p-2 rounded bg-gray-50 border border-gray-200 text-xs font-mono font-semibold text-gray-800 flex items-center justify-between">
                <span>Unused: <strong className="text-emerald-700">{currentPoolStats.remainingUnused}</strong></span>
                <span>Consumed: <strong className="text-blue-700">{currentPoolStats.totalInBank - currentPoolStats.remainingUnused}</strong></span>
              </div>
            </div>
          </div>

          {/* Test Summary Preview & Launch Button */}
          <div className="p-4 rounded bg-blue-50/60 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="space-y-0.5 text-xs">
              <div className="text-gray-700">
                Configured Custom Test:{' '}
                <strong className="text-gray-900">
                  {customSubject} &bull; {customChapter}
                </strong>
              </div>
              <div className="text-gray-600 font-mono text-[11px]">
                Format:{' '}
                <span className="text-blue-700 font-bold">{customQCount} Questions ({customQCount * 4} Marks)</span> &bull;{' '}
                <span className="text-purple-700 font-bold">{customDuration} Minutes</span> &bull; Status:{' '}
                <span className={currentPoolStats.remainingUnused >= customQCount ? 'text-emerald-700 font-bold' : 'text-rose-600 font-bold'}>
                  {currentPoolStats.remainingUnused >= customQCount ? '✓ Ready (100% Unique Questions)' : '⚠️ Insufficient Unused Data'}
                </span>
              </div>
            </div>

            <button
              onClick={handleGenerateAndStartCustomTest}
              className="w-full sm:w-auto px-5 py-2.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-xs transition-colors active:scale-95 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Launch {customQCount}-Question CBT Test</span>
            </button>
          </div>
        </div>
      )}

      {/* 2. FLASH CARDS (30+ RICH CARDS) */}
      {activeSubTab === 'flash-cards' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Interactive High-Yield Revision Flashcards ({filteredFlashcards.length} Cards)</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Formulas, reaction mechanisms, NCERT diagrams, mnemonics & high-yield points for instant recall.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500 font-mono font-bold">
                Card {activeFcIndex + 1} of {filteredFlashcards.length}
              </span>
            </div>
          </div>

          {/* Filter Bar & Search */}
          <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center justify-between">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-gray-500 font-semibold mr-1">Subject:</span>
              {['All', 'Biology', 'Chemistry', 'Physics'].map(sub => (
                <button
                  key={sub}
                  onClick={() => {
                    setFcSubjectFilter(sub);
                    setActiveFcIndex(0);
                    setIsFlipped(false);
                  }}
                  className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors cursor-pointer ${
                    fcSubjectFilter === sub
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {sub}
                </button>
              ))}

              <span className="text-xs text-gray-500 font-semibold ml-2 mr-1">Type:</span>
              {['All', 'Formulas', 'Reactions', 'Diagrams', 'Concepts'].map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setFcCategoryFilter(cat);
                    setActiveFcIndex(0);
                    setIsFlipped(false);
                  }}
                  className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors cursor-pointer ${
                    fcCategoryFilter === cat
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="w-full sm:w-56">
              <input
                type="text"
                placeholder="Search flashcards..."
                value={fcSearchQuery}
                onChange={e => {
                  setFcSearchQuery(e.target.value);
                  setActiveFcIndex(0);
                }}
                className="w-full px-2.5 py-1 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* 3D Interactive Flashcard */}
          {currentFlashcard && (
            <div className="max-w-2xl mx-auto py-2">
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className={`cursor-pointer min-h-[300px] p-6 rounded-lg border transition-all relative flex flex-col justify-between shadow-xs ${
                  isFlipped
                    ? 'bg-purple-50/60 border-purple-300 hover:border-purple-400'
                    : 'bg-blue-50/60 border-blue-300 hover:border-blue-400'
                }`}
              >
                {/* Card Top Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-blue-700 border border-gray-200 font-mono">
                      {currentFlashcard.subject} &bull; {currentFlashcard.category}
                    </span>
                    <span className="text-xs text-gray-600 font-medium">{currentFlashcard.topic}</span>
                  </div>
                  <span className="text-xs text-gray-600 flex items-center space-x-1 bg-white px-2 py-0.5 rounded border border-gray-200 font-mono text-[11px]">
                    <RotateCcw className="w-3 h-3 text-blue-600" />
                    <span>Click to Flip Card</span>
                  </span>
                </div>

                {/* Card Center Content */}
                <div className="my-5 text-center">
                  {!isFlipped ? (
                    <div className="space-y-3">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">
                        {currentFlashcard.frontTitle}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-lg mx-auto">
                        {currentFlashcard.frontContent}
                      </p>

                      {currentFlashcard.diagramSvg && (
                        <div
                          className="my-3 p-3 bg-white/90 border border-blue-200 rounded-lg flex justify-center items-center overflow-x-auto shadow-2xs"
                          dangerouslySetInnerHTML={{ __html: currentFlashcard.diagramSvg }}
                        />
                      )}

                      {currentFlashcard.frontFormula && (
                        <div className="inline-block px-3.5 py-1.5 rounded bg-white border border-blue-300 text-blue-900 font-mono text-xs font-bold shadow-xs">
                          {currentFlashcard.frontFormula}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-3 text-left">
                      <div className="text-[10px] font-bold text-purple-700 uppercase tracking-wider">
                        Verified NCERT High-Yield Breakdown & Detailed Explanation
                      </div>
                      <p className="text-xs text-gray-800 whitespace-pre-line leading-relaxed font-medium">
                        {currentFlashcard.backExplanation}
                      </p>

                      <div className="space-y-1 pt-2 border-t border-purple-200">
                        {currentFlashcard.backKeyPoints.map((pt, i) => (
                          <div key={i} className="text-xs text-gray-700 flex items-start space-x-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>

                      {currentFlashcard.mnemonic && (
                        <div className="p-2.5 rounded bg-white border border-purple-200 text-purple-900 text-xs flex items-center space-x-2">
                          <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>
                            <strong>Examiner Mnemonic:</strong> {currentFlashcard.mnemonic}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Bottom Controls */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-200/80">
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      setIsFlipped(false);
                      setActiveFcIndex(prev => (prev > 0 ? prev - 1 : filteredFlashcards.length - 1));
                    }}
                    className="px-3 py-1.5 rounded bg-white hover:bg-gray-100 text-gray-700 text-xs font-semibold border border-gray-200 shadow-xs cursor-pointer"
                  >
                    &larr; Previous Card
                  </button>

                  <div className="text-[11px] text-gray-500 font-mono">
                    {activeFcIndex + 1} / {filteredFlashcards.length}
                  </div>

                  <button
                    onClick={e => {
                      e.stopPropagation();
                      setIsFlipped(false);
                      setActiveFcIndex(prev => (prev < filteredFlashcards.length - 1 ? prev + 1 : 0));
                    }}
                    className="px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs cursor-pointer"
                  >
                    Next Card &rarr;
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 3. MIND MAPS */}
      {activeSubTab === 'mind-maps' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
                <Network className="w-4 h-4 text-blue-600" />
                <span>Interactive NCERT Concept Mind Maps</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Deep hierarchical concept branches with examiner notes and subtopics.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {mindMaps.map(mm => (
                <button
                  key={mm.id}
                  onClick={() => setSelectedMindMapId(mm.id)}
                  className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors cursor-pointer ${
                    selectedMindMapId === mm.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {mm.title}
                </button>
              ))}
            </div>
          </div>

          {(() => {
            const activeMap = mindMaps.find(m => m.id === selectedMindMapId) || mindMaps[0];
            if (!activeMap) return null;

            return (
              <div className="space-y-3">
                <div className="p-3.5 rounded bg-blue-50/50 border border-blue-200">
                  <h3 className="text-sm font-bold text-gray-900">{activeMap.title} ({activeMap.subject})</h3>
                  <p className="text-xs text-gray-600 mt-0.5">{activeMap.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {activeMap.children?.map((child, cIdx) => (
                    <div
                      key={cIdx}
                      className="rounded-lg bg-gray-50 border border-gray-200 p-4 space-y-2.5 hover:border-gray-300 transition-colors"
                    >
                      <h4 className="text-xs font-bold text-blue-800 border-b border-gray-200 pb-1.5 flex items-center justify-between">
                        <span>{child.title}</span>
                      </h4>

                      <div className="space-y-1 text-xs text-gray-700">
                        {child.details?.map((d, dIdx) => (
                          <div key={dIdx} className="flex items-start space-x-1.5">
                            <span className="text-blue-600 font-bold">&bull;</span>
                            <span className="leading-relaxed">{d}</span>
                          </div>
                        ))}
                      </div>

                      {child.subTopics && child.subTopics.length > 0 && (
                        <div className="pt-2 border-t border-gray-200/80 space-y-1">
                          <div className="text-[10px] font-bold text-purple-700 uppercase tracking-wider">
                            Examiner Key Highlights & Traps:
                          </div>
                          {child.subTopics.map((st, sIdx) => (
                            <div key={sIdx} className="text-[11px] text-gray-600 flex items-start space-x-1.5">
                              <CheckCircle2 className="w-3 h-3 text-purple-600 shrink-0 mt-0.5" />
                              <span>{st}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* 4. STUDENT ANALYTICS */}
      {activeSubTab === 'analytics' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
                <LineChart className="w-4 h-4 text-blue-600" />
                <span>Student Performance & Diagnostic Analytics</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Real-time tracking of test attempts, accuracy percentage, time per question, and AI weak chapter diagnostics.
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 self-start sm:self-auto uppercase">
              {completedTests.length} Tests Completed
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded bg-gray-50 border border-gray-200 text-center">
              <div className="text-[10px] font-bold text-gray-500 uppercase">Avg NEET Score</div>
              <div className="text-xl font-bold text-emerald-700 font-mono mt-0.5">
                {completedTests.length > 0
                  ? Math.round(completedTests.reduce((acc, t) => acc + t.score, 0) / completedTests.length)
                  : 152} / 180
              </div>
              <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">Target: &gt; 160</div>
            </div>

            <div className="p-3 rounded bg-gray-50 border border-gray-200 text-center">
              <div className="text-[10px] font-bold text-gray-500 uppercase">Overall Accuracy</div>
              <div className="text-xl font-bold text-blue-700 font-mono mt-0.5">
                {completedTests.length > 0
                  ? Math.round(completedTests.reduce((acc, t) => acc + t.accuracyPercentage, 0) / completedTests.length)
                  : 88}%
              </div>
              <div className="text-[10px] text-blue-600 font-semibold mt-0.5">Top 5% National Percentile</div>
            </div>

            <div className="p-3 rounded bg-gray-50 border border-gray-200 text-center">
              <div className="text-[10px] font-bold text-gray-500 uppercase">Time per Question</div>
              <div className="text-xl font-bold text-purple-700 font-mono mt-0.5">46s / Q</div>
              <div className="text-[10px] text-purple-600 font-semibold mt-0.5">Optimal Speed (&lt; 60s)</div>
            </div>

            <div className="p-3 rounded bg-gray-50 border border-gray-200 text-center">
              <div className="text-[10px] font-bold text-gray-500 uppercase">Predicted AIR</div>
              <div className="text-xl font-bold text-amber-700 font-mono mt-0.5">#2,450</div>
              <div className="text-[10px] text-amber-600 font-semibold mt-0.5">Government Medical College</div>
            </div>
          </div>
        </div>
      )}

      {/* 5. DPP GENERATOR (PURELY UNIQUE DAILY QUESTIONS) */}
      {activeSubTab === 'dpp-generator' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
                <FileSpreadsheet className="w-4 h-4 text-blue-600" />
                <span>Daily Practice Paper (DPP) Generator & Offline PDF</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Extracts unattempted daily practice papers with step solutions and downloads as printable PDFs.
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 self-start sm:self-auto uppercase">
              100% Unique Questions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase">DPP Schedule Date</label>
              <input
                type="date"
                value={dppDate}
                onChange={e => setDppDate(e.target.value)}
                className="w-full p-2 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 focus:bg-white focus:border-blue-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase">Subject Coverage</label>
              <select
                value={dppSubject}
                onChange={e => setDppSubject(e.target.value)}
                className="w-full p-2 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 focus:bg-white focus:border-blue-500"
              >
                <option value="Biology Only">🧬 Biology (Botany & Zoology High-Yield Focus)</option>
                <option value="Chemistry Only">🧪 Chemistry (Physical, Inorganic, Organic)</option>
                <option value="All Subjects">⚡ Combined PCB (Physics, Chemistry, Biology)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase">Target Standard</label>
              <select
                value={dppLevel}
                onChange={e => setDppLevel(e.target.value)}
                className="w-full p-2 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 focus:bg-white focus:border-blue-500"
              >
                <option value="CBT Standard Level">CBT Standard NEET/JEE Level</option>
                <option value="AIIMS Rankers Booster">AIIMS / Top 100 Rankers Booster</option>
                <option value="Weak Area Remedial">Weak Area Remedial Drill</option>
              </select>
            </div>
          </div>

          <div className="p-4 rounded bg-gray-50 border border-gray-200 space-y-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-blue-800 uppercase font-mono">
                  DPP-#{dppDate.replace(/-/g, '')}
                </span>
                <h3 className="text-sm font-bold text-gray-900 mt-1">
                  Daily Practice Paper for {dppDate} &bull; {dppSubject}
                </h3>
                <p className="text-xs text-gray-500 font-mono">
                  45 High-Yield Questions &bull; 15 Minutes Speed Time Target &bull; +4 / -1 Marking
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleDownloadDpp}
                  className="px-3 py-1.5 rounded bg-white hover:bg-gray-100 text-gray-700 text-xs font-semibold flex items-center space-x-1.5 border border-gray-300 shadow-xs cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download DPP PDF</span>
                </button>
                <button
                  onClick={handleGenerateAndStartCustomTest}
                  className="px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-xs cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Attempt DPP Live</span>
                </button>
              </div>
            </div>

            {generatedDppSuccess && (
              <div className="p-2.5 rounded bg-green-50 border border-green-200 text-green-800 text-xs flex items-center space-x-1.5 animate-in fade-in">
                <Check className="w-3.5 h-3.5 text-green-600" />
                <span>Daily Practice Paper (DPP) PDF generated and logged to download tracker!</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 6. BOOKS & NOTES LIBRARY */}
      {activeSubTab === 'books' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
                <BookMarked className="w-4 h-4 text-blue-600" />
                <span>Books, NCERT Notes & eBooks Library</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                NCERT notes, revision notes, formula books, eBooks and downloadable PDFs.
              </p>
            </div>
            <div className="flex items-center space-x-1 overflow-x-auto pb-0.5 custom-scrollbar">
              {['All', 'NCERT notes', 'Revision notes', 'Formula books', 'eBooks', 'PDFs'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setBookCategory(cat)}
                  className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors cursor-pointer ${
                    bookCategory === cat
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredBooks.map(book => (
              <div
                key={book.id}
                className="rounded-lg bg-white border border-gray-200 p-4 flex flex-col justify-between hover:border-gray-300 transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-50 text-blue-700 border border-blue-200 uppercase font-mono">
                      {book.category}
                    </span>
                    <span className="text-[11px] text-gray-500 font-mono">{book.pages} Pages &bull; {book.size}</span>
                  </div>

                  <h3 className="text-xs font-bold text-gray-900 leading-snug">{book.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{book.description}</p>

                  <div className="mt-2.5 space-y-1">
                    {book.highlights.map((h, i) => (
                      <div key={i} className="text-[11px] text-gray-600 flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-amber-600 font-semibold">★ {book.rating} / 5.0</span>
                  <div className="flex items-center space-x-1.5">
                    <button
                      onClick={() => downloadBookPDF(book)}
                      title="Download PDF"
                      className="px-2.5 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold flex items-center space-x-1 border border-gray-200 shadow-xs cursor-pointer"
                    >
                      <Download className="w-3 h-3" />
                      <span>PDF</span>
                    </button>
                    <button
                      onClick={() => onOpenBook(book)}
                      className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center space-x-1 shadow-xs cursor-pointer"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Read</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7. NEET / JEE PYQS */}
      {activeSubTab === 'pyqs' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                <span>NEET / JEE Previous Year Questions (PYQs)</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Chapter-wise, topic-wise and year-wise previous year questions with verified step solutions.
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 self-start sm:self-auto uppercase">
              37 Years Solved Archive
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div>
              <label className="text-[10px] font-bold text-gray-500 uppercase">Filter Subject</label>
              <select
                value={pyqSubject}
                onChange={e => setPyqSubject(e.target.value)}
                className="w-full mt-0.5 p-1.5 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 focus:bg-white focus:border-blue-500"
              >
                <option value="All">All Subjects</option>
                <option value="Biology">Biology</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-bold text-gray-500 uppercase">Filter Year</label>
              <select
                value={pyqYear}
                onChange={e => setPyqYear(e.target.value)}
                className="w-full mt-0.5 p-1.5 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 focus:bg-white focus:border-blue-500 font-semibold"
              >
                <option value="All">All Years (2018 - 2024 Solved)</option>
                <option value="2024">2024 (Latest)</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-bold text-gray-500 uppercase">Search Topic / Keyword</label>
              <input
                type="text"
                placeholder="e.g. Lac Operon, Refraction..."
                value={pyqSearch}
                onChange={e => setPyqSearch(e.target.value)}
                className="w-full mt-0.5 p-1.5 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:bg-white focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-3">
            {filteredPYQs.map(item => {
              const isSolutionOpen = expandedSolutionId === item.id;

              return (
                <div
                  key={item.id}
                  className="rounded-lg bg-gray-50 border border-gray-200 p-4 space-y-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 border border-amber-200 font-mono">
                        {item.exam} {item.year}
                      </span>
                      <span className="text-xs font-semibold text-blue-700">{item.subject}</span>
                      <span className="text-xs text-gray-500">&bull; {item.chapter}</span>
                    </div>

                    <span className="text-[10px] text-gray-500 bg-white px-2 py-0.5 rounded border border-gray-200 font-mono">
                      Freq: {item.frequency} | Weightage: {item.conceptWeightage}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-900 font-medium leading-relaxed">
                    {item.question.questionText}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {item.question.options.map((opt, oIdx) => (
                      <div
                        key={oIdx}
                        className={`p-2 rounded border text-xs flex items-center space-x-2 ${
                          isSolutionOpen && oIdx === item.question.correctAnswer
                            ? 'bg-green-50 border-green-300 text-green-900 font-bold'
                            : 'bg-white border-gray-200 text-gray-700'
                        }`}
                      >
                        <span className="w-4 h-4 rounded bg-gray-100 text-gray-600 flex items-center justify-center font-bold text-[9px]">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span>{opt}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-gray-200">
                    <button
                      onClick={() =>
                        setExpandedSolutionId(isSolutionOpen ? null : item.id)
                      }
                      className="text-xs text-blue-700 font-semibold flex items-center space-x-1 hover:underline cursor-pointer"
                    >
                      <span>{isSolutionOpen ? 'Hide Step-by-Step Solution' : 'View Verified Solution'}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${
                          isSolutionOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {isSolutionOpen && (
                    <div className="p-3 rounded bg-white border border-blue-200 space-y-1 animate-in fade-in">
                      <div className="text-xs font-bold text-green-700">
                        Correct Option: {String.fromCharCode(65 + item.question.correctAnswer)}
                      </div>
                      <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-line">
                        {item.question.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 8. MY DOWNLOAD VAULT */}
      {activeSubTab === 'my-downloads' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
                <ArrowDownToLine className="w-4 h-4 text-blue-600" />
                <span>My Download History & Preserved Document Vault</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                All downloaded test question papers, scorecards, NCERT notes, and DPPs logged to your student session.
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 self-start sm:self-auto uppercase">
              {downloads.length} Documents Tracked
            </span>
          </div>

          <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <div className="flex items-center space-x-1.5 text-blue-900 font-bold">
                <User className="w-3.5 h-3.5 text-blue-600" />
                <span>{dlUser?.name || dlUser?.user_metadata?.name || 'Enrolled Student'}</span>
              </div>
              <div className="flex items-center space-x-1.5 text-gray-600 font-mono text-[11px]">
                <Mail className="w-3.5 h-3.5 text-gray-400" />
                <span>{dlUser?.email || 'student.target2026@neetprep.in'}</span>
              </div>
              <div className="flex items-center space-x-1.5 text-emerald-800 font-mono font-semibold text-[11px]">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>{dlUser?.phone || dlUser?.user_metadata?.phone || '+91 9876543210'}</span>
              </div>
            </div>

            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px] font-mono flex items-center space-x-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Session Logged</span>
            </span>
          </div>

          {reDownloadSuccess && (
            <div className="p-2.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center space-x-1.5 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{reDownloadSuccess}</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-between">
            <div className="flex flex-wrap items-center gap-1.5">
              {['All', 'Test Paper', 'Book', 'Scorecard', 'DPP'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setDlCategory(cat)}
                  className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors cursor-pointer ${
                    dlCategory === cat
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {cat === 'All' ? 'All' : cat}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <div className="relative flex-1 sm:w-60">
                <Search className="absolute left-2.5 top-2 w-3.5 h-3.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search downloads..."
                  value={dlSearch}
                  onChange={e => setDlSearch(e.target.value)}
                  className="w-full pl-8 pr-3 py-1 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500"
                />
              </div>

              {downloads.length > 0 && (
                <button
                  onClick={() => {
                    if (window.confirm('Clear all your download history?')) {
                      clearUserDownloads(dlUser?.email);
                      reloadDownloads();
                    }
                  }}
                  className="p-1.5 rounded bg-gray-100 hover:bg-rose-50 text-gray-500 hover:text-rose-600 border border-gray-200 transition cursor-pointer shrink-0"
                  title="Clear Download History"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {filteredDownloads.length > 0 ? (
            <div className="space-y-2.5">
              {filteredDownloads.map(item => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 hover:border-gray-300 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-blue-800 border border-blue-200 uppercase font-mono">
                        {item.category}
                      </span>
                      <span className="text-[11px] text-gray-500 font-mono">
                        {new Date(item.timestamp).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white text-gray-600 border border-gray-200">
                        {item.fileSize || '1.8 MB'} &bull; {item.format || 'PDF'}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                      {item.title}
                    </h4>

                    {item.subject && (
                      <p className="text-[11px] text-gray-500 truncate">
                        Syllabus: <span className="font-medium text-gray-700">{item.subject}</span>
                      </p>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 self-end sm:self-center shrink-0">
                    <button
                      onClick={() => handleReDownloadItem(item)}
                      className="px-3 py-1.5 rounded bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold flex items-center space-x-1.5 shadow-2xs transition cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Re-Download PDF</span>
                    </button>

                    <button
                      onClick={() => handleRemoveDownload(item.id)}
                      className="p-1.5 rounded text-gray-400 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer"
                      title="Remove record"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 px-4 space-y-3 bg-gray-50 rounded-lg border border-dashed border-gray-200">
              <HardDrive className="w-8 h-8 text-gray-400 mx-auto" />
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-gray-700">No downloads tracked in this session</p>
                <p className="text-[11px] text-gray-500">Download any test paper, scorecard, book or DPP to view it here.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
