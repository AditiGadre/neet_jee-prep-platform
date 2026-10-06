with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    'className="text-xs text-sky-950 leading-relaxed font-medium"',
    'className="text-xs text-sky-950 leading-relaxed font-medium whitespace-pre-line"'
)
content = content.replace(
    'className="font-medium text-sky-950 leading-snug line-clamp-3"',
    'className="font-medium text-sky-950 leading-snug line-clamp-3 whitespace-pre-line"'
)
content = content.replace(
    'className="line-clamp-3"',
    'className="line-clamp-3 whitespace-pre-line"'
)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
