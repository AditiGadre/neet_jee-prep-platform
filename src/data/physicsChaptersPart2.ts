import { Question } from '../types';

export const ELASTICITY_QUESTIONS: Question[] = [
  {
    "id": "ela-q1",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Hard",
    "questionText": "According to Hooke's law of elasticity, if stress is increased, the ratio of stress to strain",
    "options": [
      "Increases",
      "Decreases",
      "Becomes zero",
      "Remains constant"
    ],
    "correctAnswer": 3,
    "explanation": "Within the proportional limit, stress ∝ strain => Stress / Strain = Modulus of Elasticity = Constant.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q2",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Medium",
    "questionText": "The Young's modulus of a perfectly rigid body is",
    "options": [
      "Zero",
      "Unity",
      "Infinity",
      "Finite positive value"
    ],
    "correctAnswer": 2,
    "explanation": "A perfectly rigid body cannot be deformed (strain = 0 for any finite stress). Y = Stress / 0 = Infinity.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q3",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Easy",
    "questionText": "A wire of length L and cross-sectional area A is stretched by length ΔL under load F. The energy stored per unit volume (energy density) is",
    "options": [
      "(1/2) × stress × strain",
      "stress × strain",
      "(1/2) Y × strain",
      "Y × stress"
    ],
    "correctAnswer": 0,
    "explanation": "Energy density u = U / V = (1/2) F ΔL / (A L) = (1/2) × (F/A) × (ΔL/L) = (1/2) × stress × strain = (1/2) Y (strain)².",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q4",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Medium",
    "questionText": "The SI unit of modulus of elasticity is",
    "options": [
      "N/m",
      "N/m² (Pascal)",
      "N·m",
      "Dimensionless"
    ],
    "correctAnswer": 1,
    "explanation": "Modulus of elasticity = Stress / Strain. Since strain is dimensionless, [Modulus] = [Stress] = Force / Area = N/m² = Pa.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q5",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Hard",
    "questionText": "A steel wire and a copper wire of equal length and cross-section are subjected to equal tensile forces. If Y_steel > Y_copper, the extension produced in steel wire is",
    "options": [
      "Greater than in copper",
      "Less than in copper",
      "Equal to copper",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "ΔL = F L / (A Y) => ΔL ∝ 1/Y. Since Y_steel > Y_copper, ΔL_steel < ΔL_copper.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q6",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Medium",
    "questionText": "Poisson's ratio σ for theoretical materials lies in the range",
    "options": [
      "-1 to +0.5",
      "0 to +0.5",
      "0 to 1",
      "-0.5 to +0.5"
    ],
    "correctAnswer": 0,
    "explanation": "Theoretically -1 ≤ σ ≤ 0.5. For most practical engineering solids, it lies between 0.2 and 0.4.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q7",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Easy",
    "questionText": "If a wire of length L and radius r is stretched by ΔL when load W is suspended, the work done in stretching is",
    "options": [
      "W ΔL",
      "(1/2) W ΔL",
      "2 W ΔL",
      "W ΔL / 4"
    ],
    "correctAnswer": 1,
    "explanation": "Average tension during extension is (0 + W)/2 = W/2. Work done = Average force × extension = (1/2) W ΔL.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q8",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Medium",
    "questionText": "Bulk modulus of elasticity is defined for",
    "options": [
      "Solids only",
      "Liquids only",
      "Gases only",
      "Solids, Liquids, and Gases"
    ],
    "correctAnswer": 3,
    "explanation": "Bulk modulus B = -V (ΔP / ΔV) applies to all three states of matter (solids, liquids, and gases).",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q9",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Hard",
    "questionText": "Compressibility K of a material is the reciprocal of its",
    "options": [
      "Young's modulus",
      "Shear modulus",
      "Bulk modulus",
      "Poisson's ratio"
    ],
    "correctAnswer": 2,
    "explanation": "Compressibility K = 1 / B = - (1/V) (ΔV / ΔP).",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q10",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Medium",
    "questionText": "Thermal stress produced in a rod of Young's modulus Y and linear expansion coefficient α when prevented from expanding over temperature rise ΔT is",
    "options": [
      "Y α ΔT",
      "Y / (α ΔT)",
      "α ΔT / Y",
      "Y α / ΔT"
    ],
    "correctAnswer": 0,
    "explanation": "Thermal strain = ΔL / L = α ΔT. Thermal stress = Y × strain = Y α ΔT.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q11",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Easy",
    "questionText": "Modulus of rigidity (Shear modulus η) is associated with change in",
    "options": [
      "Length",
      "Volume",
      "Shape (shear angle)",
      "Density"
    ],
    "correctAnswer": 2,
    "explanation": "Shear modulus η = Shear stress / Shear strain measures resistance to deformation in shape at constant volume.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q12",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Medium",
    "questionText": "A wire of length L and area A has Young's modulus Y. It behaves like a spring of force constant k equal to",
    "options": [
      "Y A / L",
      "Y L / A",
      "A L / Y",
      "Y / (A L)"
    ],
    "correctAnswer": 0,
    "explanation": "F = (Y A / L) ΔL. Comparing with spring formula F = k x gives k = Y A / L.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q13",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Hard",
    "questionText": "When a metal wire is stretched beyond its elastic limit, it shows",
    "options": [
      "Permanent set (plastic deformation)",
      "Complete recovery",
      "Zero strain",
      "Immediate snapping"
    ],
    "correctAnswer": 0,
    "explanation": "Beyond the elastic limit, the material enters the plastic regime and retains a permanent strain upon unloading.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q14",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Medium",
    "questionText": "Two wires of same material have lengths in ratio 1 : 2 and radii in ratio 2 : 1. Under equal tension, the ratio of their extensions ΔL₁ : ΔL₂ is",
    "options": [
      "1 : 8",
      "1 : 4",
      "8 : 1",
      "4 : 1"
    ],
    "correctAnswer": 0,
    "explanation": "ΔL = F L / (π r² Y) ∝ L / r². ΔL₁ / ΔL₂ = (L₁ / L₂) × (r₂ / r₁)² = (1/2) × (1/2)² = 1/8 = 1 : 8.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q15",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Easy",
    "questionText": "The breaking stress of a wire depends on",
    "options": [
      "Length of the wire",
      "Radius of the wire",
      "Material of the wire",
      "Shape of cross-section"
    ],
    "correctAnswer": 2,
    "explanation": "Breaking stress (ultimate tensile strength) is an intrinsic property of the material independent of geometry.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q16",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Medium",
    "questionText": "The breaking force for a wire of radius r is F. The breaking force for a wire of same material and radius 2r is",
    "options": [
      "F",
      "2F",
      "4F",
      "8F"
    ],
    "correctAnswer": 2,
    "explanation": "Breaking force = Breaking stress × Area = Breaking stress × (π r²). Doubling radius quadruples the area: F' = 4F.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q17",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Hard",
    "questionText": "When a solid sphere of Bulk modulus B is subjected to uniform external pressure P, the fractional decrease in its radius (ΔR / R) is",
    "options": [
      "P / B",
      "P / (3B)",
      "3P / B",
      "P / (2B)"
    ],
    "correctAnswer": 1,
    "explanation": "Volume V = (4/3)π R³ => ΔV / V = 3 (ΔR / R). Since B = P / (ΔV / V), ΔV / V = P / B => 3(ΔR / R) = P / B => ΔR / R = P / (3B).",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q18",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Medium",
    "questionText": "The relation between elastic constants Y, B, η, and Poisson's ratio σ is",
    "options": [
      "Y = 3B(1 - 2σ)",
      "Y = 2η(1 + σ)",
      "9/Y = 1/B + 3/η",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "All three fundamental inter-relations between isotropic elastic moduli are mathematically consistent and valid.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q19",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Easy",
    "questionText": "A metallic rod breaks when strain reaches 0.2%. If Young's modulus is 7 × 10¹⁰ N/m² and area is 10⁻⁴ m², the breaking force is",
    "options": [
      "1.4 × 10⁴ N",
      "2.8 × 10⁴ N",
      "1.4 × 10⁵ N",
      "7.0 × 10⁴ N"
    ],
    "correctAnswer": 0,
    "explanation": "Stress = Y × strain = (7 × 10¹⁰) × (0.002) = 1.4 × 10⁸ N/m². Breaking force = Stress × Area = (1.4 × 10⁸) × 10⁻⁴ = 1.4 × 10⁴ N.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q20",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Medium",
    "questionText": "If the temperature of a metal wire increases, its Young's modulus generally",
    "options": [
      "Increases",
      "Decreases",
      "Remains constant",
      "First increases then decreases"
    ],
    "correctAnswer": 1,
    "explanation": "Higher temperature increases thermal agitation and interatomic spacing, weakening bond stiffness and reducing Young's modulus.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q21",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Hard",
    "questionText": "Elastomers such as vulcanized rubber have",
    "options": [
      "Very high Young's modulus",
      "Large elastic region but do not obey Hooke's law strictly",
      "No elasticity",
      "Zero breaking strength"
    ],
    "correctAnswer": 1,
    "explanation": "Elastomers can undergo massive elastic strain (> 300%) with non-linear stress-strain response and negligible Hooke's linear region.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q22",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Medium",
    "questionText": "The work done per unit volume in shearing a body of shear modulus η by shear angle θ is",
    "options": [
      "(1/2) η θ²",
      "η θ²",
      "(1/2) η² θ",
      "η θ"
    ],
    "correctAnswer": 0,
    "explanation": "u = (1/2) × (Shear stress) × (Shear strain) = (1/2) (η θ) θ = (1/2) η θ².",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q23",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Easy",
    "questionText": "A wire is stretched to double its original length. The longitudinal strain produced is",
    "options": [
      "0.5",
      "1.0",
      "2.0",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "Strain = ΔL / L = (2L - L) / L = L / L = 1.0 (or 100%).",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q24",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Medium",
    "questionText": "A hollow shaft of same mass, length, and material is stronger in resisting torsion than a solid shaft because",
    "options": [
      "Its moment of inertia and torsional rigidity are larger",
      "It has less mass",
      "It has smaller diameter",
      "Friction is reduced"
    ],
    "correctAnswer": 0,
    "explanation": "In a hollow shaft, material is distributed further from the central axis, maximizing the polar moment of inertia and torque per unit twist.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q25",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Hard",
    "questionText": "The ratio of radii of two wires of same material is 2 : 1. If same force is applied, the ratio of stresses produced is",
    "options": [
      "1 : 4",
      "4 : 1",
      "1 : 2",
      "2 : 1"
    ],
    "correctAnswer": 0,
    "explanation": "Stress = F / (π r²) ∝ 1/r². Stress₁ / Stress₂ = (r₂ / r₁)² = (1/2)² = 1/4 = 1 : 4.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q26",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Medium",
    "questionText": "A cable of length 20 m and cross-section 0.5 cm² supports a load of 1000 kg. If Y = 2 × 10¹¹ N/m², elongation is (g = 10 m/s²)",
    "options": [
      "1 mm",
      "2 mm",
      "4 mm",
      "5 mm"
    ],
    "correctAnswer": 1,
    "explanation": "ΔL = F L / (A Y) = (1000 × 10 × 20) / (0.5 × 10⁻⁴ × 2 × 10¹¹) = 200,000 / 10⁷ = 0.002 m = 2 mm.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q27",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Easy",
    "questionText": "The area under the stress-strain curve up to the fracture point represents",
    "options": [
      "Tensile strength",
      "Toughness (energy absorbed before fracture)",
      "Stiffness",
      "Hardness"
    ],
    "correctAnswer": 1,
    "explanation": "The total area under the complete stress-strain curve up to rupture measures the toughness of the material.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q28",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Medium",
    "questionText": "The area under the stress-strain curve up to the proportional limit represents",
    "options": [
      "Modulus of resilience",
      "Toughness",
      "Yield strength",
      "Ductility"
    ],
    "correctAnswer": 0,
    "explanation": "Modulus of resilience is the maximum elastic strain energy per unit volume that can be absorbed without permanent deformation.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q29",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Hard",
    "questionText": "For an ideal incompressible liquid, the Bulk modulus is",
    "options": [
      "Zero",
      "Infinity",
      "1",
      "-1"
    ],
    "correctAnswer": 1,
    "explanation": "Incompressible means ΔV = 0 for any pressure change. B = -V (ΔP / 0) = Infinity.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q30",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Medium",
    "questionText": "Shear modulus for an ideal liquid is",
    "options": [
      "Zero",
      "Infinity",
      "1",
      "Finite"
    ],
    "correctAnswer": 0,
    "explanation": "Liquids cannot sustain static shear stress without flowing, so their shear modulus η = 0.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q31",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Easy",
    "questionText": "A lead cube of side 10 cm is subjected to a shearing force of 10⁴ N on its top face while bottom face is fixed. If η = 5 × 10⁹ N/m², displacement of top face is",
    "options": [
      "2 × 10⁻⁷ m",
      "2 × 10⁻⁶ m",
      "4 × 10⁻⁶ m",
      "10⁻⁵ m"
    ],
    "correctAnswer": 0,
    "explanation": "Area A = (0.1)² = 0.01 m². Shear stress = 10⁴ / 0.01 = 10⁶ N/m². Shear strain θ = x / h = Stress / η = 10⁶ / (5 × 10⁹) = 2 × 10⁻⁴. Lateral displacement x = θ × h = (2 × 10⁻⁴) × 0.1 = 2 × 10⁻⁵ m = 2 × 10⁻⁵ m.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q32",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Medium",
    "questionText": "Two wires A and B are made of same material. A has twice the length and twice the diameter of B. Under same load, ratio of elongation ΔL_A / ΔL_B is",
    "options": [
      "1 : 2",
      "2 : 1",
      "1 : 1",
      "1 : 4"
    ],
    "correctAnswer": 0,
    "explanation": "ΔL ∝ L / r². ΔL_A / ΔL_B = (2L / L) × (r / 2r)² = 2 × (1/4) = 1/2 = 1 : 2.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q33",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Hard",
    "questionText": "The elastic potential energy stored in a wire of length L and area A stretched by ΔL is",
    "options": [
      "(1/2) Y A (ΔL)² / L",
      "Y A ΔL / L",
      "(1/2) Y A ΔL / L²",
      "2 Y A (ΔL)² / L"
    ],
    "correctAnswer": 0,
    "explanation": "U = (1/2) k (ΔL)² = (1/2) (Y A / L) (ΔL)².",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q34",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Medium",
    "questionText": "A spring is stretched by 2 cm and its PE is U. If it is stretched by 10 cm, PE stored will be",
    "options": [
      "5 U",
      "10 U",
      "25 U",
      "50 U"
    ],
    "correctAnswer": 2,
    "explanation": "U ∝ x². U' / U = (10 / 2)² = 5² = 25 => U' = 25 U.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q35",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Easy",
    "questionText": "Which of the following materials is most elastic in the scientific sense?",
    "options": [
      "Rubber",
      "Glass",
      "Steel",
      "Sponge"
    ],
    "correctAnswer": 2,
    "explanation": "In physics, elasticity is measured by the magnitude of Young's modulus (restoring stress for a given strain). Steel has the highest Y (≈ 2 × 10¹¹ Pa) among these.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q36",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Medium",
    "questionText": "A wire of length 1 m and area 1 mm² is stretched by a load of 1 kg. If Y = 10¹¹ N/m², percentage increase in length is (g = 10 m/s²)",
    "options": [
      "0.01%",
      "0.1%",
      "1%",
      "0.001%"
    ],
    "correctAnswer": 0,
    "explanation": "ΔL/L = F / (A Y) = (1 × 10) / (10⁻⁶ × 10¹¹) = 10 / 10⁵ = 10⁻⁴. Percentage = 10⁻⁴ × 100% = 0.01%.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q37",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Hard",
    "questionText": "If a compressive force is applied to a wire, the work done on the wire is",
    "options": [
      "Stored as potential energy",
      "Dissipated as heat only",
      "Converted into kinetic energy",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "Just like stretching, compression against interatomic repulsive forces stores elastic potential energy U = (1/2) k x² in the lattice.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q38",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Medium",
    "questionText": "The ratio of lateral strain to longitudinal strain in a stretched wire is called",
    "options": [
      "Young's modulus",
      "Bulk modulus",
      "Poisson's ratio",
      "Modulus of rigidity"
    ],
    "correctAnswer": 2,
    "explanation": "Poisson's ratio σ = - (Lateral strain / Longitudinal strain).",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q39",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Easy",
    "questionText": "When a load on a wire is doubled, the Young's modulus of the wire",
    "options": [
      "Doubles",
      "Halves",
      "Becomes four times",
      "Remains unchanged"
    ],
    "correctAnswer": 3,
    "explanation": "Young's modulus is a material property independent of external applied load.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q40",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Medium",
    "questionText": "The upper end of a wire of radius 4 mm and length 100 cm is clamped and lower end is twisted through 30°. The angle of shear is",
    "options": [
      "0.12°",
      "0.24°",
      "1.2°",
      "12°"
    ],
    "correctAnswer": 0,
    "explanation": "r θ = L φ => φ = (r θ) / L = (0.4 cm × 30°) / 100 cm = 12 / 100 = 0.12°.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q41",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Hard",
    "questionText": "For steel, if Y = 2 × 10¹¹ N/m² and σ = 0.25, the Bulk modulus B is",
    "options": [
      "1.33 × 10¹¹ N/m²",
      "2.0 × 10¹¹ N/m²",
      "2.67 × 10¹¹ N/m²",
      "4.0 × 10¹¹ N/m²"
    ],
    "correctAnswer": 0,
    "explanation": "Y = 3B(1 - 2σ) => 2 × 10¹¹ = 3B(1 - 0.50) = 1.5 B => B = (2 × 10¹¹) / 1.5 = 1.33 × 10¹¹ N/m².",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q42",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Medium",
    "questionText": "In the above problem, the shear modulus η for steel is",
    "options": [
      "0.8 × 10¹¹ N/m²",
      "1.0 × 10¹¹ N/m²",
      "1.25 × 10¹¹ N/m²",
      "1.6 × 10¹¹ N/m²"
    ],
    "correctAnswer": 0,
    "explanation": "Y = 2η(1 + σ) => 2 × 10¹¹ = 2η(1 + 0.25) = 2.5 η => η = (2 × 10¹¹) / 2.5 = 0.8 × 10¹¹ N/m².",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q43",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Easy",
    "questionText": "A heavy uniform rope of length L and mass M hangs vertically from a ceiling. The elongation produced due to its own weight is",
    "options": [
      "M g L / (Y A)",
      "M g L / (2 Y A)",
      "M g L / (3 Y A)",
      "2 M g L / (Y A)"
    ],
    "correctAnswer": 1,
    "explanation": "Tension varies linearly from 0 at bottom to Mg at top. Average tension = Mg/2. Elongation ΔL = (Mg/2) L / (A Y) = MgL / (2 A Y).",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q44",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Medium",
    "questionText": "The energy stored in the heavy hanging rope due to its own weight is",
    "options": [
      "M² g² L / (6 Y A)",
      "M² g² L / (2 Y A)",
      "M² g² L / (3 Y A)",
      "M² g² L / (Y A)"
    ],
    "correctAnswer": 0,
    "explanation": "dU = [T(x)² / (2AY)] dx = [(Mg x/L)² / (2AY)] dx. Integrating from 0 to L gives U = M² g² L / (6 A Y).",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  },
  {
    "id": "ela-q45",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "Mechanical Properties of Solids (Elasticity)",
    "difficulty": "Hard",
    "questionText": "A material that can be drawn into thin wires without breaking is classified as",
    "options": [
      "Brittle",
      "Ductile",
      "Plastic",
      "Elastomeric"
    ],
    "correctAnswer": 1,
    "explanation": "Ductile materials (e.g. copper, gold, mild steel) have a large plastic deformation zone between yield point and fracture point.",
    "tags": [
      "Mechanical Properties of Solids",
      "Mechanical Properties of Solids (Elasticity)"
    ]
  }
];

export const FLUID_MECHANICS_QUESTIONS: Question[] = [
  {
    "id": "flu-q1",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Hard",
    "questionText": "The excess pressure inside a spherical soap bubble of surface tension T and radius R is",
    "options": [
      "2T / R",
      "4T / R",
      "T / (2R)",
      "8T / R"
    ],
    "correctAnswer": 1,
    "explanation": "A soap bubble has two free liquid-air interfaces (inner and outer). ΔP = 2(2T/R) = 4T / R.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q2",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Medium",
    "questionText": "The excess pressure inside a liquid drop of radius R in air is",
    "options": [
      "2T / R",
      "4T / R",
      "T / R",
      "T / (2R)"
    ],
    "correctAnswer": 0,
    "explanation": "A liquid drop in air has only one free surface, so ΔP = 2T / R.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q3",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Easy",
    "questionText": "Bernoulli's theorem is a direct consequence of the law of conservation of",
    "options": [
      "Mass",
      "Linear momentum",
      "Energy",
      "Angular momentum"
    ],
    "correctAnswer": 2,
    "explanation": "Bernoulli's equation P + (1/2)ρv² + ρgh = const represents conservation of total mechanical energy per unit volume for a steady streamline flow of an incompressible non-viscous fluid.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q4",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Medium",
    "questionText": "The equation of continuity A₁ v₁ = A₂ v₂ expresses the conservation of",
    "options": [
      "Mass",
      "Energy",
      "Momentum",
      "Volume"
    ],
    "correctAnswer": 0,
    "explanation": "Mass flow rate dm/dt = ρ A v. For an incompressible fluid (constant ρ), A₁ v₁ = A₂ v₂, which represents conservation of mass.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q5",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Hard",
    "questionText": "A hydraulic lift works on the principle of",
    "options": [
      "Bernoulli's theorem",
      "Pascal's law",
      "Archimedes principle",
      "Torricelli's law"
    ],
    "correctAnswer": 1,
    "explanation": "Pascal's law states that pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid and vessel walls.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q6",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Medium",
    "questionText": "Water rises to a height h in a capillary tube of radius r. If the tube is replaced by another tube of radius r/2, water will rise to height",
    "options": [
      "h / 2",
      "h",
      "2h",
      "4h"
    ],
    "correctAnswer": 2,
    "explanation": "Capillary rise h = (2T cos θ) / (r ρ g) => h ∝ 1/r. Halving the radius doubles the capillary height: h' = 2h (Jurin's law).",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q7",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Easy",
    "questionText": "Terminal velocity v_t of a spherical ball of radius r falling through a viscous medium varies with radius as",
    "options": [
      "r",
      "r²",
      "r³",
      "1 / r"
    ],
    "correctAnswer": 1,
    "explanation": "By Stokes' law: v_t = (2/9) r² (ρ - σ) g / η => v_t ∝ r².",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q8",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Medium",
    "questionText": "Two raindrops of radii in ratio 1 : 2 fall through air. The ratio of their terminal velocities is",
    "options": [
      "1 : 2",
      "1 : 4",
      "1 : 8",
      "1 : √2"
    ],
    "correctAnswer": 1,
    "explanation": "v_t ∝ r². v₁ / v₂ = (r₁ / r₂)² = (1/2)² = 1/4 = 1 : 4.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q9",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Hard",
    "questionText": "The velocity of efflux of a liquid from an orifice at depth h below the free surface is (Torricelli's law)",
    "options": [
      "√(gh)",
      "√(2gh)",
      "2√(gh)",
      "gh"
    ],
    "correctAnswer": 1,
    "explanation": "By Torricelli's theorem of efflux: v = √(2gh), identical to the speed acquired by a body in free fall through height h.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q10",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Medium",
    "questionText": "Stokes' law gives the viscous drag force F on a sphere of radius r moving with velocity v in a fluid of viscosity η as",
    "options": [
      "6 π η r v",
      "4 π η r v",
      "6 π η r² v",
      "2 π η r v"
    ],
    "correctAnswer": 0,
    "explanation": "Stokes' law: F_drag = 6 π η r v.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q11",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Easy",
    "questionText": "The angle of contact for pure water and clean glass is approximately",
    "options": [
      "0° (acute)",
      "90°",
      "135° (obtuse)",
      "180°"
    ],
    "correctAnswer": 0,
    "explanation": "For pure water in clean glass, the liquid completely wets the solid surface, giving an angle of contact θ ≈ 0°.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q12",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Medium",
    "questionText": "For mercury and clean glass, the angle of contact is",
    "options": [
      "0°",
      "45°",
      "90°",
      "135° (obtuse)"
    ],
    "correctAnswer": 3,
    "explanation": "Mercury does not wet glass (cohesive forces > adhesive forces), forming a convex meniscus with obtuse contact angle θ ≈ 135°.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q13",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Hard",
    "questionText": "Surface tension of a liquid generally",
    "options": [
      "Increases with temperature",
      "Decreases with temperature",
      "Is independent of temperature",
      "Is zero at boiling point"
    ],
    "correctAnswer": 1,
    "explanation": "Increasing temperature increases kinetic energy and weakens intermolecular cohesive forces, causing surface tension to decrease.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q14",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Medium",
    "questionText": "At the critical temperature, the surface tension of a liquid becomes",
    "options": [
      "Zero",
      "Infinity",
      "Maximum",
      "Negative"
    ],
    "correctAnswer": 0,
    "explanation": "At the critical point, the meniscus disappears and the liquid-vapour boundary vanishes, so surface tension becomes zero.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q15",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Easy",
    "questionText": "Work done in blowing a soap bubble from radius R to 2R in air (surface tension T) is",
    "options": [
      "8 π R² T",
      "12 π R² T",
      "24 π R² T",
      "48 π R² T"
    ],
    "correctAnswer": 2,
    "explanation": "Soap bubble has 2 surfaces. Initial area A₁ = 2(4π R²) = 8π R². Final area A₂ = 2(4π(2R)²) = 32π R². ΔA = 24π R². Work W = T ΔA = 24 π R² T.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q16",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Medium",
    "questionText": "Water flows through a horizontal pipe of varying cross-section. At point A, pressure is P_A and velocity is v_A. At point B where area is smaller, pressure P_B and velocity v_B satisfy",
    "options": [
      "P_B > P_A, v_B < v_A",
      "P_B < P_A, v_B > v_A",
      "P_B = P_A, v_B = v_A",
      "P_B > P_A, v_B > v_A"
    ],
    "correctAnswer": 1,
    "explanation": "By continuity: smaller area => v_B > v_A. By Bernoulli's theorem: higher velocity => lower pressure => P_B < P_A (Venturi effect).",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q17",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Hard",
    "questionText": "The dynamic lift on an aeroplane wing is explained on the basis of",
    "options": [
      "Pascal's law",
      "Archimedes principle",
      "Bernoulli's theorem",
      "Stokes' law"
    ],
    "correctAnswer": 2,
    "explanation": "Aerofoil shape makes air flow faster over the upper surface than below. By Bernoulli's theorem, upper pressure is lower, creating an upward dynamic lift.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q18",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Medium",
    "questionText": "An iceberg floats in seawater with density 1.03 g/cm³. If density of ice is 0.92 g/cm³, fraction of volume submerged is",
    "options": [
      "89.3%",
      "10.7%",
      "92.0%",
      "95.0%"
    ],
    "correctAnswer": 0,
    "explanation": "Fraction submerged f = ρ_ice / ρ_water = 0.92 / 1.03 ≈ 0.893 = 89.3%.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q19",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Easy",
    "questionText": "Reynolds number N_R determines the nature of flow. For streamline (laminar) flow in a pipe, N_R is typically",
    "options": [
      "N_R < 1000",
      "1000 < N_R < 2000",
      "N_R > 2000",
      "N_R > 5000"
    ],
    "correctAnswer": 0,
    "explanation": "Flow is laminar when N_R < 1000, unsteady/transitional between 1000 and 2000, and fully turbulent when N_R > 2000.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q20",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Medium",
    "questionText": "Magnus effect (curving of a spinning ball in air) is caused by",
    "options": [
      "Buoyancy",
      "Viscous drag asymmetry and Bernoulli pressure difference",
      "Gravity",
      "Surface tension"
    ],
    "correctAnswer": 1,
    "explanation": "Spinning drags air layers, increasing speed on one side and decreasing on the other. The resulting Bernoulli pressure gradient exerts a lateral Magnus force.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q21",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Hard",
    "questionText": "A metallic sphere of density ρ and radius r falls through a liquid of density σ (ρ > σ) with viscosity η. The net downward force at terminal velocity is",
    "options": [
      "Zero",
      "mg",
      "6 π η r v_t",
      "mg - Buoyant force"
    ],
    "correctAnswer": 0,
    "explanation": "At terminal velocity, downward weight is exactly balanced by the sum of buoyant force and viscous drag, so net acceleration and net force is Zero.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q22",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Medium",
    "questionText": "A piece of ice with a stone embedded in it floats in a vessel of water. When the ice melts completely, the water level",
    "options": [
      "Rises",
      "Falls",
      "Remains unchanged",
      "First rises then falls"
    ],
    "correctAnswer": 1,
    "explanation": "The stone was displacing water equivalent to its weight. When freed, it sinks and displaces only its volume (which is much smaller than its weight in water), so the water level falls.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q23",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Easy",
    "questionText": "If pure ice (without stone) melts in a glass filled to the brim with water, the water level",
    "options": [
      "Spills over",
      "Falls",
      "Remains unchanged",
      "Depends on temperature"
    ],
    "correctAnswer": 2,
    "explanation": "Weight of floating ice = Weight of displaced water = Weight of water formed after melting. Volume of melted water matches displaced volume exactly, so level remains unchanged.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q24",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Medium",
    "questionText": "The SI unit of dynamic viscosity η (Poiseuille or Pa·s) is",
    "options": [
      "N·s/m² (Pa·s)",
      "Poise",
      "N/m",
      "kg/(m·s²)"
    ],
    "correctAnswer": 0,
    "explanation": "Viscous force F = η A (dv/dx) => [η] = F / (A dv/dx) = N / (m² · (m/s)/m) = N·s/m² = Pa·s (1 Pa·s = 10 Poise).",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q25",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Hard",
    "questionText": "Dimensional formula of coefficient of viscosity η is",
    "options": [
      "[M L⁻¹ T⁻¹]",
      "[M L⁻² T⁻¹]",
      "[M L⁻¹ T⁻²]",
      "[M L T⁻¹]"
    ],
    "correctAnswer": 0,
    "explanation": "[η] = [Force] / ([Area][Velocity gradient]) = [M L T⁻²] / (L² · T⁻¹) = [M L⁻¹ T⁻¹].",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q26",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Medium",
    "questionText": "When temperature increases, the viscosity of liquids and gases respectively",
    "options": [
      "Increases, Decreases",
      "Decreases, Increases",
      "Increases, Increases",
      "Decreases, Decreases"
    ],
    "correctAnswer": 1,
    "explanation": "In liquids, temperature weakens cohesive forces (viscosity decreases). In gases, higher temperature increases molecular momentum exchange (viscosity increases).",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q27",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Easy",
    "questionText": "A capillary tube is dipped in water and water rises to 8 cm. If the tube is tilted at 45° to the vertical, the length of water column in the tube is",
    "options": [
      "8 cm",
      "8√2 cm (≈ 11.3 cm)",
      "4√2 cm",
      "16 cm"
    ],
    "correctAnswer": 1,
    "explanation": "Vertical height h = 8 cm remains constant. Length l along tube = h / cos 45° = 8 / (1/√2) = 8√2 ≈ 11.3 cm.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q28",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Medium",
    "questionText": "Two capillary tubes of radii r₁ and r₂ are dipped in the same liquid. The ratio of heights to which liquid rises is",
    "options": [
      "r₁ : r₂",
      "r₂ : r₁",
      "r₁² : r₂²",
      "r₂² : r₁²"
    ],
    "correctAnswer": 1,
    "explanation": "By Jurin's law h ∝ 1/r => h₁ / h₂ = r₂ / r₁.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q29",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Hard",
    "questionText": "If two soap bubbles of radii r₁ and r₂ (r₁ > r₂) are brought into contact, the radius of curvature of the common interface is",
    "options": [
      "r₁ r₂ / (r₁ - r₂)",
      "r₁ r₂ / (r₁ + r₂)",
      "r₁ + r₂",
      "√(r₁ r₂)"
    ],
    "correctAnswer": 0,
    "explanation": "Pressure difference across interface is ΔP = P₂ - P₁ = 4T/r₂ - 4T/r₁ = 4T [ (r₁ - r₂) / (r₁ r₂) ]. Setting ΔP = 4T / R gives R = r₁ r₂ / (r₁ - r₂).",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q30",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Medium",
    "questionText": "If the common interface bulges, it is curved towards",
    "options": [
      "The smaller bubble",
      "The larger bubble",
      "Remains flat",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "The smaller bubble has higher internal pressure (P ∝ 1/r), so the common interface is concave towards the smaller bubble and bulges towards the larger bubble.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q31",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Easy",
    "questionText": "The atmospheric pressure at sea level is approximately 1.013 × 10⁵ Pa. In terms of height of mercury column, it is equal to",
    "options": [
      "76 cm of Hg",
      "76 mm of Hg",
      "76 m of Hg",
      "7.6 cm of Hg"
    ],
    "correctAnswer": 0,
    "explanation": "P = ρ g h = (13600 kg/m³) × (9.8 m/s²) × (0.76 m) = 1.013 × 10⁵ Pa = 760 mm of Hg = 76 cm of Hg.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q32",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Medium",
    "questionText": "The device used to measure the rate of flow of fluid through a pipe is",
    "options": [
      "Barometer",
      "Manometer",
      "Venturimeter",
      "Hydrometer"
    ],
    "correctAnswer": 2,
    "explanation": "Venturimeter operates on Bernoulli's principle to measure the volumetric discharge/flow rate in pipelines.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q33",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Hard",
    "questionText": "A wooden cube of side 10 cm floats in water with 2 cm above the water surface. The density of wood is",
    "options": [
      "800 kg/m³",
      "200 kg/m³",
      "600 kg/m³",
      "1000 kg/m³"
    ],
    "correctAnswer": 0,
    "explanation": "Submerged fraction = (10 - 2)/10 = 8/10 = 0.8. Density of wood = 0.8 × 1000 kg/m³ = 800 kg/m³.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q34",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Medium",
    "questionText": "A vessel with water on a weighing scale is placed on a table. A solid metal sphere suspended by a string from an external support is submerged in the water without touching the vessel. The scale reading",
    "options": [
      "Increases by the buoyant force on the sphere",
      "Decreases",
      "Remains unchanged",
      "Increases by weight of sphere"
    ],
    "correctAnswer": 0,
    "explanation": "By Newton's third law, the sphere exerts a downward reaction force on the water equal to the upward buoyant force, increasing the scale reading.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q35",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Easy",
    "questionText": "When a detergent is added to water, the surface tension of water",
    "options": [
      "Increases",
      "Decreases",
      "Remains unchanged",
      "Becomes zero"
    ],
    "correctAnswer": 1,
    "explanation": "Detergent molecules concentrate at the surface and disrupt the hydrogen bonding between water molecules, significantly lowering surface tension.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q36",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Medium",
    "questionText": "An open water tank has a leak at depth 5 m below the surface. The velocity of efflux from the hole is (g = 10 m/s²)",
    "options": [
      "5 m/s",
      "10 m/s",
      "14.14 m/s",
      "20 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "v = √(2gh) = √(2 × 10 × 5) = √100 = 10 m/s.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q37",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Hard",
    "questionText": "In a U-tube containing mercury, water is poured in one arm up to height 13.6 cm. The rise of mercury in the other arm above its initial level is (ρ_Hg = 13.6 g/cm³)",
    "options": [
      "0.5 cm",
      "1.0 cm",
      "2.0 cm",
      "13.6 cm"
    ],
    "correctAnswer": 0,
    "explanation": "P_water = P_Hg => ρ_w g h_w = ρ_Hg g (2x) => 1.0 × 13.6 = 13.6 × (2x) => 2x = 1.0 cm => Rise x = 0.5 cm.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q38",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Medium",
    "questionText": "A horizontal pipe of diameter 4 cm narrows to diameter 2 cm. If water velocity in wider section is 2 m/s, velocity in narrow section is",
    "options": [
      "4 m/s",
      "8 m/s",
      "16 m/s",
      "1 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "A₁ v₁ = A₂ v₂ => d₁² v₁ = d₂² v₂ => 4²(2) = 2²(v₂) => 16(2) = 4 v₂ => v₂ = 32 / 4 = 8 m/s.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q39",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Easy",
    "questionText": "In the above pipe, if pressure in wider section is 4 × 10⁴ Pa, the pressure in narrow section is (ρ = 1000 kg/m³)",
    "options": [
      "1.0 × 10⁴ Pa",
      "2.5 × 10⁴ Pa",
      "3.0 × 10⁴ Pa",
      "3.5 × 10⁴ Pa"
    ],
    "correctAnswer": 0,
    "explanation": "P₁ + (1/2)ρ v₁² = P₂ + (1/2)ρ v₂² => 40000 + (1/2)(1000)(2²) = P₂ + (1/2)(1000)(8²) => 40000 + 2000 = P₂ + 32000 => P₂ = 42000 - 32000 = 1.0 × 10⁴ Pa.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q40",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Medium",
    "questionText": "The shape of a liquid drop is spherical due to",
    "options": [
      "Viscosity",
      "Surface tension minimizing surface energy",
      "Gravity",
      "Atmospheric pressure"
    ],
    "correctAnswer": 1,
    "explanation": "Surface tension pulls surface molecules inward to minimize surface area for a given volume, which forms a sphere.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q41",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Hard",
    "questionText": "Two rain drops coalesce into a single large drop. In this process, total surface energy",
    "options": [
      "Increases",
      "Decreases (energy is released as heat)",
      "Remains unchanged",
      "Becomes zero"
    ],
    "correctAnswer": 1,
    "explanation": "Coalescing decreases total surface area (A_large < 2 A_small), so surface energy decreases and heat is liberated.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q42",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Medium",
    "questionText": "If n identical liquid droplets each of radius r coalesce into a single drop of radius R, the temperature of drop",
    "options": [
      "Rises",
      "Falls",
      "Remains same",
      "Becomes 0 K"
    ],
    "correctAnswer": 0,
    "explanation": "R = n^(1/3) r. Total surface area decreases: ΔA = 4π r² (n - n^(2/3)) > 0. The released surface energy W = T ΔA raises the temperature.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q43",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Easy",
    "questionText": "The blood pressure of a human is greater at the feet than at the brain because of",
    "options": [
      "Hydrostatic pressure column ρgh",
      "Heart pumps harder downwards",
      "Blood is more viscous at feet",
      "Atmospheric pressure"
    ],
    "correctAnswer": 0,
    "explanation": "The vertical hydrostatic column of blood creates additional pressure ΔP = ρ g h at the lower extremities.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q44",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Medium",
    "questionText": "An incompressible non-viscous fluid flowing through a horizontal pipe exhibits streamlined motion. The pressure is highest where the",
    "options": [
      "Speed is highest",
      "Speed is lowest",
      "Diameter is smallest",
      "Pipe turns"
    ],
    "correctAnswer": 1,
    "explanation": "By Bernoulli's principle P + (1/2)ρv² = const: pressure is maximum where velocity is minimum (at the widest section).",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  },
  {
    "id": "flu-q45",
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "Hard",
    "questionText": "A body weighs 50 g in air and 40 g in water. The relative density of the body is",
    "options": [
      "5",
      "4",
      "1.25",
      "0.8"
    ],
    "correctAnswer": 0,
    "explanation": "Loss of weight in water = 50 - 40 = 10 g. Relative density = Weight in air / Loss of weight = 50 / 10 = 5.0.",
    "tags": [
      "Mechanical Properties of Fluids",
      "Mechanical Properties of Fluids"
    ]
  }
];

export const THERMAL_PROPERTIES_QUESTIONS: Question[] = [
  {
    "id": "thp-q1",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Hard",
    "questionText": "A bimetallic strip made of brass and iron (α_brass > α_iron) is heated. It will",
    "options": [
      "Bend with brass on convex side",
      "Bend with iron on convex side",
      "Remain straight",
      "Twist sideways"
    ],
    "correctAnswer": 0,
    "explanation": "Brass expands more than iron for the same temperature rise (α_brass > α_iron), forcing the strip to bend with brass on the outer (convex) curve.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q2",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Medium",
    "questionText": "The temperature on the Celsius scale corresponding to absolute zero (0 K) is",
    "options": [
      "-273.15 °C",
      "-373.15 °C",
      "0 °C",
      "100 °C"
    ],
    "correctAnswer": 0,
    "explanation": "T(K) = T(°C) + 273.15 => 0 K = -273.15 °C.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q3",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Easy",
    "questionText": "The temperature at which Celsius and Fahrenheit thermometer scales read the same value is",
    "options": [
      "-40°",
      "0°",
      "40°",
      "100°"
    ],
    "correctAnswer": 0,
    "explanation": "C/5 = (F - 32)/9. Setting C = F = x gives 9x = 5x - 160 => 4x = -160 => x = -40°.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q4",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Medium",
    "questionText": "Water has its maximum density at a temperature of",
    "options": [
      "0 °C",
      "4 °C",
      "100 °C",
      "-4 °C"
    ],
    "correctAnswer": 1,
    "explanation": "Due to anomalous expansion of water, volume is minimum and density is maximum at 4 °C (1000 kg/m³).",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q5",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Hard",
    "questionText": "Heat required to convert 1 g of ice at 0 °C into water at 0 °C (latent heat of fusion) is",
    "options": [
      "80 cal",
      "540 cal",
      "100 cal",
      "1 cal"
    ],
    "correctAnswer": 0,
    "explanation": "Latent heat of fusion of ice L_f = 80 cal/g (≈ 3.36 × 10⁵ J/kg).",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q6",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Medium",
    "questionText": "Heat required to convert 1 g of water at 100 °C into steam at 100 °C (latent heat of vaporization) is",
    "options": [
      "80 cal",
      "540 cal",
      "100 cal",
      "4.184 cal"
    ],
    "correctAnswer": 1,
    "explanation": "Latent heat of vaporization of water L_v = 540 cal/g (≈ 2.26 × 10⁶ J/kg).",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q7",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Easy",
    "questionText": "Stefan-Boltzmann law states that total emissive power E of a blackbody is proportional to",
    "options": [
      "T",
      "T²",
      "T³",
      "T⁴"
    ],
    "correctAnswer": 3,
    "explanation": "Stefan's law: E = σ T⁴, where T is the absolute temperature in Kelvin and σ is Stefan-Boltzmann constant (5.67 × 10⁻⁸ W·m⁻²·K⁻⁴).",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q8",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Medium",
    "questionText": "Wien's displacement law relates peak emission wavelength λ_max and absolute temperature T as",
    "options": [
      "λ_max · T = constant (b)",
      "λ_max / T = constant",
      "λ_max · T⁴ = constant",
      "λ_max · T² = constant"
    ],
    "correctAnswer": 0,
    "explanation": "Wien's displacement law: λ_max T = b = 2.898 × 10⁻³ m·K.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q9",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Hard",
    "questionText": "Newton's law of cooling is valid when temperature difference (T - T₀) between body and surroundings is",
    "options": [
      "Very large",
      "Small (typically < 30 °C)",
      "Zero only",
      "Infinite"
    ],
    "correctAnswer": 1,
    "explanation": "Newton's law of cooling dQ/dt = -k(T - T₀) is a first-order Taylor approximation of Stefan's law valid for small temperature differences.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q10",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Medium",
    "questionText": "A hot liquid cools from 80 °C to 70 °C in 5 minutes in a room at 30 °C. The time taken to cool from 70 °C to 60 °C is",
    "options": [
      "5 minutes",
      "Less than 5 minutes",
      "More than 5 minutes (≈ 7 min)",
      "10 minutes"
    ],
    "correctAnswer": 2,
    "explanation": "As the body cools, (T_avg - T₀) decreases, reducing the rate of cooling; therefore, cooling through the next 10 °C takes longer (more than 5 min).",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q11",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Easy",
    "questionText": "The ratio of thermal conductivities of two rods of same dimensions and same heat current under temperature differences in ratio 1 : 2 is",
    "options": [
      "2 : 1",
      "1 : 2",
      "1 : 4",
      "4 : 1"
    ],
    "correctAnswer": 0,
    "explanation": "H = K A ΔT / L. For equal H, A, L: K₁ ΔT₁ = K₂ ΔT₂ => K₁ / K₂ = ΔT₂ / ΔT₁ = 2 / 1 = 2 : 1.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q12",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Medium",
    "questionText": "Coefficient of superficial (area) expansion β and linear expansion α are related by",
    "options": [
      "β = α",
      "β = 2α",
      "β = 3α",
      "β = α / 2"
    ],
    "correctAnswer": 1,
    "explanation": "For isotropic solids: β = 2α and volumetric expansion γ = 3α.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q13",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Hard",
    "questionText": "A black body at 27 °C radiates energy at rate E. If its temperature is raised to 327 °C, the rate of radiation becomes",
    "options": [
      "2 E",
      "4 E",
      "8 E",
      "16 E"
    ],
    "correctAnswer": 3,
    "explanation": "T₁ = 27 + 273 = 300 K, T₂ = 327 + 273 = 600 K = 2 T₁. Rate E ∝ T⁴ => E₂ / E₁ = (T₂ / T₁)⁴ = 2⁴ = 16 => E₂ = 16 E.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q14",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Medium",
    "questionText": "The peak of solar radiation spectrum occurs at wavelength 500 nm. If Wien's constant b = 3 × 10⁻³ m·K, surface temperature of Sun is",
    "options": [
      "3000 K",
      "6000 K",
      "9000 K",
      "12000 K"
    ],
    "correctAnswer": 1,
    "explanation": "T = b / λ_max = (3 × 10⁻³ m·K) / (500 × 10⁻⁹ m) = (3 × 10⁻³) / (5 × 10⁻⁷) = 6000 K.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q15",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Easy",
    "questionText": "50 g of copper at 100 °C is dropped into 100 g of water at 20 °C. Specific heat of copper is 0.1 cal/(g·°C). Final equilibrium temperature is",
    "options": [
      "21.9 °C",
      "23.8 °C",
      "25.0 °C",
      "30.0 °C"
    ],
    "correctAnswer": 1,
    "explanation": "Heat lost = Heat gained => 50 × 0.1 × (100 - T) = 100 × 1.0 × (T - 20) => 5(100 - T) = 100(T - 20) => 500 - 5T = 100T - 2000 => 105T = 2500 => T = 23.81 °C.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q16",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Medium",
    "questionText": "Calorie is defined as the heat required to raise the temperature of 1 g of water from",
    "options": [
      "0 °C to 1 °C",
      "14.5 °C to 15.5 °C at 1 atm",
      "99 °C to 100 °C",
      "4 °C to 5 °C"
    ],
    "correctAnswer": 1,
    "explanation": "The standard 15-degree calorie is precisely defined from 14.5 °C to 15.5 °C at standard atmospheric pressure.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q17",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Hard",
    "questionText": "The SI equivalent of 1 calorie (mechanical equivalent of heat J) is",
    "options": [
      "4.184 J",
      "4.2 J",
      "1 J",
      "8.314 J"
    ],
    "correctAnswer": 0,
    "explanation": "1 cal = 4.184 Joules (often rounded to 4.2 J).",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q18",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Medium",
    "questionText": "Good absorbers of thermal radiation are also good emitters. This is known as",
    "options": [
      "Kirchhoff's law of radiation",
      "Stefan's law",
      "Wien's law",
      "Planck's law"
    ],
    "correctAnswer": 0,
    "explanation": "Kirchhoff's law states that for any body in thermal equilibrium, absorptivity equals emissivity: e_λ / a_λ = E_blackbody.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q19",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Easy",
    "questionText": "A perfectly black body is one which",
    "options": [
      "Is black in color only",
      "Absorbs all incident radiation of all wavelengths",
      "Reflects all radiation",
      "Transmits all radiation"
    ],
    "correctAnswer": 1,
    "explanation": "A black body is an idealized physical body that absorbs 100% of all incident electromagnetic radiation regardless of frequency or angle of incidence (a = 1).",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q20",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Medium",
    "questionText": "Greenhouse effect causes Earth's surface warming primarily because the atmosphere is",
    "options": [
      "Transparent to visible solar radiation but absorbs outgoing long-wavelength IR radiation",
      "Opaque to sunlight",
      "Reflecting all cosmic rays",
      "Absorbing UV rays"
    ],
    "correctAnswer": 0,
    "explanation": "Greenhouse gases (CO₂, H₂O vapor, CH₄) transmit incoming short-wavelength visible light but trap outgoing re-radiated infrared (thermal) radiation.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q21",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Hard",
    "questionText": "Thermal resistance R_th of a conducting rod of length L, area A, and thermal conductivity K is",
    "options": [
      "K A / L",
      "L / (K A)",
      "K L / A",
      "1 / (K A L)"
    ],
    "correctAnswer": 1,
    "explanation": "Heat current H = ΔT / R_th = K A ΔT / L => R_th = L / (K A) (analogous to electrical resistance R = ρ L / A).",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q22",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Medium",
    "questionText": "Two rods of conductivities K₁ and K₂ and equal dimensions are joined in series. The equivalent thermal conductivity K_eq is",
    "options": [
      "(K₁ + K₂) / 2",
      "2 K₁ K₂ / (K₁ + K₂)",
      "√(K₁ K₂)",
      "K₁ K₂ / (K₁ + K₂)"
    ],
    "correctAnswer": 1,
    "explanation": "R_eq = R₁ + R₂ => 2L / (K_eq A) = L / (K₁ A) + L / (K₂ A) => 2 / K_eq = 1/K₁ + 1/K₂ => K_eq = 2 K₁ K₂ / (K₁ + K₂).",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q23",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Easy",
    "questionText": "Two rods of conductivities K₁ and K₂ of equal dimensions are joined in parallel. The equivalent thermal conductivity is",
    "options": [
      "(K₁ + K₂) / 2",
      "2 K₁ K₂ / (K₁ + K₂)",
      "K₁ + K₂",
      "√(K₁ K₂)"
    ],
    "correctAnswer": 0,
    "explanation": "1/R_eq = 1/R₁ + 1/R₂ => K_eq (2A) / L = K₁ A / L + K₂ A / L => K_eq = (K₁ + K₂) / 2.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q24",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Medium",
    "questionText": "The SI unit of thermal conductivity K is",
    "options": [
      "W/(m·K)",
      "J/(m·K)",
      "W·m/K",
      "W/m²"
    ],
    "correctAnswer": 0,
    "explanation": "H = K A ΔT / L => [K] = H L / (A ΔT) = (W · m) / (m² · K) = W/(m·K) = J·s⁻¹·m⁻¹·K⁻¹.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q25",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Hard",
    "questionText": "A pendulum clock with a brass rod keeps correct time at 20 °C. If temperature rises to 30 °C, the clock will",
    "options": [
      "Gain time (run fast)",
      "Lose time (run slow)",
      "Keep correct time",
      "Stop running"
    ],
    "correctAnswer": 1,
    "explanation": "T_period = 2π √(L/g). Higher temperature increases rod length L, increasing time period, so the clock ticks slower and loses time.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q26",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Medium",
    "questionText": "Fractional change in time period of a simple pendulum with temperature rise ΔT is",
    "options": [
      "α ΔT",
      "(1/2) α ΔT",
      "2 α ΔT",
      "(1/4) α ΔT"
    ],
    "correctAnswer": 1,
    "explanation": "ΔT_period / T = (1/2) ΔL / L = (1/2) α ΔT.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q27",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Easy",
    "questionText": "A metal ball with a concentric spherical cavity is heated. The volume of the cavity will",
    "options": [
      "Increase",
      "Decrease",
      "Remain unchanged",
      "Depends on cavity size"
    ],
    "correctAnswer": 0,
    "explanation": "Thermal expansion is equivalent to photographic magnification. Every linear dimension expands outward, so cavity volume increases.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q28",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Medium",
    "questionText": "The coefficient of volume expansion of an ideal gas at constant pressure (γ_P) at absolute temperature T is",
    "options": [
      "T",
      "1 / T",
      "1 / T²",
      "T²"
    ],
    "correctAnswer": 1,
    "explanation": "From PV = nRT at constant P: P ΔV = nR ΔT => ΔV/V = ΔT/T. Volume expansion γ_P = (1/V)(ΔV/ΔT) = 1/T.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q29",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Hard",
    "questionText": "Heat transmission by actual physical movement of heated fluid particles is called",
    "options": [
      "Conduction",
      "Convection",
      "Radiation",
      "Advection"
    ],
    "correctAnswer": 1,
    "explanation": "Convection involves the bulk bodily movement of fluid molecules driven by thermal buoyancy and density differences.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q30",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Medium",
    "questionText": "Heat transfer in vacuum takes place purely by",
    "options": [
      "Conduction",
      "Convection",
      "Radiation",
      "None of these"
    ],
    "correctAnswer": 2,
    "explanation": "Thermal radiation consists of electromagnetic waves that require no material medium and propagate freely through vacuum at the speed of light c.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q31",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Easy",
    "questionText": "Specific heat capacity of a substance at its phase transition temperature (e.g. boiling or melting) is",
    "options": [
      "Zero",
      "Infinite",
      "Finite positive",
      "Negative"
    ],
    "correctAnswer": 1,
    "explanation": "c = Q / (m ΔT). Since phase change occurs at constant temperature (ΔT = 0), c = Q / 0 = Infinite.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q32",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Medium",
    "questionText": "During isothermal expansion of an ideal gas, its specific heat capacity is",
    "options": [
      "Zero",
      "Infinite",
      "Equal to C_v",
      "Equal to C_p"
    ],
    "correctAnswer": 1,
    "explanation": "Isothermal process occurs at constant temperature (ΔT = 0), so C = Q / (n ΔT) = Infinite.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q33",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Hard",
    "questionText": "During adiabatic expansion of an ideal gas, its specific heat capacity is",
    "options": [
      "Zero",
      "Infinite",
      "Equal to C_v",
      "Equal to C_p"
    ],
    "correctAnswer": 0,
    "explanation": "In adiabatic process, heat transfer Q = 0, so C = 0 / (n ΔT) = 0.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q34",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Medium",
    "questionText": "Mayer's relation for an ideal gas molar heat capacities is",
    "options": [
      "C_p - C_v = R",
      "C_v - C_p = R",
      "C_p / C_v = R",
      "C_p + C_v = R"
    ],
    "correctAnswer": 0,
    "explanation": "Mayer's relation: C_p - C_v = R (in molar units) or c_p - c_v = r = R/M (in specific units).",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q35",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Easy",
    "questionText": "The ratio γ = C_p / C_v for a monoatomic ideal gas (e.g. He, Ar) is",
    "options": [
      "1.33 (4/3)",
      "1.40 (7/5)",
      "1.67 (5/3)",
      "1.28"
    ],
    "correctAnswer": 2,
    "explanation": "For monoatomic gas, degrees of freedom f = 3. C_v = (3/2)R, C_p = (5/2)R => γ = 5/3 ≈ 1.67.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q36",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Medium",
    "questionText": "The ratio γ = C_p / C_v for a rigid diatomic ideal gas (e.g. N₂, O₂) is",
    "options": [
      "1.33 (4/3)",
      "1.40 (7/5)",
      "1.67 (5/3)",
      "1.50"
    ],
    "correctAnswer": 1,
    "explanation": "For rigid diatomic gas f = 5 (3 trans + 2 rot). C_v = (5/2)R, C_p = (7/2)R => γ = 7/5 = 1.40.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q37",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Hard",
    "questionText": "Triple point of water is the unique thermodynamic state where ice, liquid water, and water vapor coexist in equilibrium at",
    "options": [
      "273.16 K (0.01 °C) and 611.65 Pa (4.58 mm Hg)",
      "273.15 K and 1 atm",
      "373.15 K and 1 atm",
      "0 K and 0 Pa"
    ],
    "correctAnswer": 0,
    "explanation": "Standard definition of triple point of water is exactly 273.16 K (0.01 °C) at 611.65 Pa (4.58 mm Hg).",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q38",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Medium",
    "questionText": "The rate of loss of heat by radiation from a body at temperature T to surroundings at T₀ is proportional to",
    "options": [
      "(T - T₀)",
      "(T² - T₀²)",
      "(T⁴ - T₀⁴)",
      "(T³ - T₀³)"
    ],
    "correctAnswer": 2,
    "explanation": "Net radiant heat loss rate dQ/dt = e σ A (T⁴ - T₀⁴).",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q39",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Easy",
    "questionText": "A body cools from 60 °C to 50 °C in 10 minutes. If room temperature is 20 °C, time taken to cool from 50 °C to 40 °C is",
    "options": [
      "10 min",
      "14 min",
      "17 min",
      "20 min"
    ],
    "correctAnswer": 1,
    "explanation": "By Newton's cooling law: (60-50)/10 = k(55-20) => 1 = 35k => k = 1/35. For 50 to 40: (50-40)/t = k(45-20) => 10/t = 25/35 => t = 350/25 = 14 minutes.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q40",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Medium",
    "questionText": "A sphere, a cube, and a thin circular disc all made of same material and same mass are heated to 200 °C and left to cool. Which cools fastest?",
    "options": [
      "Sphere",
      "Cube",
      "Circular disc",
      "All at same rate"
    ],
    "correctAnswer": 2,
    "explanation": "Rate of heat loss ∝ Surface Area. For a given mass, a thin circular disc has the maximum surface area, so it cools fastest (sphere has minimum area and cools slowest).",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q41",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Hard",
    "questionText": "In the above problem, which body cools slowest?",
    "options": [
      "Sphere",
      "Cube",
      "Circular disc",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "A sphere has the minimum surface area for a given volume/mass, minimizing radiant heat loss and cooling slowest.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q42",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Medium",
    "questionText": "Thermos flask (vacuum flask) minimizes heat loss by conduction, convection, and radiation respectively through",
    "options": [
      "Vacuum, Vacuum, Silvered reflective walls",
      "Plastic cap, Glass walls, Cork",
      "Felt, Air, Polish",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "Vacuum space eliminates conduction and convection; silvered inner walls reflect IR radiation back.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q43",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Easy",
    "questionText": "Sea breeze blowing from sea towards land during daytime is caused by",
    "options": [
      "Convection currents due to lower specific heat of land",
      "Conduction through sand",
      "Coriolis force",
      "Tides"
    ],
    "correctAnswer": 0,
    "explanation": "Land heats faster than water during the day (lower specific heat of soil). Warm air rises over land, creating low pressure that draws in cooler sea breeze.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q44",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Medium",
    "questionText": "When a gas is suddenly compressed, its temperature rises because",
    "options": [
      "Work done on the gas increases its internal energy in adiabatic compression",
      "Heat enters from outside",
      "Molecules expand",
      "Pressure is zero"
    ],
    "correctAnswer": 0,
    "explanation": "In rapid adiabatic compression dQ = 0. First law dQ = dU + dW => dU = -dW = +W_on_gas > 0, so internal energy and temperature rise.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  },
  {
    "id": "thp-q45",
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "Thermal Properties of Matter & Calorimetry",
    "difficulty": "Hard",
    "questionText": "Water is used as a coolant in automobile radiators and factory cooling jackets because of its",
    "options": [
      "High density",
      "High specific heat capacity (4184 J/kg·K)",
      "Low boiling point",
      "Low viscosity"
    ],
    "correctAnswer": 1,
    "explanation": "Water has exceptionally high specific heat capacity, allowing it to absorb enormous amounts of thermal energy with minimal temperature rise.",
    "tags": [
      "Thermal Properties of Matter",
      "Thermal Properties of Matter & Calorimetry"
    ]
  }
];

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
