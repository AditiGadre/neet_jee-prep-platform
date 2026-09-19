import { Question } from '../types';

export const PHYSICS_SMART_BOOKLET_VECTORS_ILLUSTRATIONS: Question[] = [
  {
    "id": "smart-vec-illus-02",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Angle Between Equal Forces",
    "difficulty": "Medium",
    "questionText": "Two equal forces have a resultant equal to one and a half times either force. Find the angle between the forces:",
    "options": [
      "\\cos^{-1}\\left(\\frac{1}{8}\\right)",
      "\\cos^{-1}\\left(\\frac{1}{4}\\right)",
      "\\cos^{-1}\\left(\\frac{3}{8}\\right)",
      "60\u00b0"
    ],
    "correctAnswer": 0,
    "explanation": "Let each force have magnitude $P$. Resultant $R = 1.5P = \\frac{3}{2}P$.\n$R^2 = P^2 + P^2 + 2P^2\\cos\\theta = 2P^2(1 + \\cos\\theta)$\n$\\left(\\frac{3}{2}P\\right)^2 = \\frac{9}{4}P^2 = 2P^2(1 + \\cos\\theta)$\n$1 + \\cos\\theta = \\frac{9}{8} \\implies \\cos\\theta = \\frac{9}{8} - 1 = \\frac{1}{8} \\implies \\theta = \\cos^{-1}\\left(\\frac{1}{8}\\right)$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Angle Between Forces"
    ]
  },
  {
    "id": "smart-vec-illus-03a",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Resultant of Compound Forces",
    "difficulty": "Medium",
    "questionText": "At what angle must two forces $(P + Q)$ and $(P - Q)$ act so that their resultant is $\\sqrt{3P^2 + Q^2}$?",
    "options": [
      "30\u00b0",
      "45\u00b0",
      "60\u00b0",
      "90\u00b0"
    ],
    "correctAnswer": 2,
    "explanation": "$R^2 = (P + Q)^2 + (P - Q)^2 + 2(P + Q)(P - Q)\\cos\\theta$\n$(\\sqrt{3P^2 + Q^2})^2 = 2(P^2 + Q^2) + 2(P^2 - Q^2)\\cos\\theta$\n$3P^2 + Q^2 = 2P^2 + 2Q^2 + 2(P^2 - Q^2)\\cos\\theta$\n$P^2 - Q^2 = 2(P^2 - Q^2)\\cos\\theta \\implies \\cos\\theta = \\frac{1}{2} \\implies \\theta = 60^\\circ$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Compound Forces"
    ]
  },
  {
    "id": "smart-vec-illus-03b",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Perpendicular Compound Forces",
    "difficulty": "Medium",
    "questionText": "At what angle must two forces $(P + Q)$ and $(P - Q)$ act so that their resultant is $\\sqrt{2(P^2 + Q^2)}$?",
    "options": [
      "0\u00b0",
      "45\u00b0",
      "60\u00b0",
      "90\u00b0"
    ],
    "correctAnswer": 3,
    "explanation": "$R^2 = (P + Q)^2 + (P - Q)^2 + 2(P^2 - Q^2)\\cos\\theta$\n$2(P^2 + Q^2) = 2(P^2 + Q^2) + 2(P^2 - Q^2)\\cos\\theta$\n$2(P^2 - Q^2)\\cos\\theta = 0 \\implies \\cos\\theta = 0 \\implies \\theta = 90^\\circ$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Right Angle Forces"
    ]
  },
  {
    "id": "smart-vec-illus-04",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Maximum and Minimum Resultant",
    "difficulty": "Easy",
    "questionText": "Two forces 7 N and 3 N act simultaneously on a body. What will be the resultant if the forces act at right angles to each other?",
    "options": [
      "10 N",
      "4 N",
      "\\sqrt{58}\\text{ N}",
      "\\sqrt{40}\\text{ N}"
    ],
    "correctAnswer": 2,
    "explanation": "When forces act at right angles ($\\theta = 90^\\circ$):\n$R = \\sqrt{F_1^2 + F_2^2 + 2F_1 F_2\\cos 90^\\circ} = \\sqrt{7^2 + 3^2 + 0} = \\sqrt{49 + 9} = \\sqrt{58}\\text{ N}$.\n(Note: Maximum resultant is $7 + 3 = 10\\text{ N}$, and minimum resultant is $7 - 3 = 4\\text{ N}$).",
    "tags": [
      "Vectors",
      "Illustrations",
      "Right Angles"
    ]
  },
  {
    "id": "smart-vec-illus-05",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Concurrent Forces in Cardinal Directions",
    "difficulty": "Medium",
    "questionText": "Find the resultant of the following forces acting simultaneously on a particle: 30 N due East, 20 N due North, 50 N due West and 40 N due South:",
    "diagramSvg": "<svg viewBox=\"0 0 240 220\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr5i\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#2563eb\"/></marker><marker id=\"arr5r\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#dc2626\"/></marker></defs><line x1=\"120\" y1=\"110\" x2=\"195\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr5i)\"/><text x=\"150\" y=\"102\" font-size=\"11\">30 N (E)</text><line x1=\"120\" y1=\"110\" x2=\"120\" y2=\"50\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr5i)\"/><text x=\"125\" y=\"75\" font-size=\"11\">20 N (N)</text><line x1=\"120\" y1=\"110\" x2=\"25\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr5i)\"/><text x=\"40\" y=\"102\" font-size=\"11\">50 N (W)</text><line x1=\"120\" y1=\"110\" x2=\"120\" y2=\"195\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr5i)\"/><text x=\"125\" y=\"165\" font-size=\"11\">40 N (S)</text><circle cx=\"120\" cy=\"110\" r=\"3.5\" fill=\"#0f172a\"/><line x1=\"120\" y1=\"110\" x2=\"70\" y2=\"160\" stroke=\"#dc2626\" stroke-width=\"2.5\" marker-end=\"url(#arr5r)\"/><text x=\"55\" y=\"175\" font-weight=\"bold\" fill=\"#dc2626\" font-size=\"12\">R</text></svg>",
    "options": [
      "20\\text{ N south-west}",
      "20\\sqrt{2}\\text{ N south-west}",
      "40\\text{ N south-west}",
      "140\\text{ N south-west}"
    ],
    "correctAnswer": 1,
    "explanation": "Resolving horizontally (East-West): $F_x = 30\\text{ (East)} - 50\\text{ (West)} = -20\\text{ N} = 20\\text{ N due West}$.\nResolving vertically (North-South): $F_y = 20\\text{ (North)} - 40\\text{ (South)} = -20\\text{ N} = 20\\text{ N due South}$.\nResultant magnitude: $R = \\sqrt{F_x^2 + F_y^2} = \\sqrt{(-20)^2 + (-20)^2} = 20\\sqrt{2}\\text{ N}$.\nDirection: South-West (at 45\u00b0 South of West).",
    "tags": [
      "Vectors",
      "Illustrations",
      "Cardinal Directions"
    ]
  },
  {
    "id": "smart-vec-illus-06",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Component Vectors",
    "difficulty": "Medium",
    "questionText": "Vectors $\\vec{A}$ and $\\vec{B}$ have magnitudes 12.0 m (along -x axis) and 18.0 m at 37\u00b0 above the +x axis respectively. Find the magnitude of $\\vec{A} + \\vec{B}$ (take $\\cos 37^\\circ = 4/5, \\sin 37^\\circ = 3/5$):",
    "diagramSvg": "<svg viewBox=\"0 0 260 200\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr6i\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#2563eb\"/></marker></defs><line x1=\"20\" y1=\"150\" x2=\"240\" y2=\"150\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><text x=\"245\" y=\"155\" font-size=\"12\">x</text><line x1=\"130\" y1=\"180\" x2=\"130\" y2=\"30\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><text x=\"135\" y=\"25\" font-size=\"12\">y</text><line x1=\"130\" y1=\"150\" x2=\"40\" y2=\"150\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr6i)\"/><text x=\"55\" y=\"170\" font-weight=\"bold\" font-size=\"12\">A (12.0 m)</text><line x1=\"130\" y1=\"150\" x2=\"210\" y2=\"85\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr6i)\"/><text x=\"180\" y=\"75\" font-weight=\"bold\" font-size=\"12\">B (18.0 m)</text><path d=\"M 160,150 A 30 30 0 0 0 156,128\" fill=\"none\" stroke=\"#0f172a\"/><text x=\"165\" y=\"142\" font-size=\"11\">37\u00b0</text><circle cx=\"130\" cy=\"150\" r=\"3.5\" fill=\"#0f172a\"/></svg>",
    "options": [
      "11.1 m",
      "28.5 m",
      "15.0 m",
      "6.0 m"
    ],
    "correctAnswer": 0,
    "explanation": "$\\vec{A} = -12\\hat{i}$.\n$\\vec{B} = 18\\cos 37^\\circ\\hat{i} + 18\\sin 37^\\circ\\hat{j} = 18(4/5)\\hat{i} + 18(3/5)\\hat{j} = \\frac{72}{5}\\hat{i} + \\frac{54}{5}\\hat{j} = 14.4\\hat{i} + 10.8\\hat{j}$.\n$\\vec{A} + \\vec{B} = (-12 + 14.4)\\hat{i} + 10.8\\hat{j} = 2.4\\hat{i} + 10.8\\hat{j} = \\frac{12}{5}\\hat{i} + \\frac{54}{5}\\hat{j}$.\nMagnitude: $|\\vec{A} + \\vec{B}| = \\sqrt{(2.4)^2 + (10.8)^2} = \\sqrt{5.76 + 116.64} = \\sqrt{122.4} \\approx 11.1\\text{ m}$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Components Addition"
    ]
  },
  {
    "id": "smart-vec-illus-07",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Magnitude & Direction of Resultant",
    "difficulty": "Medium",
    "questionText": "If two vectors $a = 4\\text{ ms}^{-1}$ and $b = 7\\text{ ms}^{-1}$ are inclined at an angle of 60\u00b0 to each other, determine the magnitude of their resultant:",
    "options": [
      "\\sqrt{93}\\text{ ms}^{-1}",
      "11\\text{ ms}^{-1}",
      "3\\text{ ms}^{-1}",
      "\\sqrt{65}\\text{ ms}^{-1}"
    ],
    "correctAnswer": 0,
    "explanation": "$R = \\sqrt{a^2 + b^2 + 2ab\\cos 60^\\circ} = \\sqrt{4^2 + 7^2 + 2(4)(7)(1/2)} = \\sqrt{16 + 49 + 28} = \\sqrt{93}\\text{ ms}^{-1}$.\n(Direction with vector $\\vec{a}$ is $\\alpha = \\tan^{-1}\\left(\\frac{7\\sin 60^\\circ}{4 + 7\\cos 60^\\circ}\\right) = \\tan^{-1}\\left(\\frac{7\\sqrt{3}/2}{15/2}\\right) = \\tan^{-1}\\left(\\frac{7\\sqrt{3}}{15}\\right)$).",
    "tags": [
      "Vectors",
      "Illustrations",
      "Resultant Velocity"
    ]
  },
  {
    "id": "smart-vec-illus-08",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Unit Vectors & Components",
    "subtopic": "Opposite Unit Vector",
    "difficulty": "Easy",
    "questionText": "Find a unit vector along a direction opposite to the vector $3\\hat{i} - 4\\hat{j} + 12\\hat{k}$:",
    "options": [
      "\\frac{3\\hat{i} - 4\\hat{j} + 12\\hat{k}}{13}",
      "\\frac{-3\\hat{i} + 4\\hat{j} - 12\\hat{k}}{13}",
      "\\frac{-3\\hat{i} - 4\\hat{j} - 12\\hat{k}}{13}",
      "\\frac{4\\hat{i} - 3\\hat{j} + 12\\hat{k}}{13}"
    ],
    "correctAnswer": 1,
    "explanation": "Magnitude of $\\vec{A} = 3\\hat{i} - 4\\hat{j} + 12\\hat{k}$ is:\n$|\\vec{A}| = \\sqrt{3^2 + (-4)^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$.\nUnit vector along $\\vec{A}$: $\\hat{A} = \\frac{3\\hat{i} - 4\\hat{j} + 12\\hat{k}}{13}$.\nUnit vector opposite to $\\vec{A}$ is $-\\hat{A} = \\frac{-3\\hat{i} + 4\\hat{j} - 12\\hat{k}}{13}$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Unit Vector"
    ]
  },
  {
    "id": "smart-vec-illus-09",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Resolution of Vectors",
    "subtopic": "Linear Combination",
    "difficulty": "Easy",
    "questionText": "If $\\vec{a} = 2\\hat{i} - 3\\hat{j}$, $\\vec{b} = 6\\hat{i} + 2\\hat{j} - 3\\hat{k}$ and $\\vec{c} = \\hat{i} + \\hat{k}$, find $3\\vec{a} + 2\\vec{b} + \\vec{c}$:",
    "options": [
      "19\\hat{i} - 5\\hat{j} - 5\\hat{k}",
      "19\\hat{i} + 5\\hat{j} + 5\\hat{k}",
      "-32\\hat{i} - 15\\hat{j} + 20\\hat{k}",
      "15\\hat{i} - 8\\hat{j} + 2\\hat{k}"
    ],
    "correctAnswer": 0,
    "explanation": "$3\\vec{a} = 3(2\\hat{i} - 3\\hat{j}) = 6\\hat{i} - 9\\hat{j}$\n$2\\vec{b} = 2(6\\hat{i} + 2\\hat{j} - 3\\hat{k}) = 12\\hat{i} + 4\\hat{j} - 6\\hat{k}$\n$\\vec{c} = \\hat{i} + \\hat{k}$\nAdding: $3\\vec{a} + 2\\vec{b} + \\vec{c} = (6 + 12 + 1)\\hat{i} + (-9 + 4 + 0)\\hat{j} + (0 - 6 + 1)\\hat{k} = 19\\hat{i} - 5\\hat{j} - 5\\hat{k}$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Linear Combination"
    ]
  },
  {
    "id": "smart-vec-illus-10",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Vector Difference Magnitude",
    "difficulty": "Easy",
    "questionText": "Given two vectors $\\vec{A} = 4\\hat{i} + 3\\hat{j}$ and $\\vec{B} = 5\\hat{i} - 2\\hat{j}$. Find the magnitude of the vector difference $\\vec{A} - \\vec{B}$:",
    "options": [
      "5",
      "\\sqrt{29}",
      "\\sqrt{26}",
      "1"
    ],
    "correctAnswer": 2,
    "explanation": "$\\vec{A} - \\vec{B} = (4\\hat{i} + 3\\hat{j}) - (5\\hat{i} - 2\\hat{j}) = -\\hat{i} + 5\\hat{j}$.\nMagnitude: $|\\vec{A} - \\vec{B}| = \\sqrt{(-1)^2 + 5^2} = \\sqrt{1 + 25} = \\sqrt{26}$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Vector Difference"
    ]
  },
  {
    "id": "smart-vec-illus-11",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Unit Vectors & Components",
    "subtopic": "Unit Vector Scaling Constant",
    "difficulty": "Easy",
    "questionText": "If $\\vec{A} = a(3\\hat{i} + 4\\hat{j})$, where $a$ is a constant, determine the value of $a$ that makes $\\vec{A}$ a unit vector:",
    "options": [
      "1/5",
      "1/25",
      "5",
      "1/7"
    ],
    "correctAnswer": 0,
    "explanation": "For $\\vec{A}$ to be a unit vector, $|\\vec{A}| = 1$:\n$|a(3\\hat{i} + 4\\hat{j})| = a\\sqrt{3^2 + 4^2} = a\\sqrt{25} = 5a = 1 \\implies a = \\frac{1}{5} = 0.2$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Unit Vector Constant"
    ]
  },
  {
    "id": "smart-vec-illus-12",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Resolution of Vectors",
    "subtopic": "Resolution along Non-Orthogonal Basis",
    "difficulty": "Hard",
    "questionText": "Resolve the vector $\\vec{R} = 2\\hat{i} + 3\\hat{j}$ along the directions of $(\\hat{i} + 2\\hat{j})$ and $(\\hat{i} - \\hat{j})$. The resolved components are respectively:",
    "options": [
      "\\frac{5}{3}(\\hat{i} + 2\\hat{j}) \\text{ and } \\frac{1}{3}(\\hat{i} - \\hat{j})",
      "\\frac{1}{3}(\\hat{i} + 2\\hat{j}) \\text{ and } \\frac{5}{3}(\\hat{i} - \\hat{j})",
      "2(\\hat{i} + 2\\hat{j}) \\text{ and } 3(\\hat{i} - \\hat{j})",
      "\\frac{4}{3}(\\hat{i} + 2\\hat{j}) \\text{ and } \\frac{2}{3}(\\hat{i} - \\hat{j})"
    ],
    "correctAnswer": 0,
    "explanation": "Let $\\vec{R} = m(\\hat{i} + 2\\hat{j}) + n(\\hat{i} - \\hat{j}) = (m + n)\\hat{i} + (2m - n)\\hat{j}$.\nEquating coefficients with $\\vec{R} = 2\\hat{i} + 3\\hat{j}$:\n1) $m + n = 2$\n2) $2m - n = 3$\nAdding the two equations: $3m = 5 \\implies m = 5/3$.\nFrom (1): $n = 2 - 5/3 = 1/3$.\nHence, the components are $\\frac{5}{3}(\\hat{i} + 2\\hat{j})$ and $\\frac{1}{3}(\\hat{i} - \\hat{j})$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Basis Resolution"
    ]
  },
  {
    "id": "smart-vec-illus-13",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Dot Product & Orthogonality",
    "subtopic": "Vector Projection",
    "difficulty": "Easy",
    "questionText": "Find the rectangular component of vector $\\vec{R} = 2\\hat{i} + 3\\hat{j}$ along $\\vec{A} = \\hat{i} + \\hat{j}$:",
    "options": [
      "\\frac{5}{2}(\\hat{i} + \\hat{j})",
      "5(\\hat{i} + \\hat{j})",
      "\\frac{5}{\\sqrt{2}}",
      "\\frac{1}{2}(\\hat{i} + \\hat{j})"
    ],
    "correctAnswer": 0,
    "explanation": "The vector component of $\\vec{R}$ along $\\vec{A}$ is given by $(\\vec{R} \\cdot \\hat{A})\\hat{A}$:\n$\\hat{A} = \\frac{\\hat{i} + \\hat{j}}{\\sqrt{1^2 + 1^2}} = \\frac{\\hat{i} + \\hat{j}}{\\sqrt{2}}$.\n$\\vec{R} \\cdot \\hat{A} = \\frac{(2)(1) + (3)(1)}{\\sqrt{2}} = \\frac{5}{\\sqrt{2}}$.\nComponent vector $= \\left(\\frac{5}{\\sqrt{2}}\\right)\\left(\\frac{\\hat{i} + \\hat{j}}{\\sqrt{2}}\\right) = \\frac{5}{2}(\\hat{i} + \\hat{j})$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Vector Projection"
    ]
  },
  {
    "id": "smart-vec-illus-14",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Dot Product & Orthogonality",
    "subtopic": "Angle Between Vectors",
    "difficulty": "Easy",
    "questionText": "Find the angle between the vectors $\\vec{A} = -2\\hat{i} + 6\\hat{j}$ and $\\vec{B} = 2\\hat{i} - 3\\hat{j}$:",
    "options": [
      "\\cos^{-1}\\left(-\\frac{11}{\\sqrt{130}}\\right)",
      "\\cos^{-1}\\left(\\frac{15}{17}\\right)",
      "90\u00b0",
      "\\cos^{-1}\\left(-\\frac{22}{\\sqrt{520}}\\right)"
    ],
    "correctAnswer": 0,
    "explanation": "$\\vec{A} \\cdot \\vec{B} = (-2)(2) + (6)(-3) = -4 - 18 = -22$.\n$|\\vec{A}| = \\sqrt{(-2)^2 + 6^2} = \\sqrt{40} = 2\\sqrt{10}$.\n$|\\vec{B}| = \\sqrt{2^2 + (-3)^2} = \\sqrt{13}$.\n$\\cos\\theta = \\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{A}||\\vec{B}|} = \\frac{-22}{2\\sqrt{10}\\sqrt{13}} = \\frac{-11}{\\sqrt{130}} \\implies \\theta = \\cos^{-1}\\left(-\\frac{11}{\\sqrt{130}}\\right)$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Dot Product Angle"
    ]
  },
  {
    "id": "smart-vec-illus-15",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Dot Product & Orthogonality",
    "subtopic": "Cube Diagonals",
    "difficulty": "Hard",
    "questionText": "A cube has edges along X, Y, and Z axes. Using vectors, find the angle between an edge $ab$ and the body diagonal from the origin to the opposite corner $ad$:",
    "diagramSvg": "<svg viewBox=\"0 0 240 220\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"60\" y1=\"160\" x2=\"160\" y2=\"160\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"60\" y1=\"160\" x2=\"60\" y2=\"60\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"60\" y1=\"60\" x2=\"160\" y2=\"60\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"160\" y1=\"160\" x2=\"160\" y2=\"60\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"60\" y1=\"160\" x2=\"30\" y2=\"195\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"160\" y1=\"160\" x2=\"130\" y2=\"195\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"60\" y1=\"60\" x2=\"30\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"160\" y1=\"60\" x2=\"130\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"195\" x2=\"130\" y2=\"195\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"95\" x2=\"130\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"195\" x2=\"30\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"130\" y1=\"195\" x2=\"130\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line x1=\"60\" y1=\"160\" x2=\"60\" y2=\"60\" stroke=\"#2563eb\" stroke-width=\"3\"/><text x=\"48\" y=\"110\" font-weight=\"bold\" fill=\"#2563eb\">ab</text><line x1=\"60\" y1=\"160\" x2=\"130\" y2=\"95\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"4,3\"/><text x=\"105\" y=\"120\" font-weight=\"bold\" fill=\"#dc2626\">ad</text></svg>",
    "options": [
      "\\cos^{-1}\\left(\\frac{1}{\\sqrt{3}}\\right)",
      "\\cos^{-1}\\left(\\sqrt{\\frac{2}{3}}\\right)",
      "\\cos^{-1}\\left(\\frac{1}{3}\\right)",
      "45\u00b0"
    ],
    "correctAnswer": 0,
    "explanation": "Let side of cube be $l$.\nEdge vector along y-axis: $\\vec{ab} = l\\hat{j}$.\nBody diagonal vector: $\\vec{ad} = l\\hat{i} + l\\hat{j} + l\\hat{k}$.\nDot product: $\\vec{ab} \\cdot \\vec{ad} = l(l) = l^2$.\nMagnitudes: $|\\vec{ab}| = l$, $|\\vec{ad}| = \\sqrt{l^2 + l^2 + l^2} = \\sqrt{3}l$.\n$\\cos\\theta_1 = \\frac{\\vec{ab} \\cdot \\vec{ad}}{|\\vec{ab}||\\vec{ad}|} = \\frac{l^2}{l(\\sqrt{3}l)} = \\frac{1}{\\sqrt{3}} \\implies \\theta_1 = \\cos^{-1}\\left(\\frac{1}{\\sqrt{3}}\\right)$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Cube Diagonal"
    ]
  },
  {
    "id": "smart-vec-illus-16",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Dot Product & Orthogonality",
    "subtopic": "Unknown Coplanar Vector",
    "difficulty": "Hard",
    "questionText": "You are given vectors $\\vec{A} = 5\\hat{i} - 6.5\\hat{j}$ and $\\vec{B} = 10\\hat{i} + 7\\hat{j}$. A third vector $\\vec{C}$ lies in the x-y plane, is perpendicular to $\\vec{A}$, and has $\\vec{C} \\cdot \\vec{B} = 15$. Find vector $\\vec{C}$:",
    "options": [
      "\\frac{39}{40}\\hat{i} - \\frac{3}{4}\\hat{j}",
      "\\frac{39}{40}\\hat{i} + \\frac{3}{4}\\hat{j}",
      "\\frac{3}{4}\\hat{i} - \\frac{39}{40}\\hat{j}",
      "-\\frac{39}{40}\\hat{i} + \\frac{3}{4}\\hat{j}"
    ],
    "correctAnswer": 1,
    "explanation": "Let $\\vec{C} = x\\hat{i} + y\\hat{j}$.\n1) $\\vec{C} \\perp \\vec{A} \\implies \\vec{C} \\cdot \\vec{A} = 0 \\implies 5x - 6.5y = 0 \\implies x = 1.3y = \\frac{13}{10}y$.\n2) $\\vec{C} \\cdot \\vec{B} = 15 \\implies 10x + 7y = 15$.\nSubstituting $x$: $10\\left(\\frac{13}{10}y\\right) + 7y = 15 \\implies 13y + 7y = 15 \\implies 20y = 15 \\implies y = \\frac{3}{4}$.\nThen $x = \\frac{13}{10}\\left(\\frac{3}{4}\\right) = \\frac{39}{40}$.\nTherefore, $\\vec{C} = \\frac{39}{40}\\hat{i} + \\frac{3}{4}\\hat{j}$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Simultaneous Vector Equations"
    ]
  },
  {
    "id": "smart-vec-illus-17",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Cross Product & Dot Product",
    "subtopic": "Cross Product Magnitude & Sine",
    "difficulty": "Medium",
    "questionText": "Two vectors $\\vec{A}$ and $\\vec{B}$ have magnitudes $A = 3$ and $B = 3$. Their vector product is $\\vec{A} \\times \\vec{B} = -5\\hat{k} - 2\\hat{i}$. What is the angle between $\\vec{A}$ and $\\vec{B}$?",
    "options": [
      "\\sin^{-1}\\left(\\frac{\\sqrt{29}}{9}\\right)",
      "\\sin^{-1}\\left(\\frac{\\sqrt{29}}{3}\\right)",
      "\\cos^{-1}\\left(\\frac{\\sqrt{29}}{9}\\right)",
      "30\u00b0"
    ],
    "correctAnswer": 0,
    "explanation": "$|\\vec{A} \\times \\vec{B}| = \\sqrt{(-2)^2 + (-5)^2} = \\sqrt{4 + 25} = \\sqrt{29}$.\nSince $|\\vec{A} \\times \\vec{B}| = AB\\sin\\theta$, we have:\n$\\sin\\theta = \\frac{|\\vec{A} \\times \\vec{B}|}{AB} = \\frac{\\sqrt{29}}{3 \\times 3} = \\frac{\\sqrt{29}}{9} \\implies \\theta = \\sin^{-1}\\left(\\frac{\\sqrt{29}}{9}\\right)$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Cross Product Sine"
    ]
  },
  {
    "id": "smart-vec-illus-18",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Cross Product & Dot Product",
    "subtopic": "Cross Product Magnitude",
    "difficulty": "Easy",
    "questionText": "Two vectors have magnitudes 5 units and 12 units. Find the magnitude of their cross product if the angle between them is 30\u00b0:",
    "options": [
      "30 units",
      "60 units",
      "30\\sqrt{3} units",
      "15 units"
    ],
    "correctAnswer": 0,
    "explanation": "$|\\vec{A} \\times \\vec{B}| = AB\\sin\\theta = 5 \\times 12 \\times \\sin 30^\\circ = 60 \\times \\frac{1}{2} = 30\\text{ units}$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Cross Product"
    ]
  },
  {
    "id": "smart-vec-illus-19",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Cross Product & Dot Product",
    "subtopic": "Area of Parallelogram & Triangle",
    "difficulty": "Medium",
    "questionText": "Given two vectors $\\vec{A} = 3\\hat{i} + \\hat{j} + \\hat{k}$ and $\\vec{B} = \\hat{i} - \\hat{j} - \\hat{k}$. Find the area of the triangle whose two sides are represented by $\\vec{A}$ and $\\vec{B}$:",
    "options": [
      "2\\sqrt{2} \\text{ units}",
      "4\\sqrt{2} \\text{ units}",
      "\\sqrt{2} \\text{ units}",
      "8 \\text{ units}"
    ],
    "correctAnswer": 0,
    "explanation": "$\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 3 & 1 & 1 \\\\ 1 & -1 & -1 \\end{vmatrix} = \\hat{i}(-1 - (-1)) - \\hat{j}(-3 - 1) + \\hat{k}(-3 - 1) = 0\\hat{i} + 4\\hat{j} - 4\\hat{k} = 4\\hat{j} - 4\\hat{k}$.\nMagnitude: $|\\vec{A} \\times \\vec{B}| = \\sqrt{4^2 + (-4)^2} = \\sqrt{32} = 4\\sqrt{2}$.\nArea of triangle $= \\frac{1}{2}|\\vec{A} \\times \\vec{B}| = \\frac{1}{2}(4\\sqrt{2}) = 2\\sqrt{2}\\text{ units}$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Area of Triangle"
    ]
  },
  {
    "id": "smart-vec-illus-20",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Reversal of Vector Force",
    "difficulty": "Medium",
    "questionText": "Two forces $\\vec{P}$ and $\\vec{Q}$ acting at a point are such that if $\\vec{P}$ is reversed, the direction of the resultant is turned through 90\u00b0. Then:",
    "options": [
      "P = Q",
      "P = 2Q",
      "P = Q/2",
      "P^2 + Q^2 = 1"
    ],
    "correctAnswer": 0,
    "explanation": "Initial resultant: $\\vec{R}_1 = \\vec{P} + \\vec{Q}$.\nReversed resultant: $\\vec{R}_2 = -\\vec{P} + \\vec{Q}$.\nSince $\\vec{R}_1 \\perp \\vec{R}_2$, their dot product is zero:\n$(\\vec{Q} + \\vec{P}) \\cdot (\\vec{Q} - \\vec{P}) = 0 \\implies Q^2 - P^2 = 0 \\implies P = Q$.\nThus, the magnitudes of the forces are equal.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Orthogonal Resultant"
    ]
  },
  {
    "id": "smart-vec-illus-21",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Resolution of Vectors",
    "subtopic": "Collinear Ratio",
    "difficulty": "Easy",
    "questionText": "Two vectors $\\vec{P} = 2\\hat{i} - b\\hat{j} + 2\\hat{k}$ and $\\vec{Q} = \\hat{i} + \\hat{j} + \\hat{k}$ are parallel. Find the value of $b$:",
    "options": [
      "-2",
      "2",
      "1",
      "-1"
    ],
    "correctAnswer": 0,
    "explanation": "For parallel vectors: $\\frac{P_x}{Q_x} = \\frac{P_y}{Q_y} = \\frac{P_z}{Q_z} \\implies \\frac{2}{1} = \\frac{-b}{1} = \\frac{2}{1} \\implies -b = 2 \\implies b = -2$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Parallel Vectors"
    ]
  },
  {
    "id": "smart-vec-illus-22",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "subtopic": "Coplanar Condition",
    "difficulty": "Medium",
    "questionText": "If the vectors $2\\hat{i} + 2\\hat{j} - 2\\hat{k}$, $5\\hat{i} + b\\hat{j} + \\hat{k}$, and $\\hat{i} + 2\\hat{j} + 2\\hat{k}$ are coplanar, find the value of $b$:",
    "options": [
      "7",
      "-7",
      "5",
      "3"
    ],
    "correctAnswer": 0,
    "explanation": "For three vectors to be coplanar, their scalar triple product (determinant) must be zero:\n$\\begin{vmatrix} 2 & 2 & -2 \\\\ 5 & b & 1 \\\\ 1 & 2 & 2 \\end{vmatrix} = 0$\n$2(2b - 2) - 2(10 - 1) - 2(10 - b) = 0$\n$4b - 4 - 18 - 20 + 2b = 0$\n$6b - 42 = 0 \\implies 6b = 42 \\implies b = 7$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Coplanar Vectors"
    ]
  },
  {
    "id": "smart-vec-illus-23",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Right Angled Triangle of Vectors",
    "difficulty": "Medium",
    "questionText": "The vectors $\\vec{P} = 3\\hat{i} - 2\\hat{j} + \\hat{k}$, $\\vec{Q} = \\hat{i} - 3\\hat{j} + 5\\hat{k}$, and $\\vec{R} = 2\\hat{i} + \\hat{j} - 4\\hat{k}$ form a triangle because $\\vec{P} = \\vec{Q} + \\vec{R}$. What type of triangle do they form?",
    "options": [
      "Equilateral triangle",
      "Isosceles triangle",
      "Right angled triangle",
      "Collinear segment"
    ],
    "correctAnswer": 2,
    "explanation": "$P^2 = 3^2 + (-2)^2 + 1^2 = 9 + 4 + 1 = 14$.\n$R^2 = 2^2 + 1^2 + (-4)^2 = 4 + 1 + 16 = 21$.\n$Q^2 = 1^2 + (-3)^2 + 5^2 = 1 + 9 + 25 = 35$.\nNotice that $P^2 + R^2 = 14 + 21 = 35 = Q^2$.\nSince the sum of the squares of two sides equals the square of the third side, by the converse of Pythagoras' theorem, they form a right angled triangle.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Right Angled Triangle"
    ]
  },
  {
    "id": "smart-vec-illus-24",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Dot Product & Orthogonality",
    "subtopic": "Scalar Product Calculation",
    "difficulty": "Easy",
    "questionText": "Find the dot product of two vectors $\\vec{A} = 3\\hat{i} + 2\\hat{j} - 4\\hat{k}$ and $\\vec{B} = 2\\hat{i} - 3\\hat{j} - 6\\hat{k}$:",
    "options": [
      "24",
      "12",
      "-24",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "$\\vec{A} \\cdot \\vec{B} = A_x B_x + A_y B_y + A_z B_z = (3)(2) + (2)(-3) + (-4)(-6) = 6 - 6 + 24 = 24$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Dot Product"
    ]
  },
  {
    "id": "smart-vec-illus-25",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Cross Product & Dot Product",
    "subtopic": "Ratio of Cross to Dot Product",
    "difficulty": "Easy",
    "questionText": "The magnitude of the vector product of two vectors is $\\sqrt{3}$ times their scalar product. What is the angle between the two vectors?",
    "options": [
      "30\u00b0",
      "45\u00b0",
      "60\u00b0",
      "90\u00b0"
    ],
    "correctAnswer": 2,
    "explanation": "$|\\vec{A} \\times \\vec{B}| = \\sqrt{3}(\\vec{A} \\cdot \\vec{B}) \\implies AB\\sin\\theta = \\sqrt{3}AB\\cos\\theta \\implies \\tan\\theta = \\sqrt{3} \\implies \\theta = 60^\\circ$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Angle Between Vectors"
    ]
  },
  {
    "id": "smart-vec-illus-26",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Dot Product & Orthogonality",
    "subtopic": "Scalar Projection",
    "difficulty": "Easy",
    "questionText": "Find the magnitude of the component of $3\\hat{i} - 2\\hat{j} + \\hat{k}$ along the vector $12\\hat{i} + 3\\hat{j} - 4\\hat{k}$:",
    "options": [
      "2",
      "26",
      "13",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "Component of $\\vec{R}$ along $\\vec{A}$ is $\\frac{\\vec{R} \\cdot \\vec{A}}{|\\vec{A}|}$:\n$\\vec{R} \\cdot \\vec{A} = (3)(12) + (-2)(3) + (1)(-4) = 36 - 6 - 4 = 26$.\n$|\\vec{A}| = \\sqrt{12^2 + 3^2 + (-4)^2} = \\sqrt{144 + 9 + 16} = \\sqrt{169} = 13$.\nComponent $= \\frac{26}{13} = 2$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Component Along Vector"
    ]
  },
  {
    "id": "smart-vec-illus-27",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Altered Forces at Right Angles",
    "difficulty": "Medium",
    "questionText": "The greatest and least resultants of two forces acting at a point are 10 N and 6 N respectively. If each force is increased by 3 N, find the resultant of the new forces when acting at 90\u00b0 with each other:",
    "options": [
      "\\sqrt{146}\\text{ N}",
      "16\\text{ N}",
      "12\\text{ N}",
      "\\sqrt{120}\\text{ N}"
    ],
    "correctAnswer": 0,
    "explanation": "$A + B = 10\\text{ N}$ and $A - B = 6\\text{ N} \\implies 2A = 16 \\implies A = 8\\text{ N}$, $B = 2\\text{ N}$.\nWhen each force is increased by 3 N:\n$A' = 8 + 3 = 11\\text{ N}$ and $B' = 2 + 3 = 5\\text{ N}$.\nAt $90^\\circ$: $R = \\sqrt{A'^2 + B'^2 + 2A'B'\\cos 90^\\circ} = \\sqrt{11^2 + 5^2} = \\sqrt{121 + 25} = \\sqrt{146}\\text{ N}$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Force Addition"
    ]
  },
  {
    "id": "smart-vec-illus-28",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Resolution of Vectors",
    "subtopic": "Projection along Vector",
    "difficulty": "Medium",
    "questionText": "Given $\\vec{A} = \\hat{i} - 2\\hat{j}$, $\\vec{B} = 2\\hat{i} + 3\\hat{k}$, and $\\vec{C} = \\hat{i} + \\hat{j}$. Find the component of $(\\vec{A} + \\vec{B})$ along $\\vec{C}$:",
    "options": [
      "\\frac{1}{\\sqrt{2}}",
      "\\sqrt{2}",
      "3",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "$\\vec{R} = \\vec{A} + \\vec{B} = (1+2)\\hat{i} - 2\\hat{j} + 3\\hat{k} = 3\\hat{i} - 2\\hat{j} + 3\\hat{k}$.\nComponent of $\\vec{R}$ along $\\vec{C} = \\hat{i} + \\hat{j}$ is $\\frac{\\vec{R} \\cdot \\vec{C}}{|\\vec{C}|}$:\n$\\vec{R} \\cdot \\vec{C} = (3)(1) + (-2)(1) + (3)(0) = 3 - 2 = 1$.\n$|\\vec{C}| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.\nComponent $= \\frac{1}{\\sqrt{2}}$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Projection along Vector"
    ]
  },
  {
    "id": "smart-vec-illus-29",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Vectors on Circle Radius",
    "difficulty": "Medium",
    "questionText": "Find the resultant of three vectors $\\vec{OA}$, $\\vec{OB}$, and $\\vec{OC}$ where O is the center of a circle of radius R, OA and OC are along perpendicular radii, and OB bisects the angle between them at 45\u00b0:",
    "diagramSvg": "<svg viewBox=\"0 0 240 220\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr29\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#2563eb\"/></marker></defs><path d=\"M 180,140 A 60 60 0 0 0 120,80\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/><line x1=\"120\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr29)\"/><text x=\"185\" y=\"145\" font-weight=\"bold\" font-size=\"12\">A</text><line x1=\"120\" y1=\"140\" x2=\"162\" y2=\"98\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr29)\"/><text x=\"168\" y=\"95\" font-weight=\"bold\" font-size=\"12\">B</text><line x1=\"120\" y1=\"140\" x2=\"120\" y2=\"80\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr29)\"/><text x=\"115\" y=\"72\" font-weight=\"bold\" font-size=\"12\">C</text><circle cx=\"120\" cy=\"140\" r=\"3.5\" fill=\"#0f172a\"/><text x=\"108\" y=\"152\" font-weight=\"bold\" font-size=\"12\">O</text><path d=\"M 140,140 A 20 20 0 0 0 134,126\" fill=\"none\" stroke=\"#0f172a\"/><text x=\"142\" y=\"132\" font-size=\"10\">45\u00b0</text><path d=\"M 134,126 A 20 20 0 0 0 120,120\" fill=\"none\" stroke=\"#0f172a\"/><text x=\"126\" y=\"116\" font-size=\"10\">45\u00b0</text></svg>",
    "options": [
      "R(\\sqrt{2} + 1)",
      "2R",
      "R\\sqrt{2}",
      "3R"
    ],
    "correctAnswer": 0,
    "explanation": "Since $\\vec{OA}$ and $\\vec{OC}$ are equal in magnitude ($R$) and perpendicular ($90^\\circ$), their resultant is $\\sqrt{R^2 + R^2} = R\\sqrt{2}$ directed along the angle bisector (45\u00b0), which is along $\\vec{OB}$.\nSince $\\vec{OB}$ also has magnitude $R$ and points in the same direction:\nTotal resultant $= R\\sqrt{2} + R = R(\\sqrt{2} + 1)$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Circle Radii Vectors"
    ]
  },
  {
    "id": "smart-vec-illus-30",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Cyclic Forces on Square",
    "difficulty": "Medium",
    "questionText": "Four forces of magnitudes P, 2P, 3P, and 4P act along the four sides of a square ABCD in cyclic order. Use the vector method to find the resultant force:",
    "diagramSvg": "<svg viewBox=\"0 0 240 220\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr30\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#2563eb\"/></marker><marker id=\"arr30r\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#dc2626\"/></marker></defs><rect x=\"60\" y=\"50\" width=\"100\" height=\"100\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/><line x1=\"60\" y1=\"150\" x2=\"160\" y2=\"150\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr30)\"/><text x=\"105\" y=\"168\" font-weight=\"bold\" font-size=\"12\">P</text><line x1=\"160\" y1=\"150\" x2=\"160\" y2=\"50\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr30)\"/><text x=\"168\" y=\"105\" font-weight=\"bold\" font-size=\"12\">2P</text><line x1=\"160\" y1=\"50\" x2=\"60\" y2=\"50\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr30)\"/><text x=\"105\" y=\"42\" font-weight=\"bold\" font-size=\"12\">3P</text><line x1=\"60\" y1=\"50\" x2=\"60\" y2=\"150\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr30)\"/><text x=\"38\" y=\"105\" font-weight=\"bold\" font-size=\"12\">4P</text></svg>",
    "options": [
      "2\\sqrt{2}P",
      "4P",
      "10P",
      "\\sqrt{2}P"
    ],
    "correctAnswer": 0,
    "explanation": "Taking sides of square along x and y directions:\n$F_x = P\\hat{i} - 3P\\hat{i} = -2P\\hat{i}$\n$F_y = 2P\\hat{j} - 4P\\hat{j} = -2P\\hat{j}$\nResultant magnitude: $R = \\sqrt{(-2P)^2 + (-2P)^2} = \\sqrt{4P^2 + 4P^2} = \\sqrt{8P^2} = 2\\sqrt{2}P$.\nDirection: $\\theta = 45^\\circ$ in the third quadrant.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Cyclic Forces on Square"
    ]
  },
  {
    "id": "smart-vec-illus-31",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Dot Product & Orthogonality",
    "subtopic": "Angle Between Sum and Difference",
    "difficulty": "Medium",
    "questionText": "Obtain the angle between $\\vec{A} + \\vec{B}$ and $\\vec{A} - \\vec{B}$ if $\\vec{A} = 2\\hat{i} + 3\\hat{j}$ and $\\vec{B} = \\hat{i} - 2\\hat{j}$:",
    "options": [
      "\\cos^{-1}\\left(\\frac{8}{\\sqrt{260}}\\right)",
      "\\cos^{-1}\\left(\\frac{8}{\\sqrt{130}}\\right)",
      "90\u00b0",
      "45\u00b0"
    ],
    "correctAnswer": 0,
    "explanation": "$\\vec{A} + \\vec{B} = (2+1)\\hat{i} + (3-2)\\hat{j} = 3\\hat{i} + \\hat{j} \\implies |\\vec{A} + \\vec{B}| = \\sqrt{3^2 + 1^2} = \\sqrt{10}$.\n$\\vec{A} - \\vec{B} = (2-1)\\hat{i} + (3 - (-2))\\hat{j} = \\hat{i} + 5\\hat{j} \\implies |\\vec{A} - \\vec{B}| = \\sqrt{1^2 + 5^2} = \\sqrt{26}$.\nDot product: $(\\vec{A} + \\vec{B}) \\cdot (\\vec{A} - \\vec{B}) = (3)(1) + (1)(5) = 3 + 5 = 8$.\n$\\cos\\theta = \\frac{8}{\\sqrt{10}\\sqrt{26}} = \\frac{8}{\\sqrt{260}} \\implies \\theta = \\cos^{-1}\\left(\\frac{8}{\\sqrt{260}}\\right)$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Angle Between Sum and Difference"
    ]
  },
  {
    "id": "smart-vec-illus-32",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Multiple Vector Addition",
    "difficulty": "Medium",
    "questionText": "Find the resultant of three vectors: 5 m at 37\u00b0 to +x axis, 3 m along +x axis, and 2 m along +y axis (take $\\cos 37^\\circ = 4/5, \\sin 37^\\circ = 3/5$):",
    "diagramSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr32\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#2563eb\"/></marker></defs><line x1=\"30\" y1=\"140\" x2=\"100\" y2=\"80\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr32)\"/><text x=\"50\" y=\"100\" font-size=\"11\">5 m</text><path d=\"M 55,140 A 25 25 0 0 0 50,123\" fill=\"none\" stroke=\"#0f172a\"/><text x=\"58\" y=\"135\" font-size=\"10\">37\u00b0</text><line x1=\"100\" y1=\"80\" x2=\"160\" y2=\"80\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr32)\"/><text x=\"125\" y=\"72\" font-size=\"11\">3 m</text><line x1=\"160\" y1=\"80\" x2=\"160\" y2=\"30\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr32)\"/><text x=\"165\" y=\"55\" font-size=\"11\">2 m</text></svg>",
    "options": [
      "\\sqrt{74}\\text{ units}",
      "10\\text{ units}",
      "7\\text{ units}",
      "\\sqrt{50}\\text{ units}"
    ],
    "correctAnswer": 0,
    "explanation": "$R_x = 5\\cos 37^\\circ + 3 + 0 = 5(4/5) + 3 = 4 + 3 = 7\\text{ m}$.\n$R_y = 5\\sin 37^\\circ + 0 + 2 = 5(3/5) + 2 = 3 + 2 = 5\\text{ m}$.\nResultant magnitude: $R = \\sqrt{R_x^2 + R_y^2} = \\sqrt{7^2 + 5^2} = \\sqrt{49 + 25} = \\sqrt{74}\\text{ units}$.\nAngle with x-axis: $\\theta = \\tan^{-1}(5/7)$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Resultant of 3 Vectors"
    ]
  },
  {
    "id": "smart-vec-illus-34",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Resolution of Vectors",
    "subtopic": "Forces on Inclined Plane",
    "difficulty": "Medium",
    "questionText": "A body on a 30\u00b0 inclined plane is subjected to normal force $N$. What is the vertical (along OY) component of $N$?",
    "diagramSvg": "<svg viewBox=\"0 0 240 200\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr34\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#2563eb\"/></marker></defs><polygon points=\"30,170 200,170 200,72\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><path d=\"M 65,170 A 35 35 0 0 0 60,152\" fill=\"none\" stroke=\"#0f172a\"/><text x=\"70\" y=\"164\" font-size=\"11\">30\u00b0</text><rect x=\"100\" y=\"100\" width=\"35\" height=\"25\" fill=\"#e2e8f0\" stroke=\"#0f172a\" stroke-width=\"1.5\" transform=\"rotate(-30 117 112)\"/><line x1=\"117\" y1=\"112\" x2=\"92\" y2=\"68\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr34)\"/><text x=\"75\" y=\"70\" font-weight=\"bold\" font-size=\"12\">N</text></svg>",
    "options": [
      "N\\sin 60^\\circ = N\\frac{\\sqrt{3}}{2}",
      "N\\cos 60^\\circ = \\frac{N}{2}",
      "N",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "The normal force $N$ is perpendicular to the inclined plane (which is inclined at 30\u00b0 to the horizontal).\nTherefore, $N$ makes an angle of $30^\\circ$ with the vertical, or $60^\\circ$ with the horizontal.\nThe vertical (along OY) component is $N\\cos 30^\\circ = N\\sin 60^\\circ = N\\frac{\\sqrt{3}}{2}$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Inclined Plane Resolution"
    ]
  },
  {
    "id": "smart-vec-illus-35",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Resolution of Vectors",
    "subtopic": "Weight Components Along Incline",
    "difficulty": "Medium",
    "questionText": "For a block resting on a plane inclined at 30\u00b0 to the horizontal, what are the components of weight $W$ along the inclined plane (downwards) and perpendicular to the inclined plane (into the plane) respectively?",
    "diagramSvg": "<svg viewBox=\"0 0 240 200\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr35\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#2563eb\"/></marker><marker id=\"arr35red\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#dc2626\"/></marker></defs><polygon points=\"30,170 200,170 200,72\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><text x=\"70\" y=\"164\" font-size=\"11\">30\u00b0</text><rect x=\"100\" y=\"100\" width=\"35\" height=\"25\" fill=\"#e2e8f0\" stroke=\"#0f172a\" stroke-width=\"1.5\" transform=\"rotate(-30 117 112)\"/><line x1=\"117\" y1=\"112\" x2=\"117\" y2=\"170\" stroke=\"#dc2626\" stroke-width=\"2.5\" marker-end=\"url(#arr35red)\"/><text x=\"122\" y=\"160\" font-weight=\"bold\" fill=\"#dc2626\" font-size=\"12\">W</text></svg>",
    "options": [
      "-W\\cos 60^\\circ = -\\frac{W}{2} \\text{ and } -W\\sin 60^\\circ = -W\\frac{\\sqrt{3}}{2}",
      "-W\\sin 60^\\circ \\text{ and } -W\\cos 60^\\circ",
      "W \\text{ and } 0",
      "\\frac{W}{2} \\text{ and } \\frac{W}{2}"
    ],
    "correctAnswer": 0,
    "explanation": "Taking OX along the incline upwards and OY perpendicular to the incline upwards:\nWeight $W$ acts vertically downwards.\nThe component parallel to the incline directed downwards is $-W\\sin 30^\\circ = -W\\cos 60^\\circ = -\\frac{W}{2}$.\nThe component perpendicular to the incline directed into the plane is $-W\\cos 30^\\circ = -W\\sin 60^\\circ = -W\\frac{\\sqrt{3}}{2}$.",
    "tags": [
      "Vectors",
      "Illustrations",
      "Weight Resolution on Incline"
    ]
  }
];
