
import re

with open("src/components/AdminSection.tsx", "r", encoding="utf-8") as f:
    code = f.read()

# For the Dropper tracks
code = re.sub(
    r"<option key=\{t\.code\} value=\{t\.code\}>",
    r"<option key={t.id} value={t.id}>",
    code
)

# For the 11th/12th tracks
code = re.sub(
    r"<option key=\{`11TH-\$\{t\.code\}`\} value=\{`11TH-\$\{t\.code\}`\}>",
    r"<option key={t.id} value={t.id}>",
    code
)
code = re.sub(
    r"<option key=\{`12TH-\$\{t\.code\}`\} value=\{`12TH-\$\{t\.code\}`\}>",
    r"<option key={t.id} value={t.id}>",
    code
)

with open("src/components/AdminSection.tsx", "w", encoding="utf-8") as f:
    f.write(code)

