import re

with open("src/components/AdminSection.tsx", "r", encoding="utf8") as f:
    text = f.read()

# Replace / 10 with / 45
text = text.replace("/ 10))}</span>", "/ 45))}</span>")

# Replace * 10 with * 45
text = text.replace(".slice((studioPage - 1) * 10, studioPage * 10)", ".slice((studioPage - 1) * 45, studioPage * 45)")

# Replace handleDeleteQuestion
old_delete = """  const handleDeleteQuestion = async (questionIdx: number) => {
    if (isSyncingAction) return;
    if (!window.confirm("Are you sure you want to delete this question from the paper?")) return;

    setIsSyncingAction(true);
    try {
      const optimistic = [...sundayQuestions];
      optimistic.splice(questionIdx, 1);
      setSundayQuestions(optimistic);"""

new_delete = """  const handleDeleteQuestion = async (questionIdx: number) => {
    if (isSyncingAction) return;
    if (!window.confirm("Are you sure you want to permanently delete this question from the platform? It will be removed from the bank and never appear in swaps again.")) return;

    setIsSyncingAction(true);
    try {
      const currentQ = sundayQuestions[questionIdx];
      if (currentQ) {
        const bannedStr = localStorage.getItem('agy_banned_questions') || '[]';
        const banned = new Set(JSON.parse(bannedStr));
        banned.add(currentQ.id);
        localStorage.setItem('agy_banned_questions', JSON.stringify([...banned]));
      }

      const optimistic = [...sundayQuestions];
      optimistic.splice(questionIdx, 1);
      setSundayQuestions(optimistic);"""

text = text.replace(old_delete, new_delete)

with open("src/components/AdminSection.tsx", "w", encoding="utf8") as f:
    f.write(text)

print("Updated pagination to 45 and delete logic")
