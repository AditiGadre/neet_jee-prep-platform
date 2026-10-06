import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

broken = ' className="text-xs text-rose-600 hover:underline font-bold">Delete Legacy Diagram</button>\n                                  </div>\n                                )}'

content = content.replace(broken, "")

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed JSX syntax")
