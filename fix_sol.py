import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

old_sol_display = '''                                  <p className="font-medium text-sky-950 leading-snug line-clamp-3 whitespace-pre-line">
                                    {formatMathAndFormulas(sq.questionText)}
                                  </p>'''

new_sol_display = '''                                  <p className="font-medium text-sky-950 leading-snug line-clamp-3 whitespace-pre-line">
                                    {formatMathAndFormulas(sq.questionText)}
                                  </p>
                                  {sq.solutionImage && (
                                    <div className="mt-2">
                                      <img src={sq.solutionImage} alt="Solution Graphic" className="max-h-32 rounded border border-emerald-200" />
                                    </div>
                                  )}'''

# actually wait, that's sq which is the swap candidate. 
# We want the main question's solution:
# Let's search for "q.explanation" in the normal view.

old_expl = '''                            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                                Explanation
                              </span>
                              <p className="text-xs text-emerald-950 leading-relaxed font-medium">
                                {q.explanation || 'No detailed explanation provided.'}
                              </p>
                            </div>'''

new_expl = '''                            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                                Explanation
                              </span>
                              <p className="text-xs text-emerald-950 leading-relaxed font-medium">
                                {q.explanation || 'No detailed explanation provided.'}
                              </p>
                              {q.solutionImage && (
                                <div className="mt-3">
                                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">Solution Image</span>
                                  <img src={q.solutionImage} alt="Solution Graphic" className="max-h-40 rounded shadow-sm object-contain" />
                                </div>
                              )}
                            </div>'''

content = content.replace(old_expl, new_expl)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated explanation successfully")
