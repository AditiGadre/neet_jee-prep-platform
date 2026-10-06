with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

target = '''      const updatedQ: Question = {
        ...targetQ,
        questionText: formSnapshot.questionText,
        options: [...formSnapshot.options],
        correctAnswer: formSnapshot.correctAnswer,
        explanation: formSnapshot.explanation,
        image: formSnapshot.image,
        solutionImage: formSnapshot.solutionImage
      };'''

replacement = '''      const updatedQ: Question = {
        ...targetQ,
        questionText: formSnapshot.questionText,
        options: [...formSnapshot.options],
        correctAnswer: formSnapshot.correctAnswer,
        explanation: formSnapshot.explanation,
        image: formSnapshot.image,
        solutionImage: formSnapshot.solutionImage
      };
      
      if (formSnapshot.clearLegacyDiagram || (formSnapshot.image !== targetQ.image && formSnapshot.image)) {
        delete updatedQ.diagramSvg;
        delete (updatedQ as any).diagram;
        delete (updatedQ as any).question_diagram;
        delete (updatedQ as any).imageUrl;
      }
      
      if (!updatedQ.image) delete updatedQ.image;
      if (!updatedQ.solutionImage) delete updatedQ.solutionImage;'''

content = content.replace(target, replacement)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done")
