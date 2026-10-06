import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

def robust_banned_list(match):
    return '''let banned = new Set();
        try {
          const bannedStr = localStorage.getItem('agy_banned_questions');
          if (bannedStr) banned = new Set(JSON.parse(bannedStr));
        } catch(e) {
          localStorage.setItem('agy_banned_questions', '[]');
        }'''

content = re.sub(
    r'const bannedStr = localStorage\.getItem\(''agy_banned_questions''\) \|\| ''\[\]'';\s*const banned = new Set\(JSON\.parse\(bannedStr\)\);',
    robust_banned_list,
    content
)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
