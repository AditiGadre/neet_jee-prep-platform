import { Question } from '../types';

/**
 * Pre-Medical PHYSICS QUESTION BANK
 * Chapter: Physical World, Units, Dimensions and Errors in Measurement
 * Total Questions: 101 authentic questions with Official Answer Keys
 * - Exercise-I (Conceptual Questions): 52 Questions (UD0001 to UD0056)
 * - Exercise-II (Previous Year Questions - AIPMT/NEET): 38 Questions (UD0057 to UD0131)
 * - Exercise-III (Analytical Questions - Master Level): 11 Questions (UD0083 to UD0102)
 */

export const ALLEN_UNITS_EXERCISE_1_QUESTIONS: Question[] = [
  {
    "id": "allen-units-ex1-q01",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Units & Systems of Units",
    "subtopic": "Units & Systems of Units",
    "difficulty": "Easy",
    "questionText": "Which of the following system of units is not based on units of mass, length and time alone ?",
    "question": "Which of the following system of units is not based on units of mass, length and time alone ?",
    "options": [
      "SI",
      "MKS",
      "FPS",
      "CGS"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: The SI system is based on seven fundamental base units (Mass, Length, Time, Electric Current, Thermodynamic Temperature, Amount of Substance, and Luminous Intensity) plus two supplementary units.\n⚡ Step-by-Step Derivation:\n1. MKS, CGS, and FPS systems use only units of Mass, Length, and Time alone as their base quantities.\n2. The International System of Units (SI) extends beyond mechanical quantities and includes 7 base quantities.\n3. Therefore, SI is not based on mass, length, and time alone.\n💡 Examiner Pro-Tip: SI was adopted by the 14th General Conference on Weights and Measures (CGPM) in 1971.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q02",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Units & Systems of Units",
    "subtopic": "Units & Systems of Units",
    "difficulty": "Easy",
    "questionText": "Which of the following quantity is unitless ?",
    "question": "Which of the following quantity is unitless ?",
    "options": [
      "Velocity gradient",
      "Pressure gradient",
      "Displacement gradient",
      "Force gradient"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: A gradient is defined as the rate of change of a physical quantity with respect to distance (displacement).\n⚡ Step-by-Step Derivation:\n1. Displacement gradient = (Change in displacement) / (Distance) = Δx / Δy.\n2. Units: metre / metre = m / m = unitless and dimensionless [M⁰L⁰T⁰].\n3. Velocity gradient = Δv / Δx has units (m/s)/m = s⁻¹.\n4. Pressure gradient = ΔP / Δx has units (N/m²)/m = N/m³.\n5. Force gradient = ΔF / Δx has units N/m.\n💡 Examiner Pro-Tip: Any gradient of a length quantity with respect to length is dimensionless and unitless.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q03",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Easy",
    "questionText": "The fundamental unit which has same power in the dimensional formula of surface tension and co-efficient of viscosity is",
    "question": "The fundamental unit which has same power in the dimensional formula of surface tension and co-efficient of viscosity is",
    "options": [
      "Mass",
      "Length",
      "Time",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Surface tension and coefficient of viscosity both depend on fundamental dimensions.\n⚡ Step-by-Step Derivation:\n1. Surface tension T = Force / Length = [MLT⁻²] / [L] = [M¹ L⁰ T⁻²].\n2. Coefficient of viscosity η = Force / (Area × velocity gradient) = [MLT⁻²] / ([L²][T⁻¹]) = [M¹ L⁻¹ T⁻¹].\n3. In both dimensional formulas, the power of Mass (M) is 1.\n4. Power of Length is 0 in surface tension and -1 in viscosity. Power of Time is -2 in surface tension and -1 in viscosity.\n💡 Examiner Pro-Tip: Check the power of mass first when comparing mechanical and fluid quantities.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q04",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Physical World & Measurement",
    "subtopic": "Physical World & Measurement",
    "difficulty": "Easy",
    "questionText": "The ratio of one micron to one nanometre is",
    "question": "The ratio of one micron to one nanometre is",
    "options": [
      "10³",
      "10⁻3",
      "10⁻6",
      "10⁻1"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: 1 micron (micrometre) = 10⁻⁶ m, and 1 nanometre = 10⁻⁹ m.\n⚡ Step-by-Step Derivation:\n1. Ratio = (1 micron) / (1 nanometre) = 10⁻⁶ m / 10⁻⁹ m.\n2. Using exponent rules: 10⁻⁶ / 10⁻⁹ = 10^(-6 - (-9)) = 10³.\n3. Thus, 1 micron is 1000 times larger than 1 nanometre.\n💡 Examiner Pro-Tip: Remember prefix multiples: micro = 10⁻⁶, nano = 10⁻⁹, pico = 10⁻¹², femto = 10⁻¹⁵.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q05",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Physical World & Measurement",
    "subtopic": "Physical World & Measurement",
    "difficulty": "Easy",
    "questionText": "Temperature can be expressed as a derived quantity in terms of which of the following ?",
    "question": "Temperature can be expressed as a derived quantity in terms of which of the following ?",
    "options": [
      "Length and mass",
      "Mass and time",
      "Length. mass and time",
      "None of these"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: In the International System of Units (SI), Temperature is one of the seven fundamental/base physical quantities.\n⚡ Step-by-Step Derivation:\n1. Fundamental quantities cannot be defined or derived in terms of other physical quantities.\n2. Temperature is measured in Kelvin (K) and possesses its own independent fundamental dimension [K] or [θ].\n3. It cannot be expressed purely in terms of length, mass, and time.\n4. Hence, Option (4) None of these is correct.\n💡 Examiner Pro-Tip: Mechanical quantities (M, L, T) alone cannot express thermal, electrical, or optical base quantities.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q06",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Units & Systems of Units",
    "subtopic": "Units & Systems of Units",
    "difficulty": "Easy",
    "questionText": "Density of wood is 0.5 gm/cc in CGS system of units. The corresponding value in MKS units is",
    "question": "Density of wood is 0.5 gm/cc in CGS system of units. The corresponding value in MKS units is",
    "options": [
      "500",
      "5",
      "0.5",
      "5000"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Conversion between CGS and MKS (SI) unit systems for density: 1 g/cm³ = 1000 kg/m³.\n⚡ Step-by-Step Derivation:\n1. Given density in CGS: ρ = 0.5 g/cc = 0.5 g / cm³.\n2. Convert grams to kg: 1 g = 10⁻³ kg.\n3. Convert cm³ to m³: 1 cm³ = (10⁻² m)³ = 10⁻⁶ m³.\n4. ρ_MKS = 0.5 × (10⁻³ kg) / (10⁻⁶ m³) = 0.5 × 10³ kg/m³ = 500 kg/m³.\n💡 Examiner Pro-Tip: Multiply density in g/cm³ by 1000 to instantly get density in kg/m³ (MKS).",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q07",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Units & Systems of Units",
    "subtopic": "Units & Systems of Units",
    "difficulty": "Easy",
    "questionText": "Match List-I with List-II and select the correct answer by using the codes given below the lists:\n\n| List-I (Item) | List-II (Units of length) |\n| :--- | :--- |\n| A. Distance between earth and stars | 1. Micron |\n| B. Inter atomic distance in a solid | 2. Angstrom |\n| C. Size of nucleus | 3. Light year |\n| D. Wavelength of Infrared Laser | 4. Fermi |\n| | 5. Kilometre |\n\nCodes (A B C D):",
    "question": "Match List-I with List-II and select the correct answer by using the codes given below the lists:\n\n| List-I (Item) | List-II (Units of length) |\n| :--- | :--- |\n| A. Distance between earth and stars | 1. Micron |\n| B. Inter atomic distance in a solid | 2. Angstrom |\n| C. Size of nucleus | 3. Light year |\n| D. Wavelength of Infrared Laser | 4. Fermi |\n| | 5. Kilometre |\n\nCodes (A B C D):",
    "options": [
      "5 4 2 1",
      "3 2 4 1",
      "5 2 4 3",
      "3 4 1 2"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Matching practical astronomical and microscopic units of length with physical systems.\n⚡ Step-by-Step Derivation:\n1. A. Distance between earth and stars: Measured in Light year (1 ly ≈ 9.46 × 10¹⁵ m) → 3.\n2. B. Inter atomic distance in a solid: Typically 1 to a few Angstroms (1 Å = 10⁻¹⁰ m) → 2.\n3. C. Size of nucleus: Measured in Fermi / femtometre (1 fm = 10⁻¹⁵ m) → 4.\n4. D. Wavelength of Infrared Laser: Typically in Microns (μm = 10⁻⁶ m) → 1.\n5. Therefore, the matching code is: A-3, B-2, C-4, D-1 (Option 2).\n💡 Examiner Pro-Tip: Nuclear scale = Fermi (10⁻¹⁵ m), Atomic scale = Angstrom (10⁻¹⁰ m), Stellar scale = Light year / Parsec.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q08",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Units & Systems of Units",
    "subtopic": "Units & Systems of Units",
    "difficulty": "Easy",
    "questionText": "Which of the following is not the unit of time ?",
    "question": "Which of the following is not the unit of time ?",
    "options": [
      "Micro second",
      "leap year",
      "Lunar month",
      "Parallactic second"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: A parallactic second (parsec) is a unit of astronomical distance, not time.\n⚡ Step-by-Step Derivation:\n1. Microsecond is 10⁻⁶ second (unit of time).\n2. Leap year is 366 days (unit of time).\n3. Lunar month is ~27.3 to 29.5 days (unit of time).\n4. Parallactic second (Parsec) is the distance at which an arc of 1 AU subtends an angle of 1 arcsecond: 1 pc ≈ 3.08 × 10¹⁶ m.\n5. Hence, Parallactic second is a unit of distance.\n💡 Examiner Pro-Tip: Do not be misled by the word 'second' in parallactic second or 'year' in light year!",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q09",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Units & Systems of Units",
    "subtopic": "Units & Systems of Units",
    "difficulty": "Easy",
    "questionText": "Which of the following is smallest unit",
    "question": "Which of the following is smallest unit",
    "options": [
      "Millimetre",
      "Angstrom",
      "Fermi",
      "Metre"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Comparison of subatomic and macroscopic units of length.\n⚡ Step-by-Step Derivation:\n1. Millimetre (mm) = 10⁻³ m.\n2. Metre (m) = 1 m.\n3. Angstrom (Å) = 10⁻¹⁰ m.\n4. Fermi (fm) = 10⁻¹⁵ m.\n5. Among the given choices, 10⁻¹⁵ m (Fermi) is the smallest unit of length.\n💡 Examiner Pro-Tip: 1 Fermi (fm) = 10⁻¹⁵ m is the characteristic size scale of atomic nuclei.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q10",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Physical World & Measurement",
    "subtopic": "Physical World & Measurement",
    "difficulty": "Easy",
    "questionText": "Which relation is wrong ?",
    "question": "Which relation is wrong ?",
    "options": [
      "1 cal = 4.18 joules",
      "1 Å = 10⁻10 m",
      "1 MeV = 1.6 × 10⁻13 joules",
      "1 newton = 10⁻5 dynes"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Conversion factors between SI and CGS mechanical and thermal units.\n⚡ Step-by-Step Derivation:\n1. 1 cal = 4.18 Joules (Correct: mechanical equivalent of heat).\n2. 1 Å = 10⁻¹⁰ m (Correct: atomic length unit).\n3. 1 MeV = 10⁶ × (1.6 × 10⁻¹⁹ J) = 1.6 × 10⁻¹³ Joules (Correct).\n4. 1 Newton = 1 kg · m/s² = 10³ g × 10² cm/s² = 10⁵ dynes.\n5. The relation states 1 newton = 10⁻⁵ dynes, which is WRONG.\n💡 Examiner Pro-Tip: 1 N = 10⁵ dyne, and 1 J = 10⁷ erg.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q11",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Units & Systems of Units",
    "subtopic": "Units & Systems of Units",
    "difficulty": "Easy",
    "questionText": "'Parsec' is the unit of -",
    "question": "'Parsec' is the unit of -",
    "options": [
      "time",
      "distance",
      "frequency",
      "angular acceleration"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Definition of astronomical distance units.\n⚡ Step-by-Step Derivation:\n1. Parsec stands for 'parallax second'.\n2. It is defined as the distance of an object from Earth that has a stellar parallax angle of one arcsecond with a baseline of 1 Astronomical Unit (AU).\n3. 1 parsec = 1 AU / (1 arcsec in radians) ≈ 3.08 × 10¹⁶ m ≈ 3.26 light years.\n4. Hence, Parsec is a unit of distance.\n💡 Examiner Pro-Tip: Parsec is the largest unit of distance tested in NEET (1 Parsec > 1 Light Year > 1 AU).",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q12",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Easy",
    "questionText": "The ratio of the dimensions of Planck's constant and that of the moment of inertia is :-",
    "question": "The ratio of the dimensions of Planck's constant and that of the moment of inertia is :-",
    "options": [
      "Velocity",
      "Angular momentum",
      "Time",
      "Frequency DIMENSIONS"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Dimensional formulas of Planck's constant (h) and Moment of Inertia (I).\n⚡ Step-by-Step Derivation:\n1. Energy of photon E = hν ⟹ [h] = [E] / [ν] = [ML²T⁻²] / [T⁻¹] = [ML²T⁻¹].\n2. Moment of inertia I = m r² ⟹ [I] = [M][L²] = [ML²].\n3. Ratio of dimensions: [h / I] = [ML²T⁻¹] / [ML²] = [T⁻¹].\n4. [T⁻¹] is the dimension of frequency (ν = 1/T).\n💡 Examiner Pro-Tip: [h/I] = [T⁻¹] = [Angular velocity] = [Frequency].",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q13",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Easy",
    "questionText": "When a wave travels in a medium, the displacement of a particle located at distance x at time t is given by y = a sin (bt - cx) where a, b and c are constants of the wave. The dimensions of b/c are same as that of :",
    "question": "When a wave travels in a medium, the displacement of a particle located at distance x at time t is given by y = a sin (bt - cx) where a, b and c are constants of the wave. The dimensions of b/c are same as that of :",
    "options": [
      "wave velocity",
      "wave length",
      "wave amplitude",
      "wave frequency"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: The argument of any trigonometric function must be dimensionless according to the principle of dimensional homogeneity.\n⚡ Step-by-Step Derivation:\n1. In y = a sin(bt − cx), the phase (bt − cx) is dimensionless.\n2. Therefore, [bt] = 1 ⟹ [b] = [t⁻¹] = [T⁻¹].\n3. Also, [cx] = 1 ⟹ [c] = [x⁻¹] = [L⁻¹].\n4. The ratio [b / c] = [T⁻¹] / [L⁻¹] = [LT⁻¹].\n5. [LT⁻¹] is the dimensional formula of wave velocity (v = ω/k = b/c).\n💡 Examiner Pro-Tip: In y = a sin(bt - cx), b = ω (angular frequency) and c = k (wave number), so b/c = ω/k = wave speed v.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q14",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Easy",
    "questionText": "The dimensional formula of wave number is",
    "question": "The dimensional formula of wave number is",
    "options": [
      "[M°L°T⁻¹]",
      "[M⁻¹L⁻¹T°]",
      "[M°L⁻¹T°]",
      "[M°L°T°]"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Wave number (ν̄) is defined as the number of complete waves per unit length: ν̄ = 1 / λ.\n⚡ Step-by-Step Derivation:\n1. Since λ is wavelength (length), its dimension is [L].\n2. Wave number ν̄ = 1 / λ ⟹ [ν̄] = [L⁻¹].\n3. Expressed in base units: [M⁰ L⁻¹ T⁰].\n💡 Examiner Pro-Tip: Do not confuse wave number ν̄ = 1/λ ([L⁻¹]) with angular wave number k = 2π/λ (also [L⁻¹]).",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q15",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Easy",
    "questionText": "The method of dimensional analysis can be used to derive which of the following relations ?",
    "question": "The method of dimensional analysis can be used to derive which of the following relations ?",
    "options": [
      "N0e-λt",
      "A sin(ωt + kx)",
      "½ mv² + ½ Iω²",
      "None of the above"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Limitations of dimensional analysis.\n⚡ Step-by-Step Derivation:\n1. Dimensional analysis cannot derive relations involving trigonometric functions (sin, cos), exponential functions (e^x), or logarithmic functions because their arguments and values are dimensionless.\n2. Dimensional analysis cannot determine proportionality constants or relations containing sums of terms (e.g. ½ mv² + ½ Iω²).\n3. Therefore, none of the listed equations can be derived using dimensional analysis.\n💡 Examiner Pro-Tip: Dimensional analysis only derives equations where a quantity depends on products/powers of variables.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q16",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Easy",
    "questionText": "Which of the following does not have the dimensions of force ?",
    "question": "Which of the following does not have the dimensions of force ?",
    "options": [
      "Potential gradient",
      "Energy gradient",
      "Weight",
      "Rate of change of momentum"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Dimensional formulas of force, weight, gradients, and rate of change of momentum.\n⚡ Step-by-Step Derivation:\n1. Force has dimensions [MLT⁻²].\n2. Weight = mg = [MLT⁻²] (force).\n3. Rate of change of momentum = dp/dt = [MLT⁻¹]/[T] = [MLT⁻²] (equals force by Newton's 2nd law).\n4. Energy gradient = dE/dx = [ML²T⁻²]/[L] = [MLT⁻²] (force).\n5. Potential gradient = dV/dx = [Work/charge]/[L] = [ML²T⁻³A⁻¹]/[L] = [MLT⁻³A⁻¹] (electric field, not force).\n💡 Examiner Pro-Tip: Potential gradient is Electric Field (E = -dV/dx), while Potential Energy gradient is Force (F = -dU/dx).",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q17",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Physical World & Measurement",
    "subtopic": "Physical World & Measurement",
    "difficulty": "Easy",
    "questionText": "Which of the following is incorrect statement",
    "question": "Which of the following is incorrect statement",
    "options": [
      "A dimensionally correct equation may be correct",
      "A dimensionally correct equation may be incorrect",
      "A dimensionally incorrect equation may be correct",
      "A dimensionally incorrect equation is incorrect"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Dimensional validity vs physical correctness.\n⚡ Step-by-Step Derivation:\n1. If an equation is dimensionally correct, it may be physically correct or incorrect (e.g., s = vt + at² is dimensionally correct but lacks the factor ½).\n2. If an equation is dimensionally incorrect, it is definitely incorrect in physical reality.\n3. Therefore, 'A dimensionally incorrect equation may be correct' is a completely FALSE / incorrect statement.\n💡 Examiner Pro-Tip: Dimensional correctness is a necessary condition, but NOT a sufficient condition for physical correctness.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q18",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Units & Systems of Units",
    "subtopic": "Units & Systems of Units",
    "difficulty": "Easy",
    "questionText": "A dimensionless quantity",
    "question": "A dimensionless quantity",
    "options": [
      "Never has a unit",
      "Always has a unit",
      "May have a unit",
      "Does not exist"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Relationship between dimensions and physical units.\n⚡ Step-by-Step Derivation:\n1. A dimensionless quantity can possess a unit.\n2. Classic examples: Plane angle is dimensionless [M⁰L⁰T⁰] but has the unit radian (rad); Solid angle has unit steradian (sr).\n3. Thus, a dimensionless quantity may have a unit.\n💡 Examiner Pro-Tip: Dimensionless quantities may have units (e.g., radians), but unitless quantities NEVER have dimensions.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q19",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Units & Systems of Units",
    "subtopic": "Units & Systems of Units",
    "difficulty": "Easy",
    "questionText": "A unitless quantity",
    "question": "A unitless quantity",
    "options": [
      "Does not exist",
      "Always has a nonzero dimension",
      "Never has a nonzero dimension",
      "May have a nonzero dimension"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: If a quantity has no unit, it cannot have dimensions.\n⚡ Step-by-Step Derivation:\n1. Units are the physical realization of base dimensions.\n2. If a physical quantity is unitless (e.g., refractive index, relative density, strain), it has no base units.\n3. Therefore, its powers of M, L, T, etc., are all zero.\n4. A unitless quantity never has a nonzero dimension.\n💡 Examiner Pro-Tip: Unitless ⟹ Dimensionless always. But Dimensionless does NOT necessarily mean unitless (angles have radians).",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q20",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Physical World & Measurement",
    "subtopic": "Physical World & Measurement",
    "difficulty": "Easy",
    "questionText": "Which of the following is incorrect ?",
    "question": "Which of the following is incorrect ?",
    "options": [
      "All derived quantities may be represented dimensionally in terms of the base quantities",
      "A base quantity cannot be represented dimensionally in terms of other base quantities",
      "The dimension of a derived quantity is never zero in any base quantity",
      "The dimension of a base quantity in other base quantities is always zero."
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Fundamental principles of dimensional analysis and base quantities.\n⚡ Step-by-Step Derivation:\n1. Base quantities are independent; one base quantity has zero dimension in any other base quantity.\n2. A derived quantity can have zero dimension in one or more base quantities (e.g., velocity [L¹ T⁻¹] has mass dimension zero: M⁰).\n3. Hence statement (3) 'The dimension of a derived quantity is never zero in any base quantity' is INCORRECT.\n💡 Examiner Pro-Tip: Most derived quantities have zero dimension in several base quantities (e.g. force has zero temperature dimension).",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q21",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Medium",
    "questionText": "Two physical quantities of which one is a vector and the other is a scalar having the same dimensional formula are :",
    "question": "Two physical quantities of which one is a vector and the other is a scalar having the same dimensional formula are :",
    "options": [
      "Work and energy",
      "Torque and work",
      "Impulse and momentum",
      "Power and pressure"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Scalar vs vector quantities with identical dimensional formulas.\n⚡ Step-by-Step Derivation:\n1. Torque τ = r × F (vector cross product) ⟹ [τ] = [L][MLT⁻²] = [ML²T⁻²].\n2. Work W = F · d (scalar dot product) ⟹ [W] = [MLT⁻²][L] = [ML²T⁻²].\n3. Both share the exact dimensional formula [ML²T⁻²], but Torque is a vector while Work is a scalar.\n💡 Examiner Pro-Tip: Energy, Work, and Heat are scalars with [ML²T⁻²], whereas Torque is a vector with the same dimensions.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q22",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Medium",
    "questionText": "The equation of a wave is given by Y = A sin[ω(x/v - k)] where ω is the angular velocity and v is the linear velocity. The dimensions of k is",
    "question": "The equation of a wave is given by Y = A sin[ω(x/v - k)] where ω is the angular velocity and v is the linear velocity. The dimensions of k is",
    "options": [
      "[LT]",
      "[T]",
      "[T⁻¹]",
      "[T2]"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Principle of dimensional homogeneity for wave arguments.\n⚡ Step-by-Step Derivation:\n1. The given wave equation is Y = A sin[ω(x/v − k)].\n2. The argument of the sine function is dimensionless.\n3. Inside the bracket, (x/v − k) is being subtracted, so by the principle of homogeneity: [k] = [x / v].\n4. [x] = [L] and [v] = [LT⁻¹].\n5. [k] = [L] / [LT⁻¹] = [T].\n💡 Examiner Pro-Tip: Quantities added or subtracted must always have identical dimensions.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q23",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Units & Systems of Units",
    "subtopic": "Units & Systems of Units",
    "difficulty": "Medium",
    "questionText": "The time dependence of a physical quantity P is given by P = P0 exp(-α t²), where α is a constant and t is time. The constant α",
    "question": "The time dependence of a physical quantity P is given by P = P0 exp(-α t²), where α is a constant and t is time. The constant α",
    "options": [
      "is dimensionless",
      "has dimensions [T⁻²]",
      "has dimensions of P",
      "has dimensions [T2]"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Arguments of exponential functions must be dimensionless.\n⚡ Step-by-Step Derivation:\n1. Given P = P₀ exp(−α t²).\n2. The exponent (−α t²) must be dimensionless: [α t²] = 1 = [M⁰L⁰T⁰].\n3. Therefore, [α] = 1 / [t²] = [T⁻²].\n💡 Examiner Pro-Tip: The exponent in exp(x), e^x, or 10^x is always a pure dimensionless number.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q24",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Medium",
    "questionText": "The dimensional formula of angular velocity is",
    "question": "The dimensional formula of angular velocity is",
    "options": [
      "[M0L0T⁻¹]",
      "[MLT⁻¹]",
      "[M0L0T1]",
      "[ML0T⁻²]"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Angular velocity is defined as the rate of change of angular displacement: ω = dθ / dt.\n⚡ Step-by-Step Derivation:\n1. Angle θ is dimensionless: [θ] = [M⁰L⁰T⁰].\n2. Time t has dimension [T].\n3. [ω] = [θ] / [t] = [T⁻¹] = [M⁰ L⁰ T⁻¹].\n💡 Examiner Pro-Tip: Angular velocity, frequency, and decay constant all share the dimensional formula [T⁻¹].",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q25",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Medium",
    "questionText": "A force F is given by F = at + bt², where t is time. The dimensions of a and b are",
    "question": "A force F is given by F = at + bt², where t is time. The dimensions of a and b are",
    "options": [
      "[M L T⁻³] and [M L T⁻⁴]",
      "[M L T⁻⁴] and [M L T⁻³]",
      "[M L T⁻¹] and [M L T⁻²]",
      "[M L T⁻²] and [M L T0]"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Dimensional homogeneity in force polynomial equations: F = at + bt².\n⚡ Step-by-Step Derivation:\n1. Force [F] = [MLT⁻²].\n2. By homogeneity: [at] = [F] ⟹ [a][T] = [MLT⁻²] ⟹ [a] = [MLT⁻³].\n3. Also: [bt²] = [F] ⟹ [b][T²] = [MLT⁻²] ⟹ [b] = [MLT⁻⁴].\n4. Hence, [a] = [MLT⁻³] and [b] = [MLT⁻⁴].\n💡 Examiner Pro-Tip: Each term added to make a force must individually have dimensions of force.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q26",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Units & Systems of Units",
    "subtopic": "Units & Systems of Units",
    "difficulty": "Medium",
    "questionText": "Which of the following pairs does not have similar dimensions?",
    "question": "Which of the following pairs does not have similar dimensions?",
    "options": [
      "Tension and surface tension",
      "Stress and pressure",
      "Planck's constant and angular momentum",
      "Angle and strain"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Tension is a force, while Surface Tension is force per unit length.\n⚡ Step-by-Step Derivation:\n1. Tension = Force ⟹ [MLT⁻²].\n2. Surface tension = Force / Length = [MLT⁻²] / [L] = [MT⁻²].\n3. These two do NOT have similar dimensions.\n4. Stress and pressure both have [ML⁻¹T⁻²]. Planck's constant and angular momentum both have [ML²T⁻¹]. Angle and strain are both dimensionless [M⁰L⁰T⁰].\n💡 Examiner Pro-Tip: Do not confuse 'Tension' (a pulling force, N) with 'Surface Tension' (N/m).",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q27",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Medium",
    "questionText": "The dimensions of torque are:",
    "question": "The dimensions of torque are:",
    "options": [
      "[ML3L⁻³]",
      "[ML⁻¹T⁻¹]",
      "[ML2T⁻²]",
      "[ML⁻²]"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Torque is the rotational analogue of force: τ = r × F.\n⚡ Step-by-Step Derivation:\n1. Dimensional formula of position vector r is [L].\n2. Dimensional formula of force F is [MLT⁻²].\n3. [τ] = [r][F] = [L][MLT⁻²] = [ML²T⁻²].\n💡 Examiner Pro-Tip: Torque has the same dimensions as Work and Energy [ML²T⁻²], but its SI unit is N·m (never Joules).",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q28",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Medium",
    "questionText": "Dimensions of relative density is",
    "question": "Dimensions of relative density is",
    "options": [
      "kg m-3",
      "[ML⁻³]",
      "dimensionless",
      "[M2 L-6]"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Relative density is the ratio of density of a substance to the density of water at 4°C.\n⚡ Step-by-Step Derivation:\n1. Relative density = (Density of substance) / (Density of water at 4°C).\n2. Dimension = [ML⁻³] / [ML⁻³] = [M⁰L⁰T⁰].\n3. Since it is a ratio of two identical physical quantities, it is completely dimensionless and unitless.\n💡 Examiner Pro-Tip: Specific gravity is another name for relative density and is also dimensionless.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q29",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Medium",
    "questionText": "The dimensions of universal gravitational constant are :-",
    "question": "The dimensions of universal gravitational constant are :-",
    "options": [
      "[ML2T⁻¹]",
      "[M⁻²L3T⁻²]",
      "[M⁻²L2T⁻¹]",
      "[M⁻¹L3T⁻²]"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Universal law of gravitation: F = G m₁ m₂ / r².\n⚡ Step-by-Step Derivation:\n1. Rearrange for G: G = F r² / (m₁ m₂).\n2. Substitute dimensions: [G] = [MLT⁻²][L²] / [M²].\n3. Simplifying: [G] = [M¹⁻² L¹⁺² T⁻²] = [M⁻¹ L³ T⁻²].\n💡 Examiner Pro-Tip: Universal Gravitational Constant G has dimensions [M⁻¹ L³ T⁻²], SI unit N·m²/kg².",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q30",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Medium",
    "questionText": "If dimensions of A and B are different, then which of the following operation is valid ?",
    "question": "If dimensions of A and B are different, then which of the following operation is valid ?",
    "options": [
      "A B",
      "e-A/B",
      "A-B",
      "A+ B ERRORS"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Ideal gas equation: PV = n R T.\n⚡ Step-by-Step Derivation:\n1. Rearrange for R: R = PV / (n T).\n2. [P] = [ML⁻¹T⁻²], [V] = [L³], so [PV] = [Work] = [ML²T⁻²].\n3. [T] = [θ] (or [K]), and n is amount of substance [mol].\n4. Thus, [R] = [ML²T⁻² θ⁻¹ mol⁻¹] or in mechanical/thermal base quantities: [ML²T⁻² θ⁻¹].\n💡 Examiner Pro-Tip: PV represents Energy, so R has dimensions of Energy per Kelvin per mole.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q31",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Error Analysis & Propagation",
    "subtopic": "Error Analysis & Propagation",
    "difficulty": "Medium",
    "questionText": "A quantity is represented by X = M a Lb Tc. The percentage error in measurement of M, L and T are α%, β % and γ % respectively. The percentage error in X would be",
    "question": "A quantity is represented by X = M a Lb Tc. The percentage error in measurement of M, L and T are α%, β % and γ % respectively. The percentage error in X would be",
    "options": [
      "(α a + βb + γc) %",
      "(αa - βb + γc) %",
      "(α a - βb- γc) %",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Pressure, stress, and elastic moduli share the dimensional formula [ML⁻¹T⁻²].\n⚡ Step-by-Step Derivation:\n1. Pressure P = Force / Area = [MLT⁻²] / [L²] = [ML⁻¹T⁻²].\n2. Modulus of elasticity = Stress / Strain = [ML⁻¹T⁻²] / 1 = [ML⁻¹T⁻²].\n3. Force = [MLT⁻²], Energy = [ML²T⁻²], Velocity = [LT⁻¹].\n4. Therefore, [ML⁻¹T⁻²] represents pressure.\n💡 Examiner Pro-Tip: Pressure, Stress, Young's modulus, Bulk modulus, and Shear modulus all share [ML⁻¹T⁻²].",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ]
  },
  {
    "id": "allen-units-ex1-q32",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Error Analysis & Propagation",
    "subtopic": "Error Analysis & Propagation",
    "difficulty": "Medium",
    "questionText": "An experiment measures quantities a, b and c, and X is calculated from X = ab 2/c3. If the percentage error in a, b and c are ±1%, ±3% and ±2% respectively, the percentage error in X will be -",
    "question": "An experiment measures quantities a, b and c, and X is calculated from X = ab 2/c3. If the percentage error in a, b and c are ±1%, ±3% and ±2% respectively, the percentage error in X will be -",
    "options": [
      "±13%",
      "±7%",
      "±4%",
      "±1%"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Stefan-Boltzmann Law: Total radiant energy emitted per unit area per unit time is E = σ T⁴.\n⚡ Step-by-Step Derivation:\n1. σ = E / (A · t · T⁴) where E is energy, A is area, t is time, T is temperature.\n2. [E] = [ML²T⁻²], [A] = [L²], [t] = [T], [T] = [K].\n3. [σ] = [ML²T⁻²] / ([L²][T][K⁴]) = [M¹ L⁰ T⁻³ K⁻⁴].\n💡 Examiner Pro-Tip: SI unit of Stefan's constant σ is W·m⁻²·K⁻⁴.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ]
  },
  {
    "id": "allen-units-ex1-q33",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Errors in Measurement",
    "subtopic": "Errors in Measurement",
    "difficulty": "Medium",
    "questionText": "Zero error of an instrument introduces",
    "question": "Zero error of an instrument introduces",
    "options": [
      "Systematic errors",
      "Random errors",
      "Both",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Classification of measurement errors: Systematic vs Random.\n⚡ Step-by-Step Derivation:\n1. Systematic errors arise from a definite defect in the instrument, calibration, or experimental setup and occur consistently in one direction (always positive or always negative).\n2. Zero error means the scale indicator does not read zero when the measuring faces are in contact.\n3. Every measurement made will be shifted by this constant value; hence it introduces Systematic errors.\n💡 Examiner Pro-Tip: Systematic errors can be eliminated by applying zero correction: True = Measured − (Zero Error).",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ]
  },
  {
    "id": "allen-units-ex1-q34",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Error Analysis & Propagation",
    "subtopic": "Error Analysis & Propagation",
    "difficulty": "Medium",
    "questionText": "What is the fractional error in g calculated from T2 g= π λ ? Given that fractional errors in T and λ are ±x and ±y respectively.",
    "question": "What is the fractional error in g calculated from T2 g= π λ ? Given that fractional errors in T and λ are ±x and ±y respectively.",
    "options": [
      "x + y",
      "x - y",
      "2x + y",
      "2x - y"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Fractional error in acceleration due to gravity from simple pendulum period: T = 2π√(l / g).\n⚡ Step-by-Step Derivation:\n1. Squaring both sides: T² = 4π² l / g ⟹ g = 4π² l / T².\n2. Fractional error: Δg / g = ±(Δl / l + 2 ΔT / T).\n3. Given Δl / l = ±y and ΔT / T = ±x.\n4. Therefore, maximum fractional error in g is ±(y + 2x).\n💡 Examiner Pro-Tip: In error analysis, powers become multipliers: T⁻² contributes 2(ΔT/T) to the relative error.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 420 200\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"420\" height=\"200\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"210\" y=\"24\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#0F172A\">Simple Pendulum Method: g = 4π²(L / T²)</text>\n  \n  <!-- Rigid support -->\n  <rect x=\"150\" y=\"40\" width=\"120\" height=\"10\" fill=\"#475569\" rx=\"2\"/>\n  <line x1=\"140\" y1=\"40\" x2=\"280\" y2=\"40\" stroke=\"#334155\" stroke-width=\"2\"/>\n  \n  <!-- Suspension thread -->\n  <line x1=\"210\" y1=\"50\" x2=\"160\" y2=\"140\" stroke=\"#0284C7\" stroke-width=\"2\"/>\n  <line x1=\"210\" y1=\"50\" x2=\"210\" y2=\"150\" stroke=\"#94A3B8\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n  <line x1=\"210\" y1=\"50\" x2=\"260\" y2=\"140\" stroke=\"#0284C7\" stroke-width=\"1.5\" stroke-dasharray=\"2 2\"/>\n  \n  <!-- Bob -->\n  <circle cx=\"160\" cy=\"140\" r=\"14\" fill=\"#F97316\" stroke=\"#C2410C\" stroke-width=\"1.5\"/>\n  <circle cx=\"210\" cy=\"150\" r=\"14\" fill=\"#FED7AA\" stroke=\"#FB923C\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/>\n  <circle cx=\"260\" cy=\"140\" r=\"14\" fill=\"#FED7AA\" stroke=\"#FB923C\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/>\n  \n  <!-- Labels -->\n  <text x=\"145\" y=\"95\" font-size=\"10\" font-weight=\"bold\" fill=\"#0284C7\">Length (L)</text>\n  <text x=\"210\" y=\"175\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#475569\">Period (T = t / n)</text>\n  \n  <!-- Formula -->\n  <text x=\"210\" y=\"192\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#DC2626\">Relative Error: Δg/g = ΔL/L + 2(ΔT/T)</text>\n</svg>"
  },
  {
    "id": "allen-units-ex1-q35",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Physical World & Measurement",
    "subtopic": "Physical World & Measurement",
    "difficulty": "Medium",
    "questionText": "A thin copper wire of length λ metre increases in length by 2% when heated through 10°C. What is the percentage increase in area when a square copper sheet of length λ metre is heated through 10°C ?",
    "question": "A thin copper wire of length λ metre increases in length by 2% when heated through 10°C. What is the percentage increase in area when a square copper sheet of length λ metre is heated through 10°C ?",
    "options": [
      "4%",
      "8%",
      "16%",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Propagation of maximum percentage error in density: ρ = m / L³.\n⚡ Step-by-Step Derivation:\n1. Density of a cube is ρ = m / V = m / L³.\n2. Maximum relative error: (Δρ / ρ) = (Δm / m) + 3 (ΔL / L).\n3. Multiply by 100 to get percentage error: % error in ρ = (% error in m) + 3 × (% error in L).\n4. % error in ρ = 1.5% + 3 × (1%) = 1.5% + 3.0% = 4.5%.\n💡 Examiner Pro-Tip: Always add relative errors; powers of variables multiply their fractional errors.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q36",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Errors in Measurement",
    "subtopic": "Errors in Measurement",
    "difficulty": "Medium",
    "questionText": "The resistance is VR I= where V = (100 ± 5) volt and I = (10 ± 0.2) ampere. What is the total error in R ?",
    "question": "The resistance is VR I= where V = (100 ± 5) volt and I = (10 ± 0.2) ampere. What is the total error in R ?",
    "options": [
      "5 %",
      "7 %",
      "5.2 %",
      "5 2   %"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Rules for counting significant figures for numbers with a decimal point.\n⚡ Step-by-Step Derivation:\n1. Number given: 0.0006032.\n2. Rule 1: Leading zeros (zeros to the left of the first non-zero digit) are not significant; they only locate the decimal point.\n3. The non-zero digits are 6, 0, 3, 2.\n4. Rule 2: A zero between two non-zero digits is significant (the zero between 6 and 3 is significant).\n5. Total significant figures = 4 (6, 0, 3, and 2).\n💡 Examiner Pro-Tip: Write in scientific notation to avoid confusion: 0.0006032 = 6.032 × 10⁻⁴ (clearly 4 sig figs).",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ]
  },
  {
    "id": "allen-units-ex1-q37",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Errors in Measurement",
    "subtopic": "Errors in Measurement",
    "difficulty": "Medium",
    "questionText": "If error in measuring diameter of a circle is 4 %, the error in circumference of the circle would be :-",
    "question": "If error in measuring diameter of a circle is 4 %, the error in circumference of the circle would be :-",
    "options": [
      "2%",
      "8%",
      "4%",
      "1%"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Counting significant figures in experimental readings.\n⚡ Step-by-Step Derivation:\n1. Given measurement: 1.25 cm.\n2. All non-zero digits (1, 2, 5) are significant.\n3. Total number of significant figures = 3.\n💡 Examiner Pro-Tip: Every digit in a properly recorded measurement (including the last estimated digit) is significant.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ]
  },
  {
    "id": "allen-units-ex1-q38",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Physical World & Measurement",
    "subtopic": "Physical World & Measurement",
    "difficulty": "Medium",
    "questionText": "The external and internal radius of a hollow cylinder are measured to be",
    "question": "The external and internal radius of a hollow cylinder are measured to be",
    "options": [
      ".23 ± 0.01) cm and",
      ".89 ± 0.01)cm. The thickness of the wall of the cylinder is :-",
      "(0.34 ± 0.02) cm",
      "(0.17 ± 0.02) cm"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Propagation of absolute and percentage error in velocity: v = s / t.\n⚡ Step-by-Step Derivation:\n1. Given distance s = (200 ± 5) m and time t = (20 ± 0.2) s.\n2. Nominal velocity v = s / t = 200 m / 20 s = 10 m/s.\n3. Relative error: Δv / v = Δs / s + Δt / t = 5 / 200 + 0.2 / 20 = 0.025 + 0.010 = 0.035.\n4. Absolute error Δv = 0.035 × v = 0.035 × 10 m/s = 0.35 m/s (or 3.5%).\n5. Velocity expressed with error: v = (10 ± 0.35) m/s or ±3.5%.\n💡 Examiner Pro-Tip: For division v = s/t, fractional errors always add up: Δv/v = Δs/s + Δt/t.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q39",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Error Analysis & Propagation",
    "subtopic": "Error Analysis & Propagation",
    "difficulty": "Medium",
    "questionText": "Percentage error in measuring the radius and mass of a solid sphere are 2% & 1% respectively. Then error in measurement of moment of inertia about to its diameter is :-",
    "question": "Percentage error in measuring the radius and mass of a solid sphere are 2% & 1% respectively. Then error in measurement of moment of inertia about to its diameter is :-",
    "options": [
      "3 %",
      "6 %",
      "5 %",
      "4 %"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Acceleration due to gravity from pendulum timing.\n⚡ Step-by-Step Derivation:\n1. Formula: g = 4π² L / T².\n2. Percentage error: (Δg / g) × 100% = [(ΔL / L) + 2 (ΔT / T)] × 100%.\n3. Notice the factor of 2 multiplying the period timing error because T is squared in the denominator.\n💡 Examiner Pro-Tip: Timing error in a pendulum experiment contributes twice as heavily as length error.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ]
  },
  {
    "id": "allen-units-ex1-q40",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Errors in Measurement",
    "subtopic": "Errors in Measurement",
    "difficulty": "Medium",
    "questionText": "The heat generated in a circuit is dependent upon the resistance, current and time for which the current is flown. If the error in measuring the above are as 1%, 2% and 1% the maximum error in measuring heat will be",
    "question": "The heat generated in a circuit is dependent upon the resistance, current and time for which the current is flown. If the error in measuring the above are as 1%, 2% and 1% the maximum error in measuring heat will be",
    "options": [
      "2%",
      "3%",
      "6%",
      "1%"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Accuracy vs Precision in measurement.\n⚡ Step-by-Step Derivation:\n1. Precision depends on the least count of the measuring instrument (more decimal places = higher precision).\n2. Accuracy represents how close the measured value is to the true value.\n3. A measurement with smaller least count provides greater precision.\n💡 Examiner Pro-Tip: Precision is determined by the measuring instrument's resolution; accuracy depends on systematic errors.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ]
  },
  {
    "id": "allen-units-ex1-q41",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Error Analysis & Propagation",
    "subtopic": "Error Analysis & Propagation",
    "difficulty": "Medium",
    "questionText": "The percentage errors in the measurement of mass and speed are 2% and 3% respectively. How much will be the maximum error in the estimate of kinetic energy obtained by measuring mass and speed ?",
    "question": "The percentage errors in the measurement of mass and speed are 2% and 3% respectively. How much will be the maximum error in the estimate of kinetic energy obtained by measuring mass and speed ?",
    "options": [
      "11 %",
      "8 %",
      "5 %",
      "1 %"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Significant figure rules for terminal/trailing zeros after a decimal point.\n⚡ Step-by-Step Derivation:\n1. Number given: 0.06900.\n2. Leading zeros (0.0...) before the first non-zero digit (6) are not significant.\n3. Non-zero digits 6 and 9 are significant.\n4. Trailing zeros to the right of the decimal point in 0.06900 are significant (they indicate the precision of the instrument).\n5. Total significant figures = 4 (6, 9, 0, 0).\n💡 Examiner Pro-Tip: Trailing zeros after a decimal point are ALWAYS significant (e.g. 4.500 has 4 sig figs).",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ]
  },
  {
    "id": "allen-units-ex1-q42",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Error Analysis & Propagation",
    "subtopic": "Error Analysis & Propagation",
    "difficulty": "Medium",
    "questionText": "While measuring acceleration due to gravity by a simple pendulum a student makes a positive error of 1% in the length of the pendulum and a negative error of 3% in the value of the time period. His percentage error in the measurement of the value of g will be -",
    "question": "While measuring acceleration due to gravity by a simple pendulum a student makes a positive error of 1% in the length of the pendulum and a negative error of 3% in the value of the time period. His percentage error in the measurement of the value of g will be -",
    "options": [
      "2 %",
      "4 %",
      "7 %",
      "10 %"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Rounding off rules for digits followed by a number greater than 5.\n⚡ Step-by-Step Derivation:\n1. Number given: 2.746.\n2. We wish to round off to 3 significant figures (up to the hundredths digit '4').\n3. The digit to be dropped is 6, which is greater than 5.\n4. By standard rounding rules, if the dropped digit is > 5, the preceding digit is increased by 1.\n5. Preceding digit 4 becomes 5 ⟹ 2.75.\n💡 Examiner Pro-Tip: When the dropping digit is > 5, simply add 1 to the preceding digit.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ]
  },
  {
    "id": "allen-units-ex1-q43",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Errors in Measurement",
    "subtopic": "Errors in Measurement",
    "difficulty": "Medium",
    "questionText": "The pressure on a square plate is measured by measuring the force on the plate and the length of the sides of the plate. If the maximum error in the measurement of force and length are respectively 4% and 2%, the maximum error in the measurement of pressure is -",
    "question": "The pressure on a square plate is measured by measuring the force on the plate and the length of the sides of the plate. If the maximum error in the measurement of force and length are respectively 4% and 2%, the maximum error in the measurement of pressure is -",
    "options": [
      "1%",
      "2%",
      "6%",
      "8%"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Rounding off when the dropping digit is exactly 5 followed by zeros (Even-Odd Rule).\n⚡ Step-by-Step Derivation:\n1. For 2.735: Dropping digit is 5. The preceding digit is 3 (odd). For odd preceding digit, increase by 1 ⟹ 2.74.\n2. For 2.745: Dropping digit is 5. The preceding digit is 4 (even). For even preceding digit, leave unchanged ⟹ 2.74.\n3. Both values round off to 2.74 and 2.74.\n💡 Examiner Pro-Tip: NCERT Rounding Rule: If the digit to be dropped is 5, round to the nearest EVEN number.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ]
  },
  {
    "id": "allen-units-ex1-q44",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Errors in Measurement",
    "subtopic": "Errors in Measurement",
    "difficulty": "Medium",
    "questionText": "The error in measuring the side of a cub e is ±1%. The error in the calculation of the volume of the cube will be about",
    "question": "The error in measuring the side of a cub e is ±1%. The error in the calculation of the volume of the cube will be about",
    "options": [
      "±0.001 %",
      "± 1 %",
      "±6 %",
      "±3 %"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Addition and subtraction significant figure rule: The result must have no more decimal places than the measurement with the least decimal places.\n⚡ Step-by-Step Derivation:\n1. Given numbers: 436.32 (2 decimal places), 227.2 (1 decimal place), and 0.301 (3 decimal places).\n2. The least number of decimal places is 1 (in 227.2).\n3. Exact arithmetic sum: 436.32 + 227.2 + 0.301 = 663.821.\n4. Rounding off to 1 decimal place gives 663.8.\n💡 Examiner Pro-Tip: For addition/subtraction, look at DECIMAL PLACES, not total significant figures.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ]
  },
  {
    "id": "allen-units-ex1-q45",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Physical World & Measurement",
    "subtopic": "Physical World & Measurement",
    "difficulty": "Medium",
    "questionText": "When a copper sphere is heated, maximum percentage change will be observed in-",
    "question": "When a copper sphere is heated, maximum percentage change will be observed in-",
    "options": [
      "radius",
      "area",
      "volume",
      "none of these"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Error propagation in the volume of a sphere: V = (4/3) π r³.\n⚡ Step-by-Step Derivation:\n1. Formula: V = (4/3) π r³.\n2. Relative error: ΔV / V = 3 (Δr / r).\n3. The constant (4/3)π is exact and has zero error.\n4. Percentage error in volume is 3 times the percentage error in radius.\n💡 Examiner Pro-Tip: Powers always multiply relative errors: for r³, the error multiplier is 3.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q46",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Error Analysis & Propagation",
    "subtopic": "Error Analysis & Propagation",
    "difficulty": "Medium",
    "questionText": "The resistance R of a wire is given by the relation R = 2r ρ π λ . Percentage error in the measurement of ρ, λ and r is 1%, 2 % and 3 % respectively. Then the percentage error in the measurement of R is",
    "question": "The resistance R of a wire is given by the relation R = 2r ρ π λ . Percentage error in the measurement of ρ, λ and r is 1%, 2 % and 3 % respectively. Then the percentage error in the measurement of R is",
    "options": [
      "6%",
      "9%",
      "8%",
      "10%"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: General power rule for fractional error propagation in a function x = a^n.\n⚡ Step-by-Step Derivation:\n1. Taking natural logarithm on both sides: ln(x) = n ln(a).\n2. Differentiating: dx / x = n (da / a).\n3. In fractional error notation: Δx / x = n (Δa / a).\n4. Hence, the fractional error is n times the fractional error in a.\n💡 Examiner Pro-Tip: Whether n is positive or negative, relative errors always add: Δx/x = |n|(Δa/a).",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ]
  },
  {
    "id": "allen-units-ex1-q47",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Significant Figures & Rounding Off",
    "subtopic": "Significant Figures & Rounding Off",
    "difficulty": "Medium",
    "questionText": "Which of the following has the highest number of significant figures ?",
    "question": "Which of the following has the highest number of significant figures ?",
    "options": [
      "0.007 m²",
      "2.64 × 1024 kg",
      "0.0006032 m²",
      "6.3200 J"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Evaluating significant figures across different representations.\n⚡ Step-by-Step Derivation:\n1. (1) 0.007 m²: 1 significant figure (leading zeros not significant).\n2. (2) 2.64 × 10²⁴ kg: 3 significant figures (2, 6, 4; power of 10 does not affect sig figs).\n3. (3) 0.0006032 m⁻²: 4 significant figures (6, 0, 3, 2).\n4. (4) 6.3200 J: 5 significant figures (6, 3, 2 and two trailing zeros after decimal).\n5. Choice with 5 significant figures has the highest count.\n💡 Examiner Pro-Tip: Trailing zeros after decimal are significant; powers of 10 are never significant.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex1-q48",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Error Analysis & Propagation",
    "subtopic": "Error Analysis & Propagation",
    "difficulty": "Medium",
    "questionText": "A physical quantity X is given by X = 322k mn λ . The percentage error in the measurements of k,λ, m and n are 1%, 2%, 3% and 4% respectively. The value of X is uncertain by",
    "question": "A physical quantity X is given by X = 322k mn λ . The percentage error in the measurements of k,λ, m and n are 1%, 2%, 3% and 4% respectively. The value of X is uncertain by",
    "options": [
      "8 %",
      "10 %",
      "12 %",
      "None MEASUREMENT"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Least count of a measuring instrument.\n⚡ Step-by-Step Derivation:\n1. The least count is the smallest value that can be measured directly by the instrument.\n2. A smaller least count allows measurements with finer resolution and smaller absolute uncertainty.\n3. Therefore, least count directly determines the precision of the instrument.\n💡 Examiner Pro-Tip: Least count determines precision, while systematic calibration determines accuracy.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ]
  },
  {
    "id": "allen-units-ex1-q49",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Vernier Callipers & Least Count",
    "subtopic": "Vernier Callipers & Least Count",
    "difficulty": "Medium",
    "questionText": "In a vernier callipers, N divisions of vernier scale coincide with (N - 1) divisions of main scale (in which 1 division represents 1mm). The least count of the instrument in cm should be",
    "question": "In a vernier callipers, N divisions of vernier scale coincide with (N - 1) divisions of main scale (in which 1 division represents 1mm). The least count of the instrument in cm should be",
    "options": [
      "N",
      "N - 1",
      "1 / (10N)",
      "1 / (N − 1)"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Principle of Vernier Callipers: Least Count = 1 MSD − 1 VSD.\n⚡ Step-by-Step Derivation:\n1. Given: N divisions of vernier scale coincide with (N − 1) divisions of main scale.\n2. N VSD = (N − 1) MSD ⟹ 1 VSD = (N − 1) / N MSD.\n3. Least Count (LC) = 1 MSD − 1 VSD = 1 MSD − (N − 1)/N MSD = (1 / N) MSD.\n4. Given 1 MSD = 1 mm = 0.1 cm = 1/10 cm.\n5. Therefore, LC = (1 / N) × (1/10 cm) = 1 / (10N) cm.\n💡 Examiner Pro-Tip: Be alert to units: 1/N mm = 1/(10N) cm.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Vernier Callipers"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 520 180\" class=\"w-full max-w-lg mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"520\" height=\"180\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"260\" y=\"24\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#0F172A\">Vernier Callipers Scale Principle (LC = 1 MSD − 1 VSD)</text>\n  \n  <!-- Main Scale Body -->\n  <rect x=\"30\" y=\"45\" width=\"460\" height=\"42\" fill=\"#E2E8F0\" stroke=\"#475569\" stroke-width=\"1.5\" rx=\"3\"/>\n  <!-- Main Scale Graduations (0 to 15 mm) -->\n  <line x1=\"40\" y1=\"45\" x2=\"40\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"40\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">0</text>\n  <line x1=\"68\" y1=\"45\" x2=\"68\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"96\" y1=\"45\" x2=\"96\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"124\" y1=\"45\" x2=\"124\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"152\" y1=\"45\" x2=\"152\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"180\" y1=\"45\" x2=\"180\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"180\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">5</text>\n  <line x1=\"208\" y1=\"45\" x2=\"208\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"236\" y1=\"45\" x2=\"236\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"264\" y1=\"45\" x2=\"264\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"292\" y1=\"45\" x2=\"292\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"320\" y1=\"45\" x2=\"320\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"320\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">10</text>\n  <line x1=\"348\" y1=\"45\" x2=\"348\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"376\" y1=\"45\" x2=\"376\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"404\" y1=\"45\" x2=\"404\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"432\" y1=\"45\" x2=\"432\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"460\" y1=\"45\" x2=\"460\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"460\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">15</text>\n  <text x=\"480\" y=\"65\" font-size=\"10\" font-weight=\"bold\" fill=\"#475569\">Main Scale (mm)</text>\n  \n  <!-- Vernier Sliding Scale -->\n  <rect x=\"96\" y=\"87\" width=\"280\" height=\"42\" fill=\"#FEF08A\" stroke=\"#CA8A04\" stroke-width=\"1.5\" rx=\"3\"/>\n  <line x1=\"105.0\" y1=\"87\" x2=\"105.0\" y2=\"107\" stroke=\"#854D0E\" stroke-width=\"1.8\"/>\n  <text x=\"105.0\" y=\"120\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">0</text>\n  <line x1=\"130.2\" y1=\"87\" x2=\"130.2\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"155.4\" y1=\"87\" x2=\"155.4\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"180.6\" y1=\"87\" x2=\"180.6\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"205.8\" y1=\"87\" x2=\"205.8\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"231.0\" y1=\"87\" x2=\"231.0\" y2=\"107\" stroke=\"#854D0E\" stroke-width=\"1.8\"/>\n  <text x=\"231.0\" y=\"120\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">5</text>\n  <line x1=\"256.2\" y1=\"87\" x2=\"256.2\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"281.4\" y1=\"87\" x2=\"281.4\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"306.6\" y1=\"87\" x2=\"306.6\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"331.79999999999995\" y1=\"87\" x2=\"331.79999999999995\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"357.0\" y1=\"87\" x2=\"357.0\" y2=\"107\" stroke=\"#854D0E\" stroke-width=\"1.8\"/>\n  <text x=\"357.0\" y=\"120\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">10</text>\n  <text x=\"390\" y=\"112\" font-size=\"10\" font-weight=\"bold\" fill=\"#854D0E\">Vernier Scale (10 VSD = 9 MSD)</text>\n  \n  <!-- Indicator of Coincidence -->\n  <line x1=\"332\" y1=\"40\" x2=\"332\" y2=\"135\" stroke=\"#DC2626\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>\n  <circle cx=\"332\" cy=\"87\" r=\"4\" fill=\"#DC2626\"/>\n  <text x=\"332\" y=\"150\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#DC2626\">Coincidence Mark</text>\n  \n  <!-- Least count formula label -->\n  <text x=\"260\" y=\"170\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">Least Count = 1 MSD − (N−1)/N MSD = 1/N MSD</text>\n</svg>"
  },
  {
    "id": "allen-units-ex1-q50",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Vernier Callipers & Least Count",
    "subtopic": "Vernier Callipers & Least Count",
    "difficulty": "Medium",
    "questionText": "A vernier callipers has 20 divisions on the vernier scale which coincide with 19 divisions on the main scale. The least count of the instrument is 0.1 mm. The main scale divisions are of",
    "question": "A vernier callipers has 20 divisions on the vernier scale which coincide with 19 divisions on the main scale. The least count of the instrument is 0.1 mm. The main scale divisions are of",
    "options": [
      "0.5 mm",
      "1 mm",
      "2 mm",
      "1/4 mm"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Reverse calculation of Main Scale Division from Least Count and Vernier coincidence.\n⚡ Step-by-Step Derivation:\n1. Given: 20 VSD = 19 MSD ⟹ 1 VSD = (19/20) MSD.\n2. Least Count LC = 1 MSD − 1 VSD = (1 − 19/20) MSD = (1/20) MSD.\n3. Given LC = 0.1 mm.\n4. Therefore: (1/20) MSD = 0.1 mm ⟹ 1 MSD = 20 × 0.1 mm = 2 mm.\n💡 Examiner Pro-Tip: 1 MSD = N × (Least Count) when N VSD = (N-1) MSD.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Vernier Callipers"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 520 180\" class=\"w-full max-w-lg mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"520\" height=\"180\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"260\" y=\"24\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#0F172A\">Vernier Callipers Scale Principle (LC = 1 MSD − 1 VSD)</text>\n  \n  <!-- Main Scale Body -->\n  <rect x=\"30\" y=\"45\" width=\"460\" height=\"42\" fill=\"#E2E8F0\" stroke=\"#475569\" stroke-width=\"1.5\" rx=\"3\"/>\n  <!-- Main Scale Graduations (0 to 15 mm) -->\n  <line x1=\"40\" y1=\"45\" x2=\"40\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"40\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">0</text>\n  <line x1=\"68\" y1=\"45\" x2=\"68\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"96\" y1=\"45\" x2=\"96\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"124\" y1=\"45\" x2=\"124\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"152\" y1=\"45\" x2=\"152\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"180\" y1=\"45\" x2=\"180\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"180\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">5</text>\n  <line x1=\"208\" y1=\"45\" x2=\"208\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"236\" y1=\"45\" x2=\"236\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"264\" y1=\"45\" x2=\"264\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"292\" y1=\"45\" x2=\"292\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"320\" y1=\"45\" x2=\"320\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"320\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">10</text>\n  <line x1=\"348\" y1=\"45\" x2=\"348\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"376\" y1=\"45\" x2=\"376\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"404\" y1=\"45\" x2=\"404\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"432\" y1=\"45\" x2=\"432\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"460\" y1=\"45\" x2=\"460\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"460\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">15</text>\n  <text x=\"480\" y=\"65\" font-size=\"10\" font-weight=\"bold\" fill=\"#475569\">Main Scale (mm)</text>\n  \n  <!-- Vernier Sliding Scale -->\n  <rect x=\"96\" y=\"87\" width=\"280\" height=\"42\" fill=\"#FEF08A\" stroke=\"#CA8A04\" stroke-width=\"1.5\" rx=\"3\"/>\n  <line x1=\"105.0\" y1=\"87\" x2=\"105.0\" y2=\"107\" stroke=\"#854D0E\" stroke-width=\"1.8\"/>\n  <text x=\"105.0\" y=\"120\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">0</text>\n  <line x1=\"130.2\" y1=\"87\" x2=\"130.2\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"155.4\" y1=\"87\" x2=\"155.4\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"180.6\" y1=\"87\" x2=\"180.6\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"205.8\" y1=\"87\" x2=\"205.8\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"231.0\" y1=\"87\" x2=\"231.0\" y2=\"107\" stroke=\"#854D0E\" stroke-width=\"1.8\"/>\n  <text x=\"231.0\" y=\"120\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">5</text>\n  <line x1=\"256.2\" y1=\"87\" x2=\"256.2\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"281.4\" y1=\"87\" x2=\"281.4\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"306.6\" y1=\"87\" x2=\"306.6\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"331.79999999999995\" y1=\"87\" x2=\"331.79999999999995\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"357.0\" y1=\"87\" x2=\"357.0\" y2=\"107\" stroke=\"#854D0E\" stroke-width=\"1.8\"/>\n  <text x=\"357.0\" y=\"120\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">10</text>\n  <text x=\"390\" y=\"112\" font-size=\"10\" font-weight=\"bold\" fill=\"#854D0E\">Vernier Scale (10 VSD = 9 MSD)</text>\n  \n  <!-- Indicator of Coincidence -->\n  <line x1=\"332\" y1=\"40\" x2=\"332\" y2=\"135\" stroke=\"#DC2626\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>\n  <circle cx=\"332\" cy=\"87\" r=\"4\" fill=\"#DC2626\"/>\n  <text x=\"332\" y=\"150\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#DC2626\">Coincidence Mark</text>\n  \n  <!-- Least count formula label -->\n  <text x=\"260\" y=\"170\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">Least Count = 1 MSD − (N−1)/N MSD = 1/N MSD</text>\n</svg>"
  },
  {
    "id": "allen-units-ex1-q51",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Vernier Callipers & Least Count",
    "subtopic": "Vernier Callipers & Least Count",
    "difficulty": "Medium",
    "questionText": "One centimetre on the main scale of vernier callipers is divided into ten equal parts. If 10 divisions of vernier scale coincide with 8 s mall divisions of the main scale, the least count of the callipers is",
    "question": "One centimetre on the main scale of vernier callipers is divided into ten equal parts. If 10 divisions of vernier scale coincide with 8 s mall divisions of the main scale, the least count of the callipers is",
    "options": [
      "0.01 cm",
      "0.02 cm",
      "0.05 cm",
      "0.005 cm"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Calculation of Least Count with non-standard Vernier division ratio.\n⚡ Step-by-Step Derivation:\n1. 1 cm on main scale is divided into 10 equal parts ⟹ 1 MSD = 1 cm / 10 = 0.1 cm = 1 mm.\n2. Given: 10 VSD coincide with 8 small divisions of main scale (8 MSD).\n3. 1 VSD = 8 / 10 MSD = 0.8 MSD.\n4. Least Count (LC) = 1 MSD − 1 VSD = 1 MSD − 0.8 MSD = 0.2 MSD.\n5. In cm: LC = 0.2 × 0.1 cm = 0.02 cm.\n💡 Examiner Pro-Tip: Always use the fundamental definition LC = 1 MSD − 1 VSD when VSD ratio is not (N-1)/N.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Vernier Callipers"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 520 180\" class=\"w-full max-w-lg mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"520\" height=\"180\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"260\" y=\"24\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#0F172A\">Vernier Callipers Scale Principle (LC = 1 MSD − 1 VSD)</text>\n  \n  <!-- Main Scale Body -->\n  <rect x=\"30\" y=\"45\" width=\"460\" height=\"42\" fill=\"#E2E8F0\" stroke=\"#475569\" stroke-width=\"1.5\" rx=\"3\"/>\n  <!-- Main Scale Graduations (0 to 15 mm) -->\n  <line x1=\"40\" y1=\"45\" x2=\"40\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"40\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">0</text>\n  <line x1=\"68\" y1=\"45\" x2=\"68\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"96\" y1=\"45\" x2=\"96\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"124\" y1=\"45\" x2=\"124\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"152\" y1=\"45\" x2=\"152\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"180\" y1=\"45\" x2=\"180\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"180\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">5</text>\n  <line x1=\"208\" y1=\"45\" x2=\"208\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"236\" y1=\"45\" x2=\"236\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"264\" y1=\"45\" x2=\"264\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"292\" y1=\"45\" x2=\"292\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"320\" y1=\"45\" x2=\"320\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"320\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">10</text>\n  <line x1=\"348\" y1=\"45\" x2=\"348\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"376\" y1=\"45\" x2=\"376\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"404\" y1=\"45\" x2=\"404\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"432\" y1=\"45\" x2=\"432\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"460\" y1=\"45\" x2=\"460\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"460\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">15</text>\n  <text x=\"480\" y=\"65\" font-size=\"10\" font-weight=\"bold\" fill=\"#475569\">Main Scale (mm)</text>\n  \n  <!-- Vernier Sliding Scale -->\n  <rect x=\"96\" y=\"87\" width=\"280\" height=\"42\" fill=\"#FEF08A\" stroke=\"#CA8A04\" stroke-width=\"1.5\" rx=\"3\"/>\n  <line x1=\"105.0\" y1=\"87\" x2=\"105.0\" y2=\"107\" stroke=\"#854D0E\" stroke-width=\"1.8\"/>\n  <text x=\"105.0\" y=\"120\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">0</text>\n  <line x1=\"130.2\" y1=\"87\" x2=\"130.2\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"155.4\" y1=\"87\" x2=\"155.4\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"180.6\" y1=\"87\" x2=\"180.6\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"205.8\" y1=\"87\" x2=\"205.8\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"231.0\" y1=\"87\" x2=\"231.0\" y2=\"107\" stroke=\"#854D0E\" stroke-width=\"1.8\"/>\n  <text x=\"231.0\" y=\"120\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">5</text>\n  <line x1=\"256.2\" y1=\"87\" x2=\"256.2\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"281.4\" y1=\"87\" x2=\"281.4\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"306.6\" y1=\"87\" x2=\"306.6\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"331.79999999999995\" y1=\"87\" x2=\"331.79999999999995\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"357.0\" y1=\"87\" x2=\"357.0\" y2=\"107\" stroke=\"#854D0E\" stroke-width=\"1.8\"/>\n  <text x=\"357.0\" y=\"120\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">10</text>\n  <text x=\"390\" y=\"112\" font-size=\"10\" font-weight=\"bold\" fill=\"#854D0E\">Vernier Scale (10 VSD = 9 MSD)</text>\n  \n  <!-- Indicator of Coincidence -->\n  <line x1=\"332\" y1=\"40\" x2=\"332\" y2=\"135\" stroke=\"#DC2626\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>\n  <circle cx=\"332\" cy=\"87\" r=\"4\" fill=\"#DC2626\"/>\n  <text x=\"332\" y=\"150\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#DC2626\">Coincidence Mark</text>\n  \n  <!-- Least count formula label -->\n  <text x=\"260\" y=\"170\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">Least Count = 1 MSD − (N−1)/N MSD = 1/N MSD</text>\n</svg>"
  },
  {
    "id": "allen-units-ex1-q52",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Screw Gauge & Zero Error",
    "subtopic": "Screw Gauge & Zero Error",
    "difficulty": "Medium",
    "questionText": "A student measured the diameter of a wire using a screw gauge with least count 0.001 cm and listed the meas urements. The correct measurement is -",
    "question": "A student measured the diameter of a wire using a screw gauge with least count 0.001 cm and listed the meas urements. The correct measurement is -",
    "options": [
      "5.3 cm",
      "5.32 cm",
      "5.320 cm",
      "5.3200 cm"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Reporting measurements in accordance with an instrument's Least Count.\n⚡ Step-by-Step Derivation:\n1. The least count of the screw gauge is given as 0.001 cm (3 decimal places in cm).\n2. Any reliable reading taken with this instrument must be reported to exactly the same number of decimal places as its least count.\n3. Among the options:\n   - 5.3 cm (1 decimal place)\n   - 5.32 cm (2 decimal places)\n   - 5.320 cm (3 decimal places)\n   - 5.3200 cm (4 decimal places)\n4. Therefore, the correctly reported measurement is 5.320 cm.\n💡 Examiner Pro-Tip: The number of decimal places in a reading must match the decimal places of the instrument's least count.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Screw Gauge"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 540 200\" class=\"w-full max-w-lg mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"540\" height=\"200\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"24\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#0F172A\">Screw Gauge / Micrometer Reading Principle</text>\n  \n  <!-- U-frame / Anvil & Spindle -->\n  <path d=\"M 50,70 L 50,140 Q 50,165 85,165 L 140,165 Q 175,165 175,140 L 175,110\" fill=\"none\" stroke=\"#475569\" stroke-width=\"10\"/>\n  <rect x=\"75\" y=\"96\" width=\"12\" height=\"28\" fill=\"#94A3B8\" stroke=\"#334155\" stroke-width=\"1\"/>\n  <text x=\"81\" y=\"85\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\">Anvil</text>\n  \n  <!-- Spindle / Object gap -->\n  <rect x=\"135\" y=\"102\" width=\"40\" height=\"16\" fill=\"#CBD5E1\" stroke=\"#334155\" stroke-width=\"1\"/>\n  <circle cx=\"112\" cy=\"110\" r=\"10\" fill=\"#F87171\" stroke=\"#DC2626\" stroke-width=\"1.5\"/>\n  <text x=\"112\" y=\"135\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#DC2626\">Wire / Ball</text>\n  \n  <!-- Main Sleeve / Pitch Scale -->\n  <rect x=\"175\" y=\"92\" width=\"130\" height=\"36\" fill=\"#E2E8F0\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <line x1=\"175\" y1=\"110\" x2=\"305\" y2=\"110\" stroke=\"#0F172A\" stroke-width=\"1.5\"/> <!-- Reference Baseline -->\n  <!-- Pitch Scale marks: 0, 1, 2, 3, 4, 5 mm above, 0.5 mm below -->\n  <line x1=\"185\" y1=\"96\" x2=\"185\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <text x=\"185\" y=\"93\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#334155\">0</text>\n  <line x1=\"201\" y1=\"96\" x2=\"201\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"217\" y1=\"96\" x2=\"217\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"233\" y1=\"96\" x2=\"233\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"249\" y1=\"96\" x2=\"249\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"265\" y1=\"96\" x2=\"265\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <text x=\"265\" y=\"93\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#334155\">5</text>\n  <line x1=\"281\" y1=\"96\" x2=\"281\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"297\" y1=\"96\" x2=\"297\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <text x=\"240\" y=\"78\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\">Main Scale / Pitch Scale</text>\n  \n  <!-- Rotating Thimble / Circular Scale -->\n  <polygon points=\"305,82 320,82 320,86 420,86 420,134 320,134 320,138 305,138\" fill=\"#FEF08A\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n  <!-- Circular scale divisions -->\n  <line x1=\"305\" y1=\"88\" x2=\"318\" y2=\"88\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <text x=\"325\" y=\"91\" font-size=\"7\" font-weight=\"bold\" fill=\"#854D0E\">40</text>\n  <line x1=\"305\" y1=\"94\" x2=\"318\" y2=\"94\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"100\" x2=\"318\" y2=\"100\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"106\" x2=\"318\" y2=\"106\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <text x=\"325\" y=\"109\" font-size=\"7\" font-weight=\"bold\" fill=\"#854D0E\">25</text>\n  <line x1=\"305\" y1=\"112\" x2=\"318\" y2=\"112\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"118\" x2=\"318\" y2=\"118\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"124\" x2=\"318\" y2=\"124\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <text x=\"325\" y=\"127\" font-size=\"7\" font-weight=\"bold\" fill=\"#854D0E\">10</text>\n  <line x1=\"305\" y1=\"130\" x2=\"318\" y2=\"130\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"136\" x2=\"318\" y2=\"136\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <!-- Ratchet -->\n  <rect x=\"420\" y=\"96\" width=\"45\" height=\"28\" fill=\"#94A3B8\" stroke=\"#334155\" stroke-width=\"1.5\" rx=\"2\"/>\n  <text x=\"442\" y=\"114\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#1E293B\">Ratchet</text>\n  \n  <!-- Reading and Error formula -->\n  <text x=\"270\" y=\"185\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">Total Reading = MSR + (CSR × LC) − (Zero Error)</text>\n</svg>"
  }
];

export const ALLEN_UNITS_EXERCISE_2_QUESTIONS: Question[] = [
  {
    "id": "allen-units-ex2-q01",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Medium",
    "questionText": "The velocity v of a particle at time t is given by v = at + b tc+ , where a, b and c are constants. The dimensions of a, b and c are respectively :-",
    "question": "The velocity v of a particle at time t is given by v = at + b tc+ , where a, b and c are constants. The dimensions of a, b and c are respectively :-",
    "options": [
      "LT⁻², L and T",
      "L2, T and LT2",
      "LT2, LT and L",
      "L, LT and T2"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Speed of electromagnetic radiation in free space is given by Maxwell's relation: c = 1 / √(μ₀ ε₀).\n⚡ Step-by-Step Derivation:\n1. (μ₀ ε₀)⁻¹/² = 1 / √(μ₀ ε₀) = c (speed of light in vacuum).\n2. Speed of light has the dimensions of velocity: [c] = [LT⁻¹].\n3. Base units: [M⁰ L¹ T⁻¹].\n💡 Examiner Pro-Tip: Whenever (μ₀ ε₀)⁻¹/² appears, immediately recognize it as the speed of light c = 3 × 10⁸ m/s.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q02",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Medium",
    "questionText": "Dimensions of electrical resistance is :-",
    "question": "Dimensions of electrical resistance is :-",
    "options": [
      "[ML2 T⁻³ A⁻¹]",
      "[ML2 T⁻³ A⁻²]",
      "[ML3 T⁻³ A⁻²]",
      "[ML⁻¹ L3 T3 A2]"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Universal Gravitational Constant G from Newton's law of gravitation: F = G m₁ m₂ / r².\n⚡ Step-by-Step Derivation:\n1. G = F r² / (m₁ m₂).\n2. Substitute dimensions: [G] = [MLT⁻²][L²] / [M²].\n3. [G] = [M⁻¹ L³ T⁻²].\n💡 Examiner Pro-Tip: G has SI units N·m²/kg² and dimensions [M⁻¹ L³ T⁻²]. Repeated 6+ times in AIPMT/NEET.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q03",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Units & Systems of Units",
    "subtopic": "Units & Systems of Units",
    "difficulty": "Hard",
    "questionText": "Which two of the following five physical parameters have the same dimensions ? (a) energy density (b) refractive index (c) dielectric constant (d) Young's modulus (e) magnetic field",
    "question": "Which two of the following five physical parameters have the same dimensions ? (a) energy density (b) refractive index (c) dielectric constant (d) Young's modulus (e) magnetic field",
    "options": [
      "(a), (d)",
      "(a), (e)",
      "(b), (d)",
      "(c), (e)"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Planck's constant h relates photon energy to frequency: E = hν.\n⚡ Step-by-Step Derivation:\n1. [h] = [E] / [ν] = [ML²T⁻²] / [T⁻¹] = [ML²T⁻¹].\n2. Angular momentum L = mvr ⟹ [L] = [M][LT⁻¹][L] = [ML²T⁻¹].\n3. Both Planck's constant and angular momentum have identical dimensions [ML²T⁻¹].\n💡 Examiner Pro-Tip: By Bohr's postulate, L = n(h / 2π), confirming [Angular Momentum] = [h].",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q04",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Errors in Measurement",
    "subtopic": "Errors in Measurement",
    "difficulty": "Medium",
    "questionText": "If the error in the measurement of radius of a sphere is 2 % then the error in the determination of volume of the sphere will be :-",
    "question": "If the error in the measurement of radius of a sphere is 2 % then the error in the determination of volume of the sphere will be :-",
    "options": [
      "8%",
      "2 %",
      "4 %",
      "6%"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Magnetic force per unit length between parallel current-carrying wires: F / L = (μ₀ I₁ I₂) / (2π d).\n⚡ Step-by-Step Derivation:\n1. Rearrange for μ₀: μ₀ = 2π d (F / L) / (I₁ I₂).\n2. [μ₀] = [L] · ([MLT⁻²] / [L]) / [A²] = [MLT⁻² A⁻²].\n3. Alternatively from B = μ₀ I / (2R): [B] = [MT⁻² A⁻¹] ⟹ [μ₀] = [B][L]/[A] = [MLT⁻² A⁻²].\n💡 Examiner Pro-Tip: μ₀ has SI unit T·m/A or N/A² or H/m, with dimensions [M L T⁻² A⁻²].",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ]
  },
  {
    "id": "allen-units-ex2-q05",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Medium",
    "questionText": "If the dimensions of a physical quantity are given by MaLbTc, then the physical quantity will be :",
    "question": "If the dimensions of a physical quantity are given by MaLbTc, then the physical quantity will be :",
    "options": [
      "Force if a = 0, b = -1, c = - 2",
      "Pressure if a = 1, b = - 1, c = - 2",
      "Velocity if a = 1, b = 0, c = - 1",
      "Acceleration if a = 1, b = 1, c = - 2"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Ratio of Planck's constant h to Moment of Inertia I.\n⚡ Step-by-Step Derivation:\n1. [h] = [ML²T⁻¹] (J·s).\n2. [I] = [ML²] (kg·m²).\n3. Ratio [h / I] = [ML²T⁻¹] / [ML²] = [T⁻¹].\n4. [T⁻¹] is the dimension of frequency (or angular velocity).\n💡 Examiner Pro-Tip: Frequency ν = 1 / T has dimension [T⁻¹].",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q06",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Hard",
    "questionText": "The dimensions of 2 0 1 E2 ε , where ε₀ is permittivity of free sp ace and E is electric field, is:-",
    "question": "The dimensions of 2 0 1 E2 ε , where ε₀ is permittivity of free sp ace and E is electric field, is:-",
    "options": [
      "[MLT⁻¹]",
      "[ML2T⁻²]",
      "[ML⁻¹T⁻²]",
      "[ML2T⁻¹]"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Energy density of an electrostatic field (energy per unit volume): u = ½ ε₀ E².\n⚡ Step-by-Step Derivation:\n1. Energy density u = Energy / Volume = [ML²T⁻²] / [L³].\n2. [u] = [ML⁻¹T⁻²].\n3. Alternatively, dimension of pressure is also [ML⁻¹T⁻²], and energy density has identical dimensions to pressure.\n💡 Examiner Pro-Tip: Electrostatic energy density ½ ε₀ E² and magnetic energy density B² / (2μ₀) both have dimensions [ML⁻¹T⁻²].",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q07",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Error Analysis & Propagation",
    "subtopic": "Error Analysis & Propagation",
    "difficulty": "Medium",
    "questionText": "A student measures the distance traversed in free fall of a body, initially at rest in a given time. He uses this data to estimate g, the acceleration due to gravity. If the maximum percentage errors in measurement of the distance and the time are e 1 and e2 respectively, the percentage error in the estimation of g is :-",
    "question": "A student measures the distance traversed in free fall of a body, initially at rest in a given time. He uses this data to estimate g, the acceleration due to gravity. If the maximum percentage errors in measurement of the distance and the time are e 1 and e2 respectively, the percentage error in the estimation of g is :-",
    "options": [
      "e1 + 2e2",
      "e1 + e2",
      "e1 - 2e2",
      "e2 - e1"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Electrical resistance R from Joule's heating law (P = I² R) or Ohm's Law (V = I R).\n⚡ Step-by-Step Derivation:\n1. Resistance R = V / I = (Work / Charge) / Current = W / (I² t).\n2. [R] = [ML²T⁻²] / ([A²][T]) = [ML²T⁻³A⁻²].\n💡 Examiner Pro-Tip: Resistance has dimensions [M L² T⁻³ A⁻²], and conductance G = 1/R has [M⁻¹ L⁻² T³ A²].",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ]
  },
  {
    "id": "allen-units-ex2-q08",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Medium",
    "questionText": "The dimensions of ( ) 1/2 00 − µε are :-",
    "question": "The dimensions of ( ) 1/2 00 − µε are :-",
    "options": [
      "[ 11 22LT − ]",
      "[L⁻¹T]",
      "[LT⁻¹]",
      "[ 11 22LT − ]"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Maxwell's speed of electromagnetic wave in free space: c = (μ₀ ε₀)⁻¹/².\n⚡ Step-by-Step Derivation:\n1. (μ₀ ε₀)⁻¹/² represents the speed of light c.\n2. Dimensional formula of speed is [LT⁻¹].\n💡 Examiner Pro-Tip: Don't spend time deriving μ₀ and ε₀ separately; recognize the direct identity c = (μ₀ε₀)⁻¹/².",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q09",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Units & Systems of Units",
    "subtopic": "Units & Systems of Units",
    "difficulty": "Hard",
    "questionText": "The density of a material in CGS system of units is 4 g/cm3. In a system of units in which unit of length is 10 cm and unit of mass is 100 g, the value of density of material will be :-",
    "question": "The density of a material in CGS system of units is 4 g/cm3. In a system of units in which unit of length is 10 cm and unit of mass is 100 g, the value of density of material will be :-",
    "options": [
      "0.04",
      "0.4",
      "40",
      "400"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Principle of dimensional homogeneity applied to velocity equation: v = at + b / (t + c).\n⚡ Step-by-Step Derivation:\n1. In (t + c), c is added to time t, so [c] = [t] = [T].\n2. Since v = at + ..., [at] = [v] ⟹ [a][T] = [LT⁻¹] ⟹ [a] = [LT⁻²].\n3. Also [b / (t + c)] = [v] ⟹ [b] / [T] = [LT⁻¹] ⟹ [b] = [L].\n4. Therefore: a has [LT⁻²], b has [L], and c has [T].\n💡 Examiner Pro-Tip: Quantities added or subtracted must have identical dimensions.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q10",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Physical World & Measurement",
    "subtopic": "Physical World & Measurement",
    "difficulty": "Medium",
    "questionText": "If voltage across a bulb rated 220 Volt 100 Watt drops by 2.5% of its rated value, the percentage of the rated value by which the power would decrease is :-",
    "question": "If voltage across a bulb rated 220 Volt 100 Watt drops by 2.5% of its rated value, the percentage of the rated value by which the power would decrease is :-",
    "options": [
      "5%",
      "10%",
      "20%",
      "2.5%"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Expressing Surface Tension in terms of Energy (E), Velocity (v), and Time (T).\n⚡ Step-by-Step Derivation:\n1. Let Surface Tension S = E^a v^b T^c.\n2. [S] = [MT⁻²], [E] = [ML²T⁻²], [v] = [LT⁻¹], [T] = [T].\n3. [MT⁻²] = [ML²T⁻²]^a [LT⁻¹]^b [T]^c = M^a L^(2a+b) T^(-2a-b+c).\n4. Equating exponents:\n   - For M: a = 1.\n   - For L: 2a + b = 0 ⟹ b = -2(1) = -2.\n   - For T: -2a - b + c = -2 ⟹ -2(1) - (-2) + c = -2 ⟹ c = -2.\n5. Therefore, [S] = [E¹ v⁻² T⁻²].\n💡 Examiner Pro-Tip: Dimension of Surface Tension is [E v⁻² T⁻²].",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q11",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Error Analysis & Propagation",
    "subtopic": "Error Analysis & Propagation",
    "difficulty": "Medium",
    "questionText": "In an experiment four quantities a, b, c and d are measured with percentage errors 1%, 2%, 3% and 4% respectively. Quantity P is calculated as follows P = 32ab cd , percentage error in P is :-",
    "question": "In an experiment four quantities a, b, c and d are measured with percentage errors 1%, 2%, 3% and 4% respectively. Quantity P is calculated as follows P = 32ab cd , percentage error in P is :-",
    "options": [
      "4%",
      "14%",
      "10%",
      "7%"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Electrical impedance Z is the effective opposition to alternating current, sharing dimensions with resistance.\n⚡ Step-by-Step Derivation:\n1. Z = V_rms / I_rms ⟹ [Z] = [V] / [I].\n2. Potential V = Work / Charge = [ML²T⁻²] / [AT] = [ML²T⁻³A⁻¹].\n3. [Z] = [ML²T⁻³A⁻¹] / [A] = [ML²T⁻³A⁻²].\n💡 Examiner Pro-Tip: Resistance, inductive reactance X_L, capacitive reactance X_C, and impedance Z all share [ML²T⁻³A⁻²].",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ]
  },
  {
    "id": "allen-units-ex2-q12",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Hard",
    "questionText": "If force (F), velocity (V) and time (T) are taken as fundamental units, then the dimensions of mass are:",
    "question": "If force (F), velocity (V) and time (T) are taken as fundamental units, then the dimensions of mass are:",
    "options": [
      "[F V T⁻¹]",
      "[F V T⁻²]",
      "[F V-1 T⁻¹]",
      "[F V-1 T]"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Expressing Mass in terms of Force (F), Velocity (V), and Time (T).\n⚡ Step-by-Step Derivation:\n1. Force = Mass × Acceleration = Mass × (Velocity / Time).\n2. F = M · V / T ⟹ M = F · V⁻¹ · T.\n3. In dimensional form: [M] = [F V⁻¹ T].\n💡 Examiner Pro-Tip: Using F = ma directly gives M = F / a = F / (V T⁻¹) = F V⁻¹ T without solving simultaneous equations!",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q13",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Medium",
    "questionText": "If energy (E), velocity (V) and time (T) are chosen as the fundamental quantities, the dimensional formula of surface tension will be :",
    "question": "If energy (E), velocity (V) and time (T) are chosen as the fundamental quantities, the dimensional formula of surface tension will be :",
    "options": [
      "[EV-1T⁻²]",
      "[EV-2T⁻²]",
      "[E-2V-1T⁻³]",
      "[EV-2T⁻¹] Re-"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Planck length / fundamental units: Expressing length in terms of c, G, and h.\n⚡ Step-by-Step Derivation:\n1. Length L ∝ c^x G^y h^z.\n2. [L] = [LT⁻¹]^x [M⁻¹L³T⁻²]^y [ML²T⁻¹]^z = M^(-y+z) L^(x+3y+2z) T^(-x-2y-z).\n3. -y + z = 0 ⟹ y = z.\n4. -x - 2y - z = 0 ⟹ x = -3y.\n5. x + 3y + 2z = 1 ⟹ -3y + 3y + 2y = 1 ⟹ 2y = 1 ⟹ y = ½, z = ½, x = -3/2.\n6. L ∝ c^(-3/2) G^(1/2) h^(1/2) = √(h G / c³).\n💡 Examiner Pro-Tip: Planck length l_p = √(h G / c³).",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q14",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Units & Systems of Units",
    "subtopic": "Units & Systems of Units",
    "difficulty": "Medium",
    "questionText": "If dimension of critical velocity ν c, of liquid flowing through a tube is expressed as ( ηx ρy rz), where η, ρ and r the coefficient of viscosity of liquid, density of liquid and radius of the tube respectively, then the values of x, y and z are given by :",
    "question": "If dimension of critical velocity ν c, of liquid flowing through a tube is expressed as ( ηx ρy rz), where η, ρ and r the coefficient of viscosity of liquid, density of liquid and radius of the tube respectively, then the values of x, y and z are given by :",
    "options": [
      "1, 1, 1",
      "1, -1, -1",
      "-1, -1, 1",
      "-1, -1, -1"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Percentage error in kinetic energy K = ½ m v².\n⚡ Step-by-Step Derivation:\n1. Kinetic energy formula: K = ½ m v².\n2. Maximum relative error: ΔK / K = Δm / m + 2 (Δv / v).\n3. Multiply by 100%: % error in K = (% error in m) + 2 × (% error in v).\n4. Given: % error in mass = 2%, % error in speed = 3%.\n5. % error in K = 2% + 2 × (3%) = 2% + 6% = 8%.\n💡 Examiner Pro-Tip: The power 2 on velocity doubles its error contribution.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q15",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Units & Systems of Units",
    "subtopic": "Units & Systems of Units",
    "difficulty": "Hard",
    "questionText": "Planck's constant (h), speed of light in vacuum (c) and Newton's gravitational constant (G) are three fundamental constants. Which of the following combinations of these has the dimension of length?",
    "question": "Planck's constant (h), speed of light in vacuum (c) and Newton's gravitational constant (G) are three fundamental constants. Which of the following combinations of these has the dimension of length?",
    "options": [
      "hc G",
      "3/2 Gc h",
      "3/2 hG c",
      "5/2 hG c"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Experimental determination of acceleration due to gravity g = 4π² L / T².\n⚡ Step-by-Step Derivation:\n1. g = 4π² L / T² where T = t / n (total time t for n oscillations).\n2. Fractional error: Δg / g = ΔL / L + 2 (Δt / t).\n3. Given: L = 20.0 cm with least count ΔL = 1 mm = 0.1 cm ⟹ ΔL / L = 0.1 / 20.0 = 0.005.\n4. Time for 100 oscillations: t = 90 s with resolution Δt = 1 s ⟹ Δt / t = 1 / 90 ≈ 0.0111.\n5. Δg / g = 0.005 + 2 × (1 / 90) = 0.005 + 0.0222 = 0.0272.\n6. Percentage accuracy = 0.0272 × 100% ≈ 2.72% ≈ 3%.\n💡 Examiner Pro-Tip: For 100 oscillations, ΔT / T = Δt / t (number of oscillations cancels).",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q16",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Medium",
    "questionText": "A physical quantity of the dimensions of length that can be formed out of c, G and 2 0 e 4πε is [c is velocity of light, G is universal constant of gravitation and e is charge] :-",
    "question": "A physical quantity of the dimensions of length that can be formed out of c, G and 2 0 e 4πε is [c is velocity of light, G is universal constant of gravitation and e is charge] :-",
    "options": [
      "1/22 2 0 ecG 4   πε",
      "1/22 2 0 1e G4c   πε",
      "2 0 1eGc4 πε",
      "1/22 2 0 1e G 4c   πε"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Constructing length from c, G, and electrostatic force constant (e² / 4πε₀).\n⚡ Step-by-Step Derivation:\n1. Electrostatic force F = (1 / 4πε₀) (e² / r²) ⟹ [e² / 4πε₀] = [F r²] = [ML³T⁻²].\n2. Gravitational constant [G] = [M⁻¹L³T⁻²].\n3. Multiply them: [G × (e² / 4πε₀)] = [M⁻¹L³T⁻²][ML³T⁻²] = [L⁶T⁻⁴].\n4. Take the square root: [G (e² / 4πε₀)]^(1/2) = [L³T⁻²].\n5. Since [c²] = [L²T⁻²], divide by c²: [L³T⁻²] / [c²] = [L³T⁻²] / [L²T⁻²] = [L].\n6. Therefore, length dimension is given by: (1 / c²) [G · (e² / 4πε₀)]^(1/2).\n💡 Examiner Pro-Tip: Multiplying G and (e²/4πε₀) eliminates mass M completely.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q17",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Screw Gauge & Zero Error",
    "subtopic": "Screw Gauge & Zero Error",
    "difficulty": "Medium",
    "questionText": "A student measured the diameter of a small steel ball using a screw gauge of least count 0.001 cm. The main scale reading is 5 mm and zero of circular scale division coincides with 25 divisions above the reference level. If screw gauge has a zero error of - 0.004 cm, the correct diameter of the ball is :-",
    "question": "A student measured the diameter of a small steel ball using a screw gauge of least count 0.001 cm. The main scale reading is 5 mm and zero of circular scale division coincides with 25 divisions above the reference level. If screw gauge has a zero error of - 0.004 cm, the correct diameter of the ball is :-",
    "options": [
      "0.521 cm",
      "0.525 cm",
      "0.053 cm",
      "0.529 cm"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Reading a screw gauge with negative zero error: True Diameter = MSR + (CSR × LC) − (Zero Error).\n⚡ Step-by-Step Derivation:\n1. Main Scale Reading (MSR) = 5 mm = 0.5 cm.\n2. Circular Scale Reading (CSR) = 25 divisions.\n3. Least count (LC) = 0.001 cm.\n4. Observed reading = MSR + (CSR × LC) = 0.5 cm + (25 × 0.001 cm) = 0.525 cm.\n5. Given zero error = −0.004 cm (negative zero error).\n6. True reading = Observed Reading − (Zero Error) = 0.525 cm − (−0.004 cm) = 0.525 + 0.004 = 0.529 cm.\n💡 Examiner Pro-Tip: Negative zero error is ALWAYS ADDED to the observed reading.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Screw Gauge",
      "Error Propagation"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 540 200\" class=\"w-full max-w-lg mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"540\" height=\"200\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"24\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#0F172A\">Screw Gauge / Micrometer Reading Principle</text>\n  \n  <!-- U-frame / Anvil & Spindle -->\n  <path d=\"M 50,70 L 50,140 Q 50,165 85,165 L 140,165 Q 175,165 175,140 L 175,110\" fill=\"none\" stroke=\"#475569\" stroke-width=\"10\"/>\n  <rect x=\"75\" y=\"96\" width=\"12\" height=\"28\" fill=\"#94A3B8\" stroke=\"#334155\" stroke-width=\"1\"/>\n  <text x=\"81\" y=\"85\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\">Anvil</text>\n  \n  <!-- Spindle / Object gap -->\n  <rect x=\"135\" y=\"102\" width=\"40\" height=\"16\" fill=\"#CBD5E1\" stroke=\"#334155\" stroke-width=\"1\"/>\n  <circle cx=\"112\" cy=\"110\" r=\"10\" fill=\"#F87171\" stroke=\"#DC2626\" stroke-width=\"1.5\"/>\n  <text x=\"112\" y=\"135\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#DC2626\">Wire / Ball</text>\n  \n  <!-- Main Sleeve / Pitch Scale -->\n  <rect x=\"175\" y=\"92\" width=\"130\" height=\"36\" fill=\"#E2E8F0\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <line x1=\"175\" y1=\"110\" x2=\"305\" y2=\"110\" stroke=\"#0F172A\" stroke-width=\"1.5\"/> <!-- Reference Baseline -->\n  <!-- Pitch Scale marks: 0, 1, 2, 3, 4, 5 mm above, 0.5 mm below -->\n  <line x1=\"185\" y1=\"96\" x2=\"185\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <text x=\"185\" y=\"93\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#334155\">0</text>\n  <line x1=\"201\" y1=\"96\" x2=\"201\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"217\" y1=\"96\" x2=\"217\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"233\" y1=\"96\" x2=\"233\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"249\" y1=\"96\" x2=\"249\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"265\" y1=\"96\" x2=\"265\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <text x=\"265\" y=\"93\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#334155\">5</text>\n  <line x1=\"281\" y1=\"96\" x2=\"281\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"297\" y1=\"96\" x2=\"297\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <text x=\"240\" y=\"78\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\">Main Scale / Pitch Scale</text>\n  \n  <!-- Rotating Thimble / Circular Scale -->\n  <polygon points=\"305,82 320,82 320,86 420,86 420,134 320,134 320,138 305,138\" fill=\"#FEF08A\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n  <!-- Circular scale divisions -->\n  <line x1=\"305\" y1=\"88\" x2=\"318\" y2=\"88\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <text x=\"325\" y=\"91\" font-size=\"7\" font-weight=\"bold\" fill=\"#854D0E\">40</text>\n  <line x1=\"305\" y1=\"94\" x2=\"318\" y2=\"94\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"100\" x2=\"318\" y2=\"100\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"106\" x2=\"318\" y2=\"106\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <text x=\"325\" y=\"109\" font-size=\"7\" font-weight=\"bold\" fill=\"#854D0E\">25</text>\n  <line x1=\"305\" y1=\"112\" x2=\"318\" y2=\"112\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"118\" x2=\"318\" y2=\"118\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"124\" x2=\"318\" y2=\"124\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <text x=\"325\" y=\"127\" font-size=\"7\" font-weight=\"bold\" fill=\"#854D0E\">10</text>\n  <line x1=\"305\" y1=\"130\" x2=\"318\" y2=\"130\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"136\" x2=\"318\" y2=\"136\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <!-- Ratchet -->\n  <rect x=\"420\" y=\"96\" width=\"45\" height=\"28\" fill=\"#94A3B8\" stroke=\"#334155\" stroke-width=\"1.5\" rx=\"2\"/>\n  <text x=\"442\" y=\"114\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#1E293B\">Ratchet</text>\n  \n  <!-- Reading and Error formula -->\n  <text x=\"270\" y=\"185\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">Total Reading = MSR + (CSR × LC) − (Zero Error)</text>\n</svg>"
  },
  {
    "id": "allen-units-ex2-q18",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Errors in Measurement",
    "subtopic": "Errors in Measurement",
    "difficulty": "Hard",
    "questionText": "In an experiment, the percentage of error occurred in the measurment of physical quantities A, B, C and D are 1%, 2%, 3% and 4% respectively. Then the maximum percentage of error in the measurement X, where X = A² B¹/² / (C¹/³ D³) , will be :",
    "question": "In an experiment, the percentage of error occurred in the measurment of physical quantities A, B, C and D are 1%, 2%, 3% and 4% respectively. Then the maximum percentage of error in the measurement X, where X = A² B¹/² / (C¹/³ D³) , will be :",
    "options": [
      "3 %13  ",
      "16%",
      "-10%",
      "10%"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Combination of errors for multi-variable power formula: X = A² B^(1/2) / (C^(1/3) D³).\n⚡ Step-by-Step Derivation:\n1. Relative error formula:\n   ΔX / X = 2 (ΔA / A) + ½ (ΔB / B) + ⅓ (ΔC / C) + 3 (ΔD / D).\n2. Percentage error in X:\n   %ΔX = 2 (%ΔA) + ½ (%ΔB) + ⅓ (%ΔC) + 3 (%ΔD).\n3. Given errors: %A = 1%, %B = 2%, %C = 3%, %D = 4%.\n4. Calculation:\n   %ΔX = 2(1%) + ½(2%) + ⅓(3%) + 3(4%)\n       = 2% + 1% + 1% + 12% = 16%.\n💡 Examiner Pro-Tip: Exponents in denominator (C^(1/3), D³) still add their positive magnitudes in maximum error calculation.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ]
  },
  {
    "id": "allen-units-ex2-q19",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Units & Systems of Units",
    "subtopic": "Units & Systems of Units",
    "difficulty": "Medium",
    "questionText": "The unit of thermal conductivity is :",
    "question": "The unit of thermal conductivity is :",
    "options": [
      "J m K-1",
      "J m-1 K-1",
      "W m K-1",
      "W m-1 K-1"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Mean absolute error and percentage relative error from multiple readings.\n⚡ Step-by-Step Derivation:\n1. Readings: 1.25 s, 1.24 s, 1.27 s, 1.21 s, 1.28 s.\n2. Mean value t_mean = (1.25 + 1.24 + 1.27 + 1.21 + 1.28) / 5 = 6.25 / 5 = 1.25 s.\n3. Absolute errors |Δt_i|:\n   |1.25 - 1.25| = 0.00\n   |1.24 - 1.25| = 0.01\n   |1.27 - 1.25| = 0.02\n   |1.21 - 1.25| = 0.04\n   |1.28 - 1.25| = 0.03\n4. Mean absolute error Δt_mean = (0.00 + 0.01 + 0.02 + 0.04 + 0.03) / 5 = 0.10 / 5 = 0.02 s.\n5. Percentage relative error = (Δt_mean / t_mean) × 100% = (0.02 / 1.25) × 100% = 1.6%.\n💡 Examiner Pro-Tip: Sum of absolute deviations divided by number of readings gives the mean absolute error.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q20",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Vernier Callipers & Least Count",
    "subtopic": "Vernier Callipers & Least Count",
    "difficulty": "Medium",
    "questionText": "The main scale of a vernier calliper has n divisions/cm. n divisions of the vernier scale coincide with (n - 1) divisions of main scale. The least count of the vernier calliper is,",
    "question": "The main scale of a vernier calliper has n divisions/cm. n divisions of the vernier scale coincide with (n - 1) divisions of main scale. The least count of the vernier calliper is,",
    "options": [
      "( )( ) 1 n1n1+− cm",
      "1/n cm",
      "2 1/n cm",
      "( ) 1 nn 1+ cm"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Vernier Callipers Least Count: LC = 1 MSD − 1 VSD.\n⚡ Step-by-Step Derivation:\n1. Main scale has n divisions per cm ⟹ 1 MSD = (1 / n) cm.\n2. Given: n divisions of vernier scale = (n − 1) divisions of main scale.\n3. n VSD = (n − 1) MSD ⟹ 1 VSD = [(n − 1) / n] MSD.\n4. Least Count LC = 1 MSD − 1 VSD = [1 − (n − 1)/n] MSD = (1 / n) MSD.\n5. Substitute 1 MSD = (1 / n) cm:\n   LC = (1 / n) × (1 / n) cm = (1 / n²) cm.\n💡 Examiner Pro-Tip: LC = (1 MSD) / (Total Vernier divisions) = (1/n cm) / n = 1/n² cm.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Vernier Callipers"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 520 180\" class=\"w-full max-w-lg mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"520\" height=\"180\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"260\" y=\"24\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#0F172A\">Vernier Callipers Scale Principle (LC = 1 MSD − 1 VSD)</text>\n  \n  <!-- Main Scale Body -->\n  <rect x=\"30\" y=\"45\" width=\"460\" height=\"42\" fill=\"#E2E8F0\" stroke=\"#475569\" stroke-width=\"1.5\" rx=\"3\"/>\n  <!-- Main Scale Graduations (0 to 15 mm) -->\n  <line x1=\"40\" y1=\"45\" x2=\"40\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"40\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">0</text>\n  <line x1=\"68\" y1=\"45\" x2=\"68\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"96\" y1=\"45\" x2=\"96\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"124\" y1=\"45\" x2=\"124\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"152\" y1=\"45\" x2=\"152\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"180\" y1=\"45\" x2=\"180\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"180\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">5</text>\n  <line x1=\"208\" y1=\"45\" x2=\"208\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"236\" y1=\"45\" x2=\"236\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"264\" y1=\"45\" x2=\"264\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"292\" y1=\"45\" x2=\"292\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"320\" y1=\"45\" x2=\"320\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"320\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">10</text>\n  <line x1=\"348\" y1=\"45\" x2=\"348\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"376\" y1=\"45\" x2=\"376\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"404\" y1=\"45\" x2=\"404\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"432\" y1=\"45\" x2=\"432\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"460\" y1=\"45\" x2=\"460\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"460\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">15</text>\n  <text x=\"480\" y=\"65\" font-size=\"10\" font-weight=\"bold\" fill=\"#475569\">Main Scale (mm)</text>\n  \n  <!-- Vernier Sliding Scale -->\n  <rect x=\"96\" y=\"87\" width=\"280\" height=\"42\" fill=\"#FEF08A\" stroke=\"#CA8A04\" stroke-width=\"1.5\" rx=\"3\"/>\n  <line x1=\"105.0\" y1=\"87\" x2=\"105.0\" y2=\"107\" stroke=\"#854D0E\" stroke-width=\"1.8\"/>\n  <text x=\"105.0\" y=\"120\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">0</text>\n  <line x1=\"130.2\" y1=\"87\" x2=\"130.2\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"155.4\" y1=\"87\" x2=\"155.4\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"180.6\" y1=\"87\" x2=\"180.6\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"205.8\" y1=\"87\" x2=\"205.8\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"231.0\" y1=\"87\" x2=\"231.0\" y2=\"107\" stroke=\"#854D0E\" stroke-width=\"1.8\"/>\n  <text x=\"231.0\" y=\"120\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">5</text>\n  <line x1=\"256.2\" y1=\"87\" x2=\"256.2\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"281.4\" y1=\"87\" x2=\"281.4\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"306.6\" y1=\"87\" x2=\"306.6\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"331.79999999999995\" y1=\"87\" x2=\"331.79999999999995\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"357.0\" y1=\"87\" x2=\"357.0\" y2=\"107\" stroke=\"#854D0E\" stroke-width=\"1.8\"/>\n  <text x=\"357.0\" y=\"120\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">10</text>\n  <text x=\"390\" y=\"112\" font-size=\"10\" font-weight=\"bold\" fill=\"#854D0E\">Vernier Scale (10 VSD = 9 MSD)</text>\n  \n  <!-- Indicator of Coincidence -->\n  <line x1=\"332\" y1=\"40\" x2=\"332\" y2=\"135\" stroke=\"#DC2626\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>\n  <circle cx=\"332\" cy=\"87\" r=\"4\" fill=\"#DC2626\"/>\n  <text x=\"332\" y=\"150\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#DC2626\">Coincidence Mark</text>\n  \n  <!-- Least count formula label -->\n  <text x=\"260\" y=\"170\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">Least Count = 1 MSD − (N−1)/N MSD = 1/N MSD</text>\n</svg>"
  },
  {
    "id": "allen-units-ex2-q21",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Significant Figures & Rounding Off",
    "subtopic": "Significant Figures & Rounding Off",
    "difficulty": "Hard",
    "questionText": "Taking into account of the significant figures, what is the value of 9.99 m - 0.0099 m ?",
    "question": "Taking into account of the significant figures, what is the value of 9.99 m - 0.0099 m ?",
    "options": [
      "9.9 m",
      "9.9801 m",
      "9.98 m",
      "9.980 m"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Significant figures in subtraction: Result cannot have more decimal places than the number with the least decimal places.\n⚡ Step-by-Step Derivation:\n1. Given: 9.99 m − 0.0099 m.\n2. 9.99 m has 2 decimal places.\n3. 0.0099 m has 4 decimal places.\n4. Arithmetic difference = 9.9801 m.\n5. Rounding off to 2 decimal places gives 9.98 m.\n💡 Examiner Pro-Tip: In addition/subtraction, the least number of decimal places dictates the final precision.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q22",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Medium",
    "questionText": "Dimensions of stress are :",
    "question": "Dimensions of stress are :",
    "options": [
      "[M L⁻¹ T⁻²]",
      "[M L T⁻²]",
      "[M L2 T⁻²]",
      "[M L0 T⁻²]"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Dimensional formulas of Stress and Pressure: [M L⁻¹ T⁻²].\n⚡ Step-by-Step Derivation:\n1. Stress = Restoring Force / Area = [MLT⁻²] / [L²] = [ML⁻¹T⁻²].\n2. Pressure = Force / Area = [ML⁻¹T⁻²].\n3. Strain is dimensionless [M⁰L⁰T⁰].\n4. Force is [MLT⁻²].\n💡 Examiner Pro-Tip: Modulus of elasticity, Stress, and Pressure all have identical dimensions [ML⁻¹T⁻²].",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q23",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Screw Gauge & Zero Error",
    "subtopic": "Screw Gauge & Zero Error",
    "difficulty": "Medium",
    "questionText": "A screw gauge has least count of 0.01 mm and there are 50 divisions in its circular scale. The pitch of the screw gauge is :",
    "question": "A screw gauge has least count of 0.01 mm and there are 50 divisions in its circular scale. The pitch of the screw gauge is :",
    "options": [
      "1.0 mm",
      "0.01 mm",
      "0.25 mm",
      "0.5 mm"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Relation between Least Count, Pitch, and Circular Scale divisions: Least Count = Pitch / (Total Circular Scale Divisions).\n⚡ Step-by-Step Derivation:\n1. Rearrange for Pitch: Pitch = Least Count × (Total Circular Scale Divisions).\n2. Given: LC = 0.01 mm, Circular divisions = 50.\n3. Pitch = 0.01 mm × 50 = 0.5 mm.\n💡 Examiner Pro-Tip: Pitch is the linear distance advanced by the spindle in one complete rotation.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Screw Gauge"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 540 200\" class=\"w-full max-w-lg mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"540\" height=\"200\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"24\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#0F172A\">Screw Gauge / Micrometer Reading Principle</text>\n  \n  <!-- U-frame / Anvil & Spindle -->\n  <path d=\"M 50,70 L 50,140 Q 50,165 85,165 L 140,165 Q 175,165 175,140 L 175,110\" fill=\"none\" stroke=\"#475569\" stroke-width=\"10\"/>\n  <rect x=\"75\" y=\"96\" width=\"12\" height=\"28\" fill=\"#94A3B8\" stroke=\"#334155\" stroke-width=\"1\"/>\n  <text x=\"81\" y=\"85\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\">Anvil</text>\n  \n  <!-- Spindle / Object gap -->\n  <rect x=\"135\" y=\"102\" width=\"40\" height=\"16\" fill=\"#CBD5E1\" stroke=\"#334155\" stroke-width=\"1\"/>\n  <circle cx=\"112\" cy=\"110\" r=\"10\" fill=\"#F87171\" stroke=\"#DC2626\" stroke-width=\"1.5\"/>\n  <text x=\"112\" y=\"135\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#DC2626\">Wire / Ball</text>\n  \n  <!-- Main Sleeve / Pitch Scale -->\n  <rect x=\"175\" y=\"92\" width=\"130\" height=\"36\" fill=\"#E2E8F0\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <line x1=\"175\" y1=\"110\" x2=\"305\" y2=\"110\" stroke=\"#0F172A\" stroke-width=\"1.5\"/> <!-- Reference Baseline -->\n  <!-- Pitch Scale marks: 0, 1, 2, 3, 4, 5 mm above, 0.5 mm below -->\n  <line x1=\"185\" y1=\"96\" x2=\"185\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <text x=\"185\" y=\"93\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#334155\">0</text>\n  <line x1=\"201\" y1=\"96\" x2=\"201\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"217\" y1=\"96\" x2=\"217\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"233\" y1=\"96\" x2=\"233\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"249\" y1=\"96\" x2=\"249\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"265\" y1=\"96\" x2=\"265\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <text x=\"265\" y=\"93\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#334155\">5</text>\n  <line x1=\"281\" y1=\"96\" x2=\"281\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"297\" y1=\"96\" x2=\"297\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <text x=\"240\" y=\"78\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\">Main Scale / Pitch Scale</text>\n  \n  <!-- Rotating Thimble / Circular Scale -->\n  <polygon points=\"305,82 320,82 320,86 420,86 420,134 320,134 320,138 305,138\" fill=\"#FEF08A\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n  <!-- Circular scale divisions -->\n  <line x1=\"305\" y1=\"88\" x2=\"318\" y2=\"88\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <text x=\"325\" y=\"91\" font-size=\"7\" font-weight=\"bold\" fill=\"#854D0E\">40</text>\n  <line x1=\"305\" y1=\"94\" x2=\"318\" y2=\"94\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"100\" x2=\"318\" y2=\"100\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"106\" x2=\"318\" y2=\"106\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <text x=\"325\" y=\"109\" font-size=\"7\" font-weight=\"bold\" fill=\"#854D0E\">25</text>\n  <line x1=\"305\" y1=\"112\" x2=\"318\" y2=\"112\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"118\" x2=\"318\" y2=\"118\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"124\" x2=\"318\" y2=\"124\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <text x=\"325\" y=\"127\" font-size=\"7\" font-weight=\"bold\" fill=\"#854D0E\">10</text>\n  <line x1=\"305\" y1=\"130\" x2=\"318\" y2=\"130\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"136\" x2=\"318\" y2=\"136\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <!-- Ratchet -->\n  <rect x=\"420\" y=\"96\" width=\"45\" height=\"28\" fill=\"#94A3B8\" stroke=\"#334155\" stroke-width=\"1.5\" rx=\"2\"/>\n  <text x=\"442\" y=\"114\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#1E293B\">Ratchet</text>\n  \n  <!-- Reading and Error formula -->\n  <text x=\"270\" y=\"185\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">Total Reading = MSR + (CSR × LC) − (Zero Error)</text>\n</svg>"
  },
  {
    "id": "allen-units-ex2-q24",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Physical World & Measurement",
    "subtopic": "Physical World & Measurement",
    "difficulty": "Hard",
    "questionText": "The angle of 1' (minute of arc) in radian is nearly equal to",
    "question": "The angle of 1' (minute of arc) in radian is nearly equal to",
    "options": [
      "2.91 × 10⁻4 rad",
      "4.85 × 10⁻4 rad",
      "4.80 × 10⁻6 rad",
      "1.75 × 10⁻2 rad"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Conversion from minutes of arc to radians.\n⚡ Step-by-Step Derivation:\n1. 360° = 2π radians ⟹ 1° = π / 180 radians.\n2. 1 degree = 60 arcminutes (60') ⟹ 1' = (1 / 60)° = π / (180 × 60) radians.\n3. 1' = 3.14159 / 10800 ≈ 2.90888 × 10⁻⁴ rad ≈ 2.91 × 10⁻⁴ rad.\n💡 Examiner Pro-Tip: Memorize these standard astronomical conversions: 1° ≈ 1.745 × 10⁻² rad, 1' ≈ 2.91 × 10⁻⁴ rad, 1\" ≈ 4.85 × 10⁻⁶ rad.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q25",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Error Analysis & Propagation",
    "subtopic": "Error Analysis & Propagation",
    "difficulty": "Medium",
    "questionText": "Time intervals measured by a clock give the following readings : 1.25 s, 1.24 s, 1.27 s, 1.21 s and 1.28 s. What is the percentage relative error of the observations ?",
    "question": "Time intervals measured by a clock give the following readings : 1.25 s, 1.24 s, 1.27 s, 1.21 s and 1.28 s. What is the percentage relative error of the observations ?",
    "options": [
      "2 %",
      "4 %",
      "16 %",
      "1.6 %"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Percentage relative error calculation from clock timing readings.\n⚡ Step-by-Step Derivation:\n1. Mean = (1.25 + 1.24 + 1.27 + 1.21 + 1.28) / 5 = 1.25 s.\n2. Absolute errors: 0.00, 0.01, 0.02, 0.04, 0.03 ⟹ Mean absolute error = 0.10 / 5 = 0.02 s.\n3. Percentage relative error = (0.02 / 1.25) × 100% = 1.6%.\n💡 Examiner Pro-Tip: This question appeared in NEET 2020 directly testing NCERT Chapter 2 solved example.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ]
  },
  {
    "id": "allen-units-ex2-q26",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Medium",
    "questionText": "If force [F], acceleration [A] and time [T] are chosen as the fundamental physical quantities. Find the dimensions of energy.",
    "question": "If force [F], acceleration [A] and time [T] are chosen as the fundamental physical quantities. Find the dimensions of energy.",
    "options": [
      "[F] [A] [T]",
      "[F] [A] [T2]",
      "[F] [A] [T⁻¹]",
      "[F] [A⁻¹] [T]"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Dimensional analysis with Force [F], Acceleration [A], and Time [T] as base quantities.\n⚡ Step-by-Step Derivation:\n1. Energy = Work = Force × Distance.\n2. Distance s = ½ a t² ⟹ [Distance] = [A][T²].\n3. [Energy] = [Force] × [Distance] = [F] [A T²] = [F A T²].\n💡 Examiner Pro-Tip: Use basic kinematic relations (W = F · s = F · ½ a t²) to find dimensions instantly!",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q27",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Screw Gauge & Zero Error",
    "subtopic": "Screw Gauge & Zero Error",
    "difficulty": "Hard",
    "questionText": "A screw gauge gives the following readings when used to measure the diameter of a wire Main scale reading : 0 mm Circular scale reading : 52 divisions Given that 1 mm on main scale corresponds to 100 divisions on the circular scale. The diameter of the wire from the above data is :",
    "question": "A screw gauge gives the following readings when used to measure the diameter of a wire Main scale reading : 0 mm Circular scale reading : 52 divisions Given that 1 mm on main scale corresponds to 100 divisions on the circular scale. The diameter of the wire from the above data is :",
    "options": [
      "0.52 cm",
      "0.026 cm",
      "0.26 cm",
      "0.052 cm"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Screw gauge measurement: Diameter = MSR + (CSR × LC).\n⚡ Step-by-Step Derivation:\n1. Given: 1 mm on main scale corresponds to 100 divisions on circular scale.\n2. Least Count LC = Pitch / Total divisions = 1 mm / 100 = 0.01 mm.\n3. Main scale reading (MSR) = 0 mm.\n4. Circular scale reading (CSR) = 52 divisions.\n5. Diameter = MSR + CSR × LC = 0 + 52 × 0.01 mm = 0.52 mm.\n6. Convert to cm: 0.52 mm = 0.052 cm.\n💡 Examiner Pro-Tip: Check the options' units carefully: 0.52 mm = 0.052 cm.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Screw Gauge"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 540 200\" class=\"w-full max-w-lg mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"540\" height=\"200\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"24\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#0F172A\">Screw Gauge / Micrometer Reading Principle</text>\n  \n  <!-- U-frame / Anvil & Spindle -->\n  <path d=\"M 50,70 L 50,140 Q 50,165 85,165 L 140,165 Q 175,165 175,140 L 175,110\" fill=\"none\" stroke=\"#475569\" stroke-width=\"10\"/>\n  <rect x=\"75\" y=\"96\" width=\"12\" height=\"28\" fill=\"#94A3B8\" stroke=\"#334155\" stroke-width=\"1\"/>\n  <text x=\"81\" y=\"85\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\">Anvil</text>\n  \n  <!-- Spindle / Object gap -->\n  <rect x=\"135\" y=\"102\" width=\"40\" height=\"16\" fill=\"#CBD5E1\" stroke=\"#334155\" stroke-width=\"1\"/>\n  <circle cx=\"112\" cy=\"110\" r=\"10\" fill=\"#F87171\" stroke=\"#DC2626\" stroke-width=\"1.5\"/>\n  <text x=\"112\" y=\"135\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#DC2626\">Wire / Ball</text>\n  \n  <!-- Main Sleeve / Pitch Scale -->\n  <rect x=\"175\" y=\"92\" width=\"130\" height=\"36\" fill=\"#E2E8F0\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <line x1=\"175\" y1=\"110\" x2=\"305\" y2=\"110\" stroke=\"#0F172A\" stroke-width=\"1.5\"/> <!-- Reference Baseline -->\n  <!-- Pitch Scale marks: 0, 1, 2, 3, 4, 5 mm above, 0.5 mm below -->\n  <line x1=\"185\" y1=\"96\" x2=\"185\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <text x=\"185\" y=\"93\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#334155\">0</text>\n  <line x1=\"201\" y1=\"96\" x2=\"201\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"217\" y1=\"96\" x2=\"217\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"233\" y1=\"96\" x2=\"233\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"249\" y1=\"96\" x2=\"249\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"265\" y1=\"96\" x2=\"265\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <text x=\"265\" y=\"93\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#334155\">5</text>\n  <line x1=\"281\" y1=\"96\" x2=\"281\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"297\" y1=\"96\" x2=\"297\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <text x=\"240\" y=\"78\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\">Main Scale / Pitch Scale</text>\n  \n  <!-- Rotating Thimble / Circular Scale -->\n  <polygon points=\"305,82 320,82 320,86 420,86 420,134 320,134 320,138 305,138\" fill=\"#FEF08A\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n  <!-- Circular scale divisions -->\n  <line x1=\"305\" y1=\"88\" x2=\"318\" y2=\"88\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <text x=\"325\" y=\"91\" font-size=\"7\" font-weight=\"bold\" fill=\"#854D0E\">40</text>\n  <line x1=\"305\" y1=\"94\" x2=\"318\" y2=\"94\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"100\" x2=\"318\" y2=\"100\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"106\" x2=\"318\" y2=\"106\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <text x=\"325\" y=\"109\" font-size=\"7\" font-weight=\"bold\" fill=\"#854D0E\">25</text>\n  <line x1=\"305\" y1=\"112\" x2=\"318\" y2=\"112\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"118\" x2=\"318\" y2=\"118\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"124\" x2=\"318\" y2=\"124\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <text x=\"325\" y=\"127\" font-size=\"7\" font-weight=\"bold\" fill=\"#854D0E\">10</text>\n  <line x1=\"305\" y1=\"130\" x2=\"318\" y2=\"130\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"136\" x2=\"318\" y2=\"136\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <!-- Ratchet -->\n  <rect x=\"420\" y=\"96\" width=\"45\" height=\"28\" fill=\"#94A3B8\" stroke=\"#334155\" stroke-width=\"1.5\" rx=\"2\"/>\n  <text x=\"442\" y=\"114\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#1E293B\">Ratchet</text>\n  \n  <!-- Reading and Error formula -->\n  <text x=\"270\" y=\"185\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">Total Reading = MSR + (CSR × LC) − (Zero Error)</text>\n</svg>"
  },
  {
    "id": "allen-units-ex2-q28",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Medium",
    "questionText": "If E and G respectively denote energy and gravitational co nstant, then E G has the dimensions of :",
    "question": "If E and G respectively denote energy and gravitational co nstant, then E G has the dimensions of :",
    "options": [
      "[M2] [L⁻¹] [T0]",
      "[M] [L⁻¹] [T⁻¹]",
      "[M] [L0] [T0]",
      "[M2] [L⁻²] [T⁻¹]"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Dimensions of Energy E divided by Universal Gravitational Constant G.\n⚡ Step-by-Step Derivation:\n1. Energy [E] = [ML²T⁻²].\n2. Gravitational constant [G] = [M⁻¹L³T⁻²].\n3. Ratio [E / G] = [ML²T⁻²] / [M⁻¹L³T⁻²] = M^(1 - (-1)) L^(2 - 3) T^(-2 - (-2)).\n4. [E / G] = [M² L⁻¹ T⁰].\n💡 Examiner Pro-Tip: E/G has units J / (N·m²/kg²) = kg²/m, giving dimensions [M² L⁻¹ T⁰].",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q29",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Medium",
    "questionText": "The dimensions of mobility of electrons are",
    "question": "The dimensions of mobility of electrons are",
    "options": [
      "M⁻¹LA2",
      "MT⁻²A⁻¹",
      "M⁻¹T2A",
      "M⁻¹T2A⁻¹"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Dimensional analysis with Force, Acceleration, and Time.\n⚡ Step-by-Step Derivation:\n1. Energy has dimensions [F][A][T²].\n2. Mass has dimensions [F][A⁻¹][T⁰] or [F][V⁻¹][T].\n💡 Examiner Pro-Tip: Check base dimensions term by term.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q30",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Physical World & Measurement",
    "subtopic": "Physical World & Measurement",
    "difficulty": "Hard",
    "questionText": "Plane angle and solid angle have :",
    "question": "Plane angle and solid angle have :",
    "options": [
      "Dimensions but no units",
      "No units and no dimensions",
      "Both units and dimensions",
      "Units but no dimensions"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Dimensional formula of magnetic permeability μ₀.\n⚡ Step-by-Step Derivation:\n1. From Ampere's Law or Biot-Savart Law: B = μ₀ I / (2π r) ⟹ μ₀ = 2π r B / I.\n2. Since F = I L B ⟹ [B] = [F] / [I L] = [MLT⁻²] / [AL] = [MT⁻² A⁻¹].\n3. [μ₀] = [L][MT⁻² A⁻¹] / [A] = [MLT⁻² A⁻²].\n💡 Examiner Pro-Tip: SI unit of μ₀ is Henry/metre (H/m) or N/A².",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q31",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Units & Systems of Units",
    "subtopic": "Units & Systems of Units",
    "difficulty": "Medium",
    "questionText": "The dimensions [MLT -2 A -2 ] belong to the :",
    "question": "The dimensions [MLT -2 A -2 ] belong to the :",
    "options": [
      "self inductance",
      "magnetic permeability",
      "electric permittivity",
      "magnetic flux"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Identifying the physical quantity corresponding to [M L T⁻² A⁻²].\n⚡ Step-by-Step Derivation:\n1. [M L T⁻² A⁻²] is the dimensional formula of Magnetic Permeability (μ₀).\n2. Verification: Force per unit length between two parallel wires is F/L = (μ₀/2π)(I²/d) ⟹ [μ₀] = [F/L][d]/[I²] = [MLT⁻² A⁻²].\n3. Self inductance has [ML²T⁻²A⁻²]. Magnetic flux has [ML²T⁻²A⁻¹]. Permittivity has [M⁻¹L⁻³T⁴A²].\n💡 Examiner Pro-Tip: μ₀ has [MLT⁻²A⁻²], while L (inductance) has [ML²T⁻²A⁻²].",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q32",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Significant Figures & Rounding Off",
    "subtopic": "Significant Figures & Rounding Off",
    "difficulty": "Medium",
    "questionText": "The area of a rectangular field (in m² ) of length 55.3 m and breadth 25 m after rounding off the value for correct significant digits is :",
    "question": "The area of a rectangular field (in m² ) of length 55.3 m and breadth 25 m after rounding off the value for correct significant digits is :",
    "options": [
      "1382",
      "1382.5",
      "14 × 10 2",
      "138 × 10 1"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Significant figures in multiplication: Area = Length × Breadth.\n⚡ Step-by-Step Derivation:\n1. Length = 55.3 m (3 significant figures).\n2. Breadth = 25 m (2 significant figures).\n3. In multiplication, the final result must have the same number of significant figures as the factor with the least significant figures (here, 2 sig figs in 25 m).\n4. Calculated product: Area = 55.3 × 25 = 1382.5 m².\n5. Rounding off 1382.5 to 2 significant figures gives 14 × 10² m² (or 1400 m²).\n💡 Examiner Pro-Tip: 14 × 10² m² explicitly preserves exactly 2 significant figures.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q33",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Hard",
    "questionText": "Match List - I with List - II:\n\n| List - I (Physical Quantity) | List - II (Dimensional Formula) |\n| :--- | :--- |\n| (a) Gravitational constant (G) | (i) [L² T⁻²] |\n| (b) Gravitational potential energy | (ii) [M⁻¹ L³ T⁻²] |\n| (c) Gravitational potential | (iii) [L T⁻²] |\n| (d) Gravitational intensity | (iv) [M L² T⁻²] |\n\nChoose the correct answer from the options given below:",
    "question": "Match List - I with List - II:\n\n| List - I (Physical Quantity) | List - II (Dimensional Formula) |\n| :--- | :--- |\n| (a) Gravitational constant (G) | (i) [L² T⁻²] |\n| (b) Gravitational potential energy | (ii) [M⁻¹ L³ T⁻²] |\n| (c) Gravitational potential | (iii) [L T⁻²] |\n| (d) Gravitational intensity | (iv) [M L² T⁻²] |\n\nChoose the correct answer from the options given below:",
    "options": [
      "(a)-(ii), (b)-(iv), (c)-(i), (d)- (iii)",
      "(a)-(ii), (b)-(iv), (c)-(iii), (d)- (i)",
      "(a)-(iv), (b)-(ii), (c)-(i), (d)- (iii)",
      "(a)-(ii), (b)-(i), (c)-(iv), (d)- (iii)"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Matching gravitational physical quantities with their dimensional formulas.\n⚡ Step-by-Step Derivation:\n1. (a) Gravitational constant G: F = G m₁m₂ / r² ⟹ [G] = [M⁻¹ L³ T⁻²] → (ii).\n2. (b) Gravitational potential energy: Work done = [ML²T⁻²] → (iv).\n3. (c) Gravitational potential: Potential energy per unit mass = V = U / m ⟹ [L² T⁻²] → (i).\n4. (d) Gravitational intensity: Gravitational force per unit mass = E_g = F / m ⟹ [LT⁻²] → (iii).\n5. Matching: (a)-(ii), (b)-(iv), (c)-(i), (d)-(iii) (Option 1).\n💡 Examiner Pro-Tip: Gravitational potential is energy per mass (J/kg = m²/s² = [L²T⁻²]); Gravitational intensity is acceleration (m/s² = [LT⁻²]).",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q34",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Medium",
    "questionText": "The dimensions of mutual inductance (M) are:",
    "question": "The dimensions of mutual inductance (M) are:",
    "options": [
      "[MLT⁻² A 2 ]",
      "[M 2 L 2 T⁻² A 2 ]",
      "[ML 2 T⁻² A⁻² ]",
      "[M 2 LT⁻² A⁻² ]"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Mutual inductance M relating induced EMF to rate of change of current: e = −M (dI / dt).\n⚡ Step-by-Step Derivation:\n1. M = e / (dI / dt).\n2. EMF e has dimensions of electric potential: [e] = [Work / charge] = [ML²T⁻²] / [AT] = [ML²T⁻³A⁻¹].\n3. Rate of change of current [dI / dt] = [A][T⁻¹].\n4. [M] = [ML²T⁻³A⁻¹] / [A T⁻¹] = [ML²T⁻²A⁻²].\n💡 Examiner Pro-Tip: Self-inductance (L) and Mutual inductance (M) share the identical dimensional formula [ML²T⁻²A⁻²].",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q35",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Screw Gauge & Zero Error",
    "subtopic": "Screw Gauge & Zero Error",
    "difficulty": "Medium",
    "questionText": "When the circular scale of a screw gauge completes 2 rotations, it covers 1 mm over the pitch scale. The total number of the circular scale divisions is 50. The least count of the screw gauge in metre is:",
    "question": "When the circular scale of a screw gauge completes 2 rotations, it covers 1 mm over the pitch scale. The total number of the circular scale divisions is 50. The least count of the screw gauge in metre is:",
    "options": [
      "10⁻5",
      "10⁻2",
      "10⁻3",
      "10⁻4"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Least count of a screw gauge: LC = Pitch / Total Circular Scale Divisions.\n⚡ Step-by-Step Derivation:\n1. Given: In 2 complete rotations, the circular scale advances 1 mm.\n2. Pitch = Distance / Number of rotations = 1 mm / 2 = 0.5 mm.\n3. Total circular scale divisions = 50.\n4. Least Count (LC) = 0.5 mm / 50 = 0.01 mm.\n5. Convert to metres: 0.01 mm = 0.01 × 10⁻³ m = 10⁻⁵ m.\n💡 Examiner Pro-Tip: Be cautious of the number of rotations: 2 rotations = 1 mm means pitch is 0.5 mm, not 1 mm!",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Screw Gauge"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 540 200\" class=\"w-full max-w-lg mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"540\" height=\"200\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"24\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#0F172A\">Screw Gauge / Micrometer Reading Principle</text>\n  \n  <!-- U-frame / Anvil & Spindle -->\n  <path d=\"M 50,70 L 50,140 Q 50,165 85,165 L 140,165 Q 175,165 175,140 L 175,110\" fill=\"none\" stroke=\"#475569\" stroke-width=\"10\"/>\n  <rect x=\"75\" y=\"96\" width=\"12\" height=\"28\" fill=\"#94A3B8\" stroke=\"#334155\" stroke-width=\"1\"/>\n  <text x=\"81\" y=\"85\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\">Anvil</text>\n  \n  <!-- Spindle / Object gap -->\n  <rect x=\"135\" y=\"102\" width=\"40\" height=\"16\" fill=\"#CBD5E1\" stroke=\"#334155\" stroke-width=\"1\"/>\n  <circle cx=\"112\" cy=\"110\" r=\"10\" fill=\"#F87171\" stroke=\"#DC2626\" stroke-width=\"1.5\"/>\n  <text x=\"112\" y=\"135\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#DC2626\">Wire / Ball</text>\n  \n  <!-- Main Sleeve / Pitch Scale -->\n  <rect x=\"175\" y=\"92\" width=\"130\" height=\"36\" fill=\"#E2E8F0\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <line x1=\"175\" y1=\"110\" x2=\"305\" y2=\"110\" stroke=\"#0F172A\" stroke-width=\"1.5\"/> <!-- Reference Baseline -->\n  <!-- Pitch Scale marks: 0, 1, 2, 3, 4, 5 mm above, 0.5 mm below -->\n  <line x1=\"185\" y1=\"96\" x2=\"185\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <text x=\"185\" y=\"93\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#334155\">0</text>\n  <line x1=\"201\" y1=\"96\" x2=\"201\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"217\" y1=\"96\" x2=\"217\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"233\" y1=\"96\" x2=\"233\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"249\" y1=\"96\" x2=\"249\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"265\" y1=\"96\" x2=\"265\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <text x=\"265\" y=\"93\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#334155\">5</text>\n  <line x1=\"281\" y1=\"96\" x2=\"281\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"297\" y1=\"96\" x2=\"297\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <text x=\"240\" y=\"78\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\">Main Scale / Pitch Scale</text>\n  \n  <!-- Rotating Thimble / Circular Scale -->\n  <polygon points=\"305,82 320,82 320,86 420,86 420,134 320,134 320,138 305,138\" fill=\"#FEF08A\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n  <!-- Circular scale divisions -->\n  <line x1=\"305\" y1=\"88\" x2=\"318\" y2=\"88\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <text x=\"325\" y=\"91\" font-size=\"7\" font-weight=\"bold\" fill=\"#854D0E\">40</text>\n  <line x1=\"305\" y1=\"94\" x2=\"318\" y2=\"94\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"100\" x2=\"318\" y2=\"100\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"106\" x2=\"318\" y2=\"106\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <text x=\"325\" y=\"109\" font-size=\"7\" font-weight=\"bold\" fill=\"#854D0E\">25</text>\n  <line x1=\"305\" y1=\"112\" x2=\"318\" y2=\"112\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"118\" x2=\"318\" y2=\"118\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"124\" x2=\"318\" y2=\"124\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <text x=\"325\" y=\"127\" font-size=\"7\" font-weight=\"bold\" fill=\"#854D0E\">10</text>\n  <line x1=\"305\" y1=\"130\" x2=\"318\" y2=\"130\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"305\" y1=\"136\" x2=\"318\" y2=\"136\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <!-- Ratchet -->\n  <rect x=\"420\" y=\"96\" width=\"45\" height=\"28\" fill=\"#94A3B8\" stroke=\"#334155\" stroke-width=\"1.5\" rx=\"2\"/>\n  <text x=\"442\" y=\"114\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#1E293B\">Ratchet</text>\n  \n  <!-- Reading and Error formula -->\n  <text x=\"270\" y=\"185\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">Total Reading = MSR + (CSR × LC) − (Zero Error)</text>\n</svg>"
  },
  {
    "id": "allen-units-ex2-q36",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Error Analysis & Propagation",
    "subtopic": "Error Analysis & Propagation",
    "difficulty": "Hard",
    "questionText": "The determination of the value of acceleration due to gravity (g) by simple pendulum method employs the formula, g = 4π² L / T² The expression for the relative error in the value of 'g' is:",
    "question": "The determination of the value of acceleration due to gravity (g) by simple pendulum method employs the formula, g = 4π² L / T² The expression for the relative error in the value of 'g' is:",
    "options": [
      "∆ ∆∆ = π−  2g LT42g LT",
      "∆ ∆∆ = π+  2g LT42g LT",
      "∆∆ ∆= −gL T 2gL T",
      "∆∆ ∆= +gL T 2gL T Re-"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Relative error expression for simple pendulum: g = 4π² L / T².\n⚡ Step-by-Step Derivation:\n1. Given formula: g = 4π² L / T² = 4π² L T⁻².\n2. Taking logarithm: ln(g) = ln(4π²) + ln(L) − 2 ln(T).\n3. In terms of maximum relative fractional error:\n   Δg / g = ΔL / L + 2 (ΔT / T).\n4. 4π² is a constant with zero uncertainty.\n💡 Examiner Pro-Tip: Errors ALWAYS ADD in maximum fractional error determination.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 420 200\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"420\" height=\"200\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"210\" y=\"24\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#0F172A\">Simple Pendulum Method: g = 4π²(L / T²)</text>\n  \n  <!-- Rigid support -->\n  <rect x=\"150\" y=\"40\" width=\"120\" height=\"10\" fill=\"#475569\" rx=\"2\"/>\n  <line x1=\"140\" y1=\"40\" x2=\"280\" y2=\"40\" stroke=\"#334155\" stroke-width=\"2\"/>\n  \n  <!-- Suspension thread -->\n  <line x1=\"210\" y1=\"50\" x2=\"160\" y2=\"140\" stroke=\"#0284C7\" stroke-width=\"2\"/>\n  <line x1=\"210\" y1=\"50\" x2=\"210\" y2=\"150\" stroke=\"#94A3B8\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n  <line x1=\"210\" y1=\"50\" x2=\"260\" y2=\"140\" stroke=\"#0284C7\" stroke-width=\"1.5\" stroke-dasharray=\"2 2\"/>\n  \n  <!-- Bob -->\n  <circle cx=\"160\" cy=\"140\" r=\"14\" fill=\"#F97316\" stroke=\"#C2410C\" stroke-width=\"1.5\"/>\n  <circle cx=\"210\" cy=\"150\" r=\"14\" fill=\"#FED7AA\" stroke=\"#FB923C\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/>\n  <circle cx=\"260\" cy=\"140\" r=\"14\" fill=\"#FED7AA\" stroke=\"#FB923C\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/>\n  \n  <!-- Labels -->\n  <text x=\"145\" y=\"95\" font-size=\"10\" font-weight=\"bold\" fill=\"#0284C7\">Length (L)</text>\n  <text x=\"210\" y=\"175\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#475569\">Period (T = t / n)</text>\n  \n  <!-- Formula -->\n  <text x=\"210\" y=\"192\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#DC2626\">Relative Error: Δg/g = ΔL/L + 2(ΔT/T)</text>\n</svg>"
  },
  {
    "id": "allen-units-ex2-q37",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Medium",
    "questionText": "The physical quantity that has the same dimensional formula as pressure is :",
    "question": "The physical quantity that has the same dimensional formula as pressure is :",
    "options": [
      "Force",
      "Momentum",
      "Young's modulus of elasticity",
      "Coefficient of viscosity"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Physical quantities with identical dimensions to Pressure [M L⁻¹ T⁻²].\n⚡ Step-by-Step Derivation:\n1. Pressure = Force / Area = [MLT⁻²] / [L²] = [ML⁻¹T⁻²].\n2. Young's modulus of elasticity Y = Stress / Strain = (F / A) / (ΔL / L) = [ML⁻¹T⁻²] / 1 = [ML⁻¹T⁻²].\n3. Force has [MLT⁻²]. Momentum has [MLT⁻¹]. Coefficient of viscosity has [ML⁻¹T⁻¹].\n4. Therefore, Young's modulus has the same dimensional formula as pressure.\n💡 Examiner Pro-Tip: All elastic moduli (Young's, Bulk, Shear) and Stress have identical dimensions to Pressure.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex2-q38",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Error Analysis & Propagation",
    "subtopic": "Error Analysis & Propagation",
    "difficulty": "Medium",
    "questionText": "The percentage error in the measurement of g is: (Given that g = 4π² L / T², L = (10 ± 0.1) cm, T = (100 ± 1) s)",
    "question": "The percentage error in the measurement of g is: (Given that g = 4π² L / T², L = (10 ± 0.1) cm, T = (100 ± 1) s)",
    "options": [
      "2%",
      "5%",
      "3%",
      "7%"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Percentage error in acceleration due to gravity g = 4π² L / T².\n⚡ Step-by-Step Derivation:\n1. Given: L = (10 ± 0.1) cm and T = (100 ± 1) s.\n2. Fractional error in length: ΔL / L = 0.1 / 10 = 0.01 (or 1%).\n3. Fractional error in time period: ΔT / T = 1 / 100 = 0.01 (or 1%).\n4. Percentage error in g:\n   % error in g = (% error in L) + 2 × (% error in T)\n                = 1% + 2 × (1%) = 1% + 2% = 3%.\n💡 Examiner Pro-Tip: Notice that T is squared, so its 1% error gets doubled to 2%.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 420 200\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"420\" height=\"200\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"210\" y=\"24\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#0F172A\">Simple Pendulum Method: g = 4π²(L / T²)</text>\n  \n  <!-- Rigid support -->\n  <rect x=\"150\" y=\"40\" width=\"120\" height=\"10\" fill=\"#475569\" rx=\"2\"/>\n  <line x1=\"140\" y1=\"40\" x2=\"280\" y2=\"40\" stroke=\"#334155\" stroke-width=\"2\"/>\n  \n  <!-- Suspension thread -->\n  <line x1=\"210\" y1=\"50\" x2=\"160\" y2=\"140\" stroke=\"#0284C7\" stroke-width=\"2\"/>\n  <line x1=\"210\" y1=\"50\" x2=\"210\" y2=\"150\" stroke=\"#94A3B8\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n  <line x1=\"210\" y1=\"50\" x2=\"260\" y2=\"140\" stroke=\"#0284C7\" stroke-width=\"1.5\" stroke-dasharray=\"2 2\"/>\n  \n  <!-- Bob -->\n  <circle cx=\"160\" cy=\"140\" r=\"14\" fill=\"#F97316\" stroke=\"#C2410C\" stroke-width=\"1.5\"/>\n  <circle cx=\"210\" cy=\"150\" r=\"14\" fill=\"#FED7AA\" stroke=\"#FB923C\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/>\n  <circle cx=\"260\" cy=\"140\" r=\"14\" fill=\"#FED7AA\" stroke=\"#FB923C\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/>\n  \n  <!-- Labels -->\n  <text x=\"145\" y=\"95\" font-size=\"10\" font-weight=\"bold\" fill=\"#0284C7\">Length (L)</text>\n  <text x=\"210\" y=\"175\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#475569\">Period (T = t / n)</text>\n  \n  <!-- Formula -->\n  <text x=\"210\" y=\"192\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#DC2626\">Relative Error: Δg/g = ΔL/L + 2(ΔT/T)</text>\n</svg>"
  }
];

export const ALLEN_UNITS_EXERCISE_3_QUESTIONS: Question[] = [
  {
    "id": "allen-units-ex3-q01",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Units & Systems of Units",
    "subtopic": "Units & Systems of Units",
    "difficulty": "Hard",
    "questionText": "In a particular system the units of length mass and time are chosen to be 10 cm, 10 g and 0.1 s respectively. The unit of force in this system will be equal to",
    "question": "In a particular system the units of length mass and time are chosen to be 10 cm, 10 g and 0.1 s respectively. The unit of force in this system will be equal to",
    "options": [
      "0.1 N",
      "1 N",
      "10 N",
      "100 N"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Conversion of units of force into an arbitrary system of units using [F] = [M L T⁻²].\n⚡ Step-by-Step Derivation:\n1. Unit of Force has dimensions [F] = [M¹ L¹ T⁻²] = M · L / T².\n2. Given new system base units:\n   - Mass M' = 10 g = 10 × 10⁻³ kg = 10⁻² kg.\n   - Length L' = 10 cm = 10 × 10⁻² m = 10⁻¹ m.\n   - Time T' = 0.1 s = 10⁻¹ s.\n3. Unit of force in new system:\n   F' = (10⁻² kg) × (10⁻¹ m) / (10⁻¹ s)²\n      = 10⁻³ / 10⁻² kg·m/s²\n      = 0.1 N.\n💡 Examiner Pro-Tip: Dimensional conversion formula: n₂ = n₁ [M₁/M₂]^a [L₁/L₂]^b [T₁/T₂]^c.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex3-q02",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Errors in Measurement",
    "subtopic": "Errors in Measurement",
    "difficulty": "Hard",
    "questionText": "The period of oscillation of a simple pendulum in an experiment is recorded as 2.63s, 2.56s, 2.42s, 2.71s and 2.80s respectively. The average absolute error is",
    "question": "The period of oscillation of a simple pendulum in an experiment is recorded as 2.63s, 2.56s, 2.42s, 2.71s and 2.80s respectively. The average absolute error is",
    "options": [
      "0.1s",
      "0.11s",
      "0.01s",
      "1.0s"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Mean value and Mean Absolute Error in a series of measurements.\n⚡ Step-by-Step Derivation:\n1. Given readings: 2.63 s, 2.56 s, 2.42 s, 2.71 s, 2.80 s.\n2. Mean period T_mean = (2.63 + 2.56 + 2.42 + 2.71 + 2.80) / 5 = 13.12 / 5 = 2.624 s ≈ 2.62 s.\n3. Calculate absolute errors |ΔT_i| = |T_i − T_mean|:\n   |2.63 - 2.62| = 0.01 s\n   |2.56 - 2.62| = 0.06 s\n   |2.42 - 2.62| = 0.20 s\n   |2.71 - 2.62| = 0.09 s\n   |2.80 - 2.62| = 0.18 s\n4. Mean absolute error:\n   ΔT_mean = (0.01 + 0.06 + 0.20 + 0.09 + 0.18) / 5 = 0.54 / 5 = 0.108 s ≈ 0.11 s.\n💡 Examiner Pro-Tip: The average absolute error is reported to 2 decimal places matching the raw data resolution: 0.11 s.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 420 200\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"420\" height=\"200\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"210\" y=\"24\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#0F172A\">Simple Pendulum Method: g = 4π²(L / T²)</text>\n  \n  <!-- Rigid support -->\n  <rect x=\"150\" y=\"40\" width=\"120\" height=\"10\" fill=\"#475569\" rx=\"2\"/>\n  <line x1=\"140\" y1=\"40\" x2=\"280\" y2=\"40\" stroke=\"#334155\" stroke-width=\"2\"/>\n  \n  <!-- Suspension thread -->\n  <line x1=\"210\" y1=\"50\" x2=\"160\" y2=\"140\" stroke=\"#0284C7\" stroke-width=\"2\"/>\n  <line x1=\"210\" y1=\"50\" x2=\"210\" y2=\"150\" stroke=\"#94A3B8\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n  <line x1=\"210\" y1=\"50\" x2=\"260\" y2=\"140\" stroke=\"#0284C7\" stroke-width=\"1.5\" stroke-dasharray=\"2 2\"/>\n  \n  <!-- Bob -->\n  <circle cx=\"160\" cy=\"140\" r=\"14\" fill=\"#F97316\" stroke=\"#C2410C\" stroke-width=\"1.5\"/>\n  <circle cx=\"210\" cy=\"150\" r=\"14\" fill=\"#FED7AA\" stroke=\"#FB923C\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/>\n  <circle cx=\"260\" cy=\"140\" r=\"14\" fill=\"#FED7AA\" stroke=\"#FB923C\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/>\n  \n  <!-- Labels -->\n  <text x=\"145\" y=\"95\" font-size=\"10\" font-weight=\"bold\" fill=\"#0284C7\">Length (L)</text>\n  <text x=\"210\" y=\"175\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#475569\">Period (T = t / n)</text>\n  \n  <!-- Formula -->\n  <text x=\"210\" y=\"192\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#DC2626\">Relative Error: Δg/g = ΔL/L + 2(ΔT/T)</text>\n</svg>"
  },
  {
    "id": "allen-units-ex3-q03",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Errors in Measurement",
    "subtopic": "Errors in Measurement",
    "difficulty": "Hard",
    "questionText": "The length, breadth and thickness of a strip are (10.0 ± 0.1) cm, (1.00 ± 0.01) cm and (0.100 ± 0.001) cm respectively. The most probable error in its volume will be:",
    "question": "The length, breadth and thickness of a strip are (10.0 ± 0.1) cm, (1.00 ± 0.01) cm and (0.100 ± 0.001) cm respectively. The most probable error in its volume will be:",
    "options": [
      ".00±0.01) cm and (0.100± 0.001) cm respectively. The most probable error in its volume will be",
      "± 0.03 cm³",
      "± 0.111 cm³",
      "± 0.012 cm³"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Absolute error propagation in the volume of a rectangular strip: V = l × b × t.\n⚡ Step-by-Step Derivation:\n1. Given dimensions:\n   - Length l = (10.0 ± 0.1) cm\n   - Breadth b = (1.00 ± 0.01) cm\n   - Thickness t = (0.100 ± 0.001) cm\n2. Nominal volume V = 10.0 × 1.00 × 0.100 = 1.00 cm³.\n3. Fractional error:\n   ΔV / V = Δl / l + Δb / b + Δt / t\n          = 0.1 / 10.0 + 0.01 / 1.00 + 0.001 / 0.100\n          = 0.01 + 0.01 + 0.01 = 0.03.\n4. Most probable absolute error:\n   ΔV = 0.03 × V = 0.03 × 1.00 cm³ = ±0.03 cm³.\n💡 Examiner Pro-Tip: Notice that each dimension has an identical 1% relative error, summing to 3% in volume.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ]
  },
  {
    "id": "allen-units-ex3-q04",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Vernier Callipers & Least Count",
    "subtopic": "Vernier Callipers & Least Count",
    "difficulty": "Hard",
    "questionText": "The length of a cylinder is measured with a metre rod having least count 0.1 cm. Its diameter is measured with vernier callipers having least count 0.01 cm. Given the length is 5.0 cm. and radius is 2.00 cm. The percentage error in the calculated value of volume will be -",
    "question": "The length of a cylinder is measured with a metre rod having least count 0.1 cm. Its diameter is measured with vernier callipers having least count 0.01 cm. Given the length is 5.0 cm. and radius is 2.00 cm. The percentage error in the calculated value of volume will be -",
    "options": [
      "2%",
      "1%",
      "3%",
      "4%"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Percentage error in the volume of a cylinder: V = π r² L.\n⚡ Step-by-Step Derivation:\n1. Volume formula: V = π r² L.\n2. Fractional error in volume: ΔV / V = 2 (Δr / r) + (ΔL / L).\n3. Given measurements:\n   - Length L = 5.0 cm, least count ΔL = 0.1 cm ⟹ ΔL / L = 0.1 / 5.0 = 0.02 (2%).\n   - Radius r = 2.00 cm, vernier least count Δr = 0.01 cm ⟹ Δr / r = 0.01 / 2.00 = 0.005 (0.5%).\n4. Total percentage error:\n   %ΔV = 2 × (0.5%) + 2.0% = 1.0% + 2.0% = 3%.\n💡 Examiner Pro-Tip: Radius is squared in V = π r² L, doubling its 0.5% uncertainty to 1.0%.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Vernier Callipers",
      "Error Propagation"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 520 180\" class=\"w-full max-w-lg mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"520\" height=\"180\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"260\" y=\"24\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#0F172A\">Vernier Callipers Scale Principle (LC = 1 MSD − 1 VSD)</text>\n  \n  <!-- Main Scale Body -->\n  <rect x=\"30\" y=\"45\" width=\"460\" height=\"42\" fill=\"#E2E8F0\" stroke=\"#475569\" stroke-width=\"1.5\" rx=\"3\"/>\n  <!-- Main Scale Graduations (0 to 15 mm) -->\n  <line x1=\"40\" y1=\"45\" x2=\"40\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"40\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">0</text>\n  <line x1=\"68\" y1=\"45\" x2=\"68\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"96\" y1=\"45\" x2=\"96\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"124\" y1=\"45\" x2=\"124\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"152\" y1=\"45\" x2=\"152\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"180\" y1=\"45\" x2=\"180\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"180\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">5</text>\n  <line x1=\"208\" y1=\"45\" x2=\"208\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"236\" y1=\"45\" x2=\"236\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"264\" y1=\"45\" x2=\"264\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"292\" y1=\"45\" x2=\"292\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"320\" y1=\"45\" x2=\"320\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"320\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">10</text>\n  <line x1=\"348\" y1=\"45\" x2=\"348\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"376\" y1=\"45\" x2=\"376\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"404\" y1=\"45\" x2=\"404\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"432\" y1=\"45\" x2=\"432\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"460\" y1=\"45\" x2=\"460\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"460\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">15</text>\n  <text x=\"480\" y=\"65\" font-size=\"10\" font-weight=\"bold\" fill=\"#475569\">Main Scale (mm)</text>\n  \n  <!-- Vernier Sliding Scale -->\n  <rect x=\"96\" y=\"87\" width=\"280\" height=\"42\" fill=\"#FEF08A\" stroke=\"#CA8A04\" stroke-width=\"1.5\" rx=\"3\"/>\n  <line x1=\"105.0\" y1=\"87\" x2=\"105.0\" y2=\"107\" stroke=\"#854D0E\" stroke-width=\"1.8\"/>\n  <text x=\"105.0\" y=\"120\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">0</text>\n  <line x1=\"130.2\" y1=\"87\" x2=\"130.2\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"155.4\" y1=\"87\" x2=\"155.4\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"180.6\" y1=\"87\" x2=\"180.6\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"205.8\" y1=\"87\" x2=\"205.8\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"231.0\" y1=\"87\" x2=\"231.0\" y2=\"107\" stroke=\"#854D0E\" stroke-width=\"1.8\"/>\n  <text x=\"231.0\" y=\"120\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">5</text>\n  <line x1=\"256.2\" y1=\"87\" x2=\"256.2\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"281.4\" y1=\"87\" x2=\"281.4\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"306.6\" y1=\"87\" x2=\"306.6\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"331.79999999999995\" y1=\"87\" x2=\"331.79999999999995\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"357.0\" y1=\"87\" x2=\"357.0\" y2=\"107\" stroke=\"#854D0E\" stroke-width=\"1.8\"/>\n  <text x=\"357.0\" y=\"120\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">10</text>\n  <text x=\"390\" y=\"112\" font-size=\"10\" font-weight=\"bold\" fill=\"#854D0E\">Vernier Scale (10 VSD = 9 MSD)</text>\n  \n  <!-- Indicator of Coincidence -->\n  <line x1=\"332\" y1=\"40\" x2=\"332\" y2=\"135\" stroke=\"#DC2626\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>\n  <circle cx=\"332\" cy=\"87\" r=\"4\" fill=\"#DC2626\"/>\n  <text x=\"332\" y=\"150\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#DC2626\">Coincidence Mark</text>\n  \n  <!-- Least count formula label -->\n  <text x=\"260\" y=\"170\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">Least Count = 1 MSD − (N−1)/N MSD = 1/N MSD</text>\n</svg>"
  },
  {
    "id": "allen-units-ex3-q05",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Hard",
    "questionText": "If energy (E), velocity (V) and time (T) were chosen as fundame ntal physical quantities for measurement, then the dimensional formula for mass will be :-",
    "question": "If energy (E), velocity (V) and time (T) were chosen as fundame ntal physical quantities for measurement, then the dimensional formula for mass will be :-",
    "options": [
      "[E 1 V2 T1]",
      "[E2 V-2 T0]",
      "[E1 V-2 T0]",
      "[E-1 V2 T1]"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Expressing mass in terms of fundamental quantities Energy (E), Velocity (V), and Time (T).\n⚡ Step-by-Step Derivation:\n1. From kinetic energy: E = ½ M V² (where ½ is a dimensionless scalar constant).\n2. Rearranging for mass: M = 2 E / V² = 2 E V⁻².\n3. In terms of dimensions: [M] = [E¹ V⁻² T⁰].\n💡 Examiner Pro-Tip: Using E = ½mv² or E = mc² immediately gives [M] = [E V⁻²] with zero time dependence.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex3-q06",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Units & Systems of Units",
    "subtopic": "Units & Systems of Units",
    "difficulty": "Hard",
    "questionText": "Which of the following does not have the same unit as others ?",
    "question": "Which of the following does not have the same unit as others ?",
    "options": [
      "watt-s",
      "kilowatt-hour",
      "eV",
      "J-s"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Units of Energy vs Angular Momentum / Action.\n⚡ Step-by-Step Derivation:\n1. watt-s = Power × Time = Energy = Joules.\n2. kilowatt-hour = (10³ W) × (3600 s) = 3.6 × 10⁶ Joules (Unit of commercial electrical energy).\n3. eV (electron-volt) = 1.6 × 10⁻¹⁹ Joules (Unit of microscopic energy).\n4. J-s (Joule-second) = Energy × Time = [ML²T⁻²][T] = [ML²T⁻¹] (Unit of angular momentum and Planck's constant).\n5. Hence, J-s does not have the same unit as the other three.\n💡 Examiner Pro-Tip: Watt-hour, kWh, eV, and calorie are all energy units; Joule-second is Action / Angular Momentum.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex3-q07",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Units & Systems of Units",
    "subtopic": "Units & Systems of Units",
    "difficulty": "Hard",
    "questionText": "Suppose refractive index µ is given as µ = A + B/λ², were A and B are constants and λ is wavelength then the dimension of B are same as that of :-",
    "question": "Suppose refractive index µ is given as µ = A + B/λ², were A and B are constants and λ is wavelength then the dimension of B are same as that of :-",
    "options": [
      "wavelength",
      "pressure",
      "area",
      "volume"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Cauchy's dispersion equation: μ = A + B / λ².\n⚡ Step-by-Step Derivation:\n1. Refractive index μ is the ratio of speeds (c/v), so it is dimensionless [M⁰L⁰T⁰].\n2. By the principle of dimensional homogeneity, each term added must have the same dimension as μ.\n3. Therefore, [B / λ²] = [μ] = 1 (dimensionless).\n4. [B] = [λ²] = [L²].\n5. [L²] represents Area.\n💡 Examiner Pro-Tip: Cauchy's formula shows dispersion: shorter wavelengths (violet) experience higher refractive indices.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex3-q08",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Dimensional Analysis & Applications",
    "subtopic": "Dimensional Analysis & Applications",
    "difficulty": "Hard",
    "questionText": "The dimensional formula for Planck's constant h and gravitational constant G respectively are :-",
    "question": "The dimensional formula for Planck's constant h and gravitational constant G respectively are :-",
    "options": [
      "[ML3T⁻²], [M⁻¹L2T⁻³]",
      "[ML2T⁻¹], [M⁻¹L3T⁻²]",
      "[ML3T⁻²], [M⁻¹L2T2]",
      "[MLT⁻³], [M⁻¹L3T⁻³]"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Dimensional formulas of Planck's constant h and Gravitational constant G.\n⚡ Step-by-Step Derivation:\n1. Photon energy E = hν ⟹ [h] = [E] / [ν] = [ML²T⁻²] / [T⁻¹] = [ML²T⁻¹].\n2. Gravitational force F = G m₁m₂ / r² ⟹ [G] = [F r²] / [m²] = [MLT⁻²][L²] / [M²] = [M⁻¹L³T⁻²].\n3. Respectively, they are [ML²T⁻¹] and [M⁻¹L³T⁻²].\n💡 Examiner Pro-Tip: These two fundamental constants are high-yield staples in NEET physics exams.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  },
  {
    "id": "allen-units-ex3-q09",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Error Analysis & Propagation",
    "subtopic": "Error Analysis & Propagation",
    "difficulty": "Hard",
    "questionText": "A wire has a mass (0.3 ± 0.003) g, radius (0.5 ± 0.005) mm and length (6 ± 0.06) cm. The maximum percentage error in the measurement of its density is-",
    "question": "A wire has a mass (0.3 ± 0.003) g, radius (0.5 ± 0.005) mm and length (6 ± 0.06) cm. The maximum percentage error in the measurement of its density is-",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Maximum percentage error in the density of a cylindrical wire: ρ = m / (π r² L).\n⚡ Step-by-Step Derivation:\n1. Formula: ρ = m / V = m / (π r² L).\n2. Maximum relative error: Δρ / ρ = Δm / m + 2 (Δr / r) + ΔL / L.\n3. Given:\n   - m = (0.3 ± 0.003) g ⟹ %Δm = (0.003 / 0.3) × 100% = 1%.\n   - r = (0.5 ± 0.005) mm ⟹ %Δr = (0.005 / 0.5) × 100% = 1%.\n   - L = (6 ± 0.06) cm ⟹ %ΔL = (0.06 / 6) × 100% = 1%.\n4. Total percentage error in density:\n   %Δρ = 1% + 2 × (1%) + 1% = 1% + 2% + 1% = 4%.\n💡 Examiner Pro-Tip: When calculating wire density, radius uncertainty is always doubled because the cross-section is πr².",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Error Propagation"
    ]
  },
  {
    "id": "allen-units-ex3-q10",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Vernier Callipers & Least Count",
    "subtopic": "Vernier Callipers & Least Count",
    "difficulty": "Hard",
    "questionText": "In a vernier callipers, one main scale division is x cm and n divisions of the vernier sca le coincide with (n -1) divisions of the main scale. The least count (in cm) of the callipers is :-",
    "question": "In a vernier callipers, one main scale division is x cm and n divisions of the vernier sca le coincide with (n -1) divisions of the main scale. The least count (in cm) of the callipers is :-",
    "options": [
      "n1 xn −",
      "nx / (n − 1)",
      "x / n",
      "x / (n − 1)"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Generalized formula for Vernier Callipers Least Count: LC = 1 MSD − 1 VSD.\n⚡ Step-by-Step Derivation:\n1. Given: 1 MSD = x cm.\n2. Given: n divisions of vernier scale = (n − 1) divisions of main scale.\n3. n VSD = (n − 1) MSD ⟹ 1 VSD = [(n − 1) / n] MSD.\n4. Least Count LC = 1 MSD − 1 VSD = [1 − (n − 1)/n] MSD = (1 / n) MSD.\n5. Substitute 1 MSD = x cm:\n   LC = (1 / n) × (x cm) = (x / n) cm.\n💡 Examiner Pro-Tip: General formula for Vernier Least Count is LC = (Value of 1 MSD) / (Number of Vernier divisions).",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics",
      "Vernier Callipers"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 520 180\" class=\"w-full max-w-lg mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"520\" height=\"180\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"260\" y=\"24\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#0F172A\">Vernier Callipers Scale Principle (LC = 1 MSD − 1 VSD)</text>\n  \n  <!-- Main Scale Body -->\n  <rect x=\"30\" y=\"45\" width=\"460\" height=\"42\" fill=\"#E2E8F0\" stroke=\"#475569\" stroke-width=\"1.5\" rx=\"3\"/>\n  <!-- Main Scale Graduations (0 to 15 mm) -->\n  <line x1=\"40\" y1=\"45\" x2=\"40\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"40\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">0</text>\n  <line x1=\"68\" y1=\"45\" x2=\"68\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"96\" y1=\"45\" x2=\"96\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"124\" y1=\"45\" x2=\"124\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"152\" y1=\"45\" x2=\"152\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"180\" y1=\"45\" x2=\"180\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"180\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">5</text>\n  <line x1=\"208\" y1=\"45\" x2=\"208\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"236\" y1=\"45\" x2=\"236\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"264\" y1=\"45\" x2=\"264\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"292\" y1=\"45\" x2=\"292\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"320\" y1=\"45\" x2=\"320\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"320\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">10</text>\n  <line x1=\"348\" y1=\"45\" x2=\"348\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"376\" y1=\"45\" x2=\"376\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"404\" y1=\"45\" x2=\"404\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"432\" y1=\"45\" x2=\"432\" y2=\"58\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n  <line x1=\"460\" y1=\"45\" x2=\"460\" y2=\"68\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"460\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">15</text>\n  <text x=\"480\" y=\"65\" font-size=\"10\" font-weight=\"bold\" fill=\"#475569\">Main Scale (mm)</text>\n  \n  <!-- Vernier Sliding Scale -->\n  <rect x=\"96\" y=\"87\" width=\"280\" height=\"42\" fill=\"#FEF08A\" stroke=\"#CA8A04\" stroke-width=\"1.5\" rx=\"3\"/>\n  <line x1=\"105.0\" y1=\"87\" x2=\"105.0\" y2=\"107\" stroke=\"#854D0E\" stroke-width=\"1.8\"/>\n  <text x=\"105.0\" y=\"120\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">0</text>\n  <line x1=\"130.2\" y1=\"87\" x2=\"130.2\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"155.4\" y1=\"87\" x2=\"155.4\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"180.6\" y1=\"87\" x2=\"180.6\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"205.8\" y1=\"87\" x2=\"205.8\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"231.0\" y1=\"87\" x2=\"231.0\" y2=\"107\" stroke=\"#854D0E\" stroke-width=\"1.8\"/>\n  <text x=\"231.0\" y=\"120\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">5</text>\n  <line x1=\"256.2\" y1=\"87\" x2=\"256.2\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"281.4\" y1=\"87\" x2=\"281.4\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"306.6\" y1=\"87\" x2=\"306.6\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"331.79999999999995\" y1=\"87\" x2=\"331.79999999999995\" y2=\"98\" stroke=\"#854D0E\" stroke-width=\"1.2\"/>\n  <line x1=\"357.0\" y1=\"87\" x2=\"357.0\" y2=\"107\" stroke=\"#854D0E\" stroke-width=\"1.8\"/>\n  <text x=\"357.0\" y=\"120\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">10</text>\n  <text x=\"390\" y=\"112\" font-size=\"10\" font-weight=\"bold\" fill=\"#854D0E\">Vernier Scale (10 VSD = 9 MSD)</text>\n  \n  <!-- Indicator of Coincidence -->\n  <line x1=\"332\" y1=\"40\" x2=\"332\" y2=\"135\" stroke=\"#DC2626\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>\n  <circle cx=\"332\" cy=\"87\" r=\"4\" fill=\"#DC2626\"/>\n  <text x=\"332\" y=\"150\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#DC2626\">Coincidence Mark</text>\n  \n  <!-- Least count formula label -->\n  <text x=\"260\" y=\"170\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">Least Count = 1 MSD − (N−1)/N MSD = 1/N MSD</text>\n</svg>"
  },
  {
    "id": "allen-units-ex3-q11",
    "subject": "Physics",
    "chapter": "Units, Dimensions and Errors in Measurement",
    "topic": "Physical World & Measurement",
    "subtopic": "Physical World & Measurement",
    "difficulty": "Hard",
    "questionText": "Choose the incorrect statement out of the following :-",
    "question": "Choose the incorrect statement out of the following :-",
    "options": [
      "Every measurement made by any measuring instrument has some error.",
      "Every calculated physical quantity that is based on measured values has some error.",
      "A measurement can have more accuracy but less precision and vice versa.",
      "The percentage error is different from relative error."
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Understanding experimental error concepts: Relative vs Percentage error.\n⚡ Step-by-Step Derivation:\n1. Every measurement carries instrumental uncertainty (True).\n2. Any calculated quantity based on measured values propagates error (True).\n3. High accuracy with low precision (or vice versa) is well established in error analysis (True).\n4. Relative error (Δx / x) and percentage error [(Δx / x) × 100%] represent the identical fractional uncertainty simply scaled by 100; saying they are fundamentally different physical concepts is incorrect.\n💡 Examiner Pro-Tip: Percentage error is simply relative error expressed as a percentage.",
    "tags": [
      "Units and Measurements",
      "Dimensions",
      "Master Question Bank",
      "NEET Physics"
    ]
  }
];

export const ALL_ALLEN_UNITS_DIMENSIONS_QUESTIONS: Question[] = [
  ...ALLEN_UNITS_EXERCISE_1_QUESTIONS,
  ...ALLEN_UNITS_EXERCISE_2_QUESTIONS,
  ...ALLEN_UNITS_EXERCISE_3_QUESTIONS
];
