import { Question } from '../types';

export const NCERT_DUAL_NATURE_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch26-01",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Electron Speed from de Broglie Wavelength",
    "difficulty": "Easy",
    "questionText": "The speed of an electron having a de Broglie wavelength of 1.2 × 10⁻⁹ m is about (m_e = 9.1 × 10⁻³¹ kg, h = 6.63 × 10⁻³⁴ J·s): [NCERT Pg. 398]",
    "options": [
      "6 × 10⁵ m/s",
      "4 × 10⁶ m/s",
      "5 × 10⁶ m/s",
      "3 × 10⁶ m/s"
    ],
    "correctAnswer": 0,
    "explanation": "From the de Broglie relation: λ = h / (m v) => v = h / (m λ).\nv = (6.63 × 10⁻³⁴ J·s) / [(9.1 × 10⁻³¹ kg) × (1.2 × 10⁻⁹ m)] = (6.63 × 10⁻³⁴) / (1.092 × 10⁻³⁹) ≈ 6.07 × 10⁵ m/s ≈ 6 × 10⁵ m/s.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "de Broglie Wavelength"]
  },
  {
    "id": "ncert-phy-ch26-02",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Photocurrent vs Light Intensity",
    "difficulty": "Easy",
    "questionText": "For radiation of frequency above the threshold frequency, the variation of photoelectric current with the intensity of incident light is correctly represented by: [NCERT Pg. 390]",
    "options": [
      "A straight line passing through the origin (linear increase)",
      "An exponentially decaying curve",
      "A curve that rapidly saturates to a constant level",
      "A horizontal straight line independent of intensity"
    ],
    "correctAnswer": 0,
    "explanation": "The number of photoelectrons emitted per unit time is directly proportional to the number of incident photons per unit area per unit time (intensity). Hence, photocurrent varies linearly with light intensity, represented by a straight line through the origin.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "Photoelectric Effect"]
  },
  {
    "id": "ncert-phy-ch26-03",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Parameters of Matter Waves",
    "difficulty": "Easy",
    "questionText": "The de Broglie wavelength of a matter wave associated with a moving particle is fundamentally independent of the particle's: [NCERT Pg. 398]",
    "options": [
      "Charge",
      "Mass",
      "Velocity",
      "Momentum"
    ],
    "correctAnswer": 0,
    "explanation": "The de Broglie wavelength depends strictly on momentum: λ = h / p = h / (m v). It depends on mass and velocity, but is completely independent of whether the particle carries an electric charge or is neutral.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "de Broglie Wavelength"]
  },
  {
    "id": "ncert-phy-ch26-04",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "de Broglie Wavelength Ratio for Equal Velocity",
    "difficulty": "Easy",
    "questionText": "An alpha particle (mass 4m) and a deuteron (mass 2m) are moving with the same velocity. The ratio of their respective de Broglie wavelengths (λ_α : λ_d) is: [NCERT Pg. 400]",
    "options": [
      "1 : 1",
      "1 : √2",
      "√3 : 1",
      "1 : 2"
    ],
    "correctAnswer": 3,
    "explanation": "λ = h / (m v). For equal velocities: λ ∝ 1 / m.\nλ_α / λ_d = m_d / m_α = (2m) / (4m) = 1 / 2 = 1 : 2.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "de Broglie Wavelength"]
  },
  {
    "id": "ncert-phy-ch26-05",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Wavelength Change with Increased Kinetic Energy",
    "difficulty": "Easy",
    "questionText": "The kinetic energy of a subatomic particle is increased to 16 times its original value. The percentage change in the de Broglie wavelength of the particle is: [NCERT Pg. 400]",
    "options": [
      "-25%",
      "-50%",
      "-75%",
      "-100%"
    ],
    "correctAnswer": 2,
    "explanation": "λ = h / √(2mK) ∝ 1 / √K.\nWhen K' = 16K: λ' = λ / √16 = λ / 4 = 0.25 λ.\nPercentage change = [(λ' - λ) / λ] × 100% = [(0.25 - 1) / 1] × 100% = -75%.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "de Broglie Wavelength"]
  },
  {
    "id": "ncert-phy-ch26-06",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Quantum Explanation of Photoelectric Effect",
    "difficulty": "Easy",
    "questionText": "The photoelectric effect can only be successfully explained on the basis of: [NCERT Pg. 395]",
    "options": [
      "Particle nature of light (quantum photon model)",
      "Wave nature of light",
      "Classical electromagnetic wave theory",
      "Electromagnetic wave interference"
    ],
    "correctAnswer": 0,
    "explanation": "Classical wave theory failed to explain the existence of a threshold frequency, the independence of maximum kinetic energy on intensity, and the instantaneous emission of electrons. Einstein's photon hypothesis (discrete particle quanta of energy E = hν) fully explained all observations.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "Photoelectric Effect"]
  },
  {
    "id": "ncert-phy-ch26-07",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Momentum of a High Energy Photon",
    "difficulty": "Easy",
    "questionText": "The linear momentum of a 6 MeV photon is: [NCERT Pg. 396]",
    "options": [
      "1 × 10⁻² eV·s/m",
      "0.5 × 10⁻² eV·s/m",
      "2 × 10⁻² eV·s/m",
      "4 × 10⁻² eV·s/m"
    ],
    "correctAnswer": 2,
    "explanation": "p = E / c = (6 × 10⁶ eV) / (3 × 10⁸ m/s) = 2 × 10⁻² eV·s/m.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "Photon Momentum"]
  },
  {
    "id": "ncert-phy-ch26-08",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Rate of Photoelectron Emission",
    "difficulty": "Easy",
    "questionText": "The number of photoelectrons emitted per second from a clean metal surface increases whenever: [NCERT Pg. 396]",
    "options": [
      "Energy of each incident photon increases",
      "Frequency of incident light increases",
      "Wavelength of incident light increases",
      "Intensity of incident light increases"
    ],
    "correctAnswer": 3,
    "explanation": "The rate of electron emission depends on the flux of incident photons above the threshold frequency. Increasing the intensity at constant frequency means more photons strike the cathode per second, thereby increasing the rate of photoelectron emission.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "Photoelectric Effect"]
  },
  {
    "id": "ncert-phy-ch26-09",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Work Function from Threshold Wavelength",
    "difficulty": "Easy",
    "questionText": "If the threshold wavelength for a metal is 6200 Å, the minimum energy (work function) required to eject an electron from the metal surface is nearly: [NCERT Pg. 394]",
    "options": [
      "1 eV",
      "2 eV",
      "0.5 eV",
      "0.8 eV"
    ],
    "correctAnswer": 1,
    "explanation": "Work function ϕ₀ = hc / λ₀ ≈ 12400 eV·Å / 6200 Å = 2.0 eV.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "Work Function"]
  },
  {
    "id": "ncert-phy-ch26-10",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "de Broglie Wavelength of Accelerated Electron",
    "difficulty": "Easy",
    "questionText": "The de Broglie wavelength of a charged particle accelerated from rest through a potential difference of 100 V is 10⁻⁹ m. If it is accelerated through a potential difference of 1600 V, its de Broglie wavelength will be: [NCERT Pg. 400]",
    "options": [
      "25 Å",
      "2.5 Å",
      "5 Å",
      "0.5 Å"
    ],
    "correctAnswer": 1,
    "explanation": "λ = h / √(2mqV) ∝ 1 / √V.\nλ₂ / λ₁ = √(V₁ / V₂) = √(100 / 1600) = √(1/16) = 1/4.\nλ₂ = λ₁ / 4 = 10⁻⁹ m / 4 = 0.25 × 10⁻⁹ m = 2.5 × 10⁻¹⁰ m = 2.5 Å.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "de Broglie Wavelength"]
  },
  {
    "id": "ncert-phy-ch26-11",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Photoelectric Velocity Scaling with Frequency",
    "difficulty": "Hard",
    "questionText": "The maximum velocity of emitted photoelectrons is tripled when the frequency ν of the incident radiation is doubled. The work function of this metal is: [NCERT Pg. 394]",
    "options": [
      "(5/8) hν",
      "(3/8) hν",
      "(7/8) hν",
      "(1/4) hν"
    ],
    "correctAnswer": 2,
    "explanation": "From Einstein's photoelectric equation:\nCase 1: (1/2) m v₁² = hν - ϕ₀\nCase 2: (1/2) m (3v₁)² = h(2ν) - ϕ₀ => 9 [(1/2) m v₁²] = 2hν - ϕ₀\nSubstitute Case 1 into Case 2:\n9 (hν - ϕ₀) = 2hν - ϕ₀ => 9hν - 9ϕ₀ = 2hν - ϕ₀ => 7hν = 8ϕ₀ => ϕ₀ = (7/8) hν.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "Photoelectric Effect"]
  },
  {
    "id": "ncert-phy-ch26-12",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Stopping Potential from Wavelength and Work Function",
    "difficulty": "Medium",
    "questionText": "Light of wavelength 4.36 × 10⁻⁷ m (436 nm) is incident on a target material of work function 2.34 eV. The minimum retarding potential required to stop the photocurrent is about (h = 6.63 × 10⁻³⁴ J·s): [NCERT Pg. 395]",
    "options": [
      "1.5 V",
      "0.5 V",
      "2 V",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "Energy of incident photon: E = hc / λ = (1240 eV·nm) / 436 nm ≈ 2.84 eV.\nMaximum kinetic energy K_max = E - ϕ₀ = 2.84 eV - 2.34 eV = 0.50 eV.\nStopping potential V₀ = K_max / e = 0.50 V.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "Photoelectric Effect"]
  },
  {
    "id": "ncert-phy-ch26-13",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Photon Emission Rate of a Monochromatic Source",
    "difficulty": "Easy",
    "questionText": "A monochromatic light source of wavelength 440 nm produces an output power of 18 mW. The number of photons emitted per second by the source is: [NCERT Pg. 396]",
    "options": [
      "3 × 10¹⁶",
      "4 × 10¹⁶",
      "3 × 10¹⁸",
      "4 × 10¹⁸"
    ],
    "correctAnswer": 1,
    "explanation": "Energy of one photon: E = hc / λ = (6.63 × 10⁻³⁴ × 3 × 10⁸) / (440 × 10⁻⁹) ≈ 4.52 × 10⁻¹⁹ J.\nRate of photon emission n = P / E = (18 × 10⁻³ W) / (4.52 × 10⁻¹⁹ J) ≈ 3.98 × 10¹⁶ ≈ 4 × 10¹⁶ photons/s.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "Photon Theory"]
  },
  {
    "id": "ncert-phy-ch26-14",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Threshold Wavelength for Photosensitive Material",
    "difficulty": "Easy",
    "questionText": "The work function of a photosensitive material is 4.0 eV. The longest wavelength of incident light that can cause photoelectron emission from the substance is approximately: [NEET-2019 (Odisha)]",
    "options": [
      "310 nm",
      "3100 nm",
      "966 nm",
      "31 nm"
    ],
    "correctAnswer": 0,
    "explanation": "Threshold wavelength λ₀ = hc / ϕ₀ = 1240 eV·nm / 4.0 eV = 310 nm.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "Photoelectric Effect", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch26-15",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "de Broglie Wavelength Ratio for Same Energy",
    "difficulty": "Easy",
    "questionText": "A proton and an α-particle are accelerated from rest to have the same kinetic energy. The de Broglie wavelengths λ_p and λ_α are in the ratio: [NEET-2019 (Odisha)]",
    "options": [
      "4 : 1",
      "2 : 1",
      "1 : 1",
      "√2 : 1"
    ],
    "correctAnswer": 1,
    "explanation": "λ = h / √(2mE). For equal kinetic energy E: λ ∝ 1 / √m.\nλ_p / λ_α = √(m_α / m_p) = √(4m_p / m_p) = √4 = 2 : 1.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "de Broglie Wavelength", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch26-16",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "de Broglie Wavelength at 10 kV Accelerating Potential",
    "difficulty": "Easy",
    "questionText": "An electron is accelerated through a potential difference of 10,000 V. Its de Broglie wavelength is nearly: [NEET-2019]",
    "options": [
      "12.2 × 10⁻¹³ m",
      "12.2 × 10⁻¹² m",
      "12.2 × 10⁻¹⁴ m",
      "12.2 nm"
    ],
    "correctAnswer": 1,
    "explanation": "For an electron: λ = 12.27 / √V Å = 12.27 / √10000 Å = 12.27 / 100 Å = 0.1227 Å = 1.227 × 10⁻¹¹ m ≈ 12.2 × 10⁻¹² m.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "de Broglie Wavelength", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch26-17",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Time-Dependent de Broglie Wavelength in Electric Field",
    "difficulty": "Hard",
    "questionText": "An electron of mass m with initial velocity v⃗ = v₀ î (v₀ > 0) enters an electric field E⃗ = -E₀ î (E₀ = const > 0) at t = 0. If λ₀ is its initial de Broglie wavelength, its de Broglie wavelength at time t is: [NEET-2018]",
    "options": [
      "λ₀ / [1 + (e E₀ t) / (m v₀)]",
      "λ₀ [1 + (e E₀ t) / (m v₀)]",
      "λ₀",
      "λ₀ t"
    ],
    "correctAnswer": 0,
    "explanation": "Electrostatic force on electron: F⃗ = -e E⃗ = -e (-E₀ î) = +e E₀ î.\nAcceleration a = (e E₀) / m along the direction of initial motion.\nVelocity at time t: v(t) = v₀ + a t = v₀ + (e E₀ t / m) = v₀ [1 + (e E₀ t) / (m v₀)].\nNew de Broglie wavelength λ(t) = h / [m v(t)] = [h / (m v₀)] / [1 + (e E₀ t) / (m v₀)] = λ₀ / [1 + (e E₀ t) / (m v₀)].",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "de Broglie Wavelength", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch26-18",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Velocity Ratio at 2ν₀ and 5ν₀ Frequencies",
    "difficulty": "Medium",
    "questionText": "When light of frequency 2ν₀ (where ν₀ is threshold frequency) is incident on a metal plate, the maximum velocity of photoelectrons emitted is v₁. When the incident frequency is increased to 5ν₀, the maximum velocity is v₂. The ratio v₁ : v₂ is: [NEET-2018]",
    "options": [
      "1 : 2",
      "1 : 4",
      "2 : 1",
      "4 : 1"
    ],
    "correctAnswer": 0,
    "explanation": "K₁ = (1/2) m v₁² = h(2ν₀) - hν₀ = hν₀ => v₁ ∝ √(hν₀).\nK₂ = (1/2) m v₂² = h(5ν₀) - hν₀ = 4hν₀ => v₂ ∝ √(4hν₀) = 2√(hν₀).\nRatio v₁ / v₂ = √(hν₀) / [2√(hν₀)] = 1 / 2 = 1 : 2.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "Photoelectric Effect", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch26-19",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Thermal Neutron de Broglie Wavelength",
    "difficulty": "Medium",
    "questionText": "The de Broglie wavelength of a neutron of mass m in thermal equilibrium with heavy water at absolute temperature T (Kelvin) is: [NEET-2017]",
    "options": [
      "h / √(m k T)",
      "h / √(3 m k T)",
      "(2h) / √(3 m k T)",
      "(2h) / √(m k T)"
    ],
    "correctAnswer": 1,
    "explanation": "The average kinetic energy of a thermal neutron in three dimensions is E = (3/2) k T.\nMomentum p = √(2mE) = √[2m (3/2 k T)] = √(3 m k T).\nde Broglie wavelength λ = h / p = h / √(3 m k T).",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "de Broglie Wavelength", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch26-20",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Cutoff Wavelength of Emitted X-Rays",
    "difficulty": "Hard",
    "questionText": "Electrons of mass m with de Broglie wavelength λ strike the target of an X-ray tube. The cutoff wavelength λ₀ of the emitted continuous X-rays is: [NEET (Phase-2) 2016]",
    "options": [
      "(2 m c λ²) / h",
      "(2h) / (m c)",
      "(2 m² c² λ³) / h²",
      "λ"
    ],
    "correctAnswer": 0,
    "explanation": "Kinetic energy of incident electrons: E = p² / (2m) = (h / λ)² / (2m) = h² / (2m λ²).\nMaximum energy of an emitted X-ray photon: E_max = hc / λ₀.\nSetting equal: hc / λ₀ = h² / (2m λ²) => c / λ₀ = h / (2m λ²) => λ₀ = (2 m c λ²) / h.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "X-Rays", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch26-21",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Stopping Potential for Increased Photon Energy",
    "difficulty": "Easy",
    "questionText": "Photons of energy 5 eV are incident on cathode C in a photoelectric cell, and the maximum energy of emitted photoelectrons is 2 eV. When photons of energy 6 eV are incident on C, no photoelectrons reach anode A if the potential of A relative to C is: [NEET (Phase-2) 2016]",
    "options": [
      "+3 V",
      "+4 V",
      "-1 V",
      "-3 V"
    ],
    "correctAnswer": 3,
    "explanation": "From the first observation: Work function ϕ₀ = E₁ - K_max1 = 5 eV - 2 eV = 3 eV.\nFor photons of 6 eV: K_max2 = 6 eV - 3 eV = 3 eV.\nTo stop photoelectrons from reaching anode A, a retarding potential of at least 3 V must be applied to A relative to C: V_A = -3 V.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "Photoelectric Effect", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch26-22",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Threshold Wavelength from Stopping Potentials V and V/4",
    "difficulty": "Medium",
    "questionText": "When a metal surface is illuminated with radiation of wavelength λ, the stopping potential is V. When illuminated with radiation of wavelength 2λ, the stopping potential is V/4. The threshold wavelength for this metal surface is: [NEET-2016]",
    "options": [
      "3 λ",
      "4 λ",
      "5 λ",
      "(5/2) λ"
    ],
    "correctAnswer": 0,
    "explanation": "eV = hc/λ - hc/λ₀ ...(1)\ne(V/4) = hc/(2λ) - hc/λ₀ => eV = 2(hc/λ) - 4(hc/λ₀) ...(2)\nEquating (1) and (2):\nhc/λ - hc/λ₀ = 2(hc/λ) - 4(hc/λ₀)\n3(hc/λ₀) = hc/λ => 3/λ₀ = 1/λ => λ₀ = 3λ.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "Photoelectric Effect", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch26-23",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Slope of Stopping Potential vs Frequency Graph",
    "difficulty": "Easy",
    "questionText": "The slope of the graph between stopping potential V₀ (along y-axis) and incident light frequency ν (along x-axis) for a photoelectric emitter is equal to:",
    "options": [
      "h",
      "h / e",
      "e · h",
      "e"
    ],
    "correctAnswer": 1,
    "explanation": "From Einstein's photoelectric equation: e V₀ = hν - ϕ₀ => V₀ = (h / e) ν - (ϕ₀ / e).\nComparing with the linear equation y = mx + c, the slope is m = h / e, a universal constant independent of the photosensitive metal.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "Photoelectric Effect"]
  },
  {
    "id": "ncert-phy-ch26-24",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Davisson-Germer Peak Conditions",
    "difficulty": "Easy",
    "questionText": "In the Davisson and Germer electron diffraction experiment, a pronounced peak in the intensity of scattered electrons is observed at a scattering angle and accelerating voltage of:",
    "options": [
      "50° and 54 V",
      "54° and 50 V",
      "50° and 50 V",
      "65° and 50 V"
    ],
    "correctAnswer": 0,
    "explanation": "In the historic Davisson-Germer experiment using a nickel crystal, constructive interference of scattered electron waves produced a sharp maximum at scattering angle ϕ = 50° with accelerating potential V = 54 V, confirming de Broglie's wave hypothesis.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "Davisson-Germer Experiment"]
  },
  {
    "id": "ncert-phy-ch26-25",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Resolving Power Scaling in Electron Microscope",
    "difficulty": "Easy",
    "questionText": "If the accelerating potential in an electron microscope is increased from 20 kV to 80 kV, its resolving power R will become:",
    "options": [
      "R / 4",
      "4 R",
      "2 R",
      "R / 2"
    ],
    "correctAnswer": 2,
    "explanation": "Resolving power of an electron microscope is inversely proportional to electron wavelength: RP ∝ 1 / λ. Since λ = h / √(2mqV) ∝ 1 / √V, we have RP ∝ √V.\nRP₂ / RP₁ = √(V₂ / V₁) = √(80 kV / 20 kV) = √4 = 2 => RP₂ = 2R.",
    "tags": ["NCERT NEET Physics", "Dual Nature of Radiation and Matter", "Electron Microscope"]
  }
];
