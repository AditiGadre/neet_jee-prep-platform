import sys
with open('src/components/NeetCollegePredictor.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('3,706 Official MCC All-India Quota', 'Official MCC All-India Quota (Round 1 & 2)')
content = content.replace('MCC AIQ Round 3 Reconstructed Cutoffs', 'MCC AIQ Round 1 & 2 Reconstructed Cutoffs')
content = content.replace('Includes all 3,706 closing cutoffs', 'Includes all closing cutoffs')
content = content.replace('AIQ 15% / Central / Deemed (3.7k)', 'AIQ 15% / Central / Deemed (All)')
content = content.replace('value="Round 3">Round 3 (2026 MCC AIQ & Central Allotment)', 'value="Round 2">Round 2 (2026 MCC AIQ & Central Allotment)')
content = content.replace('MCC AIQ Round 3', 'MCC AIQ (R1/R2)')
content = content.replace('Official AIQ Round 3', 'Official AIQ Round 1 & 2')

with open('src/components/NeetCollegePredictor.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Replaced successfully")
