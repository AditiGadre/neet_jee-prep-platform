import { Question } from "../types";

export const ELECTRONICS_CIRCUIT_AND_GRAPHICAL_QUESTIONS: Question[] = [
  {
    "id": "universal-elec-ct-q06",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Parallel Diodes in DC Circuit",
    "difficulty": "Medium",
    "questionText": "A 2V battery is connected across points A and B as shown in the figure. Assuming the resistance of each diode is zero in forward bias and infinity in reverse bias, the current supplied by the battery when its positive terminal is connected to A is: [UPSEAT 2002]",
    "diagramSvg": "<svg viewBox=\"0 0 380 170\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"380\" height=\"170\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"190\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">Parallel Diode Branches (UPSEAT 2002)</text>\n\n  <!-- Node A (+2V) -->\n  <circle cx=\"50\" cy=\"85\" r=\"4\" fill=\"#0F172A\"/>\n  <text x=\"40\" y=\"90\" text-anchor=\"end\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563EB\">A (+)</text>\n  <line x1=\"54\" y1=\"85\" x2=\"90\" y2=\"85\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"90\" y1=\"85\" x2=\"90\" y2=\"50\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"90\" y1=\"85\" x2=\"90\" y2=\"120\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <!-- Top branch (Forward Biased) -->\n  <line x1=\"90\" y1=\"50\" x2=\"130\" y2=\"50\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <polygon points=\"130,43 150,50 130,57\" fill=\"#16A34A\" stroke=\"#15803D\"/>\n  <line x1=\"150\" y1=\"40\" x2=\"150\" y2=\"60\" stroke=\"#15803D\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"50\" x2=\"190\" y2=\"50\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <rect x=\"190\" y=\"43\" width=\"55\" height=\"14\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n  <text x=\"217\" y=\"54\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#854D0E\">10 Ω</text>\n  <line x1=\"245\" y1=\"50\" x2=\"285\" y2=\"50\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <text x=\"140\" y=\"35\" font-size=\"8\" font-weight=\"bold\" fill=\"#16A34A\">Forward (Conducts)</text>\n\n  <!-- Bottom branch (Reverse Biased) -->\n  <line x1=\"90\" y1=\"120\" x2=\"130\" y2=\"120\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"130\" y1=\"110\" x2=\"130\" y2=\"130\" stroke=\"#B91C1C\" stroke-width=\"2\"/>\n  <polygon points=\"150,113 130,120 150,127\" fill=\"#EF4444\" stroke=\"#B91C1C\"/>\n  <line x1=\"150\" y1=\"120\" x2=\"190\" y2=\"120\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <rect x=\"190\" y=\"113\" width=\"55\" height=\"14\" rx=\"2\" fill=\"#E2E8F0\" stroke=\"#94A3B8\"/>\n  <text x=\"217\" y=\"124\" text-anchor=\"middle\" font-size=\"8\" fill=\"#64748B\">10 Ω</text>\n  <line x1=\"245\" y1=\"120\" x2=\"285\" y2=\"120\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <text x=\"140\" y=\"145\" font-size=\"8\" font-weight=\"bold\" fill=\"#DC2626\">Reverse (Open)</text>\n\n  <!-- Node B (-) -->\n  <line x1=\"285\" y1=\"50\" x2=\"285\" y2=\"120\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"285\" y1=\"85\" x2=\"320\" y2=\"85\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <circle cx=\"320\" cy=\"85\" r=\"4\" fill=\"#0F172A\"/>\n  <text x=\"330\" y=\"90\" font-size=\"11\" font-weight=\"bold\" fill=\"#DC2626\">B (−)</text>\n</svg>",
    "options": [
      "0.2 A",
      "0.4 A",
      "Zero",
      "0.1 A"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: In a parallel diode network, identify the biasing of each branch from applied terminal potentials.\n⚡ Step-by-Step Derivation:\n1. Positive terminal connected to A makes the top diode forward biased (anode connected to A).\n2. The bottom diode has its cathode connected to A, making it reverse biased (open circuit).\n3. Current flows exclusively through the upper 10 Ω branch:\n   I = V / R = 2 V / 10 Ω = 0.2 A.\n💡 Examiner Pro-Tip: Ideal diode in forward bias has 0 Ω resistance; in reverse bias it is an open switch.",
    "tags": [
      "Diodes",
      "Circuit Analysis",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ct-q07",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Knee Potential & Diode Current",
    "difficulty": "Easy",
    "questionText": "In the circuit, if the forward voltage drop for the diode is 0.5 V, the current will be: [UPSEAT 2003]",
    "diagramSvg": "<svg viewBox=\"0 0 340 140\" class=\"w-full max-w-sm mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"340\" height=\"140\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"170\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">Diode Knee Drop Circuit (UPSEAT 2003)</text>\n\n  <!-- 8V Battery -->\n  <line x1=\"50\" y1=\"70\" x2=\"80\" y2=\"70\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"80\" y1=\"55\" x2=\"80\" y2=\"85\" stroke=\"#2563EB\" stroke-width=\"3\"/>\n  <line x1=\"86\" y1=\"60\" x2=\"86\" y2=\"80\" stroke=\"#DC2626\" stroke-width=\"1.5\"/>\n  <text x=\"75\" y=\"48\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">8 V</text>\n  <line x1=\"86\" y1=\"70\" x2=\"130\" y2=\"70\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <!-- Diode with 0.5V drop -->\n  <polygon points=\"130,63 150,70 130,77\" fill=\"#16A34A\" stroke=\"#15803D\"/>\n  <line x1=\"150\" y1=\"60\" x2=\"150\" y2=\"80\" stroke=\"#15803D\" stroke-width=\"2\"/>\n  <text x=\"140\" y=\"55\" font-size=\"9\" font-weight=\"bold\" fill=\"#16A34A\">0.5 V</text>\n\n  <!-- 2.2k Resistor -->\n  <line x1=\"150\" y1=\"70\" x2=\"190\" y2=\"70\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <rect x=\"190\" y=\"63\" width=\"55\" height=\"14\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n  <text x=\"217\" y=\"74\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#854D0E\">2.2 kΩ</text>\n  <line x1=\"245\" y1=\"70\" x2=\"280\" y2=\"70\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <!-- Return path -->\n  <line x1=\"280\" y1=\"70\" x2=\"280\" y2=\"105\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"280\" y1=\"105\" x2=\"50\" y2=\"105\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"50\" y1=\"105\" x2=\"50\" y2=\"70\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n</svg>",
    "options": [
      "3.4 mA",
      "2 mA",
      "2.5 mA",
      "3 mA"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: The potential across the series resistor is V_R = V_battery - V_knee.\n⚡ Step-by-Step Derivation:\n1. Voltage drop across 2.2 kΩ resistor: V_R = 8 V - 0.5 V = 7.5 V.\n2. Current by Ohm's law:\n   I = V_R / R = 7.5 V / 2.2 kΩ = 3.409 mA ≈ 3.4 mA.\n💡 Examiner Pro-Tip: Fast division: 7.5 / 2.2 ≈ 3.41 mA.",
    "tags": [
      "Diodes",
      "Knee Voltage",
      "Ohm's Law",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ct-q09",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Bridge Network Diode Current",
    "difficulty": "Medium",
    "questionText": "Current in the circuit shown will be: [CBSE PMT 2001]",
    "diagramSvg": "<svg viewBox=\"0 0 380 170\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"380\" height=\"170\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"190\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">Diode Network Current (CBSE PMT 2001)</text>\n\n  <!-- 5V Battery on Left -->\n  <line x1=\"40\" y1=\"85\" x2=\"70\" y2=\"85\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"70\" y1=\"70\" x2=\"70\" y2=\"100\" stroke=\"#2563EB\" stroke-width=\"3\"/>\n  <line x1=\"76\" y1=\"75\" x2=\"76\" y2=\"95\" stroke=\"#DC2626\" stroke-width=\"1.5\"/>\n  <text x=\"65\" y=\"62\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">5 V</text>\n  <line x1=\"76\" y1=\"85\" x2=\"110\" y2=\"85\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <!-- Split into Upper and Lower Branches -->\n  <line x1=\"110\" y1=\"85\" x2=\"110\" y2=\"50\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"110\" y1=\"85\" x2=\"110\" y2=\"120\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <!-- Upper Branch (Reverse Diode) -->\n  <line x1=\"110\" y1=\"50\" x2=\"140\" y2=\"50\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"140\" y1=\"40\" x2=\"140\" y2=\"60\" stroke=\"#B91C1C\" stroke-width=\"2\"/>\n  <polygon points=\"160,43 140,50 160,57\" fill=\"#EF4444\" stroke=\"#B91C1C\"/>\n  <line x1=\"160\" y1=\"50\" x2=\"190\" y2=\"50\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <rect x=\"190\" y=\"43\" width=\"50\" height=\"14\" rx=\"2\" fill=\"#E2E8F0\" stroke=\"#94A3B8\"/>\n  <text x=\"215\" y=\"54\" text-anchor=\"middle\" font-size=\"8\" fill=\"#64748B\">20 Ω</text>\n  <line x1=\"240\" y1=\"50\" x2=\"280\" y2=\"50\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <!-- Lower Branch (Forward Diode + 30 ohm + 20 ohm) -->\n  <line x1=\"110\" y1=\"120\" x2=\"140\" y2=\"120\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <polygon points=\"140,113 160,120 140,127\" fill=\"#16A34A\" stroke=\"#15803D\"/>\n  <line x1=\"160\" y1=\"110\" x2=\"160\" y2=\"130\" stroke=\"#15803D\" stroke-width=\"2\"/>\n  <line x1=\"160\" y1=\"120\" x2=\"180\" y2=\"120\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <rect x=\"180\" y=\"113\" width=\"40\" height=\"14\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n  <text x=\"200\" y=\"124\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#854D0E\">30 Ω</text>\n  <line x1=\"220\" y1=\"120\" x2=\"240\" y2=\"120\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <rect x=\"240\" y=\"113\" width=\"40\" height=\"14\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n  <text x=\"260\" y=\"124\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#854D0E\">20 Ω</text>\n  <line x1=\"280\" y1=\"120\" x2=\"280\" y2=\"50\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <!-- Return to battery -->\n  <line x1=\"280\" y1=\"85\" x2=\"310\" y2=\"85\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"310\" y1=\"85\" x2=\"310\" y2=\"150\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"310\" y1=\"150\" x2=\"40\" y2=\"150\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"40\" y1=\"150\" x2=\"40\" y2=\"85\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n</svg>",
    "options": [
      "5 / 40 A",
      "5 / 50 A",
      "5 / 10 A",
      "5 / 20 A"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: In reverse bias, a diode behaves as an open circuit (I = 0).\n⚡ Step-by-Step Derivation:\n1. The diode in the upper branch is reverse biased and carries zero current.\n2. The diode in the lower branch is forward biased and conducts with zero resistance.\n3. The lower branch contains resistors 20 Ω and 30 Ω in series, giving total circuit resistance R = 20 + 30 = 50 Ω.\n4. Current supplied by the 5 V battery: I = 5 / 50 A (or 0.1 A).\n💡 Examiner Pro-Tip: Identify the reverse-biased branch immediately and discard it.",
    "tags": [
      "Diodes",
      "Circuit Analysis",
      "CBSE PMT",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ct-q12",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Common Emitter Voltage Amplification",
    "difficulty": "Medium",
    "questionText": "In the following common emitter configuration, an NPN transistor with current gain β = 100 is used. The output voltage V_out of the amplifier will be: [AIIMS 2003]",
    "diagramSvg": "<svg viewBox=\"0 0 380 190\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"380\" height=\"190\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"190\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">CE Voltage Amplifier (AIIMS 2003)</text>\n\n  <!-- Input Signal 1 mV & 1 kΩ -->\n  <circle cx=\"50\" cy=\"100\" r=\"12\" fill=\"#DBEAFE\" stroke=\"#2563EB\"/>\n  <text x=\"50\" y=\"104\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#1D4ED8\">1 mV</text>\n  <line x1=\"62\" y1=\"100\" x2=\"85\" y2=\"100\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <rect x=\"85\" y=\"93\" width=\"40\" height=\"14\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n  <text x=\"105\" y=\"104\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#854D0E\">1 kΩ</text>\n  <line x1=\"125\" y1=\"100\" x2=\"160\" y2=\"100\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <!-- NPN Transistor -->\n  <g transform=\"translate(180, 100)\">\n    <circle cx=\"0\" cy=\"0\" r=\"24\" fill=\"#EFF6FF\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n    <line x1=\"-10\" y1=\"-15\" x2=\"-10\" y2=\"15\" stroke=\"#1E293B\" stroke-width=\"2.5\"/>\n    <line x1=\"-20\" y1=\"0\" x2=\"-10\" y2=\"0\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <line x1=\"-10\" y1=\"-8\" x2=\"12\" y2=\"-18\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <line x1=\"12\" y1=\"-18\" x2=\"12\" y2=\"-35\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <line x1=\"-10\" y1=\"8\" x2=\"12\" y2=\"18\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <polygon points=\"10,14 14,20 6,20\" fill=\"#1E293B\"/>\n    <line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"35\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  </g>\n\n  <!-- Collector Load 10 kΩ & V_out -->\n  <rect x=\"182\" y=\"30\" width=\"20\" height=\"35\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n  <text x=\"215\" y=\"52\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">R_L = 10 kΩ</text>\n  <line x1=\"192\" y1=\"30\" x2=\"192\" y2=\"15\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"192\" y1=\"65\" x2=\"270\" y2=\"65\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <circle cx=\"275\" cy=\"65\" r=\"3\" fill=\"#16A34A\"/>\n  <text x=\"285\" y=\"69\" font-size=\"11\" font-weight=\"bold\" fill=\"#16A34A\">V_out = 1.0 V</text>\n\n  <!-- β annotation -->\n  <text x=\"180\" y=\"165\" text-anchor=\"middle\" font-size=\"9\" fill=\"#475569\">β = 100, R_in = 1 kΩ, R_L = 10 kΩ</text>\n</svg>",
    "options": [
      "10 mV",
      "0.1 V",
      "1.0 V",
      "10 V"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Voltage gain of a common-emitter amplifier is A_v = β · (R_L / R_in).\n⚡ Step-by-Step Derivation:\n1. Given current gain β = 100, load resistance R_L = 10 kΩ, and input resistance R_in = 1 kΩ.\n2. Voltage gain:\n   A_v = 100 × (10 kΩ / 1 kΩ) = 100 × 10 = 1000.\n3. Output voltage:\n   V_out = A_v × V_in = 1000 × 1 mV = 1000 mV = 1.0 V.\n💡 Examiner Pro-Tip: Remember A_v = Current Gain × Resistance Gain = 100 × 10 = 1000.",
    "tags": [
      "Transistors",
      "Common Emitter",
      "Voltage Gain",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-ct-q26",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Parallel Ge and Si Diodes",
    "difficulty": "Hard",
    "questionText": "Ge and Si diodes conduct at 0.3 V and 0.7 V respectively. In the following figure, if the Ge diode connection is reversed, the value of V₀ changes by: [Roorkee 2000]",
    "diagramSvg": "<svg viewBox=\"0 0 380 180\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"380\" height=\"180\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"190\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">Parallel Ge (0.3V) and Si (0.7V) Diodes</text>\n\n  <!-- 12V Battery -->\n  <line x1=\"50\" y1=\"90\" x2=\"80\" y2=\"90\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"80\" y1=\"75\" x2=\"80\" y2=\"105\" stroke=\"#2563EB\" stroke-width=\"3\"/>\n  <line x1=\"86\" y1=\"80\" x2=\"86\" y2=\"100\" stroke=\"#DC2626\" stroke-width=\"1.5\"/>\n  <text x=\"75\" y=\"68\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">12 V</text>\n  <line x1=\"86\" y1=\"90\" x2=\"130\" y2=\"90\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <!-- Ge Diode (Top) -->\n  <line x1=\"130\" y1=\"90\" x2=\"130\" y2=\"60\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"130\" y1=\"60\" x2=\"155\" y2=\"60\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <polygon points=\"155,53 175,60 155,67\" fill=\"#3B82F6\" stroke=\"#1D4ED8\"/>\n  <line x1=\"175\" y1=\"50\" x2=\"175\" y2=\"70\" stroke=\"#1D4ED8\" stroke-width=\"2\"/>\n  <text x=\"165\" y=\"45\" font-size=\"9\" font-weight=\"bold\" fill=\"#1D4ED8\">Ge (0.3 V)</text>\n  <line x1=\"175\" y1=\"60\" x2=\"205\" y2=\"60\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <!-- Si Diode (Bottom) -->\n  <line x1=\"130\" y1=\"90\" x2=\"130\" y2=\"120\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"130\" y1=\"120\" x2=\"155\" y2=\"120\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <polygon points=\"155,113 175,120 155,127\" fill=\"#10B981\" stroke=\"#047857\"/>\n  <line x1=\"175\" y1=\"110\" x2=\"175\" y2=\"130\" stroke=\"#047857\" stroke-width=\"2\"/>\n  <text x=\"165\" y=\"142\" font-size=\"9\" font-weight=\"bold\" fill=\"#047857\">Si (0.7 V)</text>\n  <line x1=\"175\" y1=\"120\" x2=\"205\" y2=\"120\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <!-- Combine and 5k resistor -->\n  <line x1=\"205\" y1=\"60\" x2=\"205\" y2=\"120\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"205\" y1=\"90\" x2=\"240\" y2=\"90\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <rect x=\"240\" y=\"83\" width=\"50\" height=\"14\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n  <text x=\"265\" y=\"94\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#854D0E\">5 kΩ</text>\n  <line x1=\"290\" y1=\"90\" x2=\"330\" y2=\"90\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <circle cx=\"330\" cy=\"90\" r=\"3\" fill=\"#16A34A\"/>\n  <text x=\"340\" y=\"94\" font-size=\"10\" font-weight=\"bold\" fill=\"#16A34A\">V₀</text>\n</svg>",
    "options": [
      "0.2 V",
      "0.4 V",
      "0.6 V",
      "0.8 V"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: In a parallel combination of two diodes with different knee voltages, the diode with the lower turn-on voltage conducts first and clamps the parallel voltage.\n⚡ Step-by-Step Derivation:\n1. Initially, Ge diode turns on at 0.3 V. The voltage across the parallel pair is clamped at 0.3 V, preventing the Si diode (0.7 V) from conducting.\n   Output voltage V₀ = 12 V - 0.3 V = 11.7 V.\n2. When the Ge diode is reversed, it becomes reverse biased and blocks current completely.\n3. The Si diode now turns on at 0.7 V.\n   New output voltage V₀' = 12 V - 0.7 V = 11.3 V.\n4. Change in output voltage: ΔV₀ = 11.7 V - 11.3 V = 0.4 V (or 0.7 - 0.3 = 0.4 V).\n💡 Examiner Pro-Tip: The difference in output voltages is simply the difference between the two barrier potentials: 0.7 V - 0.3 V = 0.4 V.",
    "tags": [
      "Diodes",
      "Knee Voltage",
      "Roorkee",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-gq-01",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Resistivity vs Temperature in Semiconductors",
    "difficulty": "Easy",
    "questionText": "The temperature (T) dependence of resistivity (ρ) of an intrinsic semiconductor is represented by: [AIIMS 2004]",
    "diagramSvg": "<svg viewBox=\"0 0 380 180\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"380\" height=\"180\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"190\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">Resistivity (ρ) vs Temperature (T) (AIIMS 2004)</text>\n\n  <!-- Axes -->\n  <line x1=\"60\" y1=\"140\" x2=\"330\" y2=\"140\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <line x1=\"60\" y1=\"140\" x2=\"60\" y2=\"35\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"335\" y=\"144\" font-size=\"11\" font-weight=\"bold\" fill=\"#1E293B\">T</text>\n  <text x=\"45\" y=\"40\" font-size=\"11\" font-weight=\"bold\" fill=\"#1E293B\">ρ</text>\n  <text x=\"50\" y=\"152\" font-size=\"10\" fill=\"#64748B\">O</text>\n\n  <!-- Exponential Decay Curve (c) -->\n  <path d=\"M 70,45 Q 100,125 310,135\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"3\"/>\n  <text x=\"170\" y=\"80\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">ρ = ρ₀ e^(E_g / 2kT)</text>\n  <text x=\"210\" y=\"165\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#16A34A\">Curve (c): Exponential decrease with T</text>\n</svg>",
    "options": [
      "Linear increase with temperature",
      "Linear decrease with temperature",
      "Exponential decrease with temperature (Curve c)",
      "Parabolic increase with temperature"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: In intrinsic semiconductors, carrier concentration increases exponentially with temperature as n_i ∝ T^(3/2) e^(-E_g / 2kT).\n⚡ Step-by-Step Derivation:\n1. Resistivity is given by ρ = 1 / [e (n_e μ_e + n_h μ_h)].\n2. As temperature increases, carrier concentration surges exponentially, causing resistivity to drop exponentially.\n3. Curve (c) displays this characteristic exponential decay with upward concavity.\n💡 Examiner Pro-Tip: In metals, ρ increases linearly with T; in semiconductors, ρ drops exponentially with T.",
    "tags": [
      "Semiconductors",
      "Resistivity",
      "Temperature",
      "AIIMS",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-gq-11",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Dynamic Resistance from Diode I-V Curve",
    "difficulty": "Medium",
    "questionText": "The i-V characteristic of a P-N junction diode is shown below. The approximate dynamic resistance of the P-N junction when a forward bias of 2 volt is applied is: [SET-27 GQ11]",
    "diagramSvg": "<svg viewBox=\"0 0 380 180\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"380\" height=\"180\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"190\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">Diode Dynamic Resistance at 2 V</text>\n\n  <!-- Axes -->\n  <line x1=\"60\" y1=\"140\" x2=\"330\" y2=\"140\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <line x1=\"60\" y1=\"140\" x2=\"60\" y2=\"35\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"335\" y=\"144\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E293B\">V (volt)</text>\n  <text x=\"30\" y=\"40\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E293B\">i (mA)</text>\n\n  <!-- Characteristic Curve -->\n  <path d=\"M 60,140 Q 180,135 240,90 Q 270,60 280,35\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>\n\n  <!-- Point 1: (2.0 V, 400 mA) -->\n  <circle cx=\"240\" cy=\"90\" r=\"4\" fill=\"#DC2626\"/>\n  <line x1=\"240\" y1=\"90\" x2=\"240\" y2=\"140\" stroke=\"#94A3B8\" stroke-dasharray=\"2,2\"/>\n  <line x1=\"60\" y1=\"90\" x2=\"240\" y2=\"90\" stroke=\"#94A3B8\" stroke-dasharray=\"2,2\"/>\n  <text x=\"240\" y=\"155\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#1E293B\">2.0</text>\n  <text x=\"50\" y=\"93\" text-anchor=\"end\" font-size=\"9\" font-weight=\"bold\" fill=\"#1E293B\">400</text>\n\n  <!-- Point 2: (2.1 V, 800 mA) -->\n  <circle cx=\"265\" cy=\"50\" r=\"4\" fill=\"#DC2626\"/>\n  <line x1=\"265\" y1=\"50\" x2=\"265\" y2=\"140\" stroke=\"#94A3B8\" stroke-dasharray=\"2,2\"/>\n  <line x1=\"60\" y1=\"50\" x2=\"265\" y2=\"50\" stroke=\"#94A3B8\" stroke-dasharray=\"2,2\"/>\n  <text x=\"270\" y=\"155\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#1E293B\">2.1</text>\n  <text x=\"50\" y=\"53\" text-anchor=\"end\" font-size=\"9\" font-weight=\"bold\" fill=\"#1E293B\">800</text>\n\n  <!-- Calculation banner -->\n  <text x=\"190\" y=\"172\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#16A34A\">r_d = ΔV / Δi = (2.1 − 2.0) / (800 − 400) mA = 0.1 / 0.4 A = 0.25 Ω</text>\n</svg>",
    "options": [
      "1 Ω",
      "0.25 Ω",
      "0.5 Ω",
      "5 Ω"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Dynamic resistance of a diode is the reciprocal of the slope of the forward V-I characteristic: r_d = ΔV / Δi.\n⚡ Step-by-Step Derivation:\n1. From the curve, at V = 2.0 V, i = 400 mA.\n2. At V = 2.1 V, i = 800 mA.\n3. Voltage change: ΔV = 2.1 - 2.0 = 0.1 V.\n4. Current change: Δi = (800 - 400) mA = 400 mA = 0.4 A.\n5. Dynamic resistance:\n   r_d = ΔV / Δi = 0.1 V / 0.4 A = 1/4 Ω = 0.25 Ω.\n💡 Examiner Pro-Tip: Convert mA to amperes before calculating resistance: 400 mA = 0.4 A.",
    "tags": [
      "Diodes",
      "Dynamic Resistance",
      "Graphical Analysis",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-elec-gq-12",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Logic Gate Waveform Identification",
    "difficulty": "Medium",
    "questionText": "The given figure shows the waveforms for two inputs A and B and the output Y of a logic circuit. The logic circuit is: [UPSEAT 2002]",
    "diagramSvg": "<svg viewBox=\"0 0 420 180\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"420\" height=\"180\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"210\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">Waveform Truth Table: Inputs A, B &amp; Output Y</text>\n\n  <!-- Input A -->\n  <text x=\"35\" y=\"48\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563EB\">A</text>\n  <polyline points=\"60,55 120,55 120,35 240,35 240,55 300,55\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>\n\n  <!-- Input B -->\n  <text x=\"35\" y=\"98\" font-size=\"11\" font-weight=\"bold\" fill=\"#7C3AED\">B</text>\n  <polyline points=\"60,105 180,105 180,85 240,85 240,105 300,105\" fill=\"none\" stroke=\"#7C3AED\" stroke-width=\"2.5\"/>\n\n  <!-- Output Y: only high when A=1 and B=1 -->\n  <text x=\"35\" y=\"148\" font-size=\"11\" font-weight=\"bold\" fill=\"#16A34A\">Y</text>\n  <polyline points=\"60,155 180,155 180,135 240,135 240,155 300,155\" fill=\"none\" stroke=\"#16A34A\" stroke-width=\"2.5\"/>\n\n  <!-- Time dashed lines -->\n  <line x1=\"120\" y1=\"28\" x2=\"120\" y2=\"165\" stroke=\"#CBD5E1\" stroke-dasharray=\"2,2\"/>\n  <line x1=\"180\" y1=\"28\" x2=\"180\" y2=\"165\" stroke=\"#CBD5E1\" stroke-dasharray=\"2,2\"/>\n  <line x1=\"240\" y1=\"28\" x2=\"240\" y2=\"165\" stroke=\"#CBD5E1\" stroke-dasharray=\"2,2\"/>\n\n  <text x=\"90\" y=\"172\" text-anchor=\"middle\" font-size=\"9\" fill=\"#64748B\">0 0 ⟹ 0</text>\n  <text x=\"150\" y=\"172\" text-anchor=\"middle\" font-size=\"9\" fill=\"#64748B\">1 0 ⟹ 0</text>\n  <text x=\"210\" y=\"172\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#16A34A\">1 1 ⟹ 1</text>\n  <text x=\"270\" y=\"172\" text-anchor=\"middle\" font-size=\"9\" fill=\"#64748B\">0 0 ⟹ 0</text>\n</svg>",
    "options": [
      "An AND gate",
      "An OR gate",
      "A NAND gate",
      "An NOT gate"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: In digital waveforms, compare input levels (0 or 1) in each interval to identify the logic operator.\n⚡ Step-by-Step Derivation:\n1. In interval 1: A = 0, B = 0 ⟹ Y = 0\n2. In interval 2: A = 1, B = 0 ⟹ Y = 0\n3. In interval 3: A = 1, B = 1 ⟹ Y = 1\n4. In interval 4: A = 0, B = 0 ⟹ Y = 0\n5. Output Y is 1 if and only if both A = 1 and B = 1. This is the characteristic truth table of an AND gate (Y = A · B).\n💡 Examiner Pro-Tip: Output is HIGH ONLY when both inputs are simultaneously HIGH ⟹ AND gate.",
    "tags": [
      "Digital Electronics",
      "Logic Gates",
      "Waveforms",
      "UPSEAT",
      "NEET Physics"
    ]
  }
];
