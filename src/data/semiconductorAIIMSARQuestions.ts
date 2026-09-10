import { Question } from "../types";

export const SEMICONDUCTOR_AIIMS_AR_QUESTIONS: Question[] = [
  {
    "id": "universal-elec-ar-q001",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: The logic gate NOT can be built using diode.\nReason: The output voltage and the input voltage of the diode have 180° phase difference. [AIIMS 2005]",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Diodes are passive two-terminal switching devices that cannot invert logic levels or produce 180° phase inversion.\n⚡ Step-by-Step Derivation:\n1. A diode conducts in forward bias and blocks in reverse bias; the output polarity always follows the input polarity without phase inversion.\n2. To realize a NOT gate, an active inverting device like a bipolar transistor in common emitter mode (which introduces 180° phase shift) is required.\n3. Therefore, both Assertion and Reason are false.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q002",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: The number of electrons in a P-type silicon semiconductor is less than the number of electrons in a pure silicon semiconductor at room temperature.\nReason: It is due to law of mass action. [AIIMS 2005]",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: According to the Law of Mass Action, n_e · n_h = n_i² in thermal equilibrium.\n⚡ Step-by-Step Derivation:\n1. In intrinsic silicon, n_e = n_h = n_i.\n2. In P-type silicon, trivalent doping introduces an enormous concentration of holes (n_h >> n_i).\n3. Because the rate of electron-hole recombination is proportional to n_e · n_h, the minority electron density drops to n_e = n_i² / n_h, which is much lower than n_i.\n4. Both Assertion and Reason are true, and Reason is the correct explanation.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q003",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: In a common emitter transistor amplifier the input current is much less than the output current.\nReason: The common emitter transistor amplifier has very high input impedance. [AIIMS 2005]",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: In a CE transistor amplifier, current gain β = I_C / I_B >> 1, so input current I_B is much smaller than collector output current I_C (Assertion is true).\n⚡ Step-by-Step Derivation:\n1. The input junction (base-emitter) is forward biased, conferring LOW input impedance (~ 1 kΩ), NOT very high input impedance.\n2. Therefore, Assertion is true but Reason is false.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q004",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: A transistor amplifier in common emitter configuration has a low input impedance.\nReason: The base to emitter region is forward biased. [AIIMS 2004]",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: The input impedance of a CE amplifier is determined by the dynamic resistance of the forward-biased base-emitter junction.\n⚡ Step-by-Step Derivation:\n1. In normal active mode, the base-emitter junction is forward biased.\n2. A forward-biased PN junction has very low dynamic resistance (r_in = ΔV_BE / ΔI_B ~ hundreds of ohms to 1 kΩ).\n3. Both Assertion and Reason are true, and Reason correctly explains the low input impedance.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q005",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: The resistivity of a semiconductor increases with temperature.\nReason: The atoms of a semiconductor vibrate with larger amplitude at higher temperature thereby increasing its resistivity. [AIIMS 2003]",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Semiconductors have a negative temperature coefficient of resistance (α < 0).\n⚡ Step-by-Step Derivation:\n1. As temperature rises, thermal agitation ruptures covalent bonds, causing carrier concentration (n_e and n_h) to increase exponentially.\n2. This massive increase in charge carriers overwhelmingly outweighs any slight reduction in relaxation time due to lattice vibrations.\n3. Consequently, conductivity increases and resistivity DECREASES.\n4. Thus, both Assertion and Reason are false.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q006",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: If the temperature of a semiconductor is increased then its resistance decreases.\nReason: The energy gap between conduction band and valence band is very small. [AIIMS 1997]",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: The bandgap in semiconductors is moderate/small (~ 1 eV).\n⚡ Step-by-Step Derivation:\n1. Because E_g is small, room temperature thermal energy (kT) excites electrons across the gap.\n2. Increasing temperature rapidly raises the number of thermally generated electron-hole pairs, reducing electrical resistance.\n3. Both Assertion and Reason are true, and Reason is the correct explanation.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q007",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: The temperature coefficient of resistance is positive for metals and negative for P-type semiconductor.\nReason: The effective charge carriers in metals are negatively charged whereas in P-type semiconductor they are positively charged. [AIIMS 1996]",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Temperature coefficient depends on carrier generation vs lattice scattering, not carrier charge sign.\n⚡ Step-by-Step Derivation:\n1. In metals, carrier density is fixed; increasing T enhances phonon scattering, increasing resistance (α > 0).\n2. In semiconductors, increasing T generates exponential numbers of free carriers, decreasing resistance (α < 0).\n3. Both statements are factually correct, but carrier charge sign does not explain the temperature dependence.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q008",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: Electron has higher mobility than hole in a semiconductor.\nReason: Mass of electron is less than the mass of hole.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Carrier mobility is inversely proportional to effective mass: μ = q·τ / m*.\n⚡ Step-by-Step Derivation:\n1. In a crystal lattice, the effective mass of conduction-band electrons is smaller than the effective mass of valence-band holes (m*_e < m*_h).\n2. Therefore, electrons accelerate faster in an electric field, giving μ_e > μ_h.\n3. Both Assertion and Reason are true, and Reason is the correct explanation.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q009",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: An N-type semiconductor has a large number of electrons but still it is electrically neutral.\nReason: An N-type semiconductor is obtained by doping an intrinsic semiconductor with a pentavalent impurity.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Doping incorporates electrically neutral donor atoms into a neutral crystal.\n⚡ Step-by-Step Derivation:\n1. Each pentavalent donor atom donates one free electron and becomes an unmoving positive donor ion.\n2. Total negative charge of free electrons equals total positive charge of donor ions plus holes.\n3. Both statements are true, but electrical neutrality is a direct consequence of conservation of charge, not specifically pentavalency.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q010",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: The crystalline solids have a sharp melting point.\nReason: All the bonds between the atoms or molecules of a crystalline solid are equally strong, so that they get broken at the same temperature.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Crystalline solids possess long-range periodic order with uniform interatomic bond strengths.\n⚡ Step-by-Step Derivation:\n1. Because of uniform bond energy across the lattice, all bonds collapse simultaneously at a specific thermal energy.\n2. This produces a sharp, well-defined melting temperature.\n3. Both Assertion and Reason are true, and Reason is the correct explanation.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q011",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: Silicon is preferred over germanium for making semiconductor devices.\nReason: The energy gap for germanium is more than the energy gap of silicon.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Silicon has a wider bandgap (1.1 eV) than germanium (0.72 eV).\n⚡ Step-by-Step Derivation:\n1. A wider bandgap means silicon has vastly lower reverse saturation leakage current (~ nA vs μA) and can operate up to 150°C (vs 70°C for Ge).\n2. The Reason states that Ge has a larger energy gap, which is completely false (0.72 eV < 1.1 eV).\n3. Hence, Assertion is true but Reason is false.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q012",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: We can measure the potential barrier of a PN junction by putting a sensitive voltmeter across its terminals.\nReason: The current through the PN junction is not same in forward and reversed bias.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "📘 NCERT Concept: In an open-circuit PN junction, metal-semiconductor contact potentials cancel the internal junction barrier potential.\n⚡ Step-by-Step Derivation:\n1. When connecting a voltmeter, contact potentials formed at both lead connections cancel the internal barrier, yielding zero net external voltage.\n2. Hence, the Assertion is false.\n3. The Reason correctly states that diode conduction is asymmetric (I_forward >> I_reverse), so Reason is true.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q013",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: Semiconductors do not obey Ohm's law.\nReason: Current is determined by the rate of flow of charge carriers.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 4,
    "explanation": "📘 NCERT Concept: At low electric fields (~ 10⁶ V/m), semiconductors obey Ohm's law with constant mobility (v_d = μE).\n⚡ Step-by-Step Derivation:\n1. At low electric fields, drift velocity is strictly linear with applied field, so J = σE (Ohm's law holds).\n2. Only at very high fields does velocity saturation occur.\n3. Hence, the general statement that semiconductors do not obey Ohm's law is false.\n4. Current is defined as rate of flow of charge carriers (I = dq/dt), which is always true. Thus, Assertion is false and Reason is true.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q014",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: Two P-N junction diodes placed back to back, will work as an NPN transistor.\nReason: The P-region of two PN junction diodes back to back will form the base of NPN transistor.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: A transistor requires a single continuous crystal with a base width much smaller than minority carrier diffusion length.\n⚡ Step-by-Step Derivation:\n1. If two discrete diodes are connected back to back, the p-regions are separated by contact boundaries and are thousands of times thicker than carrier diffusion length.\n2. Injected electrons completely recombine in the first diode without ever reaching the second diode.\n3. No transistor action (collector current modulation by base) is possible.\n4. Therefore, both Assertion and Reason are false.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q015",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: In transistor common emitter mode as an amplifier is preferred over common base mode.\nReason: In common emitter mode the input signal is connected in series with the voltage applied to the base emitter junction.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: CE configuration provides both large current gain (β) and large voltage gain, producing the highest power gain.\n⚡ Step-by-Step Derivation:\n1. Both Assertion and Reason are correct statements.\n2. However, CE mode is preferred because its power gain is maximum (A_p = β · A_v), not merely because of how the input signal is coupled.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q016",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: The dominant mechanism for motion of charge carriers in forward and reverse biased silicon P-N junction are drift in both forward and reverse bias.\nReason: In reverse biasing, no current flow through the junction.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Forward bias is dominated by diffusion of majority carriers; reverse bias is dominated by drift of minority carriers.\n⚡ Step-by-Step Derivation:\n1. In forward bias, lowering the barrier allows majority carriers to diffuse across the junction.\n2. In reverse bias, minority carriers are swept by the junction field (drift).\n3. A small reverse saturation current (I_s ~ nA) does flow.\n4. Hence, both Assertion and Reason are false.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q017",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: A transistor is a voltage-operating device.\nReason: Base current is greater than the collector current.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: A BJT is a current-controlled device where input base current controls output collector current (I_C = β · I_B).\n⚡ Step-by-Step Derivation:\n1. Unlike FETs (which are voltage-controlled), BJTs are current-operated devices.\n2. Furthermore, base current is tiny compared to collector current (I_B ≈ 1-5% of I_E, whereas I_C ≈ 95-99% of I_E).\n3. Thus, both Assertion and Reason are false.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q018",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: NAND or NOR gates are called digital building blocks.\nReason: The repeated use of NAND (or NOR) gates can produce all the basic or complicated gates.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: NAND and NOR gates are universal logic gates.\n⚡ Step-by-Step Derivation:\n1. Using combinations of NAND alone or NOR alone, all fundamental logic functions (NOT, AND, OR, XOR, XNOR) can be synthesized.\n2. Because any digital computing architecture can be realized solely with NAND or NOR, they are called universal gates or digital building blocks.\n3. Both Assertion and Reason are true, and Reason is the correct explanation.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q019",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: At 0 K Germanium is a superconductor.\nReason: At 0 K Germanium offers zero resistance.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: At absolute zero (0 K), all valence electrons in semiconductors are bound; the conduction band is completely empty.\n⚡ Step-by-Step Derivation:\n1. At 0 K, thermal excitation is zero, so no free electron-hole pairs exist.\n2. Germanium behaves as an ideal insulator with infinite electrical resistance, not zero resistance.\n3. Both Assertion and Reason are completely false.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q020",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: Base in a transistor is made very thin as compared to collector and emitter regions.\nReason: Due to thin base power gain and voltage gain is obtained by a transistor.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: An ultra-thin base minimizes minority carrier transit time and suppresses recombination.\n⚡ Step-by-Step Derivation:\n1. Making the base thin ensures that over 95-98% of carriers injected from emitter diffuse directly across into the collector.\n2. This maintains high current transfer (α ≈ 1, β >> 1) and yields high voltage and power amplification.\n3. Both Assertion and Reason are true, and Reason is the correct explanation.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q021",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: The current gain in common base circuit is always less than one.\nReason: At constant collector voltage the change in collector current is more than the change in emitter current.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: In CB mode, current gain is α = ΔI_C / ΔI_E.\n⚡ Step-by-Step Derivation:\n1. Since total emitter current divides into base and collector (I_E = I_B + I_C), collector current is always less than emitter current.\n2. Therefore, α = I_C / I_E < 1 (Assertion is true).\n3. The Reason states that change in collector current is more than emitter current, which is impossible. Reason is false.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q022",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: V-i characteristic of P-N junction diode is same as that of any other conductor.\nReason: P-N junction diode behave as conductor at room temperature.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: Diode V-I characteristics are non-linear, asymmetric, and exponential.\n⚡ Step-by-Step Derivation:\n1. Metallic conductors show linear, symmetric Ohm's law behavior (I ∝ V).\n2. A diode exhibits a threshold knee voltage in forward bias and negligible saturation current until breakdown in reverse bias.\n3. Both Assertion and Reason are false.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q023",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: Zener diode works on a principle of breakdown voltage.\nReason: Current increases suddenly after breakdown voltage.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: In heavily doped PN junctions under reverse bias, internal field emission produces sharp Zener breakdown.\n⚡ Step-by-Step Derivation:\n1. When reverse voltage reaches the breakdown threshold, reverse current increases sharply with virtually zero change in terminal voltage.\n2. This sharp knee voltage makes the Zener diode ideal as a voltage regulator.\n3. Both Assertion and Reason are true, and Reason correctly explains the operating principle.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q024",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: NOT gate is also called inverter circuit.\nReason: NOT gate inverts the input order.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: A NOT gate produces an output that is the logical complement of its input.\n⚡ Step-by-Step Derivation:\n1. When input is 0 (LOW), output is 1 (HIGH); when input is 1 (HIGH), output is 0 (LOW).\n2. Because it inverts high to low and vice versa, it is universally termed an inverter circuit.\n3. Both Assertion and Reason are true, and Reason is the correct explanation.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q025",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: In vacuum tubes (valves), vacuum is necessary for the movement of electrons between electrodes otherwise electrons collide with air particle and loses their energy.\nReason: In semiconductors devices, external heating or vacuum is not required.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Vacuum tubes rely on ballistically accelerating thermions in free space, whereas solid-state devices rely on carrier conduction in crystal energy bands.\n⚡ Step-by-Step Derivation:\n1. In vacuum tubes, gas molecules would scatter electrons and oxidize hot cathodes, requiring hard vacuum.\n2. In semiconductors, conduction occurs entirely inside the solid lattice, requiring neither vacuum nor filament power.\n3. Both statements are true, but Reason is an independent advantage of solid-state electronics, not the physical cause of vacuum requirements in tubes.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q026",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: The following circuit represents 'OR' gate.\nReason: For the above circuit Y = X̄ = (A + B)̄̄ = A + B.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Inverting the output of a NOR gate yields an OR gate: Y = (NOR)̄ = (A + B)̄̄ = A + B.\n⚡ Step-by-Step Derivation:\n1. The first gate produces X = (A + B)̄.\n2. The second NOR gate has its inputs shorted together, acting as a NOT inverter: Y = X̄.\n3. Applying double negation: Y = (A + B)̄̄ = A + B.\n4. Both Assertion and Reason are true, and Reason is the correct explanation.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 380 130\" class=\"w-full max-w-sm mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"380\" height=\"130\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"190\" y=\"20\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#0F172A\">NOR + Inverter = OR Gate (AR Q26)</text>\n\n  <!-- NOR Gate -->\n  <text x=\"35\" y=\"48\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">A</text>\n  <line x1=\"50\" y1=\"45\" x2=\"85\" y2=\"45\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <text x=\"35\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">B</text>\n  <line x1=\"50\" y1=\"85\" x2=\"85\" y2=\"85\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <path d=\"M 85,35 Q 95,65 85,95 Q 120,95 135,65 Q 120,35 85,35 Z\" fill=\"#EFF6FF\" stroke=\"#2563EB\" stroke-width=\"1.5\"/>\n  <circle cx=\"138\" cy=\"65\" r=\"3\" fill=\"#FFFFFF\" stroke=\"#2563EB\" stroke-width=\"1.5\"/>\n  <line x1=\"141\" y1=\"65\" x2=\"190\" y2=\"65\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"165\" y=\"58\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#2563EB\">X = (A+B)̄</text>\n\n  <!-- Inverting NOR Gate (tied inputs) -->\n  <line x1=\"190\" y1=\"65\" x2=\"210\" y2=\"50\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"190\" y1=\"65\" x2=\"210\" y2=\"80\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <path d=\"M 210,40 Q 220,65 210,90 Q 240,90 255,65 Q 240,40 210,40 Z\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"1.5\"/>\n  <circle cx=\"258\" cy=\"65\" r=\"3\" fill=\"#FFFFFF\" stroke=\"#16A34A\" stroke-width=\"1.5\"/>\n  <line x1=\"261\" y1=\"65\" x2=\"310\" y2=\"65\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"325\" y=\"69\" font-size=\"11\" font-weight=\"bold\" fill=\"#16A34A\">Y = A + B</text>\n</svg>"
  },
  {
    "id": "universal-elec-ar-q027",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: A P-N photodiode is made from a semiconductor for which Eg = 2.8 eV. This photodiode will not detect the wavelength of 6000 nm.\nReason: A PN photodiode detects wavelength λ if hc/λ > Eg.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Photodiodes operate on optical generation of electron-hole pairs, requiring photon energy hν ≥ E_g.\n⚡ Step-by-Step Derivation:\n1. The threshold absorption wavelength is λ_max = hc / E_g = 1240 / 2.8 ≈ 443 nm.\n2. An incident wavelength of 6000 nm (infrared) has photon energy E = 1240 / 6000 ≈ 0.21 eV, far below 2.8 eV.\n3. Therefore, it cannot generate photocurrent.\n4. Both Assertion and Reason are true, and Reason is the correct explanation.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q028",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: 29 is the equivalent decimal number of binary number 11101.\nReason: (11101)₂ = (1 × 2⁴ + 1 × 2³ + 1 × 2² + 0 × 2¹ + 1 × 2⁰)₁₀ = (16 + 8 + 4 + 0 + 1)₁₀ = (29)₁₀.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Conversion from base 2 to base 10 uses positional powers of 2.\n⚡ Step-by-Step Derivation:\n1. 1 × 2⁴ = 16\n2. 1 × 2³ = 8\n3. 1 × 2² = 4\n4. 0 × 2¹ = 0\n5. 1 × 2⁰ = 1\n6. Sum = 16 + 8 + 4 + 0 + 1 = 29.\n7. Both Assertion and Reason are true, and Reason is the correct explanation.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ar-q029",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: When PN-junction is forward biased then motion of charge carriers at junction is due to diffusion. In reverse biasing, the cause of motion of charge is drifting.\nReason: In the following circuit emitter is reverse biased and collector is forward biased.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Forward bias causes majority carriers to diffuse across the lowered barrier; reverse bias causes minority carriers to drift under the junction electric field.\n⚡ Step-by-Step Derivation:\n1. Assertion correctly states the physical transport mechanisms (diffusion in forward bias, drift in reverse bias).\n2. In the given PNP transistor, emitter (P) is at -2 V while base (N) is at 0 V. Since V_E < V_B, the emitter junction is reverse biased.\n3. Collector (P) is at +1 V while base (N) is at 0 V. Since V_C > V_B, the collector junction is forward biased.\n4. Both Assertion and Reason are true, but Reason describes a circuit biasing state and is not the physical explanation of diffusion vs drift.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 340 160\" class=\"w-full max-w-sm mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"340\" height=\"160\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"170\" y=\"20\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#0F172A\">PNP Transistor Biasing (AR Q29)</text>\n\n  <!-- PNP Transistor -->\n  <g transform=\"translate(170, 85)\">\n    <circle cx=\"0\" cy=\"0\" r=\"26\" fill=\"#EFF6FF\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n    <line x1=\"-10\" y1=\"-16\" x2=\"-10\" y2=\"16\" stroke=\"#1E293B\" stroke-width=\"3\"/>\n    <!-- Base -->\n    <line x1=\"-30\" y1=\"0\" x2=\"-10\" y2=\"0\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <text x=\"-35\" y=\"4\" text-anchor=\"end\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E293B\">B (0 V)</text>\n    <!-- Collector -->\n    <line x1=\"-10\" y1=\"-8\" x2=\"15\" y2=\"-20\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <text x=\"25\" y=\"-24\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E293B\">C (+1 V)</text>\n    <!-- Emitter pointing in for PNP -->\n    <line x1=\"15\" y1=\"20\" x2=\"-10\" y2=\"8\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <polygon points=\"2,12 8,19 0,16\" fill=\"#1E293B\"/>\n    <text x=\"25\" y=\"28\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E293B\">E (−2 V)</text>\n  </g>\n  <text x=\"170\" y=\"145\" text-anchor=\"middle\" font-size=\"9\" fill=\"#64748B\">PNP: Emitter (−2V) &lt; Base (0V) ⟹ Rev; Collector (+1V) &gt; Base (0V) ⟹ Fwd</text>\n</svg>"
  },
  {
    "id": "universal-elec-ar-q030",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: De-morgan's theorem (A + B)̄ = Ā · B̄ may be explained by the following circuit.\nReason: In the following circuit, for output, inputs ABC are 101.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: De Morgan's theorem states (A + B)̄ = Ā · B̄.\n⚡ Step-by-Step Derivation:\n1. The circuit shows inverted inputs Ā and B̄ feeding an AND gate, generating Y = Ā · B̄, which demonstrates De Morgan's theorem (Assertion is true).\n2. The Reason statement about input ABC being 101 is incorrect/false for this dual-input gate verification.\n3. Therefore, Assertion is true but Reason is false.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 380 140\" class=\"w-full max-w-sm mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"380\" height=\"140\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"190\" y=\"20\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#0F172A\">De Morgan's Equivalent Gate Network (AR Q30)</text>\n\n  <!-- Input A into NOT -->\n  <text x=\"35\" y=\"48\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">A</text>\n  <line x1=\"50\" y1=\"45\" x2=\"70\" y2=\"45\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <polygon points=\"70,38 90,45 70,52\" fill=\"#EFF6FF\" stroke=\"#2563EB\"/>\n  <circle cx=\"93\" cy=\"45\" r=\"3\" fill=\"#FFFFFF\" stroke=\"#2563EB\"/>\n  <line x1=\"96\" y1=\"45\" x2=\"140\" y2=\"45\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <!-- Input B into NOT -->\n  <text x=\"35\" y=\"88\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">B</text>\n  <line x1=\"50\" y1=\"85\" x2=\"70\" y2=\"85\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <polygon points=\"70,78 90,85 70,92\" fill=\"#EFF6FF\" stroke=\"#2563EB\"/>\n  <circle cx=\"93\" cy=\"85\" r=\"3\" fill=\"#FFFFFF\" stroke=\"#2563EB\"/>\n  <line x1=\"96\" y1=\"85\" x2=\"140\" y2=\"85\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <!-- AND Gate -->\n  <path d=\"M 140,35 L 165,35 A 25,25 0 0,1 165,95 L 140,95 Z\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"1.5\"/>\n  <line x1=\"190\" y1=\"65\" x2=\"230\" y2=\"65\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"240\" y=\"69\" font-size=\"11\" font-weight=\"bold\" fill=\"#16A34A\">Y = Ā · B̄ = (A+B)̄</text>\n</svg>"
  },
  {
    "id": "universal-elec-ar-q031",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Assertion & Reason (AIIMS Level)",
    "difficulty": "Hard",
    "questionText": "Assertion: In the following circuit the potential drop across the resistance is zero.\nReason: The given resistance has low value.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Both Assertion and Reason are false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: In reverse bias, an ideal diode conducts zero current (I = 0), so the voltage drop across any series resistor is V_R = I · R = 0 V.\n⚡ Step-by-Step Derivation:\n1. P-side is connected to -5 V and N-side to -2 V.\n2. Since -5 V < -2 V (anode potential is lower than cathode), the diode is reverse biased.\n3. Because the diode blocks all current (I = 0), the potential drop across the resistor is V_R = 0 × 0.1 Ω = 0 V (Assertion is true).\n4. The resistance R = 0.1 Ω is indeed small (Reason is true as a statement).\n5. However, the drop is zero because the diode blocks current, NOT because the resistance is low. Thus, Option (b) is correct.",
    "tags": [
      "Semiconductors",
      "Electronics",
      "Assertion and Reason",
      "AIIMS",
      "NEET Physics"
    ],
    "diagramSvg": "<svg viewBox=\"0 0 360 130\" class=\"w-full max-w-sm mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"360\" height=\"130\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"180\" y=\"20\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#0F172A\">Diode Reverse Bias with R = 0.1 Ω (AR Q31)</text>\n\n  <!-- Left terminal (-5V) -->\n  <circle cx=\"50\" cy=\"65\" r=\"4\" fill=\"#0F172A\"/>\n  <text x=\"50\" y=\"90\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#DC2626\">−5 V</text>\n  <line x1=\"54\" y1=\"65\" x2=\"120\" y2=\"65\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <!-- Diode pointing right: Anode at -5V, Cathode to resistor and -2V -->\n  <polygon points=\"120,52 145,65 120,78\" fill=\"#EF4444\" stroke=\"#B91C1C\"/>\n  <line x1=\"145\" y1=\"50\" x2=\"145\" y2=\"80\" stroke=\"#B91C1C\" stroke-width=\"2.5\"/>\n  <text x=\"115\" y=\"45\" font-size=\"9\" font-weight=\"bold\" fill=\"#B91C1C\">P (−5V)</text>\n  <text x=\"150\" y=\"45\" font-size=\"9\" font-weight=\"bold\" fill=\"#B91C1C\">N (−2V)</text>\n\n  <!-- Resistor 0.1 ohm -->\n  <line x1=\"145\" y1=\"65\" x2=\"190\" y2=\"65\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <rect x=\"190\" y=\"58\" width=\"55\" height=\"14\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n  <text x=\"217\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">R = 0.1 Ω</text>\n  <line x1=\"245\" y1=\"65\" x2=\"306\" y2=\"65\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <!-- Right terminal (-2V) -->\n  <circle cx=\"310\" cy=\"65\" r=\"4\" fill=\"#0F172A\"/>\n  <text x=\"310\" y=\"90\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563EB\">−2 V</text>\n\n  <text x=\"180\" y=\"118\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#DC2626\">Reverse Biased: V_P (−5V) &lt; V_N (−2V) ⟹ Current = 0 ⟹ V_R = 0</text>\n</svg>"
  }
];
