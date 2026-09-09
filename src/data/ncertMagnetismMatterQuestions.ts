import { Question } from '../types';

export const NCERT_MAGNETISM_MATTER_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch20-01",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Axial Magnetic Field of Short Bar Magnet",
    "difficulty": "Easy",
    "questionText": "A short bar magnet of magnetic moment 10 A·m² is placed along the x-axis at the origin. The magnetic field at a point (5 m, 0) on its axis is:",
    "options": [
      "0.8 × 10⁻⁸ T",
      "1.6 × 10⁻⁸ T",
      "10⁻⁸ T",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "For a short bar magnet on its axial line: B_axial = (μ₀ / 4π) · (2M / r³).\nB = 10⁻⁷ × [2 × 10 / 5³] = 10⁻⁷ × (20 / 125) = 10⁻⁷ × 0.16 = 1.6 × 10⁻⁸ T.",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Bar Magnet"]
  },
  {
    "id": "ncert-phy-ch20-02",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Gauss's Law for Magnetism",
    "difficulty": "Easy",
    "questionText": "According to Gauss's law in magnetism, the net magnetic flux through any arbitrary closed Gaussian surface is:",
    "options": [
      "μ₀ i",
      "μ₀",
      "i",
      "Zero"
    ],
    "correctAnswer": 3,
    "explanation": "Gauss's law in magnetism states that ∮ B⃗ · dA⃗ = 0 for any closed surface. This fundamental law signifies that isolated magnetic monopoles do not exist in nature; magnetic field lines always form continuous closed loops.",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Gauss's Law for Magnetism"]
  },
  {
    "id": "ncert-phy-ch20-03",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Demagnetization Current in Solenoid",
    "difficulty": "Medium",
    "questionText": "The coercivity of a small bar magnet is 10³ A/m. It is placed inside a 10 cm long solenoid with 200 turns. The electric current required to pass through the solenoid to completely demagnetize the magnet is:",
    "options": [
      "0.5 A",
      "2 A",
      "3 A",
      "4 A"
    ],
    "correctAnswer": 0,
    "explanation": "The magnetic intensity inside a solenoid is H = n I = (N / L) I.\nCoercivity H = 10³ A/m, N = 200 turns, and L = 10 cm = 0.1 m.\nn = 200 / 0.1 = 2000 turns/m.\n1000 = 2000 × I => I = 1000 / 2000 = 0.5 A.",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Hysteresis"]
  },
  {
    "id": "ncert-phy-ch20-04",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Total Earth's Magnetic Field from Dip",
    "difficulty": "Medium",
    "questionText": "At a certain location, the angle of dip is 37° and the vertical component of Earth's magnetic field is 0.5 G. The total magnetic field of the Earth at this location is:",
    "options": [
      "0.3 G",
      "0.4 G",
      "0.83 G",
      "0.5 G"
    ],
    "correctAnswer": 2,
    "explanation": "Vertical component B_V = B_E sin δ.\nGiven B_V = 0.5 G and δ = 37° (where sin 37° ≈ 3/5 = 0.6):\nB_E = B_V / sin 37° = 0.5 / 0.6 = 5 / 6 ≈ 0.833 G.",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Earth's Magnetism"]
  },
  {
    "id": "ncert-phy-ch20-05",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Properties of Bar Magnets",
    "difficulty": "Easy",
    "questionText": "Which of the following statements regarding bar magnets is INCORRECT?",
    "options": [
      "Magnetic moment is a vector quantity directed from south pole to north pole",
      "Geometrical length of a bar magnet is less than its magnetic length",
      "Magnetic field lines inside a bar magnet run from the south pole to the north pole",
      "Magnetic pole strength is a scalar quantity measured in A·m"
    ],
    "correctAnswer": 1,
    "explanation": "The magnetic poles lie slightly inside the geometric ends of a bar magnet. Hence, the magnetic length (2l) is approximately 84% of the geometrical length (L_geom), meaning magnetic length is LESS than geometric length. Statement (2) is false/incorrect.",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Bar Magnet"]
  },
  {
    "id": "ncert-phy-ch20-06",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Vibration Magnetometer Period in Changed Field",
    "difficulty": "Medium",
    "questionText": "A freely suspended magnetic needle makes 10 oscillations per minute at a location. At another place where the horizontal magnetic field is doubled, its time period of oscillation will be:",
    "options": [
      "3 s",
      "2 s",
      "3√2 s",
      "2√3 s"
    ],
    "correctAnswer": 2,
    "explanation": "Initial time period T₁ = 60 s / 10 = 6 s.\nTime period of oscillation is T = 2π √(I / (M B)) => T ∝ 1 / √B.\nWhen B' = 2B: T₂ = T₁ / √2 = 6 / √2 = 3√2 s.",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Vibration Magnetometer"]
  },
  {
    "id": "ncert-phy-ch20-07",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Angle of Dip from Components",
    "difficulty": "Easy",
    "questionText": "The vertical component of Earth's magnetic field at a place is 75% of the horizontal component. The angle of dip at that place is:",
    "options": [
      "53°",
      "37°",
      "45°",
      "60°"
    ],
    "correctAnswer": 1,
    "explanation": "tan δ = B_V / B_H.\nGiven B_V = 0.75 B_H = (3/4) B_H.\ntan δ = 3/4 => δ = 37°.",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Earth's Magnetism"]
  },
  {
    "id": "ncert-phy-ch20-08",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Apparent Dip Calculation",
    "difficulty": "Medium",
    "questionText": "The true angle of dip at a place is 60°. If the vertical plane of the dip circle is turned through 30° from the magnetic meridian, the apparent dip angle δ' will be:",
    "options": [
      "tan⁻¹(1)",
      "tan⁻¹(4/5)",
      "tan⁻¹(3/5)",
      "tan⁻¹(2)"
    ],
    "correctAnswer": 3,
    "explanation": "Relation between real dip δ and apparent dip δ' in a plane inclined at angle α to the magnetic meridian:\ntan δ' = tan δ / cos α.\nHere δ = 60° and α = 30°:\ntan δ' = tan 60° / cos 30° = √3 / (√3 / 2) = 2 => δ' = tan⁻¹(2).",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Earth's Magnetism"]
  },
  {
    "id": "ncert-phy-ch20-09",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Superposition of Magnetic Fields of Perpendicular Magnets",
    "difficulty": "Hard",
    "questionText": "Two identical short bar magnets of magnetic moment M each are placed such that a point O lies on the equatorial line of one magnet and on the axial line of the other magnet, both at the same distance r (r >> size of magnet). The net magnetic field at O is:",
    "options": [
      "(μ₀ / 4π) · (M / r³)",
      "(μ₀ / 4π) · (√3 M / r³)",
      "(μ₀ / 4π) · (√5 M / r³)",
      "(μ₀ / 4π) · (2 M / r³)"
    ],
    "correctAnswer": 2,
    "explanation": "Field on the axial line: B₁ = (μ₀ / 4π) · (2M / r³) along the axis.\nField on the equatorial line: B₂ = (μ₀ / 4π) · (M / r³) perpendicular to the axis.\nSince B₁ and B₂ are mutually perpendicular:\nB_net = √(B₁² + B₂²) = (μ₀ / 4π) · (M / r³) · √(2² + 1²) = (μ₀ / 4π) · (√5 M / r³).",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Bar Magnet"]
  },
  {
    "id": "ncert-phy-ch20-10",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Equilibrium Orientation in Perpendicular Fields",
    "difficulty": "Medium",
    "questionText": "A bar magnet of magnetic moment M is gently placed inside two mutually perpendicular uniform magnetic fields B_V = 6 T (vertical) and B_H = 2 T (horizontal). The net torque on the bar magnet will be zero when it makes an angle θ with the vertical field such that:",
    "options": [
      "θ = tan⁻¹(3/2)",
      "θ = tan⁻¹(1/3)",
      "θ = tan⁻¹(3)",
      "θ = tan⁻¹(2/3)"
    ],
    "correctAnswer": 1,
    "explanation": "Net torque is zero when the magnet aligns along the resultant magnetic field vector B⃗_net = B_H î + B_V ĵ.\nThe angle θ made with the vertical (y-axis) satisfies: tan θ = B_H / B_V = 2 T / 6 T = 1/3 => θ = tan⁻¹(1/3).",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Magnetic Torque"]
  },
  {
    "id": "ncert-phy-ch20-11",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Work Done Rotating Magnet in Uniform Field",
    "difficulty": "Medium",
    "questionText": "A bar magnet of magnetic moment M is suspended in a uniform magnetic field B. The work done by an external agent to rotate it slowly from stable equilibrium to an angle of 120° with the field is:",
    "options": [
      "(3/2) MB",
      "(1/2) MB",
      "MB",
      "-MB / 2"
    ],
    "correctAnswer": 0,
    "explanation": "Stable equilibrium corresponds to θ₁ = 0°. Final position is θ₂ = 120°.\nWork done W = MB (cos θ₁ - cos θ₂) = MB [cos 0° - cos 120°] = MB [1 - (-1/2)] = (3/2) MB.",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Bar Magnet"]
  },
  {
    "id": "ncert-phy-ch20-12",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Elements of Earth's Magnetic Field",
    "difficulty": "Easy",
    "questionText": "The three standard magnetic elements required to completely specify the Earth's magnetic field at any point on the surface are:",
    "options": [
      "Magnetic declination, angle of dip, and horizontal component of Earth's field",
      "Magnetic declination, magnetic latitude, and total field",
      "Angle of dip, vertical component, and geographical longitude",
      "Pole strength, magnetic length, and susceptibility"
    ],
    "correctAnswer": 0,
    "explanation": "The three classical magnetic elements of the Earth are: (1) Magnetic Declination (θ or D), (2) Magnetic Inclination or Angle of Dip (δ or I), and (3) Horizontal Component of Earth's magnetic field (B_H or H).",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Earth's Magnetism"]
  },
  {
    "id": "ncert-phy-ch20-13",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Hemispheric Location from Sign of Dip Angle",
    "difficulty": "Easy",
    "questionText": "At a point A on the Earth's surface, the angle of dip is δ = +25°. At a point B on the Earth's surface, the angle of dip is δ = -25°. We can interpret that: [NEET-2019]",
    "options": [
      "A and B are both located in the northern hemisphere",
      "A is in the southern hemisphere and B is in the northern hemisphere",
      "A is located in the northern hemisphere and B is located in the southern hemisphere",
      "A and B are both located in the southern hemisphere"
    ],
    "correctAnswer": 2,
    "explanation": "By convention, angle of dip is positive in the northern hemisphere (where the north pole of a dip needle dips below the horizontal) and negative in the southern hemisphere (where the north pole tilts upward). Hence A is in the northern hemisphere and B is in the southern hemisphere.",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Earth's Magnetism", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch20-14",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Orthogonal Planes Apparent Dip Relation",
    "difficulty": "Medium",
    "questionText": "If θ₁ and θ₂ are the apparent angles of dip observed in two vertical planes at right angles to each other, then the true angle of dip θ is given by: [NEET-2017]",
    "options": [
      "cot² θ = cot² θ₁ + cot² θ₂",
      "tan² θ = tan² θ₁ + tan² θ₂",
      "cot² θ = cot² θ₁ - cot² θ₂",
      "tan² θ = tan² θ₁ - tan² θ₂"
    ],
    "correctAnswer": 0,
    "explanation": "In plane 1 at angle α: tan θ₁ = tan θ / cos α => cot θ₁ = cot θ cos α.\nIn plane 2 at (90° - α): tan θ₂ = tan θ / sin α => cot θ₂ = cot θ sin α.\nSquaring and adding:\ncot² θ₁ + cot² θ₂ = cot² θ (cos² α + sin² α) = cot² θ.",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Earth's Magnetism", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch20-15",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Torque and Work on Suspended Bar Magnet",
    "difficulty": "Medium",
    "questionText": "A bar magnet is hung in a uniform horizontal magnetic field in its equilibrium position. The energy required to rotate it by 60° is W. The torque required to keep the magnet in this new position is: [NEET (Phase-2) 2016]",
    "options": [
      "W / √3",
      "√3 W",
      "(√3 / 2) W",
      "(2 / √3) W"
    ],
    "correctAnswer": 1,
    "explanation": "Work done W = MB (1 - cos 60°) = MB (1 - 1/2) = MB / 2 => MB = 2W.\nTorque required at 60°: τ = MB sin 60° = (2W) × (√3 / 2) = √3 W.",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Magnetic Torque", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch20-16",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Sign of Magnetic Susceptibility",
    "difficulty": "Easy",
    "questionText": "The magnetic susceptibility (χ) is negative for: [NEET-2016]",
    "options": [
      "Paramagnetic and ferromagnetic materials",
      "Diamagnetic material only",
      "Paramagnetic material only",
      "Ferromagnetic material only"
    ],
    "correctAnswer": 1,
    "explanation": "Diamagnetic materials acquire feeble magnetization in a direction opposite to the applied magnetizing field, giving a small negative magnetic susceptibility (χ < 0). For paramagnets and ferromagnets, χ is always positive.",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Magnetic Materials", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch20-17",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Dipole Moment of Bent Arc Magnet",
    "difficulty": "Medium",
    "questionText": "A bar magnet of length l and magnetic dipole moment M is bent in the form of a circular arc subtending an angle of 60° at its centre. The new magnetic dipole moment will be: [NEET-2013]",
    "options": [
      "(3 / π) M",
      "(2 / π) M",
      "M / 2",
      "M"
    ],
    "correctAnswer": 0,
    "explanation": "Length of arc l = R θ = R (π / 3) => R = 3l / π.\nThe straight-line separation between the two poles (the chord of 60°) is d = 2 R sin(60°/2) = 2 R sin 30° = R = 3l / π.\nNew magnetic dipole moment M' = m · d = m (3l / π) = (3/π) (m · l) = (3 / π) M.",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Bar Magnet", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch20-18",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Horizontal Compass Needle at Geomagnetic Pole",
    "difficulty": "Easy",
    "questionText": "A compass needle which is constrained to move only in a horizontal plane is taken to the Earth's geomagnetic pole. It: [AIPMT-2012]",
    "options": [
      "Will stay in north-south direction only",
      "Will stay in east-west direction only",
      "Will become completely rigid showing no motion",
      "Can point and stay in any arbitrary horizontal direction"
    ],
    "correctAnswer": 3,
    "explanation": "At the geomagnetic poles, the Earth's magnetic field is entirely vertical (B_V = B_E) and the horizontal component is zero (B_H = 0). A needle constrained to rotate horizontally experiences zero horizontal magnetic torque and can rest stably in any direction.",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Earth's Magnetism", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch20-19",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Torque from Work Done to Rotate Needle",
    "difficulty": "Medium",
    "questionText": "A magnetic needle suspended parallel to a uniform magnetic field requires √3 J of work to turn it through 60°. The torque needed to maintain the needle in this position will be: [AIPMT-2012]",
    "options": [
      "2√3 N·m",
      "3 N·m",
      "√3 N·m",
      "(3/2) N·m"
    ],
    "correctAnswer": 1,
    "explanation": "W = MB (1 - cos 60°) = 0.5 MB.\nGiven W = √3 J => 0.5 MB = √3 => MB = 2√3 J.\nTorque at 60°: τ = MB sin 60° = (2√3) × (√3 / 2) = 3 N·m.",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Magnetic Torque", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch20-20",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Potential Energy in Stable Equilibrium",
    "difficulty": "Easy",
    "questionText": "A short bar magnet of magnetic moment 0.4 J·T⁻¹ is placed in a uniform magnetic field of 0.16 T. The magnet is in stable equilibrium when its potential energy is: [AIPMT-2011]",
    "options": [
      "-0.082 J",
      "+0.064 J",
      "-0.064 J",
      "Zero"
    ],
    "correctAnswer": 2,
    "explanation": "Stable equilibrium occurs when the magnetic moment is aligned parallel to the magnetic field (θ = 0°).\nU_min = -MB cos 0° = -MB = -(0.4 J·T⁻¹) × (0.16 T) = -0.064 J.",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Bar Magnet", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch20-21",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Material Properties of Electromagnet Cores",
    "difficulty": "Easy",
    "questionText": "Soft iron is universally chosen as the core material for electromagnets and transformer cores because it possesses: [AIPMT-2010]",
    "options": [
      "High retentivity and low coercive force",
      "Low retentivity and high coercive force",
      "High retentivity and high coercive force",
      "High permeability and low coercivity (low retentivity and low hysteresis loss)"
    ],
    "correctAnswer": 3,
    "explanation": "An electromagnet should easily magnetize to saturation when current is switched on (requiring high magnetic permeability) and immediately demagnetize when current is switched off (requiring low retentivity and low coercivity, minimizing hysteresis energy loss).",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Hysteresis", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch20-22",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Oscillation Period in Opposing Added Field",
    "difficulty": "Hard",
    "questionText": "A vibration magnetometer in the magnetic meridian has a small bar magnet executing oscillations with a period of 2 s in the Earth's horizontal field of 24 μT. When an opposing horizontal field of 18 μT is produced by an external wire, the new oscillation period will be: [AIPMT-2010]",
    "options": [
      "4 s",
      "1 s",
      "2 s",
      "3 s"
    ],
    "correctAnswer": 0,
    "explanation": "T = 2π √(I / (M B_net)).\nInitial field B₁ = 24 μT, period T₁ = 2 s.\nNew opposing field: B₂ = 24 - 18 = 6 μT.\nT₂ / T₁ = √(B₁ / B₂) = √(24 / 6) = √4 = 2.\nT₂ = 2 × T₁ = 2 × 2 s = 4 s.",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Vibration Magnetometer", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch20-23",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Atomic Dipole Moments in Diamagnets",
    "difficulty": "Easy",
    "questionText": "The net magnetic dipole moment of an individual isolated atom of a diamagnetic substance is: [AIPMT-2010]",
    "options": [
      "Much greater than one",
      "1",
      "Between zero and one",
      "Equal to zero"
    ],
    "correctAnswer": 3,
    "explanation": "In diamagnetic materials, electrons are paired with opposite orbital and spin angular momenta, so their individual magnetic moments cancel out completely. The net intrinsic magnetic dipole moment of an isolated atom is exactly zero.",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Magnetic Materials", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch20-24",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Stationary Electric Charge Near Bar Magnets",
    "difficulty": "Easy",
    "questionText": "Two identical bar magnets are placed fixed with their centres at a distance d apart. A stationary electric charge Q is placed midway at point P in the gap between them. The magnetic force on the charge Q is: [AIPMT-2010]",
    "options": [
      "Zero",
      "Directed along the axis of magnets",
      "Directed perpendicular to the axis",
      "Directed out of the plane"
    ],
    "correctAnswer": 0,
    "explanation": "The magnetic force on a charged particle is given by the Lorentz magnetic force F⃗ = q (v⃗ × B⃗). Because the charge is stationary (velocity v = 0), the magnetic force exerted on it is strictly zero, regardless of how strong the local magnetic field is.",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Magnetic Force", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch20-25",
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "Curie Temperature Transition",
    "difficulty": "Easy",
    "questionText": "Curie temperature is defined as the critical temperature above which: [AIPMT-2008]",
    "options": [
      "A ferromagnetic material becomes a diamagnetic material",
      "A ferromagnetic material becomes a paramagnetic material",
      "A paramagnetic material becomes a diamagnetic material",
      "A paramagnetic material becomes a ferromagnetic material"
    ],
    "correctAnswer": 1,
    "explanation": "At temperatures above the Curie temperature (T_C), thermal agitation destroys domain alignment in ferromagnetic materials, causing them to transition into ordinary paramagnetic substances obeying the Curie-Weiss law: χ = C / (T - T_C).",
    "tags": ["NCERT NEET Physics", "Magnetism and Matter", "Curie's Law", "NEET PYQ"]
  }
];
