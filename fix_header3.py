import re
with open("src/components/Header.tsx", "r", encoding="utf8") as f:
    text = f.read()

pattern = r'      \{\/\* Selected Package Details Modal.*?\}\)\}'
text = re.sub(pattern, '', text, flags=re.DOTALL)
with open("src/components/Header.tsx", "w", encoding="utf8") as f:
    f.write(text)
print("Removed packages modal")
