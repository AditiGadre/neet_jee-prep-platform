import re
from datetime import datetime, timedelta

file_path = 'src/data/sundayPlannerTests.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def shift(m):
    date_str = m.group(1)
    d = datetime.strptime(date_str, '%Y-%m-%d')
    new_d = d + timedelta(days=7)
    return "dateStr: '" + new_d.strftime('%Y-%m-%d') + "'"

new_content = re.sub(r"dateStr:\s*'([^']+)'", shift, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Shifted dates")
