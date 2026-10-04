import re
with open("src/components/AdminSection.tsx", "r", encoding="utf8") as f:
    text = f.read()

text = text.replace("{notif.packageName}", "{notif.packageName || 'General Registration'}")
text = text.replace("{notif.packagePrice}", "{notif.packagePrice || 'Free'}")
text = text.replace("{adminNotifications[0].packageName}", "{adminNotifications[0].packageName || 'General Registration'}")
text = text.replace("{adminNotifications[0].packagePrice}", "{adminNotifications[0].packagePrice || 'Free'}")

with open("src/components/AdminSection.tsx", "w", encoding="utf8") as f:
    f.write(text)
print("Added fallback for packageName")
