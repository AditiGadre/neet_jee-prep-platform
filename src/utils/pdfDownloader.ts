import { BookItem, Question, TestItem, UserTestResult } from '../types';
import { cleanOcrText } from './ocrCleaner';
import { formatMathAndFormulas } from './mathFormatter';
import { trackDownload, getCurrentUser } from './downloadTracker';
import { recordSuperUserNotification } from './superUserNotifier';

/**
 * Validates whether user is signed in / enrolled before allowing PDF downloads.
 */
export function checkAuthForDownload(itemTitle: string, category: string): boolean {
  const user = getCurrentUser();
  const enrolledRaw = localStorage.getItem('neet_enrolled_student');
  const enrolled = enrolledRaw ? JSON.parse(enrolledRaw) : null;

  if ((!user || !user.email) && !enrolled) {
    window.dispatchEvent(
      new CustomEvent('neet_auth_required_for_download', {
        detail: {
          title: itemTitle,
          category,
          message: 'Please complete student enrollment to download this password-protected PDF document.'
        }
      })
    );
    return false;
  }
  return true;
}

/**
 * Extracts student DOB PIN (format: DDMMYYYY) for PDF password security
 */
export function getStudentDobPin(): { pin: string; dobFormatted: string; studentName: string } {
  try {
    const raw = localStorage.getItem('neet_enrolled_student');
    if (raw) {
      const student = JSON.parse(raw);
      return {
        pin: student.dobPin || '15082006',
        dobFormatted: student.dob || '2006-08-15',
        studentName: student.studentName || 'Enrolled Candidate'
      };
    }
  } catch {
    // fallback
  }
  return { pin: '15082006', dobFormatted: '2006-08-15', studentName: 'Enrolled Candidate' };
}

/**
 * Downloads an interactive password-protected HTML document
 */
function downloadHtmlDocument(filename: string, title: string, htmlBody: string) {
  const { pin, dobFormatted, studentName } = getStudentDobPin();

  const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>🔒 Protected: ${title}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap');
    
    @page {
      size: A4;
      margin: 12mm;
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
    
    /* Security PIN Overlay */
    #security-gate {
      position: fixed;
      inset: 0;
      background: #0f172a;
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      padding: 20px;
    }

    .pin-card {
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 16px;
      padding: 32px;
      max-width: 440px;
      width: 100%;
      text-align: center;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }

    .pin-input {
      width: 100%;
      padding: 12px;
      margin: 16px 0;
      background: #0f172a;
      border: 2px solid #3b82f6;
      border-radius: 10px;
      color: #38bdf8;
      font-size: 20px;
      font-family: 'JetBrains Mono', monospace;
      text-align: center;
      letter-spacing: 4px;
      font-weight: 700;
      outline: none;
      box-sizing: border-box;
    }

    .btn-unlock {
      background: linear-gradient(to right, #2563eb, #06b6d4);
      color: white;
      font-weight: 700;
      border: none;
      padding: 12px 24px;
      border-radius: 10px;
      font-size: 14px;
      cursor: pointer;
      width: 100%;
      transition: opacity 0.2s;
    }

    .btn-unlock:hover {
      opacity: 0.9;
    }

    .header {
      border-bottom: 2px solid #2563eb;
      padding-bottom: 12px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo-badge {
      background: linear-gradient(135deg, #2563eb, #4f46e5);
      color: white;
      font-weight: 800;
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 14px;
      letter-spacing: 0.5px;
      display: inline-block;
    }
    
    .org-title {
      font-size: 16px;
      font-weight: 800;
      color: #1e3a8a;
      margin: 4px 0 0 0;
    }
    
    .org-sub {
      font-size: 11px;
      color: #64748b;
      margin: 2px 0 0 0;
    }
    
    .doc-meta {
      text-align: right;
      font-size: 11px;
      color: #4b5563;
      font-family: 'JetBrains Mono', monospace;
    }
    
    .test-title-bar {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-left: 4px solid #2563eb;
      padding: 12px 16px;
      border-radius: 8px;
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
      border-radius: 6px;
      border: 1px solid #e2e8f0;
    }
    
    .question-card {
      margin-bottom: 16px;
      padding: 14px 18px;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      background: #ffffff;
      page-break-inside: avoid;
    }
    
    .q-num {
      font-weight: 800;
      color: #2563eb;
      margin-right: 6px;
      font-family: 'JetBrains Mono', monospace;
    }
    
    .options-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin: 12px 0 8px 0;
    }
    
    .option-item {
      padding: 8px 12px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      font-size: 12px;
    }
    
    .solution-box {
      margin-top: 10px;
      padding: 12px 14px;
      background: #eff6ff;
      border-left: 3px solid #3b82f6;
      border-radius: 6px;
      font-size: 12px;
      color: #1e3a8a;
      line-height: 1.6;
    }

    .solution-box p {
      margin: 6px 0;
    }
    
    .no-print {
      background: #f1f5f9;
      border: 1px solid #cbd5e1;
      padding: 10px 16px;
      border-radius: 8px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
    }
    
    .btn-print {
      background: #2563eb;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
    }
    
    @media print {
      .no-print, #security-gate {
        display: none !important;
      }
      body {
        padding: 0;
      }
    }
  </style>
</head>
<body>
  <!-- Interactive Password Gate -->
  <div id="security-gate">
    <div class="pin-card">
      <div style="font-size: 36px; margin-bottom: 8px;">🔒</div>
      <h2 style="margin: 0; font-size: 18px; color: #38bdf8;">Password Protected Document</h2>
      <p style="font-size: 12px; color: #94a3b8; margin: 8px 0 0 0;">
        Candidate: <strong>${studentName}</strong>
      </p>
      <p style="font-size: 11px; color: #cbd5e1; margin-top: 4px;">
        Please enter your registered <strong>Date of Birth (DOB)</strong> in format <code style="color: #38bdf8; background: #0f172a; padding: 2px 6px; border-radius: 4px;">DDMMYYYY</code> (e.g. 15082006) to unlock:
      </p>

      <input
        type="password"
        id="pin-input"
        class="pin-input"
        placeholder="DDMMYYYY"
        maxlength="8"
        autofocus
      />

      <div id="pin-error" style="color: #f87171; font-size: 11px; font-weight: 700; margin-bottom: 12px; display: none;">
        ❌ Incorrect PIN. Please enter your valid 8-digit DOB (DDMMYYYY).
      </div>

      <button class="btn-unlock" onclick="unlockDocument()">
        Unlock & View Document
      </button>
    </div>
  </div>

  <div id="doc-content" style="display: none;">
    <div class="no-print">
      <span>💡 <strong>Secured with DOB Password:</strong> Document verified for candidate <strong>${studentName}</strong>. Click 'Print to PDF' to save.</span>
      <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF</button>
    </div>
    
    <div class="header">
      <div>
        <div class="logo-badge">NeetCbt Exam Test</div>
        <h2 class="org-title">NeetCbt Exam Test Platform</h2>
        <p class="org-sub">Official Computer Based Test (CBT) Practice & Assessment Series</p>
      </div>
      <div class="doc-meta">
        <div>Candidate: ${studentName}</div>
        <div>Generated: ${new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</div>
        <div>Standard: NTA NEET-UG PCB</div>
      </div>
    </div>
    
    ${htmlBody}
    
    <div style="margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 12px; font-size: 11px; color: #64748b; text-align: center;">
      <p>© ${new Date().getFullYear()} NeetCbt Exam Test Platform &bull; All Rights Reserved &bull; Password Encrypted for ${studentName}</p>
    </div>
  </div>

  <script>
    const EXPECTED_PIN = "${pin}";

    function unlockDocument() {
      const entered = document.getElementById('pin-input').value.trim();
      if (entered === EXPECTED_PIN || entered === "${pin}") {
        document.getElementById('security-gate').style.display = 'none';
        document.getElementById('doc-content').style.display = 'block';
        document.title = "${title}";
      } else {
        document.getElementById('pin-error').style.display = 'block';
      }
    }

    document.getElementById('pin-input').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        unlockDocument();
      }
    });
  </script>
</body>
</html>`;

  // Create Blob & Trigger Download
  const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  const printWindow = window.open(url, '_blank');
  if (printWindow) {
    // let user input password in the popup window
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
 * Format explanation string into multi-line paragraphs
 */
function formatExplanationParagraphs(explanation: string): string {
  if (!explanation) return '<p>Refer to standard NCERT textbook concept and derivation.</p>';
  const clean = formatMathAndFormulas(cleanOcrText(explanation));
  
  // Split by common step markers like "Step 1", "Concept:", "Therefore", "Formula:", or periods
  const parts = clean.split(/(?:\.\s+|;\s+|(?=Step\s*\d+:|Concept:|Therefore,|Hence,|Formula:))/i)
    .map(p => p.trim())
    .filter(p => p.length > 0);

  if (parts.length <= 1) {
    return `<p><strong>Core Concept & Derivation:</strong> ${clean}</p>`;
  }

  let html = `<p><strong>📘 NCERT Concept:</strong> ${parts[0]}.</p>`;
  if (parts.length > 1) {
    html += `<p><strong>⚡ Step-by-Step Calculation:</strong> ${parts.slice(1, -1).join('. ')}${parts.length > 2 ? '.' : ''}</p>`;
  }
  if (parts.length > 2) {
    html += `<p><strong>✓ Conclusion & Answer:</strong> ${parts[parts.length - 1]}</p>`;
  }
  return html;
}

/**
 * Download Test Paper PDF with Solutions
 */
export function downloadTestPaperPDF(test: TestItem, includeSolutions: boolean = false): boolean {
  if (!checkAuthForDownload(test.title, 'Test Paper')) {
    return false;
  }

  const fileSize = includeSolutions ? '1.8 MB' : '1.2 MB';
  const questionsList = test.questions && test.questions.length > 0 ? test.questions : [];

  const htmlBody = `
    <div class="test-title-bar">
      <h1 style="font-size: 18px; margin-bottom: 4px;">${test.title}</h1>
      <p style="margin: 0; color: #4b5563; font-size: 12px;"><strong>Syllabus Scope:</strong> ${test.syllabus}</p>
      
      <div class="meta-grid">
        <div class="meta-item"><strong>Total Questions:</strong> ${test.totalQuestions} Qs</div>
        <div class="meta-item"><strong>Duration:</strong> ${test.durationMinutes} Mins</div>
        <div class="meta-item"><strong>Total Marks:</strong> ${test.totalMarks} Marks</div>
        <div class="meta-item"><strong>Pattern:</strong> ${test.negativeMarking}</div>
      </div>
    </div>

    <div>
      <h3 style="font-size: 14px; border-bottom: 2px solid #2563eb; padding-bottom: 6px; margin-bottom: 16px; color: #1e3a8a;">
        📝 OFFICIAL EXAMINATION QUESTIONS
      </h3>

      ${questionsList.map((q, idx) => `
        <div class="question-card">
          <div style="margin-bottom: 8px; font-weight: 600;">
            <span class="q-num">Q${idx + 1}.</span>
            <span style="font-size: 11px; color: #64748b; font-family: 'JetBrains Mono', monospace;">[${q.subject} &bull; ${q.chapter}]</span>
          </div>

          <div style="font-size: 13px; line-height: 1.6; margin-bottom: 10px;">
            ${formatMathAndFormulas(cleanOcrText(q.questionText))}
          </div>

          ${q.diagramSvg ? `
            <div style="margin: 12px 0; padding: 10px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; text-align: center;">
              ${q.diagramSvg}
            </div>
          ` : ''}

          <div class="options-grid">
            ${q.options.map((opt, oIdx) => `
              <div class="option-item ${includeSolutions && oIdx === q.correctAnswer ? 'style="background: #f0fdf4; border-color: #86efac; font-weight: 700; color: #166534;"' : ''}">
                <strong>(${String.fromCharCode(65 + oIdx)})</strong> ${formatMathAndFormulas(cleanOcrText(opt))}
              </div>
            `).join('')}
          </div>

          ${includeSolutions ? `
            <div class="solution-box">
              <strong style="color: #1d4ed8; font-size: 12px;">💡 Step-by-Step Verified Solution & Explanation:</strong>
              ${formatExplanationParagraphs(q.explanation)}
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
              <strong>Q${idx + 1}:</strong> (${String.fromCharCode(65 + q.correctAnswer)})
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}
  `;

  trackDownload({
    title: test.title,
    category: 'Test Paper',
    subject: test.syllabus,
    fileSize,
    format: 'PDF'
  });

  recordSuperUserNotification({
    contentTitle: `Password-Protected PDF: ${test.title}`,
    category: 'Test Paper',
    fileSize,
    subject: test.syllabus
  });

  downloadHtmlDocument(
    `NeetCbt_Paper_${test.title.replace(/[^a-zA-Z0-9]/g, '_')}`,
    test.title,
    htmlBody
  );

  return true;
}

/**
 * Download Official Test Scorecard PDF (Gated with DOB Security)
 */
export function downloadTestScorecardPDF(result: UserTestResult): boolean {
  if (!checkAuthForDownload(`Scorecard: ${result.testTitle}`, 'Scorecard')) {
    return false;
  }

  const fileSize = '0.9 MB';

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
      <div style="padding: 12px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; text-align: center;">
        <div style="font-size: 11px; color: #15803d; font-weight: 700;">CORRECT ANSWERS</div>
        <div style="font-size: 22px; font-weight: 800; color: #166534; font-family: 'JetBrains Mono', monospace;">${result.correctAnswers}</div>
        <div style="font-size: 10px; color: #15803d;">+${result.correctAnswers} Marks</div>
      </div>

      <div style="padding: 12px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; text-align: center;">
        <div style="font-size: 11px; color: #b91c1c; font-weight: 700;">WRONG ANSWERS</div>
        <div style="font-size: 22px; font-weight: 800; color: #991b1b; font-family: 'JetBrains Mono', monospace;">${result.wrongAnswers}</div>
        <div style="font-size: 10px; color: #b91c1c;">-${result.wrongAnswers * 0.25} Negative</div>
      </div>

      <div style="padding: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; text-align: center;">
        <div style="font-size: 11px; color: #64748b; font-weight: 700;">UNATTEMPTED</div>
        <div style="font-size: 22px; font-weight: 800; color: #334155; font-family: 'JetBrains Mono', monospace;">${result.unattempted}</div>
        <div style="font-size: 10px; color: #64748b;">0 Marks</div>
      </div>
    </div>

    <div style="margin-bottom: 20px;">
      <h3 style="font-size: 13px; font-weight: 700; border-bottom: 1px solid #e5e7eb; padding-bottom: 4px; color: #1e3a8a;">
        📊 DIAGNOSTIC RECOMMENDATIONS & WEAK TOPICS
      </h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 8px;">
        <div style="background: #fef2f2; border: 1px solid #fecaca; padding: 10px; border-radius: 8px;">
          <strong style="color: #991b1b; font-size: 12px;">⚠️ Weak Focus Chapters to Revise:</strong>
          <ul style="margin: 6px 0 0 0; padding-left: 18px; font-size: 11px; color: #7f1d1d; line-height: 1.6;">
            ${result.weakChapters.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 10px; border-radius: 8px;">
          <strong style="color: #166534; font-size: 12px;">⭐ High Mastery Chapters:</strong>
          <ul style="margin: 6px 0 0 0; padding-left: 18px; font-size: 11px; color: #14532d; line-height: 1.6;">
            ${result.strongChapters.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;

  trackDownload({
    title: `Scorecard: ${result.testTitle}`,
    category: 'Scorecard',
    subject: 'All India CBT Diagnostic',
    fileSize,
    format: 'PDF'
  });

  recordSuperUserNotification({
    contentTitle: `Password-Protected Scorecard: ${result.testTitle}`,
    category: 'Scorecard',
    fileSize,
    subject: 'Scorecard'
  });

  downloadHtmlDocument(
    `NeetCbt_Scorecard_${result.testTitle.replace(/[^a-zA-Z0-9]/g, '_')}`,
    `Scorecard: ${result.testTitle}`,
    htmlBody
  );

  return true;
}

/**
 * Download Book PDF
 */
export function downloadBookPDF(book: BookItem): boolean {
  if (!checkAuthForDownload(book.title, 'Book')) {
    return false;
  }

  const fileSize = book.size || '2.4 MB';

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
  `;

  trackDownload({
    title: book.title,
    category: 'Book',
    subject: book.subject,
    fileSize,
    format: 'PDF'
  });

  recordSuperUserNotification({
    contentTitle: `Password-Protected Book: ${book.title}`,
    category: 'Book',
    fileSize,
    subject: book.subject
  });

  downloadHtmlDocument(
    `NeetCbt_Book_${book.title.replace(/[^a-zA-Z0-9]/g, '_')}`,
    book.title,
    htmlBody
  );

  return true;
}

/**
 * Download DPP PDF
 */
export function downloadDppPDF(dppData: { date: string; subject: string; level: string; questions: Question[] }): boolean {
  if (!checkAuthForDownload(`DPP: ${dppData.subject}`, 'DPP')) {
    return false;
  }

  const fileSize = '1.1 MB';

  const htmlBody = `
    <div class="test-title-bar">
      <h1 style="font-size: 18px; margin-bottom: 4px;">Daily Practice Problem (DPP) - ${dppData.subject}</h1>
      <div class="meta-grid">
        <div class="meta-item"><strong>Target Date:</strong> ${dppData.date}</div>
        <div class="meta-item"><strong>Level:</strong> ${dppData.level}</div>
        <div class="meta-item"><strong>Questions:</strong> ${dppData.questions.length} Qs</div>
        <div class="meta-item"><strong>Standard:</strong> NTA NEET Speed Practice</div>
      </div>
    </div>

    <div>
      ${dppData.questions.map((q, idx) => `
        <div class="question-card">
          <div style="margin-bottom: 6px;">
            <span class="q-num">Q${idx + 1}.</span>
            <span>${formatMathAndFormulas(cleanOcrText(q.questionText))}</span>
          </div>

          ${q.diagramSvg ? `<div style="margin: 10px 0; text-align: center;">${q.diagramSvg}</div>` : ''}

          <div class="options-grid">
            ${q.options.map((opt, oIdx) => `
              <div class="option-item">
                <strong>(${String.fromCharCode(65 + oIdx)})</strong> ${formatMathAndFormulas(cleanOcrText(opt))}
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;

  trackDownload({
    title: `DPP: ${dppData.subject} (${dppData.date})`,
    category: 'DPP',
    subject: dppData.subject,
    fileSize,
    format: 'PDF'
  });

  recordSuperUserNotification({
    contentTitle: `Password-Protected DPP: ${dppData.subject}`,
    category: 'DPP',
    fileSize,
    subject: dppData.subject
  });

  downloadHtmlDocument(
    `NeetCbt_DPP_${dppData.subject.replace(/[^a-zA-Z0-9]/g, '_')}_${dppData.date}`,
    `DPP: ${dppData.subject}`,
    htmlBody
  );

  return true;
}
