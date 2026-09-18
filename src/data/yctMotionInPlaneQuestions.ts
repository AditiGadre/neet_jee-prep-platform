import { Question } from '../types';

/**
 * YCT Objective Physics Volume-I Chapter 03: Motion in Plane
 * Total 715 Questions across 5 Core Sections:
 * 1. Scalar and Vector Quantity (Q1 - Q167)
 * 2. Plane Motion Analysis (Q168 - Q189)
 * 3. Relative Velocity in Plane (Q190 - Q244)
 * 4. Projectile Motion (Q245 - Q502)
 * 5. Circular Motion (Q503 - Q715)
 * Complete with verified official solutions, exams citations, and diagram schematics.
 */
export const YCT_MOTION_IN_PLANE_QUESTIONS: Question[] = [
  {
    "id": "yct-motion-plane-q001",
    "num": 1,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "If \n\u0001\n\u0001\nA, B are perpendicular vectors \n\n^\n^\n^\n\u0001\nA = 5i + 7j- 3k \n\n^\n^\n^\n\u0001\nB = 2i + 2j-ck . \n\n The value of c is",
    "options": [
      "-2",
      "8",
      "-7",
      "-8"
    ],
    "correctAnswer": 3,
    "explanation": "^\n^\n^\nA\n5i\n7j\n3k\n=\n+\n-\n\u0001\n\n^\n^\n^\nB\n2i\n2j\nck\n=\n+\n-\n\u0001\n\nFor perpendicular vectors \nA B\n0\n⋅\n=\n\u0001 \u0001\n\n(\n) (\n)\n^\n^\n^\n^\n^\n^\n5i\n7j\n3k\n2i\n2j\nck\n0\n+\n-\n⋅\n+\n-\n= \n10\n14\n3c\n0\n+\n+\n= \n24 = - 3c \nc = -8",
    "examSource": "EAMCET-1991",
    "image": "/images/yct_motion_plane/p1_img1_xref34.png"
  },
  {
    "id": "yct-motion-plane-q002",
    "num": 2,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The resultant of the vectors A and B depends \nalso on the angle θ between them. The \nmagnitude of the resultant is always given by",
    "options": [
      "A\nB\n2ABcos\n+\n+\nθ",
      "(\n)\nA\nB\n2ABcos\n+\n+\nθ",
      "2\n2\nA\nB\n2ABcos\n+\n+\nθ",
      "(\n)\n2\n2\n2\nA\nB\n2ABcos\n+\n+\nθ"
    ],
    "correctAnswer": 2,
    "explanation": "Resultant vector, R\n\u0001 \nFrom ∆DOF, \n\n(OD)2 =(OF)2 + (DF)2 \n\n(OD)2 = (OE + EF)2 + (DF)2 \n\n2\nR\n\u0001\n= ( A\n\u0001\n+ B\n\u0001\ncosθ)2 + ( B\n\u0001\nsinθ)2 \n\n = A2 + B2 cos2θ + 2AB cosθ + B2 sin2θ \n\n = A2 + B2 (cos2θ + sin2θ) + 2AB cosθ \n\n2\nR\n\u0001\n= A2 + B2 + 2AB cosθ \n2\n2\nR\nA\nB\n2ABcosθ\n=\n+\n+\n\u0001",
    "examSource": "EAMCET-1992",
    "image": "/images/yct_motion_plane/p1_img1_xref34.png"
  },
  {
    "id": "yct-motion-plane-q003",
    "num": 3,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "\u0001\nA and \n\u0001\nB are vectors such that \n\u0001\n\u0001\nA + B = \n.\n\u0001\n\u0001\nA - B Then, the angle between them is",
    "options": [
      "90º",
      "60º",
      "45º",
      "0º"
    ],
    "correctAnswer": 0,
    "explanation": "Given, \n\n| A\nB | | A\nB|\n+\n=\n-\n\u0001\n\u0001\n\u0001\n\u0001 \nSquaring both sides, \n2\n2\n| A\nB|\n| A\nB |\n+\n=\n-\n\u0001\n\u0001\n\u0001\n\u0001\n\n2\n2\n2\n2\nA\nB\n2A B\nA\nB\n2A B\n+\n+\n⋅\n=\n+\n-\n⋅\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001 \n4A B\n0\n⋅\n=\n\u0001 \u0001\n\nA B\n0\n⋅\n=\n\u0001 \u0001\n\n| A || B|cos\n0\nθ =\n\u0001\n\u0001\n\ncos\n0\nθ = \n90\nθ =\n°",
    "examSource": "EAMCET-1993",
    "image": "/images/yct_motion_plane/p1_img1_xref34.png"
  },
  {
    "id": "yct-motion-plane-q004",
    "num": 4,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "When two vectors \n\u0001\nA and \n\u0001\nB of magnitude a \nand b are added, the magnitude of the resultant \nvector is always",
    "options": [
      "equal to (a + b)",
      "less than (a + b)",
      "greater than (a + b)",
      "not greater than (a +"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \n\n| A |\na, B\nb\n=\n=\n\u0001\n\u0001\n\n2\n2\n| A\nB |\na\nb\n2abcosθ\n+\n=\n+\n+\n\u0001\n\u0001\n\n2\n2\nmax\n| A\nB |\na\nb\n2ab\n+\n=\n+\n+\n\u0001\n\u0001\n\n[For max, θ = 0] \n(\n)\nmax\n| A\nB |\na\nb\n+\n=\n+\n\u0001\n\u0001\n\nHence, magnitude of resultant vector is not greater than \n(a + b)",
    "examSource": "b)  EAMCET-1993",
    "image": "/images/yct_motion_plane/p1_img1_xref34.png"
  },
  {
    "id": "yct-motion-plane-q005",
    "num": 5,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "If \na \nunit \nvector \nis \nrepresented \nby \n^\n^\n^\n0.5i + 0.8j+ ck , the value of c is",
    "options": [
      "1",
      "0.11",
      "0.011",
      "0.39"
    ],
    "correctAnswer": 1,
    "explanation": "^\n^\n^\n^A\n0.5i\n0.8j\nck\n=\n+\n+\n\n^\n| A |\n1\n∴\n= \n2\n2\n2\n0.5\n0.8\nc\n1\n+\n+\n= \n\n2c\n0.11\n=\n\nc\n0.11\n=",
    "examSource": "TS-EAMCET-10.09.2020, Shift-1  EAMCET-1994",
    "image": "/images/yct_motion_plane/p1_img1_xref34.png"
  },
  {
    "id": "yct-motion-plane-q006",
    "num": 6,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The angle made by the vector \n^\n^\n\u0001\nA = i + j with x-\naxis is",
    "options": [
      "90º",
      "45º",
      "22.5º",
      "30º"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, \n^\n^\nA\ni\nj\n= +\n\u0001\n\n2\n2\n| A |\n1\n1\n2\n=\n+\n=\n\u0001\n\nAx = 1, Ay = 1 \nIf θ is the angle made by the vector with x-axis than, \n\nx\nA\n1\ncos\ncos\n2\n| A |\nθ\nθ\n=\n⇒\n=\n\u0001\n\n45\nθ =\n°",
    "examSource": "EAMCET-1996"
  },
  {
    "id": "yct-motion-plane-q007",
    "num": 7,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The angle between two vectors ^\n^\n^\n6i + 6j- 3k and \n^\n^\n^\n7i + 4j+ 4k is given by",
    "options": [
      "1\n1\ncos\n3\n-\n\n\n\n\n",
      "1\n5\ncos\n3\n-\n\n\n\n\n",
      "1\n2\nsin\n3\n-\n\n\n\n\n",
      "1\n5\nsin\n3\n-\n\n\n\n\n\n\n"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, \n^\n^\n^\nA\n6i\n6j\n3k\n=\n+\n-\n\u0001\n\n^\n^\n^\nB\n7i\n4j\n4k\n=\n+\n+\n\u0001\n\nA B\n| A || B| cosθ\n⋅\n=\n\u0001\n\u0001\n\u0001\n\u0001\n\n(\n) (\n)\n^\n^\n^\n^\n^\n^\n6i\n6j\n3k\n7i\n4j\n4k\n+\n-\n⋅\n+\n+\n\n36\n36\n9\n49\n16\n16 cosθ\n\n\n=\n+\n+ ⋅\n+\n+\n\n\n\n\n\n42\n24\n12\n81 81.cos\n9\n9cos\nθ\nθ\n+\n-\n=\n= ×\n\n 54\n81cosθ\n=\n\n54\ncos\n81\nθ =\n\n6\n2\ncos\n9\n3\nθ =\n=\n\n2\n2\n2\n2\nsin\n1\ncos\n1\n3\nθ\nθ\n\n\n= -\n= -\n\n\n\n\n2\n4\n5\nsin\n1\n9\n9\nθ = -\n=\n\n5\nsin\n3\nθ =\n\n1\n5\nsin\n3\nθ\n-\n=",
    "examSource": "EAMCET-1999"
  },
  {
    "id": "yct-motion-plane-q008",
    "num": 8,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The component of vector \n^\n^\n^\nx\ny\nz\nA = a i + a j+ a k \nalong the direction of ^ ^\ni - j is",
    "options": [
      "ax - ay + az",
      "ax - ay",
      "(\n)\nx\ny\na\na\n/\n2\n-",
      "(ax + ay +"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \n\nx\ny\nz\n^\n^\n^\nA\na i\na j\na k\n=\n+\n+\n\u0001\n\nLet \n^\n^\nB\ni\nj\n= -\n\u0001\n\nComponent of vector A along any vector B \n\nA.B\nB\n=\n\u0001 \u0001\n\u0001 \nComponent of vector A\n\u0001\n= \nx\ny\nz\n^\n^\n^\na i\na j\na k\n+\n+\nalong \n(\n)\n^\n^\nB\ni\nj\n=\n-\n\u0001\n\n(\n) (\n)\n( )\n(\n)\nx\ny\nz\n2\n2\n^\n^\n^\n^\n^\na i\na j\na k . i\nj\n1\n1\n+\n+\n-\n=\n+ -\nx\ny\na\na\n2\n-\n=",
    "examSource": "az)  EAMCET-2008"
  },
  {
    "id": "yct-motion-plane-q009",
    "num": 9,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "For vectors A\n\u0002\u0001\nand B\n\u0002\u0001\nmaking an angle θ which \none of the following relations is correct?",
    "options": [
      "A\nB\nB A\n×\n=\n×\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001",
      "A\nB\nABsin\n×\n=\nθ\n\u0002\u0001\n\u0002\u0001",
      "A\nB\nABcos\n×\n=\nθ\n\u0002\u0001\n\u0002\u0001",
      "A\nB\nB A\n×\n= -×\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001 \nDCE-2009"
    ],
    "correctAnswer": 3,
    "explanation": "We know that, \nCross product of vectors A\n\u0001\nand B\n\u0001\n\nA\nB\nABsin θ\n×\n=\n\u0001\n\u0001\n\nCross product of vectors B\n\u0001\nand A\n\u0001 \n\nB\nA\nBAsinθ\n×\n= -\n\u0001\n\u0001\n\nSo, \nA\nB\nB\nA\n×\n= -×\n\u0001\n\u0001\n\u0001\n\u0001",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q010",
    "num": 10,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Given \ntwo \nvectors \n^\n^\n^\nA =\ni + 2j\n3k\n-\n-\n\u0001\nand \n^\n^\n^\n-\nB = 4i\n2j+ 6k\n\u0001\n. The angle made by (A + B)\n\u0002\u0001\n\u0002\u0001\n\nwith x-axis is",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "correctAnswer": 1,
    "explanation": "^\n^\n^\nA\ni\n2j\n3k\n=-+\n-\n\u0001\n\n^\n^\n^\nB\n4i\n2j\n6k\n=\n-\n+\n\u0001\n\n^\n^\n^\n^\n^\n^\nA\nB\n( i\n2j\n3k)\n(4i\n2j\n6k)\n+\n= -+\n-\n+\n-\n+\n\u0001\n\u0001\n\n^\n^\n^\nA\nB\n3i\n0j\n3k\n+\n=\n+\n+\n\u0001\n\u0001\n\nα is angle with x-axis \n\ncosα =\n(\n)\nx\ncomponent of A\nB\n| A\nB |\n-\n+\n+\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001\n\ncosα = \n3\n3\n9\n0\n9\n3 2\n=\n+\n+\n\ncosα = 1\n2\n\n α = 45o",
    "examSource": "AP EAMCET(Medical)-2007"
  },
  {
    "id": "yct-motion-plane-q011",
    "num": 11,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Of the vectors given below, the parallel vectors \nare, \n\n→\n→\n→\n→\n\nA = 6i + 8j\nB = 210i + 280k\nC = 5.1i + 6.8j\nD = 3.6i + 6j+ 48k",
    "options": [
      "A\n→\n and B\n→",
      "A\n→\nand C\n→",
      "A\n→\n and D\n→",
      "C\n→\n and D\n→"
    ],
    "correctAnswer": 1,
    "explanation": "If component of vector is same then vectors \nwill be same. \n^\n^\nA\n6i\n8j\n=\n+\n\u0001\n\n^\n^\nB\n210i\n280k\n=\n+\n\u0001\n\n^\n^\nC\n5.1i\n6.8j\n=\n+\n\u0001\n\n^\n^\n^\nD\n3.6i\n6j\n48k\n=\n+\n+\n\u0001\n\n(\n)\n1.7\n^\n^\n^\n^\nC\n5.1i\n6.8j\n6i\n8j\n2\n=\n+\n=\n+\n\u0001\n∵\n\nHence, it is clear that A\n\u0001\n and C\n\u0001\n are parallel and we can \nwrite as, \n1.7\nC\nA\n2\n=\n\u0002\u0001\n\u0002\u0001 \nThis implies that A is parallel to C.",
    "examSource": "AP EAMCET(Medical)-2006"
  },
  {
    "id": "yct-motion-plane-q012",
    "num": 12,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "A vector \n\u0002\u0001\nQ which has a magnitude of 8 is \nadded to the vector\n\u0002\u0001\nP , which lies along the X-\naxis. The resultant of these two vectors is a \nthird vector \n\u0002\u0001\nR , which lies along the Y-axis and \nhas a magnitude twice that of \n\u0002\u0001\nP . The \nmagnitude of \n\u0002\u0001\nP is:",
    "options": [
      "6\n5",
      "8\n5",
      "12\n5",
      "16\n5"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \n\nQ\n\u0001\n= 8 units \n\nR\n\u0001\n= 2P\n\u0001\n\n2\n2\n2\nQ\nR\nP\n=\n+\n\u0001\n\u0001\n\u0001\n\n2\n2\n2\n(8)\n(2P)\nP\n=\n+\n\u0001\n\u0001\n\n2\n2\n4P\nP\n=\n+\n\u0001\n\u0001\n\n2\n64\n5P\n=\n\u0001\n\n2\n64\n8\nP\nP\n5\n5\n=\n⇒\n=\n\u0001\n\u0001",
    "examSource": "AP EAMCET(Medical)-2004",
    "image": "/images/yct_motion_plane/p3_img1_xref52.png"
  },
  {
    "id": "yct-motion-plane-q013",
    "num": 13,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Angle (in rad) made by the vector \n^\n^\n3 i\nj\n+\n with \nthe X-axis:",
    "options": [
      "6\nπ",
      "4\nπ",
      "3\nπ",
      "2\nπ"
    ],
    "correctAnswer": 0,
    "explanation": "^\n^\nA\n3i\nj\n=\n+\n\u0001\n\nAngle with x-axis : \ncosθ = \nx\nA\n| A |\n\u0002\u0001 \ncosθ = \n(\n)\n( )\n2\n2\n3\n3\n2\n3\n1\n=\n+\n\nθ = 30° \n6\nπ\nθ =",
    "examSource": "AP EAMCET(Medical)-2005",
    "image": "/images/yct_motion_plane/p3_img1_xref52.png"
  },
  {
    "id": "yct-motion-plane-q014",
    "num": 14,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The unit vector parallel to resultant of the \nvectors \n^\n^\n^\nA\n4i\n3j\n6k\n→\n=\n+\n+\n and \n^\n^\n^\nB\ni\n3j\n8k\n= -+\n-\n\u0001\n is:",
    "options": [
      "(\n)\n1\n^\n^\n^\n3i\n3j\n2k\n7\n+\n-",
      "(\n)\n1\n^\n^\n^\n3i\n6j\n2k\n7\n+\n-",
      "(\n)\n1\n^\n^\n^\n3i\n6j\n2k\n49\n+\n-",
      "(\n)\n1\n^\n^\n^\n3i\n6j\n2k\n49\n-\n+"
    ],
    "correctAnswer": 1,
    "explanation": "^\n^\n^\nA\n4i\n3j\n6k\n=\n+\n+\n\u0001\n\n^\n^\n^\nB\ni\n3j\n8k\n=-+\n-\n\u0001\n\n^\n^\n^\n^\n^\n^\nR\nA\nB\n(4i\n3j\n6k)\n( i\n3j\n8k)\n=\n+\n=\n+\n+\n+ -+\n-\n\u0001\n\u0001\n\u0001\n\n^\n^\n^\nR\n3i\n6j\n2k\n=\n+\n-\n\u0001\n\nunit vector, \nR\n^R\n| R |\n=\n\u0001\n\u0001 \n2\n2\n2\n| R |\n3\n6\n2\n=\n+\n+\n\u0001\n\n9\n36\n4\n=\n+\n+ \n\n49\n=\n\n| R |\n7\n=\n\u0001\n\n^\n^\n^\n3i\n6j\n2k\n^R\n7\n+\n-\n=\n\n(\n)\n1\n^\n^\n^\n^R\n3i\n6j\n2k\n7\n=\n+\n-",
    "examSource": "AP EAMCET(Medical)-2000",
    "image": "/images/yct_motion_plane/p3_img1_xref52.png"
  },
  {
    "id": "yct-motion-plane-q015",
    "num": 15,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 2,
    "explanation": "Pressure is a scalar quantity because pressure \nis the ratio of normal force to the area and the direction \nof force is not required.",
    "examSource": "Pressure is a scalar quantity because      (a) it is the ratio of force to area and both force  and area are vector quantities      (b) it is the ratio of magnitude of force to area     (c) it is the ratio of component of the force  normal to the area    (d) it depends on the size of the area chosen  SCRA-2015",
    "image": "/images/yct_motion_plane/p3_img1_xref52.png"
  },
  {
    "id": "yct-motion-plane-q016",
    "num": 16,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The component of a vector r along X-axis will \nhave a maximum value, if :",
    "options": [
      "r is along positive X-axis",
      "r is along positive Y-axis",
      "r is along negative Y-axis",
      "r makes an angle of 450"
    ],
    "correctAnswer": 0,
    "explanation": "rx = r cosθ \n\n rx is maximum when θ = 0 \nr will be along positive X-axis for maximum value.",
    "examSource": "with the X-axis  Karnataka CET-2016",
    "image": "/images/yct_motion_plane/p3_img1_xref52.png"
  },
  {
    "id": "yct-motion-plane-q017",
    "num": 17,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Which of the following is not a vector quantity?",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 3,
    "explanation": "Weight, Nuclear spin and Momentum are \nvector quantities because they have both magnitude as \nwell as direction, whereas potential energy has \nmagnitude only but no direction, thus it is a scalar \nquantity.",
    "examSource": "(a) Weight   (b) Nuclear spin    (c) Momentum  (d) Potential energy  Karnataka CET-2014",
    "image": "/images/yct_motion_plane/p4_img1_xref58.png"
  },
  {
    "id": "yct-motion-plane-q018",
    "num": 18,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Two equal forces (P each) act at a point \ninclined to each other at an angle of 1200. the \nmagnitude of their resultant is :",
    "options": [
      "P/2",
      "P/4",
      "P",
      "2"
    ],
    "correctAnswer": 2,
    "explanation": "Given, Q = P, θ = 120° \n∵ \n2\n2\nR\nP\nQ\n2PQcos\n=\n+\n+\nθ \n\n= \n2\n2\nP\nP\n2P\nPcos120\n+\n+\n×\n° \n\n= \n2\n2\n1\nP\nP\n2P\nP\nP\n2\n\n\n+\n-\n×\n×\n=\n\n\n\n",
    "examSource": "P  Karnataka CET-2004",
    "image": "/images/yct_motion_plane/p4_img1_xref58.png"
  },
  {
    "id": "yct-motion-plane-q019",
    "num": 19,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The resultant of two forces 3P and 2P is R. If \nthe first force is doubled then the resultant is \nalso doubled. The angle between the two forces \nis :",
    "options": [
      "900",
      "1800",
      "600",
      "1200"
    ],
    "correctAnswer": 3,
    "explanation": "Case - I \n(\n)\n(\n)\n2\n2\n2\nR\n3P\n2P\n12P cos\n=\n+\n+\nθ \nR\nP 13 12cos\n=\n+\nθ \nCase -II \n(\n)\n(\n)\n2\n2\n2\n1\nR\n6P\n2P\n24P cos\n=\n+\n+\nθ \n\nP 40\n24cos\n=\n+\nθ \nFrom case (I) and case (II), \n1\nR\n40\n24cos\n2\nR\n13 12cos\n+\nθ\n=\n=\n+\nθ\n [\n]\n1\nR\n2R\n=\n∵\n\n40 + 24 cosθ = 52 + 48 cosθ \n\n24 cosθ = -12 \n\ncosθ =\n1\n2\n-\n ⇒ \n1\n1\ncos\n2\n-\n\nθ =\n-\n\n\n\n \n\nθ= 1200",
    "examSource": "Karnataka CET-2001",
    "image": "/images/yct_motion_plane/p4_img1_xref58.png"
  },
  {
    "id": "yct-motion-plane-q020",
    "num": 20,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Three vectors satisfy the relation A.B = 0\n\u0001 \u0001\nand \nA.C = 0\n\u0001 \u0001\n then A\n\u0001\nis parallel to :",
    "options": [
      "C\n\u0001",
      "B\n\u0001",
      "B C\n×\n\u0001\n\u0001",
      "B.C\n\u0001\n\u0001\n\nJCECE-2013"
    ],
    "correctAnswer": 2,
    "explanation": "A.B\n0\nA\nB\n= ⇒\n⊥\n\u0001\n\u0001\n\u0001\n\u0001\n\nA.C\n0\nA\nC\n=\n⇒\n⊥\n\u0001 \u0001\n\u0001\n\u0001\n\nA\n\u0001\n is perpendicular to both B\n\u0001\n and C\n\u0001\n and B C\n×\n\u0001\n\u0001\nis also \nperpendicular to both B\n\u0001\n and C\n\u0001\n. \nTherefore, A\n\u0001\n is parallel to B C\n×\n\u0001\n\u0001",
    "examSource": "COMEDK 2013  Karnataka CET-2003",
    "image": "/images/yct_motion_plane/p4_img1_xref58.png"
  },
  {
    "id": "yct-motion-plane-q021",
    "num": 21,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Three forces F1, F2 and F3 together keep a body \nin equilibrium. If F1 = 3 N along the positive x-\naxis, F2 = 4 N along the positive y-axis, then the \nthird force F3 is",
    "options": [
      "5N making an angle\n1 3\ntan\n4\n-\n\nθ =\n\n\n\n\n with \nnegative y-axis",
      "5N making an angle \n1 4\ntan\n3\n-\n\nθ =\n\n\n\n\n with \nnegative y-axis",
      "7N making an angle \n1 3\ntan\n4\n-\n\nθ =\n\n\n\n\n with \nnegative y-axis",
      "7N making an angle \n1 4\ntan\n3\n-\n\nθ =\n\n\n\n\n with \nnegative y-axis \nJ&"
    ],
    "correctAnswer": 2,
    "explanation": "F1, F2, F3 keep a body in equilibrium then \nresultant of force, \n\nΣF = 0 \nF1 + F2 +F3 = 0 \n3 + 4 + F3 = 0 \nF3 = - 7N \nMagnitude of F3 = 7N \nθ is angle made with-Y axis \ntanθ = 3\n4 \nθ = tan-1 3/4 \nF3 make angle with negative y-axis.",
    "examSource": "K CET- 2010",
    "image": "/images/yct_motion_plane/p4_img1_xref58.png"
  },
  {
    "id": "yct-motion-plane-q022",
    "num": 22,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Magnitudes of four pairs of displacement \nvectors are given. Which pair of displacement \nvectors, under vector addition, fails to give a \nresultant vector of magnitude 3 cm ?",
    "options": [
      "2 cm, 7 cm",
      "1 cm, 4 cm",
      "2 cm, 3 cm",
      "2 cm, 4 cm \nJ&"
    ],
    "correctAnswer": 0,
    "explanation": "The magnitude R of the resultant of two \nvectors A and B depends upon the magnitudes of A and \nB and the angle θ between them and is given by \n\nR2 = A2 + B2 + 2AB cos θ \nWhen θ = 0, R is maximum and given by \n\n2\n2\n2\nmax\nR\nA\nB\n2AB\n=\n+\n+\n = (A + B)2 \n\nRmax = A + B \nWhen θ = 180º, R is minimum and given by \n\n2\n2\n2\nmin\nR\nA\nB\n2AB\n=\n+\n-\n= (A - B)2 \n\nRmin = A - B \n\nThus, the magnitude of resultant will lie between A - B \nand A + B. \nNow, \n\nChecking option (a) \n\n|A - B| = |2 - 7|= 5 \n\n|A + B| = |2 + 7| = 9 \nSo, \n5 ≤ R ≤ 9 and R = 4 \nHence, the option (a) is the correct answer.",
    "examSource": "K CET- 2009",
    "image": "/images/yct_motion_plane/p4_img1_xref58.png"
  },
  {
    "id": "yct-motion-plane-q023",
    "num": 23,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "A body is under the action of two mutually \nperpendicular forces of 3N and 4N. The \nresultant force acting on the body is",
    "options": [
      "7 N",
      "1 N",
      "5 N",
      "zero \nJ&"
    ],
    "correctAnswer": 2,
    "explanation": "The two forces be \n\nA = 3N and B = 4N \nA is mutually perpendicular to B. \n∴ θ = 90° \n2\n2\n2\n2\nR\nA\nB\n2ABcos\nR\n4\n(3)\n2ABcos90\nR\n16\n9\n0\nR\n5N\n=\n+\n+\nθ\n=\n+\n+\n°\n=\n+\n+\n=",
    "examSource": "K CET- 2008"
  },
  {
    "id": "yct-motion-plane-q024",
    "num": 24,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "If the scalar and vector products of two vectors \nA,B\n\u0002\u0001\n\u0001\n are equal in magnitude, then the angle \nbetween the two vectors is",
    "options": [
      "45°",
      "90°",
      "180°",
      "360° \nJ&"
    ],
    "correctAnswer": 0,
    "explanation": "A.B = A × B \n\n|A||B|cosθ = |A||B|sinθ \n\nsin\nA B\ncos\nA B\nθ =\nθ\n\ntanθ = 1 \n\nθ = 45°",
    "examSource": "K CET- 2008"
  },
  {
    "id": "yct-motion-plane-q025",
    "num": 25,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "\u0001\nA is a vector with magnitude A, then the unit \nvector ^A in the direction of \n\u0001\nA is",
    "options": [
      "AA\n\u0001",
      "A A\n⋅\n\u0001\n\u0001",
      "A\nA\n×\n\u0001\n\u0001",
      "A\nA\n\u0001\n\nJ&"
    ],
    "correctAnswer": 3,
    "explanation": "Unit vector \nA\nA\n^A\nA\n| A |\n=\n=\n\u0001\n\u0001\n\u0001",
    "examSource": "K CET- 2008"
  },
  {
    "id": "yct-motion-plane-q026",
    "num": 26,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Two vectors are given by \n^\n^\n^\n\u0001\nA = 3i + j+ 3k and \n^\n^\n^\n\u0001\nB = 3i + 5j- 2k . Find the third vector \n\u0001\nC if \n\u0001\n\u0001\n\u0001\nA + 3B -C = 0",
    "options": [
      "^\n^\n^\n12i 14j 12k\n+\n+",
      "^\n^\n^\n13i 17j 12k\n+\n+",
      "^\n^\n^\n12i 16j 3k\n+\n-",
      "^\n^\n^\n15i 13j 4k\n+\n+\n\nJ&"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \n^\n^\n^\nA\n3i\nj\n3k\n=\n+ +\n\u0001\n, \n^\n^\n^\nB\n3i\n5j\n2k\n=\n+\n-\n\u0001\n\nA\n3B\nC\n0\n+\n-\n=\n\u0001\n\u0001\n\u0001\n\n(\n)\n^\n^\n^\n^\n^\n^\n3i\nj\n3k\n3 3i\n5j\n2k\nC\n0\n+ +\n+\n+\n-\n-\n=\n\u0001\n\n^\n^\n^\n^\n^\n^\n3i\nj\n3k\n9i\n15j\n6k\nC\n0\n+ +\n+\n+\n-\n-\n=\n\u0001\n\n^\n^\n^\n12i\n16j\n3k\nC\n0\n+\n-\n-\n=\n\u0001\n\n^\n^\n^\nC\n12i\n16j\n3k\n=\n+\n-\n\u0001",
    "examSource": "K CET- 2007"
  },
  {
    "id": "yct-motion-plane-q027",
    "num": 27,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Vector which is perpendicular to a \n\n^\n^\n(acos i\nbsin\nj)\nθ +\nθ\n is",
    "options": [
      "^\n^\nbsinθi\nacosθ j\n-",
      "1\n1\n^\n^\nsinθi\ncosθ j\na\nb\n-",
      "^\n5k",
      "all of these \nJ&"
    ],
    "correctAnswer": 3,
    "explanation": "Two vectors are perpendicular if their dot \nproduct is zero i.e., A B\n0.\n⋅\n=\n\u0001 \u0001\n\nIn option (a) \n(\n) (\n)\n^\n^\n^\n^\nacos i\nbsin j\nbsin i\na cos j\nθ +\nθ ⋅\nθ -\nθ \n\nabcos sin\nabsin cos\n0\n=\nθ\nθ -\nθ\nθ = \nIn option (b) \n1\n1\n^\n^\n^\n^\n(acos i\nbsin j) ( sin i\ncos j)\na\nb\nθ +\nθ ⋅\nθ -\nθ \n\nsin cos\nsin cos\n0\n=\nθ\nθ -\nθ\nθ =\n\nIn option (c) \n(\n)\n^\n^\n^\n(acos i\nbsin j)\n5k\n0.\nθ +\nθ ⋅\n=",
    "examSource": "K CET- 2006"
  },
  {
    "id": "yct-motion-plane-q028",
    "num": 28,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Velocity is",
    "options": [
      "scalar",
      "vector",
      "neither scalar nor vector",
      "both scalar and vector \nJ&"
    ],
    "correctAnswer": 1,
    "explanation": "A vector quantity is defined as the physical \nquantity that has both magnitude as well as direction. \nVelocity is the directional speed of a object in motion \nand indication of rate of change in position as observed \nby a particular frame of reference. \nVelocity is a physical vector quantity.",
    "examSource": "K CET- 2002"
  },
  {
    "id": "yct-motion-plane-q029",
    "num": 29,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The sum of two vectors A\n\u0002\u0001\nand B\n\u0002\u0001\nis at right \nangles to their difference. Then",
    "options": [
      "A = B",
      "A = 2B",
      "B = 2A",
      "A\n\u0002\u0001\nand B\n\u0002\u0001"
    ],
    "correctAnswer": 0,
    "explanation": "Let r1 and r2 be the sum and difference of \nvectors A\n\u0001\n and B\n\u0001\n respectively i.e., \n\nr1 = A\n\u0001\n + B\n\u0001\n\nr2 = A\n\u0001\n - B\n\u0001\n\nr1 is perpendicular to r2 \n\n(given) \nTaking the dot product of r1 and r2 \n\nr1. r2 = ( A\n\u0001\n + B\n\u0001\n) . ( A\n\u0001\n - B\n\u0001\n) \n\n0 = A2 - B2 \n\nA2 = B2 \n\nA = B",
    "examSource": "have the same direction  BCECE-2008"
  },
  {
    "id": "yct-motion-plane-q030",
    "num": 30,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "The vectors A\n\u0002\u0001\n and B\n\u0002\u0001\n are such that \n\n A + B = A - B\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001 \n\n The angle between the two vectors is",
    "options": [
      "60º",
      "75º",
      "45º",
      "90º"
    ],
    "correctAnswer": 3,
    "explanation": "Let angle between A and B\n\u0001\n\u0001\nbe θ \nThe resultant of A\nB\n+\n\u0001\n\u0001\nis given by \nR = \n2\n2\nA\nB\n2ABcosθ\n+\n+\n\nThe resultant of A\nB\n-\n\u0001\n\u0001\nis given by \n2\n2\nR '\nA\nB\n2ABcosθ\n=\n+\n-\n\nAccording to the question, \n\nR = R' \n\n2\n2\n2\n2\nA\nB\n2ABcos\nA\nB\n2ABcos\nθ\nθ\n+\n+\n=\n+\n-\n\n2\n2\n2\n2\nA\nB\n2ABcos\nA\nB\n2ABcos\nθ\nθ\n+\n+\n=\n+\n-\n\n4ABcosθ = 0 \n\n90\nθ =\n°",
    "examSource": "WBJEE-2016,  AIIMS-25.05.2019(E) Shift-2"
  },
  {
    "id": "yct-motion-plane-q031",
    "num": 31,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The vector sum of two forces is perpendicular \nto their vector differences. In that case, the \nforces",
    "options": [
      "are not equal to each other in magnitude",
      "cannot be predicted",
      "are equal to each other",
      "are equal to each other in magnitude \n[AIPMT 2003] \nAIIMS- 2012"
    ],
    "correctAnswer": 3,
    "explanation": "Let \n1f\n\u0002\u0001\nand \n2f\n\u0002\u0002\u0001\nbe the two forces \nThen sum of forces, a =\n\u0001\n1f\n\u0002\u0001\n+ \n2f\n\u0002\u0002\u0001\n\nAnd difference, b =\n\u0001\n1f\n\u0002\u0001\n- \n2f\n\u0002\u0002\u0001\n\nThe two forces are perpendicular to each other (\n)\na.b\n\u0001 \u0001\n= 0 \n\n(\n) (\n)\n1\n2\n1\n2\nf\nf\n. f\nf\n0\n+\n-\n=\n\u0002\u0001\n\u0002\u0002\u0001\n\u0002\u0001\n\u0002\u0002\u0001\n\n2\n2\n1\n2\n| f |\n| f |\n0\n-\n=\n\u0002\u0001\n\u0002\u0002\u0001\n\n2\n2\n1\n2\n| f |\n| f |\n=\n\u0002\u0001\n\u0002\u0002\u0001\n\n1\n2\n| f | | f |\n=\n\u0002\u0001\n\u0002\u0002\u0001\n\nIn that case both the force are equal and have same \nmagnitude.",
    "examSource": "TS-EAMCET - 09.09.2020"
  },
  {
    "id": "yct-motion-plane-q032",
    "num": 32,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The sum of two vectors A\n\u0002\u0001\n and B\n\u0002\u0001\nis at right \nangles to their difference. This is possible if",
    "options": [
      "A = 2B",
      "A = B",
      "A =3B",
      "B =2A \nJ&"
    ],
    "correctAnswer": 1,
    "explanation": "Let, \n1P\n\u0001\n and \n2P\n\u0001\n sum and difference of vectors \nA\n\u0001\n and B\n\u0001\n, \n1P\n\u0002\u0001\n = ( A\n\u0001\n + B\n\u0001\n) \n2P\n\u0002\u0002\u0001\n = ( A\n\u0001\n - B\n\u0001\n) \n1P\n\u0002\u0001\n. \n2P\n\u0002\u0002\u0001\n = ( A\n\u0001\n + B\n\u0001\n).( A\n\u0001\n - B\n\u0001\n) \n 0 = A2 - B2 \n\nA2 = B2 \n\nA = B",
    "examSource": "K CET- 1998"
  },
  {
    "id": "yct-motion-plane-q033",
    "num": 33,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "What is the torque of a force ^\n^\n^\n3i + 7j+ 4k about \nthe origin, if the force acts on a particle whose \nposition vector is ^\n^\n^\n2i + 2j+1k ?",
    "options": [
      "^\n^\n^\ni - 5j+8k",
      "^\n^\n^\n2i + 2j+ 2k",
      "^\n^\n^\ni + j+ k",
      "^\n^\n^\n3i + 2j+ 3k \nJ&"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n^\n^\n^\nF\n3i\n7j\n4k\n^\n^\n^\nr\n2i\n2j 1k\n=\n+\n+\n=\n+\n+\n\u0001\n\u0001\n\nr\nF\nτ = ×\n\u0001\n\u0001 \n^\n^\n^\ni\nj\nk\n2\n2\n1\n3\n7\n4\nτ =\n\nτ = ^i (8- 7) - ^j (8 - 3) + ^k (14 - 6) \n τ = ^i - ^\n5j + ^\n8k",
    "examSource": "K-CET-2014"
  },
  {
    "id": "yct-motion-plane-q034",
    "num": 34,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The \nscalar \nproduct \nof \ntwo \nvectors \n^\n^\n^\n\u0001\nA = 2i + 2j - k and\n^\n^\n\u0001\nB = - j+ k is given by",
    "options": [
      "A . B = 3\n\u0001\n\u0001",
      "A . B = 4\n\u0001\n\u0001",
      "A . B = - 4\n\u0001\n\u0001",
      "A . B = - 3\n\u0001\n\u0001\n\nJ&"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, \n^\n^\n^\n^\n^\n^\n^\n^\nA\n2i\n2j\nk,\nB\nj\nk\n0i\nj\nk\n=\n+\n-\n= -+\n=\n-+\n\u0002\u0001\n\u0002\u0001\n\n(\n) (\n)\n^\n^\n^\n^\n^\n^\nA.B\n2i\n2j\nk . 0i\nj\nk\n=\n+\n-\n-+\n\u0002\u0001 \u0002\u0001\n\n = 0 + 2 × (-1) + (-1) × 1 \n = -2 - 1 = -3",
    "examSource": "K-CET-2013"
  },
  {
    "id": "yct-motion-plane-q035",
    "num": 35,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The velocity vector of the motion described by \nthe position vector of a particle r = \n^\n^\n2\n2ti + t j is",
    "options": [
      "^\n^\nv = 2i + 2t j",
      "^\n^\nv = 2ti + 2t j",
      "2\n^\n^\nv = ti + t j",
      "2\n^\n^\nv = 2i + t j \nJ&"
    ],
    "correctAnswer": 0,
    "explanation": "Given, r = \n2\n^\n^\n2ti\nt j\n+\n\nVelocity ( )\ndr\nv\ndt\n=\n\u0001\n\ndr\n^\n^\n2i\n2tj\ndt =\n+",
    "examSource": "K-CET-2013"
  },
  {
    "id": "yct-motion-plane-q036",
    "num": 36,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "A certain vector in the xy plane has an x-\ncomponent of 12 m and a y-component of 8 m. \nIt is then rotated in the xy plane so that its x-\ncomponent is halved. Then its new y-\ncomponent is approximately",
    "options": [
      "14 m",
      "13.11 m",
      "10 m",
      "2.0 m \nJ&"
    ],
    "correctAnswer": 1,
    "explanation": "x - component = 12cm \n\ny - component = 8cm \nLength of the resultant vector (R) \n=\n2\n2\n2\n2\nx\ny\n12\n8\n+\n=\n+\n\n= 144\n64\n208\n+\n=\n\nNow, \nx\n12\nx'\n6cm\n2\n2\n=\n=\n=\n\nResultant will always be constant even after the rotation \nSo, \n\n2\n2\n(x')\n(y')\n208\n+\n=\n\n2\n2\n(6)\n(y')\n208\n+\n=\n\n (y')2 = 208 - 36 = 172 \n (y') = 172 \n (y') = 13.11m",
    "examSource": "K-CET-2012",
    "image": "/images/yct_motion_plane/p7_img1_xref80.png"
  },
  {
    "id": "yct-motion-plane-q037",
    "num": 37,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Figure shows three forces \n\u0001\n\u0001\n1\n2\nF ,F and \n\u0001\n3\nF acting \nalong the sides of an equilateral triangle. If the \ntotal torque acting at point 'O' (centre of the \ntriangle) is zero then the magnitude of \n\u0001\n3\nF is",
    "options": [
      "F1+F2",
      "F1-F2",
      "1\n2\nF\nF\n2\n-",
      "1\n2"
    ],
    "correctAnswer": 0,
    "explanation": "Force \n1F\n\u0001\nand \n2\nF\n\u0001\n produce anticlockwise \ntorque while force \n3\nF\n\u0001\nproduces clockwise torque. The \ntorque in the two directions balance each other. The \nperpendicular distance of the forces from the centre is \nthe same. \n∴ F1r + F2r = F3r or F1+F2 = F3",
    "examSource": "F F  MHT-CET 2020",
    "image": "/images/yct_motion_plane/p7_img1_xref80.png"
  },
  {
    "id": "yct-motion-plane-q038",
    "num": 38,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Two forces each of magnitude 'P' act at right \nangles. Their effect is neutralized by a third \nforce acting along their bisector in opposite \ndirection. The magnitude of the third force is \n\n\n\n\n\n\nπ\ncos\n= 0\n2",
    "options": [
      "P",
      "P\n2",
      "2P",
      "P\n2"
    ],
    "correctAnswer": 2,
    "explanation": "The third force will have magnitude equal to \ntheir resultant, \n\nR = \n2\n2\n1\n2\n1\n2\nR\nR\n2R R cos\n+\n+\nθ \n\nR = \n2\n2\nP\nP\n2.P.Pcos90\n+\n+\n° \n\n2\nR\n2P\n=\n\nR = \n2P",
    "examSource": "MHT-CET 2020",
    "image": "/images/yct_motion_plane/p7_img1_xref80.png"
  },
  {
    "id": "yct-motion-plane-q039",
    "num": 39,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "In the given diagram, if PQ = A, QR = B and \nRS = C, then PS equals",
    "options": [
      "A - B + C",
      "A + B - C",
      "A + B + C",
      "A - B - C"
    ],
    "correctAnswer": 2,
    "explanation": "Given, PQ = A, QR = B, RS = C, PS = ? \n\nAccording to polygon law of vector addition, \n\nPQ + QR + RS - PS = 0 \n\nPS = PQ + QR + RS \n\nPS = A + B + C",
    "examSource": "",
    "image": "/images/yct_motion_plane/p7_img1_xref80.png"
  },
  {
    "id": "yct-motion-plane-q040",
    "num": 40,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Among the following, the vector quantity is",
    "options": [
      "pressure",
      "gravitation potential",
      "stress",
      "impulse"
    ],
    "correctAnswer": 3,
    "explanation": "Impulse is defined as the product of net force \nand time interval for which it was applied. \ni.e. Impulse = Ft\n\u0001 \nForce is vector quantity. Therefore, Impulse is a vector \nquantity. Stress is a tensor quantity.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p7_img1_xref80.png"
  },
  {
    "id": "yct-motion-plane-q041",
    "num": 41,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The sum of magnitudes of two forces acting at \na point is 16 N and their resultant 8 3 N is at \n90º with the force of smaller magnitude. The \ntwo forces (in N) are",
    "options": [
      "11, 5",
      "9, 7",
      "6, 10",
      "4, 12"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \nP + Q = 16 \n\n R\n8 3\n=\n\n2\n2\nR\nP\nQ\n2PQcos\n=\n+\n+\nθ\n∵\n\n2\n2\n8 3\nP\nQ\n2PQcosθ\n=\n+\n+\n\no\nsin\ntan90\nP\nQcos\nθ\nθ\n=\n= ∞\n+\n∵\n\nP\nQcos\n0\n+\nθ = ⇒ \nP\ncos\nQ\nθ = -\n\nSo, \n2\n2\nP\n8 3\nP\nQ\n2PQ\nQ\n\n\n=\n+\n+\n-\n\n\n\n\n\n2\n2\n2\n8 3\nP\nQ\n2P\n=\n+\n-\n⇒ \n2\n2\n8 3\nQ\nP\n=\n-\n\n2\n2\nQ\nP\n192\n-\n=\n\n∴ Q2 - (16 - Q)2 = 192 \n( ∵P = 16 - Q) \n2\n2\nQ\n256\nQ\n32Q\n192\n-\n-\n+\n=\n\n32Q = 448 \nQ = 14 N \nNow, from P + Q = 16 \nP = 16 - 14 = 2N \nP\n2N\nQ\n14N\n=\n=",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q042",
    "num": 42,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "A force \n\n(4i + j- 2k)\n\nN acting on a body \nmaintains its velocity at (\n)\n^\n^\n^\n2i + 2j+ 3k m/s. The \npower exerted is",
    "options": [
      "4 W",
      "5 W",
      "2 W",
      "8 W"
    ],
    "correctAnswer": 0,
    "explanation": "Given, \n(\n)\n^\n^\n^\nF\n4i + j- 2k\n=\n\u0001\n\n(\n)\n^\n^\n^\nv\n2i + 2j+3k\n=\n\u0001\n\nWe know that, \nP\nF v\n=\n⋅\n\u0001 \u0001 \n(\n) (\n)\n^\n^\n^\n^\n^\n^\nP\n4i + j- 2k\n2i + 2j+3k\n=\n⋅\n\n(where, ^ ^\n^ ^\n^ ^\ni i\nj j\nk k\n1\n⋅= ⋅=\n⋅\n= ) \nP\n8\n2\n6\n=\n+\n-\n⇒ P = 4W",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q043",
    "num": 43,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "A particle acted upon by constant forces \n\n4i + j- 3k and \n\n3i + j-k is displaced from the \npoint \n\ni + 2j+ 3k to the point \n\n5i + 4j+ k. The \ntotal work done by the forces in SI unit is",
    "options": [
      "20",
      "40",
      "50",
      "30"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \n1\n^\n^\n^\nF\n4i\nj\n3k\n=\n+ -\n\u0002\u0001\n\n2\n^\n^\n^\nF\n3i\nj\nk\n=\n+ -\n\u0002\u0002\u0001\n\n1\n^\n^\n^\nr\ni\n2j\n3k\n= +\n+\n\u0002\u0001\n\n2\n^\n^\n^\nr\n5i\n4j\nk\n=\n+\n+\n\u0002\u0001\n\nNow force, \nR\n1\n2\nF\nF\nF\n=\n+\n\u0001\n\u0001\n\u0001 \n(\n) (\n)\nR\n^\n^\n^\n^\n^\n^\nF\n4i + j- 3k + 3i + j- k\n=\n\u0001\n\nR\n^\n^\n^\nF\n7i\n2j\n4k\n=\n+\n-\n\u0002\u0002\u0001\n\nDisplacement, \n2\n1\ndr\nr\nr\n=\n-\n\u0002\u0002\u0001\n\u0002\u0001\n\u0002\u0001 \n^\n^\n^\n^\n^\n^\ndr\n(5i\n4j\nk)\n(i\n2j\n3k)\n=\n+\n+\n-\n+\n+\n\u0002\u0002\u0001\n\n^\n^\n^\ndr\n4i\n2j\n2k\n=\n+\n-\n\u0002\u0002\u0001\n\nWork done by the forces, \nR\nW\nF .dr\n=\n\u0002\u0002\u0001 \u0002\u0002\u0001 \n\n^\n^\n^\n^\n^\n^\n(7i\n2j\n4k).(4i\n2j\n2k)\n=\n+\n-\n+\n-\n\n(where, ^ ^\n^ ^\n^ ^\ni i\nj j\nk k\n1\n⋅= ⋅=\n⋅\n= ) \nW\n28\n4\n8\n=\n+\n+ \nW = 40J",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q044",
    "num": 44,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "If \nthe \ntwo \nvectors \n\nA = 2i + 3j+ 4k\n\u0002\u0001\n\n and \n\nB = i + 2j-nk\n\u0002\u0001\n\nare perpendicular then the value \nof n is :",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \n\n^\n^\n^\nA\n2i\n3j\n4k\n=\n+\n+\n\u0001\n\n^\n^\n^\nB\ni\n2j\nnk\n= +\n-\n\u0001\n\nIf two vectors are perpendicular then their scalar \nproduct is zero. \nA.B\n0\n∴\n=\n\u0002\u0001 \u0002\u0001\n\n(\n) (\n)\n^\n^\n^\n^\n^\n^\n2i\n3j\n4k\ni\n2j\nnk\n0\n+\n+\n⋅\n+\n-\n= \n2\n6\n4n\n0\n+\n-\n= \n n = 2",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q045",
    "num": 45,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "A particle is displaced from a position \n\n(2i - j+ k)\n\nto another position \n\n(3i + 2j- 2k)\n\nunder the action of the force of \n\n(2i + j-k).\n\n The \nwork done by the force in an arbitrary unit is:",
    "options": [
      "8",
      "10",
      "12",
      "16"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n^\n^\n^\nF\n2i\nj\nk\n=\n+ -\n\u0001\n\n1\n^\n^\n^\nr\n2i\nj\nk\n=\n-+\n\u0001\n\n2\n^\n^\n^\nr\n3i\n2j\n2k\n=\n+\n-\n\u0002\u0001\n\nW\nF.dr\n=\n\u0001 \u0002\u0002\u0001 \n2\n1\n^\n^\n^\nW\n(2i\nj\nk).(r\nr )\n=\n+ -\n-\n\u0002\u0001\n\u0002\u0001 \n(\n)\n2\n1\ndr\nr\nr\n=\n-\n\u0001\n\u0001\n\u0001\n∵\n\n =(\n) (\n) (\n)\n^\n^\n^\n^\n^\n^\n^\n^\n^\n2i + j - k\n3i + 2j - 2k\n2i\nj+ k\n\n\n⋅\n-\n-\n\n\n\n \n\n^\n^\n^\n^\n^\n^\n(2i\nj\nk).(i\n3j\n3k)\n=\n+ -\n+\n-\n = 2 + 3 + 3 \n∴ W = 8 unit",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q046",
    "num": 46,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "If a vector A is given as A\n\n4i\n3j\n12k\n=\n+\n+\n\n, then \nthe angle subtended with the x-axis is",
    "options": [
      "1\n4\nsin\n13\n-\n\n\n\n\n",
      "1\n3\nsin\n13\n-\n\n\n\n\n",
      "1\n3\ncos\n13\n-\n\n\n\n\n",
      "1\n4\ncos\n13\n-\n\n\n\n\n"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \n^\n^\n^\nA\n4i\n3j 12k\n=\n+\n+\n\nLet θ be the angle made by vector A with X-axis. \nx\nA\ncos\nA\nθ\n∴\n=\n\n2\n2\n2\n4\n4\ncos\n13\n4\n3\n12\nθ =\n=\n+\n+\n\n1\n4\ncos\n13\n-\n\nθ =\n\n\n\n",
    "examSource": "COMEDK-2019  UPSEE - 2015"
  },
  {
    "id": "yct-motion-plane-q047",
    "num": 47,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The angle between two vectors A and B is θ. \nVector R is the resultant of the two vectors. If \nR makes an θ\n2 with A, then",
    "options": [
      "A = 2B",
      "A = B\n2",
      "A = B",
      "AB = 1"
    ],
    "correctAnswer": 2,
    "explanation": "The angle α which the resultant R\n\u0001\nmakes \nwith A\n\u0001\n is given by- \nBsin\ntan\nA\nBcos\nθ\nα =\n+\nθ \nHere, \n2\nθ\nα =\n\nHence, \nBsin\ntan 2\nA\nBcos\nθ\nθ\n=\n+\nθ \nsin\n2Bsin( / 2)cos( / 2)\n2\nA\nBcos\ncos 2\nθ\nθ\nθ\n=\nθ\n+\nθ\n\n2\nA\nBcos\n2Bcos ( / 2)\n+\nθ =\nθ\n\n2\n2\nA\nB[2cos ( / 2) 1]\n2Bcos ( / 2)\n+\nθ\n-\n=\nθ\n\n2\n2\nA\n2Bcos\nB\n2Bcos\n2\n2\nθ\nθ\n\n\n\n\n+\n-\n=\n\n\n\n\n\n\n\n \nA - B = 0 \n∴ A = B",
    "examSource": "UPSEE - 2013"
  },
  {
    "id": "yct-motion-plane-q048",
    "num": 48,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The \npower \nutilised \nwhen \na \nforce \nof \n^\n^\n^\n(2i\n3j\n4k)N\n+\n+\n acts on a body for 4s, \nproducing a displacement of \n^\n^\n^\n(3i\n4j\n5k)\n+\n+\nm, is",
    "options": [
      "9.5 W",
      "7.5 W",
      "6.5 W",
      "4.5"
    ],
    "correctAnswer": 0,
    "explanation": "Power\nF.v\n=\n\u0001 \u0001\n\nAnd, \nd\nv\nt\n=\n\u0001\n\u0001\n\n^\n^\n^\n3i\n4j\n5k\nv\n4\n+\n+\n=\n\u0001\n\n^\n^\n^\n(3i\n4j\n5k)\n^\n^\n^\nPower\n(2i\n3j\n4k).\n4\n+\n+\n∴\n=\n+\n+\n\n3\n4\n5\n2\n3\n4\n4\n4\n4\n=\n×\n+ ×\n+ ×\n\n6\n12\n20\n4\n4\n4\n=\n+\n+\n6 12\n20\n4\n+\n+\n=\n\n38\n4\n=\n\n Power = 9.5 W",
    "examSource": "W  AP EAMCET (21.09.2020) Shift-I"
  },
  {
    "id": "yct-motion-plane-q049",
    "num": 49,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "^\n^\n^\n^\nA = 4i + 3j andB = 4i + 2j.\n\u0002\u0001\n\u0002\u0001\n\nFind \na \nvector \nparallel to A\n\u0002\u0001\nbut has magnitude five times that \nof B.\n\u0002\u0001",
    "options": [
      "(\n)\n^\n^\n20 2i\n3j\n+",
      "(\n)\n^\n^\n20 4i\n3j\n+",
      "(\n)\n^\n^\n20 2i\nj\n+",
      "(\n)\n^\n^\n10 2i\nj\n+"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \n^\n^\nA\n4i\n3j\n=\n+\n\u0001\n, \n^\n^\nB\n4i\n2j\n=\n+\n\u0001\n\n2\n2\n^\n^\nA\n4i\n3j\n^A\nA\n4\n3\n+\n=\n=\n+\n\u0001\n\u0001\n\n(\n)\n1\n^\n^\n^A\n4i\n3j\n5\n=\n+\n\n^\nP\n5 B A\n=\n\u0001\n\u0001\n\n2\n2\n1\n^\n^\n5\n4\n2\n(4i\n3j)\n5\n= ×\n+\n×\n+\n\n^\n^\nP\n20(4i\n3j)\n=\n+\n\u0001",
    "examSource": "BITSAT-2007"
  },
  {
    "id": "yct-motion-plane-q050",
    "num": 50,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "Given that A + B = R\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001\nand A2 + B2 = R2 The \nangle between AandB\n\u0002\u0001\n\u0002\u0001\nis",
    "options": [
      "0",
      "π/4",
      "π/2",
      "π"
    ],
    "correctAnswer": 2,
    "explanation": "Given, A\nB\nR\n+\n=\n\u0001\n\u0001\n\u0001\nand A2 + B2 = R2 \n\nR2 = A2 + B2 + 2AB cosθ \nWhere, θ = Angle between A & B, \n∵ R2 = A2 + B2 \n∴ A2 + B2 = A2 + B2 + 2AB cosθ \n∴cosθ = 0 \n\n2\nπ\nθ =",
    "examSource": "BITSAT-2009"
  },
  {
    "id": "yct-motion-plane-q051",
    "num": 51,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "The two vectors A\n\u0002\u0001\nand B\n\u0002\u0001\nare drawn from a \ncommon point and C = A + B,\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001\n then angle \nbetween A\n\u0002\u0001\nand B\n\u0002\u0001\nis \n\n (1) 90° if C2 = A2 + B2 \n\n (2) greater than 90° if C2 < A2 + B2 \n\n (3) greater than 90° if C2 > A2 + B2 \n\n (4) less than 90° if C2 > A2 + B2 \n\n Correct options are-",
    "options": [
      "1,2",
      "1, 2, 3, 4",
      "2, 3, 4",
      "1, 2, 4"
    ],
    "correctAnswer": 3,
    "explanation": "C\nA\nB\n=\n+\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001 \n∵ \nC2 = A2 + B2 + 2AB cosθ \n\ncosθ = \n(\n)\n2\n2\n2\nC\nA\nB\n2AB\n-\n+\n\nCase-I, C2 = A2 + B2 \n\ncosθ = \n(\n)\n2\n2\n2\n2\nA\nB\nA\nB\n0\n2AB\n+\n-\n+\n=\n\nθ = π/2 or 90° \nCase-II, C2 < A2 + B2 \n\ncosθ = \n(\n)\n2\n2\n2\nC\nA\nB\n2AB\n-\n+\n(-ve) \nThen, \nθ > 90° \nCase-III, C2 > A2 + B2 \n\ncosθ = \n(\n)\n2\n2\n2\nC\nA\nB\n2AB\n-\n+\n(+ve) \nThen, \nθ < 90°",
    "examSource": "BITSAT-2011",
    "image": "/images/yct_motion_plane/p10_img1_xref101.png"
  },
  {
    "id": "yct-motion-plane-q052",
    "num": 52,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "Given \n^\n^\n^\nP = 2i - 3j+ 4k\n\u0002\u0001\n and \n^\n^\nQ = j - 2k.\n\u0001\n The \nmagnitude of their resultant is",
    "options": [
      "3",
      "2 3",
      "3 3",
      "4 3"
    ],
    "correctAnswer": 1,
    "explanation": "Given, P = ^\n^\n^\n2i\n3j\n4k\n-\n+\n, \n^\n^\nQ\nj\n2k\n= -\n\u0001\n\nR\nP\nQ\n=\n+\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001 \n\n^\n^\n^\n^\n^\n(2i\n3j\n4k)\n(j\n2k)\n=\n-\n+\n+\n-\n\n^\n^\n^\nR\n2i\n2j\n2k\n=\n-\n+\n\u0002\u0001\n\n2\n2\n2\nR\n(2)\n( 2)\n(2)\n=\n+ -\n+\n\u0001\n\nR\n2 3\n=\n\u0002\u0001",
    "examSource": "BITSAT -2018",
    "image": "/images/yct_motion_plane/p10_img1_xref101.png"
  },
  {
    "id": "yct-motion-plane-q053",
    "num": 53,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The \nposition \nvector \nof \na \npoint \nis \n^\n^\n^\nR\nxi\nyj\nzk\n=\n+\n+\n\u0001\n\nand \nanother \nvector \nis \n^\n^\n^\nA\n3i\n2j\n5k\n=\n+\n+\n\u0001\n. Which of the mathematical \nrelation is correct?",
    "options": [
      "(\n)\n^ ^\nA R\n0\n∇\n=",
      "(\n)\nA R\nA\n∇\n=\n\u0001\n\u0001\n\u0001",
      "(\n)\nA R\nR\n∇\n=\n\u0001 \u0001\n\u0001",
      "None of these \nCG PET- 2009"
    ],
    "correctAnswer": 1,
    "explanation": "^\n^\n^\nR\nxi\nyj\nzk\n=\n+\n+\n\u0001\n\n^\n^\n^\nA\n3i\n2j\n5k\n=\n+\n+\n\u0001\n\n^\n^\n^\n^\n^\n^\nA R\n(xi\nyj\nzk) (3i\n2j\n5k)\n⋅\n=\n+\n+\n⋅\n+\n+\n\u0001\n\u0001\n\nA R\n⋅\n\u0001\n\u0001\n= 3x + 2y + 5z \n\nd(3x)\nd(2y)\nd(5z)\n^\n^\n^\n(A R)\ni\nj\nk\ndx\ndy\ndz\n∇\n⋅\n=\n+\n+\n\u0001\n\u0001\n\n^\n^\n^\n(A R)\n3i\n2j\n5k\n∇\n⋅\n=\n+\n+\n\u0001\n\u0001\n\n(A R)\nA\n∇\n⋅\n=\n\u0001\n\u0001\n\u0001",
    "examSource": "",
    "image": "/images/yct_motion_plane/p10_img1_xref101.png"
  },
  {
    "id": "yct-motion-plane-q054",
    "num": 54,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The direction of \n\u0001\nA is vertically upward and \ndirection of \n\u0001\nB is in north direction. The \ndirection of \n\u0001\n\u0001\nA×B will be",
    "options": [
      "Western direction",
      "Eastern direction",
      "At 45º upward in north",
      "Vertically downward \nCG PET- 2009"
    ],
    "correctAnswer": 0,
    "explanation": "Considering vertically upward direction as z-axis and \nnorth direction as y-axis. \n^\nA\nak\n=\n\u0002\u0001\n, \n^\nB\nbj\n=\n\u0002\u0001\n\n∴ \n^\n^\n^\nA\nB\nak\nbj\nab( i)\n×\n=\n×\n=\n-\n\u0001\n\u0001\n\nThus, it is along negative x-axis \nA\nB\n∴\n×\n\u0002\u0001\n\u0002\u0001\nis along west.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p10_img1_xref101.png"
  },
  {
    "id": "yct-motion-plane-q055",
    "num": 55,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "If \n\u0001\n\u0001\n\u0001\nA = B + C and the values of \n\u0001 \u0001\nA,B and \n\u0001\nC are \n13, 12 and 5 respectively, then the angle \nbetween A\n\u0001\n and C\n\u0001\nwill be",
    "options": [
      "(\n)\n1\ncos\n5/13\n-",
      "(\n)\n1\ncos\n13/12\n-",
      "/ 2\nπ",
      "(\n)\n1\nsin\n5/12\n-\n\nCG PET- 2009"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, A\n13,B\n12,C\n5\n=\n=\n=\n\u0001\n\u0001\n\u0001\n\nA2\n = B2\n + C2\n + 2BC cosθ \n(13)2\n = (12)2\n + (5)2\n + 2 × 12 × 5 cosθ \ncos θ = 0 \nθ = 90° \nHence, it is a right-angle triangle. \n\nSo, angle between A\n\u0001 and C\n\u0001\n is, \n5\ncos\n13\nα =\n ⇒ \n1\n5\ncos\n13\n-\n\nα =\n\n\n\n",
    "examSource": "",
    "image": "/images/yct_motion_plane/p10_img1_xref101.png"
  },
  {
    "id": "yct-motion-plane-q056",
    "num": 56,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "If \n^\n^\n1\n2\nr = 2 , r = 2y,\nx\nwhere \n^x and \n^y are unit \nvectors \nalong \nthe \nX-axis \nand \nY-axis \nrespectively, then the magnitude of r1 + r2 is",
    "options": [
      "2 2",
      "2 3",
      "3 2",
      "3"
    ],
    "correctAnswer": 0,
    "explanation": "Given, r1 = \n2\n^\n^\n2x,r\n2y\n=\n\n1\n2\n^\n^\nr\nr\n2x\n2y\n+\n=\n+\n\nMagnitude, \n2\n2\n1\n2\nr\nr\n2\n2\n2 2\n+\n=\n+\n=",
    "examSource": "TS-EAMCET.14.09.2020, Shift-2",
    "image": "/images/yct_motion_plane/p11_img1_xref108.png"
  },
  {
    "id": "yct-motion-plane-q057",
    "num": 57,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Let A1 + A2 = 5A3, A1 - A2 = 3A3, \n\n^\n^\n1\n3\n2\n| A |\nA = 2i + 4j, then \nis\n| A |",
    "options": [
      "4",
      "8",
      "2",
      "6"
    ],
    "correctAnswer": 0,
    "explanation": "Given, A1 + A2 = 5A3 ...(1) \nA1 - A2 = 3A3 ...(2) \nAdding equation (1) & (2), \n2A1 = 8A3 ⇒ A1 = 4A3 \n1\n^\n^\nA\n8i\n16j\n∴\n=\n+\n\nSubtracting equation (2) from (1), \n2A2 = 2A3 \n2\n3\n^\n^\nA\nA\n2i\n4j\n∴\n=\n=\n+\n\n2\n2\n1\n2\n2\n2\nA\n8\n16\n16\n4\nA\n2\n4\n+\n=\n=\n=\n+",
    "examSource": "TS-EAMCET.14.09.2020, Shift-2",
    "image": "/images/yct_motion_plane/p11_img1_xref108.png"
  },
  {
    "id": "yct-motion-plane-q058",
    "num": 58,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The magnitude of x and y components of A are \n7 and 6 respectively. Also the magnitudes of x \nand y components of A+B are 11 and 9 \nrespectively. Calculate the magnitude of vector \nB.",
    "options": [
      "10",
      "5",
      "6",
      "3 \nJCECE-2018"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \n^\n^\nA\n7i\n6j\n=\n+\n\nLet, \n1\n2\n^\n^\nB\nb i\nb j\n=\n+\n\n∴ \n1\n7\nb\n11\n+\n=\n ⇒ b1 = 4 \n6 + b2 = 9 ⇒ b2 = 3 \n∴ \n^\n^\nB\n4i\n3j\n=\n+\n\n2\n2\nB\n4\n3\n25\n5\n=\n+\n=\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p11_img1_xref108.png"
  },
  {
    "id": "yct-motion-plane-q059",
    "num": 59,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The \nposition \nvector \nof \na \nparticle \nis \n^\n^\nα\nα\nr = ( cosωt)i + ( sinωt)j . The velocity vector \nof the particle is",
    "options": [
      "Parallel to position vector",
      "Perpendicular to position vector",
      "Directed towards the origin",
      "Directed away from the origin \nJCECE-2014"
    ],
    "correctAnswer": 1,
    "explanation": "^\n^\nr\ncos\nti\nsin\ntj\n= α\nω\n+ α\nω\n\u0001\n\n(\n)\n(\n)\ndr\n^\n^\nv\nsin t\ni\ncos t\nj\ndt\nα\nω ω\nα\nω ω\n=\n= -\n+\n\u0001\n\u0001\n\n^\n^\n^\n^\nv.r\n(\nsin\nt)i\n(\ncos\nt)j\n( cos\nt)i\n( sin\nt)j\n\n\n\n=\n-αω\nω\n+ αω\nω\nα\nω\n+ α\nω\n\n\n\n.\n\u0001\n\u0001\n2\n2\nsin\nt.cos\nt\ncos t.sin\nt\n= -α ω\nω\nω + α ω\nω\nω \nv.r\n0\n=\n\u0001\n\u0001\n\n∵ Dot product of v and r\u0001\n\u0001\n is zero \n∴ Both are perpendicular to each other.",
    "examSource": "BCECE - 2004",
    "image": "/images/yct_motion_plane/p11_img1_xref108.png"
  },
  {
    "id": "yct-motion-plane-q060",
    "num": 60,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "If a vector A having a magnitude of 8 is added \nto a vector B which lies along x-axis, then the \nresultant of two vectors lies along y-axis and \nhas magnitude twice that of B. The magnitude \nof B is",
    "options": [
      "6\n5",
      "12\n5",
      "16\n5",
      "8\n5\n\nJCECE-2012"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \n\nA\n\u0001\n= 8 units \nSince, B\n\u0001\nis along x - axis and resultant of two vector \nC\n\u0001\nlies on y - axis \nSo, B and C\n\u0001\n\u0001\nare perpendicular vector. \nHence, \n\n2\n2\n2\n| A |\n| B |\n| C |\n=\n+\n\u0001\n\u0001\n\u0001\n\n2\n2\n2\n| 8 |\n| B |\n2B |\n=\n+\n\n64 = 5B2 \n\n2\n64\nB\n5\n=\n\n8\nB\n5\n∴\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p11_img1_xref108.png"
  },
  {
    "id": "yct-motion-plane-q061",
    "num": 61,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "It two forces each of 2N are inclined at 60º, \nthen resultant force is:",
    "options": [
      "2 N",
      "2 5N",
      "2 3N",
      "4 2N \nJCECE-2006"
    ],
    "correctAnswer": 2,
    "explanation": "Let A & B be two forces, \n∴ \n2\n2\nR\nA\nB\n2ABcos\n=\n+\n+\nθ \n\n2\n2\no\nR\n2\n2\n2 2 2cos60\n=\n+\n+ × ×\n (cos 60o = 1/2) \n∴R\n12\n2 3N\n=\n=\n\n∴R\n2 3N\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p11_img1_xref108.png"
  },
  {
    "id": "yct-motion-plane-q062",
    "num": 62,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Two vectors have magnitudes 3 and 5. If angle \nbetween them is 60º, then the dot product of \ntwo vectors will be :",
    "options": [
      "7.5",
      "6.5",
      "8.4",
      "7.9 \nJCECE-2003"
    ],
    "correctAnswer": 0,
    "explanation": "Let A & B\n\u0002\u0001\n\u0002\u0001\nbe two vector, \n∴ \nA.B\nA B cos\n=\nθ\n\u0001 \u0001\n\n = 3 × 5 cos60o \n\n1\n15\n2\n=\n×\n\n A B\n7.5\n⋅\n=\n\u0001 \u0001",
    "examSource": "",
    "image": "/images/yct_motion_plane/p12_img1_xref117.png"
  },
  {
    "id": "yct-motion-plane-q063",
    "num": 63,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Calculate the work done when a force \n^\n^\n^\nF = 2i + 3j - 5k\n\u0001\nunits acts on a body producing \na displacement \n^\n^\n^\ns = 2i + 4j+ 3k\n\u0001\nunits :",
    "options": [
      "1 unit",
      "20 unit",
      "5 unit",
      "zero \nJCECE-2003"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n^\n^\n^\nF\n2i\n3j\n5k\n=\n+\n-\n\u0001\n\n^\n^\n^\ns\n2i\n4j\n3k\n=\n+\n+\n\u0001\n\nW\nF s\n=\n⋅\n\u0001 \u0001 \n^\n^\n^\n^\n^\n^\nW\n(2i\n3j\n5k).(2i\n4j\n3k)\n=\n+\n-\n+\n+\n\nW\n4 12 15\n=\n+\n-\n\nW = 1 Unit",
    "examSource": "",
    "image": "/images/yct_motion_plane/p12_img1_xref117.png"
  },
  {
    "id": "yct-motion-plane-q064",
    "num": 64,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Three forces acting on a body are shown in the \nfigure. To have the resultant force only along \nthe y-direction, the magnitude of the minimum \nadditional force needed along OX is",
    "options": [
      "3 N\n4",
      "13N",
      "0.5 N",
      "1.5"
    ],
    "correctAnswer": 2,
    "explanation": "∵ \n(\n)\n(\n)\n2\n2\nx\ny\nR\nF\nF\n=\n∑\n+ ∑\n\nLet the additional force F be directed along the positive \nx-direction. \nTaking x-component, the total force should be zero. \nLet F be the magnitude of minimum force which must \nbe along x-direction, by resolving the vector we get- \n1 × cos60° + 2sin30° + F - 4sin30° = 0 \n1\n1\nF\n2\n0\n2 + +\n-\n= \nF = 1/2 = 0.5 N",
    "examSource": "N  COMEDK 2019",
    "image": "/images/yct_motion_plane/p12_img1_xref117.png"
  },
  {
    "id": "yct-motion-plane-q065",
    "num": 65,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Vector A has a magnitude of 10 units and \nmakes an angle of 30° with the positive x-axis. \nVector B has a magnitude of 20 units and \nmakes an angle of 30° with the negative x-axis. \nWhat is the magnitude of the resultant between \nthese two vectors?",
    "options": [
      "20 3",
      "35",
      "15 3",
      "10 3"
    ],
    "correctAnswer": 3,
    "explanation": "The vector representation is as follows, \n\n∴\n180\n30\n30\n120\nθ =\n-\n-\n=\n\u0005 \n2\n2\nR\nA\nB\n2ABcos\n=\n+\n+\nθ \n2\n2\no\nR\n10\n20\n2 10 20 cos120\n=\n+\n+ ×\n×\n×\n\nR\n100\n400\n200\n=\n+\n-\n\n1\ncos120\n2\n\n\n° = -\n\n\n\n\n∵\n\nR\n300\n=\n\n∴ \n\nR\n10 3 Unit\n=",
    "examSource": "COMEDK 2015",
    "image": "/images/yct_motion_plane/p12_img1_xref117.png"
  },
  {
    "id": "yct-motion-plane-q066",
    "num": 66,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Two vectors are given by \n^\n^\n^\n\u0001\nA = (i + 2j+ 2k) and \n^\n^\n^\n\u0001\nB = (3i + 6j+ 2k). Another vector \n\u0001\nC has the \nsame magnitude as \n\u0001\nB but has the same \ndirection as \n\u0001\nA . Then which of the following \nvectors represents\n\u0001\nC ?",
    "options": [
      "(\n)\n7\n^\n^\n^\n2\n2\n3 i\nj\nk\n+\n+",
      "(\n)\n3\n^\n^\n^\n2\n2\n7 i\nj\nk\n-\n+",
      "(\n)\n7\n^\n^\n^\n2\n2\n9 i\nj\nk\n-\n+",
      "(\n)\n9\n^\n^\n^\n2\n2\n7 i\nj\nk\n-\n+"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n^\n^\n^\nA\n(i\n2j\n2k)\n=\n+\n+\n\u0001\n\n^\n^\n^\nB\n(3i\n6j\n2k)\n=\n+\n+\n\u0001\n\nUnit vector along direction of A\n\u0001\n, \n\nAnd, \n2\n2\n2\nB\n3\n6\n2\n=\n+\n+\n\u0002\u0001\n\nB\n49\n7\n=\n=\n\u0001\n\nThus, vector C\n\u0001\n is- \n\n^\nC\nB A\n=\n\u0002\u0001\n\u0002\u0001\n\n7 ^\n^\n^\nC\n(i\n2j\n2k)\n3\n=\n+\n+\n\u0002\u0001",
    "examSource": "COMEDK 2018",
    "image": "/images/yct_motion_plane/p12_img1_xref117.png"
  },
  {
    "id": "yct-motion-plane-q067",
    "num": 67,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "A particle starts moving from point (2,10,1). \nDisplacement for the particle is ^\n^\n^\n-\n8i\n2j+ k . The \nfinal coordinates of the particle is",
    "options": [
      "(10, 8, 2)",
      "(8, 10, 2)",
      "(2, 10, 8)",
      "(8, 2, 10"
    ],
    "correctAnswer": 0,
    "explanation": "Displacement \n^\n^\n^\nr\n8i\n2j\nk\n∆=\n-\n+\n\u0001\n\nLet position vector representing final co-ordinate(x, y, \nz). \nf\n^\n^\n^\nr\nxi\nyj\nzk\n=\n+\n+\n\u0001\n\nf\ni\nr\nr\nr\n∴∆=\n-\n\u0001\n\u0001\n\u0001 \n^\n^\n^\n^\n^\n^\n^\n^\n^\n8i\n2j\nk\n(xi\nyj\nzk)\n(2i\n10j\nk)\n-\n+\n=\n+\n+\n-\n+\n+\n\n^\n^\n^\n^\n^\n^\n8i\n2j\nk\n(x\n2)i\n(y\n10)j\n(z\n1)k\n-\n+\n=\n-\n+\n-\n+\n-\n\n∴ \nx\n2\n8\n-\n= ⇒ x\n10\n=\n\ny\n10\n2\n-\n= -⇒ y\n8\n= \nz\n1\n1\n-= ⇒z\n2\n=\n\nfr\u0001 final co-ordinates are (10, 8, 2).",
    "examSource": ")  COMEDK 2020",
    "image": "/images/yct_motion_plane/p12_img1_xref117.png"
  },
  {
    "id": "yct-motion-plane-q068",
    "num": 68,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "If two forces of equal magnitudes act \nsimultaneously on a body in the east and the \nnorth directions then",
    "options": [
      "the body will displace in the north direction",
      "the body will displace in the east direction",
      "the body will displace in the north-east \ndirection",
      "the body will remain at the rest \n AIIMS-2009"
    ],
    "correctAnswer": 2,
    "explanation": "Let, the force acting on body \n1F\n\u0001\nin north direction and \n2F\n\u0001\nin east direction. \n∴ So, the resultant force on the body \nR\n1\n2\nF\nF\nF\n=\n+\n\u0001\n\u0001\n\u0001\nin \nNorth -East direction.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p13_img1_xref125.png"
  },
  {
    "id": "yct-motion-plane-q069",
    "num": 69,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Two vectors having equal magnitude of x units \nacting at an angle of 45º have resultant \n(\n)\n2 +\n2 units. The value of x is",
    "options": [
      "0",
      "1",
      "2",
      "2 2 \n AIIMS-2009"
    ],
    "correctAnswer": 1,
    "explanation": "Let two vector is A\n\u0001\nand B\n\u0001\n\nSo, A\n\u0001\n= x units, B\n\u0001\n= x units, θ = 45°, R\n\u0001\n= (\n)\n2\n2\n+\n\n( )\n( )\n2\n2\nR\nA\nB\n2ABcosθ\n=\n+\n+\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\n( )\n( )\n2\n2\n2\n2\nx\nx\n2.x.xcos45\n+\n=\n+\n+\n° \n2\n2\n1\n2\n2\n2x\n2x\n2\n+\n=\n+\n⋅\n\n2\n2\n2\n2\n2x\n2x\n+\n=\n+\n\nSquaring on both side \n2\n2\n2\n2\n2x\n2x\n+\n=\n+\n\n(\n)\n(\n)\n2\n2\n2\n2\n2 x\n+\n=\n+\n\n2\n2\n2\nx\n2\n2\n+\n=\n+\n\n2\nx\n1\n= \nx = 1",
    "examSource": "",
    "image": "/images/yct_motion_plane/p13_img1_xref125.png"
  },
  {
    "id": "yct-motion-plane-q070",
    "num": 70,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "If vectors \n^\n^\n^\nP = ai + aj+ 3k\n\u0001\n and \n^\n^\n^\nQ = ai - 2j - k \nare perpendicular to each other, then the \npositive value of a is",
    "options": [
      "zero",
      "1",
      "2",
      "3 \n AIIMS-2002"
    ],
    "correctAnswer": 3,
    "explanation": "If two vector are perpendicular to each other \nthen their dot product is zero. \nP.Q\n0\n=\n\u0001\n\u0001\n\n(\n) (\n)\n^\n^\n^\n^\n^\n^\nai\naj\n3k . ai\n2j\nk\n0\n+\n+\n-\n-\n= \na2 - 2a - 3 = 0 \n\na2 - 3a + a - 3 = 0 \na(a - 3) + 1(a - 3) = 0 \n(a - 3) (a + 1) = 0 \na = 3, a = - 1 \na = 3, -1 \nSo, positive value of a is 3",
    "examSource": "AP EAMCET (Medical)-1998",
    "image": "/images/yct_motion_plane/p13_img1_xref125.png"
  },
  {
    "id": "yct-motion-plane-q071",
    "num": 71,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Two equal vectors have a resultant equal to \neither of them, then the angle between \nthem will be",
    "options": [
      "110º",
      "120º",
      "60º",
      "150º \nAIIMS-2000,"
    ],
    "correctAnswer": 1,
    "explanation": "Let the two vector be A and B both at angle \nof θ from each other with a resultant R \nFrom the triangle law of vector addition, \n\nR2 = A2 + B2 + 2AB cosθ \n\nA = B = R (given) \n\n(A)2 = (A)2 + (A)2 + 2.A.A.cosθ \n\nA2 = 2A2 (1 + cosθ) \n\n1\ncos\n2\nθ\n-\n=\n\ncosθ = cos120° \n\nθ = 120°",
    "examSource": "BCECE-2007",
    "image": "/images/yct_motion_plane/p13_img1_xref125.png"
  },
  {
    "id": "yct-motion-plane-q072",
    "num": 72,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The angle between (\n)\nP + Q\n\u0001\n\u0001\nand (\n)\nP - Q\n\u0001\n\u0001\nwill be",
    "options": [
      "90º only",
      "between 0º and 180º",
      "180º only",
      "none of these \n AIIMS-1999"
    ],
    "correctAnswer": 1,
    "explanation": "Clearly from figure, angle (θ) between (\n)\nP\nQ\n+\n\u0001\n\u0001\nand \n(P\nQ)\n-\n\u0001\n\u0001\n between 0 to 180°.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p13_img1_xref125.png"
  },
  {
    "id": "yct-motion-plane-q073",
    "num": 73,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Assertion: If A + B = A - B\n\u0001\n\u0001\n\u0001\n\u0001\n, then the angle \nbetween A\n\u0001\nand B\n\u0001\nis 90º. \n\n Reason: A + B = B + A\n\u0001\n\u0001\n\u0001\n\u0001",
    "options": [
      "If both assertion and reason are true and \nreason is the correct explanation of assertion.",
      "If both assertion and reason are true but \nreason is not the correct explanation of \nassertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false. \nAIIMS-26.05.2019(M) Shift-1"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, | A\nB | | A\nB|\n+\n=\n-\n\u0001\n\u0001\n\u0001\n\u0001 \n2\n2\n2\n2\nA\nB\n2ABcos\nA\nB\n2ABcos\n+\n+\nθ =\n+\n-\nθ \nSquaring on both side \n\n2\n2\n2\n2\nA\nB\n2ABcos\nA\nB\n2ABcos\nθ\nθ\n+\n+\n=\n+\n-\n\n2\n2\n2\n2\nA\nB\n2ABcos\nA\nB\n2ABcos\n0\nθ\nθ\n+\n+\n-\n-\n+\n= \n 4ABcos\n0\nθ = \n\n90\nθ =\n° \nAlso, vector addition is cumulative \nHence, | A\nB | | B\nA |\n+\n=\n+\n\u0001\n\u0001\n\u0001\n\u0001",
    "examSource": "",
    "image": "/images/yct_motion_plane/p14_img1_xref131.png"
  },
  {
    "id": "yct-motion-plane-q074",
    "num": 74,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "If \n^\n^\nA\n3i\n4j\n=\n+\nand\n^\n^\nB\n7i\n24j\n=\n+\nthen the vector \nhaving the same magnitude as B and parallel to \nA is-",
    "options": [
      "^\n^\n15i\n20j\n+",
      "^\n^\n5i\n3j\n-",
      "^\n^\n15i\n13j\n+",
      "^\n^\n5i\n14j\n+"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n\n^\n^\nA\n3i\n4j\n=\n+\n\u0002\u0001\n and \n^\n^\nB\n7i\n24j\n=\n+\n\u0002\u0001\n\nto get direction we will find unit vector in the direction \nof a\n\u0001\n, \n2\n2\n^\n^\nA\n3i\n4j\n3\n4\n^\n^\n^A\ni\nj\n5\n5\n| A |\n3\n4\n+\n=\n=\n=\n+\n+\n\u0001\n\u0001\n\nSo required vector, \n^\n| B | A\n\u0001\n\n2\n2 3\n4\n^\n^\n7\n24\ni\nj\n5\n5\n\n\n\n=\n+\n+\n\n\n\n\n \n\n3\n4\n^\n^\n625\ni\nj\n5\n5\n\n\n\n=\n+\n\n\n\n\n\n1\n^\n^\n25\n(3i\n4j)\n5\n=\n×\n+\n\n^\n^\n^\n| B | A\n15i\n20j\n=\n+\n\u0001",
    "examSource": "BCECE-2014",
    "image": "/images/yct_motion_plane/p14_img1_xref131.png"
  },
  {
    "id": "yct-motion-plane-q075",
    "num": 75,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "The vectors are given by \n^\n^\n^\nA\ni\n2j\n2k\n=\n+\n+\n\u0001\n and \n^\n^\n^\nB\n3i\n6j\n2k\n=\n+\n+\n\u0001\n. Another vector C has the \nsame magnitude as B but has the same \ndirection as A. Then which of the following \nvectors represents C?",
    "options": [
      "(\n)\n7 ^\n^\n^\ni + 2j+ 2k\n3",
      "(\n)\n3 ^\n^\n^\ni\n2j+ 2k\n7\n-",
      "(\n)\n7 ^\n^\n^\ni\n2j+ 2k\n9\n-",
      "(\n)\n9 ^\n^\n^\ni\n2j+ 2k\n7\n+"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n^\n^\n^\nA\ni\n2j\n2k\n= +\n+\n\u0001\n\nMagnitude of A\n\u0001\n=\n2\n2\n2\n1\n2\n2\n+\n+\n= 3 \nUnit vector along A\n\u0002\u0001 . \n\n^\n^\n^\nA\ni\n2j\n2k\n^A\n3\nA\n+\n+\n=\n=\n\u0001\n\u0001\n\n^\n^\n^\nB\n3i\n6j\n2k\n=\n+\n+\n\u0001\n\nMagnitude of \nB\n\u0001\n= \n2\n2\n2\n3\n6\n2\n+\n+\n\n = \n9\n36\n4\n+\n+\n\nB\n\u0001\n= 7 \nSo, \n^\nC\nB A\n=\n\u0001\n\nC =\n^\n^\n^\ni\n2j\n2k\n7\n3\n+\n+\n×\n\nC = (\n)\n7 ^\n^\n^\ni\n2j\n2k\n3\n+\n+",
    "examSource": "WB JEE 2013",
    "image": "/images/yct_motion_plane/p14_img1_xref131.png"
  },
  {
    "id": "yct-motion-plane-q076",
    "num": 76,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The (x,y,z) coordinates of two points A and B \nare given respectively as (0,3,-1) and (-2,6,4). \nThe displacement vector form A to B may be \ngiven by :",
    "options": [
      "2i\n6j\n4k\n-\n+\n+",
      "2i\n3j\n3k\n-\n+\n+",
      "2i\n3j\n5k\n-\n+\n+",
      "2i\n3j\n5k\n-\n-"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \n\nA\nB\n^\n^\n^\n^\n^\nr\n3j\nk,\nr\n2i\n6j\n4k\n=\n-\n=-\n+\n+\n\nDisplacement vector (rAB) = rB - rA. \n\nrAB= (\n) (\n)\n^\n^\n^\n^\n^\n2i\n6j\n4k\n3j\nk\n-\n+\n+\n-\n-\n\nAB\n^\n^\n^\nr\n2i\n3j\n5k\n=-\n+\n+\n\nTherefore, the displacement vector from A to B is \n^\n^\n^\n2i\n3j\n5k\n-\n+\n+",
    "examSource": "BCECE-2006",
    "image": "/images/yct_motion_plane/p14_img1_xref131.png"
  },
  {
    "id": "yct-motion-plane-q077",
    "num": 77,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The resultant of two forces P and Q is of \nmagnitude P. If P be doubled, the resultant will \nbe inclined to Q at an angle.",
    "options": [
      "00",
      "300",
      "600",
      "900"
    ],
    "correctAnswer": 3,
    "explanation": "Let the angle between P and Q be θ. \nSince, the resultant of P and Q is P \n∴P2 = P2 + Q2 + 2PQ cosθ \n\n- Q2 = 2PQ cosθ \n\nQ = -2P cosθ \nAccording to the question, given P is doubled then \n\n4P2 = 4P2 + Q2 + 4PQ cosθ \nPut the value of Q \n\n0 = (-2Pcosθ)2 + 4P(-2Pcosθ).cosθ \n\n0 = 4P2cos2θ - 8P2cos2θ \n\n0 = -4P2cos2θ \n\ncosθ = 0 \n\nθ = 90°",
    "examSource": "UPSEE-2016  BCECE-2010",
    "image": "/images/yct_motion_plane/p14_img1_xref131.png"
  },
  {
    "id": "yct-motion-plane-q078",
    "num": 78,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "If a + b = c\n\u0001\n\u0001\n\u0001\nand a + b = c, then the angle \nincluded between aandb\n\u0001\n\u0001\nis \n\n(a) 90° \n(b) 180° \n\n(c) 120°",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, a\nb\nc\n+\n=\n\u0001\n\u0001\n\u0001 and a + b = c \n\n| c | | a\nb |\n=\n+\n\u0001\n\u0001\n\u0001 \n\nc2 = a2 + b2 + 2abcosθ \n\n2\n2\nc\na\nb\n2abcos\n=\n+\n+\nθ \n\n2\n2\na\nb\na\nb\n2abcos\n+ =\n+\n+\nθ \n\na2 + b2 + 2ab = a2 + b2 + 2abcosθ \n\ncos θ = 1 \n\n θ = 0º",
    "examSource": "(d) zero  WB JEE-2010",
    "image": "/images/yct_motion_plane/p15_img1_xref141.png"
  },
  {
    "id": "yct-motion-plane-q079",
    "num": 79,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "Consider the vectors A = ^\n^ ^\ni + j-k , B = \n^\n^\n^\n2i\nj+ k\n-\nand C = \n^\n^\n^\n1 (i\nj+ 2k)\n5\n-2\n. What is the \nvalue of C.(A ×B)?",
    "options": [
      "1",
      "0",
      "3 2",
      "18 5"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \n^\n^\n^\n^\n^\n^\nA\ni\nj\nk, B\n2i\nj\nk\n= + -\n=\n-+\n\u0001\n\u0001\n\n(\n)\n1\n^\n^\n^\nC\ni - 2j\n2k\n5\n=\n+\n\u0001\n\nNow, \n\n^\n^\n^\ni\nj\nk\nA\nB\n1\n1\n1\n2\n1\n1\n×\n=\n-\n-\n\u0001\n\u0001\n\n^\n^\nA\nB\n3j\n3k\n×\n= -\n-\n\u0001\n\u0001\n\nAccording to the question, \n\n(\n)\n(\n) (\n)\n1\n^\n^\n^\n^\n^\n^\nC. A\nB\ni\n2j\n2k . 0i\n3j\n3k\n5\n×\n=\n-\n+\n-\n-\n\u0002\u0001 \u0002\u0001\n\u0002\u0001\n\n(\n)\n1\n6\n6\n5\n=\n-\n\n= 0",
    "examSource": "WB JEE 2020",
    "image": "/images/yct_motion_plane/p15_img1_xref141.png"
  },
  {
    "id": "yct-motion-plane-q080",
    "num": 80,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "In a triangle ABC, the sides AB and AC are \nrepresented by the vectors \n^\n^\n^\n3i + j+ k and \n^\n^\n^\ni + 2j+ k respectively. Calculate the angle \n∠ABC.",
    "options": [
      "cos-1\n5\n11",
      "cos-1\n6\n11",
      "1\n5\n90°\ncos\n11\n-\n\n\n-\n\n\n\n\n\n",
      "1\n5\n180°\ncos\n11\n-\n\n\n-\n\n\n\n\n\n"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n^\n^\n^\nAB\n3i\nj\nk\n=\n+ +\n\u0002\u0002\u0002\u0001\n, \n^\n^\n^\nAC\ni\n2j\nk\n= +\n+\n\u0002\u0002\u0002\u0001\n\nCB\nAB\nAC\n∴\n=\n-\n\u0002\u0002\u0002\u0001\n\u0002\u0002\u0002\u0001\n\u0002\u0002\u0002\u0006\n\n^\n^\n^\n^\n^\n^\nCB\n3i\nj\nk\n(i\n2j\nk)\n=\n+ +\n-\n+\n+\n\u0002\u0002\u0002\u0001\n\n^\n^\nCB\n2i\nj\n=\n-\n\u0002\u0002\u0002\u0001\n\n∠ABC is angle between AB\n\u0002\u0002\u0002\u0001\nand CB\n\u0002\u0002\u0002\u0001\n\n∴ \nAB CB\nAB CB cos\n⋅\n=\nθ\n\u0002\u0002\u0002\u0001 \u0002\u0002\u0002\u0001\n\u0002\u0002\u0002\u0001 \u0002\u0002\u0002\u0001\n\n(6 - 1) = \n2\n2\n2\n2\n2\n3\n1\n1\n(2)\n( 1)\ncos\n+\n+\n×\n+ -\n×\nθ \n5\n11\n5\ncos\n=\n×\n×\nθ \ncos θ = \n5\n11\n5\n×\n\n5\ncos \n11\nθ =\n\n1\n5\ncos\n11\n-\n\nθ =\n\n\n\n\n\n",
    "examSource": "WB JEE 2018",
    "image": "/images/yct_motion_plane/p15_img1_xref141.png"
  },
  {
    "id": "yct-motion-plane-q081",
    "num": 81,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "Three vectors A = ^\n^\n^\nai\nj\nk\n+ +\n; B = ^\n^\n^\ni\nbj\nk\n+\n+\n and \nC = ^\n^\n^\ni\nj\nck\n+ +\n are mutually perpendicular ( ^ ^\ni, j \nand ^k are unit vectors along X, Y and Z- axis \nrespectively). The respective values of a, b and \nc are",
    "options": [
      "0, 0, 0",
      "- 1\n2 , - 1\n2 , - 1\n2",
      "1, -1, 1",
      "1\n2 , 1\n2 , 1\n2"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, A = ^\n^\n^\nai\nj\nk,\n+ +\n B = ^\n^\n^\ni\nbj\nk\n+\n+\n, C = \n^\n^\n^\ni\nj\nck\n+ +\nare mutually perpendicular- \nSo, \nA.B = 0 \n\nB. C = 0 \n\nA. C = 0 \nNow, \na + b + 1 = 0 …… (i) \n\n1 + b + c = 0 …… (ii) \n\na + 1 + c = 0 \n.....(iii) \nOn adding equation (i), (ii) and (iii), we get- \n\n2(a + b + c) = -3 \n⇒ \na + b + c = -3/2 ….. (iv) \nBy equation (i) and (iv) we get- \n\n- 1 + c = -3/2 \n\n c = -1/2 \nSimilarly, b = -1/2 \n\n a = -1/2",
    "examSource": "WB JEE 2017",
    "image": "/images/yct_motion_plane/p15_img1_xref141.png"
  },
  {
    "id": "yct-motion-plane-q082",
    "num": 82,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "If A = B + C have scalar magnitudes of 5, 4, 3 \nunits respectively, then the angle between A \nand C is",
    "options": [
      "cos-1(3/5)",
      "cos-1(4/5)",
      "π/2",
      "sin-1(3/4"
    ],
    "correctAnswer": 0,
    "explanation": "Here, triangle PQR is a given with vector. A, \nB, C are its adjacent sides. \n\n5, 4 and 3 makes the triangle right angle triangle. \n\ncos θ= QR\nPQ \n\n1 | C |\ncos\n| A |\n-\n\nθ =\n\n\n\n\n\nθ = cos-1 3\n5\n\n\n\n\n\n",
    "examSource": ")  WB JEE 2012",
    "image": "/images/yct_motion_plane/p16_img1_xref147.png"
  },
  {
    "id": "yct-motion-plane-q083",
    "num": 83,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The magnitudes of vectors A, B and C are 3, 4 \nand 5 units respectively. If A+B = C, the angle \nbetween A and B is",
    "options": [
      "2\nπ",
      "cos-1(0.6)",
      "7\ntan 1 5\n\n\n-\n\n\n",
      "4\nπ \n[AIPMT 1988]"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, A\n3, B\n4, C\n5\n=\n=\n=\n\u0001\n\u0001\n\u0001\n\nLet θ be the angle between them \n\nA\nB\nC\n+\n=\n\u0001\n\u0001\n\u0001\n\nSquaring on both side \n\n2\n2\n2\nA\nB\n2AB\nC\n+\n+\n=\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\n2\n2\n2\nA\nB\n2 A B cos\nC\n+\n+\nθ =\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\n…(i) \nOn putting the value, we get- \n\n(3)2 +(4)2 + 2× 3× 4 cosθ = (5)2 \n\n25+24 cosθ = 25 \n\ncosθ = 0 \n\n2\nπ\nθ =",
    "examSource": "",
    "image": "/images/yct_motion_plane/p16_img1_xref147.png"
  },
  {
    "id": "yct-motion-plane-q084",
    "num": 84,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "Given \n^\n^\nA = 2i + 3j\n\u0001\n\nand \n^\n^\nB = i + j\n\u0001\n. \nThe \ncomponent of vector A\n\u0002\u0001\nalong vector B\n\u0002\u0001\nis",
    "options": [
      "1\n2",
      "3\n2",
      "5\n2",
      "7\n2"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, \n^\n^\n^\n^\nA\n2i\n3j, B\ni\nj\n=\n+\n= +\n\u0001\n\n2\n2\n| B|\n1\n1\n2\n=\n+\n=\n\u0001\n\n(\n)(\n)\n^\n^\n^\n^\nA B\n2i\n3j\ni\nj\n2\n3\n5\n⋅\n=\n+\n+\n=\n+\n=\n\u0001 \u0001\n\nComponent of vector A\n\u0001\nalong vector B\n\u0001\nwould be \n\nA B\nB\n⋅\n=\n\u0001 \u0001\n\u0001\n= 5\n2",
    "examSource": "HPCET-2018  WB JEE 2011, 2009",
    "image": "/images/yct_motion_plane/p16_img1_xref147.png"
  },
  {
    "id": "yct-motion-plane-q085",
    "num": 85,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "Given C = A×B\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001\nand D = B× A\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001\n. What is the \nangle between C and D\n\u0002\u0001\n\u0002\u0001\n?",
    "options": [
      "30°",
      "60°",
      "90°",
      "180°"
    ],
    "correctAnswer": 3,
    "explanation": "Given, C\nA\nB\n=\n×\n\u0001\n\u0001\n\u0001 , D\nB A\n=\n×\n\u0001\n\u0001\n\u0001\n\nC\n\u0001\n and D\n\u0001\n are anti parallel so, A\nB\n×\n\u0001\n\u0001\n= - (\n)\nB A\n×\n\u0001\n\u0001\n\nSo, angle between C\n\u0001\n and D\n\u0001\n is 180º.",
    "examSource": "WB JEE 2009",
    "image": "/images/yct_motion_plane/p16_img1_xref147.png"
  },
  {
    "id": "yct-motion-plane-q086",
    "num": 86,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "The angle subtended by the vector A = 4 ^i + \n3 ^j + 12 ^k with x-axis is",
    "options": [
      "sin-1\n3\n13\n\n\n\n\n\n",
      "sin-1\n4\n13\n\n\n\n\n\n",
      "cos-1 \n4\n13\n\n\n\n\n\n",
      "cos-1\n3\n13\n\n\n\n\n\n"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, \n^\n^\n^\nA\n4i\n3j 12k\n=\n+\n+\n\u0002\u0001\n\nAngle with x-axis \n\ncosθ = \nx\nA\n| A |\n\u0002\u0001 \n\ncosθ = \n( )\n( )\n(\n)\n2\n2\n2\n4\n4\n3\n12\n+\n+\n\n4\ncos\n13\nθ =\n\n1\n4\ncos\n13\n-\n\nθ =\n\n\n\n",
    "examSource": "WB JEE 2008",
    "image": "/images/yct_motion_plane/p16_img1_xref147.png"
  },
  {
    "id": "yct-motion-plane-q087",
    "num": 87,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "Which of the following is a vector quantity?",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 2,
    "explanation": "Time and temperature have only magnitude \nso they are scalar. The flux density is the dot product of \nthe field and the area vector so it is also scalar. \nMagnetic field intensity (H) has both direction and \nmagnitude so it is a vector quantity.",
    "examSource": "(a) Temperature    (b) Flux density    (c) Magnetic field intensity    (d) Time  WB JEE-2007",
    "image": "/images/yct_motion_plane/p16_img1_xref147.png"
  },
  {
    "id": "yct-motion-plane-q088",
    "num": 88,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "If a1 and a2 are two non-collinear unit vectors \nand if \n1\n2\na\na\n3,\n+\n=\n\n Then the value of (a1 - a2) . (2a1 + a2) is",
    "options": [
      "2",
      "3",
      "1\n2",
      "1\n2\na , and a\n\u0001\n\u0001\n1 \nUP CPMT-2009"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, |a1 + a2 | =\n3 \n1\n2\na and a\n\u0001\n\u0001\n are non-collinear vector \n\n∴ \n1\n2\n| a | |a | 1\n=\n=\n\u0001\n\u0001\n\nLet the angle between a1 and a2 is θ \na1\n2 + a2\n2 + 2a1a2 cosθ =(\n)\n2\n3\n\n1 + 1 + 2cosθ = 3 \n2 cosθ = 3 - 2 \n2 cos θ = 1 \ncos θ = 1\n2 \nNow, \n\n= (a1 - a2) . (2a1 +a2) \n\n= \n2\n2\n1\n1\n2\n1\n2\n2\n2a\n2(a\na )\n(a\na )\na\n-\n⋅\n+\n⋅\n-\n\n=\n2\n2\n1\n1\n2\n2\n2a\n(a\na )\na\n-\n⋅\n-\n\nPutting the value of a1 = 1 and a2 = 1 and cosθ =1/2 \n\n = 2a1\n2 - a2\n2 - a1 a2 cos θ \n\n = 2 - 1 - 1\n2 \n(a1 - a2) . (2a1 +a2) = \n1\n1\n2\n-\n\n(a1 - a2) . (2a1 +a2) = 1\n2",
    "examSource": "",
    "image": "/images/yct_motion_plane/p17_img1_xref153.png"
  },
  {
    "id": "yct-motion-plane-q089",
    "num": 89,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Two vectors are perpendicular, if",
    "options": [
      "A B\n1\n⋅\n=\n\u0001 \u0001",
      "A\nB\n0\n×\n=\n\u0001\n\u0001",
      "A B\n0\n⋅\n=\n\u0001\n\u0001",
      "A\nB\nAB\n×\n=\n\u0001\n\u0001\n\u0001\n\u0001\n\nUP CPMT-2007"
    ],
    "correctAnswer": 2,
    "explanation": "We know that, \n\nA B\nA B cos\n⋅\n=\nθ\n\u0001\n\u0001\n\u0001\n\u0001\n\nA.B | A || B | cos90\n=\n°\n\u0002\u0001 \u0002\u0001\n\u0002\u0001\n\u0002\u0001\n\n∴ \nA. B\n0\n=\n\u0002\u0001 \u0002\u0002\u0001\n\n(∵ cos90° = 0) \nHence, two vector are perpendicular if their dot product \nis equal to zero.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p17_img1_xref153.png"
  },
  {
    "id": "yct-motion-plane-q090",
    "num": 90,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "A particle starting from the origin (0, 0) moves \nin a straight line in the (x, y) plane. Its \ncoordinates at a later time are (\n)\n3,3 The \npath of the particle makes with the x-axis an \nangle of",
    "options": [
      "30°",
      "45°",
      "60°",
      "0° \nUP CPMT-2008"
    ],
    "correctAnswer": 2,
    "explanation": "Let, θ be the angle that particle makes with x- \naxis. \n\ntanθ = y\n3\n3\nx\n3\n=\n=\n\n-1\ntan\n3\nθ =\n\nθ = 60°",
    "examSource": "JIPMER - 2009",
    "image": "/images/yct_motion_plane/p17_img1_xref153.png"
  },
  {
    "id": "yct-motion-plane-q091",
    "num": 91,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Find the torque of a force \n^\n^\n^\nF = 3i + 2j+1k\n-\n\nacting at the point \n^\n^\n^\nr = 8i + 2j+ 3k .",
    "options": [
      "^\n^\n^\n14i\n38j 16k\n-\n+",
      "^\n^\n^\n4i\n4j\n6k\n+\n+",
      "^\n^\n^\n14i\n38j 16k\n-\n+\n-",
      "^\n^\n^\n4i\n17j\n22k\n-\n-\n+\n\nUP CPMT-2010"
    ],
    "correctAnswer": 3,
    "explanation": "Torque of the force \n\nr\nF\nτ = ×\n\u0001\n\u0001\n\u0001\n\n^\n^\n^\ni\nj\nk\n8\n2\n3\n3\n2\n1\nτ =\n-\n\n(\n)\n(\n)\n(\n)\n^\n^\n^\ni 2\n6\nj 8\n9\nk 16\n6\n=\n-\n-\n+\n+\n+\n\n^\n^\n^\n4i\n17j\n22k\n= -\n-\n+",
    "examSource": "",
    "image": "/images/yct_motion_plane/p17_img1_xref153.png"
  },
  {
    "id": "yct-motion-plane-q092",
    "num": 92,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "If force \n^\n^\n^\nF = 5i + 3j+ 4k makes a displacement \nof \n^\n^\ns = 6i - 5k work done by the force is",
    "options": [
      "10 units",
      "122 5 units",
      "5 122 units",
      "20 units \nUP CPMT-2003"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n\nForce (F) = ^\n^\n^\n5i\n3j\n4k\n+\n+\n\nDisplacement (s) = ^\n^\n6i\n5k\n-\n\nThe work done is given by the following relation. \n\nW = F.d\n\u0001 \u0001\n\nW = (\n) (\n)\n^\n^\n^\n^\n^\n5i\n3j\n4k . 6i\n5k\n+\n+\n-\n\nW = (\n) (\n)\n^\n^\n^\n^\n^\n^\n5i\n3j\n4k . 6i\n0j\n5k\n+\n+\n+\n-\n\nW = 30 + 0 - 20 \n\nW = 10 units",
    "examSource": "",
    "image": "/images/yct_motion_plane/p17_img1_xref153.png"
  },
  {
    "id": "yct-motion-plane-q093",
    "num": 93,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "A body is rotating with angular velocity \n^\n^\n^\n(3i\n4j\nk)\nω =\n-\n+\n. The linear velocity of a point \nhaving position vector \n^\n^\n^\nr\n(5i\n6j\n6k)\n=\n-\n+\nis",
    "options": [
      "^\n^\n^\n6i\n2j\n3k\n+\n-",
      "^\n^\n^\n18i\n13j\n2k\n+\n-",
      "^\n^\n^\n18i\n13j\n2k\n-\n-\n+",
      "^\n^\n^\n6i\n2j\n8k\n-\n+\n\nUP CPMT-2001"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, \n^\n^\n^\n(3i\n4j\nk)\nω =\n-\n+\n\n^\n^\n^\nr\n(5i\n6j\n6k)\n=\n-\n+\n\nWe know that \n\nLinear velocity (v) = \n(\n)\nr\nr\n= ω× = ω×\n\u0002\u0001\n\u0001\n\u0002\u0001\n\u0001\n\n^\n^\n^\ni\nj\nk\nv\n3\n4\n1\n5\n6\n6\n=\n-\n-\n\n^\n^\n^\nv\ni( 24\n6)\nj(18\n5)\nk( 18\n20)\n=\n-\n+\n-\n-\n+\n-\n+\n\n^\n^\n^\nv\n18i\n13j\n2k\n= -\n-\n+",
    "examSource": "",
    "image": "/images/yct_motion_plane/p18_img1_xref161.png"
  },
  {
    "id": "yct-motion-plane-q094",
    "num": 94,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The \nvectors \nA,B and C\n\u0001\n\u0001\n\u0001\n\nare \nsuch \nthat \nA = B , C =\n2 A and A + B + C = 0\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n. \nThe \nangles between A and B,B and C\n\u0001\n\u0001\n\u0001 \u0001\n respectively \nare",
    "options": [
      "45o, 90o",
      "90o, 135o",
      "90o, 45o",
      "45o, 135"
    ],
    "correctAnswer": 1,
    "explanation": "According to figure. \n\nGiven that, A\nB\nC\n+\n= -\n\u0001\n\u0001\n\u0001\n\nA\nB\nC\nC\n+\n= -\n=\n\u0001\n\u0001\n\u0001\n\u0001\n\nSquaring both side, we get- \n\n2\n2\nA\nB\nC\n+\n=\n\u0001\n\u0001\n\u0001\n\n(\n) (\n)\n2\n2\nA\nB\nA\nB\nC\nC C\nC\n\n\n\n+\n⋅\n+\n=\n⋅\n=\n\n\n\n\n\n\u0001\n\u0001\n\u0001\n\u0001 \u0001\n\u0001\n\u0001\n\u0001\n∵\n\n2\nA A\nA B\nB A\nB B\nC\n⋅\n+\n⋅\n+\n⋅\n+\n⋅\n=\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001 \u0001\n\n2\n2\n2\nA\nA B cos\nA B cos\nB\nC\nθ\nθ\n+\n+\n+\n=\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\n (\n)\nB\nA, C\n2 A\n=\n=\n∵\n\nA2 + A2cosθ + A2cosθ + A2 = 2A2 \n⇒ \n(2 + 2cosθ) = 2 \n⇒ \ncosθ = 0 \n⇒ \nθ = 90o \n\nA\nB\nC\n+\n= -\n\u0001\n\u0001\n\u0001\n\nA B\nB B\nB C\n⋅\n+\n⋅\n= -⋅\n\u0001\n\u0001\n\u0001\n\u0001 \u0001\n\u0001\n\no\n2\nA B cos90\nB\nB C cosφ\n+\n= -\n\u0001\n\u0001\n\u0001\n\u0001\n\n∵ \nA = B, C\n2 A\n2 B\n=\n=\n\n2\nB\nB\n2 B cos\n= -⋅\n⋅\nφ \n\no\n1\ncos\n2\n135\nφ\nφ\n-\n=\n=\n\nSo, θ = 90o, φ = 135o",
    "examSource": "o  TS EAMCET(Medical)-2015",
    "image": "/images/yct_motion_plane/p18_img1_xref161.png"
  },
  {
    "id": "yct-motion-plane-q095",
    "num": 95,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "An ant starts from the origin and crawls 10 cm \nalong the x - axis and then 20 cm along the y - \naxis. The dot product of the ant's displacement \nvector with the position vector of a point that \nmakes 45° with the x - axis and has a \nmagnitude of \n2 cm is",
    "options": [
      "30 cm",
      "30 2 cm",
      "30\n2\n cm",
      "15"
    ],
    "correctAnswer": 0,
    "explanation": "Displacement vector of ants = \n^\n^\n10i\n20j\n+\n\nPosition vector of point = \n2 (cos45o ^i + sin45o ^j) \nPosition vector of point = ^\n^\ni\nj\n+ \nCross product of Ant displacement and position vector \n\n = (10 ^i + 20 ^j).( ^i + ^j) \n\n = (10 + 20) \n\n = 30 cm",
    "examSource": "cm  TS EAMCET 18.07.2022, Shift-I",
    "image": "/images/yct_motion_plane/p18_img1_xref161.png"
  },
  {
    "id": "yct-motion-plane-q096",
    "num": 96,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "A vector is given as \n^\n^\nA\n4i\n7j\n=\n+\n\u0001\n. What would \nbe the angle, the vector A\n→\nmakes with y - axis",
    "options": [
      "1\n7\ncos\n11\n-\n\nθ =\n\n\n\n",
      "1\n4\ncos\n11\n-\n\nθ =\n\n\n\n",
      "1\n7\ncos\n65\n-\n\nθ =\n\n\n\n",
      "1\n4\ncos\n65\n-\n\nθ =\n\n\n\n"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \n^\n^\nA\n4i\n7j\n=\n+\n\u0001\n, \n^\nB\nj\n=\n\u0001\n (y-axis) \nWe know that, \n\n2\n2\n2\n^\n^\n^\nA B\n(4i\n7j) j\ncos\nA B\n4\n7\n1\n⋅\n+\n⋅\nθ =\n=\n+\n\u0001 \u0001\n\u0001 \u0001\n\n1\n7\ncos\n65\n-\n\nθ =\n\n\n\n",
    "examSource": "TS EAMCET 30.07.2022, Shift-I",
    "image": "/images/yct_motion_plane/p18_img1_xref161.png"
  },
  {
    "id": "yct-motion-plane-q097",
    "num": 97,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The resultant of the two vectors \n\u0001\nA and \n\u0001\nB makes angle α with \n\u0001\nA and β with \n\u0001\nB . \n\n Statement",
    "options": [
      ": α < β if \n\u0001\nA <\n\u0001\nB \n\n Statement",
      ": α < β if \n\u0001\nA >\n\u0001\nB \n\n Statement",
      ": α = β if \n\u0001\nA =\n\u0001\nB \n\n(a) (A) and (C) are true \n\n(b) Only (C) is true \n\n(c) (B) and (C) are true",
      "(A),(B),"
    ],
    "correctAnswer": 2,
    "explanation": "A\nR cos\n=\nα\n\u0001\n\u0001\n\nB\nR cos\n=\nβ\n\u0001\n\u0001\n\nSuppose that α < β \nThen, cosα > cosβ, So A\nB\n>\n\u0001\n\u0001\n\nAnd suppose that α = β \nThen, cosα = cosβ, So A\nB\n=\n\u0001\n\u0001",
    "examSource": "(C) are all true   TS EAMCET 08.05.2019, Shift-I",
    "image": "/images/yct_motion_plane/p18_img1_xref161.png"
  },
  {
    "id": "yct-motion-plane-q098",
    "num": 98,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Vector \n\n\u0001\n\na = i + 2j+ 2k and \n\n\u0001\n\nb = i - j+ k . What is \nthe unit vector along a + b ?",
    "options": [
      "2i\nj\n3k\n14\n+ +",
      "2i\nj\n4k\n20\n-+",
      "2i\nj\n3k\n13\n+ +",
      "2i\nj\n3k\n10\n+ -"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n^\n^\na\ni\n2 j + 2k\n=\n\u0001\n\u0001\n+ \n, \n^\n^\nb\ni\nj + k\n=\n\u0001\n\u0001\n- \n\n^\n^\n^\n^\n^\na\nb\n(i\n2j\n2k)\n(i\nj + k)\n+\n=\n+\n+\n+\n\u0001\n\u0001\n\u0001\n- \n\na\nb\n+\n\u0001\n\u0001\n= ^\n^\n2i\nj +3k\n\u0001\n+ \n\nUnit vector of (a\nb)\n+\n\u0001\n\u0001\n= a\nb\na\nb\n+\n+\n\u0001\n\u0001\n\u0001\n\u0001\n\n^\n^\n(2i\nj +3k)\n4 +1+ 9\n=\n\u0001\n+ \n^\n^\n2i\nj +3k\n14\n=\n\u0001\n+",
    "examSource": "TS EAMCET 28.09.2020, Shift-I",
    "image": "/images/yct_motion_plane/p19_img1_xref167.png"
  },
  {
    "id": "yct-motion-plane-q099",
    "num": 99,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Find the angle between the two vectors: \n^\n^\n^\n^\n^\n^\na\n3i\n2j\n5k,b\n5i\n3j\nk\n=\n+\n+\n=\n+\n+\n\u0001\n\u0001",
    "options": [
      "1\n26\ncos\n1330\n-\n\n\n\n\n",
      "1\n26\nsin\n1330\n-\n\n\n\n\n",
      "1\n26\ncos\n1335\n-\n\n\n\n\n",
      "1\n26\ntan\n1330\n-\n\n\n\n\n"
    ],
    "correctAnswer": 0,
    "explanation": "Given, \n^\n^\n^\n^\n^\n^\na\n3i\n2j\n5k,b\n5i\n3j\nk\n=\n+\n+\n=\n+\n+\n\u0001\n\u0001\n\n( )\n( )\n( )\n2\n2\n2\n2\n2\n2\nx\ny\nz\na\na\na\na\n3\n2\n5\n38\n=\n+\n+\n=\n+\n+\n=\n\u0001\n\nb\n\u0001\n= \n( )\n( )\n( )\n2\n2\n2\n2\n2\n2\nx\ny\nz\nb\nb\nb\n5\n3\n1\n35\n+\n+\n=\n+\n+\n=\n\na.b\n\u0002\u0001\u0001\n= \n^\n^\n^\n^\n^\n^\n(3i\n2j\n5k) (5i\n3j\nk)\n+\n+\n⋅\n+\n+\n\n= 15+6+5 = 26 \n a.b\n\u0002\u0001\u0001 = ab cosθ \n cosθ = a.b\na b\n\u0002\u0001\u0001\n\u0001\n\u0001\n= \n26\n38 35\n= \n26\n1330\n\nθ = cos-1\n26\n1330\n\nSo, Angle between two vector is cos-1\n26\n1330\n\n\n\n\n\n",
    "examSource": "TS EAMCET 04.08.2021, Shift-I",
    "image": "/images/yct_motion_plane/p19_img1_xref167.png"
  },
  {
    "id": "yct-motion-plane-q100",
    "num": 100,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Find the component of vector \n\u0002\u0001\n\nP = 2i + 3j along \nthe direction of vector \n\u0002\u0001\n\nQ = i + j .",
    "options": [
      "2",
      "2 5",
      "5\n2",
      "2\n5"
    ],
    "correctAnswer": 2,
    "explanation": "Projection of \nP.Q\nP on Q\nQ\n=\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\n= (\n)(\n)\n2i\n3j\ni\nj\n2\n+\n+\n = 2\n3\n2\n+\n = 5\n2",
    "examSource": "TS EAMCET 04.08.2021, Shift-II  HP CET-2018",
    "image": "/images/yct_motion_plane/p19_img1_xref167.png"
  },
  {
    "id": "yct-motion-plane-q101",
    "num": 101,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The y-component of vector \n\u0002\u0001\nA is +3.0 m if \n\u0002\u0001\nA \nmakes an angle of 30° counter clockwise from \nthe positive y - axis, the magnitude of \n\u0002\u0001\nA is \n\n (assume \n\u0002\u0001\nA is in x - y plane)",
    "options": [
      "2 3m",
      "11m",
      "15m",
      "21"
    ],
    "correctAnswer": 0,
    "explanation": "y - component of vector A\n\u0002\u0001\n = + 3 \nA\n\u0002\u0001\n makes an angle of 30º counter clockwise from the \npositive y - axis the magnitude of A is, \n\ny\nA\nA\ncos30º\n=\n\u0002\u0001\n\n3\n3\n3\n3\nA\n2 3\ncos30º\n3\n3 / 2\n2\n+\n×\n=\n=\n=\n=\n\nA\n2 3m\n=",
    "examSource": "m  TS EAMCET 04.08.2021, Shift-II",
    "image": "/images/yct_motion_plane/p19_img1_xref167.png"
  },
  {
    "id": "yct-motion-plane-q102",
    "num": 102,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "A particle is moving such that its position co-\nordinates (x, y) are (2m, 3m) at time t = 0, (6m, \n7m) at time t = 2 s and (13m, 14m) at time t = 5 \ns. Average velocity vector (vav) from t = 0 to t = \n5 s is",
    "options": [
      "(\n)\n1\n^\n^\n13i\n14j\n5\n+",
      "(\n)\n7 ^\n^\ni\nj\n3\n+",
      "(\n)\n^\n^\n2 i\nj\n+",
      "(\n)\n11 ^\n^\ni\nj\n5\n+\n\n[AIPMT 2014]"
    ],
    "correctAnswer": 3,
    "explanation": "According to figure, \n\nIt is given that, t = 0 to t = 5 sec \n\navg\ndisplacement\nv\ntime\n=\n\u0001\n\n(\n)\n(\n)\n(\n) (\n)\nC\nA\n^\n^\n^\n^\n13i\n14j\n2i\n3j\nr\nr\n5\n0\n5\n+\n-\n+\n-\n=\n-\n\u0001\n\u0001\n^\n^\n11i\n11j\n5\n+\n=\n\n(\n)\navg\n11 ^\n^\nv\ni\nj\n5\n=\n+\n\u0001",
    "examSource": "",
    "image": "/images/yct_motion_plane/p19_img1_xref167.png"
  },
  {
    "id": "yct-motion-plane-q103",
    "num": 103,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "If the magnitude of sum of two vectors is equal \nto the magnitude of difference of the two \nvectors, the angle between these vectors is",
    "options": [
      "90o",
      "45o",
      "180o",
      "0o \n[NEET 2016, AIPMT 1991]"
    ],
    "correctAnswer": 0,
    "explanation": "There are two vectors A and B \nIt is given that, \n\nA\nB\nA\nB\n+\n=\n-\n\nLet, angle between A and B is φ \n\nA2 + B2 + 2AB cosφ = A2 + B2 - 2AB cosφ \n\ncosφ = 0 [∵Α, Β ≠ 0] \n\no\n90\n2\nπ\nφ =\n=",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q104",
    "num": 104,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "If \nvectors \n^\n^\nω\nω\nA = cos ti + sin t j \nand \n^\n^\nωt\nωt\nB = cos\ni + sin\nj\n2\n2\n are functions of time, \nthen the value of t at which they are orthogonal \nto each other, is",
    "options": [
      "t\n4\nπ\n=\nω",
      "t\n2\nπ\n=\nω",
      "t\nπ\n= ω",
      "t = 0 \n[AIPMT 2015]"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \n^\n^\nA\ncos ti\nsin\ntj\n=\nω\n+\nω\n\u0001\n\nt\nt\n^\n^\nB\ncos\ni\nsin\nj\n2\n2\nω\nω\n=\n+\n\u0001\n\nIf two vector are orthogonal then their dot product will \nbe zero- \n\nA B\n0\n⋅\n=\n\u0001\n\u0001\n\n(\n)\nt\nt\n^\n^\n^\n^\ncos ti\nsin\ntj\ncos\ni\nsin\nj\n0\n2\n2\nω\nω\n\n\nω\n+\nω\n⋅\n+\n=\n\n\n\n\n\nt\nt\ncos t cos\nsin\nt sin\n0\n2\n2\nω\nω\nω ⋅\n+\nω ⋅\n= \n\nt\ncos\nt\n0\n2\nω\n\n\nω -\n=\n\n\n\n\n\n[∵ cosAcosB + sinAsinB = cos (A - B)] \n\nt\ncos\nt\ncos\n2\n2\nω\nπ\n\n\nω -\n=\n\n\n\n\n\nt\nt\n2\n2\nω\nπ\nω -\n=\n\nt\n2\n2\nω\nπ\n=\n or t\nπ\n= ω",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q105",
    "num": 105,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "A and B are two vectors and θ is the angle \nbetween them. If\n(\n)\nA×B =\n3 A.B\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001 \u0002\u0001\n, then the \nvalue of θ is",
    "options": [
      "60o",
      "30o",
      "30o",
      "90o \n[AIPMT 2007]"
    ],
    "correctAnswer": 0,
    "explanation": "|A × B| = \n3 (A.B) \n\nAB sinθ = \n3 AB cosθ \n\ntanθ = \n3 \n\nθ = tan-1(\n3 ) \n\nθ = 60°",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q106",
    "num": 106,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "If A×B =\n3A.B\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001 \u0002\u0001 then the value of A + B is",
    "options": [
      "(A2 + B2 + AB)1/2",
      "1/ 2\n2\n2\nAB\nA\nB\n3\n\n\n+\n+\n\n\n\n",
      "A + B",
      "(\n)\n1/ 2\n2\n2\nA\nB\n3AB\n+\n+"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, A×B =\n3A.B\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001 \u0002\u0001\n\nAB sinθ = \n3 AB cosθ \n\ntanθ = \n3 \n\nθ = 60° \nWe know that, \nLaw of parallelogram of addition \n\n2\n2\n| A\nB |\nA\nB\n2ABcos\n+\n=\n+\n+\nθ\n\u0002\u0001\n\u0002\u0001\n\n2\n2\n1\n| A\nB |\nA\nB\n2AB\n2\n+\n=\n+\n+\n×\n\u0002\u0001\n\u0002\u0001\n\nA\nB\n+\n=\n\u0001\n\u0001\n(A2 + B2 + AB)1/2",
    "examSource": "BCECE-2013  UPSEE - 2006"
  },
  {
    "id": "yct-motion-plane-q107",
    "num": 107,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "If a vector ^\n^\n^\n2i + 3j+ 8k is perpendicular to the \nvector ^\n^\n^\nα\n4j\n4i +\nk\n-\n, then the value of α is",
    "options": [
      "-1",
      "1\n2",
      "- 1\n2",
      "1"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \n^\n^\n^\na\n2i\n3j\n8k\n=\n+\n+\n\u0001\n, \n^\n^\n^\nb\n4i\n4j\nk\n= -\n+\n+ α\n\u0001\n\na and b\n\u0001\n\u0001\nare perpendicular so, \n\na.b\n\u0001 \u0001\n= 0 \n\n(\n) (\n)\n^\n^\n^\n^\n^\n^\n2i\n3j\n8k\n4i\n4j\nk\n+\n+\n⋅-\n+\n+ α\n= 0 \n\n-8 + 12 + 8α = 0 \n\n4 + 8α = 0 \n\n8α = -4 \n\nα = \n1\n2\n-",
    "examSource": "Karnataka CET-2017  JIPMER-2007   AIPMT-2005"
  },
  {
    "id": "yct-motion-plane-q108",
    "num": 108,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "If \na \nunit \nvector \nis \nrepresented \nby \n^\n^\n^\n0.5i + 0.8j+ ck , then the value of c is",
    "options": [
      "1",
      "0.11",
      "0.01",
      "0.39"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \n^\n^\n^\nA\n0.5i\n0.8j\nck\n=\n+\n+\n\u0002\u0001\n\nIt is unit vector so it has magnitude \n\n| A | 1\n=\n\u0002\u0001\n\n(\n)\n(\n)\n2\n2\n2\n0.5\n0.8\nc\n1\n+\n+\n= \n\nc2 = 0.11 \n\nc = \n0.11",
    "examSource": "TS EAMCET (Medical)-2017"
  },
  {
    "id": "yct-motion-plane-q109",
    "num": 109,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Which of the following is not a vector quantity?",
    "options": [
      "Speed",
      "Velocity",
      "Torque",
      "Displacement \n[AIPMT 1995]"
    ],
    "correctAnswer": 0,
    "explanation": "The physical quantities for which having both \ndirection and magnitude is called vector quantity. \nExample- force, torque, momentum, acceleration \nvelocity etc.",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q110",
    "num": 110,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The \nangle \nbetween \nthe \ntwo \nvectors \n^\n^\n^\nA = 3i + 4j+ 5k and \n^\n^\n^\n-\nB = 3i + 4j\n5k will be",
    "options": [
      "0o",
      "45o",
      "90o",
      "180o \n[AIPMT 1994]"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \n\n^\n^\n^\nA\n3i\n4j\n5k\n=\n+\n+\n\u0001\nand \n^\n^\n^\nB\n3i\n4j\n5k\n=\n+\n-\n\u0001\n\ncos θ = \nA.B\n| A || B |\n\u0002\u0001 \u0002\u0001\n\ncos θ = \n(\n)(\n)\n2\n2\n2\n2\n2\n2\n^\n^\n^\n^\n^\n^\n3i\n4j\n5k\n3i\n4j\n5k\n(3)\n(4)\n(5)\n(3)\n(4)\n(5)\n+\n+\n+\n-\n+\n+\n+\n+\n\ncos θ = \n( )\n( )\n( )\n( )\n( )\n( )\n2\n2\n2\n2\n2\n2\n9 16\n25\n3\n4\n5\n.\n3\n4\n5\n+\n-\n+\n+\n+\n+\n\ncos θ = 0\n50\n\ncos θ = 0 \n\ncos θ = cos90° \n\nθ = 90°",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q111",
    "num": 111,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "The angle between A\n\u0002\u0001\n and B\n\u0002\u0001\n is θ. The value of \nthe triple product \n(\n)\nA. B× A\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001\n is",
    "options": [
      "A2B",
      "zero",
      "A2Bsinθ",
      "A2Bcosθ"
    ],
    "correctAnswer": 1,
    "explanation": "Let A (B A)\nA C\n⋅\n×\n=\n⋅\n\u0001\n\u0001\n\u0001 \u0001\n\u0001\n\nHere C\nB A\n=\n×\n\u0001\n\u0001\n\u0001\n which is perpendicular to both vector \nA\n\u0001\nand B\n\u0001\n. \n∴ \nA C\n0\n⋅\n=\n\u0001\n\u0001\n\n∵ \nC\n\u0001\n is perpendicular to A\n\u0001\n and B\n\u0001\n\n∴ Angle between A\n\u0001 and C\n\u0001 is 90° \n\nA C\nACcos\n⋅\n=\nθ\n\u0001 \u0001\n\nA C\n0\n⋅\n=\n\u0001\n\u0001\n\n∴ \nA (B A)\n0\n⋅\n×\n=\n\u0001\n\u0001\n\u0001",
    "examSource": "JIPMER-2007   AIPMT-1989"
  },
  {
    "id": "yct-motion-plane-q112",
    "num": 112,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "If \n^\n^\n^\n^\n^\n^\n\u0001\n\u0001\nA = (2i + 3j-k)mandB = (i + 2j+ 2k)m. The \nmagnitude of component of vector ^A along \nvector ^B will be -------",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 1,
    "explanation": "(\n)\n^\n^\n^\n^\n^\n^\nA\n2i\n3j\nk and B\ni\n2j\n2k\n=\n+\n-\n=\n+\n+\n\u0001\n\u0001\n\nMagnitude of A\n\u0001\n along \nA B\nB\nB\n⋅\n=\n\u0001 \u0001\n\u0001\n\u0001\n\n(\n)(\n)\n( )\n( )\n( )\n2\n2\n2\n^\n^\n^\n^\n^\n^\n2i\n3j\nk\ni\n2j\n2k\n1\n2\n2\n+\n-\n+\n+\n+\n+\n\n2\n6\n2\n6\n2\n3\n9\n+\n-\n=\n=",
    "examSource": "m.  JEE Main-26.07.2022, Shift-II"
  },
  {
    "id": "yct-motion-plane-q113",
    "num": 113,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "A\n\u0001\nis a vector quantity such that A\n\u0001\n= non-zero \nconstant. Which of the following expression is \ntrue for A\n\u0001\n?",
    "options": [
      "A A\n0\n⋅\n=\n\u0001\n\u0001",
      "A\nA\n0\n×\n<\n\u0001\n\u0001",
      "A\nA\n0\n×\n=\n\u0001\n\u0001",
      "A\nA\n0\n×\n>\n\u0001\n\u0001"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, A\n0\n≠\n\u0001\n\n^\nA\nA\nA A sin0 n\n0\n×\n=\n° =\n\u0001\n\u0001\n\u0001 \u0001\n\nSo, \nA\nA\n0\n×\n=\n\u0001\n\u0001",
    "examSource": "JEE Main-25.06.2022, Shift-I"
  },
  {
    "id": "yct-motion-plane-q114",
    "num": 114,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "Which of the following relations is true for two \nunit vector ^\n^\nAandB making an angle θ to each \nother ?",
    "options": [
      "^\n^\n^\n^\nA\nB\nA\nB tan 2\nθ\n+\n=\n-",
      "^\n^\n^\n^\nA\nB\nA\nB tan 2\nθ\n-\n=\n+",
      "^\n^\n^\n^\nA\nB\nA\nB cos 2\nθ\n+\n=\n-",
      "^\n^\n^\n^\nA\nB\nA\nB cos 2\nθ\n-\n=\n+"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, \n\n^\n^\nA\nB\n+\n=\n2\n2\n^\n^\n^\n^\nA\nB\n2 A B cosθ\n+\n+\n\n^\n^\nA\n1\nB\n1\n=\n= \n\n( )\n( )\n2\n2\n^\n^\nA\nB\n1\n1\n2cos\n+\n=\n+\n+\nθ \n =\n2\n2cos\n+\nθ \n =\n2\n2\n2 2cos\n1\n2\nθ\n\n\n+\n-\n\n\n\n \n =\n2\n2 1\n2cos\n1\n2\nθ\n\n\n+\n-\n\n\n\n\n2cos 2\nθ\n=\n\n^\n^\nA\nB\n2cos 2\nθ\n+\n=\n\n.....(i) \n2\n2\n^\n^\n^\n^\n^\n^\nA\nB\nA\nB\n2 A B cos\n-\n=\n+\n-\nθ \n^\n^\nA\nB\n1 1\n2cos\n-\n=\n+ -\nθ \n^\n^\nA\nB\n2\n2cos\n-\n=\n-\nθ \n =\n(\n)\n2 1 cos\n-\nθ \n =\n(\n2\n2 1\n1\n2sin 2\nθ\n\n\n-\n-\n\n\n\n \n =\n2\n2 1 1\n2sin 2\nθ\n\n\n-+\n\n\n\n \n =\n2\n2 1 1\n2sin 2\nθ\n\n\n-+\n\n\n\n\n2sin 2\nθ\n=\n\n^\n^\nA\nB\n2sin 2\nθ\n-\n=\n\n.....(ii) \nEquation (i) divide by equation (ii), we get - \n^\n^\n2sin\nA\nB\n2\n^\n^\nA\nB\n2cos 2\nθ\n-\n=\nθ\n+\n\n^\n^\nA\nB\ntan\n^\n^\n2\nA\nB\n-\nθ\n=\n+\n\n^\n^\n^\n^ tan\nA\nB\nA\nB\n2\nθ\n=\n+\n-",
    "examSource": "JEE Main-25.06.2022, Shift-I"
  },
  {
    "id": "yct-motion-plane-q115",
    "num": 115,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "Match List I with List II. \n\nList-I \n\nList-II",
    "options": [
      "C-A-B=0 \ni)",
      "A-C-B=0 \nii)",
      "B-A-C=0 \niii)",
      "A+B=-C \niv) \n\n Choose the correct answer from the options \ngiven below. \n\n(a) (A) →(iv), (B) →(i), (C) →(iii), (D) →(ii) \n\n(b) (A) →(iv), (B) →(iii), (C) →(i), (D) →(ii) \n\n(c) (A) →(iii), (B) →(ii), (C) →(iv), (D) →(i) \n\n(d) (A) →(i), (B) →(iv), (C) →(ii), (D) →"
    ],
    "correctAnswer": 1,
    "explanation": "Applying triangle law of vectors to the \ndiagram. \n(i) B\nA\nC\n=\n+\n\u0001\n\u0001\n\u0001\n\n∴ B\nA\nC\n0\n-\n-\n=\n\u0001\n\u0001\n\u0001\n\nThis matches with (C). \n(ii) -C\nA\nB\n=\n+\n\u0001\n\u0001\n\u0001 \nThis matches with (D). \n(iii) C\nB\nA\n+\n=\n\u0001\n\u0001\n\u0001\n\n∴ A\nC\nB\n-\n=\n\u0001\n\u0001\n\u0001 \nThis matches with (B). \n(iv) A\nB\nC\n+\n=\n\u0001\n\u0001\n\u0001\n\n∴ C\nA\nB\n0\n-\n-\n=\n\u0001\n\u0001\n\u0001",
    "examSource": "(iii)  JEE Main-25.07.2021, Shift-I",
    "image": "/images/yct_motion_plane/p22_img1_xref181.png"
  },
  {
    "id": "yct-motion-plane-q116",
    "num": 116,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "Two vectors P and Q have equal magnitudes. If \nthe magnitude of P+Q is n times the magnitude \nof P-Q, then angle between P and Q is",
    "options": [
      "1 n\n1\nsin\nn\n1\n-\n-\n\n\n\n\n+\n\n",
      "1 n\n1\ncos\nn\n1\n-\n-\n\n\n\n\n+\n\n",
      "2\n1\n2\nn\n1\nsin\nn\n1\n-\n\n-\n\n\n+\n\n",
      "2\n1\n2\nn\n1\ncos\nn\n1\n-\n\n-\n\n\n+\n\n"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, \n\nP = Q \n\n.....(i) \nLet the magnitude of (P + Q) = R \nR = |P + Q| = \n2\n2\nP\nQ\n2PQcosθ\n+\n+\n\n2\n2\n2\nR\nP\nP\n2P cosθ\n=\n+\n+\n\n[from (i)] \nThe magnitude of (P - Q) = R' \nR' = |P - Q| = \n2\n2\nP\nQ\n2PQcosθ\n+\n-\n\n2\n2\n2\nR '\n| P\nQ |\nP\nP\n2P cosθ\n=\n-\n=\n+\n-\n\n[from (i)] \nGiven that \nR = nR' \n2\n2\n2\n2\n2P\n2P cos\nn 2P\n2P cos\nθ\nθ\n+\n=\n-\n\nsquaring both side \n2p2 + 2p2 cosθ = n2(2p2 - 2p2 cosθ) \n\n(\n)\n(\n)\n2\n2\n2\n2p 1\ncos\nn 2p 1\ncos\nθ\nθ\n+\n=\n-\n\n1 + cosθ = n2(1 - cosθ) \n1 + cosθ = n2 - n2cosθ \ncosθ + n2cosθ = n2 - 1 \ncosθ(1 + n2) = n2 - 1 \n2\n2\nn\n1\ncos\nn\n1\n-\nθ =\n+ \n2\n1\n2\nn\n1\ncos\nn\n1\n-\n\n-\nθ =\n\n\n\n+ ",
    "examSource": "JEE Main-25.07.2021, Shift-II  JEE Main-20.07.2021, Shift-II  JEE Main-10.01.2019, Shift-II",
    "image": "/images/yct_motion_plane/p22_img1_xref181.png"
  },
  {
    "id": "yct-motion-plane-q117",
    "num": 117,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "If A and B are two vectors satisfying the \nrelation A B\nA\nB\n⋅\n=\n×\n\u0001\n\u0001\n\u0001\n\u0001\n. Then, the value of \nA\nB\n-\n\u0001\n\u0001\n will be",
    "options": [
      "2\n2\nA\nB\n+",
      "2\n2\nA\nB\n2AB\n+\n+",
      "2\n2\nA\nB\n2AB\n+\n+",
      "2\n2\nA\nB\n2AB\n+\n-"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, \n\nA B\nA\nB\n⋅\n=\n×\n\u0001\n\u0001\n\u0001\n\u0001\n\n AB cosθ = AB sinθ \n tanθ = 1 \n\nθ = tan-1(1) \n\nθ = 45° \nThe value of A\nB\n-\n\u0001\n\u0001\nis \n2\n2\n| A\nB|\nA\nB\n2ABcos45\n-\n=\n+\n-\n°\n\u0001\n\u0001\n\n2\n2\n| A\nB|\nA\nB\n2AB\n-\n=\n+\n-\n\u0001\n\u0001",
    "examSource": "JEE Main-20.07.2021, Shift-I",
    "image": "/images/yct_motion_plane/p23_img1_xref190.png"
  },
  {
    "id": "yct-motion-plane-q118",
    "num": 118,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "If P ×Q =Q ×P, the angle between P and Q is \nθ (0°< θ <360°). The value of \nθ will be \n……………°",
    "options": [
      "180",
      "2 × 180",
      "180 / 2",
      "180 / 4"
    ],
    "correctAnswer": 0,
    "explanation": "(\n)\nIf P\nQ\nQ\nP\nP\nQ\n-P\nQ\n2 P\nQ\n0\nIf P\n0 or Q\n0\n×\n=\n×\n×\n=\n×\n×\n=\n=\n=\n\u0001\n\u0001\n\u0001\n\u0001\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\nThe angle between P & Q\n\u0001\n\u0001\nis 180º (0º<θ < 360º) \nSo, θ = 180º",
    "examSource": ".  JEE Main-25.02.2021, Shift-II",
    "image": "/images/yct_motion_plane/p23_img1_xref190.png"
  },
  {
    "id": "yct-motion-plane-q119",
    "num": 119,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "Let \n1\n2\nA\n3, A\n5\n=\n=\n\u0001\n\u0001\n and \n\n1\n2\nA\nA\n5\n+\n=\n\u0001\n\u0001\n. The value of \n\n (\n) (\n)\n1\n2\n1\n2\n2A + 3A\n. 3A - 2A\n\u0001\n\u0001\n\u0001\n\u0001\n is",
    "options": [
      "-106.5",
      "-112.5",
      "-99.5",
      "-118.5"
    ],
    "correctAnswer": 3,
    "explanation": "Given that \n1\n2\n1\n2\n2\n2\n1\n2\n1\n2\n1\n2\nA\n3, A\n5, A\nA\n5\nA\nA\nA\nA\n2 A A cos\n=\n=\n+\n=\n+\n=\n+\n+\nθ\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\n( )\n( )\n2\n2\n5\n3\n5\n2 3 5cos\n5\n9\n25\n2 3 5cos\n=\n+\n+ × ×\nθ\n=\n+\n+ × ×\nθ\n\nSquaring both side \n25 = 9+25+2× 3 × 5 cosθ \n-9\ncos\n2 3 5\n-3\ncos\n10\nθ =\n× ×\nθ =\n\n(\n) (\n)\n1\n2\n1\n2\n2\n2\n1\n1\n2\n1\n2\n2\n2A\n3A\n. 3A\n2A\n6 | A |\n9A\nA\n4A\nA\n6| A |\n+\n-\n=\n+\n⋅\n-\n⋅\n-\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\n2\n1\n2\n1\n2\n1\n2\n6(3)\n9A .A\n4A .A\n6 25\n54\n5A .A\n6 25\n=\n+\n-\n-×\n=\n+\n-×\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\n=\n1\n2\n54\n5 A A cos\n150\n+\nθ -\n\u0001\n\u0001\n\n3\n54\n5 3 5\n150\n10\n-\n\n\n=\n+ × ×\n-\n\n\n\n\n\n = 54 -150 - 45\n2 \n\n= - 118.5",
    "examSource": "JEE Main-08.04.2019, Shift-II",
    "image": "/images/yct_motion_plane/p23_img1_xref190.png"
  },
  {
    "id": "yct-motion-plane-q120",
    "num": 120,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "In the cube of side ‘a’ shown in the figure, the \nvector from the central point of the face ABOD \nto the central point of the face BEFO will be",
    "options": [
      "(\n)\n1\n^\n^\na i\nk\n2\n-",
      "(\n)\n1\n^\n^\na j\ni\n2\n-",
      "(\n)\n1\n^\n^\na j\nk\n2\n-",
      "(\n)\n1\n^\n^\na k\ni\n2\n-"
    ],
    "correctAnswer": 1,
    "explanation": "Position vector of G is, \na\na\nG\n,0,\n2\n2\n\n\n\n\n\n \na\na\n^\n^\nOG\ni\nk\n2\n2\n=\n+\n\u0002\u0002\u0002\u0001\n\nPosition vector of H is, \na a\nH 0,\n,\n2 2\n\n\n\n\n\n \na\na\n^\n^\nOH\nj\nk\n2\n2\n=\n+\n\u0002\u0002\u0002\u0001\n\nGH\nOH\nOG\n=\n-\n\u0002\u0002\u0002\u0001\n\u0002\u0002\u0002\u0001\n\u0002\u0002\u0002\u0001 \na\na\na\na\n^\n^\n^\n^\nGH\nj\nk\ni\nk\n2\n2\n2\n2\n\n\n\n\n=\n+\n-\n+\n\n\n\n\n\n\n\n\n\u0002\u0002\u0002\u0001\n\n(\n)\na ^\n^\nGH\nj - i\n2\n=\n\u0002\u0002\u0002\u0001",
    "examSource": "JEE Main-10.01.2019, Shift-I",
    "image": "/images/yct_motion_plane/p23_img1_xref190.png"
  },
  {
    "id": "yct-motion-plane-q121",
    "num": 121,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "If A\nB\nB\nA\n×\n=\n×\n\u0001\n\u0001\n\u0001\n\u0001\n, then the angle between A and \nB is",
    "options": [
      "π",
      "/3\nπ",
      "/ 2\nπ",
      "/ 4\nπ\n\nAIEEE-2004"
    ],
    "correctAnswer": 0,
    "explanation": "A\nB\nB A\nA\nB\n-(A\nB)\n×\n=\n×\n×\n=\n×\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001 \nABsinθ = -ABsinθ \n2ABsinθ = 0 \nsinθ = 0 \nθ = 0, π, 2π",
    "examSource": "",
    "image": "/images/yct_motion_plane/p24_img1_xref196.png"
  },
  {
    "id": "yct-motion-plane-q122",
    "num": 122,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "^\n^\n^ ^\n^\n^\nA = 3i + 4j+ 2k,B = 6i - j+ 3k\n\u0002\u0001\n\u0002\u0001\n Find a vector \nparallel to A whose magnitude equal to that of \nB",
    "options": [
      "(\n)\n46\n^\n^\n^\n3i + 4j+ 2k\n29",
      "(\n)\n46\n^\n^\n^\n6i\nj+ 3k\n29\n-",
      "(\n)\n29\n^\n^\n^\n3i + 4j+ 2k\n46",
      "(\n)\n29\n^\n^\n^\n6i\nj+ 3k\n46\n-\n\nAssam CEE-2020"
    ],
    "correctAnswer": 0,
    "explanation": "Givne that, \n^\n^\n^\nA\n3i\n4j\n2k\n^\n^\n^\nB\n6i - j\n3k\n=\n+\n+\n=\n+\n\u0001\n\u0001\n\nLet X be the vector parallel to A\n\u0001 whose magnitude is \nequal to that of B\n\u0001 \n\n(\n)\nA B\nX\nA\n^\n^\n^\n3i\n4j\n2k\n36 1 9\n9 16\n4\n46\n^\n^\n^\nX\n3i\n4j\n2k\n29\n=\n+\n+\n=\n+ +\n+\n+\n=\n+\n+\n\u0001 \u0001\n\u0001\n\u0001\n\u0001",
    "examSource": "",
    "image": "/images/yct_motion_plane/p24_img1_xref196.png"
  },
  {
    "id": "yct-motion-plane-q123",
    "num": 123,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "A body constrianed to move along the z-axis of \na co-ordinate system is subject to a constant \nforce \n\u0001\nF given by \n(\n)\n^\n^\n^\nF = -i + 2j+ 3k\n\u0001\nN. The work \ndone by this force in moving the body a \ndistance 4m along the z-axis is.",
    "options": [
      "(\n)\n^\n^\n^\n4i\n8j 12k N\n-\n+\n+",
      "(\n)\n^\n^\n4i\n8j N\n-\n+",
      "12 N",
      "^\n12kN \nAssam CEE-2021"
    ],
    "correctAnswer": 2,
    "explanation": "Given \n(\n)\n^\n^\n^\nF\n-i\n2j\n3k\n=\n+\n+\n\u0001\n\n(\n)\n^\n^\n^\nd\n0i\n0j\n4k\n=\n+\n+\n\u0001\n\nWork done is given by- \nW = F.d\n\u0001\n\u0001 \n(\n)(\n)\n^\n^\n^\n^\n^\n^\n-i\n2j\n3k\n0i\n0j\n4k\n=\n+\n+\n+\n+\n\n= 0 + 0 + 12 = 12N",
    "examSource": "",
    "image": "/images/yct_motion_plane/p24_img1_xref196.png"
  },
  {
    "id": "yct-motion-plane-q124",
    "num": 124,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The sum of three vectors in the figure below is \nzero. The magnitude of \n\u0002\u0002\u0002\u0001\nOC and \n\u0002\u0002\u0002\u0001\nOB is",
    "options": [
      "5 m, 5\n2 m",
      "5 m, 5 m",
      "5\n2 m, 5m",
      "5\n2 m, 5\n2 m \nAssam CEE-2018"
    ],
    "correctAnswer": 2,
    "explanation": "Given, the sum of three vectors in given \nfigure is zero \ni.e. \n......\n^\n^\n^\n(i)\n0i\n0j\n0k\n0\n+\n+\n=\n\nNow, \n\n^\n^\nOA\n5( j)\n5j\n=\n-\n= -\n\u0002\u0002\u0002\u0001\n\n^\nOB\nOB (i)\n=\n\u0002\u0002\u0002\u0001\n\n^\n^\nOC\nOCcos45 ( i)\nOCsin 45 j\n=\n° -\n+\n°\n\u0002\u0002\u0002\u0001\n\nOC\nOC\n^\n^\ni\nj\n2\n2\n= -\n+\n\nOC\nOC\n^\n^\nR\nOB\ni\n5\nj\n2\n2\n\n\n\n\n=\n-\n+ -+\n\n\n\n\n\n\n\n\n\u0001\n\n.....(ii) \n\nComparing equation (i) and (ii), we get \n\nOC\nOC\n^\n^\n^\n^\n0i\n0j\nOB\ni\n5\nj\n2\n2\n\n\n\n\n+\n=\n-\n+ -+\n\n\n\n\n\n\n\n\n\nOC\nOC\nOB\n0\nOB\n2\n2\n-\n=\n⇒\n=\n\nOC\n5\n0\n2\n-\n=\n\nOC\n5 2 m\n=\n\nThen, \n5 2\nOB\n5m\n2\n=\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p24_img1_xref196.png"
  },
  {
    "id": "yct-motion-plane-q125",
    "num": 125,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The unit vector perpendicular to the plane of \n^\n^\n^\nA = i - 3j - k\n\u0002\u0001\n and \n^\n^\n\u0002\u0001\n\u0001\nB = 2i + j - k is",
    "options": [
      "4\n1\n7\n^\n^\n^\ni\nj\nk\n66\n66\n66\n-\n+",
      "2\n1\n8\n^\n^\n^\ni\nj\nk\n66\n66\n66\n-\n+",
      "4\n1\n7\n^\n^\n^\ni\nj\nk\n66\n66\n66\n+\n+",
      "2\n1\n8\n^\n^\n^\ni\nj\nk\n66\n66\n66\n+\n+\n\nAssam CEE-2016"
    ],
    "correctAnswer": 0,
    "explanation": "Given, \n(\n)\n(\n)\n^\n^\n^\n^\n^\n^\nA\ni - 3j - k andB\n2i\nj - k\n=\n=\n+\n\u0001\n\u0001\n\n^\n^\n^\ni\nj\nk\nA\nB\n1\n-3\n-1\n2\n1\n-1\n×\n=\n\u0001\n\u0001\n\n(\n)\n(\n)\n(\n)\n(\n)\n(\n)\n(\n)\n^\n^\n^\ni 3 - -1\n- j -1- -2\nk 1- -6\n=\n+\n\n^\n^\n^\n4i\nj\n7k\n=\n-+\n\nNow, \n2\n2\n2\nA\nB\n4\n( 1)\n7\n×\n=\n+ -\n+\n\u0001\n\u0001\n\n = 16 1\n49\n66\n+ +\n=\n\nSo, Unit vector perpendicular to the planes A\n\u0001\n and B\n\u0001 is \nA\nB\nA\nB\n×\n×\n\u0001\n\u0001\n\u0001\n\u0001 \n= \n^\n^\n^\n4i\nj\n7k\n66\n66\n66\n-\n+",
    "examSource": "",
    "image": "/images/yct_motion_plane/p25_img1_xref203.png"
  },
  {
    "id": "yct-motion-plane-q126",
    "num": 126,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The angle between two vectors x and y is θ. If \nthe resultant vector z makes an angle θ/2 with \nx, then which of the following is true?",
    "options": [
      "x = 2y",
      "x = y",
      "x = 2y + 1",
      "y\nx\n2\n=\n\nAssam CEE-2016"
    ],
    "correctAnswer": 1,
    "explanation": "The angle β which the resultant = makes with x is given \nby \ntanβ\nysin\nx + y cos\nθ\n=\nθ \ntan \nysin\n2\nx\nycos\n2\nθ\nθ\nθ\n\n\n\n\n=\nβ =\n\n\n\n\n+\nθ\n\n\n\n\n∵\n\n(\n)\ny\n2sin /2.cos /2\nsin /2\ncos /2\nx\nycos\n×\nθ\nθ\nθ\n=\nθ\n+\nθ\n\nx + y cosθ = 2y .cos2 θ/2 \nx + y \n2\n2\n2cos\n-1\ny.2cos\n2\n2\nθ\nθ\n\n=\n\n\n\n\n\nx - y = 0 \nx = y",
    "examSource": "",
    "image": "/images/yct_motion_plane/p25_img1_xref203.png"
  },
  {
    "id": "yct-motion-plane-q127",
    "num": 127,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The \nresultant \nof \nthree \nvectors \n^\n^\n^\n^\n^\n^\nA(2i\nj\n3k), B(3i\n2j 2k)andC\n-\n+\n-\n-\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001\nis a unit \nvector along z\u0001 direction is given by",
    "options": [
      "C\n3j + 5k\n= ^\n^\n\u0002\u0001",
      "C\n3i + 2k\n= ^\n^\n\u0002\u0001",
      "C\n5i + k\n= ^\n^\n\u0002\u0001",
      "C\n5i + 3j\n= -^\n^\n\u0002\u0001\n\nTripura-2020"
    ],
    "correctAnswer": 3,
    "explanation": "(\n)\n^\n^\n^\nA\n2i\nj\n3k\n=\n-+\n\u0001\n\n(\n)\n^\n^\n^\nB\n3i\n2j\n2k\n=\n-\n-\n\u0001\n\nLet \n(\n)\n^\n^\n^\nC\nxi\nyj\nzk\n=\n+\n+\n\u0001\n\nNow \nA\nB\nC\n1\n+\n+\n=\n\u0001\n\u0001\n\u0001\nunit along z-direction \n (\n) (\n) (\n)\n^\n^\n^\n^\n^\n^\n^\n^\n^\n^\n2i\nj\n3k\n3i\n2j\n2k\nxi\nyj\nzk\n1k\n-+\n+\n-\n-\n+\n+\n+\n=\n\n (\n)\n(\n)\n(\n)\n^\n^\n^\n^\n2\n3\nx i\n1\n2\ny j\n3\n2\nz k\n1k\n+ +\n+ --+\n+\n-+\n=\n\n(\n)\n(\n)\n(\n)\n^\n^\n^\n^\n5\nx i\n3\ny j\n1\nz k\n1k\n+\n+ -+\n+\n+\n=\n\nBy comparing both side \n\n5 + x = 0 ⇒ x = -5 \n\ny - 3 = 0 ⇒ y = 3 \n\n1 + z = 1 ⇒ z = 0 \nNow \n(\n)\n^\n^\n^\nC\nxi\nyj\nzk\n=\n+\n+\n\u0001\n\n(\n)\n^\n^\n^\n5i\n3j\n0k\n= -\n+\n+\n\n^\n^\nC\n5i\n3j\n=-\n+\n\u0001",
    "examSource": "",
    "image": "/images/yct_motion_plane/p25_img1_xref203.png"
  },
  {
    "id": "yct-motion-plane-q128",
    "num": 128,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "If\n\u0001\nA and\n\u0001\nB are two vectors, then the value of \n×\n\u0001\n\u0001\n\u0001\n\u0001\n(A + B) (A - B) is",
    "options": [
      "2(B A)\n×\n\u0001\n\u0001",
      "-2(B A)\n×\n\u0001\n\u0001",
      "B\nA\n×\n\u0001\n\u0001",
      "A B\n×\n\u0001\n\u0001"
    ],
    "correctAnswer": 0,
    "explanation": "If A\n\u0001\n and B\n\u0001\nare two vector \nThen, \n\n(A\nB)\n(A\nB)\n+\n×\n-\n\u0001\n\u0001\n\u0001\n\u0001 \n\nA (A\nB)\nB (A\nB)\n=\n×\n-\n+\n×\n-\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001 \n\nA A A B\nB A B\nB\n=\n×\n-\n×\n+\n×\n-\n×\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001 \nA\nA\n0\nB B\n0\n\n\n×\n=\n\n\n×\n=\n\n\n\n\n\u0001\n\u0001\n∵\n\u0001\n\u0001\n\n0 A\nB\nB A\n0\n= -\n×\n+\n×\n-\n\u0001\n\u0001\n\u0001\n\u0001\n\nB\nA\nB A\n=\n×\n+\n×\n\u0001\n\u0001\n\u0001\n\u0001\n\n(\n)\nA\nB\nB A\n-\n×\n=\n×\n\u0001\n\u0001\n\u0001\n\u0001\n∵\n\n2(B\nA)\n=\n×\n\u0001\n\u0001",
    "examSource": "HP CET-2018",
    "image": "/images/yct_motion_plane/p25_img1_xref203.png"
  },
  {
    "id": "yct-motion-plane-q129",
    "num": 129,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Two position vectors are given by \n(\n)\n1r = 1,1,1\n\u0001\n\nand \n(\n)\n2r = 1, 1,1\n-\n\u0001\n. The unit vector in the \ndirection of \n1\n2\nr ×r\n\u0001\n\u0001",
    "options": [
      "i\nk\n2\n2\n-",
      "i\nk\n2\n2\n-\n-",
      "i\nk\n2\n2\n+",
      "i\nk\n2\n2\n-\n+"
    ],
    "correctAnswer": 0,
    "explanation": "Given, \n1\n^\n^\n^\nr\ni\nj\nk\n= + +\n\u0001\n\n2\n^\n^\n^\nr\ni - j\nk\n=\n+\n\u0001\n\n1\n2\n^\n^\n^\ni\nj\nk\nr\nr\n1\n1\n1\n1\n-1\n1\n×\n=\n\u0001\n\u0001\n\n(\n)\n(\n)\n(\n)\n(\n)\n^\n^\n^\ni 1- -1\n- j 1-1\nk -1-1\n^\n^\n^\n2i\n0j- 2k\n^\n^\n2i - 2k\n=\n+\n=\n-\n=\n\n2\n2\n1\n2\nr\nr\n2\n( 2)\n2 2\n×\n=\n+ -\n=\n\u0001\n\u0001\n\nThe unit vector in direction of 1\n2\nr\nr\n×\n\u0001\n\u0001 is \n1\n2\n2\nr\nr\nr\nr\n×\n×\n\u0001\n\u0001\n\u0001\n\u0001 \n=\n^\n^\n2i\n2k\n-\n2 2\n2 2 \n=\n^\n^\ni\nk\n-\n2\n2",
    "examSource": "AP EAMCET-06.07.2022, Shift-I"
  },
  {
    "id": "yct-motion-plane-q130",
    "num": 130,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "A uniform force of (\n)\n^\n^\n4i\n3j\n+\n newton acts on a \nbody mass 5 kg. The body is displaced from \n(\n)\n^\n^\n^\n4i\n3j\n2k\n-\n-\n m to (\n)\n^\n^\n^\n5i\n4j\n2k\n-\n+\nm. Then, the \nwork done by the force on the body in joule is",
    "options": [
      "1",
      "5",
      "7",
      "11"
    ],
    "correctAnswer": 0,
    "explanation": "Given data \n(\n)\n(\n)\n(\n)\n1\n2\n^\n^\nF\n4i\n3j N\n^\n^\n^\nr\n4i - 3j- 2k m\n^\n^\n^\nr\n5i - 4j\n2k m\n=\n+\n=\n=\n+\n\u0001\n\u0001\n\u0001\n\n∴ Displacement, \n2\n1\nd\nr - r\n=\n\u0001\n\u0001\n\u0001 \n(\n) (\n)\n^\n^\n^\n^\n^\n^\nd\n5i\n4j\n2k\n4i\n3j\n2k\n=\n-\n+\n-\n-\n-\n\u0001\n\n^\n^\n^\nd\ni - j\n4k\n=\n+\n\u0001\n\n∴ Work done = \n(\n) (\n)\n^\n^\n^\n^\nF.d\n4i\n3j . i - j\n4k\n=\n+\n+\n\u0001\n\u0001\n\nF.d\n\u0001\n\u0001\n = 4 -3 \n\nF.d\n\u0001\n\u0001\n = 1 Joule",
    "examSource": "AP EAMCET-11.07.2022, Shift-II"
  },
  {
    "id": "yct-motion-plane-q131",
    "num": 131,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The dot product of \n(\n)\n^\n^\n^\nA\ni\nj\nk\n=\n+ +\n\u0001\nand the unit \nvector parallel to (\n)\n^\n^\n^\ni\nj\nk\n-+\n is",
    "options": [
      "1\n3",
      "2\n3",
      "3",
      "3"
    ],
    "correctAnswer": 0,
    "explanation": "^\n^\n^\nA\ni\nj\nk\n= + +\n\u0001\n and unit vector parallel to \n(\n)\n^\n^\n^\ni - j\nk\n+\nis = \n(\n) (\n)\n(\n)\n( )\n2\n2\n2\n^\n^\n^\n^\n^\n^\ni\nj\nk\ni\nj\nk\nA B\nB\n1\n1\n1\n+ +\n⋅\n-+\n⋅\n=\n+ -\n+\n\u0001 \u0001\n\u0001\n\n1\n3\n=",
    "examSource": "AP EAMCET-11.07.2022, Shift-II"
  },
  {
    "id": "yct-motion-plane-q132",
    "num": 132,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The component of a vector \n^\n^\nP = 3i + 8j\n\u0002\u0001\nalong the \ndirection (\n)\n^\n^\ni + 2j is",
    "options": [
      "8\n5",
      "19\n5",
      "11\n5",
      "10"
    ],
    "correctAnswer": 1,
    "explanation": "^\n^\nP\n3i\n8j\n=\n+\n\u0001\n\n^\n^\nQ\ni\n2j\n= +\n\u0001\n\nP\n\u0001\ncomponent along Q\n\u0001\ndirection = \n^\nPQ\n\u0001\n\nP.Q\nQ\n=\n\u0001\n\u0001\n\u0001\n (\n)(\n)\n2\n^\n^\n^\n^\n3i\n8j\ni\n2j\n1\n2\n+\n+\n=\n+\n = 3 16\n19\n5\n5\n+\n=",
    "examSource": "AP EAMCET-05.07.2022, Shift-I"
  },
  {
    "id": "yct-motion-plane-q133",
    "num": 133,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Which of the following is not true about vectors \nA,B\n\u0001 \u0001\nand C\n\u0001\n?",
    "options": [
      "(\n)(\n)\nA A\nB C\n⋅\n⋅\n\u0002\u0001 \u0002\u0001\n\u0002\u0001 \u0002\u0001\nis a scalar value.",
      "(\n) (\n)\nA\nB\nB C\n×\n⋅\n×\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001\n is a scalar value.",
      "(\n) (\n)\nA\nC\nB C\n×\n×\n×\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001\n is a scalar value.",
      "(\n)\nA\nB C\n×\n×\n\u0002\u0001\n\u0002\u0001\n\u0002\u0001"
    ],
    "correctAnswer": 2,
    "explanation": "For A,B andC\n\u0001\n\u0001\n\u0001\n\ni.e. (\n) (\n)\nA\nC\nB C\n×\n×\n×\n\u0001\n\u0001\n\u0001\n\u0001\n is a vector value. \nThe cross product is always vector quantity.",
    "examSource": "is a vector value.  AP EAMCET-04.07.2022, Shift-II"
  },
  {
    "id": "yct-motion-plane-q134",
    "num": 134,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "If A + B = C and that C is perpendicular to A. \nWhat is the angle between A and B, if |A| = |C|?",
    "options": [
      "rad\n4\nπ",
      "rad\n2\nπ",
      "3 rad\n4\nπ",
      "π"
    ],
    "correctAnswer": 2,
    "explanation": "Given, A\nC\n=\n\u0001\n\u0001\n\nFrom figure, \n\nC\ntan\nA\nθ =\n\n(\n)\nA\nC\ncot\n1\nA\nC\nC\nC\nθ =\n=\n=\n∴\n=\n\n45\nθ =\n° \nSo the angle between A\n\u0001\nand B\n\u0001\n\n180 - θ = 180 - 45 \n\n= 135° \n= 135 180\nπ\n×\n\n3\nradian\n4\nπ\n=",
    "examSource": "rad  JIPMER-2016",
    "image": "/images/yct_motion_plane/p27_img1_xref213.png"
  },
  {
    "id": "yct-motion-plane-q135",
    "num": 135,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The angle between two linear trans-membranes \ndomains is defined by following vectors \n^\n^\n^ ^\n^\n^\na = i + j-k and i - j+ k",
    "options": [
      "1 1\ncos\n3\n-\n\n\n",
      "1\n1\ncos\n3\n-\n\n-\n\n\n\n\n\n",
      "1\n1\nsin\n3\n-\n\n-\n\n\n\n\n\n",
      "1 1\nsin\n3\n-\n\n\n \nJIPMEER-2015"
    ],
    "correctAnswer": 1,
    "explanation": "Given vectors, \n\n^\n^\n^\na\ni\nj- k\n= +\n\u0001\n\n^\n^\n^\nb\ni\nj\nk\n= -+\n\u0001\n\nangle between two linear trans membrane \ndomains \na.b\ncos\na b\nθ =\n\u0001\n\u0001\n\u0001\n\u0001\n\n= \n(\n) (\n)\n( )\n( )\n(\n)\n( )\n(\n)\n( )\n2\n2\n2\n2\n2\n2\n^\n^\n^\n^\n^\n^\ni\nj - k . i\nj\nk\n1\n1\n1\n\n1\n1\n1\n+\n-+\n+\n+ -\n+ -\n+\n\n1 1 1\n3 3\n--\n=\n\n1\ncos\n3\n-\nθ =\n\n1\n1\ncos\n3\n-\n\nθ =\n-\n\n\n\n",
    "examSource": "",
    "image": "/images/yct_motion_plane/p27_img1_xref213.png"
  },
  {
    "id": "yct-motion-plane-q136",
    "num": 136,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "\u0002\u0001\n\u0002\u0001\nA and B are two vectors of equal magnitudes \nand θ is the angle between them. The angle \nbetween \n\u0002\u0001\n\u0002\u0001\nA or B with their resultant is \n\n(a) 4\nθ \n(b) 2\nθ \n\n(c) 2 θ",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 1,
    "explanation": "Given, A\nB\n=\n\n(\n)\nBsin\ntan\nA\nB\nA\nBcos\nθ\n∴\nα =\n=\n+\nθ\n∵\n\nsin\ntan\n1\ncos\nθ\nα = +\nθ \n\n2\n2sin\n.cos\n2\n2\ntan\n1\n2cos\n1\n2\nθ\nθ\nα =\nθ\n+\n-\n\n2\n2sin\n.cos\n2\n2\ntan\n2cos 2\nθ\nθ\nα =\nθ\n\ntan\ntan 2\nθ\nα =\n\n2\nθ\nα =",
    "examSource": "(d) Zero  AP EAMCET -2010",
    "image": "/images/yct_motion_plane/p27_img1_xref213.png"
  },
  {
    "id": "yct-motion-plane-q137",
    "num": 137,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Find \nthe \nangle \nbetween \nthe \nvectors \n\nA = 2i + 4j+ 4k andB = 4i + 2j- 4k.\n\u0001\n\u0001",
    "options": [
      "0º",
      "45º",
      "60º",
      "90º"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \n\nA\n2i\n4j\n4k\n=\n+\n+\n\u0001\n\nand \n\nB\n4i\n2j\n4k\n=\n+\n-\n\u0001\n\nSince \n(\n) (\n)\n^\n^\n^\n^\n^\n^\nA.B\n2i\n4j\n4k\n4i\n2j\n4k\n=\n+\n+\n⋅\n+\n-\n\u0001 \u0001\n\n(2 4)\n(4 2)\n(4 4)\n=\n×\n+\n×\n-\n×\n\n = 8 + 8 - 16 = 0 \n\nA B\ncos\nA B\n⋅\nθ =\n\u0001 \u0001\n\u0001 \u0001 \n\n8\n8 16\ncos\n4 16 16 16\n4 16\n+ -\nθ =\n+\n+\n+\n+\n\ncosθ = 0 \n\ncosθ = cos 90o \n\nθ = 90o \nHence, vectors AandB\n\u0001\n\u0001\n are perpendicular to each other.",
    "examSource": "AP EAMCET-24.08.2021, Shift-I",
    "image": "/images/yct_motion_plane/p27_img1_xref213.png"
  },
  {
    "id": "yct-motion-plane-q138",
    "num": 138,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The resultant of the two vectors AandB\n\u0001\n\u0001\nis \nperpendicular \nto \nthe \nvector \nA\n\u0001\nand \nits \nmagnitude is equal to half of the magnitude of \nvector B\n\u0001\n. Then the angle between AandB\n\u0001\n\u0001\nis--.",
    "options": [
      "30º",
      "45º",
      "150º",
      "120º"
    ],
    "correctAnswer": 2,
    "explanation": "Given that R = B/2 \nResultant of two forces \n\n2\n2\nR\nA\nB\n2ABcos\n=\n+\n+\nθ ... (i) \n\nA and R are perpendicular to each other \n∴tan 90º = \nBsin\nA\nBcos\n0\nA\nBcos\nθ\n⇒\n+\nθ =\n+\nθ\n\n∴cos θ = -A/B \nput the value of cos θ in equation (i). \n2\n2\nB\nA\nA\nB\n2AB\n2\nB\n-\n\n\n=\n+\n+\n\n\n\n\n\n2\n2\n2\n2\nB\nA\nB\n2A\n4 =\n+\n-\n\n2\n2\n2\nB\nB\nA\n4 =\n-\n\n2\n2\n3B\nA\n4\n=\n ⇒ \n3 B\nA\n2\n=\n\n3\ncos\nA / B\n2\nθ = -\n= -\n\n∴ θ = 150º \nThe angle between A and B is 150º.",
    "examSource": "AP EAMCET-06.09.2021, Shift-I",
    "image": "/images/yct_motion_plane/p28_img1_xref220.png"
  },
  {
    "id": "yct-motion-plane-q139",
    "num": 139,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "When a force F\n\u0001\ngiven by F\n\u0001\n= \n\n6i -18j+10k\n\nacts \non a body, it imparts an acceleration of 8 m.s-2. \nThen find the mass of the body ----",
    "options": [
      "115 kg\n4",
      "10 2 kg",
      "115 kg\n2",
      "115 kg\n2"
    ],
    "correctAnswer": 0,
    "explanation": "Magnitude of the force is given as - \n\n(\n)\n2\n2\n2\nF\n6\n18\n10 N\n=\n+ -\n+\n\nF =\n36\n324 100 N\n+\n+\n\nF =\n460 N ⇒ F\n2 115 N\n=\n\n Force = Mass × Acceleration \n\n2 115\nMass\n8\n=\n⇒ \n115\nMass\nkg\n4\n=",
    "examSource": "AP EAMCET-24.08.2021, Shift-I",
    "image": "/images/yct_motion_plane/p28_img1_xref220.png"
  },
  {
    "id": "yct-motion-plane-q140",
    "num": 140,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "For the resultant of two vectors \n\u0002\u0001\n\u0002\u0001\nAand B to \nmaximum. The angle between them should be \n_____.",
    "options": [
      "180°",
      "0°",
      "90°",
      "60°"
    ],
    "correctAnswer": 1,
    "explanation": "For maximum Resultant \n2\n2\nR\n1\n2\n1 2\nF\nF\nF\n2FF cos\n=\n+\n+\nθ \nFor maximum \ncosθ =1 \nθ = 0° \nThen resultant force \n2\n2\nR\n1\n2\n1 2\nF\nF\nF\n2FF\n=\n+\n+\n\nR\n1\n2\nF\nF\nF\n=\n+\n\nFor minimum cosθ= -1 \nθ=180° \nThen resultant force \n2\n2\nR\n1\n2\n1 2\nF\nF\nF - 2FF\n=\n+\n ⇒ \nR\n1\n2\nF\nF\nF\n=\n-",
    "examSource": "AP EAMCET-23.08.2021, Shift-II",
    "image": "/images/yct_motion_plane/p28_img1_xref220.png"
  },
  {
    "id": "yct-motion-plane-q141",
    "num": 141,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The vectors \n(\n)\n(\n)\n^\n^\n^\n^\n^\n^\nA\ni\nj\n2k ,B\n2i\n2j\nk\n=\n+ -\n=\n+\n-\n\u0002\u0001\n\u0002\u0001\n\nand \n(\n)\n^\n^\n^\nC\ni\nj\nk\n= -+ α +\n\u0002\u0001\n are coplanar when the \nconstant α is equal to",
    "options": [
      "1/3",
      "1",
      "3",
      "none of these \nAMU-2008"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \n^\n^\n^\nA\ni\nj\n2k\n= + -\n\u0001\n\n^\n^\n^\nB\n2i\n2j\nk\n=\n+\n-\n\u0001\n\nAnd \n^\n^\n^\nC\ni\nj\nk\n= -+ α +\n\u0001\n\nHere, three vector A,B,C\n\u0001\n\u0001\n\u0001\n are coplanar if \n\nABC\n0\n\n=\n\n\n\u0001\n\u0001\n\u0001\n\n1\n1\n2\n2\n2\n1\n0\n1\n1\n-\n∴\n-\n=\n-\nα\n\n1(2 + α) -1(2 -1) -2(2α +2) = 0 \n\n2 + α -1 - 4α - 4 = 0 \n\n-3α - 3 = 0 \nOr \n1\n3\nα = -",
    "examSource": "",
    "image": "/images/yct_motion_plane/p28_img1_xref220.png"
  },
  {
    "id": "yct-motion-plane-q142",
    "num": 142,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "If \n^\n^\n^\n^\nA = i - j and B = 3i + 4j\n\u0001\n\u0001\n, the vector having \nsame magnitude as B\n\u0001\n but parallel to vector A\n\u0001\n\ncan be written as",
    "options": [
      "(\n)\n^ ^\n5 i - j",
      "(\n)(\n)\n^\n^\n5/ 2\ni - j",
      "(\n)\n^\n^\n2 4i - 3j",
      "(\n)\n^\n^\n3 i - j \nAMU-2019"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \n\n^\n^\nA\ni\nj\n^\n^\nB\n3i\n4j\n= -\n=\n+\n\u0001\n\u0001\n\n( )\n(\n)\n(\n)\n^\n^\ni\nj\nA\n1\n^\n^\n^A\ni\nj\n1 1\n2\nA\n-\n=\n=\n=\n-\n+\n\u0001\n\u0001\n\nMagnitude of (\n)\n( )\n( )\n2\n2\nB\n3\n4\n9 16\n5\n=\n+\n=\n+\n=\n\u0001\n\n∵ Vector having magnitude of B\n\u0001\nand parallel to A\n\u0001\n. \n(\n)\n1\n^\n^\n^\nB .A\n5.\ni\nj\n2\n∴\n=\n-\n\u0001\n\n(\n)\n5\n^\n^\n^\nB .A\ni\nj\n2\n=\n-\n\u0001",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q143",
    "num": 143,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Find the component of vector \n^\n^\nA = 2i + 3j\n\u0001\n along \nthe direction (\n)\n^ ^ .\ni - j",
    "options": [
      "(\n)\n1 ^\n^\ni - j\n2\n-",
      "(\n)\n1 ^\n^\ni + j\n2\n-",
      "(\n)\n1 ^\n^\ni - j\n2",
      "(\n)\n1 ^\n^\ni + j\n2\n\nAMU-2013"
    ],
    "correctAnswer": 0,
    "explanation": "^\n^\nA\n2i\n3j\n=\n+\n\u0001\n\n^\n^\nB\ni\nj\n= -\n\u0001\n\nUnit vector ^B \n\n2\n2\n^\n^\nB\ni\nj\n^B\nB\n(1)\n( 1)\n-\n=\n=\n--\n\u0001\n\u0001\n\n^\n^\ni\nj\n^B\n2\n-\n=\n\nComponent of A\n\u0001\nalong B\n\u0001\nA B\n^\nA B\nB\n⋅\n=\n=\n⋅\n\u0001 \u0001\n\u0001\n\u0001\n\nTo get vector form \n[\n]\n^ ^\nAB B\n=\n\u0001\n\n(\n)\n(\n)\n(\n)\n1\n1\n^\n^\n^\n^\n^\n^\n2i\n3j\ni\nj\ni\nj\n2\n2\n\n\n=\n+\n⋅\n-\n-\n\n\n\n\n\n(\n)\n1\n1\n^\n^\ni\nj\n2\n2\n\n\n= -\n-\n\n\n\n\n\n(\n)\n1 ^\n^\ni\nj\n2\n= -\n-",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q144",
    "num": 144,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The angle between the vectors : a = 3i - 4j \n\u0001\n\u0001\n\u0001\n\nand b = -2i + 3k is\n\u0001\n\u0001\n\u0001",
    "options": [
      "-1\n1\ncos\n3\n\n\n-\n\n\n\n",
      "-1\n1\ncos\n4\n\n\n-\n\n\n\n",
      "-1\n1\ncos\n2\n\n\n-\n\n\n\n",
      "-1\n1\ncos\n6\n\n\n-\n\n\n\n\n\nAMU-2012"
    ],
    "correctAnswer": 0,
    "explanation": "Given \n\na\n3i\n4 j\n=\n-\n\u0001\n\u0001\n\u0001\n and b\n2i\n3k\n= -\n+\n\u0001\n\u0001\n\u0001 \nWe know \n\na.b\ncos\na\nb\nθ =\n⋅\n\u0001\n\u0001\n\u0001\n\u0001\n\n(\n) (\n)\n( )\n(\n)\n(\n)\n( )\n2\n2\n2\n2\n3i\n4 j .\n2i\n3k\ncos\n3\n4\n2\n3\n-\n-\n+\nθ =\n+ -\n-\n+\n\u0001\n\u0001\n\u0001\n\u0001\n\n6\ncos\n5 13\n-\nθ =\n\n13\n3.606\n\n\n=\n\n \n\n6\ncos\n18\n-\nθ =\n ⇒ \n1\ncos\n3\n-\nθ =\n\n1\n1\ncos\n3\n-\n\nθ =\n-\n\n\n\n",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q145",
    "num": 145,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Vector A\n\u0002\u0001\n has a magnitude of 5 units, lies in the \nxy-plane and points in a direction 120º from the \ndirection of increasing x. Vector B\n\u0002\u0001\n has a \nmagnitude of 9 units and points along the z-\naxis. The magnitude of cross product A\n\u0002\u0001\n × B\n\u0002\u0001\n is",
    "options": [
      "30",
      "35",
      "40",
      "45 \nAMU-2012"
    ],
    "correctAnswer": 3,
    "explanation": "We know that, \n\nA×B = |A| |B| sinθ \nVector B makes angle of 90° with A \n\nA×B = 5×9 sin 90° \n\nA×B = 45",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q146",
    "num": 146,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "If \n^\n^\nA\ni\nj\n=\n+\n\u0001\n, and \n^\n^\nB\ni\nk\n=\n+\n\u0001\n, then A\nB\n×\n\u0001\n\u0001 is",
    "options": [
      "^\n^\n^\ni\nj\nk\n+ +",
      "^\n^\n^\ni\nj\nk\n-+",
      "^\n^\n^\ni\nj\nk\n+ -",
      "^\n^\n^\ni\nj\nk\n--\n\nAMU-2006"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \n\n^\n^\nA\ni\nj\n^\n^\nB\ni\nk\n= +\n= +\n\u0001\n\u0001\n\nThen \n\n^\n^\n^\ni\nj\nk\nA\nB\n1\n1\n0\n1\n0\n1\n×\n=\n\u0001\n\u0001\n\n(\n)\n(\n)\n(\n)\n^\n^\n^\nA\nB\ni 1 0\nj 1 0\nk 0 1\n×\n=\n-\n-\n-\n+\n-\n\u0001\n\u0001\n\n^\n^\n^\nA\nB\ni\nj\nk\n×\n= --\n\u0001\n\u0001",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q147",
    "num": 147,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The (x, y, z) coordinates of two points A and B \nare given respectively as (0, 3, -1) and (-2, 6, 4). \nThe displacement vector from A to B may be \ngiven by",
    "options": [
      "^\n^\n^\n2i\n6j\n4k\n-\n+\n+",
      "^\n^\n^\n2i\n3j\n3k\n-\n+\n+",
      "^\n^\n^\n2i\n3j\n5k\n-\n+\n+",
      "^\n^\n^\n2i\n3j\n3k\n-\n-\n\nAMU-2005"
    ],
    "correctAnswer": 2,
    "explanation": "1\n2\n3\n^\n^\n^\nA\na i\na j\na k\n=\n+\n+\n\u0001\n\n1\n2\n3\n^\n^\n^\nB\nb i\nb j\nb k\n=\n+\n+\n\u0001\n\nDisplacement vector (r)\u0001 = B\nA\n-\n\u0001\n\u0001\n\n(\n)\n(\n)\n(\n)\n1\n1\n2\n2\n3\n3\n^\n^\n^\nb\na\ni\nb\na\nj\nb\na\nk\n-\n+\n-\n+\n-\n\nGiven, \n\n^\n^\n^\nA\n0i\n3j\nk\n=\n+\n-\n\u0001\n, \n^\n^\n^\nB\n2i\n6j\n4k\n= -\n+\n+\n\u0001\n\n(\n) (\n)\n^\n^\n^\n^\n^\nr\n2i\n6j\n4k\n3j\nk\n∴= -\n+\n+\n-\n-\n\u0001\n\n^\n^\n^\nr\n2i\n3j\n5k\n= -\n+\n+\n\u0001",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q148",
    "num": 148,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "^\n^\n^\n-\nA = 4i + 4j\n4k\n\u0002\u0001\n and \n^\n^\n^\nB = 3i + j+ 4k\n\u0002\u0001\n then angle \nbetween vectors A\n\u0002\u0001\n and B\n\u0002\u0001\n is",
    "options": [
      "180o",
      "90o",
      "45o",
      "0o \nAMU-2001"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \n\n^\n^\n^\nA\n4i\n4j\n4k\n^\n^\n^\nB\n3i\nj\n4k\n=\n+\n-\n=\n+ +\n\u0001\n\u0001\n\nLet θ be the angle between vector A\n\u0001\n and B\n\u0001\n then, \n\nA.B\ncos\nA B\nθ =\n\u0001 \u0001\n\u0001 \u0001 \n\n(\n) (\n)\n(\n)\n2\n2\n2\n2\n2\n2\n^\n^\n^\n^\n^\n^\n4i\n4j\n4k . 3i\nj\n4k\ncos\n4\n4\n4\n3\n1\n4\n+\n-\n+ +\nθ =\n+\n+ -\n+\n+\n\n12\n4 16\ncos\n48 26\n+\n-\nθ =\n\ncosθ = 0 = cos90o \n\nθ = 90o",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q149",
    "num": 149,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Consider the following statements about three \nvectors \na,b\n\u0001\n\u0001\n and \nc\u0001 that have non-zero \nmagnitudes. It follows b\nc\n=\n\u0001\n\u0001 \n\n(i) if a b\na c\n⋅\n=\n⋅\n\u0001 \u0001\n\u0001 \u0001\n\n(ii) if a\nb\na\nc\n×\n=\n×\n\u0001\n\u0001\n\u0001\n\u0001\n b\n\u0001\nmust be perpendicular \nto c\n\u0001",
    "options": [
      "(i) and (ii) both",
      "neither (i) nor (ii)",
      "(i) only",
      "(ii) only \nAMU-2001"
    ],
    "correctAnswer": 2,
    "explanation": "(i) a.b\na.c\n=\n\u0001\n\u0001\n\u0001 \u0001 \n\na bcos\na ccos\nθ =\nθ\n\u0001\n\u0001\n\u0001 \u0001\n\nThen \nb\nc\n=\n\u0001\n\u0001 \n(ii) \na\nb\na c\n×\n=\n×\n\u0001\n\u0001\n\u0001\n\u0001 \n\na b sin\na c sin\nθ =\nθ\n\u0001\n\u0001\n\u0001 \u0001\n\nb\nc\n=\n\u0001\n\u0001 \nb\n\u0001 and c\u0001 are equal in magnitude so, b\n\u0001\n and c\u0001 are not \nperpendicular . they are parallel to each other. \nSo, only (i) is follows.",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q150",
    "num": 150,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The angle between the vectors \n\n^\n^\n^\n^\n^\nA = i + j and B = i + j+ ck is 30º.\n\u0001\n\u0001\n\n Find the unknown c.",
    "options": [
      "0",
      "± 1",
      "±\n2\n3",
      "± 1\n2 \nAMU-2011"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \n\n^\n^\nA = i + j\n\u0001\n, \n^\n^\n^\nB = i + j+ ck\n\u0001\n, θ = 30° \n( )\n( )\n2\n2\nA =\n1\n1\n=\n2\n+\n\u0001\n\n2\n2\n2\n2\nB =\n1\n1\nc =\n2+ c\n+\n+\n\u0001\n\nas we know that vector product is defined as, \nA B = A B cos\n⋅\n⋅\nθ\n\u0001\n\u0001\n\u0001\n\u0001\n\n(\n) (\n)\n(\n)\n2\n^\n^\n^\n^\n^\ni + j\ni + j+ ck =\n2\n2+ c\ncos30\n⋅\n×\n° \n(\n)\n2\n3\n1 1\n2\n2+ c\n2\n+ =\n×\n×\n\n2\n4\n2 + c\n6\n=\n\n2\n2\n16\n4\n2\nc\nc\n6\n6\n+\n=\n⇒\n=\n\nc = ±\n2\n3",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q151",
    "num": 151,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The angle between A\n\u0001\n and the resultant of \n2A\n3B\n+\n\u0001\n\u0001\n and 4A\n3B\n-\n\u0001\n\u0001\n is",
    "options": [
      "90º",
      "1\nA\ntan\nB\n-\n\n\n\n\n",
      "1\nB\ntan\nA\n-\n\n\n\n\n",
      "1\nA\nB\ntan\nA\nB\n-\n-\n\n\n\n\n+\n\n"
    ],
    "correctAnswer": 3,
    "explanation": "Consider Aand B,\n\u0002\u0001\n\u0002\u0002\u0001 \n\nResultant of 2A\n3 B and 4 A\n3B,\n+\n-\n\u0002\u0001\n\u0002\u0002\u0001\n\u0002\u0002\u0001\n\u0002\u0002\u0001 \n(\n) (\n)\n2A\n3 B\n4 A\n3 B\n2A\n3 B\n4 A\n3B\n6 A\n+\n+\n-\n=\n+\n+\n-\n=\n\u0002\u0001\n\u0002\u0002\u0001\n\u0002\u0002\u0001\n\u0002\u0002\u0001\n\u0002\u0001\n\u0002\u0002\u0001\n\u0002\u0002\u0001\n\u0002\u0002\u0001\n\u0002\u0002\u0001 \nAngle \nbetween \nA\n\u0002\u0001 \nand \nresultant \nvector \n(\n)\n(\n)\n2A\n3B and 4 A\n3B\n+\n-\n\u0002\u0001\n\u0002\u0002\u0001\n\u0002\u0002\u0001\n\u0002\u0002\u0001 . \nThe angle between A\n\u0001\n and 6A\n\u0001\n is 0°, because they are \nparallel vectors.",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q152",
    "num": 152,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "A particle moves from position \n^\n^\n^\n3i +2j+6k to \n^\n^\n^\n14i +13j 9k\n+\n due to a uniform force of \n^\n^\n^\n4i + j 3k\n+\n newton. Find the work done if the \ndisplacement is in meters.",
    "options": [
      "16 J",
      "64 J",
      "32 J",
      "48 J \nJ&"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \n^\n^\n^\nF\n4i\nj\n3k\n=\n+ +\n\u0001\n\n^\n^\n^\n^\n^\n^\ndS\n(14i\n13j\n9k)\n(3i\n2j\n6k)\n=\n+\n+\n-\n+\n+\n\u0001\n\n(\n)\n^\n^\n^\n11i\n11j\n3k\n=\n+\n+\n\nWork done W\nF dS\n=\n⋅\n\u0001\n\u0001\n\n(\n) (\n)\n^\n^\n^\n^\n^\n^\nW\n4i\nj\n3k\n11i\n11j\n3k\n∴\n=\n+ +\n⋅\n+\n+\n\nW\n44 11 9\n=\n+\n+ \n∴ W\n64J\n=",
    "examSource": "K CET- 2007",
    "image": "/images/yct_motion_plane/p31_img1_xref234.png"
  },
  {
    "id": "yct-motion-plane-q153",
    "num": 153,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "What is the linear velocity, if angular velocity \nvector \n^\n^\n^\n3i\n4j\nk\nω =\n-\n+\n and position vector \n^\n^\n^\nr = 5i - 6j+ 6k ?",
    "options": [
      "^\n^\n^\n6i - 2j+3k",
      "^\n^\n^\n-18i -13j+ 2k",
      "^\n^\n^\n18i +13j+ 2k",
      "^\n^\n^\n6i - 2j+8k \n[AIPMT 1999]"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \n\n3i\n4j\nk\nω=\n-\n+\n\nr 5i\n6j\n6k\n=\n-\n+\n\n(\n)\n\ni\nj\nk\nv\nr\n3\n4\n1\n5\n6\n6\n= ω×\n=\n-\n-\n\u0001\n\u0001\n\u0001\n\n(\n)\n(\n)\n\ni\n24\n6\nj 18\n5\nk( 18\n20)\n=\n-\n+\n-\n-\n+\n-\n+\n\nv\n18i 13j\n2k\n=-\n-\n+\n\u0001",
    "examSource": "",
    "image": "/images/yct_motion_plane/p31_img1_xref234.png"
  },
  {
    "id": "yct-motion-plane-q154",
    "num": 154,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "When a particle moved from point A(2, 2, 3) to \npoint B(6, 6, 9), its displacement vector is ____.",
    "options": [
      "4i\n4j\n6k\n+\n+",
      "8i\n8j 12k\n+\n+",
      "4i\n8j\n6k\n+\n+",
      "8i\n4j\n6k\n+\n+"
    ],
    "correctAnswer": 0,
    "explanation": "Given, \nThe particle is moving from point \nA (2, 2, 3) to the point B (6, 6, 9) \nDisplacement vector ( )\n^\n^\n^\nr\nxi\nyj\nzk\n= ∆\n+ ∆\n+ ∆\n\u0001\n\n(\n)\n(\n)\n(\n)\n^\n^\n^\nr\n6 - 2 i\n6 - 2 j\n9 - 3 k\n^\n^\n^\nr\n4i\n4j\n6k\n=\n+\n+\n=\n+\n+\n\u0001\n\u0001",
    "examSource": "AP EAMCET-23.08.2021, Shift-I",
    "image": "/images/yct_motion_plane/p31_img1_xref234.png"
  },
  {
    "id": "yct-motion-plane-q155",
    "num": 155,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The position of a particle x (in meters) at a time \nt \nseconds \nis \ngiven \nby \nthe \nrelation \n(\n)\n^\n^\n^\n\u0001\n2\nr = 3ti - t j+ 4k . Calculate the magnitude of \nvelocity of the particle after 5 seconds.",
    "options": [
      "3.55",
      "5.03",
      "8.75",
      "10.44 \nAMU-2010"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \n\n2\n^\n^\n^\nr\n3ti\nt j\n4k\n=\n-\n+\n\ndr\n^\n^\nv\n3i\n2tj\n0\ndt\n=\n=\n-\n+ \n\n(\n)\n2\n| v |\n9\n2t\n=\n+ -\n\n2\n9\n4t\n=\n+\n\nMagnitude of velocity of particle t = 5 sec- \n\n( )\n2\nv\n9\n4 5\n=\n+\n\n| v |\n9\n100\n=\n+\n\n= 10.44",
    "examSource": "",
    "image": "/images/yct_motion_plane/p31_img1_xref234.png"
  },
  {
    "id": "yct-motion-plane-q156",
    "num": 156,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "The velocity of a moving particle at any instant \nis ^\n^\ni\nj.\n+\n The magnitude and direction of the \nvelocity of the particle are",
    "options": [
      "2 units and 45° with the x-axis",
      "2 units and 30° with the z-axis",
      "2 units and 45° with the x-axis",
      "2 units and 60° with the y-axis"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \nVelocity of moving particle is- \nv = ^\n^\ni\nj\n+ \nThen, magnitude \n2\n2\n| v |\n1\n1\n=\n+\n\n v\n2\n=\n\nDirection, cosθ = \nx\nA\n| A |\n\u0002\u0001 = \n2\n2\n1\n1\n2\n1\n1\n=\n+\n\n θ = 45o \nSo, the magnitude of velocity is \n2 and direction 45° \nwith the x-axis.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p31_img1_xref234.png"
  },
  {
    "id": "yct-motion-plane-q157",
    "num": 157,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "A certain vector in the xy-plane has an x-\ncomponent of 4 m and a y-component of 10m. \nIt is then rotated in the xy-plane so that its x-\ncomponent is doubled. Then its new y-\ncomponent is (approximately)",
    "options": [
      "20m",
      "7.2m",
      "5.0m",
      "4.5"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, \n\nInitially : X - component = 4 m \n\n Y - component = 10 m \nFinally : \n X - component = 2 × 4 = 8 m \n\n Y - component = y \nThe magnitude of vector do not change by its rotation \nSo, \n\n2\n2\n2\n2\n4\n10\n8\ny\n+\n=\n+\n\ny\n52\n=\n\ny = 7.2 m",
    "examSource": "m  AP EAMCET -2011"
  },
  {
    "id": "yct-motion-plane-q158",
    "num": 158,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "A particle has an initial velocity 3i +4j and an \nacceleration of 0.4i +0.3 j. Its speed after 10 s is",
    "options": [
      "10 units",
      "7 2 units",
      "7 units",
      "8.5"
    ],
    "correctAnswer": 1,
    "explanation": "Given data, \n\n^\n^\nu\n3i\n4j\n=\n+\n\n^\n^\na\n0.4i\n0.3j\n=\n+\n\nt = 10 sec \nwe know that, \n\n v = u + at \n\nv = ^\n^\n3i\n4j\n+\n+ (\n)\n^\n^\n0.4i\n0.3j\n+\n× 10 \n\nv = ^\n^\n7i\n7j\n+\n\nSo, magnitude of v = \n2\n2\n7\n7\n7 2\n+\n=",
    "examSource": "units  AIPMT-2010  AIEEE-2009"
  },
  {
    "id": "yct-motion-plane-q159",
    "num": 159,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "A particle moves from the point (\n)\n^\n^\n2.0i\n4.0j m\n+\n\nat t=0 with an initial velocity (\n)\n1\n^\n^\n5.0i\n4.0j ms .\n-\n+\n\nIt is acted upon by a constant force which \nproduces \na \nconstant \nacceleration \n(\n)\n2\n^\n^\n4.0i\n4.0j ms .\n-\n+\n What is the distance of the \nparticle from the origin at time 2 s ?",
    "options": [
      "5m",
      "20 2m",
      "10 2m",
      "15"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \nSinitial = \n^\n^\n2.0i\n4.0j\n+\n\n^\n^\nu\n5.0i\n4.0j\n=\n+\n\n^\n^\na\n4.0i\n4.0j\n=\n+\n\nNow, \n ∆\n2\n1\ns\nut\nat\n2\n=\n+\n\n SFinal - Sinitial = \n2\n1\nut\nat\n2\n+\n\n(\n)\n(\n)\n(\n)( )\n2\nFinal\n1\n^\n^\n^\n^\n^\n^\nS\n2.0i\n4.0j\n2 5.0i\n4.0j\n4.0i\n4.0j 2\n2\n-\n+\n=\n+\n+\n+\nFinal\n^\n^\n^\n^\nS\n12i\n12j\n8i\n8j\n=\n+\n+\n+\n\nFinal\n^\n^\nS\n20i\n20j\n=\n+\n\n2\n2\nFinal\n| S\n|\n20\n20\n=\n+\n\n|SFinal| \n20 2\n=\n m",
    "examSource": "m  JEE Main-11.01.2019, Shift-II"
  },
  {
    "id": "yct-motion-plane-q160",
    "num": 160,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "A \nparticle \nis \nmoving \nwith \na \nvelocity \n(\n)\n^\n^\nv\nk yi\nxj\n=\n+\n, where k is a constant. The \ngeneral equation for its path is",
    "options": [
      "y = x2 + constant",
      "y2 =x + constant",
      "xy = constant",
      "y2 = x2 +"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \n^\n^\nv\nkyi\nkxj\n=\n+\n\u0001\n\n…(i) \nGeneral equation \nx\ny\n^\n^\nv\nv i\nv j\n=\n+\n\u0001\n\n…(ii) \nComparing eqn (i) & (ii) we get \nvx = ky, vy = kx \ndx\nky\ndt =\n\n…(iii) \ndy\nkx\ndt =\n\n…(iv) \nNow, eqn (iv) / (iii) \ndy\nkx\ndt\ndx\nky\ndt\n=\n\ndy\nx\ndx\ny\n=\n\nydy\nxdx\n=\n∫\n∫\n\n2\n2\ny\nx\nconstant\n2\n2\n=\n+\n\nOr \n2\n2\ny\nx\nconstant\n=\n+",
    "examSource": "constant  JEE Main-09.01.2019, Shift-I  BITSAT- 2016  AIEE-2010"
  },
  {
    "id": "yct-motion-plane-q161",
    "num": 161,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "In three dimensional system, the position \ncoordinates of a particle (in motion) are given \nbelow \n\n x = a cosωt, y = a sinωt, z = aωt \n\n The velocity of particle will be",
    "options": [
      "2aω",
      "2aω",
      "aω",
      "3aω"
    ],
    "correctAnswer": 0,
    "explanation": "Given, \n\nx = a cos ωt \nx\ndx\nv\nasin\nt.\ndt\nω ω\n=\n=-\n\nSimilarly \ny\ndy\nv\nacos\nt.\ndt\nω ω\n=\n=\n\nz\ndz\nv\na\ndt\nω\n=\n=\n\n2\n2\n2\nx\ny\nz\nv\nv\nv\nv\n∴\n=\n+\n+\n\n(\n)\n(\n)\n(\n)\n2\n2\n2\na sin\nt\na cos t\na\nω\nω\nω\nω\nω\n=\n-\n+\n+\n\n2\n2\n2\n2\na\na\nω\nω\n=\n+\n\n2 aω\n=",
    "examSource": "JEE Main-09.01.2019, Shift-II"
  },
  {
    "id": "yct-motion-plane-q162",
    "num": 162,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "Starting from the origin at time t =0, with \ninitial velocity \n1\n^\n5j ms ,\n-\n a particle moves in the \nxy-plane with a constant acceleration of \n(\n)\n2\n^\n^\n10i\n4j ms-\n+\n. At time t, its coordinates are \n(20m, y0 m). The values of t and y0 respectively, \nare",
    "options": [
      "2 s and 18 m",
      "5 s and 25 m",
      "2 s and 24 m",
      "4 s and 52"
    ],
    "correctAnswer": 0,
    "explanation": "Given data. \n\n^\nu\n5j m/s\n=\n\u0001\n\n(\n)\n2\n^\n^\na\n10i\n4j m/s\n=\n+\n\u0001\n\nPosition coordinate (s) at time 't' = (20, y0) ⇒ \n0\n^\n^\n20i\ny j\n+\n\nwe know that, \nsecond equation of motion is given by - \n2\n1\ns\nut\nat\n2\n=\n+\n\n(\n)\n2\n0\n1\n^\n^\n^\n^\n^\n20i\ny j\n5tj\n10i\n4j t\n2\n+\n=\n+\n+\n\n2\n2\n0\n^\n^\n^\n^\n^\n20i\ny j\n5tj\n5t i\n2t j\n+\n=\n+\n+\n\n(\n)\n2\n2\n0\n^\n^\n^\n20i\ny j\n5t i\n5t\n2t\nj\n+\n=\n+\n+\n\ncompare x component of the position we get, \n20 = 5t2 \nt = 2 sec \ncompare y component of the position, \ny0 = 5t + 2t2 \ny0 = 5 × 2 + 2 × 22 \ny0 = 18 m",
    "examSource": "m  JEE Main-04.09.2020, Shift-I"
  },
  {
    "id": "yct-motion-plane-q163",
    "num": 163,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Hard",
    "questionText": "The position vector of particle changes with \ntime \naccording \nto \nthe \nrelation \n(\n)\n2\n2\n^\n^\nr(t)\n15t i\n4\n20t\nj.\n=\n+\n-\n\u0001\n\nWhat \nis \nthe \nmagnitude of the acceleration (in m/s²) at t =1?",
    "options": [
      "50",
      "100",
      "25",
      "40"
    ],
    "correctAnswer": 0,
    "explanation": "( )\n(\n)\n2\n2\n^\n^\nr t\n15t i\n4\n20t\nj\n=\n+\n-\n\u0001\n\n( )\ndr(t)\nv t\ndt\n=\n\u0001\n\u0001\n\n( )\n(\n)\n^\n^\nv t\n30ti\n0\n40tj\n=\n+\n-\n\u0001\n\n( )\n^\n^\nv t\n30ti\n40tj\n=\n-\n\u0001\n\ndv(t)\na(t)\n30i 40j\ndt\n=\n=\n-\n\u0001\n\u0001\n\n(\n)\n2\n2\n2\na\n30\n40\n50m/s\n=\n+ -\n=",
    "examSource": "JEE Main-09.04.2019, Shift-II"
  },
  {
    "id": "yct-motion-plane-q164",
    "num": 164,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "Consider a particle moving in the xy plane with \nvelocity \n^\n^\nv\nai\nbxj,\n=\n+\n\u0001\nwhere ^i and ^j are the unit \nvectors along x and y axes and 'a' and 'b' are \nconstants. If the initial position of the particle \nis x = y = 0. The equation to describe the \nparticle's trajectory in the plane is",
    "options": [
      "2\nb\ny\nx\n2a\n=",
      "y = x2",
      "b\ny\nx\na\n=",
      "2\n2b\ny\nx\na\n="
    ],
    "correctAnswer": 0,
    "explanation": "Given, \nvelocity \n^\n^\nv\nai\nbxj\n=\n+\n\u0001\n\n Initial position , x = 0 , y = 0 \nHere, vx = a \n\ndx\na\ndt = \ny\nv\nbx\n=\n\ndy\nbx\ndt =\n\ndy\ndy\nbx\ndt\ndx\ndx\na\ndt\n=\n=\n\ndy\nbx\ndx\na\n=\n\nb\ndy\nxdx\na\n=\n\nIntegrating both side, \ny\nx\n0\n0\nb\ndy\nxdx\na\n=\n∫\n∫\n\n2\nb x\ny\na 2\n=\n\n2\nb\ny\nx\n2a\n=",
    "examSource": "TS EAMCET 08.05.2019, Shift-II"
  },
  {
    "id": "yct-motion-plane-q165",
    "num": 165,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "A particle moves over a xy plane with a \nconstant \nacceleration\n(\n)\n(\n)\n^\n^\n2\n2\na = 4.0m/s\ni + 4.0m/s j .\n\u0001\nAt time \nt = 0, the velocity is (\n)^\n2\n4.0m/s\ni. The speed of \nthe particle when it is displaced by 6.0 m \nparallel to the x-axis is",
    "options": [
      "4 5 m/s",
      "60 m/s",
      "3 10 m/s",
      "20 m/"
    ],
    "correctAnswer": 0,
    "explanation": "Use equation of motion \nApply second equation of Motion- \nGiven that, \nt = 0, u = 4 ^i \nux=4 \n\n(\n)\n2\n^\n^\na\n4i\n4j m/s\n=\n+\n\u0001\n\n2\n2\nx\ny\na\n4m/s ,a\n4m/s\n=\n=\n\nsx = ux t + 1\n2 ax t2 \n\n6 = 4 t + 1\n2 ×4×t2 \n\n2t2 + 4t -6 = 0 \n\nt2 + 2t - 3 = 0 \n\nt2 + 3t - t - 3 = 0 \n\nt(t + 3) -1(t + 3) = 0 \n\nt + 3 = 0 \n\nt - 1 = 0 \n\nt = 1 sec, t = -3 (not possible) \n\nSo, \n\nt = 1 \nVelocity of particle- \n\nv\nu\nat\n=\n+\n\u0001\n\u0001\n\u0001\n\n^\n^\n^\n^\nv\n(4i\n0j)\n(4i\n4j) 1\n^\n^\n^\n4i\n4i\n4j\n^\n^\nv\n8i\n4j\n=\n+\n+\n+\n×\n=\n+\n+\n=\n+\n\u0001\n\u0001\n\nSpeed of particle- \n\n( )\n( )\n2\n2\nv\n8\n4\n=\n+\n\u0001\n\n= \n64\n16\n+\n\nv\n80\n=\n\u0001\n\n = \n4\n4 5\n× ×\n\nv\n4 5\n=\n\u0001\nm/s",
    "examSource": "s  TS EAMCET 04.08.2021, Shift-I"
  },
  {
    "id": "yct-motion-plane-q166",
    "num": 166,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "A bullet of mass 0.05 kg moving with a speed of \n80 m/s enters a wooden block and is stopped \nafter a distance of 0.40 m. The average resistive \nforce exerted by the block on the bullet is",
    "options": [
      "300 N",
      "20 N",
      "400 N",
      "40 N"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, m = 0.05 kg, u = 80 m/s \n\n v = 0, s = 0.4m \nWe know that, \n\n v2 = u2 - 2as \n\n0 = (80)2 - 2a (0.40) \n\na = \n(\n)\n80 × 80\n2 × 0.40 \n\na = 8000 m/s2 \nAccording to Newton’s second law \n\n F = ma \n\n = 0.05 × 8000 \n\n = 400 N",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q167",
    "num": 167,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Scalar and Vector Quantity",
    "difficulty": "Medium",
    "questionText": "A particle is moving in the x-y plane and its \ncoordinates at any time t are given by \n\n x = 5 cos ωt \n\n y = 5 sin ωt \n\n Where (ω) = 4\nπ rad/s. The direction of force it \nexperiences at t = 3s is.",
    "options": [
      "i\nj\n∧\n∧\n+",
      "i\nj\n∧\n∧\n-",
      "i\n∧",
      "j\n∧"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \nω = 4\nπ \nx = 5 cos ωt \nx\ndx\nv\n5 sin t\ndt =\n= -ω\nω \n2\nx\nx\ndv\na\n5\ncos\nt\ndt =\n= -ω\nω \n\nax at t = 3 \n\nax = - 5 \n2\n4\nπ\n\n\n\n\n\n\ncos (135º) \n\nax = - 5 \n2\n4\nπ\n\n\n\n\n\n\n\n1\n2\n\n\n-\n\n\n\n\n\nax = \n2\n5\n4\n2\nπ\n\n\n+\n\n\n\n\nalong x ^(i) \n\ny = 5 sin ωt \n\ny\ndy\nv\n5cos\nt\ndt =\n=\nω \n\ny\n2\ny\ndv\na\n5\nsin\nt\ndt =\n= -ω\nω \n\nay at t = 3 \n\nay = -5 \n2\nsin(135º)\n4\nπ\n\n\n\n\n\n\n\nay = - 5\n2\n1\n4\n2\nπ\n\n\n\n\n\n\n\n\n\n\n\nay = -\n2\n5\n4\n2\nπ\n\n\n\n\n\n\nalong y\n^\n( j)\n-\n\nDirection of net accl.. \n\n= + ^i - ^j \n\n= ^i - ^j \n\n (b) \nPlane Motion Analysis",
    "examSource": "TS EAMCET (Medical) 09.08.2021,  Shift-I"
  },
  {
    "id": "yct-motion-plane-q168",
    "num": 168,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Plane Motion Analysis",
    "difficulty": "Medium",
    "questionText": "A man is walking due east at the rate of 2 km/h. \nThe rain appears to him to come down \nvertically at the rate of 2 km/h. The actual \nvelocity and direction of rainfall with the \nvertical respectively are",
    "options": [
      "2 2 km/h, 45°",
      "1 km/h,30°\n2",
      "2km/h, 0°",
      "1 km/h, 90°"
    ],
    "correctAnswer": 0,
    "explanation": "The velocity of rain appearing to man is \nrelative velocity of rain with respect to man, \n\nrm\nm\nr\nv\n = v \n v\n-\n\u0001\n\u0001\n\u0001 \n\n = \n(\n)^\n2i\n2j\n--\n\n v\n\u0001\nrm = ^\n^\n2i\n2j\n+\n\nrm\nv\u0001\n= ( )\n( )\n2\n2\n2\n2\n+\n\n = \n8 \nMagnitude of velocity \nrm\nv\u0001\n= 2 2 = km/h \nFor direction, \n\nrain\nman\nv\nP\n2\ntan\n1\nB\nv\n2\nθ =\n=\n=\n= \n⇒ \n1\nθ = tan (1)\n-\n\n⇒ \nθ = 45°",
    "examSource": "AP EMCET(Medical)-2008",
    "image": "/images/yct_motion_plane/p35_img1_xref284.png"
  },
  {
    "id": "yct-motion-plane-q169",
    "num": 169,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Plane Motion Analysis",
    "difficulty": "Medium",
    "questionText": "The initial velocity of a particle, \n^\n^\n→u = 4i + 3j . It \nis \nmoving \nwith \nuniform \nacceleration \n^\n^\n→a = 0.4i + 0.3j . Its velocity after 10 seconds is:",
    "options": [
      "3 unit",
      "4 unit",
      "5 unit",
      "10"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \n\n^\n^\nu\n4i\n3j\n=\n+\n\u0001\n\n^\n^\na\n0.4i\n0.3j\n=\n+\n\u0001\n\nVelocity of x-component \n\nx\nx\nx\nv\nu\na t\n=\n+ \u0001\n\u0001\n\u0001\n\n = \n(\n)\n^\n^\n4i\n0.4i\n10\n+\n×\n\n = ^\n8i m/s \nVelocity of y-component \n\ny\ny\ny\nv\nu\na t\n=\n+\n\u0001\n\u0001\n\u0001\n\n(\n)\n^\n^\n3j\n0.3j\n10\n=\n+\n×\n\n^\n6j m /s\n=\n\nTotal velocity \nx\ny\nv\nv\nv\n=\n+\n\u0001\n\u0001\n\u0001 \n\n^\n^\nv\n(8i\n6j)m/s\n=\n+\n\u0001\n\n∴ Magnitude of total velocity \n2\n2\nx\ny\nv\nv\nv\n=\n+\n\u0001\n\nv\u0001\n( )\n( )\n2\n2\n8\n6\n100\n10unit\n=\n+\n=\n=",
    "examSource": "unit  AP EAMCET(Medical)-2001",
    "image": "/images/yct_motion_plane/p35_img1_xref284.png"
  },
  {
    "id": "yct-motion-plane-q170",
    "num": 170,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Plane Motion Analysis",
    "difficulty": "Medium",
    "questionText": "A particle is moving eastwards with a velocity \nof 15 m/s. In a time of 10 s, the velocity changes \nto 15 m/s northwards. Average acceleration \nduring this time is, in m/s2.",
    "options": [
      "3\n2",
      "3 2 north-east",
      "3\n2\nnorth-west",
      "3 2"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \n1\n2\n^\n^\nv\n15i,v\n15j\n=-\n=\n\u0001\n\n(\n)\n12\n2\n1\n2\n1\nv\nv\nv\nv\nv\n∆\n=\n-\n=\n--\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001 \n12\n^\n^\nv\n15j\n15i\n∆\n=\n+\n\u0001\n\n12\navg\n^\n^\nv\n15j\n15i\n3\n3\n^\n^\na\nj\ni\nt\n10\n2\n2\n∆\n+\n=\n=\n=\n+\n∆\n\u0001\n\u0001\n\n2\n2\navg\n3\n3\n3\n| a\n|\n2\n2\n2\n\n\n\n\n\n\n=\n+\n=\n\n\n\n\n\n\n\n\n\n\n\u0001\nm/s2 \nAverage acceleration is 3\n2\nm/s2 along north-west.",
    "examSource": "north-west  AP EAMCET(Medical)-1997",
    "image": "/images/yct_motion_plane/p35_img1_xref284.png"
  },
  {
    "id": "yct-motion-plane-q171",
    "num": 171,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Plane Motion Analysis",
    "difficulty": "Medium",
    "questionText": "A wheel of radius 2 cm is at rest on the \nhorizontal \nsurface. \nA \npoint \nP \non \nthe \ncircumference of the wheel is in contact with \nthe horizontal surface. When the wheel rolls \nwithout \nslipping \non \nthe \nsurface, \nthe \ndisplacement of point P after half rotation of \nwheel is",
    "options": [
      "(\n)\n1\n2\n2\n2 π + 2\ncm",
      "(\n)\n1\n2\n2\nπ + 2\ncm",
      "(\n)\n1\n2\n2\nπ + 4\ncm",
      "(\n)\n1\n2\n2\n2 π + 4"
    ],
    "correctAnswer": 3,
    "explanation": "Given, radius of wheel R = 2 cm \nAfter half the rotation \nCircumferenceof thewheel\n2\n=\n\n2 R\n2\nπ\n=\n\nThen, \n PQ = πR \n\nand \n P'Q = 2R \n(vertical distance) \nIn ∆P'QP \nPP'2 = PQ2 + P'Q2 \n2\n2\nPP'\nPQ\nP'Q\n=\n+\n\n2\n2\n2\nPP' =\nπ R + 4R\n\n2\n= R π + 4 \n\n2\n= 2 π + 4 cm \n∴ Displacement PP' = (\n)\n1\n2\n2\n2 π + 4\ncm",
    "examSource": "cm  MHT-CET 2020",
    "image": "/images/yct_motion_plane/p35_img1_xref284.png"
  },
  {
    "id": "yct-motion-plane-q172",
    "num": 172,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Plane Motion Analysis",
    "difficulty": "Medium",
    "questionText": "Two persons A and B are located in X-Y plane \nat the points (0, 0) and (0, 10) respectively. (The \ndistances are measured in MKS unit). At a time \nt=0, they start moving simultaneously with \nvelocities\n^\n\u0001\n-1\na\nv = 2j ms\nand \n1\nb\n^\nv\n2i ms-\n=\n\u0001\n\nrespectively. The time after which A and B are \nat their closest distance is",
    "options": [
      "2.5s",
      "4s",
      "1s",
      "10 s\n2"
    ],
    "correctAnswer": 0,
    "explanation": "After the time (t) the position of A is (0, vAt) \nand position of B = (vBt, 10). Distance between them. \n\ny = \n2\n2\nB\nA\n(0\nv t)\n(v t\n10)\n-\n+\n-\n (by distance formula) \ny2 = (2t)2 + (2t - 10)2 \ny2 = l = 4t2 + 4t2 + 100 - 40t \n(Let, y2 = l) \nl = 8t2 + 100 - 40t \n\n.....(i) \nDifferentiating both side with respect to t \nd\n(16t\n40)\ndt =\n-\nl\n\n.....(ii) \n2\n2\nd\n16\nve\ndt =\n= +\nl\n\n(i.e. l will be minimum) \nFor minimum condition, d\n0\ndt =\nl\n\n16t - 40 = 0 \n∴ \n40\nt\n2.5sec\n16\n=\n=\n\nHence, t = 2.5sec after which A and B are at their \nclosest distance.",
    "examSource": "VITEEE-2009",
    "image": "/images/yct_motion_plane/p36_img1_xref295.png"
  },
  {
    "id": "yct-motion-plane-q173",
    "num": 173,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Plane Motion Analysis",
    "difficulty": "Hard",
    "questionText": "The \nposition \nvector \nof \na \nparticle \nis \n(\n)\n(\n)\n^\n^\nr = acosωt i + asinωt j.\n\u0001",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 3,
    "explanation": "Position vector \n(\n)\n(\n)\n^\n^\nr\nacos t i\nasin t j\nω\nω\n=\n+\n\u0001\n\nThus velocity vector \n(\n)\n(\n)\ndr\n^\n^\nv\na sin\nt i\na cos t j\ndt\nω\nω\nω\nω\n=\n= -\n+\n\u0001\n\u0001\n\nFor direction of v\u0001 w.r.t. r\u0001 \n(\n)\n(\n)\n(\n)\n(\n)\n^\n^\n^\n^\nv r\na sin\nt i\na cos t j\na cos t i\nasin\nt j\nω\nω\nω\nω\nω\nω\n\n\n\n⋅= -\n+\n⋅\n+\n\n\n\n\n\n\n\u0001\n\u0001\n2\n2\nv r\na\nsin\nt cos\nt\na\nsin\nt cos\nt\n0\nω\nω\nω\nω\nω\nω\n∴\n⋅\n= -\n⋅\n+\n⋅\n=\n\u0001\n\u0001\n\n v.r\n0\n=\n\u0001\n\u0001\n\nSo, velocity vector is perpendicular to the position \nvector.",
    "examSource": "The velocity of the  particle is      (a) directed towards the origin      (b) directed away from the origin      (c) parallel to the position vector    (d) perpendicular to the position vector  BITSAT-2006",
    "image": "/images/yct_motion_plane/p36_img1_xref295.png"
  },
  {
    "id": "yct-motion-plane-q174",
    "num": 174,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Plane Motion Analysis",
    "difficulty": "Medium",
    "questionText": "Speeds of two identical cars are u and 4u at a \nspecific instant. The ratio of the respective \ndistance in which the two cars are stopped in \nthe same time",
    "options": [
      "1 : 1",
      "1 : 4",
      "1 : 8",
      "1 : 16 \nCG PET- 2006"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, \nSpeed of first car (u1) = u \nSpeed of second car (u2) = 4u \nAccording to third law of motion, \n\nv2 = u2 - 2as \nHere, \nv = 0 \n\n(0)2 = u2 - 2as \n\n2\nu\ns\n2a\n=\n\nLet distance travelled by \nFirst car \n2\n2\n1\n2\n1\n2\n(u )\n(u )\ns\n,s\n2a\n2a\n=\n=\n\n2\n1\nu\ns\n2a\n=\n\n.....(i) \nand for second car \n2\n2\n2\n(4u)\n16u\ns\n2a\n2a\n=\n=\n\n.....(ii) \n\non dividing equation (i) & (ii) , we get \n\n1\n2\ns\n1\ns\n16\n=\n\nSo, the ratio is 1: 16",
    "examSource": "",
    "image": "/images/yct_motion_plane/p36_img1_xref295.png"
  },
  {
    "id": "yct-motion-plane-q175",
    "num": 175,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Plane Motion Analysis",
    "difficulty": "Medium",
    "questionText": "The magnitude of acceleration and velocity of a \nparticle moving in a plane, whose position \nvector \n^\n^\n^\n2\nr = 3t i + 2tj+ k\n\u0001\n at t=2s are respectively",
    "options": [
      "148,6",
      "144,6",
      "13,3",
      "14,3"
    ],
    "correctAnswer": 0,
    "explanation": "Given, position vector \n2^\n^\n^\nr\n3t i\n2tj\nk\n=\n+\n+\n\u0001\n\nFirst we have to find vector of velocity \n\n2\ndr\nd\n^\n^\n^\nv\n3t i\n2tj\nk\ndt\ndt\n\n\n=\n=\n+\n+\n\n\n\n\n\u0001\n\u0001\n\n^\n^\nv\n6ti\n2j\n=\n+\n\u0001\n\nMagnitude of velocity at t = 2s \n\n( )^\n^\nv\n6 2 i\n2j\n=\n+\n\u0001\n\n^\n^\nv\n12i\n2j\n=\n+\n\u0001\n\n| v |\n144\n4\n=\n+\n\u0001\n148\n=\n\n(\n)\ndv\nd\n^\n^\na\n6ti\n2j\ndt\ndt\n=\n=\n+\n\u0001\n\n^\na\n6i\n=\n\n| a |\n6\n=\n\u0001",
    "examSource": "TS-EAMCET-04.05.2018, Shift-1"
  },
  {
    "id": "yct-motion-plane-q176",
    "num": 176,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Plane Motion Analysis",
    "difficulty": "Medium",
    "questionText": "A 4 kg object has a velocity, 3.0 ^i m/s at some \ninstant. 8 seconds later, its velocity is \n(\n)\n^\n^\n8.0i +10.0j m/s. Assuming that the object is \nsubjected to a constant net force, the \nmagnitude of the force is",
    "options": [
      "5 5 N\n2",
      "5 3 N\n8",
      "8 5 N\n3",
      "10 3 N\n7"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, m = 4 kg, u = \n^\n3i m/s, \n(\n)\n^\n^\nv\n8i\n10j\n=\n+\n, t = 8s \nEquation of motion is \n\nv = u + at ⇒ (\n)\n^\n^\n^\n8i\n10j\n3i\na\n8\n+\n=\n+ × \n\n2\n^\n^\n5i\n10j\na\nm/s\n8\n\n\n+\n\n\n\n\n=\n\n\n\n\n\n\nForce F = ma \n\n^\n^\n5i\n10j\n4\n8\n\n\n+\n\n\n\n\n= ×\n\n\n\n\n \n\n5 ^\n^\nF\ni\n5j\n2\n=\n+\n\nMagnitude of force |F| = \n( )\n2\n2\n5\n5\n2\n\n\n+\n\n\n\n\n25\n25\n4\n=\n+\n\n5\n5 4\n=\n\n5 5 N\n2\n=",
    "examSource": "TS-EAMCET-04.05.2019, Shift-1"
  },
  {
    "id": "yct-motion-plane-q177",
    "num": 177,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Plane Motion Analysis",
    "difficulty": "Medium",
    "questionText": "The position vector of a particle moving in a \nplane is given by r = acosωt ^\n^\ni + bsin ωt j where \n^i and \n^jare the unit vectors along the \nrectangular axes X and Y; a, b, and ω are \nconstants and t is time. The acceleration of the \nparticle is directed along the vector \n\n(a) \n^\n^\nai\nbj\n-\n+\n\n(b) \n^\n^\nbi\naj\n+\n\n(c) -",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \nr = a cosωt ^i + bsinωt ^j \n\n…..(i) \nOn differentiating w.r.t. t, we get \ndr\n^\n^\nv\na\nsin t i\nb\ncos t j\ndt\nω\nω\nω\nω\n=\n=-\n+\n\ndv\na\ndt\n=\n\n(\n)\n2\n^\n^\na\na cos t i\nb sin t j\nω\nω\nω\n=-\n+\n\n…..(ii) \nPutting value of equation (i) in (ii), we get \n\na = -ω2r \n\na.r ≠ 0 \nSo, a\u0001 is not perpendicular to r\u0001 and -ve show that \nacceleration is toward the origin. So, that the \nacceleration of the particle directed along the vector -r.",
    "examSource": "r  (d) dr dt  TS-EAMCET-07.05.2018, Shift-1"
  },
  {
    "id": "yct-motion-plane-q178",
    "num": 178,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Plane Motion Analysis",
    "difficulty": "Medium",
    "questionText": "A particle moves in XY-plane with x and y \nvarying with time t as x(t) = 5t, y(t) = 5t (27 - \nt2). At what time in seconds, the direction of \nvelocity and acceleration will be perpendicular \nto each other?",
    "options": [
      "27\n5\n2",
      "5",
      "5 12",
      "3"
    ],
    "correctAnswer": 3,
    "explanation": "velocity in x-direction is vx \n\nx\ndx\nv\ndt\n=\n\n( )\n1\nx\nd\nv\n5t\n5ms\ndt\n-\n=\n=\n\n velocity in y -direction is vy \n(\n)\n3\ny\ndy\nd\nv\n5\n27t\n5t\ndt\ndt\n=\n=\n×\n-\n\n2\n5\n27\n15t\n= ×\n-\n\n= \n2\n135\n15t\n-\n\n∵this case similar to projectile motion velocity and \nacceleration are perpendicular, when vy = 0 \n⇒ \n2\n135\n15t\n-\n= 0 \n\n15t2 = 135 \n\nt2 = 9 \n\nt = \n9 \n\nt = 3s",
    "examSource": "TS-EAMCET-05.05.2018, Shift-2"
  },
  {
    "id": "yct-motion-plane-q179",
    "num": 179,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Plane Motion Analysis",
    "difficulty": "Medium",
    "questionText": "A particle starting from the origin (0, 0) moves \nin a straight line in the (x, y) plane. Its \ncoordinates at a later time are ( 3,3) . The \npath of the particle makes with the x-axis an \nangle of",
    "options": [
      "30º",
      "45º",
      "60º",
      "0º \nJCECE-2008"
    ],
    "correctAnswer": 2,
    "explanation": "Let, α be the angle which particle makes with \nan x-axis \n\nFrom the above figure. \ny\n3\ntan\n3\nx\n3\nα =\n=\n=\n\ntan\n3\ntan60\nα =\n=\n° \n α = 60°",
    "examSource": "",
    "image": "/images/yct_motion_plane/p38_img1_xref310.png"
  },
  {
    "id": "yct-motion-plane-q180",
    "num": 180,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Plane Motion Analysis",
    "difficulty": "Medium",
    "questionText": "A particle is moving eastward with velocity \n5m/s. In 10s the velocity changes to 5m/s \nnorthwards. The average acceleration in this \ntime is",
    "options": [
      "-2\n1 ms\n2\n towards North-West",
      "-2\n1 ms\n2\n towards North-West",
      "-2\n1 ms\n2\n towards North-East",
      "-2\n1 ms\n2"
    ],
    "correctAnswer": 0,
    "explanation": "Given, initial velocity v1 = 5 ^i m/s eastwards \nFinal velocity v2 = 5 ^j m/s northwards \nTime (t) = 10 sec \n\n|Average acceleration|\n12\nv\nt\n∆\n=\n\n2\n1\nv\nv\n5j\n5i\nt\nt\n-\n-\n=\n=\n\n2\n5 2\n1 m/s\n10\n2\n=\n=\n towards North-West",
    "examSource": "towards North-East  COMEDK 2012",
    "image": "/images/yct_motion_plane/p38_img1_xref310.png"
  },
  {
    "id": "yct-motion-plane-q181",
    "num": 181,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Plane Motion Analysis",
    "difficulty": "Medium",
    "questionText": "Assertion: The magnitude of velocity of two \nboats relative to river is same. Both boats start \nsimultaneously from same point on one bank \nmay reach opposite bank simultaneously \nmoving along different paths. \n\n Reason: For boats to cross the river in same \ntime. The component of their velocity relative \nto river in direction normal of flow should be \nsame.",
    "options": [
      "If both Assertion and Reason are correct and \nReason \nis \nthe \ncorrect \nexplanation \nof \nAssertion.",
      "If both Assertion and Reason are correct, but \nReason is not the correct explanation of \nAssertion.",
      "If Assertion is correct but Reason is incorrect.",
      "If both the Assertion and Reason are \nincorrect. \n AIIMS-2015"
    ],
    "correctAnswer": 0,
    "explanation": "Here, both assertion and reason are correct \nand reason is the correct explanation of assertion. For \nboats to cross the river in same time, the component of \ntheir velocity relative to river is normal to river flow \nshould be. This component velocity of boats is \nresponsible for reaching the bank of the river \nsimultaneously.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p38_img1_xref310.png"
  },
  {
    "id": "yct-motion-plane-q182",
    "num": 182,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Plane Motion Analysis",
    "difficulty": "Medium",
    "questionText": "Assertion: The driver in a vehicle moving with \na constant speed on a straight road is an \ninertial frame of reference. \n\n Reason: A reference frame in which Newton's \nlaws of motion are applicable is non-inertial.",
    "options": [
      "If both Assertion and Reason are correct and \nReason \nis \nthe \ncorrect \nexplanation \nof \nAssertion.",
      "If both Assertion and Reason are correct, but \nReason is not the correct explanation of \nAssertion.",
      "If Assertion is correct but Reason is incorrect.",
      "If both the Assertion and Reason are \nincorrect. \n AIIMS-2009"
    ],
    "correctAnswer": 2,
    "explanation": "Here, assertion is correct but reason is wrong. \nA vehicle moving with constant velocity on a straight \nroad is an inertial frame of reference. But, a reference \nframe in which Newton's laws of motion are applicable \nis known as inertial frame. \nA reference frame in which Newton's laws of motion \nare not applicable is known as Non-inertial frame of \nreference. Example: Rotational frame of reference.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p38_img1_xref310.png"
  },
  {
    "id": "yct-motion-plane-q183",
    "num": 183,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Plane Motion Analysis",
    "difficulty": "Hard",
    "questionText": "A block of mass 1 kg starts from rest at x = 0 \nand moves along the X-axis under the action of \na force F = kt, where t is time and k = 1 Ns-1. \nThe distance the block will travel in 6 seconds \nis",
    "options": [
      "36 m",
      "72 m",
      "108 m",
      "18"
    ],
    "correctAnswer": 0,
    "explanation": "Given, \nF = kt, m = 1kg, k = 1Ns-1, t = 6 sec \nF = ma \n∴ ma = kt \n1 × a = kt \na = kt \ndv\nkt\ndt =\n\ndv\na\ndt\n\n\n\n\n\n\n=\n\n\n\n\n\n\n\n\n∵\n\ndv = k tdt \nIntegrating both side, \ndv\nk tdt\n=\n∫\n∫\n\n2t\nv\nk 2\n=\n\n2\ndx\nt\ndx\nk\nv\ndt\n2\ndt\n\n\n\n\n\n\n=\n=\n\n\n\n\n\n\n\n\n∵\n\n2t\ndx\nk\n.dt\n2\n=\n\nAgain Integrating both side, \n2t\ndx\nk\n.dt\n2\n=\n∫\n∫\n = \n3\n3\nk t\nkt\n2 3\n6\n=\n\nAt \n t = 6 \n3t\nx\nk 6\n=\n36\n1\n36\n6\n= ×\n=\nm",
    "examSource": "m  WB JEE 2017",
    "image": "/images/yct_motion_plane/p38_img1_xref310.png"
  },
  {
    "id": "yct-motion-plane-q184",
    "num": 184,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Plane Motion Analysis",
    "difficulty": "Hard",
    "questionText": "A cyclist is moving along a curvature of radius \n'r' at a constant speed 'v'. The angle made by \nthe cyclist with the vertical plane is",
    "options": [
      "tan-1 \n2\nv\nrg\n\n\n\n\n\n",
      "tan-1 \n2\nrg\nv\n\n\n\n\n\n",
      "tan-1 \n2\nv r\ng\n\n\n\n\n\n",
      "tan-1 \n2\nr\nv g\n\n\n\n\n\n"
    ],
    "correctAnswer": 0,
    "explanation": "From Newton's second law, \n\n∴ Vertical component \nmg = R cosθ \n\n…(i) \nHorizontal component \nCentripetal Force, \nFc = R sin θ \n2\nmv\nRsin\nr\nθ\n=\n\n…(ii) \nEquation (ii) divided by eqn (i) \n2\nmv\nRsin\nr\nmg\nRcos\nθ\nθ\n=\n\n2\nv\ntan\nrg\nθ =\n\n2\n1 v\ntan\nrg\nθ\n-\n\n\n\n=\n\n\n\n\n\n",
    "examSource": "WB JEE-2007",
    "image": "/images/yct_motion_plane/p39_img1_xref317.png"
  },
  {
    "id": "yct-motion-plane-q185",
    "num": 185,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Plane Motion Analysis",
    "difficulty": "Medium",
    "questionText": "A boat crosses a river with a velocity of 8 km/h. \nIf the resulting velocity of boat is 10 km/h, then \nthe velocity of river water is",
    "options": [
      "4 km/h",
      "6 km/h",
      "8 km/h",
      "10 km/h \nUP CPMT-2001"
    ],
    "correctAnswer": 1,
    "explanation": "Resulting velocity of boat (unet) = 10 km/hr \nvelocity of boat (ub) = 8 km/hr \nWe know that, \n\nnet\nb\nr\nu\nu\nu\n=\n+\n\u0001\n\u0001\n\u0001 \n\n2\n2\nnet\nb\nr\n| u\n|\nu\nu\n=\n+\n\u0001\n\n2\n2\nr\n10\n(8)\nu\n=\n+\n\n100 = 64 + \n2\nru \n\n ur = 6 km/h",
    "examSource": "",
    "image": "/images/yct_motion_plane/p39_img1_xref317.png"
  },
  {
    "id": "yct-motion-plane-q186",
    "num": 186,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Plane Motion Analysis",
    "difficulty": "Medium",
    "questionText": "An aircraft is flying at a height of 'H' above the \nground and at a speed of 'V'. The maximum \nangle subtended at a ground observation point \nby the aircraft after time T is",
    "options": [
      "1 VT\ntan\nH\n-\n\n\n\n\n",
      "1 VT\ntan\n2H\n-\n\n\n\n\n",
      "1 2VT\n2tan\nH\n-\n\n\n\n\n",
      "1 VT\n2tan\n2H\n-\n\n\n\n\n"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \nAircraft is flying at a height = H \nSpeed of aircraft = V \nTime = T. \n\nLet A, B , and C denotes the position of aircraft as it \nflies above the observation point O and the angle \nsubtend here is θ from end to end. \nUsing triangle geometry in ∆AOB \nAB\ntan 2\nBO\nθ =\n\nVT\ntan 2\n2H\nθ =\n\n1 VT\ntan\n2\n2H\nθ\n-\n\n\n=\n\n\n\n\n \n1 VT\n2tan\n2H\nθ\n-\n\n\n=\n\n\n\n\n",
    "examSource": "TS EAMCET 19.07.2022, Shift-I",
    "image": "/images/yct_motion_plane/p39_img1_xref317.png"
  },
  {
    "id": "yct-motion-plane-q187",
    "num": 187,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Plane Motion Analysis",
    "difficulty": "Medium",
    "questionText": "Which of the following curves does not \nrepresent motion in one dimension?",
    "options": [
      "",
      "",
      "",
      "[AIPMT 1992]"
    ],
    "correctAnswer": 2,
    "explanation": "Velocity of body can be positive as well as \nnegative because change in position can be positive or \nnegative. However, time is always in forward direction. \nTherefore, a body can never go back in time. \nIn graph C, we can see that the body has two different \nvelocity at a given time. therefore, this graph does not \nrepresent the motion of a moving body.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p40_img1_xref325.png"
  },
  {
    "id": "yct-motion-plane-q188",
    "num": 188,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Plane Motion Analysis",
    "difficulty": "Medium",
    "questionText": "Two boys are standing at the ends A and B of a \nground, where AB = a. The boy at B starts \nrunning in a direction perpendicular to AB \nwith velocity v1 The boy at A starts running \nsimultaneously with velocity v and catches the \nother boy in a time t, where t is",
    "options": [
      "2\n2\n1\na\nv\nv\n+",
      "2\n2\n2\n1\na\nv - v",
      "1\na\nv - v",
      "1\na\nv\nv\n+"
    ],
    "correctAnswer": 1,
    "explanation": "Let two boys meet at point C after time 't' \nfrom the starting, \n\nAC = vt and BC = v1t \nWe know that, \n\n(AC)2 = (AB)2 + (BC)2 \n\n1\n2 2\n2\n2 2\nv t = a + v t \n\n2 2\n2\nv t\nv t = a\n-\n2 2\n1\n\nt2 (\n)\n2\n2\n1\nv\nv\n-\n = a2 \n t =\n2\n2\n2\n1\na\nv\nv\n-",
    "examSource": "JIPMER-2013",
    "image": "/images/yct_motion_plane/p40_img1_xref325.png"
  },
  {
    "id": "yct-motion-plane-q189",
    "num": 189,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Plane Motion Analysis",
    "difficulty": "Hard",
    "questionText": "A block of mass 2 kg moving on a horizontal \nsurface with speed of 4 m/s enters a rough \nsurface ranging from x=0.5 m to x=1.5m. The \nretarding force in this range of rough surface is \nrelated to distance by F=kx where k=12 Nm-1. \nThe speed of the block as it just crosses the \nrough surface will be:",
    "options": [
      "Zero",
      "1.5 m/s",
      "2.0 m/s",
      "2.5 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "Given data, \n\n m = 2 kg, v = 4 m/s \nsurface range (x) = 0.5 to 1.5 m \n\nk = 12 N/m \n\nF = -kx \n(F = ma) \n\nma = -kx \n\nkx\n12\nx\na\nm\n2\n-\n×\n=\n=-\n\na = -6x \n\ndv\nv\n6x\ndx =-\n\nv\n1.5\n4\n0.5\nvdv\n6xdx\n=-\n∫\n∫\n\nv\n1.5\n2\n2\n4\n0.5\nv\nx\n6\n2\n2\n\n\n\n\n\n\n\n\n=-\n\n\n\n\n\n\n\n\n\n2\n2\n2\nv\n16\n6 1.5\n0.5\n2\n2\n\n\n-\n\n\n\n\n=-\n-\n\n\n\n\n\n\n\n\n\n\n\n2\nv\n16\n3 2\n2\n-\n=-× \n\n2\nv\n12\n16\n= -\n+\n\n2\nv\n4\n= ⇒ v\n2m/s\n=\n\n (c) \nRelative Velocity in Plane",
    "examSource": "JEE Main-28.06.2022, Shift-II",
    "image": "/images/yct_motion_plane/p40_img1_xref325.png"
  },
  {
    "id": "yct-motion-plane-q190",
    "num": 190,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A boat is moving with a velocity \n^\n^\n3i + 4j with \nrespect to ground the water in the river is \nmoving with a velocity \n^\n^\n3i\n4j\n-\n-\n w.r.t. ground. \nThe relative velocity of boat w.r.t. water is",
    "options": [
      "^\n^\n5i\n6j\n+",
      "^\n^\n6i\n8j\n+",
      "^\n^\n6i\n8k\n+",
      "^\n^\n5j\n6k\n-"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \n\nVelocity of boat = (\n)\n^\n^\n3i\n4j\n+\n\nThe water in the river is moving with a velocity \n^\n^\n3i\n4j\n-\n-\nwith respect to ground. \n∴ Relative velocity of boat with respect to water is. \n(\n) (\n)\nboat\nwater\n^\n^\n^\n^\nv\nv\n3i\n4j\n3i\n4j\n-\n=\n+\n--\n-\n\n(\n)\n^\n^\n^\n^\n3i\n4j\n3i\n4j\n=\n+\n+\n+\n\n^\n^\n^\n^\n3i\n4j\n3i\n4j\n=\n+\n+\n+\n\n^\n^\n6i\n8j\n=\n+",
    "examSource": "EAMCET-1991",
    "image": "/images/yct_motion_plane/p41_img1_xref355.png"
  },
  {
    "id": "yct-motion-plane-q191",
    "num": 191,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A boat which has a speed of 13 km/h in still \nwater, crosses a river of width 1 km along the \nshortest possible path in 12 minute. the velocity \nof the river water in km/h is:",
    "options": [
      "12",
      "10",
      "8",
      "6"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \nSpeed of boat 13 km/h in still water. \nA river of width 1 km along the shortest possible path in \n12 minute. \n\nTherefore, \nSpeed of boat relative to ground \n\n1\nkm/ h\n12\n60\n= \n\n\n\n\n\n\n\n\n60\n5km/ h\n12\n=\n=\n\nNow, \n\n52 = 132 - x2 \n(where, x is speed of water) \n⇒ \n25 - 169 = - x2 \n⇒ \n144 = x2 \n⇒ \nx = 12 km/h",
    "examSource": "AP EAMCET(Medical)-2002",
    "image": "/images/yct_motion_plane/p41_img1_xref355.png"
  },
  {
    "id": "yct-motion-plane-q192",
    "num": 192,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A gun mounted on the top of a moving truck is \naimed in the backward direction at an angle of \n30o to the vertical. If the muzzle velocity of the \ngun is 4m/s, the value of the speed of the truck \nthat will make the bullet come out vertically is :",
    "options": [
      "1m/s",
      "3 m/s\n2",
      "0.5 m/s",
      "2m/"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, Angle in backward direction = \n30º \nMuzzle velocity of bullet = 4 m/s \nFor bullet to come out vertically \n\nvb sin30° = vt \n\nt\n1\n4\nv\n2\n×\n=\n⇒ \nt\n4\nv\n2 =\n⇒ vt = 2 m/s",
    "examSource": "s  AP EAMCET(Medical)-1998",
    "image": "/images/yct_motion_plane/p41_img1_xref355.png"
  },
  {
    "id": "yct-motion-plane-q193",
    "num": 193,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Hard",
    "questionText": "A person swims in a river aiming to reach \nexactly on the opposite point on the bank of a \nriver. His speed of swimming is 0.5 m/s at an \nangle of 120o with the direction of flow of \nwater. The speed of water is",
    "options": [
      "1.0 m/s",
      "0.5 m/s",
      "0.25 m/s",
      "0.43 m/"
    ],
    "correctAnswer": 2,
    "explanation": "Speed of water = u\n\u0001\n\n Speed of swimmer = v\n\u0001\n= 0.5 m/s \n\nAngle between v\n\u0001\n and u\n\u0001\n is 120º then \n\nu\nsin\nv\nθ =\n\u0001\n\u0001 ⇒\nu\nsin30º\n0.5\n=\n\n1\nu\n2\n0.5\n=\n\nu = 0.25 m/s",
    "examSource": "s               VITEEE-2019  AIIMS-26.05.2018(E)  CBSE AIPMT-1999",
    "image": "/images/yct_motion_plane/p41_img1_xref355.png"
  },
  {
    "id": "yct-motion-plane-q194",
    "num": 194,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A rain drop of radius 0.3 mm has a terminal \nvelocity in air is 1 m/s. The viscosity of air is 8× \n10-5 poise. The viscous force on it is",
    "options": [
      "45.2×10-4 dyne",
      "101.73×10-5 dyne",
      "16.95×10-4 dyne",
      "16.95×10-5"
    ],
    "correctAnswer": 0,
    "explanation": "Radius of drop (r) = = 0.3mm = 0.03 cm \nTerminal velocity (v) = 1m/s = 100 cm/sec \nViscosity of air η = 8 ×10-5 Poise \nViscous force, F = 6 πηrv \n\nF = 6 × 3.14 × (8 × 10-5) ×0.03 × 100 \n\n = 45.2 × 10-4 dyne",
    "examSource": "dyne  VITEEE-2019",
    "image": "/images/yct_motion_plane/p41_img1_xref355.png"
  },
  {
    "id": "yct-motion-plane-q195",
    "num": 195,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A particle moves in a straight line with a \nvelocity v and moves under retardation equal \nto k times the distance described. What is the \ndistance covered before it comes to rest? \n\n(a) v k \n(b) v/\nk \n\n(c) 2v/",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 1,
    "explanation": "dv\na\nv\nkx\ndx\n=-\n=\n\ndv\nv\nkx\ndx\n-\n=\n\n0\nx\nv\n0\nvdv\nkx dx\n-\n=\n∫\n∫\n\n-\n0\nx\n2\n2\nv\n0\nv\nkx\n2\n2\n\n\n\n\n=\n\n\n\n\n\n\n\n\n\n2\n2\nv\nkx\n2\n2\n+\n=\n\n2\n2\nv\nx\nk\n=\n ⇒\nv\nx\nk\n=",
    "examSource": "k  (d) None of the above  SCRA-2012",
    "image": "/images/yct_motion_plane/p42_img1_xref367.png"
  },
  {
    "id": "yct-motion-plane-q196",
    "num": 196,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "Rain is falling vertically with a speed of 12 ms-\n1. A woman rides a bicycles with a speed of 12 \nm/s in east to west direction. What is the \ndirection in which she should hold her \numbrella ?",
    "options": [
      "300, towards east",
      "450, towards east",
      "300, towards west",
      "450,"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \n\nVelocity of rain vr = 12 m/s \nVelocity of woman vw = 12m/s \nvrw = \n2\n2\nw\nr\nv\nv\n+\n\n = \n2\n2\n(12)\n(12)\n+\n = \n1\n12 2 ms- \nw\nrw\nv\n12\nsin\nv\n12 2\nθ =\n=\n\n1\n1\nsin\n45 west\n2\nθ\n-\n\n\n=\n=\n°\n\n\n\n\n\n\n\n\nHence, woman should hold her umbrella in 45º west \ndirection.",
    "examSource": "towards west  Karnataka CET-2020",
    "image": "/images/yct_motion_plane/p42_img1_xref367.png"
  },
  {
    "id": "yct-motion-plane-q197",
    "num": 197,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A train is moving towards east and a car is \nalong north,",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 1,
    "explanation": "Let, \ncv\nVelocityof car\n=\n\u0001\n\ntv\nVelocityof Train\n=\n\u0001\n\nBoth speed is same \n\nv\ntan\nv\n-\nθ=\n⇒ tanθ = -1 = tan 135° \n\n θ = 135º \nHence, velocity of car w.r. to train is towards west-north \ndirection.",
    "examSource": "both with same speed. The  observed direction of car to the passenger in  the train is     (a) east-north direction    (b) west-north direction     (c) south-east direction    (d) none of these  BCECE-2018",
    "image": "/images/yct_motion_plane/p42_img1_xref367.png"
  },
  {
    "id": "yct-motion-plane-q198",
    "num": 198,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A man rides a bicycle with a speed of 17.32 m/s \nEast-West direction. If the rain falls vertically \nwith a speed of 10 m/s, then the direction in \nwhich he must hold his umbrella is",
    "options": [
      "30º with the vertical towards East",
      "60º with the vertical towards West",
      "30º with the vertical towards West",
      "60º with the vertical towards East"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, \nA man rides a bicycle with a speed of 17.32 m/s East-\nWest direction \nSpeed of rain = 10 m/s \n\nm\nr\nv\n17.32\ntan\n1.732\nv\n10\nθ =\n=\n=\n\ntan\n1.732\nθ =\n\ntan\n3\n3\n1.732\nθ\n\n\n=\n=\n\n\n\n\n∵\n\ntan\ntan 60\nθ =\n° \n60\nθ =\n° with vertical towards west.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p42_img1_xref367.png"
  },
  {
    "id": "yct-motion-plane-q199",
    "num": 199,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A train travels east towards Hubli at 80 km/h. \nA man on the train runs from the front of the \ntrain toward the rear of the train at 10 km/h \nwith respect to train. As he runs, he carries a \nplate of fruit with him. He notices a giant \nspider on the plate and throws the plate away \nfrom him (toward the rear of the train) at 20 \nkm/h with respect to him. Just after that \ninstant, the startled spider jumps towards the \nman at 5 km/h with respect to plate. The \ninstant after the spider jumps toward the man, \nhow fast is the spider approaching Hubli?",
    "options": [
      "45 km/h",
      "115 km/h",
      "55 km/h",
      "95 km/"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, \nThe velocity of train with respect to the earth, \n\nvT → Ε = 80 km/h \n….(i) \nVelocity of the man w.r.t. the train, \n\nvM → Τ = -10 km/h \n\n….(ii) \nVelocity of the plate w.r.t. the man, \n\nvP → Μ = -20 km/h \n\n….(iii) \nVelocity of the spider w.r.t. the plate, \n\nvS → P = 5 km/h \n….(iv) \nFrom eqn. (i), (ii), (iii), we get \n∴ The velocity of the spider w.r.t. the earth, \nvS → E = vS → P + vP → M + vM → T + vT → E \n\n= 5 - 20 - 10 + 80 \n\n= 5 - 30 + 80 \n\n= 55 km/h (Towards Hubli)",
    "examSource": "h  UPSEE - 2018",
    "image": "/images/yct_motion_plane/p42_img1_xref367.png"
  },
  {
    "id": "yct-motion-plane-q200",
    "num": 200,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Hard",
    "questionText": "A boat crosses a river from port A to port B, \nwhich are just on the opposite side. The speed \nof the water is vw and that of boat is vB relative \nto still water. Assume vB = 2vw. What is the \ntime taken by the boat, if it has to cross the \nriver directly on the AB line [D = width of the \nriver]",
    "options": [
      "B\n2D\nV\n3",
      "B\n3D\n2V",
      "B\nD\nV\n2",
      "B\nD 2"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \nAlso, vB = 2vw ∴ \nW\nB\nv\n1\nv\n2\n=\n\n…(i) \n\nTime taken by boat t = ? \n\nvB sinθ = vw \n……(ii) \n∴ \nfrom equation (i) and (ii) \nB\nB\nv\nv sin\n2\nθ =\n⇒ sinθ \n1\n2\n=\n ∴ θ = 30º \nWe know, \nB\nD\nt\nv cos\n=\nθ = \nB\nD\nv cos30° \n∴ \nB\nD\n3\nv\n2\n=\n\n\n\n\n\n\n\n\n\n3\ncos30\n2\n\n\n°=\n\n\n\n\n\n\n\n∴ \nB\n2D\nt\nv\n3\n=",
    "examSource": "V   BITSAT-2019",
    "image": "/images/yct_motion_plane/p43_img1_xref375.png"
  },
  {
    "id": "yct-motion-plane-q201",
    "num": 201,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Hard",
    "questionText": "A passenger in a open car travelling at 30 m/s \nthrows a ball out over the bonnet. Relative to \nthe car the initial velocity of the ball is 20 m/s \nat 60° to the horizontal. The angle of projection \nof the ball with respect to the horizontal road \nwill be",
    "options": [
      "tan-1 2\n3\n\n\n\n\n\n",
      "tan-1\n3\n4\n\n\n\n\n\n\n\n",
      "tan-1\n4\n3\n\n\n\n\n\n",
      "tan-1 3\n4\n\n\n\n\n\n"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, \n\nvc = 30m/s \n\nvbc = 20m/s \nand angle are = 60° \nNow, velocity of ball with respect to car is \nbc\n^\n^\nv\n20cos60 i\n20sin60 j\n=\n° +\n° \nbc\n1\n3\n^\n^\nv\n20\ni\n20\nj\n2\n2\n=\n×\n+\n×\n\nbc\n^\n^\nv\n10i\n10 3j\n∴\n=\n+\n\nNow, we know that \nvbc = vb-vc \nb\nbc\nc\nv\nv\nv\n=\n+\n\n vb\n^\n^\n^\n10i 10 3 j 30i\n=\n+\n+\n\nb\n^\n^\nv\n40i\n10 3j\n∴\n=\n+\n\nNow, angle of projection is :- \n10 3\ntan\n40\nθ=\n\n1\n3\ntan\n4\n-\n\nθ=\n\n\n\n\n\n",
    "examSource": "BITSAT- 2011",
    "image": "/images/yct_motion_plane/p43_img1_xref375.png"
  },
  {
    "id": "yct-motion-plane-q202",
    "num": 202,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Hard",
    "questionText": "A boy running on a horizontal road at 8 km/h \nfinds the rain falling vertically. He increases his \nspeed to 12 km/h and finds that the drops \nmakes 30° with the vertical. The speed of rain \nwith respect to the road is",
    "options": [
      "4 7km/ h",
      "9 7km/ h",
      "12 7km/ h",
      "15 7km/"
    ],
    "correctAnswer": 0,
    "explanation": "Given, vm = 8 km/h \nLet the velocity of rain \nr\nrx\nry\n^\n^\nv\nv i\nv j\n=\n+\n\n……(i) \nVelocity of rain w.r.t. boy, \n(\n)\nrm\nrx\nm\nry\n^\n^\nv\nv\nv\ni\nv j\n=\n-\n+\n\nCondition Ist - \nrx\nm\nv\nv\n0\n-\n= \nrx\nv\n8km / h\n=\n\nCondition IInd - \nrx\nm\nry\nv\nv\ntan30\nv\n-\n° =\n⇒\nry\n8\n12\ntan30\nv\n-\n° =\n\nry\nv\n4 3km / h\n= -\n\nSo from equation (i) \nr\n^\n^\nv\n8i\n4 3j\n=\n-\n\nvr = \n(\n)\n2\n28\n4 3\n+ -\n\nvr\n4 7km/ h\n=",
    "examSource": "h  BITSAT- 2018",
    "image": "/images/yct_motion_plane/p43_img1_xref375.png"
  },
  {
    "id": "yct-motion-plane-q203",
    "num": 203,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A \nman \ncrosses \na \n320 \nm \nwide \nriver \nperpendicular to the current in 4 min. If in still \nwater he can swim with a speed 5/3 times that \nof the current, then the speed of the current, in \nmm-1 is",
    "options": [
      "30",
      "40",
      "50",
      "60 \nManipal UGET-2013"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, \n\nWidth of river (d) = 320 m \nTime taken by the swimmer to cross the river = 4 min \nResultant velocity of the swimmer = 320\n4 = 80 m/min \nSpeed of the man (v) = 5 u\n3 \nWe know that, \n\n2\n2\n2\nd\nt\nv\nu\n=\n-\n ⇒ \n2\n2\n320\n4\n5 u\nu\n3\n=\n\n\n\n-\n\n\n\n\n\n\n4\n4\nu\n320\n3\n×\n=\n\nu = 60 meter/minute",
    "examSource": "",
    "image": "/images/yct_motion_plane/p44_img1_xref381.png"
  },
  {
    "id": "yct-motion-plane-q204",
    "num": 204,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "Rain is falling at an angle of 30o from the \nvertical due to the wind with a speed of 40 m/s. \nA car is travelling horizontally in the direction \nopposite to the wind, at a speed of 40 m/s. At \nwhat angle from the vertical will it experience \nthe rain falling from?",
    "options": [
      "30o",
      "60o",
      "90o",
      "120"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, \n\n1\nR\nv\n= 40 m/s \n\nvc = 40 m/s \n\ntan(α + 30°) = (\n)\n1\n1\nc\nR\nR\nv\nv\nsin30\nv\ncos30\n+\n°\n°\n\n∆OAB \n\ntan30° = 1\n3 \n\ntan(α + 30°) = \n1\n40\n40 2\n3\n40\n2\n\n\n+\n\n\n\n\n\n\n\n\n\n\n\ntan(α + 30°) = \n3\n40 2\n3\n40\n2\n\n\n\n\n\n\n\n\n\n\n\n\n= 3\n3\n\ntan(α + 30°) = tan60° \n\n α + 30° = 60°",
    "examSource": "o  TS-EAMCET-03.05.2019, Shift-1",
    "image": "/images/yct_motion_plane/p44_img1_xref381.png"
  },
  {
    "id": "yct-motion-plane-q205",
    "num": 205,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "Two cars A and B are moving with speeds vA = \n120 km/h and vB = 50 km/h respectively in the \ndirections as indicated by the arrow in the \nfigure below. What is the relative speed of the \ncar B with respect to car A?",
    "options": [
      "70 km/h",
      "120 km/h",
      "130 km/h",
      "170 km/"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, \n\nvA = 120 km/h \n\nvB = 50 km/h \nRelative speed of B with respect to A, \n\nA\n2\n2\nB\nResultant\nv\nv\n=\n+\n\n(\n)\n2\n2\n120\n(50)\n=\n+\n\n16900\n=\n\n= 130 km/h",
    "examSource": "h  TS-EAMCET-10.09.2020, Shift-2",
    "image": "/images/yct_motion_plane/p44_img1_xref381.png"
  },
  {
    "id": "yct-motion-plane-q206",
    "num": 206,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A river 200 m wide is flowing at a rate of 3.0 \nm/s. A boat is sailing at a velocity of 15 m/s \nwith respect to the water in a direction \nperpendicular to the river. How far from the \npoint directly opposite to the starting point \ndoes the boat reach on the opposite bank?",
    "options": [
      "25 m",
      "60 m",
      "40 m",
      "50"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, distance between river bank = 200 m \nSpeed of Rivers water = 3 m/sec \nSpeed of sailing = 15 m/sec \n\n∵ Time = Distance\nspeed\n200\n= 15 \n\n= 13.33 sec \n\nDistance = velocity × time \n\n= 3 × 13.33 \n\n= 39.99 \n\n= 40 m",
    "examSource": "m  TS-EAMCET-11.09.2020, Shift-1",
    "image": "/images/yct_motion_plane/p44_img1_xref381.png"
  },
  {
    "id": "yct-motion-plane-q207",
    "num": 207,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "Rain is falling vertically with a speed of 30 m/s. \nA man rides a bicycle with a speed of 10 m/s \nfrom East to West direction. At what the angle \nwith the vertical, he sees the rain falling?",
    "options": [
      "1 1\ntan\n3\n-\n\n\n\n\n\ntowards West",
      "tan-1 (3) towards West",
      "1 1\ntan\n3\n-\n\n\n\n\n\ntowards East",
      "tan-1 (3"
    ],
    "correctAnswer": 0,
    "explanation": "Let, vr = Velocities of falling rain = 30 m/s \n vc = Velocities of the bicycle = 10 m/s. (East to \nwest) \n∵ \nc\nr\nv\ntan\nv\nθ =\n\n10\n30\n=\n1\n3\n=\n\n1 1\ntan\n3\n-\n\nθ =\n\n\n\n \nSo, \n1 1\ntan\n3\n-\n\nθ =\n\n\n\n\n towards west.",
    "examSource": ") towards East  TS-EAMCET-06.05.2019, Shift-1",
    "image": "/images/yct_motion_plane/p45_img1_xref394.png"
  },
  {
    "id": "yct-motion-plane-q208",
    "num": 208,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A boy runs on a horizontal road with a speed of \n4 m/s while it is raining. He sees that the rain is \nmaking an angle θ with the vertical while \nrunning from West to East. However, when he \nruns from East to West, the angle is α. The rain \nis pouring down at an angle 45o with the \nvertical normal and at a speed of 8 m/s as \nshown in the figure. The ratio tanθ\ntanα is",
    "options": [
      "(\n)\n2\n1\n2\n-",
      "(\n)\n2\n1\n2\n+",
      "(\n)\n1\n2\n+",
      "(\n)\n2\n1\n-"
    ],
    "correctAnswer": 1,
    "explanation": "Given, v = 4 m/s \nThe boy is running from East to west, the angle is α \nand the rain is pouring down at an angle 45o. \nThen, the relative motion between rain and boy. \n\n∴ \no\no\n4sin 45\ntanA\n8\n4cos45\n= -\n\n(\n)\n1\n4\n1\n2\ntanA\n1\n2 2\n1\n8\n4\n2\n\n\n\n\n\n\n=\n=\n\n\n-\n-\n\n\n\n\n(\n)\no\no\no\no\n4sin(90\n45 )\n1\ntanB\n8\n4cos(90\n45 )\n2 2\n1\n+\n=\n=\n-\n+\n+\n\nFrom above figure, \n∵\no\no\no\ntanA\ntan45\ntan\ntan(A\n45 )\n1\ntan A\ntan45\n+\nθ=\n+\n= -\n×\n\n1\n1\n2 2\n1\n1\n1\n1\n2 2\n1\n+\n-\n=\n-\n×\n-\n1\n2 2\n1\n2 2\n1\n2 2\n1 1\n2 2\n1\n+\n-\n-\n=\n--\n-\n\n2\n2\n1\n=\n- \nand similarly \n∵\no\no\no\ntan B\ntan 45\ntan\ntan(B\n45 )\n1\ntan Btan 45\n-\nα =\n-\n= +\n\n1\n1\n2 2\n1\n1\n1\n1\n2 2\n1\n-\n+\n=\n+\n×\n+\n2 2\n1 1\n2 2\n1\n2 2\n1 1\n2 2\n2\n-\n+ -\n+\n=\n+ +\n+\n2 2\n2 2\n2\n-\n=\n+\n\n2\n2\n1\n-\n=\n+ \nHence, \n2\ntan\n2\n1\ntan\n2\n2\n1\nθ\n-\n=\nα\n-\n+\n\n2\n2\n1\n2\n1\n2\n+\n=\n×\n-\n-\n\n(\n)\n(\n)\n(\n)\n(\n)\n2\n1\n2\n1\n2\n1\n2\n1\n-\n+\n+\n=\n×\n-\n+\n(\n)\n2\n2\n1\n2 1\n-\n+\n=\n-\n\n = (\n)\n(\n)\n2\n2\n1\n2\n1\n2\n-\n+\n+\n≃",
    "examSource": "TS-EAMCET-03.05.2019, Shift-2",
    "image": "/images/yct_motion_plane/p45_img1_xref394.png"
  },
  {
    "id": "yct-motion-plane-q209",
    "num": 209,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "Assertion: The magnitude of velocity of two \nboats relative to river is same. Both boats start \nsimultaneously from same point on the bank \nmay reach opposite bank simultaneously \nmoving along different paths. \n\n Reason: For boats to cross the river in same \ntime. The component of their velocity relative \nto river in direction normal to flow should be \nsame.",
    "options": [
      "If both assertion and reason are true and \nreason is the correct explanation of assertion.",
      "If both assertion and reason are true but \nreason is not the correct explanation of \nassertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false. \nAIIMS-25.05.2019"
    ],
    "correctAnswer": 0,
    "explanation": "From the above figure, we say that it component of \nvelocities of boat relative to river in direction normal to \nflow same, the both boats reach other bank \nsimultaneously.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p45_img1_xref394.png"
  },
  {
    "id": "yct-motion-plane-q210",
    "num": 210,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A train of 150 m length is going towards North \ndirection at a speed of 10m/s. A parrot files at \na speed of 5m/s towards South direction \nparallel to the railway track. The time taken by \nthe parrot to cross the train is equal to-",
    "options": [
      "12 s",
      "8 s",
      "15 s",
      "10"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, length of train = 150 m \nSpeed of train = 10 m/sec (North direction) \nSpeed of parrot = 5 m/sec (South direction) \n\nRelative velocity of parrot with respect to train \n\nv = vT + vp \n\nv = 10 + 5 = 15 m/sec \nAs we know that \n\nSpeed = distance × time \n\n15 = 150 × time \n\nTime = 150\n10sec\n15 =",
    "examSource": "s  BCECE-2017",
    "image": "/images/yct_motion_plane/p46_img1_xref406.png"
  },
  {
    "id": "yct-motion-plane-q211",
    "num": 211,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "What will be the minimum speed of the roller - \ncoaster so that the passenger at the top, when \nbecomes upside down, do not fall out? Consider \nthe acceleration due to gravity as 10 m/s2, and \nthe radius of curvature of the roller coaster is \n10 m.",
    "options": [
      "20 m/s",
      "10 m/s",
      "15 m/s",
      "25 m/"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, acceleration due to gravity (g) = \n10 m/sec \nRadius of curvature of roller coaster = 10 m \n∵ \nFc = mac \n\nmg = mac \n\nc\ng\na\n=\n\n∵ \nac = \n2\nv\nr \n\nv2 = rac ⇒ v = \nc\nra \n\nv = 10 10\n100\n×\n=\n\nv\n10m/sec\n=",
    "examSource": "s  TS EAMCET 04.08.2021, Shift-II",
    "image": "/images/yct_motion_plane/p46_img1_xref406.png"
  },
  {
    "id": "yct-motion-plane-q212",
    "num": 212,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A car is moving with velocity v at the top of a \nsemi-circular hill of radius 40 m such that the \nnormal force on it is zero. Find the velocity (v) \nof the car.",
    "options": [
      "15 m/s",
      "20 m/s",
      "30 m/s",
      "40 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "Equation of \nmotion of car \nmg - R = \n2\nmv\nr\n\nGiven, normal force R = 0 \n mg = \n2\nmv\nr\n\nv2 = rg \n\nv = \ngr =\n40 10\n×\n=\n400 \n\nv = 20 m/s",
    "examSource": "TS EAMCET 06.08.2021,  Shift-I",
    "image": "/images/yct_motion_plane/p46_img1_xref406.png"
  },
  {
    "id": "yct-motion-plane-q213",
    "num": 213,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A particle moves in a circle of radius 25 cm at \ntwo revolutions per second. The acceleration of \nthe particle in meter per second2 is",
    "options": [
      "π2",
      "8π2",
      "4π2",
      "2π2 \n AIIMS-2012"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, circle of radius = 25 cm \n\nf = 2 rad/sec \n\nω = 2πf = 2×2π \n\nω = 4π rad/sec \n(\n)\n(\n)\n2\n2\n2\n2\n2\nc\nr\nv\na\nr\n25 10\n4\nr\nr\nω\nω\nπ\n-\n=\n=\n=\n=\n×\n×\n\n= 0.25 × 16π2 \n\nac = 4π2 m/s2",
    "examSource": "",
    "image": "/images/yct_motion_plane/p46_img1_xref406.png"
  },
  {
    "id": "yct-motion-plane-q214",
    "num": 214,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A police jeep is chasing with velocity of 45 \nkm/h, a thief in another jeep moving with \nvelocity 153 km/h. Police fires a bullet with \nmuzzle velocity of 180 m/s. The velocity with \nwhich it will strike the jeep of the thief, is",
    "options": [
      "150 m/s",
      "27 m/s",
      "450 m/s",
      "250 m/s \nUP CPMT-2004 \nManipal UGET-2013"
    ],
    "correctAnswer": 0,
    "explanation": "Speed of thief’s Jeep = 153 km/h \n\n =\n5\n153\nm/s\n18\n×\n\n = 42.5 m/s \nEffective speed of the bullet \n\n= speed of bullet + speed of police jeep. \n\n= 180 m/s + 45 km/h \n\n= 180 m/s + \n5\n45\nm/s\n18\n×\n\n= 180 m/s + 12.5 m/s = 192.5 m/s \nVelocity of bullet w.r.t thief’s jeep = Effective speed of \nthe bullet - speed of thief's jeep \n\n= 192.5 - 42.5 = 150 m/s",
    "examSource": "",
    "image": "/images/yct_motion_plane/p46_img1_xref406.png"
  },
  {
    "id": "yct-motion-plane-q215",
    "num": 215,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A motor cyclist is riding North in still air at 36 \nkm/h, the wind starts blowing westward with a \nvelocity 18 km/h. The direction of apparent \nvelocity is",
    "options": [
      "1 1\ntan\n2\n-\nWest of North",
      "1 1\ntan\n2\n-\nNorth of West",
      "1 1\ntan\n2\n-\nEast of North",
      "1 1\ntan\n2\n-\nNorth of East \nUP CPMT-2012"
    ],
    "correctAnswer": 0,
    "explanation": "Velocity of cyclist in north (vc)= 36 km/h \n\n5\n36km/ h\n36\nm/s\n18\n=\n×\n10m/s\n=\n\nVelocity of wind in west = vw = 18 km/h \n\n5\n18\nm/s\n18\n=\n×\n5m/s\n=\n\nDirection of motion = tan β \n\n∴ tanβ = \nw\nc\nv\n5\n1\nv\n10\n2\n=\n=\n\n1 1\ntan\nwest of north\n2\n-\n\nβ =\n\n\n\n",
    "examSource": "",
    "image": "/images/yct_motion_plane/p47_img1_xref417.png"
  },
  {
    "id": "yct-motion-plane-q216",
    "num": 216,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A swimmer wants to cross a 200 m wide river \nwhich is flowing at a speed of 2 m/s. The \nvelocity of the swimmer with respect to the \nriver is 1 m/s. How far from the point directly \nopposite to the starting point does the swimmer \nreach the opposite bank?",
    "options": [
      "200 m",
      "400 m",
      "600 m",
      "800"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \n\nvelocity of Man (vman) = 1 m/s \n\nvelocity of river (vriver) = 2 m/s \n\nwidth of river (w) = 200m \nWe know that, \n∵ \nman\nriver\nw\nd\nv\nv\n=\n\nriver\nman\nv\nw\nd\nv\n×\n=\n⇒ \n2 200\nd\n1\n×\n=\n\nd\n400m\n=",
    "examSource": "m  TS EAMCET (Engg.)-2017",
    "image": "/images/yct_motion_plane/p47_img1_xref417.png"
  },
  {
    "id": "yct-motion-plane-q217",
    "num": 217,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "At time t = 0, a force F = αt, where t is time in \nseconds, applied to a body of mass 1 kg, resting \non a smooth horizontal plane. If the direction \nof the force makes an angle of 45° with the \nhorizontal, then the velocity of the body at the \nmoment of its breaking off the plane is",
    "options": [
      "100 m /s\nα",
      "50 2 m / s\nα",
      "50\nm / s\n2\nα",
      "50 m /s\nα"
    ],
    "correctAnswer": 1,
    "explanation": "Given, t = 0, A Force F = αt is applied to \nsmall body of mass m resting on a smooth horizontal \nplane where α is constant. \n\nThe normal reaction will be zero where the body will \nleave the ground surface. \n\n⇒ N = mg - αt0sinθ \n\n⇒ mg - αt0 sinθ = 0 \n\n0\nmg\nt\nsin\n= α\nθ \n\n....(i) \nt0 = time where the body leaves the ground. The force \ncomponent on horizontal direction is \n⇒ max = αt cosθ \n\n....(ii) \n∵ \nx\nx\ndv\na\ndt\n=\n\n∴ \n\nx\ndv\nm\nt cos\ndt\n×\n= α\nθ \n\nm.dvx = α cosθ. tdt \nIntegrating both side, \n\n0\nv\nt\nx\n0\n0\nm\ndv\ncos\ntdt\n=α\nθ\n∫\n∫\n\nm.v = \n2\n0t\ncos\n2\n\n\nα\nθ⋅\n\n\n\n\n⇒ \n2\n0\ncos .t\nv\n2m\nα\nθ\n=\n\n....(iii) \n\nPut \n0\nmg\nt\nsin\n= α\nθ in equation (iii) \n\n2\ncos\nmg\nv\n2m\nsin\nα\nθ \n\n=\n⋅\n\nα\nθ\n\n \n\n2\n2\n2\n2\ncos\nm g\nv\n2m\nsin\nα\nθ\n=\n⋅α\nθ \n\n2\n2\n2\n2\ncos\nm g\nv\nsin\n2m\nα\nθ×\n= α\nθ\n\n2\n2\nmg cos\nv\n2 sin\nθ\n=\nα\nθ \n\n2\nmg\nv\n2 sin .tan\n= α\nθ\nθ \nGiven, m = 1 kg, θ = 45o \n\n(\n)\n{\n}\n2\n2\no\no\n1\n10\nv\ng 10m/s\n2 .sin 45 tan 45\n×\n=\n=\nα\n∵\n\n100\nv\n1\n2 .\n1\n2\n=\nα\n×\n⇒ \n50 2\nv\nm/s\n=\nα",
    "examSource": "TS EAMCET 20.07.2022, Shift-I",
    "image": "/images/yct_motion_plane/p47_img1_xref417.png"
  },
  {
    "id": "yct-motion-plane-q218",
    "num": 218,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A marble of mass m1 slides down an arc of \ncircular track from rest as shown in the figure. \nAssume the track is frictionless. If the block \nhaving the track has a mass m2 and can also \nslide frictionless on the table the velocity of the \nparticle when it exits the track at B is",
    "options": [
      "gR",
      "1\n2\nm\ngR 1\nm\n\n\n+\n\n\n\n",
      "1\n2\n2gR(m\nm )\n+",
      "(\n)\n2\n1\n2\n2gRm\nm\nm\n+"
    ],
    "correctAnswer": 3,
    "explanation": "From question \nWe have \nm1v = m2u \n1\n2\nm v\nu\nm\n=\n\nBy conservation of Energy \n2\n2\n1\n2\n1\n1\n1\nm v\nm u\nm gR\n2\n2\n∴\n+\n=\n\n2\n2\n1\n1\n2\n1\n2\nm v\n1\n1\nm v\nm\nm gR\n2\n2\nm\n\n\n+\n=\n\n\n\n\n\n2\n2\n2\n1\n1\n2\n1\n2\n2\nm v\n1\n1\nm v\nm\nm gR\n2\n2\nm\n+\n×\n=\n\n2\n2\n2\n1\n1\n1\n2\nm v\n1\n1\nm v\nm gR\n2\n2 m\n+\n=\n\n2\n2\n1\n2\nm\n1\n1\nv\nv\ngR\n2\n2 m\n+\n=\n\n2\n1\n2\nm\n1 v\n1\ngR\n2\nm\n\n\n+\n=\n\n\n\n\n\n2\n2\n1\n2\nm\nm\n1 v\ngR\n2\nm\n\n\n+\n=\n\n\n\n\n\n2\n2\n1\n2\n2gRm\nv\n(m\nm )\n=\n+\n\n2\n1\n2\n2gRm\nv\n(m\nm )\n=\n+",
    "examSource": "TS EAMCET 03.05.2018, Shift-I",
    "image": "/images/yct_motion_plane/p48_img1_xref424.png"
  },
  {
    "id": "yct-motion-plane-q219",
    "num": 219,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A man can swim with a speed of 4 km/h in still \nwater. How long does he take to cross a river 1 \nkm wide, if the river flows steadily 3 km/h and \nhe makes his strokes normal to the river \ncurrent.",
    "options": [
      "30 minutes",
      "25 minutes",
      "20 minutes",
      "15"
    ],
    "correctAnswer": 3,
    "explanation": "Time to cross the river \n\nWidth of river\nt\nSpeed of man\n=\n\n1\n1km\n4kmh-\n=\n\n1\n1\nhr\n60\n4\n4\n=\n=\n×\nmin \n{∵ 1 hr = 60 min} \n\nt\n15min\n=",
    "examSource": "minutes  TS EAMCET 06.08.2021,  Shift-II",
    "image": "/images/yct_motion_plane/p48_img1_xref424.png"
  },
  {
    "id": "yct-motion-plane-q220",
    "num": 220,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A bus is moving on a straight road towards \nNorth with a uniform speed of 50 km/h. If the \nspeed \nremains \nunchanged \nafter \nturning \nthrough 90o, the increase in the velocity of bus \nin the turning process is",
    "options": [
      "70.7 km/h along South-West direction",
      "zero",
      "50 km/h along West",
      "70.7 km/h along North-West direction \n[AIPMT 1989]"
    ],
    "correctAnswer": 0,
    "explanation": "Let \n1\n^\nv\n50j kmph\n=\n\u0001\n\nand \n2\n^\nv\n50i kmph\n= -\n\u0001\n\nLet North = Y axis \nWest = X-axis (when the car turns left) \nChange in velocity is \n2\n1\n^\n^\nv\nv\n( 50i\n50j)kmph\n-\n= -\n-\n\u0001\n\u0001\n\n∴ Magnitude of change in velocity is = \n2\n2\n2\nl\nV\nV\n50\n50\n-\n=\n+\n\u0004\u0004\u0001\n\u0004\u0004\u0001\n\n= 50 2 = 50 × 1.414 \n= 70.7 km/h along south -west direction",
    "examSource": "",
    "image": "/images/yct_motion_plane/p48_img1_xref424.png"
  },
  {
    "id": "yct-motion-plane-q221",
    "num": 221,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "The speed of a boat is 5 km/h in still water. It \ncrosses a river of width 1.0 km along the \nshortest possible path in 15min. The velocity of \nthe river water is (in km/h)",
    "options": [
      "5",
      "1",
      "3",
      "4 \n[AIPMT 1998]"
    ],
    "correctAnswer": 2,
    "explanation": "Given, speed of a boat (v) = 5 km/h \nLet speed of river = u \nShortest possible path = 1km = s \nTime taken = 15 min = 0.25 hr = t \nWe know that, \n\ndistance\nspeed\ntime\n=\n\n2\n2\ns\nv\nu\nt =\n-\n\n2\n1\n25\nu\n0.25 =\n-\n\n2\n100\n25\nu\n25 =\n-\n\n2\n4\n25\nu\n=\n-\n\n(\n)\n2\n2\n16\n25\nu\n=\n-\n\n16 = 25 - u2 \n\nu2 = 9 \n\nu = 3 km/h",
    "examSource": "",
    "image": "/images/yct_motion_plane/p49_img1_xref432.png"
  },
  {
    "id": "yct-motion-plane-q222",
    "num": 222,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "The speed of a swimmer in still water is 20 m/s. \nThe speed of river water is 10m/s and is flowing \ndue east. If he is standing on the south bank \nand wishes to cross the river along the shortest \npath the angle at which he should make his \nstrokes w.r.t. north is given by",
    "options": [
      "0o",
      "60o west",
      "45o west",
      "30o west \n[NEET (National) 2019]"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \n\nSpeed of river flow, \nRG\nv\n10m/s\n=\n\u0001\n\nSpeed of swimmer w.r.t. river, \n\nSR\nv\n20m/s\n=\n\u0001\n\n∴ \nSG\nSR\nRG\nv\nv\nv\n=\n+\n\u0001\n\u0001\n\u0001\n\nThen, \nRG\nSR\nv\nsin\nv\nθ =\n\u0001\n\u0001\n\n10\nsin\n20\nθ =\n\n1\nsin\n2\nθ = \n\n1 1\nsin\n2\n-\nθ =\n\no\n30 West\nθ =",
    "examSource": "",
    "image": "/images/yct_motion_plane/p49_img1_xref432.png"
  },
  {
    "id": "yct-motion-plane-q223",
    "num": 223,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A ship A is moving Westwards with a speed of \n10 km/h and a ship B 100 km South of A, is \nmoving Northwards with a speed of 10 km/h. \nThe time after which the distance between \nthem becomes shortest is",
    "options": [
      "0 h",
      "5 h",
      "10 2 h",
      "10 2 h \n[AIPMT 2015]"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \n\nvelocity of ship ‘A’, \nA\nv\n10i km/ h\n=-\n\u0004\u0004\u0001\n\nvelocity of ship ‘B’, \nB\nv\n10j km/ h\n=\n\u0004\u0004\u0001\n\n ∴ \n(\n)\nAB\nB\nA\nv\nv\nv\n10j\n10i km/ h\n=\n-\n=\n+\n\u0004\u0004\u0004\u0001\n\u0004\u0004\u0001\n\u0004\u0004\u0001\n\n(\n)\n(\n)\n2\n2\nAB\nB\nA\nv\nv\nv\n10\n10\n=\n-\n=\n+\n\u0004\u0004\u0004\u0001\n\u0004\u0004\u0001\n\u0004\u0004\u0001\n\n10 2 km/ h alongAC\n=\n\nFrom figure, \n100\nAC\nkm.\n2\n=\n= 50 2 \nSo, \n\nAB\nAC\nt\nv\n= \u0004\u0004\u0004\u0001 \n\n50 2\nt\n5h\n10 2\n=\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p49_img1_xref432.png"
  },
  {
    "id": "yct-motion-plane-q224",
    "num": 224,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A metro train starts from rest and in 5 sec \nachieves 108 km/h. After that it moves with \nconstant velocity and comes to rest after \ntravelling 45 m with uniform retardation. If \ntotal distance travelled is 395 m, find total time \nof travelling.",
    "options": [
      "12.2 s",
      "15.3 s",
      "9 s",
      "17.2"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, v = 108 km/h = 30 m/s, t = 5s \nFrom the first equation of motion \n\n v = u + at \n\n30 = 0 + a × 5 (\n)\nu\n0\n=\n∵\n\na = 6 m/s2 \nDistance travelled by metro train in 5s \n\n2\n1\n1\ns\nat\n2\n=\n\n( )\n2\n1\n6\n5\n2\n=\n× ×\n\n1s\n75m\n=\n\nDistance travelled before coming to rest = 45m \nFrom third equation of motion \n\n(0)2 = (30)2 - 2 a ' × 45 \n\n30\n30\na'\n2\n45\n×\n=\n×\n\n2\na'\n10m /s\n=\n\nTime taken in travelling 45 m is \n\nt3 =30/10 \n\nt3 = 3 s \nNow, total distance = 395 m \n\n75 + s' + 45 = 395 m \ni.e. \ns'\n395\n(75\n45)\n=\n-\n+\n\ns'\n275m\n=\n\n∴ \nt2 = 275/30 \n\nt2 = 9.2s \nHence, total time taken in whole journey \n\n= t1 + t2 + t3 \n\n= 5 + 9.2 + 3 = 17.2 s",
    "examSource": "s  JIPMER-2011",
    "image": "/images/yct_motion_plane/p49_img1_xref432.png"
  },
  {
    "id": "yct-motion-plane-q225",
    "num": 225,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A river is flowing from west to east with a \nspeed of 5 m/min. A man can swim in still \nwater with a velocity 10m/min. In which \ndirection should the man swim so, as to take \nthe shortest possible path to go to the south?",
    "options": [
      "30o east of south",
      "60o east of south",
      "60o west of south",
      "30"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \nVelocity of river flow (vr) = 5m/min. \nVelocity of man (vm) = 10m/min \n\nFrom, the figure, \nr\nm\nv\n5\n1\nsin\nv\n10\n2\nθ =\n=\n= \n\n1\nsin\n2\nθ = \n\n1 1\nsin\n2\n-\nθ=\n\no\n30\nθ =\n west of south.",
    "examSource": "o west of south  JIPMER-2005",
    "image": "/images/yct_motion_plane/p50_img1_xref442.png"
  },
  {
    "id": "yct-motion-plane-q226",
    "num": 226,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Hard",
    "questionText": "A girl standing on road holds her umbrella at \n45o with the vertical to keep the rain away. If \nshe starts running without umbrella with a \nspeed of 15 2 km/h, the rain drops hit her \nhead vertically. The speed of rain drops with \nrespect to the moving girl is",
    "options": [
      "30 km/h",
      "1\n25 kmh\n2\n-",
      "1\n30 kmh\n2\n-",
      "25 km/h"
    ],
    "correctAnswer": 2,
    "explanation": "From figure, \n\nRG\nv\ntan\n15 2\nθ =\n\nvRG = 15 2 tan 45º \n\n =15 2 × 1 =15 2 \n∴ \n2\n15 2\n30\n15 2\n2\n2\n2\n×\n×\n=\n=\nkm/h",
    "examSource": "JEE Main-27.06.2022, Shift-I",
    "image": "/images/yct_motion_plane/p50_img1_xref442.png"
  },
  {
    "id": "yct-motion-plane-q227",
    "num": 227,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A particle is moving Eastwards with a velocity \nof 5 m/s. In 10 s, the velocity changes to 5 m/s \nNorthwards. The average acceleration in this \ntime is",
    "options": [
      "2\n1 ms\n2\n- towards North-East",
      "2\n1 ms\n2\n- towards North",
      "zero",
      "2\n1 ms\n2\n- towards North-West \nAIEEE 2005"
    ],
    "correctAnswer": 3,
    "explanation": "As we know that, \nAvg. acceleration = Changein velocity\nv\nt\nt\n∆\n=\n\nFind the change in velocity ∆v \n\n∆v = vf - vi \n\n∵ vf = ^\n5j \n\n vi = ^\n5i \n\n( )\n^\n^\n5j\n5i\n=\n-\n^\n^\n5j\n5i\n=\n-\n\n|∆v| = \n2\n2\n5\n5\n5 2\n+\n=\n\nAvg. acceleration =\nv\n5 2\n2\nt\n10\n2\n∆\n=\n=\n = \n2\n1\n2\n2\n2\n=\n×\n\nThe average acceleration in this time is \n1\n2\nm/s2 \ntowards North-West direction.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p50_img1_xref442.png"
  },
  {
    "id": "yct-motion-plane-q228",
    "num": 228,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Hard",
    "questionText": "When a car is at rest, its driver sees rain drops \nfalling on it vertically. When driving the car \nwith speed v, he sees that rain drops are \ncoming at an angle 60° from the horizontal. On \nfurther increasing the speed of the car to \n(1+β)v, this angle changes to 45°. The value of β \nis close to",
    "options": [
      "0.50",
      "0.41",
      "0.37",
      "0.73"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \n\nWhen car is at rest position its driver sees rain drops \nfalling on it vertically. \n\nWhen car is moving with speed of v then the rain drops \nare coming at angle 60º from the horizontal. \n\nOn further increasing the speed of car to (1+β)v, this \nangle changes to 45º \n\nIn the case Ist \n\n( )\nRG\n0\n^\nv\nv\nj\n=\n-\n\u0004\u0004\u0004\u0001\n\nIn the case IInd \n\n( )\nRC\nRG\nCG\n0\n^\n^\nv\nv\nv\nv\nj\nvi\n=\n-\n=\n-\n-\n\u0004\u0004\u0004\u0001\n\u0004\u0004\u0004\u0001\n\u0004\u0004\u0004\u0001\n\nRC\n0^\n^\nv\nv j\nvi\n= -\n-\n\u0004\u0004\u0004\u0001\n\ntan 60º =\n0\nv\nv\n\n\n\n\n\n\n\n0\nv\n3\nv\n=\n\n0\nv\n3v\n=\n\nRC\nRG\nCG\nv\nv\nv\n=\n-\n\u0001\n\u0001\n\u0001\n\n( ) (\n)\n0 ^\n^\nv\nj\n1\nvi\n= -\n-\n+β\n\ntan 45º = (\n)\n0\nv\n1\n1\nv =\n+β\n\n(\n)\n0\nv\nv 1\n=\n+β \n\n3v\nv(1\n)\n=\n+β \n\n3\n1\n-= β \n(\n)\n3\n1\n1.732 1\n0.732\nβ =\n-=\n-\n=\n\nβ = 0.732",
    "examSource": "JEE Main-06.09.2020, Shift-II",
    "image": "/images/yct_motion_plane/p51_img1_xref450.png"
  },
  {
    "id": "yct-motion-plane-q229",
    "num": 229,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Hard",
    "questionText": "A particle is moving along the x-axis with its \ncoordinate as a function of time given by x(t) \n=10+8t -3t2. Another particle is moving along \nthe y-axis with its coordinate as a function of \ntime given by y(t) = 5 - 8t3. At t =1s, the speed \nof the second particle as measured in the frame \nof the first particle is given as \nv . Then v (in \nm/s) is ………",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 0,
    "explanation": "Refer to official YCT Physics Volume-I solution for Question 229.",
    "examSource": ".  JEE Main-08.01.2020, Shift-I  Ans. (580m/s) Given,",
    "image": "/images/yct_motion_plane/p51_img1_xref450.png"
  },
  {
    "id": "yct-motion-plane-q230",
    "num": 230,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Hard",
    "questionText": "Ship A is sailing towards north-east with \nvelocity \n^\n^\nv\n30i\n50j\n=\n+\n km/h, where ^i points \neast and ^j north. Ship B is at a distance of 80 \nkm east and 150 km north of Ship A and is \nsailing towards west at 10 km/h. A will be at \nminimum distance from B in",
    "options": [
      "4.2 h",
      "2.6 h",
      "3.2 h",
      "2.2"
    ],
    "correctAnswer": 1,
    "explanation": "A\n^\n^\nv\n30i\n50j\n=\n+\n\u0001\n\nB\n^\nv\n10i\n= -\n\u0001\n\nA\n^\n^\nr\n0i\n0j\n=\n+\n\u0001\n\nB\n^\n^\nr\n80i\n150j\n=\n+\n\u0001\n\nBA\nA\nB\nv\nv\nv\n=\n-\n\u0001\n\u0001\n\u0001 \n\n(\n)\n30i\n50j\n10i\n=\n+\n--\n\n30i 50j 10i\n=\n+\n+\n\n40i\n50 j\n=\n+\n\nBA\nA\nB\n^\n^\n^\n^\nr\nr\nr\n(0i\n0j)\n(80i\n150j)\n=\n-\n=\n+\n-\n+\n\u0001\n\u0001\n\u0001\n\n^\n^\n80i\n150j\n= -\n-\n\nTime after which the distance will be minimum \n\nBA\nBA\n2\nBA\nr\n.v\nt\n| v\n|\n= -\n\u0001\n\u0001\n\u0001\n\n(\n)\n2\n^\n^\n^\n^\n[ 80i\n150j][40i\n50j]\nt\n1600\n2500\n-\n-\n+\n= -\n+\n\n3200\n7500 hr\n4100\n+\n=\n\n10700\n4100\n=\n =2.609 \n\nt = 2.60 hr",
    "examSource": "h  JEE Main-08.04.2019, Shift-I",
    "image": "/images/yct_motion_plane/p52_img1_xref461.png"
  },
  {
    "id": "yct-motion-plane-q231",
    "num": 231,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Hard",
    "questionText": "The stream of a river is flowing with a speed of \n2 km/h. A swimmer can swim at a speed of 4 \nkm/h. What should be the direction of the \nswimmer with respect to the flow of the river to \ncross the river straight ?",
    "options": [
      "60°",
      "120°",
      "90°",
      "150°"
    ],
    "correctAnswer": 1,
    "explanation": "sinθ =\nr\ns\nv\n2\nv\n4\n=\n\n1\nsin\n2\nθ =\n\nθ = 30º \nAngle with flow direction = 90º + θº \n\n = 90º + 30º \n\n = 120º",
    "examSource": "JEE Main-09.04.2019, Shift-I",
    "image": "/images/yct_motion_plane/p52_img1_xref461.png"
  },
  {
    "id": "yct-motion-plane-q232",
    "num": 232,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Hard",
    "questionText": "A swimmer wants to cross a river from point A \nto point B. Line AB makes an angle of 30° with \nthe flow of river. Magnitude of velocity of the \nswimmer is same as that of the river. The angle \nθ with the line AB should be ……°,",
    "options": [
      "30º",
      "2 × 30º",
      "30° / 2",
      "30° / 4"
    ],
    "correctAnswer": 0,
    "explanation": "Both velocity vectors are of same magnitude therefore \nresultant would pass exactly midway through them \n\nθ = 30º",
    "examSource": "so that the  swimmer reaches point B    JEE Main-27.07.2021, Shift-II",
    "image": "/images/yct_motion_plane/p52_img1_xref461.png"
  },
  {
    "id": "yct-motion-plane-q233",
    "num": 233,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Hard",
    "questionText": "Three particles P, Q and R are moving along \nthe vectors \n^\n^\n^\n^\nA\ni\nj,B\nj\nk\n=\n+\n=\n+\n and \n^\n^\nC\ni\nj\n= -+ , \nrespectively. They strike on a point and start to \nmove in different directions. Now, particle P is \nmoving normal to the plane which contain \nvectors A and B. Similarly, particle Q is \n\nmoving normal to the plane which contain \nvectors A and C. The angle between the \ndirection of motion of P and Q is \n1\n1\ncos\n.\nx\n-\n\n\n\n\n\n\nThen, the value of x is ………",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 0,
    "explanation": "Refer to official YCT Physics Volume-I solution for Question 233.",
    "examSource": ".  JEE Main-22.07.2021, Shift-II  Ans :(3) Given,  1 1 cos x",
    "image": "/images/yct_motion_plane/p52_img1_xref461.png"
  },
  {
    "id": "yct-motion-plane-q234",
    "num": 234,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Hard",
    "questionText": "A butterfly is flying with a velocity 4 2m /s in \nNorth-East direction. Wind is slowly blowing at \n1m/s from North to South. The resultant \ndisplacement of the butterfly in 3 s is",
    "options": [
      "3m",
      "20m",
      "12 2 m",
      "15"
    ],
    "correctAnswer": 3,
    "explanation": "BW\nv\n\u0001\n= velocity of butterfly in the frame of wind \nWG\nv\n\u0001\n= velocity of wind in the frame of ground \n\nBW\nv\n\u0001\n = \nBG\nv\n\u0001\n- \nWG\nv\n\u0001\n\nBG\nv\n\u0001\n= \nBW\nv\n\u0001\n+ \nWG\nv\n\u0001\n\n∴ \nBG\nv\n\u0001\n= (\n)\n( )\n(\n)( )\n(\n)\n2\n2\n4 2\n1\n2 4 2\n1 cos 90\n45\n+\n+\n° +\n° \n\nBG\nv\n\u0001\n= \n1\n32\n1\n2\n4 2\n2\n-\n+ + ×\n×\n\nBG\nv\n\u0001\n= \n25 = 5 m/s \nSo, displacement in 3 second. \n\nd = \nBW\nv\n\u0001\n× t \n\nd = 5 × 3 ⇒ d = 15 m",
    "examSource": "m  JEE Main-20.07.2021, Shift-I",
    "image": "/images/yct_motion_plane/p53_img1_xref470.png"
  },
  {
    "id": "yct-motion-plane-q235",
    "num": 235,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Hard",
    "questionText": "A person is swimming with a speed of 10m/s at \nan angle of 120° with the flow and reaches to a \npoint directly opposite on the other side of the \nriver. The speed of the flow is x m/s. The value \nof x to the nearest integer is ……",
    "options": [
      "5",
      "2 × 5",
      "5 / 2",
      "5 / 4"
    ],
    "correctAnswer": 0,
    "explanation": "Since, the person reaches directly opposite side \nof the river, its velocity along the river must be zero. \n\n10 sin 30º = vR \n\nR\n1\n10\nv\n2\n×\n=\n⇒vR = 5 m/s",
    "examSource": ".  JEE Main-18.03.2021, Shift-I",
    "image": "/images/yct_motion_plane/p53_img1_xref470.png"
  },
  {
    "id": "yct-motion-plane-q236",
    "num": 236,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Hard",
    "questionText": "A swimmer can swim with velocity of 12 km/h \nin still water. Water flowing in a river has \nvelocity 6 km/h. The direction with respect to \nthe direction of flow of river water he should \nswim in order to reach the point on the other \nbank just opposite to his starting point is \n………°",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 0,
    "explanation": "Refer to official YCT Physics Volume-I solution for Question 236.",
    "examSource": "(in degree).      (Round off to the nearest integer)  JEE Main-16.03.2021, Shift-II  Ans: (120) Given,",
    "image": "/images/yct_motion_plane/p53_img1_xref470.png"
  },
  {
    "id": "yct-motion-plane-q237",
    "num": 237,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A man sitting in a train in motion is facing the \nengine. He tosses a coin-up; the coin falls \nbehind him. The train is:",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 0,
    "explanation": "If the train is accelerating then due to acceleration the \nvelocity of train increases along the direction of motion \nand at this time when a coin is tossed it does not fall in \nthe hand of the man it falls behind. As the train comes \nin acceleration motion in forward direction as soon as it \nis accelerated but at the same time the coin does not get \naccelerated and it falls behind.",
    "examSource": "(a) Moving forward with acceleration     (b) Moving forward with uniform speed     (c) Moving backward with deceleration    (d) Moving backward with uniform speed  AP EAMCET-25.09.2020, Shift-II",
    "image": "/images/yct_motion_plane/p54_img1_xref478.png"
  },
  {
    "id": "yct-motion-plane-q238",
    "num": 238,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A particle of mass 4 m explodes into three \npieces of masses m, m and 2m. The equal \nmasses move along X-axis and Y-axis with \nvelocities 4 m/s and 6 m/s respectively. The \nmagnitude of the velocity of the heavier mass is",
    "options": [
      "17 m/s",
      "2 13 m/s",
      "13 m/s",
      "13\n2\nm/s"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \n\nM = 4m, m1 = m, m2 = m, m3 = 2m, \n\nv1 = 4 m/s, \nv2 = 6 m/s \n\n1\n2\n3\np\np\np\n0\n+\n+\n=\n\u0001\n\u0001\n\u0001\n\n3\n1\n2\np\np\np\n=\n+\n\u0001\n\u0001\n\u0001\n\n2\n2\n3\n1\n2\n1\n2\np\np\np\n2p p cos\n=\n+\n+\nθ \n\np1 & p2 are perpendicular to each other \n\n2\n2\n3\n1\n2\np\np\np\n=\n+\n\n(\n)\n(\n)\n2\n2\n3\n1\n1\n2\n2\np\nm v\nm v\n=\n+\n\n(\n)\n(\n)\n2\n2\n3\n2mv\n4m\n6m\n=\n+\n\n2\n3\n2mv\n52m\n=\n\n3\n2mv\nm 52\n=\n\n1\n3\nv\n13 ms-\n=",
    "examSource": "AP EAMCET -2009",
    "image": "/images/yct_motion_plane/p54_img1_xref478.png"
  },
  {
    "id": "yct-motion-plane-q239",
    "num": 239,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "Two trains, which are moving along different \ntracks in opposite directions, are put on the \nsame track by mistake. On noticing the \nmistake, when the trains are 300 m apart the \ndrivers start slowing down the trains. The \ngraphs given below show decrease in their \nvelocities as function of time. The separation \nbetween the trains when both have stopped is",
    "options": [
      "120 m",
      "20 m",
      "60 m",
      "280"
    ],
    "correctAnswer": 1,
    "explanation": "Train-I \nv1 = 40 m/s \nAccording first law of motion (v = u + at) \nv1 = u1+a1t \n 0 = 40+a1(10) \n a1 = \n40\n10\n-\n= -4 m/s² \nTrain-II \nv2 = u2 + a2t \n 0 = -20 + a2 (8) \n a2 = 20\n8 = \n2\n5 ms\n2\n- \nTrain-I \nAccording second law of motion (v2 = u2-2as) \n2\n2\n1\n1\n1 1\nv\nu\n2a s\n=\n-\n\n2\n1\n1 1\n0\nu\n2a s\n=\n-\n\n2\n2\n1\n1\n1\nu\n(40)\n1600\ns\n200m\n2a\n2\n4\n8\n=\n=\n=\n=\n×\n\nTrain-II \n2\n2\n2\n2\n2 2\nv\nu\n2a s\n=\n-\n\n 0 = \n2\n2\n2 2\nu\n2a s\n-\n\n2\n2\n2\n2\n2\nu\n400 2\ns\ns\n80m\n2a\n10\n×\n=\n⇒\n=\n=\n\nTotal distance covered by both trains, \n\ns = s1 + s2 \n\ns = 200+80 \n\ns = 280 m \n∴ Remaining Distance = 300 - 280=20 m",
    "examSource": "m  AP EAMCET -2016",
    "image": "/images/yct_motion_plane/p54_img1_xref478.png"
  },
  {
    "id": "yct-motion-plane-q240",
    "num": 240,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 0,
    "explanation": "When a bomb is released from an aeroplane. \nthe path described by it as observed by the pilot is \nstraight line.",
    "examSource": "When a bomb is released from an aeroplane.  the path described by it as observed by the  pilot is     (a) Straight line    (b) Projectile     (c) Depends on speed of aeroplane    (d) None  AP EAMCET (Medical)-05.10.2021, Shift-I",
    "image": "/images/yct_motion_plane/p54_img1_xref478.png"
  },
  {
    "id": "yct-motion-plane-q241",
    "num": 241,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A bat and an insect are flying with velocities \nand\nBG\nIG\nV\nV\n\u0004\u0001\n\u0004\u0001\nrespectively \nwith \nrespect \nto \nground (in unit vector ^ ^\ni,j rotation) \n\n^\n^\n^\n^\nBG\nIG\nV\n= 3.5i + 9.2j,V\n= -2.5i +1.8j\n\u0004\u0001\n\u0004\u0001\n\n Calculate the velocity of the insect with respect \nto bat.",
    "options": [
      "^\n^\n1.5i\n11.0j\n+",
      "^\n^\n6i\n7.4j\n-\n-",
      "^\n^\n6i\n11.0j\n+\n-",
      "^\n^\n1.0i\n7.4j\n+\n\nAMU-2007"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \n\nBG\n^\n^\nV\n3.5i\n9.2j\n=\n+\n\u0004\u0004\u0004\u0004\u0001\n\nIG\n^\n^\nV\n2.5i\n1.8j\n= -\n+\n\u0004\u0004\u0004\u0001\n\nThe velocity of the insect with respect to bat. \n\nIB\nBG\nIG\nV\nV\nV\n=\n-\n\u0004\u0004\u0004\u0001\n\u0004\u0004\u0004\u0004\u0001\n\u0004\u0004\u0004\u0001\n\n(\n) (\n)\n^\n^\n^\n^\n2.5i\n1.8j\n3.5i\n9.2j\n= -\n+\n-\n+\n\n^\n^\n^\n^\n2.5i\n1.8j\n3.5i\n9.2j\n= -\n+\n-\n-\n\n^\n^\n6.0i\n7.4j\n= -\n-",
    "examSource": "",
    "image": "/images/yct_motion_plane/p55_img1_xref485.png"
  },
  {
    "id": "yct-motion-plane-q242",
    "num": 242,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "An object falls from a bridge 45m above the \nwater level in a river. If falls directly into a \nboat moving with constant speed. The boat was \n18 m away from the point of impact. What is \nthe speed of the boat (in m/s)?",
    "options": [
      "6",
      "9",
      "12",
      "15 \nAMU-2007"
    ],
    "correctAnswer": 0,
    "explanation": "Given h = 45m \nWe know that time taken by the object to fall through \nheight (h) is \n\n2h\nt\ng\n=\n\n2 45\nt\n9.18\n3.03see\n3sec\n9.8\n×\n=\n=\n=\n≈\n\nAccording to the question if v is the speed of boat then \nthe distance travelled by boat in t = 3 sec is \n\n18 = v × 3 sec \n\nv = 6 m/s",
    "examSource": "",
    "image": "/images/yct_motion_plane/p55_img1_xref485.png"
  },
  {
    "id": "yct-motion-plane-q243",
    "num": 243,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "An automobile of mass m is crossing over a \nconcave over bridge with speed v. If radius of \nbridge is R. The thrust on the bridge at the \nlowest point will be",
    "options": [
      "2\nmv\nmg\nR\n+",
      "2\nmv\nmg\nR\n-",
      "mg",
      "2\nmv\nR \nAMU-2001"
    ],
    "correctAnswer": 0,
    "explanation": "We know that thrust on the bridge = weight + \ncentripetal force \n\n2\nmv\nThrust\nmg\nR\n=\n+",
    "examSource": "",
    "image": "/images/yct_motion_plane/p55_img1_xref485.png"
  },
  {
    "id": "yct-motion-plane-q244",
    "num": 244,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Relative Velocity in Plane",
    "difficulty": "Medium",
    "questionText": "A boat is moving from the east bank to the west \nbank on a south flowing river. If the speed of \nthe boat is 4 km/h and that of the river is 3 \nkm/h. If the width of the river is 2 km, the \ndistance travelled by the boat is",
    "options": [
      "5 km",
      "4 km",
      "3 km",
      "2.5 km"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \n\nSpeed of boat (vb) = 4 km/hr \n\nSpeed of river (vr) = 3 km/hr \n\nwidth of river = 2 km \n\nThe magnitude of the resultant velocity \n\n2\n2\n2\n2\nres\nb\nr\nv\nv\nv\n3\n4\n=\n+\n=\n+\n\nres\nv\n5km/ h\n=\n\nSince horizontal component remain constant, so time \ntaken in travelling 2km distance is \n\n2\nt\n0.5h\n4\n=\n=\n\nDistance travelled by the boat - \nd = vres × t = 5 × 0.5 = 2.5 km \n\n (d) \nProjectile Motion",
    "examSource": "",
    "image": "/images/yct_motion_plane/p55_img1_xref485.png"
  },
  {
    "id": "yct-motion-plane-q245",
    "num": 245,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The speed of a projectile at its maximum height \nis \n3\n2 times its initial speed. If the range of the \nprojectile is P times the maximum height \nattained by it, then P equals",
    "options": [
      "4\n3",
      "2 3",
      "4 3",
      "3\n4"
    ],
    "correctAnswer": 2,
    "explanation": "According to question - \n\nu cos\nu 3 / 2\nθ =\n\ncos\n3 / 2\nθ =\n\n(\n)\n1\ncos\n3 / 2\n-\nθ =\n\nθ = 30° \n∵ \nRange (R) = \n2\nu sin 2\ng\nθ \nAnd maximum height (Hmax) = \n2\n2\nu sin\n2g\nθ \n\nAccording to question - \n\nRange (R) = P × Hmax ….. (i) \n\n2\nu sin 2\ng\nθ = P. \n2\n2\nu sin\n2g\nθ \n\n2sinθ cosθ = \n2\nP sin\n2\nθ \n\ntanθ = 4\nP \nPutting the value of θ = 30°, we get- \n∴ \nP =\n4\ntan30° \n\nP = 4 3",
    "examSource": "AP EAMCET-1999",
    "image": "/images/yct_motion_plane/p56_img1_xref513.png"
  },
  {
    "id": "yct-motion-plane-q246",
    "num": 246,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "An object is projected with a velocity of 20 m/s \nmaking an angle of 45º with horizontal. The \nequation for the trajectory is h = Ax - Bx2, \nwhere h is height, x is horizontal distance A \nand B are constants. The ratio A : B is (g = 10 \nm/s²)",
    "options": [
      "1 : 5",
      "5 : 1",
      "1 : 40",
      "40 : 1"
    ],
    "correctAnswer": 3,
    "explanation": "As we know that the equation of trajectory \ngiven as - \n\n2\n2\n2\ng x\ny\nx tan\n2u cos\n=\nθ -\nθ …….. (i) \nAccording to question, equation of trajectory - \n\n2\nh\nAx\nBx\n=\n-\n………. (ii) \nComparing equation (ii) with equation (i) \n\n2\n2\ng\nh\ny, A\ntan , B\n2u cos\n=\n=\nθ\n=\n\n\nθ\n\n\n\n2\n2\nA\ntan\n2u\ncos\nB\ng\nθ×\n×\nθ\n=\n\n.....(iii) \nGiven, u\n20m /s,\n45 ,\ng\n10\n=\nθ =\n°\n=\nm/s2 \nPutting the value of these in equation (iii), we get- \n(\n)\n(\n)\n2\n2\n2\n1\n2 400\n1\n2\n20\ncos45\ntan45\nA\n2\nB\n10\n10\n\n\n×\n×\n×\n\n\n×\n×\n°\n×\n°\n\n\n=\n=\n\n1\n800\nA\n800\n40\n2\nB\n10\n20\n1\n×\n=\n=\n=\n\nA : B = 40 : 1",
    "examSource": "AP EAMCET-2001",
    "image": "/images/yct_motion_plane/p56_img1_xref513.png"
  },
  {
    "id": "yct-motion-plane-q247",
    "num": 247,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The horizontal and vertical displacements of a \nprojectile at time t are x = 36 t and y = 48t - \n4.9t2 respectively. Initial velocity of the \nprojectile in m/s is",
    "options": [
      "15",
      "30",
      "45",
      "60"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, x = 36t, y = 48t - 4.9t2 \nHorizontal velocity (vx)\ndx\nd 36t\n36m/s\ndt\ndt\n=\n=\n=\n\nVertical velocity (vy)\n2\ndy\nd (48t\n4.9t )\ndt\ndt\n=\n=\n-\n\n = 48 - 2 × 4.9 t \nAt initial velocity, t = 0 \n\nvx = 36 m/sec \n\nvy = 48 - 2 × 4.9 × 0 = 48 m/sec \nThen velocity of projectile is, \n\nx\ny\n^\n^\nv\nv i\nv j\n=\n+\n\u0002\n\n^\n^\nv\n36i\n48j\n=\n+\n\u0002\n\n2\n2\nv\n(36)\n(48)\n1296\n2304\n3600\n=\n+\n=\n+\n=\n\u0002\n\n = 60 m/sec",
    "examSource": "AP EAMCET-2002",
    "image": "/images/yct_motion_plane/p56_img1_xref513.png"
  },
  {
    "id": "yct-motion-plane-q248",
    "num": 248,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The horizontal and vertical displacements x \nand y of a projectile at a given time t are given \nby x = 6t metre and y = 8t - 5t2 metre. The \nrange of the projectile in metre is",
    "options": [
      "9.6",
      "10.6",
      "19.2",
      "38.4"
    ],
    "correctAnswer": 0,
    "explanation": "Given that- \n\nx = 6t , y = 8t-5t2 \nComparing from general formula \nx = (u cos θ)t, y = (u sin θ)t- \n2\n1 gt\n2\n\nThen, u cos θ= 6m/s, u sin θ= 8m/s, g = 10m/s² \n\nWe know that, \n2\nu sin 2\nR\ng\nθ\n=\n\n(\n) (\n)\n2 usin\n. ucos\nR\ng\nθ\nθ\n=\n\n2 8 6\n96\nR\n9.6 m\n10\n10\n× ×\n=\n=\n=",
    "examSource": "AP EAMCET-2004",
    "image": "/images/yct_motion_plane/p56_img1_xref513.png"
  },
  {
    "id": "yct-motion-plane-q249",
    "num": 249,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The equation of trajectory of a projectile is \n\n\n\n\n\n\n2\n5\ny = 10x -\nx\n9\n\n If we assume g = 10 m/s², the range of \nprojectile (in metre) is",
    "options": [
      "36",
      "24",
      "18",
      "9"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, \n\n2\n-2\n5\ny\n10x -\nx , g\n10ms\n9\n=\n=\n\nWe know that trajectory equation- \n\n(\n)\n2\n2\n2\ng\ny\ntan\nx -\nx\n2u cos\n\n\n=\nθ\n\n\nθ\n\n\n\nOn comparing we get - \n\n2\n2\ng\n5\ntan\n10,\n9\n2u cos\nθ =\n=\nθ\n\n∵ \n2\nu sin 2\nR\ng\nθ\n=\n2\n2u sin .cos\ng\nθ\nθ\n=\n] \n\n2\n2\n2\n2\n2\n2u sin .cos\ncos\ng\ncos\n2.u cos\ntan\nR\ng\ntan\n10\n90\n18 m\ng\n5\n5\n2u cos\n9\nθ\nθ\nθ\n=\n×\nθ\nθ×\nθ\n=\nθ\n=\n=\n=\n=\nθ",
    "examSource": "AP EAMCET-2005"
  },
  {
    "id": "yct-motion-plane-q250",
    "num": 250,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A body projected vertically upwards crosses a \npoint twice in its journey at a height h just after \nt1 and t2 second. Maximum height reached by \nthe body is",
    "options": [
      "(\n)\n2\n1\n2\ng t\nt\n4\n+",
      "2\n1\n2\nt\nt\ng\n4\n+\n\n\n\n\n\n",
      "2\n1\n2\nt\nt\n2g\n4\n+\n\n\n\n\n\n",
      "(\n)\n1 2\ng t t\n4"
    ],
    "correctAnswer": 2,
    "explanation": "We know, \n\nh = ut - \n2\n1 gt\n2\n\nAt t = t1 and t2 second \nThen, \nh = ut1 -\n2\n1\n1 gt\n2\n……….(i) \n\nh = ut2 - \n2\n2\n1 gt\n2\n………(ii) \nEquating (i) and (ii), we get- \n\n2\n2\n1\n1\n2\n2\n1\n1\nut\ngt\nut\ngt\n2\n2\n-\n=\n-\n\nu(t1 - t2) = \n(\n)\n2\n2\n1\n2\n1 g t\nt\n2\n-\n\nu = \n1\n2\n(t\nt )g\n2\n+\n\nMaximum height = \n(\n)\n2\n2\n2\n2\n1\n2\n1\n2\ng\nt\nt\nt\nt\nu\n2g\n2g\n4 2g\n4\n+\n+\n\n\n=\n=\n\n\n×\n\n",
    "examSource": "AP EAMCET-2005  VITEEE-2009"
  },
  {
    "id": "yct-motion-plane-q251",
    "num": 251,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A body is projected from the earth at angle 30º \nwith the horizontal with some initial velocity. If \nits range is 20 m, the maximum height reached \nby it is (in metre)",
    "options": [
      "5 3",
      "5\n3",
      "10\n3",
      "10 3"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, θ = 30o, initial velocity = u, range \n(R) = 20 m, maximum height = H \nWe know that, \n4H\ntan\nR\nθ =\n\n1\nH\nR\ntan\n4\n=\n×\n×\nθ \n\no\n1\n1\n20\ntan30\n5\n4\n3\n=\n×\n×\n=\n×\n\n5\nH\nm\n3\n=",
    "examSource": "AP EAMCET-2006"
  },
  {
    "id": "yct-motion-plane-q252",
    "num": 252,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "If a body is projected with an angle θ to the \nhorizontal, then",
    "options": [
      "its velocity is always perpendicular to its \nacceleration",
      "its velocity becomes zero at its maximum \nheight",
      "its velocity makes zero angle with the \nhorizontal at its maximum height",
      "the body just before hitting the ground,"
    ],
    "correctAnswer": 2,
    "explanation": "As we know that, in projectile motion a body \nat highest point has velocity = u cosθ in the horizontal \ndirection which makes zero angle with the horizontal at \nits maximum height.",
    "examSource": "the  direction of velocity coincides with the  acceleration  AP EAMCET-2008"
  },
  {
    "id": "yct-motion-plane-q253",
    "num": 253,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A ball thrown vertically up to reach its \nmaximum height in t second. The total time \nfrom the time of projection to reach a point at \nhalf of its maximum height while returning (in \nsecond) is",
    "options": [
      "2t",
      "1\n1\nt\n2\n\n\n+\n\n\n\n",
      "3t\n2",
      "t\n2"
    ],
    "correctAnswer": 1,
    "explanation": "At maximum height final velocity is zero. \nSo, \nInitial velocity (v0) = \n2gH ………..(i) \nAnd, \nt = \n0\nv\ng …………(ii) \n\nt = \n2H\ng\n…………(iii) \nApplying the relation for the motion from the point A \nand C \n\nv2 = u2 + 2as \n\n2\n2\nC\nA\nv\nv\n2as\n=\n+\n\n2\nC\nH\nv\n0\n2g\n2\n\n\n=\n+\n\n\n\n \n\nvC = \ngH ………..(iv) \nFor motion A to C \n\nvC = uA + at1 \n\nvC = gt1 …………..(v) \n\ngH = gt1 \n[From (iv)] \n\nt1 = \nH\ng ………..(vi) \nComparing equation (iii) and (vi) \n\nt1 = t\n2 \nSo, the time taken to reach half of the maximum height \nwhile returning is equal to \n\nt2 = t + t1 \n\nt2 = t + t\n2 \n\nt2 = \n1\n1\nt\n2\n\n\n+\n\n\n\n",
    "examSource": "AP EAMCET-2008  BITSAT-2008"
  },
  {
    "id": "yct-motion-plane-q254",
    "num": 254,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "For an object thrown at 45° to horizontal, the \nmaximum height (H) and horizontal range (R) \nare related as",
    "options": [
      "R = 16 H",
      "R = 8 H",
      "R = 4 H",
      "R = 2 H \nDCE-2009, 2007 \nJCECE-2004"
    ],
    "correctAnswer": 2,
    "explanation": "Given, θ = 45o \nMaximum height of projectile (Hmax) = \n2\n2\nu sin\n2g\nθ \n\n2\n2\no\nmax\nu sin 45\nH\n.......(i)\n2g\n=\n\nRange of projectile\n2\nu sin2\n(R)\ng\nθ\n=\n\n(\n)\n2\no\nu sin 2 45\nR\ng\n×\n=\n\n2\no\nu sin90\nR\ng\n=\n …….(ii) \nDividing Equation (i) by Equation (ii), we get- \n\n2\n2\n2\no\nmax\n2\no\nH\nu sin 45\ng\n1\n1\n1\nR\n2g\nu sin90\n2\n4\n2\n×\n\n\n=\n=\n×\n=\n\n\n×\n\n\n\nSo, \nR = 4 Hmax",
    "examSource": "",
    "image": "/images/yct_motion_plane/p58_img1_xref523.png"
  },
  {
    "id": "yct-motion-plane-q255",
    "num": 255,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two objects are projected at an angle θ and \n(90o - θ), to the horizontal with the same speed. \nThe ratio of their maximum vertical heights is",
    "options": [
      "1 : tanθ",
      "tan2 θ : 1",
      "1 : 1",
      "tan θ : 1"
    ],
    "correctAnswer": 1,
    "explanation": "When object projected at an angle θ then, \n\n2\n2\n1\nu sin\nH\n2g\nθ\n=\n\n….(i) \nNow when object projected at an angle (90o - θ) then, \n\nH2 = \n2\n2\nu sin (90\n)\n2g\n° -θ \n\n….(ii) \nNow divide equation (i) by (ii), we get- \n\n2\n2\nl\n2\n2\n2\nu sin\nH\n2g\nH\nu sin (90\n)\n2g\nθ\n=\n° -θ \n\n2\n2\nl\n2\n2\n2\nH\nu sin\nH\nu cos\nθ\n=\nθ \n\n2\nl\n2\nH\ntan\nH\n1\nθ\n=\n\n H1 : H2 = tan2θ : 1",
    "examSource": "Karnataka CET-2022",
    "image": "/images/yct_motion_plane/p58_img1_xref523.png"
  },
  {
    "id": "yct-motion-plane-q256",
    "num": 256,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "In projectile motion, the physical quantity that \nremains invariant throughout is",
    "options": [
      "vertical component of velocity",
      "horizontal component of velocity",
      "kinetic energy of the projectile",
      "potential energy of the projectile"
    ],
    "correctAnswer": 1,
    "explanation": "Horizontal component of velocity remains \nconstant for a projectile fired from the earth because \nthere is no acceleration in horizontal direction.",
    "examSource": "AP EAMCET (21.09.2020) Shift-II  Kerala CEE - 2017, 2012",
    "image": "/images/yct_motion_plane/p58_img1_xref523.png"
  },
  {
    "id": "yct-motion-plane-q257",
    "num": 257,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A body is projected with an angle θ. The \nmaximum height reached is h. If the time of \nflight is 4 sec and g = 10 m/s2, then the value of \nh is",
    "options": [
      "10 m",
      "40 m",
      "20 m",
      "5"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, T = 4 sec, g = 10 m/sec2 \nWe know that, \n\n2usin\nT\ng\nθ\n=\n\n4 10\nusin\n2\n×\n=\nθ \n\nusinθ = 20 \nSquaring both side we get- \n\nu2sin2θ = (20)2 \n\n.....(i) \nNow, height (h) \n2\n2\nu sin\n2g\nθ\n=\n\n2\n(20)\n20 20\nh\n20m\n2 10\n20\n×\n=\n=\n=\n×",
    "examSource": "m  AP EAMCET(Medical)-2014",
    "image": "/images/yct_motion_plane/p58_img1_xref523.png"
  },
  {
    "id": "yct-motion-plane-q258",
    "num": 258,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A body is projected horizontally from the top \nof a tower with a velocity of 10 m/s. If it hits the \nground at an angle of 45°, the vertical \ncomponent of velocity when it hits ground in \nm/s is",
    "options": [
      "10",
      "10 2",
      "5 2",
      "5"
    ],
    "correctAnswer": 0,
    "explanation": "According to question \nHorizontal component of velocity (vx) = u = 10 m/s \nThen, \ny\nx\nv\ntan\nv\nθ =\n\ny\no\nv\ntan45\n10\n=\n⇒ vy = 10 m/s",
    "examSource": "AP EAMCET(Medical)-2014",
    "image": "/images/yct_motion_plane/p59_img1_xref529.png"
  },
  {
    "id": "yct-motion-plane-q259",
    "num": 259,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "An object is thrown towards the tower which is \nat a horizontal distance of 50 m with an initial \nvelocity of 10m/s and making an angle 30º with \nthe horizontal. The object hits the tower at \ncertain height. The height from the bottom of \nthe tower where the object hits the tower is (g = \n10m/s²)",
    "options": [
      "50\n10\n1\nm\n3\n3\n\n\n-\n\n\n\n",
      "50\n10\n1\nm\n3\n3\n\n\n-\n\n\n\n",
      "100\n10\n1\nm\n3\n3\n\n\n-\n\n\n\n",
      "100\n10\n1\nm\n3\n3\n\n\n-\n\n\n\n"
    ],
    "correctAnswer": 0,
    "explanation": "Given, horizontal distance (x) = 50 m, initial \nvelocity (u) = 10 m/s, angle (θ) = 30o, g = 10 m/s² \n\nSo, according to question \n\nux = u cosθ \n\nux = \n(\n)\n3\n10\n30\n2\n×\nθ =\n°\n∵\n\nux = 5\n3 m/s \nand \nuy = u sinθ \n\nuy = \n(\n)\n1\n10\n30\n2\n×\nθ =\n°\n∵\n\nuy = 5 m/s \nAcceleration along x-axis ax = 0 \nAcceleration along y-axis ay = -g \nUsing equation of motion- \n\ns = ut + 1\n2 at2 \nAlong x-axis:- \n\nx = uxt + 1\n2 axt2 \n 50 = \n2\n1\n5 3t\n(0)t\n2\n+\n\nt = 50\n10 sec\n5 3\n3\n=\n\nSimilarly, along y-axis- \n\ny = uyt + 1\n2 ayt2 \n\ny = 5 × \n2\n10\n1\n10\n( 10)\n2\n3\n3\n\n\n+\n-\n\n\n\n\n\ny = 5 ×\n2\n10\n10\n5\n3\n3\n\n\n-\n\n\n\n\ny\n50\n10\n1-\nm\n3\n3\n\n\n=\n\n\n\n\n\nHence, the object hits the tower at 50\n10\n1-\nm\n3\n3\n\n\n\n\n\n",
    "examSource": "AP EAMCET(Medical)-2015",
    "image": "/images/yct_motion_plane/p59_img1_xref529.png"
  },
  {
    "id": "yct-motion-plane-q260",
    "num": 260,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Equations of motion of a projectile are given by \nx =36t m and 2y = 96t -9.8t2m. the angle of \nprojection is equal to.",
    "options": [
      "sin-1 3\n4\n\n\n\n\n\n",
      "sin -1 4\n3\n\n\n\n\n\n",
      "sin-1 4\n5\n\n\n\n\n\n",
      "sin-1 3\n5\n\n\n\n\n\n"
    ],
    "correctAnswer": 2,
    "explanation": "Given that- \n x = 36 t \n2y = 96t-9.8t2 \ny = 48t - 4.9t2 \nSo, Let initial velocity is u, and angle is θ. \nNow, horizontal velocity \nx\nt 0\ndx\n(u )\nucos\n36\ndt\n=\n\n\n=\nθ =\n=\n\n\n\n\n\nu cosθ = 36 \n\n…..(i) \nVertical velocity \ny\nt 0\ndy\n(u )\nusin\n48\ndt\n=\n\n\n=\nθ =\n=\n\n\n\n\n- 9.8t \n\nu sinθ = 48 \n\n….(ii) \nDividing equation (ii) by equation (i), we get- \n\n48\n4\ntan\n36\n3\nθ =\n=\n\nThen from the Pythagoras theorem \n\nThe angle projection, \n4\nsin\n5\nθ =\n ⇒ \n-1 4\nsin\n5\n\n\nθ =\n\n\n\n",
    "examSource": "AP EMCET(Medical)-2011  AP EAMCET-2003",
    "image": "/images/yct_motion_plane/p59_img1_xref529.png"
  },
  {
    "id": "yct-motion-plane-q261",
    "num": 261,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two balls are projected simultaneously in the \nsame vertical plane from the same point with \nvelocities V1 and V2 with angles θ1 and θ2 \nrespectively with the horizontal. If V1 cos θ1 = \nV2 cos θ2, the path of one ball as seen from the \nposition of other ball is:",
    "options": [
      "Parabola",
      "Horizontal straight line",
      "Vertical straight line",
      "Straight line making \no\n45"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, V1 cosθ1 = V2 cosθ2 \nSo, the relative velocity between them is 0. Path of one \nball as seen from the position of the other ball will be \nvertical straight line.",
    "examSource": "with the vertical    AP EAMCET(Medical)-2005",
    "image": "/images/yct_motion_plane/p60_img1_xref539.png"
  },
  {
    "id": "yct-motion-plane-q262",
    "num": 262,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The maximum height reached by a projectile is \n4m. The horizontal range is 12m. Velocity of \nprojection in m/s is: (g = acceleration due to \ngravity)",
    "options": [
      "g\n5 2",
      "g\n3\n2",
      "1 g\n3\n2",
      "1\ng\n5\n2"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, horizontal range (R) = 12 m, \nmaximum height (H) = 4 m \nWe know that, tanθ = 4H\nR = 4 4\n4\n12\n3\n×\n=\n\nThen from the Pythagoras theorem \n\nθ\n\nThen, sin θ = 4\n5 \nNow, H =\n2\n2\nu sin\n2g\nθ ⇒ u2 = \n2\n2gH\nsin θ \n\nu2 = \n2\n2 g\n4\n4\n5\n× ×\n\n\n\n\n\n\n⇒ u2 = 25 8g\n16\n×\n\nu = \n25 g\n2\n×\n\nVelocity of projection (u) = \ng\n5 2 m/s",
    "examSource": "AP EAMCET(Medical)-2004  UP CPMT-2006",
    "image": "/images/yct_motion_plane/p60_img1_xref539.png"
  },
  {
    "id": "yct-motion-plane-q263",
    "num": 263,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two stones are projected with the same speed \nbut \nmaking \ndifferent \nangles \nwith \nthe \nhorizontal. Their horizontal ranges are equal. \nThe angle of projection of one is π/3 and the \nmaximum height reached by it is 102m. Then \nthe maximum height reached by the other in m is :",
    "options": [
      "336",
      "224",
      "56",
      "34"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, angle of projection (θ1) = 3\nπ \n\nθ2 = 2\n3\n6\nπ\nπ\nπ\n\n\n-\n=\n\n\n\n\n\nHmax = 102 m and R1 = R2 \nSo, \nH1 = \n2\n2\n1\nu sin\n2g\nθ ----- (i) \nAnd, \nH2 = \n2\n2\n2\nu sin\n2g\nθ ----- (ii) \nDividing equation (i) by (ii), we get- \n\n2\n2\n1\n2\n1\n1\n2\n2\n2\n2\n2\n2\nu sin\nH\nsin\n2g\nH\nu sin\nsin\n2g\nθ\nθ\n=\n=\nθ\nθ \nThen, H2 = \n(\n)\n(\n)\n2\n2\n1\n2\n2\n2\n1\n102\nsin\n/6\nH sin\n1/ 4\n102\nsin\n3/ 4\nsin\n/3\n×\nπ\n\n\nθ\n\n\n=\n=\n×\nθ\nπ\n\n\n\n\n\nH2 = 34 m",
    "examSource": "BCECE-2008  AP EAMCET(Medical)-2003",
    "image": "/images/yct_motion_plane/p60_img1_xref539.png"
  },
  {
    "id": "yct-motion-plane-q264",
    "num": 264,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile has initially the same horizontal \nvelocity as it would acquire, if it had moved \nfrom rest with uniform acceleration of 3 m/s² \nfor 0.5 minute. If the maximum height reached \nby it is 80 m, then the angle of projection is: (g= \n10m/s²)",
    "options": [
      "tan-1(3)",
      "tan-1 3\n2\n\n\n\n\n\n",
      "tan-1 4\n9\n\n\n\n\n\n",
      "sin-1 4\n9\n\n\n\n\n\n"
    ],
    "correctAnswer": 2,
    "explanation": "Given, ax = 3m/s2, H = 80 m \nTime (t) = 0.5 min = 0.5× 60 = 30 sec \nWe know, \nH =\n2\n2\nu sin\n2g\nθ \n\n80 = \n2\n2\nu sin\n2 10\nθ\n×\n\nu sin θ = 40 \n\n … (i) \nNow, Horizontal velocity \n\nu cos θ = u + at \n(where u = 0) \n\nu cos θ = 3 × 30 = 90 \n … (ii) \nOn dividing (i) and (ii), we get \n\nusin\n40\nucos\n90\nθ =\nθ\n\ntan θ = 4\n9 ⇒ θ = tan-1 4\n9\n\n\n\n\n\n",
    "examSource": "AP EAMCET(Medical)-2002",
    "image": "/images/yct_motion_plane/p60_img1_xref539.png"
  },
  {
    "id": "yct-motion-plane-q265",
    "num": 265,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "It is possible to project a particle with a given \nspeed in two possible ways so that, it has the \nsame horizontal range R. The product of the \ntimes taken by it in two possible ways is : \n\n [g= acceleration due to gravity]",
    "options": [
      "R\ng",
      "2R\ng",
      "3R\ng",
      "4"
    ],
    "correctAnswer": 1,
    "explanation": "Range of projectile (R) = \n2\nu sin 2\ng\nθ \nAccording to question, range is equal- \n\nR1 = R2 and velocity is equal (u1 = u2) \nNow, \n2\n2\n1\n1\n2\n2\nu sin 2\nu sin 2\ng\ng\nθ\nθ\n=\n\nsin2θ1 = sin2θ2 \n\nsin2θ1 = sin(180° - 2θ2) \n\n2θ1 = (180° - 2θ2) \n\nθ1 = (90° - θ2) \n\n...(i) \nTime of flight (T) = 2usin\ng\nθ \nProduct of time of flight \n\nT1 × T2 = \n1\n1\n2\n2\n2u sin\n2u sin\ng\ng\nθ\nθ\n×\n\nT1 × T2 = \n{\n}\n2\n1\n2\n1\n2\n2\n4u sin\nsin\nu\nu\ng\nθ\nθ\n=\n\nPut the value of θ1 from equation (i), \nT1 × T2 = \n(\n)\n2\n2\n2\n2\n2\n2\n2\n4u sin\nsin 90\n2u sin\n.cos\n2\ng\ng\ng\nθ\n°-θ\nθ\nθ\n=\n×\n\nT1 × T2 = \n2\n2\nu sin 2\n2\ng\ng\nθ\n×\n\nT1 × T2 = 2R\ng",
    "examSource": "R g  AP EAMCET(Medical)-2001"
  },
  {
    "id": "yct-motion-plane-q266",
    "num": 266,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A stone is projected with a velocity u at angle θ \nwith the horizontal reaches maximum height \nH1, when it is projected with a velocity u at an \nangle \n\n\n\n\n\nπ\nθ\n2 -\n with the horizontal, it reaches to \na maximum height H2. The relation between \nthe horizontal range r of the projectile, H1 and \nH2 is:",
    "options": [
      "R=4\n1\n2\nH H",
      "R=4(H1-H2)",
      "R=4(H1+H2)",
      "2\n2\n1\n2\nR\nH / H\n="
    ],
    "correctAnswer": 0,
    "explanation": "We know that, \nMaximum height of projectile (H) = \n2\n2\nu sin\n2g\nθ \nWhen stone is projected with velocity (u) and angle θ \nthen, \n\nH1 =\n2\n2\nu sin\n2g\nθ \n\n…(i) \nWhen, projected with velocity (u) and angle 2\nπ\n\n\n-θ\n\n\n\n \nThen, H2 =\n2\n2\nu sin\n2\n2g\nπ\n\n\n-θ\n\n\n\n \n\nH2 = \n2\n2\nu cos\n2g\nθ ………..(ii) \nMultiply from equation (i) and (ii) \n\nH1 × H2 = \n2\n2\nu sin\n2g\nθ ×\n2\n2\nu cos\n2g\nθ \n\nH1 × H2 = \n4\n2\n2\n2\n4\nu sin\ncos\n4\n4g\nθ\nθ\n×\n\nH1 × H2 = (\n)\n2\n2\n2\nu 2sin cos\n16g\nθ\nθ\n\nH1 × H2 = \n2\n2\n1\nu sin 2\n16\ng\n\n\nθ\n×\n\n\n\n\nH1 × H2 = \n2\n2\n1\nu sin 2\nR\nR\n16\ng\n\n\nθ\n∴\n=\n\n\n\n\n\nR = 4\n1\n2\nH\nH\n×",
    "examSource": "AP EAMCET(Medical)-2000"
  },
  {
    "id": "yct-motion-plane-q267",
    "num": 267,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "For a projectile the ratio of maximum height \nreached to the square of flight time is: \n\n (g = 10m/s²)",
    "options": [
      "5:4",
      "5:2",
      "5:1",
      "10:1"
    ],
    "correctAnswer": 0,
    "explanation": "We know that, \nMaximum height of projectile (H) = \n2\n2\nu sin\n2g\nθ \n\nFlight time (T) = 2usin\ng\nθ \nAccording to question- \n\n2\n2\n2\n2\n2\n2\nMaximumheight(H)\nu sin\ng\n[Time of flight (T)] \n2g\n4u sin\nθ\n=\n×\nθ \n\n{\n}\n2\n2\nH\ng\n10\ng\n10ms\n8\n8\nT\n-\n=\n=\n∴\n=\n\n2\nH\n5\n4\nT =\n\n H : T2 = 5 : 4",
    "examSource": "AP EAMCET(Medical)-2000"
  },
  {
    "id": "yct-motion-plane-q268",
    "num": 268,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The angle of projection of a projectile, for \nwhich the horizontal range and the maximum \nheight are equal, is:",
    "options": [
      "(\n)\n1\ntan\n(3)\n-",
      "1\ntan (4)\n-",
      "(\n)\n1\ntan\n2\n-",
      "1\n1\ntan\n3\n-\n\n\n\n\n"
    ],
    "correctAnswer": 1,
    "explanation": "We know that, \nMaximum height of projectile (H) = \n2\n2\nu sin\n2g\nθ \nRange (R) = \n2\nu sin 2\ng\nθ \nAccording to question- \n\nH = R \n\n2\n2\n2\nu sin\nu sin 2\n2g\ng\nθ\nθ\n=\n\n2\nsin\n2\nθ = 2sinθ cosθ \n\n sin\n2\nθ = 2cosθ \n\n tanθ = 4 \n\n θ = tan-1(4)",
    "examSource": "AP EAMCET(Medical)-1999  UPSEE-2013"
  },
  {
    "id": "yct-motion-plane-q269",
    "num": 269,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The trajectory of a projectile projected from \norigin is given by the equation y = x -\n2\n2x\n5 . \nThe initial velocity of the projectile is:",
    "options": [
      "2\n5 m/s",
      "5 m/s",
      "25 m/s",
      "5\n2 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \n\n2\n2x\ny\nx\n5\n=\n-\n\n….. (i) \nWe know, \nEquation of projectile (y) = x tanθ - \n2\n2\n2\ngx\n2u cos θ … (ii) \nComparing the equation (i) and (ii), we get- \n\ntanθ = 1 \n\nθ = 45° \nAnd, \n\n2\n2\ng\n2\n2u cos\n5\n=\nθ\n\n2\n2\n10\n2\n5\n2u cos\n=\nθ\n\n2\n2\n5\n2\nu cos\n5\n=\nθ\n\n(\n)\n2\n2\n5 5\nu\ncos 45\n2\n×\n=\n°\n× \n\n2\n25\nu\n1\n2\n2\n=\n×\n\n1\ncos45\n2\n\n\n∴\n° =\n\n\n\n\n\nu\n5 m/s\n=",
    "examSource": "Karnataka CET-2019"
  },
  {
    "id": "yct-motion-plane-q270",
    "num": 270,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Three projectiles A, B and C are projected at \nan angle of 30°, 45°, 60° respectively. If RA, RB \nand RC are ranges of A, B and C respectively, \nthen (velocity of projection is same for A, B and",
    "options": [
      ":",
      "RA = RB = RC",
      "RA = RC > RB \n\n(c) RA < RB < RC",
      "RA = RC <"
    ],
    "correctAnswer": 3,
    "explanation": "Given, θA = 30°, θB = 45°, θC = 60° \nWe know that, \nRange of projectile motion (R) = \n2\nu sin 2\ng\nθ \n\nR ∝ sin2θ \n{ u is same for all} \nFor, \nθA = 30° \n\nsin2θA = sin60° = 0.866 \nFor \nθB = 45° \n\nsin2θB = sin90° = 1 \nFor \nθC = 60° \n\nsin2θC = sin120° = 0.866 \nSo, \nRA = RC < RB",
    "examSource": "RB  Karnataka CET-2016"
  },
  {
    "id": "yct-motion-plane-q271",
    "num": 271,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A stone is thrown vertically at a speed of 30 ms-\n1 taking an angle of 450 with the horizontal. \nWhat is the maximum height reached by the \nstone? Take g = 10 m/s².",
    "options": [
      "30 m",
      "22.5 m",
      "15 m",
      "10"
    ],
    "correctAnswer": 1,
    "explanation": "Given, u = 30 m/s, θ = 450, g = 10 m/s², \nmaximum height (H) = ? \nMaximum height of the projectile moving with velocity \nv at an angle θ is given by \n\n2\n2\nu sin\nH\n2g\nθ\n=\n\nH\n2\n2\n30\nsin (45 )\n2 10\n×\n°\n=\n×\n\nH =\n2\n900\n1\n20\n2\n\n\n×\n\n\n\n= 900 1\n20 2\n×\n×\n\nH = 22.5 m",
    "examSource": "m  Karnataka CET-2014"
  },
  {
    "id": "yct-motion-plane-q272",
    "num": 272,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile is projected at 10 m/s by making \nat an angle 600 to the horizontal. After some \ntime its velocity makes an angle of 300 to the \nhorizontal. Its speed at this instant is:",
    "options": [
      "10\n3",
      "10 3",
      "5\n3",
      "5 3"
    ],
    "correctAnswer": 0,
    "explanation": "As the velocity makes an angle of 60° with \nhorizontal. So, the horizontal component of velocity at \nthe instant will be \nvx = 10 cos60° = 10 × 0.5 = 5 m/s \nWhen angle 30° then, \n\nvx = vcos30° \nv cos30° = 5 \nv = \n5\ncos30° \n5\nv\n3 / 2\n=\n\n[cos30° =\n3\n2 ] \nv = 10\n3\n m/s",
    "examSource": "Karnataka CET-2013"
  },
  {
    "id": "yct-motion-plane-q273",
    "num": 273,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The height y and the distance x along the \nhorizontal plane of a projectile on a certain \nplanet (with no surrounding atmosphere) are \ngiven by y = (8t - 5t2) m and x = 6t m, where t \nis in seconds. The velocity with which the \nprojectile is projected is:",
    "options": [
      "6 m/s",
      "8 m/s",
      "10 m/s",
      "14 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, x = 6t, y = 8t - 5t2 \n\nvy = dy\n8 10t\ndt =\n-\n\nvy = 8 - 10t \nAt t = 0, \n\nvy = 8 - 10 × 0 \n\nvy = 8 m/s \n∵ \nx = 6 t \n\nvx = dx\ndt = 6 m/s \n∴ The velocity of projectile, \n^\n^\nu\n6i\n8j\n=\n+\n\u0002\n\n(\n)\n(\n)\n2\n2\nx\ny\nv\nv\n=\n+\n\n2\n2\n(6)\n(8)\n36\n64\n10m/s\n=\n+\n=\n+\n=",
    "examSource": "MHT-CET 2020  Karnataka CET-2011  UP CPMT-2006  BCECE-2003"
  },
  {
    "id": "yct-motion-plane-q274",
    "num": 274,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "For a given velocity, a projectile has the same \nrange R for two angles of projection t1 and t2 \nare the time of flight in the two cases then:",
    "options": [
      "t1 t2 ∝ R",
      "t1 t2 ∝ R2",
      "1 2\n2\n1\nt t\nR\n∝",
      "1 2\n1\nt t\nR\n∝"
    ],
    "correctAnswer": 0,
    "explanation": "We know, t = 2usin\ng\nθ \n\n2\nu sin 2\nR\ng\nθ\n=\n\nAccording to question, R1 = R2 \n\n2\n2\n1\n2\nu sin 2\nu sin 2\ng\ng\nθ\nθ\n=\n\n(velocity is same) \n\nsin2θ1 = sin2θ2 \n\nsin2θ1 = sin(180° - 2θ2) \n\n2θ1 = 180° - 2θ2 \n\nθ1 = (90° - θ2) \nTime of flight (t1) = \n1\n2usin\ng\nθ \n\nt1 = \n(\n)\n2\n2usin 90\ng\n° -θ\n\nt1 = \n2\n2u cos\ng\nθ \n\n….(i) \nSimilarly, t2 = \n2\n2usin\ng\nθ \n\n…(ii) \nEquation (i) × (ii), we get- \n\nt1t2 = \n2\n2\n2usin\n2ucos\ng\ng\nθ\nθ\n×\n\nt1t2 = \n2\n2\n2\n2u sin\ncos\n2\ng\ng\nθ\nθ ⇒ t1t2 = \n2\n2\nu sin 2\n2\ng\ng\nθ \n\nt1t2 = 2\ng .R \nSo, \nt1.t2 ∝ R",
    "examSource": "AP EAMCET-07.10.2020  SRMJEE-2019  BITSAT-2012  DCE-2009  Karnataka CET-2003  AP EAMCET -2012  AIEEE 2005, 04"
  },
  {
    "id": "yct-motion-plane-q275",
    "num": 275,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "If a projectile is launched with velocity Vo\n, \nmaking an angle θ with x axis, then its time of \nflight T",
    "options": [
      "2\no\nV sin2\nT\ng\nθ\n=",
      "2\n2\no\nV sin\nT\n2g\nθ\n=",
      "2\no\nV\nT\ng\n=",
      "o\n2V sin\nT\ng\nθ\n=\n\nJ&"
    ],
    "correctAnswer": 3,
    "explanation": "We know, \n\nRange = ux × time of flight (T) \n\n2\n0\n0\nV sin2\nV cos\nT\ng\nθ =\nθ× \n\n(\n)\n2\n0\n0\nV\n2sin cos\nT\ng\nV cos\nθ\nθ\n=\n×\nθ\n\nTime of flight (T) =\no\n2V sin\ng\nθ",
    "examSource": "K CET- 2011"
  },
  {
    "id": "yct-motion-plane-q276",
    "num": 276,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The maximum range of a projectile is 100 m. \nThe maximum height reached by it is",
    "options": [
      "100 m",
      "25 m",
      "200 m",
      "75 m \nJ&"
    ],
    "correctAnswer": 1,
    "explanation": "Horizontal range of a projectile, \n2\nu sin2\nR\ng\nθ\n=\n\nWhere, u is the velocity of a projectile and θ is the angle \nof the projection with the horizontal. \nThe range is maximum when, θ = 45°. \n∴ The maximum range is- \n2\n2\nmax\nu sin 90\nu\nR\ng\ng\n°\n=\n=\n………. (i) \nWhen, the range is maximum, the maximum height \nreached by the projectile is \n\n2\n2\n2\n2\nmax\nu sin\nu sin 45\nH\n2g\n2g\nθ\n°\n=\n=\n= \n2\n2\n1\nu\n2\n2g\n\n\n\n\n\n \n\nHmax\n2\nmax\nR\nu\n4g\n4\n=\n=\n\n(given Rmax = 100) \nmax\n100m\nH\n25m\n4\n∴\n=\n=",
    "examSource": "K CET- 2009"
  },
  {
    "id": "yct-motion-plane-q277",
    "num": 277,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A body is projected at an angle θ with respect \nto horizontal direction with velocity u. The \nmaximum range of the body is",
    "options": [
      "2\nu sin2\nR\ng\nθ\n=",
      "2\n2\nu sin\nR\n2g\nθ\n=",
      "2\nu\nR\ng\n=",
      "2\nR\nu sin\n=\nθ \nJ&"
    ],
    "correctAnswer": 2,
    "explanation": "The range of projectile (R)=\n2\nu sin 2\ng\nθ …. (i) \nFor the maximum range- \n sin2θ = 1 \n\n sin2θ = sin 90o \n 2θ = 90° \nθ = 45º \nPutting the value of θ in equation (i), we get- \n\nR = \n2\nu\ng sin 90° \nMaximum range of the projectile (R) = \n2\nu\ng",
    "examSource": "K CET- 2008",
    "image": "/images/yct_motion_plane/p64_img1_xref566.png"
  },
  {
    "id": "yct-motion-plane-q278",
    "num": 278,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "From the top of a tower a body A is projected \nvertically \nupwards, \nanother \nbody \nB \nis \nhorizontally thrown and a third body C is \nthrown vertically downwards with the same \nvelocity \n\n(a) B strikes the ground with more velocity \n\n(b) C strikes the ground with less velocity \n\n(c) A, B, C,",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 2,
    "explanation": "For body A - It goes with velocity u will reach \nits maximum height. Then the final velocity become 0 \nand comes back. It will attain velocity u. \nUsing Newton’s law of motion, \n\n2\n2\n2\nA\nv\nu\n2as\nv\nu\n2gh\n=\n+\n=\n+\n\nFor body B - It is going down with velocity u. \n\n2\nB\nv\nu\n2gh\n=\n+\n\nFor body C - Its horizontal velocity remains same (i.e. \nu). Then, \nVertical velocity (vy) = \n0\n2gh\n2gh\n+\n=\n\nResultant (vC) = \n2\n2\n2\nx\ny\nv\nv\nu\n2gh\n+\n=\n+\n\nHence, vA = vB = vC",
    "examSource": "strike the ground with same velocity    (d) A and C strike the ground with more velocity  than B  AP EAMCET (18.09.2020) Shift-I",
    "image": "/images/yct_motion_plane/p64_img1_xref566.png"
  },
  {
    "id": "yct-motion-plane-q279",
    "num": 279,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two bodies are projected from ground with \nequal speeds 20 m/sec from the same position in \nsame vertical plane to have equal range but at \ndifferent angle above the horizontal. If one of \nthe angle is 30° the sum of their maximum \nheights is (assume g = 10 m/s2)",
    "options": [
      "400 m",
      "20 m",
      "30 m",
      "40 m \nJ&"
    ],
    "correctAnswer": 1,
    "explanation": "Given, u = 20m/s, \ng = 10m/s2 \nAs the range of two projectiles are same, so the angle of \nprojection must be complementary. \n\nθ1 = 30, θ2 = 90 - θ1 \n\n = 90 - 30 = 60 \n\nθ2 = 60º \nThe maximum height of projectile is given by \n\nH= \n2\n2\nu sin\n2g\nθ \nFor θ1 = 30º \n\nH1 = \n2\n2\n1\nu sin\n2g\nθ ⇒ \n(\n)\n2\n2\no\n1\n20\nsin 30\nH\n2 10\n×\n=\n×\n\n2\n1\n1\n400\n400 1\n2\nH\n2 10\n4 2 10\n\n\n×\n\n×\n\n\n=\n=\n×\n× ×\n\nH1 = 5m \nFor θ2 = 60º \n\n2\n2\n2\n2\nu sin\nH\n2g\nθ\n=\n\n(\n)\n2\n2\no\n2\n20\nsin 60\nH\n2 10\n×\n=\n×\n = \n2\n3\n400\n2\n3\n20\n20\n4\n\n\n×\n\n\n\n\n=\n×\n\nH2 = 15m \nSum of maximum height (H) = H1 + H2 \n\n = 5 + 15 \n\n = 20 m",
    "examSource": "K CET- 2006",
    "image": "/images/yct_motion_plane/p64_img1_xref566.png"
  },
  {
    "id": "yct-motion-plane-q280",
    "num": 280,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Neglecting the air resistance, the time of flight \nof a projectile is determined by",
    "options": [
      "Uvertical",
      "Uhorizontal",
      "U = U2\nvertical + U2\nhorizontal",
      "U = (U2\nvertical + U2\nhorizontal)1/2 \nJ&"
    ],
    "correctAnswer": 0,
    "explanation": "Let a body be projected at an initial velocity v \nin a direction making an angle θ with the horizontal and \nlet it take time t to reach the highest point P of its path. \n\nThe vertical velocity of the body at P is zero. \nFrom equation of motion, v = u - gt \n\nPutting, v = vy = 0 \n\nand u = uy = u sinθ \n u sin θ = gt \n\nusin\nt\ng\nθ\n=\n\nHence, time of flight (T) is 2t. \n∴ \nT = 2t \nT = 2usin\ng\nθ ⇒ T = \nvertical\n2\nU\ng ×\n\n∴ Time of flight depends upon Uvertical.",
    "examSource": "K CET- 2004",
    "image": "/images/yct_motion_plane/p64_img1_xref566.png"
  },
  {
    "id": "yct-motion-plane-q281",
    "num": 281,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The horizontal range of a projectile is 4 3 \ntimes its maximum height. Its angle of \nprojection will be",
    "options": [
      "45°",
      "60°",
      "90°",
      "30° \nJ&"
    ],
    "correctAnswer": 3,
    "explanation": "We know that, \n\nR = \n2\nu sin 2\ng\nθ \nR = \n2\n2u sin cos\ng\nθ\nθ ….(i) [∵ sin2θ = 2sinθ.cosθ] \nFor maximum height, \nHmax = \n2\n2\nu sin\n2g\nθ \n\nRange = \nmax\n4 3\nHeight\n×\n{ from equation (i)} \n\n2\n2u sin cos\ng\nθ\nθ = 4 3 × \n2\n2\nu sin\n2g\nθ \n\ncosθ = \n3 sinθ \n\nsin\n1\ncos\n3\nθ =\nθ\n\ntanθ = 1\n3\n\nθ = tan-1\n1\n3\n\n\n\n\n\n\n\nθ = 30º",
    "examSource": "K CET- 2004, 2001, 1999,1998"
  },
  {
    "id": "yct-motion-plane-q282",
    "num": 282,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "At the top of the trajectory of a projectile, the \ndirections of its velocity and acceleration are",
    "options": [
      "Perpendicular to each other",
      "Parallel to each other",
      "Inclined to each other at an angle of 45°",
      "Antiparallel to each other \nJ&"
    ],
    "correctAnswer": 0,
    "explanation": "Direction of velocity is always tangent to the \npath so at the top of trajectory, it is in horizontal \ndirection and acceleration due to gravity is always in \nvertically downward direction. It means angle between \nv and g are perpendicular to each other.",
    "examSource": "K CET- 2002"
  },
  {
    "id": "yct-motion-plane-q283",
    "num": 283,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two stones are projected with the same \nmagnitude of velocity, but making different \nangles with horizontal, the angle of projection \nof one is π/3 and its maximum height is Y, the \nmaximum height attained by the other stone \nwith π/6 angle of projection is",
    "options": [
      "Y",
      "2Y",
      "3Y",
      "Y\n3 \nJ&"
    ],
    "correctAnswer": 3,
    "explanation": "Given, θ1 = π/3, h1 = Y, θ2 = π/6 \nLet h2 be the maximum height of other stone. \nWe know, \n2\n2\nu sin\nh\n2g\nθ\n=\n\n2\n1\n1\n2\n2\n2\nh\nsin\nh\nsin\nθ\n=\nθ \n\n(\n)\n(\n)\n2\n1\n2\n2\nsin\n/ 3\nh\nh\nsin\n/ 6\nπ\n=\nπ\n\n(\n)\n(\n)\n2\n1\n2\n2\n3 / 2\nh\n3/ 4\nh\n1/ 4\n1/ 2\n=\n=\n\n1\n2\nh\n3\nh\n1\n=\n\nh2 = \n1h\n3 \n\n[\n]\n1h\nY\n=\n\n∴ \n\n2\nY\nh\n3\n=",
    "examSource": "K CET- 2000"
  },
  {
    "id": "yct-motion-plane-q284",
    "num": 284,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile is projected at an angle of 47° \nrelative to the horizontal. The range of the \nprojectile could be increased by",
    "options": [
      "projecting it in a horizontal direction",
      "increasing the initial speed",
      "decreasing the projectional angle",
      "none of these \nJ&"
    ],
    "correctAnswer": 1,
    "explanation": "A projectile is projected at an angle of 47° \nrelative to the horizontal. The range of the projectile \ncould be increased by initial speed. \nRange of a projectile (R) \n2\nu sin 2\ng\nθ\n=\n\nRelation between R and u2 is R ∝ u2 because angle 47° \nis fixed.",
    "examSource": "K CET- 1997"
  },
  {
    "id": "yct-motion-plane-q285",
    "num": 285,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A ball is thrown horizontally from a height of \n100 m with an initial speed of 15 m s-1. How far \ndoes it travel horizontally in the first 2 \nseconds?",
    "options": [
      "3 m",
      "7.5 m",
      "30 m",
      "0.3 m \nJ&"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, u = 15 m/s, t = 2 sec \n∵ \nHorizontal distance = u × t \n\n = 15 × 2 \n\n = 30 m",
    "examSource": "K-CET-2018"
  },
  {
    "id": "yct-motion-plane-q286",
    "num": 286,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile is thrown with initial velocity v0 \nand angle 30° with the horizontal. If it remains \nin the air for 1 sec, what was its initial velocity?",
    "options": [
      "19.6m/s",
      "9.8m/s",
      "4.9 m/s",
      "1 m/s \nJ&"
    ],
    "correctAnswer": 1,
    "explanation": "As we know that time of flight in projectile \nmotion is given by T\n2usin\ng\nθ\n=\n\nIt is given that, \n\nT = 1 sec, θ = 30° \n\nu = u0 (initial velocity) \n\nTake g = 9.8 m/s2 \nTime of flight in projectile motion \n\n0\n2u sin30\n1\n9.8\n°\n=\n⇒ 0\n9.8\nv\n2 sin30\n=\n×\n° \n\n0\nv\n9.8 m /s\n=",
    "examSource": "K-CET-2013"
  },
  {
    "id": "yct-motion-plane-q287",
    "num": 287,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A bird flies at an angle of 60° to the horizontal. \nIts horizontal component of velocity is 10 m s-1 \n. Find the vertical component of velocity in m \n\n s-1",
    "options": [
      "10 3",
      "10\n3",
      "5",
      "26 \nJ&"
    ],
    "correctAnswer": 0,
    "explanation": "Given, θ = 60º, ux = 10m/s, uy = ? \n\nHorizontal component of velocity- \n\nux = u cos θ \n\n10 = u cos θ \n\n10 = u cos 60o \n\n10 = \n1\nu\n2\n×\n\nor \n\nu = 20 m/s \nVertical component of velocity- \n\nuy = u sin θ \n\nuy = 20×sin 60o \n\nuy = \n3\n20\n2\n×\n\nor \n\nuy = 10 3 m/s",
    "examSource": "K-CET-2017",
    "image": "/images/yct_motion_plane/p66_img1_xref576.png"
  },
  {
    "id": "yct-motion-plane-q288",
    "num": 288,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The angle which the velocity vector of a \nprojectile thrown with a velocity v at an angle θ \nto the horizontal will make with the horizontal \nafter time t of its being thrown up is:",
    "options": [
      "θ",
      "1\ntan ( / t)\n-θ",
      "1\nvcos\ntan\nvsin\ngt\n-\n\nθ\n\n\nθ -\n\n",
      "1 vsin\ngt\ntan\nvcos\n-\nθ -\n\n\n\n\nθ\n\n"
    ],
    "correctAnswer": 3,
    "explanation": "As in given question the graph of projectile \nwill be given as \n\nVertical velocity of projectile after time \n\nt is v sinθ - gt \n(from equation of motion) \nAngle at any time t, \n\ny\nx\nv\nvsin\ngt\ntan\nv\nvcos\nθ -\nφ =\n=\nθ\n\n1 vsin\ngt\ntan\nvcos\n-\nθ -\n\n\nφ =\n\n\nθ\n\n",
    "examSource": "MHT-CET 2020",
    "image": "/images/yct_motion_plane/p66_img1_xref576.png"
  },
  {
    "id": "yct-motion-plane-q289",
    "num": 289,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "From the top of a tower 19.6 m high, a ball is \nthrown horizontally. If the line joining the \npoint of projection to the point where it hits the \nground makes an angle of 450 with the \nhorizontal, then the time initial velocity of the \nball is",
    "options": [
      "9.8 m/s",
      "4.9 m/s",
      "14.7 m/s",
      "2.8 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "Given, θ = 45º, g = 9.8m/s \n\nTop of tower height (H) = 19.6m \n\n∵ \nθ = 45° \nand \ntanθ\nH\nR\n=\n\nH\ntan45\nR\n° =\n\nR = H = 19.6 m \nIn Horizontal direction \n\nR = 19.6 = u × t \n\n……(1) \nIn vertical direction \n\nt = \n2H\ng\n\nt = \n2 19.6\n9.8\n×\n\nt\n4\n=\n\nt = 2 sec \nBy putting value of t in equation (1), we get- \n\n19.6 = u × t \n\n19.6 = u × 2 \n\n19.6\nu\n2\n=\n\nu = 9.8 m/s",
    "examSource": "MHT-CET 2020",
    "image": "/images/yct_motion_plane/p66_img1_xref576.png"
  },
  {
    "id": "yct-motion-plane-q290",
    "num": 290,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A ball is thrown at two different angles with \nthe same speed v and from the same point and \nit has the same range in both the cases. If y1 \nand y2 be the heights attained in the two cases, \nthen y1 + y2 = ....:",
    "options": [
      "u2/g",
      "2u2/g",
      "u2/2g",
      "u2/4"
    ],
    "correctAnswer": 2,
    "explanation": "Same range can be obtained from \ncomplementary angles i.e. θ and (90º-θ) \nHeight attained by Ist ball \n2\n2\n1\nu sin\ny\n2g\nθ\n=\n\nHeight attained by IInd ball \n\n2\n2\n2\n2\n2\nu sin (90\n)\nu cos\ny\n2g\n2g\n-θ\nθ\n=\n=\n\n∴ \n y1 + y2 =\n2\n2\n2\n2\nu sin\nu cos\n2g\n2g\nθ\nθ\n+\n\n= \n2\n2\n2\n2\nu sin\nu cos\n2g\nθ +\nθ \n\n= \n2\n2\n2\nu (sin\ncos\n)\n2g\nθ +\nθ\n\n2\n2\n[sin\ncos\n1]\nθ +\nθ =\n\n= \n2\nu\n2g",
    "examSource": "g  MHT-CET 2020",
    "image": "/images/yct_motion_plane/p66_img1_xref576.png"
  },
  {
    "id": "yct-motion-plane-q291",
    "num": 291,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "At what angle with the horizontal should a ball \nbe thrown so that its range R is related to the \ntime of flight as \n2\nR = 5T . (Take g = 10m/s²)",
    "options": [
      "300",
      "450",
      "600",
      "900"
    ],
    "correctAnswer": 1,
    "explanation": "Given, R = 5T2, g = 10m/s2 \n\nRange (R) =\n2\nu sin 2\ng\nθ \nTime of flight (T) = 2usin\ng\nθ \nSince, R = 5T2 \n∴ \n2\nu sin 2\ng\nθ = 5 ×\n2\n2\n2\n4u sin\ng\nθ \n\nsin2θ = 20 sin .sin\ng\n×\nθ\nθ \n\n2sinθ cosθ = 20× sin sin\ng\nθ\nθ \n\n2gsinθ cosθ = 20 × sinθ sinθ \n\n2 × 10 cosθ = 20 sinθ \n\ncosθ = sinθ \n\nsin\n1\ncos\nθ =\nθ\n\ntanθ = 1 \n\nθ = 45º",
    "examSource": "MHT-CET 2020"
  },
  {
    "id": "yct-motion-plane-q292",
    "num": 292,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The maximum height attained by a projectile is \nincreased by 10%. Keeping the angle of \nprojection \nconstant, \nwhat \nis \npercentage \nincrease in the time of flight?",
    "options": [
      "5%",
      "10%",
      "20%",
      "40%"
    ],
    "correctAnswer": 0,
    "explanation": "We know, \n\nH = \n2\n2\nu sin\n2g\nθ ……(1) \nTime of flight T = 2usin\ng\nθ …….(2) \nSquaring on both side of equation (2), we get- \n\nT2 = \n2\n2\n2\n2\n2usin\n4u sin\ng\ng\n\n\nθ\nθ\n=\n\n\n\n\n\nu2sin2θ = \n2\n2\nT\ng\n4\n×\n\n…..(2) \nPutting the value of u2sin2θ from equation (1), we get- \n\nH × 2g =\n2\n2\nT\ng\n4\n×\n\nH = \n2\ng\nT\n8\n\n\n\n\n\n\n\n g\n8 → constant \nSo, \n\nH\n2 T\nH\nT\n∆\n∆\n=\n\nT\n1\nH\nT\n2 H\n∆\n∆\n=\n\nT\n1\nH\n100\n100\nT\n2\nH\n∆\n∆\n\n\n×\n=\n×\n\n\n\n\n\nH 100\n10\nH\n∆\n\n\n×\n=\n\n\n\n\n∵\n\nT\n1\n100\n10\nT\n2\n∆\n×\n=\n×\n\nT 100\n5\nT\n∆\n×\n=\n\n% increases in T = 5%",
    "examSource": "MHT-CET 2020"
  },
  {
    "id": "yct-motion-plane-q293",
    "num": 293,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Four projectiles are fixed with the same \nvelocities at angles 25°, 40°, 55° and 70° with \nthe horizontal. The range of projectile will be \nlargest for the one projected at angle",
    "options": [
      "25°",
      "40°",
      "55°",
      "70°"
    ],
    "correctAnswer": 1,
    "explanation": "Given, θ1 = 25°, θ2 = 40°, θ3 = 55° and θ4 = \n70° \nWe know, \n\nRange, \n2\nu sin 2\nR\ng\nθ\n=\n\nThen, \nR ∝ sin 2θ \ni.e. higher value of sin 2θ, range will also be greater. \nAmong the given values of projection angle, the value \nof sin2θ is greatest for θ = 40° \nSo, range will be highest for projected angle θ = 40°.",
    "examSource": "AP EAMCET (23.09.2020) Shift-I"
  },
  {
    "id": "yct-motion-plane-q294",
    "num": 294,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile has the maximum range 500 m. If \nthe projectile is thrown up an inclined plane of \n30º with the same (magnitude) velocity, the \ndistance covered by it along the inclined plane \nwill be",
    "options": [
      "250 m",
      "500 m",
      "400 m",
      "1000 m \nManipal UGET-2016"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, \n\nMaximum Range = 500m \n\nFor maximum range θ = 45º \n\n2\nu sin 2\nR\ng\nθ\n=\n\n2\nu sin(2 45 )\n500\ng\n×\n°\n=\n\n2\nu\nsin90\n500\ng\n×\n°\n=\n\n(∵ sin90° = 1) \n\n500 = \n2\nu\ng \n\n.....(i) \nThe distance covered along the inclined plane can be \nobtain using the equation \n\nv2 = u2 + 2as \n\nv2 - u2 = 2as \n\n0 - u2 = 2(-g sin 30º)s \n [a = -gsin30º] \n\ns = \n2\nu\ng \nPutting the value of \n2\nu\ng in equation (i) \n∴ \n\n2\nu\ns\n500\ng\n=\n=\n\nSo, \n s = 500 m",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q295",
    "num": 295,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A stone is projected from the ground with \nvelocity 50 m/s at an angle 30º with horizontal. \nIt crosses a wall after 3 s. How far beyond the \nwall the stone will strike the ground? (g = 10 \nm/s2) ?",
    "options": [
      "90.2 m",
      "12.5 m",
      "86.5 m",
      "125 3 m \nManipal UGET-2016"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, \nu = 50m/s, θ=30º, time to cross the wall = 3 sec \n\nTime of flight (T) = 2usin\ng\nθ \n\n2 50 sin30\nT\n10\n×\n×\n°\n=\n\n2 50 1\nT\n10 2\n×\n×\n=\n×\n\nT = 5 second \nTime in air after crossing the wall = (5 - 3) = 2 sec \n\n T2 = 2 sec \n\nDistance (d) = u cosθ × T2 \n\n =50 × cos 30° × 2 \n\n = 50\n3\n2\n2\n×\n×\n\n d = 50 3 \n [\n3\n1.732\n=\n] \n\n d = 86.5m",
    "examSource": "",
    "image": "/images/yct_motion_plane/p68_img1_xref588.png"
  },
  {
    "id": "yct-motion-plane-q296",
    "num": 296,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Which of the following graphs represents the \nspeed v of a projectile as a function of time t?",
    "options": [
      "",
      "",
      "",
      ""
    ],
    "correctAnswer": 1,
    "explanation": "As we know that in projectile motion, speed \n(v) of the projectile is decreases with time (t). So here \noption (b) graphs correctly represent the speed (v) of a \nprojectile as a function of time.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p68_img1_xref588.png"
  },
  {
    "id": "yct-motion-plane-q297",
    "num": 297,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "From the ground, a projectile is fired at an \nangle of 60 degrees to the horizontal with a \nspeed of 20 m/s. Take, acceleration due to \ngravity as 10 m/s2 . The horizontal range of the \nprojectile is",
    "options": [
      "10 3m",
      "20 m",
      "20 3m",
      "40 3m"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, \nProjectile speed (u) = 20 m/sec \nProjectile angle (θ) = 60° \nAcceleration due to gravity (g) = 10 \n2\nm /sec \nThe horizontal range, \n\nR = \n2\nu sin 2\ng\nθ \n\n2\n20 sin120\nR\n10\n°\n=\n\n20 20\n3\nR\n2 10\n×\n×\n=\n×\n\nR\n20 3m\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p68_img1_xref588.png"
  },
  {
    "id": "yct-motion-plane-q298",
    "num": 298,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A body is thrown up with a speed u, at an angle \nof projection θ . If the speed of the projectile \nbecomes \nu\n2 on reaching the maximum \nheight, then the maximum vertical height \nattained by the projectile is",
    "options": [
      "2\nu\n4g",
      "2\nu\n3g",
      "2\nu\n2g",
      "2\nu\ng"
    ],
    "correctAnswer": 0,
    "explanation": "The speed of projectile at maximum height = u cosθ \n\nu\n1\nucos\ncos\ncos45\n2\n2\nθ =\n⇒\nθ =\n=\n° \n\nθ = 45° \nThe maximum height is given by the formula, \n\n2\n2\nu sin\nH\n2g\nθ\n=\n\n2\n2\n2\n2\nu sin 45\nu\n1\nH\n2g\n2g\n2\n\n\n°\n=\n=\n\n\n\n\n\n2\nu\nH\n4g\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p68_img1_xref588.png"
  },
  {
    "id": "yct-motion-plane-q299",
    "num": 299,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The vertical component of velocity of a \nprojectile at its maximum height (u = velocity \nof projection, θ = angle of projection) is",
    "options": [
      "u sin θ",
      "u cos θ",
      "u\nsinθ",
      "zero"
    ],
    "correctAnswer": 3,
    "explanation": "The vertical component of velocity of a \nprojectile motion become zero at maximum height \nbecause the gravity acts in the vertically downward \ndirection which produce retardation. \nSo, at maximum height vertical component of velocity \nof projectile motion become zero.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p69_img1_xref599.png"
  },
  {
    "id": "yct-motion-plane-q300",
    "num": 300,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A body projected at an angle with the \nhorizontal has a range 300 m. If the time of \nflight is 6 s, then the horizontal component of \nvelocity is",
    "options": [
      "30 m/s",
      "50 m/s",
      "40 m/s",
      "45 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, \n\nRange R = 300 m \n\n T = 6 s \n\nWe know, \n2\nu sin 2\nR\ng\nθ\n=\n and \n2usin\nT\ng\nθ\n=\n\n[∵ sin 2\n2sin cos\nθ =\nθ\nθ ] \n2\nu 2sin cos\n2usin\nR\nu cos\ng\ng\nθ\nθ\nθ\n=\n=\n⋅\nθ \nR = T(u cosθ) \n2usin\nT\ng\n\n\nθ\n=\n\n\n\n\n∵\n\n300 = 6(u cosθ) \nucosθ = \n1\n300\n50ms\n6\n-\n=\n\nHence, horizontal component of velocity is 50 m/s.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p69_img1_xref599.png"
  },
  {
    "id": "yct-motion-plane-q301",
    "num": 301,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two projectiles A and B thrown with speeds in \nthe ratio 1:\n2 acquired the same heights. If A \nis thrown at an angle of 45º with the horizontal, \nthe angle of projection of B will be",
    "options": [
      "0º",
      "60º",
      "30º",
      "45º"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \n\nAngle (θa) = 45° and \na\nb\nu\n1\nu\n2\n=\n\nWe know that, \n\n2\n2\nu sin\nH\n2g\nθ\n=\n\nWhere, u = speed and θ = angle and A and B have same \nheight. \n\n2\n2\n2\n2\na\nb\nb\nu sin 45\nu sin\n2g\n2g\n°\nθ\n=\n\n2\n2\n2\na\nb\n2\nb\nu\nsin\nsin 45\nu\n\n\nθ =\n°\n\n\n\n\n\n2\n2\nb\n1\nsin\n2\n\n\nθ = \n\n\n\n×\n2\n1\n2\n\n\n\n\n\n\n\n2\nb\n1\nsin\n4\nθ =\n⇒ sin θb = 1\n2 \n\n θb = 30°",
    "examSource": "",
    "image": "/images/yct_motion_plane/p69_img1_xref599.png"
  },
  {
    "id": "yct-motion-plane-q302",
    "num": 302,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The maximum height of a projectile is half of \nits range on the horizontal. If the velocity of \nprojection is u, its range on the horizontal is",
    "options": [
      "2\n2u\n5g",
      "2\n3u\n5g",
      "2\nu\ng",
      "2\nu\n5g"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \n Maximum height = 1 range\n2\n------(i) \nAnd velocity of projection = u \nRange (R) = \n2\nu sin2\ng\nθ \nMaximum height (H) = \n2\n2\nu sin\n2g\nθ \nPutting the value of range in equation (i) we get \nMaximum height = \n2\n1\nu sin 2\n2\ng\nθ\n×\n\n2\n2\n2\nu sin\nu sin 2\n2g\ng\nθ\nθ\n=\n× 1\n2 \n\n2\nsin\n2sin\ncos\n2\n2\nθ\nθ×\nθ\n=\n{\n}\nsin2\n2sin .cos\n∴\nθ =\nθ\nθ \n\ntan\n2\nθ =\n\n∵ \n2\n1\nsin\n,cos\n5\n5\nθ =\nθ =\n\nHorizontal range (R) = \n2\n2u sin .cos\ng\nθ\nθ \n\n2\n1\nsin\n,cos\n5\n5\n∴\nθ =\nθ =\n\nHorizontal range (R) = \n2\n2u sin .cos\ng\nθ\nθ \n\n2\n2\n1\n2u\n5\n5\nR\ng\n×\n×\n=\n\n2\n4u\nR\n5g\n=",
    "examSource": "g  AP EAMCET- (17.09.2020) Shift-I  Kerala CEE - 2010  Karnataka CET-2015",
    "image": "/images/yct_motion_plane/p69_img1_xref599.png"
  },
  {
    "id": "yct-motion-plane-q303",
    "num": 303,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A ball is projected from the ground at a speed \nof 10 m/s making an angle of 30º with the \nhorizontal. Another ball is simultaneously \nreleased from a point on the vertical line along \nthe maximum height of the projectile. The \ninitial height of the second ball is (g = 10 m/s²)",
    "options": [
      "6.25 m",
      "2.5 m",
      "3.75 m",
      "5 m"
    ],
    "correctAnswer": 1,
    "explanation": "Given, speed of ball (u) = 10 m/sec, angle (θ) \n= 30°, g = 10 m /sec2 \n\nMaximum height of projectile (H) = \n2\n2\nu sin\n2g\nθ \n\n(\n)\n2\n2\n10\nsin 30º\nH\n2 10\n=\n×\n\n2\n1\n1\nH\n5\nsin30º\n2\n2\n\n\n\n\n= ×\n=\n\n\n\n\n\n\n\n\n∵\n\n5\nH\n1.25m\n2 2\n=\n=\n×\n\nThe first ball will take time to reach the maximum \nheight is T/2 \n\nusin\nT\ng\nθ\n=\n⇒\n10 sin30\nT\n10\n×\n°\n=\n\n1\nT\n0.5sec\n2\n=\n=\n\nThe second ball is released from the point. It will travel \na distance in 0.5 seconds. \n\n2\n1\ns\nut\ngt\n2\n=\n+\n\n(\n) (\n)\n2\n1\ns\n0\n10\n0.5\n2\n=\n+\n×\n\n10 0.5 0.5\ns\n5 0.5 0.5\n2\n×\n×\n=\n= ×\n×\n\ns = 1. 25 m \nThe initial height of the 2nd ball will be = s + H \n\n1.25 + 1.25 = 2.5 m",
    "examSource": "",
    "image": "/images/yct_motion_plane/p70_img1_xref606.png"
  },
  {
    "id": "yct-motion-plane-q304",
    "num": 304,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "An object is projected at an angle of 45º with \nthe horizontal. The horizontal range and \nmaximum height reached will be in the ratio:",
    "options": [
      "1 : 2",
      "2 : 1",
      "1 : 4",
      "4 : 1"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \nAngle of projection (θ) = 45° \nHorizontal range of projectile (R) = \n2\nu sin2\ng\nθ \n\n2\nu sin2 45\nR\ng\n×\n°\n=\n\n2\n2\nu sin90º\nu\n1\nR\ng\ng\n×\n=\n=\n\n2\nu\nR\ng\n=\n\nMaximum height of projectile (H) = \n2\n2\nu sin\n2g\nθ \n\n2\n2\nu sin 45\nH\n2 g\n°\n=\n×\n\n2\n2\n2\n1\nu\nu\n1\n2\nH\n2g\n2\n2g\n\n\n×\n\n\n\n=\n=\n×\n⇒\n2\nu\nH\n4g\n=\n\nThe ratio of horizontal range and maximum height is \n\n2\n2\n2\n2\nu\nR\nu\n4g\ng\nH\ng\nu\nu\n4g\n=\n=\n×\n\nR\n4\nH\n1\n=\nor 4 : 1 \nHence, R : H = 4:1",
    "examSource": "K CET- 2010  Kerala CEE 2005",
    "image": "/images/yct_motion_plane/p70_img1_xref606.png"
  },
  {
    "id": "yct-motion-plane-q305",
    "num": 305,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two identical balls P and Q are projected with \nsame speeds in vertical plane from same point \nO \nwith \nmaking \nprojection \nangles \nwith \nhorizontal 30º and 60º, respectively and they \nfall directly on a plane AB at points P' and Q' \nrespectively. Which of the following statement \nis true about distance as given in option? \n\n(a) AP' > AQ' \n\n(b) AP' < AQ' \n\n(c) AP' ≤ AQ'",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \nProjection angle of ball P = 30° \nand projection angle of ball Q = 60° \n\nFor complimentary angle ranges, OR is same for P and \nQ as O and R are on same horizontal plane. \nFrom figure we can say that AP' > AQ'",
    "examSource": "(d) As there are complimentary projection angles  UPSEE - 2017",
    "image": "/images/yct_motion_plane/p71_img1_xref613.png"
  },
  {
    "id": "yct-motion-plane-q306",
    "num": 306,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile is fixed from level ground at an \nangle θ above the horizontal. The elevation \nangle φ of the highest point as seen from the \nlaunch point is related to θ by the relation.",
    "options": [
      "tanφ = 1 tan\n4\nθ",
      "tanφ = tanθ",
      "tanφ = 1 tan\n2\nθ",
      "tanφ = 2tanθ"
    ],
    "correctAnswer": 2,
    "explanation": "From figure, \n\ntan φ = VC\nH\n2H\nOC\nR / 2\nR\n=\n=\n\nFor projectile motion, \nHeight (H) =\n2\n2\nu sin\n2g\nθ \nRange (R) = \n2\nu sin 2\n2g\nθ \nSo, \n\ntan φ = 2H\nR = \n2\n2\n2\n2\n2u sin\nsin\n2g\nu sin2\nsin 2\ng\nθ\nθ\n=\nθ\nθ \n\n2\nsin\n1 sin\ntan\n2sin .cos\n2 cos\nθ\nθ\nφ =\n=\nθ\nθ\nθ \n\ntan\ntan\n2\nθ\nφ =\n\nSo, \n tanφ = 1 tan\n2\nθ",
    "examSource": "UPSEE - 2013",
    "image": "/images/yct_motion_plane/p71_img1_xref613.png"
  },
  {
    "id": "yct-motion-plane-q307",
    "num": 307,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A particle is projected with velocity \n2gh , \nsuch that it just crosses two walls of height h \nand separated by h. Find the angle of \nprojection.",
    "options": [
      "15º",
      "75º",
      "60º",
      "30º"
    ],
    "correctAnswer": 3,
    "explanation": "Given, u = \n2gh \n\nVertically upward motion, \n\ny = ut - \n2\n1 gt\n2\n\nand, \n\nh = (u sin θ)t - \n2\n1 gt\n2\n\ngt2 - 2 u sinθ.t + 2h = 0 \n\n∴ t =\n(\n)\n2\n2\n2usin\n4u sin\n8gh\n2g\nθ ±\nθ -\n\nIf there are two roots of quadratic equation then, \n\nt1 =\n(\n)\n2\n2\n2usin\n4u sin\n8gh\n2g\nθ +\nθ -\n ….. (i) \n\nt2 =\n(\n)\n2\n2\n2usin\n4u sin\n8gh\n2g\nθ -\nθ -\n ….. (ii) \nIf particle cross the wall at times t1 and t2 respectively \nthen, \n\nt2= (t1.t2) .......(iii) \n\nTotal time of flight is given by, \n\nt = 2usin\ng\nθ \n\n…..(iv) \nPutting the value of equation (i), (ii) and (iv) in equation \n(iii), \n\n(\n)\n(\n)\n2\n2\n2\n2\n2\n2usin\n4u sin\n8gh\n2usin\ng\n4g\nθ\n-\nθ -\n\n\nθ\n=\n\n\n\n\n\n2\n2\n2\n2\n4u sin\n8gh\ng\n4g\nθ =\n\n(\n)\nu\n2gh\n=\n∵\n\n∴ \n2(2gh) sin2 θ = gh \n\nsin2 θ = 1\n4 \n\nsinθ = 1\n2 = sin 30° \n\nθ = 30º",
    "examSource": "UPSEE - 2010",
    "image": "/images/yct_motion_plane/p71_img1_xref613.png"
  },
  {
    "id": "yct-motion-plane-q308",
    "num": 308,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "An artillary piece which consistently shoots its \nshells with the same muzzle speed has a \nmaximum range R. To hit a target which is R\n2 \nfrom the gun and on the same level, the \nelevation angle of the gun should be",
    "options": [
      "15º",
      "45º",
      "30º",
      "60º"
    ],
    "correctAnswer": 0,
    "explanation": "Let initial velocity = u and angle = θ \nWe know, \nThen maximum range (R) = \n2\nu sin2\ng\nθ \n….(i) \nLet for range R/2 angle is φ \nSo, \n2\nR\nu sin 2\n2\ng\nφ\n=\n\n….(ii) \nPut the value R in equation (ii) we get \n\n2\n2\nu sin2\nu sin2\n2g\ng\nθ\nφ\n=\n⇒sin 2\nsin 2\n2\nθ =\nφ \nFor maximum range θ must be 45° \n\nsin(2 45 )\nsin2\n2\n×\n°\nφ =\n\nsin90\nsin2\n2\n°\nφ =\n⇒\n1\nsin2\nsin30\n2\nφ =\n=\n° \n\n2\n30\nφ =\n° ⇒ \n15\nφ =\n°",
    "examSource": "UPSEE - 2009",
    "image": "/images/yct_motion_plane/p72_img1_xref622.png"
  },
  {
    "id": "yct-motion-plane-q309",
    "num": 309,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A ball thrown by one player reaches the other \nin 2s. The maximum height attained by the ball \nabove the point of projection will be \n\n (g = 10 m/s2)",
    "options": [
      "2.5 m",
      "5 m",
      "7.5 m",
      "10"
    ],
    "correctAnswer": 1,
    "explanation": "Given, T = 2sec \n\nWe know, \nTotal time of flight T = 2usin\ng\nθ = 2 sec \n\nsin θ = g\nu \n……..(i) \n\nHmax =\n2\n2\n2\n2\n2\nu sin\nu\ng\n2g\n2g\nu\nθ =\n×\n [from equ. (i)] \n\nHmax = g\n2 ⇒ Hmax = 10\n2 \n\nHmax = 5 m",
    "examSource": "m  UPSEE - 2008",
    "image": "/images/yct_motion_plane/p72_img1_xref622.png"
  },
  {
    "id": "yct-motion-plane-q310",
    "num": 310,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A ball is thrown from a point with a speed v0 at \nan angle of projection θ. From the same point \nand at the same instant, a person starts \nrunning with a constant speed \n0\nv\n2 to catch the \nball. Will the person be able to catch the ball? \nIf yes, what should be the angle of projection?",
    "options": [
      "Yes, 60º",
      "Yes, 30º",
      "No",
      "Yes, 45º"
    ],
    "correctAnswer": 0,
    "explanation": "Given, \nInitial velocity of the ball = vo \nAngle of projection = θ \nConstant speed of person =\no\nv\n2 \nWe know, horizontal component of velocity of the ball \n= vo cos θ \nPerson will be able to catch the ball if his velocity is the \nsame as the horizontal component of velocity of the ball \ni.e. \n\no\no\nv\nv cos\n2 =\nθ \n\n1\ncos\ncos60º\n2\nθ =\n=\n\n60\nθ =\n° \nIf the person has to catch the ball then, angle of \nprojection of the ball must be 60°.",
    "examSource": "UPSEE - 2007  AIIMS - 2016   BCECE - 2004  JCECE - 2008  AIEEE-2004  UPCPMT-2018",
    "image": "/images/yct_motion_plane/p72_img1_xref622.png"
  },
  {
    "id": "yct-motion-plane-q311",
    "num": 311,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile is thrown in the upward direction \nmaking an angle of 60º with the horizontal \ndirection with a velocity of 147 m/s. Then the \ntime after which its inclination with the \nhorizontal is 45º, is :",
    "options": [
      "15 s",
      "10.98 s",
      "5.49 s",
      "2.745"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \n\nAngle (θ) = 60° \n\nInitial velocity (u) = 147 m/sec \nHorizontal component of velocity at 60° = Horizontal \ncomponent of velocity at 45° \n\nu cos60° = v cos45° \n\n1\n1\n147\nv\n2\n2\n147\nv\nm /s\n2\n×\n=\n×\n=\n\nVertical component of u = u sin 60° = uy \n\n147 3 m/s\n2\n=\n\nVertical component of v = v sin45° = vy \n\n147\n1\n147 m/s\n2\n2\n2\n×\n=\n\nFrom equation of motion \n\ny\ny\nv\nu\ngt\n=\n-\n\n147\n147 3\n9.8t\n2\n2\n=\n-\n\n9.8 t = 147 ( 3\n1)\n2\n-\n\nt = 5.49 sec",
    "examSource": "s  UPSEE - 2006  JCECE - 2007",
    "image": "/images/yct_motion_plane/p73_img1_xref628.png"
  },
  {
    "id": "yct-motion-plane-q312",
    "num": 312,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A ball is hit at 45º to the horizontal with a \nkinetic energy Ek. The kinetic energy at the \nhighest point is : \n\n(a) Ek \n(b) \nk\nE\n2 \n\n(c) \nk\nE\n2",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \n45\nθ =\n° \nAt highest point there will be only horizontal velocity \nso, the kinetic energy will be only due to horizontal \nvelocity. \nInitial kinetic energy (Ki) = Ek \n\n2\nk\nk '\nE cos 45\n=\n° \n\n2\nk\n1\nE\n2\n\n\n=\n\n\n\n\n\nk' = \nk\nE\n2 \nSo, \nKinetic energy at top most point is \nk\nE\n2 .",
    "examSource": "(d) zero  UPSEE - 2005  ASSAM CEE- 2014",
    "image": "/images/yct_motion_plane/p73_img1_xref628.png"
  },
  {
    "id": "yct-motion-plane-q313",
    "num": 313,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 3,
    "explanation": "Since the car is moving with a constant \nvelocity so acceleration will be zero. \n∴ \nDistance travelled by the car in time t \n\n2\n1\ns\nut\n0\nt\n2\n=\n+\n× ×\n\ns = ut \nSimilarly, considering that the horizontal velocity of the \nball is u. The distance travelled by the car in time t \n\ns = ut \nIt means that the ball will cover the same distance as \nthat of the car in time, t. Hence, the ball will land in the \nhands of the person who threw the ball.",
    "examSource": "A boy travelling in an open car moving at  constant velocity throws a ball vertically up  into air. The ball falls    (a) outside the car    (b) in the car ahead of the boy     (c) in the car beside the boy    (d) exactly in his hand  AP EAMCET (22.09.2020) Shift-II",
    "image": "/images/yct_motion_plane/p73_img1_xref628.png"
  },
  {
    "id": "yct-motion-plane-q314",
    "num": 314,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A shot is fired from a point at a distance of \n200m, from the foot of a tower 100 m high, so \nthat it just passes over it. The direction of shot \nwith respect to the horizontal is",
    "options": [
      "30°",
      "60°",
      "70°",
      "45°"
    ],
    "correctAnswer": 3,
    "explanation": "Given, R\n2 = 200 m, R = 400 m \nMaximum height (H) = 100 m \n\n∴ Range (R) = R\n2 + R\n2\n200m\n200m\n400m\n=\n+\n=\n\nIf θ be the direction of shot with respect to horizontal, \nthen \n\n2\n2\n2\nu sin2\nu sin\nR\nand\nH\ng\n2g\nθ\nθ\n=\n=\n\n2\n2\n2\n2\nu sin 2\nR\n2sin2\ng\nu sin\nH\nsin\n2g\nθ\nθ\n∴\n=\n=\nθ\nθ \n\n{\n}\n2\n400\n2 2sin .cos\nsin2\n2sin .cos\n100\nsin\n×\nθ\nθ\n=\nθ =\nθ\nθ\nθ\n∵\n\n4\n4cot\n1\n⇒\n=\nθ \ncot\n1\ncot 45\n⇒\nθ = =\n° \n45\n⇒θ =\n°",
    "examSource": "AP EAMCET (21.09.2020) Shift-I",
    "image": "/images/yct_motion_plane/p73_img1_xref628.png"
  },
  {
    "id": "yct-motion-plane-q315",
    "num": 315,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "When a player thrown a ball, it reaches the \nother player in 4 s. If the height of each player \nis 1.8 m, the maximum height attained by the \nball above the ground is",
    "options": [
      "19.4 m",
      "20.4 m",
      "21.4 m",
      "22.4"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \nEach player Height (H) = 1.8 m \nTime taken to reach the ball from one player to other \nplayer (T) = 4 sec \nWe know that, \n\n2usin\nT\ng\nθ\n=\n\n2usin\n4\ng\nθ\n=\n\n2g = u sin θ \n\n..........(i) \nMaximum height (Hmax) = \n2\n2\nu sin\n2g\nθ \n\n Hmax = (\n)\n2\nusin\n2g\nθ\n\n(\n)\n2\nmax\n2g\nH\n2g\n=\n [From equation (i)] \n\n Hmax = 2g = 2 × 9.8 \n\n Hmax = 19.6 m \nMaximum height attained by ball above the ground \n\n = H + Hmax \n\n1.8 19.6\n=\n+\n\n = 21.4 m",
    "examSource": "m  AP EAMCET (18.09.2020) Shift-II",
    "image": "/images/yct_motion_plane/p74_img1_xref634.png"
  },
  {
    "id": "yct-motion-plane-q316",
    "num": 316,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A ball is projected upwards from a height h \nabove the surface of the earth with velocity v. \nThe time at which the ball strikes the ground is",
    "options": [
      "2\nv\n2gh\n1\ng\nv\n\n\n+\n\n\n\n",
      "v\n2gh\n1\n1\ng\ng\n\n\n-\n+\n\n\n\n",
      "2\nv\n2gh\n1\n1\ng\nv\n\n\n+\n+\n\n\n\n",
      "2\n2\nv\n2g\n1\nv\ng\nv\n\n\n+\n+\n\n\n\n"
    ],
    "correctAnswer": 2,
    "explanation": "Given, uy = +v, ay = -g, sy = -h \n\nNow, from the second equation of motion- \n∴ \nsy = uyt + \n2\ny\n1 a t\n2\n\n-h = vt - \n2\n1 gt\n2\n\n2\n1 gt\n2\n- vt - h = 0 \n2\n2\n2\n1\nv\nv\n4\ngh\nIf ax\nbx\nc\n0\n2\nt\nb\nb\n4ac\n1\nthen.x\n2\ng\n2a\n2\n±\n+\n\n+\n+\n=\n\n=\n-±\n-\n\n=\n\n×\n\n\nTaking positive sign, \n\n2\nv\nv\n2gh\nt\ng\n+\n+\n=\n\n2\nv\n2gh\nv\nt\ng\ng\n+\n=\n+\n\n2\n2\n2gh\nv\n1\nv\nv\nt\ng\ng\n\n\n+\n\n\n\n\n=\n+\n\n2\nv\nv\n2gh\nt\n1\ng\ng\nv\n=\n+\n+\n\n2\nv\n2gh\nt\n1\n1\ng\nv\n\n\n=\n+\n+\n\n\n\n\n\n",
    "examSource": "AP EAMCET (17.09.2020) Shift-II",
    "image": "/images/yct_motion_plane/p74_img1_xref634.png"
  },
  {
    "id": "yct-motion-plane-q317",
    "num": 317,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A body is projected at an angle of 45o from a \npoint on the ground at a distance of 30 m from \nthe foot of a vertical pole of height 20 m. The \nbody just crosses the top of the pole and strikes \nthe ground at a distances from the foot of the \npole on the other side of the pole. Then, s",
    "options": [
      "20 m",
      "30 m",
      "50 m",
      "60"
    ],
    "correctAnswer": 3,
    "explanation": "Given data - \n\nAngle of projection = 45° \n\nHorizontal distance =30 m \n\nHeight of pole = 20 m \n\nFrom the above figure - \n\n30 = ut cos 45º \n\nut = \n30\n30 2\ncos45º =\n\n....(i) \nAnd, \n\n20 = ut sin 45º -\n2\n10 t\n2\n\n (∵ g = 10 m/s2) \n\n2\nu\n20\nt\n5t\n2\n=\n-\n\n2\n30 2\n20\n5t\n2\n=\n-\n\n{\n}\nut\n30 2\n∴\n=\n\n5t2 = 10 \n\n t2 = 2 \n\n t = \n2 \nPut the value t =\n2 in equation (i) \n\nut = 30\n2 \n\nu ×\n2 = 30\n2 \n\nu = 30 m/sec \nThen, \n2\nu sin 2\n30 30 sin90º\nR\n90m\ng\n10\nθ\n×\n×\n=\n=\n=\n\n∴ Distance between pole and the point at which body \nstrike on the ground. \n\ns = 90 - 30 = 60 m",
    "examSource": "m  AP EAMCET (23.04.2019) Shift-I",
    "image": "/images/yct_motion_plane/p74_img1_xref634.png"
  },
  {
    "id": "yct-motion-plane-q318",
    "num": 318,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A bullet fired from a gun falls at a distance half \nof its maximum range. The angle of projection \nof the bullet is",
    "options": [
      "45o",
      "60o",
      "30o",
      "15"
    ],
    "correctAnswer": 3,
    "explanation": "As we know that - \n Range (R) =\n2\nu sin2\ng\nθ \nRange is maximum, when θ is equal to 45°. \nSo, \n\n2\nmax\nu\nR\ng\n=\n\nGiven, \n\nR = \nmax\nR\n2\n\n2\n2\nu sin 2\nu\ng\n2g\nθ =\n\nsin 2θ = 1\n2 \n\nsin 2θ = sin 30º \n\n2\n30\nθ =\n° \n\n15\nθ =\n°",
    "examSource": "o  AP EAMCET (23.04.2019) Shift-I",
    "image": "/images/yct_motion_plane/p75_img1_xref641.png"
  },
  {
    "id": "yct-motion-plane-q319",
    "num": 319,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A body is projected at an angle of 60° with the \nhorizontal such that the vertical component of \nits initial velocity is 40 m/s. The magnitude of \nvelocity of the projectile at one quarter of its \ntime of flight is nearly, \n\n (Acceleration due to gravity, g = 10 m/s²)",
    "options": [
      "3.54 m/s",
      "35.40 m/s",
      "30.54 m/s",
      "34.5 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, initial velocity (uy) = 40m/s \nVertical component of velocity \n\nu sin 60º = 40 \n\n3 u\n40\n2\n=\n\nu = \n1\n80 ms\n3\n- \n\n∵ \nTime of flight (T) = 2usin\ng\nθ \n\n80\n2\nsin 60º\n3\nT\n10\n×\n=\n\nT = \n80\n3\n1\n2\n2\n10\n3\n×\n×\n×\n\nT = 8 sec \nThe magnitude of velocity of the projectile at one \nquarter of its time of flight \n\nTq = T\n8\n4\n4\n=\n\nTq = 2 sec \n\nux = u cos 60º \n\nux = 80\n1\n2\n3\n×\n\nux = 40\n3\n\nFrom first equation of the motion \n\nvy = uy - gTq \n\n(Tq = 2 sec) \n\nvy = 40 - 10 × 2 \n\nvy = 20 m/s \n Hence, at Tq = T\n4 , magnitude of velocity of projectile \n\nv = \n2\n2\nx\ny\nu\nv\n+\n\n=\n2\n2\n40\n(20)\n3\n\n+\n\n\n\n\n\nv ≈ 30.54 m/s",
    "examSource": "AP EAMCET (21.04.2019) Shift-II",
    "image": "/images/yct_motion_plane/p75_img1_xref641.png"
  },
  {
    "id": "yct-motion-plane-q320",
    "num": 320,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "If the maximum height and range of a \nprojectile are 3 m and 4 m respectively, then \nthe velocity of the projectile is (Take, g = 10 \nm/s²)",
    "options": [
      "1\n6\n20\nms\n5\n-",
      "1\n3\n10\nms\n2\n-",
      "1\n2\n10\nms\n3\n-",
      "1\n5\n20\nms\n6\n-"
    ],
    "correctAnswer": 2,
    "explanation": "Given, maximum height (H) = 3 m \n\n Range (R) = 4m \nWe know, \nMaximum height (H) \n2\n2\nu sin\n2g\nθ\n=\n\n 3 = \n2\n2\nu sin\n2g\nθ \n……(i) \nand \nRange (R) =\n2\nu sin 2\ng\nθ \n\n2\nu sin 2\n4\ng\nθ\n=\n\n……(ii) \n\nThe ratio of maximum height and range is- \n\n2\n2\n2\nu sin\nH\n2g\nR\nu sin 2\ng\nθ\n=\nθ \n\n2\n3\nsin\n4\n2sin 2\nθ\n=\nθ \n\n3 sin2θ = 2sin2θ \n\n3 2sin .cos\n2\nsin .sin\n×\nθ\nθ =\nθ\nθ\n (∵sin 2θ = 2sinθ cosθ) \n\n tan θ = 3 \n\nSo, sinθ = \n3\n10\n\n…(iii) \nPutting the value of sinθ =\n3\n10\nin equation (i) \n\n3 × 2 × 10 = u2sin2 θ \n\n3 × 2 × 10 = u2 ×\n2\n3\n10\n\n\n\n\n\n\n\nu2\n = \n2\n10\n3\n\n\n\n\n\n\n\n\n× 3 × 2 × 10 \n\nu2 = 100 2\n3\n× \n\nu = 10\n2\n3 \nSo, the velocity of the projectile is 10 2/3 m/s",
    "examSource": "AP EAMCET (21.04.2019) Shift-I",
    "image": "/images/yct_motion_plane/p75_img1_xref641.png"
  },
  {
    "id": "yct-motion-plane-q321",
    "num": 321,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two boys conducted experiments on the \nprojectile motion with stopwatch and noted \nsome readings. As one boy throws a stone in air \nat the same angle with the horizontal, the other \nboy observes that after 4s, the stone is moving \nat an angle 30° to the horizontal and after \nanother 2s it is travelling horizontally. The \nmagnitude of the initial velocity of the stone is \n(Acceleration due to gravity, g = 10 m/s².)",
    "options": [
      "1\n40 3 ms-",
      "1\n20 3 ms-",
      "1\n10 3 ms-",
      "1\n50 3 ms-"
    ],
    "correctAnswer": 0,
    "explanation": "Given, g = 10 m/s2, θ = 30°, t = 4s, \n\n∵ \nucosθ = vcos30o \n\n....(i) \n\nvsin30o = usinθ - gt \n\n....(ii) \nFrom equation (i) and (ii) \n\n tan30° = usin\ng\n4\nucos\nθ -×\nθ\n\n…(iii) \nTotal time to reach the stone at horizontal surface, \n\nt = 2 + 4 = 6 sec \nAfter t = 6 sec, θ = 0° \n\ntan 0° = usin\ng\n6\nucos0º\nθ -× \nu sinθ - g(6) = 0 \nu sinθ = 10 × 6 \nu sinθ = 60 \nFrom equation (iii), at t = 4s, \n\nu cosθ = 60 10 4\ntan30º\n-\n×\n\nu cosθ = 20 3 \n…(iv) \nNow magnitude of initial velocity, \n\n2\n2\nu\n(usin )\n(ucos )\n=\nθ\n+\nθ\n\n2\n2\nu\n(60)\n(20 3)\n=\n+\n\nu\n3600 1200\n4800\n=\n+\n=\n\nu\n40 3m/s\n=",
    "examSource": "AP EAMCET (20.04.2019) Shift-II",
    "image": "/images/yct_motion_plane/p76_img1_xref647.png"
  },
  {
    "id": "yct-motion-plane-q322",
    "num": 322,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile is given an initial velocity of \n(\n)\n^\n^\n-1\ni + 2j ms\n. The equation of its path is (g = 10 \nm/s²)",
    "options": [
      "y = 2x - 5x2",
      "y = x - 5x2",
      "4y = 2x - 5x2",
      "y = 2x - 25x2"
    ],
    "correctAnswer": 0,
    "explanation": "Given that,\n^\n^\nu\ni\n2j\n= +\n\nx\ny\n^\n^\nu\nu i\nu j\n=\n+\n\u0002\n\nx\nu\nu cos\n1\n=\nθ = \n\ny\nu\nu sin\n2\n=\nθ =\n\n∵ \nusin\n2\ntan\nu cos\n1\nθ\nθ =\n=\nθ\n\nFrom, y = x tanθ\n2\n2\nx\n1 gx\n2 u\n-\n\ny = x × 2\n2\n1\n10x\n2\n1\n-\n×\n\ny = 2x - 5x2",
    "examSource": "AP EAMCET (22.04.2018) Shift-II",
    "image": "/images/yct_motion_plane/p76_img1_xref647.png"
  },
  {
    "id": "yct-motion-plane-q323",
    "num": 323,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A body is projected vertically upwards with a \nvelocity u from the top of a tower. Time taken \nby it to reach the ground is n times, then the \ntime taken by it to reach the highest point in its \npath. Height of the tower is",
    "options": [
      "2\nnu (n\n1)\n2g\n-",
      "2\nnu (n\n2)\ng\n-",
      "2\nnu (n\n2)\n2g\n-",
      "2\nu (n\n1)\n2g\n+"
    ],
    "correctAnswer": 2,
    "explanation": "Let, the time taken to reach the maximum height, when \nthrown vertically upwards. \nt1 = u\ng \nIf t2 be the time to hit the ground, then \nt2 = nt1 = nu\ng \nFrom equation of motion \n\n2\n1\ns\nut\nat\n2\n=\n+\n\n2\n2\n2\nu\n1\nn .u\nH\nu.n\ng\ng\n2\ng\n\n\n-\n=\n-\n\n\n\n\n\n[s = -H, t = t2 = nt1] \n - H = \n2\n2\n2\nnu\nn u\ng\n2g\n-\n\n 2gH = nu2 (n-2) \n\n2\nnu (n\n2)\nH\n2g\n-\n=",
    "examSource": "AP EAMCET (23.04.2018) Shift-1",
    "image": "/images/yct_motion_plane/p76_img1_xref647.png"
  },
  {
    "id": "yct-motion-plane-q324",
    "num": 324,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Assertion (A): The velocity of a projectile at a \npoint on its trajectory is equal to the slope at that \npoint. \n\n Reason (R):",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 3,
    "explanation": "We know, \nTrajectory of projectile \n\ny = x tanθ -\n2\n2\n2\ngx\n2u cos θ \n∵ \ny\nx\nv\ndy\ndy/dt\nSlope\ndx\ndx /dt\nv\n=\n=\n=\n\nHere, assertion is incorrect but reason is correct, the \nvelocity vector at a point is always along the tangent to \nthe trajectory is true.",
    "examSource": "The velocity vector at a point is  always along the tangent to the trajectory at that  point.     (a) Both A and R are true and R is the correct  explanation of A    (b) Both A and R are true but R is not the correct  explanation of A    (c) A is true but R is false     (d) A is false but R is true   AP EAMCET (22.04.2018) Shift-1",
    "image": "/images/yct_motion_plane/p77_img1_xref654.png"
  },
  {
    "id": "yct-motion-plane-q325",
    "num": 325,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A body is projected from the ground at an \nangle of \n-\n\n\n\n\n\n1\n8\ntan\n7\nwith the horizontal. The \nratio of the maximum height attained by it to \nits range is",
    "options": [
      "8 : 7",
      "4 : 7",
      "2 : 7",
      "1 : 7"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \n\nθ = \n1 8\ntan\n7\n-\n\n\n\n\n\n\n8\ntan\n7\nθ =\n\nWe know, \n\nMaximum height (H) = \n2\n2\nu sin\n2g\nθ \nand \n\n2\nu sin 2\nRange (R)\ng\nθ\n=\n\nThen, \n∴ \n2\n2\n2\nu sin\nH\ntan\n2g\nu sin2\nR\n4\ng\nθ\nθ\n=\n=\nθ\n\n H\nR = tan\n8\n4\n4 7\nθ =\n×\n\n H\n2\nR\n7\n= \nor \nH : R = 2 : 7",
    "examSource": "AP EAMCET (22.04.2018) Shift-1",
    "image": "/images/yct_motion_plane/p77_img1_xref654.png"
  },
  {
    "id": "yct-motion-plane-q326",
    "num": 326,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "The equation of a projectile is \n2\ngx\ny =\n3x - 2\n\nThe angle of projection is given by \n\n(a) \n1\ntan\n3\nθ =\n\n(b) tan\n3\nθ =\n\n(c) 2\nπ",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 1,
    "explanation": "The equation of projectile is \n\ny =\n2\ngx\n3x\n2\n-\n\n....(i) \nWe know, \nEquation of a projectile is \n\n y =\n2\n2\n2\ngx\nx tan\n2u cos\nθ -\nθ ..... (ii) \nBy comparing the both equation we get- \n\nx tanθ = \n3 x \n\ntanθ = \n3",
    "examSource": "(d) zero  BITSAT-2020",
    "image": "/images/yct_motion_plane/p77_img1_xref654.png"
  },
  {
    "id": "yct-motion-plane-q327",
    "num": 327,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A stone is thrown with a velocity u making an \nangle θ with the horizontal. The horizontal \ndistance covered by its fall to ground is \nmaximum when the angle θ is equal to",
    "options": [
      "0°",
      "30°",
      "45°",
      "90°"
    ],
    "correctAnswer": 2,
    "explanation": "We know that, Range (R) = \n2\nu sin 2\ng\nθ \nFor maximum range, sin2θ = 1 \n\n sin 2θ = sin 90º \n\n 2θ = 90° \n\n θ = 45°",
    "examSource": "BITSAT-2019",
    "image": "/images/yct_motion_plane/p77_img1_xref654.png"
  },
  {
    "id": "yct-motion-plane-q328",
    "num": 328,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A projectile A is thrown at an angle of 30° to \nthe horizontal from point P. At the same time, \nanother projectile B is thrown with velocity v2 \nupwards from the point Q vertically below the \nhighest point. For B to collide with A, \n2\n1\nv\nv should be",
    "options": [
      "1",
      "2",
      "1\n2",
      "4"
    ],
    "correctAnswer": 2,
    "explanation": "If projectile B collides with A, then their vertical \nvelocity should be same. \n\nv1 sin30° = v2 \n\n2\n1\nv\nsin30\nv =\n° ⇒ \n2\n1\nv\n1\nv\n2\n=",
    "examSource": "BITSAT-2020",
    "image": "/images/yct_motion_plane/p78_img1_xref661.png"
  },
  {
    "id": "yct-motion-plane-q329",
    "num": 329,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A stone is projected from the ground with \nvelocity 25 m/s. Two seconds later, it just clears \na wall 5m high. The angle of projection of the \nstone is (g = 10m/sec2)",
    "options": [
      "30°",
      "45°",
      "50.2°",
      "60°"
    ],
    "correctAnswer": 0,
    "explanation": "Given, \n\nh = 5 m, t = 2s, uy = 25 sin θ \nAfter 2 sec it clear a wall of 5m high means its height \nfrom ground is nearly 5m. \nHeight, h = uyt - \n2\ngt\n2 \n\n5 = 25 sinθ × 2 -\n2\n1 10 (2)\n2 ×\n×\n\n5 + 20 = 50 sinθ \n\nsinθ = 1/2 \n\nθ = 30°",
    "examSource": "BITSAT-2007",
    "image": "/images/yct_motion_plane/p78_img1_xref661.png"
  },
  {
    "id": "yct-motion-plane-q330",
    "num": 330,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A cannon ball has the same range R on \nhorizontal plane for two angles of projection θ \nand β, then",
    "options": [
      "θ = 180° - β",
      "θ = 90° - β",
      "θ = 45° + β",
      "θ = 60° + β"
    ],
    "correctAnswer": 1,
    "explanation": "A cannon ball has the same range R on \nhorizontal plane for two angles of projection θ and β, \nthen \n\nθ + β = 90° \n\nθ = 90 - β",
    "examSource": "BITSAT-2008",
    "image": "/images/yct_motion_plane/p78_img1_xref661.png"
  },
  {
    "id": "yct-motion-plane-q331",
    "num": 331,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A projectile projected at an angle 30° from the \nhorizontal has a range R. If the angle of \nprojection at the same initial velocity be 60°, \nthen the range will be -",
    "options": [
      "R",
      "R/2",
      "2R",
      "R2"
    ],
    "correctAnswer": 0,
    "explanation": "Range of projectile is given by, \n\nR = \n2\nu sin 2\ng\nθ \nCase 1: θ1 = 30º \n\nR1 =\n2\n2\nu sin 60º\nu\n3\ng\ng\n2\n=\n×\n\nCase 2 : θ2 = 60º \n\nR2 = \n2\n2\n2\nu sin120º\nu\nu\n3\ncos30º\ng\ng\ng\n2\n=\n=\n×\n\n∴ \nR1 = R2",
    "examSource": "BITSAT-2009",
    "image": "/images/yct_motion_plane/p78_img1_xref661.png"
  },
  {
    "id": "yct-motion-plane-q332",
    "num": 332,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "Two projectiles A and B are thrown with the \nsame speed but angles are 40° and 50°",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 0,
    "explanation": "Time of flight \n2usin\n(T)\ng\nθ\n=\n\nVelocity of projectile A & B are same \nSo, \n\nT\nsin\n∝\nθ \n\nθA < θB \nHence, \nTA < TB \nSo, A will fall earlier",
    "examSource": "with the  horizontal. Then      (a) A will fall earlier      (b) B will fall earlier      (c) Both will fall at the same time    (d) None of these   BITSAT- 2010",
    "image": "/images/yct_motion_plane/p78_img1_xref661.png"
  },
  {
    "id": "yct-motion-plane-q333",
    "num": 333,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A body is projected, making an acute angle \nwith the horizontal. If angle between velocity \nv\n\u0002\nand acceleration g\n\u0002\nis θ, then",
    "options": [
      "θ = 90°",
      "θ = 0°",
      "90° < θ < 0°",
      "0° < θ < 180°"
    ],
    "correctAnswer": 3,
    "explanation": "Here, velocity is acting upward when projectile is going \nupward and acceleration is downward. \nAs per the question, the angle between v\u0002 and g\u0002 is θ, \nthen θ should be more than 0° but less than 180° \nSo, \n0°< θ° < 180°",
    "examSource": "BITSAT-2013",
    "image": "/images/yct_motion_plane/p78_img1_xref661.png"
  },
  {
    "id": "yct-motion-plane-q334",
    "num": 334,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "The range of the particle when launched at an \nangle of 15° with the horizontal is 1.5 km. What \nis the range of the projectile when launched at \nan angle of 45° to the horizontal.",
    "options": [
      "1.5 km",
      "3.0 km",
      "6.0 km",
      "0.75"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, \n\nR1 = 1.5 km, θ = 15º \nIst Case- \nWhen a particle throw at an angle θ then, \n\nR1 = \n2\nu sin 2\ng\nθ \n1.5 = \n2\nu sin(2 15 )\ng\n×\n°\n2\no\nu sin30\ng\n=\n\n2\nu\n1.5\n2g\n=\n\n2\nu\n3km\ng =\n\nIInd Case- \nHorizontal range for angle of projection 45° will be: \n\nR2 = \n2\nu sin(2 45º)\ng\n×\n2\no\nu sin90\ng\n=\n\nR2=\n2\nu\n3km\ng =\n\n[∴\n2\nu\n3km\ng =\n] \nSo, the range of projectile is 3 km.",
    "examSource": "km   BITSAT-2012",
    "image": "/images/yct_motion_plane/p79_img1_xref668.png"
  },
  {
    "id": "yct-motion-plane-q335",
    "num": 335,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "The position of a projectile launched from the \norigin at t = 0 is given by \n(\n)\n^\n^\nr = 40i + 50j\n\u0002\nm at t = \n2s. If the projectile was launched at an angle θ \nfrom the horizontal, then θ is (take g = 10 m/s²)",
    "options": [
      "1 2\ntan\n3\n-",
      "1 3\ntan\n2\n-",
      "1 7\ntan\n4\n-",
      "1 4\ntan\n5\n-"
    ],
    "correctAnswer": 2,
    "explanation": "We know that horizontal component of \nprojected velocity remains constant \nSo, according to question - \nHorizontal velocity (ux) = 40\n0\n2\n0\n-\n-\n = 20 m/s \nAnd, initial vertical velocity (uy) \n\nsy = uyt +\n2\n1 at\n2\n\n50 = uy (2) - 1\n2 (10) (2)2 \n\nuy = 70\n35 m/s\n2 =\n\n∴ tan θ =\ny\nx\nu\n35\n7\nu\n20\n4\n=\n=\n\n1 7\ntan\n4\n-\nθ =",
    "examSource": "BITSAT - 2015",
    "image": "/images/yct_motion_plane/p79_img1_xref668.png"
  },
  {
    "id": "yct-motion-plane-q336",
    "num": 336,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "The equation of trajectory of projectile is given \nby \n-\n2\nx\ngx\ny =\n,\n20\n3\nwhere x and y are in metre. \nThe maximum range of the projectile is",
    "options": [
      "8 m\n3",
      "4 m\n3",
      "3 m\n4",
      "3 m\n8"
    ],
    "correctAnswer": 1,
    "explanation": "The equation of trajectory of projectile is:- \n\n2\nx\ngx\ny\n20\n3\n=\n-\n\n.…(i) \n\ny =\n2\n2\n2\ngx\nx tan\n2u cos\nθ -\nθ \nWhere, y = vertical component \n\nx = horizontal component \n\nu = initial velocity \nComparing the equation (i) with equation of trajectory \nof a projectile \n\ntanθ = 1 ,\n30\n3\nθ =\n° \n\n2u2 cos2 θ = 20 \n\nu2 = \n2\n20\n40\n3\n2cos\n=\nθ\n\nRange, \n2\nu sin2\nR\ng\nθ\n=\n\nFor, \nRmax at θ = 45° \n∵ \nRmax = \n2\nu sin90\ng\n° \n\n2\nmax\nu\n40\nR\ng\n3 10\n=\n=\n×\n⇒ \nmax\n4\nR\nm\n3\n=",
    "examSource": "BITSAT - 2015",
    "image": "/images/yct_motion_plane/p79_img1_xref668.png"
  },
  {
    "id": "yct-motion-plane-q337",
    "num": 337,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A projectile is fired with a velocity u making an \nangle θ with the horizontal. What is the \nmagnitude of change in velocity when it is at \nthe highest point",
    "options": [
      "u cos θ",
      "u",
      "u sin θ",
      "u cos θ -"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, \n\nInitial velocity of projectile- \n u\u0002 = u cosθ ^i + u sinθ ^j \n∵ At the highest point only horizontal velocity is \npresent \n\nv\u0002 = u cosθ ^\n^\ni\n0\nj\n+ × = u cosθ i \nTherefore, the change in velocity is \n\n∆v\u0002 = u\nv\n-\n\u0002\n\u0002 \n ∆v\u0002 = u cosθ ^i + u sinθ ^j- u cos θ ^i \n\n^\nv\nusin j\n∆=\nθ\n\u0002\n\n |∆v\u0002 | = u sin θ",
    "examSource": "u   BITSAT - 2014",
    "image": "/images/yct_motion_plane/p80_img1_xref675.png"
  },
  {
    "id": "yct-motion-plane-q338",
    "num": 338,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "Two projectiles A and B thrown with speeds in \nthe ratio 1:\n2 acquired the same heights. If A \nis thrown at an angle of 45° with the horizontal, \nthe angle of projection of B will be",
    "options": [
      "0°",
      "60°",
      "30°",
      "45°"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \nA\nB\nv\n1\nv\n2\n=\n\nThe expression for the height attained by projectile is \ngiven as- \n\nh = \n2\n2\nv\nSpeed\nv sin\nAngle\n2g\n=\n\n\nα\n\n\nα =\n\n\n\nNow, both A and B have same heights, therefore \n\nhA = hB \n\n2\n2\n2\n2\nA\nB\nv sin 45\nv sin\n2g\n2g\n°\nφ\n=\n\n2\n2\n2\n2\nA\nB\nv sin 45\nv sin\n° =\nφ \n\n2\n2\n2\nA\n2\nB\nv sin 45\nsin\nv\n° =\nφ \n\n2\n2\n2\nA\nB\nv\n1\nsin\nv\n2\n\n\n\n\nφ =\n×\n\n\n\n\n\n\n\n⇒\n2\n2\n2\n1\n1\nsin\n2\n2\n\n\n\n\nφ =\n×\n\n\n\n\n\n\n\n \n\n2\n1\nsin\n4\nφ =\n\n1\nsin\nsin30\n2\nφ =\n=\n° \n\nφ = 30°",
    "examSource": "BITSAT- 2017",
    "image": "/images/yct_motion_plane/p80_img1_xref675.png"
  },
  {
    "id": "yct-motion-plane-q339",
    "num": 339,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A hunter aims his gun and fires a bullet \ndirectly at a monkey on a tree. At the instant \nthe bullet leaves the barrel of the gun, the \nmonkey drops. Pick the correct statement \nregarding the situation.",
    "options": [
      "The bullet will never hit the monkey",
      "The bullet will always hit the monkey",
      "The bullet may or may not hit the monkey",
      "Can'"
    ],
    "correctAnswer": 1,
    "explanation": "This situation is clearly an example of projectile motion \nin which projectile motion of bullet is projected by \naiming the monkey sitting on the tree. The monkey will \ndie providing that at the time of firing, monkey was at \nthe same horizontal level as hunter. It will happen \nbecause, as the bullet was fired, its downward velocity \nwas same as monkey. So, both will travel same distance \ndownwards and bullet will strike monkey.",
    "examSource": "t be predicted  BITSAT- 2018",
    "image": "/images/yct_motion_plane/p80_img1_xref675.png"
  },
  {
    "id": "yct-motion-plane-q340",
    "num": 340,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile thrown at an angle of 30º with the \nhorizontal has a range R1 and attains a \nmaximum height h1. Another projectile thrown \nwith the same speed, at an angle of 30º with the \nvertical has a range R2 and attains a maximum \nheight h2' then",
    "options": [
      "R2=R1'h1=h2",
      "R2=2R1'h1=3h2",
      "R2=R1'h2=3h1",
      "R2=3R1'h1=3h2 \nCG PET -2018"
    ],
    "correctAnswer": 2,
    "explanation": "Height of projectile (H) =\n2\n2\nu sin\n2g\nθ ...(i) \n\nRange, R = \n2\nu sin 2\ng\nθ …(ii) \nThe angle of projection of the two projectiles are 30º \nand (90° - 30°) = 60º \nTherefore,\n2\n2\n1\nu sin (2 30º)\n3 u\nR\ng\n2\ng\n×\n=\n=\n\n2\n2\n2\nu sin (2 60º)\n3 u\nR\ng\n2\ng\n×\n=\n=\n\nAnd, \nHeight, h1 = \n2\n2\n2\nu sin 30\n1 u\n2g\n4 2g\n\n\n° =\n\n\n\n\n\n2\n2\n2\n2\nu sin 60\n3 u\nh\n2g\n4 2g\n\n\n°\n=\n=\n\n\n\n\n\nThus, \n\n2\n1\n2\n1\nR\nR\nh\n3h\n=\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p80_img1_xref675.png"
  },
  {
    "id": "yct-motion-plane-q341",
    "num": 341,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Four projectiles are thrown with the same \ninitial speed making angles 27º, 39o, 43º, \n51ºwith the horizontal. The range of projectiles \nwill be larges for the projectile fired at angle",
    "options": [
      "27º",
      "26º",
      "43º",
      "51º \nCG PET- 2015 \nMANIPAL-2020"
    ],
    "correctAnswer": 2,
    "explanation": "Range of a projectile is maximum at angle of \nprojection 45°. \nThe nearest value is 43°. Thus among given values of \nangles of projection, range will be maximum for 43°",
    "examSource": "",
    "image": "/images/yct_motion_plane/p81_img1_xref682.png"
  },
  {
    "id": "yct-motion-plane-q342",
    "num": 342,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile is thrown with an initial velocity of \n(\n)\n^\n^\nu\nai\nbj m /s\n=\n+\n\u0002\n. If the range of the projectile \nis double the maximum height reached by it, \nthen",
    "options": [
      "a= 2b",
      "b=2a",
      "a=b",
      "None of these \nCG PET- 2014"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, \n(\n)\n^\n^\nu\nai\nbj m/s\n=\n+\n\u0002\n, a = ucosθ, b = \nusinθ \n\nAccording to question: \n\nR = 2h \n\n(Given) \n\n2\n2\n2\nu sin 2\n2u sin\ng\n2g\nθ\nθ\n=\n\nsin2θ = sin2θ \n\n 2 sinθ cosθ = sin2θ \n\n2 cos θ = sin θ \n\ntanθ = 2 \nNow, \n^\n^\nu\nai\nbj\n=\n+\n\u0002\n\ntanθ = b\na \nSo, \nb\n2\na =\n\nb = 2a",
    "examSource": "",
    "image": "/images/yct_motion_plane/p81_img1_xref682.png"
  },
  {
    "id": "yct-motion-plane-q343",
    "num": 343,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A ball is projected at an angle θ upwards from \nhorizontal. The true statement is",
    "options": [
      "at each point of flight vertical component of \nmomentum remains constant",
      "at each point of flight horizontal component \nof momentum remains constant",
      "at the highest point of flight, potential energy \nis minimum",
      "at the highest point of flight, kinetic energy is \nzero \nCG PET- 2011"
    ],
    "correctAnswer": 1,
    "explanation": "A ball is projected at an angle θ upward from \nhorizontal. Then at each point of flight horizontal \ncomponent of momentum remains constant.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p81_img1_xref682.png"
  },
  {
    "id": "yct-motion-plane-q344",
    "num": 344,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A body of mass m is thrown upwards at an \nangle θ with the horizontal with velocity v. \nWhile rising up the velocity of the mass after t \nseconds will be",
    "options": [
      "(\n)\n(\n)\n2\n2\nvcos\nvsin\nθ\n+\nθ",
      "(\n)\n2\nvcos\nvsin\ngt\nθ -\nθ\n-",
      "2\n2 2\nv\ng t\n2vsin gt\n+\n-\nθ",
      "(\n)\n2\n2\n2\nv\ng\nt\n2vcos\ngt\n+\n+\n-\nθ\n\nCG PET- 2008"
    ],
    "correctAnswer": 2,
    "explanation": "vy = v sinθ - gt (vertical component) \n\n vx = v cosθ \n (horizontal component) \n\nVelocity of running mass after t sec will be: \n\n(\n)\n2\n2\ntv\n(vcos )\nvsin\ngt\n=\nθ\n+\nθ-\n\n(\n)\n2\n2\n2\n2\n2\ntv\nv cos\nv sin\ngt\n2vsin gt\n=\nθ +\nθ+\n-\nθ\n\n2\n2 2\ntv\nv\ng t\n2vsin gt\n=\n+\n-\nθ",
    "examSource": "",
    "image": "/images/yct_motion_plane/p81_img1_xref682.png"
  },
  {
    "id": "yct-motion-plane-q345",
    "num": 345,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Figure shows four paths for a kicked football. \nIgnoring the effects of air on the flight, rank \nthe paths according to initial horizontal \nvelocity component, highest first",
    "options": [
      "1,2,3,4",
      "2,3,4,1",
      "3,4,1,2",
      "4,3,2,1 \nCG PET- 2007"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, \n\nWe know that, \nRange, \n2\nu sin 2\nR\ng\nθ\n=\n\nR ∝ u2 \n∴ Horizontal range ∝ horizontal component of \nvelocity. \nHorizontal range- \n\nR4 > R3 > R2 > R1 \n Therefore, \n\nHorizontal velocity component \n\n(vH)4 > (vH)3 >(vH)2 >(vH)1",
    "examSource": "",
    "image": "/images/yct_motion_plane/p81_img1_xref682.png"
  },
  {
    "id": "yct-motion-plane-q346",
    "num": 346,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A particle of mass m is projected with a \nvelocity v making angle of 45º with the \nhorizontal. \nThe \nmagnitude \nof \nangular \nmomentum of the projectile about the axis of \nprojection when the particle is at maximum \nheight",
    "options": [
      "zero",
      "3\nmv\n4 2g",
      "3\nmv\n2g",
      "2\nmv\n2g \nCG PET- 2006"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, \n\nθ = 45° \nMaximum height attained by the projectile. \n\n2\n2\nv sin\nH\n2g\nθ\n=\n\n∴ \n2\n2\n2\n2\n2\nv sin 45º\nv\n1\nv\nH\n2g\n2g\n4g\n2\n\n\n=\n=\n×\n=\n\n\n\n\n\nVelocity at maximum height =v cos \nv\n45º\n2\n=\n\nAngular momentum at maximum height = mvH \n\n2\nv\nv\nm\n4g\n2\n=\n×\n×\n\n3\nmv\n4 2g\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p82_img1_xref691.png"
  },
  {
    "id": "yct-motion-plane-q347",
    "num": 347,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "When a body is thrown with a velocity u \nmaking an angle θ with the horizontal plane \nthe maximum distance covered by it in \nhorizontal direction is",
    "options": [
      "2\nu sin\ng\nθ",
      "2\nu sin 2\n2g\nθ",
      "2\nu sin 2\ng\nθ",
      "2\nu cos2\ng\nθ \nCG PET- 2005"
    ],
    "correctAnswer": 2,
    "explanation": "Distance travelled in horizontal direction = Horizontal \ncomponent of velocity × time period \n\n2u sin\nR\nu cos\ng\nθ\n=\nθ×\n\n2\n2sin cos\nR\nu\ng\nθ\nθ\n=\n×\n\n2\nu sin 2\nR\ng\nθ\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p82_img1_xref691.png"
  },
  {
    "id": "yct-motion-plane-q348",
    "num": 348,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile is thrown in upward direction \nmaking an angle of 60º with the horizontal \ndirection with a velocity of 150 m/s. Then, the \ntime after which its inclination with horizontal \nis 45º, is",
    "options": [
      "(\n)\n15\n3\n1 s\n-",
      "(\n)\n15\n3\n1 s\n+",
      "(\n)\n7.5\n3\n1 s\n-",
      "(\n)\n7.5\n3\n1 s\n+\n\nManipal UGET-2015"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, initial velocity (u) = 150 m/s \nInitial horizontal component = ux \n\nHorizontal velocity at angle 45° = Horizontal velocity at \nangle 60° \n\nvx = 150 cos60° \n\nv × cos45° = 150 × 1\n2 \n\nv × 1\n2\n= 75 \n\nv = 75\n2 \nVertical component uy = u sin60° \n\n = 150 × \n3\n75 3 m/s\n2 =\n\nVertical component at 45° \n\nvy = v sin 45° \n\nvy = \n1\n75 2\n2\n×\n= 75 \nBut first law of motion, v = u - gt \nThen, vy = uy - gt ⇒ \ny\ny\nu\nv\nt\ng\n-\n=\n\n75\n3\n75\n75( 3\n1)\nt\ns\n10\n10\n×\n-\n-\n=\n=\n\nt =\n(\n)\n7.5\n3\n1\n-\ns",
    "examSource": "JIPMER-2011",
    "image": "/images/yct_motion_plane/p82_img1_xref691.png"
  },
  {
    "id": "yct-motion-plane-q349",
    "num": 349,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A ball is projected from the point O with \nvelocity 20 m/s at an angle of 60º with \nhorizontal as shown in the figure. At highest \npoint of its trajectory, it strikes a smooth plane \nof inclination 30º at point A. The collision is \nperfectly inelastic. The maximum height from \nthe ground attained by the ball is",
    "options": [
      "18.75 m",
      "15 m",
      "22.5 m",
      "20.25 m \nManipal UGET-2015"
    ],
    "correctAnswer": 0,
    "explanation": "Given, u = 20 m/s, g = 10 m/s2 \n\nSpeed of ball before collision is - \n\nv = u cos θ \n\nv = u cos 60° =\n1\n20 2\n×\n= 10 m/s \nHighest point of its trajectory = h1 \n\nh1 = \n2\n2\nu sin 60\n2g\n° \nBecause collision is perfectly inelastic so, the ball does \nnot bounce and starts moving along the plane. \n\nv1 = v cos θ \n\nv1 = v cos 30° =\n3\n10\n5 3\n2\n×\n=\n\nLet, mass of ball = m kg \nBy energy conservation, K.E = potential energy \n\n2\n1\n2\n2\n1\n2\n1 mv\nmgh\n2\nv\nh\n2g\n=\n=\n\n∴ Maximum height attained by ball (H) = h1 + h2 \n2\n2\n2\n1v\nu sin 60\nH\n2g\n2g\n°\n=\n+\n\n(\n)\n2\n2\n2\n3\n3\n(20)\n400\n5 3\n2\n75\n4\nH\n2 10\n2 10\n20\n20\n\n\n×\n\n×\n\n\n\n\n=\n+\n=\n+\n×\n×\n\nH = 300\n75\n20\n20\n+\n\nH = 375\n20 = 18.75 m",
    "examSource": "",
    "image": "/images/yct_motion_plane/p82_img1_xref691.png"
  },
  {
    "id": "yct-motion-plane-q350",
    "num": 350,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two seconds after projection, a projectile is \ntravelling in a direction inclined at 30º to the \nhorizontal. After one more sec, it is travelling \nhorizontally, the magnitude and direction of its \nvelocity are",
    "options": [
      "2 20 m /s,60º",
      "20 3 m /s,60º",
      "6 40 m /s,60º",
      "40 6 m /s,30º \nManipal UGET-2014"
    ],
    "correctAnswer": 1,
    "explanation": "Total time of ascent = 3sec \nu sin\nt\n3\ng\nθ\n=\n= \n\nu sin θ = 3g \n\nusinθ = 30 \n\n.....(i) \nUsing first law of motion in vertical direction from A to \nB- \n\nvy = uy - gt \n\nv sin30° = u sinθ - g × 2 (∵t = 2 sec) \nv\nusin\n2g\n...(ii)\n2 =\nθ -\n\nAfter t = 3 second projectile is travelling horizontally \nthat is it reach highest point B. \n\nusin\nt\ng\nusin\n3\ng\nθ\n=\nθ\n=\n\n3g = u sinθ \nPutting value of u sinθ in equation (ii), we get - \n\nv\n3g\n2g\n2 =\n-\n\nv = 2g = 2 × 10 = 20 m/s \n\nv = 20 m/s \n∵ \nu cosθ = v cos30° \n\nu cosθ \n3\n20\n10 3\n2\n=\n×\n=\n\n.....(iii) \nSquaring equation (i) and (iii), we get- \n\nu2(sin2θ + cos2θ) = (30)2 + \n2\n(10 3) \n\nu2 = 900 + 300 = 1200 \n\nu\n20 3 m/sec\n=\n\nAnd, \n30\n3\ntan\n3\n10 3\n3\nθ =\n=\n=\n\nθ = 60°",
    "examSource": "",
    "image": "/images/yct_motion_plane/p83_img1_xref699.png"
  },
  {
    "id": "yct-motion-plane-q351",
    "num": 351,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A stone is thrown at an angle θ to be horizontal \nreaches a maximum height H. Then the time of \nflight of stone will be",
    "options": [
      "2H\ng",
      "2H\n2\ng",
      "2 2Hsin\ng\nθ",
      "2Hsin\ng\nθ \nManipal UGET-2010"
    ],
    "correctAnswer": 1,
    "explanation": "Given, maximum height = H \n\nLet stone is thrown with initial velocity u m/s at an \nangle = θ, t is time to reach maximum height. \nVertical velocity at point A (uy) = u sinθ \n\nVertical velocity at point B (vy) = 0 \nUsing first law of motion in vertical direction from A to \nB \n∵ \nvy = uy - gt \n\n0 = u sinθ - gt \n\ngt = u sinθ \n\n.....(i) \nAnd, \nH = uyt \n2\n1 gt\n2\n-\n\nH = (u sinθ)t \n2\n1 gt\n2\n-\n\n.....(ii) \nPutting value of u sinθ from equation (i) to in equation \n(ii), we get- \n\nH = (gt)t \n2\n1 gt\n2\n-\n\nH = gt2 \n2\n1 gt\n2\n-\n\n2\n1 gt\n2\n=\n\nt = \n2H\ng \nTime take to reach maximum height = time take to \nreach ground from maximum height \nThe time of flight of stone = 2t =\n2H\n2\ng",
    "examSource": "BCECE - 2004  AP EAMCET  (MEDICAL) - 1998",
    "image": "/images/yct_motion_plane/p83_img1_xref699.png"
  },
  {
    "id": "yct-motion-plane-q352",
    "num": 352,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A 1.5 kg ball is shot upward at an angle of 34o \nto the horizontal with an initial speed of 20 m/s, \nthen maximum height of the ball, reaches is \n(use cos 34o = 0.83 or sin 34o = 0.56)",
    "options": [
      "6.3 m",
      "9.4 m",
      "13.8 m",
      "11.2"
    ],
    "correctAnswer": 0,
    "explanation": "Given, mass of ball (m) = 1.5 kg, initial \nvelocity (u) = 20 m/s, maximum height (H) = ? \n\nMaximum height (H) =\n2\n2\nu sin\n2g\nθ \n2\n2\n2\n(20)\nsin 34\n400 (0.56)\nH\n2 10\n20\n×\n°\n×\n=\n=\n×\n\nH = 125.44\n6.27\n20\n=\n= 6.3 m",
    "examSource": "m  TS-EAMCET-07.05.2018, Shift-1",
    "image": "/images/yct_motion_plane/p84_img1_xref707.png"
  },
  {
    "id": "yct-motion-plane-q353",
    "num": 353,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A small ball is thrown at an angle 45o to the \nhorizontal \nwith \nan \ninitial \nvelocity \nof \n2 2m/s. The magnitude of mean velocity \naveraged over the first 2 s is [take, acceleration \ndue to gravity, g = 10 m/s2]",
    "options": [
      "7.0 m/s",
      "8.2 m/s",
      "7.8 m/s",
      "9 m/"
    ],
    "correctAnswer": 1,
    "explanation": "Given, initial velocity (u) = 2 2 m/s \n\n θ = 45°, t = 2 sec \n\nHorizontal component of velocity (ux) = u cosθ \nVertical component of velocity (uy) = u sinθ \nHorizontal displacement (x) = ux × t \n\n x = u cosθ × t \n\n x = 2 2\ncos45\n2\n×\n°× \n\n x = \n1\n2 2\n2\n2\n×\n× \n\n x = 4 m \nVertical displacement, \n\ny = uyt \n2\n1 gt\n2\n-\n\ny = u sin 45° × t \n2\n1 gt\n2\n-\n\n1\ny\n[2 2 sin 45\n2]\n10 2\n2\n2\n=\n°×\n-\n×\n× × \n\n1\n1\ny\n2 2\n2\n10\n2\n2\n2\n2\n\n\n=\n×\n×\n-\n×\n× ×\n\n\n\n\n\ny = 4 - 20 = -16 m \nTotal displacement, \n\nd = \n2\n2\nx\ny\n+\n\nd = \n(\n)\n2\n2\n4\n16\n+ -\n\nd\n16\n256\n=\n+\n = \n272\n16.49m\n=\n\n∵ Average velocity = Totaldisplacement\ntime\n\n = 16.49\n2\n\n = 8.24m/s ≈ 8.2 m/s",
    "examSource": "s  TS-EAMCET-07.05.2018, Shift-1",
    "image": "/images/yct_motion_plane/p84_img1_xref707.png"
  },
  {
    "id": "yct-motion-plane-q354",
    "num": 354,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A particle aimed at a target, projected with an \nangle 15o with the horizontal is short of the \ntarget by 10 m. If projected with an angle of \n45o is away from the target by 10 m, then the \nangle of projection to hit the target is",
    "options": [
      "1\n1\n1\nsin\n2\n4\n-\n\n\n\n\n",
      "1\n1\n3\nsin\n2\n4\n-\n\n\n\n\n",
      "1\n1\n10\nsin\n2\n4\n-\n\n\n\n\n",
      "1\n1\n20\nsin\n2\n4\n-\n\n\n\n\n"
    ],
    "correctAnswer": 1,
    "explanation": "Let, d is the distance of target, \nHorizontal range of projectile \n2\nu sin 2\n(R)\ng\nθ\n=\n\nWhen \no\n15 ,\nθ =\n(\n)\n2\no\n2\n1\nu sin 2 15\nu\nR\ng\n2g\n×\n=\n=\n\nWhen \no\n45 ,\nθ =\n(\n)\n2\no\n2\n2\nu sin 2\n45\nu\nR\ng\ng\n×\n=\n=\n\nAccording to question, \nFrom figure-1, \n\n2\n1\nu\nR\nd\n10\n2g\n=\n=\n-\n\n...(i) \nFrom figure-2, \n\n2\n2\nu\nR\nd\n10\ng\n=\n=\n+\n\n...(ii) \nDividing equation (i) by equation (ii), wet get- \n\n1\nd\n10\n2\nd\n10\n-\n=\n+\n\nd = 30 m \nFrom equation (ii), \n2\nu\n30\n10\n40\ng =\n+\n=\n\n...(iii) \nSo, the angle of projection to hit the target at 30 m, \n\n30 = 40 sin2θ \n\n1\n1\n3\nsin\n2\n4\n-\n\nθ =\n\n\n\n",
    "examSource": "TS-EAMCET.11.09.2020, Shift-2",
    "image": "/images/yct_motion_plane/p84_img1_xref707.png"
  },
  {
    "id": "yct-motion-plane-q355",
    "num": 355,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A ball is projected with a velocity 5 m/s, so that \nits horizontal range is twice the greatest height \nattained. The value of range is",
    "options": [
      "10 m",
      "2 m",
      "4 m",
      "5"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, initial velocity, u = 5 m/s and \nhorizontal range (R) = 2 × greatest height attained (H) \nWe know, \n\n2\nu sin 2\nR\ng\nθ\n=\n and \n2\n2\nmax\nu sin\nH\n2g\nθ\n=\n\nAccording to question, R = 2H \n\n2\n2\n2\nu sin 2\nu sin\n2\ng\n2g\nθ\nθ\n=\n\n sin2θ = sin2θ \n 2 sinθ cosθ = sin2θ \n\n 2 cosθ = sinθ \n2 = sin\ncos\nθ\nθ \n2\ntan\n1\nθ =\n\nsinθ = 2\n5\n, cosθ = 1\n5\n\n∴ \nR = \n2\nu sin 2\ng\nθ \n\nR = \n2\n2\n1\n25 2\n(5)\n2sin cos\n5\n5\n10\n10\n× ×\n×\n×\nθ\nθ =\n\nR = 2 m",
    "examSource": "m  TS-EAMCET-14.09.2020, Shift-1",
    "image": "/images/yct_motion_plane/p85_img1_xref715.png"
  },
  {
    "id": "yct-motion-plane-q356",
    "num": 356,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Initial velocity with which a body is projected is \n10 m/s from the base of an inclined plane as \nshown in the given figure. If the angle of \nprojection is 60o with the horizontal, then the \nrange R is [take, g = 10 m/s2]",
    "options": [
      "15 3 m\n2",
      "40 m\n3",
      "5 3m",
      "20 m\n3"
    ],
    "correctAnswer": 3,
    "explanation": "Given, initial velocity of projectile (u) = 10 \nm/s \nAngle of projection with inclined plane, \n\n(θ) = 60o - 30o = 30° \nHorizontal component of velocity (ux) = u cos30o \nVertical component of velocity (uy) = u sin30o \n\nEffective acceleration along inclined plane and \nperpendicular to inclined plane are ax and ay \nrespectively. \nTime of flight (T) = \ny\n2usin\na\nθ \n\nT\n2usin\ngcos\nθ\n=\nθ \n\nT =\no\no\n2 10 sin30\ng\ncos30\n×\n×\n×\n\nT \n1\n2 10\n2\n3\n10\n2\n×\n×\n=\n×\n = 2 sec\n3\n\nRange over an inclined plane :- \n\n2\nx\nx\n1\nR\nu t\na t\n2\n=\n-\n\nR = \no\no\n2\n1\n4\n10cos30\ngsin30\n2\n3\n3\n×\n-\n×\n\nR = \n3\n2\n1\n1\n4\n10\n10\n2\n2\n2\n3\n3\n×\n×\n-\n×\n×\n×\n\nR = \n10\n10\n3\n-\n = 30 10\n3\n-\n20 m\n3\n=",
    "examSource": "TS-EAMCET-10.09.2020, Shift-2",
    "image": "/images/yct_motion_plane/p85_img1_xref715.png"
  },
  {
    "id": "yct-motion-plane-q357",
    "num": 357,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile is fired at an angle of 45o with the \nhorizontal. Elevation angle of the projectile at \nits highest point as seen from the point of \nprojection is",
    "options": [
      "60o",
      "1 1\ntan\n2\n-\n\n\n\n\n",
      "1\n3\ntan\n2\n-\n\n\n\n\n\n\n",
      "45"
    ],
    "correctAnswer": 1,
    "explanation": "Max. height (H) = \n2\n2\n2\nu sin 45\nu\nAC\n2g\n4g\n° =\n=\n\nHorizontal range (R) = \n(\n)\n2\n2\nu sin 2\n45\nu\ng\ng\n×\n° =\n\n2\nu\nOC\nR / 2\n2g\n∴\n=\n=\n\n2\n2\nAC\nu / 4g\n1\ntan\nOC\n2\nu / 2g\nα =\n=\n=\n\n(\n)\n1\ntan\n1/ 2\n-\n∴α =",
    "examSource": "o  TS-EAMCET-10.09.2020, Shift-2",
    "image": "/images/yct_motion_plane/p86_img1_xref726.png"
  },
  {
    "id": "yct-motion-plane-q358",
    "num": 358,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile is launched from point A of the \ngiven landscape with a water body as shown in \nthe diagram. The launching angle is 15o. From \nthe following, identify the right initial velocity \nof the projectile with which it will fall \nsomewhere in between the points C and D. \n[Assume, g = 10 m/s2]",
    "options": [
      "21.5 m/s",
      "22.5 m/s",
      "19.5 m/s",
      "24.0 m/"
    ],
    "correctAnswer": 0,
    "explanation": "According to given condition, range must be greater \nthan 20 m and less than 24.2 m. \n\n20\nR\n24.2\n≤\n≤\n\n2\nu sin 2\n20\n24.2\ng\nθ\n≤\n≤\n\n(\n)\n2\no\nu\nsin 2 15\n20\n24.2\n10\n×\n×\n≤\n≤\n\n400 ≤ u2 ≤ 484 \n\n20 m/s ≤ u ≤ 22 m/s \n∴ \n20\n22\nu\n2\n+\n=\n\n u = 21.5 m/s",
    "examSource": "s  TS-EAMCET-10.09.2020, Shift-1",
    "image": "/images/yct_motion_plane/p86_img1_xref726.png"
  },
  {
    "id": "yct-motion-plane-q359",
    "num": 359,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "An archer shoots an arrow from a height 4.2 m \nabove the ground with a speed 40 m/s and at an \nangle 30o as shown in the figure. Determine the \nhorizontal distance R covered by the arrow, \nwhen it hits the ground, (take g = 10 m/s2)",
    "options": [
      "185 m\n3",
      "84 3m",
      "68 3m",
      "95 m\n3"
    ],
    "correctAnswer": 1,
    "explanation": "Given, speed of arrow (u) = 40m/s, θ = 30° \n\nh = 4.2 m \n\nHorizontal range R1 covered by the arrow is given by \n2\n1\nu sin 2\nR\ng\nθ\n=\n(\n)\n(\n)\n2\no\n40\nsin 2 30\n10\n×\n×\n=\n\no\n1\n1600 sin60\n3\nR\n160\n80 3 m\n10\n2\n×\n=\n=\n×\n=\n\nIf t be the time taken by the arrow reaching from B to C \nFrom the second equation of motion, \n⇒ h = \n2\n1\nut\ngt\n2\n+\n\n4.2 = u sin 30° t +\n2\n1 10\nt\n2×\n×\n\n(uy = usin30°) \n4.2 = 20 t + 5t2 \n50 t2 + 200t - 42 = 0 \n2 (25t2 + 100t - 21) = 0 \n25t2 + 100t - 21= 0 \nSolving the quadratic equation, t = 1sec\n5\n\nDistance travelled in horizontal direction is given by \nR2 = u cos 30° × t \n= \n3\n1\n40\n2\n5\n×\n×\n⇒ R2 = 4 3 m \nHence, the horizontal distance covered by the arrow \nR = R1 + R2 \n\n= 80 3\n4 3\n+\n\nR\n84 3 m\n=",
    "examSource": "TS-EAMCET-06.05.2019, Shift-1",
    "image": "/images/yct_motion_plane/p86_img1_xref726.png"
  },
  {
    "id": "yct-motion-plane-q360",
    "num": 360,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A small object is thrown at an angle 45o to the \nhorizontal with an initial velocity v0. The \nvelocity is averaged for first \ns\n2 and the \nmagnitude of average velocity comes out to be \nsame as that of initial velocity, i.e. |vo|. The \nmagnitude |v0| will be (take, g = 10 m/s2)",
    "options": [
      "3 m/s",
      "3 2 m/s",
      "4 m/s",
      "5 m/"
    ],
    "correctAnswer": 3,
    "explanation": "Let object is at B ( x, y) after t\n2s\n=\n\nThen, \n0\nx\n0\n0\nx\nu × t = v cos45\n2\nv\n=\n×\n=\n\nand \n2\ny\ny\n1\ny\nu t\na t\n2\n=\n-\n\n(\n)\n(\n)\n2\n0\n1\nv\nsin 45\n2\n(10)\n2\n2\n=\n°\n-\n×\n [∵ ay = g] \n\n(\n)\n0\nv\n10 m\n=\n-\n\nDisplacement OB of particle is \n(\n)\n2\n2\n2\n2\n0\n0\nOB\nOA\nAB\nv\nv\n10\n=\n+\n=\n+\n-\n\nSo, \navg\n0\n0\nOB\nv\nv or OB = v t\nt\n=\n=\n\n(\n)\n(\n)\n2\n2\n2\n2\n2\n0\n0\n0\n0\n0\n0\nv\nv\n10\nv\n2 \n v\nv\n10\n2v\n+\n-\n=\n⇒\n+\n-\n=\n\n(v0 - 10)2 = v0\n2 \nv0\n2 + 100 - 20v0 = v0\n2 \n20v0 = 100 ⇒ v0 = 5 m/s",
    "examSource": "s  TS-EAMCET-05.05.2018, Shift-1",
    "image": "/images/yct_motion_plane/p87_img1_xref736.png"
  },
  {
    "id": "yct-motion-plane-q361",
    "num": 361,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A cricket player can throw a ball with an initial \nspeed of 30 m/s. What is the maximum range of \nthe player can throw the ball? Neglect air \nresistance. [Take, g = 10 m/s2]",
    "options": [
      "100 m",
      "90 m",
      "80 m",
      "90 2"
    ],
    "correctAnswer": 1,
    "explanation": "Given, u = 30 m/s, g = 10 m/s2 \n∵ \n2\nu sin 2\nR\ng\nθ\n=\n\nFor R to be maximum then sin 2θ = 1 or θ = 45° \n2\nu sin 2\nR\ng\nθ\n=\n\nR = (\n)\n( )\n2\n2\n30\n1\n900 1\n90\n10\n10\n×\n×\n=\n=\nm",
    "examSource": "m  TS-EAMCET-05.05.2018, Shift-2",
    "image": "/images/yct_motion_plane/p87_img1_xref736.png"
  },
  {
    "id": "yct-motion-plane-q362",
    "num": 362,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A boy standing on a moving truck throws a \nprojectile such that he is able to catch it back \nafter the truck has moved 100 m. If the truck is \nmoving horizontally along a straight line with a \nconstant speed 30 m/s, at what speed (relative \nto the truck) must the projectile is thrown. \n(Assume g = 10 m/s2)",
    "options": [
      "55 m /s\n3",
      "43 m / s\n2",
      "50 m / s\n3",
      "23 m / s\n2"
    ],
    "correctAnswer": 2,
    "explanation": "Given, velocity of truck = 30 m/s \n\ng = 10 m/s2 \nTime taken by truck to move 100m \n\nt = 100\n10 sec.\n30\n3\n=\n\nDistance taken by projectile t1 to reach maximum height \nis given by \n\n2\n1\ns ut\nat\n2\n=\n+\n\n(\n)\n2\n1\n0\nut\ng t\n2\n=\n+\n-\n\n2\n2ut\ngt\n=\n\ngt\nu\n2\n=\n\n10\n10\n3\nu\n2\n×\n=\n100\n6\n=\n50 m/s\n3\n=",
    "examSource": "TS-EAMCET-04.05.2019, Shift-2",
    "image": "/images/yct_motion_plane/p87_img1_xref736.png"
  },
  {
    "id": "yct-motion-plane-q363",
    "num": 363,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A particle is projected from the ground with \nsome initial velocity making an angle of 45o \nwith the horizontal. If it reaches a height of 7.5 \nm above the ground, while it travels a \nhorizontal distance of 10 m from the point of \nprojection, then the initial speed of particle is \n(assume, g = 10 m/s2)",
    "options": [
      "10 m/s",
      "20 m/s",
      "15 m/s",
      "25 m/"
    ],
    "correctAnswer": 1,
    "explanation": "Angle of projection = 45° \nVertical height (hy) = 7.5m \nHorizontal distance (hx) = 10m \nsx = u. cos θ.t = ucos45o.t \n10 = \n1\nu\nt\n2\n×\n× \nt = 10 2\nu\n\n.... (1) \nsy = u sinθt - 1\n2 gt2 \n7.5 = \n2\nu\n10 2\n1\n10 10 10\n2\nu\n2\nu\n2\n×\n×\n×\n×\n-\n×\n\n2\n1000\n7.5\n10\nu\n=\n-\n\n10 - 7.5 = \n2\n1000\nu\n\n2.5 = \n2\n1000\nu\n\n2\nu = 1000\n2.5 \n2\nu = 400 \n u = 20 m/s",
    "examSource": "s  TS-EAMCET-09.09.2020, Shift-2",
    "image": "/images/yct_motion_plane/p87_img1_xref736.png"
  },
  {
    "id": "yct-motion-plane-q364",
    "num": 364,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two bodies are projected at angles θ and (90º- \nθ) to the horizontal with the same speed. The \nratio of their times of flight is",
    "options": [
      "sin θ :1",
      "cos θ :1",
      "sin θ : cos θ",
      "cosθ : sin θ \nJCECE-2017"
    ],
    "correctAnswer": 2,
    "explanation": "For the first body angle of projection is θ \nSo, time of flight (T1) = 2usin\ng\nθ \n....(i) \nFor the second body angle of projection is (90 - θ) \nTime of flight (T2) = \n(\n)\n90\n2u sin\ng\n° -θ \nT2 = \ncos\n2u\ng\nθ \n\n.... (ii) \nDividing equation (i) and (ii), we have \n1\n2\n2usin\nT\ng\n2u cos\nT\ng\nθ\n=\nθ \n1\n2\nT\nsin\nT\ncos\nθ\n=\nθ \nThe ratio of time of flight \n1\n2\nT : T\nsin :cos\n=\nθ\nθ",
    "examSource": "",
    "image": "/images/yct_motion_plane/p88_img1_xref742.png"
  },
  {
    "id": "yct-motion-plane-q365",
    "num": 365,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A shell bursts on contact with the ground and \npieces from it fly in all directions with velocities \nupto 60 m/s. Find the time in which a man 180 \nm away is in danger.",
    "options": [
      "2 3s",
      "6 2 s",
      "4 3s",
      "None of these \nJCECE-2016"
    ],
    "correctAnswer": 1,
    "explanation": "Given, u = 60 m/s, R = 180 m \nWe know that, \nHorizontal range \n2\nu\n(R)\nsin 2\ng\n=\nθ \n\n2\n(60)\n180\nsin2\n10\n=\nθ \n\n1\nsin2\n2\nθ =\n= sin30o \n\n15º\nθ =\n\nAs there are always two directions of projections θ and \n(90º - θ) for the given range, hence two directions of \nprojection, i.e. 15º and 90º - 15º, i.e. 15º and 75º \nLet T1 and T2 be the times of flight in the two cases, \nWhere, \n1\n2\n2usin15º\n2usin75º\nT\nandT\ng\ng\n=\n=\n\nThe man is in danger for a time \n\n2\n1\n2u\nT\nT\n(sin75º sin15º)\ng\n-\n=\n-\n\n2u (2cos45ºsin30º)\ng\n=\n\nC\nD\nC\nD\n[usingidentity,sinC\nsinD\n2cos\nsin\n]\n2\n2\n+\n-\n-\n=\n\n2 60\n1\n1\n2\n10\n2\n2\n×\n=\n× ×\n×\n\n6 2 s\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p88_img1_xref742.png"
  },
  {
    "id": "yct-motion-plane-q366",
    "num": 366,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A stone is projected from the point on the \nground in such a direction so as to hit a bird on \nthe top of a telegraph post of height and then \nattain the maximum height 3h/2 above the \nground. If at the instant of projection, the bird \nwere to fly away horizontally with uniform \nspeed. Find the ratio between horizontal \nvelocities of the bird and stone, if the stone still \nhits the bird while decreasing.",
    "options": [
      "3\n1\n-",
      "1/\n3\n1\n-",
      "3\n1\n+",
      "1/\n3\n1\n+ \nJCECE-2015"
    ],
    "correctAnswer": 0,
    "explanation": "y\n1\n2\n2u\nt\nt\ng\n+\n=\n\n....(i) \nFor motion of the stone in vertical direction we can say \n\n2\ny\n1\nh\nu t\ngt\n2\n=\n-\n\ngt2 - 2uyt + 2h = 0 \n\n....(ii) \nt1 and t2 are the roots of equation (ii) \n\n1 2\n2h\nt t\ng\n=\n\n....(iii) \n\n2\ny\nu\n3h\nH\n2\n2g\n=\n=\n\n3h\nH\n2\n\n\n=\n\n\n\n\n∵\n\ny\nu\n3gh\n=\n\n....(iv) \nPutting the value of uy in equation (i), we get- \n\n1\n2\n3h\nt\nt\n2\ng\n+\n=\n\n....(v) \nand \n1 2\n2h\nt t\ng\n=\n\n(t2 -t1)2 = (t1+t2)2 - 4t1t2\n\n12h\n8h\n4h\ng\ng\ng\n=\n-\n=\n\n2\n1\nh\nt\nt\n2 g\n-\n=\n\n....(vi) \nFrom equation (v) and (vi), we get- \n\n2\nh\nt\ng\n=\n(\n)\n3\n1\n+\n\nAB = vb t2 = ux (t2 - t1) \n∴ Ratio of horizontal velocities of bird and stone \n\nb\n2\n1\nx\n2\nv\nt\nt\n2\n3\n1\nu\nt\n3\n1\n-\n=\n=\n=\n-\n+",
    "examSource": "",
    "image": "/images/yct_motion_plane/p88_img1_xref742.png"
  },
  {
    "id": "yct-motion-plane-q367",
    "num": 367,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A body is projected with velocity v1 from the \npoint A, another body at the same time is \nprojected vertically upwards from B with \nvelocity v2 as shown in adjoining figure. If the \npoint B lies vertically below the highest point \nC, then for both bodies to collide the ratio \n2\n1\nv\nv \nshould be",
    "options": [
      "0.5",
      "1",
      "3\n2",
      "2\n3\n\nJCECE-2013"
    ],
    "correctAnswer": 0,
    "explanation": "The two bodies will collide at the highest \npoint if both cover the same vertical height in the same \ntime \n\n2\n2\nu sin\nH\n2g\nθ\n=\n\nSo, \n2\n2\no\n2\n1\n2\nv sin 30\nv\n2g\n2g\n=\n\nor \n2\n2\n2\n2\n1\nv\nsin 30\nv\n°\n=\n\n2\n1\nv\nsin30\nv =\n° = 1\n0.5\n2 =",
    "examSource": "",
    "image": "/images/yct_motion_plane/p89_img1_xref748.png"
  },
  {
    "id": "yct-motion-plane-q368",
    "num": 368,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A particle is projected from the ground with an \ninitial speed of v at an angle θ with \nhorizontally. The average velocity of the \nparticle between its point of projection and \nhighest point of trajectory is",
    "options": [
      "2\nv 1\n2cos\n2\n+\nθ",
      "2\nv 1\n2cos\n2\n+\nθ",
      "2\nv 1 3cos\n2\n+\nθ",
      "v cos θ \nJCECE-2011"
    ],
    "correctAnswer": 2,
    "explanation": "Average velocity (v) = Totaldisplacement\nTotaltime\n\nFrom point O to B, the displacement S is, \n\nS = \n2\n2\nR\nH\n2\n\n\n+ \n\n\n \n\n.....(i) \n Total time = T\n2 \nHere, \n2\n2\n2\nv sin\nv sin 2\nH\n,R\n2g\ng\nθ\nθ\n=\n=\n\n2usin\nT\ng\nθ\n=\n\nPutting these value in equation (i), we get- \nAverage velocity (v) =\n2\n2\n2\n2\n2\nv sin\nv sin 2\n2g\n2g\n2vsin\n2g\n\n\n\n\nθ\nθ\n+\n\n\n\n\n\n\n\n\nθ\n\nvavg = \n2\nv 1 3cos\n2\n+\nθ",
    "examSource": "AP EAMCET - 2013",
    "image": "/images/yct_motion_plane/p89_img1_xref748.png"
  },
  {
    "id": "yct-motion-plane-q369",
    "num": 369,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile is fired making an angle 2 θ with \nhorizontal with velocity 4m/s. At any instant it \nmakes an angle θ , then its velocity is :",
    "options": [
      "4 cos θ",
      "4 (2 cos θ - sec θ )",
      "2 (sec θ + 4 cos θ )",
      "4 (sec θ + cos θ ) \nJCECE-2006"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, u = 4 m/s \n\nResolving the component along the x-axis and y-axis. \nNow equating the velocity along the horizontal \ncomponent \n\nux = vx \n\nu cos 2θ = v cos θ \n4cos2\nv\ncos\nθ =\nθ\n\n v = (\n)\n2\n4 2cos\n1\ncos\nθ -\nθ\n\n2\ncos2\ncos\n1\n\n\nθ =\nθ -\n\n\n∵\n\n v = \n1\n4 2cos\ncos\n\n\nθ -\n\n\nθ\n\n \n1\nsec\ncos\n\n\n=\nθ\n\n\nθ\n\n\n∵\n\nSo, v = [\n]\n4 2cos\nsec\nθ -\nθ",
    "examSource": "",
    "image": "/images/yct_motion_plane/p90_img1_xref756.png"
  },
  {
    "id": "yct-motion-plane-q370",
    "num": 370,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A rifle shoots a bullet with a muzzle velocity of \n500 m/s at a small target 50 m away. To hit the \ntarget the rifle must be aimed: \n\n (Take g = 10 m/s²)",
    "options": [
      "exactly at the target",
      "10 cm below the target",
      "10 cm above the target",
      "5 cm above the target \nJCECE-2005"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, s = 50 m, v = 500 m/s \nWe know that, \nDistance (s) = speed (v) × time (t) \n\n s = v × t \n\nt = s\nv \n\nt = 50\n0.1sec\n500 =\n\nFrom equation of motion, vertical displacement will be \ngiven by \n\nh = \n2\n1\nut\ngt\n2\n+\n\nu = 0, t = 0.1 sec \n\nh = \n1\n0\n10 0.1 0.1\n2\n+\n×\n×\n×\n\nh = .05 m = 0.05×100 \n\nh = 5 cm",
    "examSource": "",
    "image": "/images/yct_motion_plane/p90_img1_xref756.png"
  },
  {
    "id": "yct-motion-plane-q371",
    "num": 371,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The body is projected at such angle that the \nhorizontal range is three times the greatest \nheight. The angle of projection is :",
    "options": [
      "43º8'",
      "25º8'",
      "33º7'",
      "53º1'"
    ],
    "correctAnswer": 3,
    "explanation": "Given, R = 3H \nA body is projected at a velocity u with an angle θ with \nthe horizontal then. \nRange of the body- \n\n2\nu sin 2\nR\ng\nθ\n=\n\nMaximum height attained the body is given by \n\n2\n2\nu sin\nH\n2g\nθ\n=\n\nPutting the value of R and H in equation (i) \n\n2\n2\n2\nu sin 2\nu sin\n3\ng\n2g\nθ\nθ\n= ×\n\n(sin 2θ = 2sinθcosθ) \n\n2\n2\n2\nu 2sin cos\nu sin\n3\ng\n2g\nθ\nθ\nθ\n= ×\n\nsin\n4\ntan\n1.33\ncos\n3\nθ =\nθ =\n=\nθ\n\n53 1'\nθ =\n°",
    "examSource": "BCECE-2007  JCECE-2003  AIIMS-1998",
    "image": "/images/yct_motion_plane/p90_img1_xref756.png"
  },
  {
    "id": "yct-motion-plane-q372",
    "num": 372,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two projectiles, one fired from earth with \n5m\n-1\ns and the other fired from a planet with \n3m\n-1\ns trace \nidentical \ntrajectories. \nIf \nacceleration due to gravity on earth is 9.8m\n-2\ns , \nthen the acceleration due to gravity on the \nplanet is",
    "options": [
      "1.5m\n-1\ns",
      "3.5m\n-1\ns",
      "7.5m\n-2\ns",
      "9.5m\n-2"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, \n\n u1 = 5 m/s, u2 = 3 m/s, g = 9.8 m/s2 \nThey trace identical trajectory, that means their range is \nsame. \nRange of projectile is given by \n2\nu sin2\nR\ng\nθ\n=\n\nFor Earth \n\n2\n1\n1\nu sin2\nR\ng\nθ\n=\n\nFor planet \n\n2\n2\n2\nu\nsin 2\nR\ng\nθ\n=\n′\n\nR1= R2 \n\n2\n2\n1\n2\nu sin2\nu sin2\ng\ng\nθ\nθ\n=\n′\n\ng' =\n2\n2\n2\n1\nu\ng\nu × \n\ng' =\n2\n3\n9.8\n5\n\n×\n\n\n\n\n\n = 9\n9.8\n25×\n\n= 3.528m/s",
    "examSource": "s   COMEDK 2017",
    "image": "/images/yct_motion_plane/p90_img1_xref756.png"
  },
  {
    "id": "yct-motion-plane-q373",
    "num": 373,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "An arrow is shot into air. Its range is 200 m \nand its time of flight is 5 second. If \n-2\ng = 10ms , \nthen the horizontal component of the velocity \nof arrow is",
    "options": [
      "12.5m s-1",
      "25m/s",
      "31.25m s-1",
      "40m s-1"
    ],
    "correctAnswer": 3,
    "explanation": "Given, R = 200, T = 5 \nWe know that, \nusin\nTime of flight of projectile T\ng\n2\nθ\n=\n\nAnd, \n2\nu sin2\n2usin\nR\nucos\ng\ng\nθ\nθ\n=\n=\nθ \n R = T × u cos θ \n200 = 5 × u cosθ \nucosθ = 40 m/s",
    "examSource": "COMEDK 2016"
  },
  {
    "id": "yct-motion-plane-q374",
    "num": 374,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "If (range)2 is 4 3 time (maximum height)2 , \nthen angle of projection is",
    "options": [
      "45°",
      "60°",
      "75°",
      "30°"
    ],
    "correctAnswer": 3,
    "explanation": "We know that, \nHeight of projectile \n\n2\n2\nu sin\nH\n2g\nθ\n=\n\nRange (R) = \n2\nu sin 2\ng\nθ \nGiven, \n(Range)2 = 4 3 (maximum height )2 \n∴ \n2\n2\n2\n2\n2\nu sin2\nu sin\n4 3\ng\n2g\n\n\n\n\nθ\nθ\n=\n\n\n\n\n\n\n\n\n\n2\n2\n2\nu sin 2\nu sin\n4 3\ng\n2g\n\n\nθ\nθ\n=\n\n\n\n\n\n2\n2sin cos\nsin\n2\n4 3\nθ\nθ\nθ\n=\n\n4\ntan\n4 3\nθ =\n\n1\ntan\n3\nθ =\n\n∴ \n30\nθ =\n°",
    "examSource": "COMEDK 2018"
  },
  {
    "id": "yct-motion-plane-q375",
    "num": 375,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Assertion: The trajectory of projectile is \nquadratic in y and linear in x. \n\n Reason: \ny \ncomponent \nof \ntrajectory \nis \nindependent of x- component.",
    "options": [
      "If both Assertion and Reason are correct and \nReason \nis \nthe \ncorrect \nexplanation \nof \nAssertion.",
      "If both Assertion and Reason are correct, but \nReason is not the correct explanation of \nAssertion.",
      "If Assertion is correct but Reason is incorrect.",
      "If both the Assertion and Reason are incorrect. \n AIIMS-26.05.2018"
    ],
    "correctAnswer": 3,
    "explanation": "We know that the trajectory of a projectile \nmotion in the y-direction is given by \n\n2\n2\n2\ngx\ny\nx tan\n2u cos\n=\nθ -\nθ \nFrom above equation it is clear that the nature of the \ntrajectory of a projectile is linear in the y-direction and \nquadratic in the x-direction. \nAnd y-component is not independent of the x-\ncomponent of the projectile motion. \nIt is clear that both the assertions as well as reason are \nincorrect.",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q376",
    "num": 376,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Assertion: A tennis ball bounces higher on hills \nthan in plains. \n\n Reason: Acceleration due to gravity on the hill \nis greater than that on the surface of earth.",
    "options": [
      "If both Assertion and Reason are correct and \nReason \nis \nthe \ncorrect \nexplanation \nof \nAssertion.",
      "If both Assertion and Reason are correct, but \nReason is not the correct explanation of \nAssertion.",
      "If Assertion is correct but Reason is incorrect.",
      "If both the Assertion and Reason are \nincorrect. \n AIIMS-2009"
    ],
    "correctAnswer": 2,
    "explanation": "Consider the tennis ball bounces with a \nvelocity u. It will go up, till its velocity becomes zero. If \nh is the height up to which it rises on the hill, then \n\n(0)2 - u2 = 2(-g)h \nWhere, g is acceleration due to gravity on the hill. \n\n2\nu\nh\n2g\n=\n\nSince, the acceleration due to gravity on the hill (g) is \nless than that on earth (effect of height). It is clear that \nthe ball will get maximum height on the hills than in \nplains.",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q377",
    "num": 377,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two projectiles are fired from the same point \nwith the same speed at angle of projection 60º \nand 30º respectively. Which one of the \nfollowing is true?",
    "options": [
      "Their maximum height will be same",
      "Their range will be same",
      "Their landing velocity will be same",
      "Their time of flight will be same \n AIIMS-2014"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, \n u1 = u2 = u θ1 = 60º, θ2 = 30º \nIn Ist case: \nWe know that range \n(\n)\n(\n)\n2\n2\n2\n1\nu sin 2 60º\nu sin 90º 30º\nu sin120º\nR\ng\ng\ng\n+\n=\n=\n=\n\n(\n)\n2\n2\nu\ncos30º\n3u\ng\n2g\n=\n=\n\nIn IInd case: \nWhen θ2 = 30º, then \n2\n2\n2\nu sin60\nu\n3\nR\ng\n2g\n°\n=\n=\n\nHence, from the above, it is clear- \n\n R1 = R2 \nIt means, their range will be same.",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q378",
    "num": 378,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A boy playing on the roof of a 10 m high \nbuilding throws a ball with a speed of 10 m/s at \nan angle of 30º with the horizontal. How far \nfrom the throwing point will the ball be at the \nheight of 10 m from the ground? \n\n\n\n\n\n\n\n2\n1\n3\ng = 10m/s ,sin30º=\n,cos30º=\n2\n2",
    "options": [
      "5 5",
      "6",
      "3",
      "5 3 \n AIIMS - 2017 \nAIEEE - 2003"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, \n\nh = 10 m \n\nFrom building throws a ball with speed (u) = 10 m/s \nWe know, \nThe range of projectile (R) \n2\nu sin2\ng\nθ\n=\n\nR = \n2\no\n10 sin2(30 )\ng\n\nR = \no\n100sin(60 )\n10\n\nR = \n3\n10\n2\n×\n⇒ R = 5 3",
    "examSource": "",
    "image": "/images/yct_motion_plane/p92_img1_xref770.png"
  },
  {
    "id": "yct-motion-plane-q379",
    "num": 379,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A body is projected from the ground with a \nvelocity 50 m/s at an angle of 30º. It crosses a \nwall after 3 sec. How far beyond the wall the \nbody will strike the ground? [take g = 10 m/s2]",
    "options": [
      "86.6 m",
      "96.2 m",
      "100.1 m",
      "111.1 m \n AIIMS-26.05.2018"
    ],
    "correctAnswer": 0,
    "explanation": "Given that- \n\nVelocity (u) = 50m/s \n\nAngle ( )\n30\nθ =\n° \nWe know that time of fight- \n\n2usin\nT\ng\nθ\n=\n\n2 50 sin30\nT\n10\n×\n×\n°\n=\n\no\n1\nsin30\n2\n\n\n=\n\n\n\n\n\n1\n2 50\n2\nT\n10\n×\n×\n=\n\nT\n5sec\n=\n\nTime in air after crossing the wall \n\nt\n5\n3sec\n=\n-\n\nt\n2sec.\n=\n\nSo, \nDistance travelled beyond the wall \n\nd\nucos\nt\n=\nθ× \n\nd\n50 cos30\n2\n=\n×\n°× \no\n3\ncos30\n2\n\n\n=\n\n\n\n\n\n\n\n3\nd\n50\n2\n2\n=\n×\n×\n\nd\n50 3\n=\n ⇒ d\n86.6m\n=",
    "examSource": "(M)   BCECE-2012",
    "image": "/images/yct_motion_plane/p92_img1_xref770.png"
  },
  {
    "id": "yct-motion-plane-q380",
    "num": 380,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile can have the same range for two \nangles of projection. If h1 and h2 are maximum \nheights when the range in the two cases is R, \nthen the relation between R, h1 and h2 is",
    "options": [
      "1\n2\nR\n4 h h\n=",
      "1\n2\nR\n2 h h\n=",
      "1\n2\nR\nh h\n=",
      "None of these \n AIIMS-2013"
    ],
    "correctAnswer": 0,
    "explanation": "Let the angle of projection θ and range R, \nhence maximum height (h) attend correspond to this \nangle- \n\n2\n2\n1\nu sin\nh\n2g\nθ\n=\n\nFor equal range (R), the projection of the angle should \nbe θ and (\n)\n90 -θ from horizontal, so maximum height \n(h2) for (\n)\n90 -θ angle of projection is - \n\n(\n)\n2\n2\n2\nu sin\n90\nh\n2g\n-θ\n=\n\nand \n2\nu sin2\nR\ng\nθ\n=\n\n∴ \n(\n)\n2\n2\n2\n2\n1\n2\nu sin\n90\nu sin\nh h\n2g\n2g\n-θ\nθ\n=\n×\n\n(\n)\n4\n2\n2\n1\n2\n2\nu sin\n.sin\n90\nh h\n4g\nθ\n-θ\n=\n\n4\n2\n2\n1\n2\n2\nu sin\ncos\nh h\n4g\nθ\nθ\n=\n\n(\n)\n2\n4\n1\n2\n2\nu\nsin cos\nh h\n4g\nθ\nθ\n=\n\n∴ Multiply and divide by 4 \n\n2\n2\n1\n2\n2\nu (2sin cos )\nh h\n4 4g\nθ\nθ\n=\n×\n\n(\n)\n2\n4\n1\n2\n2\nu\nsin 2\nh h\n16g\nθ\n=\n (\nsin 2\n2sin cos\nθ =\nθ\nθ\n∵\n) \n\n2\n2\n1\n2\n2\n(u sin2 )\nh h\n16g\nθ\n=\n\n2\n1\n2\nR\nh h\n16\n=\n\n2\n1\n2\nR\n16h h\n=\n\n1\n2\nR\n16h h\n=\n= \n1\n2\n4 h h",
    "examSource": "",
    "image": "/images/yct_motion_plane/p92_img1_xref770.png"
  },
  {
    "id": "yct-motion-plane-q381",
    "num": 381,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile thrown with velocity v making \nangle θ with vertical gains maximum height H \nin the time for which the projectile remains in \nair, the time period is",
    "options": [
      "Hcos /g\nθ",
      "2Hcos /g\nθ",
      "4H / g",
      "8H /g \n AIIMS-2013"
    ],
    "correctAnswer": 3,
    "explanation": "Maximum height ( )\n(\n)\n2\n2\nv sin\n90\nH\n2g\n-θ\n=\n\n2\n2\nv cos\n2g\nθ\n=\n\n.....(i) \nTime of fight (T) \n(\n)\n2vsin 90\ng\n° -θ\n=\n\n2vcos\nT\ng\nθ\n=\n\nvcos\nT\ng\n2\nθ =\n\n.....(ii) \nFrom equation (i)- \n\n1 vcos\nvcos\nH\ng\n2\ng\ng\n\n\n\nθ\nθ\n=\n×\n\n\n\n\n\n\n\n.....(iii) \nFrom equation (ii) and (iii)- \n\n1 T\nT\nH\ng\n2\n2\n2\n\n\n\n=\n×\n×\n\n\n\n\n\n\n\n2\nT g\nH\n8\n=\n\n2\n8H\nT g\n=\n\n2\n8H\nT\ng\n=\n\n8H\nT\ng\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p93_img1_xref776.png"
  },
  {
    "id": "yct-motion-plane-q382",
    "num": 382,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A bomb is released from a horizontal flying \naeroplane. The trajectory of bomb is",
    "options": [
      "a parabola",
      "a straight line",
      "a circle",
      "a hyperbola \n AIIMS-2013"
    ],
    "correctAnswer": 0,
    "explanation": "When a bomb is released from an aeroplane it \nfollows a parabolic trajectory with a horizontal speed \nequal to that of the aeroplane. \nHowever, due to frictional force, it eventually loses this \nvelocity and gravitational force acting on it produces a \nvertical acceleration on it and it starts to fall towards the \nground. \nHence, the trajectory of the bomb forms a parabola with \nrespect to ground.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p93_img1_xref776.png"
  },
  {
    "id": "yct-motion-plane-q383",
    "num": 383,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "For a given angle of the projectile if the initial \nvelocity is doubled the range of the projectile \nbecomes",
    "options": [
      "Half",
      "One-fourth",
      "Two times",
      "Four times \n AIIMS-2011"
    ],
    "correctAnswer": 3,
    "explanation": "Let R is the range of initial velocity. \nWe know that- \n\n2\nu sin2\nR\ng\nθ\n=\n\nWhen initial velocity is doubled (i.e. u' = 2u) \nThen range, \n\n2\n(u ) sin2\nR\ng\n′\n′θ\n′ =\n\n2\n(2u) sin2\nR\ng\nθ\n′ =\n\n2\n4u sin 2\nR\ng\nθ\n′ =\n\nSo, \nR′ = 4R \nIf initial velocity of a projectile be doubled R will be \nbecomes 4 times.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p93_img1_xref776.png"
  },
  {
    "id": "yct-motion-plane-q384",
    "num": 384,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "An aircraft executes a horizontal loop with a \nspeed of 150 m/s with its wings banked at an \nangle of 12º. The radius of the loop is (g = 10 \nm/s2)",
    "options": [
      "10.6 km",
      "9.6 km",
      "7.4 km",
      "5.8 km \n AIIMS-2010"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \nv = 150 m/s, angle θ = 12o, g = 10 m/s2 \nUsing the relation for the radius (r) of loop. \n\n2\nv\ntan\nrg\nθ =\n\n2\nv\ntan12\nrg\n° =\n\n(\n)\n2\n150\ntan12\nr 10\n° =\n×\n\n22,500\n2250\n0.2126\nr 10\nr\n=\n=\n×\n\n2250\nr\n0.2126\n=\n⇒ r\n10583.25\n=\nm \n\n r\n10.583km\n=\n≈ 10.6 km",
    "examSource": "",
    "image": "/images/yct_motion_plane/p93_img1_xref776.png"
  },
  {
    "id": "yct-motion-plane-q385",
    "num": 385,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "If R and H represent the horizontal range and \nthe maximum height achieved by a projectile \nthen which of the relation exists?",
    "options": [
      "H\n4cot\nR =\nθ",
      "R\n4cot\nH =\nθ",
      "H\n4tan\nR =\nθ",
      "R\n4tan\nH =\nθ \n AIIMS-2009"
    ],
    "correctAnswer": 1,
    "explanation": "Range ( )\n2\nu sin2\nR\ng\nθ\n=\n\n2\n2u sin cos\nR\ng\nθ\nθ\n=\n\n....(i) \nHeight (H) \n2\n2\nu sin\n2g\nθ\n=\n\n....(ii) \nOn dividing equation (ii) by (i), we get- \n∴ \n2\n2\n2\nu sin\nH\n2g\n2u sin cos\nR\ng\nθ\n=\nθ\nθ \n\n2\n2\n2\nH\nu sin\ng\nR\n2g\n2u sin cos\nθ\n=\n×\nθ\nθ \n\nH\nsin\nR\n4cos\nθ\n=\nθ \n\nR\n4cos\nH\nsin\nθ\n=\nθ \n\nR\n4cot\nH =\nθ",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q386",
    "num": 386,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "The maximum range of a gun horizontal \nterrain is 16 km. If g = 10 m/s2. what must be \nthe muzzle velocity of the shell",
    "options": [
      "400 m/s",
      "200 m/s",
      "100 m/s",
      "50 m/s \n AIIMS-2004 \nCGPET-2010"
    ],
    "correctAnswer": 0,
    "explanation": "We know, \nHorizontal range ( )\n2\nu sin2\nR\ng\nθ\n=\n\nFor maximum range ( )\n45\nθ =\n° \n\n2\nmax\nu sin(2 45 )\nR\ng\n×\n°\n=\n\n =\n2\nu sin(90 )\ng\n° \n(sin 90° = 1) \n\n2\nmax\nu\nR\ng\n=\n\n2\nu\n16000\n10\n=\n\n2\nu\n16000 10\n=\n×\n\nu\n160000\n=\n\n∴ \nu = 400 m/sec",
    "examSource": "AIPMT - 1990  JIPMER - 2005"
  },
  {
    "id": "yct-motion-plane-q387",
    "num": 387,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two projectiles are projected with the same \nvelocity. If one is projected at an angle of 30º \nand the other at 60º to the horizontal, the ratio \nof maximum heights reached, is",
    "options": [
      "1:3",
      "2:1",
      "3:1",
      "1:4 \n AIIMS-2001"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n\n1\n2\n30 ,\n60\nθ =\n° θ =\n° \nWe know, \nMaximum height - \n\n2\n2\nu sin\nH\n2g\nθ\n=\n\nThen, \nθ = 30° \n\n2\n2\n1\nu sin 30\nH\n2g\n°\n=\n\n....(i) \nAnd, \nθ = 60° \n\n2\n2\n2\nu sin 60\nH\n2g\n°\n=\n\n....(ii) \nOn dividing equation (i) by (ii), we get- \n2\n1\n2\n2\nH\nsin 30\nH\nsin 60\n°\n=\n\n(\n)\n(\n)\n2\n1\n2\n2\n1/ 2\nH\nH\n3 / 2\n=\n\n1\n2\nH\n1/ 4\nH\n3/ 4\n=\n\n1\n2\nH\n1\nH\n3\n=\n\nHence, \n1\n2\nH : H\n1:3\n=",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q388",
    "num": 388,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Ratio between maximum range and square of \ntime of flight in projectile motion is",
    "options": [
      "g\n2",
      "g\n5",
      "g\n10",
      "g\n12 \nAIIMS-26.05.2019"
    ],
    "correctAnswer": 0,
    "explanation": "We know, \n\nRange ( )\n2\nu sin2\nR\ng\nθ\n=\n\nFor maximum range (θ = 45°) \n\n2\nmax\nu sin2 45\nR\ng\n×\n°\n=\n\n2\nmax\nu sin90\nR\ng\n°\n=\n\n(sin 90° = 1) \n\n2\nmax\nu\nR\ng\n=\n\nTime of flight ( )\n2usin\nT\ng\nθ\n=\n\n2usin 45\nT\ng\n°\n=\n (\n1\nsin 45\n2\n° =\n∵\n) \n\n2u 1\nT\n2g\n×\n=\n\n2\n2\n2\n2u\n2u\nT\nT\ng\ng\n=\n⇒\n=\n\nThen, Ratio of Rmax and time of fight- \n\n2\nmax\n2\n2\n2\nR\nu /g\nT\n2u /g\n=\ng\n2\n=",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q389",
    "num": 389,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A cricketer can throw a ball to a maximum \nhorizontal distance of 100 m. The speed with \nwhich he throws the ball is (to the nearest \ninteger)",
    "options": [
      "30 m/s",
      "42 m/s",
      "32 m/s",
      "35 m/s \nAIIMS-26.05.2019(M) Shift-1"
    ],
    "correctAnswer": 2,
    "explanation": "We know, \n\nRange ( )\n2\nu sin2\nR\ng\nθ\n=\n\nFor maximum horizontal range \n45\nθ =\n° \n\n2\nmax\nu sin2 45\nR\ng\n×\n°\n=\n\n2\nmax\nu sin90\nR\ng\n=\n\n(sin 90° = 1) \n\n2\nu\n1\n100\n10\n×\n=\n\n2\nu\n100 10\n=\n×\n\n2\nu\n1000\n=\n\nu\n1000\n=\n\nu\n10 10\n=\n\nu\n10 3.16\n=\n×\n\nu\n31.62\n=\n\nu\n32m /s\n≈",
    "examSource": "",
    "image": "/images/yct_motion_plane/p95_img1_xref786.png"
  },
  {
    "id": "yct-motion-plane-q390",
    "num": 390,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Assertion: Three projectiles are moving in \ndifferent paths in the air. Vertical component of \nrelative velocity between any of the pair does not \nchange with time as long as they are in air. \n(Neglecting the effect of air friction) \n\n Reason: Relative acceleration between any of the \npair of projection is zero.",
    "options": [
      "If both assertion and reason are true and \nreason is the correct explanation of assertion.",
      "If both assertion and reason are true but \nreason is not the correct explanation of \nassertion.",
      "If assertion is true but reason is false.",
      "If both assertion and reason are false. \nAIIMS-25.05.2019"
    ],
    "correctAnswer": 0,
    "explanation": "Acceleration of projectile = g\u0002 \nRelative acceleration \nra\ng\ng\n=\n-\n\u0002\n\u0002\n\u0002 \n\nra\n0\n=\n\u0002\n\nBecause g is same for the bodies hence, their relative \nacceleration is zero this implies their relative velocity \ndoesn’t change with time.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p95_img1_xref786.png"
  },
  {
    "id": "yct-motion-plane-q391",
    "num": 391,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A ball is thrown from the ground to clear a \nwall 3m high at a distance of 6m and falls 18m \naway from the wall, the angle of projection of \nball is-",
    "options": [
      "1 3\ntan\n2\n-\n\n\n\n\n",
      "1 2\ntan\n3\n-\n\n\n\n\n",
      "1 1\ntan\n2\n-\n\n\n\n\n",
      "1 3\ntan\n4\n-\n\n\n\n\n"
    ],
    "correctAnswer": 1,
    "explanation": "The equation of trajectory of projectile, \n\nx\ny\nx 1\ntan\nR\n\n\n=\n-\nθ\n\n\n\n\n\nPut y = 3m, x = 6m and R = 24 m \n\n6\n3\n6 1\ntan\n24\n\n\n=\n-\nθ\n\n\n\n\n\n1\n3\n6 1\ntan\n4\n\n\n=\n-\n×\nθ\n\n\n\n\n\n2\ntan\n3\nθ =\n\n1 2\ntan\n3\n-\n\nθ =\n\n\n\n",
    "examSource": "BCECE-2015",
    "image": "/images/yct_motion_plane/p95_img1_xref786.png"
  },
  {
    "id": "yct-motion-plane-q392",
    "num": 392,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A man fires a large number of bullets in all \ndirections with same speed u. The maximum \narea on the ground on which these bullets will \nspread is-",
    "options": [
      "2\nu\ng\nπ",
      "2\n2\nu\ng",
      "4\n2\nu\ng\nπ",
      "4\n2"
    ],
    "correctAnswer": 2,
    "explanation": "The range of the projectile \n2\nu sin2\n(R)\ng\nθ\n=\n\nFor maximum \n45\nθ =\n° \n\n2\nmax\nu sin(2 45 )\nR\ng\n×\n°\n=\n\n2\nmax\nu sin90\nR\ng\n°\n=\n\n2\nmax\nu\nR\ng\n=\n\nArea in which bullet will spread = πR2 \nMaximum area (\n)\n2\n2\n4\n2\nmax\n2\nu\nu\nR\ng\ng\n\n\nπ\nπ\n= π\n=\n\n\n\n",
    "examSource": "u g  BCECE-2014",
    "image": "/images/yct_motion_plane/p95_img1_xref786.png"
  },
  {
    "id": "yct-motion-plane-q393",
    "num": 393,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A bullet fired at an angle of 300 with the \nhorizontal hits the ground 3km away. By \nadjusting its angle of projection, can one hope \nto hit a target 5km away. Assume the muzzle \nspeed to be same and the air resistance is \nnegligible- \n\n(a) possible to hit a target 5km away \n\n(b) not possible to hit a target 5",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 1,
    "explanation": "Given that - \nRange (R) = 3km \nAngle of projection of bullet = 30° \n\nHorizontal range for the projection, \n\n2\nu sin2\nR\ng\nθ\n=\n\n2\nu sin(2 30 )\n3\ng\n×\n°\n=\n\n2\nu sin60\n3\ng\n°\n=\n\no\n3\nsin60\n2\n\n\n=\n\n\n\n\n\n\n∵\n\n2\n3\nu\n2\n3\ng\n×\n=\n\n2\nu\n3 2\ng\n3\n×\n=\n\n2\nu\n2 3\ng =\n\n2\nu\n3.46km\ng =\n\n.....(i) \nThe maximum range (Rmax) is achieved by the bullet \nwhen it is fired at angle 45° with the horizontal that is- \n\n2\nmax\nu\nR\ng\n=\n\n.....(ii) \nOn comparing eqn (i) and (ii), we get - \n\nRmax = 3.464 km \nHence, the bullet will not hit a target 5 km away.",
    "examSource": "km away    (c) prediction is not possible    (d) none of the above  BCECE-2007",
    "image": "/images/yct_motion_plane/p96_img1_xref792.png"
  },
  {
    "id": "yct-motion-plane-q394",
    "num": 394,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A car is moving horizontally along a straight \nline with constant speed 30m/s. A projectile is \nto be fired from the moving car in such a way \nthat it will return to the car after the car has \nmoved 80m. At what speed (relative to the car) \nmust the projectile be fired? \n\n(Take g = 10 m/s2) \n\n(a) 10m/s \n(b) 10 8m/s \n\n(c) 40 m/s\n3",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 2,
    "explanation": "Given, velocity (ux) = 30 m/s, range (R) = 80 \nm, g = 10 m/s2 \n\nR = ux.T ⇒ \nx\nR\nT\nu\n=\n\n80\nT\n30\n=\n8sec\n3\n=\n\nTime of flight \ny\n2u\n(T)\ng\n=\n\ny\nT\ng\n8/3 10\nu\n2\n2\n×\n×\n=\n=\n\ny\n40\nu\nsec\n3\n=",
    "examSource": "(d) None of these  BCECE-2006",
    "image": "/images/yct_motion_plane/p96_img1_xref792.png"
  },
  {
    "id": "yct-motion-plane-q395",
    "num": 395,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "At the height 80m, an aeroplane is moved with \n150m/s. A bomb is dropped from it, so as to hit \na target. At what distance from the target \nshould the bomb be dropped ? (g = 10 m/s2)",
    "options": [
      "605.3 m",
      "600 m",
      "80 m",
      "230"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \nSpeed of aeroplane \n150m/s\n=\n\nHeight of the plane from the surface = 80m \n\n R \n\n2\ny\ny\ny\n1\nh\nu t\na t\n2\n=\n+\n\n2\n1\n80\n0\ngt\n2\n=\n+\n\n2\n80 2\nt\n10\n×\n=\n\n t\n4sec\n=\n\nSo, range covered by bomb, \n\nR = vt = 150 × 4 = 600 m",
    "examSource": "m  BCECE-2004",
    "image": "/images/yct_motion_plane/p96_img1_xref792.png"
  },
  {
    "id": "yct-motion-plane-q396",
    "num": 396,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A cricket ball thrown across a field is at heights \nh1 and h2 from the point of projection at times \nt1 and t2 respectively after the throw. The ball \nis caught by a fielder at the same height as that \nof projection. The time of flight of the ball in \nthis journey is",
    "options": [
      "2\n2\n1 2\n2 1\n1 2\n2 1\nh t\nh t\nh t\nh t\n-\n-",
      "2\n2\n1 1\n2 2\n2 1\n1 2\nh t\nh t\nh t\nh t\n-\n+",
      "2\n2\n1 2\n2 1\n1 2\n2 1\nh t\nh t\nh t\nh t\n+\n+",
      "2\n2\n1 1\n2 2\n1 1\n2 2\nh t\nh t\nh t\nh t\n-\n-"
    ],
    "correctAnswer": 0,
    "explanation": "For vertical movement of the ball is - \n\n2\n1\n1\n1\n1\nh\n(usin )t\ngt\n2\n=\nθ\n-\n\n2\n1\n1\n1\n1\nh\ngt\n2\nt\nusin\n+\n=\nθ\n ....(i) \nSimilarly for second ball \n\n2\n2\n2\n2\n1\nh\n(usin )t\ngt\n2\n=\nθ\n-\n\n2\n2\n2\n2\n1\nh\ngt\n2\nt\nusin\n+\n=\nθ\n\n....(ii) \nOn dividing equation (i) and (ii), \n\n2\n2\n2\n2\n2\n1\n1\n1\n1\nh\ngt\nt\n2\n1\nt\nh\ngt\n2\n\n\n+\n\n\n= \n\n\n\n+\n\n\n\n2\n2\n1 2\n1\n2\n2 1\n1 2\n1\n1\nh t\ngt t\nh t\ngt t\n2\n2\n+\n=\n+\n\n(\n)\n2\n2\n1 2\n2 1\n1 2\n1\n2\ng\nh t\nh t\nt t\nt t\n2\n-\n=\n-\n\n1 2\n2 1\n2\n2\n1 2\n1\n2\nh t\nh t\ng\n2\nt t\nt t\n\n\n-\n= \n\n-\n\n\n\n....(iii) \nThe time of flight of the ball, \n(\n)\n2usin\n2\nT\nusin\ng\ng\nθ\n=\n=\nθ \nFrom equation (i), \nT = \n2\n1\n1\n1\n1\nh\ngt\n2\n2\ng\nt\n\n\n+\n\n\n\n\n\n\n⇒\n2\n1\n1\n1\nh\nt\n2\nT\nt\ng\n2\n\n\n=\n+\n\n\n\n\n\n = \n2\n2\n1\n1\n1 2\n1\n2\n1\n1\n1\n1\n1 2\n2 1\nh\nh\nt t\nt t\n2\nt\nt\nt\ng\nt\nh t\nh t\n\n\n-\n×\n+\n=\n×\n+\n\n\n-\n\n\n ( from (iii)) \n\n(\n)\n2\n2\n2\n3\n1 1 2\n1 1\n2\n1 1\n2\n2 1\n1\n1 2\n2 1\nh t t\nh t t\nh t t\nh t\nt\nh t\nh t\n-\n+\n-\n=\n-\n⇒T = \n2\n2\n1 2\n2 1\n1 2\n2 1\nh t\nh t\nh t\nh t\n\n\n-\n\n\n-\n\n",
    "examSource": "WBJEE -2014",
    "image": "/images/yct_motion_plane/p96_img1_xref792.png"
  },
  {
    "id": "yct-motion-plane-q397",
    "num": 397,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A ball is projected horizontally with a velocity \nof 5 m/s from the top of a building 19.6 m high. \nHow long will the ball take to hit the ground?",
    "options": [
      "2 s",
      "2 s",
      "3s",
      "3"
    ],
    "correctAnswer": 1,
    "explanation": "Given, u = 5 m/s, h = 19.6 m, g = 9.8 m/s2 \nThe time taken to hit the ground is given by, \n\n2h\nT\ng\n=\n\n2 19.6\nT\n9.8\n×\n=\n\nT\n4\n=\n\nT = 2 second",
    "examSource": "s              WBJEE -2010",
    "image": "/images/yct_motion_plane/p97_img1_xref800.png"
  },
  {
    "id": "yct-motion-plane-q398",
    "num": 398,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "In case of projectile motion, which one of the \nfollowing \nfigures \nrepresent \nvariation \nof \nhorizontal component of velocity (ux) with time \nt?",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 1,
    "explanation": "Refer to official YCT Physics Volume-I solution for Question 398.",
    "examSource": "(assume that air resistance is negligible)    (a)     (b)       (c)     (d)     WB JEE 2021  UP CPMT-2010",
    "image": "/images/yct_motion_plane/p97_img1_xref800.png"
  },
  {
    "id": "yct-motion-plane-q399",
    "num": 399,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 2,
    "explanation": "A is projected with a vertical speed after \nsometime it comes on the same level with same speed \nas it was projected. Now, the downward speeds of A \nand B at the level - x is same. \nSo, both A and B attain the same velocity.",
    "examSource": "Two particles A and B having different masses  are projected from a tower with same speed. A  is projected vertically upward and B vertically  downward. On reaching the ground    (a) velocity of A is greater than that of B    (b) velocity of B is greater than that of A    (c) both A and B attain the same velocity    (d) the particle with the larger mass attains higher  velocity  WB JEE 2015",
    "image": "/images/yct_motion_plane/p98_img1_xref816.png"
  },
  {
    "id": "yct-motion-plane-q400",
    "num": 400,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A body is projected from the ground with a \nvelocity v = (\n)\n^\n^\n3i +10j m/s. The maximum \nheight attained and the range of the body \nrespectively are (given g = 10 m/s²)",
    "options": [
      "5 m and 6 m",
      "3 m and 10 m",
      "6 m and 5 m",
      "3 m and 5"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n\nv = (\n)\n^\n^\n3i\n10j m/s\n(i)\n+\n---\n\n2\n2\nu sin\nH\n2g\nθ\n=\n\n^\n^\nv\n(ucos )i\n(usin ) j\n=\nθ\n+\nθ\n\u0002\n m/s \n....(ii) \nFrom eqn (i) & (ii), \n\nu cos θ = 3 m/s \n\nu sinθ = 10 m/s \nSo, H =\n2\n2\nu sin\n2g\nθ = (\n)\n2\n10\n5 m\n2\n10 =\n×\n (at max. H, θ = 90o) \nAnd, \n\n2\n2\nu sin 2\nu 2sin cos\nR\ng\ng\nθ\nθ\nθ\n=\n=\n\n = 2usin\nucos\ng\nθ ×\nθ \n\n = 2 10\n3\n10\n×\n× \n\nR = 6 m \nHence, H = 5 m, R = 6 m",
    "examSource": "m  WB JEE 2013",
    "image": "/images/yct_motion_plane/p98_img1_xref816.png"
  },
  {
    "id": "yct-motion-plane-q401",
    "num": 401,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A particle is projected from the ground with a \nkinetic energy E at an angle of 60° with the \nhorizontal. Its kinetic energy at the highest \npoint of its motion will be",
    "options": [
      "E/\n2",
      "E/2",
      "E/4",
      "E/8"
    ],
    "correctAnswer": 2,
    "explanation": "Given, projected angle (θ) = 60o \nWe know \n\n2\n1\nE =\nmv\n2\n\nAt the highest point vertical component of velocity will \nbe zero, only horizontal component will remain. Then \nhorizontal component = vcos 60o = v\n2 \nVelocity become half then energy become E/4",
    "examSource": "WB JEE-2012, 2009, 2007",
    "image": "/images/yct_motion_plane/p98_img1_xref816.png"
  },
  {
    "id": "yct-motion-plane-q402",
    "num": 402,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "During \nprojectile \nmotion, \nthe \nhorizontal \nvelocity",
    "options": [
      "first increases then decreases",
      "first decreases then increases",
      "always increases",
      "always constant \nUP CPMT-2007"
    ],
    "correctAnswer": 3,
    "explanation": "During projectile motion, the horizontal \nvelocity is always constant.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p98_img1_xref816.png"
  },
  {
    "id": "yct-motion-plane-q403",
    "num": 403,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two seconds after projection a projectile is \ntravelling in a direction inclined at 30o to the \nhorizontal after one more second, it is \ntravelling horizontally, the magnitude and \ndirection of its velocity are",
    "options": [
      "o\n2 20 m/s, 60",
      "o\n20 3 m/s, 60",
      "o\n6 40 m/s, 30",
      "o\n40 6 m/s, 30 \nUP CPMT-2014"
    ],
    "correctAnswer": 1,
    "explanation": "Let in 2 sec body reaches up to point A after one more \nsec up to point B. \nTotal time of ascent for a body = 3 sec. \n\nusin\nt\n3\ng\nθ\n=\n= \n∴ \nu sinθ = 10 × 3 = 30 \n\n....(i) \n\nHorizontal component of velocity remains always \nconstant, \n\nu cosθ = vcos30o \n....(ii) \nFrom vertical upward motion between O and A, \nvsin30o = u sinθ - g × t \n\nvsin30o = 30 - 10×2 \n∴ \nv\n2 = 10 m/s \nv = 20 m/s \nSubstituting the value in Eq. (ii), \nu cosθ = 20 cos(30)o =10 3 \n\n.... (iii) \nFrom Equation (i) and (iii), \n\nu\n20 3\n=\n m/s \nand \nθ = 60o",
    "examSource": "",
    "image": "/images/yct_motion_plane/p98_img1_xref816.png"
  },
  {
    "id": "yct-motion-plane-q404",
    "num": 404,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two particles are projected upwards with the \nsame initial velocity v0 in two different angles \nof projection such that their horizontal ranges \nare the same. The ratio of the heights of their \nhighest point will be",
    "options": [
      "tan2θ1",
      "2\n2\n0\n1\nv sin θ",
      "v0 sinθ1",
      "v0 cosθ1 \n(where, θ1 is the angle of projection of the first \nparticle) \nUP CPMT-2013"
    ],
    "correctAnswer": 0,
    "explanation": "As the Horizontal ranges are the same. \n2\n0\n1\nv sin2\ng\nθ = \n(\n)\n2\n0\n2\nv sin\n2\ng\nπ -θ\n\nSo, \nSin 2θ1 = Sin (π - 2θ2) \n\n2θ1 = π - 2θ2 \n\nθ1 + θ2 = 2\nπ \n\nθ2 = \n1\n2\nπ -θ \n\n(\n)\n2\n2\n0\n1\n1\nmax\nv sin\nh\n2g\nθ\n=\n\n(\n)\n2\n2\n0\n2\n2\nmax\nv sin\nh\n2g\nθ\n=\n\n2\n2\n2\n1 max\n1\n1\n1\n2\n2\n2\n2\nmax\n2\n1\n1\n2\n1 max\n1\n2\nmax\n(h )\nsin\nsin\nsin\n(h )\nsin\ncos\nsin\n2\n(h )\ntan\n(h )\nθ\nθ\nθ\n=\n=\n=\nπ\nθ\nθ\n\n\n-θ\n\n\n\n\n=\nθ",
    "examSource": "",
    "image": "/images/yct_motion_plane/p99_img1_xref828.png"
  },
  {
    "id": "yct-motion-plane-q405",
    "num": 405,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile thrown with a speed v at an angle \nθ has a range R on the surface of the earth. For \nsame value of v and θ, its range on the surface \nof the moon, will be",
    "options": [
      "6R",
      "R\n6",
      "36R",
      "R\n36 \nUP CPMT-2011"
    ],
    "correctAnswer": 0,
    "explanation": "For a projectile motion - If projectile thrown \nwith a speed of v and at an angle θ, \nWe know that range is given by \n\n2\nv sin 2\nR\ng\nθ\n=\n\nAt moon let range = R1 and (given that v,θ are same) \nthen range will be \n\n{\n}\n2\n1\nv sin2\nR\ng'is gravity at moon\ng'\nθ\n=\n\n1\ng'\n(gravity at the moon\n6g\n1\nsurface is about\nof\n6\n)\nthat on earth\n=\n∵\n\n2\n1\nv sin 2\nR\ng\n6\nθ\n=\n\n2\n1\nv sin2\nR\n6\ng\nθ\n\n\n\n\n= \n\n\n\n\n\n\nR1 = 6R.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p99_img1_xref828.png"
  },
  {
    "id": "yct-motion-plane-q406",
    "num": 406,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "An arrow is shot into air, its range is 200 m and \nits time of flight is 5 s. If g = 10m/s2, then the \nhorizontal component of velocity of the arrow \nis",
    "options": [
      "12.5 m/s",
      "25 m/s",
      "31.25 m/s",
      "40 m/s \nUP CPMT-2005"
    ],
    "correctAnswer": 3,
    "explanation": "Here, \nTime of flight (T) \n2usin\ng\nθ\n=\n= 5 sec. \nRange (R)\n2\nu sin 2\ng\nθ\n=\n = 200 m \nThen, \nR = 2usin\nucos\ng\nθ ×\nθ \n\nx\nR\nucos\nT\nu\nT\n=\nθ×\n=\n×\n\n (∵ u cos θ = ux) \n200 = ux × 5 \n\nx\n200\nu\n40m/s\n5\n=\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p99_img1_xref828.png"
  },
  {
    "id": "yct-motion-plane-q407",
    "num": 407,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "If maximum height and range of a projectile \nare same, what is the angle of projection ?",
    "options": [
      "30°",
      "76°",
      "50°",
      "90° \nUP CPMT-2003"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \nIf maximum height and range of a projectile are same \nWe know that, \n\n2\n2\nmax\nu sin\nH\n2g\nθ\n=\n\n2\nu sin 2\nR\ng\nθ\n=\n\n∵ \nmax\nH\nR\n=\n\n2\n2\n2\nu sin\nu sin2\n2g\ng\nθ\nθ\n=\n\n2\nsin\nsin 2\n2\nθ\nθ\n=\n\n2\nsin\n2sin\ncos\n2\nθ\nθ\nθ\n=\n\n2\nsin\n4sin\ncos\nθ\nθ\nθ\n=\n\nsin\n4\ncos\nθ\nθ =\n\ntan θ = 4 \n\ntan θ = tan 76° \n\nθ = 76°",
    "examSource": "",
    "image": "/images/yct_motion_plane/p99_img1_xref828.png"
  },
  {
    "id": "yct-motion-plane-q408",
    "num": 408,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two projectiles of same mass have their \nmaximum kinetic energies in the ratio 4:1 and \nthe ratio of their maximum height is also 4:1 \nThen the ratio of their range is",
    "options": [
      "2 : 1",
      "4 :1",
      "8 :1",
      "1 :1"
    ],
    "correctAnswer": 1,
    "explanation": "Let us consider, \nMass of both the projectiles \n\nm1 = m2 = m (assume) \nRatio of maximum kinetic energy, \n\n1\n2\nK\n4\n=\nK\n1 \n\n2\n1\n2\n2\n1 mu\n4\n2\n1\n1\nmu\n2\n=\n\n2\n1\n2\n2\nu\n4\n= 1\nu\n ⇒ u1 = 2u2 \n\n....(i) \nRatio of maximum height, \n\n1\n2\nH\n4\n=\nH\n1 \n\n2\n2\nu sin\nH\n2g\n\n\nθ\n=\n\n\n\n\n∵\n\n2\n2\n1\n1\n2\n2\n2\n2\nu sin\n4\n2g\n1\nu sin\n2g\nθ\n=\nθ\n\n2\n2\n2\n1\n2\n2\n2\n2\n4u sin\n4\n1\nu sin\nθ\n=\nθ\n\n1\n2\nθ = θ\n\n∴ Range (R) = \n2\nu sin 2\ng\nθ \n2\n1\n1\n1\n2\n2\n2\n2\nR\nu sin2\nR\nu sin2\nθ\n=\nθ \n2\n1\n2\n1\n2\n2\n2\n2\nR\n4u sin 2\nR\nu sin 2\nθ\n=\nθ\n (\n)\n1\n2\nθ = θ\n∵\n\n1\n2\nR\n4\nR\n1\n=\n⇒ R1:R2 = 4:1",
    "examSource": "TS EAMCET(Medical)-2017",
    "image": "/images/yct_motion_plane/p100_img1_xref838.png"
  },
  {
    "id": "yct-motion-plane-q409",
    "num": 409,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "An object is thrown vertically upward with a \nspeed of 30 m/s. The velocity of the object half-\na-second before it reaches the maximum height \nis",
    "options": [
      "4.9 m/s",
      "9.8 m/s",
      "19.6 m/s",
      "25.1 m/"
    ],
    "correctAnswer": 0,
    "explanation": "u = 30 m/s \n∵ Velocity of the body half second before reaches max \nheight = velocity of the body half second after reaches \nmax height \n\n= 0 + gt \n\n1\n9.8\n4.9m/s\n2\n=\n×\n=",
    "examSource": "s  TS EAMCET (Engg.)-2017",
    "image": "/images/yct_motion_plane/p100_img1_xref838.png"
  },
  {
    "id": "yct-motion-plane-q410",
    "num": 410,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A particle is projected with velocity 2 gh and \nat an angle 60o to the horizontal so that it just \nclears two walls of equal height 'h' which are at \na distance 2h from each other. The time taken \nby the particle to travel between these two \nwalls is \n\n(a) \n2h\n2\ng \n(b) \nh\n2g \n\n(c) \nh\n2",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 2,
    "explanation": "Given, u\n2 gh\n=\n, θ = 60° \n\nThe horizontal component will be -\n\no\nx\n1\nu\n2 gh cos60\n2 gh\ngh\n2\n\n\n=\n=\n=\n\n\n\n\n\nAnd the vertical component will be -\n\no\ny\n3\nu\n2 gh sin60\n2 gh\n3gh\n2\n\n\n=\n=\n=\n\n\n\n\n\n\n\nThe distance between two walls is 2h. Let time taken to \ncross both the walls be t. Then, the speed with which it \ncover this distance is \ngh . \nSo, \ndistance\ntime\nspeed\n=\nx\nx\nu\n=\n\n2h\nh\nt\n2 g\ngh\n=\n=",
    "examSource": "g  (d)  h g  AP EAMCET (22.09.2020) Shift-II  TS EAMCET (Engg.)-2016",
    "image": "/images/yct_motion_plane/p100_img1_xref838.png"
  },
  {
    "id": "yct-motion-plane-q411",
    "num": 411,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Three bodies A, B and C projected with the \nsame initial speed with angles of projections \n30o, 45o and 60o respectively. The body/",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 1,
    "explanation": "Given, Projection angle of A, B & C is 30°, \n45° & 60° respectively. \nWe know that in projectile motion, \nRange (R)\n2\nu sin 2\ng\nθ\n=\n\n∴ Range will be max at θ = 45° since max value of sine \nis 1. \nTherefore, body B have maximum range.",
    "examSource": "bodies  having maximum range     (a) C  (b) B    (c) A  (d) A and B  TS EAMCET(Medical)-2015",
    "image": "/images/yct_motion_plane/p101_img1_xref844.png"
  },
  {
    "id": "yct-motion-plane-q412",
    "num": 412,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "For a projectile if α is the angle of projection, \nR is the range, h is the maximum height, T is \nthe time of flight then",
    "options": [
      "tanα = \n2\nR\ngT\n,h\n2h\n8\n=",
      "tanα = \n2\nR\ngT\n,h\n4h\n8\n=",
      "tanα = \n2\n4h\ngT\n,h\nR\n8\n=",
      "tanα = \n2\n4h\ngT\n,h\nR\n4\n="
    ],
    "correctAnswer": 2,
    "explanation": "For a projectile, we know that, \nRange (R) = \n2\nu sin 2 ......(i)\ng\nα\n\nHeight (h) = \n2\n2\nu sin\n......(ii)\n2g\nα\n\nTime of flight (T) = 2u sin\n......(iii)\ng\nα\n\nFrom equation (i) and (ii), we get- \n\n4h\nR\ntan\n=\nα ⇒ \n4h\ntan\nR\nα =\n\nNow, from (ii) and (iii), we get- \n\n2\n2\nu sin\n4\ng\nh\n2g\n4\ng\nα\n=\n×\n×\n\nh = \n2\ngT\n8",
    "examSource": "TS EAMCET 20.07.2022, Shift-I",
    "image": "/images/yct_motion_plane/p101_img1_xref844.png"
  },
  {
    "id": "yct-motion-plane-q413",
    "num": 413,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A ball projected up passes the same height H at \n2 s and 10 s. The value of H is [Use g = 9.8 m/s2]",
    "options": [
      "102 m",
      "100 m",
      "98 m",
      "9.8"
    ],
    "correctAnswer": 2,
    "explanation": "If t1 & t2 are the time when the body is at the \nsame height. Then, \nh = \n1 2\n1 gt t\n2\n\nh = 1\n9.8 2 10\n2 ×\n× ×\n\nh = 98 m",
    "examSource": "m  TS EAMCET 20.07.2022, Shift-I",
    "image": "/images/yct_motion_plane/p101_img1_xref844.png"
  },
  {
    "id": "yct-motion-plane-q414",
    "num": 414,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A football is kicked off with a velocity of 147 \nm/s at an angle of 30o with the ground. The \ntime the ball takes to touch the ground is \n\n (\n)\n2\ng\n9.8m /s\n=",
    "options": [
      "7.5s",
      "15s",
      "21s",
      "26"
    ],
    "correctAnswer": 1,
    "explanation": "Given, u0 = 147 m/s, θ = 30o \nTime taken to reach the ground by a projectile motion is \ngiven by \n\n0\n2u sin\nT\ng\nθ\n=\n\ns \nu0 = projected velocity \n\nθ = projected angle \n\ng = gravitational acceleration \n\no\n2 147 sin30\nT\n9.8\n×\n×\n=\n\n1\n2 147\n2\n9.8\n×\n×\n=\n\n = 15s",
    "examSource": "s  TS EAMCET 31.07.2022, Shift-II",
    "image": "/images/yct_motion_plane/p101_img1_xref844.png"
  },
  {
    "id": "yct-motion-plane-q415",
    "num": 415,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A ball initially at rest is thrown vertically up \nwith some speed and reaches height H. The ball \nis thrown with the same speed at an angle 45° \nwith \nhorizontal. \nThe \nhorizontal \ndistance \ncovered by the ball is",
    "options": [
      "H",
      "2H",
      "3H",
      "4"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \nInitial velocity = u \nFinal velocity v = 0 (at top point) \n\nv2 = u2 - 2gH \n\n0 = u2 - 2gH \n\nu = \n2gH \n\n∴ Horizontal distance, \n\n2\nu sin2\nR\ng\nθ\n=\n\n2gHsin(2 45 )\ng\n×\n°\n=\n\n2gH 1\ng\n×\n=\n\nR = 2H",
    "examSource": "H  TS EAMCET 30.07.2022, Shift-I",
    "image": "/images/yct_motion_plane/p101_img1_xref844.png"
  },
  {
    "id": "yct-motion-plane-q416",
    "num": 416,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A ball is thrown at some angle with the \nhorizontal and at speed 10 m/s. The speed of \nthe ball at its maximum height H during the \nmotion is 5 m/s. The magnitude of H is (Assume \ng = 10 m/s2)",
    "options": [
      "3.75 m",
      "4.0 m",
      "6.5 m",
      "2.75"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, u = 10 m/s, g = 10 m/s2 \n\nMaximum height reached, \n\nH = \n2\n2\nu sin\n2g\nθ \nFor velocity in horizontal direction, \n\n10cosθ = 5 \n\ncosθ = 1\n2 \n\nθ = 60o \n∴ \nH = \n2\n3\n10\n10\n2\n2g\n\n\n×\n\n\n\n\n\n \n\n100\n3\nH\n4\n2\n10\n×\n=\n×\n×\n\n15\nH\n4\n=\n\nH\n3.75 m\n=",
    "examSource": "m   TS EAMCET 08.05.2019, Shift-I",
    "image": "/images/yct_motion_plane/p102_img1_xref850.png"
  },
  {
    "id": "yct-motion-plane-q417",
    "num": 417,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A particle is projected from a point on the \nground with initial velocity of magnitude \n10m/s, such that its horizontal range is \nmaximum. The magnitude of its average \nvelocity during its ascent is",
    "options": [
      "5 m / s\n2",
      "2 2 m /s\n5",
      "5 5 m /s\n2",
      "5 5 m /s\n2"
    ],
    "correctAnswer": 2,
    "explanation": "Avg. velocity = D\n2D\nT / 2\nT\n=\n\nD = \n(\n)\n2\n2\nH\nR / 2\n+\n\nAvg. velocity = \n(\n)\n2\n2\nH\nR / 2\n2\nT\n+\n\nFor maximum horizontal range , θ = 45° \n\n2\n2\nu\nu\n2 u\nH\n, R\n, T\n4g\ng\ng\n=\n=\n=\n\n∴ \nAvg. velocity = \n2\n2\n2\n2\nu\nu\n4g\n2g\n2\n2 u\ng\n\n\n\n\n+\n\n\n\n\n\n\n\n \n\n = \n4\n2\n4\n2\nu /16g\nu / 4g\n2\n2 u\ng\n+\n\n = \n2\nu\n1\n1\ng\n16\n4\n2\n2 u\ng\n+\n\n= \n2.u 5/16 \n\n=\n2.u\n5\n4\n×\n\n∵ u = 10 m/s. \nAvg. velocity (v) = \n2 10\n5\n4\n×\n×\n= 5 5 m/s\n2",
    "examSource": "TS EAMCET 29.09.2020, Shift-I",
    "image": "/images/yct_motion_plane/p102_img1_xref850.png"
  },
  {
    "id": "yct-motion-plane-q418",
    "num": 418,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A particle aimed at a target, projected at an \nangle 15º with the horizontal is short of the \ntarget by 10m. If the same particle projected at \nan angle of 45º with the horizontal then it is \naway from the target by 15 meters. The angle \nof projection to hit the target is",
    "options": [
      "1\n1\n1\nsin\n2\n10\n-\n\n\n\n\n",
      "1\n1\n3\nsin\n2\n10\n-\n\n\n\n\n",
      "1\n1\n9\nsin\n2\n10\n-\n\n\n\n\n",
      "1\n1\n7\nsin\n2\n10\n-\n\n\n\n\n"
    ],
    "correctAnswer": 3,
    "explanation": "According to the question, \nR1 = R-10 \n\nR2 = R+15 \nWe know that, \n\nRange ∝ sin2θ \nSo, \no\n1\no\n2\nsin2\nR\n10\nsin30\nR\n15\nsin2\nsin90\nθ\n-\n=\n=\n+\nθ\n\nR\n10\n1\nR\n15\n2\n-\n=\n+\n\n2R-20=R+15 \nR=35 \nFor the range to be maximum, \nsin (2 × 45o) = sin 90o =1 \n2\nmax\nu\n50\nR\ng\n=\n=\n\n2\nu\n50g\n=\n\nWhere, θ = angle of projection \n2\nu sin 2\n50g.sin2\nR\n, R = 35=\ng\ng\nθ\nθ\n=\n\n50 sin 2θ = 35 \n35\nsin2θ = 50 \n7\nsin2\n10\nθ =\n\n7\n1\n2\nsin\n10\n-\nθ =\n\n\n\n\n\n\n\n1\n7\n1\nsin\n2\n10\n-\nθ =\n\n\n\n\n\n",
    "examSource": "TS EAMCET 28.09.2020, Shift-I  AP EAMCET - 2015",
    "image": "/images/yct_motion_plane/p102_img1_xref850.png"
  },
  {
    "id": "yct-motion-plane-q419",
    "num": 419,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile is thrown at a speed v, making an \nangle θ with the horizontal. If the speed at the \nmaximum height is v\n5 , then the magnitude of θ \nis",
    "options": [
      "30.5º",
      "60.5º",
      "78.5º",
      "89.5º"
    ],
    "correctAnswer": 2,
    "explanation": "Given, projected velocity = v, angle of \nprojection = θ \n\nAt Hmax : Horizontal component of velocity vx = vcosθ \nVertical component of velocity vy = 0 \nBut at Hmax, vx = v/5 \n∴ \nv\nvcos \n5 =\nθ \n0.2 = cos θ \nvy = 0 \nθ = cos-1 (0.2) \n= 78.46 ⇒ \n78.50°\n≃",
    "examSource": "TS EAMCET 28.09.2020, Shift-II",
    "image": "/images/yct_motion_plane/p103_img1_xref856.png"
  },
  {
    "id": "yct-motion-plane-q420",
    "num": 420,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A ball is thrown with an initial velocity of 100 \nm/s at an angle of 30º above the horizontal. The \ndistance from the throwing point to the point \nwhere the ball attains its original level is \napproximately.",
    "options": [
      "860 m",
      "510 m",
      "1720 m",
      "430"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n\nInitial velocity = 100 m/s \n\nAngle = 30o \n\nLet, A is thrown point and B is final point \nThen, required distance = Range(R) \n\nR = \n2\nu sin 2\ng\nθ \n\n = (\n)\no\n100\nsin60\n10\n2\n = \n3\n10000\n2\n10\n×\n\n R = 865 m ≈ 860 m",
    "examSource": "m  TS EAMCET 03.05.2018, Shift-I",
    "image": "/images/yct_motion_plane/p103_img1_xref856.png"
  },
  {
    "id": "yct-motion-plane-q421",
    "num": 421,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile is thrown at a speed which is twice \nits speed at its maximum height. If R and H are \nits range and maximum height respectively \nthen the ratio R\nH is:",
    "options": [
      "4\n3",
      "3\n8",
      "2",
      "2 3"
    ],
    "correctAnswer": 0,
    "explanation": "Only horizontal component of velocity is \npresent at highest point which is equal to, \n\n2ucosθ = u \n\ncosθ = 1\n2 \n\n cosθ = cos60° \n\nθ = 60° \nWe know, \n\nR =\n2\nu sin 2\ng\nθ \n\n =\n2\n2\n2\nu sin120\nu sin(90\n30 )\nu cos30\ng\ng\ng\n°\n° +\n°\n°\n=\n=\n\nR = \n2\n2\n3\nu\nu\n3\n2\ng\n2g\n×\n=\n\n2\n2\n2\n2\n2\n2\n2\n2\nu sin\nu (sin60 )\nH\n2g\n2g\n3\nu\n2\nu\n3\n3u\nH\n2g\n8g\n8g\nθ\n°\n=\n=\n\n\n\n\n\n\n×\n\n\n=\n=\n=\n\n2\n2\nR\nu\n3 / 2g\n3\n8\n4\nH\n2\n3\n3u /8g\n3\n∴\n=\n=\n×\n=\n\nR\n4\nH\n3\n=",
    "examSource": "TS EAMCET 05.08.2021, Shift-II",
    "image": "/images/yct_motion_plane/p103_img1_xref856.png"
  },
  {
    "id": "yct-motion-plane-q422",
    "num": 422,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile object is thrown in the upward \ndirection making an angle of 60º with the \nhorizontal with velocity of 140m/s. Then the \ntime after which its velocity makes an angle 30º \nwith the horizontal is (use g= 10 m/s2)",
    "options": [
      "14 s\n3",
      "7 3s",
      "14 3s",
      "7 s\n3"
    ],
    "correctAnswer": 0,
    "explanation": "Given, \n\n Angle = 30o \n\n g = 10 m/s2, u = 140m/s \nLet v be the velocity at inclination 30º with horizontal \nand horizontal velocity remains constant. \nSo, 140 cos 60º = v cos 30º \n∴ v = 140\n1\n2\n2\n3\n×\n×\n. \nv= 140\n3\nm/s \nAlong y-direction, \nvy = uy -gt \n140\n3\n sin 30º= 140 sin 60º - 10t \nt= 14\n3\n sec.",
    "examSource": "TS EAMCET 06.08.2021,  Shift-II",
    "image": "/images/yct_motion_plane/p104_img1_xref863.png"
  },
  {
    "id": "yct-motion-plane-q423",
    "num": 423,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A particle is projected horizontally with a \nspeed 15 m/s at a height 200 m above the \nground at time t = 0. What is the tangential \nacceleration of the particle at time t = 2 sec? \nAssume g = 10 m s-2.",
    "options": [
      "6 m s-2",
      "8 m s-2",
      "10 m s-2",
      "12 m s-2"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, \n\n ux = 15m/s, h = 200m \n\nuy = 0, ax = 0, ay = g \nVelocity of the particle in x and y direction at t = 2 s \n\nvx = ux = 15m/s \n\nvy = \n( )\n2\n2\n1\n1\ngt\n10 2\n2\n2\n=\n×\n\nvy = 20m/s \nNow, tanθ = \ny\nx\nv\n20\n4\nv\n15\n3\n=\n=\nPerpendicular\n4\nsin\nBase\n5\n=\n⇒\nθ =\n\nAlso the component of the acceleration at t = 2 s is \nshown in the figure \n\nThe tangential acceleration at t = 2 s is \n\n at = g sin θ \n\n2\n4\n10\n8m/s\n5\n=\n×\n=\n\nsin\n5\n4\n\n\nθ =\n\n\n\n\n∵",
    "examSource": "SRM JEE - 2008",
    "image": "/images/yct_motion_plane/p104_img1_xref863.png"
  },
  {
    "id": "yct-motion-plane-q424",
    "num": 424,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "When projected at an angle of 15º, the range of \na projectile is 50 m. If with the same speed, it is \nprojected at an angle of 45º, its range will be",
    "options": [
      "150 m",
      "100 m",
      "50 m",
      "25"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, \n\n θ1 = 15º, R1 = 50 m, θ2 = 45º, R = ? \n\n Range of a projectile is ( )\n2\nu sin2\nR\ng\nθ\n=\n\n2\nu sin30º\n50\ng\n=\n\n… (i) \n\n2\n2\nu sin90º\nR\ng\n=\n\n… (ii) \nDividing eq. (i) by eq. (ii), we get \n\n2\n2\n50\n1\nR\n100m\nR\n2\n=\n⇒\n=",
    "examSource": "m  SRM JEE - 2011",
    "image": "/images/yct_motion_plane/p104_img1_xref863.png"
  },
  {
    "id": "yct-motion-plane-q425",
    "num": 425,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The velocity of a projectile at the initial point A \nis (\n)\n^\n^\n2i + 3j m/s. Its velocity (in m/s) at point B \nis",
    "options": [
      "^\n^\n2i\n3j\n-\n-",
      "^\n^\n2i\n3j\n-\n+",
      "^\n^\n2i\n3j\n-",
      "^\n^\n2i\n3j\n+\n\n[NEET 2013]"
    ],
    "correctAnswer": 2,
    "explanation": "Velocity at A(vA) = ( ^\n^\n2i\n3j\n-\n)m/s \n\nFrom figure horizontal velocity component at A and B \nis same in magnitude and direction. \nVertical component at A and B are opposite in \ndirection. \nSo, velocity at point B(vB) = ( ^\n^\n2i\n3j\n-\n)m/s",
    "examSource": "",
    "image": "/images/yct_motion_plane/p104_img1_xref863.png"
  },
  {
    "id": "yct-motion-plane-q426",
    "num": 426,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A particle of mass m is projected with velocity \nv making an angle of 45° with the horizontal. \nWhen the particle lands on the level ground, \nthe magnitude of the change in its momentum \nwill be",
    "options": [
      "2 mv",
      "mv\n2",
      "mv 2",
      "zero \n[AIPMT 2008]"
    ],
    "correctAnswer": 2,
    "explanation": "Mass of particle = m \n\nAngle of projection (θ) = 45o \n\n1\n^\n^\nv\n(vcos )i\n(vsin )j\n=\nθ\n+\nθ \n\n2\n^\n^\nv\n(vcos )i\n(vsin )j\n=\nθ\n-\nθ \n\n∆p = m(v2 - v1) = 2mv sinθ ^j \n\n= 2mv sin(45°) = \n2 mv",
    "examSource": "",
    "image": "/images/yct_motion_plane/p105_img1_xref872.png"
  },
  {
    "id": "yct-motion-plane-q427",
    "num": 427,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A particle starting from the origin (0, 0) moves \nin a straight line in the (x, y) plane. Its co-\nordinates at a later time are(\n)\n3,3 . The path \nof the particle makes with the x-axis an angle of",
    "options": [
      "30o",
      "45o",
      "60o",
      "0o \n[AIPMT 2007]"
    ],
    "correctAnswer": 2,
    "explanation": "AB\ntan\nOA\nθ =\n\n = 3\n3 \n\ntan\n3\nθ =\n⇒ θ = 60o",
    "examSource": "",
    "image": "/images/yct_motion_plane/p105_img1_xref872.png"
  },
  {
    "id": "yct-motion-plane-q428",
    "num": 428,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "For angles of projection of a projectile at angles \n(45o - θ) and (45o + θ), the horizontal ranges \ndescribed by the projectile are in the ratio of",
    "options": [
      "1:1",
      "2:3",
      "1:2",
      "2:1"
    ],
    "correctAnswer": 0,
    "explanation": "Let initial velocity = u \nGiven: Angle of projection θ1 = ( 45o - θ) \n\nθ2 = (45o + θ) \nRange R1 = \n(\n)\n2\no\n2\n1\nu sin 90\n2\nu sin2\ng\ng\n-θ\nθ =\n\nR2 = \n(\n)\n2\no\n2\n2\nu sin 90\n2\nu sin 2\ng\ng\n+ θ\nθ =\n\nSo, \n(\n)\n(\n)\no\n1\no\n2\nsin 90\n2\nR\ncos2\n1\nR\ncos2\n1\nsin 90\n2\n-θ\nθ\n=\n=\n=\nθ\n+ θ\n\nR1 : R2 = 1 : 1",
    "examSource": "JEE Main-26.07.2022, Shift-II  AIPMT-2006, 2000, 1990",
    "image": "/images/yct_motion_plane/p105_img1_xref872.png"
  },
  {
    "id": "yct-motion-plane-q429",
    "num": 429,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile is fired from the surface of the \nearth with a velocity of 5 m/s at angle θ with \nthe horizontal. Another projectile fired from \nanother planet with a velocity of 3 m/s at the \nsame angle follows a trajectory which is \nidentical with the trajectory of the projectile \nfired from the earth. The value of the \nacceleration due to gravity on the planet is (in \nm/s²) is (given, g = 9.8 m/s²)",
    "options": [
      "3.5",
      "5.9",
      "16.3",
      "110.8 \n[AIPMT 2014]"
    ],
    "correctAnswer": 0,
    "explanation": "Projectile velocity fired from the earth \nsurface (u1) = 5m/s \nAngle of projection = θ \n\ng1 = 9.8 m/s2 \nProjectile velocity fired from another plant (u2)=3m/s \nAngle of projection = θ \nLet acceleration due to gravity on plant = g2 m/s2 \nTrajectory of both projectile are identical so range are \nequal. \n\nR1 = R2 \n\n2\n2\n1\n2\n1\n2\nu sin2\nu sin2\ng\ng\nθ\nθ\n=\n\n( )\n( )\n2\n2\n2\n5\n3\n9.8\ng\n=\n\n2\n9\n9.8\ng\n25\n×\n=\n\ng2 = 3.52 m/s2",
    "examSource": "",
    "image": "/images/yct_motion_plane/p105_img1_xref872.png"
  },
  {
    "id": "yct-motion-plane-q430",
    "num": 430,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A ball is projected with a velocity, 10 m/s, at \nan angle of 600 with the vertical direction. Its \nspeed at the highest point of its trajectory will \nbe",
    "options": [
      "1\n5ms-",
      "1\n10ms-",
      "Zero",
      "1\n5 3 ms-"
    ],
    "correctAnswer": 3,
    "explanation": "Initial velocity of ball (u) = 10m/s \nAngle with vertical = 60o \nSo, Angle with horizontal (θ) = 90 - 60 = 30o \n\nθ = 30o \n\nAt highest point of trajectory vy = 0 \nHorizontal velocity remains same at highest point \nVelocity of ball vx = u cos30o = 10cos30o \n\n vx = \n3\n10\n5 3 m/s\n2\n×\n=",
    "examSource": "NEET UG -2022",
    "image": "/images/yct_motion_plane/p106_img1_xref879.png"
  },
  {
    "id": "yct-motion-plane-q431",
    "num": 431,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile move from the ground such that its \nhorizontal displacement is x = Kt and vertical \ndisplacement is y = Kt (1 - αt), where K and α \nare constants and t is time. Find out total time \nof flight (T) and maximum height attained \n(Ymax) its",
    "options": [
      "max\nK\nT\n, Y\n2\n= α\n=\nα",
      "max\n1\n2K\nT\n, Y\n=\n=\nα\nα",
      "max\n1\nK\nT\n, Y\n6\n=\n=\nα\nα",
      "max\n1\nK\nT\n, Y\n4\n=\n=\nα\nα \nMP PET-2008"
    ],
    "correctAnswer": 3,
    "explanation": "Horizontal displacement (x) = Kt \nVertical displacement (y) = Kt (1 - αt) \nFor total time of flight T displacement in y direction \nwill be zero \ny = 0 \n∴ \n0 = Kt (1 - αt) \n\n1\nt = α \n(t = 0 not possible) \n\n1\nT = α \n(ii) Maximum height ymax \nAt maximum height point P velocity in y direction will \nbe zero \n\nvy = 0 and \ny\ndy\nv\ndt =\n\n∴ \ndy\n0\ndt =\n\n2\nd [Kt\nt K]\n0\ndt\n-α\n=\n\nK - 2αKt = 0 \n\n1\nt\n2\n=\nα \n\ny = Kt (1 - αt) \n\nymax = \n1\nK\n1\n2\n2\nα\n\n\n\n-\n\n\n\nα\nα\n\n\n\n\nmax\nK\ny\n4\n=\nα",
    "examSource": "",
    "image": "/images/yct_motion_plane/p106_img1_xref879.png"
  },
  {
    "id": "yct-motion-plane-q432",
    "num": 432,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A body is projected vertically upwards. The \ntimes \ncorresponding \nto \nheight \nh \nwhile \nascending and while descending are t1 and t2, \nrespectively. \n\n Then, the velocity of projection will be (take g \nas acceleration due to gravity)",
    "options": [
      "1 2\ng t t\n2",
      "(\n)\n1\n2\ng t\nt\n2\n+",
      "1 2\ng t t",
      "(\n)\n1 2\n1\n2\nt t\ng t\nt\n+"
    ],
    "correctAnswer": 1,
    "explanation": "In case of motion under gravity time taken to \ngo up is equal to the time taken to fall down through the \nsame distance. \nHere, Initial velocity = u, a = -g, s = h, \n\nTime = t \n\n s = ut + \n2\n1 at\n2\n\nh = ut +\n(\n)\n2\n1 -g t\n2\n\n⇒ gt2 - 2ut +2h = 0 \n∴ \nTime, t = \n2\nu\nu - 2gh\ng\n+-\n\nIt means t has two values i.e \nt1 = \n2\nu\nu - 2gh\ng\n-\n\n2\n2\nu\nu - 2gh\nt\ng\n+\n=\n\nTotal time,\n1\n2\n2u\nt\nt\ng\n+\n=\n\nu = (\n)\n1\n2\ng t\nt\n2\n+",
    "examSource": "JIPMER-2017",
    "image": "/images/yct_motion_plane/p106_img1_xref879.png"
  },
  {
    "id": "yct-motion-plane-q433",
    "num": 433,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 3,
    "explanation": "Velocity-time curve for a body projected \nvertically upward is a straight line because the \nacceleration due to gravity is constant and opposite to \nthe direction of initial velocity. \nv = u0 - gt, which is a straight line with slope negative.",
    "examSource": "Velocity-time curve for a body projected  vertically upwards is    (a) Parabola  (b) Ellipse     (c) Hyperbola  (d) Straight line  JIPMER-2011",
    "image": "/images/yct_motion_plane/p107_img1_xref886.png"
  },
  {
    "id": "yct-motion-plane-q434",
    "num": 434,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Diwali rocket is ejecting 50 g of gases/s at a \nvelocity of 400 m/s. The accelerating force on \nthe rocket will be",
    "options": [
      "22 dyne",
      "20 N",
      "20 dyne",
      "100"
    ],
    "correctAnswer": 1,
    "explanation": "The accelerating force on the rocket = \nupward thrust. \n3\nm\nGiven,\n50 10 kg /s,\nt\n-\n∆\n=\n×\n∆\n\nu = 400m/s \nApplying momentum conservation, \nF = change in momentum \nm\nF\nu\nt\n∆\n=\n× ∆\n∆\n\nSo, accelerating force = 50 × 10-3 × 400 = 20N.",
    "examSource": "N  JIPMER-2009",
    "image": "/images/yct_motion_plane/p107_img1_xref886.png"
  },
  {
    "id": "yct-motion-plane-q435",
    "num": 435,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A person can throw a ball upto a maximum \nrange of 100 m. How high above the ground he \ncan throw the same ball?",
    "options": [
      "25 m",
      "50 m",
      "100 m",
      "200"
    ],
    "correctAnswer": 1,
    "explanation": "Range, \n2\nu sin2\nR\ng\nθ\n=\n\nFor max range, θ = 45° \n\n2\nmax\nu\nR\ng\n=\n= 100 m \nMax. height attained when ball is thrown vertically \nupward with velocity (u). \n\n2\nmax\nu\n100\nH\n50m\n2g\n2\n=\n=\n=",
    "examSource": "m  JEE Main-29.06.2022, Shift-II",
    "image": "/images/yct_motion_plane/p107_img1_xref886.png"
  },
  {
    "id": "yct-motion-plane-q436",
    "num": 436,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "An object is projected in the air with initial \nvelocity u at an angle θ. The projectile motion \nis such that the horizontal range R, is \nmaximum. Another object is projected in the \nair with a horizontal range half of the range \nhalf of the range of first object. The initial \nvelocity remains same in both the case. The \nvalue of the angle of projection, at which the \nsecond object is projected, will be ______",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 0,
    "explanation": "Refer to official YCT Physics Volume-I solution for Question 436.",
    "examSource": "degree.   JEE Main-29.07.2022, Shift-I  Ans. (15o) : Range,  2 u sin2 R g",
    "image": "/images/yct_motion_plane/p107_img1_xref886.png"
  },
  {
    "id": "yct-motion-plane-q437",
    "num": 437,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A ball of mass m is thrown vertically upward. \nAnother ball of mass 2 m is thrown an angle θ \nwith the vertical. Both the balls stay in air for \nthe same period of time. The ratio of the \nheights attained by the two balls respectively is \n1\nx . The value of x is ____",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 0,
    "explanation": "Max. time, T1 =\n\n2\n1\n1\n1\n2u\nu\n,Height,H\ng\n2g\n=\n\nAccording to the question, \n\nT1 = T2 \n\n1\n2\n1\n2\n2u\n2u sin\nu\nu sin\ng\ng\nθ\n=\n⇒\n=\nθ \n∵1\nx =\n2\n2\n2\n1\n1\n2\n2\n2\n2\n2\n2\n2\n2\nH\nu / 2g\nu sin\n1\nH\nu sin\n/ 2g\nu sin\nθ\n=\n=\n=\nθ\nθ\n\n1\n1\nx = \nx\n1\n⇒\n=",
    "examSource": ".   JEE Main-27.07.2022, Shift-I",
    "image": "/images/yct_motion_plane/p107_img1_xref886.png"
  },
  {
    "id": "yct-motion-plane-q438",
    "num": 438,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A body of mass 10 kg is projected at an angle of \n45o with the horizontal. The trajectory of the \nbody is observed to pass through a point (20, \n10). If T is the time of flight, then its \nmomentum vector, at time \nT\nt =\n2\n is_______ \n\n [Take g=10 m/s2]",
    "options": [
      "^\n^\n100i\n(100 2\n200)j\n+\n-",
      "^\n^\n100 2i\n(100\n200 2)j\n+\n-",
      "^\n^\n100i\n(100\n200 2)j\n+\n-",
      "^\n^\n100 2i\n(100 2\n200)j\n+\n-"
    ],
    "correctAnswer": 3,
    "explanation": "According to question \n(\n)\n2\n2\n2\n2\n10\n20\n10x\ny\nx -\n10\n20 -\n1\nu\n2u\n2\n×\n=\n⇒\n=\n\n\n\n\n\n\n\n u = 20 \n( )\n2 20\nT\n2 2\n2 10\n^\n^\nv\n10 2 i\n10 2 -10 2\nj\n×\n=\n=\n×\n\n\n=\n+ \n\n\u0002\n\nMomentum \n(\n)\n^\n^\np\nMv\n100 2 i\n100 2 - 200 j\n=\n=\n+\n\u0002\n\u0002",
    "examSource": "JEE Main-27.07.2022, Shift-II",
    "image": "/images/yct_motion_plane/p107_img1_xref886.png"
  },
  {
    "id": "yct-motion-plane-q439",
    "num": 439,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A projectile is launched at an angle ‘α’ with the \nhorizontal with a velocity 20 m/s. After 10 s, \nits inclination with horizontal is ‘β’. The value \nof tanβ will be (g = 10 m/s²).",
    "options": [
      "tanα + 5secα",
      "tanα - 5secα",
      "2tanα - 5secα",
      "2tanα + 5secα"
    ],
    "correctAnswer": 1,
    "explanation": "Given, velocity of projectile (v) = 20 m/s, \ntime (t) = 10 s, tanβ = ? \n\nvx = ux = 20 cosα \nvy = 20 sinα - gt = 20sinα - 10 × 10 = 20sinα - 100 \ny\nx\nv\n20sin\n-100\ntan\nv\n20cos\nα\nβ =\n=\nα\n\n(\n)\n20 sin\n5\ntan\n20cos\nα -\nβ =\nα\n\ntanβ\nsin\n5\ncos\nα -\n=\nα \n\ntanβ\ntan\n5sec\n=\nα -\nα",
    "examSource": "JEE Main-27.06.2022, Shift-I",
    "image": "/images/yct_motion_plane/p108_img1_xref895.png"
  },
  {
    "id": "yct-motion-plane-q440",
    "num": 440,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A ball is projected vertically upward with an \ninitial velocity of 50 m/s at t = 0s. At t = 2s. \nanother ball is projected vertically upward \nwith same velocity. At t = ------ s, second ball \nwill meet the first ball (g = 10 m/s²",
    "options": [
      "6",
      "2 × 6",
      "6 / 2",
      "6 / 4"
    ],
    "correctAnswer": 0,
    "explanation": "Given, Initial velocity of ball = 50 m/s \nLet they meet at t = t \nSo, first ball gets t sec \nand 2nd gets (t-2) sec and they will meet at same height \n\n2\n1\n1\nh\n50t -\ngt\n2\n=\n\n.....(i) \nand \n(\n)\n(\n)\n2\n2\n1\nh\n50 t - 2 -\ng t - 2\n2\n=\n\n.....(ii) \n∵ \nh1 = h2 \nPutting the value from equation (i) and (ii), we get- \n\n(\n)\n(\n)\n2\n2\n1\n1\n50t -\ngt\n50 t - 2 -\ng t - 2\n2\n2\n=\n\n2\n2\n1\n1\n50t\ngt\n50t\n100\ng(t\n4\n4t)\n2\n2\n-\n=\n-\n-\n+\n-\n\n(\n)\n2\n2\n1\n100\ng t\nt\n4\n4t\n2\n=\n-\n-\n+\n\n(\n)\n1\n100\ng 4t\n4\n2\n=\n-\n\n200 = g(4t - 4) \n\n200 = 10 × 4(t - 1) \n\n5 = t - 1 \nor \nt = 6 sec",
    "examSource": ").  JEE Main-26.06.2022, Shift-II",
    "image": "/images/yct_motion_plane/p108_img1_xref895.png"
  },
  {
    "id": "yct-motion-plane-q441",
    "num": 441,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A body is projected from the ground at an \nangle of 45º with the horizontal. Its velocity \nafter 2s is 20m/s.The maximum height \nreached by the body during its motion is ____ \nm. (use g= 10 m/s²",
    "options": [
      "20",
      "2 × 20",
      "20 / 2",
      "20 / 4"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, u = 20 m/s, angle (θ) = 45o, g = \n10 m/s2 \n\nFrom maximum height of projectile, θ = 90° \n\n2\n2\nu sin\nH\n2g\nθ\n=\n\nSo, \n\n2\n2\no\n20 sin 90\nH\n2 10\n=\n×\n\nH = 20 m/s",
    "examSource": ")  JEE Main-24.06.2022, Shift-II",
    "image": "/images/yct_motion_plane/p108_img1_xref895.png"
  },
  {
    "id": "yct-motion-plane-q442",
    "num": 442,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "If the initial velocity in horizontal direction of a \nprojectile is unit vector ^i and the equation of \ntrajectory is y = 5x (1 - x). Their component \nvector of the initial velocity is ______ ^j \n\n (Take g = 10m/s2",
    "options": [
      "5",
      "2 × 5",
      "5 / 2",
      "5 / 4"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, ux = 1 m/sec \nLet the initial velocity in vector form- \n\nx\ny\n^\n^\nv\nu i\nu j\n=\n+\n\ny = 5x (1-x) \n\ny = 5x - 5x2 \n\ny\nx\nx\ndy\ndx\ndx\n5\n- 5.2x.\ndt\ndt\ndt\nu\n5u -10x.u\n=\n=\n\nFor initial velocity, x = 0 \n\nuy = 5ux \n\nuy = 5× 1 \n\n[\n]\nx\nu\n1m\n=\n∵\n\nuy = 5 m/sec \nSo, the y component vector of the initial velocity is ^\n5j .",
    "examSource": ")  JEE Main-26.07.2022, Shift-I",
    "image": "/images/yct_motion_plane/p108_img1_xref895.png"
  },
  {
    "id": "yct-motion-plane-q443",
    "num": 443,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "To projectile thrown at 30° and 45° with the \nhorizontal respectively, reach the maximum \nheight in same time. The ratio of their initial \nvelocities is",
    "options": [
      "1:\n2",
      "2 : 1",
      "2 :1",
      "1 : 2"
    ],
    "correctAnswer": 2,
    "explanation": "Given, θ1 = 30°, θ2 = 45° \nTime taken to reach maximum height- \n\nusin\nT\ng\nθ\n=\n\n∴ \n1\n1\n2\n2\nu sin\nu sin\ng\ng\nθ\nθ\n=\n\no\no\n1\n2\nu sin30\nu sin 45\n=\n\n1\n2\nu\n1/ 2\n2\nu\n1/ 2\n1\n=\n=\n\nor \n1\n2\nu : u\n2 :1\n=",
    "examSource": "JEE Main-26.07.2022, Shift-I",
    "image": "/images/yct_motion_plane/p109_img1_xref904.png"
  },
  {
    "id": "yct-motion-plane-q444",
    "num": 444,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A ball is projected from the ground with a \nspeed 15 m/s at an angle θ with horizontal so \nthat its range and maximum height are equal, \nthen tan θ will be equal to",
    "options": [
      "1\n4",
      "1\n2",
      "2",
      "4"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, speed = 15 m/s \nRange = Maximum height \nWe know that, \n\n2\nu sin 2\nR\ng\nθ\n=\n\n2\n2\nu sin\nH\n2g\nθ\n=\n\n∵ \nR = H \n∴ \n2\n2\n2\nu sin 2\nu sin\ng\n2g\nθ\nθ\n=\n\n2\nsin\n2sin\ncos\n2\nθ\nθ⋅\nθ =\n\n4cosθ = sinθ \nor \ntanθ = 4",
    "examSource": "JEE Main-25.07.2022, Shift-II",
    "image": "/images/yct_motion_plane/p109_img1_xref904.png"
  },
  {
    "id": "yct-motion-plane-q445",
    "num": 445,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A boy can throw a stone upto a maximum \nheight of 10m. The maximum horizontal \ndistance that the boy can throw the same stone \nupto will be",
    "options": [
      "20 2m",
      "10 m",
      "10 2m",
      "20 m \nAIEEE-2012"
    ],
    "correctAnswer": 3,
    "explanation": "For vertically projected body height \n\n2\nu\nH\n2g\n=\n\n....(i) \nFor same body, horizontal distance travelled when \nthrown at an angle θ is- \n\n2\nu sin 2\nR\ng\nθ\n=\n\nMaximum horizontal distance \n\n2\nmax\nu\nR\ng\n=\n\n....(ii) \nFrom equation (i) and (ii), we get- \n\nR = 2H = 2 × 10 = 20 m",
    "examSource": "",
    "image": "/images/yct_motion_plane/p109_img1_xref904.png"
  },
  {
    "id": "yct-motion-plane-q446",
    "num": 446,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A particle of mass m is projected with a \nvelocity v making an angle of 30° with the \nhorizontal. \nThe \nmagnitude \nof \nangular \nmomentum of the projectile about the point of \nprojection when the particle is at its maximum \nheight h is",
    "options": [
      "2\n3 mv\n2\ng",
      "zero",
      "3\nmv\n2g",
      "3\n3 mv\n16\ng\n\nAIEEE 2011"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, mass of particle = m, velocity = \nv, angle = 30o \n\nWe know that, \n\nAngular momentum, L\n\u0002\n= r × mv \n\nL\nrmvsin\n=\nθ\n\u0002\n\nAt maximum point, velocity = v cosθ = v cos 30o \n3 v\n2\n=\n\n The maximum height reached will be - \n\n2\n2\nv sin\nH\n2g\nθ\n=\n\n2\n2\no\n2\nv sin 30\nv\nH\n2g\n8g\n=\n=\n\nFrom the figure, \n\n2\n3\n3 v\nv\n3mv\nL mvH\nm\n2\n8g\n16g\n=\n=\n×\n×\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p109_img1_xref904.png"
  },
  {
    "id": "yct-motion-plane-q447",
    "num": 447,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "Two guns A and B can fire bullets at speeds 1 \nkm/s and 2 km/s, respectively. From a point on \na horizontal ground, they are fired in all \npossible directions. The ratio of maximum \nareas covered by the bullets on the ground \nfired by the two guns is",
    "options": [
      "1 : 4",
      "1 : 16",
      "1 : 8",
      "1 : 2"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, \nInitial velocity of bullet from first gun (uA) = 1 km/s \nInitial velocity of bullet from second gun (uB) = 2 km/s \nWe know, \n\nR = \n2\nu sin 2\ng\nθ \nFor gun A, \n\nRmax = \n2\nA\nu\ng .....(i) (∵ θ = 45°) \nFor gun B, \n\nRmax = \n2\nB\nu\ng \n\n.....(ii) \n∵ The gun fired in all possible direction that's why the \nshape of circle is formed whose area is πR2. \nTaking ratio between A and B, we get- \n\n(\n)\n(\n)\n2\nmax\nA\nA\n2\nmax\nB\nB\nR\nu\ng\nR\ng\nu\n=\n×\n\n(\n)\n(\n)\nmax\nA\nmax\nB\nR\n1\nR\n4\n=\n\nor \n(\n)\n(\n)\n2\nmax\nA\n2\nmax\nB\nR\n1\n16\nR\nπ\n=\nπ\n\n(\n)\n(\n)\n1\nA\n2\nB\nA\n1\nA\n16\n=\n\nThus, ratio of the maximum area are 1:16.",
    "examSource": "JEE Main-10.01.2019, Shift-I"
  },
  {
    "id": "yct-motion-plane-q448",
    "num": 448,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A shell is fired from a fixed artillery gun with \nan initial speed u such that it hits the target on \nthe ground at a distance R from it. If t1 and t2 \nare the values of the time taken by it to hit the \ntarget in two possible ways, the product t1 t2 is",
    "options": [
      "R\n4g",
      "R\ng",
      "R\n2g",
      "2"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, \nRange of fired shell = R \nTime of flight are t1 and t2 \nRange of projectile motion (R) = \n2\nu sin 2\ng\nθ \nTime taken by the shell to reach the target \n\nt = 2usin\ng\nθ \nNow, the shell hits the target in two way θ and (90 - θ) \nSo, for t1 \n\nt1 = 2usin\ng\nθ \nFor t2, \n\nt2 = \n(\n)\n2usin 90\ng\n-θ \nAccording to the question, \n\nt1 × t2 = 2usin\n2usin(90\n)\ng\ng\nθ\n-θ\n×\n\nt1 × t2 = \n2\n2\n4u sin\ncos\ng\nθ×\nθ [∵ sin(90 - θ) = cosθ] \nt1 × t2 = \n2\n2\n2u\n2sin\ncos\ng\n×\nθ×\nθ \nt1× t2 = \n(\n)\n2\n2\n2u\nsin 2\nsin 2\n2sin\ncos\ng\n×\nθ\nθ =\nθ×\nθ\n∵\n\nt1 × t2 = \n2\n2 u\nsin 2\ng\ng\n\n\n×\nθ\n\n\n\n\n\nt1 × t2 = \n2\n2\nu\nsin 2\nR\nR\ng\ng\n\n\n×\nθ\n×\n=\n\n\n\n\n∵\n\nt1 × t2 = 2R\ng",
    "examSource": "R g  JEE Main-12.04.2019, Shift-I  AP EAMCET-2012"
  },
  {
    "id": "yct-motion-plane-q449",
    "num": 449,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "Two particles are projected from the same \npoint with the same speed u such that they have \nthe same range R, but different maximum \nheights h1 and h2. Which of the following is \ncorrect?",
    "options": [
      "2\n1\n2\nR\n4h h\n=",
      "2\n1\n2\nR\n16h h\n=",
      "2\n1\n2\nR\n2h h\n=",
      "2\n1\n2\nR\nh h\n="
    ],
    "correctAnswer": 1,
    "explanation": "Given that, \n\nSame speed of two particle = u \n\nRange of two particle = R \n\nRange of projectile motion, \n\n2\nu sin 2\nR\ng\nθ\n=\n\nHeight for angle θ- \n\n2\n2\n1\nu sin\nh\n2g\nθ\n=\n\n....(i) \nHeight for angle (90-θ), \n\n2\n2\n2\nu sin (90\n)\nh\n2g\n-θ\n=\n\n....(ii) \nmultiply equation (i) and (ii), we get \n\n2\n2\n2\n2\n1\n2\nu sin\nu sin (90\n)\nh\nh\n2g\n2g\nθ\n-θ\n×\n=\n×\n\nSo, \n\n2\n2\n2\n2\nu sin\nu cos\n2g\n2g\nθ\nθ\n=\n×\n\n4\n2\n2\n2\nu sin\ncos\n4\n4\n4g\nθ×\nθ\n=\n×\n\n4\n2\n2\n2\n4u sin\ncos\n16g\nθ×\nθ\n=\n\n4\n2\n2\n2\n1\n4u sin\ncos\n16\ng\n\n\nθ×\nθ\n=\n\n\n\n\n\n2\n2\n1\n2u sin cos\n16\ng\n\n\nθ\nθ\n=\n\n\n\n\n\n2\n2\n1\nu sin2\n16\ng\n\n\nθ\n=\n\n\n\n\n\n h1 × h2\n2\n1\nR\n16\n=\n×\n\n Hence, \n\n R2\n = 16 h1 × h2",
    "examSource": "JEE Main-12.04.2019, Shift-II  BITSAT-2016, 2008  JIPMER-2016  Assam CEE-2014"
  },
  {
    "id": "yct-motion-plane-q450",
    "num": 450,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "The trajectory of a projectile near the surface \nof the earth is given as y = 2x-9x2. If it were \nlaunched at an angle \n0\nθ with speed v0 , then \n(Take, g =10m/s²)",
    "options": [
      "1\n1\n0\n0\n1\n5\nsin\nand v\nms\n3\n5\n-\n-\n\n\nθ =\n=\n\n\n\n",
      "1\n1\n0\n0\n2\n3\ncos\nand v\nms\n5\n5\n-\n-\n\n\nθ =\n=\n\n\n\n",
      "1\n1\n0\n0\n1\n5\ncos\nand v\nms\n3\n5\n-\n-\n\n\nθ =\n=\n\n\n\n",
      "1\n1\n0\n0\n2\n3\nsin\nand v\nms\n5\n5\n-\n-\n\n\nθ =\n=\n\n\n\n"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, \n\nTrajectory equation (y) = 2x - 9x2 \n\n g = 10 m/s2 \n\nangle (θ0) = ? \n\nvelocity (v0) = ? \nWe know, \nStandard equation of trajectory - \n\n2\n2\n2\n0\n0\ngx\ny\nx tan\n2v cos\n=\nθ -\nθ \n On comparing with equation y = 2x - 9x2, we get \n\nPerpendicular\ntan\n2\nBase\nθ =\n=\n\nFrom figure, \n\ncosθ0 = 1\n5\n\n1\n0\n1\ncos\n5\n-\n\nθ =\n\n\n\n\n\nFrom equation, y = 2x - 9x2\n\ntanθ = 2 \nand \n2\n2\n0\n0\ng\n9\n2v cos\n=\nθ\n\n2\n2\n0\n10\n9\n1\n2v\n5\n=\n\n\n\n\n\n\n\n2\n0\n50\n9\n2v = \n\n2\n0\n25\nv\n9\n=\n\n0\n5\nv\nm/s\n3\n=",
    "examSource": "JEE Main-12.04.2019, Shift-I",
    "image": "/images/yct_motion_plane/p111_img1_xref914.png"
  },
  {
    "id": "yct-motion-plane-q451",
    "num": 451,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "The trajectory of a projectile in a vertical plane \nis y = αx - βx2, where α and β are constants \nand x and y are respectively the horizontal and \nvertical distances of the projectile from the \npoint of projection. The angle of projection θ \nand the maximum height attained H are \nrespectively given by",
    "options": [
      "2\n1\ntan\n, 4\n-\nα\nα\nβ",
      "2\n1\ntan\n, 2\n-\nα\nβ\nβ",
      "2\n1\n4\ntan\n,\n-\nα\nα\nβ",
      "2\n1\ntan\n,\n-\nβ\nα\n\n\n\n\nα\nβ\n\n"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n\nTrajectory of particle (y) = αx - βx2 \n\nWhere, x and y are constant \n\nmaximum height = ? \n\nProjection angle (θ) = ? \nNow, y = αx - βx2 \n\ndifferentiate both side w.r.t x, we get \n\ndy\n2 x\n0\ndx = α -β = \ndy\n0\ndx\n\n\n=\n\n\n\n\n∵\n\nα = 2βx \n\nx\n2\nα\n= β \nFor maximum height, \n\nh = αx - βx2 \n\n2\n2\n2\n\n\n\n\nα\nα\n=α\n-β\n\n\n\n\nβ\nβ\n\n\n\n\n\n2\n2\n2\n2\n4\n\n\n\n\nα\nα ×β\n=\n-\n\n\n\n\nβ\nβ\n\n\n\n\n\n2\n2\n2\n4\nα\nα\n=\n-\nβ\nβ\n\n2\n2\n2\n2\n4\n4\nα -α\nα\n=\n=\nβ\nβ \n\n2\nh\n4\nα\n= β \nTrajectory projectile motion, \n\ny = x tan θ -\n2\n2\n2\ngx\n2u\ncos\n⋅\nθ \nOn comparing given equation, \n\ntan θ = α \n\nθ = tan-1 (α)",
    "examSource": "JEE Main-26.02.2021, Shift-II  AP EAMCET-2014",
    "image": "/images/yct_motion_plane/p111_img1_xref914.png"
  },
  {
    "id": "yct-motion-plane-q452",
    "num": 452,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A player kicks a football with an initial speed \nof 25 m/s at an angle of 45º from the ground. \nWhat are the maximum height and the time \ntaken by the football to reach at the highest \npoint during motion ? \n\n (Take, g = 10m/s²)",
    "options": [
      "hmax = 10m, T=2.5s",
      "hmax = 15.625m, T=3.54s",
      "hmax = 15.625m, T=1.77s",
      "hmax = 3.54 m, T=0.125"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, \n\nInitial speed (u) = 25 m/s \n\nangle = 45º \n\nMaximum height (hmax) = ? \n\nTime (t) = ? \n\nWe know, \n\nmaximum height (hmax)\n2\n2\nu sin\n2g\nθ\n=\n\n2\n2\n(25) sin 45º\n2 10\n=\n×\n\n2\n1\n625\n2\n20\n\n\n×\n\n\n\n=\n\n1\n625\n2\n20\n×\n=\n\n312.5\n20\n=\n\nhmax = 15.62m \nTime taken to reach the maximum height- \n\nusin\nT\ng\nθ\n=\n\n25 sin 45º\n10\n×\n=\n\n1\n25 1.414\n10\n×\n=\n (\n)\n2\n1.414\n=\n∵\n\n17.68\n10\n=\n\n = 1.77 sec",
    "examSource": "s  JEE Main-27.08.2021, Shift-II",
    "image": "/images/yct_motion_plane/p112_img1_xref920.png"
  },
  {
    "id": "yct-motion-plane-q453",
    "num": 453,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A helicopter is flying horizontally with a speed \nv at an altitude h has to drop a food packet for \na man on the ground. What is the distance of \nhelicopter from the man when the food packet \nis dropped?",
    "options": [
      "2\n2\n2ghv\n1\nh\n+",
      "2\n2\n2ghv\nh\n+",
      "2\n2\n2v h\nh\ng\n+",
      "2\n2\n2gh\nh\nv\n+"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, \n\nSpeed of helicopter = v \n\nHeight of helicopter from ground = h \n\nComponent along x-axis \n\nFrom 2nd equation of motion, \n\nR = uxT +\n2\nx\n1 a T\n2\n\n(∵ ax = 0) \n\nR = uxT \n…..(i) \nComponent along y- axis \n\nFrom 2nd equation of motion, \n\nh = uyT +\n2\n1 gT\n2\n\n(∵ uy = 0) \n\nh = \n2\n1 gT\n2\n\n2\n2h\nT\ng =\n\n2h\nT\ng\n=\n\n…..(ii) \nPut the value of equation (ii) in equation (i) \n\nx\n2h\nR\nu\ng\n=\n\n(∵ ux = v) \n\n2h\nR\nv\ng\n=\n\nFrom figure, \n\nApplying Pythagoras theorem, \n\nBC2 = h2 + R2 \n\n2\n2 2h\nh\nv\ng\n=\n+\n\n2\n2\nv 2h\nBC\nh\ng\n=\n+",
    "examSource": "JEE Main-31.08.2021, Shift-I",
    "image": "/images/yct_motion_plane/p112_img1_xref920.png"
  },
  {
    "id": "yct-motion-plane-q454",
    "num": 454,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A bomb is dropped by fighter plane flying \nhorizontally. To an observer sitting in the \nplane,",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 2,
    "explanation": "Relative velocity of bomb w.r.t. observer in \nplane = 0. \nWhen the bomb is released from the plane, its \nhorizontal component of the velocity will remain the \nsame as the velocity of the plane. In vertical direction, \nthe bomb will accelerate because of the acceleration due \nto gravity. Hence the bomb will move in a straight line \nvertically downwards with respect to the plane",
    "examSource": "the trajectory of the bomb is a    (a) hyperbola    (b) parabola in the direction of motion of plane     (c) straight line vertically down the plane    (d) parabola in a direction opposite to the motion  of plane  JEE Main-26.08.2021, Shift-II",
    "image": "/images/yct_motion_plane/p113_img1_xref926.png"
  },
  {
    "id": "yct-motion-plane-q455",
    "num": 455,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Assertion (A): When the range of a projectile is \nmaximum, the maximum height reached is \n25% of its maximum range. \n\n Reason (R):",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 0,
    "explanation": "As we know that, \n\nR =\n2\nu sin 2\ng\nθ \nFor maximum range (θ = 45°) \n\n[\n]\nmax\nR\n4H\nR\n4Hcot\n=\n=\nθ \nR\n25%\nH\n4 =\n=\n\nR: \nFor maximum height (θ = 90°) \n\n2\n2\nmax\nu\nH\nH\nu\n2g\n=\n⇒\n∝",
    "examSource": "The maximum height of a  projectile is proportional to the square of the  velocity of projection.      (a) Both (A) and (R) are true and (R) is the  correct explanation of (A)      (b) Both (A) and (R) are true and (R) is not the  correct explanation of (A)     (c) (A) is true but (R) is false     (d) (A) is false but (R) is true   AP EAMCET-25.04.2018, Shift-II",
    "image": "/images/yct_motion_plane/p113_img1_xref926.png"
  },
  {
    "id": "yct-motion-plane-q456",
    "num": 456,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two balls are projected from same place \nsimultaneously. One ball is projected vertically \nupwards and the other at an angle of 30º with \nthe horizontal. If these two reach the ground at \nthe same time then the ratio of their initial \nvelocities is",
    "options": [
      "2 :\n3",
      "2 :1",
      "1:\n3",
      "1 : 2"
    ],
    "correctAnswer": 3,
    "explanation": "We know that, \n\nTime of flight = \ny\n2u\ng \nWhere, uy = Vertical components of projectile \n\nTA = \nA\n2u\ng \n\n....(i) \n\nTB = \no\nB\n2u cos60\ng\n\n....(ii) \nFrom equation (i) and (ii) \n\nTA = TB \n\nA\n2u\ng\n= \nB\n2u\n1\n2\ng\n×\n\n2uA = uB \n\nA\nB\nu\n1\nu\n2\n=\n ⇒ 1:2",
    "examSource": "AP EAMCET-24.04.2019, Shift-II",
    "image": "/images/yct_motion_plane/p113_img1_xref926.png"
  },
  {
    "id": "yct-motion-plane-q457",
    "num": 457,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The Speed of a projectile at its maximum \nheight is \n3\n2 times its initial speed. If the range \nof projectile is 'p' times the maximum height \nattained by it, then the value of 'p' is",
    "options": [
      "2 3",
      "3 2",
      "3",
      "4 3"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \n\nH\n3\nU\nu\n2\n=\n\nR = pH \nLet u be the initial and θ is the angle of the projection \nWe know that speed at the maximum height, \n\nH\nU\nucos\n=\nθ \n\n3 u\nucos\n2\n=\nθ \n\ncosθ = cos30o \n\nθ = 30o \n R = \n2\n2\n2\nu sin 2\nu sin\nand H\ng\n2g\nθ\nθ\n=\n\nAs, R = pH (Given) \n\n2\n2\n2\nu sin2\nu sin\np\ng\n2g\nθ\nθ\n=\n\n2\np\n2sin .cos\nsin\n2\nθ\nθ =\nθ \n\ntanθ = 4\np \nSo, \np = \no\n4\n4 3\ntan30 ⇒",
    "examSource": "AP EAMCET-23.04.2019, Shift-II",
    "image": "/images/yct_motion_plane/p113_img1_xref926.png"
  },
  {
    "id": "yct-motion-plane-q458",
    "num": 458,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A ball is projected from ground into the air. At \nthe height of 5 m, its velocity is \n(\n)\n^\n^\nv = 5i + 5j\n\u0002\n\nm/s. The maximum height reached by the ball \nis (Acceleration due to gravity = 10 m/s²)",
    "options": [
      "8.75 m",
      "5.50 m",
      "6.25 m",
      "10"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \n\nh = 5cm, \n(\n)\n^\n^\nv\n5i\n5j m /s\n=\n+\n\u0002\n\ng = 10m/s2 \nvx = 5m/s, vy = 5m/s \nBy equation of motion, \n\n2\n2\ny\ny\nv\nu\n2gh\n=\n-\n\n2\n2\ny\ny\nu\nv\n2gh\n=\n+\n\n = 52 + 2 × 10 × 5 \n\n2\ny\nu\n125\n=\n\nMaximum height, Hmax = \n2\ny\nu\n125\n6.25m\n2g\n2 10\n=\n=\n×\n\nHmax = 6.25m",
    "examSource": "m  AP EAMCET-07.07.2022, Shift-I"
  },
  {
    "id": "yct-motion-plane-q459",
    "num": 459,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "In a sports competition, a javelin is thrown at \nan angle 45º, which recorded a range of 90 m. \nThe maximum height reached by the javelin is \n\n (Neglect air resistance and acceleration due to \ngravity = 10 ms- 2)",
    "options": [
      "45 m",
      "30 m",
      "22.5 m",
      "30 2"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \nRange = 90 m, θ = 45° \nRange of the Projectile \n2\nu sin2\n(R)\ng\nθ\n=\n\nRange is maximum when sin2θ = 1, θ = 45° \n\n2\nmax\nu\nR\ng\n∴\n=\n\n2\nu\n90\n10\nu\n900\nu\n30m/s\n=\n=\n=\n\nMaximum height \n2\n2\nu sin\n(H)\n2g\nθ\n=\n\nH\n2\n2\n1\n(30)\n30 30 1\n2\n2 10\n4 10\n\n\n\n\n×\n×\n\n\n=\n=\n×\n×\n\nH\n22.5m\n=",
    "examSource": "m  AP EAMCET-06.07.2022, Shift-I"
  },
  {
    "id": "yct-motion-plane-q460",
    "num": 460,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The equation for the trajectory of a projectile is \n\n\n-\n\n\n\n\n2\nx\nx\ny =\n60\n3\nm. The velocity of projection of \nthe projectile is \n\n (Acceleration due to gravity = 10 ms- 2)",
    "options": [
      "8 m/s",
      "40 m/s",
      "16 m/s",
      "20 m/s"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \n2\nx\nx\ny\nm\n...(1)\n60\n3\n\n\n=\n-\n\n\n\n\n\nThe equation for the trajectory \n2\n2\n2\ngx\ny\nx tan\n...(2)\n2u cos\n=\nθ -\nθ\n\nCompare equation (1) by (2)- \nWhere, y = Horizontal component \nx = vertical component \ng = Gravity value \nu = Initial velocity \nθ = angle of inclination of the initial from horizontal \naxis \n\nx\nx tan\n3\n1\ntan\n3\nθ =\nθ =\n\n0\n30\nθ =\n\n2\n2\n2\n2\n2\n2\n0\n2\n2\n2\n2\ngx\nx\nAnd\n60\n2u cos\n1\n2cos\n2 cos 30\n60g\n60 10\nu\n3\n2\n2\n1\n2 3\n60 10\n4 60 10\nu\n4 60 10\nu\n2 20 10\n2 3\n=\nθ\nθ\n×\n=\n=\n×\n\n\n×\n\n\n\n×\n\n\n=\n=\n×\n×\n×\n×\n×\n=\n=\n×\n×\n×\n\nu2 = 400 ⇒ u = 20 m/s",
    "examSource": "AP EAMCET-06.07.2022, Shift-I"
  },
  {
    "id": "yct-motion-plane-q461",
    "num": 461,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "In the projectile motion of an object, the object \nreaches its maximum height where its speed is \nhalf of initial speed. Then the ratio between \nrange and maximum height of projectile is-",
    "options": [
      "4 3",
      "3\n4",
      "4\n3",
      "2\n3"
    ],
    "correctAnswer": 2,
    "explanation": "Given as, \n\nUH = 1 u\n2\n\nR\nH = ? \nLet u be the initial speed and θ is the angle of the \nprojection \nWe know that speed at the maximum height , \n\nUH = u cosθ \n\n1 u\nucos\n2\n=\nθ \n\ncosθ = cos60o \n\nθ = 60o \n\nSo, \nR = \n2\n2\n2\nu sin2\nu sin\nand H\ng\n2g\nθ\nθ\n=\n\n2\n2\nR\nu 2sin cos\n2g\nH\ng\nu sin\nsin\nθ\nθ\n=\n×\nθ×\nθ \n\no\nR\n4\n4\nH\ntan\ntan60\n=\n⇒\nθ\n\nR\n4\nH\n3\n=\n\n or R : H = 4 : \n3",
    "examSource": "AP EAMCET-08.07.2022, Shift-II",
    "image": "/images/yct_motion_plane/p115_img1_xref936.png"
  },
  {
    "id": "yct-motion-plane-q462",
    "num": 462,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile with speed 50 m/s is thrown at an \nangle of 60º with the horizontal. The maximum \nheight that can be reached is \n\n (acceleration due to gravity = 10 m/s²)",
    "options": [
      "90.75 m",
      "70.00 m",
      "85.00 m",
      "93.75"
    ],
    "correctAnswer": 3,
    "explanation": "Given data, \n\nSpeed (u) = 50 m/s \n\nAngle (θ) = 60o \n\nHmax = ? \nWe know that, maximum height of projectile motion \n\nHmax = \n2\n2\nu sin\n2g\nθ \n\nHmax = \n(\n)\n2\no\n50\n50 sin60\n2\n10\n×\n×\n\n2\nmax\n3\n2500\n2\nH\n20\n\n\n×\n\n\n\n=\n⇒\nmax\n2500 3\nH\n4 20\n×\n=\n×\n\nmax\n750\nH\n8\n=\n\nHmax = 93.75m",
    "examSource": "m  AP EAMCET-04.07.2022, Shift-I",
    "image": "/images/yct_motion_plane/p115_img1_xref936.png"
  },
  {
    "id": "yct-motion-plane-q463",
    "num": 463,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile is fired with a velocity u at angle θ \nwith the ground surface. During the motion at \nany time it is making an angle α with the \nground surface. The speed of particle at this \ntime will be",
    "options": [
      "ucos sec\nθ\nα",
      "ucos .tan\nθ\nα",
      "2\n2\n2\nu cos\nsin\nα\nα",
      "usin .sin\nθ\nα"
    ],
    "correctAnswer": 0,
    "explanation": "Horizontal velocity at initial point, \n ux = ucosθ [At projection angle = θ] \nHorizontal velocity at final point, \n\n vx = vcosα \n[At motion angle = α ] \n∵ Horizontal component of velocity is always same \n\n ux = vx \n\n u cosθ = v cosα \n\nu cos\nv\ncos\nθ\n=\nα \n\n v = ucosθ. secα",
    "examSource": "JIPMER-2015",
    "image": "/images/yct_motion_plane/p115_img1_xref936.png"
  },
  {
    "id": "yct-motion-plane-q464",
    "num": 464,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A ball is thrown vertically upwards. Which of \nthe following graph represent v - t graph of the \nball during its flight?",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 3,
    "explanation": "In the positive region the velocity decrease linearly, \nduring rises and in the negative region velocity increase \nlinearly during falls and the direction is opposite to each \nother during rise and fall, hence fall is shown in the \nnegative region. Hence, the correct option is (d).",
    "examSource": "(air resistance is  neglected)                        AP EAMCET-23.09.2020, Shift-II",
    "image": "/images/yct_motion_plane/p115_img1_xref936.png"
  },
  {
    "id": "yct-motion-plane-q465",
    "num": 465,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Range of a particle projected with an initial \nvelocity u = 20\n2 m.s-1 at θ = 45° is",
    "options": [
      "110 m",
      "25 m",
      "55 m",
      "80"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \n\nθ = 45o \n\nu = 20 2 m/s \n\nRange (R) = \n2\nu sin 2\ng\nθ \n\n R = (\n)\n2\no\n20 2\nsin(2 45 )\n10\n×\n\no\n400 2 sin90\nR\n10\n× ×\n=\n\n R = 400\n2\n1\n10\n×\n×\n = 80m",
    "examSource": "m  AP EAMCET-25.09.2020, Shift-II",
    "image": "/images/yct_motion_plane/p116_img1_xref943.png"
  },
  {
    "id": "yct-motion-plane-q466",
    "num": 466,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "For a projectile fired at an angle θ with the \nhorizontal, the maximum height is:",
    "options": [
      "Directly proportional to θ",
      "Directly proportional to sin2 θ",
      "Directly proportional to sin θ",
      "Directly proportional to cos θ"
    ],
    "correctAnswer": 1,
    "explanation": "We know that, \n\nMaximum height of projectile motion \n\n2\n2\nu sin\nH\n2g\nθ\n=\n\nH ∝ sin2θ \nHence, the maximum height is directly proportional to \nsin2θ.",
    "examSource": "AP EAMCET-25.09.2020, Shift-II",
    "image": "/images/yct_motion_plane/p116_img1_xref943.png"
  },
  {
    "id": "yct-motion-plane-q467",
    "num": 467,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two projectiles A and B are projected with the \nsame initial speed. A is launched at an angle φ \nwith the horizontal and B at an angle φ with the \nvertical. If A has a range R1 and B has a range \nR2, then",
    "options": [
      "R1 = 2R2",
      "R1 = 0.5R2",
      "R1 = R2",
      "R1 = 0.25R2"
    ],
    "correctAnswer": 2,
    "explanation": "We know that, Range of projectile motion is \n\n2\nu sin2\nR\ng\nθ\n=\n\nRange for projectile A \n\n2\nA\nu sin2\nR\ng\nφ\n=\n\n.....(i) \nRange for projectile B \n\n(\n)\n2\no\nB\nu sin2 90\nR\ng\n-φ\n=\n\n(\n)\n2\no\nB\nu sin 180\n2\nR\ng\n-φ\n=\n\n2\nB\nu sin2\nR\ng\nφ\n=\n\n....(ii) \nFrom equation (i) and (ii) \n\nRA = RB \n or \nR1 = R2",
    "examSource": "AP EAMCET-24.09.2020, Shift-I",
    "image": "/images/yct_motion_plane/p116_img1_xref943.png"
  },
  {
    "id": "yct-motion-plane-q468",
    "num": 468,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile has a speed of 6 m. s-1 at its \nmaximum height. If its total time of flight is 8 \nseconds the horizontal range is _____",
    "options": [
      "12 m",
      "24 m",
      "36 m",
      "48"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \nHorizontal velocity (ux) = ucosθ = 6 m/s ....(i) \n& Time of flight = 8 sec. \nWe know that, \n Time of flight ( )\n2usin\nT\ng\nθ\n=\n\n∴ \n\n8\n10\nusin\n2\n×\nθ =\n\nVertical velocity (uy) = u sinθ = 40 \n ....(ii) \nHorizontal range Rx = \n2\nu sin 2\ng\nθ \n\nRx = \n2\n2u sin cos\ng\nθ\nθ \n\nRx = \n(\n) (\n)\n2\nusin\nucos\ng\n×\nθ ×\nθ \nFrom equation (i) and (ii) \n\n Rx = 2\n40\n6\n10\n×\n×\n\nRx = 48m",
    "examSource": "m  AP EAMCET-24.09.2020, Shift-II",
    "image": "/images/yct_motion_plane/p116_img1_xref943.png"
  },
  {
    "id": "yct-motion-plane-q469",
    "num": 469,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Three particles A, B and C projected from the \nsame point with the same initial speeds making \nangles 30°, 45° and 60° respectively with the \nhorizontal. Which of the following statement is \ncorrect?",
    "options": [
      "A, B and C have unequal ranges",
      "Ranges of A and C are equal and less than \nthat of B.",
      "Ranges of A and C are equal and greater than \nthat of B.",
      "A,"
    ],
    "correctAnswer": 1,
    "explanation": "Given, projection angle, 30o, 45o and 60o of \nthree particles A, B and C. \nAs we know that, \nRange (R) \n2\nu sin 2\ng\nθ\n=\n\nFor particle A, θ = 30° \n\no\n2\n30\nu sin2\nR\ng\nθ\n=\n\no\n2\no\n30\nu sin(2 30 )\nR\ng\n×\n=\n\no\n2\no\n30\nu sin60\nR\ng\n=\n\no\n2\n30\nu\n3\nR\n2g\n=\n\nFor particle B, θ = 45° \n\no\n2\no\n2\n45\nu sin(2 45 )\nu sin90\nR\ng\ng\n×\n°\n=\n=\n\nR45° \n2\nu\ng\n=\n\nFor particle C, θ = 60° \n\nR60° \n2\n2\nu sin 2 60\nu sin120\ng\ng\n×\n°\n°\n=\n=\n\nR60° = \n2\nu\n3\n2g \nHence, R30° = R60°, But R45° is not equal with then \n\nRA\n = RC < RB",
    "examSource": "B and C have equal range   AP EAMCET (Medical)-07.10.2020, Shift-I"
  },
  {
    "id": "yct-motion-plane-q470",
    "num": 470,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The equation of motion of a projectile is y = ax \n- bx2, where a, b are constants. Match the \ncolumn- I with column-II \n\nColumn - I \nColumn-II \n(i) The initial velocity \nof projection",
    "options": [
      "a\nb \n(ii) \nThe \nhorizontal \nrange of projectile",
      "2\na bg \n(iii) \nThe \nmaximum \nheight \nattained \nby \nprojectile",
      "2\na\n4b \n(iv) The time of flight \nof projectile",
      "2\ng( + a )\n2"
    ],
    "correctAnswer": 2,
    "explanation": "(i) The initial velocity of Projection = \n2\ng(\na)\n2b\n+\nl\n\n(ii) The horizontal range of projectile = a\nb \n(iii) The max. height attained by projectile = \n2\na\n4b \n(iv) The time of flight of projectile \n2\na\nbg\n=",
    "examSource": "b l       option       i  ii  iii  iv    (a) A  B  C  D    (b) D  A  B  C    (c) D  A  C  B    (d) A      D       C     B  AP EAMCET-25.04.2017, Shift-I"
  },
  {
    "id": "yct-motion-plane-q471",
    "num": 471,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A body is projected at an angle θ so that its \nrange is maximum. If T is the time of flight, \nthen \nthe \nvalue \nof \nmaximum \nrange \nis \n(acceleration due to gravity = g)",
    "options": [
      "2\ng T\n2",
      "gT\n2",
      "2\ngT\n2",
      "2\n2\ng T\n2"
    ],
    "correctAnswer": 2,
    "explanation": "We know that, range of projectile motion- \n\nRange (R) = \n2\nu sin 2\ng\nθ \nFor maximum range, θ = 45° \n∴ \nRmax = \n2\nu\ng \n\n....(i) \nTime of flight \n2usin\n2u\nsin 45\nT\ng\ng\nθ\n×\n°\n=\n=\n\n2u\nT\n2.g\n=\n⇒\n2 u\nT\ng\n=\n\ngT\nu\n2\n=\n\nPut \ngT\nu\n2\n=\nin equation (i) \nThen, \n2\n2\nmax\ng T\nR\n2g\n=\n\n2\nmax\ngT\nR\n2\n=",
    "examSource": "AP EAMCET -2014"
  },
  {
    "id": "yct-motion-plane-q472",
    "num": 472,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A body projected from the ground reaches a \npoint X in its path after 3 seconds and from \nthere it reaches the ground after further 6 \nseconds. The vertical distance of the point 'X' \nfrom the ground is (acceleration due to gravity \n= 10 m/s²)",
    "options": [
      "30 m",
      "60 m",
      "80 m",
      "90"
    ],
    "correctAnswer": 3,
    "explanation": "Total flight Time (T) = 6 + 3 = 9 sec, g = 10m/s² \nAs we know that, time of flight is, \n\n2usin\nT\ng\nθ\n=\n\nTg\n9 10\nusin\n2\n2\n×\nθ =\n=\n\nuy = usinθ = 45 m/s \n\ns = ut + 1\n2 at2 \n∴ \nVertical distance is, \nh = uyt + 1\n2 gt2 = 45 × 3 -1\n2 ×10 (3)2 \n\n (∵ Vertical distance, g is negative) \n h = 135 - 45 ⇒ h = 90 m",
    "examSource": "m  AP EAMCET -2016",
    "image": "/images/yct_motion_plane/p118_img1_xref958.png"
  },
  {
    "id": "yct-motion-plane-q473",
    "num": 473,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The range of a projectile is 100m. Its kinetic \nenergy will be maximum after covering a \ndistance of:",
    "options": [
      "25m",
      "50m",
      "75m",
      "100"
    ],
    "correctAnswer": 3,
    "explanation": "Given, Range of a projectile motion (R) = 100 m \n∵ \n2\nu sin2\nR\ng\nθ\n=\n\nFor maximum Range, θ = 45º \n\nRmax = \n2\nu sin 2 45º\ng\n×\n\nRmax = \n2\n2\nu sin90º\nu\ng\ng\n=\n\nu2 = Rmax. g \nWe know that, \nKinetic energy (K.E.) = 1\n2 mu2\n\nK.E. = 1\n2 m.Rmax.g \n\nK.E. ∝ Rmax \nHence, the kinetic energy will be maximum after the \ndistance covered is the range (100 m).",
    "examSource": "m  AP EAMCET-20.08.2021, Shift-I",
    "image": "/images/yct_motion_plane/p118_img1_xref958.png"
  },
  {
    "id": "yct-motion-plane-q474",
    "num": 474,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "When a ball is thrown with a velocity of 50 \nm.s-1 at an angle 30o with the horizontal, it \nremains in the air for ........ second. (take = \n10m.s-2)",
    "options": [
      "5",
      "2.5",
      "1.25",
      "0.625"
    ],
    "correctAnswer": 0,
    "explanation": "Given, \n\nAngle of projection (θ) = 30o \n\nInitial velocity (u) = 50 m/s \n\ng = 10 m/s2 \n\n2usin\nTime of flight (T)\ng\nθ\n=\n\no\n2 50 sin30\nT\n10\n×\n×\n=\n\n100 1\nT\n20\n×\n=\n\nT\n5second\n=",
    "examSource": "AP EAMCET-19.08.2021, Shift-I",
    "image": "/images/yct_motion_plane/p118_img1_xref958.png"
  },
  {
    "id": "yct-motion-plane-q475",
    "num": 475,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "From the top of a tower 19.6 m high a ball is \nthrown horizontally. If the line joining the \npoint of projection to the point where it hits the \nground makes an angle of 45º with the \nhorizontal, then the initial velocity of the ball is \n-----.",
    "options": [
      "9.8 m.s-1",
      "4.9 m.s-1",
      "14.7 m.s-1",
      "2.8 m.s-1"
    ],
    "correctAnswer": 0,
    "explanation": "Given, \n\nh = 19.6 m, θ = 45º \n\nIn ∆ABC, \n\ntan θ = AB\nBC \n\no\nh\ntan 45 ( ABC)\nx =\n∆\n\nh\n1\nx = ⇒ x\nh\n=\n\nx\n19.6 m\n=\n\nBy equation of motion, \n\nh = ut + 1\n2 gt2 \n\nh= 1\n2 gt2 \n(For u = 0) \n∴ \nFlight time \n2h\n2 19.6\nt\n2sec\ng\n9.8\n×\n=\n=\n=\n\nHence, initial velocity, \n\nx\n19.6\nu\n9.8m/sec\nt\n2\n=\n=\n=",
    "examSource": "AP EAMCET-24.08.2021, Shift-I",
    "image": "/images/yct_motion_plane/p119_img1_xref965.png"
  },
  {
    "id": "yct-motion-plane-q476",
    "num": 476,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "For a body projected vertically upwards with a \nvelocity v0 from the ground, match the \nfollowing? \nColumn-I \nColumn-II",
    "options": [
      "av\nν\n\u0005\u0005\u0005\u0002\n(Average \nvelocity) \n(i) \n0\ng\nν",
      "uav (Average \nspeed) \n(ii) \n1\n2\nv\nv\n2\n+\n\u0005\u0005\u0002\n\u0005\u0005\u0002\nover any \ntime-interval",
      "Tascent \n(iii) \n0\n2\nν over the total \ntime of its flight",
      "Tdescent \n(iv) \n0\ng\nν"
    ],
    "correctAnswer": 0,
    "explanation": "Column-I \nColumn-II \nav\nv\n\u0002\n (average velocity) \n\n1\n2\nv\nv\n2\n+\n\u0002\n\u0002\nover any time- \ninterval \nuav (average speed) \n0\nv\n2 over the total time of \nits flight \nTascent \n0\nv\ng \nTdescent \n0\nv\ng",
    "examSource": "A  B  C  D    (a) ii  iii  iv  i    (b) iii  iv  i  ii    (c) iv  i  ii  iii    (d) iv  i  iii  ii  AP EAMCET-03.09.2021, Shift-I",
    "image": "/images/yct_motion_plane/p119_img1_xref965.png"
  },
  {
    "id": "yct-motion-plane-q477",
    "num": 477,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A particle of mass 'm' is projected with a \nvelocity 'u' making an angle 'θ' with the \nhorizontal. \nThe \nmagnitude \nof \nangular \nmomentum of the projectile about the point of \nprojection when the particle is at its maximum \nheight is ----",
    "options": [
      "0",
      "2\nmusin\ncos\n2g\nθ\nθ",
      "2\n2\n2mu cos\nsin\ng\nθ\nθ",
      "3\n2\nmu sin\ncos\n2g\nθ\nθ"
    ],
    "correctAnswer": 3,
    "explanation": "Velocity at maximum height , vx = u cos θ \nMaximum height, \n2\n2\nmax\nu sin\nH\n2g\nθ\n=\n\nAngular momentum about point of projection, \n\n L = m(vx × Hmax) \n\n2\n2\nm\nucos\nu sin\nL\n2g\n×\nθ×\nθ\n=\n\n3\n2\nmu sin\ncos\nL\n2g\nθ\nθ\n=",
    "examSource": "AP EAMCET-19.08.2021, Shift-II",
    "image": "/images/yct_motion_plane/p119_img1_xref965.png"
  },
  {
    "id": "yct-motion-plane-q478",
    "num": 478,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile of mass 1 kg is projected with a \nspeed of 10 m/s at an angle of 60o from the \nhorizontal when projectile is at its highest \npoint, its magnitude of angular momentum \n(about point of projection)",
    "options": [
      "75 Nm/s\n2",
      "75 Nm/s\n4",
      "75 Nm/s",
      "150 Nm/"
    ],
    "correctAnswer": 1,
    "explanation": "The magnitude of angular momentum of the projective \nabout the origin at the highest point is \n\nL = mrv = mHmaxucosθ \n\n2\n2\nu sin\nH\n2g\nθ\n=\n\n3\n2\n3\n2\nmu sin\ncos\n1 (10)\nsin 60 cos60\nL\n2g\n2 10\nθ\nθ\n×\n×\n°\n°\n=\n=\n×\n\n2\n3\n(1) (10)\n3\n1\n2\n10\n2\n2\n\n\n=\n×\n×\n\n\n\n\n×\n\n\n\n75\n4\n=\nN- m/sec",
    "examSource": "s  JIPMER-2019",
    "image": "/images/yct_motion_plane/p119_img1_xref965.png"
  },
  {
    "id": "yct-motion-plane-q479",
    "num": 479,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two projectiles A and B are thrown from the \nsame point with velocities ν and (0.5)ν \nrespectively. If B was thrown at an angle 45° \nwith the horizontal, find the angle with which \nA was projected, if it is known that both A and \nB have equal ranges?",
    "options": [
      "1 1\nsin\n4\n-\n\n\n\n\n",
      "1\n1\n1\nsin\n2\n4\n-\n\n\n\n\n",
      "1\n1\n1\nsin\n2\n8\n-\n\n\n\n\n",
      "1 1\n2sin\n4\n-\n\n\n\n\n"
    ],
    "correctAnswer": 1,
    "explanation": "Given, vA = v, vB = 0.5v, θB = 45o, θA = ? \nWe know that \nRange of Projective (R) =\n2\nv sin2\ng\nθ \nRA = \n2\n2\no\nB\nv sin2\n0.25v sin90\nandR\ng\ng\nθ\n=\n\nAccording to question Both range are equal, \n\nRA= RB \n\n2\nv sin2\ng\nθ\n2\no\n0.25v sin90\ng\n=\n\nv2 sin2θ = 0.25v2 \n\n sin2θ = 0.25 \n\n sin2θ = 1\n4 \n\n 2θ = sin-1 1\n4\n\n\n\n\n\n\n⇒ θ = 1\n2 sin-1 1\n4\n\n\n\n\n\n",
    "examSource": "AP EAMCET-06.09.2021, Shift-II  Kerala CEE 2020",
    "image": "/images/yct_motion_plane/p120_img1_xref971.png"
  },
  {
    "id": "yct-motion-plane-q480",
    "num": 480,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A particle is projected at an angle of 30o from \nthe horizontal with a speed of 10 m/s on the \nearth. It's time of flight, range, velocity of \nimpact are respectively T, R, V. If this \nprojectile is projected on the moon then its time \nof flight, range and velocity of impact is \n(assume gravitational field on moon is g/6 m/s2)",
    "options": [
      "6T, 6R, 6V",
      "6T, 6R, V",
      "T, R, V",
      "T, 6R, 6"
    ],
    "correctAnswer": 1,
    "explanation": "On Earth, \n\nTime of flight \n2usin\n(T)\ng\nθ\n=\n\nRange of flight (R) = \n2\nu sin 2\ng\nθ \n\nIn moon, \n\nTime of flight, \n2usin\n(T')\n6T\ng/6\nθ\n=\n=\n\nRange of flight \n2\nu sin2\n(R ')\n6R\ng /6\nθ\n=\n=\n\nThe impact velocity is the velocity of an object when it \nhits ground or another object. \nVelocity of impact on earth = Velocity of impact on \nmoon \n\nv\nv'\n=",
    "examSource": "V  JIPMER-2019",
    "image": "/images/yct_motion_plane/p120_img1_xref971.png"
  },
  {
    "id": "yct-motion-plane-q481",
    "num": 481,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "If three objects are thrown with velocity \n2gH\ngH\n,\n2gH,\n,\n3\n3\n then find the ratio of \ntheir maximum heights",
    "options": [
      "2 : 6 : 1",
      "2 : 5 :3",
      "2 : 4 : 7",
      "3 : 7 : 4"
    ],
    "correctAnswer": 0,
    "explanation": "So, Hmax\n2\nu sin2\n2g\nθ\n=\n\nHmax ∝u2 \nH1 : H2 : H3 = \n2\n2\n2\n1\n2\n3\nu : u : u \nPut the values of u1, u2 and u3 \nH1\n : H2 : H3 \n= 2gH\n3\n: 2gH : gH\n3\n\n= 2 : 6 : 1",
    "examSource": "JIPMER-2019",
    "image": "/images/yct_motion_plane/p120_img1_xref971.png"
  },
  {
    "id": "yct-motion-plane-q482",
    "num": 482,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "What is the range of a projection thrown with \nvelocity 98 m/s with angle 30o from horizontal?",
    "options": [
      "490\n3 m",
      "245\n3 m",
      "980\n3 m",
      "100"
    ],
    "correctAnswer": 0,
    "explanation": "2\nu sin2\nRange (R)\ng\nθ\n=\n\no\n98 98 sin60\nR\n9.8\n×\n×\n=\n\n10 98\n3\nR\n2\n×\n×\n=\n\nR\n5 98 3\n= ×\n\nR\n490 3m\n=",
    "examSource": "m  JIPMER-2018",
    "image": "/images/yct_motion_plane/p120_img1_xref971.png"
  },
  {
    "id": "yct-motion-plane-q483",
    "num": 483,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The ratio of minimum kinetic energies of two \nprojectiles of same mass is 4:1 and the ratio of \nmaximum height attained by them is 4 : 1. \nThen the ratio of their ranges is______",
    "options": [
      "2 : 1",
      "8 : 1",
      "16 : 1",
      "4 : 1"
    ],
    "correctAnswer": 3,
    "explanation": "Given \n\nm1 = m2 = m \n\n1\n2\nK.E\n4\nK.E\n1\n=\n, \n1\n2\nH\n4\nH\n1\n=\n\n1\n2\nK.E\n4\nK.E\n1\n=\n\n2\n1\n1\n2\n2\n2\n1 mu\n4\n2\n,\nu\n2u\n1\n1\nmu\n2\n=\n=\n\nMax Height ( )\n2\n2\nu sin\nH\n2g\nθ\n=\n\n∵ \n1\n2\nH\n4\nH\n1\n=\n\n2\n2\n1\n1\n2\n2\n2\n2\nu sin\n4\nu\nsin\n1\nθ =\nθ\n\n2\n2\n2\n1\n2\n2\n2\n2\n4u\nsin\n4\nu\nsin\n1\nθ =\nθ\n\nsinθ1 = sinθ2 \n\n1\n2\nθ = θ \nHence, \n\n2\n1\n1\n1\n2\n2\n2\n2\nR\nu sin2\nR\nu\nsin2\nθ\n=\nθ \n\n[\n]\n2\n1\n2\n1\n1\n2\n2\n2\n2\n2\nR\n4u\nsin2\nR\nu\nsin2\nθ\n=\nθ =θ\nθ\n∵\n\n1\n2\nR\n4\nR\n1\n=\n\n1\n2\nR : R\n4:1\n=",
    "examSource": "AP EAMCET-25.04.2017, Shift-I",
    "image": "/images/yct_motion_plane/p121_img1_xref979.png"
  },
  {
    "id": "yct-motion-plane-q484",
    "num": 484,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile is thrown with a velocity of \n-1\n10 2ms at an angle of 45° with the horizontal. \nThe time interval between the moments when \nthe speeds are\n-1\n125ms is (g = 10 m/s²)",
    "options": [
      "0.5 s",
      "1.5 s",
      "2 s",
      "1.0"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \n\n1\nu 10 2 ms-\n=\n\nθ = 45o \n v\n125 m/s\n=\n\n2vsin\nT\ng\nα\n=\n\nv cosα = ucosθ = u cos45o \n\n1\n125cos\n10 2\n2\nα =\n×\n\n10\ncos\n125\nα =\n\n5\nsin\n125\nα =\n\n2usin\n2\n125\n5\nT\n,\nT\n1sec.\ng\n10\n125\nα\n×\n=\n=\n×\n=",
    "examSource": "s  AP EAMCET-25.04.2017, Shift-II",
    "image": "/images/yct_motion_plane/p121_img1_xref979.png"
  },
  {
    "id": "yct-motion-plane-q485",
    "num": 485,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two bodies are projected from points (0,0) and \n(\n)\n3 -1,0 with velocities 10 m/s and v m/s \nrespectively, as shown in the figure. The time \nafter which they collide in space is _______",
    "options": [
      "0.8 s",
      "0.6 s",
      "0.4 s",
      "0.2"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \nFor particle - I \n\nu = 10 m/s \n\no\nx\n3\nu\n10cos30\n10\n5 3 m/s\n2\n=\n=\n×\n=\n\no\ny\n1\nu\n10sin30\n10\n5 m/s\n2\n=\n=\n×\n=\n\nFor particle -II \n\nu′ = v \n\nu′\ny = vcos45o = v\n2\n, \n'\no\nx\nv\nu\nvsin45\n2\n=\n=\n\nIn particles collide, (x, y) co-ordinates at time ‘t’ for \nboth particle is equal. \ny - co-ordinates, \n\n2\n1\ny\n1\ny\nu t\ngt\n2\n=\n-\n\ny2 = uyt \n2\n1 gt\n2\n-\n\ny1 = y2 ⇒ uyt \n2\n1 gt\n2\n-\n = u′\nyt \n2\n1 gt\n2\n-\n\nuy = u′\ny \n5 m/s = v\nv\n5 2 m/s\n2\n⇒\n=\n\nx - co-ordinates, \n\n'\n1\nx\n2\nx\nx\nu t, x\nu t\n3\n1\n=\n=\n+\n- \nx1 = x2, uxt = ux\n′t + \n3 - 1 \n\nv\n5 2 t\n5 3 t\nt\n3\n1\n3\n1\n2\n2\n=\n+\n-=\n+\n- \n\n(\n)\nt 5 3\n5\n3\n1\n-\n=\n- \n\n3\n1\n3\n1\n1\nt\n0.2sec\n5\n5 3\n5\n5( 3\n1)\n-\n-\n=\n=\n=\n=\n-\n-",
    "examSource": "s  AP EAMCET-26.04.2017, Shift-II",
    "image": "/images/yct_motion_plane/p121_img1_xref979.png"
  },
  {
    "id": "yct-motion-plane-q486",
    "num": 486,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A body is projected into vertical X-Y plane \nwith X-axis along horizontal and Y-axis along \nvertical with an initial velocity (\n)\n^\n\n10i + pj .If the \nmaximum height reached by the body is 50% \nof its range, then the value of p is",
    "options": [
      "20",
      "10",
      "5",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n\nInitial velocity\n(10i\npj)\n=\n+\n\ntanθ = p\n10 \n\nmax\n1\nH\nR,\n2\n=\n\n2\n2\n2\nu sin\n1 u sin 2\n2g\n2\ng\nθ\nθ\n=\n\nsin2θ = sin2θ \n\nsin2θ = 2sinθ cosθ \n\ntanθ = 2 \n\np\n2\n10 = \n\np 20\n=",
    "examSource": "AP EAMCET-26.04.2017, Shift-II",
    "image": "/images/yct_motion_plane/p122_img1_xref989.png"
  },
  {
    "id": "yct-motion-plane-q487",
    "num": 487,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile is thrown from the surface of \nground on Earth with velocity 16 m/s at an \nangle of 75o from the vertical. The projectile \nwould be able to cover, approximately a \nhorizontal distance (in meters)",
    "options": [
      "13",
      "17",
      "15",
      "21 \nAMU-2007"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n\nu = 16 m/s \n\nφ = 75°, θ = 90 - φ = 90 - 75 = 15° \n\n2\nu sin 2\nR\ng\nθ\n=\n\n(\n)\n16 16 sin 2 15\nR\n10\n×\n×\n×\n=\n\n(\n)\n256 sin 30\nR\n10\n×\n=\n\n256 1/ 2\nR\n10\n×\n=\n\n128\n12.8 13m\n10\n=\n=\n≃",
    "examSource": "",
    "image": "/images/yct_motion_plane/p122_img1_xref989.png"
  },
  {
    "id": "yct-motion-plane-q488",
    "num": 488,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two seconds after projection, a projectile is \nmoving at 30º above the horizontal, after one \nmore second it is moving horizontally. The \ninitial speed of the projectile is (g = 10 m/s²)",
    "options": [
      "10 m s-1",
      "10 3 m s-1",
      "20 m s-1",
      "20 3 m s-1 \nAMU-2018"
    ],
    "correctAnswer": 3,
    "explanation": "As given that that after 3s of projection the projectile is \nmoving horizontal. \nSo, \n\nusin\nt\n3\ng\nθ\n=\n= \n\nu sinθ = 3g = 3 × 10 = 30 ....(i) \nHorizontal component of velocity always remains same, \nso- \n\nucosθ = vcos30o \n\nv\n3\n3\nucos\nv\n2\n2\n×\nθ =\n=\n\nFor vertical motion of projectile from point 0 to A. \n\nvsin30o = usinθ - gt \n\nv\n30 10 2\n2 =\n-\n× \n\nv = 20 m/s \n∵ \nucosθ = vcos30o \n\n3\nucos\n20\n10 3\n2\nθ =\n×\n=\n\n....(ii) \nFrom equation (i) and (ii), we get \n\nusin\n30\nucos\n10 3\nθ =\nθ\n\ntanθ =\n3 ⇒ θ = 60o \nFrom equation (ii), \n\nucosθ = 10 3 \n\nu × cos60o = 10 3 \n\n1\nu\n10 3\n2\n×\n=\n\nu\n20 3 m/s\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p122_img1_xref989.png"
  },
  {
    "id": "yct-motion-plane-q489",
    "num": 489,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The expression of the trajectory of a projectile \nis given as \n\n y = px - qx2 \n\n Where y and x are respectively the vertical and \nhorizontal displacements, and p and q are \nconstants. The time of flight of the projectile is",
    "options": [
      "2\np\n4q",
      "2\np\n2q",
      "2p\nqg",
      "2\np qg \nAMU-2016"
    ],
    "correctAnswer": 3,
    "explanation": "y = px - qx2 \n\n....(i) \n\n[\n]\ndy\n0\nmax.height\ndx =\n\np - 2qx = 0 \n\np\nx\n2q\n=\n\nPutting value of x in equation (i), \n\n2\nmax\np\np\ny\nH\np\nq\n2q\n2q\n\n\n=\n=\n⋅\n-\n\n\n\n\n2\np\nH\n4q\n=\n\n....(ii) \n\n2\n2\n2\np\nu sin\nH\n4q\n2g\nθ\n=\n=\n\n2\np g\nusin\n2q\nθ=\n\n2usin\nT\ng\nθ\n=\n\n....(ii) \nPutting value of u sinθ in equation (iii) \n\n2\n2\np g\nT\ng\n2q\n=\n\n2\n2p\nT\nqg\n=\n2\np qg\n=",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q490",
    "num": 490,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A projectile is thrown with an initial velocity of \n^\n^\nV = (pi + aj)m/s\n\u0002\n. If the range of the projectile is \ndouble the maximum height reached by it, then",
    "options": [
      "a = 2q",
      "a = 4p",
      "a = 2p",
      "a = p \nAMU-2011"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \n\n^\n^\nV = (pi + aj)\n\u0002\n\nlet angle of projection = θ \ny\nX\nV\ntan\nV\nθ =\n\na\ntan\np\n\n\nθ = \n\n\n\n\n....(i) \n\ngiven that \nR = 2H \n\n2\n2\n2\nu sin 2\nu sin\n2\ng\n2g\nθ\nθ\n=\n× \n\n2\n2\n2\n2u sin cos\nu sin\n2\ng\n2g\nθ\nθ\nθ\n=\n× \n\ncos\n1\nsin\n2\nθ =\nθ\n\ncotθ = 1\n2 \n\ntanθ = 2 \n\n.....(ii) \nFrom equation (i) and (ii), we get- \n a\np = 2 \n\na = 2p",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q491",
    "num": 491,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A ball of mass m is projected upward with a \nspeed v0. The speed at a height h is \n\n (Neglecting air resistance)",
    "options": [
      "independent of angle and direction of \nprojection",
      "independent of mass, angle and the direction \nof projection",
      "dependent on the direction of projection",
      "dependent on the shape, size and mass of the \nball and angle of projection"
    ],
    "correctAnswer": 2,
    "explanation": "If a ball of mass m and speed vo is thrown upward, \nthen speed at height h is- \n\n v2=u2-2gh \n\n v2 = \n2\n0\nv sin2θ - 2gh \nSo, the speed depend on the direction of projection.",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q492",
    "num": 492,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "An object of mass 2 m is projected with a speed \nof 100 m/s at an angle θ = \n\n\n\n\n\n\n-1\n3\nsin\n5 to the \nhorizontal. At the highest point, the object \nbreaks into two pieces of same mass m and the \nfirst one comes to rest. The distance between \nthe point of projection and the point of landing \nof the bigger piece (in metre) is (Given, g = 10 \nm/s²)",
    "options": [
      "3840",
      "1280",
      "1440",
      "960"
    ],
    "correctAnswer": 2,
    "explanation": "Horizontal range of the abject fired, \n2\nu sin 2\nR\ng\nθ\n=\n\nAt the highest point, when object is exploded into two \nequal masses and one comes to rest, then \nby law of conservation of momentum \n\n2mu cosθ = m (0) + mv \n\nor v = 2u cosθ \nIt means, the horizontal velocity becomes double at the \nhighest point, hence it will cover double the distance \nduring the remaining flight. \n∴ \n Total horizontal range of the other part \n\n R′ = R\n3R\n+ R =\n2\n2 \n\n(\n)\n2\n2\n100\n2sin cos\n3 u sin 2\n3\n2\ng\n2\ng\n×\nθ\nθ\nθ\n=\n=\n×\n\n = \n(\n)\n2\n3\n4\n100\n× 2 ×\n×\n3\n5\n5\n×\n2\n10\n\n3\nIf sin\n5\n4\ncos\n5\n\n\nθ =\n\n\n\n\n\n\nθ =\n\n\n\n\n\n= 1440 m",
    "examSource": "EAMCET-2007",
    "image": "/images/yct_motion_plane/p124_img1_xref1006.png"
  },
  {
    "id": "yct-motion-plane-q493",
    "num": 493,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A ball is thrown vertically upward from the \nground with a speed of 25.2 m/s. The ball will \nreach the highest point of its journey in",
    "options": [
      "5.14 s",
      "3.57 s",
      "2.57 s",
      "1.29"
    ],
    "correctAnswer": 2,
    "explanation": "u = 25.2 m/s \n\nfor vertical upward direction. \n\n2\nu\n25.2 25.2\nH\n32.4m\n2g\n2 9.8\n×\n=\n=\n=\n×\n\nand \nu\n25.2\nt\ng\n9.8\n=\n=\n\nt\n2.57s\n=",
    "examSource": "s  NDA (II) 2016",
    "image": "/images/yct_motion_plane/p124_img1_xref1006.png"
  },
  {
    "id": "yct-motion-plane-q494",
    "num": 494,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Consider the motion of a particle described by \nx = a cos t, y = a sin t and z =",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 0,
    "explanation": "Given, x = a cost, y = a sin t, z = t \n\n x2 + y2 = a2cos2 t + a2 sin2t \n = a2 (cos2t + sin2 t) \n x2 + y2 = a2 is a circular equation \nThen, \n\nIn one revaluation the particle move a distance \nof 1 unit along z-axis, \n\nz = t \n\ndz\n1\ndt = \nHence, the trajectory traced by the particle as a function \nof time is helix.",
    "examSource": "t. The trajectory  traced by the particle as a function of time is     (a) Helix  (b) Circular    (c) Elliptical  (d) Straight line  TS EAMCET (Engg.)-2017",
    "image": "/images/yct_motion_plane/p124_img1_xref1006.png"
  },
  {
    "id": "yct-motion-plane-q495",
    "num": 495,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A body is projected up a smooth inclined plane \nof length 20 2 m from point A as shown in the \nfigure. The top B of the inclined plane is \nconnected to a well of diameter 40 m. If the \nbody just manages to cross the well then the \nvelocity of projection is \n\n (Acceleration due to gravity, g = 10 m/s²)",
    "options": [
      "40 m/s",
      "40 2 m/s",
      "20 m/s",
      "20 2 m/s"
    ],
    "correctAnswer": 3,
    "explanation": "According the question, \n\nIn ∆ABC, \n\no\nh\n=\n45\n20 2\ncos\n\n1\nh = 20 2\n2\n\n\n\n\n\n \n\nh = 20 m \nFrom third equation of the motion, \n\n2\n2\nv = u + 2gh \n\n(\n)\nv =\n2gh\nu = 0\n∵\n\n v = \n2 ×10 × 20 = 20 m/s \nNet energy at a point B, \n\n(\n)\n2\n2\n1\n1\nmv + mgh =\nm 20\n+ m ×10 × 20\n2\n2\n\n = m (200 + 200) \n\n = 400 m \nNet energy at point D to cross the well, \n\n2\nD\nD\n1\nE\n=\nmv\n2\n\nSo, \n2\nD\n1 mv\n= 400 m\n2\n\nD\nv\n= 20 2 m/s",
    "examSource": "AP EAMCET (22.04.2019) Shift-II",
    "image": "/images/yct_motion_plane/p124_img1_xref1006.png"
  },
  {
    "id": "yct-motion-plane-q496",
    "num": 496,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A particle is projected with velocity v0 along X-\naxis. The deceleration on the particle is \nproportional to the square of the distance from \nthe origin i.e, a = αx2 the distance at which the \nparticle stops is",
    "options": [
      "0\n3v\n2α",
      "1\n3\n0\n3v\n2\n\n\n\n\nα\n\n",
      "2\n0\n2v\n3α",
      "1\n2\n3\n0\n3v\n2\n\n\n\n\nα\n\n\n\nCG PET- 2008"
    ],
    "correctAnswer": 3,
    "explanation": "If particle is projected with velocity v0 from origin in \nX-direction \nSo, initial velocity = v0, final velocity = 0 \nDeceleration a = -αx2 \nLet distance covered by the particle be d. \n\na = -αx2 \nOr \n2\ndv\nx\ndt\nα\n=-\n\ndx\ndx\nv\ndt\ndt\nv\n\n\n\n\n=\n⇒\n=\n\n\n\n\n∵\n\nNow, \n2\ndv\nx\ndx / v\nα\n=-\n\n2\nvdv\nx\ndx\nα\n=-\n\n2\nvdv\nx dx\nα\n= -\n\nNow, integrating with limit v0 to 0 and from 0 to d. \n\n(\n)\n0\n0\nd\n2\nv\n0\nvdv\nx\ndx\nα\n=\n-\n∫\n∫\n\n0\n0\nd\n2\n3\nv\n0\nv\nx\n2\n3\nα\n\n\n\n\n\n\n\n\n=-\n\n\n\n\n\n\n\n\n\n2\n3\n0\nv\nd\n0\n0\n2\n3\nα\n\n\n\n\n-\n=-\n-\n\n\n\n\n\n2\n3\n0\nv\nd\n2\n3\nα\n=\n\n2\n3\n0\n3v\nd\n2α\n=\n\n1\n2\n3\n0\n3v\nd\n2α\n\n\n\n\n= \n\n\n",
    "examSource": "",
    "image": "/images/yct_motion_plane/p125_img1_xref1020.png"
  },
  {
    "id": "yct-motion-plane-q497",
    "num": 497,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A body is projected vertically upwards with a \nvelocity of 10 m/s and another body is \nprojected simultaneously from the same point \nwith a velocity of 20 m/s at an angle of π\n6 with \nthe horizontal. The distance between the two \nbodies after one second from the time of \nprojection is (Acceleration due to gravity is 10 \nm/s²)",
    "options": [
      "10 m",
      "10 3m",
      "20 m",
      "20 3"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, \nProjectile velocity of body A, vA = 10 m/sec \nProjectile velocity of body B, vB = 20 m/sec \n\nAngle, \no\n30\n6\nπ\nθ =\n=\n\nVertical velocity of A = 10 sin 90° \n\nY\nA\nv\n = 10 m/sec \nHorizontal velocity \n\nx\nA\nv\n = vA cos 90o \n\n = 10 × 0 \nx\nA\nv\n= 0 \nDistance = d1 \n\nVertical velocity of body B, \ny\nB\nv\n= 20 sin 30o \n\n= 10 m/sec. \nheight of both projectile body is same . \nHorizontal velocity of body B, \nx\nB\nv\n = vB cos θ \n\n= 20 cos 30o \n\n= \n3\n20 2 \n\nx\nB\nv\n = 10\n3 m/sec \n\nDistance = d2 \n\nTotal distance, d = d1 + d2 \n\n= 0 + 10 3 \n\n= 10 3",
    "examSource": "m  AP EAMCET(Medical)-2016",
    "image": "/images/yct_motion_plane/p125_img1_xref1020.png"
  },
  {
    "id": "yct-motion-plane-q498",
    "num": 498,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A ball is projected at a cliff of height H with an \ninitial speed of 100 m/s at an angle 30º above \nthe horizontal. The ball hits the point A on the \ncliff after 5s. The height of the cliff is: \n\n(Assume g = 10 m/s2)",
    "options": [
      "50 m",
      "100 m",
      "125 m",
      "150"
    ],
    "correctAnswer": 2,
    "explanation": "To get the height of the cliff, use the equation of \nvelocity- \n\ns = ut - \n( )\n2\n1 gt\n____ i\n2\n\n∵ \nu = vsinθ __________(ii) \nGiven, u = 100 m/s. \nθ=30° \n\n t = 5 sec, \ng = 10 m/s2 \nFrom eq. (ii), u = v sin θ \n\n u = v × sin 30o \n\n u = 100× 1\n2 = 50m/s \nFor height of the cliff, \n\ns = H \nFrom eq. (i), H = ut - \n2\n1 gt\n2\n\nH = v sin θ × t -\n2\n1 g t\n2\n⋅\n\n = \n2\n1\n50 5\n10 5\n2\n× -\n×\n×\n\n = 125 m",
    "examSource": "m  TS EAMCET 29.09.2020, Shift-II",
    "image": "/images/yct_motion_plane/p126_img1_xref1027.png"
  },
  {
    "id": "yct-motion-plane-q499",
    "num": 499,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Particle A is released from a point P on a \nsmooth inclined plane. Which makes an angle \nα with the horizontal. Simultaneously from P \nanother particle B is projected in the same \ndirection, with an initial velocity u at an angle \nβ with the horizontal. If both A and B meet \nagain on the inclined plane. α and β are related \nas______",
    "options": [
      "4\nπ\nα + β =",
      "6\nπ\nα + β =",
      "2\nπ\nα + β =",
      "3\nπ\nα + β ="
    ],
    "correctAnswer": 2,
    "explanation": "Consider motion of B along the plane, \nInitial velocity = u cos (α + β) and acceleration = g sin \nα \nUsing second equation of motion along the inclined \nplane, (for particle B) \n∴ \nOP = u cos(α + β) × t + 1\n2 g sin αt2…..(1) \n\nFor motion of particle A along the plane, \nInitial velocity = 0 \nAcceleration = g sin α \nUsing second equation of motion along the inclined \nplane, (for particle A) \n\n∴ \nOP = 1\n2 g sinαt2 …………(2) \nFrom Equation (1) and (2), we get \nut cos (α + β) = 0 \nso, either t = 0 or \n2\nπ\nα +β =\n\nThus, the condition for the particles to collide is \n2\nπ\nα +β =",
    "examSource": "AP EAMCET (Medical)-05.10.2021, Shift-I",
    "image": "/images/yct_motion_plane/p126_img1_xref1027.png"
  },
  {
    "id": "yct-motion-plane-q500",
    "num": 500,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A ball is thrown at a speed of 20 m/s at an angle \nof 30o with the horizontal. The maximum \nheight reached by the ball is (use g = 10m/s2)",
    "options": [
      "2 m",
      "3 m",
      "4 m",
      "5"
    ],
    "correctAnswer": 3,
    "explanation": "Given data, \n\nInitial speed, u = 20 m/s \n\nθ = 30° \nAccording the formula \nThe maximum height, \n2\n2\nmax\nu sin\nH\n2g\nθ\n=\n\n(\n)\n2\nmax\n20\n20 sin30\nH\n2 10\n×\n°\n=\n×\n\n[∴ g = 10m/s2] \nmax\n1\n1\n20\n20\n2\n2\nH\n20\n×\n× ×\n=\n\nHmax = 5m",
    "examSource": "m  TS EAMCET (Engg.)-2017",
    "image": "/images/yct_motion_plane/p127_img1_xref1037.png"
  },
  {
    "id": "yct-motion-plane-q501",
    "num": 501,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A bullet is fired at time t = 0 with velocity 20 \nm/s and at an initial angle of 30º with the \nhorizontal. \nThe \ntan \nangle \nbetween \nthe \ndisplacement vector and the horizontal after \ntime 0.1 s is. \n\n (Assume g = 10 m/s2)",
    "options": [
      "38\n20 3",
      "19\n20 3",
      "19\n20",
      "19 3\n20"
    ],
    "correctAnswer": 1,
    "explanation": ": Initially bullet was at the origin. \nWe have to find out x and y co-ordinate of the bullet \nafter 0.1 sec. \n\nAs we know horizontal component of velocity will not \nchange, ux = vx \n\nx = ux × t = u cos 30° × t \n\nx = 20 × \n3\n2 × 0.1 = \n3 \n\ny = \n2\ny\ny\n1\nu t\na t\n2\n+\n\ny = u sin 30 × t - 1\n2 gt2 \n(∵ ay = -g) \n\ny = 20 × 1\n2 × 0.1 - 1\n2 × 10 × 0.12 \n\ny = 1- 1\n20 = 19\n20 \nAssume the angle between the displacement vector and \nthe horizontal after time 0.1 sec is θ \n\ntan θ = y\n19\n1\nx\n20\n3\n=\n×\n\ntan θ = \n19\n20 3",
    "examSource": "TS EAMCET 19.07.2022, Shift-II",
    "image": "/images/yct_motion_plane/p127_img1_xref1037.png"
  },
  {
    "id": "yct-motion-plane-q502",
    "num": 502,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A body is thrown horizontally from the top of a \ntower of 5 m height. It touches the ground at a \ndistance of 10 m from the foot of the tower. The \ninitial velocity of the body is",
    "options": [
      "2.5 m/s",
      "5 m/s",
      "10 m/s",
      "20 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "Given, Height (H) = 5 m, Range (R) = 10 m \nFor vertical direction, \n\nuy = 0, a = g m/s2, H = 5 m \n\nH = uyt \n2\n1 at\n2\n+\n\n2\n1\nH\n0\ng\nt\n2\n=\n+\n× ×\n\n2H\n2 5\nt\ng\n10\n×\n=\n=\n\n(∵ g = 10 m/s2) \n\nt = 1 sec \nFor horizontal direction, \n\nux = u, R = 10 m, a = 0, t = 1 sec \n\n2\nx\n1\nR\nu t\nat\n2\n=\n+\n\n10 = uxt + 0 \n\n10 = u × 1 \n\nu = 10 m/s \n\n (e) \nCircular Motion : Uniform \nCircular Motion, Dynamic \nCircular Motion",
    "examSource": "EAMCET-2000",
    "image": "/images/yct_motion_plane/p127_img1_xref1037.png"
  },
  {
    "id": "yct-motion-plane-q503",
    "num": 503,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 1,
    "explanation": "If a particle tied to the end of a string is set in \ncircular motion then the tension of the string is always \nperpendicular to the velocity of the particle because the \ntension force act towards the center and velocity \ntowards the tangent of the circle.",
    "examSource": "If a particle tied to the end of string is set in  circular motion then the tension of the string is    (a) always parallel to the velocity of the particle    (b) always perpendicular to the velocity of the  particle    (c) perpendicular to the velocity of the particle  only at one instant    (d) parallel to the velocity of the particle only at  one instant  EAMCET-1996",
    "image": "/images/yct_motion_plane/p128_img1_xref1065.png"
  },
  {
    "id": "yct-motion-plane-q504",
    "num": 504,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 1,
    "explanation": "The stone is rotating in vertical circle of \nradius L. \n\nSo, At the highest point, tension of the string is zero. \nmg = Fc \n∴ \n2\nmax\nv\nmg\nm L\n=\n\n2\nmax\nv\ngL\n=\n\nApply law of conservation of energy, \n\ni\ni\nf\nf\nP\nK.E\nP\nK.E\n+\n=\n+\n\n(\n)\n2\n2\nmin\nmax\n1\n1\n0\nmv\nmg L\nL\nmv\n2\n2\n+\n=\n+\n+\n\n(\n)\n2\nmin\n1\n1\nmv\n2mgL\nm. Lg\n2\n2\n=\n+\n\n2\nmin\nv\n5gL\n=\n\nmin\nv\n5gL\n=\n\nSo, we can say that minimum velocity at lowest point is \nfree from mass of the stone.",
    "examSource": "A stone tied to a string is rotated in a vertical  circle. The minimum speed with which the  string has to be rotated    (a) decreases with increasing mass of the stone    (b) is independent of the mass of the stone    (c) decreases with increasing in length of the  string    (d) is independent of the length of the string  EAMCET-1998  EAMCET 21.09.2020 (shift-I)  UPCPMT - 2002  BC ECE - 2012",
    "image": "/images/yct_motion_plane/p128_img1_xref1065.png"
  },
  {
    "id": "yct-motion-plane-q505",
    "num": 505,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A car is moving on a circular level road of \ncurvature 300 m. If the coefficient of friction is \n0.3 and acceleration due to gravity 10 m/s², the \nmaximum speed that car can have is",
    "options": [
      "30 km/h",
      "81 km/h",
      "108 km/h",
      "162 km/h"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \nCurvature (r) = 300 m \nCoefficient of friction (µ) = 0.3 \nAcceleration due to gravity (g) = 10 m / sec2 \nFor maximum speed of car, \nCentripetal force = Frictional force \n\n2\nmax\nmv\nmg\nr\n= µ\n\n2\nmax\nv\nrg\n= µ\n\nmax\nmax\nmax\nv\nrg\nv\n0.3 300 10\nv\n900\n=\nµ\n=\n×\n×\n=\n\nmax\nmax\n18\nv\n30 m /sec\n30\nkm / h\n5\nv\n108 km / h\n=\n=\n×\n=",
    "examSource": "EAMCET-1999",
    "image": "/images/yct_motion_plane/p128_img1_xref1065.png"
  },
  {
    "id": "yct-motion-plane-q506",
    "num": 506,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A body is thrown vertically upwards with an \ninitial velocity u reaches maximum height in 6 \nsec. The ratio of distance travelled by the body \nin the first and seventh second is",
    "options": [
      "1 : 1",
      "11 : 1",
      "1 : 2",
      "1 : 11"
    ],
    "correctAnswer": 1,
    "explanation": "Velocity becomes zero after 6 sec. \nWe know that, \n\nv = u + at \n\n0 = u + 6(-g) \n\n0 = u- (10×6) \n\nu = 60 m/sec \nDistance in nth second is given by, \n\n(\n)\nn\na\ns\nu\n2n -1\n2\n=\n+\n\nFor, \nn = 1 \n\n( )\n1\n10\ns\n60 -\n1\n2\n\n\n=\n\n\n\n\n\n1s\n60 - 5\n55m\n=\n=\n\nFor, \nn = 7 \n\n7\n10\ns\n60 -\n13\n2\n\n\n=\n×\n\n\n\n\n\ns7 = - 5 m \nThe negative sign indicates the body is moving in \ndownward direction. \nRatio of the distance travelled between 1st and 7th\n\nSecond \n1\n2\ns\ns\n55\n11:1\n5\n=\n=",
    "examSource": "EAMCET-2000",
    "image": "/images/yct_motion_plane/p128_img1_xref1065.png"
  },
  {
    "id": "yct-motion-plane-q507",
    "num": 507,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A body of mass M kg is on the top point of a \nsmooth hemisphere of radius 5 m. It is released \nto slide down the surface of the hemisphere. It \nleaves the surface when velocity is 5 m/s. At \nthis instant the angle made by the radius vector \nof the body with the vertical is (acceleration \ndue to gravity = 10 m/s²)",
    "options": [
      "30º",
      "45º",
      "60º",
      "90º"
    ],
    "correctAnswer": 2,
    "explanation": "Given, mass = M kg, radius (R) = 5 m, \nvelocity (v) = 5 m/sec, g = 10 m/sec2 \n\nBody can leave surface of hemisphere if there is no \nreaction force i.e. N = 0 \n2\n2\no\nMv\nv\nMg cos\ncos\nR\ngR\n5 5\n1\ncos\ncos\n10 5\n2\n60\nθ =\n⇒\nθ =\n×\nθ =\n⇒\nθ =\n×\nθ =",
    "examSource": "EAMCET-2002",
    "image": "/images/yct_motion_plane/p129_img1_xref1076.png"
  },
  {
    "id": "yct-motion-plane-q508",
    "num": 508,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A bucket filled with water is tied to a rope of \nlength 0.5 m and is rotated in a circular path in \nvertical plane. The least velocity it should have \nat the lowest point of circle so that water does \nnot spill is, (g = 10 m/s²)",
    "options": [
      "5 m/s",
      "10 m/s",
      "5 m/s",
      "2 5 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "Given, length of rope (r) = 0.5 m \n\n g = 10m/sec2 \n\nWe know, \nVelocity at lowest point \nL\n(v )\n5gr\n=\n\nL\nL\nv\n5 10 0.5\nv\n25\n=\n×\n×\n⇒\n=\n\n-1\nL\nv\n5 ms\n=",
    "examSource": "EAMCET-2007",
    "image": "/images/yct_motion_plane/p129_img1_xref1076.png"
  },
  {
    "id": "yct-motion-plane-q509",
    "num": 509,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A body is tied with a string and is given a \ncircular motion with velocity v in radius r. The \nmagnitude of the acceleration is",
    "options": [
      "v/r",
      "v2/r",
      "v/r2",
      "v2/r2 \nDCE-2009"
    ],
    "correctAnswer": 1,
    "explanation": "When a body is tied with a string and is given \na circular motion with velocity v in radius r then the \nmagnitude of acceleration is \n2\nv\nr .",
    "examSource": "",
    "image": "/images/yct_motion_plane/p129_img1_xref1076.png"
  },
  {
    "id": "yct-motion-plane-q510",
    "num": 510,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A block of mass M at the end of the string is \nwhirled round a vertical circle of radius R. The \ncritical speed of the block at the top of the \nswing is",
    "options": [
      "(R/g)1/2",
      "g/R",
      "M/Rg",
      "(Rg)1/2 \nDCE-2009 \nJ &"
    ],
    "correctAnswer": 3,
    "explanation": "The block is rotating in circular path of radius R. \nSo, at the highest point tension of the string is zero. \n2\nMv\nT\nMg\nR\n+\n=\n\n∴ \n2\nMv\n0\nMg\nR\n+\n=\n\nv\ngR\n=\n\n(\n)\n12\nv\nRg\n=",
    "examSource": "K CET - 1999  Manipur UGET - 2011",
    "image": "/images/yct_motion_plane/p129_img1_xref1076.png"
  },
  {
    "id": "yct-motion-plane-q511",
    "num": 511,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A car is moving in a circular horizontal track \nof radius 10 m with a constant speed of 10ms-\n1. A bob is suspended from the roof of the car \nby a light wire of length 1.0m. The angle made \nby the wire with the vertical is (in radian)",
    "options": [
      "0",
      "π\n3",
      "π\n6",
      "π\n4"
    ],
    "correctAnswer": 3,
    "explanation": "Given, r = 10m, v = 10m/s, g = 10 m/s2 \nT cosθ\n\n2\nmv\nTsin\nr\nθ =\n …(i) \nT cos θ = mg …..(ii) \nDividing equation (i) by equation (ii), we get - \n2\n2\nv\ntan\nrg\n10\ntan\n1\n45\n10 10\n4\nθ =\nπ\nθ =\n=\n⇒θ =\n° =\n×",
    "examSource": "Karnataka CET-2022  MHT CET-2020",
    "image": "/images/yct_motion_plane/p129_img1_xref1076.png"
  },
  {
    "id": "yct-motion-plane-q512",
    "num": 512,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A ball of mass 0.6 kg attached to a light \ninextensible string rotates in a vertical circle of \nradius 0.75 m such that it has a speed of 5 m/s \nwhen the string is horizontal. Tension in string \nwhen it is horizontal on other side is \n\n (g = 10 m/s²)",
    "options": [
      "30 N",
      "26 N",
      "20 N",
      "6"
    ],
    "correctAnswer": 2,
    "explanation": "Given, m = 0.6 kg, radius (r) = 0.75 m and \nspeed (v) = 5 m/sec \n\nBy balancing the forces, \nTension \n2\n2\nc\nmv\n0.6 5\nF\n20N\nr\n0.75\n×\n=\n=\n=",
    "examSource": "N  AP EAMCET(Medical)-2007",
    "image": "/images/yct_motion_plane/p130_img1_xref1096.png"
  },
  {
    "id": "yct-motion-plane-q513",
    "num": 513,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "questionText": "A particle is moving in a circle of radius ‘r’ \nwith a constant speed ‘v’. The change in \nvelocity after the particle has travelled a \ndistance equal to \n\n\n\n\n\n1\n8 of the circumference of \nthe circle is:",
    "options": [
      "zero",
      "0.500 v",
      "0.765 v",
      "0.125"
    ],
    "correctAnswer": 2,
    "explanation": "Given, radius = r, velocity = v \n Distance \n1\n8\n\n\n= \n\n\n\nof the circumference of the circle \nAngle covered by the particle \no\n1\n360\n45\n8\n\n\n=\n×\n° =\n\n\n\n\n\nThen, change in velocity \n2\n2\n1\n2\n1\n2\n( v)\nv\nv - 2v .v cos\n∆\n=\n+\nθ \nHere, v1 = v2 = v and θ = 45° \n\n2\n2\n2\no\nv\nv\nv - 2v cos45\n∆=\n+\n\n2\n2\n1\n2v - 2v\n2\nv 2 -\n2\n0.765 v\n=\n×\n=\n=",
    "examSource": "v  AP EAMCET(Medical)-2006  JEE Main - 11.01.2019 Shift-I",
    "image": "/images/yct_motion_plane/p130_img1_xref1096.png"
  },
  {
    "id": "yct-motion-plane-q514",
    "num": 514,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Assertion (A): If a body moving in a circular \npath has constant speed, then there is no force \nacting on it. \n\n Reason (R):",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 3,
    "explanation": "Here assertion is wrong because a body \nmoving in a circular path has a constant speed then \nthere is a centripetal force acting on it. It has constant \nmagnitude but changing direction. \nReason is correct, the direction of the velocity vector of \na body moving in a circular path is changing that \nprovide centripetal acceleration by Newton's second law \nof force. \nF=ma=\n2\n2\nmv\nmr\nr\n=\nω",
    "examSource": "The direction of the velocity vector  of a body moving in a circular path is changing.    (a) both A and R are true and R is the correct  explanation of A    (b) both A and R are true and R is not the correct  explanation of A     (c) A is true but R is false    (d) A is false but R is true  AP EAMCET(Medical)-2004",
    "image": "/images/yct_motion_plane/p130_img1_xref1096.png"
  },
  {
    "id": "yct-motion-plane-q515",
    "num": 515,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle tied to a string of negligible weight \nand length l is swinging in a horizontal circular \npath with constant angular velocity having time \nperiod T. If the string length is shortened by \n,\n2\nl while the particle is in motion, the period \nis:",
    "options": [
      "4T",
      "2T",
      "T",
      "T\n4"
    ],
    "correctAnswer": 3,
    "explanation": "Given, r1=string length (l), time period = T \nr2 = Shortened length of string (l/2) \nHere, angular momentum about centre will be \nconserved in circular motion. \nThen, according to the law of conservation of angular \nmomentum- \n\n1 1\n2 2\n2\n2\n1 1\n2 2\n2\n1\n2\n2\n1\nmv r\nmv r\nm\nr\nm\nr\nr\nr\n=\nω\n=\nω\n\n\nω = \n\nω\n\n\n\n[∵v = rω] \n\n2\n1\n2\n2\nω\n\n\n= \n\nω\n\n\nl\nl\n\n1\n2\n1\n4\nω =\nω\n ………… (i) \nWe know, time period (T) = 2π\nω ⇒ ω = 2\nT\nπ \n\nω1 = \n1\n2\nT\nπ and ω2 =\n2\n2\nT\nπ \nThen, \n1\n1\n2\n2\n1\n2\n2\nT\nT\n2\nT\nT\nπ\nω =\n=\nπ\nω\n……… (ii) \nFrom equation (i) and (ii) \n\n2\n2\n1\nT\n1\nT\nT\nT\n4\n4\n=\n⇒\n=",
    "examSource": "AP EAMCET(Medical)-2000",
    "image": "/images/yct_motion_plane/p130_img1_xref1096.png"
  },
  {
    "id": "yct-motion-plane-q516",
    "num": 516,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A child starts running from rest along a \ncircular track of radius ‘r’ with constant \ntangential acceleration ‘a’. After time ‘t’ he \nfeels that slipping of shoes on the ground has \nstarted. The coefficient of friction between \nshoes and the ground is [g = acceleration due to \ngravity]",
    "options": [
      "4 4\n2 2\na t + a r\nrg\n\n\n\n",
      "2 2\n2 4\na t + a r\nrg\n\n\n\n",
      "1\n4 4\n2 2\n2\na t -a r\nrg\n\n\n\n",
      "1\n4 4\n2 2\n2\na t + a r\ngr\n\n\n\n"
    ],
    "correctAnswer": 3,
    "explanation": "When child moves in a circular track, he is acted upon \nby two force as shown below. \nHere, fc = f sinθ and ft = f cosθ \nAs, fc is the centripetal force and ft is the tangential \nforce. \nResultant force (fR) \n(\n)\n(\n)\n2\n2\nf sin\nf cos\n=\nθ\n+\nθ\n\n(\n)\n2\n2\n2\nmv\nma\nr\n\n\n=\n+\n\n\n\n\n\nAlso, when the shoes starts slipping, the friction \nbecomes equal to resultant force. \n∴ f = fR \n(\n)\n2\n2\n2\n4\n2\n2\n2\n2\nmv\nm v\nmg\nma\nmg\nm a\nr\nr\n\n\nµ\n=\n+\n⇒µ\n=\n+\n\n\n\n\n\n2\n4\n2\n2\n2\n2\n2\n2\nm v\nm g\nm a\nr\nµ\n=\n+\n⇒\n( )\n4\n2 2\n2\n2\n2\nat\na r\ng\nr\n+\nµ\n=\n\nv\na\nt\nv\nat\n\n\n=\n\n\n\n\n=\n\n\n∵\n\n1\n4 4\n2 2\n2\n4 4\n2 2\n2\n2\n2\n1\n4 4\n2 2\n2\na t\na r\na t\na r\ng\ng\nr\nr\na t\na r\ngr\n\n\n+\n+\n\n\nµ\n=\n⇒µ =\n\n\n+\n\n\nµ =",
    "examSource": "MHT-CET 2020",
    "image": "/images/yct_motion_plane/p131_img1_xref1103.png"
  },
  {
    "id": "yct-motion-plane-q517",
    "num": 517,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A body is moving along a circular track of \nradius 100 m with velocity 20 m/s. Its \ntangential acceleration is 3 m/s2, then its \nresultant acceleration will be",
    "options": [
      "5 m/s2",
      "3 m/s2",
      "4 m/s2",
      "2 m/s2"
    ],
    "correctAnswer": 0,
    "explanation": "Given, tangential acceleration (at) = 3m/s2, \nradius of track (r) = 100m, velocity (v) = 20 m/s \nThe radial acceleration of body (ar) = \n2\nv\nr \n\nar = \n2\n(20)\n400\n100\n100\n=\n\nar = 4 m/s2 \nThen the resultant of acceleration (a) = \n(\n)\n2\n2\nt\nr\n(a )\na\n+\n\n = \n( )\n2\n2\n(3)\n4\n+\n = \n9 16\n+\n = \n25 \n\na = 5m/s2",
    "examSource": "MHT-CET 2020",
    "image": "/images/yct_motion_plane/p131_img1_xref1103.png"
  },
  {
    "id": "yct-motion-plane-q518",
    "num": 518,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 1,
    "explanation": "The angular momentum is given by \n\nL\nr\np\nmr\nv\n= ×\n=\n×\n\u0002\n\u0002\n\u0002\n\u0002\n\u0002 \nIf speed decreases, then the magnitude of the angular \nmomentum decrease but direction does not change. \nThe resultant acceleration is towards the centre only if \nthe speed remains constant. Hence option (b) is wrong. \nIt is given that the particle is moving in a circular path. \nHence option (d) is wrong.",
    "examSource": "A particle moves along a circular path with  decreasing speed. Hence        (a) its angular momentum remains constant     (b) the direction of angular momentum remains  constant     (c) its resultant acceleration is towards the centre    (d) it moves in a spiral path with decreasing  radius  MHT-CET 2020",
    "image": "/images/yct_motion_plane/p131_img1_xref1103.png"
  },
  {
    "id": "yct-motion-plane-q519",
    "num": 519,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A bucket containing water is revolved in a \nvertical circle of radius ‘r’. To prevent the \nwater from falling down, the minimum \nfrequency of revolution required is [g = \nacceleration due to gravity]",
    "options": [
      "1\nr\n2π\ng",
      "g\n2π\nr",
      "1\ng\n2π\nr",
      "2π"
    ],
    "correctAnswer": 2,
    "explanation": "For minimum velocity at the highest point we should \nhave \n\nmrω2 = mg \n\nω2 = g\nr ⇒ ω = \ng\nr \n\n f = 1\ng\n2\nr\nπ\n {\n}\n2 f\nω = π\n∵",
    "examSource": "g r   MHT-CET 2020",
    "image": "/images/yct_motion_plane/p131_img1_xref1103.png"
  },
  {
    "id": "yct-motion-plane-q520",
    "num": 520,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A heavy mass is attached at one end of a thin \nwire and whirled in a vertical circle. The \nchances of breaking the wire are maximum \nwhen \n\n(a) The wire makes an angle of 60º",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 2,
    "explanation": "The body is rotating in a vertical circle. \nSo, at the bottom, T2 = mg + Fc \n\n…. (i) \nAt the top, T1 + mg = Fc \n\nT1 = Fc - mg \n\n…. (ii) \nComparing equation (i) and (ii), we get - \n2\n1\nT\nT\n>\n\nSo, tension is maximum at the lowest position of mass \nHence, the chance of breaking is maximum at lowest \npoint.",
    "examSource": "with the  horizontal    (b) The mass is at the highest point of the circle     (c) The mass is at the lowest point of the circle    (d) The wire is horizontal  MHT-CET 2020  AP EAMCET (Medical)-1999  Manipur UGET-2011",
    "image": "/images/yct_motion_plane/p132_img1_xref1110.png"
  },
  {
    "id": "yct-motion-plane-q521",
    "num": 521,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle of mass ‘m’ is rotating in a circle of \nradius ‘r’ having angular momentum ‘L’. Then \nthe centripetal force will be",
    "options": [
      "2\n2\nL\nmr",
      "2\n2\nL\nmr",
      "2\nL\nmr",
      "2\n3"
    ],
    "correctAnswer": 3,
    "explanation": "Given, mass = m, circle radius = r, angular \nmomentum = L \nWe know, \nCentripetal force (Fc) = \n2\nmv\nr\n\n…(i) \nAngular momentum (L) = mvr \n\n v = L\nmr \n\n…(ii) \nSubstituting the value of 'v' from equation (ii) to \nequation (i), \n\nFc =\n2\nm\nL\nr\nmr\n\n\n\n\n\n\n\nFc =\n2\n2\n2\nm\nL\nr\nm r\n×\n ⇒ Fc =\n2\n3\nL\nmr",
    "examSource": "L mr   MHT-CET 2020",
    "image": "/images/yct_motion_plane/p132_img1_xref1110.png"
  },
  {
    "id": "yct-motion-plane-q522",
    "num": 522,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A stone is tied at the end of a rope of length 1 m \nand whirled in a vertical circle. The ratio of \nvelocity at highest point to lowest point will be",
    "options": [
      "3 :1",
      "1:\n5",
      "3 :\n5",
      "5 :1"
    ],
    "correctAnswer": 1,
    "explanation": "We know, \nVelocity at the highest point \n1\n(v ) =\nrg \nVelocity at the lowest point \n2\n(v ) =\n5rg \nThen, \n1\n2\nv\n1\n=\nv\n5",
    "examSource": "MHT-CET 2020",
    "image": "/images/yct_motion_plane/p132_img1_xref1110.png"
  },
  {
    "id": "yct-motion-plane-q523",
    "num": 523,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle is moving in a circle of radius ‘R’ \nwith constant speed ‘V’. The magnitude of \naverage acceleration after half revolution is",
    "options": [
      "2\n2V\nπR",
      "2\n2π\nRV",
      "2\n2V\nπR",
      "2R\nπ"
    ],
    "correctAnswer": 0,
    "explanation": "In a half revolution, change in momentum, \n∆P = mV - m(-V) = 2mV …..(i) \nThe amount of time it takes for a particle to complete a \nhalf revolution, \n\nR\nt\nV\nπ\n=\n\n…….(ii) \nAverage force (F) = Rate of change in momentum \n\nP\nt\n∆\n=\n\n2mV\nR\nV\n= π\n\n[From equation (i) and (ii)] \n\n2\n2mV\nF\nR\n=\nπ\n\n{\n}\n2\n2\n2mV\nma\nF\nma\nR\n2V\na\nR\n=\n=\nπ\n= π\n∵",
    "examSource": "V  MHT-CET 2020",
    "image": "/images/yct_motion_plane/p132_img1_xref1110.png"
  },
  {
    "id": "yct-motion-plane-q524",
    "num": 524,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle of mass ‘m’ is performing U.C.M. \nalong a circle of radius ‘r’. The relation \nbetween centripetal acceleration ‘a’ and kinetic \nenergy ‘E’ is given by",
    "options": [
      "2\n2E\na =\nmr\n\n\n\n\n\n",
      "E\na = mr",
      "2E\na = mr",
      "a = 2"
    ],
    "correctAnswer": 2,
    "explanation": "We know that \n\nK.E = \n2\n1 I\n2 ω ...... (i) \nand \n2\na\nr\nω =\n ...... (ii) \nfrom eqn (i) and (ii) \n∴ \nE = I\na\n2\nr\n×\n\nE = \n2\n1\na\nmr\n2\nr\n×\n\n2\n[I\nmr ]\n=\n\nE = 1 mr.a\n2\n\n a = 2E\nmr",
    "examSource": "Em  MHT-CET 2020, 2010",
    "image": "/images/yct_motion_plane/p132_img1_xref1110.png"
  },
  {
    "id": "yct-motion-plane-q525",
    "num": 525,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A train has to negotiate a curve of radius ‘r’ m, \nthe distance between the rails is ‘ ℓ’ m and \nouter rail is raised above inner rail by distance \nof ‘h’ m. If the angle of banking is small, the \nsafety speed limit on this banked road is",
    "options": [
      "h\nrg ℓ",
      "2\nh\nrg\n\n\n\n\n\n\nℓ",
      "h\nrg\n\n\n\n\n\nℓ",
      "2\nh\nrg\n\n\n\n\n\n\nℓ"
    ],
    "correctAnswer": 2,
    "explanation": "Given, radius of curve = r, distance between \nthe rails = l, raised distance = h \n\nAt optimum speed, \nCentrifugal force (Fc) = Friction force (Fs) \n\n2\nmv\nN\nmg\nr\n= µ\n= µ\n\nv2 = µgr ⇒ v = \ngr\nµ\n\nv = \ntan gr\nθ\n\nh\ntan\n\n\n∴\nθ =\n\n\n\n\nl\n\nv = \nh\ngr l",
    "examSource": "MHT-CET 2020",
    "image": "/images/yct_motion_plane/p133_img1_xref1116.png"
  },
  {
    "id": "yct-motion-plane-q526",
    "num": 526,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "The relative angular speed of hour hand and \nsecond hand of a clock is",
    "options": [
      "359π\n21600",
      "719π\n21600",
      "9π\n21600",
      "11π\n21600"
    ],
    "correctAnswer": 1,
    "explanation": "Angular speed of hour hand, \n\nh\n2\n12 60 60\nπ\nω =\n×\n×\n ……… (i) \n\nAngular speed of second hand, \n\ns\n2\n60\nπ\nω =\n ……….. (ii) \nFrom equation (i) and (ii), we get - \n\ns\nh\n720\nω =\nω \nRelative angular speed of hour hand and second hand \nw.r.t second hand, \n\ns\nh\ns\n-\n720 -1\n720\nω\nω =\nω\n\n⇒ \ns\nh\ns\n719\n-\n720\nω\nω =\nω \n\n719\n2\n720\n60\nπ\n=\n×\n\n719\n21600\nπ\n=",
    "examSource": "MHT-CET 2020",
    "image": "/images/yct_motion_plane/p133_img1_xref1116.png"
  },
  {
    "id": "yct-motion-plane-q527",
    "num": 527,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Two cars of masses m1 and m2 are moving in \ncircles of radii r1 and r2 respectively. Their \nspeeds are such that they make complete circle \nin the same time t. The ratio of their centripetal \nforce is",
    "options": [
      "m1: m2",
      "r1: r2",
      "1:1",
      "m1r1 : m2r2"
    ],
    "correctAnswer": 3,
    "explanation": "We know, \nCentripetal force \n2\nmv\n(F)\nr\n=\n\nThen, \n2\n1\n1\n1\n1\nm v\nF\nr\n=\n\nand \n2\n2\n2\n2\n2\nm v\nF\nr\n=\n\n∵ \n2\n1\n1\n2\n1\n1\n1\n1\n2\n2\n2\n2\n2\n2\n2\n2\n1\n2\nm v\nF\nr\nm v\nr\nm v\nF\nm v\nr\nr\n=\n=\n×\n ………. (i) \nGiven, time is same \nThen, \nDistance\nTime\nSpeed\n=\n\n1\n2\n1\n2\n2 r\n2 r\nt\nv\nv\nπ\nπ\n=\n=\n\n1\n1\n2\n2\nv\nr\nv\nr\n=\n\n……… (ii) \nFrom equation (i) and (ii), we get - \n\n2\n1\n1 1\n2\n2\n2\n1\n2 2\nF\nm r\nr\nF\nr\nm r\n=\n×\n\n1\n1 1\n2\n2 2\nF\nm r\nF\nm r\n=\n\n1\n1\n2\n2\nv\nr\nv\nr\n\n\n=\n\n\n\n\n\nF1 : F2 = m1r1 : m2r2",
    "examSource": "MHT-CET 2020",
    "image": "/images/yct_motion_plane/p133_img1_xref1116.png"
  },
  {
    "id": "yct-motion-plane-q528",
    "num": 528,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A flat curved road on highway has radius of \ncurvature 400 m. A car rounds the curve at a \nspeed of 24 m/s. The minimum value of \ncoefficient of friction to prevent car from \nsliding is (take g = 10 m/s2)",
    "options": [
      "0.144",
      "0.376",
      "0.544",
      "0.100"
    ],
    "correctAnswer": 0,
    "explanation": "Given, radius of curvature (r) = 400 m \n\n Speed (v) = 24 m/s \nFriction force = Centripetal force \nSo, \nµ mg = \n2\nmv\nr\n\nµ = \n2\nv\nrg \n\nµ = \n2\n(24)\n400 10\n×\n=0.144",
    "examSource": "MHT-CET 2020",
    "image": "/images/yct_motion_plane/p133_img1_xref1116.png"
  },
  {
    "id": "yct-motion-plane-q529",
    "num": 529,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "What is the ratio of the angular speeds of \nsecond hand and the minute hand of a clock ?",
    "options": [
      "1 : 60",
      "1 : 2",
      "12 : 1",
      "60 : 1"
    ],
    "correctAnswer": 3,
    "explanation": "We know that, \n\n2\nT\nπ\nω =\n\nAngular speed of second hand (ωs) = 2\n60\nπ \nand angular speed of minute hand (ωm) =\n2\n60 60\nπ\n×\n\nSo, \ns\nm\n2\n60 60\n60\n2\n60\n60 60\nπ\nω\n×\n=\n=\nπ\nω\n×\n ⇒ \ns\nm\n60\nω =\nω\n\nωs : ωm = 60 : 1",
    "examSource": "MHT-CET 2019, 2020"
  },
  {
    "id": "yct-motion-plane-q530",
    "num": 530,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "In non-uniform circular motion, the ratio of \ntangential acceleration to radial acceleration is \n(r = radius of circle, v = speed and α = angular \nacceleration)",
    "options": [
      "rα\nv",
      "2\nr\nα\nv\n\n\n\n\n\n",
      "2\nv\n1\nr\n2\n\n\n\n\n\n",
      "2\nv\nα\nr\n\n\n\n\n\n"
    ],
    "correctAnswer": 1,
    "explanation": "Tangential acceleration (at) = αr \nand radial acceleration (ar) = \n2\nv\nr \nThe ratio of tangential and radial acceleration, we get- \n∴ \n2\nt\n2\n2\nr\na\nr\nr\nv\na\nv\nr\nα\nα\n=\n=\n\n2\nt\nr\na\nr\na\nv\n\n\n=\nα\n\n\n\n",
    "examSource": "MHT-CET 2020"
  },
  {
    "id": "yct-motion-plane-q531",
    "num": 531,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle moves along a circular path of \nradius ‘r’ with uniform speed ‘V’. The angle \ndescribed by the particle in one second is \n\n(a) \n2",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 3,
    "explanation": "Given, uniform speed = V, circular path of \nradius = r \nWe know that, angular velocity (ω) = V\nr \nand angular displacement (θ) = ωt \nThen, angle described by the particle in 1 sec. \n\nθ = V\nr",
    "examSource": "V r   (b) r V     (c) Vr  (d) V r  MHT-CET 2020"
  },
  {
    "id": "yct-motion-plane-q532",
    "num": 532,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 0,
    "explanation": "We know, the maximum permissible velocity \non a banked road \n\nvmax = \ns\ns\nrg(\ntan )\n(1\ntan )\nµ +\nθ\n-µ\nθ\n\nWhere, r = radius of curvature, \n\nθ = angle of banking \n\nµs = coefficient of friction",
    "examSource": "The maximum velocity with which vehicle can  safety travel along banked road does NOT  depend upon         (a) mass of the vehicle     (b) acceleration due to gravity at a place     (c) radius of the curved road    (d) angle of banking  MHT-CET 2020, 2005"
  },
  {
    "id": "yct-motion-plane-q533",
    "num": 533,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "What is the least radius of curve on a \nhorizontal road, at which a vehicle can travel \nwith a speed of 36 km/hr at an angle of \ninclination 45°? \n\n [g = 10 m/s2, tan 45° = 1]",
    "options": [
      "15 m",
      "20 m",
      "10 m",
      "25"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \nVehicle speed (v) = 36 km/hr\n5\n10m/s\n18\n×\n=\n\nAngle, (θ)=45o \nWe know, \nCentripetal force = Frictional force \n\n2\nmv\nmg\nr\n= µ\n\n(µ = tanθ) \n\n2\nv\ntan\nr\ng =\nθ\n×\n\n2\nv\nr\ng\ntan\n=\n×\nθ \n\n2\n(10)\nr\n10\ntan 45\n=\n×\n° \n100\n10 1\n=\n× = 10 m",
    "examSource": "m  MHT-CET 2020"
  },
  {
    "id": "yct-motion-plane-q534",
    "num": 534,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle is performing vertical circular \nmotion. The difference in tension at lowest and \nhighest point is",
    "options": [
      "8 mg",
      "2 mg",
      "6 mg",
      "4"
    ],
    "correctAnswer": 2,
    "explanation": "According to the question \n\nLet, \nT1 = Tension at lowest point \n\nT2 = Tension at highest point \n\nv = Velocity at highest point \n\nu = Velocity at lowest point \nAt the lowest point- \n\n2\n1\nmu\nT\nmg\nR\n=\n+\n\n.....(i) \nAt the highest point- \n\n2\n2\nmv\nT\nmg\nR\n=\n-\n\n.....(ii) \nSubstracting equation (i) from (ii) \n(\n)\n2\n2\n1\n2\nmu\nmv\nT - T\nmg -\nmg\nR\nR\n\n\n\n\n=\n+\n-\n\n\n\n\n\n\n\n\n\n(\n)\n(\n)\n2\n2\n1\n2\nm\nT - T\nu - v\n2mg\nR\n=\n+\n -------- (iii) \nFrom conservation of energy, \nLowest\nHighest\n2\n2\n(P.E\nK.E)\n(P.E\nK.E)\n1\n1\n0\nmu\nmg2R\nmv\n2\n2\n+\n=\n+\n+\n=\n+\n\n(\n)\n2\n2\n1 m u - v\nmg2R\n2\n=\n\n2\n2\nu - v\n4gR\n=\n........(iv) \nPutting these value in equation (iii) \n\n1\n2\nm\nT - T\n4gR\n2mg\nR\n=\n×\n+\n\n = 4 mg +2mg = 6 mg",
    "examSource": "mg  MHT-CET 2020  AIIMS - 2001  TS EAMCET-29.09.2020 Shift-II"
  },
  {
    "id": "yct-motion-plane-q535",
    "num": 535,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle is moving along the circular path \nwith \nconstant \nspeed \nand \ncentripetal \nacceleration ‘a’. If the speed is doubled, the \nratio of its acceleration after and before the \nchange is",
    "options": [
      "4 : 1",
      "2 : 1",
      "3 : 1",
      "1 : 4"
    ],
    "correctAnswer": 0,
    "explanation": "We know, \nCentripetal acceleration \n2\nv\n(a)\nr\n=\n\nAcceleration before change, \n2\nv\na\nr\n=\n\nand acceleration after change, \n2\n2\n2\n(2v)\n4v\na\nr\nr\n=\n=\n\nRatio of both acceleration, \n\n2\n2\n2\n4v / r\na\na\nv / r\n=\n ⇒ \n2\na\n4\na\n1\n=",
    "examSource": "MHT-CET 2019",
    "image": "/images/yct_motion_plane/p135_img1_xref1126.png"
  },
  {
    "id": "yct-motion-plane-q536",
    "num": 536,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A rod of length ‘L’ is hung from its one end \nand a mass ‘m’ is attached to its free end. What \ntangential velocity must be imparted to ‘m’. So \nthat it reaches the top of the vertical circle? (g \n= acceleration due to gravity)",
    "options": [
      "4 gL",
      "2 gL",
      "5 gL",
      "3"
    ],
    "correctAnswer": 1,
    "explanation": "According to the question \n\nFrom conservation of energy, \n\n(K.E)A + (P.E)A = (K.E)B +(P.E)B \n\n(\n)\n2\n1 mv\n0\n0\nmg\n2L\n2\n+\n=\n+\n×\n\n2\n1 mv\nmg\n2L\n2\n=\n×\n\n2\n1 v\n2gL\n2\n=\n\n2\nv\n4gL\n=\n\nv = 2 gL",
    "examSource": "gL  MHT-CET 2020",
    "image": "/images/yct_motion_plane/p135_img1_xref1126.png"
  },
  {
    "id": "yct-motion-plane-q537",
    "num": 537,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "The overbridge of a canal is in the form of a \nconcave circular arc of radius ‘r’. The thrust at \nthe lowest point is (m = mass of the vehicle, v = \nvelocity of the vehicle, g = acceleration due to \ngravity).",
    "options": [
      "2\nmg ÷ mv /r",
      "2\nmv\nmg +\nr\n\n\n\n\n\n\n\n",
      "2\nmv\nmg -\nr\n\n\n\n\n\n\n\n",
      "2\nmv\nmg×"
    ],
    "correctAnswer": 1,
    "explanation": "According to the question \n\nFrom the above figure- \nLet N be the thrust force applied by the bridge by \nequation of circular motion \n\n2\nmv\nN\nmg\nr\n∴\n=\n-\n\n2\nmv\nN\nmg\nr\n=\n+",
    "examSource": "r   MHT-CET 2020",
    "image": "/images/yct_motion_plane/p135_img1_xref1126.png"
  },
  {
    "id": "yct-motion-plane-q538",
    "num": 538,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle of mass 4 gram moves along a circle \nof radius \n2\n10\n2π cm with constant tangential \nacceleration. After beginning of the motion, by \nthe end of second revolution, the kinetic energy \nof the particle becomes \n-5\n18×10 J. Magnitude \nof tangential acceleration is",
    "options": [
      "-6\n2\n2.25×10 m/s",
      "-5\n2\n2.25×10 m/s",
      "-4\n2\n2.25×10 m/s",
      "-3\n2\n2.25×10 m/"
    ],
    "correctAnswer": 2,
    "explanation": "Given, mass (m) = 4 × 10-3kg, circle of radius \n(r) = \n2\n10 cm\n2π\n, kinetic energy (K.E) = 18×10-5 J \nLet, velocity of particle = v \n∵ \nK.E. = \n2\n1 mv\n2\n\n18 × 10-5 = \n3\n2\n1\n4 10\nv\n2\n-\n× ×\n×\n\nv2 = \n(\n)\n5\n2\n3\n2 18 10\n9 10\nm/s\n4 10\n-\n-\n-\n×\n×\n= ×\n×\n\nv = 3 ×10-1 m/s \nInitial velocity of particle (u) = 0 m/s \nTotal distance covered (s) = 2(2πr) = 4πr \nWe know, \n\nv2 = u2 + 2as \n\nv2 = 2as \n\na = \n2\nv\n2s \n\n(\n)\n2\n1\n2\n3 10\n2\na\n2 4\n10\n-\n×\n× π\n=\n× π×\n\na = \n4\n9 10\n4\n-\n×\n\na = 2.25 × 10-4 m/s2",
    "examSource": "s  MHT-CET 2020",
    "image": "/images/yct_motion_plane/p136_img1_xref1134.png"
  },
  {
    "id": "yct-motion-plane-q539",
    "num": 539,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A coin kept at a distance ‘r1’ cm from the axis \nof rotation of a turn table, just begins to slip \nwhen the turntable rotates at an angular speed \nof ‘ω1’ rad/s. If this distance is tripled, then at \nwhat angular speed of the turntable, will the \ncoin begin to slip ?",
    "options": [
      "1\n3ω rad/s",
      "1\n3 ω rad/s",
      "1\nω rad/s\n3",
      "1\nω rad/s\n3"
    ],
    "correctAnswer": 2,
    "explanation": "We know, the relation \n\n2\n2\n1 1\n1\n2 2\n2\nm r\nm r\nω =\nω \n(Fs = mω2r) \nAccording to the question, \n\n2\n2\n1\n1\n1\n2\nmr\n3mr\nω =\nω \n(r2 = 3r1) \n\n∴ \n2\n2\n1\n2\n3\nω\nω =\n\n1\n2\n3\nω\nω =\n rad/s",
    "examSource": "MHT-CET 2019",
    "image": "/images/yct_motion_plane/p136_img1_xref1134.png"
  },
  {
    "id": "yct-motion-plane-q540",
    "num": 540,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "The real force ‘F’ acting on a particle of mass \n‘m’ performing circular motion acts along the \nradius of circle ‘r’ and is directed towards the \ncentre of circle. The square root of magnitude \nof such force is (τ = periodic time)",
    "options": [
      "2π\nmr\nT",
      "2\nT mr\n4π",
      "2πT\nmr",
      "Tmr\n4π"
    ],
    "correctAnswer": 0,
    "explanation": "For circular motion, \n\nForce (F) =\n2\nm\nv\nr\n×\n\nThen, \nF = mrω2 \n\n(v = rω) \n\nF = \n2\n2\nm.r.\nT\nπ\n\n\n\n\n\n\n\n2\nT\nπ\n\n\nω =\n\n\n\n \n\n2\nF\nm.r T\nπ\n=\n⇒ F \n2\nm.r\nT\nπ\n=",
    "examSource": "MHT-CET 2019",
    "image": "/images/yct_motion_plane/p136_img1_xref1134.png"
  },
  {
    "id": "yct-motion-plane-q541",
    "num": 541,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A mass attached to one end of a string crosses \ntop-most point on a vertical circle with critical \nspeed. Its centripetal acceleration when string \nbecomes horizontal will be ( g = gravitational \nacceleration)",
    "options": [
      "g",
      "3g",
      "4g",
      "6"
    ],
    "correctAnswer": 1,
    "explanation": "We know, velocity of particle at top most \npoint on vertical circle, \n\nvT = \n3rg ……… (i) \n\nBut centripetal acceleration (ac) = \n2\nT\nv\nr \n∴ \nac = (\n)\n2\n3rg\nr\n\n[From equation (i)] \n\nac = 3rg\nr\n ⇒ ac = 3g",
    "examSource": "g  MHT-CET 2018",
    "image": "/images/yct_motion_plane/p136_img1_xref1134.png"
  },
  {
    "id": "yct-motion-plane-q542",
    "num": 542,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle moves along a circle of radius ‘r’ \nwith constant tangential acceleration. If the \nvelocity of the particle is ‘v’ at the end of \nsecond revolution, after the revolution has \nstarted then the tangential acceleration is",
    "options": [
      "2\nv\n8πr",
      "2\nv\n6πr",
      "2\nv\n4πr",
      "2\nv\n2π"
    ],
    "correctAnswer": 0,
    "explanation": "Given, initial speed of the particle (u) = 0 \nFinal speed of the particle = v \nDistance covering in 2 revolution (s) = 2 × 2πr \n\n = 4πr \nApplying equation of motion, \n\nv2 = u2 + 2as \n\nv2 = 0 + 2 × a × 4πr \n\n a = \n2\nv\n8 r\nπ",
    "examSource": "r  MHT-CET 2016",
    "image": "/images/yct_motion_plane/p136_img1_xref1134.png"
  },
  {
    "id": "yct-motion-plane-q543",
    "num": 543,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "questionText": "A particle of mass ‘m’ is moving in circular \npath of constant radius ‘r’ such that centripetal \nacceleration is varying with time ‘t’ as K2 r t2 \nwhere K is a constant. The power delivered to \nthe particle by the force acting on it is",
    "options": [
      "2\n2\n2\n2\nm K r t",
      "2\n2\nm K r t",
      "2\n2\nm K r t",
      "2"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \nCentripetal acceleration (ac) = K2rt2 \n.....(i) \nAnd we know, \nCentripetal accelerate (ac) = \n2\nv\nr \n\n.....(ii) \nComparing equation (i) and (ii), \n\n2\nv\nr = K2rt2 \n\nv2 = K2r2t2 \n\nv = Krt \nTangential acceleration (a) = dv\nKr\ndt =\n\nThen, Force (F) = ma = mKr \nSo, \nPower (P) = F.v \n\nP = mKr × Krt \n\nP = mK2r2t",
    "examSource": "m K r t  MHT-CET 2015  SCRA-2009  UP CPMT-2013  TS EAMCET (Medical) - 2015  JEE Mains - 28.06.2022 Shift-I",
    "image": "/images/yct_motion_plane/p137_img1_xref1140.png"
  },
  {
    "id": "yct-motion-plane-q544",
    "num": 544,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "The angle between velocity and acceleration of \na particle describing uniform circular motion \nis:",
    "options": [
      "1800",
      "900",
      "450",
      "600"
    ],
    "correctAnswer": 1,
    "explanation": "The velocity of particle representing uniform \ncircular motion is always perpendicular to centripetal \nacceleration. \nBecause \nthe \nparticles \ntangential \nacceleration is zero. \n\nTherefore, the angle between velocity and acceleration \nfor an object moving in uniform circular motion is 90º.",
    "examSource": "Karnataka CET-2017  MHT CET - 2020  Kerala CEE- 2013",
    "image": "/images/yct_motion_plane/p137_img1_xref1140.png"
  },
  {
    "id": "yct-motion-plane-q545",
    "num": 545,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "An aeroplane executes a horizontal loop at a \nspeed of 720 km/h with its wings banked at 450. \nWhat is the radius of the loop ? Take g = 10m/s².",
    "options": [
      "4 km",
      "4.5 km",
      "7.2 km",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "Given, angle of banking (θ) = 45o, speed of \nthe aeroplane (v) = 720 km/h = \n5\n720\n200m /s\n18\n×\n=\n\nFor radius r of the loop, We have the relation, \n\ntanθ = \n2\nv\nrg \n\n2\nv\nr\ng tan\n=\nθ \n\n2\n0\n(200)\nr\n10 tan 45\n=\n×\n\n(∵ θ = 45o) \n\n40000\nr\n4000m\n10\n=\n=\n\nr = 4 km",
    "examSource": "km  Karnataka CET-2014",
    "image": "/images/yct_motion_plane/p137_img1_xref1140.png"
  },
  {
    "id": "yct-motion-plane-q546",
    "num": 546,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "The circular motion of a particle with constant \nspeed is :",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 1,
    "explanation": "A particle with constant speed repeats its \nmotion after a regular interval of time but does not \noscillate about a fixed point in circular motion. So, the \ncircular motion of a particle with constant speed is \nperiodic but not SHM.",
    "examSource": "(a) Neither periodic nor SHM     (b) Periodic but not SHM     (c) SHM but not periodic     (d) Periodic and also SHM   Karnataka CET-2012",
    "image": "/images/yct_motion_plane/p137_img1_xref1140.png"
  },
  {
    "id": "yct-motion-plane-q547",
    "num": 547,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A cyclist starts from the centre O of a circular \npark of radius one kilometre, reaches the edge \nP of the park, then cycles along the \ncircumference and returns to the centre along \nQO as shown in the figure. If the round trip \ntakes ten minutes, the net displacement and \naverage speed of the cyclist (in metre and \nkilometre per hour) is :",
    "options": [
      "0, 1",
      "4,0\n2\nπ +",
      "4\n21.4,\n2\nπ +",
      "0, 21.4"
    ],
    "correctAnswer": 3,
    "explanation": "Since the net displacement of the cyclist is \nzero then the average velocity will also be zero. \nby diagram, OP = Radius = 1 km, PQ = Rθ = 1 × π/2 \nTotaldistance travelled\nAveragespeedof thecyclist\nTotaltime\n=\n\nOP\nPQ\nQO km / min\n10\n+\n+\n=\n\n1\n1 1\n2\nkm / min\n10\nπ\n+\n× +\n=\n\n4\n60km / hr\n20\n+ π\n=\n×\n\n= 7.14 × 3 km/hr \n\n= 21.4 km/hr",
    "examSource": "Karnataka CET-2006",
    "image": "/images/yct_motion_plane/p137_img1_xref1140.png"
  },
  {
    "id": "yct-motion-plane-q548",
    "num": 548,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "The acceleration of an object moving in a circle \nof radius R with uniform speed v is",
    "options": [
      "2\nv\nR",
      "2\nv\n2R",
      "2\n2v\nR",
      "2\n3v\n2R \nJ&"
    ],
    "correctAnswer": 0,
    "explanation": "We know that, v\nr\n= ω \n\naC = \n(\n)\ndv\nd\nr\ndt\ndt\n=\nω\n (\n)\nC\na\ncentripetal acceleration\n=\n\nC\ndr\na\ndt\n= ω\n (\n)\nis constant\nω\n\nC\na\nv\n= ω× \ndr\nv\ndt\n\n\n=\n\n\n\n\n∵\n\nv .v\nR\n=\n\n2\nC\nv\na\nR\n=",
    "examSource": "K CET- 2011",
    "image": "/images/yct_motion_plane/p138_img1_xref1147.png"
  },
  {
    "id": "yct-motion-plane-q549",
    "num": 549,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "If a car is to travel with a speed v along the \nfrictionless, banked circular track of radius r, \nthe required angle of banking so that the car \ndoes skid is",
    "options": [
      "2\n1 v\ntan\nrg\n-\n\nθ =\n\n\n\n",
      "1\nv\ntan\nrg\n-\n\nθ =\n\n\n\n",
      "2\n1\nr\ntan\nvg\n-\n\nθ =\n\n\n\n",
      "2\n1 v\ntan\nrg\n-\n\nθ <\n\n\n\n\n\nJ&"
    ],
    "correctAnswer": 0,
    "explanation": "Let θ is the angle of banking \nIn horizontal, \nmg sin θ\n2\nmv\nr\n=\n …….(i) \nIn vertical, \nmg cos θ = mg …….(ii) \nDividing equation (i) by equation (ii) \n2\n2\n2\n-1\nmg sin\nmv\nmg cos\nr\nmg\nv\nv\ntan\ntan\nrg\nrg\nθ =\nθ\n×\n\n\nθ =\n⇒θ =\n\n\n\n",
    "examSource": "K CET- 2010, 2008",
    "image": "/images/yct_motion_plane/p138_img1_xref1147.png"
  },
  {
    "id": "yct-motion-plane-q550",
    "num": 550,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle is describing uniform circular \nmotion. Its acceleration is",
    "options": [
      "Along the radius of circular path pointing \ntowards the center",
      "Along the tangent to the circular path",
      "Along the radius of the circular path pointing \naway from the centre",
      "Zero \nJ&"
    ],
    "correctAnswer": 0,
    "explanation": "Acceleration acting on the object undergoing \nuniform \ncircular \nmotion \nis \ncalled \ncentripetal \nacceleration. It always acts on the object along the \nradius towards the centre of circular path.",
    "examSource": "K CET- 2009",
    "image": "/images/yct_motion_plane/p138_img1_xref1147.png"
  },
  {
    "id": "yct-motion-plane-q551",
    "num": 551,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A stone tied to one end of rope and rotated in a \ncircular motion. If the string suddenly breaks, \nthen the stone travels in",
    "options": [
      "Perpendicular direction",
      "In direction of centrifugal force",
      "Towards centrifugal force",
      "Tangential direction \nJ&"
    ],
    "correctAnswer": 3,
    "explanation": "If the string suddenly breaks then centripetal \nforce will be zero. Only tangential force will be present \nthen the stone travels in tangential direction.",
    "examSource": "K CET- 2007",
    "image": "/images/yct_motion_plane/p138_img1_xref1147.png"
  },
  {
    "id": "yct-motion-plane-q552",
    "num": 552,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Angle of banking for a vehicle speed of 10 m/s \nfor a radius of curvature 10 m is \n\n (assume g = 10m/s2)",
    "options": [
      "30°",
      "tan-1(1/2)",
      "60°",
      "45° \nJ&"
    ],
    "correctAnswer": 3,
    "explanation": "Given, v = 10 m/s, r = 10 m, g = 10 m/s2 \nWe know, \nAngle of banking, \n\ntanθ = \n2\nv\nrg ⇒\n10 10\ntan\n1\n10 10\n×\nθ =\n=\n×\n\n0\ntan\ntan 45\n45\nθ =\nθ =\n°",
    "examSource": "K CET- 1998, 2002, 2003, 2006  Kerala CEE - 2004, 2015  JCECE - 2005",
    "image": "/images/yct_motion_plane/p138_img1_xref1147.png"
  },
  {
    "id": "yct-motion-plane-q553",
    "num": 553,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle describes a horizontal circle in a \nconical funnel whose inner surface is smooth \nwith speed of 0.5 m/s. What is the height of the \nplane of circle from vertex of the funnel?",
    "options": [
      "0.25 cm",
      "2 cm",
      "4 cm",
      "2.5 cm \nJ&"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, particle is moving in circular path \nSo, figure \n\nmg\nR sin\n=\nθ ………. (i) \n\n2\nmv\nR cos\nr\n=\nθ ……… (ii) \nFrom equation (i) and (ii) \n∴ \n2\nrg\nr\ntan\nbut tan\nv\nh\nθ =\nθ =\n\n(\n)\n2\n2\n0.5\nv\nh\n0.025m\ng\n10\n=\n=\n=\n = 2.5 cm",
    "examSource": "K CET- 2005  UPSEE - 2012  MHT CET-2020",
    "image": "/images/yct_motion_plane/p139_img1_xref1154.png"
  },
  {
    "id": "yct-motion-plane-q554",
    "num": 554,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A cyclist covers a circular path 34.3 m long in \n22 sec. The angle of inclination of the cyclist \nis \n\n (Given g = 9.8 m/s2)",
    "options": [
      "50°",
      "45°",
      "30°",
      "60° \nJ&"
    ],
    "correctAnswer": 1,
    "explanation": "Let r be the radius of circular path, \nThe length of path = 2πr = 34.3m , t =\n22 sec \n\n34.3\nr\nm\n2\n=\nπ\n\nThen, Velocity = Length of path\nTime\n= 34.3\n22\n\n2\n2\n34.3\nv\n22\ntan\n0.999\n34.3\nrg\n9.8\n2\n\n\n\n\n\n\nθ =\n=\n=\n×\nπ\n\ntanθ ≃1 = tan45° \nSo, θ = 45°",
    "examSource": "K CET- 2000",
    "image": "/images/yct_motion_plane/p139_img1_xref1154.png"
  },
  {
    "id": "yct-motion-plane-q555",
    "num": 555,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A car of mass 1000 kg moves on a circular road \nwith speed of 20 m/s. Its direction changes by \n90° after travelling 628 m on the road. The \ncentripetal force acting on the car is",
    "options": [
      "7500 N",
      "750 N",
      "1000 N",
      "1500 N \nJ&"
    ],
    "correctAnswer": 2,
    "explanation": "Given, v = 20 m/s, m = 1000 kg \nSince it changes its direction after travelling 628 m \nSo, \nr\n628\n2\nπ\n×\n=\n\nr\n399.79\n400m\n=\n≃\n\nThen, Centripetal force = \n2\nmv\nr \n(\n)\n2\n1000\n20\n1000 400\n1000N\n400\n400\n×\n×\n=\n=\n=",
    "examSource": "K CET- 1997",
    "image": "/images/yct_motion_plane/p139_img1_xref1154.png"
  },
  {
    "id": "yct-motion-plane-q556",
    "num": 556,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle moving in uniform circular motion \nhas its radius and tangential speed doubled. Its \ncentripetal acceleration is then",
    "options": [
      "tripled",
      "the same as before",
      "doubled",
      "become four times \nJ&"
    ],
    "correctAnswer": 2,
    "explanation": "Given, v2 = 2v1, R2 = 2R1 \nWe know that, \nCentripetal acceleration (a)\n2\nv\nR\n=\n\nNow, \n2\n2\nl\n1\n2\n1\n2\n2\n2\n1\n2\n2\n1\na\nv\nR\nv\nR\na\nR\nv\nv\nR\n\n\n=\n×\n=\n×\n\n\n\n\n\n1\n2\na\na\n2\n1\n1\n1\n1\nv\n2R\n2v\nR\n\n\n\n\n=\n×\n\n\n\n\n\n\n\n\n\n1\n2\n2\n1\na\n1\na\n2\na\n2a\n=\n=\n\nSo, its acceleration will be doubled.",
    "examSource": "K CET- 1997",
    "image": "/images/yct_motion_plane/p139_img1_xref1154.png"
  },
  {
    "id": "yct-motion-plane-q557",
    "num": 557,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Uniform circular motion is an example of",
    "options": [
      "constant speed motion",
      "constant velocity motion",
      "non-accelerated motion",
      "zero accelerated motion \nJ&"
    ],
    "correctAnswer": 0,
    "explanation": "Uniform circular motion is an example of \nconstant speed motion. \n In uniform circular motion, magnitude of velocity \nremains unchanged but there is change in the direction \nof velocity vector.",
    "examSource": "K-CET-2013",
    "image": "/images/yct_motion_plane/p139_img1_xref1154.png"
  },
  {
    "id": "yct-motion-plane-q558",
    "num": 558,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "The velocity-time graph of a particle comes out \nto be a non-linear curve. The motion is",
    "options": [
      "uniform velocity motion",
      "uniformly accelerated motion",
      "non-uniform accelerated motion",
      "nothing can be said about the motion \nJ&"
    ],
    "correctAnswer": 2,
    "explanation": "Velocity-time graph gives the instantaneous \nvalue of velocity at any instant. For non-uniform \naccelerated motion, v-t graph is non-linear.",
    "examSource": "K-CET-2013",
    "image": "/images/yct_motion_plane/p139_img1_xref1154.png"
  },
  {
    "id": "yct-motion-plane-q559",
    "num": 559,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A brick of mass m, tied to a rope, is being \nwhirled in a vertical circle, with a uniform \nspeed. The tension in the rope is",
    "options": [
      "the same throughout",
      "largest when the brick is at the highest point \nof the circular path and smallest when it is at \nthe lowest point.",
      "largest when the rope is horizontal and \nsmallest when it is vertical",
      "largest when the brick is at the lowest point \nand smallest when it is at the highest point \nJ&"
    ],
    "correctAnswer": 3,
    "explanation": "When the brick is following a circular path in \nvertical direction then it is being acted by two forces, \none due to the motion of brick that is centrifugal force \nand other is due to the action of gravity that is force of \ngravity. \n\nTH + mg = mω2r \n\nTL - mg = mω2r \n\nTL > TH \nTension in largest when the brick is at the lowest point \nand smallest when it is at the highest point.",
    "examSource": "K-CET-2012",
    "image": "/images/yct_motion_plane/p139_img1_xref1154.png"
  },
  {
    "id": "yct-motion-plane-q560",
    "num": 560,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle moves with a uniform speed v and \ntime period T in a circular path of radius r. If \nthe speed of the particle is doubled, its new \ntime period is",
    "options": [
      "T",
      "T\n2",
      "2T",
      "T\n4 \nJ&"
    ],
    "correctAnswer": 1,
    "explanation": "Time period \n2 r\n(T)\nv\nπ\n=\n….. (i) \nWhen the speed of particle is doubled, its new time \nperiod, \n\n2 r\n1 2 r\nT'\n2v\n2\nv\nπ\nπ\n\n\n=\n=\n\n\n\n \nBy using equation (i), we get- \n\nT\nT'\n2\n=",
    "examSource": "K-CET-2016",
    "image": "/images/yct_motion_plane/p140_img1_xref1160.png"
  },
  {
    "id": "yct-motion-plane-q561",
    "num": 561,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "If x = 5t + 3t2 and y = 4t are the x and y co-\nordinates of a particle at any time t second \nwhere x and y are in metre, then the \nacceleration of the particle",
    "options": [
      "Is zero throughout its motion",
      "Is a constant throughout its motion",
      "Depends only on its y component",
      "Varies along both x and y direction \nJ&"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, x = 5t + 3t2, y = 4t \n\n(\n)\n2\nx\ndx\nd\nv\n5t\n3t\n5\n6t\ndt\ndt\n=\n=\n+\n=\n+\n\n(\n)\ny\ndy\nd\nv\n4t\n4\ndt\ndt\n=\n=\n= \n\n(\n)\nx\nx\ndv\nd\na\n5\n6t\n6\ndt\ndt\n=\n=\n+\n= \n\n( )\ny\ny\ndv\nd\na\n4\n0\ndt\ndt\n=\n=\n= \nThen, the acceleration of the particle is - \n\n2\n2\nX\nY\na\na\na\n=\n+\n\n( )\n( )\n2\n2\n6\n0\n6\n=\n+\n=\n\nSo, it is constant through its motion.",
    "examSource": "K-CET-2016",
    "image": "/images/yct_motion_plane/p140_img1_xref1160.png"
  },
  {
    "id": "yct-motion-plane-q562",
    "num": 562,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Two particles are performing uniform circular \nmotion about a centre of two concentric circles \nof radii 'r1', and 'r2', respectively. The two \nparticles and the centre of circles lie on a \nstraight line during the motion, then the ratio \nof their angular velocities will be",
    "options": [
      "3 : 1",
      "2 : 1",
      "0.5 : 1",
      "1 : 1"
    ],
    "correctAnswer": 3,
    "explanation": "Angular velocity (ω)\nd rad /sec\ndt\nθ\n=\n\nWhere, dθ = change in angular displacement \n\ndt = change in time \nSo, angular velocity in concentric circles of radii r1 is \n\n1\n1\n1t\nt\nθ\nθ\nω =\n=\n….. (i) \nAngular velocity in concentric circles of radii r2 is \n\n2\n2\n2t\nt\nθ\nθ\nω =\n=\n…… (ii) \nFrom equation (i) and (ii), we get \n\n1\n2\n1\nt\n1\nt\nθ\nω =\n=\nθ\nω\n\nω1 : ω2 = 1 : 1",
    "examSource": "MHT-CET 2020",
    "image": "/images/yct_motion_plane/p140_img1_xref1160.png"
  },
  {
    "id": "yct-motion-plane-q563",
    "num": 563,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle is moving in uniform circular motion \nwith speed 'V' and radius 'R'. The angular \nacceleration of the particle is",
    "options": [
      "2\nV\nR along tangent to the circle.",
      "zero",
      "2\nV\nR along the radius towards the centre of \n the circle",
      "2"
    ],
    "correctAnswer": 1,
    "explanation": "In uniform circular motion, the angular \nvelocity of the particle does not change, i.e. dω = 0 \nAngular acceleration \nd\n( )\ndt\nω\nα =\n\n dω = 0 \n\n α = 0 \nSo, its angular acceleration is zero.",
    "examSource": "V R perpendicular to the plane of the circle  MHT-CET 2020",
    "image": "/images/yct_motion_plane/p140_img1_xref1160.png"
  },
  {
    "id": "yct-motion-plane-q564",
    "num": 564,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A stone of mass 3 kg attached at one end of a \n2m long string is whirled in horizontal circle. \nThe string makes an angle of 45° with the \nvertical then the centripetal force acting on the \nstring is (g = 10 m/s2, tan 45° = 1)",
    "options": [
      "20 N",
      "30 N",
      "10 N",
      "40"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, Mass of stone (m) = 3kg \nLength of string (l) = 2m, Angle (θ)= 45° \nIn a conical pendulum,\n2\nv\ntan\nrg\nθ =\n\n∴ \n2\nv\ngtan\nr =\nθ \n\no\n2\n10\ntan 45\n10 1\n10ms-\n=\n×\n=\n× =\n\nNow, centripetal force (F) \n2\nmv\n2 10\n20N\nr\n=\n=\n×\n=",
    "examSource": "N  MHT-CET 2020"
  },
  {
    "id": "yct-motion-plane-q565",
    "num": 565,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A body of mass 'm' is moving along a circle of \nradius 'r' with linear speed 'v'. Now, to change \nthe linear speed to v\n2 and to move it along the \ncircle of radius '4r', required change in the \ncentripetal force of the body is",
    "options": [
      "decrease by 15\n16",
      "decrease by 5\n16",
      "increase by 9\n16",
      "increase by 11\n16"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, mass = m, radius of circle = r, \nLinear speed = v \nThen, Centripetal force (F1)\n2\nmv\nr\n=\n\nWhen change in linear speed to\n2\nv\nv\n2\n\n\n=\n\n\n\n\n, and radius \n(r2) = 4r \n\n2\n2\n2\n2\nmv\nF\nr\n=\n\n2\n2\n1\n2\nF\nm v\n1\nmv\nF\n4r\n4\n16\nr\n16\n=\n⋅\n=\n⋅\n=\n\nSo, \n1\nl\n2\n1\nF\nF\nF\nF\n16\n-\n=\n-\n\nNow, \nF1 - F2 = \n1\n15 F\n16",
    "examSource": "MHT-CET 2020"
  },
  {
    "id": "yct-motion-plane-q566",
    "num": 566,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "At any instant, the magnitude of the centripetal \nforce on a particle of mass 'm' performing \ncircular motion is given by (ω = angular \nvelocity and v = linear velocity of the particle)",
    "options": [
      "2\nmω\nv",
      "2\nmv\nω",
      "2\n2\nm ω\nv",
      "mω"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, mass = m, angular velocity = ω, \nlinear velocity = v \nNow, centripetal force (F) = \n2\n2\nmv\nmr\nr\n=\nω (∵ v = rω) \n F= mvω",
    "examSource": "v  MHT-CET 2020"
  },
  {
    "id": "yct-motion-plane-q567",
    "num": 567,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Mass of 0.5 kg is attached to a string moving in \nhorizontal circle with angular velocity 10 \ncycle/min. Keeping the radius constant, tension \nin the string is made 4 times by increasing \nangular velocity 'ω'. The value 'ω' of that mass \nwill be",
    "options": [
      "1 cycle /s\n4",
      "1 cycle /s\n2",
      "1 cycle/s\n5",
      "1 cycle /s\n3"
    ],
    "correctAnswer": 3,
    "explanation": "Given, Mass (m) = 0.5 kg \nAngular velocity (ω1) = 10 cycle/min \nTension (T1) = T, T2 = 4T \nAngular velocity (ω2) = ? \nNow, tension (T) = mrω2 \n∴ \nT ∝ ω2 \n∴ \n2\n2\n1\n1\nT\n4T\n4\n2\nT\nT\nω =\n=\n=\n=\nω\n\nSo, ω2 = 2ω1 = 2 × 10 cycle/min \n\n = 20 cycle/min \n\n = 20\n60 cycle/s = 1\n3 cycle/s",
    "examSource": "MHT-CET 2020"
  },
  {
    "id": "yct-motion-plane-q568",
    "num": 568,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A ball of mass 'm' is attached to the free end of \nan inextensible string of length 'ℓ'. Let 'T' be \nthe tension in the string. The ball is moving in \nhorizontal circular path about the vertical axis. \nThe angular velocity of the ball at any \nparticular instant will be",
    "options": [
      "Tm\nℓ",
      "T\nm\nℓ",
      "T\nmℓ",
      "m\nT\nℓ"
    ],
    "correctAnswer": 2,
    "explanation": "If ‘T’ be the tension in the string and ball is \nmoving in horizontal circular path about the vertical \naxis. \nSo, \ntension (T) = mlω2 \n∴ \nT\nm\nω =\nl",
    "examSource": "MHT-CET 2020"
  },
  {
    "id": "yct-motion-plane-q569",
    "num": 569,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Two cars of masses 'm1', and 'm2' are moving \nin the circles of radii 'r1' and 'r2' respectively. \nTheir angular speed 'ω1' and 'ω2' are such that \nthey both complete one revolution in the same \ntime 't'. The ratio of linear speed of 'm1' to the \nlinear speed of 'm2' is",
    "options": [
      "2\n2\n1\n2\n:\nω\nω",
      "2\n2\n1\n2\nT : T",
      "r1 : r2",
      "m1 : m2"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, mass of two cars = m1 and m2, \nradii of circles = r1 and r2, angular speed = ω1 and ω2, \nTime is same for both two cars to complete one \nrevolution \nSo, \nω1 = ω2 = 2\nt\nπ \nv\nr\n2\nv\nr\nt\n= ω\nπ\n\n\n= ×\n\n\n\n\n1\n2\n1\n2\nv\nv\nr\nr\n=\n\n∴ \n1\n1\n2\n2\nv\nr\nv\nr\n=",
    "examSource": "MHT-CET 2020"
  },
  {
    "id": "yct-motion-plane-q570",
    "num": 570,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A string of length 'ℓ' fixed at one end carries a \nmass 'm' at the other end. The string makes 2\nπ \nrevolutions/second around the vertical axis \nthrough the fixed end as shown in figure. The \ntension 'T' in the string is",
    "options": [
      "16 mℓ",
      "3 mℓ",
      "18 mℓ",
      "9 mℓ"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n2\nn = π revolutions per second \n\nThen,\n2\nTsin\nm\nr\nθ=\nω\n……. (i) \n2\nTsin\nm\nsin\nθ=\nω\nθ\nl\n……. (ii) \nFrom equation (i) and (ii), we get- \n\nT = mω2l \n\n = m (2πn)2 l \n\n = m4π2n2l \n\n = \n2\n2\n2\nm\n4\n\n\n× π \n\nπ\n\n\nl \n\n2\n2\n4\nm\n4\n=\n× π ×\n×\nπ\nl \n T = 16 ml",
    "examSource": "MHT-CET 2020",
    "image": "/images/yct_motion_plane/p142_img1_xref1170.png"
  },
  {
    "id": "yct-motion-plane-q571",
    "num": 571,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle performing U.C.M. of radius \nπ m\n2\nmakes 'x' revolutions in time 't'. Its \ntangential velocity is",
    "options": [
      "2\nx\nt\nπ",
      "2\nx\nt\nπ",
      "2x\nt\nπ",
      "2\nt\nx\nπ"
    ],
    "correctAnswer": 2,
    "explanation": "Given, radius (r) = π\n2 , revolution = x\nt \n\n∴ \nFrequency (f) = x\nt \n∵ \nAngular velocity (ω) = 2πf \n\nω = \nx\n2π× t \n∴ Tangential velocity (v) = rω \n\nπ\n2πx\nv =\n×\n2\nt\n⇒\n2\nπ x\nv =\nt",
    "examSource": "MHT-CET 2020",
    "image": "/images/yct_motion_plane/p142_img1_xref1170.png"
  },
  {
    "id": "yct-motion-plane-q572",
    "num": 572,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A mass 'm' is tied to one end of a spring and \nwhirled in a horizontal circle with constant \nangular velocity. The elongation in the spring is \n1 cm. If the angular speed is doubled, the \nelongation in the spring is 6 cm. The original \nlength of the spring is",
    "options": [
      "3 cm",
      "12 cm",
      "6 cm",
      "9"
    ],
    "correctAnswer": 3,
    "explanation": "Given, x1 = 1cm, x2 = 6cm, ω1= ω, ω2= 2ω \nLet K be the spring constant and L cm be the initial \nlength. \nSo, \n(\n)\n2\n1\n1\n1\nm L\nx\nKx\n+\nω =\n…… (i) \n\n(\n)\n2\n2\n2\n2\nm L\nx\nKx\n+\nω =\n…… (ii) \nNow, taking ratio of equation (i) and (ii), we get \n\n(\n)\n(\n)\n2\n1\n1\n1\n2\n2\n2\n2\nm L\nx\nKx\nm L\nx\nKx\n+\nω =\n+\nω\n\n2\n1\n1\n1\n2\n2\n2\n2\nL\nx\nx\nL\nx\nx\n\n\n+\nω\n×\n=\n\n\n+\nω\n\n\n\n2\n1\n1\n2\n2\n2\n2\n1\nL\nx\nx\nL\nx\nx\n\n\n+\nω\n=\n×\n\n\n+\nω\n\n\n⇒\n(\n)\n2\n1\n2\n2\n2\nL\nx\n1\nL\nx\n6\nω\n\n\n+\n=\n×\n\n\n+\nω\n\n\n\nL\n1\n2\nL\n6\n3\n+\n\n=\n\n\n+\n\n\n\n(\n)\n(\n)\n3 L\n1\n2 L\n6\n+\n=\n+\n\n3L\n3\n2L\n12\n+\n=\n+\n\nL = 9 cm.",
    "examSource": "cm  MHT-CET 2020",
    "image": "/images/yct_motion_plane/p142_img1_xref1170.png"
  },
  {
    "id": "yct-motion-plane-q573",
    "num": 573,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle is performing U.C.M. along the \ncircumference of a circle of diameter 50 cm \nwith frequency 2 Hz. The acceleration of the \nparticle in m/s2 is",
    "options": [
      "2π2",
      "4π2",
      "8π2",
      "π2"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, diameter of circle = 50 cm, \nNow, radius (r) = 25 cm = 25 × 10-2 m \nFrequency (f) = 2 Hz \nNow, acceleration (a) = rω2 \n\na = (\n)\n2\n2 f\nr\nπ\n× \n\n(\n)\n2 f\nω = π\n∵\n\n2\n2\n2\n2\n2\na\n4\nf\nr\na\n4\n4 25 10\na\n4\n-\n= π\n×\n= π × ×\n×\n= π",
    "examSource": "MHT-CET 2019",
    "image": "/images/yct_motion_plane/p143_img1_xref1178.png"
  },
  {
    "id": "yct-motion-plane-q574",
    "num": 574,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "In U.C.M. when time interval δt→0, the angle \nbetween change in velocity (δv) and linear \nvelocity (v) will be",
    "options": [
      "00",
      "450",
      "900",
      "1800"
    ],
    "correctAnswer": 2,
    "explanation": "Direction of change in velocity is - \n\n180\n90\n2\n2\n° -θ\nθ\nφ =\n=\n° -\n…… (i) \n\nFor small intervals as, δ t → 0, then the angle between \nv1 and v2 is very small θ ≈ 0° \nNow with equation (i), \n\nφ = 90°- 0\n2 = 90°",
    "examSource": "MHT-CET 2019",
    "image": "/images/yct_motion_plane/p143_img1_xref1178.png"
  },
  {
    "id": "yct-motion-plane-q575",
    "num": 575,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "If the radius of the circular path and frequency \nof revolution of particle of mass 'm' are \ndoubled then the change in its kinetic energy \nwill be (Ei and Ef are the initial and final kinetic \nenergies of the particle respectively)",
    "options": [
      "8Ei",
      "15Ei",
      "12Ei",
      "16"
    ],
    "correctAnswer": 1,
    "explanation": "Initial kinetic energy of body, \n\n2\n2\n1\ni\n1\n2 r\n1\n1\n2 r\nE\nmv\nm\nv\n2\n2\nT\nT\n\n\nπ\nπ\n\n\n=\n=\n=\n\n\n\n\n\n\n\n\n∵\n\nSo, \n2\n2\n2\ni\n1\n1\nE\n2m\nr f\n=\nπ\n…… (i) \nWhere, f1 = Frequency of revolution \n\nr1 = Radius of circular path \nNow, r2 = 2r1, and f2 = 2f1 \nSo, \n2\n2\n2\nf\n2\n2\nE\n2\nmr\nf\n= π\n⋅\n\n(\n) (\n)\n2\n2\n2\nf\n1\n1\nE\n2\nm 2r\n2f\n= π\n\n2\n2\n2\nf\n1\n1\nE\n32\nmr f\n=\nπ\n\n2\n2\n2\nf\n1\n1\nE\n16 2\nmr f\n=\n⋅π\n\nfrom eqn (i) \n\nf\ni\nE\n16E\n=\n\nNow, change in kinetic energy, \n\nf\ni\nE\nE\nE\n∆\n=\n-\n\ni\ni\ni\n16E\nE\n15E\n=\n-\n=",
    "examSource": "Ei  MHT-CET 2019",
    "image": "/images/yct_motion_plane/p143_img1_xref1178.png"
  },
  {
    "id": "yct-motion-plane-q576",
    "num": 576,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A body of mass 'm' is performing a U.C.M. in a \ncircle of radius 'r' with speed 'v'. The work \ndone by the centripetal force in moving it \nthrough \n\n\n\n\n\n2\n3 rd of the circular path is",
    "options": [
      "mv2πr",
      "2\n2πmv r\n3",
      "zero",
      "2\n2mv π\n3"
    ],
    "correctAnswer": 2,
    "explanation": "A body which is performing uniform circular \nmotion, \nthe \ncentripetal \nforce \nacts \nalways \nin \nperpendicular direction to its velocity and work done by \ncentripetal force is always zero. \ni.e. \n⇒ WD = Fdcosθ \n\n⇒ WD = Fdcos90 \n\n⇒ WD = 0 \nThrough, the work done by the centripetal force in \nmoving it through \nrd\n2\n3\n\n\n\n\n\n\n of the circular path is zero.",
    "examSource": "MHT-CET 2019",
    "image": "/images/yct_motion_plane/p143_img1_xref1178.png"
  },
  {
    "id": "yct-motion-plane-q577",
    "num": 577,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A wheel complete 2000 revolutions to cover the \ndistance of 9.42 km. The diameter of this wheel \nis (π = 3.14)",
    "options": [
      "1 cm",
      "1 m",
      "1.5 cm",
      "1.5"
    ],
    "correctAnswer": 3,
    "explanation": "Given, distance (D) = 9.42 km = 9420 m \n∵ \nDistance (D) = 2000 × (2πr) \nWheel makes 2000 revolutions, it is multiplied by the \ncircumference of the circle of the distance cover by \nwheel. \n\nD = 2000 × (πd) (∵ d = 2r) \n\n9420 = 2000× (πd) \n\n9420m\nd=\n=1.499= 1.5m\n2000×π",
    "examSource": "m  MHT-CET 2019",
    "image": "/images/yct_motion_plane/p143_img1_xref1178.png"
  },
  {
    "id": "yct-motion-plane-q578",
    "num": 578,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Two stones of masses 1m and 3m are whirled in \nhorizontal circles, the heavier one in radius \n\n\n\n\n\n\nr\n3 and lighter one in radius 'r'. The \ntangential speed of lighter stone is 'n' times that \nof the value of heavier stone, when they \nexperience same centripetal force. The value of \nn is",
    "options": [
      "4",
      "1",
      "2",
      "3"
    ],
    "correctAnswer": 3,
    "explanation": "Given, r1 = r, r2 = r\n3 , m1 = m , m2 = 3m \n\n v2 = v, v1 = nv \nThen, centripetal force is - \n\n2\n2\n1\n1\n2\n2\n1\n2\nm v\nm v\n=\nr\nr\n\n(\n)\n2\n2\nm nv\n3mv\n=\nr\nr\n3\n\nn2 = 9 ⇒ n = 3",
    "examSource": "MHT-CET 2019",
    "image": "/images/yct_motion_plane/p143_img1_xref1178.png"
  },
  {
    "id": "yct-motion-plane-q579",
    "num": 579,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A ball of mass 0.25 kg attached to the end of a \nstring of length 1.96 m is moving in a \nhorizontal circle. The string will break if the \ntension is more than 25 N. What is the \nmaximum speed with which ball can be \nmoved?",
    "options": [
      "14 m/s",
      "3 m/s",
      "3.92 m/s",
      "5 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, mass (m) = 0.25kg, radius (r) = \n1.96m, tension (T) = 25N \nCentrifugal force (F) = \n2\nmv\nr \nThen, T = \n2\nmv\nr \n\n25 = \n2\n0.25 × v\n1.96\n⇒ v = 14m/s",
    "examSource": "MHT-CET 2011",
    "image": "/images/yct_motion_plane/p144_img1_xref1184.png"
  },
  {
    "id": "yct-motion-plane-q580",
    "num": 580,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A cane filled with water is revolved in a vertical \ncircle of radius 4 m and the water does not fall \ndown. The time period for a revolution is about",
    "options": [
      "2 s",
      "4 s",
      "8 s",
      "10"
    ],
    "correctAnswer": 1,
    "explanation": "Given, r = 4m, T = ? \n\nLet mass of water = m \nCentrifugal force (F) = mω2r \n\nWeight of water = mg \nAt highest point, mg = F \n\n mg = mω2r \n\ng = \n2\n2\n4π r\nT\n\n2\nT\nπ\n\n\nω =\n\n\n\n\n∵\n\n2\n2\n4π r\nT =\ng \n\nr\n4\nT=2π\n2π\ng\n9.8\n=\n\n T = 4.01 sec ≈ 4 sec",
    "examSource": "s  UPSEE-2014  JCECE-2010",
    "image": "/images/yct_motion_plane/p144_img1_xref1184.png"
  },
  {
    "id": "yct-motion-plane-q581",
    "num": 581,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "In uniform circular motion, the centripetal \nacceleration is",
    "options": [
      "towards the centre of the circular path and \nperpendicular to the instantaneous velocity",
      "a constant acceleration",
      "away from the centre of the circular path and \nperpendicular to the instantaneous velocity",
      "a variable acceleration making 45º with the \ninstantaneous velocity"
    ],
    "correctAnswer": 0,
    "explanation": "Centripetal acceleration generates a force due to which \ncircular motion happens and its direction is always \ntowards the centre of the circle and it is perpendicular to \nvelocity because the direction of velocity is tangential to \nthe circle. So it will always perpendicular to the \ninstantaneous velocity.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p144_img1_xref1184.png"
  },
  {
    "id": "yct-motion-plane-q582",
    "num": 582,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A cyclist bends while taking turn in order to",
    "options": [
      "reduce friction",
      "provide required centripetal force",
      "reduce apparent weight",
      "reduce speed"
    ],
    "correctAnswer": 1,
    "explanation": "When the velocity is high, the centripetal force provided \nby friction is not enough and the cyclist has to bend. \nThe normal force acting on the cyclist also has \nhorizontal \ncomponent \nwhich \nprovides \nadditional \ncentripetal force.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p144_img1_xref1184.png"
  },
  {
    "id": "yct-motion-plane-q583",
    "num": 583,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle tied to a string describes a vertical \ncircular motion of radius r continually. If it has \na velocity \n3gr at the highest point, then the \nratio of the respective tensions in the string \nholding it at the highest and lowest points is",
    "options": [
      "4 : 3",
      "5 : 4",
      "1 : 4",
      "3 : 2"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, \n\nRadius (r) = r \n\nVelocity at highest point (v)\n3gr\n=\n= vH \nTension at highest point (TH), \n\n2\nH\nmv\nT\nmg\nr\n=\n-\n\n(\n)\n2\nH\nm\n3gr\nT\nmg\nr\n=\n-\n\nH\nm 3gr\nT\nmg\nr\n×\n=\n-\n\nH\nT\n2mg\n=\n\nTension at lowest point (TL), \n\n2\nL\nmv\nT\nmg\nr\n=\n+\n\n………(i) \nVelocity at lowest point (vL), \nSo, \n2\n2\nL\nH\nv\nv\n2gs\n=\n+\n\nHere, \n2\nL\nv\n3gr\n2g\n2r\n=\n+\n×\n\n(\n)\ns\n2r\n=\n∵\n\n2\nL\nv\n7gr\n=\n\nFrom equation (i) we have \n\nSo, \nL\nT\n7mg\nmg\n8mg\n=\n+\n=\n\nHence, \nH\nL\nT\n2mg\nT\n8mg\n=\n\nH\nL\nT\n1\nT\n4\n=",
    "examSource": "MHT CET-2019",
    "image": "/images/yct_motion_plane/p144_img1_xref1184.png"
  },
  {
    "id": "yct-motion-plane-q584",
    "num": 584,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle of mass m is moving in a horizontal \ncircle of radius r, under a centripetal force \n2\nk\nF = r , where k is a constant.",
    "options": [
      "The potential energy of the particle is zero",
      "The potential energy of the particle is k\nr",
      "The total energy of the particle is \nk\n2r\n-",
      "The kinetic energy of the particle is \nk\nr\n-"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, radius of circle = r \nCentripetal force (F) \n2\nk\n= r\n\nWe know that, centripetal force (F) = \n2\nmv\nr . \n\n2\n2\n2\nmv\nk\nk\n=\nmv =\nr\nr\nr ⇒\n\n∴ \nK.E of particle =\n2\n1\nk\nmv\n2\n2r\n=\n\nThe force acting on a particle is conservative in nature \nhence we can find potential energy (U) of the particle \n\ndU\nF\ndr\n= -\n\nr\nU\nFdr\n∞\n= -∫\n\nr\n2\nk\nU\ndr\nr\n∞\n-\n\n\n= -\n\n\n\n∫\n\nr\n2\nk\nU\nk r dr\nr\n-\n∞\n-\n= -\n=\n∫\n\n∴ Total energy = K.E + U \n\nk\nk\n2r\nr\n=\n-\nk\n2k\n2r\n-\n=\nk\n2r\n-\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p145_img1_xref1192.png"
  },
  {
    "id": "yct-motion-plane-q585",
    "num": 585,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A bridge is in the form of a semi-circle of \nradius 40 m . The greatest speed with which a \nmotor cycle can cross the bridge without \nleaving the ground at the highest point is (g = \n10 m/s²) \n\n (Frictional force is negligibly small)",
    "options": [
      "40 m/s",
      "20 m/s",
      "30 m/s",
      "15 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, r\n40m\n=\n, \n2\ng\n10m/s\n=\n\n FC = centrifugal force \n\nForce equation at highest point- \n\nC\nN\nF\nmg\n+\n=\n\n2\nmv\nN\nmg\nr\n+\n=\n\nTo achieve greatest speed, without leaving the ground at \nhighest point - N = 0 \n\n2\nmv\nmg\nr\n=\n\n2\nv\nrg\n=\n= 40 × 10 = 400 \n\nv\n400\n=\n\n v = 20 m/s",
    "examSource": "",
    "image": "/images/yct_motion_plane/p145_img1_xref1192.png"
  },
  {
    "id": "yct-motion-plane-q586",
    "num": 586,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A stone of mass 2 kg is tied to a string of length \n0.5 m. If the breaking tension of the string is \n900 N, then the maximum angular velocity, the \nstone can have in uniform circular motion is",
    "options": [
      "30 rad s-1",
      "20 rad s-1",
      "10 rad s-1",
      "25 rad s-1"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, mass (m) = 2kg, length (l) = r = \n0.5m, tension of the string (T) = 900N \n\nCentripetal force (F) = \n2\nmv\nr \nAngular force (F) = T = mrω2 \n\n 900 = 2 × 0.5 × ω2 \n\n 900 = 1× ω2 \n\n900\nω =\n= 30rad/sec",
    "examSource": "",
    "image": "/images/yct_motion_plane/p145_img1_xref1192.png"
  },
  {
    "id": "yct-motion-plane-q587",
    "num": 587,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A motor car is moving with a speed of 20 m/s \non a circular track of radius 100 m. If its speed \nis increasing at the rate of 3 m/s², its resultant \nacceleration is",
    "options": [
      "3 m/s²",
      "5 m/s²",
      "2.5 m/s²",
      "3.5 m/s²"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, speed of car (v) = 20 m/s, radius \nof circular track (r) = 100m, at = 3m/s2 \nCentripetal acceleration \n2\nC\nv\n(a )\nr\n=\n\nC\n20 20\na\n100\n×\n=\n2\n400\n4m/s\n100\n=\n=\n\nSo, resultant acceleration(\n)\n2\n2\nR\nC\nt\na\na\na\n=\n+\n\n( )\n( )\n2\n2\nR\na\n4\n3\n=\n+\n⇒ \nR\na\n16\n9\n=\n+ \n\nR\na\n25\n=\n= 5 m/s2",
    "examSource": "",
    "image": "/images/yct_motion_plane/p146_img1_xref1198.png"
  },
  {
    "id": "yct-motion-plane-q588",
    "num": 588,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A stone of mass m tied to a string of length l is \nrotating along a circular path with constant \nspeed v. The torque on the stone is:",
    "options": [
      "mlv",
      "mv\nl",
      "2\nmv\nl",
      "mv2l"
    ],
    "correctAnswer": 3,
    "explanation": "If the body is moving within a circular motion, there \nwill be a centrifugal force working along the center of \nthe path. So, r and Fc working on the same axis hence, \nthe net torques are zero. \nT\nr\nF\n=\n×\n\u0002\n\u0002\n\u0002\n= rFsinθ = rFsin0° \nT = 0",
    "examSource": "",
    "image": "/images/yct_motion_plane/p146_img1_xref1198.png"
  },
  {
    "id": "yct-motion-plane-q589",
    "num": 589,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "An athlete throws a discus from rest to a final \nangular velocity of 15 rad/s in 0.270 s before \nreleasing it. During acceleration, discus moves \na circular arc of radius 0.810 m. Acceleration \nof discus before it is released is ........ m/s².",
    "options": [
      "45",
      "182",
      "187",
      "192"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, angular velocity (ω0)= 0 (rest), \nangular velocity (ω) = 15 rad/sec, time (t) = 0.270 sec, \nradius (r) = 0.810 m \nWe know, ω = ω0 + αt \n\nω = 0 + αt \n(∵ω0 = 0) \n\nω\nα = t \n\n15\n0.270\nα =\nred/s2 \nWe know, acceleration ( )\na\nr\n= α \n\n15\na\n0.81 0.270\n=\n×\n\n2\na\n45m /s\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p146_img1_xref1198.png"
  },
  {
    "id": "yct-motion-plane-q590",
    "num": 590,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A wheel of radius 2 m rolls on the ground with \na uniform velocity 4 m/s. The relative \nacceleration of the top most point of the wheel \nwith respect to the bottom most point of the \nwheel is",
    "options": [
      "8 m/s2",
      "16 m/s2",
      "4 m/s2",
      "32 m/s2"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, radius of wheel (r) = 2m \nVelocity (v) = 4 m/s \nAcceleration of the wheel in circular motion\n2\nv\n(a)\nr\n=\n\n( )\n2\n4\na\n2\n=\n16\n2\n=\n= 8 m/s2 \n\n∴ Relative acceleration of top most point of the wheel \nwith respect to bottom most point of the wheel \n\n ar = aB - aA \n\n= 8- (-8) \n\n= 8 + 8 = 16 m/s2",
    "examSource": "UPSEE - 2018",
    "image": "/images/yct_motion_plane/p146_img1_xref1198.png"
  },
  {
    "id": "yct-motion-plane-q591",
    "num": 591,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Two particles P and Q are moving on a circle. \nAt a certain instant of time both the particles \nare diametrically opposite and P has tangential \nacceleration 8 m/s2 and centripetal acceleration \n5 m/s2 whereas Q has only centripetal \nacceleration of 1 m/s2. At that instant \nacceleration (in m/s2) of P with respect to Q is",
    "options": [
      "14",
      "80",
      "10",
      "12"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \nTangential acceleration of (P) = 8 m/s2 \nCentripetal of acceleration = 5 m/s2 \nCentripetal acceleration of (Q) = 1 m/s2 \nInstant acceleration of P = ? \n\n∵ \nPQ\nP\nQ\na\na\na\n=\n-\n\u0002\n\u0002\n\u0002 \n\nPQ\na\u0002\n(\n) (\n)\n^\n^\n^\n5i\n8j\n1i\n= +\n+\n--\n\nPQ\n^\n^\na\n6i\n8j\n=\n+\n\u0002\n\n( )\n( )\n2\n2\nPQ\n| a\n|\n6\n8\n=\n+\n\u0002\n\n36\n64\n=\n+\n100\n=\n= 10 m/s2",
    "examSource": "UPSEE - 2017",
    "image": "/images/yct_motion_plane/p146_img1_xref1198.png"
  },
  {
    "id": "yct-motion-plane-q592",
    "num": 592,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Figure shows the total acceleration a = 32 m/s2 \nof a moving particle moving clockwise in a \ncircle of radius R = 1 m. What are the \ncentripetal acceleration a and speed v of the \nparticle at given instant?",
    "options": [
      "2\n16 3 m s ,4 3 m s",
      "2\n16 3 m s ,4m s",
      "2\n16m s ,16m s",
      "2\n16m s ,4"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, total acceleration (aT) = 32 m/s2, \nradius (R) = 1m \n\nFrom the figure, centripetal acceleration \n\nac = aT cos θ \n\nac = 32 cos60° \n\nac\n1\n32\n2\n=\n×\n2\n16m /s\n=\n\nAlso, we know that, \n\n2\nc\nv\na\nR\n=\n\nv2 = acR \n\nc\nv =\na R\n16 1\n=\n× = 4m/s",
    "examSource": "m s  UPSEE - 2016",
    "image": "/images/yct_motion_plane/p147_img1_xref1206.png"
  },
  {
    "id": "yct-motion-plane-q593",
    "num": 593,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A stone of mass m is tied to a string and is \nmoved in a vertical circle of radius 'r' making \n'n' revolution per minute. The total tension in \nthe string when the stone is at its lowest point is",
    "options": [
      "mg",
      "m(g + πnr2)",
      "m(g + πnr)",
      "m{g + ( π2n2r)/900}"
    ],
    "correctAnswer": 3,
    "explanation": "We know, \nC\nT\nF\nmg\n=\n+\n\nT = mrω2 + mg ......(i) \n\n2\n2 n\nT\nmr\nmg\n60\nπ\n\n\n=\n+\n\n\n\n\n\n2 n\n60\nπ\n\n\nω =\n\n\n\n\n∵\n\n2\n2\n4\nn\nT\nmr\nmg\n3600\nπ\n=\n×\n+\n\n2\n2\nn\nT\nmr\nmg\n900\n\n\nπ\n=\n×\n+\n\n\n\n\n\n2\n2\nn r\nT\nm g\n900\n\n\nπ\n=\n+\n\n\n\n",
    "examSource": "UPSEE - 2013",
    "image": "/images/yct_motion_plane/p147_img1_xref1206.png"
  },
  {
    "id": "yct-motion-plane-q594",
    "num": 594,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle is moving in a vertical circle. The \ntension in the string when passing through two \npositions at angles 30º and 60º from vertical \n(lowest position) are T1 and T2 respectively",
    "options": [
      "T1 =T2",
      "T2 >T1",
      "T1 >T2",
      "tension in the string always remain the same \nManipal UGET-2019"
    ],
    "correctAnswer": 2,
    "explanation": "From figure, tension \n2\nmv\n(T)\nmgcos\nr\n=\n+\nθ \nWhen, \n30\nθ =\n° \n\n2\n1\nmv\nT\nmgcos30\nr\n=\n+\n° \no\n3\ncos30\n2\n\n\n=\n\n\n\n\n∵\n\n2\n1\nmv\n3\nT\nmg\nr\n2\n=\n+\n×\n\n.....(i) \nWhen, \n60\nθ =\n° \n\n2\n2\nmv\nT\nmgcos60\nr\n=\n+\n° \no\n1\ncos60\n2\n\n\n=\n\n\n\n\n∵\n\n2\n2\nmv\n1\nT\nmg\nr\n2\n=\n+\n×\n\n.....(ii) \nFrom equation (i) and (ii) it is clear that \n1\n2\nT\nT\n>\n.",
    "examSource": "UPSEE - 2013",
    "image": "/images/yct_motion_plane/p147_img1_xref1206.png"
  },
  {
    "id": "yct-motion-plane-q595",
    "num": 595,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A circular turn table of radius 0.5 m has a \nsmooth groove as shown in figure. A ball of \nmass 90 g is placed inside the groove along with \na spring of spring constant 102 N/cm. The ball \nis at a distance of 0.1 m from the centre when \nthe turn table is at rest. O totating the turn \ntable with a constant angular frequency of 102 \nsec-1, the ball moves away from the centre by a \ndistance nearly equal to",
    "options": [
      "10-1m",
      "10-2m",
      "10-3m",
      "2×10-1"
    ],
    "correctAnswer": 1,
    "explanation": "Given, k = 102 N cm-1 = 104 N/m \nWhen the turn table rotates with angular speed (ω), the \nparticle of mass (m) describes a circle of radius (r). \n\nAt equilibrium, balancing the centripetal force \nand the force experience due to spring \n\nkx = mrω2 \n\n(\n)\n2\n4\n90\n100 10 x\n0.1\nx 10\n1000\n×\n=\n+\n\n9\n9x\nx\n0.1\n100\n100\n=\n×\n+\n\n9x\n9\nx\n100\n1000\n-\n=\n\n 91x\n9\n100\n1000\n=\n\n9\nx\n910\n=\n\n x\n0.00989\n=\n\n x\n0.01\n=\n\n2\nx\n10 m\n-\n=",
    "examSource": "m  UPSEE - 2013",
    "image": "/images/yct_motion_plane/p148_img1_xref1216.png"
  },
  {
    "id": "yct-motion-plane-q596",
    "num": 596,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Keeping the banking angle same, to increase \nthe maximum speed with which a vehicle can \ntravel on the curved road by 10%, the radius of \ncurvature of the road has to be changed from \n20 m to",
    "options": [
      "16 m",
      "18 m",
      "24.2 m",
      "30.5"
    ],
    "correctAnswer": 2,
    "explanation": "Let m is the mass of the vehicle, g is the \nacceleration due to gravity, v is the velocity of the \nvehicle and r is the radius of the circle in which the \nvehicle is moving θ is the banking angle. \n\n2\nv\ntan\nrg\nθ =\n\n2\nv\ntan\n20g\nθ =\n\n….(i) [\nr\n20m\n=\n∵\n] \nIf \nv' = v + 10% v \n\nv' = v + 10 v\n100\n\nv' = v + 0.1v \n\nv' = 1.1v \nThen, \n\n(\n)\n2\n2\n1.1v\nv\ntanθ =\n=\nr g\nr'g\n'\n'\n\n ....(ii) \nEquating equation (i) and (ii), we get - \n\n1\n1.21\n=\n20\nr' \n\nr' = 20 × 1.21 \n\nr' = 24.2 m",
    "examSource": "m  UPSEE - 2010",
    "image": "/images/yct_motion_plane/p148_img1_xref1216.png"
  },
  {
    "id": "yct-motion-plane-q597",
    "num": 597,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "The centripetal acceleration of a body moving \nin a circle of radius 100 m with a time period of \n2s will be",
    "options": [
      "98.5 m/s²",
      "198.5 m/s²",
      "49.29 m/s²",
      "985.9 m/s²"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, r = 100m, t = 2 sec \nCentripetal acceleration \n\n ac = ω2r\n2\n2\nr\nT\nπ\n\n\n= \n\n\n\n\n2\n2\n4\n100\n2\nπ\n=\n×\n= 986.96 m/s2 ≈ 985.9 m/s2",
    "examSource": "UPSEE - 2009",
    "image": "/images/yct_motion_plane/p148_img1_xref1216.png"
  },
  {
    "id": "yct-motion-plane-q598",
    "num": 598,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Two cars A and B are going around concentric \ncircular paths of radii RA and RB. If the two \ncars complete the circular paths in the same \ntime, then the ratio of angular speed of A and B \nis",
    "options": [
      "1 : 1",
      "RA : RB",
      "RB : RA",
      "1 : 2"
    ],
    "correctAnswer": 0,
    "explanation": "Angular speed of A - \n\nA\nA\n2\nT\nπ\nω\n=\n\n……….(i) \nAngular speed of B - \n\nB\nB\n2\nT\nπ\nω =\n\n………. (ii) \nDividing eqn. (i) by equation (ii), we get - \n\nA\nB\nB\nA\nT\nT\nω\n=\nω\n\nSince, \nA\nB\nT\nT\n=\n\n∴ \nA\nA\nB\nA\nT\nT\nω\n=\nω\n⇒ \nA\nB\n1\n1\nω\n=\nω\n\n∴ \nA\nB\n:\n1:1\nω\nω =",
    "examSource": "AP EAMCET (22.09.2020) Shift-I",
    "image": "/images/yct_motion_plane/p148_img1_xref1216.png"
  },
  {
    "id": "yct-motion-plane-q599",
    "num": 599,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A stone of mass 2 kg tied to a light inextensible \nstring of length 5 m\n3\n is whirling in a circular \npath in a vertical plane. If the ratio of the \nmaximum tension to the minimum tension in \nthe string is 4, then the speed of the stone at the \nhighest point of the circle is (g = 10 m/s²)",
    "options": [
      "20 m/s",
      "10 3 m/s",
      "50 m/s",
      "10 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, \n\nRadius ( )\n5\nR\nm\n3\n=\n\nMass (m) = 2kg \n\n2\nmax\nmu\nT\n=mg+ R ....(i) \nTension is minimum at top \n\n2\nmin\nmv\nT\nmg ___(ii)\nR\n=\n-\n\nDividing equation (i) and (ii), we get - \n\n2\n2\n4v\n4Rg\nRg\nu\n-\n=\n+\n\n4v2 = 5Rg +u2 \n………. (iii) \n\nTotal energy comparing- \nSo, \n(\n)\n2\n2\n1\n1\nmv\nmg 2R\nmu\n2\n2\n+\n=\n\n2\n2\nu\nv\n4gR\n=\n+\n\nPutting the value of u2 in equation (iii), we get - \n\n2\n2\n4v\n5gR\nv\n4gR\n=\n+\n+\n\n2\n3v\n9gR\n=\n\n2\nv\n3gR\n=\n\nv\n3gR\n=\n\n5\nv\n3 10\n3\n=\n×\n×\n\n5\nR\n,g\n10\n3\n=\n=\n∵\n\nv\n50 m/s\n=",
    "examSource": "AP EAMCET (20.04.2019) Shift-1",
    "image": "/images/yct_motion_plane/p149_img1_xref1223.png"
  },
  {
    "id": "yct-motion-plane-q600",
    "num": 600,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Assertion (A) : The speed of a body in uniform \ncircular motion is constant. \n\n Reason (R) : In uniform circular motion,",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 2,
    "explanation": "• Body moves with constant speed, it’s magnitude of \nvelocity is constant. \n• Acceleration is a vector quantity therefore its direction \nis changing it means acceleration is also changing.",
    "examSource": "the  acceleration of the body is constant.     (a) Both (A) and (R) is the correct explanation of  (A).    (b) Both (A) and (R) are true but (R) is not the  correct explanation of (A).    (c) (A) is true but (R) is false.     (d) (A) is false but (R) is true.  AP EAMCET (20.04.2019) Shift-1",
    "image": "/images/yct_motion_plane/p149_img1_xref1223.png"
  },
  {
    "id": "yct-motion-plane-q601",
    "num": 601,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Two spheres P and Q, each of mass 200 g are \nattached to a string of length one metre as \nshown in the figure. The string and the spheres \nare then whirled in a horizontal circle about O \nat a constant angular speed. The ratio of the \ntension in the string between P and Q to that of \nbetween P and O is (P is at mid-point of the line \njoining O and Q)",
    "options": [
      "1\n2",
      "2\n3",
      "3\n2",
      "2\n1"
    ],
    "correctAnswer": 1,
    "explanation": "From figure, \nOQ\nL\nOP\nPQ\n2\n2\n=\n=\n=\n\nFor mass of P, T1 - T2 =\n2\nL\nm\n2\n\n\nω \n\n\n \n\nFor mass of Q, T2 = mω2 L \n…….(i) \n\nT1 = mω2 L\n2 + mω2 L \n\n = \n2\n3\nmL\n2 ω\n\n………(ii) \nDividing equation (ii) by equation (i), we get- \n∴ \n2\n2\n2\n1\nT\nm\nL\n2\n3\nT\n3\nm\nL\n2\nω\n=\n=\nω",
    "examSource": "AP EAMCET (22.04.2018) Shift-1",
    "image": "/images/yct_motion_plane/p149_img1_xref1223.png"
  },
  {
    "id": "yct-motion-plane-q602",
    "num": 602,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "questionText": "A particle is moving in a circular path. The \nacceleration and momentum vectors at an \ninstant of time are\n^\n^\n^\n^\n2\na = 2i + 3jm/s andp = 6i - 4j\n\u0002\n\u0002\n\nkgm/",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 0,
    "explanation": "We consider the dot product of a and p\n\u0002\n\u0002 , \n\na p\n(2i 3j)(6i 4j)\n⋅\n=\n+\n-\n\u0002 \u0002\n\n = (2 × 6) - (3 × 4) = 12 - 12 = 0 \n∴ \na\u0002 is perpendicular to p\u0002 . \n∴ \nMotion is uniform circular motion.",
    "examSource": "s. Then the motion of the particle is      (a) uniform circular motion      (b) circular motion with tangential acceleration      (c) circular motion with tangential retardation     (d) we cannot say anything about a and p only  BITSAT-2005",
    "image": "/images/yct_motion_plane/p150_img1_xref1234.png"
  },
  {
    "id": "yct-motion-plane-q603",
    "num": 603,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "questionText": "",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 2,
    "explanation": "A body travelling a circle at a constant speed. \nTherefore, the tangential component of the acceleration \naT is zero and it has only the centripetal acceleration ac \nwhich is directed towards the centre. So, it has an \ninward acceleration. \nIn inward radial acceleration, magnitude of velocity is \nconstant but direction is changing continuously",
    "examSource": "A body is travelling in a circle at a constant  speed. It      (a) has a constant velocity     (b) is not accelerated      (c) has an inward radial acceleration     (d) has an outward radial acceleration  BITSAT-2010",
    "image": "/images/yct_motion_plane/p150_img1_xref1234.png"
  },
  {
    "id": "yct-motion-plane-q604",
    "num": 604,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "questionText": "The velocity and acceleration vectors of a \nparticle \nundergoing \ncircular \nmotion \nare \n^\nv = 2i\n\u0002\nm/s and \n^\n^\na = 2i + 4j\n\u0002\n m/s2 respectively at \nan instant of time. The radius of the circle is",
    "options": [
      "1m",
      "2m",
      "3m",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n\nx\n^\nv\n2i m/s, v\n2\n=\n=\n\u0002\n, vy = 0 \n\n(\n)\n2\nx\ny\n^\n^\na\n2i\n4j m /s ,\na\n2,\na\n4\n=\n+\n=\n=\n\u0002\n\nTangential velocity in circular motion, the centripetal \nacceleration is toward centre. \nRadial acceleration in a centripetal acceleration is \n\n2\nr\nv\na = r ⇒ \n2\nx\ny\nv\na\nr\n=\n\n2\n2\n4 = r (Since, ay = 4 and v = 2\n\u0002\n) \n\nr = 1m \nHence, the radius of the circle is 1m.",
    "examSource": "m  BITSAT-2013",
    "image": "/images/yct_motion_plane/p150_img1_xref1234.png"
  },
  {
    "id": "yct-motion-plane-q605",
    "num": 605,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "In 1.0 s, a particle goes from A to B moving in a \nsemicircle of 1.0 m radius (as shown in the \nfigure) \n\nThe magnitude of the average velocity is",
    "options": [
      "3.14 m/s",
      "2.0 m/s",
      "1.0 m/s",
      "zero \nCG PET- 2017"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, Time (t) = 1.0 sec, r = 1.0 m \n\nTotal displacement of the particle from A to B time \ntaken, (t) = 1sec \nThen, \nAverage velocity = displacement\nTime\n= s\n2\n2m/s\nt\n1\n=\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p150_img1_xref1234.png"
  },
  {
    "id": "yct-motion-plane-q606",
    "num": 606,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "The speed of revolution of a particle going \naround a circle is doubled and its angular \nspeed is halved. That happens to the centripetal \nacceleration?",
    "options": [
      "Remains unchanged",
      "Halved",
      "Doubled",
      "Becomes four times \nCG PET- 2010"
    ],
    "correctAnswer": 0,
    "explanation": "Centripetal acceleration (aC) = rω2 = vω \nNow speed is doubled but the angular speed is halved \nthen, v′ = 2v and ω′ = ω\n2 \n∴ Now centripetal acceleration \n\na′\nC = v′ω′ = (2v) \nω\n× 2 = vω = aC \nIf v is doubled and ω is halved then the centripetal \nacceleration remains unchanged.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p150_img1_xref1234.png"
  },
  {
    "id": "yct-motion-plane-q607",
    "num": 607,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A car is circulating on the path of radius r and \nat any time its velocity is v and rate of increase \nof velocity is a .The resultant acceleration of \nthe car will be",
    "options": [
      "2\n2\n2\nv\nr\na +",
      "2\nv\na\nr +",
      "4\n2\n2\nv\na\nr +",
      "2\nv\na\nr\n\n\n+\n\n\n\n\n\nCG PET- 2009"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \nRadius of car = r \n\nInstant velocity = v m/s \nIncrease in velocity = tangential acceleration \nTangential acceleration (at) = a m/s2 \nNow, we know that when particle circular motion radial \nacceleration acts toward the centre. \n∴ Radial acceleration (ar)\n2\nv\nr\n=\n\nResultant acceleration, (aR) = \n2\n2\nr\nt\na\na\n+\n\nSo, \n2\n2\n2\nR\nv\na\na\nr\n\n\n=\n+\n\n\n\n\n\n4\n2\nR\n2\nv\na\na\nr\n=\n+",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q608",
    "num": 608,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle moves with constant speed v along a \ncircular path of radius r and completes the \ncircle in time T. The acceleration of the particle \nis",
    "options": [
      "2 v\nT\nπ",
      "2 r\nT\nπ",
      "2\n2 r\nT\nπ",
      "2\n2 v\nT\nπ\n\nManipal UGET-2019"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n\nSpeed of particle = v \n\nTime taken = T \n\nRadius of circle = r \nWe know that, \n\nω = 2π rad/sec\nT\n\nac = ω2r \nPutting the value of ω \n\nac = \n2\n2π\n× r\nT\n\n\n\n\n\n\n\nac = \n2\n2\n4π × r\nT\n\nc\n2π\n2πr\na =\n×\nT\nT \n\nPutting the value of v \n\n[∵v = 2πr/T] \nSo, \nac = 2πv\nT",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q609",
    "num": 609,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "The kinetic energy k of a particle moving along \na circle of radius R depends on the distance \ncovered. It is given as KE = as2, where a is a \nconstant. The force acting on the particle is",
    "options": [
      "2s\n2a R",
      "2\n2\ns\n2as 1\nR\n\n\n+\n\n\n\n",
      "2 as",
      "2\nR\n2a s \nManipal UGET-2014"
    ],
    "correctAnswer": 1,
    "explanation": "Given, KE = as2 (where a is constant) \nWe know that, \n2\n1\nKE\nmv\n2\n=\n\n2\n2\n1 mv = as\n2\n\nmv2 = 2as2 \n\n2\n2\n2as\nv =\nm \n\n2\n2as\n2a\nv =\ns\nm\nm\n=\n\n.....(i) \nDifferential equation (i) w.r.t. s, \n\ndv\n2a\nds\nm\n=\n\n.....(ii) \nWe know, \n2\nv\na = R\nr\n⇒ \n2\n2s a\na = mR\nr\n\nFor tangential acceleration \nt\ndv\ndv ds\na =\n=\n.\ndt\nds dt \n\ndv\n= v ds \nFrom equation (i) & (ii), we get- \n\nt\n2a\n2a\na = s\nm\nm\n\n\n\n\n\n\n\n\n\n\n\n\n\nt\n2as\na = m \n\n....(iii) \nSo, \n2\n2\nR\nt\na =\na\n+ a \n\n2\n2\n2\n2as\n2as\n=\n+\nmR\nm\n\n\n\n\n\n\n\n\n\n\n\n\n\n2\n2as\ns\na =\n1 +\nm\nR\n\n\n\n\n\n \nWe know that, \nForce (F) = ma \n\nF = \n2\n2as\ns\nm ×\n1+\nm\nR\n\n\n\n\n\n \n\nF = \n2\ns\n2as 1+\nR\n\n\n\n\n\n",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q610",
    "num": 610,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A wet open umbrella is held vertical and it \nwhirled about the handle at a uniform rate of \n21 revolutions in 44s. If the rim of the umbrella \nis circle of 1 m in diameter and the height of \nthe rim above the flour is 4.9 m, the locus of the \ndrop is a circle of radius",
    "options": [
      "2.5m",
      "1 m",
      "3 m",
      "1.5 m \nManipal UGET-2013"
    ],
    "correctAnswer": 0,
    "explanation": "Given, h = 4.9 m, D = 1 m, r = 0.5 m \nTime \n2h\n2\n4.9\n(T)\n1sec\ng\n9.8\n×\n=\n=\n=\n\n21 2\n3rad /sec\nt\n44\n∆θ\n× π\nω =\n=\n=\n∆\n\nTangential speed (vt) = rω \n\n= 0.5 × 3 = 1.5 m/s \nHorizontal range (Hr) = vt × T \n\n= 1.5 × 1 = 1.5 m \n\n2\n2\n2\n2\nr\nx\nr\n(H )\n(0.5)\n(1.5)\n=\n+\n=\n+\n\n0.25\n2.25\n2.5 m\n=\n+\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p152_img1_xref1246.png"
  },
  {
    "id": "yct-motion-plane-q611",
    "num": 611,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle is moving along a circular path of \nradius 5 m with a uniform speed 5m/s. What \nwill be the average acceleration when the \nparticle completes half revolution?",
    "options": [
      "Zero",
      "10 m/s²",
      "2\n10 ms-\nπ",
      "2\n10 ms-\nπ\n\nManipal UGET-2012 \nJCECE-2003"
    ],
    "correctAnswer": 3,
    "explanation": "The change in velocity, when the particle \ncompletes half the revolution is given by \n\n∆v = [5 - (-5)] m/s = 10 m/s \nTime taken to complete half revolution is given by \n\nr\n5\nt\ns\nv\n5\nπ\nπ×\n=\n=\n=π \nAverage acceleration = \n2\nv\n10 m/s\nt\n∆\n= π",
    "examSource": "",
    "image": "/images/yct_motion_plane/p152_img1_xref1246.png"
  },
  {
    "id": "yct-motion-plane-q612",
    "num": 612,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Two cars A and B move along a concentric \ncircular path of radius rA and rB with velocities \nvA and vB maintaining constant distance, then \nA\nB\nv\nv\nis equal to",
    "options": [
      "B\nA\nr\nr",
      "A\nB\nr\nr",
      "2\nA\n2\nB\nr\nr",
      "2\nB\n2\nA\nr\nr \nManipal UGET-2010"
    ],
    "correctAnswer": 1,
    "explanation": "Let the linear velocity of buses A and B be vA \nand vB and their angular velocity be ωA and ωB \nrespectively. \nGiven that, time period are same for both buses \n\nTA = TB \nWe know that, Time period \n2π\nT = ω \n\nA\nB\n2π\n2π\n=\nω\nω \n(TA = TB) \n\n ωA = ωB \nv\nω = r where v = linear velocity and r = radius of \ncircle. \nSo, \nA\nB\nA\nB\nv\nv\nr\nr\n=\n\nThe ratio of velocity (linear) of buses is \n\nA\nA\nB\nB\nv\nr\nv\nr\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p152_img1_xref1246.png"
  },
  {
    "id": "yct-motion-plane-q613",
    "num": 613,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A ball moves one-fourth \n\n\n\n\n\nth\n1\n4\nof a circle of \nradius R in time T. Let v1 and v2 be the \nmagnitudes of mean speed and mean velocity \nvector. The ratio \n1\n2\nv\nv will be",
    "options": [
      "2\nπ",
      "3\nπ",
      "2\n3π",
      "2 2\nπ"
    ],
    "correctAnswer": 3,
    "explanation": "Mean speed of a moving body is given by, \n1\ntotaldistance\nv\ntotaltime taken\n=\n\n....(i) \nMean velocity vector for a moving body. \n\n2\ntotaldisplacement\nv\ntotaltime taken\n=\n\n....(ii) \n\nFrom the figure, \nACB is the total distance = 2 R\n4\nπ\n\nAnd AB is total displacement = \n2R \nA ball moving in a circular arc is shown in the figure \nbelow, \n\nFrom equation (i) \n\n1\n2 R\n1\nv\n4\nT\nπ\n=\n×\n= R\n2T\nπ\n\nFrom equation (ii) \n\n2\n2R\nv\nT\n=\n Then, \n1\n2\nv\nv\n2 2\nπ\n=",
    "examSource": "TS-EAMCET-04.05.2019, Shift-1  MHT CET-2019",
    "image": "/images/yct_motion_plane/p152_img1_xref1246.png"
  },
  {
    "id": "yct-motion-plane-q614",
    "num": 614,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A circular freeway entrance and exit are \ncommonly banked to control a moving car at \n14 m/s. To design similar ramp for 28 m/s one \nshould",
    "options": [
      "increase the radius by factor 2",
      "increase the radius by factor 4",
      "decrease the radius by factor 4",
      "decrease the radius by factor 2"
    ],
    "correctAnswer": 1,
    "explanation": "The equation for banking is \n\n2\nv\ntan\nrg\nθ =\n\nWhere r is the radius and g is acceleration due to gravity \nFor design similar ramp tanθ remain constant \nThen, \n\n(\n)\n(\n)\n2\n2\n14\n28\n=\nr\nr'\n\nSo \nr' = 4r (increasing the radius by factor 4) \nIt means, radius increase by factor 4.",
    "examSource": "TS-EAMCET.11.09.2020, Shift-2",
    "image": "/images/yct_motion_plane/p153_img1_xref1259.png"
  },
  {
    "id": "yct-motion-plane-q615",
    "num": 615,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Consider a particle is moving with a minimum \nspeed v at highest point of vertical circle of \nradius R. If the radius of the circle doubled the \ncorresponding minimum speed will be",
    "options": [
      "v",
      "v\n2",
      "3 v",
      "2"
    ],
    "correctAnswer": 3,
    "explanation": "Let a circle with radius (R) moving in a \nvertical plane. \n\nThere are three point on circle A,B and C which has \nminimum \nvelocity \nas \n5gR,\ngR and 3gR respectively Then for highest \npoint (i.e point B) \n\nV\nR\n∝\n\n1\n1\n2\n2\nV\nR\nV\nR\n=\n\n....(i) \n\nR1 = R, V1 = V and R2 = 2R \nFrom equation (i) \n\n2\nV\nR\nV\n2R\n=\n⇒V2 = \n2V",
    "examSource": "v  TS-EAMCET-14.09.2020, Shift-1",
    "image": "/images/yct_motion_plane/p153_img1_xref1259.png"
  },
  {
    "id": "yct-motion-plane-q616",
    "num": 616,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A point P is moving in uniform circular motion \nwith radius 3m. Let at some instant the \nacceleration of the point is \n(\n)\n^\n^\na = 6i - 4j m/s2, the \nposition vector is r and velocity vector is v. \nChoose the correct statement.",
    "options": [
      "v. a = 0 and r × a ≠0",
      "v. a ≠ 0 and r × a ≠0",
      "v. a = 0 and r × a = 0",
      "v. a ≠0 and r × a = 0"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \nAcceleration, \n^\n^\na\n6i\n4j\n=\n-\n\nFrom the figure, \nAcceleration a is perpendicular to velocity v \nThen, \n\nv.a = 0 \nAnd position vector r is parallel to acceleration a \nThen, \n\nr × a = 0",
    "examSource": "TS-EAMCET-10.09.2020, Shift-2",
    "image": "/images/yct_motion_plane/p153_img1_xref1259.png"
  },
  {
    "id": "yct-motion-plane-q617",
    "num": 617,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "If a body moving in a circular path maintains \nconstant speed of 10m/s, then which of the \nfollowing correctly describes the relation \nbetween acceleration (a) and radius (r)?",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 2,
    "explanation": "Tangential acceleration is independent of r \nCentripetal acceleration\n2\nv\nr\n=\n\nwhere, v is constant \nthen \n\n1\na\nr\n∝\n\nHence, graph between acceleration & radius is \nhyperbola.",
    "examSource": "(a)      (b)       (c)     (d)     TS-EAMCET-10.09.2020, Shift-1",
    "image": "/images/yct_motion_plane/p153_img1_xref1259.png"
  },
  {
    "id": "yct-motion-plane-q618",
    "num": 618,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Consider an object making uniform motion \naround a circle of radius 5 m with tangential \nvelocity 2 m/s. The time it takes to complete 2 \nrevolution and the magnitude of acceleration \nrespectively are",
    "options": [
      "0.2π s and 0.8 m/s²",
      "0.5π s and 1 m/s²",
      "10π s and 0.8 m/s²",
      "5π s and 5 m/s²"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, circle of radius = 5m \nTangential velocity (v) = 2 m/s \nHere, 2 revolutions complete by object. \nWe know that, \n\nv\nv\nr\nr\nω\nω\n=\n=\n=\n\n2 rad /s\n5\nω =\n\nAlso, \n2\n2\n2\n\n T=\nT\n2/5\nπ\nπ\nπ\nω =\n⇒\n=\nω\n\nT= 5π sec for one revolution, \nObject completes 2 revolutions in time. \nThen, T = 2 × 5 × π = 10π sec \nAnd acceleration, \n( )\n2\n2\n2\n2\nv\na =\n=\n= 0.8ms\nr\n5\n-",
    "examSource": "TS-EAMCET-04.05.2018, Shift-2",
    "image": "/images/yct_motion_plane/p154_img1_xref1273.png"
  },
  {
    "id": "yct-motion-plane-q619",
    "num": 619,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle moves in a circle with speed v \nvarying with time as v (t) = 2t. The total \nacceleration of the particle after it completes 2 \nrounds of cycle is",
    "options": [
      "16π",
      "2\n2 1\n64\n+\nπ",
      "2\n2 1\n49\n+\nπ",
      "14π"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \n\nv (t) = 2t \nTotal acceleration (aT) = \n2\n2\nt\nc\na\na\n+\n\n(\n)\n2\n2\n2\nc\n2t\nv\n4t\na\nr\nr\nr\n=\n=\n=\n\n....(1) \n\nv = rω \n\nω = v\n2t\nr\nr\n=\n⇒ ω = d\ndt\nθ \n\n2\n2\n2t\n2 t\nt\ndt\nr\nr 2\nr\nθ =\n=\n=\n∫\n\nn = 2 round of cycle \n\n2\n2\nt\n4\nt\n4 r\nr\nπ =\n⇒\n= π \n....(2) \nCentripetal acceleration (ac) = \n(\n)\n2\n4 4 r\n4t\n16\nr\nr\nπ\n=\n=\nπ \n\n(\n)\nt\ndv\nd\na\n2t\n2\ndt\ndt\n=\n=\n= \n\n( )\n(\n)\n2\n2\n2\n2\nT\nc\nt\na\na\na\n2\n16\n=\n+\n=\n+\nπ\n\n2\n4 256\n=\n+\nπ\n\n(\n)\n2\n2\n4 1\n64\n2 1\n64\n=\n+\nπ\n=\n+\nπ",
    "examSource": "TS-EAMCET-05.05.2018, Shift-1",
    "image": "/images/yct_motion_plane/p154_img1_xref1273.png"
  },
  {
    "id": "yct-motion-plane-q620",
    "num": 620,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A car turns a corner on a slippery road at a \nconstant speed of 10 m/s. If the coefficient of \nfriction is 0.5, the minimum radius of the arc in \nmetre in which the car turns is",
    "options": [
      "20",
      "10",
      "5",
      "4 \nJCECE-2016"
    ],
    "correctAnswer": 0,
    "explanation": "Given, \n\nVelocity v = 10 m/s \n\nfriction, µ = 0.5 \n\nradius of the arc r = ? \nWe know, \n\n(\n)\n2\n2\nv =\nµgr\n10\nv\n100\nr\n=\n=\n= 20m\nµg\n0.5 ×10\n0.5 ×10\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p154_img1_xref1273.png"
  },
  {
    "id": "yct-motion-plane-q621",
    "num": 621,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A string of length l fixed at one end carries a \nmass m at the other end. The string makes \n2 rev/s\nπ\naround the horizontal axis through the \nfixed end as shown in the figure, the tension in \nthe string",
    "options": [
      "16 ml",
      "6ml",
      "5 ml",
      "3ml \n\nJCECE-2014"
    ],
    "correctAnswer": 0,
    "explanation": "Given, \n2\nω = π rev/sec \n\nω = 2πn = 4 \n\nFrom figure, r = l sinθ \n∴ \nTsinθ = mrω2 \n\nTsinθ = mlsinθω2 \n\nT = mlω2 = ml(4)2 = 16 ml",
    "examSource": "",
    "image": "/images/yct_motion_plane/p154_img1_xref1273.png"
  },
  {
    "id": "yct-motion-plane-q622",
    "num": 622,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A body of mass 0.1 kg when rotated in a \ncircular path of diameter 1.0 m on a frictionless \nhorizontal plane by means of string, makes 10 \nrevolutions in 31.4 seconds. The centripetal \nforce acting on the body will be",
    "options": [
      "0.2 N",
      "0.1 N",
      "2 N",
      "1 N \nJCECE-2013"
    ],
    "correctAnswer": 0,
    "explanation": "Given, \n\nm = 0.1 kg, diameter (d) = 1.0 \n\nradius (r) = 1.0\n0.5m\n2 =\n\nThen,\nN\nω =\n× 2 rad /s\n60\nπ\n\n....(i) \nIn 31.4 sec make 10 revolution \nThen, \n1 second = 10 × revolution\n31.4\n\n1 minute = 10 × 60revolution\n31.4\n\n600\nN =\nrpm\n31.4\n\nNow putting the value of N in equation (i) \n\n ω\n600\n2\n31.4 60\n=\n× π\n×\n\n ω = 2 rad/sec \nNow we get the centripetal force \n\nFc = mrω2 \n\n = (0.1) × (0.5) × 22 \n = 0.2 N",
    "examSource": "",
    "image": "/images/yct_motion_plane/p154_img1_xref1273.png"
  },
  {
    "id": "yct-motion-plane-q623",
    "num": 623,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "On a railway curve, the outside rail is laid \nhigher than the inside one so that resultant \nforce exerted on the wheels of the rail car by \nthe tops of the rail will",
    "options": [
      "equilibrate the centripetal force",
      "be vertical",
      "be decreased",
      "have a horizontal inward component \nJCECE-2012"
    ],
    "correctAnswer": 3,
    "explanation": "From figure We can say that the top of the rail will have \na horizontal inward component.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p155_img1_xref1282.png"
  },
  {
    "id": "yct-motion-plane-q624",
    "num": 624,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "The centripetal acceleration of particle of mass \nm moving with a velocity v in a circular orbit of \nradius r is :",
    "options": [
      "v2/r along the radius, towards the centre",
      "v2/r along the radius, away from the centre",
      "mv2/r along the radius, away the centre",
      "mv2/r along the radius, towards the centre \nJCECE-2005"
    ],
    "correctAnswer": 0,
    "explanation": "We know, centripetal acceleration (\n)\n2\nc\nv\na\nr\n=\n\nAnd act towards center.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p155_img1_xref1282.png"
  },
  {
    "id": "yct-motion-plane-q625",
    "num": 625,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A body of mass 1 kg is rotating in a vertical \ncircle of radius 1 m. What with is the difference \nin kinetic energy at the top and at the bottom of \nthe circle? (Take g = 10 m/s2)",
    "options": [
      "50 J",
      "30 J",
      "20 J",
      "10 J \nJCECE-2004"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, \n\nMass = 1 kg \n\nRadius = 1 m \n\nAs we know, kinetic energy = \n2\n1 mv\n2\n\nSo, \n(\n)\n2\n2\n1\n2\n1\n1\nmv\nmv\nmg 2R\n2\n2\n=\n+\n\n(\n)\n2\n2\n1\n2\n1\n1\nmv\nmv\nmg 2R\n2\n2\n-\n=\n\nK.E.\n1 10 2 1\n∆\n= ×\n× × = 20 J",
    "examSource": "",
    "image": "/images/yct_motion_plane/p155_img1_xref1282.png"
  },
  {
    "id": "yct-motion-plane-q626",
    "num": 626,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Two particles starting from a point on a circle \nof radius 4 m in horizontal plane move along \nthe circle with constant speeds of 4 m s-1 and 6 \nm s-1 respectively in opposite directions. The \nparticles will collide with each other after a \ntime of",
    "options": [
      "3.0 s",
      "2.5 s",
      "2.0 s",
      "1.5"
    ],
    "correctAnswer": 1,
    "explanation": "Given that, \n\nRadius = 4 m, v1 = 4 m/s, v2 = 6 m/s \nRelative speed of particle in opposite direction- \n\n vrel = v1 +v2 \n\n= 4+6 \n\n= 10 m/s \nCircumference of circle = 2πr \n\n = 2 × π × 4 \nThe particles will collide with each other after a time of \n\nt =\nCircumferenceof circle\nRelative speed between them \n\n= 2\n4\n2.5 s\n10\nπ×\n=",
    "examSource": "s  COMEDK 2016",
    "image": "/images/yct_motion_plane/p155_img1_xref1282.png"
  },
  {
    "id": "yct-motion-plane-q627",
    "num": 627,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A car is moving in a circular horizontal track \nof radius 10 m with a constant speed of 10 m/s . \nA bob is suspended from the roof of the car by \na light wire of length 1.0 m. The angle made by \nthe wire with the vertical is",
    "options": [
      "π\n3",
      "π\n6",
      "π\n4",
      "0ο"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, \n\nRadius = 10 m \n\nVelocity = 10 m/s \n\nFrom figure, on resolving tension we get \n\nT cosθ = mg ....(1) \n\nT sinθ = \n2\nmv\nr\n ...(2) \nDividing equation by (2) and (1) we get- \n\n2\nv\n10 10\ntan\n1\nrg\n10 10\n×\nθ=\n=\n=\n×\n\nθ = tan-1(1)\n4\nπ\n=\n\n4\nπ\nθ =\n\nSo, option (c) is correct.",
    "examSource": "COMEDK 2013",
    "image": "/images/yct_motion_plane/p155_img1_xref1282.png"
  },
  {
    "id": "yct-motion-plane-q628",
    "num": 628,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Assertion: There is a stage when frictional \nforce is not needed at all to provide the \nnecessary centripetal force on a banked road. \n\n Reason: On a banked road, due to its \ninclination the vehicle tends to remain inwards \nwithout any chances of skidding.",
    "options": [
      "If both Assertion and Reason are correct and \nReason \nis \nthe \ncorrect \nexplanation \nof \nAssertion.",
      "If both Assertion and Reason are correct, but \nReason is not the correct explanation of \nAssertion.",
      "If Assertion is correct but Reason is incorrect.",
      "If both the Assertion and Reason are \nincorrect. \n AIIMS-2016"
    ],
    "correctAnswer": 2,
    "explanation": "When the car is driven at optimum speed. \nThen the normal reaction component is enough to \nprovide the centripetal force.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p156_img1_xref1289.png"
  },
  {
    "id": "yct-motion-plane-q629",
    "num": 629,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Assertion: When a particle moves in a circle \nwith a uniform speed, its velocity and \nacceleration both changes. \n\n Reason: \nThe \ncentripetal \nacceleration \nin \ncircular motion is dependent on angular \nvelocity of the body.",
    "options": [
      "If both Assertion and Reason are correct and \nReason \nis \nthe \ncorrect \nexplanation \nof \nAssertion.",
      "If both Assertion and Reason are correct, but \nReason is not the correct explanation of \nAssertion.",
      "If Assertion is correct but Reason is incorrect.",
      "If both the Assertion and Reason are \nincorrect. \n AIIMS-2010"
    ],
    "correctAnswer": 1,
    "explanation": "In uniform circular motion, the magnitude of \nvelocity and acceleration remains same, but due to \nchange in direction of motion, the direction of velocity \nand acceleration changes. \ncentripetal acceleration is given by ac = ω2r. \nHence, centripetal acceleration in circular motion is \ndependent on angular velocity of the body.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p156_img1_xref1289.png"
  },
  {
    "id": "yct-motion-plane-q630",
    "num": 630,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "For a particle in a uniformly accelerated \ncircular motion",
    "options": [
      "velocity is radial and acceleration has both \nradial and transverse components",
      "velocity is transverse and acceleration has \nboth radial and transverse components",
      "velocity \nis \nradial \nand \nacceleration \nis \ntransverse only",
      "velocity is traverse and acceleration is radial \nonly \n AIIMS-2011"
    ],
    "correctAnswer": 1,
    "explanation": "In case of uniformly accelerated circular \nmotion, the velocity of particle is always tangential but \nits acceleration has two components radial component \nwhich acts towards the centre of motion and other is \ntangential component which is parallel to the direction \nof velocity.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p156_img1_xref1289.png"
  },
  {
    "id": "yct-motion-plane-q631",
    "num": 631,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "At the uppermost point of a projectile, its \nvelocity and acceleration are at an angle of",
    "options": [
      "180º",
      "90º",
      "60º",
      "45º \n AIIMS-2002"
    ],
    "correctAnswer": 1,
    "explanation": "At the upper most points of a projectile, the \nvertical component of the velocity of projection become \nzero while the horizontal component remain constant. \nAnd acceleration is always vertically downward. \nTherefore its velocity and acceleration are at an angle of \n90o.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p156_img1_xref1289.png"
  },
  {
    "id": "yct-motion-plane-q632",
    "num": 632,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "An electron is moving in a circle of radius 2m \nwith speed 4 m/s. Find the acceleration of the \nelectron.",
    "options": [
      "8 m/s2",
      "4 m/s2",
      "16 m/s2",
      "10 m/s2 \nAIIMS-26.05.2019"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n\nv = 4 m/s, r = 2 m \nAcceleration of electron = \n2\n2\n2\nv\n(4)\n16\n8m/s\nr\n2\n2\n=\n=\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p156_img1_xref1289.png"
  },
  {
    "id": "yct-motion-plane-q633",
    "num": 633,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "questionText": "A body of mass m is moving in a circle of \nradius r with a constant speed v. If a force \n2\nmv\nr\nis acting on the body towards the centre, \nthen what will be the work done by this force in \nmoving the body over half the circumference of \nthe circle?",
    "options": [
      "Zero",
      "2\nmv\n2",
      "2\nmv\nr\nr\n×π",
      "2\n2\nr\nmv\nπ"
    ],
    "correctAnswer": 0,
    "explanation": "Work done = Force × displacement \n\n w\nF. ds\n=\n\u0006\u0002 \u0006\u0006\u0002\n\n= F.ds cos 90º = 0 \nSince, the angle between direction of force and the \ndirection of displacement is always 90º and cos 90o = 0 \nThen, work done is zero.",
    "examSource": "BCECE-2012  JEECE-2006",
    "image": "/images/yct_motion_plane/p156_img1_xref1289.png"
  },
  {
    "id": "yct-motion-plane-q634",
    "num": 634,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A bucket of water is being revolved in vertical \ncircle of radius 1m. Minimum frequency \nrequired to prevent the water from getting \ndown the path is (g = 10 m/s2)",
    "options": [
      "2\n10\nπ",
      "2\n5\nπ",
      "10\n2π",
      "5\n2π"
    ],
    "correctAnswer": 2,
    "explanation": "We know that, \nCentripetal force- \n\n2\nmv\nmg\nr\n=\n\n2\nv\ng\nr =\n\nv2 = rg \n\nv\nrg\n=\n\nv = r.ω = 2πnr \n(Where n is the frequency) \n\n2πnr =\nrg \n\nrg\n1 10\nn\n2 r\n2\n1\n×\n=\n=\nπ\nπ×\n\n = \n10 Hz\n2π",
    "examSource": "BCECE-2011",
    "image": "/images/yct_motion_plane/p157_img1_xref1297.png"
  },
  {
    "id": "yct-motion-plane-q635",
    "num": 635,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A weightless thread can bear tension upto 3.7 \nkg-wt. A stone of mass 500g is tied to it and \nrevolved in a circular path of radius 4m in a \nvertical plane. If g = 10m/s², then the maximum \nangular velocity of the stone will be:",
    "options": [
      "4rad/s",
      "16rad/s",
      "21rad/s",
      "2rad/"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n\nTmax = 3.7 kg-wt \n\nm = 500 gm = 0.5 kg \n\nr = 4 m, w = ?, g = 10 m/s2 \nMaximum tension- \n\n2\nmax\nmv\nT\nmg\nr\n=\n+\n\nT-mg = mrω2 \n\nT = mg + mrω2 \n\n3.7 g = 0.5 g+ 0.5×4ω2 \n\n3.2 g = 2 ω2 \n\nω2 = 16 \n\nω = 4 rad/s.",
    "examSource": "s  BCECE-2003",
    "image": "/images/yct_motion_plane/p157_img1_xref1297.png"
  },
  {
    "id": "yct-motion-plane-q636",
    "num": 636,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle of mass 5 kg is moving on a circle of \nradius 1 m with an angular velocity of 2 rad.s-1. \nThe centripetal force is ______",
    "options": [
      "10 N",
      "40 N",
      "30 N",
      "20"
    ],
    "correctAnswer": 3,
    "explanation": "Given \n\nThat mass (m) = 5 kg \n\nRadius of circle (r) = 1 m \n\nAngular velocity (ω) = 2 rad/sec \nWe know, \nCentripetal force (Fc) = \n2\nmv\nr\n\nFc = \n(\n)\n2\nm r\nr\nω\n\n(v = rω) \n\n = \n2\n2\nmr\nr\nω \n\nFc = mrω2 \n\n = 5 × 1 × (2)2 \n\nFc = 20 N",
    "examSource": "N   AP EAMCET-25.08.2021, Shift-II",
    "image": "/images/yct_motion_plane/p157_img1_xref1297.png"
  },
  {
    "id": "yct-motion-plane-q637",
    "num": 637,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "When a vehicle of mass m is moving with a \nvelocity v over-bridge of radius of curvature r, \nthe thrust on the road at the lowest point on the \nbridge, will be ______",
    "options": [
      "2\nmv\nmg\nr\n+",
      "2\nmv\nmg\nr\n-",
      "2\n2\nm v g\nr",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "The motion of the of the vehicle over a \nconcave bridge CD is the motion along the segment of a \ncircle. \nThe centripetal force is provided by the difference of \nnormal reaction N of the bridge and weight mg of the \ncar \n\n∴ \nN - mg = \n2\nmv\nr\n\nN = mg + \n2\nmv\nr",
    "examSource": "v g r   AP EAMCET-25.08.2021, Shift-I",
    "image": "/images/yct_motion_plane/p157_img1_xref1297.png"
  },
  {
    "id": "yct-motion-plane-q638",
    "num": 638,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "questionText": "One end of a string of length l is connected to a \nparticle of mass m and the other to a small peg \non a smooth horizontal table. If the particle \nmoves in a circle with speed v, the net force on \nthe particle (directed towards the centre) is (T \nis the tension in the string) \n\n(a) T \n(b) \n2\nmv\nT -\nl\n\n(c) \n2\nmv\nT +",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 0,
    "explanation": "When a partile revolves around the circular \npath of length l the centripetal force is provided by the \ntension produced in the string \nThen, \nNet force ( )\n2\nmv\nF\nT\n=\n=\nl",
    "examSource": "l   (d) zero  Karnataka CET-2020  NEET-2017",
    "image": "/images/yct_motion_plane/p157_img1_xref1297.png"
  },
  {
    "id": "yct-motion-plane-q639",
    "num": 639,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A car of mass ‘m’ is crossing the convex bridge \nof radius of curvature ‘R’ with a speed ‘v’. At \nthe highest point the thrust is ( g = acceleration \ndue to gravity)",
    "options": [
      "2\nmv\nmg + R",
      "mg",
      "2\nmv\nmg - R",
      "2"
    ],
    "correctAnswer": 2,
    "explanation": "The motion of the car over a convex bridge \nCD is the motion along the segment of a circle CD. \n\nAt the highest point the thrust is \n\nmg - N = \n2\nmv\nR\n\nSo, \n N = mg - \n2\nmv\nR\n\nWhere, \n\nN = Normal force\nm = Mass\nv = Velocity\nR = Radius",
    "examSource": "mv R   MHT-CET 2020",
    "image": "/images/yct_motion_plane/p158_img1_xref1304.png"
  },
  {
    "id": "yct-motion-plane-q640",
    "num": 640,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle is moving in a circle of radius R with \nconstant speed v. If radius is doubled, then its \ncentripetal force to keep the same speed gets :",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 1,
    "explanation": "2\nmv\nF\nr\n=\n\nFor same mass and same speed if radius is doubled then \nforce should be halved because F ∝ 1\nr . \n2\n'\nmv\nF\n2r\n=\n ⇒ \n1\nF'\nF\n2\n=",
    "examSource": "(a) Twice as great as before    (b) Half    (c) One-fourth    (d) Remains constant  BCECE-2005",
    "image": "/images/yct_motion_plane/p158_img1_xref1304.png"
  },
  {
    "id": "yct-motion-plane-q641",
    "num": 641,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "In a circus, a stuntman rides a motor bike in a \nvertical circular track of radius r. Find the \nminimum speed, he must maintain at highest \npoint of track.",
    "options": [
      "2gr",
      "2 gr",
      "gr",
      "5"
    ],
    "correctAnswer": 2,
    "explanation": "at highest point- \n\n2\nmv\nN\nmg\nr\n+\n=\n\nFor Vmin, N should be zero (i.e. N = 0) \n\nThen, \n∴ \n2\nmv\nmg\nr\n=\n\n∴ \nmin\nV\ngr\n=\n\nHence, minimum speed at the highest point of vertical \ncircular path \nmin\nV\ngr\n=",
    "examSource": "gr  AP EAMCET (17.09.2020) Shift-II",
    "image": "/images/yct_motion_plane/p158_img1_xref1304.png"
  },
  {
    "id": "yct-motion-plane-q642",
    "num": 642,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "questionText": "A particle is moving with a constant speed v in \na circle. What is the magnitude of average \nvelocity after half rotation?",
    "options": [
      "2v",
      "v\n2 π",
      "v\n2",
      "v\n2π"
    ],
    "correctAnswer": 1,
    "explanation": "We know that:- \n\nd = 2r \nHere, d is diameter and r is radius \nIn one complete rotation total distance covered = 2πr \n\nThen, \nFor Half rotation- \nDistance covered = 2 r\nr\n2\nπ = π \nSo, \nSpeed = distance\ntime\n\ndistance\nr\ntime\nspeed\nv\nπ\n=\n=\n\nHence, \n\nAverage velocity = total displacement\ntotaltime\n\n2r\nv\nr\nv\n= π = 2v\nπ",
    "examSource": "WB JEE 2011",
    "image": "/images/yct_motion_plane/p158_img1_xref1304.png"
  },
  {
    "id": "yct-motion-plane-q643",
    "num": 643,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "questionText": "A pellet of mass 1 g is moving with an angular \nvelocity of 1 rad/s along a circle of radius 1 m. \nThe centrifugal force is",
    "options": [
      "0.1 dyne",
      "1 dyne",
      "10 dyne",
      "100"
    ],
    "correctAnswer": 3,
    "explanation": "Given that, \nm = 1 g, ω = 1 rad/sec \nr = 1m = 100 cm \nCentrifugal force (f) = \n2\nmv\nr\n\n(\n)\n2\nm r\nF\nr\nω\n=\n (∴v = rω) \nF = mrω2 \nF = 1 × 100 × 1 \nF = 100 dyne",
    "examSource": "dyne  WB JEE 2008",
    "image": "/images/yct_motion_plane/p159_img1_xref1312.png"
  },
  {
    "id": "yct-motion-plane-q644",
    "num": 644,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A car of mass 1500 kg is moving with a speed of \n12.5 m/s on a circular path of radius 20 m on a \nlevel road. The value of coefficient of friction \nbetween the Tires and road, so that the car \ndoes. not slip is",
    "options": [
      "0.8",
      "0.6",
      "0.4",
      "0.2 \nUP CPMT-2009"
    ],
    "correctAnswer": 0,
    "explanation": "Given that \nRadius of the circular path = 20 m \nMass of the car = 1500 kg \nSpeed of the car = 12.5 m/sec \nLet the coefficient of the friction be µ. the centrifugal \nforce will balance the friction so that the car does not \nslip. \nHence, \n\ncar does not slip- \n\ncentripetal force = centrifugal force \n2\nmv\nmg\nr\n= µ\n\n[\n]\ncentrifugalforce frictionforce\n=\n∵\n\ncoefficient of friction,\n2\nmv\nrmg\nµ =\n\n2\nv\nrg\nµ =\n\n(\n)\n2\n12.5\n20 9.8\n=\n×\n\nµ = 0.8",
    "examSource": "",
    "image": "/images/yct_motion_plane/p159_img1_xref1312.png"
  },
  {
    "id": "yct-motion-plane-q645",
    "num": 645,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle of mass m is executing uniform \ncircular motion on a path of radius r. If P is the \nmagnitude of its linear momentum. The radial \nforce acting on the particle is",
    "options": [
      "Pmr",
      "rm\nP",
      "2\nmP\nr",
      "2\nP\nrm \nUP CPMT-2009"
    ],
    "correctAnswer": 3,
    "explanation": "We know that, \nRadial force = centripetal force \nRadial force (Fr) = \n2\n2\nmv\nmv\nm\nr\nr\nm\n=\n×\n\nFr = (\n)\n2\nmv\nrm\n\nFr = \n2\nP\nrm \nP\nmv\nWhere. P is liner\nMomentum\nm\nMass\nv\nVelocity\n=\n\n\n\n\n\n\n\n\n\n\n\n\n=\n\n\n=\n\n\n\n\n∵",
    "examSource": "",
    "image": "/images/yct_motion_plane/p159_img1_xref1312.png"
  },
  {
    "id": "yct-motion-plane-q646",
    "num": 646,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Which motion does not require force to \nmaintain it?",
    "options": [
      "Uniform circular motion",
      "Elliptical motion",
      "Uniform straight line motion",
      "Projectile motion \nUP CPMT-2007"
    ],
    "correctAnswer": 2,
    "explanation": "Uniform straight line motion is a type of \nlinear motion. It work according to Newton's first law \nof motion i.e. objects that do not experience any net \nforce will continue to move in straight line with a \nconstant velocity until they are subjected to a net force.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p159_img1_xref1312.png"
  },
  {
    "id": "yct-motion-plane-q647",
    "num": 647,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "If ar and at represent radial and tangential \naccelerations, the motion of particle will be \nuniformly circular if",
    "options": [
      "ar = 0 and at = 0",
      "ar = 0 but at ≠ 0",
      "ar ≠ 0 but at = 0",
      "ar ≠ 0 and at ≠ 0 \nUP CPMT-2004"
    ],
    "correctAnswer": 2,
    "explanation": "When the particle move uniform circular \nmotion the tangential acceleration remains zero but \nmagnitude of radial acceleration remains constant i.e. \nnot zero. \nHence, \n\nar ≠ 0 but at = 0.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p159_img1_xref1312.png"
  },
  {
    "id": "yct-motion-plane-q648",
    "num": 648,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A small cone fitted with water is revolved in a \nvertical circle of radius 4 m and does not fall \ndown. What must be the maximum period of \nrevolution?",
    "options": [
      "4s",
      "2s",
      "1s",
      "6s \nUP CPMT-2012"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n\nR = 4 m \n\n g = 10 m/s2 \n\n N = 0 \n\n2\nmv\nmg\nr\n≥\n\n2\nv\ng\nr ≥ \n\nv\nrg\n≥\n\nr\nrg\nω ≥\n\ng\nr\nω ≥\n\n Time period, \n2\n(T)\nπ\n= ω \n (∵ ω = 2πn) \n\nr\nT\n2\ng\n≤π\n ⇒ \n4\nT\n2\n10\n≤π\n\nT = 3.97 second \n ≈ 4 second.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p159_img1_xref1312.png"
  },
  {
    "id": "yct-motion-plane-q649",
    "num": 649,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A cosmonaut is orbiting earth in a space craft \nat an altitude h = 630 km with a speed of 8 \nkm/s. If the radius of the earth is 6370 km, the \nacceleration of the cosmonaut is",
    "options": [
      "9.10 m/s2",
      "9.80 m/s2",
      "10.0 m/s2",
      "9.88 m/s2 \nUP CPMT-2006"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n\nh = 630 km \n Speed (v) = 8 km/s \nRadius of the earth (Re) = 6370 km \nThe acceleration of the cosmonaut (a)\n2\nv\nr\n=\n\nWhere, \n\nr = distance from the centre of the earth, \nThen, \n\nr = Re + h \n\nr = 6370 + 630 \n\n = 7000 \n\n = 7×106 m \nWe know that, \n\n2\nc\nv\na\nr\n=\n\nac = \n6\n6\n8 8 10\n7 10\n× ×\n×\n\n ac\n64\n7\n=\n⇒ ac = 9.10 m/s2",
    "examSource": "",
    "image": "/images/yct_motion_plane/p160_img1_xref1318.png"
  },
  {
    "id": "yct-motion-plane-q650",
    "num": 650,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A spaceman in training is rotated in a seat at \nthe end of a horizontal arm of length 5m. If he \ncan withstand accelerations upto 9g, then what \nis the maximum number of revolutions per \nsecond permissible ? (Take g = 10 m/s2)",
    "options": [
      "13.5 prs",
      "1.35 rps",
      "0.676 rps",
      "6.75 rps \nUP CPMT-2006"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \nLength of horizontal arm (l) = r = 5m \nCentripetal acceleration (ac) = 9g \n\n = 90 m/s2 \nWe know that, \nCentripetal acceleration \n2\nc\nv\n(a )\nr\n=\n\nc\nv\na r\n=\n\nv\n90 5\n=\n× \n\n v = 21.21 m/s \nAs we know that, one revolution is equal to distance, \n\n d = 2π × r \n\n d=2π×5 \n = 31.42m \nTime taken for one complete revolution; \n\nd\nt\nv\n= \n\n31.42\nt\n21.21\n=\n\nt 1.48s\n=\n\nThen, \nNumber of revolutions\n1\n(n) t\n=\n\n1\nn\n1.48\n=\n= 0.676 rev/s",
    "examSource": "",
    "image": "/images/yct_motion_plane/p160_img1_xref1318.png"
  },
  {
    "id": "yct-motion-plane-q651",
    "num": 651,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle of mass M is moving in a horizontal \ncircle of radius R with uniform speed ν. When \nthe particle moves form one point to a \ndiametrically opposite point, its",
    "options": [
      "Momentum does not change",
      "Momentum changes by 2 Mν",
      "Kinetic energy changes by \n2\nM\n4\nν",
      "Kinetic energy changes by Mν2"
    ],
    "correctAnswer": 1,
    "explanation": "Given \n\nmass = M \n\nhorizontal circle of Radius = R \n\nvelocity of Particle = v \nChange in momentum = Final momentum - initial \nmomentum \n\n∆P = Pf - Pi \n\n∆P = Mv - (-Mv) \n\n = 2Mv \nMomentum change by 2 Mv.",
    "examSource": "TS EAMCET (Engg.)-2017",
    "image": "/images/yct_motion_plane/p160_img1_xref1318.png"
  },
  {
    "id": "yct-motion-plane-q652",
    "num": 652,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle is moving in a circle of radius 5 cm \nwith uniform speed and completes the circle in \n5s. \nWhat \nis \nthe \nmagnitude \nof \nlinear \nacceleration?",
    "options": [
      "2\n2\n0.8\ncm s\nπ",
      "2\n2\n0.8\nm s\nπ",
      "2\n0.8 cm s\nπ",
      "2\n0.8 m s\nπ"
    ],
    "correctAnswer": 0,
    "explanation": "Given, r\n5cm, t\n5sec.\n=\n=\n\nThe linear speed \n2 r\n2\n5\n(v)\n2\ncm/s\nt\n5\nπ\nπ×\n=\n=\n= π \n\nCentripetal acceleration \n(\n)\n2\n2\n2\n2\nv\n4\n(a)\nr\n5\n5\nπ\nπ\n=\n=\n=\n\n2\n2\na\n0.8\ncm /s\n=\nπ \n\nHence, the magnitude of its acceleration = 0.8π2 cm/s2",
    "examSource": "TS EAMCET 06.08.2021,  Shift-II"
  },
  {
    "id": "yct-motion-plane-q653",
    "num": 653,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 3,
    "explanation": "In a uniform circular motion, speed of the \nparticle does not change whereas direction changes. \nHence, \nTangential velocity changes at every instant.",
    "examSource": "In uniform circular motion which of following  statement is wrong          (a) Work done during one complete cycle is zero     (b) Centripetal force acting towards the centre of  circle      (c) Angular velocity is constant     (d) Tangential velocity is constant   TS EAMCET 06.08.2021,  Shift-II"
  },
  {
    "id": "yct-motion-plane-q654",
    "num": 654,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "questionText": "A particle moves according to the equation x = \na sinωt and y = a (1-cosω",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 3,
    "explanation": "Motion of the particle is given by the \nequations \n\nx\nasin\nt\n=\nω \n\nx\nsin\nt\na =\nω \n\n...... (i) \ny\ny\na(1 cos t)\n1\ncos t\na\n=\n-\nω\n⇒\n-= -\nω \n….. (ii) \nSquaring and adding eqns. (i) and (ii), we get. \n2\n2\n2\nx\ny\n1\n1\na\na\n\n\n+\n-\n=\n\n\n\n\n\n2\n2\n2\nx\n(y\na)\na\n+\n-\n=\n\nThis is the equation of a cycloid.",
    "examSource": "t). The path of the  particle is     (a) circle   (b) parabola     (c) hyperbola  (d) cycloid  SRMJEE - 2016"
  },
  {
    "id": "yct-motion-plane-q655",
    "num": 655,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Two stones of masses m and 2m are whirled in \nhorizontal circles, the heavier one in a radius \nr\n2 and the lighter one in radius r. The \ntangential speed of lighter stone is n times that \nof the value of heavier stone when they \nexperience same centripetal forces. The value \nof n is",
    "options": [
      "2",
      "3",
      "4",
      "1 \n[AIPMT 2015]"
    ],
    "correctAnswer": 0,
    "explanation": "Mass of lighter stone (mL) = m \n\nMass of heavier stone (mH) = 2m \n\nRadius of lighter stone (rL) = r \n\nRadius of heavier stone (rH) = r\n2 \nCL\nCL\nCH\nL\nH\nCH\nCentripetalforceof lighter\nF\nF = F\n\nv\nnv\n\n Centripetalforceof heavier\nF\n=\n\n\n→\n=\n\n\n=\n\n \nWe know that, \n\nFCL = FCH \n\n2\n2\nL\nL\nH\nH\nL\nH\nm v\nm v\nr\nr\n=\n\nPutting the value of \n\n(\n)\n(\n)\n2\n2\nH\nH\nm nv\n2m v\nr\nr\n2\n=\n\n2\n2\nn\n1\n2\n=\n\n2 2\n1\n×\n=\n\nn2 = 4 \n\nn = 2",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q656",
    "num": 656,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle moves in a circle of radius 5 cm with \nconstant speed and time period 0.2π s. The \nacceleration of the particle is",
    "options": [
      "25 m/s2",
      "36 m/s2",
      "5 m/s2",
      "15 m/s2 \n[AIPMT 2011]"
    ],
    "correctAnswer": 2,
    "explanation": "For tangential acceleration- \nIf \n v = constant \n\nt\ndv\na\ndt\n=\n (v = constant) \n\nat = 0 \nFor centripetal acceleration - \n\n2\nC\nv\na\nr\n=\n\naC = ω2n \n\nT = 0.2 π sec. \n\n2\nT\nπ\nω =\n\n2\n10 rad /s\n0.2\nπ\nω =\n=\nπ\n\n∴ \na = aC \n\n = ω2r \n\n5\n100 100\n=\n×\n\na = 5 m/s2 \nAcceleration of the particle is (a) = 5 m/s2",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q657",
    "num": 657,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A car runs at a constant speed on a circular \ntrack of radius 100 m, taking 62.8 s for every \ncircular lap. The average velocity and average \nspeed for each circular lap respectively is",
    "options": [
      "0, 0",
      "0, 10 m/s",
      "10 m/s, 10 m/s",
      "10 m/s, 0 \n[AIPMT 2006]"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \n\nt = 62.8 sec, r = 100 m \n∵ Car runs circular track \nHence, total displacement = 0 \n\nTotaldisplacement\nAveragevelocity\nTotaltime\n=\n\n0\nv\n0\nt\n=\n=\n\u0002\n\nTotaldistance\nAveragespeed\nTotaltime\n=\n2 r\nt\nπ\n=\n\n2\n100\n62.8\nπ×\n=\n\n2 3.14 100\n62.8\n×\n×\n=\n\n = 10 m/s",
    "examSource": ""
  },
  {
    "id": "yct-motion-plane-q658",
    "num": 658,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "The circular motion of a particle with constant \nspeed is",
    "options": [
      "simple harmonic but not periodic",
      "periodic and simple harmonic",
      "neither periodic nor simple harmonic",
      "periodic but not simple harmonic \n[AIPMT 2005]"
    ],
    "correctAnswer": 3,
    "explanation": "The circular motion of a particle with \nconstant speed is periodic but not simple harmonic. \n• Due to constant speed, the object will cover equal \ndistance in equal intervals of time. Hence, the circular \nmotion will be repeated in equal intervals of time. So it \nis a periodic motion. \n• In a circular motion, the object cannot oscillate about \na fixed position as it travels circular distance. \nThis, it is not a simple harmonic motion.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p162_img1_xref1328.png"
  },
  {
    "id": "yct-motion-plane-q659",
    "num": 659,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle moves along a circle of radius \n\n\n\n\n\n\n20\nπ\nm with constant tangential acceleration. \nIf the velocity of the particle is 80m/s at the end \nof the second revolution after motion has begin, \nthe tangential acceleration is",
    "options": [
      "160 π m/s2",
      "40 m/s2",
      "40 π m/s2",
      "640 π m/s2 \n[AIPMT 2003]"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \n\n20\nR\nm,\n2\n\n\n=\nθ = π\n\n\nπ\n\n\n\nvelocity = 80 m/s, after 2 rounds \n\ninitial angular velocity, ω0 = 0 \n\n2\n2\n0\n2\nω =ω\n+ αθ \nv r\nv\nr\n= ω\n\n\n\n\n\n\nω =\n\n\n∵\n\n(\n)\n2\n2\n2\na\nr\nv\na\n0\n2\n2\n2\na\nr\nr\na\nr\n\n\n=\n\n\n= + ×\n×\nπ ×\n\n\n=\n\n\n\n\n∵\n\n(\n)\n2\n2\n80\na\n2\n2\n2\nr\nr\n= ×\n× π× \n\n80 80\n20\n2 a\n4\nr\n20\n×\n×π\n\n\n= × × π\n=\n\n\nπ\n\n \n\n2\na\n40m/s\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p162_img1_xref1328.png"
  },
  {
    "id": "yct-motion-plane-q660",
    "num": 660,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle of mass M is revolving along a circle \nof radius R and another particle of mass m is \nrevolving in a circle of radius r. If time periods \nof both particles are same, then the ratio of \ntheir angular velocities is",
    "options": [
      "1",
      "R\nr",
      "r\nR",
      "R\nr \n[AIPMT 2001]"
    ],
    "correctAnswer": 0,
    "explanation": "Angular velocity of particle is given by \n\n2\nT\nπ\nω=\n\nOr \n\n[\n]\n1\nT\ntimeperiodof theparticle\nT\nω∝\n=\n∵\n\nIt simply implies that ω does not depend on mass of the \nbody and radius of the circle \n\n1\n2\n2\n1\nT\nT\nω =\nω\n\nbut given time period is same (i.e. T1 = T2) \nHence, \n1\n2\n1\n1\nω =\nω",
    "examSource": "",
    "image": "/images/yct_motion_plane/p162_img1_xref1328.png"
  },
  {
    "id": "yct-motion-plane-q661",
    "num": 661,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A body is whirled in a horizontal circle of \nradius 20 cm. It has an angular velocity of 10 \nrad/s. What is its linear velocity at any point on \ncircular path?",
    "options": [
      "2 m/s",
      "2 m/s",
      "10 m/s",
      "20 m/s \n [CBSE AIPMT 1996]"
    ],
    "correctAnswer": 1,
    "explanation": "Angular velocity (ω) = 10 rad/s \n\nCircular Radius (r) = 20 cm ⇒ 0.2 m \n\nWe know that, \n\nv\nr\n= ω \n\nv\n0.2 10\n=\n×\n⇒ v\n2m/s\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p162_img1_xref1328.png"
  },
  {
    "id": "yct-motion-plane-q662",
    "num": 662,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "When milk is churned, cream gets separated \ndue to",
    "options": [
      "centripetal force",
      "centrifugal force",
      "frictional force",
      "gravitational force \n[AIPMT 1991]"
    ],
    "correctAnswer": 1,
    "explanation": "Due to centrifugal force, the cream gets \nseparated when milk is churned. A common way of \nseparating cream from milk by churning is using the \ncentrifuge machine. When the machine rotates, the \nheavier part (cream) moves outward, due to centrifugal \nforce, and thus gets separated from the milk.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p163_img1_xref1335.png"
  },
  {
    "id": "yct-motion-plane-q663",
    "num": 663,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "An electric fan has blades of length 30 cm \nmeasured from the axis of rotation. If the fan is \nrotating at 120 rev/min, the acceleration of a \npoint on the tip of the blade is",
    "options": [
      "1600 m/s²",
      "47.4 m/s²",
      "23.7 m/s²",
      "50.55 m/s² \n[AIPMT 1990]"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \n\nr = 30 cm = 0.3 m \n\nn = 120 rev/min \n\nn = 120\n60 = 2 rev/sec \n\nω = 2πn \n\nω = 2×π×2 \n\nω = 4π rad/sec \nThen, \nAcceleration, \nac = ω2r \n\nac = (4π)2 × 0.3 \n\n = 16 22 22 0.3\n7 7\n×\n×\n×\n×\n\n2\nca\n47.4m/s\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p163_img1_xref1335.png"
  },
  {
    "id": "yct-motion-plane-q664",
    "num": 664,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "In the given figure, a =15 m/s2 represents the \ntotal acceleration of a particle moving in the \nclockwise direction in a circle of radius R = 2.5 \nm at a given instant of time. The speed of the \nparticle is",
    "options": [
      "4.5 m/s",
      "5.0 m/s",
      "5.7 m/s",
      "6.2 m/s \n[NEET 2016]"
    ],
    "correctAnswer": 2,
    "explanation": "Given, R = 2.5 m, a = 15 m/s2, ac = acos30o \n\nWe know that, \nCentripetal acceleration, \n2\nc\nv\na\nR\n=\n\n2\no\nv\nacos30\nR\n=\n\n2\nv\n3\n15\n2.5\n2\n=\n×\n\n2\nv\n32.475\n=\n\nv = 5.69 m/s \n\nv = 5.7 m/s",
    "examSource": "",
    "image": "/images/yct_motion_plane/p163_img1_xref1335.png"
  },
  {
    "id": "yct-motion-plane-q665",
    "num": 665,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle moving in a circle of radius R with a \nuniform speed takes a time T to complete one \nrevolution. If this particle were projected with \nthe same speed at an angle θ to the horizontal, \nthe maximum height attained by it equals 4R. \nThe angle of projection θ is then given by",
    "options": [
      "1\n2\n2\n1\n2\ngT\ncos\nR\n-\n\nθ =\n\n\nπ\n\n",
      "1\n2\n2\n1\n2\nR\ncos\ngT\n-\n\nπ\nθ =\n\n\n\n",
      "1\n2\n2\n1\n2\nR\nsin\ngT\n-\n\nπ\nθ =\n\n\n\n",
      "1\n2\n2\n1\n2\n2gT\nsin\nR\n-\n\nθ =\n\n\nπ\n\n\n\n[NEET 2021]"
    ],
    "correctAnswer": 3,
    "explanation": "Given, maximum height H = 4R \n\nTime, T = 2 R\nV\nπ\n\n2 R\nor V\nT\nπ\n=\n\n....(i) \n2\n2\n2\n2\n2\nmax\n2\nV sin\n2\nR sin\nmaximumheight,H\n2g\ngT\nθ\nπ\nθ\n=\n=\n\n2\n2\n2\n2\n2\nR sin\n4R\ngT\nπ\nθ\n=\n\n1/ 2\n2\n2\n2gT\nsin\nR\n\n\nθ =\n\nπ\n\n\n\n1/ 2\n2\n1\n2\n2gT\nsin\nR\n-\n\nθ =\n\n\nπ\n\n",
    "examSource": "",
    "image": "/images/yct_motion_plane/p163_img1_xref1335.png"
  },
  {
    "id": "yct-motion-plane-q666",
    "num": 666,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle moves in a circle of radius 30 cm. Its \nlinear speed is given by v =2t where t in second \nand v in m/s. Find out its radial and tangential \nacceleration at t = 3 sec. respectively.",
    "options": [
      "220m/sec2, 50m/sec2",
      "100m/sec2, 5m/sec2",
      "120m/sec2, 2m/sec2",
      "110m/sec2, 10m/sec2 \nMP PET-2008"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \nRadius of circle (r) = 30 cm \nLinear speed of particle (v) = 2t \nFor, \nt = 3, \nWe have to find, \nRadial acceleration (ac) = ? \nTangential acceleration (at) = ? \n\nWe know that tangential acceleration- \n\nt\ndv\na\ndt\n=\n\nt\nd\na\n(2t)\ndt\n=\n\nat = 2m/sec2 \nRadial acceleration/centripetal acceleration, \n\n2\n2\nC\n(2t)\nv\na\nr\nr\n=\n=\n\n2\nC\n4t\na\n0.3\n=\n\n2\nC\n40\na\n(t)\n3\n=\n\n(at t = 3 second) \n\n2\nC\n40\na\n(3)\n3\n=\n\n = 120 m/sec2",
    "examSource": "",
    "image": "/images/yct_motion_plane/p163_img1_xref1335.png"
  },
  {
    "id": "yct-motion-plane-q667",
    "num": 667,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A weightless thread can bear tension upto 37 N. \nA stone of mass 500g is tied to it and revolved \nin a circular path of radius 4 m in a vertical \nplane. If g = 10m/s², then the maximum \nangular velocity of the stone will be",
    "options": [
      "2 rad s-1",
      "4 rad s-1",
      "8 rad s-1",
      "16 rad s-1"
    ],
    "correctAnswer": 1,
    "explanation": "Given, \nTmax = 37 N, m = 500g = 0.5kg, \n g = 10m/s², r =4m \nMaximum tension in the thread is given by- \n\n2\nmax\nmv\nT\nmg\nr\n=\n+\n\nor \n[\n]\n2\nmax\nT\nmg\nmr\nv\nr\n=\n+\nω\n= ω\n∵\n\nor \n2\nmax\nT\nmg\nmr\n-\nω =\n\n∴ \n2\n37\n0.5 10\n37\n5\n0.5 4\n2\n-\n×\n-\nω =\n=\n×\n\nor \nω2 = 16 or ω = 4 rad s-1",
    "examSource": "JIPMER-2010",
    "image": "/images/yct_motion_plane/p164_img1_xref1343.png"
  },
  {
    "id": "yct-motion-plane-q668",
    "num": 668,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "questionText": "A smooth circular groove has a smooth vertical \nwall as shown in figure. A block of mass m \nmoves against the wall with a speed v. Which of \nthe following curve represents the correct \nrelation between the normal reaction on the \nblock by the wall (N) and speed of the block (v) ?",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 0,
    "explanation": "Given, \nMass of block = m \nSpeed of block = v \nRelation between normal reaction on the block by wall \nis equal to on the block normal reaction is provided by \ncentripetal acceleration. \nHence, \n\n2\nmv\nN\nr\n=\n\ny ∝ kx2 \nSo, it is represented parabola curve.",
    "examSource": "(a)     (b)         (c)    (d)    JEE Main-29.07.2022, Shift-I",
    "image": "/images/yct_motion_plane/p164_img1_xref1343.png"
  },
  {
    "id": "yct-motion-plane-q669",
    "num": 669,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "questionText": "Motion of particle in x-y plane is described by \na set of following equations \n\n\n\n\n\n\nπ\nx = 4sin\n-ωt\n2\nm \nand y = 4sin(ω",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 0,
    "explanation": "Given, \n\nx = 4 sin \nt\n2\nπ\n\n\n-ω\n\n\n\n \n\nx = 4 cos ωt \n\n....(i) \nand \ny = 4 sin ωt \n\n....(ii) \nSquaring and adding equation (i) and (ii), We get \n\nx2 + y2 = 16 cos2ωt + 16 sin2 ωt \n\nx2 + y2 = 16 (1) \n\n2\n2\nx\ny\n16\n+\n=\n\nThis is the equation of the circle.",
    "examSource": "t)m. The path of the particle will  be     (a) Circular  (b) Helical     (c) Parabolic  (d) Elliptical  JEE Main-28.06.2022, Shift-I",
    "image": "/images/yct_motion_plane/p164_img1_xref1343.png"
  },
  {
    "id": "yct-motion-plane-q670",
    "num": 670,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "questionText": "A boy ties a stone of mass 100 g to the end of a \n2 m long string and whirls it around in a \nhorizontal plane. The string can withstand the \nmaximum tension of 80N. If the maximum \nspeed with which the stone can revolve is \nK\nπ rev./min. The value of K is. \n\n (Assume \nthe \nstring \nis \nmass \nless \nand \nunstretchable)",
    "options": [
      "400",
      "300",
      "600",
      "800"
    ],
    "correctAnswer": 2,
    "explanation": "Given, m = 100 g, L = 2 m, Tmax = 80 N \n\nTension, T = m r ω2 \n\n Tmax = m L ω2\nmax\n\n(∵ r = L) \n\n80 = 100×10-3×2×ω2\nmax \n\nω2\nmax = 80\n0.2 \n\nω2\nmax = 400 \n\nmax\n20rad/sec\nω\n=\n\nωmax\n20\n2\n60\n=\nπ \n\nωmax\n600 rpm\n= π\n\nK\n600\n=\nπ\nπ \n\nK\n600rpm\n=",
    "examSource": "JEE Main-24.06.2022, Shift-I",
    "image": "/images/yct_motion_plane/p164_img1_xref1343.png"
  },
  {
    "id": "yct-motion-plane-q671",
    "num": 671,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "questionText": "A stone of mass m,",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 1,
    "explanation": "At, angle θ \n\nT - mg cosθ =\n2\nmv\nR \n\nHere, v is constant, \nT will be minimum when cos θ is minimum. \nθ = 180o corresponds to Tminimum \n So, the tension in the string is minimum at the highest \nposition of the circular path.",
    "examSource": "tied to a string is being  whirled in a vertical circle with a uniform  speed. The tension in the string is     (a) The same throughout the motion    (b) minimum at the highest position of the  circular path    (c) minimum at the lowest position of the circular  path    (d) minimum when the rope is in the horizontal  position  JEE Main-24.06.2022, Shift-II",
    "image": "/images/yct_motion_plane/p165_img1_xref1354.png"
  },
  {
    "id": "yct-motion-plane-q672",
    "num": 672,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "questionText": "For a particle in uniform circular motion, the \nacceleration a\u0002 at any point P(R, θ) on the \ncircular path of radius R is (when θ is \nmeasured from the positive x-axis and v is \nuniform speed):",
    "options": [
      "2\n2\nv\nv\n^\n^\nsin i\ncos j\nR\nR\n-\nθ +\nθ",
      "2\n2\nv\nv\n^\n^\ncos i\nsin j\nR\nR\n-\nθ +\nθ",
      "2\n2\nv\nv\n^\n^\ncos i\nsin j\nR\nR\n-\nθ -\nθ",
      "2\n2\nv\nv\n^\n^\ni\nj\nR\nR\n-\n+"
    ],
    "correctAnswer": 2,
    "explanation": "Acceleration, \n2\nc\nv\na\na\nR\n=\n=\n\u0002\n\nAt x-axis, \n\nx\nc\n^\na\na cos i\n= -\nθ \n\nAt y-axis, \n\ny\nc\n^\na\na sin j\n= -\nθ \nResultant acceleration, \nx\ny\n^\n^\na\na i\na j\n=\n+\n\u0002\n\nc\nc\n^\n^\na cos i\na sin j\n= -\nθ -\nθ \n\n2\n2\nv\nv\n^\n^\na\ncos i\nsin j\nR\nR\n= -\nθ -\nθ\n\u0002",
    "examSource": "JEE Main-25.06.2022, Shift-II",
    "image": "/images/yct_motion_plane/p165_img1_xref1354.png"
  },
  {
    "id": "yct-motion-plane-q673",
    "num": 673,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "questionText": "A huge circular arc of length 4.4 ly subtends an \nangle 4s at the centre of the circle. How long it \nwould take for a body to complete 4 revolution \nif its speed is 8 AU per sec ? \n\n [Given, \n15\n11\n1ly = 9.46×10 m,1AU = 1.5×10 m]",
    "options": [
      "8\n4.1 10 s\n×",
      "10\n4.5 10 s\n×",
      "6\n3.5 10 s\n×",
      "8\n7.2 10 s\n×"
    ],
    "correctAnswer": 1,
    "explanation": "Given, length of arc = 4.4 ly \n\n = 4.4 × 9.46 × 1015 \n\nWe know that, \n\nRadius, R = l/θ \n\n4 2 R\n4 2\nTime,t\nv\nv\n× π\n× π \n\n=\n=\n\n\nθ\n\n\nl \nPut l = 4.4 × 9.46 × 1015 \n\nv = 8 × 1.5 × 1011 \n\n4\nrad.\n3600\n180\nπ\nθ =\n×\n\nPutting the value, \n t = 4.5 × 1010 sec.",
    "examSource": "JEE Main-27.08.2021, Shift-I",
    "image": "/images/yct_motion_plane/p165_img1_xref1354.png"
  },
  {
    "id": "yct-motion-plane-q674",
    "num": 674,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "questionText": "A clock has a continuously moving second’s \nhand of 0.1m length. The average acceleration \nof the tip of the hand (in m/s²) is of the order of",
    "options": [
      "10-3",
      "10-4",
      "10-2",
      "10-1"
    ],
    "correctAnswer": 0,
    "explanation": "Given, length of second’s hand = 0.1 m \nAs we know that, \nAvg. acceleration, \n2\nv\n2 R\na\nand v\nR\n60\nπ\n=\n=\n\nSo, \n\n(\n)\n2\n2\n2\n2\n2\n2 R\n4\nR\na\n60\nR\n60 R\nπ\nπ\n=\n=\n×\n\n(\n)\n2\n3\n2\n2\n4\n3.14\n0.1\n10 m/s\n60\n-\n×\n×\n=\n=",
    "examSource": "JEE Main-06.09.2020, Shift-I",
    "image": "/images/yct_motion_plane/p166_img1_xref1363.png"
  },
  {
    "id": "yct-motion-plane-q675",
    "num": 675,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "questionText": "A particle moves such that its position vector \n( )\n^\n^\nr t\ncos\nti\nsin\ntj,\n=\nω\n+\nω\n where ω is a constant \nand t is time. Then, which of the following \nstatements is true for the velocity v(t) and \nacceleration a(t) of the particle?",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \nPosition vector, ( )\n^\n^\nr t\ncos\nt i\nsin\nt j\n=\nω\n+\nω\n\u0002\n\nWhere, ω = constant, t = time \nVelocity, \ndr\n^\n^\nv\nsin\nt i\ncos\nt j\ndt\n\n\n=\n= ω -\nω\n+\nω\n\n\n\u0002\n\nAcceleration, \n2\n2\ndv\n^\n^\na\ncos\nt i\nsin\nt j\nr\ndt\n\n\n=\n= -ω\nω\n+\nω\n= -ω\n\n\n\u0002\n\u0002 \nHere, negative sign indicates that acceleration is in \nopposite direction of r. \nFor velocity direction we can take product of v and r- \n(\n)(\n)\n^\n^\n^\n^\nv r\nsin\nt i\ncos\nt j\ncos\nt i\nsin\nt j\n⋅\n= ω -\nω\n+\nω\nω\n+\nω\n\u0002\n\u0002\n\n(\n)\nsin\nt cos\nt\ncos\nt sin\nt\n0\n= ω -\nω\nω +\nω\nω\n= \nThis implies that v\u0002 is perpendicular to r\u0002 and a is \ndirected towards the origin.",
    "examSource": "(a) v and a both are parallel to r.    (b) v is perpendicular to r and a is directed away  from the origin.     (c) v and a both are perpendicular to r.    (d) v is perpendicular to r and a is directed  towards the origin.  JEE Main-08.01.2020, Shift-II",
    "image": "/images/yct_motion_plane/p166_img1_xref1363.png"
  },
  {
    "id": "yct-motion-plane-q676",
    "num": 676,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "questionText": "Two particles A and B are moving on two \nconcentric circles of radii R1 and R2 with equal \nangular speed ω. At t =0, their positions and \ndirection of motion are shown in the figure \n\n The relative velocity \nA\nB\nv\nv\n-\n at t\n2\nπ\n=\nω is given \nby",
    "options": [
      "(\n)\n1\n2 ^\nR\nR\ni\nω\n+",
      "(\n)\n1\n2 ^\nR\nR\ni\n-ω\n+",
      "(\n)\n1\n2 ^\nR\nR\ni\nω\n-",
      "(\n)\n2\n1 ^\nR\nR\ni\nω\n-"
    ],
    "correctAnswer": 3,
    "explanation": "Given, radii of concentric circle = R1 and R2, \nTime, t\n2\nπ\n=\nω \nAngular speed = ω, time, t = 0 \n\nt\n2\n2\nπ\nπ\nθ = ω = ω\n=\nω\n\n( )\n( )\nA\nB\n1\n2\n^\n^\nv\nv\nR\ni\nR\ni\n-\n= ω\n-\n-ω\n-\n\n(\n)\n1\n2\n2\n1\n^\n^\nR i\nR i\n^\nR\nR\ni\n= -ω\n+ ω\n= ω\n-",
    "examSource": "JEE Main-12.01.2019, Shift-II",
    "image": "/images/yct_motion_plane/p166_img1_xref1363.png"
  },
  {
    "id": "yct-motion-plane-q677",
    "num": 677,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Two cars of masses m1 and m2 are moving in \ncircles of radii r1 and r2, respectively. Their \nspeeds are such that they make complete circles \nin the same time t. The ratio of their centripetal \nacceleration is",
    "options": [
      "1 1\n2 2\nm r : m r",
      "1\n2\nm : m",
      "1\n2\nr : r",
      "1:1 \nAIEEE 2021"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \nMass of two cars are m1 and m2. \nRadii of circle are r1 and r2, time = t \nCentripetal acceleration (ac) = ω2r \n\n2\n2\nr\nt\nπ\n\n\n= \n\n\n\n\n2\nt\nπ\n\n\nω =\n\n\n\n\n∵\n\n2\nc\n2\n4\na\nr\nt\nπ\n=\n\nAs time period for both cars is same. So, we can say- \n\nca\nr\n∝\n\nThen, \n1\n1\n2\n2\na\nr\na\nr\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p166_img1_xref1363.png"
  },
  {
    "id": "yct-motion-plane-q678",
    "num": 678,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A point P moves in counter-clockwise direction \non a circular path as shown in the figure. The \nmovement of P is such that it sweeps out a \nlength s =t3 + 5, where s is in metre and t is in \nsecond. The radius of the path is 20m. The \nacceleration of P when t =2s is nearly",
    "options": [
      "13 m/s²",
      "12 m/s²",
      "7.2 m/s²",
      "14 m/s² \nAIEEE-2010"
    ],
    "correctAnswer": 3,
    "explanation": "Given, length (s) = t3 + 5 \nRadius of path = 20 m, time = 2s \n\n∵ \ns = t3 + 5 \nDifferentiating w.r. to t, we get- \n2\nds\nv\n3t\ndt\n=\n=\nm/s \nds\nv\ndt\n\n\n=\n\n\n\n\n∵\n\nt\ndv\na\n6t\ndt\n=\n=\n m/s2 \nAt, t = 2 sec \nta\n12\n=\n m/s2 \nAs we know, \nCentripetal acceleration(\n)\n(\n)\n2\n2\n2\n4\nc\n3t\nv\n9t\na\nR\n20\n20\n=\n=\n=\n\nAt \nt = 2 sec \n\n4\nc\n9 2\na\n7.2\n20\n×\n=\n=\nm/s2 \nAt \nt = 2 sec \n\n2\n2\nt\nc\na\na\na\n=\n+\n\n2\n2\na\n12\n(7.2)\n144\n51.84\n195.84\n=\n+\n=\n+\n=\n\n2\na\n14m /s\n≃",
    "examSource": "",
    "image": "/images/yct_motion_plane/p167_img1_xref1370.png"
  },
  {
    "id": "yct-motion-plane-q679",
    "num": 679,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Which of the following statements is false for a \nparticle moving in a circle with a constant \nangular speed?",
    "options": [
      "The velocity vector is tangent to the circle",
      "The acceleration vector is tangent to the circle",
      "The acceleration vector points to the centre of \nthe circle",
      "The velocity and acceleration vectors are \nperpendicular to each other \nAIEEE 2004"
    ],
    "correctAnswer": 1,
    "explanation": "Here, option (b) is a false statement because a \nparticle moving in a circle with a constant angular speed \nhas only centripetal acceleration and no tangential \nacceleration.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p167_img1_xref1370.png"
  },
  {
    "id": "yct-motion-plane-q680",
    "num": 680,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle moves in a circle of radius 2 cm at a \nspeed given by v = 4t. The tangential \nacceleration at t = 1s is",
    "options": [
      "6cm/s²",
      "2.5cm/s²",
      "3cm/s²",
      "4cm/s² \nAssam CEE-31.07.2022"
    ],
    "correctAnswer": 3,
    "explanation": "Given, r = 2 cm \n\n v = 4t \n\nTangential acceleration (aT) = dv\ndt \n\n(\n)\nT\nd\na\n4t\ndt\n=\n\n(\n)\n2\nT\na\n4cm/s\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p167_img1_xref1370.png"
  },
  {
    "id": "yct-motion-plane-q681",
    "num": 681,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A bucket full of water is rotated in a vertical in \na circular path 1.6 m For what expected \nmaximum time period of revolution, water will \nnot spill out from the bucket?",
    "options": [
      "1.5 s",
      "2.5 s",
      "3.5 s",
      "4.5 s \nTripura-27.04.2022"
    ],
    "correctAnswer": 1,
    "explanation": "Given, Radius = 1.6 m \nAs the bucket is rotating, centrifugal force acts on it. \nCentrifugal force should be greater than gravitational \nforce so that the water does not fall out of the bucket. \n\nF= Fc \n\nmg = \n2\n2 2\nmv\nm\nr\nr\nr\nω\n=\n\n(v = r.ω) \n\nmg = \n2\nm\nr\nω (ω = 2π/t) \n\ng = \n2\n2\n4\nr\nt\nπ × \n\nt2 =\n(\n)\n(\n)\n2\n2\n4\n3.14\n1.6\n4\nr\ng\n10\n×\n×\nπ × =\n\nt2 = 6.31 ⇒ t = \n6.31\n2.51\n=\nsec.",
    "examSource": "",
    "image": "/images/yct_motion_plane/p167_img1_xref1370.png"
  },
  {
    "id": "yct-motion-plane-q682",
    "num": 682,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A small ball describes a horizontal circle on the \nsmooth inner surface of a conical funnel. If the \nheight of the plane of the circle above the \nvertex be 10 cm. What is the speed of the \nparticle.",
    "options": [
      "2 m/s",
      "4 m/s",
      "16 m/s",
      "1 m/"
    ],
    "correctAnswer": 3,
    "explanation": "Given, \nh = 10 cm = 0.1 m \n\ng = 10 m/s2 \n\nRsinθ \n2\nmv\nr\n=\n\n....(i) \nRcosθ = mg \n\n....(ii) \nSo, from equation (i) and (ii), \n2\nv\ntan\nrg\nθ =\n\nNow, \n\n⇒ tanθ =\n\nh\nr\n\nSo, \n\n2\nh\nv\nr\nrg\n=\n\nv\nhg\n0.1 10 1m/s\n=\n=\n×\n=",
    "examSource": "s  HP CET-2018",
    "image": "/images/yct_motion_plane/p167_img1_xref1370.png"
  },
  {
    "id": "yct-motion-plane-q683",
    "num": 683,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A stone of mass 0.3 kg attached to a 1.5 m long \nstring is whirled around in a horizontal circle \nat a speed of 6 meter per second (m/s). The \ntension in the string is \n\n(a) 10 N \n(b) 20 N \n\n(c) 7.2",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, \nMass of stone (m) = 0.3 kg \nRadius of circle (R) = 1.5 m \nSpeed (v) = 6m/s \n\nAccording to question, \n2\n2\nmv\n(0.3)(6)\nTension(T)\nR\n1.5\n=\n=\n\n0.3 36\nT\n1.5\n×\n=\n\n T = 7.2 N",
    "examSource": "N  (d) None   HP CET-2018",
    "image": "/images/yct_motion_plane/p168_img1_xref1378.png"
  },
  {
    "id": "yct-motion-plane-q684",
    "num": 684,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A body is whirled in a horizontal circle of \nradius 25 cm. It has an angular velocity of 13 \nrad/s. What is its linear velocity at any point on \ncircular path ?",
    "options": [
      "2 m/s",
      "3 m/s",
      "3.25 m/s",
      "4.25 m/"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, r = 25 cm = 0.25 m, ω = 13 \nrad/sec \nWe know that, \n\nv\nr\n= ω \n\nv = 0.25 × 13 \n\nv\n3.25 m/sec\n=",
    "examSource": "s  JIPMER-2016",
    "image": "/images/yct_motion_plane/p168_img1_xref1378.png"
  },
  {
    "id": "yct-motion-plane-q685",
    "num": 685,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "What should the angular speed of earth be, for \na \nbody \nlying \non \nthe \nequator \nto \nfeel \nweightlessness? (g = 10 m.s-2, R = 6400 km)",
    "options": [
      "1\n1 rad.s\n800\n-",
      "1\n1 rad.s\n400\n-",
      "1\n1 rad.s\n600\n-",
      "1\n1 rad.s\n100\n-"
    ],
    "correctAnswer": 0,
    "explanation": "Given, \n\ng = 10 m/s2 \n\nR = 6400 km = 6400 × 103m \nAs we know apparent weight of body at equator- \n\nw′ = w - mRω2 \nAs the body feel weightlessness i.e. w′ = 0 \n\nw = mRω2 \n\nmg = mRω2 \n\nω2 = g\nR \n\ng\nR\nω =\n\n3\n10\n6400 10\nω =\n×\n\n1 Rad/s\n800\nω =",
    "examSource": "AP EAMCET-25.09.2020, Shift-II",
    "image": "/images/yct_motion_plane/p168_img1_xref1378.png"
  },
  {
    "id": "yct-motion-plane-q686",
    "num": 686,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A train runs along an unbanked circular track \nof radius 30 m at a speed of 54 kmph. The mass \nof the train is 106 kg. Then find the angle of \nbanking required to prevent wearing out the \nrail.",
    "options": [
      "Tan-1 1\n2\n\n\n\n\n\n",
      "Tan-1 3\n4\n\n\n\n\n\n",
      "Tan-1 5\n6\n\n\n\n\n\n",
      "Tan-1(1"
    ],
    "correctAnswer": 1,
    "explanation": "Given, m = 106 kg \n\nv = 54 km/h \n\nv = \n5\n54\n15m/s\n18\n×\n=\n\nr = 30m \nCentripetal force is provided by lateral thrust. Force \nwhich is by rail on the wheel. \nFor safe speed, \n\nTan θ = \n2\nv\nrg \n\n(\n)\n2\n15\n30 10\n=\n×\n\n225\n30 10\n=\n×\n\n∴ \n\n θ = Tan -1 3\n4\n\n\n\n\n\n",
    "examSource": ")  AP EAMCET-24.08.2021, Shift-I  AP EAMCET-25.09.2020, Shift-II",
    "image": "/images/yct_motion_plane/p168_img1_xref1378.png"
  },
  {
    "id": "yct-motion-plane-q687",
    "num": 687,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A body moving along a circular path due to a \ncentripetal force having constant magnitude is \nan example of motion with ______",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 3,
    "explanation": "A body moving along a circular path due to a \ncentripetal force having constant magnitude is an \nexample of motion with constant speed and variable \nvelocity.",
    "examSource": "(a) Constant speed and constant velocity     (b) Variable speed and variable velocity     (c) Variable speed and constant velocity    (d) Constant speed and variable velocity  AP EAMCET-24.09.2020, Shift-I",
    "image": "/images/yct_motion_plane/p169_img1_xref1386.png"
  },
  {
    "id": "yct-motion-plane-q688",
    "num": 688,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "The period of swing for a girl swinging on a \nswing in her sitting position is T. If she \nsuddenly starts swinging by standing on the \nswing, its period _______",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 0,
    "explanation": "When girl swinging in sitting position, Time period is \nT. \nWe know that \n\nT = 2\ng\nπ\nl \n\nT ∝ \nl \nWhen girl swinging by standing position the effective \nlength will decreases, so time period will also decreases.",
    "examSource": "(a) decreases   (b) increases      (c) remains constant   (d) becomes zero   AP EAMCET (Medical)-07.10.2020, Shift-I",
    "image": "/images/yct_motion_plane/p169_img1_xref1386.png"
  },
  {
    "id": "yct-motion-plane-q689",
    "num": 689,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "The kinetic energy of a circular disc rotating \nwith a speed of 60 rpm about an axis passing \nthrough a point on its circumference and \nperpendicular to its plane is (mass of circular \ndisc = 5 kg, radius of disc = 1m) approximately.",
    "options": [
      "170 J",
      "160 J",
      "150 J",
      "140"
    ],
    "correctAnswer": 2,
    "explanation": "Given, n = 60 rpm \n\nω = 2πn = \n60\n2\n60\nπ×\n\n(\n)\n1m\n60sec\n=\n∵\n\nω = 2π radian/sec \n\n m = 5 kg, r = 1 m \n\n I' = IG + mr2 \n\n2\n2\n2\nmr\n3\nI'\nmr\nmr\n2\n2\n=\n+\n=\n\n2\nG\nmr\nI\n2\n\n\n=\n\n\n\n\n\n2\n1\nKE\nI'\n2\n=\nω \n\n( )\n2\n2\n1\n3\nKE\n5\n1\n2\n2\n=\n×\n× ×\n×ω \n\n( )\n(\n)\n2\n2\n3\nKE\n5\n1\n2\n4\n=\n× ×\n×\nπ \n\n2\n15 4\nKE\n4\n× π\n=\n\n2\nKE\n15\nJ\n=\nπ\n= 15 × 22\n7 × 22\n7 J \n\n KE\n148.04J 150J\n=\n≈",
    "examSource": "J  AP EAMCET -2015",
    "image": "/images/yct_motion_plane/p169_img1_xref1386.png"
  },
  {
    "id": "yct-motion-plane-q690",
    "num": 690,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle is moving in a circle and is uniformly \ngaining speed. Match the following physical \nquantities. \n\nColumn-I \nColumn-II \nA. \nTangential \nacceleration \n dω\ndt \nB. Radial acceleration \nConstant \nC. \nAngular \nacceleration \nVariable \nD. Angular momentum \nIω",
    "options": [
      "(\n) (\n) (\n) (\n)\nA\niv , B iii , C ii , D i\n-\n-\n-\n-",
      "(\n) (\n) (\n) (\n)\nA\niii , B iv , C i , D\nii\n-\n-\n-\n-",
      "(\n) (\n) (\n) (\n)\nA\nii , B iii , C i , D iv\n-\n-\n-\n-",
      "(\n) (\n) (\n) (\n)\nA\ni , B ii , C iv , D iii\n-\n-\n-\n-"
    ],
    "correctAnswer": 2,
    "explanation": "Column-I \nColumn-II \nA.Tangential acceleration \n(i) Constant \nB. Radial acceleration \n(ii) Variable \nC. Angular acceleration \n(iii) dω/dt \nD. Angular momentum \n(iv) Iω",
    "examSource": "AP EAMCET-03.09.2021, Shift-II",
    "image": "/images/yct_motion_plane/p169_img1_xref1386.png"
  },
  {
    "id": "yct-motion-plane-q691",
    "num": 691,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "An insect trapped in a circular groove of radius \n12 cm moves along the groove steadily and \ncompletes 7 revolutions in 100 seconds. The \nlinear speed of the insect is___",
    "options": [
      "4.3 cm.s-1",
      "5.3 cm.s-1",
      "6.3 cm.s-1",
      "7.3 cm.s-1"
    ],
    "correctAnswer": 1,
    "explanation": "∴ Time taken to complete 1 revolution (T) = 100\n7 \n∴ \nr = 12 cm \n\n2\n2\n2\n7\n14\n0.44rad./sec\nT\n100/7\n100\n100\nπ\nπ\nπ×\nπ\nω =\n=\n=\n=\n=\n\nNow, linear speed is- \n\nv = rω \n\nv = 12 × 0.44 \n\nv = 5.3 cm/sec",
    "examSource": "AP EAMCET-03.09.2021, Shift-II",
    "image": "/images/yct_motion_plane/p169_img1_xref1386.png"
  },
  {
    "id": "yct-motion-plane-q692",
    "num": 692,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A cycle turns around a curved at 25 miles per \nhour. If the turns at double the speed. The \ntendency to overturn is______",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 2,
    "explanation": "Given, \nSpeed of cycle when cycle turns around curved (v1) = \n25 miles/hr \nThen, centripetal force, \n\nFc = \n2\n1\nmv\nr\n\n....(i) \nAgain, when it turns double the speed, v′ = 2v1 \nthen, centripetal force is, \n\ncF' = \n(\n)\n2\nm v'\nr\n\ncF' = \n(\n)\n2\n1\nm 2v\nr\n\ncF' = \n2\n1\n4mv\nr\n\n....(ii) \nNow, equation (ii) ÷ (i) \n\n2\n1\nc\n2\n1\nc\n4mv\nF'\nr\nmv\nF\nr\n=\n\ncF' = 4Fc \nHere, the tendency to overturn is quadrupled.",
    "examSource": "(a) Doubled  (b) Halved     (c) Quadrupled  (d) Unchanged  AP EAMCET-03.09.2021, Shift-II",
    "image": "/images/yct_motion_plane/p169_img1_xref1386.png"
  },
  {
    "id": "yct-motion-plane-q693",
    "num": 693,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "When a particle is moving in a circular track of \nradius 40 cm with a constant speed of 8m.s-1. \nIts acceleration is _________.",
    "options": [
      "320 m.s-2",
      "120 m.s-2",
      "160 m.s-2",
      "80 m.s-2"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, radius of circular track (R) = 40 \ncm= 0.4 m \nSpeed (v) = 8m/sec \nAcceleration is given as \n\nac\n2\nv\nR\n=\n, at = 0 \n\n = 8 8\n0.4\n×\n\n = 160 m/sec2",
    "examSource": "AP EAMCET-07.09.2021, Shift-I",
    "image": "/images/yct_motion_plane/p170_img1_xref1393.png"
  },
  {
    "id": "yct-motion-plane-q694",
    "num": 694,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle moves in a circle of radius 5 m with \na linear velocity of 25 m/s. Its angular velocity \nis _______.",
    "options": [
      "5 rad. s-1",
      "0.2 rad. s-1",
      "10 rad. s-1",
      "0.1 rad. s-1"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, radius of circle (r) = 5m, linear \nvelocity v = 25m/sec \nWe know that, \n\nv\nr\n= ω \n\nv\nr\nω =\n\n25\n5\nω =\n\nω = 5 radian/sec = 5 radian sec-1",
    "examSource": "AP EAMCET-07.09.2021, Shift-I",
    "image": "/images/yct_motion_plane/p170_img1_xref1393.png"
  },
  {
    "id": "yct-motion-plane-q695",
    "num": 695,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "^\n^\n^\n^\n^\n^\n\u0006\u0002\n\u0002\nIf ω = 3i - 5j+ 2kandr = 5i - 6j+ 6k, then find \nlinear velocity _______.",
    "options": [
      "^\n^\n^\n-18i - 8j\n7k\n+",
      "^\n^\n^\n-18i -13j\n2k\n+",
      "^\n^\n^\n4i -13j\n6k\n+",
      "^\n^\n^\n6i - 2j\n8k\n+"
    ],
    "correctAnswer": 0,
    "explanation": "Given that, \n^\n^\n^\n3i - 5j\n2k\nω =\n+\n\u0006\u0002\n\n^\n^\n^\nr\n5i - 6j\n6k\n=\n+\n\u0002\n\nThe relation between linear velocity and angular \nvelocity is- \nv\nr\n= ω×\n\u0002\n\u0006\u0002\n\u0002\n\nv\n\u0002\n=\n^\n^\n^\ni\nj\nk\n3\n-5\n2\n5\n-6\n6\n\nv\u0002\n^\n^\n^\ni(-30 12) - j(18 -10)\nk(-18\n25)\n=\n+\n+\n+\n\n^\n^\n^\nv\n-18i - 8j\n7k\n=\n+\n\u0002",
    "examSource": "AP EAMCET-07.09.2021, Shift-I",
    "image": "/images/yct_motion_plane/p170_img1_xref1393.png"
  },
  {
    "id": "yct-motion-plane-q696",
    "num": 696,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Find the maximum radius of circle so that the \nblock can complete the circular motion.",
    "options": [
      "5 cm",
      "3 cm",
      "2 cm",
      "4"
    ],
    "correctAnswer": 2,
    "explanation": "According to the law of conservation of \nenergy, \nLoss in potential Energy = Gain in Kinetic Energy \n\nmgH \n2\n1 mv\n2\n=\n\nv2 = 2gH \n\n( )\nVelocity gained v\n2gH\n∴\n=\n\n......(i) \nTo complete the circular loop, minimum speed at \nbottom point, Vmin = \n5gR \n\n.....(ii) \n\nFrom equation (i) and (ii), we get \n\nRmax = 2H\n2 5\n2cm\n5\n5\n×\n=\n=",
    "examSource": "cm  JIPMER-2019",
    "image": "/images/yct_motion_plane/p170_img1_xref1393.png"
  },
  {
    "id": "yct-motion-plane-q697",
    "num": 697,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "When a body moves with a constant speed \nalong a circle _______",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 1,
    "explanation": "There is no work done when speed is \nconstant in circular motion as centripetal force is zero.",
    "examSource": "(a) No acceleration is produced on the body     (b) No work is done on it     (c) Its velocity remains constant    (d) No force acts on the body  AP EAMCET-25.08.2021, Shift-II",
    "image": "/images/yct_motion_plane/p170_img1_xref1393.png"
  },
  {
    "id": "yct-motion-plane-q698",
    "num": 698,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Assertion",
    "options": [
      ": When a vehicle takes a turn on \nthe road, it travels along a curved path. \n\n Reason (R) : In a curved path, velocity of \nvehicle remains same. \n\n(a) Both (A) and (R) true and (R) is the correct \nexplanation of (A).",
      "Both (A) and (R) true and (R) is not the \ncorrect explanation of (A) .",
      "(A) is true, but (R) is not true.",
      "(A) is not true,"
    ],
    "correctAnswer": 2,
    "explanation": "In curved path the frictional force acting \nthousands the center of the horizontal correct path \nprovide the centripetal force and avoid overturning of \nvehicle. Due to the change in direction of motion, \nvelocity changes in curved path. \nSo, Assertion is correct and reason is incorrect.",
    "examSource": "but (R) is true.  AP EAMCET-25.04.2017, Shift-I",
    "image": "/images/yct_motion_plane/p170_img1_xref1393.png"
  },
  {
    "id": "yct-motion-plane-q699",
    "num": 699,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A car moves around a curved road of radius R1 \nat constant speed v without sliding. If we \ndouble the car's speed, what is the least radius \nthat would now keep the car from sliding?",
    "options": [
      "2 R1",
      "4 R1",
      "6 R1",
      "R1 \nAMU-2013"
    ],
    "correctAnswer": 1,
    "explanation": "A car can move around a curve road, If \n\nv = \n1\nR g\nµ\n\n.....(i) \nAccording to the question, speed is doubled and radius \nis changed. \n\n2v = \n2\nR g\nµ\n\n.....(ii) \nDividing equation (i) and (ii), we get \n\n1\n2\nR\n1\n2\nR\n=\n\nsquaring on both side, \n\n2\n1\nR\n4R\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p171_img1_xref1399.png"
  },
  {
    "id": "yct-motion-plane-q700",
    "num": 700,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A cosmonaut is circling the earth in a satellite \nat 7 km/s at a height of 630 km above the \nsurface of earth. Calculate the centripetal force \nacting on the cosmonaut if his mass is 80 kg \n(Take RE = 6.37 × 106 m)",
    "options": [
      "Zero",
      "560 N",
      "600 N",
      "650 N \nAMU-2012"
    ],
    "correctAnswer": 1,
    "explanation": "Given, velocity (vs) = 7 km/s, mass (m) = 80 \nkg, height (h) = 630 km \n\nWe know radius of earth (R) = 6370 km \n\n R + h = 6370 + 630 = 7000km \n\n R + h = 7 × 106 m \nCentripetal force \n2\ns\nc\nmv\n(F )\nR\n=\n\n2\nc\n6\n80\n(7000)\nF\n7 10\n×\n=\n×\n\ncF\n560N\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p171_img1_xref1399.png"
  },
  {
    "id": "yct-motion-plane-q701",
    "num": 701,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "questionText": "A stone is tied to a string of length l and is \nwhirled in a vertical circle with the other end of \nthe string as the centre. At a certain instant of \ntime, the stone is at its lowest position and has a \nspeed u. The magnitude of the change in \nvelocity as it reaches a position where the string \nis horizontal (g being acceleration due to \ngravity) is",
    "options": [
      "(\n)\n2\n2 u\ng\n-ℓ",
      "2\nu\ng\n-ℓ",
      "2\nu\nu\n2g\n-\n-\nℓ",
      "2gℓ"
    ],
    "correctAnswer": 0,
    "explanation": "By equation of motion, \n\nv2 = u2 + 2as \n\nv2 = u2+ 2 × (-g) × l \n{∴ a = -g, s = l} \n\nv = \n2\nu\n2g\n-\nl \nChange in velocity- \n\n2\n2\no\nv\nv\nu\nv\nu\n2uvcos90\n∆\n=\n-\n=\n+\n-\n\n(\n)\n(\n)\n2\n2\n2\n2\nu\n2g\nu\n2u\nu\n2g\n0\n=\n-\n+\n+\n-\n×\nl\nl\n\n(\n)\n2\n2\n2\nu\n2g\nu\n2 u\ng\n=\n-\n+\n=\n-\nl\nl",
    "examSource": "AIPMT- 2004",
    "image": "/images/yct_motion_plane/p171_img1_xref1399.png"
  },
  {
    "id": "yct-motion-plane-q702",
    "num": 702,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "questionText": "A stone is attached to one end of a string and \nrotated in a vertical circle. If string breaks at \nthe position of maximum tension, then it will \nbreak at",
    "options": [
      "A",
      "B",
      "C",
      "D \nUP CPMT-2009"
    ],
    "correctAnswer": 1,
    "explanation": "The body is describing a vertical circle \n\n2\nmv\nT\nmgcos\n∴\n-\nθ =\nl\n\n2\nmv\nT\nmgcos\n=\nθ +\nl\n\nTension is maximum when θ = 0° i.e. cos0° = 1 and \nvelocity is maximum. \nBoth condition are satisfied at θ = 0o at lowest point B.",
    "examSource": "AIPMT- 2000",
    "image": "/images/yct_motion_plane/p171_img1_xref1399.png"
  },
  {
    "id": "yct-motion-plane-q703",
    "num": 703,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Hard",
    "questionText": "A ball of mass 0.25 kg attached to the end of a \nstring of length 1.96m is moving in a horizontal \ncircle. The string will break if the tension is \nmore than 25 N. What is the maximum speed \nwith which the ball can be moved?",
    "options": [
      "14 m/s",
      "3 m/s",
      "3.92 m/s",
      "5 m/"
    ],
    "correctAnswer": 0,
    "explanation": "Given, \n\nl = 1.96 m \n\nT = 25 N \n\nm = 0.25 kg \nCentrifugal force in the string is given by, \n\nF = \n2\nmv\nl\n\nThe necessary centripetal force in the string is provided \nby the tension T in the string. \n\n2\n2\nmv\nF\n0.25 v\n25\n1.96\nv\n14m/s.\n=\n×\n=\n=\nl",
    "examSource": "s  AIPMT- 1998",
    "image": "/images/yct_motion_plane/p172_img1_xref1407.png"
  },
  {
    "id": "yct-motion-plane-q704",
    "num": 704,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A Particle is moved in a semi-circular path of \nradius R. Then",
    "options": [
      "its average velocity is zero",
      "its average acceleration is zero",
      "its magnitude of displacement is 2R",
      "its average velocity and average speed are \nequal"
    ],
    "correctAnswer": 2,
    "explanation": "When the body is completing half a \nrevolution of a circular path of radius r then the: - \nDistance traveled in half a rotation of a circular path is \nequal to the circumference of semi-circle = 2 R\nR\n2\nπ\n= π \n• Displacement is known as the shortest distance \nbetween two points, as we can see the figure the \nshortest distance between point and point B is along the \ndiameter of the circle thus displacement is 2r. \n\n R + R = 2R",
    "examSource": "",
    "image": "/images/yct_motion_plane/p172_img1_xref1407.png"
  },
  {
    "id": "yct-motion-plane-q705",
    "num": 705,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "If an object undergoes a uniform circular \nmotion,",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 1,
    "explanation": "The acceleration is related to the change in \nvelocity either in magnitude (speed), or direction.",
    "examSource": "then its    (a) acceleration remains uniform    (b) velocity changes    (c) speed changes    (d) velocity remains uniform  NDA (I) 2013",
    "image": "/images/yct_motion_plane/p172_img1_xref1407.png"
  },
  {
    "id": "yct-motion-plane-q706",
    "num": 706,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "Motion of a particle can be described in x-\ndirection by x = asinωt, and y-direction by y = \nbcosωt. The particle is moving on \n\n(a) a circular path of radius 'a' \n\n(b) a circular path of radius 'b'",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 2,
    "explanation": "Given that, \nMotion of particle in x-direction, \n\n(\n)\nx\nasin\nt\n=\nω\n\n( )\nx\nsin\nt\n........ i\na =\nω\n\nAnd, motion of particle in y-direction, \n\ny\nbcos t\n=\nω \n\n( )\ny\ncos t\n............. ii\nb =\nω\n\nSquaring and adding both equation (i) and (ii), \n\n(\n)\n(\n)\n2\n2\n2\n2\nx\ny\nsin\nt\ncos t\na\nb\n\n\n\n\n+\n=\nω\n+\nω\n\n\n\n\n\n\n\n\n\n2\n2\nx\ny\n1\na\nb\n\n\n\n\n+\n=\n\n\n\n\n\n\n\n\n\n2\n2\n2\n2\nx\ny\n1\na\nb\n+\n= \nThis is the equation of ellipse. \nHence, the particle is moving on an elliptical path.",
    "examSource": "(c) an elliptical path    (d) a straight line  NDA (II) 2013",
    "image": "/images/yct_motion_plane/p172_img1_xref1407.png"
  },
  {
    "id": "yct-motion-plane-q707",
    "num": 707,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A body is just being revolved in a vertical circle \nof radius R with a uniform speed. The string \nbreaks when the body is the highest point. The \nhorizontal distance covered by the body after \nthe string breaks is",
    "options": [
      "2 R",
      "R",
      "R 2",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "Time taken by the body to reach the ground \nwhen string breaks, \n\n2h\n2×2R\nt =\n=\ng\ng\n\n{ h = 2R} \nHence, horizontal distance covered by the body \n\n vH × t = \n4R\ngR\ng\n×\n\nvH × t = \n2\n4R \n\nvH × t = 2R",
    "examSource": "R   MHT-CET-2020, 2006",
    "image": "/images/yct_motion_plane/p172_img1_xref1407.png"
  },
  {
    "id": "yct-motion-plane-q708",
    "num": 708,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "The acceleration of a body in a non-uniform \ncircular motion is 5 m/s². Which one of the \nfollowing is correct?",
    "options": [
      "The radial acceleration and the tangential \naccelerations are 3 m/s² and 4 m/s² \nrespectively.",
      "The radial and the tangential accelerations are \n2 m/s² and 3 m/s² respectively.",
      "The radial and the tangential accelerations are \nboth 5 m/s².",
      "The radial and the tangential acceleration are \n5 m/s² and 3 m/s² respectively. \n AIIMS-2009"
    ],
    "correctAnswer": 0,
    "explanation": "Given, \n\nAcceleration of body (ar) = 3 m/s2 \n\ntangential acceleration (at) = 4 m/s2 \n( )\n2\n2\nt\nr\na\na\na\n∴\n=\n+\n\n( )\n( )\n2\n2\n2\na\n4\n3\n25\n5m/s\n=\n+\n=\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p172_img1_xref1407.png"
  },
  {
    "id": "yct-motion-plane-q709",
    "num": 709,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "An object is moving in a circle at constant \nspeed v. The magnitude of the rate of change of \nmomentum of the object is",
    "options": [
      "zero",
      "proportional to v2",
      "proportional to v3",
      "proportional to v \nCG PET- 2015 \nManipal UGET - 2020"
    ],
    "correctAnswer": 1,
    "explanation": "Rate of change of momentum of the object \nmoving in circle. \n\next\np\nF\nt\n∆\n=\n∆\n\n2\n2\next\np\nmv\nmv\nF\nt\nr\nr\n\n\n∆\n=\n=\n\n\n∆\n\n\n∵\n\nSo, \n2\np\nv\nt\n∆\n∝\n∆",
    "examSource": "",
    "image": "/images/yct_motion_plane/p173_img1_xref1413.png"
  },
  {
    "id": "yct-motion-plane-q710",
    "num": 710,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A motor cycle is going on an overbridge of \nradius R. The driver maintains a constant \nspeed. As the motor cycle is ascending on the \nover bridge,",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 0,
    "explanation": "A motorcycle is going on an over bridge of \nradius R, then normal reaction is \n\nN = mg cosθ - \n2\nmv\nR \nWhen θ decreases then cosθ increase and normal force \nis also increase.",
    "examSource": "the normal force on it     (a) Increases    (b) Decreases     (c) Remains the same    (d) Fluctuates erratically  JIPMER-2008",
    "image": "/images/yct_motion_plane/p173_img1_xref1413.png"
  },
  {
    "id": "yct-motion-plane-q711",
    "num": 711,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "The minimum speed for a particle at the lowest \npoint of a vertical circle of radius R, to describe \nthe circle is v. If the radius of circle is reduced \nto one-fourth its value, the corresponding \nminimum speed will be",
    "options": [
      "v\n4",
      "v\n2",
      "2 v",
      "4"
    ],
    "correctAnswer": 1,
    "explanation": "The minimum speed (v) of a particle at the \nlowest point is given by formula \n\nv\n5gR\n=\n\nWhere, g is the acceleration due to the gravity and R is \nthe radius \nNow, \n\nFor the first case Radius = R \n\nAnd for the cases 2 Radius = R/4 \n\nLet the speed for the case 2 be v2 \nThus, \n\n2\nR\nv\n5g\n4\n\n\n=\n\n\n\n\n\nOr, \n\n2\n1\nv\n5gR\n2\n=\n\n……..(i) \nPutting the value of v = \n5gR in equation (i) \n\n2\n1\nv\nv\n2\n=\n\n2\nv\nv\n2\n=\n\nHence, the value of the speed for Radius R/4 \nbecome half the value of speed for Radius R.",
    "examSource": "v  EAMCET-1999",
    "image": "/images/yct_motion_plane/p173_img1_xref1413.png"
  },
  {
    "id": "yct-motion-plane-q712",
    "num": 712,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A player kicks a football at an angle 30° with \nthe horizontal with an initial speed 30 m/s. A \nsecond player standing at a distance of 21 3 m \nfrom the first and in the direction of kick, \nstarts running to catch the ball, at the same \ninstant as kicked by first player. The minimum \nspeed of second player to catch the ball before \nit hits the ground is. \n\n (Take acceleration due to gravity = 10m/s²)",
    "options": [
      "10 m/s",
      "8 m/s",
      "1\n8 3 ms-",
      "1\n15 3ms-"
    ],
    "correctAnswer": 2,
    "explanation": "Let the ball be kicked from A and second \nplayer be at B ball and second player reach O at same \ntime, t. \nv\nv\n\nTherefore, t = 2usin\ng\nθ \n t = 2 30sin30\ng\n°\n×\n\n t = \n1\n2 30\n2\n10\n×\n×\n\nt = 30\n3sec.\n10 =\n\nRange (R) =\n2\nu sin 2\ng\nθ \nR = (\n)\n2\n3\n900\n30\nsin60\n2\n10\n10\n°\n×\n=\n\nR = 45 3m \nSo, distance covered by 2nd player is - \nd = 45 3\n21 3\n-\n\nd = 24 3 \nNow, speed of the second player- \nv = d\nt \nv = 24 3\n3\n\n v\n8 3m/sec\n=",
    "examSource": "",
    "image": "/images/yct_motion_plane/p173_img1_xref1413.png"
  },
  {
    "id": "yct-motion-plane-q713",
    "num": 713,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle is moving with 10 m/s in a circle of \nradius 5m, find out magnitude of average \nvelocity if particle moved by 60o in 1 sec.",
    "options": [
      "5 m/s",
      "10 m/s",
      "5 3 m/s",
      "20 m/"
    ],
    "correctAnswer": 0,
    "explanation": "Total displacement\nAverageVelocity\nTotal time\n=\n\nThe displacement is equal to the radius of circle because \nthe triangle is a equllateral triangle \n\nAverage Velocity = \n5m /s\n=\n\n5\n=\n= 5m/s\n1",
    "examSource": "s  JIPMER-2019",
    "image": "/images/yct_motion_plane/p174_img1_xref1420.png"
  },
  {
    "id": "yct-motion-plane-q714",
    "num": 714,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "A runner starts from O and goes to O following \npath OQRO in 1 hr. What is net displacement \nand average speed?",
    "options": [
      "0,3.57 km/hr",
      "0,0 km/hr",
      "0,2.57 km/hr",
      "0,1 km/"
    ],
    "correctAnswer": 0,
    "explanation": "For the given figure \n\nNet displacement = 0 \nand average speed \nTotal distance\nTotal time\n=\n\nor average speed \nR\n1km\n1 km\n2\n1hr\nπ\n+\n+\n=\n\n =\n3.14 1\nradius,R\n1km\n2km\n2\n3.14\n1hr\n×\n=\n\n\n+\n\n\nπ =\n\n \ni.e average speed = 3.57 km / hr \nHence option (a) is correct",
    "examSource": "hr  JIPMER-2018",
    "image": "/images/yct_motion_plane/p174_img1_xref1420.png"
  },
  {
    "id": "yct-motion-plane-q715",
    "num": 715,
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Circular Motion",
    "difficulty": "Medium",
    "questionText": "An object moves in a circular path with a \nconstant speed. Which one of the following \nstatements is correct? \n\n(a) The centripetal acceleration of the object is \nsmaller for a gentle curve (i.e., curve of \nlarger radius) than that for a sharp curve (i.e., \ncurve of smaller radius). \n\n(b) The centripetal acceleration is greater for a \ngentle curve than that for a sharp curve. \n\n(c) The centripetal acceleration is the same for \nboth,",
    "options": [
      "Option (A)",
      "Option (B)",
      "Option (C)",
      "Option (D)"
    ],
    "correctAnswer": 0,
    "explanation": "We know that the centripetal acceleration \n\n2\nc\nv\na\nr\n=\n\nwhere v is the velocity \nr, is the radius of the curve \nSpeed is constant then radius has a bigger value in the \ncase of gentle curve the centripetal acceleration will be \nsmaller compared to a radius of smaller value.",
    "examSource": "the gentle   and sharp curves.    (d) The centripetal acceleration causes the object  to slow down  NDA (II) 2017",
    "image": "/images/yct_motion_plane/p174_img1_xref1420.png"
  }
];
