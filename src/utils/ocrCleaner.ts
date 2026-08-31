const PUA_MAP: Record<string, string> = {
  '\uf02b': '+',
  '\uf02d': '-',
  '\uf03d': '=',
  '\uf072': '⃗',
  '\uf0ae': '⃗',
  '\uf0b4': '×',
  '\uf071': 'θ',
  '\uf070': 'π',
  '\uf061': 'α',
  '\uf062': 'β',
  '\uf067': 'γ',
  '\uf05c': '∴',
  '\uf0de': '⇒',
  '\uf05e': '⊥',
  '\uf0a5': '∞',
  '\uf0b1': '±',
  '\uf0b5': 'μ',
  '\uf044': 'Δ',
  '\uf03c': '<',
  '\uf03e': '>'
};

function reverseUnitExponent(match: string, powNum: string, unitStr: string): string {
  const supMap: Record<string, string> = { '1': '¹', '2': '²', '3': '³', '4': '⁴' };
  const sup = supMap[powNum] || '²';
  
  const knownSingleUnits = new Set(['s', 'm', 'kg', 'K', 'A', 'V', 'C', 'rad', 'J', 'W', 'N']);
  if (knownSingleUnits.has(unitStr)) {
    return `${unitStr}⁻${sup}`;
  }
  
  if (unitStr.startsWith('s') && unitStr.length > 1) {
    let rest = unitStr.slice(1);
    rest = rest.split('mkg').join('kg m').split('kgm').join('kg m');
    return `${rest} s⁻${sup}`;
  } else if (unitStr.startsWith('kg') && unitStr.length > 2) {
    const rest = unitStr.slice(2);
    return `${rest} kg⁻${sup}`;
  } else if (unitStr.startsWith('m') && unitStr.length > 1) {
    const rest = unitStr.slice(1);
    return `${rest} m⁻${sup}`;
  } else if (unitStr.startsWith('K') && unitStr.length > 1) {
    let rest = unitStr.slice(1);
    rest = rest.split('kgm').join('kg m').split('mkg').join('kg m');
    return `${rest} K⁻${sup}`;
  }
  
  return match;
}

export function cleanOcrText(text: string): string {
  if (!text) return text;

  let cleaned = text;

  // Replace standard PUA characters
  for (const [key, value] of Object.entries(PUA_MAP)) {
    cleaned = cleaned.split(key).join(value);
  }

  // Remove bracket artifacts
  cleaned = cleaned.replace(/[\uf0f7\uf0f8\uf0f6\uf0e7\uf0e8\uf0e6]/g, '');

  // Pre-process trailing unit exponents (e.g. Kkgm 1- -> 1-Kkgm)
  cleaned = cleaned.replace(/\b([a-zA-Z]+)\s*(\d+)-(?!\w)/g, '$2-$1');

  // Systemic unit reversals
  cleaned = cleaned.replace(/\b([1-4])-([a-zA-Z]+)\b/g, (match, powNum, unitStr) => {
    return reverseUnitExponent(match, powNum, unitStr);
  });

  // Specific Unit Equation Scrambling Cleanups
  cleaned = cleaned.split('cmmicron 8101 -=').join('1 micron = 10⁻⁸ cm');
  cleaned = cleaned.split('cmmicron 6101 -=').join('1 micron = 10⁻⁶ cm');
  cleaned = cleaned.split('cmmicron 5101 -=').join('1 micron = 10⁻⁵ cm');
  cleaned = cleaned.split('cmmicron 4101 -=').join('1 micron = 10⁻⁴ cm');
  
  cleaned = cleaned.split('cmmicron 8101 - =').join('1 micron = 10⁻⁸ cm');
  cleaned = cleaned.split('cmmicron 6101 - =').join('1 micron = 10⁻⁶ cm');
  cleaned = cleaned.split('cmmicron 5101 - =').join('1 micron = 10⁻⁵ cm');
  cleaned = cleaned.split('cmmicron 4101 - =').join('1 micron = 10⁻⁴ cm');
  
  cleaned = cleaned.split('1 dyne 510-= Newton').join('1 dyne = 10⁻⁵ Newton');
  cleaned = cleaned.split('mcm 2101 -=').join('1 cm = 10⁻² m');
  cleaned = cleaned.split('mÅ 10101 -=').join('1 Å = 10⁻¹⁰ m');
  cleaned = cleaned.split('JoulesMeV 13106.11 -×=').join('1 MeV = 1.6 × 10⁻¹³ Joules');
  cleaned = cleaned.split('JoulesMeV 13106.11 -× =').join('1 MeV = 1.6 × 10⁻¹³ Joules');
  cleaned = cleaned.split('DynesNewton 5101 -=').join('1 dyne = 10⁻⁵ Newton');
  
  // Derivation in line 13 explanation
  cleaned = cleaned.split('m N cm dyne 2 5 10 107070 - -×= = mN /107 2-× .').join('= 70 × 10⁻⁵ N / 10⁻² m = 70 × 10⁻³ N/m = 7 × 10⁻² N/m');

  // Vector cleanup rules:
  // kji ^2^5^3 ++ -> 3î + 5ĵ + 2k̂
  cleaned = cleaned.replace(/kjî?\s*[\^ˆ](\d*)[\^ˆ](\d*)[\^ˆ](\d*)\s*([\+\-＝=]+)/g, (_match, k, j, i, signs) => {
    const kCoef = k || '1';
    const jCoef = j || '1';
    const iCoef = i || '1';
    const kSign = signs.includes('-') && signs.indexOf('-') === 0 ? '-' : '+';
    const jSign = signs.includes('-') && (signs.indexOf('-') === 1 || signs.lastIndexOf('-') === 1) ? '-' : '+';
    return `${iCoef}î ${jSign} ${jCoef}ĵ ${kSign} ${kCoef}k̂`
      .replace(/\+\s*-/g, '- ')
      .replace(/\+\s*\+/g, '+ ')
      .replace(/-\s*-/g, '+ ')
      .replace(/-\s*\+/g, '- ');
  });

  // ji ^4^3 + -> 3î + 4ĵ
  cleaned = cleaned.replace(/jî?\s*[\^ˆ](\d*)[\^ˆ](\d*)\s*([\+\-＝=]*)/g, (_match, j, i, signs) => {
    const jCoef = j || '1';
    const iCoef = i || '1';
    const jSign = signs.includes('-') ? '-' : '+';
    return `${iCoef}î ${jSign} ${jCoef}ĵ`
      .replace(/\+\s*-/g, '- ')
      .replace(/\+\s*\+/g, '+ ');
  });

  // ki ^4^3 + -> 3î + 4k̂
  cleaned = cleaned.replace(/kî?\s*[\^ˆ](\d*)[\^ˆ](\d*)\s*([\+\-＝=]*)/g, (_match, k, i, signs) => {
    const kCoef = k || '1';
    const iCoef = i || '1';
    const kSign = signs.includes('-') ? '-' : '+';
    return `${iCoef}î ${kSign} ${kCoef}k̂`
      .replace(/\+\s*-/g, '- ')
      .replace(/\+\s*\+/g, '+ ');
  });

  // kj ^4^3 + -> 3ĵ + 4k̂
  cleaned = cleaned.replace(/kĵ?\s*[\^ˆ](\d*)[\^ˆ](\d*)\s*([\+\-＝=]*)/g, (_match, k, j, signs) => {
    const kCoef = k || '1';
    const jCoef = j || '1';
    const kSign = signs.includes('-') ? '-' : '+';
    return `${jCoef}ĵ ${kSign} ${kCoef}k̂`
      .replace(/\+\s*-/g, '- ')
      .replace(/\+\s*\+/g, '+ ');
  });

  // Unmangle inverse trigonometric functions (e.g. )2/1(cos 1- -> cos⁻¹(1/2))
  cleaned = cleaned.replace(/\)([^)]+)\(\s*(sin|cos|tan)\s*1\s*-\s*-\s*/gi, (_match, arg, func) => {
    const reversedArg = arg.includes('/') ? arg.split('/').reverse().join('/') : arg;
    return `${func}⁻¹(-${reversedArg})`;
  });
  cleaned = cleaned.replace(/\)([^)]+)\(\s*(sin|cos|tan)\s*1\s*-\s*/gi, (_match, arg, func) => {
    const reversedArg = arg.includes('/') ? arg.split('/').reverse().join('/') : arg;
    return `${func}⁻¹(${reversedArg})`;
  });
  
  // Unmangle parenthesized unit exponents (e.g. (Ampere) 2 -> (Ampere)²)
  cleaned = cleaned.replace(/\(([^)]+)\)\s*2\b/g, '($1)²');
  cleaned = cleaned.replace(/\(([^)]+)\)\s*3\b/g, '($1)³');
  cleaned = cleaned.replace(/\(([^)]+)\)\s*4\b/g, '($1)⁴');

  // Unmangle variables - run period prefix match first!
  cleaned = cleaned.replace(/\.2v\b/g, 'v_2');
  cleaned = cleaned.replace(/\.1v\b/g, 'v_1');
  
  cleaned = cleaned.replace(/\b1v\b/g, 'v_1');
  cleaned = cleaned.replace(/\b2v\b/g, 'v_2');
  cleaned = cleaned.replace(/\b1f\b/g, 'f_1');
  cleaned = cleaned.replace(/\b2f\b/g, 'f_2');
  cleaned = cleaned.replace(/\b1E\b/g, 'E_1');
  cleaned = cleaned.replace(/\b2E\b/g, 'E_2');
  cleaned = cleaned.replace(/\b1u\b/g, 'u_1');
  cleaned = cleaned.replace(/\b2u\b/g, 'u_2');
  cleaned = cleaned.replace(/\b1q\b/g, 'q_1');
  cleaned = cleaned.replace(/\b2q\b/g, 'q_2');
  cleaned = cleaned.replace(/\b1T\b/g, 'T_1');
  cleaned = cleaned.replace(/\b2T\b/g, 'T_2');
  cleaned = cleaned.replace(/\b1P\b/g, 'P_1');
  cleaned = cleaned.replace(/\b2P\b/g, 'P_2');
  cleaned = cleaned.replace(/\b1V\b/g, 'V_1');
  cleaned = cleaned.replace(/\b2V\b/g, 'V_2');
  
  // Specific mass subscript cleanups to avoid conflicts with '1m' meaning '1 meter'
  cleaned = cleaned.replace(/masses\s+1m\s+and\s+2m/gi, 'masses m_1 and m_2');
  cleaned = cleaned.replace(/mass\s+1m\b/gi, 'mass m_1');
  cleaned = cleaned.replace(/mass\s+2m\b/gi, 'mass m_2');
  cleaned = cleaned.replace(/masses\s+m\s*1\s+and\s+m\s*2/gi, 'masses m_1 and m_2');

  // Scrambled units and expressions (Units & Dimensions Q5 & options)
  cleaned = cleaned.replace(/2\/Strain Stress mN=/g, 'Stress/Strain = N/m²');
  cleaned = cleaned.replace(/Surface tension = mN\//g, 'Surface tension = N/m');
  cleaned = cleaned.replace(/Energy sec\/-mkg=/g, 'Energy = kg-m²/sec²');
  cleaned = cleaned.replace(/Pressure 2\/mN=/g, 'Pressure = N/m²');
  
  // Scrambled option choices in other Units questions - using literal strings
  cleaned = cleaned.split('mN/').join('N/m');
  cleaned = cleaned.split('mN-').join('N-m');
  cleaned = cleaned.split('2/mN').join('N/m²');
  cleaned = cleaned.split('2mN-').join('N-m²');

  // Unmangle the collision question and options
  cleaned = cleaned.replace(/\)\(\s*21\s*vv\s*>/g, '(v_1 > v_2)');
  cleaned = cleaned.replace(/a vvd 2 \)\(\s*2\s*21\s*-\s*</g, 'd < (v_1 - v_2)² / 2a');
  cleaned = cleaned.replace(/a vvd 2 2 2 2 1\s*-\s*</g, 'd < (v_1² - v_2²) / 2a');
  cleaned = cleaned.replace(/a vvd 2 \)\(\s*2\s*21\s*-\s*>/g, 'd > (v_1 - v_2)² / 2a');
  cleaned = cleaned.replace(/a vvd 2 2 2 2 1\s*-\s*>/g, 'd > (v_1² - v_2²) / 2a');

  // Unmangle thermodynamics power options (R V3 -> V³/R)
  cleaned = cleaned.replace(/\bR\s+V\s*([23])\b/g, 'V$1/R');
  cleaned = cleaned.replace(/\bR\s+V\s+([23])\b/g, 'V$1/R');
  
  // Unit exponents mapping
  cleaned = cleaned.replace(/\bmetre2\b/g, 'metre²');
  cleaned = cleaned.replace(/\bmetre\s+2\b/g, 'metre²');
  cleaned = cleaned.replace(/\bm\s+2\b/g, 'm²');
  cleaned = cleaned.replace(/\bm\s+3\b/g, 'm³');
  cleaned = cleaned.replace(/\bper\s+3m\b/g, 'per m³');
  cleaned = cleaned.replace(/\bWeber\/m\s+2\b/g, 'Weber/m²');
  cleaned = cleaned.replace(/\bWeber-m\s+2\b/g, 'Weber-m²');
  cleaned = cleaned.replace(/\bA-m\s+2\b/g, 'A-m²');
  cleaned = cleaned.replace(/\bWeber\/metre2\b/g, 'Weber/metre²');

  // Specific corrections
  cleaned = cleaned.split('A3').join('A√3');
  cleaned = cleaned.split('A 3').join('A / √3');
  
  // Standard unit vectors i^, j^, k^
  cleaned = cleaned.replace(/i\s*[\^ˆ]/g, 'î');
  cleaned = cleaned.replace(/j\s*[\^ˆ]/g, 'ĵ');
  cleaned = cleaned.replace(/k\s*[\^ˆ]/g, 'k̂');
  cleaned = cleaned.split('î̂').join('î').split('ĵ̂').join('ĵ').split('k̂̂').join('k̂');

  // Super/subscripts
  cleaned = cleaned.split('m/s^2').join('m/s²');
  cleaned = cleaned.split('m/s2').join('m/s²');
  cleaned = cleaned.split('10^-2').join('10⁻²');
  cleaned = cleaned.split('10^-3').join('10⁻³');
  cleaned = cleaned.split('10^5').join('10⁵');
  cleaned = cleaned.split('10^6').join('10⁶');
  cleaned = cleaned.replace(/(\w+)\^2/g, '$1²');
  
  cleaned = cleaned.split('V2').join('V²').split('V3').join('V³');

  // Clean up double spaces
  cleaned = cleaned.replace(/\s+/g, ' ');

  return cleaned.trim();
}
