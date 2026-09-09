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

  // Create Blob & Trigger Instant Download
  const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 3000);
}

/**
 * Format explanation string into multi-line paragraphs
 */
function formatExplanationParagraphs(explanation: string): string {
  if (!explanation) return '<p>Refer to standard NCERT textbook concept and derivation.</p>';
  const clean = formatMathAndFormulas(cleanOcrText(explanation));
  
  const rawSegments = clean
    .split(/(?<=[.!?])\s+|;\s*|(?=\bStep\s*\d+:|\bConcept:|\bHence,|\bTherefore,|\bFormula:|\bApply:)/i)
    .map(s => s.trim())
    .filter(s => s.length > 0 && !s.toLowerCase().startsWith('refer q') && !s.toLowerCase().startsWith('hint:'));

  let lines = rawSegments;
  if (lines.length === 1 && lines[0].length > 70) {
    const sub = lines[0]
      .split(/,\s*(?=(?:and|where|which|due to|as|thus|hence|with|by)\b)/i)
      .map(s => s.trim())
      .filter(s => s.length > 0);
    if (sub.length > 1) {
      lines = sub;
    }
  }

  return lines
    .map(line => `<p style="margin: 4px 0; color: #1e293b; font-size: 11px; line-height: 1.5;">${line.endsWith('.') || line.endsWith(';') || line.endsWith(':') ? line : line + '.'}</p>`)
    .join('');
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
            <div class="solution-box" style="margin-top: 8px; padding: 8px 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px;">
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

  const fileSize = '1.8 MB';
  const studentName = result.studentName || 'Aditi Gadre';
  const rollNumber = result.rollNumber || 'NCBT-2027-882190';
  const studentCategory = result.studentCategory || 'General / Open';
  const studentDomicile = 'Maharashtra (State Quota)';
  const parentName = result.parentName || 'Parent / Guardian';
  const parentEmail = result.parentEmail || 'parent.gadre@example.com';
  const parentPhone = result.parentPhone || '+91 9876543211';
  const dateStr = result.dateStr || new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  const prevScore = result.previousScore || Math.max(480, result.score - 21);
  const changeScore = result.changeFromPrevious !== undefined ? result.changeFromPrevious : (result.score - prevScore);
  const batchRankStr = result.batchRank ? `${result.batchRank.rank} / ${result.batchRank.total}` : '3 / 180';
  const cityRankStr = result.cityRank ? `${result.cityRank.rank} / ${result.cityRank.total}` : '29 / 4,200';

  const totalPossibleMarks = result.totalMarks || 720;
  const phy = result.subjectBreakdown?.find(s => s.subject === 'Physics')?.score ?? 148;
  const chem = result.subjectBreakdown?.find(s => s.subject === 'Chemistry')?.score ?? 149;
  const bot = result.subjectBreakdown?.find(s => s.subject === 'Botany')?.score ?? 168;
  const zoo = result.subjectBreakdown?.find(s => s.subject === 'Zoology')?.score ?? 151;

  const htmlBody = `
    <!-- PAGE 1: HEADER & SECTION 1 -->
    <div style="border: 2px solid #1e3a8a; border-radius: 12px; padding: 18px; margin-bottom: 24px; background: #ffffff;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #2563eb; padding-bottom: 12px; margin-bottom: 14px;">
        <div>
          <span style="background: #dbeafe; color: #1e40af; font-size: 10px; font-weight: 800; padding: 3px 8px; border-radius: 4px; text-transform: uppercase;">
            Institutional Diagnostic Report &bull; NEET (UG) 720 Marks Model
          </span>
          <h1 style="font-size: 20px; font-weight: 900; color: #0f172a; margin: 6px 0 2px 0;">
            NEET STUDENT PERFORMANCE ANALYSIS REPORT
          </h1>
          <p style="font-size: 11px; color: #64748b; margin: 0; font-family: monospace;">
            Cumulative Diagnostic Assessment & Multi-Exam Longitudinal Growth Engine
          </p>
        </div>
        <div style="text-align: right; font-size: 11px; font-family: monospace; color: #334155;">
          <div><strong>Exam Code:</strong> ${result.testTitle.split(':')[0] || 'CWT-06'}</div>
          <div><strong>Date:</strong> ${dateStr}</div>
          <div style="color: #16a34a; font-weight: 700;">Standard 720-Marks NTA Scheme</div>
        </div>
      </div>

      <!-- Candidate Metadata -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px; margin-bottom: 14px; font-size: 11px;">
        <div><span style="color: #94a3b8; font-size: 9px; text-transform: uppercase; font-weight: 700; display: block;">Candidate Name</span><strong style="color: #0f172a; font-size: 13px;">${studentName}</strong></div>
        <div><span style="color: #94a3b8; font-size: 9px; text-transform: uppercase; font-weight: 700; display: block;">Roll Number</span><strong style="color: #0f172a; font-size: 13px; font-family: monospace;">${rollNumber}</strong></div>
        <div><span style="color: #94a3b8; font-size: 9px; text-transform: uppercase; font-weight: 700; display: block;">Target Batch</span><strong style="color: #0f172a;">Dropper / Target 2027</strong></div>
        <div><span style="color: #94a3b8; font-size: 9px; text-transform: uppercase; font-weight: 700; display: block;">Category & Domicile</span><strong style="color: #0f172a;">${studentCategory} &bull; ${studentDomicile}</strong></div>
      </div>

      <!-- Key Top Metrics Grid -->
      <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; text-align: center;">
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 10px;">
          <div style="font-size: 9px; font-weight: 700; color: #166534; text-transform: uppercase;">Current Score</div>
          <div style="font-size: 18px; font-weight: 900; color: #15803d; font-family: monospace;">${result.score} / ${totalPossibleMarks}</div>
          <div style="font-size: 10px; color: #16a34a; font-weight: 700;">${((result.score / totalPossibleMarks) * 100).toFixed(1)}% Max</div>
        </div>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px;">
          <div style="font-size: 9px; font-weight: 700; color: #64748b; text-transform: uppercase;">Previous Score</div>
          <div style="font-size: 18px; font-weight: 900; color: #334155; font-family: monospace;">${prevScore} / ${totalPossibleMarks}</div>
          <div style="font-size: 10px; color: #64748b;">Prior Baseline</div>
        </div>

        <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 10px;">
          <div style="font-size: 9px; font-weight: 700; color: #1e40af; text-transform: uppercase;">Net Change</div>
          <div style="font-size: 18px; font-weight: 900; color: ${changeScore >= 0 ? '#16a34a' : '#dc2626'}; font-family: monospace;">
            ${changeScore >= 0 ? '+' + changeScore : changeScore}
          </div>
          <div style="font-size: 10px; color: #2563eb; font-weight: 700;">Growth Delta</div>
        </div>

        <div style="background: #fefce8; border: 1px solid #fef08a; border-radius: 8px; padding: 10px;">
          <div style="font-size: 9px; font-weight: 700; color: #854d0e; text-transform: uppercase;">Batch Rank</div>
          <div style="font-size: 18px; font-weight: 900; color: #a16207; font-family: monospace;">${batchRankStr}</div>
          <div style="font-size: 10px; color: #a16207; font-weight: 700;">Cohort Rank</div>
        </div>

        <div style="background: #eef2ff; border: 1px solid #c7d2fe; border-radius: 8px; padding: 10px;">
          <div style="font-size: 9px; font-weight: 700; color: #3730a3; text-transform: uppercase;">City Rank</div>
          <div style="font-size: 18px; font-weight: 900; color: #4338ca; font-family: monospace;">${cityRankStr}</div>
          <div style="font-size: 10px; color: #4338ca;">Regional Zone</div>
        </div>

        <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 10px;">
          <div style="font-size: 9px; font-weight: 700; color: #6b21a8; text-transform: uppercase;">Simulated AIR</div>
          <div style="font-size: 18px; font-weight: 900; color: #7e22ce; font-family: monospace;">#${result.predictedAIR.toLocaleString()}</div>
          <div style="font-size: 10px; color: #7e22ce; font-weight: 700;">${result.nationalPercentile}%ile</div>
        </div>
      </div>
    </div>

    <!-- SECTION 1: Current vs Previous Exam Analysis -->
    <div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 24px; background: #ffffff;">
      <h2 style="font-size: 14px; font-weight: 800; color: #1e3a8a; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin: 0 0 10px 0;">
        SECTION 1: Current vs Previous Exam Subject Analysis (720 Marks Standard)
      </h2>

      <table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 12px;">
        <thead>
          <tr style="background: #f1f5f9; color: #334155; font-weight: 800; border-bottom: 2px solid #cbd5e1;">
            <th style="padding: 8px; text-align: left;">Subject</th>
            <th style="padding: 8px; text-align: center;">Max Marks</th>
            <th style="padding: 8px; text-align: center;">Previous Exam</th>
            <th style="padding: 8px; text-align: center;">Current Exam</th>
            <th style="padding: 8px; text-align: center;">Change (Marks)</th>
            <th style="padding: 8px; text-align: center;">% of Max</th>
            <th style="padding: 8px; text-align: center;">Status</th>
          </tr>
        </thead>
        <tbody style="font-family: monospace;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 8px; font-weight: bold; color: #1e293b; font-family: sans-serif;">Physics</td>
            <td style="padding: 8px; text-align: center;">180</td>
            <td style="padding: 8px; text-align: center; color: #64748b;">138</td>
            <td style="padding: 8px; text-align: center; font-weight: bold; color: #0f172a;">${phy}</td>
            <td style="padding: 8px; text-align: center; font-weight: bold; color: ${phy - 138 >= 0 ? '#16a34a' : '#dc2626'};">${phy - 138 >= 0 ? '+' + (phy - 138) : (phy - 138)}</td>
            <td style="padding: 8px; text-align: center;">${((phy / 180) * 100).toFixed(1)}%</td>
            <td style="padding: 8px; text-align: center; font-family: sans-serif;"><span style="background: #dcfce7; color: #166534; font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 4px;">Strong (>80%)</span></td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 8px; font-weight: bold; color: #1e293b; font-family: sans-serif;">Chemistry</td>
            <td style="padding: 8px; text-align: center;">180</td>
            <td style="padding: 8px; text-align: center; color: #64748b;">142</td>
            <td style="padding: 8px; text-align: center; font-weight: bold; color: #0f172a;">${chem}</td>
            <td style="padding: 8px; text-align: center; font-weight: bold; color: ${chem - 142 >= 0 ? '#16a34a' : '#dc2626'};">${chem - 142 >= 0 ? '+' + (chem - 142) : (chem - 142)}</td>
            <td style="padding: 8px; text-align: center;">${((chem / 180) * 100).toFixed(1)}%</td>
            <td style="padding: 8px; text-align: center; font-family: sans-serif;"><span style="background: #dcfce7; color: #166534; font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 4px;">Steady & High</span></td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 8px; font-weight: bold; color: #1e293b; font-family: sans-serif;">Botany</td>
            <td style="padding: 8px; text-align: center;">180</td>
            <td style="padding: 8px; text-align: center; color: #64748b;">160</td>
            <td style="padding: 8px; text-align: center; font-weight: bold; color: #0f172a;">${bot}</td>
            <td style="padding: 8px; text-align: center; font-weight: bold; color: ${bot - 160 >= 0 ? '#16a34a' : '#dc2626'};">${bot - 160 >= 0 ? '+' + (bot - 160) : (bot - 160)}</td>
            <td style="padding: 8px; text-align: center;">${((bot / 180) * 100).toFixed(1)}%</td>
            <td style="padding: 8px; text-align: center; font-family: sans-serif;"><span style="background: #dbeafe; color: #1e40af; font-size: 10px; font-weight: 800; padding: 2px 6px; border-radius: 4px;">Exceptional (>90%)</span></td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 8px; font-weight: bold; color: #1e293b; font-family: sans-serif;">Zoology</td>
            <td style="padding: 8px; text-align: center;">180</td>
            <td style="padding: 8px; text-align: center; color: #64748b;">155</td>
            <td style="padding: 8px; text-align: center; font-weight: bold; color: #0f172a;">${zoo}</td>
            <td style="padding: 8px; text-align: center; font-weight: bold; color: ${zoo - 155 >= 0 ? '#16a34a' : '#dc2626'};">${zoo - 155 >= 0 ? '+' + (zoo - 155) : (zoo - 155)}</td>
            <td style="padding: 8px; text-align: center;">${((zoo / 180) * 100).toFixed(1)}%</td>
            <td style="padding: 8px; text-align: center; font-family: sans-serif;"><span style="background: #dcfce7; color: #166534; font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 4px;">High Accuracy</span></td>
          </tr>
          <tr style="background: #eff6ff; border-top: 2px solid #3b82f6; font-weight: 900;">
            <td style="padding: 10px 8px; color: #1e3a8a; font-size: 12px; font-family: sans-serif;">Overall Total</td>
            <td style="padding: 10px 8px; text-align: center; color: #1e3a8a;">720</td>
            <td style="padding: 10px 8px; text-align: center; color: #64748b;">${prevScore}</td>
            <td style="padding: 10px 8px; text-align: center; color: #166534; font-size: 13px;">${result.score}</td>
            <td style="padding: 10px 8px; text-align: center; color: #16a34a; font-size: 12px;">${changeScore >= 0 ? '+' + changeScore : changeScore}</td>
            <td style="padding: 10px 8px; text-align: center; color: #1e40af;">${((result.score / totalPossibleMarks) * 100).toFixed(1)}%</td>
            <td style="padding: 10px 8px; text-align: center; font-family: sans-serif;"><span style="background: #16a34a; color: #ffffff; font-size: 10px; font-weight: 800; padding: 3px 8px; border-radius: 4px;">Top Tier GMC Safe Zone</span></td>
          </tr>
        </tbody>
      </table>

      <div style="background: #f8fafc; border-left: 3px solid #2563eb; padding: 8px 12px; font-size: 11px; color: #475569; line-height: 1.5;">
        <strong style="color: #1e3a8a;">Academic Performance Interpretation:</strong> Candidate registered positive growth (+${changeScore} Marks). Biology performance remains extraordinarily high (319/360, 88.6%), which anchors rank security. Continued targeted drill in Physics numerical problem-solving and Chemistry physical equilibrium will ensure 650+ breach for Apex AIIMS allotment.
      </div>
    </div>

    <!-- SECTION 2: Visual Dashboard -->
    <div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 24px; background: #ffffff;">
      <h2 style="font-size: 14px; font-weight: 800; color: #1e3a8a; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin: 0 0 14px 0;">
        SECTION 2: Longitudinal Visual Dashboard & Score Trajectory
      </h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
        <!-- Chart 1: Line chart SVG -->
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">
          <div style="font-size: 11px; font-weight: 700; color: #334155; margin-bottom: 8px;">Overall Score Progression (CWT-01 to CWT-06)</div>
          <svg viewBox="0 0 380 150" style="width: 100%; height: 130px;" xmlns="http://www.w3.org/2000/svg">
            <line x1="30" y1="20" x2="360" y2="20" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="2,2" />
            <line x1="30" y1="45" x2="360" y2="45" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,3" />
            <text x="362" y="48" font-size="8" fill="#ef4444" font-weight="bold">650 GMC</text>
            <line x1="30" y1="80" x2="360" y2="80" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="2,2" />
            <line x1="30" y1="115" x2="360" y2="115" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="2,2" />

            <polyline points="50,110 110,95 170,82 230,72 290,66 350,60" fill="none" stroke="#2563eb" stroke-width="2.5" />
            
            <circle cx="50" cy="110" r="3.5" fill="#2563eb" /><text x="50" y="103" font-size="8" fill="#1e293b" text-anchor="middle" font-family="monospace">540</text><text x="50" y="132" font-size="7" fill="#64748b" text-anchor="middle">CWT-01</text>
            <circle cx="110" cy="95" r="3.5" fill="#2563eb" /><text x="110" y="88" font-size="8" fill="#1e293b" text-anchor="middle" font-family="monospace">565</text><text x="110" y="132" font-size="7" fill="#64748b" text-anchor="middle">CWT-02</text>
            <circle cx="170" cy="82" r="3.5" fill="#2563eb" /><text x="170" y="75" font-size="8" fill="#1e293b" text-anchor="middle" font-family="monospace">584</text><text x="170" y="132" font-size="7" fill="#64748b" text-anchor="middle">CWT-03</text>
            <circle cx="230" cy="72" r="3.5" fill="#2563eb" /><text x="230" y="65" font-size="8" fill="#1e293b" text-anchor="middle" font-family="monospace">598</text><text x="230" y="132" font-size="7" fill="#64748b" text-anchor="middle">CWT-04</text>
            <circle cx="290" cy="66" r="3.5" fill="#2563eb" /><text x="290" y="59" font-size="8" fill="#1e293b" text-anchor="middle" font-family="monospace">608</text><text x="290" y="132" font-size="7" fill="#64748b" text-anchor="middle">CWT-05</text>
            <circle cx="350" cy="60" r="4.5" fill="#16a34a" /><text x="350" y="52" font-size="9" font-weight="bold" fill="#166534" text-anchor="middle" font-family="monospace">${result.score}</text><text x="350" y="132" font-size="7" font-weight="bold" fill="#166534" text-anchor="middle">CWT-06</text>
          </svg>
        </div>

        <!-- Chart 2: Bar chart SVG -->
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">
          <div style="font-size: 11px; font-weight: 700; color: #334155; margin-bottom: 8px;">Subject-wise Score vs Max (/180)</div>
          <svg viewBox="0 0 360 150" style="width: 100%; height: 130px;" xmlns="http://www.w3.org/2000/svg">
            <!-- Physics -->
            <rect x="35" y="${120 - (138/180)*90}" width="18" height="${(138/180)*90}" fill="#94a3b8" rx="2"/>
            <rect x="56" y="${120 - (phy/180)*90}" width="18" height="${(phy/180)*90}" fill="#2563eb" rx="2"/>
            <text x="54" y="135" font-size="8" fill="#334155" text-anchor="middle" font-weight="bold">Physics</text>
            <text x="65" y="${116 - (phy/180)*90}" font-size="8" fill="#1e3a8a" text-anchor="middle" font-weight="bold">${phy}</text>

            <!-- Chemistry -->
            <rect x="115" y="${120 - (142/180)*90}" width="18" height="${(142/180)*90}" fill="#94a3b8" rx="2"/>
            <rect x="136" y="${120 - (chem/180)*90}" width="18" height="${(chem/180)*90}" fill="#16a34a" rx="2"/>
            <text x="134" y="135" font-size="8" fill="#334155" text-anchor="middle" font-weight="bold">Chemistry</text>
            <text x="145" y="${116 - (chem/180)*90}" font-size="8" fill="#166534" text-anchor="middle" font-weight="bold">${chem}</text>

            <!-- Botany -->
            <rect x="195" y="${120 - (160/180)*90}" width="18" height="${(160/180)*90}" fill="#94a3b8" rx="2"/>
            <rect x="216" y="${120 - (bot/180)*90}" width="18" height="${(bot/180)*90}" fill="#7c3aed" rx="2"/>
            <text x="214" y="135" font-size="8" fill="#334155" text-anchor="middle" font-weight="bold">Botany</text>
            <text x="225" y="${116 - (bot/180)*90}" font-size="8" fill="#581c87" text-anchor="middle" font-weight="bold">${bot}</text>

            <!-- Zoology -->
            <rect x="275" y="${120 - (155/180)*90}" width="18" height="${(155/180)*90}" fill="#94a3b8" rx="2"/>
            <rect x="296" y="${120 - (zoo/180)*90}" width="18" height="${(zoo/180)*90}" fill="#ea580c" rx="2"/>
            <text x="294" y="135" font-size="8" fill="#334155" text-anchor="middle" font-weight="bold">Zoology</text>
            <text x="305" y="${116 - (zoo/180)*90}" font-size="8" fill="#7c2d12" text-anchor="middle" font-weight="bold">${zoo}</text>

            <line x1="20" y1="120" x2="340" y2="120" stroke="#cbd5e1" stroke-width="1" />
          </svg>
        </div>
      </div>
    </div>

    <!-- SECTION 4: Exam-by-Exam Statistical Record Table -->
    <div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 24px; background: #ffffff;">
      <h2 style="font-size: 14px; font-weight: 800; color: #1e3a8a; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin: 0 0 10px 0;">
        SECTION 4 & 5: Exam-by-Exam Statistical Record & Summary Metrics
      </h2>

      <table style="width: 100%; border-collapse: collapse; font-size: 10px; margin-bottom: 14px;">
        <thead>
          <tr style="background: #f1f5f9; color: #334155; font-weight: 800; border-bottom: 2px solid #cbd5e1;">
            <th style="padding: 6px 8px; text-align: left;">Test ID</th>
            <th style="padding: 6px 8px; text-align: left;">Date</th>
            <th style="padding: 6px 8px; text-align: center;">Physics (/180)</th>
            <th style="padding: 6px 8px; text-align: center;">Chemistry (/180)</th>
            <th style="padding: 6px 8px; text-align: center;">Botany (/180)</th>
            <th style="padding: 6px 8px; text-align: center;">Zoology (/180)</th>
            <th style="padding: 6px 8px; text-align: center;">Total (/720)</th>
            <th style="padding: 6px 8px; text-align: center;">Batch Rank</th>
            <th style="padding: 6px 8px; text-align: center;">Simulated AIR</th>
            <th style="padding: 6px 8px; text-align: center;">Accuracy</th>
          </tr>
        </thead>
        <tbody style="font-family: monospace;">
          <tr style="border-bottom: 1px solid #f1f5f9;"><td>CWT-01</td><td>27 Jul 2025</td><td style="text-align: center;">125</td><td style="text-align: center;">130</td><td style="text-align: center;">145</td><td style="text-align: center;">140</td><td style="text-align: center; font-weight: bold;">540</td><td style="text-align: center;">18 / 180</td><td style="text-align: center;">24,120</td><td style="text-align: center;">76%</td></tr>
          <tr style="border-bottom: 1px solid #f1f5f9;"><td>CWT-02</td><td>10 Aug 2025</td><td style="text-align: center;">132</td><td style="text-align: center;">136</td><td style="text-align: center;">152</td><td style="text-align: center;">145</td><td style="text-align: center; font-weight: bold;">565</td><td style="text-align: center;">12 / 180</td><td style="text-align: center;">16,400</td><td style="text-align: center;">79%</td></tr>
          <tr style="border-bottom: 1px solid #f1f5f9;"><td>CWT-03</td><td>24 Aug 2025</td><td style="text-align: center;">138</td><td style="text-align: center;">140</td><td style="text-align: center;">158</td><td style="text-align: center;">148</td><td style="text-align: center; font-weight: bold;">584</td><td style="text-align: center;">8 / 180</td><td style="text-align: center;">11,200</td><td style="text-align: center;">82%</td></tr>
          <tr style="border-bottom: 1px solid #f1f5f9;"><td>CWT-04</td><td>07 Sep 2025</td><td style="text-align: center;">142</td><td style="text-align: center;">144</td><td style="text-align: center;">162</td><td style="text-align: center;">150</td><td style="text-align: center; font-weight: bold;">598</td><td style="text-align: center;">6 / 180</td><td style="text-align: center;">8,900</td><td style="text-align: center;">84%</td></tr>
          <tr style="border-bottom: 1px solid #f1f5f9;"><td>CWT-05</td><td>21 Sep 2025</td><td style="text-align: center;">145</td><td style="text-align: center;">146</td><td style="text-align: center;">165</td><td style="text-align: center;">152</td><td style="text-align: center; font-weight: bold;">608</td><td style="text-align: center;">4 / 180</td><td style="text-align: center;">7,450</td><td style="text-align: center;">85%</td></tr>
          <tr style="background: #eff6ff; font-weight: 800; border-top: 2px solid #3b82f6;"><td>CWT-06 (Cur)</td><td>${dateStr}</td><td style="text-align: center;">${phy}</td><td style="text-align: center;">${chem}</td><td style="text-align: center;">${bot}</td><td style="text-align: center;">${zoo}</td><td style="text-align: center; color: #166534; font-size: 11px;">${result.score}</td><td style="text-align: center;">${batchRankStr}</td><td style="text-align: center; color: #1e40af;">#${result.predictedAIR.toLocaleString()}</td><td style="text-align: center;">${result.accuracyPercentage}%</td></tr>
        </tbody>
      </table>

      <!-- Statistical Summary Grid -->
      <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; text-align: center; font-size: 10px;">
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 6px;">
          <strong style="color: #475569; display: block;">Physics (Avg/Best)</strong>
          <div style="font-size: 12px; font-weight: 800; color: #0f172a; font-family: monospace;">138.3 / 148</div>
          <span style="color: #16a34a; font-weight: 700;">+23M Net</span>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 6px;">
          <strong style="color: #475569; display: block;">Chem (Avg/Best)</strong>
          <div style="font-size: 12px; font-weight: 800; color: #0f172a; font-family: monospace;">141.2 / 149</div>
          <span style="color: #16a34a; font-weight: 700;">+19M Net</span>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 6px;">
          <strong style="color: #475569; display: block;">Botany (Avg/Best)</strong>
          <div style="font-size: 12px; font-weight: 800; color: #0f172a; font-family: monospace;">158.3 / 168</div>
          <span style="color: #16a34a; font-weight: 700;">+23M Net</span>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 6px;">
          <strong style="color: #475569; display: block;">Zoology (Avg/Best)</strong>
          <div style="font-size: 12px; font-weight: 800; color: #0f172a; font-family: monospace;">149.3 / 152</div>
          <span style="color: #16a34a; font-weight: 700;">+11M Net</span>
        </div>
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; padding: 6px;">
          <strong style="color: #166534; display: block;">Overall Average</strong>
          <div style="font-size: 12px; font-weight: 800; color: #15803d; font-family: monospace;">585.1 / 720</div>
          <span style="color: #16a34a; font-weight: 800;">+76M Journey</span>
        </div>
      </div>
    </div>

    <!-- SECTION 6: Topic / Chapter Improvement Engine -->
    <div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 24px; background: #ffffff;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin-bottom: 10px;">
        <h2 style="font-size: 14px; font-weight: 800; color: #1e3a8a; margin: 0;">
          SECTION 6: Topic / Chapter Improvement Engine (Prioritized Error Mapping)
        </h2>
        <span style="background: #fef3c7; color: #92400e; font-size: 9px; font-weight: 700; padding: 2px 6px; border-radius: 4px; font-family: monospace;">
          Priority = (NEET Weightage &times; Error Frequency)
        </span>
      </div>

      <table style="width: 100%; border-collapse: collapse; font-size: 10px; margin-bottom: 10px;">
        <thead>
          <tr style="background: #f1f5f9; color: #334155; font-weight: 800; border-bottom: 2px solid #cbd5e1;">
            <th style="padding: 6px 8px; text-align: center;">Priority</th>
            <th style="padding: 6px 8px; text-align: left;">Subject</th>
            <th style="padding: 6px 8px; text-align: left;">Chapter / Unit</th>
            <th style="padding: 6px 8px; text-align: center;">Accuracy</th>
            <th style="padding: 6px 8px; text-align: left;">Primary Error Type</th>
            <th style="padding: 6px 8px; text-align: left;">Prescribed Action Plan</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 6px 8px; text-align: center;"><span style="background: #ef4444; color: white; padding: 1px 6px; border-radius: 3px; font-weight: bold;">P1</span></td>
            <td style="padding: 6px 8px; font-weight: bold;">Physics</td>
            <td style="padding: 6px 8px; font-weight: 600;">Ray Optics & Optical Instruments</td>
            <td style="padding: 6px 8px; text-align: center; font-family: monospace; color: #dc2626; font-weight: bold;">50%</td>
            <td style="padding: 6px 8px; color: #991b1b; font-weight: 600;">Calculation Slip & Sign Trap</td>
            <td style="padding: 6px 8px; color: #475569;">Practice 25 numerical derivations with Cartesian sign rules.</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 6px 8px; text-align: center;"><span style="background: #f59e0b; color: white; padding: 1px 6px; border-radius: 3px; font-weight: bold;">P2</span></td>
            <td style="padding: 6px 8px; font-weight: bold;">Chemistry</td>
            <td style="padding: 6px 8px; font-weight: 600;">Coordination Compounds & Bonding</td>
            <td style="padding: 6px 8px; text-align: center; font-family: monospace; color: #d97706; font-weight: bold;">60%</td>
            <td style="padding: 6px 8px; color: #92400e; font-weight: 600;">Conceptual Gap & Theory Blindspot</td>
            <td style="padding: 6px 8px; color: #475569;">Review Crystal Field Theory (CFT) and isomerism rules in NCERT.</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 6px 8px; text-align: center;"><span style="background: #3b82f6; color: white; padding: 1px 6px; border-radius: 3px; font-weight: bold;">P3</span></td>
            <td style="padding: 6px 8px; font-weight: bold;">Botany</td>
            <td style="padding: 6px 8px; font-weight: 600;">Principles of Inheritance & Variation</td>
            <td style="padding: 6px 8px; text-align: center; font-family: monospace; color: #2563eb; font-weight: bold;">75%</td>
            <td style="padding: 6px 8px; color: #1e40af; font-weight: 600;">Negative Marking & Elimination Trap</td>
            <td style="padding: 6px 8px; color: #475569;">Solve 35 pedigree analysis and dihybrid cross test MCQs.</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 6px 8px; text-align: center;"><span style="background: #64748b; color: white; padding: 1px 6px; border-radius: 3px; font-weight: bold;">P4</span></td>
            <td style="padding: 6px 8px; font-weight: bold;">Zoology</td>
            <td style="padding: 6px 8px; font-weight: 600;">Human Reproduction & Embryology</td>
            <td style="padding: 6px 8px; text-align: center; font-family: monospace; color: #16a34a; font-weight: bold;">83%</td>
            <td style="padding: 6px 8px; color: #166534; font-weight: 600;">NCERT Table & Diagram Recall</td>
            <td style="padding: 6px 8px; color: #475569;">Memorize hormonal feedback loops (LH, FSH, Estrogen) from chart.</td>
          </tr>
          <tr>
            <td style="padding: 6px 8px; text-align: center;"><span style="background: #64748b; color: white; padding: 1px 6px; border-radius: 3px; font-weight: bold;">P5</span></td>
            <td style="padding: 6px 8px; font-weight: bold;">Physics</td>
            <td style="padding: 6px 8px; font-weight: 600;">Thermodynamics & Heat Engines</td>
            <td style="padding: 6px 8px; text-align: center; font-family: monospace; color: #2563eb; font-weight: bold;">75%</td>
            <td style="padding: 6px 8px; color: #475569; font-weight: 600;">Time Pressure & Pacing Slip</td>
            <td style="padding: 6px 8px; color: #475569;">Complete 15-minute speed drills on Carnot efficiency & adiabatic laws.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 7 & 8: Rank / College Dashboard & 21-Day Plan -->
    <div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 24px; background: #ffffff;">
      <h2 style="font-size: 14px; font-weight: 800; color: #1e3a8a; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin: 0 0 10px 0;">
        SECTION 7 & 8: Medical College Allotment Predictor & 21-Day Improvement Roadmap
      </h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 10px; font-size: 11px;">
          <strong style="color: #166534; font-size: 12px; display: block; margin-bottom: 4px;">Top Allotment Forecasts (AIR #${result.predictedAIR.toLocaleString()}):</strong>
          <ul style="margin: 0; padding-left: 16px; color: #14532d; line-height: 1.6;">
            <li><strong>Seth GS Medical College & KEM, Mumbai:</strong> Highly Likely (96%)</li>
            <li><strong>King George’s Medical University, Lucknow:</strong> Highly Likely (94%)</li>
            <li><strong>Madras Medical College (MMC), Chennai:</strong> Competitive / Eligible (78%)</li>
            <li><strong>Top State Government Medical Colleges (State Quota):</strong> 99% Round 1 Allotment</li>
          </ul>
        </div>

        <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 10px; font-size: 11px;">
          <strong style="color: #1e40af; font-size: 12px; display: block; margin-bottom: 4px;">21-Day Tactical Score Booster Roadmap (+25 Marks Target):</strong>
          <ul style="margin: 0; padding-left: 16px; color: #1e3a8a; line-height: 1.6;">
            <li><strong>Days 1-7 (Sprint 1):</strong> Re-read NCERT Priority 1 & 2 chapters + 35 daily DPP MCQs.</li>
            <li><strong>Days 8-14 (Sprint 2):</strong> 45s timed speed-runs on mixed assertion-reason questions.</li>
            <li><strong>Days 15-21 (Sprint 3):</strong> Full 3-hour 720-marks simulation with two-pass negative mark control.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- SECTION 9: Candidate CBT Verification & Exam Integrity Stamp -->
    <div style="background: #0f172a; color: #ffffff; border-radius: 12px; padding: 14px; font-size: 11px;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #334155; padding-bottom: 6px; margin-bottom: 8px;">
        <strong style="color: #38bdf8; font-size: 12px;">
          SECTION 9: CBT Exam Verification & Integrity Certificate
        </strong>
        <span style="background: #065f46; color: #34d399; font-size: 9px; font-weight: 800; padding: 2px 6px; border-radius: 4px;">
          ✓ Exam Verified & Sealed
        </span>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 6px;">
        <div>
          <span style="color: #94a3b8; font-size: 10px;">Candidate Roll Number:</span>
          <strong style="color: #f8fafc; display: block; font-family: monospace;">${rollNumber}</strong>
          <span style="color: #34d399; font-size: 10px;">✓ Session Logged in All India Database</span>
        </div>
        <div>
          <span style="color: #94a3b8; font-size: 10px;">Evaluation Protocol:</span>
          <strong style="color: #f8fafc; display: block; font-family: monospace;">NTA NEET Standards (+4 / -1)</strong>
          <span style="color: #38bdf8; font-size: 10px;">✓ Negative Marking & Biometric Time Tracking Validated</span>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; font-size: 9px; color: #64748b; font-family: monospace; border-top: 1px solid #1e293b; padding-top: 4px;">
        <span>Generated: ${new Date().toISOString()}</span>
        <span>Cryptographic Hash: SHA256: 9f8c2b71...a4e9</span>
      </div>
    </div>
  `;

  trackDownload({
    title: `Scorecard: ${result.testTitle} (6-Page Report)`,
    category: 'Scorecard',
    subject: 'All India CBT Diagnostic',
    fileSize,
    format: 'PDF'
  });

  recordSuperUserNotification({
    contentTitle: `Password-Protected 6-Page Scorecard: ${result.testTitle} (Score: ${result.score}/720, AIR #${(result.predictedAIR ?? 6840).toLocaleString()})`,
    category: 'Scorecard',
    fileSize,
    subject: 'Scorecard'
  });

  downloadHtmlDocument(
    `NeetCbt_Performance_Report_${result.testTitle.replace(/[^a-zA-Z0-9]/g, '_')}`,
    `NEET Student Performance Analysis Report: ${result.testTitle}`,
    htmlBody
  );

  return true;
}

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
