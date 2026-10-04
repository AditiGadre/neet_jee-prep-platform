import json
with open(r'C:\Users\aditi\.gemini\antigravity\brain\0a09a07a-f09b-429b-ac6e-840602e2e293\.system_generated\logs\transcript_full.jsonl', 'r', encoding='utf-8') as f:
    for line in f:
        data = json.loads(line)
        content = data.get('content', '')
        if len(content) > 1000:
            print(f"Length: {len(content)}, Source: {data.get('source')}, Type: {data.get('type')}")
            print(content[:200])
