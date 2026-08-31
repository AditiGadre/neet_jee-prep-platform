import os
import re
import json
import urllib.request
import urllib.error
from pypdf import PdfReader

# Supabase Configurations
SUPABASE_URL = "https://emfnqqxsyidicqxnxxxj.supabase.co"
ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtZm5xcXhzeWlkaWNxeG54eHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODczMjk3OTcsImV4cCI6MjEwMjkwNTc5N30.L-yNwKM4F3hOHnjiYjrMm9H9r4xWRTNHPxTjf8yfObg"

def clean_ocr_text(text):
    text = text.replace("ˆ", "^")
    text = text.replace("ji ˆˆ ", "î + ĵ")
    text = text.replace("jˆ", "ĵ")
    text = text.replace("iˆ", "î")
    text = text.replace("kˆ", "k̂")
    text = text.replace("r⃗", "r⃗")
    return text

def parse_and_upload():
    pdf_path = r"C:\Users\aditi\Downloads\DOC-20241016-WA0001..pdf"
    if not os.path.exists(pdf_path):
        print(f"Error: PDF not found at {pdf_path}. Please place the PDF there.")
        return

    print("Opening PDF and reading outline...")
    reader = PdfReader(pdf_path)
    total_pages = len(reader.pages)
    print(f"Total pages in book: {total_pages}")

    # Heuristics: We will extract text and parse questions page by page.
    # To cover the entire book, we'll scan all pages.
    # We identify active chapter and section based on titles on the page.
    active_chapter = "General Physics"
    active_section = "General Practice"

    questions = []
    option_map = {"a": 0, "b": 1, "c": 2, "d": 3}

    print("Parsing all pages... This may take a minute.")

    for idx in range(total_pages):
        text = reader.pages[idx].extract_text()
        if not text:
            continue

        # Clean text
        text = clean_ocr_text(text)

        # Check for chapter header
        # E.g. "Vectors 1", "Motion in one Dimension", "Work, Energy and Power"
        ch_match = re.search(r"\n\s*(Vectors|Units, Dimensions|Motion in one Dimension|Laws of Motion|Work, Energy|Rotational|Gravitation|Thermodynamics|Electrostatics|Magnetism|Optics|Modern Physics)\s+", text)
        if ch_match:
            active_chapter = ch_match.group(1).strip()

        # Parse questions on this page
        # Questions start with a number followed by a dot, e.g. "1. " or "2. "
        q_blocks = re.split(r"\n\s*(\d+)\.\s+", text)
        if len(q_blocks) < 3:
            continue

        for j in range(1, len(q_blocks), 2):
            q_num = int(q_blocks[j])
            q_text_block = q_blocks[j+1]

            # Find options (a), (b), (c), (d)
            opt_a = re.search(r"\(a\)(.*?)(?=\(b\)|\(c\)|\(d\)|\n\s*\d+\.\s+|$)", q_text_block, re.DOTALL)
            opt_b = re.search(r"\(b\)(.*?)(?=\(c\)|\(d\)|\n\s*\d+\.\s+|$)", q_text_block, re.DOTALL)
            opt_c = re.search(r"\(c\)(.*?)(?=\(d\)|\n\s*\d+\.\s+|$)", q_text_block, re.DOTALL)
            opt_d = re.search(r"\(d\)(.*?)(?=\n\s*\d+\.\s+|$)", q_text_block, re.DOTALL)

            q_text = re.split(r"\(a\)", q_text_block)[0].strip()
            q_text = re.sub(r"\[[A-Za-z\s\d,;+–]+\]", "", q_text)
            q_text = q_text.strip().replace("\n", " ")

            opts = ["", "", "", ""]
            if opt_a: opts[0] = opt_a.group(1).strip().replace("\n", " ")
            if opt_b: opts[1] = opt_b.group(1).strip().replace("\n", " ")
            if opt_c: opts[2] = opt_c.group(1).strip().replace("\n", " ")
            if opt_d: opts[3] = opt_d.group(1).strip().replace("\n", " ")

            if opts[0] or opts[1]:
                # We save the raw question
                questions.append({
                    "id": f"{active_chapter.lower().replace(' ', '-')}-q{q_num}",
                    "subject": "Physics",
                    "chapter": active_chapter,
                    "topic": active_section,
                    "difficulty": "Medium",
                    "question_text": q_text,
                    "options": opts,
                    "correct_answer": 0, # Placeholder, will be matched or defaulted
                    "explanation": f"Detailed solution for {active_chapter} Q{q_num}."
                })

    # Filter duplicates
    seen = set()
    unique_qs = []
    for q in questions:
        if q["id"] not in seen:
            seen.add(q["id"])
            unique_qs.append(q)

    print(f"Successfully extracted {len(unique_qs)} questions from the entire book!")

    # Verify database connection
    check_url = f"{SUPABASE_URL}/rest/v1/questions?limit=1"
    headers = {
        "apikey": ANON_KEY,
        "Authorization": f"Bearer {ANON_KEY}",
        "Content-Type": "application/json"
    }

    req = urllib.request.Request(check_url, headers=headers, method="GET")
    try:
        with urllib.request.urlopen(req) as response:
            print("Table 'questions' verified in Supabase! Uploading questions in batches of 50...")
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8")
        print(f"Database error checking table: {e.code} - {e.reason}")
        print(f"Details: {body}")
        return
    except Exception as e:
        print(f"Connection error: {e}")
        return

    # Upload in batches
    batch_size = 50
    upload_url = f"{SUPABASE_URL}/rest/v1/questions"

    for i in range(0, len(unique_qs), batch_size):
        batch = unique_qs[i:i+batch_size]
        payload = json.dumps(batch).encode("utf-8")

        req = urllib.request.Request(
            upload_url,
            data=payload,
            headers={
                "apikey": ANON_KEY,
                "Authorization": f"Bearer {ANON_KEY}",
                "Content-Type": "application/json",
                "Prefer": "resolution=merge-duplicates"
            },
            method="POST"
        )

        try:
            with urllib.request.urlopen(req) as response:
                print(f"Uploaded batch {i // batch_size + 1}/{len(unique_qs) // batch_size + 1} ({len(batch)} questions)")
        except urllib.error.HTTPError as e:
            print(f"Error uploading batch: {e.code} - {e.read().decode('utf-8')}")
        except Exception as e:
            print(f"Error: {e}")

if __name__ == "__main__":
    parse_and_upload()
