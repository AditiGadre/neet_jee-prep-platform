import re

with open("src/services/authoritativeCloudService.ts", "r", encoding="utf8") as f:
    text = f.read()

# Modify the signature
old_sig = """export async function swapSingleQuestionWithBank(
  paperCode: string,
  questionIdx: number,
  targetChapterOverride: string | undefined,
  currentPaper: SyncedSundayPaper,
  adminUser: string = 'Institutional Master Admin'
): Promise<SyncOperationResult> {"""

new_sig = """export async function swapSingleQuestionWithBank(
  paperCode: string,
  questionIdx: number,
  targetChapterOverride: string | undefined,
  currentPaper: SyncedSundayPaper,
  specificReplacementId?: string,
  adminUser: string = 'Institutional Master Admin'
): Promise<SyncOperationResult> {"""
text = text.replace(old_sig, new_sig)

# Modify the replacement logic
old_logic = """  const replacement = candidates.length > 0
    ? candidates[Math.floor(Math.random() * candidates.length)]
    : (bank.length > 0 ? bank[Math.floor(Math.random() * bank.length)] : currentQ);"""

new_logic = """  let replacement = null;
  if (specificReplacementId) {
    replacement = bank.find(q => q.id === specificReplacementId) || currentQ;
  } else {
    replacement = candidates.length > 0
      ? candidates[Math.floor(Math.random() * candidates.length)]
      : (bank.length > 0 ? bank[Math.floor(Math.random() * bank.length)] : currentQ);
  }"""
text = text.replace(old_logic, new_logic)

with open("src/services/authoritativeCloudService.ts", "w", encoding="utf8") as f:
    f.write(text)

print("Updated swapSingleQuestionWithBank to support specificReplacementId")
