import { Question } from '../types';

export const NCERT_UNITS_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch02-ex01",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Vernier Callipers Least Count",
    "difficulty": "Medium",
    "questionText": "In a Vernier callipers, 10 vernier scale divisions (VSD) coincide precisely with 8 main scale divisions (MSD). If 1 MSD equals 1 mm, the least count of the Vernier callipers is:",
    "options": [
      "1 × 10⁻⁴ m",
      "2 × 10⁻⁴ m",
      "1 × 10⁻³ m",
      "8 × 10⁻⁴ m"
    ],
    "correctAnswer": 1,
    "explanation": "Least Count = 1 MSD - 1 VSD = 1 MSD - 0.8 MSD = 0.2 MSD = 0.2 mm = 2 × 10⁻⁴ m.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-ex02",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Accuracy and Precision",
    "difficulty": "Medium",
    "questionText": "Which of the following measurements of length represents the highest precision and accuracy?",
    "options": [
      "40 m",
      "0.04 m",
      "0.040 m",
      "0.4 m"
    ],
    "correctAnswer": 2,
    "explanation": "0.040 m has 3 decimal places (resolution 1 mm), providing the highest precision among the options.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-ex03",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Random Errors and Sample Size",
    "difficulty": "Medium",
    "questionText": "If the random error in the arithmetic mean of 50 independent observations is α, then the random error in the arithmetic mean of 150 observations under identical conditions will be:",
    "options": [
      "α",
      "3α",
      "α / 3",
      "2α"
    ],
    "correctAnswer": 2,
    "explanation": "Random error is inversely proportional to the number of observations (error ∝ 1/n). For 3× observations, error becomes α/3.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-ex04",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Momentum and Kinetic Energy Error",
    "difficulty": "Hard",
    "questionText": "If the linear momentum of an object of constant mass is increased by 10%, its kinetic energy will increase by:",
    "options": [
      "20%",
      "21%",
      "40%",
      "19%"
    ],
    "correctAnswer": 1,
    "explanation": "K = p²/(2m). For p' = 1.1p, K' = (1.1)² K = 1.21 K. Percentage increase = 21%.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-ex05",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Significant Figures in Addition",
    "difficulty": "Medium",
    "questionText": "Three length measurements are recorded as 18.425 cm, 7.21 cm, and 5.0 cm. The sum of these measurements reported to the correct number of significant figures should be written as:",
    "options": [
      "30.635 cm",
      "30.64 cm",
      "30.63 cm",
      "30.6 cm"
    ],
    "correctAnswer": 3,
    "explanation": "In addition, result retains the least number of decimal places (5.0 has 1 decimal place). 18.425 + 7.21 + 5.0 = 30.635 ≈ 30.6 cm.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-ex06",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Error Limits in Linear Combination",
    "difficulty": "Medium",
    "questionText": "If x = (10.0 ± 0.1) and y = (10.0 ± 0.1), then the computed value of (2x – 2y) with maximum absolute error limits is equal to:",
    "options": [
      "(0.0 ± 0.1)",
      "Zero",
      "(0.0 ± 0.4)",
      "(20 ± 0.2)"
    ],
    "correctAnswer": 2,
    "explanation": "Z = 2x - 2y = 0. ΔZ = 2Δx + 2Δy = 2(0.1) + 2(0.1) = 0.4. Hence, (0.0 ± 0.4).",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-ex07",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Significant Figures in Scientific Notation",
    "difficulty": "Easy",
    "questionText": "The diameter of a thin wire is measured to be 0.0205 × 10⁻⁴ m. The number of significant figures in this measurement is:",
    "options": [
      "Five",
      "Four",
      "Three",
      "Nine"
    ],
    "correctAnswer": 2,
    "explanation": "Leading zeroes before 2 are not significant. Significant digits are '2', '0', '5' (3 significant figures).",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-ex08",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Area Significant Figures",
    "difficulty": "Medium",
    "questionText": "The radius of a circle is measured to be 2.12 m. Its area calculated and rounded off according to the rule of significant figures is:",
    "options": [
      "14.1124 m²",
      "14.112 m²",
      "14.11 m²",
      "14.1 m²"
    ],
    "correctAnswer": 3,
    "explanation": "r = 2.12 m (3 sig figs). Area = π r² = 3.14159 × (2.12)² = 14.1196 m² ≈ 14.1 m² (3 sig figs).",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-ex09",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Potential Difference Significant Figures",
    "difficulty": "Medium",
    "questionText": "If the resistance of a resistor is 10.845 Ω and the measured current is 3.23 A, the value of electric potential difference reported with appropriate significant figures is:",
    "options": [
      "35.0 V",
      "3.50 V",
      "35.029 V",
      "35.030 V"
    ],
    "correctAnswer": 0,
    "explanation": "V = IR = 3.23 × 10.845 = 35.029 V. Current has 3 sig figs, so result must be rounded to 3 sig figs: 35.0 V.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-ex10",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Error in Cylinder Volume",
    "difficulty": "Hard",
    "questionText": "The length of a uniform cylindrical rod is 100.0 cm and radius is 1.00 cm. If length is measured with a meter scale having least count 1 mm and radius is measured with vernier callipers having least count 0.1 mm, the maximum percentage error in the calculated volume of the cylinder is:",
    "options": [
      "2.1%",
      "3.0%",
      "2.01%",
      "3.2%"
    ],
    "correctAnswer": 0,
    "explanation": "V = π r² L ⟹ ΔV/V = 2(Δr/r) + ΔL/L = 2(0.01/1.0) + (0.1/100) = 2% + 0.1% = 2.1%.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-ex11",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Binomial Approximation (1003)^1/3",
    "difficulty": "Medium",
    "questionText": "The numerical value of (1003)^(1/3) calculated using the Binomial approximation (1 + x)^n ≈ 1 + nx is:",
    "options": [
      "10.01",
      "10.00",
      "10.3",
      "10.03"
    ],
    "correctAnswer": 0,
    "explanation": "(1003)^(1/3) = 10 (1 + 3/1000)^(1/3) ≈ 10 (1 + 0.001) = 10.01.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-ex12",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Binomial Approximation (997)^1/3",
    "difficulty": "Medium",
    "questionText": "The value of (997)^(1/3) evaluated using the Binomial theorem approximation is:",
    "options": [
      "9.00",
      "9.99",
      "10.90",
      "9.33"
    ],
    "correctAnswer": 1,
    "explanation": "(997)^(1/3) = 10 (1 - 3/1000)^(1/3) ≈ 10 (1 - 0.001) = 9.99.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-ex13",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Binomial Expansion in Thermal Radiation",
    "difficulty": "Medium",
    "questionText": "The value of K [(1 + ΔT/T₀)⁴ - 1] (where ΔT << T₀) evaluated according to the Binomial theorem is:",
    "options": [
      "K ΔT / T₀",
      "2 K ΔT / T₀",
      "4 K ΔT / T₀",
      "K ΔT / (4 T₀)"
    ],
    "correctAnswer": 2,
    "explanation": "(1 + ΔT/T₀)⁴ ≈ 1 + 4(ΔT/T₀). K[(1 + 4ΔT/T₀) - 1] = 4 K ΔT / T₀.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-ex14",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Dimensions of Time in Energy",
    "difficulty": "Easy",
    "questionText": "The dimensional formula of energy is [ML²T⁻²]. The dimension of time in energy is:",
    "options": [
      "0",
      "–2",
      "2",
      "1"
    ],
    "correctAnswer": 1,
    "explanation": "In [M¹ L² T⁻²], the power of time T is -2.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-ex15",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Dimensionless Quantities",
    "difficulty": "Easy",
    "questionText": "Which one of the following is a dimensionless physical quantity?",
    "options": [
      "Velocity gradient",
      "Stress",
      "Force gradient",
      "Angle"
    ],
    "correctAnswer": 3,
    "explanation": "Angle = arc length / radius = [L]/[L] = [M⁰L⁰T⁰] (dimensionless).",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-ex16",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Dimensional Homogeneity",
    "difficulty": "Medium",
    "questionText": "Two physical quantities A and B have different dimensions. Which mathematical operation between them is physically possible?",
    "options": [
      "√(AB)",
      "A(1 + B)",
      "A – B",
      "A + B"
    ],
    "correctAnswer": 0,
    "explanation": "Quantities with different dimensions can be multiplied or divided (√(AB)), but never added or subtracted.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-ex17",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Dimensionally Incorrect Formula",
    "difficulty": "Medium",
    "questionText": "Which of the following physical relations is dimensionally INCORRECT?",
    "options": [
      "u = v – at",
      "s – ut = (1/2) at²",
      "u² = 2a (gt – 1)",
      "v² – u² = 2as"
    ],
    "correctAnswer": 2,
    "explanation": "In u² = 2a(gt - 1), (gt - 1) subtracts a dimensionless scalar from velocity [LT⁻¹], which violates dimensional homogeneity.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-ex18",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "System of Units Energy Conversion",
    "difficulty": "Hard",
    "questionText": "1 Joule of energy is to be converted into a new system of units in which length is measured in 10 m, mass in 10 kg, and time in 1 minute (60 s). The numerical value of 1 J in the new system is:",
    "options": [
      "36 × 10⁻⁴",
      "36 × 10⁻³",
      "36 × 10⁻²",
      "36 × 10⁻¹"
    ],
    "correctAnswer": 3,
    "explanation": "n₂ = 1 × [1/10]¹ × [1/10]² × [1/60]⁻² = (1/1000) × 3600 = 3.6 = 36 × 10⁻¹.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-ex19",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Fundamental Units Mass Calculation",
    "difficulty": "Hard",
    "questionText": "If the unit of force is 1 kN (1000 N), the unit of length is 1 km (1000 m), and the unit of time is 100 s, what will be the corresponding unit of mass?",
    "options": [
      "1000 kg",
      "1 kg",
      "10000 kg",
      "100 kg"
    ],
    "correctAnswer": 2,
    "explanation": "[M] = [F L⁻¹ T²] = (10³ N) × (10³ m)⁻¹ × (10² s)² = 10⁴ kg = 10,000 kg.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-ex20",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Moment of Couple Dimensions",
    "difficulty": "Easy",
    "questionText": "The dimensional formula for moment of a couple (torque) is:",
    "options": [
      "[ML²T⁻²]",
      "[MLT⁻²]",
      "[ML⁻¹T⁻³]",
      "[ML⁻²T⁻²]"
    ],
    "correctAnswer": 0,
    "explanation": "Moment of couple = Force × distance = [MLT⁻²] × [L] = [ML²T⁻²].",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-ex21",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Potential Energy Functional Dimensions",
    "difficulty": "Hard",
    "questionText": "The potential energy U of a particle varies with distance x from a fixed origin as U = (A √x) / (x² + B), where A and B are dimensional constants. The dimensional formula for (AB) is:",
    "options": [
      "[ML^(7/2) T⁻²]",
      "[ML^(11/2) T⁻²]",
      "[M²L^(9/2) T⁻²]",
      "[ML^(13/2) T⁻³]"
    ],
    "correctAnswer": 1,
    "explanation": "[B] = [x²] = [L²]. [U] = [ML²T⁻²] = [A] L^(1/2) / L² ⟹ [A] = [ML^(7/2) T⁻²]. [AB] = [ML^(11/2) T⁻²].",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-ex22",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Different Dimensions Identification",
    "difficulty": "Medium",
    "questionText": "Of the following quantities, which one has dimensions different from the remaining three?",
    "options": [
      "Energy per unit volume",
      "Force per unit area",
      "Product of voltage and charge per unit volume",
      "Angular momentum per unit mass"
    ],
    "correctAnswer": 3,
    "explanation": "Energy/vol, Force/area, and (Vq)/vol all have dimension of pressure [ML⁻¹T⁻²]. Angular momentum/mass = [L²T⁻¹] (Different).",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-ex23",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Non-Deducible Equations by Dimensions",
    "difficulty": "Medium",
    "questionText": "Which of the following relations cannot be deduced using dimensional analysis alone?",
    "options": [
      "y = A sin(ωt + kx)",
      "v = u + at",
      "K = (1/2) m v²",
      "All of these"
    ],
    "correctAnswer": 3,
    "explanation": "Trigonometric functions, multi-term additions, and dimensionless constants cannot be deduced by dimensional analysis.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-secA-01",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "NCERT MCQs - Instrumental Error",
    "difficulty": "Easy",
    "questionText": "The source of instrumental error in measurements is:",
    "options": [
      "Improper designing or calibration",
      "Zero error of instrument",
      "External temperature conditions",
      "Both (1) & (2)"
    ],
    "correctAnswer": 3,
    "explanation": "Instrumental error is caused by imperfect calibration and zero error. Hence Both (1) & (2).",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-secA-02",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "NCERT MCQs - Parallel Resistors Relative Error",
    "difficulty": "Hard",
    "questionText": "For two resistors R₁ = (10.0 ± 0.1) Ω and R₂ = (20.0 ± 0.4) Ω connected in parallel, the relative error in equivalent resistance is:",
    "options": [
      "0.08",
      "0.05",
      "0.01",
      "0.04"
    ],
    "correctAnswer": 1,
    "explanation": "ΔR_p/R_p = R_p [ΔR₁/R₁² + ΔR₂/R₂²] = (20/3)[0.1/100 + 0.4/400] = (20/3)(0.002) = 0.0133 ≈ 0.05 max sum limit.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-secA-03",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "NCERT MCQs - Mass Accuracy",
    "difficulty": "Easy",
    "questionText": "The true value of a mass is 8.5 g. Readings by four balances A, B, C, D are 8.2 g, 8.48 g, 8.186 g, and 8 g. The most accurate balance is:",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctAnswer": 1,
    "explanation": "8.48 g is closest to 8.5 g (|8.48 - 8.5| = 0.02 g).",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-secA-04",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "NCERT MCQs - Supplementary Units",
    "difficulty": "Easy",
    "questionText": "Which of the following is a supplementary SI unit?",
    "options": [
      "radian",
      "steradian",
      "candela",
      "Both (1) & (2)"
    ],
    "correctAnswer": 3,
    "explanation": "Radian and steradian are supplementary SI units.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-secA-05",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "NCERT MCQs - Number of Significant Zeroes",
    "difficulty": "Medium",
    "questionText": "In the measured value 10.1000 g, the number of zeroes which are significant is:",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 3,
    "explanation": "One trapped zero + three trailing decimal zeroes = 4 significant zeroes.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-secA-06",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "NCERT MCQs - Percentage Error in R",
    "difficulty": "Medium",
    "questionText": "If R = (a² √b) / (c⁴ d) and percentage errors in a, b, c, d are 0.1%, 0.2%, 0.3%, 0.4%, maximum percentage error in R is:",
    "options": [
      "1.9%",
      "3.1%",
      "2.9%",
      "4.0%"
    ],
    "correctAnswer": 0,
    "explanation": "ΔR/R = 2(0.1%) + 0.5(0.2%) + 4(0.3%) + 0.4% = 0.2% + 0.1% + 1.2% + 0.4% = 1.9%.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-secA-07",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "NCERT MCQs - Derived Units",
    "difficulty": "Easy",
    "questionText": "Which of the following physical quantities has a derived unit?",
    "options": [
      "Acceleration",
      "Mass",
      "Current",
      "Amount of substance"
    ],
    "correctAnswer": 0,
    "explanation": "Acceleration (m/s²) is a derived physical quantity.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-secA-08",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "NCERT MCQs - Traveling Wave Dimensions",
    "difficulty": "Medium",
    "questionText": "The velocity of a particle is v = ω A cos(ωt – kx). The dimensions of (k / ω) are:",
    "options": [
      "[L T⁻¹]",
      "[L⁻¹ T¹]",
      "[L² T⁻²]",
      "[L⁻² T²]"
    ],
    "correctAnswer": 1,
    "explanation": "k/ω = 1/v = 1/[LT⁻¹] = [L⁻¹ T¹].",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-secA-09",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "NCERT MCQs - Same Dimensions as Energy",
    "difficulty": "Easy",
    "questionText": "Which of the following quantities has the same dimensions as energy?",
    "options": [
      "Power",
      "Force",
      "Momentum",
      "Work"
    ],
    "correctAnswer": 3,
    "explanation": "Work and energy both have dimension [ML²T⁻²].",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-secA-10",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "NCERT MCQs - Error Representation",
    "difficulty": "Medium",
    "questionText": "The mean time period of a pendulum is 2.00 s and mean absolute error is 0.05 s. Time period is written as:",
    "options": [
      "(2.00 ± 0.01) s",
      "(2.00 + 0.025) s",
      "(2.00 ± 0.05) s",
      "(2.00 ± 0.10) s"
    ],
    "correctAnswer": 2,
    "explanation": "T = T_mean ± ΔT_mean = (2.00 ± 0.05) s.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-secA-11",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "NCERT MCQs - Same Dimensions Pair",
    "difficulty": "Easy",
    "questionText": "The pair of quantities having the same dimensions is:",
    "options": [
      "Displacement, velocity",
      "Time, frequency",
      "Wavelength, focal length",
      "Force, acceleration"
    ],
    "correctAnswer": 2,
    "explanation": "Wavelength and focal length both represent length [L].",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-secA-12",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "NCERT MCQs - Spring Constant Dimensions",
    "difficulty": "Medium",
    "questionText": "The dimensions of k in the equation W = (1/2) k x² (where W is work done and x is displacement) is:",
    "options": [
      "[M¹ L⁰ T⁻²]",
      "[M⁰ L¹ T⁻¹]",
      "[M¹ L¹ T⁻²]",
      "[M¹ L⁰ T⁻¹]"
    ],
    "correctAnswer": 0,
    "explanation": "[k] = [W]/[x²] = [ML²T⁻²]/[L²] = [M¹ L⁰ T⁻²].",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-secA-13",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "NCERT MCQs - Length Range",
    "difficulty": "Easy",
    "questionText": "Length measured by an instrument is represented as l = (5.0 ± 0.1) m, then length l is:",
    "options": [
      "l < 0.1 m",
      "4.9 m ≤ l ≤ 5.1 m",
      "l > 5.1 m",
      "l < 4.9 m"
    ],
    "correctAnswer": 1,
    "explanation": "5.0 - 0.1 ≤ l ≤ 5.0 + 0.1 ⟹ 4.9 m ≤ l ≤ 5.1 m.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-secA-14",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "NCERT MCQs - Pendulum Percentage Error",
    "difficulty": "Easy",
    "questionText": "Time period of a simple pendulum is measured to be T = (2.5 ± 0.1) s. The percentage error in measurement is:",
    "options": [
      "2%",
      "4%",
      "1%",
      "2.5%"
    ],
    "correctAnswer": 1,
    "explanation": "(0.1 / 2.5) × 100% = 4%.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-secA-15",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "NCERT MCQs - Plate Perimeter Error",
    "difficulty": "Medium",
    "questionText": "Length and breadth of a plate are L = (4.0 ± 0.2) m and B = (2.0 ± 0.1) m. The perimeter of the plate is:",
    "options": [
      "12.0 ± 0.3 m",
      "12.0 ± 0.6 m",
      "6.0 ± 0.3 m",
      "6.0 ± 0.2 m"
    ],
    "correctAnswer": 1,
    "explanation": "P = 2(L+B) = 12.0 m. ΔP = 2(ΔL+ΔB) = 2(0.2+0.1) = 0.6 m ⟹ (12.0 ± 0.6) m.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-pyq-01",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "NEET-2019 Odisha - Vernier Least Count Formula",
    "difficulty": "Medium",
    "questionText": "The main scale of a vernier callipers has n divisions/cm. n divisions of the vernier scale coincide with (n – 1) divisions of main scale. The least count of the vernier callipers is:",
    "options": [
      "1 / [(n+1)(n-1)] cm",
      "1 / n cm",
      "1 / n² cm",
      "1 / [n(n+1)] cm"
    ],
    "correctAnswer": 2,
    "explanation": "1 MSD = 1/n cm. 1 VSD = (n - 1)/n MSD. LC = 1 MSD - 1 VSD = (1/n) MSD = (1/n)(1/n) = 1/n² cm.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-pyq-02",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "NEET-2019 - Error in Product Combination",
    "difficulty": "Medium",
    "questionText": "In an experiment, percentage error occurred in physical quantities A, B, C, D are 1%, 2%, 3%, 4% respectively. The maximum percentage error in X = (A² B^(1/2)) / (C^(1/3) D³) will be:",
    "options": [
      "(3/13)%",
      "16%",
      "–10%",
      "10%"
    ],
    "correctAnswer": 1,
    "explanation": "ΔX/X = 2(1%) + (1/2)(2%) + (1/3)(3%) + 3(4%) = 2% + 1% + 1% + 12% = 16%.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-pyq-03",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "NEET-2018 - Screw Gauge Zero Error Correction",
    "difficulty": "Hard",
    "questionText": "A student measured the diameter of a small steel ball using a screw gauge of least count 0.001 cm. Main scale reading is 5 mm and circular scale division is 25. If screw gauge has a zero error of –0.004 cm, the correct diameter of the ball is:",
    "options": [
      "0.521 cm",
      "0.525 cm",
      "0.529 cm",
      "0.053 cm"
    ],
    "correctAnswer": 2,
    "explanation": "Observed Reading = MSR + CSR × LC = 0.5 cm + 25 × 0.001 cm = 0.525 cm.\nCorrect reading = Observed - (Zero Error) = 0.525 - (-0.004) = 0.529 cm.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-pyq-04",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "NEET-2017 - Fundamental Constants Dimensions of Length",
    "difficulty": "Hard",
    "questionText": "A physical quantity of the dimensions of length that can be formed out of c, G and e²/(4πε₀) is:",
    "options": [
      "(1/c²) [G e² / (4πε₀)]^(1/2)",
      "c² [G e² / (4πε₀)]^(1/2)",
      "(1/c²) [e² / (4πε₀ G)]^(1/2)",
      "(1/c) [G e² / (4πε₀)]"
    ],
    "correctAnswer": 0,
    "explanation": "Length L = (1/c²) √[G (e² / 4πε₀)]. Dimensions: [G] = M⁻¹L³T⁻², [e²/4πε₀] = ML³T⁻², product = L⁶T⁻⁴. Square root = L³T⁻². Divided by c² (L²T⁻²) gives L.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-pyq-05",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "NEET-2016 - Planck Constant and Gravity Length Dimension",
    "difficulty": "Hard",
    "questionText": "Planck's constant (h), speed of light (c) and gravitational constant (G) are three fundamental constants. Which combination has the dimension of length (Planck length)?",
    "options": [
      "√(h G / c³)",
      "√(h G / c⁵)",
      "√(h c / G)",
      "√(G c³ / h)"
    ],
    "correctAnswer": 0,
    "explanation": "Planck length l_p = √(h G / c³) = [ML²T⁻¹ · M⁻¹L³T⁻² / L³T⁻³]^(1/2) = [L²]^(1/2) = L.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-pyq-06",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "Re-AIPMT-2015 - Reynolds Critical Velocity Powers",
    "difficulty": "Hard",
    "questionText": "If dimensions of critical velocity v_c of a liquid flowing through a tube are expressed as [ηˣ ρʸ rᶻ] where η, ρ, r are viscosity, density, and radius respectively, then the values of x, y, z are:",
    "options": [
      "1, 1, 1",
      "1, –1, –1",
      "–1, –1, 1",
      "–1, –1, –1"
    ],
    "correctAnswer": 1,
    "explanation": "Critical velocity v_c = N_R η / (ρ r) ⟹ x = 1, y = -1, z = -1.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-pyq-07",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "AIPMT-2015 - Surface Tension in E, V, T",
    "difficulty": "Hard",
    "questionText": "If energy (E), velocity (V) and time (T) are chosen as fundamental quantities, the dimensional formula of surface tension is:",
    "options": [
      "[E⁻² V⁻¹ T⁻³]",
      "[E V⁻² T⁻¹]",
      "[E V⁻¹ T⁻²]",
      "[E V⁻² T⁻²]"
    ],
    "correctAnswer": 3,
    "explanation": "Surface tension S = Energy / Area = [E] / [V T]² = [E V⁻² T⁻²].",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-pyq-08",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "AIPMT-2014 - Mass in F, V, T",
    "difficulty": "Medium",
    "questionText": "If force (F), velocity (V) and time (T) are taken as fundamental units, then the dimensions of mass are:",
    "options": [
      "[F V T⁻¹]",
      "[F V T⁻²]",
      "[F V⁻¹ T⁻¹]",
      "[F V⁻¹ T]"
    ],
    "correctAnswer": 3,
    "explanation": "Mass = Force / Acceleration = Force / (Velocity / Time) = [F V⁻¹ T].",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-pyq-09",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "NEET-2013 - Error in P = a³b²/cd",
    "difficulty": "Medium",
    "questionText": "In an experiment four quantities a, b, c, d are measured with percentage error 1%, 2%, 3%, 4% respectively. Quantity P = (a³ b²) / (c d). Percentage error in P is:",
    "options": [
      "10%",
      "7%",
      "4%",
      "14%"
    ],
    "correctAnswer": 3,
    "explanation": "ΔP/P = 3(1%) + 2(2%) + 3% + 4% = 3% + 4% + 3% + 4% = 14%.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-pyq-10",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "AIPMT-2012 - Damping Force Constant Unit",
    "difficulty": "Medium",
    "questionText": "The damping force on an oscillator is directly proportional to velocity (F = b v). The SI units of the constant of proportionality b are:",
    "options": [
      "kg s⁻¹",
      "kg s",
      "kg m s⁻¹",
      "kg m s⁻²"
    ],
    "correctAnswer": 0,
    "explanation": "b = F / v = (kg m s⁻²) / (m s⁻¹) = kg s⁻¹.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-pyq-11",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "AIPMT-2011 - Dimension of (μ₀ε₀)^(-1/2)",
    "difficulty": "Easy",
    "questionText": "The dimensions of (μ₀ ε₀)⁻¹/² are:",
    "options": [
      "[L⁻¹/² T¹/²]",
      "[L¹/² T⁻¹/²]",
      "[L⁻¹ T]",
      "[L T⁻¹]"
    ],
    "correctAnswer": 3,
    "explanation": "c = 1 / √(μ₀ ε₀) = (μ₀ ε₀)⁻¹/² represents the speed of light in vacuum with dimension [L T⁻¹].",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  },
  {
    "id": "ncert-phy-ch02-pyq-12",
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "AIPMT-2011 - Density Unit Conversion",
    "difficulty": "Medium",
    "questionText": "The density of a material in CGS system is 4 g/cm³. In a system of units where unit of length is 10 cm and unit of mass is 100 g, the numerical value of density will be:",
    "options": [
      "400",
      "0.04",
      "0.4",
      "40"
    ],
    "correctAnswer": 3,
    "explanation": "n₂ = 4 × [1 g / 100 g]¹ × [1 cm / 10 cm]⁻³ = 4 × (1/100) × (1000) = 40.",
    "tags": [
      "NCERT NEET Physics",
      "Units and Measurement",
      "Class 11"
    ]
  }
];
