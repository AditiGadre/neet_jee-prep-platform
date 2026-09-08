import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  Bell,
  ShieldCheck,
  Download,
  FileText,
  BookOpen,
  Award,
  FileSpreadsheet,
  CheckCircle2,
  Calendar,
  HardDrive,
  User,
  Phone,
  Mail,
  Search,
  Trash2,
  CheckCheck,
  TrendingUp,
  Activity,
  Users,
  Database,
  ArrowDownToLine,
  FileDown,
  Sliders,
  Play,
  Upload,
  RefreshCw,
  Sparkles,
  Printer
} from 'lucide-react';
import {
  SuperUserNotification,
  getSuperUserNotifications,
  getSuperUserMetrics,
  markAllSuperUserNotificationsAsRead,
  clearSuperUserNotifications
} from '../utils/superUserNotifier';
import {
  getUnifiedQuestionBank,
  ALL_BIOLOGY_CHAPTERS,
  ALL_CHEMISTRY_CHAPTERS,
  ALL_PHYSICS_CHAPTERS
} from '../utils/questionDatabase';
import {
  getUnusedQuestions,
  markQuestionsAsConsumed,
  resetChapterConsumption
} from '../utils/questionTracker';
import { downloadTestPaperPDF } from '../utils/pdfDownloader';
import { TestItem, Question } from '../types';
import { SAMPLE_QUESTIONS } from '../data/mockData';

interface SuperUserModalProps {
  onClose: () => void;
  onStartCustomTest?: (customTest: TestItem) => void;
  onOpenUploadModal?: (subject?: string, chapter?: string) => void;
}

export const SuperUserModal: React.FC<SuperUserModalProps> = ({
  onClose,
  onStartCustomTest,
  onOpenUploadModal
}) => {
  const [adminTab, setAdminTab] = useState<'generator' | 'telemetry' | 'students'>('generator');
  const [notifications, setNotifications] = useState<SuperUserNotification[]>([]);
  const [metrics, setMetrics] = useState(getSuperUserMetrics());
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Custom Test Builder State (Admin Exclusive)
  const [customSubject, setCustomSubject] = useState<'Physics' | 'Chemistry' | 'Biology'>('Biology');
  const [customChapter, setCustomChapter] = useState<string>('Molecular Basis of Inheritance');
  const [customTopic, setCustomTopic] = useState<string>('All Topics');
  const [customDifficulty, setCustomDifficulty] = useState<'Easy' | 'Medium' | 'Hard' | 'Both' | 'Adaptive'>('Both');
  const [customDuration, setCustomDuration] = useState<number>(45);
  const [customQCount, setCustomQCount] = useState<number>(45);
  const [consumptionVersion, setConsumptionVersion] = useState<number>(0);
  const [exportSuccess, setExportSuccess] = useState<string | null>(null);

  // Institution Sunday Test Access Control State
  const [isAdminTestAccessGranted, setIsAdminTestAccessGranted] = useState<boolean>(() => {
    try {
      return localStorage.getItem('neet_admin_test_access') === 'true';
    } catch {
      return false;
    }
  });

  const handleToggleAdminTestAccess = () => {
    const next = !isAdminTestAccessGranted;
    localStorage.setItem('neet_admin_test_access', next ? 'true' : 'false');
    setIsAdminTestAccessGranted(next);
    window.dispatchEvent(new CustomEvent('neet_admin_access_changed', { detail: { accessGranted: next } }));
  };

  const reloadData = () => {
    setNotifications(getSuperUserNotifications());
    setMetrics(getSuperUserMetrics());
  };

  useEffect(() => {
    reloadData();

    const handleAlert = () => reloadData();
    const handleConsumption = () => setConsumptionVersion(v => v + 1);

    window.addEventListener('neet_superuser_alert', handleAlert);
    window.addEventListener('neet_consumption_updated', handleConsumption);
    return () => {
      window.removeEventListener('neet_superuser_alert', handleAlert);
      window.removeEventListener('neet_consumption_updated', handleConsumption);
    };
  }, []);

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
    return getUnusedQuestions(customSubject, customChapter, undefined, customDifficulty);
  }, [customSubject, customChapter, customDifficulty, consumptionVersion]);

  // Custom Test Generator logic for Admin
  const generateCustomTestQuestions = (): Question[] => {
    const stats = getUnusedQuestions(customSubject, customChapter, undefined, customDifficulty);
    const allInChapter = getUnifiedQuestionBank(customSubject, customChapter);
    const subjectBackup = getUnifiedQuestionBank(customSubject);

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
    } else if (customDifficulty === 'Easy') {
      const filtered = candidatePool.filter(q => q.difficulty === 'Easy');
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

  const handleLaunchAdminCbt = () => {
    const selectedQuestions = generateCustomTestQuestions();
    const customTestItem: TestItem = {
      id: `admin-custom-${Date.now()}`,
      title: `Admin Custom Test: ${customSubject} - ${customChapter} (${selectedQuestions.length} Qs)`,
      category: 'custom',
      exam: 'NEET',
      syllabus: `${customSubject} > ${customChapter} > ${customTopic} (${customDifficulty} Level &bull; ${selectedQuestions.length} Questions)`,
      totalQuestions: selectedQuestions.length,
      durationMinutes: customDuration,
      totalMarks: selectedQuestions.length * 4,
      negativeMarking: '+4 for correct, -1 for incorrect',
      difficulty: customDifficulty === 'Adaptive' ? 'Mixed' : customDifficulty,
      cbtMode: true,
      features: [
        `Subject: ${customSubject}`,
        `Chapter: ${customChapter}`,
        `Format: ${selectedQuestions.length} High-Yield Qs`,
        `Complete Step-by-Step Derivations`
      ],
      questions: selectedQuestions
    };

    if (onStartCustomTest) {
      onClose();
      onStartCustomTest(customTestItem);
    }
  };

  const handleExportCustomPdf = () => {
    const selectedQuestions = generateCustomTestQuestions();
    const customTestItem: TestItem = {
      id: `admin-pdf-${Date.now()}`,
      title: `Admin Custom Test - ${customSubject} (${customChapter})`,
      category: 'custom',
      exam: 'NEET',
      syllabus: `${customSubject} > ${customChapter} &bull; ${selectedQuestions.length} Questions`,
      totalQuestions: selectedQuestions.length,
      durationMinutes: customDuration,
      totalMarks: selectedQuestions.length * 4,
      negativeMarking: '+4 for correct, -1 for incorrect',
      difficulty: customDifficulty === 'Adaptive' ? 'Mixed' : customDifficulty,
      cbtMode: true,
      questions: selectedQuestions
    };

    downloadTestPaperPDF(customTestItem, true);
    setExportSuccess(`Exported "${customTestItem.title}" PDF successfully!`);
    setTimeout(() => setExportSuccess(null), 3500);
  };

  const handleMarkAllRead = () => {
    markAllSuperUserNotificationsAsRead();
    reloadData();
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all Super User download notifications?')) {
      clearSuperUserNotifications();
      reloadData();
    }
  };

  const handleExportCSV = () => {
    if (notifications.length === 0) return;
    const headers = ['Timestamp', 'Student Name', 'Contact Number', 'Email', 'Category', 'Document Title', 'File Size'];
    const rows = notifications.map(n => [
      `"${new Date(n.timestamp).toLocaleString()}"`,
      `"${n.userName}"`,
      `"${n.userPhone}"`,
      `"${n.userEmail}"`,
      `"${n.category}"`,
      `"${n.contentTitle.replace(/"/g, '""')}"`,
      `"${n.fileSize}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `neet_cbt_downloads_report_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter notifications
  const filteredNotifications = notifications.filter(n => {
    const matchesCat = categoryFilter === 'All' || n.category === categoryFilter;
    const matchesQuery =
      !searchQuery ||
      n.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.userPhone.includes(searchQuery) ||
      n.userEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.contentTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Test Paper':
        return { bg: 'bg-blue-50 text-blue-700 border-blue-200', icon: FileText };
      case 'Book':
        return { bg: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: BookOpen };
      case 'Scorecard':
        return { bg: 'bg-purple-50 text-purple-700 border-purple-200', icon: Award };
      case 'DPP':
        return { bg: 'bg-amber-50 text-amber-700 border-amber-200', icon: FileSpreadsheet };
      default:
        return { bg: 'bg-gray-50 text-gray-700 border-gray-200', icon: Download };
    }
  };

  const enrolledStudent = (() => {
    try {
      const raw = localStorage.getItem('neet_enrolled_student');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  })();

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl shadow-2xl flex flex-col max-h-[94vh] text-gray-900 relative animate-in zoom-in-95 duration-150 overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-gray-200 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-base sm:text-lg font-bold text-white">
                  Admin & Super User Control Center
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-[10px] font-bold font-mono">
                  FACULTY & ADMIN PORTAL
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Custom Test Generator, automated PDF paper builder, live telemetry, and student access controls.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Primary Admin Navigation Tabs + Quick Test Access Switch */}
        <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-slate-100 border-b border-gray-200 gap-2">
          <div className="flex items-center space-x-2 overflow-x-auto">
            <button
              onClick={() => setAdminTab('generator')}
              className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                adminTab === 'generator'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-gray-200'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Custom Test Generator</span>
            </button>

            <button
              onClick={() => setAdminTab('telemetry')}
              className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                adminTab === 'telemetry'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-gray-200'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Download Telemetry & Audit</span>
              {metrics.unreadCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-900 text-[10px] font-mono font-bold">
                  {metrics.unreadCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setAdminTab('students')}
              className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                adminTab === 'students'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-gray-200'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Student Directory & Access Control</span>
            </button>
          </div>

          {/* Quick Test Access Controller in Header */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handleToggleAdminTestAccess}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition flex items-center space-x-1.5 cursor-pointer shadow-xs ${
                isAdminTestAccessGranted
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-amber-500 hover:bg-amber-600 text-slate-950'
              }`}
              title="Toggle Student Sunday Test Series Access"
            >
              {isAdminTestAccessGranted ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Sunday Tests: UNLOCKED (Click to Lock)</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5" />
                  <span>Sunday Tests: LOCKED (Click to Unlock)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: ADMIN CUSTOM TEST GENERATOR & PAPER FACTORY */}
        {/* ========================================================================= */}
        {adminTab === 'generator' && (
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-[#f8fafc]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200 gap-2">
              <div>
                <h3 className="text-base font-bold text-gray-900 flex items-center space-x-2">
                  <Sliders className="w-4 h-4 text-blue-600" />
                  <span>Admin Custom Test Paper Generator</span>
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Configure custom difficulty, duration, question pool, and export PDF test papers or launch CBT simulation.
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-300">
                  {currentPoolStats.remainingUnused} Available in {customChapter}
                </span>
              </div>
            </div>

            {exportSuccess && (
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center space-x-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{exportSuccess}</span>
              </div>
            )}

            {/* Builder Configuration Form */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 bg-white p-4 rounded-xl border border-gray-200 shadow-2xs">
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
                  className="w-full p-2.5 rounded-lg bg-gray-50 border border-gray-300 text-xs text-gray-900 focus:bg-white focus:border-blue-500 font-semibold"
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
                  className="w-full p-2.5 rounded-lg bg-gray-50 border border-gray-300 text-xs text-gray-900 focus:bg-white focus:border-blue-500 font-semibold"
                >
                  {currentChapterList.map((ch, idx) => (
                    <option key={idx} value={ch}>
                      {idx + 1}. {ch}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty Standard */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-500 uppercase">3. Difficulty Standard</label>
                <select
                  value={customDifficulty}
                  onChange={e => setCustomDifficulty(e.target.value as any)}
                  className="w-full p-2.5 rounded-lg bg-gray-50 border border-gray-300 text-xs text-gray-900 focus:bg-white focus:border-blue-500 font-semibold"
                >
                  <option value="Both">Both Medium & Hard (Standard Exam Mix)</option>
                  <option value="Hard">Hard (High Difficulty & Advanced Analytical)</option>
                  <option value="Medium">Medium Level Only</option>
                  <option value="Easy">Easy (Fundamental Warmup)</option>
                  <option value="Adaptive">Adaptive (Dynamic Multi-Tier Blend)</option>
                </select>
              </div>

              {/* Questions Count Preset */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-500 uppercase">4. Number of Questions</label>
                <div className="grid grid-cols-4 gap-1.5">
                  {[15, 30, 45, 90].map(cnt => (
                    <button
                      key={cnt}
                      type="button"
                      onClick={() => {
                        setCustomQCount(cnt);
                        setCustomDuration(cnt);
                      }}
                      className={`py-2 rounded-lg text-xs font-bold font-mono transition-colors cursor-pointer ${
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
                  {[15, 30, 45, 90].map(mins => (
                    <button
                      key={mins}
                      type="button"
                      onClick={() => setCustomDuration(mins)}
                      className={`py-2 rounded-lg text-xs font-bold font-mono transition-colors cursor-pointer ${
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

              {/* Bank Pool Telemetry */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-500 uppercase">6. Question Pool Health</label>
                <div className="p-2 rounded-lg bg-gray-50 border border-gray-200 text-xs font-mono font-semibold text-gray-800 flex items-center justify-between">
                  <span>Available: <strong className="text-emerald-700">{currentPoolStats.remainingUnused}</strong></span>
                  <span>Total Unit: <strong className="text-blue-700">{currentPoolStats.totalInBank}</strong></span>
                </div>
              </div>
            </div>

            {/* Test Actions & Launchers */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-xs">
                <div className="text-gray-900 font-bold text-sm">
                  Configured Test: {customSubject} &bull; {customChapter}
                </div>
                <div className="text-gray-600 font-mono">
                  {customQCount} Questions &bull; {customQCount * 4} Marks &bull; {customDuration} Minutes &bull; Level: {customDifficulty}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleExportCustomPdf}
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-white hover:bg-gray-100 text-gray-800 font-bold text-xs border border-gray-300 flex items-center justify-center space-x-1.5 shadow-2xs transition cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-gray-600" />
                  <span>Export Test PDF</span>
                </button>

                <button
                  type="button"
                  onClick={handleLaunchAdminCbt}
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-md transition cursor-pointer active:scale-95"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Launch CBT Test</span>
                </button>

                {onOpenUploadModal && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenUploadModal(customSubject, customChapter);
                    }}
                    className="px-3.5 py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-800 font-bold text-xs border border-purple-300 flex items-center justify-center space-x-1 transition cursor-pointer"
                    title="Upload more questions"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Qs</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: LIVE DOWNLOAD TELEMETRY & AUDIT LOGS */}
        {/* ========================================================================= */}
        {adminTab === 'telemetry' && (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top Summary Metrics Cards */}
            <div className="p-4 sm:p-5 bg-slate-50 border-b border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 bg-white rounded-xl border border-gray-200 shadow-2xs">
                <div className="flex items-center justify-between text-[11px] font-bold text-gray-500 uppercase">
                  <span>Total Volume</span>
                  <HardDrive className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-blue-700 font-mono mt-1">
                  {metrics.totalVolumeFormatted}
                </div>
                <p className="text-[10px] text-gray-400 mt-0.5 font-medium">Content Downloaded</p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-gray-200 shadow-2xs">
                <div className="flex items-center justify-between text-[11px] font-bold text-gray-500 uppercase">
                  <span>Total Downloads</span>
                  <ArrowDownToLine className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-emerald-700 font-mono mt-1">
                  {metrics.totalDownloads}
                </div>
                <p className="text-[10px] text-gray-400 mt-0.5 font-medium">Verified PDF Actions</p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-gray-200 shadow-2xs">
                <div className="flex items-center justify-between text-[11px] font-bold text-gray-500 uppercase">
                  <span>Active Students</span>
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-purple-700 font-mono mt-1">
                  {metrics.uniqueStudents}
                </div>
                <p className="text-[10px] text-gray-400 mt-0.5 font-medium">With Verified Phone/Email</p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-gray-200 shadow-2xs">
                <div className="flex items-center justify-between text-[11px] font-bold text-gray-500 uppercase">
                  <span>Unread Alerts</span>
                  <Bell className="w-4 h-4 text-amber-500" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-amber-700 font-mono mt-1">
                  {metrics.unreadCount}
                </div>
                <p className="text-[10px] text-gray-400 mt-0.5 font-medium">New Notifications</p>
              </div>
            </div>

            {/* Filter & Action Toolbar */}
            <div className="p-3 sm:p-4 border-b border-gray-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 bg-white">
              <div className="flex flex-wrap items-center gap-1.5">
                {['All', 'Test Paper', 'Book', 'Scorecard', 'DPP'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      categoryFilter === cat
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    {cat === 'All' ? 'All Alerts' : cat}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <div className="relative flex-1 sm:w-60">
                  <Search className="absolute left-2.5 top-2 w-3.5 h-3.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search student, phone, or title..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  onClick={handleMarkAllRead}
                  className="px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold flex items-center space-x-1 border border-gray-200 transition cursor-pointer"
                  title="Mark All as Read"
                >
                  <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="hidden md:inline">Mark Read</span>
                </button>

                <button
                  onClick={handleExportCSV}
                  className="px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-semibold flex items-center space-x-1 transition cursor-pointer"
                  title="Export CSV Report"
                >
                  <FileDown className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="hidden md:inline">Export CSV</span>
                </button>

                {notifications.length > 0 && (
                  <button
                    onClick={handleClear}
                    className="p-1.5 rounded-lg bg-gray-100 hover:bg-rose-50 text-gray-400 hover:text-rose-600 border border-gray-200 transition cursor-pointer"
                    title="Clear All Notifications"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Live Notification Feed */}
            <div className="flex-1 p-4 sm:p-5 overflow-y-auto custom-scrollbar space-y-2.5 bg-[#f9fafb]">
              {filteredNotifications.length > 0 ? (
                filteredNotifications.map(item => {
                  const badge = getCategoryBadge(item.category);
                  const BadgeIcon = badge.icon;

                  return (
                    <div
                      key={item.id}
                      className={`p-3.5 sm:p-4 rounded-xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs ${
                        !item.read ? 'bg-white border-blue-300 ring-1 ring-blue-100' : 'bg-white border-gray-200'
                      }`}
                    >
                      <div className="flex items-start space-x-3 min-w-0">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${badge.bg}`}>
                          <BadgeIcon className="w-4 h-4" />
                        </div>

                        <div className="space-y-1 min-w-0">
                          <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                            <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded border uppercase font-mono ${badge.bg}`}>
                              {item.category}
                            </span>
                            {!item.read && (
                              <span className="px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 font-bold text-[9px] uppercase font-mono">
                                NEW
                              </span>
                            )}
                            <span className="text-[11px] text-gray-500 font-mono flex items-center space-x-1">
                              <Calendar className="w-3 h-3 text-gray-400" />
                              <span>{new Date(item.timestamp).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                            </span>
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-gray-100 text-gray-600 border border-gray-200 font-bold">
                              {item.fileSize}
                            </span>
                          </div>

                          <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                            {item.contentTitle}
                          </h4>

                          {/* Student Info Details */}
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs pt-0.5">
                            <span className="inline-flex items-center space-x-1 text-blue-900 font-bold">
                              <User className="w-3 h-3 text-blue-600" />
                              <span>{item.userName}</span>
                            </span>
                            <span className="inline-flex items-center space-x-1 text-emerald-800 font-mono font-semibold text-[11px]">
                              <Phone className="w-3 h-3 text-emerald-600" />
                              <span>{item.userPhone}</span>
                            </span>
                            <span className="inline-flex items-center space-x-1 text-gray-500 font-mono text-[11px]">
                              <Mail className="w-3 h-3 text-gray-400" />
                              <span>{item.userEmail}</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1.5 self-end sm:self-center shrink-0">
                        <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold font-mono">
                          ✓ Verified
                        </span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-12 px-4 space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                    <Bell className="w-6 h-6" />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-bold text-gray-900">No Super User download alerts at this time</h3>
                    <p className="text-xs text-gray-500">
                      When students download test papers, NCERT books, scorecards, or DPPs, records stream here in real-time.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: ENROLLED STUDENTS & DOMICILE DIRECTORY */}
        {/* ========================================================================= */}
        {adminTab === 'students' && (
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-[#f8fafc]">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <div>
                <h3 className="text-base font-bold text-gray-900 flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>Enrolled Student Database & Test Access Control</span>
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Real-time database of registered candidates with category, domicile state, contact numbers, and Sunday test authorizations.
                </p>
              </div>
            </div>

            {/* Institutional Test Access Management Master Card */}
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-5 rounded-2xl text-white shadow-md space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
                <div className="space-y-0.5">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-400 text-slate-900 uppercase">
                      Admin Access Authority
                    </span>
                    <span className="text-xs text-blue-200 font-mono">33 Sunday Tests Master Switch</span>
                  </div>
                  <h4 className="text-base font-bold text-white mt-1 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-cyan-300" />
                    <span>Institution Sunday Test Series Authorization</span>
                  </h4>
                </div>

                <button
                  onClick={handleToggleAdminTestAccess}
                  className={`px-4 py-2 rounded-xl font-bold text-xs transition flex items-center justify-center space-x-2 cursor-pointer shadow-md ${
                    isAdminTestAccessGranted
                      ? 'bg-rose-600 hover:bg-rose-700 text-white'
                      : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white'
                  }`}
                >
                  {isAdminTestAccessGranted ? (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Revoke & Lock Sunday Tests</span>
                    </>
                  ) : (
                    <>
                      <Unlock className="w-4 h-4" />
                      <span>Grant & Unlock Sunday Tests for Students</span>
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 space-y-1">
                  <div className="text-[10px] uppercase font-bold text-blue-200">Current Access Status</div>
                  <div className={`text-sm font-bold font-mono ${isAdminTestAccessGranted ? 'text-emerald-300' : 'text-amber-300'}`}>
                    {isAdminTestAccessGranted ? '✓ ACCESS GRANTED (UNLOCKED)' : '🔒 ACCESS LOCKED (APPROVAL REQUIRED)'}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/10 border border-white/10 space-y-1">
                  <div className="text-[10px] uppercase font-bold text-blue-200">Test Series Scope</div>
                  <div className="text-sm font-bold text-white font-mono">
                    33 Official Sunday Tests (5,940 Qs)
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/10 border border-white/10 space-y-1">
                  <div className="text-[10px] uppercase font-bold text-blue-200">Student Enforcement</div>
                  <div className="text-sm font-bold text-white font-mono">
                    {isAdminTestAccessGranted ? 'Direct CBT Launch Allowed' : 'Strict Approval Gate Active'}
                  </div>
                </div>
              </div>
            </div>

            {enrolledStudent ? (
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-2xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-black text-base flex items-center justify-center shadow-xs">
                      {enrolledStudent.studentName?.charAt(0) || 'S'}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="text-base font-bold text-gray-900">{enrolledStudent.studentName}</h4>
                        <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold">
                          {enrolledStudent.caste || 'General / Open'}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 font-mono">
                        Roll: {enrolledStudent.rollNumber} &bull; Target: {enrolledStudent.targetExam || 'NEET (UG)'} {enrolledStudent.targetYear || '2026'}
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold text-xs font-mono">
                    ✓ Verified Active
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-[10px] uppercase font-bold text-gray-500">Contact Number</div>
                    <div className="font-mono font-bold text-gray-900 mt-0.5">+91 {enrolledStudent.studentPhone}</div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-[10px] uppercase font-bold text-gray-500">Email Address</div>
                    <div className="font-mono font-semibold text-gray-900 mt-0.5 truncate">{enrolledStudent.email}</div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-[10px] uppercase font-bold text-gray-500">Parent / Guardian</div>
                    <div className="font-semibold text-gray-900 mt-0.5">{enrolledStudent.parentName}</div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-[10px] uppercase font-bold text-gray-500">State Domicile (85% Quota)</div>
                    <div className="font-bold text-blue-700 mt-0.5">{enrolledStudent.domicileState || 'Maharashtra'}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 px-4 bg-white rounded-xl border border-gray-200 space-y-2">
                <Users className="w-10 h-10 text-gray-400 mx-auto" />
                <h4 className="text-sm font-bold text-gray-700">No Local Student Profile Enrolled</h4>
                <p className="text-xs text-gray-500">Active students registering on this device will appear here.</p>
              </div>
            )}
          </div>
        )}

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 border-t border-gray-200 bg-white flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-1.5 font-mono text-[11px]">
            <Activity className="w-3.5 h-3.5 text-green-600" />
            <span>Admin Control Sync: Online & Protected</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs transition cursor-pointer"
          >
            Close Admin Panel
          </button>
        </div>

      </div>
    </div>
  );
};
