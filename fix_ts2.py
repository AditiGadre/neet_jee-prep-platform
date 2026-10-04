import re

with open("src/components/AdminSection.tsx", "r", encoding="utf8") as f:
    text = f.read()

text = re.sub(r'Trash2\s*\} from \'lucide-react\';', '} from \'lucide-react\';', text)

with open("src/components/AdminSection.tsx", "w", encoding="utf8") as f:
    f.write(text)

with open("src/components/EnrollmentGate.tsx", "r", encoding="utf8") as f:
    text2 = f.read()

text2 = re.sub(r'packageId: \'online-cbt\',\s*packageName: \'Online CBT All-India Test Series\',\s*packagePrice: \'Free\',\s*enrolledAt: new Date\(\)\.toISOString\(\),\s*', 'packageId: "online-cbt",\n      packageName: "Online CBT",\n      packagePrice: "Free",\n      enrolledAt: new Date().toISOString(),\n      read: false\n    });', text2)

# In case there are stray commas or semicolon issues, let's restore it completely and use regex better.
