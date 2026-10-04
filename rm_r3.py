import sys

with open('src/components/NeetCollegePredictor.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('<option value="Round 3">Round 3 (State CAP & MCC AIQ)</option>', '')
c = c.replace("useState<'ALL' | 'Round 1' | 'Round 2' | 'Round 3'>", "useState<'ALL' | 'Round 1' | 'Round 2'>")

with open('src/components/NeetCollegePredictor.tsx', 'w', encoding='utf-8') as f:
    f.write(c)

print('Updated Dropdown')
