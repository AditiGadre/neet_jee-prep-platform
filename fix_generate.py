import re

with open('src/data/sundayPlannerTests.ts', 'r', encoding='utf-8') as f:
    code = f.read()

old1 = "? (getSavedCustomSundayPaper(batch + '-' + test.code) || getSavedCustomSundayPaper(batch + '-' + test.id))"
new1 = "? (getSavedCustomSundayPaper(test.id) || getSavedCustomSundayPaper(batch + '-' + test.code))"

old2 = ": (getSavedCustomSundayPaper(batch + '-' + test.code) || getSavedCustomSundayPaper(test.code) || getSavedCustomSundayPaper(test.id));"
new2 = ": (getSavedCustomSundayPaper(test.id) || getSavedCustomSundayPaper(test.code));"

code = code.replace(old1, new1)
code = code.replace(old2, new2)

with open('src/data/sundayPlannerTests.ts', 'w', encoding='utf-8') as f:
    f.write(code)
