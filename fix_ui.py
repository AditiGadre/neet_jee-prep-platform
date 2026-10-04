import sys

with open('src/components/NeetCollegePredictor.tsx', 'r', encoding='utf-8') as f:
    c = f.read()
    
# We will use replace with smaller strings since whitespace might not match perfectly.
c = c.replace('<option value="Round 1">Round 1 (2026 Maharashtra State CAP Allotment)</option>', '<option value="Round 1">Round 1 (State CAP & MCC AIQ)</option>')
c = c.replace('<option value="Round 2">Round 2 (2026 MCC AIQ & Central Allotment)</option>', '<option value="Round 2">Round 2 (State CAP & MCC AIQ)</option>')
c = c.replace('<option value="Round 2">Round 2</option>', '<option value="Round 3">Round 3 (State CAP & MCC AIQ)</option>')

with open('src/components/NeetCollegePredictor.tsx', 'w', encoding='utf-8') as f:
    f.write(c)

print("Updated UI dropdowns!")
