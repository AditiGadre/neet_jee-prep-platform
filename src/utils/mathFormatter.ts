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

  // 1. Remove unnecessary LaTeX delimiters like $...$ or \(...\)
  out = out.replace(/\\\((.*?)\\\)/g, '$1');
  out = out.replace(/\$([^\$]+)\$/g, '$1');

  // 2. Square Root formatting: \sqrt{...}, sqrt(...), sqrt(...)
  out = out.replace(/\\sqrt\{([^}]+)\}/gi, '√($1)');
  out = out.replace(/\\sqrt\[([0-9]+)\]\{([^}]+)\}/gi, '$1√($2)');
  out = out.replace(/\bsqrt\s*\(([^)]+)\)/gi, '√($1)');
  out = out.replace(/\bsqrt\s*([a-zA-Z0-9]+)/gi, '√$1');

  // 3. Superscripts with care: ^(-?[0-9a-zA-Z]+) or ^{...}
  out = out.replace(/\^\{([^}]+)\}/g, (_, p1) => toSuperscript(p1));
  out = out.replace(/\^\(([^)]+)\)/g, (_, p1) => toSuperscript(p1));
  // 10^-3 or x^2 or m/s^2 or 10^8
  out = out.replace(/\^([0-9a-zA-Z\+\-]+)(?=[^0-9a-zA-Z\+\-]|$)/g, (_, p1) => toSuperscript(p1));

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
    [/\\infty|\binfinity\b/gi, '∞']
  ];

  symbolMap.forEach(([regex, repl]) => {
    out = out.replace(regex, repl);
  });

  return out;
}
