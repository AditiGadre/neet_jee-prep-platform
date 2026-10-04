with open("src/components/AdminSection.tsx", "r", encoding="utf8") as f:
    text = f.read()

# Fix the lucide-react import mistake
text = text.replace("import { fetchAllStudentsFromCloud,", "import {")
# Add proper import
text = text.replace("import { syncStudentEnrollmentToCloud,", "import { fetchAllStudentsFromCloud, syncStudentEnrollmentToCloud,")

# Also fix mockData.ts: The valid TestCategory are 'chapter-wise', 'part-syllabus', 'full-syllabus', etc.
with open("src/data/mockData.ts", "r", encoding="utf8") as f:
    text2 = f.read()
text2 = text2.replace("category: 'cwt'", "category: 'chapter-wise'")

with open("src/components/AdminSection.tsx", "w", encoding="utf8") as f:
    f.write(text)
with open("src/data/mockData.ts", "w", encoding="utf8") as f:
    f.write(text2)
print("Fixed imports and mockData")
