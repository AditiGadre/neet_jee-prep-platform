import re

with open("src/data/sundayPlannerTests.ts", "r", encoding="utf8") as f:
    text = f.read()

# Replace the fallback in pickCategory (inside ensureAllSundayPapersGenerated)
old_fallback_1 = """        // 2. If matched didn't reach count, fill remainder from general subject bank without repeating!
        if (picked.length < count) {
          for (const q of bank) {
            const baseId = getBaseQuestionId(q);
            const normText = normalizeQuestionText(q.questionText || (q as any).question || '');
            if (!globalUsedIds.has(baseId) && (normText.length <= 15 || !globalUsedTexts.has(normText))) {
              globalUsedIds.add(baseId);
              if (normText.length > 15) globalUsedTexts.add(normText);
              picked.push({
                ...q,
                subject: (subject === 'Botany' || subject === 'Zoology') ? 'Biology' : subject,
                tags: [...(q.tags || []).filter(tag => tag !== 'Botany' && tag !== 'Zoology'), subject],
                difficulty: 'Hard' as const
              });
              if (picked.length === count) break;
            }
          }
        }"""

new_fallback_1 = """        // 2. If matched didn't reach count, fill remainder strictly from matched questions (repeating if necessary)
        if (picked.length < count && matched.length > 0) {
          let i = 0;
          while (picked.length < count) {
            const q = matched[i % matched.length];
            picked.push({
              ...q,
              subject: (subject === 'Botany' || subject === 'Zoology') ? 'Biology' : subject,
              tags: [...(q.tags || []).filter(tag => tag !== 'Botany' && tag !== 'Zoology'), subject],
              difficulty: 'Hard' as const,
              id: `${q.id}-dup-${picked.length}-${Date.now()}`
            });
            i++;
          }
        }"""

text = text.replace(old_fallback_1, new_fallback_1)

# Replace the fallback in pickCustom (inside generateSundayTestQuestions)
old_fallback_2 = """      // STRICT ZERO-DUPLICATION: Fill remaining quota from bank without repeating any question
      if (picked.length < count) {
        for (const q of bank) {
          const sig = getQuestionSignature(q);
          const baseId = getBaseQuestionId(q);
          const normText = normalizeQuestionText(q.questionText || (q as any).question || '');
          if (!paperSignatures.has(sig) && !paperIds.has(baseId) && (normText.length <= 15 || !paperTexts.has(normText))) {
            paperSignatures.add(sig);
            paperIds.add(baseId);
            if (normText.length > 15) paperTexts.add(normText);
            picked.push({
              ...q,
              subject: (subject === 'Botany' || subject === 'Zoology') ? 'Biology' : subject,
              tags: [...(q.tags || []).filter(tag => tag !== 'Botany' && tag !== 'Zoology'), subject],
              difficulty: 'Hard' as const
            });
            if (picked.length === count) break;
          }
        }
      }"""

new_fallback_2 = """      // FILL REMAINDER STRICTLY FROM MATCHED (repeating if necessary to respect chapter boundaries)
      if (picked.length < count && matched.length > 0) {
        let i = 0;
        while (picked.length < count) {
          const q = matched[i % matched.length];
          picked.push({
            ...q,
            subject: (subject === 'Botany' || subject === 'Zoology') ? 'Biology' : subject,
            tags: [...(q.tags || []).filter(tag => tag !== 'Botany' && tag !== 'Zoology'), subject],
            difficulty: 'Hard' as const,
            id: `${q.id}-dup-${picked.length}-${Date.now()}`
          });
          i++;
        }
      }"""

text = text.replace(old_fallback_2, new_fallback_2)

with open("src/data/sundayPlannerTests.ts", "w", encoding="utf8") as f:
    f.write(text)

print("Updated fallbacks to use matched only")
