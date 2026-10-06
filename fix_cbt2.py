with open('src/components/CBTTestModal.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('question.image && !question.diagramSvg', 'question.image')

with open('src/components/CBTTestModal.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done CBTTestModal")
