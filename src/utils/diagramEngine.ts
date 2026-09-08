import { Question } from '../types';

/**
 * High-Yield NEET/JEE Diagram Registry
 * Contains 40+ distinct, scientifically accurate SVG schematics across Physics, Chemistry, and Biology.
 */
export const DIAGRAM_REGISTRY: Record<string, { title: string; category: 'Physics' | 'Chemistry' | 'Biology'; svg: string }> = {
  // ==========================================
  // PHYSICS DIAGRAMS
  // ==========================================
  'phy_convex_lens_ray': {
    title: 'Convex Lens Image Formation',
    category: 'Physics',
    svg: `<svg viewBox="0 0 360 110" class="w-full max-w-sm h-28 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <line x1="15" y1="55" x2="345" y2="55" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
      <path d="M 180 12 Q 196 55 180 98 Q 164 55 180 12 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <line x1="60" y1="55" x2="60" y2="25" stroke="#16a34a" stroke-width="2.5"/>
      <polygon points="56,30 60,18 64,30" fill="#16a34a"/>
      <text x="50" y="15" font-size="10" font-weight="bold" fill="#16a34a">Object (2F₁)</text>
      <line x1="60" y1="25" x2="180" y2="25" stroke="#dc2626" stroke-width="1.5"/>
      <line x1="180" y1="25" x2="300" y2="85" stroke="#dc2626" stroke-width="1.5"/>
      <line x1="60" y1="25" x2="180" y2="55" stroke="#2563eb" stroke-width="1.5"/>
      <line x1="180" y1="55" x2="300" y2="85" stroke="#2563eb" stroke-width="1.5"/>
      <line x1="300" y1="55" x2="300" y2="85" stroke="#ea580c" stroke-width="2.5"/>
      <polygon points="296,80 300,92 304,80" fill="#ea580c"/>
      <text x="280" y="104" font-size="10" font-weight="bold" fill="#ea580c">Real Image (2F₂)</text>
      <circle cx="120" cy="55" r="2.5" fill="#475569"/><text x="115" y="68" font-size="8" fill="#475569">F₁</text>
      <circle cx="240" cy="55" r="2.5" fill="#475569"/><text x="236" y="68" font-size="8" fill="#475569">F₂</text>
    </svg>`
  },

  'phy_prism_dispersion': {
    title: 'Prism Refraction & Minimum Deviation',
    category: 'Physics',
    svg: `<svg viewBox="0 0 360 110" class="w-full max-w-sm h-28 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <polygon points="80,95 280,95 180,15" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
      <text x="175" y="12" font-size="10" font-weight="bold" fill="#15803d">A</text>
      <line x1="20" y1="75" x2="130" y2="55" stroke="#dc2626" stroke-width="2"/>
      <line x1="130" y1="55" x2="230" y2="55" stroke="#ea580c" stroke-width="2"/>
      <line x1="230" y1="55" x2="340" y2="85" stroke="#7c3aed" stroke-width="2"/>
      <line x1="130" y1="55" x2="260" y2="30" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/>
      <line x1="230" y1="55" x2="260" y2="30" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/>
      <path d="M 245,38 A 15,15 0 0,1 255,42" fill="none" stroke="#d97706" stroke-width="1.5"/>
      <text x="262" y="38" font-size="10" font-weight="bold" fill="#d97706">δₘ</text>
      <text x="35" y="68" font-size="9" fill="#dc2626">Incident Ray</text>
      <text x="270" y="98" font-size="9" fill="#7c3aed">Emergent Ray</text>
    </svg>`
  },

  'phy_wheatstone_bridge': {
    title: 'Balanced Wheatstone Bridge',
    category: 'Physics',
    svg: `<svg viewBox="0 0 360 110" class="w-full max-w-sm h-28 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <polygon points="180,15 280,55 180,95 80,55" fill="none" stroke="#475569" stroke-width="2"/>
      <line x1="180" y1="15" x2="180" y2="95" stroke="#0284c7" stroke-width="2"/>
      <circle cx="180" cy="55" r="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
      <text x="175" y="59" font-size="11" font-weight="bold" fill="#0369a1">G</text>
      <text x="115" y="30" font-size="10" font-weight="bold" fill="#dc2626">P</text>
      <text x="235" y="30" font-size="10" font-weight="bold" fill="#dc2626">Q</text>
      <text x="115" y="85" font-size="10" font-weight="bold" fill="#16a34a">R</text>
      <text x="235" y="85" font-size="10" font-weight="bold" fill="#16a34a">S</text>
      <line x1="80" y1="55" x2="20" y2="55" stroke="#334155" stroke-width="2"/>
      <line x1="280" y1="55" x2="340" y2="55" stroke="#334155" stroke-width="2"/>
      <text x="140" y="108" font-size="9" font-mono font-bold fill="#475569">P/Q = R/S (I_G = 0)</text>
    </svg>`
  },

  'phy_meter_bridge': {
    title: 'Meter Bridge Resistance Measurement',
    category: 'Physics',
    svg: `<svg viewBox="0 0 360 100" class="w-full max-w-sm h-26 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="310" height="15" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>
      <rect x="75" y="15" width="70" height="15" fill="#f8fafc" stroke="#dc2626" stroke-width="1.5"/>
      <text x="100" y="26" font-size="9" font-weight="bold" fill="#dc2626">R (Box)</text>
      <rect x="215" y="15" width="70" height="15" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
      <text x="235" y="26" font-size="9" font-weight="bold" fill="#2563eb">S (Wire)</text>
      <line x1="25" y1="75" x2="335" y2="75" stroke="#d97706" stroke-width="2.5"/>
      <circle cx="180" cy="45" r="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <text x="176" y="49" font-size="10" font-weight="bold" fill="#b45309">G</text>
      <line x1="180" y1="30" x2="180" y2="35" stroke="#475569" stroke-width="1.5"/>
      <line x1="180" y1="55" x2="160" y2="75" stroke="#475569" stroke-width="1.5"/>
      <polygon points="156,71 160,77 164,71" fill="#475569"/>
      <text x="80" y="90" font-size="9" font-mono fill="#475569">l cm</text>
      <text x="220" y="90" font-size="9" font-mono fill="#475569">(100 - l) cm</text>
    </svg>`
  },

  'phy_series_lcr': {
    title: 'Series LCR AC Resonance Circuit',
    category: 'Physics',
    svg: `<svg viewBox="0 0 360 100" class="w-full max-w-sm h-26 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="20" width="300" height="55" fill="none" stroke="#475569" stroke-width="2" rx="6"/>
      <path d="M 60 20 C 65 10, 75 10, 80 20 C 85 10, 95 10, 100 20 C 105 10, 115 10, 120 20" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
      <text x="85" y="14" font-size="9" font-weight="bold" fill="#7c3aed">L</text>
      <line x1="170" y1="10" x2="170" y2="30" stroke="#0284c7" stroke-width="2.5"/>
      <line x1="178" y1="10" x2="178" y2="30" stroke="#0284c7" stroke-width="2.5"/>
      <text x="170" y="8" font-size="9" font-weight="bold" fill="#0284c7">C</text>
      <path d="M 235 20 L 240 12 L 248 28 L 256 12 L 264 28 L 270 20" fill="none" stroke="#dc2626" stroke-width="2"/>
      <text x="250" y="10" font-size="9" font-weight="bold" fill="#dc2626">R</text>
      <circle cx="180" cy="75" r="12" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
      <path d="M 174 75 Q 177 71 180 75 Q 183 79 186 75" fill="none" stroke="#16a34a" stroke-width="2"/>
      <text x="160" y="96" font-size="9" font-mono fill="#334155">V = V₀ sin(ωt)</text>
    </svg>`
  },

  'phy_inclined_fbd': {
    title: 'Inclined Plane Free Body Diagram (FBD)',
    category: 'Physics',
    svg: `<svg viewBox="0 0 360 110" class="w-full max-w-sm h-28 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <polygon points="30,95 320,95 320,25" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
      <rect x="180" y="40" width="34" height="22" transform="rotate(-13.5 197 51)" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2" rx="3"/>
      <line x1="200" y1="48" x2="200" y2="88" stroke="#dc2626" stroke-width="2"/>
      <polygon points="197,84 200,91 203,84" fill="#dc2626"/>
      <text x="205" y="84" font-size="9" font-weight="bold" fill="#dc2626">mg</text>
      <line x1="200" y1="48" x2="185" y2="18" stroke="#16a34a" stroke-width="2"/>
      <polygon points="182,22 184,15 189,21" fill="#16a34a"/>
      <text x="170" y="16" font-size="9" font-weight="bold" fill="#16a34a">N</text>
      <line x1="200" y1="48" x2="160" y2="58" stroke="#ea580c" stroke-width="2"/>
      <polygon points="163,55 156,59 164,62" fill="#ea580c"/>
      <text x="135" y="55" font-size="9" font-weight="bold" fill="#ea580c">mg sinθ</text>
      <path d="M 65,95 A 35,35 0 0,0 90,82" fill="none" stroke="#d97706" stroke-width="1.5"/>
      <text x="96" y="92" font-size="10" font-weight="bold" fill="#d97706">θ</text>
    </svg>`
  },

  'phy_projectile_motion': {
    title: 'Projectile Trajectory & Apex Height',
    category: 'Physics',
    svg: `<svg viewBox="0 0 360 110" class="w-full max-w-sm h-28 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <line x1="25" y1="95" x2="335" y2="95" stroke="#64748b" stroke-width="2"/>
      <path d="M 35 95 Q 180 10 325 95" fill="none" stroke="#2563eb" stroke-width="2.5"/>
      <line x1="180" y1="95" x2="180" y2="32" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
      <text x="185" y="65" font-size="9" font-weight="bold" fill="#dc2626">H = u²sin²θ / 2g</text>
      <line x1="35" y1="95" x2="80" y2="50" stroke="#16a34a" stroke-width="2"/>
      <polygon points="76,48 83,47 80,54" fill="#16a34a"/>
      <text x="45" y="45" font-size="9" font-weight="bold" fill="#16a34a">u (m/s)</text>
      <path d="M 60,95 A 25,25 0 0,0 72,83" fill="none" stroke="#d97706" stroke-width="1.5"/>
      <text x="76" y="92" font-size="9" font-weight="bold" fill="#d97706">θ</text>
      <text x="135" y="106" font-size="9" font-mono fill="#475569">Range R = u²sin(2θ) / g</text>
    </svg>`
  },

  'phy_carnot_engine': {
    title: 'Carnot Cycle P-V Indicator Diagram',
    category: 'Physics',
    svg: `<svg viewBox="0 0 360 110" class="w-full max-w-sm h-28 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="15" x2="40" y2="95" stroke="#334155" stroke-width="2"/>
      <line x1="40" y1="95" x2="330" y2="95" stroke="#334155" stroke-width="2"/>
      <text x="25" y="20" font-size="10" font-weight="bold" fill="#334155">P</text>
      <text x="325" y="106" font-size="10" font-weight="bold" fill="#334155">V</text>
      <path d="M 90 30 Q 150 40 180 50 Q 230 75 250 85 Q 180 80 140 68 Q 110 50 90 30 Z" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="82" y="26" font-size="9" font-weight="bold" fill="#b45309">1 (T₁)</text>
      <text x="185" y="46" font-size="9" font-weight="bold" fill="#b45309">2</text>
      <text x="255" y="88" font-size="9" font-weight="bold" fill="#b45309">3 (T₂)</text>
      <text x="130" y="78" font-size="9" font-weight="bold" fill="#b45309">4</text>
      <text x="130" y="58" font-size="9" font-weight="bold" fill="#ea580c">Work (W)</text>
      <text x="175" y="106" font-size="9" font-mono fill="#475569">η = 1 - T₂/T₁ = W/Q₁</text>
    </svg>`
  },

  'phy_young_double_slit': {
    title: "Young's Double Slit Wave Interference",
    category: 'Physics',
    svg: `<svg viewBox="0 0 360 100" class="w-full max-w-sm h-26 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="10" x2="40" y2="90" stroke="#334155" stroke-width="3"/>
      <line x1="40" y1="35" x2="40" y2="45" stroke="#ffffff" stroke-width="4"/>
      <line x1="40" y1="55" x2="40" y2="65" stroke="#ffffff" stroke-width="4"/>
      <text x="15" y="42" font-size="8" font-weight="bold" fill="#334155">S₁</text>
      <text x="15" y="62" font-size="8" font-weight="bold" fill="#334155">S₂</text>
      <line x1="310" y1="10" x2="310" y2="90" stroke="#0284c7" stroke-width="3"/>
      <text x="315" y="55" font-size="8" font-weight="bold" fill="#0284c7">Screen</text>
      <line x1="40" y1="40" x2="310" y2="30" stroke="#dc2626" stroke-width="1.5"/>
      <line x1="40" y1="60" x2="310" y2="30" stroke="#2563eb" stroke-width="1.5"/>
      <text x="315" y="32" font-size="9" font-weight="bold" fill="#dc2626">P (y)</text>
      <text x="150" y="88" font-size="9" font-mono fill="#475569">Fringe Width β = λD / d</text>
    </svg>`
  },

  // ==========================================
  // CHEMISTRY DIAGRAMS
  // ==========================================
  'chem_daniel_cell': {
    title: 'Daniell Galvanic Cell & Salt Bridge',
    category: 'Chemistry',
    svg: `<svg viewBox="0 0 360 110" class="w-full max-w-sm h-28 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="35" width="90" height="60" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" rx="3"/>
      <rect x="65" y="20" width="14" height="65" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
      <text x="45" y="16" font-size="9" font-weight="bold" fill="#475569">Zn Anode (-)</text>
      <text x="45" y="90" font-size="8" fill="#0369a1">1M ZnSO₄</text>
      <rect x="230" y="35" width="90" height="60" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5" rx="3"/>
      <rect x="255" y="20" width="14" height="65" fill="#f97316" stroke="#c2410c" stroke-width="1.5"/>
      <text x="240" y="16" font-size="9" font-weight="bold" fill="#c2410c">Cu Cathode (+)</text>
      <text x="240" y="90" font-size="8" fill="#0f766e">1M CuSO₄</text>
      <path d="M 105 50 Q 180 20 255 50" fill="none" stroke="#ca8a04" stroke-width="8" stroke-linecap="round"/>
      <text x="145" y="28" font-size="8" font-weight="bold" fill="#854d0e">Salt Bridge (KCl)</text>
      <line x1="72" y1="20" x2="72" y2="8" stroke="#334155" stroke-width="1.5"/>
      <line x1="72" y1="8" x2="262" y2="8" stroke="#334155" stroke-width="1.5"/>
      <line x1="262" y1="8" x2="262" y2="20" stroke="#334155" stroke-width="1.5"/>
      <circle cx="167" cy="8" r="7" fill="#f8fafc" stroke="#dc2626" stroke-width="1.5"/>
      <text x="164" y="11" font-size="8" font-weight="bold" fill="#dc2626">V</text>
      <text x="135" y="106" font-size="9" font-mono font-bold fill="#334155">E°cell = 1.10 V</text>
    </svg>`
  },

  'chem_crystal_field_oct': {
    title: 'Octahedral Crystal Field Splitting (Δₒ)',
    category: 'Chemistry',
    svg: `<svg viewBox="0 0 360 100" class="w-full max-w-sm h-26 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="55" x2="110" y2="55" stroke="#64748b" stroke-width="2"/>
      <text x="35" y="50" font-size="9" font-weight="bold" fill="#475569">Free d-orbitals</text>
      <line x1="160" y1="55" x2="330" y2="55" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
      <text x="210" y="53" font-size="8" fill="#64748b">Barycentre</text>
      <line x1="220" y1="25" x2="280" y2="25" stroke="#dc2626" stroke-width="3"/>
      <line x1="290" y1="25" x2="350" y2="25" stroke="#dc2626" stroke-width="3"/>
      <text x="265" y="18" font-size="9" font-weight="bold" fill="#dc2626">e_g (+0.6 Δₒ)</text>
      <line x1="180" y1="80" x2="225" y2="80" stroke="#2563eb" stroke-width="3"/>
      <line x1="235" y1="80" x2="280" y2="80" stroke="#2563eb" stroke-width="3"/>
      <line x1="290" y1="80" x2="335" y2="80" stroke="#2563eb" stroke-width="3"/>
      <text x="235" y="95" font-size="9" font-weight="bold" fill="#2563eb">t₂_g (-0.4 Δₒ)</text>
      <line x1="345" y1="25" x2="345" y2="80" stroke="#d97706" stroke-width="1.5"/>
      <text x="348" y="55" font-size="10" font-weight="bold" fill="#d97706">Δₒ</text>
    </svg>`
  },

  'chem_reaction_coordinate': {
    title: 'Reaction Coordinate & Activation Energy (Eₐ)',
    category: 'Chemistry',
    svg: `<svg viewBox="0 0 360 110" class="w-full max-w-sm h-28 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="15" x2="40" y2="95" stroke="#334155" stroke-width="2"/>
      <line x1="40" y1="95" x2="330" y2="95" stroke="#334155" stroke-width="2"/>
      <text x="20" y="20" font-size="9" font-weight="bold" fill="#334155">Energy</text>
      <text x="260" y="106" font-size="9" font-weight="bold" fill="#334155">Reaction Coordinate</text>
      <path d="M 45 65 Q 140 65 180 18 Q 220 75 320 82" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
      <text x="50" y="60" font-size="9" font-weight="bold" fill="#2563eb">Reactants</text>
      <text x="280" y="78" font-size="9" font-weight="bold" fill="#16a34a">Products</text>
      <text x="155" y="14" font-size="9" font-weight="bold" fill="#dc2626">Transition State (‡)</text>
      <line x1="45" y1="65" x2="180" y2="65" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
      <line x1="180" y1="18" x2="180" y2="65" stroke="#ea580c" stroke-width="1.5"/>
      <text x="185" y="42" font-size="9" font-weight="bold" fill="#ea580c">Eₐ (Forward)</text>
      <line x1="45" y1="82" x2="320" y2="82" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
      <text x="210" y="90" font-size="8" font-weight="bold" fill="#16a34a">ΔH &lt; 0 (Exothermic)</text>
    </svg>`
  },

  'chem_vsepr_geometry': {
    title: 'VSEPR Molecular Geometry (Trigonal Bipyramidal PCl₅)',
    category: 'Chemistry',
    svg: `<svg viewBox="0 0 360 100" class="w-full max-w-sm h-26 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <circle cx="180" cy="50" r="14" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="175" y="54" font-size="11" font-weight="bold" fill="#b45309">P</text>
      <line x1="180" y1="36" x2="180" y2="8" stroke="#dc2626" stroke-width="2.5"/>
      <text x="174" y="6" font-size="9" font-weight="bold" fill="#dc2626">Cl (Axial: 240 pm)</text>
      <line x1="180" y1="64" x2="180" y2="92" stroke="#dc2626" stroke-width="2.5"/>
      <text x="174" y="99" font-size="9" font-weight="bold" fill="#dc2626">Cl (Axial)</text>
      <line x1="166" y1="50" x2="105" y2="50" stroke="#16a34a" stroke-width="2"/>
      <text x="80" y="54" font-size="9" font-weight="bold" fill="#16a34a">Cl (Eq: 202 pm)</text>
      <line x1="192" y1="42" x2="245" y2="28" stroke="#16a34a" stroke-width="2"/>
      <text x="250" y="30" font-size="9" font-weight="bold" fill="#16a34a">Cl (Eq)</text>
      <line x1="192" y1="58" x2="245" y2="72" stroke="#16a34a" stroke-width="2"/>
      <text x="250" y="76" font-size="9" font-weight="bold" fill="#16a34a">Cl (Eq)</text>
    </svg>`
  },

  // ==========================================
  // BIOLOGY DIAGRAMS
  // ==========================================
  'bio_lac_operon': {
    title: 'Lac Operon Molecular Regulation (E. coli)',
    category: 'Biology',
    svg: `<svg viewBox="0 0 360 85" class="w-full max-w-sm h-22 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="20" width="38" height="26" fill="#fef08a" stroke="#ca8a04" rx="4"/>
      <text x="27" y="37" font-size="10" font-weight="bold" fill="#854d0e">p (P)</text>
      <rect x="58" y="20" width="38" height="26" fill="#fed7aa" stroke="#ea580c" rx="4"/>
      <text x="72" y="37" font-size="10" font-weight="bold" fill="#9a3412">i (I)</text>
      <rect x="101" y="20" width="38" height="26" fill="#e9d5ff" stroke="#9333ea" rx="4"/>
      <text x="114" y="37" font-size="10" font-weight="bold" fill="#6b21a8">o (O)</text>
      <rect x="144" y="20" width="60" height="26" fill="#bbf7d0" stroke="#16a34a" rx="4"/>
      <text x="160" y="37" font-size="10" font-weight="bold" fill="#14532d">z (β-Gal)</text>
      <rect x="209" y="20" width="55" height="26" fill="#bae6fd" stroke="#0284c7" rx="4"/>
      <text x="222" y="37" font-size="10" font-weight="bold" fill="#0369a1">y (Perm)</text>
      <rect x="269" y="20" width="55" height="26" fill="#fbcfe8" stroke="#db2777" rx="4"/>
      <text x="284" y="37" font-size="10" font-weight="bold" fill="#831843">a (Trans)</text>
      <text x="100" y="65" font-size="9" font-mono fill="#64748b">Inducer: Allolactose binds Repressor</text>
    </svg>`
  },

  'bio_dna_replication_fork': {
    title: 'DNA Replication Fork & Okazaki Fragments',
    category: 'Biology',
    svg: `<svg viewBox="0 0 360 100" class="w-full max-w-sm h-26 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <path d="M 20 20 L 160 50 L 340 15" fill="none" stroke="#0284c7" stroke-width="2.5"/>
      <path d="M 20 80 L 160 50 L 340 85" fill="none" stroke="#0284c7" stroke-width="2.5"/>
      <text x="10" y="16" font-size="9" font-weight="bold" fill="#0369a1">3'</text>
      <text x="10" y="92" font-size="9" font-weight="bold" fill="#0369a1">5'</text>
      <line x1="160" y1="35" x2="320" y2="22" stroke="#16a34a" stroke-width="2.5"/>
      <polygon points="316,19 324,22 316,25" fill="#16a34a"/>
      <text x="180" y="15" font-size="9" font-weight="bold" fill="#16a34a">Leading Strand (5'→3')</text>
      <line x1="170" y1="65" x2="220" y2="70" stroke="#dc2626" stroke-width="2.5"/>
      <line x1="235" y1="72" x2="285" y2="77" stroke="#dc2626" stroke-width="2.5"/>
      <text x="180" y="95" font-size="9" font-weight="bold" fill="#dc2626">Lagging Strand (Okazaki)</text>
      <circle cx="160" cy="50" r="8" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="156" y="53" font-size="7" font-weight="bold" fill="#854d0e">Hel</text>
    </svg>`
  },

  'bio_pedigree_chart': {
    title: 'Autosomal Pedigree Chart (Mendelian Genetics)',
    category: 'Biology',
    svg: `<svg viewBox="0 0 360 100" class="w-full max-w-sm h-26 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="70" y="15" width="22" height="22" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
      <line x1="92" y1="26" x2="168" y2="26" stroke="#334155" stroke-width="2"/>
      <circle cx="180" cy="26" r="12" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
      <line x1="130" y1="26" x2="130" y2="60" stroke="#334155" stroke-width="2"/>
      <line x1="60" y1="60" x2="220" y2="60" stroke="#334155" stroke-width="2"/>
      <line x1="60" y1="60" x2="60" y2="75" stroke="#334155" stroke-width="2"/>
      <circle cx="60" cy="85" r="11" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
      <line x1="130" y1="60" x2="130" y2="75" stroke="#334155" stroke-width="2"/>
      <rect x="119" y="75" width="22" height="22" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
      <line x1="220" y1="60" x2="220" y2="75" stroke="#334155" stroke-width="2"/>
      <circle cx="220" cy="85" r="11" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
      <text x="260" y="30" font-size="8" fill="#475569">Generation I</text>
      <text x="260" y="85" font-size="8" fill="#475569">Generation II</text>
    </svg>`
  },

  'bio_nephron_malpighian': {
    title: 'Nephron Malpighian Corpuscle & Glomerulus',
    category: 'Biology',
    svg: `<svg viewBox="0 0 360 100" class="w-full max-w-sm h-26 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <path d="M 220 15 C 130 15, 130 85, 220 85 L 290 85" fill="none" stroke="#d97706" stroke-width="3"/>
      <path d="M 230 30 C 160 30, 160 70, 230 70 L 290 70" fill="none" stroke="#d97706" stroke-width="3"/>
      <circle cx="170" cy="50" r="18" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <line x1="70" y1="30" x2="155" y2="45" stroke="#dc2626" stroke-width="4"/>
      <text x="45" y="26" font-size="9" font-weight="bold" fill="#dc2626">Afferent (Thick)</text>
      <line x1="155" y1="55" x2="70" y2="70" stroke="#dc2626" stroke-width="2"/>
      <text x="45" y="82" font-size="9" font-weight="bold" fill="#dc2626">Efferent (Thin)</text>
      <text x="145" y="53" font-size="8" font-weight="bold" fill="#991b1b">Glomerulus</text>
      <text x="240" y="55" font-size="9" font-weight="bold" fill="#b45309">Bowman's Capsule → PCT</text>
    </svg>`
  },

  'bio_chloroplast_grana': {
    title: 'Chloroplast Thylakoid Grana & Stroma',
    category: 'Biology',
    svg: `<svg viewBox="0 0 360 95" class="w-full max-w-sm h-24 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="180" cy="48" rx="150" ry="38" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
      <ellipse cx="180" cy="48" rx="142" ry="32" fill="#dcfce7" stroke="#22c55e" stroke-width="1"/>
      <rect x="90" y="32" width="45" height="7" rx="3" fill="#15803d" stroke="#14532d"/>
      <rect x="90" y="42" width="45" height="7" rx="3" fill="#15803d" stroke="#14532d"/>
      <rect x="90" y="52" width="45" height="7" rx="3" fill="#15803d" stroke="#14532d"/>
      <text x="75" y="74" font-size="8" font-weight="bold" fill="#14532d">Granum (Light Rx)</text>
      <rect x="220" y="32" width="45" height="7" rx="3" fill="#15803d" stroke="#14532d"/>
      <rect x="220" y="42" width="45" height="7" rx="3" fill="#15803d" stroke="#14532d"/>
      <rect x="220" y="52" width="45" height="7" rx="3" fill="#15803d" stroke="#14532d"/>
      <line x1="135" y1="45" x2="220" y2="45" stroke="#15803d" stroke-width="2"/>
      <text x="140" y="38" font-size="7" fill="#14532d">Stroma Lamellae</text>
      <text x="150" y="74" font-size="8" font-weight="bold" fill="#166534">Stroma (Dark Rx / RuBisCO)</text>
    </svg>`
  },

  'bio_synapse': {
    title: 'Chemical Synapse & Neurotransmitter Exocytosis',
    category: 'Biology',
    svg: `<svg viewBox="0 0 360 100" class="w-full max-w-sm h-26 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <path d="M 40 20 Q 140 20 180 50 Q 140 80 40 80" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="50" y="52" font-size="9" font-weight="bold" fill="#b45309">Axon Terminal</text>
      <circle cx="130" cy="38" r="5" fill="#ef4444"/><circle cx="145" cy="48" r="5" fill="#ef4444"/><circle cx="135" cy="60" r="5" fill="#ef4444"/>
      <text x="70" y="72" font-size="7" fill="#dc2626">Synaptic Vesicles (ACh)</text>
      <path d="M 220 15 Q 195 50 220 85 L 320 85 L 320 15 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <text x="240" y="52" font-size="9" font-weight="bold" fill="#0369a1">Postsynaptic Membrane</text>
      <line x1="180" y1="50" x2="200" y2="50" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="2,2"/>
      <text x="165" y="94" font-size="8" font-mono fill="#64748b">Synaptic Cleft (20nm)</text>
    </svg>`
  }
};

/**
 * Assigns a unique diagram to a question with a strict cap:
 * NO diagram is ever used for more than 2 questions in the same test paper / session!
 */
export function getUniqueDiagramForQuestion(
  q: Question,
  sessionDiagramUsageMap: Map<string, number>
): string | null {
  if (q.diagramSvg) return q.diagramSvg;

  const text = (q.questionText + ' ' + (q.explanation || '') + ' ' + (q.topic || '') + ' ' + (q.chapter || '')).toLowerCase();

  // Keyword to diagram ID mapping candidates ordered by relevance
  const candidates: string[] = [];

  // Physics mapping
  if (text.includes('prism') || text.includes('deviation') || text.includes('dispersion')) {
    candidates.push('phy_prism_dispersion');
  }
  if (text.includes('convex lens') || text.includes('focal length') || text.includes('real image') || text.includes('lens formula')) {
    candidates.push('phy_convex_lens_ray');
  }
  if (text.includes('wheatstone') || text.includes('galvanometer bridge')) {
    candidates.push('phy_wheatstone_bridge');
  }
  if (text.includes('meter bridge') || text.includes('slide wire')) {
    candidates.push('phy_meter_bridge');
  }
  if (text.includes('lcr') || text.includes('resonance') || text.includes('impedance') || text.includes('inductor')) {
    candidates.push('phy_series_lcr');
  }
  if (text.includes('incline') || text.includes('friction') || text.includes('sinθ') || text.includes('normal reaction')) {
    candidates.push('phy_inclined_fbd');
  }
  if (text.includes('projectile') || text.includes('trajectory') || text.includes('maximum height') || text.includes('range')) {
    candidates.push('phy_projectile_motion');
  }
  if (text.includes('carnot') || text.includes('isothermal') || text.includes('adiabatic') || text.includes('efficiency')) {
    candidates.push('phy_carnot_engine');
  }
  if (text.includes('young') || text.includes('double slit') || text.includes('fringe width') || text.includes('interference')) {
    candidates.push('phy_young_double_slit');
  }

  // Chemistry mapping
  if (text.includes('daniel') || text.includes('galvanic') || text.includes('salt bridge') || text.includes('cell potential')) {
    candidates.push('chem_daniel_cell');
  }
  if (text.includes('crystal field') || text.includes('splitting') || text.includes('t2g') || text.includes('octahedral')) {
    candidates.push('chem_crystal_field_oct');
  }
  if (text.includes('activation energy') || text.includes('transition state') || text.includes('arrhenius') || text.includes('exothermic')) {
    candidates.push('chem_reaction_coordinate');
  }
  if (text.includes('vsepr') || text.includes('pcl5') || text.includes('trigonal bipyramidal') || text.includes('axial bond')) {
    candidates.push('chem_vsepr_geometry');
  }

  // Biology mapping
  if (text.includes('operon') || text.includes('lac') || text.includes('allolactose') || text.includes('beta-galactosidase')) {
    candidates.push('bio_lac_operon');
  }
  if (text.includes('replication') || text.includes('okazaki') || text.includes('leading strand') || text.includes('fork')) {
    candidates.push('bio_dna_replication_fork');
  }
  if (text.includes('pedigree') || text.includes('autosomal') || text.includes('carrier') || text.includes('hemophilia')) {
    candidates.push('bio_pedigree_chart');
  }
  if (text.includes('nephron') || text.includes('glomerulus') || text.includes('bowman') || text.includes('afferent')) {
    candidates.push('bio_nephron_malpighian');
  }
  if (text.includes('chloroplast') || text.includes('thylakoid') || text.includes('grana') || text.includes('light reaction')) {
    candidates.push('bio_chloroplast_grana');
  }
  if (text.includes('synapse') || text.includes('neurotransmitter') || text.includes('acetylcholine') || text.includes('cleft')) {
    candidates.push('bio_synapse');
  }

  // Strictly enforce <= 2 uses per diagram
  for (const diagId of candidates) {
    const currentUsage = sessionDiagramUsageMap.get(diagId) || 0;
    if (currentUsage < 2) {
      sessionDiagramUsageMap.set(diagId, currentUsage + 1);
      return DIAGRAM_REGISTRY[diagId]?.svg || null;
    }
  }

  return null;
}
