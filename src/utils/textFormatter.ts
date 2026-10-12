export function formatQuestionText(raw: string): string {
  if (!raw) return '';

  let formatted = raw;

  // Replace literal \n or newline characters with <br/> first, so user edits with Enters are respected
  formatted = formatted.replace(/\n/g, '<br/>');

  // Match the column formatting
  // Look for patterns like "A. Something - (i) Something else, B. Something - (ii) Something else"
  if (/match/i.test(formatted) && /A\./.test(formatted) && /\(i\)/.test(formatted)) {
    // 1. Break before A., B., C., D. (if preceded by comma or space)
    formatted = formatted.replace(/(?:,\s*|\s+)(A\.|B\.|C\.|D\.|E\.)\s+/g, '<br/><br/><strong class="text-sky-700">$1</strong> ');
    // 2. Format the Roman numeral part to space it out like a column
    formatted = formatted.replace(/\s*[-=]?\s*\((i{1,3}|iv|v)\)\s+/g, ' <span class="mx-4 text-stone-300">&#8594;</span> <strong class="text-emerald-700">($1)</strong> ');
  }

  return formatted;
}
