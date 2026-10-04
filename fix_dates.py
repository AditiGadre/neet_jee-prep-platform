with open("src/components/TestSeriesSection.tsx", "r", encoding="utf8") as f:
    text = f.read()

text = text.replace("04 Oct", "11 Oct")
text = text.replace("04 October", "11 October")

with open("src/components/TestSeriesSection.tsx", "w", encoding="utf8") as f:
    f.write(text)
print("Updated UI dates")
