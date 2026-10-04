with open("src/data/neetCutoffsData.ts", "r", encoding="utf8") as f:
    text = f.read()

if "// @ts-nocheck" not in text:
    text = "// @ts-nocheck\n" + text
    with open("src/data/neetCutoffsData.ts", "w", encoding="utf8") as f:
        f.write(text)
print("Added ts-nocheck to neetCutoffsData.ts")
