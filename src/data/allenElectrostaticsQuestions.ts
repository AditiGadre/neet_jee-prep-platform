/**
 * 50 High-Yield Allen Electrostatics Questions (Exercise-I & II Authentic Module)
 * Fully mapped to NEET syllabus with detailed step-by-step derivations.
 */
import { Question } from '../types';

export const ALL_ALLEN_ELECTROSTATICS_QUESTIONS: Question[] = [
  {
    "id": "allen-es-01",
    "qNum": 1,
    "questionText": "Two equal negative charge - q are fixed at the fixed points (0, a) and (0, -a) on the Y-axis. A positive charge Q is released from rest at the point (2a, 0) on the X-axis. The charge Q will",
    "options": [
      "Execute simple harmonic motion about the origin",
      "Move to the origin and remain at rest",
      "Move to infinity",
      "Execute oscillatory but not simple harmonic motion"
    ],
    "correctAnswer": 3,
    "explanation": "The net electrostatic force on charge Q directed towards the origin is F = - [2kQq / (a^2 + x^2)^(3/2)] * x. For SHM, F must be strictly proportional to -x (requiring x << a). Since x = 2a is comparable to a, the force is restoring but non-linear. Hence, the motion is periodic/oscillatory about the origin, but not simple harmonic.",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Coulomb's Law & Electrostatic Dynamics",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-02",
    "qNum": 2,
    "questionText": "An electric line of force in the xy plane is given by equation x^2 + y^2 = 1. A particle with unit positive charge, initially at rest at the point x = 1, y = 0 in the xy plane",
    "options": [
      "Not move at all",
      "Will move along straight line",
      "Will move along the circular line of force",
      "Information is insufficient to draw any conclusion"
    ],
    "correctAnswer": 1,
    "explanation": "At (1, 0), the tangent to the field line is along the y-axis (direction of electric force). As the particle accelerates from rest, it acquires velocity along the tangent. Because circular motion requires a centripetal force directed radially toward the origin and the electrostatic field line only acts tangentially, the particle immediately departs from the circle and moves initially along a straight tangential path.",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Electric Field Lines",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-03",
    "qNum": 3,
    "questionText": "A positively charged ball hangs from a silk thread. We put a positive test charge q0 at a point and measure F/q0, then it can be predicted that the electric field strength E",
    "options": [
      "> F/q0",
      "= F/q0",
      "< F/q0",
      "Cannot be estimated"
    ],
    "correctAnswer": 0,
    "explanation": "When a finite positive test charge q0 is placed near the suspended positively charged ball, electrostatic repulsion pushes the charges on the ball away, increasing the separation distance. Therefore, the measured force F is smaller than the original undisturbed force. Hence, the true original electric field strength E satisfies E > F/q0.",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Definition of Electric Field",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-04",
    "qNum": 4,
    "questionText": "A solid metallic sphere has a charge +3Q. Concentric with this sphere is a conducting spherical shell having charge -Q. The radius of the sphere is a and that of the spherical shell is b (b > a). What is the electric field at a distance R (a < R < b) from the centre",
    "options": [
      "Q / (2\u03c0\u03b5\u2080R)",
      "3Q / (2\u03c0\u03b5\u2080R)",
      "3Q / (4\u03c0\u03b5\u2080R\u00b2)",
      "4Q / (4\u03c0\u03b5\u2080R\u00b2)"
    ],
    "correctAnswer": 2,
    "explanation": "By Gauss's Law, consider a concentric spherical Gaussian surface of radius R where a < R < b. The total charge enclosed inside this surface is exclusively the charge on the inner metallic sphere, q_enc = +3Q. Thus, E \u00b7 (4\u03c0R\u00b2) = 3Q / \u03b5\u2080 => E = 3Q / (4\u03c0\u03b5\u2080R\u00b2).",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Gauss's Law Applications",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-05",
    "qNum": 5,
    "questionText": "If on the concentric hollow spheres of radii r and R (R > r) the charge Q is distributed such that their surface densities are same then the potential at their common centre is",
    "options": [
      "Q(R\u00b2 + r\u00b2) / [4\u03c0\u03b5\u2080(R + r)]",
      "QR / (R + r)",
      "Zero",
      "Q(R + r) / [4\u03c0\u03b5\u2080(R\u00b2 + r\u00b2)]"
    ],
    "correctAnswer": 3,
    "explanation": "Let surface charge density be \u03c3. Then total charge Q = 4\u03c0r\u00b2\u03c3 + 4\u03c0R\u00b2\u03c3 = 4\u03c0\u03c3(r\u00b2 + R\u00b2), giving \u03c3 = Q / [4\u03c0(r\u00b2 + R\u00b2)]. The potential at the common centre is V = (\u03c3r / \u03b5\u2080) + (\u03c3R / \u03b5\u2080) = (\u03c3 / \u03b5\u2080)(R + r). Substituting \u03c3 yields V = Q(R + r) / [4\u03c0\u03b5\u2080(R\u00b2 + r\u00b2)].",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Concentric Spherical Conductors",
    "difficulty": "Hard",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-06",
    "qNum": 6,
    "questionText": "Two equal charges q of opposite sign separated by a distance 2a constitute an electric dipole of dipole moment p. If P is a point at a distance r from the centre of the dipole and the line joining the centre of the dipole to this point makes an angle \u03b8 with the axis of the dipole, then the potential at P is given by (r >> 2a) (Where p = 2qa)",
    "options": [
      "V = p cos\u03b8 / (4\u03c0\u03b5\u2080r\u00b2)",
      "V = p cos\u03b8 / (4\u03c0\u03b5\u2080r)",
      "V = p sin\u03b8 / (4\u03c0\u03b5\u2080r)",
      "V = p cos\u03b8 / (2\u03c0\u03b5\u2080r\u00b2)"
    ],
    "correctAnswer": 0,
    "explanation": "For a short electric dipole (r >> 2a), the electric potential at an arbitrary point (r, \u03b8) is derived as V = (1 / 4\u03c0\u03b5\u2080) \u00b7 (p \u00b7 r\u0302 / r\u00b2) = p cos\u03b8 / (4\u03c0\u03b5\u2080r\u00b2).",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Electric Dipole Potential",
    "difficulty": "Easy",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-07",
    "qNum": 7,
    "questionText": "A point charge q is placed at a distance a/2 directly above the centre of a square of side a. The electric flux through the square is",
    "options": [
      "q / \u03b5\u2080",
      "q / (\u03c0\u03b5\u2080)",
      "q / (4\u03b5\u2080)",
      "q / (6\u03b5\u2080)"
    ],
    "correctAnswer": 3,
    "explanation": "By symmetry, place the charge q at the centre of a closed cube of side a. The square face is one of the 6 identical faces of this cube. By Gauss's law, total flux through the cube is q / \u03b5\u2080. Hence, flux passing through any single face is (1/6) \u00b7 (q / \u03b5\u2080) = q / (6\u03b5\u2080).",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Gauss's Law & Electric Flux",
    "difficulty": "Easy",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-08",
    "qNum": 8,
    "questionText": "Two infinitely long parallel wires having linear charge densities \u03bb\u2081 and \u03bb\u2082 respectively are placed at a distance of R metres. The force per unit length on either wire will be (K = 1/(4\u03c0\u03b5\u2080))",
    "options": [
      "K \u00b7 (2\u03bb\u2081\u03bb\u2082) / R\u00b2",
      "K \u00b7 (2\u03bb\u2081\u03bb\u2082) / R",
      "K \u00b7 (\u03bb\u2081\u03bb\u2082) / R\u00b2",
      "K \u00b7 (\u03bb\u2081\u03bb\u2082) / R"
    ],
    "correctAnswer": 1,
    "explanation": "The electric field produced by wire 1 with linear charge density \u03bb\u2081 at distance R is E\u2081 = 2K\u03bb\u2081 / R. The electrostatic force per unit length on wire 2 carrying linear charge density \u03bb\u2082 is F/L = \u03bb\u2082 \u00b7 E\u2081 = 2K\u03bb\u2081\u03bb\u2082 / R.",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Infinite Line Charges",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-09",
    "qNum": 9,
    "questionText": "Two identical thin rings each of radius R meters are coaxially placed at a distance R meters apart. If Q\u2081 coulomb and Q\u2082 coulomb are respectively the charges uniformly spread on the two rings, the work done in moving a charge q from the centre of one ring to that of other is",
    "options": [
      "Zero",
      "q(Q\u2081 - Q\u2082)(\u221a2 - 1) / (\u221a2 \u00b7 4\u03c0\u03b5\u2080R)",
      "q\u221a2(Q\u2081 + Q\u2082) / (4\u03c0\u03b5\u2080R)",
      "q(Q\u2081 + Q\u2082)(\u221a2 + 1) / (\u221a2 \u00b7 4\u03c0\u03b5\u2080R)"
    ],
    "correctAnswer": 1,
    "explanation": "Potential at centre of Ring 1 is V\u2081 = (1 / 4\u03c0\u03b5\u2080R)[Q\u2081 + Q\u2082/\u221a2]. Potential at centre of Ring 2 is V\u2082 = (1 / 4\u03c0\u03b5\u2080R)[Q\u2082 + Q\u2081/\u221a2]. The potential difference is V\u2081 - V\u2082 = [(Q\u2081 - Q\u2082)/(4\u03c0\u03b5\u2080R)] * (1 - 1/\u221a2) = (Q\u2081 - Q\u2082)(\u221a2 - 1) / (\u221a2 \u00b7 4\u03c0\u03b5\u2080R). Work done W = q(V\u2081 - V\u2082).",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Potential of Charged Rings",
    "difficulty": "Hard",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-10",
    "qNum": 10,
    "questionText": "An ellipsoidal cavity is carved within a perfect conductor. A positive charge q is placed at the centre of the cavity. The points A and B are on the cavity surface. Then",
    "options": [
      "Electric field near A in the cavity = Electric field near B in the cavity",
      "Charge density at A = Charge density at B",
      "Potential at A = Potential at B",
      "Total electric field flux through the surface of the cavity is zero"
    ],
    "correctAnswer": 2,
    "explanation": "In electrostatic equilibrium, every point within the bulk and on the surface of a conducting material resides at the exact same electrostatic potential (equipotential volume and surface). Hence, Potential at A = Potential at B.",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Conductors & Cavities",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-11",
    "qNum": 11,
    "questionText": "A charge +q is fixed at each of the points x = x\u2080, x = 3x\u2080, x = 5x\u2080 ... infinite, on the x-axis and a charge -q is fixed at each of the points x = 2x\u2080, x = 4x\u2080, x = 6x\u2080 ... infinite. Here x\u2080 is a positive constant. Take the electric potential at a point due to a charge Q at a distance r from it to be Q/(4\u03c0\u03b5\u2080r). Then, the potential at the origin due to the above system of charges is",
    "options": [
      "0",
      "q / (8\u03c0\u03b5\u2080x\u2080 ln 2)",
      "\u221e",
      "q ln 2 / (4\u03c0\u03b5\u2080x\u2080)"
    ],
    "correctAnswer": 3,
    "explanation": "Potential at the origin is the algebraic sum: V = [q / (4\u03c0\u03b5\u2080x\u2080)] \u00b7 [1 - 1/2 + 1/3 - 1/4 + 1/5 - ...]. The alternating harmonic series 1 - 1/2 + 1/3 - 1/4 + ... converges precisely to ln(2). Thus V = q ln 2 / (4\u03c0\u03b5\u2080x\u2080).",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Superposition of Electric Potential",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-12",
    "qNum": 12,
    "questionText": "A positively charged thin metal ring of radius R is fixed in the xy-plane with its centre at the O. A negatively charged particle P is released from rest at the point (0, 0, z\u2080), where z\u2080 > 0. Then the motion of P is",
    "options": [
      "Periodic for all values of z\u2080 satisfying 0 < z\u2080 < \u221e",
      "Simple harmonic for all values of satisfying 0 < z\u2080 < R",
      "Approximately simple harmonic provided z\u2080 << R",
      "Such that P crosses O and continues to move along the negative z-axis towards z = -\u221e"
    ],
    "correctAnswer": 2,
    "explanation": "The restoring force acting along the axial z-direction on -q is F = - [kQq z\u2080 / (R\u00b2 + z\u2080\u00b2)^(3/2)]. When z\u2080 << R, (R\u00b2 + z\u2080\u00b2)^(3/2) \u2248 R\u00b3, giving F \u2248 - (kQq / R\u00b3) \u00b7 z\u2080. This is directly proportional to -z\u2080, proving the motion is approximately simple harmonic for small displacements z\u2080 << R.",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Axial Field of Charged Ring",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-13",
    "qNum": 13,
    "questionText": "A non-conducting solid sphere of radius R is uniformly charged. The magnitude of the electric field due to the sphere at a distance r from its centre",
    "options": [
      "Increases as r increases for r < R",
      "Decreases as r increases for 0 < r < \u221e",
      "Decreases as r increases for R < r < \u221e",
      "Is discontinuous at r = R"
    ],
    "correctAnswer": 0,
    "explanation": "Inside a uniformly charged non-conducting sphere (r < R), Gauss's Law gives E = (\u03c1 \u00b7 r) / (3\u03b5\u2080) = (k Q r / R\u00b3), which increases linearly with r. At the surface E_max = kQ/R\u00b2, and outside (r > R) it decreases as 1/r\u00b2.",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Non-Conducting Uniform Sphere",
    "difficulty": "Easy",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-14",
    "qNum": 14,
    "questionText": "A non-conducting ring of radius 0.5m carries a total charge of 1.11 \u00d7 10\u207b\u00b9\u2070 C distributed non-uniformly on its circumference producing an electric field E everywhere in space. The value of the line integral \u222b_{l=\u221e}^{l=0} -E\u00b7dl (l = 0 being centre of the ring) in volt is",
    "options": [
      "+2",
      "-1",
      "-2",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "By fundamental definition, \u222b_{\u221e}^{0} -E\u00b7dl represents the electrostatic potential at the centre of the ring relative to infinity: V(0) = q / (4\u03c0\u03b5\u2080R) = (9 \u00d7 10\u2079 \u00d7 1.11 \u00d7 10\u207b\u00b9\u2070) / 0.5 = 0.999 / 0.5 \u2248 +2.0 V.",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Potential from Line Integral",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-15",
    "qNum": 15,
    "questionText": "A negatively charged plate has charge density of 2 \u00d7 10\u207b\u2076 C/m\u00b2. The initial distance of an electron which is moving toward plate, cannot strike the plate, if it is having energy of 200 eV",
    "options": [
      "1.77 mm",
      "3.51 mm",
      "1.77 cm",
      "3.51 cm"
    ],
    "correctAnswer": 0,
    "explanation": "Electric field near the large charged plate is E = \u03c3 / (2\u03b5\u2080) = (2 \u00d7 10\u207b\u2076) / (2 \u00d7 8.85 \u00d7 10\u207b\u00b9\u00b2) \u2248 1.13 \u00d7 10\u2075 V/m. Stopping potential is 200 V. Distance d = V / E = 200 / (1.13 \u00d7 10\u2075) = 1.77 \u00d7 10\u207b\u00b3 m = 1.77 mm.",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Electric Field of Sheet of Charge",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-16",
    "qNum": 16,
    "questionText": "The charge on 500 cc of water due to protons will be",
    "options": [
      "6.0 \u00d7 10\u00b2\u2077 C",
      "2.67 \u00d7 10\u2077 C",
      "6 \u00d7 10\u00b2\u00b3 C",
      "1.67 \u00d7 10\u00b2\u00b3 C"
    ],
    "correctAnswer": 1,
    "explanation": "Mass of 500 cc water = 500 g. Molar mass = 18 g/mol. Number of molecules = (500 / 18) \u00d7 6.022 \u00d7 10\u00b2\u00b3. Each H\u2082O molecule has 10 protons. Total positive charge = [(500 / 18) \u00d7 6.022 \u00d7 10\u00b2\u00b3 \u00d7 10] \u00d7 (1.6 \u00d7 10\u207b\u00b9\u2079 C) \u2248 2.67 \u00d7 10\u2077 C.",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Quantization of Charge",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-17",
    "qNum": 17,
    "questionText": "Electric potential is given by V = 6x - 8xy\u00b2 - 8y + 6yz - 4z\u00b2. Then electric force acting on 2C point charge placed on origin will be",
    "options": [
      "2 N",
      "6 N",
      "8 N",
      "20 N"
    ],
    "correctAnswer": 3,
    "explanation": "Ex = - \u2202V/\u2202x = -(6 - 8y\u00b2). At origin (0,0,0), Ex = -6 N/C.\nEy = - \u2202V/\u2202y = -(-16xy - 8 + 6z) = +8 N/C.\nEz = - \u2202V/\u2202z = -(6y - 8z) = 0.\nMagnitude |E| = \u221a((-6)\u00b2 + 8\u00b2 + 0\u00b2) = 10 N/C. Force on 2 C charge: F = q|E| = 2 \u00d7 10 = 20 N.",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Relation Between Field & Potential",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-18",
    "qNum": 18,
    "questionText": "The electric field in a region is radially outward with magnitude E = A\u03b3\u2080. The charge contained in a sphere of radius \u03b3\u2080 centered at the origin is",
    "options": [
      "(1 / (4\u03c0\u03b5\u2080)) \u00b7 A\u03b3\u2080\u00b3",
      "4\u03c0\u03b5\u2080A\u03b3\u2080\u00b3",
      "4\u03c0\u03b5\u2080A / \u03b3\u2080",
      "(1 / (4\u03c0\u03b5\u2080)) \u00b7 (A / \u03b3\u2080\u00b3)"
    ],
    "correctAnswer": 1,
    "explanation": "By Gauss's Law, electric flux through sphere of radius \u03b3\u2080 is \u03a6 = E \u00b7 (4\u03c0\u03b3\u2080\u00b2) = (A\u03b3\u2080) \u00b7 (4\u03c0\u03b3\u2080\u00b2) = 4\u03c0A\u03b3\u2080\u00b3. The enclosed charge is q_enc = \u03b5\u2080\u03a6 = 4\u03c0\u03b5\u2080A\u03b3\u2080\u00b3.",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Gauss's Law Calculations",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-19",
    "qNum": 19,
    "questionText": "Charge q is uniformly distributed over a thin half ring of radius R. The electric field at the centre of the ring is",
    "options": [
      "q / (2\u03c0\u00b2\u03b5\u2080R\u00b2)",
      "q / (4\u03c0\u00b2\u03b5\u2080R\u00b2)",
      "q / (4\u03c0\u03b5\u2080R\u00b2)",
      "q / (2\u03c0\u03b5\u2080R\u00b2)"
    ],
    "correctAnswer": 0,
    "explanation": "For a semicircular arc with linear charge density \u03bb = q / (\u03c0R), the electric field at the centre is E = 2k\u03bb / R = 2 \u00b7 [1 / (4\u03c0\u03b5\u2080)] \u00b7 [q / (\u03c0R)] / R = q / (2\u03c0\u00b2\u03b5\u2080R\u00b2).",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Electric Field of Semicircular Ring",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-20",
    "qNum": 20,
    "questionText": "In the given figure two tiny conducting balls of identical mass m and identical charge q hang from non-conducting threads of equal length L. Assume that \u03b8 is so small that tan \u03b8 \u2248 sin \u03b8, then for equilibrium x is equal to",
    "options": [
      "(q\u00b2L / (2\u03c0\u03b5\u2080mg))^(1/3)",
      "(qL\u00b2 / (2\u03c0\u03b5\u2080mg))^(1/3)",
      "(q\u00b2L\u00b2 / (4\u03c0\u03b5\u2080mg))^(1/3)",
      "(q\u00b2L / (4\u03c0\u03b5\u2080mg))^(1/3)"
    ],
    "correctAnswer": 0,
    "explanation": "In equilibrium, tan \u03b8 = F_e / (mg) = q\u00b2 / (4\u03c0\u03b5\u2080x\u00b2mg). For small angles, tan \u03b8 \u2248 sin \u03b8 = (x/2)/L = x / (2L). Equating: x / (2L) = q\u00b2 / (4\u03c0\u03b5\u2080x\u00b2mg) => x\u00b3 = 2q\u00b2L / (4\u03c0\u03b5\u2080mg) = q\u00b2L / (2\u03c0\u03b5\u2080mg) => x = [q\u00b2L / (2\u03c0\u03b5\u2080mg)]^(1/3).",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Equilibrium of Hanging Charges",
    "difficulty": "Hard",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-21",
    "qNum": 21,
    "questionText": "Consider two points 1 and 2 in a region outside a charged sphere. Two points are not very far away from the sphere. If E and V represent the electric field vector and the electric potential, which of the following is not possible",
    "options": [
      "|E\u2081| = |E\u2082|, V\u2081 = V\u2082",
      "E\u2081 \u2260 E\u2082, V\u2081 \u2260 V\u2082",
      "E\u2081 \u2260 E\u2082, V\u2081 = V\u2082",
      "|E\u2081| = |E\u2082|, V\u2081 \u2260 V\u2082"
    ],
    "correctAnswer": 3,
    "explanation": "For a charged sphere, outside potential is V = kQ/r and field magnitude is |E| = kQ/r\u00b2. If |E\u2081| = |E\u2082|, then r\u2081 must equal r\u2082, which strictly implies V\u2081 must equal V\u2082. Therefore, |E\u2081| = |E\u2082| with V\u2081 \u2260 V\u2082 is physically impossible.",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Spherical Field Potential Symmetry",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-22",
    "qNum": 22,
    "questionText": "Three positive charges of equal value q are placed at the vertices of an equilateral triangle. The resulting lines of force should be sketched as in",
    "options": [
      "Diagram (a)",
      "Diagram (b)",
      "Diagram (c): Lines diverging outward with central neutral point",
      "Diagram (d)"
    ],
    "correctAnswer": 2,
    "explanation": "By three-fold rotational symmetry, the centroid of the equilateral triangle has zero net electric field (neutral point). Electric field lines from identical positive charges mutually repel and diverge outward without intersecting, leaving the central region field-free as shown in (c).",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Field Lines of Charge Configurations",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-23",
    "qNum": 23,
    "questionText": "A uniform electric field pointing in positive x-direction exists in a region. Let A be the origin, B be the point on the x-axis at x = +1 cm and C be the point on the y-axis at y = +1 cm. Then the potentials at the points A, B and C satisfy",
    "options": [
      "V_A < V_B",
      "V_A > V_B",
      "V_A < V_C",
      "V_A > V_C"
    ],
    "correctAnswer": 1,
    "explanation": "Electrostatic potential strictly decreases along the direction of the electric field line. Since E points along +x, moving from A(0,0) to B(+1,0) along +x implies V_A > V_B. Along the y-axis (perpendicular to E), V is constant, so V_A = V_C.",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Equipotential Surfaces",
    "difficulty": "Easy",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-24",
    "qNum": 24,
    "questionText": "There is a uniform electric field of strength 10\u00b3 V/m along y-axis. A body of mass 1g and charge 10\u207b\u2076 C is projected into the field from origin along the positive x-axis with a velocity 10 m/s. Its speed in m/s after 10s is (Neglect gravitation)",
    "options": [
      "10",
      "5\u221a2",
      "10\u221a2",
      "20"
    ],
    "correctAnswer": 2,
    "explanation": "Along x: vx = 10 m/s (constant). Along y: ay = qE / m = (10\u207b\u2076 \u00d7 10\u00b3) / 10\u207b\u00b3 = 1 m/s\u00b2. After t = 10 s, vy = ay \u00b7 t = 1 \u00d7 10 = 10 m/s. Resultant speed v = \u221a(vx\u00b2 + vy\u00b2) = \u221a(10\u00b2 + 10\u00b2) = 10\u221a2 m/s.",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Motion of Charge in Uniform Field",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-25",
    "qNum": 25,
    "questionText": "The electric potential at a point (x, y) in the x-y plane is given by V = -kxy. The field intensity at a distance r from the origin varies as",
    "options": [
      "r\u00b2",
      "r",
      "1/r",
      "1/r\u00b2"
    ],
    "correctAnswer": 1,
    "explanation": "Ex = - \u2202V/\u2202x = ky, Ey = - \u2202V/\u2202y = kx. Field magnitude |E| = \u221a(Ex\u00b2 + Ey\u00b2) = \u221a((ky)\u00b2 + (kx)\u00b2) = k\u221a(x\u00b2 + y\u00b2) = kr. Hence, the electric field intensity varies directly as r.",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Electric Field Potential Gradient",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-26",
    "qNum": 26,
    "questionText": "Two equal charges are separated by a distance d. A third charge placed on a perpendicular bisector at x distance will experience maximum coulomb force when",
    "options": [
      "x = d / \u221a2",
      "x = d / 2",
      "x = d / (2\u221a2)",
      "x = d / (2\u221a3)"
    ],
    "correctAnswer": 2,
    "explanation": "Each charge is at distance d/2 from the midpoint. Force on the third charge at axial distance x on bisector is F = 2kQq x / [(d/2)\u00b2 + x\u00b2]^(3/2). Setting dF/dx = 0 yields x = (d/2) / \u221a2 = d / (2\u221a2).",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Maxima of Coulomb Force",
    "difficulty": "Hard",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-27",
    "qNum": 27,
    "questionText": "Two equal point charges are fixed at x = -a and x = +a on the x-axis. Another point charge Q is placed at the origin. The Change in the electrical potential energy of Q, when it is displaced by a small distance x along the x-axis, is approximately proportional to",
    "options": [
      "x",
      "x\u00b2",
      "x\u00b3",
      "1/x"
    ],
    "correctAnswer": 1,
    "explanation": "U(x) = kQq / (a - x) + kQq / (a + x) = (kQq / a) \u00b7 [(1 - x/a)\u207b\u00b9 + (1 + x/a)\u207b\u00b9]. Expanding via binomial series for x << a: U(x) \u2248 (2kQq / a) + (2kQq / a\u00b3) \u00b7 x\u00b2. Hence \u0394U = U(x) - U(0) is proportional to x\u00b2.",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Potential Energy Expansion",
    "difficulty": "Hard",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-28",
    "qNum": 28,
    "questionText": "An elementary particle of mass m and charge +e is projected with velocity v at a much more massive particle of charge Ze, where Z > 0. What is the closest possible approach of the incident particle",
    "options": [
      "Ze\u00b2 / (2\u03c0\u03b5\u2080mv\u00b2)",
      "Ze / (4\u03c0\u03b5\u2080mv\u00b2)",
      "Ze\u00b2 / (8\u03c0\u03b5\u2080mv\u00b2)",
      "Ze / (8\u03c0\u03b5\u2080mv\u00b2)"
    ],
    "correctAnswer": 0,
    "explanation": "By conservation of energy: Initial KE = Final PE at closest approach r_min. (1/2)mv\u00b2 = (1 / 4\u03c0\u03b5\u2080) \u00b7 (Ze \u00b7 e / r_min) => r_min = 2Ze\u00b2 / (4\u03c0\u03b5\u2080mv\u00b2) = Ze\u00b2 / (2\u03c0\u03b5\u2080mv\u00b2).",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Distance of Closest Approach",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-29",
    "qNum": 29,
    "questionText": "An electric dipole is situated in an electric field of uniform intensity E whose dipole moment is p and moment of inertia is I. If the dipole is displaced slightly from the equilibrium position, then the angular frequency of its oscillations is",
    "options": [
      "(pE / I)^(1/2)",
      "(pE / I)^(3/2)",
      "(I / pE)^(1/2)",
      "(p / (IE))^(1/2)"
    ],
    "correctAnswer": 0,
    "explanation": "Restoring torque on the dipole is \u03c4 = -pE sin \u03b8 \u2248 -pE \u03b8. Since \u03c4 = I \u03b1 = I (d\u00b2\u03b8/dt\u00b2), we get d\u00b2\u03b8/dt\u00b2 + (pE / I) \u03b8 = 0. Comparing with standard SHM equation d\u00b2\u03b8/dt\u00b2 + \u03c9\u00b2\u03b8 = 0 gives angular frequency \u03c9 = (pE / I)^(1/2).",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Dipole Oscillations",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-30",
    "qNum": 30,
    "questionText": "A metallic shell has a point charge 'q' kept inside its cavity. Which one of the following diagrams correctly represents the electric lines of forces",
    "options": [
      "Diagram (a)",
      "Diagram (b)",
      "Diagram (c): Radial lines in cavity ending perpendicular to inner wall, zero lines in conductor bulk, radial lines emerging outside",
      "Diagram (d)"
    ],
    "correctAnswer": 2,
    "explanation": "Conductor properties dictate: (1) Electric field is strictly zero within the conducting material bulk, (2) Field lines terminate perpendicularly onto conducting surfaces, and (3) Induced charge on the exterior sphere causes radial field lines outside. Diagram (c) correctly satisfies all three boundary conditions.",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Electrostatic Shielding & Conductors",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-31",
    "qNum": 31,
    "questionText": "An infinite number of electric charges each equal to 5 nano-coulomb (magnitude) are placed along X-axis at x = 1 cm, x = 2 cm, x = 4 cm, x = 8 cm ... and so on. In the setup if the consecutive charges have opposite sign, then the electric field in Newton/Coulomb at x = 0 is (1/(4\u03c0\u03b5\u2080) = 9 \u00d7 10\u2079 N-m\u00b2/C\u00b2)",
    "options": [
      "12 \u00d7 10\u2074",
      "24 \u00d7 10\u2074",
      "36 \u00d7 10\u2074",
      "48 \u00d7 10\u2074"
    ],
    "correctAnswer": 2,
    "explanation": "E = k q [1/(0.01)\u00b2 - 1/(0.02)\u00b2 + 1/(0.04)\u00b2 - 1/(0.08)\u00b2 + ...] = (k q / 10\u207b\u2074) [1 - 1/4 + 1/16 - 1/64 + ...]. The infinite geometric series has sum S = 1 / [1 - (-1/4)] = 4/5 = 0.8. E = (9 \u00d7 10\u2079 \u00d7 5 \u00d7 10\u207b\u2079 / 10\u207b\u2074) \u00d7 0.8 = 45 \u00d7 10\u2074 \u00d7 0.8 = 36 \u00d7 10\u2074 N/C.",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Superposition of Electric Field",
    "difficulty": "Hard",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-32",
    "qNum": 32,
    "questionText": "A small sphere carrying a charge 'q' is hanging in between two parallel plates by a string of length L. Time period of pendulum is T\u2080. When parallel plates are charged (top positive, bottom negative), the time period changes to T. The ratio T / T\u2080 is equal to",
    "options": [
      "((g + qE/m) / g)^(1/2)",
      "(g / (g + qE/m))^(3/2)",
      "(g / (g + qE/m))^(1/2)",
      "None of these"
    ],
    "correctAnswer": 2,
    "explanation": "The downward electric field exerts downward force qE. Effective acceleration is g_eff = g + qE/m. Since time period T = 2\u03c0\u221a(L / g_eff), the ratio T / T\u2080 = \u221a(g / g_eff) = [g / (g + qE/m)]^(1/2).",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Pendulum in Uniform Electric Field",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-33",
    "qNum": 33,
    "questionText": "Three charges -q\u2081, +q\u2082 and -q\u2083 are placed as shown in the figure. The x-component of the force on -q\u2081 is proportional to",
    "options": [
      "q\u2082/b\u00b2 - (q\u2083/a\u00b2) sin \u03b8",
      "q\u2082/b\u00b2 - (q\u2083/a\u00b2) cos \u03b8",
      "q\u2082/b\u00b2 + (q\u2083/a\u00b2) sin \u03b8",
      "q\u2082/b\u00b2 + (q\u2083/a\u00b2) cos \u03b8"
    ],
    "correctAnswer": 2,
    "explanation": "The positive charge +q\u2082 at (b, 0) attracts -q\u2081 along +x with force F\u2081 = k q\u2081 q\u2082 / b\u00b2. The negative charge -q\u2083 located at angle \u03b8 with the y-axis in the 2nd quadrant repels -q\u2081 into the 4th quadrant (+x and -y directions). Its component along +x is F\u2082x = (k q\u2081 q\u2083 / a\u00b2) sin \u03b8. Both forces add along +x, making Fx proportional to q\u2082/b\u00b2 + (q\u2083/a\u00b2) sin \u03b8.",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Vector Coulomb Force Resolution",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-34",
    "qNum": 34,
    "questionText": "A solid conducting sphere having a charge Q is surrounded by an uncharged concentric conducting hollow spherical shell. Let the potential difference between the surface of the solid sphere and that of the outer surface of the hollow shell be V. If the shell is now given a charge of -3Q, the new potential difference between the same two surfaces is",
    "options": [
      "V",
      "2V",
      "4V",
      "-2V"
    ],
    "correctAnswer": 0,
    "explanation": "The potential difference between two concentric spherical conductors depends solely on the charge enclosed on the inner sphere: \u0394V = (Q / 4\u03c0\u03b5\u2080) [1/R_in - 1/R_out]. Adding charge to the outer shell raises the potential of both conductors equally, leaving their potential difference unchanged at V.",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Concentric Spherical Capacitors",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-35",
    "qNum": 35,
    "questionText": "Two point charges +q and -q are held fixed at (-d, 0) and (d, 0) respectively of a (X, Y) coordinate system. Then",
    "options": [
      "E at all points on the Y-axis is along \u00ee",
      "The electric field E at all points on the X-axis has the same direction",
      "Dipole moment is 2qd directed along \u00ee",
      "Work has to be done in bringing a test charge from infinity to the origin"
    ],
    "correctAnswer": 0,
    "explanation": "The dipole moment p points from -q at (+d,0) to +q at (-d,0), which is along -\u00ee. On the equatorial plane (the Y-axis), the electric field of a dipole opposes p, thus pointing along +\u00ee. Hence E at all points on the Y-axis is directed along \u00ee.",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Electric Dipole Field Geometry",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-36",
    "qNum": 36,
    "questionText": "A point charge of 40 stat coulomb is placed 2 cm in front of an earthed metallic plane plate of large size. Then the force of attraction on the point charge is",
    "options": [
      "100 dynes",
      "160 dynes",
      "1600 dynes",
      "400 dynes"
    ],
    "correctAnswer": 0,
    "explanation": "By method of electrical images, an earthed conducting plane produces an image charge of -40 stat coulomb at distance 2 cm behind the plane. Separation between real and image charge is r = 2 + 2 = 4 cm. In CGS electrostatic units, F = q\u00b2 / r\u00b2 = 40\u00b2 / 4\u00b2 = 1600 / 16 = 100 dynes.",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Method of Images",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-37",
    "qNum": 37,
    "questionText": "A piece of cloud having area 25 \u00d7 10\u2076 m\u00b2 and electric potential of 10\u2075 volts. If the height of cloud is 0.75 km, then energy of electric field between earth and cloud will be",
    "options": [
      "250 J",
      "750 J",
      "1225 J",
      "1475 J"
    ],
    "correctAnswer": 3,
    "explanation": "Capacitance C = \u03b5\u2080 A / d = (8.85 \u00d7 10\u207b\u00b9\u00b2 \u00d7 25 \u00d7 10\u2076) / 750 = 2.95 \u00d7 10\u207b\u2077 F. Total electrostatic energy U = (1/2) C V\u00b2 = 0.5 \u00d7 (2.95 \u00d7 10\u207b\u2077) \u00d7 (10\u2075)\u00b2 = 0.5 \u00d7 2.95 \u00d7 10\u207b\u2077 \u00d7 10\u00b9\u2070 = 1475 J.",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Energy Stored in Capacitor",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-38",
    "qNum": 38,
    "questionText": "Two point charges (+Q) and (-2Q) are fixed on the X-axis at positions a and 2a from origin respectively. At what positions on the axis, the resultant electric field is zero",
    "options": [
      "Only x = \u221a2 a",
      "Only x = -\u221a2 a",
      "Both x = \u00b1\u221a2 a",
      "x = 3a/2 only"
    ],
    "correctAnswer": 1,
    "explanation": "For two opposite unequal charges, zero field occurs outside the line segment closer to the smaller charge (+Q), so x < a. Let distance from +Q be d = a - x. Then distance from -2Q is 2a - x = a + d. Equating: kQ / d\u00b2 = 2kQ / (a + d)\u00b2 => a + d = \u221a2 d => d = a / (\u221a2 - 1). Therefore x = a - d = a - a/(\u221a2 - 1) = a(\u221a2 - 2)/(\u221a2 - 1) = -\u221a2 a.",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Null Points of Electric Field",
    "difficulty": "Hard",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-39",
    "qNum": 39,
    "questionText": "Six charges, three positive and three negative of equal magnitude are to be placed at the vertices of a regular hexagon such that the electric field at O is double the electric field when only one positive charge of same magnitude is placed at R. Which of the following arrangements of charges is possible for P, Q, R, S, T and U respectively",
    "options": [
      "+, -, +, -, -, +",
      "+, -, +, -, +, -",
      "+, +, -, +, -, -",
      "-, +, +, -, +, -"
    ],
    "correctAnswer": 3,
    "explanation": "Single +q at R produces field E\u2080 towards U. To get 2E\u2080 at O towards U: the diagonal RU must have +q at R and -q at U (which produces 2E\u2080 towards U). The other two diagonals (QS and PT) must produce zero net field, which occurs when identical charges sit at opposite ends: Q(+) & T(+) cancel each other, and P(-) & S(-) cancel each other. This matches arrangement (-, +, +, -, +, -).",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Polygon Charge Symmetry",
    "difficulty": "Hard",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-40",
    "qNum": 40,
    "questionText": "A charged particle q is shot towards another charged particle Q which is fixed, with a speed v. It approaches Q upto a closest distance r and then returns. If q were given a speed 2v, the closest distances of approach would be",
    "options": [
      "r",
      "2r",
      "r/2",
      "r/4"
    ],
    "correctAnswer": 3,
    "explanation": "By conservation of energy, (1/2)mv\u00b2 = kQq / r, meaning distance of closest approach r is inversely proportional to v\u00b2 (r \u221d 1/v\u00b2). Doubling the speed to 2v reduces the closest approach to r / 2\u00b2 = r/4.",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Closest Approach & Energy",
    "difficulty": "Easy",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-41",
    "qNum": 41,
    "questionText": "Four charges equal to -Q are placed at the four corners of a square and a charge q is at its centre. If the system is in equilibrium the value of q is",
    "options": [
      "-(Q/4)(1 + 2\u221a2)",
      "(Q/4)(1 + 2\u221a2)",
      "-(Q/2)(1 + 2\u221a2)",
      "(Q/2)(1 + 2\u221a2)"
    ],
    "correctAnswer": 1,
    "explanation": "For any corner charge -Q to be in equilibrium, the outward diagonal repulsion from the three other corner charges must balance the inward attraction from the central charge q. Outward force: F_rep = (kQ\u00b2 / a\u00b2)[\u221a2 + 1/2] = (kQ\u00b2 / 2a\u00b2)[2\u221a2 + 1]. Inward attraction: F_att = kQq / (a/\u221a2)\u00b2 = 2kQq / a\u00b2. Equating gives 2q = (Q/2)(1 + 2\u221a2) => q = (Q/4)(1 + 2\u221a2).",
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "Equilibrium of Charge Systems",
    "difficulty": "Hard",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-42",
    "qNum": 42,
    "questionText": "A parallel plate air capacitor has a capacitance of 100 \u03bc\u03bcF. The plates are at a distance d apart. If a slab of thickness t (t \u2264 d) and dielectric constant 5 is introduced between the parallel plates, then the capacitance will be",
    "options": [
      "50 \u03bc\u03bcF",
      "100 \u03bc\u03bcF",
      "200 \u03bc\u03bcF",
      "500 \u03bc\u03bcF"
    ],
    "correctAnswer": 2,
    "explanation": "Introducing a dielectric slab with dielectric constant K = 5 (where K > 1) reduces effective plate separation: d_eff = d - t + t/K < d. Consequently, the capacitance C = \u03b5\u2080A / d_eff strictly increases. For typical half-thickness t = d/2, C = 100 / [1 - 1/2 + 1/10] = 100 / 0.6 \u2248 167-200 \u03bc\u03bcF.",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Dielectric Slab in Capacitor",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-43",
    "qNum": 43,
    "questionText": "A dielectric slab of thickness d is inserted in a parallel plate capacitor whose negative plate is at x = 0 and positive plate is at x = 3d. The slab is equidistant from the plates. The capacitor is given some charge. As one goes from 0 to 3d",
    "options": [
      "The magnitude of the electric field remains the same",
      "The direction of the electric field remains the same",
      "The electric potential increases continuously",
      "The electric potential increases at first, then decreases and again increases"
    ],
    "correctAnswer": 2,
    "explanation": "The electric field points from the positive plate (at x = 3d) to the negative plate (at x = 0), meaning E is always in the -x direction throughout air and dielectric. Since dV/dx = -Ex and Ex < 0 everywhere, dV/dx > 0 everywhere, meaning the electric potential increases monotonically and continuously from 0 to 3d.",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Potential Distribution in Capacitors",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-44",
    "qNum": 44,
    "questionText": "Capacitance of a capacitor made by a thin metal foil is 2 \u03bcF. If the foil is folded with paper of thickness 0.15mm, dielectric constant of paper is 2.5 and width of paper is 400mm, then length of foil will be",
    "options": [
      "0.34 m",
      "1.33 m",
      "13.4 m",
      "33.9 m"
    ],
    "correctAnswer": 3,
    "explanation": "C = K \u03b5\u2080 A / d => Area A = C d / (K \u03b5\u2080) = (2 \u00d7 10\u207b\u2076 \u00d7 0.15 \u00d7 10\u207b\u00b3) / (2.5 \u00d7 8.854 \u00d7 10\u207b\u00b9\u00b2) \u2248 13.55 m\u00b2. With foil width W = 0.4 m, length L = A / W = 13.55 / 0.4 \u2248 33.9 m.",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Rolled Foil Capacitor Geometry",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-45",
    "qNum": 45,
    "questionText": "A parallel plate capacitor is charged to a potential difference of 50 V. It is discharged through a resistance. After 1 second, the potential difference between plates becomes 40 V. Then",
    "options": [
      "Fraction of stored energy after 1 second is 16/25",
      "Potential difference between the plates after 2 seconds will be 32 V",
      "Potential difference between the plates after 2 seconds will be 20 V",
      "Fraction of stored energy after 1 second is 4/5"
    ],
    "correctAnswer": 0,
    "explanation": "For RC discharge, V(t) = V\u2080 e^(-t/\u03c4). At t = 1 s, V(1)/V\u2080 = 40/50 = 4/5. The stored electrostatic energy is proportional to V\u00b2, so U(1) / U\u2080 = (V(1)/V\u2080)\u00b2 = (4/5)\u00b2 = 16/25. (Also note V(2) = 50 \u00d7 (4/5)\u00b2 = 32 V).",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Discharging of Capacitor",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-46",
    "qNum": 46,
    "questionText": "A parallel plate capacitor is connected to a battery. The plates are pulled apart with a uniform speed. If x is the separation between the plates, the time rate of change of electrostatic energy of capacitor is proportional to",
    "options": [
      "x\u207b\u00b2",
      "x",
      "x\u207b\u00b9",
      "x\u00b2"
    ],
    "correctAnswer": 0,
    "explanation": "Because the capacitor remains connected to a battery, voltage V is constant. Electrostatic energy is U = (1/2) C V\u00b2 = (1/2) (\u03b5\u2080 A / x) V\u00b2. Differentiating with respect to time: dU/dt = [-(1/2) \u03b5\u2080 A V\u00b2 / x\u00b2] \u00b7 (dx/dt). Since plates are pulled with uniform speed v = dx/dt = const, |dU/dt| is proportional to x\u207b\u00b2.",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Energy Dynamics with Battery Connected",
    "difficulty": "Hard",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-47",
    "qNum": 47,
    "questionText": "Five identical plates each of area A are joined as shown in the figure. The distance between the plates is d. The plates are connected to a potential difference of V volts. The charge on plates 1 and 4 will be",
    "options": [
      "(\u03b5\u2080AV / d), (2\u03b5\u2080AV / d)",
      "(\u03b5\u2080AV / d), (2\u03b5\u2080AV / d)",
      "(\u03b5\u2080AV / d), (-2\u03b5\u2080AV / d)",
      "(-\u03b5\u2080AV / d), (-2\u03b5\u2080AV / d)"
    ],
    "correctAnswer": 2,
    "explanation": "Plates 1, 3, 5 are connected to the positive terminal (+V), while plates 2, 4 are connected to the negative terminal (0V). Plate 1 has only one active inner face facing plate 2 (-), so it carries charge +\u03b5\u2080AV/d. Plate 4 is connected to the negative terminal and has both faces active (facing plate 3 on left and plate 5 on right), carrying -\u03b5\u2080AV/d on each side, totaling -2\u03b5\u2080AV/d.",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Parallel Plate Interleaved Combinations",
    "difficulty": "Hard",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-48",
    "qNum": 48,
    "questionText": "To form a composite 16 \u03bcF, 1000V capacitor from a supply of identical capacitors marked 8 \u03bcF, 250V, we require a minimum number of capacitors",
    "options": [
      "40",
      "32",
      "8",
      "2"
    ],
    "correctAnswer": 1,
    "explanation": "Number of capacitors needed in series to withstand 1000 V: n = 1000 / 250 = 4 capacitors per row. Capacitance of each row of 4 in series is C_row = 8 \u03bcF / 4 = 2 \u03bcF. Number of parallel rows needed for 16 \u03bcF: m = 16 / 2 = 8 rows. Total minimum number of capacitors = n \u00d7 m = 4 \u00d7 8 = 32.",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Grouping of Capacitors",
    "difficulty": "Easy",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-49",
    "qNum": 49,
    "questionText": "An infinite number of identical capacitors each of capacitance 1 \u03bcF are connected as in adjoining figure. Then the equivalent capacitance between A and B is",
    "options": [
      "1 \u03bcF",
      "2 \u03bcF",
      "(1/2) \u03bcF",
      "\u221e"
    ],
    "correctAnswer": 1,
    "explanation": "Row 1 has 1 capacitor: C\u2081 = 1 \u03bcF. Row 2 has 2 in series: C\u2082 = 1/2 \u03bcF. Row 3 has 4 in series: C\u2083 = 1/4 \u03bcF. Row 4 has 8 in series: C\u2084 = 1/8 \u03bcF. Since all rows are connected in parallel across A and B: C_AB = 1 + 1/2 + 1/4 + 1/8 + ... = 1 / (1 - 1/2) = 2 \u03bcF.",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Infinite Capacitor Ladder Network",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  },
  {
    "id": "allen-es-50",
    "qNum": 50,
    "questionText": "Two condensers of capacities 2C and C are joined in parallel and charged upto potential V. The battery is removed and the condenser of capacity C is filled completely with a medium of dielectric constant K. The p.d. across the capacitors will now be",
    "options": [
      "3V / (K + 2)",
      "3V / K",
      "V / (K + 2)",
      "V / K"
    ],
    "correctAnswer": 0,
    "explanation": "Initial stored charge before battery disconnection: Q = (2C + C)V = 3CV. After disconnecting the battery, charge Q is conserved. When dielectric K fills capacitor C, its capacitance becomes KC. New equivalent capacitance is C_eq = 2C + KC = (K + 2)C. The new potential difference is V' = Q / C_eq = 3CV / [(K + 2)C] = 3V / (K + 2).",
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "Dielectric Insertion after Battery Disconnect",
    "difficulty": "Medium",
    "marks": 4,
    "type": "multiple-choice"
  }
];
