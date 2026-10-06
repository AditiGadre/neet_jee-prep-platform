import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the specific conditional buttons with an unconditional one

old_ui = '''                                {editForm.image && <div className="mt-2 flex items-start gap-2"><img src={editForm.image} alt="Question" className="max-h-20" /><button type="button" onClick={() => setEditForm({...editForm, image: undefined})} className="text-xs text-sky-600 hover:underline">Delete</button></div>}
                                {editForm.hasLegacyDiagram && !editForm.clearLegacyDiagram && (
                                  <div className="mt-2 flex items-start gap-2 p-2 bg-rose-50 border border-rose-200 rounded text-rose-800">
                                    <span className="text-xs font-bold">Has Legacy Pre-existing Vector Diagram</span>
                                    <button type="button" onClick={() => setEditForm({...editForm, clearLegacyDiagram: true})} className="text-xs text-rose-600 hover:underline font-bold">Delete Legacy Diagram</button>
                                  </div>
                                )}'''

new_ui = '''                                {editForm.image && <div className="mt-2 flex items-start gap-2"><img src={editForm.image} alt="Question" className="max-h-20" /><button type="button" onClick={() => setEditForm({...editForm, image: undefined})} className="text-xs text-sky-600 hover:underline">Delete Image</button></div>}
                                
                                {!editForm.clearLegacyDiagram && (
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

content = content.replace(old_ui, new_ui)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated UI with unconditional wipe button")
