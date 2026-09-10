import React, { useState, useEffect, useMemo } from 'react';
import {
  ShieldCheck,
  KeyRound,
  Sliders,
  Activity,
  Users,
  HardDrive,
  ArrowDownToLine,
  Bell,
  CheckCircle2,
  Lock,
  Unlock,
  CheckCheck,
  Search,
  Clock,
  Phone,
  Mail,
  X,
  Check,
  AlertCircle,
  Inbox,
  Printer,
  Play,
  Upload,
  FileText,
  BookOpen,
  Award,
  FileSpreadsheet,
  Download,
  Calendar,
  User,
  FileDown,
  Trash2,
  Sparkles,
  Zap,
  Edit2,
  RefreshCw,
  RotateCcw,
  Save,
  Eye,
  Layers,
  Filter,
  CheckSquare
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
  markQuestionsAsConsumed
} from '../utils/questionTracker';
import { downloadTestPaperPDF } from '../utils/pdfDownloader';
import { TestItem, Question } from '../types';
import { SAMPLE_QUESTIONS } from '../data/mockData';
import { StudentUnlockRequest, getStoredUnlockRequests } from './SuperUserModal';
import {
  SUNDAY_DROPPER_PLANNER_TESTS,
  SundayPlannerTest,
  generateSundayTestQuestions,
  OFFICIAL_PHYSICS_UNITS,
  OFFICIAL_CHEMISTRY_UNITS,
  OFFICIAL_BOTANY_BLOCKS,
  OFFICIAL_ZOOLOGY_BLOCKS,
  getSavedCustomSundayPaper,
  saveCustomSundayPaper,
  deleteCustomSundayPaper
} from '../data/sundayPlannerTests';
import { getSequentialLoopQuestions, resetLoopCursor } from '../utils/questionLoopManager';
import { formatMathAndFormulas } from '../utils/mathFormatter';
import { getHardPhysicsDiagram } from '../utils/diagramEngine';

interface AdminSectionProps {
  onStartCustomTest?: (customTest: TestItem) => void;
  onOpenUploadModal?: (subject?: string, chapter?: string) => void;
}

export const AdminSection: React.FC<AdminSectionProps> = ({
  onStartCustomTest,
  onOpenUploadModal
}) => {
  const [adminTab, setAdminTab] = useState<'requests' | 'sunday_studio' | 'generator' | 'telemetry' | 'students'>('requests');
  const [notifications, setNotifications] = useState<SuperUserNotification[]>([]);
  const [metrics, setMetrics] = useState(getSuperUserMetrics());
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Sunday Test Paper Studio State (180 Qs)
  const [sundayPhyUnits, setSundayPhyUnits] = useState<string[]>([OFFICIAL_PHYSICS_UNITS[0], OFFICIAL_PHYSICS_UNITS[1]]);
  const [sundayChemUnits, setSundayChemUnits] = useState<string[]>([OFFICIAL_CHEMISTRY_UNITS[0], OFFICIAL_CHEMISTRY_UNITS[1]]);
  const [sundayBioUnits, setSundayBioUnits] = useState<string[]>([
    `[Botany] ${OFFICIAL_BOTANY_BLOCKS[0]}`,
    `[Zoology] ${OFFICIAL_ZOOLOGY_BLOCKS[0]}`
  ]);
  const [selectedPlannerPreset, setSelectedPlannerPreset] = useState<string>('CWT-01');
  const [sundayQuestions, setSundayQuestions] = useState<Question[]>(() => {
    try {
      const savedPaper = getSavedCustomSundayPaper('CWT-01');
      if (savedPaper && Array.isArray(savedPaper.questions) && savedPaper.questions.length === 180) {
        return savedPaper.questions;
      }
    } catch {}
    return generateSundayTestQuestions(SUNDAY_DROPPER_PLANNER_TESTS[0], undefined, false);
  });

  const isCurrentPaperCustomized = useMemo(() => {
    return Boolean(getSavedCustomSundayPaper(selectedPlannerPreset));
  }, [selectedPlannerPreset, publishSuccessMsg, actionSuccessBanner]);
  const [studioSubjectFilter, setStudioSubjectFilter] = useState<'All' | 'Physics' | 'Chemistry' | 'Botany' | 'Zoology'>('All');
  const [studioSearch, setStudioSearch] = useState<string>('');
  const [studioPage, setStudioPage] = useState<number>(1);
  const [editingQuestionIdx, setEditingQuestionIdx] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<{
    questionText: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  } | null>(null);
  const [publishSuccessMsg, setPublishSuccessMsg] = useState<string | null>(null);

  // Student Unlock Requests State
  const [unlockRequests, setUnlockRequests] = useState<StudentUnlockRequest[]>(() => {
    try {
      return getStoredUnlockRequests();
    } catch {
      return [];
    }
  });
  const [requestStatusFilter, setRequestStatusFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [requestSearch, setRequestSearch] = useState<string>('');
  const [actionSuccessBanner, setActionSuccessBanner] = useState<string | null>(null);

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
    setActionSuccessBanner(next ? '✓ All Sunday Tests Unlocked Platform-Wide!' : '🔒 Sunday Tests Locked (Approval Required)');
    setTimeout(() => setActionSuccessBanner(null), 3000);
  };

  const reloadData = () => {
    try {
      setNotifications(getSuperUserNotifications());
      setMetrics(getSuperUserMetrics());
      setUnlockRequests(getStoredUnlockRequests());
    } catch (e) {
      console.warn('Error reloading admin telemetry:', e);
    }
  };

  useEffect(() => {
    reloadData();

    const handleAlert = () => reloadData();
    const handleConsumption = () => setConsumptionVersion(v => v + 1);

    window.addEventListener('neet_superuser_alert', handleAlert);
    window.addEventListener('neet_consumption_updated', handleConsumption);
    window.addEventListener('neet_unlock_request_sent', handleAlert);
    return () => {
      window.removeEventListener('neet_superuser_alert', handleAlert);
      window.removeEventListener('neet_consumption_updated', handleConsumption);
      window.removeEventListener('neet_unlock_request_sent', handleAlert);
    };
  }, []);

  // Request Management Handlers
  const handleApproveRequest = (reqId: string) => {
    const updated = unlockRequests.map(r => r.id === reqId ? { ...r, status: 'approved' as const } : r);
    setUnlockRequests(updated);
    localStorage.setItem('neet_unlock_requests', JSON.stringify(updated));
    localStorage.setItem('neet_admin_test_access', 'true');
    setIsAdminTestAccessGranted(true);
    window.dispatchEvent(new CustomEvent('neet_admin_access_changed', { detail: { accessGranted: true } }));
    setActionSuccessBanner('✓ Test Access Approved & Unlocked for Candidate!');
    setTimeout(() => setActionSuccessBanner(null), 3500);
  };

  const handleApproveAllRequests = () => {
    const updated = unlockRequests.map(r => ({ ...r, status: 'approved' as const }));
    setUnlockRequests(updated);
    localStorage.setItem('neet_unlock_requests', JSON.stringify(updated));
    localStorage.setItem('neet_admin_test_access', 'true');
    setIsAdminTestAccessGranted(true);
    window.dispatchEvent(new CustomEvent('neet_admin_access_changed', { detail: { accessGranted: true } }));
    setActionSuccessBanner('✓ All Pending Test Requests Approved & Unlocked Platform-Wide!');
    setTimeout(() => setActionSuccessBanner(null), 3500);
  };

  const handleRejectRequest = (reqId: string) => {
    const updated = unlockRequests.map(r => r.id === reqId ? { ...r, status: 'rejected' as const } : r);
    setUnlockRequests(updated);
    localStorage.setItem('neet_unlock_requests', JSON.stringify(updated));
    setActionSuccessBanner('Request Rejected.');
    setTimeout(() => setActionSuccessBanner(null), 2500);
  };

  const safeRequests = Array.isArray(unlockRequests) ? unlockRequests : [];
  const pendingRequestsCount = safeRequests.filter(r => r.status === 'pending').length;

  const filteredUnlockRequests = safeRequests.filter(r => {
    if (requestStatusFilter !== 'all' && r.status !== requestStatusFilter) return false;
    if (requestSearch.trim()) {
      const q = requestSearch.toLowerCase().trim();
      return (
        r.studentName?.toLowerCase().includes(q) ||
        r.rollNumber?.toLowerCase().includes(q) ||
        r.studentPhone?.includes(q) ||
        r.parentPhone?.includes(q) ||
        r.parentEmail?.toLowerCase().includes(q) ||
        r.testCode?.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const biologyChapters = ALL_BIOLOGY_CHAPTERS && ALL_BIOLOGY_CHAPTERS.length > 0 ? ALL_BIOLOGY_CHAPTERS : ['Molecular Basis of Inheritance', 'Principles of Inheritance and Variation'];
  const chemistryChapters = ALL_CHEMISTRY_CHAPTERS && ALL_CHEMISTRY_CHAPTERS.length > 0 ? ALL_CHEMISTRY_CHAPTERS : ['Chemical Bonding and Molecular Structure', 'Equilibrium'];
  const physicsChapters = ALL_PHYSICS_CHAPTERS && ALL_PHYSICS_CHAPTERS.length > 0 ? ALL_PHYSICS_CHAPTERS : ['Kinematics', 'Laws of Motion', 'Thermodynamics'];

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

  // Sunday Studio Handlers
  const handleToggleSundayUnit = (subject: 'Physics' | 'Chemistry' | 'Biology', unit: string) => {
    if (subject === 'Physics') {
      setSundayPhyUnits(prev =>
        prev.includes(unit) ? (prev.length > 1 ? prev.filter(u => u !== unit) : prev) : [...prev, unit]
      );
    } else if (subject === 'Chemistry') {
      setSundayChemUnits(prev =>
        prev.includes(unit) ? (prev.length > 1 ? prev.filter(u => u !== unit) : prev) : [...prev, unit]
      );
    } else {
      setSundayBioUnits(prev =>
        prev.includes(unit) ? (prev.length > 1 ? prev.filter(u => u !== unit) : prev) : [...prev, unit]
      );
    }
  };

  const handleApplyPreset = (presetKey: string) => {
    setSelectedPlannerPreset(presetKey);
    if (presetKey === 'all') {
      setSundayPhyUnits([...OFFICIAL_PHYSICS_UNITS]);
      setSundayChemUnits([...OFFICIAL_CHEMISTRY_UNITS]);
      setSundayBioUnits([
        ...OFFICIAL_BOTANY_BLOCKS.map(b => `[Botany] ${b}`),
        ...OFFICIAL_ZOOLOGY_BLOCKS.map(z => `[Zoology] ${z}`)
      ]);
    } else if (presetKey === 'class11') {
      setSundayPhyUnits(OFFICIAL_PHYSICS_UNITS.slice(0, 10));
      setSundayChemUnits(OFFICIAL_CHEMISTRY_UNITS.slice(0, 10));
      setSundayBioUnits([
        ...OFFICIAL_BOTANY_BLOCKS.slice(0, 5).map(b => `[Botany] ${b}`),
        ...OFFICIAL_ZOOLOGY_BLOCKS.slice(0, 5).map(z => `[Zoology] ${z}`)
      ]);
    } else if (presetKey === 'class12') {
      setSundayPhyUnits(OFFICIAL_PHYSICS_UNITS.slice(10));
      setSundayChemUnits(OFFICIAL_CHEMISTRY_UNITS.slice(10));
      setSundayBioUnits([
        ...OFFICIAL_BOTANY_BLOCKS.slice(5).map(b => `[Botany] ${b}`),
        ...OFFICIAL_ZOOLOGY_BLOCKS.slice(5).map(z => `[Zoology] ${z}`)
      ]);
    } else {
      const planner = SUNDAY_DROPPER_PLANNER_TESTS.find(t => t.id === presetKey || t.code.toLowerCase() === presetKey.toLowerCase());
      if (planner) {
        const phyMatch = OFFICIAL_PHYSICS_UNITS.filter(u =>
          planner.physicsUnit.toLowerCase().includes(u.split(':')[0].toLowerCase()) ||
          planner.physicsKeywords.some(kw => u.toLowerCase().includes(kw.toLowerCase()))
        );
        const chemMatch = OFFICIAL_CHEMISTRY_UNITS.filter(u =>
          planner.chemistryUnit.toLowerCase().includes(u.split(':')[0].toLowerCase()) ||
          planner.chemistryKeywords.some(kw => u.toLowerCase().includes(kw.toLowerCase()))
        );
        const botMatch = OFFICIAL_BOTANY_BLOCKS.filter(b =>
          planner.botanyBlock.toLowerCase().includes(b.toLowerCase()) ||
          planner.botanyKeywords.some(kw => b.toLowerCase().includes(kw.toLowerCase()))
        ).map(b => `[Botany] ${b}`);
        const zooMatch = OFFICIAL_ZOOLOGY_BLOCKS.filter(z =>
          planner.zoologyBlock.toLowerCase().includes(z.toLowerCase()) ||
          planner.zoologyKeywords.some(kw => z.toLowerCase().includes(kw.toLowerCase()))
        ).map(z => `[Zoology] ${z}`);

        if (phyMatch.length > 0) setSundayPhyUnits(phyMatch);
        if (chemMatch.length > 0) setSundayChemUnits(chemMatch);
        if (botMatch.length > 0 || zooMatch.length > 0) setSundayBioUnits([...botMatch, ...zooMatch]);
      }
    }
  };

  const handleAssembleSundayStudio = () => {
    const matchStrict = (q: Question, units: string[]) => {
      const qCh = (q.chapter || '').toLowerCase().trim();
      const qTop = (q.topic || '').toLowerCase().trim();
      const normQCh = qCh.replace(/[^a-z0-9]/g, '');

      return units.some(unit => {
        const clean = unit
          .replace(/^Unit \d+:\s*/i, '')
          .replace(/^\[(Botany|Zoology)\]\s*\d*\.?\s*/i, '')
          .toLowerCase()
          .trim();
        const normUnit = clean.replace(/[^a-z0-9]/g, '');
        if (normQCh && normUnit && (normQCh.includes(normUnit) || normUnit.includes(normQCh))) return true;
        const kwWords = clean.split(/[^a-z0-9]+/).filter(w => w.length >= 4 && !['unit', 'chapter', 'part', 'test', 'class'].includes(w));
        return kwWords.length > 0 && kwWords.every(w => qCh.includes(w) || qTop.includes(w));
      });
    };

    // 1. Physics (45 Qs)
    const phyBank = getUnifiedQuestionBank('Physics');
    let phyPool = phyBank.filter(q => matchStrict(q, sundayPhyUnits));
    if (phyPool.length === 0) {
      phyPool = phyBank.filter(q => sundayPhyUnits.some(u => (q.chapter || '').toLowerCase().includes(u.toLowerCase())));
    }
    if (phyPool.length === 0) phyPool = phyBank;

    const randPhy = [...phyPool].sort(() => 0.5 - Math.random());
    const phy45: Question[] = [];
    for (let i = 0; i < 45; i++) {
      const q = randPhy[i % randPhy.length];
      const hardDiag = (q.difficulty === 'Hard' || q.difficulty === 'hard') ? getHardPhysicsDiagram(q) : null;
      phy45.push({
        ...q,
        id: `sunday-phy-${i + 1}-${q.id}`,
        subject: 'Physics',
        diagramSvg: hardDiag || q.diagramSvg,
        questionText: formatMathAndFormulas(q.questionText),
        options: q.options.map(o => formatMathAndFormulas(o)),
        explanation: formatMathAndFormulas(q.explanation)
      });
    }

    // 2. Chemistry (45 Qs)
    const chemBank = getUnifiedQuestionBank('Chemistry');
    let chemPool = chemBank.filter(q => matchStrict(q, sundayChemUnits));
    if (chemPool.length === 0) {
      chemPool = chemBank.filter(q => sundayChemUnits.some(u => (q.chapter || '').toLowerCase().includes(u.toLowerCase())));
    }
    if (chemPool.length === 0) chemPool = chemBank;

    const randChem = [...chemPool].sort(() => 0.5 - Math.random());
    const chem45: Question[] = [];
    for (let i = 0; i < 45; i++) {
      const q = randChem[i % randChem.length];
      chem45.push({
        ...q,
        id: `sunday-chem-${i + 1}-${q.id}`,
        subject: 'Chemistry',
        questionText: formatMathAndFormulas(q.questionText),
        options: q.options.map(o => formatMathAndFormulas(o)),
        explanation: formatMathAndFormulas(q.explanation)
      });
    }

    // 3. Biology (Botany 45 Qs + Zoology 45 Qs)
    const bioBank = getUnifiedQuestionBank('Biology');
    const botUnits = sundayBioUnits.filter(u => u.includes('[Botany]'));
    const zooUnits = sundayBioUnits.filter(u => u.includes('[Zoology]'));

    let botPool = bioBank.filter(q => matchStrict(q, botUnits.length > 0 ? botUnits : sundayBioUnits));
    if (botPool.length === 0) botPool = bioBank;
    let zooPool = bioBank.filter(q => matchStrict(q, zooUnits.length > 0 ? zooUnits : sundayBioUnits));
    if (zooPool.length === 0) zooPool = bioBank;

    const randBot = [...botPool].sort(() => 0.5 - Math.random());
    const bot45: Question[] = [];
    for (let i = 0; i < 45; i++) {
      const q = randBot[i % randBot.length];
      bot45.push({
        ...q,
        id: `sunday-bot-${i + 1}-${q.id}`,
        subject: 'Biology',
        tags: [...(q.tags || []), 'Botany'],
        questionText: formatMathAndFormulas(q.questionText),
        options: q.options.map(o => formatMathAndFormulas(o)),
        explanation: formatMathAndFormulas(q.explanation)
      });
    }

    const randZoo = [...zooPool].sort(() => 0.5 - Math.random());
    const zoo45: Question[] = [];
    for (let i = 0; i < 45; i++) {
      const q = randZoo[i % randZoo.length];
      zoo45.push({
        ...q,
        id: `sunday-zoo-${i + 1}-${q.id}`,
        subject: 'Biology',
        tags: [...(q.tags || []), 'Zoology'],
        questionText: formatMathAndFormulas(q.questionText),
        options: q.options.map(o => formatMathAndFormulas(o)),
        explanation: formatMathAndFormulas(q.explanation)
      });
    }

    const total180 = [...phy45, ...chem45, ...bot45, ...zoo45];
    setSundayQuestions(total180);
    setActionSuccessBanner('✓ Fresh 180-Question Sunday Test Paper Assembled with 100% Chapter Isolation!');
    setTimeout(() => setActionSuccessBanner(null), 3500);
  };

  const handleSwapSundayQuestion = (questionIdx: number) => {
    const currentQ = sundayQuestions[questionIdx];
    if (!currentQ) return;

    const sub = currentQ.subject || (questionIdx < 45 ? 'Physics' : questionIdx < 90 ? 'Chemistry' : 'Biology');
    const ch = currentQ.chapter || '';
    const bank = getUnifiedQuestionBank(sub, ch.length > 0 ? ch : undefined);
    const existingIds = new Set(sundayQuestions.map(q => q.id));
    const candidates = bank.filter(q => !existingIds.has(q.id) && q.questionText !== currentQ.questionText);

    const replacement = candidates.length > 0
      ? candidates[Math.floor(Math.random() * candidates.length)]
      : bank[Math.floor(Math.random() * bank.length)];

    if (!replacement) return;

    const hardDiag = (replacement.difficulty === 'Hard' || replacement.difficulty === 'hard') && sub === 'Physics'
      ? getHardPhysicsDiagram(replacement)
      : null;

    const newQ: Question = {
      ...replacement,
      id: `sunday-${sub.toLowerCase()}-swap-${Date.now()}-${replacement.id}`,
      subject: sub as any,
      tags: currentQ.tags || replacement.tags,
      diagramSvg: hardDiag || replacement.diagramSvg,
      questionText: formatMathAndFormulas(replacement.questionText),
      options: replacement.options.map(o => formatMathAndFormulas(o)),
      explanation: formatMathAndFormulas(replacement.explanation)
    };

    const copy = [...sundayQuestions];
    copy[questionIdx] = newQ;
    setSundayQuestions(copy);
    setActionSuccessBanner(`✓ Question #${questionIdx + 1} swapped with another question from ${ch || sub}!`);
    setTimeout(() => setActionSuccessBanner(null), 3000);
  };

  const handleStartEditQuestion = (idx: number) => {
    const q = sundayQuestions[idx];
    setEditingQuestionIdx(idx);
    setEditForm({
      questionText: q.questionText,
      options: [...q.options],
      correctAnswer: q.correctAnswer ?? 0,
      explanation: q.explanation || ''
    });
  };

  const handleSaveQuestionEdit = (idx: number) => {
    if (!editForm) return;
    const copy = [...sundayQuestions];
    copy[idx] = {
      ...copy[idx],
      questionText: editForm.questionText,
      options: editForm.options,
      correctAnswer: editForm.correctAnswer,
      explanation: editForm.explanation
    };
    setSundayQuestions(copy);
    setEditingQuestionIdx(null);
    setEditForm(null);
    setActionSuccessBanner(`✓ Question #${idx + 1} updated and saved!`);
    setTimeout(() => setActionSuccessBanner(null), 3000);
  };

  const handlePublishSundayPaper = () => {
    handleSaveAndPublishSelectedPaper();
  };

  const handleLaunchSundayInCBT = () => {
    const testItem: TestItem = {
      id: 'sunday-studio-test-' + Date.now(),
      title: 'Official Sunday Test Paper (Admin Studio)',
      category: 'neet_mock',
      exam: 'NEET',
      syllabus: `Physics: ${sundayPhyUnits.join(', ')} | Chemistry: ${sundayChemUnits.join(', ')} | Biology: ${sundayBioUnits.join(', ')}`,
      totalQuestions: 180,
      durationMinutes: 180,
      totalMarks: 720,
      negativeMarking: '+4 for correct, -1 for incorrect, 0 for unattempted (Total 720 Marks)',
      difficulty: 'Mixed',
      cbtMode: true,
      features: [
        '180 Questions (45 Phys + 45 Chem + 45 Bot + 45 Zoo)',
        '180 Minutes (3.0 Hours NTA Timer)',
        '720 Marks (+4 / -1 NTA Standard)',
        'Admin Verified & Chapter Isolated'
      ],
      questions: sundayQuestions
    };

    if (onStartCustomTest) {
      onStartCustomTest(testItem);
    }
  };

  const handleDownloadSundayMasterPDF = (includeSolutions: boolean) => {
    const testItem: TestItem = {
      id: 'sunday-studio-pdf-' + Date.now(),
      title: 'Sunday Mock Test Paper (Master Paper)',
      category: 'neet_mock',
      exam: 'NEET',
      totalQuestions: 180,
      durationMinutes: 180,
      totalMarks: 720,
      syllabus: 'Physics (45 Qs), Chemistry (45 Qs), Botany (45 Qs), Zoology (45 Qs)',
      negativeMarking: '+4 for correct, -1 for incorrect',
      difficulty: 'Mixed',
      cbtMode: true,
      questions: sundayQuestions
    };
    downloadTestPaperPDF(testItem, includeSolutions);
  };

  // Unused question pool calculation for active chapter
  const currentPoolStats = useMemo(() => {
    try {
      return getUnusedQuestions(customSubject, customChapter, undefined, customDifficulty);
    } catch {
      return { unusedQuestions: [], totalInBank: 0, remainingUnused: 0, percentageRemaining: 100 };
    }
  }, [customSubject, customChapter, customDifficulty, consumptionVersion]);

  // Custom Test Generator logic for Admin
  const generateCustomTestQuestions = (): Question[] => {
    const stats = getUnusedQuestions(customSubject, customChapter, undefined, customDifficulty);
    const allInChapter = getUnifiedQuestionBank(customSubject, customChapter);
    const subjectBackup = getUnifiedQuestionBank(customSubject);

    let candidatePool = stats.unusedQuestions || [];
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
      syllabus: `${customSubject} > ${customChapter} > ${customTopic} (${customDifficulty} Level • ${selectedQuestions.length} Questions)`,
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
      syllabus: `${customSubject} > ${customChapter} • ${selectedQuestions.length} Questions`,
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
    if (!notifications || notifications.length === 0) return;
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

  const safeNotifications = Array.isArray(notifications) ? notifications : [];
  const filteredNotifications = safeNotifications.filter(n => {
    const matchesCat = categoryFilter === 'All' || n.category === categoryFilter;
    const matchesQuery =
      !searchQuery ||
      n.userName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.userPhone?.includes(searchQuery) ||
      n.userEmail?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.contentTitle?.toLowerCase().includes(searchQuery.toLowerCase());
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
    <div className="space-y-5 animate-in fade-in duration-150">
      {/* Page Header Banner */}
      <div className="bg-slate-900 border border-slate-800 text-white rounded-2xl p-5 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-lg sm:text-xl font-black text-white">
                  Admin & Faculty Control Center
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-[10px] font-mono font-bold">
                  MASTER FACULTY VAULT
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Real-time student unlock approvals, custom test paper generator, download telemetry & Sunday test access management.
              </p>
            </div>
          </div>

          {/* Quick Sunday Test Master Toggle */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handleToggleAdminTestAccess}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition flex items-center space-x-2 cursor-pointer shadow-md ${
                isAdminTestAccessGranted
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white'
              }`}
              title="Toggle Student Sunday Test Series Access Platform-Wide"
            >
              {isAdminTestAccessGranted ? (
                <>
                  <Unlock className="w-4 h-4 text-emerald-200" />
                  <span>Sunday Tests: UNLOCKED (All Students)</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 text-amber-200" />
                  <span>Sunday Tests: LOCKED (Approval Required)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Global Action Banner */}
      {actionSuccessBanner && (
        <div className="px-4 py-3 bg-emerald-600 text-white text-xs font-bold rounded-xl flex items-center justify-between shadow-md animate-in slide-in-from-top">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> {actionSuccessBanner}
          </span>
          <button onClick={() => setActionSuccessBanner(null)} className="text-white/80 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap items-center gap-2 bg-white p-2 rounded-2xl border border-gray-200 shadow-2xs">
        <button
          onClick={() => setAdminTab('requests')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
            adminTab === 'requests'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <KeyRound className="w-4 h-4 text-amber-400" />
          <span>Student Unlock Requests</span>
          {pendingRequestsCount > 0 && (
            <span className="px-2 py-0.5 rounded-full bg-rose-600 text-white text-[10px] font-mono font-bold animate-pulse">
              {pendingRequestsCount} Pending
            </span>
          )}
        </button>

        <button
          onClick={() => setAdminTab('sunday_studio')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
            adminTab === 'sunday_studio'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Sunday Test Studio (180 Qs)</span>
        </button>

        <button
          onClick={() => setAdminTab('generator')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
            adminTab === 'generator'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>Custom Test Generator</span>
        </button>

        <button
          onClick={() => setAdminTab('telemetry')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
            adminTab === 'telemetry'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>Download Telemetry & Audit</span>
          {metrics.unreadCount > 0 && (
            <span className="px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-900 text-[10px] font-mono font-bold">
              {metrics.unreadCount}
            </span>
          )}
        </button>

        <button
          onClick={() => setAdminTab('students')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
            adminTab === 'students'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Student Directory & Access</span>
        </button>
      </div>

      {/* TAB 1: STUDENT UNLOCK REQUESTS */}
      {adminTab === 'requests' && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-gray-900 flex items-center space-x-2">
                <KeyRound className="w-5 h-5 text-amber-500" />
                <span>Student Test Unlock Approval Queue</span>
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Review candidate authorization requests for 720-Marks Sunday CBT Tests. Approving grants instant access and logs delivery receipts.
              </p>
            </div>

            {pendingRequestsCount > 0 && (
              <button
                onClick={handleApproveAllRequests}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold shadow-md transition flex items-center space-x-1.5 cursor-pointer self-start sm:self-auto"
              >
                <CheckCheck className="w-4 h-4" />
                <span>Approve All Pending Requests ({pendingRequestsCount})</span>
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2.5 bg-white p-3.5 rounded-2xl border border-gray-200 shadow-2xs">
            <div className="flex items-center space-x-1.5">
              {(['all', 'pending', 'approved', 'rejected'] as const).map(status => (
                <button
                  key={status}
                  onClick={() => setRequestStatusFilter(status)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition cursor-pointer ${
                    requestStatusFilter === status
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {status === 'all' ? 'All Requests' : status}
                  {status === 'pending' && pendingRequestsCount > 0 && ` (${pendingRequestsCount})`}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search candidate, roll #, contact, email..."
                value={requestSearch}
                onChange={e => setRequestSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-50 border border-gray-200 text-xs text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-2xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900 text-white font-bold">
                  <tr>
                    <th className="p-3.5">Requested At</th>
                    <th className="p-3.5">Candidate & Roll #</th>
                    <th className="p-3.5">Student Contact</th>
                    <th className="p-3.5">Parent Details (Email & Phone)</th>
                    <th className="p-3.5">Requested Test</th>
                    <th className="p-3.5">Status</th>
                    <th className="p-3.5 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredUnlockRequests.length > 0 ? (
                    filteredUnlockRequests.map(req => {
                      const isPending = req.status === 'pending';
                      const isApproved = req.status === 'approved';
                      const isRejected = req.status === 'rejected';

                      return (
                        <tr key={req.id} className="hover:bg-slate-50 transition">
                          <td className="p-3.5 font-mono text-gray-500 whitespace-nowrap">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              <span>{new Date(req.requestedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            </div>
                            <span className="text-[10px] text-slate-400">{new Date(req.requestedAt).toLocaleDateString()}</span>
                          </td>

                          <td className="p-3.5">
                            <div className="font-bold text-gray-900">{req.studentName}</div>
                            <div className="text-[11px] font-mono text-blue-700 font-semibold">{req.rollNumber}</div>
                            <div className="text-[10px] text-gray-400">{req.targetBatch}</div>
                          </td>

                          <td className="p-3.5 font-mono text-gray-700">
                            <div className="flex items-center space-x-1 font-semibold">
                              <Phone className="w-3 h-3 text-blue-600" />
                              <span>+91 {req.studentPhone}</span>
                            </div>
                          </td>

                          <td className="p-3.5 space-y-0.5">
                            <div className="flex items-center space-x-1 text-gray-800 font-mono text-[11px]">
                              <Mail className="w-3 h-3 text-emerald-600" />
                              <span className="font-semibold">{req.parentEmail}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-600 font-mono text-[11px]">
                              <Phone className="w-3 h-3 text-amber-600" />
                              <span>+91 {req.parentPhone}</span>
                            </div>
                          </td>

                          <td className="p-3.5">
                            <span className="font-bold text-slate-900 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded text-[11px]">
                              {req.testCode}
                            </span>
                            <div className="text-[10px] text-gray-500 mt-1 max-w-xs truncate">
                              {req.testTitle}
                            </div>
                          </td>

                          <td className="p-3.5">
                            {isPending && (
                              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1 w-fit">
                                <AlertCircle className="w-3 h-3" /> Pending Review
                              </span>
                            )}
                            {isApproved && (
                              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 flex items-center gap-1 w-fit">
                                <CheckCircle2 className="w-3 h-3" /> Approved & Unlocked
                              </span>
                            )}
                            {isRejected && (
                              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-100 text-rose-900 border border-rose-300 flex items-center gap-1 w-fit">
                                <X className="w-3 h-3" /> Rejected
                              </span>
                            )}
                          </td>

                          <td className="p-3.5 text-right">
                            {isPending ? (
                              <div className="flex items-center justify-end space-x-1.5">
                                <button
                                  onClick={() => handleApproveRequest(req.id)}
                                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition flex items-center space-x-1 cursor-pointer"
                                >
                                  <Check className="w-3.5 h-3.5" />
                                  <span>Approve & Unlock</span>
                                </button>
                                <button
                                  onClick={() => handleRejectRequest(req.id)}
                                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-rose-100 text-slate-600 hover:text-rose-700 transition cursor-pointer"
                                  title="Reject Request"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            ) : isApproved ? (
                              <span className="text-[11px] font-bold text-emerald-700 font-mono">
                                ✓ Live Unlocked
                              </span>
                            ) : (
                              <button
                                onClick={() => handleApproveRequest(req.id)}
                                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-800 text-xs font-semibold transition cursor-pointer"
                              >
                                Re-Approve
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={7} className="text-center py-12 text-gray-500">
                        <Inbox className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                        <div className="font-semibold text-sm">No Test Unlock Requests Found</div>
                        <p className="text-xs text-gray-400 mt-0.5">
                          When candidates request authorization to start locked Sunday tests, they stream here live.
                        </p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB: SUNDAY TEST PAPER STUDIO (180 QUESTIONS INSPECTOR & CUSTOMIZER) */}
      {adminTab === 'sunday_studio' && (
        <div className="space-y-6">
          {/* Top Banner with All-Sunday Paper Selector & Master Controls */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 text-white p-6 rounded-3xl shadow-lg space-y-5 border border-indigo-800/40">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1.5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-black bg-purple-500/20 text-purple-300 border border-purple-400/30 uppercase tracking-wider">
                    Official NTA Format • 720 Marks • 180 Qs
                  </span>
                  {isCurrentPaperCustomized ? (
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-black bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 flex items-center gap-1.5 shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Admin Customized Paper Active
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                      Standard Planner Syllabus
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-amber-400" />
                  Sunday Test Paper Studio: <span className="text-amber-300 font-mono underline decoration-amber-400/50">{selectedPlannerPreset.toUpperCase()}</span>
                </h3>
                <p className="text-xs text-indigo-200/90 mt-1 max-w-2xl leading-relaxed">
                  Select and edit <strong>all Sunday papers</strong> across Chapter-Wise (CWT-01 to 19), Cumulative (CUM-01 to 05), Part-Wise (PART-01 to 03), and Full-Syllabus (FST-01 to 06). Choose specific topics, inspect questions 1 to 180, edit question text, answer keys, and solutions in-place.
                </p>
              </div>

              {/* Master Actions Bar */}
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  onClick={handleSaveAndPublishSelectedPaper}
                  className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-xl text-xs font-black transition flex items-center gap-2 shadow-md cursor-pointer"
                  title="Save & Publish this specific Sunday Paper for all students"
                >
                  <CheckCheck className="w-4 h-4" />
                  Save & Publish {selectedPlannerPreset.toUpperCase()}
                </button>

                {isCurrentPaperCustomized && (
                  <button
                    onClick={handleResetSelectedPaperToDefault}
                    className="px-3 py-2.5 bg-rose-500/20 hover:bg-rose-500/40 text-rose-200 border border-rose-400/30 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                    title="Reset this paper back to default planner syllabus and questions"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset to Default
                  </button>
                )}

                <button
                  onClick={handleLaunchSundayInCBT}
                  className="px-3.5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <Play className="w-4 h-4" />
                  Test in CBT
                </button>

                <button
                  onClick={() => handleDownloadSundayMasterPDF(false)}
                  className="px-3 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer border border-white/10"
                  title="Download Student Question Paper PDF"
                >
                  <Download className="w-4 h-4 text-sky-400" />
                  Paper PDF
                </button>

                <button
                  onClick={() => handleDownloadSundayMasterPDF(true)}
                  className="px-3 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer border border-white/10"
                  title="Download Master Paper with Solutions & Diagrams"
                >
                  <FileText className="w-4 h-4 text-amber-300" />
                  Solutions PDF
                </button>
              </div>
            </div>

            {/* Circular Question Loop & Sequential Queue Status */}
            <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-indigo-100 font-mono">
              <div className="flex items-center gap-2.5">
                <RefreshCw className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  <strong className="text-amber-300">Continuous Question Loop Active:</strong> 45-question batches are drawn round-robin per subject without repeating diagrams. When exhausted, the loop resets back to 0 so 100% of question bank data is utilized.
                </span>
              </div>
              <button
                onClick={() => {
                  resetLoopCursor('physics');
                  resetLoopCursor('chemistry');
                  resetLoopCursor('biology');
                  setActionSuccessBanner('✓ Circular loop cursors reset to start (offset 0)');
                  setTimeout(() => setActionSuccessBanner(null), 2500);
                }}
                className="text-[11px] underline text-amber-300 hover:text-white shrink-0 cursor-pointer font-bold"
              >
                Reset Loop to Start
              </button>
            </div>
          </div>

          {publishSuccessMsg && (
            <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl text-emerald-800 text-xs font-bold flex items-center justify-between shadow-xs">
              <span>{publishSuccessMsg}</span>
              <button onClick={() => setPublishSuccessMsg(null)} className="text-emerald-600 hover:text-emerald-900 font-bold cursor-pointer">
                ✕
              </button>
            </div>
          )}

          {/* STEP 1: SUNDAY PAPER SELECTOR & TOPIC CHOOSER */}
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-3">
              <div>
                <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600" />
                  Step 1: Choose Sunday Paper & Topic Customization
                </h4>
                <p className="text-[11px] text-slate-500">
                  Select which Sunday test paper you are editing, customize syllabus topics, and re-assemble 180 questions with zero cross-chapter mixing.
                </p>
              </div>

              {/* Sunday Paper Selector Dropdown & Presets */}
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                  <span className="text-[11px] font-extrabold text-slate-700 px-1">Paper:</span>
                  <select
                    value={selectedPlannerPreset.toUpperCase()}
                    onChange={(e) => handleSelectSundayPaper(e.target.value)}
                    className="bg-white text-slate-900 font-black text-xs px-3 py-1 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    <optgroup label="Phase 1: Chapter-Wise Tests (CWT 01 - 19)">
                      {SUNDAY_DROPPER_PLANNER_TESTS.filter(t => t.phaseGroup === 'cwt').map(t => (
                        <option key={t.code} value={t.code}>
                          {t.code}: {t.title.split(':')[1]?.trim().slice(0, 42) || t.title.slice(0, 42)}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Phase 1: Cumulative Revision Tests (CUM 01 - 05)">
                      {SUNDAY_DROPPER_PLANNER_TESTS.filter(t => t.phaseGroup === 'cumulative').map(t => (
                        <option key={t.code} value={t.code}>
                          {t.code}: {t.title.split(':')[1]?.trim().slice(0, 42) || t.title.slice(0, 42)}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Phase 2: Part-Wise Tests (PART 01 - 03)">
                      {SUNDAY_DROPPER_PLANNER_TESTS.filter(t => t.phaseGroup === 'part').map(t => (
                        <option key={t.code} value={t.code}>
                          {t.code}: {t.title.split(':')[1]?.trim().slice(0, 42) || t.title.slice(0, 42)}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Phase 3: Full Syllabus Tests (FST 01 - 06)">
                      {SUNDAY_DROPPER_PLANNER_TESTS.filter(t => t.phaseGroup === 'full').map(t => (
                        <option key={t.code} value={t.code}>
                          {t.code}: {t.title.split(':')[1]?.trim().slice(0, 42) || t.title.slice(0, 42)}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Quick Presets */}
                <button
                  onClick={() => handleApplyPreset('all')}
                  className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                >
                  Full Syllabus
                </button>
                <button
                  onClick={() => handleApplyPreset('class11')}
                  className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                >
                  Class 11
                </button>
                <button
                  onClick={() => handleApplyPreset('class12')}
                  className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                >
                  Class 12
                </button>

                <button
                  onClick={handleAssembleSundayStudio}
                  className="px-3 py-1.5 text-xs font-extrabold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer flex items-center gap-1.5 shadow-xs ml-1"
                  title="Re-assemble 180 questions strictly matching currently selected units"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Re-Assemble {selectedPlannerPreset.toUpperCase()} (180 Qs)
                </button>
              </div>
            </div>

            {/* 3 Columns: Physics, Chemistry, Biology Chapters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Physics */}
              <div className="p-4 rounded-2xl bg-blue-50/40 border border-blue-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    Physics Units ({sundayPhyUnits.length} Selected)
                  </span>
                  <span className="text-[10px] font-mono text-blue-700 font-semibold">45 Questions</span>
                </div>
                <div className="max-h-48 overflow-y-auto space-y-1 pr-1">
                  {OFFICIAL_PHYSICS_UNITS.map((u, i) => {
                    const isSelected = sundayPhyUnits.includes(u);
                    return (
                      <button
                        key={i}
                        onClick={() => handleToggleSundayUnit('Physics', u)}
                        className={`w-full text-left p-2 rounded-xl text-xs transition flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600 text-white font-bold shadow-xs'
                            : 'bg-white hover:bg-blue-100/50 text-slate-700 border border-slate-200'
                        }`}
                      >
                        <span className="truncate mr-2">{u}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Chemistry */}
              <div className="p-4 rounded-2xl bg-emerald-50/40 border border-emerald-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                    Chemistry Units ({sundayChemUnits.length} Selected)
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 font-semibold">45 Questions</span>
                </div>
                <div className="max-h-48 overflow-y-auto space-y-1 pr-1">
                  {OFFICIAL_CHEMISTRY_UNITS.map((u, i) => {
                    const isSelected = sundayChemUnits.includes(u);
                    return (
                      <button
                        key={i}
                        onClick={() => handleToggleSundayUnit('Chemistry', u)}
                        className={`w-full text-left p-2 rounded-xl text-xs transition flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-600 text-white font-bold shadow-xs'
                            : 'bg-white hover:bg-emerald-100/50 text-slate-700 border border-slate-200'
                        }`}
                      >
                        <span className="truncate mr-2">{u}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Biology */}
              <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-900 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                    Biology Units ({sundayBioUnits.length} Selected)
                  </span>
                  <span className="text-[10px] font-mono text-purple-700 font-semibold">90 Questions</span>
                </div>
                <div className="max-h-48 overflow-y-auto space-y-1 pr-1">
                  {[
                    ...OFFICIAL_BOTANY_BLOCKS.map(b => `[Botany] ${b}`),
                    ...OFFICIAL_ZOOLOGY_BLOCKS.map(z => `[Zoology] ${z}`)
                  ].map((u, i) => {
                    const isSelected = sundayBioUnits.includes(u);
                    return (
                      <button
                        key={i}
                        onClick={() => handleToggleSundayUnit('Biology', u)}
                        className={`w-full text-left p-2 rounded-xl text-xs transition flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-purple-600 text-white font-bold shadow-xs'
                            : 'bg-white hover:bg-purple-100/50 text-slate-700 border border-slate-200'
                        }`}
                      >
                        <span className="truncate mr-2">{u}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* STEP 2: QUESTION INSPECTOR (1 TO 180) */}
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-gray-100 pb-3">
              <div>
                <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-purple-600" />
                  Step 2: Question-Level Access & Customization (1 to 180)
                </h4>
                <p className="text-[11px] text-slate-500">
                  Inspect every question, verify diagrams, swap questions within the same chapter, or edit in-place.
                </p>
              </div>

              {/* Subject Filter Bar */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                {(['All', 'Physics', 'Chemistry', 'Botany', 'Zoology'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => {
                      setStudioSubjectFilter(tab);
                      setStudioPage(1);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      studioSubjectFilter === tab
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab === 'All' ? 'All 180 Qs' : tab === 'Physics' ? 'Physics (1-45)' : tab === 'Chemistry' ? 'Chem (46-90)' : tab === 'Botany' ? 'Botany (91-135)' : 'Zoology (136-180)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Search & Jump Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search questions or chapter name..."
                  value={studioSearch}
                  onChange={e => {
                    setStudioSearch(e.target.value);
                    setStudioPage(1);
                  }}
                  className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600 font-mono">
                <span>Showing Page {studioPage} of {Math.max(1, Math.ceil((
                  sundayQuestions.filter((q, idx) => {
                    if (studioSubjectFilter === 'Physics' && idx >= 45) return false;
                    if (studioSubjectFilter === 'Chemistry' && (idx < 45 || idx >= 90)) return false;
                    if (studioSubjectFilter === 'Botany' && (idx < 90 || idx >= 135)) return false;
                    if (studioSubjectFilter === 'Zoology' && idx < 135) return false;
                    if (studioSearch.trim()) {
                      const term = studioSearch.toLowerCase();
                      const matchText = q.questionText.toLowerCase().includes(term);
                      const matchCh = (q.chapter || '').toLowerCase().includes(term);
                      const matchIdx = `q${idx + 1}`.includes(term) || `${idx + 1}` === term;
                      return matchText || matchCh || matchIdx;
                    }
                    return true;
                  }).length
                ) / 10))}</span>
                <div className="flex items-center gap-1 ml-2">
                  <button
                    onClick={() => setStudioPage(p => Math.max(1, p - 1))}
                    disabled={studioPage <= 1}
                    className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-50 text-xs cursor-pointer"
                  >
                    &larr; Prev
                  </button>
                  <button
                    onClick={() => setStudioPage(p => p + 1)}
                    disabled={
                      studioPage >= Math.ceil(sundayQuestions.filter((q, idx) => {
                        if (studioSubjectFilter === 'Physics' && idx >= 45) return false;
                        if (studioSubjectFilter === 'Chemistry' && (idx < 45 || idx >= 90)) return false;
                        if (studioSubjectFilter === 'Botany' && (idx < 90 || idx >= 135)) return false;
                        if (studioSubjectFilter === 'Zoology' && idx < 135) return false;
                        if (studioSearch.trim()) {
                          const term = studioSearch.toLowerCase();
                          const matchText = q.questionText.toLowerCase().includes(term);
                          const matchCh = (q.chapter || '').toLowerCase().includes(term);
                          const matchIdx = `q${idx + 1}`.includes(term) || `${idx + 1}` === term;
                          return matchText || matchCh || matchIdx;
                        }
                        return true;
                      }).length / 10)
                    }
                    className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-50 text-xs cursor-pointer"
                  >
                    Next &rarr;
                  </button>
                </div>
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-4">
              {(() => {
                const filtered = sundayQuestions
                  .map((q, originalIdx) => ({ q, originalIdx }))
                  .filter(({ q, originalIdx }) => {
                    if (studioSubjectFilter === 'Physics' && originalIdx >= 45) return false;
                    if (studioSubjectFilter === 'Chemistry' && (originalIdx < 45 || originalIdx >= 90)) return false;
                    if (studioSubjectFilter === 'Botany' && (originalIdx < 90 || originalIdx >= 135)) return false;
                    if (studioSubjectFilter === 'Zoology' && originalIdx < 135) return false;
                    if (studioSearch.trim()) {
                      const term = studioSearch.toLowerCase();
                      const matchText = q.questionText.toLowerCase().includes(term);
                      const matchCh = (q.chapter || '').toLowerCase().includes(term);
                      const matchIdx = `q${originalIdx + 1}`.includes(term) || `${originalIdx + 1}` === term;
                      return matchText || matchCh || matchIdx;
                    }
                    return true;
                  });

                const paginated = filtered.slice((studioPage - 1) * 10, studioPage * 10);

                if (paginated.length === 0) {
                  return (
                    <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                      <Search className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                      <p className="text-sm font-bold text-slate-700">No Questions Match Search</p>
                      <p className="text-xs text-slate-400 mt-0.5">Try a different keyword or reset filters.</p>
                    </div>
                  );
                }

                return paginated.map(({ q, originalIdx }) => {
                  const isEditing = editingQuestionIdx === originalIdx;
                  const isHardPhysics = (originalIdx < 45) && (q.difficulty === 'Hard' || q.difficulty === 'hard');
                  const diagramSvg = q.diagramSvg;

                  return (
                    <div
                      key={originalIdx}
                      className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 transition space-y-3 shadow-xs"
                    >
                      {/* Header of Question Card */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                        <div className="flex items-center gap-2">
                          <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-mono font-black text-xs flex items-center justify-center shadow-xs">
                            #{originalIdx + 1}
                          </span>
                          <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold ${
                            originalIdx < 45 ? 'bg-blue-100 text-blue-800' :
                            originalIdx < 90 ? 'bg-emerald-100 text-emerald-800' :
                            originalIdx < 135 ? 'bg-purple-100 text-purple-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {originalIdx < 45 ? 'Physics' : originalIdx < 90 ? 'Chemistry' : originalIdx < 135 ? 'Botany' : 'Zoology'}
                          </span>
                          <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                            {q.chapter || 'Syllabus Chapter'}
                          </span>
                          {q.difficulty && (
                            <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                              q.difficulty === 'Hard' ? 'bg-rose-100 text-rose-800' :
                              q.difficulty === 'Medium' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                            }`}>
                              {q.difficulty}
                            </span>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleSwapSundayQuestion(originalIdx)}
                            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 transition flex items-center gap-1 cursor-pointer"
                            title="Swap this question with another from the same chapter"
                          >
                            <RefreshCw className="w-3.5 h-3.5" />
                            Swap Question
                          </button>

                          <button
                            onClick={() => isEditing ? setEditingQuestionIdx(null) : handleStartEditQuestion(originalIdx)}
                            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition flex items-center gap-1 cursor-pointer"
                          >
                            <Edit2 className="w-3.5 h-3.5 text-slate-500" />
                            {isEditing ? 'Cancel' : 'Edit'}
                          </button>
                        </div>
                      </div>

                      {/* Editing View */}
                      {isEditing && editForm ? (
                        <div className="p-4 bg-slate-50 rounded-xl border border-blue-200 space-y-3">
                          <div>
                            <label className="text-xs font-bold text-slate-700 block mb-1">Question Prompt:</label>
                            <textarea
                              value={editForm.questionText}
                              onChange={e => setEditForm({ ...editForm, questionText: e.target.value })}
                              rows={3}
                              className="w-full p-2 text-xs bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {editForm.options.map((opt, optIdx) => (
                              <div key={optIdx} className="space-y-0.5">
                                <label className="text-[11px] font-bold text-slate-600 block">
                                  Option {String.fromCharCode(65 + optIdx)}:
                                </label>
                                <input
                                  type="text"
                                  value={opt}
                                  onChange={e => {
                                    const opts = [...editForm.options];
                                    opts[optIdx] = e.target.value;
                                    setEditForm({ ...editForm, options: opts });
                                  }}
                                  className="w-full p-2 text-xs bg-white border border-slate-300 rounded-lg"
                                />
                              </div>
                            ))}
                          </div>

                          <div className="flex items-center gap-4">
                            <div>
                              <label className="text-xs font-bold text-slate-700 block mb-1">Correct Answer:</label>
                              <select
                                value={editForm.correctAnswer}
                                onChange={e => setEditForm({ ...editForm, correctAnswer: Number(e.target.value) })}
                                className="p-1.5 text-xs bg-white border border-slate-300 rounded-lg"
                              >
                                {editForm.options.map((_, idx) => (
                                  <option key={idx} value={idx}>
                                    Option {String.fromCharCode(65 + idx)}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div className="flex-1">
                              <label className="text-xs font-bold text-slate-700 block mb-1">Explanation / Solution:</label>
                              <input
                                type="text"
                                value={editForm.explanation}
                                onChange={e => setEditForm({ ...editForm, explanation: e.target.value })}
                                className="w-full p-1.5 text-xs bg-white border border-slate-300 rounded-lg"
                              />
                            </div>
                          </div>

                          <div className="flex justify-end gap-2 pt-2">
                            <button
                              onClick={() => setEditingQuestionIdx(null)}
                              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-200 text-slate-700"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => handleSaveQuestionEdit(originalIdx)}
                              className="px-4 py-1.5 rounded-lg text-xs font-bold bg-blue-600 text-white"
                            >
                              Save Question
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* Normal Question Display */
                        <>
                          {/* Vector Diagram if Available */}
                          {diagramSvg && (
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center justify-center">
                              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                                High-Quality Technical Schematic
                              </span>
                              <div
                                className="w-full max-w-sm flex items-center justify-center"
                                dangerouslySetInnerHTML={{ __html: diagramSvg }}
                              />
                            </div>
                          )}

                          {/* Question Text */}
                          <p className="text-xs text-slate-900 leading-relaxed font-medium">
                            {q.questionText}
                          </p>

                          {/* Options Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                            {q.options.map((opt, optIdx) => {
                              const isCorrect = optIdx === q.correctAnswer;
                              return (
                                <div
                                  key={optIdx}
                                  className={`p-2.5 rounded-xl text-xs flex items-center justify-between border ${
                                    isCorrect
                                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold'
                                      : 'bg-slate-50 border-slate-200 text-slate-700'
                                  }`}
                                >
                                  <span className="flex items-center gap-2">
                                    <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${
                                      isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
                                    }`}>
                                      {String.fromCharCode(65 + optIdx)}
                                    </span>
                                    <span>{opt}</span>
                                  </span>
                                  {isCorrect && (
                                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-200 text-emerald-800 font-bold">
                                      Key
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>

                          {/* Explanation */}
                          {q.explanation && (
                            <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 text-[11px] text-slate-600 leading-relaxed">
                              <strong className="text-blue-900 block font-bold mb-0.5">Solution & Conceptual Reference:</strong>
                              {q.explanation}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                });
              })()}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CUSTOM TEST GENERATOR */}
      {adminTab === 'generator' && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-bold text-gray-900 flex items-center space-x-2">
                <Sliders className="w-5 h-5 text-blue-600" />
                <span>Admin Custom Test Paper Generator</span>
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Build high-yield custom mock tests across 97 NCERT units, set time limits, and export instant PDF papers or launch CBT tests.
              </p>
            </div>

            <span className="text-[11px] font-mono font-bold px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 self-start sm:self-auto">
              {currentPoolStats.remainingUnused} Qs Available in {customChapter}
            </span>
          </div>

          {exportSuccess && (
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center space-x-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{exportSuccess}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs">
            <div className="space-y-1.5">
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
                className="w-full p-2.5 rounded-xl bg-gray-50 border border-gray-300 text-xs text-gray-900 focus:bg-white focus:border-blue-500 font-semibold"
              >
                <option value="Biology">🧬 Biology (All 38 Chapters)</option>
                <option value="Chemistry">🧪 Chemistry (Physical, Inorganic, Organic)</option>
                <option value="Physics">⚡ Physics (Mechanics, Electrodynamics, Modern)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-500 uppercase">2. Select Chapter ({currentChapterList.length} Units)</label>
              <select
                value={customChapter}
                onChange={e => setCustomChapter(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-gray-50 border border-gray-300 text-xs text-gray-900 focus:bg-white focus:border-blue-500 font-semibold"
              >
                {currentChapterList.map((ch, idx) => (
                  <option key={idx} value={ch}>
                    {idx + 1}. {ch}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-500 uppercase">3. Difficulty Standard</label>
              <select
                value={customDifficulty}
                onChange={e => setCustomDifficulty(e.target.value as any)}
                className="w-full p-2.5 rounded-xl bg-gray-50 border border-gray-300 text-xs text-gray-900 focus:bg-white focus:border-blue-500 font-semibold"
              >
                <option value="Both">Both Medium & Hard (Standard Exam Mix)</option>
                <option value="Hard">Hard (High Difficulty & Advanced Analytical)</option>
                <option value="Medium">Medium Level Only</option>
                <option value="Easy">Easy (Fundamental Warmup)</option>
                <option value="Adaptive">Adaptive (Dynamic Multi-Tier Blend)</option>
              </select>
            </div>

            <div className="space-y-1.5">
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
                    className={`py-2 rounded-xl text-xs font-bold font-mono transition cursor-pointer ${
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

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-500 uppercase">5. Allotted Time Limit</label>
              <div className="grid grid-cols-4 gap-1.5">
                {[15, 30, 45, 90].map(mins => (
                  <button
                    key={mins}
                    type="button"
                    onClick={() => setCustomDuration(mins)}
                    className={`py-2 rounded-xl text-xs font-bold font-mono transition cursor-pointer ${
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

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-500 uppercase">6. Question Pool Telemetry</label>
              <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs font-mono font-semibold text-gray-800 flex items-center justify-between">
                <span>Available: <strong className="text-emerald-700">{currentPoolStats.remainingUnused}</strong></span>
                <span>Total Unit: <strong className="text-blue-700">{currentPoolStats.totalInBank}</strong></span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-xs text-center sm:text-left">
              <div className="text-gray-900 font-bold text-sm">
                Configured Test: {customSubject} • {customChapter}
              </div>
              <div className="text-gray-600 font-mono">
                {customQCount} Questions • {customQCount * 4} Marks • {customDuration} Minutes • Level: {customDifficulty}
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
                <span>Launch CBT Simulation</span>
              </button>

              {onOpenUploadModal && (
                <button
                  type="button"
                  onClick={() => onOpenUploadModal(customSubject, customChapter)}
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

      {/* TAB 3: TELEMETRY */}
      {adminTab === 'telemetry' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-2xs">
              <div className="flex items-center justify-between text-[11px] font-bold text-gray-500 uppercase">
                <span>Total Volume</span>
                <HardDrive className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-xl sm:text-2xl font-black text-blue-700 font-mono mt-1">
                {metrics.totalVolumeFormatted}
              </div>
              <p className="text-[10px] text-gray-400 mt-0.5 font-medium">Content Downloaded</p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-2xs">
              <div className="flex items-center justify-between text-[11px] font-bold text-gray-500 uppercase">
                <span>Total Downloads</span>
                <ArrowDownToLine className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-xl sm:text-2xl font-black text-emerald-700 font-mono mt-1">
                {metrics.totalDownloads}
              </div>
              <p className="text-[10px] text-gray-400 mt-0.5 font-medium">Verified PDF Actions</p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-2xs">
              <div className="flex items-center justify-between text-[11px] font-bold text-gray-500 uppercase">
                <span>Active Students</span>
                <Users className="w-4 h-4 text-purple-600" />
              </div>
              <div className="text-xl sm:text-2xl font-black text-purple-700 font-mono mt-1">
                {metrics.uniqueStudents}
              </div>
              <p className="text-[10px] text-gray-400 mt-0.5 font-medium">Verified Contacts</p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-2xs">
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

          <div className="p-4 rounded-2xl border border-gray-200 bg-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex flex-wrap items-center gap-1.5">
              {['All', 'Test Paper', 'Book', 'Scorecard', 'DPP'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                    categoryFilter === cat
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat === 'All' ? 'All Alerts' : cat}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <div className="relative flex-1 sm:w-60">
                <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search student, phone, title..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                onClick={handleMarkAllRead}
                className="px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold flex items-center space-x-1 transition cursor-pointer"
                title="Mark All as Read"
              >
                <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span className="hidden md:inline">Mark Read</span>
              </button>

              <button
                onClick={handleExportCSV}
                className="px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-semibold flex items-center space-x-1 transition cursor-pointer"
                title="Export CSV Report"
              >
                <FileDown className="w-3.5 h-3.5 text-emerald-600" />
                <span className="hidden md:inline">Export CSV</span>
              </button>

              {notifications.length > 0 && (
                <button
                  onClick={handleClear}
                  className="p-2 rounded-xl bg-gray-100 hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition cursor-pointer"
                  title="Clear All Notifications"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="space-y-2.5">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map(item => {
                const badge = getCategoryBadge(item.category);
                const BadgeIcon = badge.icon;

                return (
                  <div
                    key={item.id}
                    className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs ${
                      !item.read ? 'bg-white border-blue-300 ring-1 ring-blue-100' : 'bg-white border-gray-200'
                    }`}
                  >
                    <div className="flex items-start space-x-3.5 min-w-0">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${badge.bg}`}>
                        <BadgeIcon className="w-5 h-5" />
                      </div>

                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg border uppercase font-mono ${badge.bg}`}>
                            {item.category}
                          </span>
                          {!item.read && (
                            <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 font-bold text-[9px] uppercase font-mono">
                              NEW
                            </span>
                          )}
                          <span className="text-[11px] text-gray-500 font-mono flex items-center space-x-1">
                            <Calendar className="w-3 h-3 text-gray-400" />
                            <span>{new Date(item.timestamp).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 border border-gray-200 font-bold">
                            {item.fileSize}
                          </span>
                        </div>

                        <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                          {item.contentTitle}
                        </h4>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs pt-0.5">
                          <span className="inline-flex items-center space-x-1 text-blue-900 font-bold">
                            <User className="w-3.5 h-3.5 text-blue-600" />
                            <span>{item.userName}</span>
                          </span>
                          <span className="inline-flex items-center space-x-1 text-emerald-800 font-mono font-semibold text-[11px]">
                            <Phone className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{item.userPhone}</span>
                          </span>
                          <span className="inline-flex items-center space-x-1 text-gray-500 font-mono text-[11px]">
                            <Mail className="w-3.5 h-3.5 text-gray-400" />
                            <span>{item.userEmail}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold font-mono self-end sm:self-center shrink-0">
                      ✓ Verified
                    </span>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 px-4 bg-white rounded-2xl border border-gray-200 space-y-3">
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

      {/* TAB 4: ENROLLED CANDIDATES & DOMICILE DIRECTORY */}
      {adminTab === 'students' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-5 rounded-2xl text-white shadow-lg space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-400 text-slate-900 uppercase">
                    Admin Authority
                  </span>
                  <span className="text-xs text-blue-200 font-mono">33 Sunday Tests Master Switch</span>
                </div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-300" />
                  <span>Sunday Test Series Authorization Controls</span>
                </h4>
              </div>

              <button
                onClick={handleToggleAdminTestAccess}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs transition flex items-center justify-center space-x-2 cursor-pointer shadow-md ${
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
                    <span>Grant & Unlock Sunday Tests Platform-Wide</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 space-y-1">
                <div className="text-[10px] uppercase font-bold text-blue-200">Current Access Status</div>
                <div className={`text-sm font-bold font-mono ${isAdminTestAccessGranted ? 'text-emerald-300' : 'text-amber-300'}`}>
                  {isAdminTestAccessGranted ? '✓ ACCESS GRANTED (UNLOCKED)' : '🔒 ACCESS LOCKED (APPROVAL REQUIRED)'}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 space-y-1">
                <div className="text-[10px] uppercase font-bold text-blue-200">Test Series Scope</div>
                <div className="text-sm font-bold text-white font-mono">
                  33 Official Sunday Tests (5,940 Qs)
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 space-y-1">
                <div className="text-[10px] uppercase font-bold text-blue-200">Student Enforcement</div>
                <div className="text-sm font-bold text-white font-mono">
                  {isAdminTestAccessGranted ? 'Direct CBT Launch Allowed' : 'Strict Approval Gate Active'}
                </div>
              </div>
            </div>
          </div>

          {enrolledStudent ? (
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-gray-100">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-black text-base flex items-center justify-center shadow-xs">
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
                      Roll: {enrolledStudent.rollNumber} • Target: {enrolledStudent.targetExam || 'NEET (UG)'} {enrolledStudent.targetYear || '2026'}
                    </p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold text-xs font-mono">
                  ✓ Verified Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="text-[10px] uppercase font-bold text-gray-500">Student Contact</div>
                  <div className="font-mono font-bold text-gray-900 mt-0.5">+91 {enrolledStudent.studentPhone}</div>
                </div>

                <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="text-[10px] uppercase font-bold text-gray-500">Parent / Emergency Phone</div>
                  <div className="font-mono font-bold text-emerald-800 mt-0.5">+91 {enrolledStudent.parentPhone || enrolledStudent.studentPhone}</div>
                </div>

                <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="text-[10px] uppercase font-bold text-gray-500">Parent Email ID</div>
                  <div className="font-mono font-semibold text-gray-900 mt-0.5 truncate">{enrolledStudent.parentEmail || enrolledStudent.email}</div>
                </div>

                <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="text-[10px] uppercase font-bold text-gray-500">State Domicile (85% Quota)</div>
                  <div className="font-bold text-blue-700 mt-0.5">{enrolledStudent.domicileState || 'Maharashtra'}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 px-4 bg-white rounded-2xl border border-gray-200 space-y-2">
              <Users className="w-10 h-10 text-gray-400 mx-auto" />
              <h4 className="text-sm font-bold text-gray-700">No Local Student Profile Enrolled</h4>
              <p className="text-xs text-gray-500">Active students registering on this device will stream here.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
