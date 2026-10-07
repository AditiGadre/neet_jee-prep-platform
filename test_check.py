import re

with open('src/components/TestSeriesSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

print("Checking checkAdminAccess")
