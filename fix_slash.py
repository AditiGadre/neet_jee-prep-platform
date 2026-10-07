import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(r' className=\"px-3', ' className="px-3')
content = content.replace(r'active:scale-95\"><FileText', 'active:scale-95"><FileText')
content = content.replace(r'className=\"w-3.5 h-3.5\" />', 'className="w-3.5 h-3.5" />')

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
