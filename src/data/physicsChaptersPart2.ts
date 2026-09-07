import { Question } from '../types';
import { ELASTICITY_BOOK_QUESTIONS, ELASTICITY_QUESTIONS } from './elasticityQuestions';
import { SURFACE_TENSION_BOOK_QUESTIONS, SURFACE_TENSION_QUESTIONS } from './surfaceTensionQuestions';
import { FLUID_MECHANICS_BOOK_QUESTIONS, FLUID_MECHANICS_QUESTIONS } from './fluidMechanicsQuestions';
import { THERMAL_PROPERTIES_BOOK_QUESTIONS, THERMAL_PROPERTIES_QUESTIONS } from './thermalPropertiesQuestions';

export {
  ELASTICITY_BOOK_QUESTIONS,
  ELASTICITY_QUESTIONS,
  SURFACE_TENSION_BOOK_QUESTIONS,
  SURFACE_TENSION_QUESTIONS,
  FLUID_MECHANICS_BOOK_QUESTIONS,
  FLUID_MECHANICS_QUESTIONS,
  THERMAL_PROPERTIES_BOOK_QUESTIONS,
  THERMAL_PROPERTIES_QUESTIONS
};

export const THERMODYNAMICS_PHYSICS_QUESTIONS: Question[] = [
  {
    "id": "thd-q1",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Hard",
    "questionText": "The first law of thermodynamics is a statement of conservation of",
    "options": [
      "Mass",
      "Energy",
      "Momentum",
      "Temperature"
    ],
    "correctAnswer": 1,
    "explanation": "First law dQ = dU + dW expresses conservation of total energy (heat, internal energy, and mechanical work).",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q2",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Medium",
    "questionText": "In an isothermal expansion of an ideal gas, the change in internal energy ΔU is",
    "options": [
      "Positive",
      "Negative",
      "Zero",
      "Infinite"
    ],
    "correctAnswer": 2,
    "explanation": "Internal energy of an ideal gas depends solely on temperature: U = n C_v T. In isothermal process (ΔT = 0), ΔU = 0.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q3",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Easy",
    "questionText": "Work done during an isothermal expansion of n moles of ideal gas from volume V₁ to V₂ at temperature T is",
    "options": [
      "n R T ln(V₂ / V₁)",
      "n R T (V₂ - V₁)",
      "n C_v (T₂ - T₁)",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "W = ∫ P dV = ∫ (nRT/V) dV = n R T ln(V₂ / V₁).",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q4",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Medium",
    "questionText": "In an adiabatic process for an ideal gas, the relation between pressure P and volume V is",
    "options": [
      "P V = const",
      "P V^γ = const",
      "P^γ V = const",
      "P / V^γ = const"
    ],
    "correctAnswer": 1,
    "explanation": "Standard adiabatic condition: P V^γ = constant (where γ = C_p / C_v).",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q5",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Hard",
    "questionText": "Work done by an ideal gas in an adiabatic expansion from (P₁, V₁, T₁) to (P₂, V₂, T₂) is",
    "options": [
      "(P₁ V₁ - P₂ V₂) / (γ - 1)",
      "n R (T₁ - T₂) / (γ - 1)",
      "(P₂ V₂ - P₁ V₁) / (γ - 1)",
      "Both (A) and (B)"
    ],
    "correctAnswer": 3,
    "explanation": "W = -ΔU = -n C_v (T₂ - T₁) = n R (T₁ - T₂) / (γ - 1) = (P₁ V₁ - P₂ V₂) / (γ - 1). Both expressions are equivalent and correct.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q6",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Medium",
    "questionText": "The efficiency of a Carnot heat engine operating between temperatures T₁ (source) and T₂ (sink) in Kelvin is",
    "options": [
      "1 - T₂ / T₁",
      "1 - T₁ / T₂",
      "T₂ / T₁",
      "T₁ / (T₁ - T₂)"
    ],
    "correctAnswer": 0,
    "explanation": "Carnot efficiency η = 1 - Q₂ / Q₁ = 1 - T₂ / T₁.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q7",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Easy",
    "questionText": "A Carnot engine operates between 227 °C and 27 °C. Its efficiency is",
    "options": [
      "20%",
      "40%",
      "50%",
      "80%"
    ],
    "correctAnswer": 1,
    "explanation": "T₁ = 227 + 273 = 500 K. T₂ = 27 + 273 = 300 K. η = 1 - 300 / 500 = 1 - 0.60 = 0.40 = 40%.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q8",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Medium",
    "questionText": "If the Carnot engine in the above problem absorbs 1000 J of heat from the source, work delivered per cycle is",
    "options": [
      "200 J",
      "400 J",
      "500 J",
      "600 J"
    ],
    "correctAnswer": 1,
    "explanation": "W = η × Q₁ = 0.40 × 1000 J = 400 J.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q9",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Hard",
    "questionText": "The slope of an adiabatic curve on a P-V indicator diagram compared to the slope of an isothermal curve at the same point is",
    "options": [
      "γ times steeper",
      "1/γ times",
      "Equal",
      "Opposite sign"
    ],
    "correctAnswer": 0,
    "explanation": "(dP/dV)_adiabatic = -γ (P/V) = γ × (dP/dV)_isothermal. Adiabatic slope is strictly γ times steeper than isothermal slope.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q10",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Medium",
    "questionText": "In an isochoric process (constant volume), work done by the system is",
    "options": [
      "Positive",
      "Negative",
      "Zero",
      "n R T"
    ],
    "correctAnswer": 2,
    "explanation": "Since dV = 0, work done W = ∫ P dV = 0 J. All supplied heat goes into increasing internal energy: dQ = dU = n C_v dT.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q11",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Easy",
    "questionText": "In an isobaric process (constant pressure), work done by n moles of an ideal gas when temperature changes by ΔT is",
    "options": [
      "n R ΔT",
      "P ΔV",
      "n C_p ΔT",
      "Both (A) and (B)"
    ],
    "correctAnswer": 3,
    "explanation": "W = P ΔV = n R ΔT.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q12",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Medium",
    "questionText": "For a cyclic process represented by a closed loop on a P-V diagram, net work done during one cycle is equal to",
    "options": [
      "Zero",
      "Area enclosed by the P-V cycle",
      "Perimeter of the cycle",
      "Internal energy change"
    ],
    "correctAnswer": 1,
    "explanation": "Work done in a closed cycle is geometrically equal to the area enclosed by the cycle on the P-V indicator diagram (positive if clockwise, negative if counter-clockwise).",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q13",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Hard",
    "questionText": "For any cyclic process, the change in internal energy ΔU over one complete cycle is",
    "options": [
      "Positive",
      "Negative",
      "Zero",
      "Equal to net heat absorbed"
    ],
    "correctAnswer": 2,
    "explanation": "Internal energy U is a state function. Returning to the initial thermodynamic state implies ΔU_cycle = 0.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q14",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Medium",
    "questionText": "The coefficient of performance (COP) β of an ideal Carnot refrigerator operating between T₁ (room) and T₂ (inside) is",
    "options": [
      "T₂ / (T₁ - T₂)",
      "T₁ / (T₁ - T₂)",
      "(T₁ - T₂) / T₂",
      "1 - T₂ / T₁"
    ],
    "correctAnswer": 0,
    "explanation": "COP β = Q₂ / W = Q₂ / (Q₁ - Q₂) = T₂ / (T₁ - T₂).",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q15",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Easy",
    "questionText": "A refrigerator has COP β = 5. If it extracts 250 J of heat from cold reservoir, mechanical work input required is",
    "options": [
      "25 J",
      "50 J",
      "100 J",
      "1250 J"
    ],
    "correctAnswer": 1,
    "explanation": "β = Q₂ / W => 5 = 250 / W => W = 250 / 5 = 50 J.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q16",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Medium",
    "questionText": "The second law of thermodynamics (Kelvin-Planck statement) implies that",
    "options": [
      "100% efficient heat engine is impossible",
      "Heat cannot spontaneously flow from colder to hotter body",
      "Entropy of isolated system never decreases",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "All statements represent equivalent, universal formulations of the Second Law of Thermodynamics.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q17",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Hard",
    "questionText": "During a free expansion of an ideal gas into an insulated evacuated chamber (Joule expansion)",
    "options": [
      "W = 0, Q = 0, ΔU = 0, ΔT = 0",
      "W > 0, Q = 0",
      "W = 0, Q > 0",
      "ΔT < 0"
    ],
    "correctAnswer": 0,
    "explanation": "Expansion against vacuum means external pressure P_ext = 0 => W = 0. Insulated walls => Q = 0. Hence ΔU = 0 and temperature remains unchanged (ΔT = 0) for ideal gas.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q18",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Medium",
    "questionText": "A gas expands adiabatically such that its temperature falls. The work done by the gas is at the expense of its",
    "options": [
      "Kinetic energy of container",
      "Internal energy",
      "External heat source",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "dQ = 0 => dW = -dU. Work done by expanding gas is drawn directly from its internal energy store.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q19",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Easy",
    "questionText": "An ideal gas is compressed to half its initial volume. In which process is maximum work done ON the gas?",
    "options": [
      "Isothermal",
      "Adiabatic",
      "Isobaric",
      "Same in all"
    ],
    "correctAnswer": 1,
    "explanation": "The adiabatic P-V curve lies strictly above the isothermal and isobaric curves during compression, enclosing maximum area under the curve: W_adiabatic > W_isothermal > W_isobaric.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q20",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Medium",
    "questionText": "The internal energy of an ideal gas depends only on its",
    "options": [
      "Pressure",
      "Volume",
      "Temperature",
      "Density"
    ],
    "correctAnswer": 2,
    "explanation": "Joule's law states that the internal energy of an ideal gas is purely a function of absolute temperature: U = U(T).",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q21",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Hard",
    "questionText": "For a reversible process, the total change in entropy of universe (system + surroundings) is",
    "options": [
      "Positive",
      "Negative",
      "Zero",
      "Infinite"
    ],
    "correctAnswer": 2,
    "explanation": "In a completely reversible process, ΔS_universe = ΔS_system + ΔS_surroundings = 0.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q22",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Medium",
    "questionText": "For any real irreversible spontaneous process, the entropy of the universe",
    "options": [
      "Decreases",
      "Remains constant",
      "Strictly increases (ΔS_univ > 0)",
      "Becomes zero"
    ],
    "correctAnswer": 2,
    "explanation": "Clausius statement of second law: all spontaneous irreversible natural processes increase the net entropy of the universe.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q23",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Easy",
    "questionText": "If 1 mole of an ideal gas expands isothermally at 300 K to 4 times its initial volume, work done is (R = 8.314 J/mol·K, ln 4 = 1.386)",
    "options": [
      "1728 J",
      "3457 J",
      "5185 J",
      "6914 J"
    ],
    "correctAnswer": 1,
    "explanation": "W = n R T ln(V₂/V₁) = 1 × 8.314 × 300 × ln 4 = 2494.2 × 1.386 ≈ 3457 J.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q24",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Medium",
    "questionText": "A monoatomic gas (γ = 5/3) is suddenly compressed to 1/8 th of its initial volume adiabatically. If initial temperature is T, final temperature is",
    "options": [
      "2 T",
      "4 T",
      "8 T",
      "16 T"
    ],
    "correctAnswer": 1,
    "explanation": "T V^(γ-1) = const => T₂ = T₁ (V₁ / V₂)^(γ-1) = T (8)^(5/3 - 1) = T (8)^(2/3) = T (2³)^(2/3) = T (2²) = 4 T.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q25",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Hard",
    "questionText": "In an adiabatic expansion of a diatomic gas (γ = 1.4), volume increases by 32 times. If initial pressure is P, final pressure is",
    "options": [
      "P / 32",
      "P / 64",
      "P / 128",
      "P / 256"
    ],
    "correctAnswer": 2,
    "explanation": "P₁ V₁^γ = P₂ V₂^γ => P₂ = P (V₁ / V₂)^1.4 = P (1/32)^1.4 = P (2⁻⁵)^(7/5) = P (2⁻⁷) = P / 128.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q26",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Medium",
    "questionText": "The indicator diagram of a Carnot cycle consists of",
    "options": [
      "Two isothermals and two adiabatics",
      "Two isobars and two isochores",
      "Two isothermals and two isobars",
      "Two isochores and two adiabatics"
    ],
    "correctAnswer": 0,
    "explanation": "Carnot cycle comprises 4 reversible processes: 1) Isothermal expansion, 2) Adiabatic expansion, 3) Isothermal compression, 4) Adiabatic compression.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q27",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Easy",
    "questionText": "A heat engine rejects 600 J of heat while performing 400 J of useful mechanical work. The heat absorbed from source is",
    "options": [
      "200 J",
      "400 J",
      "600 J",
      "1000 J"
    ],
    "correctAnswer": 3,
    "explanation": "By energy conservation: Q₁ = W + Q₂ = 400 + 600 = 1000 J.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q28",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Medium",
    "questionText": "The efficiency of the above heat engine is",
    "options": [
      "40%",
      "60%",
      "66.7%",
      "25%"
    ],
    "correctAnswer": 0,
    "explanation": "η = W / Q₁ = 400 / 1000 = 0.40 = 40%.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q29",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Hard",
    "questionText": "If the temperature of the sink of a Carnot engine is decreased while keeping source temperature constant, its efficiency",
    "options": [
      "Increases",
      "Decreases",
      "Remains constant",
      "Becomes 100%"
    ],
    "correctAnswer": 0,
    "explanation": "η = 1 - T₂ / T₁. Decreasing sink temperature T₂ lowers the rejected fraction, strictly increasing thermal efficiency.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q30",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Medium",
    "questionText": "Can a domestic refrigerator be used to cool a closed room by leaving its door open?",
    "options": [
      "Yes, it cools room effectively",
      "No, the room will gradually become warmer",
      "Room temperature remains unaffected",
      "Cools for 1 hour then warms"
    ],
    "correctAnswer": 1,
    "explanation": "The refrigerator releases heat Q₁ = Q₂ + W into the room. Since work input W from the electric motor is dissipated as heat, net heat delivered to room exceeds heat absorbed, warming the room.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q31",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Easy",
    "questionText": "In an isobaric expansion of a monoatomic gas (γ = 5/3), the fraction of heat absorbed that goes into increasing internal energy (ΔU / Q) is",
    "options": [
      "3/5 (60%)",
      "2/5 (40%)",
      "1/2 (50%)",
      "3/8"
    ],
    "correctAnswer": 0,
    "explanation": "ΔU / Q = (n C_v ΔT) / (n C_p ΔT) = C_v / C_p = 1 / γ = 1 / (5/3) = 3/5 = 60%.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q32",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Medium",
    "questionText": "In the above isobaric process for a monoatomic gas, the fraction of heat converted into work (W / Q) is",
    "options": [
      "3/5 (60%)",
      "2/5 (40%)",
      "1/5 (20%)",
      "1/2 (50%)"
    ],
    "correctAnswer": 1,
    "explanation": "W / Q = 1 - ΔU/Q = 1 - 3/5 = 2/5 = 40% (or W/Q = (C_p - C_v)/C_p = 1 - 1/γ = 2/5).",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q33",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Hard",
    "questionText": "A thermodynamic process in which no heat enters or leaves the system is called",
    "options": [
      "Isothermal",
      "Isobaric",
      "Isochoric",
      "Adiabatic"
    ],
    "correctAnswer": 3,
    "explanation": "By definition, adiabatic means dQ = 0.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q34",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Medium",
    "questionText": "The change in entropy dS during a reversible process at temperature T is given by",
    "options": [
      "dQ / T",
      "T dQ",
      "dW / T",
      "dU / T"
    ],
    "correctAnswer": 0,
    "explanation": "Clausius definition of entropy: dS = dQ_rev / T.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q35",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Easy",
    "questionText": "When 10 g of ice at 0 °C melts into water at 0 °C, the change in entropy is (L_f = 80 cal/g, 1 cal = 4.184 J)",
    "options": [
      "2.93 J/K",
      "12.26 J/K",
      "80.0 J/K",
      "3340 J/K"
    ],
    "correctAnswer": 1,
    "explanation": "Q = m L_f = 10 × 80 = 800 cal = 800 × 4.184 = 3347.2 J. T = 273.15 K. ΔS = 3347.2 / 273.15 ≈ 12.25 J/K.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q36",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Medium",
    "questionText": "During an adiabatic compression of an ideal gas, the product PV",
    "options": [
      "Increases",
      "Decreases",
      "Remains constant",
      "Becomes zero"
    ],
    "correctAnswer": 0,
    "explanation": "P V = n R T. In adiabatic compression, temperature rises (T increases), so the product PV strictly increases.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q37",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Hard",
    "questionText": "Two cylinders A and B fitted with pistons contain equal amounts of an ideal monoatomic gas at same temperature. Gas in A is expanded isothermally and in B adiabatically to double the volume. Ratio of final pressures P_A / P_B is",
    "options": [
      "2^(2/3) ≈ 1.59",
      "2^(1/3)",
      "2",
      "2^(5/3)"
    ],
    "correctAnswer": 0,
    "explanation": "P_A = P₀(1/2) = P₀/2. P_B = P₀(1/2)^(5/3) = P₀ / 2^(5/3). P_A / P_B = (P₀/2) / [P₀/2^(5/3)] = 2^(5/3 - 1) = 2^(2/3) ≈ 1.587.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q38",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Medium",
    "questionText": "The area of a Carnot cycle on a T-S (Temperature - Entropy) diagram represents",
    "options": [
      "Net heat absorbed (Net work done)",
      "Zero",
      "Internal energy",
      "Enthalpy"
    ],
    "correctAnswer": 0,
    "explanation": "On T-S diagram W_net = ∮ T dS, which equals the area enclosed by the rectangular Carnot cycle.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q39",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Easy",
    "questionText": "A Carnot engine has efficiency 50% when sink is at 300 K. To increase efficiency to 60%, source temperature must be increased by",
    "options": [
      "100 K",
      "150 K",
      "200 K",
      "300 K"
    ],
    "correctAnswer": 1,
    "explanation": "Initial: 0.50 = 1 - 300/T₁ => 300/T₁ = 0.50 => T₁ = 600 K. New: 0.60 = 1 - 300/T₁' => 300/T₁' = 0.40 => T₁' = 300 / 0.40 = 750 K. Increase = 750 - 600 = 150 K.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q40",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Medium",
    "questionText": "An ideal gas heat engine operates in a Carnot cycle between 227 °C and 127 °C. It absorbs 6 × 10⁴ cal at higher temperature. Amount of heat converted to work is",
    "options": [
      "1.2 × 10⁴ cal",
      "2.4 × 10⁴ cal",
      "4.8 × 10⁴ cal",
      "6.0 × 10⁴ cal"
    ],
    "correctAnswer": 0,
    "explanation": "T₁ = 500 K, T₂ = 400 K. η = 1 - 400/500 = 0.20. W = 0.20 × (6 × 10⁴ cal) = 1.2 × 10⁴ cal.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q41",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Hard",
    "questionText": "A sample of gas expands from V₁ to V₂. The work done is greatest when the expansion is",
    "options": [
      "Isobaric",
      "Isothermal",
      "Adiabatic",
      "Isochoric"
    ],
    "correctAnswer": 0,
    "explanation": "In isobaric expansion, pressure remains constant at its maximum initial value P₁, maximizing the area under the P-V curve: W_isobaric = P₁(V₂ - V₁) > W_isothermal > W_adiabatic.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q42",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Medium",
    "questionText": "A quasi-static process is one that is",
    "options": [
      "Infinitely slow and passes through continuous equilibrium states",
      "Very rapid",
      "Irreversible",
      "Non-equilibrium"
    ],
    "correctAnswer": 0,
    "explanation": "A quasi-static process occurs infinitely slowly such that the system remains in thermodynamic equilibrium with its environment at every intermediate stage.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q43",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Easy",
    "questionText": "Which of the following thermodynamic variables is an extensive property?",
    "options": [
      "Temperature",
      "Pressure",
      "Density",
      "Internal energy (U)"
    ],
    "correctAnswer": 3,
    "explanation": "Extensive properties depend on system mass/size (Internal energy, Volume, Enthalpy, Entropy). Temperature, pressure, and density are intensive.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q44",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Medium",
    "questionText": "The ratio of slopes of adiabatic and isothermal curves for a triatomic non-linear gas (f = 6, γ = 4/3) is",
    "options": [
      "1.33 (4/3)",
      "1.40 (7/5)",
      "1.67 (5/3)",
      "1.50"
    ],
    "correctAnswer": 0,
    "explanation": "Slope ratio = γ = (f + 2)/f = 8/6 = 4/3 ≈ 1.33.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  },
  {
    "id": "thd-q45",
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics (Physics)",
    "difficulty": "Hard",
    "questionText": "The absolute zero temperature (0 K) is unattainable in a finite number of steps. This is a consequence of",
    "options": [
      "Zeroth law of thermodynamics",
      "First law of thermodynamics",
      "Third law of thermodynamics (Nernst heat theorem)",
      "Conservation of momentum"
    ],
    "correctAnswer": 2,
    "explanation": "The Third Law of Thermodynamics states that as temperature approaches absolute zero, the entropy of a perfect crystal approaches zero, rendering 0 K unattainable in finite operations.",
    "tags": [
      "Thermodynamics",
      "Thermodynamics (Physics)"
    ]
  }
];

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
