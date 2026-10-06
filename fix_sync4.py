import re

with open('src/services/authoritativeCloudService.ts', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r'(version:\s*\(\(copy\[questionIdx\]\s*as\s*any\)\?\.version\s*\|\|\s*0\)\s*\+\s*1\s*\};\s*)')

new_code = r'''\1
    if (updatedFields.clearLegacyDiagram || (updatedFields.hasOwnProperty("image") && updatedFields.image !== copy[questionIdx].image)) {
      delete copy[questionIdx].diagramSvg;
      delete (copy[questionIdx] as any).diagram;
      delete (copy[questionIdx] as any).question_diagram;
      delete (copy[questionIdx] as any).imageUrl;
    }
    
    if (!copy[questionIdx].image) delete copy[questionIdx].image;
    if (!copy[questionIdx].solutionImage) delete copy[questionIdx].solutionImage;
'''

content, count = pattern.subn(new_code, content)
print("Replaced count:", count)

with open('src/services/authoritativeCloudService.ts', 'w', encoding='utf-8') as f:
    f.write(content)
