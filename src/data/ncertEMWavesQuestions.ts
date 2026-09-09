import { Question } from '../types';

export const NCERT_EM_WAVES_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch23-01",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Concept of Displacement Current",
    "difficulty": "Easy",
    "questionText": "Maxwell in his famous equations of electromagnetism introduced the concept of:",
    "options": [
      "Alternating current",
      "Direct current",
      "Displacement current",
      "Reactance"
    ],
    "correctAnswer": 2,
    "explanation": "Maxwell identified that Ampere's circuital law was inconsistent for time-varying electric fields (such as between the plates of a charging capacitor) and introduced the concept of displacement current Id = ε₀(dΦ_E/dt) to resolve this inconsistency.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "Displacement Current"]
  },
  {
    "id": "ncert-phy-ch23-02",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Ampere-Maxwell Circuital Law",
    "difficulty": "Medium",
    "questionText": "A parallel plate capacitor is charged by a battery. If two circular Amperian loops x and y are drawn such that loop x encloses the conducting wire outside the plates and loop y lies entirely between the plates, then ∮ B⃗ · dl⃗ will be zero along:",
    "options": [
      "Loop x only",
      "Loop y only",
      "Both loops x and y",
      "Neither loop x nor loop y"
    ],
    "correctAnswer": 3,
    "explanation": "According to the generalized Ampere-Maxwell law, ∮ B⃗ · dl⃗ = μ₀(I_c + I_d). For loop x, conduction current I_c passes through it (I_d = 0), giving ∮ B⃗ · dl⃗ = μ₀ I. For loop y between the plates, displacement current I_d passes through it (I_c = 0), giving ∮ B⃗ · dl⃗ = μ₀ I. Hence, the line integral is non-zero along both loops.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "Ampere-Maxwell Law"]
  },
  {
    "id": "ncert-phy-ch23-03",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Displacement Current Through Cross-Sectional Area",
    "difficulty": "Medium",
    "questionText": "A parallel plate capacitor with plate area A and separation between plates d is charged by a current I. The displacement current through a plane surface of area A/2 parallel to the plates and drawn symmetrically between the plates is:",
    "options": [
      "I",
      "I/4",
      "I/2",
      "3I/2"
    ],
    "correctAnswer": 2,
    "explanation": "The electric field between the plates is uniform, so the displacement current density J_d = I / A is also uniform across the plate area. The displacement current passing through a surface of area A' = A/2 is I_d' = J_d × A' = (I / A) × (A / 2) = I / 2.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "Displacement Current"]
  },
  {
    "id": "ncert-phy-ch23-04",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Magnitude of Displacement Current",
    "difficulty": "Easy",
    "questionText": "A parallel plate capacitor is charged to 60 μC. Due to a radioactive source, the plate loses charge at the rate of 1.8 × 10⁻⁸ C s⁻¹. The magnitude of the displacement current between the plates is:",
    "options": [
      "3.6 × 10⁻⁸ A",
      "1.8 × 10⁻⁸ A",
      "4.1 × 10⁻¹¹ A",
      "5.7 × 10⁻¹² A"
    ],
    "correctAnswer": 1,
    "explanation": "The displacement current between the plates of a capacitor is always equal in magnitude to the rate of change of charge on the plates: I_d = |dq/dt| = 1.8 × 10⁻⁸ C/s = 1.8 × 10⁻⁸ A.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "Displacement Current"]
  },
  {
    "id": "ncert-phy-ch23-05",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Phase and Nature of E and B Fields",
    "difficulty": "Easy",
    "questionText": "In a propagating plane electromagnetic wave, the oscillating electric field and magnetic field vectors are:",
    "options": [
      "In phase and parallel to each other",
      "In opposite phase and perpendicular to each other",
      "In opposite phase and parallel to each other",
      "In phase and perpendicular to each other"
    ],
    "correctAnswer": 3,
    "explanation": "In an electromagnetic wave in free space, the electric field E⃗ and magnetic field B⃗ oscillate sinusoidally in the same phase (reaching maxima and zero at the same instant and space coordinate) and are perpendicular to each other and to the direction of wave propagation.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "Wave Properties"]
  },
  {
    "id": "ncert-phy-ch23-06",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Direction of Fields and Wave Propagation",
    "difficulty": "Medium",
    "questionText": "A light wave is travelling along the +y direction. If the corresponding electric field vector E⃗ at any time is along the +x axis, the direction of the magnetic field vector B⃗ at that time is along:",
    "options": [
      "+y axis",
      "+x axis",
      "+z axis",
      "–z axis"
    ],
    "correctAnswer": 3,
    "explanation": "The direction of propagation of an electromagnetic wave is given by the cross product E⃗ × B⃗. Here, propagation is along +ĵ and E⃗ is along +î. Since î × (-k̂) = +ĵ, the magnetic field vector B⃗ must be oriented along the negative z-axis (–z axis).",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "Poynting Vector"]
  },
  {
    "id": "ncert-phy-ch23-07",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Relationship Between Field Amplitudes",
    "difficulty": "Easy",
    "questionText": "In an apparatus, the electric field of an EM wave was found to oscillate with an amplitude of 18 V m⁻¹. The magnitude of the oscillating magnetic field amplitude will be:",
    "options": [
      "4 × 10⁻⁶ T",
      "6 × 10⁻⁸ T",
      "9 × 10⁻⁹ T",
      "11 × 10⁻¹¹ T"
    ],
    "correctAnswer": 1,
    "explanation": "In free space, the amplitude of electric and magnetic fields are related by c = E₀ / B₀. Therefore, B₀ = E₀ / c = 18 / (3 × 10⁸) = 6 × 10⁻⁸ T.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "Field Amplitudes"]
  },
  {
    "id": "ncert-phy-ch23-08",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Spectrum Frequencies",
    "difficulty": "Medium",
    "questionText": "The frequency of an electromagnetic wave is 6 × 10¹⁵ Hz. This wave belongs to which part of the electromagnetic spectrum?",
    "options": [
      "Radiowave",
      "Microwave",
      "X-ray",
      "Ultraviolet"
    ],
    "correctAnswer": 3,
    "explanation": "The wavelength is λ = c / ν = (3 × 10⁸ m/s) / (6 × 10¹⁵ Hz) = 0.5 × 10⁻⁷ m = 50 nm (500 Å). Ultraviolet radiation spans wavelengths from ~0.6 nm to 380 nm (frequencies 8 × 10¹⁴ Hz to 5 × 10¹⁷ Hz), so this wave is an ultraviolet ray.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "EM Spectrum"]
  },
  {
    "id": "ncert-phy-ch23-09",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Wavelength Hierarchy in EM Spectrum",
    "difficulty": "Easy",
    "questionText": "Which of the following electromagnetic radiations has the highest wavelength?",
    "options": [
      "X-rays",
      "Radiowaves",
      "UV-rays",
      "Microwaves"
    ],
    "correctAnswer": 1,
    "explanation": "In order of increasing wavelength: γ-rays < X-rays < Ultraviolet < Visible light < Infrared < Microwaves < Radiowaves. Hence, radiowaves have the longest wavelength (ranging from mm up to thousands of kilometers).",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "EM Spectrum"]
  },
  {
    "id": "ncert-phy-ch23-10",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Transport of Energy and Momentum",
    "difficulty": "Easy",
    "questionText": "Electromagnetic waves can transport:",
    "options": [
      "Momentum only",
      "Energy only",
      "Charge",
      "Both momentum and energy"
    ],
    "correctAnswer": 3,
    "explanation": "Electromagnetic waves carry both energy and linear momentum through space. However, they carry zero net electric charge as they consist of oscillating electric and magnetic fields (photons with zero charge).",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "Wave Properties"]
  },
  {
    "id": "ncert-phy-ch23-11",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Poynting Vector and Propagation",
    "difficulty": "Easy",
    "questionText": "The cross product of electric field and magnetic field vectors (E⃗ × B⃗) gives the:",
    "options": [
      "Direction of EM wave propagation",
      "Speed of light",
      "Null vector",
      "Induced electromotive force"
    ],
    "correctAnswer": 0,
    "explanation": "The Poynting vector S⃗ = (E⃗ × B⃗) / μ₀ points in the direction of energy flow, which is the direction of propagation of the electromagnetic wave.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "Poynting Vector"]
  },
  {
    "id": "ncert-phy-ch23-12",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Direction of Propagation from Harmonic Fields",
    "difficulty": "Medium",
    "questionText": "If the electric field is E⃗ = E₀ sin(ωt – kz) î and the magnetic field is B⃗ = B₀ sin(ωt – kz) ĵ, then the electromagnetic wave travels along the:",
    "options": [
      "+z direction",
      "–y direction",
      "+x direction",
      "+y direction"
    ],
    "correctAnswer": 0,
    "explanation": "Direction of wave propagation is along E⃗ × B⃗ = (E₀ î) × (B₀ ĵ) = (E₀ B₀) k̂, which is along the +z direction. Also, the term (ωt - kz) indicates propagation in the positive z-direction.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "Wave Equation"]
  },
  {
    "id": "ncert-phy-ch23-13",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Wavelength from Magnetic Field Expression",
    "difficulty": "Medium",
    "questionText": "The oscillatory magnetic field in a plane electromagnetic wave is given by By = 0.6 × 10⁻⁵ sin(4000π x – 5 × 10¹⁰ π t) T (where x is in meters and t is in seconds). The wavelength of the wave is:",
    "options": [
      "0.4 × 10⁻³ m",
      "0.2 × 10⁻³ m",
      "0.5 × 10⁻³ m",
      "0.3 × 10⁻³ m"
    ],
    "correctAnswer": 2,
    "explanation": "Comparing with By = B₀ sin(kx - ωt), the propagation constant is k = 4000π m⁻¹. Since k = 2π / λ, we have λ = 2π / k = 2π / (4000π) = 1 / 2000 m = 0.5 × 10⁻³ m.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "Wavelength Calculation"]
  },
  {
    "id": "ncert-phy-ch23-14",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Energy Density Equipartition",
    "difficulty": "Easy",
    "questionText": "In a plane electromagnetic wave propagating in free space:",
    "options": [
      "The average energy density of the electric field is equal to that of the magnetic field",
      "The average energy density of the electric field is greater than that of the magnetic field",
      "The average energy density of the electric field is less than that of the magnetic field",
      "Energy is carried only by the electric field"
    ],
    "correctAnswer": 0,
    "explanation": "In an electromagnetic wave, energy is equally divided between the electric and magnetic fields: u_E = (1/4)ε₀ E₀² and u_B = (1/4μ₀) B₀². Since E₀ = c B₀ and c² = 1/(μ₀ε₀), u_E = u_B. Total average energy density is u = u_E + u_B = (1/2)ε₀ E₀².",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "Energy Density"]
  },
  {
    "id": "ncert-phy-ch23-15",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Ratio of Field Amplitudes",
    "difficulty": "Easy",
    "questionText": "The ratio of the amplitude of magnetic field B₀ to electric field E₀ associated with an electromagnetic wave in vacuum is (where c is the speed of light in vacuum):",
    "options": [
      "1 / c²",
      "c",
      "c²",
      "1 / c"
    ],
    "correctAnswer": 3,
    "explanation": "By Maxwell's equations, E₀ / B₀ = c. Therefore, the ratio B₀ / E₀ is equal to 1 / c.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "Field Amplitudes"]
  },
  {
    "id": "ncert-phy-ch23-16",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Poynting Vector Mathematical Definition",
    "difficulty": "Easy",
    "questionText": "The Poynting vector S⃗ representing the energy flux per unit area per unit time in vacuum is defined in usual notation as:",
    "options": [
      "S⃗ = B⃗ × E⃗",
      "S⃗ = E⃗ × B⃗",
      "S⃗ = (E⃗ × B⃗) / μ₀",
      "S⃗ = (B⃗ × E⃗) / μ₀"
    ],
    "correctAnswer": 2,
    "explanation": "The Poynting vector in vacuum is defined as S⃗ = (E⃗ × B⃗) / μ₀. Its magnitude gives the instantaneous power flow per unit area and its direction is the direction of wave propagation.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "Poynting Vector"]
  },
  {
    "id": "ncert-phy-ch23-17",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Rate of Voltage Change Across Capacitor",
    "difficulty": "Medium",
    "questionText": "The rate at which the potential difference between the plates of a parallel plate capacitor of capacitance 2 μF must be changed to produce a displacement current of 1 A is:",
    "options": [
      "0.5 MV/s",
      "0.3 MV/s",
      "0.2 MV/s",
      "0.1 MV/s"
    ],
    "correctAnswer": 0,
    "explanation": "Displacement current is I_d = C (dV/dt). Therefore, dV/dt = I_d / C = 1 A / (2 × 10⁻⁶ F) = 0.5 × 10⁶ V/s = 0.5 MV/s.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "Displacement Current"]
  },
  {
    "id": "ncert-phy-ch23-18",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Speed of Light in a Dielectric Medium",
    "difficulty": "Easy",
    "questionText": "For a transparent medium, the relative permeability μᵣ and relative permittivity εᵣ are 1.0 and 1.44 respectively. The velocity of light in this medium would be: [NEET-2019]",
    "options": [
      "4.32 × 10⁸ m/s",
      "2.5 × 10⁸ m/s",
      "3 × 10⁸ m/s",
      "2.08 × 10⁸ m/s"
    ],
    "correctAnswer": 1,
    "explanation": "Speed of light in a material medium is v = c / √(μᵣ εᵣ) = (3 × 10⁸ m/s) / √(1.0 × 1.44) = (3 × 10⁸) / 1.2 = 2.5 × 10⁸ m/s.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "Speed of Light"]
  },
  {
    "id": "ncert-phy-ch23-19",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Conduction and Displacement Current Equality",
    "difficulty": "Easy",
    "questionText": "A parallel plate capacitor of capacitance 20 μF is being charged by a voltage source whose potential is changing at the rate of 3 V/s. The conduction current through the connecting wires and the displacement current through the plates of the capacitor are, respectively: [NEET-2019]",
    "options": [
      "Zero, 60 μA",
      "60 μA, 60 μA",
      "60 μA, zero",
      "Zero, zero"
    ],
    "correctAnswer": 1,
    "explanation": "Conduction current is I_c = dq/dt = C (dV/dt) = 20 μF × 3 V/s = 60 μA. In accordance with generalized Ampere-Maxwell law, the displacement current between the plates equals the conduction current in the connecting wires: I_d = I_c = 60 μA.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "Displacement Current"]
  },
  {
    "id": "ncert-phy-ch23-20",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Peak Magnetic Field from RMS Electric Field",
    "difficulty": "Medium",
    "questionText": "In an electromagnetic wave in free space, the root mean square value of the electric field is Erms = 6 V/m. The peak value of the magnetic field is: [NEET-2017]",
    "options": [
      "1.41 × 10⁻⁸ T",
      "2.83 × 10⁻⁸ T",
      "0.70 × 10⁻⁸ T",
      "4.23 × 10⁻⁸ T"
    ],
    "correctAnswer": 1,
    "explanation": "First, the peak value of electric field is E₀ = √2 Erms = √2 × 6 V/m. Then, the peak value of magnetic field is B₀ = E₀ / c = (6√2) / (3 × 10⁸) = 2√2 × 10⁻⁸ T = 2 × 1.414 × 10⁻⁸ T ≈ 2.83 × 10⁻⁸ T.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "Field Calculations"]
  },
  {
    "id": "ncert-phy-ch23-21",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Radiation Pressure and Momentum",
    "difficulty": "Easy",
    "questionText": "A radiation of energy E falls normally on a perfectly reflecting surface. The momentum transferred to the surface is (where c is the velocity of light): [AIPMT-2015]",
    "options": [
      "2E / c²",
      "E / c",
      "E / 2c²",
      "2E / c"
    ],
    "correctAnswer": 3,
    "explanation": "Initial momentum of incident radiation is p_initial = E / c. On complete reflection, the final momentum is p_final = -E / c. Therefore, the change in momentum (momentum transferred to the surface) is Δp = p_initial - p_final = 2E / c.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "Radiation Pressure"]
  },
  {
    "id": "ncert-phy-ch23-22",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Radiation Force on Reflecting Surface",
    "difficulty": "Medium",
    "questionText": "Light with an energy flux of 25 × 10⁴ W m⁻² falls on a perfectly reflecting surface at normal incidence. If the surface area is 15 cm², the average force exerted on the surface is: [AIPMT-2014]",
    "options": [
      "1.25 × 10⁻⁶ N",
      "2.50 × 10⁻⁶ N",
      "1.20 × 10⁻⁶ N",
      "3.0 × 10⁻⁶ N"
    ],
    "correctAnswer": 1,
    "explanation": "For a perfectly reflecting surface at normal incidence, radiation pressure P = 2I / c. The force exerted is F = P × A = 2IA / c. Given I = 25 × 10⁴ W/m² and A = 15 × 10⁻⁴ m²: F = [2 × (25 × 10⁴) × (15 × 10⁻⁴)] / (3 × 10⁸) = 750 / (3 × 10⁸) = 2.50 × 10⁻⁶ N.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "Radiation Force"]
  },
  {
    "id": "ncert-phy-ch23-23",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Wave Vector and Frequency Relation",
    "difficulty": "Easy",
    "questionText": "The electric field associated with an EM wave in vacuum is given by E⃗ = 40 cos(kz – 6 × 10⁸ t) î, where E, z, and t are in V/m, meters, and seconds respectively. The value of wave vector k is: [AIPMT-2012]",
    "options": [
      "6 m⁻¹",
      "3 m⁻¹",
      "2 m⁻¹",
      "0.5 m⁻¹"
    ],
    "correctAnswer": 2,
    "explanation": "Comparing with E = E₀ cos(kz - ωt), the angular frequency is ω = 6 × 10⁸ rad/s. In vacuum, the wave speed is c = ω / k = 3 × 10⁸ m/s. Therefore, k = ω / c = (6 × 10⁸) / (3 × 10⁸) = 2 m⁻¹.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "Wave Vector"]
  },
  {
    "id": "ncert-phy-ch23-24",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Order of Wavelengths in Spectrum",
    "difficulty": "Easy",
    "questionText": "The decreasing order of wavelength of infrared, microwave, ultraviolet and gamma rays is: [AIPMT-2011]",
    "options": [
      "Infrared, microwave, ultraviolet, gamma rays",
      "Microwave, infrared, ultraviolet, gamma rays",
      "Gamma rays, ultraviolet, infrared, microwaves",
      "Microwaves, gamma rays, infrared, ultraviolet"
    ],
    "correctAnswer": 1,
    "explanation": "Microwaves have the longest wavelength (~1 mm to 0.1 m), followed by infrared (~750 nm to 1 mm), ultraviolet (~1 nm to 400 nm), and gamma rays have the shortest wavelength (< 10⁻¹² m). Thus, the decreasing order is Microwave > Infrared > Ultraviolet > Gamma rays.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "EM Spectrum"]
  },
  {
    "id": "ncert-phy-ch23-25",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Intensity of an Electromagnetic Wave",
    "difficulty": "Hard",
    "questionText": "The electric field of an emergent beam is represented by Ex = 36 sin(1.2 × 10⁷ z – 3.6 × 10¹⁵ t) V/m. The average intensity of the beam in W/m² is approximately:",
    "options": [
      "6.88",
      "3.44",
      "1.72",
      "0.86"
    ],
    "correctAnswer": 2,
    "explanation": "Speed of the wave is v = ω / k = (3.6 × 10¹⁵) / (1.2 × 10⁷) = 3 × 10⁸ m/s = c. Average intensity of an electromagnetic wave is I = (1/2) ε₀ E₀² c. Given E₀ = 36 V/m: I = 0.5 × (8.854 × 10⁻¹²) × (36)² × (3 × 10⁸) = 0.5 × 8.854 × 10⁻¹² × 1296 × 3 × 10⁸ ≈ 1.72 W/m².",
    "tags": ["NCERT NEET Physics", "Electromagnetic Waves", "Wave Intensity"]
  }
];
