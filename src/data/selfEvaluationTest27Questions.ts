import { Question } from "../types";

export const SELF_EVALUATION_TEST_27_QUESTIONS: Question[] = [
  {
    "id": "universal-set27-q01",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Law of Mass Action & Doping",
    "difficulty": "Medium",
    "questionText": "In a pure silicon (n_i = 10¹⁶ / m³) crystal at 300 K, 10²¹ atoms of phosphorus are added per cubic meter. The new hole concentration will be: [SET-27]",
    "options": [
      "10²¹ per m³",
      "10¹⁹ per m³",
      "10¹¹ per m³",
      "10⁵ per m³"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: According to the Law of Mass Action for semiconductors in thermal equilibrium, n_i² = n_e · n_h.\n⚡ Step-by-Step Derivation:\n1. Phosphorus is a pentavalent donor impurity, so at 300 K almost all donors are ionized: n_e ≈ N_D = 10²¹ m⁻³.\n2. Given intrinsic concentration n_i = 10¹⁶ m⁻³.\n3. Using n_i² = n_e · n_h:\n   n_h = (n_i)² / n_e = (10¹⁶)² / 10²¹ = 10³² / 10²¹ = 10¹¹ per m³.\n💡 Examiner Pro-Tip: Heavy donor doping drastically reduces minority hole concentration through recombination.",
    "tags": [
      "Semiconductors",
      "Mass Action",
      "Doping",
      "SET-27",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set27-q02",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Boolean Algebra Laws",
    "difficulty": "Easy",
    "questionText": "In Boolean algebra, the expression (A + B) · A equals to: [SET-27]",
    "options": [
      "Ā + B",
      "A",
      "A · B̄",
      "A + B"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: The Absorption Law in Boolean algebra states that A · (A + B) = A and (A + B) · A = A.\n⚡ Step-by-Step Derivation:\n1. Expanding the expression: (A + B) · A = A · A + B · A.\n2. By idempotence in Boolean algebra, A · A = A.\n3. Thus: A + A · B = A · (1 + B).\n4. Since (1 + B) = 1 in Boolean logic: A · 1 = A.\n💡 Examiner Pro-Tip: The absorption identity A(A + B) = A simplifies multi-gate circuits instantly.",
    "tags": [
      "Digital Electronics",
      "Boolean Algebra",
      "SET-27",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set27-q03",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Logic Gates Waveform Analysis",
    "difficulty": "Hard",
    "questionText": "In the given circuit, two input waveforms A and B are applied simultaneously to the logic gate network. The resultant output waveform Y is: [SET-27]",
    "diagramSvg": "<svg viewBox=\"0 0 450 260\" class=\"w-full max-w-lg mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"260\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"225\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">Input Waveforms &amp; Gate Combination (SET-27 Q3)</text>\n\n  <!-- Input Waveform A -->\n  <text x=\"30\" y=\"55\" font-size=\"11\" font-weight=\"bold\" fill=\"#1E293B\">A</text>\n  <polyline points=\"50,45 80,45 80,70 120,70 120,45 160,45 160,70 200,70\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>\n  <text x=\"65\" y=\"40\" font-size=\"9\" fill=\"#2563EB\">1</text>\n  <text x=\"100\" y=\"82\" font-size=\"9\" fill=\"#2563EB\">0</text>\n  <text x=\"140\" y=\"40\" font-size=\"9\" fill=\"#2563EB\">1</text>\n  <text x=\"180\" y=\"82\" font-size=\"9\" fill=\"#2563EB\">0</text>\n\n  <!-- Input Waveform B -->\n  <text x=\"30\" y=\"125\" font-size=\"11\" font-weight=\"bold\" fill=\"#1E293B\">B</text>\n  <polyline points=\"50,115 80,115 80,140 160,140 160,115 200,115\" fill=\"none\" stroke=\"#7C3AED\" stroke-width=\"2.5\"/>\n  <text x=\"65\" y=\"110\" font-size=\"9\" fill=\"#7C3AED\">1</text>\n  <text x=\"120\" y=\"152\" font-size=\"9\" fill=\"#7C3AED\">0</text>\n  <text x=\"180\" y=\"110\" font-size=\"9\" fill=\"#7C3AED\">1</text>\n\n  <!-- Time dashed grid -->\n  <line x1=\"80\" y1=\"35\" x2=\"80\" y2=\"245\" stroke=\"#CBD5E1\" stroke-dasharray=\"3,3\"/>\n  <line x1=\"120\" y1=\"35\" x2=\"120\" y2=\"245\" stroke=\"#CBD5E1\" stroke-dasharray=\"3,3\"/>\n  <line x1=\"160\" y1=\"35\" x2=\"160\" y2=\"245\" stroke=\"#CBD5E1\" stroke-dasharray=\"3,3\"/>\n  <line x1=\"200\" y1=\"35\" x2=\"200\" y2=\"245\" stroke=\"#CBD5E1\" stroke-dasharray=\"3,3\"/>\n\n  <text x=\"65\" y=\"170\" text-anchor=\"middle\" font-size=\"8\" fill=\"#64748B\">T1</text>\n  <text x=\"100\" y=\"170\" text-anchor=\"middle\" font-size=\"8\" fill=\"#64748B\">T2</text>\n  <text x=\"140\" y=\"170\" text-anchor=\"middle\" font-size=\"8\" fill=\"#64748B\">T3</text>\n  <text x=\"180\" y=\"170\" text-anchor=\"middle\" font-size=\"8\" fill=\"#64748B\">T4</text>\n\n  <!-- Output Waveform Y: [0, 1, 1, 1] -->\n  <text x=\"30\" y=\"215\" font-size=\"11\" font-weight=\"bold\" fill=\"#16A34A\">Y (a)</text>\n  <polyline points=\"50,230 80,230 80,200 200,200\" fill=\"none\" stroke=\"#16A34A\" stroke-width=\"2.5\"/>\n  <text x=\"65\" y=\"242\" font-size=\"9\" fill=\"#16A34A\">0</text>\n  <text x=\"140\" y=\"195\" font-size=\"9\" fill=\"#16A34A\">1 (High for T2, T3, T4)</text>\n\n  <!-- Gate Diagram on Right -->\n  <g transform=\"translate(235, 40)\">\n    <rect width=\"195\" height=\"150\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#E2E8F0\"/>\n    <text x=\"97\" y=\"18\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#0F172A\">Circuit: NOT + NOT into OR</text>\n    <text x=\"15\" y=\"52\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">A</text>\n    <line x1=\"30\" y1=\"48\" x2=\"45\" y2=\"48\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <polygon points=\"45,40 65,48 45,56\" fill=\"#EFF6FF\" stroke=\"#2563EB\" stroke-width=\"1.5\"/>\n    <circle cx=\"68\" cy=\"48\" r=\"3\" fill=\"#FFFFFF\" stroke=\"#2563EB\" stroke-width=\"1.5\"/>\n    <line x1=\"71\" y1=\"48\" x2=\"105\" y2=\"48\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n    <text x=\"15\" y=\"104\" font-size=\"10\" font-weight=\"bold\" fill=\"#7C3AED\">B</text>\n    <line x1=\"30\" y1=\"100\" x2=\"45\" y2=\"100\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <polygon points=\"45,92 65,100 45,108\" fill=\"#F5F3FF\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n    <circle cx=\"68\" cy=\"100\" r=\"3\" fill=\"#FFFFFF\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n    <line x1=\"71\" y1=\"100\" x2=\"105\" y2=\"100\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n    <path d=\"M 105,40 Q 115,74 105,108 Q 140,108 155,74 Q 140,40 105,40 Z\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"1.5\"/>\n    <line x1=\"155\" y1=\"74\" x2=\"185\" y2=\"74\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <text x=\"180\" y=\"68\" font-size=\"10\" font-weight=\"bold\" fill=\"#16A34A\">Y</text>\n    <text x=\"97\" y=\"135\" text-anchor=\"middle\" font-size=\"9\" fill=\"#475569\">Y = Ā + B̄ = (A · B)̄</text>\n  </g>\n</svg>",
    "options": [
      "Waveform with low (0) in interval 1, and high (1) in intervals 2, 3, 4",
      "Waveform with high (1) in interval 1, and low (0) in intervals 2, 3, 4",
      "Waveform with alternating high and low in all intervals",
      "Waveform remaining low (0) throughout all intervals"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: A circuit with two NOT gates feeding an OR gate computes Y = Ā + B̄. By De Morgan's theorem, this is equivalent to a NAND gate: Y = (A · B)̄.\n⚡ Step-by-Step Derivation:\n1. Input waveform values across the 4 time intervals:\n   - Interval 1: A = 1, B = 1\n   - Interval 2: A = 0, B = 0\n   - Interval 3: A = 1, B = 0\n   - Interval 4: A = 0, B = 1\n2. Inverted inputs (Ā, B̄):\n   - Interval 1: Ā = 0, B̄ = 0 ⟹ Y = 0 + 0 = 0\n   - Interval 2: Ā = 1, B̄ = 1 ⟹ Y = 1 + 1 = 1\n   - Interval 3: Ā = 0, B̄ = 1 ⟹ Y = 0 + 1 = 1\n   - Interval 4: Ā = 1, B̄ = 0 ⟹ Y = 1 + 0 = 1\n3. The resultant sequence is [0, 1, 1, 1], which matches waveform (a).\n💡 Examiner Pro-Tip: Y = 0 only when both A = 1 and B = 1 (Interval 1); for all other intervals, at least one inverted input is 1, so Y = 1.",
    "tags": [
      "Digital Electronics",
      "Logic Gates",
      "Waveforms",
      "SET-27",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set27-q04",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Capacitor Discharge Through Diodes",
    "difficulty": "Medium",
    "questionText": "Two identical capacitors A and B are charged to the same potential V and are connected in two circuits at t = 0, as shown in figure. The charge on the capacitors at time t = CR are respectively: [SET-27]",
    "diagramSvg": "<svg viewBox=\"0 0 420 180\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"420\" height=\"180\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"210\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">Capacitor Discharge with Diodes (SET-27 Q4)</text>\n\n  <!-- Circuit (i) Forward Biased -->\n  <g transform=\"translate(40, 35)\">\n    <rect width=\"150\" height=\"125\" rx=\"5\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\"/>\n    <text x=\"75\" y=\"16\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#16A34A\">Circuit (i): Forward Biased</text>\n    <line x1=\"75\" y1=\"25\" x2=\"75\" y2=\"40\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <line x1=\"55\" y1=\"40\" x2=\"95\" y2=\"40\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>\n    <line x1=\"55\" y1=\"47\" x2=\"95\" y2=\"47\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>\n    <text x=\"102\" y=\"38\" font-size=\"9\" font-weight=\"bold\" fill=\"#2563EB\">+</text>\n    <text x=\"102\" y=\"52\" font-size=\"9\" font-weight=\"bold\" fill=\"#DC2626\">−</text>\n    <text x=\"40\" y=\"46\" font-size=\"9\" fill=\"#1E293B\">C</text>\n    <line x1=\"75\" y1=\"25\" x2=\"25\" y2=\"25\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <line x1=\"25\" y1=\"25\" x2=\"25\" y2=\"55\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <polygon points=\"17,55 33,55 25,70\" fill=\"#16A34A\" stroke=\"#15803D\" stroke-width=\"1\"/>\n    <line x1=\"17\" y1=\"70\" x2=\"33\" y2=\"70\" stroke=\"#15803D\" stroke-width=\"2\"/>\n    <line x1=\"25\" y1=\"70\" x2=\"25\" y2=\"105\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <line x1=\"25\" y1=\"105\" x2=\"50\" y2=\"105\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <rect x=\"50\" y=\"98\" width=\"50\" height=\"14\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n    <text x=\"75\" y=\"109\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">R</text>\n    <line x1=\"100\" y1=\"105\" x2=\"125\" y2=\"105\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <line x1=\"125\" y1=\"105\" x2=\"125\" y2=\"47\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <line x1=\"125\" y1=\"47\" x2=\"75\" y2=\"47\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <text x=\"75\" y=\"122\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#16A34A\">Conducts ⟹ q = VC/e</text>\n  </g>\n\n  <!-- Circuit (ii) Reverse Biased -->\n  <g transform=\"translate(230, 35)\">\n    <rect width=\"150\" height=\"125\" rx=\"5\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\"/>\n    <text x=\"75\" y=\"16\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#DC2626\">Circuit (ii): Reverse Biased</text>\n    <line x1=\"75\" y1=\"25\" x2=\"75\" y2=\"40\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <line x1=\"55\" y1=\"40\" x2=\"95\" y2=\"40\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>\n    <line x1=\"55\" y1=\"47\" x2=\"95\" y2=\"47\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>\n    <text x=\"102\" y=\"38\" font-size=\"9\" font-weight=\"bold\" fill=\"#2563EB\">+</text>\n    <text x=\"102\" y=\"52\" font-size=\"9\" font-weight=\"bold\" fill=\"#DC2626\">−</text>\n    <text x=\"40\" y=\"46\" font-size=\"9\" fill=\"#1E293B\">C</text>\n    <line x1=\"75\" y1=\"25\" x2=\"25\" y2=\"25\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <line x1=\"25\" y1=\"25\" x2=\"25\" y2=\"55\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <line x1=\"17\" y1=\"55\" x2=\"33\" y2=\"55\" stroke=\"#B91C1C\" stroke-width=\"2\"/>\n    <polygon points=\"17,70 33,70 25,55\" fill=\"#EF4444\" stroke=\"#B91C1C\" stroke-width=\"1\"/>\n    <line x1=\"25\" y1=\"70\" x2=\"25\" y2=\"105\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <line x1=\"25\" y1=\"105\" x2=\"50\" y2=\"105\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <rect x=\"50\" y=\"98\" width=\"50\" height=\"14\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n    <text x=\"75\" y=\"109\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">R</text>\n    <line x1=\"100\" y1=\"105\" x2=\"125\" y2=\"105\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <line x1=\"125\" y1=\"105\" x2=\"125\" y2=\"47\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <line x1=\"125\" y1=\"47\" x2=\"75\" y2=\"47\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <text x=\"75\" y=\"122\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#DC2626\">Blocked ⟹ q = VC</text>\n  </g>\n</svg>",
    "options": [
      "VC, VC",
      "VC / e, VC",
      "VC, VC / e",
      "VC / e, VC / e"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: An RC circuit discharges with time constant τ = CR according to q(t) = Q₀ e^(-t/CR). An ideal reverse-biased diode prevents discharge current from flowing.\n⚡ Step-by-Step Derivation:\n1. Initial charge on each capacitor is Q₀ = CV.\n2. In Circuit (i), the diode is forward biased because its anode is connected to the positive plate (+). Current flows and capacitor A discharges through resistor R:\n   At t = CR: q_A = Q₀ e^(-CR/CR) = CV / e.\n3. In Circuit (ii), the diode's cathode is connected to the positive plate (+), placing it in reverse bias.\n4. Since an ideal diode in reverse bias has infinite resistance (open circuit), no discharge current can flow.\n5. Therefore, capacitor B retains its entire initial charge: q_B = CV.\n6. The charges at t = CR are VC/e and VC respectively.\n💡 Examiner Pro-Tip: Ideal diode in reverse bias behaves as an open switch, preserving stored charge indefinitely.",
    "tags": [
      "Diodes",
      "Capacitors",
      "Circuits",
      "SET-27",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set27-q05",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Transistor Biasing Rationale",
    "difficulty": "Medium",
    "questionText": "In a transistor, forward bias is always smaller than the reverse bias. The correct reason is: [SET-27]",
    "options": [
      "To avoid excessive heating of transistor",
      "To maintain a constant base current",
      "To produce large voltage gain",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: The forward-biased emitter-base junction has very low dynamic resistance, whereas the reverse-biased collector-base junction has very high resistance.\n⚡ Step-by-Step Derivation:\n1. In forward bias, junction resistance is tiny (~ 20 to 100 Ω) and current increases exponentially with applied voltage.\n2. If a large forward voltage were applied across the emitter junction, an immense current would flow, causing severe I²R heating and destructive thermal breakdown.\n3. Hence, forward bias is restricted to a small fraction of a volt (~ 0.6 to 0.7 V for Si).\n4. In contrast, the reverse-biased collector junction requires a larger potential (~ 5 to 20 V) to establish a strong sweeping electric field to collect carriers.\n💡 Examiner Pro-Tip: Small forward bias injects carriers easily; high forward bias leads to thermal runaway.",
    "tags": [
      "Transistors",
      "Biasing",
      "SET-27",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set27-q06",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Base Doping & Collector Current",
    "difficulty": "Medium",
    "questionText": "In an NPN transistor, if doping in the base region is increased, then the collector current: [SET-27]",
    "options": [
      "Increases",
      "Decreases",
      "Remains same",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: The base of a transistor is made very thin and lightly doped to minimize electron-hole recombination.\n⚡ Step-by-Step Derivation:\n1. In an NPN transistor, electrons injected from the emitter enter the p-type base as minority carriers.\n2. If acceptor doping in the base is increased, hole density in the base rises.\n3. A larger fraction of injected electrons will recombine with holes in the base, increasing base current I_B.\n4. Consequently, fewer electrons reach the collector, causing collector current I_C to decrease (I_C = I_E - I_B).\n💡 Examiner Pro-Tip: Light base doping guarantees high base transport factor (α ≈ 0.98 - 0.99) and large current amplification β.",
    "tags": [
      "Transistors",
      "Doping",
      "Recombination",
      "SET-27",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set27-q07",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Diode Branch Current Analysis",
    "difficulty": "Hard",
    "questionText": "In the following circuit, the branch currents I₁ and I₂ are respectively: [SET-27]",
    "diagramSvg": "<svg viewBox=\"0 0 380 180\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"380\" height=\"180\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"190\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">Diode Network Current Analysis (SET-27 Q7)</text>\n\n  <line x1=\"40\" y1=\"90\" x2=\"80\" y2=\"90\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"80\" y1=\"75\" x2=\"80\" y2=\"105\" stroke=\"#2563EB\" stroke-width=\"3\"/>\n  <line x1=\"86\" y1=\"80\" x2=\"86\" y2=\"100\" stroke=\"#DC2626\" stroke-width=\"1.5\"/>\n  <text x=\"75\" y=\"70\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">+ 10 V</text>\n  <line x1=\"86\" y1=\"90\" x2=\"120\" y2=\"90\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <line x1=\"120\" y1=\"90\" x2=\"120\" y2=\"45\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"120\" y1=\"45\" x2=\"150\" y2=\"45\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <rect x=\"150\" y=\"38\" width=\"55\" height=\"14\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n  <text x=\"177\" y=\"49\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">2 kΩ</text>\n  <line x1=\"205\" y1=\"45\" x2=\"260\" y2=\"45\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <!-- Branch 1: Diode in reverse bias + 14k -->\n  <line x1=\"260\" y1=\"45\" x2=\"260\" y2=\"70\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"252\" y1=\"70\" x2=\"268\" y2=\"70\" stroke=\"#DC2626\" stroke-width=\"2\"/>\n  <polygon points=\"252,85 268,85 260,70\" fill=\"#EF4444\" stroke=\"#DC2626\" stroke-width=\"1\"/>\n  <text x=\"280\" y=\"80\" font-size=\"9\" font-weight=\"bold\" fill=\"#DC2626\">D (Rev)</text>\n  <line x1=\"260\" y1=\"85\" x2=\"260\" y2=\"100\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <rect x=\"235\" y=\"100\" width=\"50\" height=\"14\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n  <text x=\"260\" y=\"111\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#854D0E\">14 kΩ</text>\n  <line x1=\"260\" y1=\"114\" x2=\"260\" y2=\"150\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <text x=\"260\" y=\"132\" font-size=\"9\" font-weight=\"bold\" fill=\"#DC2626\">i₁ = 0</text>\n\n  <!-- Branch 2: 12k resistor -->\n  <line x1=\"260\" y1=\"45\" x2=\"330\" y2=\"45\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"330\" y1=\"45\" x2=\"330\" y2=\"75\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <rect x=\"305\" y=\"75\" width=\"50\" height=\"14\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n  <text x=\"330\" y=\"86\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#854D0E\">12 kΩ</text>\n  <line x1=\"330\" y1=\"89\" x2=\"330\" y2=\"150\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <text x=\"330\" y=\"125\" font-size=\"9\" font-weight=\"bold\" fill=\"#16A34A\">i₂ = 5 mA</text>\n\n  <line x1=\"330\" y1=\"150\" x2=\"40\" y2=\"150\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"40\" y1=\"150\" x2=\"40\" y2=\"90\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n</svg>",
    "options": [
      "0, 0",
      "5 mA, 5 mA",
      "5 mA, 0",
      "0, 5 mA"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: An ideal diode conducts only when forward biased. When reverse biased, it acts as an open circuit.\n⚡ Step-by-Step Derivation:\n1. The diode in branch 1 has its cathode connected to the positive terminal side, making it reverse biased.\n2. In reverse bias, ideal diode resistance is infinite, so current i₁ = 0.\n3. The total current drawn from the 10 V source passes through the conducting loop with effective resistance R = 2 kΩ:\n   i₂ = V / R = 10 V / 2 kΩ = 5 mA.\n4. Therefore, i₁ = 0 and i₂ = 5 mA.\n💡 Examiner Pro-Tip: Trace the diode cathode bar: if it points toward positive supply, that branch is an open circuit.",
    "tags": [
      "Diodes",
      "Circuit Analysis",
      "SET-27",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set27-q08",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Child's Law for Space Charge Diode",
    "difficulty": "Medium",
    "questionText": "In the space charge limited region, the plate current in a diode is 10 mA for a plate voltage of 150 V. If the plate voltage is increased to 600 V, then the plate current will be: [SET-27]",
    "options": [
      "10 mA",
      "40 mA",
      "80 mA",
      "160 mA"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Child-Langmuir Law states that in the space-charge-limited region of a thermionic diode, plate current obeys I_p = K V_p^(3/2).\n⚡ Step-by-Step Derivation:\n1. Ratio of currents: I_p2 / I_p1 = (V_p2 / V_p1)^(3/2).\n2. Given V_p1 = 150 V, V_p2 = 600 V, and I_p1 = 10 mA.\n3. The voltage ratio is V_p2 / V_p1 = 600 / 150 = 4.\n4. Raising to 3/2 power: 4^(3/2) = (√4)³ = 2³ = 8.\n5. Therefore: I_p2 = 10 mA × 8 = 80 mA.\n💡 Examiner Pro-Tip: Whenever plate voltage is quadrupled in the space-charge-limited regime, current increases 8-fold.",
    "tags": [
      "Vacuum Diode",
      "Child's Law",
      "SET-27",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set27-q09",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Triode Amplifier Voltage Gain",
    "difficulty": "Medium",
    "questionText": "A triode valve has a plate resistance of 10 kΩ and amplification factor 24. If the input signal voltage is 0.4 V (r.m.s.) and the load resistance is 10 kΩ, then the output voltage (r.m.s.) is: [SET-27]",
    "options": [
      "4.8 V",
      "9.6 V",
      "12.0 V",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: The voltage gain A_v of a triode amplifier is A_v = (μ · R_L) / (r_p + R_L).\n⚡ Step-by-Step Derivation:\n1. Given: amplification factor μ = 24, plate resistance r_p = 10 kΩ, load resistance R_L = 10 kΩ, and V_in = 0.4 V.\n2. Voltage gain: A_v = (24 × 10) / (10 + 10) = 240 / 20 = 12.\n3. Output voltage: V_out = A_v × V_in = 12 × 0.4 V = 4.8 V (r.m.s.).\n💡 Examiner Pro-Tip: When R_L = r_p, voltage gain is exactly half the amplification factor: A_v = μ / 2 = 24 / 2 = 12.",
    "tags": [
      "Triode",
      "Amplifier Gain",
      "SET-27",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set27-q10",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Energy Bands in Sodium vs NaCl",
    "difficulty": "Easy",
    "questionText": "Pure sodium (Na) is a good conductor of electricity because the 3s and 3p atomic bands overlap to form a partially filled conduction band. By contrast, the ionic sodium chloride (NaCl) crystal is an: [SET-27]",
    "options": [
      "Insulator",
      "Conductor",
      "Semiconductor",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: In solid NaCl, complete valence electron transfer creates Na⁺ and Cl⁻ ions with completely filled valence shells and a large forbidden gap (E_g > 8 eV).\n⚡ Step-by-Step Derivation:\n1. In sodium metal, the 3s band is half-filled, allowing free electron conduction.\n2. In NaCl, Na transfers its valence electron to Cl, yielding closed-shell noble gas configurations.\n3. The valence band is completely filled and the empty conduction band is separated by an enormous bandgap (~ 8 to 9 eV).\n4. Room temperature thermal energy (~ 0.026 eV) cannot promote electrons across this gap.\n5. Therefore, crystalline NaCl is an electrical insulator.\n💡 Examiner Pro-Tip: Ionic crystals are insulators in solid phase but conduct when molten or aqueous due to mobile ions.",
    "tags": [
      "Energy Bands",
      "Conductors",
      "Insulators",
      "SET-27",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set27-q11",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Impurity Doping in Metals",
    "difficulty": "Easy",
    "questionText": "Would there be any advantage in adding n-type or p-type impurities to copper? [SET-27]",
    "options": [
      "Yes",
      "No",
      "May be",
      "Information is insufficient"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: Copper is a metal with a huge intrinsic free electron concentration (~ 10²⁸ m⁻³), whereas semiconductors have low carrier densities (~ 10¹⁶ m⁻³).\n⚡ Step-by-Step Derivation:\n1. In copper, free electron concentration is already ~ 8.5 × 10²⁸ m⁻³, so doping adds negligible extra carriers.\n2. Furthermore, foreign impurity atoms disrupt the periodic crystal lattice, acting as scattering centers that reduce the mean free path of electrons.\n3. By Matthiessen's rule, adding impurities increases electrical resistivity and decreases conductivity.\n4. Hence, there is no advantage in doping copper.\n💡 Examiner Pro-Tip: Impurities increase conductivity in semiconductors, but always decrease conductivity in metals.",
    "tags": [
      "Metals vs Semiconductors",
      "Doping",
      "SET-27",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set27-q12",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Common Emitter Transistor DC Analysis",
    "difficulty": "Medium",
    "questionText": "In the following common emitter circuit, if β = 100, V_CE = 7 V, V_BE is negligible, R_C = 2 kΩ, and V_CC = 15 V, then the base current I_B is: [SET-27]",
    "diagramSvg": "<svg viewBox=\"0 0 380 200\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"380\" height=\"200\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"190\" y=\"22\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">CE Transistor Circuit Analysis (SET-27 Q12)</text>\n\n  <g transform=\"translate(190, 110)\">\n    <circle cx=\"0\" cy=\"0\" r=\"28\" fill=\"#EFF6FF\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n    <line x1=\"-12\" y1=\"-18\" x2=\"-12\" y2=\"18\" stroke=\"#1E293B\" stroke-width=\"3\"/>\n    <line x1=\"-35\" y1=\"0\" x2=\"-12\" y2=\"0\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <text x=\"-38\" y=\"-5\" text-anchor=\"end\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E293B\">B</text>\n    <line x1=\"-12\" y1=\"-10\" x2=\"15\" y2=\"-22\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <line x1=\"15\" y1=\"-22\" x2=\"15\" y2=\"-45\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <text x=\"24\" y=\"-30\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E293B\">C</text>\n    <line x1=\"-12\" y1=\"10\" x2=\"15\" y2=\"22\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <polygon points=\"12,18 16,24 8,24\" fill=\"#1E293B\"/>\n    <line x1=\"15\" y1=\"22\" x2=\"15\" y2=\"45\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <text x=\"24\" y=\"38\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E293B\">E (Gnd)</text>\n  </g>\n\n  <rect x=\"193\" y=\"25\" width=\"24\" height=\"40\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n  <text x=\"235\" y=\"48\" font-size=\"10\" font-weight=\"bold\" fill=\"#854D0E\">R_C = 2 kΩ</text>\n  <line x1=\"205\" y1=\"25\" x2=\"205\" y2=\"10\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"215\" y=\"16\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563EB\">V_CC = 15 V</text>\n\n  <line x1=\"155\" y1=\"110\" x2=\"110\" y2=\"110\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <rect x=\"70\" y=\"103\" width=\"40\" height=\"14\" rx=\"2\" fill=\"#E2E8F0\" stroke=\"#64748B\"/>\n  <text x=\"90\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#475569\">R_B</text>\n  <text x=\"135\" y=\"102\" font-size=\"10\" font-weight=\"bold\" fill=\"#7C3AED\">i_B = ?</text>\n\n  <text x=\"250\" y=\"115\" font-size=\"10\" font-weight=\"bold\" fill=\"#0F172A\">V_CE = 7 V</text>\n  <text x=\"250\" y=\"132\" font-size=\"9\" fill=\"#16A34A\">β = 100</text>\n</svg>",
    "options": [
      "0.01 mA",
      "0.04 mA",
      "0.02 mA",
      "0.03 mA"
    ],
    "correctAnswer": 1,
    "explanation": "📘 NCERT Concept: In a common emitter transistor amplifier, KVL around the collector-emitter loop is V_CC = V_CE + I_C · R_C.\n⚡ Step-by-Step Derivation:\n1. Substituting the given values:\n   15 V = 7 V + I_C · (2 kΩ)\n   I_C · (2 kΩ) = 15 - 7 = 8 V.\n2. Collector current: I_C = 8 V / 2 kΩ = 4 mA.\n3. The base current is related to collector current by I_B = I_C / β.\n4. With β = 100:\n   I_B = 4 mA / 100 = 0.04 mA (or 40 μA).\n💡 Examiner Pro-Tip: Solve the collector loop first for I_C, then use I_B = I_C / β.",
    "tags": [
      "Transistors",
      "Common Emitter",
      "DC Analysis",
      "SET-27",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set27-q13",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Charge Carriers in Media",
    "difficulty": "Easy",
    "questionText": "When a battery is connected to a P-type semiconductor with a metallic wire, the electric current in the semiconductor (predominantly), inside the metallic wire, and that inside the battery are respectively due to: [SET-27]",
    "options": [
      "Holes, electrons, ions",
      "Holes, ions, electrons",
      "Electrons, ions, holes",
      "Ions, electrons, holes"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Different conduction media rely on distinct mobile charge carriers.\n⚡ Step-by-Step Derivation:\n1. In a P-type semiconductor, holes are majority carriers and carry the predominant current.\n2. In a metallic conductor (copper wire), current is carried solely by free electrons.\n3. Inside the battery electrolyte, current is transported by mobile positive and negative ions.\n4. Therefore, the respective charge carriers are holes, electrons, and ions.\n💡 Examiner Pro-Tip: Semiconductors ⟹ electrons & holes; Metals ⟹ electrons; Electrolytes ⟹ ions.",
    "tags": [
      "Charge Carriers",
      "Conduction",
      "SET-27",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set27-q14",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Atomic vs Lattice Ionization Energy",
    "difficulty": "Easy",
    "questionText": "Is the ionisation energy of an isolated free atom different from the band gap ionisation energy E_g for atoms in a crystalline lattice? [SET-27]",
    "options": [
      "Yes",
      "No",
      "May be",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: In an isolated atom, valence electrons experience attraction only from a single parent nucleus. In a crystal, atomic orbitals overlap to form broad energy bands.\n⚡ Step-by-Step Derivation:\n1. For an isolated free silicon atom, the ionization potential is about 8.15 eV.\n2. In a crystalline lattice, mutual electrostatic interactions and periodic potential split discrete levels into valence and conduction bands.\n3. The energy required to excite an electron from the top of the valence band to the bottom of the conduction band is the bandgap E_g ≈ 1.1 eV for silicon.\n4. Since 8.15 eV ≠ 1.1 eV, the ionization energies are substantially different.\n💡 Examiner Pro-Tip: Crystal field effects and dielectric screening in solids dramatically lower effective ionization energy.",
    "tags": [
      "Energy Bands",
      "Crystal Lattice",
      "SET-27",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set27-q15",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Transistor Switching & Voltmeter Response",
    "difficulty": "Medium",
    "questionText": "In the following circuit, a voltmeter V is connected across a lamp L in the collector circuit of an NPN transistor. What change would occur in the voltmeter reading if the base resistance R is reduced in value? [SET-27]",
    "diagramSvg": "<svg viewBox=\"0 0 380 210\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"380\" height=\"210\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"190\" y=\"22\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">Transistor Collector Lamp Circuit (SET-27 Q15)</text>\n\n  <g transform=\"translate(180, 115)\">\n    <circle cx=\"0\" cy=\"0\" r=\"28\" fill=\"#EFF6FF\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n    <line x1=\"-12\" y1=\"-18\" x2=\"-12\" y2=\"18\" stroke=\"#1E293B\" stroke-width=\"3\"/>\n    <line x1=\"-35\" y1=\"0\" x2=\"-12\" y2=\"0\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <line x1=\"-12\" y1=\"-10\" x2=\"15\" y2=\"-22\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <line x1=\"15\" y1=\"-22\" x2=\"15\" y2=\"-45\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <line x1=\"-12\" y1=\"10\" x2=\"15\" y2=\"22\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <polygon points=\"12,18 16,24 8,24\" fill=\"#1E293B\"/>\n    <line x1=\"15\" y1=\"22\" x2=\"15\" y2=\"45\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  </g>\n\n  <circle cx=\"195\" cy=\"45\" r=\"14\" fill=\"#FEF08A\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n  <text x=\"195\" y=\"49\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#854D0E\">L</text>\n  <path d=\"M 175,45 Q 150,20 195,15 Q 240,20 215,45\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"1.5\"/>\n  <circle cx=\"195\" cy=\"15\" r=\"10\" fill=\"#DBEAFE\" stroke=\"#1D4ED8\"/>\n  <text x=\"195\" y=\"19\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#1D4ED8\">V</text>\n\n  <line x1=\"195\" y1=\"31\" x2=\"195\" y2=\"10\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"195\" y1=\"10\" x2=\"290\" y2=\"10\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"290\" y1=\"10\" x2=\"290\" y2=\"60\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"280\" y1=\"60\" x2=\"300\" y2=\"60\" stroke=\"#2563EB\" stroke-width=\"3\"/>\n  <line x1=\"284\" y1=\"68\" x2=\"296\" y2=\"68\" stroke=\"#DC2626\" stroke-width=\"1.5\"/>\n  <text x=\"310\" y=\"66\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">V_CC</text>\n  <line x1=\"290\" y1=\"68\" x2=\"290\" y2=\"160\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"290\" y1=\"160\" x2=\"195\" y2=\"160\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <rect x=\"85\" y=\"108\" width=\"40\" height=\"14\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n  <text x=\"105\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">R</text>\n  <line x1=\"85\" y1=\"115\" x2=\"50\" y2=\"115\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"50\" y1=\"115\" x2=\"50\" y2=\"140\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"40\" y1=\"140\" x2=\"60\" y2=\"140\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>\n  <line x1=\"44\" y1=\"147\" x2=\"56\" y2=\"147\" stroke=\"#DC2626\" stroke-width=\"1.5\"/>\n  <text x=\"25\" y=\"146\" font-size=\"9\" font-weight=\"bold\" fill=\"#2563EB\">V_BB</text>\n  <line x1=\"50\" y1=\"147\" x2=\"50\" y2=\"160\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"50\" y1=\"160\" x2=\"195\" y2=\"160\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n</svg>",
    "options": [
      "Increases",
      "Decreases",
      "Remains same",
      "None of these"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: In a common emitter transistor amplifier, collector current is directly controlled by base current according to I_C = β · I_B.\n⚡ Step-by-Step Derivation:\n1. Base current is given by I_B = (V_BB - V_BE) / R.\n2. When resistance R is reduced, base current I_B increases.\n3. Since collector current is amplified by β (I_C = β · I_B), current I_C passing through lamp L increases significantly.\n4. The voltage drop across the lamp is V_L = I_C · R_lamp.\n5. As I_C increases, V_L increases, and therefore the voltmeter reading increases.\n💡 Examiner Pro-Tip: Lower base resistance drives the transistor closer to saturation, maximizing collector current and load voltage.",
    "tags": [
      "Transistors",
      "Switching",
      "Voltmeter",
      "SET-27",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set27-q16",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Full-Wave Rectified DC Voltage",
    "difficulty": "Medium",
    "questionText": "For the given full-wave rectified voltage signal having a peak voltage of 6.28 V, the average (dc) value is: [SET-27]",
    "diagramSvg": "<svg viewBox=\"0 0 380 160\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"380\" height=\"160\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"190\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">Full-Wave Rectified DC Value (SET-27 Q16)</text>\n\n  <line x1=\"40\" y1=\"120\" x2=\"350\" y2=\"120\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <line x1=\"40\" y1=\"120\" x2=\"40\" y2=\"30\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <text x=\"355\" y=\"124\" font-size=\"10\" fill=\"#1E293B\">t</text>\n  <text x=\"30\" y=\"35\" font-size=\"10\" font-weight=\"bold\" fill=\"#1E293B\">V</text>\n\n  <path d=\"M 40,120 Q 75,35 110,120 Q 145,35 180,120 Q 215,35 250,120 Q 285,35 320,120\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>\n\n  <line x1=\"40\" y1=\"45\" x2=\"320\" y2=\"45\" stroke=\"#94A3B8\" stroke-dasharray=\"3,3\"/>\n  <text x=\"25\" y=\"48\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">6.28 V</text>\n\n  <line x1=\"40\" y1=\"72\" x2=\"320\" y2=\"72\" stroke=\"#16A34A\" stroke-width=\"2\" stroke-dasharray=\"5,3\"/>\n  <text x=\"325\" y=\"76\" font-size=\"10\" font-weight=\"bold\" fill=\"#16A34A\">V_dc = 4 V</text>\n</svg>",
    "options": [
      "6.28 V",
      "3.14 V",
      "4 V",
      "0 V"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: The average (dc) output voltage of a full-wave rectifier is V_dc = 2 V₀ / π, where V₀ is the peak ac voltage.\n⚡ Step-by-Step Derivation:\n1. Peak voltage: V₀ = 6.28 V.\n2. Average (dc) value: V_dc = (2 · V₀) / π.\n3. Substituting π ≈ 3.14:\n   V_dc = (2 × 6.28) / 3.14 = 2 × 2 = 4 V.\n💡 Examiner Pro-Tip: Recognize 6.28 = 2π immediately; then 2(2π)/π = 4 V with zero calculation.",
    "tags": [
      "Rectifiers",
      "Full Wave",
      "DC Value",
      "SET-27",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set27-q17",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Knee Voltage & Series Resistor",
    "difficulty": "Medium",
    "questionText": "When a silicon PN junction is in forward biased condition with a series resistance, it has a knee voltage of 0.6 V. If a current of 5 mA flows when connected to a 2.6 V battery, the value of the series resistance is: [SET-27]",
    "options": [
      "100 Ω",
      "200 Ω",
      "400 Ω",
      "500 Ω"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: In forward bias above the knee point, diode voltage drop is clamped at its knee voltage V_k, and the remaining battery voltage appears across the series resistor.\n⚡ Step-by-Step Derivation:\n1. Net voltage drop across series resistor R: V_R = V_battery - V_k = 2.6 V - 0.6 V = 2.0 V.\n2. Circuit current: I = 5 mA = 5 × 10⁻³ A.\n3. By Ohm's law:\n   R = V_R / I = 2.0 V / (5 × 10⁻³ A) = 400 Ω.\n💡 Examiner Pro-Tip: Always subtract diode barrier knee voltage (0.6 V for Si, 0.3 V for Ge) from supply voltage before computing resistor current.",
    "tags": [
      "Diodes",
      "Knee Voltage",
      "Ohm's Law",
      "SET-27",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set27-q18",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Bridge Diode Circuit Under Reverse Bias",
    "difficulty": "Hard",
    "questionText": "In the following circuit, the equivalent resistance between terminals A and B is: [SET-27]",
    "diagramSvg": "<svg viewBox=\"0 0 400 180\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"400\" height=\"180\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"200\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">Bridge Network Between A (-10V) and B (-2V)</text>\n\n  <circle cx=\"40\" cy=\"90\" r=\"4\" fill=\"#0F172A\"/>\n  <text x=\"40\" y=\"115\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#DC2626\">A (−10V)</text>\n\n  <circle cx=\"360\" cy=\"90\" r=\"4\" fill=\"#0F172A\"/>\n  <text x=\"360\" y=\"115\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563EB\">B (−2V)</text>\n\n  <line x1=\"44\" y1=\"90\" x2=\"80\" y2=\"50\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <polygon points=\"100,43 125,50 100,57\" fill=\"#EF4444\" stroke=\"#B91C1C\"/>\n  <line x1=\"125\" y1=\"40\" x2=\"125\" y2=\"60\" stroke=\"#B91C1C\" stroke-width=\"2\"/>\n  <rect x=\"145\" y=\"43\" width=\"35\" height=\"14\" rx=\"2\" fill=\"#E2E8F0\" stroke=\"#94A3B8\"/>\n  <text x=\"162\" y=\"54\" text-anchor=\"middle\" font-size=\"8\" fill=\"#475569\">4 Ω</text>\n  <rect x=\"235\" y=\"43\" width=\"35\" height=\"14\" rx=\"2\" fill=\"#E2E8F0\" stroke=\"#94A3B8\"/>\n  <text x=\"252\" y=\"54\" text-anchor=\"middle\" font-size=\"8\" fill=\"#475569\">6 Ω</text>\n  <line x1=\"270\" y1=\"50\" x2=\"356\" y2=\"90\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <rect x=\"193\" y=\"70\" width=\"14\" height=\"40\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n  <text x=\"215\" y=\"94\" font-size=\"9\" font-weight=\"bold\" fill=\"#854D0E\">2 Ω</text>\n  <line x1=\"200\" y1=\"50\" x2=\"200\" y2=\"130\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <line x1=\"44\" y1=\"90\" x2=\"80\" y2=\"130\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <rect x=\"110\" y=\"123\" width=\"40\" height=\"14\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n  <text x=\"130\" y=\"134\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#854D0E\">8 Ω</text>\n  <line x1=\"150\" y1=\"130\" x2=\"260\" y2=\"130\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <rect x=\"260\" y=\"123\" width=\"40\" height=\"14\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n  <text x=\"280\" y=\"134\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#854D0E\">12 Ω</text>\n  <line x1=\"300\" y1=\"130\" x2=\"356\" y2=\"90\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <text x=\"200\" y=\"165\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#16A34A\">Active Conducting Path: 8 Ω + 2 Ω + 6 Ω = 16 Ω</text>\n</svg>",
    "options": [
      "20/3 Ω",
      "10 Ω",
      "16 Ω",
      "20 Ω"
    ],
    "correctAnswer": 2,
    "explanation": "📘 NCERT Concept: Notice that terminal A is at -10 V and terminal B is at -2 V. Since -2 V > -10 V, terminal B is at a higher potential than terminal A.\n⚡ Step-by-Step Derivation:\n1. With V_B > V_A, current tends to flow from B to A.\n2. The diode in the upper branch has its cathode toward B and anode toward A, making it reverse biased.\n3. An ideal diode under reverse bias acts as an open circuit (infinite resistance), disconnecting the upper 4 Ω branch.\n4. Current from B enters the 6 Ω resistor, traverses the central 2 Ω resistor, and passes through the 8 Ω resistor to terminal A.\n5. Total series equivalent resistance: R_eq = 8 Ω + 2 Ω + 6 Ω = 16 Ω.\n💡 Examiner Pro-Tip: Be alert with negative voltages: -2 V is MORE POSITIVE than -10 V!",
    "tags": [
      "Diodes",
      "Equivalent Resistance",
      "SET-27",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set27-q19",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Parallel Diode Array Current",
    "difficulty": "Medium",
    "questionText": "In the following circuit, the PN junction diodes D₁, D₂, and D₃ are ideal. The current i drawn from battery E is: [SET-27]",
    "diagramSvg": "<svg viewBox=\"0 0 380 190\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"380\" height=\"190\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"190\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">Three-Diode Parallel Array (SET-27 Q19)</text>\n\n  <line x1=\"80\" y1=\"50\" x2=\"80\" y2=\"150\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <line x1=\"40\" y1=\"100\" x2=\"80\" y2=\"100\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <text x=\"30\" y=\"104\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563EB\">E</text>\n\n  <line x1=\"80\" y1=\"50\" x2=\"130\" y2=\"50\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <polygon points=\"130,43 150,50 130,57\" fill=\"#16A34A\" stroke=\"#15803D\"/>\n  <line x1=\"150\" y1=\"40\" x2=\"150\" y2=\"60\" stroke=\"#15803D\" stroke-width=\"2\"/>\n  <text x=\"140\" y=\"36\" font-size=\"9\" font-weight=\"bold\" fill=\"#16A34A\">D₁</text>\n  <rect x=\"180\" y=\"43\" width=\"40\" height=\"14\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n  <text x=\"200\" y=\"54\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#854D0E\">R</text>\n  <line x1=\"220\" y1=\"50\" x2=\"280\" y2=\"50\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <line x1=\"80\" y1=\"100\" x2=\"130\" y2=\"100\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <line x1=\"130\" y1=\"90\" x2=\"130\" y2=\"110\" stroke=\"#B91C1C\" stroke-width=\"2\"/>\n  <polygon points=\"150,93 130,100 150,107\" fill=\"#EF4444\" stroke=\"#B91C1C\"/>\n  <text x=\"140\" y=\"86\" font-size=\"9\" font-weight=\"bold\" fill=\"#DC2626\">D₂ (Blocked)</text>\n  <rect x=\"180\" y=\"93\" width=\"40\" height=\"14\" rx=\"2\" fill=\"#E2E8F0\" stroke=\"#94A3B8\"/>\n  <text x=\"200\" y=\"104\" text-anchor=\"middle\" font-size=\"8\" fill=\"#64748B\">R</text>\n  <line x1=\"220\" y1=\"100\" x2=\"280\" y2=\"100\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <line x1=\"80\" y1=\"150\" x2=\"130\" y2=\"150\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <polygon points=\"130,143 150,150 130,157\" fill=\"#16A34A\" stroke=\"#15803D\"/>\n  <line x1=\"150\" y1=\"140\" x2=\"150\" y2=\"160\" stroke=\"#15803D\" stroke-width=\"2\"/>\n  <text x=\"140\" y=\"136\" font-size=\"9\" font-weight=\"bold\" fill=\"#16A34A\">D₃</text>\n  <rect x=\"180\" y=\"143\" width=\"40\" height=\"14\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n  <text x=\"200\" y=\"154\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#854D0E\">R</text>\n  <line x1=\"220\" y1=\"150\" x2=\"280\" y2=\"150\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <line x1=\"280\" y1=\"50\" x2=\"280\" y2=\"150\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <line x1=\"280\" y1=\"100\" x2=\"320\" y2=\"100\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <text x=\"330\" y=\"104\" font-size=\"11\" font-weight=\"bold\" fill=\"#16A34A\">i = E/R</text>\n</svg>",
    "options": [
      "E / R",
      "E / 2R",
      "2E / 3R",
      "Zero"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Diodes oriented in the forward bias direction conduct ideally (zero resistance), while oppositely oriented diodes are reverse biased and block current.\n⚡ Step-by-Step Derivation:\n1. The positive terminal of battery E connects to the anodes of D₁ and D₃, making both forward biased.\n2. In branch 2, diode D₂ has its cathode connected to the positive bus, making D₂ reverse biased (open circuit).\n3. Circuit analysis of active branches gives effective total network current i = E / R.\n4. Therefore, total current supplied by the battery is i = E / R.\n💡 Examiner Pro-Tip: Remove reverse-biased branches completely before calculating equivalent resistance.",
    "tags": [
      "Diodes",
      "Parallel Circuits",
      "SET-27",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set27-q20",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Multi-Gate Logic Circuit Evaluation",
    "difficulty": "Hard",
    "questionText": "In the logic gate circuit shown in the following figure, the output value of Y is: [SET-27]",
    "diagramSvg": "<svg viewBox=\"0 0 380 180\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"380\" height=\"180\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"190\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">Multi-Gate Logic Network (SET-27 Q20)</text>\n\n  <text x=\"35\" y=\"54\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563EB\">0</text>\n  <line x1=\"50\" y1=\"50\" x2=\"120\" y2=\"50\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n  <g transform=\"translate(120, 35)\">\n    <path d=\"M 0,0 L 25,0 A 15,15 0 0,1 25,30 L 0,30 Z\" fill=\"#EFF6FF\" stroke=\"#2563EB\" stroke-width=\"1.5\"/>\n    <circle cx=\"28\" cy=\"15\" r=\"3\" fill=\"#FFFFFF\" stroke=\"#2563EB\" stroke-width=\"1.5\"/>\n    <text x=\"10\" y=\"19\" font-size=\"9\" font-weight=\"bold\" fill=\"#2563EB\">G₁</text>\n  </g>\n\n  <text x=\"35\" y=\"134\" font-size=\"11\" font-weight=\"bold\" fill=\"#7C3AED\">1</text>\n  <line x1=\"50\" y1=\"130\" x2=\"80\" y2=\"130\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n  <polygon points=\"80,122 100,130 80,138\" fill=\"#F5F3FF\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n  <circle cx=\"103\" cy=\"130\" r=\"3\" fill=\"#FFFFFF\" stroke=\"#7C3AED\" stroke-width=\"1.5\"/>\n\n  <text x=\"175\" y=\"65\" font-size=\"10\" font-weight=\"bold\" fill=\"#0F172A\">A = 1</text>\n  <text x=\"175\" y=\"105\" font-size=\"10\" font-weight=\"bold\" fill=\"#0F172A\">B = 1</text>\n\n  <g transform=\"translate(220, 70)\">\n    <path d=\"M 0,0 L 25,0 A 15,15 0 0,1 25,30 L 0,30 Z\" fill=\"#DCFCE7\" stroke=\"#16A34A\" stroke-width=\"1.5\"/>\n    <circle cx=\"28\" cy=\"15\" r=\"3\" fill=\"#FFFFFF\" stroke=\"#16A34A\" stroke-width=\"1.5\"/>\n    <text x=\"10\" y=\"19\" font-size=\"9\" font-weight=\"bold\" fill=\"#16A34A\">G₃</text>\n    <line x1=\"31\" y1=\"15\" x2=\"60\" y2=\"15\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <text x=\"68\" y=\"19\" font-size=\"12\" font-weight=\"bold\" fill=\"#16A34A\">Y = 0</text>\n  </g>\n</svg>",
    "options": [
      "0",
      "1",
      "Fluctuates between 0 and 1",
      "Indeterminate as the circuit can't be realised"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: Trace logic levels through digital gates stage by stage using standard truth tables.\n⚡ Step-by-Step Derivation:\n1. The lower NOT gate inverts input 1 to produce 0.\n2. The cross-coupled NAND configuration inverts and forces the intermediate inputs of the final output NAND gate to A = 1 and B = 1.\n3. For NAND gate G₃ with inputs A = 1 and B = 1:\n   Y = (A · B)̄ = (1 · 1)̄ = 1̄ = 0.\n4. Hence, the stable output is Y = 0.\n💡 Examiner Pro-Tip: A NAND gate outputs 0 ONLY when all of its inputs are 1.",
    "tags": [
      "Digital Electronics",
      "Logic Gates",
      "SET-27",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set27-q21",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Diode Waveform Clipping / Voltage Division",
    "difficulty": "Hard",
    "questionText": "A square waveform of ±5 V is applied to the circuit shown. Assuming an ideal diode and R₁ = R₂, the output waveform V₀ is: [SET-27]",
    "diagramSvg": "<svg viewBox=\"0 0 420 180\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"420\" height=\"180\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"210\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">Diode Waveform Clipping Circuit (SET-27 Q21)</text>\n\n  <g transform=\"translate(30, 45)\">\n    <line x1=\"0\" y1=\"50\" x2=\"90\" y2=\"50\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n    <polyline points=\"0,20 30,20 30,80 60,80 60,20 90,20\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n    <text x=\"-5\" y=\"24\" font-size=\"8\" font-weight=\"bold\" fill=\"#2563EB\">+5V</text>\n    <text x=\"-5\" y=\"84\" font-size=\"8\" font-weight=\"bold\" fill=\"#DC2626\">−5V</text>\n    <text x=\"45\" y=\"105\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#1E293B\">V_in</text>\n  </g>\n\n  <g transform=\"translate(150, 45)\">\n    <line x1=\"0\" y1=\"50\" x2=\"25\" y2=\"50\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <rect x=\"25\" y=\"43\" width=\"40\" height=\"14\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n    <text x=\"45\" y=\"54\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#854D0E\">R₁</text>\n    <line x1=\"65\" y1=\"50\" x2=\"105\" y2=\"50\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n    <line x1=\"105\" y1=\"50\" x2=\"105\" y2=\"70\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <polygon points=\"97,70 113,70 105,85\" fill=\"#EF4444\" stroke=\"#DC2626\"/>\n    <line x1=\"97\" y1=\"85\" x2=\"113\" y2=\"85\" stroke=\"#DC2626\" stroke-width=\"2\"/>\n    <rect x=\"125\" y=\"60\" width=\"35\" height=\"14\" rx=\"2\" fill=\"#FEF08A\" stroke=\"#CA8A04\"/>\n    <text x=\"142\" y=\"71\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#854D0E\">R₂</text>\n\n    <line x1=\"105\" y1=\"50\" x2=\"155\" y2=\"50\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <circle cx=\"160\" cy=\"50\" r=\"3\" fill=\"#16A34A\"/>\n    <text x=\"170\" y=\"54\" font-size=\"10\" font-weight=\"bold\" fill=\"#16A34A\">V₀</text>\n  </g>\n\n  <text x=\"210\" y=\"165\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#16A34A\">Output: −2.5 V pulse during negative half-cycle (Option d)</text>\n</svg>",
    "options": [
      "Square waveform with +5 V positive pulses",
      "Square waveform with -5 V negative pulses",
      "Square waveform with +2.5 V positive pulses",
      "Square waveform with -2.5 V negative pulses"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: The diode conducts only during the negative half-cycle when input is -5 V. When conducting, voltage divides between R₁ and R₂.\n⚡ Step-by-Step Derivation:\n1. During positive half-cycle (+5 V), the diode is reverse biased and non-conducting; no output voltage appears across the clipped node.\n2. During negative half-cycle (-5 V), the diode is forward biased and conducts with zero forward resistance.\n3. The applied -5 V divides equally across the two identical resistors (R₁ = R₂):\n   V₀ = -5 V × [R₂ / (R₁ + R₂)] = -5 V × (1/2) = -2.5 V.\n4. Hence, the output consists of negative square pulses of amplitude -2.5 V.\n💡 Examiner Pro-Tip: Equal series resistors split voltage exactly in half: -5 V / 2 = -2.5 V.",
    "tags": [
      "Diodes",
      "Clipping Circuits",
      "Waveforms",
      "SET-27",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set27-q22",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Electron Energy in Triode Electric Field",
    "difficulty": "Hard",
    "questionText": "In a triode valve, cathode, grid, and plate are maintained at potentials 0 V, -2 V, and 80 V respectively. If an electron is emitted from the cathode with kinetic energy 3 eV, its kinetic energy on reaching the plate is: [SET-27]",
    "diagramSvg": "<svg viewBox=\"0 0 380 170\" class=\"w-full max-w-md mx-auto\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"380\" height=\"170\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n  <text x=\"190\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\">Triode Potential Fields &amp; Electron Energy (SET-27 Q22)</text>\n\n  <line x1=\"60\" y1=\"50\" x2=\"60\" y2=\"120\" stroke=\"#DC2626\" stroke-width=\"3\"/>\n  <text x=\"60\" y=\"140\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#DC2626\">Cathode</text>\n  <text x=\"60\" y=\"155\" text-anchor=\"middle\" font-size=\"9\" fill=\"#DC2626\">0 V (3 eV)</text>\n\n  <line x1=\"160\" y1=\"50\" x2=\"160\" y2=\"120\" stroke=\"#64748B\" stroke-width=\"2\" stroke-dasharray=\"4,4\"/>\n  <text x=\"160\" y=\"140\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#64748B\">Grid Mesh</text>\n  <text x=\"160\" y=\"155\" text-anchor=\"middle\" font-size=\"9\" fill=\"#64748B\">−2 V (1 eV)</text>\n\n  <line x1=\"300\" y1=\"50\" x2=\"300\" y2=\"120\" stroke=\"#2563EB\" stroke-width=\"4\"/>\n  <text x=\"300\" y=\"140\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563EB\">Plate Anode</text>\n  <text x=\"300\" y=\"155\" text-anchor=\"middle\" font-size=\"9\" fill=\"#2563EB\">+80 V (83 eV)</text>\n\n  <path d=\"M 65,85 L 155,85 L 295,85\" fill=\"none\" stroke=\"#F59E0B\" stroke-width=\"2\"/>\n  <circle cx=\"65\" cy=\"85\" r=\"4\" fill=\"#F59E0B\"/>\n  <circle cx=\"160\" cy=\"85\" r=\"4\" fill=\"#F59E0B\"/>\n  <circle cx=\"295\" cy=\"85\" r=\"4\" fill=\"#F59E0B\"/>\n  <text x=\"110\" y=\"78\" text-anchor=\"middle\" font-size=\"8\" fill=\"#DC2626\">Loses 2 eV</text>\n  <text x=\"230\" y=\"78\" text-anchor=\"middle\" font-size=\"8\" fill=\"#16A34A\">Gains 82 eV</text>\n</svg>",
    "options": [
      "77 eV",
      "85 eV",
      "81 eV",
      "83 eV"
    ],
    "correctAnswer": 3,
    "explanation": "📘 NCERT Concept: In a conservative electrostatic field, the work done on an electron by a potential difference ΔV is W = e · ΔV, causing kinetic energy to change by ΔK = ΔV (in eV).\n⚡ Step-by-Step Derivation:\n1. Initial energy at cathode: K_c = 3 eV.\n2. Between cathode (0 V) and grid (-2 V), retarding potential is 2 V: Energy lost = 2 eV ⟹ Energy passing through grid = 3 - 2 = 1 eV.\n3. Between grid (-2 V) and plate (+80 V), accelerating potential difference is ΔV = 80 - (-2) = 82 V, gaining 82 eV.\n4. Total kinetic energy at plate = 1 eV + 82 eV = 83 eV.\n5. Alternative direct method: K_final = K_initial + e(V_plate - V_cathode) = 3 + (80 - 0) = 83 eV.\n💡 Examiner Pro-Tip: Electrostatic work is path-independent: K_final = K_initial + e(V_plate - V_cathode) = 3 + 80 = 83 eV.",
    "tags": [
      "Triode",
      "Electric Field",
      "Conservation of Energy",
      "SET-27",
      "NEET Physics"
    ]
  },
  {
    "id": "universal-set27-q23",
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "Bandgap Threshold Absorption Wavelength",
    "difficulty": "Medium",
    "questionText": "The energy gap of silicon is 1.5 eV. At what maximum wavelength will silicon stop absorbing photons? [SET-27]",
    "options": [
      "8250 Å",
      "7250 Å",
      "6875.5 Å",
      "5000 Å"
    ],
    "correctAnswer": 0,
    "explanation": "📘 NCERT Concept: For photon absorption in a semiconductor, photon energy must satisfy E_photon ≥ E_g. The cutoff (maximum) wavelength is λ_max = hc / E_g.\n⚡ Step-by-Step Derivation:\n1. Given energy gap E_g = 1.5 eV = 1.5 × 1.6 × 10⁻¹⁹ J = 2.4 × 10⁻¹⁹ J.\n2. Using Planck's constant h = 6.6 × 10⁻³⁴ J·s and c = 3 × 10⁸ m/s:\n   λ_max = (6.6 × 10⁻³⁴ × 3 × 10⁸) / (2.4 × 10⁻¹⁹) = 8.25 × 10⁻⁷ m = 8250 Å.\n3. Any photon with wavelength greater than 8250 Å carries less energy than 1.5 eV and will transmit through without absorption.\n💡 Examiner Pro-Tip: Shortcut formula λ(Å) ≈ 12400 / E_g(eV) = 12400 / 1.5 ≈ 8267 Å ≈ 8250 Å.",
    "tags": [
      "Semiconductors",
      "Photons",
      "Cutoff Wavelength",
      "SET-27",
      "NEET Physics"
    ]
  }
];
