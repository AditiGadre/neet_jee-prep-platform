import { Question } from "../types";

export const EMI_QUESTIONS: Question[] = [
  {
    "id": "emi-q1",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Hard",
    "questionText": "Faraday's law of electromagnetic induction states that the induced EMF in a coil is proportional to",
    "options": [
      "Rate of change of magnetic flux (dΦ/dt)",
      "Magnetic flux Φ",
      "Area of the coil",
      "Current in the coil"
    ],
    "correctAnswer": 0,
    "explanation": "Faraday's second law: ε = -N (dΦ/dt). The magnitude of induced EMF is directly proportional to the time rate of change of magnetic flux.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q2",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Medium",
    "questionText": "Lenz's law is a direct consequence of the law of conservation of",
    "options": [
      "Energy",
      "Charge",
      "Momentum",
      "Mass"
    ],
    "correctAnswer": 0,
    "explanation": "Lenz's law states that induced current opposes the change producing it; the external mechanical work done against this opposition is converted into electrical energy.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q3",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Easy",
    "questionText": "The SI unit of magnetic flux Φ is",
    "options": [
      "Weber (Wb or T·m²)",
      "Tesla",
      "Henry",
      "Gauss"
    ],
    "correctAnswer": 0,
    "explanation": "Φ = B · A => [Φ] = Tesla · m² = Weber (Wb) = Volt · second (V·s).",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q4",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Medium",
    "questionText": "The SI unit of self-inductance and mutual inductance is",
    "options": [
      "Henry (H or Wb/A)",
      "Weber",
      "Tesla",
      "Farad"
    ],
    "correctAnswer": 0,
    "explanation": "L = N Φ / I => [L] = Wb / A = V·s / A = Henry (H).",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q5",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Hard",
    "questionText": "The self-induced EMF in an inductor of inductance L carrying time-varying current I(t) is",
    "options": [
      "-L (dI / dt)",
      "+L (dI / dt)",
      "-L I",
      "-(1/2) L I²"
    ],
    "correctAnswer": 0,
    "explanation": "Self-induced back EMF ε = -L (dI / dt).",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q6",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Medium",
    "questionText": "The energy stored in an inductor of inductance L carrying steady current I is",
    "options": [
      "(1/2) L I²",
      "L I²",
      "(1/2) L / I²",
      "L I"
    ],
    "correctAnswer": 0,
    "explanation": "U_B = (1/2) L I² (stored in the magnetic field of the inductor).",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q7",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Easy",
    "questionText": "Magnetic energy density (energy per unit volume) in a magnetic field B in vacuum is",
    "options": [
      "B² / (2μ₀)",
      "(1/2) μ₀ B²",
      "B / (2μ₀)",
      "B² μ₀"
    ],
    "correctAnswer": 0,
    "explanation": "u_B = B² / (2μ₀) J/m³.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q8",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Medium",
    "questionText": "A straight conducting rod of length L moves with velocity v perpendicular to uniform magnetic field B. Motional EMF across its ends is",
    "options": [
      "B v L",
      "B v / L",
      "(1/2) B v L",
      "B v L²"
    ],
    "correctAnswer": 0,
    "explanation": "Motional EMF ε = (v × B) · L = B v L.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q9",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Hard",
    "questionText": "If a metallic disc of radius R rotates with angular frequency ω about its axis perpendicular to magnetic field B, the EMF between centre and rim is",
    "options": [
      "(1/2) B ω R²",
      "B ω R²",
      "(1/4) B ω R²",
      "2 B ω R²"
    ],
    "correctAnswer": 0,
    "explanation": "ε = ∫₀^R (v B) dr = ∫₀^R (ω r B) dr = (1/2) B ω R².",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q10",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Medium",
    "questionText": "Self-inductance of a long solenoid of length l, area A, and N total turns is",
    "options": [
      "μ₀ N² A / l",
      "μ₀ N A / l",
      "μ₀ N² A l",
      "μ₀ N A l"
    ],
    "correctAnswer": 0,
    "explanation": "L = μ₀ n² A l = μ₀ (N/l)² A l = μ₀ N² A / l.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q11",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Easy",
    "questionText": "Mutual inductance between two coaxial solenoids of turn densities n₁, n₂ and common core area A of length l is",
    "options": [
      "μ₀ n₁ n₂ A l",
      "μ₀ n₁ n₂ A / l",
      "μ₀ N₁ N₂ / (A l)",
      "μ₀ n₁ n₂ l"
    ],
    "correctAnswer": 0,
    "explanation": "M = μ₀ n₁ n₂ A l.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q12",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Medium",
    "questionText": "Coupling coefficient k between two coils of self-inductances L₁ and L₂ is related to mutual inductance M by",
    "options": [
      "M = k √(L₁ L₂)",
      "M = k (L₁ + L₂)",
      "M = k L₁ L₂",
      "M = k / √(L₁ L₂)"
    ],
    "correctAnswer": 0,
    "explanation": "M = k √(L₁ L₂), where 0 ≤ k ≤ 1 (k = 1 for perfectly coupled coils with 100% magnetic flux linkage).",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q13",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Hard",
    "questionText": "Eddy currents (Foucault currents) are induced in thick metal blocks when placed in changing magnetic fields. Eddy currents are minimized by",
    "options": [
      "Using laminated sheets insulated by varnish",
      "Heating the core",
      "Using solid blocks",
      "Using superconducting wires"
    ],
    "correctAnswer": 0,
    "explanation": "Laminated cores break the broad electrical conduction paths, drastically reducing eddy current loops and Joulean I²R heat dissipation.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q14",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Medium",
    "questionText": "An AC generator works on the principle of electromagnetic induction. The peak induced EMF is",
    "options": [
      "N A B ω",
      "N A B / ω",
      "(1/2) N A B ω",
      "N A B ω²"
    ],
    "correctAnswer": 0,
    "explanation": "Φ(t) = N B A cos(ωt) => ε(t) = -dΦ/dt = N A B ω sin(ωt) => Peak EMF ε₀ = N A B ω.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q15",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Easy",
    "questionText": "In an LR circuit connected to DC source V, the growth of current with time constant τ = L/R is given by",
    "options": [
      "I(t) = (V/R) (1 - e^(-t / τ))",
      "I(t) = (V/R) e^(-t / τ)",
      "I(t) = (V/R) (1 + e^(-t / τ))",
      "I(t) = (V/R) t / τ"
    ],
    "correctAnswer": 0,
    "explanation": "Current growth in inductor: I(t) = I₀ (1 - e^(-t / (L/R))). Inductive time constant τ = L/R.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q16",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Medium",
    "questionText": "The decay of current in an LR circuit after disconnecting the battery is given by",
    "options": [
      "I(t) = I₀ e^(-t / τ)",
      "I(t) = I₀ (1 - e^(-t / τ))",
      "I(t) = I₀ e^(+t / τ)",
      "I(t) = I₀ (1 - t/τ)"
    ],
    "correctAnswer": 0,
    "explanation": "Current decay: I(t) = I₀ e^(-R t / L).",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q17",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Hard",
    "questionText": "The dimension of the inductive time constant L/R is",
    "options": [
      "[T] (Time)",
      "[M L T⁻¹]",
      "[T⁻¹]",
      "Dimensionless"
    ],
    "correctAnswer": 0,
    "explanation": "[L/R] = [Time] = [T] (seconds).",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q18",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Medium",
    "questionText": "A copper ring is held horizontally and a bar magnet is dropped along its vertical axis with North pole pointing downwards. The acceleration of the falling magnet is",
    "options": [
      "Less than g (a < g)",
      "Equal to g",
      "Greater than g (a > g)",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "By Lenz's law, an upward repulsive magnetic force is induced in the copper ring, opposing the magnet's approach and making a < g.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q19",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Easy",
    "questionText": "When the magnet falls through and leaves the ring from below (South pole pointing down), its acceleration is",
    "options": [
      "Less than g (a < g)",
      "Equal to g",
      "Greater than g",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "As the South pole recedes downward, the ring induces a North pole on its lower face to attract and oppose its departure, again exerting an upward force and keeping a < g.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q20",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Medium",
    "questionText": "If a non-magnetic plastic ring is used instead of the copper ring, the acceleration of the falling magnet will be",
    "options": [
      "Equal to g (a = g)",
      "Less than g",
      "Greater than g",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "Plastic is an insulator; no induced eddy current can circulate, so no opposing magnetic force is created (a = g).",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q21",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Hard",
    "questionText": "A coil of 100 turns has a magnetic flux change of 0.05 Wb in 0.1 s. The induced EMF in the coil is",
    "options": [
      "50 V",
      "5 V",
      "500 V",
      "0.5 V"
    ],
    "correctAnswer": 0,
    "explanation": "ε = N (ΔΦ / Δt) = 100 × (0.05 / 0.1) = 100 × 0.5 = 50 V.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q22",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Medium",
    "questionText": "A magnetic field perpendicular to a circular loop of radius 10 cm changes at rate 100 T/s. Induced EMF in the loop is",
    "options": [
      "π V (3.14 V)",
      "0.314 V",
      "31.4 V",
      "100 V"
    ],
    "correctAnswer": 0,
    "explanation": "Area A = π r² = π (0.1)² = 0.01 π m². ε = A (dB/dt) = 0.01 π × 100 = π V ≈ 3.14 V.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q23",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Easy",
    "questionText": "Two concentric coplanar circular loops of radii r and R (r << R) have mutual inductance proportional to",
    "options": [
      "r² / R",
      "r / R²",
      "r / R",
      "r² R"
    ],
    "correctAnswer": 0,
    "explanation": "B_center = μ₀ I / (2R). Flux through inner loop Φ = B (π r²) = (μ₀ π r² / 2R) I => M = μ₀ π r² / (2R) ∝ r² / R.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q24",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Medium",
    "questionText": "When the current in a coil changes from +2 A to -2 A in 0.05 s, an EMF of 8 V is induced. The self-inductance of the coil is",
    "options": [
      "0.1 H",
      "0.2 H",
      "0.4 H",
      "0.8 H"
    ],
    "correctAnswer": 0,
    "explanation": "ΔI = -2 - 2 = -4 A. ε = -L (ΔI / Δt) => 8 = L (4 / 0.05) = 80 L => L = 8 / 80 = 0.1 H = 100 mH.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q25",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Hard",
    "questionText": "The total charge flowing through a circuit of resistance R during a flux change ΔΦ is",
    "options": [
      "ΔΦ / R",
      "R / ΔΦ",
      "ΔΦ · R",
      "(ΔΦ / R) · Δt"
    ],
    "correctAnswer": 0,
    "explanation": "q = ∫ I dt = ∫ (ε/R) dt = (1/R) ∫ (dΦ/dt) dt = ΔΦ / R (independent of time duration of flux change).",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q26",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Medium",
    "questionText": "In an electromagnetic brake used in high-speed trains, braking torque is produced by",
    "options": [
      "Eddy currents induced in the metal rails/wheels",
      "Friction pads only",
      "Air resistance",
      "Gravitational lock"
    ],
    "correctAnswer": 0,
    "explanation": "Electromagnets induce strong eddy currents in the rotating wheel discs, generating an opposing Lorentz drag torque that smoothly arrests motion without mechanical wear.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q27",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Easy",
    "questionText": "Dead-beat (aperiodic) galvanometers use electromagnetic damping by winding the coil on a",
    "options": [
      "Metallic aluminum frame",
      "Non-conducting plastic frame",
      "Wooden block",
      "Glass tube"
    ],
    "correctAnswer": 0,
    "explanation": "Rotation of the metal frame in the magnetic field induces eddy currents that rapidly damp oscillations, bringing the pointer to rest at the true reading instantly.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q28",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Medium",
    "questionText": "Induction furnace utilizes which phenomenon for rapid melting of high-grade metals?",
    "options": [
      "Joule heating by strong induced eddy currents",
      "Direct arc discharge",
      "Chemical combustion",
      "Nuclear fission"
    ],
    "correctAnswer": 0,
    "explanation": "High-frequency AC electromagnetic fields induce massive eddy currents inside the metal charge, melting it rapidly through internal Joulean dissipation.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q29",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Hard",
    "questionText": "A horizontal aeroplane of wingspan 20 m flies at 250 m/s due North in a region where vertical component of Earth's magnetic field is B_V = 4 × 10⁻⁵ T. The EMF induced between wing tips is",
    "options": [
      "0.20 V",
      "0.02 V",
      "2.0 V",
      "0.40 V"
    ],
    "correctAnswer": 0,
    "explanation": "ε = B_V v l = (4 × 10⁻⁵ T) × (250 m/s) × (20 m) = 4 × 10⁻⁵ × 5000 = 0.20 V.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q30",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Medium",
    "questionText": "In the above aeroplane problem, which wing tip is at higher electric potential?",
    "options": [
      "West wing tip",
      "East wing tip",
      "Both at same potential",
      "Fluctuates"
    ],
    "correctAnswer": 0,
    "explanation": "Lorentz force on electrons F = -e (v × B_V). Flying North in downward B_V gives (v × B_V) pointing West, so electrons are pushed to East wing. West wing tip becomes positive (higher potential).",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q31",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Easy",
    "questionText": "A square loop of side 10 cm and resistance 0.5 Ω is placed in a magnetic field increasing at rate 1 T/s. Induced current is",
    "options": [
      "0.02 A (20 mA)",
      "0.1 A",
      "0.2 A",
      "1 A"
    ],
    "correctAnswer": 0,
    "explanation": "Area A = (0.1)² = 0.01 m². ε = A (dB/dt) = 0.01 × 1 = 0.01 V. I = ε / R = 0.01 / 0.5 = 0.02 A = 20 mA.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q32",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Medium",
    "questionText": "Self-inductance is also called the",
    "options": [
      "Inertia of electricity",
      "Capacity of electricity",
      "Resistance of electricity",
      "Conductance"
    ],
    "correctAnswer": 0,
    "explanation": "Inductance opposes changes in electric current (analogous to mechanical mass opposing changes in velocity), earning the title 'electrical inertia'.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q33",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Hard",
    "questionText": "When a switch in an inductive circuit carrying heavy current is suddenly opened, a spark is observed at the switch contacts because",
    "options": [
      "A very large back EMF (-L dI/dt) is induced due to rapid drop of current",
      "Battery voltage spikes",
      "Resistance becomes zero",
      "Capacitance discharges"
    ],
    "correctAnswer": 0,
    "explanation": "The sudden drop dI/dt -> -∞ generates a massive induced voltage across the opening contacts, breaking down the air gap as a spark.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q34",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Medium",
    "questionText": "Two inductors L₁ and L₂ connected in series with no mutual flux linkage have equivalent inductance",
    "options": [
      "L₁ + L₂",
      "L₁ L₂ / (L₁ + L₂)",
      "√(L₁ L₂)",
      "(L₁ + L₂) / 2"
    ],
    "correctAnswer": 0,
    "explanation": "In series: L_eq = L₁ + L₂.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q35",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Easy",
    "questionText": "Two inductors L₁ and L₂ connected in parallel with no mutual flux linkage have equivalent inductance",
    "options": [
      "L₁ L₂ / (L₁ + L₂)",
      "L₁ + L₂",
      "(L₁ + L₂) / 2",
      "√(L₁ L₂)"
    ],
    "correctAnswer": 0,
    "explanation": "1/L_eq = 1/L₁ + 1/L₂ => L_eq = L₁ L₂ / (L₁ + L₂).",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q36",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Medium",
    "questionText": "If two coils are wound over each other on a common soft iron core (k ≈ 1), the mutual inductance is",
    "options": [
      "M = √(L₁ L₂)",
      "M = L₁ + L₂",
      "M = L₁ L₂",
      "M = 0"
    ],
    "correctAnswer": 0,
    "explanation": "For perfect magnetic coupling k = 1: M = √(L₁ L₂).",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q37",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Hard",
    "questionText": "A circular copper coil of radius r is rotated about its diameter in a uniform magnetic field B with angular velocity ω. Average induced EMF over one full rotation is",
    "options": [
      "Zero",
      "B π r² ω",
      "(1/2) B π r² ω",
      "2 B π r² ω"
    ],
    "correctAnswer": 0,
    "explanation": "Induced EMF varies as ε(t) = ε₀ sin(ωt). The average of a sine wave over one complete cycle is strictly Zero.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q38",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Medium",
    "questionText": "The RMS value of the induced EMF in the above rotating coil is",
    "options": [
      "ε₀ / √2 = (B π r² ω) / √2",
      "ε₀",
      "ε₀ / 2",
      "2 ε₀"
    ],
    "correctAnswer": 0,
    "explanation": "ε_rms = ε_peak / √2 = (N B A ω) / √2.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q39",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Easy",
    "questionText": "A magnetic field B = B₀ (1 - t/T) acts on a loop of area A from t = 0 to t = T. Total heat generated in the loop of resistance R is",
    "options": [
      "B₀² A² / (R T)",
      "B₀² A² T / R",
      "B₀ A / (R T)",
      "B₀² A / R"
    ],
    "correctAnswer": 0,
    "explanation": "ε = -dΦ/dt = -A (-B₀/T) = B₀ A / T (constant). Power P = ε² / R = B₀² A² / (R T²). Total heat H = P × T = B₀² A² / (R T).",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q40",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Medium",
    "questionText": "When a magnet moves towards a stationary coil, the magnitude of induced EMF depends on",
    "options": [
      "Speed of the magnet",
      "Number of turns in coil",
      "Strength of the magnet",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "ε = -N (dΦ/dt). Increasing magnet speed, field strength, or coil turn density enhances the rate of flux change dΦ/dt.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q41",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Hard",
    "questionText": "A cylindrical bar magnet is kept along the axis of a circular coil. If the magnet is rotated about its OWN axis of symmetry, the induced EMF in coil is",
    "options": [
      "Zero",
      "Finite AC",
      "Finite DC",
      "Infinite"
    ],
    "correctAnswer": 0,
    "explanation": "Rotation of a symmetric magnet about its magnetic axis produces no change in the magnetic flux cutting the coil (dΦ/dt = 0), so induced EMF is Zero.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q42",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Medium",
    "questionText": "A conducting loop of area A and resistance R is rotated through 180° in a magnetic field B initially perpendicular to the loop. Total charge passed is",
    "options": [
      "2 B A / R",
      "B A / R",
      "Zero",
      "4 B A / R"
    ],
    "correctAnswer": 0,
    "explanation": "Initial flux Φ₁ = +BA. Final flux Φ₂ = -BA. ΔΦ = 2BA. Charge q = ΔΦ / R = 2BA / R.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q43",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Easy",
    "questionText": "Which rule is used to find the direction of induced current in a straight conductor moving across a magnetic field?",
    "options": [
      "Fleming's Right-Hand Rule",
      "Fleming's Left-Hand Rule",
      "Ampere's Right-Hand Grip Rule",
      "Maxwell's Corkscrew Rule"
    ],
    "correctAnswer": 0,
    "explanation": "Fleming's Right-Hand Rule gives direction of induced current (Thumb = Motion, Forefinger = Field, Middle finger = Induced Current).",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q44",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Medium",
    "questionText": "The magnetic flux linked with a coil varies with time t as Φ = 5t³ - 100t + 300 Wb. The induced EMF at t = 2 s is",
    "options": [
      "40 V",
      "-40 V",
      "100 V",
      "60 V"
    ],
    "correctAnswer": 0,
    "explanation": "ε = -dΦ/dt = -(15t² - 100). At t = 2 s: ε = -(15(4) - 100) = -(60 - 100) = +40 V.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  },
  {
    "id": "emi-q45",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Electromagnetic Induction (EMI)",
    "difficulty": "Hard",
    "questionText": "Energy dissipation in transformer core due to alternating magnetic flux is composed of",
    "options": [
      "Hysteresis loss and Eddy current loss",
      "Copper loss only",
      "Flux leakage only",
      "Dielectric loss"
    ],
    "correctAnswer": 0,
    "explanation": "Core iron losses consist of magnetic hysteresis dissipation (area of B-H loop) and eddy current Joulean heating.",
    "tags": [
      "Electromagnetic Induction",
      "Electromagnetic Induction (EMI)"
    ]
  }
];

export const ALTERNATING_CURRENT_QUESTIONS: Question[] = [
  {
    "id": "ac-q1",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Hard",
    "questionText": "The relation between peak value I₀ and root mean square (RMS) value I_rms of a sinusoidal alternating current is",
    "options": [
      "I_rms = I₀ / √2 ≈ 0.707 I₀",
      "I_rms = I₀ √2",
      "I_rms = 2 I₀ / π",
      "I_rms = I₀ / 2"
    ],
    "correctAnswer": 0,
    "explanation": "For sinusoidal AC: I_rms = I₀ / √2 ≈ 0.707 I₀.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q2",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Medium",
    "questionText": "The mean (average) value of sinusoidal AC over a half-cycle (0 to T/2) is",
    "options": [
      "2 I₀ / π ≈ 0.637 I₀",
      "I₀ / √2",
      "Zero",
      "I₀ / 2"
    ],
    "correctAnswer": 0,
    "explanation": "I_avg (half cycle) = (1 / (T/2)) ∫₀^{T/2} I₀ sin(ωt) dt = 2 I₀ / π ≈ 0.637 I₀.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q3",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Easy",
    "questionText": "The average value of sinusoidal AC over one complete cycle is strictly",
    "options": [
      "Zero",
      "I₀ / √2",
      "2 I₀ / π",
      "I₀"
    ],
    "correctAnswer": 0,
    "explanation": "The positive and negative half-cycles are symmetric, so the algebraic integral over one full period T is zero.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q4",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Medium",
    "questionText": "Inductive reactance X_L of an inductor of inductance L at AC frequency f is",
    "options": [
      "2 π f L",
      "1 / (2 π f L)",
      "2 π f / L",
      "L / (2 π f)"
    ],
    "correctAnswer": 0,
    "explanation": "X_L = ω L = 2 π f L.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q5",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Hard",
    "questionText": "Capacitive reactance X_C of a capacitor of capacitance C at AC frequency f is",
    "options": [
      "1 / (2 π f C)",
      "2 π f C",
      "2 π f / C",
      "C / (2 π f)"
    ],
    "correctAnswer": 0,
    "explanation": "X_C = 1 / (ω C) = 1 / (2 π f C).",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q6",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Medium",
    "questionText": "In a purely inductive AC circuit, the current I",
    "options": [
      "Lags behind voltage V by phase angle π/2 (90°)",
      "Leads voltage by π/2",
      "Is in phase with voltage",
      "Lags by π"
    ],
    "correctAnswer": 0,
    "explanation": "In a pure inductor: V(t) = V₀ sin(ωt) and I(t) = I₀ sin(ωt - π/2). Current lags voltage by 90°.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q7",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Easy",
    "questionText": "In a purely capacitive AC circuit, the current I",
    "options": [
      "Leads voltage V by phase angle π/2 (90°)",
      "Lags behind voltage by π/2",
      "Is in phase with voltage",
      "Leads by π"
    ],
    "correctAnswer": 0,
    "explanation": "In a pure capacitor: I(t) = I₀ sin(ωt + π/2). Current leads voltage by 90°.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q8",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Medium",
    "questionText": "Impedance Z of a series LCR circuit containing resistance R, inductance L, and capacitance C is",
    "options": [
      "√[R² + (X_L - X_C)²]",
      "R + X_L + X_C",
      "√[R² + X_L² + X_C²]",
      "R + √(X_L - X_C)"
    ],
    "correctAnswer": 0,
    "explanation": "Z = √[R² + (ωL - 1/ωC)²].",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q9",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Hard",
    "questionText": "Resonance frequency f₀ of a series LCR circuit is",
    "options": [
      "1 / (2π √(LC))",
      "2π √(LC)",
      "1 / (2π LC)",
      "√(LC) / 2π"
    ],
    "correctAnswer": 0,
    "explanation": "Resonance occurs when X_L = X_C => ω₀ L = 1 / (ω₀ C) => ω₀ = 1 / √(LC) => f₀ = 1 / (2π √(LC)).",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q10",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Medium",
    "questionText": "At series resonance, the impedance Z of the LCR circuit is",
    "options": [
      "Minimum and purely resistive (Z = R)",
      "Maximum",
      "Zero",
      "Infinite"
    ],
    "correctAnswer": 0,
    "explanation": "At resonance X_L = X_C, so reactance cancels and Z_min = R. Current amplitude is maximum I_max = V / R.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q11",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Easy",
    "questionText": "Power factor cos φ of a series AC circuit is given by",
    "options": [
      "R / Z",
      "Z / R",
      "X / R",
      "X / Z"
    ],
    "correctAnswer": 0,
    "explanation": "Power factor cos φ = Active Resistance / Total Impedance = R / Z.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q12",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Medium",
    "questionText": "The average power dissipated in an AC circuit over one cycle is",
    "options": [
      "V_rms I_rms cos φ",
      "V_rms I_rms",
      "V₀ I₀",
      "V_rms I_rms sin φ"
    ],
    "correctAnswer": 0,
    "explanation": "P_avg = V_rms I_rms cos φ.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q13",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Hard",
    "questionText": "In a purely inductive or purely capacitive AC circuit (φ = 90°), the average power dissipated is",
    "options": [
      "Zero (Wattless current)",
      "V_rms I_rms",
      "(1/2) V_rms I_rms",
      "Infinite"
    ],
    "correctAnswer": 0,
    "explanation": "Since cos 90° = 0, P_avg = V_rms I_rms cos 90° = 0 W. The current is called wattless current.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q14",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Medium",
    "questionText": "Quality factor Q (Q-factor) of a series resonant LCR circuit is",
    "options": [
      "(1 / R) √(L / C)",
      "R √(L / C)",
      "(1 / R) √(C / L)",
      "R √(C / L)"
    ],
    "correctAnswer": 0,
    "explanation": "Q = ω₀ L / R = (1 / √(LC)) (L / R) = (1 / R) √(L / C) = f₀ / Bandwidth.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q15",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Easy",
    "questionText": "A step-up transformer has primary turns N_p and secondary turns N_s (N_s > N_p). The ratio of secondary to primary voltage V_s / V_p is",
    "options": [
      "N_s / N_p",
      "N_p / N_s",
      "(N_s / N_p)²",
      "√(N_s / N_p)"
    ],
    "correctAnswer": 0,
    "explanation": "V_s / V_p = N_s / N_p = k (transformation ratio). For ideal transformer, current ratio I_s / I_p = N_p / N_s.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q16",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Medium",
    "questionText": "A transformer operates on the principle of",
    "options": [
      "Mutual induction between coils",
      "Self induction",
      "Electromagnetic radiation",
      "Joule heating"
    ],
    "correctAnswer": 0,
    "explanation": "A transformer transmits alternating electrical energy between primary and secondary windings through mutual inductive magnetic flux linkage.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q17",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Hard",
    "questionText": "Why cannot a transformer be used to step up a DC voltage?",
    "options": [
      "DC produces a constant magnetic flux (dΦ/dt = 0), so induced EMF in secondary is zero",
      "DC damages the core",
      "DC voltage is too high",
      "DC has infinite frequency"
    ],
    "correctAnswer": 0,
    "explanation": "A steady DC current produces a static magnetic field. Since dΦ/dt = 0, no EMF is induced in the secondary winding.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q18",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Medium",
    "questionText": "A 220 V AC line is connected across a 100 Ω resistor. The peak voltage V₀ of the line is",
    "options": [
      "311 V (220√2 V)",
      "220 V",
      "110 V",
      "440 V"
    ],
    "correctAnswer": 0,
    "explanation": "V₀ = V_rms √2 = 220 × 1.414 ≈ 311.1 V.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q19",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Easy",
    "questionText": "An AC source is given by V = 200 sin(100π t) volts. The frequency of the source is",
    "options": [
      "50 Hz",
      "100 Hz",
      "200 Hz",
      "25 Hz"
    ],
    "correctAnswer": 0,
    "explanation": "ω = 2π f = 100π => f = 50 Hz (standard domestic power frequency in India).",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q20",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Medium",
    "questionText": "The capacitive reactance X_C for DC (zero frequency, f = 0) is",
    "options": [
      "Infinite (blocks DC)",
      "Zero",
      "Finite",
      "Negative"
    ],
    "correctAnswer": 0,
    "explanation": "X_C = 1 / (2π f C). For f = 0, X_C -> ∞. A capacitor acts as an open circuit (infinite resistance) to steady DC.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q21",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Hard",
    "questionText": "The inductive reactance X_L for steady DC (f = 0) is",
    "options": [
      "Zero (offers no reactance)",
      "Infinite",
      "Finite",
      "Negative"
    ],
    "correctAnswer": 0,
    "explanation": "X_L = 2π f L = 0 Ω. An ideal inductor offers zero reactance to DC.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q22",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Medium",
    "questionText": "In a series LCR circuit with R = 10 Ω, L = 0.1 H, and C = 10 μF, the resonance angular frequency ω₀ is",
    "options": [
      "1000 rad/s",
      "100 rad/s",
      "500 rad/s",
      "2000 rad/s"
    ],
    "correctAnswer": 0,
    "explanation": "ω₀ = 1 / √(L C) = 1 / √(0.1 × 10⁻⁵) = 1 / √(10⁻⁶) = 1 / 10⁻³ = 1000 rad/s.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q23",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Easy",
    "questionText": "In the above resonant circuit, the Q-factor is",
    "options": [
      "10",
      "100",
      "1",
      "0.1"
    ],
    "correctAnswer": 0,
    "explanation": "Q = (1/R) √(L/C) = (1/10) √(0.1 / 10⁻⁵) = (1/10) √(10⁴) = 100 / 10 = 10.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q24",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Medium",
    "questionText": "A series LCR circuit has R = 30 Ω, X_L = 80 Ω, and X_C = 40 Ω. The impedance Z is",
    "options": [
      "50 Ω",
      "70 Ω",
      "150 Ω",
      "10 Ω"
    ],
    "correctAnswer": 0,
    "explanation": "Z = √[R² + (X_L - X_C)²] = √[30² + (80 - 40)²] = √[30² + 40²] = √[900 + 1600] = √2500 = 50 Ω.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q25",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Hard",
    "questionText": "In the above circuit, the power factor cos φ is",
    "options": [
      "0.60",
      "0.80",
      "1.00",
      "0.50"
    ],
    "correctAnswer": 0,
    "explanation": "cos φ = R / Z = 30 / 50 = 0.60 (lagging).",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q26",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Medium",
    "questionText": "A choke coil is used in fluorescent tubes to limit AC current with minimum power loss. An ideal choke coil has",
    "options": [
      "High inductance L and zero resistance R (low power dissipation)",
      "High resistance and low inductance",
      "Zero inductance",
      "High capacitance"
    ],
    "correctAnswer": 0,
    "explanation": "Choke coil uses large inductive reactance X_L = ωL to throttle current while keeping resistance R ≈ 0 to avoid heat waste (cos φ = R/Z ≈ 0).",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q27",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Easy",
    "questionText": "In an LC oscillation circuit, energy continuously oscillates between",
    "options": [
      "Electrostatic energy in capacitor and magnetic energy in inductor",
      "Heat and light",
      "Kinetic and potential mechanical energy",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "Total energy E = Q²/(2C) + (1/2)LI² = const oscillates between electric field of C and magnetic field of L with frequency f = 1/(2π√(LC)).",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q28",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Medium",
    "questionText": "A transformer has 500 turns in primary and 1000 turns in secondary. If 220 V AC is applied to primary, secondary voltage is",
    "options": [
      "440 V",
      "110 V",
      "220 V",
      "880 V"
    ],
    "correctAnswer": 0,
    "explanation": "V_s = V_p (N_s / N_p) = 220 × (1000 / 500) = 220 × 2 = 440 V.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q29",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Hard",
    "questionText": "If the efficiency of the above step-up transformer is 90% and primary power is 2.2 kW, secondary output power is",
    "options": [
      "1.98 kW",
      "2.20 kW",
      "2.44 kW",
      "1.10 kW"
    ],
    "correctAnswer": 0,
    "explanation": "P_out = η × P_in = 0.90 × 2.2 kW = 1.98 kW.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q30",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Medium",
    "questionText": "High voltage AC transmission is preferred over long distances because",
    "options": [
      "Stepping up voltage reduces current, drastically minimizing I²R transmission line power losses",
      "High voltage is safer",
      "Transformers work only at high voltage",
      "Generators produce high voltage directly"
    ],
    "correctAnswer": 0,
    "explanation": "Power loss P_loss = I² R_line = (P_trans / V)² R_line ∝ 1/V². Stepping up voltage 10 times reduces line power loss by 100 times.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q31",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Easy",
    "questionText": "The frequency of electrical oscillation in an LC circuit with L = 20 mH and C = 50 μF is",
    "options": [
      "159 Hz",
      "1000 Hz",
      "500 Hz",
      "50 Hz"
    ],
    "correctAnswer": 0,
    "explanation": "f = 1 / (2π √(LC)) = 1 / [2π √(20 × 10⁻³ × 50 × 10⁻⁶)] = 1 / [2π √(10⁻⁶)] = 1 / (2π × 10⁻³) = 1000 / (2π) ≈ 159.15 Hz.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q32",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Medium",
    "questionText": "In an AC circuit, V = 100 sin(100t) V and I = 100 sin(100t + π/3) mA. Power dissipation is",
    "options": [
      "2.5 W",
      "5.0 W",
      "10.0 W",
      "2.5 kW"
    ],
    "correctAnswer": 0,
    "explanation": "P_avg = (1/2) V₀ I₀ cos φ = (1/2) × 100 × (100 × 10⁻³) × cos 60° = (1/2) × 10 × 0.5 = 2.5 W.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q33",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Hard",
    "questionText": "Hot-wire ammeters and voltmeters measure",
    "options": [
      "RMS values of AC and DC",
      "Peak values",
      "Average values",
      "Instantaneous values"
    ],
    "correctAnswer": 0,
    "explanation": "Hot-wire instruments operate on Joule heating (H ∝ I²), making their deflection proportional to the mean square current and measuring true RMS value.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q34",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Medium",
    "questionText": "The scale of a hot-wire ammeter is",
    "options": [
      "Non-linear (cramped at beginning, spaced out at higher values)",
      "Linear",
      "Logarithmic",
      "Exponential"
    ],
    "correctAnswer": 0,
    "explanation": "Because deflection θ ∝ I_rms² (quadratic), the scale divisions are non-uniform.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q35",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Easy",
    "questionText": "A capacitor of 1 μF is connected to 220 V, 50 Hz AC supply. The RMS current through capacitor is",
    "options": [
      "69 mA",
      "100 mA",
      "22 mA",
      "138 mA"
    ],
    "correctAnswer": 0,
    "explanation": "X_C = 1 / (2π f C) = 1 / (2π × 50 × 10⁻⁶) = 10⁶ / (100π) = 10000 / π ≈ 3183 Ω. I_rms = 220 / 3183 ≈ 0.0691 A = 69.1 mA.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q36",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Medium",
    "questionText": "In an LCR circuit, resonance curve is sharper when",
    "options": [
      "Resistance R is small (high Q-factor)",
      "Resistance R is large",
      "Inductance is zero",
      "Capacitance is infinite"
    ],
    "correctAnswer": 0,
    "explanation": "Lower resistance R minimizes energy damping, increasing peak current and selectivity (sharpness of resonance curve).",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q37",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Hard",
    "questionText": "Wattless current component of an AC circuit is given by",
    "options": [
      "I_rms sin φ",
      "I_rms cos φ",
      "I_rms tan φ",
      "I_rms"
    ],
    "correctAnswer": 0,
    "explanation": "The component of current in quadrature (90° out of phase) with voltage is I_rms sin φ, which dissipates zero average power.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q38",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Medium",
    "questionText": "In a parallel resonant LCR circuit, the impedance at resonance is",
    "options": [
      "Maximum (Z = L / (CR))",
      "Minimum",
      "Zero",
      "Negative"
    ],
    "correctAnswer": 0,
    "explanation": "A parallel LCR circuit (rejector circuit) exhibits maximum impedance Z_max = L / (C R) and minimum current at resonance.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q39",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Easy",
    "questionText": "A step-down transformer transforms 2200 V into 220 V. If secondary current is 10 A and efficiency is 100%, primary current is",
    "options": [
      "1 A",
      "10 A",
      "100 A",
      "0.1 A"
    ],
    "correctAnswer": 0,
    "explanation": "V_p I_p = V_s I_s => 2200 × I_p = 220 × 10 = 2200 => I_p = 1.0 A.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q40",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Medium",
    "questionText": "The phase difference between voltage across inductor V_L and voltage across capacitor V_C in a series LCR circuit is",
    "options": [
      "π rad (180°)",
      "0 rad",
      "π / 2 rad (90°)",
      "2π rad"
    ],
    "correctAnswer": 0,
    "explanation": "V_L leads current by +90° while V_C lags current by -90°, making the phase difference between V_L and V_C exactly 180° (opposite phase).",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q41",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Hard",
    "questionText": "At frequency f < f₀ (below resonance) in a series LCR circuit, the circuit is predominantly",
    "options": [
      "Capacitive (current leads voltage)",
      "Inductive",
      "Resistive",
      "Superconducting"
    ],
    "correctAnswer": 0,
    "explanation": "When f < f₀, X_C = 1/(ωC) > X_L = ωL, so capacitive reactance dominates and current leads voltage.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q42",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Medium",
    "questionText": "At frequency f > f₀ (above resonance) in a series LCR circuit, the circuit is predominantly",
    "options": [
      "Inductive (current lags voltage)",
      "Capacitive",
      "Purely resistive",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "When f > f₀, X_L = ωL > X_C = 1/(ωC), so inductive reactance dominates and current lags voltage.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q43",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Easy",
    "questionText": "A 220 V, 50 Hz AC is applied across an inductor of 0.2 H. Inductive reactance is",
    "options": [
      "62.8 Ω",
      "31.4 Ω",
      "100 Ω",
      "125.6 Ω"
    ],
    "correctAnswer": 0,
    "explanation": "X_L = 2 π f L = 2 × 3.1416 × 50 × 0.2 = 62.83 Ω.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q44",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Medium",
    "questionText": "In an AC circuit, current is I = 5 cos(ωt) A and voltage is V = 200 sin(ωt) V. Power dissipated is",
    "options": [
      "Zero",
      "500 W",
      "1000 W",
      "250 W"
    ],
    "correctAnswer": 0,
    "explanation": "cos(ωt) = sin(ωt + π/2). The phase difference is φ = 90°. P = V_rms I_rms cos 90° = 0 W.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  },
  {
    "id": "ac-q45",
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "Alternating Current (AC)",
    "difficulty": "Hard",
    "questionText": "The core of a transformer is made of high-silicon steel laminations to minimize",
    "options": [
      "Both Eddy current and Hysteresis losses",
      "Copper loss",
      "Weight",
      "Stray radiation"
    ],
    "correctAnswer": 0,
    "explanation": "Silicon steel has a narrow hysteresis loop (low hysteresis loss) and high electrical resistivity, which combined with lamination suppresses eddy currents.",
    "tags": [
      "Alternating Current",
      "Alternating Current (AC)"
    ]
  }
];

export const EM_WAVES_QUESTIONS: Question[] = [
  {
    "id": "emw-q1",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Hard",
    "questionText": "Maxwell modified Ampere's circuital law by introducing the concept of",
    "options": [
      "Displacement current I_d = ε₀ (dΦ_E / dt)",
      "Eddy current",
      "Conduction current",
      "Wattless current"
    ],
    "correctAnswer": 0,
    "explanation": "Maxwell introduced displacement current I_d = ε₀ (dΦ_E / dt) to ensure continuity of current across the dielectric gap of a charging capacitor.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q2",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Medium",
    "questionText": "Displacement current exists in a region where",
    "options": [
      "Electric field is changing with time (dE/dt ≠ 0)",
      "Magnetic field is constant",
      "Conduction current is steady",
      "No electric field exists"
    ],
    "correctAnswer": 0,
    "explanation": "Displacement current arises from a time-varying electric flux: I_d = ε₀ A (dE/dt).",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q3",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Easy",
    "questionText": "The speed of electromagnetic waves in vacuum is given by Maxwell's formula",
    "options": [
      "1 / √(μ₀ ε₀)",
      "√(μ₀ / ε₀)",
      "√(ε₀ / μ₀)",
      "μ₀ ε₀"
    ],
    "correctAnswer": 0,
    "explanation": "c = 1 / √(μ₀ ε₀) = 1 / √[(4π × 10⁻⁷) × (8.854 × 10⁻¹²)] ≈ 3.0 × 10⁸ m/s.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q4",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Medium",
    "questionText": "In an electromagnetic wave propagating in free space, the ratio of electric field amplitude E₀ to magnetic field amplitude B₀ is",
    "options": [
      "c (speed of light)",
      "1 / c",
      "c²",
      "√c"
    ],
    "correctAnswer": 0,
    "explanation": "E₀ / B₀ = c = 3 × 10⁸ m/s.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q5",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Hard",
    "questionText": "Electromagnetic waves are transverse in nature. This is confirmed experimentally by",
    "options": [
      "Polarization",
      "Interference",
      "Diffraction",
      "Refraction"
    ],
    "correctAnswer": 0,
    "explanation": "Only transverse waves can be polarized; longitudinal waves (like sound in air) cannot exhibit polarization.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q6",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Medium",
    "questionText": "In an electromagnetic wave, the electric field vector E, magnetic field vector B, and direction of propagation k are",
    "options": [
      "Mutually perpendicular with k along E × B",
      "Parallel to each other",
      "E and B are parallel to k",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "E ⊥ B ⊥ k, and Poynting vector S = (1/μ₀)(E × B) points along the direction of wave propagation.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q7",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Easy",
    "questionText": "The average energy density u of an electromagnetic wave in vacuum with peak electric field E₀ is",
    "options": [
      "(1/2) ε₀ E₀²",
      "ε₀ E₀²",
      "(1/4) ε₀ E₀²",
      "2 ε₀ E₀²"
    ],
    "correctAnswer": 0,
    "explanation": "Total average energy density u = u_E + u_B = (1/4) ε₀ E₀² + (1/4) B₀² / μ₀ = (1/2) ε₀ E₀² (electric and magnetic fields share equal average energy).",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q8",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Medium",
    "questionText": "The Poynting vector S represents",
    "options": [
      "Rate of energy transport per unit area (Intensity vector) S = (1/μ₀)(E × B)",
      "Electric field energy",
      "Magnetic flux",
      "Poynting pressure"
    ],
    "correctAnswer": 0,
    "explanation": "Poynting vector S = (1/μ₀)(E × B) has units of W/m² (Watts per square metre) and represents the directional power flux density.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q9",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Hard",
    "questionText": "When electromagnetic radiation of intensity I falls normally on a completely ABSORBING surface, radiation pressure exerted is",
    "options": [
      "I / c",
      "2I / c",
      "I / c²",
      "I · c"
    ],
    "correctAnswer": 0,
    "explanation": "For complete absorption, photon momentum transferred is p = U / c => Pressure P = I / c.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q10",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Medium",
    "questionText": "When the radiation falls normally on a perfectly REFLECTING surface, the radiation pressure is",
    "options": [
      "2I / c",
      "I / c",
      "I / (2c)",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "Upon reflection Δp = 2(U / c) => Radiation pressure P = 2I / c.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q11",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Easy",
    "questionText": "Which electromagnetic waves have the shortest wavelength (highest frequency)?",
    "options": [
      "Gamma rays",
      "X-rays",
      "Ultraviolet rays",
      "Radio waves"
    ],
    "correctAnswer": 0,
    "explanation": "Gamma rays have λ < 10⁻¹² m (1 pm) and frequencies > 10²⁰ Hz, having the highest photon energies in the EM spectrum.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q12",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Medium",
    "questionText": "Which electromagnetic waves have the longest wavelength (lowest frequency)?",
    "options": [
      "Radio waves",
      "Microwaves",
      "Infrared waves",
      "Visible light"
    ],
    "correctAnswer": 0,
    "explanation": "Radio waves have wavelengths from ~ 1 mm up to thousands of kilometers (frequencies < 300 GHz).",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q13",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Hard",
    "questionText": "Microwaves are used in radar and satellite communication because they",
    "options": [
      "Have short wavelengths that travel in narrow beams without significant diffraction",
      "Are absorbed by clouds",
      "Have high ionizing power",
      "Travel faster than light"
    ],
    "correctAnswer": 0,
    "explanation": "Microwaves (λ ~ 1 mm to 30 cm) form highly directional line-of-sight beams ideal for radar detection and satellite uplinks/downlinks.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q14",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Medium",
    "questionText": "The frequency range of the visible spectrum of light is approximately",
    "options": [
      "4 × 10¹⁴ Hz to 8 × 10¹⁴ Hz (λ ≈ 400 nm to 750 nm)",
      "10¹⁰ Hz to 10¹² Hz",
      "10¹⁶ Hz to 10¹⁸ Hz",
      "10⁶ Hz to 10⁸ Hz"
    ],
    "correctAnswer": 0,
    "explanation": "Human visible spectrum spans wavelengths from 400 nm (violet) to 750 nm (red), corresponding to 4 × 10¹⁴ Hz to 7.5 × 10¹⁴ Hz.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q15",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Easy",
    "questionText": "Infrared (IR) radiation is produced by",
    "options": [
      "Hot bodies and molecular thermal vibrations (heat rays)",
      "Nuclear transitions",
      "Inner shell electron transitions",
      "Accelerating charges in antenna"
    ],
    "correctAnswer": 0,
    "explanation": "Infrared rays (λ ~ 750 nm to 1 mm) are emitted by thermal vibrations of atoms and molecules in hot objects.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q16",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Medium",
    "questionText": "Ultraviolet (UV) radiation is absorbed in the upper atmosphere by the",
    "options": [
      "Ozone layer (O₃) in the stratosphere",
      "Ionosphere",
      "Troposphere",
      "Carbon dioxide"
    ],
    "correctAnswer": 0,
    "explanation": "Stratospheric ozone absorbs harmful high-energy solar UV-B and UV-C radiation (λ < 315 nm), shielding biological organisms on Earth.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q17",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Hard",
    "questionText": "X-rays are produced when",
    "options": [
      "High-energy energetic electrons strike a heavy metallic target (such as Tungsten)",
      "A nucleus undergoes alpha decay",
      "Water boils",
      "Radio antennas broadcast"
    ],
    "correctAnswer": 0,
    "explanation": "X-rays (λ ~ 0.01 nm to 10 nm) are generated via Bremsstrahlung (deceleration of fast electrons) and characteristic inner K/L-shell atomic transitions in Coolidge tubes.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q18",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Medium",
    "questionText": "Electromagnetic waves are produced by",
    "options": [
      "Accelerating or oscillating electric charges",
      "Stationary charges",
      "Steady DC currents",
      "Uniformly moving charges"
    ],
    "correctAnswer": 0,
    "explanation": "A stationary charge produces static electric field E; a steady current produces static magnetic field B; an accelerating charge radiates time-varying E and B fields as EM waves.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q19",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Easy",
    "questionText": "The ozone layer protects life on Earth from harmful",
    "options": [
      "Ultraviolet radiation",
      "Infrared radiation",
      "Microwaves",
      "Radio waves"
    ],
    "correctAnswer": 0,
    "explanation": "Ozone absorbs cellular-damaging ionizing UV radiation.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q20",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Medium",
    "questionText": "In a plane electromagnetic wave, peak electric field is E₀ = 30 V/m. The peak magnetic field B₀ is",
    "options": [
      "1.0 × 10⁻⁷ T (0.1 μT)",
      "1.0 × 10⁻⁶ T",
      "9.0 × 10⁹ T",
      "3.0 × 10⁸ T"
    ],
    "correctAnswer": 0,
    "explanation": "B₀ = E₀ / c = 30 / (3 × 10⁸) = 1.0 × 10⁻⁷ Tesla = 0.1 μT.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q21",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Hard",
    "questionText": "The greenhouse effect warms Earth's lower atmosphere primarily by trapping",
    "options": [
      "Infrared radiation re-emitted by Earth",
      "UV radiation",
      "X-rays",
      "Visible light"
    ],
    "correctAnswer": 0,
    "explanation": "Greenhouse gases trap long-wavelength thermal infrared radiation re-emitted from the sun-warmed planetary surface.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q22",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Medium",
    "questionText": "Which of the following electromagnetic waves is used for sterilizing surgical instruments and water purification?",
    "options": [
      "Ultraviolet (UV) rays",
      "Infrared rays",
      "Microwaves",
      "Radio waves"
    ],
    "correctAnswer": 0,
    "explanation": "UV-C radiation disrupts bacterial and viral DNA, providing germicidal sterilization.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q23",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Easy",
    "questionText": "Cellular mobile communications primarily operate in which frequency band?",
    "options": [
      "Ultra High Frequency (UHF) microwaves (~ 800 MHz to 2.5 GHz)",
      "Extremely Low Frequency (ELF)",
      "Very Low Frequency (VLF)",
      "Gamma rays"
    ],
    "correctAnswer": 0,
    "explanation": "Mobile cellular telephony uses UHF bands (800 MHz - 2.5 GHz / 5G sub-6 GHz).",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q24",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Medium",
    "questionText": "In an EM wave, the phase difference between electric field E(x, t) and magnetic field B(x, t) in free space is",
    "options": [
      "0 rad (in-phase)",
      "π / 2 rad (90°)",
      "π rad (180°)",
      "π / 4 rad"
    ],
    "correctAnswer": 0,
    "explanation": "In free space, both E and B attain their maxima, minima, and zeros simultaneously: E and B oscillate in identical phase.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q25",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Hard",
    "questionText": "Which EM radiation is detected using thermopiles, bolometers, or photographic infrared plates?",
    "options": [
      "Infrared radiation",
      "X-rays",
      "Radio waves",
      "Gamma rays"
    ],
    "correctAnswer": 0,
    "explanation": "Infrared rays produce measurable thermal heating detected by bolometers and thermopiles.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q26",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Medium",
    "questionText": "The ratio of energy of an X-ray photon of wavelength 1 Å to that of visible photon of wavelength 5000 Å is",
    "options": [
      "5000 : 1",
      "1 : 5000",
      "2500 : 1",
      "50 : 1"
    ],
    "correctAnswer": 0,
    "explanation": "Photon energy E = h c / λ => E_X / E_vis = λ_vis / λ_X = 5000 Å / 1 Å = 5000 : 1.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q27",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Easy",
    "questionText": "A laser beam of power 30 mW has beam cross-section 1 mm². The intensity of the laser beam is",
    "options": [
      "3 × 10⁴ W/m² (30 kW/m²)",
      "30 W/m²",
      "300 W/m²",
      "3 × 10⁶ W/m²"
    ],
    "correctAnswer": 0,
    "explanation": "I = P / A = (30 × 10⁻³ W) / (10⁻⁶ m²) = 3 × 10⁴ W/m².",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q28",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Medium",
    "questionText": "The magnetic field of a plane EM wave is given by B_y = 2 × 10⁻⁷ sin(0.5 × 10³ x + 1.5 × 10¹¹ t) T. The wavelength λ is",
    "options": [
      "1.26 cm (4π mm)",
      "2.0 cm",
      "0.5 cm",
      "6.28 cm"
    ],
    "correctAnswer": 0,
    "explanation": "k = 2π / λ = 0.5 × 10³ m⁻¹ => λ = 2π / (500) = 4π / 1000 = 0.01257 m = 1.26 cm.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q29",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Hard",
    "questionText": "In the above EM wave, the amplitude of the electric field E₀ is",
    "options": [
      "60 V/m",
      "20 V/m",
      "600 V/m",
      "6 V/m"
    ],
    "correctAnswer": 0,
    "explanation": "E₀ = c B₀ = (3 × 10⁸ m/s) × (2 × 10⁻⁷ T) = 60 V/m.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q30",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Medium",
    "questionText": "A parallel plate capacitor with circular plates of radius R is being charged. At radius r (r < R) from the axis, induced magnetic field B is",
    "options": [
      "(μ₀ r / (2π R²)) I_d",
      "(μ₀ I_d) / (2π r)",
      "Zero",
      "(μ₀ R) / (2π r²)"
    ],
    "correctAnswer": 0,
    "explanation": "∮ B · dl = μ₀ I_enclosed => B(2π r) = μ₀ I_d (π r² / π R²) => B = (μ₀ r / (2π R²)) I_d.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q31",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Easy",
    "questionText": "Which layer of Earth's atmosphere reflects short radio waves (AM broadcast) back to Earth?",
    "options": [
      "Ionosphere",
      "Troposphere",
      "Stratosphere",
      "Mesosphere"
    ],
    "correctAnswer": 0,
    "explanation": "The ionosphere contains free electrons and ions that refract and reflect sky-wave radio frequencies below the critical plasma frequency (~ 30 MHz).",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q32",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Medium",
    "questionText": "Optical fibers transmit light signals over long distances with minimal loss by utilizing",
    "options": [
      "Total internal reflection (TIR)",
      "Refraction only",
      "Diffraction",
      "Polarization"
    ],
    "correctAnswer": 0,
    "explanation": "Light injected into the core at angle greater than critical angle θ_c experiences continuous lossless total internal reflections.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q33",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Hard",
    "questionText": "The frequency above which radio waves penetrate the ionosphere without being reflected (critical frequency f_c) is given by",
    "options": [
      "9 √(N_max)",
      "9 N_max",
      "81 N_max",
      "√(N_max) / 9"
    ],
    "correctAnswer": 0,
    "explanation": "f_c = √( (e² N_max) / (4π² ε₀ m) ) ≈ 9 √(N_max) Hz, where N_max is the maximum electron density in the ionospheric layer.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q34",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Medium",
    "questionText": "Electromagnetic waves transport",
    "options": [
      "Both energy and momentum",
      "Energy only",
      "Momentum only",
      "Electric charge"
    ],
    "correctAnswer": 0,
    "explanation": "EM waves carry energy (Poynting vector S), momentum (p = U/c), and exert radiation pressure on surfaces.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q35",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Easy",
    "questionText": "Which of the following is NOT an electromagnetic wave?",
    "options": [
      "Beta rays (fast electrons)",
      "Gamma rays",
      "X-rays",
      "Radio waves"
    ],
    "correctAnswer": 0,
    "explanation": "Beta rays are streams of fast-moving material electrons/positrons, not electromagnetic waves.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q36",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Medium",
    "questionText": "Cathode rays are",
    "options": [
      "Streams of electrons (particle beams)",
      "Electromagnetic radiation",
      "Positrons",
      "Protons"
    ],
    "correctAnswer": 0,
    "explanation": "Cathode rays are energetic electrons emitted from a cathode in gas discharge tubes.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q37",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Hard",
    "questionText": "The wavelength of thermal infrared radiation used in night-vision cameras is typically",
    "options": [
      "1 μm to 100 μm",
      "400 nm",
      "1 nm",
      "100 m"
    ],
    "correctAnswer": 0,
    "explanation": "Thermal infrared spans ~ 1 μm to 14 μm (peaking near 10 μm for human body radiation at 300 K).",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q38",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Medium",
    "questionText": "Microwave oven frequency (typically 2.45 GHz) is chosen because it",
    "options": [
      "Resonates with the rotational transition modes of water molecules in food",
      "Ionizes air",
      "Heats metals only",
      "Has zero power"
    ],
    "correctAnswer": 0,
    "explanation": "2.45 GHz microwaves match the dielectric relaxation resonance of liquid water dipoles, causing rapid friction heating inside food.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q39",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Easy",
    "questionText": "The electric and magnetic fields in an EM wave are given by E = E₀ sin(kx - ωt) ĵ and B = B₀ sin(kx - ωt) k̂. The wave propagates along",
    "options": [
      "+x direction",
      "-x direction",
      "+y direction",
      "+z direction"
    ],
    "correctAnswer": 0,
    "explanation": "E × B is along ĵ × k̂ = î (+x direction), which is the direction of propagation.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q40",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Medium",
    "questionText": "The dimensional formula of the Poynting vector S (energy per unit area per second) is",
    "options": [
      "[M T⁻³] (W/m²)",
      "[M L² T⁻²]",
      "[M L⁻¹ T⁻²]",
      "[M L T⁻³]"
    ],
    "correctAnswer": 0,
    "explanation": "[S] = [Power / Area] = [M L² T⁻³] / L² = [M T⁻³] (Joule·s⁻¹·m⁻² = W/m²).",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q41",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Hard",
    "questionText": "If the amplitude of the electric field in an EM wave is doubled, the intensity of the wave",
    "options": [
      "Becomes 4 times",
      "Doubles",
      "Remains same",
      "Becomes 8 times"
    ],
    "correctAnswer": 0,
    "explanation": "Intensity I = (1/2) ε₀ c E₀² ∝ E₀². Doubling E₀ quadruples intensity: I' = 4 I.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q42",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Medium",
    "questionText": "Solar constant S (solar radiation power per unit area reaching top of Earth's atmosphere) is approximately",
    "options": [
      "1.36 kW/m² (1360 W/m²)",
      "136 W/m²",
      "13.6 kW/m²",
      "100 kW/m²"
    ],
    "correctAnswer": 0,
    "explanation": "The average solar irradiance at 1 AU from the Sun is ≈ 1361 W/m² ≈ 1.36 kW/m².",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q43",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Easy",
    "questionText": "Electromagnetic waves emitted by a cell phone antenna are",
    "options": [
      "Microwaves (Radio frequency RF)",
      "Infrared rays",
      "X-rays",
      "Sound waves"
    ],
    "correctAnswer": 0,
    "explanation": "Cell phones transmit and receive UHF microwave signals (~ 0.8 GHz to 3.5 GHz).",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q44",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Medium",
    "questionText": "Which of the following EM waves has the highest penetrating power through human tissue and matter?",
    "options": [
      "Gamma rays",
      "X-rays",
      "Ultraviolet",
      "Visible light"
    ],
    "correctAnswer": 0,
    "explanation": "High-energy Gamma rays have extremely high photon energies (MeV range) and can penetrate deep through thick lead and concrete shields.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  },
  {
    "id": "emw-q45",
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "Electromagnetic Waves (EM Waves)",
    "difficulty": "Hard",
    "questionText": "Maxwell's four fundamental equations synthesize all classical laws of",
    "options": [
      "Electricity and Magnetism",
      "Thermodynamics",
      "Gravitation",
      "Quantum mechanics"
    ],
    "correctAnswer": 0,
    "explanation": "Maxwell's equations unify Gauss's law for electrostatics, Gauss's law for magnetism, Faraday's law of induction, and Ampere-Maxwell law into a unified classical electrodynamic framework.",
    "tags": [
      "Electromagnetic Waves",
      "Electromagnetic Waves (EM Waves)"
    ]
  }
];

export const RAY_OPTICS_QUESTIONS: Question[] = [
  {
    "id": "ray-q1",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Hard",
    "questionText": "The relation between focal length f and radius of curvature R of a spherical mirror is",
    "options": [
      "f = R / 2",
      "f = 2 R",
      "f = R / 4",
      "f = R² / 2"
    ],
    "correctAnswer": 0,
    "explanation": "For paraxial rays incident on a spherical mirror: f = R / 2.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q2",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Medium",
    "questionText": "The mirror equation relating object distance u, image distance v, and focal length f is",
    "options": [
      "1/v + 1/u = 1/f",
      "1/v - 1/u = 1/f",
      "1/f + 1/v = 1/u",
      "v + u = f"
    ],
    "correctAnswer": 0,
    "explanation": "Mirror formula (Cartesian sign convention): 1/v + 1/u = 1/f.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q3",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Easy",
    "questionText": "Linear magnification m produced by a spherical mirror is",
    "options": [
      "-v / u",
      "+v / u",
      "u / v",
      "-u / v"
    ],
    "correctAnswer": 0,
    "explanation": "m = h_image / h_object = -v / u = f / (f - u).",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q4",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Medium",
    "questionText": "Snell's law of refraction for light passing from medium 1 (index n₁) to medium 2 (index n₂) is",
    "options": [
      "n₁ sin i = n₂ sin r",
      "n₁ / sin i = n₂ / sin r",
      "n₁ sin r = n₂ sin i",
      "sin i / sin r = n₁ n₂"
    ],
    "correctAnswer": 0,
    "explanation": "Snell's law: n₁ sin i = n₂ sin r => sin i / sin r = n₂ / n₁ = ₁n₂.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q5",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Hard",
    "questionText": "Critical angle θ_c for total internal reflection (TIR) from medium 2 (denser, index n₁) to medium 1 (rarer, index n₂) is",
    "options": [
      "sin θ_c = n₂ / n₁",
      "sin θ_c = n₁ / n₂",
      "cos θ_c = n₂ / n₁",
      "tan θ_c = n₂ / n₁"
    ],
    "correctAnswer": 0,
    "explanation": "When refraction angle r = 90°: n₁ sin θ_c = n₂ sin 90° => sin θ_c = n₂ / n₁ (for air n₂ = 1, sin θ_c = 1/n).",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q6",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Medium",
    "questionText": "The apparent depth d' of an object submerged at real depth d in a liquid of refractive index n viewed from air is",
    "options": [
      "d / n",
      "d · n",
      "d / (n - 1)",
      "d √(n)"
    ],
    "correctAnswer": 0,
    "explanation": "For normal incidence: Apparent depth d' = Real depth / n = d / n. Apparent shift Δx = d (1 - 1/n).",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q7",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Easy",
    "questionText": "The Lens Maker's Formula for a thin lens of refractive index n₂ in medium n₁ with radii R₁ and R₂ is",
    "options": [
      "1/f = (n₂/n₁ - 1) (1/R₁ - 1/R₂)",
      "1/f = (n₂/n₁ + 1) (1/R₁ + 1/R₂)",
      "1/f = (n₂/n₁) (1/R₁ - 1/R₂)",
      "1/f = (n₁/n₂ - 1) (1/R₁ - 1/R₂)"
    ],
    "correctAnswer": 0,
    "explanation": "Lens Maker's Formula: 1/f = ((n_lens / n_medium) - 1) (1/R₁ - 1/R₂).",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q8",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Medium",
    "questionText": "The thin lens equation relating u, v, and focal length f is",
    "options": [
      "1/v - 1/u = 1/f",
      "1/v + 1/u = 1/f",
      "1/f - 1/v = 1/u",
      "v - u = f"
    ],
    "correctAnswer": 0,
    "explanation": "Thin lens formula: 1/v - 1/u = 1/f.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q9",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Hard",
    "questionText": "Linear magnification m produced by a thin lens is",
    "options": [
      "+v / u",
      "-v / u",
      "+u / v",
      "-u / v"
    ],
    "correctAnswer": 0,
    "explanation": "For a lens: m = h_image / h_object = +v / u = f / (f + u).",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q10",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Medium",
    "questionText": "Power P of a lens of focal length f (in metres) is measured in Dioptres (D) as",
    "options": [
      "P = 1 / f (m)",
      "P = f (m)",
      "P = 100 / f (m)",
      "P = 1 / f²"
    ],
    "correctAnswer": 0,
    "explanation": "Power P = 1 / f (in metres). A converging lens with f = +0.5 m has power P = +2.0 D.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q11",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Easy",
    "questionText": "When two thin lenses of powers P₁ and P₂ are in contact, the equivalent power P is",
    "options": [
      "P₁ + P₂",
      "P₁ P₂",
      "P₁ P₂ / (P₁ + P₂)",
      "√(P₁ P₂)"
    ],
    "correctAnswer": 0,
    "explanation": "For lenses in contact: P = P₁ + P₂ => 1/f = 1/f₁ + 1/f₂.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q12",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Medium",
    "questionText": "For a prism of refracting angle A and minimum deviation angle δ_m, the refractive index n is",
    "options": [
      "sin((A + δ_m) / 2) / sin(A / 2)",
      "sin((A + δ_m)) / sin(A)",
      "cos((A + δ_m) / 2) / sin(A / 2)",
      "tan((A + δ_m) / 2)"
    ],
    "correctAnswer": 0,
    "explanation": "Prism formula: n = sin[(A + δ_m) / 2] / sin[A / 2].",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q13",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Hard",
    "questionText": "For a small-angle prism (thin prism of apex angle A << 10°), angle of deviation is",
    "options": [
      "δ = (n - 1) A",
      "δ = (n + 1) A",
      "δ = n A",
      "δ = A / (n - 1)"
    ],
    "correctAnswer": 0,
    "explanation": "For small angles: δ = (n - 1) A.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q14",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Medium",
    "questionText": "Dispersive power ω of a prism material having refractive indices n_v, n_r, and n_y is",
    "options": [
      "(n_v - n_r) / (n_y - 1)",
      "(n_v + n_r) / (n_y - 1)",
      "(n_y - 1) / (n_v - n_r)",
      "(n_v - n_r) / n_y"
    ],
    "correctAnswer": 0,
    "explanation": "Dispersive power ω = Angular dispersion / Mean deviation = (δ_v - δ_r) / δ_y = (n_v - n_r) / (n_y - 1).",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q15",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Easy",
    "questionText": "Magnifying power M of a simple microscope (magnifying glass) for image formed at near point D (25 cm) is",
    "options": [
      "1 + D / f",
      "D / f",
      "1 - D / f",
      "f / D"
    ],
    "correctAnswer": 0,
    "explanation": "At least distance of distinct vision D = 25 cm: M = 1 + D/f. For image at infinity (relaxed eye): M = D/f.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q16",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Medium",
    "questionText": "Total magnifying power M of a compound microscope with image at infinity is",
    "options": [
      "-(L / f_o) · (D / f_e)",
      "-(f_o / L) · (f_e / D)",
      "-(L / f_e) · (D / f_o)",
      "(f_o f_e) / (L D)"
    ],
    "correctAnswer": 0,
    "explanation": "M = m_o × m_e = -(L / f_o) × (D / f_e), where L is the tube length.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q17",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Hard",
    "questionText": "Magnifying power M of an astronomical telescope in normal adjustment (image at infinity) is",
    "options": [
      "-f_o / f_e",
      "-f_e / f_o",
      "-(f_o + f_e)",
      "f_o · f_e"
    ],
    "correctAnswer": 0,
    "explanation": "In normal adjustment: Magnifying power M = -f_o / f_e, and telescope tube length L = f_o + f_e.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q18",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Medium",
    "questionText": "To achieve high magnifying power and high resolving power in an astronomical telescope, the objective lens should have",
    "options": [
      "Large focal length f_o and large aperture diameter D",
      "Small focal length and small aperture",
      "Small f_o and large f_e",
      "Small aperture and large f_e"
    ],
    "correctAnswer": 0,
    "explanation": "Large focal length f_o maximizes magnification M = f_o/f_e, and large aperture D increases light-gathering power and resolves fine angular separations (θ = 1.22 λ / D).",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q19",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Easy",
    "questionText": "A convex lens of glass (n = 1.5) has focal length 20 cm in air. When immersed in water (n = 4/3), its focal length becomes",
    "options": [
      "80 cm",
      "40 cm",
      "20 cm",
      "10 cm"
    ],
    "correctAnswer": 0,
    "explanation": "1/f_air = (1.5 - 1) K = 0.5 K => K = 2/f_air. 1/f_w = (1.5/(4/3) - 1) K = (9/8 - 1) K = (1/8) (2/20) = 1/80 => f_w = 80 cm (quadruples).",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q20",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Medium",
    "questionText": "If a convex lens of glass (n = 1.5) is immersed in a liquid of refractive index n_l = 1.7 (liquid denser than glass), the lens behaves as a",
    "options": [
      "Diverging (concave) lens",
      "Converging (convex) lens",
      "Plane glass sheet",
      "Mirror"
    ],
    "correctAnswer": 0,
    "explanation": "Since n_liquid > n_lens, (n_lens/n_liquid - 1) < 0, reversing the sign of focal length so a convex lens acts as a diverging concave lens.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q21",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Hard",
    "questionText": "An object is placed 20 cm in front of a concave mirror of focal length 15 cm. Image is formed at",
    "options": [
      "-60 cm (real, inverted, magnified)",
      "+60 cm",
      "-30 cm",
      "+30 cm"
    ],
    "correctAnswer": 0,
    "explanation": "1/v = 1/f - 1/u = 1/(-15) - 1/(-20) = -1/15 + 1/20 = (-4 + 3)/60 = -1/60 => v = -60 cm.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q22",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Medium",
    "questionText": "A convex mirror of focal length 20 cm forms an image of a real object. The image is always",
    "options": [
      "Virtual, erect, and diminished",
      "Real, inverted, and magnified",
      "Virtual, inverted, and magnified",
      "Real, erect, and diminished"
    ],
    "correctAnswer": 0,
    "explanation": "A convex mirror always forms a virtual, upright, diminished image behind the mirror between pole P and focus F.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q23",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Easy",
    "questionText": "Total internal reflection occurs only when light travels from",
    "options": [
      "Optically denser medium to optically rarer medium at angle i > critical angle θ_c",
      "Rarer to denser medium",
      "Air to water",
      "Vacuum to diamond at any angle"
    ],
    "correctAnswer": 0,
    "explanation": "Conditions for TIR: 1) Light must travel from denser to rarer medium; 2) Angle of incidence i must exceed critical angle θ_c.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q24",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Medium",
    "questionText": "The sparkling brilliance of diamond is due to its",
    "options": [
      "High refractive index (n ≈ 2.42) resulting in very small critical angle (~ 24.4°) and multiple total internal reflections",
      "High density",
      "Chemical hardness",
      "Absorption of light"
    ],
    "correctAnswer": 0,
    "explanation": "With small critical angle θ_c ≈ 24.4°, light entering expertly cut facets undergoes multiple total internal reflections before exiting.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q25",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Hard",
    "questionText": "Mirage observed in hot deserts is an optical illusion caused by",
    "options": [
      "Total internal reflection in air layers with vertical temperature/refractive index gradients",
      "Light scattering",
      "Diffraction",
      "Interference"
    ],
    "correctAnswer": 0,
    "explanation": "Hot air near the ground has lower density and refractive index; light from the sky bends upward via continuous TIR, mimicking water reflections.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q26",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Medium",
    "questionText": "An equiconvex lens of focal length f is cut into two equal halves along its principal axis (horizontal cut). The focal length of each half is",
    "options": [
      "f",
      "2f",
      "f / 2",
      "4f"
    ],
    "correctAnswer": 0,
    "explanation": "Cutting along the principal axis preserves radii of curvature R₁ and R₂, so focal length of each half remains f (intensity halves).",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q27",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Easy",
    "questionText": "If the equiconvex lens of focal length f is cut into two plano-convex lenses perpendicular to principal axis (vertical cut), focal length of each half is",
    "options": [
      "2f",
      "f",
      "f / 2",
      "4f"
    ],
    "correctAnswer": 0,
    "explanation": "For equiconvex lens: 1/f = (n-1)(2/R). For plano-convex half: 1/f' = (n-1)(1/R) = 1/(2f) => f' = 2f.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q28",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Medium",
    "questionText": "Chromatic aberration in lenses occurs because",
    "options": [
      "Refractive index of glass varies with wavelength (dispersion)",
      "Lens is spherical",
      "Light travels in rays",
      "Aperture is too large"
    ],
    "correctAnswer": 0,
    "explanation": "Since n_violet > n_red, violet rays refract more sharply and focus closer (f_v < f_r), creating colored fringe blurring (chromatic aberration).",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q29",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Hard",
    "questionText": "Spherical aberration in spherical mirrors can be completely eliminated by using",
    "options": [
      "Parabolic mirrors",
      "Plane mirrors",
      "Convex mirrors",
      "Thick spherical mirrors"
    ],
    "correctAnswer": 0,
    "explanation": "A parabolic mirror reflects all parallel incident rays to a single geometric focal point, eliminating spherical aberration.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q30",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Medium",
    "questionText": "The rainbow is formed by sunlight undergoing",
    "options": [
      "Dispersion, refraction, and internal reflection inside water droplets",
      "Diffraction only",
      "Scattering by air molecules",
      "Polarization only"
    ],
    "correctAnswer": 0,
    "explanation": "Primary rainbow involves refraction + dispersion + 1 internal reflection; secondary rainbow involves refraction + dispersion + 2 internal reflections.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q31",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Easy",
    "questionText": "Secondary rainbow is fainter than primary rainbow and has",
    "options": [
      "Reversed color order (Red on inner rim, Violet on outer rim)",
      "Identical color order",
      "White appearance",
      "Only yellow color"
    ],
    "correctAnswer": 0,
    "explanation": "Two internal reflections cause greater light attenuation (making it fainter) and invert the order of spectral colors relative to the primary bow.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q32",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Medium",
    "questionText": "Rayleigh scattering intensity I_s of light by particles much smaller than wavelength λ is proportional to",
    "options": [
      "1 / λ⁴",
      "1 / λ²",
      "λ⁴",
      "1 / λ"
    ],
    "correctAnswer": 0,
    "explanation": "Rayleigh Scattering: I_s ∝ 1/λ⁴. Blue light (λ ≈ 400 nm) scatters ~ 10 times more intensely than red light (λ ≈ 700 nm), explaining the blue sky.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q33",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Hard",
    "questionText": "The sun appears reddish at sunrise and sunset because",
    "options": [
      "Longer wavelength red light is least scattered by the thick atmospheric path",
      "Sun heats up",
      "Blue light is absorbed by clouds",
      "Atmosphere refracts red only"
    ],
    "correctAnswer": 0,
    "explanation": "At low solar elevations, light traverses maximum atmospheric air mass; short wavelengths (blue/violet) scatter away, leaving transmitted red light.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q34",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Medium",
    "questionText": "Why is danger signal light always chosen to be RED?",
    "options": [
      "Red light has longest visible wavelength and undergoes minimum Rayleigh scattering in fog/smoke",
      "Red is bright",
      "Eyes are sensitive only to red",
      "Red travels faster"
    ],
    "correctAnswer": 0,
    "explanation": "Because I_scatter ∝ 1/λ⁴, red light penetrates furthest through haze, dust, and smoke with minimal attenuation.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q35",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Easy",
    "questionText": "A person suffering from Myopia (short-sightedness) cannot see distant objects clearly. This defect is corrected by using a",
    "options": [
      "Concave (diverging) lens",
      "Convex (converging) lens",
      "Cylindrical lens",
      "Bifocal lens"
    ],
    "correctAnswer": 0,
    "explanation": "In myopia, parallel rays from infinity focus in front of the retina. A diverging concave lens moves the image back onto the retina.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q36",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Medium",
    "questionText": "Hypermetropia (far-sightedness) is corrected using a",
    "options": [
      "Convex (converging) lens",
      "Concave (diverging) lens",
      "Cylindrical lens",
      "Prism"
    ],
    "correctAnswer": 0,
    "explanation": "In hypermetropia, rays from near point focus behind the retina. A converging convex lens converges rays onto the retina.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q37",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Hard",
    "questionText": "Astigmatism is an eye defect caused by non-spherical curvature of the cornea and is corrected using",
    "options": [
      "Cylindrical lenses",
      "Convex lenses",
      "Concave lenses",
      "Bifocal lenses"
    ],
    "correctAnswer": 0,
    "explanation": "Cylindrical lenses provide different refractive powers along horizontal and vertical meridians to correct corneal asymmetry.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q38",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Medium",
    "questionText": "Presbyopia (old-age defect where eye loses power of accommodation) is corrected using",
    "options": [
      "Bifocal lenses (upper concave for distance, lower convex for reading)",
      "Monofocal concave",
      "Cylindrical lenses",
      "Contact lenses"
    ],
    "correctAnswer": 0,
    "explanation": "Bifocal lenses combine upper concave segment for distance viewing and lower convex segment for close reading.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q39",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Easy",
    "questionText": "The focal length of a normal human eye when looking at an object at infinity is approximately equal to",
    "options": [
      "Diameter of the eyeball (~ 2.5 cm)",
      "25 cm",
      "1 metre",
      "10 cm"
    ],
    "correctAnswer": 0,
    "explanation": "Parallel rays focus on the retina, so f ≈ distance from lens to retina ≈ 2.5 cm (Power ≈ +40 D to +60 D).",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q40",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Medium",
    "questionText": "In a compound microscope, the focal length of the objective lens f_o and eyepiece lens f_e satisfy",
    "options": [
      "f_o < f_e (both small)",
      "f_o > f_e",
      "f_o = f_e = large",
      "f_o = ∞"
    ],
    "correctAnswer": 0,
    "explanation": "Both lenses have short focal lengths to maximize magnification, with f_o < f_e to form a magnified intermediate real image.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q41",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Hard",
    "questionText": "In a refracting astronomical telescope, the focal length of objective f_o and eyepiece f_e satisfy",
    "options": [
      "f_o >> f_e (f_o large, f_e small)",
      "f_o << f_e",
      "f_o = f_e",
      "f_e >> f_o"
    ],
    "correctAnswer": 0,
    "explanation": "Objective focal length f_o is very large while eyepiece f_e is small, giving large angular magnification M = f_o / f_e.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q42",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Medium",
    "questionText": "A Cassegrain reflecting telescope uses which combination of mirrors?",
    "options": [
      "Large concave primary parabolic mirror and small convex secondary mirror",
      "Two plane mirrors",
      "Concave lens and convex mirror",
      "Two convex mirrors"
    ],
    "correctAnswer": 0,
    "explanation": "Cassegrain design uses large parabolic concave primary with a hole and convex hyperbolic secondary mirror, eliminating chromatic aberration and reducing tube size.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q43",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Easy",
    "questionText": "A ray of light is incident at 60° on one face of an equilateral prism (A = 60°). If the ray suffers minimum deviation, the refractive index of prism is",
    "options": [
      "√3 ≈ 1.732",
      "1.5",
      "√2 ≈ 1.414",
      "1.33"
    ],
    "correctAnswer": 0,
    "explanation": "At minimum deviation r = A/2 = 30°. n = sin i / sin r = sin 60° / sin 30° = (√3/2) / (1/2) = √3 ≈ 1.732.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q44",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Medium",
    "questionText": "When a ray of light enters from air into glass (n = 1.5), its speed and wavelength change as",
    "options": [
      "Speed decreases by factor 1.5, wavelength decreases by factor 1.5, frequency remains constant",
      "Speed decreases, frequency increases",
      "Wavelength remains constant",
      "Speed increases"
    ],
    "correctAnswer": 0,
    "explanation": "v = c / n, λ = λ₀ / n, while frequency ν is invariant (determined solely by the source).",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  },
  {
    "id": "ray-q45",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Ray Optics & Optical Instruments",
    "difficulty": "Hard",
    "questionText": "Two thin convex lenses of focal lengths 20 cm and 30 cm are placed in contact. The focal length and power of combination are",
    "options": [
      "f = 12 cm, P = +8.33 D",
      "f = 50 cm, P = +2 D",
      "f = 10 cm, P = +10 D",
      "f = 60 cm, P = +1.67 D"
    ],
    "correctAnswer": 0,
    "explanation": "1/f = 1/20 + 1/30 = (3+2)/60 = 5/60 = 1/12 => f = +12 cm = 0.12 m. P = 1 / 0.12 = +8.33 D.",
    "tags": [
      "Ray Optics and Optical Instruments",
      "Ray Optics & Optical Instruments"
    ]
  }
];

export const WAVE_OPTICS_QUESTIONS: Question[] = [
  {
    "id": "wave-q1",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Hard",
    "questionText": "Huygens' wave theory explains light propagation by considering wavefronts. A wavefront is defined as the locus of all points",
    "options": [
      "Oscillating in the same phase",
      "Having zero amplitude",
      "Having maximum frequency",
      "Perpendicular to the source"
    ],
    "correctAnswer": 0,
    "explanation": "A wavefront is the continuous locus of all adjacent points in a medium vibrating with identical phase.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q2",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Medium",
    "questionText": "The wavefront emanating from a point source in an isotropic medium is",
    "options": [
      "Spherical",
      "Cylindrical",
      "Plane",
      "Elliptical"
    ],
    "correctAnswer": 0,
    "explanation": "A point source radiates spherical waves outward in all directions, creating concentric spherical wavefronts.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q3",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Easy",
    "questionText": "At a very large distance from a localized light source, spherical or cylindrical wavefronts appear as",
    "options": [
      "Plane wavefronts",
      "Hyperbolic wavefronts",
      "Circular wavefronts",
      "Elliptical wavefronts"
    ],
    "correctAnswer": 0,
    "explanation": "A tiny section of a spherical wavefront with radius R -> ∞ has negligible curvature and behaves as a plane wavefront.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q4",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Medium",
    "questionText": "According to Huygens' principle, each point on a primary wavefront acts as a source of secondary spherical wavelets. The new wavefront is the",
    "options": [
      "Forward envelope (tangent surface) to all secondary wavelets",
      "Backward envelope",
      "Center of wavelets",
      "Radius of curvature"
    ],
    "correctAnswer": 0,
    "explanation": "The forward geometric envelope tangent to all secondary wavelets at time t + Δt forms the new wavefront.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q5",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Hard",
    "questionText": "Two independent monochromatic light sources (e.g. two separate sodium lamps) CANNOT produce sustained interference fringes because",
    "options": [
      "They do not have a constant initial phase difference (mutually incoherent)",
      "Their wavelengths differ",
      "Their intensities differ",
      "Light travels too fast"
    ],
    "correctAnswer": 0,
    "explanation": "Two independent sources emit random, uncorrelated photon wave packets whose phase difference fluctuates wildly on nanosecond timescales (~10⁸ phase jumps/s).",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q6",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Medium",
    "questionText": "In Young's Double Slit Experiment (YDSE) with slit separation d and screen distance D, the fringe width β is given by",
    "options": [
      "β = λ D / d",
      "β = λ d / D",
      "β = d D / λ",
      "β = λ / (d D)"
    ],
    "correctAnswer": 0,
    "explanation": "Fringe width β = y_{n+1} - y_n = λ D / d (uniform for both bright and dark interference fringes).",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q7",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Easy",
    "questionText": "If the entire Young's double slit apparatus is immersed in water of refractive index n = 4/3, the fringe width β will",
    "options": [
      "Decrease by factor 4/3 (β' = β / 1.33)",
      "Increase by factor 4/3",
      "Remain unchanged",
      "Double"
    ],
    "correctAnswer": 0,
    "explanation": "In water λ' = λ / n, so fringe width β' = λ' D / d = β / n = 0.75 β.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q8",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Medium",
    "questionText": "In YDSE, the condition for constructive interference (bright fringe / maximum intensity) at path difference Δx is",
    "options": [
      "Δx = n λ (where n = 0, 1, 2, ...)",
      "Δx = (2n + 1) λ / 2",
      "Δx = (n + 1/2) λ",
      "Δx = n λ / 2"
    ],
    "correctAnswer": 0,
    "explanation": "Constructive interference occurs when path difference Δx = nλ (phase difference Δφ = 2nπ), giving maximum intensity I_max = (√I₁ + √I₂)².",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q9",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Hard",
    "questionText": "The condition for destructive interference (dark fringe / minimum intensity) in YDSE is",
    "options": [
      "Δx = (2n - 1) λ / 2 (where n = 1, 2, 3, ...)",
      "Δx = n λ",
      "Δx = 2n λ",
      "Δx = n λ / 4"
    ],
    "correctAnswer": 0,
    "explanation": "Destructive interference occurs when path difference Δx = (2n - 1) λ / 2 (phase difference Δφ = (2n - 1)π).",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q10",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Medium",
    "questionText": "If two coherent waves of equal intensity I₀ interfere with phase difference φ, the resultant intensity I is",
    "options": [
      "4 I₀ cos²(φ / 2)",
      "2 I₀ cos²(φ)",
      "I₀ cos(φ)",
      "4 I₀ sin²(φ / 2)"
    ],
    "correctAnswer": 0,
    "explanation": "Resultant intensity I = I₁ + I₂ + 2√(I₁ I₂) cos φ = 2 I₀ (1 + cos φ) = 4 I₀ cos²(φ/2).",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q11",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Easy",
    "questionText": "The ratio of maximum to minimum intensity in an interference pattern produced by two slits of width ratio w₁/w₂ = I₁/I₂ is",
    "options": [
      "(√I₁ + √I₂)² / (√I₁ - √I₂)²",
      "(I₁ + I₂)² / (I₁ - I₂)²",
      "I₁ / I₂",
      "(√I₁ - √I₂)² / (√I₁ + √I₂)²"
    ],
    "correctAnswer": 0,
    "explanation": "I_max / I_min = (A₁ + A₂)² / (A₁ - A₂)² = (√I₁ + √I₂)² / (√I₁ - √I₂)².",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q12",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Medium",
    "questionText": "When a thin transparent mica sheet of thickness t and refractive index n is placed in front of one slit in YDSE, the fringe pattern",
    "options": [
      "Shifts by Δy = (n - 1) t D / d towards the covered slit",
      "Shrinks in width",
      "Expands in width",
      "Vanishes completely"
    ],
    "correctAnswer": 0,
    "explanation": "The optical path increases by (n - 1)t, shifting the central white fringe and the entire pattern by Δy = (n - 1) t D / d without altering fringe width β.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q13",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Hard",
    "questionText": "When white light is used in Young's double slit experiment, the central fringe is",
    "options": [
      "White, flanked by a few colored fringes (violet nearest to center)",
      "Dark",
      "Pure red",
      "Pure violet"
    ],
    "correctAnswer": 0,
    "explanation": "At center path difference Δx = 0 for all wavelengths, giving a central white bright fringe; adjacent fringes are colored since β_violet < β_red.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q14",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Medium",
    "questionText": "Diffraction of light refers to the",
    "options": [
      "Bending of light waves around corners of an obstacle/aperture into geometric shadow",
      "Superposition of two independent beams",
      "Reflection from smooth surface",
      "Splitting into 7 colors"
    ],
    "correctAnswer": 0,
    "explanation": "Diffraction is the bending of waves around obstacle edges whose dimensions are comparable to the wavelength of light (a ~ λ).",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q15",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Easy",
    "questionText": "In Fraunhofer single slit diffraction by a slit of width a, the angular width of the central diffraction maximum is",
    "options": [
      "2 λ / a",
      "λ / a",
      "λ / (2a)",
      "4 λ / a"
    ],
    "correctAnswer": 0,
    "explanation": "First minimum occurs at a sin θ = λ => θ ≈ λ/a. The total angular width of the central maximum spans from -λ/a to +λ/a, giving 2λ/a.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q16",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Medium",
    "questionText": "The linear width of the central maximum in single-slit diffraction on a screen at distance D is",
    "options": [
      "2 λ D / a",
      "λ D / a",
      "λ D / (2a)",
      "4 λ D / a"
    ],
    "correctAnswer": 0,
    "explanation": "Linear width W = 2 θ D = 2 λ D / a (twice the width of secondary diffraction maxima).",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q17",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Hard",
    "questionText": "The condition for the n-th secondary minimum in single slit diffraction is",
    "options": [
      "a sin θ = n λ (n = 1, 2, 3, ...)",
      "a sin θ = (2n + 1) λ / 2",
      "a sin θ = n λ / 2",
      "a sin θ = 0"
    ],
    "correctAnswer": 0,
    "explanation": "Minima occur when path difference across entire slit is an integer number of wavelengths: a sin θ = n λ.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q18",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Medium",
    "questionText": "The condition for the n-th secondary maximum in single slit diffraction is",
    "options": [
      "a sin θ = (2n + 1) λ / 2 (n = 1, 2, 3, ...)",
      "a sin θ = n λ",
      "a sin θ = 2n λ",
      "a sin θ = (n + 1) λ"
    ],
    "correctAnswer": 0,
    "explanation": "Secondary maxima occur roughly at path difference a sin θ = (2n + 1) λ / 2.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q19",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Easy",
    "questionText": "Rayleigh's criterion states that two point objects are just resolved when",
    "options": [
      "Central maximum of diffraction pattern of one falls on first minimum of the other",
      "Both central maxima overlap completely",
      "Their intensities are equal",
      "Fringes disappear"
    ],
    "correctAnswer": 0,
    "explanation": "Lord Rayleigh's resolution limit: Two point sources are just resolved when angular separation equals angular radius to first diffraction minimum θ_min = 1.22 λ / D.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q20",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Medium",
    "questionText": "Resolving power of an astronomical telescope with objective aperture diameter D is",
    "options": [
      "D / (1.22 λ)",
      "1.22 λ / D",
      "1.22 D / λ",
      "λ / (1.22 D)"
    ],
    "correctAnswer": 0,
    "explanation": "Limit of resolution dθ = 1.22 λ / D => Resolving Power RP = 1 / dθ = D / (1.22 λ).",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q21",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Hard",
    "questionText": "Resolving power of an optical microscope with objective numerical aperture n sin α is",
    "options": [
      "2 n sin α / (1.22 λ)",
      "1.22 λ / (2 n sin α)",
      "n sin α / λ",
      "λ / (n sin α)"
    ],
    "correctAnswer": 0,
    "explanation": "Limit of resolution d = 1.22 λ / (2 n sin α) => RP = 1 / d = 2 n sin α / (1.22 λ).",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q22",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Medium",
    "questionText": "Brewster's law states that when unpolarized light is incident at polarizing angle i_p, reflected light is completely plane polarized, and",
    "options": [
      "tan i_p = n",
      "sin i_p = n",
      "cos i_p = n",
      "tan i_p = 1 / n"
    ],
    "correctAnswer": 0,
    "explanation": "Brewster's Law: tan i_p = n (where n is refractive index of medium).",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q23",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Easy",
    "questionText": "At Brewster's polarizing angle of incidence i_p, the reflected and refracted rays are",
    "options": [
      "Mutually perpendicular (i_p + r = 90°)",
      "Parallel to each other",
      "In opposite directions",
      "Coincident"
    ],
    "correctAnswer": 0,
    "explanation": "Since tan i_p = sin i_p / cos i_p = sin i_p / sin r => cos i_p = sin r = cos(90° - r) => i_p + r = 90°.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q24",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Medium",
    "questionText": "Malus's law for intensity of plane-polarized light transmitted through an analyzer at angle θ to polarizer axis is",
    "options": [
      "I = I₀ cos² θ",
      "I = I₀ cos θ",
      "I = I₀ sin² θ",
      "I = I₀ / cos² θ"
    ],
    "correctAnswer": 0,
    "explanation": "Malus's Law: I(θ) = I₀ cos² θ, where I₀ is the incident polarized intensity.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q25",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Hard",
    "questionText": "When completely UNPOLARIZED light of intensity I_in passes through an ideal Polaroid sheet, transmitted intensity is",
    "options": [
      "I_in / 2",
      "I_in",
      "I_in / 4",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "An ideal linear polarizer transmits 50% of unpolarized light: I_out = <cos² θ> I_in = (1/2) I_in.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q26",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Medium",
    "questionText": "Two polaroids P₁ and P₂ are crossed (axes at 90°). A third polaroid P₃ is inserted between them with its axis at 45° to P₁. Transmitted intensity of unpolarized light I₀ is",
    "options": [
      "I₀ / 8",
      "I₀ / 4",
      "I₀ / 16",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "After P₁: I₁ = I₀/2. After P₃: I₂ = I₁ cos² 45° = I₀/4. After P₂ (at 45° to P₃): I₃ = I₂ cos² 45° = (I₀/4)(1/2) = I₀/8.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q27",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Easy",
    "questionText": "Polarization proves conclusively that light waves are",
    "options": [
      "Transverse electromagnetic waves",
      "Longitudinal pressure waves",
      "Stationary waves",
      "Scalar potentials"
    ],
    "correctAnswer": 0,
    "explanation": "Longitudinal waves oscillate along the propagation axis and cannot be polarized. Only transverse waves oscillate in orthogonal transverse planes.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q28",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Medium",
    "questionText": "In YDSE, if the distance between slits is doubled (d' = 2d) and screen distance is halved (D' = D/2), the fringe width becomes",
    "options": [
      "One-fourth (β / 4)",
      "Four times (4β)",
      "Half (β / 2)",
      "Unchanged"
    ],
    "correctAnswer": 0,
    "explanation": "β = λ D / d => β' = λ (D/2) / (2d) = (1/4) (λ D / d) = β / 4.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q29",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Hard",
    "questionText": "In YDSE using light of λ = 600 nm, 60 fringes are seen in a field of view. How many fringes will be seen if light of λ = 400 nm is used?",
    "options": [
      "90 fringes",
      "40 fringes",
      "60 fringes",
      "120 fringes"
    ],
    "correctAnswer": 0,
    "explanation": "Total field of view W = n₁ β₁ = n₂ β₂ => n₁ λ₁ = n₂ λ₂ => n₂ = n₁ (λ₁ / λ₂) = 60 × (600 / 400) = 90 fringes.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q30",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Medium",
    "questionText": "The ratio of slit widths in YDSE is 4 : 1. The ratio of maximum to minimum intensity in the interference pattern is",
    "options": [
      "9 : 1",
      "25 : 1",
      "5 : 1",
      "4 : 1"
    ],
    "correctAnswer": 0,
    "explanation": "Slit width ratio w₁/w₂ = I₁/I₂ = 4/1 => Amplitude ratio A₁/A₂ = 2/1. I_max / I_min = (A₁+A₂)² / (A₁-A₂)² = (2+1)² / (2-1)² = 9 / 1.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q31",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Easy",
    "questionText": "In single slit diffraction, if slit width 'a' is doubled, the linear width of central maximum",
    "options": [
      "Halves (becomes W / 2) and intensity quadruples (4 times)",
      "Doubles",
      "Remains same",
      "Becomes four times"
    ],
    "correctAnswer": 0,
    "explanation": "Linear width W = 2λD / a ∝ 1/a (halves). Amplitude A ∝ a, so intensity I₀ ∝ a² (quadruples).",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q32",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Medium",
    "questionText": "Colours observed in thin oil films on water or soap bubbles are caused by",
    "options": [
      "Interference of light reflected from upper and lower film surfaces",
      "Dispersion of light",
      "Diffraction",
      "Polarization"
    ],
    "correctAnswer": 0,
    "explanation": "Path difference between light reflected from top and bottom boundaries creates constructive/destructive interference for specific visible wavelengths.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q33",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Hard",
    "questionText": "When light reflects from an optically denser medium (e.g. air-glass boundary), it undergoes an abrupt phase change of",
    "options": [
      "π rad (180°, equivalent to path difference λ/2)",
      "0 rad",
      "π / 2 rad",
      "2π rad"
    ],
    "correctAnswer": 0,
    "explanation": "Stokes' relations: Reflection at an interface backed by higher refractive index suffers a phase reversal of π radians (λ/2 path shift).",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q34",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Medium",
    "questionText": "Fresnel distance z_F over which ray optics is a valid approximation (diffraction spread is smaller than slit width a) is given by",
    "options": [
      "a² / λ",
      "a / λ²",
      "a λ",
      "√(a λ)"
    ],
    "correctAnswer": 0,
    "explanation": "Fresnel distance z_F = a² / λ. For distances D << z_F, ray optics holds; for D >> z_F, wave diffraction dominates.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q35",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Easy",
    "questionText": "For an aperture of size a = 3 mm and light of λ = 500 nm, the Fresnel distance z_F is",
    "options": [
      "18 m",
      "1.8 m",
      "180 m",
      "0.18 m"
    ],
    "correctAnswer": 0,
    "explanation": "z_F = a² / λ = (3 × 10⁻³)² / (500 × 10⁻⁹) = (9 × 10⁻⁶) / (5 × 10⁻⁷) = 18 metres.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q36",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Medium",
    "questionText": "If unpolarized light is incident on a glass plate of n = 1.5 at polarizing angle i_p, Brewster's angle is",
    "options": [
      "56.3° (tan⁻¹ 1.5)",
      "45.0°",
      "30.0°",
      "60.0°"
    ],
    "correctAnswer": 0,
    "explanation": "i_p = tan⁻¹(1.5) ≈ 56.3°.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q37",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Hard",
    "questionText": "The phenomenon of diffraction can be observed with",
    "options": [
      "All waves (sound waves, radio waves, light waves, matter waves)",
      "Light waves only",
      "Sound waves only",
      "Transverse waves only"
    ],
    "correctAnswer": 0,
    "explanation": "Diffraction is an intrinsic universal wave property exhibited whenever wave encounters an opening/barrier of size comparable to wavelength.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q38",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Medium",
    "questionText": "Why is diffraction of sound waves much more commonly observed in daily life than diffraction of light waves?",
    "options": [
      "Wavelength of sound (~ 1 m) is comparable to everyday openings (doors/windows), while light wavelength is extremely tiny (~ 10⁻⁷ m)",
      "Sound travels slower",
      "Sound is longitudinal",
      "Sound has higher energy"
    ],
    "correctAnswer": 0,
    "explanation": "Diffraction is pronounced only when obstacle size ~ λ. Everyday room openings match sound wavelengths (~ 1 m) but dwarf optical wavelengths (~ 500 nm).",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q39",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Easy",
    "questionText": "A beam of light of wavelength 600 nm passes through a slit of width 0.2 mm. Angular spread of central diffraction peak is",
    "options": [
      "6 × 10⁻³ rad",
      "3 × 10⁻³ rad",
      "1.2 × 10⁻³ rad",
      "6 × 10⁻² rad"
    ],
    "correctAnswer": 0,
    "explanation": "2 θ = 2 λ / a = 2 × (600 × 10⁻⁹) / (0.2 × 10⁻³) = 1.2 × 10⁻⁶ / 2 × 10⁻⁴ = 6 × 10⁻³ radians.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q40",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Medium",
    "questionText": "Polaroid sunglasses are preferred over ordinary tinted sunglasses because they",
    "options": [
      "Selectively cut off horizontally polarized glare reflected from road and water surfaces",
      "Make everything completely dark",
      "Magnify images",
      "Block all light"
    ],
    "correctAnswer": 0,
    "explanation": "Reflected glare from horizontal surfaces is predominantly horizontally polarized. Vertical transmission-axis Polaroid lenses extinguish this glare completely.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q41",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Hard",
    "questionText": "Two coherent sources have intensity ratio 100 : 1. The contrast (fringe visibility) V = (I_max - I_min) / (I_max + I_min) is",
    "options": [
      "0.198 (approx 0.20)",
      "1.00",
      "0.50",
      "0.01"
    ],
    "correctAnswer": 0,
    "explanation": "I_max = (10+1)² = 121, I_min = (10-1)² = 81. Visibility V = (121 - 81) / (121 + 81) = 40 / 202 ≈ 0.198.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q42",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Medium",
    "questionText": "In YDSE, if monochromatic red light (λ = 700 nm) is replaced by blue light (λ = 400 nm), the interference fringes",
    "options": [
      "Become narrower and come closer together",
      "Become wider and spread out",
      "Disappear",
      "Remain unchanged"
    ],
    "correctAnswer": 0,
    "explanation": "Fringe width β = λ D / d ∝ λ. Since λ_blue < λ_red, fringes contract and pack more closely together.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q43",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Easy",
    "questionText": "Corpuscular theory of light proposed by Sir Isaac Newton predicted incorrectly that",
    "options": [
      "Light travels FASTER in optically denser medium than in vacuum",
      "Light is a wave",
      "Light travels slower in glass",
      "Light cannot reflect"
    ],
    "correctAnswer": 0,
    "explanation": "Newton's corpuscular model assumed attractive forces pull light particles into denser media, predicting v_glass > v_air (Foucault disproved this in 1850).",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q44",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Medium",
    "questionText": "Which of the following is essential for observing sustained interference?",
    "options": [
      "Coherent sources with constant phase difference",
      "Monochromatic sources",
      "Equal amplitudes for high contrast",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "Constant phase relationship (coherence), single frequency (monochromaticity), and near-equal amplitudes ensure sharp, permanent, high-contrast fringes.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  },
  {
    "id": "wave-q45",
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "Wave Optics & Interference",
    "difficulty": "Hard",
    "questionText": "The wavefront corresponding to a line source (such as a thin glowing linear slit) at finite distance is",
    "options": [
      "Cylindrical",
      "Spherical",
      "Plane",
      "Conical"
    ],
    "correctAnswer": 0,
    "explanation": "Every point along the line radiates spherical waves; their envelope forms a coaxial cylindrical wavefront.",
    "tags": [
      "Wave Optics",
      "Wave Optics & Interference"
    ]
  }
];

export const DUAL_NATURE_QUESTIONS: Question[] = [
  {
    "id": "dual-q1",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Hard",
    "questionText": "The energy E of a photon of frequency ν and wavelength λ is given by Planck-Einstein relation",
    "options": [
      "E = h ν = h c / λ",
      "E = h / ν",
      "E = h λ / c",
      "E = h c λ"
    ],
    "correctAnswer": 0,
    "explanation": "Photon energy E = h ν = h c / λ (where h ≈ 6.626 × 10⁻³⁴ J·s).",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q2",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Medium",
    "questionText": "The momentum p of a photon of wavelength λ is",
    "options": [
      "p = h / λ = E / c",
      "p = h λ",
      "p = E · c",
      "p = h c / λ"
    ],
    "correctAnswer": 0,
    "explanation": "de Broglie-Einstein momentum p = h / λ = h ν / c = E / c.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q3",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Easy",
    "questionText": "The rest mass of a photon in free space is strictly",
    "options": [
      "Zero",
      "h ν / c²",
      "1.67 × 10⁻²⁷ kg",
      "9.1 × 10⁻³¹ kg"
    ],
    "correctAnswer": 0,
    "explanation": "A photon travels at speed c in all inertial frames; its relativistic invariant rest mass m₀ = 0.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q4",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Medium",
    "questionText": "The minimum energy required by an electron to escape from a metal surface is called its",
    "options": [
      "Work function (Φ₀ = h ν₀)",
      "Ionization energy",
      "Binding energy",
      "Excitation energy"
    ],
    "correctAnswer": 0,
    "explanation": "Work function Φ₀ is the minimum threshold energy required to liberate conduction electrons from Fermi level to vacuum.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q5",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Hard",
    "questionText": "Einstein's photoelectric equation relating incident photon frequency ν, work function Φ₀, and maximum kinetic energy K_max is",
    "options": [
      "K_max = h ν - Φ₀ = e V₀",
      "K_max = h ν + Φ₀",
      "K_max = Φ₀ - h ν",
      "K_max = h ν / Φ₀"
    ],
    "correctAnswer": 0,
    "explanation": "Einstein's photoelectric equation: K_max = (1/2) m v_max² = h ν - Φ₀ = e V₀ (where V₀ is stopping potential).",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q6",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Medium",
    "questionText": "The stopping potential V₀ in a photoelectric experiment depends solely on",
    "options": [
      "Frequency (or wavelength) of incident light and work function of target metal",
      "Intensity of incident light",
      "Distance of light source",
      "Area of illuminated plate"
    ],
    "correctAnswer": 0,
    "explanation": "e V₀ = h ν - Φ₀ => V₀ = (h/e) ν - (Φ₀/e). Stopping potential is independent of light intensity.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q7",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Easy",
    "questionText": "The photoelectric saturation current is directly proportional to",
    "options": [
      "Intensity of incident radiation (number of incident photons per second)",
      "Frequency of incident light",
      "Stopping potential",
      "Work function"
    ],
    "correctAnswer": 0,
    "explanation": "One photon liberates at most one photoelectron. Higher intensity = more photons per second = higher rate of electron emission = higher saturation current.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q8",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Medium",
    "questionText": "Photoelectric emission occurs only when the frequency of incident radiation is",
    "options": [
      "Greater than or equal to threshold frequency (ν ≥ ν₀)",
      "Less than threshold frequency",
      "Equal to zero",
      "Any arbitrary frequency"
    ],
    "correctAnswer": 0,
    "explanation": "If ν < ν₀, photon energy hν < Φ₀, so no electron can ever be emitted regardless of how intense the beam is.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q9",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Hard",
    "questionText": "The slope of the graph between stopping potential V₀ and frequency ν of incident radiation is",
    "options": [
      "h / e (universal constant)",
      "h",
      "e / h",
      "Φ₀ / e"
    ],
    "correctAnswer": 0,
    "explanation": "V₀ = (h/e) ν - (Φ₀/e). The slope is h/e, which is identical for all metals.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q10",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Medium",
    "questionText": "The de Broglie wavelength λ of a particle of mass m moving with velocity v (momentum p) is",
    "options": [
      "λ = h / p = h / (m v)",
      "λ = h m v",
      "λ = p / h",
      "λ = m v / h"
    ],
    "correctAnswer": 0,
    "explanation": "de Broglie hypothesis: λ = h / p = h / (m v).",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q11",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Easy",
    "questionText": "The de Broglie wavelength λ of an electron accelerated from rest through a potential difference V (in volts) is",
    "options": [
      "λ = 1.227 / √V nm (or 12.27 / √V Å)",
      "λ = 122.7 / √V nm",
      "λ = √V / 1.227 nm",
      "λ = 1.227 √V nm"
    ],
    "correctAnswer": 0,
    "explanation": "λ = h / √(2 m_e e V) = 1.227 / √V nm = 12.27 / √V Å.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q12",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Medium",
    "questionText": "If an electron is accelerated through a potential difference of 100 V, its de Broglie wavelength is",
    "options": [
      "0.123 nm (1.23 Å)",
      "1.23 nm",
      "12.3 nm",
      "0.012 nm"
    ],
    "correctAnswer": 0,
    "explanation": "λ = 1.227 / √100 = 1.227 / 10 = 0.1227 nm ≈ 0.123 nm.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q13",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Hard",
    "questionText": "The de Broglie wavelength of a thermal neutron at absolute temperature T (mass m_n) is",
    "options": [
      "h / √(3 m_n k_B T)",
      "h / √(2 m_n k_B T)",
      "√(3 m_n k_B T) / h",
      "h / (m_n k_B T)"
    ],
    "correctAnswer": 0,
    "explanation": "Average thermal kinetic energy K = (3/2) k_B T => p = √(2 m K) = √(3 m k_B T) => λ = h / √(3 m k_B T).",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q14",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Medium",
    "questionText": "Wave nature of electrons was experimentally confirmed for the first time by",
    "options": [
      "Davisson and Germer experiment",
      "Rutherford alpha scattering",
      "Millikan oil drop experiment",
      "Thomson cathode ray experiment"
    ],
    "correctAnswer": 0,
    "explanation": "Davisson and Germer observed diffraction peaks of 54 eV electrons scattered from nickel crystals, confirming de Broglie's relation.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q15",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Easy",
    "questionText": "In the Davisson-Germer experiment, maximum constructive diffraction of electrons occurs at an accelerating voltage of",
    "options": [
      "54 V and scattering angle 50°",
      "100 V and 90°",
      "54 V and 90°",
      "220 V and 45°"
    ],
    "correctAnswer": 0,
    "explanation": "A prominent peak in scattered electron intensity occurs at V = 54 V and θ = 50°, matching Bragg diffraction λ = 0.165 nm.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q16",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Medium",
    "questionText": "An electron and a proton have the same kinetic energy. The ratio of their de Broglie wavelengths λ_e / λ_p is",
    "options": [
      "√(m_p / m_e) ≈ 43",
      "√(m_e / m_p)",
      "m_p / m_e",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "λ = h / √(2 m K). For equal K: λ_e / λ_p = √(m_p / m_e) ≈ √(1836) ≈ 42.8.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q17",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Hard",
    "questionText": "An electron, an alpha particle, and a proton have the same de Broglie wavelength. Which one has the HIGHEST momentum?",
    "options": [
      "All three have the same momentum (p = h / λ)",
      "Alpha particle",
      "Proton",
      "Electron"
    ],
    "correctAnswer": 0,
    "explanation": "Since p = h / λ, equal de Broglie wavelength strictly implies identical momentum p.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q18",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Medium",
    "questionText": "In the above case, which particle has the HIGHEST kinetic energy?",
    "options": [
      "Electron (lightest mass)",
      "Alpha particle",
      "Proton",
      "All have equal kinetic energy"
    ],
    "correctAnswer": 0,
    "explanation": "K = p² / (2m). With p equal, kinetic energy is inversely proportional to mass (K ∝ 1/m). The lightest electron has the highest K.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q19",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Easy",
    "questionText": "Photoelectric emission is an instantaneous process with time lag between photon incidence and electron ejection of order",
    "options": [
      "< 10⁻⁹ s (1 nanosecond)",
      "1 s",
      "10⁻³ s",
      "10⁻⁶ s"
    ],
    "correctAnswer": 0,
    "explanation": "Photoelectric emission is virtually instantaneous (~ 10⁻⁹ to 10⁻¹⁰ s) because it involves a single 1-to-1 quantum photon-electron collision.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q20",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Medium",
    "questionText": "The work function of Caesium (Cs) is 2.14 eV. Its threshold frequency ν₀ is approximately",
    "options": [
      "5.16 × 10¹⁴ Hz",
      "5.16 × 10¹⁵ Hz",
      "5.16 × 10¹³ Hz",
      "1.0 × 10¹⁴ Hz"
    ],
    "correctAnswer": 0,
    "explanation": "Φ₀ = 2.14 × 1.6 × 10⁻¹⁹ J = 3.424 × 10⁻¹⁹ J. ν₀ = Φ₀ / h = (3.424 × 10⁻¹⁹) / (6.626 × 10⁻³⁴) ≈ 5.16 × 10¹⁴ Hz.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q21",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Hard",
    "questionText": "Which of the following metals has the lowest work function and is widely used in photoelectric cells?",
    "options": [
      "Caesium (Cs)",
      "Platinum (Pt)",
      "Copper (Cu)",
      "Iron (Fe)"
    ],
    "correctAnswer": 0,
    "explanation": "Alkali metal Caesium has the lowest work function (Φ₀ ≈ 2.14 eV), responding photoelectrically across the full visible spectrum.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q22",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Medium",
    "questionText": "If the intensity of light incident on a photocell is doubled, the stopping potential",
    "options": [
      "Remains unchanged",
      "Doubles",
      "Halves",
      "Quadruples"
    ],
    "correctAnswer": 0,
    "explanation": "Stopping potential depends only on photon energy (hν) and work function (Φ₀), not on beam intensity.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q23",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Easy",
    "questionText": "If the frequency of incident radiation ν is doubled (ν > ν₀), the maximum kinetic energy of emitted photoelectrons",
    "options": [
      "Increases to MORE than double its initial value",
      "Doubles exactly",
      "Remains unchanged",
      "Halves"
    ],
    "correctAnswer": 0,
    "explanation": "K₁ = hν - Φ₀. K₂ = 2hν - Φ₀ = 2(hν - Φ₀) + Φ₀ = 2K₁ + Φ₀ > 2K₁ (more than doubles).",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q24",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Medium",
    "questionText": "Dynamic (relativistic) mass m of a photon of frequency ν is",
    "options": [
      "h ν / c²",
      "Zero",
      "h c / ν",
      "h ν / c"
    ],
    "correctAnswer": 0,
    "explanation": "E = m c² = h ν => Relativistic inertial mass m = h ν / c².",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q25",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Hard",
    "questionText": "An electron microscope uses fast electrons instead of visible light because",
    "options": [
      "High-energy electrons have extremely small de Broglie wavelengths, providing ultra-high resolving power",
      "Electrons are cheaper",
      "Electrons do not refract",
      "Electrons create color images"
    ],
    "correctAnswer": 0,
    "explanation": "Fast electrons (100 keV) have λ ~ 0.004 nm (100,000× smaller than light), enabling magnification up to 1,000,000× and sub-angstrom resolution.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q26",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Medium",
    "questionText": "In Compton scattering, an X-ray photon collides with a stationary electron. The scattered photon has",
    "options": [
      "Longer wavelength (lower frequency/energy)",
      "Shorter wavelength",
      "Same wavelength",
      "Zero speed"
    ],
    "correctAnswer": 0,
    "explanation": "Compton shift Δλ = λ' - λ = (h / m_e c)(1 - cos θ) > 0. The scattered photon imparts kinetic energy to recoil electron, increasing its wavelength.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q27",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Easy",
    "questionText": "Compton wavelength of an electron λ_c = h / (m_e c) is equal to",
    "options": [
      "0.0243 Å (2.426 pm)",
      "0.243 Å",
      "2.426 Å",
      "0.0024 Å"
    ],
    "correctAnswer": 0,
    "explanation": "λ_c = (6.626 × 10⁻³⁴) / (9.1 × 10⁻³¹ × 3 × 10⁸) = 2.426 × 10⁻¹² m = 0.02426 Å.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q28",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Medium",
    "questionText": "When light of wavelength 3000 Å falls on a metal of work function 2.0 eV, maximum kinetic energy of photoelectrons is (take hc = 12400 eV·Å)",
    "options": [
      "2.13 eV",
      "4.13 eV",
      "1.13 eV",
      "0.13 eV"
    ],
    "correctAnswer": 0,
    "explanation": "Photon energy E = 12400 / 3000 = 4.133 eV. K_max = E - Φ₀ = 4.133 - 2.0 = 2.133 eV.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q29",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Hard",
    "questionText": "The de Broglie wavelength of an uncharged ball of mass 0.1 kg moving at 10 m/s is",
    "options": [
      "6.63 × 10⁻³⁴ m",
      "6.63 × 10⁻³² m",
      "6.63 × 10⁻³⁶ m",
      "1.0 m"
    ],
    "correctAnswer": 0,
    "explanation": "λ = h / (m v) = (6.626 × 10⁻³⁴) / (0.1 × 10) = 6.626 × 10⁻³⁴ m (undetectably minute for macroscopic objects).",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q30",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Medium",
    "questionText": "Heisenberg's Uncertainty Principle states that for a microscopic particle",
    "options": [
      "Δx · Δp ≥ ℏ / 2 (where ℏ = h / 2π)",
      "Δx · Δp = 0",
      "Δx / Δp ≥ ℏ",
      "Δx · Δp = h"
    ],
    "correctAnswer": 0,
    "explanation": "Heisenberg Uncertainty Principle: Δx Δp_x ≥ h / (4π) = ℏ / 2.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q31",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Easy",
    "questionText": "Why cannot an electron reside permanently INSIDE an atomic nucleus of radius ~ 10⁻¹⁴ m?",
    "options": [
      "Heisenberg uncertainty requires an electron confined to ~ 10⁻¹⁴ m to have kinetic energy > 20 MeV, far exceeding nuclear binding wells",
      "Electron has no mass",
      "Coulomb repulsion",
      "Pauli exclusion"
    ],
    "correctAnswer": 0,
    "explanation": "With Δx ~ 10⁻¹⁴ m, Δp ~ ℏ / Δx => K_e ~ (Δp)² / 2m > 20 MeV. No nuclear potential well can bind an electron with such kinetic energy.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q32",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Medium",
    "questionText": "Threshold wavelength λ₀ for photoelectric emission from a metal of work function Φ₀ is",
    "options": [
      "h c / Φ₀",
      "Φ₀ / (h c)",
      "h / (c Φ₀)",
      "c / (h Φ₀)"
    ],
    "correctAnswer": 0,
    "explanation": "Φ₀ = h c / λ₀ => λ₀ = h c / Φ₀.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q33",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Hard",
    "questionText": "If the wavelength of light incident on a metal is decreased from 400 nm to 300 nm, stopping potential",
    "options": [
      "Increases",
      "Decreases",
      "Remains same",
      "Becomes zero"
    ],
    "correctAnswer": 0,
    "explanation": "Decreasing wavelength increases photon energy E = hc/λ, increasing K_max and raising stopping potential V₀.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q34",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Medium",
    "questionText": "A 100 W bulb converts 5% of its power into monochromatic light of wavelength 600 nm. Number of photons emitted per second is",
    "options": [
      "1.5 × 10¹⁹ photons/s",
      "1.5 × 10¹⁸",
      "3.0 × 10²⁰",
      "5.0 × 10¹⁷"
    ],
    "correctAnswer": 0,
    "explanation": "Optical power P_opt = 5 W. Energy per photon E = hc / λ = (6.63 × 10⁻³⁴ × 3 × 10⁸)/(600 × 10⁻⁹) = 3.315 × 10⁻¹⁹ J. N = P/E = 5 / 3.315 × 10⁻¹⁹ ≈ 1.51 × 10¹⁹ s⁻¹.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q35",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Easy",
    "questionText": "When ultraviolet light is incident on a zinc plate attached to a negatively charged electroscope, the electroscope leaves",
    "options": [
      "Collapse (divergence decreases as negative charge escapes)",
      "Diverge further",
      "Remain unaffected",
      "Vibrate"
    ],
    "correctAnswer": 0,
    "explanation": "UV photons eject photoelectrons, neutralizing the negative charge on the electroscope and causing the gold leaves to collapse.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q36",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Medium",
    "questionText": "Which experiment directly established the particle (quantum) nature of light?",
    "options": [
      "Photoelectric effect and Compton effect",
      "Young's double slit interference",
      "Single slit diffraction",
      "Brewster polarization"
    ],
    "correctAnswer": 0,
    "explanation": "Photoelectric effect and Compton scattering demonstrate localized discrete energy-momentum exchange (quanta/photons).",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q37",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Hard",
    "questionText": "Continuous X-ray spectrum (Bremsstrahlung) has a sharp short-wavelength cutoff λ_min (Duane-Hunt limit) given by",
    "options": [
      "λ_min = h c / (e V)",
      "λ_min = e V / (h c)",
      "λ_min = h / (e V)",
      "λ_min = c / (h e V)"
    ],
    "correctAnswer": 0,
    "explanation": "When an electron loses its entire kinetic energy eV in a single bremsstrahlung collision: h ν_max = e V => λ_min = h c / (e V).",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q38",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Medium",
    "questionText": "If the operating voltage across an X-ray Coolidge tube is 50 kV, the minimum wavelength λ_min is",
    "options": [
      "0.248 Å (0.0248 nm)",
      "0.496 Å",
      "1.24 Å",
      "0.05 Å"
    ],
    "correctAnswer": 0,
    "explanation": "λ_min = 12400 / 50000 = 0.248 Å = 0.0248 nm.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q39",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Easy",
    "questionText": "Characteristic X-ray emission lines (K_α, K_β) originate from",
    "options": [
      "Electronic transitions between inner atomic shells of the anode target metal",
      "Nuclear transitions",
      "Deceleration in target field",
      "Thermal heating"
    ],
    "correctAnswer": 0,
    "explanation": "Fast bombarding electrons knock out inner K-shell electrons; outer L/M shell electrons drop down to fill the vacancy, emitting characteristic X-ray photons.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q40",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Medium",
    "questionText": "Moseley's law relates the frequency ν of characteristic X-rays to atomic number Z as",
    "options": [
      "√ν = a (Z - b)",
      "ν = a (Z - b)²",
      "√ν = a Z",
      "ν = a Z²"
    ],
    "correctAnswer": 0,
    "explanation": "Moseley's law: √ν = a (Z - b), establishing that atomic number Z (nuclear charge) is the fundamental atomic parameter.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q41",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Hard",
    "questionText": "For K_α characteristic X-ray radiation, screening constant b in Moseley's law is",
    "options": [
      "1",
      "7.4",
      "2",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "For K-shell transitions (L -> K), screening constant b = 1 (one remaining K electron shields the nuclear charge).",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q42",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Medium",
    "questionText": "In photoelectric effect, the maximum kinetic energy of photoelectrons is independent of",
    "options": [
      "Intensity of incident radiation",
      "Frequency of incident radiation",
      "Work function of target metal",
      "Nature of metal surface"
    ],
    "correctAnswer": 0,
    "explanation": "K_max depends only on photon energy hν and work function Φ₀; it is completely independent of light intensity.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q43",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Easy",
    "questionText": "The ratio of de Broglie wavelength of an alpha particle to a proton accelerated through the same potential difference V is",
    "options": [
      "1 / (2√2)",
      "1 / 2",
      "2√2",
      "1 / 4"
    ],
    "correctAnswer": 0,
    "explanation": "λ = h / √(2 q m V). λ_α / λ_p = √[(q_p m_p) / (q_α m_α)] = √[(1 × 1) / (2 × 4)] = 1 / √8 = 1 / (2√2).",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q44",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Medium",
    "questionText": "The velocity of a de Broglie phase wave (v_phase = ω / k) for a relativistic particle with speed v is",
    "options": [
      "c² / v (> c)",
      "v",
      "c",
      "v² / c"
    ],
    "correctAnswer": 0,
    "explanation": "v_phase = E / p = (γ m c²) / (γ m v) = c² / v > c (phase velocity exceeds c, while group velocity v_group = dω/dk = v carries information).",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  },
  {
    "id": "dual-q45",
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "Dual Nature of Radiation & Matter",
    "difficulty": "Hard",
    "questionText": "Photocells (solar cells, LDRs, phototubes) are used in",
    "options": [
      "Automatic street light switches",
      "Burglar alarms and light meters",
      "Solar power generators",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "Photocells convert incident light into electrical signals or power across industrial control, security, and renewable energy devices.",
    "tags": [
      "Dual Nature of Radiation and Matter",
      "Dual Nature of Radiation & Matter"
    ]
  }
];

export const ATOMS_PHYSICS_QUESTIONS: Question[] = [
  {
    "id": "atom-q1",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Hard",
    "questionText": "In the Geiger-Marsden (Rutherford) alpha-particle scattering experiment, the fraction of alpha particles scattered at angles > 90° was approximately",
    "options": [
      "1 in 8000 (~ 0.0125%)",
      "1 in 10",
      "1 in 100",
      "50%"
    ],
    "correctAnswer": 0,
    "explanation": "Only about 1 in 8000 alpha particles suffered large deflections > 90°, proving the atomic positive charge is concentrated in a tiny dense nucleus.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q2",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Medium",
    "questionText": "Rutherford's alpha scattering formula predicts that number of scattered particles N(θ) at angle θ is proportional to",
    "options": [
      "1 / sin⁴(θ / 2)",
      "1 / sin²(θ / 2)",
      "sin⁴(θ / 2)",
      "1 / cos⁴(θ / 2)"
    ],
    "correctAnswer": 0,
    "explanation": "Rutherford scattering differential cross-section: N(θ) ∝ 1 / sin⁴(θ/2).",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q3",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Easy",
    "questionText": "The distance of closest approach r₀ of an alpha particle of kinetic energy K approaching a gold nucleus (charge Ze) head-on is",
    "options": [
      "r₀ = (1 / (4πε₀)) · (2 Z e² / K)",
      "(1 / (4πε₀)) · (Z e² / K)",
      "(1 / (4πε₀)) · (2 Z e² / K²)",
      "K / (2 Z e²)"
    ],
    "correctAnswer": 0,
    "explanation": "At closest approach all kinetic energy converts to electrostatic potential energy: K = (1/4πε₀)(2e)(Ze)/r₀ => r₀ = (1/4πε₀)(2Ze² / K).",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q4",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Medium",
    "questionText": "The classical Rutherford planetary model was unstable because according to Maxwell's electrodynamics,",
    "options": [
      "Accelerating revolving electrons must continuously radiate EM energy and spiral into the nucleus in ~ 10⁻¹⁰ s",
      "Electrons repel each other",
      "Protons decay",
      "Nucleus is too heavy"
    ],
    "correctAnswer": 0,
    "explanation": "Centripetal acceleration a = v²/r demands continuous dipole radiation; the electron loses orbital energy and crashes into the nucleus.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q5",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Hard",
    "questionText": "Bohr's first quantization postulate states that an electron orbits only in non-radiating stationary states where orbital angular momentum L is",
    "options": [
      "L = m v r = n h / (2π) = n ℏ (n = 1, 2, 3, ...)",
      "L = n h",
      "L = 2π n / h",
      "L = n² h / (2π)"
    ],
    "correctAnswer": 0,
    "explanation": "Bohr quantization: Angular momentum L = m_e v r = n ℏ = n h / (2π).",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q6",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Medium",
    "questionText": "Bohr radius a₀ (radius of the ground state n = 1 of hydrogen atom Z = 1) is approximately",
    "options": [
      "0.529 Å (0.0529 nm)",
      "5.29 Å",
      "0.0529 Å",
      "1.0 Å"
    ],
    "correctAnswer": 0,
    "explanation": "a₀ = ε₀ h² / (π m_e e²) ≈ 0.529 × 10⁻¹⁰ m = 0.529 Å. In general r_n = 0.529 (n² / Z) Å.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q7",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Easy",
    "questionText": "The orbital radius r_n of an electron in a hydrogen-like atom of atomic number Z scales with principal quantum number n as",
    "options": [
      "r_n ∝ n² / Z",
      "r_n ∝ n / Z",
      "r_n ∝ n² Z",
      "r_n ∝ 1 / n²"
    ],
    "correctAnswer": 0,
    "explanation": "r_n = (ε₀ h² / π m e²) · (n² / Z) ∝ n² / Z.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q8",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Medium",
    "questionText": "The orbital speed v_n of an electron in the n-th Bohr orbit scales as",
    "options": [
      "v_n ∝ Z / n",
      "v_n ∝ n / Z",
      "v_n ∝ Z / n²",
      "v_n ∝ n² / Z"
    ],
    "correctAnswer": 0,
    "explanation": "v_n = (e² / 2 ε₀ h) · (Z / n) = c α (Z / n) ∝ Z / n (where fine structure constant α ≈ 1/137).",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q9",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Hard",
    "questionText": "The total energy E_n of an electron in the n-th orbit of hydrogen-like atom (Z) is",
    "options": [
      "E_n = -13.6 (Z² / n²) eV",
      "+13.6 (Z² / n²) eV",
      "-13.6 (Z / n) eV",
      "-13.6 (Z² / n⁴) eV"
    ],
    "correctAnswer": 0,
    "explanation": "Total energy E_n = - (m e⁴ / 8 ε₀² h²) · (Z² / n²) = -13.6 (Z² / n²) eV.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q10",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Medium",
    "questionText": "In a hydrogen atom, the relation between Kinetic Energy (K), Potential Energy (U), and Total Energy (E) is",
    "options": [
      "K = -E and U = 2E",
      "K = E and U = -E",
      "K = -2E and U = E",
      "K = U / 2"
    ],
    "correctAnswer": 0,
    "explanation": "By the Virial Theorem: U = -2K, so Total Energy E = K + U = -K = U / 2 => K = -E and U = 2E.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q11",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Easy",
    "questionText": "For ground state hydrogen atom (n = 1, E₁ = -13.6 eV), the Kinetic Energy K and Potential Energy U are",
    "options": [
      "K = +13.6 eV, U = -27.2 eV",
      "K = -13.6 eV, U = +27.2 eV",
      "K = +27.2 eV, U = -13.6 eV",
      "K = +13.6 eV, U = -13.6 eV"
    ],
    "correctAnswer": 0,
    "explanation": "K = -E₁ = +13.6 eV; U = 2 E₁ = -27.2 eV.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q12",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Medium",
    "questionText": "The ionization energy of hydrogen atom from its ground state is",
    "options": [
      "+13.6 eV",
      "-13.6 eV",
      "+3.4 eV",
      "+1.51 eV"
    ],
    "correctAnswer": 0,
    "explanation": "Ionization energy = E_∞ - E₁ = 0 - (-13.6 eV) = +13.6 eV.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q13",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Hard",
    "questionText": "Ionization energy of singly ionized Helium He⁺ (Z = 2) from ground state is",
    "options": [
      "54.4 eV",
      "13.6 eV",
      "27.2 eV",
      "108.8 eV"
    ],
    "correctAnswer": 0,
    "explanation": "E₁ (He⁺) = -13.6 × (2² / 1²) = -13.6 × 4 = -54.4 eV => Ionization energy = +54.4 eV.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q14",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Medium",
    "questionText": "Rydberg formula for the wavenumber ν̄ (1/λ) of spectral emission line in hydrogen (Z = 1) is",
    "options": [
      "1/λ = R_H (1/n₁² - 1/n₂²)",
      "1/λ = R_H (1/n₁ - 1/n₂)",
      "1/λ = R_H (n₁² - n₂²)",
      "1/λ = R_H (1/n₁² + 1/n₂²)"
    ],
    "correctAnswer": 0,
    "explanation": "Rydberg formula: 1/λ = R_H (1/n₁² - 1/n₂²), where R_H ≈ 1.097 × 10⁷ m⁻¹.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q15",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Easy",
    "questionText": "The Lyman spectral series of hydrogen atom corresponds to transitions ending at n₁ = 1 (from n₂ = 2, 3, 4, ...). Lyman series lies in the",
    "options": [
      "Ultraviolet (UV) region",
      "Visible region",
      "Infrared region",
      "X-ray region"
    ],
    "correctAnswer": 0,
    "explanation": "Lyman series (n₁ = 1) transitions emit high photon energies (10.2 eV - 13.6 eV) lying in the ultraviolet spectrum.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q16",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Medium",
    "questionText": "The Balmer spectral series of hydrogen atom corresponds to transitions ending at n₁ = 2. Balmer series lies in the",
    "options": [
      "Visible region",
      "Ultraviolet region",
      "Infrared region",
      "Microwave region"
    ],
    "correctAnswer": 0,
    "explanation": "Balmer series (n₁ = 2) emissions span λ ≈ 365 nm to 656 nm (H_α line = 656.3 nm), falling in the human visible range.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q17",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Hard",
    "questionText": "Paschen, Brackett, and Pfund spectral series of hydrogen atom all lie in the",
    "options": [
      "Infrared (IR) region",
      "Ultraviolet region",
      "Visible region",
      "Gamma ray region"
    ],
    "correctAnswer": 0,
    "explanation": "Paschen (n₁ = 3), Brackett (n₁ = 4), and Pfund (n₁ = 5) transitions involve smaller energy gaps and lie in the infrared region.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q18",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Medium",
    "questionText": "The wavelength of the first line (H_α) of the Balmer series (transition n = 3 -> n = 2) is",
    "options": [
      "656.3 nm (6563 Å)",
      "486.1 nm",
      "121.6 nm",
      "102.5 nm"
    ],
    "correctAnswer": 0,
    "explanation": "1/λ = R_H (1/4 - 1/9) = (5/36) R_H => λ = 36 / (5 R_H) = 36 / (5 × 1.097 × 10⁷) ≈ 656.3 nm (Red color).",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q19",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Easy",
    "questionText": "The shortest wavelength (series limit) of the Lyman series (n₂ = ∞ -> n₁ = 1) is",
    "options": [
      "91.2 nm (912 Å)",
      "121.6 nm",
      "364.6 nm",
      "820 nm"
    ],
    "correctAnswer": 0,
    "explanation": "1/λ_limit = R_H (1/1² - 0) = R_H => λ_min = 1 / R_H = 1 / (1.097 × 10⁷ m⁻¹) ≈ 91.2 nm.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q20",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Medium",
    "questionText": "The longest wavelength of the Lyman series (n = 2 -> n = 1) is",
    "options": [
      "121.6 nm (1216 Å)",
      "91.2 nm",
      "656.3 nm",
      "102.5 nm"
    ],
    "correctAnswer": 0,
    "explanation": "1/λ = R_H (1/1 - 1/4) = 3 R_H / 4 => λ = 4 / (3 × 1.097 × 10⁷) ≈ 121.6 nm.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q21",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Hard",
    "questionText": "If a hydrogen atom absorbs a photon and gets excited from ground state (n = 1) to n = 4, the number of possible spectral emission lines is",
    "options": [
      "6 lines",
      "4 lines",
      "3 lines",
      "10 lines"
    ],
    "correctAnswer": 0,
    "explanation": "Number of spectral lines N = n (n - 1) / 2 = 4 × 3 / 2 = 6 lines.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q22",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Medium",
    "questionText": "The excitation energy required to raise a hydrogen atom from ground state (n = 1) to first excited state (n = 2) is",
    "options": [
      "10.2 eV",
      "13.6 eV",
      "3.4 eV",
      "1.51 eV"
    ],
    "correctAnswer": 0,
    "explanation": "ΔE = E₂ - E₁ = -3.4 eV - (-13.6 eV) = +10.2 eV.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q23",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Easy",
    "questionText": "de Broglie explained Bohr's quantization condition by demonstrating that stationary electron orbits correspond to",
    "options": [
      "Standing de Broglie matter waves with circumference equal to integer wavelengths (2π r = n λ)",
      "Circular currents",
      "Planetary gravity",
      "Resonant acoustics"
    ],
    "correctAnswer": 0,
    "explanation": "2π r = n λ = n (h / mv) => m v r = n h / (2π). An integral number of matter wavelengths fit smoothly along the closed circular orbit without destructive interference.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q24",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Medium",
    "questionText": "The orbital frequency f_n of electron revolution in the n-th Bohr orbit is proportional to",
    "options": [
      "Z² / n³",
      "Z / n²",
      "Z² / n²",
      "Z³ / n²"
    ],
    "correctAnswer": 0,
    "explanation": "f_n = v_n / (2π r_n) ∝ (Z/n) / (n²/Z) = Z² / n³.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q25",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Hard",
    "questionText": "The magnetic dipole moment M_n associated with an electron revolving in the n-th Bohr orbit is proportional to",
    "options": [
      "n (M_n = n μ_B)",
      "n²",
      "1 / n",
      "n³"
    ],
    "correctAnswer": 0,
    "explanation": "M = I A = (e f) (π r²) = e (m v r) / (2 m) = n (e ℏ / 2 m_e) = n μ_B (where Bohr magneton μ_B = eℏ / 2m_e).",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q26",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Medium",
    "questionText": "Bohr Magneton μ_B is the fundamental quantum unit of magnetic dipole moment. Its value is",
    "options": [
      "9.27 × 10⁻²⁴ A·m² (J/T)",
      "1.6 × 10⁻¹⁹ A·m²",
      "6.63 × 10⁻³⁴ A·m²",
      "9.1 × 10⁻³¹ A·m²"
    ],
    "correctAnswer": 0,
    "explanation": "μ_B = e ℏ / (2 m_e) = (1.602 × 10⁻¹⁹ × 1.055 × 10⁻³⁴) / (2 × 9.109 × 10⁻³¹) ≈ 9.274 × 10⁻²⁴ J/T.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q27",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Easy",
    "questionText": "In Franck-Hertz experiment, inelastic collisions of accelerated electrons with mercury vapour atoms demonstrated",
    "options": [
      "Discrete (quantized) atomic energy levels in atoms",
      "Wave nature of light",
      "Nuclear size",
      "Photon spin"
    ],
    "correctAnswer": 0,
    "explanation": "Periodic current drops at 4.9 V intervals proved that mercury atoms absorb energy only in quantized discrete packets (4.9 eV).",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q28",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Medium",
    "questionText": "The ratio of radii of the first three Bohr orbits in hydrogen atom (n = 1, 2, 3) is",
    "options": [
      "1 : 4 : 9",
      "1 : 2 : 3",
      "1 : 8 : 27",
      "1 : √2 : √3"
    ],
    "correctAnswer": 0,
    "explanation": "r_n ∝ n² => r₁ : r₂ : r₃ = 1² : 2² : 3² = 1 : 4 : 9.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q29",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Hard",
    "questionText": "The ratio of kinetic energies of electron in first three orbits of hydrogen atom (n = 1, 2, 3) is",
    "options": [
      "1 : 1/4 : 1/9 (or 36 : 9 : 4)",
      "1 : 4 : 9",
      "1 : 1/2 : 1/3",
      "1 : 2 : 3"
    ],
    "correctAnswer": 0,
    "explanation": "K_n ∝ 1 / n² => K₁ : K₂ : K₃ = 1 : 1/4 : 1/9.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q30",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Medium",
    "questionText": "The impact parameter b in Rutherford scattering is the perpendicular distance between velocity vector of alpha particle and nucleus. When b = 0 (head-on collision), scattering angle θ is",
    "options": [
      "180° (alpha particle rebounds directly backward)",
      "0°",
      "90°",
      "45°"
    ],
    "correctAnswer": 0,
    "explanation": "b = (1/4πε₀) (Z e² / K) cot(θ/2). For b = 0 => cot(θ/2) = 0 => θ/2 = 90° => θ = 180°.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q31",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Easy",
    "questionText": "Which of the following transitions in a hydrogen atom emits a photon of the HIGHEST frequency (maximum energy)?",
    "options": [
      "n = 2 to n = 1",
      "n = 6 to n = 2",
      "n = 4 to n = 3",
      "n = 3 to n = 2"
    ],
    "correctAnswer": 0,
    "explanation": "ΔE(2 -> 1) = 13.6 (1 - 1/4) = 10.2 eV, which is greater than any transition ending on n ≥ 2.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q32",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Medium",
    "questionText": "Which of the following transitions in a hydrogen atom emits a photon of the LONGEST wavelength (minimum energy)?",
    "options": [
      "n = 6 to n = 5",
      "n = 2 to n = 1",
      "n = 4 to n = 3",
      "n = 3 to n = 2"
    ],
    "correctAnswer": 0,
    "explanation": "ΔE = 13.6 (1/25 - 1/36) = 13.6 (11 / 900) ≈ 0.166 eV (smallest energy gap => maximum wavelength λ = hc/ΔE).",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q33",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Hard",
    "questionText": "Bohr's model failed to explain",
    "options": [
      "Fine structure of spectral lines (spin-orbit coupling and relativistic effects)",
      "Zeeman effect (splitting in magnetic field) and Stark effect (splitting in electric field)",
      "Spectra of multi-electron atoms",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "Bohr's semi-classical model could not account for multi-electron electron correlation, fine structure splitting, or Zeeman/Stark spectral splittings.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q34",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Medium",
    "questionText": "According to Bohr's correspondence principle, quantum physics predictions merge into classical physics predictions in the limit of",
    "options": [
      "Very large quantum numbers (n -> ∞)",
      "n -> 0",
      "h -> ∞",
      "c -> 0"
    ],
    "correctAnswer": 0,
    "explanation": "Bohr's Correspondence Principle: At high quantum numbers (n >> 1), orbital revolution frequency matches the emitted photon frequency classically.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q35",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Easy",
    "questionText": "The recoil speed of a hydrogen atom initially at rest when emitting a photon during transition from n = 2 to n = 1 is",
    "options": [
      "3.25 m/s",
      "3.25 × 10⁴ m/s",
      "0.325 m/s",
      "300 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "Photon momentum p = ΔE / c = (10.2 × 1.6 × 10⁻¹⁹ J) / (3 × 10⁸ m/s) = 5.44 × 10⁻²⁷ kg·m/s. Recoil speed v = p / m_H = (5.44 × 10⁻²⁷) / (1.67 × 10⁻²⁷) ≈ 3.25 m/s.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q36",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Medium",
    "questionText": "When an electron jumps from n = 1 to n = 3 in hydrogen atom, its orbital angular momentum increases by",
    "options": [
      "2 h / (2π) = h / π",
      "h / (2π)",
      "3 h / (2π)",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "ΔL = (3 - 1) ℏ = 2 (h / 2π) = h / π.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q37",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Hard",
    "questionText": "Positronium is a bound state of an electron and a positron (equal mass m). Its Rydberg constant R_pos compared to hydrogen R_H is",
    "options": [
      "R_pos = R_H / 2",
      "R_pos = R_H",
      "R_pos = 2 R_H",
      "R_pos = 4 R_H"
    ],
    "correctAnswer": 0,
    "explanation": "Reduced mass μ = m·m / (m + m) = m/2. Since R ∝ μ, R_pos = R_H / 2.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q38",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Medium",
    "questionText": "The ground state energy of Positronium is",
    "options": [
      "-6.8 eV",
      "-13.6 eV",
      "-27.2 eV",
      "-3.4 eV"
    ],
    "correctAnswer": 0,
    "explanation": "E₁ (Positronium) = -13.6 / 2 = -6.8 eV.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q39",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Easy",
    "questionText": "In a Muonic hydrogen atom, a negative muon (mass m_μ ≈ 207 m_e) orbits a proton. The first Bohr radius r₁ of muonic hydrogen is",
    "options": [
      "a₀ / 207 ≈ 0.529 / 207 Å ≈ 2.56 × 10⁻¹³ m",
      "207 a₀",
      "a₀",
      "a₀ / √207"
    ],
    "correctAnswer": 0,
    "explanation": "r₁ ∝ 1 / m. Because muon is 207 times heavier, the orbit is 207 times smaller (~ 2.56 × 10⁻¹³ m), penetrating close to the nuclear boundary.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q40",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Medium",
    "questionText": "Rutherford's gold foil experiment utilized alpha particles, which are physically",
    "options": [
      "Doubly ionized Helium-4 nuclei (He²⁺ with 2 protons and 2 neutrons)",
      "Helium atoms",
      "Fast electrons",
      "Hydrogen ions"
    ],
    "correctAnswer": 0,
    "explanation": "Alpha particles are Helium nuclei (⁴₂He²⁺) carrying +2e charge and 4 u mass.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q41",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Hard",
    "questionText": "If the potential energy U of electron-proton system is defined as zero at n = 1 (instead of infinity), total energy at n = 1 becomes",
    "options": [
      "+13.6 eV",
      "0 eV",
      "-13.6 eV",
      "+27.2 eV"
    ],
    "correctAnswer": 0,
    "explanation": "E = K + U. K = +13.6 eV. If U₁ is shifted to 0, E₁ = 13.6 + 0 = +13.6 eV (energy differences ΔE between levels remain unchanged).",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q42",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Medium",
    "questionText": "The angular momentum of an electron in 3d orbital according to modern quantum mechanics (L = √[l(l+1)] ℏ) is",
    "options": [
      "√6 ℏ (since l = 2 for d-orbital)",
      "3 ℏ",
      "2 ℏ",
      "√2 ℏ"
    ],
    "correctAnswer": 0,
    "explanation": "For d subshell, orbital quantum number l = 2 => L = √[2(2+1)] ℏ = √6 ℏ.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q43",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Easy",
    "questionText": "Which element was first discovered in the solar spectrum using absorption line analysis (Fraunhofer lines)?",
    "options": [
      "Helium (from Greek Helios = Sun)",
      "Hydrogen",
      "Oxygen",
      "Argon"
    ],
    "correctAnswer": 0,
    "explanation": "Helium was discovered by Lockyer and Janssen in 1868 as an unassigned bright yellow line (D₃) in the solar chromosphere spectrum.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q44",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Medium",
    "questionText": "The ratio of velocity of electron in the first Bohr orbit of hydrogen to the speed of light c is the fine structure constant α, equal to",
    "options": [
      "1 / 137 ≈ 0.0073",
      "1 / 100",
      "1 / 10",
      "1 / 1836"
    ],
    "correctAnswer": 0,
    "explanation": "Fine structure constant α = e² / (4πε₀ ℏ c) ≈ 1 / 137.036.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  },
  {
    "id": "atom-q45",
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "Atoms & Bohr Model",
    "difficulty": "Hard",
    "questionText": "When a hydrogen atom de-excites from state n to ground state (n = 1), the maximum kinetic energy of the emitted photon is",
    "options": [
      "13.6 (1 - 1/n²) eV",
      "13.6 / n² eV",
      "13.6 (1 + 1/n²) eV",
      "13.6 n² eV"
    ],
    "correctAnswer": 0,
    "explanation": "E_photon = E_n - E₁ = -13.6/n² - (-13.6) = 13.6 (1 - 1/n²) eV.",
    "tags": [
      "Atoms",
      "Atoms & Bohr Model"
    ]
  }
];

export const NUCLEI_PHYSICS_QUESTIONS: Question[] = [
  {
    "id": "nuc-q1",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Hard",
    "questionText": "The nuclear radius R of a nucleus with mass number A is given by empirical formula",
    "options": [
      "R = R₀ A^(1/3) (where R₀ ≈ 1.2 × 10⁻¹⁵ m = 1.2 fm)",
      "R = R₀ A^(1/2)",
      "R = R₀ A³",
      "R = R₀ A"
    ],
    "correctAnswer": 0,
    "explanation": "R = R₀ A^(1/3) (where R₀ ≈ 1.2 fm). This reflects constant nuclear matter volume proportional to nucleon count A.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q2",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Medium",
    "questionText": "The density of nuclear matter for all nuclei (from Hydrogen to Uranium) is approximately",
    "options": [
      "Constant (~ 2.3 × 10¹⁷ kg/m³)",
      "Proportional to A",
      "Proportional to A²",
      "Proportional to 1/A"
    ],
    "correctAnswer": 0,
    "explanation": "Nuclear density ρ = Mass / Volume = (A × m_u) / ((4/3) π R₀³ A) = 3 m_u / (4π R₀³) ≈ 2.3 × 10¹⁷ kg/m³ (independent of mass number A).",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q3",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Easy",
    "questionText": "One unified atomic mass unit (1 u or 1 amu) is defined as 1/12th the mass of a carbon-12 atom and is equivalent to",
    "options": [
      "1.66 × 10⁻²⁷ kg ≈ 931.5 MeV/c²",
      "9.1 × 10⁻³¹ kg",
      "1.67 × 10⁻²⁴ kg",
      "938 MeV/c²"
    ],
    "correctAnswer": 0,
    "explanation": "1 u = 1.66054 × 10⁻²⁷ kg. By E = m c²: 1 u ≡ 931.5 MeV.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q4",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Medium",
    "questionText": "Mass defect Δm of a nucleus of atomic number Z and mass number A (mass M) is",
    "options": [
      "Δm = [Z m_p + (A - Z) m_n] - M",
      "Δm = M - [Z m_p + A m_n]",
      "Δm = Z m_p + A m_n",
      "Δm = M / A"
    ],
    "correctAnswer": 0,
    "explanation": "Mass defect is the difference between total mass of separated nucleons and the bound nuclear mass M.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q5",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Hard",
    "questionText": "Nuclear binding energy E_b is given by Einstein's mass-energy equivalence formula",
    "options": [
      "E_b = Δm · c²",
      "E_b = Δm · c",
      "E_b = Δm / c²",
      "E_b = (1/2) Δm c²"
    ],
    "correctAnswer": 0,
    "explanation": "E_b = Δm · c² = [Z m_p + (A-Z) m_n - M] c².",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q6",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Medium",
    "questionText": "The binding energy per nucleon (E_b / A) is maximum for which nucleus?",
    "options": [
      "Iron-56 (⁵⁶Fe) with E_b/A ≈ 8.75 MeV/nucleon",
      "Uranium-238 (²³⁸U)",
      "Helium-4 (⁴He)",
      "Carbon-12 (¹²C)"
    ],
    "correctAnswer": 0,
    "explanation": "Iron-56 (⁵⁶₂₆Fe) has the highest binding energy per nucleon (~ 8.75 MeV/nucleon), making it the most tightly bound and stable nucleus in nature.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q7",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Easy",
    "questionText": "Nuclear fusion occurs when very light nuclei (e.g. hydrogen isotopes) combine because",
    "options": [
      "Binding energy per nucleon of product (⁴He) is much higher, releasing enormous energy",
      "Nuclei repel each other",
      "Mass number decreases",
      "Neutrons decay"
    ],
    "correctAnswer": 0,
    "explanation": "Combining light nuclei (A < 20) moves upward along the binding energy curve toward peak stability at ⁵⁶Fe, releasing excess binding energy.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q8",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Medium",
    "questionText": "Nuclear fission occurs when very heavy nuclei (e.g. ²³⁵U) split into intermediate fragments because",
    "options": [
      "Binding energy per nucleon increases from ~ 7.6 MeV to ~ 8.5 MeV, releasing ~ 200 MeV per fission",
      "Nuclear force becomes attractive",
      "Mass increases",
      "Alpha particles escape"
    ],
    "correctAnswer": 0,
    "explanation": "Splitting heavy nuclei (A ~ 240) into middle fragments (A ~ 100-140) increases E_b/A by ~ 0.9 MeV/nucleon, releasing ~ 235 × 0.9 ≈ 200 MeV.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q9",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Hard",
    "questionText": "Nuclear force between nucleons is characterized by which properties?",
    "options": [
      "Strongest force in nature, extremely short range (~ 1-2 fm), charge-independent, and shows saturation",
      "Long range inverse square force",
      "Depends strongly on charge",
      "Always repulsive"
    ],
    "correctAnswer": 0,
    "explanation": "The strong nuclear force is short-range (< 2 fm), ~ 100 times stronger than Coulomb force, charge-symmetric (f_nn ≈ f_pp ≈ f_np), and saturates with nearest neighbours.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q10",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Medium",
    "questionText": "At distances r < 0.8 fm (hard core), the nuclear force between two nucleons becomes",
    "options": [
      "Strongly repulsive (preventing nuclear collapse)",
      "Attractive",
      "Zero",
      "Infinite attractive"
    ],
    "correctAnswer": 0,
    "explanation": "Below ~ 0.8 fm, the nuclear potential exhibits a steep repulsive core that prevents nucleons from coalescing together.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q11",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Easy",
    "questionText": "In alpha (α) decay of a parent nucleus ᴬ_Z X, the daughter nucleus Y is",
    "options": [
      "ᴬ⁻⁴_{Z-2} Y + ⁴₂He",
      "ᴬ_{Z+1} Y + e⁻",
      "ᴬ_{Z-1} Y + e⁺",
      "ᴬ⁻²_Z Y"
    ],
    "correctAnswer": 0,
    "explanation": "Alpha decay: ᴬ_Z X -> ᴬ⁻⁴_{Z-2} Y + ⁴₂He + Q (mass number decreases by 4, atomic number by 2).",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q12",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Medium",
    "questionText": "In beta-minus (β⁻) decay, a nuclear neutron transforms into a proton according to",
    "options": [
      "n -> p + e⁻ + ν̄_e (antineutrino)",
      "p -> n + e⁺ + ν_e",
      "n -> p + e⁺",
      "p -> n + e⁻"
    ],
    "correctAnswer": 0,
    "explanation": "Beta-minus decay: n -> p + e⁻ + ν̄_e. Atomic number Z increases by 1, mass number A remains unchanged.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q13",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Hard",
    "questionText": "In beta-plus (β⁺) decay, a nuclear proton transforms into a neutron according to",
    "options": [
      "p -> n + e⁺ + ν_e (neutrino)",
      "n -> p + e⁻ + ν̄_e",
      "p -> n + e⁻",
      "n -> p + ν_e"
    ],
    "correctAnswer": 0,
    "explanation": "Beta-plus decay: p -> n + e⁺ + ν_e (positron and electron neutrino emitted). Atomic number Z decreases by 1.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q14",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Medium",
    "questionText": "The continuous energy spectrum of beta particles was explained by Wolfgang Pauli in 1930 by postulating the emission of",
    "options": [
      "Neutrino (ν) / Antineutrino (ν̄) sharing decay energy Q",
      "Gamma ray",
      "Meson",
      "Graviton"
    ],
    "correctAnswer": 0,
    "explanation": "The three-body final state shares the fixed Q-value between electron and antineutrino, producing a smooth continuous kinetic energy distribution.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q15",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Easy",
    "questionText": "Gamma (γ) decay involves the emission of high-energy photons when",
    "options": [
      "An excited nucleus de-excites to a lower nuclear energy state",
      "Proton decays to neutron",
      "Electron is captured",
      "Alpha particle is absorbed"
    ],
    "correctAnswer": 0,
    "explanation": "Following α or β decay, the daughter nucleus is often in an excited state; it drops to ground state by radiating discrete MeV-range gamma photons (no change in Z or A).",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q16",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Medium",
    "questionText": "Rutherford-Soddy radioactive decay law states that active nuclei N(t) at time t decays exponentially as",
    "options": [
      "N(t) = N₀ e^(-λ t)",
      "N(t) = N₀ (1 - e^(-λ t))",
      "N(t) = N₀ / (λ t)",
      "N(t) = N₀ e^(+λ t)"
    ],
    "correctAnswer": 0,
    "explanation": "Radioactive decay law: dN/dt = -λ N => N(t) = N₀ e^(-λ t).",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q17",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Hard",
    "questionText": "The half-life T_{1/2} of a radioactive substance is related to its decay constant λ by",
    "options": [
      "T_{1/2} = ln 2 / λ ≈ 0.693 / λ",
      "T_{1/2} = λ / 0.693",
      "T_{1/2} = 1 / λ",
      "T_{1/2} = 2 / λ"
    ],
    "correctAnswer": 0,
    "explanation": "T_{1/2} = ln 2 / λ = 0.69315 / λ.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q18",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Medium",
    "questionText": "Mean life (average lifetime) τ of a radioactive nucleus is",
    "options": [
      "τ = 1 / λ = T_{1/2} / ln 2 ≈ 1.44 T_{1/2}",
      "τ = λ",
      "τ = 0.693 T_{1/2}",
      "τ = 2 T_{1/2}"
    ],
    "correctAnswer": 0,
    "explanation": "Mean life τ = ∫ t dN / N₀ = 1 / λ = T_{1/2} / 0.693 ≈ 1.443 T_{1/2}.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q19",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Easy",
    "questionText": "Activity A (or decay rate R = -dN/dt) of a radioactive sample with N active nuclei is",
    "options": [
      "A = λ N",
      "A = N / λ",
      "A = λ / N",
      "A = N e^(-λ t)"
    ],
    "correctAnswer": 0,
    "explanation": "Activity A = |dN/dt| = λ N = λ N₀ e^(-λ t) = A₀ e^(-λ t).",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q20",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Medium",
    "questionText": "The SI unit of radioactive activity is",
    "options": [
      "Becquerel (1 Bq = 1 decay per second)",
      "Curie (Ci)",
      "Rutherford (Rd)",
      "Roentgen"
    ],
    "correctAnswer": 0,
    "explanation": "1 Becquerel (Bq) = 1 disintegration per second (dps). 1 Curie (Ci) = 3.7 × 10¹⁰ Bq.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q21",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Hard",
    "questionText": "After 3 half-lives (t = 3 T_{1/2}), the fraction of radioactive nuclei remaining undecayed is",
    "options": [
      "1 / 8 (12.5%)",
      "1 / 4 (25%)",
      "1 / 16 (6.25%)",
      "1 / 6"
    ],
    "correctAnswer": 0,
    "explanation": "N / N₀ = (1/2)³ = 1 / 8 = 12.5% remaining undecayed (87.5% decayed).",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q22",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Medium",
    "questionText": "A radioactive sample has half-life 20 days. How much time is required for 75% of the sample to decay?",
    "options": [
      "40 days (2 half-lives)",
      "20 days",
      "60 days",
      "80 days"
    ],
    "correctAnswer": 0,
    "explanation": "75% decayed leaves 25% = (1/2)² remaining => 2 half-lives => t = 2 × 20 = 40 days.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q23",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Easy",
    "questionText": "The Q-value of a nuclear reaction A + B -> C + D is calculated from masses as",
    "options": [
      "Q = [m_A + m_B - (m_C + m_D)] c²",
      "Q = [m_C + m_D - (m_A + m_B)] c²",
      "Q = (m_A + m_B) c²",
      "Q = 0"
    ],
    "correctAnswer": 0,
    "explanation": "Q = (Mass of reactants - Mass of products) c². If Q > 0 the reaction is exothermic; if Q < 0 it is endothermic.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q24",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Medium",
    "questionText": "In a thermal nuclear reactor, the purpose of a MODERATOR (such as Heavy Water D₂O or Graphite) is to",
    "options": [
      "Slow down fast fission neutrons to thermal energies (~ 0.025 eV) via elastic collisions",
      "Absorb excess neutrons",
      "Cool the reactor core",
      "Shield radiation"
    ],
    "correctAnswer": 0,
    "explanation": "Fast neutrons (~ 2 MeV) have low fission cross-section with ²³⁵U; moderators slow them to thermal speeds (0.025 eV) where fission cross-section is massive.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q25",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Hard",
    "questionText": "CONTROL RODS in a nuclear reactor (made of Cadmium or Boron) are used to",
    "options": [
      "Absorb excess neutrons to regulate or stop the fission chain reaction",
      "Slow down neutrons",
      "Produce heat",
      "Reflect neutrons"
    ],
    "correctAnswer": 0,
    "explanation": "Cadmium and Boron have huge neutron capture cross-sections, controlling multiplication factor k = 1 (critical state).",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q26",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Medium",
    "questionText": "For a sustained, steady-state controlled nuclear chain reaction, neutron multiplication factor k must be",
    "options": [
      "k = 1 (Critical state)",
      "k > 1 (Supercritical)",
      "k < 1 (Subcritical)",
      "k = 0"
    ],
    "correctAnswer": 0,
    "explanation": "k = 1 maintains steady constant power output; k > 1 causes exponential power surge (prompt criticality / explosion); k < 1 causes shutdown.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q27",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Easy",
    "questionText": "In the Sun, the primary nuclear fusion energy generation mechanism is the",
    "options": [
      "Proton-Proton (p-p) cycle",
      "CNO cycle",
      "Uranium fission",
      "Carbon fusion"
    ],
    "correctAnswer": 0,
    "explanation": "For stars of solar mass, the p-p chain fuses 4 ¹H into ⁴He + 2e⁺ + 2ν_e + 26.7 MeV of energy.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q28",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Medium",
    "questionText": "Thermonuclear fusion requires extreme temperatures (~ 10⁷ to 10⁸ K) because",
    "options": [
      "Positively charged nuclei must acquire sufficient kinetic energy to overcome Coulomb electrostatic repulsion barrier",
      "Electrons must be absorbed",
      "Neutrons must decay",
      "Gravity is weak"
    ],
    "correctAnswer": 0,
    "explanation": "High thermal kinetic energy (K ~ k_B T) enables nuclei to tunnel through the Coulomb barrier within the short-range strong nuclear attraction range (~ 1 fm).",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q29",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Hard",
    "questionText": "Radioactive carbon dating (Carbon-14 dating) is used to estimate the age of archaeological organic specimens based on half-life of ¹⁴C which is",
    "options": [
      "5730 years",
      "1600 years",
      "4.5 billion years",
      "28 years"
    ],
    "correctAnswer": 0,
    "explanation": "¹⁴₆C has a half-life of 5730 years, ideal for dating biological wood, bones, and artifacts up to ~ 50,000 years old.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q30",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Medium",
    "questionText": "A radioactive isotope has decay constant λ = 0.01 day⁻¹. Its mean life τ is",
    "options": [
      "100 days",
      "69.3 days",
      "10 days",
      "1.44 days"
    ],
    "correctAnswer": 0,
    "explanation": "Mean life τ = 1 / λ = 1 / 0.01 = 100 days.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q31",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Easy",
    "questionText": "Nuclear isomers are nuclei that have",
    "options": [
      "Same atomic number Z and mass number A, but different radioactive lifetimes and nuclear energy states (metastable states)",
      "Same A, different Z",
      "Same Z, different A",
      "Same neutron number"
    ],
    "correctAnswer": 0,
    "explanation": "Nuclear isomers (e.g. ⁹⁹ᵐTc) are long-lived metastable nuclear excited states differing only in internal energy structure.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q32",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Medium",
    "questionText": "Isobars are atoms that have",
    "options": [
      "Same mass number A, but different atomic numbers Z (e.g. ⁴⁰Ar, ⁴⁰K, ⁴⁰Ca)",
      "Same Z, different A",
      "Same neutron number",
      "Same electron count"
    ],
    "correctAnswer": 0,
    "explanation": "Isobars share identical total nucleon number A but belong to different chemical elements.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q33",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Hard",
    "questionText": "Isotones are nuclei that have",
    "options": [
      "Same number of neutrons N = (A - Z)",
      "Same atomic number Z",
      "Same mass number A",
      "Same charge"
    ],
    "correctAnswer": 0,
    "explanation": "Isotones have identical neutron count N = A - Z (e.g. ¹⁴₆C and ¹⁶₈O both have N = 8).",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q34",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Medium",
    "questionText": "Which particle is emitted along with an electron in nuclear beta-minus decay to conserve lepton number and spin?",
    "options": [
      "Electron antineutrino (ν̄_e)",
      "Positron",
      "Neutron",
      "Muon"
    ],
    "correctAnswer": 0,
    "explanation": "Beta-minus decay creates an electron (lepton number L = +1); an antineutrino (L = -1) must be co-emitted to conserve total lepton number.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q35",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Easy",
    "questionText": "The ratio of radii of two nuclei with mass numbers 1 and 64 is",
    "options": [
      "1 : 4",
      "1 : 8",
      "1 : 16",
      "1 : 64"
    ],
    "correctAnswer": 0,
    "explanation": "R₁ / R₂ = (A₁ / A₂)^(1/3) = (1 / 64)^(1/3) = 1 / 4.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q36",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Medium",
    "questionText": "In the nuclear fission reaction: ²³⁵₉₂U + ¹₀n -> ¹⁴⁴₅₆Ba + ⁸⁹₃₆Kr + x ¹₀n, the number of emitted neutrons x is",
    "options": [
      "3 neutrons",
      "2 neutrons",
      "1 neutron",
      "4 neutrons"
    ],
    "correctAnswer": 0,
    "explanation": "Total mass number balance: 235 + 1 = 144 + 89 + x => 236 = 233 + x => x = 3 neutrons.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q37",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Hard",
    "questionText": "During radioactive equilibrium between parent substance (1) and daughter product (2), their activities satisfy",
    "options": [
      "A₁ = A₂ (λ₁ N₁ = λ₂ N₂)",
      "N₁ = N₂",
      "λ₁ = λ₂",
      "A₁ = 2 A₂"
    ],
    "correctAnswer": 0,
    "explanation": "Under secular radioactive equilibrium: Decay rate of parent equals decay rate of daughter (λ₁ N₁ = λ₂ N₂).",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q38",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Medium",
    "questionText": "Pair production refers to the creation of an electron-positron pair from a single high-energy gamma photon in the field of a nucleus. The threshold photon energy is",
    "options": [
      "1.022 MeV",
      "0.511 MeV",
      "2.044 MeV",
      "931.5 MeV"
    ],
    "correctAnswer": 0,
    "explanation": "E_th = 2 m_e c² = 2 × 0.511 MeV = 1.022 MeV.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q39",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Easy",
    "questionText": "When a positron and an electron annihilate at rest, they produce",
    "options": [
      "Two gamma photons of 0.511 MeV each emitted in opposite directions (180°)",
      "One photon of 1.022 MeV",
      "Neutron",
      "Proton"
    ],
    "correctAnswer": 0,
    "explanation": "To conserve both energy and momentum, e⁺ + e⁻ -> 2 γ, producing two collinear back-to-back 511 keV gamma rays.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q40",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Medium",
    "questionText": "The energy equivalent of a mass defect of 0.01 u is",
    "options": [
      "9.315 MeV",
      "93.15 MeV",
      "0.9315 MeV",
      "931.5 MeV"
    ],
    "correctAnswer": 0,
    "explanation": "E = 0.01 × 931.5 MeV = 9.315 MeV.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q41",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Hard",
    "questionText": "A radioactive sample has initial count rate 800 counts/s. After 6 hours, count rate is 100 counts/s. Half-life is",
    "options": [
      "2 hours",
      "3 hours",
      "1 hour",
      "1.5 hours"
    ],
    "correctAnswer": 0,
    "explanation": "A / A₀ = 100 / 800 = 1/8 = (1/2)³ => 3 half-lives elapsed in 6 hours => T_{1/2} = 6 / 3 = 2 hours.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q42",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Medium",
    "questionText": "Heavy water (D₂O) is an effective nuclear moderator because deuterium has",
    "options": [
      "Small mass (similar to neutron) and extremely low neutron absorption cross-section",
      "High radioactivity",
      "Large density",
      "Negative charge"
    ],
    "correctAnswer": 0,
    "explanation": "Deuterium transfers maximum kinetic energy in elastic collisions without capturing the neutron into parasitic non-fission absorption.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q43",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Easy",
    "questionText": "Which of the following radioactive radiations is NOT deflected by electric or magnetic fields?",
    "options": [
      "Gamma (γ) rays",
      "Alpha (α) rays",
      "Beta-minus (β⁻) rays",
      "Beta-plus (β⁺) rays"
    ],
    "correctAnswer": 0,
    "explanation": "Gamma rays are uncharged high-frequency electromagnetic photons (q = 0), experiencing zero Lorentz force in electric/magnetic fields.",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q44",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Medium",
    "questionText": "The total binding energy of a Helium nucleus (⁴₂He) is 28.3 MeV. Its binding energy per nucleon is",
    "options": [
      "7.075 MeV/nucleon",
      "28.3 MeV",
      "14.15 MeV",
      "3.54 MeV"
    ],
    "correctAnswer": 0,
    "explanation": "E_b / A = 28.3 MeV / 4 = 7.075 MeV/nucleon (remarkably high for a light nucleus, giving alpha particles exceptional stability).",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  },
  {
    "id": "nuc-q45",
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "Nuclei & Radioactivity",
    "difficulty": "Hard",
    "questionText": "Stellar nucleosynthesis in massive red giant stars produces carbon through the",
    "options": [
      "Triple-alpha process (3 ⁴He -> ¹²C)",
      "Proton-proton chain",
      "Deuterium fusion",
      "Beta decay"
    ],
    "correctAnswer": 0,
    "explanation": "In core helium burning, three alpha particles fuse sequentially via unstable ⁸Be resonance into carbon-12 (3 ⁴He -> ¹²C + 7.27 MeV).",
    "tags": [
      "Nuclei",
      "Nuclei & Radioactivity"
    ]
  }
];

export const SEMICONDUCTORS_QUESTIONS: Question[] = [
  {
    "id": "semi-q1",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Hard",
    "questionText": "In intrinsic (pure) semiconductors like Silicon and Germanium, the relationship between electron density n_e and hole density n_h at temperature T is",
    "options": [
      "n_e = n_h = n_i",
      "n_e >> n_h",
      "n_h >> n_e",
      "n_e · n_h = 0"
    ],
    "correctAnswer": 0,
    "explanation": "In an intrinsic semiconductor, thermal excitation generates electron-hole pairs in equal numbers: n_e = n_h = n_i.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q2",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Medium",
    "questionText": "The forbidden energy band gap E_g of Silicon (Si) and Germanium (Ge) at room temperature (300 K) are approximately",
    "options": [
      "1.1 eV for Si and 0.7 eV for Ge",
      "3.0 eV for Si and 1.1 eV for Ge",
      "0.1 eV for Si and 0.2 eV for Ge",
      "0.7 eV for Si and 1.1 eV for Ge"
    ],
    "correctAnswer": 0,
    "explanation": "Band gaps at 300 K: E_g(Si) ≈ 1.12 eV, E_g(Ge) ≈ 0.67 eV ≈ 0.7 eV. Silicon is preferred in high-temperature electronics due to its wider band gap.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q3",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Easy",
    "questionText": "At absolute zero temperature (0 K), an intrinsic semiconductor behaves as a perfect",
    "options": [
      "Insulator (valence band full, conduction band empty)",
      "Superconductor",
      "Good conductor",
      "Semi-metal"
    ],
    "correctAnswer": 0,
    "explanation": "At 0 K, thermal energy is zero; all valence electrons are bound in covalent bonds. No free carriers exist in the conduction band (σ = 0).",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q4",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Medium",
    "questionText": "An n-type semiconductor is obtained by doping pure silicon/germanium with",
    "options": [
      "Pentavalent impurity atoms (P, As, Sb)",
      "Trivalent impurity atoms (B, Al, In)",
      "Monovalent atoms",
      "Noble gases"
    ],
    "correctAnswer": 0,
    "explanation": "Pentavalent donor atoms (Group 15) donate an extra conduction electron: n_e >> n_h (electrons are majority carriers).",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q5",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Hard",
    "questionText": "A p-type semiconductor is obtained by doping pure silicon/germanium with",
    "options": [
      "Trivalent impurity atoms (B, Al, Ga, In)",
      "Pentavalent impurity atoms (P, As)",
      "Hexavalent atoms",
      "Carbon atoms"
    ],
    "correctAnswer": 0,
    "explanation": "Trivalent acceptor atoms (Group 13) create an electron deficiency (hole): n_h >> n_e (holes are majority carriers).",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q6",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Medium",
    "questionText": "Mass Action Law for semiconductors in thermal equilibrium states that",
    "options": [
      "n_e · n_h = n_i² (constant at a given temperature)",
      "n_e + n_h = n_i",
      "n_e / n_h = n_i²",
      "n_e · n_h = 2 n_i"
    ],
    "correctAnswer": 0,
    "explanation": "Law of Mass Action: n_e · n_h = n_i²(T) holds for intrinsic as well as extrinsic n-type and p-type doped semiconductors.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q7",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Easy",
    "questionText": "An n-type or p-type semiconductor crystal as a whole is electrically",
    "options": [
      "Strictly neutral",
      "Positively charged",
      "Negatively charged",
      "Charged depending on voltage"
    ],
    "correctAnswer": 0,
    "explanation": "Dopant atoms and host silicon atoms are electrically neutral before mixing. The mobile free charges are exactly balanced by fixed ionized donor/acceptor core charges.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q8",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Medium",
    "questionText": "The total electrical conductivity σ of an extrinsic semiconductor is given by",
    "options": [
      "σ = e (n_e μ_e + n_h μ_h)",
      "σ = e (n_e μ_e - n_h μ_h)",
      "σ = e n_i (μ_e + μ_h)",
      "σ = e / (n_e μ_e)"
    ],
    "correctAnswer": 0,
    "explanation": "Total current density J = J_e + J_h = e (n_e μ_e + n_h μ_h) E => Conductivity σ = e (n_e μ_e + n_h μ_h).",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q9",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Hard",
    "questionText": "Electron mobility μ_e is always higher than hole mobility μ_h in a semiconductor because",
    "options": [
      "Electrons move in the higher-energy conduction band whereas holes move via bound valence electron hopping",
      "Electrons are lighter",
      "Holes have positive charge",
      "Electrons have spin"
    ],
    "correctAnswer": 0,
    "explanation": "Conduction band electrons experience less lattice scattering and smaller effective mass compared to bound valence band hole hopping.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q10",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Medium",
    "questionText": "When a p-n junction is formed, the depletion region contains",
    "options": [
      "Immobile ionized donor (+) and acceptor (-) ions with NO free mobile charge carriers",
      "Abundant free electrons and holes",
      "Neutral silicon only",
      "Free electrons only"
    ],
    "correctAnswer": 0,
    "explanation": "Diffusion of majority carriers across the junction neutralizes mobile charges, leaving an uncompensated space-charge layer of fixed donor ions (on n-side) and acceptor ions (on p-side).",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q11",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Easy",
    "questionText": "The built-in barrier potential V_b across a silicon p-n junction at room temperature is approximately",
    "options": [
      "0.7 V (0.3 V for Ge)",
      "1.5 V",
      "0.1 V",
      "5.0 V"
    ],
    "correctAnswer": 0,
    "explanation": "Standard built-in junction barrier potential: V_0 ≈ 0.7 V for Si, and V_0 ≈ 0.3 V for Ge.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q12",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Medium",
    "questionText": "When a p-n junction is FORWARD BIASED (p-side connected to positive, n-side to negative),",
    "options": [
      "Depletion layer width decreases and barrier height reduces to (V_b - V)",
      "Depletion layer widens",
      "Barrier increases",
      "Current is zero"
    ],
    "correctAnswer": 0,
    "explanation": "Applied forward voltage opposes the built-in barrier field, narrowing the depletion region and driving large exponential forward diffusion current.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q13",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Hard",
    "questionText": "When a p-n junction is REVERSE BIASED (p-side connected to negative, n-side to positive),",
    "options": [
      "Depletion layer width increases, barrier height rises to (V_b + V), and only a tiny reverse saturation current flows",
      "Depletion layer vanishes",
      "Large current flows",
      "Resistance drops to zero"
    ],
    "correctAnswer": 0,
    "explanation": "Reverse bias widens the space charge layer, blocking majority carriers and permitting only a tiny temperature-dependent minority drift current (I_0 ~ μA for Ge, nA for Si).",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q14",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Medium",
    "questionText": "A Zener diode is specially designed to operate in which region?",
    "options": [
      "Reverse breakdown region with sharp constant breakdown voltage V_Z",
      "Forward active region",
      "Saturation region",
      "Cut-off region"
    ],
    "correctAnswer": 0,
    "explanation": "Zener diodes are heavily doped p-n junctions engineered for stable, reversible reverse breakdown, maintaining fixed output voltage across wide current variations.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q15",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Easy",
    "questionText": "A Zener diode is predominantly used as a",
    "options": [
      "Voltage regulator (constant voltage stabilizer)",
      "Amplifier",
      "Oscillator",
      "Rectifier"
    ],
    "correctAnswer": 0,
    "explanation": "Connected in reverse bias in parallel with a load, the Zener diode clips voltage fluctuations and provides a rock-solid stabilized output voltage V_Z.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q16",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Medium",
    "questionText": "In heavily doped p-n junctions, reverse breakdown occurring at low voltages (< 6 V) via quantum mechanical tunneling of valence electrons is called",
    "options": [
      "Zener breakdown",
      "Avalanche breakdown",
      "Thermal runaway",
      "Dielectric breakdown"
    ],
    "correctAnswer": 0,
    "explanation": "Zener breakdown occurs in thin depletion layers (< 10 nm) where high electric fields (> 10⁶ V/m) cause direct quantum tunneling of covalent electrons.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q17",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Hard",
    "questionText": "In lightly doped p-n junctions, reverse breakdown occurring at higher voltages (> 6 V) via impact ionization collision multiplication is called",
    "options": [
      "Avalanche breakdown",
      "Zener breakdown",
      "Tunneling",
      "Photoelectric breakdown"
    ],
    "correctAnswer": 0,
    "explanation": "Accelerated minority carriers collide with lattice atoms, generating secondary electron-hole pairs in an exponential cumulative avalanche chain.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q18",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Medium",
    "questionText": "A Light Emitting Diode (LED) operates in",
    "options": [
      "Forward bias, emitting photons when injected electrons and holes recombine across the direct band gap",
      "Reverse bias",
      "Breakdown region",
      "Unbiased state"
    ],
    "correctAnswer": 0,
    "explanation": "Forward bias injects excess minority carriers; direct radiative recombination releases photon energy E = hν ≈ E_g.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q19",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Easy",
    "questionText": "Why is Silicon (E_g = 1.1 eV) or Germanium (E_g = 0.7 eV) unsuitable for making visible LEDs?",
    "options": [
      "They have indirect band gaps where recombination energy is dissipated as lattice heat (phonons) rather than photons, and E_g is in the infrared",
      "They are too expensive",
      "They conduct too much",
      "They melt easily"
    ],
    "correctAnswer": 0,
    "explanation": "Direct bandgap compound semiconductors (GaAs, GaP, InGaN) are required so electron transitions conserve momentum and radiate visible photons efficiently.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q20",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Medium",
    "questionText": "A Photodiode is operated in",
    "options": [
      "Reverse bias to maximize the fractional change in reverse minority photocurrent when illuminated",
      "Forward bias",
      "Unbiased mode",
      "AC mode"
    ],
    "correctAnswer": 0,
    "explanation": "Reverse bias minimizes dark current; incident photons generate electron-hole pairs in the depletion region, causing a detectable photocurrent proportional to light intensity.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q21",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Hard",
    "questionText": "A Solar Cell is a p-n junction that generates EMF without external bias when illuminated. It operates in the",
    "options": [
      "Fourth quadrant of its I-V characteristic (delivering power to an external load)",
      "First quadrant",
      "Second quadrant",
      "Third quadrant"
    ],
    "correctAnswer": 0,
    "explanation": "Solar cells operate in the 4th quadrant (V > 0, I < 0), sourcing electric power (P_out = V_mp · I_mp) to external electrical circuits.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q22",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Medium",
    "questionText": "The ripple factor of a Half-Wave Rectifier is",
    "options": [
      "1.21",
      "0.482",
      "0.812",
      "1.00"
    ],
    "correctAnswer": 0,
    "explanation": "Ripple factor r = √[(V_rms / V_dc)² - 1] = 1.21 for half-wave rectifier (121% AC ripple).",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q23",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Easy",
    "questionText": "The ripple factor of a Full-Wave Center-Tapped or Bridge Rectifier is",
    "options": [
      "0.482",
      "1.21",
      "0.812",
      "0.25"
    ],
    "correctAnswer": 0,
    "explanation": "Ripple factor r = 0.482 (48.2% ripple), which is easily smoothed using capacitor or π-filters.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q24",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Medium",
    "questionText": "The maximum rectification efficiency η of a Half-Wave Rectifier is",
    "options": [
      "40.6%",
      "81.2%",
      "50.0%",
      "100%"
    ],
    "correctAnswer": 0,
    "explanation": "Maximum half-wave efficiency η = (4 / π²) × (R_L / (r_f + R_L)) ≈ 40.6%.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q25",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Hard",
    "questionText": "The maximum rectification efficiency η of a Full-Wave Rectifier is",
    "options": [
      "81.2%",
      "40.6%",
      "50.0%",
      "98.0%"
    ],
    "correctAnswer": 0,
    "explanation": "Maximum full-wave efficiency η = (8 / π²) × 100% ≈ 81.2% (double the half-wave rectifier).",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q26",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Medium",
    "questionText": "If the input AC frequency to a Half-Wave Rectifier is 50 Hz, the fundamental output ripple frequency is",
    "options": [
      "50 Hz",
      "100 Hz",
      "25 Hz",
      "0 Hz"
    ],
    "correctAnswer": 0,
    "explanation": "Half-wave rectifier conducts once per cycle, giving ripple frequency f_out = f_in = 50 Hz.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q27",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Easy",
    "questionText": "If the input AC frequency to a Full-Wave Rectifier is 50 Hz, the fundamental output ripple frequency is",
    "options": [
      "100 Hz",
      "50 Hz",
      "200 Hz",
      "25 Hz"
    ],
    "correctAnswer": 0,
    "explanation": "Full-wave rectifier conducts on both positive and negative half cycles: f_out = 2 f_in = 2 × 50 = 100 Hz.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q28",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Medium",
    "questionText": "A capacitor filter connected across the output of a rectifier acts to",
    "options": [
      "Smooth output voltage ripples by charging to peak voltage and discharging slowly through the load",
      "Increase AC ripple",
      "Step up frequency",
      "Invert polarity"
    ],
    "correctAnswer": 0,
    "explanation": "The shunt capacitor stores charge at peak voltage V_m and maintains voltage during diode non-conduction intervals (Time constant RC >> T).",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q29",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Hard",
    "questionText": "The Boolean output expression for an AND gate with inputs A and B is",
    "options": [
      "Y = A · B",
      "Y = A + B",
      "Y = (A · B)'",
      "Y = A ⊕ B"
    ],
    "correctAnswer": 0,
    "explanation": "AND gate: Output Y is HIGH (1) only if both A and B are HIGH (1): Y = A · B.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q30",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Medium",
    "questionText": "The Boolean output expression for an OR gate with inputs A and B is",
    "options": [
      "Y = A + B",
      "Y = A · B",
      "Y = (A + B)'",
      "Y = A'"
    ],
    "correctAnswer": 0,
    "explanation": "OR gate: Output Y is HIGH (1) if either A or B (or both) is HIGH (1): Y = A + B.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q31",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Easy",
    "questionText": "The Boolean output expression for a NOT (inverter) gate with input A is",
    "options": [
      "Y = A' (or Ā)",
      "Y = A",
      "Y = A + 1",
      "Y = A · 0"
    ],
    "correctAnswer": 0,
    "explanation": "NOT gate: Inverts input logic state: Y = Ā.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q32",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Medium",
    "questionText": "Which of the following gates are known as UNIVERSAL LOGIC GATES because any digital logic function can be realized using them alone?",
    "options": [
      "NAND and NOR gates",
      "AND and OR gates",
      "NOT and XOR gates",
      "OR and NOT gates"
    ],
    "correctAnswer": 0,
    "explanation": "NAND and NOR gates are universal gates: all basic operations (NOT, AND, OR, XOR, XNOR) can be synthesized exclusively using either NAND or NOR gates.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q33",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Hard",
    "questionText": "The truth table with inputs (A, B) and output Y: (0,0)->1, (0,1)->1, (1,0)->1, (1,1)->0 corresponds to which logic gate?",
    "options": [
      "NAND gate (Y = (A · B)')",
      "NOR gate",
      "AND gate",
      "XOR gate"
    ],
    "correctAnswer": 0,
    "explanation": "NAND gate gives LOW (0) output only when both inputs are HIGH (1); otherwise output is HIGH (1).",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q34",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Medium",
    "questionText": "The truth table with inputs (A, B) and output Y: (0,0)->1, (0,1)->0, (1,0)->0, (1,1)->0 corresponds to which logic gate?",
    "options": [
      "NOR gate (Y = (A + B)')",
      "NAND gate",
      "OR gate",
      "XOR gate"
    ],
    "correctAnswer": 0,
    "explanation": "NOR gate gives HIGH (1) output only when both inputs are LOW (0).",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q35",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Easy",
    "questionText": "De Morgan's First Law states that",
    "options": [
      "(A + B)' = A' · B'",
      "(A · B)' = A' · B'",
      "(A + B)' = A' + B'",
      "(A')' = A'"
    ],
    "correctAnswer": 0,
    "explanation": "De Morgan's First Theorem: The complement of an OR sum equals the AND product of the complements: (A + B)' = A' · B'.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q36",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Medium",
    "questionText": "De Morgan's Second Law states that",
    "options": [
      "(A · B)' = A' + B'",
      "(A · B)' = A' · B'",
      "(A + B)' = A' + B'",
      "A · (B + C) = A · B + A · C"
    ],
    "correctAnswer": 0,
    "explanation": "De Morgan's Second Theorem: The complement of an AND product equals the OR sum of the complements: (A · B)' = A' + B'.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q37",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Hard",
    "questionText": "The XOR (Exclusive-OR) gate output expression is",
    "options": [
      "Y = A ⊕ B = A' B + A B'",
      "Y = A B + A' B'",
      "Y = A + B",
      "Y = A · B"
    ],
    "correctAnswer": 0,
    "explanation": "XOR gate: Output is HIGH (1) when inputs are dissimilar (one is 1, other is 0): Y = A'B + AB'.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q38",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Medium",
    "questionText": "In an n-p-n bipolar junction transistor (BJT) operating in active mode,",
    "options": [
      "Emitter-base junction is forward biased and collector-base junction is reverse biased",
      "Both junctions forward biased",
      "Both junctions reverse biased",
      "Emitter-base is reverse biased"
    ],
    "correctAnswer": 0,
    "explanation": "Active amplification mode requires: Forward bias on E-B junction (to inject electrons) and Reverse bias on C-B junction (to collect them).",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q39",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Easy",
    "questionText": "In a BJT transistor, the relations between Emitter current I_E, Base current I_B, and Collector current I_C is",
    "options": [
      "I_E = I_B + I_C",
      "I_C = I_E + I_B",
      "I_B = I_E + I_C",
      "I_E = I_C - I_B"
    ],
    "correctAnswer": 0,
    "explanation": "Kirchhoff's current law at transistor node: I_E = I_B + I_C (since base is very thin and lightly doped, I_B is only ~ 1-5% of I_E).",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q40",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Medium",
    "questionText": "Common emitter current gain β (beta) and common base current gain α (alpha) are related by",
    "options": [
      "β = α / (1 - α) and α = β / (1 + β)",
      "β = α / (1 + α)",
      "β = (1 - α) / α",
      "β = α · (1 + α)"
    ],
    "correctAnswer": 0,
    "explanation": "β = I_C / I_B and α = I_C / I_E => β = α / (1 - α). Typically α ≈ 0.98 to 0.995, giving β ≈ 50 to 200.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q41",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Hard",
    "questionText": "A Common Emitter (CE) amplifier produces a phase reversal between input and output AC voltage equal to",
    "options": [
      "180° (π radians)",
      "0° (in phase)",
      "90°",
      "270°"
    ],
    "correctAnswer": 0,
    "explanation": "When input signal increases, base current and collector current increase, causing higher voltage drop across collector resistor and dropping V_CE: Output is 180° out of phase.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q42",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Medium",
    "questionText": "Barkhausen criterion for sustained oscillations in a feedback oscillator states that",
    "options": [
      "Loop gain magnitude |A β| = 1 and total loop phase shift is 0° (or 360°)",
      "|A β| = 0",
      "|A β| > 100",
      "Loop phase shift = 90°"
    ],
    "correctAnswer": 0,
    "explanation": "Barkhausen criteria for self-sustained oscillation: 1) Loop gain |A β| = 1; 2) Total loop phase shift around the feedback loop = 2nπ (0°).",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q43",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Easy",
    "questionText": "An integrated circuit (IC) combines diodes, transistors, resistors, and capacitors on a single tiny silicon wafer. An IC containing thousands of transistors is called",
    "options": [
      "LSI / VLSI (Large Scale Integration / Very Large Scale Integration)",
      "SSI",
      "MSI",
      "Discrete board"
    ],
    "correctAnswer": 0,
    "explanation": "VLSI incorporates hundreds of thousands to billions of transistors onto a single microchip die.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q44",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Medium",
    "questionText": "Carbon, Silicon, and Germanium all belong to Group 14 with 4 valence electrons. Why is Carbon (diamond) an insulator while Si and Ge are semiconductors?",
    "options": [
      "Carbon's valence electrons are tightly bound in the tiny n=2 shell, giving diamond a massive band gap E_g ≈ 5.4 eV",
      "Carbon has no valence electrons",
      "Carbon is radioactive",
      "Carbon has metal bonds"
    ],
    "correctAnswer": 0,
    "explanation": "Carbon's small atomic radius creates exceptionally strong covalent bonds and a huge band gap (E_g ≈ 5.4 eV), requiring unreachable thermal energy to excite electrons at room temperature.",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  },
  {
    "id": "semi-q45",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "topic": "Semiconductor Electronics & Logic Gates",
    "difficulty": "Hard",
    "questionText": "A logic circuit consists of two NAND gates connected such that the output of the first NAND gate is fed to both inputs of the second NAND gate. The overall combination functions as an",
    "options": [
      "AND gate",
      "OR gate",
      "NOR gate",
      "XOR gate"
    ],
    "correctAnswer": 0,
    "explanation": "First gate computes Y₁ = (A · B)'. The second gate acts as an inverter: Y = (Y₁ · Y₁)' = (Y₁)' = ((A · B)')' = A · B (AND gate).",
    "tags": [
      "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "Semiconductor Electronics & Logic Gates"
    ]
  }
];

