import { Question } from '../types';

export const NCERT_MOVING_CHARGES_MAGNETISM_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch19-01",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Power Delivered by Magnetic Lorentz Force",
    "difficulty": "Easy",
    "questionText": "The instantaneous power supplied by the magnetic Lorentz force acting on a moving charged particle in a magnetic field is:",
    "options": [
      "Never zero",
      "Always zero",
      "Zero only when velocity is perpendicular to magnetic field",
      "Zero only when velocity is parallel to magnetic field"
    ],
    "correctAnswer": 1,
    "explanation": "The magnetic force F⃗_m = q (v⃗ × B⃗) is always strictly perpendicular to the velocity vector v⃗. Power is given by P = F⃗_m · v⃗ = q (v⃗ × B⃗) · v⃗ = 0 at all times, so the magnetic force does zero work and supplies zero power.",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Magnetic Force"]
  },
  {
    "id": "ncert-phy-ch19-02",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Speed of Charged Particle in Magnetic Field",
    "difficulty": "Easy",
    "questionText": "When a charged particle enters and moves through a uniform magnetic field, its speed:",
    "options": [
      "Must increase",
      "Must decrease",
      "Will remain constant",
      "May decrease or increase"
    ],
    "correctAnswer": 2,
    "explanation": "Because the magnetic force acts perpendicular to the velocity, work done on the particle is zero. By the work-energy theorem, the kinetic energy (and hence the speed) of the charged particle remains strictly constant.",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Motion of Charged Particle"]
  },
  {
    "id": "ncert-phy-ch19-03",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Time Period of Helical Motion",
    "difficulty": "Easy",
    "questionText": "A charged particle of mass m and charge q is projected with velocity v into a uniform magnetic field B at an angle θ with the direction of the field. The time period of revolution is:",
    "options": [
      "(2πm) / (qB)",
      "(2πm sin θ) / (qB)",
      "(2πm cos θ) / (qB)",
      "(2πm tan θ) / (qB)"
    ],
    "correctAnswer": 0,
    "explanation": "The circular component of motion is governed by v_⊥ = v sin θ. The orbital radius is r = (m v sin θ) / (qB). The time period T = (2π r) / v_⊥ = 2πm / (qB), which is completely independent of the projection angle θ and speed v.",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Cyclotron Motion"]
  },
  {
    "id": "ncert-phy-ch19-04",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Conditions for Undeviated Motion",
    "difficulty": "Medium",
    "questionText": "An electron moving with constant velocity passes through a region of space without any change in its speed or direction. If E⃗ and B⃗ represent electric and magnetic fields, the region may have:",
    "options": [
      "E = 0, B = 0",
      "E = 0, B ≠ 0 (with v⃗ parallel to B⃗)",
      "E ≠ 0, B ≠ 0 (with crossed fields satisfying E = vB)",
      "All of these"
    ],
    "correctAnswer": 3,
    "explanation": "Zero acceleration occurs if: (1) no fields exist (E=0, B=0), (2) B is parallel to velocity so v⃗ × B⃗ = 0 with E=0, or (3) crossed fields where electric and magnetic forces balance (qE⃗ + q(v⃗ × B⃗) = 0). Thus, all these cases allow undeflected motion.",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Lorentz Force"]
  },
  {
    "id": "ncert-phy-ch19-05",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Magnetic Field Variation with Distance from Straight Wire",
    "difficulty": "Easy",
    "questionText": "The ratio of magnetic fields at distances 10 cm and 20 cm from an infinitely long straight wire carrying a steady current is:",
    "options": [
      "1 : 2",
      "1 : 4",
      "2 : 1",
      "4 : 1"
    ],
    "correctAnswer": 2,
    "explanation": "Magnetic field due to an infinitely long straight wire: B = (μ₀ I) / (2π r) ∝ 1 / r.\nB(10 cm) / B(20 cm) = 20 / 10 = 2 : 1.",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Biot-Savart Law"]
  },
  {
    "id": "ncert-phy-ch19-06",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Magnetic Field at Centre of Circular Arc",
    "difficulty": "Easy",
    "questionText": "A current I flows in a circular arc of wire of radius R which subtends an angle (2π / 9) radian at its centre. The magnetic field B at the centre is:",
    "options": [
      "(μ₀ I) / (2R)",
      "(μ₀ I) / (4R)",
      "(μ₀ I) / (18R)",
      "(μ₀ I) / (36R)"
    ],
    "correctAnswer": 2,
    "explanation": "Field at the centre of a circular arc: B = (μ₀ I / 4π R) · θ.\nHere θ = 2π / 9 rad.\nB = (μ₀ I / 4π R) · (2π / 9) = (μ₀ I) / (18 R).",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Biot-Savart Law"]
  },
  {
    "id": "ncert-phy-ch19-07",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Magnetic Field Between Parallel Wires",
    "difficulty": "Medium",
    "questionText": "Two long parallel wires carrying currents of 1 A and 2 A in the same direction produce a net magnetic field B at their midpoint. What will be the magnetic field at the midpoint if the 1 A current is switched off?",
    "options": [
      "B",
      "2 B",
      "B / 2",
      "3B / 2"
    ],
    "correctAnswer": 1,
    "explanation": "Let distance between wires be 2d. Midpoint is at distance d from each wire.\nFields are in opposite directions: B_net = B₂ - B₁ = (μ₀ · 2) / (2π d) - (μ₀ · 1) / (2π d) = μ₀ / (2π d) = B.\nWhen the 1 A wire is switched off, only B₂ remains: B' = B₂ = 2 · [μ₀ / (2π d)] = 2 B.",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Biot-Savart Law"]
  },
  {
    "id": "ncert-phy-ch19-08",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Field Inside and Outside Thick Wire",
    "difficulty": "Hard",
    "questionText": "A long straight solid cylindrical wire of radius a carries a steady current I uniformly distributed across its cross-section. The ratio of the magnetic field at a distance a/4 inside from the surface to that at a distance a/4 outside from the surface is:",
    "options": [
      "1 : 1",
      "7 : 16",
      "15 : 16",
      "16 : 9"
    ],
    "correctAnswer": 2,
    "explanation": "Distance from the central axis for a point a/4 inside from surface: r₁ = a - a/4 = 3a/4.\nInside field: B_in(r₁) = (μ₀ I r₁) / (2π a²) = (μ₀ I / 2π a) × (3/4).\nDistance from central axis for a point a/4 outside from surface: r₂ = a + a/4 = 5a/4.\nOutside field: B_out(r₂) = (μ₀ I) / (2π r₂) = (μ₀ I / 2π a) × (4/5).\nRatio B_in / B_out = (3/4) / (4/5) = 15 / 16.",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Ampere's Circuital Law"]
  },
  {
    "id": "ncert-phy-ch19-09",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Magnetic Field for Cyclotron Resonance",
    "difficulty": "Medium",
    "questionText": "The magnitude of magnetic field required to accelerate protons (mass = 1.67 × 10⁻²⁷ kg, charge = 1.6 × 10⁻¹⁹ C) in a cyclotron operated at an oscillator frequency of 10 MHz is approximately:",
    "options": [
      "0.66 T",
      "1.30 T",
      "0.85 T",
      "1.70 T"
    ],
    "correctAnswer": 0,
    "explanation": "Cyclotron resonance frequency f = qB / (2πm).\nB = (2π m f) / q = (2 × 3.1416 × 1.67 × 10⁻²⁷ kg × 10 × 10⁶ s⁻¹) / (1.6 × 10⁻¹⁹ C) ≈ 0.656 T ≈ 0.66 T.",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Cyclotron"]
  },
  {
    "id": "ncert-phy-ch19-10",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Magnetic Field Inside a Solenoid",
    "difficulty": "Easy",
    "questionText": "A long solenoid having 400 turns per meter carries a steady current of 5 A. The magnetic field at the centre of the solenoid is about:",
    "options": [
      "1.2 mT",
      "Zero",
      "5.0 mT",
      "2.5 mT"
    ],
    "correctAnswer": 3,
    "explanation": "Magnetic field inside an ideal solenoid is B = μ₀ n I.\nB = (4π × 10⁻⁷ T·m/A) × 400 m⁻¹ × 5 A = 8000π × 10⁻⁷ T ≈ 2.51 × 10⁻³ T = 2.5 mT.",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Solenoid"]
  },
  {
    "id": "ncert-phy-ch19-11",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Galvanometer to Ammeter Shunt Calculation",
    "difficulty": "Medium",
    "questionText": "A moving-coil galvanometer with coil resistance 1 kΩ has a full-scale deflection current of 1 mA. To convert it into an ammeter of range 10 A, the required shunt resistance is:",
    "options": [
      "(10³ / 9999) Ω",
      "1 Ω",
      "10⁴ Ω",
      "10³ Ω"
    ],
    "correctAnswer": 0,
    "explanation": "S = (I_g · R_g) / (I - I_g) = (10⁻³ A × 1000 Ω) / (10 A - 0.001 A) = 1 / 9.999 = 1000 / 9999 Ω = 10³ / 9999 Ω.",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Galvanometer Conversion"]
  },
  {
    "id": "ncert-phy-ch19-12",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Torque and Work on Magnetic Needle",
    "difficulty": "Medium",
    "questionText": "A magnetic needle is suspended parallel to a uniform magnetic field. The work required to turn it through 60° is 0.5 J. The torque required to maintain the needle in this position is:",
    "options": [
      "√3 N·m",
      "2 N·m",
      "(√3 / 2) N·m",
      "(1/2) N·m"
    ],
    "correctAnswer": 2,
    "explanation": "Work done W = MB (1 - cos 60°) = MB (1 - 1/2) = 0.5 MB.\nGiven W = 0.5 J => 0.5 MB = 0.5 => MB = 1 N·m.\nTorque τ = MB sin 60° = 1 × (√3 / 2) = (√3 / 2) N·m.",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Magnetic Dipole"]
  },
  {
    "id": "ncert-phy-ch19-13",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Magnetic Moment of Rotating Charged Spherical Shell",
    "difficulty": "Medium",
    "questionText": "A hollow spherical shell of mass m and radius R with charge Q uniformly distributed on its surface rotates about its diameter with angular velocity ω. The magnetic moment of the sphere is:",
    "options": [
      "(2/3) Q R² ω",
      "(2/5) Q R² ω",
      "(1/4) Q R² ω",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "For a surface-charged hollow sphere, the gyromagnetic ratio is M / L = Q / (2m). The moment of inertia of a spherical shell is I = (2/3) m R², so angular momentum L = I ω = (2/3) m R² ω.\nTherefore, M = (Q / 2m) · [(2/3) m R² ω] = (2/3) Q R² ω.",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Magnetic Moment"]
  },
  {
    "id": "ncert-phy-ch19-14",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Ratio of Magnetic Fields in Two Toroids",
    "difficulty": "Easy",
    "questionText": "Two toroids 1 and 2 have total number of turns 200 and 100 respectively, with average radii 40 cm and 20 cm respectively. If they carry the same electric current, the ratio of the magnetic fields along the two toroid loops is: [NEET-2019 (Odisha)]",
    "options": [
      "1 : 2",
      "1 : 1",
      "4 : 1",
      "2 : 1"
    ],
    "correctAnswer": 1,
    "explanation": "The magnetic field inside a toroid is B = μ₀ n I = μ₀ (N / 2πr) I.\nFor toroid 1: n₁ = 200 / (2π × 0.40) = 250 / π.\nFor toroid 2: n₂ = 100 / (2π × 0.20) = 250 / π.\nSince n₁ = n₂ and current I is identical, B₁ : B₂ = 1 : 1.",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Toroid", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch19-15",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Magnetic Field at Center of Symmetrically Fed Circular Loop",
    "difficulty": "Medium",
    "questionText": "A straight conductor carrying current i splits into two semicircular branches of a circular loop of radius R and recombines at the diametrically opposite end. The total magnetic field at the centre P of the loop is: [NEET-2019 (Odisha)]",
    "options": [
      "(μ₀ i) / (2R) inward",
      "Zero",
      "(3μ₀ i) / (32R) outward",
      "(3μ₀ i) / (32R) inward"
    ],
    "correctAnswer": 1,
    "explanation": "Due to geometric symmetry, the current divides equally into the two branches: i₁ = i₂ = i/2. The two halves create equal magnetic fields at the centre in opposite directions (one inward, one outward), completely cancelling each other out: B_net = 0.",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Biot-Savart Law", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch19-16",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Orbital Radii Ratio with Same Momentum",
    "difficulty": "Easy",
    "questionText": "Ionized hydrogen atoms (protons) and α-particles with the same linear momentum enter perpendicular to a uniform magnetic field B. The ratio of their orbital radii r_H : r_α will be: [NEET-2019]",
    "options": [
      "2 : 1",
      "1 : 2",
      "4 : 1",
      "1 : 4"
    ],
    "correctAnswer": 0,
    "explanation": "Radius of trajectory in magnetic field is r = p / (q B). With equal momentum p and same B: r ∝ 1/q.\nr_H / r_α = q_α / q_H = (2e) / e = 2 : 1.",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Motion of Charged Particle", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch19-17",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Magnetic Field of Rewound Coil",
    "difficulty": "Medium",
    "questionText": "A long wire carrying a steady current is bent into a circular loop of one turn, producing magnetic field B at its centre. It is then rewound into a circular coil of n turns. The magnetic field at the centre of this new n-turn coil will be: [NEET (Phase-2) 2016]",
    "options": [
      "n B",
      "n² B",
      "2n B",
      "2n² B"
    ],
    "correctAnswer": 1,
    "explanation": "For 1 turn: length L = 2πR => B = μ₀ I / (2R).\nFor n turns: L = n(2πR') => R' = R / n.\nNew field at centre B' = n [μ₀ I / (2R')] = n [μ₀ I / (2(R/n))] = n² [μ₀ I / (2R)] = n² B.",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Biot-Savart Law", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch19-18",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Frequency of Revolution of Electron",
    "difficulty": "Medium",
    "questionText": "An electron moves in a circular path under the influence of a transverse magnetic field of 3.57 × 10⁻² T. If e/m = 1.76 × 10¹¹ C/kg, the frequency of revolution of the electron is: [NEET (Phase-2) 2016]",
    "options": [
      "1 GHz",
      "100 MHz",
      "62.8 MHz",
      "6.28 MHz"
    ],
    "correctAnswer": 0,
    "explanation": "f = (e B) / (2π m) = (1 / 2π) · (e/m) · B = [1.76 × 10¹¹ C/kg × 3.57 × 10⁻² T] / (2 × 3.1416) = 6.283 × 10⁹ / 6.283 ≈ 1.0 × 10⁹ Hz = 1 GHz.",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Motion of Charged Particle", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch19-19",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Kinetic Energy Ratio in Same Magnetic Radius",
    "difficulty": "Medium",
    "questionText": "A proton and an alpha particle both enter a uniform magnetic field B at right angles to the field. If the radius of circular orbits for both particles is equal and the kinetic energy of the proton is 1 MeV, the kinetic energy of the alpha particle is: [Re-AIPMT-2015]",
    "options": [
      "1 MeV",
      "4 MeV",
      "0.5 MeV",
      "1.5 MeV"
    ],
    "correctAnswer": 0,
    "explanation": "Orbital radius r = √(2mK) / (qB) => K = (q² B² r²) / (2m). Hence K ∝ q² / m.\nK_α / K_p = (q_α / q_p)² × (m_p / m_α) = (2e / e)² × (m_p / 4m_p) = 4 × (1/4) = 1.\nTherefore, K_α = K_p = 1 MeV.",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Motion of Charged Particle", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch19-20",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Force on a Segment of a Closed Current Loop",
    "difficulty": "Medium",
    "questionText": "A square current-carrying loop is suspended in a uniform magnetic field acting in the plane of the loop. If the magnetic force on one arm of the loop is F⃗, the net force on the remaining three arms of the loop is: [AIPMT-2010]",
    "options": [
      "3 F⃗",
      "-F⃗",
      "-3 F⃗",
      "F⃗"
    ],
    "correctAnswer": 1,
    "explanation": "For any closed planar loop of wire carrying steady current in a uniform magnetic field, the total magnetic force is strictly zero: F⃗_net = F⃗_arm1 + F⃗_remaining = 0. Therefore, F⃗_remaining = -F⃗_arm1 = -F⃗.",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Magnetic Force", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch19-21",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Specific Charge of Cathode Rays from Velocity Selector",
    "difficulty": "Medium",
    "questionText": "A beam of cathode rays is subjected to crossed electric (E) and magnetic (B) fields and passes undeflected. The electrons are accelerated by potential difference V between cathode and anode. The specific charge (e/m) of cathode rays is: [AIPMT-2010]",
    "options": [
      "B² / (2 V E²)",
      "(2 V B²) / E²",
      "(2 V E²) / B²",
      "E² / (2 V B²)"
    ],
    "correctAnswer": 3,
    "explanation": "For undeflected passage in crossed fields: v = E / B.\nKinetic energy from accelerating potential: (1/2) m v² = e V => v² = 2 (e/m) V.\nSubstitute v = E/B: (E/B)² = 2 (e/m) V => e/m = E² / (2 V B²).",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Velocity Selector", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch19-22",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Perpendicular Semicircular Coils Field",
    "difficulty": "Medium",
    "questionText": "A current loop consists of two identical semicircular parts each of radius R carrying current i, one lying in the x-y plane and the other in the x-z plane. The magnitude of resultant magnetic field at their common centre is: [AIPMT-2010]",
    "options": [
      "(μ₀ i) / (2√2 R)",
      "(μ₀ i) / (2 R)",
      "(μ₀ i) / (4 R)",
      "(μ₀ i) / (√2 R)"
    ],
    "correctAnswer": 0,
    "explanation": "Field due to each semicircular loop at centre: B₁ = B₂ = (1/2) · (μ₀ i / 2R) = μ₀ i / (4R).\nSince the loops lie in mutually perpendicular planes (x-y and x-z), their magnetic field vectors are mutually perpendicular (along z and y axes respectively):\nB_net = √(B₁² + B₂²) = √2 · [μ₀ i / (4R)] = (μ₀ i) / (2√2 R).",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Biot-Savart Law", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch19-23",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Magnetic Force on Conductor of Arbitrary Curve",
    "difficulty": "Medium",
    "questionText": "A wire carrying a current i is bent into the shape of a curve y = a sin(πx / L) for 0 ≤ x ≤ 2L in the x-y plane. A uniform magnetic field B acts into the plane (along -z axis). The net magnetic force on the wire is:",
    "options": [
      "(i B L) / π",
      "i B L π",
      "2 i B L",
      "Zero"
    ],
    "correctAnswer": 2,
    "explanation": "For any current-carrying conductor in a uniform magnetic field, the net magnetic force depends only on the vector displacement from the starting point to the end point: F⃗ = i (L⃗_eff × B⃗).\nHere initial point is (0, 0) and final point is (2L, 0), so displacement vector is L⃗_eff = 2L î.\nForce magnitude F = i (2L) B sin 90° = 2 i B L.",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Magnetic Force"]
  },
  {
    "id": "ncert-phy-ch19-24",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Gyromagnetic Ratio",
    "difficulty": "Easy",
    "questionText": "The gyromagnetic ratio (ratio of magnetic dipole moment to orbital angular momentum) for an electron of charge e and mass m is given by:",
    "options": [
      "e / m",
      "e / (2m)",
      "(2e) / m",
      "m / (2e)"
    ],
    "correctAnswer": 1,
    "explanation": "Magnetic moment of orbiting electron μ = (1/2) e v r. Angular momentum L = m v r. The ratio μ / L = [(1/2) e v r] / (m v r) = e / (2m).",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Magnetic Moment"]
  },
  {
    "id": "ncert-phy-ch19-25",
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "Parallel Current-Carrying Wires Interaction",
    "difficulty": "Easy",
    "questionText": "Two parallel conductors carrying steady currents in the same direction attract each other. This magnetic attraction is fundamentally due to:",
    "options": [
      "Electrostatic attraction between opposite charges",
      "Magnetic forces exerted by the magnetic field of each conductor on the moving charges in the other",
      "Electric fields induced by the changing flux",
      "Nuclear forces between copper conductors"
    ],
    "correctAnswer": 1,
    "explanation": "Each current produces a circular magnetic field around it according to Biot-Savart/Ampere's law. The charges moving in the second conductor experience a magnetic Lorentz force F⃗ = I (L⃗ × B⃗) directed toward the first wire, resulting in mutual attraction.",
    "tags": ["NCERT NEET Physics", "Moving Charges and Magnetism", "Parallel Currents"]
  }
];
