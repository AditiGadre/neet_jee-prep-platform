import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add button
btn_pattern = r"(<label className=\"px-3 py-1\.5 rounded-lg bg-sky-600 hover:bg-sky-700.*?Parse PDF/Word.*?</label>)"
btn_new = r"\1\n                    <button onClick={() => setIsQuestionBankModalOpen(true)} className=\"px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-[10px] uppercase tracking-wide flex items-center gap-1 shadow-md transition cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 active:scale-95\"><FileText className=\"w-3.5 h-3.5\" /> Question Bank ({storedQuestions.length})</button>"
content = re.sub(btn_pattern, btn_new, content)

# Add Modal
modal_pattern = r"(</button>\s*</div>\s*</div>\s*</div>\s*</div>\s*</div>\s*\)$)"

modal_new = '''
      {/* Question Bank Modal */}
      {isQuestionBankModalOpen && (
        <div className="fixed inset-0 z-[60] bg-sky-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-4xl bg-sky-50 rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
            <div className="p-4 border-b border-sky-200 flex items-center justify-between bg-white rounded-t-2xl">
              <h3 className="font-bold text-sky-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-500" /> Stored Question Bank
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                     if (confirm('Clear all stored questions?')) {
                        setStoredQuestions([]);
                        localStorage.removeItem('admin_question_bank');
                     }
                  }}
                  className="px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-700 text-xs font-bold rounded-lg transition"
                >
                  Clear All
                </button>
                <button onClick={() => setIsQuestionBankModalOpen(false)} className="p-1.5 hover:bg-stone-100 rounded-full transition">
                  <X className="w-5 h-5 text-stone-500" />
                </button>
              </div>
            </div>
            <div className="p-4 overflow-y-auto flex-1 bg-sky-50/50">
              {storedQuestions.length === 0 ? (
                <div className="text-center p-8 text-sky-600/60 font-medium">No questions stored yet. Use Parse PDF/Word to extract questions.</div>
              ) : (
                <div className="space-y-4">
                  {storedQuestions.map((q, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-sky-100 shadow-sm relative">
                      <p className="text-sm font-medium text-sky-900 whitespace-pre-line mb-3">{q.questionText}</p>
                      <button
                        onClick={() => {
                          const updated = [...sundayQuestions];
                          updated.push(q);
                          setSundayQuestions(updated);
                          setPaperRevision(prev => prev + 1);
                          alert('Added to the bottom of the current paper!');
                        }}
                        className="absolute top-4 right-4 px-3 py-1.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 text-xs font-bold rounded-lg transition"
                      >
                        + Add to Paper
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
'''

content = re.sub(r"(</button>\s*</div>\s*</div>\s*</div>\s*</div>\s*</div>\s*\);?\s*};\s*$)", modal_new, content)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Modal added!")
