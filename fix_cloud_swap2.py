with open("src/services/authoritativeCloudService.ts", "r", encoding="utf8") as f:
    text = f.read()

# Replace how 'bank' is fetched in swapSingleQuestionWithBank
old_bank_logic = """  const bank = getUnifiedQuestionBank(sub, ch.length > 0 ? ch : undefined);
  const existingIds = new Set(currentPaper.questions.map(q => q.id));
  const candidates = bank.filter(q => !existingIds.has(q.id) && q.questionText !== currentQ.questionText);

  let replacement = null;
  if (specificReplacementId) {
    replacement = bank.find(q => q.id === specificReplacementId) || currentQ;
  }"""

new_bank_logic = """  const bank = getUnifiedQuestionBank(sub, ch.length > 0 ? ch : undefined);
  const fullSubjectBank = getUnifiedQuestionBank(sub);
  const existingIds = new Set(currentPaper.questions.map(q => q.id));
  const candidates = bank.filter(q => !existingIds.has(q.id) && q.questionText !== currentQ.questionText);

  let replacement = null;
  if (specificReplacementId) {
    replacement = fullSubjectBank.find(q => q.id === specificReplacementId) || currentQ;
  }"""

text = text.replace(old_bank_logic, new_bank_logic)

with open("src/services/authoritativeCloudService.ts", "w", encoding="utf8") as f:
    f.write(text)

print("Fixed swapSingleQuestionWithBank specific ID search")
