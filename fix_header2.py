import re
with open("src/components/Header.tsx", "r", encoding="utf8") as f:
    text = f.read()

pattern = r'            \{\/\* Packages Dropdown Button \*\/\}.*?\{\/\* Downloads Status \*\/\}'
new_text = r'            {/* Downloads Status */}'
text = re.sub(pattern, new_text, text, flags=re.DOTALL)
with open("src/components/Header.tsx", "w", encoding="utf8") as f:
    f.write(text)
print("Removed packages dropdown button")
