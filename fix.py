import sys

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    "const bannedStr = localStorage.getItem('agy_banned_questions') || '[]';",
    "// removed"
)

content = content.replace(
    "const banned = new Set(JSON.parse(bannedStr));",
    "let banned = new Set(); try { const bStr = localStorage.getItem('agy_banned_questions'); if (bStr) banned = new Set(JSON.parse(bStr)); } catch(e) {}"
)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
