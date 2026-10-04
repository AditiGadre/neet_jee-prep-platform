import re

with open("src/components/Header.tsx", "r", encoding="utf8") as f:
    text = f.read()

# Replace neetPackages array with empty array
text = re.sub(r'const neetPackages = \[.*?\];', 'const neetPackages: any[] = [];', text, flags=re.DOTALL)
# Remove the dropdown open logic entirely
text = re.sub(r'\{packagesDropdownOpen && \(.*?\)\}  \{/\* Downloads Status \*/\}', '{/* Downloads Status */}', text, flags=re.DOTALL)

with open("src/components/Header.tsx", "w", encoding="utf8") as f:
    f.write(text)

with open("src/components/SuperUserModal.tsx", "r", encoding="utf8") as f:
    text = f.read()

text = re.sub(r' \(\{enrolledStudent\.selectedPackage\.price\}\)', '', text)
with open("src/components/SuperUserModal.tsx", "w", encoding="utf8") as f:
    f.write(text)

print("Cleaned up remaining package references in UI")
