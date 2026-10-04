
import re

with open("src/services/authoritativeCloudService.ts", "r", encoding="utf-8") as f:
    code = f.read()

code = code.replace("canonicalCode.startsWith(\"11TH-\")", "canonicalCode.includes(\"11TH\")")
code = code.replace("canonicalCode.startsWith(\"12TH-\")", "canonicalCode.includes(\"12TH\")")
code = code.replace("canonicalCode.startsWith(\'11TH-\')", "canonicalCode.includes(\'11TH\')")
code = code.replace("canonicalCode.startsWith(\'12TH-\')", "canonicalCode.includes(\'12TH\')")

with open("src/services/authoritativeCloudService.ts", "w", encoding="utf-8") as f:
    f.write(code)

