import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import {
  X,
  MessageCircleQuestion,
  Sparkles,
  Send,
  CheckCircle2,
  Brain,
  Clock,
  UserCheck,
  ThumbsUp,
  ThumbsDown,
  BookOpen,
  Database,
  Check,
  Zap,
  Layers,
  ChevronDown
} from 'lucide-react';
import { solveStudentAcademicDoubt, SolvedDoubtResult } from '../utils/aiTutorEngine';
import { recordAILearningFeedback, getAILearningStats } from '../utils/aiKnowledgeEngine';

interface LiveDoubtModalProps {
  onClose: () => void;
}

export const LiveDoubtModal: React.FC<LiveDoubtModalProps> = ({ onClose }) => {
  const [subject, setSubject] = useState<'Physics' | 'Chemistry' | 'Biology' | 'Mathematics'>('Physics');
  const [doubtText, setDoubtText] = useState('');
  const [isSolving, setIsSolving] = useState(false);
  const [solvedResult, setSolvedResult] = useState<SolvedDoubtResult | null>(null);
  const [feedbackGiven, setFeedbackGiven] = useState<'helpful' | 'unhelpful' | null>(null);
  const [aiStats, setAiStats] = useState(getAILearningStats());

  const [user, setUser] = useState<any>(() => {
    try {
      const local = localStorage.getItem('neet_local_user');
      return local ? JSON.parse(local) : null;
    } catch {
      return null;
    }
  });

  const [pastDoubts, setPastDoubts] = useState<any[]>(() => {
    try {
      const saved = localStorage.getItem('neet_solved_doubts');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const reloadStats = () => {
    setAiStats(getAILearningStats());
  };

  useEffect(() => {
    reloadStats();
    const handleUpdate = () => reloadStats();
    window.addEventListener('neet_ai_learning_update', handleUpdate);
    return () => window.removeEventListener('neet_ai_learning_update', handleUpdate);
  }, []);

  const suggestedDoubts: Record<string, string[]> = {
    Physics: [
      'In Photoelectric Effect, why does increasing light intensity not change kinetic energy of photoelectrons?',
      'Who wins the rolling race down an incline plane: Solid Sphere or Hollow Cylinder?',
      'What is the de Broglie wavelength shortcut for an electron accelerated through 100 V?',
      'Explain Biot-Savart law for a circular current loop at center vs axial point.'
    ],
    Chemistry: [
      'What is the fundamental structural requirement for Aldol Condensation vs Cannizzaro Reaction?',
      'How to calculate buffer pH using Henderson-Hasselbalch equation when [Salt] = [Acid]?',
      'Explain Lanthanoid Contraction and why Zr and Hf have identical radii.',
      'Compare SN1 vs SN2 reaction mechanisms in terms of kinetics and stereochemistry.'
    ],
    Biology: [
      'Explain Lac Operon gene regulation and the role of allolactose as an inducer.',
      'Describe C4 Kranz anatomy and why C4 plants have zero photorespiration.',
      'Explain standard ECG waves (P, QRS, T) and cardiac output calculation.',
      'Trace the RAAS feedback pathway and role of Renin from JG cells.'
    ],
    Mathematics: [
      'What is the shortcut formula for finding the area under standard parabola and line?',
      'Explain properties of definite integrals when f(a - x) = f(x).',
      'How to find the shortest distance between two skew lines in 3D geometry?'
    ]
  };

  useEffect(() => {
    if (supabase) {
      supabase.auth.getUser().then(({ data: { user } }) => {
        if (user) setUser(user);
      }).catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (!supabase || !user) return;
    const fetchDoubts = async () => {
      try {
        const { data, error } = await supabase
          .from('academic_doubts')
          .select('*')
          .order('created_at', { ascending: false });
        if (!error && data && data.length > 0) {
          setPastDoubts(data);
          localStorage.setItem('neet_solved_doubts', JSON.stringify(data));
        }
      } catch (err) {
        console.warn('Could not sync past doubts from database:', err);
      }
    };
    fetchDoubts();
  }, [user]);

  const handleAskDoubt = async (e: React.FormEvent, directText?: string) => {
    if (e) e.preventDefault();
    const queryToSolve = directText || doubtText;
    if (!queryToSolve.trim()) return;

    setIsSolving(true);
    setSolvedResult(null);
    setFeedbackGiven(null);

    const result = await solveStudentAcademicDoubt(subject, queryToSolve);

    const newDoubtEntry = {
      id: 'doubt-' + Date.now(),
      subject,
      doubt_text: queryToSolve,
      solved_response: result.solutionText,
      citations: result.citations,
      created_at: new Date().toISOString()
    };

    setPastDoubts(prev => {
      const updated = [newDoubtEntry, ...prev];
      localStorage.setItem('neet_solved_doubts', JSON.stringify(updated));
      return updated;
    });

    if (supabase && user && user.id && !String(user.id).startsWith('local-')) {
      try {
        await supabase.from('academic_doubts').insert({
          user_id: user.id,
          subject,
          doubt_text: queryToSolve,
          is_solving: false,
          solved_response: result.solutionText
        });
      } catch (err) {
        console.warn('Doubt saved locally, remote sync failed:', err);
      }
    }

    setIsSolving(false);
    setSolvedResult(result);
    setDoubtText('');
  };

  const handleProvideFeedback = (isHelpful: boolean) => {
    if (!solvedResult) return;
    const currentQuery = pastDoubts[0]?.doubt_text || 'Subject Query';
    
    recordAILearningFeedback({
      subject,
      query: currentQuery,
      solutionText: solvedResult.solutionText,
      isHelpful,
      topic: `${subject} Resolution`
    });

    setFeedbackGiven(isHelpful ? 'helpful' : 'unhelpful');
    reloadStats();
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl shadow-2xl p-4 sm:p-6 space-y-4 text-gray-900 animate-in zoom-in-95 duration-150 max-h-[92vh] overflow-y-auto custom-scrollbar">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-3 border-b border-gray-200">
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs shrink-0 mt-0.5">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                <h2 className="text-base sm:text-lg font-bold text-gray-900">
                  AI Academic Doubt Desk & NCERT Engine
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold font-mono">
                  {aiStats.totalIndexedDatabaseItems}+ Questions Indexed
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">
                Continuously learning from our 97-chapter database, verified formulas, test papers, and faculty corrections.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Learning Stats Banner */}
        <div className="p-2.5 rounded-lg bg-blue-50/70 border border-blue-100 flex flex-wrap items-center justify-between gap-2 text-[11px]">
          <div className="flex items-center space-x-3 font-mono">
            <span className="flex items-center space-x-1 text-blue-900 font-semibold">
              <Database className="w-3.5 h-3.5 text-blue-600" />
              <span>Learned Concepts: <strong>{aiStats.totalLearnedConcepts}</strong></span>
            </span>
            <span className="flex items-center space-x-1 text-emerald-800 font-semibold">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>Accuracy: <strong>{aiStats.accuracyScore}</strong></span>
            </span>
          </div>

          <span className="text-[10px] text-gray-500 font-mono">
            Auto-Refining on Student Interactions
          </span>
        </div>

        {/* Input Form */}
        <form onSubmit={handleAskDoubt} className="space-y-3">
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">1. Select Subject</label>
            <div className="grid grid-cols-4 gap-1.5">
              {(['Physics', 'Chemistry', 'Biology', 'Mathematics'] as const).map(s => (
                <button
                  type="button"
                  key={s}
                  onClick={() => setSubject(s)}
                  className={`py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    subject === s
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">
              2. Type Question Text / Concept Query
            </label>
            <textarea
              rows={3}
              placeholder="e.g. In Photoelectric Effect, why does increasing light intensity not change the kinetic energy of emitted electrons?..."
              value={doubtText}
              onChange={e => setDoubtText(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Quick Prompts */}
          <div className="space-y-1">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              Quick {subject} High-Yield Queries:
            </div>
            <div className="flex flex-wrap gap-1">
              {(suggestedDoubts[subject] || []).map((qPrompt, qIdx) => (
                <button
                  key={qIdx}
                  type="button"
                  onClick={() => {
                    setDoubtText(qPrompt);
                    handleAskDoubt(null as any, qPrompt);
                  }}
                  className="text-[11px] px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-800 rounded-lg border border-blue-200 text-left transition-colors truncate max-w-full cursor-pointer"
                  title={qPrompt}
                >
                  ⚡ {qPrompt}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="text-[11px] text-gray-500 flex items-center space-x-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Database Context Retrieval: &lt; 0.5s</span>
            </div>

            <button
              type="submit"
              disabled={isSolving || !doubtText.trim()}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-xs flex items-center space-x-1.5 shadow-xs cursor-pointer active:scale-95 transition"
            >
              {isSolving ? (
                <>
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  <span>Searching Database & Solving...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Get Instant Verified Solution</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Solved Response Card with Database Citations & Continuous Feedback */}
        {solvedResult && (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 animate-in fade-in">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
              <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-800">
                <UserCheck className="w-4 h-4 text-emerald-600" />
                <span>Expert Faculty & Knowledge Engine Resolution:</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">
                {solvedResult.engineUsed}
              </span>
            </div>

            <div className="text-xs text-gray-800 whitespace-pre-line leading-relaxed font-medium">
              {solvedResult.solutionText}
            </div>

            {/* Citations Box */}
            {solvedResult.citations && solvedResult.citations.length > 0 && (
              <div className="pt-2 border-t border-slate-200/80 space-y-1">
                <div className="text-[10px] font-bold text-gray-500 uppercase flex items-center space-x-1 font-mono">
                  <BookOpen className="w-3 h-3 text-blue-600" />
                  <span>Retrieved Knowledge Citations:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {solvedResult.citations.map((cite, cIdx) => (
                    <span key={cIdx} className="text-[10px] px-2 py-0.5 rounded bg-white text-gray-700 border border-gray-200 font-medium">
                      📖 {cite}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Continuous Learning Interactive Feedback */}
            <div className="pt-2.5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <span className="text-gray-600 font-medium">Was this solution scientifically accurate and helpful?</span>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => handleProvideFeedback(true)}
                  disabled={feedbackGiven !== null}
                  className={`px-3 py-1 rounded-lg border text-xs font-bold flex items-center space-x-1 transition cursor-pointer ${
                    feedbackGiven === 'helpful'
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white hover:bg-emerald-50 text-emerald-700 border-emerald-200'
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Helpful (Learn Concept)</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleProvideFeedback(false)}
                  disabled={feedbackGiven !== null}
                  className={`px-3 py-1 rounded-lg border text-xs font-bold flex items-center space-x-1 transition cursor-pointer ${
                    feedbackGiven === 'unhelpful'
                      ? 'bg-rose-600 text-white border-rose-600'
                      : 'bg-white hover:bg-rose-50 text-rose-700 border-rose-200'
                  }`}
                >
                  <ThumbsDown className="w-3.5 h-3.5" />
                  <span>Needs Clarification</span>
                </button>
              </div>
            </div>

            {feedbackGiven && (
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-800 text-[11px] font-semibold flex items-center space-x-1.5 animate-in fade-in">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>
                  {feedbackGiven === 'helpful'
                    ? '✓ Thank you! Knowledge base weights updated and concept stored for continuous learning.'
                    : '✓ Feedback logged. Faculty team will refine this chapter resolution.'}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Past Doubts History */}
        {pastDoubts.length > 0 && (
          <div className="pt-3 border-t border-gray-200">
            <h3 className="text-xs font-bold text-gray-700 mb-2">Past Resolved Doubts ({pastDoubts.length})</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto custom-scrollbar pr-1">
              {pastDoubts.map((d) => (
                <div key={d.id} className="p-2.5 rounded-lg bg-gray-50 border border-gray-200 text-xs space-y-1">
                  <div className="flex justify-between items-center text-[10px] font-bold text-gray-500">
                    <span className="text-blue-700 font-semibold">{d.subject}</span>
                    <span>{new Date(d.created_at).toLocaleDateString()}</span>
                  </div>
                  <p className="font-semibold text-gray-800 line-clamp-2">{d.doubt_text}</p>
                  {d.solved_response && (
                    <details className="mt-1 text-gray-600">
                      <summary className="cursor-pointer font-bold text-[10px] text-emerald-600 hover:text-emerald-700 outline-none">
                        View Solution & Citations
                      </summary>
                      <div className="mt-1 leading-relaxed whitespace-pre-line text-[11px] border-t border-gray-200 pt-1 text-gray-700">
                        {d.solved_response}
                      </div>
                    </details>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
