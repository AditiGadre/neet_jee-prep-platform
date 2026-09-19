import { Question } from '../types';

export const PHYSICS_SMART_BOOKLET_VECTORS_TOPIC_PART1_QUESTIONS: Question[] = [
  {
    "id": "smart-vec-topic-01",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Perpendicular Vectors",
    "difficulty": "Easy",
    "questionText": "The sum and difference of two perpendicular vectors of equal length are:",
    "options": [
      "Perpendicular to each other and of equal length",
      "Perpendicular to each other and of different lengths",
      "Of equal length and have an obtuse angle between them",
      "Of equal length and have an acute angle between them"
    ],
    "correctAnswer": 0,
    "explanation": "Let $|\\vec{A}| = |\\vec{B}| = A$ and $\\vec{A} \\perp \\vec{B}$.\nSum: $\\vec{R} = \\vec{A} + \\vec{B} \\implies |\\vec{R}| = \\sqrt{A^2 + B^2} = \\sqrt{2}A$.\nDifference: $\\vec{S} = \\vec{A} - \\vec{B} \\implies |\\vec{S}| = \\sqrt{A^2 + B^2} = \\sqrt{2}A$.\nDot product: $\\vec{R} \\cdot \\vec{S} = (\\vec{A} + \\vec{B}) \\cdot (\\vec{A} - \\vec{B}) = A^2 - B^2 = 0$.\nTherefore, the sum and difference vectors are perpendicular to each other and of equal length.",
    "tags": [
      "Vectors",
      "Vector Addition",
      "Vector Subtraction",
      "Perpendicular Vectors"
    ]
  },
  {
    "id": "smart-vec-topic-02",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Non-Coplanar Vectors",
    "difficulty": "Easy",
    "questionText": "The minimum number of vectors having different planes which can be added to give zero resultant is:",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "explanation": "\u2022 Two collinear vectors of equal magnitude and opposite direction give zero resultant (1-D).\n\u2022 Three coplanar vectors forming a closed triangle can give zero resultant (2-D).\n\u2022 For vectors lying in different planes (non-coplanar vectors in 3-D), the minimum number of vectors required to form a closed polygon and produce a zero resultant is 4.",
    "tags": [
      "Vectors",
      "Non-Coplanar Vectors",
      "Resultant Zero"
    ]
  },
  {
    "id": "smart-vec-topic-03",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Dot Product & Orthogonality",
    "subtopic": "Orthogonal Vectors",
    "difficulty": "Easy",
    "questionText": "A vector perpendicular to $\\hat{i} + \\hat{j} + \\hat{k}$ is:",
    "options": [
      "\\hat{i} - \\hat{j} + \\hat{k}",
      "\\hat{i} - \\hat{j} - \\hat{k}",
      "-\\hat{i} - \\hat{j} - \\hat{k}",
      "3\\hat{i} + 2\\hat{j} - 5\\hat{k}"
    ],
    "correctAnswer": 3,
    "explanation": "Two vectors $\\vec{A}$ and $\\vec{B}$ are perpendicular if their scalar (dot) product is zero:\n$(3\\hat{i} + 2\\hat{j} - 5\\hat{k}) \\cdot (\\hat{i} + \\hat{j} + \\hat{k}) = 3(1) + 2(1) + (-5)(1) = 3 + 2 - 5 = 0$.\nHence, $3\\hat{i} + 2\\hat{j} - 5\\hat{k}$ is perpendicular to $\\hat{i} + \\hat{j} + \\hat{k}$.",
    "tags": [
      "Vectors",
      "Dot Product",
      "Perpendicular Vectors"
    ]
  },
  {
    "id": "smart-vec-topic-04",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Polygon Law",
    "difficulty": "Medium",
    "questionText": "From the given figure of vectors, the correct relation is:",
    "diagramSvg": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"ah\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#2563eb\"/></marker><marker id=\"ah-red\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#dc2626\"/></marker></defs><polygon points=\"50,110 170,40 270,110 170,180\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/><line x1=\"50\" y1=\"110\" x2=\"170\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#ah)\"/><text x=\"100\" y=\"65\" font-weight=\"bold\" fill=\"#1e40af\" font-size=\"14\">C</text><line x1=\"50\" y1=\"110\" x2=\"170\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#ah)\"/><text x=\"105\" y=\"130\" font-weight=\"bold\" fill=\"#1e40af\" font-size=\"14\">D</text><line x1=\"170\" y1=\"110\" x2=\"170\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#ah)\"/><text x=\"178\" y=\"80\" font-weight=\"bold\" fill=\"#1e40af\" font-size=\"14\">A</text><line x1=\"170\" y1=\"40\" x2=\"270\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#ah)\"/><text x=\"225\" y=\"68\" font-weight=\"bold\" fill=\"#1e40af\" font-size=\"14\">B</text><line x1=\"170\" y1=\"180\" x2=\"270\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#ah)\"/><text x=\"225\" y=\"160\" font-weight=\"bold\" fill=\"#1e40af\" font-size=\"14\">E</text><circle cx=\"50\" cy=\"110\" r=\"4\" fill=\"#0f172a\"/><text x=\"35\" y=\"115\" font-weight=\"bold\" font-size=\"13\">O</text><circle cx=\"170\" cy=\"40\" r=\"4\" fill=\"#0f172a\"/><text x=\"165\" y=\"28\" font-weight=\"bold\" font-size=\"13\">N</text><circle cx=\"170\" cy=\"110\" r=\"4\" fill=\"#0f172a\"/><text x=\"152\" y=\"120\" font-weight=\"bold\" font-size=\"13\">M</text><circle cx=\"270\" cy=\"110\" r=\"4\" fill=\"#0f172a\"/><text x=\"280\" y=\"115\" font-weight=\"bold\" font-size=\"13\">P</text></svg>",
    "options": [
      "\\vec{A} + \\vec{B} + \\vec{C} = 0",
      "\\vec{C} - \\vec{D} = -\\vec{A}",
      "\\vec{B} + \\vec{E} - \\vec{C} = -\\vec{D}",
      "All of the above"
    ],
    "correctAnswer": 2,
    "explanation": "From the loop law of vectors in polygon MPNO:\nTracing the closed polygon around vertices M, P, N, O:\n$-\\vec{E} - \\vec{B} + \\vec{C} - \\vec{D} = 0 \\implies \\vec{B} + \\vec{E} - \\vec{C} = -\\vec{D}$.\nHence, option (3) represents the correct vector relation.",
    "tags": [
      "Vectors",
      "Polygon Law",
      "Loop Rule"
    ]
  },
  {
    "id": "smart-vec-topic-05",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Triangle Inequality",
    "difficulty": "Easy",
    "questionText": "Out of the following sets of forces, the resultant of which CANNOT be zero?",
    "options": [
      "10 N, 10 N, 10 N",
      "10 N, 10 N, 20 N",
      "10 N, 20 N, 20 N",
      "10 N, 20 N, 40 N"
    ],
    "correctAnswer": 3,
    "explanation": "For three coplanar forces to have a zero resultant, they must be able to form the sides of a closed triangle. This requires that the sum of the two smaller forces must be greater than or equal to the largest force ($a + b \\ge c$).\nIn set (4): $10 + 20 = 30 < 40$. Since the sum of the two smaller forces is strictly less than 40 N, they can never close the polygon to give zero resultant.",
    "tags": [
      "Vectors",
      "Triangle Inequality",
      "Zero Resultant"
    ]
  },
  {
    "id": "smart-vec-topic-06",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Angle Between Vectors",
    "difficulty": "Medium",
    "questionText": "The resultant of two vectors $\\vec{A}$ and $\\vec{B}$ is perpendicular to vector $\\vec{A}$ and its magnitude is equal to half of the magnitude of vector $\\vec{B}$ (as shown in figure). The angle between $\\vec{A}$ and $\\vec{B}$ is:",
    "diagramSvg": "<svg viewBox=\"0 0 280 200\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#2563eb\"/></marker></defs><line x1=\"150\" y1=\"160\" x2=\"240\" y2=\"160\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/><text x=\"245\" y=\"165\" font-weight=\"bold\" font-size=\"14\">A</text><line x1=\"150\" y1=\"160\" x2=\"150\" y2=\"50\" stroke=\"#dc2626\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/><text x=\"155\" y=\"80\" font-weight=\"bold\" fill=\"#dc2626\" font-size=\"14\">R</text><line x1=\"60\" y1=\"160\" x2=\"150\" y2=\"50\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/><text x=\"90\" y=\"100\" font-weight=\"bold\" font-size=\"14\">B</text><rect x=\"150\" y=\"145\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><text x=\"170\" y=\"150\" font-size=\"11\" font-weight=\"bold\">90\u00b0</text><path d=\"M 140,65 A 25 25 0 0 0 150,75\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><text x=\"132\" y=\"85\" font-size=\"13\" font-style=\"italic\">\u03b2</text></svg>",
    "options": [
      "120\u00b0",
      "150\u00b0",
      "135\u00b0",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "In the vector triangle formed by $\\vec{A}$, $\\vec{R}$, and $\\vec{B}$:\n$\\vec{R} = \\vec{A} + \\vec{B}$, and $\\vec{R} \\perp \\vec{A}$.\nFrom the right triangle: $\\cos \\beta = \\frac{R}{B} = \\frac{B/2}{B} = \\frac{1}{2} \\implies \\beta = 60^\\circ$.\nThe angle between $\\vec{A}$ and $\\vec{B}$ is given by $\\theta = 90^\\circ + \\beta = 90^\\circ + 60^\\circ = 150^\\circ$.",
    "tags": [
      "Vectors",
      "Resultant",
      "Right Triangle Vector Addition"
    ]
  },
  {
    "id": "smart-vec-topic-07",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Max and Min Resultant",
    "difficulty": "Easy",
    "questionText": "The ratio of maximum and minimum magnitudes of the resultant of two vectors $\\vec{a}$ and $\\vec{b}$ is $3 : 1$. Now, $|\\vec{a}|$ is equal to:",
    "options": [
      "|\\vec{b}|",
      "2|\\vec{b}|",
      "3|\\vec{b}|",
      "4|\\vec{b}|"
    ],
    "correctAnswer": 1,
    "explanation": "$R_{\\text{max}} = a + b$, and $R_{\\text{min}} = a - b$.\nGiven: $\\frac{a + b}{a - b} = \\frac{3}{1} \\implies a + b = 3a - 3b \\implies 2a = 4b \\implies a = 2b$.\nTherefore, $|\\vec{a}| = 2|\\vec{b}|$.",
    "tags": [
      "Vectors",
      "Maximum Resultant",
      "Minimum Resultant"
    ]
  },
  {
    "id": "smart-vec-topic-08",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Parallelogram Law",
    "difficulty": "Medium",
    "questionText": "Two forces, each equal to $F$, act as shown in the figure. Their resultant is:",
    "diagramSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr8\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#2563eb\"/></marker></defs><line x1=\"100\" y1=\"140\" x2=\"210\" y2=\"140\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr8)\"/><text x=\"160\" y=\"160\" font-weight=\"bold\" font-size=\"14\">F</text><line x1=\"100\" y1=\"140\" x2=\"160\" y2=\"36\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr8)\"/><text x=\"110\" y=\"80\" font-weight=\"bold\" font-size=\"14\">F</text><path d=\"M 130,140 A 30 30 0 0 0 115,114\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><text x=\"135\" y=\"128\" font-weight=\"bold\" font-size=\"12\">60\u00b0</text></svg>",
    "options": [
      "F/2",
      "F",
      "\\sqrt{3}F",
      "\\sqrt{5}F"
    ],
    "correctAnswer": 1,
    "explanation": "Note that when both vectors are drawn originating from the common point (tail-to-tail), the angle between the two forces is the exterior angle $\\theta = 180^\\circ - 60^\\circ = 120^\\circ$.\n$R = \\sqrt{F^2 + F^2 + 2F^2 \\cos 120^\\circ} = \\sqrt{2F^2 + 2F^2(-1/2)} = \\sqrt{F^2} = F$.",
    "tags": [
      "Vectors",
      "Resultant of Equal Forces",
      "Parallelogram Law"
    ]
  },
  {
    "id": "smart-vec-topic-09",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Component Addition",
    "difficulty": "Medium",
    "questionText": "Vector $\\vec{A}$ is 2 cm long and is 60\u00b0 above the x-axis in the first quadrant. Vector $\\vec{B}$ is 2 cm long and is 60\u00b0 below the x-axis in the fourth quadrant. The sum $\\vec{A} + \\vec{B}$ is a vector of magnitude:",
    "options": [
      "2 cm along positive y-axis",
      "2 cm along positive x-axis",
      "2 cm along negative y-axis",
      "2 cm along negative x-axis"
    ],
    "correctAnswer": 1,
    "explanation": "Resolving the vectors into components:\n$\\vec{A} = 2\\cos 60^\\circ\\hat{i} + 2\\sin 60^\\circ\\hat{j} = 1\\hat{i} + \\sqrt{3}\\hat{j}$\n$\\vec{B} = 2\\cos(-60^\\circ)\\hat{i} + 2\\sin(-60^\\circ)\\hat{j} = 1\\hat{i} - \\sqrt{3}\\hat{j}$\nSum $\\vec{A} + \\vec{B} = (1 + 1)\\hat{i} + (\\sqrt{3} - \\sqrt{3})\\hat{j} = 2\\hat{i}\\text{ cm}$.\nThus, the resultant has magnitude 2 cm along the positive x-axis.",
    "tags": [
      "Vectors",
      "Vector Addition",
      "Components"
    ]
  },
  {
    "id": "smart-vec-topic-10",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Angle Calculation",
    "difficulty": "Medium",
    "questionText": "What is the angle between two vector forces of equal magnitude such that their resultant is one-third of either of the original forces?",
    "options": [
      "\\cos^{-1}\\left(-\\frac{17}{18}\\right)",
      "\\cos^{-1}\\left(-\\frac{1}{3}\\right)",
      "45\u00b0",
      "120\u00b0"
    ],
    "correctAnswer": 0,
    "explanation": "Let the forces have magnitude $F$. Resultant $R = F/3$.\n$R^2 = F^2 + F^2 + 2F^2 \\cos \\theta \\implies \\left(\\frac{F}{3}\\right)^2 = 2F^2(1 + \\cos \\theta)$\n$\\frac{1}{9} = 2(1 + \\cos \\theta) \\implies 1 + \\cos \\theta = \\frac{1}{18} \\implies \\cos \\theta = \\frac{1}{18} - 1 = -\\frac{17}{18}$\n$\\theta = \\cos^{-1}\\left(-\\frac{17}{18}\\right)$.",
    "tags": [
      "Vectors",
      "Resultant Formula",
      "Angle of Resultant"
    ]
  },
  {
    "id": "smart-vec-topic-11",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Cross Product & Dot Product",
    "subtopic": "Geometric Properties",
    "difficulty": "Easy",
    "questionText": "The angle between $(\\vec{A} + \\vec{B})$ and $(\\vec{A} \\times \\vec{B})$ is:",
    "options": [
      "0",
      "\\pi/4",
      "\\pi/2",
      "\\pi"
    ],
    "correctAnswer": 2,
    "explanation": "The sum vector $(\\vec{A} + \\vec{B})$ always lies entirely in the plane containing $\\vec{A}$ and $\\vec{B}$.\nThe cross product $(\\vec{A} \\times \\vec{B})$ is directed perpendicular to the plane containing $\\vec{A}$ and $\\vec{B}$.\nTherefore, $(\\vec{A} + \\vec{B})$ and $(\\vec{A} \\times \\vec{B})$ are mutually perpendicular, so the angle between them is $\\pi/2$ radians (90\u00b0).",
    "tags": [
      "Vectors",
      "Cross Product",
      "Orthogonality"
    ]
  },
  {
    "id": "smart-vec-topic-12",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Resolution of Vectors",
    "subtopic": "Projection on Coordinate Planes",
    "difficulty": "Easy",
    "questionText": "The projection of a vector $\\vec{r} = 3\\hat{i} + \\hat{j} + 2\\hat{k}$ on the x-y plane has magnitude:",
    "options": [
      "3",
      "4",
      "\\sqrt{14}",
      "\\sqrt{10}"
    ],
    "correctAnswer": 3,
    "explanation": "The projection of vector $\\vec{r} = x\\hat{i} + y\\hat{j} + z\\hat{k}$ on the x-y plane is obtained by setting the z-component to zero, yielding $\\vec{r}_{xy} = 3\\hat{i} + 1\\hat{j}$.\nMagnitude $= \\sqrt{3^2 + 1^2} = \\sqrt{9 + 1} = \\sqrt{10}$.",
    "tags": [
      "Vectors",
      "Projection",
      "Coordinate Planes"
    ]
  },
  {
    "id": "smart-vec-topic-13",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Equal Magnitude Resultant",
    "difficulty": "Easy",
    "questionText": "If $|\\vec{A} + \\vec{B}| = |\\vec{A}| = |\\vec{B}|$, then the angle between $\\vec{A}$ and $\\vec{B}$ is:",
    "options": [
      "120\u00b0",
      "60\u00b0",
      "90\u00b0",
      "0\u00b0"
    ],
    "correctAnswer": 0,
    "explanation": "Let $|\u000bec{A}| = |\u000bec{B}| = A$. Then $R = 2A \\cos(\\theta/2)$.\nGiven $R = A \\implies 2A \\cos(\\theta/2) = A \\implies \\cos(\\theta/2) = 1/2 \\implies \\theta/2 = 60^\\circ \\implies \\theta = 120^\\circ$.",
    "tags": [
      "Vectors",
      "Resultant",
      "Equilateral Vector Triangle"
    ]
  },
  {
    "id": "smart-vec-topic-14",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Triangle Law",
    "difficulty": "Medium",
    "questionText": "If vectors $\\vec{A} = \\hat{i} + 2\\hat{j} + 4\\hat{k}$ and $\\vec{B} = 5\\hat{i}$ represent two sides of a triangle, then the third side of the triangle can have length equal to:",
    "options": [
      "6",
      "\\sqrt{56}",
      "Both of the above",
      "None of the above"
    ],
    "correctAnswer": 2,
    "explanation": "In a triangle, the third side vector can be either:\n1) $\\vec{C}_1 = \\vec{A} - \\vec{B} = (1 - 5)\\hat{i} + 2\\hat{j} + 4\\hat{k} = -4\\hat{i} + 2\\hat{j} + 4\\hat{k} \\implies |\\vec{C}_1| = \\sqrt{(-4)^2 + 2^2 + 4^2} = \\sqrt{36} = 6$.\n2) $\\vec{C}_2 = \\vec{A} + \\vec{B} = (1 + 5)\\hat{i} + 2\\hat{j} + 4\\hat{k} = 6\\hat{i} + 2\\hat{j} + 4\\hat{k} \\implies |\\vec{C}_2| = \\sqrt{6^2 + 2^2 + 4^2} = \\sqrt{56}$.\nBoth lengths are geometrically possible depending on the orientation of the side vectors.",
    "tags": [
      "Vectors",
      "Triangle Law",
      "Magnitude of Third Side"
    ]
  },
  {
    "id": "smart-vec-topic-15",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Dot Product & Orthogonality",
    "subtopic": "Scalar Product Expansion",
    "difficulty": "Medium",
    "questionText": "Given $|\\vec{A}_1| = 2$, $|\\vec{A}_2| = 3$ and $|\\vec{A}_1 + \\vec{A}_2| = 3$. Find the value of $(\\vec{A}_1 + 2\\vec{A}_2) \\cdot (3\\vec{A}_1 - 4\\vec{A}_2)$:",
    "options": [
      "-64",
      "60",
      "-60",
      "64"
    ],
    "correctAnswer": 0,
    "explanation": "$|\\vec{A}_1 + \\vec{A}_2|^2 = A_1^2 + A_2^2 + 2\\vec{A}_1 \\cdot \\vec{A}_2 \\implies 3^2 = 2^2 + 3^2 + 2\\vec{A}_1 \\cdot \\vec{A}_2$\n$9 = 4 + 9 + 2\\vec{A}_1 \\cdot \\vec{A}_2 \\implies 2\\vec{A}_1 \\cdot \\vec{A}_2 = -4 \\implies \\vec{A}_1 \\cdot \\vec{A}_2 = -2$.\nNow expanding the dot product:\n$(\\vec{A}_1 + 2\\vec{A}_2) \\cdot (3\\vec{A}_1 - 4\\vec{A}_2) = 3A_1^2 - 4\\vec{A}_1 \\cdot \\vec{A}_2 + 6\\vec{A}_2 \\cdot \\vec{A}_1 - 8A_2^2$\n$= 3A_1^2 - 8A_2^2 + 2\\vec{A}_1 \\cdot \\vec{A}_2 = 3(4) - 8(9) + 2(-2) = 12 - 72 - 4 = -64$.",
    "tags": [
      "Vectors",
      "Dot Product",
      "Algebraic Expansion"
    ]
  },
  {
    "id": "smart-vec-topic-16",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Cross Product & Dot Product",
    "subtopic": "Vector Geometry",
    "difficulty": "Easy",
    "questionText": "Three vectors $\\vec{A}, \\vec{B}, \\vec{C}$ satisfy the relations $\\vec{A} \\cdot \\vec{B} = 0$ and $\\vec{A} \\cdot \\vec{C} = 0$. The vector $\\vec{A}$ is parallel to:",
    "options": [
      "\\vec{B}",
      "\\vec{C}",
      "\\vec{B} \\cdot \\vec{C}",
      "\\vec{B} \\times \\vec{C}"
    ],
    "correctAnswer": 3,
    "explanation": "Since $\\vec{A} \\cdot \\vec{B} = 0$, $\\vec{A} \\perp \\vec{B}$.\nSince $\\vec{A} \\cdot \\vec{C} = 0$, $\\vec{A} \\perp \\vec{C}$.\nThus, $\\vec{A}$ is perpendicular to both $\\vec{B}$ and $\\vec{C}$, meaning it is perpendicular to the entire plane containing $\\vec{B}$ and $\\vec{C}$.\nBy definition, the vector cross product $\\vec{B} \\times \\vec{C}$ is also perpendicular to that same plane. Hence, $\\vec{A}$ must be parallel (or antiparallel) to $\\vec{B} \\times \\vec{C}$.",
    "tags": [
      "Vectors",
      "Cross Product",
      "Parallel Vectors"
    ]
  },
  {
    "id": "smart-vec-topic-17",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Pythagorean Vectors",
    "difficulty": "Easy",
    "questionText": "If $\\vec{A} = \\vec{B} + \\vec{C}$, and the magnitudes of $\\vec{A}, \\vec{B}, \\vec{C}$ are 5, 4, and 3 units, then the angle between $\\vec{A}$ and $\\vec{C}$ is:",
    "options": [
      "\\cos^{-1}(3/5)",
      "\\cos^{-1}(4/5)",
      "\\sin^{-1}(3/4)",
      "\\pi/2"
    ],
    "correctAnswer": 0,
    "explanation": "Notice that $5^2 = 4^2 + 3^2$ ($25 = 16 + 9$). Hence $\\vec{B}$ and $\\vec{C}$ are perpendicular, and $\\vec{A}$ forms the hypotenuse of a right-angled vector triangle.\nThe cosine of the angle $\\theta$ between hypotenuse $\\vec{A}$ and side $\\vec{C}$ is $\\cos \\theta = \\frac{C}{A} = \\frac{3}{5} \\implies \\theta = \\cos^{-1}(3/5)$.",
    "tags": [
      "Vectors",
      "Right Triangle",
      "Angle between Vectors"
    ]
  },
  {
    "id": "smart-vec-topic-18",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Dot Product & Orthogonality",
    "subtopic": "Perpendicular Vector Form",
    "difficulty": "Medium",
    "questionText": "Given $\\vec{A} = A\\cos\\theta\\hat{i} + A\\sin\\theta\\hat{j}$. A vector $\\vec{B}$, which is perpendicular to $\\vec{A}$, is given by:",
    "options": [
      "B\\cos\\theta\\hat{i} - B\\sin\\theta\\hat{j}",
      "B\\sin\\theta\\hat{i} - B\\cos\\theta\\hat{j}",
      "B\\cos\\theta\\hat{i} + B\\sin\\theta\\hat{j}",
      "B\\sin\\theta\\hat{i} + B\\cos\\theta\\hat{j}"
    ],
    "correctAnswer": 1,
    "explanation": "Check the dot product $\\vec{A} \\cdot \\vec{B}$ for option (2):\n$\\vec{A} \\cdot \\vec{B} = (A\\cos\\theta)(B\\sin\\theta) + (A\\sin\\theta)(-B\\cos\\theta) = AB\\sin\\theta\\cos\\theta - AB\\sin\\theta\\cos\\theta = 0$.\nSince the dot product is identically zero, this vector is perpendicular to $\\vec{A}$.",
    "tags": [
      "Vectors",
      "Dot Product",
      "Orthogonal Vectors"
    ]
  },
  {
    "id": "smart-vec-topic-19",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Resolution of Vectors",
    "subtopic": "Direction Cosines",
    "difficulty": "Easy",
    "questionText": "The angle which the vector $\\vec{A} = 2\\hat{i} + 3\\hat{j}$ makes with the y-axis, where $\\hat{i}$ and $\\hat{j}$ are unit vectors along x- and y-axes respectively, is:",
    "options": [
      "\\cos^{-1}(3/5)",
      "\\cos^{-1}(2/3)",
      "\\tan^{-1}(2/3)",
      "\\sin^{-1}(2/3)"
    ],
    "correctAnswer": 2,
    "explanation": "Let $\\beta$ be the angle that $\\vec{A}$ makes with the y-axis.\nThen $\\tan \\beta = \\frac{A_x}{A_y} = \\frac{2}{3} \\implies \\beta = \\tan^{-1}\\left(\\frac{2}{3}\\right)$.",
    "tags": [
      "Vectors",
      "Components",
      "Angle with Axis"
    ]
  },
  {
    "id": "smart-vec-topic-20",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Dot Product & Orthogonality",
    "subtopic": "Dot Product Verification",
    "difficulty": "Easy",
    "questionText": "Given $\\vec{P} = 3\\hat{i} - 4\\hat{j}$. Which of the following is perpendicular to $\\vec{P}$?",
    "options": [
      "3\\hat{i}",
      "4\\hat{j}",
      "4\\hat{i} + 3\\hat{j}",
      "4\\hat{i} - 3\\hat{j}"
    ],
    "correctAnswer": 2,
    "explanation": "Taking the scalar product of $\\vec{P} = 3\\hat{i} - 4\\hat{j}$ with $4\\hat{i} + 3\\hat{j}$:\n$(3\\hat{i} - 4\\hat{j}) \\cdot (4\\hat{i} + 3\\hat{j}) = 3(4) + (-4)(3) = 12 - 12 = 0$.\nSince the dot product equals zero, $4\\hat{i} + 3\\hat{j}$ is perpendicular to $\\vec{P}$.",
    "tags": [
      "Vectors",
      "Dot Product",
      "Orthogonal Vectors"
    ]
  },
  {
    "id": "smart-vec-topic-21",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Resolution of Vectors",
    "subtopic": "2D Displacement",
    "difficulty": "Medium",
    "questionText": "In going from one city to another, a car travels 75 km north, 60 km north-west and 20 km east. The magnitude of displacement between the two cities is (take $1/\\sqrt{2} = 0.7$):",
    "options": [
      "170 km",
      "137 km",
      "119 km",
      "140 km"
    ],
    "correctAnswer": 2,
    "explanation": "Taking East as $+x$ (unit vector $\\hat{i}$) and North as $+y$ (unit vector $\\hat{j}$):\n\u2022 $\\vec{s}_1 = 75\\hat{j}\\text{ km}$\n\u2022 $\\vec{s}_2 = -60\\cos 45^\\circ\\hat{i} + 60\\sin 45^\\circ\\hat{j} = -60(0.7)\\hat{i} + 60(0.7)\\hat{j} = -42\\hat{i} + 42\\hat{j}\\text{ km}$\n\u2022 $\\vec{s}_3 = 20\\hat{i}\\text{ km}$\nNet displacement $\\vec{S} = \\vec{s}_1 + \\vec{s}_2 + \\vec{s}_3 = (20 - 42)\\hat{i} + (75 + 42)\\hat{j} = -22\\hat{i} + 117\\hat{j}\\text{ km}$.\nMagnitude $S = \\sqrt{(-22)^2 + (117)^2} = \\sqrt{484 + 13689} = \\sqrt{14173} \\approx 119\\text{ km}$.",
    "tags": [
      "Vectors",
      "Displacement",
      "Bearings"
    ]
  },
  {
    "id": "smart-vec-topic-22",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Cross Product & Dot Product",
    "subtopic": "Area of Parallelogram",
    "difficulty": "Easy",
    "questionText": "What is the angle between $\\vec{A}$ and $\\vec{B}$, if $\\vec{A}$ and $\\vec{B}$ are the adjacent sides of a parallelogram drawn from a common point and the area of the parallelogram is $AB/2$?",
    "options": [
      "15\u00b0",
      "30\u00b0",
      "45\u00b0",
      "60\u00b0"
    ],
    "correctAnswer": 1,
    "explanation": "Area of a parallelogram with adjacent sides $\\vec{A}$ and $\\vec{B}$ is $|\u000bec{A} \\times \\vec{B}| = AB \\sin \\theta$.\nGiven: $\\text{Area} = AB/2 \\implies AB \\sin \\theta = \\frac{AB}{2} \\implies \\sin \\theta = \\frac{1}{2} \\implies \\theta = 30^\\circ$.",
    "tags": [
      "Vectors",
      "Area of Parallelogram",
      "Cross Product"
    ]
  },
  {
    "id": "smart-vec-topic-23",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Equal Magnitude Sum and Difference",
    "difficulty": "Easy",
    "questionText": "Two vectors $\\vec{a}$ and $\\vec{b}$ are such that $|\\vec{a} + \\vec{b}| = |\\vec{a} - \\vec{b}|$. What is the angle between $\\vec{a}$ and $\\vec{b}$?",
    "options": [
      "0\u00b0",
      "90\u00b0",
      "60\u00b0",
      "180\u00b0"
    ],
    "correctAnswer": 1,
    "explanation": "Squaring both sides:\n$|\\vec{a} + \\vec{b}|^2 = |\\vec{a} - \\vec{b}|^2 \\implies a^2 + b^2 + 2ab\\cos\\theta = a^2 + b^2 - 2ab\\cos\\theta$\n$4ab\\cos\\theta = 0 \\implies \\cos\\theta = 0 \\implies \\theta = 90^\\circ$.\nGeometrically, if the diagonals of a parallelogram are equal in length, the parallelogram is a rectangle, meaning adjacent sides are perpendicular (90\u00b0).",
    "tags": [
      "Vectors",
      "Vector Addition",
      "Angle Between Vectors"
    ]
  },
  {
    "id": "smart-vec-topic-24",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Cross Product & Dot Product",
    "subtopic": "Parallel Vectors",
    "difficulty": "Easy",
    "questionText": "Given $\\vec{A} = 4\\hat{i} + 6\\hat{j}$ and $\\vec{B} = 2\\hat{i} + 3\\hat{j}$. Which of the following is correct?",
    "options": [
      "\\vec{A} \\times \\vec{B} = \\vec{0}",
      "\\vec{A} \\cdot \\vec{B} = 24",
      "|\\vec{A}|/|\\vec{B}| = 1/2",
      "\\vec{A} \\text{ and } \\vec{B} \\text{ are antiparallel}"
    ],
    "correctAnswer": 0,
    "explanation": "Notice that $\\vec{A} = 2(2\\hat{i} + 3\\hat{j}) = 2\\vec{B}$.\nBecause $\\vec{A}$ is a positive scalar multiple of $\\vec{B}$, they are parallel vectors ($\theta = 0^\\circ$).\nThe cross product of two parallel vectors is identically zero: $\\vec{A} \\times \\vec{B} = \\vec{0}$.",
    "tags": [
      "Vectors",
      "Parallel Vectors",
      "Cross Product"
    ]
  },
  {
    "id": "smart-vec-topic-25",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Resolution of Vectors",
    "subtopic": "Collinear Vectors",
    "difficulty": "Easy",
    "questionText": "Given $\\vec{A} = 2\\hat{i} + p\\hat{j} + q\\hat{k}$ and $\\vec{B} = 5\\hat{i} + 7\\hat{j} + 3\\hat{k}$. If $\\vec{A} \\parallel \\vec{B}$, then the values of $p$ and $q$ are respectively:",
    "options": [
      "14/5 and 6/5",
      "14/3 and 6/5",
      "6/5 and 1/3",
      "3/4 and 1/4"
    ],
    "correctAnswer": 0,
    "explanation": "For two vectors to be parallel, the ratio of their corresponding rectangular components must be equal:\n$\\frac{A_x}{B_x} = \\frac{A_y}{B_y} = \\frac{A_z}{B_z} \\implies \\frac{2}{5} = \\frac{p}{7} = \\frac{q}{3}$\nFrom $\\frac{p}{7} = \\frac{2}{5} \\implies p = \\frac{14}{5}$.\nFrom $\\frac{q}{3} = \\frac{2}{5} \\implies q = \\frac{6}{5}$.",
    "tags": [
      "Vectors",
      "Parallel Condition",
      "Component Ratios"
    ]
  },
  {
    "id": "smart-vec-topic-26",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Dot Product & Orthogonality",
    "subtopic": "Distributive Property",
    "difficulty": "Easy",
    "questionText": "If $\\vec{A}$ is perpendicular to $\\vec{B}$, then:",
    "options": [
      "\\vec{A} \\times \\vec{B} = 0",
      "\\vec{A} \\cdot [\\vec{A} + \\vec{B}] = A^2",
      "\\vec{A} \\cdot \\vec{B} = AB",
      "\\vec{A} \\cdot [\\vec{A} + \\vec{B}] = A^2 + AB"
    ],
    "correctAnswer": 1,
    "explanation": "Since $\\vec{A} \\perp \\vec{B}$, the scalar product $\\vec{A} \\cdot \\vec{B} = 0$.\nUsing the distributive property of dot product:\n$\\vec{A} \\cdot [\\vec{A} + \\vec{B}] = \\vec{A} \\cdot \\vec{A} + \\vec{A} \\cdot \\vec{B} = A^2 + 0 = A^2$.",
    "tags": [
      "Vectors",
      "Dot Product",
      "Orthogonality"
    ]
  },
  {
    "id": "smart-vec-topic-27",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Parallelogram Diagonals",
    "difficulty": "Easy",
    "questionText": "If the angle between the vectors $\\vec{a}$ and $\\vec{b}$ is an acute angle, then the difference $\\vec{a} - \\vec{b}$ is:",
    "options": [
      "The major diagonal of the parallelogram",
      "The minor diagonal of the parallelogram",
      "Any of the above",
      "None of the above"
    ],
    "correctAnswer": 1,
    "explanation": "In a parallelogram formed by adjacent sides $\\vec{a}$ and $\\vec{b}$:\n\u2022 Diagonals are $\\vec{d}_1 = \\vec{a} + \\vec{b}$ and $\\vec{d}_2 = \\vec{a} - \\vec{b}$.\n\u2022 $|\u000bec{a} + \\vec{b}| = \\sqrt{a^2 + b^2 + 2ab\\cos\\theta}$\n\u2022 $|\u000bec{a} - \\vec{b}| = \\sqrt{a^2 + b^2 - 2ab\\cos\\theta}$\nFor an acute angle $\\theta < 90^\\circ$, $\\cos\\theta > 0$, hence $|\u000bec{a} + \\vec{b}| > |\\vec{a} - \\vec{b}|$.\nTherefore, $\\vec{a} + \\vec{b}$ is the major diagonal, and $\\vec{a} - \\vec{b}$ is the minor diagonal.",
    "tags": [
      "Vectors",
      "Diagonals",
      "Parallelogram Law"
    ]
  },
  {
    "id": "smart-vec-topic-28",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Resultant Magnitude",
    "difficulty": "Easy",
    "questionText": "Given that $\\vec{A} + \\vec{B} = \\vec{C}$. If $|\\vec{A}| = 4$, $|\\vec{B}| = 5$ and $|\\vec{C}| = \\sqrt{61}$, the angle between $\\vec{A}$ and $\\vec{B}$ is:",
    "options": [
      "30\u00b0",
      "60\u00b0",
      "90\u00b0",
      "120\u00b0"
    ],
    "correctAnswer": 1,
    "explanation": "$C^2 = A^2 + B^2 + 2AB\\cos\\theta$\n$(\\sqrt{61})^2 = 4^2 + 5^2 + 2(4)(5)\\cos\\theta$\n$61 = 16 + 25 + 40\\cos\\theta \\implies 61 = 41 + 40\\cos\\theta$\n$40\\cos\\theta = 20 \\implies \\cos\\theta = \\frac{20}{40} = \\frac{1}{2} \\implies \\theta = 60^\\circ$.",
    "tags": [
      "Vectors",
      "Resultant",
      "Cosine Law"
    ]
  },
  {
    "id": "smart-vec-topic-29",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Unit Vectors & Components",
    "subtopic": "Parallel Vector Construction",
    "difficulty": "Easy",
    "questionText": "If $\\vec{b} = 3\\hat{i} + 4\\hat{j}$ and $\\vec{a} = \\hat{i} - \\hat{j}$, the vector having the same magnitude as that of $\\vec{b}$ and parallel to $\\vec{a}$ is:",
    "options": [
      "\\frac{5}{\\sqrt{2}}(\\hat{i} - \\hat{j})",
      "\\frac{5}{\\sqrt{2}}(\\hat{i} + \\hat{j})",
      "5(\\hat{i} - \\hat{j})",
      "5(\\hat{i} + \\hat{j})"
    ],
    "correctAnswer": 0,
    "explanation": "Magnitude of $\\vec{b}$: $|\u000bec{b}| = \\sqrt{3^2 + 4^2} = 5$.\nUnit vector parallel to $\\vec{a}$: $\\hat{a} = \\frac{\\vec{a}}{|\\vec{a}|} = \\frac{\\hat{i} - \\hat{j}}{\\sqrt{1^2 + (-1)^2}} = \\frac{\\hat{i} - \\hat{j}}{\\sqrt{2}}$.\nThe required vector is $|\u000bec{b}|\\hat{a} = \\frac{5}{\\sqrt{2}}(\\hat{i} - \\hat{j})$.",
    "tags": [
      "Vectors",
      "Unit Vector",
      "Magnitude Scaling"
    ]
  },
  {
    "id": "smart-vec-topic-30",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "subtopic": "Vector Concepts",
    "difficulty": "Easy",
    "questionText": "Choose the WRONG statement:",
    "options": [
      "Three vectors of different magnitudes may be combined to give zero resultant.",
      "Two vectors of different magnitudes can be combined to give a zero resultant.",
      "The product of a scalar and a vector is a vector quantity.",
      "All of the above are wrong statements."
    ],
    "correctAnswer": 1,
    "explanation": "For two vectors to have a zero resultant, they MUST have equal magnitudes and opposite directions ($|\\vec{A}| = |\\vec{B}|$). Two vectors of different magnitudes can NEVER cancel each other out to give zero. Hence statement (2) is false/wrong.",
    "tags": [
      "Vectors",
      "Fundamentals",
      "Zero Resultant"
    ]
  },
  {
    "id": "smart-vec-topic-31",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Resolution of Vectors",
    "subtopic": "2D Resolution",
    "difficulty": "Easy",
    "questionText": "What displacement at an angle 60\u00b0 to the x-axis has an x-component of 5 m? $\\hat{i}$ and $\\hat{j}$ are unit vectors in x and y directions, respectively.",
    "options": [
      "5\\hat{i}",
      "5\\hat{i} + 5\\hat{j}",
      "5\\hat{i} + 5\\sqrt{3}\\hat{j}",
      "All of the above"
    ],
    "correctAnswer": 2,
    "explanation": "Let the displacement vector be $\\vec{r} = x\\hat{i} + y\\hat{j}$.\nGiven $x = r\\cos 60^\\circ = 5 \\implies r(1/2) = 5 \\implies r = 10\\text{ m}$.\nThe y-component is $y = r\\sin 60^\\circ = 10 \\times \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}\\text{ m}$.\nTherefore, the displacement vector is $5\\hat{i} + 5\\sqrt{3}\\hat{j}$.",
    "tags": [
      "Vectors",
      "Vector Resolution",
      "Components"
    ]
  },
  {
    "id": "smart-vec-topic-32",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "subtopic": "Triangle Inequality",
    "difficulty": "Easy",
    "questionText": "Mark the correct statement:",
    "options": [
      "|\\vec{a} + \\vec{b}| \\ge |\\vec{a}| + |\\vec{b}|",
      "|\\vec{a} + \\vec{b}| \\le |\\vec{a}| + |\\vec{b}|",
      "|\\vec{a} - \\vec{b}| \\ge |\\vec{a}| + |\\vec{b}|",
      "All of the above"
    ],
    "correctAnswer": 1,
    "explanation": "By the fundamental triangle inequality of vectors, the length of any side of a triangle cannot exceed the sum of the other two sides:\n$|\\vec{a} + \\vec{b}| \\le |\\vec{a}| + |\\vec{b}|$, with equality holding only when $\\vec{a}$ and $\\vec{b}$ are parallel in the same direction.",
    "tags": [
      "Vectors",
      "Triangle Inequality",
      "Vector Bounds"
    ]
  },
  {
    "id": "smart-vec-topic-33",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Range of Resultant",
    "difficulty": "Easy",
    "questionText": "Out of the following pairs of forces, the resultant of which CANNOT be 10 N?",
    "options": [
      "15 N and 20 N",
      "10 N and 10 N",
      "5 N and 12 N",
      "12 N and 1 N"
    ],
    "correctAnswer": 3,
    "explanation": "The resultant $R$ of two forces $A$ and $B$ must lie in the range $[|A - B|, A + B]$.\nFor 12 N and 1 N: $R_{\\text{min}} = 12 - 1 = 11\\text{ N}$, $R_{\\text{max}} = 12 + 1 = 13\\text{ N}$.\nSince 10 N is outside the interval $[11\\text{ N}, 13\\text{ N}]$, the resultant can never be 10 N.",
    "tags": [
      "Vectors",
      "Resultant Bounds",
      "Forces"
    ]
  },
  {
    "id": "smart-vec-topic-34",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Range of Resultant",
    "difficulty": "Easy",
    "questionText": "Which of the following pairs of forces cannot be added to give a resultant force of 4 N?",
    "options": [
      "2 N and 8 N",
      "2 N and 2 N",
      "2 N and 6 N",
      "2 N and 4 N"
    ],
    "correctAnswer": 0,
    "explanation": "For 2 N and 8 N: the range of resultant is $[8 - 2, 8 + 2] = [6\\text{ N}, 10\\text{ N}]$.\nSince 4 N is outside this permissible range, these two forces cannot yield a 4 N resultant.",
    "tags": [
      "Vectors",
      "Resultant Bounds",
      "Forces"
    ]
  },
  {
    "id": "smart-vec-topic-35",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Geometric Medians",
    "difficulty": "Medium",
    "questionText": "In an equilateral triangle ABC, AL, BM, and CN are medians. Forces along BC and BA represented by them will have a resultant represented by:",
    "options": [
      "2AL",
      "2BM",
      "2CN",
      "AC"
    ],
    "correctAnswer": 1,
    "explanation": "In $\\Delta ABC$, $M$ is the midpoint of the side $AC$. Therefore, $\\vec{BM}$ is the median vector originating from $B$.\nBy the parallelogram/midpoint theorem of vectors:\n$\\vec{BA} + \\vec{BC} = 2\\vec{BM}$.\nThus, the resultant of forces along BA and BC is represented by $2\\vec{BM}$.",
    "tags": [
      "Vectors",
      "Triangle Medians",
      "Parallelogram Law"
    ]
  }
];
