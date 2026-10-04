import json
with open(r'C:\Users\aditi\.gemini\antigravity\brain\0a09a07a-f09b-429b-ac6e-840602e2e293\.system_generated\logs\transcript_full.jsonl', 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        data = json.loads(line)
        content = data.get('content', '')
        print(f"Line {i}: Source={data.get('source')}, Type={data.get('type')}, Length={len(content)}")
