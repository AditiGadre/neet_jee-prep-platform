with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    text = f.read()
if 'q.image' in text:
    print("Found q.image")
if '<img src={q.image}' in text:
    print("Found img tag for q.image")
else:
    print("NO IMG TAG FOR q.image!")
