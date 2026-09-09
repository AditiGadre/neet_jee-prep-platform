import { Question } from '../types';

export const NCERT_ELECTRIC_CHARGES_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch16-01",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Additivity of Electric Charges",
    "difficulty": "Easy",
    "questionText": "A system contains six point charges: +1 μC, +2 μC, -3 μC, +4 μC, -5 μC and +6 μC. The total electric charge of the system is:",
    "options": [
      "5 μC",
      "-5 μC",
      "Zero",
      "2 μC"
    ],
    "correctAnswer": 0,
    "explanation": "Electric charge is an algebraic scalar quantity and follows the principle of additivity of charge: Q_total = (+1) + (+2) + (-3) + (+4) + (-5) + (+6) = 5 μC.",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Properties of Charge"]
  },
  {
    "id": "ncert-phy-ch16-02",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Quantization of Charge",
    "difficulty": "Easy",
    "questionText": "The number of electrons present in 2 coulomb of negative charge is:",
    "options": [
      "1.25 × 10¹⁷",
      "1.25 × 10¹⁹",
      "6.25 × 10¹⁸",
      "6.25 × 10¹⁹"
    ],
    "correctAnswer": 1,
    "explanation": "From quantization of electric charge: q = n · e.\nn = q / e = 2 C / (1.6 × 10⁻¹⁹ C) = 1.25 × 10¹⁹ electrons.",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Quantization of Charge"]
  },
  {
    "id": "ncert-phy-ch16-03",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Permittivity of Free Space",
    "difficulty": "Easy",
    "questionText": "The SI unit of permittivity of free space (ε₀) is:",
    "options": [
      "C / (N · m)",
      "C² / (N · m²)",
      "N · m² / C",
      "C² · N / m"
    ],
    "correctAnswer": 1,
    "explanation": "From Coulomb's law, F = (1 / 4πε₀) · (q₁q₂ / r²). Rearranging gives ε₀ = (q₁q₂) / (4π F r²). Units: C · C / (N · m²) = C² / (N · m²) or C² N⁻¹ m⁻².",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Units and Dimensions"]
  },
  {
    "id": "ncert-phy-ch16-04",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Coulomb's Law & Newton's Third Law",
    "difficulty": "Easy",
    "questionText": "Two point charges q₁ and q₂ are separated by a distance r. The ratio of the electrostatic forces acting on each other is:",
    "options": [
      "q₁ : q₂",
      "q₂ : q₁",
      "q₁² : q₂²",
      "1 : 1"
    ],
    "correctAnswer": 3,
    "explanation": "According to Newton's third law and Coulomb's law in vector form, F⃗₁₂ = -F⃗₂₁. The magnitudes of mutual electrostatic forces between two interacting charges are always strictly equal, giving |F₁₂| : |F₂₁| = 1 : 1.",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Coulomb's Law"]
  },
  {
    "id": "ncert-phy-ch16-05",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Coulomb's Inverse Square Law",
    "difficulty": "Easy",
    "questionText": "If the distance between two point charges is doubled, then the electrostatic force between them will become:",
    "options": [
      "2 times",
      "4 times",
      "1/4 times",
      "1/2 times"
    ],
    "correctAnswer": 2,
    "explanation": "Electrostatic force varies inversely as the square of separation: F ∝ 1 / r². When r' = 2r, F' = F / 2² = F / 4.",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Coulomb's Law"]
  },
  {
    "id": "ncert-phy-ch16-06",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Dipole Moment of Triangular System",
    "difficulty": "Medium",
    "questionText": "Three point charges -2q, +q and +q are placed at the vertices of an equilateral triangle of side l, with -2q at the top vertex and +q at each of the bottom vertices. The electric dipole moment of the system is:",
    "options": [
      "√3 ql",
      "ql",
      "2 ql",
      "√2 ql"
    ],
    "correctAnswer": 0,
    "explanation": "Splitting -2q into (-q) and (-q) gives two individual dipoles of magnitude p = ql, each inclined at 60° to one another. The resultant dipole moment is P_net = √(p² + p² + 2p² cos 60°) = √(3p²) = √3 ql.",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Electric Dipole"]
  },
  {
    "id": "ncert-phy-ch16-07",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Infinite Line Charge Field",
    "difficulty": "Medium",
    "questionText": "An infinite line charge produces an electric field of 18 × 10¹⁰ N/C at a distance of 1 m. The linear charge density is:",
    "options": [
      "10 C/m",
      "2 × 10⁻¹ C/m",
      "2 × 10⁻² C/m",
      "2 × 10⁻³ C/m"
    ],
    "correctAnswer": 0,
    "explanation": "The electric field due to an infinitely long line charge is E = λ / (2πε₀ r) = 2kλ / r.\nλ = (E · r) / (2k) = (18 × 10¹⁰ × 1) / (18 × 10⁹) = 10 C/m.",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Gauss's Law"]
  },
  {
    "id": "ncert-phy-ch16-08",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Gauss's Law for Enclosed Dipole",
    "difficulty": "Easy",
    "questionText": "An electric dipole of dipole moment p is enclosed in a hollow sphere of radius R (R > l, where l is the length of dipole). The electric flux through the sphere is:",
    "options": [
      "Zero",
      "(4πR²) × p",
      "p / (l ε₀)",
      "p / (2l ε₀)"
    ],
    "correctAnswer": 0,
    "explanation": "By Gauss's law, Φ = q_enclosed / ε₀. An electric dipole consists of equal and opposite charges (+q and -q), so q_enclosed = 0, giving zero net flux through the sphere.",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Gauss's Law"]
  },
  {
    "id": "ncert-phy-ch16-09",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Axial Field of Short Dipole",
    "difficulty": "Easy",
    "questionText": "The electric field due to a short electric dipole at a distance r on its axis is:",
    "options": [
      "Directly proportional to r",
      "Inversely proportional to r³",
      "Directly proportional to r²",
      "Inversely proportional to r"
    ],
    "correctAnswer": 1,
    "explanation": "For a short dipole (r >> a), E_axial = 2kp / r³. Hence the field is inversely proportional to r³.",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Electric Dipole"]
  },
  {
    "id": "ncert-phy-ch16-10",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Angle Between Dipole Moment and Axial Field",
    "difficulty": "Easy",
    "questionText": "The angle between the electric dipole moment and the electric field strength due to it on the axial line is:",
    "options": [
      "0°",
      "90°",
      "270°",
      "180°"
    ],
    "correctAnswer": 0,
    "explanation": "On the axial line of an electric dipole, the electric field vector points in the same direction as the dipole moment vector p⃗ (from -q to +q). Hence the angle is 0°.",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Electric Dipole"]
  },
  {
    "id": "ncert-phy-ch16-11",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Flux and Surface Size Independence",
    "difficulty": "Easy",
    "questionText": "A charge of 20 μC is enclosed by a Gaussian spherical surface of radius 10 cm. If the radius is doubled, then outward electric flux will:",
    "options": [
      "Be doubled",
      "Be reduced to half",
      "Increase four times",
      "Remain same"
    ],
    "correctAnswer": 3,
    "explanation": "According to Gauss's law, Φ = q_enclosed / ε₀. The total flux depends only on the enclosed charge, not on the dimensions of the Gaussian surface. Hence it remains the same.",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Gauss's Law"]
  },
  {
    "id": "ncert-phy-ch16-12",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Dipole Torque in Uniform Field",
    "difficulty": "Medium",
    "questionText": "The net torque acting on an electric dipole placed in a uniform electric field may be:",
    "options": [
      "Zero",
      "pE / 2",
      "pE",
      "All of these"
    ],
    "correctAnswer": 3,
    "explanation": "Torque τ = pE sin θ. As θ varies from 0° to 180°, sin θ varies from 0 to 1, taking values 0 (at 0°), 1/2 (at 30°), and 1 (at 90°). Thus all of these values are possible.",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Electric Dipole"]
  },
  {
    "id": "ncert-phy-ch16-13",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Electrostatic Field Lines Properties",
    "difficulty": "Easy",
    "questionText": "Which of the following is NOT a property of electrostatic field lines?",
    "options": [
      "Field lines are continuous curves in free space without any break",
      "Two field lines cannot intersect each other",
      "Field lines start at positive charge and end at negative charge",
      "Electrostatic field lines form closed loops"
    ],
    "correctAnswer": 3,
    "explanation": "Electrostatic field lines cannot form closed loops because electrostatic field is conservative (line integral ∮ E⃗ · dl⃗ = 0).",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Field Lines"]
  },
  {
    "id": "ncert-phy-ch16-14",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Flux Through Area Vector",
    "difficulty": "Easy",
    "questionText": "The electric field is given by E⃗ = (5î + 8ĵ + 9k̂) N/C. The electric flux through a surface whose area vector is given by A⃗ = 10î m² would be:",
    "options": [
      "5 units",
      "10 units",
      "50 units",
      "100 units"
    ],
    "correctAnswer": 2,
    "explanation": "Electric flux Φ = E⃗ · A⃗ = (5î + 8ĵ + 9k̂) · (10î) = 5 × 10 = 50 units (N·m²/C).",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Electric Flux"]
  },
  {
    "id": "ncert-phy-ch16-15",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Axial vs Equatorial Dipole Field Directions",
    "difficulty": "Easy",
    "questionText": "The directions of electric field at axial and equatorial points of an electric dipole are:",
    "options": [
      "Parallel to each other",
      "Antiparallel to each other",
      "Perpendicular to each other",
      "At some angle between 0° and 180°"
    ],
    "correctAnswer": 1,
    "explanation": "At an axial point, E⃗ is parallel to dipole moment p⃗. At an equatorial point, E⃗ is antiparallel to p⃗ (-p⃗ direction). Thus, the fields at axial and equatorial points are antiparallel to each other.",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Electric Dipole"]
  },
  {
    "id": "ncert-phy-ch16-16",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Neutral Particle in Electric Field",
    "difficulty": "Easy",
    "questionText": "If a neutron has an initial velocity in a direction different from that of a uniform electric field, the path of the neutron (neglecting gravity) is:",
    "options": [
      "A straight line",
      "Parabola",
      "Circle",
      "Ellipse"
    ],
    "correctAnswer": 0,
    "explanation": "A neutron has zero charge (q = 0). It experiences zero electrostatic force in an electric field. Since no force acts on it, its velocity vector remains constant and its trajectory is a straight line.",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Motion of Charged Particle"]
  },
  {
    "id": "ncert-phy-ch16-17",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Alpha Particle Circular Orbit Around Line Charge",
    "difficulty": "Medium",
    "questionText": "An alpha particle is revolving around an infinitely long line charge of linear charge density λ at a perpendicular distance r from it. The centripetal force on the particle is:",
    "options": [
      "(λe) / (2πε₀ r)",
      "(λe) / (πε₀ r)",
      "(λe) / (4πε₀ r)",
      "(λe) / (πε₀ r²)"
    ],
    "correctAnswer": 1,
    "explanation": "Electric field of line charge E = λ / (2πε₀ r). Force on alpha particle (q = 2e) is F = qE = 2e · [λ / (2πε₀ r)] = (λe) / (πε₀ r), which provides the required centripetal force.",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Gauss's Law"]
  },
  {
    "id": "ncert-phy-ch16-18",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Suspended Charges in Orbiting Satellite",
    "difficulty": "Hard",
    "questionText": "Two identical small bodies each of mass m and charge q are suspended from two strings each of length l from a fixed point. When this whole system is taken into an orbiting artificial satellite, find the tension in each string:",
    "options": [
      "(K q² / l²) + 2 mg",
      "(K q² / 4l²) + 2 mg",
      "K q² / l²",
      "K q² / (4l²)"
    ],
    "correctAnswer": 3,
    "explanation": "In an orbiting satellite, effective gravity g_eff = 0. Electrostatic repulsion pushes the two charges directly apart into a straight line of length 2l. The tension in each string balances the electrostatic repulsion: T = F_e = K q² / (2l)² = K q² / (4l²).",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Coulomb's Law"]
  },
  {
    "id": "ncert-phy-ch16-19",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Force Between Two Dipoles",
    "difficulty": "Medium",
    "questionText": "The force between two short electric dipoles separated by a distance r is directly proportional to:",
    "options": [
      "r",
      "r²",
      "1 / r³",
      "1 / r⁴"
    ],
    "correctAnswer": 3,
    "explanation": "For two short dipoles, the interaction potential energy varies as U ∝ 1 / r³. Since force F = -dU / dr, differentiating gives F ∝ 1 / r⁴.",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Electric Dipole"]
  },
  {
    "id": "ncert-phy-ch16-20",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Field of Uniformly Charged Metal Sphere",
    "difficulty": "Easy",
    "questionText": "A hollow metal sphere of radius R is uniformly charged. The electric field due to the sphere at a distance r from the centre: [NEET-2019]",
    "options": [
      "Increases as r increases for r < R and for r > R",
      "Zero as r increases for r < R, decreases as r increases for r > R",
      "Zero as r increases for r < R, increases as r increases for r > R",
      "Decreases as r increases for r < R and for r > R"
    ],
    "correctAnswer": 1,
    "explanation": "Inside the hollow conducting sphere (r < R), the enclosed charge is zero, so E = 0. Outside the sphere (r > R), E = Q / (4πε₀ r²), which decreases inversely with r² as r increases.",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Gauss's Law", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch16-21",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Field Between Opposite Parallel Line Charges",
    "difficulty": "Medium",
    "questionText": "Two parallel infinite line charges with linear charge densities +λ C/m and -λ C/m are placed at a distance of 2R in free space. What is the electric field mid-way between the two line charges? [NEET-2019]",
    "options": [
      "Zero",
      "2λ / (πε₀ R) N/C",
      "λ / (πε₀ R) N/C",
      "λ / (2πε₀ R) N/C"
    ],
    "correctAnswer": 2,
    "explanation": "Midway between the wires, distance from each wire is R. Field from +λ points away from it: E₁ = λ / (2πε₀ R). Field from -λ points towards it: E₂ = λ / (2πε₀ R) in the same direction. Total field E = E₁ + E₂ = λ / (πε₀ R) N/C.",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Gauss's Law", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch16-22",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Force Between Charges After Fractional Transfer",
    "difficulty": "Easy",
    "questionText": "Two point charges A and B, having charges +Q and -Q respectively, are placed at a distance apart and force acting between them is F. If 25% charge of A is transferred to B, then the force between the charges becomes: [NEET-2019]",
    "options": [
      "F",
      "(9/16) F",
      "(16/9) F",
      "(4/3) F"
    ],
    "correctAnswer": 1,
    "explanation": "Initial force F = k Q² / r². When 25% (Q/4) is transferred from A to B:\nqA' = Q - Q/4 = 3Q/4, and qB' = -Q + Q/4 = -3Q/4.\nNew force F' = k (3Q/4)² / r² = (9/16) (k Q² / r²) = (9/16) F.",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Coulomb's Law", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch16-23",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Kinematics of Charged Toy Car in Electric Field",
    "difficulty": "Hard",
    "questionText": "A toy car with charge q moves on a frictionless horizontal plane under a uniform electric field E⃗. Its velocity increases from 0 to 6 m/s in 1 s. At that instant the field is reversed, and the car continues for 2 more seconds. The average velocity and average speed of the car from 0 to 3 s are respectively: [NEET-2018]",
    "options": [
      "2 m/s, 4 m/s",
      "1 m/s, 3 m/s",
      "1.5 m/s, 3 m/s",
      "1 m/s, 3.5 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "Acceleration a = 6 m/s². From t = 0 to 1 s: s₁ = 3 m, v(1) = 6 m/s.\nFrom t = 1 to 2 s: deceleration a = -6 m/s², stops at t = 2 s, s₂ = 3 m.\nFrom t = 2 to 3 s: accelerates backwards from rest with a = -6 m/s², s₃ = -3 m.\nNet displacement = 3 + 3 - 3 = 3 m => v_avg = 3/3 = 1 m/s.\nTotal distance = 3 + 3 + 3 = 9 m => speed_avg = 9/3 = 3 m/s.",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Motion of Charged Particle", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch16-24",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Time of Fall in Reversed Electric Field",
    "difficulty": "Medium",
    "questionText": "An electron falls from rest through vertical distance h in uniform upward electric field E. The field direction is reversed with magnitude unchanged, and a proton falls from rest through same distance h. The time of fall of electron compared to proton is: [NEET-2018]",
    "options": [
      "Smaller",
      "5 times greater",
      "Equal",
      "10 times greater"
    ],
    "correctAnswer": 0,
    "explanation": "Acceleration is a = eE / m. Since t = √(2h / a) = √(2hm / (eE)), t ∝ √m. As mass of electron is much less than proton (m_e << m_p), the electron has much greater acceleration and thus smaller time of fall.",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Motion of Charged Particle", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch16-25",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Order of Magnitude of Charge Difference",
    "difficulty": "Hard",
    "questionText": "Suppose proton and electron charges differ slightly: -e and (e + Δe). If net electrostatic and gravitational force between two hydrogen atoms at distance d apart is zero, then Δe is of the order of (m_h = 1.67 × 10⁻²⁷ kg): [NEET-2017]",
    "options": [
      "10⁻²⁰ C",
      "10⁻²³ C",
      "10⁻³⁷ C",
      "10⁻⁴⁷ C"
    ],
    "correctAnswer": 2,
    "explanation": "Net charge on hydrogen atom = Δe. Setting electrostatic repulsion equal to gravitational attraction: (1 / 4πε₀) · (Δe)² / d² = G m_h² / d².\n(Δe)² = 4πε₀ G m_h² = (6.67 × 10⁻¹¹ × (1.67 × 10⁻²⁷)²) / (9 × 10⁹) ≈ 2.06 × 10⁻⁷⁴ C².\nΔe ≈ 1.4 × 10⁻³⁷ C, which is of order 10⁻³⁷ C.",
    "tags": ["NCERT NEET Physics", "Electric Charges and Fields", "Coulomb's Law", "NEET PYQ"]
  }
];
