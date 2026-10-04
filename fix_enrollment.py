import re
with open("src/components/EnrollmentGate.tsx", "r", encoding="utf8") as f:
    text = f.read()

text = re.sub(r'const selectedPkgItem = getPackageById\(selectedPackageId\);', 'const selectedPkgItem = getPackageById("online-cbt");', text)
text = re.sub(r'if \(student\.selectedPackage\?\.id\).*?;', '', text)
text = re.sub(r'const \[selectedPackageId.*?;', '', text, flags=re.DOTALL)
text = re.sub(r'setSelectedPackageId\(initialPackageId\);', '', text)
text = re.sub(r'selected_package: enrolledPackage\.name,', 'selected_package: "Online CBT All-India Test Series",', text)
text = re.sub(r'package_price: enrolledPackage\.price,', 'package_price: 2999,', text)
text = re.sub(r'package_id: enrolledPackage\.id', 'package_id: "online-cbt"', text)

with open("src/components/EnrollmentGate.tsx", "w", encoding="utf8") as f:
    f.write(text)
print("Fixed EnrollmentGate cleanly")
