import { Question } from '../types';

export const NCERT_CURRENT_ELECTRICITY_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch18-01",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Electric Current Definition",
    "difficulty": "Easy",
    "questionText": "A conductor carries a steady current of 1 A. In one second, the charge that flows through any cross-section of the conductor is:",
    "options": [
      "2 coulomb",
      "3 coulomb",
      "1 coulomb",
      "0.5 coulomb"
    ],
    "correctAnswer": 2,
    "explanation": "Electric current is defined as I = Q / t. Therefore, Q = I · t = (1 A) × (1 s) = 1 coulomb.",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Electric Current"]
  },
  {
    "id": "ncert-phy-ch18-02",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Microscopic Form of Ohm's Law",
    "difficulty": "Easy",
    "questionText": "The correct vector relation between current density J⃗ and electric field E⃗ in a conductor is (where σ is conductivity and ρ is resistivity):",
    "options": [
      "J⃗ = ρ E⃗",
      "J⃗ = σ E⃗",
      "E⃗ = σ² J⃗",
      "E⃗ = R J⃗"
    ],
    "correctAnswer": 1,
    "explanation": "The microscopic (differential) form of Ohm's law relates current density J⃗ to the electric field E⃗ via conductivity σ as: J⃗ = σ E⃗ (or equivalently E⃗ = ρ J⃗).",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Ohm's Law"]
  },
  {
    "id": "ncert-phy-ch18-03",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "V-I Characteristic & Temperature of Metal",
    "difficulty": "Medium",
    "questionText": "The voltage-current (V-I) characteristics of a metallic conductor are plotted at two different temperatures T₁ and T₂. If the linear graph for T₁ has a larger slope (dV/dI) than that for T₂, then:",
    "options": [
      "T₁ > T₂",
      "T₂ > T₁",
      "T₁ = T₂",
      "Data is insufficient"
    ],
    "correctAnswer": 0,
    "explanation": "The slope of the V versus I graph represents the electrical resistance of the conductor (R = V/I). Since the resistance of a metallic conductor increases with increasing temperature (R ∝ T), the higher resistance at T₁ implies T₁ > T₂.",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Temperature Dependence of Resistance"]
  },
  {
    "id": "ncert-phy-ch18-04",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Instantaneous Current from Charge Function",
    "difficulty": "Easy",
    "questionText": "Charge passing through a cross-section of a conductor varies with time as Q(t) = (t⁵ + 2t) C. The instantaneous electric current through the conductor at t = 1 s is:",
    "options": [
      "2 A",
      "5 A",
      "7 A",
      "10 A"
    ],
    "correctAnswer": 2,
    "explanation": "Instantaneous current is the time derivative of charge: I(t) = dQ/dt = d/dt (t⁵ + 2t) = 5t⁴ + 2.\nAt t = 1 s, I(1) = 5(1)⁴ + 2 = 7 A.",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Electric Current"]
  },
  {
    "id": "ncert-phy-ch18-05",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Temperature Dependence of Resistivity",
    "difficulty": "Easy",
    "questionText": "For a metallic conductor, if ρ_T is the resistivity at temperature T and ρ₀ is the resistivity at reference temperature T₀, then ρ_T is given by (where α is temperature coefficient of resistivity):",
    "options": [
      "ρ_T = ρ₀ [1 - α(T - T₀)]",
      "ρ_T = ρ₀ [1 + α(T + T₀)]",
      "ρ_T = ρ₀ [1 - α(T₀ + T)]",
      "ρ_T = ρ₀ [1 + α(T - T₀)]"
    ],
    "correctAnswer": 3,
    "explanation": "The fractional change in resistivity over a temperature interval ΔT = (T - T₀) is given by ρ_T = ρ₀ [1 + α(T - T₀)].",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Resistivity"]
  },
  {
    "id": "ncert-phy-ch18-06",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Resistance Change upon Wire Stretching",
    "difficulty": "Easy",
    "questionText": "If the length of a cylindrical wire is stretched by 0.2%, then the percentage increment in its electrical resistance is:",
    "options": [
      "0.2%",
      "0.1%",
      "0.4%",
      "0.3%"
    ],
    "correctAnswer": 2,
    "explanation": "During stretching, volume V = A · L remains constant (A ∝ 1/L). Resistance R = ρ L / A = ρ L² / V, so R ∝ L².\nFor small fractional changes: ΔR / R = 2 (ΔL / L) = 2 × (0.2%) = 0.4%.",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Resistance"]
  },
  {
    "id": "ncert-phy-ch18-07",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Series Thermal Power Dissipation Ratio",
    "difficulty": "Easy",
    "questionText": "Two resistors of resistances 2 Ω and 4 Ω are connected in series across an electric circuit. The ratio of thermal power dissipated in each resistance (P₁ : P₂) is:",
    "options": [
      "1 : 2",
      "2 : 1",
      "4 : 1",
      "1 : 4"
    ],
    "correctAnswer": 0,
    "explanation": "In a series combination, the electric current I passing through both resistors is identical. Power dissipated is P = I² R. Hence, P₁ / P₂ = R₁ / R₂ = 2 / 4 = 1 : 2.",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Electrical Power"]
  },
  {
    "id": "ncert-phy-ch18-08",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Resistance Ratio from Power Ratings",
    "difficulty": "Easy",
    "questionText": "If R₁ and R₂ are the resistances of two electric bulbs rated 50 W and 100 W respectively, designed to operate at the same supply voltage, then the ratio R₁ / R₂ is:",
    "options": [
      "2 : 3",
      "2 : 1",
      "1 : 2",
      "1 : 1"
    ],
    "correctAnswer": 1,
    "explanation": "Rated power is P = V² / R. For the same voltage V, resistance is inversely proportional to rated power: R ∝ 1/P.\nR₁ / R₂ = P₂ / P₁ = 100 / 50 = 2 : 1.",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Electrical Power"]
  },
  {
    "id": "ncert-phy-ch18-09",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Negative Temperature Coefficient of Resistance",
    "difficulty": "Easy",
    "questionText": "Which of the following materials possesses a negative temperature coefficient of resistance (α < 0)?",
    "options": [
      "Copper",
      "Silver",
      "Gold",
      "Germanium"
    ],
    "correctAnswer": 3,
    "explanation": "Metals (Cu, Ag, Au) have positive temperature coefficients of resistance (resistance increases with temperature). Semiconductors like Germanium and Silicon have negative temperature coefficients because thermally generated free carriers increase exponentially with temperature, lowering resistivity.",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Semiconductor Physics"]
  },
  {
    "id": "ncert-phy-ch18-10",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Microscopic Expression for Resistivity",
    "difficulty": "Easy",
    "questionText": "The relaxation time (τ), number density of free electrons (n), electronic charge (e), and mass of electron (m) determine the electrical resistivity (ρ) of a conductor according to:",
    "options": [
      "ρ = m / (n e² τ)",
      "ρ = n / (m e τ)",
      "ρ = e² τ / (n m)",
      "ρ = n e² τ / m"
    ],
    "correctAnswer": 0,
    "explanation": "From the electron gas model, drift velocity v_d = (e E τ) / m. Current density J = n e v_d = (n e² τ / m) E. Conductivity σ = n e² τ / m, and resistivity ρ = 1 / σ = m / (n e² τ).",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Drift Velocity"]
  },
  {
    "id": "ncert-phy-ch18-11",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Current and Drift Velocity Relation",
    "difficulty": "Easy",
    "questionText": "The relationship between electric current I and drift speed v_d of conduction electrons in a wire of cross-sectional area A and electron density n is:",
    "options": [
      "I = n e A v_d",
      "I = v_d / (n e A)",
      "I = n e / (A v_d)",
      "I = n e v_d / A"
    ],
    "correctAnswer": 0,
    "explanation": "In time dt, electrons drift a distance dx = v_d dt. Charge passing through area A is dQ = n e A dx = n e A v_d dt. Current I = dQ/dt = n e A v_d.",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Drift Velocity"]
  },
  {
    "id": "ncert-phy-ch18-12",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Direction of Electron Drift Velocity",
    "difficulty": "Easy",
    "questionText": "The direction of the drift velocity of free electrons inside a current-carrying conducting wire is:",
    "options": [
      "Opposite to the direction of the electric field",
      "In the direction of the electric field",
      "Perpendicular to the direction of the electric field",
      "At an acute angle with the direction of the electric field"
    ],
    "correctAnswer": 0,
    "explanation": "Electrons carry negative charge (q = -e), so the electrostatic force F⃗ = -e E⃗ acts in the direction opposite to the electric field. Hence, the net drift velocity is opposite to E⃗.",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Drift Velocity"]
  },
  {
    "id": "ncert-phy-ch18-13",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Electron Motion Between Collisions Without Field",
    "difficulty": "Easy",
    "questionText": "In the absence of an applied electric field, the trajectory of a free electron inside a metal conductor between two consecutive collisions is:",
    "options": [
      "Hyperbolic",
      "Straight line",
      "Parabolic",
      "Elliptical"
    ],
    "correctAnswer": 1,
    "explanation": "In the absence of an electric field, no net force acts on the free electrons between collisions. By Newton's first law, they move with constant velocity in a straight line between collisions.",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Drift Velocity"]
  },
  {
    "id": "ncert-phy-ch18-14",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Meter Bridge Balancing Length",
    "difficulty": "Medium",
    "questionText": "In a meter-bridge circuit, a resistance of 20 Ω is connected in the left gap and 30 Ω in the right gap. The length AB from the left end for null deflection in the galvanometer is:",
    "options": [
      "30 cm",
      "40 cm",
      "50 cm",
      "70 cm"
    ],
    "correctAnswer": 1,
    "explanation": "From the Wheatstone bridge condition on the meter bridge:\nR₁ / R₂ = l / (100 - l)\n20 / 30 = l / (100 - l) => 2(100 - l) = 3l => 200 - 2l = 3l => 5l = 200 => l = 40 cm.",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Meter Bridge"]
  },
  {
    "id": "ncert-phy-ch18-15",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Balanced Wheatstone Bridge Resistance",
    "difficulty": "Medium",
    "questionText": "In a bridge network, the four arms have resistances 2 Ω, 4 Ω, 4 Ω, and 8 Ω arranged consecutively, with a 2 Ω resistor connected across the central galvanometer arm. The equivalent resistance across the supply terminals is:",
    "options": [
      "4 Ω",
      "6 Ω",
      "8 Ω",
      "10 Ω"
    ],
    "correctAnswer": 0,
    "explanation": "The ratio of opposite arms is 2 / 4 = 4 / 8 = 1/2. Thus the bridge is balanced and no current flows through the central 2 Ω resistor.\nThe top branch has series resistance 2 + 4 = 6 Ω.\nThe bottom branch has series resistance 4 + 8 = 12 Ω.\nEquivalent resistance R_eq = (6 × 12) / (6 + 12) = 72 / 18 = 4 Ω.",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Wheatstone Bridge"]
  },
  {
    "id": "ncert-phy-ch18-16",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Interchange of Galvanometer and Cell in Meter Bridge",
    "difficulty": "Medium",
    "questionText": "A metre bridge is in balanced position with P / Q = l₁ / l₂. If we now interchange the positions of the galvanometer and the cell, will the bridge work, and what will be the balance condition? [NEET-2019 (Odisha)]",
    "options": [
      "Yes, P / Q = l₁ / l₂",
      "Yes, P / Q = (l₂ - l₁) / (l₂ + l₁)",
      "No, no null point",
      "Yes, P / Q = l₂ / l₁"
    ],
    "correctAnswer": 0,
    "explanation": "According to the principle of conjugate arms of a Wheatstone bridge, interchanging the battery and the galvanometer does not affect the balance condition. The bridge continues to work and gives the exact same balance ratio: P / Q = l₁ / l₂.",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Meter Bridge", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch18-17",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Power Ratio of Bulb Network",
    "difficulty": "Hard",
    "questionText": "Six similar bulbs are connected to a DC source of emf E and zero internal resistance. Section A has three bulbs in parallel, and Section B has three bulbs in parallel, connected in series with each other. The ratio of power consumption when (i) all 6 are glowing and (ii) two bulbs from section A and one from section B are glowing, will be: [NEET-2019]",
    "options": [
      "4 : 9",
      "9 : 4",
      "1 : 2",
      "2 : 1"
    ],
    "correctAnswer": 1,
    "explanation": "Let each bulb have resistance R.\nCase (i): Section A has 3 in parallel (R/3), section B has 3 in parallel (R/3).\nTotal resistance R₁ = R/3 + R/3 = 2R/3.\nPower P₁ = E² / R₁ = E² / (2R/3) = (3/2) (E² / R).\nCase (ii): Section A has 2 in parallel (R/2), section B has 1 bulb (R).\nTotal resistance R₂ = R/2 + R = 3R/2.\nPower P₂ = E² / R₂ = E² / (3R/2) = (2/3) (E² / R).\nRatio P₁ : P₂ = (3/2) / (2/3) = 9 : 4.",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Electrical Power", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch18-18",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Circuit Protection Device",
    "difficulty": "Easy",
    "questionText": "Which of the following components acts as a circuit protection device against excessive currents? [NEET-2019]",
    "options": [
      "Conductor",
      "Inductor",
      "Switch",
      "Fuse"
    ],
    "correctAnswer": 3,
    "explanation": "A fuse is a safety circuit protection device with a low melting point wire that melts (melts open) when excessive current passes through it due to Joule heating, interrupting the circuit.",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Domestic Circuits", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch18-19",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Ideal Voltmeter and Ammeter Readings in Circuits",
    "difficulty": "Medium",
    "questionText": "In Circuit 1, a 10 V battery is connected to a 10 Ω resistor in series with an ideal ammeter A₁, and an ideal voltmeter V₁ is connected across the resistor. In Circuit 2, a 10 V battery is connected across a 10 Ω resistor, and another identical 10 Ω branch with voltmeter V₂ and ammeter A₂ is connected. Assuming ideal instruments, the readings satisfy: [NEET-2019]",
    "options": [
      "V₂ > V₁ and i₁ = i₂",
      "V₁ = V₂ and i₁ > i₂",
      "V₁ = V₂ and i₁ = i₂",
      "V₂ > V₁ and i₁ > i₂"
    ],
    "correctAnswer": 2,
    "explanation": "An ideal voltmeter has infinite resistance and draws zero current. An ideal ammeter has zero resistance. In both circuits, the voltage drop across the 10 Ω resistor connected to the 10 V source is exactly 10 V (V₁ = V₂ = 10 V), and the current measured by the ammeters is 10 V / 10 Ω = 1.0 A (i₁ = i₂ = 1.0 A).",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Measuring Instruments", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch18-20",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Resistor Colour Code Determination",
    "difficulty": "Easy",
    "questionText": "A carbon resistor of resistance (47 ± 4.7) kΩ is to be marked with coloured rings for its identification. The colour code sequence will be: [NEET-2018]",
    "options": [
      "Violet - Yellow - Orange - Silver",
      "Yellow - Violet - Orange - Silver",
      "Green - Orange - Violet - Gold",
      "Yellow - Green - Violet - Gold"
    ],
    "correctAnswer": 1,
    "explanation": "R = 47 kΩ ± 10% = 47 × 10³ Ω ± 10%.\nFirst digit 4 = Yellow\nSecond digit 7 = Violet\nMultiplier 10³ = Orange\nTolerance ±10% = Silver\nSequence: Yellow - Violet - Orange - Silver.",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Colour Code", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch18-21",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Ratio of Currents in Series vs Parallel of n Resistors",
    "difficulty": "Medium",
    "questionText": "A set of n equal resistors, each of value R, are connected in series to a battery of emf E and internal resistance R. The current drawn is I. When the n resistors are now connected in parallel to the same battery, the current drawn becomes 10 I. The value of n is: [NEET-2018]",
    "options": [
      "10",
      "11",
      "9",
      "20"
    ],
    "correctAnswer": 0,
    "explanation": "In series: R_net = nR + R = (n + 1)R => I = E / ((n + 1)R).\nIn parallel: R_net = R/n + R = R(1 + 1/n) = R(n + 1)/n => I' = nE / ((n + 1)R) = n I.\nGiven I' = 10 I, hence n = 10.",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Combination of Resistors", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch18-22",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Short-Circuit Current of n Series Cells",
    "difficulty": "Medium",
    "questionText": "A battery consists of a variable number n of identical cells (each of emf E and internal resistance r) connected in series. The terminals of the battery are short-circuited and the current I is measured as a function of n. The current I:",
    "options": [
      "Remains constant independent of n",
      "Increases linearly with n",
      "Decreases inversely with n",
      "Increases quadratically with n"
    ],
    "correctAnswer": 0,
    "explanation": "Total emf of n series cells = nE. Total internal resistance = nr.\nShort-circuit current I = (nE) / (nr) = E / r, which is completely independent of the number of cells n. The graph of I versus n is a horizontal straight line.",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Cells in Series", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch18-23",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Wire Recasting and Resistance Scaling",
    "difficulty": "Easy",
    "questionText": "A uniform wire of resistance R is melted and recast into a wire of length triple (3 times) its original length. The new resistance of the wire will be:",
    "options": [
      "3 R",
      "6 R",
      "9 R",
      "R / 3"
    ],
    "correctAnswer": 2,
    "explanation": "When volume is conserved during recasting, area A' = A / 3 when L' = 3L.\nNew resistance R' = ρ L' / A' = ρ (3L) / (A / 3) = 9 (ρ L / A) = 9 R.",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Resistance"]
  },
  {
    "id": "ncert-phy-ch18-24",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Potential Difference Across a Circuit Branch",
    "difficulty": "Medium",
    "questionText": "In a branch AB of a circuit, current I = 2 A flows from A to B through a 2 Ω resistor, followed by a 3 V battery with its positive plate first, followed by a 1 Ω resistor. The potential difference (V_A - V_B) is: [NEET (Phase-2) 2016]",
    "options": [
      "-3 V",
      "+3 V",
      "+6 V",
      "+9 V"
    ],
    "correctAnswer": 3,
    "explanation": "Applying Kirchhoff's loop rule moving from A to B:\nV_A - I(2 Ω) - 3 V - I(1 Ω) = V_B\nV_A - 2(2) - 3 - 2(1) = V_B\nV_A - 4 - 3 - 2 = V_B => V_A - V_B = 9 V.",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Kirchhoff's Rules", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch18-25",
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "Series Dropping Resistor for Filament Bulb",
    "difficulty": "Medium",
    "questionText": "A filament bulb rated (500 W, 100 V) is to be used in a 230 V main supply. To operate the bulb at its rated power of 500 W, the series resistance R required is: [NEET (Phase-2) 2016]",
    "options": [
      "230 Ω",
      "46 Ω",
      "26 Ω",
      "13 Ω"
    ],
    "correctAnswer": 2,
    "explanation": "Rated current of bulb: I = P / V = 500 W / 100 V = 5 A.\nBulb requires 100 V, so the voltage dropped across resistor R must be V_R = 230 V - 100 V = 130 V.\nSince the current through the series circuit is 5 A: R = V_R / I = 130 V / 5 A = 26 Ω.",
    "tags": ["NCERT NEET Physics", "Current Electricity", "Electrical Power", "NEET PYQ"]
  }
];
