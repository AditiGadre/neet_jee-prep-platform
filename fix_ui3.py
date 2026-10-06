import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# I will just regex search for the block and replace it
# Look for: {editForm.hasLegacyDiagram && !editForm.clearLegacyDiagram && (
# ending with: )}

pattern = re.compile(r'\{editForm\.hasLegacyDiagram && !editForm\.clearLegacyDiagram && \([\s\S]*?\)\}')

new_code = r'''{!editForm.clearLegacyDiagram && (
                                  <div className="mt-3 p-2 bg-rose-50/80 border border-rose-200 rounded flex items-center justify-between">
                                    <span className="text-xs font-bold text-rose-800">Trouble with an old image?</span>
                                    <button type="button" onClick={() => setEditForm({...editForm, image: undefined, solutionImage: undefined, clearLegacyDiagram: true})} className="px-3 py-1.5 bg-rose-600 text-white text-xs font-bold rounded shadow-sm hover:bg-rose-700">Force Clear ALL Pre-existing Images</button>
                                  </div>
                                )}
                                {editForm.clearLegacyDiagram && (
                                  <div className="mt-3 p-2 bg-emerald-50 border border-emerald-200 rounded text-emerald-800 text-xs font-bold text-center">
                                    All pre-existing images/diagrams flagged for deletion upon save!
                                  </div>
                                )}'''

content, count = pattern.subn(new_code, content)
print("Replaced UI count:", count)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
