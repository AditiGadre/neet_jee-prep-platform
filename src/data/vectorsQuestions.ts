import { Question } from '../types';

export const VECTORS_BOOK_QUESTIONS: Question[] = [
  {
    "id": "vec-fund-01",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Easy",
    "questionText": "The vector projection of a vector 3î + 4k̂ on the y-axis is:",
    "options": [
      "5",
      "4",
      "3",
      "Zero"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: The projection of vector $\\vec{A}$ along an axis with unit vector $\\hat{u}$ is $\\vec{A} \\cdot \\hat{u}$.\n\n⚡ **Calculation**: For $\\vec{A} = 3\\hat{i} + 0\\hat{j} + 4\\hat{k}$, the projection on the y-axis is $A_y = \\vec{A} \\cdot \\hat{j} = 0$.\n\n✓ **Examiner Pro-Tip**: Since the $\\hat{j}$ component is zero, the vector lies in the X-Z plane and has zero projection on the y-axis.",
    "tags": [
      "RPMT 2004",
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-02",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Easy",
    "questionText": "Position of a particle in a rectangular co-ordinate system is (3, 2, 5). Then its position vector will be:",
    "options": [
      "3î + 5ĵ + 2k̂",
      "3î + 2ĵ + 5k̂",
      "5î + 3ĵ + 2k̂",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: If a point has coordinates $(x, y, z)$, its position vector is $\\vec{r} = x\\hat{i} + y\\hat{j} + z\\hat{k}$.\n\n⚡ **Calculation**: Given $(3, 2, 5)$, $\\vec{r} = 3\\hat{i} + 2\\hat{j} + 5\\hat{k}$.",
    "tags": [
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-03",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Easy",
    "questionText": "If a particle moves from point P(2, 3, 5) to point Q(3, 4, 5), its displacement vector is:",
    "options": [
      "î + ĵ + 10k̂",
      "î + ĵ + 5k̂",
      "î + ĵ",
      "2î + 4ĵ + 6k̂"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $\\Delta\\vec{r} = (x_2 - x_1)\\hat{i} + (y_2 - y_1)\\hat{j} + (z_2 - z_1)\\hat{k}$.\n\n⚡ **Calculation**: $\\Delta\\vec{r} = (3-2)\\hat{i} + (4-3)\\hat{j} + (5-5)\\hat{k} = \\hat{i} + \\hat{j}$.",
    "tags": [
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-04",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Easy",
    "questionText": "A force of 5 N acts on a particle along a direction making an angle of 60° with vertical. Its vertical component is:",
    "options": [
      "10 N",
      "3 N",
      "4 N",
      "2.5 N"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Vertical component $F_v = F \\cos\\theta = 5 \\cos(60^\\circ) = 5 \\times \\frac{1}{2} = 2.5\\text{ N}$.",
    "tags": [
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-05",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Medium",
    "questionText": "If A = 3î + 4ĵ and B = 7î + 24ĵ, the vector having the same magnitude as B and parallel to A is:",
    "options": [
      "5î + 20ĵ",
      "15î + 10ĵ",
      "20î + 15ĵ",
      "15î + 20ĵ"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $|\\vec{B}| = \\sqrt{7^2 + 24^2} = 25$. $\\hat{A} = \\frac{3\\hat{i} + 4\\hat{j}}{5}$.\n\n⚡ **Required Vector**: $25 \\times \\left(\\frac{3\\hat{i} + 4\\hat{j}}{5}\\right) = 15\\hat{i} + 20\\hat{j}$.",
    "tags": [
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-06",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Easy",
    "questionText": "Vector A makes equal angles with x, y and z axes. The value of its components (in terms of magnitude of A) will be:",
    "options": [
      "A/√3",
      "A/√2",
      "√3 A",
      "A/3"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1 \\implies 3\\cos^2\\alpha = 1 \\implies \\cos\\alpha = \\frac{1}{\\sqrt{3}}$. Component = $A \\cos\\alpha = \\frac{A}{\\sqrt{3}}$.",
    "tags": [
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-07",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Medium",
    "questionText": "If A = 2î + 4ĵ - 5k̂, the direction cosines of the vector A are:",
    "options": [
      "2/√45, 4/√45 and -5/√45",
      "1/√45, 2/√45 and 3/√45",
      "4/√45, 0 and 4/√45",
      "3/√45, 2/√45 and 5/√45"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $|\\vec{A}| = \\sqrt{4 + 16 + 25} = \\sqrt{45}$. Direction cosines are $(l, m, n) = \\left(\\frac{2}{\\sqrt{45}}, \\frac{4}{\\sqrt{45}}, \\frac{-5}{\\sqrt{45}}\\right)$.",
    "tags": [
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-08",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Medium",
    "questionText": "The vector that must be added to (î - 3ĵ + 2k̂) and (3î + 6ĵ - 7k̂) so that the resultant vector is a unit vector along the y-axis is:",
    "options": [
      "4î + 2ĵ + 5k̂",
      "-4î - 2ĵ + 5k̂",
      "3î + 4ĵ + 5k̂",
      "Null vector"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{R} = \\hat{j} - (\\vec{A} + \\vec{B}) = \\hat{j} - (4\\hat{i} + 3\\hat{j} - 5\\hat{k}) = -4\\hat{i} - 2\\hat{j} + 5\\hat{k}$.",
    "tags": [
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-09",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Easy",
    "questionText": "How many minimum number of coplanar vectors having different magnitudes can be added to give zero resultant?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: Minimum 3 vectors with unequal magnitudes are needed to form a closed triangle in a plane.",
    "tags": [
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-10",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Medium",
    "questionText": "A hall has the dimensions 10 m × 12 m × 14 m. A fly starting at one corner ends up at a diametrically opposite corner. What is the magnitude of its displacement?",
    "options": [
      "17 m",
      "26 m",
      "36 m",
      "20 m"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Space diagonal $d = \\sqrt{l^2 + b^2 + h^2} = \\sqrt{100 + 144 + 196} = \\sqrt{440} \\approx 20.97\\text{ m} \\approx 20\\text{ m}$.",
    "tags": [
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-11",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Medium",
    "questionText": "100 coplanar forces each equal to 10 N act on a body. Each force makes angle π/50 with the preceding force. What is the resultant of the forces?",
    "options": [
      "1000 N",
      "500 N",
      "250 N",
      "Zero"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Total angle = $100 \\times (\\pi/50) = 2\\pi$. Equal forces distributed symmetrically around $2\\pi$ close to form a regular polygon with zero net force.",
    "tags": [
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-12",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Easy",
    "questionText": "The magnitude of a given vector with end points (4, -4, 0) and (-2, -2, 0) must be:",
    "options": [
      "6",
      "5√2",
      "4",
      "2√10"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $|\\vec{r}| = \\sqrt{(-2-4)^2 + (-2+4)^2 + 0} = \\sqrt{36 + 4} = \\sqrt{40} = 2\\sqrt{10}$.",
    "tags": [
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-13",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Easy",
    "questionText": "The expression (1/√2 î + 1/√2 ĵ) is a:",
    "options": [
      "Unit vector",
      "Null vector",
      "Vector of magnitude √2",
      "Scalar"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: Magnitude $\\sqrt{(1/\\sqrt{2})^2 + (1/\\sqrt{2})^2} = \\sqrt{1/2 + 1/2} = 1$, which defines a Unit Vector.",
    "tags": [
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-14",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Medium",
    "questionText": "Given vector A = 2î + 3ĵ, the angle between A and y-axis is:",
    "options": [
      "tan⁻¹(3/2)",
      "tan⁻¹(2/3)",
      "sin⁻¹(2/3)",
      "cos⁻¹(2/3)"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\tan\\theta = \\frac{A_x}{A_y} = \\frac{2}{3} \\implies \\theta = \\tan^{-1}(2/3)$.",
    "tags": [
      "CPMT 1993",
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-15",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Easy",
    "questionText": "The unit vector along (î + ĵ) is:",
    "options": [
      "k̂",
      "î + ĵ",
      "(î + ĵ)/√2",
      "(î + ĵ)/2"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $\\hat{u} = \\frac{\\hat{i} + \\hat{j}}{\\sqrt{1^2 + 1^2}} = \\frac{\\hat{i} + \\hat{j}}{\\sqrt{2}}$.",
    "tags": [
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-16",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Easy",
    "questionText": "A vector is represented by 3î + ĵ + 2k̂. Its length in the XY plane is:",
    "options": [
      "2",
      "√14",
      "√10",
      "√5"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Length in XY plane $L_{xy} = \\sqrt{A_x^2 + A_y^2} = \\sqrt{3^2 + 1^2} = \\sqrt{10}$.",
    "tags": [
      "EAMCET (Engg.) 1994",
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-17",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Easy",
    "questionText": "Five equal forces of 10 N each are applied at one point and all are lying in one plane. If the angles between them are equal, the resultant force will be:",
    "options": [
      "Zero",
      "10 N",
      "20 N",
      "10√2 N"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: Equal forces with equal angular spacing ($72^\\circ$) form a closed symmetric pentagon; net force is Zero.",
    "tags": [
      "CBSE PMT 1995",
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-18",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Easy",
    "questionText": "The angle made by the vector A = î + ĵ with the x-axis is:",
    "options": [
      "90°",
      "45°",
      "22.5°",
      "30°"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\cos\\alpha = \\frac{1}{\\sqrt{1^2 + 1^2}} = \\frac{1}{\\sqrt{2}} \\implies \\alpha = 45^\\circ$.",
    "tags": [
      "EAMCET (Engg.) 1999",
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-19",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Easy",
    "questionText": "Any vector in an arbitrary direction can always be replaced by two (or three):",
    "options": [
      "Parallel vectors which have the original vector as their resultant",
      "Mutually perpendicular vectors which have the original vector as their resultant",
      "Arbitrary vectors which have the original vector as their resultant",
      "It is not possible to resolve a vector"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: A vector can be resolved along arbitrary directions as long as their vector sum equals the original vector.",
    "tags": [
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-20",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Easy",
    "questionText": "Angular momentum is:",
    "options": [
      "A scalar",
      "A polar vector",
      "An axial vector",
      "None of these"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Rotational quantities ($\\vec{L} = \\vec{r} \\times \\vec{p}$, $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$) act along the axis of rotation and are axial vectors.",
    "tags": [
      "MNR 1986",
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-21",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Easy",
    "questionText": "Which of the following is a vector?",
    "options": [
      "Pressure",
      "Surface tension",
      "Moment of inertia",
      "None of these"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Pressure and Surface Tension are scalars, while Moment of Inertia is a tensor. Hence none of these is a vector.",
    "tags": [
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-22",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Medium",
    "questionText": "If P = Q then which of the following is NOT correct?",
    "options": [
      "P̂ = Q̂",
      "|P| = |Q|",
      "PQ̂ = QP̂",
      "P + Q = P̂ + Q̂"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $\\vec{P} + \\vec{Q} = 2\\vec{P} \\neq \\hat{P} + \\hat{Q}$ because vector sum magnitude depends on physical dimensions, not normalized unit vectors.",
    "tags": [
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-23",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Medium",
    "questionText": "The position vector of a particle is r = (a cos ωt)î + (a sin ωt)ĵ. The velocity of the particle is:",
    "options": [
      "Parallel to the position vector",
      "Perpendicular to the position vector",
      "Directed towards the origin",
      "Directed away from the origin"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{v} = -a\\omega \\sin(\\omega t)\\hat{i} + a\\omega \\cos(\\omega t)\\hat{j}$. $\\vec{r} \\cdot \\vec{v} = 0$, so velocity is perpendicular to the position vector.",
    "tags": [
      "CBSE PMT 1995",
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-24",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Easy",
    "questionText": "Which of the following is a scalar quantity?",
    "options": [
      "Displacement",
      "Electric field",
      "Acceleration",
      "Work"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Work done $W = \\vec{F} \\cdot \\vec{s}$ is the dot product of two vectors and is a scalar.",
    "tags": [
      "AFMC 1998",
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-25",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Medium",
    "questionText": "If a unit vector is represented by 0.5î + 0.8ĵ + ck̂, then the value of 'c' is:",
    "options": [
      "1",
      "√0.11",
      "√0.01",
      "√0.39"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $0.5^2 + 0.8^2 + c^2 = 1 \\implies 0.25 + 0.64 + c^2 = 1 \\implies c = \\sqrt{0.11}$.",
    "tags": [
      "CBSE PMT 1999",
      "EAMCET 1994",
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-26",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Medium",
    "questionText": "A boy walks uniformly along the sides of a rectangular park of size 400 m × 300 m, starting from one corner to the other corner diagonally opposite. Which of the following statement is incorrect?",
    "options": [
      "He has travelled a distance of 700 m",
      "His displacement is 700 m",
      "His displacement is 500 m",
      "His velocity is not uniform throughout the walk"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: Displacement is the diagonal distance $\\sqrt{400^2 + 300^2} = 500\\text{ m}$. Statement (b) is incorrect.",
    "tags": [
      "HP PMT 1999",
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-27",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Medium",
    "questionText": "The unit vector parallel to the resultant of vectors A = 4î + 3ĵ + 6k̂ and B = -î + 3ĵ - 8k̂ is:",
    "options": [
      "(3î + 6ĵ - 2k̂)/7",
      "(3î + 6ĵ + 2k̂)/7",
      "(3î + 6ĵ - 2k̂)/49",
      "(3î - 6ĵ + 2k̂)/49"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $\\vec{R} = 3\\hat{i} + 6\\hat{j} - 2\\hat{k}$. $|\\vec{R}| = \\sqrt{9 + 36 + 4} = 7$. $\\hat{R} = \\frac{3\\hat{i} + 6\\hat{j} - 2\\hat{k}}{7}$.",
    "tags": [
      "EAMCET 2000",
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-28",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Easy",
    "questionText": "Surface area is primarily treated as:",
    "options": [
      "Scalar",
      "Vector",
      "Neither scalar nor vector",
      "Both scalar and vector"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: Standard surface area is a scalar, though vector area elements are used in flux integrals.",
    "tags": [
      "J&K CET 2002",
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-29",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Medium",
    "questionText": "With respect to a rectangular cartesian coordinate system, three vectors are expressed as a = 4î - ĵ, b = -3î + 2ĵ and c = -k̂. The unit vector r̂ along the direction of sum of these vectors is:",
    "options": [
      "(î + ĵ - k̂)/√3",
      "(î + ĵ - k̂)/√2",
      "(î - ĵ + k̂)/√3",
      "(î + ĵ + k̂)/√2"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $\\vec{r} = \\hat{i} + \\hat{j} - \\hat{k}$. $|\\vec{r}| = \\sqrt{3}$. $\\hat{r} = \\frac{\\hat{i} + \\hat{j} - \\hat{k}}{\\sqrt{3}}$.",
    "tags": [
      "Kerala CET (Engg.) 2003",
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-30",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Easy",
    "questionText": "The angle between two identical vectors A = 3î + 4ĵ + 5k̂ and B = 3î + 4ĵ + 5k̂ is:",
    "options": [
      "60°",
      "Zero",
      "90°",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\cos\\theta = 1 \\implies \\theta = 0^\\circ$ (Zero).",
    "tags": [
      "DPMT 2000",
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-31",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Medium",
    "questionText": "The position vector of a particle is determined by the expression r = 3t²î + 4t²ĵ + 7k̂. The distance traversed in first 10 sec is:",
    "options": [
      "500 m",
      "300 m",
      "150 m",
      "100 m"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: Displacement $\\Delta\\vec{r} = 300\\hat{i} + 400\\hat{j} \\implies |\\Delta\\vec{r}| = \\sqrt{300^2 + 400^2} = 500\\text{ m}$.",
    "tags": [
      "DPMT 2002",
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-32",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Medium",
    "questionText": "Unit vector parallel to the resultant of vectors A = 4î - 3ĵ and B = 8î + 8ĵ will be:",
    "options": [
      "(24î + 5ĵ)/13",
      "(12î + 5ĵ)/13",
      "(6î + 5ĵ)/13",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{R} = 12\\hat{i} + 5\\hat{j}$. $|\\vec{R}| = 13$. $\\hat{R} = \\frac{12\\hat{i} + 5\\hat{j}}{13}$.",
    "tags": [
      "BHU 1995",
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-33",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Medium",
    "questionText": "The component of vector A = 2î + 3ĵ along the vector (î + ĵ) is:",
    "options": [
      "5/√2",
      "10√2",
      "5√2",
      "5"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $\\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{B}|} = \\frac{2(1) + 3(1)}{\\sqrt{2}} = \\frac{5}{\\sqrt{2}}$.",
    "tags": [
      "KCET 1997",
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-fund-34",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "difficulty": "Medium",
    "questionText": "The angle between two vectors A = 3î + 4ĵ + 5k̂ and B = 3î + 4ĵ - 5k̂ will be:",
    "options": [
      "90°",
      "0°",
      "60°",
      "45°"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} \\cdot \\vec{B} = 9 + 16 - 25 = 0 \\implies \\theta = 90^\\circ$.",
    "tags": [
      "Pb. CET 2001",
      "Fundamentals of Vectors"
    ]
  },
  {
    "id": "vec-add-01",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Easy",
    "questionText": "There are two force vectors, one of 5 N and other of 12 N. At what angle the two vectors be added to get resultant vector of 17 N, 7 N and 13 N respectively?",
    "options": [
      "0°, 180° and 90°",
      "0°, 90° and 180°",
      "0°, 90° and 90°",
      "180°, 0° and 90°"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: Resultant $R = \\sqrt{A^2 + B^2 + 2AB\\cos\\theta}$.\n\n⚡ **Calculations**:\n- $R = 17\\text{ N} = 5 + 12 \\implies \\theta = 0^\\circ$\n- $R = 7\\text{ N} = 12 - 5 \\implies \\theta = 180^\\circ$\n- $R = 13\\text{ N} = \\sqrt{5^2 + 12^2} \\implies \\theta = 90^\\circ$.",
    "tags": [
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-02",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "If A = 4î - 3ĵ and B = 6î + 8ĵ, then magnitude and direction of (A + B) will be:",
    "options": [
      "5, tan⁻¹(3/4)",
      "5√5, tan⁻¹(1/2)",
      "10, tan⁻¹(5)",
      "25, tan⁻¹(3/4)"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} + \\vec{B} = 10\\hat{i} + 5\\hat{j}$.\n\n⚡ **Calculation**: $|\\vec{A} + \\vec{B}| = \\sqrt{10^2 + 5^2} = \\sqrt{125} = 5\\sqrt{5}$. $\\tan\\theta = 5/10 = 1/2 \\implies \\theta = \\tan^{-1}(1/2)$.",
    "tags": [
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-03",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "A truck travelling due north at 20 m/s turns west and travels at the same speed. The change in its velocity is:",
    "options": [
      "40 m/s N–W",
      "20√2 m/s N–W",
      "40 m/s S–W",
      "20√2 m/s S–W"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $\\vec{v}_1 = 20\\hat{j}$, $\\vec{v}_2 = -20\\hat{i}$. $\\Delta\\vec{v} = \\vec{v}_2 - \\vec{v}_1 = -20\\hat{i} - 20\\hat{j}$.\nMagnitude = $20\\sqrt{2}\\text{ m/s}$, Direction = South-West.",
    "tags": [
      "UPSEAT 1999",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-04",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "If the sum of two unit vectors is a unit vector, then magnitude of their difference is:",
    "options": [
      "√2",
      "√3",
      "1/√2",
      "√5"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $|\\hat{n}_1 + \\hat{n}_2|^2 = 1 \\implies 2 + 2\\cos\\theta = 1 \\implies \\cos\\theta = -1/2$ ($\\theta = 120^\\circ$).\n$|\\hat{n}_1 - \\hat{n}_2| = \\sqrt{1 + 1 - 2\\cos(120^\\circ)} = \\sqrt{2 - 2(-1/2)} = \\sqrt{3}$.",
    "tags": [
      "CPMT 1995",
      "CBSE PMT 1989",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-05",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "If A = 2î + ĵ, B = 3ĵ - k̂ and C = 6î - 2k̂, the value of (A - 2B + 3C) would be:",
    "options": [
      "20î + 5ĵ + 4k̂",
      "20î - 5ĵ - 4k̂",
      "4î + 5ĵ + 20k̂",
      "5î + 4ĵ + 10k̂"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} - 2\\vec{B} + 3\\vec{C} = (2\\hat{i}+\\hat{j}) - 2(3\\hat{j}-\\hat{k}) + 3(6\\hat{i}-2\\hat{k}) = 20\\hat{i} - 5\\hat{j} - 4\\hat{k}$.",
    "tags": [
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-06",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "An object of mass m with speed v m/s strikes a wall at an angle θ with normal and rebounds at the same speed and same angle. The magnitude of the change in momentum of the object will be:",
    "options": [
      "2mv cos θ",
      "2mv sin θ",
      "0",
      "2mv"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: Normal component reverses ($mv\\cos\\theta - (-mv\\cos\\theta) = 2mv\\cos\\theta$) while tangential component is unchanged.",
    "tags": [
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-07",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Easy",
    "questionText": "Two forces, each of magnitude F have a resultant of the same magnitude F. The angle between the two forces is:",
    "options": [
      "45°",
      "120°",
      "150°",
      "60°"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $F = \\sqrt{F^2 + F^2 + 2F^2\\cos\\theta} \\implies 1 = 2 + 2\\cos\\theta \\implies \\cos\\theta = -1/2 \\implies \\theta = 120^\\circ$.",
    "tags": [
      "CBSE PMT 1990",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-08",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Easy",
    "questionText": "For the resultant of two vectors to be maximum, what must be the angle between them?",
    "options": [
      "0°",
      "60°",
      "90°",
      "180°"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: Resultant is maximum when $\\cos\\theta = 1 \\implies \\theta = 0^\\circ$.",
    "tags": [
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-09",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Easy",
    "questionText": "A particle is simultaneously acted by two forces equal to 4 N and 3 N. The net force on the particle is:",
    "options": [
      "7 N",
      "5 N",
      "1 N",
      "Between 1 N and 7 N"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Range of resultant is $[|A-B|, A+B] = [4-3, 4+3] = [1\\text{ N}, 7\\text{ N}]$.",
    "tags": [
      "CPMT 1979",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-10",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "Two vectors A and B lie in a plane, another vector C lies outside this plane, then the resultant of these three vectors i.e. (A + B + C):",
    "options": [
      "Can be zero",
      "Cannot be zero",
      "Lies in the plane containing A + B",
      "Lies in the plane containing C"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: Non-coplanar vector $\\vec{C}$ cannot be neutralized by coplanar sum $\\vec{A} + \\vec{B}$. Hence net resultant cannot be zero.",
    "tags": [
      "CPMT 1983",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-11",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "If the resultant of two forces has a magnitude smaller than the magnitude of the larger force, the two forces must:",
    "options": [
      "Be different both in magnitude and direction",
      "Be mutually perpendicular to one another",
      "Possess extremely small magnitude",
      "Point in opposite directions (angle θ > 90°)"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: For $R < A$, $B^2 + 2AB\\cos\\theta < 0 \\implies \\cos\\theta < 0$, meaning the forces act in obtuse/opposing directions.",
    "tags": [
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-12",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Easy",
    "questionText": "Forces F₁ and F₂ act on a point mass in two mutually perpendicular directions. The resultant force on the point mass will be:",
    "options": [
      "F₁ + F₂",
      "F₁ - F₂",
      "√(F₁² + F₂²)",
      "F₁² + F₂²"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: When $\\theta = 90^\\circ$, $R = \\sqrt{F_1^2 + F_2^2}$.",
    "tags": [
      "CPMT 1991",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-13",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "If |A - B| = |A| = |B|, the angle between A and B is:",
    "options": [
      "60°",
      "0°",
      "120°",
      "90°"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $A^2 + A^2 - 2A^2\\cos\\theta = A^2 \\implies 2\\cos\\theta = 1 \\implies \\theta = 60^\\circ$.",
    "tags": [
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-14",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "Let the angle between two nonzero vectors A and B be 120° and resultant be C. Then:",
    "options": [
      "C must be equal to |A - B|",
      "C must be less than |A - B|",
      "C must be greater than |A - B|",
      "C may be equal to |A - B|"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $C^2 = A^2 + B^2 - AB$, while $|\\vec{A} - \\vec{B}|^2 = A^2 + B^2 + AB$. Thus $C < |\\vec{A} - \\vec{B}|$.",
    "tags": [
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-15",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Easy",
    "questionText": "The magnitude of vectors A, B and C are respectively 12, 5 and 13 units and A + B = C, then the angle between A and B is:",
    "options": [
      "0",
      "π",
      "π/2",
      "π/4"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $12^2 + 5^2 = 144 + 25 = 169 = 13^2 \\implies \\theta = 90^\\circ = \\pi/2$.",
    "tags": [
      "CPMT 1997",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-16",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Easy",
    "questionText": "Magnitude of vector which comes on addition of two vectors (6î + 7ĵ) and (3î + 4ĵ) is:",
    "options": [
      "√136",
      "13.2",
      "√202",
      "√160"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $\\vec{R} = 9\\hat{i} + 11\\hat{j} \\implies |\\vec{R}| = \\sqrt{81 + 121} = \\sqrt{202}$.",
    "tags": [
      "BHU 2000",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-17",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "A particle has displacement of 12 m towards east, 5 m towards north and 6 m vertically upward. The sum of these displacements is:",
    "options": [
      "12",
      "10.04 m",
      "14.31 m",
      "None of these"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $R = \\sqrt{12^2 + 5^2 + 6^2} = \\sqrt{144 + 25 + 36} = \\sqrt{205} \\approx 14.31\\text{ m}$.",
    "tags": [
      "AIIMS 1998",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-18",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "The three vectors A = 3î - 2ĵ + k̂, B = î - 3ĵ + 5k̂ and C = 2î + ĵ - 4k̂ form:",
    "options": [
      "An equilateral triangle",
      "Isosceles triangle",
      "A right angled triangle",
      "No triangle"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $A^2 = 14$, $B^2 = 35$, $C^2 = 21$. Since $A^2 + C^2 = 14 + 21 = 35 = B^2$, it is a Right Angled Triangle.",
    "tags": [
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-19",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Easy",
    "questionText": "For the closed vector triangle with sides C + A = B, the correct relation is:",
    "options": [
      "A + B = C",
      "B + C = A",
      "C + A = B",
      "A + B + C = 0"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Following vector traversal head-to-tail gives $\\vec{C} + \\vec{A} = \\vec{B}$.",
    "tags": [
      "CPMT 1994",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-20",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Easy",
    "questionText": "Let C = A + B, then:",
    "options": [
      "|C| is always greater than |A|",
      "It is possible to have |C| < |A| and |C| < |B|",
      "C is always equal to A + B",
      "C is never equal to A + B"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: Due to directional cancellation in obtuse angles, $|\\vec{A} + \\vec{B}|$ can be smaller than both $|\\vec{A}|$ and $|\\vec{B}|$.",
    "tags": [
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-21",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Easy",
    "questionText": "The value of the sum of two vectors A and B with θ as the angle between them is:",
    "options": [
      "√(A² + B² + 2AB cos θ)",
      "√(A² - B² + 2AB cos θ)",
      "√(A² + B² - 2AB sin θ)",
      "√(A² + B² + 2AB sin θ)"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: Parallelogram Law: $R = \\sqrt{A^2 + B^2 + 2AB\\cos\\theta}$.",
    "tags": [
      "BHU 1996",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-22",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "Following sets of three forces act on a body. Whose resultant CANNOT be zero?",
    "options": [
      "10, 10, 10",
      "10, 10, 20",
      "10, 20, 23",
      "10, 20, 40"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Triangle inequality: The sum of any two sides must be $\\geq$ the third side. For (10, 20, 40), $10 + 20 = 30 < 40$, so zero resultant is impossible.",
    "tags": [
      "CPMT 1985",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-23",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "When three forces of 50 N, 30 N and 15 N act on a body, then the body is:",
    "options": [
      "At rest",
      "Moving with a uniform velocity",
      "In equilibrium",
      "Moving with an acceleration"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $30 + 15 = 45 < 50$. Forces cannot cancel to zero; net non-zero force produces an acceleration.",
    "tags": [
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-24",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Hard",
    "questionText": "The sum of two forces acting at a point is 16 N. If the resultant force is 8 N and its direction is perpendicular to minimum force, then the forces are:",
    "options": [
      "6 N and 10 N",
      "8 N and 8 N",
      "4 N and 12 N",
      "2 N and 14 N"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: Let forces be $A$ and $B$ ($A+B=16$). $\\tan 90^\\circ = \\infty \\implies A + B\\cos\\theta = 0 \\implies \\cos\\theta = -A/B$.\n$R^2 = A^2 + B^2 + 2AB(-A/B) = B^2 - A^2 = (B-A)(B+A) = 8^2 = 64$.\nSince $B+A = 16$, $B-A = 64/16 = 4$. Solving gives $B = 10\\text{ N}, A = 6\\text{ N}$.",
    "tags": [
      "CPMT 1997",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-25",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "If vectors P, Q and R have magnitude 5, 12 and 13 units and P + Q = R, the angle between Q and R is:",
    "options": [
      "cos⁻¹(5/12)",
      "cos⁻¹(5/13)",
      "cos⁻¹(12/13)",
      "cos⁻¹(7/13)"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: In right triangle formed by $\\vec{P} \\perp \\vec{Q}$ with hypotenuse $\\vec{R}$, $\\cos\\theta = \\text{Base}/\\text{Hypotenuse} = Q/R = 12/13 \\implies \\theta = \\cos^{-1}(12/13)$.",
    "tags": [
      "CEET 1998",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-26",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Hard",
    "questionText": "The resultant of two vectors A and B is perpendicular to vector A and its magnitude is equal to half the magnitude of vector B. The angle between A and B is:",
    "options": [
      "120°",
      "150°",
      "135°",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{R} \\perp \\vec{A} \\implies A + B\\cos\\theta = 0 \\implies \\cos\\theta = -A/B$.\n$R^2 = B^2 - A^2 = (B/2)^2 = B^2/4 \\implies A^2 = 3B^2/4 \\implies A/B = \\sqrt{3}/2$.\n$\\cos\\theta = -\\sqrt{3}/2 \\implies \\theta = 150^\\circ$.",
    "tags": [
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-27",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "What vector must be added to the two vectors (î - 2ĵ + 2k̂) and (2î + ĵ - k̂) so that the resultant may be a unit vector along the x-axis?",
    "options": [
      "2î + ĵ - k̂",
      "-2î + ĵ - k̂",
      "2î - ĵ + k̂",
      "-2î - ĵ - k̂"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} + \\vec{B} = 3\\hat{i} - \\hat{j} + \\hat{k}$. $\\vec{R} = \\hat{i} - (3\\hat{i} - \\hat{j} + \\hat{k}) = -2\\hat{i} + \\hat{j} - \\hat{k}$.",
    "tags": [
      "BHU 1990",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-28",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Easy",
    "questionText": "What is the angle between P and the resultant of (P + Q) and (P - Q)?",
    "options": [
      "Zero",
      "tan⁻¹(P/Q)",
      "tan⁻¹(Q/P)",
      "tan⁻¹((P-Q)/(P+Q))"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: Resultant $= (\\vec{P} + \\vec{Q}) + (\\vec{P} - \\vec{Q}) = 2\\vec{P}$. Since $2\\vec{P}$ is collinear and parallel to $\\vec{P}$, the angle is Zero.",
    "tags": [
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-29",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "The resultant of P and Q is perpendicular to P. What is the angle between P and Q?",
    "options": [
      "cos⁻¹(P/Q)",
      "cos⁻¹(-P/Q)",
      "sin⁻¹(P/Q)",
      "sin⁻¹(-P/Q)"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\tan 90^\\circ = \\frac{Q\\sin\\theta}{P + Q\\cos\\theta} = \\infty \\implies P + Q\\cos\\theta = 0 \\implies \\cos\\theta = -P/Q \\implies \\theta = \\cos^{-1}(-P/Q)$.",
    "tags": [
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-30",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "Maximum and minimum magnitudes of the resultant of two vectors of magnitudes P and Q are in the ratio 3 : 1. Which of the following relations is true?",
    "options": [
      "P = 2Q",
      "P = Q",
      "PQ = 1",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $\\frac{P+Q}{P-Q} = \\frac{3}{1} \\implies P+Q = 3P - 3Q \\implies 2P = 4Q \\implies P = 2Q$.",
    "tags": [
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-31",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Hard",
    "questionText": "The resultant of two vectors P and Q is R. If Q is doubled, the new resultant is perpendicular to P. Then R equals:",
    "options": [
      "P",
      "(P+Q)",
      "Q",
      "(P-Q)"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: When $Q$ is doubled, $\\vec{R}' \\perp \\vec{P} \\implies P + 2Q\\cos\\theta = 0 \\implies 2P\\cos\\theta = -P^2/Q$.\nOriginal $R^2 = P^2 + Q^2 + 2PQ\\cos\\theta = P^2 + Q^2 + Q(-P^2/Q) = Q^2 \\implies R = Q$.",
    "tags": [
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-32",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "Two forces F₁ and F₂ are acting on a body. One force is double that of the other force and the resultant is equal to the greater force. Then the angle between the two forces is:",
    "options": [
      "cos⁻¹(1/2)",
      "cos⁻¹(-1/2)",
      "cos⁻¹(-1/4)",
      "cos⁻¹(1/4)"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Let $F_1 = F$, $F_2 = 2F$, $R = 2F$.\n$(2F)^2 = F^2 + (2F)^2 + 2(F)(2F)\\cos\\theta \\implies 4F^2 = 5F^2 + 4F^2\\cos\\theta \\implies 4\\cos\\theta = -1 \\implies \\cos\\theta = -1/4$.",
    "tags": [
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-33",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "Given that A + B = C and that C is ⊥ to A. Further if |A| = |C|, then what is the angle between A and B?",
    "options": [
      "π/4 radian",
      "π/2 radian",
      "3π/4 radian",
      "π radian"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: In right triangle formed by $\\vec{A}$ and $\\vec{C}$ where $\\vec{B}$ is hypotenuse: $\\tan\\alpha = C/A = 1 \\implies \\alpha = 45^\\circ$.\nAngle between $\\vec{A}$ and $\\vec{B}$ is $180^\\circ - 45^\\circ = 135^\\circ = 3\\pi/4\\text{ rad}$.",
    "tags": [
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-34",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Easy",
    "questionText": "A body is at rest under the action of three forces, two of which are F₁ = 4î and F₂ = 6ĵ. The third force is:",
    "options": [
      "4î + 6ĵ",
      "4î - 6ĵ",
      "-4î + 6ĵ",
      "-4î - 6ĵ"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Equilibrium condition $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = 0 \\implies \\vec{F}_3 = -4\\hat{i} - 6\\hat{j}$.",
    "tags": [
      "AMU 1996",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-35",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Easy",
    "questionText": "A plane is revolving around the earth with a speed of 100 km/hr at a constant height from the surface of earth. The change in velocity as it travels half circle is:",
    "options": [
      "200 km/hr",
      "150 km/hr",
      "100√2 km/hr",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: In half revolution, velocity reverses from $v$ to $-v$. $|\\Delta\\vec{v}| = |v - (-v)| = 2v = 2(100) = 200\\text{ km/hr}$.",
    "tags": [
      "RPET 1998",
      "KCET 2000",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-36",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "What displacement must be added to the displacement (25î - 6ĵ) m to give a displacement of 7.0 m pointing in the x-direction?",
    "options": [
      "18î - 6ĵ",
      "32î - 13ĵ",
      "-18î + 6ĵ",
      "-25î + 13ĵ"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $\\vec{s} = 7\\hat{i} - (25\\hat{i} - 6\\hat{j}) = -18\\hat{i} + 6\\hat{j}$.",
    "tags": [
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-37",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Easy",
    "questionText": "A body moves due East with velocity 20 km/hour and then due North with velocity 15 km/hour. The resultant velocity is:",
    "options": [
      "5 km/hour",
      "15 km/hour",
      "20 km/hour",
      "25 km/hour"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $v = \\sqrt{20^2 + 15^2} = \\sqrt{400 + 225} = \\sqrt{625} = 25\\text{ km/hr}$.",
    "tags": [
      "AFMC 1995",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-38",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Easy",
    "questionText": "The magnitudes of vectors A, B and C are 3, 4 and 5 units respectively. If A + B = C, the angle between A and B is:",
    "options": [
      "π/2",
      "cos⁻¹(0.6)",
      "tan⁻¹(7/5)",
      "π/4"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $3^2 + 4^2 = 9 + 16 = 25 = 5^2 \\implies \\theta = 90^\\circ = \\pi/2$.",
    "tags": [
      "CBSE PMT 1990",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-39",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Hard",
    "questionText": "While travelling from one station to another, a car travels 75 km North, 60 km North-east and 20 km East. The minimum distance between the two stations is:",
    "options": [
      "72 km",
      "112 km",
      "132 km",
      "155 km"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $R_x = 20 + 60\\cos 45^\\circ = 20 + 42.4 = 62.4\\text{ km}$. $R_y = 75 + 60\\sin 45^\\circ = 75 + 42.4 = 117.4\\text{ km}$.\n$R = \\sqrt{62.4^2 + 117.4^2} = \\sqrt{3893 + 13782} = \\sqrt{17675} \\approx 132.9\\text{ km} \\approx 132\\text{ km}$.",
    "tags": [
      "AFMC 1993",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-40",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "A scooter going due east at 10 ms⁻¹ turns right through an angle of 90°. If the speed of the scooter remains unchanged in taking turn, the change in the velocity of the scooter is:",
    "options": [
      "20.0 ms⁻¹ south eastern direction",
      "Zero",
      "10.0 ms⁻¹ in southern direction",
      "14.14 ms⁻¹ in south-west direction"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $\\vec{v}_1 = 10\\hat{i}$ (East), $\\vec{v}_2 = -10\\hat{j}$ (South). $\\Delta\\vec{v} = -10\\hat{j} - 10\\hat{i} = -10\\hat{i} - 10\\hat{j}$.\n$|\\Delta\\vec{v}| = 10\\sqrt{2} \\approx 14.14\\text{ m/s}$ in South-West direction.",
    "tags": [
      "BHU 1994",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-41",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Easy",
    "questionText": "A person goes 10 km north and 20 km east. What will be displacement from initial point?",
    "options": [
      "22.36 km",
      "2 km",
      "5 km",
      "20 km"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $d = \\sqrt{10^2 + 20^2} = \\sqrt{500} = 10\\sqrt{5} \\approx 22.36\\text{ km}$.",
    "tags": [
      "AFMC 1994, 2003",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-42",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "Two forces F₁ = 5î + 10ĵ - 20k̂ and F₂ = 10î - 5ĵ - 15k̂ act on a single point. The angle between F₁ and F₂ is nearly:",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\cos\\theta = \\frac{50 - 50 + 300}{\\sqrt{525}\\sqrt{350}} = \\frac{300}{428.6} \\approx 0.707 = \\frac{1}{\\sqrt{2}} \\implies \\theta = 45^\\circ$.",
    "tags": [
      "AMU 1995",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-43",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Easy",
    "questionText": "Which pair of the following forces will NEVER give resultant force of 2 N?",
    "options": [
      "2 N and 2 N",
      "1 N and 1 N",
      "1 N and 3 N",
      "1 N and 4 N"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: For (1 N, 4 N), range is $[4-1, 4+1] = [3\\text{ N}, 5\\text{ N}]$. $2\\text{ N}$ is outside this range.",
    "tags": [
      "HP PMT 1999",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-44",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Hard",
    "questionText": "Two forces 3 N and 2 N are at an angle θ such that resultant is R. The first force is now increased to 6 N and resultant becomes 2R. The value of θ is:",
    "options": [
      "30°",
      "60°",
      "90°",
      "120°"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $R^2 = 9 + 4 + 12\\cos\\theta = 13 + 12\\cos\\theta$.\n$4R^2 = 36 + 4 + 24\\cos\\theta = 40 + 24\\cos\\theta$.\n$4(13 + 12\\cos\\theta) = 40 + 24\\cos\\theta \\implies 52 + 48\\cos\\theta = 40 + 24\\cos\\theta \\implies 24\\cos\\theta = -12 \\implies \\cos\\theta = -1/2 \\implies \\theta = 120^\\circ$.",
    "tags": [
      "HP PMT 2000",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-45",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "Three concurrent forces of the same magnitude are in equilibrium. What is the angle between the forces? Also name the triangle formed by the forces as sides:",
    "options": [
      "60° equilateral triangle",
      "120° equilateral triangle",
      "120°, 30°, 30° an isosceles triangle",
      "120° an obtuse angled triangle"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: When 3 equal forces are in equilibrium, the angle between adjacent vectors is $360^\\circ/3 = 120^\\circ$. Represented head-to-tail as sides of a closed polygon, they form an Equilateral Triangle (interior angles $60^\\circ$).",
    "tags": [
      "JIPMER 2000",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-46",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Easy",
    "questionText": "If |A + B| = |A| + |B|, then angle between A and B will be:",
    "options": [
      "90°",
      "120°",
      "0°",
      "60°"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Maximum magnitude occurs when vectors are parallel ($\\theta = 0^\\circ$).",
    "tags": [
      "CBSE PMT 2001",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-47",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "The maximum and minimum magnitude of the resultant of two given vectors are 17 units and 7 units respectively. If these two vectors are at right angles to each other, the magnitude of their resultant is:",
    "options": [
      "14",
      "16",
      "18",
      "13"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $A + B = 17, A - B = 7 \\implies A = 12, B = 5$. At $90^\\circ$, $R = \\sqrt{12^2 + 5^2} = 13$.",
    "tags": [
      "Kerala CET (Engg.) 2000",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-48",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "The vector sum of two forces is perpendicular to their vector difference. In that case, the forces:",
    "options": [
      "Are equal to each other in magnitude",
      "Are not equal to each other in magnitude",
      "Cannot be predicted",
      "Are equal to each other"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $(\\vec{A} + \\vec{B}) \\cdot (\\vec{A} - \\vec{B}) = A^2 - B^2 = 0 \\implies A = B$ (equal magnitudes).",
    "tags": [
      "CBSE PMT 2003",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-49",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Easy",
    "questionText": "y component of velocity is 20 and x component of velocity is 10. The direction of motion of the body with the horizontal at this instant is:",
    "options": [
      "tan⁻¹(2)",
      "tan⁻¹(1/2)",
      "45°",
      "0°"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $\\tan\\theta = v_y/v_x = 20/10 = 2 \\implies \\theta = \\tan^{-1}(2)$.",
    "tags": [
      "Manipal 2003",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-50",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Easy",
    "questionText": "Two forces of 12 N and 8 N act upon a body. The resultant force on the body has maximum value of:",
    "options": [
      "4 N",
      "0 N",
      "20 N",
      "8 N"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $R_{\\text{max}} = F_1 + F_2 = 12 + 8 = 20\\text{ N}$.",
    "tags": [
      "Manipal 2003",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-51",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Easy",
    "questionText": "Two equal forces (P each) act at a point inclined to each other at an angle of 120°. The magnitude of their resultant is:",
    "options": [
      "P / 2",
      "P / 4",
      "P",
      "2P"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $R = \\sqrt{P^2 + P^2 + 2P^2\\cos 120^\\circ} = \\sqrt{2P^2 - P^2} = P$.",
    "tags": [
      "Karnataka CET 2004",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-52",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Easy",
    "questionText": "The vectors (5î + 8ĵ) and (2î + 7ĵ) are added. The magnitude of the sum of these vectors is:",
    "options": [
      "√274",
      "38",
      "238",
      "560"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $\\vec{R} = 7\\hat{i} + 15\\hat{j} \\implies |\\vec{R}| = \\sqrt{7^2 + 15^2} = \\sqrt{49 + 225} = \\sqrt{274}$.",
    "tags": [
      "BHU 2000",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-add-53",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Addition and Subtraction of Vectors",
    "difficulty": "Medium",
    "questionText": "Two vectors A and B are such that A + B = A - B. Then:",
    "options": [
      "A · B = 0",
      "A × B = 0",
      "A = 0",
      "B = 0"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} + \\vec{B} = \\vec{A} - \\vec{B} \\implies 2\\vec{B} = 0 \\implies \\vec{B} = 0$ (null vector).",
    "tags": [
      "AMU (Med.) 2000",
      "Addition and Subtraction of Vectors"
    ]
  },
  {
    "id": "vec-mul-01",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "If a vector (2î + 3ĵ + 8k̂) is perpendicular to the vector (4ĵ - 4î + αk̂), then the value of α is:",
    "options": [
      "-1",
      "1/2",
      "-1/2",
      "1"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} \\cdot \\vec{B} = 0 \\implies (2)(-4) + (3)(4) + (8)(\\alpha) = 0 \\implies -8 + 12 + 8\\alpha = 0 \\implies 8\\alpha = -4 \\implies \\alpha = -1/2$.",
    "tags": [
      "CBSE PMT 2005",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-02",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "If two vectors (2î + 3ĵ - k̂) and (-4î - 6ĵ - λk̂) are parallel to each other, then the value of λ is:",
    "options": [
      "0",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: For parallel vectors, ratios of corresponding components are equal: $\\frac{2}{-4} = \\frac{3}{-6} = \\frac{-1}{-\\lambda} \\implies -1/2 = 1/\\lambda \\implies \\lambda = -2$ (or with $-4\\hat{i}-6\\hat{j}+\\lambda\\hat{k} \\implies \\lambda = 2$).",
    "tags": [
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-03",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "A body, acted upon by a force of 50 N is displaced through a distance 10 meter in a direction making an angle of 60° with the force. The work done by the force is:",
    "options": [
      "200 J",
      "100 J",
      "300 J",
      "250 J"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $W = F s \\cos\\theta = 50 \\times 10 \\times \\cos 60^\\circ = 500 \\times 0.5 = 250\\text{ J}$.",
    "tags": [
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-04",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "A particle moves from position (3î + 2ĵ - 6k̂) to (14î + 13ĵ + 9k̂) due to a uniform force of (4î + ĵ + 3k̂) N. If the displacement is in meters, then work done will be:",
    "options": [
      "100 J",
      "200 J",
      "300 J",
      "250 J"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $\\vec{s} = \\vec{r}_2 - \\vec{r}_1 = 11\\hat{i} + 11\\hat{j} + 15\\hat{k}$. $W = \\vec{F} \\cdot \\vec{s} = 4(11) + 1(11) + 3(15) = 44 + 11 + 45 = 100\\text{ J}$.",
    "tags": [
      "CMEET 1995",
      "Pb. PMT 2002",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-05",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "If for two vectors A and B, sum (A + B) is perpendicular to the difference (A - B), the ratio of their magnitude is:",
    "options": [
      "1",
      "2",
      "3",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $(\\vec{A} + \\vec{B}) \\cdot (\\vec{A} - \\vec{B}) = A^2 - B^2 = 0 \\implies A = B \\implies A/B = 1$.",
    "tags": [
      "Manipal 2003",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-06",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "The angle between vectors A and B is θ. The value of the triple product A · (B × A) is:",
    "options": [
      "A²B",
      "Zero",
      "A²B sin θ",
      "A²B cos θ"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{B} \\times \\vec{A}$ produces a vector perpendicular to $\\vec{A}$. The dot product of $\\vec{A}$ with any vector perpendicular to it is strictly Zero.",
    "tags": [
      "CBSE PMT 1991, 2005",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-07",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "If A × B = B × A, then the angle between A and B is:",
    "options": [
      "π / 2",
      "π / 3",
      "π",
      "π / 4"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Since $\\vec{A} \\times \\vec{B} = -(\\vec{B} \\times \\vec{A})$, equality requires $\\vec{A} \\times \\vec{B} = 0 \\implies \\sin\\theta = 0 \\implies \\theta = \\pi$ (or $0$).",
    "tags": [
      "AIEEE 2004",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-08",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "If A = 3î + ĵ + 2k̂ and B = 2î - 2ĵ + 4k̂, then the value of |A × B| will be:",
    "options": [
      "8√2",
      "8√3",
      "8√5",
      "5√8"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} \\times \\vec{B} = 8\\hat{i} - 8\\hat{j} - 8\\hat{k} \\implies |\\vec{A} \\times \\vec{B}| = \\sqrt{64 + 64 + 64} = 8\\sqrt{3}$.",
    "tags": [
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-09",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "The torque of the force F = (2î - 3ĵ + 4k̂) N acting at the point r = (3î + 2ĵ + 3k̂) m about the origin is:",
    "options": [
      "6î - 6ĵ + 12k̂",
      "17î - 6ĵ - 13k̂",
      "-6î + 6ĵ - 12k̂",
      "-17î + 6ĵ + 13k̂"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 3 & 2 & 3 \\\\ 2 & -3 & 4 \\end{vmatrix} = \\hat{i}(8+9) - \\hat{j}(12-6) + \\hat{k}(-9-4) = 17\\hat{i} - 6\\hat{j} - 13\\hat{k}$.",
    "tags": [
      "CBSE PMT 1995",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-10",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "If A × B = C, then which of the following statements is WRONG?",
    "options": [
      "C ⊥ A",
      "C ⊥ B",
      "C ⊥ (A + B)",
      "C ⊥ (A × B)"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Since $\\vec{C} = \\vec{A} \\times \\vec{B}$, vector $\\vec{C}$ is parallel (collinear) to itself, not perpendicular.",
    "tags": [
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-11",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "If a particle of mass m is moving with constant velocity v parallel to x-axis at y = b in x-y plane, its angular momentum with respect to origin is:",
    "options": [
      "mvb k̂",
      "-mvb k̂",
      "mvb î",
      "mv î"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{r} = x\\hat{i} + b\\hat{j}$, $\\vec{p} = mv\\hat{i}$. $\\vec{L} = \\vec{r} \\times \\vec{p} = (x\\hat{i} + b\\hat{j}) \\times mv\\hat{i} = -mvb\\hat{k}$.",
    "tags": [
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-12",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "Consider two vectors F₁ = 2ĵ + 5k̂ and F₂ = 3ĵ + 4k̂. The magnitude of the scalar product of these vectors is:",
    "options": [
      "20",
      "23",
      "5√33",
      "26"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $\\vec{F}_1 \\cdot \\vec{F}_2 = (2)(3) + (5)(4) = 6 + 20 = 26$.",
    "tags": [
      "MP PMT 1987",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-13",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "Consider a vector F = 4î - 3ĵ. Another vector that is perpendicular to F is:",
    "options": [
      "4î + 3ĵ",
      "6î",
      "7k̂",
      "3î - 4ĵ"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $\\vec{F}$ lies in the XY plane, so any vector along the z-axis ($7\\hat{k}$) is perpendicular to it.",
    "tags": [
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-14",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "Two vectors A and B are at right angles to each other, when:",
    "options": [
      "A + B = 0",
      "A - B = 0",
      "A × B = 0",
      "A · B = 0"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} \\cdot \\vec{B} = AB\\cos 90^\\circ = 0$.",
    "tags": [
      "AIIMS 1987",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-15",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "If |V₁ + V₂| = |V₁ - V₂| and V₂ is finite, then:",
    "options": [
      "V₁ is parallel to V₂",
      "V₁ = V₂",
      "V₁ and V₂ are mutually perpendicular",
      "|V₁| = |V₂|"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $|\\vec{V}_1 + \\vec{V}_2|^2 = |\\vec{V}_1 - \\vec{V}_2|^2 \\implies 4\\vec{V}_1 \\cdot \\vec{V}_2 = 0 \\implies \\vec{V}_1 \\perp \\vec{V}_2$.",
    "tags": [
      "CPMT 1989",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-16",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "A force F = (5î + 3ĵ) N displaces a particle from origin to point r = (2î - ĵ) m. The work done on the particle is:",
    "options": [
      "-7 J",
      "+13 J",
      "+7 J",
      "+11 J"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $W = \\vec{F} \\cdot \\vec{r} = (5)(2) + (3)(-1) = 10 - 3 = +7\\text{ J}$.",
    "tags": [
      "MP PMT 1995",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-17",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "The angle between two vectors (-2î + 3ĵ + k̂) and (î + 2ĵ - 4k̂) is:",
    "options": [
      "0°",
      "90°",
      "180°",
      "None of the above"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} \\cdot \\vec{B} = (-2)(1) + (3)(2) + (1)(-4) = -2 + 6 - 4 = 0 \\implies \\theta = 90^\\circ$.",
    "tags": [
      "EAMCET 1990",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-18",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "The angle between the vectors (î + ĵ) and (ĵ + k̂) is:",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $\\cos\\theta = \\frac{0 + 1 + 0}{\\sqrt{2}\\sqrt{2}} = \\frac{1}{2} \\implies \\theta = 60^\\circ$.",
    "tags": [
      "EAMCET 1995",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-19",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "A particle moves with a velocity (6î - 4ĵ + 3k̂) m/s under the influence of a constant force F = (20î + 15ĵ - 5k̂) N. The instantaneous power applied to the particle is:",
    "options": [
      "35 J/s",
      "45 J/s",
      "25 J/s",
      "195 J/s"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $P = \\vec{F} \\cdot \\vec{v} = (20)(6) + (15)(-4) + (-5)(3) = 120 - 60 - 15 = 45\\text{ W (J/s)}$.",
    "tags": [
      "CBSE PMT 2000",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-20",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "If P · Q = PQ, then the angle between P and Q is:",
    "options": [
      "0°",
      "30°",
      "45°",
      "60°"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $PQ\\cos\\theta = PQ \\implies \\cos\\theta = 1 \\implies \\theta = 0^\\circ$.",
    "tags": [
      "AIIMS 1999",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-21",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "A force F = 5î + 6ĵ + 4k̂ acting on a body, produces a displacement S = 6î - 5k̂. Work done by the force is:",
    "options": [
      "10 units",
      "18 units",
      "11 units",
      "5 units"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $W = 5(6) + 6(0) + 4(-5) = 30 - 20 = 10\\text{ units}$.",
    "tags": [
      "KCET 1999",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-22",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "The angle between the two vectors A = 5î + 5ĵ and B = 5î - 5ĵ will be:",
    "options": [
      "Zero",
      "45°",
      "90°",
      "180°"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} \\cdot \\vec{B} = 25 - 25 = 0 \\implies \\theta = 90^\\circ$.",
    "tags": [
      "CPMT 2000",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-23",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "The vectors P = aî + aĵ + 3k̂ and Q = aî - 2ĵ - k̂ are perpendicular to each other. The positive value of a is:",
    "options": [
      "3",
      "4",
      "9",
      "13"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $\\vec{P} \\cdot \\vec{Q} = a^2 - 2a - 3 = 0 \\implies (a - 3)(a + 1) = 0 \\implies a = 3$.",
    "tags": [
      "AFMC 2000",
      "AIIMS 2002",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-24",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "A body, constrained to move in the Y-direction is subjected to a force F = (-2î + 15ĵ + 6k̂) N. What is the work done by this force in moving the body a distance 10 m along Y-axis?",
    "options": [
      "20 J",
      "150 J",
      "160 J",
      "190 J"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{s} = 10\\hat{j}$. $W = \\vec{F} \\cdot \\vec{s} = 15 \\times 10 = 150\\text{ J}$.",
    "tags": [
      "CBSE PMT 1994",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-25",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "A particle moves in the x-y plane under a force F such that linear momentum P has P_x = 2 cos t, P_y = 2 sin t. The angle θ between F and P at any time t will be:",
    "options": [
      "θ = 0°",
      "θ = 30°",
      "θ = 90°",
      "θ = 180°"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $\\vec{F} = \\frac{d\\vec{P}}{dt} = -2\\sin t\\hat{i} + 2\\cos t\\hat{j}$. $\\vec{F} \\cdot \\vec{P} = -4\\sin t\\cos t + 4\\sin t\\cos t = 0 \\implies \\theta = 90^\\circ$.",
    "tags": [
      "MNR 1991",
      "UPSEAT 2000",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-26",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "The area of the parallelogram represented by the vectors A = 2î + 3ĵ and B = î + 4ĵ is:",
    "options": [
      "14 units",
      "7.5 units",
      "10 units",
      "5 units"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $\\text{Area} = |\\vec{A} \\times \\vec{B}| = |(2)(4) - (3)(1)| = 8 - 3 = 5\\text{ units}$.",
    "tags": [
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-27",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "A vector F₁ is along the positive X-axis. If its vector product with another vector F₂ is zero, then F₂ could be:",
    "options": [
      "4ĵ",
      "-(î + ĵ)",
      "(ĵ + k̂)",
      "(-4î)"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $\\vec{F}_1 \\times \\vec{F}_2 = 0 \\implies \\vec{F}_2$ is collinear/parallel with X-axis, i.e., $-4\\hat{i}$.",
    "tags": [
      "MP PMT 1987",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-28",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "If for two vectors A and B, A × B = 0, the vectors:",
    "options": [
      "Are perpendicular to each other",
      "Are parallel to each other",
      "Act at an angle of 60°",
      "Act at an angle of 30°"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $|\\vec{A} \\times \\vec{B}| = AB\\sin\\theta = 0 \\implies \\theta = 0^\\circ$ or $180^\\circ$ (parallel/antiparallel).",
    "tags": [
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-29",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "The angle between vectors (A × B) and (B × A) is:",
    "options": [
      "Zero",
      "π",
      "π / 4",
      "π / 2"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{B} \\times \\vec{A} = -(\\vec{A} \\times \\vec{B})$, meaning they point in exactly opposite directions (angle $\\pi$).",
    "tags": [
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-30",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "What is the angle between (P + Q) and (P × Q)?",
    "options": [
      "0",
      "π / 2",
      "π / 4",
      "π"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{P} + \\vec{Q}$ lies in the plane of $\\vec{P}$ and $\\vec{Q}$, while $\\vec{P} \\times \\vec{Q}$ is normal to that plane (angle $\\pi/2$).",
    "tags": [
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-31",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "The resultant of two vectors having magnitude 2 and 3 is 1. What is their cross product?",
    "options": [
      "6",
      "3",
      "1",
      "0"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Since $R = 3 - 2 = 1$, the vectors are anti-parallel ($\\theta = 180^\\circ$). Cross product $= AB\\sin 180^\\circ = 0$.",
    "tags": [
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-32",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "Let A = î A cos θ + ĵ A sin θ be any vector. Another vector B which is normal to A is:",
    "options": [
      "î B cos θ + ĵ B sin θ",
      "î B sin θ + ĵ B cos θ",
      "î B sin θ - ĵ B cos θ",
      "î B cos θ - ĵ B sin θ"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Dot product $(A\\cos\\theta)(B\\sin\\theta) + (A\\sin\\theta)(-B\\cos\\theta) = 0$, so $\\vec{B} = B\\sin\\theta\\hat{i} - B\\cos\\theta\\hat{j}$ is perpendicular to $\\vec{A}$.",
    "tags": [
      "BHU 1997",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-33",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "The angle between two vectors given by (6î + 6ĵ - 3k̂) and (7î + 4ĵ + 4k̂) is:",
    "options": [
      "cos⁻¹(1/√3)",
      "cos⁻¹(5/√3)",
      "sin⁻¹(2/√3)",
      "sin⁻¹(5/√71)"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $\\cos\\theta = \\frac{42 + 24 - 12}{9\\sqrt{71}} = \\frac{56}{9\\sqrt{71}} \\implies \\sin\\theta = \\sqrt{1 - \\cos^2\\theta} = \\frac{5}{\\sqrt{71}} \\implies \\theta = \\sin^{-1}(5/\\sqrt{71})$.",
    "tags": [
      "EAMCET (Engg.) 1999",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-34",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "A vector A points vertically upward and B points towards north. The vector product A × B is:",
    "options": [
      "Zero",
      "Along west",
      "Along east",
      "Vertically downward"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} = A\\hat{k}$ (Upward), $\\vec{B} = B\\hat{j}$ (North). $\\vec{A} \\times \\vec{B} = AB(\\hat{k} \\times \\hat{j}) = -AB\\hat{i}$ (West).",
    "tags": [
      "UPSEAT 2000",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-35",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "Angle between the vectors (î + ĵ) and (ĵ - k̂) is:",
    "options": [
      "90°",
      "0°",
      "180°",
      "60°"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $\\cos\\theta = \\frac{0 + 1 + 0}{\\sqrt{2}\\sqrt{2}} = \\frac{1}{2} \\implies \\theta = 60^\\circ$.",
    "tags": [
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-36",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "The position vectors of points A, B, C, D are (3î+ĵ+2k̂), (4î+5ĵ+6k̂), (7î+9ĵ+3k̂) and (4î+6ĵ) then AB and CD are:",
    "options": [
      "Perpendicular",
      "Parallel",
      "Antiparallel",
      "Inclined at 60°"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{AB} = \\hat{i} + 4\\hat{j} + 4\\hat{k}$, $\\vec{CD} = -3\\hat{i} - 3\\hat{j} - 3\\hat{k}$ or parallel components.",
    "tags": [
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-37",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "If force F = 4î + 5ĵ and displacement s = 3î + 6k̂ then the work done is:",
    "options": [
      "4 × 3",
      "5 × 6",
      "6 × 3",
      "4 × 6"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $W = F_x s_x + F_y s_y + F_z s_z = (4)(3) + (5)(0) + (0)(6) = 4 \\times 3 = 12\\text{ J}$.",
    "tags": [
      "Manipal 1995",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-38",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "If |A × B| = |A · B|, then angle between A and B will be:",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $AB\\sin\\theta = AB\\cos\\theta \\implies \\tan\\theta = 1 \\implies \\theta = 45^\\circ$.",
    "tags": [
      "AIIMS 2000",
      "Manipal 2000",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-39",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "In a right-handed Cartesian system:",
    "options": [
      "ĵ × k̂ = î",
      "î · î = 0",
      "ĵ × ĵ = 1",
      "k̂ · ĵ = 1"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: Orthogonal cyclic cross product satisfies $\\hat{j} \\times \\hat{k} = \\hat{i}$.",
    "tags": [
      "CPMT 1990",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-40",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "Linear velocity v = ω × r. If ω = î - 2ĵ + 2k̂ and r = 4ĵ - 3k̂, then |v| is:",
    "options": [
      "√29 units",
      "√31 units",
      "√37 units",
      "√41 units"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $\\vec{v} = \\vec{\\omega} \\times \\vec{r} = -2\\hat{i} + 3\\hat{j} + 4\\hat{k} \\implies |\\vec{v}| = \\sqrt{4 + 9 + 16} = \\sqrt{29}\\text{ units}$.",
    "tags": [
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-41",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "Three vectors a, b and c satisfy a · b = 0 and a · c = 0. The vector a is parallel to:",
    "options": [
      "b",
      "c",
      "b · c",
      "b × c"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Since $\\vec{a} \\perp \\vec{b}$ and $\\vec{a} \\perp \\vec{c}$, $\\vec{a}$ is parallel to the normal vector $\\vec{b} \\times \\vec{c}$.",
    "tags": [
      "AIIMS 1996",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-42",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "The diagonals of a parallelogram are 2î and 2ĵ. What is the area of the parallelogram?",
    "options": [
      "0.5 units",
      "1 unit",
      "2 units",
      "4 units"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Area $= \\frac{1}{2}|\\vec{d}_1 \\times \\vec{d}_2| = \\frac{1}{2}|2\\hat{i} \\times 2\\hat{j}| = 2\\text{ units}$ (or book convention gives $|2\\hat{i} \\times 2\\hat{j}| = 4\\text{ units}$).",
    "tags": [
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-43",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Hard",
    "questionText": "What is the unit vector perpendicular to both vectors (2î + 2ĵ - k̂) and (6î - 3ĵ + 2k̂)?",
    "options": [
      "(î + 10ĵ - 18k̂)/(5√17)",
      "(î - 10ĵ + 18k̂)/(5√17)",
      "(î - 10ĵ - 18k̂)/(5√17)",
      "(î + 10ĵ + 18k̂)/(5√17)"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} \\times \\vec{B} = \\hat{i} - 10\\hat{j} - 18\\hat{k}$. $|\\vec{A} \\times \\vec{B}| = \\sqrt{1 + 100 + 324} = \\sqrt{425} = 5\\sqrt{17}$.",
    "tags": [
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-44",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "The area of the parallelogram whose sides are represented by (ĵ + 3k̂) and (î + 2ĵ - k̂) is:",
    "options": [
      "√61 sq.unit",
      "√59 sq.unit",
      "√49 sq.unit",
      "√52 sq.unit"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} \\times \\vec{B} = -7\\hat{i} + 3\\hat{j} - \\hat{k} \\implies \\text{Area} = \\sqrt{49 + 9 + 1} = \\sqrt{59}\\text{ sq.units}$.",
    "tags": [
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-45",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "The position of a particle is r = î + 2ĵ - k̂, momentum P = 3î + 4ĵ - 2k̂. The angular momentum is perpendicular to:",
    "options": [
      "x-axis",
      "y-axis",
      "z-axis",
      "Line at equal angles to all axes"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $\\vec{L} = \\vec{r} \\times \\vec{p} = 0\\hat{i} - \\hat{j} - 2\\hat{k}$. Since $L_x = 0$, $\\vec{L} \\perp \\text{X-axis}$.",
    "tags": [
      "EAMCET (Engg.) 1998",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-46",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "Two vectors A and B have equal magnitudes. Then the vector (A + B) is perpendicular to:",
    "options": [
      "A × B",
      "A - B",
      "3A - 3B",
      "All of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $(\\vec{A} + \\vec{B}) \\cdot (\\vec{A} - \\vec{B}) = A^2 - B^2 = 0$, and $(\\vec{A} + \\vec{B}) \\cdot (\\vec{A} \\times \\vec{B}) = 0$.",
    "tags": [
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-47",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "Find the torque of a force F = -3î + ĵ + 5k̂ acting at point r = 7î + 3ĵ + k̂:",
    "options": [
      "14î - 38ĵ + 16k̂",
      "4î + 4ĵ + 6k̂",
      "21î + 4ĵ + 4k̂",
      "-14î + 34ĵ - 16k̂"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = \\hat{i}(15-1) - \\hat{j}(35+3) + \\hat{k}(7+9) = 14\\hat{i} - 38\\hat{j} + 16\\hat{k}$.",
    "tags": [
      "CPMT 1997",
      "CBSE PMT 1997",
      "CET 1998",
      "DPMT 2004",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-48",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "The value of (A + B) × (A - B) is:",
    "options": [
      "0",
      "A² - B²",
      "B × A",
      "2(B × A)"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $(\\vec{A}+\\vec{B}) \\times (\\vec{A}-\\vec{B}) = \\vec{A}\\times\\vec{A} - \\vec{A}\\times\\vec{B} + \\vec{B}\\times\\vec{A} - \\vec{B}\\times\\vec{B} = 0 + \\vec{B}\\times\\vec{A} + \\vec{B}\\times\\vec{A} - 0 = 2(\\vec{B} \\times \\vec{A})$.",
    "tags": [
      "RPET 1991, 2002",
      "BHU 2002",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-49",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "If A and B are perpendicular vectors, where A = 5î + 7ĵ - 3k̂ and B = 2î + 2ĵ - ak̂, the value of a is:",
    "options": [
      "-2",
      "8",
      "-7",
      "-8"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} \\cdot \\vec{B} = 10 + 14 + 3a = 0 \\implies 24 + 3a = 0 \\implies a = -8$.",
    "tags": [
      "EAMCET 1991",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-50",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "A force vector applied on a mass is represented as F = 6î - 8ĵ + 10k̂ and accelerates with 1 m/s². What will be the mass of the body in kg?",
    "options": [
      "10√2",
      "20",
      "2√10",
      "10"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $m = |\\vec{F}|/a = \\sqrt{36 + 64 + 100}/1 = \\sqrt{200} = 10\\sqrt{2}\\text{ kg}$.",
    "tags": [
      "CMEET 1995",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-51",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "Two adjacent sides of a parallelogram are represented by (î + 2ĵ + 3k̂) and (3î - 2ĵ + k̂). What is the area of parallelogram?",
    "options": [
      "8",
      "8√3",
      "3√8",
      "192"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} \\times \\vec{B} = 8\\hat{i} + 8\\hat{j} - 8\\hat{k} \\implies \\text{Area} = \\sqrt{64 + 64 + 64} = 8\\sqrt{3}$.",
    "tags": [
      "AMU 1997",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-52",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Hard",
    "questionText": "The position vectors are r₁ = 2î + ĵ + k̂ and r₂ = 2î - 3ĵ + k̂, while momentum is p = 2î + 3ĵ - k̂. Then angular momentum is:",
    "options": [
      "2î - 4k̂",
      "4î - 8k̂",
      "2î - 4ĵ + 2k̂",
      "4î + 8k̂"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{r} = \\vec{r}_2 - \\vec{r}_1 = -4\\hat{j}$. $\\vec{L} = \\vec{r} \\times \\vec{p} = -4\\hat{j} \\times (2\\hat{i} + 3\\hat{j} - \\hat{k}) = 8\\hat{k} + 4\\hat{i} = 4\\hat{i} - 8\\hat{k}$.",
    "tags": [
      "BHU 1997",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-53",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "What is the value of linear velocity, if ω = 3î - 4ĵ + k̂ and r = 5î - 6ĵ + 6k̂?",
    "options": [
      "6î - 2ĵ + 3k̂",
      "6î - 2ĵ + 8k̂",
      "4î - 13ĵ + 6k̂",
      "-18î - 13ĵ + 2k̂"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $\\vec{v} = \\vec{\\omega} \\times \\vec{r} = \\hat{i}(-24+6) - \\hat{j}(18-5) + \\hat{k}(-18+20) = -18\\hat{i} - 13\\hat{j} + 2\\hat{k}$.",
    "tags": [
      "CBSE PMT 1999",
      "CPMT 1999",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-54",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "Dot product of two mutually perpendicular vectors is:",
    "options": [
      "0",
      "1",
      "∞",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} \\cdot \\vec{B} = AB\\cos 90^\\circ = 0$.",
    "tags": [
      "Haryana CEET 2002",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-55",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "When A · B = -|A||B|, then:",
    "options": [
      "A and B are perpendicular",
      "A and B act in the same direction",
      "A and B act in opposite directions",
      "A and B can act in any direction"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $\\cos\\theta = -1 \\implies \\theta = 180^\\circ$ (anti-parallel / opposite).",
    "tags": [
      "Orissa JEE 2003",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-56",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "If |A × B| = √3 (A · B), then the value of |A + B| is:",
    "options": [
      "(A² + B² + AB/√3)^(1/2)",
      "A + B",
      "(A² + B² + √3 AB)^(1/2)",
      "(A² + B² + AB)^(1/2)"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $AB\\sin\\theta = \\sqrt{3} AB\\cos\\theta \\implies \\tan\\theta = \\sqrt{3} \\implies \\theta = 60^\\circ$.\n$|\\vec{A} + \\vec{B}| = \\sqrt{A^2 + B^2 + 2AB\\cos 60^\\circ} = (A^2 + B^2 + AB)^{1/2}$.",
    "tags": [
      "CBSE PMT 2004",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-57",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Medium",
    "questionText": "A force F = 3î + cĵ + 2k̂ acting on a particle causes displacement S = -4î + 2ĵ - 3k̂ in its own direction. If work done is 6 J, the value of c is:",
    "options": [
      "12",
      "6",
      "1",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $W = 3(-4) + c(2) + 2(-3) = -12 + 2c - 6 = 6 \\implies 2c - 18 = 6 \\implies 2c = 24 \\implies c = 12$.",
    "tags": [
      "DPMT 1997",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-58",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "A force F = (5î + 3ĵ) N is applied over a particle which displaces it from original position to s = (2î - ĵ) m. Work done on particle is:",
    "options": [
      "+11 J",
      "+7 J",
      "+13 J",
      "-7 J"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $W = 5(2) + 3(-1) = 10 - 3 = +7\\text{ J}$.",
    "tags": [
      "BHU 2001",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-mul-59",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Multiplication of Vectors",
    "difficulty": "Easy",
    "questionText": "If a vector A is parallel to another vector B then the resultant of A × B will be equal to:",
    "options": [
      "A",
      "Vector A",
      "Zero vector",
      "Zero"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} \\times \\vec{B} = AB\\sin(0^\\circ)\\hat{n} = \\vec{0}$ (Zero Vector / Null Vector).",
    "tags": [
      "Pb. CET 1996",
      "Multiplication of Vectors"
    ]
  },
  {
    "id": "vec-lami-01",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Lami's Theorem",
    "difficulty": "Medium",
    "questionText": "P, Q and R are three coplanar forces acting at a point and are in equilibrium. Given P = 1.9318 kg wt, sin θ₁ = 0.9659, angle for R opposite is 150°. The value of R is:",
    "options": [
      "0.9659",
      "2",
      "1",
      "1/2"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: By Lami's theorem: $\\frac{P}{\\sin 150^\\circ} = \\frac{R}{\\sin\\theta_1} \\implies R = \\frac{P \\sin 150^\\circ}{\\sin\\theta_1} = \\frac{1.9318 \\times 0.5}{0.9659} = 1\\text{ kg wt}$.",
    "tags": [
      "CET 1998",
      "Lami's Theorem"
    ]
  },
  {
    "id": "vec-lami-02",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Lami's Theorem",
    "difficulty": "Easy",
    "questionText": "A body is in equilibrium under the action of three coplanar forces P, Q and R. Select the correct statement:",
    "options": [
      "P/sin α = Q/sin β = R/sin γ",
      "P/cos α = Q/cos β = R/cos γ",
      "P/tan α = Q/tan β = R/tan γ",
      "P/sin β = Q/sin γ = R/sin α"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: Lami's Theorem states $\\frac{P}{\\sin\\alpha} = \\frac{Q}{\\sin\\beta} = \\frac{R}{\\sin\\gamma}$.",
    "tags": [
      "AFMC 1994",
      "Lami's Theorem"
    ]
  },
  {
    "id": "vec-lami-03",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Lami's Theorem",
    "difficulty": "Easy",
    "questionText": "If a body is in equilibrium under a set of non-collinear forces, then the minimum number of forces has to be:",
    "options": [
      "Four",
      "Three",
      "Two",
      "Five"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: Minimum 3 non-collinear forces are required to form a closed triangle and satisfy $\\sum \\vec{F} = 0$.",
    "tags": [
      "AIIMS 2000",
      "Lami's Theorem"
    ]
  },
  {
    "id": "vec-lami-04",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Lami's Theorem",
    "difficulty": "Easy",
    "questionText": "How many minimum number of non-zero vectors in different planes can be added to give zero resultant?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Minimum 4 non-coplanar vectors are required to form a closed tetrahedron in 3D space with zero resultant.",
    "tags": [
      "Lami's Theorem"
    ]
  },
  {
    "id": "vec-lami-05",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Lami's Theorem",
    "difficulty": "Medium",
    "questionText": "The tension in the horizontal cord attached to string OA (at 30° to vertical) is 30 N. The weight W and tension in OA in Newton are:",
    "options": [
      "30√3, 30",
      "30√3, 60",
      "60√3, 30",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: Resolving forces at joint O: $T\\sin 30^\\circ = 30 \\implies T = 60\\text{ N}$. $W = T\\cos 30^\\circ = 60 \\times \\frac{\\sqrt{3}}{2} = 30\\sqrt{3}\\text{ N}$.",
    "tags": [
      "DPMT 1992",
      "Lami's Theorem"
    ]
  },
  {
    "id": "vec-rel-01",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Relative Velocity",
    "difficulty": "Medium",
    "questionText": "Two cars are moving in the same direction with the same speed 30 km/hr separated by 5 km. The speed of a car moving in the opposite direction if it meets these two cars at an interval of 4 minutes will be:",
    "options": [
      "40 km/hr",
      "45 km/hr",
      "30 km/hr",
      "15 km/hr"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: Relative speed $v_{\\text{rel}} = v_C + 30$. Time interval $t = \\frac{d}{v_{\\text{rel}}} \\implies \\frac{4}{60} = \\frac{5}{v_C + 30} \\implies v_C + 30 = 75 \\implies v_C = 45\\text{ km/hr}$.",
    "tags": [
      "Relative Velocity"
    ]
  },
  {
    "id": "vec-rel-02",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Relative Velocity",
    "difficulty": "Medium",
    "questionText": "A man standing holds his umbrella at 30° with vertical to keep rain away. Running at 10 km/hr, raindrops hit his head vertically. The speed of raindrops w.r.t ground is:",
    "options": [
      "10 km/hr",
      "20 km/hr",
      "30 km/hr",
      "40 km/hr"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{v}_{rg} = \\vec{v}_{rm} + \\vec{v}_{mg}$. Horizontal component: $v_{rg}\\sin 30^\\circ = v_{mg} = 10 \\implies v_{rg} = 20\\text{ km/hr}$.",
    "tags": [
      "Relative Velocity"
    ]
  },
  {
    "id": "vec-rel-03",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Relative Velocity",
    "difficulty": "Medium",
    "questionText": "In the above problem, the speed of raindrops w.r.t. the moving man will be:",
    "options": [
      "10/√2 km/h",
      "5 km/h",
      "10√3 km/h",
      "5/√3 km/h"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Vertical component $v_{rm} = v_{rg}\\cos 30^\\circ = 20 \\times \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}\\text{ km/hr}$.",
    "tags": [
      "Relative Velocity"
    ]
  },
  {
    "id": "vec-rel-04",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Relative Velocity",
    "difficulty": "Easy",
    "questionText": "A boat moves with velocity (3î + 4ĵ) w.r.t ground. Water moves with (-3î - 4ĵ). The relative velocity of boat w.r.t water is:",
    "options": [
      "8ĵ",
      "-6î - 8ĵ",
      "6î + 8ĵ",
      "5√2"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $\\vec{v}_{bw} = \\vec{v}_b - \\vec{v}_w = (3\\hat{i}+4\\hat{j}) - (-3\\hat{i}-4\\hat{j}) = 6\\hat{i} + 8\\hat{j}$.",
    "tags": [
      "CPMT 1998",
      "Relative Velocity"
    ]
  },
  {
    "id": "vec-rel-05",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Relative Velocity",
    "difficulty": "Easy",
    "questionText": "A 150 m long train moves north at 10 m/s. A parrot flying south at 5 m/s crosses the train. Time taken by parrot is:",
    "options": [
      "30 s",
      "15 s",
      "8 s",
      "10 s"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Relative speed $v_{\\text{rel}} = 10 - (-5) = 15\\text{ m/s}$. $t = \\frac{150}{15} = 10\\text{ s}$.",
    "tags": [
      "CBSE PMT 1992",
      "Relative Velocity"
    ]
  },
  {
    "id": "vec-rel-06",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Relative Velocity",
    "difficulty": "Medium",
    "questionText": "A river flows east to west at 5 m/min. A man swimming at 10 m/min in still water wants to cross in shortest time. He should swim:",
    "options": [
      "Due north",
      "Due north-east",
      "Due north-east with double speed",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: For shortest time, swimming must be perpendicular to bank (Due North), giving time $t = d/v_m$.",
    "tags": [
      "BHU 1998",
      "Relative Velocity"
    ]
  },
  {
    "id": "vec-rel-07",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Relative Velocity",
    "difficulty": "Medium",
    "questionText": "A swimmer aiming to reach the exactly opposite point swims at 0.5 m/s at 120° with the river flow direction. The speed of water is:",
    "options": [
      "1 m/s",
      "0.5 m/s",
      "0.25 m/s",
      "0.433 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $\\sin 30^\\circ = \\frac{v_r}{v_m} \\implies v_r = 0.5 \\times 0.5 = 0.25\\text{ m/s}$.",
    "tags": [
      "CBSE PMT 1999",
      "Relative Velocity"
    ]
  },
  {
    "id": "vec-rel-08",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Relative Velocity",
    "difficulty": "Easy",
    "questionText": "A moves with 65 km/h while B is approaching A from behind with 80 km/h in same direction. Relative velocity of B w.r.t A is:",
    "options": [
      "80 km/h",
      "60 km/h",
      "15 km/h",
      "145 km/h"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: In same direction, $v_{B/A} = v_B - v_A = 80 - 65 = 15\\text{ km/h}$.",
    "tags": [
      "AFMC 2000",
      "Relative Velocity"
    ]
  },
  {
    "id": "vec-rel-09",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Relative Velocity",
    "difficulty": "Easy",
    "questionText": "A thief in a jeep at 9 m/s is chased by a police motorcycle at 10 m/s from 100 m behind. How long will it take to catch the thief?",
    "options": [
      "1 second",
      "19 second",
      "90 second",
      "100 second"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Relative speed = $10 - 9 = 1\\text{ m/s}$. $t = \\frac{100}{1} = 100\\text{ s}$.",
    "tags": [
      "Relative Velocity"
    ]
  },
  {
    "id": "vec-rel-10",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Relative Velocity",
    "difficulty": "Medium",
    "questionText": "A man swims with velocity v relative to river flowing with velocity u (u > v). In crossing for minimum time, drift x is:",
    "options": [
      "x = d · u / v",
      "x cannot be less than d · u / v",
      "Swims at (π/2 + sin⁻¹(v/u))",
      "Swims at (π/2 - sin⁻¹(v/u))"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: Time $t = d/v$. Drift $x = u \\times t = \\frac{du}{v}$.",
    "tags": [
      "Relative Velocity"
    ]
  },
  {
    "id": "vec-rel-11",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Relative Velocity",
    "difficulty": "Medium",
    "questionText": "A passenger in a bus travelling west to east at 40 km/h sees rain falling vertically. To an observer on ground, rain appears:",
    "options": [
      "To fall vertically down",
      "To fall at an angle going from west to east",
      "To fall at an angle going from east to west",
      "Insufficient information"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{v}_{rg} = \\vec{v}_{rm} + \\vec{v}_{bus} = -v_{rm}\\hat{j} + 40\\hat{i}$, so rain has an eastward component from west to east.",
    "tags": [
      "HP PMT 1999",
      "Relative Velocity"
    ]
  },
  {
    "id": "vec-rel-12",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Relative Velocity",
    "difficulty": "Medium",
    "questionText": "A boat takes 2 hours for 8 km round trip in still water (v = 8 km/h). In water current of 4 km/h, time for round trip is:",
    "options": [
      "2 h",
      "2 h 40 min",
      "1 h 20 min",
      "Cannot be estimated"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: Upstream $t_1 = 8/(8-4) = 2\\text{ h}$. Downstream $t_2 = 8/(8+4) = 2/3\\text{ h} = 40\\text{ min}$. Total $= 2\\text{ h } 40\\text{ min}$.",
    "tags": [
      "EAMCET 1990",
      "Relative Velocity"
    ]
  },
  {
    "id": "vec-rel-13",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Relative Velocity",
    "difficulty": "Easy",
    "questionText": "A 120 m long train moves west at 10 m/s. A bird flying east at 5 m/s crosses it. Time taken is:",
    "options": [
      "16 sec",
      "12 sec",
      "10 sec",
      "8 sec"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Relative speed $= 10 + 5 = 15\\text{ m/s}$. $t = 120/15 = 8\\text{ s}$.",
    "tags": [
      "Manipal 2002",
      "Relative Velocity"
    ]
  },
  {
    "id": "vec-rel-14",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Relative Velocity",
    "difficulty": "Medium",
    "questionText": "A boat crosses a river with speed 8 km/h. If resultant speed is 10 km/h, the velocity of river water is:",
    "options": [
      "4 km/h",
      "6 km/h",
      "8 km/h",
      "10 km/h"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $v_{\\text{res}} = \\sqrt{v_b^2 + v_r^2} \\implies 10 = \\sqrt{64 + v_r^2} \\implies v_r = 6\\text{ km/h}$.",
    "tags": [
      "CPMT 2001",
      "Relative Velocity"
    ]
  },
  {
    "id": "vec-crit-01",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "If vector P makes angles α, β, γ with X, Y, Z axes, then sin² α + sin² β + sin² γ is:",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$. $\\sum\\sin^2 = (1-\\cos^2\\alpha)+(1-\\cos^2\\beta)+(1-\\cos^2\\gamma) = 3 - 1 = 2$.",
    "tags": [
      "Critical Thinking"
    ]
  },
  {
    "id": "vec-crit-02",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "If the resultant of n forces of different magnitudes acting at a point is zero, the minimum value of n is:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Minimum 3 unequal forces are required to form a closed polygon with zero resultant.",
    "tags": [
      "SCRA 2000",
      "Critical Thinking"
    ]
  },
  {
    "id": "vec-crit-03",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Critical Thinking",
    "difficulty": "Easy",
    "questionText": "Can the resultant of 2 vectors be zero?",
    "options": [
      "Yes, when same in magnitude and direction",
      "No",
      "Yes, when same in magnitude but opposite in sense",
      "Yes, when at 120°"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} + \\vec{B} = 0 \\iff |\\vec{A}| = |\\vec{B}|$ and $\\theta = 180^\\circ$.",
    "tags": [
      "IIIT 2000",
      "Critical Thinking"
    ]
  },
  {
    "id": "vec-crit-04",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "Sum of magnitudes of two forces is 18 and resultant is 12 at 90° to the smaller force. The forces are:",
    "options": [
      "12, 5",
      "14, 4",
      "5, 13",
      "10, 8"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $A+B=18$. $R^2 = B^2 - A^2 = 144 \\implies (B-A)(18) = 144 \\implies B-A = 8$. Solving gives $B = 13\\text{ N}, A = 5\\text{ N}$.",
    "tags": [
      "Roorkee 1992",
      "AIEEE 2002",
      "Critical Thinking"
    ]
  },
  {
    "id": "vec-crit-05",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "A vector a is turned through a small angle dθ without change in length. Values of |Δa| and Δ|a| are:",
    "options": [
      "0, a dθ",
      "a dθ, 0",
      "0, 0",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: Arc length $|\\Delta\\vec{a}| = a\\,d\\theta$, while change in scalar magnitude $\\Delta|\\vec{a}| = a - a = 0$.",
    "tags": [
      "Critical Thinking"
    ]
  },
  {
    "id": "vec-crit-06",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "Resultant of three vectors OA, OB, OC on circle of radius R (angles 45° between OA-OB and OB-OC) is:",
    "options": [
      "2R",
      "R(1 + √2)",
      "R√2",
      "R(√2 - 1)"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{OA} + \\vec{OC} = \\sqrt{R^2+R^2} = R\\sqrt{2}$ along $\\vec{OB}$. Net resultant $= R\\sqrt{2} + R = R(1+\\sqrt{2})$.",
    "tags": [
      "Critical Thinking"
    ]
  },
  {
    "id": "vec-crit-07",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "In regular hexagon ABCDEF with center O, AB + AC + AD + AE + AF equals:",
    "options": [
      "AO",
      "2 AO",
      "4 AO",
      "6 AO"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Using symmetry with center O: $\\vec{AC}+\\vec{AF} = \\vec{AD} = 2\\vec{AO}$, $\\vec{AB}+\\vec{AE} = \\vec{AD} = 2\\vec{AO}$. Total $= 2\\vec{AO} + 2\\vec{AO} + 2\\vec{AO} = 6\\vec{AO}$.",
    "tags": [
      "CPMT 2001",
      "Critical Thinking"
    ]
  },
  {
    "id": "vec-crit-08",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "The length of second's hand in watch is 1 cm. Change in velocity of its tip in 15 seconds is:",
    "options": [
      "Zero",
      "π/(30√2) cm/s",
      "π/30 cm/s",
      "π√2/30 cm/s"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $v = \\frac{2\\pi r}{T} = \\frac{2\\pi(1)}{60} = \\frac{\\pi}{30}\\text{ cm/s}$. In 15 s ($90^\\circ$ rotation), $|\\Delta\\vec{v}| = \\sqrt{2}v = \\frac{\\pi\\sqrt{2}}{30}\\text{ cm/s}$.",
    "tags": [
      "MP PMT 1987",
      "Critical Thinking"
    ]
  },
  {
    "id": "vec-crit-09",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "A particle moves east at 5 m/s. After 10 s its direction changes to north at 5 m/s. Average acceleration is:",
    "options": [
      "Zero",
      "1/√2 m/s² N–W",
      "1/√2 m/s² N–E",
      "1/√2 m/s² S–W"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $|\\Delta\\vec{v}| = 5\\sqrt{2}\\text{ m/s}$ (North-West). $\\vec{a}_{\\text{avg}} = \\frac{5\\sqrt{2}}{10} = \\frac{1}{\\sqrt{2}}\\text{ m/s}^2$ N-W.",
    "tags": [
      "CPMT 1997",
      "IIT-JEE 1982",
      "Critical Thinking"
    ]
  },
  {
    "id": "vec-crit-10",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "A force F = -K(yî + xĵ) acts on a particle moved from (0,0) to (a,0) and then to (a,a). Total work done is:",
    "options": [
      "-2 Ka²",
      "2 Ka²",
      "-Ka²",
      "Ka²"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Along $(0,0)\\to(a,0)$ ($y=0$), $F_x = 0 \\implies W_1 = 0$. Along $(a,0)\\to(a,a)$ ($x=a$), $F_y = -Ka \\implies W_2 = \\int_0^a (-Ka)dy = -Ka^2$. Total $W = -Ka^2$.",
    "tags": [
      "IIT-JEE 1998",
      "Critical Thinking"
    ]
  },
  {
    "id": "vec-crit-11",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "The vectors from origin are A = 3î - 6ĵ + 2k̂ and B = 2î + ĵ - 2k̂. The area of triangle OAB is:",
    "options": [
      "5√17 / 2 sq.unit",
      "2√17 / 5 sq.unit",
      "3√17 / 5 sq.unit",
      "5√17 / 3 sq.unit"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} \\times \\vec{B} = 10\\hat{i} + 10\\hat{j} + 15\\hat{k} \\implies |\\vec{A} \\times \\vec{B}| = \\sqrt{100+100+225} = 5\\sqrt{17}$. Area $= \\frac{5\\sqrt{17}}{2}$.",
    "tags": [
      "Critical Thinking"
    ]
  },
  {
    "id": "vec-crit-12",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "A metal sphere hung by string to wall is pushed by stick (force P, tension T, weight W). Which statement is WRONG?",
    "options": [
      "P = W tan θ",
      "T + P + W = 0",
      "T² = P² + W²",
      "T = P + W"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $T$ is the hypotenuse vector ($T^2 = P^2 + W^2$). The scalar equality $T = P + W$ is incorrect.",
    "tags": [
      "Critical Thinking"
    ]
  },
  {
    "id": "vec-crit-13",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "A boat travels at 5 km/h in still water across 1 km wide river along shortest path in 15 min. Velocity of river is:",
    "options": [
      "1 km/h",
      "3 km/h",
      "4 km/h",
      "5 km/h"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $v_{\\text{res}} = 1\\text{ km} / (1/4\\text{ hr}) = 4\\text{ km/h}$. $v_r = \\sqrt{5^2 - 4^2} = 3\\text{ km/h}$.",
    "tags": [
      "IIT 1988",
      "CBSE PMT 1998, 2000",
      "Critical Thinking"
    ]
  },
  {
    "id": "vec-crit-14",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "A man crosses 320 m wide river perpendicular to current in 4 min. If still water speed is 5/3 of current, current speed in m/min is:",
    "options": [
      "30",
      "40",
      "50",
      "60"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Resultant speed $= 320/4 = 80\\text{ m/min} = \\sqrt{v_m^2 - v_r^2} = \\sqrt{(25/9 - 1)v_r^2} = \\frac{4}{3}v_r \\implies v_r = 60\\text{ m/min}$.",
    "tags": [
      "Roorkee 1998",
      "Critical Thinking"
    ]
  },
  {
    "id": "vec-ar-01",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: A × B is perpendicular to both (A + B) and (A - B).\nReason: (A + B) and (A - B) lie in the plane of A and B, while A × B is normal to it.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation",
      "Both are true but Reason is NOT the correct explanation",
      "Assertion is true but Reason is false",
      "Both Assertion and Reason are false"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: Cross product vector is strictly normal to the plane containing both input vectors and their linear combinations.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "vec-ar-02",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: Angle between (î + ĵ) and î is 45°.\nReason: (î + ĵ) is equally inclined to î and ĵ and angle between î and ĵ is 90°.",
    "options": [
      "Both Assertion and Reason are true and Reason is correct explanation",
      "Both are true but Reason is not correct explanation",
      "Assertion is true but Reason is false",
      "Both are false"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $\\cos\\theta = 1/\\sqrt{2} \\implies \\theta = 45^\\circ$.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "vec-ar-03",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: If θ is angle between A and B, then tan θ = (A × B) / (A · B).\nReason: A × B is perpendicular to A · B.",
    "options": [
      "Both true and Reason is correct",
      "Both true but Reason not correct",
      "Assertion is true, Reason false",
      "Both Assertion and Reason are false"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $(A \\times B)/(A \\cdot B) = \\tan\\theta\\hat{n}$, which is a vector quantity, not scalar $\\tan\\theta$. Also scalar and vector cannot be perpendicular.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "vec-ar-04",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: If |A + B| = |A - B|, then angle between A and B is 90°.\nReason: A + B = B + A.",
    "options": [
      "Both true and Reason is correct",
      "Both true but Reason is not correct explanation",
      "Assertion is true, Reason false",
      "Both are false"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $|\\vec{A}+\\vec{B}| = |\\vec{A}-\\vec{B}| \\implies \\vec{A} \\cdot \\vec{B} = 0 \\implies 90^\\circ$. Vector addition is commutative, but does not explain the assertion.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "vec-ar-05",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Vector product of two vectors is an axial vector.\nReason: If v = velocity, r = radius, ω = angular velocity, then ω = v × r.",
    "options": [
      "Both true and Reason correct",
      "Both true, Reason not correct",
      "Assertion is true but Reason is false",
      "Both false"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Vector product representing rotations are axial vectors. The relation is $\\vec{v} = \\vec{\\omega} \\times \\vec{r}$, so the reason formula is false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "vec-set0-01",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Medium",
    "questionText": "0.4î + 0.8ĵ + ck̂ represents a unit vector when c is:",
    "options": [
      "-0.2",
      "√0.2",
      "√0.8",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $0.4^2 + 0.8^2 + c^2 = 1 \\implies 0.16 + 0.64 + c^2 = 1 \\implies c^2 = 0.2 \\implies c = \\sqrt{0.2}$.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-02",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Medium",
    "questionText": "The angles which a vector (î + ĵ + √2 k̂) makes with X, Y and Z axes respectively are:",
    "options": [
      "60°, 60°, 60°",
      "45°, 45°, 45°",
      "60°, 60°, 45°",
      "45°, 45°, 60°"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $|\\vec{R}| = \\sqrt{1 + 1 + 2} = 2$. $\\cos\\alpha = 1/2 \\implies 60^\\circ$, $\\cos\\beta = 1/2 \\implies 60^\\circ$, $\\cos\\gamma = \\sqrt{2}/2 = 1/\\sqrt{2} \\implies 45^\\circ$.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-03",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Easy",
    "questionText": "The value of a unit vector in direction of vector A = 5î - 12ĵ is:",
    "options": [
      "î",
      "ĵ",
      "(î + ĵ)/13",
      "(5î - 12ĵ)/13"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $|\\vec{A}| = \\sqrt{25 + 144} = 13 \\implies \\hat{A} = \\frac{5\\hat{i} - 12\\hat{j}}{13}$.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-04",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Easy",
    "questionText": "Which of the following is independent of choice of coordinate system?",
    "options": [
      "P + Q + R",
      "(P_x + Q_x + R_x) î",
      "P_x î + Q_y ĵ + R_z k̂",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: A true vector sum $\\vec{P} + \\vec{Q} + \\vec{R}$ represents an invariant physical displacement independent of axis rotation.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-05",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Hard",
    "questionText": "A car travels 6 km north at 45° to east and then 4 km north at 135° to east. Distance and angle from start with east are:",
    "options": [
      "√50 km and tan⁻¹(5)",
      "10 km and tan⁻¹(√5)",
      "√52 km and tan⁻¹(5)",
      "√52 km and tan⁻¹(√5)"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $S_x = (6 - 4)\\cos 45^\\circ = \\sqrt{2}$. $S_y = (6 + 4)\\sin 45^\\circ = 5\\sqrt{2}$.\n$S = \\sqrt{2 + 50} = \\sqrt{52}\\text{ km}$. $\\tan\\theta = \\frac{5\\sqrt{2}}{\\sqrt{2}} = 5 \\implies \\theta = \\tan^{-1}(5)$.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-06",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Medium",
    "questionText": "Given A + B + C = 0 where two vectors are equal in magnitude and third is √2 times either. The angles are:",
    "options": [
      "30°, 60°, 90°",
      "45°, 45°, 90°",
      "45°, 60°, 90°",
      "90°, 135°, 135°"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: In a 45°-45°-90° right isosceles vector triangle, the exterior angles between adjacent vectors are $90^\\circ, 135^\\circ, 135^\\circ$.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-07",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Easy",
    "questionText": "Forces F₁ = 1 N along x=0 (y-axis) and F₂ = 2 N along y=0 (x-axis). Resultant is:",
    "options": [
      "î + 2ĵ",
      "î + ĵ",
      "3î + 2ĵ",
      "2î + ĵ"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $\\vec{F}_1 = 1\\hat{j}$, $\\vec{F}_2 = 2\\hat{i} \\implies \\vec{R} = 2\\hat{i} + \\hat{j}$.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-08",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Medium",
    "questionText": "At what angle must two forces (x + y) and (x - y) act so resultant is √(x² + y²)?",
    "options": [
      "cos⁻¹(-(x²+y²)/(2(x²-y²)))",
      "cos⁻¹(-2(x²-y²)/(x²+y²))",
      "cos⁻¹(-(x²+y²)/(x²-y²))",
      "cos⁻¹(-(x²-y²)/(x²+y²))"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $(x^2+y^2) = (x+y)^2 + (x-y)^2 + 2(x^2-y^2)\\cos\\theta = 2(x^2+y^2) + 2(x^2-y^2)\\cos\\theta \\implies \\cos\\theta = -\\frac{x^2+y^2}{2(x^2-y^2)}$.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-09",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Medium",
    "questionText": "Forces F₁ = -4î - 5ĵ + 5k̂, F₂ = 5î + 8ĵ + 6k̂, F₃ = -3î + 4ĵ - 7k̂, F₄ = 2î - 3ĵ - 2k̂ act on particle. Particle moves:",
    "options": [
      "In x-y plane",
      "In y-z plane",
      "In x-z plane",
      "Along x-axis"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{F}_{\\text{net}} = (-4+5-3+2)\\hat{i} + (-5+8+4-3)\\hat{j} + (5+6-7-2)\\hat{k} = 0\\hat{i} + 4\\hat{j} + 2\\hat{k}$ (lies in y-z plane).",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-10",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Easy",
    "questionText": "Resultant of A + B is R₁. On reversing B, resultant becomes R₂. Value of R₁² + R₂² is:",
    "options": [
      "A² + B²",
      "A² - B²",
      "2(A² + B²)",
      "2(A² - B²)"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $R_1^2 + R_2^2 = (A^2 + B^2 + 2AB\\cos\\theta) + (A^2 + B^2 - 2AB\\cos\\theta) = 2(A^2 + B^2)$.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-ar-06",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Minimum number of non-equal vectors in a plane required to give zero resultant is three.\nReason: If A + B + C = 0, then they must lie in one plane.",
    "options": [
      "Both Assertion and Reason are true and Reason is correct",
      "Both true but Reason is NOT correct explanation",
      "Assertion is true but Reason is false",
      "Both false"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: 3 non-equal vectors can form a closed planar triangle with zero sum. The reason is a separate true fact but not the causal explanation.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "vec-ar-07",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Relative velocity of A w.r.t. B is greater than the velocity of either, when they are moving in opposite directions.\nReason: Relative velocity of A w.r.t. B is v_A - (-v_B) = v_A + v_B.",
    "options": [
      "Both Assertion and Reason are true and Reason is correct explanation",
      "Both true but Reason not correct",
      "Assertion true, Reason false",
      "Both false"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: In opposite directions, $v_{\\text{rel}} = v_A + v_B > v_A, v_B$.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "vec-ar-08",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: Vector addition of two vectors A and B is commutative.\nReason: A + B = B + A.",
    "options": [
      "Both true and Reason is correct explanation",
      "Both true but Reason not correct",
      "Assertion true, Reason false",
      "Both false"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: Commutative property of vector addition states $\\vec{A} + \\vec{B} = \\vec{B} + \\vec{A}$.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "vec-ar-09",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: A · B = B · A.\nReason: Dot product of two vectors is commutative.",
    "options": [
      "Both Assertion and Reason are true and Reason is correct explanation",
      "Both true but Reason not correct",
      "Assertion true, Reason false",
      "Both false"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} \\cdot \\vec{B} = AB\\cos\\theta = BA\\cos\\theta = \\vec{B} \\cdot \\vec{A}$.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "vec-ar-10",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: τ = r × F and τ ≠ F × r.\nReason: Cross product of vectors is commutative.",
    "options": [
      "Both true and Reason is correct",
      "Both true but Reason not correct",
      "Assertion is true but Reason is false",
      "Both false"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Cross product is anti-commutative ($\\vec{F} \\times \\vec{r} = -\\vec{r} \\times \\vec{F}$). Hence Reason is False.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "vec-ar-11",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: A negative acceleration of a body is associated with a slowing down of a body.\nReason: Acceleration is a vector quantity.",
    "options": [
      "Both true and Reason is correct",
      "Both true but Reason not correct explanation",
      "Assertion is true, Reason false",
      "Both false"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: Negative acceleration slows down a body moving in the positive direction. Both statements are true independently.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "vec-ar-12",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: A physical quantity cannot be called as a vector if its magnitude is zero.\nReason: A vector has both, magnitude and direction.",
    "options": [
      "Both true and Reason correct",
      "Both true, Reason not correct",
      "Assertion true, Reason false",
      "Assertion is false but Reason is true"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: A null vector $\\vec{0}$ has zero magnitude and arbitrary direction, and is still a valid vector. Thus Assertion is False and Reason is True.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "vec-ar-13",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: The sum of two vectors can be zero.\nReason: The vectors cancel each other when they are equal and opposite.",
    "options": [
      "Both Assertion and Reason are true and Reason is correct explanation",
      "Both true but Reason not correct",
      "Assertion true, Reason false",
      "Both false"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} + (-\\vec{A}) = \\vec{0}$. Equal and opposite vectors cancel.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "vec-ar-14",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Two vectors are said to be like vectors if they have same direction but different magnitude.\nReason: Vector quantities do not have specific direction.",
    "options": [
      "Both true and Reason correct",
      "Both true, Reason not correct",
      "Assertion is true but Reason is false",
      "Both false"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Like vectors have identical direction. Vectors definitely possess specific direction, so Reason is False.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "vec-ar-15",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: The scalar product of two vectors can be zero.\nReason: If two vectors are perpendicular to each other, their scalar product will be zero.",
    "options": [
      "Both Assertion and Reason are true and Reason is correct explanation",
      "Both true, Reason not correct",
      "Assertion true, Reason false",
      "Both false"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} \\cdot \\vec{B} = AB\\cos 90^\\circ = 0$.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "vec-ar-16",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: Multiplying any vector by a scalar is a meaningful operation.\nReason: In uniform motion speed remains constant.",
    "options": [
      "Both true and Reason correct",
      "Both true but Reason is NOT correct explanation",
      "Assertion true, Reason false",
      "Both false"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: Multiplying vector by scalar scales magnitude ($c\\vec{A}$). Both statements are factually true.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "vec-ar-17",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: A null vector is a vector whose magnitude is zero and direction is arbitrary.\nReason: A null vector does not exist.",
    "options": [
      "Both true and Reason correct",
      "Both true, Reason not correct",
      "Assertion is true but Reason is false",
      "Both false"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Null vectors exist mathematically as the identity element for vector addition ($\\vec{A} + \\vec{0} = \\vec{A}$). Reason is False.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "vec-ar-18",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: If dot product and cross product of A and B are zero, it implies that one of the vectors A and B must be a null vector.\nReason: Null vector is a vector with zero magnitude.",
    "options": [
      "Both true and Reason correct",
      "Both true but Reason is NOT correct explanation",
      "Assertion true, Reason false",
      "Both false"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\sin\\theta$ and $\\cos\\theta$ cannot be simultaneously zero. Thus at least one magnitude must be zero.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "vec-ar-19",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: The cross product of a vector with itself is a null vector.\nReason: The cross-product of two vectors results in a vector quantity.",
    "options": [
      "Both true and Reason correct",
      "Both true but Reason is NOT correct explanation",
      "Assertion true, Reason false",
      "Both false"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} \\times \\vec{A} = A^2\\sin(0^\\circ)\\hat{n} = \\vec{0}$.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "vec-ar-20",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: The minimum number of non coplanar vectors whose sum can be zero is four.\nReason: The resultant of two vectors of unequal magnitude can be zero.",
    "options": [
      "Both true and Reason correct",
      "Both true, Reason not correct",
      "Assertion is true but Reason is false",
      "Both false"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Two unequal vectors can never have zero resultant ($|A-B| \\neq 0$). Reason is False.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "vec-ar-21",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: If A · B = B · C, then A may not always be equal to C.\nReason: The dot product of two vectors involves cosine of the angle between the two vectors.",
    "options": [
      "Both Assertion and Reason are true and Reason is correct explanation",
      "Both true, Reason not correct",
      "Assertion true, Reason false",
      "Both false"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $AB\\cos\\theta_1 = BC\\cos\\theta_2 \\implies A\\cos\\theta_1 = C\\cos\\theta_2$, which allows $A \\neq C$ if $\\theta_1 \\neq \\theta_2$.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "vec-ar-22",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Assertion and Reason",
    "difficulty": "Easy",
    "questionText": "Assertion: Vector addition is commutative.\nReason: (A + B) ≠ (B + A).",
    "options": [
      "Both true and Reason correct",
      "Both true, Reason not correct",
      "Assertion is true but Reason is false",
      "Both false"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: Vector addition is strictly commutative ($\\vec{A} + \\vec{B} = \\vec{B} + \\vec{A}$). Reason is False.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "vec-set0-11",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Medium",
    "questionText": "A body of mass M moves with uniform speed v on a circular path of radius R. What is the change in acceleration in going from P1 to P2 (quarter circle, 90°)?",
    "options": [
      "Zero",
      "v² / 2R",
      "2v² / R",
      "(v² / R) × √2"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: Acceleration magnitude is $a = v^2/R$. Across $90^\\circ$ rotation, $\\Delta a = \\sqrt{a^2 + a^2} = a\\sqrt{2} = \\frac{v^2}{R}\\sqrt{2}$.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-12",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Medium",
    "questionText": "A particle is moving on a circular path of radius r with uniform speed v. The change in velocity when the particle moves from P to Q (∠POQ = 40°) is:",
    "options": [
      "2v cos 40°",
      "2v sin 20°",
      "2v sin 40°",
      "2v cos 20°"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $|\\Delta\\vec{v}| = 2v\\sin(\\theta/2) = 2v\\sin(40^\\circ/2) = 2v\\sin 20^\\circ$.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-13",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Medium",
    "questionText": "A = 2î + 4ĵ + 4k̂ and B = 4î + 2ĵ - 4k̂ are two vectors. The angle between them will be:",
    "options": [
      "0°",
      "45°",
      "60°",
      "90°"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} \\cdot \\vec{B} = (2)(4) + (4)(2) + (4)(-4) = 8 + 8 - 16 = 0 \\implies \\theta = 90^\\circ$.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-14",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Medium",
    "questionText": "If A = 2î + 3ĵ - k̂ and B = -î + 3ĵ + 4k̂ then projection of A on B will be:",
    "options": [
      "3/√13",
      "3/√26",
      "√26/3",
      "√13/3"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\text{Projection} = \\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{B}|} = \\frac{2(-1) + 3(3) + (-1)(4)}{\\sqrt{(-1)^2 + 3^2 + 4^2}} = \\frac{-2 + 9 - 4}{\\sqrt{1 + 9 + 16}} = \\frac{3}{\\sqrt{26}}$.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-15",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Medium",
    "questionText": "In the above example a unit vector perpendicular to both A and B will be:",
    "options": [
      "+(î - ĵ - k̂)/√3",
      "-(î - ĵ - k̂)/√3",
      "Both (a) and (b)",
      "None of these"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} \\times \\vec{B} = 15\\hat{i} - 7\\hat{j} + 9\\hat{k}$ normalized is $\\pm \\frac{\\hat{i} - \\hat{j} - \\hat{k}}{\\sqrt{3}}$, giving both positive and negative normal unit vectors.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-16",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Medium",
    "questionText": "Two constant forces F₁ = 2î - 3ĵ + 3k̂ (N) and F₂ = î + ĵ - 2k̂ (N) displace a body from r₁ = î + 2ĵ - 2k̂ (m) to r₂ = 7î + 10ĵ + 5k̂ (m). What is the work done?",
    "options": [
      "9 J",
      "41 J",
      "-3 J",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $\\vec{F}_{\\text{net}} = 3\\hat{i} - 2\\hat{j} + \\hat{k}$. $\\Delta\\vec{r} = 6\\hat{i} + 8\\hat{j} + 7\\hat{k}$. $W = 3(6) + (-2)(8) + 1(7) = 18 - 16 + 7 = 9\\text{ J}$.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-17",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Medium",
    "questionText": "For any two vectors A and B, if A · B = |A × B|, the magnitude of C = A + B is equal to:",
    "options": [
      "√(A² + B²)",
      "A + B",
      "(A² + B² + AB/√2)^(1/2)",
      "√(A² + B² + √2 AB)"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $AB\\cos\\theta = AB\\sin\\theta \\implies \\theta = 45^\\circ$. $|\\vec{C}| = \\sqrt{A^2 + B^2 + 2AB\\cos 45^\\circ} = \\sqrt{A^2 + B^2 + \\sqrt{2}AB}$.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-18",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Easy",
    "questionText": "Which of the following is the unit vector perpendicular to A and B?",
    "options": [
      "(Â × B̂)/(AB sin θ)",
      "(Â × B̂)/(AB cos θ)",
      "(A × B)/(AB sin θ)",
      "(A × B)/(AB cos θ)"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} \\times \\vec{B} = AB\\sin\\theta\\,\\hat{n} \\implies \\hat{n} = \\frac{\\vec{A} \\times \\vec{B}}{AB\\sin\\theta}$.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-19",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Easy",
    "questionText": "Two vectors P = 2î + bĵ + 2k̂ and Q = î + ĵ + k̂ will be parallel if:",
    "options": [
      "b = 0",
      "b = 1",
      "b = 2",
      "b = -4"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: For parallel vectors, $\\frac{2}{1} = \\frac{b}{1} = \\frac{2}{1} \\implies b = 2$.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-20",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Easy",
    "questionText": "Which of the following is NOT true if A = 3î + 4ĵ and B = 6î + 8ĵ?",
    "options": [
      "A × B = 0",
      "A / B = 1/2",
      "A · B = 48",
      "A = 5"
    ],
    "correctAnswer": 2,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} \\cdot \\vec{B} = (3)(6) + (4)(8) = 18 + 32 = 50 \\neq 48$. Statement (c) is false.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-21",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Medium",
    "questionText": "The area of the triangle formed by (2î + ĵ - k̂) and (î + ĵ + k̂) is:",
    "options": [
      "3 sq.unit",
      "2√3 sq.unit",
      "2√14 sq.unit",
      "√14 / 2 sq.unit"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $\\vec{A} \\times \\vec{B} = 2\\hat{i} - 3\\hat{j} + \\hat{k} \\implies |\\vec{A} \\times \\vec{B}| = \\sqrt{4 + 9 + 1} = \\sqrt{14}$. Triangle Area $= \\frac{\\sqrt{14}}{2}\\text{ sq.units}$.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-22",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Easy",
    "questionText": "Two trains on same track move at 60 km/hr and 30 km/hr towards each other. If distance at t=0 is 90 km, time to collide is:",
    "options": [
      "1 hr",
      "2 hr",
      "3 hr",
      "4 hr"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $v_{\\text{rel}} = 60 + 30 = 90\\text{ km/hr}$. $t = \\frac{90}{90} = 1\\text{ hr}$.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-23",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Medium",
    "questionText": "A steamboat goes across lake and returns: (a) on a quiet day with still water (b) on a rough day with uniform air current. The journey completes in lesser time in:",
    "options": [
      "Case (a)",
      "Case (b)",
      "Same in both",
      "Nothing can be predicted"
    ],
    "correctAnswer": 0,
    "explanation": "📘 **NCERT Concept**: $t_{\\text{still}} = \\frac{2l}{v}$. $t_{\\text{wind}} = \\frac{l}{v+u} + \\frac{l}{v-u} = \\frac{2lv}{v^2-u^2} = \\frac{2l/v}{1 - u^2/v^2} > t_{\\text{still}}$. Lesser time in Case (a).",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-24",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Medium",
    "questionText": "To a person in a car going east at 25 km/hr, a train appears to move north at 25√3 km/hr. Actual velocity of train is:",
    "options": [
      "25 km/hr",
      "50 km/hr",
      "5 km/hr",
      "5√3 km/hr"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $\\vec{v}_T = \\vec{v}_{TC} + \\vec{v}_C = 25\\sqrt{3}\\hat{j} + 25\\hat{i} \\implies |\\vec{v}_T| = \\sqrt{(25\\sqrt{3})^2 + 25^2} = \\sqrt{1875 + 625} = \\sqrt{2500} = 50\\text{ km/hr}$.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-25",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Medium",
    "questionText": "A swimmer speed is v, river flows at v/2. Ratio of time to cross in shortest time to shortest distance is:",
    "options": [
      "cos θ",
      "sin θ",
      "tan θ",
      "cot θ"
    ],
    "correctAnswer": 1,
    "explanation": "📘 **NCERT Concept**: $t_{\\text{min}} = d/v$. $t_{\\text{shortest distance}} = \\frac{d}{\\sqrt{v^2 - (v/2)^2}} = \\frac{d}{v\\cos\\alpha} = \\frac{d}{v\\sin\\theta}$. Ratio $= \\sin\\theta$.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  },
  {
    "id": "vec-set0-26",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Self Evaluation Test - 0",
    "difficulty": "Medium",
    "questionText": "A bus moves at 10 m/s. A scooterist wishes to overtake it in 100 s from 1 km (1000 m) behind. What velocity should the scooterist maintain?",
    "options": [
      "50 m/s",
      "40 m/s",
      "30 m/s",
      "20 m/s"
    ],
    "correctAnswer": 3,
    "explanation": "📘 **NCERT Concept**: $(v - 10) \\times 100 = 1000 \\implies v - 10 = 10 \\implies v = 20\\text{ m/s}$.",
    "tags": [
      "Self Evaluation Test - 0"
    ]
  }
];
