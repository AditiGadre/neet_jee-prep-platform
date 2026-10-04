
import re

with open("src/components/AdminSection.tsx", "r", encoding="utf-8") as f:
    code = f.read()

code = code.replace("value={selectedPlannerPreset.toUpperCase()}", "value={selectedPlannerPreset}")

with open("src/components/AdminSection.tsx", "w", encoding="utf-8") as f:
    f.write(code)

