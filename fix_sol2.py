import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

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
                              <p className="text-xs text-emerald-950 leading-relaxed font-medium whitespace-pre-line">
                                {q.explanation || 'No detailed explanation provided.'}
                              </p>
                              {q.solutionImage && (
                                <div className="mt-3 p-2 bg-white rounded-lg border border-emerald-100 flex flex-col items-center justify-center">
                                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block mb-2">Attached Solution Image</span>
                                  <img src={q.solutionImage} alt="Solution Graphic" className="max-h-48 rounded shadow-sm object-contain" />
                                </div>
                              )}
                            </div>'''

content, count = re.subn(re.escape(old_expl), new_expl, content)
print("Replaced explanation count:", count)

if count == 0:
    # Let's try finding the block with regex
    pattern = re.compile(r'<div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">[\s\S]*?\{q\.explanation \|\| \'No detailed explanation provided\.\'\}[\s\S]*?<\/p>\s*<\/div>')
    content, count = pattern.subn(new_expl, content)
    print("Replaced explanation regex count:", count)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
