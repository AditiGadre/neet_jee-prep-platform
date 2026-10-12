export function formatQuestionText(raw: string): string {
  if (!raw) return '';

  let formatted = raw.trim();

  // If text contains hard single newlines from narrow PDF columns, collapse them into spaces
  // so words flow continuously across the entire available line width.
  // We preserve:
  // 1) Explicit double newlines (paragraphs)
  // 2) List items starting with (a), (i), 1., •, -, etc.
  formatted = formatted
    .replace(/\r/g, '')
    // Protect double newlines as paragraph breaks
    .replace(/\n\s*\n+/g, '<<<PARABREAK>>>')
    // Protect bullet points, numbered lists, or lettered list lines
    .replace(/\n\s*([•\-\*]|\([a-zA-Z0-9]+\)|\b(?:[A-Da-d1-4]|[ivxIVX]+)\.|\b(?:Statement|Assertion|Reason)\s+[I|1|II|2])/g, '<<<LISTBREAK>>>$1')
    // Collapse any remaining single newline inside running text to a single space
    .replace(/\n+/g, ' ')
    // Restore protected line breaks
    .replace(/<<<PARABREAK>>>/g, '<br/><br/>')
    .replace(/<<<LISTBREAK>>>/g, '<br/>');

  // Match the column formatting
  // Look for patterns like "A. Something - (i) Something else, B. Something - (ii) Something else"
  if (/match/i.test(formatted) && /A\./.test(formatted) && /\(i\)/.test(formatted)) {
    // 1. Break before A., B., C., D. (if preceded by comma or space)
    formatted = formatted.replace(/(?:,\s*|\s+)(A\.|B\.|C\.|D\.|E\.)\s+/g, '<br/><strong class="text-sky-700">$1</strong> ');
    // 2. Format the Roman numeral part to space it out like a column
    formatted = formatted.replace(/\s*[-=]?\s*\((i{1,3}|iv|v)\)\s+/g, ' <span class="mx-3 text-stone-300">&#8594;</span> <strong class="text-emerald-700">($1)</strong> ');
  }

  // Fix awkward stray exponents or units from PDF baseline extraction
  formatted = formatted.replace(/\bheight\s+of\s+2\s+bridge\b/gi, 'height of bridge');
  formatted = formatted.replace(/m\/s\s*2\b/g, 'm/s²');
  formatted = formatted.replace(/m\/s\^2\b/g, 'm/s²');
  formatted = formatted.replace(/\s{2,}/g, ' ');

  return formatted;
}
