import re

with open("src/components/AdminSection.tsx", "r", encoding="utf8") as f:
    text = f.read()

text = text.replace("  Download, Upload, FileText,\n} from 'lucide-react';", "} from 'lucide-react';")

with open("src/components/AdminSection.tsx", "w", encoding="utf8") as f:
    f.write(text)

print("Removed duplicate icon imports")
