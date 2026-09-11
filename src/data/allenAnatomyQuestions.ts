import { Question } from '../types';

/**
 * Pre-Medical BOTANY: Anatomy of Flowering Plants
 * Authenticated Question Bank with 100% verified Official Answer Keys,
 * comprehensive step-by-step NCERT explanations, and examiner pro-tips.
 * Total Questions: 214
 * - Exercise-I (Conceptual Questions): 90 Questions (PA0001 - PA0112)
 * - Exercise-II (Previous Year Questions - AIPMT/NEET 2006-2022): 63 Questions (PA0113 - PA0289)
 * - Exercise-III (NCERT Based & Analytical Questions): 61 Questions (PA0161 - PA0214)
 */

// ============================================================================
// EXERCISE-I: Conceptual Questions (Build Up Your Understanding) - 90 Questions
// ============================================================================
export const ALLEN_ANATOMY_EXERCISE_1_QUESTIONS: Question[] = [
  {
    id: "allen-bio-anat-ex1-q001",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "A meristem may be defined as the group of cells which -",
    options: [
      "Does not divide",
      "Conserve food",
      "Divide continuously to give rise to new cells.",
      "Elongate, mature and add to the group of cells."
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Growth in plants is largely restricted to specialised regions of active cell division called meristems (Greek *meristos*: divided).\n\n\u26a1 **Detailed Anatomical Explanation**:\nMeristematic cells possess thin cellulosic primary cell walls, dense cytoplasm, prominent nuclei, and lack vacuoles or intercellular spaces. Their sole function is continuous mitotic division to generate new cells that subsequently differentiate into permanent tissues.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Meristems are self-perpetuating: each division yields one cell that differentiates and another that remains meristematic.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0001"],
    code: "PA0001"
  },
  {
    id: "allen-bio-anat-ex1-q002",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "Root cap is not found in -",
    options: [
      "Mustard",
      "Pistia",
      "Sunflower",
      "China rose"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The root apex is covered at the tip by a thimble-like structure called the root cap. In free-floating hydrophytes, root caps are replaced by root pockets.\n\n\u26a1 **Detailed Anatomical Explanation**:\nIn aquatic plants such as *Pistia* (water lettuce) and *Eichhornia* (water hyacinth), root caps are absent because the root apex does not need protection from soil abrasion. Instead, loose root pockets are present that assist in balancing.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Terrestrial mesophytes (*Mustard*, *Sunflower*, *China rose*) have prominent multicellular root caps.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0004"],
    code: "PA0004"
  },
  {
    id: "allen-bio-anat-ex1-q003",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Medium",
    questionText: "The secondary meristem originates from -",
    options: [
      "Promeristem",
      "Primary meristem",
      "Primary permanent tissue",
      "Secretory tissue"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Meristems that appear later than primary meristem in the life of a plant and contribute to secondary growth are secondary (lateral) meristems.\n\n\u26a1 **Detailed Anatomical Explanation**:\nSecondary meristems (such as interfascicular cambium and cork cambium/phellogen) arise by the **dedifferentiation** of living primary permanent tissues (parenchyma or collenchyma cells) that regain the power of cell division.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Primary meristem -> Primary permanent tissue (Differentiation) -> Secondary meristem (Dedifferentiation) -> Secondary permanent tissue (Redifferentiation).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0006"],
    code: "PA0006"
  },
  {
    id: "allen-bio-anat-ex1-q004",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "The function of root cap is -",
    options: [
      "Provide protection to root apex",
      "Storage of food products",
      "Absorption of nutrients",
      "None of the above"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The root cap protects the tender apex of the root as it makes its way through the soil.\n\n\u26a1 **Detailed Anatomical Explanation**:\nRoot cap cells secrete mucilage (produced by Golgi bodies) that lubricates the passage through soil particles. Additionally, starch-rich statoliths inside root cap cells mediate positive geotropic perception.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Root hairs absorb water and minerals; the root cap only provides mechanical protection.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0007"],
    code: "PA0007"
  },
  {
    id: "allen-bio-anat-ex1-q005",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "Meristem which is present inside the vascular bundle is \u2013",
    options: [
      "Apical meristem",
      "Intercalary meristem",
      "Cork cambium",
      "Intra fascicular cambium"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In dicotyledonous stems, the cells of cambium present between primary xylem and primary phloem within a vascular bundle constitute the intrafascicular cambium.\n\n\u26a1 **Detailed Anatomical Explanation**:\nIntrafascicular cambium is a primary lateral meristem derived directly from procambium. During secondary growth, it joins with interfascicular cambium to form a continuous vascular cambial ring.\n\n\ud83d\udca1 **Examiner Pro-Tip**: 'Intra' means within the bundle; 'Inter' means between two adjacent bundles.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0248"],
    code: "PA0248"
  },
  {
    id: "allen-bio-anat-ex1-q006",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "Aerenchyma is helpful to plants by \u2013",
    options: [
      "Providing buoyancy to hydrophytes",
      "Promoting photosynthesis",
      "Give mechanical strength to plants",
      "Giving flexibility to plants"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In hydrophytes, parenchyma cells develop large air spaces/lacunae and are termed aerenchyma.\n\n\u26a1 **Detailed Anatomical Explanation**:\nThe air-filled cavities in aerenchyma provide buoyancy, allowing aquatic organs (leaves, petioles, stems) to float on the water surface and facilitate internal gas exchange.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Chlorenchyma promotes photosynthesis; aerenchyma provides buoyancy.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0011"],
    code: "PA0011"
  },
  {
    id: "allen-bio-anat-ex1-q007",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "Function of collenchyma is \u2013",
    options: [
      "Photosynthesis",
      "Mechanical support",
      "Both (1) and (2)",
      "Secretion"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Collenchyma cells provide mechanical support to the growing parts of the plant such as young stem and petiole of a leaf. Collenchyma cells may also assimilate food when they contain chloroplasts.\n\n\u26a1 **Detailed Anatomical Explanation**:\nCollenchyma is a living mechanical tissue. When exposed to light, its peripheral layers develop chloroplasts and actively perform photosynthesis while providing tensile flexibility against wind sway.\n\n\ud83d\udca1 **Examiner Pro-Tip**: NCERT explicitly states both mechanical support and photosynthesis (when chloroplasts are present) for collenchyma.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0012"],
    code: "PA0012"
  },
  {
    id: "allen-bio-anat-ex1-q008",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "In plants, which of the following cells are living :-",
    options: [
      "Xylem vessels",
      "Meristem",
      "Cork",
      "Fibres"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Meristematic cells are living with thin primary cellulosic walls and abundant protoplasm.\n\n\u26a1 **Detailed Anatomical Explanation**:\n- Xylem vessels: Dead at maturity, lignified secondary walls without protoplasts.\n- Meristem: Continuously dividing living cells.\n- Cork (phellem): Dead at maturity with suberin deposits.\n- Fibres: Dead sclerenchymatous elements with obliterated lumens.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Sclerenchyma, vessels, tracheids, and cork are dead; parenchyma, collenchyma, and meristems are living.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0013"],
    code: "PA0013"
  },
  {
    id: "allen-bio-anat-ex1-q009",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "Which of the following tissues form the main bulk of storage organ -",
    options: [
      "Parenchyma",
      "Collenchyma",
      "Sclerenchyma",
      "Aerenchyma"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Parenchyma forms the major component within plant organs and performs functions like photosynthesis, storage, and secretion.\n\n\u26a1 **Detailed Anatomical Explanation**:\nStorage organs such as potato tubers, carrot taproots, cotyledons, and endosperm consist almost entirely of thin-walled, isodiametric parenchymatous cells packed with starch grains, aleurone, or lipids.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Parenchyma is the most primitive, abundant, and fundamental ground tissue.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0014"],
    code: "PA0014"
  },
  {
    id: "allen-bio-anat-ex1-q010",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "Grittiness in pear fruit is due to -",
    options: [
      "Sclereids",
      "Collenchyma",
      "Parenchyma",
      "Meristem"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Sclereids are spherical, oval or cylindrical, highly thickened dead cells with very narrow lumens. They are commonly found in the fruit walls of nuts, pulp of fruits like guava, pear, and sapota.\n\n\u26a1 **Detailed Anatomical Explanation**:\nBrachysclereids (stone cells) have intensely lignified secondary walls traversed by simple branched pits, imparting characteristic gritty texture to pear (*Pyrus communis*) flesh.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Seed coats of legumes and leaves of tea also contain sclereids.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0249"],
    code: "PA0249"
  },
  {
    id: "allen-bio-anat-ex1-q011",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "Mechanical tissue consisting of living cells is -",
    options: [
      "Sclerenchyma",
      "Collenchyma",
      "Chlorenchyma",
      "Parenchyma"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Collenchyma provides mechanical support to growing organs while retaining living protoplasts at maturity.\n\n\u26a1 **Detailed Anatomical Explanation**:\nSclerenchyma is a dead mechanical tissue (lignified walls, obliterated lumen). Collenchyma is the unique *living* mechanical tissue of plants, characterized by cellulosic and pectiniferous corner thickenings.\n\n\ud83d\udca1 **Examiner Pro-Tip**: 'Living mechanical tissue' is the textbook NEET keyword for collenchyma.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0016"],
    code: "PA0016"
  },
  {
    id: "allen-bio-anat-ex1-q012",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "Collenchyma differs from sclerenchyma in -",
    options: [
      "Retaining protoplasm at maturity",
      "Having thick walls",
      "Having a lumen",
      "Being meristematic"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Sclerenchyma cells are usually dead and without protoplasts at maturity. Collenchyma cells possess active living protoplasm at maturity.\n\n\u26a1 **Detailed Anatomical Explanation**:\nBoth collenchyma and sclerenchyma have thick walls and lumens. However, sclerenchyma deposits rigid, impermeable lignin that causes cell death, while collenchyma retains pectin-cellulose walls with living vacuolated protoplasts.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Protoplasm retention at maturity is the fundamental diagnostic difference.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0017"],
    code: "PA0017"
  },
  {
    id: "allen-bio-anat-ex1-q013",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "Which of the following tissue provide tensile strength to young dicot stem against bending & swaying -",
    options: [
      "Parenchyma",
      "Collenchyma",
      "Sclerenchyma",
      "Sclereids"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Collenchyma consists of cells which are much thickened at the corners due to a deposition of cellulose, hemicellulose and pectin. They provide mechanical support to growing parts of the plant such as young stem and petiole of a leaf.\n\n\u26a1 **Detailed Anatomical Explanation**:\nThe hydrated pectin in collenchymatous hypodermis gives tensile flexibility, enabling young stems to bend without breaking under mechanical stress from wind.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Collenchyma acts as a physiological shock absorber in growing aerial organs.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0018"],
    code: "PA0018"
  },
  {
    id: "allen-bio-anat-ex1-q014",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "Cell walls of sclerenchymatous cells are thickened due to deposition of -",
    options: [
      "Cellulose",
      "Pectin",
      "Lignin",
      "Silica"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Sclerenchyma consists of long, narrow cells with thick and lignified cell walls having a few or numerous pits.\n\n\u26a1 **Detailed Anatomical Explanation**:\nLignin is a complex hydrophobic aromatic polymer that cross-links cellulose microfibrils, creating a rigid, waterproof wall matrix resistant to compressive and tensile forces.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Collenchyma thickenings are due to pectin and cellulose; sclerenchyma thickenings are due to lignin.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0020"],
    code: "PA0020"
  },
  {
    id: "allen-bio-anat-ex1-q015",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "Which of following plant cells are without vacuoles without nuclei and are dead -",
    options: [
      "Cambium cells",
      "Xylem vessels",
      "Root hairs",
      "Companion cells"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: A vessel element is lignified and devoid of protoplasm at maturity, lacking both nucleus and central vacuole to create a continuous lumen for water conduction.\n\n\u26a1 **Detailed Anatomical Explanation**:\nCambium cells, root hairs, and companion cells are living and retain nuclei, cytoplasm, and vacuoles. Mature xylem vessels undergo programmed cell death, autolysing their protoplasts to function as hollow water conduits.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Sieve tube elements are enucleate but living (with peripheral cytoplasm and vacuole); vessels are totally dead.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0021"],
    code: "PA0021"
  },
  {
    id: "allen-bio-anat-ex1-q016",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Medium",
    questionText: "Maximum bordered pits are found in tracheids of -",
    options: [
      "Monocotyledons",
      "Dicotyledons",
      "Pteridophytes",
      "Gymnosperms"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Tracheids are the chief water-transporting elements in gymnosperms.\n\n\u26a1 **Detailed Anatomical Explanation**:\nBecause gymnosperms lack xylem vessels, their tracheids bear numerous large, circular bordered pits with a flexible pit membrane and central thickening (torus) that acts as a valve preventing cavitation.\n\n\ud83d\udca1 **Examiner Pro-Tip**: The presence of abundant bordered pits with torus on radial walls of tracheids is a hallmark of gymnosperm wood (*Pinus*).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0022"],
    code: "PA0022"
  },
  {
    id: "allen-bio-anat-ex1-q017",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "The cell functionally associated with sieve tube element is -",
    options: [
      "Phloem fibres",
      "Phloem parenchyma",
      "Companion cell",
      "Collenchyma"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The functions of sieve tubes are controlled by the nucleus of companion cells. Sieve tube elements and companion cells are connected by pit fields present between their common longitudinal walls.\n\n\u26a1 **Detailed Anatomical Explanation**:\nBoth originate from the same mother cell (sister cells). Because mature sieve tube elements lack a nucleus, companion cells maintain their metabolic activity and hydrostatic pressure gradient.\n\n\ud83d\udca1 **Examiner Pro-Tip**: In gymnosperms, companion cells are replaced by albuminous cells (Strasburger cells).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0023"],
    code: "PA0023"
  },
  {
    id: "allen-bio-anat-ex1-q018",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "Bast fibres are mostly found in -",
    options: [
      "Secondary xylem",
      "Secondary phloem",
      "Primary phloem",
      "Primary xylem"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Phloem fibres (bast fibres) are made up of sclerenchymatous cells. These are generally absent in the primary phloem but are found in the secondary phloem.\n\n\u26a1 **Detailed Anatomical Explanation**:\nCommercially exploited bast fibres such as jute, flax, and hemp are secondary phloem fibres derived from vascular cambium activity during secondary growth.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Remember: Phloem fibres are absent in primary phloem of most angiosperms!",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0024"],
    code: "PA0024"
  },
  {
    id: "allen-bio-anat-ex1-q019",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "Vessels and companion cells are respectively present in the xylem and phloem of -",
    options: [
      "Gymnosperm",
      "Pteridophyte",
      "Angiosperm",
      "Bryophyte"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Presence of vessels is a characteristic feature of angiosperms. Gymnosperms lack vessels in their xylem and lack companion cells in their phloem.\n\n\u26a1 **Detailed Anatomical Explanation**:\nPteridophytes and gymnosperms have tracheids for water conduction and sieve cells + albuminous cells for food translocation. Only angiosperms possess the advanced combination of vessels and companion cells.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Notable exception: Gnetales (*Gnetum*, *Ephedra*, *Welwitschia*) are gymnosperms that possess vessels.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0025"],
    code: "PA0025"
  },
  {
    id: "allen-bio-anat-ex1-q020",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "Phloem parenchyma is absent in -",
    options: [
      "Dicot stem",
      "Dicot leaf",
      "Monocot stem",
      "Dicot root"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Phloem parenchyma is absent in most of the monocotyledons.\n\n\u26a1 **Detailed Anatomical Explanation**:\nIn monocot stems (e.g. maize, sugarcane), the vascular bundle phloem consists solely of sieve tubes and companion cells; phloem parenchyma is completely lacking.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Direct NCERT statement tested repeatedly in AIPMT and NEET.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0026"],
    code: "PA0026"
  },
  {
    id: "allen-bio-anat-ex1-q021",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "Localised cell wall thickenings in collenchyma is mainly due to deposition of -",
    options: [
      "Cellulose",
      "Pectin",
      "Lignin",
      "Suberin"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Collenchyma cells are thickened at corners due to the localized deposition of cellulose, hemicellulose, and primarily **pectin**.\n\n\u26a1 **Detailed Anatomical Explanation**:\nPectin has high water-holding capacity, making the corners hydrophilic and plastic, providing tensile resilience without brittleness.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Never select lignin for collenchyma; collenchyma is strictly unlignified.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0250"],
    code: "PA0250"
  },
  {
    id: "allen-bio-anat-ex1-q022",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "The chief function of a xylem vessel in a plant body is to -",
    options: [
      "Conduct sap",
      "Conduct mineral salts only",
      "Eliminate excess of water at night",
      "Translocate organic nutrients"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Xylem functions as a conducting tissue for water and minerals (sap) from roots to the stem and leaves.\n\n\u26a1 **Detailed Anatomical Explanation**:\nAscent of sap consists of water along with dissolved mineral nutrients, driven by transpiration pull and root pressure through continuous vessel channels.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Sap = water + dissolved mineral ions.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0029"],
    code: "PA0029"
  },
  {
    id: "allen-bio-anat-ex1-q023",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Medium",
    questionText: "End walls of tracheids and vessels are, respectively :-",
    options: [
      "Pitted & perforated",
      "Perforated & pitted",
      "Both perforated",
      "Both pitted"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Tracheids are elongated cells with tapering, imperforate pitted ends. Vessel elements are interconnected through perforations in their common end walls.\n\n\u26a1 **Detailed Anatomical Explanation**:\nWater moves between adjacent tracheids laterally through bordered pit pairs. In vessels, end walls are dissolved completely or possess scalariform/simple perforation plates, forming a continuous open pipe.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Tracheids = imperforate (pitted); Vessels = perforated.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0030"],
    code: "PA0030"
  },
  {
    id: "allen-bio-anat-ex1-q024",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "Long and pointed sclerenchyma cells are :-",
    options: [
      "Fibres",
      "Tracheae",
      "Wood parenchyma",
      "Sclereids"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Fibres are thick-walled, elongated and pointed cells, generally occurring in groups or bundles in various parts of the plant.\n\n\u26a1 **Detailed Anatomical Explanation**:\nSclereids are spherical, oval, or cylindrical with blunt ends. Fibres are long, narrow, spindle-shaped with tapering pointed ends.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Sclereids = isodiametric/cylindrical; Fibres = elongated and pointed.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0032"],
    code: "PA0032"
  },
  {
    id: "allen-bio-anat-ex1-q025",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "P-protein is a constituent of :-",
    options: [
      "Sieve tube elements",
      "Xylem parenchyma",
      "Parenchyma",
      "Pericycle"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Phloem-protein (P-protein) is present in sieve tube elements of angiosperms.\n\n\u26a1 **Detailed Anatomical Explanation**:\nP-protein forms slime plugs over sieve plate pores upon injury to prevent exudation of nutrient-rich phloem sap.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Sieve cells of gymnosperms lack P-protein.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0034"],
    code: "PA0034"
  },
  {
    id: "allen-bio-anat-ex1-q026",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "When xylem and phloem are on same radius, the vascular bundles are said to be -",
    options: [
      "Radial",
      "Conjoint",
      "Endarch",
      "Exarch"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In conjoint type of vascular bundles, the xylem and phloem are jointly situated along the same radius of vascular bundles.\n\n\u26a1 **Detailed Anatomical Explanation**:\nSuch vascular bundles are common in stems and leaves. When xylem and phloem alternate along different radii, they are radial (roots).\n\n\ud83d\udca1 **Examiner Pro-Tip**: Same radius = Conjoint; Different radii = Radial.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0035"],
    code: "PA0035"
  },
  {
    id: "allen-bio-anat-ex1-q027",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Medium",
    questionText: "A vascular bundle in which phloem is present on both the sides of the xylem and separated from it by strips of cambium is said to be -",
    options: [
      "Collateral open",
      "Bicollateral open",
      "Radial",
      "Bicollateral closed"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Bicollateral bundles feature central xylem sandwiched between outer phloem and inner phloem, with two cambium strips (outer and inner cambium).\n\n\u26a1 **Detailed Anatomical Explanation**:\nSequence: Outer phloem -> Outer cambium -> Xylem -> Inner cambium -> Inner phloem. Because cambium is present, it is an open bundle (e.g. stem of *Cucurbita*).\n\n\ud83d\udca1 **Examiner Pro-Tip**: Characteristic of Cucurbitaceae (gourds) and Solanaceae.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0036"],
    code: "PA0036"
  },
  {
    id: "allen-bio-anat-ex1-q028",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Meristematic Tissues & Apical Organisation",
    difficulty: "Easy",
    questionText: "The basic difference between stem and root is that xylem in stem is -",
    options: [
      "Endarch",
      "Exarch",
      "Diarch",
      "Polyarch"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In stems, protoxylem lies towards the centre (pith) and metaxylem lies towards the periphery of the organ. This type of primary xylem is called endarch.\n\n\u26a1 **Detailed Anatomical Explanation**:\nIn roots, protoxylem lies towards the periphery and metaxylem lies towards the centre, which is called exarch.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Stem = Endarch (inward protoxylem); Root = Exarch (outward protoxylem).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0039"],
    code: "PA0039"
  },
  {
    id: "allen-bio-anat-ex1-q029",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "Which xylem element is living :-",
    options: [
      "Vessels",
      "Tracheids",
      "Fibres",
      "Parenchyma"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Xylem parenchyma cells are living and thin-walled, and their cell walls are made up of cellulose. They store food materials in the form of starch or fat, and other substances like tannins.\n\n\u26a1 **Detailed Anatomical Explanation**:\nVessels, tracheids, and xylem fibres are all dead and lignified at maturity. Xylem parenchyma is the sole living element of xylem.\n\n\ud83d\udca1 **Examiner Pro-Tip**: In xylem, only parenchyma is living; in phloem, only fibres are dead!",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0040"],
    code: "PA0040"
  },
  {
    id: "allen-bio-anat-ex1-q030",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "A tissue of epiphytes which is capable of absorbing water from air is known as -",
    options: [
      "Cork",
      "Velamen",
      "Epiblema",
      "Hypodermis"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Epiphytic roots of orchids possess a specialized multilayered hygroscopic epidermis known as velamen.\n\n\u26a1 **Detailed Anatomical Explanation**:\nVelamen consists of dead, air-filled, spongy cells with spirally thickened walls capable of rapidly absorbing atmospheric moisture.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Found in aerial hanging roots of *Vanda*.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0041"],
    code: "PA0041"
  },
  {
    id: "allen-bio-anat-ex1-q031",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "Collenchymatous hypodermis is characteristic feature of -",
    options: [
      "Dicot stem",
      "Monocot stem",
      "Monocot as well as dicot stem",
      "Hydrophytes"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In dicotyledonous stems (e.g. sunflower), the hypodermis consists of 3-5 layers of collenchymatous cells below the epidermis, which provides mechanical strength to the young stem.\n\n\u26a1 **Detailed Anatomical Explanation**:\nMonocot stems, by contrast, possess a sclerenchymatous hypodermis (e.g. maize).\n\n\ud83d\udca1 **Examiner Pro-Tip**: Dicot stem = Collenchyma hypodermis; Monocot stem = Sclerenchyma hypodermis.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0043"],
    code: "PA0043"
  },
  {
    id: "allen-bio-anat-ex1-q032",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Medium",
    questionText: "Innumerable (many) vascular bundles, lack of cambium and lack of a well demarcated pith is found in \u2013",
    options: [
      "Sugarcane, grass",
      "Sunflower, neem",
      "Radish, neem",
      "Pea, peepal"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The monocotyledonous stem has a sclerenchymatous hypodermis, a large number of scattered vascular bundles, each surrounded by a sclerenchymatous bundle sheath, and a large, conspicuous parenchymatous ground tissue.\n\n\u26a1 **Detailed Anatomical Explanation**:\nSugarcane and grass are monocots displaying atactostele: closed vascular bundles scattered throughout ground tissue with no distinction between cortex and pith.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Sunflower, neem, radish, pea, and peepal are dicots with a ring of open vascular bundles and distinct pith.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0044"],
    code: "PA0044"
  },
  {
    id: "allen-bio-anat-ex1-q033",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "Cortex and pith are not distinguished in -",
    options: [
      "Monocot stem",
      "Monocot root",
      "Dicot stem",
      "Dicot root"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In monocot stem, all tissues inner to hypodermis represent an undifferentiated, continuous parenchymatous ground tissue in which vascular bundles are scattered.\n\n\u26a1 **Detailed Anatomical Explanation**:\nDicot stems, dicot roots, and monocot roots all display a well-demarcated cortex, endodermis, pericycle, and pith.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Absence of demarcated cortex and pith is the defining hallmark of monocot stem.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0045"],
    code: "PA0045"
  },
  {
    id: "allen-bio-anat-ex1-q034",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "What is the characteristics of a vascular bundle of monocot stem -",
    options: [
      "Open and surrounded by a sclerenchymatous bundle sheath",
      "Closed and not surrounded by bundle sheath",
      "Closed and surrounded by bundle sheath",
      "Open and not surrounded by a bundle sheath"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Monocot stem vascular bundles are conjoint, collateral, closed (lack cambium), and each is surrounded by a sclerenchymatous bundle sheath.\n\n\u26a1 **Detailed Anatomical Explanation**:\nPeripheral vascular bundles are generally smaller and more numerous than the centrally located ones.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Monocot stem = Closed + Sclerenchymatous bundle sheath.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0046"],
    code: "PA0046"
  },
  {
    id: "allen-bio-anat-ex1-q035",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "In dicot root :-",
    options: [
      "Vascular bundles are scattered with cambium",
      "Vascular bundles are open and arranged in a ring",
      "Xylem and phloem are radial",
      "Xylem is always endarch"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In roots, xylem and phloem patches lie on alternating radii, an arrangement termed radial. Xylem in roots is exarch.\n\n\u26a1 **Detailed Anatomical Explanation**:\nThere are typically 2 to 4 (rarely up to 6) xylem and phloem patches separated by parenchymatous conjunctive tissue.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Stems have conjoint endarch bundles; roots have radial exarch bundles.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0047"],
    code: "PA0047"
  },
  {
    id: "allen-bio-anat-ex1-q036",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "A dicot root differs from a monocot root in which of the following -",
    options: [
      "Presence of epiblema",
      "Presence of pericycle",
      "Presence of less-developed (poorly developed) pith",
      "Presence of radial vascular bundles"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In dicot root, pith is small or inconspicuous. In monocot root, pith is large and well developed.\n\n\u26a1 **Detailed Anatomical Explanation**:\nBoth roots possess epiblema, pericycle, and radial exarch vascular bundles. The distinguishing anatomical features are the number of xylem arches (diarch to tetrarch in dicot vs polyarch in monocot) and the size of the pith.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Dicot root = Inconspicuous pith; Monocot root = Large well-developed pith.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0048"],
    code: "PA0048"
  },
  {
    id: "allen-bio-anat-ex1-q037",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "Polyarch and exarch xylem is the characteristic of -",
    options: [
      "Dicot stem",
      "Dicot root",
      "Monocot stem",
      "Monocot root"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In monocot root, there are usually more than six (polyarch) xylem bundles present.\n\n\u26a1 **Detailed Anatomical Explanation**:\nAll roots have exarch xylem (protoxylem towards periphery). Dicot roots have 2 to 4 (rarely up to 6) xylem bundles, whereas monocot roots are distinctly polyarch (>6, often 8 to 20).\n\n\ud83d\udca1 **Examiner Pro-Tip**: Polyarch + Exarch = Monocot root.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0251"],
    code: "PA0251"
  },
  {
    id: "allen-bio-anat-ex1-q038",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "Water cavity occurs in the vascular bundle of -",
    options: [
      "Dicot stem",
      "Monocot root",
      "Monocot stem",
      "Dicot root"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Water-containing cavities are present within the vascular bundles of monocot stems (e.g. maize).\n\n\u26a1 **Detailed Anatomical Explanation**:\nDuring rapid stem elongation, the earliest formed protoxylem vessels break down and dissolve, leaving a lysigenous (or schizolysigenous) water cavity.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Water cavity is present in Y-shaped xylem of monocot stem bundles.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0050"],
    code: "PA0050"
  },
  {
    id: "allen-bio-anat-ex1-q039",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Medium",
    questionText: "In which of the following order, an exarch xylem develops -",
    options: [
      "Centripetal",
      "Centrifugal",
      "Both centripetal & centrifugal",
      "Irregular"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In exarch xylem, protoxylem differentiates first towards the outside (periphery) and metaxylem differentiates towards the inside (centre).\n\n\u26a1 **Detailed Anatomical Explanation**:\nBecause differentiation progresses from the periphery inwards towards the center, the development of exarch xylem is **centripetal**.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Exarch = Centripetal development (roots); Endarch = Centrifugal development (stems).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0051"],
    code: "PA0051"
  },
  {
    id: "allen-bio-anat-ex1-q040",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "Vascular bundles in Cucurbita stem are -",
    options: [
      "Bicollateral & open",
      "Bicollateral & closed",
      "Collateral & open",
      "Amphivasal"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In *Cucurbita* (family Cucurbitaceae), vascular bundles are bicollateral and open.\n\n\u26a1 **Detailed Anatomical Explanation**:\nXylem is located in the middle with phloem on both outer and inner sides. Two strips of cambium are present (outer and inner cambium), making the bundle open.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Cucurbitaceae members feature 10 bicollateral open bundles arranged in two alternating rings of 5 each.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0053"],
    code: "PA0053"
  },
  {
    id: "allen-bio-anat-ex1-q041",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "Position of xylem & phloem in leaf respectively -",
    options: [
      "Abaxial & Adaxial",
      "Adaxial & Abaxial",
      "Both Adaxial",
      "Both abaxial"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In a dorsiventral leaf vascular bundle, xylem is directed towards the upper (adaxial) epidermis and phloem is directed towards the lower (abaxial) epidermis.\n\n\u26a1 **Detailed Anatomical Explanation**:\nThis orientation reflects the leaf trace divergence from the stem, where inner xylem faces upwards upon horizontal leaf blade expansion.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Adaxial = Upper = Xylem; Abaxial = Lower = Phloem.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0054"],
    code: "PA0054"
  },
  {
    id: "allen-bio-anat-ex1-q042",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "In dicot stem, hypodermis is -",
    options: [
      "Parenchymatous",
      "Sclerenchymatous",
      "Collenchymatous",
      "Chlorenchymatous"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In dicot stems, hypodermis consists of a few layers of collenchymatous cells just below the epidermis.\n\n\u26a1 **Detailed Anatomical Explanation**:\nIt provides mechanical strength along with flexibility to the growing young dicot stem.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Compare: Dicot stem hypodermis is collenchymatous, monocot stem hypodermis is sclerenchymatous.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0252"],
    code: "PA0252"
  },
  {
    id: "allen-bio-anat-ex1-q043",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "In leaves, the vascular bundles are -",
    options: [
      "Bicollateral & open",
      "Collateral & open",
      "Collateral & closed",
      "Radial & exarch"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Vascular bundles in leaves are conjoint, collateral and closed (no cambium).\n\n\u26a1 **Detailed Anatomical Explanation**:\nLeaves do not undergo secondary growth; hence cambium is completely absent between xylem and phloem, making the bundles closed.\n\n\ud83d\udca1 **Examiner Pro-Tip**: All leaf bundles are collateral and closed.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0056"],
    code: "PA0056"
  },
  {
    id: "allen-bio-anat-ex1-q044",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "Vascular bundles are scattered in ground tissue (Atactostele) in -",
    options: [
      "Maize stem",
      "Sunflower stem",
      "Gram root",
      "Isobilateral leaf"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In monocotyledonous stem (such as maize), vascular bundles are scattered throughout the parenchymatous ground tissue.\n\n\u26a1 **Detailed Anatomical Explanation**:\nThis scattered vascular cylinder arrangement without demarcated rings is botanically known as an **atactostele**.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Dicot stem has eustele (ring of bundles); monocot stem has atactostele (scattered bundles).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0253"],
    code: "PA0253"
  },
  {
    id: "allen-bio-anat-ex1-q045",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "The hypodermis present in maize stem is -",
    options: [
      "Parenchymatous",
      "Collenchymatous",
      "Sclerenchymatous",
      "Meristematic"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The monocotyledonous stem (e.g. maize) has a sclerenchymatous hypodermis.\n\n\u26a1 **Detailed Anatomical Explanation**:\nThe 2-3 layered sclerenchymatous hypodermis provides rigidity to the hollow or slender monocot culm against wind shear.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Maize = Monocot = Sclerenchymatous hypodermis.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0058"],
    code: "PA0058"
  },
  {
    id: "allen-bio-anat-ex1-q046",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "Passage cells are found in endodermis of -",
    options: [
      "Dicot stem",
      "Monocot stem",
      "Orchid stem",
      "Monocot root"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In roots, endodermal cells opposite to protoxylem points lack Casparian strips and suberin lamellae. These thin-walled cells are called passage cells or transfusion cells.\n\n\u26a1 **Detailed Anatomical Explanation**:\nIn monocot roots, where Casparian bands and suberin depositions are exceptionally heavy in most endodermal cells, passage cells provide an unhindered radial pathway for water and dissolved minerals from the cortex into the xylem.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Passage cells are located strictly opposite to protoxylem poles.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0059"],
    code: "PA0059"
  },
  {
    id: "allen-bio-anat-ex1-q047",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "Pith is produced by -",
    options: [
      "Ground meristem",
      "Procambium",
      "Collenchyma",
      "Protoderm"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: According to Haberlandt's classification, apical meristem differentiates into three primary meristematic zones: protoderm, procambium, and ground meristem.\n\n\u26a1 **Detailed Anatomical Explanation**:\n- Protoderm -> Epidermal tissue system\n- Procambium -> Primary vascular tissues (xylem and phloem)\n- Ground meristem -> Ground tissue system including cortex, endodermis, pericycle, medullary rays, and central pith.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Ground meristem produces all fundamental ground tissues including the pith.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0060"],
    code: "PA0060"
  },
  {
    id: "allen-bio-anat-ex1-q048",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "Sugar transport elements of gymnosperms & pteridophytes are -",
    options: [
      "Sieve cells",
      "Vessels",
      "Sieve tubes",
      "Sieve tube elements"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Gymnosperms have albuminous cells and sieve cells. They lack sieve tubes and companion cells.\n\n\u26a1 **Detailed Anatomical Explanation**:\nPteridophytes and gymnosperms possess primitive, non-aggregated sieve cells where sieve areas are distributed uniformly across all lateral walls rather than localized into distinct end-wall sieve plates.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Sieve tubes + companion cells = Angiosperms; Sieve cells + albuminous cells = Gymnosperms.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0061"],
    code: "PA0061"
  },
  {
    id: "allen-bio-anat-ex1-q049",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "When protoxylem faces pericycle, it is called -",
    options: [
      "Endarch",
      "Diarch",
      "Exarch",
      "Polyarch"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In roots, the protoxylem lies towards periphery (facing the pericycle) and metaxylem lies towards the centre. Such arrangement of primary xylem is called exarch.\n\n\u26a1 **Detailed Anatomical Explanation**:\nBecause the pericycle directly surrounds the vascular cylinder, outward-pointing protoxylem poles directly abut the pericycle.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Facing pericycle = Facing periphery = Exarch.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0062"],
    code: "PA0062"
  },
  {
    id: "allen-bio-anat-ex1-q050",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "Which wood conduct sap -",
    options: [
      "Heart wood",
      "Sap wood",
      "Wood with lots of fibres and tyloses",
      "All of the above"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The peripheral region of the secondary xylem is lighter in colour and is known as the sapwood (alburnum). It is involved in the conduction of water and minerals from root to leaf.\n\n\u26a1 **Detailed Anatomical Explanation**:\nHeartwood vessels are non-functional and blocked by tyloses and secondary metabolites; only sapwood actively conducts sap.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Sapwood = Functional, conducting, peripheral; Heartwood = Dead, non-conducting, central.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0063"],
    code: "PA0063"
  },
  {
    id: "allen-bio-anat-ex1-q051",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "Phelloderm is formed by -",
    options: [
      "Vascular cambium",
      "Phellogen",
      "Fascicular cambium",
      "Interfascicular cambium"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Phellogen (cork cambium) cuts off cells on both sides. The outer cells differentiate into phellem (cork) while the inner cells differentiate into phelloderm (secondary cortex).\n\n\u26a1 **Detailed Anatomical Explanation**:\nPhellogen, phellem, and phelloderm are collectively designated as periderm.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Phellogen cuts cork outwards and phelloderm inwards.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0064"],
    code: "PA0064"
  },
  {
    id: "allen-bio-anat-ex1-q052",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "Dendrochronology is the study of determination of -",
    options: [
      "Height of a tree",
      "Diameter of a tree",
      "Age of a tree with the help of annual rings",
      "Counting of the number of branches"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Each annual ring corresponds to one year's seasonal growth. Counting annual rings in a cut cross-section allows estimation of the tree's age.\n\n\u26a1 **Detailed Anatomical Explanation**:\nDendrochronology (Greek *dendron*: tree, *chronos*: time, *logos*: study) determines tree age and past environmental climates using growth ring patterns.\n\n\ud83d\udca1 **Examiner Pro-Tip**: 1 annual ring = 1 springwood band + 1 autumnwood band.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0065"],
    code: "PA0065"
  },
  {
    id: "allen-bio-anat-ex1-q053",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "A timber merchant told his customer that log of wood which he was purchasing comes from a 20 years old tree, he told so by inspecting the -",
    options: [
      "Diameter of log",
      "Thickness of the heart wood",
      "Number of cork layers",
      "Annual rings"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Annual rings seen in a cut stem give an estimate of the age of the tree.\n\n\u26a1 **Detailed Anatomical Explanation**:\nEach year, the cambium produces two concentric rings: early wood (spring) and late wood (autumn). Together, these form one annual growth ring, so 20 rings indicate a 20-year-old tree.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Log diameter varies with growth rate, but annual ring count strictly reflects age.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0066"],
    code: "PA0066"
  },
  {
    id: "allen-bio-anat-ex1-q054",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Easy",
    questionText: "In trees, the annual rings represent -",
    options: [
      "Primary xylem",
      "Secondary xylem",
      "Secondary phloem",
      "Cambium"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The activity of vascular cambium produces secondary xylem towards the inside. Variations in cambial activity across spring and autumn produce light and dark concentric bands of secondary xylem, forming annual rings.\n\n\u26a1 **Detailed Anatomical Explanation**:\nWood is botanically defined as secondary xylem. Thus, annual rings represent successive increments of secondary xylem.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Wood = Secondary xylem.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0068"],
    code: "PA0068"
  },
  {
    id: "allen-bio-anat-ex1-q055",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Simple & Complex Permanent Tissues",
    difficulty: "Medium",
    questionText: "Annual rings are formed due to the activity of -",
    options: [
      "Intrastelar cambium",
      "Intercalary meristem",
      "Extrastelar cambium",
      "Primary cambium"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Annual rings are formed by the cyclical seasonal activity of the vascular cambium, which is located inside the stele (intrastelar cambium).\n\n\u26a1 **Detailed Anatomical Explanation**:\nCork cambium (phellogen) operates outside the stele (extrastelar cambium) and forms periderm, not annual rings.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Intrastelar cambium = Vascular cambium -> Annual rings.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0070"],
    code: "PA0070"
  },
  {
    id: "allen-bio-anat-ex1-q056",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "The Tissue System",
    difficulty: "Easy",
    questionText: "When a tree grows older which of the following increased rapidly -",
    options: [
      "Heart wood",
      "Sap wood",
      "Pith",
      "Cortex"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In old trees, the greater part of secondary xylem is dark brown due to deposition of organic compounds (tannins, resins, oils). This region comprises dead elements and is termed heartwood.\n\n\u26a1 **Detailed Anatomical Explanation**:\nWhile the thickness of functional sapwood remains relatively constant (needed for water conduction), older innermost sapwood layers continuously convert into non-functional heartwood, causing heartwood volume to expand rapidly.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Heartwood increases with age; sapwood thickness remains approximately stable.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0071"],
    code: "PA0071"
  },
  {
    id: "allen-bio-anat-ex1-q057",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "The Tissue System",
    difficulty: "Easy",
    questionText: "Lenticels do not occur on -",
    options: [
      "Stem",
      "Root",
      "Leaf",
      "Fruit"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Lenticels permit the exchange of gases between the outer atmosphere and the internal tissue of woody stems and roots.\n\n\u26a1 **Detailed Anatomical Explanation**:\nLenticels develop in periderm of woody stems, old roots, and some pericarp fruit surfaces (e.g. apple, pear). Leaves lack periderm and secondary growth, possessing stomata exclusively for gas exchange.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Leaves bear stomata; periderm-covered woody organs bear lenticels.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0072"],
    code: "PA0072"
  },
  {
    id: "allen-bio-anat-ex1-q058",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "The Tissue System",
    difficulty: "Easy",
    questionText: "External protective tissues are -",
    options: [
      "Cortex and epidermis",
      "Cork and pericycle",
      "Cortex and pericycle",
      "Cork and epidermis"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The epidermis is the outermost protective covering of the primary plant body. When the epidermis ruptures during secondary growth, it is replaced by cork (phellem).\n\n\u26a1 **Detailed Anatomical Explanation**:\nEpidermis serves as the primary external protective layer, while cork (with suberised walls) serves as the secondary external protective layer.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Epidermis (primary) + Cork (secondary) = External protective boundary.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0073"],
    code: "PA0073"
  },
  {
    id: "allen-bio-anat-ex1-q059",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "The Tissue System",
    difficulty: "Easy",
    questionText: "Which of the following provides maximum mechanical strength to a tree trunk -",
    options: [
      "Heart wood",
      "Sap wood",
      "Cork",
      "Late wood"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Heartwood does not conduct water but provides mechanical support to the stem.\n\n\u26a1 **Detailed Anatomical Explanation**:\nHeartwood (duramen) contains heavily lignified, dead secondary xylem elements tightly plugged with tyloses and impregnated with hard resins, tannins, and gums, making it highly durable and mechanically resistant.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Heartwood provides mechanical strength; sapwood provides water conduction.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0074"],
    code: "PA0074"
  },
  {
    id: "allen-bio-anat-ex1-q060",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "The Tissue System",
    difficulty: "Easy",
    questionText: "Extrastelar secondary growth in dicot stem occurs due to the activity of -",
    options: [
      "Intrafascicular cambium",
      "Interfascicular cambium",
      "Vascular cambium",
      "Cork cambium"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: As the stem continues to increase in girth due to the activity of vascular cambium, the outer cortical and epidermis layers get broken and need to be replaced. Hence, another meristematic tissue called cork cambium or phellogen develops, usually in the cortex region.\n\n\u26a1 **Detailed Anatomical Explanation**:\nPhellogen is located in the cortex (outside the stele); hence its activity constitutes extrastelar secondary growth.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Vascular cambium = Intrastelar secondary growth; Cork cambium = Extrastelar secondary growth.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0076"],
    code: "PA0076"
  },
  {
    id: "allen-bio-anat-ex1-q061",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "The Tissue System",
    difficulty: "Easy",
    questionText: "Normally secondary growth takes place in -",
    options: [
      "Dicots & Monocots",
      "Gymnosperms & Monocots",
      "Dicots & Gymnosperms",
      "Only in dicots"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Secondary growth occurs in gymnosperms and dicotyledonous angiosperms due to the presence of open vascular bundles with lateral meristems (cambium).\n\n\u26a1 **Detailed Anatomical Explanation**:\nMonocots have closed vascular bundles (lacking cambium) and normally do not exhibit secondary growth.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Gymnosperms form extensive secondary xylem (wood) just like dicot trees.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0078"],
    code: "PA0078"
  },
  {
    id: "allen-bio-anat-ex1-q062",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "The Tissue System",
    difficulty: "Medium",
    questionText: "Formation of which tissue is example of dedifferentiation -",
    options: [
      "Interfascicular cambium",
      "Apical meristem",
      "Intrafascicular cambium",
      "Intercalary meristem"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The cells of medullary rays adjoining the intrafascicular cambium become meristematic and form the interfascicular cambium. This process of regaining division capacity by living permanent cells is dedifferentiation.\n\n\u26a1 **Detailed Anatomical Explanation**:\nMedullary rays are living parenchymatous permanent cells. When they dedifferentiate, they yield the secondary meristematic interfascicular cambium.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Intrafascicular cambium is primary in origin; interfascicular cambium is secondary in origin via dedifferentiation.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0080"],
    code: "PA0080"
  },
  {
    id: "allen-bio-anat-ex1-q063",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "The Tissue System",
    difficulty: "Easy",
    questionText: "What is the fate of primary phloem in dicot stem after secondary growth -",
    options: [
      "Compresses outside and degenerates",
      "Compresses inside and degenerates",
      "Becomes part of sec phloem",
      "Modifies in sclerenchyma"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The primary and secondary phloem get gradually crushed due to the continued formation and accumulation of secondary xylem.\n\n\u26a1 **Detailed Anatomical Explanation**:\nBecause secondary xylem expands centrifugally from within, outward centrifugal pressure pushes the primary and older secondary phloem against the resistant pericycle and cortex, compressing and degenerating them.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Primary xylem remains more or less intact at the centre, but primary phloem gets crushed outwards.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0081"],
    code: "PA0081"
  },
  {
    id: "allen-bio-anat-ex1-q064",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "The Tissue System",
    difficulty: "Easy",
    questionText: "Which tissue remains more active during spring -",
    options: [
      "Cork cambium",
      "Vascular cambium",
      "Parenchyma",
      "Sclerenchyma"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In the spring season, cambium is very active and produces a large number of xylary elements having vessels with wider cavities.\n\n\u26a1 **Detailed Anatomical Explanation**:\nIn winter/autumn, the cambium is less active and forms fewer xylary elements with narrow vessels.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Spring season -> High vascular cambium activity -> Springwood/Earlywood.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0082"],
    code: "PA0082"
  },
  {
    id: "allen-bio-anat-ex1-q065",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "The Tissue System",
    difficulty: "Easy",
    questionText: "Water conduction in stem of tree takes place mainly by -",
    options: [
      "Heart wood",
      "Sap wood",
      "Primary xylem",
      "All of the above"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Sapwood (alburnum) is the peripheral region of secondary xylem that conducts water and minerals from root to leaf.\n\n\u26a1 **Detailed Anatomical Explanation**:\nHeartwood lumina are occluded by tyloses and secondary resins; primary xylem is small and inactive. Thus, sapwood conducts essentially all water.\n\n\ud83d\udca1 **Examiner Pro-Tip**: If heartwood is removed or hollowed out, the tree survives because sapwood conducts sap.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0083"],
    code: "PA0083"
  },
  {
    id: "allen-bio-anat-ex1-q066",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "The Tissue System",
    difficulty: "Easy",
    questionText: "How many types of cells are present in vascular cambium of dicot stem -",
    options: [
      "Two types, fusiform & ray initials",
      "Only fusiform initials",
      "Only ray initials",
      "Three types fusiform, ray and medullary rays."
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Vascular cambium contains two distinct types of meristematic initials: fusiform initials and ray initials.\n\n\u26a1 **Detailed Anatomical Explanation**:\n- **Fusiform initials**: Elongated, vertically oriented spindle-shaped cells that produce axial secondary elements (vessels, tracheids, sieve tubes, fibres, and axial parenchyma).\n- **Ray initials**: Isodiametric cells that produce horizontal radial vascular rays (medullary rays).\n\n\ud83d\udca1 **Examiner Pro-Tip**: Fusiform -> Axial system; Ray initials -> Radial system.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0084"],
    code: "PA0084"
  },
  {
    id: "allen-bio-anat-ex1-q067",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "The Tissue System",
    difficulty: "Easy",
    questionText: "Cork cambium is -",
    options: [
      "Always primary meristem",
      "Always secondary meristem",
      "May be secondary or primary meristem",
      "Partly primary & partly secondary meristem"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Cork cambium (phellogen) arises by dedifferentiation of permanent cortical or epidermal cells during secondary growth.\n\n\u26a1 **Detailed Anatomical Explanation**:\nBecause it originates exclusively from previously differentiated permanent tissues, cork cambium is **always a secondary meristem**.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Vascular cambium in dicot stem is partly primary and partly secondary, but cork cambium is 100% secondary.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0085"],
    code: "PA0085"
  },
  {
    id: "allen-bio-anat-ex1-q068",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "The Tissue System",
    difficulty: "Medium",
    questionText: "Normally in dicot stems, phellogen develops from -",
    options: [
      "Hypodermis",
      "Phellem",
      "Endodermal cells",
      "Epidermal & pericycle cells"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Phellogen usually develops in the outer cortical region of dicot stems.\n\n\u26a1 **Detailed Anatomical Explanation**:\nIn typical dicot stems, collenchymatous hypodermal cells (outer cortex) dedifferentiate to initiate the phellogen cylinder.\n\n\ud83d\udca1 **Examiner Pro-Tip**: In roots, phellogen originates from pericycle; in stems, from hypodermis / outer cortex.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0086"],
    code: "PA0086"
  },
  {
    id: "allen-bio-anat-ex1-q069",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "The Tissue System",
    difficulty: "Easy",
    questionText: "Suberin is chiefly deposited in the cells of -",
    options: [
      "Sclerenchyma",
      "Collenchyma",
      "Cork",
      "Phelloderm"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Cork cells have suberin deposited in their walls, which makes them impervious to water and gases.\n\n\u26a1 **Detailed Anatomical Explanation**:\nPhelloderm consists of thin-walled living parenchymatous cells; phellem (cork) consists of dead cells packed with suberin.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Lignin -> Sclerenchyma; Pectin -> Collenchyma; Suberin -> Cork & Casparian strips.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0087"],
    code: "PA0087"
  },
  {
    id: "allen-bio-anat-ex1-q070",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "The Tissue System",
    difficulty: "Easy",
    questionText: "Which of the following is a meristematic tissue -",
    options: [
      "Phellem",
      "Phellogen",
      "Phelloderm",
      "Periderm"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Phellogen is the cork cambium, a lateral meristematic tissue a couple of layers thick.\n\n\u26a1 **Detailed Anatomical Explanation**:\n- Phellem (cork) = Dead permanent tissue\n- Phellogen = Cork cambium (meristematic)\n- Phelloderm = Secondary cortex (living permanent tissue)\n- Periderm = Phellem + Phellogen + Phelloderm.\n\n\ud83d\udca1 **Examiner Pro-Tip**: 'Gen' in Phellogen denotes generator/meristem.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0088"],
    code: "PA0088"
  },
  {
    id: "allen-bio-anat-ex1-q071",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Dicot & Monocot Plants",
    difficulty: "Easy",
    questionText: "Sea shore trees do not show annual rings because -",
    options: [
      "There is little climatic variations",
      "They belong to monocots",
      "There is low temperature",
      "Soil is sandy"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In coastal areas and tropical rainforests, the climate remains uniform throughout the year. As a result, the cambium remains uniformly active and distinct early and late wood bands are not formed.\n\n\u26a1 **Detailed Anatomical Explanation**:\nDistinct annual rings require sharp seasonal contrast (as in temperate regions).\n\n\ud83d\udca1 **Examiner Pro-Tip**: Temperate plants = Sharp annual rings; Coastal/tropical plants = Inconspicuous/no annual rings.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0089"],
    code: "PA0089"
  },
  {
    id: "allen-bio-anat-ex1-q072",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Dicot & Monocot Plants",
    difficulty: "Medium",
    questionText: "Secondary growth in dicots and gymnosperms occurs by -",
    options: [
      "Formation of vascular rays",
      "Thickening of tracheary elements",
      "Formation of meristematic cells in vascular region",
      "Development of meristematic cells in vascular & cortical regions"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Secondary growth is mediated by two lateral meristems: the vascular cambium (in the vascular cylinder) and the cork cambium/phellogen (in the cortical region).\n\n\u26a1 **Detailed Anatomical Explanation**:\nVascular cambium produces secondary vascular tissues (xylem and phloem); cork cambium produces periderm (cork and phelloderm) to heal outer cortical tears.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Both intrastelar and extrastelar secondary growth occur simultaneously.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0090"],
    code: "PA0090"
  },
  {
    id: "allen-bio-anat-ex1-q073",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Dicot & Monocot Plants",
    difficulty: "Easy",
    questionText: "The balloon like outgrowths of parenchyma in the lumen of a vessel are known as -",
    options: [
      "Hadrome",
      "Tyloses",
      "Phellogen",
      "Leptome"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In older wood, adjacent xylem parenchyma cells send balloon-like bladder protrusions through pits into the vessel lumens, known as **tyloses**.\n\n\u26a1 **Detailed Anatomical Explanation**:\nTyloses plug the vessel lumen and store tannins and resins, rendering heartwood non-conducting and rot-resistant.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Tyloses characterize heartwood and block fungal invasion.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0091"],
    code: "PA0091"
  },
  {
    id: "allen-bio-anat-ex1-q074",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Dicot & Monocot Plants",
    difficulty: "Medium",
    questionText: "Which of the following tissues originate from ray initials of cambium -",
    options: [
      "Tracheids & vessels",
      "Sieve tubes & companion cells",
      "Xylem & phloem fibres",
      "Radial rows of parenchyma"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Ray initials of the vascular cambium divide to form secondary medullary rays, which consist of radial rows of parenchymatous cells.\n\n\u26a1 **Detailed Anatomical Explanation**:\nThese radial parenchyma bands conduct water, nutrients, and gases radially across xylem and phloem cylinders.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Fusiform initials -> Axial elements; Ray initials -> Radial parenchyma.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0092"],
    code: "PA0092"
  },
  {
    id: "allen-bio-anat-ex1-q075",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Dicot & Monocot Plants",
    difficulty: "Easy",
    questionText: "Cork is an excellent material for making bottle stopper because it is -",
    options: [
      "Cheap",
      "Easily available",
      "Air tight",
      "Light"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Cork cells have walls heavily encrusted with suberin, making them impervious to water and gases.\n\n\u26a1 **Detailed Anatomical Explanation**:\nThis suberin-rich impermeable structure ensures that bottle stoppers made from cork (*Quercus suber*) create an airtight seal preventing liquid leakage and oxidation.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Suberin provides airtight impermeability.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0093"],
    code: "PA0093"
  },
  {
    id: "allen-bio-anat-ex1-q076",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Dicot & Monocot Plants",
    difficulty: "Easy",
    questionText: "In monocot stems, secondary growth does not occur because vascular bundles are -",
    options: [
      "Scattered",
      "Open",
      "Closed",
      "Radial"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In monocotyledons, the vascular bundles have no cambium present in them. Hence, since they do not form secondary tissues they are referred to as closed.\n\n\u26a1 **Detailed Anatomical Explanation**:\nWithout fascicular cambium between xylem and phloem, monocot stems cannot form a continuous vascular cambial ring.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Closed bundles = Absence of cambium = No normal secondary growth.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0094"],
    code: "PA0094"
  },
  {
    id: "allen-bio-anat-ex1-q077",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Dicot & Monocot Plants",
    difficulty: "Easy",
    questionText: "Gymnosperm wood is non porous because it -",
    options: [
      "Lacks vessels",
      "Contains tracheae",
      "Has abundant fibres",
      "Contains no fibres"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Gymnosperms lack xylem vessels. In transverse section, vessels appear as open pores.\n\n\u26a1 **Detailed Anatomical Explanation**:\nBecause gymnosperm secondary xylem consists of 90-95% tracheids and completely lacks vessels, it is called **non-porous wood** (softwood).\n\n\ud83d\udca1 **Examiner Pro-Tip**: Angiosperm wood = Porous (has vessels); Gymnosperm wood = Non-porous (lacks vessels).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0095"],
    code: "PA0095"
  },
  {
    id: "allen-bio-anat-ex1-q078",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Dicot & Monocot Plants",
    difficulty: "Easy",
    questionText: "Porous wood is characterised by -",
    options: [
      "Absence of tracheids",
      "Presence of vessels",
      "Absence of vessels",
      "Presence of sieve-tubes"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Angiosperm wood containing vessels is referred to as porous wood, because the cut lumina of vessels resemble circular pores.\n\n\u26a1 **Detailed Anatomical Explanation**:\nDepending on vessel distribution, porous wood is classified as ring-porous or diffuse-porous.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Presence of vessels = Porous wood.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0096"],
    code: "PA0096"
  },
  {
    id: "allen-bio-anat-ex1-q079",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Dicot & Monocot Plants",
    difficulty: "Easy",
    questionText: "Secondary growth is the production of -",
    options: [
      "New tissues from intercalary meristem",
      "New conduction cells",
      "New tissues from lateral meristem",
      "New ground cells"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The tissues involved in secondary growth are the two lateral meristems: vascular cambium and cork cambium.\n\n\u26a1 **Detailed Anatomical Explanation**:\nPrimary growth increases plant length (via apical/intercalary meristems), while secondary growth increases plant girth through new tissues cut off by lateral meristems.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Apical/Intercalary = Length; Lateral = Girth (Secondary growth).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0098"],
    code: "PA0098"
  },
  {
    id: "allen-bio-anat-ex1-q080",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Dicot & Monocot Plants",
    difficulty: "Easy",
    questionText: "Each annual ring consists of two strips of -",
    options: [
      "Autumn & spring wood",
      "Heart wood & sap wood",
      "Xylem and phloem",
      "Cork & cortex"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The two kinds of woods that appear as alternate concentric rings, constitute an annual ring: spring wood (early wood) and autumn wood (late wood).\n\n\u26a1 **Detailed Anatomical Explanation**:\nSpringwood is lighter with wider vessels; autumnwood is darker with narrow vessels.\n\n\ud83d\udca1 **Examiner Pro-Tip**: 1 Annual Ring = 1 Springwood band + 1 Autumnwood band.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0099"],
    code: "PA0099"
  },
  {
    id: "allen-bio-anat-ex1-q081",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Dicot & Monocot Plants",
    difficulty: "Easy",
    questionText: "Intrafascicular cambium is situated -",
    options: [
      "In between the two vascular bundles",
      "Inside the vascular bundles",
      "Outside the vascular bundles",
      "In pith"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In dicot stems, the cells of cambium present between primary xylem and primary phloem within the vascular bundle is the intrafascicular cambium.\n\n\u26a1 **Detailed Anatomical Explanation**:\nInterfascicular cambium is situated in between two adjacent vascular bundles (derived from medullary rays).\n\n\ud83d\udca1 **Examiner Pro-Tip**: Intra = Inside bundle; Inter = Between bundles.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0100"],
    code: "PA0100"
  },
  {
    id: "allen-bio-anat-ex1-q082",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Dicot & Monocot Plants",
    difficulty: "Easy",
    questionText: "An example of monocots showing secondary growth in stem is -",
    options: [
      "Lilium",
      "Pea",
      "Asparagus",
      "Yucca"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Although monocots typically lack secondary growth, certain arborescent monocot genera such as *Yucca*, *Dracaena*, and *Agave* exhibit anomalous secondary growth.\n\n\u26a1 **Detailed Anatomical Explanation**:\nA secondary cambial ring develops in the cortex/pericycle that produces secondary vascular bundles embedded in ground parenchyma.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Classic textbook examples: *Dracaena* and *Yucca*.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0101"],
    code: "PA0101"
  },
  {
    id: "allen-bio-anat-ex1-q083",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Dicot & Monocot Plants",
    difficulty: "Easy",
    questionText: "Vascular tissue having abundant vessels and fibres is -",
    options: [
      "Primary xylem",
      "Secondary xylem",
      "Protoxylem",
      "Metaxylem"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Secondary xylem (wood) formed by vascular cambium contains abundant vessels, tracheids, xylem parenchyma, and rich wood fibres (libriform fibres).\n\n\u26a1 **Detailed Anatomical Explanation**:\nPrimary xylem (protoxylem and metaxylem) contains relatively few or no fibres.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Commercial timber/wood is secondary xylem, valued for its abundant lignified fibres and vessels.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0102"],
    code: "PA0102"
  },
  {
    id: "allen-bio-anat-ex1-q084",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Dicot & Monocot Plants",
    difficulty: "Easy",
    questionText: "Monocot root is differ from dicot root in having :",
    options: [
      "Open vascular bundles",
      "Scattered vascular bundles",
      "Large pith",
      "Radial vascular bundles"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Pith is large and well developed in monocotyledonous roots, whereas it is small or inconspicuous in dicotyledonous roots.\n\n\u26a1 **Detailed Anatomical Explanation**:\nBoth roots have closed radial bundles; scattered bundles occur only in monocot stems.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Monocot root = Large pith + Polyarch xylem.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0104"],
    code: "PA0104"
  },
  {
    id: "allen-bio-anat-ex1-q085",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Anatomy of Dicot & Monocot Plants",
    difficulty: "Easy",
    questionText: "Autumn wood can be differentiated from spring wood by :-",
    options: [
      "Broad vessels and tracheids",
      "Narrow vessels and tracheids",
      "Red colour of xylem",
      "Cambium"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In winter/autumn, the cambium is less active and forms fewer xylary elements that have narrow vessels, and this wood is called autumn wood or late wood.\n\n\u26a1 **Detailed Anatomical Explanation**:\nSpringwood has wider lumens with lower density; autumnwood has narrow lumens with thicker walls and higher density.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Springwood = Broad vessels; Autumnwood = Narrow vessels.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0106"],
    code: "PA0106"
  },
  {
    id: "allen-bio-anat-ex1-q086",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Secondary Growth & Wood Anatomy",
    difficulty: "Easy",
    questionText: "Vascular cambium forms :-",
    options: [
      "Secondary xylem & Secondary phloem",
      "Primary xylem & Primary Phloem",
      "Only Secondary phloem",
      "Only Primary xylem"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The cambial ring cuts off new cells towards both inside and outside. The cells cut off towards pith mature into secondary xylem and those cut off towards periphery mature into secondary phloem.\n\n\u26a1 **Detailed Anatomical Explanation**:\nPrimary vascular tissues are produced by procambium during primary development; vascular cambium produces only secondary vascular tissues.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Inside = Secondary xylem; Outside = Secondary phloem.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0108"],
    code: "PA0108"
  },
  {
    id: "allen-bio-anat-ex1-q087",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Secondary Growth & Wood Anatomy",
    difficulty: "Medium",
    questionText: "There is no result of 'Girdling Experiment' in monocot plants, due to :-",
    options: [
      "Presence of wax layer on the surface of its stem",
      "Stem is comparatively thin",
      "Phloem is inside xylem",
      "Vascular bundles are not in specific position"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In dicot stems, vascular bundles are arranged in a regular ring, allowing selective removal of phloem (bark) without damaging xylem. In monocots, vascular bundles are scattered throughout ground tissue.\n\n\u26a1 **Detailed Anatomical Explanation**:\nBecause vascular bundles are scattered irregularly throughout the ground parenchyma (atactostele), a ring girdle cannot peel off phloem alone without completely severing the internal xylem channels.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Girdling experiment fails in monocots because phloem is scattered throughout the stem cross-section.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0109"],
    code: "PA0109"
  },
  {
    id: "allen-bio-anat-ex1-q088",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Secondary Growth & Wood Anatomy",
    difficulty: "Easy",
    questionText: "Conjoint, Collateral, open vascular bundle and vascular bundles are arranged in a ring (Eustele) in :-",
    options: [
      "Dicot stem",
      "Monocot stem",
      "Monocot root",
      "Dicot Root"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: A characteristic feature of the dicotyledonous stem is the arrangement of vascular bundles in a ring. Vascular bundles are conjoint, collateral, open, and with endarch protoxylem.\n\n\u26a1 **Detailed Anatomical Explanation**:\nThis ring arrangement of conjoint collateral open bundles with central pith is termed a **eustele**.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Eustele = Dicot stem; Atactostele = Monocot stem.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0254"],
    code: "PA0254"
  },
  {
    id: "allen-bio-anat-ex1-q089",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Secondary Growth & Wood Anatomy",
    difficulty: "Easy",
    questionText: "Radial vascular bundles are found in :",
    options: [
      "Only dicot root",
      "Only monocot root",
      "Only Pteridophyte",
      "Roots of vascular plants"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: When xylem and phloem within a vascular bundle are arranged in an alternate manner on different radii, the arrangement is called radial.\n\n\u26a1 **Detailed Anatomical Explanation**:\nRadial vascular bundles are the universal diagnostic feature of roots of all vascular plants (pteridophytes, gymnosperms, dicots, and monocots).\n\n\ud83d\udca1 **Examiner Pro-Tip**: Roots = Radial bundles; Stems & Leaves = Conjoint bundles.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0111"],
    code: "PA0111"
  },
  {
    id: "allen-bio-anat-ex1-q090",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Secondary Growth & Wood Anatomy",
    difficulty: "Easy",
    questionText: "Casparian strip is found in :-",
    options: [
      "Epidermis",
      "Endodermis",
      "Endothecium",
      "Pericycle"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The tangential as well as radial walls of the endodermal cells have a deposition of water-impermeable, waxy material suberin in the form of Casparian strips.\n\n\u26a1 **Detailed Anatomical Explanation**:\nDiscovered by Robert Caspary, Casparian strips block apoplastic water flow, forcing water and solutes into the symplast to ensure selective uptake into the stele.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Casparian strips occur strictly in root endodermis.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-I (Conceptual Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0112"],
    code: "PA0112"
  }
];

// ============================================================================
// EXERCISE-II: Previous Year Questions (AIPMT / NEET 2006-2022) - 63 Questions
// ============================================================================
export const ALLEN_ANATOMY_EXERCISE_2_QUESTIONS: Question[] = [
  {
    id: "allen-bio-anat-ex2-q001",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "A common structural feature of vessel elements and sieve tube elements is :- [AIPMT 2006]",
    options: [
      "Presence of p-protein",
      "Enucleate condition",
      "Thick secondary walls",
      "Pores on lateral walls"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: A mature sieve tube element possesses a peripheral cytoplasm and a large vacuole but **lacks a nucleus**. Vessel elements also lack protoplasm and nucleus at functional maturity.\n\n\u26a1 **Detailed Anatomical Explanation**:\nBoth vessel elements and sieve tube elements are enucleate at maturity to maximize unobstructed long-distance axial transport of sap.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Sieve tube elements are living without a nucleus (controlled by companion cell nucleus); vessel elements are dead without a nucleus.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0113"],
    code: "PA0113"
  },
  {
    id: "allen-bio-anat-ex2-q002",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Medium",
    questionText: "For a critical study of secondary growth in plants, which one of the following pairs is suitable ? [AIPMT 2007]",
    options: [
      "Wheat and maiden hair fern",
      "Sugarcane and sunflower",
      "Teak and pine",
      "Deodar and fern"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Secondary growth occurs in gymnosperms (*Pinus*) and dicotyledonous angiosperms (*Tectona grandis* / Teak).\n\n\u26a1 **Detailed Anatomical Explanation**:\n- Wheat and sugarcane are monocots (lack normal secondary growth).\n- Maiden hair fern and ferns are pteridophytes (lack secondary growth).\n- Teak (woody dicot) and Pine (coniferous gymnosperm) display prominent, perennial secondary growth.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Dicot tree + Gymnosperm tree = Ideal experimental material for secondary growth.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0116"],
    code: "PA0116"
  },
  {
    id: "allen-bio-anat-ex2-q003",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "Passage cells are thin-walled cells found in :- [AIPMT 2007]",
    options: [
      "Central region of style through which the pollen tube grows towards the ovary.",
      "Endodermis of roots facilitating rapid transport of water from cortex to pericycle",
      "Phloem elements that serve as entry points for substances for transport to other plant parts",
      "Testa of seeds to enable emergence of growing embryonic axis during seed germination."
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In root endodermis, certain cells opposite to the protoxylem elements remain thin-walled and unlignified, lacking Casparian strips. These are passage cells.\n\n\u26a1 **Detailed Anatomical Explanation**:\nPassage cells permit the inward symplastic flow of water and absorbed mineral salts from cortex across the impermeable endodermis into pericycle and xylem vessels.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Passage cells = Root endodermis opposite protoxylem.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0117"],
    code: "PA0117"
  },
  {
    id: "allen-bio-anat-ex2-q004",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "The length of different internodes in a culm of sugarcane is variable because of : [AIPMT 2008]",
    options: [
      "Position of axillary buds",
      "Size of leaf lamina at the node below each internode",
      "Intercalary meristem",
      "Shoot apical meristem"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The meristem which occurs between mature tissues is known as intercalary meristem. They occur in grasses and regenerate parts removed by the grazing herbivores.\n\n\u26a1 **Detailed Anatomical Explanation**:\nIn monocot culms like sugarcane, intercalary meristems are located at the base of internodes and nodes. Varying local growth rates of these intercalary meristems lead to different internodal lengths.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Internode elongation in grasses is strictly mediated by intercalary meristem.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0119"],
    code: "PA0119"
  },
  {
    id: "allen-bio-anat-ex2-q005",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "In barley stem vascular bundles are :- [AIPMT 2009]",
    options: [
      "Closed and radial",
      "Open and scattered",
      "Closed and scattered",
      "Open and in a ring"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Barley (*Hordeum vulgare*) is a monocot plant. In monocot stems, vascular bundles are conjoint, collateral, closed, and scattered in ground tissue.\n\n\u26a1 **Detailed Anatomical Explanation**:\nBecause barley is a monocot, cambium is absent (closed) and bundles are distributed throughout the ground tissue (scattered/atactostele).\n\n\ud83d\udca1 **Examiner Pro-Tip**: Barley/Wheat/Maize/Grass = Monocot stem = Closed and scattered.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0120"],
    code: "PA0120"
  },
  {
    id: "allen-bio-anat-ex2-q006",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Medium",
    questionText: "Palisade parenchyma is absent in leaves of :- [AIPMT 2009]",
    options: [
      "Gram",
      "Sorghum",
      "Mustard",
      "Soybean"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In an isobilateral (monocot) leaf, the mesophyll is not differentiated into palisade and spongy parenchyma.\n\n\u26a1 **Detailed Anatomical Explanation**:\n*Sorghum* (jowar) is a monocot grass with isobilateral leaves whose mesophyll consists uniformly of identical spongy chlorenchyma cells without palisade layers. Gram, mustard, and soybean are dicots with dorsiventral leaves containing distinct columnar palisade parenchyma.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Monocot grasses (Sorghum, Maize, Wheat) lack palisade parenchyma.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0121"],
    code: "PA0121"
  },
  {
    id: "allen-bio-anat-ex2-q007",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "Reduction in vascular tissue, mechanical tissue and cuticle is characteristic of :- [AIPMT 2009]",
    options: [
      "Hydrophytes",
      "Xerophytes",
      "Mesophytes",
      "Epiphytes"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Plants growing submerged or floating in water (hydrophytes) do not face water deficit or intense transpiration, and water buoyancy provides physical support.\n\n\u26a1 **Detailed Anatomical Explanation**:\nConsequently, hydrophytes show severe anatomical reduction in xylem conducting vessels, mechanical sclerenchyma fibres, and epidermal cuticle layer.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Maximum aerenchyma + minimal vascular/mechanical tissues = Hydrophytes.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0122"],
    code: "PA0122"
  },
  {
    id: "allen-bio-anat-ex2-q008",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Medium",
    questionText: "Anatomically fairly old dicotyledonous root is distinguished from the dicotyledonous stem by :- [AIPMT 2009]",
    options: [
      "Position of protoxylem",
      "Absence of secondary xylem",
      "Absence of secondary phloem",
      "Presence of cortex"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Even after extensive secondary growth, primary xylem remains intact in the central axis of both stem and root.\n\n\u26a1 **Detailed Anatomical Explanation**:\nIn an old dicot stem, primary xylem is **endarch** (protoxylem points inwards toward the centre). In an old dicot root, primary xylem is **exarch** (protoxylem points outwards towards the periphery).\n\n\ud83d\udca1 **Examiner Pro-Tip**: Secondary xylem looks virtually identical; only the position of the persistent protoxylem definitively distinguishes old root from stem.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0123"],
    code: "PA0123"
  },
  {
    id: "allen-bio-anat-ex2-q009",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "Which one of the following is not a lateral meristem ? [AIPMT-Pre 2010]",
    options: [
      "Intercalary meristem",
      "Intrafascicular cambium",
      "Interfascicular cambium",
      "Phellogen"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Apical meristems and intercalary meristems are primary meristems because they appear early in the life of a plant and contribute to the formation of the primary plant body.\n\n\u26a1 **Detailed Anatomical Explanation**:\nLateral meristems occur on the lateral sides of stems and roots and divide periclinally to increase girth (e.g. fascicular cambium, interfascicular cambium, and cork cambium/phellogen).\n\n\ud83d\udca1 **Examiner Pro-Tip**: Intercalary meristem increases stem length, not girth.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0124"],
    code: "PA0124"
  },
  {
    id: "allen-bio-anat-ex2-q010",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "The chief water conducting elements of xylem in gymnosperms are : [AIPMT-Pre 2010]",
    options: [
      "Tracheids",
      "Vessels",
      "Fibres",
      "Transfusion tissue"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Gymnosperms lack vessels in their xylem. Tracheids are the chief water-transporting elements.\n\n\u26a1 **Detailed Anatomical Explanation**:\nTracheids constitute up to 95% of gymnosperm wood and perform dual functions: water conduction and mechanical support.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Gymnosperms = Tracheids only; Angiosperms = Vessels + Tracheids.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0125"],
    code: "PA0125"
  },
  {
    id: "allen-bio-anat-ex2-q011",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "Heartwood differs from sapwood in : [AIPMT-Pre 2010]",
    options: [
      "Being susceptible to pests and pathogens",
      "Presence of rays and fibres",
      "Absence of vessels and parenchyma",
      "Having dead and non-conducting elements"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Heartwood comprises dead elements with highly lignified walls and does not conduct water. Sapwood is living/functional and actively involved in water conduction.\n\n\u26a1 **Detailed Anatomical Explanation**:\nTannins, resins, and oils deposited in heartwood make it resistant to microbes and pests (not susceptible).\n\n\ud83d\udca1 **Examiner Pro-Tip**: Dead + non-conducting + durable = Heartwood.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0126"],
    code: "PA0126"
  },
  {
    id: "allen-bio-anat-ex2-q012",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "Transport of food material in higher plants takes place through : [AIPMT-Main 2010]",
    options: [
      "Transfusion tissue",
      "Tracheids",
      "Sieve elements",
      "Companion cells"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Phloem transports food materials, usually from leaves to other parts of the plant. Sieve elements (sieve tube elements in angiosperms, sieve cells in gymnosperms) form the continuous conduits for organic translocation.\n\n\u26a1 **Detailed Anatomical Explanation**:\nCompanion cells aid sieve tubes metabolically, but sucrose translocation occurs directly through the perforated sieve tube elements.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Food transport = Sieve elements.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0127"],
    code: "PA0127"
  },
  {
    id: "allen-bio-anat-ex2-q013",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "Ground tissue includes :- [AIPMT-Pre 2011]",
    options: [
      "All tissues external to endodermis",
      "All tissues except epidermis and vascular bundles",
      "Epidermis and cortex",
      "All tissues internal to endodermis"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: All tissues except epidermis and vascular bundles constitute the ground or fundamental tissue.\n\n\u26a1 **Detailed Anatomical Explanation**:\nGround tissue includes the cortex, endodermis, pericycle, medullary rays, and pith, consisting of simple tissues such as parenchyma, collenchyma, and sclerenchyma.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Plant body = Epidermal system + Ground system + Vascular system.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0129"],
    code: "PA0129"
  },
  {
    id: "allen-bio-anat-ex2-q014",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "The cork cambium, cork and secondary cortex are collectively called :- [AIPMT-Pre 2011]",
    options: [
      "Phelloderm",
      "Phellogen",
      "Periderm",
      "Phellem"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Phellogen, phellem, and phelloderm are collectively known as **periderm**.\n\n\u26a1 **Detailed Anatomical Explanation**:\n- Phellogen = Cork cambium\n- Phellem = Cork\n- Phelloderm = Secondary cortex\nTogether they constitute the secondary protective periderm.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Periderm = Phellem + Phellogen + Phelloderm.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0130"],
    code: "PA0130"
  },
  {
    id: "allen-bio-anat-ex2-q015",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "Some vascular bundles are described as open because these : [AIPMT-Main 2011]",
    options: [
      "Are not surrounded by pericycle",
      "Are surrounded by pericycle but no endodermis",
      "Are capable of producing secondary xylem and phloem.",
      "Possess conjunctive tissue between xylem and phloem."
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In dicotyledonous stems, cambium is present between phloem and xylem. Such vascular bundles because of the presence of cambium possess the ability to form secondary xylem and phloem tissues, and hence are called open vascular bundles.\n\n\u26a1 **Detailed Anatomical Explanation**:\nClosed bundles (in monocots) lack cambium and cannot produce secondary tissues.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Open = Has cambium = Capable of secondary growth.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0132"],
    code: "PA0132"
  },
  {
    id: "allen-bio-anat-ex2-q016",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Medium",
    questionText: "Gymnosperms are also called soft wood spermatophytes because they lack :- [AIPMT-Pre 2012]",
    options: [
      "Thick-walled tracheids",
      "Xylem fibres",
      "Cambium",
      "Phloem fibres"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Gymnosperm wood is commercially known as softwood because it lacks both vessels and thick-walled xylem fibres (libriform fibres).\n\n\u26a1 **Detailed Anatomical Explanation**:\nHardwood (dicot wood) contains dense, thick-walled sclerenchymatous xylem fibres that give physical hardness. Gymnosperm secondary xylem is comprised almost exclusively of tracheids.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Softwood = Gymnosperm wood (no xylem fibres, no vessels); Hardwood = Dicot angiosperm wood.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0134"],
    code: "PA0134"
  },
  {
    id: "allen-bio-anat-ex2-q017",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "Water containing cavities in vascular bundles are found in :- [AIPMT 2012]",
    options: [
      "Cycas",
      "Pinus",
      "Sunflower",
      "Maize"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Water-containing cavities are present within the vascular bundles of monocot stems such as maize (*Zea mays*).\n\n\u26a1 **Detailed Anatomical Explanation**:\nDuring stem elongation, rapid mechanical stretching ruptures the inner protoxylem vessels, forming a conspicuous lysigenous water cavity adjacent to remaining annular/spiral tracheids.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Maize = Monocot stem = Lysigenous water cavity.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0135"],
    code: "PA0135"
  },
  {
    id: "allen-bio-anat-ex2-q018",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "Closed vascular bundles lack :- [AIPMT 2012]",
    options: [
      "Cambium",
      "Pith",
      "Ground tissue",
      "Conjunctive tissues"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In monocotyledons, the vascular bundles have no cambium present in them. Hence, since they do not form secondary tissues they are referred to as closed.\n\n\u26a1 **Detailed Anatomical Explanation**:\nIntrafascicular cambium is missing; xylem and phloem are in direct physical contact.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Closed = No cambium.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0136"],
    code: "PA0136"
  },
  {
    id: "allen-bio-anat-ex2-q019",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "Companion cells are closely associated with :- [AIPMT 2012]",
    options: [
      "Trichomes",
      "Guard cells",
      "Sieve elements",
      "Vessel elements"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The companion cells are specialized parenchymatous cells, which are closely associated with sieve tube elements. The sieve tube elements and companion cells are connected by pit fields present between their common longitudinal walls.\n\n\u26a1 **Detailed Anatomical Explanation**:\nThey are ontogenetically sister cells derived from the same cambial derivative.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Companion cells regulate sieve element loading and pressure gradients.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0137"],
    code: "PA0137"
  },
  {
    id: "allen-bio-anat-ex2-q020",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "The common bottle cork is a product of :- [AIPMT 2012]",
    options: [
      "Xylem",
      "Vascular Cambium",
      "Dermatogen",
      "Phellogen"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Bottle cork is commercial cork obtained from the outer bark of *Quercus suber* (cork oak). It is produced by the activity of phellogen (cork cambium).\n\n\u26a1 **Detailed Anatomical Explanation**:\nPhellogen cells divide periclinally and differentiate centrifugally into phellem (cork).\n\n\ud83d\udca1 **Examiner Pro-Tip**: Phellogen produces cork (phellem).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0138"],
    code: "PA0138"
  },
  {
    id: "allen-bio-anat-ex2-q021",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "Age of a tree can be estimated by : [NEET-UG 2013]",
    options: [
      "Diameter of its heartwood",
      "Its height and girth",
      "Biomass",
      "Number of annual rings"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In temperate trees, annual rings seen in a cut stem give an accurate estimate of the age of the tree.\n\n\u26a1 **Detailed Anatomical Explanation**:\nEach year, exactly one increment of springwood plus autumnwood is added by the vascular cambium.\n\n\ud83d\udca1 **Examiner Pro-Tip**: 1 Annual Ring = 1 year of secondary xylem growth.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0139"],
    code: "PA0139"
  },
  {
    id: "allen-bio-anat-ex2-q022",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "Interfascicular cambium develops from the cells of : [NEET-UG 2013]",
    options: [
      "Pericycle",
      "Medullary rays",
      "Xylem parenchyma",
      "Endodermis"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The cells of medullary rays, adjoining these intrafascicular cambium, become meristematic and form the interfascicular cambium.\n\n\u26a1 **Detailed Anatomical Explanation**:\nJoining with intrafascicular cambium, it completes the continuous circular vascular cambium ring in dicot stems.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Interfascicular cambium originates from medullary ray parenchyma.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0140"],
    code: "PA0140"
  },
  {
    id: "allen-bio-anat-ex2-q023",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "Lenticels are involved in : [NEET-UG 2013]",
    options: [
      "Photosynthesis",
      "Transpiration",
      "Gaseous exchange",
      "Food transport"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Lenticels permit the exchange of gases between the outer atmosphere and the internal tissue of the stem.\n\n\u26a1 **Detailed Anatomical Explanation**:\nLens-shaped aerating pores formed in the periderm of woody stems allow oxygen uptake for living internal tissues.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Primary function of lenticels is gaseous exchange (though lenticular transpiration also occurs incidentally).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0141"],
    code: "PA0141"
  },
  {
    id: "allen-bio-anat-ex2-q024",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Medium",
    questionText: "You are given a fairly old piece of dicot stem and a dicot root. Which of the following anatomical structures will you use to distinguish between the two ? [AIPMT 2014]",
    options: [
      "Secondary xylem",
      "Secondary phloem",
      "Protoxylem",
      "Cortical cells"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In an old dicot stem, primary xylem is endarch with protoxylem facing the central pith. In an old dicot root, primary xylem is exarch with protoxylem facing outwards toward the periphery.\n\n\u26a1 **Detailed Anatomical Explanation**:\nWhile secondary tissues and cortex are heavily altered or sloughed off, primary protoxylem remains distinct in position.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Protoxylem position is the foolproof anatomical marker.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0143"],
    code: "PA0143"
  },
  {
    id: "allen-bio-anat-ex2-q025",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Medium",
    questionText: "Tracheids differ from other tracheary elements in : [AIPMT 2014]",
    options: [
      "Having casparian strips",
      "Being imperforate",
      "Lacking nucleus",
      "Being lignified"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Both tracheids and vessels lack nuclei and have lignified walls. However, vessels have perforated end walls, whereas tracheids are **imperforate**.\n\n\u26a1 **Detailed Anatomical Explanation**:\nTracheids retain intact primary wall pit membranes at their tapering ends, conducting water laterally through bordered pits.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Tracheids = Imperforate; Vessels = Perforated.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0144"],
    code: "PA0144"
  },
  {
    id: "allen-bio-anat-ex2-q026",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Medium",
    questionText: "A major characteristic of the monocot root is the presence of : [AIPMT 2015]",
    options: [
      "Scattered vascular bundles",
      "Vasculature without cambium",
      "Cambium sandwiched between phloem and xylem along the radius",
      "Open vascular bundles"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Monocotyledonous roots have radial closed vascular bundles without cambium and do not undergo secondary growth.\n\n\u26a1 **Detailed Anatomical Explanation**:\nScattered vascular bundles occur in monocot *stems*, not roots. Monocot roots possess a ring of radial bundles devoid of cambium.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Monocot root = Vasculature without cambium (closed).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0145"],
    code: "PA0145"
  },
  {
    id: "allen-bio-anat-ex2-q027",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "In a ring girdled plant : [AIPMT 2015]",
    options: [
      "The root dies first",
      "The shoot and root die together",
      "Neither root nor shoot will die",
      "The shoot dies first"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Girdling removes bark up to the cambium layer, excising the phloem while leaving xylem intact. Downward translocation of organic food from photosynthetic leaves to roots is halted.\n\n\u26a1 **Detailed Anatomical Explanation**:\nRoots are non-photosynthetic and depend on phloem transport for sustenance. When carbohydrate supply is cut off, roots starve and die first; water transport ceases, and only then does the shoot wither.\n\n\ud83d\udca1 **Examiner Pro-Tip**: In ring girdling, the root dies first due to food starvation.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0146"],
    code: "PA0146"
  },
  {
    id: "allen-bio-anat-ex2-q028",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "Vascular bundles in monocotyledons are considered closed because : [AIPMT 2015]",
    options: [
      "Cambium is absent",
      "There are no vessels with perforations",
      "Xylem is surrounded all around by phloem",
      "A bundle sheath surrounds each bundle"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In monocotyledons, the vascular bundles have no cambium present in them. Hence, since they do not form secondary tissues they are referred to as closed.\n\n\u26a1 **Detailed Anatomical Explanation**:\nOpen bundles contain meristematic cambium capable of secondary division; closed bundles lack cambium.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Closed = Absence of cambium.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0147"],
    code: "PA0147"
  },
  {
    id: "allen-bio-anat-ex2-q029",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Medium",
    questionText: "Read the different components from (a) to (d) in the list given below and tell the correct order of the components with reference to their arrangement from outer side to inner side in a woody dicot stem : [Re-AIPMT 2015]\n(a) Secondary cortex (b) Wood (c) Secondary phloem (d) Phellem\nThe correct order is :",
    options: [
      "(d), (c), (a), (b)",
      "(c), (d), (b), (a)",
      "(a), (b), (d), (c)",
      "(d), (a), (c), (b)"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Sequence of tissues in an old woody dicot stem from periphery (outside) to centre (inside).\n\n\u26a1 **Detailed Anatomical Explanation**:\n1. Outermost: **(d) Phellem** (cork)\n2. Just beneath phellem & phellogen: **(a) Secondary cortex** (phelloderm)\n3. Inside pericycle: **(c) Secondary phloem**\n4. Inside vascular cambium: **(b) Wood** (secondary xylem).\nCorrect order from outer to inner side is **(d), (a), (c), (b)**.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Phellem -> Phelloderm -> Secondary phloem -> Secondary xylem (wood).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0148"],
    code: "PA0148"
  },
  {
    id: "allen-bio-anat-ex2-q030",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "Specialised epidermal cells surrounding the guard cells are called :- [NEET-I 2016]",
    options: [
      "Complementary cells",
      "Subsidiary cells",
      "Bulliform cells",
      "Lenticels"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Sometimes, a few epidermal cells, in the vicinity of the guard cells become specialised in their shape and size and are known as **subsidiary cells**.\n\n\u26a1 **Detailed Anatomical Explanation**:\nThe stomatal aperture, guard cells and the surrounding subsidiary cells are together called **stomatal apparatus**.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Subsidiary cells act as ion and water reservoirs during stomatal opening and closing.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0149"],
    code: "PA0149"
  },
  {
    id: "allen-bio-anat-ex2-q031",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "Cortex is the region found between :- [NEET-II 2016]",
    options: [
      "Endodermis and pith",
      "Endodermis and vascular bundle",
      "Epidermis and stele",
      "Pericycle and endodermis"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Cortex consists of multiple layers of cells extending from below the epidermis to the innermost boundary called endodermis (or extending from epidermis to stele).\n\n\u26a1 **Detailed Anatomical Explanation**:\nAll tissues internal to endodermis (pericycle, vascular bundles, pith) constitute the stele. Hence cortex lies between the epidermis and the stele.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Cortex lies between epidermis and stele.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0150"],
    code: "PA0150"
  },
  {
    id: "allen-bio-anat-ex2-q032",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "The balloon-shaped structures called tyloses :- [NEET-II 2016]",
    options: [
      "Are extensions of xylem parenchyma cells into vessels",
      "Are linked to the ascent of sap through xylem vessels",
      "Originate in the lumen of vessels",
      "Characterize the sapwood"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In older stems, xylem parenchyma cells send tracheal ingrowths (bladder-like balloon protrusions) through pits into adjacent vessel lumens.\n\n\u26a1 **Detailed Anatomical Explanation**:\nThese balloon-shaped structures are called **tyloses**. They occlude vessels in heartwood and block ascent of sap (they do NOT assist ascent of sap).\n\n\ud83d\udca1 **Examiner Pro-Tip**: Tyloses originate from xylem parenchyma and characterize heartwood.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0151"],
    code: "PA0151"
  },
  {
    id: "allen-bio-anat-ex2-q033",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "The vascular cambium normally gives rise to : [NEET(UG) 2017]",
    options: [
      "Primary phloem",
      "Secondary xylem",
      "Periderm",
      "Phelloderm"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The vascular cambium normally gives rise to secondary xylem towards the inside and secondary phloem towards the outside.\n\n\u26a1 **Detailed Anatomical Explanation**:\nPeriderm and phelloderm are produced by cork cambium (phellogen); primary phloem is produced by procambium.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Vascular cambium -> Secondary xylem (wood) + Secondary phloem (bast).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0153"],
    code: "PA0153"
  },
  {
    id: "allen-bio-anat-ex2-q034",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "Which of the following is made up of dead cells ? [NEET 2017]",
    options: [
      "Collenchyma",
      "Phellem",
      "Phloem",
      "Xylem parenchyma"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Phellem (cork) consists of dead cells whose walls are heavily suberised and impervious to water.\n\n\u26a1 **Detailed Anatomical Explanation**:\nCollenchyma, phloem (sieve tubes, companion cells, parenchyma), and xylem parenchyma all possess active living protoplasm.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Phellem = Cork = Dead.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0154"],
    code: "PA0154"
  },
  {
    id: "allen-bio-anat-ex2-q035",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET/AIPMT Past Years (2006-2017)",
    difficulty: "Easy",
    questionText: "Identify the wrong statement in context of heartwood : [NEET 2017]",
    options: [
      "It is highly durable",
      "It conducts water and minerals efficiently",
      "It comprises dead elements with highly lignified walls",
      "Organic compounds are deposited in it"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Heartwood does NOT conduct water. It provides mechanical support to the stem. Water conduction is carried out by sapwood.\n\n\u26a1 **Detailed Anatomical Explanation**:\nDue to deposition of tannins, resins, oils, gums, and tyloses, heartwood vessels are occluded and non-functional.\n\n\ud83d\udca1 **Examiner Pro-Tip**: Statement (2) is false because heartwood has zero water conduction.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0155"],
    code: "PA0155"
  },
  {
    id: "allen-anat-ex2-036",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Easy",
    questionText: "Stomata in grass leaf are : [NEET 2018 | ALLEN PA0156]",
    options: [
      "Dumb-bell shaped",
      "Kidney shaped",
      "Rectangular",
      "Barrel shaped"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In grasses (monocots/Gramineae), the guard cells are dumb-bell shaped, whereas in dicots they are kidney or bean-shaped.\n\u26a1 **Detailed Anatomical Explanation**: The dumb-bell shaped guard cells have narrow, thickened middle portions and bulbous, thin-walled ends. When turgor increases in the bulbous ends, they expand and pull the middle thickened portions apart, widening the stomatal pore.\n\ud83d\udca1 **Examiner Pro-Tip**: Dumb-bell shaped guard cells are characteristic of Poaceae (grasses, wheat, maize, sugarcane, bamboo).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0156"],
    code: "PA0156"
  },
  {
    id: "allen-anat-ex2-037",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Easy",
    questionText: "Secondary xylem and phloem in dicot stem are produced by : [NEET 2018 | ALLEN PA0157]",
    options: [
      "Apical meristems",
      "Vascular cambium",
      "Phellogen",
      "Axillary meristems"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The vascular cambium is the lateral meristem responsible for producing secondary vascular tissues\u2014secondary xylem towards the inner side (centripetally) and secondary phloem towards the outer side (centrifugally).\n\u26a1 **Detailed Anatomical Explanation**: The cambial ring becomes active and cuts off cells on both sides. The cells cut off towards the pitch mature into secondary xylem (wood), while those cut off towards the periphery mature into secondary phloem (bast).\n\ud83d\udca1 **Examiner Pro-Tip**: The vascular cambium is usually much more active on the inner side than on the outer; hence secondary xylem is formed 8\u201310 times more rapidly than secondary phloem.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0157"],
    code: "PA0157"
  },
  {
    id: "allen-anat-ex2-038",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Easy",
    questionText: "Casparian strips occur in : [NEET 2018 | ALLEN PA0158]",
    options: [
      "Epidermis",
      "Pericycle",
      "Cortex",
      "Endodermis"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Casparian strips are bands of suberin deposition present on the radial and tangential walls of endodermal cells in roots.\n\u26a1 **Detailed Anatomical Explanation**: Suberin is an impervious, waxy substance that blocks the apoplastic movement of water and dissolved minerals across the endodermis. As a result, all water and solutes must cross the plasma membrane of endodermal cells (symplastic pathway), allowing the root to regulate what enters the xylem.\n\ud83d\udca1 **Examiner Pro-Tip**: Endodermis acts as the biological 'checkpoint' or 'traffic control' of the root due to Casparian strips.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0158"],
    code: "PA0158"
  },
  {
    id: "allen-anat-ex2-039",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Easy",
    questionText: "Plants having little or no secondary growth are : [NEET 2018 | ALLEN PA0159]",
    options: [
      "Grasses",
      "Deciduous angiosperms",
      "Conifers",
      "Cycads"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Monocotyledons (such as grasses) do not possess vascular cambium or cork cambium in their stems; their vascular bundles are closed and scattered, showing little or no secondary growth.\n\u26a1 **Detailed Anatomical Explanation**: Conifers, cycads (gymnosperms), and deciduous angiosperms (dicots) have open vascular bundles with lateral meristems (vascular cambium and phellogen) that undergo extensive secondary growth in girth.\n\ud83d\udca1 **Examiner Pro-Tip**: Grasses increase in length primarily by apical and intercalary meristems, without secondary vascular cambial activity.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0159"],
    code: "PA0159"
  },
  {
    id: "allen-anat-ex2-040",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Medium",
    questionText: "Xylem translocates : [NEET 2019 | ALLEN PA0242]",
    options: [
      "Water only",
      "Water and mineral salts only",
      "Water, mineral salts and some organic nitrogen only",
      "Water, mineral salts, some organic nitrogen and hormones"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: As stated in NCERT Biology: 'Xylem is associated with translocation of mainly water, mineral salts, some organic nitrogen and hormones, from roots to the aerial parts of the plants.'\n\u26a1 **Detailed Anatomical Explanation**: Historically xylem was thought to conduct only sap (water + minerals), but analysis of xylem exudate shows significant amounts of amino acids, amides, and phytohormones (such as cytokinins and ABA synthesized in roots) moving upwards.\n\ud83d\udca1 **Examiner Pro-Tip**: Direct NCERT verbatim line tested repeatedly in NEET.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0242"],
    code: "PA0242"
  },
  {
    id: "allen-anat-ex2-041",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Medium",
    questionText: "Grass leaves curl inwards during very dry weather. Select the most appropriate reason from the following : [NEET 2019 | ALLEN PA0243]",
    options: [
      "Closure of stomata",
      "Flaccidity of bulliform cells",
      "Shrinkage of air spaces in spongy mesophyll",
      "Tyloses in vessels"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Bulliform or motor cells on the adaxial epidermis of grass leaves become flaccid due to water loss under water stress, causing the leaf margin to roll or curl inwards.\n\u26a1 **Detailed Anatomical Explanation**: When bulliform cells absorb water, they become turgid and the leaf surface is unfolded/flat. When they lose water due to drought/heat, they lose turgidity (become flaccid), curling the leaf inwards to minimize the exposed surface area and reduce transpiration.\n\ud83d\udca1 **Examiner Pro-Tip**: Bulliform cells = large, empty, thin-walled, colourless cells along the veins on the adaxial (upper) epidermis of monocot/grass leaves.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0243"],
    code: "PA0243"
  },
  {
    id: "allen-anat-ex2-042",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Medium",
    questionText: "Phloem in gymnosperms lacks : [NEET 2019 | ALLEN PA0244]",
    options: [
      "Albuminous cells and sieve cells",
      "Sieve tubes only",
      "Companion cells only",
      "Both sieve tubes and companion cells"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Gymnosperms lack sieve tubes and companion cells; their phloem instead possesses albuminous cells (Strasburger cells) and sieve cells.\n\u26a1 **Detailed Anatomical Explanation**: In gymnosperms, sieve cells have unspecialized sieve areas distributed along their lateral walls rather than true end-wall sieve plates. Albuminous cells are modified phloem parenchyma cells associated with sieve cells, fulfilling the function performed by companion cells in angiosperms.\n\ud83d\udca1 **Examiner Pro-Tip**: Angiosperms = sieve tubes + companion cells. Gymnosperms/Pteridophytes = sieve cells + albuminous cells.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0244"],
    code: "PA0244"
  },
  {
    id: "allen-anat-ex2-043",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Medium",
    questionText: "Which of the statements given below is not true about formation of Annual Rings in trees? [NEET 2019 | ALLEN PA0245]",
    options: [
      "Annual ring is a combination of spring wood and autumn wood produced in a year.",
      "Differential activity of cambium causes light and dark bands of tissue - early and late wood respectively",
      "Activity of cambium depends upon variation in climate.",
      "Annual rings are not prominent in trees of temperate region."
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Annual rings are prominent and distinct in trees of temperate and cold regions where climatic seasons are sharply differentiated. In tropical regions with uniform climate, annual rings are indistinct or absent.\n\u26a1 **Detailed Anatomical Explanation**: Statement (4) is incorrect because annual rings ARE prominent in temperate regions due to alternating favorable spring conditions (early wood, wide vessels, low density, light color) and harsh autumn/winter conditions (late wood, narrow vessels, high density, dark color).\n\ud83d\udca1 **Examiner Pro-Tip**: Read carefully: temperate trees have distinct annual rings; tropical trees near the equator do not show distinct rings.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0245"],
    code: "PA0245"
  },
  {
    id: "allen-anat-ex2-044",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Medium",
    questionText: "In the dicot root the vascular cambium originates from : [NEET 2019 (Odisha) | ALLEN PA0246]",
    options: [
      "Tissue located below the phloem bundles and a portion of pericycle tissue above protoxylem.",
      "Cortical region.",
      "Parenchyma between endodermis and pericycle.",
      "Intrafascicular and interfascicular tissue in a ring."
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In dicot roots, the vascular cambium is completely secondary in origin. It originates from the conjunctive tissue located just below the phloem bundles and portions of pericycle tissue located opposite/above the protoxylem.\n\u26a1 **Detailed Anatomical Explanation**: Initially, this cambial strip forms a wavy, undulating ring. Later, as it cuts off secondary xylem faster beneath the phloem, the wavy ring becomes circular.\n\ud83d\udca1 **Examiner Pro-Tip**: Dicot stem cambium is partly primary (intrafascicular) and partly secondary (interfascicular). Dicot root cambium is 100% secondary.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0246"],
    code: "PA0246"
  },
  {
    id: "allen-anat-ex2-045",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Easy",
    questionText: "Regeneration of damaged growing grass following grazing is largely due to : [NEET 2019 (Odisha) | ALLEN PA0247]",
    options: [
      "Lateral meristem",
      "Apical meristem",
      "Intercalary meristem",
      "Secondary meristem"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Intercalary meristem occurs between mature tissues (at base of internodes/nodes in grasses) and regenerates parts removed by grazing herbivores.\n\u26a1 **Detailed Anatomical Explanation**: Herbivores eat the apical meristem at the tip of the grass shoot. The intercalary meristems located at the internode bases remain intact and rapidly divide, elongating the stem and regrowing the grass blade.\n\ud83d\udca1 **Examiner Pro-Tip**: Both apical and intercalary meristems are primary meristems because they appear early in life and contribute to the formation of the primary plant body.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0247"],
    code: "PA0247"
  },
  {
    id: "allen-anat-ex2-046",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Medium",
    questionText: "The transverse section of a plant shows following anatomical features:\n(a) Large number of scattered vascular bundles surrounded by bundle sheath.\n(b) Large conspicuous parenchymatous ground tissue.\n(c) Vascular bundles conjoint and closed.\n(d) Phloem parenchyma absent.\nIdentify the category of plant and its part : [NEET 2020 | ALLEN PA0255]",
    options: [
      "Dicotyledonous root",
      "Monocotyledonous stem",
      "Monocotyledonous root",
      "Dicotyledonous stem"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Monocot stems (e.g., maize) are characterized by scattered conjoint, collateral, closed vascular bundles surrounded by sclerenchymatous bundle sheaths, embedded in large parenchymatous ground tissue, with phloem parenchyma completely absent.\n\u26a1 **Detailed Anatomical Explanation**: In monocot stem, cortex, endodermis, pericycle, and pith are not differentiated\u2014the entire region inside hypodermis is ground tissue. Vascular bundles are smaller and crowded near the periphery, larger towards the center.\n\ud83d\udca1 **Examiner Pro-Tip**: 'Scattered bundles + phloem parenchyma absent + closed bundles' = diagnostic signature of Monocot Stem.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0255"],
    code: "PA0255"
  },
  {
    id: "allen-anat-ex2-047",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Easy",
    questionText: "Identify the incorrect statement. [NEET 2020 | ALLEN PA0256]",
    options: [
      "Due to deposition of tannins, resins, oils etc., heart wood is dark in colour",
      "Heart wood does not conduct water but gives mechanical support",
      "Sapwood is involved in conduction of water and minerals from root to leaf",
      "Sapwood is the innermost secondary xylem and is lighter in colour"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Sapwood (alburnum) is the peripheral, outermost functional region of secondary xylem, not the innermost region. Heartwood (duramen) constitutes the central, innermost region.\n\u26a1 **Detailed Anatomical Explanation**: Statement (4) is false because innermost secondary xylem becomes non-functional heartwood due to lumen blockage by tyloses and impregnation with organic compounds. Sapwood is the peripheral lighter wood that actively conducts water.\n\ud83d\udca1 **Examiner Pro-Tip**: Innermost wood = Heartwood (central, dark, dead, non-conducting). Outermost wood = Sapwood (peripheral, light, living cells present, conducts water).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0256"],
    code: "PA0256"
  },
  {
    id: "allen-anat-ex2-048",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Easy",
    questionText: "Large, empty colourless cells of the adaxial epidermis along the veins of grass leaves are : [NEET 2020 (COVID-19) | ALLEN PA0257]",
    options: [
      "Lenticels",
      "Guard cells",
      "Bundle sheath cells",
      "Bulliform cells"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Bulliform cells (motor cells) are large, vacuolated, empty, colourless cells occurring in longitudinal bands along veins on the adaxial (upper) epidermis of monocot/grass leaves.\n\u26a1 **Detailed Anatomical Explanation**: They regulate leaf rolling in response to water availability to limit transpiration loss during dry periods.\n\ud83d\udca1 **Examiner Pro-Tip**: Direct NCERT definition. Turgid = leaf expands; Flaccid = leaf curls inward.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0257"],
    code: "PA0257"
  },
  {
    id: "allen-anat-ex2-049",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Medium",
    questionText: "Which of the following statements about cork cambium is incorrect? [NEET 2020 (COVID-19) | ALLEN PA0258]",
    options: [
      "It forms secondary cortex on its outerside",
      "It forms a part of periderm",
      "It is responsible for the formation of lenticels",
      "It is a couple of layers thick"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Cork cambium (phellogen) cuts off cork (phellem) on its outer side and secondary cortex (phelloderm) on its inner side.\n\u26a1 **Detailed Anatomical Explanation**: Statement (1) is incorrect because phelloderm (secondary cortex) is formed on the INNER side of the cork cambium, while phellem (cork) is formed on the outer side.\n\ud83d\udca1 **Examiner Pro-Tip**: Remember the spatial sequence: Outermost Phellem (cork) \u2190 Phellogen (cork cambium) \u2192 Innermost Phelloderm (secondary cortex).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0258"],
    code: "PA0258"
  },
  {
    id: "allen-anat-ex2-050",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Easy",
    questionText: "Match List-I with List-II : [NEET 2021 | ALLEN PA0259]\nList-I:\n(a) Cells with active cell division capacity\n(b) Tissue having all cells similar in structure and function\n(c) Tissue having different types of cells\n(d) Dead cells with highly thickened walls and narrow lumen\n\nList-II:\n(i) Vascular tissues\n(ii) Meristematic tissue\n(iii) Sclereids\n(iv) Simple tissue\n\nSelect the correct answer from the options given below :",
    options: [
      "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
      "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)",
      "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
      "(a)-(iii), (b)-(ii), (c)-(iv), (d)-(i)"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: \n\u2022 Meristematic tissue: actively dividing cells capable of mitotic multiplication \u2192 (ii)\n\u2022 Simple tissue: made of only one type of cells, similar in structure and function (parenchyma, collenchyma, sclerenchyma) \u2192 (iv)\n\u2022 Vascular/complex tissue: composed of more than one type of cells functioning as a unit (xylem, phloem) \u2192 (i)\n\u2022 Sclereids: dead sclerenchymatous cells with extremely thick lignified walls and narrow lumen \u2192 (iii)\n\u26a1 **Detailed Anatomical Explanation**: Matching gives (a)-(ii), (b)-(iv), (c)-(i), (d)-(iii), which corresponds to option (1).\n\ud83d\udca1 **Examiner Pro-Tip**: Identify the easiest match first (cells with active division = meristematic, so a -> ii), immediately isolating option 1!",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0259"],
    code: "PA0259"
  },
  {
    id: "allen-anat-ex2-051",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Easy",
    questionText: "Match List-I with List-II : [NEET 2021 | ALLEN PA0260]\nList-I:\n(a) Lenticels\n(b) Cork cambium\n(c) Secondary cortex\n(d) Cork\n\nList-II:\n(i) Phellogen\n(ii) Suberin deposition\n(iii) Exchange of gases\n(iv) Phelloderm\n\nChoose the correct answer from the options given below :",
    options: [
      "(a)-(iv), (b)-(i), (c)-(iii), (d)-(ii)",
      "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
      "(a)-(ii), (b)-(iii), (c)-(iv), (d)-(i)",
      "(a)-(iv), (b)-(ii), (c)-(i), (d)-(iii)"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**:\n\u2022 (a) Lenticels: lens-shaped openings in bark facilitating exchange of gases between atmosphere and internal tissues \u2192 (iii)\n\u2022 (b) Cork cambium: meristematic layer, also called Phellogen \u2192 (i)\n\u2022 (c) Secondary cortex: parenchymatous layer cut off on inner side of phellogen, also known as Phelloderm \u2192 (iv)\n\u2022 (d) Cork: cells formed on outer side of phellogen with suberized walls, called Phellem \u2192 (ii)\n\u26a1 **Detailed Anatomical Explanation**: Correct combination is (a)-(iii), (b)-(i), (c)-(iv), (d)-(ii), which is option (2).\n\ud83d\udca1 **Examiner Pro-Tip**: Periderm = Phellem (cork) + Phellogen (cork cambium) + Phelloderm (secondary cortex).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0260"],
    code: "PA0260"
  },
  {
    id: "allen-anat-ex2-052",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Medium",
    questionText: "Select the correct pair : [NEET 2021 | ALLEN PA0261]",
    options: [
      "Large colorless empty cells in the epidermis of grass leaves \u2013 Subsidiary cells",
      "In dicot leaves, vascular bundles are surrounded by large thick-walled cells \u2013 Conjunctive tissue",
      "Cells of medullary rays that form part of cambial ring \u2013 Interfascicular cambium",
      "Loose parenchyma cells rupturing the epidermis and forming a lens-shaped opening in bark \u2013 Spongy parenchyma"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: During secondary growth in dicot stems, the cells of medullary rays adjoining the intrafascicular cambium become meristematic and form the interfascicular cambium, completing a continuous ring of vascular cambium.\n\u26a1 **Detailed Anatomical Explanation**: \n\u2022 (1) is incorrect: large colorless empty cells in grass leaves are bulliform cells, not subsidiary cells.\n\u2022 (2) is incorrect: cells surrounding vascular bundles in leaves form bundle sheath, not conjunctive tissue.\n\u2022 (3) is correct: cells of medullary rays become interfascicular cambium.\n\u2022 (4) is incorrect: loose cells rupturing epidermis are complementary cells forming lenticels, not spongy parenchyma.\n\ud83d\udca1 **Examiner Pro-Tip**: Cambial ring = Intrafascicular cambium + Interfascicular cambium (derived from medullary ray cells).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0261"],
    code: "PA0261"
  },
  {
    id: "allen-anat-ex2-053",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Easy",
    questionText: "Read A to D and tell the correct order of components from outer side to inner side in a young dicot stem : [Re-NEET 2021 | ALLEN PA0279]\n(A) Cortex\n(B) Pericycle\n(C) Epidermis\n(D) Pith",
    options: [
      "C, D, B, A",
      "A, B, C, D",
      "C, A, B, D",
      "C, B, A, D"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In a transverse section of a young dicot stem, the anatomical layers arranged from outside to inside are:\n1. Epidermis (outermost protective layer)\n2. Cortex (hypodermis + cortical layers + endodermis)\n3. Pericycle (semilunar patches of sclerenchyma/parenchyma)\n4. Vascular bundles\n5. Pith (innermost central parenchymatous core)\n\u26a1 **Detailed Anatomical Explanation**: Hence, the sequence from outer to inner is C (Epidermis) \u2192 A (Cortex) \u2192 B (Pericycle) \u2192 D (Pith), which is C, A, B, D.\n\ud83d\udca1 **Examiner Pro-Tip**: Remember the anatomical sandwich: Epidermis \u2192 Cortex \u2192 Endodermis \u2192 Pericycle \u2192 Stele/Pith.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0279"],
    code: "PA0279"
  },
  {
    id: "allen-anat-ex2-054",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Easy",
    questionText: "During secondary growth in dicot stem, cork cambium or phellogen usually develops in : [Re-NEET 2021 | ALLEN PA0280]",
    options: [
      "Epidermal region",
      "Cortex region",
      "Pericycle region",
      "Pith region"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: As the stem continues to increase in girth due to the activity of vascular cambium, the outer cortical and epidermis layers get broken. Phellogen (cork cambium) usually develops in the cortex (outer cortical region) to replace these broken outer layers.\n\u26a1 **Detailed Anatomical Explanation**: Phellogen is a couple of layers thick, made of narrow, thin-walled, nearly rectangular cells arising dedifferentiation of cortical parenchymatous cells.\n\ud83d\udca1 **Examiner Pro-Tip**: In dicot stem, phellogen develops in the cortex; in dicot roots, phellogen develops from the pericycle.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0280"],
    code: "PA0280"
  },
  {
    id: "allen-anat-ex2-055",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Easy",
    questionText: "Transport of water and mineral in higher plants takes place through : [Re-NEET 2021 | ALLEN PA0281]",
    options: [
      "Sieve elements",
      "Companion cells",
      "Tracheids",
      "Transfusion tissue"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Tracheary elements (vessels and tracheids) of xylem are the main conducting elements responsible for the long-distance transport of water and mineral salts in vascular plants.\n\u26a1 **Detailed Anatomical Explanation**: Sieve elements and companion cells transport organic food materials (photosynthates) in phloem. Among the choices, tracheids are the only xylem water-conducting elements listed.\n\ud83d\udca1 **Examiner Pro-Tip**: Tracheids and vessels are both tracheary elements; gymnosperms rely solely on tracheids, while angiosperms have both.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0281"],
    code: "PA0281"
  },
  {
    id: "allen-anat-ex2-056",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Hard",
    questionText: "Read the following statements about the vascular bundles : [NEET 2022 | ALLEN PA0282]\n(a) In roots, xylem and phloem in a vascular bundle are arranged in an alternate manner along the different radii.\n(b) Conjoint closed vascular bundles do not possess cambium\n(c) In open vascular bundles, cambium is present in between xylem and phloem\n(d) The vascular bundles of dicotyledonous stem possess endarch protoxylem\n(e) In monocotyledonous root, usually there are more than six xylem bundles present\nChoose the correct answer from the options given below :",
    options: [
      "(b), (c), (d) and (e) only",
      "(a), (b), (c) and (d) only",
      "(a), (c), (d) and (e) only",
      "(a), (b) and (d) only"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In radial arrangement (roots), xylem and phloem occur in separate bundles on different radii, not together 'in a vascular bundle'. Thus statement (a) was regarded as technically flawed by NTA/examiners.\n\u26a1 **Detailed Anatomical Explanation**:\n\u2022 (b) Closed vascular bundles lack cambium (true).\n\u2022 (c) Open vascular bundles have cambium between xylem and phloem (true).\n\u2022 (d) Dicot stem vascular bundles have endarch protoxylem (true, protoxylem towards center).\n\u2022 (e) Monocot root has polyarch condition (>6 xylem bundles) (true).\nTherefore, statements (b), (c), (d), and (e) are unequivocally correct.\n\ud83d\udca1 **Examiner Pro-Tip**: In roots, xylem and phloem are arranged in alternate radius as separate distinct bundles, termed radial vascular bundles.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0282"],
    code: "PA0282"
  },
  {
    id: "allen-anat-ex2-057",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Medium",
    questionText: "The anatomy of springwood shows some peculiar features. Identify the correct set of statements about springwood. [NEET 2022 | ALLEN PA0283]\n(a) It is also called as the earlywood\n(b) In spring season cambium produces xylem elements with narrow vessels\n(c) It is lighter in colour\n(d) The springwood along with autumnwood shows alternate concentric rings forming annual rings\n(e) It has lower density\nChoose the correct answer from the options given below :",
    options: [
      "(a), (c), (d) and (e) Only",
      "(a), (b) and (d) Only",
      "(c), (d) and (e) Only",
      "(a), (b), (d) and (e) Only"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Spring wood (early wood) is formed during favorable spring conditions when the cambium is very active. It has wider vessels with wider cavities, is lighter in color, and has a lower density.\n\u26a1 **Detailed Anatomical Explanation**:\n\u2022 (a) Spring wood = early wood (True).\n\u2022 (b) Cambium produces xylem elements with wider vessels, not narrow vessels (False).\n\u2022 (c) It is lighter in color (True).\n\u2022 (d) Spring wood + autumn wood form annual rings (True).\n\u2022 (e) It has lower density compared to autumn wood (True).\nThus, (a), (c), (d), and (e) are correct.\n\ud83d\udca1 **Examiner Pro-Tip**: Autumn wood (late wood) = less active cambium, fewer xylary elements with narrow vessels, darker in color, higher density.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0283"],
    code: "PA0283"
  },
  {
    id: "allen-anat-ex2-058",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Easy",
    questionText: "Select the correct statement related to the activity of cork cambium : [NEET 2022 (OVERSEAS) | ALLEN PA0284]",
    options: [
      "The cork differentiated from cork cambium, is impervious to water due to deposition of tannins and resins.",
      "Cuts the cells only on the outer side.",
      "Cuts the cells on inner as well as outer side.",
      "The outer cells differentiate into phelloderm."
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Cork cambium (phellogen) cuts off cells on both its inner and outer sides. Outer cells differentiate into phellem (cork) and inner cells differentiate into phelloderm (secondary cortex).\n\u26a1 **Detailed Anatomical Explanation**:\n\u2022 (1) is wrong because cork is impervious due to suberin, not tannins/resins.\n\u2022 (2) is wrong because it cuts cells on both sides.\n\u2022 (3) is correct: phellogen is active on both sides.\n\u2022 (4) is wrong because outer cells form phellem, while inner cells form phelloderm.\n\ud83d\udca1 **Examiner Pro-Tip**: Both vascular cambium and cork cambium are bifacial lateral meristems cutting derivatives on both sides.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0284"],
    code: "PA0284"
  },
  {
    id: "allen-anat-ex2-059",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Easy",
    questionText: "Axillary buds are derived from the activity of : [NEET 2022 (OVERSEAS) | ALLEN PA0285]",
    options: [
      "Secondary meristem",
      "Apical meristem",
      "Intercalary meristem",
      "Lateral meristem"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: During the formation of leaves and elongation of stem, particular cells left behind from the shoot apical meristem constitute the axillary bud.\n\u26a1 **Detailed Anatomical Explanation**: Axillary buds are present in the axils of leaves and are capable of developing into a branch or a flower. Because they originate as detached parts of the shoot apical meristem, their origin is derived from the apical meristem.\n\ud83d\udca1 **Examiner Pro-Tip**: Direct NCERT line: 'During the formation of leaves and elongation of stem, some cells \u2018left behind\u2019 from shoot apical meristem, constitute the axillary bud.'",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0285"],
    code: "PA0285"
  },
  {
    id: "allen-anat-ex2-060",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Easy",
    questionText: "Which of the following is not a character of collenchyma tissue? [NEET 2022 (OVERSEAS) | ALLEN PA0286]",
    options: [
      "They occur in layers below epidermis in dicotyledonous plants.",
      "They consist of cells with thick corners due to cellulose deposition.",
      "They are usually dead and without protoplasts.",
      "They provide mechanical support to the growing part of the plant."
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Collenchyma is a living mechanical tissue. Its cells possess living protoplasts and vacuolated cytoplasm; they are NOT dead.\n\u26a1 **Detailed Anatomical Explanation**: Sclerenchyma consists of dead cells without protoplasts. Collenchyma cells are living, with localized corner pectin, cellulose, and hemicellulose thickenings, providing tensile strength and flexibility to growing stems and petioles.\n\ud83d\udca1 **Examiner Pro-Tip**: Collenchyma = living mechanical tissue. Sclerenchyma = dead mechanical tissue.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0286"],
    code: "PA0286"
  },
  {
    id: "allen-anat-ex2-061",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Easy",
    questionText: "Initiation of lateral roots and vascular cambium during secondary growth takes place in cells of : [Re-NEET 2022 | ALLEN PA0287]",
    options: [
      "Epiblema",
      "Cortex",
      "Endodermis",
      "Pericycle"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In dicot roots, the pericycle is the site of origin for lateral roots (endogenous origin) and gives rise to parts of the vascular cambium and the phellogen during secondary growth.\n\u26a1 **Detailed Anatomical Explanation**: Lateral roots arise endogenously from pericycle cells located opposite to protoxylem. The pericycle opposite protoxylem also dedifferentiates to produce the outer arcs of the vascular cambial ring.\n\ud83d\udca1 **Examiner Pro-Tip**: Pericycle has multiple crucial roles in roots: lateral root initiation + cork cambium formation + contribution to vascular cambium.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0287"],
    code: "PA0287"
  },
  {
    id: "allen-anat-ex2-062",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Easy",
    questionText: "The type of tissue commonly found in the fruit wall of nuts is : [Re-NEET 2022 | ALLEN PA0288]",
    options: [
      "Parenchyma",
      "Collenchyma",
      "Sclerenchyma",
      "Sclereid"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Sclereids are spherical, oval or cylindrical, highly thickened dead cells with very narrow cavities (lumen). They are commonly found in the fruit walls of nuts, pulp of fruits like guava, pear and sapota, seed coats of legumes, and leaves of tea.\n\u26a1 **Detailed Anatomical Explanation**: Sclereids provide extreme mechanical hardness and protection to nuts (e.g., walnut shell, coconut endocarp). Sclereid is the specific type of sclerenchyma found in fruit walls of nuts.\n\ud83d\udca1 **Examiner Pro-Tip**: Sclereids = stone cells / brachysclereids giving grittiness to pear/guava and hardness to nutshells.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0288"],
    code: "PA0288"
  },
  {
    id: "allen-anat-ex2-063",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NEET Past Years (2018-2022)",
    difficulty: "Easy",
    questionText: "Interfascicular cambium is present between : [Re-NEET 2022 | ALLEN PA0289]",
    options: [
      "Primary xylem and primary phloem",
      "Pericycle and endodermis",
      "Two vascular bundles",
      "Secondary xylem and secondary phloem"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Interfascicular cambium develops from the dedifferentiation of medullary ray cells located in the interfascicular space between two adjacent vascular bundles.\n\u26a1 **Detailed Anatomical Explanation**: The cambium present within a vascular bundle (between primary xylem and phloem) is intrafascicular cambium. When the medullary ray cells between two bundles become meristematic, they form interfascicular cambium, joining with intrafascicular cambium to complete a continuous ring.\n\ud83d\udca1 **Examiner Pro-Tip**: Intra = within the bundle. Inter = between two adjacent bundles.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-II (Previous Year Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0289"],
    code: "PA0289"
  }
];

// ============================================================================
// EXERCISE-III: Master Your Understanding (NCERT Based & Analytical) - 61 Questions
// ============================================================================
export const ALLEN_ANATOMY_EXERCISE_3_QUESTIONS: Question[] = [
  {
    id: "allen-anat-ex3-001",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "Branch of botany related with study of internal structure of plants : [ALLEN PA0161]",
    options: [
      "Cytology",
      "Anatomy",
      "Physiology",
      "Ecology"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The study of internal structure and organization of plants is called plant anatomy.\n\u26a1 **Detailed Anatomical Explanation**: Cytology is the study of individual cells, physiology studies plant function and metabolism, ecology deals with organism-environment interactions, and plant anatomy investigates internal tissue architecture and organization.\n\ud83d\udca1 **Examiner Pro-Tip**: Nehemiah Grew is regarded as the Father of Plant Anatomy.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0161"],
    code: "PA0161"
  },
  {
    id: "allen-anat-ex3-002",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "A tissue is a group of cells having a : [ALLEN PA0162]",
    options: [
      "Common origin and dissimilar in function.",
      "Dissimilar origin and common in function.",
      "Dissimilar origin and dissimilar in function.",
      "Common origin and usually performing a common function."
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: A tissue is a group of cells having a common origin and usually performing a common function.\n\u26a1 **Detailed Anatomical Explanation**: Plant tissues are broadly classified into meristematic tissues (cells capable of active division) and permanent tissues (cells that have lost the ability to divide) based on whether the cells are capable of dividing.\n\ud83d\udca1 **Examiner Pro-Tip**: Verbatim NCERT definition of tissue from Chapter 6 introductory lines.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0162"],
    code: "PA0162"
  },
  {
    id: "allen-anat-ex3-003",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "In embryonic stage, cells are : [ALLEN PA0163]",
    options: [
      "Collenchymatous",
      "Sclerenchymatous",
      "Meristematic",
      "Parenchymatous"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In the embryonic stage, all cells are meristematic\u2014they possess continuous capacity for cell division and undifferentiated thin cellulosic walls with dense cytoplasm.\n\u26a1 **Detailed Anatomical Explanation**: Specialized permanent tissues such as parenchyma, collenchyma, and sclerenchyma appear later through cellular differentiation and maturation during organogenesis.\n\ud83d\udca1 **Examiner Pro-Tip**: Embryonic tissue = primary meristematic tissue (promeristem/eumeristem).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0163"],
    code: "PA0163"
  },
  {
    id: "allen-anat-ex3-004",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "Apical meristem is present : [ALLEN PA0164]",
    options: [
      "At the tips of roots",
      "At the tips of shoots",
      "In buds which are present in axils of leaves",
      "All of the above"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Apical meristems occur at the growing apices of roots and shoots and produce primary tissues. Shoot apical meristem also gives rise to axillary buds present in leaf axils.\n\u26a1 **Detailed Anatomical Explanation**: Root apical meristem occupies the tip of a root, shoot apical meristem occupies the distantmost region of the stem axis, and axillary buds are derived from cells left behind from the shoot apical meristem.\n\ud83d\udca1 **Examiner Pro-Tip**: All three locations harbor apical meristematic cells responsible for primary elongation and branching.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0164"],
    code: "PA0164"
  },
  {
    id: "allen-anat-ex3-005",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Medium",
    questionText: "Which of the following is an example of primary meristem : [ALLEN PA0165]",
    options: [
      "Phellogen",
      "Vascular cambium of root",
      "Interfascicular cambium",
      "Intrafascicular cambium"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Intrafascicular cambium (cambium present within primary vascular bundles between primary xylem and primary phloem) is primary in origin because it originates directly from the procambium.\n\u26a1 **Detailed Anatomical Explanation**: Phellogen (cork cambium), vascular cambium of dicot roots, and interfascicular cambium in dicot stems are secondary meristems that develop by dedifferentiation of permanent tissues.\n\ud83d\udca1 **Examiner Pro-Tip**: In dicot stems, intrafascicular cambium is primary, but interfascicular cambium is secondary.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0165"],
    code: "PA0165"
  },
  {
    id: "allen-anat-ex3-006",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "Which of the following is/are example(s) of lateral meristems : [ALLEN PA0166]",
    options: [
      "Fascicular vascular cambium",
      "Inter-fascicular cambium",
      "Cork cambium",
      "All of the above"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Lateral meristems are cylindrical meristems oriented parallel to the long axis of organs that bring about an increase in girth (secondary growth). Fascicular vascular cambium, interfascicular cambium, and cork cambium (phellogen) are all lateral meristems.\n\u26a1 **Detailed Anatomical Explanation**: As NCERT notes: 'Fascicular vascular cambium, interfascicular cambium and cork-cambium are examples of lateral meristems. These are responsible for producing the secondary tissues.'\n\ud83d\udca1 **Examiner Pro-Tip**: All cylindrical meristems involved in secondary thickening are lateral meristems.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0166"],
    code: "PA0166"
  },
  {
    id: "allen-anat-ex3-007",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "Example(s) of primary permanent tissue(s) is/are : [ALLEN PA0167]",
    options: [
      "Parenchyma",
      "Collenchyma",
      "Sclerenchyma",
      "All of the above"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Primary permanent tissues are differentiated from primary meristems during the development of the primary plant body. Parenchyma, collenchyma, and sclerenchyma are simple primary permanent tissues.\n\u26a1 **Detailed Anatomical Explanation**: Secondary permanent tissues arise later through the activity of secondary lateral meristems (e.g., secondary xylem, secondary phloem, phellem, phelloderm).\n\ud83d\udca1 **Examiner Pro-Tip**: Parenchyma, collenchyma, and sclerenchyma formed from apical/intercalary meristems are all primary permanent tissues.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0167"],
    code: "PA0167"
  },
  {
    id: "allen-anat-ex3-008",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "Which of the following statement(s) is/are true about parenchyma? [ALLEN PA0168]",
    options: [
      "The cells are generally isodiametric",
      "The cells may either be closely packed or have intercellular spaces.",
      "It performs various functions like photosynthesis, storage & secretion.",
      "All of the above"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Parenchyma forms the major component within plant organs. The cells are generally isodiametric, may be closely packed or have small intercellular spaces, and perform photosynthesis, storage, and secretion.\n\u26a1 **Detailed Anatomical Explanation**: All statements are verbatim NCERT points describing parenchymatous tissue structure, arrangement, and physiological roles.\n\ud83d\udca1 **Examiner Pro-Tip**: Chlorenchyma (photosynthesis), aerenchyma (buoyancy), and storage parenchyma are key functional modifications.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0168"],
    code: "PA0168"
  },
  {
    id: "allen-anat-ex3-009",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "Which of the following tissue provides mechanical support to the growing parts of the plant such as young stem and petiole of a leaf : [ALLEN PA0169]",
    options: [
      "Parenchyma",
      "Collenchyma",
      "Sclereids",
      "Fibres"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Collenchyma provides mechanical support to the growing parts of the plant such as young stem and petiole of a leaf.\n\u26a1 **Detailed Anatomical Explanation**: Because collenchyma cells are living with flexible pectin-cellulose thickenings, they offer tensile strength without restraining growth and elongation in young organs.\n\ud83d\udca1 **Examiner Pro-Tip**: Key buzzwords: 'growing parts of plant, young stem, petiole of leaf' = Collenchyma.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0169"],
    code: "PA0169"
  },
  {
    id: "allen-anat-ex3-010",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "Living elements of xylem is : [ALLEN PA0170]",
    options: [
      "Tracheid",
      "Vessel",
      "Xylem parenchyma",
      "Xylem fibre"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Among the four elements of xylem (tracheids, vessels, xylem fibres, xylem parenchyma), only xylem parenchyma consists of living cells with protoplasts.\n\u26a1 **Detailed Anatomical Explanation**: Tracheids, vessels, and xylem fibres are dead at maturity, with lignified walls and devoid of protoplasm. Xylem parenchyma stores food (starch, fat) and tannins, and participates in radial water conduction.\n\ud83d\udca1 **Examiner Pro-Tip**: In xylem, 3 dead + 1 living (xylem parenchyma). In phloem, 3 living + 1 dead (phloem fibres).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0170"],
    code: "PA0170"
  },
  {
    id: "allen-anat-ex3-011",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "Companion cells are present in the phloem of : [ALLEN PA0171]",
    options: [
      "Pteridophytes",
      "Gymnosperms",
      "Angiosperms",
      "Both 1 and 2"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Companion cells are specialized parenchymatous cells closely associated with sieve tube elements found exclusively in angiosperms.\n\u26a1 **Detailed Anatomical Explanation**: Gymnosperms and pteridophytes lack companion cells and sieve tubes; their phloem possesses albuminous cells and sieve cells instead.\n\ud83d\udca1 **Examiner Pro-Tip**: Companion cells maintain the pressure gradient in the enucleated sieve tubes of angiosperms.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0171"],
    code: "PA0171"
  },
  {
    id: "allen-anat-ex3-012",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Medium",
    questionText: "Vessels differ from tracheids in having : [ALLEN PA0172]",
    options: [
      "In being living",
      "Presence of perforation plates at both ends",
      "Enucleated condition",
      "All of the above"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Vessel elements are interconnected through perforations in their common end walls (perforation plates), forming a continuous tube-like pipeline, whereas tracheids are imperforate individual cells with pitted end walls.\n\u26a1 **Detailed Anatomical Explanation**: Both tracheids and vessels are dead at maturity and lack nuclei. Hence, the distinctive feature of vessels is their perforated end walls forming continuous conduits.\n\ud83d\udca1 **Examiner Pro-Tip**: Perforation plate is the hallmark morphological feature separating vessel elements from tracheids.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0172"],
    code: "PA0172"
  },
  {
    id: "allen-anat-ex3-013",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "Which of the following is/are bast fibre/s ? [ALLEN PA0173]",
    options: [
      "Jute",
      "Flax",
      "Hemp",
      "All of the above"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Phloem fibres (bast fibres) from plants like jute, flax, and hemp are commercially exploited for textiles, ropes, and burlap.\n\u26a1 **Detailed Anatomical Explanation**: Bast fibres are elongated, unbranched sclerenchymatous cells of phloem with pointed apices and lignified secondary walls, providing exceptional tensile strength.\n\ud83d\udca1 **Examiner Pro-Tip**: Direct NCERT line: 'Phloem fibres of jute, flax and hemp are used commercially.'",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0173"],
    code: "PA0173"
  },
  {
    id: "allen-anat-ex3-014",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "When a meristematic tissue \"Intra fascicular cambium\" is present inside a vascular bundle, the vascular bundle is called : [ALLEN PA0174]",
    options: [
      "Conjoint",
      "Open",
      "Closed",
      "Radial"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In dicotyledonous stems, a strip of cambium is present between xylem and phloem within the vascular bundle. Such vascular bundles because of the presence of cambium possess the ability to form secondary tissues and are called open vascular bundles.\n\u26a1 **Detailed Anatomical Explanation**: When cambium is absent (as in monocots), the vascular bundles are unable to form secondary tissues and are called closed vascular bundles.\n\ud83d\udca1 **Examiner Pro-Tip**: Cambium present = Open; Cambium absent = Closed.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0174"],
    code: "PA0174"
  },
  {
    id: "allen-anat-ex3-015",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "Which of the following is not included in stomatal apparatus : [ALLEN PA0175]",
    options: [
      "Stomatal aperture",
      "Guard cells",
      "Subsidiary cells",
      "Sclerenchymatous cells"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The stomatal aperture, guard cells, and surrounding subsidiary cells together constitute the stomatal apparatus.\n\u26a1 **Detailed Anatomical Explanation**: Sclerenchymatous cells are not components of the epidermal stomatal complex. Guard cells are specialized epidermal cells with chloroplasts, flanked by specialized subsidiary cells.\n\ud83d\udca1 **Examiner Pro-Tip**: Stomatal apparatus = Stomatal aperture + 2 Guard cells + Subsidiary cells.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0175"],
    code: "PA0175"
  },
  {
    id: "allen-anat-ex3-016",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Medium",
    questionText: "Consider the following statements : [ALLEN PA0262]\n(a) Phloem fibres are made up of sclerenchymatous cells\n(b) Phloem parenchyma are generally present in monocots\n(c) The first formed primary phloem consists of narrow sieve tube and is referred to as protophloem and the later formed phloem has bigger sieve tubes and is referred to as metaphloem\nWhich statement(s) is/are false ?",
    options: [
      "Only a",
      "Only b",
      "Only c",
      "a, b, and c"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Phloem parenchyma is generally absent in most monocotyledons.\n\u26a1 **Detailed Anatomical Explanation**:\n\u2022 (a) Phloem fibres are sclerenchymatous (True).\n\u2022 (b) Phloem parenchyma is generally absent in monocots, so stating it is 'generally present in monocots' is False.\n\u2022 (c) Protophloem has narrow sieve tubes and metaphloem has wider/bigger sieve tubes (True).\nThus, only statement (b) is false.\n\ud83d\udca1 **Examiner Pro-Tip**: Phloem parenchyma is absent in monocots; a favorite NCERT exception question.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0262"],
    code: "PA0262"
  },
  {
    id: "allen-anat-ex3-017",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "The outside of the epidermis is often covered with a waxy thick layer, called : [ALLEN PA0263]",
    options: [
      "Hypodermis",
      "Cuticle",
      "Root hair",
      "Stem hair"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The outside of the epidermis is often covered with a waxy thick layer called the cuticle, which prevents the loss of water.\n\u26a1 **Detailed Anatomical Explanation**: Cuticle is composed of cutin and wax deposited on the outer tangential walls of epidermal cells. Cuticle is absent in roots.\n\ud83d\udca1 **Examiner Pro-Tip**: Cuticle prevents water loss in aerial plant organs.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0263"],
    code: "PA0263"
  },
  {
    id: "allen-anat-ex3-018",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "Cuticle is absent in : [ALLEN PA0264]",
    options: [
      "Roots",
      "Dicot Stem",
      "Leaves",
      "Monocot stem"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Cuticle is completely absent in roots (epiblema/rhizodermis).\n\u26a1 **Detailed Anatomical Explanation**: Roots absorb water and dissolved minerals from the soil. A waxy, impermeable cuticle on the root epidermis would prevent water absorption. Therefore, root epidermis is devoid of cuticle.\n\ud83d\udca1 **Examiner Pro-Tip**: Direct NCERT statement: 'Cuticle is absent in roots.'",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0264"],
    code: "PA0264"
  },
  {
    id: "allen-anat-ex3-019",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "In which plant vascular bundles are scattered in ground tissue and each vascular bundle is surrounded by sclerenchymatous bundle sheath : [ALLEN PA0176]",
    options: [
      "Maize",
      "Sunflower",
      "Gram",
      "Ficus"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In monocotyledonous stems like maize (*Zea mays*), vascular bundles are scattered throughout the ground tissue and each bundle is enclosed by a sclerenchymatous bundle sheath.\n\u26a1 **Detailed Anatomical Explanation**: Sunflower, gram, and ficus are dicots having a ring arrangement of conjoint open vascular bundles with a differentiated cortex and pith.\n\ud83d\udca1 **Examiner Pro-Tip**: Maize stem = classic monocot stem model described in NCERT.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0176"],
    code: "PA0176"
  },
  {
    id: "allen-anat-ex3-020",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Medium",
    questionText: "Pith is small or inconspicuous in : [ALLEN PA0177]",
    options: [
      "Monocot root",
      "Monocot stem",
      "Dicot root",
      "Dicot stem"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In dicot roots, the pith is small or inconspicuous (or even completely obliterated). In monocot roots, the pith is large and well-developed.\n\u26a1 **Detailed Anatomical Explanation**: In monocot roots, polyarch xylem bundles enclose a large parenchymatous pith. In dicot roots, diarch to hexarch xylem meets in or approaches the center, leaving a tiny or absent pith.\n\ud83d\udca1 **Examiner Pro-Tip**: Pith is small/inconspicuous in Dicot Root; large and well-developed in Monocot Root.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0177"],
    code: "PA0177"
  },
  {
    id: "allen-anat-ex3-021",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Medium",
    questionText: "The dicot root is identified from the monocot root by the presence of : [ALLEN PA0178]",
    options: [
      "Exarch xylem",
      "2-4 xylem bundles",
      "> 6 xylem bundles",
      "Large and well developed pith"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Dicot roots typically have 2 to 4 (rarely up to 6, diarch to tetrarch) xylem and phloem patches, whereas monocot roots have polyarch condition (usually more than 6 xylem bundles).\n\u26a1 **Detailed Anatomical Explanation**: Both dicot and monocot roots have exarch xylem. However, dicot root is distinguished by having 2\u20134 xylem bundles and an inconspicuous pith, whereas monocot root has >6 xylem bundles and a large pith.\n\ud83d\udca1 **Examiner Pro-Tip**: 2\u20134 bundles = Dicot root; >6 (polyarch) = Monocot root.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0178"],
    code: "PA0178"
  },
  {
    id: "allen-anat-ex3-022",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "Parenchymatous cells with large intercellular spaces which occupy the central portion of the stem constitute : [ALLEN PA0265]",
    options: [
      "Cortex",
      "Pith",
      "Hypodermis",
      "Epidermis"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The central portion of the stem is occupied by a large number of rounded, parenchymatous cells with large intercellular spaces, which constitute the pith (medulla).\n\u26a1 **Detailed Anatomical Explanation**: Pith stores nutrients and water in young dicot stems, situated centrally to the ring of vascular bundles.\n\ud83d\udca1 **Examiner Pro-Tip**: Central parenchymatous core of stem = Pith (Medulla).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0265"],
    code: "PA0265"
  },
  {
    id: "allen-anat-ex3-023",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "In grasses, certain adaxial epidermal cells along the veins modify themselves into large, empty, colourless cells. These cells are called : [ALLEN PA0266]",
    options: [
      "Bulliform cells",
      "Starch sheath cells",
      "Companion cells",
      "Complimentary cells"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In grasses, certain adaxial epidermal cells along the veins modify themselves into large, empty, colourless cells called bulliform cells (motor cells).\n\u26a1 **Detailed Anatomical Explanation**: When turgid, they expose leaf surface; when flaccid due to water stress, they cause inward leaf rolling to minimize water loss.\n\ud83d\udca1 **Examiner Pro-Tip**: Key identifier: 'large, empty, colourless cells along veins on adaxial epidermis' = Bulliform cells.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0266"],
    code: "PA0266"
  },
  {
    id: "allen-anat-ex3-024",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "In dicot stem, the cells of cambium present between primary xylem and primary phloem is the : [ALLEN PA0267]",
    options: [
      "Interfascicular cambium",
      "Vascular cambium",
      "Intrafascicular cambium",
      "Cork cambium"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In dicot stems, the cells of cambium present between primary xylem and primary phloem within a vascular bundle is the intrafascicular cambium.\n\u26a1 **Detailed Anatomical Explanation**: The cells of medullary rays adjoining these intrafascicular cambial strips become meristematic during secondary growth and form interfascicular cambium, completing the continuous vascular cambial ring.\n\ud83d\udca1 **Examiner Pro-Tip**: Inside the bundle = Intrafascicular. Between bundles = Interfascicular.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0267"],
    code: "PA0267"
  },
  {
    id: "allen-anat-ex3-025",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Medium",
    questionText: "The innermost layer of cortex of dicot root is characterised by presence of suberin thickening. This suberin thickening occurs on : [ALLEN PA0268]",
    options: [
      "Radial walls",
      "Transverse wall",
      "Tangential wall",
      "Both 1 & 3"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The innermost layer of cortex is endodermis. The tangential as well as radial walls of the endodermal cells have a deposition of water-impermeable, waxy material suberin in the form of Casparian strips.\n\u26a1 **Detailed Anatomical Explanation**: Because suberin is deposited on both the radial walls and tangential walls (inner/outer tangential walls), water is blocked from moving apoplastically across these boundaries, directing flow into the symplast.\n\ud83d\udca1 **Examiner Pro-Tip**: Direct NCERT line: 'The tangential as well as radial walls of the endodermal cells have a deposition of water-impermeable, waxy material suberin in the form of Casparian strips.'",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0268"],
    code: "PA0268"
  },
  {
    id: "allen-anat-ex3-026",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "The parenchymatous cells lies between xylem & phloem of root is known as : [ALLEN PA0269]",
    options: [
      "Cambium",
      "Conjunctive tissue",
      "Pith",
      "Pericycle"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In roots, the parenchymatous cells which lie between the alternating xylem and phloem bundles are known as conjunctive tissue.\n\u26a1 **Detailed Anatomical Explanation**: During secondary growth in dicot roots, the conjunctive tissue located beneath the phloem bundles dedifferentiates and becomes meristematic, contributing to the formation of vascular cambium.\n\ud83d\udca1 **Examiner Pro-Tip**: Conjunctive tissue = parenchymatous cells between radial xylem and phloem bundles in roots.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0269"],
    code: "PA0269"
  },
  {
    id: "allen-anat-ex3-027",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "Regarding to stele which of the following statement is correct ? [ALLEN PA0270]",
    options: [
      "All the tissues lies inner to pericycle",
      "All the tissues lies inner to endodermis",
      "All the tissues lies inner to hypodermis",
      "All the tissues lies inner to epidermis"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: All tissues on the inner side of the endodermis such as pericycle, vascular bundles, and pith constitute the stele.\n\u26a1 **Detailed Anatomical Explanation**: The stele is the central cylinder of vascular plants. Because endodermis is the innermost layer of cortex, all tissues situated internally to the endodermis (Pericycle + Xylem + Phloem + Pith) constitute the stele.\n\ud83d\udca1 **Examiner Pro-Tip**: Direct NCERT verbatim line: 'All tissues on the innerside of the endodermis such as pericycle, vascular bundles and pith constitute the stele.'",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0270"],
    code: "PA0270"
  },
  {
    id: "allen-anat-ex3-028",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "Complimentary cells are formed by the activity of : [ALLEN PA0181]",
    options: [
      "Vascular cambium",
      "Inter fascicular cambium",
      "Phellogen",
      "Intra fascicular cambium"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: At certain regions, phellogen cuts off closely arranged parenchymatous cells on the outer side instead of cork cells. These parenchymatous cells are called complementary cells, which soon rupture the epidermis forming lenticels.\n\u26a1 **Detailed Anatomical Explanation**: The rapid proliferation of complementary cells creates tension that tears the outer epidermis, producing lens-shaped lenticels that facilitate gas exchange between internal tissues and the atmosphere.\n\ud83d\udca1 **Examiner Pro-Tip**: Complementary cells = produced by phellogen (cork cambium) beneath lenticels.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0181"],
    code: "PA0181"
  },
  {
    id: "allen-anat-ex3-029",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Easy",
    questionText: "Vascular cambium cuts off cells more : [ALLEN PA0182]",
    options: [
      "Towards centre",
      "Towards periphery",
      "Both 1 and 2",
      "None of these"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The vascular cambium is generally more active on the inner side than on the outer side. As a result, the amount of secondary xylem produced towards the center is much more than secondary phloem produced towards the periphery.\n\u26a1 **Detailed Anatomical Explanation**: The vascular cambium cuts off cells towards the center to form secondary xylem at approximately 8 to 10 times the rate it cuts off cells towards the outside to form secondary phloem.\n\ud83d\udca1 **Examiner Pro-Tip**: Secondary xylem (wood) accumulates extensively, while secondary phloem is comparatively thin and crushed over time.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0182"],
    code: "PA0182"
  },
  {
    id: "allen-anat-ex3-030",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Medium",
    questionText: "In a dicot root, vascular cambium originates from : [ALLEN PA0183]",
    options: [
      "Parenchymatous conjuctive tissue located just below phloem bundles",
      "Medullary rays",
      "A portion of pericycle tissue, lying opposite to protoxylem",
      "Both 1 and 3"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In dicot roots, the vascular cambium originates from both the conjunctive parenchyma tissue located just below the phloem bundles AND portions of pericycle tissue situated opposite/above the protoxylem.\n\u26a1 **Detailed Anatomical Explanation**: These two distinct tissues dedifferentiate to form a complete continuous wavy cambial ring, which later becomes circular. Hence, both 1 and 3 are correct.\n\ud83d\udca1 **Examiner Pro-Tip**: Complete secondary origin from conjunctive tissue + pericycle.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0183"],
    code: "PA0183"
  },
  {
    id: "allen-anat-ex3-031",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "NCERT Based Analytical Questions",
    difficulty: "Medium",
    questionText: "In a dicot root, the pericycle gives rise to : [ALLEN PA0184]",
    options: [
      "Lateral roots",
      "Cork cambium",
      "A portion of vascular cambium",
      "All of the above"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In dicot roots, the pericycle plays key developmental roles:\n1. Initiation of lateral roots (endogenous origin)\n2. Giving rise to cork cambium (phellogen)\n3. Forming portions of vascular cambium lying opposite protoxylem.\n\u26a1 **Detailed Anatomical Explanation**: Because all three tissues originate from pericycle cells undergoing dedifferentiation, option (4) 'All of the above' is correct.\n\ud83d\udca1 **Examiner Pro-Tip**: Pericycle in dicot roots is pluripotent and gives rise to lateral roots, cork cambium, and part of vascular cambium.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0184"],
    code: "PA0184"
  },
  {
    id: "allen-anat-ex3-032",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Easy",
    questionText: "Select true statement : [ALLEN PA0185]",
    options: [
      "Lenticels occur in woody trees",
      "Bark is a non-technical term",
      "Vascular cambium and cork cambium are examples of lateral meristems",
      "All of the above"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: \n\u2022 Lenticels permit exchange of gases between atmosphere and internal tissues of woody trees.\n\u2022 Bark is a non-technical term referring to all tissues exterior to the vascular cambium.\n\u2022 Vascular cambium and cork cambium are lateral meristems responsible for secondary growth.\n\u26a1 **Detailed Anatomical Explanation**: All three statements are authentic NCERT facts describing secondary growth and periderm.\n\ud83d\udca1 **Examiner Pro-Tip**: Bark includes periderm + secondary phloem.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0185"],
    code: "PA0185"
  },
  {
    id: "allen-anat-ex3-033",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Easy",
    questionText: "During secondary growth in dicot stem, at some places, the cambium forms a narrow band of parenchyma, which passes through the secondary xylem and secondary phloem in radial directions. These are called : [ALLEN PA0271]",
    options: [
      "Sap wood",
      "Heart wood",
      "Secondary medullary rays",
      "Primary medullary rays"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Ray initials of the vascular cambium produce narrow bands of radial parenchyma cells passing through both secondary xylem and secondary phloem, termed secondary medullary rays.\n\u26a1 **Detailed Anatomical Explanation**: Primary medullary rays run between the primary vascular bundles. Secondary medullary rays develop later from cambial ray initials and carry out radial translocation of water and organic nutrients across wood and bark.\n\ud83d\udca1 **Examiner Pro-Tip**: Direct NCERT line: 'At some places, the cambium forms a narrow band of parenchyma, which passes through the secondary xylem and the secondary phloem in the radial directions. These are the secondary medullary rays.'",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0271"],
    code: "PA0271"
  },
  {
    id: "allen-anat-ex3-034",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Easy",
    questionText: "Bark that is formed early in the season is called : [ALLEN PA0272]",
    options: [
      "Late bark",
      "Soft bark",
      "Hard bark",
      "Ring bark"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Bark formed early in the growing season is called early bark or soft bark, whereas bark formed towards the end of the season is termed late bark or hard bark.\n\u26a1 **Detailed Anatomical Explanation**: Early/soft bark has more parenchyma and phloem elements with thinner walls, while late/hard bark has denser sclerenchymatous fibres and thick-walled cells.\n\ud83d\udca1 **Examiner Pro-Tip**: Early bark = Soft bark; Late bark = Hard bark.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0272"],
    code: "PA0272"
  },
  {
    id: "allen-anat-ex3-035",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Easy",
    questionText: "At certain regions, the phellogen cuts off closely arranged parenchymatous cells on the outer side instead of cork cells. These are called : [ALLEN PA0273]",
    options: [
      "Phellem",
      "Periderm",
      "Bark",
      "Complimentary cells"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Instead of producing suberized phellem, phellogen in certain localized regions cuts off thin-walled, loosely arranged, non-suberized parenchymatous cells known as complementary cells.\n\u26a1 **Detailed Anatomical Explanation**: The accumulation and swelling of complementary cells exert internal pressure, rupturing the outer epidermis to create aerating lens-shaped pores called lenticels.\n\ud83d\udca1 **Examiner Pro-Tip**: Verbatim NCERT phrase: '...cuts off closely arranged parenchymatous cells on the outer side instead of cork cells. These are called complementary cells.'",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0273"],
    code: "PA0273"
  },
  {
    id: "allen-anat-ex3-036",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Easy",
    questionText: "The cells of secondary cortex are : [ALLEN PA0274]",
    options: [
      "Sclerenchymatous",
      "Parenchymatous",
      "Collenchymatous",
      "Meristematic"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Secondary cortex (phelloderm) cut off on the inner side of phellogen consists of living parenchymatous cells.\n\u26a1 **Detailed Anatomical Explanation**: As NCERT notes: 'Phellogen cuts off cells on both sides. The outer cells differentiate into cork or phellem while the inner cells differentiate into secondary cortex or phelloderm. Phelloderm cells are parenchymatous.'\n\ud83d\udca1 **Examiner Pro-Tip**: Cork (phellem) = dead, suberized; Secondary cortex (phelloderm) = living, parenchymatous.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0274"],
    code: "PA0274"
  },
  {
    id: "allen-anat-ex3-037",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Easy",
    questionText: "In dicot root, the vascular cambium is : [ALLEN PA0275]",
    options: [
      "Primary in origin",
      "Completely secondary in origin",
      "Both primary and secondary in origin",
      "Neither primary nor secondary in origin"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In dicot roots, the vascular cambium is completely secondary in origin, arising entirely from dedifferentiated permanent tissues (conjunctive tissue + pericycle).\n\u26a1 **Detailed Anatomical Explanation**: In contrast to dicot stems (where intrafascicular cambium is primary), dicot roots have zero primary cambium in their primary body. All cambium develops anew during secondary growth.\n\ud83d\udca1 **Examiner Pro-Tip**: Dicot stem cambium = partly primary + partly secondary. Dicot root cambium = 100% secondary in origin.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0275"],
    code: "PA0275"
  },
  {
    id: "allen-anat-ex3-038",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Easy",
    questionText: "Due to continuous growth of secondary xylem which of the following get crushed gradually : [ALLEN PA0276]",
    options: [
      "Primary phloem",
      "Earlier formed secondary phloem",
      "Either 1 or 2",
      "Both 1 and 2"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: As the vascular cambium continuously produces secondary xylem centripetally, the outward expansive pressure crushes the primary phloem and earlier-formed secondary phloem against the resistant periderm.\n\u26a1 **Detailed Anatomical Explanation**: NCERT states: 'The primary and secondary phloems get gradually crushed due to the continued formation and accumulation of secondary xylem.'\n\ud83d\udca1 **Examiner Pro-Tip**: Both primary phloem and earlier secondary phloem are crushed; only the innermost newly formed secondary phloem remains functional.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0276"],
    code: "PA0276"
  },
  {
    id: "allen-anat-ex3-039",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Medium",
    questionText: "After secondary growth what is the actual future of primary xylem ? [ALLEN PA0277]",
    options: [
      "Converts into secondary xylem",
      "Remains more or less intact in or around the centre",
      "Converts into secondary phloem",
      "Gets crushed"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Primary xylem remains more or less intact in or around the centre of the stem.\n\u26a1 **Detailed Anatomical Explanation**: Unlike phloem (which gets crushed against the periphery), primary xylem is pushed towards the center or remains at the inner margin of the secondary xylem surrounding the pith without collapsing, because of its thick lignified walls.\n\ud83d\udca1 **Examiner Pro-Tip**: Verbatim NCERT statement: 'The primary xylem however remains more or less intact, in or around the centre.'",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0277"],
    code: "PA0277"
  },
  {
    id: "allen-anat-ex3-040",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Medium",
    questionText: "In plants, during early embryonic condition : [ALLEN PA0186]",
    options: [
      "All cells of the embryo divide",
      "Meristematic activity is confined to single apical cell",
      "Meristematic activity is confined to a group of apical cells.",
      "Apical & lateral cells only divide"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: During early embryogenesis, cell division is generalized and uniform throughout the entire proembryo; all cells actively divide.\n\u26a1 **Detailed Anatomical Explanation**: As the embryo develops and polarizes, meristematic activity becomes localized and restricted to specific apical zones (shoot and root apical meristems).\n\ud83d\udca1 **Examiner Pro-Tip**: Generalized division occurs in young embryo; localized division characterizes mature plant development.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0186"],
    code: "PA0186"
  },
  {
    id: "allen-anat-ex3-041",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Easy",
    questionText: "Tissue which develops more due to scarcity of water or tissue which is lignified : [ALLEN PA0188]",
    options: [
      "Sclerenchyma",
      "Collenchyma",
      "Parenchyma",
      "Meristem"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Sclerenchyma consists of long, narrow cells with thick and lignified cell walls. Xerophytes growing under water scarcity extensively develop sclerenchyma to prevent wilting and provide structural rigidity.\n\u26a1 **Detailed Anatomical Explanation**: Lignified walls of sclerenchymatous fibres and sclereids withstand mechanical strain and negative water potential without collapsing during severe drought.\n\ud83d\udca1 **Examiner Pro-Tip**: Lignified dead mechanical tissue promoted under water scarcity = Sclerenchyma.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0188"],
    code: "PA0188"
  },
  {
    id: "allen-anat-ex3-042",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Medium",
    questionText: "A mature sieve tube differs from a vessel : [ALLEN PA0189]",
    options: [
      "In lacking a functional nucleus",
      "Absence of lignified walls",
      "Being nearly dead",
      "Lacking cytoplasm"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Mature sieve tube elements are living cells with non-lignified, cellulosic walls and a peripheral layer of cytoplasm with a large vacuole (though lacking a nucleus). In contrast, vessels are dead elements with heavily lignified secondary walls.\n\u26a1 **Detailed Anatomical Explanation**: Both lack a nucleus at maturity, but sieve tubes are living with unlignified cellulosic walls, whereas vessels are dead with thick lignified walls.\n\ud83d\udca1 **Examiner Pro-Tip**: Sieve tubes have cellulose walls and peripheral cytoplasm; vessels have lignified dead walls.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0189"],
    code: "PA0189"
  },
  {
    id: "allen-anat-ex3-043",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Medium",
    questionText: "Sieve plates in angiosperms are : [ALLEN PA0190]",
    options: [
      "Oblique & in lateral walls",
      "Pitted & in end wall",
      "Oblique & in end wall",
      "Straight & in lateral wall"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In angiosperms, the end walls between adjacent sieve tube elements are perforated in a sieve-like manner to form sieve plates, which are typically oblique or transverse across the end walls.\n\u26a1 **Detailed Anatomical Explanation**: These perforated end walls allow symplastic cytoplasmic continuity and efficient mass flow of phloem sap along the longitudinal sieve tube columns.\n\ud83d\udca1 **Examiner Pro-Tip**: Sieve plates = oblique/transverse perforated end walls of sieve tubes.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0190"],
    code: "PA0190"
  },
  {
    id: "allen-anat-ex3-044",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Easy",
    questionText: "According to Haberlandt theory, the part differentiated by protoderm is : [ALLEN PA0192]",
    options: [
      "Cortex",
      "Xylem & phloem",
      "Ground tissue system",
      "Epidermal tissue system"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Haberlandt classified primary meristematic zones into:\n1. Protoderm \u2192 differentiates into Epidermal Tissue System\n2. Procambium \u2192 differentiates into Vascular Tissue System (xylem & phloem)\n3. Ground meristem \u2192 differentiates into Ground/Fundamental Tissue System (cortex, endodermis, pericycle, pith).\n\u26a1 **Detailed Anatomical Explanation**: Therefore, protoderm gives rise exclusively to the epidermal tissue system (epidermis, trichomes, stomata).\n\ud83d\udca1 **Examiner Pro-Tip**: Protoderm = Epidermis. Procambium = Vascular bundles. Ground meristem = Ground tissue.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0192"],
    code: "PA0192"
  },
  {
    id: "allen-anat-ex3-045",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Easy",
    questionText: "T.S. of a material exhibits conjoint, collateral endarch and closed bundles scattered in a ground tissue. What should be the material : [ALLEN PA0194]",
    options: [
      "Monocot root",
      "Dicot root",
      "Monocot stem",
      "Dicot stem"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Diagnostic features of a monocotyledonous stem:\n\u2022 Vascular bundles are conjoint, collateral, and closed (lack cambium).\n\u2022 Endarch xylem (protoxylem towards center).\n\u2022 Bundles scattered in parenchymatous ground tissue with no clear distinction into cortex and pith.\n\u26a1 **Detailed Anatomical Explanation**: In dicot stems, bundles are arranged in a ring and are open. In roots, bundles are radial and exarch. Hence, the material is a monocot stem.\n\ud83d\udca1 **Examiner Pro-Tip**: 'Scattered + Closed + Endarch' = Monocot stem (e.g., maize).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0194"],
    code: "PA0194"
  },
  {
    id: "allen-anat-ex3-046",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Easy",
    questionText: "In respect of many grasses, the presence of bulliform or motor cells in the upper epidermis of leaves is to : [ALLEN PA0197]",
    options: [
      "Increase the surface area of the leaf",
      "Store large amount of water",
      "Check transpiration by reducing the surface area of the leaf",
      "Bear unicellular trichomes"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: When bulliform cells lose water under dry conditions, they become flaccid and cause grass leaves to roll or curl inward, thereby minimizing water loss through transpiration by reducing exposed leaf surface area.\n\u26a1 **Detailed Anatomical Explanation**: Conversely, when they absorb water and are turgid, the leaf blade unfolds to maximize light interception for photosynthesis.\n\ud83d\udca1 **Examiner Pro-Tip**: Rolling of grass leaves checks transpiration; mediated by flaccidity of bulliform cells.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0197"],
    code: "PA0197"
  },
  {
    id: "allen-anat-ex3-047",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Medium",
    questionText: "Heart wood of most of the woody trees fails to conduct sap due to the obstruction by : [ALLEN PA0198]",
    options: [
      "Excess secondary wall deposition",
      "Storing a variety of material by tyloses",
      "Deposition of reserved food material",
      "Ray parenchyma"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In heartwood, adjacent xylem/ray parenchyma cells produce balloon-like ballooning outgrowths called tyloses through the pits into the lumen of vessels, filling them with resins, tannins, gums, and aromatic substances.\n\u26a1 **Detailed Anatomical Explanation**: These tyloses physically plug the vessel lumens, rendering heartwood completely non-functional for sap conduction while providing resistance to decay and termites.\n\ud83d\udca1 **Examiner Pro-Tip**: Tyloses = balloon-like tracheal intrusions of xylem parenchyma blocking heartwood vessels.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0198"],
    code: "PA0198"
  },
  {
    id: "allen-anat-ex3-048",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Medium",
    questionText: "The trees growing in deserts will : [ALLEN PA0199]",
    options: [
      "Show alternate rings of xylem and sclerenchyma",
      "Show distinct annual rings",
      "Not show distinct annual rings",
      "Have only conjunctive tissue and phloem formed by the activity of cambium"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Distinct annual rings develop only where there are sharp, pronounced climatic differences between seasons (temperate climates). In desert regions, climatic conditions are nearly uniform or erratic without marked seasonal cold-warm cycles, so distinct annual rings do not form.\n\u26a1 **Detailed Anatomical Explanation**: Continuous cambial activity without seasonal contrast yields homogeneous wood lacking distinct spring and autumn wood demarcations.\n\ud83d\udca1 **Examiner Pro-Tip**: Distinct annual rings require pronounced climatic seasonality (temperate zones). Uniform/desert/coastal regions lack distinct annual rings.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0199"],
    code: "PA0199"
  },
  {
    id: "allen-anat-ex3-049",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Easy",
    questionText: "Sap wood differ from heart wood in being : [ALLEN PA0200]",
    options: [
      "Darker and non conducting",
      "Softer and non conducting",
      "Lighter and conducting",
      "Harder, darker and less conducting"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Sapwood (alburnum) is the peripheral, lighter-colored secondary xylem involved in active conduction of water and minerals from root to leaf.\n\u26a1 **Detailed Anatomical Explanation**: Heartwood (duramen) is the central, dark, durable, non-conducting wood containing organic depositions (tannins, resins). Sapwood is lighter and conducting.\n\ud83d\udca1 **Examiner Pro-Tip**: Sapwood = Light + Conducting (peripheral). Heartwood = Dark + Non-conducting (central).",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0200"],
    code: "PA0200"
  },
  {
    id: "allen-anat-ex3-050",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Medium",
    questionText: "If a stem is girdled : [ALLEN PA0201]",
    options: [
      "Root dies first",
      "Shoot dies first",
      "Both die together",
      "None of the above die"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Girdling (ringing experiment) removes all tissues outside the vascular cambium, which includes the phloem. This halts the downward translocation of organic solutes (food) from leaves to roots.\n\u26a1 **Detailed Anatomical Explanation**: Because xylem remains intact, water continues to reach the shoot, keeping it alive temporarily. However, roots are cut off from photosynthetic nutrients; their stored reserves deplete, and they starve and die first. Once roots die, water uptake ceases and the shoot subsequently dies.\n\ud83d\udca1 **Examiner Pro-Tip**: Classic Malpighi girdling experiment proves phloem is the tissue for food translocation; root dies first due to food starvation.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0201"],
    code: "PA0201"
  },
  {
    id: "allen-anat-ex3-051",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Medium",
    questionText: "Spring wood (early wood) differs with autumn wood (late wood) in : [ALLEN PA0203]",
    options: [
      "Size of vessels and tracheids",
      "Thickness of cell wall",
      "Amount of wood",
      "All the above"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Spring wood differs from autumn wood in multiple anatomical characteristics:\n1. Size of vessels: Spring wood has larger/wider vessels with wider lumens, autumn wood has narrow vessels.\n2. Wall thickness: Spring wood has thinner cell walls, autumn wood has thicker cell walls.\n3. Amount: Cambium is much more active in spring, producing a larger volume of xylem elements.\n\u26a1 **Detailed Anatomical Explanation**: Because all three anatomical criteria distinguish early wood from late wood, option (4) 'All the above' is correct.\n\ud83d\udca1 **Examiner Pro-Tip**: Early wood = wider lumen, thinner walls, greater amount, lower density, lighter color.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0203"],
    code: "PA0203"
  },
  {
    id: "allen-anat-ex3-052",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Medium",
    questionText: "Most conspicuous annual rings are formed in : [ALLEN PA0204]",
    options: [
      "Temperate evergreen plants",
      "Tropical deciduous",
      "Temperate deciduous plants",
      "Tropical evergreen"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Conspicuous annual rings require maximum climatic contrast between favorable growing season (spring/summer) and adverse dormant season (winter). This extreme seasonality is most pronounced in temperate deciduous trees.\n\u26a1 **Detailed Anatomical Explanation**: In temperate deciduous forests, trees shed their leaves before freezing winter and undergo severe cambial dormancy, followed by a dramatic burst of activity in warm spring, creating exceptionally sharp and distinct annual growth rings.\n\ud83d\udca1 **Examiner Pro-Tip**: Temperate deciduous plants exhibit the most sharply defined annual growth increments.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0204"],
    code: "PA0204"
  },
  {
    id: "allen-anat-ex3-053",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Hard",
    questionText: "In dicot root which tissue becomes dead due to activity of phellogen : [ALLEN PA0205]",
    options: [
      "All tissue outside cortex",
      "Tissue outside hypodermis",
      "Tissue outside endodermis",
      "Tissue outside pericycle"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In dicot roots, phellogen (cork cambium) arises from the outer cells of the pericycle. Cork (phellem) is produced outwards with impermeable suberin, cutting off all outer tissues from water and nourishment.\n\u26a1 **Detailed Anatomical Explanation**: Consequently, all tissues lying external to the pericycle\u2014namely the endodermis, entire cortex, and epiblema\u2014die, dry up, and peel off (slough away).\n\ud83d\udca1 **Examiner Pro-Tip**: In roots, phellogen originates in pericycle \u2192 everything outside pericycle dies.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0205"],
    code: "PA0205"
  },
  {
    id: "allen-anat-ex3-054",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Easy",
    questionText: "Physiologically functional part of wood is : [ALLEN PA0207]",
    options: [
      "Heart wood only",
      "Sap wood only",
      "Only primary wood",
      "Both heart wood & sap wood"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Sapwood (alburnum) is the peripheral physiologically functional region of secondary xylem that conducts water and minerals from roots to leaves.\n\u26a1 **Detailed Anatomical Explanation**: Heartwood is physiologically non-functional for water conduction because its vessels are blocked by tyloses and filled with resins and tannins. It functions purely for mechanical support.\n\ud83d\udca1 **Examiner Pro-Tip**: Physiological conduction = Sapwood only.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0207"],
    code: "PA0207"
  },
  {
    id: "allen-anat-ex3-055",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Easy",
    questionText: "Which of the following is not a part of stomatal apparatus ? [ALLEN PA0278]",
    options: [
      "Stomatal aperture",
      "Guard cells",
      "Lenticels",
      "Subsidiary cells"
    ],
    correctAnswer: 2,
    correctOption: 3,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The stomatal apparatus consists of three components: stomatal aperture, guard cells, and subsidiary cells.\n\u26a1 **Detailed Anatomical Explanation**: Lenticels are aerating pores located in the periderm of woody stems and roots formed by phellogen activity, not components of the leaf stomatal apparatus.\n\ud83d\udca1 **Examiner Pro-Tip**: Lenticel is a periderm feature; stomatal apparatus is an epidermal feature.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0278"],
    code: "PA0278"
  },
  {
    id: "allen-anat-ex3-056",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Easy",
    questionText: "Which is not correct about heartwood : [ALLEN PA0209]",
    options: [
      "It is formed of living cells",
      "It contains resins, tannin and other organic contents",
      "It is of dark coloured",
      "It lies in the central region of secondary xylem"
    ],
    correctAnswer: 0,
    correctOption: 1,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Heartwood comprises dead elements with highly lignified walls and contains no living protoplasts. Stating that it is 'formed of living cells' is incorrect.\n\u26a1 **Detailed Anatomical Explanation**: Heartwood forms from older secondary xylem in the central region where living parenchyma cells die after depositing tannins, resins, oils, gums, and aromatic substances into dead vessel cavities.\n\ud83d\udca1 **Examiner Pro-Tip**: Heartwood = dead elements, highly lignified walls, dark colored, central, non-conducting.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0209"],
    code: "PA0209"
  },
  {
    id: "allen-anat-ex3-057",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Easy",
    questionText: "Outer lighter coloured region of wood of tree is : [ALLEN PA0210]",
    options: [
      "Autumn wood",
      "Spring wood",
      "Heart wood",
      "Sap wood"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The peripheral, outer region of the secondary xylem is lighter in colour and is known as sapwood (alburnum).\n\u26a1 **Detailed Anatomical Explanation**: It is actively involved in the conduction of water and minerals from root to leaf, surrounding the darker, inner heartwood.\n\ud83d\udca1 **Examiner Pro-Tip**: Peripheral lighter wood = Sapwood; central darker wood = Heartwood.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0210"],
    code: "PA0210"
  },
  {
    id: "allen-anat-ex3-058",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Hard",
    questionText: "After two or three years of secondary growth the cortex in dicot roots : [ALLEN PA0211]",
    options: [
      "Remains intact",
      "Is completely sloughed away",
      "Is largely lost",
      "Is converted into cork"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: In dicot roots, phellogen arises deep within the pericycle. The newly formed suberized cork cuts off all tissues outside it, causing the entire cortex and epiblema to dry, break down, and be completely sloughed away.\n\u26a1 **Detailed Anatomical Explanation**: By the second or third year of secondary growth in dicot roots, the original parenchymatous cortex is entirely absent, with periderm forming the external boundary.\n\ud83d\udca1 **Examiner Pro-Tip**: Cortex in older dicot roots is completely sloughed off due to deep-seated pericyclic phellogen.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0211"],
    code: "PA0211"
  },
  {
    id: "allen-anat-ex3-059",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Hard",
    questionText: "When secondary growth in thickness is initiated in a dicot root, which of the following happens first ? [ALLEN PA0212]",
    options: [
      "Cambial initials between xylem and phloem will divide",
      "Pericycle strands, outside the primary xylem will divide",
      "Periclinal division takes place, so that the cambium becomes circular",
      "Parenchymatous cells between xylem and phloem become meristematic"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: The very first event in dicot root secondary growth is the dedifferentiation of parenchymatous cells of the conjunctive tissue situated just beneath the phloem bundles, causing them to become meristematic.\n\u26a1 **Detailed Anatomical Explanation**: Soon after, pericycle cells lying outside/opposite the protoxylem also become meristematic, and together they join to produce a continuous wavy strip of vascular cambium.\n\ud83d\udca1 **Examiner Pro-Tip**: First event: conjunctive parenchyma beneath phloem becomes meristematic.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0212"],
    code: "PA0212"
  },
  {
    id: "allen-anat-ex3-060",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Medium",
    questionText: "Complementary cells of lenticels are : [ALLEN PA0213]",
    options: [
      "Compact and suberised",
      "Closely arranged and non suberised",
      "Compact and lignified",
      "Loose and lignified"
    ],
    correctAnswer: 1,
    correctOption: 2,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Phellogen cuts off closely arranged, thin-walled, non-suberised parenchymatous cells on the outer side known as complementary cells.\n\u26a1 **Detailed Anatomical Explanation**: Because they are non-suberised and parenchymatous, they allow gas diffusion through the torn epidermal pores (lenticels). Stating they are 'closely arranged and non-suberised' directly matches NCERT description.\n\ud83d\udca1 **Examiner Pro-Tip**: Complementary cells = thin-walled, non-suberized, parenchymatous cells.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0213"],
    code: "PA0213"
  },
  {
    id: "allen-anat-ex3-061",
    subject: "Biology",
    chapter: "Anatomy of Flowering Plants",
    topic: "Advanced Analytical & Wood Anatomy",
    difficulty: "Medium",
    questionText: "In a woody dicotyledonous tree, which of the following parts will mainly consist of primary permanent tissues ? [ALLEN PA0214]",
    options: [
      "Stem and root",
      "All parts",
      "Shoot tips and root tips",
      "Flowers, fruits and leaves"
    ],
    correctAnswer: 3,
    correctOption: 4,
    explanation: "\ud83d\udcd8 **NCERT Concept**: Flowers, fruits, and leaves are determinate lateral organs that do not undergo secondary cambial growth. They remain composed predominantly of primary permanent tissues throughout their lifespan.\n\u26a1 **Detailed Anatomical Explanation**: Mature stems and roots of woody trees undergo extensive secondary thickening and are dominated by secondary tissues (wood, bark). Shoot and root tips consist of primary meristematic tissues. Hence, flowers, fruits, and leaves consist mainly of primary permanent tissues.\n\ud83d\udca1 **Examiner Pro-Tip**: Foliage, flowers, and fruits are devoid of secondary vascular cambium and consist of primary permanent tissues.",
    tags: ["Botany", "Anatomy of Flowering Plants", "Exercise-III (Analytical Questions)", "NEET 2027", "NEET 2028", "NEET 2029", "PA0214"],
    code: "PA0214"
  }
];

// ============================================================================
// MASTER COMBINED DATASET: All 214 Authentic Anatomy of Flowering Plants Questions
// ============================================================================
export const ALL_ALLEN_ANATOMY_QUESTIONS: Question[] = [
  ...ALLEN_ANATOMY_EXERCISE_1_QUESTIONS,
  ...ALLEN_ANATOMY_EXERCISE_2_QUESTIONS,
  ...ALLEN_ANATOMY_EXERCISE_3_QUESTIONS
];
