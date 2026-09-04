import { BookItem, Question, TestItem, UserTestResult } from '../types';

/**
 * Downloads a formatted HTML-based document as an actual file and opens print-to-PDF dialog.
 */
function downloadHtmlDocument(filename: string, title: string, htmlBody: string) {
  const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap');
    
    @page {
      size: A4;
      margin: 15mm 15mm 15mm 15mm;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #111827;
      background: #ffffff;
      margin: 0;
      padding: 24px;
      font-size: 13px;
      line-height: 1.5;
    }
    
    .header {
      border-bottom: 2px solid #2563eb;
      padding-bottom: 12px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo-box {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .logo-badge {
      background: #2563eb;
      color: white;
      font-weight: 800;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 14px;
      letter-spacing: 0.5px;
    }
    
    .org-title {
      font-size: 16px;
      font-weight: 800;
      color: #1e3a8a;
      margin: 0;
    }
    
    .org-sub {
      font-size: 11px;
      color: #6b7280;
      margin: 2px 0 0 0;
    }
    
    .doc-meta {
      text-align: right;
      font-size: 11px;
      color: #4b5563;
      font-family: 'JetBrains Mono', monospace;
    }
    
    h1, h2, h3, h4 {
      color: #0f172a;
      margin-top: 0;
    }
    
    .test-title-bar {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-left: 4px solid #2563eb;
      padding: 12px 16px;
      border-radius: 6px;
      margin-bottom: 20px;
    }
    
    .meta-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      margin-top: 8px;
      font-size: 11px;
      font-family: 'JetBrains Mono', monospace;
    }
    
    .meta-item {
      background: white;
      padding: 6px 10px;
      border-radius: 4px;
      border: 1px solid #e2e8f0;
    }
    
    .question-card {
      margin-bottom: 16px;
      padding: 12px 16px;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      background: #ffffff;
      page-break-inside: avoid;
    }
    
    .q-num {
      font-weight: 700;
      color: #2563eb;
      margin-right: 6px;
      font-family: 'JetBrains Mono', monospace;
    }
    
    .options-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin: 10px 0 6px 0;
    }
    
    .option-item {
      padding: 6px 10px;
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 4px;
      font-size: 12px;
    }
    
    .opt-letter {
      font-weight: 700;
      color: #4b5563;
      margin-right: 6px;
    }
    
    .solution-box {
      margin-top: 8px;
      padding: 8px 12px;
      background: #eff6ff;
      border-left: 3px solid #3b82f6;
      border-radius: 4px;
      font-size: 11px;
      color: #1e40af;
    }
    
    .footer {
      margin-top: 30px;
      border-top: 1px solid #e5e7eb;
      padding-top: 12px;
      text-align: center;
      font-size: 11px;
      color: #9ca3af;
    }
    
    .no-print {
      margin-bottom: 16px;
      padding: 12px;
      background: #fef3c7;
      border: 1px solid #fde68a;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .btn-print {
      background: #2563eb;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
    }
    
    @media print {
      .no-print {
        display: none;
      }
      body {
        padding: 0;
      }
    }
  </style>
</head>
<body>
  <div class="no-print">
    <span>💡 <strong>Save as PDF:</strong> Click 'Print to PDF' or press <kbd>Ctrl+P</kbd> (<kbd>Cmd+P</kbd> on Mac) and choose <strong>"Save as PDF"</strong>.</span>
    <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF</button>
  </div>
  
  <div class="header">
    <div class="logo-box">
      <div class="logo-badge">NEET/JEE CBT</div>
      <div>
        <h2 class="org-title">NEET & JEE PREPARATION PLATFORM</h2>
        <p class="org-sub">Official Computer Based Test (CBT) Practice & Assessment Series</p>
      </div>
    </div>
    <div class="doc-meta">
      <div>Generated: ${new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</div>
      <div>Standard: NTA NEET-UG / JEE Main</div>
    </div>
  </div>
  
  ${htmlBody}
  
  <div class="footer">
    <p>© ${new Date().getFullYear()} NEET/JEE Prep Platform &bull; All Rights Reserved &bull; For Student Study & Offline Practice Only</p>
  </div>
</body>
</html>`;

  // Create Blob & Trigger Download
  const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  const printWindow = window.open(url, '_blank');
  if (printWindow) {
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
      }, 500);
    };
  }

  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

/**
 * Download Book Notes / Formula Sheet PDF
 */
export function downloadBookPDF(book: BookItem) {
  const htmlBody = `
    <div class="test-title-bar">
      <h1 style="font-size: 18px; margin-bottom: 4px;">${book.title}</h1>
      <p style="margin: 0; color: #4b5563; font-size: 12px;">${book.description}</p>
      <div class="meta-grid">
        <div class="meta-item"><strong>Category:</strong> ${book.category}</div>
        <div class="meta-item"><strong>Subject:</strong> ${book.subject}</div>
        <div class="meta-item"><strong>Pages:</strong> ${book.pages} Pages</div>
        <div class="meta-item"><strong>Rating:</strong> ★ ${book.rating} / 5.0</div>
      </div>
    </div>

    <div style="margin-bottom: 24px;">
      <h3 style="font-size: 14px; border-bottom: 1px solid #e5e7eb; padding-bottom: 6px; color: #1e40af;">
        📘 Key Highlights & Syllabus Scope
      </h3>
      <ul style="padding-left: 20px; line-height: 1.8;">
        ${book.highlights.map(h => `<li><strong>${h}</strong></li>`).join('')}
      </ul>
    </div>

    <div style="margin-bottom: 24px;">
      <h3 style="font-size: 14px; border-bottom: 1px solid #e5e7eb; padding-bottom: 6px; color: #1e40af;">
        📝 High-Yield Study Notes & Rapid Revision Summary
      </h3>
      
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px; margin-bottom: 14px;">
        <h4 style="color: #0f172a; margin-bottom: 6px;">Unit 1: Essential Formulas & Fundamental Principles</h4>
        <p style="color: #334155; line-height: 1.6;">
          • All core definitions, standard SI units, and examiner trap points from NCERT Class 11 and 12.<br/>
          • Step-by-step problem solving shortcuts and dimension checks for high-speed calculation.<br/>
          • Complete reaction roadmaps with reagents, catalysts, temperatures, and expected yields.
        </p>
      </div>

      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px; margin-bottom: 14px;">
        <h4 style="color: #0f172a; margin-bottom: 6px;">Unit 2: Previous 37-Year Trends & Examiner Marked Traps</h4>
        <p style="color: #334155; line-height: 1.6;">
          • Frequently repeated questions and assertion-reason patterns with line-by-line NCERT references.<br/>
          • Common misconceptions and wrong option traps to avoid negative marking in NEET/JEE.<br/>
          • Mnemonics and visual memory anchors for effortless long-term retention.
        </p>
      </div>
    </div>
  `;

  downloadHtmlDocument(
    `${book.subject}_${book.title.replace(/[^a-zA-Z0-9]/g, '_')}`,
    book.title,
    htmlBody
  );
}

/**
 * Download Test Question Paper + Answer Key & Solutions PDF
 */
export function downloadTestPaperPDF(test: TestItem, includeSolutions: boolean = true) {
  const questionsList = test.questions || [];
  
  const htmlBody = `
    <div class="test-title-bar">
      <h1 style="font-size: 18px; margin-bottom: 4px;">${test.title}</h1>
      <p style="margin: 0; color: #4b5563; font-size: 12px;"><strong>Syllabus:</strong> ${test.syllabus}</p>
      <div class="meta-grid">
        <div class="meta-item"><strong>Total Questions:</strong> ${test.totalQuestions} Qs</div>
        <div class="meta-item"><strong>Duration:</strong> ${test.durationMinutes} Minutes</div>
        <div class="meta-item"><strong>Max Marks:</strong> ${test.totalMarks} Marks</div>
        <div class="meta-item"><strong>Marking Scheme:</strong> ${test.negativeMarking}</div>
      </div>
    </div>

    <div>
      <h3 style="font-size: 14px; border-bottom: 2px solid #2563eb; padding-bottom: 6px; margin-bottom: 16px; color: #1e3a8a;">
        SECTION 1: OBJECTIVE MULTIPLE CHOICE QUESTIONS (${questionsList.length} Questions)
      </h3>

      ${questionsList.map((q, idx) => `
        <div class="question-card">
          <div style="font-size: 13px; font-weight: 600; color: #0f172a; margin-bottom: 8px;">
            <span class="q-num">Q${idx + 1}.</span> ${q.questionText}
          </div>
          
          <div class="options-grid">
            ${q.options.map((opt, oIdx) => `
              <div class="option-item">
                <span class="opt-letter">(${String.fromCharCode(97 + oIdx)})</span> ${opt}
              </div>
            `).join('')}
          </div>

          ${includeSolutions ? `
            <div class="solution-box">
              <strong>Correct Answer: (${String.fromCharCode(97 + q.correctAnswer)})</strong> &bull; 
              <span>${q.explanation || 'Refer to standard NCERT textbook for detailed derivation.'}</span>
            </div>
          ` : ''}
        </div>
      `).join('')}
    </div>

    ${includeSolutions ? `
      <div style="margin-top: 24px; page-break-before: always;">
        <h3 style="font-size: 14px; border-bottom: 2px solid #16a34a; padding-bottom: 6px; margin-bottom: 12px; color: #15803d;">
          📊 OFFICIAL ANSWER KEY MATRIX
        </h3>
        <div style="display: grid; grid-template-columns: repeat(10, 1fr); gap: 6px; font-family: 'JetBrains Mono', monospace; font-size: 11px;">
          ${questionsList.map((q, idx) => `
            <div style="padding: 6px; background: #f0fdf4; border: 1px solid #bbf7d0; text-align: center; border-radius: 4px;">
              <strong>Q${idx + 1}:</strong> (${String.fromCharCode(97 + q.correctAnswer)})
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}
  `;

  downloadHtmlDocument(
    `NEET_TestPaper_${test.title.replace(/[^a-zA-Z0-9]/g, '_')}`,
    test.title,
    htmlBody
  );
}

/**
 * Download Official Test Scorecard PDF
 */
export function downloadTestScorecardPDF(result: UserTestResult) {
  const htmlBody = `
    <div class="test-title-bar" style="border-left-color: #16a34a; background: #f0fdf4;">
      <h1 style="font-size: 18px; margin-bottom: 4px; color: #166534;">🏆 OFFICIAL CBT PERFORMANCE SCORECARD</h1>
      <p style="margin: 0; color: #15803d; font-size: 13px;"><strong>Test:</strong> ${result.testTitle}</p>
      
      <div class="meta-grid" style="margin-top: 12px;">
        <div class="meta-item"><strong>Score:</strong> <span style="font-size: 14px; font-weight: 800; color: #15803d;">${result.score} / ${result.totalMarks}</span></div>
        <div class="meta-item"><strong>Accuracy:</strong> <span style="font-size: 14px; font-weight: 800; color: #2563eb;">${result.accuracyPercentage.toFixed(1)}%</span></div>
        <div class="meta-item"><strong>Predicted AIR:</strong> <span style="font-size: 14px; font-weight: 800; color: #d97706;">#${result.predictedAIR.toLocaleString()}</span></div>
        <div class="meta-item"><strong>Percentile:</strong> <span style="font-size: 14px; font-weight: 800; color: #7c3aed;">${result.nationalPercentile.toFixed(2)}%ile</span></div>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 20px;">
      <div style="padding: 12px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; text-align: center;">
        <div style="font-size: 11px; color: #15803d; font-weight: 700;">CORRECT ANSWERS</div>
        <div style="font-size: 20px; font-weight: 800; color: #166534; font-family: 'JetBrains Mono', monospace;">${result.correctAnswers}</div>
        <div style="font-size: 10px; color: #15803d;">+${result.correctAnswers * 4} Marks</div>
      </div>

      <div style="padding: 12px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; text-align: center;">
        <div style="font-size: 11px; color: #b91c1c; font-weight: 700;">WRONG ANSWERS</div>
        <div style="font-size: 20px; font-weight: 800; color: #991b1b; font-family: 'JetBrains Mono', monospace;">${result.wrongAnswers}</div>
        <div style="font-size: 10px; color: #b91c1c;">-${result.wrongAnswers} Negative Marks</div>
      </div>

      <div style="padding: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; text-align: center;">
        <div style="font-size: 11px; color: #64748b; font-weight: 700;">UNATTEMPTED</div>
        <div style="font-size: 20px; font-weight: 800; color: #334155; font-family: 'JetBrains Mono', monospace;">${result.unattempted}</div>
        <div style="font-size: 10px; color: #64748b;">0 Marks</div>
      </div>
    </div>

    <div style="margin-bottom: 20px;">
      <h3 style="font-size: 13px; font-weight: 700; border-bottom: 1px solid #e5e7eb; padding-bottom: 4px; color: #1e3a8a;">
        📊 DIAGNOSTIC RECOMMENDATIONS & WEAK TOPICS
      </h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 8px;">
        <div style="background: #fef2f2; border: 1px solid #fecaca; padding: 10px; border-radius: 6px;">
          <strong style="color: #991b1b; font-size: 12px;">⚠️ Weak Chapters to Revise:</strong>
          <ul style="margin: 6px 0 0 0; padding-left: 18px; font-size: 11px; color: #7f1d1d;">
            ${result.weakChapters.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 10px; border-radius: 6px;">
          <strong style="color: #166534; font-size: 12px;">⭐ Strong Chapters:</strong>
          <ul style="margin: 6px 0 0 0; padding-left: 18px; font-size: 11px; color: #14532d;">
            ${result.strongChapters.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;

  downloadHtmlDocument(
    `Scorecard_${result.testTitle.replace(/[^a-zA-Z0-9]/g, '_')}`,
    `Scorecard - ${result.testTitle}`,
    htmlBody
  );
}

/**
 * Download DPP PDF
 */
export function downloadDppPDF(dppInfo: {
  date: string;
  subject: string;
  level: string;
  questions: Question[];
}) {
  const htmlBody = `
    <div class="test-title-bar">
      <h1 style="font-size: 18px; margin-bottom: 4px;">Daily Practice Paper (DPP) &bull; ${dppInfo.subject}</h1>
      <p style="margin: 0; color: #4b5563; font-size: 12px;"><strong>Target Standard:</strong> ${dppInfo.level} &bull; Date: ${dppInfo.date}</p>
      <div class="meta-grid">
        <div class="meta-item"><strong>Questions:</strong> ${dppInfo.questions.length} Qs</div>
        <div class="meta-item"><strong>Target Time:</strong> 45 Mins</div>
        <div class="meta-item"><strong>Total Marks:</strong> ${dppInfo.questions.length * 4} Marks</div>
        <div class="meta-item"><strong>Marking:</strong> +4 / -1</div>
      </div>
    </div>

    <div>
      ${dppInfo.questions.map((q, idx) => `
        <div class="question-card">
          <div style="font-size: 13px; font-weight: 600; color: #0f172a; margin-bottom: 8px;">
            <span class="q-num">Q${idx + 1}.</span> ${q.questionText}
          </div>
          
          <div class="options-grid">
            ${q.options.map((opt, oIdx) => `
              <div class="option-item">
                <span class="opt-letter">(${String.fromCharCode(97 + oIdx)})</span> ${opt}
              </div>
            `).join('')}
          </div>

          <div class="solution-box">
            <strong>Correct Answer: (${String.fromCharCode(97 + q.correctAnswer)})</strong> &bull; 
            <span>${q.explanation || 'Standard NCERT Verified Answer.'}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  downloadHtmlDocument(
    `DPP_${dppInfo.date}_${dppInfo.subject.replace(/[^a-zA-Z0-9]/g, '_')}`,
    `DPP - ${dppInfo.subject} (${dppInfo.date})`,
    htmlBody
  );
}
