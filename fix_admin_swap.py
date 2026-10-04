with open("src/components/AdminSection.tsx", "r", encoding="utf8") as f:
    text = f.read()

# The call looks like:
# const result = await swapSingleQuestionWithBank(selectedPlannerPreset, questionIdx, undefined, currentPaper);
text = text.replace(
    "const result = await swapSingleQuestionWithBank(selectedPlannerPreset, questionIdx, undefined, currentPaper);",
    "const result = await swapSingleQuestionWithBank(selectedPlannerPreset, questionIdx, undefined, currentPaper, replacementId);"
)

with open("src/components/AdminSection.tsx", "w", encoding="utf8") as f:
    f.write(text)

print("Updated AdminSection to pass replacementId")
