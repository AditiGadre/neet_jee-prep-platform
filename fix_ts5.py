with open("src/components/AdminSection.tsx", "r", encoding="utf8") as f:
    text = f.read()

text = text.replace("syncSundayPaperToCloud,", "fetchAllStudentsFromCloud,\n  syncSundayPaperToCloud,")

with open("src/components/AdminSection.tsx", "w", encoding="utf8") as f:
    f.write(text)
print("Fixed missing import")
