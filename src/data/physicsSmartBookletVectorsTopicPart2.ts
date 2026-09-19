import { Question } from '../types';

export const PHYSICS_SMART_BOOKLET_VECTORS_TOPIC_PART2_QUESTIONS: Question[] = [
  {
    "id": "smart-vec-topic-36",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Perpendicular Sum and Difference",
    "difficulty": "Easy",
    "questionText": "The vector sum of two forces is perpendicular to their vector difference. The forces are:",
    "options": [
      "Equal to each other",
      "Equal to each other in magnitude",
      "Not equal to each other in magnitude",
      "Cannot be predicted"
    ],
    "correctAnswer": 1,
    "explanation": "Let the two forces be $\\vec{A}$ and $\\vec{B}$.\nGiven $(\\vec{A} + \\vec{B}) \\perp (\\vec{A} - \\vec{B})$, their dot product is zero:\n$(\\vec{A} + \\vec{B}) \\cdot (\\vec{A} - \\vec{B}) = A^2 - B^2 = 0 \\implies A^2 = B^2 \\implies A = B$.\nHence, the two forces have equal magnitudes ($|\\vec{A}| = |\\vec{B}|$). They are not necessarily equal vectors since their directions may differ.",
    "tags": [
      "Vectors",
      "Perpendicular Vectors",
      "Equal Magnitudes"
    ]
  },
  {
    "id": "smart-vec-topic-37",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Parallelogram Diagonals",
    "difficulty": "Easy",
    "questionText": "If a parallelogram is formed with two sides represented by vectors $\\vec{a}$ and $\\vec{b}$, then $\\vec{a} + \\vec{b}$ represents the:",
    "options": [
      "Major diagonal when the angle between vectors is acute",
      "Minor diagonal when the angle between vectors is obtuse",
      "Both of the above",
      "None of the above"
    ],
    "correctAnswer": 2,
    "explanation": "\u2022 When the angle $\\theta$ between $\\vec{a}$ and $\\vec{b}$ is acute ($\\theta < 90^\\circ$), $\\cos\\theta > 0$, so $|\\vec{a} + \\vec{b}| = \\sqrt{a^2+b^2+2ab\\cos\\theta} > |\\vec{a} - \\vec{b}|$. Thus $\\vec{a} + \\vec{b}$ is the major (longer) diagonal.\n\u2022 When the angle $\\theta$ is obtuse ($\\theta > 90^\\circ$), $\\cos\\theta < 0$, so $|\\vec{a} + \\vec{b}| < |\\vec{a} - \\vec{b}|$. Thus $\\vec{a} + \\vec{b}$ is the minor (shorter) diagonal.\nTherefore, both statements (1) and (2) are correct.",
    "tags": [
      "Vectors",
      "Parallelogram Law",
      "Major and Minor Diagonals"
    ]
  },
  {
    "id": "smart-vec-topic-38",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Perpendicular Resultant",
    "difficulty": "Medium",
    "questionText": "The resultant $\\vec{C}$ of $\\vec{A}$ and $\\vec{B}$ is perpendicular to $\\vec{A}$. Also, $|\\vec{A}| = |\\vec{C}|$. The angle between $\\vec{A}$ and $\\vec{B}$ is:",
    "options": [
      "\\frac{\\pi}{4} \\text{ rad}",
      "\\frac{3\\pi}{4} \\text{ rad}",
      "\\frac{5\\pi}{4} \\text{ rad}",
      "\\frac{7\\pi}{4} \\text{ rad}"
    ],
    "correctAnswer": 1,
    "explanation": "In the vector triangle, $\\vec{C} = \\vec{A} + \\vec{B}$ with $\\vec{C} \\perp \\vec{A}$.\nLet $\\theta'$ be the angle between $\\vec{A}$ and $-\\vec{B}$ in the triangle:\n$\\tan \\theta' = \\frac{C}{A} = 1 \\implies \\theta' = 45^\\circ = \\frac{\\pi}{4}\\text{ rad}$.\nThe exterior angle between vectors $\\vec{A}$ and $\\vec{B}$ is $\\theta = 180^\\circ - 45^\\circ = 135^\\circ = \\frac{3\\pi}{4}\\text{ rad}$.",
    "tags": [
      "Vectors",
      "Perpendicular Resultant",
      "Angle in Radians"
    ]
  },
  {
    "id": "smart-vec-topic-39",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Relative Direction",
    "difficulty": "Medium",
    "questionText": "Two forces $\\vec{F}_1 = 500\\text{ N}$ due east and $\\vec{F}_2 = 250\\text{ N}$ due north have their common initial point. $\\vec{F}_2 - \\vec{F}_1$ is:",
    "options": [
      "250\\sqrt{5}\\text{ N}, \\tan^{-1}(2)\\text{ W of N}",
      "250\\text{ N}, \\tan^{-1}(2)\\text{ W of N}",
      "Zero",
      "750\\text{ N}, \\tan^{-1}(3/4)\\text{ N of W}"
    ],
    "correctAnswer": 0,
    "explanation": "$\\vec{F}_1 = 500\\hat{i}\\text{ N}$ (East), $\\vec{F}_2 = 250\\hat{j}\\text{ N}$ (North).\n$\\vec{F}_2 - \\vec{F}_1 = -500\\hat{i} + 250\\hat{j}\\text{ N}$ (North and West).\nMagnitude: $|\\vec{F}_2 - \\vec{F}_1| = \\sqrt{(-500)^2 + (250)^2} = 250\\sqrt{2^2 + 1^2} = 250\\sqrt{5}\\text{ N}$.\nDirection: with the North (+y) axis towards West (-x), $\\tan \\theta = \\frac{500}{250} = 2 \\implies \\theta = \\tan^{-1}(2)\\text{ West of North}$.",
    "tags": [
      "Vectors",
      "Vector Subtraction",
      "Cardinal Directions"
    ]
  },
  {
    "id": "smart-vec-topic-40",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Symmetric Vectors in Circle",
    "difficulty": "Medium",
    "questionText": "The resultant of the three vectors $\\vec{OA}$, $\\vec{OB}$, and $\\vec{OC}$ shown in the figure is:",
    "diagramSvg": "<svg viewBox=\"0 0 240 220\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr40\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#2563eb\"/></marker></defs><circle cx=\"120\" cy=\"120\" r=\"75\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"120\" y1=\"120\" x2=\"120\" y2=\"45\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr40)\"/><text x=\"112\" y=\"38\" font-weight=\"bold\" font-size=\"13\">A</text><line x1=\"120\" y1=\"120\" x2=\"173\" y2=\"67\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr40)\"/><text x=\"180\" y=\"65\" font-weight=\"bold\" font-size=\"13\">B</text><line x1=\"120\" y1=\"120\" x2=\"195\" y2=\"120\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr40)\"/><text x=\"202\" y=\"125\" font-weight=\"bold\" font-size=\"13\">C</text><circle cx=\"120\" cy=\"120\" r=\"3.5\" fill=\"#0f172a\"/><text x=\"108\" y=\"132\" font-weight=\"bold\" font-size=\"13\">O</text><text x=\"145\" y=\"115\" font-size=\"10\" fill=\"#475569\">r</text><text x=\"132\" y=\"92\" font-size=\"10\" fill=\"#475569\">r</text><text x=\"110\" y=\"80\" font-size=\"10\" fill=\"#475569\">r</text><path d=\"M 135,120 A 15 15 0 0 0 131,109\" fill=\"none\" stroke=\"#0f172a\"/><text x=\"138\" y=\"112\" font-size=\"10\">45\u00b0</text><path d=\"M 131,109 A 15 15 0 0 0 120,105\" fill=\"none\" stroke=\"#0f172a\"/><text x=\"122\" y=\"98\" font-size=\"10\">45\u00b0</text></svg>",
    "options": [
      "r",
      "2r",
      "r(1 + \\sqrt{2})",
      "r(\\sqrt{2} - 1)"
    ],
    "correctAnswer": 2,
    "explanation": "The vectors $\\vec{OA}$ and $\\vec{OC}$ are mutually perpendicular ($90^\\circ$) each having magnitude $r$.\nTheir resultant is $\\vec{R}_{AC} = \\sqrt{r^2 + r^2} = r\\sqrt{2}$ directed along the angle bisector (45\u00b0), which lies exactly along $\\vec{OB}$.\nThe vector $\\vec{OB}$ also has magnitude $r$ and points in this identical direction.\nNet resultant $= r\\sqrt{2} + r = r(1 + \\sqrt{2})$ directed along $\\vec{OB}$.",
    "tags": [
      "Vectors",
      "Circle Geometry",
      "Resultant Addition"
    ]
  },
  {
    "id": "smart-vec-topic-41",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Angle of Resultant",
    "difficulty": "Medium",
    "questionText": "Two vectors $\\vec{a}$ and $\\vec{b}$ are at an angle of 60\u00b0 with each other. Their resultant makes an angle of 45\u00b0 with $\\vec{a}$. If $|\\vec{b}| = 2\\text{ units}$, then $|\\vec{a}|$ is:",
    "options": [
      "\\sqrt{3}",
      "\\sqrt{3} - 1",
      "\\sqrt{3} + 1",
      "\\sqrt{3}/2"
    ],
    "correctAnswer": 1,
    "explanation": "Formula for direction of resultant with vector $\\vec{a}$:\n$\\tan \\alpha = \\frac{b\\sin\\theta}{a + b\\cos\\theta}$\nHere $\\alpha = 45^\\circ$, $\\theta = 60^\\circ$, $b = 2$:\n$\\tan 45^\\circ = \\frac{2\\sin 60^\\circ}{a + 2\\cos 60^\\circ} \\implies 1 = \\frac{2(\\sqrt{3}/2)}{a + 2(1/2)} = \\frac{\\sqrt{3}}{a + 1}$\n$a + 1 = \\sqrt{3} \\implies a = \\sqrt{3} - 1\\text{ units}$.",
    "tags": [
      "Vectors",
      "Direction of Resultant",
      "Trigonometric Resolution"
    ]
  },
  {
    "id": "smart-vec-topic-42",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Doubling Vectors",
    "difficulty": "Hard",
    "questionText": "The resultant of two vectors $\\vec{P}$ and $\\vec{Q}$ is $\\vec{R}$. If the magnitude of $\\vec{Q}$ is doubled, the new resultant vector becomes perpendicular to $\\vec{P}$. Then, the magnitude of $\\vec{R}$ is equal to:",
    "options": [
      "P + Q",
      "P",
      "P - Q",
      "Q"
    ],
    "correctAnswer": 3,
    "explanation": "When $\\vec{Q}$ is doubled to $2\\vec{Q}$, the angle with $\\vec{P}$ is $\\alpha = 90^\\circ$:\n$\\tan 90^\\circ = \\frac{2Q\\sin\\theta}{P + 2Q\\cos\\theta} = \\infty \\implies P + 2Q\\cos\\theta = 0 \\implies 2Q\\cos\\theta = -P$.\nNow, the magnitude of the original resultant $\\vec{R}$ is:\n$R^2 = P^2 + Q^2 + 2PQ\\cos\\theta = P^2 + Q^2 + P(2Q\\cos\\theta) = P^2 + Q^2 + P(-P) = Q^2$.\nTherefore, $R = Q$.",
    "tags": [
      "Vectors",
      "Perpendicular Condition",
      "Resultant Proof"
    ]
  },
  {
    "id": "smart-vec-topic-43",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Vector Difference",
    "difficulty": "Easy",
    "questionText": "A vector $\\vec{A}$ when added to the vector $\\vec{B} = 3\\hat{i} + 4\\hat{j}$ yields a resultant vector that is in the positive y-direction and has a magnitude equal to that of $\\vec{B}$. Find the magnitude of $\\vec{A}$:",
    "options": [
      "\\sqrt{10}",
      "10",
      "5",
      "\\sqrt{15}"
    ],
    "correctAnswer": 0,
    "explanation": "Magnitude of $\\vec{B}$: $|\\vec{B}| = \\sqrt{3^2 + 4^2} = 5$.\nResultant $\\vec{C}$ is along $+y$ with magnitude 5, so $\\vec{C} = 5\\hat{j}$.\n$\\vec{A} + \\vec{B} = \\vec{C} \\implies \\vec{A} = 5\\hat{j} - (3\\hat{i} + 4\\hat{j}) = -3\\hat{i} + \\hat{j}$.\nMagnitude: $|\\vec{A}| = \\sqrt{(-3)^2 + 1^2} = \\sqrt{9 + 1} = \\sqrt{10}$.",
    "tags": [
      "Vectors",
      "Vector Components",
      "Magnitude"
    ]
  },
  {
    "id": "smart-vec-topic-44",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "subtopic": "Regular Hexagon Vectors",
    "difficulty": "Medium",
    "questionText": "ABCDEF is a regular hexagon with point O as its center. The value of $\\vec{AB} + \\vec{AC} + \\vec{AD} + \\vec{AE} + \\vec{AF}$ is:",
    "options": [
      "2\\vec{AO}",
      "4\\vec{AO}",
      "6\\vec{AO}",
      "0"
    ],
    "correctAnswer": 2,
    "explanation": "In a regular hexagon with center O:\n\u2022 $\\vec{AD} = 2\\vec{AO}$ (since AD is the main diameter passing through O).\n\u2022 By vector addition: $\\vec{AC} = \\vec{AB} + \\vec{BC} = \\vec{AB} + \\vec{AO}$.\n\u2022 $\\vec{AE} = \\vec{AF} + \\vec{FE} = \\vec{AF} + \\vec{AO}$.\n\u2022 Also, $\\vec{AB} + \\vec{AF} = \\vec{AO}$.\nSumming all terms:\n$\\vec{AB} + \\vec{AC} + \\vec{AD} + \\vec{AE} + \\vec{AF} = \\vec{AB} + (\\vec{AB} + \\vec{AO}) + 2\\vec{AO} + (\\vec{AF} + \\vec{AO}) + \\vec{AF}$\n$= 4\\vec{AO} + 2(\\vec{AB} + \\vec{AF}) = 4\\vec{AO} + 2(\\vec{AO}) = 6\\vec{AO}$.",
    "tags": [
      "Vectors",
      "Regular Hexagon",
      "Vector Polygon"
    ]
  },
  {
    "id": "smart-vec-topic-45",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Displacement Vector",
    "difficulty": "Medium",
    "questionText": "In a two-dimensional motion, a particle moves from point A with position vector $\\vec{r}_1$ to point B with position vector $\\vec{r}_2$. If $r_1 = 3$, $r_2 = 4$, and the angles they make with the x-axis are $\\theta_1 = 75^\\circ$ and $\\theta_2 = 15^\\circ$ respectively, find the magnitude of the displacement vector:",
    "diagramSvg": "<svg viewBox=\"0 0 260 200\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr45\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#2563eb\"/></marker><marker id=\"arr45d\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#dc2626\"/></marker></defs><line x1=\"40\" y1=\"160\" x2=\"240\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><text x=\"245\" y=\"165\" font-size=\"12\">x</text><line x1=\"40\" y1=\"160\" x2=\"40\" y2=\"20\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><text x=\"35\" y=\"15\" font-size=\"12\">y</text><line x1=\"40\" y1=\"160\" x2=\"100\" y2=\"45\" stroke=\"#2563eb\" stroke-width=\"2\" marker-end=\"url(#arr45)\"/><text x=\"55\" y=\"95\" font-weight=\"bold\" font-size=\"13\">r\u2081</text><text x=\"105\" y=\"40\" font-weight=\"bold\" font-size=\"13\">A</text><line x1=\"40\" y1=\"160\" x2=\"185\" y2=\"90\" stroke=\"#2563eb\" stroke-width=\"2\" marker-end=\"url(#arr45)\"/><text x=\"130\" y=\"135\" font-weight=\"bold\" font-size=\"13\">r\u2082</text><text x=\"190\" y=\"90\" font-weight=\"bold\" font-size=\"13\">B</text><line x1=\"100\" y1=\"45\" x2=\"185\" y2=\"90\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"3,3\" marker-end=\"url(#arr45d)\"/><path d=\"M 70,160 A 30 30 0 0 0 68,145\" fill=\"none\" stroke=\"#0f172a\"/><text x=\"72\" y=\"152\" font-size=\"10\">\u03b8\u2082</text><path d=\"M 60,160 A 20 20 0 0 0 50,135\" fill=\"none\" stroke=\"#0f172a\"/><text x=\"48\" y=\"128\" font-size=\"10\">\u03b8\u2081</text></svg>",
    "options": [
      "15",
      "\\sqrt{13}",
      "17",
      "\\sqrt{15}"
    ],
    "correctAnswer": 1,
    "explanation": "The angle between the two position vectors is $\\theta = \\theta_1 - \\theta_2 = 75^\\circ - 15^\\circ = 60^\\circ$.\nThe displacement vector is $\\Delta\\vec{r} = \\vec{r}_2 - \\vec{r}_1$.\nMagnitude $|\\Delta\\vec{r}| = \\sqrt{r_1^2 + r_2^2 - 2r_1r_2\\cos 60^\\circ} = \\sqrt{3^2 + 4^2 - 2(3)(4)(1/2)} = \\sqrt{9 + 16 - 12} = \\sqrt{13}$.",
    "tags": [
      "Vectors",
      "Displacement",
      "Cosine Law"
    ]
  },
  {
    "id": "smart-vec-topic-46",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Perpendicular Resultant",
    "difficulty": "Medium",
    "questionText": "The sum of the magnitudes of two forces acting at a point is 16 N. The resultant of these forces is perpendicular to the smaller force and has a magnitude of 8 N. If the smaller force is of magnitude x, then the value of x is:",
    "options": [
      "2 N",
      "4 N",
      "6 N",
      "7 N"
    ],
    "correctAnswer": 2,
    "explanation": "Let the smaller force be $x$ and the larger force be $y$. Given $x + y = 16 \\implies y = 16 - x$.\nSince the resultant $R = 8\\text{ N}$ is perpendicular to the smaller force $x$, the forces form a right-angled triangle where the larger force $y$ is the hypotenuse:\n$y^2 = x^2 + R^2 \\implies (16 - x)^2 = x^2 + 8^2$\n$256 - 32x + x^2 = x^2 + 64 \\implies 32x = 256 - 64 = 192 \\implies x = 6\\text{ N}$.",
    "tags": [
      "Vectors",
      "Forces",
      "Right Triangle"
    ]
  },
  {
    "id": "smart-vec-topic-47",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Angle Bisector Resultant",
    "difficulty": "Easy",
    "questionText": "The angle between two vectors $\\vec{A}$ and $\\vec{B}$ is $\\theta$. The resultant $\\vec{R}$ of these vectors makes an angle of $\\theta/2$ with $\\vec{A}$. Which of the following is true?",
    "options": [
      "A = 2B",
      "A = B/2",
      "A = B",
      "AB = 1"
    ],
    "correctAnswer": 2,
    "explanation": "Using the direction formula for the resultant: $\\tan(\\theta/2) = \\frac{B\\sin\\theta}{A + B\\cos\\theta}$.\nExpressing $\\sin\\theta = 2\\sin(\\theta/2)\\cos(\\theta/2)$ and $\\cos\\theta = 2\\cos^2(\\theta/2) - 1$:\n$\\frac{\\sin(\\theta/2)}{\\cos(\\theta/2)} = \\frac{2B\\sin(\\theta/2)\\cos(\\theta/2)}{A + B[2\\cos^2(\\theta/2) - 1]}$\nCross-multiplying gives $A + 2B\\cos^2(\\theta/2) - B = 2B\\cos^2(\\theta/2) \\implies A - B = 0 \\implies A = B$.\nHence, the resultant bisects the angle between two vectors if and only if their magnitudes are equal.",
    "tags": [
      "Vectors",
      "Angle Bisector",
      "Equal Magnitudes"
    ]
  },
  {
    "id": "smart-vec-topic-48",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Equilateral Triangle Sides",
    "difficulty": "Hard",
    "questionText": "The resultant of three vectors 1, 2, and 3 units whose directions are along the sides of an equilateral triangle taken in order is at an angle of:",
    "options": [
      "30\u00b0 with the first vector",
      "15\u00b0 with the first vector",
      "100\u00b0 with the first vector",
      "150\u00b0 with the first vector"
    ],
    "correctAnswer": 3,
    "explanation": "Taking the first vector of magnitude 1 along the positive x-axis (0\u00b0):\n\u2022 Second vector of magnitude 2 is at $120^\\circ$.\n\u2022 Third vector of magnitude 3 is at $240^\\circ$.\nResolving along x- and y-axes:\n$R_x = 1\\cos 0^\\circ + 2\\cos 120^\\circ + 3\\cos 240^\\circ = 1 + 2(-1/2) + 3(-1/2) = 1 - 1 - 1.5 = -1.5 = -3/2$.\n$R_y = 1\\sin 0^\\circ + 2\\sin 120^\\circ + 3\\sin 240^\\circ = 0 + 2(\\sqrt{3}/2) + 3(-\\sqrt{3}/2) = \\sqrt{3} - 1.5\\sqrt{3} = -\\frac{\\sqrt{3}}{2}$.\n$\\tan \\phi = \\frac{R_y}{R_x} = \\frac{-\\sqrt{3}/2}{-3/2} = \\frac{1}{\\sqrt{3}} \\implies \\phi = 30^\\circ$.\nSince both $R_x$ and $R_y$ are negative, the resultant lies in the third quadrant at an angle $180^\\circ - 30^\\circ = 150^\\circ$ with the negative direction or angle of $150^\\circ$ relative to the first vector.",
    "tags": [
      "Vectors",
      "Polygon Addition",
      "Equilateral Triangle"
    ]
  },
  {
    "id": "smart-vec-topic-49",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Cross Product & Dot Product",
    "subtopic": "Vector Snell's Law",
    "difficulty": "Hard",
    "questionText": "A unit vector along the incident ray of light is $\\hat{i}$. The unit vector for the corresponding refracted ray of light is $\\hat{r}$. $\\hat{n}$ is a unit vector normal to the boundary of the medium directed towards the incident medium. If $\\mu$ is the refractive index of the medium, Snell's law in vector form is:",
    "options": [
      "\\hat{i} \\times \\hat{n} = \\mu(\\hat{n} + \\hat{r})",
      "\\hat{i} \\cdot \\hat{n} = \\mu(\\hat{r} \\cdot \\hat{n})",
      "\\hat{i} \\times \\hat{n} = \\mu(\\hat{r} \\times \\hat{n})",
      "\\hat{i} \\times \\hat{n} = \\mu(\\hat{r} \\cdot \\hat{n})"
    ],
    "correctAnswer": 2,
    "explanation": "By definition of cross product of unit vectors:\n$|\\hat{i} \\times \\hat{n}| = (1)(1)\\sin(180^\\circ - i) = \\sin i$.\n$|\\hat{r} \\times \\hat{n}| = (1)(1)\\sin(180^\\circ - r) = \\sin r$.\nSince Snell's law states $\\sin i = \\mu \\sin r$, taking the cross product with normal vector gives:\n$\\hat{i} \\times \\hat{n} = \\mu(\\hat{r} \\times \\hat{n})$.",
    "tags": [
      "Vectors",
      "Cross Product",
      "Snell's Law in Vector Form"
    ]
  },
  {
    "id": "smart-vec-topic-50",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Resolution of Vectors",
    "subtopic": "Rotation of Axes",
    "difficulty": "Medium",
    "questionText": "The components of a vector along the x- and y-directions are $(n + 1)$ and 1, respectively. If the coordinate system is rotated by an angle $\\theta = 60^\\circ$, the components change to $n$ and 3. The value of $n$ is:",
    "options": [
      "2",
      "\\cos 60^\\circ",
      "\\sin 60^\\circ",
      "3.5"
    ],
    "correctAnswer": 3,
    "explanation": "The magnitude of a vector is invariant under rotation of the coordinate axes:\n$A^2 = A_x^2 + A_y^2 = A_x'^2 + A_y'^2$\n$(n + 1)^2 + 1^2 = n^2 + 3^2$\n$n^2 + 2n + 1 + 1 = n^2 + 9$\n$2n + 2 = 9 \\implies 2n = 7 \\implies n = 3.5$.",
    "tags": [
      "Vectors",
      "Rotation of Coordinates",
      "Invariance of Magnitude"
    ]
  },
  {
    "id": "smart-vec-topic-51",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "subtopic": "Relative Motion & Collision",
    "difficulty": "Medium",
    "questionText": "Two point masses 1 and 2 move with uniform velocities $\\vec{v}_1$ and $\\vec{v}_2$, respectively. Their initial position vectors are $\\vec{r}_1$ and $\\vec{r}_2$, respectively. Which of the following conditions must be satisfied for the collision of the point masses?",
    "options": [
      "\\frac{\\vec{r}_1 - \\vec{r}_2}{|\\vec{r}_1 - \\vec{r}_2|} = \\frac{\\vec{v}_2 - \\vec{v}_1}{|\\vec{v}_2 - \\vec{v}_1|}",
      "\\frac{\\vec{r}_2 - \\vec{r}_1}{|\\vec{r}_2 - \\vec{r}_1|} = \\frac{\\vec{v}_2 - \\vec{v}_1}{|\\vec{v}_2 - \\vec{v}_1|}",
      "\\frac{\\vec{r}_2 - \\vec{r}_1}{|\\vec{r}_2 + \\vec{r}_1|} = \\frac{\\vec{v}_2 - \\vec{v}_1}{|\\vec{v}_2 + \\vec{v}_1|}",
      "\\frac{\\vec{r}_2 + \\vec{r}_1}{|\\vec{r}_2 + \\vec{r}_1|} = \\frac{\\vec{v}_2 - \\vec{v}_1}{|\\vec{v}_2 + \\vec{v}_1|}"
    ],
    "correctAnswer": 0,
    "explanation": "For collision at some time $t > 0$, both particles must reach the exact same position vector:\n$\\vec{r}_1 + \\vec{v}_1 t = \\vec{r}_2 + \\vec{v}_2 t \\implies \\vec{r}_1 - \\vec{r}_2 = (\\vec{v}_2 - \\vec{v}_1)t$.\nSince $t > 0$ is a positive scalar, the vector $(\\vec{r}_1 - \\vec{r}_2)$ and relative velocity vector $(\\vec{v}_2 - \\vec{v}_1)$ must be parallel unit vectors:\n$\\frac{\\vec{r}_1 - \\vec{r}_2}{|\\vec{r}_1 - \\vec{r}_2|} = \\frac{\\vec{v}_2 - \\vec{v}_1}{|\\vec{v}_2 - \\vec{v}_1|}$.",
    "tags": [
      "Vectors",
      "Collision Condition",
      "Relative Velocity"
    ]
  },
  {
    "id": "smart-vec-topic-52",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Ratio of Forces",
    "difficulty": "Easy",
    "questionText": "Two forces whose magnitudes are in the ratio $3 : 5$ give a resultant of 28 N. If the angle of their inclination is 60\u00b0, find the magnitude of each force:",
    "options": [
      "12 N, 20 N",
      "15 N, 30 N",
      "20 N, 40 N",
      "25 N, 50 N"
    ],
    "correctAnswer": 0,
    "explanation": "Let the two forces be $A = 3x$ and $B = 5x$.\n$R = \\sqrt{A^2 + B^2 + 2AB\\cos 60^\\circ} = \\sqrt{(3x)^2 + (5x)^2 + 2(3x)(5x)(1/2)} = \\sqrt{9x^2 + 25x^2 + 15x^2} = \\sqrt{49x^2} = 7x$.\nGiven $R = 28\\text{ N} \\implies 7x = 28 \\implies x = 4$.\nForces are $A = 3(4) = 12\\text{ N}$ and $B = 5(4) = 20\\text{ N}$.",
    "tags": [
      "Vectors",
      "Forces",
      "Resultant Calculation"
    ]
  },
  {
    "id": "smart-vec-topic-53",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Ratio of Vectors",
    "difficulty": "Hard",
    "questionText": "The resultant of $\\vec{P}$ and $\\vec{Q}$ is $\\vec{R}$. If $\\vec{Q}$ is doubled, $\\vec{R}$ is doubled; when $\\vec{Q}$ is reversed, $\\vec{R}$ is again doubled. Find the ratio $P : Q : R$:",
    "options": [
      "\\sqrt{3} : \\sqrt{6} : \\sqrt{4}",
      "\\sqrt{4} : \\sqrt{2} : \\sqrt{3}",
      "\\sqrt{2} : \\sqrt{3} : \\sqrt{2}",
      "\\sqrt{3} : \\sqrt{4} : \\sqrt{2}"
    ],
    "correctAnswer": 2,
    "explanation": "From the given conditions:\n(i) $R^2 = P^2 + Q^2 + 2PQ\\cos\\theta$\n(ii) $(2R)^2 = 4R^2 = P^2 + (2Q)^2 + 2P(2Q)\\cos\\theta = P^2 + 4Q^2 + 4PQ\\cos\\theta$\n(iii) $(2R)^2 = 4R^2 = P^2 + Q^2 - 2PQ\\cos\\theta$\nAdding (i) and (iii): $5R^2 = 2P^2 + 2Q^2$.\nFrom (ii) - (i): $3R^2 = 3Q^2 + 2PQ\\cos\\theta$.\nSolving these simultaneous equations yields $P = R$ and $Q = \\sqrt{\\frac{3}{2}}R$.\nThus $P : Q : R = R : \\sqrt{\\frac{3}{2}}R : R = 1 : \\sqrt{3/2} : 1 = \\sqrt{2} : \\sqrt{3} : \\sqrt{2}$.",
    "tags": [
      "Vectors",
      "Resultant Equations",
      "Ratio of Magnitudes"
    ]
  },
  {
    "id": "smart-vec-topic-54",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Change in Velocity",
    "difficulty": "Medium",
    "questionText": "A particle slides with a speed of $3\\text{ ms}^{-1}$ at P. When it reaches Q, it acquires a speed of $4\\text{ ms}^{-1}$ after describing an angle of 60\u00b0 at O as shown in the figure. Find the magnitude of change in the velocity of the particle between P and Q (assume circular path from P to Q):",
    "diagramSvg": "<svg viewBox=\"0 0 240 220\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr54\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#2563eb\"/></marker></defs><path d=\"M 120,40 L 65,135 A 80 80 0 0 0 120,180 L 120,40\" fill=\"none\" stroke=\"#94a3b8\" stroke-dasharray=\"3,3\"/><circle cx=\"120\" cy=\"40\" r=\"3.5\" fill=\"#0f172a\"/><text x=\"116\" y=\"32\" font-weight=\"bold\" font-size=\"13\">O</text><path d=\"M 105,75 A 40 40 0 0 1 120,80\" fill=\"none\" stroke=\"#0f172a\"/><text x=\"85\" y=\"90\" font-size=\"11\">\u03b8=60\u00b0</text><path d=\"M 65,135 A 80 80 0 0 0 120,180\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2.5\"/><circle cx=\"65\" cy=\"135\" r=\"3.5\" fill=\"#0f172a\"/><text x=\"50\" y=\"135\" font-weight=\"bold\" font-size=\"13\">P</text><line x1=\"65\" y1=\"135\" x2=\"95\" y2=\"180\" stroke=\"#2563eb\" stroke-width=\"2\" marker-end=\"url(#arr54)\"/><text x=\"75\" y=\"155\" font-size=\"11\">3 ms\u207b\u00b9</text><circle cx=\"120\" cy=\"180\" r=\"3.5\" fill=\"#0f172a\"/><text x=\"128\" y=\"182\" font-weight=\"bold\" font-size=\"13\">Q</text><line x1=\"120\" y1=\"180\" x2=\"170\" y2=\"180\" stroke=\"#2563eb\" stroke-width=\"2\" marker-end=\"url(#arr54)\"/><text x=\"135\" y=\"198\" font-size=\"11\">4 ms\u207b\u00b9</text></svg>",
    "options": [
      "\\sqrt{13}\\text{ ms}^{-1}",
      "\\sqrt{8}\\text{ ms}^{-1}",
      "\\sqrt{16}\\text{ ms}^{-1}",
      "\\sqrt{15}\\text{ ms}^{-1}"
    ],
    "correctAnswer": 0,
    "explanation": "The velocity vectors $\\vec{v}_1$ at P and $\\vec{v}_2$ at Q are tangent to the circular path.\nSince the radius vectors subtend an angle of $60^\\circ$ at the center, the angle between the two tangent velocity vectors is also $\\theta = 60^\\circ$.\nChange in velocity: $|\\Delta\\vec{v}| = |\\vec{v}_2 - \\vec{v}_1| = \\sqrt{v_1^2 + v_2^2 - 2v_1v_2\\cos 60^\\circ}$\n$= \\sqrt{3^2 + 4^2 - 2(3)(4)(1/2)} = \\sqrt{9 + 16 - 12} = \\sqrt{13}\\text{ ms}^{-1}$.",
    "tags": [
      "Vectors",
      "Circular Motion",
      "Change in Velocity"
    ]
  },
  {
    "id": "smart-vec-topic-55",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Perpendicular Resultant",
    "difficulty": "Medium",
    "questionText": "The sum of the magnitudes of two forces acting at a point is 18 and the magnitude of their resultant is 12. If the resultant is at 90\u00b0 with the force of smaller magnitude, what are the magnitudes of the forces?",
    "options": [
      "7, 15",
      "5, 13",
      "8, 15",
      "9, 13"
    ],
    "correctAnswer": 1,
    "explanation": "Let $P$ be the smaller force and $Q$ be the larger force. Given $P + Q = 18$.\nSince resultant $R = 12$ is perpendicular to $P$, $Q$ forms the hypotenuse of the right triangle:\n$Q^2 = P^2 + R^2 \\implies Q^2 - P^2 = 12^2 = 144$\n$(Q - P)(Q + P) = 144 \\implies (Q - P)(18) = 144 \\implies Q - P = 8$.\nAdding $Q + P = 18$ and $Q - P = 8$ gives $2Q = 26 \\implies Q = 13$ and $P = 5$.\nHence the forces are 5 and 13.",
    "tags": [
      "Vectors",
      "Forces",
      "Right Triangle"
    ]
  },
  {
    "id": "smart-vec-topic-56",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Component Triangle",
    "difficulty": "Medium",
    "questionText": "The resultant of two forces has magnitude 20 N. One of the forces is of magnitude $20\\sqrt{3}\\text{ N}$ and makes an angle of 30\u00b0 with the resultant. What is the magnitude of the other force?",
    "options": [
      "15 N",
      "25 N",
      "20 N",
      "8 N"
    ],
    "correctAnswer": 2,
    "explanation": "Let the two forces be $\\vec{F}_1$ and $\\vec{F}_2$, and their resultant be $\\vec{R} = \\vec{F}_1 + \\vec{F}_2$.\nIn the vector addition triangle, sides are $F_1 = 20\\sqrt{3}\\text{ N}$, $R = 20\\text{ N}$, and the angle between $\\vec{F}_1$ and $\\vec{R}$ is $30^\\circ$.\nApplying the law of cosines in the triangle:\n$F_2^2 = F_1^2 + R^2 - 2F_1 R\\cos 30^\\circ$\n$= (20\\sqrt{3})^2 + 20^2 - 2(20\\sqrt{3})(20)(\\sqrt{3}/2) = 1200 + 400 - 1200 = 400$\n$F_2 = \\sqrt{400} = 20\\text{ N}$.",
    "tags": [
      "Vectors",
      "Triangle Law",
      "Cosine Rule"
    ]
  },
  {
    "id": "smart-vec-topic-57",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Resolution of Vectors",
    "subtopic": "Equilibrium of Concurrent Forces",
    "difficulty": "Medium",
    "questionText": "Three ants 1, 2 and 3 are pulling a grain with forces of magnitudes 10 N, 4 N, and $|\\vec{F}|\\text{ N}$ as shown in the figure. Find the force $\\vec{F}$ if the grain remains in equilibrium under the action of the forces:",
    "diagramSvg": "<svg viewBox=\"0 0 240 200\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr57\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#2563eb\"/></marker><marker id=\"arr57red\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#dc2626\"/></marker></defs><line x1=\"20\" y1=\"100\" x2=\"220\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\"/><circle cx=\"100\" cy=\"100\" r=\"5\" fill=\"#d97706\"/><text x=\"92\" y=\"92\" font-size=\"10\" fill=\"#b45309\">grain</text><line x1=\"100\" y1=\"100\" x2=\"170\" y2=\"45\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr57)\"/><text x=\"145\" y=\"55\" font-weight=\"bold\" font-size=\"12\">10 N (1)</text><text x=\"122\" y=\"92\" font-size=\"11\">37\u00b0</text><line x1=\"100\" y1=\"100\" x2=\"40\" y2=\"100\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr57)\"/><text x=\"45\" y=\"90\" font-weight=\"bold\" font-size=\"12\">4 N (2)</text><line x1=\"100\" y1=\"100\" x2=\"60\" y2=\"160\" stroke=\"#dc2626\" stroke-width=\"2.5\" marker-end=\"url(#arr57red)\"/><text x=\"68\" y=\"150\" font-weight=\"bold\" fill=\"#dc2626\" font-size=\"13\">F (3)</text></svg>",
    "options": [
      "-(4\\hat{i} + 6\\hat{j})\\text{ N}",
      "(4\\hat{i} - 6\\hat{j})\\text{ N}",
      "(4\\hat{j} - 6\\hat{i})\\text{ N}",
      "(3\\hat{j} - 6\\hat{i})\\text{ N}"
    ],
    "correctAnswer": 0,
    "explanation": "Expressing the ant forces in unit vectors (using $\\cos 37^\\circ = 4/5, \\sin 37^\\circ = 3/5$):\n$\\vec{F}_1 = 10\\cos 37^\\circ\\hat{i} + 10\\sin 37^\\circ\\hat{j} = 8\\hat{i} + 6\\hat{j}\\text{ N}$\n$\\vec{F}_2 = -4\\hat{i}\\text{ N}$\nFor equilibrium: $\\vec{F}_1 + \\vec{F}_2 + \\vec{F} = 0$\n$(8\\hat{i} + 6\\hat{j}) + (-4\\hat{i}) + \\vec{F} = 0 \\implies 4\\hat{i} + 6\\hat{j} + \\vec{F} = 0 \\implies \\vec{F} = -(4\\hat{i} + 6\\hat{j})\\text{ N}$.",
    "tags": [
      "Vectors",
      "Equilibrium",
      "Ant Forces"
    ]
  },
  {
    "id": "smart-vec-topic-58",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Resolution of Vectors",
    "subtopic": "3D Direction Cosines",
    "difficulty": "Medium",
    "questionText": "A bird moves with velocity $20\\text{ ms}^{-1}$ in a direction making an angle of 60\u00b0 with the eastern line and 60\u00b0 with the vertical upward direction. If East is taken as x-axis, North as y-axis and upward as z-axis, represent the velocity vector in rectangular form:",
    "options": [
      "10\\hat{i} - 8\\sqrt{2}\\hat{j} - 10\\hat{k}",
      "10\\hat{i} - 10\\sqrt{2}\\hat{j} - 10\\hat{k}",
      "8\\hat{i} - 6\\sqrt{2}\\hat{j} - 10\\hat{k}",
      "10\\hat{i} + 10\\sqrt{2}\\hat{j} + 10\\hat{k}"
    ],
    "correctAnswer": 3,
    "explanation": "Let the velocity make angles $\\alpha, \\beta, \\gamma$ with x (East), y (North), and z (Upward) axes.\nGiven: $\\alpha = 60^\\circ$ and $\\gamma = 60^\\circ$.\nUsing direction cosines relation: $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$\n$\\cos^2 60^\\circ + \\cos^2\\beta + \\cos^2 60^\\circ = 1 \\implies \\frac{1}{4} + \\cos^2\\beta + \\frac{1}{4} = 1 \\implies \\cos^2\\beta = \\frac{1}{2} \\implies \\cos\\beta = \\frac{1}{\\sqrt{2}}$.\nVelocity vector: $\\vec{v} = v(\\cos\\alpha\\hat{i} + \\cos\\beta\\hat{j} + \\cos\\gamma\\hat{k}) = 20\\left(\\frac{1}{2}\\hat{i} + \\frac{1}{\\sqrt{2}}\\hat{j} + \\frac{1}{2}\\hat{k}\\right) = 10\\hat{i} + 10\\sqrt{2}\\hat{j} + 10\\hat{k}$.",
    "tags": [
      "Vectors",
      "3D Vectors",
      "Direction Cosines"
    ]
  },
  {
    "id": "smart-vec-topic-59",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Resolution of Vectors",
    "subtopic": "Lami's Theorem",
    "difficulty": "Medium",
    "questionText": "A bob of weight 3 N is in equilibrium under the action of two strings 1 and 2 as shown. Find the tension forces $T_1$ and $T_2$ in strings 1 and 2 respectively:",
    "diagramSvg": "<svg viewBox=\"0 0 220 220\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"50\" y1=\"30\" x2=\"110\" y2=\"30\" stroke=\"#0f172a\" stroke-width=\"3\"/><line x1=\"60\" y1=\"30\" x2=\"50\" y2=\"20\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"80\" y1=\"30\" x2=\"70\" y2=\"20\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"30\" x2=\"90\" y2=\"20\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"160\" y1=\"80\" x2=\"160\" y2=\"140\" stroke=\"#0f172a\" stroke-width=\"3\"/><line x1=\"160\" y1=\"90\" x2=\"170\" y2=\"80\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"160\" y1=\"110\" x2=\"170\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"160\" y1=\"130\" x2=\"170\" y2=\"120\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"85\" y1=\"30\" x2=\"115\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"90\" y=\"70\" font-weight=\"bold\" font-size=\"12\" fill=\"#1e40af\">1 (T\u2081)</text><line x1=\"85\" y1=\"30\" x2=\"85\" y2=\"110\" stroke=\"#94a3b8\" stroke-dasharray=\"3,3\"/><path d=\"M 85,60 A 30 30 0 0 0 96,57\" fill=\"none\" stroke=\"#0f172a\"/><text x=\"88\" y=\"50\" font-size=\"10\">30\u00b0</text><line x1=\"115\" y1=\"110\" x2=\"160\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"130\" y=\"102\" font-weight=\"bold\" font-size=\"12\" fill=\"#1e40af\">2 (T\u2082)</text><circle cx=\"115\" cy=\"110\" r=\"6\" fill=\"#0f172a\"/><line x1=\"115\" y1=\"110\" x2=\"115\" y2=\"175\" stroke=\"#dc2626\" stroke-width=\"2.5\"/><polygon points=\"111,170 119,170 115,180\" fill=\"#dc2626\"/><text x=\"122\" y=\"165\" font-weight=\"bold\" fill=\"#dc2626\" font-size=\"12\">3 N</text></svg>",
    "options": [
      "\\frac{\\sqrt{3}}{2}\\text{ N}, 5\\sqrt{3}\\text{ N}",
      "5\\sqrt{3}\\text{ N}, \\frac{2}{\\sqrt{3}}\\text{ N}",
      "\\frac{2}{\\sqrt{3}}\\text{ N}, \\sqrt{3}\\text{ N}",
      "2\\sqrt{3}\\text{ N}, \\sqrt{3}\\text{ N}"
    ],
    "correctAnswer": 3,
    "explanation": "Applying Lami's theorem or resolving forces at the equilibrium junction:\nVertical: $T_1\\cos 30^\\circ = 3\\text{ N} \\implies T_1\\left(\\frac{\\sqrt{3}}{2}\\right) = 3 \\implies T_1 = \\frac{6}{\\sqrt{3}} = 2\\sqrt{3}\\text{ N}$.\nHorizontal: $T_2 = T_1\\sin 30^\\circ = 2\\sqrt{3}\\left(\\frac{1}{2}\\right) = \\sqrt{3}\\text{ N}$.\nTherefore, tensions are $T_1 = 2\\sqrt{3}\\text{ N}$ and $T_2 = \\sqrt{3}\\text{ N}$.",
    "tags": [
      "Vectors",
      "Lami's Theorem",
      "Tension Equilibrium"
    ]
  },
  {
    "id": "smart-vec-topic-60",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Momentum Change on Collision",
    "difficulty": "Easy",
    "questionText": "An object of $m\\text{ kg}$ with speed $v\\text{ ms}^{-1}$ strikes a wall at an angle $\\theta$ to the normal and rebounds at the same speed and same angle. Find the magnitude of change in the momentum of the object:",
    "diagramSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr60\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#2563eb\"/></marker></defs><line x1=\"20\" y1=\"140\" x2=\"220\" y2=\"140\" stroke=\"#0f172a\" stroke-width=\"4\"/><line x1=\"120\" y1=\"140\" x2=\"120\" y2=\"20\" stroke=\"#94a3b8\" stroke-dasharray=\"3,3\"/><line x1=\"60\" y1=\"40\" x2=\"120\" y2=\"140\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr60)\"/><text x=\"70\" y=\"80\" font-weight=\"bold\" font-size=\"12\">v\u2081</text><path d=\"M 120,90 A 50 50 0 0 0 95,98\" fill=\"none\" stroke=\"#0f172a\"/><text x=\"102\" y=\"85\" font-size=\"12\">\u03b8</text><line x1=\"120\" y1=\"140\" x2=\"180\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr60)\"/><text x=\"160\" y=\"80\" font-weight=\"bold\" font-size=\"12\">v\u2082</text><path d=\"M 120,90 A 50 50 0 0 1 145,98\" fill=\"none\" stroke=\"#0f172a\"/><text x=\"128\" y=\"85\" font-size=\"12\">\u03b8</text></svg>",
    "options": [
      "\\frac{mv}{2}\\cos\\theta",
      "2mv\\cos\\theta",
      "mv\\cos\\theta",
      "mv^2\\cos\\theta"
    ],
    "correctAnswer": 1,
    "explanation": "Taking the normal to the wall as the y-axis (perpendicular) and the surface of the wall as the x-axis (parallel):\nInitial momentum: $\\vec{p}_1 = mv\\sin\\theta\\hat{i} - mv\\cos\\theta\\hat{j}$\nFinal momentum: $\\vec{p}_2 = mv\\sin\\theta\\hat{i} + mv\\cos\\theta\\hat{j}$\nChange in momentum: $\\Delta\\vec{p} = \\vec{p}_2 - \\vec{p}_1 = 2mv\\cos\\theta\\hat{j}$.\nMagnitude: $|\\Delta\\vec{p}| = 2mv\\cos\\theta$.",
    "tags": [
      "Vectors",
      "Momentum Change",
      "Reflection"
    ]
  },
  {
    "id": "smart-vec-topic-61",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Dot Product & Orthogonality",
    "subtopic": "Perpendicular Properties",
    "difficulty": "Easy",
    "questionText": "If $\\vec{A}$ is perpendicular to $\\vec{B}$, then:",
    "options": [
      "\\vec{A} \\times \\vec{B} = 0",
      "\\vec{A} \\cdot [\\vec{A} + \\vec{B}] = A^2",
      "\\vec{A} \\cdot \\vec{B} = AB",
      "\\vec{A} \\cdot [\\vec{A} + \\vec{B}] = A^2 + AB"
    ],
    "correctAnswer": 1,
    "explanation": "Since $\\vec{A} \\perp \\vec{B}$, $\\vec{A} \\cdot \\vec{B} = 0$ while $\\vec{A} \\times \\vec{B} \\ne 0$.\nTherefore: $\\vec{A} \\cdot [\\vec{A} + \\vec{B}] = \\vec{A} \\cdot \\vec{A} + \\vec{A} \\cdot \\vec{B} = A^2 + 0 = A^2$.",
    "tags": [
      "Vectors",
      "Dot Product",
      "Orthogonal Vectors"
    ]
  },
  {
    "id": "smart-vec-topic-62",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Resolution of Vectors",
    "subtopic": "2D Resolution",
    "difficulty": "Easy",
    "questionText": "What displacement at an angle 60\u00b0 to the x-axis has an x-component of 5 m? $\\hat{i}$ and $\\hat{j}$ are unit vectors in x and y directions, respectively:",
    "options": [
      "5\\hat{i}",
      "5\\hat{i} + 5\\hat{j}",
      "5\\hat{i} + 5\\sqrt{3}\\hat{j}",
      "All of the above"
    ],
    "correctAnswer": 2,
    "explanation": "$x = r\\cos 60^\\circ = 5\\text{ m} \\implies r = 10\\text{ m}$.\n$y = r\\sin 60^\\circ = 10\\left(\\frac{\\sqrt{3}}{2}\\right) = 5\\sqrt{3}\\text{ m}$.\nDisplacement vector: $\\vec{r} = 5\\hat{i} + 5\\sqrt{3}\\hat{j}$.",
    "tags": [
      "Vectors",
      "Resolution",
      "Components"
    ]
  },
  {
    "id": "smart-vec-topic-63",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "subtopic": "Vector Inequalities",
    "difficulty": "Easy",
    "questionText": "Mark the correct statement:",
    "options": [
      "|\\vec{a} + \\vec{b}| \\ge |\\vec{a}| + |\\vec{b}|",
      "|\\vec{a} + \\vec{b}| \\le |\\vec{a}| + |\\vec{b}|",
      "|\\vec{a} - \\vec{b}| \\ge |\\vec{a}| + |\\vec{b}|",
      "All of the above"
    ],
    "correctAnswer": 1,
    "explanation": "According to the triangle inequality for any two vectors $\\vec{a}$ and $\\vec{b}$:\n$|\\vec{a} + \\vec{b}| \\le |\\vec{a}| + |\\vec{b}|$.\nEquality holds if and only if $\\vec{a}$ and $\\vec{b}$ point in the exact same direction.",
    "tags": [
      "Vectors",
      "Triangle Inequality",
      "Properties"
    ]
  },
  {
    "id": "smart-vec-topic-64",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Resolution of Vectors",
    "subtopic": "Cardinal Bearing & Equilibrium",
    "difficulty": "Medium",
    "questionText": "Two horizontal forces of magnitudes 10 N and P N act on a particle. The force of magnitude 10 N acts due West and the force of magnitude P N acts on a bearing of 30\u00b0 East of North as shown in figure. The resultant of these two forces acts due North. Find the magnitude of this resultant:",
    "diagramSvg": "<svg viewBox=\"0 0 240 220\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr64\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#2563eb\"/></marker></defs><line x1=\"120\" y1=\"140\" x2=\"120\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/><text x=\"122\" y=\"25\" font-size=\"11\">North</text><line x1=\"120\" y1=\"140\" x2=\"30\" y2=\"140\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr64)\"/><text x=\"60\" y=\"160\" font-weight=\"bold\" font-size=\"12\">10 N (West)</text><line x1=\"120\" y1=\"140\" x2=\"175\" y2=\"45\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr64)\"/><text x=\"165\" y=\"80\" font-weight=\"bold\" font-size=\"12\">P N</text><path d=\"M 120,95 A 45 45 0 0 1 138,105\" fill=\"none\" stroke=\"#0f172a\"/><text x=\"128\" y=\"90\" font-size=\"11\">30\u00b0</text><circle cx=\"120\" cy=\"140\" r=\"3.5\" fill=\"#0f172a\"/></svg>",
    "options": [
      "10\\sqrt{3}\\text{ N}",
      "30\\sqrt{3}\\text{ N}",
      "20\\sqrt{3}\\text{ N}",
      "40\\sqrt{3}\\text{ N}"
    ],
    "correctAnswer": 0,
    "explanation": "Because the resultant acts purely due North, all horizontal (East-West) components must cancel:\n$P\\sin 30^\\circ = 10\\text{ N} \\implies P\\left(\\frac{1}{2}\\right) = 10 \\implies P = 20\\text{ N}$.\nThe vertical (North) component is the resultant force:\n$R = P\\cos 30^\\circ = 20 \\times \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}\\text{ N}$.",
    "tags": [
      "Vectors",
      "Bearings",
      "Resultant North"
    ]
  },
  {
    "id": "smart-vec-topic-65",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Cross Product & Dot Product",
    "subtopic": "Cross and Dot Ratio",
    "difficulty": "Easy",
    "questionText": "$\\vec{A}$ and $\\vec{B}$ are two vectors and $\\theta$ is the angle between them. If $|\\vec{A} \\times \\vec{B}| = \\sqrt{3}(\\vec{A} \\cdot \\vec{B})$, the value of $\\theta$ is:",
    "options": [
      "45\u00b0",
      "30\u00b0",
      "90\u00b0",
      "60\u00b0"
    ],
    "correctAnswer": 3,
    "explanation": "$|\\vec{A} \\times \\vec{B}| = AB\\sin\\theta$, and $\\vec{A} \\cdot \\vec{B} = AB\\cos\\theta$.\nGiven $AB\\sin\\theta = \\sqrt{3}AB\\cos\\theta \\implies \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta = \\sqrt{3} \\implies \\theta = 60^\\circ$.",
    "tags": [
      "Vectors",
      "Cross Product",
      "Dot Product",
      "Angle"
    ]
  },
  {
    "id": "smart-vec-topic-66",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Magnitude Comparison",
    "difficulty": "Easy",
    "questionText": "Let $\\vec{C} = \\vec{A} + \\vec{B}$, then:",
    "options": [
      "|\\vec{C}| \\text{ is always greater than } |\\vec{A}|",
      "\\text{It is possible to have } |\\vec{C}| < |\\vec{A}| \\text{ and } |\\vec{C}| < |\\vec{B}|",
      "\\vec{C} \\text{ is always equal to } A + B",
      "\\vec{C} \\text{ is never equal to } A + B"
    ],
    "correctAnswer": 1,
    "explanation": "If the angle between $\\vec{A}$ and $\\vec{B}$ is obtuse ($\\theta > 120^\\circ$), the resultant $|\\vec{C}| = \\sqrt{A^2 + B^2 + 2AB\\cos\\theta}$ can be strictly smaller than both $|\\vec{A}|$ and $|\\vec{B}|$.\nFor example, two unit vectors at $150^\\circ$ yield $C = 2\\cos 75^\\circ \\approx 0.517 < 1$. Thus, option (2) is correct.",
    "tags": [
      "Vectors",
      "Resultant Bounds",
      "Obtuse Angle"
    ]
  },
  {
    "id": "smart-vec-topic-67",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Fundamentals of Vectors",
    "subtopic": "Definition of a Vector",
    "difficulty": "Easy",
    "questionText": "Which of the following conditions are sufficient and essential for a physical quantity to be a vector?",
    "options": [
      "Magnitude and direction only",
      "Magnitude and addition, subtraction, multiplication by rules of algebra",
      "Magnitude, direction, and addition, subtraction and multiplication by vector laws",
      "Magnitude, direction and combination of vectors by rules of algebra"
    ],
    "correctAnswer": 2,
    "explanation": "To be classified as a vector, a quantity must not only possess magnitude and a definite direction, but it must strictly obey the laws of vector addition (such as the triangle or parallelogram law).\nFor example, electric current and pressure have direction and magnitude, but since they follow standard scalar algebraic addition, they are not vectors.",
    "tags": [
      "Vectors",
      "Definition",
      "Vector Addition Laws"
    ]
  },
  {
    "id": "smart-vec-topic-68",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Dot Product & Orthogonality",
    "subtopic": "Sum of Unit Vectors",
    "difficulty": "Medium",
    "questionText": "If $\\vec{a}, \\vec{b}$, and $\\vec{c}$ are three unit vectors such that $\\vec{a} + \\vec{b} + \\vec{c} = 0$, then the value of $\\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{c} + \\vec{c} \\cdot \\vec{a}$ is:",
    "options": [
      "3/2",
      "-1",
      "0",
      "-3/2"
    ],
    "correctAnswer": 3,
    "explanation": "Since $\\vec{a}, \\vec{b}, \\vec{c}$ are unit vectors: $|\u000bec{a}| = |\\vec{b}| = |\\vec{c}| = 1$.\nSquaring the vector sum $(\\vec{a} + \\vec{b} + \\vec{c}) = 0$:\n$|\\vec{a} + \\vec{b} + \\vec{c}|^2 = a^2 + b^2 + c^2 + 2(\\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{c} + \\vec{c} \\cdot \\vec{a}) = 0$\n$1 + 1 + 1 + 2(\\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{c} + \\vec{c} \\cdot \\vec{a}) = 0$\n$3 + 2S = 0 \\implies S = -\\frac{3}{2}$.",
    "tags": [
      "Vectors",
      "Unit Vectors",
      "Dot Product Identity"
    ]
  },
  {
    "id": "smart-vec-topic-69",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Resultant of Forces",
    "difficulty": "Medium",
    "questionText": "Two forces are acting as shown in the figure. The resultant of the two forces is:",
    "diagramSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arr69\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#2563eb\"/></marker></defs><line x1=\"40\" y1=\"130\" x2=\"140\" y2=\"130\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr69)\"/><text x=\"70\" y=\"150\" font-weight=\"bold\" font-size=\"12\">F\u2081 = 10 N</text><line x1=\"140\" y1=\"130\" x2=\"210\" y2=\"45\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr69)\"/><text x=\"180\" y=\"100\" font-weight=\"bold\" font-size=\"12\" transform=\"rotate(-45 180,100)\">F\u2082 = 10 N</text><path d=\"M 105,130 A 35 35 0 0 1 120,95\" fill=\"none\" stroke=\"#0f172a\"/><text x=\"85\" y=\"108\" font-weight=\"bold\" font-size=\"11\">120\u00b0</text></svg>",
    "options": [
      "5\\sqrt{3}\\text{ N}",
      "10\\sqrt{3}\\text{ N}",
      "5\\sqrt{5}\\text{ N}",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "When the forces are placed tail-to-tail at a common point, the angle between them is $\\theta = 180^\\circ - 120^\\circ = 60^\\circ$.\n$R = \\sqrt{F_1^2 + F_2^2 + 2F_1 F_2\\cos 60^\\circ} = \\sqrt{10^2 + 10^2 + 2(10)(10)(1/2)} = \\sqrt{100 + 100 + 100} = \\sqrt{300} = 10\\sqrt{3}\\text{ N}$.",
    "tags": [
      "Vectors",
      "Resultant",
      "Exterior Angle"
    ]
  },
  {
    "id": "smart-vec-topic-70",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Cross Product & Dot Product",
    "subtopic": "Area of Triangle",
    "difficulty": "Medium",
    "questionText": "What is the area of the triangle formed by $\\vec{A} = 2\\hat{i} - 3\\hat{j} + 4\\hat{k}$ and $\\vec{B} = \\hat{i} - \\hat{k}$ and their resultant?",
    "options": [
      "\\sqrt{13.5}\\text{ units}",
      "13.5\\text{ units}",
      "\\sqrt{38.7}\\text{ units}",
      "38.7\\text{ units}"
    ],
    "correctAnswer": 0,
    "explanation": "The area of the triangle formed by two adjacent vectors $\\vec{A}$ and $\\vec{B}$ and their resultant closing side is $\\text{Area} = \\frac{1}{2}|\\vec{A} \\times \\vec{B}|$.\n$\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 2 & -3 & 4 \\\\ 1 & 0 & -1 \\end{vmatrix} = \\hat{i}(3 - 0) - \\hat{j}(-2 - 4) + \\hat{k}(0 - (-3)) = 3\\hat{i} + 6\\hat{j} + 3\\hat{k}$.\nMagnitude: $|\\vec{A} \\times \\vec{B}| = \\sqrt{3^2 + 6^2 + 3^2} = \\sqrt{9 + 36 + 9} = \\sqrt{54}$.\n$\\text{Area} = \\frac{1}{2}\\sqrt{54} = \\sqrt{\\frac{54}{4}} = \\sqrt{13.5}\\text{ units}$.",
    "tags": [
      "Vectors",
      "Cross Product",
      "Area of Triangle"
    ]
  },
  {
    "id": "smart-vec-topic-71",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Cross Product & Dot Product",
    "subtopic": "Parallel Vectors Cross Product",
    "difficulty": "Easy",
    "questionText": "If $\\vec{A} = 4\\hat{i} + 6\\hat{j}$ and $\\vec{B} = 2\\hat{i} + 3\\hat{j}$, then:",
    "options": [
      "\\vec{A} \\cdot \\vec{B} = 29",
      "\\vec{A} \\times \\vec{B} = \\vec{0}",
      "|\\vec{B}|/|\\vec{A}| = 2/1",
      "\\text{Angle between } \\vec{A} \\text{ and } \\vec{B} \\text{ is } 30^\\circ"
    ],
    "correctAnswer": 1,
    "explanation": "$\\vec{A} = 2(2\\hat{i} + 3\\hat{j}) = 2\\vec{B}$.\nBecause $\\vec{A}$ and $\\vec{B}$ are collinear parallel vectors (angle $0^\\circ$):\n$\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 4 & 6 & 0 \\\\ 2 & 3 & 0 \\end{vmatrix} = \\hat{k}(12 - 12) = \\vec{0}$.",
    "tags": [
      "Vectors",
      "Cross Product",
      "Collinear Vectors"
    ]
  }
];
