import re
with open("src/data/mockData.ts", "r", encoding="utf8") as f:
    text = f.read()

text = text.replace("category: 'chapter'", "category: 'cwt'")
with open("src/data/mockData.ts", "w", encoding="utf8") as f:
    f.write(text)

with open("src/components/AdminSection.tsx", "r", encoding="utf8") as f:
    text2 = f.read()
text2 = re.sub(r',\s*Trash2\s*\} from \'lucide-react\';', '} from \'lucide-react\';', text2)
with open("src/components/AdminSection.tsx", "w", encoding="utf8") as f:
    f.write(text2)
print("Fixed mock data and trash2")
