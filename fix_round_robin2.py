import re

with open('src/data/sundayPlannerTests.ts', 'r', encoding='utf-8') as f:
    code = f.read()

# Replace first occurrence
pattern1 = re.compile(r'// 1\. Try to pick from matched syllabus keywords first\s*for \(const q of shuffledMatched\) \{.*?(?=\n\s*// 2\.)', re.DOTALL)
new1 = '''// 1. Try to pick from matched syllabus keywords first
          const unusedMatched = shuffledMatched.filter(q => {
            const baseId = getBaseQuestionId(q);
            const normText = normalizeQuestionText(q.questionText || (q as any).question || '');
            return !globalUsedIds.has(baseId) && (normText.length <= 15 || !globalUsedTexts.has(normText));
          });

          const isFull = keywords.includes('All Chapters') || keywords.some(k => k.toLowerCase().includes('all chapters')) || t.phaseGroup === 'full' || t.code.startsWith('FS-') || t.code.startsWith('FST-');

          if (isFull && unusedMatched.length > 0) {
            const chapterMap = new Map<string, Question[]>();
            for (const q of unusedMatched) {
              const ch = q.chapter || 'Unknown';
              if (!chapterMap.has(ch)) chapterMap.set(ch, []);
              chapterMap.get(ch)!.push(q);
            }
            const chapters = Array.from(chapterMap.keys());
            let roundRobinIdx = 0;
            
            while (picked.length < count && chapters.length > 0) {
              const ch = chapters[roundRobinIdx % chapters.length];
              const qList = chapterMap.get(ch)!;
              
              if (qList.length > 0) {
                const q = qList.shift()!;
                const baseId = getBaseQuestionId(q);
                const normText = normalizeQuestionText(q.questionText || (q as any).question || '');
                globalUsedIds.add(baseId);
                if (normText.length > 15) globalUsedTexts.add(normText);
                picked.push({
                  ...q,
                  subject: (subject === 'Botany' || subject === 'Zoology') ? 'Biology' : subject,
                  tags: [...(q.tags || []).filter(tag => tag !== 'Botany' && tag !== 'Zoology'), subject],
                  difficulty: 'Hard' as const
                });
              } else {
                chapters.splice(roundRobinIdx % chapters.length, 1);
                roundRobinIdx--;
              }
              roundRobinIdx++;
            }
          } else {
            for (const q of unusedMatched) {
              const baseId = getBaseQuestionId(q);
              const normText = normalizeQuestionText(q.questionText || (q as any).question || '');
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
          '''
code = pattern1.sub(new1, code)

pattern2 = re.compile(r'for \(const q of shuffledMatched\) \{\s*const sig = getQuestionSignature\(q\);.*?if \(picked.length === count\) break;\s*\}\s*\}', re.DOTALL)
new2 = '''const unusedMatched = shuffledMatched.filter(q => {
          const sig = getQuestionSignature(q);
          const baseId = getBaseQuestionId(q);
          const normText = normalizeQuestionText(q.questionText || (q as any).question || '');
          return !paperSignatures.has(sig) && !paperIds.has(baseId) && (normText.length <= 15 || !paperTexts.has(normText));
        });

        const isFull = kws.includes('All Chapters') || kws.some(k => k.toLowerCase().includes('all chapters')) || test.phaseGroup === 'full' || test.code.startsWith('FS-') || test.code.startsWith('FST-');

        if (isFull && unusedMatched.length > 0) {
          const chapterMap = new Map<string, Question[]>();
          for (const q of unusedMatched) {
            const ch = q.chapter || 'Unknown';
            if (!chapterMap.has(ch)) chapterMap.set(ch, []);
            chapterMap.get(ch)!.push(q);
          }
          const chapters = Array.from(chapterMap.keys());
          let roundRobinIdx = 0;
          
          while (picked.length < count && chapters.length > 0) {
            const ch = chapters[roundRobinIdx % chapters.length];
            const qList = chapterMap.get(ch)!;
            
            if (qList.length > 0) {
              const q = qList.shift()!;
              const sig = getQuestionSignature(q);
              const baseId = getBaseQuestionId(q);
              const normText = normalizeQuestionText(q.questionText || (q as any).question || '');
              paperSignatures.add(sig);
              paperIds.add(baseId);
              if (normText.length > 15) paperTexts.add(normText);
              picked.push({
                ...q,
                subject: (subject === 'Botany' || subject === 'Zoology') ? 'Biology' : subject,
                tags: [...(q.tags || []).filter(tag => tag !== 'Botany' && tag !== 'Zoology'), subject],
                difficulty: 'Hard' as const
              });
            } else {
              chapters.splice(roundRobinIdx % chapters.length, 1);
              roundRobinIdx--;
            }
            roundRobinIdx++;
          }
        } else {
          for (const q of unusedMatched) {
            const sig = getQuestionSignature(q);
            const baseId = getBaseQuestionId(q);
            const normText = normalizeQuestionText(q.questionText || (q as any).question || '');
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
      '''
code = pattern2.sub(new2, code)

with open('src/data/sundayPlannerTests.ts', 'w', encoding='utf-8') as f:
    f.write(code)
