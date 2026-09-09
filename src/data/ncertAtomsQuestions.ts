import { Question } from '../types';

export const NCERT_ATOMS_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch27-01",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Potential Energy to Total Energy Ratio",
    "difficulty": "Easy",
    "questionText": "The ratio of potential energy to the total energy of an electron in a Bohr orbit of the hydrogen atom is:",
    "options": [
      "1 : 1",
      "–1 : 1",
      "2 : 1",
      "–1 : 2"
    ],
    "correctAnswer": 2,
    "explanation": "In Bohr's model of the hydrogen atom, potential energy is U = -e²/(4πε₀r), kinetic energy is K = e²/(8πε₀r), and total energy is E = K + U = -e²/(8πε₀r). Thus, U = 2E, and the ratio of potential energy to total energy is U / E = 2 : 1.",
    "tags": ["NCERT NEET Physics", "Atoms", "Bohr Model"]
  },
  {
    "id": "ncert-phy-ch27-02",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Angular Speed to Tangential Speed Ratio",
    "difficulty": "Medium",
    "questionText": "The ratio of angular speed (ω) and tangential speed (v) of an electron in the nth orbit of a hydrogen atom is:",
    "options": [
      "Inversely proportional to n²",
      "Directly proportional to n²",
      "Inversely proportional to n⁴",
      "Independent of n"
    ],
    "correctAnswer": 0,
    "explanation": "Since v = rω, the ratio is ω / v = 1 / r. According to Bohr's postulate, the radius of the nth orbit is r ∝ n². Therefore, ω / v = 1 / r ∝ 1 / n², which is inversely proportional to n².",
    "tags": ["NCERT NEET Physics", "Atoms", "Orbital Velocity"]
  },
  {
    "id": "ncert-phy-ch27-03",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Wavelength Ratio of Balmer to Lyman Lines",
    "difficulty": "Medium",
    "questionText": "The ratio of wavelengths of the first line of the Balmer series to the second line of the Lyman series in the hydrogen spectrum is:",
    "options": [
      "5 / 27",
      "27 / 5",
      "5 / 32",
      "32 / 5"
    ],
    "correctAnswer": 3,
    "explanation": "First line of Balmer series (n = 3 to n = 2): 1/λ_B = R(1/4 - 1/9) = 5R/36 => λ_B = 36 / (5R). Second line of Lyman series (n = 3 to n = 1): 1/λ_L = R(1/1 - 1/9) = 8R/9 => λ_L = 9 / (8R). The ratio is λ_B / λ_L = [36 / (5R)] / [9 / (8R)] = (36 × 8) / (5 × 9) = 32 / 5.",
    "tags": ["NCERT NEET Physics", "Atoms", "Hydrogen Spectrum"]
  },
  {
    "id": "ncert-phy-ch27-04",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Quantization of Angular Momentum",
    "difficulty": "Easy",
    "questionText": "Which of the following cannot be the orbital angular momentum of an electron in a hydrogen atom according to Bohr's model?",
    "options": [
      "2h / π",
      "h / π",
      "3h / (2π)",
      "5h / (4π)"
    ],
    "correctAnswer": 3,
    "explanation": "Bohr's quantization condition states that L = n(h / 2π), where n = 1, 2, 3, ... (an integer). For n = 1: h/(2π); n = 2: h/π; n = 3: 3h/(2π); n = 4: 2h/π. Since 5h/(4π) corresponds to n = 2.5 (non-integer), it is not allowed.",
    "tags": ["NCERT NEET Physics", "Atoms", "Bohr Postulates"]
  },
  {
    "id": "ncert-phy-ch27-05",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Shortest Wavelength of Lyman Series",
    "difficulty": "Easy",
    "questionText": "The shortest wavelength of the Lyman series (series limit) in the hydrogen spectrum is approximately:",
    "options": [
      "1215 Å",
      "6563 Å",
      "912 Å",
      "639 Å"
    ],
    "correctAnswer": 2,
    "explanation": "The shortest wavelength corresponds to transition from n = ∞ to n = 1: 1/λ_min = R(1 - 1/∞) = R. Hence λ_min = 1 / R = 1 / (1.097 × 10⁷ m⁻¹) ≈ 9.116 × 10⁻⁸ m = 912 Å.",
    "tags": ["NCERT NEET Physics", "Atoms", "Lyman Series"]
  },
  {
    "id": "ncert-phy-ch27-06",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Energy of Electron in Stationary Orbits",
    "difficulty": "Easy",
    "questionText": "The total energy of an electron in the third stationary orbit (n = 3) of a hydrogen atom is about:",
    "options": [
      "–3.4 eV",
      "+3.4 eV",
      "–1.51 eV",
      "+1.51 eV"
    ],
    "correctAnswer": 2,
    "explanation": "Energy of an electron in the nth orbit of hydrogen is E_n = -13.6 / n² eV. For n = 3: E_3 = -13.6 / (3²) = -13.6 / 9 ≈ -1.51 eV.",
    "tags": ["NCERT NEET Physics", "Atoms", "Bohr Energy Levels"]
  },
  {
    "id": "ncert-phy-ch27-07",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Shortest Wavelengths Ratio Across Spectral Series",
    "difficulty": "Medium",
    "questionText": "The shortest wavelengths of hydrogen atom transitions in the Lyman, Balmer, and Paschen series are in the ratio of:",
    "options": [
      "1 : 2 : 3",
      "1 : 4 : 9",
      "9 : 1 : 3",
      "4 : 12 : 17"
    ],
    "correctAnswer": 1,
    "explanation": "The shortest wavelength (series limit, n_initial = ∞) for a series ending at orbit n_final is λ_min = n_final² / R. For Lyman (n=1): λ_L = 1/R. For Balmer (n=2): λ_B = 4/R. For Paschen (n=3): λ_P = 9/R. Thus, the ratio λ_L : λ_B : λ_P = 1 : 4 : 9.",
    "tags": ["NCERT NEET Physics", "Atoms", "Hydrogen Spectrum"]
  },
  {
    "id": "ncert-phy-ch27-08",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Spectral Regions of Hydrogen Series",
    "difficulty": "Easy",
    "questionText": "The Lyman series in the hydrogen spectrum lies in which electromagnetic region?",
    "options": [
      "Infrared region",
      "Ultraviolet region",
      "Visible region",
      "Both visible and ultraviolet regions"
    ],
    "correctAnswer": 1,
    "explanation": "The Lyman series transitions terminate at n = 1 with wavelengths ranging from 912 Å to 1216 Å, which lies entirely in the ultraviolet region of the spectrum.",
    "tags": ["NCERT NEET Physics", "Atoms", "Lyman Series"]
  },
  {
    "id": "ncert-phy-ch27-09",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Orbital Period Dependence on n and Z",
    "difficulty": "Medium",
    "questionText": "The time period of revolution of an electron around a nucleus of charge Ze in the nth Bohr orbit is directly proportional to:",
    "options": [
      "n",
      "n³ / Z²",
      "n² / Z³",
      "n / Z"
    ],
    "correctAnswer": 1,
    "explanation": "Time period T = 2πr / v. In Bohr's theory, radius r ∝ n² / Z and speed v ∝ Z / n. Therefore, T ∝ (n² / Z) / (Z / n) = n³ / Z².",
    "tags": ["NCERT NEET Physics", "Atoms", "Bohr Model"]
  },
  {
    "id": "ncert-phy-ch27-10",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Number of Spectral Lines",
    "difficulty": "Easy",
    "questionText": "When an electron in a hydrogen atom de-excites from the nth orbit to the ground state (n = 1), the maximum possible number of spectral lines emitted is:",
    "options": [
      "n",
      "2n",
      "n(n – 1) / 2",
      "n(n + 1) / 2"
    ],
    "correctAnswer": 2,
    "explanation": "The number of distinct transitions possible between n energy levels is given by combinations ⁿC₂ = n(n - 1) / 2.",
    "tags": ["NCERT NEET Physics", "Atoms", "Emission Spectrum"]
  },
  {
    "id": "ncert-phy-ch27-11",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Total Energy from Potential Energy",
    "difficulty": "Easy",
    "questionText": "The potential energy of an electron in a hydrogen atom in a given orbit is –1.68 eV. The total energy of the electron in this orbit is:",
    "options": [
      "+3.36 eV",
      "–0.84 eV",
      "+0.84 eV",
      "–3.36 eV"
    ],
    "correctAnswer": 1,
    "explanation": "In an atom with Coulomb potential, the virial theorem gives Total Energy E = U / 2. Therefore, E = (-1.68 eV) / 2 = -0.84 eV.",
    "tags": ["NCERT NEET Physics", "Atoms", "Energy Relations"]
  },
  {
    "id": "ncert-phy-ch27-12",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Orbital Speed Comparison in Hydrogen-like Ions",
    "difficulty": "Medium",
    "questionText": "The velocity of an electron in the second orbit of a hydrogen atom is v. The velocity of an electron in the first orbit of Li²⁺ is:",
    "options": [
      "6v",
      "8v",
      "v",
      "4v"
    ],
    "correctAnswer": 0,
    "explanation": "The velocity of an electron in Bohr's model is v ∝ Z / n. For H in second orbit (Z = 1, n = 2): v ∝ 1/2. For Li²⁺ in first orbit (Z = 3, n = 1): v' ∝ 3/1 = 3. Therefore, v' / v = 3 / (1/2) = 6, which gives v' = 6v.",
    "tags": ["NCERT NEET Physics", "Atoms", "Bohr Velocity"]
  },
  {
    "id": "ncert-phy-ch27-13",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Energy Changes During Excitation",
    "difficulty": "Easy",
    "questionText": "When a hydrogen atom is raised from its ground state to an excited state:",
    "options": [
      "Potential energy increases and kinetic energy decreases",
      "Potential energy decreases and kinetic energy increases",
      "Both kinetic energy and potential energy increase",
      "Both kinetic energy and potential energy decrease"
    ],
    "correctAnswer": 0,
    "explanation": "As the quantum number n increases, the orbital radius r increases. Since KE = e²/(8πε₀r), KE decreases. Since PE = -e²/(4πε₀r), PE becomes less negative, which means PE increases.",
    "tags": ["NCERT NEET Physics", "Atoms", "Bohr Orbit Energetics"]
  },
  {
    "id": "ncert-phy-ch27-14",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Orbit Radius of Hydrogen-like Ion",
    "difficulty": "Medium",
    "questionText": "In a triply-ionized Beryllium ion (Be³⁺, Z = 4), if a₀ is the radius of the first orbit of hydrogen, then the radius of the second orbit (n = 2) of Be³⁺ is:",
    "options": [
      "2a₀",
      "a₀",
      "4a₀",
      "a₀ / 4"
    ],
    "correctAnswer": 1,
    "explanation": "The radius of the nth orbit is r_n = (n² / Z) a₀. For Be³⁺ (Z = 4) in the second orbit (n = 2): r₂ = (2² / 4) a₀ = (4 / 4) a₀ = a₀.",
    "tags": ["NCERT NEET Physics", "Atoms", "Bohr Radius"]
  },
  {
    "id": "ncert-phy-ch27-15",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Ionization Energy of Doubly Ionized Lithium",
    "difficulty": "Easy",
    "questionText": "As per the Bohr model, the minimum energy (in eV) required to remove an electron from the ground state of a doubly ionized Lithium atom (Li²⁺, Z = 3) is:",
    "options": [
      "1.51 eV",
      "13.6 eV",
      "40.8 eV",
      "122.4 eV"
    ],
    "correctAnswer": 3,
    "explanation": "Ground state ionization energy of a hydrogen-like atom is E = 13.6 × Z² eV. For Li²⁺ (Z = 3): E = 13.6 × (3²) = 13.6 × 9 = 122.4 eV.",
    "tags": ["NCERT NEET Physics", "Atoms", "Ionization Energy"]
  },
  {
    "id": "ncert-phy-ch27-16",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Muonic Hydrogen Atom [NEET-2019 Odisha]",
    "difficulty": "Hard",
    "questionText": "The radius of the first permitted Bohr orbit for the electron in a hydrogen atom is 0.51 Å and its ground state energy is –13.6 eV. If the electron is replaced by a muon (μ⁻) having charge equal to electron and mass 207 m_e, the first Bohr radius and ground state energy will be: [NEET-2019 (Odisha)]",
    "options": [
      "2.56 × 10⁻¹³ m, –13.6 eV",
      "0.53 × 10⁻¹³ m, –3.6 eV",
      "25.6 × 10⁻¹³ m, –2.8 eV",
      "2.56 × 10⁻¹³ m, –2.8 keV"
    ],
    "correctAnswer": 3,
    "explanation": "In Bohr's theory, radius r ∝ 1/m and energy E ∝ m. Radius r_μ = r_e / 207 = (0.51 × 10⁻¹⁰ m) / 207 ≈ 2.46 × 10⁻¹³ m ≈ 2.56 × 10⁻¹³ m. Ground state energy E_μ = 207 × (-13.6 eV) = -2815.2 eV ≈ -2.8 keV.",
    "tags": ["NCERT NEET Physics", "Atoms", "Muonic Atom"]
  },
  {
    "id": "ncert-phy-ch27-17",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Kinetic and Potential Energy in Orbit [NEET-2019]",
    "difficulty": "Easy",
    "questionText": "The total energy of an electron in an atom in an orbit is –3.4 eV. Its kinetic and potential energies are, respectively: [NEET-2019]",
    "options": [
      "–3.4 eV, –3.4 eV",
      "–3.4 eV, –6.8 eV",
      "+3.4 eV, –6.8 eV",
      "+3.4 eV, +3.4 eV"
    ],
    "correctAnswer": 2,
    "explanation": "Kinetic energy K = -E = -(-3.4 eV) = +3.4 eV. Potential energy U = 2E = 2(-3.4 eV) = -6.8 eV.",
    "tags": ["NCERT NEET Physics", "Atoms", "Bohr Energy Relations"]
  },
  {
    "id": "ncert-phy-ch27-18",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Kinetic to Total Energy Ratio [NEET-2018]",
    "difficulty": "Easy",
    "questionText": "The ratio of kinetic energy to the total energy of an electron in a Bohr orbit of the hydrogen atom is: [NEET-2018]",
    "options": [
      "1 : 1",
      "1 : –1",
      "1 : –2",
      "2 : –1"
    ],
    "correctAnswer": 1,
    "explanation": "Kinetic energy K is positive (K > 0) while total energy E is negative with equal magnitude (E = -K). Hence, K / E = K / (-K) = -1 = 1 : –1.",
    "tags": ["NCERT NEET Physics", "Atoms", "Energy Ratios"]
  },
  {
    "id": "ncert-phy-ch27-19",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Series Limit Ratio of Balmer to Lyman [NEET-2017]",
    "difficulty": "Easy",
    "questionText": "The ratio of wavelengths of the last line of the Balmer series to the last line of the Lyman series is: [NEET-2017]",
    "options": [
      "2",
      "1",
      "4",
      "0.5"
    ],
    "correctAnswer": 2,
    "explanation": "Last line of Balmer series (n = ∞ to n = 2): 1/λ_B = R(1/4 - 0) = R/4 => λ_B = 4/R. Last line of Lyman series (n = ∞ to n = 1): 1/λ_L = R(1/1 - 0) = R => λ_L = 1/R. The ratio is λ_B / λ_L = (4/R) / (1/R) = 4.",
    "tags": ["NCERT NEET Physics", "Atoms", "Series Limit"]
  },
  {
    "id": "ncert-phy-ch27-20",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Wavelength Ratio for Successive Transitions [NEET-2016]",
    "difficulty": "Medium",
    "questionText": "If an electron in a hydrogen atom jumps from the 3rd orbit to the 2nd orbit, it emits a photon of wavelength λ. When it jumps from the 4th orbit to the 3rd orbit, the corresponding wavelength of the photon will be: [NEET-2016]",
    "options": [
      "16λ / 25",
      "9λ / 16",
      "20λ / 7",
      "20λ / 13"
    ],
    "correctAnswer": 2,
    "explanation": "For transition 3 -> 2: 1/λ = R(1/4 - 1/9) = 5R/36 => λ = 36 / (5R). For transition 4 -> 3: 1/λ' = R(1/9 - 1/16) = 7R/144 => λ' = 144 / (7R). Dividing the two expressions: λ' / λ = [144 / (7R)] / [36 / (5R)] = (144 × 5) / (36 × 7) = (4 × 5) / 7 = 20 / 7. Therefore, λ' = (20 / 7)λ.",
    "tags": ["NCERT NEET Physics", "Atoms", "Rydberg Formula"]
  },
  {
    "id": "ncert-phy-ch27-21",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Wave Number of Balmer Series Limit [NEET-2016]",
    "difficulty": "Easy",
    "questionText": "Given the value of Rydberg constant is R = 10⁷ m⁻¹, the wave number of the last line of the Balmer series in the hydrogen spectrum will be: [NEET-2016]",
    "options": [
      "2.5 × 10⁷ m⁻¹",
      "0.025 × 10⁴ m⁻¹",
      "0.5 × 10⁷ m⁻¹",
      "0.25 × 10⁷ m⁻¹"
    ],
    "correctAnswer": 3,
    "explanation": "Wave number ν̄ = 1/λ = R(1/n₁² - 1/n₂²). For the last line of the Balmer series, n₁ = 2 and n₂ = ∞: ν̄ = R(1/4 - 0) = R / 4 = 10⁷ / 4 = 0.25 × 10⁷ m⁻¹.",
    "tags": ["NCERT NEET Physics", "Atoms", "Wave Number"]
  },
  {
    "id": "ncert-phy-ch27-22",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Ratio of Longest Wavelengths of Lyman and Balmer [NEET-2013]",
    "difficulty": "Medium",
    "questionText": "The ratio of the longest wavelengths corresponding to the Lyman and Balmer series in the hydrogen spectrum is: [NEET-2013]",
    "options": [
      "3 / 23",
      "7 / 29",
      "9 / 31",
      "5 / 27"
    ],
    "correctAnswer": 3,
    "explanation": "Longest wavelength of Lyman series (2 -> 1): 1/λ_L = R(1 - 1/4) = 3R/4 => λ_L = 4 / (3R). Longest wavelength of Balmer series (3 -> 2): 1/λ_B = R(1/4 - 1/9) = 5R/36 => λ_B = 36 / (5R). Ratio λ_L / λ_B = [4 / (3R)] / [36 / (5R)] = (4 / 3) × (5 / 36) = 5 / 27.",
    "tags": ["NCERT NEET Physics", "Atoms", "Spectral Series"]
  },
  {
    "id": "ncert-phy-ch27-23",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Recoil Velocity of Hydrogen Atom [AIPMT-2012]",
    "difficulty": "Hard",
    "questionText": "An electron of a stationary hydrogen atom de-excites from the fifth energy level (n = 5) to the ground level (n = 1). The recoil velocity that the atom acquires as a result of the photon emission will be: [AIPMT-2012]",
    "options": [
      "25hR / (24m)",
      "24hR / (25m)",
      "24m / (25hR)",
      "25m / (24hR)"
    ],
    "correctAnswer": 1,
    "explanation": "The wave number is 1/λ = R(1/1² - 1/5²) = R(1 - 1/25) = 24R/25. The momentum of the emitted photon is p = h / λ = 24hR / 25. By conservation of linear momentum, the recoil momentum of the atom of mass m is m v = p. Hence, v = 24hR / (25m).",
    "tags": ["NCERT NEET Physics", "Atoms", "Recoil Momentum"]
  },
  {
    "id": "ncert-phy-ch27-24",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Wavelength Equivalence Across Species [AIPMT-2011]",
    "difficulty": "Hard",
    "questionText": "The wavelength of the first line of the Lyman series for hydrogen atom is equal to that of the second line of the Balmer series for a hydrogen-like ion. The atomic number Z of the hydrogen-like ion is: [AIPMT-2011]",
    "options": [
      "2",
      "3",
      "4",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "First line of Lyman for H (2 -> 1): 1/λ = R(1 - 1/4) = 3R/4. Second line of Balmer for ion of atomic number Z (4 -> 2): 1/λ = R Z² (1/4 - 1/16) = R Z² (3/16). Equating the two: 3R/4 = 3R Z² / 16 => 1/4 = Z² / 16 => Z² = 4 => Z = 2 (He⁺ ion).",
    "tags": ["NCERT NEET Physics", "Atoms", "Rydberg Formula"]
  },
  {
    "id": "ncert-phy-ch27-25",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Photoelectric Effect from Bohr Transition [AIPMT-2010]",
    "difficulty": "Hard",
    "questionText": "An electron in a hydrogen atom jumps from the excited state n = 3 to its ground state n = 1, and the photons thus emitted irradiate a photosensitive material. If the work function of the material is 5.1 eV, the stopping potential of the emitted photoelectrons is estimated to be: [AIPMT-2010]",
    "options": [
      "5.1 V",
      "12.1 V",
      "17.2 V",
      "7.0 V"
    ],
    "correctAnswer": 3,
    "explanation": "Energy of photon emitted in transition from n = 3 to n = 1: hν = E₃ - E₁ = (-1.51 eV) - (-13.6 eV) = 12.09 eV. By Einstein's photoelectric equation, maximum kinetic energy of photoelectrons is K_max = hν - Φ = 12.09 eV - 5.1 eV = 6.99 eV ≈ 7.0 eV. Since K_max = eV₀, the stopping potential is V₀ = 7.0 V.",
    "tags": ["NCERT NEET Physics", "Atoms", "Photoelectric Effect"]
  }
];
