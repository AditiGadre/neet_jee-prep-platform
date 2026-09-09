import { Question } from '../types';

export const NCERT_ELECTROSTATIC_POTENTIAL_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch17-01",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Equipotential Points in Uniform Field",
    "difficulty": "Easy",
    "questionText": "In a region of uniform electric field E directed along the positive x-axis, four points A, B, C, and D are situated such that the line AB is perpendicular to the field lines and CD is also perpendicular to the field lines, with CD situated further to the right. Which of the following statements is correct?",
    "options": [
      "V_A < V_B",
      "V_C = V_D",
      "V_B = V_D",
      "V_A = V_D"
    ],
    "correctAnswer": 1,
    "explanation": "Since electric field is perpendicular to equipotential surfaces, all points on a plane perpendicular to E⃗ have the same potential. Line CD is perpendicular to E⃗, hence V_C = V_D. Also, V_A = V_B, and because potential decreases along the field direction, V_A = V_B > V_C = V_D.",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Equipotential Surfaces"]
  },
  {
    "id": "ncert-phy-ch17-02",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Potential at Centre of Equilateral Triangle",
    "difficulty": "Easy",
    "questionText": "Three point charges -Q, -q, and +2q are placed at the vertices of an equilateral triangle of side length L. If the electric potential at the centre of the triangle is zero, the correct relation between Q and q is:",
    "options": [
      "Q = q",
      "Q = 2q",
      "Q = -q",
      "Q = -2q"
    ],
    "correctAnswer": 0,
    "explanation": "The distance r from each vertex to the centre of an equilateral triangle is the same (r = L / √3).\nTotal potential V = (1 / 4πε₀ r) · [(-Q) + (-q) + (2q)] = 0.\n=> -Q - q + 2q = 0 => -Q + q = 0 => Q = q.",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Electric Potential"]
  },
  {
    "id": "ncert-phy-ch17-03",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Potential Due to Short Electric Dipole",
    "difficulty": "Easy",
    "questionText": "The electric potential at any point with position vector r⃗ due to a short electric dipole of dipole moment p⃗ is given by (where k = 1 / 4πε₀):",
    "options": [
      "(k p⃗ · r⃗) / r²",
      "(k p⃗ · r⃗) / r³",
      "(k p⃗ × r⃗) / r²",
      "(k p⃗ × r⃗) / r³"
    ],
    "correctAnswer": 1,
    "explanation": "The electrostatic potential of a short electric dipole is V = (1 / 4πε₀) · (p cos θ / r²) = (k p⃗ · r̂) / r² = (k p⃗ · r⃗) / r³.",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Electric Dipole"]
  },
  {
    "id": "ncert-phy-ch17-04",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Superposition of Potential at Triangle Vertex",
    "difficulty": "Easy",
    "questionText": "Two charges +2 μC and +8 μC are placed at two vertices of an equilateral triangle of side 1 m. The electric potential at the third vertex of the triangle is:",
    "options": [
      "90 × 10³ V",
      "9 × 10³ V",
      "0.9 × 10³ V",
      "900 × 10³ V"
    ],
    "correctAnswer": 0,
    "explanation": "Distance from each charge to the third vertex is r = 1 m.\nV = (1 / 4πε₀) · (q₁/r + q₂/r) = (9 × 10⁹) · [(2 + 8) × 10⁻⁶ / 1] = 9 × 10⁹ × 10 × 10⁻⁶ = 90 × 10³ V.",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Electric Potential"]
  },
  {
    "id": "ncert-phy-ch17-05",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Axial Potential of a Finite Dipole",
    "difficulty": "Medium",
    "questionText": "An electric dipole consists of charges -q at x = -a and +q at x = +a. The electric potential at an axial point A at distance r from the centre (r > a) on the positive side is:",
    "options": [
      "(3 k q a) / (r - a)",
      "(2 k q a) / (r² - a²)",
      "(k q a) / (r² - a²)",
      "(4 k q a) / (r² - a²)"
    ],
    "correctAnswer": 1,
    "explanation": "Distance from +q to A is (r - a), distance from -q to A is (r + a).\nV_A = k [q / (r - a) - q / (r + a)] = k q [(r + a - (r - a)) / (r² - a²)] = (2 k q a) / (r² - a²).",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Electric Dipole"]
  },
  {
    "id": "ncert-phy-ch17-06",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Surface Curvature and Electric Field on Conductor",
    "difficulty": "Easy",
    "questionText": "An isolated charged conductor has a pear-like shape with a sharp curved region A and a broader, flatter region B. If the electric fields just outside the conductor at points A and B are E_A and E_B respectively, then:",
    "options": [
      "E_B > E_A",
      "E_A > E_B",
      "E_A = E_B ≠ 0",
      "E_A = E_B = 0"
    ],
    "correctAnswer": 1,
    "explanation": "On a charged conductor, surface charge density σ is inversely proportional to the radius of curvature (σ ∝ 1/R). At the sharper pointed end A, radius of curvature is smaller, so σ_A > σ_B. Since the electric field just outside a conductor is E = σ / ε₀, we have E_A > E_B.",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Electrostatics of Conductors"]
  },
  {
    "id": "ncert-phy-ch17-07",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Potential Energy of Dipole in Uniform Field",
    "difficulty": "Easy",
    "questionText": "An electric dipole of dipole moment p⃗ is placed in a uniform electric field E⃗. The electrostatic potential energy of the dipole is given by:",
    "options": [
      "p⃗ × E⃗",
      "-p⃗ × E⃗",
      "p⃗ · E⃗",
      "-p⃗ · E⃗"
    ],
    "correctAnswer": 3,
    "explanation": "Taking the potential energy to be zero when the dipole is perpendicular to the electric field (θ = 90°), the potential energy at any angle θ is U = -pE cos θ = -p⃗ · E⃗.",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Electric Dipole"]
  },
  {
    "id": "ncert-phy-ch17-08",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Work Done Moving Charge in Point Charge Field",
    "difficulty": "Medium",
    "questionText": "A positive test charge q is carried slowly from a point x (distance a from source) to a point y (distance b from source) in the electric field of a fixed point charge +Q. The work done by the external force is:",
    "options": [
      "(Qq / 4πε₀) · (1/b - 1/a)",
      "(Qq / 2πε₀) · (1/a - 1/b)",
      "(Qq / 2πε₀) · (1/a + 1/b)",
      "(Qq / 2πε₀) · (1/b - 1/a)"
    ],
    "correctAnswer": 0,
    "explanation": "Work done by external force = ΔU = U_y - U_x = (Qq / 4πε₀)(1/r_y - 1/r_x) = (Qq / 4πε₀)(1/b - 1/a).",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Electric Potential"]
  },
  {
    "id": "ncert-phy-ch17-09",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Orientation for Maximum Potential Energy",
    "difficulty": "Easy",
    "questionText": "An electric dipole placed in a uniform electric field has maximum electrostatic potential energy when the angle between the dipole moment and the electric field is:",
    "options": [
      "90°",
      "180°",
      "0°",
      "270°"
    ],
    "correctAnswer": 1,
    "explanation": "Potential energy U = -pE cos θ. U is maximum when cos θ = -1, which occurs at θ = 180° (unstable equilibrium, U_max = +pE).",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Electric Dipole"]
  },
  {
    "id": "ncert-phy-ch17-10",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Work Done Rotating Dipole by 90 Degrees",
    "difficulty": "Medium",
    "questionText": "An electric dipole of dipole moment p is placed parallel to a uniform electric field E. The work done by an external force to rotate it perpendicular to the field is:",
    "options": [
      "-pE",
      "pE",
      "2pE",
      "-2pE"
    ],
    "correctAnswer": 1,
    "explanation": "Work done by external force W_ext = ΔU = U(90°) - U(0°) = (-pE cos 90°) - (-pE cos 0°) = 0 - (-pE) = +pE.",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Electric Dipole"]
  },
  {
    "id": "ncert-phy-ch17-11",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Heat Dissipated During Capacitor Charging",
    "difficulty": "Medium",
    "questionText": "A capacitor of capacitance 2 μF is connected to a battery of 10 V. The energy dissipated as heat in the connecting wires until the capacitor is completely charged is:",
    "options": [
      "200 μJ",
      "100 μJ",
      "50 μJ",
      "400 μJ"
    ],
    "correctAnswer": 1,
    "explanation": "Energy supplied by the battery = Q V = C V² = (2 × 10⁻⁶ F) × (10 V)² = 200 μJ.\nElectrostatic energy stored in capacitor = (1/2) C V² = 100 μJ.\nHeat dissipated = Work done by battery - Stored energy = C V² - (1/2) C V² = (1/2) C V² = 100 μJ.",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Capacitors"]
  },
  {
    "id": "ncert-phy-ch17-12",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Half Space Dielectric Insertion",
    "difficulty": "Medium",
    "questionText": "A parallel plate air capacitor has capacitance C. Half of the space between the plates (divided vertically across the plate area A/2) is filled with a dielectric of constant K = 5. The new capacitance of the capacitor is:",
    "options": [
      "C / 3",
      "3 C",
      "(5/2) C",
      "(3/2) C"
    ],
    "correctAnswer": 1,
    "explanation": "When the slab divides the area into two equal halves each of area A/2 with same separation d, the two parts act in parallel:\nC₁ = ε₀ (A/2) / d = C / 2\nC₂ = K ε₀ (A/2) / d = K C / 2 = 5 C / 2\nC_new = C₁ + C₂ = C/2 + 5C/2 = 6C / 2 = 3C.",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Capacitors"]
  },
  {
    "id": "ncert-phy-ch17-13",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Charge Redistribution Between Conducting Spheres",
    "difficulty": "Hard",
    "questionText": "Two metal spheres, one of radius R and the other of radius 2R, have the same initial surface charge density σ. They are brought in contact and then separated. What will be the new surface charge densities on them? [NEET-2019 (Odisha)]",
    "options": [
      "σ₁ = (5/3) σ, σ₂ = (5/6) σ",
      "σ₁ = (5/6) σ, σ₂ = (5/2) σ",
      "σ₁ = (5/2) σ, σ₂ = (5/6) σ",
      "σ₁ = (5/2) σ, σ₂ = (5/3) σ"
    ],
    "correctAnswer": 0,
    "explanation": "Initial charges: q₁ = σ(4πR²), q₂ = σ(4π(2R)²) = 4σ(4πR²).\nTotal charge Q = q₁ + q₂ = 5σ(4πR²).\nAfter contact, spheres reach a common potential, so charges distribute proportional to radii: q₁'/q₂' = R₁/R₂ = 1/2.\nq₁' = (1/3) Q = (5/3) σ(4πR²) => σ₁' = q₁' / (4πR²) = (5/3) σ.\nq₂' = (2/3) Q = (10/3) σ(4πR²) => σ₂' = q₂' / (4π(2R)²) = (10/12) σ = (5/6) σ.",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Electrostatics of Conductors", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch17-14",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Energy Loss in Parallel Capacitor Sharing",
    "difficulty": "Medium",
    "questionText": "Two identical capacitors C₁ and C₂ of equal capacitance C are used. Capacitor C₁ is charged using a battery of emf V. The battery is disconnected and C₁ is connected across uncharged C₂ in parallel. The percentage loss of stored energy in this process is: [NEET-2019 (Odisha)]",
    "options": [
      "25%",
      "75%",
      "0%",
      "50%"
    ],
    "correctAnswer": 3,
    "explanation": "Initial energy U_i = (1/2) C V².\nWhen connected to identical uncharged capacitor C, common potential V' = V/2.\nFinal energy U_f = (1/2) (2C) (V/2)² = (1/4) C V² = U_i / 2.\nLoss of energy ΔU = U_i - U_f = (1/2) U_i.\nPercentage loss = (ΔU / U_i) × 100% = 50%.",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Capacitors", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch17-15",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electrostatic Force Between Isolated Capacitor Plates",
    "difficulty": "Medium",
    "questionText": "The electrostatic force of attraction between the metal plates of an isolated parallel plate capacitor C having charge Q and plate area A is: [NEET-2018]",
    "options": [
      "Independent of the distance between the plates",
      "Linearly proportional to the distance between the plates",
      "Inversely proportional to the distance between the plates",
      "Proportional to the square root of the distance between the plates"
    ],
    "correctAnswer": 0,
    "explanation": "The electric field due to one plate is E₁ = σ / (2ε₀) = Q / (2A ε₀).\nThe electrostatic force on the other plate carrying charge Q is F = Q E₁ = Q² / (2A ε₀).\nSince neither Q nor A depends on plate separation d for an isolated capacitor, the force is independent of the distance between the plates.",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Capacitors", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch17-16",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Energy Dissipated in Two-Capacitor Sharing",
    "difficulty": "Medium",
    "questionText": "A capacitor of 2 μF is charged to potential V. When it is disconnected from the battery and connected in parallel to an uncharged 8 μF capacitor, the percentage of its stored energy dissipated is: [NEET-2016]",
    "options": [
      "80%",
      "0%",
      "20%",
      "75%"
    ],
    "correctAnswer": 0,
    "explanation": "Energy loss formula for capacitor sharing with initially uncharged C₂:\nFractional loss = ΔU / U_i = C₂ / (C₁ + C₂) = 8 μF / (2 μF + 8 μF) = 8/10 = 0.80 = 80%.",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Capacitors", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch17-17",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Attractive Force on Parallel Plate Capacitor",
    "difficulty": "Medium",
    "questionText": "A parallel plate air capacitor has capacitance C, plate separation d, and potential difference V applied between the plates. The force of attraction between the plates is: [Re-AIPMT-2015]",
    "options": [
      "(C² V²) / (2 d²)",
      "(C² V²) / (2 d)",
      "(C V²) / (2 d)",
      "(C V²) / d"
    ],
    "correctAnswer": 2,
    "explanation": "F = Q² / (2 A ε₀) = (C V)² / (2 A ε₀).\nSince C = ε₀ A / d => A ε₀ = C d, substituting gives:\nF = C² V² / (2 C d) = C V² / (2 d).",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Capacitors", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch17-18",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Potential and Field at Centre of Conducting Sphere",
    "difficulty": "Easy",
    "questionText": "A conducting sphere of radius R is given a charge Q. The electric potential and the electric field at the centre of the sphere respectively are: [AIPMT-2014]",
    "options": [
      "Zero and Q / (4πε₀ R²)",
      "Q / (4πε₀ R) and zero",
      "Q / (4πε₀ R) and Q / (4πε₀ R²)",
      "Both are zero"
    ],
    "correctAnswer": 1,
    "explanation": "Inside a charged conductor, the electric field is everywhere zero (E = 0) and the electric potential is constant throughout its entire volume, equal to its value on the surface: V = Q / (4πε₀ R).",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Electrostatics of Conductors", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch17-19",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Force from 3D Potential Function",
    "difficulty": "Hard",
    "questionText": "In a region of space, the electric potential is given by V(x, y, z) = 6x - 8xy - 8y + 6yz (in volts). The electric force experienced by a charge of 2 C situated at the point (1, 1, 1) is: [AIPMT-2014]",
    "options": [
      "6√5 N",
      "30 N",
      "24 N",
      "4√35 N"
    ],
    "correctAnswer": 3,
    "explanation": "E_x = -∂V/∂x = -(6 - 8y) = -6 + 8(1) = 2 N/C.\nE_y = -∂V/∂y = -(-8x - 8 + 6z) = 8(1) + 8 - 6(1) = 10 N/C.\nE_z = -∂V/∂z = -(6y) = -6(1) = -6 N/C.\nMagnitude of electric field: E = √(2² + 10² + (-6)²) = √(4 + 100 + 36) = √140 = 2√35 N/C.\nForce on charge q = 2 C: F = qE = 2 × 2√35 = 4√35 N.",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Potential Gradient", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch17-20",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Equipotentials and Path Independence of Work",
    "difficulty": "Medium",
    "questionText": "Four different equipotential diagrams show a positive charge q moved from a surface at 10 V to a surface at 40 V. In all diagrams the initial potential is 10 V and final potential is 40 V. The work done in moving the charge from A to B: [NEET-2017]",
    "options": [
      "Is maximum in the case where surfaces are most closely curved",
      "In all four cases the work done is the same",
      "Is minimum in the planar case",
      "Depends on the path taken"
    ],
    "correctAnswer": 1,
    "explanation": "Electrostatic field is conservative, so work done depends only on the potential difference between the initial and final points: W = q(V_B - V_A) = q(40 V - 10 V) = 30q J. Since V_A and V_B are identical in all cases, work done is exactly the same.",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Equipotential Surfaces", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch17-21",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Ratio of Capacitance for Series and Parallel Coalescence",
    "difficulty": "Medium",
    "questionText": "64 small identical mercury drops of radius r and capacitance C combine to form a single bigger spherical drop. The capacitance of the bigger drop is:",
    "options": [
      "4 C",
      "2 C",
      "64 C",
      "32 C"
    ],
    "correctAnswer": 0,
    "explanation": "Volume of 64 drops = Volume of big drop: 64 × (4/3 π r³) = 4/3 π R³ => R = (64)^(1/3) r = 4r.\nSince capacitance of a spherical conductor is C = 4πε₀ R, C_big = 4 C_small = 4C.",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Capacitors"]
  },
  {
    "id": "ncert-phy-ch17-22",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Internal Field of Uniform Solid Dielectric Sphere",
    "difficulty": "Medium",
    "questionText": "A solid non-conducting sphere of radius R has a uniform charge distribution throughout its volume. At a distance x from its centre (where x < R), the electric field is directly proportional to:",
    "options": [
      "1 / x²",
      "1 / x",
      "x",
      "x²"
    ],
    "correctAnswer": 2,
    "explanation": "Inside a uniformly charged solid sphere (x < R), enclosed charge q_in = Q (x³ / R³).\nBy Gauss's law: E(4πx²) = q_in / ε₀ = Q x³ / (ε₀ R³) => E = (Q / 4πε₀ R³) · x.\nThus E is directly proportional to x (linear increase from centre).",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Electric Field"]
  },
  {
    "id": "ncert-phy-ch17-23",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Potential at Centre vs Surface of Solid Sphere",
    "difficulty": "Medium",
    "questionText": "For a uniformly charged non-conducting solid sphere with total charge Q and radius R (taking potential at infinity to be zero), the electric potential at the centre V_c is related to the surface potential V_s by:",
    "options": [
      "V_c = (3/2) V_s",
      "V_c = (2/3) V_s",
      "V_c = V_s",
      "V_c = 2 V_s"
    ],
    "correctAnswer": 0,
    "explanation": "Inside a uniformly charged solid sphere, V(r) = (kQ / 2R³) (3R² - r²). At the centre r = 0: V_c = 3 kQ / (2R) = (3/2) V_s.",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Electric Potential"]
  },
  {
    "id": "ncert-phy-ch17-24",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electric Field Variation Across Dielectric Slabs",
    "difficulty": "Medium",
    "questionText": "Two thin dielectric slabs of dielectric constants K₁ and K₂ (with K₁ < K₂) are inserted between the plates of a parallel plate capacitor. If E₀ is the field in vacuum, the electric field inside the slabs E₁ and E₂ satisfy:",
    "options": [
      "E₀ > E₁ > E₂",
      "E₂ > E₁ > E₀",
      "E₁ = E₂ = E₀",
      "E₀ > E₂ > E₁"
    ],
    "correctAnswer": 0,
    "explanation": "The electric field inside a dielectric slab with constant K is reduced to E = E₀ / K. Since 1 < K₁ < K₂, we have E₀ > E₀ / K₁ > E₀ / K₂, meaning E₀ > E₁ > E₂.",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Capacitors"]
  },
  {
    "id": "ncert-phy-ch17-25",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Capacitance of Concentric Earthed Inner Sphere",
    "difficulty": "Hard",
    "questionText": "Two concentric hollow spherical conductors of radii a and b (b > a) are placed in air. The outer sphere is given a positive charge +Q and the inner sphere is earthed. The equivalent capacitance of the system is:",
    "options": [
      "4πε₀ [ab / (b - a)]",
      "4πε₀ (a + b)",
      "4πε₀ b",
      "4πε₀ [b² / (b - a)]"
    ],
    "correctAnswer": 3,
    "explanation": "When the outer sphere carries charge +Q and the inner sphere is grounded, charge induced on the inner sphere is q = -Q (a/b). The outer surface of the outer sphere carries charge Q(1 - a/b) = Q(b - a)/b and behaves like an isolated sphere of radius b in parallel with the spherical capacitor formed by the two concentric surfaces:\nC = 4πε₀ [ab / (b - a)] + 4πε₀ b = 4πε₀ [ab + b(b - a)] / (b - a) = 4πε₀ [b² / (b - a)].",
    "tags": ["NCERT NEET Physics", "Electrostatic Potential and Capacitance", "Capacitors"]
  }
];
