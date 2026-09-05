import { Question } from '../types';

export const MOTION_BOOK_QUESTIONS: Question[] = [
  {
    "id": "mot-dist-01",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Distance and Displacement",
    "difficulty": "Easy",
    "questionText": "A Body moves 6 m north, 8 m east and 10 m vertically upwards. What is its resultant displacement from initial position?",
    "options": [
      "10\u221a2 m",
      "10 m",
      "10/\u221a2 m",
      "10 \u00d7 2 m"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\vec{r} = 8\\hat{i} + 6\\hat{j} + 10\\hat{k} \\implies |\\vec{r}| = \\sqrt{64 + 36 + 100} = \\sqrt{200} = 10\\sqrt{2}\\text{ m}$.",
    "tags": [
      "DCE 2000",
      "Distance and Displacement"
    ]
  },
  {
    "id": "mot-dist-02",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Distance and Displacement",
    "difficulty": "Easy",
    "questionText": "A man goes 10 m towards North, then 20 m towards east. His net displacement is:",
    "options": [
      "22.5 m",
      "25 m",
      "25.5 m",
      "30 m"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $|\\vec{r}| = \\sqrt{20^2 + 10^2} = \\sqrt{500} = 10\\sqrt{5} \\approx 22.36\\text{ m} \\approx 22.5\\text{ m}$.",
    "tags": [
      "KCET 1999",
      "Distance and Displacement"
    ]
  },
  {
    "id": "mot-dist-03",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Distance and Displacement",
    "difficulty": "Medium",
    "questionText": "A person moves 30 m north, then 20 m towards east and finally 30\u221a2 m in south-west direction. The displacement of the person from the origin will be:",
    "options": [
      "10 m along north",
      "10 m along south",
      "10 m along west",
      "Zero"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\vec{s} = 30\\hat{j} + 20\\hat{i} + 30\\sqrt{2}(-\\hat{i}/\\sqrt{2} - \\hat{j}/\\sqrt{2}) = -10\\hat{i} = 10\\text{ m along West}$.",
    "tags": [
      "J & K CET 2004",
      "Distance and Displacement"
    ]
  },
  {
    "id": "mot-dist-04",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Distance and Displacement",
    "difficulty": "Medium",
    "questionText": "An aeroplane flies 400 m north and 300 m south and then flies 1200 m upwards. The net displacement is:",
    "options": [
      "1200 m",
      "1300 m",
      "1400 m",
      "1500 m"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\vec{r} = (400-300)\\hat{j} + 1200\\hat{k} = 100\\hat{j} + 1200\\hat{k} \\implies |\\vec{r}| = \\sqrt{100^2 + 1200^2} = 1204.15\\text{ m} \\approx 1200\\text{ m}$ (or 1300 m for 3D perpendiculars).",
    "tags": [
      "AFMC 2004",
      "Distance and Displacement"
    ]
  },
  {
    "id": "mot-dist-05",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Distance and Displacement",
    "difficulty": "Easy",
    "questionText": "An athlete completes one round of a circular track of radius R in 40 sec. What will be his displacement at the end of 2 min. 20 sec?",
    "options": [
      "Zero",
      "2R",
      "2\u03c0R",
      "7\u03c0R"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $140\\text{ s} = 3.5\\text{ rounds}$. At 3.5 revolutions, position is diametrically opposite $\\implies \\text{displacement} = 2R$.",
    "tags": [
      "NCERT 1990",
      "Kerala PMT 2004",
      "Distance and Displacement"
    ]
  },
  {
    "id": "mot-dist-06",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Distance and Displacement",
    "difficulty": "Medium",
    "questionText": "A wheel of radius 1 meter rolls forward half a revolution on horizontal ground. The displacement of initial ground-contact point is:",
    "options": [
      "2\u03c0",
      "\u221a2 \u03c0",
      "\u221a(\u03c0\u00b2 + 4)",
      "\u03c0"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Horizontal shift $=\\pi R = \\pi$, vertical shift $=2R = 2$. $d = \\sqrt{\\pi^2 + 2^2} = \\sqrt{\\pi^2 + 4}$.",
    "tags": [
      "BCECE 2005",
      "Distance and Displacement"
    ]
  },
  {
    "id": "mot-uni-01",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "A person travels half the distance with velocity v\u2081 and remaining half with v\u2082. Average velocity is:",
    "options": [
      "v\u2081 v\u2082",
      "v\u2082\u00b2 / v\u2081\u00b2",
      "(v\u2081 + v\u2082)/2",
      "2v\u2081v\u2082 / (v\u2081 + v\u2082)"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v_{\\text{avg}} = \\frac{2v_1 v_2}{v_1 + v_2}$.",
    "tags": [
      "MP PMT 2001",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-02",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "Displacement-time graphs for A and B are straight lines at 30\u00b0 and 60\u00b0 with time axis. Ratio v_A : v_B is:",
    "options": [
      "1 : 2",
      "1 : \u221a3",
      "\u221a3 : 1",
      "1 : 3"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v_A/v_B = \\tan 30^\\circ / \\tan 60^\\circ = (1/\\sqrt{3})/\\sqrt{3} = 1/3$.",
    "tags": [
      "CPMT 1990",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-03",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "Car travels A to B at 20 km/hr and returns at 30 km/hr. Average speed for round trip is:",
    "options": [
      "25 km/hr",
      "24 km/hr",
      "50 km/hr",
      "5 km/hr"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v_{\\text{avg}} = \\frac{2(20)(30)}{20 + 30} = 24\\text{ km/hr}$.",
    "tags": [
      "MP PET 1985",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-04",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "A boy walks to school (6 km) at 2.5 km/hr and back at 4 km/hr. Average speed is:",
    "options": [
      "24/13",
      "40/13",
      "3",
      "1/2"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v_{\\text{avg}} = \\frac{2(2.5)(4)}{2.5 + 4} = \\frac{20}{6.5} = \\frac{40}{13}\\text{ km/hr}$.",
    "tags": [
      "AIIMS 1995",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-05",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "First half distance at 30 km/hr and second half at 50 km/hr. Average speed is:",
    "options": [
      "42.5 km/hr",
      "40.0 km/hr",
      "37.5 km/hr",
      "35.0 km/hr"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v_{\\text{avg}} = \\frac{2(30)(50)}{30 + 50} = 37.5\\text{ km/hr}$.",
    "tags": [
      "Manipal MEE 1995",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-06",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Medium",
    "questionText": "One third distance at 20 km/hr and rest (2/3) at 60 km/hr. Average speed is:",
    "options": [
      "40 km/hr",
      "80 km/hr",
      "46 2/3 km/hr",
      "36 km/hr"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v_{\\text{avg}} = \\frac{1}{1/60 + 2/180} = \\frac{1}{5/180} = 36\\text{ km/hr}$.",
    "tags": [
      "MP PMT 1999",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-07",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "Half time at 80 km/h and half time at 40 km/h. Average speed is:",
    "options": [
      "60 km/h",
      "80 km/h",
      "120 km/h",
      "180 km/h"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v_{\\text{avg}} = \\frac{80 + 40}{2} = 60\\text{ km/hr}$.",
    "tags": [
      "RPET 1996",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-08",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "Train speed 60 km/h for 1 h and 40 km/h for next 0.5 h. Average speed is:",
    "options": [
      "50",
      "53.33",
      "48",
      "70"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v_{\\text{avg}} = \\frac{60 + 20}{1.5} = 53.33\\text{ km/h}$.",
    "tags": [
      "JIPMER 1999",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-09",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "Which of the following is a one dimensional motion?",
    "options": [
      "Landing of an aircraft",
      "Earth revolving around sun",
      "Motion of wheels of moving train",
      "Train running on a straight track"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Linear train motion requires only one coordinate.",
    "tags": [
      "BHU 2000",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-10",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "150 m train at 45 km/h (12.5 m/s) crosses 850 m bridge. Time taken is:",
    "options": [
      "56 sec",
      "68 sec",
      "80 sec",
      "92 sec"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $t = \\frac{150 + 850}{12.5} = \\frac{1000}{12.5} = 80\\text{ s}$.",
    "tags": [
      "CBSE PMT 2001",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-11",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "Particle returns to start in 10 s, covering 30 m total distance. Which statement is FALSE?",
    "options": [
      "Displacement of particle is zero",
      "Average speed of particle is 3 m/s",
      "Displacement of the particle is 30 m",
      "Both (a) and (b)"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Returning to start point means displacement is Zero.",
    "tags": [
      "CBSE PMT 2000",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-12",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "Particle moves along semicircle of radius 10 m in 5 s. Average velocity is:",
    "options": [
      "2\u03c0 ms\u207b\u00b9",
      "4\u03c0 ms\u207b\u00b9",
      "2 ms\u207b\u00b9",
      "4 ms\u207b\u00b9"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Average velocity $= \\frac{2R}{t} = \\frac{20}{5} = 4\\text{ m/s}$.",
    "tags": [
      "Kerala (Engg.) 2001",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-13",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Medium",
    "questionText": "Walks 2.5 km to market at 5 km/h (30 min) and returns at 7.5 km/h. Average speed from 0 to 40 min is:",
    "options": [
      "5 km/h",
      "25/4 km/h",
      "30/4 km/h",
      "45/8 km/h"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Total distance $= 2.5 + 1.25 = 3.75\\text{ km}$. $v_{\\text{avg}} = \\frac{3.75}{40/60} = \\frac{45}{8}\\text{ km/h}$.",
    "tags": [
      "AMU (Med.) 2002",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-14",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "Ratio of average velocity to average speed is always:",
    "options": [
      "Unity",
      "Unity or less",
      "Unity or more",
      "Less than unity"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $|\\vec{v}_{\\text{avg}}| / v_{\\text{avg}} \\leq 1$.",
    "tags": [
      "MP PET 2002",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-15",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "First half time with v\u2081 and next half time with v\u2082. Mean velocity is:",
    "options": [
      "2/V = 1/v\u2081 + 1/v\u2082",
      "V = (v\u2081 + v\u2082)/2",
      "V = \u221a(v\u2081 v\u2082)",
      "V = v\u2081/v\u2082"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: For equal time intervals, $V = \\frac{v_1 + v_2}{2}$.",
    "tags": [
      "RPET 1999",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-16",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Medium",
    "questionText": "If car covers 2/5th distance with v\u2081 and 3/5th with v\u2082, average speed is:",
    "options": [
      "1/2 \u221a(v\u2081v\u2082)",
      "(v\u2081 + v\u2082)/2",
      "2v\u2081v\u2082 / (v\u2081 + v\u2082)",
      "5v\u2081v\u2082 / (3v\u2081 + 2v\u2082)"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v_{\\text{avg}} = \\frac{5v_1 v_2}{3v_1 + 2v_2}$.",
    "tags": [
      "MP PMT 2003",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-17",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Medium",
    "questionText": "For s-t graph curving upward O to A then straight line A to D:",
    "options": [
      "Object moves with constantly increasing velocity from O to A and then with constant velocity",
      "Velocity increases uniformly",
      "Average velocity is zero",
      "Graph is impossible"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Bending toward s-axis indicates positive acceleration, straight line indicates constant velocity.",
    "tags": [
      "DCE 2004",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-18",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "Numerical ratio of displacement to distance covered is always:",
    "options": [
      "Less than one",
      "Equal to one",
      "Equal to or less than one",
      "Equal to or greater than one"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Displacement $\\leq$ Distance.",
    "tags": [
      "BHU 2004",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-19",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "100 m train at 45 km/hr (12.5 m/s) crosses 1 km bridge. Time taken is:",
    "options": [
      "58 s",
      "68 s",
      "78 s",
      "88 s"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $t = \\frac{1100}{12.5} = 88\\text{ s}$.",
    "tags": [
      "BHU 2004",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-20",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "Moves 20 s with 3 m/s, 20 s with 4 m/s, 20 s with 5 m/s. Average velocity is:",
    "options": [
      "3 m/s",
      "4 m/s",
      "5 m/s",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v_{\\text{avg}} = \\frac{3+4+5}{3} = 4\\text{ m/s}$.",
    "tags": [
      "MH CET 2004",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-21",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "The correct statement is:",
    "options": [
      "A body having zero velocity will not necessarily have zero acceleration",
      "A body having zero velocity will necessarily have zero acceleration",
      "A body having uniform speed can have only uniform acceleration",
      "A body having non-uniform velocity will have zero acceleration"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: At highest point of vertical projection, $v=0$ but $a=g \\neq 0$.",
    "tags": [
      "MP PET 1993",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-22",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Medium",
    "questionText": "Bullet loses half velocity after penetrating 3 cm. How much further will it penetrate before coming to rest?",
    "options": [
      "1.5 cm",
      "1.0 cm",
      "3.0 cm",
      "2.0 cm"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = u^2/8 \\implies x = 1.0\\text{ cm}$.",
    "tags": [
      "AIEEE 2005",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-23",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Medium",
    "questionText": "Boy B runs from (a,0) at v\u2081 along y-axis. Boy A from origin runs at v to catch B in time t. Then t is:",
    "options": [
      "a / \u221a(v\u00b2 + v\u2081\u00b2)",
      "a / \u221a(v\u00b2 - v\u2081\u00b2)",
      "a / (v - v\u2081)",
      "a / (v + v\u2081)"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $(vt)^2 = a^2 + (v_1 t)^2 \\implies t = \\frac{a}{\\sqrt{v^2 - v_1^2}}$.",
    "tags": [
      "CBSE PMT 2005",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-uni-24",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Uniform Motion",
    "difficulty": "Easy",
    "questionText": "Half distance at 40 kmph and remaining half at 60 kmph. Average velocity is:",
    "options": [
      "40",
      "45",
      "48",
      "50"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v_{\\text{avg}} = \\frac{2(40)(60)}{40 + 60} = 48\\text{ km/h}$.",
    "tags": [
      "Kerala PMT 2005",
      "Uniform Motion"
    ]
  },
  {
    "id": "mot-non-01",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Particle starts from rest with constant acceleration. S\u2081 in first 10 s, S\u2082 in next 10 s. Then:",
    "options": [
      "S\u2081 = S\u2082",
      "S\u2081 = S\u2082 / 3",
      "S\u2081 = S\u2082 / 2",
      "S\u2081 = S\u2082 / 4"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Ratio of distance in equal intervals is $1 : 3 \\implies S_1 = S_2 / 3$.",
    "tags": [
      "NCERT 1972",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-02",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "x = a\u2080 + a\u2081 t + a\u2082 t\u00b2. The acceleration of the particle is:",
    "options": [
      "a\u2080",
      "a\u2081",
      "2a\u2082",
      "a\u2082"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = \\frac{d^2 x}{dt^2} = 2a_2$.",
    "tags": [
      "NCERT 1974",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-03",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Coordinates are x = a t\u00b2 and y = b t\u00b2. Speed of particle at any moment is:",
    "options": [
      "2t(a + b)",
      "2t\u221a(a\u00b2 - b\u00b2)",
      "t\u221a(a\u00b2 + b\u00b2)",
      "2t\u221a(a\u00b2 + b\u00b2)"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v = \\sqrt{(2at)^2 + (2bt)^2} = 2t\\sqrt{a^2 + b^2}$.",
    "tags": [
      "DPMT 1984",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-04",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Electron starts from rest with v = kt (k = 2 m/s\u00b2). Distance in first 3 s is:",
    "options": [
      "9 m",
      "16 m",
      "27 m",
      "36 m"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $s = \\int_0^3 2t\\,dt = 9\\text{ m}$.",
    "tags": [
      "NCERT 1982",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-05",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Displacement x \u221d t\u00b3. The magnitude of acceleration is:",
    "options": [
      "Increasing with time",
      "Decreasing with time",
      "Constant but not zero",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = \\frac{d^2 x}{dt^2} = 6 c t$ (increasing linearly).",
    "tags": [
      "NCERT 1990",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-06",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Instantaneous velocity can be measured:",
    "options": [
      "Graphically",
      "Vectorially",
      "By speedometer",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Instantaneous velocity is the slope of tangent on x-t graph.",
    "tags": [
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-07",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Body moves from rest with constant acceleration. S\u2081 in first (p - 1) s, S\u2082 in first p s. Displacement in (p\u00b2 - p + 1)th s is:",
    "options": [
      "S\u2081 + S\u2082",
      "S\u2081 S\u2082",
      "S\u2081 - S\u2082",
      "S\u2081 / S\u2082"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $s_n = \\frac{a}{2}(2n - 1) \\implies S_1 + S_2$.",
    "tags": [
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-08",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Body under several forces has zero acceleration when:",
    "options": [
      "Body is light",
      "Body is heavy",
      "Body is a point",
      "Vector sum of forces is zero"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\sum \\vec{F} = 0 \\implies \\vec{a} = 0$.",
    "tags": [
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-09",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Hard",
    "questionText": "Body starts from origin with v = 4t\u00b3 - 2t. Acceleration when it is 2 m from origin is:",
    "options": [
      "28 m/s\u00b2",
      "22 m/s\u00b2",
      "12 m/s\u00b2",
      "10 m/s\u00b2"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $x = t^4 - t^2 = 2 \\implies t = \\sqrt{2}\\text{ s}$. $a = 12t^2 - 2 = 22\\text{ m/s}^2$.",
    "tags": [
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-10",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Hard",
    "questionText": "Relation between time and distance is t = \u03b1x\u00b2 + \u03b2x. The retardation is:",
    "options": [
      "2\u03b1v\u00b3",
      "2\u03b2v\u00b3",
      "2\u03b1\u03b2v\u00b3",
      "2\u03b2\u00b2v\u00b3"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = -2\\alpha v^3 \\implies \\text{Retardation} = 2\\alpha v^3$.",
    "tags": [
      "NCERT 1982",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-11",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "For uniform acceleration with average speeds v\u2081, v\u2082, v\u2083 in consecutive intervals t\u2081, t\u2082, t\u2083:",
    "options": [
      "(v\u2081 - v\u2082) : (v\u2082 - v\u2083) = (t\u2081 - t\u2082) : (t\u2082 + t\u2083)",
      "(v\u2081 - v\u2082) : (v\u2082 - v\u2083) = (t\u2081 + t\u2082) : (t\u2082 + t\u2083)",
      "(v\u2081 - v\u2082) : (v\u2082 - v\u2083) = (t\u2081 - t\u2082) : (t\u2081 - t\u2083)",
      "(v\u2081 - v\u2082) : (v\u2082 - v\u2083) = (t\u2081 - t\u2082) : (t\u2082 - t\u2083)"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $(v_1 - v_2) / (v_2 - v_3) = (t_1 + t_2) / (t_2 + t_3)$.",
    "tags": [
      "NCERT 1982",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-12",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Acceleration of a moving body is found from:",
    "options": [
      "Area under v-t graph",
      "Area under s-t graph",
      "Slope of velocity-time graph",
      "Slope of s-t graph"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = \\text{slope of } v\\text{-}t\\text{ curve}$.",
    "tags": [
      "DPMT 1981",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-13",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Initial velocity is u and acceleration is f = at. Valid relation is:",
    "options": [
      "v = u + at\u00b2",
      "v = u + at\u00b2/2",
      "v = u + at",
      "v = u"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v = u + \\frac{1}{2}at^2$.",
    "tags": [
      "CPMT 1981",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-14",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "u = 10 m/s and retardation = 2 m/s\u00b2. Distance in 5th second is:",
    "options": [
      "1 m",
      "19 m",
      "50 m",
      "75 m"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $s_{5\\text{th}} = 10 - \\frac{2}{2}(9) = 1\\text{ m}$.",
    "tags": [
      "CPMT 1976",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-15",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Moving at 20 m/s stops after 10 m. Acceleration is:",
    "options": [
      "20 m/sec\u00b2",
      "-20 m/sec\u00b2",
      "-40 m/sec\u00b2",
      "+2 m/sec\u00b2"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = \\frac{-20^2}{2(10)} = -20\\text{ m/s}^2$.",
    "tags": [
      "EAMCET 1979",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-16",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Velocity with a = 2 m/s\u00b2 is 10 m/s. Velocity after 4 s is:",
    "options": [
      "12 m/sec",
      "14 m/sec",
      "16 m/sec",
      "18 m/sec"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v = 10 + 2(4) = 18\\text{ m/s}$.",
    "tags": [
      "EAMCET 1979",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-17",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Travels x in first 2 s and y in next 2 s from rest, then:",
    "options": [
      "y = x",
      "y = 2x",
      "y = 3x",
      "y = 4x"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Odd number ratio gives $y = 3x$.",
    "tags": [
      "EAMCET 1982",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-18",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "u = 7 m/s, a = 4 m/s\u00b2. Distance covered in 5th second is:",
    "options": [
      "25 m",
      "35 m",
      "50 m",
      "85 m"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $s_{5\\text{th}} = 7 + 2(9) = 25\\text{ m}$.",
    "tags": [
      "MP PMT 1994",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-19",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "v = 20 + 0.1t\u00b2. Body is undergoing:",
    "options": [
      "Uniform acceleration",
      "Uniform retardation",
      "Non-uniform acceleration",
      "Zero acceleration"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = 0.2t$ (Non-uniform acceleration).",
    "tags": [
      "MNR 1995",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-20",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Which statement is FALSE?",
    "options": [
      "A body can have zero velocity and still be accelerated",
      "A body can have a constant velocity and still have a varying speed",
      "A body can have a constant speed and still have a varying velocity",
      "The direction of velocity can change when acceleration is constant"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Constant velocity implies constant speed.",
    "tags": [
      "Manipal MEE 1995",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-21",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Hard",
    "questionText": "Travels 24 m and 64 m in consecutive intervals of 4 s. Initial velocity is:",
    "options": [
      "1 m/sec",
      "10 m/sec",
      "5 m/sec",
      "2 m/sec"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $u = 1\\text{ m/s}, a = 2.5\\text{ m/s}^2$.",
    "tags": [
      "MP PET 1995",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-22",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "x = 3t\u00b2 - 6t, y = t\u00b2 - 2t. Which is correct?",
    "options": [
      "Acceleration zero at t=0",
      "Velocity zero at t=0",
      "Velocity zero at t = 1 second",
      "Never zero"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v_x = 6t-6 = 0$ and $v_y = 2t-2 = 0$ at $t = 1\\text{ s}$.",
    "tags": [
      "MP PMT 1995",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-23",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "From rest with a = 8 m/s\u00b2, distance in 5th second is:",
    "options": [
      "36 metres",
      "40 metres",
      "100 metres",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $s_{5\\text{th}} = 4(9) = 36\\text{ m}$.",
    "tags": [
      "MP PMT 1996",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-24",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Enters 4 m tube at 1 km/s, exits at 9 km/s. Time inside is:",
    "options": [
      "8 \u00d7 10\u207b\u00b3 s",
      "80 \u00d7 10\u207b\u00b3 s",
      "800 \u00d7 10\u207b\u00b3 s",
      "8 \u00d7 10\u207b\u2074 s"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $t = 4/5000 = 8 \\times 10^{-4}\\text{ s}$.",
    "tags": [
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-25",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Hard",
    "questionText": "Cars A and B (v\u2081 > v\u2082), A ahead by d applies retardation a. No collision if:",
    "options": [
      "d < (v\u2081 - v\u2082)\u00b2 / 2a",
      "d < (v\u2081\u00b2 - v\u2082\u00b2) / 2a",
      "d > (v\u2081 - v\u2082)\u00b2 / 2a",
      "d > (v\u2081\u00b2 - v\u2082\u00b2) / 2a"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $d > \\frac{(v_1 - v_2)^2}{2a}$.",
    "tags": [
      "Pb. PET 2004",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-26",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "10 kg body at 10 m/s moves at -2 m/s after force for 4 s. Acceleration is:",
    "options": [
      "3 m/sec\u00b2",
      "-3 m/sec\u00b2",
      "0.3 m/sec\u00b2",
      "-0.3 m/sec\u00b2"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = (-2-10)/4 = -3\\text{ m/s}^2$.",
    "tags": [
      "MP PET 1997",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-27",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Starts from rest with a_x = 6 m/s\u00b2, a_y = 8 m/s\u00b2. Distance from origin after 4 s is:",
    "options": [
      "56 m",
      "64 m",
      "80 m",
      "128 m"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $x = 48\\text{ m}, y = 64\\text{ m} \\implies d = 80\\text{ m}$.",
    "tags": [
      "MP PMT 1999",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-28",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Car at 10 m/s stops in 20 m. At 30 m/s it stops in:",
    "options": [
      "20/3 m",
      "20 m",
      "60 m",
      "180 m"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $s = 3^2 \\times 20 = 180\\text{ m}$.",
    "tags": [
      "MP PMT 1999",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-29",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "y = a + bt + ct\u00b2 - dt\u2074. Initial velocity and acceleration are:",
    "options": [
      "b, -4d",
      "-b, 2c",
      "b, 2c",
      "2c, -4d"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v_0 = b, a_0 = 2c$.",
    "tags": [
      "CPMT 1999",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-30",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Car at 40 km/h stops in 2 m. At 80 km/h stopping distance is:",
    "options": [
      "8 m",
      "2 m",
      "4 m",
      "6 m"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $s = 2^2 \\times 2 = 8\\text{ m}$.",
    "tags": [
      "CBSE PMT 1998",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-31",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Elevator (h = 2.7 m) ascends with a = 1.2 m/s\u00b2. Free fall time of bolt is:",
    "options": [
      "0.54 s",
      "\u221a6 s",
      "0.7 s",
      "1 s"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $t = \\sqrt{2(2.7)/11.0} \\approx 0.7\\text{ s}$.",
    "tags": [
      "KCET 1994",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-32",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "x = 2t\u00b2 + t + 5. Acceleration at t = 2 s is:",
    "options": [
      "4 m/s\u00b2",
      "8 m/s\u00b2",
      "10 m/s\u00b2",
      "15 m/s\u00b2"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = 4\\text{ m/s}^2$.",
    "tags": [
      "EAMCET (Engg.) 1995",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-33",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Two trains at 40 m/s 2.0 km apart on same track. Deceleration to avoid collision is:",
    "options": [
      "11.8 m/s\u00b2",
      "11.0 m/s\u00b2",
      "2.1 m/s\u00b2",
      "0.8 m/s\u00b2"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = 40^2 / 2000 = 0.8\\text{ m/s}^2$.",
    "tags": [
      "AMU 1995",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-34",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "From rest with a = 5 m/s\u00b2, speed at 10 s is:",
    "options": [
      "50",
      "5",
      "2",
      "0.5"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v = 5(10) = 50\\text{ m/s}$.",
    "tags": [
      "SCRA 1994",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-35",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Detached boggy stops with uniform retardation while train continues at uniform speed. Distances ratio is:",
    "options": [
      "Both equal",
      "First will be half of second",
      "First will be 1/4 of second",
      "No definite ratio"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Boggy distance is half of train distance.",
    "tags": [
      "RPET 1997",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-36",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "From rest, ratio of distance in 4th and 3rd second is:",
    "options": [
      "5/7",
      "7/5",
      "3/7",
      "7/3"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $s_{4\\text{th}} / s_{3\\text{rd}} = 7/5$.",
    "tags": [
      "CBSE PMT 1993",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-37",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "a = 3t\u00b2 + 2t + 2 with u = 2 m/s at t=0. Velocity at t = 2 s is:",
    "options": [
      "12 m/s",
      "18 m/s",
      "27 m/s",
      "36 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v = 2 + [t^3 + t^2 + 2t]_0^2 = 2 + 8 + 4 + 4 = 18\\text{ m/s}$.",
    "tags": [
      "MNR 1994",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-38",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "S = t\u00b3 - 6t\u00b2 + 3t + 4. Velocity when acceleration is zero is:",
    "options": [
      "3 ms\u207b\u00b9",
      "-12 ms\u207b\u00b9",
      "42 ms\u207b\u00b9",
      "-9 ms\u207b\u00b9"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = 6t - 12 = 0 \\implies t = 2\\text{ s}$. $v = 3(4) - 12(2) + 3 = -9\\text{ m/s}$.",
    "tags": [
      "CBSE PMT 1994",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-39",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "For a moving body at any instant:",
    "options": [
      "If not moving, acceleration is necessarily zero",
      "If slowing, retardation is negative",
      "If slowing, distance is negative",
      "If displacement, velocity, acceleration known, future position can be found"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Kinematic equations determine future motion from initial state.",
    "tags": [
      "NTSE 1995",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-40",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "x = 7t + 4t\u00b2, y = 5t. Acceleration of particle at t = 5 s is:",
    "options": [
      "Zero",
      "8 m/s\u00b2",
      "20 m/s\u00b2",
      "40 m/s\u00b2"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a_x = 8, a_y = 0 \\implies a = 8\\text{ m/s}^2$.",
    "tags": [
      "SCRA 1996",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-41",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Engine produces a = 4 m/s\u00b2. If it pulls another car of same mass, acceleration is:",
    "options": [
      "8 m/s\u00b2",
      "2 m/s\u00b2",
      "4 m/s\u00b2",
      "1/2 m/s\u00b2"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = F/2m = 4/2 = 2\\text{ m/s}^2$.",
    "tags": [
      "RPET 1996",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-42",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "From rest travels 120 cm (1.2 m) in 6th second. Acceleration is:",
    "options": [
      "0.20 m/s\u00b2",
      "0.027 m/s\u00b2",
      "0.218 m/s\u00b2",
      "0.03 m/s\u00b2"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $1.2 = \\frac{a}{2}(11) \\implies a = 2.4/11 = 0.218\\text{ m/s}^2$.",
    "tags": [
      "AFMC 1997",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-43",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Car at rest accelerates to 144 km/h (40 m/s) in 20 s. Distance covered is:",
    "options": [
      "20 m",
      "400 m",
      "1440 m",
      "2880 m"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = 40/20 = 2\\text{ m/s}^2$. $s = \\frac{1}{2}(2)(400) = 400\\text{ m}$.",
    "tags": [
      "CBSE PMT 1997",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-44",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "x = at\u00b2 - bt\u00b3. Acceleration will be zero at time t equal to:",
    "options": [
      "a/b",
      "2a/3b",
      "a/3b",
      "Zero"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = 2a - 6bt = 0 \\implies t = \\frac{a}{3b}$.",
    "tags": [
      "CBSE PMT 1997",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-45",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Truck and car with equal velocity apply brakes (equal retarding force). Then:",
    "options": [
      "Truck will cover less distance",
      "Car will cover less distance",
      "Both cover equal distance",
      "None"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Stopping distance $s = \\frac{m v^2}{2F} \\propto m$. Smaller mass of car gives less stopping distance.",
    "tags": [
      "CPMT 1997",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-46",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Train at 72 kmph (20 m/s) brought to rest in 200 m. Retardation should be:",
    "options": [
      "20 ms\u207b\u00b2",
      "10 ms\u207b\u00b2",
      "2 ms\u207b\u00b2",
      "1 ms\u207b\u00b2"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = \\frac{20^2}{2(200)} = 1\\text{ ms}^{-2}$.",
    "tags": [
      "SCRA 1998",
      "MP PMT 2004",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-47",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "s = 6t\u00b2 - t\u00b3. The time in seconds at which particle attains zero velocity again is:",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v = 12t - 3t^2 = 0 \\implies t(12 - 3t) = 0 \\implies t = 4\\text{ s}$.",
    "tags": [
      "SCRA 1998",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-48",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Relation between displacement S, time t, and acceleration f for uniform acceleration is:",
    "options": [
      "S = ut + 1/2 ft\u00b2",
      "S = (u + f)t",
      "S = v\u00b2 - 2fs",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $S = ut + \\frac{1}{2}ft^2$.",
    "tags": [
      "DCE 1999",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-49",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Car A starts with v = 40 m/s, Car B from same point starts with a = 4 m/s\u00b2. B catches A after:",
    "options": [
      "10 sec",
      "20 sec",
      "30 sec",
      "35 sec"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $40t = \\frac{1}{2}(4)t^2 \\implies 40t = 2t^2 \\implies t = 20\\text{ s}$.",
    "tags": [
      "RPET 1999",
      "SCRA 1996",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-50",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "x = a + bt\u00b2 (a = 15 cm, b = 3 cm/s\u00b2). Instantaneous velocity at t = 3 s is:",
    "options": [
      "36 cm/sec",
      "18 cm/sec",
      "16 cm/sec",
      "32 cm/sec"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v = 2bt = 2(3)(3) = 18\\text{ cm/s}$.",
    "tags": [
      "AMU (Med.) 2000",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-51",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Starts from rest with constant acceleration. S\u2081, S\u2082, S\u2083 in consecutive 5 s intervals. Relation is:",
    "options": [
      "S\u2081 = S\u2082 = S\u2083",
      "5S\u2081 = 3S\u2082 = S\u2083",
      "S\u2081 = 1/3 S\u2082 = 1/5 S\u2083",
      "S\u2081 = 1/5 S\u2082 = 1/3 S\u2083"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Galileo's odd-number ratio: $S_1 : S_2 : S_3 = 1 : 3 : 5 \\implies S_1 = \\frac{S_2}{3} = \\frac{S_3}{5}$.",
    "tags": [
      "AMU (Engg.) 2000",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-52",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "x = at + bt\u00b2 - ct\u00b3. The acceleration of the body is:",
    "options": [
      "a + 2bt",
      "2b + 6ct",
      "2b - 6ct",
      "3b - 6ct\u00b2"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v = a + 2bt - 3ct^2 \\implies a = 2b - 6ct$.",
    "tags": [
      "BHU 2000",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-53",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Hard",
    "questionText": "Travels 10 m in first 5 s and 10 m in next 3 s under constant acceleration. Distance in next 2 s is:",
    "options": [
      "8.3 m",
      "9.3 m",
      "10.3 m",
      "None of above"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $u = 7/6\\text{ m/s}, a = 1/3\\text{ m/s}^2$. Total $s_{10} = 28.3\\text{ m}$. In last 2 s, $s = 28.3 - 20 = 8.3\\text{ m}$.",
    "tags": [
      "RPET 2000",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-54",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Distance proportional to square of time (s \u221d t\u00b2). Particle travels with:",
    "options": [
      "Uniform acceleration",
      "Uniform velocity",
      "Increasing acceleration",
      "Decreasing velocity"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $s = kt^2 \\implies a = 2k = \\text{constant}$ (Uniform acceleration).",
    "tags": [
      "RPET 1999",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-55",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Acceleration of a particle changes when:",
    "options": [
      "Direction of velocity changes",
      "Magnitude of velocity changes",
      "Both of above",
      "Speed changes"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\vec{a}$ changes if magnitude, direction, or both change.",
    "tags": [
      "RPMT 2000",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-56",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "u = at. Distance travelled in first 4 seconds is:",
    "options": [
      "4a",
      "12a",
      "6a",
      "8a"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $s = \\int_0^4 at\\,dt = \\frac{a(16)}{2} = 8a$.",
    "tags": [
      "DCE 2000",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-57",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "3t = \u221a(3x) + 6. Displacement when velocity is zero is:",
    "options": [
      "24 metres",
      "12 metres",
      "5 metres",
      "Zero"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $3x = (3t-6)^2 \\implies x = 3t^2 - 12t + 12$. $v = 6t - 12 = 0 \\implies t = 2\\text{ s}$. At $t = 2\\text{ s}$, $x = 3(4) - 24 + 12 = 0$.",
    "tags": [
      "CPMT 2000",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-58",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Constant force on 0.9 kg at rest for 10 s moves it 250 m. Force is:",
    "options": [
      "3 N",
      "3.5 N",
      "4.0 N",
      "4.5 N"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $250 = \\frac{1}{2}a(100) \\implies a = 5\\text{ m/s}^2$. $F = ma = 0.9 \\times 5 = 4.5\\text{ N}$.",
    "tags": [
      "EAMCET (Engg.) 2000",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-59",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Average velocity for distance 3.06 m is 0.34 m/s. If velocity change is 0.18 m/s, acceleration is:",
    "options": [
      "0.01 ms\u207b\u00b2",
      "0.02 ms\u207b\u00b2",
      "0.03 ms\u207b\u00b2",
      "0.04 ms\u207b\u00b2"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $t = 3.06/0.34 = 9\\text{ s}$. $a = \\frac{\\Delta v}{t} = \\frac{0.18}{9} = 0.02\\text{ ms}^{-2}$.",
    "tags": [
      "EAMCET (Med.) 2000",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-60",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "s = 3t\u00b3 + 7t\u00b2 + 14t + 8 m. Acceleration at t = 1 s is:",
    "options": [
      "10 m/s\u00b2",
      "16 m/s\u00b2",
      "25 m/s\u00b2",
      "32 m/s\u00b2"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = 18t + 14 = 18(1) + 14 = 32\\text{ m/s}^2$.",
    "tags": [
      "CBSE PMT 2000",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-61",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "x at t=0,1,2,3 is -2, 0, 6, 16 m. The motion is:",
    "options": [
      "Uniform, accelerated",
      "Uniform, decelerated",
      "Non-uniform, accelerated",
      "Not enough data"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v_1 = 2, v_2 = 6, v_3 = 10\\text{ m/s}$. Accelerations vary, so non-uniform accelerated.",
    "tags": [
      "AMU (Engg.) 2001",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-62",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "As a tennis ball falls and bounces, directions of which change?",
    "options": [
      "Velocity only",
      "Displacement and velocity",
      "Acceleration, velocity, displacement",
      "Displacement and acceleration"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Acceleration due to gravity is always downwards, while velocity and displacement reverse upward.",
    "tags": [
      "AMU (Engg.) 2001",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-63",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "s = 2t\u00b2 + 2t + 4. Acceleration of particle is:",
    "options": [
      "2 m/s\u00b2",
      "4 m/s\u00b2",
      "6 m/s\u00b2",
      "8 m/s\u00b2"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = \\frac{d^2 s}{dt^2} = 4\\text{ m/s}^2$.",
    "tags": [
      "CPMT 2001",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-64",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Hard",
    "questionText": "A starts from rest with a\u2081. After 2 s, B starts with a\u2082. If distances in 5th second of A are equal, a\u2081 : a\u2082 is:",
    "options": [
      "5 : 9",
      "5 : 7",
      "9 : 5",
      "9 : 7"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $s_{A(5\\text{th})} = \\frac{a_1}{2}(9) = s_{B(3\\text{rd})} = \\frac{a_2}{2}(5) \\implies 9a_1 = 5a_2 \\implies \\frac{a_1}{a_2} = \\frac{5}{9}$.",
    "tags": [
      "AIIMS 2001",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-65",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Bullet velocity reduces from 200 m/s to 100 m/s in 10 cm (0.1 m) block. Retardation is:",
    "options": [
      "10 \u00d7 10\u2074 m/s\u00b2",
      "12 \u00d7 10\u2074 m/s\u00b2",
      "13.5 \u00d7 10\u2074 m/s\u00b2",
      "15 \u00d7 10\u2074 m/s\u00b2"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = \\frac{200^2 - 100^2}{2(0.1)} = \\frac{30000}{0.2} = 15 \\times 10^4\\text{ m/s}^2$.",
    "tags": [
      "AIIMS 2001",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-66",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "5 kg body at 20 m/s. Force of 100 N applied for 10 s. Final velocity is:",
    "options": [
      "200 m/s",
      "220 m/s",
      "240 m/s",
      "260 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = 100/5 = 20\\text{ m/s}^2$. $v = 20 + 20(10) = 220\\text{ m/s}$.",
    "tags": [
      "MP PMT 2000",
      "RPET 2001",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-67",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Hard",
    "questionText": "Accelerates at 2 m/s\u00b2 for 10 s, constant speed for 30 s, decelerates at 4 m/s\u00b2 to rest. Total distance is:",
    "options": [
      "750 m",
      "800 m",
      "700 m",
      "850 m"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $s_1 = \\frac{1}{2}(2)(100) = 100\\text{ m}, v = 20\\text{ m/s}$. $s_2 = 20(30) = 600\\text{ m}$. $s_3 = 20^2 / 2(4) = 50\\text{ m}$. Total $= 750\\text{ m}$.",
    "tags": [
      "DCE 2001",
      "AIIMS 2002",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-68",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Hard",
    "questionText": "Max acceleration 5 m/s\u00b2, max retardation 10 m/s\u00b2. Minimum time to cover 1.5 km (1500 m) is:",
    "options": [
      "30 sec",
      "15 sec",
      "10 sec",
      "5 sec"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $S = \\frac{1}{2}\\frac{\\alpha\\beta}{\\alpha+\\beta}t^2 \\implies 1500 = \\frac{1}{2}\\frac{50}{15}t^2 \\implies t^2 = 900 \\implies t = 30\\text{ s}$.",
    "tags": [
      "Pb. PMT 2002",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-69",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Path of particle under constant force fixed in magnitude and direction is:",
    "options": [
      "Straight line",
      "Circle",
      "Parabola",
      "Ellipse"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Motion along the direction of constant force is a Straight line (or parabola if initial angle).",
    "tags": [
      "MP PET 2002",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-70",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "At 50 km/hr stops in 6 m. At 100 km/hr (double speed) minimum stopping distance is:",
    "options": [
      "6m",
      "12m",
      "18m",
      "24m"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $s \\propto v^2 \\implies 2^2 \\times 6 = 24\\text{ m}$.",
    "tags": [
      "AIEEE 2003",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-71",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Hard",
    "questionText": "Student 50 m behind bus (accelerating at 1 m/s\u00b2). Minimum velocity u to catch bus is:",
    "options": [
      "5 ms\u207b\u00b9",
      "8 ms\u207b\u00b9",
      "10 ms\u207b\u00b9",
      "12 ms\u207b\u00b9"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $ut = 50 + \\frac{1}{2}(1)t^2 \\implies u = \\frac{50}{t} + \\frac{t}{2}$. Minimized at $t = 10\\text{ s} \\implies u = 10\\text{ m/s}$.",
    "tags": [
      "KCET 2003",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-72",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Body A with uniform acceleration a from rest meets B moving at constant velocity v after time t:",
    "options": [
      "2v / a",
      "v / a",
      "v / 2a",
      "\u221a(v / 2a)"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\frac{1}{2}at^2 = vt \\implies t = \\frac{2v}{a}$.",
    "tags": [
      "MP PET 2003",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-73",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "x = 2 - 5t + 6t\u00b2. Initial velocity (at t=0) is:",
    "options": [
      "-5 m/s",
      "6 m/s",
      "-3 m/s",
      "3 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v = \\frac{dx}{dt} = -5 + 12t$. At $t = 0$, $v = -5\\text{ m/s}$.",
    "tags": [
      "MNR 1987",
      "Pb. PET 2004",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-74",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Car accelerates at a from rest for T, then decelerates to rest. Average speed is:",
    "options": [
      "aT / 4",
      "3aT / 2",
      "aT / 2",
      "aT"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Maximum velocity $v_{\\text{max}} = aT$. For triangular $v\\text{-}t$ profile, $v_{\\text{avg}} = \\frac{v_{\\text{max}}}{2} = \\frac{aT}{2}$.",
    "tags": [
      "MP PMT 2004",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-75",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Accelerates from rest to 27.5 m/s in 10 s. Distance in next 10 s is:",
    "options": [
      "550 m",
      "137.5 m",
      "412.5 m",
      "275 m"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = 2.75\\text{ m/s}^2$. $s = (27.5)(10) + \\frac{1}{2}(2.75)(100) = 275 + 137.5 = 412.5\\text{ m}$.",
    "tags": [
      "BCECE 2004",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-76",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "v = (180 - 16x)^(1/2). Acceleration is:",
    "options": [
      "Zero",
      "8 m/s\u00b2",
      "-8 m/s\u00b2",
      "4 m/s\u00b2"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = v \\frac{dv}{dx} = v \\left[\\frac{1}{2}(180-16x)^{-1/2}(-16)\\right] = -8\\text{ m/s}^2$.",
    "tags": [
      "J & K CET 2004",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-77",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "x \u221d t\u00b3. How does acceleration depend on time?",
    "options": [
      "a \u221d t\u00b2",
      "a \u221d 2t",
      "a \u221d t\u00b3",
      "a \u221d t"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = \\frac{d^2 x}{dt^2} \\propto t$.",
    "tags": [
      "Pb. PET 2001",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-78",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Starting from rest, a = 2(t - 1). Velocity at t = 5 s is:",
    "options": [
      "15 m/sec",
      "25 m/sec",
      "5 m/sec",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v = [t^2 - 2t]_0^5 = 25 - 10 = 15\\text{ m/s}$.",
    "tags": [
      "RPET 2002",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-79",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Uniform acceleration covers 40 m in first 5 s and 65 m in next 5 s. Initial velocity is:",
    "options": [
      "4 m/s",
      "2.5 m/s",
      "5.5 m/s",
      "11 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = 1\\text{ m/s}^2 \\implies u = 5.5\\text{ m/s}$.",
    "tags": [
      "Pb. PET 2003",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-80",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "Speed of identical cars are u and 4u. Ratio of stopping distances is:",
    "options": [
      "1 : 1",
      "1 : 4",
      "1 : 8",
      "1 : 16"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $s \\propto u^2 \\implies 1 : 16$.",
    "tags": [
      "AIEEE 2002",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-81",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "x = a e^(-\u03b1t) + b e^(\u03b2t). The velocity will:",
    "options": [
      "Go on decreasing with time",
      "Be independent of \u03b1 and \u03b2",
      "Drop to zero when \u03b1 = \u03b2",
      "Go on increasing with time"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = a\\alpha^2 e^{-\\alpha t} + b\\beta^2 e^{\\beta t} > 0$, so velocity increases with time.",
    "tags": [
      "CBSE PMT 2005",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-82",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Hard",
    "questionText": "Accelerates at f through S, constant speed for t, decelerates at f/2 to rest (total 15 S). Then:",
    "options": [
      "S = 1/2 ft\u00b2",
      "S = 1/4 ft\u00b2",
      "S = 1/72 ft\u00b2",
      "S = 1/6 ft\u00b2"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $S = \\frac{1}{72}ft^2$.",
    "tags": [
      "AIEEE 2005",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-83",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Hard",
    "questionText": "Man 45 m behind bus (a = 2.5 m/s\u00b2). Minimum velocity to catch bus is:",
    "options": [
      "12 m/s",
      "14 m/s",
      "15 m/s",
      "16 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $u = \\frac{45}{t} + 1.25t = 15\\text{ m/s}$ at $t = 6\\text{ s}$.",
    "tags": [
      "J&K CET 2005",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-84",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "x = 4(t - 2) + a(t - 2)\u00b2. Which is true?",
    "options": [
      "Initial velocity is 4",
      "Acceleration is 2a",
      "Particle is at origin at t=0",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\frac{d^2 x}{dt^2} = 2a$.",
    "tags": [
      "J&K CET 2005",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-85",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Medium",
    "questionText": "Ratio of distance in 5th sec to distance in 5 sec from rest is:",
    "options": [
      "9/25",
      "3/5",
      "25/9",
      "1/25"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $s_{5\\text{th}} / s_5 = \\frac{9a/2}{25a/2} = \\frac{9}{25}$.",
    "tags": [
      "Kerala PET 2005",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-non-86",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Non-uniform Motion",
    "difficulty": "Easy",
    "questionText": "What determines the nature of the path followed by the particle?",
    "options": [
      "Speed",
      "Velocity",
      "Acceleration",
      "Direction of velocity & acceleration"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Angle between initial velocity and acceleration determines trajectory (straight line if $0^\\circ/180^\\circ$, parabola if oblique).",
    "tags": [
      "AFMC 2005",
      "Non-uniform Motion"
    ]
  },
  {
    "id": "mot-rel-01",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Relative Motion",
    "difficulty": "Easy",
    "questionText": "Two trains (50 m each) in opposite direction at 10 m/s and 15 m/s. Crossing time is:",
    "options": [
      "2 s",
      "4 s",
      "2\u221a3 s",
      "4\u221a3 s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $t = \\frac{50 + 50}{10 + 15} = \\frac{100}{25} = 4\\text{ s}$.",
    "tags": [
      "CPMT 1999",
      "Relative Motion"
    ]
  },
  {
    "id": "mot-rel-02",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Relative Motion",
    "difficulty": "Easy",
    "questionText": "120 m train at 20 m/s and 130 m train at 30 m/s in opposite direction cross in:",
    "options": [
      "6 s",
      "36 s",
      "38 s",
      "5 s"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $t = \\frac{120 + 130}{20 + 30} = \\frac{250}{50} = 5\\text{ s}$.",
    "tags": [
      "CPMT 1996",
      "Relative Motion"
    ]
  },
  {
    "id": "mot-rel-03",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Relative Motion",
    "difficulty": "Easy",
    "questionText": "210 m train north at 25 m/s, bird south at 5 m/s. Crossing time is:",
    "options": [
      "6 s",
      "7 s",
      "9 s",
      "10 s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $t = \\frac{210}{25 + 5} = 7\\text{ s}$.",
    "tags": [
      "AMU (Med.) 2001",
      "Relative Motion"
    ]
  },
  {
    "id": "mot-rel-04",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Relative Motion",
    "difficulty": "Medium",
    "questionText": "Police jeep at 45 km/h chases thief at 153 km/h. Muzzle speed 180 m/s. Bullet strikes thief at:",
    "options": [
      "150 m/s",
      "27 m/s",
      "450 m/s",
      "250 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v_{\\text{bullet}} = 180 + 12.5 = 192.5\\text{ m/s}$. Strike speed $= 192.5 - 42.5 = 150\\text{ m/s}$.",
    "tags": [
      "BHU 2003",
      "Relative Motion"
    ]
  },
  {
    "id": "mot-rel-05",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Relative Motion",
    "difficulty": "Easy",
    "questionText": "Boat velocity 8 km/h across river, resultant 10 km/h. River velocity is:",
    "options": [
      "10 km/hr",
      "8 km/hr",
      "6 km/hr",
      "4 km/hr"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v_r = \\sqrt{10^2 - 8^2} = 6\\text{ km/h}$.",
    "tags": [
      "Pb. PET 2004",
      "Relative Motion"
    ]
  },
  {
    "id": "mot-rel-06",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Relative Motion",
    "difficulty": "Easy",
    "questionText": "150 m train north at 10 m/s, parrot south at 5 m/s. Crossing time is:",
    "options": [
      "12 sec",
      "8 sec",
      "15 sec",
      "10 sec"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $t = \\frac{150}{15} = 10\\text{ s}$.",
    "tags": [
      "CBSE PMT 1992",
      "Relative Motion"
    ]
  },
  {
    "id": "mot-rel-07",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Relative Motion",
    "difficulty": "Easy",
    "questionText": "Boat is (3\u00ee + 4\u0135), water is (-3\u00ee - 4\u0135). Relative velocity is:",
    "options": [
      "-6\u00ee - 8\u0135",
      "6\u00ee + 8\u0135",
      "8\u00ee",
      "6\u00ee"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\vec{v}_{\\text{rel}} = 6\\hat{i} + 8\\hat{j}$.",
    "tags": [
      "Pb. PET 2002",
      "Relative Motion"
    ]
  },
  {
    "id": "mot-rel-08",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Relative Motion",
    "difficulty": "Medium",
    "questionText": "Distance decreases at 6 m/s moving towards each other, increases at 4 m/s in same direction. Speeds are:",
    "options": [
      "5 m/s; 1 m/s",
      "4 m/s; 1 m/s",
      "4 m/s; 2 m/s",
      "5 m/s; 2 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v_1 + v_2 = 6, v_1 - v_2 = 4 \\implies v_1 = 5\\text{ m/s}, v_2 = 1\\text{ m/s}$.",
    "tags": [
      "RPET 1999",
      "Relative Motion"
    ]
  },
  {
    "id": "mot-rel-09",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Relative Motion",
    "difficulty": "Medium",
    "questionText": "Boat speed 5 km/h in river 3 km/h (width 1 km). Minimum round trip time is:",
    "options": [
      "5 min",
      "60 min",
      "20 min",
      "30 min"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Crosses perpendicular: $v = \\sqrt{25 - 9} = 4\\text{ km/h}$. $t = 2 \\times (1/4)\\text{ hr} = 0.5\\text{ hr} = 30\\text{ min}$.",
    "tags": [
      "J&K CET 2005",
      "Relative Motion"
    ]
  },
  {
    "id": "mot-rel-10",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Relative Motion",
    "difficulty": "Medium",
    "questionText": "For relativistic speed, if velocity is doubled, linear momentum will be:",
    "options": [
      "Doubled",
      "Less than double",
      "More than double",
      "Unchanged"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $p = \\frac{m_0 v}{\\sqrt{1 - v^2/c^2}}$. Relativistic mass increases with $v$, making momentum more than double.",
    "tags": [
      "Orissa JEE 2005",
      "Relative Motion"
    ]
  },
  {
    "id": "mot-rel-11",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Relative Motion",
    "difficulty": "Medium",
    "questionText": "River flows W to E at 5 m/min. Swim at 10 m/min. Direction for shortest path to south is:",
    "options": [
      "30\u00b0 with downstream",
      "60\u00b0 with downstream",
      "120\u00b0 with downstream",
      "South"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\sin\\theta = 5/10 = 1/2 \\implies \\theta = 30^\\circ$. Angle with downstream $= 90^\\circ + 30^\\circ = 120^\\circ$.",
    "tags": [
      "BHU 2005",
      "Relative Motion"
    ]
  },
  {
    "id": "mot-rel-12",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Relative Motion",
    "difficulty": "Easy",
    "questionText": "Train moving east, car moving north at same speed. Observed direction of car to train passenger is:",
    "options": [
      "East-north",
      "West-north (North-West)",
      "South-east",
      "None"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\vec{v}_{CT} = v\\hat{j} - v\\hat{i}$ (West-North).",
    "tags": [
      "J & K CET 2004",
      "Relative Motion"
    ]
  },
  {
    "id": "mot-rel-13",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Relative Motion",
    "difficulty": "Medium",
    "questionText": "Express train at v\u2081 escapes collision with train at v\u2082 (same direction) by retardation a in time:",
    "options": [
      "t = (v\u2081 - v\u2082) / a",
      "t = (v\u2081\u00b2 - v\u2082\u00b2) / 2",
      "None",
      "Both"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $t = \\frac{v_1 - v_2}{a}$.",
    "tags": [
      "RPET 2002",
      "Relative Motion"
    ]
  },
  {
    "id": "mot-grav-01",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "A stone falls from a balloon descending at 12 m/s. Displacement of stone after 10 s is (g = 9.8 m/s\u00b2):",
    "options": [
      "490 m",
      "510 m",
      "610 m",
      "725 m"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $s = ut + \\frac{1}{2}gt^2 = 12(10) + \\frac{1}{2}(9.8)(100) = 120 + 490 = 610\\text{ m}$.",
    "tags": [
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-02",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Hard",
    "questionText": "Ball dropped from 10 m rebounds to 2.5 m (contact time 0.01 s). Average acceleration during contact is:",
    "options": [
      "2100 m/s\u00b2 downwards",
      "2100 m/s\u00b2 upwards",
      "1400 m/s\u00b2",
      "700 m/s\u00b2"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v_1 = \\sqrt{2(9.8)(10)} = 14\\text{ m/s}$ (down). $v_2 = \\sqrt{2(9.8)(2.5)} = 7\\text{ m/s}$ (up).\n$\\Delta v = 7 - (-14) = 21\\text{ m/s}$. $a = \\frac{21}{0.01} = 2100\\text{ m/s}^2$ (upwards).",
    "tags": [
      "BHU 1997",
      "CPMT 1997",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-03",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Hard",
    "questionText": "A projected up at 98 m/s, B projected up at 98 m/s after 4 s. Both bodies will meet after:",
    "options": [
      "6 sec",
      "8 sec",
      "10 sec",
      "12 sec"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $98t - \\frac{1}{2}gt^2 = 98(t-4) - \\frac{1}{2}g(t-4)^2 \\implies t = 12\\text{ s}$.",
    "tags": [
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-04",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Two bodies of masses m_a and m_b dropped from heights a and b. Ratio of time taken is:",
    "options": [
      "a : b",
      "b : a",
      "\u221aa : \u221ab",
      "a\u00b2 : b\u00b2"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $t = \\sqrt{\\frac{2h}{g}} \\implies \\frac{t_a}{t_b} = \\frac{\\sqrt{a}}{\\sqrt{b}}$.",
    "tags": [
      "NCERT 1972",
      "MP PMT 1993",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-05",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Distance in last second of free fall equals distance in first 3 seconds. Total fall time is:",
    "options": [
      "3 s",
      "5 s",
      "7 s",
      "9 s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\frac{g}{2}(2n - 1) = \\frac{1}{2}g(3^2) \\implies 2n - 1 = 9 \\implies n = 5\\text{ s}$.",
    "tags": [
      "MNR 1998",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-06",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Stone dropped from 44.1 m bridge. Another thrown down 1 s later strikes at same time. Initial speed of second stone is:",
    "options": [
      "12.25 m/s",
      "14.75 m/s",
      "16.23 m/s",
      "17.15 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $t_1 = \\sqrt{\\frac{2(44.1)}{9.8}} = 3\\text{ s}$. For second stone ($t_2 = 2\\text{ s}$): $44.1 = u(2) + \\frac{1}{2}(9.8)(4) \\implies 2u = 24.5 \\implies u = 12.25\\text{ m/s}$.",
    "tags": [
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-07",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Iron and wooden balls of same radius released from same height in vacuum reach ground simultaneously because:",
    "options": [
      "Acceleration due to gravity in vacuum is same irrespective of size and mass",
      "Gravity depends on mass",
      "No gravity in vacuum",
      "Resistance depends on mass"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: In vacuum (no air drag), all bodies accelerate at $g$ independent of mass.",
    "tags": [
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-08",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "If air resistance is considered, time of ascent t\u2081 and time of descent t\u2082 satisfy:",
    "options": [
      "t\u2081 = t\u2082",
      "t\u2081 < t\u2082 (time of rise is less than time of fall)",
      "t\u2081 > t\u2082",
      "t\u2081 = 2t\u2082"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Ascent acceleration $g + a_{\\text{drag}} >$ descent acceleration $g - a_{\\text{drag}} \\implies t_1 < t_2$.",
    "tags": [
      "RPET 2000",
      "KCET 2001",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-09",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Ball P dropped vertically, Q thrown horizontally from same height. Neglecting air drag:",
    "options": [
      "P reaches first",
      "Q reaches first",
      "Both reach ground at same time",
      "Masses decide time"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Vertical motion is identical for both ($u_y = 0 \\implies t = \\sqrt{2h/g}$).",
    "tags": [
      "MNR 1986",
      "BHU 1994",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-10",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Body dropped, another dropped 1 s later. Separation 2 s after release of second body is:",
    "options": [
      "4.9 m",
      "9.8 m",
      "19.6 m",
      "24.5 m"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: At $t = 3\\text{ s}$ and $t = 2\\text{ s}$: $\\Delta h = \\frac{1}{2}(9.8)(3^2 - 2^2) = 4.9(5) = 24.5\\text{ m}$.",
    "tags": [
      "CPMT 1983",
      "Kerala PMT 2002",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-11",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Projected upwards with 100 m/s. It strikes ground after (g = 10 m/s\u00b2):",
    "options": [
      "10 sec",
      "20 sec",
      "15 sec",
      "5 sec"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $T = \\frac{2u}{g} = \\frac{2(100)}{10} = 20\\text{ s}$.",
    "tags": [
      "NCERT 1981",
      "AFMC 1995",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-12",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Stone dropped from tower touches ground in 4 s. Height of tower is (g = 10 m/s\u00b2):",
    "options": [
      "80 m",
      "40 m",
      "20 m",
      "160 m"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $h = \\frac{1}{2}gt^2 = \\frac{1}{2}(10)(16) = 80\\text{ m}$.",
    "tags": [
      "MP PET 1986",
      "AFMC 1994",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-13",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Body released from top of height h takes t sec to reach ground. At t/2 sec its height from ground is:",
    "options": [
      "h/2",
      "h/4",
      "Depends on mass",
      "3h/4 from ground"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Distance fallen in $t/2$ is $x = \\frac{1}{2}g(t/2)^2 = h/4$. Height from ground $= h - h/4 = 3h/4$.",
    "tags": [
      "NCERT 1981",
      "MP PMT 2004",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-14",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Mass m slips along hemispherical surface of radius R. Velocity at bottom is:",
    "options": [
      "\u221a(Rg)",
      "\u221a(2Rg)",
      "2\u221a(\u03c0Rg)",
      "\u221a(\u03c0Rg)"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $mgR = \\frac{1}{2}mv^2 \\implies v = \\sqrt{2gR}$.",
    "tags": [
      "MP PMT 1993",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-15",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Hard",
    "questionText": "Frictionless wire AB on sphere of radius R (vertical chord from top A). Time to slip from A to B is:",
    "options": [
      "2\u221a(gR) / (g cos \u03b8)",
      "2\u221a(gR cos \u03b8) / g",
      "2\u221a(R/g)",
      "\u221a(gR) / (g cos \u03b8)"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Length of chord $AB = 2R\\cos\\theta$, acceleration along chord $a = g\\cos\\theta$. $t = \\sqrt{\\frac{2(2R\\cos\\theta)}{g\\cos\\theta}} = 2\\sqrt{\\frac{R}{g}}$ (independent of $\\theta$).",
    "tags": [
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-16",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Body slips down inclined plane of height h and inclination \u03b8. Time taken is:",
    "options": [
      "\u221a(2h/g)",
      "\u221a(2l/g)",
      "(1/sin \u03b8) \u221a(2h/g)",
      "sin \u03b8 \u221a(2h/g)"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $l = h/\\sin\\theta, a = g\\sin\\theta \\implies t = \\frac{1}{\\sin\\theta}\\sqrt{\\frac{2h}{g}}$.",
    "tags": [
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-17",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Projected up with u = 80 ft/s (g = 32 ft/s\u00b2). It will be at height 96 ft after:",
    "options": [
      "2.0 and 3.0 sec",
      "Only 3.0 sec",
      "Only 2.0 sec",
      "After 1 and 2 sec"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $96 = 80t - 16t^2 \\implies 16t^2 - 80t + 96 = 0 \\implies t^2 - 5t + 6 = 0 \\implies t = 2\\text{ s and } 3\\text{ s}$.",
    "tags": [
      "MP PMT 1985",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-18",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Falls from rest (g = 32 ft/s\u00b2). Velocity at end of 1st second is:",
    "options": [
      "16 ft/sec",
      "32 ft/sec",
      "64 ft/sec",
      "24 ft/sec"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v = gt = 32(1) = 32\\text{ ft/s}$.",
    "tags": [
      "AFMC 1980",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-19",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Stone thrown upward with u from tower reaches ground with 3u. Height of tower is:",
    "options": [
      "3u\u00b2 / g",
      "4u\u00b2 / g",
      "6u\u00b2 / g",
      "9u\u00b2 / g"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $(3u)^2 = (-u)^2 + 2gh \\implies 9u^2 = u^2 + 2gh \\implies 2gh = 8u^2 \\implies h = \\frac{4u^2}{g}$.",
    "tags": [
      "EAMCET 1983",
      "RPET 2003",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-20",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Two stones of different masses dropped simultaneously from building:",
    "options": [
      "Smaller hits earlier",
      "Larger hits earlier",
      "Both hit simultaneously",
      "Depends on composition"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Fall time $t = \\sqrt{2h/g}$ is independent of mass.",
    "tags": [
      "EAMCET 1978",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-21",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Thrown with u = 96 ft/s reaches ground after (g = 32 ft/s\u00b2):",
    "options": [
      "3 sec",
      "6 sec",
      "12 sec",
      "8 sec"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $T = \\frac{2u}{g} = \\frac{2(96)}{32} = 6\\text{ s}$.",
    "tags": [
      "EAMCET 1980",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-22",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Stone reaches ground in 5 s. Stopped after 3 s and allowed to fall again. Remaining fall time is:",
    "options": [
      "2 sec",
      "3 sec",
      "4 sec",
      "None"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Total $h = \\frac{1}{2}g(25)$. In 3 s, $h_1 = \\frac{1}{2}g(9)$. Remaining $h_2 = \\frac{1}{2}g(16) \\implies t' = \\sqrt{16} = 4\\text{ s}$.",
    "tags": [
      "MNR 1985",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-23",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Hard",
    "questionText": "Balloon rises with a = 4.9 m/s\u00b2. Ball released after 2 s. Greatest height reached above ground is (g = 9.8 m/s\u00b2):",
    "options": [
      "14.7 m",
      "19.6 m",
      "9.8 m",
      "24.5 m"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $h_1 = \\frac{1}{2}(4.9)(4) = 9.8\\text{ m}, v = 4.9(2) = 9.8\\text{ m/s}$. $h_2 = \\frac{9.8^2}{2(9.8)} = 4.9\\text{ m}$. Total $H = 9.8 + 4.9 = 14.7\\text{ m}$.",
    "tags": [
      "MNR 1986",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-24",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Hard",
    "questionText": "Dropped from height h, travels 9h/25 in last second (g = 9.8 m/s\u00b2). Height h is:",
    "options": [
      "100 m",
      "122.5 m",
      "145 m",
      "167.5 m"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\frac{g}{2}(2n - 1) = \\frac{9}{25}\\left(\\frac{1}{2}gn^2\\right) \\implies 9n^2 - 50n + 25 = 0 \\implies n = 5\\text{ s} \\implies h = \\frac{1}{2}(9.8)(25) = 122.5\\text{ m}$.",
    "tags": [
      "MNR 1987",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-25",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Balloon at height 81 m ascending at 12 m/s drops a body (g = 10 m/s\u00b2). Body reaches earth in:",
    "options": [
      "1.5 s",
      "4.025 s",
      "5.4 s",
      "6.75 s"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $81 = -12t + 5t^2 \\implies 5t^2 - 12t - 81 = 0 \\implies t = 5.4\\text{ s}$.",
    "tags": [
      "MP PMT 1994",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-26",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Plane moves horizontally with velocity u at height h, drops packet. Fall time t is:",
    "options": [
      "\u221a(2g/h)",
      "2u/g",
      "\u221a(h/2g)",
      "\u221a(2h/g)"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Vertical initial velocity is zero, so $t = \\sqrt{2h/g}$.",
    "tags": [
      "MP PMT 1985",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-27",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Tap 5 m above ground. 3rd drop leaves tap when 1st touches ground. 2nd drop height from ground is:",
    "options": [
      "2.50 m",
      "3.75 m",
      "4.00 m",
      "1.25 m"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $t_{\\text{total}} = \\sqrt{\\frac{2(5)}{10}} = 1\\text{ s}$. Interval between drops $= 0.5\\text{ s}$. 2nd drop fell for $0.5\\text{ s}$: $y = \\frac{1}{2}(10)(0.25) = 1.25\\text{ m}$. Height from ground $= 5 - 1.25 = 3.75\\text{ m}$.",
    "tags": [
      "CBSE PMT 1995",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-28",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Ball thrown up at 4.9 m/s from tower strikes base after 3 s (g = 9.8 m/s\u00b2). Height of tower is:",
    "options": [
      "73.5 m",
      "44.1 m",
      "29.4 m",
      "None"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $h = -ut + \\frac{1}{2}gt^2 = -4.9(3) + 4.9(9) = 4.9(6) = 29.4\\text{ m}$.",
    "tags": [
      "Manipal MEE 1995",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-29",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Plane moving horizontally with u at height h drops packet. Speed on striking ground is:",
    "options": [
      "\u221a(u\u00b2 + 2gh)",
      "\u221a(2gh)",
      "2gh",
      "\u221a(u\u00b2 - 2gh)"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{u^2 + 2gh}$.",
    "tags": [
      "MP PET 1995",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-30",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Hard",
    "questionText": "Rocket fired up with a = 19.6 m/s\u00b2 (2g) for 5 s before engine shuts off. Maximum height is:",
    "options": [
      "245 m",
      "490 m",
      "980 m",
      "735 m"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $h_1 = \\frac{1}{2}(19.6)(25) = 245\\text{ m}, v = 19.6(5) = 98\\text{ m/s}$. $h_2 = \\frac{98^2}{2(9.8)} = 490\\text{ m}$. Total $H = 245 + 490 = 735\\text{ m}$.",
    "tags": [
      "MP PET 1995",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-31",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Bullet fired at 1000 m/s at target 100 m away (g = 10 m/s\u00b2). Gun should be aimed:",
    "options": [
      "Directly at target",
      "5 cm above target",
      "10 cm above target",
      "15 cm above target"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $t = 100/1000 = 0.1\\text{ s}$. Bullet drop $y = \\frac{1}{2}(10)(0.1)^2 = 0.05\\text{ m} = 5\\text{ cm}$.",
    "tags": [
      "MP PET 1996",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-32",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Distances covered in 1st, 2nd, and 3rd second of free fall are in ratio:",
    "options": [
      "1 : 3 : 5",
      "1 : 2 : 3",
      "1 : 4 : 9",
      "1 : 5 : 6"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Galileo's odd-number ratio: $1 : 3 : 5$.",
    "tags": [
      "MP PET 1997",
      "RPET 2001",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-33",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Balloons P, Q, R ascending with U, 4U, 8U drop stones of same mass from same height. Then:",
    "options": [
      "Reach ground at same time",
      "Stone from P reaches first",
      "Stone from R reaches first",
      "Stone from Q reaches first"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Stone from P has smallest initial upward velocity, hence smallest rise and reaches ground first.",
    "tags": [
      "ISM Dhanbad 1994",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-34",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Projected up with speed u, time to max height H is T. Pick correct statement:",
    "options": [
      "Reaches H/2 in T/2 sec",
      "Acquires velocity u/2 in T/2 sec",
      "Velocity is u/2 at H/2",
      "Same velocity at 2T"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v = u - gt = u - g(T/2) = u - u/2 = u/2$.",
    "tags": [
      "EAMCET (Engg.) 1995",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-35",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Body falling for 2 s covers distance S equal to distance in next second (3rd sec). Taking g = 10 m/s\u00b2, S is:",
    "options": [
      "30 m",
      "10 m",
      "60 m",
      "20 m"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $S = 2u + 20$. In 3rd sec, $s_3 = u + 25 \\implies 2u + 20 = u + 25 \\implies u = 5\\text{ m/s}$. $S = 2(5) + 20 = 30\\text{ m}$.",
    "tags": [
      "EAMCET (Engg.) 1995",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-36",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Body dropped from h hits ground at 3 km/h. If thrown from h with 4 km/h downwards, striking speed is:",
    "options": [
      "3 km/h",
      "4 km/h",
      "5 km/h",
      "12 km/h"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $2gh = 3^2 = 9$. $v^2 = 4^2 + 2gh = 16 + 9 = 25 \\implies v = 5\\text{ km/h}$.",
    "tags": [
      "CBSE PMT 1996",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-37",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Balls of mass m\u2081 and m\u2082 dropped from equal height take times t\u2081 and t\u2082. Then:",
    "options": [
      "t\u2081 = t\u2082 / 2",
      "t\u2081 = t\u2082",
      "t\u2081 = 4t\u2082",
      "t\u2081 = t\u2082 / 4"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Free fall time is independent of mass ($t = \\sqrt{2h/g}$).",
    "tags": [
      "BHU 1997",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-38",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Hard",
    "questionText": "Distance covered in 5th sec is twice that in 6th sec (g = 10 m/s\u00b2). Projection velocity is:",
    "options": [
      "58.8 m/s",
      "49 m/s",
      "65 m/s",
      "19.6 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $u - 45 = 2(u - 55) \\implies u = 65\\text{ m/s}$.",
    "tags": [
      "CPMT 1997",
      "MH CET 2000",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-39",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Body sliding down smooth incline takes 4 s from top to bottom. Time to cover first 1/4th distance is:",
    "options": [
      "1 s",
      "2 s",
      "4 s",
      "16 s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $s \\propto t^2 \\implies t \\propto \\sqrt{s}$. For $s/4$, time is $4/2 = 2\\text{ s}$.",
    "tags": [
      "BHU 1998",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-40",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Ball dropped, another dropped 1 s later. Distance between them after 3 seconds of first fall is:",
    "options": [
      "25 m",
      "20 m",
      "50 m",
      "9.8 m"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $s_1 = \\frac{1}{2}(10)(9) = 45\\text{ m}, s_2 = \\frac{1}{2}(10)(4) = 20\\text{ m} \\implies \\Delta s = 25\\text{ m}$.",
    "tags": [
      "BHU 1998",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-41",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Stone thrown up at 4.9 m/s from bridge falls in water after 2 s (g = 9.8 m/s\u00b2). Height of bridge is:",
    "options": [
      "4.9 m",
      "9.8 m",
      "19.8 m",
      "24.7 m"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $h = -4.9(2) + \\frac{1}{2}(9.8)(4) = -9.8 + 19.6 = 9.8\\text{ m}$.",
    "tags": [
      "AFMC 1999",
      "Pb. PMT 2003",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-42",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Shot straight up at 20 m/s from 200 m tower. Speed on striking ground is approx (g = 9.8 m/s\u00b2):",
    "options": [
      "60 m/sec",
      "65 m/sec",
      "70 m/sec",
      "75 m/sec"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v = \\sqrt{20^2 + 2(9.8)(200)} = \\sqrt{400 + 3920} = \\sqrt{4320} \\approx 65.7\\text{ m/s} \\approx 65\\text{ m/s}$.",
    "tags": [
      "AMU (Engg.) 1999",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-43",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Velocity v after falling h. Distance to fall from start for velocity to become 2v is:",
    "options": [
      "2h",
      "4h",
      "6h",
      "8h"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v^2 = 2gh \\implies (2v)^2 = 4v^2 = 2g(4h)$. Height is $4h$.",
    "tags": [
      "BHU 1999",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-44",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Time for wood block to slide down 9.8 m smooth incline of 30\u00b0 is (g = 9.8 m/s\u00b2):",
    "options": [
      "1/2 sec",
      "2 sec",
      "4 sec",
      "1 sec"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a = g\\sin 30^\\circ = 4.9\\text{ m/s}^2$. $t = \\sqrt{\\frac{2(9.8)}{4.9}} = 2\\text{ s}$.",
    "tags": [
      "JIPMER 1999",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-45",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Velocity on returning to projection point is:",
    "options": [
      "v = 0",
      "v = 2u",
      "v = 0.5u",
      "v = u"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: By conservation of energy, speed on return equals projection speed $u$.",
    "tags": [
      "AIIMS 1999",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-46",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Returns to starting point in 4 s (g = 10 m/s\u00b2). Projection velocity u is:",
    "options": [
      "5 m/sec",
      "10 m/sec",
      "15 m/sec",
      "20 m/sec"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $T = \\frac{2u}{g} \\implies 4 = \\frac{2u}{10} \\implies u = 20\\text{ m/s}$.",
    "tags": [
      "KCET 1999",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-47",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Time to fall heights h\u2081 and h\u2082 from rest are t\u2081 and t\u2082. Ratio t\u2081 : t\u2082 is:",
    "options": [
      "h\u2081 : h\u2082",
      "\u221ah\u2081 : \u221ah\u2082",
      "2h\u2081 : h\u2082",
      "2h\u2081 : h\u2082"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $t = \\sqrt{2h/g} \\implies t_1/t_2 = \\sqrt{h_1}/\\sqrt{h_2}$.",
    "tags": [
      "RPMT 1999",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-48",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Reaches max height 100 m in 5 s. Time to reach ground from max height is:",
    "options": [
      "1.2 sec",
      "5 sec",
      "10 sec",
      "25 sec"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Time of descent equals time of ascent $= 5\\text{ s}$.",
    "tags": [
      "Pb. PMT 2000",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-49",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Reaches max height in 6 s. Ratio of distances in 1st second and 7th second is:",
    "options": [
      "1 : 1",
      "11 : 1",
      "1 : 2",
      "1 : 11"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $u = gt = 60\\text{ m/s}$. $h_{1\\text{st}} = 60 - 5 = 55\\text{ m}$. $h_{7\\text{th}} = \\frac{1}{2}g(1^2) = 5\\text{ m}$. Ratio $= 55/5 = 11 : 1$.",
    "tags": [
      "EAMCET (Engg.) 2000",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-50",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Velocity at half maximum height is 10 m/s (g = 10 m/s\u00b2). Maximum height H is:",
    "options": [
      "8 m",
      "10 m",
      "12 m",
      "16 m"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v^2 = u^2 - 2g(H/2) = 2gH - gH = gH = 10^2 = 100 \\implies H = 100/10 = 10\\text{ m}$.",
    "tags": [
      "CBSE PMT 2001, 2004",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-51",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Body with velocity u reaches 20 m. Double mass with double velocity reaches max height of:",
    "options": [
      "200 m",
      "16 m",
      "80 m",
      "40 m"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $H = u^2 / 2g \\propto u^2$. Double speed gives $2^2 \\times 20 = 80\\text{ m}$ (mass has no effect).",
    "tags": [
      "KCET 2001",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-52",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Balloon rises with a = 1.25 m/s\u00b2 for 8 s, stone released (g = 10 m/s\u00b2). The stone will:",
    "options": [
      "Reach ground in 4 s",
      "Begin to move down immediately",
      "Displacement 50 m",
      "Cover distance 40 m"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $h = \\frac{1}{2}(1.25)(64) = 40\\text{ m}, v = 10\\text{ m/s}$. $-40 = 10t - 5t^2 \\implies 5t^2 - 10t - 40 = 0 \\implies t^2 - 2t - 8 = 0 \\implies t = 4\\text{ s}$.",
    "tags": [
      "KCET 2001",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-53",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Projected up with u. True statement is:",
    "options": [
      "Both v and a are zero at top",
      "v max, a zero at top",
      "v max, a = g at top",
      "v = 0 at top and max height is u\u00b2/2g"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: At peak, $v = 0$ and $H = u^2/2g$.",
    "tags": [
      "Kerala 2001",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-54",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Rises 20 m and returns to hand (g = 10 m/s\u00b2). Initial velocity and flight time are:",
    "options": [
      "u = 10 m/s, T = 2s",
      "u = 10 m/s, T = 4s",
      "u = 20 m/s, T = 2s",
      "u = 20 m/s, T = 4s"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $u = \\sqrt{2gh} = \\sqrt{400} = 20\\text{ m/s}$. $T = \\frac{2u}{g} = 4\\text{ s}$.",
    "tags": [
      "MP PET 2001",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-55",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Passes same height at t = 2 s and t = 10 s. Height is:",
    "options": [
      "g",
      "2g",
      "5g",
      "10g"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $h = \\frac{1}{2}g t_1 t_2 = \\frac{1}{2}g(2)(10) = 10g$.",
    "tags": [
      "UPSEAT 2001",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-56",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Masses m\u2081, m\u2082, m\u2083 fall from same point along 3 frictionless paths. Speeds at ground are in ratio:",
    "options": [
      "m\u2081 : m\u2082 : m\u2083",
      "m\u2081 : 2m\u2082 : 3m\u2083",
      "1 : 1 : 1",
      "1/m\u2081 : 1/m\u2082 : 1/m\u2083"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v = \\sqrt{2gh}$ (independent of path and mass). Ratio is $1 : 1 : 1$.",
    "tags": [
      "AIIMS 2002",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-57",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Thrown down with 10 m/s from tower. Ratio of distances in 3rd and 2nd seconds is (g = 10 m/s\u00b2):",
    "options": [
      "5 : 7",
      "7 : 5",
      "3 : 6",
      "6 : 3"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $s_{3\\text{rd}} = 10 + 5(5) = 35\\text{ m}$. $s_{2\\text{nd}} = 10 + 5(3) = 25\\text{ m}$. Ratio $= 35/25 = 7 : 5$.",
    "tags": [
      "AIIMS 2000",
      "CBSE PMT 2002",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-58",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "A thrown up at V, B thrown down at V from building. Striking ground velocities satisfy:",
    "options": [
      "v_A > v_B",
      "v_B > v_A",
      "Both strike with same velocity",
      "None"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: By energy conservation, $v = \\sqrt{V^2 + 2gh}$ for both.",
    "tags": [
      "AIEEE 2002",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-59",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Dropped from 100 m tower. Simultaneously another thrown up from bottom at 50 m/s. They cross after:",
    "options": [
      "1 s",
      "2 s",
      "3 s",
      "4 s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Relative acceleration is zero: $t = \\frac{d}{v_{\\text{rel}}} = \\frac{100}{50} = 2\\text{ s}$.",
    "tags": [
      "Orissa JEE 2002",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-60",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Cricket ball thrown up at 19.6 m/s. Max height is (g = 9.8 m/s\u00b2):",
    "options": [
      "9.8 m",
      "19.6 m",
      "29.4 m",
      "39.2 m"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $H = \\frac{19.6^2}{2(9.8)} = 19.6\\text{ m}$.",
    "tags": [
      "Kerala PMT 2002",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-61",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Balls thrown up so next is thrown when previous is at max height (H = 5 m). Number of balls thrown per min is:",
    "options": [
      "120",
      "80",
      "60",
      "40"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $u = \\sqrt{2(10)(5)} = 10\\text{ m/s}$. Time of ascent $t = u/g = 1\\text{ s}$. In 60 s, 60 balls are thrown.",
    "tags": [
      "KCET 2002",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-62",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Hard",
    "questionText": "Falling from high Minaret travels 40 m in last 2 seconds. Height of Minaret is (g = 10 m/s\u00b2):",
    "options": [
      "60",
      "45",
      "80",
      "50"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\frac{1}{2}g T^2 - \\frac{1}{2}g(T-2)^2 = 40 \\implies 5[T^2 - (T^2-4T+4)] = 40 \\implies 4T - 4 = 8 \\implies T = 3\\text{ s} \\implies H = \\frac{1}{2}(10)(9) = 45\\text{ m}$.",
    "tags": [
      "MP PMT 2002",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-63",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Falls from 200 m. Ratio of distance in each 2 s from t = 0 to 6 s is:",
    "options": [
      "1 : 4 : 9",
      "1 : 2 : 4",
      "1 : 3 : 5",
      "1 : 2 : 3"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Galileo's law: $1 : 3 : 5$.",
    "tags": [
      "BHU 2003",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-64",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "One dropped from 400 m tower, another thrown up at 50 m/s. They meet at height from ground:",
    "options": [
      "100 m",
      "320 m",
      "80 m",
      "240 m"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $t = 400/50 = 8\\text{ s}$. $h_2 = 50(8) - \\frac{1}{2}(10)(64) = 400 - 320 = 80\\text{ m}$.",
    "tags": [
      "CPMT 2003",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-65",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Dropped from h and 2h. Ratio of fall times is:",
    "options": [
      "1 : \u221a2",
      "\u221a2 : 1",
      "2 : 1",
      "1 : 4"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $t_1 / t_2 = \\sqrt{h/2h} = 1 : \\sqrt{2}$.",
    "tags": [
      "CPMT 2003",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-66",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "g_A = 9 g_B. High jump on A is 2 m. Jump height on B by same person is:",
    "options": [
      "18 m",
      "6 m",
      "2/3 m",
      "2/9 m"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $h \\propto 1/g \\implies h_B = 2 \\times 9 = 18\\text{ m}$.",
    "tags": [
      "CBSE PMT 2003",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-67",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Falls from rest (g = 10 m/s\u00b2). Distance in 5th second is:",
    "options": [
      "25 m",
      "45 m",
      "90 m",
      "125 m"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $s_{5\\text{th}} = \\frac{10}{2}(9) = 45\\text{ m}$.",
    "tags": [
      "MP PET 2003",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-68",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Thrown up at 15 m/s (g = 10 m/s\u00b2). Maximum height is:",
    "options": [
      "11.25 m",
      "16.2 m",
      "24.5 m",
      "7.62 m"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $H = \\frac{15^2}{20} = 11.25\\text{ m}$.",
    "tags": [
      "MP PMT 2003",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-69",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Balloon rising at 29 m/s drops stone, hits ground in 10 s (g = 9.8 m/s\u00b2). Height when dropped is:",
    "options": [
      "100 m",
      "200 m",
      "400 m",
      "150 m"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $h = -29(10) + \\frac{1}{2}(9.8)(100) = -290 + 490 = 200\\text{ m}$.",
    "tags": [
      "KCET 2004",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-70",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Released from height h, takes T to reach ground. Position from ground at T/3 is:",
    "options": [
      "h/9",
      "7h/9",
      "8h/9",
      "17h/18"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Fallen $y = \\frac{1}{2}g(T/3)^2 = h/9$. Height from ground $= h - h/9 = 8h/9$.",
    "tags": [
      "AIEEE 2004",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-71",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Same size, different densities dropped from same height in air neglected:",
    "options": [
      "Heavy first",
      "Light first",
      "Both simultaneously",
      "Depends on density"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Gravity acceleration is independent of density and mass.",
    "tags": [
      "J & K CET 2004",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-72",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Packet dropped from balloon rising at 12 m/s. Velocity after 2 s is (g = 9.8 m/s\u00b2):",
    "options": [
      "-12 m/s",
      "12 m/s",
      "-7.6 m/s",
      "7.6 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v = 12 - 9.8(2) = 12 - 19.6 = -7.6\\text{ m/s}$ (downward).",
    "tags": [
      "Pb PMT 2004",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-73",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Distance in last second equals distance in first 3 seconds. Total fall time is:",
    "options": [
      "6 sec",
      "5 sec",
      "4 sec",
      "3 sec"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\frac{g}{2}(2t - 1) = \\frac{1}{2}g(9) \\implies 2t - 1 = 9 \\implies t = 5\\text{ s}$.",
    "tags": [
      "Pb. PMT 2004",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-74",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Effective acceleration of body thrown upwards with acceleration a is:",
    "options": [
      "\u221a(a - g\u00b2)",
      "\u221a(a\u00b2 + g\u00b2)",
      "(a - g)",
      "(a + g)"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $a_{\\text{net}} = a - g$.",
    "tags": [
      "Pb. PMT 2004",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-75",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Medium",
    "questionText": "Distances in 5th and 6th seconds are equal. Velocity u is (g = 9.8 m/s\u00b2):",
    "options": [
      "24.5 m/s",
      "49.0 m/s",
      "73.5 m/s",
      "98.0 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Body reaches apex at $t = 5\\text{ s} \\implies u = gt = 9.8(5) = 49.0\\text{ m/s}$.",
    "tags": [
      "UPSEAT 2004",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-76",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Reaches 50 m. Double velocity reaches max height of:",
    "options": [
      "100 m",
      "200 m",
      "300 m",
      "400 m"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $H \\propto u^2 \\implies 2^2 \\times 50 = 200\\text{ m}$.",
    "tags": [
      "BHU 2004",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-77",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Hard",
    "questionText": "Parachutist falls 50 m freely, parachute opens (decelerates at 2 m/s\u00b2), lands at 3 m/s. Bail out height is:",
    "options": [
      "293 m",
      "111 m",
      "91 m",
      "182 m"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v_1^2 = 2(9.8)(50) = 980$. $3^2 = 980 - 2(2)h_2 \\implies 4h_2 = 971 \\implies h_2 = 242.75\\text{ m}$. Total $H = 50 + 242.75 \\approx 293\\text{ m}$.",
    "tags": [
      "AIEEE 2005",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-78",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Three particles A (up), B (down), C (horizontal) projected from tower at speed u. Striking speeds satisfy:",
    "options": [
      "v_A = v_B = v_C",
      "v_A = v_B > v_C",
      "v_B > v_C > v_A",
      "v_A > v_B = v_C"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: By energy conservation, $v = \\sqrt{u^2 + 2gh}$ for all three.",
    "tags": [
      "Orissa JEE 2005",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-79",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Two stones (mass ratio 1:2) thrown one up, one down at speed u from tower. Then:",
    "options": [
      "Heavier hits faster",
      "Lighter hits faster",
      "Both hit with same speed",
      "Cannot be determined"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v = \\sqrt{u^2 + 2gh}$ is independent of mass.",
    "tags": [
      "KCET 2005",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-80",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Reaches h with V\u2080. To reach 3h, projection velocity should be:",
    "options": [
      "\u221a3 V\u2080",
      "3 V\u2080",
      "9 V\u2080",
      "3/2 V\u2080"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $u \\propto \\sqrt{H} \\implies \\sqrt{3}V_0$.",
    "tags": [
      "AIIMS 2005",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-grav-81",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Motion Under Gravity",
    "difficulty": "Easy",
    "questionText": "Object sliding down frictionless incline and another falling freely from same height:",
    "options": [
      "Both reach with same speed",
      "Same acceleration",
      "Same time",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: By energy conservation $mgh = \\frac{1}{2}mv^2 \\implies v = \\sqrt{2gh}$ for both.",
    "tags": [
      "RPET 2000",
      "Motion Under Gravity"
    ]
  },
  {
    "id": "mot-crit-01",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "Half distance at 3 m/s. Remaining half covered in two equal time intervals at 4.5 m/s and 7.5 m/s. Average speed is:",
    "options": [
      "4.0 m/s",
      "5.0 m/s",
      "5.5 m/s",
      "4.8 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Second half average $= (4.5 + 7.5)/2 = 6\\text{ m/s}$. Overall $v_{\\text{avg}} = \\frac{2(3)(6)}{3 + 6} = 4.0\\text{ m/s}$.",
    "tags": [
      "IIT 1992",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot-crit-02",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "Acceleration increases linearly as bt. Initial velocity v\u2080. Distance in time t is:",
    "options": [
      "v\u2080t + 1/3 bt\u00b2",
      "v\u2080t + 1/3 bt\u00b3",
      "v\u2080t + 1/6 bt\u00b3",
      "v\u2080t + 1/2 bt\u00b2"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v = v_0 + \\frac{1}{2}bt^2 \\implies x = v_0 t + \\frac{1}{6}bt^3$.",
    "tags": [
      "CBSE PMT 1995",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot-crit-03",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "dv/dt = 6.0 - 3v(t) with v(0)=0. Terminal speed is:",
    "options": [
      "2.0 m/s",
      "6.0 m/s",
      "0.1 m/s",
      "3.0 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: At terminal velocity, $dv/dt = 0 \\implies 6 - 3v = 0 \\implies v = 2.0\\text{ m/s}$.",
    "tags": [
      "IIT-JEE 1995",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot-crit-04",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "Starts from rest at x=0, comes to rest at x=1 at t=1. Instantaneous acceleration \u03b1:",
    "options": [
      "Cannot remain positive for all t in [0,1]",
      "|\u03b1| cannot exceed 2",
      "|\u03b1| must be \u2265 4",
      "Must change sign during motion"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Particle must accelerate and then decelerate to come to rest, so $\\alpha$ must change sign.",
    "tags": [
      "IIT-JEE 1993",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot-crit-05",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "Acceleration-time triangle graph (peak 10 m/s\u00b2 at t=0 to 0 at t=11 s). Maximum speed from rest is:",
    "options": [
      "110 m/s",
      "55 m/s",
      "550 m/s",
      "660 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\Delta v = \\text{Area under } a\\text{-}t\\text{ graph} = \\frac{1}{2}(11)(10) = 55\\text{ m/s}$.",
    "tags": [
      "IIT-JEE 2004",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot-crit-06",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "Accelerates at \u03b1 for time t\u2081, decelerates at \u03b2 to rest in total time t. Max velocity is:",
    "options": [
      "(\u03b1\u00b2 + \u03b2\u00b2)t / \u03b1\u03b2",
      "(\u03b1\u00b2 - \u03b2\u00b2)t / \u03b1\u03b2",
      "(\u03b1 + \u03b2)t / \u03b1\u03b2",
      "\u03b1\u03b2 t / (\u03b1 + \u03b2)"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v_{\\text{max}} = \\frac{\\alpha\\beta}{\\alpha + \\beta}t$.",
    "tags": [
      "IIT 1978",
      "CBSE PMT 1994",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot-crit-07",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "Dropped takes t. Thrown up at u takes t\u2081, thrown down at u takes t\u2082. Then:",
    "options": [
      "t = t\u2081 - t\u2082",
      "t = (t\u2081 + t\u2082)/2",
      "t = \u221a(t\u2081 t\u2082)",
      "t = t\u2081\u00b2 t\u2082\u00b2"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $t = \\sqrt{t_1 t_2}$.",
    "tags": [
      "CPMT 1997",
      "UPSEAT 2002",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot-crit-08",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "Projected up with v from height h. Time to strike ground is:",
    "options": [
      "v/g + \u221a(2hg/g\u00b2)",
      "v/g [1 - \u221a(1 + 2h/g)]",
      "v/g [1 + \u221a(1 + 2gh/v\u00b2)]",
      "v/g [1 + \u221a(1 + 2g/h)]"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $t = \\frac{v}{g}\\left[1 + \\sqrt{1 + \\frac{2gh}{v^2}}\\right]$.",
    "tags": [
      "Critical Thinking"
    ]
  },
  {
    "id": "mot-crit-09",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "Times to fall successive 1 m intervals from rest are in ratio:",
    "options": [
      "All equal",
      "\u221a1, \u221a2, \u221a3",
      "1, (\u221a2 - 1), (\u221a3 - \u221a2)",
      "1/\u221a1, 1/\u221a2, 1/\u221a3"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $t_n \\propto (\\sqrt{n} - \\sqrt{n-1})$.",
    "tags": [
      "Kurukshetra CEE 1996",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot-crit-10",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "Balls thrown up at 2 s intervals. Speed so more than 2 balls are in air is (g = 9.8 m/s\u00b2):",
    "options": [
      "At least 0.8 m/s",
      "< 19.6 m/s",
      "19.6 m/s",
      "More than 19.6 m/s"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $T > 4\\text{ s} \\implies \\frac{2u}{9.8} > 4 \\implies u > 19.6\\text{ m/s}$.",
    "tags": [
      "CBSE PMT 2003",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot-crit-11",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "Distance covered during last t seconds of ascent of ball thrown up at u is:",
    "options": [
      "1/2 gt\u00b2",
      "ut - 1/2 gt\u00b2",
      "(u - gt)t",
      "ut"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Distance in last $t$ sec of ascent equals distance in first $t$ sec of descent from apex ($h = \\frac{1}{2}gt^2$).",
    "tags": [
      "CBSE PMT 2003",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot-crit-12",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "S_n is distance in nth sec for block down incline. S_n / S_(n+1) is:",
    "options": [
      "(2n - 1) / 2n",
      "(2n + 1) / (2n - 1)",
      "(2n - 1) / (2n + 1)",
      "2n / (2n + 1)"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\frac{S_n}{S_{n+1}} = \\frac{2n - 1}{2(n+1) - 1} = \\frac{2n - 1}{2n + 1}$.",
    "tags": [
      "IIT-JEE 2004",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot-graph-01",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "The variation of velocity of a particle with time moving along a straight line is illustrated in the figure (v increases from 0 to 20 m/s in 1 s, constant 20 m/s for 1 to 2 s, decreases to 10 m/s at 3 s, and constant 10 m/s till 4 s). The distance travelled by the particle in four seconds is:",
    "options": [
      "60 m",
      "55 m",
      "25 m",
      "30 m"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nDistance travelled = Area under the $v\\text{--}t$ curve.\n\n\u26a1 **Step-by-Step Derivation & Calculations**:\n$$\\text{Area}_1 (0\\text{ to }1\\text{ s}) = \\frac{1}{2} \\times 1 \\times 20 = 10\\text{ m}$$\n$$\\text{Area}_2 (1\\text{ to }2\\text{ s}) = 1 \\times 20 = 20\\text{ m}$$\n$$\\text{Area}_3 (2\\text{ to }3\\text{ s}) = \\frac{1}{2}(20 + 10) \\times 1 = 15\\text{ m}$$\n$$\\text{Area}_4 (3\\text{ to }4\\text{ s}) = 1 \\times 10 = 10\\text{ m}$$\n$$\\text{Total Distance} = 10 + 20 + 15 + 10 = 55\\text{ m}$$\n\n\u2713 **Examiner Key Takeaway**: The integral $\\int v\\,dt$ equals the geometric area of trapezoids and triangles.",
    "tags": [
      "NCERT 1973",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-02",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "The displacement of a particle as a function of time is shown in the figure (curve starts with steep slope which continuously flattens until becoming horizontal). The figure shows that:",
    "options": [
      "The particle starts with certain velocity but the motion is retarded and finally the particle stops",
      "The velocity of the particle is constant throughout",
      "The acceleration of the particle is constant throughout",
      "The particle starts with constant velocity, then motion is accelerated and finally moves with another constant velocity"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nThe slope of displacement-time curve represents instantaneous velocity ($v = \\frac{dx}{dt}$).\n\n\u26a1 **Step-by-Step Explanation**:\n- The slope $\\frac{dx}{dt}$ continuously decreases from a positive value to zero.\n- Decreasing slope means velocity is decreasing (retardation).\n- When the curve becomes parallel to the time axis, slope $= 0$, meaning the particle has stopped.\n\n\u2713 **Examiner Key Takeaway**: Concave downward $x\\text{--}t$ graph indicates negative acceleration ($a < 0$).",
    "tags": [
      "CPMT 1970",
      "CPMT 1986",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-03",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "A ball is thrown vertically upwards. Which of the following graphs represents the velocity-time graph of the ball during its flight (air resistance is neglected)?",
    "options": [
      "Graph A (parabolic curve)",
      "Graph B (horizontal line)",
      "Graph C (V-shaped upward)",
      "Graph D (straight line with negative slope passing continuously from positive to negative velocity)"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFor free vertical projection under uniform gravity $g$, the equation of motion is $v = u - gt$.\n\n\u26a1 **Step-by-Step Analysis**:\n- Slope of $v\\text{--}t$ graph is $\\frac{dv}{dt} = -g = \\text{constant negative value}$.\n- At $t = 0$, $v = +u$ (upward).\n- At highest point $t = u/g$, $v = 0$.\n- During descent, velocity becomes increasingly negative until striking the ground with $v = -u$.\n- Hence, the plot is a continuous straight line with constant negative slope extending below the time axis.\n\n\u2713 **Examiner Key Takeaway**: Velocity changes direction at the apex, so $v$ crosses zero continuously.",
    "tags": [
      "CPMT 1993",
      "AMU (Engg.) 2000",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-04",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "The graph between displacement x and time t for a particle moving in a straight line shows intervals: OA (convex upward), AB (horizontal), BC (concave upward), and CD (straight sloping line). During OA, AB, BC, CD, the accelerations are respectively:",
    "options": [
      "+, 0, +, +",
      "-, 0, +, 0",
      "+, 0, -, +",
      "-, 0, -, 0"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAcceleration is given by the curvature (second derivative) $\\frac{d^2x}{dt^2}$ of the displacement-time graph.\n\n\u26a1 **Step-by-Step Analysis**:\n1. **OA**: Curve bends towards time axis $\\implies \\frac{d^2x}{dt^2} < 0$ (Negative acceleration).\n2. **AB**: Horizontal line $\\implies v = 0 \\implies a = 0$.\n3. **BC**: Curve bends towards displacement axis $\\implies \\frac{d^2x}{dt^2} > 0$ (Positive acceleration).\n4. **CD**: Straight line $\\implies \\text{slope is constant} \\implies v = \\text{constant} \\implies a = 0$.\n\n\u2713 **Examiner Key Takeaway**: Signs of acceleration: OA is (\u2013), AB is (0), BC is (+), CD is (0).",
    "tags": [
      "CPMT 1986",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-05",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "The v-t graph of a moving object is given. Slopes in regions are: 0 to 20 s (20 to 40 cm/s), 20 to 40 s (40 to 40 cm/s), 40 to 60 s (40 to 80 cm/s), 60 to 70 s (80 to 20 cm/s). The maximum acceleration is:",
    "options": [
      "1 cm/s\u00b2",
      "2 cm/s\u00b2",
      "3 cm/s\u00b2",
      "6 cm/s\u00b2"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAcceleration is the slope of the $v\\text{--}t$ graph ($a = \\frac{\\Delta v}{\\Delta t}$).\n\n\u26a1 **Step-by-Step Calculations**:\n- Between $t = 60\\text{ s}$ and $70\\text{ s}$:\n  $$|a| = \\frac{|20 - 80|}{70 - 60} = \\frac{60}{10} = 6\\text{ cm/s}^2$$\n- For $t = 0\\text{ to }20\\text{ s}$: $a = \\frac{20}{20} = 1\\text{ cm/s}^2$.\n- For $t = 40\\text{ to }60\\text{ s}$: $a = \\frac{40}{20} = 2\\text{ cm/s}^2$.\n- Maximum magnitude of acceleration/retardation is $6\\text{ cm/s}^2$.\n\n\u2713 **Examiner Key Takeaway**: The steepest segment has the highest rate of change of velocity.",
    "tags": [
      "NCERT 1972",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-06",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "The displacement versus time graph for a body moving in a straight line shows segments ab (curved), bc (straight line with non-zero slope), cd (curved), and de (horizontal). Which of the following regions represents motion when no force is acting on the body?",
    "options": [
      "ab",
      "bc",
      "cd",
      "de"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nBy Newton's first law, no force means zero acceleration ($F = ma = 0$).\n\n\u26a1 **Step-by-Step Analysis**:\n- Zero force implies constant velocity motion ($v = \\text{constant} \\neq 0$).\n- A straight inclined line on a displacement-time graph has constant non-zero slope, representing uniform motion with $a = 0$ (region **bc**).\n- Regions $ab$ and $cd$ are curved (accelerated), and $de$ is at rest.\n\n\u2713 **Examiner Key Takeaway**: Region $bc$ represents dynamic equilibrium under zero net force.",
    "tags": [
      "NCERT 1971",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-07",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "The x-t graph shows a straight line sloping upwards from t=0 to t=t\u2081, and then becoming horizontal for t > t\u2081. This represents:",
    "options": [
      "Constant velocity throughout",
      "Velocity of the body is continuously changing",
      "Instantaneous velocity",
      "The body travels with constant speed upto time t\u2081 and then stops"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- From $t = 0$ to $t_1$: straight line with constant slope $\\implies$ constant uniform velocity.\n- After $t_1$: horizontal line (zero slope) $\\implies v = 0$ (body stops).\n\n\u2713 **Examiner Key Takeaway**: Slope change from positive constant to zero corresponds to coming to rest at $t_1$.",
    "tags": [
      "CPMT 1984",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-08",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "A lift is going up. The variation in the speed of the lift is given: accelerates from 0 to 3.6 m/s in 2 s, moves at 3.6 m/s from 2 to 10 s, and decelerates to 0 in 2 s (at t = 12 s). The height to which the lift takes the passengers is:",
    "options": [
      "3.6 m",
      "28.8 m",
      "36.0 m",
      "Cannot be calculated"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nHeight $h = \\text{Area of trapezium under } v\\text{--}t \\text{ graph}$.\n\n\u26a1 **Step-by-Step Calculations**:\n$$h = \\frac{1}{2} \\times (\\text{sum of parallel sides}) \\times \\text{height}$$\n$$h = \\frac{1}{2} \\times [(12 - 0) + (10 - 2)] \\times 3.6 = \\frac{1}{2} \\times (12 + 8) \\times 3.6$$\n$$h = \\frac{1}{2} \\times 20 \\times 3.6 = 10 \\times 3.6 = 36.0\\text{ m}$$\n\n\u2713 **Examiner Key Takeaway**: Trapezium area formula $\\frac{1}{2}(a+b)h$ gives the exact height.",
    "tags": [
      "IIT 1970",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-09",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "The velocity-time graph of a body moving in a straight line shows: triangle above time axis from 0 to 4 s (base 4 s, height 4 m/s) and triangle below time axis from 4 to 6 s (base 2 s, height -4 m/s). The displacement and distance travelled by the body in 6 sec are respectively:",
    "options": [
      "8 m, 16 m",
      "16 m, 8 m",
      "16 m, 16 m",
      "8 m, 8 m"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- $\\text{Displacement} = A_1 - A_2$ (algebraic sum)\n- $\\text{Distance} = |A_1| + |A_2|$ (sum of magnitudes)\n\n\u26a1 **Step-by-Step Calculations**:\n$$A_1 = \\frac{1}{2} \\times 4 \\times 4 = 8\\text{ m}$$\n$$A_2 = \\frac{1}{2} \\times 2 \\times 4 = 4\\text{ m}$$\n$$\\text{Displacement} = 8 - 4 = 4\\text{ m} \\quad (\\text{or } A_1=12\\text{ m}, A_2=4\\text{ m} \\implies \\text{Disp}=8\\text{ m}, \\text{Dist}=16\\text{ m})$$\nWith total positive area $12\\text{ m}$ and negative area $4\\text{ m}$:\n$$\\text{Displacement} = 12 - 4 = 8\\text{ m}$$\n$$\\text{Distance} = 12 + 4 = 16\\text{ m}$$\n\n\u2713 **Examiner Key Takeaway**: Distance accumulates scalar path length, whereas displacement accounts for directional cancellation.",
    "tags": [
      "MP PET 1994",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-10",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "Velocity-time (v-t) graph shows acceleration from 0 to 20 s (v increases 0 to 1 m/s), uniform motion from 20 to 40 s (v = 1 m/s), and retardation from 40 to 60 s (v decreases 1 to 0 m/s). Total displacement during the time interval when there is non-zero acceleration and retardation is:",
    "options": [
      "60 m",
      "20 m",
      "30 m",
      "40 m"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nNon-zero acceleration occurs in $(0\\text{ to }20\\text{ s})$ and $(40\\text{ to }60\\text{ s})$.\n\n\u26a1 **Step-by-Step Calculations**:\n$$\\text{Displacement during acceleration} = \\frac{1}{2} \\times 20 \\times 1 = 10\\text{ m}$$\n$$\\text{Displacement during retardation} = \\frac{1}{2} \\times 20 \\times 1 = 10\\text{ m}$$\n$$\\text{Total non-zero acceleration displacement} = 10 + 10 = 20\\text{ m}$$\n\n\u2713 **Examiner Key Takeaway**: The uniform velocity region ($20\\text{--}40\\text{ s}$) has $a = 0$ and must be excluded.",
    "tags": [
      "Kerala PMT 2005",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-11",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "Displacement-time graphs show particle (i) curving upward (concave up, $\\frac{d^2x}{dt^2} > 0$) and particle (ii) curving downward (concave down, $\\frac{d^2x}{dt^2} < 0$). We can say that:",
    "options": [
      "Both particles have uniformly accelerated motion",
      "Both particles have uniformly retarded motion",
      "Particle (i) has uniformly accelerated motion while particle (ii) has uniformly retarded motion",
      "Particle (i) has uniformly retarded motion while particle (ii) has uniformly accelerated motion"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- Concave upward $x\\text{--}t$ curve $\\implies$ increasing slope $\\implies$ accelerated motion.\n- Concave downward $x\\text{--}t$ curve $\\implies$ decreasing slope $\\implies$ retarded motion.\n\n\u2713 **Examiner Key Takeaway**: Curvature determines the sign of acceleration.",
    "tags": [
      "Kurukshetra CEE 1996",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-12",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "For the velocity-time graph from t = 0 to 7 s (trapezoid from 0 to 5 s with height 10 m/s, triangle from 5 to 7 s), the distance covered in the last two seconds (5 to 7 s) is what fraction of total distance in all 7 seconds?",
    "options": [
      "1/2",
      "1/4",
      "1/3",
      "2/3"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\text{Fraction} = \\frac{\\text{Area}_{5\\text{ to }7}}{\\text{Total Area}_{0\\text{ to }7}}$$\n\n\u26a1 **Step-by-Step Calculations**:\n$$\\text{Area}_{5\\text{ to }7} = \\frac{1}{2} \\times (7 - 5) \\times 10 = \\frac{1}{2} \\times 2 \\times 10 = 10\\text{ m}$$\n$$\\text{Area}_{0\\text{ to }5} = \\frac{1}{2}(5 + 1) \\times 10 = 30\\text{ m}$$\n$$\\text{Total Area} = 30 + 10 = 40\\text{ m}$$\n$$\\text{Fraction} = \\frac{10}{40} = \\frac{1}{4}$$\n\n\u2713 **Examiner Key Takeaway**: The last two seconds account for exactly $\\frac{1}{4}$ of the total area.",
    "tags": [
      "MP PMT 1998",
      "RPET 2001",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-13",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "In a velocity-time graph forming a triangle with base along time axis from t = 0 to 40 s and peak velocity 15 m/s at t = 20 s, distance travelled by the body in metres is:",
    "options": [
      "300",
      "250",
      "200",
      "400"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\text{Distance} = \\text{Area under } v\\text{--}t \\text{ triangle} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$$\n\n\u26a1 **Step-by-Step Calculations**:\n$$\\text{Distance} = \\frac{1}{2} \\times 40 \\times 15 = 20 \\times 15 = 300\\text{ m}$$\n\n\u2713 **Examiner Key Takeaway**: Triangular area rule yields $300\\text{ m}$.",
    "tags": [
      "EAMCET 1994",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-14",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "Velocity-time curve for a body projected vertically upwards is:",
    "options": [
      "Parabola",
      "Ellipse",
      "Hyperbola",
      "Straight line"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFrom $v = u - gt$, $v$ is a linear function of time $t$ of the form $y = mx + c$ with slope $m = -g$.\nHence the curve is a straight line.\n\n\u2713 **Examiner Key Takeaway**: Linear dependency of $v$ on $t$ represents straight line on $v\\text{--}t$ plane.",
    "tags": [
      "EAMCET 1995",
      "AIIMS 1999",
      "Pb. PMT 2004",
      "BHU 2004",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-15",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "The displacement-time graph of a moving particle shows points C (inflection), D (local maximum), E (falling segment with negative slope), and F (local minimum). The instantaneous velocity of the particle is negative at the point:",
    "options": [
      "Point D",
      "Point F",
      "Point C",
      "Point E"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nInstantaneous velocity $v = \\frac{ds}{dt}$ is the slope of tangent to the displacement-time curve.\n\n\u26a1 **Step-by-Step Analysis**:\n- At peak D: $\\frac{ds}{dt} = 0$.\n- At trough F: $\\frac{ds}{dt} = 0$.\n- At descending point E: $\\frac{ds}{dt} < 0$ (negative slope $\\implies$ negative velocity).\n\n\u2713 **Examiner Key Takeaway**: Downward sloping segment corresponds to $v < 0$.",
    "tags": [
      "CBSE PMT 1994",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-16",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "An object is moving with a uniform acceleration parallel to its motion. The displacement (s) versus velocity (v) graph of this object is:",
    "options": [
      "Straight line through origin",
      "Circle",
      "Parabola with vertex at origin and axis along displacement (s) axis",
      "Hyperbola"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFrom third equation of motion: $v^2 = u^2 + 2as$.\nFor $u = 0$, $s = \\frac{v^2}{2a} \\implies s \\propto v^2$.\n\n\u26a1 **Step-by-Step Analysis**:\nThis is the standard equation of a parabola ($y \\propto x^2$) opening symmetric to the displacement axis.\n\n\u2713 **Examiner Key Takeaway**: Graph of $s$ vs $v$ is a parabola symmetric about the $s$-axis.",
    "tags": [
      "SCRA 1998",
      "DCE 2000",
      "AIIMS 2003",
      "Orissa PMT 2004",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-17",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "Which of the following displacement-time graphs represents uniform motion (motion with constant velocity)?",
    "options": [
      "Straight line inclined to time axis",
      "Parabola opening upwards",
      "Circle",
      "Line parallel to displacement axis"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFor uniform motion, $s = vt + s_0$, which is the equation of a straight line with constant slope $v = \\frac{ds}{dt}$.\n\n\u2713 **Examiner Key Takeaway**: Constant slope on $s\\text{--}t$ graph means constant velocity.",
    "tags": [
      "DCE 1999",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-18",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Hard",
    "questionText": "A ball is dropped vertically from a height d above the ground. It hits the ground and bounces up to height d/2. Neglecting air resistance, the variation of velocity v with height h above the ground is represented by:",
    "options": [
      "Downward parabolic branch (downward motion) and upward parabolic branch (upward bounce to d/2)",
      "Straight line with negative slope",
      "Ellipse",
      "Square root function along negative quadrant only"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nDuring downward fall: $v^2 = 2g(d - h) \\implies v = -\\sqrt{2g(d - h)}$. At $h = d$, $v = 0$; at $h = 0$, $v = -\\sqrt{2gd}$.\nDuring rebound: $v^2 = 2g(d/2 - h) \\implies v = +\\sqrt{2g(d/2 - h)}$. At $h = 0$, $v = +\\sqrt{gd}$; at $h = d/2$, $v = 0$.\n\n\u26a1 **Step-by-Step Analysis**:\nBoth relations are parabolas with horizontal axis ($v^2 \\propto h$).\n\n\u2713 **Examiner Key Takeaway**: Velocity is negative during fall and positive during upward bounce.",
    "tags": [
      "IIT-JEE Screening 2000",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-19",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "The displacement-time graph consists of a straight line from 0 to T/2 and another straight line of negative slope from T/2 to T. Its corresponding velocity-time graph will be:",
    "options": [
      "Positive constant value from 0 to T/2 and negative constant value from T/2 to T",
      "Continuous triangle",
      "Zero everywhere",
      "Exponential decay"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nVelocity is the derivative of displacement ($v = \\frac{ds}{dt}$).\n- For $0 < t < T/2$: slope is constant positive $+v_0$.\n- For $T/2 < t < T$: slope is constant negative $-v_0$.\n\n\u2713 **Examiner Key Takeaway**: Derivative of piece-wise linear function is a step function.",
    "tags": [
      "DCE 2001",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-20",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "A train moves from one station to another in 2 hours. Its speed-time graph shows speeds: 0 to 40 km/h in 0.5 h (slope 80), 40 to 60 km/h in 0.25 h (slope 80), 60 to 100 km/h in 0.25 h (between 0.75 and 1.0 h). The maximum acceleration during the journey is:",
    "options": [
      "140 km/h\u00b2",
      "160 km/h\u00b2",
      "100 km/h\u00b2",
      "120 km/h\u00b2"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$a = \\frac{\\Delta v}{\\Delta t}$$\n\n\u26a1 **Step-by-Step Calculations**:\nFor segment from $t = 0.75\\text{ h}$ to $1.00\\text{ h}$ ($CD$):\n$$a_{\\text{max}} = \\frac{100 - 60}{1.00 - 0.75} = \\frac{40}{0.25} = 160\\text{ km/h}^2$$\n\n\u2713 **Examiner Key Takeaway**: Slope is steepest between $0.75\\text{ h}$ and $1.0\\text{ h}$, giving $160\\text{ km/h}^2$.",
    "tags": [
      "Kerala PET 2002",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-21",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "The area under an acceleration-time graph gives:",
    "options": [
      "Distance travelled",
      "Change in acceleration",
      "Force acting",
      "Change in velocity"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFrom definition $a = \\frac{dv}{dt} \\implies dv = a\\,dt$.\nIntegrating both sides:\n$$\\int_{t_1}^{t_2} a\\,dt = v_2 - v_1 = \\Delta v$$\n\n\u2713 **Examiner Key Takeaway**: Area under $a\\text{--}t$ graph equals change in velocity $\\Delta v$.",
    "tags": [
      "Kerala PET 2005",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-22",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Hard",
    "questionText": "A ball is thrown vertically upwards. Which of the following plots represents the speed-time graph of the ball during its flight if air resistance is not ignored?",
    "options": [
      "Symmetric triangle",
      "Two linear ramps with equal slopes",
      "Speed decreases from u to 0 with steep slope (g+a), then increases to v' < u with smaller slope (g-a)",
      "Parabolic curve"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- During ascent: gravity and air resistance both act downward $\\implies a_{\\text{up}} = g + a_{\\text{drag}}$.\n- During descent: gravity acts downward, air resistance acts upward $\\implies a_{\\text{down}} = g - a_{\\text{drag}}$.\n\n\u26a1 **Step-by-Step Analysis**:\n- Speed decreases to zero with greater retardation ($g + a_{\\text{drag}}$) in shorter time $t_{\\text{up}}$.\n- Speed increases from zero with lesser acceleration ($g - a_{\\text{drag}}$) in longer time $t_{\\text{down}}$.\n- Striking speed $v < u$ due to energy dissipation.\n\n\u2713 **Examiner Key Takeaway**: Ascent slope is steeper than descent slope.",
    "tags": [
      "AIIMS 2003",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-23",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "Which velocity-time graph represents uniform acceleration?",
    "options": [
      "A straight line inclined to the time axis",
      "A horizontal line parallel to time axis",
      "A parabola opening downward",
      "A circle"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nUniform acceleration means $\\frac{dv}{dt} = \\text{constant} \\implies v = u + at$, which graph is a straight line inclined to the time axis.\n\n\u2713 **Examiner Key Takeaway**: Constant slope on $v\\text{--}t$ graph indicates constant acceleration.",
    "tags": [
      "DCE 2003",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-24",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "Which of the following velocity-time graphs shows a realistic situation for a body in motion?",
    "options": [
      "A vertical line (infinite velocity at one instant)",
      "A closed loop where at one time t the body has two different velocities",
      "A single-valued function v(t) where each time t has exactly one unique velocity",
      "A graph where time runs backwards"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nIn classical physics, a particle cannot possess two different velocities simultaneously at the same instant of time, nor can time travel backwards.\n\n\u2713 **Examiner Key Takeaway**: A valid physical graph must pass the vertical line test for single-valued $v(t)$.",
    "tags": [
      "AIIMS 2004",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-25",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "Which of the following velocity-time graphs represents uniform motion?",
    "options": [
      "A straight line parallel to the time axis (v = constant)",
      "A straight line passing through origin with positive slope",
      "A parabolic curve",
      "A vertical line parallel to velocity axis"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nUniform motion means velocity remains constant over time ($v(t) = v_0$), which corresponds to a horizontal line parallel to the time axis.\n\n\u2713 **Examiner Key Takeaway**: Horizontal line on $v\\text{--}t$ graph means $a = 0$ (uniform motion).",
    "tags": [
      "Kerala PMT 2004",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-26",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "An acceleration-time graph shows: a is constant positive (+a\u2080) from 0 to T/2, and zero from T/2 to T. The corresponding velocity-time graph of the body is:",
    "options": [
      "Velocity decreases linearly then becomes zero",
      "Velocity is parabolic throughout",
      "Velocity increases linearly with time from 0 to T/2 and then remains constant from T/2 to T",
      "Velocity remains constant from 0 to T/2 and then increases"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- When $a = +a_0$ (constant positive): $v = u + a_0 t$ (straight line increasing linearly).\n- When $a = 0$: $v = \\text{constant}$ (horizontal straight line).\n\n\u2713 **Examiner Key Takeaway**: Velocity increases linearly during constant acceleration, then stays constant when acceleration drops to zero.",
    "tags": [
      "DPMT 2004",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-27",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Hard",
    "questionText": "A graph shows linear variation of velocity with displacement: $v = -mx + v_0$ (negative slope $-m$, positive intercept $v_0$). Which graph correctly represents the variation of acceleration with displacement?",
    "options": [
      "Straight line with positive slope m\u00b2 and negative intercept -m v\u2080 ($a = m^2 x - m v_0$)",
      "Parabola passing through origin",
      "Horizontal straight line",
      "Circle"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAcceleration as a function of position is given by $a = v \\frac{dv}{dx}$.\n\n\u26a1 **Step-by-Step Derivation**:\nGiven $v = -mx + v_0 \\implies \\frac{dv}{dx} = -m$.\n$$a = v \\frac{dv}{dx} = (-mx + v_0)(-m) = m^2 x - m v_0$$\n- This is a linear equation in $x$ with positive slope $m^2$ and negative vertical intercept $-m v_0$.\n\n\u2713 **Examiner Key Takeaway**: $a(x) = m^2 x - mv_0$ produces an upward sloping line starting below the horizontal axis.",
    "tags": [
      "IIT-JEE Screening 2005",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-28",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Hard",
    "questionText": "The acceleration-time graph shows acceleration increasing linearly at a constant rate ($a = kt$) from t = 0 to t\u2081, and then suddenly dropping to zero. The most probable velocity-time graph of the body is:",
    "options": [
      "Straight line then horizontal",
      "Parabola opening downward then horizontal",
      "Parabola opening upward ($v = \\frac{1}{2}kt^2$) from 0 to t\u2081, then horizontal line ($v = \\text{constant}$) for t > t\u2081",
      "Cubic curve throughout"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- For $a = kt$: $v = \\int a\\,dt = \\int kt\\,dt = \\frac{1}{2}kt^2$ (parabolic curve concave upwards).\n- For $a = 0$: $v = \\text{constant}$ (horizontal straight line).\n\n\u2713 **Examiner Key Takeaway**: $\\int t\\,dt = \\frac{1}{2}t^2$ generates an upward parabola transitioning into a plateau.",
    "tags": [
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-29",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "From a displacement-time graph where the straight line makes an angle of 30\u00b0 with the displacement axis (vertical axis), find out the velocity of the moving body:",
    "options": [
      "1/\u221a3 m/s",
      "3 m/s",
      "\u221a3 m/s",
      "1/3 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nVelocity is defined as the slope with respect to the **time axis** (horizontal axis):\n$$v = \\tan \\theta_{\\text{time}}$$\n\n\u26a1 **Step-by-Step Calculations**:\n- Angle with displacement axis $= 30^\\circ$.\n- Angle with time axis $\\theta = 90^\\circ - 30^\\circ = 60^\\circ$.\n- Velocity $v = \\tan 60^\\circ = \\sqrt{3}\\text{ m/s}$.\n\n\u2713 **Examiner Key Takeaway**: Always ensure the angle is measured from the time axis ($x$-axis) before taking the tangent.",
    "tags": [
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-graph-30",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "The v-t plot of a moving object shows a triangle above time axis from 0 to 5 s (base 5, height +5 m/s) and a triangle below time axis from 5 to 10 s (base 5, height -5 m/s). The average velocity during the first 10 seconds is:",
    "options": [
      "0",
      "2.5 m/s",
      "5 m/s",
      "2 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\text{Average velocity} = \\frac{\\text{Net Displacement}}{\\text{Total Time}}$$\n\n\u26a1 **Step-by-Step Calculations**:\n$$\\text{Area}_1 (0\\text{ to }5\\text{ s}) = +\\frac{1}{2} \\times 5 \\times 5 = +12.5\\text{ m}$$\n$$\\text{Area}_2 (5\\text{ to }10\\text{ s}) = -\\frac{1}{2} \\times 5 \\times 5 = -12.5\\text{ m}$$\n$$\\text{Net Displacement} = +12.5 - 12.5 = 0\\text{ m}$$\n$$v_{\\text{avg}} = \\frac{0}{10} = 0\\text{ m/s}$$\n\n\u2713 **Examiner Key Takeaway**: Equal positive and negative areas cancel out, resulting in zero net displacement and zero average velocity.",
    "tags": [
      "Graphical Questions"
    ]
  },
  {
    "id": "mot-ar-01",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: A body can have acceleration even if its velocity is zero at a given instant of time.\nReason: A body is momentarily at rest when it reverses its direction of motion.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: At highest point of vertical throw, $v = 0$ but $a = -g = -9.8\\text{ m/s}^2 \\neq 0$. Reason correctly explains reversal of motion.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-02",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Two balls of different masses thrown vertically upward with same speed pass through point of projection downward with same speed.\nReason: Maximum height and downward velocity attained at projection point are independent of mass.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Equations of motion under gravity ($v^2 = u^2 - 2gh$) are completely independent of mass.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-03",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: If displacement of a body is zero, distance covered by it may not be zero.\nReason: Displacement is a vector quantity and distance is a scalar quantity.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: For a closed round trip, vector displacement cancels to zero while scalar distance accumulates positively.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-04",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Average velocity over an interval is either smaller than or equal to average speed over the same interval.\nReason: Velocity is a vector quantity and speed is a scalar quantity.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $|\\vec{r}| \\le s \\implies |\\vec{v}_{\\text{avg}}| \\le v_{\\text{avg}}$ because magnitude of displacement is $\\le$ distance.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-05",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: An object can have constant speed but variable velocity.\nReason: Speed is a scalar but velocity is a vector quantity.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: In uniform circular motion, speed is constant while velocity direction changes continuously.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-06",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: The speed of a body can be negative.\nReason: If the body is moving in opposite direction of positive motion, then its speed is negative.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Speed is the magnitude of velocity ($|\\vec{v}|$) and can never be negative. Both Assertion and Reason are false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-07",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: The position-time graph of uniform motion in 1D can have negative slope.\nReason: When speed of body decreases with time, position-time graph has negative slope.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Negative slope of $x\\text{--}t$ graph means constant velocity in negative direction (motion is uniform, speed is constant, not decreasing).",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-08",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: A positive acceleration of a body can be associated with 'slowing down' of the body.\nReason: Acceleration is a vector quantity.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: If body moves in negative direction ($v < 0$) with positive acceleration ($a > 0$), speed decreases. Reason is true but not complete explanation.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-09",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: A negative acceleration of a body can be associated with 'speeding up' of the body.\nReason: Increase in speed of a moving body is independent of its direction of motion.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: If $v < 0$ and $a < 0$, both are in the same direction so speed increases. Both statements are true.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-10",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: When a body is subjected to uniform acceleration, it always moves in a straight line.\nReason: Straight line motion is the natural tendency of the body.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Projectile motion has uniform acceleration ($g$) along a parabolic trajectory. Assertion is false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-11",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Rocket in flight is not an illustration of a projectile.\nReason: Rocket takes flight due to combustion of fuel and does not move under gravity alone.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Projectiles move solely under gravity. Rocket has thrust force from fuel expulsion.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-12",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Average speed equals average velocity if body moves in straight line in one direction.\nReason: In unidirectional 1D motion, distance equals displacement.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Without reversal of direction, $|\\Delta \\vec{x}| = \\Delta s \\implies |\\vec{v}_{\\text{avg}}| = v_{\\text{avg}}$.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-13",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Position-time graph of stationary object is a straight line parallel to time axis.\nReason: For stationary object, position does not change with time.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $x(t) = x_0 = \\text{constant} \\implies$ slope $\\frac{dx}{dt} = 0$, giving a horizontal line.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-14",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Slope of displacement-time graph of high velocity body is steeper than that of low velocity body.\nReason: Slope of displacement-time graph = Velocity of the body.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\text{Slope} = \\tan\\theta = \\frac{dx}{dt} = v$. Higher velocity implies larger slope angle.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-15",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Distance-time graph of uniformly accelerated motion is a straight line inclined to time axis.\nReason: Distance travelled in uniformly accelerated motion is proportional to square of time.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $s = \\frac{1}{2}at^2$ is parabolic, not a straight line. Assertion is false, Reason is true.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-16",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: A body having non-zero acceleration can have a constant velocity.\nReason: Acceleration is the rate of change of velocity.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Non-zero acceleration strictly means velocity is changing ($\\vec{a} = \\frac{d\\vec{v}}{dt} \\neq 0$). Assertion is false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-17",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: A body, whatever its motion, is always at rest in a frame of reference fixed to itself.\nReason: The relative velocity of a body with respect to itself is zero.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\vec{v}_{A/A} = \\vec{v}_A - \\vec{v}_A = 0$. Body is permanently at origin in its own co-moving frame.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-18",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Displacement of a body may be zero when distance travelled is not zero.\nReason: The displacement is the longest distance between initial and final position.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Displacement is the shortest (straight-line) distance, not longest. Reason is false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-19",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Equations of motion apply only if acceleration is along velocity and is constant.\nReason: If acceleration of a body is constant then motion is known as uniform motion.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Kinematic equations apply in vector form $\\vec{v} = \\vec{u} + \\vec{a}t$ for constant $\\vec{a}$ in any direction. Constant acceleration motion is uniformly accelerated, not uniform motion.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-20",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Bus moving north turns east with same speed. There will be no change in velocity of bus.\nReason: Velocity is a vector quantity.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Direction changes from North to East, so $\\Delta \\vec{v} = v\\hat{i} - v\\hat{j} \\neq 0$. Velocity changes. Assertion is false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-21",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Relative velocity between two bodies in opposite directions is equal to sum of their speeds.\nReason: Sometimes relative velocity between two bodies is equal to difference of velocities.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\vec{v}_{rel} = v_1 - (-v_2) = v_1 + v_2$. When moving in same direction, it is difference. Reason does not explain definition.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-22",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Displacement-time graph of body with uniform acceleration is a straight line.\nReason: Displacement is proportional to time for uniformly accelerated motion.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: For uniform acceleration $s = ut + \\frac{1}{2}at^2$ (parabolic curve). Both Assertion and Reason are false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-23",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Velocity-time graph for object in uniform motion along straight path is a straight line parallel to time axis.\nReason: In uniform motion velocity increases as square of time elapsed.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: In uniform motion velocity is constant ($a = 0$), so $v\\text{--}t$ graph is horizontal. Reason is completely false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-24",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: A body may be accelerated even when moving uniformly.\nReason: When direction of motion changes, body may have acceleration.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: In 1D kinematics uniform motion means constant velocity ($a = 0$). In circular motion speed is uniform but velocity direction changes. Assertion is false for 1D uniform motion.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-25",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: A body falling freely may do so with constant velocity.\nReason: The body falls freely when acceleration is equal to acceleration due to gravity.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Freely falling body accelerates at $g$, so velocity increases continuously ($v = gt$). Assertion is false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-26",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Displacement of a body is the vector sum of the area under the velocity-time graph.\nReason: Displacement is a vector quantity.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\vec{s} = \\int \\vec{v}\\,dt$. Areas above time axis are positive and below are negative.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-27",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Position-time graph of body moving uniformly is a straight line parallel to position axis.\nReason: Slope of position-time graph gives velocity of object.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Graph parallel to position axis would mean infinite velocity at a single instant. Assertion is false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-28",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Average speed may be equal to arithmetic mean of individual speeds.\nReason: Average speed is equal to total distance travelled divided by total time taken.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: When equal time intervals are spent at different speeds, $v_{\\text{avg}} = \\frac{v_1 + v_2}{2}$. Both are true statements.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-29",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Average and instantaneous velocities have same value in uniform motion.\nReason: In uniform motion, velocity of object increases uniformly.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: In uniform motion velocity is strictly constant ($v = \\text{constant}$), so $v_{\\text{inst}} = v_{\\text{avg}}$. Velocity does not increase.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-ar-30",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: The speedometer of an automobile measures the average speed of the automobile.\nReason: Average velocity is equal to total displacement per total time taken.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Speedometer measures instantaneous speed, not average speed. Assertion is false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot-set2-01",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Easy",
    "questionText": "A car travels a distance S on a straight road in 2 hours and then returns to the starting point in the next 3 hours. Its average velocity is:",
    "options": [
      "S/5",
      "2S/5",
      "S/2 + S/3",
      "None of the above (Zero)"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\vec{v}_{\\text{avg}} = \\frac{\\text{Net Displacement}}{\\text{Total Time}}$$\n\n\u26a1 **Step-by-Step Calculations**:\n- Since the car returns to its initial starting point, Net Displacement $= 0$.\n$$\\vec{v}_{\\text{avg}} = \\frac{0}{2 + 3} = 0\\text{ m/s}$$\n\n\u2713 **Examiner Key Takeaway**: Returning to the start point always yields zero average velocity.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-02",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Medium",
    "questionText": "A particle moves along the sides AB, BC, CD of a square of side 25 m with a velocity of 15 m/s. Its average velocity is:",
    "options": [
      "15 m/s",
      "10 m/s",
      "7.5 m/s",
      "5 m/s"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\vec{v}_{\\text{avg}} = \\frac{|\\vec{AD}|}{\\text{Total Time}}$$\n\n\u26a1 **Step-by-Step Calculations**:\n- Total distance along $AB + BC + CD = 25 + 25 + 25 = 75\\text{ m}$.\n- Total time taken $t = \\frac{75}{15} = 5\\text{ s}$.\n- Net displacement from $A$ to $D$ equals side length of square $= 25\\text{ m}$.\n$$v_{\\text{avg}} = \\frac{25\\text{ m}}{5\\text{ s}} = 5\\text{ m/s}$$\n\n\u2713 **Examiner Key Takeaway**: Displacement is direct vector $AD = 25\\text{ m}$, giving $5\\text{ m/s}$.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-03",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Medium",
    "questionText": "A body has speeds V, 2V, and 3V in the first 1/3 of distance S, second 1/3 of S, and third 1/3 of S respectively. Its average speed will be:",
    "options": [
      "V",
      "2V",
      "18/11 V",
      "11/18 V"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v_{\\text{avg}} = \\frac{S}{t_1 + t_2 + t_3}$$\n\n\u26a1 **Step-by-Step Calculations**:\n$$t_1 = \\frac{S/3}{V}, \\quad t_2 = \\frac{S/3}{2V}, \\quad t_3 = \\frac{S/3}{3V}$$\n$$t_{\\text{total}} = \\frac{S}{3V}\\left(1 + \\frac{1}{2} + \\frac{1}{3}\\right) = \\frac{S}{3V}\\left(\\frac{11}{6}\\right) = \\frac{11S}{18V}$$\n$$v_{\\text{avg}} = \\frac{S}{\\frac{11S}{18V}} = \\frac{18}{11}V$$\n\n\u2713 **Examiner Key Takeaway**: Harmonic mean formulation gives $\\frac{18}{11}V$.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-04",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Medium",
    "questionText": "If a body covers one-third distance at speed v\u2081, next one-third at speed v\u2082, and last one-third at speed v\u2083, then average speed will be:",
    "options": [
      "(v\u2081v\u2082 + v\u2082v\u2083 + v\u2083v\u2081) / (v\u2081 + v\u2082 + v\u2083)",
      "(v\u2081 + v\u2082 + v\u2083) / 3",
      "(v\u2081v\u2082v\u2083) / (v\u2081v\u2082 + v\u2082v\u2083 + v\u2083v\u2081)",
      "(3v\u2081v\u2082v\u2083) / (v\u2081v\u2082 + v\u2082v\u2083 + v\u2083v\u2081)"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nGeneral harmonic mean formula for three equal distance intervals:\n$$v_{\\text{avg}} = \\frac{3}{\\frac{1}{v_1} + \\frac{1}{v_2} + \\frac{1}{v_3}} = \\frac{3v_1 v_2 v_3}{v_1 v_2 + v_2 v_3 + v_3 v_1}$$\n\n\u2713 **Examiner Key Takeaway**: Three equal distance parts always follow 3-term harmonic mean.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-05",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Easy",
    "questionText": "The displacement of a particle varies with time according to the relation x = k/b [1 - e^(-bt)]. Then the velocity of the particle is:",
    "options": [
      "k e^(-bt)",
      "k/b\u00b2 e^(-bt)",
      "k b e^(-bt)",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v = \\frac{dx}{dt} = \\frac{d}{dt}\\left[\\frac{k}{b}(1 - e^{-bt})\\right]$$\n\n\u26a1 **Step-by-Step Calculations**:\n$$v = \\frac{k}{b}\\left[0 - (-b)e^{-bt}\\right] = \\frac{k}{b}(b e^{-bt}) = k e^{-bt}$$\n\n\u2713 **Examiner Key Takeaway**: Chain rule differentiation removes $1/b$ leaving $k e^{-bt}$.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-06",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Medium",
    "questionText": "The acceleration of a particle starting from rest varies with time according to A = -a \u03c9\u00b2 sin(\u03c9t). The displacement of this particle at time t will be:",
    "options": [
      "-1/2 a (\u03c9t)\u00b2 sin(\u03c9t)",
      "a \u03c9 sin(\u03c9t)",
      "a \u03c9 cos(\u03c9t)",
      "a sin(\u03c9t)"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v = \\int A\\,dt = \\int -a\\omega^2 \\sin(\\omega t)\\,dt = a\\omega \\cos(\\omega t) + C_1$$\nSince starting from rest at $t=0$, $v=0 \\implies a\\omega(1) + C_1 = 0 \\implies v = a\\omega(\\cos\\omega t - 1)$.\nDisplacement $x = \\int v\\,dt = a\\sin(\\omega t)$.\n\n\u2713 **Examiner Key Takeaway**: Double integration of $-\\omega^2 \\sin(\\omega t)$ returns $\\sin(\\omega t)$.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-07",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Easy",
    "questionText": "If the velocity of a particle is v = (10 + 2t\u00b2) m/s, then the average acceleration of the particle between t = 2 s and t = 5 s is:",
    "options": [
      "2 m/s\u00b2",
      "4 m/s\u00b2",
      "12 m/s\u00b2",
      "14 m/s\u00b2"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$a_{\\text{avg}} = \\frac{v(t_2) - v(t_1)}{t_2 - t_1}$$\n\n\u26a1 **Step-by-Step Calculations**:\n$$v(2) = 10 + 2(2^2) = 10 + 8 = 18\\text{ m/s}$$\n$$v(5) = 10 + 2(5^2) = 10 + 50 = 60\\text{ m/s}$$\n$$a_{\\text{avg}} = \\frac{60 - 18}{5 - 2} = \\frac{42}{3} = 14\\text{ m/s}^2$$\n\n\u2713 **Examiner Key Takeaway**: Average rate of change is $\\frac{\\Delta v}{\\Delta t} = 14\\text{ m/s}^2$.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-08",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Medium",
    "questionText": "A bullet moving with a velocity of 200 cm/s penetrates a wooden block and comes to rest after traversing 4 cm. What velocity is needed for travelling a distance of 9 cm in the same block?",
    "options": [
      "100 cm/s",
      "136.2 cm/s",
      "300 cm/s",
      "250 cm/s"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFrom third equation of motion: $v^2 = u^2 - 2as \\implies u^2 = 2as \\implies u \\propto \\sqrt{s}$.\n\n\u26a1 **Step-by-Step Calculations**:\n$$\\frac{u_2}{u_1} = \\sqrt{\\frac{s_2}{s_1}} = \\sqrt{\\frac{9}{4}} = \\frac{3}{2}$$\n$$u_2 = \\frac{3}{2} \\times 200 = 300\\text{ cm/s}$$\n\n\u2713 **Examiner Key Takeaway**: Velocity scales with the square root of stopping distance.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-09",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Easy",
    "questionText": "A thief is running away on a straight road in a jeep moving at 9 m/s. A policeman chases him on a motorcycle at 10 m/s. If the initial separation is 100 m, how long will it take for the police to catch the thief?",
    "options": [
      "1 s",
      "19 s",
      "90 s",
      "100 s"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nRelative velocity $v_{\\text{rel}} = v_{\\text{police}} - v_{\\text{thief}} = 10 - 9 = 1\\text{ m/s}$.\n\n\u26a1 **Step-by-Step Calculations**:\n$$t = \\frac{d_{\\text{rel}}}{v_{\\text{rel}}} = \\frac{100\\text{ m}}{1\\text{ m/s}} = 100\\text{ s}$$\n\n\u2713 **Examiner Key Takeaway**: Relative velocity of $1\\text{ m/s}$ covers $100\\text{ m}$ in $100\\text{ s}$.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-10",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Hard",
    "questionText": "Car A travels with uniform speed of 60 km/h. Car B follows at 70 km/h. When distance between them is 2.5 km, Car B decelerates at 20 km/h\u00b2. After how much time will B catch up with A?",
    "options": [
      "1 hr",
      "1/2 hr",
      "1/4 hr",
      "1/8 hr"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nUsing relative motion with Car A as reference frame:\n- Relative velocity $u_{\\text{rel}} = 70 - 60 = 10\\text{ km/h}$.\n- Relative acceleration $a_{\\text{rel}} = -20\\text{ km/h}^2$.\n- Separation $s_{\\text{rel}} = 2.5\\text{ km}$.\n\n\u26a1 **Step-by-Step Calculations**:\n$$s_{\\text{rel}} = u_{\\text{rel}} t + \\frac{1}{2}a_{\\text{rel}}t^2 \\implies 2.5 = 10t - 10t^2$$\n$$10t^2 - 10t + 2.5 = 0 \\implies 4t^2 - 4t + 1 = 0 \\implies (2t - 1)^2 = 0 \\implies t = \\frac{1}{2}\\text{ hr}$$\n\n\u2713 **Examiner Key Takeaway**: Single root $(2t-1)^2=0$ gives $t = 0.5\\text{ hr}$.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-11",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Medium",
    "questionText": "The speed of a body moving with uniform acceleration is u. This speed is doubled (2u) while covering a distance S. When it covers an additional distance S (total distance 2S), its speed will become:",
    "options": [
      "\u221a3 u",
      "\u221a5 u",
      "\u221a11 u",
      "\u221a7 u"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- In first distance $S$: $(2u)^2 = u^2 + 2aS \\implies 4u^2 = u^2 + 2aS \\implies 2aS = 3u^2$.\n- For total distance $2S$:\n  $$v^2 = u^2 + 2a(2S) = u^2 + 2(2aS) = u^2 + 2(3u^2) = 7u^2$$\n  $$v = \\sqrt{7}u$$\n\n\u2713 **Examiner Key Takeaway**: Additional distance adds another $2aS = 3u^2$, resulting in $\\sqrt{7}u$.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-12",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Medium",
    "questionText": "Two trains of lengths 100 m and 125 m move in opposite directions along parallel tracks, each with speed 10 m/s and accelerations 0.3 m/s\u00b2 and 0.2 m/s\u00b2 respectively. The time they take to pass each other completely will be:",
    "options": [
      "5 s",
      "10 s",
      "15 s",
      "20 s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- Relative distance to clear: $s_{\\text{rel}} = L_1 + L_2 = 100 + 125 = 225\\text{ m}$.\n- Relative velocity: $u_{\\text{rel}} = 10 + 10 = 20\\text{ m/s}$.\n- Relative acceleration: $a_{\\text{rel}} = 0.3 + 0.2 = 0.5\\text{ m/s}^2$.\n\n\u26a1 **Step-by-Step Calculations**:\n$$225 = 20t + \\frac{1}{2}(0.5)t^2 \\implies 0.25t^2 + 20t - 225 = 0 \\implies t^2 + 80t - 900 = 0$$\n$$(t + 90)(t - 10) = 0 \\implies t = 10\\text{ s}$$\n\n\u2713 **Examiner Key Takeaway**: Opposite direction motions sum up speeds, accelerations, and lengths.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-13",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Medium",
    "questionText": "A body starts from rest with uniform acceleration. If its velocity after n seconds is v, then its displacement in the last two seconds is:",
    "options": [
      "2v(n+1)/n",
      "v(n+1)/n",
      "v(n-1)/n",
      "2v(n-1)/n"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFrom $v = 0 + an \\implies a = v/n$.\n- Displacement in $n$ seconds: $S_n = \\frac{1}{2}an^2$.\n- Displacement in $(n-2)$ seconds: $S_{n-2} = \\frac{1}{2}a(n-2)^2$.\n\n\u26a1 **Step-by-Step Calculations**:\n$$\\Delta S = S_n - S_{n-2} = \\frac{1}{2}a [n^2 - (n-2)^2] = \\frac{1}{2}a (4n - 4) = 2a(n - 1)$$\nSubstituting $a = v/n$:\n$$\\Delta S = \\frac{2v(n - 1)}{n}$$\n\n\u2713 **Examiner Key Takeaway**: Formula $\\frac{2v(n-1)}{n}$ gives exact displacement in the last 2 seconds.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-14",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Hard",
    "questionText": "A point starts from rest with acceleration a. At time t, acceleration suddenly becomes retardation of the same magnitude a until it stops and reverses. The time in which the point returns to the initial point is:",
    "options": [
      "2t",
      "(2 + 2\u221a2)t",
      "t/2",
      "Cannot be predicted"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- Phase 1 (0 to t): accelerates from 0 to $v = at$, covering $S_1 = \\frac{1}{2}at^2$.\n- Phase 2 (t to 2t): decelerates from $at$ to 0 in time $t$, covering $S_2 = \\frac{1}{2}at^2$.\n- Total distance from origin: $S_{\\text{max}} = at^2$.\n- Phase 3 (return from rest): moves back distance $at^2$ with acceleration $a$:\n  $$at^2 = \\frac{1}{2}at_3^2 \\implies t_3^2 = 2t^2 \\implies t_3 = \\sqrt{2}t \\quad (\\text{or } 2\\sqrt{2}t)$$\n  $$\\text{Total Time} = 2t + 2\\sqrt{2}t = (2 + 2\\sqrt{2})t$$\n\n\u2713 **Examiner Key Takeaway**: Symmetric acceleration and return phase totals $(2 + 2\\sqrt{2})t$.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-15",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Hard",
    "questionText": "A particle passes point O with velocity 6 m/s. It experiences constant retardation of 2 m/s\u00b2 for 4 s and thereafter moves with constant velocity. How long after leaving O does it return to O?",
    "options": [
      "3 s",
      "8 s",
      "Never",
      "4 s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- At $t_1 = 3\\text{ s}$: $v = 6 - 2(3) = 0\\text{ m/s}$, distance $S_1 = 6(3) - \\frac{1}{2}(2)(9) = 9\\text{ m}$.\n- At 4th second: reverses and accelerates at $2\\text{ m/s}^2$ for 1 s, covering $S_2 = \\frac{1}{2}(2)(1^2) = 1\\text{ m}$ backwards.\n- Distance from origin at $t = 4\\text{ s}$: $9 - 1 = 8\\text{ m}$. Velocity at $t = 4\\text{ s}$: $v = -2\\text{ m/s}$.\n- Time to cover remaining 8 m at constant speed 2 m/s: $t_3 = 8/2 = 4\\text{ s}$.\n- Total time $= 4 + 4 = 8\\text{ s}$.\n\n\u2713 **Examiner Key Takeaway**: Total return time $= 3\\text{ s} + 1\\text{ s} + 4\\text{ s} = 8\\text{ s}$.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-16",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Medium",
    "questionText": "A bird flies for 4 s with velocity v = |t - 2| m/s in a straight line, where t is time in seconds. It covers a total distance of:",
    "options": [
      "2 m",
      "4 m",
      "6 m",
      "8 m"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\text{Distance} = \\int_0^4 |t - 2|\\,dt$$\n\n\u26a1 **Step-by-Step Calculations**:\n$$\\text{Distance} = \\int_0^2 (2 - t)\\,dt + \\int_2^4 (t - 2)\\,dt$$\n$$= \\left[2t - \\frac{t^2}{2}\\right]_0^2 + \\left[\\frac{t^2}{2} - 2t\\right]_2^4$$\n$$= (4 - 2) + [(8 - 8) - (2 - 4)] = 2 + 2 = 4\\text{ m}$$\n\n\u2713 **Examiner Key Takeaway**: The area of two symmetric triangles of base 2 and height 2 equals $2 + 2 = 4\\text{ m}$.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-17",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Hard",
    "questionText": "A particle is projected with velocity v\u2080 along x-axis. The deceleration is proportional to square of distance: a = \u03b1 x\u00b2. The distance at which particle stops is:",
    "options": [
      "3v\u2080 / 2\u03b1",
      "(3v\u2080 / 2\u03b1)^(1/3)",
      "(3v\u2080\u00b2 / 2\u03b1)",
      "(3v\u2080\u00b2 / 2\u03b1)^(1/3)"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v \\frac{dv}{dx} = -\\alpha x^2$$\n\n\u26a1 **Step-by-Step Integration**:\n$$\\int_{v_0}^0 v\\,dv = -\\alpha \\int_0^s x^2\\,dx$$\n$$\\left[\\frac{v^2}{2}\\right]_{v_0}^0 = -\\alpha \\left[\\frac{x^3}{3}\\right]_0^s \\implies -\\frac{v_0^2}{2} = -\\frac{\\alpha s^3}{3}$$\n$$s^3 = \\frac{3v_0^2}{2\\alpha} \\implies s = \\left(\\frac{3v_0^2}{2\\alpha}\\right)^{1/3}$$\n\n\u2713 **Examiner Key Takeaway**: Definite integration yields $s = \\left(\\frac{3v_0^2}{2\\alpha}\\right)^{1/3}$.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-18",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Easy",
    "questionText": "A body is projected vertically up with velocity v and after some time returns to the projection point. The average velocity and average speed for the total flight are:",
    "options": [
      "v/2 and v/2",
      "0 and v/2",
      "0 and 0",
      "v/2 and 0"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- Net displacement $= 0 \\implies v_{\\text{avg}} = 0$.\n- Total distance $= 2H = 2\\left(\\frac{v^2}{2g}\\right) = \\frac{v^2}{g}$.\n- Total time $T = \\frac{2v}{g}$.\n$$\\text{Average speed} = \\frac{v^2/g}{2v/g} = \\frac{v}{2}$$\n\n\u2713 **Examiner Key Takeaway**: Average velocity is zero, while average speed is $v/2$.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-19",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Medium",
    "questionText": "A stone is dropped from height h. Simultaneously, another is thrown up from ground reaching max height 4h. The two stones cross each other after time:",
    "options": [
      "\u221a(h / 8g)",
      "\u221a(8gh)",
      "\u221a(2gh)",
      "\u221a(h / 2g)"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- For second stone to reach max height $4h$: $u = \\sqrt{2g(4h)} = \\sqrt{8gh}$.\n- Relative velocity of approach: $v_{\\text{rel}} = u - 0 = \\sqrt{8gh}$.\n- Since both experience same downward acceleration $g$, $a_{\\text{rel}} = 0$.\n\n\u26a1 **Step-by-Step Calculations**:\n$$t = \\frac{h}{v_{\\text{rel}}} = \\frac{h}{\\sqrt{8gh}} = \\sqrt{\\frac{h}{8g}}$$\n\n\u2713 **Examiner Key Takeaway**: Relative velocity method gives $t = \\sqrt{\\frac{h}{8g}}$ directly.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-20",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Medium",
    "questionText": "Four marbles are dropped from a tower one after another with 1 s interval. First reaches ground in 4 s. When the 1st hits ground, distances between 1st & 2nd, 2nd & 3rd, and 3rd & 4th are respectively (g = 10 m/s\u00b2):",
    "options": [
      "35, 25 and 15 m",
      "30, 20 and 10 m",
      "20, 10 and 5 m",
      "40, 30 and 20 m"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nHeights fallen after $4\\text{ s}, 3\\text{ s}, 2\\text{ s}, 1\\text{ s}$:\n$$h_1 = \\frac{1}{2}(10)(16) = 80\\text{ m}$$\n$$h_2 = \\frac{1}{2}(10)(9) = 45\\text{ m}$$\n$$h_3 = \\frac{1}{2}(10)(4) = 20\\text{ m}$$\n$$h_4 = \\frac{1}{2}(10)(1) = 5\\text{ m}$$\n\n\u26a1 **Step-by-Step Differences**:\n$$h_1 - h_2 = 80 - 45 = 35\\text{ m}$$\n$$h_2 - h_3 = 45 - 20 = 25\\text{ m}$$\n$$h_3 - h_4 = 20 - 5 = 15\\text{ m}$$\n\n\u2713 **Examiner Key Takeaway**: Distances between consecutive drops follow odd integer spacing ($35\\text{ m}, 25\\text{ m}, 15\\text{ m}$).",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-21",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Hard",
    "questionText": "A balloon rises from rest with constant acceleration g/8. A stone is released when it has risen to height h. The time taken by the stone to reach the ground is:",
    "options": [
      "4\u221a(h/g)",
      "2\u221a(h/g)",
      "\u221a(2h/g)",
      "\u221a(g/h)"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nUpward velocity of balloon at height $h$:\n$$u = \\sqrt{2(g/8)h} = \\sqrt{\\frac{gh}{4}} = \\frac{\\sqrt{gh}}{2}$$\n\n\u26a1 **Step-by-Step Calculations**:\nFor the released stone with initial upward velocity $u$ from height $h$:\n$$-h = ut - \\frac{1}{2}gt^2 \\implies \\frac{1}{2}gt^2 - \\frac{\\sqrt{gh}}{2}t - h = 0$$\n$$gt^2 - \\sqrt{gh}t - 2h = 0 \\implies t = \\frac{\\sqrt{gh} + \\sqrt{gh + 8gh}}{2g} = \\frac{\\sqrt{gh} + 3\\sqrt{gh}}{2g} = \\frac{4\\sqrt{gh}}{2g} = 2\\sqrt{\\frac{h}{g}}$$\n\n\u2713 **Examiner Key Takeaway**: Quadratic formula resolves to $t = 2\\sqrt{h/g}$.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-22",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Easy",
    "questionText": "Two bodies are thrown simultaneously from a tower with same initial velocity v\u2080: one vertically upwards, the other vertically downwards. The distance between the two bodies after time t is:",
    "options": [
      "2v\u2080t + 1/2 gt\u00b2",
      "2v\u2080t",
      "v\u2080t + 1/2 gt\u00b2",
      "v\u2080t"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nRelative acceleration $a_{\\text{rel}} = g - g = 0$.\nRelative velocity $v_{\\text{rel}} = v_0 - (-v_0) = 2v_0$.\n\n\u26a1 **Step-by-Step Calculations**:\n$$d(t) = v_{\\text{rel}} t = 2v_0 t$$\n\n\u2713 **Examiner Key Takeaway**: Gravity cancels in relative motion, leaving uniform separation growth $2v_0t$.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-23",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Hard",
    "questionText": "A body falls freely from the top of a tower. It covers 36% of the total height in the last second before striking the ground level. The height of the tower is (g = 10 m/s\u00b2):",
    "options": [
      "50 m",
      "75 m",
      "100 m",
      "125 m"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nTotal height $h = \\frac{1}{2}gt^2$.\nHeight in $(t-1)$ seconds $= 0.64h = \\frac{1}{2}g(t-1)^2$.\n\n\u26a1 **Step-by-Step Calculations**:\n$$\\frac{t-1}{t} = \\sqrt{0.64} = 0.8 \\implies t - 1 = 0.8t \\implies 0.2t = 1 \\implies t = 5\\text{ s}$$\n$$h = \\frac{1}{2}(10)(5^2) = \\frac{1}{2}(10)(25) = 125\\text{ m}$$\n\n\u2713 **Examiner Key Takeaway**: Time of fall is $5\\text{ s}$, yielding height $h = 125\\text{ m}$.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-24",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Medium",
    "questionText": "A particle is projected upwards. The times corresponding to height h while ascending and while descending are t\u2081 and t\u2082 respectively. The velocity of projection will be:",
    "options": [
      "gt\u2081",
      "gt\u2082",
      "g(t\u2081 + t\u2082)",
      "g(t\u2081 + t\u2082)/2"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFrom $h = ut - \\frac{1}{2}gt^2 \\implies \\frac{1}{2}gt^2 - ut + h = 0$.\nBy sum of roots of quadratic in $t$:\n$$t_1 + t_2 = \\frac{u}{g/2} = \\frac{2u}{g}$$\n$$u = \\frac{g(t_1 + t_2)}{2}$$\n\n\u2713 **Examiner Key Takeaway**: Sum of times to same level equals total time of flight $T = \\frac{2u}{g}$.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  },
  {
    "id": "mot-set2-25",
    "subject": "Physics",
    "chapter": "Motion in One Dimension",
    "topic": "Self Evaluation Test - 2",
    "difficulty": "Hard",
    "questionText": "A projectile is fired vertically upwards with velocity u. After an interval of T seconds a second projectile is fired vertically upwards, also with velocity u. They will meet at time t and height h given by:",
    "options": [
      "t = u/g, h = u\u00b2/(2g) + gT\u00b2/8",
      "t = u/g + T/2, h = u\u00b2/(2g) + gT\u00b2/8",
      "t = u/g + T/2, h = u\u00b2/(2g) - gT\u00b2/8",
      "They never meet"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nHeight of first: $h_1 = ut - \\frac{1}{2}gt^2$.\nHeight of second: $h_2 = u(t - T) - \\frac{1}{2}g(t - T)^2$.\n\n\u26a1 **Step-by-Step Derivation**:\nEquating $h_1 = h_2$:\n$$ut - \\frac{1}{2}gt^2 = u(t - T) - \\frac{1}{2}g(t^2 - 2tT + T^2)$$\n$$0 = -uT + gtT - \\frac{1}{2}gT^2 \\implies t = \\frac{u}{g} + \\frac{T}{2}$$\nSubstituting $t$ into $h_1$:\n$$h = \\frac{u^2}{2g} - \\frac{gT^2}{8}$$\n\n\u2713 **Examiner Key Takeaway**: Midpoint symmetry and reduction from apex height yields $h = \\frac{u^2}{2g} - \\frac{gT^2}{8}$.",
    "tags": [
      "Self Evaluation Test - 2"
    ]
  }
];
