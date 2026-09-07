import { Question } from '../types';
import { ELASTICITY_BOOK_QUESTIONS, ELASTICITY_QUESTIONS } from './elasticityQuestions';
import { SURFACE_TENSION_BOOK_QUESTIONS, SURFACE_TENSION_QUESTIONS } from './surfaceTensionQuestions';
import { FLUID_MECHANICS_BOOK_QUESTIONS, FLUID_MECHANICS_QUESTIONS } from './fluidMechanicsQuestions';
import { THERMAL_PROPERTIES_BOOK_QUESTIONS, THERMAL_PROPERTIES_QUESTIONS } from './thermalPropertiesQuestions';
import { THERMODYNAMICS_PHYSICS_BOOK_QUESTIONS, THERMODYNAMICS_PHYSICS_QUESTIONS } from './thermodynamicsPhysicsQuestions';

export {
  ELASTICITY_BOOK_QUESTIONS,
  ELASTICITY_QUESTIONS,
  SURFACE_TENSION_BOOK_QUESTIONS,
  SURFACE_TENSION_QUESTIONS,
  FLUID_MECHANICS_BOOK_QUESTIONS,
  FLUID_MECHANICS_QUESTIONS,
  THERMAL_PROPERTIES_BOOK_QUESTIONS,
  THERMAL_PROPERTIES_QUESTIONS,
  THERMODYNAMICS_PHYSICS_BOOK_QUESTIONS,
  THERMODYNAMICS_PHYSICS_QUESTIONS
};

export const KINETIC_THEORY_QUESTIONS: Question[] = [
  {
    "id": "ktg-q1",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Hard",
    "questionText": "The pressure exerted by an ideal gas of density ρ and root mean square speed v_rms is given by",
    "options": [
      "(1/3) ρ v_rms²",
      "(1/2) ρ v_rms²",
      "(2/3) ρ v_rms²",
      "ρ v_rms²"
    ],
    "correctAnswer": 0,
    "explanation": "Kinetic theory derivation gives P = (1/3) ρ v_rms² = (1/3) (M/V) v_rms².",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q2",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Medium",
    "questionText": "The average translational kinetic energy of an ideal gas molecule at absolute temperature T is",
    "options": [
      "(3/2) k_B T",
      "(1/2) k_B T",
      "k_B T",
      "(5/2) k_B T"
    ],
    "correctAnswer": 0,
    "explanation": "By equipartition theorem, each translational degree of freedom has (1/2) k_B T energy. For 3 translational dimensions: E_trans = (3/2) k_B T.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q3",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Easy",
    "questionText": "The root mean square velocity v_rms of gas molecules of molar mass M at temperature T is",
    "options": [
      "√(3RT / M)",
      "√(8RT / πM)",
      "√(2RT / M)",
      "√(RT / M)"
    ],
    "correctAnswer": 0,
    "explanation": "v_rms = √(3 k_B T / m) = √(3 R T / M).",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q4",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Medium",
    "questionText": "The most probable speed v_mp of gas molecules is",
    "options": [
      "√(2RT / M)",
      "√(3RT / M)",
      "√(8RT / πM)",
      "√(RT / 2M)"
    ],
    "correctAnswer": 0,
    "explanation": "From Maxwell-Boltzmann speed distribution, peak occurs at v_mp = √(2RT / M).",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q5",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Hard",
    "questionText": "The average speed v_avg of gas molecules is",
    "options": [
      "√(8RT / πM)",
      "√(3RT / M)",
      "√(2RT / M)",
      "√(πRT / 8M)"
    ],
    "correctAnswer": 0,
    "explanation": "Mean speed v_avg = √(8RT / (πM)) ≈ 1.60 √(RT/M).",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q6",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Medium",
    "questionText": "The ratio of speeds v_mp : v_avg : v_rms for an ideal gas is approximately",
    "options": [
      "1 : 1.128 : 1.224 (√2 : √(8/π) : √3)",
      "1 : 1 : 1",
      "1.224 : 1.128 : 1",
      "√3 : √(8/π) : √2"
    ],
    "correctAnswer": 0,
    "explanation": "v_mp : v_avg : v_rms = √2 : √(8/π) : √3 ≈ 1.414 : 1.596 : 1.732 => 1 : 1.128 : 1.224.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q7",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Easy",
    "questionText": "If the absolute temperature of an ideal gas is quadrupled (T -> 4T), the rms speed of its molecules becomes",
    "options": [
      "2 times",
      "4 times",
      "16 times",
      "√2 times"
    ],
    "correctAnswer": 0,
    "explanation": "v_rms ∝ √T. If T' = 4T, v'_rms = √(4) v_rms = 2 v_rms.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q8",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Medium",
    "questionText": "At what temperature will the rms speed of oxygen molecules (M = 32 g/mol) equal that of hydrogen molecules (M = 2 g/mol) at 0 °C (273 K)?",
    "options": [
      "2184 K (≈ 4368 K)",
      "4368 K",
      "1092 K",
      "546 K"
    ],
    "correctAnswer": 1,
    "explanation": "v_rms ∝ √(T/M). For v_rms(O₂) = v_rms(H₂): T_O₂ / 32 = 273 / 2 => T_O₂ = (32 / 2) × 273 = 16 × 273 = 4368 K.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q9",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Hard",
    "questionText": "The total translational kinetic energy of 1 mole of any ideal gas at 27 °C (300 K) is (R = 8.314 J/mol·K)",
    "options": [
      "3741 J",
      "2494 J",
      "1247 J",
      "4988 J"
    ],
    "correctAnswer": 0,
    "explanation": "E = (3/2) n R T = (3/2) × 1 × 8.314 × 300 = 4.5 × 831.4 = 3741.3 J.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q10",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Medium",
    "questionText": "According to the law of equipartition of energy, the energy associated with each degree of freedom per molecule is",
    "options": [
      "(1/2) k_B T",
      "k_B T",
      "(3/2) k_B T",
      "(1/2) R T"
    ],
    "correctAnswer": 0,
    "explanation": "Equipartition theorem allocates exactly (1/2) k_B T of energy to every independent quadratic degree of freedom at thermal equilibrium.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q11",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Easy",
    "questionText": "A rigid diatomic molecule (such as O₂ or N₂ at moderate temperatures) has degrees of freedom equal to",
    "options": [
      "3",
      "5 (3 translational + 2 rotational)",
      "6",
      "7"
    ],
    "correctAnswer": 1,
    "explanation": "Diatomic molecules have 3 translational and 2 rotational degrees of freedom (rotation about internuclear axis has negligible moment of inertia), total f = 5.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q12",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Medium",
    "questionText": "A non-linear polyatomic molecule (such as H₂O or NH₃) has degrees of freedom equal to",
    "options": [
      "3",
      "5",
      "6 (3 translational + 3 rotational)",
      "7"
    ],
    "correctAnswer": 2,
    "explanation": "A non-linear polyatomic molecule has 3 translational and 3 rotational degrees of freedom, giving f = 6.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q13",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Hard",
    "questionText": "The mean free path λ of gas molecules of diameter d and number density n (molecules per unit volume) is",
    "options": [
      "1 / (√2 π n d²)",
      "1 / (π n d²)",
      "√2 π n d²",
      "1 / (√2 n d)"
    ],
    "correctAnswer": 0,
    "explanation": "Standard kinetic theory formula for mean free path accounting for relative motion is λ = 1 / (√2 π n d²).",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q14",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Medium",
    "questionText": "If the pressure of a gas in a closed container of fixed volume is doubled, the mean free path of molecules",
    "options": [
      "Doubles",
      "Halves",
      "Remains unchanged",
      "Becomes 4 times"
    ],
    "correctAnswer": 2,
    "explanation": "In a closed container, volume and total molecules are fixed, so number density n = N/V is constant. Since λ = 1/(√2 π n d²), mean free path remains unchanged.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q15",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Easy",
    "questionText": "If temperature of a gas at constant pressure is doubled, its mean free path",
    "options": [
      "Doubles",
      "Halves",
      "Remains same",
      "Becomes √2 times"
    ],
    "correctAnswer": 0,
    "explanation": "From P = n k_B T => n = P / (k_B T). At constant P, n ∝ 1/T. Therefore λ ∝ 1/n ∝ T. Doubling temperature doubles the mean free path.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q16",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Medium",
    "questionText": "An ideal gas occupies volume V at pressure P. The mean kinetic energy per unit volume (energy density) is",
    "options": [
      "(3/2) P",
      "(2/3) P",
      "(1/2) P",
      "3 P"
    ],
    "correctAnswer": 0,
    "explanation": "P = (2/3) E_vol => Energy per unit volume E_vol = (3/2) P.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q17",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Hard",
    "questionText": "The root mean square speed of smoke particles of mass 5 × 10⁻¹⁷ kg in air at 27 °C (300 K) is (k_B = 1.38 × 10⁻²³ J/K)",
    "options": [
      "1.58 cm/s",
      "1.58 m/s",
      "15.8 m/s",
      "0.158 cm/s"
    ],
    "correctAnswer": 0,
    "explanation": "v_rms = √(3 k_B T / m) = √[ (3 × 1.38 × 10⁻²³ × 300) / (5 × 10⁻¹⁷) ] = √[ 1.242 × 10⁻²⁰ / (5 × 10⁻¹⁷) ] = √(2.484 × 10⁻⁴) ≈ 0.01576 m/s = 1.58 cm/s (Brownian motion).",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q18",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Medium",
    "questionText": "At absolute zero temperature (0 K), the kinetic energy of ideal gas molecules becomes",
    "options": [
      "Zero",
      "Minimum finite value (zero-point energy)",
      "Infinite",
      "Negative"
    ],
    "correctAnswer": 0,
    "explanation": "Classically, E = (3/2) k_B T = 0 at T = 0 K (all molecular thermal translational motion ceases).",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q19",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Easy",
    "questionText": "Avogadro's law states that equal volumes of all ideal gases under identical conditions of temperature and pressure contain",
    "options": [
      "Equal masses",
      "Equal number of molecules (N)",
      "Equal number of atoms",
      "Equal densities"
    ],
    "correctAnswer": 1,
    "explanation": "From PV = N k_B T: equal P, V, T ensures exactly equal number of molecules N = N_A = 6.022 × 10²³ for 1 mole (22.4 L at STP).",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q20",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Medium",
    "questionText": "The molar mass of gas A is 4 times that of gas B. If both are at same temperature, the ratio of rms speeds v_A / v_B is",
    "options": [
      "1 : 2",
      "2 : 1",
      "1 : 4",
      "4 : 1"
    ],
    "correctAnswer": 0,
    "explanation": "v_rms ∝ 1/√M. v_A / v_B = √(M_B / M_A) = √(1 / 4) = 1/2 = 1 : 2.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q21",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Hard",
    "questionText": "Dalton's law of partial pressures states that the total pressure of a non-reacting gas mixture is",
    "options": [
      "Sum of partial pressures of individual gases",
      "Product of partial pressures",
      "Average of partial pressures",
      "Square root of sum of squares"
    ],
    "correctAnswer": 0,
    "explanation": "P_total = P₁ + P₂ + P₃ + ... = Σ (n_i R T / V).",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q22",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Medium",
    "questionText": "A container has 8 g of O₂ and 14 g of N₂ at temperature T in volume V. The total pressure is",
    "options": [
      "(3/4) R T / V",
      "(1/2) R T / V",
      "R T / V",
      "(5/4) R T / V"
    ],
    "correctAnswer": 0,
    "explanation": "n(O₂) = 8/32 = 0.25 mol. n(N₂) = 14/28 = 0.50 mol. n_total = 0.25 + 0.50 = 0.75 mol = (3/4) mol. P = (3/4) R T / V.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q23",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Easy",
    "questionText": "The ratio of specific heats γ = C_p / C_v is related to degrees of freedom f by the formula",
    "options": [
      "γ = 1 + 2/f",
      "γ = 1 + f/2",
      "γ = 1 - 2/f",
      "γ = (f + 1)/f"
    ],
    "correctAnswer": 0,
    "explanation": "C_v = (f/2)R, C_p = (f/2 + 1)R => γ = C_p / C_v = 1 + 2/f.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q24",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Medium",
    "questionText": "For a gas of triatomic linear molecules (like CO₂ at moderate temperatures), degrees of freedom f is",
    "options": [
      "5 (3 trans + 2 rot)",
      "6",
      "7",
      "3"
    ],
    "correctAnswer": 0,
    "explanation": "A linear triatomic molecule has 3 translational and 2 rotational degrees of freedom (f = 5), behaving similarly to diatomic gases.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q25",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Hard",
    "questionText": "The internal energy of 2 moles of a monoatomic gas at temperature T is",
    "options": [
      "3 R T",
      "2 R T",
      "5 R T",
      "1.5 R T"
    ],
    "correctAnswer": 0,
    "explanation": "U = n (f/2) R T = 2 × (3/2) R T = 3 R T.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q26",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Medium",
    "questionText": "The internal energy of 1 mole of a diatomic gas at temperature T (rigid rotators) is",
    "options": [
      "(5/2) R T",
      "(3/2) R T",
      "(7/2) R T",
      "3 R T"
    ],
    "correctAnswer": 0,
    "explanation": "For rigid diatomic gas f = 5 => U = 1 × (5/2) R T = (5/2) R T.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q27",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Easy",
    "questionText": "The value of universal gas constant R is approximately",
    "options": [
      "8.314 J/(mol·K) ≈ 2.0 cal/(mol·K)",
      "1.38 × 10⁻²³ J/K",
      "6.022 × 10²³ mol⁻¹",
      "9.8 m/s²"
    ],
    "correctAnswer": 0,
    "explanation": "R = N_A k_B = 8.314 J·mol⁻¹·K⁻¹ ≈ 1.987 cal·mol⁻¹·K⁻¹ ≈ 0.0821 L·atm·mol⁻¹·K⁻¹.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q28",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Medium",
    "questionText": "Boltzmann constant k_B is related to universal gas constant R and Avogadro number N_A by",
    "options": [
      "k_B = R / N_A",
      "k_B = R · N_A",
      "k_B = N_A / R",
      "k_B = R · N_A²"
    ],
    "correctAnswer": 0,
    "explanation": "Boltzmann constant is the gas constant per individual molecule: k_B = R / N_A = 1.3806 × 10⁻²³ J/K.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q29",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Hard",
    "questionText": "The molar heat capacity at constant volume C_v for a mixture of 1 mole of monoatomic gas (C_v1 = 1.5R) and 1 mole of diatomic gas (C_v2 = 2.5R) is",
    "options": [
      "2.0 R",
      "1.5 R",
      "2.5 R",
      "3.0 R"
    ],
    "correctAnswer": 0,
    "explanation": "C_v,mix = (n₁ C_v1 + n₂ C_v2) / (n₁ + n₂) = (1 × 1.5R + 1 × 2.5R) / (1 + 1) = 4.0R / 2 = 2.0 R.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q30",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Medium",
    "questionText": "In the above gas mixture, the adiabatic exponent γ_mix is",
    "options": [
      "1.50",
      "1.40",
      "1.67",
      "1.33"
    ],
    "correctAnswer": 0,
    "explanation": "C_p,mix = C_v,mix + R = 2.0R + R = 3.0R. γ_mix = C_p,mix / C_v,mix = 3.0R / 2.0R = 1.50.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q31",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Easy",
    "questionText": "The collisions between molecules in an ideal gas are assumed to be",
    "options": [
      "Perfectly elastic",
      "Inelastic",
      "Partially elastic",
      "Gravitational"
    ],
    "correctAnswer": 0,
    "explanation": "Kinetic theory assumes gas molecules are point masses undergoing perfectly elastic collisions (conserving momentum and translational kinetic energy).",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q32",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Medium",
    "questionText": "The time of collision between two ideal gas molecules compared to the time between successive collisions is",
    "options": [
      "Negligibly small",
      "Equal",
      "Much larger",
      "Infinite"
    ],
    "correctAnswer": 0,
    "explanation": "Molecular collisions are assumed instantaneous, with contact duration negligible compared to the time spent traversing the mean free path.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q33",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Hard",
    "questionText": "The real gases show maximum deviation from ideal gas behavior at",
    "options": [
      "High pressure and low temperature",
      "Low pressure and high temperature",
      "High pressure and high temperature",
      "Low pressure and low temperature"
    ],
    "correctAnswer": 0,
    "explanation": "At high pressure and low temperature, intermolecular attractive forces and finite molecular volume become significant, causing deviations from PV = nRT.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q34",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Medium",
    "questionText": "A real gas behaves most like an ideal gas at",
    "options": [
      "Low pressure and high temperature",
      "High pressure and low temperature",
      "High pressure and high temperature",
      "Low pressure and low temperature"
    ],
    "correctAnswer": 0,
    "explanation": "At low pressure (sparse density) and high temperature (high thermal energy), intermolecular forces and volume corrections become negligible.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q35",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Easy",
    "questionText": "In the van der Waals equation (P + a/V²)(V - b) = RT, the constant 'a' accounts for",
    "options": [
      "Intermolecular attractive forces",
      "Finite molecular size (excluded volume)",
      "Temperature fluctuation",
      "Viscous drag"
    ],
    "correctAnswer": 0,
    "explanation": "The correction term a/V² accounts for cohesive intermolecular attractive forces, while 'b' represents the excluded volume (4 times actual molecular volume).",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q36",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Medium",
    "questionText": "The unit of van der Waals constant 'a' is",
    "options": [
      "N·m⁴ / mol² (or atm·L² / mol²)",
      "N·m² / mol",
      "m³ / mol",
      "N / m²"
    ],
    "correctAnswer": 0,
    "explanation": "[a / V²] = [P] => [a] = [P][V²] = (N/m²) · (m³)² = N·m⁴ / mol².",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q37",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Hard",
    "questionText": "The unit of van der Waals constant 'b' is",
    "options": [
      "m³ / mol (or L / mol)",
      "m² / mol",
      "N·m / mol",
      "Dimensionless"
    ],
    "correctAnswer": 0,
    "explanation": "[b] = [V] = m³ / mol = L / mol.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q38",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Medium",
    "questionText": "Boyle temperature T_B of a real gas is given in terms of van der Waals constants by",
    "options": [
      "a / (R b)",
      "8a / (27 R b)",
      "2a / (R b)",
      "a / (2 R b)"
    ],
    "correctAnswer": 0,
    "explanation": "Boyle temperature T_B = a / (R b), where the real gas obeys ideal gas law over a wide pressure range.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q39",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Easy",
    "questionText": "Critical temperature T_c of a van der Waals gas is given by",
    "options": [
      "8a / (27 R b)",
      "a / (R b)",
      "a / (27 b²)",
      "3b"
    ],
    "correctAnswer": 0,
    "explanation": "Critical temperature T_c = 8a / (27 R b), above which the gas cannot be liquefied no matter how much pressure is applied.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q40",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Medium",
    "questionText": "Critical pressure P_c and critical volume V_c for a van der Waals gas are",
    "options": [
      "P_c = a / (27 b²), V_c = 3b",
      "P_c = a / b², V_c = b",
      "P_c = 8a / (27 b), V_c = 2b",
      "P_c = a / (3b), V_c = 3b"
    ],
    "correctAnswer": 0,
    "explanation": "Standard van der Waals critical parameters: P_c = a / (27 b²) and V_c = 3b.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q41",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Hard",
    "questionText": "Compressibility factor Z for an ideal gas is strictly equal to",
    "options": [
      "1",
      "0",
      "> 1",
      "< 1"
    ],
    "correctAnswer": 0,
    "explanation": "Compressibility factor Z = P V / (n R T) = 1.0 for all ideal gases under all conditions.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q42",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Medium",
    "questionText": "If Z < 1 for a real gas, it indicates that",
    "options": [
      "Attractive intermolecular forces dominate (gas is more compressible than ideal)",
      "Repulsive forces dominate",
      "Gas is ideal",
      "Gas cannot be liquefied"
    ],
    "correctAnswer": 0,
    "explanation": "When Z < 1, intermolecular attractive forces pull molecules together, making the gas easier to compress than an ideal gas.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q43",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Easy",
    "questionText": "If Z > 1 for a real gas (e.g. H₂ and He at room temperature), it indicates that",
    "options": [
      "Repulsive forces and molecular volume dominate (gas is less compressible than ideal)",
      "Attractive forces dominate",
      "Gas is ideal",
      "Pressure is zero"
    ],
    "correctAnswer": 0,
    "explanation": "When Z > 1, molecular size and repulsive forces dominate, making the gas less compressible than an ideal gas.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q44",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Medium",
    "questionText": "At absolute temperature T, the frequency of collisions per unit volume in an ideal gas is proportional to",
    "options": [
      "√T",
      "T",
      "T²",
      "1 / √T"
    ],
    "correctAnswer": 0,
    "explanation": "Collision frequency Z₁ = √2 π d² v_avg n ∝ v_avg ∝ √T.",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  },
  {
    "id": "ktg-q45",
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "Hard",
    "questionText": "The speed of sound in an ideal gas v = √(γ P / ρ) = √(γ R T / M) depends on absolute temperature as",
    "options": [
      "v ∝ √T",
      "v ∝ T",
      "v ∝ T²",
      "Independent of T"
    ],
    "correctAnswer": 0,
    "explanation": "Speed of sound in gas v = √(γ R T / M) is directly proportional to the square root of absolute temperature (v ∝ √T).",
    "tags": [
      "Kinetic Theory of Gases",
      "Kinetic Theory of Gases"
    ]
  }
];
