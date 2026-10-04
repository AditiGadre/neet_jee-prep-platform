import re
with open("src/components/EnrollmentGate.tsx", "r", encoding="utf8") as f:
    text = f.read()

text = re.sub(r'selectedPackage: enrolledPackage', '', text)
text = re.sub(r'const selectedPkgItem.*?const enrolledPackage.*?enrolledAt.*?};', '', text, flags=re.DOTALL)
text = re.sub(r'packageId:.*?packagePrice:.*?enrolledAt:.*?read: false', 'read: false', text, flags=re.DOTALL)

with open("src/components/EnrollmentGate.tsx", "w", encoding="utf8") as f:
    f.write(text)
print("Removed package logic")
