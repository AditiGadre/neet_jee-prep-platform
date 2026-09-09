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
import { downloadBookPDF, downloadDppPDF, downloadTestPaperPDF } from '../utils/pdfDownloader';
import { getUserDownloads, clearUserDownloads, getCurrentUser } from '../utils/downloadTracker';
import {
  getUnifiedQuestionBank,
  ALL_BIOLOGY_CHAPTERS,
  ALL_CHEMISTRY_CHAPTERS,
  ALL_PHYSICS_CHAPTERS
} from '../utils/questionDatabase';
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
  onStartCustomTest?: (customTest: TestItem) => void;
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
  // Custom Test Builder State (Student High-Yield Edge Tool)
  const [customSubject, setCustomSubject] = useState<'Physics' | 'Chemistry' | 'Biology'>('Biology');
  const [customChapter, setCustomChapter] = useState<string>('Molecular Basis of Inheritance');
  const [customDifficulties, setCustomDifficulties] = useState<string[]>(['Medium', 'Hard']);
  const [customDuration, setCustomDuration] = useState<number>(45);
  const [customQCount, setCustomQCount] = useState<number>(45);
  const [customTestPdfSuccess, setCustomTestPdfSuccess] = useState<string | null>(null);

  const toggleDifficulty = (diff: string) => {
    setCustomDifficulties(prev => {
      if (prev.includes(diff)) {
        if (prev.length === 1) return prev; // Keep at least one
        return prev.filter(d => d !== diff);
      } else {
        return [...prev, diff];
      }
    });
  };

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
  const [isGeneratingDpp, setIsGeneratingDpp] = useState<boolean>(false);
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

  // Sub-tab definitions (Student High-Yield Precision Suite)
  const subModules = [
    { id: 'custom-test', label: 'Custom Test Generator', icon: Sliders, desc: 'Generate high-yield chapter tests and printable papers by difficulty.' },
    { id: 'flash-cards', label: 'Flash Cards', icon: Layers, desc: '30+ high-yield revision cards with formulas, reactions, diagrams & mnemonics.' },
    { id: 'mind-maps', label: 'Mind Maps', icon: Network, desc: 'Interactive concept visual trees for rapid revision.' },
    { id: 'analytics', label: 'Student Analytics', icon: LineChart, desc: 'Score analysis, accuracy, weak topics & progress graphs.' },
    { id: 'dpp-generator', label: 'DPP Generator', icon: FileSpreadsheet, desc: 'Personalized daily practice papers with instant PDF download.' },
    { id: 'books', label: 'Books & Notes', icon: BookMarked, desc: 'NCERT highlighters, revision notes, formula books & downloadable PDFs.' },
    { id: 'pyqs', label: 'NEET/JEE PYQs', icon: HelpCircle, desc: 'Chapter, topic & year-wise previous year questions with step solutions.' },
    { id: 'my-downloads', label: 'My Download Vault', icon: ArrowDownToLine, desc: 'Preserved download history of question papers, scorecards, NCERT books and DPPs.' }
  ];

  // Available Chapters by Subject (Instantly pre-computed)
  const biologyChapters = ALL_BIOLOGY_CHAPTERS;
  const chemistryChapters = ALL_CHEMISTRY_CHAPTERS;
  const physicsChapters = ALL_PHYSICS_CHAPTERS;

  const currentChapterList = customSubject === 'Biology'
    ? biologyChapters
    : customSubject === 'Chemistry'
    ? chemistryChapters
    : physicsChapters;

  useEffect(() => {
    if (currentChapterList.length > 0 && !currentChapterList.includes(customChapter)) {
      setCustomChapter(currentChapterList[0]);
    }
  }, [customSubject, currentChapterList, customChapter]);

  // Unused question pool calculation for active chapter
  const currentPoolStats = useMemo(() => {
    return getUnusedQuestions(customSubject, customChapter, undefined, customDifficulties);
  }, [customSubject, customChapter, customDifficulties, consumptionVersion]);

  // Helper to build test question set
  const generateStudentCustomTestQuestions = (): Question[] => {
    const stats = getUnusedQuestions(customSubject, customChapter, undefined, customDifficulties);
    const allInChapter = getUnifiedQuestionBank(customSubject, customChapter);
    const subjectBackup = getUnifiedQuestionBank(customSubject);

    let candidatePool = stats.unusedQuestions;
    if (customDifficulties.length > 0) {
      const filtered = candidatePool.filter(q => customDifficulties.includes(q.difficulty || 'Medium'));
      if (filtered.length >= customQCount) candidatePool = filtered;
    }

    if (candidatePool.length < customQCount) {
      const supplemental = allInChapter.length > 0 ? allInChapter : subjectBackup;
      const seenIds = new Set(candidatePool.map(q => q.id));
      const needed = [...candidatePool];
      for (const q of supplemental) {
        if (!seenIds.has(q.id)) {
          seenIds.add(q.id);
          needed.push(q);
        }
        if (needed.length >= customQCount) break;
      }
      candidatePool = needed;
    }

    if (candidatePool.length === 0) {
      candidatePool = subjectBackup.length > 0 ? subjectBackup : SAMPLE_QUESTIONS;
    }

    const shuffled = [...candidatePool].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, customQCount);
    markQuestionsAsConsumed(selectedQuestions.map(q => q.id));
    return selectedQuestions;
  };

  // Launch Custom Test in CBT Mode
  const handleLaunchCustomCbtTest = () => {
    const selectedQuestions = generateStudentCustomTestQuestions();
    const customTestItem: TestItem = {
      id: `custom-test-${Date.now()}`,
      title: `Custom Test: ${customSubject} - ${customChapter} (${selectedQuestions.length} Qs)`,
      category: 'custom',
      exam: 'NEET',
      syllabus: `${customSubject} > ${customChapter} (${customDifficulties.join(' + ')} Level &bull; ${selectedQuestions.length} Questions)`,
      totalQuestions: selectedQuestions.length,
      durationMinutes: customDuration,
      totalMarks: selectedQuestions.length * 4,
      negativeMarking: '+4 for correct, -1 for incorrect',
      difficulty: customDifficulties.length > 1 ? 'Mixed' : (customDifficulties[0] as any || 'Medium'),
      cbtMode: true,
      features: [
        `Subject: ${customSubject}`,
        `Chapter: ${customChapter}`,
        `Difficulty: ${customDifficulties.join(' + ')}`,
        `Format: ${selectedQuestions.length} High-Yield Qs (4-5 Line Problems)`
      ],
      questions: selectedQuestions
    };

    if (onStartCustomTest) {
      onStartCustomTest(customTestItem);
    }
  };

  // Download Printable PDF Custom Test Paper
  const handleDownloadCustomTestPdf = () => {
    const selectedQuestions = generateStudentCustomTestQuestions();
    const customTestItem: TestItem = {
      id: `custom-test-pdf-${Date.now()}`,
      title: `Custom Test: ${customSubject} - ${customChapter}`,
      category: 'custom',
      exam: 'NEET',
      syllabus: `${customSubject} > ${customChapter} &bull; ${selectedQuestions.length} Questions (${customDifficulties.join(' + ')})`,
      totalQuestions: selectedQuestions.length,
      durationMinutes: customDuration,
      totalMarks: selectedQuestions.length * 4,
      negativeMarking: '+4 for correct, -1 for incorrect',
      difficulty: customDifficulties.length > 1 ? 'Mixed' : (customDifficulties[0] as any || 'Medium'),
      cbtMode: true,
      questions: selectedQuestions
    };

    downloadTestPaperPDF(customTestItem, true);
    setCustomTestPdfSuccess(`Exported "${customTestItem.title}" PDF successfully!`);
    setTimeout(() => setCustomTestPdfSuccess(null), 3500);
  };

  // Handle DPP Download (Async, Non-Blocking, 0 Hang)
  const handleDownloadDpp = () => {
    setIsGeneratingDpp(true);
    setTimeout(() => {
      try {
        const sub = dppSubject.includes('Chemistry') ? 'Chemistry' : dppSubject.includes('Physics') ? 'Physics' : 'Biology';
        const stats = getUnusedQuestions(sub, 'All Chapters');
        let pool = stats.unusedQuestions;
        if (pool.length < 45) {
          pool = getUnifiedQuestionBank(sub);
        }
        if (pool.length === 0) {
          pool = SAMPLE_QUESTIONS;
        }
        const selected = [...pool].sort(() => 0.5 - Math.random()).slice(0, 45);
        markQuestionsAsConsumed(selected.map(q => q.id));

        downloadDppPDF({
          date: dppDate,
          subject: dppSubject,
          level: dppLevel,
          questions: selected
        });
        setGeneratedDppSuccess(true);
        setTimeout(() => setGeneratedDppSuccess(false), 4000);
      } catch (err) {
        console.error('DPP generation error:', err);
      } finally {
        setIsGeneratingDpp(false);
      }
    }, 50);
  };

  // Handle Attempt DPP Live in CBT Mode
  const handleAttemptDppLive = () => {
    const sub = dppSubject.includes('Chemistry') ? 'Chemistry' : dppSubject.includes('Physics') ? 'Physics' : 'Biology';
    const stats = getUnusedQuestions(sub, 'All Chapters');
    let pool = stats.unusedQuestions;
    if (pool.length < 45) {
      pool = getUnifiedQuestionBank(sub);
    }
    if (pool.length === 0) {
      pool = SAMPLE_QUESTIONS;
    }
    const selected = [...pool].sort(() => 0.5 - Math.random()).slice(0, 45);
    markQuestionsAsConsumed(selected.map(q => q.id));

    const dppTest: TestItem = {
      id: `dpp-live-${Date.now()}`,
      title: `Daily Practice Paper (DPP) - ${dppSubject} (${dppDate})`,
      category: 'custom',
      exam: 'NEET',
      syllabus: `${dppSubject} &bull; ${dppLevel} (45 High-Yield Speed Practice Questions)`,
      totalQuestions: selected.length,
      durationMinutes: 45,
      totalMarks: selected.length * 4,
      negativeMarking: '+4 for correct, -1 for incorrect',
      difficulty: dppLevel === 'AIIMS Rankers Booster' ? 'Hard' : 'Medium',
      cbtMode: true,
      features: [
        `Subject: ${dppSubject}`,
        `Target Date: ${dppDate}`,
        `Standard: ${dppLevel}`,
        `Complete Step-by-Step Derivations`
      ],
      questions: selected
    };

    if (onStartCustomTest) {
      onStartCustomTest(dppTest);
    }
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
        questions: getUnifiedQuestionBank('Biology').slice(0, 45)
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
              <Sparkles className="w-3 h-3 text-blue-600" /> High-Yield Academic Edge Suite
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              2. What Extra We Offer (8 Precision Learning Tools)
            </h1>
            <p className="mt-1 text-xs text-gray-600 max-w-3xl">
              Custom CBT Test Generator, Interactive Flashcards, Visual Mind Maps, Personalized DPP Generator, Books & Notes, PYQs, and tracked PDF download vault.
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

      {/* 1. CUSTOM TEST GENERATOR (INSTANT 0MS BUILDER) */}
      {activeSubTab === 'custom-test' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
                <Sliders className="w-4 h-4 text-blue-600" />
                <span>Custom CBT Test Generator & Paper Factory</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Customize subject, chapter, difficulty standard, and question count to launch a personalized CBT test or export a printable test paper.
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded border uppercase bg-blue-50 text-blue-700 border-blue-200">
                NTA NEET Simulation &bull; +4 / -1
              </span>
            </div>
          </div>

          {customTestPdfSuccess && (
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center space-x-2 animate-in fade-in">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{customTestPdfSuccess}</span>
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
                  if (sub === 'Biology') setCustomChapter(biologyChapters[0]);
                  else if (sub === 'Chemistry') setCustomChapter(chemistryChapters[0]);
                  else setCustomChapter(physicsChapters[0]);
                }}
                className="w-full p-2 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 focus:bg-white focus:border-blue-500 font-semibold"
              >
                <option value="Biology">🧬 Biology (All 38 Chapters)</option>
                <option value="Chemistry">🧪 Chemistry (Physical, Inorganic, Organic)</option>
                <option value="Physics">⚡ Physics (Mechanics, Electrodynamics, Modern)</option>
              </select>
            </div>

            {/* Chapter Selector */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase">2. Select Chapter ({currentChapterList.length} Units)</label>
              <select
                value={customChapter}
                onChange={e => setCustomChapter(e.target.value)}
                className="w-full p-2 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 focus:bg-white focus:border-blue-500 font-semibold"
              >
                {currentChapterList.map((ch, idx) => (
                  <option key={idx} value={ch}>
                    {idx + 1}. {ch}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Level (Multi-Select Support) */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-bold text-gray-500 uppercase">3. Difficulty Standards (Select 1 or More)</label>
                <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                  {customDifficulties.length} Selected
                </span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { id: 'Easy', label: 'Easy (NCERT Warmup)', desc: 'Fundamental theory' },
                  { id: 'Medium', label: 'Medium (NTA Level)', desc: 'Standard numericals' },
                  { id: 'Hard', label: 'Hard (High-Rigor)', desc: 'Multi-statement & multi-clause' },
                  { id: 'Advanced', label: 'Advanced (AIIMS Level)', desc: 'Assertion-Reason & deep analytical' }
                ].map(item => {
                  const isSelected = customDifficulties.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleDifficulty(item.id)}
                      className={`p-2 rounded text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-blue-50/90 border-blue-500 ring-1 ring-blue-500/30 text-blue-900 shadow-2xs'
                          : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xs font-bold">{item.id}</span>
                        <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] font-bold ${
                          isSelected ? 'bg-blue-600 text-white' : 'border border-gray-300 bg-white'
                        }`}>
                          {isSelected ? '✓' : ''}
                        </span>
                      </div>
                      <span className="text-[9px] text-gray-500 mt-0.5">{item.desc}</span>
                    </button>
                  );
                })}
              </div>
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
              <label className="text-[10px] font-bold text-gray-500 uppercase">6. Exam Standard & Marking</label>
              <div className="p-2 rounded bg-gray-50 border border-gray-200 text-xs font-mono font-semibold text-gray-800 flex items-center justify-between">
                <span>Correct: <strong className="text-emerald-700">+4 Marks</strong></span>
                <span>Incorrect: <strong className="text-rose-700">-1 Mark</strong></span>
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
                <span className="text-purple-700 font-bold">{customDuration} Minutes</span> &bull; Level:{' '}
                <span className="text-indigo-700 font-bold">{customDifficulties.join(' + ')}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleDownloadCustomTestPdf}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded bg-white hover:bg-gray-100 text-gray-800 font-bold text-xs border border-gray-300 flex items-center justify-center space-x-1.5 shadow-2xs transition cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-gray-600" />
                <span>Export Test PDF</span>
              </button>

              <button
                onClick={handleLaunchCustomCbtTest}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-xs transition-colors active:scale-95 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Launch {customQCount}-Question CBT Test</span>
              </button>
            </div>
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
                        High-Yield Breakdown & Detailed Explanation
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
                            <strong>High-Yield Mnemonic:</strong> {currentFlashcard.mnemonic}
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
                    className="px-3 py-1.5 rounded bg-white hover:bg-gray-100 text-gray-700 text-xs font-semibold border border-gray-200 shadow-xs cursor-pointer"
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
                Deep hierarchical concept branches with high-yield key notes and subtopics.
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
                            Key High-Yield Highlights & Notes:
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
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
                <LineChart className="w-4 h-4 text-blue-600" />
                <span>Performance & Weak Chapter Analytics</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Live performance score breakdown, speed metrics, accuracy rates, and AI recommendations.
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200 uppercase">
              {completedTests.length} Tests Logged
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

      {/* 5. DPP GENERATOR (NON-BLOCKING & INSTANT) */}
      {activeSubTab === 'dpp-generator' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
                <FileSpreadsheet className="w-4 h-4 text-blue-600" />
                <span>Daily Practice Paper (DPP) Generator & Offline PDF</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Extracts daily practice papers with step solutions and downloads as printable PDFs.
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
                  45 High-Yield Questions &bull; 45 Minutes Time Target &bull; +4 / -1 Marking
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleDownloadDpp}
                  disabled={isGeneratingDpp}
                  className="px-3 py-1.5 rounded bg-white hover:bg-gray-100 text-gray-700 text-xs font-semibold flex items-center space-x-1.5 border border-gray-300 shadow-xs cursor-pointer disabled:opacity-50"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isGeneratingDpp ? 'Generating PDF...' : 'Download DPP PDF'}</span>
                </button>
                <button
                  onClick={handleAttemptDppLive}
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
              {['All', 'Biology', 'Chemistry', 'Physics', 'Formula Books'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setBookCategory(cat)}
                  className={`px-2.5 py-1 rounded text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredBooks.map(book => (
              <div
                key={book.id}
                className="p-4 rounded-lg bg-gray-50 border border-gray-200 flex flex-col justify-between hover:border-blue-300 transition-all space-y-3"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-mono">
                      {book.subject} &bull; {book.category}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">{book.size}</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">{book.title}</h3>
                  <p className="text-xs text-gray-600 line-clamp-2">{book.description}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-gray-200">
                  <div className="flex items-center justify-between text-[11px] text-gray-500 font-mono">
                    <span>{book.pages} Pages</span>
                    <span>★ {book.rating} / 5.0</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onOpenBook(book)}
                      className="flex-1 py-1.5 rounded bg-white hover:bg-gray-100 text-gray-800 text-xs font-semibold border border-gray-300 flex items-center justify-center space-x-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-gray-600" />
                      <span>Read Online</span>
                    </button>
                    <button
                      onClick={() => downloadBookPDF(book)}
                      className="flex-1 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center justify-center space-x-1 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7. PYQS BANK */}
      {activeSubTab === 'pyqs' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                <span>NEET / JEE Previous Year Questions (PYQs 2018–2025)</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Chapter, topic and year-wise authentic previous year examination questions with step solutions.
              </p>
            </div>
            <div className="w-full sm:w-64">
              <input
                type="text"
                placeholder="Search PYQ topic or question..."
                value={pyqSearch}
                onChange={e => setPyqSearch(e.target.value)}
                className="w-full px-3 py-1.5 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-3">
            {filteredPYQs.map(pyq => {
              const isExpanded = expandedSolutionId === pyq.id;
              return (
                <div key={pyq.id} className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-mono">
                        {pyq.exam} {pyq.year}
                      </span>
                      <span className="text-xs font-semibold text-gray-700">{pyq.subject} &bull; {pyq.chapter}</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-gray-600 border border-gray-200 font-bold">
                      {pyq.difficulty}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-900 font-medium leading-relaxed">
                    {pyq.question.questionText}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pyq.question.options.map((opt, oIdx) => (
                      <div
                        key={oIdx}
                        className={`p-2 rounded text-xs border ${
                          isExpanded && oIdx === pyq.question.correctAnswer
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                            : 'bg-white border-gray-200 text-gray-700'
                        }`}
                      >
                        <span className="font-bold mr-1.5">({String.fromCharCode(65 + oIdx)})</span>
                        <span>{opt}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-gray-200 flex items-center justify-between">
                    <button
                      onClick={() => setExpandedSolutionId(isExpanded ? null : pyq.id)}
                      className="text-xs text-blue-600 font-semibold hover:underline flex items-center space-x-1 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Step Solution' : 'View Step Solution & Concept'}</span>
                    </button>
                    {isExpanded && (
                      <span className="text-[10px] font-mono text-emerald-700 font-bold">
                        Correct Answer: ({String.fromCharCode(65 + pyq.question.correctAnswer)})
                      </span>
                    )}
                  </div>

                  {isExpanded && (
                    <div className="p-3 rounded bg-blue-50/50 border border-blue-200 text-xs text-gray-800 space-y-1.5 animate-in fade-in">
                      <div className="font-bold text-blue-900">Step-by-Step Derivation & Explanation:</div>
                      <p className="leading-relaxed whitespace-pre-line">{pyq.question.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 8. MY DOWNLOADS VAULT */}
      {activeSubTab === 'my-downloads' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
                <ArrowDownToLine className="w-4 h-4 text-blue-600" />
                <span>My Downloaded Test Papers & Scorecards</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                View your complete download history, test papers, scorecards, and re-download PDFs anytime.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 uppercase">
                {downloads.length} Files in History
              </span>
            </div>
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
