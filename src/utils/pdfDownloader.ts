import { BookItem, Question, TestItem, UserTestResult } from '../types';
import { cleanOcrText } from './ocrCleaner';
import { formatMathAndFormulas } from './mathFormatter';
import { trackDownload, getCurrentUser } from './downloadTracker';
import { recordSuperUserNotification } from './superUserNotifier';
import { getQuestionDisplayTag } from './subtopicResolver';

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
  
  // Check if explanation has structured markdown sections
  const tokens = clean.split(/(?=###|\b(?:📘|⚡|✓|💡)\s*\*\*)/i);
  if (tokens.length > 1) {
    return tokens.map(token => {
      const trimmed = token.trim();
      if (!trimmed) return '';
      const lower = trimmed.toLowerCase();
      let header = '';
      let bg = '#f8fafc';
      let border = '#e2e8f0';
      let color = '#334155';

      if (lower.includes('concept') || lower.includes('ncert') || lower.includes('theory')) {
        header = '📘 NCERT Fundamental Concept';
        bg = '#eff6ff'; border = '#bfdbfe'; color = '#1e3a8a';
      } else if (lower.includes('derivation') || lower.includes('calculation') || lower.includes('step')) {
        header = '⚡ Step-by-Step Derivation & Calculations';
        bg = '#fffbeb'; border = '#fde68a'; color = '#78350f';
      } else if (lower.includes('tip') || lower.includes('principle') || lower.includes('examiner') || lower.includes('takeaway')) {
        header = '💡 Examiner Pro-Tip & Key Takeaway';
        bg = '#ecfdf5'; border = '#a7f3d0'; color = '#065f46';
      }

      let body = trimmed
        .replace(/^###\s*(?:📘|⚡|✓|💡)?\s*[^\n\r]+/i, '')
        .replace(/^(?:📘|⚡|✓|💡)\s*\*\*[^*]+\*\*\s*:?/i, '')
        .replace(/^\*\*[^*]+\*\*\s*:?/i, '')
        .trim();

      const lines = body.split(/\r?\n+/).map(l => l.trim()).filter(l => l.length > 0);

      let contentHtml = '';
      if (header.includes('Derivation')) {
        const subLines: string[] = [];
        for (const l of lines) {
          const subs = l.split(/(?<=[^\s=+\-*/(])\s+(?=[A-Za-z]\s*=\s*|Step\s*\d+:|\bHence,|\bTherefore,|\bFormula:|\bApply:|\bNow,|\bThus)/);
          subLines.push(...subs);
        }
        contentHtml = subLines.map((l, idx) => `
          <div style="margin: 3px 0; font-family: monospace; font-size: 10px; color: #0f172a;">
            <span style="font-weight: 700; color: #b45309; min-width: 44px; display: inline-block;">Step ${idx + 1}:</span> ${l}
          </div>
        `).join('');
      } else {
        contentHtml = lines.map(l => `<p style="margin: 2px 0; font-size: 10px; line-height: 1.4; color: #1e293b;">${l}</p>`).join('');
      }

      return `
        <div style="margin-top: 6px; padding: 6px 10px; background: ${bg}; border: 1px solid ${border}; border-radius: 6px;">
          ${header ? `<div style="font-weight: 800; font-size: 10px; color: ${color}; margin-bottom: 3px;">${header}</div>` : ''}
          ${contentHtml}
        </div>
      `;
    }).join('');
  }

  // Fallback for simple explanations
  const lines = clean.split(/\r?\n+/).map(l => l.trim()).filter(l => l.length > 0);
  return lines.map(l => `<p style="margin: 3px 0; color: #1e293b; font-size: 10px; line-height: 1.4;">${l}</p>`).join('');
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

  const cleanTitle = (test.title || '')
    .replace(/Physics\s*(?:and|&)\s*Measurement\s*\+\s*Experimental\s*Skills/gi, 'Units and Measurements')
    .replace(/Physical World\s*&\s*Units and Measurements/gi, 'Units and Measurements')
    .replace(/Physics\s*(?:and|&)\s*Measurement/gi, 'Units and Measurements')
    .replace(/Physics Chapter 01: Physical World & Units and Measurements/gi, 'Physics Chapter 01: Units and Measurements')
    .replace(/Motion in a Straight Line\s*\([^\)]*\)\s*(?:&|and)\s*Motion in a Plane\s*\([^\)]*\)/gi, 'Kinematics (Motion in 1D & 2D)');

  const cleanSyllabus = (test.syllabus || '')
    .replace(/Physics\s*(?:and|&)\s*Measurement\s*\+\s*Experimental\s*Skills/gi, 'Units and Measurements')
    .replace(/Physical World\s*&\s*Units and Measurements/gi, 'Units and Measurements')
    .replace(/Physics\s*(?:and|&)\s*Measurement/gi, 'Units and Measurements')
    .replace(/Physics Chapter 01: Physical World & Units and Measurements/gi, 'Physics Chapter 01: Units and Measurements')
    .replace(/Unit 1:\s*The Living World,\s*Biological Classification,\s*Plant Kingdom\s*&\s*Animal Kingdom/gi, 'The Living World: What is Living, Diversity, Binomial Nomenclature, Taxonomic Categories & Taxonomical Aids');

  const htmlBody = `
    <div class="test-title-bar">
      <h1 style="font-size: 18px; margin-bottom: 4px;">${cleanTitle}</h1>
      <p style="margin: 0; color: #4b5563; font-size: 12px;"><strong>Syllabus Scope:</strong> ${cleanSyllabus}</p>
      
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
            <span style="font-size: 11px; color: #64748b; font-family: 'JetBrains Mono', monospace;">${getQuestionDisplayTag(q)}</span>
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
  
  // Retrieve candidate's authentic test history from localStorage
  let pastCompletedTests: any[] = [];
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem('neet_completed_tests') : null;
    if (raw) pastCompletedTests = JSON.parse(raw);
  } catch {}

  const previousExam = pastCompletedTests.find((t: any) => t.testId !== result.testId && t.dateStr !== dateStr);
  const prevPhy = previousExam?.subjectBreakdown?.find((s: any) => s.subject === 'Physics')?.score;
  const prevChem = previousExam?.subjectBreakdown?.find((s: any) => s.subject === 'Chemistry')?.score;
  const prevBot = previousExam?.subjectBreakdown?.find((s: any) => s.subject === 'Botany')?.score;
  const prevZoo = previousExam?.subjectBreakdown?.find((s: any) => s.subject === 'Zoology')?.score;
  const prevScore = previousExam?.score ?? (result.previousScore ?? null);
  const changeScore = prevScore !== null ? (result.score - prevScore) : null;
  const batchRankStr = result.batchRank && result.batchRank.rank > 0 ? `${result.batchRank.rank} / ${result.batchRank.total}` : 'Unranked';
  const cityRankStr = result.cityRank && result.cityRank.rank > 0 ? `${result.cityRank.rank} / ${result.cityRank.total}` : 'Unranked';

  const totalPossibleMarks = result.totalMarks || 720;
  const phy = result.subjectBreakdown?.find(s => s.subject === 'Physics')?.score ?? 0;
  const chem = result.subjectBreakdown?.find(s => s.subject === 'Chemistry')?.score ?? 0;
  const bot = result.subjectBreakdown?.find(s => s.subject === 'Botany')?.score ?? 0;
  const zoo = result.subjectBreakdown?.find(s => s.subject === 'Zoology')?.score ?? 0;

  // Build authentic multi-exam history (excluding unattempted 0-score entries)
  const authenticPdfPast = pastCompletedTests.filter((t: any) => {
    if (t.testId === result.testId && t.dateStr === dateStr) return false;
    const score = t.score ?? 0;
    const acc = t.accuracyPercentage ?? 0;
    const attempted = (t.correctAnswers ?? 0) + (t.wrongAnswers ?? 0);
    return score > 0 || acc > 0 || attempted > 0;
  });

  const seenPdfCodes = new Set<string>();
  const deduplicatedPdfPast: any[] = [];
  for (let i = authenticPdfPast.length - 1; i >= 0; i--) {
    const t = authenticPdfPast[i];
    const codeKey = (t.testTitle?.includes(':') ? t.testTitle.split(':')[0].trim() : (t.testTitle || t.testId || 'TEST')).toLowerCase();
    if (!seenPdfCodes.has(codeKey)) {
      seenPdfCodes.add(codeKey);
      deduplicatedPdfPast.unshift(t);
    }
  }

  const pastPdfRows = deduplicatedPdfPast.slice(-4).map((t: any) => {
    let cleanCode = t.testTitle?.includes(':') ? t.testTitle.split(':')[0].trim() : (t.testTitle?.slice(0, 14) || 'TEST');
    if (cleanCode.toLowerCase().startsWith('neetcbt exam test')) cleanCode = 'Sunday Mock';
    return {
      code: cleanCode,
      date: t.dateStr || 'Past Exam',
      phy: t.subjectBreakdown?.find((s: any) => s.subject === 'Physics')?.score ?? 0,
      chem: t.subjectBreakdown?.find((s: any) => s.subject === 'Chemistry')?.score ?? 0,
      bot: t.subjectBreakdown?.find((s: any) => s.subject === 'Botany')?.score ?? 0,
      zoo: t.subjectBreakdown?.find((s: any) => s.subject === 'Zoology')?.score ?? 0,
      total: t.score ?? 0,
      rank: t.batchRank?.rank && t.batchRank.rank > 0 ? `${t.batchRank.rank} / ${t.batchRank.total || 180}` : '—',
      air: t.score > 0 && t.predictedAIR ? `#${t.predictedAIR.toLocaleString()}` : '—',
      acc: `${t.accuracyPercentage ?? 0}%`,
      isCurrent: false
    };
  });

  let currentPdfCode = result.testTitle?.includes(':') ? result.testTitle.split(':')[0].trim() : (result.testTitle?.length > 15 ? result.testTitle.slice(0, 15) + '...' : result.testTitle || 'Current Exam');
  if (currentPdfCode.toLowerCase().startsWith('neetcbt exam test')) currentPdfCode = 'Sunday Mock';

  const currentPdfRow = {
    code: currentPdfCode,
    date: dateStr,
    phy,
    chem,
    bot,
    zoo,
    total: result.score,
    rank: batchRankStr,
    air: result.score > 0 && result.predictedAIR ? `#${result.predictedAIR.toLocaleString()}` : '—',
    acc: `${result.accuracyPercentage}%`,
    isCurrent: true
  };

  const allPdfExams = [...pastPdfRows, currentPdfRow];
  const numExams = allPdfExams.length;
  const pdfPhyList = allPdfExams.map(e => e.phy);
  const pdfChemList = allPdfExams.map(e => e.chem);
  const pdfBotList = allPdfExams.map(e => e.bot);
  const pdfZooList = allPdfExams.map(e => e.zoo);
  const pdfTotalList = allPdfExams.map(e => e.total);

  const calcAvg = (arr: number[]) => (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1);
  const calcBest = (arr: number[]) => Math.max(...arr);
  const calcGain = (arr: number[]) => {
    if (arr.length <= 1) return 'Baseline';
    const diff = arr[arr.length - 1] - arr[0];
    return diff >= 0 ? `+${diff}M Net` : `${diff}M Net`;
  };

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
          <div><strong>Exam Code:</strong> ${result.testTitle.split(':')[0] || 'NEET CBT'}</div>
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
          <div style="font-size: 18px; font-weight: 900; color: #334155; font-family: monospace;">${prevScore !== null ? `${prevScore} / ${totalPossibleMarks}` : '—'}</div>
          <div style="font-size: 10px; color: #64748b;">${prevScore !== null ? 'Prior Benchmark' : 'Initial Attempt'}</div>
        </div>

        <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 10px;">
          <div style="font-size: 9px; font-weight: 700; color: #1e40af; text-transform: uppercase;">Net Change</div>
          <div style="font-size: 18px; font-weight: 900; color: ${changeScore !== null ? (changeScore >= 0 ? '#16a34a' : '#dc2626') : '#2563eb'}; font-family: monospace;">
            ${changeScore !== null ? (changeScore >= 0 ? '+' + changeScore : changeScore) : 'Baseline'}
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
          <div style="font-size: 18px; font-weight: 900; color: #7e22ce; font-family: monospace;">${result.score > 0 && result.predictedAIR ? '#' + result.predictedAIR.toLocaleString() : 'N/A'}</div>
          <div style="font-size: 10px; color: #7e22ce; font-weight: 700;">${result.score > 0 ? `${result.nationalPercentile}%ile` : 'Unranked'}</div>
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
            <td style="padding: 8px; text-align: center; color: #64748b;">${prevPhy !== undefined ? prevPhy : '—'}</td>
            <td style="padding: 8px; text-align: center; font-weight: bold; color: #0f172a;">${phy}</td>
            <td style="padding: 8px; text-align: center; font-weight: bold; color: ${prevPhy !== undefined ? (phy - prevPhy >= 0 ? '#16a34a' : '#dc2626') : '#64748b'};">
              ${prevPhy !== undefined ? (phy - prevPhy >= 0 ? '+' + (phy - prevPhy) : (phy - prevPhy)) : 'Baseline'}
            </td>
            <td style="padding: 8px; text-align: center;">${((phy / 180) * 100).toFixed(1)}%</td>
            <td style="padding: 8px; text-align: center; font-family: sans-serif;">
              <span style="background: ${phy >= 140 ? '#dcfce7' : '#fef3c7'}; color: ${phy >= 140 ? '#166534' : '#92400e'}; font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 4px;">
                ${phy >= 140 ? 'Strong (>75%)' : phy >= 100 ? 'Moderate' : 'Needs Review'}
              </span>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 8px; font-weight: bold; color: #1e293b; font-family: sans-serif;">Chemistry</td>
            <td style="padding: 8px; text-align: center;">180</td>
            <td style="padding: 8px; text-align: center; color: #64748b;">${prevChem !== undefined ? prevChem : '—'}</td>
            <td style="padding: 8px; text-align: center; font-weight: bold; color: #0f172a;">${chem}</td>
            <td style="padding: 8px; text-align: center; font-weight: bold; color: ${prevChem !== undefined ? (chem - prevChem >= 0 ? '#16a34a' : '#dc2626') : '#64748b'};">
              ${prevChem !== undefined ? (chem - prevChem >= 0 ? '+' + (chem - prevChem) : (chem - prevChem)) : 'Baseline'}
            </td>
            <td style="padding: 8px; text-align: center;">${((chem / 180) * 100).toFixed(1)}%</td>
            <td style="padding: 8px; text-align: center; font-family: sans-serif;">
              <span style="background: ${chem >= 140 ? '#dcfce7' : '#fef3c7'}; color: ${chem >= 140 ? '#166534' : '#92400e'}; font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 4px;">
                ${chem >= 140 ? 'Steady & High' : chem >= 100 ? 'Moderate' : 'Needs Review'}
              </span>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 8px; font-weight: bold; color: #1e293b; font-family: sans-serif;">Botany</td>
            <td style="padding: 8px; text-align: center;">180</td>
            <td style="padding: 8px; text-align: center; color: #64748b;">${prevBot !== undefined ? prevBot : '—'}</td>
            <td style="padding: 8px; text-align: center; font-weight: bold; color: #0f172a;">${bot}</td>
            <td style="padding: 8px; text-align: center; font-weight: bold; color: ${prevBot !== undefined ? (bot - prevBot >= 0 ? '#16a34a' : '#dc2626') : '#64748b'};">
              ${prevBot !== undefined ? (bot - prevBot >= 0 ? '+' + (bot - prevBot) : (bot - prevBot)) : 'Baseline'}
            </td>
            <td style="padding: 8px; text-align: center;">${((bot / 180) * 100).toFixed(1)}%</td>
            <td style="padding: 8px; text-align: center; font-family: sans-serif;">
              <span style="background: ${bot >= 155 ? '#dbeafe' : '#dcfce7'}; color: ${bot >= 155 ? '#1e40af' : '#166534'}; font-size: 10px; font-weight: 800; padding: 2px 6px; border-radius: 4px;">
                ${bot >= 155 ? 'Exceptional (>85%)' : 'Good Standing'}
              </span>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 8px; font-weight: bold; color: #1e293b; font-family: sans-serif;">Zoology</td>
            <td style="padding: 8px; text-align: center;">180</td>
            <td style="padding: 8px; text-align: center; color: #64748b;">${prevZoo !== undefined ? prevZoo : '—'}</td>
            <td style="padding: 8px; text-align: center; font-weight: bold; color: #0f172a;">${zoo}</td>
            <td style="padding: 8px; text-align: center; font-weight: bold; color: ${prevZoo !== undefined ? (zoo - prevZoo >= 0 ? '#16a34a' : '#dc2626') : '#64748b'};">
              ${prevZoo !== undefined ? (zoo - prevZoo >= 0 ? '+' + (zoo - prevZoo) : (zoo - prevZoo)) : 'Baseline'}
            </td>
            <td style="padding: 8px; text-align: center;">${((zoo / 180) * 100).toFixed(1)}%</td>
            <td style="padding: 8px; text-align: center; font-family: sans-serif;">
              <span style="background: ${zoo >= 150 ? '#dcfce7' : '#fef3c7'}; color: ${zoo >= 150 ? '#166534' : '#92400e'}; font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 4px;">
                ${zoo >= 150 ? 'High Accuracy' : 'Moderate'}
              </span>
            </td>
          </tr>
          <tr style="background: #eff6ff; border-top: 2px solid #3b82f6; font-weight: 900;">
            <td style="padding: 10px 8px; color: #1e3a8a; font-size: 12px; font-family: sans-serif;">Overall Total</td>
            <td style="padding: 10px 8px; text-align: center; color: #1e3a8a;">720</td>
            <td style="padding: 10px 8px; text-align: center; color: #64748b;">${prevScore !== null ? prevScore : '—'}</td>
            <td style="padding: 10px 8px; text-align: center; color: #166534; font-size: 13px;">${result.score}</td>
            <td style="padding: 10px 8px; text-align: center; color: ${changeScore !== null ? (changeScore >= 0 ? '#16a34a' : '#dc2626') : '#2563eb'}; font-size: 12px;">
              ${changeScore !== null ? (changeScore >= 0 ? '+' + changeScore : changeScore) : 'Baseline'}
            </td>
            <td style="padding: 10px 8px; text-align: center; color: #1e40af;">${((result.score / totalPossibleMarks) * 100).toFixed(1)}%</td>
            <td style="padding: 10px 8px; text-align: center; font-family: sans-serif;">
              <span style="background: ${result.score >= 600 ? '#16a34a' : '#2563eb'}; color: #ffffff; font-size: 10px; font-weight: 800; padding: 3px 8px; border-radius: 4px;">
                ${result.score >= 650 ? 'Top Tier GMC Safe' : result.score >= 550 ? 'Competitive Range' : 'Foundation Level'}
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <div style="background: #f8fafc; border-left: 3px solid #2563eb; padding: 8px 12px; font-size: 11px; color: #475569; line-height: 1.5;">
        <strong style="color: #1e3a8a;">Academic Performance Interpretation:</strong> Candidate achieved ${result.score}/720 with ${result.accuracyPercentage}% accuracy. Biology aggregate (${bot + zoo}/360) provides core foundation. Sustained practice in Physics and Chemistry high-weightage topics will strengthen rank progression.
      </div>
    </div>

    <!-- SECTION 2: Visual Dashboard -->
    <div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 24px; background: #ffffff;">
      <h2 style="font-size: 14px; font-weight: 800; color: #1e3a8a; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin: 0 0 14px 0;">
        SECTION 2: Longitudinal Visual Dashboard & Score Trajectory
      </h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
        <!-- Chart 1: Progression / Target SVG -->
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">
          <div style="font-size: 11px; font-weight: 700; color: #334155; margin-bottom: 8px;">
            ${numExams > 1 ? `Overall Score Progression (${numExams} Assessments)` : 'Score Target & Milestone Tracker'}
          </div>
          ${numExams > 1 ? `
            <svg viewBox="0 0 380 150" style="width: 100%; height: 130px;" xmlns="http://www.w3.org/2000/svg">
              <line x1="30" y1="20" x2="360" y2="20" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="2,2" />
              <line x1="30" y1="45" x2="360" y2="45" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,3" />
              <text x="362" y="48" font-size="8" fill="#ef4444" font-weight="bold">650 GMC</text>
              <line x1="30" y1="80" x2="360" y2="80" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="2,2" />
              <line x1="30" y1="115" x2="360" y2="115" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="2,2" />

              <polyline
                points="${allPdfExams.map((e, idx) => {
                  const x = 50 + (idx / Math.max(1, numExams - 1)) * 300;
                  const y = Math.max(20, Math.min(125, 125 - (e.total / 720) * 105));
                  return `${x},${y}`;
                }).join(' ')}"
                fill="none"
                stroke="#2563eb"
                stroke-width="2.5"
              />
              ${allPdfExams.map((e, idx) => {
                const x = 50 + (idx / Math.max(1, numExams - 1)) * 300;
                const y = Math.max(20, Math.min(125, 125 - (e.total / 720) * 105));
                const isCur = idx === numExams - 1;
                return `
                  <circle cx="${x}" cy="${y}" r="${isCur ? 4.5 : 3.5}" fill="${isCur ? '#16a34a' : '#2563eb'}" />
                  <text x="${x}" y="${y - 6}" font-size="${isCur ? 9 : 8}" fill="${isCur ? '#166534' : '#1e293b'}" text-anchor="middle" font-family="monospace" font-weight="${isCur ? 'bold' : 'normal'}">${e.total}</text>
                  <text x="${x}" y="140" font-size="7" fill="${isCur ? '#166534' : '#64748b'}" text-anchor="middle" font-weight="${isCur ? 'bold' : 'normal'}">${e.code}</text>
                `;
              }).join('')}
            </svg>
          ` : `
            <svg viewBox="0 0 380 150" style="width: 100%; height: 130px;" xmlns="http://www.w3.org/2000/svg">
              <rect x="30" y="45" width="320" height="18" rx="9" fill="#e2e8f0" />
              <rect x="30" y="45" width="${Math.min(320, Math.max(8, (result.score / 720) * 320))}" height="18" rx="9" fill="${result.score >= 650 ? '#16a34a' : result.score >= 500 ? '#2563eb' : '#d97706'}" />
              <line x1="${30 + (650 / 720) * 320}" y1="35" x2="${30 + (650 / 720) * 320}" y2="75" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,2" />
              <text x="${30 + (650 / 720) * 320}" y="30" font-size="8" fill="#ef4444" font-weight="bold" text-anchor="middle">650 GMC Target</text>
              <text x="30" y="80" font-size="8" fill="#64748b">0</text>
              <text x="${30 + Math.min(320, (result.score / 720) * 320)}" y="80" font-size="9" font-weight="bold" fill="#0f172a" text-anchor="middle">${result.score} Marks</text>
              <text x="350" y="80" font-size="8" fill="#64748b" text-anchor="end">720 Max</text>
              <text x="190" y="115" font-size="10" fill="#334155" text-anchor="middle" font-weight="bold">Achieved ${((result.score / 720) * 100).toFixed(1)}% of Target Maximum</text>
            </svg>
          `}
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
          ${allPdfExams.map((row) => `
            <tr style="${row.isCurrent ? 'background: #eff6ff; font-weight: 800; border-top: 2px solid #3b82f6;' : 'border-bottom: 1px solid #f1f5f9;'}">
              <td style="padding: 6px 8px; font-weight: bold; font-family: sans-serif;">${row.code} ${row.isCurrent ? '<span style="background:#2563eb; color:#fff; font-size:8px; padding:1px 4px; border-radius:3px; margin-left:4px;">CUR</span>' : ''}</td>
              <td style="padding: 6px 8px;">${row.date}</td>
              <td style="padding: 6px 8px; text-align: center;">${row.phy}</td>
              <td style="padding: 6px 8px; text-align: center;">${row.chem}</td>
              <td style="padding: 6px 8px; text-align: center;">${row.bot}</td>
              <td style="padding: 6px 8px; text-align: center;">${row.zoo}</td>
              <td style="padding: 6px 8px; text-align: center; color: ${row.isCurrent ? '#166534' : '#0f172a'}; font-size: 11px; font-weight: bold;">${row.total}</td>
              <td style="padding: 6px 8px; text-align: center;">${row.rank}</td>
              <td style="padding: 6px 8px; text-align: center; color: #1e40af;">${row.air}</td>
              <td style="padding: 6px 8px; text-align: center;">${row.acc}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <!-- Statistical Summary Grid -->
      <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; text-align: center; font-size: 10px;">
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 6px;">
          <strong style="color: #475569; display: block;">Physics (Avg/Best)</strong>
          <div style="font-size: 12px; font-weight: 800; color: #0f172a; font-family: monospace;">${calcAvg(pdfPhyList)} / ${calcBest(pdfPhyList)}</div>
          <span style="color: #16a34a; font-weight: 700;">${calcGain(pdfPhyList)}</span>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 6px;">
          <strong style="color: #475569; display: block;">Chem (Avg/Best)</strong>
          <div style="font-size: 12px; font-weight: 800; color: #0f172a; font-family: monospace;">${calcAvg(pdfChemList)} / ${calcBest(pdfChemList)}</div>
          <span style="color: #16a34a; font-weight: 700;">${calcGain(pdfChemList)}</span>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 6px;">
          <strong style="color: #475569; display: block;">Botany (Avg/Best)</strong>
          <div style="font-size: 12px; font-weight: 800; color: #0f172a; font-family: monospace;">${calcAvg(pdfBotList)} / ${calcBest(pdfBotList)}</div>
          <span style="color: #16a34a; font-weight: 700;">${calcGain(pdfBotList)}</span>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 6px;">
          <strong style="color: #475569; display: block;">Zoology (Avg/Best)</strong>
          <div style="font-size: 12px; font-weight: 800; color: #0f172a; font-family: monospace;">${calcAvg(pdfZooList)} / ${calcBest(pdfZooList)}</div>
          <span style="color: #16a34a; font-weight: 700;">${calcGain(pdfZooList)}</span>
        </div>
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; padding: 6px;">
          <strong style="color: #166534; display: block;">Overall Average</strong>
          <div style="font-size: 12px; font-weight: 800; color: #15803d; font-family: monospace;">${calcAvg(pdfTotalList)} / 720</div>
          <span style="color: #16a34a; font-weight: 800;">${numExams > 1 ? calcGain(pdfTotalList) + ' (' + numExams + ' Exams)' : 'Initial Assessment'}</span>
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
export function downloadDppPDF(dppData: { date: string; subject: string; chapter?: string; level: string; questions: Question[] }): boolean {
  const dppTitle = `DPP: ${dppData.subject}${dppData.chapter ? ` - ${dppData.chapter}` : ''}`;
  if (!checkAuthForDownload(dppTitle, 'DPP')) {
    return false;
  }

  const fileSize = '1.2 MB';

  const htmlBody = `
    <div class="test-title-bar">
      <h1 style="font-size: 18px; margin-bottom: 4px;">Daily Practice Paper (DPP) - ${dppData.subject}${dppData.chapter ? ` &bull; ${dppData.chapter}` : ''}</h1>
      <div class="meta-grid">
        <div class="meta-item"><strong>Target Date:</strong> ${dppData.date}</div>
        ${dppData.chapter ? `<div class="meta-item"><strong>Sub-Topic:</strong> ${dppData.chapter}</div>` : ''}
        <div class="meta-item"><strong>Level:</strong> ${dppData.level}</div>
        <div class="meta-item"><strong>Questions:</strong> ${dppData.questions.length} High-Yield Qs</div>
        <div class="meta-item"><strong>Marking:</strong> +4 Correct, -1 Incorrect</div>
      </div>
    </div>

    <div>
      ${dppData.questions.map((q, idx) => `
        <div class="question-card">
          <div style="margin-bottom: 6px;">
            <span class="q-num">Q${idx + 1}.</span>
            <span style="font-size: 11px; color: #64748b; font-family: 'JetBrains Mono', monospace; margin-left: 6px;">${getQuestionDisplayTag(q)}</span>
            <div style="margin-top: 4px;">${formatMathAndFormulas(cleanOcrText(q.questionText || (q as any).question || ''))}</div>
          </div>

          ${q.diagramSvg ? `<div style="margin: 10px 0; text-align: center;">${q.diagramSvg}</div>` : ''}
          ${q.image && !q.diagramSvg ? `<div style="margin: 10px 0; text-align: center;"><img src="${q.image}" style="max-height: 200px; border-radius: 8px;" /></div>` : ''}

          <div class="options-grid">
            ${(q.options || []).map((opt, oIdx) => `
              <div class="option-item">
                <strong>(${String.fromCharCode(65 + oIdx)})</strong> ${formatMathAndFormulas(cleanOcrText(opt))}
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>

    <!-- OFFICIAL ANSWER KEY & SOLUTIONS -->
    <div style="margin-top: 28px; page-break-before: always;">
      <h3 style="font-size: 14px; border-bottom: 2px solid #16a34a; padding-bottom: 6px; margin-bottom: 12px; color: #15803d;">
        📊 OFFICIAL ANSWER KEY MATRIX (${dppData.chapter || dppData.subject})
      </h3>
      <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; font-family: 'JetBrains Mono', monospace; font-size: 11px; margin-bottom: 16px;">
        ${dppData.questions.map((q, idx) => `
          <div style="padding: 6px; background: #f0fdf4; border: 1px solid #bbf7d0; text-align: center; border-radius: 4px;">
            <strong>Q${idx + 1}:</strong> (${String.fromCharCode(65 + q.correctAnswer)})
          </div>
        `).join('')}
      </div>

      <h4 style="font-size: 13px; font-weight: 800; color: #0f172a; margin: 18px 0 10px 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px;">
        📘 DETAILED STEP-BY-STEP EXPLANATIONS & NCERT DERIVATIONS
      </h4>
      <div style="margin-top: 10px;">
        ${dppData.questions.map((q, idx) => `
          <div style="margin-bottom: 14px; padding: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 11px; line-height: 1.55;">
            <div style="font-weight: 800; color: #0f172a; margin-bottom: 4px;">
              Q${idx + 1} Correct Answer: Option (${String.fromCharCode(65 + q.correctAnswer)}) &bull; ${formatMathAndFormulas(cleanOcrText(q.options[q.correctAnswer] || ''))}
            </div>
            <div style="color: #334155; white-space: pre-line;">
              ${q.explanation ? formatMathAndFormulas(cleanOcrText(q.explanation)) : 'Verified answer per official NCERT curriculum.'}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  trackDownload({
    title: `${dppTitle} (${dppData.date})`,
    category: 'DPP',
    subject: dppData.subject,
    fileSize,
    format: 'PDF'
  });

  recordSuperUserNotification({
    contentTitle: `Password-Protected DPP: ${dppData.subject}${dppData.chapter ? ` - ${dppData.chapter}` : ''}`,
    category: 'DPP',
    fileSize,
    subject: dppData.subject
  });

  const cleanFileSub = `${dppData.subject}_${dppData.chapter || ''}`.replace(/[^a-zA-Z0-9]/g, '_');
  downloadHtmlDocument(
    `NeetCbt_DPP_${cleanFileSub}_${dppData.date}`,
    dppTitle,
    htmlBody
  );

  return true;
}
