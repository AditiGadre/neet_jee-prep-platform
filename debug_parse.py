import re
from pypdf import PdfReader

def clean_ocr_text(text):
    text = text.replace("ˆ", "^")
    text = text.replace("ji ˆˆ ", "î + ĵ")
    text = text.replace("", "+")
    text = text.replace("", "-")
    text = text.replace("", "=")
    text = text.replace("", "°")
    text = text.replace("jˆ", "ĵ")
    text = text.replace("iˆ", "î")
    text = text.replace("kˆ", "k̂")
    text = text.replace("r⃗", "r⃗")
    return text

pdf_path = r"C:\Users\aditi\Downloads\DOC-20241016-WA0001..pdf"
reader = PdfReader(pdf_path)
total_pages = len(reader.pages)
print(f"Total pages: {total_pages}")

pages_with_text = 0
pages_with_qblocks = 0
first_sample_shown = False

for idx in range(total_pages):
    text = reader.pages[idx].extract_text()
    if not text:
        continue
    pages_with_text += 1

    text = clean_ocr_text(text)

    q_blocks = re.split(r"\n\s*(\d+)\.\s+", text)
    if len(q_blocks) >= 3:
        pages_with_qblocks += 1
        if not first_sample_shown:
            print(f"\n--- First page with a question-like split: page {idx} ---")
            print(repr(text[:800]))
            print(f"\nq_blocks length: {len(q_blocks)}")
            first_sample_shown = True

print(f"\nPages with extractable text: {pages_with_text}")
print(f"Pages where the '\\d+.' split matched (>=3 parts): {pages_with_qblocks}")

if not first_sample_shown:
    print("\nNo page ever matched the question-number pattern. Showing raw text of page 50 for inspection:")
    print(repr(reader.pages[50].extract_text()[:800]))