# Implementation Plan

## Goal
Address the multiple features requested by the admin:
1. Export Zip: Export selected track as Word (.doc) documents.
2. Fix Import: Ensure import zip works properly for .agydata backups if they use it, OR handle single paper imports.
3. Match Columns Formatting: Ensure math formatter does not aggressively line-break list items when they belong to Match the Columns.
4. Parse PDF/Word: Implement a real parser simulation that stores questions in a "Question Bank".
5. Question Bank UI: Add a button to view stored questions and insert them into the active paper.

## Proposed Changes

### 1. src/components/AdminSection.tsx (Export/Import)
- Modify handleExportSelectedTrackZIP to generate Microsoft Word compatible .doc (HTML) files for each test in the selected track, instead of raw text files.
- Ensure the zip only includes the selected track's Word documents.
- Add an exportType state or just default to Word (.doc) to fulfill "pdf or word" cleanly without freezing the browser (html2pdf loops crash easily).
- Fix handleImportBackupZIP by adding better error handling and chunking if they upload a large backup.

### 2. src/components/AdminSection.tsx (Question Bank)
- Add a new "Question Bank" modal.
- Update handleMockPdfUpload to parse text from the uploaded file (using a basic local FileReader text extractor) and store the parsed questions in localStorage.getItem('admin_question_bank').
- Add a View Question Bank button next to Parse PDF/Word which opens the modal.
- In the modal, allow admin to click "Add to Paper", which pushes the question into sundayQuestions and bumps the revision.

### 3. src/utils/mathFormatter.ts (Match Columns)
- Adjust the newline formatting regex (out = out.replace(/(?:,\s*|\s+)([1-4]\.\s+[A-Za-z])/g, '\n');).
- Add a heuristic to detect "Match the following" or "Column I / Column II". If detected, format (A) ... (1) ... onto the same line using explicit spacing instead of splitting them.

## Verification
- Test exporting a zip and check if .doc files are inside.
- Upload a mock text file via Parse PDF, verify it goes to the Question Bank.
- Add from Question Bank to the paper.
