import re
with open("src/components/AdminSection.tsx", "r", encoding="utf8") as f:
    text = f.read()

# Just forcefully add the import at the top
if "fetchAllStudentsFromCloud" not in text:
    text = text.replace("import {", "import { fetchAllStudentsFromCloud,", 1)
    with open("src/components/AdminSection.tsx", "w", encoding="utf8") as f:
        f.write(text)

with open("src/components/EnrollmentGate.tsx", "r", encoding="utf8") as f:
    text2 = f.read()

text2 = re.sub(r'syncStudentEnrollmentToCloud\(studentData\)', 'syncStudentEnrollmentToCloud(studentData as any)', text2)
with open("src/components/EnrollmentGate.tsx", "w", encoding="utf8") as f:
    f.write(text2)
print("Fixed remaining TS")
