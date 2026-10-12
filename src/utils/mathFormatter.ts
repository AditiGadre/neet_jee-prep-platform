/**
 * Real Mathematical & Formula Formatter Utility for NeetCbt Exam Test Platform
 * Converts raw text / LaTeX-like artifacts into clean Unicode typography:
 * - sqrt(x), \sqrt{x} -> √(x)
 * - Powers: ^2, ^3, ^-1, ^10, ^n -> ², ³, ⁻¹, ¹⁰, ⁿ
 * - Subscripts for chemistry: H2O -> H₂O, CO2 -> CO₂, SO4^2- -> SO₄²⁻
 * - Arrows: ->, -->, <=> -> →, ⇌
 * - Symbols: Delta -> Δ, pi -> π, theta -> θ, lambda -> λ, mu -> μ, Omega -> Ω, +/- -> ±, etc.
 */

const SUPERSCRIPT_MAP: Record<string, string> = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
  '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
  '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
  'n': 'ⁿ', 'i': 'ⁱ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ',
  'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ',
  'm': 'ᵐ', 'p': 'ᵖ', 't': 'ᵗ', 'k': 'ᵏ', 'T': 'ᵀ'
};

const SUBSCRIPT_MAP: Record<string, string> = {
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
  '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
  '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎',
  'a': 'ₐ', 'e': 'ₑ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ',
  'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ',
  'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ',
  'v': 'ᵥ', 'x': 'ₓ'
};

export function toSuperscript(str: string): string {
  return str.split('').map(char => SUPERSCRIPT_MAP[char] || char).join('');
}

export function toSubscript(str: string): string {
  return str.split('').map(char => SUBSCRIPT_MAP[char] || char).join('');
}

/**
 * Main Formatter: Cleans and elevates mathematical & scientific formulas
 */
export function formatMathAndFormulas(text: string | null | undefined): string {
  if (!text) return '';

  let out = String(text);

  // Strip /text, \text, \mathrm, \mathbf, \frac artifacts
  out = out.replace(/\/text\{([^}]+)\}/gi, '$1');
  out = out.replace(/\\text\{([^}]+)\}/gi, '$1');
  out = out.replace(/\\mathrm\{([^}]+)\}/gi, '$1');
  out = out.replace(/\\mathbf\{([^}]+)\}/gi, '$1');
  out = out.replace(/\\mathit\{([^}]+)\}/gi, '$1');
  out = out.replace(/\\dfrac\{([^}]+)\}\{([^}]+)\}/gi, '($1)/($2)');
  out = out.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/gi, '($1)/($2)');
  out = out.replace(/\/text\s+/gi, ' ');
  out = out.replace(/\/text/gi, '');
  out = out.replace(/\\text\s+/gi, ' ');
  out = out.replace(/\\text/gi, '');

  // Strip exam brackets, years, and target tags: [NEET 2007], [NEET 2029 Practice], [AIPMT 2005], etc.
  out = out.replace(/\[\s*(?:NEET|AIPMT|AIIMS|AIEEE|JEE(?:\s*Main|\s*Advanced)?|CBSE(?:\s*PMT)?|AFMC|BHU|PMT|DCE|UPMT|RPMT|CMC|EAMCET|KCET|GUJCET|MHT\s*CET)[^\]]*\]/gi, '');
  out = out.replace(/\(\s*(?:NEET|AIPMT|AIIMS|AIEEE|JEE(?:\s*Main|\s*Advanced)?|CBSE(?:\s*PMT)?|AFMC|BHU|PMT|DCE|UPMT|RPMT|CMC|EAMCET|KCET|GUJCET|MHT\s*CET)[^)]*\)/gi, '');
  out = out.replace(/\[\s*\d{4}\s*(?:Practice|Target|Expected|Revision)?\s*\]/gi, '');

  // Strip coaching institute branding words: allen, aakash, resonance, motion, fiitjee, etc.
  out = out.replace(/\[\s*(?:allen|aakash|resonance|fiitjee|motion|narayana|chaitanya)[^\]]*\]/gi, '');
  out = out.replace(/\(\s*(?:allen|aakash|resonance|fiitjee|motion|narayana|chaitanya)[^)]*\)/gi, '');
  out = out.replace(/\b(?:allen|aakash|resonance|motion|fiitjee|career\s*point|narayana|chaitanya)\b/gi, '');

  // 1. Remove unnecessary LaTeX delimiters like $...$, $$...$$, \(...\)
  out = out.replace(/\$\$([\s\S]*?)\$\$/g, '$1');
  out = out.replace(/\\\((.*?)\\\)/g, '$1');
  out = out.replace(/\$([^\$]+)\$/g, '$1');
  out = out.replace(/\$\$/g, '');
  out = out.replace(/\$/g, '');

  // 2. Bracket sizing macros: \left[ \right], \left( \right), etc.
  out = out.replace(/\\left\s*\[/g, '[');
  out = out.replace(/\\right\s*\]/g, ']');
  out = out.replace(/\\left\s*\(/g, '(');
  out = out.replace(/\\right\s*\)/g, ')');
  out = out.replace(/\\left\s*\\\{/g, '{');
  out = out.replace(/\\right\s*\\\}/g, '}');
  out = out.replace(/\\left\s*\|/g, '|');
  out = out.replace(/\\right\s*\|/g, '|');
  out = out.replace(/\\left\./g, '');
  out = out.replace(/\\right\./g, '');

  // 3. Calculus & Mathematical operators
  out = out.replace(/\\iint/g, '∬');
  out = out.replace(/\\oint/g, '∮');
  out = out.replace(/\\int/g, '∫');
  out = out.replace(/\\ln\b/g, 'ln');
  out = out.replace(/\\log\b/g, 'log');
  out = out.replace(/\\exp\b/g, 'exp');
  out = out.replace(/\\sin\b/g, 'sin');
  out = out.replace(/\\cos\b/g, 'cos');
  out = out.replace(/\\tan\b/g, 'tan');
  out = out.replace(/\\cot\b/g, 'cot');
  out = out.replace(/\\sec\b/g, 'sec');
  out = out.replace(/\\csc\b/g, 'csc');
  out = out.replace(/\\implies/g, ' ⟹ ');
  out = out.replace(/\\iff/g, ' ⟺ ');
  out = out.replace(/\\cdot/g, ' · ');
  out = out.replace(/\\partial/g, '∂');
  out = out.replace(/\\sum/g, '∑');
  out = out.replace(/\\prod/g, '∏');
  out = out.replace(/\\nabla/g, '∇');
  out = out.replace(/\\propto/g, ' ∝ ');

  // 4. LaTeX spacing commands
  out = out.replace(/\\[,;:!]/g, ' ');
  out = out.replace(/\\qquad/g, '   ');
  out = out.replace(/\\quad/g, '  ');

  // 5. Square Root formatting: \sqrt{...}, sqrt(...), sqrt(...)
  out = out.replace(/\\sqrt\{([^}]+)\}/gi, '√($1)');
  out = out.replace(/\\sqrt\[([0-9]+)\]\{([^}]+)\}/gi, '$1√($2)');
  out = out.replace(/\bsqrt\s*\(([^)]+)\)/gi, '√($1)');
  out = out.replace(/\bsqrt\s*([a-zA-Z0-9]+)/gi, '√$1');

  // 6. Subscripts: _{V_1}, _{2}, _1, _x
  out = out.replace(/_\{([^}]+)\}/g, (_, p1) => toSubscript(p1.replace(/_/g, '')));
  out = out.replace(/_([0-9a-zA-Z\+\-]+)(?=[^0-9a-zA-Z\+\-]|$)/g, (_, p1) => toSubscript(p1));

  // 7. Superscripts with care: numeric exponents (+/- digits), or single letters like ^n, ^x
  out = out.replace(/\^\{([^}]+)\}/g, (_, p1) => toSuperscript(p1));
  out = out.replace(/\^\(([^)]+)\)/g, (_, p1) => toSuperscript(p1));
  // Numeric exponents: ^2, ^-2, ^+3, ^10 (strictly numeric to not swallow following dimensional letters like T in ML^2T^-2)
  out = out.replace(/\^([+-]?\d+)/g, (_, p1) => toSuperscript(p1));
  // Single variable letter exponents: ^n, ^x, ^y
  out = out.replace(/\^([a-zA-Z])(?=[^a-zA-Z0-9]|$)/g, (_, p1) => toSuperscript(p1));

  // 4. Common chemical formula formatting
  const chemReplacements: [RegExp, string][] = [
    [/\bH2O\b/g, 'H₂O'],
    [/\bCO2\b/g, 'CO₂'],
    [/\bH2SO4\b/g, 'H₂SO₄'],
    [/\bHNO3\b/g, 'HNO₃'],
    [/\bHCl\b/g, 'HCl'],
    [/\bNH3\b/g, 'NH₃'],
    [/\bNH4\+\b/g, 'NH₄⁺'],
    [/\bCH4\b/g, 'CH₄'],
    [/\bC2H5OH\b/g, 'C₂H₅OH'],
    [/\bC6H12O6\b/g, 'C₆H₁₂O₆'],
    [/\bCa\(OH\)2\b/g, 'Ca(OH)₂'],
    [/\bCaCO3\b/g, 'CaCO₃'],
    [/\bKMnO4\b/g, 'KMnO₄'],
    [/\bK2Cr2O7\b/g, 'K₂Cr₂O₇'],
    [/\bFe2O3\b/g, 'Fe₂O₃'],
    [/\bFe3O4\b/g, 'Fe₃O₄'],
    [/\bAl2O3\b/g, 'Al₂O₃'],
    [/\bSO4\s*2-\b/g, 'SO₄²⁻'],
    [/\bSO4\s*\^?2-\b/g, 'SO₄²⁻'],
    [/\bNO3\s*-\b/g, 'NO₃⁻'],
    [/\bPO4\s*3-\b/g, 'PO₄³⁻'],
    [/\bO2\b/g, 'O₂'],
    [/\bN2\b/g, 'N₂'],
    [/\bH2\b/g, 'H₂'],
    [/\bCl2\b/g, 'Cl₂'],
    [/\bBr2\b/g, 'Br₂'],
    [/\bI2\b/g, 'I₂'],
    [/\bF2\b/g, 'F₂']
  ];

  chemReplacements.forEach(([regex, repl]) => {
    out = out.replace(regex, repl);
  });

  // 5. Scientific notation & multiplication
  out = out.replace(/\s*\*\s*10(?=[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻])/g, ' × 10');
  out = out.replace(/(\d)\s*[xX]\s*10(?=[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻])/g, '$1 × 10');
  out = out.replace(/(\d)\s*\*\s*(\d)/g, '$1 × $2');

  // 6. Arrows & Equilibrium
  out = out.replace(/<==>|<=>|<->/g, '⇌');
  out = out.replace(/-->|->|\\rightarrow/g, '→');
  out = out.replace(/<--|<-|\\leftarrow/g, '←');
  out = out.replace(/\\rightleftharpoons/g, '⇌');

  // 7. Greek & Physics/Chemistry Symbols
  const symbolMap: [RegExp, string][] = [
    [/\\Delta|\bDelta\b/g, 'Δ'],
    [/\\pi|\bpi\b(?!\w)/g, 'π'],
    [/\\theta|\btheta\b/gi, 'θ'],
    [/\\lambda|\blambda\b/gi, 'λ'],
    [/\\mu|\bmu\b(?!\w)/g, 'μ'],
    [/\\alpha|\balpha\b/gi, 'α'],
    [/\\beta|\bbeta\b/gi, 'β'],
    [/\\gamma|\bgamma\b/gi, 'γ'],
    [/\\sigma|\bsigma\b/gi, 'σ'],
    [/\\omega|\bomega\b/gi, 'ω'],
    [/\\Omega|\bOmega\b/g, 'Ω'],
    [/\\epsilon_0|\bepsilon_0\b/gi, 'ε₀'],
    [/\\epsilon|\bepsilon\b/gi, 'ε'],
    [/\\rho|\brho\b/gi, 'ρ'],
    [/\\phi|\bphi\b/gi, 'ϕ'],
    [/\\hbar|\bhbar\b/gi, 'ℏ'],
    [/\\approx|\bapprox\b/g, '≈'],
    [/\\ne|!=|\\neq/g, '≠'],
    [/\\le|<=|\\leq/g, '≤'],
    [/\\ge|>=|\\geq/g, '≥'],
    [/\\pm|\+\/-/g, '±'],
    [/\\mp/g, '∓'],
    [/\\degree|\\circ|\bdeg\b|\bdegrees\b/gi, '°'],
    [/\\times/g, '×'],
    [/\\div/g, '÷'],
    [/\\infty|\binfinity\b/gi, '∞'],
    [/\\nu\b/g, 'ν'],
    [/\\eta\b/g, 'η'],
    [/\\tau\b/g, 'τ'],
    [/\\psi\b/g, 'ψ'],
    [/\\kappa\b/g, 'κ'],
    [/\\zeta\b/g, 'ζ']
  ];

  symbolMap.forEach(([regex, repl]) => {
    out = out.replace(regex, repl);
  });

  // Clean up horizontal whitespace while strictly preserving line breaks
  out = out.replace(/[^\S\r\n]+([.,;:?!])/g, '$1');
  out = out.replace(/[^\S\r\n]+/g, ' ');

  // 8. Auto-format newlines for lists and complex question types
  const isMatchColumns = out.toLowerCase().includes('column') || out.toLowerCase().includes('list i');
  
  if (isMatchColumns) {
    out = out.replace(/(\([A-D]\)\s+.*?)\s+(\((?:p|q|r|s|i|ii|iii|iv|v|vi|1|2|3|4)\)\s+.*?)(?=(?:\n|\([A-D]\)|$))/gi, ' \t\t ');
    out = out.replace(/(\([A-D]\)\s+.*?)\s+([1-4]\.\s+.*?)(?=(?:\n|\([A-D]\)|$))/gi, ' \t\t ');
  }

  // Auto-restore any previously trimmed academic/derivation words
  out = healTruncatedText(out);

  out = out.replace(/\n{3,}/g, '\n\n');
  return out.trim();
}

export const TRUNCATED_WORDS_MAP: Record<string, string> = {
  'recision': 'Precision',
  'ccuracy': 'Accuracy',
  'quaring': 'Squaring',
  'ractional': 'Fractional',
  'iven': 'Given',
  'herefore': 'Therefore',
  'ormula': 'Formula',
  'ercentage': 'Percentage',
  'otice': 'Notice',
  'ubstituting': 'Substituting',
  'ividing': 'Dividing',
  'ultiplying': 'Multiplying',
  'alculating': 'Calculating',
  'alculation': 'Calculation',
  'onsider': 'Consider',
  'ssuming': 'Assuming',
  'rom': 'From',
  'ence': 'Hence',
  'hus': 'Thus',
  'ince': 'Since',
  'alue': 'Value',
  'atio': 'Ratio',
  'measurement with': 'A measurement with',
  'easured': 'Measured',
  'imensions': 'Dimensions',
  'ensity': 'Density',
  'ystematic': 'Systematic',
  'ero error': 'Zero error',
  'ero': 'Zero',
  'very measurement': 'Every measurement',
  'very': 'Every',
  'elocity': 'Velocity',
  'cceleration': 'Acceleration',
  'ressure': 'Pressure',
  'orce': 'Force',
  'nergy': 'Energy',
  'omentum': 'Momentum',
  'requency': 'Frequency',
  'ave': 'Wave',
  'urrent': 'Current',
  'oltage': 'Voltage',
  'esistance': 'Resistance',
  'apacitance': 'Capacitance',
  'agnetic': 'Magnetic',
  'lectric': 'Electric',
  'harge': 'Charge',
  'otential': 'Potential',
  'ield': 'Field',
  'emperature': 'Temperature',
  'eat': 'Heat',
  'olume': 'Volume',
  'ass': 'Mass',
  'ength': 'Length',
  'ime': 'Time',
  'adius': 'Radius',
  'istance': 'Distance',
  'isplacement': 'Displacement',
  'peed': 'Speed',
  'quation': 'Equation',
  'olving': 'Solving',
  'implifying': 'Simplifying',
  'earranging': 'Rearranging',
  'equating': 'Equating',
  'aking': 'Taking',
  'pplying': 'Applying',
  'sing': 'Using',
  'et': 'Let',
  'ccording': 'According',
  'utting': 'Putting',
  'nserting': 'Inserting',
  'bserve': 'Observe',
  'ote': 'Note',
  'he': 'The',
  'his': 'This',
  'hese': 'These',
  'ere': 'Here',
  'here': 'There',
  'irst': 'First',
  'econd': 'Second',
  'hird': 'Third',
  'ourth': 'Fourth',
  'ifth': 'Fifth',
  'otal': 'Total',
  'nitial': 'Initial',
  'inal': 'Final',
  'aximum': 'Maximum',
  'inimum': 'Minimum',
  'elative': 'Relative',
  'bsolute': 'Absolute',
  'rror': 'Error',
  'orizontal': 'Horizontal',
  'ertical': 'Vertical',
  'omponent': 'Component',
  'irection': 'Direction',
  'agnitude': 'Magnitude',
  'ngle': 'Angle',
  'onstant': 'Constant',
  'roportional': 'Proportional',
  'irectly': 'Directly',
  'nversely': 'Inversely',
  'qual': 'Equal',
  'reater': 'Greater',
  'ess': 'Less',
  'igher': 'Higher',
  'ower': 'Lower',
  'ositive': 'Positive',
  'egative': 'Negative',
  'esult': 'Result',
  'esultant': 'Resultant',
  'orrect': 'Correct',
  'ncorrect': 'Incorrect',
  'tatement': 'Statement',
  'uestion': 'Question',
  'nswer': 'Answer',
  'xplanation': 'Explanation',
  'erivation': 'Derivation',
  'tep': 'Step',
  'onclusion': 'Conclusion',
  'rinciple': 'Principle',
  'heorem': 'Theorem',
  'aw': 'Law',
  'nit': 'Unit',
  'easurement': 'Measurement',
  'nstrument': 'Instrument',
  'ernier': 'Vernier',
  'crew': 'Screw',
  'east': 'Least',
  'itch': 'Pitch',
  'ain': 'Main',
  'ircular': 'Circular'
};

export function healTruncatedText(text: string | null | undefined): string {
  if (!text) return '';
  let out = String(text);
  for (const [truncated, restored] of Object.entries(TRUNCATED_WORDS_MAP)) {
    out = out.replace(new RegExp(`(^|\\n)\\s*${truncated}\\b`, 'gi'), `$1${restored}`);
    out = out.replace(new RegExp(`(:\\s*)${truncated}\\b`, 'gi'), `$1${restored}`);
  }
  return out;
}

export function healLineStartWord(line: string): string {
  let cleaned = line.trim();
  for (const [truncated, restored] of Object.entries(TRUNCATED_WORDS_MAP)) {
    if (cleaned.toLowerCase().startsWith(truncated.toLowerCase())) {
      const rest = cleaned.slice(truncated.length);
      if (rest.length === 0 || /^\s|[^a-zA-Z]/.test(rest)) {
        return restored + rest;
      }
    }
  }
  // Fallback: capitalize initial letter if a sentence begins with lowercase
  if (/^[a-z]/.test(cleaned)) {
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  }
  return cleaned;
}

