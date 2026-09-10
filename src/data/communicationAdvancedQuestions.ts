import { Question } from "../types";

export const COMMUNICATION_AIIMS_AR_QUESTIONS: Question[] = [
  {
    "id": "universal-comm-ar-q001",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: Diode lasers are used as optical sources in optical communication.\nReason: Diode lasers consume less energy. [AIIMS 2005]",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Diode lasers emit highly coherent, monochromatic light with narrow beam divergence and operate efficiently at low electrical power inputs.\n⚡ Step-by-Step Derivation:\n1. Assertion is true: Semiconductor diode lasers are universally chosen in fiber optic networks because their narrow spectral linewidth minimizes chromatic dispersion.\n2. Reason is true: Diode lasers require very low threshold drive current and consume minimal power.\n3. However, their primary adoption is due to narrow spectral width and compatibility with optical fiber dimensions, not simply lower energy consumption. Thus, Option (b) is correct.",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ar-q002",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: Television signals are received through sky-wave propagation.\nReason: The ionosphere reflects electromagnetic waves of frequencies greater than a certain critical frequency. [AIIMS 2005]",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: TV broadcast signals operate in the VHF/UHF bands (54 - 890 MHz), which penetrate straight through the ionosphere.\n⚡ Step-by-Step Derivation:\n1. The ionosphere only reflects waves below its critical frequency (f_c ~ 5 - 30 MHz). Above f_c, electromagnetic waves penetrate into outer space.\n2. TV signals have frequencies far exceeding critical frequency, so they cannot be propagated via sky waves (Assertion is false).\n3. The ionosphere reflects waves LESS than critical frequency, not greater than critical frequency (Reason is false).\n4. Both Assertion and Reason are false (Option d).",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ar-q003",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: In high latitude one sees colourful curtains of light hanging down from high altitudes.\nReason: The high energy charged particles from the sun are deflected to polar regions by the magnetic field of the earth. [AIIMS 2003]",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: The Aurora Borealis (Northern Lights) and Aurora Australis occur due to charged solar wind particles interacting with Earth's geomagnetic field.\n⚡ Step-by-Step Derivation:\n1. Energetic solar protons and electrons are funneled along geomagnetic field lines toward the North and South magnetic poles.\n2. Collisions between these incoming charged particles and atmospheric oxygen and nitrogen atoms excite them, emitting brilliant characteristic fluorescence (green, red, violet curtains of light).\n3. Both Assertion and Reason are true, and Reason is the correct explanation.",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ar-q004",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: Short wave bands are used for transmission of radio waves to a large distance.\nReason: Short waves are reflected by ionosphere. [AIIMS 1994]",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Short waves (3 MHz - 30 MHz) undergo total internal reflection in the ionosphere, enabling global sky wave propagation via multi-hop ground-ionosphere reflections.\n⚡ Step-by-Step Derivation:\n1. High frequency short waves are refracted back to Earth by ionized layers (E and F layers).\n2. This enables long-distance international broadcasting across oceans and continents without repeater towers.\n3. Both Assertion and Reason are true, and Reason is the correct explanation.",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ar-q005",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: The electrical conductivity of earth's atmosphere decreases with altitude.\nReason: The high energy particles (i.e. γ-rays and cosmic rays) coming from outer space and entering our earth's atmosphere cause ionisation of the atoms of the gases present there and the pressure of gases decreases with increase in altitude.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "📘 NCERT Concept: Atmospheric electrical conductivity increases with altitude due to increasing cosmic ray flux and ultraviolet ionization.\n⚡ Step-by-Step Derivation:\n1. At higher altitudes, gas density decreases and cosmic ray ionization increases, producing abundant free ions and electrons with high mean free paths.\n2. Consequently, atmospheric conductivity increases with height, making Assertion false.\n3. The Reason correctly describes ionizing cosmic rays and decreasing atmospheric pressure, so Reason is true.",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ar-q006",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: The electromagnetic waves of shorter wavelength can travel longer distances on earth's surface than those of longer wavelengths.\nReason: Shorter the wavelength, the larger is the velocity of wave propagation.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: In a vacuum, all electromagnetic waves travel at the universal speed of light c = 3 × 10⁸ m/s regardless of wavelength.\n⚡ Step-by-Step Derivation:\n1. Shorter wavelength waves (higher frequency) suffer less diffraction around small atmospheric obstacles and can carry more directional energy.\n2. The speed of EM waves in air is independent of wavelength (Reason is completely false).\n3. Hence, Assertion is true but Reason is false.",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ar-q007",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: The surface wave propagation is used for medium wave band and for television broadcasting.\nReason: The surface waves travel directly from transmitting antenna to receiver antenna through atmosphere.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Surface waves travel along the contour of Earth, guided by the ground surface.\n⚡ Step-by-Step Derivation:\n1. Medium waves (550 kHz - 1600 kHz) propagate along the surface of Earth.\n2. Both Assertion and Reason are true, and Reason is the correct explanation.",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ar-q008",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: The television broadcasting becomes weaker with increasing distance.\nReason: The power transmitted from TV transmitter varies inversely as the distance of the receiver.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: By the inverse-square law of radiation, power flux density decreases inversely as the square of the distance (I ∝ 1 / d²).\n⚡ Step-by-Step Derivation:\n1. TV signals attenuate with distance due to space wave spreading, earth curvature obstruction, and absorption, making Assertion true.\n2. The received power decreases as 1 / d² (and transmitter power itself is a fixed value at the source, not a function of receiver distance), making Reason false.\n3. Thus, Assertion is true but Reason is false.",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ar-q009",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: Microwave propagation is better than sky wave propagation.\nReason: Microwaves have frequencies 100 to 300 GHz, which have very good directional properties.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Microwaves possess very short wavelengths (~ mm to cm), enabling them to be focused into sharp, highly directional beam rays like searchlights.\n⚡ Step-by-Step Derivation:\n1. High directionality allows point-to-point microwave and satellite communication with minimal diffraction and high security.\n2. Both Assertion and Reason are true, and Reason correctly explains why microwave propagation is superior.",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ar-q010",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: Satellite is an ideal platform for remote sensing.\nReason: Satellite in polar orbit can provide global coverage or continuous coverage of the fixed area in geostationary configuration.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Remote sensing satellites in sun-synchronous polar orbits scan every coordinate on Earth with consistent solar illumination.\n⚡ Step-by-Step Derivation:\n1. Satellites operate high above atmospheric weather disturbances, providing recurring, repeatable multi-spectral imagery.\n2. Polar sun-synchronous satellites pass over every latitude daily at the exact same local solar time.\n3. Both Assertion and Reason are true, and Reason is the correct explanation.",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ar-q011",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: Fax is a modulating and demodulating device.\nReason: It is necessary for exact reproduction of a document.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "📘 NCERT Concept: A FAX (facsimile) machine consists of an optical document scanner, printer, and an internal modem.\n⚡ Step-by-Step Derivation:\n1. Modulation and demodulation are performed by the modem component, whereas the FAX as a whole is an image scanner and transcriber.\n2. Exact reproduction of the document is the purpose of facsimile transmission (Reason is true).\n3. Thus, Assertion is false and Reason is true.",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ar-q012",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: A dish antenna is highly directional.\nReason: This is because a dipole antenna is omni directional.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Parabolic dish reflectors focus spherical radiation into a tight, parallel collimated beam along the principal axis.\n⚡ Step-by-Step Derivation:\n1. A parabolic reflector reflects electromagnetic waves into a sharp parallel pencil beam, giving high forward gain and directionality.\n2. A half-wave dipole radiates broadly in the perpendicular plane (donut radiation pattern).\n3. Both statements are factually true, but dipole radiation characteristics do not explain parabolic dish geometry. Option (b) is correct.",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  }
];

export const COMMUNICATION_CRITICAL_THINKING_QUESTIONS: Question[] = [
  {
    "id": "universal-comm-ct-q01",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Refraction of Sky Waves in D-Region",
    "difficulty": "Medium",
    "questionText": "A sky wave with frequency 55 MHz is incident on the D-region of Earth's atmosphere at an angle of incidence of 45°. If the electron density in the D-region is 400 electrons/cm³, the angle of refraction is: [Haryana PMT 2003]",
    "options": [
      "60°",
      "45°",
      "30°",
      "15°"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: The effective refractive index of an ionospheric layer is n_eff = √(1 - 80.5 N / f²).\n⚡ Step-by-Step Derivation:\n1. Electron density N = 400 electrons/cm³ = 400 × 10⁶ electrons/m³ = 4 × 10⁸ m⁻³.\n2. Signal frequency f = 55 MHz = 55 × 10⁶ Hz.\n3. Plasma term: (80.5 × 4 × 10⁸) / (55 × 10⁶)² ≈ 3.22 × 10¹⁰ / 3.025 × 10¹⁵ ≈ 1.06 × 10⁻⁵ ≈ 0.\n4. Therefore, n_eff = √(1 - 0) = 1.\n5. By Snell's law: sin r = sin i / n_eff = sin 45° / 1 = sin 45° ⟹ r = 45°.\n💡 Examiner Pro-Tip: Because 55 MHz is vastly higher than the D-region plasma frequency, the refractive index is practically 1 and no deviation occurs (r = i = 45°).",
    "tags": [
      "Communication Systems",
      "Ionosphere",
      "Refraction",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q02",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "AM Diode Detector RC Criterion",
    "difficulty": "Medium",
    "questionText": "In a diode AM detector, the output filter circuit consists of R = 1 kΩ and C = 10 pF. A carrier signal of frequency 100 kHz is to be detected. Is this circuit suitable? [SET-28 CT2]",
    "options": [
      "Yes",
      "No",
      "Information is not sufficient",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: For faithful envelope detection without carrier feedthrough, the condition 1/f_c ≪ RC must be satisfied.\n⚡ Step-by-Step Derivation:\n1. Carrier period: 1 / f_c = 1 / (100 × 10³ Hz) = 10⁻⁵ s.\n2. Filter time constant: RC = 1000 Ω × 10 × 10⁻¹² F = 10⁻⁸ s.\n3. Here, 1 / f_c (10⁻⁵ s) is NOT much less than RC (10⁻⁸ s); in fact, 1 / f_c is 1000 times larger than RC!\n4. The capacitor would discharge too fast, resulting in poor rectification and high carrier ripple.\n5. Therefore, the circuit is NOT suitable (No).\n💡 Examiner Pro-Tip: For proper AM detection, 1/f_c ≪ RC ≪ 1/f_m.",
    "tags": [
      "Communication Systems",
      "AM Detector",
      "Filter",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q03",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Optical Communication Channel Multiplexing",
    "difficulty": "Hard",
    "questionText": "Consider an optical communication system operating at λ ≈ 800 nm. Suppose only 1% of the optical source frequency is available as channel bandwidth. How many telephone channels can be accommodated if each channel requires 8 kHz? [SET-28 CT3]",
    "options": [
      "4.8 × 10⁸",
      "48",
      "6.2 × 10⁸",
      "4.8 × 10⁵"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Channel capacity N = Available Total Bandwidth / Bandwidth per channel.\n⚡ Step-by-Step Derivation:\n1. Optical carrier frequency: f = c / λ = (3 × 10⁸ m/s) / (800 × 10⁻⁹ m) = 3.75 × 10¹⁴ Hz ≈ 3.8 × 10¹⁴ Hz.\n2. Available bandwidth (1%): BW = 0.01 × 3.8 × 10¹⁴ Hz = 3.8 × 10¹² Hz.\n3. Audio bandwidth per channel = 8 kHz = 8 × 10³ Hz.\n4. Number of simultaneous channels:\n   N = (3.8 × 10¹²) / (8 × 10³) = 4.75 × 10⁸ ≈ 4.8 × 10⁸ channels.\n💡 Examiner Pro-Tip: Nearly half a billion channels can be multiplexed over a single optical fiber beam.",
    "tags": [
      "Communication Systems",
      "Optical Fibres",
      "Multiplexing",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q04",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Photodetector Cutoff Wavelength",
    "difficulty": "Easy",
    "questionText": "A photodetector is fabricated from semiconductor In_0.53Ga_0.47As with energy bandgap E_g = 0.73 eV. The maximum wavelength of light it can detect is: [SET-28 CT4]",
    "options": [
      "1000 nm",
      "1703 nm",
      "500 nm",
      "173 nm"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: The cutoff threshold wavelength is λ_max = hc / E_g.\n⚡ Step-by-Step Derivation:\n1. E_g = 0.73 eV = 0.73 × 1.6 × 10⁻¹⁹ J = 1.168 × 10⁻¹⁹ J.\n2. Using hc = 6.63 × 10⁻³⁴ × 3 × 10⁸ = 1.989 × 10⁻²⁵ J·m:\n   λ_max = (1.989 × 10⁻²⁵) / (1.168 × 10⁻¹⁹) = 1.703 × 10⁻⁶ m = 1703 nm.\n3. Shortcut: λ(nm) ≈ 1240 / 0.73 ≈ 1698.6 nm ≈ 1703 nm.\n💡 Examiner Pro-Tip: Fast rule: λ(nm) = 1240 / E_g(eV) = 1240 / 0.73 ≈ 1700 nm.",
    "tags": [
      "Communication Systems",
      "Photodetector",
      "Bandgap",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q05",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Transmitter Radiated Power at 40% Modulation",
    "difficulty": "Medium",
    "questionText": "A radio transmitter supplies 9 kW of unmodulated carrier power to the antenna. The total power radiated when modulated to 40% is: [SET-28 CT5]",
    "options": [
      "5 kW",
      "9.72 kW",
      "10 kW",
      "12 kW"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Total power in an AM wave is P_t = P_c · (1 + m² / 2).\n⚡ Step-by-Step Derivation:\n1. Given carrier power P_c = 9 kW and modulation index m = 40% = 0.4.\n2. m² / 2 = (0.4)² / 2 = 0.16 / 2 = 0.08.\n3. Total radiated power:\n   P_t = 9 kW × (1 + 0.08) = 9 × 1.08 = 9.72 kW.\n💡 Examiner Pro-Tip: 9 × 1.08 = 9.72 kW.",
    "tags": [
      "Communication Systems",
      "AM Power",
      "Radiated Power",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q06",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Antenna Current & Modulation Depth",
    "difficulty": "Medium",
    "questionText": "The antenna current of an AM transmitter is 8 A when only carrier is transmitted, but increases to 8.96 A when sinusoidally modulated. The percentage modulation is: [SET-28 CT6]",
    "options": [
      "50%",
      "60%",
      "65%",
      "71%"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: I_t / I_c = √(1 + m² / 2).\n⚡ Step-by-Step Derivation:\n1. (I_t / I_c)² = 1 + m² / 2.\n2. Given I_t = 8.96 A and I_c = 8 A:\n   I_t / I_c = 8.96 / 8 = 1.12.\n3. (1.12)² = 1.2544 = 1 + m² / 2.\n4. m² / 2 = 0.2544 ⟹ m² = 0.5088 ⟹ m = √(0.5088) ≈ 0.713 = 71%.\n💡 Examiner Pro-Tip: 8.96 / 8 = 1.12. (1.12)² ≈ 1.254. m = √(2 × 0.254) ≈ 71%.",
    "tags": [
      "Communication Systems",
      "Antenna Current",
      "Modulation Depth",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q07",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Carrier Power at 100% Modulation",
    "difficulty": "Medium",
    "questionText": "The total power content of an AM wave is 1500 W. For 100% modulation, the power transmitted by the carrier is: [SET-28 CT7]",
    "options": [
      "500 W",
      "700 W",
      "750 W",
      "1000 W"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: At 100% modulation (m = 1), total power is P_t = P_c · (1 + 1/2) = 1.5 P_c.\n⚡ Step-by-Step Derivation:\n1. Given P_t = 1500 W.\n2. P_c = P_t / 1.5 = 1500 W / 1.5 = 1000 W.\n3. The remaining 500 W is equally divided between upper and lower sidebands (250 W each).\n💡 Examiner Pro-Tip: For 100% modulation, carrier power is always 2/3 of total power: (2/3) × 1500 = 1000 W.",
    "tags": [
      "Communication Systems",
      "AM Power",
      "Carrier Power",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q08",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Sideband Power Distribution",
    "difficulty": "Medium",
    "questionText": "The total power content of an AM wave is 900 W. For 100% modulation, the power transmitted by each individual sideband is: [SET-28 CT8]",
    "options": [
      "50 W",
      "100 W",
      "150 W",
      "200 W"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: In AM with m = 1, carrier power is 2/3 of total power, and each sideband carries 1/6 of total power.\n⚡ Step-by-Step Derivation:\n1. Total power P_t = 900 W.\n2. Carrier power P_c = (2/3) × 900 = 600 W.\n3. Total sideband power P_sb = P_t - P_c = 900 - 600 = 300 W.\n4. Power in each individual sideband (USB or LSB):\n   P_LSB = P_USB = P_sb / 2 = 300 / 2 = 150 W.\n💡 Examiner Pro-Tip: P_sideband = (1/6) × 900 = 150 W.",
    "tags": [
      "Communication Systems",
      "Sideband Power",
      "AM",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q09",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Carrier Swing to Modulation Index",
    "difficulty": "Easy",
    "questionText": "An FM carrier has a total carrier swing of 200 kHz and is modulated by an audio signal of frequency 10 kHz. The modulation index is: [SET-28 CT9]",
    "options": [
      "5",
      "10",
      "20",
      "25"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Carrier Swing (CS) = 2 · Δf, so peak frequency deviation is Δf = CS / 2.\n⚡ Step-by-Step Derivation:\n1. Carrier swing CS = 200 kHz ⟹ Δf = 200 / 2 = 100 kHz.\n2. Modulating frequency f_m = 10 kHz.\n3. Modulation index: m_f = Δf / f_m = 100 kHz / 10 kHz = 10.\n💡 Examiner Pro-Tip: Carrier swing is peak-to-peak deviation; divide by 2 to get peak deviation Δf.",
    "tags": [
      "Communication Systems",
      "Carrier Swing",
      "FM Index",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q10",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Modulation Index Proportionality in FM",
    "difficulty": "Medium",
    "questionText": "A 500 Hz modulating voltage fed into an FM generator produces a frequency deviation of 2.25 kHz. If the amplitude is kept constant and frequency is raised to 6 kHz, the new frequency deviation will be: [SET-28 CT10]",
    "options": [
      "4.5 kHz",
      "54 kHz",
      "27 kHz",
      "15 kHz"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: In an FM generator, frequency deviation Δf is proportional to modulating voltage amplitude, while the modulation index m_f = Δf / f_m.\n⚡ Step-by-Step Derivation:\n1. Initial modulation index: m_f = 2250 Hz / 500 Hz = 4.5.\n2. When modulating frequency is raised to f_m' = 6 kHz:\n   New deviation = 2 × (m_f · f_m') = 2 × 4.5 × 6 kHz = 54 kHz.\n3. Therefore, Option (b) is correct.\n💡 Examiner Pro-Tip: Fast calculation: 2 × 4.5 × 6 = 54 kHz.",
    "tags": [
      "Communication Systems",
      "Frequency Deviation",
      "FM",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q11",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "AM Depth of Modulation Calculation",
    "difficulty": "Easy",
    "questionText": "An audio signal e_m = 15 sin(300π t) modulates a carrier wave e_c = 60 sin(2π × 10⁶ t). The depth of modulation is: [SET-28 CT11]",
    "options": [
      "50%",
      "40%",
      "25%",
      "15%"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Modulation depth is the ratio of modulating signal amplitude to carrier amplitude: m_a = E_m / E_c.\n⚡ Step-by-Step Derivation:\n1. Modulating signal peak amplitude: E_m = 15 V.\n2. Carrier wave peak amplitude: E_c = 60 V.\n3. Modulation factor:\n   m_a = E_m / E_c = 15 / 60 = 1/4 = 0.25 = 25%.\n💡 Examiner Pro-Tip: 15 / 60 = 25% instantly.",
    "tags": [
      "Communication Systems",
      "Modulation Depth",
      "AM",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q12",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "PCM Bit Rate from Quantization Levels",
    "difficulty": "Medium",
    "questionText": "What is the bit rate for a signal sampled at 8 kHz where 16 quantization levels are used? [SET-28 CT12]",
    "options": [
      "32,000 bits/sec",
      "16,000 bits/sec",
      "64,000 bits/sec",
      "72,000 bits/sec"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: The number of binary bits per sample n is related to quantization levels N by N = 2ⁿ. Bit rate = f_sampling × n.\n⚡ Step-by-Step Derivation:\n1. Quantization levels N = 16 ⟹ 2ⁿ = 16 = 2⁴ ⟹ n = 4 bits per sample.\n2. Sampling frequency f_s = 8 kHz = 8,000 samples/sec.\n3. Bit rate:\n   R_b = f_s × n = 8,000 × 4 = 32,000 bits/sec (32 kbps).\n💡 Examiner Pro-Tip: 16 levels = 4 bits; 8000 × 4 = 32,000 bps.",
    "tags": [
      "Communication Systems",
      "PCM",
      "Bit Rate",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q13",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Power Saving in SSBSC Transmission",
    "difficulty": "Hard",
    "questionText": "An amplitude modulated wave is modulated to 50%. What is the percentage power saving if the carrier as well as one of the sidebands are suppressed (SSBSC)? [SET-28 CT13]",
    "options": [
      "70%",
      "65.4%",
      "94.4%",
      "25.5%"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Single-Sideband Suppressed-Carrier (SSBSC) transmission eliminates the high-power unmodulated carrier and redundant sideband.\n⚡ Step-by-Step Derivation:\n1. Total conventional AM power for m = 0.5:\n   P_t = P_c · (1 + m² / 2) = P_c · (1 + 0.25 / 2) = 1.125 P_c.\n2. Transmitted power in one sideband:\n   P_SSB = P_c · (m² / 4) = P_c · (0.25 / 4) = 0.0625 P_c.\n3. Power saved:\n   P_saved = P_t - P_SSB = (1.125 - 0.0625) P_c = 1.0625 P_c.\n4. Percentage power saving:\n   % Saving = (1.0625 / 1.125) × 100% = 94.44% ≈ 94.4%.\n💡 Examiner Pro-Tip: Over 94% of power is wasted transmitting the carrier and second sideband in standard AM!",
    "tags": [
      "Communication Systems",
      "SSBSC",
      "Power Saving",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q14",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Centpercent Modulation Condition",
    "difficulty": "Easy",
    "questionText": "In amplitude modulation, centpercent (100%) modulation is achieved when: [SET-28 CT14]",
    "options": [
      "Carrier amplitude = signal amplitude",
      "Carrier amplitude ≠ signal amplitude",
      "Carrier frequency = signal frequency",
      "Carrier frequency ≠ signal frequency"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Modulation index m_a = E_m / E_c. Centpercent modulation occurs when m_a = 1.\n⚡ Step-by-Step Derivation:\n1. For 100% modulation (m_a = 1):\n   E_m / E_c = 1 ⟹ E_m = E_c.\n2. In this condition, the envelope touches the zero-voltage axis without overmodulation clipping or distortion.\n3. Therefore, carrier amplitude must equal signal amplitude.\n💡 Examiner Pro-Tip: When carrier amplitude = modulating signal amplitude, modulation depth is exactly 100%.",
    "tags": [
      "Communication Systems",
      "AM",
      "Modulation Depth",
      "NEET Physics"
    ]
  }
];

export const ALL_COMMUNICATION_ADVANCED_QUESTIONS: Question[] = [
  {
    "id": "universal-comm-ar-q001",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: Diode lasers are used as optical sources in optical communication.\nReason: Diode lasers consume less energy. [AIIMS 2005]",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Diode lasers emit highly coherent, monochromatic light with narrow beam divergence and operate efficiently at low electrical power inputs.\n⚡ Step-by-Step Derivation:\n1. Assertion is true: Semiconductor diode lasers are universally chosen in fiber optic networks because their narrow spectral linewidth minimizes chromatic dispersion.\n2. Reason is true: Diode lasers require very low threshold drive current and consume minimal power.\n3. However, their primary adoption is due to narrow spectral width and compatibility with optical fiber dimensions, not simply lower energy consumption. Thus, Option (b) is correct.",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ar-q002",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: Television signals are received through sky-wave propagation.\nReason: The ionosphere reflects electromagnetic waves of frequencies greater than a certain critical frequency. [AIIMS 2005]",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: TV broadcast signals operate in the VHF/UHF bands (54 - 890 MHz), which penetrate straight through the ionosphere.\n⚡ Step-by-Step Derivation:\n1. The ionosphere only reflects waves below its critical frequency (f_c ~ 5 - 30 MHz). Above f_c, electromagnetic waves penetrate into outer space.\n2. TV signals have frequencies far exceeding critical frequency, so they cannot be propagated via sky waves (Assertion is false).\n3. The ionosphere reflects waves LESS than critical frequency, not greater than critical frequency (Reason is false).\n4. Both Assertion and Reason are false (Option d).",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ar-q003",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: In high latitude one sees colourful curtains of light hanging down from high altitudes.\nReason: The high energy charged particles from the sun are deflected to polar regions by the magnetic field of the earth. [AIIMS 2003]",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: The Aurora Borealis (Northern Lights) and Aurora Australis occur due to charged solar wind particles interacting with Earth's geomagnetic field.\n⚡ Step-by-Step Derivation:\n1. Energetic solar protons and electrons are funneled along geomagnetic field lines toward the North and South magnetic poles.\n2. Collisions between these incoming charged particles and atmospheric oxygen and nitrogen atoms excite them, emitting brilliant characteristic fluorescence (green, red, violet curtains of light).\n3. Both Assertion and Reason are true, and Reason is the correct explanation.",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ar-q004",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: Short wave bands are used for transmission of radio waves to a large distance.\nReason: Short waves are reflected by ionosphere. [AIIMS 1994]",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Short waves (3 MHz - 30 MHz) undergo total internal reflection in the ionosphere, enabling global sky wave propagation via multi-hop ground-ionosphere reflections.\n⚡ Step-by-Step Derivation:\n1. High frequency short waves are refracted back to Earth by ionized layers (E and F layers).\n2. This enables long-distance international broadcasting across oceans and continents without repeater towers.\n3. Both Assertion and Reason are true, and Reason is the correct explanation.",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ar-q005",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: The electrical conductivity of earth's atmosphere decreases with altitude.\nReason: The high energy particles (i.e. γ-rays and cosmic rays) coming from outer space and entering our earth's atmosphere cause ionisation of the atoms of the gases present there and the pressure of gases decreases with increase in altitude.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "📘 NCERT Concept: Atmospheric electrical conductivity increases with altitude due to increasing cosmic ray flux and ultraviolet ionization.\n⚡ Step-by-Step Derivation:\n1. At higher altitudes, gas density decreases and cosmic ray ionization increases, producing abundant free ions and electrons with high mean free paths.\n2. Consequently, atmospheric conductivity increases with height, making Assertion false.\n3. The Reason correctly describes ionizing cosmic rays and decreasing atmospheric pressure, so Reason is true.",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ar-q006",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: The electromagnetic waves of shorter wavelength can travel longer distances on earth's surface than those of longer wavelengths.\nReason: Shorter the wavelength, the larger is the velocity of wave propagation.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: In a vacuum, all electromagnetic waves travel at the universal speed of light c = 3 × 10⁸ m/s regardless of wavelength.\n⚡ Step-by-Step Derivation:\n1. Shorter wavelength waves (higher frequency) suffer less diffraction around small atmospheric obstacles and can carry more directional energy.\n2. The speed of EM waves in air is independent of wavelength (Reason is completely false).\n3. Hence, Assertion is true but Reason is false.",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ar-q007",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: The surface wave propagation is used for medium wave band and for television broadcasting.\nReason: The surface waves travel directly from transmitting antenna to receiver antenna through atmosphere.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Surface waves travel along the contour of Earth, guided by the ground surface.\n⚡ Step-by-Step Derivation:\n1. Medium waves (550 kHz - 1600 kHz) propagate along the surface of Earth.\n2. Both Assertion and Reason are true, and Reason is the correct explanation.",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ar-q008",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: The television broadcasting becomes weaker with increasing distance.\nReason: The power transmitted from TV transmitter varies inversely as the distance of the receiver.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: By the inverse-square law of radiation, power flux density decreases inversely as the square of the distance (I ∝ 1 / d²).\n⚡ Step-by-Step Derivation:\n1. TV signals attenuate with distance due to space wave spreading, earth curvature obstruction, and absorption, making Assertion true.\n2. The received power decreases as 1 / d² (and transmitter power itself is a fixed value at the source, not a function of receiver distance), making Reason false.\n3. Thus, Assertion is true but Reason is false.",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ar-q009",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: Microwave propagation is better than sky wave propagation.\nReason: Microwaves have frequencies 100 to 300 GHz, which have very good directional properties.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Microwaves possess very short wavelengths (~ mm to cm), enabling them to be focused into sharp, highly directional beam rays like searchlights.\n⚡ Step-by-Step Derivation:\n1. High directionality allows point-to-point microwave and satellite communication with minimal diffraction and high security.\n2. Both Assertion and Reason are true, and Reason correctly explains why microwave propagation is superior.",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ar-q010",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: Satellite is an ideal platform for remote sensing.\nReason: Satellite in polar orbit can provide global coverage or continuous coverage of the fixed area in geostationary configuration.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Remote sensing satellites in sun-synchronous polar orbits scan every coordinate on Earth with consistent solar illumination.\n⚡ Step-by-Step Derivation:\n1. Satellites operate high above atmospheric weather disturbances, providing recurring, repeatable multi-spectral imagery.\n2. Polar sun-synchronous satellites pass over every latitude daily at the exact same local solar time.\n3. Both Assertion and Reason are true, and Reason is the correct explanation.",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ar-q011",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: Fax is a modulating and demodulating device.\nReason: It is necessary for exact reproduction of a document.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "📘 NCERT Concept: A FAX (facsimile) machine consists of an optical document scanner, printer, and an internal modem.\n⚡ Step-by-Step Derivation:\n1. Modulation and demodulation are performed by the modem component, whereas the FAX as a whole is an image scanner and transcriber.\n2. Exact reproduction of the document is the purpose of facsimile transmission (Reason is true).\n3. Thus, Assertion is false and Reason is true.",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ar-q012",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: A dish antenna is highly directional.\nReason: This is because a dipole antenna is omni directional.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Parabolic dish reflectors focus spherical radiation into a tight, parallel collimated beam along the principal axis.\n⚡ Step-by-Step Derivation:\n1. A parabolic reflector reflects electromagnetic waves into a sharp parallel pencil beam, giving high forward gain and directionality.\n2. A half-wave dipole radiates broadly in the perpendicular plane (donut radiation pattern).\n3. Both statements are factually true, but dipole radiation characteristics do not explain parabolic dish geometry. Option (b) is correct.",
    "tags": [
      "Communication Systems",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q01",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Refraction of Sky Waves in D-Region",
    "difficulty": "Medium",
    "questionText": "A sky wave with frequency 55 MHz is incident on the D-region of Earth's atmosphere at an angle of incidence of 45°. If the electron density in the D-region is 400 electrons/cm³, the angle of refraction is: [Haryana PMT 2003]",
    "options": [
      "60°",
      "45°",
      "30°",
      "15°"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: The effective refractive index of an ionospheric layer is n_eff = √(1 - 80.5 N / f²).\n⚡ Step-by-Step Derivation:\n1. Electron density N = 400 electrons/cm³ = 400 × 10⁶ electrons/m³ = 4 × 10⁸ m⁻³.\n2. Signal frequency f = 55 MHz = 55 × 10⁶ Hz.\n3. Plasma term: (80.5 × 4 × 10⁸) / (55 × 10⁶)² ≈ 3.22 × 10¹⁰ / 3.025 × 10¹⁵ ≈ 1.06 × 10⁻⁵ ≈ 0.\n4. Therefore, n_eff = √(1 - 0) = 1.\n5. By Snell's law: sin r = sin i / n_eff = sin 45° / 1 = sin 45° ⟹ r = 45°.\n💡 Examiner Pro-Tip: Because 55 MHz is vastly higher than the D-region plasma frequency, the refractive index is practically 1 and no deviation occurs (r = i = 45°).",
    "tags": [
      "Communication Systems",
      "Ionosphere",
      "Refraction",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q02",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "AM Diode Detector RC Criterion",
    "difficulty": "Medium",
    "questionText": "In a diode AM detector, the output filter circuit consists of R = 1 kΩ and C = 10 pF. A carrier signal of frequency 100 kHz is to be detected. Is this circuit suitable? [SET-28 CT2]",
    "options": [
      "Yes",
      "No",
      "Information is not sufficient",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: For faithful envelope detection without carrier feedthrough, the condition 1/f_c ≪ RC must be satisfied.\n⚡ Step-by-Step Derivation:\n1. Carrier period: 1 / f_c = 1 / (100 × 10³ Hz) = 10⁻⁵ s.\n2. Filter time constant: RC = 1000 Ω × 10 × 10⁻¹² F = 10⁻⁸ s.\n3. Here, 1 / f_c (10⁻⁵ s) is NOT much less than RC (10⁻⁸ s); in fact, 1 / f_c is 1000 times larger than RC!\n4. The capacitor would discharge too fast, resulting in poor rectification and high carrier ripple.\n5. Therefore, the circuit is NOT suitable (No).\n💡 Examiner Pro-Tip: For proper AM detection, 1/f_c ≪ RC ≪ 1/f_m.",
    "tags": [
      "Communication Systems",
      "AM Detector",
      "Filter",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q03",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Optical Communication Channel Multiplexing",
    "difficulty": "Hard",
    "questionText": "Consider an optical communication system operating at λ ≈ 800 nm. Suppose only 1% of the optical source frequency is available as channel bandwidth. How many telephone channels can be accommodated if each channel requires 8 kHz? [SET-28 CT3]",
    "options": [
      "4.8 × 10⁸",
      "48",
      "6.2 × 10⁸",
      "4.8 × 10⁵"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Channel capacity N = Available Total Bandwidth / Bandwidth per channel.\n⚡ Step-by-Step Derivation:\n1. Optical carrier frequency: f = c / λ = (3 × 10⁸ m/s) / (800 × 10⁻⁹ m) = 3.75 × 10¹⁴ Hz ≈ 3.8 × 10¹⁴ Hz.\n2. Available bandwidth (1%): BW = 0.01 × 3.8 × 10¹⁴ Hz = 3.8 × 10¹² Hz.\n3. Audio bandwidth per channel = 8 kHz = 8 × 10³ Hz.\n4. Number of simultaneous channels:\n   N = (3.8 × 10¹²) / (8 × 10³) = 4.75 × 10⁸ ≈ 4.8 × 10⁸ channels.\n💡 Examiner Pro-Tip: Nearly half a billion channels can be multiplexed over a single optical fiber beam.",
    "tags": [
      "Communication Systems",
      "Optical Fibres",
      "Multiplexing",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q04",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Photodetector Cutoff Wavelength",
    "difficulty": "Easy",
    "questionText": "A photodetector is fabricated from semiconductor In_0.53Ga_0.47As with energy bandgap E_g = 0.73 eV. The maximum wavelength of light it can detect is: [SET-28 CT4]",
    "options": [
      "1000 nm",
      "1703 nm",
      "500 nm",
      "173 nm"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: The cutoff threshold wavelength is λ_max = hc / E_g.\n⚡ Step-by-Step Derivation:\n1. E_g = 0.73 eV = 0.73 × 1.6 × 10⁻¹⁹ J = 1.168 × 10⁻¹⁹ J.\n2. Using hc = 6.63 × 10⁻³⁴ × 3 × 10⁸ = 1.989 × 10⁻²⁵ J·m:\n   λ_max = (1.989 × 10⁻²⁵) / (1.168 × 10⁻¹⁹) = 1.703 × 10⁻⁶ m = 1703 nm.\n3. Shortcut: λ(nm) ≈ 1240 / 0.73 ≈ 1698.6 nm ≈ 1703 nm.\n💡 Examiner Pro-Tip: Fast rule: λ(nm) = 1240 / E_g(eV) = 1240 / 0.73 ≈ 1700 nm.",
    "tags": [
      "Communication Systems",
      "Photodetector",
      "Bandgap",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q05",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Transmitter Radiated Power at 40% Modulation",
    "difficulty": "Medium",
    "questionText": "A radio transmitter supplies 9 kW of unmodulated carrier power to the antenna. The total power radiated when modulated to 40% is: [SET-28 CT5]",
    "options": [
      "5 kW",
      "9.72 kW",
      "10 kW",
      "12 kW"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Total power in an AM wave is P_t = P_c · (1 + m² / 2).\n⚡ Step-by-Step Derivation:\n1. Given carrier power P_c = 9 kW and modulation index m = 40% = 0.4.\n2. m² / 2 = (0.4)² / 2 = 0.16 / 2 = 0.08.\n3. Total radiated power:\n   P_t = 9 kW × (1 + 0.08) = 9 × 1.08 = 9.72 kW.\n💡 Examiner Pro-Tip: 9 × 1.08 = 9.72 kW.",
    "tags": [
      "Communication Systems",
      "AM Power",
      "Radiated Power",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q06",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Antenna Current & Modulation Depth",
    "difficulty": "Medium",
    "questionText": "The antenna current of an AM transmitter is 8 A when only carrier is transmitted, but increases to 8.96 A when sinusoidally modulated. The percentage modulation is: [SET-28 CT6]",
    "options": [
      "50%",
      "60%",
      "65%",
      "71%"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: I_t / I_c = √(1 + m² / 2).\n⚡ Step-by-Step Derivation:\n1. (I_t / I_c)² = 1 + m² / 2.\n2. Given I_t = 8.96 A and I_c = 8 A:\n   I_t / I_c = 8.96 / 8 = 1.12.\n3. (1.12)² = 1.2544 = 1 + m² / 2.\n4. m² / 2 = 0.2544 ⟹ m² = 0.5088 ⟹ m = √(0.5088) ≈ 0.713 = 71%.\n💡 Examiner Pro-Tip: 8.96 / 8 = 1.12. (1.12)² ≈ 1.254. m = √(2 × 0.254) ≈ 71%.",
    "tags": [
      "Communication Systems",
      "Antenna Current",
      "Modulation Depth",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q07",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Carrier Power at 100% Modulation",
    "difficulty": "Medium",
    "questionText": "The total power content of an AM wave is 1500 W. For 100% modulation, the power transmitted by the carrier is: [SET-28 CT7]",
    "options": [
      "500 W",
      "700 W",
      "750 W",
      "1000 W"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: At 100% modulation (m = 1), total power is P_t = P_c · (1 + 1/2) = 1.5 P_c.\n⚡ Step-by-Step Derivation:\n1. Given P_t = 1500 W.\n2. P_c = P_t / 1.5 = 1500 W / 1.5 = 1000 W.\n3. The remaining 500 W is equally divided between upper and lower sidebands (250 W each).\n💡 Examiner Pro-Tip: For 100% modulation, carrier power is always 2/3 of total power: (2/3) × 1500 = 1000 W.",
    "tags": [
      "Communication Systems",
      "AM Power",
      "Carrier Power",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q08",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Sideband Power Distribution",
    "difficulty": "Medium",
    "questionText": "The total power content of an AM wave is 900 W. For 100% modulation, the power transmitted by each individual sideband is: [SET-28 CT8]",
    "options": [
      "50 W",
      "100 W",
      "150 W",
      "200 W"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: In AM with m = 1, carrier power is 2/3 of total power, and each sideband carries 1/6 of total power.\n⚡ Step-by-Step Derivation:\n1. Total power P_t = 900 W.\n2. Carrier power P_c = (2/3) × 900 = 600 W.\n3. Total sideband power P_sb = P_t - P_c = 900 - 600 = 300 W.\n4. Power in each individual sideband (USB or LSB):\n   P_LSB = P_USB = P_sb / 2 = 300 / 2 = 150 W.\n💡 Examiner Pro-Tip: P_sideband = (1/6) × 900 = 150 W.",
    "tags": [
      "Communication Systems",
      "Sideband Power",
      "AM",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q09",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Carrier Swing to Modulation Index",
    "difficulty": "Easy",
    "questionText": "An FM carrier has a total carrier swing of 200 kHz and is modulated by an audio signal of frequency 10 kHz. The modulation index is: [SET-28 CT9]",
    "options": [
      "5",
      "10",
      "20",
      "25"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Carrier Swing (CS) = 2 · Δf, so peak frequency deviation is Δf = CS / 2.\n⚡ Step-by-Step Derivation:\n1. Carrier swing CS = 200 kHz ⟹ Δf = 200 / 2 = 100 kHz.\n2. Modulating frequency f_m = 10 kHz.\n3. Modulation index: m_f = Δf / f_m = 100 kHz / 10 kHz = 10.\n💡 Examiner Pro-Tip: Carrier swing is peak-to-peak deviation; divide by 2 to get peak deviation Δf.",
    "tags": [
      "Communication Systems",
      "Carrier Swing",
      "FM Index",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q10",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Modulation Index Proportionality in FM",
    "difficulty": "Medium",
    "questionText": "A 500 Hz modulating voltage fed into an FM generator produces a frequency deviation of 2.25 kHz. If the amplitude is kept constant and frequency is raised to 6 kHz, the new frequency deviation will be: [SET-28 CT10]",
    "options": [
      "4.5 kHz",
      "54 kHz",
      "27 kHz",
      "15 kHz"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: In an FM generator, frequency deviation Δf is proportional to modulating voltage amplitude, while the modulation index m_f = Δf / f_m.\n⚡ Step-by-Step Derivation:\n1. Initial modulation index: m_f = 2250 Hz / 500 Hz = 4.5.\n2. When modulating frequency is raised to f_m' = 6 kHz:\n   New deviation = 2 × (m_f · f_m') = 2 × 4.5 × 6 kHz = 54 kHz.\n3. Therefore, Option (b) is correct.\n💡 Examiner Pro-Tip: Fast calculation: 2 × 4.5 × 6 = 54 kHz.",
    "tags": [
      "Communication Systems",
      "Frequency Deviation",
      "FM",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q11",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "AM Depth of Modulation Calculation",
    "difficulty": "Easy",
    "questionText": "An audio signal e_m = 15 sin(300π t) modulates a carrier wave e_c = 60 sin(2π × 10⁶ t). The depth of modulation is: [SET-28 CT11]",
    "options": [
      "50%",
      "40%",
      "25%",
      "15%"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Modulation depth is the ratio of modulating signal amplitude to carrier amplitude: m_a = E_m / E_c.\n⚡ Step-by-Step Derivation:\n1. Modulating signal peak amplitude: E_m = 15 V.\n2. Carrier wave peak amplitude: E_c = 60 V.\n3. Modulation factor:\n   m_a = E_m / E_c = 15 / 60 = 1/4 = 0.25 = 25%.\n💡 Examiner Pro-Tip: 15 / 60 = 25% instantly.",
    "tags": [
      "Communication Systems",
      "Modulation Depth",
      "AM",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q12",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "PCM Bit Rate from Quantization Levels",
    "difficulty": "Medium",
    "questionText": "What is the bit rate for a signal sampled at 8 kHz where 16 quantization levels are used? [SET-28 CT12]",
    "options": [
      "32,000 bits/sec",
      "16,000 bits/sec",
      "64,000 bits/sec",
      "72,000 bits/sec"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: The number of binary bits per sample n is related to quantization levels N by N = 2ⁿ. Bit rate = f_sampling × n.\n⚡ Step-by-Step Derivation:\n1. Quantization levels N = 16 ⟹ 2ⁿ = 16 = 2⁴ ⟹ n = 4 bits per sample.\n2. Sampling frequency f_s = 8 kHz = 8,000 samples/sec.\n3. Bit rate:\n   R_b = f_s × n = 8,000 × 4 = 32,000 bits/sec (32 kbps).\n💡 Examiner Pro-Tip: 16 levels = 4 bits; 8000 × 4 = 32,000 bps.",
    "tags": [
      "Communication Systems",
      "PCM",
      "Bit Rate",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q13",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Power Saving in SSBSC Transmission",
    "difficulty": "Hard",
    "questionText": "An amplitude modulated wave is modulated to 50%. What is the percentage power saving if the carrier as well as one of the sidebands are suppressed (SSBSC)? [SET-28 CT13]",
    "options": [
      "70%",
      "65.4%",
      "94.4%",
      "25.5%"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Single-Sideband Suppressed-Carrier (SSBSC) transmission eliminates the high-power unmodulated carrier and redundant sideband.\n⚡ Step-by-Step Derivation:\n1. Total conventional AM power for m = 0.5:\n   P_t = P_c · (1 + m² / 2) = P_c · (1 + 0.25 / 2) = 1.125 P_c.\n2. Transmitted power in one sideband:\n   P_SSB = P_c · (m² / 4) = P_c · (0.25 / 4) = 0.0625 P_c.\n3. Power saved:\n   P_saved = P_t - P_SSB = (1.125 - 0.0625) P_c = 1.0625 P_c.\n4. Percentage power saving:\n   % Saving = (1.0625 / 1.125) × 100% = 94.44% ≈ 94.4%.\n💡 Examiner Pro-Tip: Over 94% of power is wasted transmitting the carrier and second sideband in standard AM!",
    "tags": [
      "Communication Systems",
      "SSBSC",
      "Power Saving",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-comm-ct-q14",
    "subject": "Physics",
    "chapter": "Communication Systems",
    "topic": "Centpercent Modulation Condition",
    "difficulty": "Easy",
    "questionText": "In amplitude modulation, centpercent (100%) modulation is achieved when: [SET-28 CT14]",
    "options": [
      "Carrier amplitude = signal amplitude",
      "Carrier amplitude ≠ signal amplitude",
      "Carrier frequency = signal frequency",
      "Carrier frequency ≠ signal frequency"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Modulation index m_a = E_m / E_c. Centpercent modulation occurs when m_a = 1.\n⚡ Step-by-Step Derivation:\n1. For 100% modulation (m_a = 1):\n   E_m / E_c = 1 ⟹ E_m = E_c.\n2. In this condition, the envelope touches the zero-voltage axis without overmodulation clipping or distortion.\n3. Therefore, carrier amplitude must equal signal amplitude.\n💡 Examiner Pro-Tip: When carrier amplitude = modulating signal amplitude, modulation depth is exactly 100%.",
    "tags": [
      "Communication Systems",
      "AM",
      "Modulation Depth",
      "NEET Physics"
    ]
  }
];
