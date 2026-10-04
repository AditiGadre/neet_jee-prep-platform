with open("src/components/Header.tsx", "r", encoding="utf8") as f:
    text = f.read()

import re
# 1. Remove the Packages Dropdown Button entirely
start_str = "            {/* Packages Dropdown Button */}"
end_str = "            {/* Downloads Status */}"
start_idx = text.find(start_str)
end_idx = text.find(end_str)
if start_idx != -1 and end_idx != -1:
    text = text[:start_idx] + text[end_idx:]

# 2. Remove the Selected Package Details Modal entirely
start_str2 = "      {/* Selected Package Details Modal - Mounted directly into body to break out of header stacking context */}"
end_str2 = "    </header>"
start_idx2 = text.find(start_str2)
end_idx2 = text.rfind(end_str2)
if start_idx2 != -1 and end_idx2 != -1:
    text = text[:start_idx2] + text[end_idx2:]

with open("src/components/Header.tsx", "w", encoding="utf8") as f:
    f.write(text)
print("Removed packages safely")
