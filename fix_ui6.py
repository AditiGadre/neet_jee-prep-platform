import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'\)\} className="text-xs text-rose-600 hover:underline font-bold">Delete Legacy Diagram</button>\s*</div>\s*\)\}', "", content)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Regex replaced!")
