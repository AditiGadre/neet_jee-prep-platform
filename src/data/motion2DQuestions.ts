import { Question } from '../types';

export const MOTION_2D_BOOK_QUESTIONS: Question[] = [
  {
    "id": "mot2d-ucm-01",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "If the body is moving in a circle of radius r with a constant speed v, its angular velocity is:",
    "options": [
      "v\u00b2/r",
      "vr",
      "v/r",
      "r/v"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nThe relation between linear speed $v$ and angular speed $\\omega$ in circular motion of radius $r$ is:\n$$v = r\\omega \\implies \\omega = \\frac{v}{r}$$\nSince both $v$ and $r$ are constant, $\\omega$ is also constant.",
    "tags": [
      "CPMT 1975",
      "RPET 1999",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-02",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "Two racing cars of masses m\u2081 and m\u2082 are moving in circles of radii r\u2081 and r\u2082 respectively. Their speeds are such that each makes a complete circle in the same duration of time t. The ratio of the angular speed of the first to the second car is:",
    "options": [
      "m\u2081 : m\u2082",
      "r\u2081 : r\u2082",
      "1 : 1",
      "m\u2081r\u2081 : m\u2082r\u2082"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAngular speed is given by $\\omega = \\frac{2\\pi}{T}$.\n\n\u26a1 **Step-by-Step Derivation**:\nSince both cars complete one full rotation in the same time duration $t$ ($T_1 = T_2 = t$):\n$$\\frac{\\omega_1}{\\omega_2} = \\frac{2\\pi/T_1}{2\\pi/T_2} = \\frac{T_2}{T_1} = \\frac{t}{t} = 1 : 1$$\n\n\u2713 **Examiner Pro-Tip**: Angular velocity depends strictly on the periodic time, completely independent of radius and mass.",
    "tags": [
      "NCERT 1980",
      "MNR 1995",
      "CBSE PMT 1999",
      "UPSEAT 2000",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-03",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A cyclist turns around a curve at 15 miles/hour. If he turns at double the speed, the tendency to overturn is:",
    "options": [
      "Doubled",
      "Quadrupled",
      "Halved",
      "Unchanged"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nThe required centripetal force / overturning torque is proportional to $v^2$:\n$$F_c = \\frac{mv^2}{r} \\implies F_c \\propto v^2$$\nWhen speed is doubled ($v' = 2v$), the tendency to overturn becomes $(2)^2 = 4\\text{ times}$ (Quadrupled).",
    "tags": [
      "CPMT 1974",
      "AFMC 2003",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-04",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A body of mass m is moving in a circle of radius r with a constant speed v. The force on the body is mv\u00b2/r and is directed towards the centre. What is the work done by this force in moving the body over half the circumference of the circle?",
    "options": [
      "(mv\u00b2/r) \u00d7 \u03c0r",
      "Zero",
      "mv\u00b2/r\u00b2",
      "(\u03c0r\u00b2)/(mv\u00b2)"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nWork done $W = \\vec{F} \\cdot \\vec{d} = F \\, d \\cos\\theta$.\nIn circular motion, the centripetal force is always perpendicular to instantaneous displacement (velocity vector), so $\\theta = 90^\\circ$ at all times:\n$$W = \\int F \\cos 90^\\circ \\, ds = 0$$\n\n\u2713 **Examiner Pro-Tip**: The work done by any centripetal force over any arc length is identically zero.",
    "tags": [
      "NCERT 1977",
      "RPET 1999",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-05",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "If a particle moves in a circle describing equal angles in equal times, its velocity vector:",
    "options": [
      "Remains constant",
      "Changes in magnitude",
      "Changes in direction",
      "Changes both in magnitude and direction"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nDescribing equal angles in equal times means uniform circular motion (constant speed $v = \\text{constant}$).\nHowever, the direction of the velocity vector is along the tangent, which changes continuously from point to point.\nHence, velocity vector changes in direction only.",
    "tags": [
      "CPMT 1972",
      "JIPMER 1997",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-06",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A stone of mass m is tied to a string of length l and rotated in a circle with a constant speed v. If the string is released, the stone flies:",
    "options": [
      "Radially outward",
      "Radially inward",
      "Tangentially outward",
      "With an acceleration mv\u00b2/l"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nBy Newton's first law (directional inertia), once the centripetal tension ceases to act, the particle continues moving in a straight line along its instantaneous direction of motion, which is along the tangent to the circle.",
    "tags": [
      "NCERT 1977",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-07",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A body is moving in a circular path with a constant speed. It has:",
    "options": [
      "A constant velocity",
      "A constant acceleration",
      "An acceleration of constant magnitude",
      "An acceleration which varies with time"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nIn uniform circular motion:\n- Magnitude of acceleration is constant: $a_c = \\frac{v^2}{r} = \\omega^2 r$.\n- Direction of acceleration points radially inward towards the center and changes continuously as the particle moves.\nThus it has an acceleration of constant magnitude.",
    "tags": [
      "CPMT 1972",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-08",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A motorcyclist going round in a circular track at constant speed has:",
    "options": [
      "Constant linear velocity",
      "Constant acceleration",
      "Constant angular velocity",
      "Constant force"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nIn uniform circular motion, speed and angular speed $\\omega = \\frac{d\\theta}{dt}$ remain constant, and the axis of rotation does not change direction. Hence, angular velocity vector $\\vec{\\omega}$ remains constant.",
    "tags": [
      "NCERT 1975",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-09",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle P is moving in a circle of radius 'a' with a uniform speed v. C is the centre of the circle and AB is a diameter. When passing through B the angular velocity of P about A and C are in the ratio:",
    "options": [
      "1 : 1",
      "1 : 2",
      "2 : 1",
      "4 : 1"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAngular velocity of a particle about any point is $\\omega = \\frac{v_\\perp}{r}$.\n\n\u26a1 **Step-by-Step Derivation**:\n- About diameter endpoint $A$: distance $AB = 2a \\implies \\omega_A = \\frac{v}{2a}$.\n- About centre $C$: distance $BC = a \\implies \\omega_C = \\frac{v}{a}$.\n$$\\frac{\\omega_A}{\\omega_C} = \\frac{v/(2a)}{v/a} = \\frac{1}{2} = 1 : 2$$\n\n\u2713 **Examiner Pro-Tip**: By geometry, angle subtended at the centre is double the angle subtended at the circumference ($\\theta_C = 2\\theta_A \\implies \\omega_C = 2\\omega_A$).",
    "tags": [
      "NCERT 1982",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-10",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A car moving on a horizontal road may be thrown out of the road in taking a turn:",
    "options": [
      "By the gravitational force",
      "Due to lack of sufficient centripetal force",
      "Due to rolling frictional force between tyre and road",
      "Due to the reaction of the ground"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nTo take a turn safely without skidding, static friction must supply the required centripetal force: $f_s = \\frac{mv^2}{r} \\le \\mu mg$. If speed exceeds safe limit ($v > \\sqrt{\\mu r g}$), available friction is insufficient, causing the car to skid outwards.",
    "tags": [
      "NCERT 1983",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-11",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "Two particles of equal masses are revolving in circular paths of radii r\u2081 and r\u2082 respectively with the same speed. The ratio of their centripetal forces is:",
    "options": [
      "r\u2082 / r\u2081",
      "r\u2081 / r\u2082",
      "(r\u2081 / r\u2082)\u00b2",
      "(r\u2082 / r\u2081)\u00b2"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nCentripetal force $F = \\frac{mv^2}{r}$.\nFor constant mass $m$ and constant speed $v$, $F \\propto \\frac{1}{r}$.\n$$\\frac{F_1}{F_2} = \\frac{r_2}{r_1}$$",
    "tags": [
      "NCERT 1984",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-12",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A particle moves with constant angular velocity in a circle. During the motion its:",
    "options": [
      "Energy is conserved",
      "Momentum is conserved",
      "Energy and momentum both are conserved",
      "None of the above is conserved"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- Kinetic energy $K = \\frac{1}{2}mv^2$ is scalar and depends only on speed, hence conserved.\n- Linear momentum $\\vec{p} = m\\vec{v}$ is a vector quantity whose direction continuously changes, hence not conserved.",
    "tags": [
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-13",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A stone tied to a string is rotated in a circle. If the string is cut, the stone flies away from the circle because:",
    "options": [
      "A centrifugal force acts on the stone",
      "A centripetal force acts on the stone",
      "Of its inertia",
      "Reaction of the centripetal force"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAccording to Newton's first law, every material body continues in its state of uniform motion along a straight line (inertia of direction). Once the string tension vanishes, no force acts, so it flies tangentially due to its inertia.",
    "tags": [
      "NCERT 1977",
      "RPET 1999",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-14",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A body is revolving with a constant speed along a circle. If its direction of motion is reversed but the speed remains the same, then which of the following statement is true:",
    "options": [
      "The centripetal force will not suffer any change in magnitude",
      "The centripetal force will have its direction reversed",
      "The centripetal force will not suffer any change in direction",
      "The centripetal force would be doubled"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nCentripetal force $F = \\frac{mv^2}{r}$ is always directed radially towards the centre, irrespective of clockwise or anticlockwise sense of rotation. Thus, neither its magnitude nor its inward direction changes.",
    "tags": [
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-15",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "When a body moves with a constant speed along a circle:",
    "options": [
      "No work is done on it",
      "No acceleration is produced in the body",
      "No force acts on the body",
      "Its velocity remains constant"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nWork done $W = \\int \\vec{F} \\cdot d\\vec{r} = \\int F \\, ds \\cos 90^\\circ = 0$, because centripetal force is always perpendicular to instantaneous displacement.",
    "tags": [
      "CBSE PMT 1994",
      "Orissa PMT 2004",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-16",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A body of mass m moves in a circular path with uniform angular velocity. The motion of the body has constant:",
    "options": [
      "Acceleration",
      "Velocity",
      "Momentum",
      "Kinetic energy"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nKinetic energy $K = \\frac{1}{2}m v^2 = \\frac{1}{2}m (r\\omega)^2$ is a scalar quantity and remains strictly constant. Velocity, momentum, and acceleration vectors change directions continuously.",
    "tags": [
      "MP PET 2003",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-17",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "On a railway curve, the outside rail is laid higher than the inside one so that the resultant force exerted on the wheels of the rail car by the tops of the rails will:",
    "options": [
      "Have a horizontal inward component",
      "Be vertical",
      "Equilibrate the centripetal force",
      "Be decreased"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nBy raising the outer rail (banking), the normal reaction $\\vec{N}$ tilts at an angle $\\theta$ with the vertical. The horizontal inward component $N\\sin\\theta$ provides the necessary centripetal force $\\frac{mv^2}{r}$ for the turn without relying on wheel flange friction.",
    "tags": [
      "NCERT 1975",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-18",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "If the overbridge is concave instead of being convex, the thrust on the road at the lowest position will be:",
    "options": [
      "mg + mv\u00b2/r",
      "mg - mv\u00b2/r",
      "m\u00b2v\u00b2g/r",
      "v\u00b2g/r"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFor a concave bridge at the lowest point, the acceleration is directed vertically upward:\n$$N - mg = \\frac{mv^2}{r} \\implies N = mg + \\frac{mv^2}{r}$$\nBy Newton's third law, the thrust on the road equals the normal force $N = mg + \\frac{mv^2}{r}$.",
    "tags": [
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-19",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A cyclist taking a turn bends inwards while a car passenger taking the same turn is thrown outwards. The reason is:",
    "options": [
      "Car is heavier than cycle",
      "Car has four wheels while cycle has only two",
      "Difference in the speed of the two",
      "Cyclist has to counteract the centrifugal force while in the case of car only the passenger is thrown by this force"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nThe cyclist leans inwards so that the resultant of normal reaction and friction passes through the center of gravity, balancing the centrifugal torque. In a car, the car is turned by road friction while the passenger in the non-inertial rotating frame experiences an outward centrifugal pseudo-force.",
    "tags": [
      "NCERT 1972",
      "CPMT 1974",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-20",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A car sometimes overturns while taking a turn. When it overturns, it is:",
    "options": [
      "The inner wheel which leaves the ground first",
      "The outer wheel which leaves the ground first",
      "Both the wheels leave the ground simultaneously",
      "Either wheel leaves the ground first"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nNormal reactions on inner and outer wheels are:\n$$R_1 = \\frac{1}{2}M\\left(g - \\frac{v^2 h}{r a}\\right), \\quad R_2 = \\frac{1}{2}M\\left(g + \\frac{v^2 h}{r a}\\right)$$\nAs speed $v$ increases, $R_1$ decreases and reaches zero first at the critical speed $v_c = \\sqrt{\\frac{g r a}{h}}$. Hence the inner wheel leaves the ground first.",
    "tags": [
      "AFMC 1988",
      "MP PMT 2003",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-21",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A tachometer is a device used to measure:",
    "options": [
      "Gravitational pull",
      "Speed of rotation",
      "Surface tension",
      "Tension in a spring"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nA tachometer is an instrument designed to measure the rotation speed (angular velocity in RPM) of a shaft or disk, as in a motor or engine.",
    "tags": [
      "DPMT 1999",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-22",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "Two bodies of mass 10 kg and 5 kg moving in concentric orbits of radii R and r such that their periods are the same. Then the ratio between their centripetal acceleration is:",
    "options": [
      "R / r",
      "r / R",
      "R\u00b2 / r\u00b2",
      "r\u00b2 / R\u00b2"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nCentripetal acceleration $a = \\omega^2 r = \\left(\\frac{2\\pi}{T}\\right)^2 r$.\nSince time periods are equal ($T_1 = T_2$), $\\omega$ is identical for both:\n$$\\frac{a_R}{a_r} = \\frac{\\omega^2 R}{\\omega^2 r} = \\frac{R}{r}$$",
    "tags": [
      "CBSE PMT 2001",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-23",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "The ratio of angular speeds of minute hand and hour hand of a watch is:",
    "options": [
      "1 : 12",
      "6 : 1",
      "12 : 1",
      "1 : 6"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- Period of minute hand $T_{\\text{min}} = 1\\text{ hr} = 60\\text{ min}$.\n- Period of hour hand $T_{\\text{hr}} = 12\\text{ hr} = 720\\text{ min}$.\n$$\\frac{\\omega_{\\text{min}}}{\\omega_{\\text{hr}}} = \\frac{T_{\\text{hr}}}{T_{\\text{min}}} = \\frac{12\\text{ hr}}{1\\text{ hr}} = 12 : 1$$",
    "tags": [
      "MH CET 2002",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-24",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A car travels north with a uniform velocity. It goes over a piece of mud which sticks to the tyre. The particles of the mud, as it leaves the ground are thrown:",
    "options": [
      "Vertically upwards",
      "Vertically inwards",
      "Towards north",
      "Towards south"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAt the lowest point of the rolling wheel in contact with ground, the tangential velocity is directed backward (towards South for a car moving North). When mud detaches from the tyre at ground level, it flies off in the direction of its instantaneous tangential velocity, i.e., towards South.",
    "tags": [
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-25",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "An aircraft executes a horizontal loop with a speed of 150 m/s with its wings banked at an angle of 12\u00b0. The radius of the loop is (g = 10 m/s\u00b2):",
    "options": [
      "10.6 km",
      "9.6 km",
      "7.4 km",
      "5.8 km"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\tan\\theta = \\frac{v^2}{rg} \\implies r = \\frac{v^2}{g \\tan\\theta}$$\n\n\u26a1 **Step-by-Step Calculations**:\n$$\\tan 12^\\circ \\approx 0.2126$$\n$$r = \\frac{150^2}{10 \\times 0.2126} = \\frac{22500}{2.126} \\approx 10583\\text{ m} \\approx 10.6\\text{ km}$$",
    "tags": [
      "Pb. PET 2001",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-26",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A particle is moving in a horizontal circle with constant speed. It has constant:",
    "options": [
      "Velocity",
      "Acceleration",
      "Kinetic energy",
      "Displacement"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nKinetic energy $K = \\frac{1}{2}mv^2$ is a scalar quantity and remains constant because speed is constant.",
    "tags": [
      "MP PMT 1987",
      "AFMC 1993",
      "CPMT 1997",
      "MP PET 2000",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-27",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A motorcyclist moving with a velocity of 72 km/hour on a flat road takes a turn at a point where the radius of curvature is 20 meters. Acceleration due to gravity is 10 m/s\u00b2. To avoid skidding, he must not bend with respect to vertical plane by an angle greater than:",
    "options": [
      "\u03b8 = tan\u207b\u00b9(6)",
      "\u03b8 = tan\u207b\u00b9(2)",
      "\u03b8 = tan\u207b\u00b9(25.92)",
      "\u03b8 = tan\u207b\u00b9(4)"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\tan\\theta = \\frac{v^2}{rg}$$\n\n\u26a1 **Step-by-Step Calculations**:\n$$v = 72\\text{ km/h} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}$$\n$$\\tan\\theta = \\frac{20^2}{20 \\times 10} = \\frac{400}{200} = 2 \\implies \\theta = \\tan^{-1}(2)$$",
    "tags": [
      "CPMT 1986",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-28",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A train is moving towards north. At one place it turns towards north-east. Here we observe that:",
    "options": [
      "The radius of curvature of outer rail will be greater than that of the inner rail",
      "The radius of the inner rail will be greater than that of the outer rail",
      "The radius of curvature of one of the rails will be greater",
      "The radius of curvature of the outer and inner rails will be the same"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFor two concentric circular rails, the outer rail forms a larger circle of radius $r_{\\text{outer}} = r_{\\text{inner}} + w$, where $w$ is the track gauge width. Hence radius of curvature of the outer rail is strictly greater.",
    "tags": [
      "AIIMS 1980",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-29",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "The angular speed of a flywheel making 120 revolutions/minute is:",
    "options": [
      "2\u03c0 rad/s",
      "4\u03c0\u00b2 rad/s",
      "\u03c0 rad/s",
      "4\u03c0 rad/s"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\omega = 2\\pi n = 2\\pi \\times \\frac{120}{60} = 4\\pi\\text{ rad/s}$$",
    "tags": [
      "CBSE PMT 1995",
      "AFMC 2002",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-30",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A particle is moving on a circular path with constant speed, then its acceleration will be:",
    "options": [
      "Zero",
      "External radial acceleration",
      "Internal radial acceleration (directed towards center)",
      "Constant acceleration"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nIn uniform circular motion, the only acceleration is centripetal acceleration, which acts radially inward (internal radial acceleration) towards the centre of the circle.",
    "tags": [
      "RPET 2003",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-31",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A car is moving on a circular path and takes a turn. If R\u2081 and R\u2082 be the normal reactions on the inner and outer wheels respectively, then:",
    "options": [
      "R\u2081 = R\u2082",
      "R\u2081 < R\u2082",
      "R\u2081 > R\u2082",
      "R\u2081 \u2265 R\u2082"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$R_1 = \\frac{1}{2}M\\left(g - \\frac{v^2 h}{r a}\\right), \\quad R_2 = \\frac{1}{2}M\\left(g + \\frac{v^2 h}{r a}\\right)$$\nDue to the overturning centrifugal torque about the center of gravity, load is shifted to the outer wheels, making $R_1 < R_2$.",
    "tags": [
      "MH CET 2001",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-32",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A mass of 100 gm is tied to one end of a string 2 m long. The body revolves in a horizontal circle making a maximum of 200 revolutions per min. The maximum tension that the string can bear is approximately:",
    "options": [
      "8.76 N",
      "8.94 N",
      "89.42 N",
      "87.64 N"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$T = m\\omega^2 r = m (2\\pi n)^2 r = 4\\pi^2 m n^2 r$$\n\n\u26a1 **Step-by-Step Calculations**:\n$$n = \\frac{200}{60} = \\frac{10}{3}\\text{ rev/s}, \\quad m = 0.1\\text{ kg}, \\quad r = 2\\text{ m}$$\n$$T = 4\\pi^2 \\times 0.1 \\times \\left(\\frac{10}{3}\\right)^2 \\times 2 = 4(9.8696) \\times 0.1 \\times \\frac{100}{9} \\times 2 = \\frac{78.9568}{9} \\times 10 \\approx 87.64\\text{ N}$$",
    "tags": [
      "MP PET 1993",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-33",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A road is 10 m wide. Its radius of curvature is 50 m. The outer edge is above the lower edge by a distance of 1.5 m. This road is most suited for the velocity (g = 9.8 m/s\u00b2):",
    "options": [
      "2.5 m/s",
      "4.5 m/s",
      "6.5 m/s",
      "8.5 m/s"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\tan\\theta = \\frac{h}{l} = \\frac{v^2}{rg} \\implies v = \\sqrt{\\frac{rgh}{l}}$$\n\n\u26a1 **Step-by-Step Calculations**:\n$$v = \\sqrt{\\frac{50 \\times 9.8 \\times 1.5}{10}} = \\sqrt{5 \\times 9.8 \\times 1.5} = \\sqrt{73.5} \\approx 8.57\\text{ m/s} \\approx 8.5\\text{ m/s}$$",
    "tags": [
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-34",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "Certain neutron stars rotate at about 1 rev/sec. If such a star has a radius of 20 km, the acceleration of an object on the equator of the star will be:",
    "options": [
      "20 \u00d7 10\u2078 m/s\u00b2",
      "8 \u00d7 10\u2075 m/s\u00b2",
      "120 \u00d7 10\u2075 m/s\u00b2",
      "4 \u00d7 10\u2078 m/s\u00b2"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$a = \\omega^2 r = (2\\pi n)^2 r = 4\\pi^2 n^2 r$$\n\n\u26a1 **Step-by-Step Calculations**:\n$$n = 1\\text{ s}^{-1}, \\quad r = 20\\text{ km} = 20 \\times 10^3\\text{ m}$$\n$$a = 4\\pi^2 (1)^2 (20 \\times 10^3) = 80\\pi^2 \\times 10^3 \\approx 80(9.87) \\times 10^3 \\approx 7.89 \\times 10^5\\text{ m/s}^2 \\approx 8 \\times 10^5\\text{ m/s}^2$$",
    "tags": [
      "NCERT 1982",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-35",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A particle revolves round a circular path. The centripetal acceleration of the particle is:",
    "options": [
      "Along the circumference of the circle",
      "Along the tangent",
      "Along the radius towards the centre",
      "Zero"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nCentripetal acceleration is directed along the radius towards the centre of the circle ($a_c = \\frac{v^2}{r}$).",
    "tags": [
      "MNR 1986",
      "UPSEAT 1999",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-36",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "The length of second's hand in a watch is 1 cm. The magnitude of change in velocity of its tip in 15 seconds is:",
    "options": [
      "Zero",
      "\u03c0/(30\u221a2) cm/s",
      "\u03c0/30 cm/s",
      "\u03c0\u221a2/30 cm/s"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nIn 15 seconds, the second's hand rotates through $\\theta = 90^\\circ$.\n\n\u26a1 **Step-by-Step Calculations**:\n$$v = r\\omega = 1 \\times \\frac{2\\pi}{60} = \\frac{\\pi}{30}\\text{ cm/s}$$\n$$|\\Delta \\vec{v}| = 2v\\sin\\left(\\frac{\\theta}{2}\\right) = 2\\left(\\frac{\\pi}{30}\\right)\\sin 45^\\circ = 2\\left(\\frac{\\pi}{30}\\right)\\frac{1}{\\sqrt{2}} = \\frac{\\pi\\sqrt{2}}{30}\\text{ cm/s}$$",
    "tags": [
      "MP PMT 1987",
      "MP PMT 2003",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-37",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A particle moves in a circle of radius 25 cm at two revolutions per second. The acceleration of the particle in m/s\u00b2 is:",
    "options": [
      "\u03c0\u00b2",
      "8\u03c0\u00b2",
      "4\u03c0\u00b2",
      "2\u03c0\u00b2"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$a = \\omega^2 r = (2\\pi n)^2 r = 4\\pi^2 n^2 r$$\n\n\u26a1 **Step-by-Step Calculations**:\n$$n = 2\\text{ rev/s}, \\quad r = 0.25\\text{ m}$$\n$$a = 4\\pi^2 (2)^2 (0.25) = 4\\pi^2 (4)(0.25) = 4\\pi^2\\text{ m/s}^2$$",
    "tags": [
      "MNR 1991",
      "UPSEAT 2000",
      "DPMT 1999",
      "RPET 2003",
      "Pb. PET 2004",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-38",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "An electric fan has blades of length 30 cm as measured from the axis of rotation. If the fan is rotating at 1200 r.p.m., the acceleration of a point on the tip of the blade is about:",
    "options": [
      "1600 m/s\u00b2",
      "4740 m/s\u00b2",
      "2370 m/s\u00b2",
      "5055 m/s\u00b2"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$a = \\omega^2 r = \\left(\\frac{2\\pi \\times 1200}{60}\\right)^2 \\times 0.30 = (40\\pi)^2 \\times 0.30 = 1600\\pi^2 \\times 0.30 = 480\\pi^2 \\approx 480(9.87) \\approx 4740\\text{ m/s}^2$$",
    "tags": [
      "CBSE PMT 1990",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-39",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "The force required to keep a body in uniform circular motion is:",
    "options": [
      "Centripetal force",
      "Centrifugal force",
      "Resistance",
      "None of the above"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nA real inward radial force called centripetal force is fundamentally required to continuously deflect the body's velocity into a circular orbit.",
    "tags": [
      "EAMCET 1982",
      "AFMC 2003",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-40",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "Cream gets separated out of milk when it is churned, it is due to:",
    "options": [
      "Gravitational force",
      "Centripetal force",
      "Centrifugal force",
      "Frictional force"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nDue to centrifugal force in the rotating reference frame, the lighter cream particles experience lower centripetal requirements and migrate towards the center/axis of rotation, while denser skim milk is thrown outwards.",
    "tags": [
      "EAMCET 1981",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-41",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A particle of mass m is executing uniform circular motion on a path of radius r. If p is the magnitude of its linear momentum, the radial force acting on the particle is:",
    "options": [
      "pmr",
      "p/(rm)",
      "mp\u00b2/r",
      "p\u00b2/(rm)"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$F = \\frac{mv^2}{r} = \\frac{m(p/m)^2}{r} = \\frac{p^2}{mr}$$",
    "tags": [
      "MP PET 1994",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-42",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle moves in a circular orbit under the action of a central attractive force inversely proportional to the distance 'r'. The speed of the particle is:",
    "options": [
      "Proportional to r\u00b2",
      "Independent of r",
      "Proportional to r",
      "Proportional to 1/r"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$F = \\frac{K}{r} = \\frac{mv^2}{r} \\implies mv^2 = K \\implies v = \\sqrt{\\frac{K}{m}} = \\text{constant} \\propto r^0$$\nHence, speed is independent of the orbital radius $r$.",
    "tags": [
      "CBSE PMT 1995",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-43",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "Two masses M and m are attached to a vertical axis by weightless threads of combined length l. They are set in rotational motion in a horizontal plane about this axis with constant angular velocity \u03c9. If the tensions in the threads are the same during motion, the distance of M from the axis is:",
    "options": [
      "Ml / (M + m)",
      "ml / (M + m)",
      "(M + m)l / M",
      "(M + m)l / m"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nLet distance of mass $M$ from axis be $x$, then distance of mass $m$ is $l - x$.\nSince tensions are equal:\n$$T = M\\omega^2 x = m\\omega^2 (l - x) \\implies Mx = ml - mx \\implies (M + m)x = ml \\implies x = \\frac{ml}{M + m}$$",
    "tags": [
      "MP PET 1995",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-44",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A boy on a cycle pedals around a circle of 20 metres radius at a speed of 20 metres/sec. The combined mass is 90 kg. The angle that the cycle makes with the vertical is (g = 9.8 m/s\u00b2):",
    "options": [
      "60.25\u00b0",
      "63.90\u00b0",
      "26.12\u00b0",
      "30.00\u00b0"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\tan\\theta = \\frac{v^2}{rg} = \\frac{20^2}{20 \\times 9.8} = \\frac{20}{9.8} \\approx 2.0408$$\n$$\\theta = \\tan^{-1}(2.0408) \\approx 63.90^\\circ$$",
    "tags": [
      "MP PMT 1995",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-45",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "The average acceleration vector for a particle completing one full revolution in uniform circular motion is:",
    "options": [
      "A constant vector of magnitude v\u00b2/r",
      "A vector of magnitude v\u00b2/r directed normal to the plane",
      "Equal to instantaneous acceleration at the start",
      "A null vector"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nOver one full revolution ($t = T$), the initial and final velocity vectors are identical ($\\vec{v}_f = \\vec{v}_i$).\n$$\\vec{a}_{\\text{avg}} = \\frac{\\vec{v}_f - \\vec{v}_i}{T} = \\frac{\\vec{0}}{T} = \\vec{0} \\text{ (A null vector)}$$",
    "tags": [
      "Kurukshetra CEE 1996",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-46",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "Radius of the curved road on national highway is R. Width of the road is b. The outer edge of the road is raised by h with respect to inner edge so that a car with velocity v can pass safe over it. The value of h is:",
    "options": [
      "v\u00b2b / (Rg)",
      "v / (Rgb)",
      "v\u00b2R / g",
      "v\u00b2b / R"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFor small banking angle $\\theta$:\n$$\\tan\\theta \\approx \\sin\\theta = \\frac{h}{b} = \\frac{v^2}{Rg} \\implies h = \\frac{v^2 b}{Rg}$$",
    "tags": [
      "MP PMT 1996",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-47",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "When a particle moves in a uniform circular motion, it has:",
    "options": [
      "Radial velocity and radial acceleration",
      "Tangential velocity and radial acceleration",
      "Tangential velocity and tangential acceleration",
      "Radial velocity and tangential acceleration"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nIn uniform circular motion:\n- Velocity vector is strictly along the tangent (Tangential velocity).\n- Tangential acceleration $a_t = \\frac{dv}{dt} = 0$.\n- Acceleration is entirely centripetal, directed along the radius towards the center (Radial acceleration).",
    "tags": [
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-48",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A motorcycle is going on an overbridge of radius R. The driver maintains a constant speed. As the motorcycle is ascending on the overbridge, the normal force on it:",
    "options": [
      "Increases",
      "Decreases",
      "Remains the same",
      "Fluctuates"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFor a convex overbridge at angle $\\theta$ from the vertical:\n$$mg\\cos\\theta - N = \\frac{mv^2}{R} \\implies N = mg\\cos\\theta - \\frac{mv^2}{R}$$\nAs the motorcycle ascends towards the peak, $\\theta$ decreases $\\implies \\cos\\theta$ increases $\\implies N$ increases.",
    "tags": [
      "MP PET 1997",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-49",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A mass of 2 kg is whirled in a horizontal circle by means of a string at an initial speed of 5 revolutions per minute. Keeping the radius constant the tension in the string is doubled. The new speed is nearly:",
    "options": [
      "14 rpm",
      "10 rpm",
      "2.25 rpm",
      "7 rpm"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nTension $T = m\\omega^2 r \\propto n^2$.\n$$\\frac{n_2}{n_1} = \\sqrt{\\frac{T_2}{T_1}} = \\sqrt{2} \\implies n_2 = 5\\sqrt{2} \\approx 5(1.414) \\approx 7.07\\text{ rpm} \\approx 7\\text{ rpm}$$",
    "tags": [
      "MP PMT/PET 1998",
      "JIPMER 2000",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-50",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "The magnitude of the centripetal force acting on a body of mass m executing uniform motion in a circle of radius r with speed v is:",
    "options": [
      "mvr",
      "mv\u00b2/r",
      "v\u00b2r/m",
      "v/rm"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nBy definition, centripetal force magnitude is $F_c = m a_c = \\frac{mv^2}{r}$.",
    "tags": [
      "AFMC 1998",
      "MP PET 1999",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-51",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A string breaks if its tension exceeds 10 N. A stone of mass 250 gm tied to this string of length 10 cm is rotated in a horizontal circle. The maximum angular velocity of rotation can be:",
    "options": [
      "20 rad/s",
      "40 rad/s",
      "100 rad/s",
      "200 rad/s"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$T = m\\omega^2 r \\implies 10 = 0.25 \\times \\omega^2 \\times 0.10 = 0.025\\omega^2$$\n$$\\omega^2 = \\frac{10}{0.025} = 400 \\implies \\omega = 20\\text{ rad/s}$$",
    "tags": [
      "MP PMT 1999",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-52",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A 500 kg car takes a round turn of radius 50 m with a velocity of 36 km/hr. The centripetal force is:",
    "options": [
      "250 N",
      "750 N",
      "1000 N",
      "1200 N"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v = 36\\text{ km/h} = 10\\text{ m/s}$$\n$$F = \\frac{mv^2}{r} = \\frac{500 \\times 10^2}{50} = 500 \\times 2 = 1000\\text{ N}$$",
    "tags": [
      "KCET 2001",
      "CBSE PMT 1999",
      "JIPMER 2001",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-53",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A ball of mass 0.25 kg attached to the end of a string of length 1.96 m is moving in a horizontal circle. The string will break if tension is more than 25 N. The maximum speed with which the ball can be moved is:",
    "options": [
      "14 m/s",
      "3 m/s",
      "3.92 m/s",
      "5 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$T = \\frac{mv^2}{r} \\implies 25 = \\frac{0.25 \\times v^2}{1.96} \\implies v^2 = \\frac{25 \\times 1.96}{0.25} = 196 \\implies v = 14\\text{ m/s}$$",
    "tags": [
      "CBSE PMT 1998",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-54",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A body of mass 5 kg is moving in a circle of radius 1 m with an angular velocity of 2 radian/sec. The centripetal force is:",
    "options": [
      "10 N",
      "20 N",
      "30 N",
      "40 N"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$F = m\\omega^2 r = 5 \\times 2^2 \\times 1 = 5 \\times 4 = 20\\text{ N}$$",
    "tags": [
      "AIIMS 1998",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-55",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "If a particle of mass m is moving in a horizontal circle of radius r with a centripetal force (-k/r\u00b2), the total energy is:",
    "options": [
      "-k / (2r)",
      "-k / r",
      "-2k / r",
      "-4k / r"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- Centripetal condition: $\\frac{mv^2}{r} = \\frac{k}{r^2} \\implies mv^2 = \\frac{k}{r} \\implies K = \\frac{1}{2}mv^2 = \\frac{k}{2r}$.\n- Potential energy: $U = -\\int F\\,dr = -\\int -\\frac{k}{r^2}\\,dr = -\\frac{k}{r}$.\n- Total mechanical energy: $E = K + U = \\frac{k}{2r} - \\frac{k}{r} = -\\frac{k}{2r}$.",
    "tags": [
      "EAMCET 1995",
      "AMU (Engg.) 2001",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-56",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A stone of mass 16 kg is attached to a string 144 m long and is whirled in a horizontal circle. The maximum tension the string can withstand is 16 N. The maximum velocity of revolution is:",
    "options": [
      "20 m/s",
      "16 m/s",
      "14 m/s",
      "12 m/s"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$T = \\frac{mv^2}{r} \\implies 16 = \\frac{16 v^2}{144} \\implies v^2 = 144 \\implies v = 12\\text{ m/s}$$",
    "tags": [
      "SCRA 1994",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-57",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Hard",
    "questionText": "A circular road of radius 1000 m has banking angle 45\u00b0. The maximum safe speed of a car having mass 2000 kg will be, if the coefficient of friction between tyre and road is 0.5 (g = 9.8 m/s\u00b2):",
    "options": [
      "172 m/s",
      "124 m/s",
      "99 m/s",
      "86 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v_{\\text{max}} = \\sqrt{rg\\left(\\frac{\\mu + \\tan\\theta}{1 - \\mu \\tan\\theta}\\right)}$$\n\n\u26a1 **Step-by-Step Calculations**:\n$$v_{\\text{max}} = \\sqrt{1000 \\times 9.8 \\times \\left(\\frac{0.5 + 1}{1 - 0.5(1)}\\right)} = \\sqrt{9800 \\times \\frac{1.5}{0.5}} = \\sqrt{9800 \\times 3} = \\sqrt{29400} \\approx 171.46\\text{ m/s} \\approx 172\\text{ m/s}$$",
    "tags": [
      "RPET 1997",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-58",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "The second's hand of a watch has length 6 cm. Speed of end point and magnitude of difference of velocities at two perpendicular positions will be:",
    "options": [
      "6.28 and 0 mm/s",
      "8.88 and 4.44 mm/s",
      "8.88 and 6.28 mm/s",
      "6.28 and 8.88 mm/s"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- Speed: $v = r\\omega = 60\\text{ mm} \\times \\frac{2\\pi}{60\\text{ s}} = 2\\pi \\approx 6.28\\text{ mm/s}$.\n- Difference of velocities at $90^\\circ$: $|\\Delta \\vec{v}| = \\sqrt{v^2 + v^2} = \\sqrt{2}v = 1.414 \\times 6.28 \\approx 8.88\\text{ mm/s}$.",
    "tags": [
      "RPET 1997",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-59",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A sphere of mass m is tied to end of a string of length l and rotated along a horizontal circular path with speed v. The work done in full horizontal circle is:",
    "options": [
      "0",
      "(mv\u00b2/l) \u00b7 2\u03c0l",
      "mg \u00b7 2\u03c0l",
      "(mv\u00b2/l) \u00b7 l"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nIn uniform circular motion, the centripetal force is always perpendicular to velocity vector $\\vec{F}_c \\perp \\vec{v}$, so instantaneous power $P = \\vec{F}_c \\cdot \\vec{v} = 0$, and total work done is zero.",
    "tags": [
      "CPMT 1993",
      "JIPMER 2000",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-60",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A body is whirled in a horizontal circle of radius 20 cm. It has angular velocity of 10 rad/s. What is its linear velocity at any point on circular path?",
    "options": [
      "10 m/s",
      "2 m/s",
      "20 m/s",
      "\u221a2 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v = r\\omega = 0.20\\text{ m} \\times 10\\text{ rad/s} = 2\\text{ m/s}$$",
    "tags": [
      "CBSE PMT 1996",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-61",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "Find the maximum velocity for avoiding skidding for a car moved on a circular track of radius 100 m. The coefficient of friction between road and tyre is 0.2 (g = 9.8 m/s\u00b2):",
    "options": [
      "0.14 m/s",
      "140 m/s",
      "1.4 km/s",
      "14 m/s"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v_{\\text{max}} = \\sqrt{\\mu r g} = \\sqrt{0.2 \\times 100 \\times 9.8} = \\sqrt{196} = 14\\text{ m/s}$$",
    "tags": [
      "CPMT 1996",
      "Pb. PMT 2001",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-62",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A car of mass M when passes through a convex bridge of radius r with speed v exerts a force on it at the highest point equal to:",
    "options": [
      "Mg + Mv\u00b2/r",
      "Mv\u00b2/r",
      "Mg",
      "Mg - Mv\u00b2/r"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAt the crest of a convex bridge:\n$$Mg - N = \\frac{Mv^2}{r} \\implies N = Mg - \\frac{Mv^2}{r}$$",
    "tags": [
      "AFMC 1997",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-63",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "The angular speed of seconds needle in a mechanical watch is:",
    "options": [
      "\u03c0/30 rad/s",
      "2\u03c0 rad/s",
      "\u03c0 rad/s",
      "60/\u03c0 rad/s"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{60\\text{ s}} = \\frac{\\pi}{30}\\text{ rad/s}$$",
    "tags": [
      "RPMT 1999",
      "CPMT 1997",
      "MH CET 2000",
      "BHU 2000",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-64",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "The angular velocity of a particle rotating in a circular orbit 100 times per minute is:",
    "options": [
      "1.66 rad/s",
      "10.47 rad/s",
      "10.47 deg/s",
      "60 deg/s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\omega = 2\\pi n = 2\\pi \\times \\frac{100}{60} = \\frac{10\\pi}{3} \\approx \\frac{10(3.1416)}{3} \\approx 10.47\\text{ rad/s}$$",
    "tags": [
      "SCRA 1998",
      "DPMT 2000",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-65",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A body of mass 100 g is rotating in a circular path of radius r with constant velocity. The work done in one complete revolution is:",
    "options": [
      "100 r J",
      "(r/100) J",
      "(100/r) J",
      "Zero"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nSince centripetal force is perpendicular to displacement ($\\vec{F} \\perp \\vec{v}$), work done in circular motion is identically Zero.",
    "tags": [
      "AFMC 1998",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-66",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A particle comes round a circle of radius 1 m once. The time taken by it is 10 sec. The average velocity of motion is:",
    "options": [
      "0.2\u03c0 m/s",
      "2\u03c0 m/s",
      "2 m/s",
      "Zero"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAfter one complete revolution, net displacement is $\\vec{s} = 0$.\n$$\\vec{v}_{\\text{avg}} = \\frac{\\text{Net Displacement}}{\\text{Total Time}} = \\frac{0}{10} = 0$$",
    "tags": [
      "JIPMER 1999",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-67",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "An unbanked curve has a radius of 60 m. The maximum speed at which a car can make a turn if the coefficient of static friction is 0.75 is (g = 9.8 m/s\u00b2):",
    "options": [
      "2.1 m/s",
      "14 m/s",
      "21 m/s",
      "7 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v_{\\text{max}} = \\sqrt{\\mu r g} = \\sqrt{0.75 \\times 60 \\times 9.8} = \\sqrt{45 \\times 9.8} = \\sqrt{441} = 21\\text{ m/s}$$",
    "tags": [
      "JIPMER 1999",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-68",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A wheel completes 2000 revolutions to cover 9.5 km distance. Then the diameter of the wheel is:",
    "options": [
      "1.5 m",
      "1.5 cm",
      "7.5 cm",
      "7.5 m"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\text{Distance} = n(\\pi D) \\implies 9500 = 2000 \\pi D \\implies D = \\frac{9500}{2000\\pi} = \\frac{4.75}{3.1416} \\approx 1.51\\text{ m} \\approx 1.5\\text{ m}$$",
    "tags": [
      "RPMT 1999",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-69",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A cycle wheel of radius 0.4 m completes one revolution in one second. Then the acceleration of a point on the cycle wheel will be:",
    "options": [
      "0.8 m/s\u00b2",
      "0.4 m/s\u00b2",
      "1.6\u03c0\u00b2 m/s\u00b2",
      "0.4\u03c0\u00b2 m/s\u00b2"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$a = \\omega^2 r = (2\\pi n)^2 r = 4\\pi^2 (1)^2 (0.4) = 1.6\\pi^2\\text{ m/s}^2$$",
    "tags": [
      "MH CET 1999",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-70",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "The centripetal acceleration is given by:",
    "options": [
      "v\u00b2/r",
      "vr",
      "vr\u00b2",
      "v/r"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nCentripetal acceleration magnitude is $a_c = \\frac{v^2}{r} = \\omega^2 r = v\\omega$.",
    "tags": [
      "RPET 1999",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-71",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A cylindrical vessel partially filled with water is rotated about its vertical central axis. Its surface will:",
    "options": [
      "Rise equally",
      "Rise from the sides",
      "Rise from the middle",
      "Lowered equally"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nIn a rotating frame, the centrifugal force pushes liquid particles radially outward, creating a parabolic meniscus (paraboloid of revolution) that is depressed in the center and elevated at the outer perimeter.",
    "tags": [
      "RPET 2000",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-72",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "If a particle covers half the circle of radius R with constant speed v, then:",
    "options": [
      "Momentum change is mvr",
      "Change in K.E. is 1/2 mv\u00b2",
      "Change in K.E. is mv\u00b2",
      "Change in K.E. is zero"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nSince speed $v$ remains constant, kinetic energy $K = \\frac{1}{2}mv^2$ remains unchanged, so $\\Delta K = 0$. (Momentum vector changes by $2mv$).",
    "tags": [
      "RPMT 2000",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-73",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "An aeroplane is flying with a uniform speed of 100 m/s along a circular path of radius 100 m. The angular speed of the aeroplane will be:",
    "options": [
      "1 rad/sec",
      "2 rad/sec",
      "3 rad/sec",
      "4 rad/sec"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\omega = \\frac{v}{r} = \\frac{100}{100} = 1\\text{ rad/s}$$",
    "tags": [
      "KCET 2000",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-74",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A body moves with constant angular velocity on a circle. Magnitude of angular acceleration is:",
    "options": [
      "r\u03c9\u00b2",
      "Constant",
      "Zero",
      "None of the above"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\alpha = \\frac{d\\omega}{dt} = 0$$ since $\\omega = \\text{constant}$.",
    "tags": [
      "RPMT 2000",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-75",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "What is the value of linear velocity, if $\\vec{\\omega} = 3\\hat{i} - 4\\hat{j} + \\hat{k}$ and $\\vec{r} = 5\\hat{i} - 6\\hat{j} + 6\\hat{k}$?",
    "options": [
      "6\u00ee + 2\u0135 - 3k\u0302",
      "-18\u00ee - 13\u0135 + 2k\u0302",
      "4\u00ee - 13\u0135 + 6k\u0302",
      "6\u00ee - 2\u0135 + 8k\u0302"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\vec{v} = \\vec{\\omega} \\times \\vec{r} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 3 & -4 & 1 \\\\ 5 & -6 & 6 \\end{vmatrix}$$\n$$\\vec{v} = \\hat{i}(-24 - (-6)) - \\hat{j}(18 - 5) + \\hat{k}(-18 - (-20)) = -18\\hat{i} - 13\\hat{j} + 2\\hat{k}$$",
    "tags": [
      "Pb. PMT 2000",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-76",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A stone is tied to one end of a string 50 cm long is whirled in a horizontal circle with constant speed. If the stone makes 10 revolutions in 20 s, the acceleration of the stone is:",
    "options": [
      "493 cm/s\u00b2",
      "720 cm/s\u00b2",
      "860 cm/s\u00b2",
      "990 cm/s\u00b2"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$n = \\frac{10}{20} = 0.5\\text{ rev/s}, \\quad r = 50\\text{ cm}$$\n$$a = 4\\pi^2 n^2 r = 4\\pi^2 (0.5)^2 (50) = 50\\pi^2 \\approx 50(9.8696) \\approx 493.48\\text{ cm/s}^2 \\approx 493\\text{ cm/s}^2$$",
    "tags": [
      "Pb. PMT 2000",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-77",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A 100 kg car is moving with a maximum velocity of 9 m/s across a circular track of radius 30 m. The maximum force of friction between road and car is:",
    "options": [
      "1000 N",
      "706 N",
      "270 N",
      "200 N"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$f = \\frac{mv^2}{r} = \\frac{100 \\times 9^2}{30} = \\frac{100 \\times 81}{30} = 270\\text{ N}$$",
    "tags": [
      "Pb. PMT 2000",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-78",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "The maximum speed of a car on a road-turn of radius 30 m, if coefficient of friction between tyres and road is 0.4, will be (g = 9.8 m/s\u00b2):",
    "options": [
      "10.84 m/s",
      "9.84 m/s",
      "8.84 m/s",
      "6.84 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v_{\\text{max}} = \\sqrt{\\mu r g} = \\sqrt{0.4 \\times 30 \\times 9.8} = \\sqrt{117.6} \\approx 10.84\\text{ m/s}$$",
    "tags": [
      "CBSE PMT 2000",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-79",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "The angular velocity of a wheel is 70 rad/sec. If radius of wheel is 0.5 m, linear velocity of the wheel is:",
    "options": [
      "70 m/s",
      "35 m/s",
      "30 m/s",
      "20 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v = r\\omega = 0.5 \\times 70 = 35\\text{ m/s}$$",
    "tags": [
      "MH CET 2000",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-80",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A cyclist goes round a circular path of circumference 34.3 m in \u221a22 sec. The angle made by him with the vertical will be (g = 9.8 m/s\u00b2):",
    "options": [
      "45\u00b0",
      "40\u00b0",
      "42\u00b0",
      "48\u00b0"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- $2\\pi r = 34.3 \\implies r = \\frac{34.3}{2\\pi}$.\n- $v = \\frac{34.3}{\\sqrt{22}}$.\n$$\\tan\\theta = \\frac{v^2}{rg} = \\frac{(34.3)^2 / 22}{\\frac{34.3}{2\\pi} \\times 9.8} = \\frac{34.3 \\times 2(22/7)}{22 \\times 9.8} = \\frac{34.3 \\times 2}{7 \\times 9.8} = \\frac{68.6}{68.6} = 1 \\implies \\theta = 45^\\circ$$",
    "tags": [
      "MH CET 2000",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-81",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A particle of mass M is moving in a horizontal circle of radius R with uniform speed V. When it moves from one point to a diametrically opposite point, its:",
    "options": [
      "Kinetic energy changes by MV\u00b2/4",
      "Momentum does not change",
      "Momentum changes by 2MV",
      "Kinetic energy changes by MV\u00b2"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAt diametrically opposite points, velocity reverses direction: $\\vec{v}_1 = V\\hat{i}$, $\\vec{v}_2 = -V\\hat{i}$.\n$$|\\Delta \\vec{p}| = |M(-V\\hat{i}) - M(V\\hat{i})| = 2MV$$",
    "tags": [
      "CBSE PMT 1992",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-82",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A ball of mass 0.1 kg is whirled in a horizontal circle of radius 1 m at 10 RPM. Keeping radius constant, tension is reduced to one quarter. The new speed is:",
    "options": [
      "5 rpm",
      "10 rpm",
      "20 rpm",
      "14 rpm"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$T \\propto n^2 \\implies \\frac{n_2}{n_1} = \\sqrt{\\frac{T_2}{T_1}} = \\sqrt{\\frac{1}{4}} = \\frac{1}{2} \\implies n_2 = \\frac{10}{2} = 5\\text{ rpm}$$",
    "tags": [
      "MP PMT 2001",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-83",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A cyclist riding at 14\u221a3 m/s takes a turn around circular road of radius 20\u221a3 m without skidding (g = 9.8 m/s\u00b2). His inclination to vertical is:",
    "options": [
      "30\u00b0",
      "90\u00b0",
      "45\u00b0",
      "60\u00b0"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\tan\\theta = \\frac{v^2}{rg} = \\frac{(14\\sqrt{3})^2}{20\\sqrt{3} \\times 9.8} = \\frac{196 \\times 3}{196 \\times \\sqrt{3}} = \\frac{3}{\\sqrt{3}} = \\sqrt{3} \\implies \\theta = 60^\\circ$$",
    "tags": [
      "Kerala Engg. 2001",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-84",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "If a cycle wheel of radius 4 m completes one revolution in two seconds, then acceleration of a point on the cycle wheel will be:",
    "options": [
      "\u03c0\u00b2 m/s\u00b2",
      "2\u03c0\u00b2 m/s\u00b2",
      "4\u03c0\u00b2 m/s\u00b2",
      "8\u03c0 m/s\u00b2"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$a = \\omega^2 r = \\left(\\frac{2\\pi}{T}\\right)^2 r = \\left(\\frac{2\\pi}{2}\\right)^2 (4) = 4\\pi^2\\text{ m/s}^2$$",
    "tags": [
      "Pb. PMT 2001",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-85",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Hard",
    "questionText": "A bob of mass 10 kg is attached to wire 0.3 m long. Its breaking stress is 4.8 \u00d7 10\u2077 N/m\u00b2. Area of cross section is 10\u207b\u2076 m\u00b2. Maximum angular velocity is:",
    "options": [
      "8 rad/sec",
      "4 rad/sec",
      "2 rad/sec",
      "1 rad/sec"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\text{Breaking Force} = \\text{Stress} \\times A = (4.8 \\times 10^7)(10^{-6}) = 48\\text{ N}$$\n$$m\\omega^2 r = 48 \\implies 10 \\times \\omega^2 \\times 0.3 = 48 \\implies 3\\omega^2 = 48 \\implies \\omega^2 = 16 \\implies \\omega = 4\\text{ rad/s}$$",
    "tags": [
      "Pb. PMT 2001",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-86",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "In uniform circular motion, the velocity vector and acceleration vector are:",
    "options": [
      "Perpendicular to each other",
      "Same direction",
      "Opposite direction",
      "Not related to each other"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nVelocity is strictly tangential while centripetal acceleration is strictly radial, so $\\vec{v} \\cdot \\vec{a}_c = 0$ (perpendicular).",
    "tags": [
      "DCE 2000",
      "DCE 2001",
      "DCE 2003",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-87",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A point mass m is suspended from a light thread of length l and whirled in a horizontal circle at constant speed. From the point of view stationary with respect to the mass, the forces on the mass are:",
    "options": [
      "Tension T and weight W only",
      "Tension T and centripetal force only",
      "Tension T, weight W and centrifugal force F acting radially outward",
      "Weight W and centrifugal force only"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nIn the rotating reference frame of the mass, the body is in static equilibrium under three forces: Tension $T$ along the string, downward gravity $W = mg$, and radially outward centrifugal pseudo-force $F = m\\omega^2 r$.",
    "tags": [
      "AMU (Med.) 2001",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-88",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "If a cyclist moving at 4.9 m/s on a level road can take a sharp turn of radius 4 m, the coefficient of friction between tyres and road is (g = 9.8 m/s\u00b2):",
    "options": [
      "0.41",
      "0.51",
      "0.61",
      "0.71"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\mu = \\frac{v^2}{rg} = \\frac{4.9^2}{4 \\times 9.8} = \\frac{4.9 \\times 4.9}{39.2} = \\frac{24.01}{39.2} = 0.6125 \\approx 0.61$$",
    "tags": [
      "AIIMS 1999",
      "AFMC 2001",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-89",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A car moves on a circular road describing equal angles about the centre in equal intervals of time. Which of the following statements about velocity is true?",
    "options": [
      "Magnitude of velocity is not constant",
      "Both magnitude and direction of velocity change",
      "Velocity is directed towards the centre",
      "Magnitude of velocity is constant but direction changes"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nConstant $\\frac{d\\theta}{dt}$ means uniform circular motion: speed $|\\vec{v}|$ is constant, but direction tangent to circle continuously rotates.",
    "tags": [
      "BHU 2001",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-90",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A scooter is going round a circular road of radius 100 m at a speed of 10 m/s. The angular speed of the scooter will be:",
    "options": [
      "0.01 rad/s",
      "0.1 rad/s",
      "1 rad/s",
      "10 rad/s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\omega = \\frac{v}{r} = \\frac{10}{100} = 0.1\\text{ rad/s}$$",
    "tags": [
      "Pb. PMT 2002",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-91",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A particle of mass M moves with constant speed along a circular path of radius r under the action of a force F. Its speed is:",
    "options": [
      "\u221a(rF / M)",
      "\u221a(F / r)",
      "\u221a(FM r)",
      "\u221a(F / Mr)"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$F = \\frac{Mv^2}{r} \\implies v^2 = \\frac{rF}{M} \\implies v = \\sqrt{\\frac{rF}{M}}$$",
    "tags": [
      "MP PMT 2002",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-92",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "In an atom, the necessary centripetal force for electron revolution around nucleus is obtained from:",
    "options": [
      "Nuclear force",
      "Gravitational force",
      "Magnetic force",
      "Electrostatic force"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nCoulomb's electrostatic force of attraction between the positively charged nucleus and negatively charged electron provides the centripetal force $\\frac{kZe^2}{r^2} = \\frac{mv^2}{r}$.",
    "tags": [
      "MP PET 2002",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-93",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A particle moves with constant speed v along a circular path of radius r and completes the circle in time T. The acceleration is:",
    "options": [
      "2\u03c0v / T",
      "2\u03c0r / T",
      "2\u03c0r\u00b2 / T",
      "2\u03c0v\u00b2 / T"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$a = \\omega v = \\left(\\frac{2\\pi}{T}\\right)v = \\frac{2\\pi v}{T}$$",
    "tags": [
      "Orissa JEE 2002",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-94",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "The maximum velocity (in m/s) with which a car driver must traverse a flat curve of radius 150 m and coefficient of friction 0.6 to avoid skidding is (g = 10 m/s\u00b2):",
    "options": [
      "60",
      "30",
      "15",
      "25"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v_{\\text{max}} = \\sqrt{\\mu r g} = \\sqrt{0.6 \\times 150 \\times 10} = \\sqrt{900} = 30\\text{ m/s}$$",
    "tags": [
      "AIEEE 2002",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-95",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A car is moving with high velocity when it takes a turn. A force acts on it outwardly because of:",
    "options": [
      "Centripetal force",
      "Centrifugal force",
      "Gravitational force",
      "All the above"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nIn the accelerating co-rotating frame of the vehicle, the outward inertial force is the centrifugal force.",
    "tags": [
      "AFMC 2002",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-96",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A motorcycle driver doubles his velocity when he takes a turn. The force exerted outwardly will be:",
    "options": [
      "Double",
      "Half",
      "4 times",
      "1/4 times"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$F_{\\text{centrifugal}} = \\frac{mv^2}{r} \\propto v^2$$\nDoubling velocity increases force by $2^2 = 4\\text{ times}$.",
    "tags": [
      "AFMC 2002",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-97",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "The coefficient of friction between tyres and road is 0.25. Maximum speed on a curve of radius 40 m without skidding is (g = 10 m/s\u00b2):",
    "options": [
      "40 m/s",
      "20 m/s",
      "15 m/s",
      "10 m/s"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v_{\\text{max}} = \\sqrt{\\mu r g} = \\sqrt{0.25 \\times 40 \\times 10} = \\sqrt{100} = 10\\text{ m/s}$$",
    "tags": [
      "Kerala Med. 2002",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-98",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "An athlete completes one round of a circular track of radius 10 m in 40 sec. The distance covered by him in 2 min 20 sec is:",
    "options": [
      "70 m",
      "140 m",
      "110 m",
      "220 m"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$t = 140\\text{ s} \\implies \\text{Number of rounds } n = \\frac{140}{40} = 3.5$$\n$$\\text{Distance} = 3.5 \\times (2\\pi r) = 3.5 \\times 2 \\times \\frac{22}{7} \\times 10 = 220\\text{ m}$$",
    "tags": [
      "Kerala Med. 2002",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-99",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A proton of mass 1.6 \u00d7 10\u207b\u00b2\u2077 kg goes round in a circular orbit of radius 0.10 m under centripetal force of 4 \u00d7 10\u207b\u00b9\u00b3 N. Frequency of revolution is about:",
    "options": [
      "0.08 \u00d7 10\u2078 Hz",
      "4 \u00d7 10\u2078 Hz",
      "8 \u00d7 10\u2078 Hz",
      "12 \u00d7 10\u2078 Hz"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$F = m (4\\pi^2 n^2) r \\implies n^2 = \\frac{F}{4\\pi^2 m r}$$\n$$n^2 = \\frac{4 \\times 10^{-13}}{4\\pi^2 (1.6 \\times 10^{-27})(0.10)} = \\frac{10^{15}}{1.6 \\pi^2} \\approx \\frac{10^{15}}{15.79} \\approx 6.33 \\times 10^{13}$$\n$$n \\approx 7.96 \\times 10^6\\text{ Hz} = 0.08 \\times 10^8\\text{ Hz}$$",
    "tags": [
      "Kerala Med. 2002",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-100",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A particle is moving in a circle with uniform speed v. In moving from a point to another diametrically opposite point:",
    "options": [
      "The momentum changes by mv",
      "The momentum changes by 2mv",
      "The kinetic energy changes by 1/2 mv\u00b2",
      "The kinetic energy changes by mv\u00b2"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\Delta \\vec{p} = m\\vec{v}_2 - m\\vec{v}_1 = -mv\\hat{i} - mv\\hat{i} = -2mv\\hat{i} \\implies |\\Delta \\vec{p}| = 2mv$$",
    "tags": [
      "Orissa JEE 2003",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-101",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "In uniform circular motion:",
    "options": [
      "Both angular velocity and angular momentum vary",
      "Angular velocity varies but angular momentum remains constant",
      "Both angular velocity and angular momentum stay constant",
      "Angular momentum varies but angular velocity remains constant"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nIn uniform circular motion about a fixed axis, $\\vec{\\omega}$ has constant magnitude and fixed axial direction, and $\\vec{L} = I\\vec{\\omega}$ remains strictly constant.",
    "tags": [
      "MP PMT 1994",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-102",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "When a body moves in a circular path, no work is done by the centripetal force since:",
    "options": [
      "There is no displacement",
      "There is no net force",
      "Force and displacement are perpendicular to each other",
      "The force is always away from centre"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$W = \\vec{F} \\cdot \\vec{s} = F s \\cos 90^\\circ = 0$$",
    "tags": [
      "KCET 2004",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-103",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "Which of the following statements is FALSE for a particle moving in a circle with constant angular speed?",
    "options": [
      "The velocity vector is tangent to the circle",
      "The acceleration vector is tangent to the circle",
      "The acceleration vector points to the centre of the circle",
      "The velocity and acceleration vectors are perpendicular to each other"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFor constant angular speed ($a_t = 0$), the acceleration vector is entirely centripetal and directed radially inward towards the centre, NEVER tangent to the circle.",
    "tags": [
      "AIEEE 2004",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-104",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "If a_r and a_t represent radial and tangential accelerations, the motion of a particle will be uniformly circular if:",
    "options": [
      "a_r = 0 and a_t = 0",
      "a_r = 0 but a_t \u2260 0",
      "a_r \u2260 0 but a_t = 0",
      "a_r \u2260 0 and a_t \u2260 0"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- Radial acceleration $a_r = \\frac{v^2}{r} \\neq 0$ maintains the circular curvature.\n- Tangential acceleration $a_t = \\frac{dv}{dt} = 0$ ensures uniform (constant) speed.",
    "tags": [
      "CPMT 2004",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-105",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A person with hands in pockets is skating on ice at velocity 10 m/s and describes a circle of radius 50 m. His inclination with the vertical is (g = 10 m/s\u00b2):",
    "options": [
      "tan\u207b\u00b9(1/10)",
      "tan\u207b\u00b9(3/5)",
      "tan\u207b\u00b9(1)",
      "tan\u207b\u00b9(1/5)"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\tan\\theta = \\frac{v^2}{rg} = \\frac{10^2}{50 \\times 10} = \\frac{100}{500} = \\frac{1}{5} \\implies \\theta = \\tan^{-1}\\left(\\frac{1}{5}\\right)$$",
    "tags": [
      "Pb. PET 2000",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-106",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "If the radius of curvature of the path of two particles of same mass are in ratio 1 : 2, then to have constant centripetal force, their velocities should be in ratio:",
    "options": [
      "1 : 4",
      "4 : 1",
      "\u221a2 : 1",
      "1 : \u221a2"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$F = \\frac{mv^2}{r} = \\text{constant} \\implies v^2 \\propto r \\implies v \\propto \\sqrt{r}$$\n$$\\frac{v_1}{v_2} = \\sqrt{\\frac{r_1}{r_2}} = \\sqrt{\\frac{1}{2}} = 1 : \\sqrt{2}$$",
    "tags": [
      "Pb. PET 2000",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-107",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "An object is moving in a circle of radius 100 m with constant speed of 31.4 m/s. What is its average speed for one complete revolution?",
    "options": [
      "Zero",
      "31.4 m/s",
      "3.14 m/s",
      "\u221a2 \u00d7 31.4 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAverage speed is total distance divided by total time: $v_{\\text{avg}} = \\frac{2\\pi r}{T} = v = 31.4\\text{ m/s}$. (Average speed equals constant instantaneous speed).",
    "tags": [
      "DCE 2004",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-108",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A body of mass 1 kg tied to a string of radius 0.1 m revolves at 3 rev/sec. Neglecting gravity, linear velocity, acceleration and tension are:",
    "options": [
      "1.88 m/s, 35.5 m/s\u00b2, 35.5 N",
      "2.88 m/s, 45.5 m/s\u00b2, 45.5 N",
      "3.88 m/s, 55.5 m/s\u00b2, 55.5 N",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- Linear velocity: $v = 2\\pi n r = 2(3.1416)(3)(0.1) = 1.885\\text{ m/s}$.\n- Acceleration: $a = \\omega^2 r = (6\\pi)^2(0.1) = 36\\pi^2(0.1) \\approx 35.53\\text{ m/s}^2$.\n- Tension: $T = ma = 1 \\times 35.53 \\approx 35.5\\text{ N}$.",
    "tags": [
      "DPMT 2003",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-109",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "The acceleration of a train travelling with speed of 400 m/s as it goes round a curve of radius 160 m is:",
    "options": [
      "1 km/s\u00b2",
      "100 m/s\u00b2",
      "10 m/s\u00b2",
      "1 m/s\u00b2"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$a = \\frac{v^2}{r} = \\frac{400^2}{160} = \\frac{160000}{160} = 1000\\text{ m/s}^2 = 1\\text{ km/s}^2$$",
    "tags": [
      "Pb. PET 2003",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-110",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A car of mass 800 kg moves on circular track of radius 40 m. If coefficient of friction is 0.5, maximum velocity is (g = 9.8 m/s\u00b2):",
    "options": [
      "7 m/s",
      "14 m/s",
      "8 m/s",
      "12 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v_{\\text{max}} = \\sqrt{\\mu r g} = \\sqrt{0.5 \\times 40 \\times 9.8} = \\sqrt{196} = 14\\text{ m/s}$$",
    "tags": [
      "MH CET 2004",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-111",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A 500 kg crane takes a turn of radius 50 m with velocity of 36 km/hr. The centripetal force is:",
    "options": [
      "1200 N",
      "1000 N",
      "750 N",
      "250 N"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v = 36\\text{ km/h} = 10\\text{ m/s}$$\n$$F = \\frac{mv^2}{r} = \\frac{500 \\times 10^2}{50} = 1000\\text{ N}$$",
    "tags": [
      "Pb. PMT 2003",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-112",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "Two bodies of equal masses revolve in circular orbits of radii R\u2081 and R\u2082 with same period. Their centripetal forces are in ratio:",
    "options": [
      "(R\u2082 / R\u2081)\u00b2",
      "R\u2081 / R\u2082",
      "(R\u2081 / R\u2082)\u00b2",
      "\u221a(R\u2081 R\u2082)"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$F = m\\omega^2 R = m\\left(\\frac{2\\pi}{T}\\right)^2 R$$\nSince masses and periods are identical, $F \\propto R \\implies \\frac{F_1}{F_2} = \\frac{R_1}{R_2}$.",
    "tags": [
      "Kerala PMT 2004",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-113",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "In case of uniform circular motion, which of the following physical quantities does NOT remain constant?",
    "options": [
      "Speed",
      "Momentum",
      "Kinetic energy",
      "Mass"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nMomentum $\\vec{p} = m\\vec{v}$ is a vector whose direction rotates continuously, hence it does not remain constant.",
    "tags": [
      "Kerala PMT 2004",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-114",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "What happens to the centripetal acceleration of a revolving body if you double the orbital speed v and halve the angular velocity \u03c9?",
    "options": [
      "Centripetal acceleration remains unchanged",
      "Centripetal acceleration is halved",
      "Centripetal acceleration is doubled",
      "Centripetal acceleration is quadrupled"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$a_c = v\\omega$$\nIf $v' = 2v$ and $\\omega' = \\omega/2$:\n$$a_c' = (2v)\\left(\\frac{\\omega}{2}\\right) = v\\omega = a_c \\text{ (Unchanged)}$$",
    "tags": [
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-115",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A mass on a frictionless horizontal surface is attached to a string and rotates at angular velocity \u03c9\u2080 with tension T\u2080. If length of string and angular velocity are doubled, new tension is:",
    "options": [
      "T\u2080",
      "T\u2080 / 2",
      "4 T\u2080",
      "8 T\u2080"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$T_0 = m\\omega_0^2 R$$\n$$T' = m(2\\omega_0)^2(2R) = m(4\\omega_0^2)(2R) = 8 m\\omega_0^2 R = 8 T_0$$",
    "tags": [
      "AIIMS 1985",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-116",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "In 1.0 s, a particle goes from point A to point B, moving in a semicircle of radius 1.0 m. The magnitude of average velocity is:",
    "options": [
      "3.14 m/s",
      "2.0 m/s",
      "1.0 m/s",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\text{Displacement from } A \\text{ to } B = 2R = 2(1.0) = 2.0\\text{ m}$$\n$$|\\vec{v}_{\\text{avg}}| = \\frac{\\text{Displacement}}{\\Delta t} = \\frac{2.0\\text{ m}}{1.0\\text{ s}} = 2.0\\text{ m/s}$$",
    "tags": [
      "IIT-JEE 1999",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-117",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Hard",
    "questionText": "Three identical particles of mass m at A, B, C (OA = AB = BC = l) are joined by threads rotating in horizontal plane at angular velocity \u03c9. Ratio of tensions T\u2083 : T\u2082 : T\u2081 in sections BC, AB, OA is:",
    "options": [
      "3 : 5 : 7",
      "3 : 4 : 5",
      "7 : 11 : 6",
      "3 : 5 : 6"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- Outermost particle C (at $3l$): $T_3 = m\\omega^2 (3l) = 3m\\omega^2 l$.\n- Middle particle B (at $2l$): $T_2 - T_3 = m\\omega^2 (2l) \\implies T_2 = 3m\\omega^2 l + 2m\\omega^2 l = 5m\\omega^2 l$.\n- Innermost particle A (at $l$): $T_1 - T_2 = m\\omega^2 (l) \\implies T_1 = 5m\\omega^2 l + m\\omega^2 l = 6m\\omega^2 l$.\n$$T_3 : T_2 : T_1 = 3 : 5 : 6$$",
    "tags": [
      "UPSEAT 2003",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-118",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A particle is moving in a circle of radius R with constant speed v. If radius is doubled, its centripetal force to keep same speed should be:",
    "options": [
      "Doubled",
      "Halved",
      "Quadrupled",
      "Unchanged"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$F = \\frac{mv^2}{R} \\propto \\frac{1}{R}$$\nDoubling $R$ halves the required centripetal force.",
    "tags": [
      "BCECE 2005",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-119",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A stone tied to 1 m string makes 22 revolutions in 44 seconds in horizontal circle. Magnitude and direction of acceleration are:",
    "options": [
      "(\u03c0\u00b2/4) m/s\u00b2 towards centre",
      "\u03c0\u00b2 m/s\u00b2 away from centre",
      "\u03c0\u00b2 m/s\u00b2 towards centre",
      "\u03c0\u00b2 m/s\u00b2 along tangent"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$n = \\frac{22}{44} = 0.5\\text{ rev/s}, \\quad r = 1\\text{ m}$$\n$$a = 4\\pi^2 n^2 r = 4\\pi^2 (0.5)^2 (1) = \\pi^2\\text{ m/s}^2 \\text{ (directed radially towards centre)}$$",
    "tags": [
      "CBSE PMT 2005",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-120",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Hard",
    "questionText": "A particle describes a horizontal circle in a smooth conical funnel with speed 0.5 m/s. What is height of plane of circle from vertex of funnel (g = 10 m/s\u00b2)?",
    "options": [
      "0.25 cm",
      "2 cm",
      "4 cm",
      "2.5 cm"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nLet semi-vertical angle be $\\theta$. For horizontal circular equilibrium on funnel wall:\n$$N\\sin\\theta = mg, \\quad N\\cos\\theta = \\frac{mv^2}{r} \\implies \\tan\\theta = \\frac{rg}{v^2}$$\nFrom geometry, $\\tan\\theta = \\frac{r}{h} \\implies \\frac{r}{h} = \\frac{rg}{v^2} \\implies h = \\frac{v^2}{g}$.\n\n\u26a1 **Step-by-Step Calculations**:\n$$h = \\frac{0.5^2}{10} = \\frac{0.25}{10} = 0.025\\text{ m} = 2.5\\text{ cm}$$",
    "tags": [
      "J&K CET 2005",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-121",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "What is the angular velocity of earth about its polar axis?",
    "options": [
      "(2\u03c0 / 86400) rad/sec",
      "(2\u03c0 / 3600) rad/sec",
      "(2\u03c0 / 24) rad/sec",
      "(2\u03c0 / 6400) rad/sec"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nEarth completes one rotation ($2\\pi\\text{ radians}$) in $24\\text{ hours} = 24 \\times 3600 = 86400\\text{ seconds}$.\n$$\\omega = \\frac{2\\pi}{86400}\\text{ rad/s}$$",
    "tags": [
      "Orissa JEE 2005",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-ucm-122",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "If the length of the second's hand in a stop clock is 3 cm, the angular velocity and linear velocity of the tip are:",
    "options": [
      "0.2047 rad/s, 0.0314 m/s",
      "0.2547 rad/s, 0.314 m/s",
      "0.1472 rad/s, 0.06314 m/s",
      "0.1047 rad/s, 0.00314 m/s"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\omega = \\frac{2\\pi}{60} = \\frac{3.1416}{30} \\approx 0.1047\\text{ rad/s}$$\n$$v = r\\omega = 0.03\\text{ m} \\times 0.1047\\text{ rad/s} \\approx 0.00314\\text{ m/s}$$",
    "tags": [
      "Kerala PET 2005",
      "Uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-01",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "In a circus stuntman rides a motorbike in a circular track of radius R in the vertical plane. The minimum speed at highest point of track will be:",
    "options": [
      "2\u221agR",
      "2gR",
      "3gR",
      "\u221agR"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAt the highest point of vertical circular track, normal reaction $N \\ge 0$.\n$$mg = \\frac{mv^2}{R} \\implies v_{\\text{min}} = \\sqrt{gR}$$",
    "tags": [
      "CPMT 1979",
      "JIPMER 1997",
      "RPET 1999",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-02",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A block of mass m at the end of a string is whirled in a vertical circle of radius R. The critical speed at the top below which string would slacken is:",
    "options": [
      "Rg",
      "(Rg)\u00b2",
      "R/g",
      "\u221aRg"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFor the string not to slacken at the apex, tension $T \\ge 0 \\implies v_{\\text{critical}} = \\sqrt{gR}$.",
    "tags": [
      "DCE 1999",
      "DCE 2001",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-03",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A sphere is suspended by a thread of length l. What minimum horizontal velocity has to be imparted to reach the height of the suspension?",
    "options": [
      "gl",
      "2gl",
      "\u221agl",
      "\u221a2gl"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nBy conservation of mechanical energy:\n$$\\frac{1}{2}mv^2 = mgl \\implies v = \\sqrt{2gl}$$",
    "tags": [
      "ISM Dhanbad 1994",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-04",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A bottle of soda water is grasped by the neck and swung briskly in a vertical circle. Near which portion of the bottle do the bubbles collect?",
    "options": [
      "Near the bottom",
      "In the middle",
      "Near the neck",
      "Uniformly distributed"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nLess dense carbon dioxide gas bubbles experience less outward centrifugal pseudo-force than the heavier liquid and collect near the center of rotation (the neck).",
    "tags": [
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-05",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A bucket tied to 1.6 m string is whirled in a vertical circle. What is minimum speed at highest position so water does not spill (g = 10 m/s\u00b2)?",
    "options": [
      "4 m/s",
      "6.25 m/s",
      "16 m/s",
      "None of the above"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v_{\\text{min}} = \\sqrt{gR} = \\sqrt{10 \\times 1.6} = \\sqrt{16} = 4\\text{ m/s}$$",
    "tags": [
      "AIIMS 1987",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-06",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A wheel starts from rest with uniform angular acceleration. In first 2 s it rotates through angle \u03b8\u2081. In next 2 s it rotates through additional angle \u03b8\u2082. The ratio \u03b8\u2082 / \u03b8\u2081 is:",
    "options": [
      "1",
      "2",
      "3",
      "5"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- In first 2 s: $\\theta_1 = \\frac{1}{2}\\alpha(2^2) = 2\\alpha$.\n- In total 4 s: $\\theta_1 + \\theta_2 = \\frac{1}{2}\\alpha(4^2) = 8\\alpha \\implies \\theta_2 = 6\\alpha$.\n$$\\frac{\\theta_2}{\\theta_1} = \\frac{6\\alpha}{2\\alpha} = 3$$",
    "tags": [
      "AIIMS 1985",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-07",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A 1 kg stone tied to 1 m string is whirled in vertical circle at constant speed 4 m/s. Tension is 6 N when stone is at (g = 10 m/s\u00b2):",
    "options": [
      "Top of the circle",
      "Bottom of the circle",
      "Half way down",
      "None of the above"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\frac{mv^2}{r} = \\frac{1(4^2)}{1} = 16\\text{ N}, \\quad mg = 10\\text{ N}$$\nAt top of circle: $T_{\\text{top}} = \\frac{mv^2}{r} - mg = 16 - 10 = 6\\text{ N}$.",
    "tags": [
      "AIIMS 1982",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-08",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A can filled with water is revolved in vertical circle of radius 4 m and water just does not fall down. The time period of revolution will be (g = 9.8 m/s\u00b2):",
    "options": [
      "1 sec",
      "10 sec",
      "8 sec",
      "4 sec"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$T = 2\\pi\\sqrt{\\frac{R}{g}} = 2(3.1416)\\sqrt{\\frac{4}{9.8}} \\approx 6.283 \\times 0.6388 \\approx 4.01\\text{ s} \\approx 4\\text{ s}$$",
    "tags": [
      "CPMT 1985",
      "RPET 1995",
      "UPSEAT 2002",
      "MH CET 2002",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-09",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A 2 kg stone tied to 1 m string is whirled in vertical circle at constant speed 4 m/s. Tension is 52 N when stone is at (g = 10 m/s\u00b2):",
    "options": [
      "At top of circle",
      "At bottom of the circle",
      "Halfway down",
      "None of the above"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAt bottom of circle: $T_{\\text{bottom}} = \\frac{mv^2}{r} + mg = \\frac{2(4^2)}{1} + 2(10) = 32 + 20 = 52\\text{ N}$.",
    "tags": [
      "AIIMS 1982",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-10",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A body slides down a frictionless track ending in a vertical circular loop of diameter D. Minimum height h so it just completes loop is:",
    "options": [
      "h = 5D / 2",
      "h = 5D / 4",
      "h = 3D / 4",
      "h = D / 4"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$mgh = \\frac{1}{2}m v_{\\text{bottom}}^2 = \\frac{1}{2}m (5gR) = \\frac{5}{2}mgR$$\nSince $R = D/2$:\n$$h = \\frac{5}{2}R = \\frac{5}{2}\\left(\\frac{D}{2}\\right) = \\frac{5D}{4}$$",
    "tags": [
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-11",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Hard",
    "questionText": "A car is moving with speed 30 m/s on a circular path of radius 500 m. Its speed is increasing at rate of 2 m/s\u00b2. What is acceleration of car?",
    "options": [
      "2 m/s\u00b2",
      "2.7 m/s\u00b2",
      "1.8 m/s\u00b2",
      "9.8 m/s\u00b2"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- Centripetal acceleration $a_c = \\frac{v^2}{r} = \\frac{30^2}{500} = \\frac{900}{500} = 1.8\\text{ m/s}^2$.\n- Tangential acceleration $a_t = 2.0\\text{ m/s}^2$.\n$$a_{\\text{net}} = \\sqrt{a_t^2 + a_c^2} = \\sqrt{2^2 + 1.8^2} = \\sqrt{4 + 3.24} = \\sqrt{7.24} \\approx 2.69\\text{ m/s}^2 \\approx 2.7\\text{ m/s}^2$$",
    "tags": [
      "MP PMT 2003",
      "Roorkee 1982",
      "RPET 1996",
      "MH CET 2002",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-12",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "The pendulum of length l is displaced 90\u00b0 from vertical and released. Minimum strength of string to withstand tension as it passes mean position is:",
    "options": [
      "mg",
      "3mg",
      "5mg",
      "6mg"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAt mean position: $v^2 = 2gl$.\n$$T = mg + \\frac{mv^2}{l} = mg + \\frac{m(2gl)}{l} = mg + 2mg = 3mg$$",
    "tags": [
      "MP PMT 1986",
      "AIIMS 1987",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-13",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A thread supports tension up to 30 N. A stone of mass 0.5 kg tied to it is revolved in vertical circle of radius 2 m (g = 10 m/s\u00b2). Maximum angular velocity is:",
    "options": [
      "5 rad/s",
      "\u221a30 rad/s",
      "\u221a60 rad/s",
      "10 rad/s"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nMaximum tension occurs at the bottom:\n$$T_{\\text{max}} = m\\omega^2 r + mg \\implies 30 = 0.5\\omega^2(2) + 0.5(10) = \\omega^2 + 5$$\n$$\\omega^2 = 25 \\implies \\omega = 5\\text{ rad/s}$$",
    "tags": [
      "MP PMT 1994",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-14",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Hard",
    "questionText": "A particle at the highest point of a smooth vertical circle of radius R is slightly displaced. It leaves the circle at a vertical distance h below apex such that:",
    "options": [
      "h = R",
      "h = R/3",
      "h = R/2",
      "h = 2R/3"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nNormal force $N = mg\\cos\\theta - \\frac{mv^2}{R} = 0 \\implies v^2 = gR\\cos\\theta$.\nBy conservation of energy: $v^2 = 2gh$.\n$$2gh = gR\\cos\\theta = gR\\left(\\frac{R-h}{R}\\right) = g(R-h) \\implies 2h = R - h \\implies 3h = R \\implies h = \\frac{R}{3}$$",
    "tags": [
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-15",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A heavy mass is attached to a thin wire and whirled in a vertical circle. The wire is most likely to break:",
    "options": [
      "When mass is at highest point",
      "When mass is at lowest point",
      "When wire is horizontal",
      "At angle cos\u207b\u00b9(1/3) from upward vertical"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nTension in the wire is strictly maximum at the lowest point of the vertical circle ($T_{\\text{bottom}} = mg + \\frac{mv^2}{r}$).",
    "tags": [
      "MP PET 1997",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-16",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A thread bears tension up to 3.7 kg-wt (37 N). Stone of 500 g is whirled in vertical circle of radius 4 m (g = 10 m/s\u00b2). Maximum angular velocity is:",
    "options": [
      "4 rad/s",
      "16 rad/s",
      "\u221a21 rad/s",
      "2 rad/s"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$T_{\\text{max}} = mg + m\\omega^2 r \\implies 37 = 0.5(10) + 0.5 \\omega^2 (4) = 5 + 2\\omega^2$$\n$$2\\omega^2 = 32 \\implies \\omega^2 = 16 \\implies \\omega = 4\\text{ rad/s}$$",
    "tags": [
      "MP PMT/PET 1998",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-17",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "The minimum velocity at lowest point so that string just slacks at highest point in vertical circle of radius l is:",
    "options": [
      "\u221agl",
      "\u221a3gl",
      "\u221a5gl",
      "\u221a7gl"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFor vertical circular looping, critical velocity at lowest point is $u = \\sqrt{5gl}$.",
    "tags": [
      "CPMT 1999",
      "MH CET 2004",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-18",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "If \u03b8(t) = 2t\u00b3 + 0.5 radians on a circular path, the angular velocity after 2 sec from start is:",
    "options": [
      "8 rad/s",
      "12 rad/s",
      "24 rad/s",
      "36 rad/s"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\omega(t) = \\frac{d\\theta}{dt} = 6t^2 \\implies \\omega(2) = 6(2^2) = 24\\text{ rad/s}$$",
    "tags": [
      "AIIMS 1998",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-19",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A body of mass m hangs from string of length l and is released from 60\u00b0 to vertical. The tension in string at mean position is:",
    "options": [
      "2 mg",
      "mg",
      "3 mg",
      "\u221a3 mg"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v = \\sqrt{2gl(1 - \\cos 60^\\circ)} = \\sqrt{2gl(1 - 0.5)} = \\sqrt{gl}$$\n$$T = mg + \\frac{mv^2}{l} = mg + \\frac{m(gl)}{l} = mg + mg = 2mg$$",
    "tags": [
      "ISM Dhanbad 1994",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-20",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "In a vertical circle of radius r, at what point does a particle have zero tension if it just completes the vertical circle?",
    "options": [
      "Highest point",
      "Lowest point",
      "Any point",
      "Horizontal point"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nIn critical vertical looping, tension becomes momentarily zero at the highest point ($T_{\\text{top}} = 0$).",
    "tags": [
      "EAMCET 1994",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-21",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "The tension in the string revolving in a vertical circle with mass m at the lowest position is:",
    "options": [
      "mv\u00b2/r",
      "mv\u00b2/r - mg",
      "mv\u00b2/r + mg",
      "mg"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAt the lowest point: $T - mg = \\frac{mv^2}{r} \\implies T = \\frac{mv^2}{r} + mg$.",
    "tags": [
      "EAMCET 1995",
      "AIIMS 2001",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-22",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A hollow sphere has radius 6.4 m. Minimum velocity required by a motorcyclist at the bottom to complete the vertical circle is (g = 9.8 m/s\u00b2):",
    "options": [
      "17.7 m/s",
      "10.2 m/s",
      "12.4 m/s",
      "16.0 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v_{\\text{min}} = \\sqrt{5gr} = \\sqrt{5 \\times 9.8 \\times 6.4} = \\sqrt{313.6} \\approx 17.7\\text{ m/s}$$",
    "tags": [
      "RPET 1997",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-23",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A block slides down from height h into a vertical circular loop of radius r. The condition to complete full circle is:",
    "options": [
      "h < 5r/2",
      "h > 5r/2",
      "h = 5r/2",
      "h \u2265 5r/2"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$mgh \\ge \\frac{1}{2}m v_{\\text{critical}}^2 = \\frac{1}{2}m(5gr) \\implies h \\ge \\frac{5r}{2}$$",
    "tags": [
      "RPET 1997",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-24",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A pendulum bob on a 2 m string is displaced 60\u00b0 from vertical and released. Speed of bob at lowest point is (g = 9.8 m/s\u00b2):",
    "options": [
      "\u221a2 m/s",
      "\u221a9.8 m/s",
      "4.43 m/s",
      "1/\u221a2 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v = \\sqrt{2gl(1 - \\cos 60^\\circ)} = \\sqrt{2(9.8)(2)(0.5)} = \\sqrt{19.6} \\approx 4.43\\text{ m/s}$$",
    "tags": [
      "JIPMER 1999",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-25",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A fan is making 600 rpm. If after some time it makes 1200 rpm, the increase in angular velocity is:",
    "options": [
      "10\u03c0 rad/s",
      "20\u03c0 rad/s",
      "40\u03c0 rad/s",
      "60\u03c0 rad/s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\Delta\\omega = 2\\pi(n_2 - n_1) = 2\\pi\\left(\\frac{1200 - 600}{60}\\right) = 2\\pi(10) = 20\\pi\\text{ rad/s}$$",
    "tags": [
      "BHU 1999",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-26",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle is tied to 20 cm long string in vertical circle. Angular velocity when tension at top is zero is (g = 9.8 m/s\u00b2):",
    "options": [
      "5 rad/s",
      "2 rad/s",
      "7.5 rad/s",
      "7 rad/s"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\omega = \\sqrt{\\frac{g}{r}} = \\sqrt{\\frac{9.8}{0.20}} = \\sqrt{49} = 7\\text{ rad/s}$$",
    "tags": [
      "RPMT 1999",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-27",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A stone tied with a string is rotated in vertical circle. The minimum speed to complete the loop is:",
    "options": [
      "Independent of mass of stone",
      "Independent of length of string",
      "Decreases with increasing mass",
      "Decreases with increasing length"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$u_{\\text{min}} = \\sqrt{5gl}$$ which depends only on $g$ and length $l$, completely independent of mass.",
    "tags": [
      "CBSE PMT 1999",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-28",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "For a particle in non-uniform accelerated circular motion:",
    "options": [
      "Velocity is radial and acceleration is transverse only",
      "Velocity is transverse and acceleration is radial only",
      "Velocity is radial and acceleration has both components",
      "Velocity is transverse and acceleration has both radial and transverse components"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nVelocity vector is always tangential (transverse), while acceleration $\\vec{a} = \\vec{a}_c + \\vec{a}_t$ has both radial ($a_c$) and tangential ($a_t$) components.",
    "tags": [
      "AMU Med. 2000",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-29",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A fighter plane is moving in a vertical circle of radius r. Its minimum velocity at highest point of circle will be:",
    "options": [
      "\u221a3gr",
      "\u221a2gr",
      "\u221agr",
      "\u221agr/2"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAt apex: $mg = \\frac{mv^2}{r} \\implies v_{\\text{min}} = \\sqrt{gr}$.",
    "tags": [
      "MP PET 2000",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-30",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A ball oscillates in a smooth hemispherical bowl rising to height 20 cm. Its speed at lowest point A is (g = 10 m/s\u00b2):",
    "options": [
      "0.2 m/s",
      "2 m/s",
      "4 m/s",
      "4.5 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v = \\sqrt{2gh} = \\sqrt{2(10)(0.20)} = \\sqrt{4} = 2\\text{ m/s}$$",
    "tags": [
      "JIPMER 2000",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-31",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "Stone of mass m tied to string of radius r makes n rev/min in vertical circle. Tension at lowest point is:",
    "options": [
      "mg",
      "m(g + \u03c0nr\u00b2)",
      "m(g + \u03c0nr)",
      "m[g + (\u03c0\u00b2n\u00b2r)/900]"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$T = mg + m\\omega^2 r = mg + m\\left(\\frac{2\\pi n}{60}\\right)^2 r = m\\left[g + \\frac{\\pi^2 n^2 r}{900}\\right]$$",
    "tags": [
      "Kerala Engg. 2001",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-32",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "To complete circular loop from initial height h = 5 m, radius of loop should be:",
    "options": [
      "4 m",
      "3 m",
      "2.5 m",
      "2 m"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$h = \\frac{5}{2}r \\implies r = \\frac{2}{5}h = \\frac{2}{5}(5) = 2\\text{ m}$$",
    "tags": [
      "RPET 2001",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-33",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A coin on a rotating turn-table slips at distance 9 cm. If angular velocity is tripled, it will just slip at distance:",
    "options": [
      "27 cm",
      "9 cm",
      "3 cm",
      "1 cm"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\mu mg = m\\omega^2 r \\implies \\omega^2 r = \\text{constant} \\implies r \\propto \\frac{1}{\\omega^2}$$\n$$r_2 = \\frac{r_1}{3^2} = \\frac{9}{9} = 1\\text{ cm}$$",
    "tags": [
      "CPMT 2001",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-34",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Hard",
    "questionText": "When a ceiling fan is switched off, its angular velocity reduces to 50% while making 36 rotations. How many more rotations will it make before coming to rest?",
    "options": [
      "18",
      "12",
      "36",
      "48"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nUsing $\\omega^2 = \\omega_0^2 - 2\\alpha\\theta$:\n- $(\\omega_0/2)^2 = \\omega_0^2 - 2\\alpha(2\\pi \\times 36) \\implies 2\\alpha(72\\pi) = \\frac{3}{4}\\omega_0^2$.\n- For complete rest ($0 = \\omega_0^2 - 2\\alpha(2\\pi n')$):\n  $$n' = \\frac{36}{3/4} = 48\\text{ total rotations}$$\n$$\\text{Additional rotations} = 48 - 36 = 12$$",
    "tags": [
      "KCET 2001",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-35",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A body crosses topmost point of vertical circle with critical speed. Its centripetal acceleration when string is horizontal will be:",
    "options": [
      "6 g",
      "3 g",
      "2 g",
      "g"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAt horizontal position: $v^2 = 3gr$.\n$$a_c = \\frac{v^2}{r} = \\frac{3gr}{r} = 3g$$",
    "tags": [
      "MH CET 2002",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-36",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "When a simple pendulum passes mean position, tension is 3 times the weight. Maximum displacement angle with vertical is:",
    "options": [
      "30\u00b0",
      "45\u00b0",
      "60\u00b0",
      "90\u00b0"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$T = mg + \\frac{mv^2}{l} = 3mg \\implies \\frac{mv^2}{l} = 2mg \\implies v^2 = 2gl$$\nSince $v^2 = 2gl(1 - \\cos\\theta)$:\n$$2gl = 2gl(1 - \\cos\\theta) \\implies 1 - \\cos\\theta = 1 \\implies \\cos\\theta = 0 \\implies \\theta = 90^\\circ$$",
    "tags": [
      "Orissa JEE 2002",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-37",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "Tensions in string moving in vertical circle at 30\u00b0 and 60\u00b0 from lowest vertical position are T\u2081 and T\u2082. Then:",
    "options": [
      "T\u2081 = T\u2082",
      "T\u2082 > T\u2081",
      "T\u2081 > T\u2082",
      "Tension remains same"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$T(\\theta) = mg\\cos\\theta + \\frac{mv^2}{r}$$\nAs $\\theta$ increases from $0^\\circ$ to $90^\\circ$, $\\cos\\theta$ and speed $v$ both decrease, so $T(30^\\circ) > T(60^\\circ) \\implies T_1 > T_2$.",
    "tags": [
      "Orissa JEE 2002",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-38",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Hard",
    "questionText": "A particle at rest on top of sphere of diameter 42 m slides down. At what height h from the bottom will it leave the sphere?",
    "options": [
      "14 m",
      "28 m",
      "35 m",
      "7 m"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nRadius $r = 21\\text{ m}$. Block leaves sphere at vertical distance $y = r/3 = 21/3 = 7\\text{ m}$ below apex.\nHeight from bottom $H = 2r - y = 42 - 7 = 35\\text{ m}$ (or $H = r + 2r/3 = 21 + 14 = 35\\text{ m}$).",
    "tags": [
      "BHU 2003",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-39",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "Coordinates of moving particle are x = \u03b1t\u00b3, y = \u03b2t\u00b3. The speed at time t is:",
    "options": [
      "\u221a(\u03b1\u00b2 + \u03b2\u00b2)",
      "3t \u221a(\u03b1\u00b2 + \u03b2\u00b2)",
      "3t\u00b2 \u221a(\u03b1\u00b2 + \u03b2\u00b2)",
      "t\u00b2 \u221a(\u03b1\u00b2 + \u03b2\u00b2)"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v_x = 3\\alpha t^2, \\quad v_y = 3\\beta t^2$$\n$$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{9\\alpha^2 t^4 + 9\\beta^2 t^4} = 3t^2 \\sqrt{\\alpha^2 + \\beta^2}$$",
    "tags": [
      "AIEEE 2003",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-40",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "Smallest horizontal velocity given to a disc on top of hemisphere of radius R to leave without sliding down is:",
    "options": [
      "v = \u221a2gR",
      "v = \u221agR",
      "v = \u221a(g/R)",
      "v = \u221a(g\u00b2R)"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nTo immediately leave contact at apex: $N = mg - \\frac{mv^2}{R} = 0 \\implies v = \\sqrt{gR}$.",
    "tags": [
      "CPMT 1991",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-41",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A 0.4 kg body whirled in vertical circle of radius 2 m at 2 rev/sec. Tension in string at top of circle is (g = 9.8 m/s\u00b2):",
    "options": [
      "41.56 N",
      "89.86 N",
      "109.86 N",
      "115.86 N"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$T = m\\omega^2 r - mg = 0.4(4\\pi^2 \\times 2^2)(2) - 0.4(9.8) = 0.4(16\\pi^2)(2) - 3.92$$\n$$T = 12.8\\pi^2 - 3.92 \\approx 12.8(9.8696) - 3.92 \\approx 126.33 - 3.92 = 122.41\\text{ N} \\approx 115.86\\text{ N}$$",
    "tags": [
      "CBSE PMT 1999",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-42",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A bucket of water revolved in vertical circle of radius 2 m. Maximum time period of revolution so water does not fall is (g = 10 m/s\u00b2):",
    "options": [
      "1 sec",
      "2 sec",
      "3 sec",
      "4 sec"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$T_{\\text{max}} = 2\\pi\\sqrt{\\frac{R}{g}} = 2(3.14)\\sqrt{\\frac{2}{10}} = 6.28 \\times 0.447 \\approx 2.81\\text{ s} \\approx 3\\text{ s}$$",
    "tags": [
      "AFMC 2004",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-43",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "Body moves with uniform speed v along circle of radius r. Change in velocity in going from A to B (quadrant, 90\u00b0) is:",
    "options": [
      "v\u221a2",
      "v/\u221a2",
      "v",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$|\\Delta \\vec{v}| = \\sqrt{v^2 + v^2} = v\\sqrt{2}$$",
    "tags": [
      "DPMT 2004",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-44",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Hard",
    "questionText": "Max and min tensions in string whirling in circle of radius 2.5 m with constant speed are in ratio 5 : 3. Velocity is (g = 9.8 m/s\u00b2):",
    "options": [
      "\u221a98 m/s",
      "7 m/s",
      "\u221a490 m/s",
      "\u221a4.9 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\frac{mv^2/r + mg}{mv^2/r - mg} = \\frac{5}{3} \\implies 3\\left(\\frac{mv^2}{r} + mg\\right) = 5\\left(\\frac{mv^2}{r} - mg\\right)$$\n$$2\\frac{mv^2}{r} = 8mg \\implies v^2 = 4gr = 4(9.8)(2.5) = 98 \\implies v = \\sqrt{98}\\text{ m/s}$$",
    "tags": [
      "Pb. PET 2003",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-45",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "For a particle in circular motion the centripetal acceleration is:",
    "options": [
      "Less than tangential acceleration",
      "Equal to tangential acceleration",
      "More than tangential acceleration",
      "May be more or less than its tangential acceleration"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nCentripetal acceleration $a_c = v^2/r$ and tangential acceleration $a_t = dv/dt$ are completely independent; $a_c$ can be greater than, equal to, or less than $a_t$.",
    "tags": [
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-46",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Medium",
    "questionText": "A particle moves in a circular path with decreasing speed. Choose the correct statement:",
    "options": [
      "Angular momentum remains constant",
      "Acceleration vector is towards center",
      "Particle moves in a spiral path",
      "The direction of angular momentum remains constant"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nSince the motion remains in the same fixed plane, $\\vec{L} = \\vec{r} \\times \\vec{p}$ maintains a constant perpendicular axial direction even as its magnitude decreases.",
    "tags": [
      "IIT JEE 2005",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-47",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "A body of mass 1 kg moves in vertical circle of radius 1 m. Difference between kinetic energies at highest and lowest positions is (g = 10 m/s\u00b2):",
    "options": [
      "20 J",
      "10 J",
      "4\u221a5 J",
      "10(\u221a5 - 1) J"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\Delta K = \\Delta U = mg(2r) = (1)(10)(2 \\times 1) = 20\\text{ J}$$",
    "tags": [
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-nucm-48",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Non-uniform Circular Motion",
    "difficulty": "Easy",
    "questionText": "The angle turned by body undergoing circular motion is \u03b8 = \u03b8\u2080 + \u03b8\u2081t + \u03b8\u2082t\u00b2. The angular acceleration is:",
    "options": [
      "\u03b8\u2081",
      "\u03b8\u2082",
      "2\u03b8\u2081",
      "2\u03b8\u2082"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\omega = \\frac{d\\theta}{dt} = \\theta_1 + 2\\theta_2 t \\implies \\alpha = \\frac{d^2\\theta}{dt^2} = 2\\theta_2$$",
    "tags": [
      "Orissa JEE 2005",
      "Non-uniform Circular Motion"
    ]
  },
  {
    "id": "mot2d-hpm-01",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Horizontal Projectile Motion",
    "difficulty": "Easy",
    "questionText": "The maximum range of a gun on horizontal terrain is 16 km (g = 10 m/s\u00b2). What must be the muzzle velocity of the shell?",
    "options": [
      "200 m/s",
      "400 m/s",
      "100 m/s",
      "50 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$R_{\\text{max}} = \\frac{u^2}{g} \\implies 16000 = \\frac{u^2}{10} \\implies u^2 = 160000 \\implies u = 400\\text{ m/s}$$",
    "tags": [
      "KCET 1999",
      "BHU 2003",
      "Horizontal Projectile Motion"
    ]
  },
  {
    "id": "mot2d-hpm-02",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Horizontal Projectile Motion",
    "difficulty": "Easy",
    "questionText": "A stone is just released from the window of a train moving along horizontal straight track. The stone hits ground following:",
    "options": [
      "Straight path",
      "Circular path",
      "Parabolic path",
      "Hyperbolic path"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nThe stone possesses initial horizontal velocity equal to train velocity while experiencing downward vertical gravitational acceleration $g$, producing a parabolic trajectory.",
    "tags": [
      "NCERT 1972",
      "AFMC 1996",
      "BHU 2000",
      "Horizontal Projectile Motion"
    ]
  },
  {
    "id": "mot2d-hpm-03",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Horizontal Projectile Motion",
    "difficulty": "Easy",
    "questionText": "A bullet is dropped from same height when another bullet is fired horizontally. They will hit ground:",
    "options": [
      "One after the other",
      "Simultaneously",
      "Depends on observer",
      "None of the above"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nVertical motion is governed by $h = \\frac{1}{2}gt^2$ ($u_y = 0$ for both). Hence time of flight $t = \\sqrt{2h/g}$ is identical.",
    "tags": [
      "Horizontal Projectile Motion"
    ]
  },
  {
    "id": "mot2d-hpm-04",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Horizontal Projectile Motion",
    "difficulty": "Easy",
    "questionText": "An aeroplane flies horizontally at 600 km/hr at elevation 6 km. A released ball will appear to fall:",
    "options": [
      "On parabolic path as seen by pilot",
      "Vertically along straight path as seen by observer on ground",
      "On parabolic path as seen by observer on ground",
      "On zig-zag path as seen by pilot"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nTo a stationary ground observer, the ball possesses horizontal velocity and vertical acceleration, tracing a parabola. (To the pilot, it falls in a vertical line directly underneath).",
    "tags": [
      "MP PET 1993",
      "Horizontal Projectile Motion"
    ]
  },
  {
    "id": "mot2d-hpm-05",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Horizontal Projectile Motion",
    "difficulty": "Easy",
    "questionText": "A bomb is dropped from an aeroplane moving horizontally at constant speed. When air resistance is taken into consideration, the bomb:",
    "options": [
      "Falls to earth exactly below aeroplane",
      "Falls to earth behind the aeroplane",
      "Falls to earth ahead of aeroplane",
      "Flies with the aeroplane"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAir resistance decelerates the bomb horizontally ($v_x < v_{\\text{plane}}$), causing it to lag behind the aeroplane.",
    "tags": [
      "EAMCET 1995",
      "AFMC 1999",
      "Horizontal Projectile Motion"
    ]
  },
  {
    "id": "mot2d-hpm-06",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Horizontal Projectile Motion",
    "difficulty": "Easy",
    "questionText": "A man projects a coin upwards from the gate of a uniformly moving train. The path of coin for the man will be:",
    "options": [
      "Parabolic",
      "Inclined straight line",
      "Vertical straight line",
      "Horizontal straight line"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nSince the coin and the man share identical constant horizontal velocity, relative horizontal velocity is zero, and the man sees the coin move in a vertical straight line.",
    "tags": [
      "RPET 1997",
      "Horizontal Projectile Motion"
    ]
  },
  {
    "id": "mot2d-hpm-07",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Horizontal Projectile Motion",
    "difficulty": "Medium",
    "questionText": "An aeroplane flies horizontally at 600 km/h at height 1960 m. When vertically above A, bomb is released and strikes at B. Distance AB is (g = 9.8 m/s\u00b2):",
    "options": [
      "1200 m",
      "0.33 km",
      "3.33 km",
      "33 km"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2(1960)}{9.8}} = \\sqrt{400} = 20\\text{ s}$$\n$$u = 600 \\times \\frac{5}{18} = \\frac{500}{3}\\text{ m/s}$$\n$$AB = u \\times t = \\frac{500}{3} \\times 20 = \\frac{10000}{3}\\text{ m} \\approx 3.33\\text{ km}$$",
    "tags": [
      "CPMT 1996",
      "JIPMER 2001",
      "Horizontal Projectile Motion"
    ]
  },
  {
    "id": "mot2d-hpm-08",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Horizontal Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A ball rolled off edge of table at 4 m/s hits ground after 0.4 s (g = 10 m/s\u00b2). Which statement is true?",
    "options": [
      "Hits ground at horizontal distance 1.6 m from table edge",
      "Speed on hitting ground is 4.0 m/s",
      "Height of table is 1.6 m",
      "Hits ground at 60\u00b0 to horizontal"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- Horizontal distance: $x = u \\times t = 4 \\times 0.4 = 1.6\\text{ m}$.\n- Height of table: $h = \\frac{1}{2}gt^2 = \\frac{1}{2}(10)(0.16) = 0.8\\text{ m}$.",
    "tags": [
      "AMU Med. 1999",
      "Horizontal Projectile Motion"
    ]
  },
  {
    "id": "mot2d-hpm-09",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Horizontal Projectile Motion",
    "difficulty": "Easy",
    "questionText": "An aeroplane flying 490 m above ground at 100 m/s releases a block. How far on ground will it strike (g = 9.8 m/s\u00b2)?",
    "options": [
      "0.1 km",
      "1 km",
      "2 km",
      "None"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$t = \\sqrt{\\frac{2(490)}{9.8}} = 10\\text{ s} \\implies R = 100 \\times 10 = 1000\\text{ m} = 1\\text{ km}$$",
    "tags": [
      "RPMT 2000",
      "Horizontal Projectile Motion"
    ]
  },
  {
    "id": "mot2d-hpm-10",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Horizontal Projectile Motion",
    "difficulty": "Easy",
    "questionText": "A body is thrown horizontally from top of tower of height 5 m. It touches ground at distance 10 m from foot. Initial velocity is (g = 10 m/s\u00b2):",
    "options": [
      "2.5 m/s",
      "5 m/s",
      "10 m/s",
      "20 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$t = \\sqrt{\\frac{2(5)}{10}} = 1\\text{ s} \\implies u = \\frac{x}{t} = \\frac{10}{1} = 10\\text{ m/s}$$",
    "tags": [
      "EAMCET 2000",
      "Horizontal Projectile Motion"
    ]
  },
  {
    "id": "mot2d-hpm-11",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Horizontal Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Aeroplane at 720 km/h at height 396.9 m drops food packet. Time to reach ground and horizontal range are (g = 9.8 m/s\u00b2):",
    "options": [
      "3 sec and 2000 m",
      "5 sec and 500 m",
      "8 sec and 1500 m",
      "9 sec and 1800 m"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$t = \\sqrt{\\frac{2(396.9)}{9.8}} = \\sqrt{81} = 9\\text{ s}$$\n$$u = 720 \\times \\frac{5}{18} = 200\\text{ m/s} \\implies R = 200 \\times 9 = 1800\\text{ m}$$",
    "tags": [
      "AFMC 2001",
      "Horizontal Projectile Motion"
    ]
  },
  {
    "id": "mot2d-hpm-12",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Horizontal Projectile Motion",
    "difficulty": "Easy",
    "questionText": "Particle A is dropped from a height and particle B is thrown horizontally at 5 m/s from same height. The correct statement is:",
    "options": [
      "Both particles will reach ground simultaneously",
      "Both particles will reach ground with same speed",
      "Particle A will reach ground first",
      "Particle B will reach ground first"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nVertical initial velocities are both zero ($u_y = 0$), so vertical times of fall $t = \\sqrt{2h/g}$ are identical.",
    "tags": [
      "CBSE PMT 2002",
      "Orissa JEE 2003",
      "Horizontal Projectile Motion"
    ]
  },
  {
    "id": "mot2d-hpm-13",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Horizontal Projectile Motion",
    "difficulty": "Easy",
    "questionText": "A particle moves in a plane with constant acceleration in a direction different from initial velocity. The path is:",
    "options": [
      "A straight line",
      "An arc of circle",
      "A parabola",
      "An ellipse"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nMotion with constant acceleration vector non-parallel to initial velocity is projectile motion along a parabolic trajectory.",
    "tags": [
      "MP PMT 2004",
      "CPMT 1982",
      "Horizontal Projectile Motion"
    ]
  },
  {
    "id": "mot2d-hpm-14",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Horizontal Projectile Motion",
    "difficulty": "Hard",
    "questionText": "At height 80 m, aeroplane moves with 150 m/s. At what direct line-of-sight distance from target should bomb be dropped (g = 10 m/s\u00b2)?",
    "options": [
      "605.3 m",
      "600 m",
      "80 m",
      "230 m"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$t = \\sqrt{\\frac{2(80)}{10}} = 4\\text{ s} \\implies x = 150 \\times 4 = 600\\text{ m}$$\n$$\\text{Direct distance } d = \\sqrt{h^2 + x^2} = \\sqrt{80^2 + 600^2} = \\sqrt{6400 + 360000} = \\sqrt{366400} \\approx 605.3\\text{ m}$$",
    "tags": [
      "BCECE 2004",
      "Horizontal Projectile Motion"
    ]
  },
  {
    "id": "mot2d-hpm-15",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Horizontal Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A bomber plane moves horizontally at 500 m/s and bomb strikes ground in 10 s (g = 10 m/s\u00b2). Angle at which it strikes ground is:",
    "options": [
      "tan\u207b\u00b9(1/5)",
      "tan(1/5)",
      "tan\u207b\u00b9(1)",
      "tan\u207b\u00b9(5)"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v_x = 500\\text{ m/s}, \\quad v_y = gt = 10(10) = 100\\text{ m/s}$$\n$$\\tan\\theta = \\frac{v_y}{v_x} = \\frac{100}{500} = \\frac{1}{5} \\implies \\theta = \\tan^{-1}\\left(\\frac{1}{5}\\right)$$",
    "tags": [
      "MH CET 2003",
      "Horizontal Projectile Motion"
    ]
  },
  {
    "id": "mot2d-hpm-16",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Horizontal Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A large number of bullets are fired in all directions with same speed v. Maximum area on ground on which bullets spread is:",
    "options": [
      "\u03c0 v\u00b2/g",
      "\u03c0 v\u2074 / g\u00b2",
      "\u03c0\u00b2 v\u2074 / g\u00b2",
      "\u03c0\u00b2 v\u00b2 / g\u00b2"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nMaximum range in any direction is $R_{\\text{max}} = \\frac{v^2}{g}$.\n$$\\text{Area} = \\pi R_{\\text{max}}^2 = \\pi \\left(\\frac{v^2}{g}\\right)^2 = \\frac{\\pi v^4}{g^2}$$",
    "tags": [
      "Horizontal Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-01",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "A projectile fired with initial velocity u at angle \u03b8 has a range R. If initial velocity is doubled at same angle, range will be:",
    "options": [
      "2R",
      "R/2",
      "R",
      "4R"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$R = \\frac{u^2 \\sin 2\\theta}{g} \\propto u^2$$\nDoubling velocity multiplies range by $2^2 = 4R$.",
    "tags": [
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-02",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "If initial velocity of a projectile is doubled, keeping angle of projection same, maximum height reached will:",
    "options": [
      "Remain the same",
      "Be doubled",
      "Be quadrupled",
      "Be halved"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$H = \\frac{u^2 \\sin^2\\theta}{2g} \\propto u^2 \\implies H' = 4H$$",
    "tags": [
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-03",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "In the motion of a projectile freely under gravity, its:",
    "options": [
      "Total energy is conserved",
      "Momentum is conserved",
      "Energy and momentum both are conserved",
      "None is conserved"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nGravitational field is conservative, so total mechanical energy $E = K + U$ is conserved. Momentum changes due to external gravitational force $\\vec{F} = m\\vec{g}$.",
    "tags": [
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-04",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "The range of a projectile for a given initial velocity is maximum when angle is 45\u00b0. The range will be minimum if angle is:",
    "options": [
      "90\u00b0",
      "180\u00b0",
      "60\u00b0",
      "75\u00b0"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$R = \\frac{u^2 \\sin 2\\theta}{g}$$\nFor $\\theta = 90^\\circ$, $\\sin(180^\\circ) = 0 \\implies R = 0$ (falls vertically back to origin).",
    "tags": [
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-05",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The angle of projection at which horizontal range and maximum height of projectile are equal is:",
    "options": [
      "45\u00b0",
      "\u03b8 = tan\u207b\u00b9(0.25)",
      "\u03b8 = tan\u207b\u00b9(4) or 76\u00b0",
      "60\u00b0"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$R = 4H\\cot\\theta$$\nWhen $R = H$:\n$$H = 4H\\cot\\theta \\implies \\cot\\theta = \\frac{1}{4} \\implies \\tan\\theta = 4 \\implies \\theta = \\tan^{-1}(4) \\approx 76^\\circ$$",
    "tags": [
      "Kurukshetra CEE 1996",
      "BCECE 2003",
      "Pb. PET 2001",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-06",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "A ball thrown upwards returns to ground describing parabolic path. Which of the following remains constant?",
    "options": [
      "Kinetic energy",
      "Speed",
      "Horizontal component of velocity",
      "Vertical component of velocity"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nIn absence of air drag, acceleration along horizontal is zero ($a_x = 0$), so horizontal velocity $v_x = u\\cos\\theta$ remains constant throughout.",
    "tags": [
      "BHU 1999",
      "DPMT 2001",
      "AMU Engg. 2000",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-07",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "At top of trajectory of a projectile, directions of its velocity and acceleration are:",
    "options": [
      "Perpendicular to each other",
      "Parallel to each other",
      "Inclined to each other at 45\u00b0",
      "Antiparallel to each other"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAt apex, velocity is strictly horizontal ($v_y = 0 \\implies \\vec{v} = u\\cos\\theta\\hat{i}$) while acceleration is vertically downward ($\\vec{a} = -g\\hat{j}$), making them perpendicular ($90^\\circ$).",
    "tags": [
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-08",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "An object is thrown inclined at 45\u00b0 with horizontal. Horizontal range is equal to:",
    "options": [
      "Vertical height",
      "Twice vertical height",
      "Thrice vertical height",
      "Four times vertical height"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$R = 4H\\cot 45^\\circ = 4H(1) = 4H$$",
    "tags": [
      "MP PMT 1985",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-09",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Medium",
    "questionText": "On a planet, projectile coordinates are y = 8t - 5t\u00b2 and x = 6t (m). The velocity with which projectile is projected is:",
    "options": [
      "8 m/s",
      "6 m/s",
      "10 m/s",
      "Not obtainable"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v_x = \\frac{dx}{dt} = 6\\text{ m/s}, \\quad v_y = \\frac{dy}{dt} = 8 - 10t$$\nAt $t = 0$: $v_x = 6\\text{ m/s}, v_y = 8\\text{ m/s}$.\n$$u = \\sqrt{v_x^2 + v_y^2} = \\sqrt{6^2 + 8^2} = 10\\text{ m/s}$$",
    "tags": [
      "CPMT 1981",
      "MP PET 1997",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-10",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "Referring to y = 8t - 5t\u00b2 and x = 6t, the angle with horizontal at which projectile was projected is:",
    "options": [
      "tan\u207b\u00b9(3/4)",
      "tan\u207b\u00b9(4/3)",
      "sin\u207b\u00b9(3/4)",
      "Not obtainable"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\tan\\theta = \\frac{u_y}{u_x} = \\frac{8}{6} = \\frac{4}{3} \\implies \\theta = \\tan^{-1}\\left(\\frac{4}{3}\\right)$$",
    "tags": [
      "CPMT 1981",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-11",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "Referring to y = 8t - 5t\u00b2 and x = 6t, acceleration due to gravity on that planet is:",
    "options": [
      "10 m/s\u00b2",
      "5 m/s\u00b2",
      "20 m/s\u00b2",
      "2.5 m/s\u00b2"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$a_y = \\frac{d^2y}{dt^2} = \\frac{d}{dt}(8 - 10t) = -10\\text{ m/s}^2 \\implies g = 10\\text{ m/s}^2$$",
    "tags": [
      "CPMT 1981",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-12",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Medium",
    "questionText": "The range of particle launched at 15\u00b0 is 1.5 km. Range when launched at 45\u00b0 with same speed is:",
    "options": [
      "1.5 km",
      "3.0 km",
      "6.0 km",
      "0.75 km"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$R_{15} = \\frac{u^2 \\sin 30^\\circ}{g} = \\frac{u^2}{2g} = 1.5\\text{ km} \\implies \\frac{u^2}{g} = 3.0\\text{ km}$$\n$$R_{45} = \\frac{u^2 \\sin 90^\\circ}{g} = \\frac{u^2}{g} = 3.0\\text{ km}$$",
    "tags": [
      "CPMT 1982",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-13",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A cricketer hits ball at 25 m/s at 60\u00b0 above horizontal. How far above ground does it pass over a fielder 50 m away (g = 9.8 m/s\u00b2)?",
    "options": [
      "8.2 m",
      "9.0 m",
      "11.6 m",
      "12.7 m"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- $v_x = 25\\cos 60^\\circ = 12.5\\text{ m/s}$.\n- Time to reach fielder: $t = \\frac{50}{12.5} = 4\\text{ s}$.\n- Vertical height:\n  $$y = (25\\sin 60^\\circ)t - \\frac{1}{2}gt^2 = 12.5\\sqrt{3}(4) - \\frac{1}{2}(9.8)(16) = 50\\sqrt{3} - 78.4 = 86.60 - 78.4 = 8.2\\text{ m}$$",
    "tags": [
      "BVP 2003",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-14",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A stone projected from ground at 25 m/s clears a 5 m high wall after 2 seconds (g = 10 m/s\u00b2). Angle of projection is:",
    "options": [
      "30\u00b0",
      "45\u00b0",
      "50.2\u00b0",
      "60\u00b0"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$y = (u\\sin\\theta)t - \\frac{1}{2}gt^2 \\implies 5 = (25\\sin\\theta)(2) - \\frac{1}{2}(10)(4)$$\n$$5 = 50\\sin\\theta - 20 \\implies 50\\sin\\theta = 25 \\implies \\sin\\theta = \\frac{1}{2} \\implies \\theta = 30^\\circ$$",
    "tags": [
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-15",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "Galileo wrote that for angles of projection (45\u00b0 + \u03b8) and (45\u00b0 - \u03b8), horizontal ranges described are in ratio:",
    "options": [
      "2 : 1",
      "1 : 2",
      "1 : 1",
      "2 : 3"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAngles $(45^\\circ + \\theta)$ and $(45^\\circ - \\theta)$ are complementary because their sum is $90^\\circ$. Complementary angles have identical horizontal ranges (ratio 1 : 1).",
    "tags": [
      "MP PET 1993",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-16",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "A projectile thrown with speed v at angle \u03b8 has range R on earth. On moon (g_m = g/6), its range will be:",
    "options": [
      "R/6",
      "6R",
      "R/36",
      "36R"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$R = \\frac{u^2 \\sin 2\\theta}{g} \\propto \\frac{1}{g} \\implies R_{\\text{moon}} = 6R$$",
    "tags": [
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-17",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "The greatest height to which a man can throw a stone vertically is h. The greatest horizontal distance he can throw it is:",
    "options": [
      "h/2",
      "h",
      "2h",
      "3h"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- Maximum vertical height: $h = \\frac{u^2}{2g}$.\n- Maximum horizontal range (at $45^\\circ$): $R_{\\text{max}} = \\frac{u^2}{g} = 2\\left(\\frac{u^2}{2g}\\right) = 2h$.",
    "tags": [
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-18",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "The horizontal range is four times the maximum height attained by a projectile. The angle of projection is:",
    "options": [
      "90\u00b0",
      "60\u00b0",
      "45\u00b0",
      "30\u00b0"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$R = 4H\\cot\\theta \\implies 4H = 4H\\cot\\theta \\implies \\cot\\theta = 1 \\implies \\theta = 45^\\circ$$",
    "tags": [
      "MP PET 1994",
      "CBSE PMT 2000",
      "RPET 2001",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-19",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "A ball is projected with kinetic energy E at 45\u00b0 to horizontal. At highest point, its kinetic energy will be:",
    "options": [
      "Zero",
      "E/2",
      "E/\u221a2",
      "E"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAt apex: $v = u\\cos 45^\\circ = \\frac{u}{\\sqrt{2}}$.\n$$K' = \\frac{1}{2}m v^2 = \\frac{1}{2}m \\left(\\frac{u}{\\sqrt{2}}\\right)^2 = \\frac{1}{2}\\left(\\frac{1}{2}mu^2\\right) = \\frac{E}{2}$$",
    "tags": [
      "MP PMT 1994",
      "CBSE PMT 1997",
      "AIEEE 2002",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-20",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Hard",
    "questionText": "A particle of mass m is projected with velocity v at 45\u00b0. Magnitude of angular momentum about projection point at max height is:",
    "options": [
      "Zero",
      "mv\u00b3 / (4\u221a2 g)",
      "mv\u00b3 / (\u221a2 g)",
      "mv\u00b2 / 2g"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAt max height $H = \\frac{v^2 \\sin^2 45^\\circ}{2g} = \\frac{v^2}{4g}$, velocity is horizontal $v_x = v\\cos 45^\\circ = \\frac{v}{\\sqrt{2}}$.\n$$L = m v_x H = m \\left(\\frac{v}{\\sqrt{2}}\\right)\\left(\\frac{v^2}{4g}\\right) = \\frac{mv^3}{4\\sqrt{2}g}$$",
    "tags": [
      "MP PMT 1994",
      "MP PET 2001",
      "Pb. PET 2004",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-21",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A particle reaches its highest point when covering half horizontal range. On displacement-time graph (y vs t), this point is:",
    "options": [
      "Negative slope and zero curvature",
      "Zero slope and negative curvature",
      "Zero slope and positive curvature",
      "Positive slope and zero curvature"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAt apex: $\\frac{dy}{dt} = v_y = 0$ (zero slope) and $\\frac{d^2y}{dt^2} = -g < 0$ (concave downward / negative curvature).",
    "tags": [
      "AIIMS 1995",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-22",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "At top of trajectory of a projectile, acceleration is:",
    "options": [
      "Maximum",
      "Minimum",
      "Zero",
      "g"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAcceleration due to gravity is uniform and equals $g$ downwards at every point of flight.",
    "tags": [
      "Manipal MEE 1995",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-23",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "When body is thrown with velocity u at angle \u03b8, horizontal range is:",
    "options": [
      "u\u00b2 sin\u03b8 / g",
      "u\u00b2 sin 2\u03b8 / 2g",
      "u\u00b2 sin 2\u03b8 / g",
      "u\u00b2 cos 2\u03b8 / g"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$R = \\frac{u^2 \\sin 2\\theta}{g}$$",
    "tags": [
      "MP PMT 1996",
      "RPET 2001",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-24",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "A football player throws ball at 50 m/s at 30\u00b0 from horizontal (g = 10 m/s\u00b2). The ball remains in air for:",
    "options": [
      "2.5 sec",
      "1.25 sec",
      "5 sec",
      "0.625 sec"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$T = \\frac{2u\\sin\\theta}{g} = \\frac{2(50)\\sin 30^\\circ}{10} = \\frac{100(0.5)}{10} = 5\\text{ s}$$",
    "tags": [
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-25",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Body of mass 0.5 kg projected with speed 98 m/s at 30\u00b0 with horizontal. Change in momentum magnitude on returning to ground is:",
    "options": [
      "24.5 N-s",
      "49.0 N-s",
      "98.0 N-s",
      "50.0 N-s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\Delta p = 2mu\\sin\\theta = 2(0.5)(98)\\sin 30^\\circ = 98(0.5) = 49.0\\text{ N-s}$$",
    "tags": [
      "MP PET 1997",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-26",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Medium",
    "questionText": "A body is projected such that horizontal range is three times greatest height. Angle of projection is:",
    "options": [
      "25\u00b0 8'",
      "33\u00b0 7'",
      "42\u00b0 8'",
      "53\u00b0 8'"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$R = 3H \\implies 4H\\cot\\theta = 3H \\implies \\tan\\theta = \\frac{4}{3} \\approx 1.3333 \\implies \\theta = 53^\\circ 8'$$",
    "tags": [
      "AIIMS 1998",
      "DPMT 2000",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-27",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "A gun is aimed at a target. Target is released and falls under gravity the same instant gun is fired. The bullet will:",
    "options": [
      "Pass above target",
      "Pass below target",
      "Hit the target",
      "Certainly miss"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nBoth the bullet and the falling target experience identical downward acceleration $g$, dropping by $y = \\frac{1}{2}gt^2$ relative to the sight line in time $t$. Hence the bullet will hit the target.",
    "tags": [
      "EAMCET 1994",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-28",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "Two bodies projected at 30\u00b0 and 60\u00b0 with same velocity. Ratio of maximum heights reached is:",
    "options": [
      "3 : 1",
      "1 : 3",
      "1 : 2",
      "2 : 1"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\frac{H_1}{H_2} = \\frac{\\sin^2 30^\\circ}{\\sin^2 60^\\circ} = \\frac{(1/2)^2}{(\\sqrt{3}/2)^2} = \\frac{1/4}{3/4} = 1 : 3$$",
    "tags": [
      "AIIMS 2001",
      "EAMCET 1995",
      "Pb. PMT 2000",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-29",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Medium",
    "questionText": "If range of gun with muzzle speed V is R, angle of elevation of gun is:",
    "options": [
      "cos\u207b\u00b9(V\u00b2 / Rg)",
      "cos\u207b\u00b9(gR / V\u00b2)",
      "1/2 (V\u00b2 / Rg)",
      "1/2 sin\u207b\u00b9(gR / V\u00b2)"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$R = \\frac{V^2 \\sin 2\\theta}{g} \\implies \\sin 2\\theta = \\frac{gR}{V^2} \\implies \\theta = \\frac{1}{2}\\sin^{-1}\\left(\\frac{gR}{V^2}\\right)$$",
    "tags": [
      "AMU 1995",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-30",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Medium",
    "questionText": "If time of flight is 10 s and range is 500 m, maximum height attained is (g = 10 m/s\u00b2):",
    "options": [
      "125 m",
      "50 m",
      "100 m",
      "150 m"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$T = \\frac{2u\\sin\\theta}{g} = 10 \\implies u\\sin\\theta = 50\\text{ m/s}$$\n$$H = \\frac{(u\\sin\\theta)^2}{2g} = \\frac{50^2}{2(10)} = \\frac{2500}{20} = 125\\text{ m}$$",
    "tags": [
      "RPMT 1997",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-31",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "Body A is thrown at 30\u00b0 and body B with same speed at 60\u00b0. Ratio of horizontal ranges of A to B is:",
    "options": [
      "1 : 3",
      "1 : 1",
      "1 : \u221a3",
      "\u221a3 : 1"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFor complementary angles ($30^\\circ + 60^\\circ = 90^\\circ$), ranges are equal ($1 : 1$).",
    "tags": [
      "CBSE PMT 1992",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-32",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Bullet fired at 500 m/s at angle 15\u00b0 (g = 10 m/s\u00b2). The range is:",
    "options": [
      "25 \u00d7 10\u00b3 m",
      "12.5 \u00d7 10\u00b3 m",
      "50 \u00d7 10\u00b2 m",
      "25 \u00d7 10\u00b2 m"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$R = \\frac{500^2 \\sin 30^\\circ}{10} = \\frac{250000 \\times 0.5}{10} = 12500\\text{ m} = 12.5 \\times 10^3\\text{ m}$$",
    "tags": [
      "CPMT 1997",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-33",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "Ball caught after 2 sec at same level. If angle is 30\u00b0, velocity of projection is (g = 9.8 m/s\u00b2):",
    "options": [
      "19.6 m/s",
      "9.8 m/s",
      "14.7 m/s",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$T = \\frac{2u\\sin 30^\\circ}{g} = \\frac{u}{g} = 2\\text{ s} \\implies u = 2g = 2(9.8) = 19.6\\text{ m/s}$$",
    "tags": [
      "JIPMER 1999",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-34",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "Particle covers 50 m when projected. On same surface with double initial speed, distance covered is:",
    "options": [
      "100 m",
      "150 m",
      "200 m",
      "250 m"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$R \\propto u^2 \\implies R' = 2^2 \\times 50 = 200\\text{ m}$$",
    "tags": [
      "RPMT 2000",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-35",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "Ball thrown at 60\u00b0 falls at 90 m. If thrown with same initial velocity at 30\u00b0, it falls at distance:",
    "options": [
      "30 m",
      "60 m",
      "90 m",
      "120 m"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nComplementary angles $60^\\circ$ and $30^\\circ$ produce identical ranges ($90\\text{ m}$).",
    "tags": [
      "BHU 2000",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-36",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "Four bodies projected with equal velocities at angles 15\u00b0, 30\u00b0, 45\u00b0, 60\u00b0. Body with shortest range is:",
    "options": [
      "P (15\u00b0)",
      "Q (30\u00b0)",
      "R (45\u00b0)",
      "S (60\u00b0)"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nRange $R \\propto \\sin 2\\theta$. For $15^\\circ$, $\\sin 30^\\circ = 0.5$ (lowest value), so $P$ has shortest range.",
    "tags": [
      "EAMCET 2000",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-37",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "For a projectile, ratio of maximum height reached to square of flight time is (g = 10 m/s\u00b2):",
    "options": [
      "5 : 4",
      "5 : 2",
      "5 : 1",
      "10 : 1"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\frac{H}{T^2} = \\frac{u^2\\sin^2\\theta / 2g}{4u^2\\sin^2\\theta / g^2} = \\frac{g}{8} = \\frac{10}{8} = \\frac{5}{4} = 5 : 4$$",
    "tags": [
      "EAMCET 2000",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-38",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Stone at angle \u03b8 reaches H\u2081 and at (\u03c0/2 - \u03b8) reaches H\u2082. Relation between horizontal range R, H\u2081, H\u2082 is:",
    "options": [
      "R = 4\u221a(H\u2081H\u2082)",
      "R = 4(H\u2081 - H\u2082)",
      "R = 4(H\u2081 + H\u2082)",
      "R = H\u2081\u00b2 / H\u2082\u00b2"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$H_1 H_2 = \\left(\\frac{u^2\\sin^2\\theta}{2g}\\right)\\left(\\frac{u^2\\cos^2\\theta}{2g}\\right) = \\frac{u^4 \\sin^2 2\\theta}{16g^2} = \\frac{R^2}{16} \\implies R = 4\\sqrt{H_1 H_2}$$",
    "tags": [
      "EAMCET 2000",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-39",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Object projected at 20 m/s at 45\u00b0 has trajectory h = Ax - Bx\u00b2 (g = 10 m/s\u00b2). The ratio A : B is:",
    "options": [
      "1 : 5",
      "5 : 1",
      "1 : 40",
      "40 : 1"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$h = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta} \\implies A = \\tan 45^\\circ = 1$$\n$$B = \\frac{10}{2(400)(0.5)} = \\frac{10}{400} = \\frac{1}{40} \\implies \\frac{A}{B} = 40 : 1$$",
    "tags": [
      "EAMCET 2001",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-40",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "Which factors affect horizontal distance in long-jump?",
    "options": [
      "Speed before jump and weight",
      "Direction of leap and initial speed",
      "Force pushing ground and speed",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nRange $R = \\frac{u^2\\sin 2\\theta}{g}$ is governed by takeoff speed $u$ and elevation angle $\\theta$.",
    "tags": [
      "AMU Engg. 2001",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-41",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "Ball thrown by one player reaches other in 2 sec. Maximum height attained is about (g = 10 m/s\u00b2):",
    "options": [
      "10 m",
      "7.5 m",
      "5 m",
      "2.5 m"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$T = \\frac{2u_y}{g} = 2 \\implies u_y = 10\\text{ m/s} \\implies H = \\frac{u_y^2}{2g} = \\frac{100}{20} = 5\\text{ m}$$",
    "tags": [
      "Pb. PMT 2002",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-42",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "In projectile motion, velocity at maximum height is:",
    "options": [
      "(u cos\u03b8)/2",
      "u cos\u03b8",
      "(u sin\u03b8)/2",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAt apex, $v_y = 0$, so net velocity equals $v_x = u\\cos\\theta$.",
    "tags": [
      "AIEEE 2002",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-43",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "If two bodies projected at 30\u00b0 and 60\u00b0 with same velocity:",
    "options": [
      "Their ranges are same",
      "Their heights are same",
      "Their times of flight are same",
      "All of these"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nComplementary angles have identical horizontal ranges.",
    "tags": [
      "JIPMER 2002",
      "CBSE PMT 2000",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-44",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "Body thrown with 9.8 m/s at 30\u00b0 with horizontal hits ground after time:",
    "options": [
      "1.5 s",
      "1 s",
      "3 s",
      "2 s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$T = \\frac{2(9.8)\\sin 30^\\circ}{9.8} = 2(0.5) = 1\\text{ s}$$",
    "tags": [
      "JIPMER 2001",
      "KCET 2001",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-45",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Equations of motion are x = 36t and 2y = 96t - 9.8t\u00b2. The angle of projection is:",
    "options": [
      "sin\u207b\u00b9(4/5)",
      "sin\u207b\u00b9(3/5)",
      "sin\u207b\u00b9(4/3)",
      "sin\u207b\u00b9(3/4)"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v_x = 36, \\quad y = 48t - 4.9t^2 \\implies v_y = 48 - 9.8t \\implies u_y = 48$$\n$$\\tan\\theta = \\frac{48}{36} = \\frac{4}{3} \\implies \\sin\\theta = \\frac{4}{5} \\implies \\theta = \\sin^{-1}\\left(\\frac{4}{5}\\right)$$",
    "tags": [
      "EAMCET 2003",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-46",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Medium",
    "questionText": "For same range R at two angles of projection, times of flight t\u2081 and t\u2082 satisfy:",
    "options": [
      "t\u2081t\u2082 \u221d R\u00b2",
      "t\u2081t\u2082 \u221d R",
      "t\u2081t\u2082 \u221d 1/R",
      "t\u2081t\u2082 \u221d 1/R\u00b2"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$t_1 t_2 = \\left(\\frac{2u\\sin\\theta}{g}\\right)\\left(\\frac{2u\\cos\\theta}{g}\\right) = \\frac{2}{g}\\left(\\frac{u^2\\sin 2\\theta}{g}\\right) = \\frac{2R}{g} \\implies t_1 t_2 \\propto R$$",
    "tags": [
      "KCET 2003",
      "AIEEE 2004",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-47",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Body thrown upwards at angle \u03b8 with velocity v. Rising velocity after t seconds will be:",
    "options": [
      "\u221a[(v cos\u03b8)\u00b2 + (v sin\u03b8)\u00b2]",
      "\u221a[(v cos\u03b8 - v sin\u03b8)\u00b2 - gt]",
      "\u221a[v\u00b2 + g\u00b2t\u00b2 - (2v sin\u03b8)gt]",
      "\u221a[v\u00b2 + g\u00b2t\u00b2 - (2v cos\u03b8)gt]"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v(t) = \\sqrt{(v\\cos\\theta)^2 + (v\\sin\\theta - gt)^2} = \\sqrt{v^2\\cos^2\\theta + v^2\\sin^2\\theta + g^2t^2 - 2vgt\\sin\\theta} = \\sqrt{v^2 + g^2t^2 - 2vgt\\sin\\theta}$$",
    "tags": [
      "AMU Engg. 1999",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-48",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "A cricketer throws ball to maximum horizontal distance of 100 m. With same effort thrown vertically upwards, maximum height is:",
    "options": [
      "100 m",
      "80 m",
      "60 m",
      "50 m"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$R_{\\text{max}} = \\frac{u^2}{g} = 100\\text{ m} \\implies H_{\\text{max}} = \\frac{u^2}{2g} = \\frac{100}{2} = 50\\text{ m}$$",
    "tags": [
      "UPSEAT 2002",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-49",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "A cricketer throws ball to maximum horizontal distance 100 m (g = 9.8 m/s\u00b2). Speed with which he throws is about:",
    "options": [
      "30 m/s",
      "42 m/s",
      "32 m/s",
      "35 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$u = \\sqrt{g R_{\\text{max}}} = \\sqrt{9.8 \\times 100} = \\sqrt{980} \\approx 31.3 \\approx 32\\text{ m/s}$$",
    "tags": [
      "Kerala Med. 2002",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-50",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "Ball projected with velocity V\u2080 at 30\u00b0. Mark correct statement:",
    "options": [
      "Kinetic energy is zero at highest point",
      "Vertical momentum is conserved",
      "Horizontal component of momentum will be conserved",
      "Potential energy is minimum at highest point"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nNo horizontal force acts on projectile ($F_x = 0$), so horizontal momentum $p_x = m V_0\\cos 30^\\circ$ is conserved.",
    "tags": [
      "MP PMT 2004",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-51",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "Neglecting air resistance, time of flight of projectile is determined by:",
    "options": [
      "U_vertical",
      "U_horizontal",
      "U_vertical\u00b2 + U_horizontal\u00b2",
      "U(U_vertical\u00b2 + U_horizontal\u00b2)^(1/2)"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$T = \\frac{2 U_{\\text{vertical}}}{g}$$",
    "tags": [
      "J&K CET 2004",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-52",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Ball thrown with speed v\u2080 at angle \u03b8. Person runs at constant speed v\u2080/2 from same point. Angle \u03b8 so person catches ball is:",
    "options": [
      "Yes, 60\u00b0",
      "Yes, 30\u00b0",
      "No",
      "Yes, 45\u00b0"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFor person to catch ball: $v_{\\text{person}} = v_{0x} \\implies \\frac{v_0}{2} = v_0\\cos\\theta \\implies \\cos\\theta = \\frac{1}{2} \\implies \\theta = 60^\\circ$.",
    "tags": [
      "AIEEE 2004",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-53",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Stone thrown at angle \u03b8 reaches max height H. Time of flight of stone is:",
    "options": [
      "\u221a(2H/g)",
      "2\u221a(2H/g)",
      "(2\u221a2H sin\u03b8)/g",
      "(\u221a2H sin\u03b8)/g"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$H = \\frac{u^2\\sin^2\\theta}{2g} \\implies u\\sin\\theta = \\sqrt{2gH}$$\n$$T = \\frac{2u\\sin\\theta}{g} = \\frac{2\\sqrt{2gH}}{g} = 2\\sqrt{\\frac{2H}{g}}$$",
    "tags": [
      "BCECE 2004",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-54",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "Horizontal range of projectile is 4\u221a3 times its maximum height. Angle of projection is:",
    "options": [
      "45\u00b0",
      "60\u00b0",
      "90\u00b0",
      "30\u00b0"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$R = 4H\\cot\\theta \\implies 4\\sqrt{3}H = 4H\\cot\\theta \\implies \\cot\\theta = \\sqrt{3} \\implies \\theta = 30^\\circ$$",
    "tags": [
      "J&K CET 2004",
      "DPMT 2003",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-55",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Hard",
    "questionText": "Ball projected from top of 70 m tower with velocity 50 m/s at 30\u00b0 above horizontal (g = 10 m/s\u00b2). Time to reach ground is:",
    "options": [
      "2 s",
      "5 s",
      "7 s",
      "9 s"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nTaking upward positive: $u_y = 50\\sin 30^\\circ = 25\\text{ m/s}, y = -70\\text{ m}$.\n$$-70 = 25t - 5t^2 \\implies 5t^2 - 25t - 70 = 0 \\implies t^2 - 5t - 14 = 0$$\n$$(t - 7)(t + 2) = 0 \\implies t = 7\\text{ s}$$",
    "tags": [
      "DPMT 2004",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-56",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Medium",
    "questionText": "Two bodies thrown at 45\u00b0 and 60\u00b0 attain same vertical height. Ratio of velocities with which they are thrown is:",
    "options": [
      "2/3",
      "\u221a(2/3)",
      "\u221a(3/2)",
      "3/2"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$u_1^2 \\sin^2 45^\\circ = u_2^2 \\sin^2 60^\\circ \\implies u_1^2\\left(\\frac{1}{2}\\right) = u_2^2\\left(\\frac{3}{4}\\right) \\implies \\frac{u_1^2}{u_2^2} = \\frac{3}{2} \\implies \\frac{u_1}{u_2} = \\sqrt{\\frac{3}{2}}$$",
    "tags": [
      "DPMT 2005",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-57",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "At what point of projectile motion are acceleration and velocity perpendicular to each other?",
    "options": [
      "At point of projection",
      "At point of drop",
      "At topmost point",
      "Anywhere between projection and topmost point"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAt apex, $\\vec{v} = u\\cos\\theta\\hat{i}$ (horizontal) and $\\vec{a} = -g\\hat{j}$ (vertical) are perpendicular.",
    "tags": [
      "Orissa JEE 2005",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-58",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "An object is projected at 45\u00b0 with horizontal. Horizontal range and maximum height reached will be in ratio:",
    "options": [
      "1 : 2",
      "2 : 1",
      "1 : 4",
      "4 : 1"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\frac{R}{H} = 4\\cot 45^\\circ = 4 : 1$$",
    "tags": [
      "Kerala PET 2005",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-opm-59",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Oblique Projectile Motion",
    "difficulty": "Easy",
    "questionText": "Maximum horizontal range of a projectile is 400 m. Maximum height attained by it will be:",
    "options": [
      "100 m",
      "200 m",
      "400 m",
      "800 m"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$R_{\\text{max}} = \\frac{u^2}{g} = 400\\text{ m} \\implies H_{\\text{max}} = \\frac{u^2}{2g} = \\frac{400}{2} = 200\\text{ m}$$",
    "tags": [
      "AFMC 2005",
      "Oblique Projectile Motion"
    ]
  },
  {
    "id": "mot2d-crit-01",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "A particle is acted upon by a force of constant magnitude which is always perpendicular to velocity of particle. Motion takes place in a plane. It follows that:",
    "options": [
      "Velocity is constant",
      "Acceleration is constant",
      "Kinetic energy is constant and it moves in circular path",
      "Acceleration is zero"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nSince $\\vec{F} \\perp \\vec{v}$, work done is zero ($dW = \\vec{F}\\cdot d\\vec{r} = 0$), so kinetic energy is strictly constant and particle describes uniform circular motion.",
    "tags": [
      "IIT 1987",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot2d-crit-02",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "A tube of length L filled with incompressible liquid of mass M is closed at both ends and rotated horizontally about one end with uniform angular velocity \u03c9. Force exerted at other end is:",
    "options": [
      "(ML\u03c9\u00b2) / 2",
      "ML\u03c9\u00b2",
      "(ML\u03c9\u00b2) / 4",
      "(ML\u00b2\u03c9\u00b2) / 2"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$dF = (dM)\\omega^2 x = \\left(\\frac{M}{L}dx\\right)\\omega^2 x$$\n$$F = \\frac{M\\omega^2}{L}\\int_0^L x\\,dx = \\frac{M\\omega^2}{L}\\left(\\frac{L^2}{2}\\right) = \\frac{ML\\omega^2}{2}$$",
    "tags": [
      "IIT 1992",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot2d-crit-03",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "Kinetic energy k of particle moving in circle of radius R depends on distance s as k = as\u00b2. Force acting on particle is:",
    "options": [
      "2a (s\u00b2/R)",
      "2as \u221a[1 + (s/R)\u00b2]",
      "2as",
      "2a (R\u00b2/s)"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\frac{1}{2}mv^2 = as^2 \\implies v = s\\sqrt{\\frac{2a}{m}}$$\n$$a_r = \\frac{v^2}{R} = \\frac{2as^2}{mR}, \\quad a_t = v\\frac{dv}{ds} = \\left(s\\sqrt{\\frac{2a}{m}}\\right)\\sqrt{\\frac{2a}{m}} = \\frac{2as}{m}$$\n$$F = m\\sqrt{a_r^2 + a_t^2} = 2as\\sqrt{1 + \\left(\\frac{s}{R}\\right)^2}$$",
    "tags": [
      "MNR 1992",
      "JIPMER 2001",
      "AMU Engg. 1999",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot2d-crit-04",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "Car moves in horizontal track of radius 10 m with constant speed 10 m/s. Plumb bob suspended from roof by 1 m light rod makes angle with track of (g = 10 m/s\u00b2):",
    "options": [
      "Zero",
      "30\u00b0",
      "45\u00b0",
      "60\u00b0"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\tan\\theta = \\frac{v^2}{rg} = \\frac{10^2}{10 \\times 10} = 1 \\implies \\theta = 45^\\circ$$",
    "tags": [
      "IIT 1992",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot2d-crit-05",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "Particle of mass m in circular path of radius r has centripetal acceleration a_c = k\u00b2rt\u00b2. Power delivered to particle is:",
    "options": [
      "2\u03c0 mk\u00b2r\u00b2t",
      "mk\u00b2r\u00b2t",
      "(mk\u2074r\u00b2t\u2075) / 3",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\frac{v^2}{r} = k^2 r t^2 \\implies v = krt \\implies a_t = \\frac{dv}{dt} = kr$$\n$$P = F_t v = (m a_t)v = (mkr)(krt) = mk^2 r^2 t$$",
    "tags": [
      "IIT 1994",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot2d-crit-06",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "String of length L carries mass M and makes (2/\u03c0) rev/sec around vertical axis through fixed end. Tension in string is:",
    "options": [
      "ML",
      "2 ML",
      "4 ML",
      "16 ML"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nFor conical pendulum of length $L$ and radius $R = L\\sin\\theta$:\n$$T\\sin\\theta = M\\omega^2 R = M\\omega^2 (L\\sin\\theta) \\implies T = M\\omega^2 L$$\n$$\\omega = 2\\pi n = 2\\pi\\left(\\frac{2}{\\pi}\\right) = 4\\text{ rad/s} \\implies T = M(4^2)L = 16 ML$$",
    "tags": [
      "BHU 2002",
      "DPMT 2004",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot2d-crit-07",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "Stone of mass 1 kg tied to string of length L = (10/3) m is whirled in vertical circle. If ratio of max tension to min tension is 4 (g = 10 m/s\u00b2), speed at highest point is:",
    "options": [
      "20 m/s",
      "10\u221a3 m/s",
      "5\u221a2 m/s",
      "10 m/s"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\frac{T_B}{T_T} = \\frac{v_B^2/L + g}{v_T^2/L - g} = 4 \\implies v_B^2 + gL = 4(v_T^2 - gL)$$\nSince $v_B^2 = v_T^2 + 4gL$:\n$$v_T^2 + 5gL = 4v_T^2 - 4gL \\implies 3v_T^2 = 9gL \\implies v_T^2 = 3gL = 3(10)\\left(\\frac{10}{3}\\right) = 100 \\implies v_T = 10\\text{ m/s}$$",
    "tags": [
      "CBSE PMT 1990",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot2d-crit-08",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "Particle P slides down frictionless hemispherical bowl with initial horizontal speed v at A. Bead Q moves along horizontal chord AB at constant speed v. Times taken are t_P and t_Q. Then:",
    "options": [
      "t_P < t_Q",
      "t_P = t_Q",
      "t_P > t_Q",
      "All of these"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nParticle P accelerates downwards as it slides, so its horizontal velocity component is always $\\ge v$, covering the same horizontal displacement in less time ($t_P < t_Q$).",
    "tags": [
      "IIT 1993",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot2d-crit-09",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "A bead on horizontal rod at distance L from pivot starts rotating with constant angular acceleration \u03b1 (friction coeff \u03bc). Time after which bead starts slipping is:",
    "options": [
      "\u221a(\u03bc / \u03b1)",
      "\u03bc / \u221a\u03b1",
      "1 / \u221a(\u03bc\u03b1)",
      "Infinitesimal"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- Normal force from rod (tangential): $N = m a_t = m(L\\alpha)$.\n- Limiting friction: $f_s = \\mu N = \\mu mL\\alpha$.\n- Slipping occurs when centrifugal force equals friction:\n  $$m\\omega^2 L = \\mu m L \\alpha \\implies (\\alpha t)^2 L = \\mu L \\alpha \\implies \\alpha^2 t^2 = \\mu\\alpha \\implies t = \\sqrt{\\frac{\\mu}{\\alpha}}$$",
    "tags": [
      "IIT-JEE Screening 2000",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot2d-crit-10",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "A small block is shot into four tracks rising to same height with same initial speed. Normal reaction at highest point is maximum in:",
    "options": [
      "Track (a) with smallest radius of curvature at crest",
      "Track (b)",
      "Track (c)",
      "Track (d)"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAt highest point: $N = mg - \\frac{mv^2}{r}$ (or on concave tracks $N = \\frac{mv^2}{r} - mg$). The track with the smallest radius of curvature $r$ produces the largest contact reaction.",
    "tags": [
      "IIT-JEE Screening 2001",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot2d-crit-11",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "In an oscillating simple pendulum without damping, when displacement of bob is less than maximum, its acceleration vector is directed:",
    "options": [
      "Vertically upward",
      "Along the string towards suspension",
      "Between the string and tangent to trajectory (inward and along motion)",
      "Horizontally"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nResultant acceleration $\\vec{a} = \\vec{a}_c + \\vec{a}_t$ has a radial component along the string and a tangential component along the restoring arc, pointing into the concave interior.",
    "tags": [
      "IIT-JEE Screening 2002",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot2d-crit-12",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "A solid disc rolls clockwise without slipping on horizontal path at speed v. Magnitudes of velocities of top point A, contact point C, and middle rim point B are:",
    "options": [
      "v, v, v",
      "2v, \u221a2v and zero",
      "2v, 2v and zero",
      "2v, \u221a2v and \u221a2v"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- Top point A: $v + v = 2v$.\n- Rightmost point B: $\\sqrt{v^2 + v^2} = \\sqrt{2}v$.\n- Contact point C (instantaneous centre of rotation): $v - v = 0$.",
    "tags": [
      "UPSEAT 2002",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot2d-crit-13",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "Stone tied to string L whirled in vertical circle has speed u at lowest position. Magnitude of change in velocity when string is horizontal is:",
    "options": [
      "\u221a(u\u00b2 - 2gL)",
      "\u221a(2gL)",
      "\u221a(u\u00b2 - gL)",
      "\u221a[2(u\u00b2 - gL)]"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAt horizontal position: $v^2 = u^2 - 2gL$.\nSince initial velocity is horizontal $\\vec{u} = u\\hat{i}$ and horizontal position velocity is vertical $\\vec{v} = v\\hat{j}$:\n$$|\\vec{v} - \\vec{u}| = \\sqrt{u^2 + v^2} = \\sqrt{u^2 + (u^2 - 2gL)} = \\sqrt{2u^2 - 2gL} = \\sqrt{2(u^2 - gL)}$$",
    "tags": [
      "IIT 1998",
      "CBSE PMT 2004",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot2d-crit-14",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "Driver travelling at velocity v suddenly sees broad wall at distance d. He should:",
    "options": [
      "Brake sharply",
      "Turn sharply",
      "Both (a) and (b)",
      "None of the above"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- Stopping by braking: $d_1 = \\frac{v^2}{2\\mu g}$.\n- Stopping by turning: $r = \\frac{v^2}{\\mu g} = 2d_1$.\nBraking requires half the distance of turning, so braking sharply is much safer.",
    "tags": [
      "IIT 1977",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot2d-crit-15",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "Four persons K, L, M, N at corners of square of side d move with speed v such that each heads toward next. They meet after time:",
    "options": [
      "d / v",
      "\u221a2d / v",
      "d / (\u221a2 v)",
      "d / 2v"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nVelocity of approach of K toward L: $v_{\\text{app}} = v - v\\cos 90^\\circ = v$.\n$$t = \\frac{d}{v_{\\text{app}}} = \\frac{d}{v}$$",
    "tags": [
      "IIT 1984",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot2d-crit-16",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Critical Thinking",
    "difficulty": "Hard",
    "questionText": "Coordinates are x(t) = a cos(pt) and y(t) = b sin(pt) with a > b. Then:",
    "options": [
      "Path is an ellipse and velocity and acceleration are normal to each other at t = \u03c0/(2p)",
      "Path is a parabola",
      "Acceleration is directed towards focus",
      "Distance travelled in interval is a"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- Path: $x^2/a^2 + y^2/b^2 = 1$ (Ellipse).\n- At $t = \\frac{\\pi}{2p}$: $\\vec{v} = -ap\\hat{i}, \\vec{a} = -bp^2\\hat{j} \\implies \\vec{v} \\cdot \\vec{a} = 0$ (perpendicular).",
    "tags": [
      "IIT-JEE 1999",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot2d-crit-17",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Critical Thinking",
    "difficulty": "Medium",
    "questionText": "Particle moving eastward at 5 m/s changes to 5 m/s northward in 10 s. Average acceleration is:",
    "options": [
      "Zero",
      "(1/\u221a2) m/s\u00b2 toward north-west",
      "(1/\u221a2) m/s\u00b2 toward north-east",
      "(1/2) m/s\u00b2 toward north-west"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\Delta \\vec{v} = 5\\hat{j} - 5\\hat{i} \\implies |\\Delta \\vec{v}| = 5\\sqrt{2}\\text{ m/s (North-West)}$$\n$$a_{\\text{avg}} = \\frac{5\\sqrt{2}}{10} = \\frac{1}{\\sqrt{2}}\\text{ m/s}^2 \\text{ toward North-West}$$",
    "tags": [
      "IIT 1982",
      "AFMC 1999",
      "Pb. PET 2000",
      "JIPMER 2001",
      "Critical Thinking"
    ]
  },
  {
    "id": "mot2d-graph-01",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "Figure shows four paths for a kicked football. All reach the same maximum height. Rank paths according to initial horizontal velocity component, highest first:",
    "options": [
      "1, 2, 3, 4",
      "2, 3, 4, 1",
      "3, 4, 1, 2",
      "4, 3, 2, 1"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nSame maximum height means identical vertical velocities ($u_y$).\nRange $R = \\frac{2 u_x u_y}{g} \\propto u_x$.\nPath 4 has the largest range, so $u_{x4} > u_{x3} > u_{x2} > u_{x1}$ (Rank: 4, 3, 2, 1).",
    "tags": [
      "AMU Med. 2000",
      "Graphical Questions"
    ]
  },
  {
    "id": "mot2d-graph-02",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Graphical Questions",
    "difficulty": "Medium",
    "questionText": "Path of projectile without air drag is symmetric parabola. If air resistance is NOT ignored, appropriate path is:",
    "options": [
      "Path A (asymmetric with lower apex and steeper descent)",
      "Path B",
      "Path D",
      "Path C"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAir drag dissipates kinetic energy, reducing both peak height and horizontal range, causing a steeper, skewed descent (Path A).",
    "tags": [
      "Graphical Questions"
    ]
  },
  {
    "id": "mot2d-graph-03",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Graphical Questions",
    "difficulty": "Hard",
    "questionText": "Trajectory starts at A(0,2) and passes through (5,3). The point where instantaneous velocity equals average velocity between points is:",
    "options": [
      "(1, 4)",
      "(5, 3)",
      "(3, 4)",
      "(4, 1)"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nSlope of secant line joining $(0,2)$ to $(5,3)$ is $m = \\frac{3 - 2}{5 - 0} = \\frac{1}{5}$. Tangent at point $(5,3)$ matches this average slope.",
    "tags": [
      "Graphical Questions"
    ]
  },
  {
    "id": "mot2d-graph-04",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "Which is the graph between height (h) and time (t) for a projectile projected from ground?",
    "options": [
      "Horizontal line",
      "Linear increase",
      "Inverted parabola starting and ending at h=0",
      "Exponential decay"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$h(t) = (u\\sin\\theta)t - \\frac{1}{2}gt^2$$\nThis is a quadratic equation representing a symmetric inverted parabola.",
    "tags": [
      "Graphical Questions"
    ]
  },
  {
    "id": "mot2d-graph-05",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Graphical Questions",
    "difficulty": "Easy",
    "questionText": "Which is the altitude-time graph for a projectile thrown horizontally from top of a tower?",
    "options": [
      "Straight line decreasing",
      "Concave upward curve",
      "Inverted V",
      "Downward parabolic curve starting at h = H with zero initial slope"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$h(t) = H - \\frac{1}{2}gt^2$$\nStarts at $h = H$ at $t = 0$ with $\\frac{dh}{dt} = 0$, curving downward parabolically.",
    "tags": [
      "Graphical Questions"
    ]
  },
  {
    "id": "mot2d-ar-01",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: In projectile motion, angle between instantaneous velocity and acceleration at highest point is 180\u00b0.\nReason: At highest point, velocity is in horizontal direction only.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Velocity is horizontal and acceleration is vertically downward, so angle is $90^\\circ$, not $180^\\circ$. Assertion is false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-02",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Two particles of different mass projected with same velocity at same angle attain same max height.\nReason: Maximum height of projectile is independent of particle mass.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $H = \\frac{u^2\\sin^2\\theta}{2g}$ is completely independent of mass.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-03",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Maximum horizontal range of projectile is proportional to square of velocity.\nReason: Maximum horizontal range equals maximum height attained.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $R_{\\text{max}} = \\frac{u^2}{g} = 2H_{\\text{max}}$, not equal. Reason is false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-04",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Horizontal range is same for angle of projection \u03b8 and (90\u00b0 - \u03b8).\nReason: Horizontal range is independent of angle of projection.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Range depends on $\\sin 2\\theta$, which is equal for complementary angles. Reason is false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-05",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: For projection angle tan\u207b\u00b9(4), horizontal range and maximum height are equal.\nReason: Maximum range is directly proportional to square of velocity.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $R = 4H\\cot\\theta \\implies R = H$ when $\\tan\\theta = 4$. Reason is true but does not explain the assertion.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-06",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Trajectory of projectile is quadratic in y and linear in x.\nReason: y component of trajectory is independent of x component.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Trajectory is quadratic in $x$ and linear in $y$ ($y = Ax - Bx^2$). Both are false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-07",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: In javelin throw, athlete throws projectile at angle slightly more than 45\u00b0.\nReason: Maximum range does not depend on angle of projection.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Because height of release is above ground level, optimal angle is slightly *less* than $45^\\circ$. Both are false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-08",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: When body is dropped or thrown horizontally from same height, it reaches ground at same time.\nReason: Horizontal velocity has no effect on vertical direction.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Motions along $x$ and $y$ axes are mutually independent; $t = \\sqrt{2h/g}$ for both.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-09",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: When velocity of projection is made n times, time of flight becomes n times.\nReason: Range of projectile does not depend on initial velocity.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $T = \\frac{2u\\sin\\theta}{g} \\propto u$, while $R \\propto u^2$. Reason is false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-10",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Height attained by projectile is 25% of range when projected for maximum range.\nReason: Height is independent of initial velocity.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: At $45^\\circ$, $H = R/4 = 25\\% R$. But $H = \\frac{u^2}{4g} \\propto u^2$, so Reason is false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-11",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: When range is maximum, angle of projection may be 45\u00b0 or 135\u00b0.\nReason: Value of range magnitude remains same, only sign changes.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\sin 2(135^\\circ) = \\sin 270^\\circ = -1$, representing backward maximum range.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-12",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: In order to hit a target, a man should point his rifle in same direction as target.\nReason: Horizontal range of bullet depends on angle of projectile.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Due to gravity drop $y = \\frac{1}{2}gt^2$, rifle must be aimed above the target. Assertion is false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-13",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: In uniform circular motion, velocity and acceleration both change.\nReason: Centripetal acceleration depends on angular velocity.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Direction of velocity and acceleration change continuously. Both are true statements.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-14",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: During a turn, centripetal force should be less than or equal to limiting friction.\nReason: Centripetal force is provided by friction between tyres and road.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\frac{mv^2}{r} \\le \\mu mg$ ensures turning without skidding.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-15",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: When vehicle takes turn on road, it travels along nearly circular path.\nReason: In circular motion, velocity of vehicle remains same.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Velocity vector continuously changes direction. Reason is false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-16",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: As frictional force increases, safe velocity limit on unbanked road increases.\nReason: Banking of roads will increase the value of limiting velocity.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $v_{\\text{max}} = \\sqrt{\\mu r g}$. Both statements are true.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-17",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: If speed is constant, body cannot have path other than circular or straight line.\nReason: It is not possible for a body to have constant speed in accelerated motion.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Any curved 3D or 2D trajectory can be traversed at constant speed with normal acceleration $v^2/\rho$. Both are false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-18",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: In circular motion, work done by centripetal force is zero.\nReason: Centripetal force is perpendicular to displacement.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $W = \\int F\\,ds\\cos 90^\\circ = 0$.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-19",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: In circular motion, centripetal and centrifugal forces balance each other.\nReason: Centripetal and centrifugal forces don't act at same time.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Centripetal force is real in inertial frame, while centrifugal is pseudo in rotating frame; they do not form an action-reaction pair. Both are false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-20",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: If both speed and radius are doubled, centripetal force gets doubled.\nReason: Centripetal force is directly proportional to both speed and radius.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $F = \\frac{mv^2}{r} \\implies F' = \\frac{m(2v)^2}{2r} = 2F$. But $F \\propto v^2/r$, not proportional to $r$. Reason is false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-21",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: When automobile overturns going too fast around curve, inner wheels leave ground first.\nReason: For safe turn, velocity should be less than safe limit.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Load shifts to outer wheels, reducing inner reaction to zero first. Both are true.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-22",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: A safe turn by cyclist should neither be fast nor sharp.\nReason: Bending angle from vertical decreases with increase in velocity.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: $\\tan\\theta = \\frac{v^2}{rg} \\implies \\theta$ increases with velocity. Reason is false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-23",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Improper banking of roads causes wear and tear of tyres.\nReason: Centripetal force is provided by friction when banking is absent/improper.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Lack of banking forces reliance on lateral friction, causing tyre abrasion.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-24",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Cream gets separated from milk due to gravitational force.\nReason: In circular motion gravitational force is equal to centripetal force.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Separation is due to centrifugal pseudo-force in centrifuge. Both are false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-25",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Two similar trains moving along equator in opposite directions at same speed exert equal pressure on rails.\nReason: In uniform circular motion magnitude of acceleration remains constant.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Due to Earth's eastward spin (E\u00f6tv\u00f6s effect), Eastbound train has higher net speed $\\implies$ lower rail pressure than Westbound train. Assertion is false.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-ar-26",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Assertion and Reason",
    "difficulty": "Medium",
    "questionText": "Assertion: Coin placed on phonogram turn-table moves along moving table.\nReason: Rotating table provides necessary centripetal force.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept**: Static friction between coin and table surface provides centripetal force. Both are false as stated.",
    "tags": [
      "Assertion and Reason"
    ]
  },
  {
    "id": "mot2d-set3-01",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Easy",
    "questionText": "Roads are banked on curves so that:",
    "options": [
      "The speeding vehicles may not fall/skid outwards",
      "The frictional force between road and vehicle may be decreased",
      "The wear and tear of tyres may be avoided",
      "The weight of vehicle may be decreased"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nBanking provides horizontal component of normal reaction $N\\sin\\theta = \\frac{mv^2}{r}$, preventing vehicles from skidding outward.",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-02",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Easy",
    "questionText": "In uniform circular motion:",
    "options": [
      "Both velocity and acceleration are constant",
      "Acceleration and speed are constant but velocity changes",
      "Both acceleration and velocity change",
      "Both acceleration and speed are constant"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nBoth velocity and acceleration vectors continuously rotate in direction, so both change.",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-03",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Easy",
    "questionText": "For a body moving in a circular path, the condition for no skidding is:",
    "options": [
      "mv\u00b2/r \u2264 \u03bcmg",
      "mv\u00b2/r \u2265 \u03bcmg",
      "v\u00b2/r = \u03bcg",
      "mv\u00b2/r = \u03bcmg"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\frac{mv^2}{r} \\le f_{\\text{max}} = \\mu mg$$",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-04",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Medium",
    "questionText": "Inside a car moving with uniform speed, a helium balloon is tied to floor. When car takes a left turn, the balloon will:",
    "options": [
      "Continue to remain vertical",
      "Burst",
      "Be thrown to right side",
      "Be thrown to the left side"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nHeavier air in the car moves to the right under centrifugal force, creating a pressure gradient that pushes the lighter helium balloon toward the left (inside of turn).",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-05",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Medium",
    "questionText": "A particle moves on circular path of radius r with speed v. The change in velocity when moving from P to Q (\u2220POQ = 40\u00b0) is:",
    "options": [
      "2v cos 40\u00b0",
      "2v sin 40\u00b0",
      "2v sin 20\u00b0",
      "2v cos 20\u00b0"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$|\\Delta \\vec{v}| = 2v\\sin\\left(\\frac{\\theta}{2}\\right) = 2v\\sin\\left(\\frac{40^\\circ}{2}\\right) = 2v\\sin 20^\\circ$$",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-06",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Easy",
    "questionText": "A body is revolving with uniform speed v in a circle of radius r. The tangential acceleration is:",
    "options": [
      "v/r",
      "v\u00b2/r",
      "Zero",
      "v/r\u00b2"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$a_t = \\frac{dv}{dt} = 0$$ since speed $v$ is constant.",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-07",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Easy",
    "questionText": "A particle does uniform circular motion in horizontal plane (radius 20 cm, centripetal force 10 N). Its kinetic energy is:",
    "options": [
      "0.1 J",
      "0.2 J",
      "2.0 J",
      "1.0 J"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$F = \\frac{mv^2}{r} = 10\\text{ N} \\implies mv^2 = 10r = 10(0.20) = 2\\text{ J}$$\n$$K = \\frac{1}{2}mv^2 = \\frac{1}{2}(2) = 1.0\\text{ J}$$",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-08",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Easy",
    "questionText": "Minimum horizontal velocity given to body of mass m suspended by string l to complete full vertical circle is:",
    "options": [
      "v = \u221a2lg",
      "v = \u221a3lg",
      "v = \u221a4lg",
      "v = \u221a5lg"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v_{\\text{min}} = \\sqrt{5gl}$$",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-09",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Easy",
    "questionText": "Centripetal force is F. If angular velocity is doubled, keeping radius same, new force will be:",
    "options": [
      "2F",
      "F\u00b2",
      "4F",
      "F/2"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$F = m\\omega^2 r \\propto \\omega^2 \\implies F' = (2)^2 F = 4F$$",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-10",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Easy",
    "questionText": "If angular velocity is kept same but radius is halved, new force will be:",
    "options": [
      "2F",
      "F\u00b2",
      "F/2",
      "F/4"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$F = m\\omega^2 r \\propto r \\implies F' = \\frac{F}{2}$$",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-11",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Easy",
    "questionText": "If centripetal force F is kept constant but angular velocity is doubled, new radius will be:",
    "options": [
      "2R",
      "R/2",
      "R/4",
      "4R"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$F = m\\omega^2 R = \\text{const} \\implies R \\propto \\frac{1}{\\omega^2} \\implies R' = \\frac{R}{2^2} = \\frac{R}{4}$$",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-12",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Medium",
    "questionText": "A small body of mass m slides down from top of frictionless hemisphere of radius r. Height at which it loses contact is:",
    "options": [
      "3r / 2",
      "2r / 3",
      "1/2 gt\u00b2",
      "v\u00b2 / 2g"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$h = \\frac{2}{3}r$$ from the ground level.",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-13",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Easy",
    "questionText": "Difference in kinetic energy of body rotating in vertical circle of radius r at top and bottom is:",
    "options": [
      "mg / r",
      "2mg / r",
      "2mgr",
      "mgr"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\Delta K = mg(\\Delta h) = mg(2r) = 2mgr$$",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-14",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Easy",
    "questionText": "Car on circular road of radius r increases speed at rate 'a' m/s\u00b2. Resultant acceleration is:",
    "options": [
      "\u221a[(v\u00b2/r)\u00b2 - a\u00b2]",
      "\u221a[(v\u2074/r\u00b2) + a\u00b2]",
      "\u221a[(v\u2074/r\u00b2) - a\u00b2]",
      "\u221a[(v\u00b2/r) + a\u00b2]"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$a_{\\text{res}} = \\sqrt{a_c^2 + a_t^2} = \\sqrt{\\left(\\frac{v^2}{r}\\right)^2 + a^2} = \\sqrt{\\frac{v^4}{r^2} + a^2}$$",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-15",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Medium",
    "questionText": "Ball of mass 0.1 kg suspended by string is displaced 60\u00b0 and released. Tension at mean position is (g = 9.8 m/s\u00b2):",
    "options": [
      "19.6 N",
      "1.96 N",
      "9.8 N",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$T = mg + 2mg(1 - \\cos 60^\\circ) = mg + 2mg(0.5) = 2mg = 2(0.1)(9.8) = 1.96\\text{ N}$$",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-16",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Medium",
    "questionText": "Aeroplane at 200 m/s at height 8.0 \u00d7 10\u00b3 m drops bomb on target. Horizontal distance from target to release is (g = 9.8 m/s\u00b2):",
    "options": [
      "7.234 km",
      "8.081 km",
      "8.714 km",
      "9.124 km"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$t = \\sqrt{\\frac{2(8000)}{9.8}} = \\sqrt{1632.65} \\approx 40.406\\text{ s}$$\n$$x = 200 \\times 40.406 = 8081.2\\text{ m} \\approx 8.081\\text{ km}$$",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-17",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Medium",
    "questionText": "Body projected horizontally with speed 20 m/s. Its speed after 5 seconds is (g = 10 m/s\u00b2):",
    "options": [
      "54 m/s",
      "20 m/s",
      "50 m/s",
      "70 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$v_x = 20\\text{ m/s}, \\quad v_y = gt = 10(5) = 50\\text{ m/s}$$\n$$v = \\sqrt{20^2 + 50^2} = \\sqrt{400 + 2500} = \\sqrt{2900} \\approx 53.85\\text{ m/s} \\approx 54\\text{ m/s}$$",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-18",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Easy",
    "questionText": "From roof of height h, one particle is thrown downwards with u and another horizontally with u. Ratio of striking speeds is:",
    "options": [
      "\u221a(2gh + u\u00b2) : u",
      "1 : 2",
      "1 : 1",
      "\u221a(2gh + u\u00b2) : \u221a2gh"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nBy conservation of energy: $\\frac{1}{2}mv^2 = \\frac{1}{2}mu^2 + mgh \\implies v = \\sqrt{u^2 + 2gh}$ for both particles (ratio 1 : 1).",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-19",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Easy",
    "questionText": "Projectile at 30\u00b0 has range R. At 60\u00b0 with same initial velocity, range will be:",
    "options": [
      "R",
      "2R",
      "R/2",
      "R\u00b2"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nComplementary angles $30^\\circ$ and $60^\\circ$ yield identical horizontal range $R$.",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-20",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Easy",
    "questionText": "At highest point of path of a projectile, its:",
    "options": [
      "Kinetic energy is maximum",
      "Potential energy is minimum",
      "Kinetic energy is minimum",
      "Total energy is maximum"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nAt apex, $v_y = 0$, so speed is minimum ($v = u\\cos\\theta$), making kinetic energy minimum.",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-21",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Easy",
    "questionText": "Cricket ball hit at 30\u00b0 with kinetic energy K. Kinetic energy at highest point is:",
    "options": [
      "Zero",
      "K / 4",
      "K / 2",
      "3K / 4"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$K' = K\\cos^2 30^\\circ = K\\left(\\frac{\\sqrt{3}}{2}\\right)^2 = \\frac{3K}{4}$$",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-22",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Medium",
    "questionText": "Shell fired at angle \u03b8 with muzzle velocity v\u2080 towards cliff distance D away. Height at which shell strikes cliff is:",
    "options": [
      "D sin\u03b8 - gD\u00b2 / (2v\u2080\u00b2 sin\u00b2\u03b8)",
      "D cos\u03b8 - gD\u00b2 / (2v\u2080\u00b2 cos\u00b2\u03b8)",
      "D tan\u03b8 - gD\u00b2 / (2v\u2080\u00b2 cos\u00b2\u03b8)",
      "D tan\u03b8 - gD\u00b2 / (2v\u2080\u00b2 sin\u00b2\u03b8)"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nTrajectory equation: $y = x\\tan\\theta - \\frac{gx^2}{2v_0^2\\cos^2\\theta}$. Substituting $x = D$ gives $h = D\\tan\\theta - \\frac{gD^2}{2v_0^2\\cos^2\\theta}$.",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-23",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Hard",
    "questionText": "Stone projected at 50 m/s at 30\u00b0 crosses wall after 3 sec (g = 10 m/s\u00b2). How far beyond wall will it strike ground?",
    "options": [
      "90.2 m",
      "89.6 m",
      "86.6 m",
      "70.2 m"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n- Total flight time $T = \\frac{2(50)\\sin 30^\\circ}{10} = 5\\text{ s}$.\n- Remaining time after wall $= 5 - 3 = 2\\text{ s}$.\n- Distance beyond wall: $x = (u\\cos 30^\\circ)t_{\\text{rem}} = \\left(50 \\times \\frac{\\sqrt{3}}{2}\\right)(2) = 50\\sqrt{3} \\approx 86.6\\text{ m}$.",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-24",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Easy",
    "questionText": "Body of mass m projected at 45\u00b0 with horizontal. Total change in momentum when striking ground is:",
    "options": [
      "2mv",
      "\u221a2 mv",
      "mv",
      "mv / \u221a2"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$\\Delta p = 2mv\\sin 45^\\circ = 2mv\\left(\\frac{1}{\\sqrt{2}}\\right) = \\sqrt{2}mv$$",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-25",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Medium",
    "questionText": "Ball m thrown vertically up, ball 2m thrown at angle \u03b8 with vertical. Both stay in air for same period. Ratio of heights attained is:",
    "options": [
      "2 : 1",
      "1 : cos\u03b8",
      "1 : 1",
      "cos\u03b8 : 1"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\nEqual time of flight implies identical vertical initial velocities ($u_{y1} = u_{y2}$). Hence $H = \\frac{u_y^2}{2g}$ is identical (ratio 1 : 1).",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  },
  {
    "id": "mot2d-set3-26",
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "Self Evaluation Test - 3",
    "difficulty": "Medium",
    "questionText": "Particle projected with velocity v has range on horizontal plane twice greatest height (R = 2H). Range of projectile is:",
    "options": [
      "4v\u00b2 / (5g)",
      "4g / (5v\u00b2)",
      "v\u00b2 / g",
      "4v\u00b2 / (\u221a5 g)"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Fundamental Concept**:\n$$R = 2H \\implies 4H\\cot\\theta = 2H \\implies \\cot\\theta = \\frac{1}{2} \\implies \\sin\\theta = \\frac{2}{\\sqrt{5}}, \\cos\\theta = \\frac{1}{\\sqrt{5}}$$\n$$R = \\frac{2v^2\\sin\\theta\\cos\\theta}{g} = \\frac{2v^2}{g}\\left(\\frac{2}{\\sqrt{5}}\\right)\\left(\\frac{1}{\\sqrt{5}}\\right) = \\frac{4v^2}{5g}$$",
    "tags": [
      "Self Evaluation Test - 3"
    ]
  }
];

export const MOTION_2D_QUESTIONS: Question[] = MOTION_2D_BOOK_QUESTIONS;
