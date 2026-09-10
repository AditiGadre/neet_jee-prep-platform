import { Question } from "../types";

export const SELF_EVALUATION_TEST_28_QUESTIONS: Question[] = [
  {
    "id": "universal-set28-q01",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Propagation Modes: Sky vs Space Waves",
    "difficulty": "Medium",
    "questionText": "A ground receiver station is receiving a 5 MHz signal transmitted from a 300 m high ground antenna located 100 km away. (Radius of Earth = 6.4 × 10⁶ m, maximum ionospheric electron density N_max = 10¹² m⁻³). The signal arrives via: [SET-28]",
    "options": [
      "Space wave",
      "Sky wave propagation",
      "Satellite transponder",
      "All of these"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Line-of-sight space waves are geometrically limited by the curvature of Earth (d_max = √(2Rh_t)). Radiowaves with frequency below the critical frequency f_c are reflected back by the ionosphere as sky waves.\n⚡ Step-by-Step Derivation:\n1. Maximum line-of-sight space wave distance:\n   d_space = √(2 · R · h_t) = √(2 × 6.4 × 10⁶ m × 300 m) = √(3.84 × 10⁹) ≈ 61.97 km ≈ 62 km.\n2. Since the receiver is at 100 km, the direct space wave cannot reach it due to Earth's curvature.\n3. Critical frequency of the ionosphere:\n   f_c ≈ 9 · √(N_max) = 9 × √(10¹²) = 9 × 10⁶ Hz = 9 MHz.\n4. Since the signal frequency (5 MHz) is less than the critical frequency (9 MHz), the wave undergoes total internal reflection from the ionosphere.\n5. Therefore, the signal reaches the receiver via sky wave propagation.\n💡 Examiner Pro-Tip: If distance > √(2Rh), space wave fails; if signal frequency < 9√N_max, sky wave succeeds.",
    "tags": [
      "Communication Systems",
      "Sky Wave",
      "Space Wave",
      "SET-28",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set28-q02",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "AM Detector Circuit Design",
    "difficulty": "Hard",
    "questionText": "In the given detector circuit, the suitable value of carrier frequency is: [SET-28]",
    "diagramSvg": "<svg viewBox=\"0 0 380 180\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"380\" height=\"180\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"190\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">AM Diode Envelope Detector (SET-28 Q2)</text>\n\n  <!-- AM Input transformer -->\n  <g transform=\"translate(30, 40)\">\n    <path d=\"M 30,20 Q 20,35 30,50 Q 20,65 30,80 Q 20,95 30,110\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n    <line x1=\"38\" y1=\"20\" x2=\"38\" y2=\"110\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <line x1=\"42\" y1=\"20\" x2=\"42\" y2=\"110\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <path d=\"M 50,20 Q 60,35 50,50 Q 60,65 50,80 Q 60,95 50,110\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n    <text x=\"35\" y=\"130\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#2563EB\">AM Input</text>\n  </g>\n\n  <!-- Diode pointing right -->\n  <line x1=\"80\" y1=\"60\" x2=\"130\" y2=\"60\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <polygon points=\"130,53 150,60 130,67\" fill=\"#16A34A\" stroke=\"#15803D\"/>\n  <line x1=\"150\" y1=\"50\" x2=\"150\" y2=\"70\" stroke=\"#15803D\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"60\" x2=\"200\" y2=\"60\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <!-- Parallel RC: Resistor R = 1000 Ω and C = 1 pF -->\n  <line x1=\"200\" y1=\"60\" x2=\"200\" y2=\"75\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <rect x=\"188\" y=\"75\" width=\"24\" height=\"35\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n  <text x=\"175\" y=\"95\" text-anchor=\"end\" font-size=\"8\" font-weight=\"bold\" fill=\"#854D0E\">R = 1000 Ω</text>\n  <line x1=\"200\" y1=\"110\" x2=\"200\" y2=\"140\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <line x1=\"200\" y1=\"60\" x2=\"260\" y2=\"60\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"260\" y1=\"60\" x2=\"260\" y2=\"85\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"250\" y1=\"85\" x2=\"270\" y2=\"85\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>\n  <line x1=\"250\" y1=\"91\" x2=\"270\" y2=\"91\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>\n  <text x=\"280\" y=\"92\" font-size=\"8\" font-weight=\"bold\" fill=\"#2563EB\">C = 1 pF</text>\n  <line x1=\"260\" y1=\"91\" x2=\"260\" y2=\"140\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <!-- Ground / return line -->\n  <line x1=\"80\" y1=\"140\" x2=\"310\" y2=\"140\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <circle cx=\"320\" cy=\"60\" r=\"3\" fill=\"#16A34A\"/>\n  <circle cx=\"320\" cy=\"140\" r=\"3\" fill=\"#16A34A\"/>\n  <text x=\"330\" y=\"105\" font-size=\"10\" font-weight=\"bold\" fill=\"#16A34A\">Output</text>\n  <text x=\"190\" y=\"165\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\">RC = 1000 Ω × 10⁻¹² F = 10⁻⁹ s ⟹ f_carrier ≪ 10⁹ Hz</text>\n</svg>",
    "options": [
      "≪ 10⁹ Hz",
      "≪ 10⁵ Hz",
      "≫ 10⁹ Hz",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: In an envelope detector, the time constant RC is chosen to filter out the high-frequency carrier while tracking the modulating audio envelope.\n⚡ Step-by-Step Derivation:\n1. Given circuit parameters: R = 1000 Ω and C = 1 × 10⁻¹² F (1 pF).\n2. Time constant of the low-pass filter: RC = 1000 × 10⁻¹² s = 10⁻⁹ s.\n3. The cutoff characteristic frequency is ν = 1 / RC = 1 / 10⁻⁹ s = 10⁹ Hz.\n4. To avoid diagonal clipping and ensure proper envelope filtering without distortion, the carrier frequency must satisfy f_carrier ≪ 10⁹ Hz (e.g. typical AM carrier ~ 100 kHz to a few MHz).\n5. Therefore, Option (a) is correct.\n💡 Examiner Pro-Tip: Time constant RC = 10⁻⁹ s corresponds directly to the 10⁹ Hz frequency boundary.",
    "tags": [
      "Communication Systems",
      "AM Detector",
      "Time Constant",
      "SET-28",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set28-q03",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Characteristic Impedance of Coaxial Cable",
    "difficulty": "Easy",
    "questionText": "The characteristic impedance of a coaxial cable, when its inductance is 0.40 μH and capacitance is 1 × 10⁻¹¹ F, is: [SET-28]",
    "options": [
      "2 × 10² Ω",
      "100 Ω",
      "3 × 10³ Ω",
      "3 × 10⁻² Ω"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: The characteristic impedance Z₀ of a lossless transmission line is Z₀ = √(L / C).\n⚡ Step-by-Step Derivation:\n1. Given inductance L = 0.40 μH = 0.40 × 10⁻⁶ H.\n2. Given capacitance C = 1 × 10⁻¹¹ F.\n3. Ratio: L / C = (0.40 × 10⁻⁶) / (10⁻¹¹) = 0.40 × 10⁵ = 40,000 Ω².\n4. Characteristic impedance:\n   Z₀ = √(40,000) = 200 Ω = 2 × 10² Ω.\n💡 Examiner Pro-Tip: Z₀ = √(L/C). Standard coaxial cables typically have characteristic impedances in the range 50 Ω to 200 Ω.",
    "tags": [
      "Communication Systems",
      "Transmission Lines",
      "Impedance",
      "SET-28",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set28-q04",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Frequency Modulation Index",
    "difficulty": "Easy",
    "questionText": "A frequency modulated wave is represented by e = 10 sin(10⁸ t + 6 sin 1250 t). The modulation index is: [SET-28]",
    "options": [
      "10",
      "1250",
      "10⁸",
      "6"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: The general equation of a frequency modulated (FM) wave is e = E_c · sin(ω_c t + m_f · sin ω_m t), where m_f is the modulation index.\n⚡ Step-by-Step Derivation:\n1. Comparing e = 10 sin(10⁸ t + 6 sin 1250 t) with standard form:\n   - Carrier amplitude E_c = 10 V\n   - Carrier angular frequency ω_c = 10⁸ rad/s\n   - Modulation index m_f = 6\n   - Modulating angular frequency ω_m = 1250 rad/s\n2. Therefore, the modulation index is directly 6.\n💡 Examiner Pro-Tip: In e = A sin(ω_c t + m_f sin ω_m t), the coefficient of the interior sine function is always the modulation index m_f.",
    "tags": [
      "Communication Systems",
      "Frequency Modulation",
      "SET-28",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set28-q05",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Optical Fibre Channel Capacity",
    "difficulty": "Medium",
    "questionText": "An optical fibre communication system works on a wavelength of 1.3 μm. How many channels can it feed if each channel requires a bandwidth of 20 kHz? [SET-28]",
    "options": [
      "2.3 × 10¹⁰",
      "1.15 × 10¹⁰",
      "1 × 10⁵",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Optical carriers have extremely high carrier frequencies (f = c/λ ~ 10¹⁴ Hz), enabling tremendous information carrying bandwidth.\n⚡ Step-by-Step Derivation:\n1. Carrier frequency: f = c / λ = (3 × 10⁸ m/s) / (1.3 × 10⁻⁶ m) ≈ 2.307 × 10¹⁴ Hz.\n2. Bandwidth allocated per subscriber channel = 20 kHz = 20 × 10³ Hz.\n3. Maximum number of channels:\n   N = Total optical frequency / Channel bandwidth\n   N = (2.3 × 10¹⁴) / (20 × 10³) = 1.15 × 10¹⁰ channels.\n💡 Examiner Pro-Tip: Optical fibers carry billions of channels simultaneously due to carrier frequencies in the hundreds of Terahertz.",
    "tags": [
      "Communication Systems",
      "Optical Fibres",
      "Bandwidth",
      "SET-28",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set28-q06",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "FM Carrier Swing & Deviation Ratio",
    "difficulty": "Medium",
    "questionText": "In an FM system, a 7 kHz signal modulates a 108 MHz carrier so that the frequency deviation is 50 kHz. The modulation ratio (frequency deviation / modulating frequency) is: [SET-28]",
    "options": [
      "7.143",
      "8",
      "0.71",
      "350"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: The modulation index in frequency modulation is the ratio of peak frequency deviation to modulating signal frequency: m_f = δ / f_m.\n⚡ Step-by-Step Derivation:\n1. Given peak frequency deviation δ = 50 kHz.\n2. Modulating audio frequency f_m = 7 kHz.\n3. Modulation index / ratio:\n   m_f = δ / f_m = 50 kHz / 7 kHz ≈ 7.143.\n4. (Note: Total carrier swing is 2δ = 100 kHz; the ratio δ/f_m is 7.143, matching official option a).\n💡 Examiner Pro-Tip: Ratio = 50 / 7 = 7.143.",
    "tags": [
      "Communication Systems",
      "Frequency Modulation",
      "Carrier Swing",
      "SET-28",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set28-q07",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Tuning Circuit Inductance for SW vs MW",
    "difficulty": "Medium",
    "questionText": "In a radio receiver, the short wave (SW) and medium wave (MW) bands are tuned using the same variable capacitor but coils of different inductances L_s and L_m respectively. Then: [SET-28]",
    "options": [
      "L_s > L_m",
      "L_s < L_m",
      "L_s = L_m",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: The resonant tuning frequency of an LC tank circuit is f = 1 / (2π√(LC)).\n⚡ Step-by-Step Derivation:\n1. Short wave (SW) corresponds to shorter wavelength than medium wave (MW): λ_s < λ_m.\n2. Because frequency is inversely proportional to wavelength (f = c/λ), short waves have higher frequency: f_s > f_m.\n3. Since the tuning capacitor C is identical for both bands:\n   f ∝ 1 / √L ⟹ L ∝ 1 / f².\n4. Higher frequency requires lower inductance: f_s > f_m ⟹ L_s < L_m.\n💡 Examiner Pro-Tip: Higher frequency (shorter wavelength) always needs smaller inductance L for the same capacitor.",
    "tags": [
      "Communication Systems",
      "LC Resonance",
      "Tuning",
      "SET-28",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set28-q08",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Critical Frequency of Ionospheric Layers",
    "difficulty": "Medium",
    "questionText": "The electron density of the E, F₁, and F₂ layers of the ionosphere is 2 × 10¹¹, 5 × 10¹¹, and 8 × 10¹¹ m⁻³ respectively. The ratio of critical frequencies for reflection of radiowaves from these layers is: [SET-28]",
    "options": [
      "2 : 4 : 3",
      "4 : 3 : 2",
      "2 : 3 : 4",
      "3 : 2 : 4"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: The critical frequency of an ionospheric layer is proportional to the square root of its maximum electron density: f_c = 9 · √(N_max) ∝ √N.\n⚡ Step-by-Step Derivation:\n1. Given electron densities: N_E = 2 × 10¹¹, N_F1 = 5 × 10¹¹, N_F2 = 8 × 10¹¹ m⁻³.\n2. Ratio of critical frequencies:\n   f_E : f_F1 : f_F2 = √(2) : √(5) : √(8).\n3. Approximating square roots:\n   √2 ≈ 1.414, √5 ≈ 2.236, √8 ≈ 2.828.\n4. Normalizing to simple integer ratios:\n   1.414 : 2.236 : 2.828 ≈ 2 : 3 : 4.\n5. Therefore, Option (c) is correct.\n💡 Examiner Pro-Tip: f_c ∝ √N. Notice √8 = 2√2, so the ratio of first to third layer is 1 : 2 (or 2 : 4).",
    "tags": [
      "Communication Systems",
      "Critical Frequency",
      "Ionosphere",
      "SET-28",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set28-q09",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Simultaneous Multi-Tone Modulation Index",
    "difficulty": "Easy",
    "questionText": "A carrier is simultaneously modulated by two sine waves with modulation indices of 0.4 and 0.3. The resultant total modulation index is: [SET-28]",
    "options": [
      "1.0",
      "0.7",
      "0.5",
      "0.35"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: When a carrier is simultaneously modulated by multiple independent sinusoidal audio signals, the total effective modulation index is m_t = √(m₁² + m₂² + ...).\n⚡ Step-by-Step Derivation:\n1. Given individual modulation indices m₁ = 0.4 and m₂ = 0.3.\n2. Total modulation index:\n   m_t = √(m₁² + m₂²) = √((0.4)² + (0.3)²).\n3. m_t = √(0.16 + 0.09) = √(0.25) = 0.5.\n💡 Examiner Pro-Tip: Recognize the classic 3-4-5 Pythagorean right triangle: √(0.3² + 0.4²) = 0.5.",
    "tags": [
      "Communication Systems",
      "Amplitude Modulation",
      "Modulation Index",
      "SET-28",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set28-q10",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Optical Fibre Decibel Attenuation",
    "difficulty": "Medium",
    "questionText": "Mean optical power launched into an 8 km fibre is 120 μW and mean output power is 4 μW. The overall attenuation is: (Given log₁₀ 30 = 1.4771) [SET-28]",
    "options": [
      "14.77 dB",
      "16.77 dB",
      "3.01 dB",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Attenuation in decibels is defined as α(dB) = 10 · log₁₀(P_in / P_out).\n⚡ Step-by-Step Derivation:\n1. Input power P_in = 120 μW.\n2. Output power P_out = 4 μW.\n3. Power ratio: P_in / P_out = 120 / 4 = 30.\n4. Total attenuation in dB:\n   α = 10 · log₁₀(30) = 10 × 1.4771 = 14.771 dB ≈ 14.77 dB.\n💡 Examiner Pro-Tip: Fast formula: 10 log(P_in / P_out) = 10 log(30) = 14.77 dB.",
    "tags": [
      "Communication Systems",
      "Optical Fibres",
      "Attenuation",
      "SET-28",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set28-q11",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "AM Modulated Antenna Current",
    "difficulty": "Medium",
    "questionText": "The antenna current of an AM broadcast transmitter modulated by 50% is 11 A. The unmodulated carrier current is: [SET-28]",
    "options": [
      "10.35 A",
      "9.25 A",
      "10 A",
      "5.5 A"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Total modulated current I_t is related to unmodulated carrier current I_c by I_t = I_c · √(1 + m² / 2).\n⚡ Step-by-Step Derivation:\n1. Given total antenna current I_t = 11 A and modulation depth m = 50% = 0.5.\n2. Modulation term: √(1 + m² / 2) = √(1 + (0.5)² / 2) = √(1 + 0.125) = √(1.125) ≈ 1.06066.\n3. Unmodulated carrier current:\n   I_c = I_t / √(1 + m² / 2) = 11 / 1.06066 ≈ 10.37 A ≈ 10.35 A.\n💡 Examiner Pro-Tip: At 50% modulation, total current increases by about 6% (factor of 1.06). 11 / 1.06 ≈ 10.35 A.",
    "tags": [
      "Communication Systems",
      "AM Transmitter",
      "Antenna Current",
      "SET-28",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set28-q12",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Ground Wave Attenuation & Tilting",
    "difficulty": "Easy",
    "questionText": "Because of wave tilting, which waves finally attenuate and disappear? [SET-28]",
    "options": [
      "Microwaves",
      "Surface waves",
      "Sky waves",
      "Space waves"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: In ground (surface) wave propagation, the wave follows the curvature of the Earth.\n⚡ Step-by-Step Derivation:\n1. As the wave travels along the conducting surface of the Earth, its lower wavefront drags due to finite ground resistivity.\n2. This causes the wavefront to progressively tilt forward.\n3. The tilting continuously induces electric currents into the ground, leading to severe ohmic dissipation and energy attenuation.\n4. Eventually, the wave tilts completely over and dies out, limiting surface wave range to low frequencies (< 1500 kHz).\n💡 Examiner Pro-Tip: Wavefront tilting and earth current dissipation are unique causes of attenuation in ground (surface) waves.",
    "tags": [
      "Communication Systems",
      "Ground Wave",
      "Surface Waves",
      "SET-28",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set28-q13",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "AM Power & Carrier Power Distribution",
    "difficulty": "Medium",
    "questionText": "An AM transmitter transmits a total power of 10 kW when modulated to 50%. The power of the carrier wave is: [SET-28]",
    "options": [
      "5 kW",
      "8.89 kW",
      "14 kW",
      "5.7 kW"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Total transmitted power in an AM wave is P_t = P_c · (1 + m² / 2).\n⚡ Step-by-Step Derivation:\n1. Total power P_t = 10 kW = 10,000 W.\n2. Modulation depth m = 50% = 0.5.\n3. P_t = P_c · [1 + (0.5)² / 2] = P_c · [1 + 0.125] = 1.125 · P_c.\n4. Carrier power:\n   P_c = P_t / 1.125 = 10 kW / 1.125 = 8.889 kW ≈ 8.89 kW.\n💡 Examiner Pro-Tip: In standard AM, the unmodulated carrier takes up the lion's share of transmitted power (~ 89% at m = 0.5), which is why suppressed-carrier systems (SSBSC) are preferred for efficiency.",
    "tags": [
      "Communication Systems",
      "AM Power",
      "Carrier Power",
      "SET-28",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set28-q14",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Microwave Link Telephone Channel Capacity",
    "difficulty": "Medium",
    "questionText": "A telephone link operating at a central frequency of 10 GHz is established. If 1% of this frequency is available as transmission bandwidth, how many telephone channels can be simultaneously provided if each channel covers a bandwidth of 5 kHz? [SET-28]",
    "options": [
      "2 × 10⁴",
      "2 × 10⁶",
      "5 × 10⁴",
      "5 × 10⁶"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Total available bandwidth is a percentage of carrier frequency, and number of channels = Total Bandwidth / Bandwidth per channel.\n⚡ Step-by-Step Derivation:\n1. Central carrier frequency f = 10 GHz = 10 × 10⁹ Hz = 10¹⁰ Hz.\n2. Available transmission bandwidth = 1% of 10 GHz:\n   BW_total = (1 / 100) × 10¹⁰ Hz = 10⁸ Hz = 100 MHz.\n3. Bandwidth required per telephone channel = 5 kHz = 5 × 10³ Hz.\n4. Number of simultaneous channels:\n   N = BW_total / BW_channel = 10⁸ / (5 × 10³) = 2 × 10⁴ channels (20,000 channels).\n💡 Examiner Pro-Tip: 10⁸ / (5 × 10³) = 100,000 / 5 = 20,000 = 2 × 10⁴.",
    "tags": [
      "Communication Systems",
      "Bandwidth",
      "Telephone Channels",
      "SET-28",
      "NEET Physics"
    ]
  }
];
