with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('questionText={q.questionText}', 'questionText={q.questionText}\n                                  solutionImage={q.solutionImage}')

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Replaced!")
