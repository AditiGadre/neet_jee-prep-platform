import { Question } from '../types';

export const PHYSICS_SMART_BOOKLET_VECTORS_PYQ_QUESTIONS: Question[] = [
  {
    "id": "smart-vec-pyq-01",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Torque & Angular Momentum",
    "subtopic": "Moment of Force about a Point",
    "difficulty": "Medium",
    "questionText": "The moment of the force $\\vec{F} = 4\\hat{i} + 5\\hat{j} - 6\\hat{k}$ at point $(2, 0, -3)$, about the point $(2, -2, -2)$, is given by:",
    "diagramSvg": "<svg viewBox=\"0 0 260 200\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arrq\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#2563eb\"/></marker><marker id=\"arrqred\" markerWidth=\"8\" markerHeight=\"6\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#dc2626\"/></marker></defs><line x1=\"40\" y1=\"170\" x2=\"230\" y2=\"170\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><text x=\"235\" y=\"175\" font-size=\"12\">X</text><line x1=\"40\" y1=\"170\" x2=\"40\" y2=\"20\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><text x=\"35\" y=\"15\" font-size=\"12\">Y</text><circle cx=\"40\" cy=\"170\" r=\"3\" fill=\"#0f172a\"/><text x=\"28\" y=\"182\" font-size=\"12\">O</text><circle cx=\"75\" cy=\"120\" r=\"4\" fill=\"#0f172a\"/><text x=\"55\" y=\"115\" font-weight=\"bold\" font-size=\"12\">A (r\u2080)</text><line x1=\"40\" y1=\"170\" x2=\"75\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/><circle cx=\"165\" cy=\"70\" r=\"4\" fill=\"#0f172a\"/><text x=\"175\" y=\"70\" font-weight=\"bold\" font-size=\"12\">P (r)</text><line x1=\"40\" y1=\"170\" x2=\"165\" y2=\"70\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/><line x1=\"75\" y1=\"120\" x2=\"165\" y2=\"70\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arrq)\"/><text x=\"110\" y=\"85\" font-weight=\"bold\" fill=\"#1e40af\" font-size=\"12\">r - r\u2080</text><line x1=\"165\" y1=\"70\" x2=\"210\" y2=\"35\" stroke=\"#dc2626\" stroke-width=\"2.5\" marker-end=\"url(#arrqred)\"/><text x=\"215\" y=\"35\" font-weight=\"bold\" fill=\"#dc2626\" font-size=\"12\">F</text></svg>",
    "options": [
      "-8\\hat{i} - 4\\hat{j} - 7\\hat{k}",
      "-4\\hat{i} - \\hat{j} - 8\\hat{k}",
      "-7\\hat{i} - 4\\hat{j} - 8\\hat{k}",
      "-7\\hat{i} - 8\\hat{j} - 4\\hat{k}"
    ],
    "correctAnswer": 2,
    "explanation": "Let the point of application of force be $P(2, 0, -3)$ and the reference point about which torque is taken be $A(2, -2, -2)$.\nThe position vector from the reference point to the force application point is:\n$\\vec{r}_{\\text{rel}} = \\vec{r} - \\vec{r}_0 = (2\\hat{i} + 0\\hat{j} - 3\\hat{k}) - (2\\hat{i} - 2\\hat{j} - 2\\hat{k}) = 0\\hat{i} + 2\\hat{j} - \\hat{k}$.\nThe moment of force (torque) is $\\vec{\\tau} = \\vec{r}_{\\text{rel}} \\times \\vec{F}$:\n$\\vec{\\tau} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 0 & 2 & -1 \\\\ 4 & 5 & -6 \\end{vmatrix} = \\hat{i}[2(-6) - (-1)(5)] - \\hat{j}[0(-6) - (-1)(4)] + \\hat{k}[0(5) - 2(4)]$\n$= \\hat{i}[-12 + 5] - \\hat{j}[0 + 4] + \\hat{k}[0 - 8] = -7\\hat{i} - 4\\hat{j} - 8\\hat{k}$.",
    "tags": [
      "NEET 2018",
      "Torque",
      "Cross Product",
      "Moment of Force"
    ]
  },
  {
    "id": "smart-vec-pyq-02",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Kinematics with Vectors",
    "subtopic": "2D Acceleration from Coordinates",
    "difficulty": "Easy",
    "questionText": "The x and y coordinates of a particle at any time are $x = 5t - 2t^2$ and $y = 10t$ respectively, where x and y are in meters and t in seconds. The acceleration of the particle at $t = 2\\text{ s}$ is:",
    "options": [
      "5\\text{ m/s}^2",
      "-4\\text{ m/s}^2",
      "-8\\text{ m/s}^2",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "Given position functions:\n$x(t) = 5t - 2t^2 \\implies v_x = \\frac{dx}{dt} = 5 - 4t \\implies a_x = \\frac{dv_x}{dt} = -4\\text{ m/s}^2$.\n$y(t) = 10t \\implies v_y = \\frac{dy}{dt} = 10 \\implies a_y = \\frac{dv_y}{dt} = 0$.\nNet acceleration vector $\\vec{a} = a_x\\hat{i} + a_y\\hat{j} = -4\\hat{i}\\text{ m/s}^2$.\nAt any instant including $t = 2\\text{ s}$, the acceleration is constant at $-4\\text{ m/s}^2$.",
    "tags": [
      "NEET 2017",
      "Kinematics",
      "Acceleration",
      "Derivatives"
    ]
  },
  {
    "id": "smart-vec-pyq-03",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Vector Addition & Subtraction",
    "subtopic": "Orthogonal Condition",
    "difficulty": "Easy",
    "questionText": "If the magnitude of the sum of two vectors is equal to the magnitude of the difference of the two vectors, the angle between these vectors is:",
    "options": [
      "0\u00b0",
      "90\u00b0",
      "45\u00b0",
      "180\u00b0"
    ],
    "correctAnswer": 1,
    "explanation": "Given $|\u000bec{A} + \\vec{B}| = |\\vec{A} - \\vec{B}|$.\nSquaring both sides:\n$|\\vec{A} + \\vec{B}|^2 = |\\vec{A} - \\vec{B}|^2$\n$A^2 + B^2 + 2\\vec{A}\\cdot\\vec{B} = A^2 + B^2 - 2\\vec{A}\\cdot\\vec{B}$\n$4\\vec{A}\\cdot\\vec{B} = 0 \\implies 4AB\\cos\\theta = 0 \\implies \\cos\\theta = 0 \\implies \\theta = 90^\\circ$.",
    "tags": [
      "NEET 2016",
      "Vector Sum",
      "Vector Difference",
      "Orthogonal"
    ]
  },
  {
    "id": "smart-vec-pyq-04",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Kinematics with Vectors",
    "subtopic": "Circular Motion Vectors",
    "difficulty": "Medium",
    "questionText": "A particle moves so that its position vector is given by $\\vec{r} = \\cos\\omega t\\hat{x} + \\sin\\omega t\\hat{y}$, where $\\omega$ is a constant. Which of the following is true?",
    "options": [
      "Velocity and acceleration both are perpendicular to \\vec{r}",
      "Velocity and acceleration both are parallel to \\vec{r}",
      "Velocity is perpendicular to \\vec{r} and acceleration is directed towards the origin",
      "Velocity is perpendicular to \\vec{r} and acceleration is directed away from the origin"
    ],
    "correctAnswer": 2,
    "explanation": "Position vector: $\\vec{r} = \\cos\\omega t\\hat{x} + \\sin\\omega t\\hat{y}$.\nVelocity: $\\vec{v} = \\frac{d\\vec{r}}{dt} = -\\omega\\sin\\omega t\\hat{x} + \\omega\\cos\\omega t\\hat{y}$.\nDot product: $\\vec{r} \\cdot \\vec{v} = -\\omega\\sin\\omega t\\cos\\omega t + \\omega\\sin\\omega t\\cos\\omega t = 0 \\implies \\vec{v} \\perp \\vec{r}$ (velocity is perpendicular to position vector).\nAcceleration: $\\vec{a} = \\frac{d\\vec{v}}{dt} = -\\omega^2\\cos\\omega t\\hat{x} - \\omega^2\\sin\\omega t\\hat{y} = -\\omega^2(\\cos\\omega t\\hat{x} + \\sin\\omega t\\hat{y}) = -\\omega^2\\vec{r}$.\nSince $\\vec{a} = -\\omega^2\\vec{r}$, acceleration is directed opposite to $\\vec{r}$, which is straight towards the origin.",
    "tags": [
      "NEET 2016",
      "Circular Motion",
      "Velocity & Acceleration",
      "Central Acceleration"
    ]
  },
  {
    "id": "smart-vec-pyq-05",
    "subject": "Physics",
    "chapter": "Vectors",
    "topic": "Dot Product & Orthogonality",
    "subtopic": "Time-Dependent Orthogonal Vectors",
    "difficulty": "Medium",
    "questionText": "If vectors $\\vec{A} = \\cos\\omega t\\hat{i} + \\sin\\omega t\\hat{j}$ and $\\vec{B} = \\cos\\left(\\frac{\\omega t}{2}\\right)\\hat{i} + \\sin\\left(\\frac{\\omega t}{2}\\right)\\hat{j}$ are functions of time, then the value of $t$ at which they are orthogonal to each other is:",
    "options": [
      "t = \\frac{\\pi}{2\\omega}",
      "t = \\frac{\\pi}{\\omega}",
      "t = 0",
      "t = \\frac{\\pi}{4\\omega}"
    ],
    "correctAnswer": 1,
    "explanation": "For $\\vec{A}$ and $\\vec{B}$ to be orthogonal, their scalar product must vanish:\n$\\vec{A} \\cdot \\vec{B} = 0$\n$\\cos\\omega t\\cos\\left(\\frac{\\omega t}{2}\\right) + \\sin\\omega t\\sin\\left(\\frac{\\omega t}{2}\\right) = 0$\nUsing the trigonometric identity $\\cos(X - Y) = \\cos X\\cos Y + \\sin X\\sin Y$:\n$\\cos\\left(\\omega t - \\frac{\\omega t}{2}\\right) = \\cos\\left(\\frac{\\omega t}{2}\\right) = 0$\n$\\frac{\\omega t}{2} = \\frac{\\pi}{2} \\implies \\omega t = \\pi \\implies t = \\frac{\\pi}{\\omega}$.",
    "tags": [
      "NEET 2015",
      "Orthogonality",
      "Dot Product",
      "Trigonometric Identity"
    ]
  }
];
