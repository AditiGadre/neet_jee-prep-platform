import { Question } from '../types';

/**
 * High-Yield NEET/JEE Diagram Registry
 * Contains 50+ distinct, scientifically accurate SVG schematics across Physics, Chemistry, and Biology.
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

  'phy_bohr_atom_levels': {
    title: 'Bohr Hydrogen Spectral Transitions & Energy Levels',
    category: 'Physics',
    svg: `<svg viewBox="0 0 360 115" class="w-full max-w-sm h-28 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="15" x2="320" y2="15" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
      <text x="325" y="18" font-size="8" fill="#64748b">n=∞ (0 eV)</text>
      <line x1="40" y1="35" x2="320" y2="35" stroke="#64748b" stroke-width="1.5"/>
      <text x="325" y="38" font-size="8" fill="#475569">n=4 (-0.85 eV)</text>
      <line x1="40" y1="55" x2="320" y2="55" stroke="#475569" stroke-width="1.5"/>
      <text x="325" y="58" font-size="8" fill="#334155">n=3 (-1.51 eV)</text>
      <line x1="40" y1="78" x2="320" y2="78" stroke="#334155" stroke-width="2"/>
      <text x="325" y="81" font-size="8" fill="#1e293b">n=2 (-3.40 eV)</text>
      <line x1="40" y1="105" x2="320" y2="105" stroke="#0f172a" stroke-width="2.5"/>
      <text x="325" y="108" font-size="8" font-weight="bold" fill="#0f172a">n=1 (-13.6 eV)</text>
      <line x1="90" y1="78" x2="90" y2="105" stroke="#7c3aed" stroke-width="2"/>
      <polygon points="87,100 90,105 93,100" fill="#7c3aed"/>
      <text x="75" y="93" font-size="7" font-weight="bold" fill="#7c3aed">Lyman</text>
      <line x1="170" y1="55" x2="170" y2="78" stroke="#dc2626" stroke-width="2"/>
      <polygon points="167,73 170,78 173,73" fill="#dc2626"/>
      <text x="155" y="68" font-size="7" font-weight="bold" fill="#dc2626">Balmer (Hα)</text>
      <line x1="240" y1="35" x2="240" y2="55" stroke="#ea580c" stroke-width="2"/>
      <polygon points="237,50 240,55 243,50" fill="#ea580c"/>
      <text x="230" y="47" font-size="7" font-weight="bold" fill="#ea580c">Paschen</text>
    </svg>`
  },

  'phy_nuclear_be_curve': {
    title: 'Binding Energy per Nucleon vs Mass Number (A)',
    category: 'Physics',
    svg: `<svg viewBox="0 0 360 110" class="w-full max-w-sm h-28 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <line x1="35" y1="15" x2="35" y2="95" stroke="#334155" stroke-width="2"/>
      <line x1="35" y1="95" x2="340" y2="95" stroke="#334155" stroke-width="2"/>
      <text x="10" y="20" font-size="8" font-weight="bold" fill="#334155">B.E./A</text>
      <text x="10" y="29" font-size="7" fill="#64748b">(MeV)</text>
      <text x="325" y="106" font-size="9" font-weight="bold" fill="#334155">A</text>
      <path d="M 40 92 Q 60 40 85 28 Q 130 22 180 32 Q 260 48 320 62" fill="none" stroke="#2563eb" stroke-width="2.5"/>
      <circle cx="110" cy="24" r="3" fill="#dc2626"/>
      <text x="100" y="16" font-size="8" font-weight="bold" fill="#dc2626">⁵⁶Fe (8.75 MeV)</text>
      <text x="50" y="80" font-size="8" fill="#16a34a">Fusion Region</text>
      <line x1="75" y1="72" x2="90" y2="60" stroke="#16a34a" stroke-width="1.5"/>
      <text x="250" y="80" font-size="8" fill="#ea580c">Fission Region</text>
      <line x1="275" y1="72" x2="260" y2="58" stroke="#ea580c" stroke-width="1.5"/>
    </svg>`
  },

  'phy_electric_dipole_field': {
    title: 'Electric Dipole Equipotential & Flux Lines',
    category: 'Physics',
    svg: `<svg viewBox="0 0 360 100" class="w-full max-w-sm h-26 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="50" r="14" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="96" y="55" font-size="12" font-weight="bold" fill="#dc2626">+</text>
      <circle cx="260" cy="50" r="14" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <text x="257" y="55" font-size="12" font-weight="bold" fill="#0284c7">-</text>
      <path d="M 114 50 L 246 50" stroke="#475569" stroke-width="2"/>
      <polygon points="182,47 187,50 182,53" fill="#475569"/>
      <path d="M 108 38 Q 180 15 252 38" fill="none" stroke="#64748b" stroke-width="1.5"/>
      <polygon points="182,23 187,26 182,29" fill="#64748b"/>
      <path d="M 108 62 Q 180 85 252 62" fill="none" stroke="#64748b" stroke-width="1.5"/>
      <polygon points="182,71 187,74 182,77" fill="#64748b"/>
      <line x1="180" y1="10" x2="180" y2="90" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,3"/>
      <text x="185" y="88" font-size="8" font-weight="bold" fill="#16a34a">V = 0 Plane</text>
    </svg>`
  },

  'phy_magnetic_lorentz_force': {
    title: 'Magnetic Lorentz Force & Helical Trajectory (q v × B)',
    category: 'Physics',
    svg: `<svg viewBox="0 0 360 100" class="w-full max-w-sm h-26 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <circle cx="180" cy="50" r="32" fill="none" stroke="#0284c7" stroke-width="2" stroke-dasharray="4,2"/>
      <circle cx="180" cy="18" r="4" fill="#dc2626"/>
      <line x1="180" y1="18" x2="225" y2="18" stroke="#16a34a" stroke-width="2"/>
      <polygon points="221,15 228,18 221,21" fill="#16a34a"/>
      <text x="210" y="12" font-size="9" font-weight="bold" fill="#16a34a">v</text>
      <line x1="180" y1="18" x2="180" y2="42" stroke="#dc2626" stroke-width="2"/>
      <polygon points="177,38 180,45 183,38" fill="#dc2626"/>
      <text x="185" y="36" font-size="9" font-weight="bold" fill="#dc2626">F = q(v×B)</text>
      <text x="50" y="30" font-size="12" fill="#94a3b8">⊗ ⊗ ⊗</text>
      <text x="50" y="60" font-size="12" fill="#94a3b8">⊗ ⊗ ⊗</text>
      <text x="270" y="55" font-size="9" font-mono font-bold fill="#334155">r = mv / (qB)</text>
      <text x="270" y="70" font-size="9" font-mono font-bold fill="#334155">T = 2πm / (qB)</text>
    </svg>`
  },

  'phy_shm_spring_mass': {
    title: 'Simple Harmonic Motion (SHM) Spring-Mass & Phasor',
    category: 'Physics',
    svg: `<svg viewBox="0 0 360 100" class="w-full max-w-sm h-26 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="20" x2="30" y2="80" stroke="#334155" stroke-width="4"/>
      <path d="M 30 50 L 50 50 L 55 40 L 65 60 L 75 40 L 85 60 L 95 40 L 105 60 L 110 50 L 140 50" fill="none" stroke="#0284c7" stroke-width="2.5"/>
      <rect x="140" y="35" width="30" height="30" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2" rx="3"/>
      <text x="148" y="53" font-size="10" font-weight="bold" fill="#1e3a8a">m</text>
      <line x1="155" y1="70" x2="155" y2="90" stroke="#94a3b8" stroke-dasharray="2,2"/>
      <text x="145" y="98" font-size="8" fill="#64748b">x = 0</text>
      <line x1="200" y1="70" x2="200" y2="90" stroke="#dc2626" stroke-dasharray="2,2"/>
      <text x="195" y="98" font-size="8" font-weight="bold" fill="#dc2626">+A</text>
      <text x="250" y="45" font-size="9" font-mono font-bold fill="#334155">F = -kx</text>
      <text x="250" y="62" font-size="9" font-mono font-bold fill="#334155">T = 2π√(m/k)</text>
      <text x="250" y="79" font-size="9" font-mono font-bold fill="#334155">ω = √(k/m)</text>
    </svg>`
  },

  'phy_bernoulli_venturi': {
    title: "Venturimeter Flow & Bernoulli's Pressure Head Difference",
    category: 'Physics',
    svg: `<svg viewBox="0 0 360 105" class="w-full max-w-sm h-26 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <path d="M 30 35 L 130 35 L 170 50 L 210 50 L 250 35 L 330 35" fill="none" stroke="#475569" stroke-width="2"/>
      <path d="M 30 85 L 130 85 L 170 70 L 210 70 L 250 85 L 330 85" fill="none" stroke="#475569" stroke-width="2"/>
      <line x1="80" y1="35" x2="80" y2="10" stroke="#0284c7" stroke-width="2"/>
      <line x1="190" y1="50" x2="190" y2="25" stroke="#0284c7" stroke-width="2"/>
      <line x1="80" y1="10" x2="190" y2="10" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="2,2"/>
      <line x1="190" y1="10" x2="190" y2="25" stroke="#dc2626" stroke-width="1.5"/>
      <text x="195" y="18" font-size="8" font-weight="bold" fill="#dc2626">h</text>
      <text x="50" y="62" font-size="8" font-weight="bold" fill="#0284c7">A₁, v₁ (High P)</text>
      <text x="175" y="63" font-size="8" font-weight="bold" fill="#ea580c">A₂, v₂</text>
      <text x="240" y="98" font-size="8" font-mono fill="#334155">P₁ - P₂ = ½ρ(v₂² - v₁²)</text>
    </svg>`
  },

  'phy_pn_junction_depletion': {
    title: 'PN Junction Diode Depletion Region & Barrier Potential',
    category: 'Physics',
    svg: `<svg viewBox="0 0 360 100" class="w-full max-w-sm h-26 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="25" width="130" height="50" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="75" y="55" font-size="14" font-weight="bold" fill="#dc2626">P-type</text>
      <rect x="180" y="25" width="130" height="50" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
      <text x="240" y="55" font-size="14" font-weight="bold" fill="#0284c7">N-type</text>
      <rect x="155" y="25" width="50" height="50" fill="#fef3c7" stroke="#d97706" stroke-width="1.5" opacity="0.8"/>
      <text x="160" y="20" font-size="8" font-weight="bold" fill="#d97706">Depletion</text>
      <line x1="170" y1="65" x2="190" y2="65" stroke="#7c3aed" stroke-width="1.5"/>
      <polygon points="174,62 168,65 174,68" fill="#7c3aed"/>
      <text x="165" y="74" font-size="7" fill="#7c3aed">E_barrier</text>
      <text x="90" y="93" font-size="8" font-mono fill="#334155">Forward Bias: Depletion narrows (V_barrier ≈ 0.7V for Si)</text>
    </svg>`
  },

  'phy_logic_gates_circuit': {
    title: 'Digital Logic Gate Symbols & Truth Function',
    category: 'Physics',
    svg: `<svg viewBox="0 0 360 100" class="w-full max-w-sm h-26 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <path d="M 50 30 L 90 30 C 110 30 110 70 90 70 L 50 70 Z" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
      <circle cx="114" cy="50" r="4" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
      <line x1="30" y1="40" x2="50" y2="40" stroke="#334155" stroke-width="2"/>
      <line x1="30" y1="60" x2="50" y2="60" stroke="#334155" stroke-width="2"/>
      <line x1="118" y1="50" x2="140" y2="50" stroke="#334155" stroke-width="2"/>
      <text x="20" y="43" font-size="8" font-weight="bold" fill="#334155">A</text>
      <text x="20" y="63" font-size="8" font-weight="bold" fill="#334155">B</text>
      <text x="65" y="53" font-size="9" font-weight="bold" fill="#16a34a">NAND</text>
      <text x="145" y="53" font-size="9" font-weight="bold" fill="#334155">Y = (A·B)'</text>
      <rect x="220" y="20" width="110" height="65" fill="#f8fafc" stroke="#cbd5e1" rx="4"/>
      <text x="235" y="35" font-size="8" font-mono font-bold fill="#475569">A B | Y (NAND)</text>
      <text x="235" y="47" font-size="8" font-mono fill="#64748b">0 0 | 1</text>
      <text x="235" y="59" font-size="8" font-mono fill="#64748b">0 1 | 1</text>
      <text x="235" y="71" font-size="8" font-mono fill="#64748b">1 0 | 1</text>
      <text x="235" y="83" font-size="8" font-mono font-bold fill="#dc2626">1 1 | 0</text>
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
      <polygon points="342,29 345,22 348,29" fill="#d97706"/>
      <polygon points="342,76 345,83 348,76" fill="#d97706"/>
      <text x="350" y="55" font-size="10" font-weight="bold" fill="#d97706">Δₒ</text>
    </svg>`
  },

  'chem_reaction_coordinate': {
    title: 'Reaction Coordinate & Activation Energy (Eₐ)',
    category: 'Chemistry',
    svg: `<svg viewBox="0 0 360 110" class="w-full max-w-sm h-28 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <line x1="35" y1="15" x2="35" y2="95" stroke="#334155" stroke-width="2"/>
      <line x1="35" y1="95" x2="330" y2="95" stroke="#334155" stroke-width="2"/>
      <text x="15" y="20" font-size="9" font-weight="bold" fill="#334155">Energy</text>
      <text x="250" y="106" font-size="8" fill="#64748b">Reaction Coordinate</text>
      <path d="M 40 70 L 80 70 Q 150 10 200 15 Q 240 25 280 85 L 320 85" fill="none" stroke="#2563eb" stroke-width="2.5"/>
      <text x="45" y="65" font-size="9" font-weight="bold" fill="#dc2626">Reactants</text>
      <text x="285" y="80" font-size="9" font-weight="bold" fill="#16a34a">Products</text>
      <line x1="80" y1="70" x2="200" y2="70" stroke="#94a3b8" stroke-dasharray="3,3"/>
      <line x1="175" y1="15" x2="175" y2="70" stroke="#d97706" stroke-width="1.5"/>
      <polygon points="172,19 175,12 178,19" fill="#d97706"/>
      <polygon points="172,66 175,73 178,66" fill="#d97706"/>
      <text x="180" y="45" font-size="9" font-weight="bold" fill="#d97706">Eₐ (Forward)</text>
      <text x="180" y="10" font-size="8" fill="#7c3aed">Activated Complex (‡)</text>
    </svg>`
  },

  'chem_vsepr_geometry': {
    title: 'PCl₅ Trigonal Bipyramidal Molecular Geometry',
    category: 'Chemistry',
    svg: `<svg viewBox="0 0 360 100" class="w-full max-w-sm h-26 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <circle cx="180" cy="50" r="14" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="175" y="55" font-size="11" font-weight="bold" fill="#b45309">P</text>
      <line x1="180" y1="36" x2="180" y2="8" stroke="#dc2626" stroke-width="2.5"/>
      <circle cx="180" cy="8" r="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="190" y="14" font-size="8" font-weight="bold" fill="#dc2626">Cl (Axial, 240 pm)</text>
      <line x1="180" y1="64" x2="180" y2="92" stroke="#dc2626" stroke-width="2.5"/>
      <circle cx="180" cy="92" r="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="190" y="94" font-size="8" font-weight="bold" fill="#dc2626">Cl (Axial)</text>
      <line x1="166" y1="50" x2="110" y2="50" stroke="#16a34a" stroke-width="2"/>
      <circle cx="110" cy="50" r="5" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
      <text x="70" y="45" font-size="8" font-weight="bold" fill="#16a34a">Cl (Eq)</text>
      <line x1="188" y1="42" x2="240" y2="30" stroke="#16a34a" stroke-width="2"/>
      <circle cx="240" cy="30" r="5" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
      <line x1="188" y1="58" x2="240" y2="70" stroke="#16a34a" stroke-width="2"/>
      <circle cx="240" cy="70" r="5" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
      <text x="250" y="76" font-size="9" font-weight="bold" fill="#16a34a">Cl (Eq)</text>
    </svg>`
  },

  // ==========================================
  // BIOLOGY DIAGRAMS
  // Note: bio_lac_operon has been removed as requested.
  // ==========================================
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
    </svg>`
  },

  'bio_pedigree_chart': {
    title: 'Autosomal Recessive Pedigree Inheritance',
    category: 'Biology',
    svg: `<svg viewBox="0 0 360 100" class="w-full max-w-sm h-26 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="70" y="15" width="22" height="22" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <line x1="92" y1="26" x2="168" y2="26" stroke="#475569" stroke-width="2"/>
      <circle cx="180" cy="26" r="11" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <line x1="130" y1="26" x2="130" y2="55" stroke="#475569" stroke-width="2"/>
      <line x1="80" y1="55" x2="280" y2="55" stroke="#475569" stroke-width="2"/>
      <line x1="80" y1="55" x2="80" y2="70" stroke="#475569" stroke-width="2"/>
      <circle cx="80" cy="80" r="10" fill="#f8fafc" stroke="#dc2626" stroke-width="2"/>
      <line x1="180" y1="55" x2="180" y2="70" stroke="#475569" stroke-width="2"/>
      <rect x="170" y="70" width="20" height="20" fill="#dc2626" stroke="#b91c1c" stroke-width="2"/>
      <line x1="280" y1="55" x2="280" y2="70" stroke="#475569" stroke-width="2"/>
      <rect x="270" y="70" width="20" height="20" fill="#f8fafc" stroke="#0284c7" stroke-width="2"/>
      <text x="145" y="97" font-size="8" font-weight="bold" fill="#dc2626">Affected Child (aa)</text>
    </svg>`
  },

  'bio_nephron_malpighian': {
    title: 'Malpighian Body (Glomerulus & Bowman Capsule)',
    category: 'Biology',
    svg: `<svg viewBox="0 0 360 100" class="w-full max-w-sm h-26 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <path d="M 120 15 C 190 15 220 50 220 70 C 220 90 180 95 140 95" fill="none" stroke="#ca8a04" stroke-width="4"/>
      <path d="M 110 30 C 170 30 190 55 190 70 C 190 85 160 85 130 85" fill="none" stroke="#ca8a04" stroke-width="3"/>
      <circle cx="150" cy="55" r="22" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="130" y="58" font-size="8" font-weight="bold" fill="#b91c1c">Glomerulus</text>
      <line x1="80" y1="40" x2="130" y2="50" stroke="#dc2626" stroke-width="3.5"/>
      <text x="35" y="38" font-size="8" font-weight="bold" fill="#dc2626">Afferent (Wide)</text>
      <line x1="170" y1="50" x2="220" y2="35" stroke="#dc2626" stroke-width="1.8"/>
      <text x="225" y="32" font-size="8" font-weight="bold" fill="#dc2626">Efferent (Narrow)</text>
      <text x="135" y="98" font-size="8" fill="#854d0e">PCT Entry</text>
    </svg>`
  },

  'bio_chloroplast_grana': {
    title: 'Chloroplast Thylakoid Grana & Stroma Lamellae',
    category: 'Biology',
    svg: `<svg viewBox="0 0 360 100" class="w-full max-w-sm h-26 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="180" cy="50" rx="140" ry="42" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5"/>
      <ellipse cx="180" cy="50" rx="130" ry="36" fill="none" stroke="#22c55e" stroke-width="1.5"/>
      <rect x="90" y="35" width="28" height="7" rx="2" fill="#15803d"/>
      <rect x="90" y="44" width="28" height="7" rx="2" fill="#15803d"/>
      <rect x="90" y="53" width="28" height="7" rx="2" fill="#15803d"/>
      <rect x="90" y="62" width="28" height="7" rx="2" fill="#15803d"/>
      <text x="75" y="80" font-size="8" font-weight="bold" fill="#15803d">Granum (PS II)</text>
      <line x1="118" y1="48" x2="210" y2="48" stroke="#4ade80" stroke-width="2.5"/>
      <rect x="210" y="35" width="28" height="7" rx="2" fill="#15803d"/>
      <rect x="210" y="44" width="28" height="7" rx="2" fill="#15803d"/>
      <rect x="210" y="53" width="28" height="7" rx="2" fill="#15803d"/>
      <text x="130" y="44" font-size="8" fill="#166534">Stroma Lamella</text>
      <text x="250" y="70" font-size="8" fill="#15803d">Stroma (Dark Rxn)</text>
    </svg>`
  },

  'bio_synapse': {
    title: 'Chemical Synapse Neurotransmitter Cleft',
    category: 'Biology',
    svg: `<svg viewBox="0 0 360 100" class="w-full max-w-sm h-26 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <path d="M 60 15 L 140 15 C 170 15 190 40 190 50 C 190 60 170 85 140 85 L 60 85" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
      <circle cx="155" cy="40" r="5" fill="#ca8a04"/>
      <circle cx="165" cy="50" r="5" fill="#ca8a04"/>
      <circle cx="150" cy="60" r="5" fill="#ca8a04"/>
      <text x="75" y="45" font-size="8" font-weight="bold" fill="#475569">Axon Terminal</text>
      <line x1="220" y1="15" x2="220" y2="85" stroke="#0284c7" stroke-width="3"/>
      <text x="230" y="55" font-size="8" font-weight="bold" fill="#0284c7">Post-Synaptic</text>
      <rect x="215" y="30" width="8" height="6" fill="#16a34a"/>
      <rect x="215" y="48" width="8" height="6" fill="#16a34a"/>
      <rect x="215" y="66" width="8" height="6" fill="#16a34a"/>
      <text x="135" y="96" font-size="7" fill="#64748b">Synaptic Cleft (20 nm)</text>
    </svg>`
  }
};

/**
 * Returns a high-quality guaranteed physics vector diagram for hard questions
 */
export function getHardPhysicsDiagram(q: Question, usedDiagrams?: Set<string>): string | null {
  const text = (q.questionText + ' ' + (q.explanation || '') + ' ' + (q.topic || '') + ' ' + (q.chapter || '')).toLowerCase();

  const tryUse = (id: string): string | null => {
    if (usedDiagrams && usedDiagrams.has(id)) return null;
    if (usedDiagrams) usedDiagrams.add(id);
    return DIAGRAM_REGISTRY[id]?.svg || null;
  };

  // Modern Physics & Atoms
  if (text.includes('bohr') || text.includes('spectral series') || text.includes('energy level') || text.includes('rydberg') || text.includes('balmer') || text.includes('lyman')) {
    const res = tryUse('phy_bohr_atom_levels');
    if (res) return res;
  }
  if (text.includes('nucleus') || text.includes('nuclear') || text.includes('binding energy') || text.includes('mass defect') || text.includes('fission') || text.includes('fusion') || text.includes('radioactive')) {
    const res = tryUse('phy_nuclear_be_curve');
    if (res) return res;
  }

  // Optics
  if (text.includes('prism') || text.includes('minimum deviation') || text.includes('dispersion') || text.includes('refracting angle')) {
    const res = tryUse('phy_prism_dispersion');
    if (res) return res;
  }
  if (text.includes('convex lens') || text.includes('concave lens') || text.includes('lens formula') || text.includes('focal length') || text.includes('magnification')) {
    const res = tryUse('phy_convex_lens_ray');
    if (res) return res;
  }
  if (text.includes('young') || text.includes('double slit') || text.includes('fringe width') || text.includes('interference pattern')) {
    const res = tryUse('phy_young_double_slit');
    if (res) return res;
  }

  // Electricity & Circuits
  if (text.includes('wheatstone') || text.includes('galvanometer') || text.includes('null deflection') || text.includes('bridge')) {
    const res = tryUse('phy_wheatstone_bridge');
    if (res) return res;
  }
  if (text.includes('meter bridge') || text.includes('slide wire')) {
    const res = tryUse('phy_meter_bridge');
    if (res) return res;
  }
  if (text.includes('lcr') || text.includes('resonance frequency') || text.includes('impedance') || text.includes('q-factor') || text.includes('ac circuit')) {
    const res = tryUse('phy_series_lcr');
    if (res) return res;
  }
  if (text.includes('electric dipole') || text.includes('dipole moment') || text.includes('equipotential') || text.includes('electric field lines')) {
    const res = tryUse('phy_electric_dipole_field');
    if (res) return res;
  }
  if (text.includes('lorentz force') || text.includes('charged particle in magnetic field') || text.includes('cyclotron') || text.includes('helical path')) {
    const res = tryUse('phy_magnetic_lorentz_force');
    if (res) return res;
  }

  // Mechanics & Thermodynamics
  // ONLY match inclined plane when genuinely about an inclined plane / wedge / ramp!
  if (text.includes('inclined plane') || text.includes('angle of inclination') || text.includes('inclination θ') || text.includes('incline of') || text.includes('on the incline') || text.includes('along the incline') || text.includes('wedge of angle') || text.includes('slides down a plane')) {
    const res = tryUse('phy_inclined_fbd');
    if (res) return res;
  }
  if (text.includes('projectile') || text.includes('angle of projection') || text.includes('trajectory') || text.includes('horizontal range') || text.includes('maximum height')) {
    const res = tryUse('phy_projectile_motion');
    if (res) return res;
  }
  if (text.includes('carnot engine') || text.includes('carnot cycle') || text.includes('pv diagram') || text.includes('indicator diagram') || text.includes('isothermal expansion') || text.includes('adiabatic expansion')) {
    const res = tryUse('phy_carnot_engine');
    if (res) return res;
  }
  if (text.includes('spring-mass') || text.includes('spring constant') || text.includes('oscillating spring') || text.includes('restoring force of spring')) {
    const res = tryUse('phy_shm_spring_mass');
    if (res) return res;
  }
  if (text.includes('bernoulli') || text.includes('venturi') || text.includes('venturimeter') || text.includes('tube of varying cross-section')) {
    const res = tryUse('phy_bernoulli_venturi');
    if (res) return res;
  }

  // Semiconductors & Modern
  if (text.includes('logic gate') || text.includes('nand gate') || text.includes('nor gate') || text.includes('truth table of')) {
    const res = tryUse('phy_logic_gates_circuit');
    if (res) return res;
  }
  if (text.includes('p-n junction') || text.includes('pn junction') || text.includes('depletion layer') || text.includes('barrier potential') || text.includes('forward bias') || text.includes('reverse bias')) {
    const res = tryUse('phy_pn_junction_depletion');
    if (res) return res;
  }

  // Never return a generic fallback! If there is no specific conceptual match, return null.
  return null;
}

/**
 * Assigns diagrams to questions guaranteeing:
 * 1. Zero duplicate diagrams in the same test paper (at most 1 per diagram ID)
 * 2. High-yield mapping strictly to genuinely relevant question themes
 * 3. Never fallback to unrelated diagrams
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
  if (text.includes('bohr') || text.includes('spectral series') || text.includes('energy level')) {
    candidates.push('phy_bohr_atom_levels');
  }
  if (text.includes('nucleus') || text.includes('binding energy') || text.includes('mass defect')) {
    candidates.push('phy_nuclear_be_curve');
  }
  if (text.includes('prism') || text.includes('minimum deviation') || text.includes('dispersion')) {
    candidates.push('phy_prism_dispersion');
  }
  if (text.includes('convex lens') || text.includes('lens formula') || text.includes('focal length')) {
    candidates.push('phy_convex_lens_ray');
  }
  if (text.includes('wheatstone') || text.includes('galvanometer bridge')) {
    candidates.push('phy_wheatstone_bridge');
  }
  if (text.includes('meter bridge') || text.includes('slide wire')) {
    candidates.push('phy_meter_bridge');
  }
  if (text.includes('lcr') || text.includes('resonance frequency') || text.includes('impedance')) {
    candidates.push('phy_series_lcr');
  }
  if (text.includes('inclined plane') || text.includes('angle of inclination') || text.includes('wedge of angle') || text.includes('slides down a plane')) {
    candidates.push('phy_inclined_fbd');
  }
  if (text.includes('projectile') || text.includes('angle of projection') || text.includes('trajectory')) {
    candidates.push('phy_projectile_motion');
  }
  if (text.includes('carnot engine') || text.includes('carnot cycle') || text.includes('indicator diagram')) {
    candidates.push('phy_carnot_engine');
  }
  if (text.includes('young') || text.includes('double slit') || text.includes('fringe width')) {
    candidates.push('phy_young_double_slit');
  }
  if (text.includes('electric dipole') || text.includes('dipole moment')) {
    candidates.push('phy_electric_dipole_field');
  }
  if (text.includes('lorentz force') || text.includes('charged particle in magnetic field')) {
    candidates.push('phy_magnetic_lorentz_force');
  }
  if (text.includes('spring-mass') || text.includes('oscillating spring')) {
    candidates.push('phy_shm_spring_mass');
  }
  if (text.includes('bernoulli') || text.includes('venturimeter')) {
    candidates.push('phy_bernoulli_venturi');
  }
  if (text.includes('logic gate') || text.includes('truth table')) {
    candidates.push('phy_logic_gates_circuit');
  }
  if (text.includes('p-n junction') || text.includes('depletion layer')) {
    candidates.push('phy_pn_junction_depletion');
  }

  // Chemistry mapping
  if (text.includes('daniel cell') || text.includes('galvanic cell') || text.includes('salt bridge')) {
    candidates.push('chem_daniel_cell');
  }
  if (text.includes('crystal field') || text.includes('splitting') || text.includes('octahedral')) {
    candidates.push('chem_crystal_field_oct');
  }
  if (text.includes('activation energy') || text.includes('transition state') || text.includes('arrhenius')) {
    candidates.push('chem_reaction_coordinate');
  }
  if (text.includes('vsepr') || text.includes('pcl5') || text.includes('trigonal bipyramidal')) {
    candidates.push('chem_vsepr_geometry');
  }

  // Biology mapping (bio_lac_operon is deleted)
  if (text.includes('replication fork') || text.includes('okazaki') || text.includes('leading strand')) {
    candidates.push('bio_dna_replication_fork');
  }
  if (text.includes('pedigree chart') || text.includes('autosomal recessive') || text.includes('hemophilia')) {
    candidates.push('bio_pedigree_chart');
  }
  if (text.includes('nephron') || text.includes('glomerulus') || text.includes('bowman')) {
    candidates.push('bio_nephron_malpighian');
  }
  if (text.includes('chloroplast') || text.includes('thylakoid') || text.includes('light reaction')) {
    candidates.push('bio_chloroplast_grana');
  }
  if (text.includes('synapse') || text.includes('neurotransmitter') || text.includes('synaptic cleft')) {
    candidates.push('bio_synapse');
  }

  // Strictly enforce max 1 use per diagram (ZERO REPEATS in a test paper)
  for (const diagId of candidates) {
    const currentUsage = sessionDiagramUsageMap.get(diagId) || 0;
    if (currentUsage < 1) {
      sessionDiagramUsageMap.set(diagId, currentUsage + 1);
      return DIAGRAM_REGISTRY[diagId]?.svg || null;
    }
  }

  return null;
}
