import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  Database,
  CheckCircle2,
  Clock,
  Download,
  Search,
  Filter,
  Layers,
  ArrowRight,
  RotateCcw,
  Sparkles,
  BookOpen,
  Eye,
  RefreshCw,
  Copy,
  Check,
  FileText,
  FileJson,
  Calendar,
  User,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { Question } from '../types';
import {
  getAllSavedCustomSundayPapers,
  saveCustomSundayPaper,
  SavedSundayPaper,
  SUNDAY_DROPPER_PLANNER_TESTS,
  SUNDAY_11TH_PLANNER_TESTS,
  PLANNER_12TH_TESTS
} from '../data/sundayPlannerTests';
import {
  getCanonicalPaperCode,
  getOfficialBaseSundayPaper,
  commitAuthoritativePaperToCloud,
  SyncedSundayPaper
} from '../services/authoritativeCloudService';
import { supabase } from '../supabaseClient';
import { formatMathAndFormulas } from '../utils/mathFormatter';

interface MasterDefaultSavesModalProps {
  isOpen: boolean;
  onClose: () => void;
  activePaperCode: string;
  activeQuestions: Question[];
  activeRevision: number;
  onSelectPaperToLoad?: (paperCode: string) => void;
  onConfirmAsMasterDefault?: (paperCode: string, questions: Question[], revision: number) => Promise<void> | void;
}

interface CloudCommitRow {
  id: string;
  topic: string;
  correct_answer: number;
  explanation: string;
  created_at?: string;
}

export const MasterDefaultSavesModal: React.FC<MasterDefaultSavesModalProps> = ({
  isOpen,
  onClose,
  activePaperCode,
  activeQuestions,
  activeRevision,
  onSelectPaperToLoad,
  onConfirmAsMasterDefault
}) => {
  const [activeTab, setActiveTab] = useState<'all_saves' | 'inspect_questions' | 'cloud_history'>('all_saves');
  const [selectedInspectCode, setSelectedInspectCode] = useState<string>(activePaperCode);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [subjectFilter, setSubjectFilter] = useState<'All' | 'Physics' | 'Chemistry' | 'Botany' | 'Zoology'>('All');
  const [diffFilter, setDiffFilter] = useState<'all' | 'modified_only'>('all');
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  // Confirmation of Final Master Default across all systems state
  const [confirmingPaperCode, setConfirmingPaperCode] = useState<string | null>(null);
  const [isConfirmingFinal, setIsConfirmingFinal] = useState<boolean>(false);
  const [confirmSuccessMsg, setConfirmSuccessMsg] = useState<string | null>(null);

  // Cloud Commits State
  const [cloudCommits, setCloudCommits] = useState<CloudCommitRow[]>([]);
  const [isLoadingCloud, setIsLoadingCloud] = useState<boolean>(false);
  const [cloudError, setCloudError] = useState<string | null>(null);

  // Fetch all local saved custom Sunday papers
  const savedPapersRecord = useMemo(() => {
    return getAllSavedCustomSundayPapers();
  }, [isOpen]);

  const savedPaperKeys = useMemo(() => {
    return Object.keys(savedPapersRecord).sort();
  }, [savedPapersRecord]);

  // Load cloud commit logs from Supabase
  const loadCloudCommits = async () => {
    if (!supabase) return;
    setIsLoadingCloud(true);
    setCloudError(null);
    try {
      const { data, error } = await supabase
        .from('questions')
        .select('id, topic, correct_answer, explanation, created_at')
        .eq('subject', '__SYSTEM_SYNC__')
        .eq('chapter', 'SUNDAY_TEST_PAPERS')
        .order('correct_answer', { ascending: false })
        .limit(30);

      if (error) {
        setCloudError(error.message);
      } else if (data) {
        setCloudCommits(data as CloudCommitRow[]);
      }
    } catch (e: any) {
      setCloudError(e?.message || 'Network error fetching cloud records');
    } finally {
      setIsLoadingCloud(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setSelectedInspectCode(activePaperCode);
      loadCloudCommits();
    }
  }, [isOpen, activePaperCode]);

  // Retrieve data for the paper currently being inspected
  const canonicalInspectCode = getCanonicalPaperCode(selectedInspectCode);
  const localSavedData = savedPapersRecord[canonicalInspectCode] || savedPapersRecord[canonicalInspectCode.toLowerCase()];
  const basePaper = getOfficialBaseSundayPaper(canonicalInspectCode);

  const isInspectingActive = canonicalInspectCode === getCanonicalPaperCode(activePaperCode);

  const inspectedQuestions: Question[] = isInspectingActive && activeQuestions && activeQuestions.length === 180
    ? activeQuestions
    : localSavedData?.questions || basePaper.questions;

  const inspectedRevision = isInspectingActive
    ? activeRevision
    : (localSavedData as any)?.revision || 1;

  const inspectedUpdatedAt = isInspectingActive
    ? localSavedData?.updatedAt || new Date().toISOString()
    : localSavedData?.updatedAt || basePaper.updatedAt;

  // Question diff detection: compare against base paper
  const baseQuestionMap = new Map<number, Question>();
  basePaper.questions.forEach((q, idx) => {
    baseQuestionMap.set(idx, q);
  });

  const questionDiffs = useMemo(() => {
    return inspectedQuestions.map((q, idx) => {
      const baseQ = baseQuestionMap.get(idx);
      const isTextDiff = baseQ ? baseQ.questionText.trim() !== q.questionText.trim() : false;
      const isAnswerDiff = baseQ ? baseQ.correctAnswer !== q.correctAnswer : false;
      const isChapterDiff = baseQ ? baseQ.chapter !== q.chapter : false;
      const isModified = isTextDiff || isAnswerDiff || isChapterDiff;

      return {
        question: q,
        index: idx,
        isModified,
        isTextDiff,
        isAnswerDiff,
        isChapterDiff,
        baseQ
      };
    });
  }, [inspectedQuestions, basePaper]);

  const modifiedCount = questionDiffs.filter(d => d.isModified).length;

  // Filter questions for inspection
  const filteredQuestions = questionDiffs.filter(({ question, index, isModified }) => {
    if (diffFilter === 'modified_only' && !isModified) return false;

    if (subjectFilter !== 'All') {
      const sub = question.subject;
      const tags = question.tags || [];
      if (subjectFilter === 'Physics' && sub !== 'Physics') return false;
      if (subjectFilter === 'Chemistry' && sub !== 'Chemistry') return false;
      if (subjectFilter === 'Botany' && !(tags.includes('Botany') || (sub === 'Biology' && index >= 90 && index < 135))) return false;
      if (subjectFilter === 'Zoology' && !(tags.includes('Zoology') || (sub === 'Biology' && index >= 135))) return false;
    }

    if (searchQuery.trim()) {
      const term = searchQuery.toLowerCase();
      const matchText = question.questionText.toLowerCase().includes(term);
      const matchChapter = (question.chapter || '').toLowerCase().includes(term);
      const matchTopic = (question.topic || '').toLowerCase().includes(term);
      const matchNum = `q#${index + 1}`.includes(term) || `${index + 1}` === term;
      return matchText || matchChapter || matchTopic || matchNum;
    }

    return true;
  });

  const handleExportJson = () => {
    const payload = {
      paperCode: canonicalInspectCode,
      revision: inspectedRevision,
      updatedAt: inspectedUpdatedAt,
      publishedBy: 'Institutional Master Admin',
      customChapters: localSavedData?.customChapters || basePaper.customChapters,
      questionsCount: inspectedQuestions.length,
      questions: inspectedQuestions
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Master_Default_${canonicalInspectCode}_Rev${inspectedRevision}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setCopiedNotification('✓ JSON snapshot downloaded!');
    setTimeout(() => setCopiedNotification(null), 3000);
  };

  const handleCopySummary = () => {
    const summary = `=== MASTER DEFAULT SAVE ===\nPaper Code: ${canonicalInspectCode}\nRevision: Rev ${inspectedRevision}\nCommitted: ${new Date(inspectedUpdatedAt).toLocaleString()}\nQuestions: ${inspectedQuestions.length}\nCustom Swaps/Edits: ${modifiedCount} questions modified vs base template\nPhysics Units: ${(localSavedData?.customChapters?.physics || basePaper.customChapters?.physics || []).join(', ')}\nChemistry Units: ${(localSavedData?.customChapters?.chemistry || basePaper.customChapters?.chemistry || []).join(', ')}\nBiology Blocks: ${(localSavedData?.customChapters?.biology || basePaper.customChapters?.biology || []).join(', ')}`;
    navigator.clipboard.writeText(summary);
    setCopiedNotification('✓ Summary copied to clipboard!');
    setTimeout(() => setCopiedNotification(null), 3000);
  };

  // Combine standard presets with custom saved papers for the selector
  const allAvailablePresets = useMemo(() => {
    const set = new Set<string>();
    SUNDAY_DROPPER_PLANNER_TESTS.forEach(t => set.add(t.code.toUpperCase()));
    SUNDAY_11TH_PLANNER_TESTS.forEach(t => set.add(`11TH-${t.code.toUpperCase()}`));
    PLANNER_12TH_TESTS.forEach(t => set.add(`12TH-${t.code.toUpperCase()}`));
    savedPaperKeys.forEach(k => set.add(k.toUpperCase()));
    return Array.from(set).sort();
  }, [savedPaperKeys]);

  // Execute confirmation of a chosen paper as Final Master Default across all student systems
  const handleExecuteConfirmFinal = async (codeToConfirm: string) => {
    setIsConfirmingFinal(true);
    try {
      const canonical = getCanonicalPaperCode(codeToConfirm);
      const isInspecting = canonical === canonicalInspectCode;
      
      let questionsToSave: Question[] = [];
      let customUnits = undefined;

      if (isInspecting) {
        questionsToSave = inspectedQuestions;
        customUnits = localSavedData?.customChapters || basePaper.customChapters;
      } else {
        const saved = savedPapersRecord[canonical] || savedPapersRecord[canonical.toLowerCase()];
        if (saved && Array.isArray(saved.questions) && saved.questions.length === 180) {
          questionsToSave = saved.questions;
          customUnits = saved.customChapters;
        } else {
          const bp = getOfficialBaseSundayPaper(canonical);
          questionsToSave = bp.questions;
          customUnits = bp.customChapters;
        }
      }

      const currentRev = isInspecting ? inspectedRevision : ((savedPapersRecord[canonical] as any)?.revision || 1);
      const paperObj: SyncedSundayPaper = {
        paperCode: canonical,
        revision: currentRev,
        questions: questionsToSave,
        customChapters: customUnits,
        testTitle: `Official Default Sunday Paper: ${canonical}`,
        publishedBy: 'Institutional Master Admin',
        updatedAt: new Date().toISOString()
      };

      saveCustomSundayPaper(canonical, paperObj);
      const commitRes = await commitAuthoritativePaperToCloud(paperObj, currentRev);
      const finalRev = commitRes.revision || (currentRev + 1);

      setConfirmSuccessMsg(`✓ Confirmed ${canonical} as Final Master Default (Rev #${finalRev}) across all systems!`);
      setTimeout(() => setConfirmSuccessMsg(null), 5000);

      if (onConfirmAsMasterDefault) {
        await onConfirmAsMasterDefault(canonical, questionsToSave, finalRev);
      }
      loadCloudCommits();
      setConfirmingPaperCode(null);
    } catch (err: any) {
      setConfirmSuccessMsg(`⚠️ Error confirming paper: ${err?.message || err}`);
    } finally {
      setIsConfirmingFinal(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl max-w-5xl w-full max-h-[92vh] flex flex-col text-slate-100 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border-b border-slate-700/80 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-white">Master Default Committed Saves</h3>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Universal Admin Registry
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Authoritative paper snapshots committed to database and local mirror for institutional testing.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {confirmSuccessMsg && (
              <span className="text-xs font-black text-emerald-300 bg-emerald-950/90 border border-emerald-500/80 px-3 py-1.5 rounded-xl animate-in fade-in flex items-center gap-1.5 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {confirmSuccessMsg}
              </span>
            )}
            {copiedNotification && (
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-700/60 px-3 py-1.5 rounded-xl animate-in fade-in">
                {copiedNotification}
              </span>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Quick Bar */}
        <div className="px-4 sm:px-6 py-3 bg-slate-950/60 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-slate-400 font-bold">Inspect Paper:</span>
            <select
              value={selectedInspectCode}
              onChange={(e) => setSelectedInspectCode(e.target.value)}
              className="bg-slate-800 text-white font-bold px-3 py-1.5 rounded-xl border border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 cursor-pointer text-xs"
            >
              {allAvailablePresets.map(code => {
                const isCustom = Boolean(savedPapersRecord[code] || savedPapersRecord[code.toLowerCase()]);
                return (
                  <option key={code} value={code}>
                    {code} {isCustom ? '★ (Custom Master Save)' : '(Base Syllabus)'}
                  </option>
                );
              })}
            </select>

            <span className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold border ${
              localSavedData
                ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}>
              {localSavedData ? `Rev ${inspectedRevision} (Committed Save)` : 'Official Base Syllabus Template'}
            </span>

            {modifiedCount > 0 ? (
              <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                {modifiedCount} Questions Custom Swapped
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                100% Matching Standard Base
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setConfirmingPaperCode(canonicalInspectCode)}
              className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-xs transition flex items-center gap-1.5 shadow-md cursor-pointer border border-emerald-300/40"
              title="Confirm and lock this paper as Final Master Default across all student systems"
            >
              <ShieldCheck className="w-4 h-4 text-slate-950" />
              Confirm as Final Paper (All Systems)
            </button>

            <button
              onClick={handleCopySummary}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border border-slate-700 cursor-pointer"
              title="Copy details summary"
            >
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              Copy Summary
            </button>

            <button
              onClick={handleExportJson}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border border-slate-700 cursor-pointer"
              title="Download full JSON file of this paper"
            >
              <FileJson className="w-3.5 h-3.5 text-slate-400" />
              Export JSON
            </button>

            {onSelectPaperToLoad && canonicalInspectCode !== getCanonicalPaperCode(activePaperCode) && (
              <button
                onClick={() => {
                  onSelectPaperToLoad(canonicalInspectCode);
                  onClose();
                }}
                className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <ArrowRight className="w-3.5 h-3.5" />
                Load in Studio
              </button>
            )}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-900/50 px-4 sm:px-6">
          <button
            onClick={() => setActiveTab('all_saves')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'all_saves'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            All Master Default Saves ({savedPaperKeys.length})
          </button>

          <button
            onClick={() => setActiveTab('inspect_questions')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'inspect_questions'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Eye className="w-4 h-4" />
            Inspect 180 Questions ({selectedInspectCode})
            {modifiedCount > 0 && (
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            )}
          </button>

          <button
            onClick={() => {
              setActiveTab('cloud_history');
              loadCloudCommits();
            }}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'cloud_history'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Database className="w-4 h-4" />
            Cloud Database Commits ({cloudCommits.length})
          </button>
        </div>

        {/* Tab Content Container */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          
          {/* TAB 1: ALL SAVED MASTER PAPERS */}
          {activeTab === 'all_saves' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>
                  Showing all customized papers saved as Master Default across institutional test batches.
                </span>
                <span className="font-mono font-bold text-slate-300">
                  {savedPaperKeys.length} Custom Master Paper{savedPaperKeys.length === 1 ? '' : 's'} Registered
                </span>
              </div>

              {savedPaperKeys.length === 0 ? (
                <div className="text-center py-16 bg-slate-950/40 rounded-2xl border border-slate-800 space-y-3">
                  <ShieldCheck className="w-12 h-12 text-slate-500 mx-auto" />
                  <h4 className="text-sm font-bold text-slate-300">No Custom Master Default Paper Saved Yet</h4>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    All test papers are currently running the standard official syllabus template. Any edits or topic swaps you save with "Save as Master Default" in Sunday Studio will be recorded here.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {savedPaperKeys.map(key => {
                    const paper = savedPapersRecord[key];
                    const canonical = getCanonicalPaperCode(key);
                    const isSelected = canonicalInspectCode === canonical;
                    const isCurrentlyLoaded = canonical === getCanonicalPaperCode(activePaperCode);
                    const dateStr = paper.updatedAt ? new Date(paper.updatedAt).toLocaleString() : 'Recent';

                    return (
                      <div
                        key={key}
                        className={`p-4 rounded-2xl border transition space-y-3 ${
                          isSelected
                            ? 'bg-slate-800/90 border-emerald-500/60 shadow-lg ring-1 ring-emerald-500/30'
                            : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-base font-black text-white font-mono">{canonical}</span>
                              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                                Rev {(paper as any).revision || 1}
                              </span>
                              {isCurrentlyLoaded && (
                                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                  Currently in Studio
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-400 font-medium line-clamp-1">
                              {paper.testTitle || `Official Default Sunday Paper: ${canonical}`}
                            </p>
                          </div>

                          <div className="text-right">
                            <span className="text-[11px] font-mono text-slate-400 block">{dateStr}</span>
                            <span className="text-[10px] text-slate-500 font-mono">180 Questions</span>
                          </div>
                        </div>

                        {/* Units list */}
                        {paper.customChapters && (
                          <div className="p-2.5 bg-slate-900/80 rounded-xl border border-slate-800 text-[11px] space-y-1">
                            <div className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">Configured Syllabus Units:</div>
                            <div className="text-slate-300 line-clamp-1 font-mono text-[10px]">
                              <span className="text-sky-400 font-bold">PHY:</span> {(paper.customChapters.physics || []).join(', ') || 'Standard'}
                            </div>
                            <div className="text-slate-300 line-clamp-1 font-mono text-[10px]">
                              <span className="text-amber-400 font-bold">CHEM:</span> {(paper.customChapters.chemistry || []).join(', ') || 'Standard'}
                            </div>
                            <div className="text-slate-300 line-clamp-1 font-mono text-[10px]">
                              <span className="text-emerald-400 font-bold">BIO:</span> {(paper.customChapters.biology || []).join(', ') || 'Standard'}
                            </div>
                          </div>
                        )}

                        {/* Card Actions */}
                        <div className="flex items-center justify-between pt-1 border-t border-slate-800/80">
                          <button
                            onClick={() => {
                              setSelectedInspectCode(canonical);
                              setActiveTab('inspect_questions');
                            }}
                            className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            Inspect 180 Questions →
                          </button>

                          <div className="flex items-center gap-1.5">
                            {onSelectPaperToLoad && !isCurrentlyLoaded && (
                              <button
                                onClick={() => {
                                  onSelectPaperToLoad(canonical);
                                  onClose();
                                }}
                                className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-blue-600/30 hover:bg-blue-600 text-blue-200 hover:text-white border border-blue-500/30 transition cursor-pointer"
                              >
                                Load in Studio
                              </button>
                            )}

                            <button
                              onClick={() => setConfirmingPaperCode(canonical)}
                              className="px-2.5 py-1 text-[11px] font-black rounded-lg bg-emerald-600/30 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 transition cursor-pointer flex items-center gap-1"
                              title="Confirm this paper as Final Master Default across all systems"
                            >
                              <ShieldCheck className="w-3 h-3" />
                              Confirm as Final
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: INSPECT QUESTIONS & CHANGES */}
          {activeTab === 'inspect_questions' && (
            <div className="space-y-4">
              {/* Filter controls */}
              <div className="p-3.5 bg-slate-950/60 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 flex-wrap flex-1">
                  <div className="relative min-w-[200px] flex-1 max-w-xs">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search questions, chapter, Q#..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                    {(['All', 'Physics', 'Chemistry', 'Botany', 'Zoology'] as const).map(sub => (
                      <button
                        key={sub}
                        onClick={() => setSubjectFilter(sub)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                          subjectFilter === sub
                            ? 'bg-indigo-600 text-white shadow-xs'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setDiffFilter(prev => prev === 'all' ? 'modified_only' : 'all')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer border ${
                      diffFilter === 'modified_only'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                        : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    {diffFilter === 'modified_only' ? 'Showing Modified Only' : 'Show All Questions'}
                  </button>
                </div>

                <div className="text-slate-400 font-mono text-[11px]">
                  Showing <strong className="text-white">{filteredQuestions.length}</strong> of 180 Questions
                </div>
              </div>

              {/* Questions List */}
              <div className="space-y-3">
                {filteredQuestions.length === 0 ? (
                  <div className="text-center py-12 bg-slate-950/40 rounded-2xl border border-slate-800 text-slate-400 text-xs">
                    No questions match the current filter criteria.
                  </div>
                ) : (
                  filteredQuestions.map(({ question, index, isModified, isTextDiff, isAnswerDiff, isChapterDiff, baseQ }) => {
                    const optLetters = ['A', 'B', 'C', 'D'];
                    return (
                      <div
                        key={question.id || index}
                        className={`p-4 rounded-2xl border transition space-y-2.5 ${
                          isModified
                            ? 'bg-amber-950/20 border-amber-500/40'
                            : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                        }`}
                      >
                        {/* Question Header Meta */}
                        <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded-lg bg-slate-800 text-white font-mono font-black text-xs">
                              Q#{index + 1}
                            </span>
                            <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                              question.subject === 'Physics' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30' :
                              question.subject === 'Chemistry' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                              'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            }`}>
                              {question.subject}
                              {question.tags?.includes('Botany') ? ' (Botany)' : ''}
                              {question.tags?.includes('Zoology') ? ' (Zoology)' : ''}
                            </span>
                            <span className="text-slate-400 font-medium text-xs">
                              {question.chapter}
                            </span>
                            {question.topic && question.topic !== question.chapter && (
                              <span className="text-slate-500 text-[11px]">
                                • {question.topic}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                              question.difficulty === 'Hard' ? 'bg-rose-500/20 text-rose-300' :
                              question.difficulty === 'Easy' ? 'bg-emerald-500/20 text-emerald-300' :
                              'bg-amber-500/20 text-amber-300'
                            }`}>
                              {question.difficulty || 'Medium'}
                            </span>

                            {isModified && (
                              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-400 text-slate-950 font-mono">
                                Modified vs Base
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Question Text */}
                        <div className="text-slate-200 text-xs sm:text-sm font-medium leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                          {formatMathAndFormulas(question.questionText)}
                        </div>

                        {/* Options */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {question.options.map((opt, optIdx) => {
                            const isCorrect = question.correctAnswer === optIdx;
                            return (
                              <div
                                key={optIdx}
                                className={`p-2.5 rounded-xl border flex items-start space-x-2 ${
                                  isCorrect
                                    ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-200 font-bold'
                                    : 'bg-slate-900/40 border-slate-800/80 text-slate-300'
                                }`}
                              >
                                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                                  isCorrect ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                                }`}>
                                  {optLetters[optIdx]}
                                </span>
                                <span className="flex-1 leading-snug">
                                  {formatMathAndFormulas(opt)}
                                </span>
                                {isCorrect && (
                                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                )}
                              </div>
                            );
                          })}
                        </div>

                        {/* Explanation snippet if present */}
                        {question.explanation && (
                          <div className="text-[11px] text-slate-400 bg-slate-900/30 p-2 rounded-lg border border-slate-800/50">
                            <strong className="text-slate-300">Explanation:</strong> {formatMathAndFormulas(question.explanation)}
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {/* TAB 3: CLOUD DATABASE COMMITS */}
          {activeTab === 'cloud_history' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>
                  Live record rows written to Supabase Cloud database table (<code className="text-emerald-400">questions</code> where <code className="text-emerald-400">subject='__SYSTEM_SYNC__'</code>).
                </span>
                <button
                  onClick={loadCloudCommits}
                  disabled={isLoadingCloud}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoadingCloud ? 'animate-spin' : ''}`} />
                  Refresh Cloud Log
                </button>
              </div>

              {cloudError && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-xs">
                  ⚠️ Cloud Query Notice: {cloudError}
                </div>
              )}

              {isLoadingCloud ? (
                <div className="text-center py-16 text-slate-400 text-xs space-y-2">
                  <RefreshCw className="w-6 h-6 animate-spin text-emerald-400 mx-auto" />
                  <p>Querying Supabase database commit records...</p>
                </div>
              ) : cloudCommits.length === 0 ? (
                <div className="text-center py-16 bg-slate-950/40 rounded-2xl border border-slate-800 space-y-2">
                  <Database className="w-10 h-10 text-slate-500 mx-auto" />
                  <h4 className="text-sm font-bold text-slate-300">No Remote Cloud Commit Rows Found</h4>
                  <p className="text-xs text-slate-500">Commits written with "Save as Master Default" will reflect here.</p>
                </div>
              ) : (
                <div className="divide-y divide-slate-800/80 rounded-2xl border border-slate-800 bg-slate-950/60 overflow-hidden">
                  {cloudCommits.map((row) => {
                    const isMatchesActive = row.topic.toUpperCase() === canonicalInspectCode;
                    return (
                      <div
                        key={row.id}
                        className={`p-3.5 flex items-center justify-between gap-3 text-xs transition ${
                          isMatchesActive ? 'bg-emerald-950/20' : 'hover:bg-slate-900/40'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className={`w-2.5 h-2.5 rounded-full ${
                            isMatchesActive ? 'bg-emerald-400 shadow-sm shadow-emerald-400' : 'bg-slate-600'
                          }`} />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-black text-white text-sm">{row.topic}</span>
                              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                                Rev {row.correct_answer}
                              </span>
                              {isMatchesActive && (
                                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                  Selected Paper
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                              {row.explanation || row.id}
                            </p>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-[10px] text-slate-500 font-mono block">
                            {row.created_at ? new Date(row.created_at).toLocaleDateString() : 'Cloud Record'}
                          </span>
                          <span className="text-[9px] text-slate-600 font-mono block max-w-[150px] truncate" title={row.id}>
                            {row.id}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Master Default Architecture: Direct Institutional Baseline</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition cursor-pointer"
          >
            Close Viewer
          </button>
        </div>

        {/* Confirm Final Master Default Across All Systems Modal Dialog */}
        {confirmingPaperCode && (
          <div className="fixed inset-0 z-60 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
            <div className="bg-slate-900 border border-emerald-500/60 rounded-3xl p-6 max-w-lg w-full shadow-2xl space-y-4 animate-in zoom-in-95 duration-150">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-2xl border border-emerald-500/30">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-white">Confirm as Final Master Default</h4>
                  <p className="text-xs font-mono text-emerald-400 font-bold">Paper: {confirmingPaperCode.toUpperCase()}</p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                <p>
                  You are about to establish <strong>{confirmingPaperCode.toUpperCase()}</strong> as the authoritative <strong>Final Master Default</strong> paper across all student systems.
                </p>
                <ul className="list-disc pl-4 space-y-1 text-slate-400 text-[11px]">
                  <li>All 180 questions will be committed to Supabase Cloud Database (`__SYSTEM_SYNC__`).</li>
                  <li>Realtime broadcast will instantly update all 1,000+ student CBT machines without requiring student logouts.</li>
                  <li>Syllabus units and topic configurations will be set universally.</li>
                </ul>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setConfirmingPaperCode(null)}
                  disabled={isConfirmingFinal}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleExecuteConfirmFinal(confirmingPaperCode)}
                  disabled={isConfirmingFinal}
                  className="px-5 py-2.5 rounded-xl text-xs font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition flex items-center gap-2 shadow-lg cursor-pointer disabled:opacity-50"
                >
                  {isConfirmingFinal ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                      Publishing to All Systems...
                    </>
                  ) : (
                    <>
                      <CheckCheck className="w-4 h-4 text-slate-950" />
                      Yes, Confirm Across All Systems
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};