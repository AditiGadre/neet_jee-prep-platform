with open('src/utils/pdfDownloader.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('q.image && !q.diagramSvg', 'q.image')

with open('src/utils/pdfDownloader.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done pdfDownloader")
