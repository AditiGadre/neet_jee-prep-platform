import json
import os
import re

def extract_csv():
    transcript_path = r"C:\Users\aditi\.gemini\antigravity\brain\d85b78a3-f1d3-4561-8fa2-345ae20fcc63\.system_generated\logs\transcript_full.jsonl"
    
    # fallback to transcript.jsonl if full doesn't exist
    if not os.path.exists(transcript_path):
        transcript_path = r"C:\Users\aditi\.gemini\antigravity\brain\d85b78a3-f1d3-4561-8fa2-345ae20fcc63\.system_generated\logs\transcript.jsonl"
        
    csv_lines = []
    header_found = False

    with open(transcript_path, 'r', encoding='utf-8') as f:
        for line in f:
            if not line.strip(): continue
            try:
                data = json.loads(line)
                # We want to extract content from SYSTEM messages that have the CSV (since it was prepended to the system prompt)
                # or USER_INPUT messages.
                content = data.get("content", "")
                if not content: continue
                
                # Split content into lines and look for our CSV pattern
                lines = content.split('\n')
                for l in lines:
                    l = l.strip()
                    # Check for header
                    if l.startswith("SNo,Rank,Allotted Quota"):
                        if not header_found:
                            csv_lines.append(l)
                            header_found = True
                    # Check for data rows (starts with a number, then comma, then number)
                    elif re.match(r'^\d+,\d+,', l):
                        csv_lines.append(l)
            except Exception as e:
                pass

    # Deduplicate lines just in case, while preserving order
    seen = set()
    unique_csv = []
    for line in csv_lines:
        if line not in seen:
            seen.add(line)
            unique_csv.append(line)

    output_path = r"c:\Users\aditi\OneDrive\Desktop\neet_jee-prep-platform\full_allotment.csv"
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(unique_csv))
        
    print(f"Extracted {len(unique_csv)} rows of CSV data to {output_path}")

if __name__ == "__main__":
    extract_csv()
