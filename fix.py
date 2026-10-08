import re
with open('src/utils/pdfDownloader.ts', 'r', encoding='utf-8') as f:
    t = f.read()
t = t.replace(r"\'\'", "''")
with open('src/utils/pdfDownloader.ts', 'w', encoding='utf-8') as f:
    f.write(t)
