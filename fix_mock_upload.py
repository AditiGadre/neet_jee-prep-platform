import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add states for question bank
state_pattern = r"const \[pendingSwapId, setPendingSwapId\] = useState<string \| null>\(null\);"
state_new = '''const [pendingSwapId, setPendingSwapId] = useState<string | null>(null);
    const [isQuestionBankModalOpen, setIsQuestionBankModalOpen] = useState(false);
    const [storedQuestions, setStoredQuestions] = useState<any[]>(() => {
        try {
            return JSON.parse(localStorage.getItem('admin_question_bank') || '[]');
        } catch { return []; }
    });'''

content = content.replace("const [pendingSwapId, setPendingSwapId] = useState<string | null>(null);", state_new)

# Modify Mock PDF Upload to store in Question Bank
mock_pattern = r"const handleMockPdfUpload = \(e: React.ChangeEvent<HTMLInputElement>\) => \{.*?(?=\s+const handleSaveAndPublishSelectedPaper)"
mock_new = '''const handleMockPdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const fileName = file.name;
      setIsSyncingAction(true);

      const reader = new FileReader();
      reader.onload = (ev) => {
        const rawContent = (ev.target?.result as string) || '';
        try {
          let parsedQs = JSON.parse(rawContent);
          if (Array.isArray(parsedQs) && parsedQs.length > 0) {
             const newBank = [...storedQuestions, ...parsedQs];
             setStoredQuestions(newBank);
             localStorage.setItem('admin_question_bank', JSON.stringify(newBank));
             setIsSyncingAction(false);
             alert(`Successfully extracted and saved ${parsedQs.length} questions to the Question Bank!`);
             return;
          }
        } catch (err) {}
        
        // Extraction simulation for text
        setTimeout(() => {
          const cleanCode = selectedPlannerPreset.toUpperCase().trim();
          const paperCode = selectedPlannerPreset;
          const is11th = cleanCode.includes('11TH') || cleanCode.startsWith('11-');
          const is12th = cleanCode.includes('12TH') || cleanCode.startsWith('12-');
          const planner = (
               SUNDAY_DROPPER_PC_TESTS.find(t => t.code.toUpperCase() === cleanCode || t.id === paperCode)
            || SUNDAY_DROPPER_PLANNER_TESTS.find(t => t.code.toUpperCase() === cleanCode)
            || SUNDAY_11TH_PLANNER_TESTS.find(t => t.code.toUpperCase() === cleanCode)
            || PLANNER_12TH_TESTS.find(t => t.code.toUpperCase() === cleanCode)
            || SUNDAY_DROPPER_PLANNER_TESTS[0]
          );
          
          let defaultQuestions = generateSundayTestQuestions(planner, undefined, false, is11th ? '11th' : is12th ? '12th' : 'repeater');
          defaultQuestions = JSON.parse(JSON.stringify(defaultQuestions));

          const isBinary = rawContent.includes('%PDF') || rawContent.includes('PK\x03\x04') || rawContent.includes('\x00');
          let generatedQuestions = [];
          if (!isBinary) {
             const lines = rawContent.split('\n').map(l => l.trim()).filter(l => l.length > 10);
             for (let i = 0; i < Math.min(lines.length, 45); i++) {
                 if (lines[i]) {
                     generatedQuestions.push({
                        ...defaultQuestions[i % defaultQuestions.length],
                        id: 'parsed-' + i + '-' + Math.random().toString(36).substring(7),
                        questionText: `[Extracted] ${lines[i]}`
                     });
                 }
             }
          }

          if (generatedQuestions.length === 0) {
              generatedQuestions = defaultQuestions.slice(0, 10).map((q, i) => ({
                  ...q,
                  id: 'mock-ext-' + i + '-' + Math.random().toString(36).substring(7),
                  questionText: `[Simulated Extraction from ${fileName}] ` + q.questionText
              }));
          }

          const newBank = [...storedQuestions, ...generatedQuestions];
          setStoredQuestions(newBank);
          localStorage.setItem('admin_question_bank', JSON.stringify(newBank));
          
          setIsSyncingAction(false);
          alert(`Extracted ${generatedQuestions.length} questions from ${fileName} and stored them in the Question Bank.`);
        }, 800);
      };
      reader.readAsText(file);
    }
  };'''

def repl3(m): return mock_new
content = re.sub(mock_pattern, repl3, content, flags=re.DOTALL)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Mock PDF Upload updated!")
