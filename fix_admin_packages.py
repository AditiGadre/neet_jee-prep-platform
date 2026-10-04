import re
with open("src/components/AdminSection.tsx", "r", encoding="utf8") as f:
    text = f.read()

# 1. Remove the Package Distribution Summary Card completely.
# It is around line 4210.
start_str = "              {/* Package Distribution Summary Card */}"
end_str = "              {/* Candidate Cards */}"
start_idx = text.find(start_str)
end_idx = text.find(end_str)
if start_idx != -1 and end_idx != -1:
    text = text[:start_idx] + text[end_idx:]

# 2. Remove price from Candidate Cards
text = re.sub(r'const pkg = cand\.selectedPackage \|\| \{.*?name: \'Online CBT All-India Test Series\'.*?price: \'\?2,999\'.*?enrolledAt: cand\.enrolledAt.*?  \};', 
              'const pkg = { name: "General Registration", price: "Free", enrolledAt: cand.enrolledAt };', text, flags=re.DOTALL)

text = re.sub(r'const pkg = cand\.selectedPackage \|\| \{.*?price: \'.*?2,999\'.*?\};', 
              'const pkg = { name: "General Registration", price: "Free", enrolledAt: cand.enrolledAt };', text, flags=re.DOTALL)

text = re.sub(r'<span className="font-mono text-emerald-700 font-bold">\{pkg\.price\}</span>', '', text)
text = re.sub(r'<span className="font-mono font-bold text-emerald-700">\{notif\.packagePrice \|\| \'Free\'\}</span>', '', text)
text = re.sub(r'<span className="text-emerald-400 font-bold font-mono">.*?\{adminNotifications\[0\]\.packagePrice \|\| \'Free\'\}.*?</span>', '', text, flags=re.DOTALL)

with open("src/components/AdminSection.tsx", "w", encoding="utf8") as f:
    f.write(text)
print("Removed packages UI from Admin")
