import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(
    r'(saveCustomSundayPaper\(selectedPlannerPreset, paperToSave\);\s*)(setActionSuccessBanner\(.*?Question #\$\{questionIdx \+ 1\} deleted!\);)',
    r'\1await commitAuthoritativePaperToCloud(paperToSave, paperRevision);\n        setPaperRevision(prev => prev + 1);\n        \2',
    content
)

content = re.sub(
    r'(saveCustomSundayPaper\(selectedPlannerPreset, currentPaper\);\s*)(setActionSuccessBanner\(.*?Question #\$\{questionIdx \+ 1\} swapped specifically!\);)',
    r'\1await commitAuthoritativePaperToCloud(currentPaper, paperRevision);\n      setPaperRevision(prev => prev + 1);\n      \2',
    content
)

content = re.sub(
    r'(saveCustomSundayPaper\(selectedPlannerPreset, currentPaper\);\s*)(setActionSuccessBanner\(.*?Question #\$\{questionIdx \+ 1\} swapped!\);)',
    r'\1await commitAuthoritativePaperToCloud(currentPaper, paperRevision);\n      setPaperRevision(prev => prev + 1);\n      \2',
    content
)

content = re.sub(
    r'(saveCustomSundayPaper\(selectedPlannerPreset, paperToSave\);\s*)(setActionSuccessBanner\(.*?Option \$\{String\.fromCharCode\(65 \+ optIdx\)\} set as key for Q#\$\{idx \+ 1\}\);)',
    r'\1commitAuthoritativePaperToCloud(paperToSave, paperRevision).catch(() => {});\n      setPaperRevision(prev => prev + 1);\n      \2',
    content
)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
