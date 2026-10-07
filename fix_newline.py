import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

bad_str = "rawContent.split('\n')"
good_str = "rawContent.split('\\n')"

content = content.replace("rawContent.split('\n').map(", "rawContent.split('\\n').map(")

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
