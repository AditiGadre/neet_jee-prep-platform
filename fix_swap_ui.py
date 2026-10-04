with open("src/components/AdminSection.tsx", "r", encoding="utf8") as f:
    text = f.read()

import re

# Add pendingSwapId state
if "const [pendingSwapId, setPendingSwapId] = useState<string | null>(null);" not in text:
    text = text.replace("const [activeSwapIdx, setActiveSwapIdx] = useState<number | null>(null);", 
                        "const [activeSwapIdx, setActiveSwapIdx] = useState<number | null>(null);\n  const [pendingSwapId, setPendingSwapId] = useState<string | null>(null);")

# Update handleStartSwapMenu
text = text.replace("setActiveSwapIdx(null);\n      setSwapCandidates([]);", "setActiveSwapIdx(null);\n      setSwapCandidates([]);\n      setPendingSwapId(null);")

# Update handleExecuteSpecificSwap
text = text.replace("setActiveSwapIdx(null);\n    setSwapCandidates([]);", "setActiveSwapIdx(null);\n    setSwapCandidates([]);\n    setPendingSwapId(null);")

# Replace swap dropdown UI
old_ui = """                                {swapCandidates.map(c => (
                                  <div 
                                    key={c.id} 
                                    onClick={(e) => { e.preventDefault(); handleExecuteSpecificSwap(originalIdx, c.id); }}
                                    className="p-3 hover:bg-blue-50 border-b border-slate-100 cursor-pointer text-xs text-slate-700 last:border-0 transition-colors"
                                  >
                                    <div className="line-clamp-2">{c.questionText}</div>
                                  </div>
                                ))}"""

new_ui = """                                {swapCandidates.map(c => (
                                  <div 
                                    key={c.id} 
                                    onClick={(e) => { e.preventDefault(); setPendingSwapId(c.id); }}
                                    className={`p-3 border-b border-slate-100 cursor-pointer text-xs transition-colors last:border-0 ${pendingSwapId === c.id ? 'bg-blue-100 text-blue-900 shadow-inner' : 'hover:bg-blue-50 text-slate-700'}`}
                                  >
                                    <div className="line-clamp-2">{c.questionText}</div>
                                  </div>
                                ))}
                                {pendingSwapId && (
                                  <div className="p-2 sticky bottom-0 bg-white border-t border-slate-200">
                                    <button 
                                      onClick={() => handleExecuteSpecificSwap(originalIdx, pendingSwapId)}
                                      className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-sm"
                                    >
                                      Confirm Swap
                                    </button>
                                  </div>
                                )}"""

text = text.replace(old_ui, new_ui)

with open("src/components/AdminSection.tsx", "w", encoding="utf8") as f:
    f.write(text)
print("Updated swap UI")
