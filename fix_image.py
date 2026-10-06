import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update the editForm state type
old_state = '''  const [editForm, setEditForm] = useState<{
    questionText: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    image?: string;
    solutionImage?: string;
  } | null>(null);'''

new_state = '''  const [editForm, setEditForm] = useState<{
    questionText: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    image?: string;
    solutionImage?: string;
    hasLegacyDiagram?: boolean;
    clearLegacyDiagram?: boolean;
  } | null>(null);'''

content = content.replace(old_state, new_state)

# 2. Update initialization
old_init = '''      setEditForm({
        questionText: q.questionText,
        options: [...q.options],
        correctAnswer: q.correctAnswer ?? 0,
        explanation: q.explanation || '',
        image: q.image || '',
        solutionImage: q.solutionImage || ''
      });'''

new_init = '''      setEditForm({
        questionText: q.questionText,
        options: [...q.options],
        correctAnswer: q.correctAnswer ?? 0,
        explanation: q.explanation || '',
        image: q.image || '',
        solutionImage: q.solutionImage || '',
        hasLegacyDiagram: !!(q.diagramSvg || (q as any).diagram || (q as any).question_diagram),
        clearLegacyDiagram: false
      });'''

content = content.replace(old_init, new_init)

# 3. Update handleSaveQuestionEdit
old_save = '''      const updatedQ: Question = {
        ...targetQ,
        questionText: formSnapshot.questionText,
        options: [...formSnapshot.options],
        correctAnswer: formSnapshot.correctAnswer,
        explanation: formSnapshot.explanation,
        image: formSnapshot.image,
        solutionImage: formSnapshot.solutionImage
      };'''

new_save = '''      const updatedQ: Question = {
        ...targetQ,
        questionText: formSnapshot.questionText,
        options: [...formSnapshot.options],
        correctAnswer: formSnapshot.correctAnswer,
        explanation: formSnapshot.explanation,
        image: formSnapshot.image,
        solutionImage: formSnapshot.solutionImage
      };
      
      // Destroy legacy image/diagram fields if explicitly requested or if a new image was uploaded to replace them
      if (formSnapshot.clearLegacyDiagram || (formSnapshot.image && formSnapshot.image !== targetQ.image)) {
        delete updatedQ.diagramSvg;
        delete (updatedQ as any).diagram;
        delete (updatedQ as any).question_diagram;
        delete (updatedQ as any).imageUrl;
      }
      
      // Clean up undefined properties for clean JSON
      if (!updatedQ.image) delete updatedQ.image;
      if (!updatedQ.solutionImage) delete updatedQ.solutionImage;'''

content = content.replace(old_save, new_save)

# 4. Update the UI to show the legacy diagram delete button and actual image preview in normal view
old_ui_image = '''                              {editForm.image && <div className="mt-2 flex items-start gap-2"><img src={editForm.image} alt="Question" className="max-h-20" /><button type="button" onClick={() => setEditForm({...editForm, image: undefined})} className="text-xs text-sky-600 hover:underline">Delete</button></div>}
                            </div>'''

new_ui_image = '''                              {editForm.image && <div className="mt-2 flex items-start gap-2"><img src={editForm.image} alt="Question" className="max-h-20" /><button type="button" onClick={() => setEditForm({...editForm, image: undefined})} className="text-xs text-sky-600 hover:underline">Delete</button></div>}
                              {editForm.hasLegacyDiagram && !editForm.clearLegacyDiagram && (
                                <div className="mt-2 flex items-start gap-2 p-2 bg-rose-50 border border-rose-200 rounded text-rose-800">
                                  <span className="text-xs font-bold">Has Legacy Pre-existing Vector Diagram</span>
                                  <button type="button" onClick={() => setEditForm({...editForm, clearLegacyDiagram: true})} className="text-xs text-rose-600 hover:underline font-bold">Delete Legacy Diagram</button>
                                </div>
                              )}
                            </div>'''

content = content.replace(old_ui_image, new_ui_image)

old_normal_display = '''                          {/* Normal Question Display */}
                          <>
                            {/* Vector Diagram if Available */}
                            {diagramSvg && ('''

new_normal_display = '''                          {/* Normal Question Display */}
                          <>
                            {/* Modern Image if Available */}
                            {q.image && (
                              <div className="p-3 bg-sky-50 rounded-xl border border-sky-200 flex flex-col items-center justify-center">
                                <img src={q.image} alt="Question Graphic" className="max-h-48 rounded shadow-sm object-contain" />
                              </div>
                            )}
                            
                            {/* Vector Diagram if Available */}
                            {diagramSvg && ('''

content = content.replace(old_normal_display, new_normal_display)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated successfully")
