import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

old_block = '''                            {/* Question Text */}
                            <p className="text-xs text-sky-950 leading-relaxed font-medium whitespace-pre-line">
                              {q.questionText}
                            </p>'''

new_block = '''                            {/* Modern Image Upload */}
                            {q.image && (
                              <div className="w-full max-w-sm mx-auto my-3 p-2 bg-sky-50 rounded-xl border border-sky-100 shadow-sm flex items-center justify-center">
                                <img src={q.image} alt="Question Graphic" className="max-h-64 object-contain rounded-lg" />
                              </div>
                            )}
                            
                            {/* Question Text */}
                            <p className="text-xs text-sky-950 leading-relaxed font-medium whitespace-pre-line">
                              {q.questionText}
                            </p>'''

content = content.replace(old_block, new_block)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done")
