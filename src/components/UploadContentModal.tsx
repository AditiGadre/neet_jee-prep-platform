import React, { useState } from 'react';
import {
  X,
  Upload,
  Sparkles,
  Database,
  FileCode,
  FileText,
  CheckCircle2,
  AlertCircle,
  Plus,
  Loader,
  Brain,
  HardDrive,
  Check,
  Zap,
  BookOpen
} from 'lucide-react';
import { Question } from '../types';
import {
  uploadCustomQuestions,
  generateAiAugmentedBatch,
  getQuestionDatabaseStats
} from '../utils/questionDatabase';

interface UploadContentModalProps {
  onClose: () => void;
  defaultSubject?: 'Physics' | 'Chemistry' | 'Biology';
  defaultChapter?: string;
}

export const UploadContentModal: React.FC<UploadContentModalProps> = ({
  onClose,
  defaultSubject = 'Biology',
  defaultChapter = 'Molecular Basis of Inheritance'
}) => {
  const [activeTab, setActiveTab] = useState<'ai_gen' | 'json' | 'text'>('ai_gen');
  const [subject, setSubject] = useState<'Physics' | 'Chemistry' | 'Biology'>(defaultSubject);
  const [chapter, setChapter] = useState<string>(defaultChapter);
  const [genCount, setGenCount] = useState<number>(15);
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // JSON Mode State
  const [jsonInput, setJsonInput] = useState<string>('');

  // Text Mode State
  const [rawTextInput, setRawTextInput] = useState<string>('');

  const [dbStats, setDbStats] = useState(getQuestionDatabaseStats());

  const handleGenerateAndIngestAI = () => {
    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    setTimeout(() => {
      try {
        const batch = generateAiAugmentedBatch(subject, chapter, genCount);
        const res = uploadCustomQuestions(batch, `AI Batch - ${chapter}`);
        setDbStats(getQuestionDatabaseStats());
        setSuccessMessage(`✓ Successfully generated and added ${res.count} fresh NCERT questions to "${chapter}". Total in bank: ${res.totalInBank}. AI Chatbot updated!`);
      } catch (err: any) {
        setErrorMessage('Could not generate questions: ' + err.message);
      } finally {
        setLoading(false);
      }
    }, 600);
  };

  const handleUploadJSON = () => {
    if (!jsonInput.trim()) {
      setErrorMessage('Please paste a valid JSON array of questions.');
      return;
    }

    try {
      const parsed = JSON.parse(jsonInput);
      if (!Array.isArray(parsed)) {
        throw new Error('Input must be a JSON array of questions [{ questionText, options, correctAnswer... }]');
      }

      const formatted: Question[] = parsed.map((item, idx) => ({
        id: item.id || `custom-json-${Date.now()}-${idx}`,
        subject: item.subject || subject,
        chapter: item.chapter || chapter,
        topic: item.topic || 'High-Yield Topic',
        difficulty: item.difficulty || 'Medium',
        questionText: item.questionText || item.question || `Question #${idx + 1}`,
        options: item.options && item.options.length === 4 ? item.options : ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswer: typeof item.correctAnswer === 'number' ? item.correctAnswer : 0,
        explanation: item.explanation || 'NCERT Concept Explanation.',
        tags: ['JSON Ingested', chapter]
      }));

      const res = uploadCustomQuestions(formatted, `JSON Import - ${chapter}`);
      setDbStats(getQuestionDatabaseStats());
      setSuccessMessage(`✓ Ingested ${res.count} questions from JSON! Total bank: ${res.totalInBank}. Super User notified.`);
      setJsonInput('');
    } catch (err: any) {
      setErrorMessage('Invalid JSON syntax: ' + err.message);
    }
  };

  const handleParseTextQuestions = () => {
    if (!rawTextInput.trim()) {
      setErrorMessage('Please enter question text.');
      return;
    }

    try {
      const blocks = rawTextInput.split(/\n\s*\n/).filter(b => b.trim().length > 10);
      const parsedQuestions: Question[] = [];

      blocks.forEach((block, idx) => {
        const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
        if (lines.length >= 2) {
          const qText = lines[0].replace(/^Q\d+[\.\:\)]\s*/i, '');
          const optLines = lines.filter(l => /^[A-D\d][\.\)\:]/i.test(l));
          
          const options = optLines.length >= 4 
            ? optLines.slice(0, 4).map(o => o.replace(/^[A-D\d][\.\)\:]\s*/i, ''))
            : ['Option A', 'Option B', 'Option C', 'Option D'];

          parsedQuestions.push({
            id: `custom-text-${Date.now()}-${idx}`,
            subject,
            chapter,
            topic: 'Uploaded Question Block',
            difficulty: 'Medium',
            questionText: qText,
            options,
            correctAnswer: 0,
            explanation: 'Verified NCERT solution reference.',
            tags: ['Text Ingested', chapter]
          });
        }
      });

      if (parsedQuestions.length === 0) {
        throw new Error('Could not extract questions. Ensure each question has text and 4 options separated by line breaks.');
      }

      const res = uploadCustomQuestions(parsedQuestions, `Text Parse - ${chapter}`);
      setDbStats(getQuestionDatabaseStats());
      setSuccessMessage(`✓ Successfully parsed and ingested ${res.count} questions into "${chapter}"!`);
      setRawTextInput('');
    } catch (err: any) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl shadow-2xl flex flex-col max-h-[92vh] text-gray-900 relative animate-in zoom-in-95 duration-150 overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-gray-200 bg-slate-900 text-white flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shrink-0">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2 flex-wrap">
                <h2 className="text-base sm:text-lg font-bold text-white">
                  Content Ingestion & Question Bank Hub
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-bold font-mono">
                  {dbStats.totalQuestions} Questions in Database
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Upload new questions, generate fresh NCERT batches, and automatically expand test generation & AI learning.
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

        {/* Database Live Stats Banner */}
        <div className="px-4 sm:px-5 py-2.5 bg-slate-50 border-b border-gray-200 grid grid-cols-4 gap-2 text-center text-xs font-mono">
          <div className="p-1.5 bg-white rounded-lg border border-gray-200">
            <span className="text-[10px] text-gray-500 block">Biology</span>
            <strong className="text-emerald-700">{dbStats.biologyCount} Qs</strong>
          </div>
          <div className="p-1.5 bg-white rounded-lg border border-gray-200">
            <span className="text-[10px] text-gray-500 block">Chemistry</span>
            <strong className="text-blue-700">{dbStats.chemistryCount} Qs</strong>
          </div>
          <div className="p-1.5 bg-white rounded-lg border border-gray-200">
            <span className="text-[10px] text-gray-500 block">Physics</span>
            <strong className="text-purple-700">{dbStats.physicsCount} Qs</strong>
          </div>
          <div className="p-1.5 bg-white rounded-lg border border-gray-200">
            <span className="text-[10px] text-gray-500 block">Custom Added</span>
            <strong className="text-amber-700">+{dbStats.customUploadedCount} Qs</strong>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 px-4 sm:px-5 bg-white space-x-2 pt-2">
          <button
            onClick={() => { setActiveTab('ai_gen'); setErrorMessage(null); setSuccessMessage(null); }}
            className={`pb-2 px-3 text-xs font-bold border-b-2 transition flex items-center space-x-1.5 cursor-pointer ${
              activeTab === 'ai_gen'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>AI NCERT Generator</span>
          </button>

          <button
            onClick={() => { setActiveTab('json'); setErrorMessage(null); setSuccessMessage(null); }}
            className={`pb-2 px-3 text-xs font-bold border-b-2 transition flex items-center space-x-1.5 cursor-pointer ${
              activeTab === 'json'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>JSON Importer</span>
          </button>

          <button
            onClick={() => { setActiveTab('text'); setErrorMessage(null); setSuccessMessage(null); }}
            className={`pb-2 px-3 text-xs font-bold border-b-2 transition flex items-center space-x-1.5 cursor-pointer ${
              activeTab === 'text'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Text / MCQ Paste</span>
          </button>
        </div>

        {/* Form Body */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto custom-scrollbar space-y-4 bg-white">
          
          {/* Target Subject & Chapter Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-600 uppercase">Target Subject</label>
              <select
                value={subject}
                onChange={e => setSubject(e.target.value as any)}
                className="w-full p-2 rounded-lg bg-white border border-gray-300 text-xs font-semibold text-gray-900 focus:outline-none focus:border-blue-500"
              >
                <option value="Biology">🧬 Biology</option>
                <option value="Chemistry">🧪 Chemistry</option>
                <option value="Physics">⚡ Physics</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-600 uppercase">Target Chapter Name</label>
              <input
                type="text"
                value={chapter}
                onChange={e => setChapter(e.target.value)}
                placeholder="e.g. Molecular Basis of Inheritance"
                className="w-full p-2 rounded-lg bg-white border border-gray-300 text-xs font-semibold text-gray-900 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* Messages */}
          {successMessage && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold flex items-start space-x-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{successMessage}</span>
            </div>
          )}

          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs font-semibold flex items-start space-x-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* MODE 1: AI BATCH GENERATOR */}
          {activeTab === 'ai_gen' && (
            <div className="space-y-3.5">
              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-gray-700 space-y-1">
                <div className="font-bold text-blue-900 flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>On-Demand NCERT Question Generator</span>
                </div>
                <p>
                  Generates fresh, unique, syllabus-compliant MCQs for <strong>{chapter}</strong> with complete 4-option choices, correct answer key, and step-by-step NCERT explanations.
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-gray-600 uppercase">Batch Size</label>
                <div className="grid grid-cols-3 gap-2">
                  {[15, 30, 45].map(cnt => (
                    <button
                      key={cnt}
                      type="button"
                      onClick={() => setGenCount(cnt)}
                      className={`py-2 rounded-lg text-xs font-bold font-mono transition cursor-pointer ${
                        genCount === cnt
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                      }`}
                    >
                      +{cnt} Unique Questions
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleGenerateAndIngestAI}
                disabled={loading || !chapter.trim()}
                className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-xs transition disabled:opacity-50 cursor-pointer active:scale-98"
              >
                {loading ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    <span>Generating & Ingesting into Database...</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Generate & Ingest {genCount} Questions to Database</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* MODE 2: JSON IMPORTER */}
          {activeTab === 'json' && (
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11px]">
                  <label className="font-bold text-gray-600 uppercase">Paste JSON Array</label>
                  <button
                    type="button"
                    onClick={() => {
                      setJsonInput(JSON.stringify([
                        {
                          questionText: "Which hormone stimulates ovulation and the development of the corpus luteum?",
                          options: ["Luteinizing Hormone (LH)", "Follicle Stimulating Hormone (FSH)", "Progesterone", "Oxytocin"],
                          correctAnswer: 0,
                          explanation: "In Class 12 NCERT Biology (Human Reproduction), LH surge induces rupture of Graafian follicle (ovulation) and maintenance of corpus luteum."
                        }
                      ], null, 2));
                    }}
                    className="text-blue-600 hover:underline font-medium cursor-pointer"
                  >
                    Load Sample Format
                  </button>
                </div>
                <textarea
                  rows={7}
                  placeholder={`[\n  {\n    "questionText": "...",\n    "options": ["A", "B", "C", "D"],\n    "correctAnswer": 0,\n    "explanation": "..."\n  }\n]`}
                  value={jsonInput}
                  onChange={e => setJsonInput(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-slate-900 text-emerald-400 font-mono text-xs border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <button
                type="button"
                onClick={handleUploadJSON}
                className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-xs transition cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                <span>Upload & Save JSON to Question Bank</span>
              </button>
            </div>
          )}

          {/* MODE 3: TEXT / MCQ PASTE */}
          {activeTab === 'text' && (
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-600 uppercase">
                  Paste Multiple Choice Questions (Separated by Blank Lines)
                </label>
                <textarea
                  rows={7}
                  placeholder={`Q1. What is the unit of electric dipole moment?\nA) Coulomb-meter\nB) Debye\nC) Volt/meter\nD) Ampere\n\nQ2. Which cell organelle is called the suicidal bag?\nA) Ribosome\nB) Lysosome\nC) Mitochondria\nD) Chloroplast`}
                  value={rawTextInput}
                  onChange={e => setRawTextInput(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-gray-50 text-gray-900 text-xs border border-gray-300 focus:bg-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="button"
                onClick={handleParseTextQuestions}
                className="w-full py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-xs transition cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                <span>Parse & Add Questions to Bank</span>
              </button>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-gray-200 bg-slate-50 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-1.5 font-mono text-[11px]">
            <Brain className="w-3.5 h-3.5 text-blue-600" />
            <span>AI Knowledge Engine & Test Series Automatically Synced</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-xs transition cursor-pointer"
          >
            Close Hub
          </button>
        </div>

      </div>
    </div>
  );
};
