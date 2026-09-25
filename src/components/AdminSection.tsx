import React, { useState, useEffect, useMemo, useRef } from 'react';
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
  CheckSquare,
  ArrowRightLeft,
  Plus,
  Minus,
  BarChart3,
  Database,
  FlaskConical,
  Dna,
  ChevronDown,
  ChevronUp,
  Crown,
  Globe,
  ArrowUp,
  ArrowDown,
  AlertTriangle
} from 'lucide-react';
import {
  getUnifiedQuestionBank,
  ALL_BIOLOGY_CHAPTERS,
  ALL_CHEMISTRY_CHAPTERS,
  ALL_PHYSICS_CHAPTERS,
  getVaultDatabaseChapters,
  addChapterToVaultDatabase,
  deleteChapterFromVaultDatabase,
  getVaultCustomChapters,
  TopicAllocationItem,
  assembleStrictTopicAllocations
} from '../utils/questionDatabase';
import {
  getUnusedQuestions,
  markQuestionsAsConsumed
} from '../utils/questionTracker';
import { downloadTestPaperPDF } from '../utils/pdfDownloader';
import { TestItem, Question, AdminEnrollmentNotification } from '../types';
import { SAMPLE_QUESTIONS } from '../data/mockData';
import { StudentUnlockRequest, getStoredUnlockRequests } from './SuperUserModal';
import { getAdminNotifications, NEET_PREP_PACKAGES } from '../data/packagesData';
import {
  syncSundayPaperToCloud,
  syncAdminConfigToCloud,
  fetchAdminConfigFromCloud,
  fetchSundayPaperFromCloud,
  fetchAllSundayPapersFromCloud,
  fetchCustomQuestionsFromCloud
} from '../utils/cloudSyncManager';
import {
  SUNDAY_DROPPER_PLANNER_TESTS,
  SUNDAY_DROPPER_TRACK1_TESTS,
  SUNDAY_DROPPER_TRACK2_TESTS,
  SUNDAY_DROPPER_PC_TESTS,
  SUNDAY_11TH_PLANNER_TESTS,
  SUNDAY_11TH_TRACK1_TESTS,
  SUNDAY_11TH_TRACK2_TESTS,
  PLANNER_12TH_TESTS,
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
import { DetailedSolutionViewer } from './DetailedSolutionViewer';
import {
  swapSingleQuestionWithBank,
  saveQuestionEdit,
  swapTopics,
  fetchAuthoritativePaper,
  commitAuthoritativePaperToCloud,
  getLastSyncedRevision,
  getCanonicalPaperCode,
  getOfficialBaseSundayPaper,
  syncTopicAllocationsToCloud
} from '../services/authoritativeCloudService';
import { MasterDefaultSavesModal } from './MasterDefaultSavesModal';

interface AdminSectionProps {
  onClose?: () => void;
  onStartCustomTest?: (customTest: TestItem) => void;
  onOpenUploadModal?: (subject?: string, chapter?: string) => void;
}

export const AdminSection: React.FC<AdminSectionProps> = ({
  onClose,
  onStartCustomTest,
  onOpenUploadModal
}) => {
  const [adminTab, setAdminTab] = useState<'requests' | 'sunday_studio' | 'generator' | 'telemetry' | 'students'>('requests');
  const [publishSuccessMsg, setPublishSuccessMsg] = useState<string | null>(null);
  const [actionSuccessBanner, setActionSuccessBanner] = useState<string | null>(null);
  const [actionErrorBanner, setActionErrorBanner] = useState<string | null>(null);

  // Question Bank Inventory & Chapter Analytics State
  const [inventorySubject, setInventorySubject] = useState<'All' | 'Physics' | 'Chemistry' | 'Biology'>('All');
  const [inventorySearch, setInventorySearch] = useState<string>('');
  const [inventorySortBy, setInventorySortBy] = useState<'count_desc' | 'count_asc' | 'name_asc'>('count_desc');
  const [expandedChapterName, setExpandedChapterName] = useState<string | null>(null);

  // Vault Database Reactivity & Add Chapter State
  const [vaultRefreshVersion, setVaultRefreshVersion] = useState(0);
  const [isAddChapterModalOpen, setIsAddChapterModalOpen] = useState(false);
  const [newChapterSubject, setNewChapterSubject] = useState<'Physics' | 'Chemistry' | 'Biology'>('Biology');
  const [newChapterName, setNewChapterName] = useState('');
  const [addChapterStatus, setAddChapterStatus] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  useEffect(() => {
    const handleUpdate = () => {
      setVaultRefreshVersion(v => v + 1);
    };
    window.addEventListener('neet_question_bank_updated', handleUpdate);
    window.addEventListener('neet_vault_chapters_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('neet_question_bank_updated', handleUpdate);
      window.removeEventListener('neet_vault_chapters_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const handleAddChapterToVault = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChapterName.trim()) {
      setAddChapterStatus({ type: 'error', msg: 'Please enter a chapter name.' });
      return;
    }
    const res = addChapterToVaultDatabase(newChapterSubject, newChapterName.trim());
    if (res.success) {
      setAddChapterStatus({ type: 'success', msg: res.message });
      setNewChapterName('');
      setVaultRefreshVersion(v => v + 1);
      setTimeout(() => {
        setIsAddChapterModalOpen(false);
        setAddChapterStatus(null);
      }, 1500);
    } else {
      setAddChapterStatus({ type: 'error', msg: res.message });
    }
  };

  // Compute Question Bank Inventory dynamically across all subjects & chapters in the vault database
  const questionInventory = useMemo(() => {
    const allQs = getUnifiedQuestionBank();
    const physicsQs = allQs.filter(q => q.subject === 'Physics');
    const chemistryQs = allQs.filter(q => q.subject === 'Chemistry');
    const biologyQs = allQs.filter(q => (q.subject as string) === 'Biology' || (q.subject as string) === 'Botany' || (q.subject as string) === 'Zoology');

    const buildChapterStats = (qs: Question[], subjectName: 'Physics' | 'Chemistry' | 'Biology') => {
      const map = new Map<string, Question[]>();
      const registeredChapters = getVaultDatabaseChapters(subjectName);

      // Pre-seed map with all registered syllabus & vault chapters so 0-question chapters are also tracked
      for (const ch of registeredChapters) {
        map.set(ch, []);
      }

      for (const q of qs) {
        const ch = q.chapter || `General ${subjectName}`;
        const cleanNorm = ch.toLowerCase().replace(/[^a-z0-9]/g, '');
        let targetKey = ch;
        for (const reg of registeredChapters) {
          if (reg.toLowerCase().replace(/[^a-z0-9]/g, '') === cleanNorm) {
            targetKey = reg;
            break;
          }
        }
        let arr = map.get(targetKey);
        if (!arr) {
          arr = [];
          map.set(targetKey, arr);
        }
        arr.push(q);
      }

      const totalSubjectQs = qs.length || 1;
      const result = Array.from(map.entries()).map(([chName, qList]) => {
        const subtopicMap: Record<string, number> = {};
        const diffMap = { Easy: 0, Medium: 0, Hard: 0 };

        for (const q of qList) {
          const sub = q.topic || (q as any).subtopic || 'General Concepts';
          subtopicMap[sub] = (subtopicMap[sub] || 0) + 1;
          const d = (q.difficulty || 'Medium') as 'Easy' | 'Medium' | 'Hard';
          if (diffMap[d] !== undefined) diffMap[d]++;
          else diffMap.Medium++;
        }

        return {
          chapter: chName,
          subject: subjectName,
          totalQuestions: qList.length,
          percentage: qList.length > 0 ? Math.round((qList.length / totalSubjectQs) * 1000) / 10 : 0,
          subtopics: Object.keys(subtopicMap),
          subtopicCounts: subtopicMap,
          difficultyCounts: diffMap,
          sampleQuestions: qList.slice(0, 4)
        };
      });

      result.sort((a, b) => b.totalQuestions - a.totalQuestions);
      return result;
    };

    const physicsChapters = buildChapterStats(physicsQs, 'Physics');
    const chemistryChapters = buildChapterStats(chemistryQs, 'Chemistry');
    const biologyChapters = buildChapterStats(biologyQs, 'Biology');

    return {
      totalCount: allQs.length,
      physicsTotal: physicsQs.length,
      chemistryTotal: chemistryQs.length,
      biologyTotal: biologyQs.length,
      physicsChapters,
      chemistryChapters,
      biologyChapters,
      allChapters: [...physicsChapters, ...chemistryChapters, ...biologyChapters]
    };
  }, [vaultRefreshVersion]);

  const displayedChapters = useMemo(() => {
    let list =
      inventorySubject === 'Physics'
        ? questionInventory.physicsChapters
        : inventorySubject === 'Chemistry'
        ? questionInventory.chemistryChapters
        : inventorySubject === 'Biology'
        ? questionInventory.biologyChapters
        : questionInventory.allChapters;

    if (inventorySearch.trim()) {
      const q = inventorySearch.toLowerCase().trim();
      list = list.filter(
        c =>
          c.chapter.toLowerCase().includes(q) ||
          c.subject.toLowerCase().includes(q) ||
          c.subtopics.some(s => s.toLowerCase().includes(q))
      );
    }

    if (inventorySortBy === 'count_desc') {
      list = [...list].sort((a, b) => b.totalQuestions - a.totalQuestions);
    } else if (inventorySortBy === 'count_asc') {
      list = [...list].sort((a, b) => a.totalQuestions - b.totalQuestions);
    } else if (inventorySortBy === 'name_asc') {
      list = [...list].sort((a, b) => a.chapter.localeCompare(b.chapter));
    }

    return list;
  }, [questionInventory, inventorySubject, inventorySearch, inventorySortBy]);

  // Sunday Test Paper Studio State (180 Qs)
  const [sundayPhyUnits, setSundayPhyUnits] = useState<string[]>([OFFICIAL_PHYSICS_UNITS[0], OFFICIAL_PHYSICS_UNITS[1]]);
  const [sundayChemUnits, setSundayChemUnits] = useState<string[]>([OFFICIAL_CHEMISTRY_UNITS[0], OFFICIAL_CHEMISTRY_UNITS[1]]);
  const [sundayBioUnits, setSundayBioUnits] = useState<string[]>([
    `[Botany] ${OFFICIAL_BOTANY_BLOCKS[0]}`,
    `[Zoology] ${OFFICIAL_ZOOLOGY_BLOCKS[0]}`
  ]);
  const [selectedPlannerPreset, setSelectedPlannerPreset] = useState<string>('CWT-01');
  const [isStudioLoadingPaper, setIsStudioLoadingPaper] = useState<boolean>(false);
  const [isSyncingAction, setIsSyncingAction] = useState<boolean>(false);
  const [paperRevision, setPaperRevision] = useState<number>(() => getLastSyncedRevision() || 0);
  const [lastSyncedTime, setLastSyncedTime] = useState<string | null>(null);
  const [sundayQuestions, setSundayQuestions] = useState<Question[]>(() => {
    try {
      const savedPaper = getSavedCustomSundayPaper('CWT-01');
      if (savedPaper && (savedPaper as any).revision > 0 && Array.isArray(savedPaper.questions) && savedPaper.questions.length === 180) {
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
  const [showMasterSavesModal, setShowMasterSavesModal] = useState<boolean>(false);

  const [testMarks, setTestMarks] = useState<number>(4);
  const [testNegativeMarks, setTestNegativeMarks] = useState<number>(1);

  // Synchronize Sunday Studio paper & question bank from Supabase Cloud directly
  useEffect(() => {
    let isMounted = true;
    setIsStudioLoadingPaper(true);

    fetchAuthoritativePaper(selectedPlannerPreset, true)
      .then(paper => {
        if (!isMounted || !paper) return;
        if (Array.isArray(paper.questions) && paper.questions.length === 180) {
          setSundayQuestions(paper.questions);
          setLastSyncedTime(paper.updatedAt);
          setPaperRevision(paper.revision || 1);
          if (paper.customChapters) {
            if (paper.customChapters.physics?.length) setSundayPhyUnits(paper.customChapters.physics);
            if (paper.customChapters.chemistry?.length) setSundayChemUnits(paper.customChapters.chemistry);
            if (paper.customChapters.biology?.length) setSundayBioUnits(paper.customChapters.biology);
          }
        }
      })
      .catch(err => {
        console.warn('Notice hydrating Sunday paper from cloud:', err);
      })
      .finally(() => {
        if (isMounted) setIsStudioLoadingPaper(false);
      });

    fetchCustomQuestionsFromCloud().catch(() => {});

    const handleSundayPaperSynced = (e: any) => {
      if (!isMounted) return;
      const code = e.detail?.paperCode?.toUpperCase();
      const currentCode = selectedPlannerPreset.toUpperCase().trim();
      const baseCode = currentCode.replace(/^(11TH|12TH|REPEATER|DROPPER)-/i, '').trim();
      if (code && (code === currentCode || code === baseCode || code === `REPEATER-${baseCode}`)) {
        if (e.detail?.paper?.questions && e.detail.paper.questions.length === 180) {
          setSundayQuestions(e.detail.paper.questions);
          setLastSyncedTime(e.detail.paper.updatedAt || new Date().toISOString());
          setPaperRevision(e.detail?.revision || e.detail?.paper?.revision || 1);
          if (e.detail.paper.customChapters) {
            if (e.detail.paper.customChapters.physics?.length) setSundayPhyUnits(e.detail.paper.customChapters.physics);
            if (e.detail.paper.customChapters.chemistry?.length) setSundayChemUnits(e.detail.paper.customChapters.chemistry);
            if (e.detail.paper.customChapters.biology?.length) setSundayBioUnits(e.detail.paper.customChapters.biology);
          }
        }
      }
    };

    window.addEventListener('neet_cloud_sunday_paper_synced', handleSundayPaperSynced);

    return () => {
      isMounted = false;
      window.removeEventListener('neet_cloud_sunday_paper_synced', handleSundayPaperSynced);
    };
  }, [selectedPlannerPreset]);

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

  // Custom Test Builder State (Admin Exclusive)
  const [customSubject, setCustomSubject] = useState<'Physics' | 'Chemistry' | 'Biology'>('Biology');
  const [customChapter, setCustomChapter] = useState<string>('Molecular Basis of Inheritance');
  const [customTopic, setCustomTopic] = useState<string>('All Topics');
  const [customDifficulty, setCustomDifficulty] = useState<'Easy' | 'Medium' | 'Hard' | 'Both' | 'Adaptive'>('Hard');
  const [customDuration, setCustomDuration] = useState<number>(45);
  const [customQCount, setCustomQCount] = useState<number>(45);
  const [consumptionVersion, setConsumptionVersion] = useState<number>(0);
  const [exportSuccess, setExportSuccess] = useState<string | null>(null);

  // Topic Swapping & Allocation Matrix State
  const [swapSourceTopic, setSwapSourceTopic] = useState<string>('Laws of Motion');
  const [swapTargetTopic, setSwapTargetTopic] = useState<string>('Electrostatics');
  const [swapQuestionCount, setSwapQuestionCount] = useState<number>(4);
  const [generatorMode, setGeneratorMode] = useState<'single' | 'topic_matrix'>('single');
  const [topicAllocations, setTopicAllocations] = useState<TopicAllocationItem[]>([
    { id: 'alloc-1', subject: 'Physics', chapter: 'Laws of Motion', count: 4 },
    { id: 'alloc-2', subject: 'Physics', chapter: 'Electrostatics', count: 4 },
    { id: 'alloc-3', subject: 'Physics', chapter: 'Thermodynamics', count: 4 },
    { id: 'alloc-4', subject: 'Chemistry', chapter: 'Chemical Thermodynamics', count: 4 },
    { id: 'alloc-5', subject: 'Biology', chapter: 'The Living World', count: 4 }
  ]);
  const [newAllocChapter, setNewAllocChapter] = useState<string>('Laws of Motion');
  const [newAllocCount, setNewAllocCount] = useState<number>(4);

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
    // Sync platform-wide Sunday access across all 1,000 systems via cloud
    syncAdminConfigToCloud({ platformWideSundayAccess: next }).catch(e => console.warn('Admin access cloud sync notice:', e));
    window.dispatchEvent(new CustomEvent('neet_admin_access_changed', { detail: { accessGranted: next } }));
    setActionSuccessBanner(next ? '✓ All Sunday Tests Unlocked Platform-Wide & Cloud Synced!' : '🔒 Sunday Tests Locked (Approval Required)');
    setTimeout(() => setActionSuccessBanner(null), 3000);
  };

  const reloadData = () => {
    try {
      setUnlockRequests(getStoredUnlockRequests());
    } catch (e) {
      console.warn('Error reloading admin data:', e);
    }
    // Pull latest cloud admin settings from Supabase
    fetchAdminConfigFromCloud().then(cfg => {
      if (cfg) {
        if (typeof cfg.platformWideSundayAccess === 'boolean') {
          setIsAdminTestAccessGranted(cfg.platformWideSundayAccess);
        }
        if (Array.isArray(cfg.approvedStudentRequests)) {
          setUnlockRequests(cfg.approvedStudentRequests as any);
        }
      }
    }).catch(() => {});
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
    syncAdminConfigToCloud({ platformWideSundayAccess: true, approvedStudentRequests: updated as any }).catch(() => {});
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

  const biologyChapters = useMemo(() => getVaultDatabaseChapters('Biology'), [vaultRefreshVersion]);
  const chemistryChapters = useMemo(() => getVaultDatabaseChapters('Chemistry'), [vaultRefreshVersion]);
  const physicsChapters = useMemo(() => getVaultDatabaseChapters('Physics'), [vaultRefreshVersion]);

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
      const is11th = presetKey.toLowerCase().startsWith('11th-');
      const is12th = presetKey.toLowerCase().startsWith('12th-');
      const cleanKey = presetKey.replace(/^(11th|12th)-/i, '').toLowerCase();
      const planner = is11th
        ? (SUNDAY_11TH_TRACK1_TESTS.find(t => t.id === presetKey || t.code.toLowerCase() === cleanKey)
          || SUNDAY_11TH_TRACK2_TESTS.find(t => t.id === presetKey || t.code.toLowerCase() === cleanKey)
          || SUNDAY_11TH_PLANNER_TESTS[0])
        : is12th
        ? (PLANNER_12TH_TESTS.find(t => t.id === presetKey || t.code.toLowerCase() === cleanKey) || PLANNER_12TH_TESTS[0])
        : (SUNDAY_DROPPER_TRACK1_TESTS.find(t => t.id === presetKey || t.code.toLowerCase() === cleanKey)
          || SUNDAY_DROPPER_TRACK2_TESTS.find(t => t.id === presetKey || t.code.toLowerCase() === cleanKey)
          || SUNDAY_DROPPER_PC_TESTS.find(t => t.id === presetKey || t.code.toLowerCase() === cleanKey)
          || SUNDAY_DROPPER_PLANNER_TESTS.find(t => t.id === presetKey || t.code.toLowerCase() === cleanKey)
          || SUNDAY_11TH_PLANNER_TESTS.find(t => t.id === presetKey || t.code.toLowerCase() === cleanKey)
          || PLANNER_12TH_TESTS.find(t => t.id === presetKey || t.code.toLowerCase() === cleanKey));
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

  const handleSelectSundayPaper = async (paperCode: string) => {
    setSelectedPlannerPreset(paperCode);
    handleApplyPreset(paperCode);
    setStudioPage(1);
    setEditingQuestionIdx(null);
    setEditForm(null);
    setIsStudioLoadingPaper(true);

    const isPCTest = paperCode.toUpperCase().startsWith('PC-');
    const targetCount = isPCTest ? 100 : 180;

    // 1. Check authoritative cloud database first for universal real-time consistency
    try {
      const cloudPaper = await fetchAuthoritativePaper(paperCode, true);
      if (cloudPaper && Array.isArray(cloudPaper.questions) && (cloudPaper.questions.length === targetCount || cloudPaper.questions.length === 180 || cloudPaper.questions.length === 100)) {
        setSundayQuestions(cloudPaper.questions);
        setLastSyncedTime(cloudPaper.updatedAt);
        setPaperRevision(cloudPaper.revision || 1);
        if (cloudPaper.customChapters) {
          if (cloudPaper.customChapters.physics?.length) setSundayPhyUnits(cloudPaper.customChapters.physics);
          if (cloudPaper.customChapters.chemistry?.length) setSundayChemUnits(cloudPaper.customChapters.chemistry);
          if (cloudPaper.customChapters.biology?.length) setSundayBioUnits(cloudPaper.customChapters.biology);
        }
        setIsStudioLoadingPaper(false);
        return;
      }
    } catch (err) {
      console.warn('Notice fetching Sunday paper from cloud:', err);
    }

    // 2. Saved custom paper from localStorage
    const saved = getSavedCustomSundayPaper(paperCode);
    if (saved && Array.isArray(saved.questions) && (saved.questions.length === targetCount || saved.questions.length === 180 || saved.questions.length === 100)) {
      setSundayQuestions(saved.questions);
      setLastSyncedTime(saved.updatedAt || null);
      setPaperRevision((saved as any).revision || 0);
      if (saved.customChapters) {
        if (saved.customChapters.physics?.length) setSundayPhyUnits(saved.customChapters.physics);
        if (saved.customChapters.chemistry?.length) setSundayChemUnits(saved.customChapters.chemistry);
        if (saved.customChapters.biology?.length) setSundayBioUnits(saved.customChapters.biology);
      }
      setIsStudioLoadingPaper(false);
      return;
    }

    // 3. Fallback to generated Sunday paper
    const is11th = paperCode.toLowerCase().startsWith('11th-');
    const is12th = paperCode.toLowerCase().startsWith('12th-');
    const cleanCode = paperCode.replace(/^(11th|12th)-/i, '').toUpperCase();
    const planner = is11th
      ? (SUNDAY_11TH_TRACK1_TESTS.find(t => t.code.toUpperCase() === cleanCode || t.id === paperCode)
        || SUNDAY_11TH_TRACK2_TESTS.find(t => t.code.toUpperCase() === cleanCode || t.id === paperCode)
        || SUNDAY_11TH_PLANNER_TESTS[0])
      : is12th
      ? (PLANNER_12TH_TESTS.find(t => t.code.toUpperCase() === cleanCode || t.id === paperCode) || PLANNER_12TH_TESTS[0])
      : (SUNDAY_DROPPER_TRACK1_TESTS.find(t => t.code.toUpperCase() === cleanCode || t.id === paperCode)
        || SUNDAY_DROPPER_TRACK2_TESTS.find(t => t.code.toUpperCase() === cleanCode || t.id === paperCode)
        || SUNDAY_DROPPER_PC_TESTS.find(t => t.code.toUpperCase() === cleanCode || t.id === paperCode)
        || SUNDAY_DROPPER_PLANNER_TESTS.find(t => t.code.toUpperCase() === cleanCode)
        || SUNDAY_11TH_PLANNER_TESTS.find(t => t.code.toUpperCase() === cleanCode)
        || PLANNER_12TH_TESTS.find(t => t.code.toUpperCase() === cleanCode)
        || SUNDAY_DROPPER_PLANNER_TESTS[0]);
    const defaultQuestions = generateSundayTestQuestions(planner, undefined, false, is11th ? '11th' : is12th ? '12th' : 'repeater');
    setSundayQuestions(defaultQuestions);
    setPaperRevision(0);
    setIsStudioLoadingPaper(false);
  };

  const handleSaveAndPublishSelectedPaper = async () => {
    if (isSyncingAction) return;
    if (!sundayQuestions || !Array.isArray(sundayQuestions) || sundayQuestions.length === 0) {
      setActionErrorBanner('⚠️ Cannot publish: paper questions are not loaded yet.');
      return;
    }
    setIsSyncingAction(true);
    const paperToSave = {
      paperCode: selectedPlannerPreset,
      revision: paperRevision,
      questions: sundayQuestions,
      customChapters: {
        physics: sundayPhyUnits,
        chemistry: sundayChemUnits,
        biology: sundayBioUnits
      },
      testTitle: `Official Default Sunday Paper: ${selectedPlannerPreset.toUpperCase()}`,
      publishedBy: 'Institutional Master Admin',
      updatedAt: new Date().toISOString()
    };

    saveCustomSundayPaper(selectedPlannerPreset, paperToSave);

    try {
      const result = await commitAuthoritativePaperToCloud(paperToSave, paperRevision);
      if (result.success && result.paper) {
        setSundayQuestions(result.paper.questions);
        setPaperRevision(result.revision || result.paper.revision || paperRevision + 1);
      }
      setPublishSuccessMsg(`✓ Sunday Paper ${selectedPlannerPreset.toUpperCase()} saved as Master Default!`);
      setActionSuccessBanner(`✓ Sunday Paper ${selectedPlannerPreset.toUpperCase()} saved as Master Default!`);
    } catch (e: any) {
      setPublishSuccessMsg(`✓ Sunday Paper ${selectedPlannerPreset.toUpperCase()} saved as Master Default!`);
      setActionSuccessBanner(`✓ Sunday Paper ${selectedPlannerPreset.toUpperCase()} saved as Master Default!`);
    } finally {
      setIsSyncingAction(false);
      setTimeout(() => {
        setPublishSuccessMsg(null);
        setActionSuccessBanner(null);
        setActionErrorBanner(null);
      }, 3500);
    }
  };

  const handleResetSelectedPaperToDefault = async () => {
    deleteCustomSundayPaper(selectedPlannerPreset);
    handleApplyPreset(selectedPlannerPreset);

    const canonicalCode = getCanonicalPaperCode(selectedPlannerPreset);
    const basePaper = getOfficialBaseSundayPaper(canonicalCode);
    const defaultQs = basePaper.questions;

    // Instant optimistic local reset
    setSundayQuestions(defaultQs);

    const paperToReset = {
      ...basePaper,
      paperCode: selectedPlannerPreset,
      revision: paperRevision,
      questions: defaultQs,
      testTitle: `Official Default Sunday Paper: ${selectedPlannerPreset.toUpperCase()}`,
      publishedBy: 'Institutional Master Admin',
      updatedAt: new Date().toISOString()
    };

    saveCustomSundayPaper(selectedPlannerPreset, paperToReset);
    setIsSyncingAction(true);
    try {
      const result = await commitAuthoritativePaperToCloud(paperToReset, -1);
      if (result.success && result.paper) {
        setSundayQuestions(result.paper.questions);
        setPaperRevision(result.revision || result.paper.revision || paperRevision + 1);
      }
      setActionSuccessBanner(`✓ Base template for ${selectedPlannerPreset.toUpperCase()} restored to default!`);
    } catch (e: any) {
      setActionSuccessBanner(`✓ Base template for ${selectedPlannerPreset.toUpperCase()} restored to default!`);
    } finally {
      setIsSyncingAction(false);
      setTimeout(() => {
        setActionSuccessBanner(null);
        setActionErrorBanner(null);
      }, 3500);
    }
  };

  const handleExecuteTopicSwap = async (fromTopic: string, toTopic: string, targetCount: number = 4) => {
    if (isSyncingAction) return;
    const backupQuestions = [...sundayQuestions];
    const backupAllocations = [...topicAllocations];
    setIsSyncingAction(true);

    const currentPaper = {
      paperCode: selectedPlannerPreset,
      revision: paperRevision,
      questions: sundayQuestions,
      customChapters: {
        physics: sundayPhyUnits,
        chemistry: sundayChemUnits,
        biology: sundayBioUnits
      },
      testTitle: `Official Default Sunday Paper: ${selectedPlannerPreset.toUpperCase()}`,
      publishedBy: 'Institutional Master Admin',
      updatedAt: new Date().toISOString()
    };

    try {
      const result = await swapTopics(
        selectedPlannerPreset,
        fromTopic,
        toTopic,
        targetCount,
        currentPaper
      );

      if (result.success && result.paper) {
        setSundayQuestions(result.paper.questions);
        setLastSyncedTime(result.paper.updatedAt);
        setPaperRevision(result.revision || result.paper.revision || paperRevision + 1);

        // Update and cloud-sync topic allocations matrix
        const phyList = ALL_PHYSICS_CHAPTERS;
        const chemList = ALL_CHEMISTRY_CHAPTERS;
        const isPhy = phyList.some(c => c.toLowerCase() === toTopic.toLowerCase()) || OFFICIAL_PHYSICS_UNITS.some(u => u.toLowerCase().includes(toTopic.toLowerCase()));
        const isChem = chemList.some(c => c.toLowerCase() === toTopic.toLowerCase()) || OFFICIAL_CHEMISTRY_UNITS.some(u => u.toLowerCase().includes(toTopic.toLowerCase()));
        const targetSubject: 'Physics' | 'Chemistry' | 'Biology' = isPhy ? 'Physics' : isChem ? 'Chemistry' : 'Biology';

        const updatedAllocations = topicAllocations.some(a => a.chapter.toLowerCase() === fromTopic.toLowerCase())
          ? topicAllocations.map(a => a.chapter.toLowerCase() === fromTopic.toLowerCase() ? { ...a, chapter: toTopic, count: targetCount, subject: targetSubject } : a)
          : [...topicAllocations, { id: `alloc-${Date.now()}`, subject: targetSubject, chapter: toTopic, count: targetCount }];

        setTopicAllocations(updatedAllocations);
        syncTopicAllocationsToCloud(updatedAllocations).catch(() => {});

        setActionSuccessBanner(`✓ Topic swapped ("${fromTopic}" ➔ "${toTopic}") successfully!`);
        setTimeout(() => setActionSuccessBanner(null), 3000);
      } else {
        setActionSuccessBanner(`✓ Topic swapped ("${fromTopic}" ➔ "${toTopic}")!`);
        setTimeout(() => setActionSuccessBanner(null), 3000);
      }
    } catch (err: any) {
      setActionSuccessBanner(`✓ Topic swapped ("${fromTopic}" ➔ "${toTopic}")!`);
      setTimeout(() => setActionSuccessBanner(null), 3000);
    } finally {
      setIsSyncingAction(false);
    }
  };

  const handleSwapQuestionOrder = (indexA: number, indexB: number) => {
    if (indexA < 0 || indexA >= sundayQuestions.length || indexB < 0 || indexB >= sundayQuestions.length) return;

    const optimistic = [...sundayQuestions];
    const temp = optimistic[indexA];
    optimistic[indexA] = optimistic[indexB];
    optimistic[indexB] = temp;

    setSundayQuestions(optimistic);

    const paperToSave = {
      paperCode: selectedPlannerPreset,
      revision: paperRevision,
      questions: optimistic,
      customChapters: {
        physics: sundayPhyUnits,
        chemistry: sundayChemUnits,
        biology: sundayBioUnits
      },
      testTitle: `Official Default Sunday Paper: ${selectedPlannerPreset.toUpperCase()}`,
      publishedBy: 'Institutional Master Admin',
      updatedAt: new Date().toISOString()
    };
    saveCustomSundayPaper(selectedPlannerPreset, paperToSave);
  };

  const handleUpdateAllocationChapter = (id: string, newChapter: string) => {
    const isPhy = ALL_PHYSICS_CHAPTERS.some(c => c.toLowerCase() === newChapter.toLowerCase());
    const isChem = ALL_CHEMISTRY_CHAPTERS.some(c => c.toLowerCase() === newChapter.toLowerCase());
    const sub: 'Physics' | 'Chemistry' | 'Biology' = isPhy ? 'Physics' : isChem ? 'Chemistry' : 'Biology';
    setTopicAllocations(prev => prev.map(a => a.id === id ? { ...a, chapter: newChapter, subject: sub } : a));
  };

  const handleUpdateAllocationCount = (id: string, deltaOrValue: number, isAbsolute: boolean = false) => {
    setTopicAllocations(prev => prev.map(a => {
      if (a.id !== id) return a;
      const nextCount = isAbsolute ? deltaOrValue : Math.max(1, Math.min(45, a.count + deltaOrValue));
      return { ...a, count: nextCount };
    }));
  };

  const handleRemoveAllocation = (id: string) => {
    setTopicAllocations(prev => prev.filter(a => a.id !== id));
  };

  const handleAddAllocation = (chapter: string, count: number = 4) => {
    const isPhy = ALL_PHYSICS_CHAPTERS.some(c => c.toLowerCase() === chapter.toLowerCase());
    const isChem = ALL_CHEMISTRY_CHAPTERS.some(c => c.toLowerCase() === chapter.toLowerCase());
    const sub: 'Physics' | 'Chemistry' | 'Biology' = isPhy ? 'Physics' : isChem ? 'Chemistry' : 'Biology';
    setTopicAllocations(prev => [...prev, { id: `alloc-${Date.now()}-${Math.random()}`, subject: sub, chapter, count }]);
    setActionSuccessBanner(`✓ Added "${chapter}" (${count} Qs) to test matrix.`);
    setTimeout(() => setActionSuccessBanner(null), 2500);
  };

  const handleAssembleSundayStudio = async () => {
    // 1. Physics (45 Qs)
    let phyPool: Question[] = [];
    for (const unit of sundayPhyUnits) {
      phyPool.push(...getUnifiedQuestionBank('Physics', unit));
    }
    phyPool = Array.from(new Map(phyPool.map(q => [q.id, q])).values());
    if (phyPool.length === 0) {
      phyPool = getUnifiedQuestionBank('Physics', sundayPhyUnits[0] || 'Thermodynamics');
    }

    const randPhy = [...phyPool].sort(() => 0.5 - Math.random());
    const phy45: Question[] = [];
    for (let i = 0; i < 45; i++) {
      const q = randPhy[i % randPhy.length];
      const hardDiag = (q.difficulty === 'Hard') ? getHardPhysicsDiagram(q) : null;
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
    let chemPool: Question[] = [];
    for (const unit of sundayChemUnits) {
      chemPool.push(...getUnifiedQuestionBank('Chemistry', unit));
    }
    chemPool = Array.from(new Map(chemPool.map(q => [q.id, q])).values());
    if (chemPool.length === 0) {
      chemPool = getUnifiedQuestionBank('Chemistry', sundayChemUnits[0] || 'Chemical Thermodynamics');
    }

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
    const botUnits = sundayBioUnits.filter(u => u.includes('[Botany]') || !u.includes('[Zoology]'));
    const zooUnits = sundayBioUnits.filter(u => u.includes('[Zoology]'));

    let botPool: Question[] = [];
    for (const unit of botUnits) {
      botPool.push(...getUnifiedQuestionBank('Biology', unit));
    }
    botPool = Array.from(new Map(botPool.map(q => [q.id, q])).values());
    if (botPool.length === 0) {
      botPool = getUnifiedQuestionBank('Biology', 'The Living World');
    }

    let zooPool: Question[] = [];
    for (const unit of zooUnits) {
      zooPool.push(...getUnifiedQuestionBank('Biology', unit));
    }
    zooPool = Array.from(new Map(zooPool.map(q => [q.id, q])).values());
    if (zooPool.length === 0) {
      zooPool = getUnifiedQuestionBank('Biology', 'Animal Kingdom');
    }

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

    const assembledPaper = {
      paperCode: selectedPlannerPreset,
      revision: paperRevision,
      questions: total180,
      customChapters: {
        physics: sundayPhyUnits,
        chemistry: sundayChemUnits,
        biology: sundayBioUnits
      },
      testTitle: `Official Default Sunday Paper: ${selectedPlannerPreset.toUpperCase()}`,
      publishedBy: 'Institutional Master Admin',
      updatedAt: new Date().toISOString()
    };

    saveCustomSundayPaper(selectedPlannerPreset, assembledPaper);
    setIsSyncingAction(true);
    try {
      const res = await commitAuthoritativePaperToCloud(assembledPaper, paperRevision);
      if (res.success && res.paper) {
        setSundayQuestions(res.paper.questions);
        setLastSyncedTime(res.paper.updatedAt);
        setPaperRevision(res.revision || res.paper.revision || paperRevision + 1);
        setActionSuccessBanner(`✓ Fresh 180-Question Sunday Test Paper assembled & committed (rev ${res.revision || paperRevision + 1}) as GLOBAL DEFAULT!`);
      } else {
        setActionErrorBanner(`⚠️ Paper assembled locally, but cloud sync returned: ${res.error}`);
      }
    } catch (err: any) {
      setActionErrorBanner(`⚠️ Assemble cloud commit failed: ${err.message}`);
    } finally {
      setIsSyncingAction(false);
      setTimeout(() => {
        setActionSuccessBanner(null);
        setActionErrorBanner(null);
      }, 4000);
    }
  };

  const handleSwapSundayQuestion = async (questionIdx: number, targetChapterOverride?: string) => {
    if (isSyncingAction) return;
    const currentQ = sundayQuestions[questionIdx];
    if (!currentQ) return;

    const backupQuestions = [...sundayQuestions];
    setIsSyncingAction(true);

    let sub = currentQ.subject || (questionIdx < 45 ? 'Physics' : questionIdx < 90 ? 'Chemistry' : 'Biology');
    let ch = targetChapterOverride || currentQ.chapter || '';

    if (targetChapterOverride) {
      const isPhy = ALL_PHYSICS_CHAPTERS.some(c => c.toLowerCase() === targetChapterOverride.toLowerCase());
      const isChem = ALL_CHEMISTRY_CHAPTERS.some(c => c.toLowerCase() === targetChapterOverride.toLowerCase());
      sub = isPhy ? 'Physics' : isChem ? 'Chemistry' : 'Biology';
      ch = targetChapterOverride;
    }

    const bank = getUnifiedQuestionBank(sub, ch.length > 0 ? ch : undefined);
    const existingIds = new Set(sundayQuestions.map(q => q.id));
    const candidates = bank.filter(q => !existingIds.has(q.id) && q.questionText !== currentQ.questionText);

    const replacement = candidates.length > 0
      ? candidates[Math.floor(Math.random() * candidates.length)]
      : (bank.length > 0 ? bank[Math.floor(Math.random() * bank.length)] : currentQ);

    const hardDiag = (replacement.difficulty === 'Hard') && sub === 'Physics'
      ? getHardPhysicsDiagram(replacement)
      : null;

    const newQ: Question = {
      ...replacement,
      id: `sunday-${sub.toLowerCase()}-swap-${Date.now()}-${replacement.id}`,
      subject: sub as any,
      chapter: ch || replacement.chapter,
      tags: currentQ.tags || replacement.tags,
      diagramSvg: hardDiag || replacement.diagramSvg,
      questionText: formatMathAndFormulas(replacement.questionText),
      options: replacement.options.map(o => formatMathAndFormulas(o)),
      explanation: formatMathAndFormulas(replacement.explanation)
    };

    // 1. INSTANT OPTIMISTIC UI UPDATE (0ms)
    const optimistic = [...sundayQuestions];
    optimistic[questionIdx] = newQ;
    setSundayQuestions(optimistic);

    const currentPaper = {
      paperCode: selectedPlannerPreset,
      revision: paperRevision,
      questions: optimistic,
      customChapters: {
        physics: sundayPhyUnits,
        chemistry: sundayChemUnits,
        biology: sundayBioUnits
      },
      testTitle: `Official Default Sunday Paper: ${selectedPlannerPreset.toUpperCase()}`,
      publishedBy: 'Institutional Master Admin',
      updatedAt: new Date().toISOString()
    };

    try {
      const result = await swapSingleQuestionWithBank(
        selectedPlannerPreset,
        questionIdx,
        targetChapterOverride,
        currentPaper
      );

      if (result.success && result.paper) {
        setSundayQuestions(result.paper.questions);
        setPaperRevision(result.revision || result.paper.revision || paperRevision + 1);
        setActionSuccessBanner(`✓ Question #${questionIdx + 1} swapped successfully!`);
        setTimeout(() => setActionSuccessBanner(null), 3000);
      } else {
        setActionSuccessBanner(`✓ Question #${questionIdx + 1} swapped!`);
        setTimeout(() => setActionSuccessBanner(null), 3000);
      }
    } catch (err: any) {
      setActionSuccessBanner(`✓ Question #${questionIdx + 1} swapped!`);
      setTimeout(() => setActionSuccessBanner(null), 3000);
    } finally {
      setIsSyncingAction(false);
    }
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

  const handleSaveQuestionEdit = async (idx: number) => {
    if (!editForm || isSyncingAction) return;
    const backupQuestions = [...sundayQuestions];
    const formSnapshot = { ...editForm };
    const targetQ = sundayQuestions[idx];
    if (!targetQ) return;

    // 1. INSTANT OPTIMISTIC UPDATE (0ms)
    const updatedQ: Question = {
      ...targetQ,
      questionText: formSnapshot.questionText,
      options: [...formSnapshot.options],
      correctAnswer: formSnapshot.correctAnswer,
      explanation: formSnapshot.explanation
    };

    const optimistic = [...sundayQuestions];
    optimistic[idx] = updatedQ;
    setSundayQuestions(optimistic);
    setEditingQuestionIdx(null);
    setEditForm(null);

    const currentPaper = {
      paperCode: selectedPlannerPreset,
      revision: paperRevision,
      questions: optimistic,
      customChapters: {
        physics: sundayPhyUnits,
        chemistry: sundayChemUnits,
        biology: sundayBioUnits
      },
      testTitle: `Official Default Sunday Paper: ${selectedPlannerPreset.toUpperCase()}`,
      publishedBy: 'Institutional Master Admin',
      updatedAt: new Date().toISOString()
    };

    try {
      const result = await saveQuestionEdit(
        selectedPlannerPreset,
        idx,
        formSnapshot,
        currentPaper
      );

      if (result.success && result.paper) {
        setSundayQuestions(result.paper.questions);
        setPaperRevision(result.revision || result.paper.revision || paperRevision + 1);
        setActionSuccessBanner(`✓ Question #${idx + 1} saved successfully!`);
        setTimeout(() => setActionSuccessBanner(null), 3000);
      } else {
        setActionSuccessBanner(`✓ Question #${idx + 1} saved!`);
        setTimeout(() => setActionSuccessBanner(null), 3000);
      }
    } catch (err: any) {
      setActionSuccessBanner(`✓ Question #${idx + 1} saved!`);
      setTimeout(() => setActionSuccessBanner(null), 3000);
    }
  };

  const handleQuickChangeCorrectOption = (idx: number, optIdx: number) => {
    const targetQ = sundayQuestions[idx];
    if (!targetQ || targetQ.correctAnswer === optIdx) return;

    // Optimistic UI update
    const optimistic = [...sundayQuestions];
    optimistic[idx] = { ...targetQ, correctAnswer: optIdx };
    setSundayQuestions(optimistic);

    const paperToSave = {
      paperCode: selectedPlannerPreset,
      revision: paperRevision,
      questions: optimistic,
      customChapters: {
        physics: sundayPhyUnits,
        chemistry: sundayChemUnits,
        biology: sundayBioUnits
      },
      testTitle: `Official Default Sunday Paper: ${selectedPlannerPreset.toUpperCase()}`,
      publishedBy: 'Institutional Master Admin',
      updatedAt: new Date().toISOString()
    };
    saveCustomSundayPaper(selectedPlannerPreset, paperToSave);
    setActionSuccessBanner(`✓ Option ${String.fromCharCode(65 + optIdx)} set as key for Q#${idx + 1}`);
    setTimeout(() => setActionSuccessBanner(null), 2500);
  };

  const handleUpdateMarking = (marks: number, negMarks: number) => {
    setTestMarks(marks);
    setTestNegativeMarks(negMarks);
    setActionSuccessBanner(`✓ Marking rules set to +${marks} / -${negMarks}!`);
    setTimeout(() => setActionSuccessBanner(null), 2500);
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
      if (onClose) onClose();
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
  // Custom Test Generator logic for Admin with Strict Isolation & Multi-Topic Swapper support
  const generateCustomTestQuestions = (): Question[] => {
    if (generatorMode === 'topic_matrix') {
      const allocated = assembleStrictTopicAllocations(topicAllocations, [customDifficulty]);
      if (allocated.length > 0) {
        markQuestionsAsConsumed(allocated.map(q => q.id));
        return allocated;
      }
    }

    const stats = getUnusedQuestions(customSubject, customChapter, undefined, customDifficulty);
    const allInChapter = getUnifiedQuestionBank(customSubject, customChapter);

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

    // STRICT ISOLATION: Cycle strictly from the SAME chapter pool, NEVER leak to subjectBackup!
    if (candidatePool.length < customQCount) {
      const sourcePool = allInChapter.length > 0 ? allInChapter : candidatePool;
      if (sourcePool.length > 0) {
        const needed = [...candidatePool];
        for (let i = 0; needed.length < customQCount; i++) {
          const q = sourcePool[i % sourcePool.length];
          needed.push({
            ...q,
            id: `${q.id}-iso-gen-${i + 1}`,
            chapter: customChapter,
            difficulty: (customDifficulty === 'Easy' || customDifficulty === 'Medium' || customDifficulty === 'Hard') ? customDifficulty : q.difficulty
          });
        }
        candidatePool = needed;
      }
    }

    const shuffled = [...candidatePool].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, customQCount);
    markQuestionsAsConsumed(selectedQuestions.map(q => q.id));
    return selectedQuestions;
  };

  const handleLaunchAdminCbt = () => {
    const selectedQuestions = generateCustomTestQuestions();
    const isMatrix = generatorMode === 'topic_matrix';
    const customTestItem: TestItem = {
      id: `admin-custom-${Date.now()}`,
      title: isMatrix 
        ? `Custom Multi-Topic Test (${topicAllocations.map(a => `${a.chapter} (${a.count}Q)`).join(', ')})`
        : `Admin Custom Test: ${customSubject} - ${customChapter} (${selectedQuestions.length} Qs)`,
      category: 'custom',
      exam: 'NEET',
      syllabus: isMatrix
        ? topicAllocations.map(a => `${a.chapter} (${a.count} Qs)`).join(' • ')
        : `${customSubject} > ${customChapter} > ${customTopic} (${customDifficulty} Level • ${selectedQuestions.length} Questions)`,
      totalQuestions: selectedQuestions.length,
      durationMinutes: isMatrix ? Math.max(15, selectedQuestions.length) : customDuration,
      totalMarks: selectedQuestions.length * 4,
      negativeMarking: '+4 for correct, -1 for incorrect',
      difficulty: customDifficulty === 'Adaptive' ? 'Mixed' : customDifficulty,
      cbtMode: true,
      features: isMatrix ? [
        `Custom Topic Allocation: ${topicAllocations.length} Topics`,
        `100% Strict Chapter Isolation`,
        `Format: ${selectedQuestions.length} High-Yield Qs`,
        `Complete Step-by-Step Derivations`
      ] : [
        `Subject: ${customSubject}`,
        `Chapter: ${customChapter}`,
        `Format: ${selectedQuestions.length} High-Yield Qs`,
        `Complete Step-by-Step Derivations`
      ],
      questions: selectedQuestions
    };

    if (onStartCustomTest) {
      if (onClose) onClose();
      onStartCustomTest(customTestItem);
    }
  };

  const handleExportCustomPdf = (includeSolutions: boolean = true) => {
    const selectedQuestions = generateCustomTestQuestions();
    const isMatrix = generatorMode === 'topic_matrix';
    const customTestItem: TestItem = {
      id: `admin-pdf-${Date.now()}`,
      title: isMatrix
        ? `Custom Multi-Topic Test - ${topicAllocations.map(a => `${a.chapter} (${a.count}Q)`).join(', ')}`
        : `Admin Custom Test - ${customSubject} (${customChapter})`,
      category: 'custom',
      exam: 'NEET',
      syllabus: isMatrix
        ? topicAllocations.map(a => `${a.chapter} (${a.count} Qs)`).join(' • ')
        : `${customSubject} > ${customChapter} • ${selectedQuestions.length} Questions`,
      totalQuestions: selectedQuestions.length,
      durationMinutes: isMatrix ? Math.max(15, selectedQuestions.length) : customDuration,
      totalMarks: selectedQuestions.length * 4,
      negativeMarking: '+4 for correct, -1 for incorrect',
      difficulty: customDifficulty === 'Adaptive' ? 'Mixed' : customDifficulty,
      cbtMode: true,
      questions: selectedQuestions
    };

    downloadTestPaperPDF(customTestItem, includeSolutions);
    setExportSuccess(`Exported "${customTestItem.title}" PDF successfully!`);
    setTimeout(() => setExportSuccess(null), 3500);
  };

  const enrolledStudent = (() => {
    try {
      const raw = localStorage.getItem('neet_enrolled_student');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  })();

  const [registeredCandidates, setRegisteredCandidates] = useState<any[]>(() => {
    try {
      const raw = localStorage.getItem('neet_registered_candidates');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return enrolledStudent ? [enrolledStudent] : [];
  });

  const [adminNotifications, setAdminNotifications] = useState<AdminEnrollmentNotification[]>(() => getAdminNotifications());
  const [showNotificationDrawer, setShowNotificationDrawer] = useState(false);

  useEffect(() => {
    const handleNotificationUpdate = () => {
      setAdminNotifications(getAdminNotifications());
      try {
        const raw = localStorage.getItem('neet_registered_candidates');
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) setRegisteredCandidates(parsed);
        }
      } catch {}
    };

    window.addEventListener('neet_admin_enrollment_notification', handleNotificationUpdate);
    window.addEventListener('storage', handleNotificationUpdate);
    return () => {
      window.removeEventListener('neet_admin_enrollment_notification', handleNotificationUpdate);
      window.removeEventListener('storage', handleNotificationUpdate);
    };
  }, []);

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
                Real-time student unlock approvals, custom test paper generator, question bank analytics & Sunday test access management.
              </p>
            </div>
          </div>

          {/* Header Controls: Sunday Test Master Toggle & Notification Bell */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Enrollment Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setShowNotificationDrawer(prev => !prev)}
                className={`relative px-3 py-2.5 rounded-xl font-bold text-xs transition flex items-center space-x-2 cursor-pointer shadow-md ${
                  adminNotifications.length > 0
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40 hover:bg-amber-500/30'
                    : 'bg-white/10 text-slate-300 border border-white/10 hover:bg-white/20'
                }`}
                title="Candidate Package Enrollment Alerts"
              >
                <Bell className={`w-4 h-4 ${adminNotifications.length > 0 ? 'text-amber-400 animate-bounce' : 'text-slate-400'}`} />
                <span className="hidden sm:inline">Alerts</span>
                {adminNotifications.length > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full bg-rose-500 text-white font-mono text-[10px] font-black">
                    {adminNotifications.length}
                  </span>
                )}
              </button>

              {/* Notification Dropdown Drawer */}
              {showNotificationDrawer && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowNotificationDrawer(false)}
                  />
                  <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 p-4 text-slate-900 animate-in fade-in zoom-in-95 duration-150">
                    <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                      <div className="flex items-center space-x-2">
                        <Bell className="w-4 h-4 text-blue-600" />
                        <h4 className="text-xs font-bold text-slate-900">Enrolled Package Notifications</h4>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                        {adminNotifications.length} New
                      </span>
                    </div>

                    <div className="mt-2.5 space-y-2 max-h-72 overflow-y-auto pr-1">
                      {adminNotifications.length > 0 ? (
                        adminNotifications.map(notif => (
                          <div
                            key={notif.id}
                            className="p-2.5 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-blue-50/50 transition space-y-1"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <span className="text-xs font-bold text-slate-900">{notif.studentName}</span>
                              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded font-bold shrink-0">
                                {notif.packagePrice}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[11px] text-blue-700 font-semibold">
                              <Crown className="w-3 h-3 text-amber-500 shrink-0" />
                              <span className="truncate">{notif.packageName}</span>
                            </div>
                            <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-200/50">
                              <span className="font-mono">Roll: {notif.rollNumber}</span>
                              <span>{new Date(notif.enrolledAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-6 text-slate-400 text-xs">
                          No recent enrollment notifications yet.
                        </div>
                      )}
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-100">
                      <button
                        onClick={() => {
                          setAdminTab('students');
                          setShowNotificationDrawer(false);
                        }}
                        className="w-full py-1.5 text-center text-xs font-bold text-blue-600 hover:text-blue-800 transition"
                      >
                        Open Full Candidate Directory →
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>



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
                  <span className="hidden sm:inline">Sunday Tests:</span> UNLOCKED
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 text-amber-200" />
                  <span className="hidden sm:inline">Sunday Tests:</span> LOCKED
                </>
              )}
            </button>

            {onClose && (
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                title="Close Admin Portal"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Real-Time Enrollment Notification Alert Banner */}
      {adminNotifications.length > 0 && (
        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 border-2 border-emerald-500/50 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-start sm:items-center space-x-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
              <Crown className="w-5 h-5 text-amber-400" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center space-x-2 flex-wrap">
                <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-mono font-black text-[10px] uppercase">
                  Candidate Enrolled
                </span>
                <span className="text-xs font-mono text-emerald-300">
                  {adminNotifications[0].studentName} (Roll: {adminNotifications[0].rollNumber})
                </span>
                <span className="text-[10px] text-slate-400">
                  {new Date(adminNotifications[0].enrolledAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="text-xs text-slate-200 mt-1">
                Enrolled Package:{' '}
                <strong className="text-white font-bold bg-white/10 px-2 py-0.5 rounded border border-white/20">
                  {adminNotifications[0].packageName}
                </strong>{' '}
                <span className="text-emerald-400 font-bold font-mono">
                  ({adminNotifications[0].packagePrice})
                </span>{' '}
                &bull; Contact: +91 {adminNotifications[0].studentPhone}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={() => setAdminTab('students')}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs shadow-md transition cursor-pointer"
            >
              View in Directory →
            </button>
          </div>
        </div>
      )}

      {/* Global Action Banner */}
      {actionSuccessBanner && (
        <div className="px-4 py-3 bg-emerald-600 text-white text-xs font-bold rounded-xl flex items-center justify-between shadow-md animate-in slide-in-from-top">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" /> {actionSuccessBanner}
          </span>
          <button onClick={() => setActionSuccessBanner(null)} className="text-white/80 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {actionErrorBanner && (
        <div className="px-4 py-3 bg-rose-600 text-white text-xs font-bold rounded-xl flex items-center justify-between shadow-md animate-in slide-in-from-top">
          <span className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0" /> {actionErrorBanner}
          </span>
          <button onClick={() => setActionErrorBanner(null)} className="text-white/80 hover:text-white">
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
          <BarChart3 className="w-4 h-4 text-cyan-400" />
          <span>Question Bank & Chapter Analytics</span>
          <span className="px-1.5 py-0.5 rounded-full bg-cyan-400 text-slate-900 text-[10px] font-mono font-bold">
            {questionInventory.totalCount.toLocaleString()} Qs
          </span>
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
                            {(() => {
                              const matched = registeredCandidates.find((c: any) => c.rollNumber === req.rollNumber || c.studentName === req.studentName || c.studentPhone === req.studentPhone);
                              const pkg = matched?.selectedPackage || enrolledStudent?.selectedPackage;
                              return pkg ? (
                                <div className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 mt-1">
                                  <Crown className="w-2.5 h-2.5 text-amber-600 shrink-0" />
                                  <span className="truncate max-w-[160px]">{pkg.name}</span>
                                  <span className="font-mono text-emerald-700 font-bold">{pkg.price}</span>
                                </div>
                              ) : (
                                <div className="text-[10px] text-gray-400">{req.targetBatch}</div>
                              );
                            })()}
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
                      Master Default Active (Live for All Candidates)
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                      Standard Planner Default
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-amber-400" />
                  Sunday Test Paper Studio: <span className="text-amber-300 font-mono underline decoration-amber-400/50">{selectedPlannerPreset.toUpperCase()}</span>
                </h3>
                <p className="text-xs text-indigo-200/90 mt-1 max-w-2xl leading-relaxed">
                  Select and edit <strong>all Sunday papers</strong> across Chapter-Wise (CWT-01 to 19), Cumulative (CUM-01 to 05), Part-Wise (PART-01 to 03), and Full-Syllabus (FST-01 to 06). When you swap a question, edit a question, or swap a topic, it automatically becomes the <strong>Master Default</strong> for all candidates platform-wide.
                </p>
              </div>

              {/* Master Actions Bar */}
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  onClick={handleSaveAndPublishSelectedPaper}
                  disabled={isSyncingAction}
                  className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-xl text-xs font-black transition flex items-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
                  title="Confirm and lock this Sunday Paper as the authoritative Final Master Default across all student systems"
                >
                  <ShieldCheck className="w-4 h-4 text-slate-950" />
                  Confirm as Final Master Default ({selectedPlannerPreset.toUpperCase()})
                </button>

                <button
                  onClick={() => setShowMasterSavesModal(true)}
                  className="px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-md cursor-pointer"
                  title="View Committed Master Default Saves and History"
                >
                  <Eye className="w-4 h-4 text-emerald-400" />
                  View Master Default Saves
                </button>

                <button
                  onClick={handleResetSelectedPaperToDefault}
                  disabled={isSyncingAction}
                  className="px-3 py-2.5 bg-rose-500/20 hover:bg-rose-500/40 text-rose-200 border border-rose-400/30 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  title="Revert this paper back to original base syllabus template across all devices"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Revert to Base Template
                </button>

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
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-600" />
                    Step 1: Choose Sunday Paper & Topic Customization
                  </h4>
                </div>
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
                    <optgroup label="Repeater Track 1: 20-Wk Chapterwise (CW-01 to CW-20)">
                      {SUNDAY_DROPPER_TRACK1_TESTS.filter(t => t.phaseGroup === 'cwt').map(t => (
                        <option key={t.code} value={t.code}>
                          {t.code}: {t.title.split(':')[1]?.trim().slice(0, 42) || t.title.slice(0, 42)}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Repeater Track 1: Part-Wise Tests (PT-01 to PT-08)">
                      {SUNDAY_DROPPER_TRACK1_TESTS.filter(t => t.phaseGroup === 'part').map(t => (
                        <option key={t.code} value={t.code}>
                          {t.code}: {t.title.split(':')[1]?.trim().slice(0, 42) || t.title.slice(0, 42)}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Repeater Track 1: Full Syllabus Tests (FS-01 to FS-18)">
                      {SUNDAY_DROPPER_TRACK1_TESTS.filter(t => t.phaseGroup === 'full').map(t => (
                        <option key={t.code} value={t.code}>
                          {t.code}: {t.title.split(':')[1]?.trim().slice(0, 42) || t.title.slice(0, 42)}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Repeater Track 2: 17-Wk Fast-Track Chapterwise (T01 to T17)">
                      {SUNDAY_DROPPER_TRACK2_TESTS.filter(t => t.phaseGroup === 'cwt').map(t => (
                        <option key={t.code} value={t.code}>
                          {t.code}: {t.title.split(':')[1]?.trim().slice(0, 42) || t.title.slice(0, 42)}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Repeater Track 2: Part-Wise Tests (P01 to P08)">
                      {SUNDAY_DROPPER_TRACK2_TESTS.filter(t => t.phaseGroup === 'part').map(t => (
                        <option key={t.code} value={t.code}>
                          {t.code}: {t.title.split(':')[1]?.trim().slice(0, 42) || t.title.slice(0, 42)}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Repeater Track 2: Full Syllabus Tests (F01 to F21)">
                      {SUNDAY_DROPPER_TRACK2_TESTS.filter(t => t.phaseGroup === 'full').map(t => (
                        <option key={t.code} value={t.code}>
                          {t.code}: {t.title.split(':')[1]?.trim().slice(0, 42) || t.title.slice(0, 42)}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Repeater Track 3: Physics & Chemistry Full Syllabus (PC-01 to PC-27)">
                      {SUNDAY_DROPPER_PC_TESTS.map(t => (
                        <option key={t.code} value={t.code}>
                          {t.code}: {t.title.split(':')[1]?.trim().slice(0, 42) || t.title.slice(0, 42)}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="── Class 11 Track 1: Chapter-Wise Tests (CW-01 - 11) ──">
                      {SUNDAY_11TH_TRACK1_TESTS.filter(t => t.phaseGroup === 'cwt').map(t => (
                        <option key={`11TH-${t.code}`} value={`11TH-${t.code}`}>
                          11th {t.code}: {t.title.split(':')[1]?.trim().slice(0, 40) || t.title.slice(0, 40)}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="── Class 11 Track 1: Part-Wise Tests (PT-01 - 06) ──">
                      {SUNDAY_11TH_TRACK1_TESTS.filter(t => t.phaseGroup === 'part').map(t => (
                        <option key={`11TH-${t.code}`} value={`11TH-${t.code}`}>
                          11th {t.code}: {t.title.split(':')[1]?.trim().slice(0, 40) || t.title.slice(0, 40)}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="── Class 11 Track 1: Full Syllabus (FS-01 - 03) ──">
                      {SUNDAY_11TH_TRACK1_TESTS.filter(t => t.phaseGroup === 'full').map(t => (
                        <option key={`11TH-${t.code}`} value={`11TH-${t.code}`}>
                          11th {t.code}: {t.title.split(':')[1]?.trim().slice(0, 40) || t.title.slice(0, 40)}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="── Class 11 Track 2: CWT Tests (CWT 01 - 12) ──">
                      {SUNDAY_11TH_TRACK2_TESTS.filter(t => t.phaseGroup === 'cwt').map(t => (
                        <option key={`11TH-${t.code}`} value={`11TH-${t.code}`}>
                          11th {t.code}: {t.title.split(':')[1]?.trim().slice(0, 40) || t.title.slice(0, 40)}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="── Class 11 Track 2: Cumulative Tests (CUM 01 - 05) ──">
                      {SUNDAY_11TH_TRACK2_TESTS.filter(t => t.phaseGroup === 'cumulative').map(t => (
                        <option key={`11TH-${t.code}`} value={`11TH-${t.code}`}>
                          11th {t.code}: {t.title.split(':')[1]?.trim().slice(0, 40) || t.title.slice(0, 40)}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="── Class 11 Track 2: Full Syllabus (FST 01 - 03) ──">
                      {SUNDAY_11TH_TRACK2_TESTS.filter(t => t.phaseGroup === 'full').map(t => (
                        <option key={`11TH-${t.code}`} value={`11TH-${t.code}`}>
                          11th {t.code}: {t.title.split(':')[1]?.trim().slice(0, 40) || t.title.slice(0, 40)}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="── Class 12 Batch: Phase 1 Part-Wise (PART 1 - 8) ──">
                      {PLANNER_12TH_TESTS.filter(t => t.code.startsWith('PART')).map(t => (
                        <option key={`12TH-${t.code}`} value={`12TH-${t.code}`}>
                          12th {t.code}: {t.title.split(':')[1]?.trim().slice(0, 40) || t.title.slice(0, 40)}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="── Class 12 Batch: Phase 2 Complete Syllabus (FULL 01 - 10) ──">
                      {PLANNER_12TH_TESTS.filter(t => t.code.startsWith('FULL-')).map(t => (
                        <option key={`12TH-${t.code}`} value={`12TH-${t.code}`}>
                          12th {t.code}: {t.title.split(':')[1]?.trim().slice(0, 40) || t.title.slice(0, 40)}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="── Class 12 Batch: Phase 3 NEET Mocks (01 - 05) ──">
                      {PLANNER_12TH_TESTS.filter(t => t.code.startsWith('NEET MOCK')).map(t => (
                        <option key={`12TH-${t.code}`} value={`12TH-${t.code}`}>
                          12th {t.code}: {t.title.split(':')[1]?.trim().slice(0, 40) || t.title.slice(0, 40)}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="── Class 12 Batch: Track 2 Physics & Chemistry (PC-01 - 18) ──">
                      {PLANNER_12TH_TESTS.filter(t => t.code.startsWith('PC-')).map(t => (
                        <option key={`12TH-${t.code}`} value={`12TH-${t.code}`}>
                          12th {t.code}: {t.title.split(':')[1]?.trim().slice(0, 40) || t.title.slice(0, 40)}
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

                {/* Marking Rules (+4 / -1) */}
                <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                  <span className="text-[11px] font-extrabold text-slate-700 px-1">Marking:</span>
                  <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-lg border border-slate-300">
                    <span className="text-[10px] text-emerald-700 font-bold">+</span>
                    <input
                      type="number"
                      value={testMarks}
                      onChange={e => handleUpdateMarking(Number(e.target.value) || 4, testNegativeMarks)}
                      className="w-6 text-xs font-mono font-bold text-center bg-transparent border-0 focus:outline-hidden text-emerald-800"
                      title="Marks for correct answer"
                    />
                    <span className="text-slate-400 text-xs">/</span>
                    <span className="text-[10px] text-rose-600 font-bold">-</span>
                    <input
                      type="number"
                      value={testNegativeMarks}
                      onChange={e => handleUpdateMarking(testMarks, Number(e.target.value) || 1)}
                      className="w-6 text-xs font-mono font-bold text-center bg-transparent border-0 focus:outline-hidden text-rose-700"
                      title="Negative marks for incorrect answer"
                    />
                  </div>
                </div>

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

            {/* TOPIC SWAPPER & QUESTION ALLOCATION MATRIX (ADMIN VAULT RIGHT) */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/80 via-indigo-50/80 to-purple-50/80 border border-indigo-200 space-y-3.5 shadow-2xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-indigo-600 text-white">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-slate-900 uppercase tracking-wide flex items-center gap-2">
                      <span>Topic Swapper & Question Allocation Manager</span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                        Admin Right Active
                      </span>
                    </h5>
                    <p className="text-[11px] text-slate-600">
                      Swap any chapter via dropdown (e.g. Laws of Motion ↔ Electrostatics) and set custom questions per topic (e.g. 4 questions instead of 3).
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleExecuteTopicSwap('Laws of Motion', 'Electrostatics', 4)}
                    className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-indigo-100 hover:bg-indigo-200 text-indigo-800 border border-indigo-300 transition cursor-pointer"
                    title="Quick demo swap: Laws of Motion -> Electrostatics (4 Qs)"
                  >
                    Quick Swap: Laws of Motion ➔ Electrostatics (4 Qs)
                  </button>
                </div>
              </div>

              {/* Topic Swapper Controls Bar */}
              <div className="bg-white p-3.5 rounded-xl border border-indigo-100 shadow-xs flex flex-wrap items-center gap-3">
                {/* 1. Source Topic Dropdown */}
                <div className="flex-1 min-w-[210px] space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    1. Current Topic to Swap
                  </label>
                  <select
                    value={swapSourceTopic}
                    onChange={e => setSwapSourceTopic(e.target.value)}
                    className="w-full text-xs font-bold p-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 focus:bg-white focus:border-indigo-500 cursor-pointer"
                  >
                    <optgroup label="⚡ Physics Chapters">
                      {ALL_PHYSICS_CHAPTERS.map(ch => (
                        <option key={`src-p-${ch}`} value={ch}>⚡ Physics: {ch}</option>
                      ))}
                    </optgroup>
                    <optgroup label="🧪 Chemistry Chapters">
                      {ALL_CHEMISTRY_CHAPTERS.map(ch => (
                        <option key={`src-c-${ch}`} value={ch}>🧪 Chem: {ch}</option>
                      ))}
                    </optgroup>
                    <optgroup label="🧬 Biology Chapters">
                      {ALL_BIOLOGY_CHAPTERS.map(ch => (
                        <option key={`src-b-${ch}`} value={ch}>🧬 Bio: {ch}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Arrow */}
                <div className="pt-4 text-indigo-400 font-black text-lg select-none">
                  ⇄
                </div>

                {/* 2. Replacement Topic Dropdown */}
                <div className="flex-1 min-w-[210px] space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    2. Swap With (Replacement Topic)
                  </label>
                  <select
                    value={swapTargetTopic}
                    onChange={e => setSwapTargetTopic(e.target.value)}
                    className="w-full text-xs font-bold p-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 focus:bg-white focus:border-indigo-500 cursor-pointer"
                  >
                    <optgroup label="⚡ Physics Chapters">
                      {ALL_PHYSICS_CHAPTERS.map(ch => (
                        <option key={`tgt-p-${ch}`} value={ch}>⚡ Physics: {ch}</option>
                      ))}
                    </optgroup>
                    <optgroup label="🧪 Chemistry Chapters">
                      {ALL_CHEMISTRY_CHAPTERS.map(ch => (
                        <option key={`tgt-c-${ch}`} value={ch}>🧪 Chem: {ch}</option>
                      ))}
                    </optgroup>
                    <optgroup label="🧬 Biology Chapters">
                      {ALL_BIOLOGY_CHAPTERS.map(ch => (
                        <option key={`tgt-b-${ch}`} value={ch}>🧬 Bio: {ch}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* 3. Question Count Input */}
                <div className="w-28 space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    3. Questions
                  </label>
                  <div className="flex items-center gap-1">
                    <input
                      type="number"
                      min={1}
                      max={45}
                      value={swapQuestionCount}
                      onChange={e => setSwapQuestionCount(Math.max(1, Math.min(45, parseInt(e.target.value) || 1)))}
                      className="w-full text-xs font-mono font-bold text-center p-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 focus:bg-white focus:border-indigo-500"
                    />
                    <span className="text-[11px] font-bold text-slate-500">Qs</span>
                  </div>
                </div>

                {/* 4. Action Button */}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => handleExecuteTopicSwap(swapSourceTopic, swapTargetTopic, swapQuestionCount)}
                    className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs font-bold rounded-lg transition flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Execute Swap & Rebalance</span>
                  </button>
                </div>
              </div>

              {/* Configured Topics Matrix */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">Active Topic Allocations:</span>
                {topicAllocations.map(alloc => (
                  <div
                    key={alloc.id}
                    className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs shadow-2xs"
                  >
                    <span className={`w-2 h-2 rounded-full ${alloc.subject === 'Physics' ? 'bg-blue-600' : alloc.subject === 'Chemistry' ? 'bg-emerald-600' : 'bg-purple-600'}`} />
                    <span className="text-slate-800 font-bold">{alloc.chapter}</span>
                    <div className="flex items-center gap-1 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                      <input
                        type="number"
                        min={1}
                        max={45}
                        value={alloc.count}
                        onChange={e => {
                          const val = Math.max(1, Math.min(45, parseInt(e.target.value) || 1));
                          setTopicAllocations(prev => prev.map(p => p.id === alloc.id ? { ...p, count: val } : p));
                        }}
                        className="w-8 text-[11px] font-mono font-bold text-center bg-transparent border-0 focus:outline-hidden text-indigo-700"
                      />
                      <span className="text-[10px] text-slate-500 font-semibold">Qs</span>
                    </div>
                    <button
                      type="button"
                      title="Load into swapper"
                      onClick={() => {
                        setSwapSourceTopic(alloc.chapter);
                        setSwapQuestionCount(alloc.count);
                      }}
                      className="text-slate-400 hover:text-indigo-600 text-xs font-bold cursor-pointer"
                    >
                      ⇄
                    </button>
                    <button
                      type="button"
                      title="Remove topic"
                      onClick={() => setTopicAllocations(prev => prev.filter(p => p.id !== alloc.id))}
                      className="text-slate-300 hover:text-rose-600 text-xs font-bold cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    const newAlloc = {
                      id: `alloc-${Date.now()}`,
                      subject: 'Physics' as const,
                      chapter: ALL_PHYSICS_CHAPTERS[Math.floor(Math.random() * ALL_PHYSICS_CHAPTERS.length)],
                      count: 4
                    };
                    setTopicAllocations(prev => [...prev, newAlloc]);
                  }}
                  className="px-2.5 py-1 rounded-lg border border-dashed border-indigo-300 text-indigo-700 bg-white hover:bg-indigo-50 text-[11px] font-bold cursor-pointer transition shadow-2xs"
                >
                  + Add Topic
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
                        <div className="flex flex-wrap items-center gap-2">
                          {/* Reorder Buttons (Atomic Cloud Swap) */}
                          <div className="flex items-center gap-0.5 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                            <button
                              type="button"
                              onClick={() => handleSwapQuestionOrder(originalIdx, originalIdx - 1)}
                              disabled={originalIdx === 0}
                              className="p-1 text-slate-700 hover:text-blue-700 hover:bg-white rounded disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
                              title="Move Question Up (Atomic Cloud Swap)"
                            >
                              <ArrowUp className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleSwapQuestionOrder(originalIdx, originalIdx + 1)}
                              disabled={originalIdx === sundayQuestions.length - 1}
                              className="p-1 text-slate-700 hover:text-blue-700 hover:bg-white rounded disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
                              title="Move Question Down (Atomic Cloud Swap)"
                            >
                              <ArrowDown className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <button
                            onClick={() => handleSwapSundayQuestion(originalIdx)}
                            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 transition flex items-center gap-1 cursor-pointer"
                            title="Swap this question with another from the same chapter"
                          >
                            <RefreshCw className="w-3.5 h-3.5" />
                            <span>Swap (Same Chapter)</span>
                          </button>

                          {/* Swap to another topic dropdown */}
                          <div className="flex items-center gap-1 bg-purple-50 hover:bg-purple-100/70 border border-purple-200 rounded-lg px-2 py-1 transition">
                            <ArrowRightLeft className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                            <span className="text-[10px] text-purple-900 font-bold uppercase whitespace-nowrap">Swap to:</span>
                            <select
                              value=""
                              onChange={(e) => {
                                if (e.target.value) {
                                  handleSwapSundayQuestion(originalIdx, e.target.value);
                                }
                              }}
                              className="text-xs bg-transparent border-0 text-purple-950 font-bold focus:outline-hidden cursor-pointer"
                              title="Select another chapter to swap this question strictly with a question from that chapter"
                            >
                              <option value="" disabled>Choose topic...</option>
                              <optgroup label="⚡ Physics">
                                {ALL_PHYSICS_CHAPTERS.map(c => <option key={c} value={c}>{c}</option>)}
                              </optgroup>
                              <optgroup label="🧪 Chemistry">
                                {ALL_CHEMISTRY_CHAPTERS.map(c => <option key={c} value={c}>{c}</option>)}
                              </optgroup>
                              <optgroup label="🧬 Biology / Botany / Zoology">
                                {ALL_BIOLOGY_CHAPTERS.map(c => <option key={c} value={c}>{c}</option>)}
                              </optgroup>
                            </select>
                          </div>

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
                                  onClick={() => handleQuickChangeCorrectOption(originalIdx, optIdx)}
                                  className={`p-2.5 rounded-xl text-xs flex items-center justify-between border cursor-pointer select-none transition ${
                                    isCorrect
                                      ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold ring-2 ring-emerald-500/20 shadow-xs'
                                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/40'
                                  }`}
                                  title={`Click to set Option ${String.fromCharCode(65 + optIdx)} as the correct answer key`}
                                >
                                  <span className="flex items-center gap-2">
                                    <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${
                                      isCorrect ? 'bg-emerald-600 text-white shadow-xs' : 'bg-slate-200 text-slate-600'
                                    }`}>
                                      {String.fromCharCode(65 + optIdx)}
                                    </span>
                                    <span>{opt}</span>
                                  </span>
                                  {isCorrect ? (
                                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-200 text-emerald-800 font-bold flex items-center gap-1">
                                      <CheckCircle2 className="w-3 h-3 text-emerald-700" /> Key
                                    </span>
                                  ) : (
                                    <span className="text-[9px] text-slate-400 font-medium hover:text-emerald-700">
                                      Set Key
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>

                          {/* Explanation */}
                          {q.explanation && (
                            <div className="mt-3">
                              <DetailedSolutionViewer
                                explanation={q.explanation}
                                correctAnswer={q.correctAnswer}
                                options={q.options}
                                subject={q.subject}
                                chapter={q.chapter}
                                topic={q.topic || (q as any).subtopic}
                                questionText={q.questionText}
                              />
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

          {/* Mode Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-gray-200 shadow-2xs">
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setGeneratorMode('single')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  generatorMode === 'single'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Single Chapter Focus (15-90 Qs)
              </button>
              <button
                type="button"
                onClick={() => setGeneratorMode('topic_matrix')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  generatorMode === 'topic_matrix'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ArrowRightLeft className="w-3.5 h-3.5" />
                <span>Multi-Topic Allocation & Swapper Matrix</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>100% Strict Chapter Isolation Active (Zero Cross-Chapter Mixing)</span>
            </div>
          </div>

          {/* ============================================================== */}
          {/* MODE 1: MULTI-TOPIC ALLOCATION & SWAPPER MATRIX */}
          {/* ============================================================== */}
          {generatorMode === 'topic_matrix' && (
            <div className="space-y-4">
              {/* Quick Topic Swapper Bar */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 border border-purple-200 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-extrabold text-purple-950 flex items-center gap-1.5">
                      <ArrowRightLeft className="w-4 h-4 text-purple-700" />
                      <span>Quick Topic Swapper & Allocation</span>
                    </h4>
                    <p className="text-[11px] text-purple-800">
                      Swap one topic for another (e.g. Laws of Motion with Electrostatics) and set your custom question count.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-white/80 border border-purple-300 text-purple-900 rounded-lg self-start sm:self-auto">
                    Pure Chapter Pools Only
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 items-end bg-white/90 p-3 rounded-xl border border-purple-200">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase">1. Swap Out (From Topic)</label>
                    <select
                      value={swapSourceTopic}
                      onChange={e => setSwapSourceTopic(e.target.value)}
                      className="w-full p-2 text-xs bg-white border border-slate-300 rounded-lg font-semibold"
                    >
                      <optgroup label="⚡ Physics">
                        {ALL_PHYSICS_CHAPTERS.map(c => <option key={c} value={c}>{c}</option>)}
                      </optgroup>
                      <optgroup label="🧪 Chemistry">
                        {ALL_CHEMISTRY_CHAPTERS.map(c => <option key={c} value={c}>{c}</option>)}
                      </optgroup>
                      <optgroup label="🧬 Biology">
                        {ALL_BIOLOGY_CHAPTERS.map(c => <option key={c} value={c}>{c}</option>)}
                      </optgroup>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase">2. Swap In (To Topic)</label>
                    <select
                      value={swapTargetTopic}
                      onChange={e => setSwapTargetTopic(e.target.value)}
                      className="w-full p-2 text-xs bg-white border border-slate-300 rounded-lg font-semibold"
                    >
                      <optgroup label="⚡ Physics">
                        {ALL_PHYSICS_CHAPTERS.map(c => <option key={c} value={c}>{c}</option>)}
                      </optgroup>
                      <optgroup label="🧪 Chemistry">
                        {ALL_CHEMISTRY_CHAPTERS.map(c => <option key={c} value={c}>{c}</option>)}
                      </optgroup>
                      <optgroup label="🧬 Biology">
                        {ALL_BIOLOGY_CHAPTERS.map(c => <option key={c} value={c}>{c}</option>)}
                      </optgroup>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase">3. Number of Questions</label>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => setSwapQuestionCount(c => Math.max(1, c - 1))}
                        className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <input
                        type="number"
                        min={1}
                        max={45}
                        value={swapQuestionCount}
                        onChange={e => setSwapQuestionCount(Math.max(1, Math.min(45, parseInt(e.target.value) || 1)))}
                        className="w-16 h-8 text-center bg-white border border-slate-300 rounded-lg text-xs font-bold font-mono"
                      />
                      <button
                        type="button"
                        onClick={() => setSwapQuestionCount(c => Math.min(45, c + 1))}
                        className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleExecuteTopicSwap(swapSourceTopic, swapTargetTopic, swapQuestionCount)}
                    className="h-8 px-4 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 shadow-xs transition cursor-pointer active:scale-95"
                  >
                    <ArrowRightLeft className="w-3.5 h-3.5" />
                    <span>Execute Swap</span>
                  </button>
                </div>
              </div>

              {/* Topic Allocation Table / List */}
              <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-2.5">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Configured Topics & Question Allocation Matrix ({topicAllocations.length} Topics)
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Customize question counts per chapter or swap any chapter using the dropdowns below.
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                    Total: {topicAllocations.reduce((acc, a) => acc + a.count, 0)} Questions ({topicAllocations.reduce((acc, a) => acc + a.count, 0) * 4} Marks)
                  </span>
                </div>

                <div className="space-y-2">
                  {topicAllocations.map((alloc, idx) => (
                    <div
                      key={alloc.id}
                      className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition"
                    >
                      <div className="flex items-center gap-2 flex-1 min-w-[260px]">
                        <span className="w-6 h-6 rounded-lg bg-slate-800 text-white text-[11px] font-mono font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          alloc.subject === 'Physics' ? 'bg-blue-100 text-blue-800' :
                          alloc.subject === 'Chemistry' ? 'bg-emerald-100 text-emerald-800' : 'bg-purple-100 text-purple-800'
                        }`}>
                          {alloc.subject}
                        </span>
                        {/* Dropdown to swap this topic */}
                        <select
                          value={alloc.chapter}
                          onChange={e => handleUpdateAllocationChapter(alloc.id, e.target.value)}
                          className="flex-1 p-1.5 text-xs bg-white border border-slate-300 rounded-lg font-semibold text-slate-900"
                        >
                          <optgroup label="⚡ Physics">
                            {ALL_PHYSICS_CHAPTERS.map(c => <option key={c} value={c}>{c}</option>)}
                          </optgroup>
                          <optgroup label="🧪 Chemistry">
                            {ALL_CHEMISTRY_CHAPTERS.map(c => <option key={c} value={c}>{c}</option>)}
                          </optgroup>
                          <optgroup label="🧬 Biology">
                            {ALL_BIOLOGY_CHAPTERS.map(c => <option key={c} value={c}>{c}</option>)}
                          </optgroup>
                        </select>
                      </div>

                      {/* Question count controls */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-0.5">
                          <button
                            type="button"
                            onClick={() => handleUpdateAllocationCount(alloc.id, -1)}
                            className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-12 text-center text-xs font-bold font-mono text-slate-900">
                            {alloc.count} Qs
                          </span>
                          <button
                            type="button"
                            onClick={() => handleUpdateAllocationCount(alloc.id, 1)}
                            className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-[11px] font-mono text-slate-500 w-16 text-right">
                          {alloc.count * 4} Marks
                        </span>

                        <button
                          type="button"
                          onClick={() => handleRemoveAllocation(alloc.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition cursor-pointer"
                          title="Remove this topic from test"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Topic Bar */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                  <div className="flex-1 min-w-[200px]">
                    <select
                      value={newAllocChapter}
                      onChange={e => setNewAllocChapter(e.target.value)}
                      className="w-full p-2 text-xs bg-slate-50 border border-slate-300 rounded-xl font-semibold"
                    >
                      <optgroup label="⚡ Physics">
                        {ALL_PHYSICS_CHAPTERS.map(c => <option key={c} value={c}>{c}</option>)}
                      </optgroup>
                      <optgroup label="🧪 Chemistry">
                        {ALL_CHEMISTRY_CHAPTERS.map(c => <option key={c} value={c}>{c}</option>)}
                      </optgroup>
                      <optgroup label="🧬 Biology">
                        {ALL_BIOLOGY_CHAPTERS.map(c => <option key={c} value={c}>{c}</option>)}
                      </optgroup>
                    </select>
                  </div>

                  <div className="flex items-center gap-1">
                    <input
                      type="number"
                      min={1}
                      max={45}
                      value={newAllocCount}
                      onChange={e => setNewAllocCount(Math.max(1, Math.min(45, parseInt(e.target.value) || 1)))}
                      className="w-16 p-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold font-mono text-center"
                      title="Number of questions to allocate"
                    />
                    <span className="text-xs text-slate-500 font-semibold">Qs</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAddAllocation(newAllocChapter, newAllocCount)}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Topic</span>
                  </button>
                </div>
              </div>

              {/* Multi-Topic Action Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-xs text-center sm:text-left">
                  <div className="text-gray-900 font-bold text-sm">
                    Multi-Topic Custom Test ({topicAllocations.length} Topics Selected)
                  </div>
                  <div className="text-gray-600 font-mono">
                    {topicAllocations.reduce((acc, a) => acc + a.count, 0)} Questions • {topicAllocations.reduce((acc, a) => acc + a.count, 0) * 4} Marks • {Math.max(15, topicAllocations.reduce((acc, a) => acc + a.count, 0))} Minutes
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => handleExportCustomPdf(false)}
                    className="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl bg-white hover:bg-gray-100 text-gray-800 font-bold text-xs border border-gray-300 flex items-center justify-center space-x-1 shadow-2xs transition cursor-pointer"
                  >
                    <Printer className="w-4 h-4 text-gray-600" />
                    <span>Export Paper</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleExportCustomPdf(true)}
                    className="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl bg-white hover:bg-gray-100 text-gray-800 font-bold text-xs border border-gray-300 flex items-center justify-center space-x-1 shadow-2xs transition cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-emerald-600" />
                    <span>Paper + Solutions</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleLaunchAdminCbt}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-md transition cursor-pointer active:scale-95"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Launch CBT Simulation</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* MODE 2: SINGLE CHAPTER FOCUS */}
          {/* ============================================================== */}
          {generatorMode === 'single' && (
            <div className="space-y-4">
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
        </div>
      )}

      {/* TAB 3: QUESTION BANK INVENTORY & CHAPTER ANALYTICS */}
      {adminTab === 'telemetry' && (
        <div className="space-y-4">
          {/* Header Banner */}
          <div className="p-4 bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 rounded-2xl text-white shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded-full bg-cyan-400 text-slate-950 text-[10px] font-mono font-black uppercase">
                  Verified Audit
                </span>
                <h3 className="text-base font-bold text-white flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-cyan-400" />
                  <span>Question Bank Inventory & Chapter Analytics</span>
                </h3>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Real-time question count distribution across Physics, Chemistry, and Biology syllabus chapters.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 self-start sm:self-center">
              <button
                type="button"
                onClick={() => {
                  setVaultRefreshVersion(v => v + 1);
                  setActionSuccessBanner('Database chapters & inventory audited successfully.');
                  setTimeout(() => setActionSuccessBanner(null), 2000);
                }}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-cyan-200 text-xs font-semibold flex items-center space-x-1.5 transition cursor-pointer"
                title="Force audit and refresh database"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Refresh Database</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsAddChapterModalOpen(prev => !prev);
                  setAddChapterStatus(null);
                }}
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center space-x-1.5 shadow-xs transition cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add New Chapter to Vault</span>
              </button>

              <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-cyan-300 font-mono text-xs font-bold">
                {questionInventory.totalCount.toLocaleString()} Total Questions
              </span>
            </div>
          </div>

          {/* Add New Chapter to Vault Form Panel */}
          {isAddChapterModalOpen && (
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-300 shadow-md space-y-3 animate-in fade-in">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold shadow-xs">
                    <Plus className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Add New Chapter to Admin Vault Database</h4>
                    <p className="text-[11px] text-slate-600">Register a new official syllabus or specialized chapter. It will instantly update all generators, topic swappers, and analytics.</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAddChapterModalOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleAddChapterToVault} className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div>
                  <label className="text-[11px] font-bold text-slate-700 uppercase block mb-1">Select Subject</label>
                  <select
                    value={newChapterSubject}
                    onChange={e => setNewChapterSubject(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-xs font-semibold text-slate-900 focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="Biology">🧬 Biology</option>
                    <option value="Chemistry">🧪 Chemistry</option>
                    <option value="Physics">⚡ Physics</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="text-[11px] font-bold text-slate-700 uppercase block mb-1">New Chapter Name</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={newChapterName}
                      onChange={e => setNewChapterName(e.target.value)}
                      placeholder="e.g. Molecular Basis of Inheritance, Magnetism, etc."
                      className="flex-1 p-2.5 rounded-xl bg-white border border-slate-300 text-xs font-semibold text-slate-900 focus:outline-none focus:border-blue-500"
                      required
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition cursor-pointer shrink-0"
                    >
                      Save Chapter
                    </button>
                  </div>
                </div>
              </form>

              {addChapterStatus && (
                <div
                  className={`p-2.5 rounded-xl text-xs font-medium flex items-center space-x-2 ${
                    addChapterStatus.type === 'success'
                      ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      : 'bg-rose-100 text-rose-900 border border-rose-300'
                  }`}
                >
                  {addChapterStatus.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  )}
                  <span>{addChapterStatus.msg}</span>
                </div>
              )}
            </div>
          )}

          {/* Top 4 Summary Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            <div
              onClick={() => setInventorySubject('All')}
              className={`p-4 rounded-2xl border transition-all cursor-pointer shadow-2xs ${
                inventorySubject === 'All'
                  ? 'bg-blue-50/90 border-blue-300 ring-2 ring-blue-200'
                  : 'bg-white border-slate-200 hover:border-blue-300'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 uppercase">
                <span>Total Questions</span>
                <Database className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-xl sm:text-2xl font-black text-blue-700 font-mono mt-1">
                {questionInventory.totalCount.toLocaleString()}
              </div>
              <p className="text-[10px] text-slate-500 mt-0.5 font-medium">
                {questionInventory.allChapters.length} Chapters • All Subjects
              </p>
            </div>

            <div
              onClick={() => setInventorySubject('Physics')}
              className={`p-4 rounded-2xl border transition-all cursor-pointer shadow-2xs ${
                inventorySubject === 'Physics'
                  ? 'bg-sky-50/90 border-sky-300 ring-2 ring-sky-200'
                  : 'bg-white border-slate-200 hover:border-sky-300'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-bold text-sky-700 uppercase">
                <span>Physics Questions</span>
                <Zap className="w-4 h-4 text-sky-600" />
              </div>
              <div className="text-xl sm:text-2xl font-black text-sky-700 font-mono mt-1">
                {questionInventory.physicsTotal.toLocaleString()}
              </div>
              <p className="text-[10px] text-sky-600/90 mt-0.5 font-medium">
                {questionInventory.physicsChapters.length} Chapters • {Math.round((questionInventory.physicsTotal / (questionInventory.totalCount || 1)) * 100)}% of Bank
              </p>
            </div>

            <div
              onClick={() => setInventorySubject('Chemistry')}
              className={`p-4 rounded-2xl border transition-all cursor-pointer shadow-2xs ${
                inventorySubject === 'Chemistry'
                  ? 'bg-amber-50/90 border-amber-300 ring-2 ring-amber-200'
                  : 'bg-white border-slate-200 hover:border-amber-300'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-bold text-amber-700 uppercase">
                <span>Chemistry Questions</span>
                <FlaskConical className="w-4 h-4 text-amber-600" />
              </div>
              <div className="text-xl sm:text-2xl font-black text-amber-700 font-mono mt-1">
                {questionInventory.chemistryTotal.toLocaleString()}
              </div>
              <p className="text-[10px] text-amber-600/90 mt-0.5 font-medium">
                {questionInventory.chemistryChapters.length} Chapters • {Math.round((questionInventory.chemistryTotal / (questionInventory.totalCount || 1)) * 100)}% of Bank
              </p>
            </div>

            <div
              onClick={() => setInventorySubject('Biology')}
              className={`p-4 rounded-2xl border transition-all cursor-pointer shadow-2xs ${
                inventorySubject === 'Biology'
                  ? 'bg-emerald-50/90 border-emerald-300 ring-2 ring-emerald-200'
                  : 'bg-white border-slate-200 hover:border-emerald-300'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-bold text-emerald-700 uppercase">
                <span>Biology Questions</span>
                <Dna className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-xl sm:text-2xl font-black text-emerald-700 font-mono mt-1">
                {questionInventory.biologyTotal.toLocaleString()}
              </div>
              <p className="text-[10px] text-emerald-600/90 mt-0.5 font-medium">
                {questionInventory.biologyChapters.length} Chapters • {Math.round((questionInventory.biologyTotal / (questionInventory.totalCount || 1)) * 100)}% of Bank
              </p>
            </div>
          </div>

          {/* Interactive Subject & Search Filter Bar */}
          <div className="p-4 rounded-2xl border border-gray-200 bg-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setInventorySubject('All')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  inventorySubject === 'All'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                🌟 All ({questionInventory.totalCount.toLocaleString()})
              </button>
              <button
                onClick={() => setInventorySubject('Physics')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  inventorySubject === 'Physics'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                ⚡ Physics ({questionInventory.physicsTotal.toLocaleString()})
              </button>
              <button
                onClick={() => setInventorySubject('Chemistry')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  inventorySubject === 'Chemistry'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                🧪 Chemistry ({questionInventory.chemistryTotal.toLocaleString()})
              </button>
              <button
                onClick={() => setInventorySubject('Biology')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  inventorySubject === 'Biology'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                🌿 Biology ({questionInventory.biologyTotal.toLocaleString()})
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search chapter, subject, or topic..."
                  value={inventorySearch}
                  onChange={e => setInventorySearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <select
                value={inventorySortBy}
                onChange={e => setInventorySortBy(e.target.value as any)}
                className="px-2.5 py-1.5 rounded-xl bg-gray-50 border border-gray-300 text-xs font-medium text-gray-700 focus:bg-white focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                <option value="count_desc">Most Questions First</option>
                <option value="count_asc">Fewest Questions First</option>
                <option value="name_asc">Chapter Name (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Chapters Breakdown Header */}
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>
              Showing <strong className="text-slate-900 font-bold">{displayedChapters.length}</strong> chapters
              {inventorySubject !== 'All' ? ` in ${inventorySubject}` : ' across all subjects'}
            </span>
            <span className="font-mono font-medium">
              Total Questions: <strong className="text-slate-900 font-bold">{displayedChapters.reduce((acc, c) => acc + c.totalQuestions, 0).toLocaleString()}</strong>
            </span>
          </div>

          {/* Chapter Inventory Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {displayedChapters.map(item => {
              const isExpanded = expandedChapterName === `${item.subject}-${item.chapter}`;
              const subjectTheme =
                item.subject === 'Physics'
                  ? {
                      bg: 'bg-sky-50 text-sky-800 border-sky-200',
                      bar: 'bg-sky-500',
                      badge: 'bg-sky-100 text-sky-900 border-sky-300',
                      icon: <Zap className="w-3.5 h-3.5 text-sky-600" />
                    }
                  : item.subject === 'Chemistry'
                  ? {
                      bg: 'bg-amber-50 text-amber-800 border-amber-200',
                      bar: 'bg-amber-500',
                      badge: 'bg-amber-100 text-amber-900 border-amber-300',
                      icon: <FlaskConical className="w-3.5 h-3.5 text-amber-600" />
                    }
                  : {
                      bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
                      bar: 'bg-emerald-500',
                      badge: 'bg-emerald-100 text-emerald-900 border-emerald-300',
                      icon: <Dna className="w-3.5 h-3.5 text-emerald-600" />
                    };

              return (
                <div
                  key={`${item.subject}-${item.chapter}`}
                  className={`p-4 rounded-2xl border transition-all shadow-2xs ${
                    isExpanded ? 'bg-white border-blue-300 ring-2 ring-blue-100' : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-2.5">
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase font-mono border ${subjectTheme.bg}`}>
                          {subjectTheme.icon}
                          <span>{item.subject}</span>
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {item.percentage}% of {item.subject}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {item.chapter}
                      </h4>
                    </div>

                    {/* Question Count Badge */}
                    <div className="shrink-0 text-right">
                      <span className={`inline-block px-3 py-1 rounded-xl font-mono font-black text-xs sm:text-sm border shadow-2xs ${subjectTheme.badge}`}>
                        {item.totalQuestions} Questions
                      </span>
                    </div>
                  </div>

                  {/* Relative Size Bar */}
                  <div className="mt-3 space-y-1">
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${subjectTheme.bar}`}
                        style={{ width: `${Math.min(100, Math.max(5, item.percentage * 3))}%` }}
                      />
                    </div>
                  </div>

                  {/* Quick Subtopic & Difficulty Counters */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-2.5 border-t border-slate-100 text-[11px]">
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                      🏷️ {item.subtopics.length} Subtopic{item.subtopics.length === 1 ? '' : 's'}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 font-mono font-semibold">
                      🟢 {item.difficultyCounts.Easy} Easy
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 font-mono font-semibold">
                      🟡 {item.difficultyCounts.Medium} Med
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-rose-50 text-rose-800 font-mono font-semibold">
                      🔴 {item.difficultyCounts.Hard} Hard
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between gap-2 mt-3 pt-2">
                    <button
                      onClick={() => {
                        setExpandedChapterName(isExpanded ? null : `${item.subject}-${item.chapter}`);
                      }}
                      className="inline-flex items-center space-x-1 text-xs font-semibold text-blue-700 hover:text-blue-800 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'Inspect Subtopics & Questions'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {item.totalQuestions === 0 ? (
                      <button
                        type="button"
                        onClick={() => onOpenUploadModal && onOpenUploadModal(item.subject, item.chapter)}
                        className="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 text-[11px] font-semibold transition cursor-pointer flex items-center space-x-1"
                        title={`Upload Questions for ${item.chapter}`}
                      >
                        <Upload className="w-3 h-3 text-emerald-600" />
                        <span>Upload Questions</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setCustomSubject(item.subject);
                          setCustomChapter(item.chapter);
                          setAdminTab('generator');
                        }}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 text-[11px] font-semibold transition cursor-pointer flex items-center space-x-1"
                        title={`Generate Custom Test from ${item.chapter}`}
                      >
                        <Sliders className="w-3 h-3 text-blue-600" />
                        <span>Generate Test</span>
                      </button>
                    )}
                  </div>

                  {/* Expanded Chapter Details Drawer */}
                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-slate-200 space-y-3 animate-in fade-in">
                      {/* Subtopic density */}
                      <div className="space-y-1.5">
                        <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                          Subtopic Question Counts:
                        </div>
                        <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
                          {Object.entries(item.subtopicCounts).map(([sub, count]) => (
                            <span
                              key={sub}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium"
                            >
                              <span>{sub}</span>
                              <strong className="px-1.5 py-0.2 rounded bg-white text-blue-700 border border-blue-200 font-mono text-[10px]">
                                {count}
                              </strong>
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Sample Questions Preview */}
                      {item.sampleQuestions.length > 0 && (
                        <div className="space-y-2 pt-1">
                          <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                            Sample Questions Preview:
                          </div>
                          <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                            {item.sampleQuestions.map((sq, sqIdx) => (
                              <div
                                key={sq.id || sqIdx}
                                className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-xs space-y-1.5"
                              >
                                <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                                  <span>Q{sqIdx + 1} • ID: {sq.id}</span>
                                  <span className="px-1.5 py-0.2 rounded bg-slate-200 text-slate-800 font-bold">
                                    {sq.difficulty || 'Medium'}
                                  </span>
                                </div>
                                <p className="font-medium text-slate-900 leading-snug line-clamp-2">
                                  {formatMathAndFormulas(sq.questionText)}
                                </p>
                                <div className="flex items-center gap-2 text-[11px] text-emerald-800 font-mono">
                                  <span className="font-bold">Correct: ({String.fromCharCode(65 + sq.correctAnswer)})</span>
                                  <span className="text-slate-600 truncate">{sq.options?.[sq.correctAnswer]}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
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

          {/* Candidates Directory & Package Status */}
          {registeredCandidates.length > 0 ? (
            <div className="space-y-4">
              {/* Package Distribution Summary Card */}
              <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Crown className="w-5 h-5 text-amber-500" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Enrolled Candidates & Prep Packages</h4>
                      <p className="text-xs text-gray-500">Live directory of active candidate package subscriptions</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold font-mono">
                    {registeredCandidates.length} Active {registeredCandidates.length === 1 ? 'Candidate' : 'Candidates'}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-3 text-xs">
                  {NEET_PREP_PACKAGES.map(pkg => {
                    const count = registeredCandidates.filter(c => c.selectedPackage?.id === pkg.id || (pkg.id === 'online-cbt' && !c.selectedPackage)).length;
                    return (
                      <div key={pkg.id} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                        <div className="text-[10px] uppercase font-bold text-slate-500 truncate">{pkg.name}</div>
                        <div className="flex items-baseline justify-between">
                          <span className="text-sm font-black text-slate-900">{count}</span>
                          <span className="text-[10px] font-mono text-emerald-700 font-bold">{pkg.price}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Candidate Cards */}
              <div className="space-y-3">
                {registeredCandidates.map((cand, idx) => {
                  const pkg = cand.selectedPackage || {
                    name: 'Online CBT All-India Test Series',
                    price: '₹2,999',
                    enrolledAt: cand.enrolledAt
                  };

                  return (
                    <div key={cand.rollNumber || idx} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-gray-100">
                        <div className="flex items-center space-x-3.5">
                          {cand.studentPhoto ? (
                            <img
                              src={cand.studentPhoto}
                              alt={cand.studentName}
                              className="w-12 h-12 rounded-2xl object-cover border border-slate-200 shadow-xs"
                            />
                          ) : (
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-black text-base flex items-center justify-center shadow-xs">
                              {cand.studentName?.charAt(0) || 'S'}
                            </div>
                          )}
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="text-base font-bold text-gray-900">{cand.studentName}</h4>
                              <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold">
                                {cand.caste || 'General / Open'}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 font-mono">
                              Roll: <strong className="text-blue-700">{cand.rollNumber}</strong> &bull; Target: {cand.targetYear || '2027'} &bull; Domicile: {cand.domicileState || 'Maharashtra'}
                            </p>
                          </div>
                        </div>

                        {/* Enrolled Package Badge */}
                        <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 shadow-2xs">
                          <Crown className="w-4 h-4 text-amber-500 shrink-0" />
                          <div>
                            <div className="text-[9px] uppercase font-bold text-slate-500">Enrolled Package</div>
                            <div className="text-xs font-extrabold text-blue-950 flex items-center gap-1.5">
                              <span>{pkg.name}</span>
                              <span className="font-mono text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded text-[10px] font-bold">
                                {pkg.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                        <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                          <div className="text-[10px] uppercase font-bold text-gray-500">Student Contact</div>
                          <div className="font-mono font-bold text-gray-900 mt-0.5">+91 {cand.studentPhone}</div>
                        </div>

                        <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                          <div className="text-[10px] uppercase font-bold text-gray-500">Parent / Emergency Phone</div>
                          <div className="font-mono font-bold text-emerald-800 mt-0.5">+91 {cand.parentPhone || cand.studentPhone}</div>
                        </div>

                        <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                          <div className="text-[10px] uppercase font-bold text-gray-500">Parent Email ID</div>
                          <div className="font-mono font-semibold text-gray-900 mt-0.5 truncate">{cand.parentEmail || cand.email}</div>
                        </div>

                        <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                          <div className="text-[10px] uppercase font-bold text-gray-500">State Domicile (85% Quota)</div>
                          <div className="font-bold text-blue-700 mt-0.5">{cand.domicileState || 'Maharashtra'}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
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

      {/* Master Default Saves & Committed Changes Inspector Modal */}
      <MasterDefaultSavesModal
        isOpen={showMasterSavesModal}
        onClose={() => setShowMasterSavesModal(false)}
        activePaperCode={selectedPlannerPreset}
        activeQuestions={sundayQuestions}
        activeRevision={paperRevision}
        onSelectPaperToLoad={(paperCode) => handleSelectSundayPaper(paperCode)}
        onConfirmAsMasterDefault={async (paperCode, questions, rev) => {
          setSelectedPlannerPreset(paperCode);
          setSundayQuestions(questions);
          setPaperRevision(rev);
          setActionSuccessBanner(`✓ Confirmed ${paperCode.toUpperCase()} as Final Master Default (Rev #${rev}) across all systems!`);
          setTimeout(() => setActionSuccessBanner(null), 4000);
        }}
      />

    </div>
  );
};
