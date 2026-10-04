import re

with open("src/components/AdminSection.tsx", "r", encoding="utf8") as f:
    text = f.read()

old_swap_menu_logic = """    const sub = currentQ.subject || (idx < 45 ? 'Physics' : idx < 90 ? 'Chemistry' : 'Biology');
    const ch = currentQ.chapter || '';
    const bank = getUnifiedQuestionBank(sub, ch.length > 0 ? ch : undefined);
    const existingIds = new Set(sundayQuestions.map(q => q.id));
    
    let candidates = bank.filter(q => !existingIds.has(q.id) && q.questionText !== currentQ.questionText);"""

new_swap_menu_logic = """    const sub = currentQ.subject || (idx < 45 ? 'Physics' : idx < 90 ? 'Chemistry' : 'Biology');
    
    // STRICT PLANNER ADHERENCE: Get candidates ONLY from the chapters prescribed in the planner for this subject
    let targetChapters: string[] = [];
    if (sub === 'Physics') targetChapters = sundayPhyUnits;
    else if (sub === 'Chemistry') targetChapters = sundayChemUnits;
    else targetChapters = sundayBioUnits;

    let bank: Question[] = [];
    if (targetChapters.length > 0) {
      for (const ch of targetChapters) {
        bank.push(...getUnifiedQuestionBank(sub, ch));
      }
    } else {
      bank = getUnifiedQuestionBank(sub); // Fallback if admin deselected all chapters
    }

    const existingIds = new Set(sundayQuestions.map(q => q.id));
    let candidates = bank.filter(q => !existingIds.has(q.id) && q.questionText !== currentQ.questionText);"""

text = text.replace(old_swap_menu_logic, new_swap_menu_logic)

with open("src/components/AdminSection.tsx", "w", encoding="utf8") as f:
    f.write(text)

print("Updated handleStartSwapMenu to strictly use planner chapters")
