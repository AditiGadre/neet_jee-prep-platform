import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import {
  X,
  MessageCircleQuestion,
  Sparkles,
  Send,
  Upload,
  CheckCircle2,
  Brain,
  Clock,
  UserCheck
} from 'lucide-react';

import { solveStudentAcademicDoubt } from '../utils/aiTutorEngine';

interface LiveDoubtModalProps {
  onClose: () => void;
}

export const LiveDoubtModal: React.FC<LiveDoubtModalProps> = ({ onClose }) => {
  const [subject, setSubject] = useState<'Physics' | 'Chemistry' | 'Biology' | 'Mathematics'>('Physics');
  const [doubtText, setDoubtText] = useState('');
  const [isSolving, setIsSolving] = useState(false);
  const [solvedResponse, setSolvedResponse] = useState<string | null>(null);

  const [user, setUser] = useState<any>(null);
  const [pastDoubts, setPastDoubts] = useState<any[]>([]);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    if (!supabase) return;
    if (user) {
      const fetchDoubts = async () => {
        const { data, error } = await supabase
          .from('academic_doubts')
          .select('*')
          .order('created_at', { ascending: false });
        if (!error && data) {
          setPastDoubts(data);
        }
      };
      fetchDoubts();
    }
  }, [user]);

  const handleAskDoubt = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!doubtText.trim()) return;

    setIsSolving(true);
    setSolvedResponse(null);

    const activeDoubt = doubtText;
    const responseText = await solveStudentAcademicDoubt(subject, activeDoubt);

    if (supabase && user) {
      const { data, error } = await supabase
        .from('academic_doubts')
        .insert({
          user_id: user.id,
          subject,
          doubt_text: activeDoubt,
          is_solving: false,
          solved_response: responseText
        })
        .select();

      if (!error && data && data.length > 0) {
        setPastDoubts(prev => [data[0], ...prev]);
      }
    }

    setIsSolving(false);
    setSolvedResponse(responseText);
    setDoubtText('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow-xl p-5 space-y-4 text-gray-900 animate-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
              <MessageCircleQuestion className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900">
                Academic Support & 24/7 Doubt Resolution
              </h2>
              <p className="text-xs text-gray-500">
                AIIMS & IIT alumni panel ready to solve any question in sub-10 minutes.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleAskDoubt} className="space-y-3">
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">Select Subject</label>
            <div className="grid grid-cols-4 gap-1.5">
              {(['Physics', 'Chemistry', 'Biology', 'Mathematics'] as const).map(s => (
                <button
                  type="button"
                  key={s}
                  onClick={() => setSubject(s)}
                  className={`py-1.5 rounded text-xs font-semibold transition-colors ${
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
              Type or Paste Question Text / Concept Query
            </label>
            <textarea
              rows={3}
              placeholder="e.g. In Photoelectric Effect, why does increasing light intensity not change the kinetic energy of emitted electrons?..."
              value={doubtText}
              onChange={e => setDoubtText(e.target.value)}
              className="w-full p-2.5 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="text-[11px] text-gray-500 flex items-center space-x-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Avg Response Time: &lt; 2 Minutes</span>
            </div>

            <button
              type="submit"
              disabled={isSolving || !doubtText.trim()}
              className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold text-xs flex items-center space-x-1.5 shadow-xs"
            >
              {isSolving ? (
                <>
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  <span>Solving with Senior Faculty...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Get Instant Solution</span>
                </>
              )}
            </button>
          </div>
        </form>

        {solvedResponse && (
          <div className="p-3.5 rounded bg-gray-50 border border-emerald-200 space-y-1.5 animate-in fade-in">
            <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-800">
              <UserCheck className="w-4 h-4 text-emerald-600" />
              <span>Expert Faculty Resolution:</span>
            </div>
            <div className="text-xs text-gray-700 whitespace-pre-line leading-relaxed font-semibold">
              {solvedResponse}
            </div>
          </div>
        )}

        {/* Past Doubts History */}
        {user && pastDoubts.length > 0 && (
          <div className="pt-3.5 border-t border-gray-250">
            <h3 className="text-xs font-bold text-gray-700 mb-2">Your Past Solved Doubts ({pastDoubts.length})</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto custom-scrollbar pr-1">
              {pastDoubts.map((d) => (
                <div key={d.id} className="p-2.5 rounded bg-gray-50 border border-gray-200 text-xs space-y-1">
                  <div className="flex justify-between items-center text-[10px] font-bold text-gray-500">
                    <span className="text-blue-700 font-semibold">{d.subject}</span>
                    <span>{new Date(d.created_at).toLocaleDateString()}</span>
                  </div>
                  <p className="font-semibold text-gray-800 line-clamp-2">{d.doubt_text}</p>
                  {d.solved_response && (
                    <details className="mt-1 text-gray-650">
                      <summary className="cursor-pointer font-bold text-[10px] text-emerald-600 hover:text-emerald-700 outline-none">
                        View Solution
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
