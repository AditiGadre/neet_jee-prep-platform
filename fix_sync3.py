import re

with open('src/services/authoritativeCloudService.ts', 'r', encoding='utf-8') as f:
    content = f.read()

old_body = '''    copy[questionIdx] = {
      ...copy[questionIdx],
      questionText: formatMathAndFormulas(qText),
      options: qOpts,
      correctAnswer: qAns,
      explanation: formatMathAndFormulas(qExpl),
      image: qImage,
      solutionImage: qSolImage,
      updatedAt: new Date().toISOString(),
      updatedBy: adminUser,
      version: ((copy[questionIdx] as any)?.version || 0) + 1
    };'''

new_body = '''    copy[questionIdx] = {
      ...copy[questionIdx],
      questionText: formatMathAndFormulas(qText),
      options: qOpts,
      correctAnswer: qAns,
      explanation: formatMathAndFormulas(qExpl),
      image: qImage,
      solutionImage: qSolImage,
      updatedAt: new Date().toISOString(),
      updatedBy: adminUser,
      version: ((copy[questionIdx] as any)?.version || 0) + 1
    };
    
    if (updatedFields.clearLegacyDiagram || (updatedFields.hasOwnProperty("image") && updatedFields.image !== copy[questionIdx].image)) {
      delete copy[questionIdx].diagramSvg;
      delete (copy[questionIdx] as any).diagram;
      delete (copy[questionIdx] as any).question_diagram;
      delete (copy[questionIdx] as any).imageUrl;
    }
    
    if (!copy[questionIdx].image) delete copy[questionIdx].image;
    if (!copy[questionIdx].solutionImage) delete copy[questionIdx].solutionImage;'''

content = content.replace(old_body, new_body)

with open('src/services/authoritativeCloudService.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated body correctly")
