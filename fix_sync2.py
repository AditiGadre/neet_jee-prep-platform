import re

with open('src/services/authoritativeCloudService.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(
    r'updatedFields:\s*\{\s*questionText:\s*string;\s*options:\s*string\[\];\s*correctAnswer:\s*number;\s*explanation:\s*string;\s*image\?:\s*string;\s*solutionImage\?:\s*string;\s*\},',
    'updatedFields: { questionText: string; options: string[]; correctAnswer: number; explanation: string; image?: string; solutionImage?: string; clearLegacyDiagram?: boolean; },',
    content
)

old_body = '''    copy[questionIdx] = {
      ...copy[questionIdx],
      questionText: formatMathAndFormulas(qText),
      options: qOpts,
      correctAnswer: qAns,
      explanation: formatMathAndFormulas(qExpl),
      image: qImage,
      solutionImage: qSolImage,
      updatedAt: new Date().toISOString(),
      updatedBy: adminUser
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
      updatedBy: adminUser
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
print("Updated authoritativeCloudService")
