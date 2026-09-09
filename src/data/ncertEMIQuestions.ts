import { Question } from '../types';

export const NCERT_EMI_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch21-01",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Magnetic Flux Through an Area Vector",
    "difficulty": "Easy",
    "questionText": "A uniform magnetic field exists in space as B⃗ = 4î T. The magnetic flux through a planar area whose area vector is S⃗ = (2î + 4ĵ) m² is:",
    "options": [
      "6 Wb",
      "2 Wb",
      "8 Wb",
      "4 Wb"
    ],
    "correctAnswer": 2,
    "explanation": "Magnetic flux is given by the scalar dot product: Φ = B⃗ · S⃗ = (4î) · (2î + 4ĵ) = 4 × 2 = 8 Wb.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "Magnetic Flux"]
  },
  {
    "id": "ncert-phy-ch21-02",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Magnitude of Instantaneous Induced EMF",
    "difficulty": "Easy",
    "questionText": "Magnetic flux (in Wb) linked with a closed conducting loop varies with time t (in s) as Φ(t) = 2t² + 1. The magnitude of induced emf at t = 1 s is:",
    "options": [
      "1 V",
      "2 V",
      "3 V",
      "4 V"
    ],
    "correctAnswer": 3,
    "explanation": "According to Faraday's law of induction, |ε| = |dΦ/dt| = d/dt (2t² + 1) = 4t. At t = 1 s, |ε| = 4(1) = 4 V.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "Faraday's Law"]
  },
  {
    "id": "ncert-phy-ch21-03",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Motional EMF Across a Moving Conductor",
    "difficulty": "Easy",
    "questionText": "A copper rod of length 2 m moves at a constant speed of 2 m/s in a direction perpendicular to its length in a uniform transverse magnetic field of 3 T. The induced emf across its ends is:",
    "options": [
      "8 V",
      "10 V",
      "12 V",
      "14 V"
    ],
    "correctAnswer": 2,
    "explanation": "Motional emf across a conductor moving perpendicular to its length and the magnetic field is ε = B v l = (3 T) × (2 m/s) × (2 m) = 12 V.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "Motional EMF"]
  },
  {
    "id": "ncert-phy-ch21-04",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "EMF in a Rotating Conducting Rod",
    "difficulty": "Easy",
    "questionText": "A metallic rod of length l is hinged at one end and rotated with angular velocity ω in a plane perpendicular to a uniform magnetic field B. The induced emf across its ends is:",
    "options": [
      "(1/2) B l ω²",
      "(1/2) B ω l²",
      "(1/2) B² l ω",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "For an element at distance x from the pivot with speed v = ωx, dε = B v dx = B ω x dx. Integrating from x = 0 to l gives ε = ∫₀ˡ B ω x dx = (1/2) B ω l².",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "Motional EMF"]
  },
  {
    "id": "ncert-phy-ch21-05",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Rectangular Loop Moving in Uniform Field",
    "difficulty": "Easy",
    "questionText": "A rectangular metal loop ABCD of length l and breadth b is moving entirely inside a uniform transverse magnetic field B with a constant velocity v. The net induced emf in the closed loop is:",
    "options": [
      "B b v",
      "B l v",
      "(1/2) B l v",
      "Zero"
    ],
    "correctAnswer": 3,
    "explanation": "As long as the loop is moving entirely inside a uniform magnetic field, the magnetic flux through the loop is constant (dΦ/dt = 0). The emfs induced in the two opposite arms are equal and in the same sense, resulting in zero net circulating emf in the loop.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "Faraday's Law"]
  },
  {
    "id": "ncert-phy-ch21-06",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Induced Charge Flow During Flux Change",
    "difficulty": "Easy",
    "questionText": "The change in magnetic flux linked with a coil of resistance 2 Ω is 6 Wb. The total electric charge flown through the coil during this flux change is:",
    "options": [
      "1 C",
      "2 C",
      "3 C",
      "4 C"
    ],
    "correctAnswer": 2,
    "explanation": "Induced charge Δq = |ΔΦ| / R = 6 Wb / 2 Ω = 3 C. Notably, the total charge flown depends solely on the change in flux and circuit resistance, independent of the time interval.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "Induced Charge"]
  },
  {
    "id": "ncert-phy-ch21-07",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Self-Induced EMF from Changing Current",
    "difficulty": "Easy",
    "questionText": "An electric current flowing in a coil of self-inductance 2 mH increases steadily from 1 A to 2 A in 2 ms. The magnitude of induced emf in the coil is:",
    "options": [
      "1 V",
      "3 V",
      "2 V",
      "4 V"
    ],
    "correctAnswer": 0,
    "explanation": "Induced emf |ε| = L |ΔI / Δt| = (2 × 10⁻³ H) × [(2 - 1) A / (2 × 10⁻³ s)] = 1 V.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "Self-Inductance"]
  },
  {
    "id": "ncert-phy-ch21-08",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Mutual Inductance and Induced EMF",
    "difficulty": "Easy",
    "questionText": "Two closed conducting loops have a mutual inductance of 1 H. The average emf induced in one loop when current in the other changes by 2 A in 1 s is:",
    "options": [
      "1 V",
      "2 V",
      "3 V",
      "4 V"
    ],
    "correctAnswer": 1,
    "explanation": "|ε| = M |ΔI / Δt| = (1 H) × (2 A / 1 s) = 2 V.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "Mutual Inductance"]
  },
  {
    "id": "ncert-phy-ch21-09",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Dimensional Formula of Magnetic Energy Term",
    "difficulty": "Easy",
    "questionText": "The dimensional formula of [L i²] is (where L is inductance and i is electric current):",
    "options": [
      "[M¹ L² T² A²]",
      "[M¹ L² T⁻²]",
      "[M⁰ L⁰ T⁰ A¹]",
      "[M¹ L² T⁻² A²]"
    ],
    "correctAnswer": 1,
    "explanation": "Energy stored in an inductor is U = (1/2) L i². Therefore, [L i²] represents physical energy or work done, having dimensions of [M¹ L² T⁻²].",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "Units and Dimensions"]
  },
  {
    "id": "ncert-phy-ch21-10",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Energy Stored in a Solenoid",
    "difficulty": "Easy",
    "questionText": "A current of 2 A flows through a solenoid of self-inductance 3 mH. The energy stored inside the solenoid in its magnetic field is:",
    "options": [
      "4 mJ",
      "6 mJ",
      "8 mJ",
      "10 mJ"
    ],
    "correctAnswer": 1,
    "explanation": "U = (1/2) L I² = 0.5 × (3 × 10⁻³ H) × (2 A)² = 0.5 × 3 × 4 = 6 mJ.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "Magnetic Energy"]
  },
  {
    "id": "ncert-phy-ch21-11",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Conservation Law Underlying Lenz's Law",
    "difficulty": "Easy",
    "questionText": "Lenz's law is a direct consequence of which fundamental conservation principle?",
    "options": [
      "Conservation of mass",
      "Conservation of charge",
      "Conservation of momentum",
      "Conservation of energy"
    ],
    "correctAnswer": 3,
    "explanation": "Lenz's law states that induced current opposes the change in flux causing it. Mechanical work done against this opposing electromagnetic force is transformed into electrical energy, satisfying the law of conservation of energy.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "Lenz's Law"]
  },
  {
    "id": "ncert-phy-ch21-12",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Induced Current Direction in Vertically Kept Loop",
    "difficulty": "Medium",
    "questionText": "A circular conducting loop is placed in a region where a magnetic field directed perpendicular into the plane of the loop is increasing with time. As seen from the front, the induced current in the loop will be:",
    "options": [
      "Clockwise",
      "Anti-clockwise",
      "Zero",
      "Insufficient information"
    ],
    "correctAnswer": 1,
    "explanation": "The inward magnetic flux through the loop is increasing. According to Lenz's law, the induced current must create an opposing outward magnetic field. By the right-hand thumb rule, an outward magnetic field is generated by an anti-clockwise circulating current.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "Lenz's Law"]
  },
  {
    "id": "ncert-phy-ch21-13",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Time Constant of an L-R Circuit",
    "difficulty": "Easy",
    "questionText": "A coil of self-inductance 50 H and resistance 10 Ω is connected to a DC supply of 2 V until a steady current is reached. When the battery is disconnected, the time in which current decays to 1/e of its steady value is:",
    "options": [
      "500 s",
      "50 s",
      "5 s",
      "0.5 s"
    ],
    "correctAnswer": 2,
    "explanation": "In an L-R decay circuit, current decays as I(t) = I₀ e^(-t/τ), where τ = L / R is the inductive time constant. At t = τ, I = I₀ / e. Thus t = L / R = 50 H / 10 Ω = 5 s.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "L-R Circuit"]
  },
  {
    "id": "ncert-phy-ch21-14",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Initial vs Final Current in L-R Inductive Branch",
    "difficulty": "Medium",
    "questionText": "In a circuit containing a battery of emf V, a branch with an ideal inductor L in series with resistance R is connected in parallel with another resistor of resistance R. Just after the key is closed (t = 0) and after a long time (t = ∞), the currents drawn from the battery are in the ratio:",
    "options": [
      "Zero",
      "∞",
      "1 : 2",
      "2 : 1"
    ],
    "correctAnswer": 2,
    "explanation": "At t = 0, an ideal inductor acts as an open circuit (infinite impedance), so current flows only through the pure resistive branch: I(0) = V / R.\nAt t = ∞, the inductor acts as a short circuit (zero impedance), so both R branches are in parallel with equivalent resistance R/2: I(∞) = V / (R/2) = 2V / R.\nRatio I(0) : I(∞) = (V/R) / (2V/R) = 1 : 2.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "L-R Circuit"]
  },
  {
    "id": "ncert-phy-ch21-15",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "EMF Generated in a Rotating Wheel Rim",
    "difficulty": "Medium",
    "questionText": "A cycle wheel of radius 0.5 m is rotated with a constant angular velocity of 10 rad/s in a uniform magnetic field of 0.1 T directed perpendicular to the plane of the wheel. The EMF generated between its centre and the rim is: [NEET-2019-Odisha]",
    "options": [
      "Zero",
      "0.25 V",
      "0.125 V",
      "0.5 V"
    ],
    "correctAnswer": 2,
    "explanation": "The emf induced across each metallic spoke between the hub and rim is ε = (1/2) B ω R².\nε = 0.5 × (0.1 T) × (10 rad/s) × (0.5 m)² = 0.5 × 1 × 0.25 = 0.125 V.\nSince all spokes are in parallel, the net emf across the centre and the rim remains 0.125 V.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "Motional EMF", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch21-16",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Application of Eddy Currents",
    "difficulty": "Easy",
    "questionText": "In which of the following electrical devices is the eddy current effect NOT utilized for its working? [NEET-2019]",
    "options": [
      "Induction furnace",
      "Magnetic braking in trains",
      "Electromagnet",
      "Electric heater"
    ],
    "correctAnswer": 3,
    "explanation": "An electric heater works on the principle of simple Joule heating (I²R loss) in a high-resistance nichrome wire element, not by eddy currents. Induction furnaces, magnetic brakes, and electromagnetic deadbeat damping rely directly on induced eddy currents.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "Eddy Currents", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch21-17",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Rotational EMF in an 800-Turn Coil",
    "difficulty": "Medium",
    "questionText": "An 800-turn coil of effective area 0.05 m² is kept perpendicular to a uniform magnetic field of 5 × 10⁻⁵ T. When the plane of the coil is rotated by 90° about a coplanar axis in 0.1 s, the average emf induced in the coil is: [NEET-2019]",
    "options": [
      "2 V",
      "0.2 V",
      "2 × 10⁻³ V",
      "0.02 V"
    ],
    "correctAnswer": 3,
    "explanation": "Initial flux Φ₁ = N B A cos 0° = 800 × (5 × 10⁻⁵) × 0.05 = 2 × 10⁻³ Wb.\nWhen rotated by 90°, the plane of the coil is parallel to B⃗, so Φ₂ = N B A cos 90° = 0.\n|ΔΦ| = 2 × 10⁻³ Wb.\nInduced emf |ε| = |ΔΦ| / Δt = (2 × 10⁻³ Wb) / 0.1 s = 0.02 V.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "Faraday's Law", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch21-18",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Inductance from Stored Magnetic Energy",
    "difficulty": "Medium",
    "questionText": "The magnetic potential energy stored in an inductor is 25 mJ when the current flowing through it is 60 mA. The self-inductance of this inductor is: [NEET-2018]",
    "options": [
      "0.138 H",
      "138.88 H",
      "13.89 H",
      "1.389 H"
    ],
    "correctAnswer": 2,
    "explanation": "U = (1/2) L I² => L = (2U) / I².\nL = [2 × (25 × 10⁻³ J)] / (60 × 10⁻³ A)² = (50 × 10⁻³) / (3600 × 10⁻⁶) = 50,000 / 3600 ≈ 13.89 H.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "Magnetic Energy", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch21-19",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Localized Time-Varying Field and Concentric Loops",
    "difficulty": "Hard",
    "questionText": "A uniform magnetic field is restricted within a circular cylindrical region of radius r and changes with time at a rate dB/dt. Loop 1 of radius R (R > r) encloses this region, while Loop 2 of radius R is placed completely outside the magnetic field region. The induced emfs generated in the two loops are: [NEET (Phase-2) 2016]",
    "options": [
      "Zero in loop 1 and zero in loop 2",
      "-πr² (dB/dt) in loop 1 and -πr² (dB/dt) in loop 2",
      "-πR² (dB/dt) in loop 1 and zero in loop 2",
      "-πr² (dB/dt) in loop 1 and zero in loop 2"
    ],
    "correctAnswer": 3,
    "explanation": "For Loop 1: Magnetic flux exists only over the region of radius r, so Φ₁ = B · (πr²). The induced emf is ε₁ = -dΦ₁/dt = -πr² (dB/dt).\nFor Loop 2: No magnetic field passes through its enclosed area at all, so Φ₂ = 0 and ε₂ = 0.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "Induced Electric Field", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch21-20",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Self-Inductance of a Solenoid from Flux Linkage",
    "difficulty": "Easy",
    "questionText": "A long solenoid has 1000 turns. When a steady current of 4 A flows through it, the magnetic flux linked with each individual turn of the solenoid is 4 × 10⁻³ Wb. The self-inductance of the solenoid is: [NEET-2016]",
    "options": [
      "1 H",
      "4 H",
      "3 H",
      "2 H"
    ],
    "correctAnswer": 0,
    "explanation": "Total flux linkage is N Φ_turn = L · I.\nL = (N Φ_turn) / I = (1000 × 4 × 10⁻³ Wb) / 4 A = 4 / 4 = 1 H.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "Self-Inductance", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch21-21",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Potential Difference in a Falling Semicircular Ring",
    "difficulty": "Medium",
    "questionText": "A thin semicircular conducting ring PQR of radius r is falling vertically with its diameter PR horizontal in a uniform horizontal magnetic field B perpendicular to its plane. When its speed is v, the potential difference developed across the endpoints P and R is: [AIPMT-2014]",
    "options": [
      "Zero",
      "(B v π r²) / 2 and P is at higher potential",
      "π r B v and R is at higher potential",
      "2 r B v and R is at higher potential"
    ],
    "correctAnswer": 3,
    "explanation": "The motional emf developed across any conductor depends solely on the straight-line displacement between its endpoints: L⃗_eff = 2r along PR. Hence |ε| = B v L_eff = 2r B v. By Fleming's right-hand rule (or Lorentz force q(v⃗ × B⃗)), positive charges are driven towards R, placing end R at higher potential.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "Motional EMF", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch21-22",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Mutual Inductance of Tightly Coupled Coils",
    "difficulty": "Easy",
    "questionText": "Two coils of self-inductances 2 mH and 8 mH are placed so close together that the magnetic flux in one coil is completely linked with the other (coefficient of coupling k = 1). The mutual inductance between these coils is: [AIPMT-2006]",
    "options": [
      "10 mH",
      "6 mH",
      "4 mH",
      "16 mH"
    ],
    "correctAnswer": 2,
    "explanation": "For complete coupling (k = 1): M = √(L₁ L₂) = √(2 mH × 8 mH) = √16 = 4 mH.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "Mutual Inductance", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch21-23",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Falling Magnet Acceleration Through Ring",
    "difficulty": "Easy",
    "questionText": "A metal ring is held horizontally and a bar magnet is dropped vertically through the ring along its axis. The downward acceleration of the falling magnet while entering and leaving the ring is:",
    "options": [
      "More than g",
      "Equal to g",
      "Less than g",
      "Zero"
    ],
    "correctAnswer": 2,
    "explanation": "As the magnet falls towards the ring, an opposing magnetic field is induced in the ring by Lenz's law, exerting an upward repulsive force on the magnet. When leaving, the induced current attracts the receding pole, again exerting an upward force. In both phases, the upward retarding force ensures acceleration a < g.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "Lenz's Law"]
  },
  {
    "id": "ncert-phy-ch21-24",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Mutual Inductance Scaling for Concentric Square Loops",
    "difficulty": "Medium",
    "questionText": "A small square loop of wire of side l is placed at the centre of a large coplanar square loop of wire of side L (where L >> l). The mutual inductance M of the system is proportional to:",
    "options": [
      "l / L",
      "l² / L",
      "L / l",
      "L² / l"
    ],
    "correctAnswer": 1,
    "explanation": "The magnetic field produced at the centre of the large square loop carrying current I is B ∝ I / L. The magnetic flux linked with the small inner loop of area A = l² is Φ = B · A ∝ (I / L) · l² = (l² / L) I. Therefore, M = Φ / I ∝ l² / L.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "Mutual Inductance"]
  },
  {
    "id": "ncert-phy-ch21-25",
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "Back EMF and DC Motor Operating Speed",
    "difficulty": "Medium",
    "questionText": "The armature of a DC motor has a resistance of 20 Ω. It draws a current of 1.5 A when connected across a 220 V DC supply at operating speed. The value of back emf induced in the armature is:",
    "options": [
      "150 V",
      "170 V",
      "180 V",
      "190 V"
    ],
    "correctAnswer": 3,
    "explanation": "Applying Ohm's law to the motor circuit: V - E_back = I · R => E_back = V - I R.\nE_back = 220 V - (1.5 A × 20 Ω) = 220 V - 30 V = 190 V.",
    "tags": ["NCERT NEET Physics", "Electromagnetic Induction", "DC Motor"]
  }
];
