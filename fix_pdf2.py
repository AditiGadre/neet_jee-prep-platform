import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    script = f.read()

script = script.replace('Math.min(lines.length, 45)', 'Math.min(lines.length, 200)')

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(script)
