with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 'saveCustomSundayPaper(selectedPlannerPreset, paperToSave);\\n' in line:
        lines[i] = line.replace('\\n', '\n')
    elif 'saveCustomSundayPaper(selectedPlannerPreset, currentPaper);\\n' in line:
        lines[i] = line.replace('\\n', '\n')

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.writelines(lines)
