with open('src/utils/pdfDownloader.ts', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('export function downloadTestPaperPDF')
if idx != -1:
    print(text[idx:idx+2000])
