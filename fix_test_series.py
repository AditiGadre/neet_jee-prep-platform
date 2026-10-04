
import re

with open("src/components/TestSeriesSection.tsx", "r", encoding="utf-8") as f:
    code = f.read()

old_str = "localCustomPapers[paperLookupKey] || localCustomPapers[mock.code] || localCustomPapers[paperLookupKey.toLowerCase()] || localCustomPapers[mock.code.toLowerCase()];"
new_str = "localCustomPapers[paperLookupKey] || localCustomPapers[paperLookupKey.toLowerCase()];"

code = code.replace(old_str, new_str)
old_str2 = "const customPaper = localCustomPapers[paperLookupKey] || localCustomPapers[mock.code] || \nlocalCustomPapers[paperLookupKey.toLowerCase()] || localCustomPapers[mock.code.toLowerCase()];"
code = code.replace(old_str2, new_str)

with open("src/components/TestSeriesSection.tsx", "w", encoding="utf-8") as f:
    f.write(code)

