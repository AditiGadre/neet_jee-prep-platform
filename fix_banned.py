import re

with open("src/utils/questionDatabase.ts", "r", encoding="utf8") as f:
    text = f.read()

old_func_start = """export function getUnifiedQuestionBank(subject?: 'Physics' | 'Chemistry' | 'Biology' | 'Mathematics', chapter?: string): Question[] {
  const customList = getCustomQuestions();

  let builtin: Question[] = [];"""

new_func_start = """export function getUnifiedQuestionBank(subject?: 'Physics' | 'Chemistry' | 'Biology' | 'Mathematics', chapter?: string): Question[] {
  const customList = getCustomQuestions();

  let builtin: Question[] = [];"""

# Wait, I can just filter before returning.
old_return = """  return [...customListFiltered, ...builtin];
}"""

new_return = """  let combined = [...customListFiltered, ...builtin];
  try {
    const bannedStr = localStorage.getItem('agy_banned_questions') || '[]';
    const banned = new Set(JSON.parse(bannedStr));
    if (banned.size > 0) {
      combined = combined.filter(q => !banned.has(q.id));
    }
  } catch (e) {}
  return combined;
}"""

text = text.replace(old_return, new_return)

with open("src/utils/questionDatabase.ts", "w", encoding="utf8") as f:
    f.write(text)

print("Updated questionDatabase to filter banned questions")
