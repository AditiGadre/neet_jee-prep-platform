import json
import re

transcript_path = r'C:\Users\aditi\.gemini\antigravity\brain\0a09a07a-f09b-429b-ac6e-840602e2e293\.system_generated\logs\transcript_full.jsonl'
output_path = 'full_allotment_r2.csv'

csv_lines = []
with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        data = json.loads(line)
        content = data.get('content', '')
        if 'Allotted Quota' in content:
            lines = content.split('\n')
            for l in lines:
                l = l.strip()
                if l.startswith('Rank,R1 Allotted Quota') or re.match(r'^\d+,', l) or re.match(r'^-,-,-,-,', l):
                    csv_lines.append(l)

# dedup while preserving order
seen = set()
unique_csv = []
for l in csv_lines:
    if l not in seen:
        seen.add(l)
        unique_csv.append(l)

# Append to file
with open(output_path, 'a', encoding='utf-8') as out:
    out.write('\n'.join(unique_csv) + '\n')
print(f'Wrote {len(unique_csv)} lines to {output_path}')
