import re

with open("src/components/AdminSection.tsx", "r", encoding="utf8") as f:
    text = f.read()

bad = """).join('
');"""

good = """).join('\\n');"""

text = text.replace(bad, good)

# Also fix the other backticks if they are annoying but backticks can span multiple lines so it's fine,
# but let's make it standard one-line backticks.

text = text.replace("`Paper: ${t.code}\nTitle: ${t.title}\n\n`", "`Paper: ${t.code}\\nTitle: ${t.title}\\n\\n`")
text = text.replace("`Q${i+1}. ${q.questionText}\nAns: ${q.correctAnswer}\n`", "`Q${i+1}. ${q.questionText}\\nAns: ${q.correctAnswer}\\n`")


with open("src/components/AdminSection.tsx", "w", encoding="utf8") as f:
    f.write(text)

print("Fixed newlines")
