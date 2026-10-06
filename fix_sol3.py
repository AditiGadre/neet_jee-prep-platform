import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

old_code = '''                              <div className="mt-3">
                                <DetailedSolutionViewer
                                  explanation={q.explanation}
                                  correctAnswer={q.correctAnswer}
                                  options={q.options}
                                  subject={q.subject}
                                  chapter={q.chapter}
                                />
                              </div>'''

new_code = '''                              <div className="mt-3">
                                <DetailedSolutionViewer
                                  explanation={q.explanation}
                                  correctAnswer={q.correctAnswer}
                                  options={q.options}
                                  subject={q.subject}
                                  chapter={q.chapter}
                                  solutionImage={q.solutionImage}
                                />
                              </div>'''

content, count = re.subn(re.escape(old_code), new_code, content)
print("Replaced count:", count)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
