import { Question } from "../types";

export const SELF_EVALUATION_TEST_26_QUESTIONS: Question[] = [
  {
    "id": "universal-set26-q01",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Bohr Model of Hydrogen Atom",
    "difficulty": "Medium",
    "questionText": "In Bohr model of hydrogen atom, the electrostatic force on the revolving electron depends on the principal quantum number n as: [SET-26]",
    "options": [
      "F ∝ 1 / n³",
      "F ∝ 1 / n⁴",
      "F ∝ 1 / n⁵",
      "Does not depend on n"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Coulomb force on the electron in Bohr orbit is F = k e² / r².\n⚡ Step-by-Step Derivation:\n1. The radius of the nth Bohr orbit is r_n ∝ n².\n2. Substituting into Coulomb's law: F = k e² / (r_n)² ∝ 1 / (n²)² = 1 / n⁴.\n3. Alternatively, centripetal force F = m v² / r. Since v ∝ 1/n and r ∝ n², F ∝ (1/n)² / n² = 1 / n⁴.\n💡 Examiner Pro-Tip: F ∝ 1/n⁴, orbital frequency f ∝ 1/n³, and speed v ∝ 1/n.",
    "tags": [
      "Bohr Model",
      "Atoms",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q02",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Radioactive Decay Series",
    "difficulty": "Medium",
    "questionText": "A nucleus _Z X^A emits 9 α-particles and 5 β⁻ particles. The ratio of total protons and neutrons in the final nucleus is: [SET-26]",
    "options": [
      "(Z - 13) / (A - Z - 23)",
      "(Z - 18) / (A - 36)",
      "(Z - 13) / (A - 36)",
      "(Z - 13) / (A - Z - 13)"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Emission of an α-particle (⁴₂He) decreases A by 4 and Z by 2. Emission of a β⁻ particle (⁰₋₁e) leaves A unchanged and increases Z by 1.\n⚡ Step-by-Step Derivation:\n1. After 9 α-decays: mass number = A - 9(4) = A - 36; atomic number = Z - 9(2) = Z - 18.\n2. After 5 β⁻ decays: mass number = A - 36; atomic number = (Z - 18) + 5(1) = Z - 13.\n3. Total protons in final nucleus: P = Z - 13.\n4. Total neutrons in final nucleus: N = A_final - Z_final = (A - 36) - (Z - 13) = A - Z - 23.\n5. Ratio P / N = (Z - 13) / (A - Z - 23).",
    "tags": [
      "Radioactivity",
      "Nuclei",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q03",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Half-Life & Decay Kinetics",
    "difficulty": "Easy",
    "questionText": "If t_{1/2} is the half-life of a radioactive substance, then t_{3/4} is the time in which the substance: [SET-26]",
    "options": [
      "Decays 3/4th",
      "Remains 3/4th",
      "Decays 1/2",
      "Remains 1/2"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: By definition, t_{1/2} is the time in which half (50%) of the radioactive nuclei decay.\n⚡ Step-by-Step Derivation:\n1. In radioactive decay notation, t_{x} denotes the time required for fraction x of the substance to decay.\n2. Therefore, t_{3/4} is the time in which 3/4th (75%) of the initial active nuclei disintegrate, leaving 1/4th undecayed.\n3. This corresponds to exactly two half-lives: t_{3/4} = 2 t_{1/2}.",
    "tags": [
      "Radioactivity",
      "Nuclei",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q04",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Hydrogen-Like Atoms Energy Levels",
    "difficulty": "Hard",
    "questionText": "The energy level diagram for a hydrogen-like atom is shown in the figure (levels: n=1 at -54.4 eV, n=2 at -13.6 eV, n=3 at -6.04 eV, n=∞ at 0 eV). The radius of its first Bohr orbit is: [SET-26]",
    "diagramSvg": "<svg viewBox=\"0 0 380 220\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"380\" height=\"220\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"190\" y=\"24\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">Energy Level Diagram of Hydrogen-like Atom</text>\n  \n  <!-- Level n = infinity -->\n  <line x1=\"70\" y1=\"50\" x2=\"310\" y2=\"50\" stroke=\"#64748B\" stroke-dasharray=\"3,3\" stroke-width=\"1.5\"/>\n  <text x=\"55\" y=\"54\" text-anchor=\"end\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\">n = ∞</text>\n  <text x=\"320\" y=\"54\" font-size=\"11\" font-family=\"monospace\" fill=\"#64748B\">0 eV</text>\n\n  <!-- Level n = 3 -->\n  <line x1=\"70\" y1=\"90\" x2=\"310\" y2=\"90\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n  <text x=\"55\" y=\"94\" text-anchor=\"end\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\">n = 3</text>\n  <text x=\"320\" y=\"94\" font-size=\"11\" font-family=\"monospace\" fill=\"#64748B\">-6.04 eV</text>\n\n  <!-- Level n = 2 -->\n  <line x1=\"70\" y1=\"135\" x2=\"310\" y2=\"135\" stroke=\"#475569\" stroke-width=\"1.8\"/>\n  <text x=\"55\" y=\"139\" text-anchor=\"end\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\">n = 2</text>\n  <text x=\"320\" y=\"139\" font-size=\"11\" font-family=\"monospace\" fill=\"#475569\">-13.6 eV</text>\n\n  <!-- Level n = 1 -->\n  <line x1=\"70\" y1=\"185\" x2=\"310\" y2=\"185\" stroke=\"#0F172A\" stroke-width=\"2.5\"/>\n  <text x=\"55\" y=\"189\" text-anchor=\"end\" font-size=\"11\" font-weight=\"bold\" fill=\"#0F172A\">n = 1</text>\n  <text x=\"320\" y=\"189\" font-size=\"11\" font-family=\"monospace\" font-weight=\"bold\" fill=\"#0F172A\">-54.4 eV</text>\n</svg>",
    "options": [
      "0.265 Å",
      "0.53 Å",
      "0.132 Å",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Energy of nth orbit of hydrogen-like atom is E_n = -13.6 Z² / n² eV, and radius is r_n = 0.53 (n² / Z) Å.\n⚡ Step-by-Step Derivation:\n1. From the diagram, ground state energy E₁ = -54.4 eV.\n2. Equating: -13.6 Z² / 1² = -54.4 ⟹ Z² = 4 ⟹ Z = 2 (singly ionized helium He⁺).\n3. Radius of first orbit: r₁ = 0.53 (1² / 2) Å = 0.265 Å.",
    "tags": [
      "Bohr Model",
      "Atoms",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q05",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Ionization & Separation Work",
    "difficulty": "Medium",
    "questionText": "How much work must be done to pull apart the electron and proton that make up the hydrogen atom, if the atom is initially in the state with n = 2? [SET-26]",
    "options": [
      "13.6 × 1.6 × 10⁻¹⁹ J",
      "3.4 × 1.6 × 10⁻¹⁹ J",
      "1.51 × 1.6 × 10⁻¹⁹ J",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Work done to pull constituents infinitely apart equals binding energy E_binding = E_∞ - E_initial.\n⚡ Step-by-Step Derivation:\n1. Energy in state n = 2: E₂ = -13.6 / 2² = -3.4 eV.\n2. Work done: W = E_∞ - E₂ = 0 - (-3.4 eV) = +3.4 eV.\n3. Converting to joules: W = 3.4 × 1.6 × 10⁻¹⁹ J.",
    "tags": [
      "Atoms",
      "Binding Energy",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q06",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Activity Calculation",
    "difficulty": "Hard",
    "questionText": "The nuclide ¹³¹I is radioactive, with a half-life of 8.04 days. At noon on January 1, the activity of a certain sample is 600 Bq. The activity at noon on January 24 will be: [SET-26]",
    "options": [
      "75 Bq",
      "Less than 75 Bq",
      "More than 75 Bq",
      "150 Bq"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Activity A(t) = A₀ (1/2)^(t / T_{1/2}).\n⚡ Step-by-Step Derivation:\n1. Elapsed time from noon Jan 1 to noon Jan 24 = 23 days.\n2. Number of half-lives: n = 23 / 8.04 ≈ 2.86.\n3. Exactly 3 half-lives would take 3 × 8.04 = 24.12 days, reducing activity to 600 / 2³ = 75 Bq.\n4. Since n = 2.86 < 3, less than 3 half-lives have elapsed, so the activity remains more than 75 Bq.",
    "tags": [
      "Radioactivity",
      "Nuclei",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q07",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Radioactive Decay Series End Products",
    "difficulty": "Easy",
    "questionText": "²³⁸U decays into ²³⁴Th by the emission of an α-particle, followed by a chain of further radioactive decays. Eventually a stable nuclide is reached. Which of the following stable nuclides is the end product of the ²³⁸U decay chain? [SET-26]",
    "options": [
      "²⁰⁶Pb",
      "²⁰⁷Pb",
      "²⁰⁸Pb",
      "²⁰⁹Pb"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: ²³⁸U is the parent of the Uranium (4n + 2) natural radioactive series.\n⚡ Step-by-Step Derivation:\n1. 238 = 4(59) + 2 (4n + 2 series).\n2. The stable end product of the 4n + 2 series is Lead-206 (²⁰⁶₈₂Pb).\n3. (Note: ²⁰⁷Pb is end product of 4n+3 Actinium series; ²⁰⁸Pb is end product of 4n Thorium series; ²⁰⁹Bi is end product of 4n+1 Neptunium series).",
    "tags": [
      "Nuclei",
      "Radioactivity",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q08",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Activity & Decay Constant",
    "difficulty": "Medium",
    "questionText": "If the mass of a radioactive sample is doubled, the activity of the sample and the disintegration constant of the sample are respectively: [SET-26]",
    "options": [
      "Increases, remains the same",
      "Decreases, increases",
      "Decreases, remains same",
      "Increases, decreases"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Activity A = λN, while decay constant λ is an intrinsic property of the radioisotope.\n⚡ Step-by-Step Derivation:\n1. Doubling the mass doubles the number of radioactive nuclei N.\n2. Since A = λN, activity doubles (increases).\n3. Decay constant λ depends only on nuclear forces and structure, independent of mass, pressure, or temperature (remains the same).",
    "tags": [
      "Radioactivity",
      "Nuclei",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q09",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclear Reactions & Coulomb Barrier",
    "difficulty": "Medium",
    "questionText": "When a sample of solid lithium is placed in a flask of hydrogen gas, the following reaction happens: ¹₁H + ⁷₃Li → ⁴₂He + ⁴₂He. This statement is: [SET-26]",
    "diagramSvg": "<svg viewBox=\"0 0 340 220\" class=\"w-full max-w-sm mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"340\" height=\"220\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"170\" y=\"24\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">Solid Lithium in Hydrogen Gas Flask</text>\n  \n  <!-- Flask outline -->\n  <path d=\"M 120,45 L 120,75 L 80,165 Q 75,180 95,185 L 245,185 Q 265,180 260,165 L 220,75 L 220,45 Z\" fill=\"#F0F9FF\" stroke=\"#0284C7\" stroke-width=\"2\"/>\n  <ellipse cx=\"170\" cy=\"45\" rx=\"50\" ry=\"10\" fill=\"#E0F2FE\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n  \n  <!-- H2 gas inside -->\n  <text x=\"210\" y=\"115\" font-size=\"13\" font-weight=\"bold\" fill=\"#0369A1\">H₂ (gas)</text>\n  <circle cx=\"140\" cy=\"95\" r=\"3\" fill=\"#38BDF8\"/>\n  <circle cx=\"180\" cy=\"90\" r=\"3\" fill=\"#38BDF8\"/>\n  <circle cx=\"160\" cy=\"125\" r=\"3\" fill=\"#38BDF8\"/>\n\n  <!-- Solid Li at bottom -->\n  <path d=\"M 105,160 L 125,145 L 175,145 L 185,165 L 170,180 L 115,180 Z\" fill=\"#94A3B8\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n  <text x=\"145\" y=\"166\" font-size=\"12\" font-weight=\"bold\" fill=\"#FFFFFF\">Li (solid)</text>\n</svg>",
    "options": [
      "True",
      "False",
      "May be true at a particular pressure",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Nuclear fusion and nuclear reactions require overcome of the Coulomb barrier.\n⚡ Step-by-Step Derivation:\n1. Both the proton (¹H nucleus) and Lithium nucleus (⁷Li) have positive charges (+e and +3e).\n2. At room temperature, atomic electron clouds shield nuclei, and thermal kinetic energy (~0.025 eV) is vastly insufficient to overcome the ~1 MeV Coulomb repulsive barrier.\n3. The reaction can only occur if high-energy accelerated protons are fired at lithium, not by simple mixing in a flask.\n4. Therefore, the statement is False.",
    "tags": [
      "Nuclear Reactions",
      "Nuclei",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q010",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Initial Decay Rate Calculation",
    "difficulty": "Hard",
    "questionText": "Consider an initially pure M gram sample of an isotope ^A X that has a half-life of T hours. What is its initial decay rate? (N_A = Avogadro's number) [SET-26]",
    "options": [
      "(M N_A) / T",
      "(0.693 M N_A) / T",
      "(0.693 M N_A) / (A T)",
      "(2.303 M N_A) / (A T)"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Initial decay rate (activity) is R₀ = λ N₀.\n⚡ Step-by-Step Derivation:\n1. Number of moles = M / A.\n2. Initial active nuclei: N₀ = (M / A) N_A.\n3. Decay constant: λ = 0.693 / T.\n4. Initial rate: R₀ = λ N₀ = (0.693 / T) × (M N_A / A) = (0.693 M N_A) / (A T).",
    "tags": [
      "Radioactivity",
      "Nuclei",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q011",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Mean Life Determination",
    "difficulty": "Hard",
    "questionText": "At a given instant there are 25% undecayed radioactive nuclei in a sample. After 10 seconds the number of undecayed nuclei reduces to 6.25%. The mean life of the nuclei is: [SET-26]",
    "options": [
      "14.43 sec",
      "7.21 sec",
      "5 sec",
      "10 sec"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Half-life T_{1/2} and mean life τ = T_{1/2} / ln 2 = 1.443 T_{1/2}.\n⚡ Step-by-Step Derivation:\n1. Ratio of remaining nuclei: 6.25% / 25% = 1/4 = (1/2)².\n2. This reduction takes 2 half-lives: 2 T_{1/2} = 10 s ⟹ T_{1/2} = 5 s.\n3. Mean life τ = T_{1/2} / 0.693 = 5 / 0.693 ≈ 7.21 sec.",
    "tags": [
      "Radioactivity",
      "Nuclei",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q012",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclear Radius & Mass Number",
    "difficulty": "Medium",
    "questionText": "Highly energetic electrons are bombarded on a target of an element containing 30 neutrons. The ratio of radii of the nucleus to that of Helium nucleus is (14)^{1/3}. The atomic number of the nucleus will be: [SET-26]",
    "options": [
      "25",
      "26",
      "56",
      "30"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Nuclear radius R = R₀ A^{1/3}.\n⚡ Step-by-Step Derivation:\n1. Ratio of radii: R / R_He = (A / A_He)^{1/3} = (A / 4)^{1/3}.\n2. Given: (A / 4)^{1/3} = 14^{1/3} ⟹ A / 4 = 14 ⟹ A = 56.\n3. Mass number A = Z + N ⟹ 56 = Z + 30 ⟹ Z = 26 (Iron, ²⁶Fe).",
    "tags": [
      "Nuclear Radius",
      "Nuclei",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q013",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Ionization Energy Ratio",
    "difficulty": "Easy",
    "questionText": "The ratio of ionization energy of Bohr's hydrogen atom and Bohr's hydrogen-like lithium atom (Li²⁺) is: [SET-26]",
    "options": [
      "1 : 1",
      "1 : 3",
      "1 : 9",
      "None of these"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Ionization energy in ground state is E_ion = 13.6 Z² eV.\n⚡ Step-by-Step Derivation:\n1. For Hydrogen: Z = 1 ⟹ E_ion(H) = 13.6(1)² = 13.6 eV.\n2. For Lithium ion (Li²⁺): Z = 3 ⟹ E_ion(Li²⁺) = 13.6(3)² = 13.6 × 9 eV.\n3. Ratio: E_ion(H) / E_ion(Li²⁺) = 1 / 9.",
    "tags": [
      "Bohr Model",
      "Atoms",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q014",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Bohr Quantization of Angular Momentum",
    "difficulty": "Medium",
    "questionText": "What is the angular momentum of an electron in Bohr's hydrogen atom whose energy is -0.544 eV? [SET-26]",
    "options": [
      "h / π",
      "2h / π",
      "5h / (2π)",
      "7h / (2π)"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Energy in nth orbit E_n = -13.6 / n² eV, and angular momentum L = n h / (2π).\n⚡ Step-by-Step Derivation:\n1. -13.6 / n² = -0.544 ⟹ n² = 13.6 / 0.544 = 25 ⟹ n = 5.\n2. L = 5 h / (2π).",
    "tags": [
      "Bohr Model",
      "Atoms",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q015",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Pair Annihilation Radiation",
    "difficulty": "Hard",
    "questionText": "Consider a hypothetical annihilation of a stationary electron with a stationary positron. What is the wavelength of resulting radiation? (h = Planck's constant, c = speed of light, m₀ = rest mass) [SET-26]",
    "options": [
      "h / (2 m₀ c)",
      "h / (m₀ c)",
      "2h / (m₀ c)",
      "h / (m₀ c²)"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: By conservation of momentum and energy, electron-positron annihilation produces two identical photons traveling in opposite directions.\n⚡ Step-by-Step Derivation:\n1. Total rest energy = 2 m₀ c².\n2. Energy per photon = (2 m₀ c²) / 2 = m₀ c².\n3. Since E = h c / λ, we have: m₀ c² = h c / λ ⟹ λ = h / (m₀ c).",
    "tags": [
      "Pair Annihilation",
      "Nuclei",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q016",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Balancing Nuclear Reactions",
    "difficulty": "Medium",
    "questionText": "Nuclear reactions are given as: (i) [ ] + ¹₀n → ³²₁₅P + ¹₁H, (ii) [ ] + ¹₁H → ⁴₂He + ¹⁶₈O, (iii) ¹⁴₇N + ¹₀n → [ ] + ¹₁H. The missing nuclides in these reactions are respectively: [SET-26]",
    "options": [
      "³²S, ¹⁹F, ¹⁴C",
      "¹⁹F, ³²S, ¹⁴C",
      "⁹Be, ¹⁹F, ¹⁴C",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: In any nuclear reaction, total mass number A and total charge number Z are conserved.\n⚡ Step-by-Step Derivation:\n1. (i) A + 1 = 32 + 1 ⟹ A = 32; Z + 0 = 15 + 1 ⟹ Z = 16 (Sulfur, ³²₁₆S).\n2. (ii) A + 1 = 4 + 16 ⟹ A = 19; Z + 1 = 2 + 8 ⟹ Z = 9 (Fluorine, ¹⁹₉F).\n3. (iii) 14 + 1 = A + 1 ⟹ A = 14; 7 + 0 = Z + 1 ⟹ Z = 6 (Carbon, ¹⁴₆C).\n4. Hence, ³²S, ¹⁹F, ¹⁴C.",
    "tags": [
      "Nuclear Reactions",
      "Nuclei",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q017",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Absorption vs Emission Lines",
    "difficulty": "Medium",
    "questionText": "In a sample of hydrogen-like atoms in ground state, an incident photon beam produces five dark lines in the absorption spectrum. The number of bright lines in the emission spectrum will be: [SET-26]",
    "options": [
      "5",
      "10",
      "15",
      "None of these"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Absorption transitions from ground state (n=1) excite atoms up to level n. The number of dark lines is n - 1.\n⚡ Step-by-Step Derivation:\n1. n - 1 = 5 ⟹ n = 6.\n2. Total emission spectral lines from level n = 6: N = n(n - 1) / 2 = 6(5) / 2 = 15 bright lines.",
    "tags": [
      "Spectral Series",
      "Atoms",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q018",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atom Recoil Velocity",
    "difficulty": "Hard",
    "questionText": "A hydrogen atom emits a photon corresponding to electron transition from n = 5 to n = 1. The recoil speed of the hydrogen atom is approximately (m_p ≈ 1.6 × 10⁻²⁷ kg): [SET-26]",
    "options": [
      "10 m/s",
      "2 × 10⁻² m/s",
      "4 m/s",
      "8 × 10² m/s"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: By conservation of momentum, momentum of recoiling atom equals photon momentum: m_H v = E_photon / c.\n⚡ Step-by-Step Derivation:\n1. E = 13.6 (1 - 1/25) eV = 13.6 (24/25) × 1.6 × 10⁻¹⁹ J = 2.089 × 10⁻¹⁸ J.\n2. Momentum p = E / c = 2.089 × 10⁻¹⁸ / (3 × 10⁸) = 6.96 × 10⁻²⁷ kg m/s.\n3. Recoil speed v = p / m_H = 6.96 × 10⁻²⁷ / (1.6 × 10⁻²⁷) ≈ 4.35 m/s ≈ 4 m/s.",
    "tags": [
      "Atoms",
      "Photon Momentum",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q019",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Decay Progression",
    "difficulty": "Medium",
    "questionText": "The number of nuclei of a radioactive substance at time t = 0 is 1000 and at t = 2 s is 900. The number of nuclei at time t = 4 s will be: [SET-26]",
    "options": [
      "800",
      "810",
      "790",
      "700"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Radioactive decay is a first-order kinetic process where the fraction remaining is constant for equal time intervals.\n⚡ Step-by-Step Derivation:\n1. In first 2 seconds (0 to 2 s): N(2) / N(0) = 900 / 1000 = 0.9.\n2. In next 2 seconds (2 to 4 s): N(4) = 0.9 × N(2) = 0.9 × 900 = 810.",
    "tags": [
      "Radioactivity",
      "Nuclei",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q020",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Orbital Acceleration Scaling",
    "difficulty": "Hard",
    "questionText": "The ratio between total acceleration of the electron in singly ionized helium atom (He⁺) and hydrogen atom (both in ground state) is: [SET-26]",
    "options": [
      "1",
      "8",
      "4",
      "16"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Centripetal acceleration a = v² / r.\n⚡ Step-by-Step Derivation:\n1. In Bohr model: v ∝ Z/n and r ∝ n²/Z.\n2. Acceleration a = v² / r ∝ (Z/n)² / (n²/Z) = Z³ / n⁴.\n3. For ground states (n = 1): a ∝ Z³.\n4. Ratio a(He⁺) / a(H) = (Z_He / Z_H)³ = (2 / 1)³ = 8.",
    "tags": [
      "Bohr Model",
      "Atoms",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q021",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Series Limit Equivalence",
    "difficulty": "Medium",
    "questionText": "If the series limit of Lyman series for Hydrogen atom is equal to the series limit of Balmer series for a hydrogen-like atom, then the atomic number Z of this hydrogen-like atom is: [SET-26]",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Rydberg formula for series limit (n₂ = ∞): 1/λ = R Z² / n₁².\n⚡ Step-by-Step Derivation:\n1. For Lyman series limit of H (n₁ = 1, Z = 1): 1/λ_H = R(1² / 1²) = R ⟹ λ_H = 1/R.\n2. For Balmer series limit of H-like atom (n₁ = 2, Z): 1/λ = R Z² / 2² = R Z² / 4 ⟹ λ = 4 / (R Z²).\n3. Equating wavelengths: 1/R = 4 / (R Z²) ⟹ Z² = 4 ⟹ Z = 2.",
    "tags": [
      "Spectral Series",
      "Atoms",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q022",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Number of Nuclei Comparison",
    "difficulty": "Hard",
    "questionText": "Which sample contains a greater number of nuclei: a 5.00-μCi sample of ²⁴⁰Pu (half-life 6560 y) or a 4.45-μCi sample of ²⁴³Am (half-life 7370 y)? [SET-26]",
    "options": [
      "²⁴⁰Pu",
      "²⁴³Am",
      "Equal in both",
      "None of these"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Activity A = λ N = (0.693 / T_{1/2}) N ⟹ N = (A · T_{1/2}) / 0.693.\n⚡ Step-by-Step Derivation:\n1. Number of nuclei is directly proportional to product (A × T_{1/2}).\n2. For Pu: Product = 5.00 × 6560 = 32,800 μCi·y.\n3. For Am: Product = 4.45 × 7370 = 32,796.5 ≈ 32,800 μCi·y.\n4. The products are practically identical, so both samples contain equal number of nuclei.",
    "tags": [
      "Radioactivity",
      "Nuclei",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q023",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Neutron vs Proton Induced Fission",
    "difficulty": "Easy",
    "questionText": "The fission of ²³⁵U can be triggered by the absorption of a slow neutron by a nucleus. Similarly, a slow proton can also be used. This statement is: [SET-26]",
    "options": [
      "Correct",
      "Wrong",
      "Information is insufficient",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: The nuclear fission barrier requires neutral projectile absorption.\n⚡ Step-by-Step Derivation:\n1. A slow neutron carries no charge and experiences zero Coulomb electrostatic repulsion as it approaches the ²³⁵U nucleus.\n2. A slow proton has positive charge +e and faces a formidable Coulomb repulsive potential (~15 MeV) from the 92 protons of uranium.\n3. A slow proton cannot approach or penetrate the nucleus without substantial accelerator kinetic energy.\n4. Therefore, the statement is Wrong.",
    "tags": [
      "Nuclear Fission",
      "Nuclei",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q024",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Tritium Dating",
    "difficulty": "Hard",
    "questionText": "The radioactivity of a given sample of whisky due to tritium (half-life 12.3 years) was found to be only 3% of that measured in a recently purchased bottle marked '7 years old'. The sample must have been prepared about: [SET-26]",
    "options": [
      "220 years back",
      "300 years back",
      "400 years back",
      "70 years back"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Radioactive decay follows N(t) = N₀ (1/2)^(t / T_{1/2}).\n⚡ Step-by-Step Derivation:\n1. Fraction remaining = 3% = 0.03 ≈ 1/32 = (1/2)⁵.\n2. 5 half-lives have elapsed: t = 5 × 12.3 = 61.5 years.\n3. Since the reference bottle was prepared 7 years ago, total time since preparation is 61.5 + 7 ≈ 68.5 ≈ 70 years back.",
    "tags": [
      "Radioactivity",
      "Nuclei",
      "SET-26",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set26-q025",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Wavelength Ratio in Atomic Transitions",
    "difficulty": "Medium",
    "questionText": "The following diagram indicates the energy levels of a certain atom when the system moves from 4E level to E. A photon of wavelength λ₁ is emitted. The wavelength of photon produced during its transition from (7/3)E level to E is λ₂. The ratio λ₁ / λ₂ will be: [SET-26]",
    "diagramSvg": "<svg viewBox=\"0 0 360 200\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"360\" height=\"200\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <defs>\n    <marker id=\"arr-set25\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#2563EB\" />\n    </marker>\n  </defs>\n  <text x=\"180\" y=\"24\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#1E293B\">Energy Levels: 4E, 7/3 E, E</text>\n\n  <!-- Level 4E -->\n  <line x1=\"70\" y1=\"50\" x2=\"300\" y2=\"50\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n  <text x=\"315\" y=\"55\" font-size=\"13\" font-weight=\"bold\" fill=\"#0F172A\">4E</text>\n\n  <!-- Level 7/3 E -->\n  <line x1=\"70\" y1=\"105\" x2=\"300\" y2=\"105\" stroke=\"#475569\" stroke-width=\"1.8\"/>\n  <text x=\"315\" y=\"110\" font-size=\"13\" font-weight=\"bold\" fill=\"#475569\">7/3 E</text>\n\n  <!-- Level E -->\n  <line x1=\"70\" y1=\"160\" x2=\"300\" y2=\"160\" stroke=\"#0F172A\" stroke-width=\"2.5\"/>\n  <text x=\"315\" y=\"165\" font-size=\"13\" font-weight=\"bold\" fill=\"#0F172A\">E</text>\n\n  <!-- Transition 4E -> E : lambda 1 -->\n  <line x1=\"130\" y1=\"53\" x2=\"130\" y2=\"154\" stroke=\"#2563EB\" stroke-width=\"2.5\" marker-end=\"url(#arr-set25)\"/>\n  <rect x=\"140\" y=\"95\" width=\"30\" height=\"20\" rx=\"4\" fill=\"#EFF6FF\" stroke=\"#93C5FD\"/>\n  <text x=\"155\" y=\"109\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#1D4ED8\">λ₁</text>\n\n  <!-- Transition 7/3 E -> E : lambda 2 -->\n  <line x1=\"230\" y1=\"108\" x2=\"230\" y2=\"154\" stroke=\"#2563EB\" stroke-width=\"2.5\" marker-end=\"url(#arr-set25)\"/>\n  <rect x=\"240\" y=\"125\" width=\"30\" height=\"20\" rx=\"4\" fill=\"#EFF6FF\" stroke=\"#93C5FD\"/>\n  <text x=\"255\" y=\"139\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#1D4ED8\">λ₂</text>\n</svg>",
    "options": [
      "9 / 4",
      "4 / 9",
      "3 / 2",
      "7 / 3"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Photon energy ΔE = hc / λ ⟹ λ = hc / ΔE.\n⚡ Step-by-Step Derivation:\n1. For transition 4E → E: ΔE₁ = 4E - E = 3E ⟹ λ₁ = hc / (3E).\n2. For transition (7/3)E → E: ΔE₂ = (7/3)E - E = (4/3)E ⟹ λ₂ = hc / ((4/3)E) = 3hc / (4E).\n3. Ratio λ₁ / λ₂ = [hc / (3E)] / [3hc / (4E)] = (4/3) / 3 = 4 / 9.",
    "tags": [
      "Atoms",
      "Energy Levels",
      "SET-26",
      "NEET Physics"
    ]
  }
];
