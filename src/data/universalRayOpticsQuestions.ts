import { Question } from '../types';

export const UNIVERSAL_PLANE_MIRROR_QUESTIONS: Question[] = [
  {
    "id": "univ-pm-q1",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Reflection at Plane Mirrors & Deviation",
    "difficulty": "Medium",
    "questionText": "Two vertical plane mirrors are inclined at an angle of 60\u00b0 with each other. A ray of light travelling horizontally is reflected first from one mirror and then from the other. The resultant deviation is:",
    "options": [
      "60\u00b0",
      "120\u00b0",
      "180\u00b0",
      "240\u00b0"
    ],
    "correctAnswer": 3,
    "diagramSvg": "<svg viewBox=\"0 0 320 200\" class=\"w-full h-48 mx-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"200\" fill=\"#0F172A\" rx=\"8\"/><line x1=\"60\" y1=\"170\" x2=\"260\" y2=\"170\" stroke=\"#38BDF8\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"170\" x2=\"160\" y2=\"20\" stroke=\"#38BDF8\" stroke-width=\"4\" stroke-linecap=\"round\"/><text x=\"100\" y=\"160\" fill=\"#FDE047\" font-size=\"12\" font-weight=\"bold\">\u03b8 = 60\u00b0</text><path d=\"M80,170 A30,30 0 0,1 75,145\" stroke=\"#FDE047\" stroke-width=\"2\" fill=\"none\"/><line x1=\"20\" y1=\"130\" x2=\"110\" y2=\"95\" stroke=\"#4ADE80\" stroke-width=\"3\"/><polygon points=\"110,95 100,90 102,100\" fill=\"#4ADE80\"/><line x1=\"110\" y1=\"95\" x2=\"180\" y2=\"170\" stroke=\"#4ADE80\" stroke-width=\"3\"/><polygon points=\"150,137 142,130 148,142\" fill=\"#4ADE80\"/><line x1=\"180\" y1=\"170\" x2=\"290\" y2=\"140\" stroke=\"#F43F5E\" stroke-width=\"3\"/><polygon points=\"240,154 230,152 235,162\" fill=\"#F43F5E\"/><text x=\"120\" y=\"190\" fill=\"#94A3B8\" font-size=\"11\">Total Deviation \u03b4 = 360\u00b0 - 2\u03b8 = 240\u00b0</text></svg>",
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nWhen a ray of light undergoes two successive reflections at two plane mirrors inclined at an angle \u03b8 to each other, the total deviation \u03b4 suffered by the ray is independent of the initial angle of incidence and depends strictly on the angle between the mirrors.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Angle between two mirrors = \u03b8 = 60\u00b0.\n2. Deviation at first mirror: \u03b4\u2081 = 180\u00b0 - 2i\u2081.\n3. Deviation at second mirror: \u03b4\u2082 = 180\u00b0 - 2i\u2082.\n4. Total deviation \u03b4 = \u03b4\u2081 + \u03b4\u2082 = 360\u00b0 - 2(i\u2081 + i\u2082).\n5. From the triangle formed by the two mirrors and the ray path, the sum of glancing angles or angles of incidence satisfies i\u2081 + i\u2082 = \u03b8 = 60\u00b0.\n6. Substituting:\n   \u03b4 = 360\u00b0 - 2\u03b8 = 360\u00b0 - 2(60\u00b0) = 360\u00b0 - 120\u00b0 = 240\u00b0.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nTotal deviation \u03b4 = 360\u00b0 - 2\u03b8 in the same sense of rotation (clockwise/anticlockwise). If the acute angle of deflection is required, it is 360\u00b0 - 240\u00b0 = 120\u00b0.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Deviation",
      "Universal Self-Scorer",
      "NEET 2027"
    ]
  },
  {
    "id": "univ-pm-q2",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Reflection at Plane Mirrors & Image Formation",
    "difficulty": "Easy",
    "questionText": "A plane mirror reflects a pencil of light to form a real image. Then the pencil of light incident on the mirror is: [MP PMT 1997; DCE 2001, 03]",
    "options": [
      "Parallel",
      "Convergent",
      "Divergent",
      "None of the above"
    ],
    "correctAnswer": 1,
    "diagramSvg": "<svg viewBox=\"0 0 320 180\" class=\"w-full h-44 mx-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#0F172A\" rx=\"8\"/><line x1=\"160\" y1=\"20\" x2=\"160\" y2=\"160\" stroke=\"#38BDF8\" stroke-width=\"5\"/><text x=\"170\" y=\"35\" fill=\"#94A3B8\" font-size=\"11\">Plane Mirror</text><line x1=\"40\" y1=\"40\" x2=\"160\" y2=\"70\" stroke=\"#4ADE80\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"160\" y2=\"110\" stroke=\"#4ADE80\" stroke-width=\"2.5\"/><line x1=\"160\" y1=\"70\" x2=\"220\" y2=\"90\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"160\" y1=\"110\" x2=\"220\" y2=\"90\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><circle cx=\"220\" cy=\"90\" r=\"4\" fill=\"#FDE047\"/><text x=\"228\" y=\"94\" fill=\"#FDE047\" font-size=\"11\">Virtual Object (O)</text><line x1=\"160\" y1=\"70\" x2=\"100\" y2=\"90\" stroke=\"#F43F5E\" stroke-width=\"2.5\"/><line x1=\"160\" y1=\"110\" x2=\"100\" y2=\"90\" stroke=\"#F43F5E\" stroke-width=\"2.5\"/><circle cx=\"100\" cy=\"90\" r=\"5\" fill=\"#F43F5E\"/><text x=\"60\" y=\"85\" fill=\"#F43F5E\" font-size=\"11\" font-weight=\"bold\">Real Image (I)</text></svg>",
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nA plane mirror always forms an image that is conjugate to the object:\n- For a real (divergent) point object, the reflected rays diverge and form a **virtual image** behind the mirror.\n- Conversely, if the incident pencil of light is **convergent** (pointing toward a virtual object behind the mirror), the reflected rays actually intersect in front of the mirror, forming a **real image**.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Incident rays converge toward virtual object at distance +u (behind mirror).\n2. By mirror formula for plane mirror (f = \u221e):\n   1/v + 1/u = 1/\u221e = 0 \u27f9 v = -u.\n3. Since u is behind mirror (+u), v is in front of mirror (-u), meaning reflected rays physically converge.\n4. Hence, real image is formed only when the incident pencil of light is **convergent**.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nRemember: Divergent incident beam \u27f9 Virtual Image. Convergent incident beam \u27f9 Real Image.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Real Image",
      "MP PMT 1997",
      "DCE 2001",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q3",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Reflection at Plane Mirrors & Deviation",
    "difficulty": "Easy",
    "questionText": "What should be the angle between two plane mirrors so that whatever be the angle of incidence, the incident ray and the reflected ray from the two mirrors be parallel to each other? [KCET 1994; SCRA 1994]",
    "options": [
      "60\u00b0",
      "90\u00b0",
      "120\u00b0",
      "175\u00b0"
    ],
    "correctAnswer": 1,
    "diagramSvg": "<svg viewBox=\"0 0 320 190\" class=\"w-full h-44 mx-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"190\" fill=\"#0F172A\" rx=\"8\"/><line x1=\"60\" y1=\"160\" x2=\"260\" y2=\"160\" stroke=\"#38BDF8\" stroke-width=\"4\"/><line x1=\"60\" y1=\"160\" x2=\"60\" y2=\"20\" stroke=\"#38BDF8\" stroke-width=\"4\"/><rect x=\"60\" y=\"140\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"#FDE047\" stroke-width=\"1.5\"/><text x=\"88\" y=\"152\" fill=\"#FDE047\" font-size=\"11\">90\u00b0</text><line x1=\"220\" y1=\"30\" x2=\"160\" y2=\"160\" stroke=\"#4ADE80\" stroke-width=\"3\"/><polygon points=\"185,105 178,95 190,100\" fill=\"#4ADE80\"/><line x1=\"160\" y1=\"160\" x2=\"60\" y2=\"90\" stroke=\"#FBBF24\" stroke-width=\"3\"/><polygon points=\"105,122 110,132 100,128\" fill=\"#FBBF24\"/><line x1=\"60\" y1=\"90\" x2=\"220\" y2=\"20\" stroke=\"#F43F5E\" stroke-width=\"3\"/><polygon points=\"140,55 130,55 136,65\" fill=\"#F43F5E\"/><text x=\"140\" y=\"180\" fill=\"#94A3B8\" font-size=\"11\">Antiparallel: \u03b4 = 180\u00b0 \u27f9 \u03b8 = 90\u00b0</text></svg>",
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nWhen an incident ray and emergent reflected ray are parallel (or antiparallel) to each other, the total angular deviation suffered by the ray is \u03b4 = 180\u00b0.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Total deviation after two successive reflections:\n   \u03b4 = 360\u00b0 - 2\u03b8.\n2. For the emergent ray to travel antiparallel/parallel to the incident ray:\n   \u03b4 = 180\u00b0.\n3. Equating:\n   360\u00b0 - 2\u03b8 = 180\u00b0\n   2\u03b8 = 180\u00b0 \u27f9 \u03b8 = 90\u00b0.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nThis is the fundamental working principle of the optical square and retroreflectors (corner reflectors) used on bicycle reflectors, radar reflectors, and Apollo lunar laser retroreflectors.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Retroreflector",
      "KCET 1994",
      "SCRA 1994",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q4",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Rotation of Plane Mirror",
    "difficulty": "Easy",
    "questionText": "A plane mirror reflecting a ray of incident light is rotated through an angle \u03b8 about an axis through the point of incidence in the plane of the mirror perpendicular to the plane of incidence, then: [NCERT 1978; CPMT 1991]",
    "options": [
      "The reflected ray does not rotate",
      "The reflected ray rotates through an angle \u03b8",
      "The reflected ray rotates through an angle 2\u03b8",
      "The incident ray is fixed"
    ],
    "correctAnswer": 2,
    "diagramSvg": "<svg viewBox=\"0 0 320 180\" class=\"w-full h-44 mx-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#0F172A\" rx=\"8\"/><line x1=\"60\" y1=\"140\" x2=\"260\" y2=\"140\" stroke=\"#64748B\" stroke-width=\"3\" stroke-dasharray=\"4,3\"/><line x1=\"70\" y1=\"160\" x2=\"250\" y2=\"115\" stroke=\"#38BDF8\" stroke-width=\"4\"/><text x=\"255\" y=\"115\" fill=\"#38BDF8\" font-size=\"11\">M\u2082 (rotated by \u03b8)</text><line x1=\"80\" y1=\"40\" x2=\"160\" y2=\"138\" stroke=\"#4ADE80\" stroke-width=\"2.5\"/><text x=\"70\" y=\"35\" fill=\"#4ADE80\" font-size=\"11\">Fixed Incident Ray</text><line x1=\"160\" y1=\"138\" x2=\"240\" y2=\"40\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/><text x=\"245\" y=\"45\" fill=\"#94A3B8\" font-size=\"10\">R\u2081 (Original)</text><line x1=\"160\" y1=\"138\" x2=\"270\" y2=\"65\" stroke=\"#F43F5E\" stroke-width=\"3\"/><text x=\"275\" y=\"70\" fill=\"#F43F5E\" font-size=\"11\">R\u2082 (Turned 2\u03b8)</text></svg>",
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nIf a plane mirror is rotated by an angle \u03b8 keeping the incident ray fixed, the normal to the mirror rotates by \u03b8, causing the angle of incidence to change by \u03b8. Consequently, the reflected ray rotates by 2\u03b8 in the same direction.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Let the original angle of incidence be i.\n   Angle between incident and reflected ray = 2i.\n2. When mirror rotates by angle \u03b8, the normal rotates by \u03b8.\n3. The new angle of incidence becomes i' = i + \u03b8.\n4. The new angle of reflection becomes r' = i + \u03b8.\n5. Total angle between incident ray and new reflected ray = 2(i + \u03b8) = 2i + 2\u03b8.\n6. Since the incident ray is fixed, the angular shift of the reflected ray = (2i + 2\u03b8) - 2i = 2\u03b8.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\n- Mirror rotated by \u03b8 (fixed ray) \u27f9 Reflected ray rotates by 2\u03b8.\n- Incident ray rotated by \u03b8 (fixed mirror) \u27f9 Reflected ray rotates by \u03b8 in opposite direction.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Mirror Rotation",
      "NCERT 1978",
      "CPMT 1991",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q5",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Relative Motion in Plane Mirror",
    "difficulty": "Easy",
    "questionText": "A plane mirror is approaching you at a speed of 10 cm/sec. You can see your image in it. At what speed will your image approach you? [CPMT 1974]",
    "options": [
      "10 cm/sec",
      "5 cm/sec",
      "20 cm/sec",
      "15 cm/sec"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nFor a stationary object, if a plane mirror moves with velocity v_m along the normal toward or away from the object, the image moves with twice the velocity of the mirror (v_image = 2 \u00b7 v_m) in the same direction.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Let the stationary observer be at coordinate x = 0.\n2. Let mirror position at time t be x_m(t).\n3. Distance of observer from mirror = x_m.\n4. Position of image formed behind mirror = x_I = x_m + x_m = 2x_m.\n5. Differentiating with respect to time:\n   v_image = dx_I / dt = 2 (dx_m / dt) = 2 \u00b7 v_mirror.\n6. Given v_mirror = 10 cm/sec:\n   v_image = 2 \u00d7 10 cm/sec = 20 cm/sec.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\n- Stationary object + Mirror moving with speed v \u27f9 Image approaches observer at 2v.\n- Stationary mirror + Object moving toward mirror with speed v \u27f9 Image approaches observer at 2v.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Relative Motion",
      "CPMT 1974",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q6",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Multiple Images in Inclined Mirrors",
    "difficulty": "Easy",
    "questionText": "A light bulb is placed between two plane mirrors inclined at an angle of 60\u00b0. The number of images formed are: [NCERT 1980; CPMT 1996, 97; AIIMS 1997; AIEEE 2002; MP PMT 2004]",
    "options": [
      "6",
      "2",
      "5",
      "4"
    ],
    "correctAnswer": 2,
    "diagramSvg": "<svg viewBox=\"0 0 320 200\" class=\"w-full h-48 mx-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"200\" fill=\"#0F172A\" rx=\"8\"/><circle cx=\"160\" cy=\"100\" r=\"70\" stroke=\"#334155\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\" fill=\"none\"/><line x1=\"160\" y1=\"100\" x2=\"230\" y2=\"100\" stroke=\"#38BDF8\" stroke-width=\"3\"/><line x1=\"160\" y1=\"100\" x2=\"195\" y2=\"39\" stroke=\"#38BDF8\" stroke-width=\"3\"/><circle cx=\"190\" cy=\"80\" r=\"5\" fill=\"#FDE047\"/><text x=\"198\" y=\"80\" fill=\"#FDE047\" font-size=\"10\">Object</text><circle cx=\"190\" cy=\"120\" r=\"4\" fill=\"#38BDF8\"/><circle cx=\"130\" cy=\"139\" r=\"4\" fill=\"#38BDF8\"/><circle cx=\"95\" cy=\"80\" r=\"4\" fill=\"#38BDF8\"/><circle cx=\"130\" cy=\"61\" r=\"4\" fill=\"#38BDF8\"/><circle cx=\"100\" cy=\"120\" r=\"4\" fill=\"#38BDF8\"/><text x=\"100\" y=\"190\" fill=\"#94A3B8\" font-size=\"11\">n = (360\u00b0/60\u00b0) - 1 = 6 - 1 = 5 Images</text></svg>",
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nWhen an object is placed between two plane mirrors inclined at an angle \u03b8, multiple images are formed lying on a circle centered at the intersection of the two mirrors.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Compute the ratio m = 360\u00b0 / \u03b8.\n   m = 360\u00b0 / 60\u00b0 = 6.\n2. Since m = 6 is an **even integer**, the number of images formed is always:\n   n = m - 1, regardless of whether the object lies symmetrically or asymmetrically.\n3. n = 6 - 1 = 5 images.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\n- If 360\u00b0/\u03b8 is even \u27f9 n = (360\u00b0/\u03b8) - 1 (Always).\n- If 360\u00b0/\u03b8 is odd:\n  \u2022 Symmetrical placement \u27f9 n = (360\u00b0/\u03b8) - 1\n  \u2022 Asymmetrical placement \u27f9 n = 360\u00b0/\u03b8.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Multiple Images",
      "AIEEE 2002",
      "AIIMS 1997",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q7",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Plane Mirror Image Position",
    "difficulty": "Easy",
    "questionText": "It is desired to photograph the image of an object placed at a distance of 3 m from the plane mirror. The camera which is at a distance of 4.5 m from the mirror should be focussed for a distance of: [NCERT 1971]",
    "options": [
      "3 m",
      "4.5 m",
      "6 m",
      "7.5 m"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nThe image formed by a plane mirror is located symmetrically behind the mirror at the same perpendicular distance as the object in front of the mirror. A camera must be focused at the actual geometric distance from the camera lens to the virtual image.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Distance of object from mirror = d_object = 3 m in front.\n2. Distance of image from mirror = d_image = 3 m behind mirror.\n3. Distance of camera from mirror = d_camera = 4.5 m in front.\n4. Total optical distance between camera and image:\n   D = d_camera + d_image = 4.5 m + 3 m = 7.5 m.\n5. Therefore, the camera lens must be focused for a distance of 7.5 m.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nDo not confuse camera distance to object (4.5 - 3 = 1.5 m) with camera distance to image (4.5 + 3 = 7.5 m). The camera is capturing the image, which is behind the mirror!",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Focusing Distance",
      "NCERT 1971",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q8",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Thick Plane Mirror Reflection",
    "difficulty": "Medium",
    "questionText": "A thick plane mirror shows a number of images of the filament of an electric bulb. Of these, the brightest image is the: [RPMT 2003]",
    "options": [
      "First",
      "Second",
      "Fourth",
      "Last"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nIn a thick glass plane mirror with a silvered back surface:\n- The **first image** is formed by weak partial reflection from the front unsilvered glass-air surface (~4% to 10% of light intensity).\n- The remaining ~90% transmitted light travels through the glass and reflects from the highly polished silvered back surface, forming the **second image**.\n- Since ~80-85% of total light participates in forming the second image, it is by far the **brightest**.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Incident intensity = I\u2080.\n2. 1st surface reflection: I\u2081 \u2248 0.04 I\u2080 (faint).\n3. Transmitted intensity into glass: I_trans \u2248 0.96 I\u2080.\n4. Silvered back surface reflection: I\u2082 \u2248 0.90 \u00d7 0.96 I\u2080 \u2248 0.86 I\u2080 (brightest!).\n5. Subsequent reflections inside the glass yield very faint 3rd, 4th images of negligible intensity.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nAlways mark the **Second** image as the brightest for silvered thick mirrors!",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Thick Mirror",
      "RPMT 2003",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q9",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Minimum Size of Mirror to View Full Image",
    "difficulty": "Easy",
    "questionText": "A man is 180 cm tall and his eyes are 10 cm below the top of his head. In order to see his entire height right from toe to head, he uses a plane mirror kept at a distance of 1 m from him. The minimum length of the plane mirror required is: [MP PMT 1993; DPMT 2001]",
    "options": [
      "180 cm",
      "90 cm",
      "85 cm",
      "170 cm"
    ],
    "correctAnswer": 1,
    "diagramSvg": "<svg viewBox=\"0 0 320 180\" class=\"w-full h-44 mx-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#0F172A\" rx=\"8\"/><line x1=\"60\" y1=\"20\" x2=\"60\" y2=\"160\" stroke=\"#38BDF8\" stroke-width=\"4\"/><circle cx=\"60\" cy=\"30\" r=\"4\" fill=\"#FDE047\"/><text x=\"45\" y=\"32\" fill=\"#FDE047\" font-size=\"9\">Eye</text><text x=\"25\" y=\"90\" fill=\"#38BDF8\" font-size=\"10\">H=180 cm</text><line x1=\"180\" y1=\"25\" x2=\"180\" y2=\"115\" stroke=\"#F43F5E\" stroke-width=\"5\"/><text x=\"190\" y=\"70\" fill=\"#F43F5E\" font-size=\"11\" font-weight=\"bold\">L = H/2 = 90 cm</text><line x1=\"60\" y1=\"20\" x2=\"180\" y2=\"25\" stroke=\"#A855F7\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/><line x1=\"60\" y1=\"30\" x2=\"180\" y2=\"25\" stroke=\"#A855F7\" stroke-width=\"1.5\"/><line x1=\"60\" y1=\"160\" x2=\"180\" y2=\"115\" stroke=\"#22C55E\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/><line x1=\"60\" y1=\"30\" x2=\"180\" y2=\"115\" stroke=\"#22C55E\" stroke-width=\"1.5\"/><text x=\"100\" y=\"175\" fill=\"#94A3B8\" font-size=\"10\">Independent of distance from mirror!</text></svg>",
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nTo view one's complete image from head to toe in a plane mirror, the minimum vertical length of the mirror must be exactly half the height of the person (H/2), irrespective of the distance between the person and the mirror.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Height of the person H = 180 cm.\n2. By similar triangles formed by the light rays reflecting from the top and bottom of the mirror into the eye:\n   L_min = H / 2.\n3. L_min = 180 cm / 2 = 90 cm.\n4. The position of the eyes and the distance of 1 m are redundant distractors, because the factor 1/2 holds for any eye height and distance.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nThe top edge of the mirror must be placed at a height midway between the eyes and the top of the head, and the bottom edge midway between the eyes and the feet.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Full Height Mirror",
      "MP PMT 1993",
      "DPMT 2001",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q10",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Images in Mutually Perpendicular Mirrors",
    "difficulty": "Medium",
    "questionText": "A person is in a room whose ceiling and two adjacent walls are mirrors. How many images are formed? [AFMC 2002]",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nWhen three mutually perpendicular plane mirrors enclose a space (forming a 3D corner reflector system along the x, y, and z axes), the total number of images formed is given by 2\u00b3 - 1 = 7.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Two adjacent vertical walls form a 90\u00b0 dihedral pair.\n   Images formed by two walls alone = (360\u00b0/90\u00b0) - 1 = 4 - 1 = 3 images.\n2. The ceiling mirror reflects:\n   - The original person (1 image).\n   - The 3 images formed by the two vertical walls (3 images).\n3. Total number of images = 3 (from walls) + 1 (from ceiling) + 3 (reflected by ceiling) = 7 images.\n4. Formula for n mutually perpendicular planes: N = 2\u207f - 1.\n   Here n = 3 \u27f9 N = 2\u00b3 - 1 = 8 - 1 = 7 images.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nDo not count the real person! Total observable representations = 2\u00b3 = 8, of which 1 is the real object and 7 are virtual images.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Mutually Perpendicular Mirrors",
      "AFMC 2002",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q11",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Reflection Geometry with Horizontal Mirror",
    "difficulty": "Medium",
    "questionText": "When a plane mirror is placed horizontally on a level ground at a distance of 60 m from the foot of a tower, the top of the tower and its image in the mirror subtend an angle of 90\u00b0 at the eye. The height of the tower will be: [CPMT 1984]",
    "options": [
      "30 m",
      "60 m",
      "90 m",
      "120 m"
    ],
    "correctAnswer": 1,
    "diagramSvg": "<svg viewBox=\"0 0 320 190\" class=\"w-full h-44 mx-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"190\" fill=\"#0F172A\" rx=\"8\"/><line x1=\"40\" y1=\"100\" x2=\"280\" y2=\"100\" stroke=\"#64748B\" stroke-width=\"2\"/><line x1=\"240\" y1=\"20\" x2=\"240\" y2=\"100\" stroke=\"#38BDF8\" stroke-width=\"4\"/><text x=\"245\" y=\"60\" fill=\"#38BDF8\" font-size=\"11\" font-weight=\"bold\">Tower (h)</text><line x1=\"240\" y1=\"100\" x2=\"240\" y2=\"180\" stroke=\"#38BDF8\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/><text x=\"245\" y=\"145\" fill=\"#94A3B8\" font-size=\"10\">Image (h)</text><line x1=\"120\" y1=\"100\" x2=\"160\" y2=\"100\" stroke=\"#FDE047\" stroke-width=\"4\"/><circle cx=\"140\" cy=\"98\" r=\"4\" fill=\"#F43F5E\"/><text x=\"120\" y=\"85\" fill=\"#F43F5E\" font-size=\"10\">Eye / Mirror</text><line x1=\"140\" y1=\"98\" x2=\"240\" y2=\"20\" stroke=\"#4ADE80\" stroke-width=\"2\"/><line x1=\"140\" y1=\"98\" x2=\"240\" y2=\"180\" stroke=\"#4ADE80\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/><text x=\"160\" y=\"70\" fill=\"#FDE047\" font-size=\"11\">45\u00b0</text><text x=\"160\" y=\"130\" fill=\"#FDE047\" font-size=\"11\">45\u00b0</text><text x=\"80\" y=\"125\" fill=\"#94A3B8\" font-size=\"11\">d = 60 m \u27f9 h = 60 m</text></svg>",
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nA horizontal plane mirror reflects the top of a vertical tower to an image located at equal depth h below the ground level.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Distance from foot of tower to mirror/eye: d = 60 m.\n2. Height of tower above ground = h.\n3. Image of top of tower is at depth h below ground.\n4. By symmetry, the top of the tower and its image make equal angles \u03b8 with the horizontal.\n5. Total angle subtended at the eye:\n   2\u03b8 = 90\u00b0 \u27f9 \u03b8 = 45\u00b0.\n6. In the right-angled triangle formed by the tower, ground, and line of sight:\n   tan \u03b8 = h / d\n   tan 45\u00b0 = h / 60\n   1 = h / 60 \u27f9 h = 60 m.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\ntan 45\u00b0 = 1 is the signature clue in trigonometry problems! Whenever total subtended angle is 90\u00b0 between symmetric object and image, h = d.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Reflection Geometry",
      "CPMT 1984",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q12",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Deviation by Single Plane Mirror",
    "difficulty": "Easy",
    "questionText": "A ray of light incidents on a plane mirror at an angle of 30\u00b0. The deviation produced in the ray is:",
    "options": [
      "30\u00b0",
      "60\u00b0",
      "90\u00b0",
      "120\u00b0"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nThe angle of deviation \u03b4 produced by reflection at a single plane mirror is the angle between the initial direction of propagation and the reflected ray: \u03b4 = 180\u00b0 - 2i.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Angle of incidence i = 30\u00b0.\n2. Angle of reflection r = i = 30\u00b0.\n3. Deviation \u03b4 = 180\u00b0 - (i + r) = 180\u00b0 - 2i.\n4. \u03b4 = 180\u00b0 - 2(30\u00b0) = 180\u00b0 - 60\u00b0 = 120\u00b0.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nNotice the distinction:\n- Deviation = 180\u00b0 - 2i.\n- Angle between incident and reflected ray = 2i = 60\u00b0.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Deviation",
      "Universal Self-Scorer",
      "NEET 2027"
    ]
  },
  {
    "id": "univ-pm-q13",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Normal Incidence",
    "difficulty": "Easy",
    "questionText": "A ray of light is incidenting normally on a plane mirror. The angle of reflection will be: [MP PET 2000]",
    "options": [
      "0\u00b0",
      "90\u00b0",
      "Will not be reflected",
      "None of the above"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nThe angle of incidence is defined as the angle between the incident ray and the normal to the reflecting surface.\n\n\u26a1 **Step-by-Step Derivation:**\n1. For normal incidence, the incident ray is along the normal.\n2. Therefore, angle of incidence i = 0\u00b0.\n3. By the law of reflection, angle of reflection r = i = 0\u00b0.\n4. The ray retraces its path back along the normal.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nStudents often confuse normal incidence with grazing incidence:\n- Normal incidence: angle with surface = 90\u00b0, angle with normal = 0\u00b0 (i = 0\u00b0).\n- Grazing incidence: angle with surface = 0\u00b0, angle with normal = 90\u00b0 (i = 90\u00b0).",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Normal Incidence",
      "MP PET 2000",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q14",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Phase Change upon Reflection",
    "difficulty": "Easy",
    "questionText": "When light wave suffers reflection at the interface from air to glass, the change in phase of the reflected wave is equal to: [CPMT 1991; J & KCET 2004]",
    "options": [
      "0",
      "\u03c0/2",
      "\u03c0",
      "2\u03c0"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nAccording to Stokes' relations and wave mechanics, when a wave reflects from the boundary of an optically denser medium (higher refractive index, like air to glass), it undergoes a phase reversal of \u03c0 radians (180\u00b0), equivalent to a path difference of \u03bb/2.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Medium 1 (air): n\u2081 = 1.\n2. Medium 2 (glass): n\u2082 \u2248 1.5 > n\u2081.\n3. Amplitude reflection coefficient r = (n\u2081 - n\u2082) / (n\u2081 + n\u2082).\n4. Since n\u2082 > n\u2081, r is negative, signifying a phase shift of \u03c0.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nReflection from denser medium \u27f9 Phase change = \u03c0 (Path change = \u03bb/2).\nReflection from rarer medium \u27f9 Phase change = 0 (Path change = 0).",
    "tags": [
      "Ray Optics",
      "Wave Optics",
      "Phase Shift",
      "CPMT 1991",
      "J & KCET 2004",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q15",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Corner Cube 3D Reflection",
    "difficulty": "Medium",
    "questionText": "A ray is reflected in turn by three plane mirrors mutually at right angles to each other. The angle between the incident and the reflected rays is: [Roorkee 1995]",
    "options": [
      "90\u00b0",
      "60\u00b0",
      "180\u00b0",
      "None of these"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nIn a 3D corner cube reflector composed of three mutually perpendicular mirrors (along xy, yz, and zx planes), each reflection reverses the sign of the normal component of the ray's unit vector.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Let the incident ray unit vector be:\n   u\u0302_inc = a i\u0302 + b j\u0302 + c k\u0302.\n2. Reflection from mirror in yz-plane reverses x-component:\n   u\u0302\u2081 = -a i\u0302 + b j\u0302 + c k\u0302.\n3. Reflection from mirror in xz-plane reverses y-component:\n   u\u0302\u2082 = -a i\u0302 - b j\u0302 + c k\u0302.\n4. Reflection from mirror in xy-plane reverses z-component:\n   u\u0302_ref = -a i\u0302 - b j\u0302 - c k\u0302 = -(a i\u0302 + b j\u0302 + c k\u0302) = -u\u0302_inc.\n5. Since u\u0302_ref = -u\u0302_inc, the emergent ray is antiparallel to the incident ray.\n6. The angle between incident and reflected ray is 180\u00b0.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nCorner reflectors always return the ray parallel to its incoming path in 3D space, which is why they are placed on the Moon for lunar laser ranging!",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Corner Reflector",
      "Roorkee 1995",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q16",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Lateral Inversion in Perpendicular Mirrors",
    "difficulty": "Medium",
    "questionText": "Two plane mirrors are at right angles to each other. A man stands between them and combs his hair with his right hand. In how many of the images will he be seen using his right hand? [MP PMT 1995; UPSEAT 2001]",
    "options": [
      "None",
      "1",
      "2",
      "3"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\n- An odd number of reflections (1 reflection) produces **lateral inversion** (right hand appears as left hand).\n- An even number of reflections (2 successive reflections) undergoes **double inversion**, which restores the original parity (right hand appears as right hand).\n\n\u26a1 **Step-by-Step Derivation:**\n1. For two mirrors at 90\u00b0, number of images n = (360\u00b0/90\u00b0) - 1 = 3 images.\n2. Image 1: Formed by single reflection in mirror 1 \u27f9 laterally inverted (left hand).\n3. Image 2: Formed by single reflection in mirror 2 \u27f9 laterally inverted (left hand).\n4. Image 3: Formed by two successive reflections (one in each mirror) \u27f9 double lateral inversion = erect/non-inverted parity (right hand!).\n5. Thus, he sees himself using his right hand in exactly **1** image.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\n- Single reflection: Inverts handedness.\n- Double reflection: Preserves handedness.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Lateral Inversion",
      "MP PMT 1995",
      "UPSEAT 2001",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q17",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Image Size under Mirror Rotation",
    "difficulty": "Easy",
    "questionText": "When a plane mirror is rotated through an angle \u03b8 then the reflected ray turns through the angle 2\u03b8, then the size of the image:",
    "options": [
      "Is doubled",
      "Is halved",
      "Remains the same",
      "Becomes infinite"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nRotating a plane mirror changes only the angular trajectory of the reflected rays (turning by 2\u03b8), but the transverse magnification produced by a plane mirror is strictly unity (|m| = 1) under all orientations.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Image size in a plane mirror is always equal to the object size: h_i = h_o.\n2. Rotating the mirror alters the direction of reflection, but does not alter the curvature or the magnification factor of the mirror.\n3. Therefore, the size of the image remains completely unchanged.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nDo not get tricked by the factor 2 in the 2\u03b8 rotation! Angular deviation is 2\u03b8, but image magnification stays exactly 1.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Magnification",
      "Universal Self-Scorer",
      "NEET 2027"
    ]
  },
  {
    "id": "univ-pm-q18",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Magnification of Plane Mirror",
    "difficulty": "Easy",
    "questionText": "A plane mirror produces a magnification of: [MP PET/PMT 1997]",
    "options": [
      "-1",
      "+1",
      "Zero",
      "Between 0 and +\u221e"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nTransverse magnification is defined as m = h_image / h_object.\n\n\u26a1 **Step-by-Step Derivation:**\n1. For a real object, a plane mirror always produces a virtual image.\n2. The image is upright (erect), which means h_image and h_object have the same sign (+).\n3. The image is exactly the same size as the object (|h_image| = |h_object|).\n4. Therefore:\n   m = + h_image / h_object = +1.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\n- Real, inverted same size (concave at C): m = -1.\n- Virtual, erect same size (plane mirror): m = +1.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Magnification",
      "MP PMT 1997",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q19",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Reflection at Inclined Plane Mirror",
    "difficulty": "Medium",
    "questionText": "A plane mirror makes an angle of 30\u00b0 with horizontal. If a vertical ray strikes the mirror, find the angle between mirror and reflected ray: [RPET 1997]",
    "options": [
      "30\u00b0",
      "45\u00b0",
      "60\u00b0",
      "90\u00b0"
    ],
    "correctAnswer": 2,
    "diagramSvg": "<svg viewBox=\"0 0 320 190\" class=\"w-full h-44 mx-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"190\" fill=\"#0F172A\" rx=\"8\"/><line x1=\"40\" y1=\"160\" x2=\"260\" y2=\"160\" stroke=\"#64748B\" stroke-width=\"2\"/><text x=\"210\" y=\"150\" fill=\"#64748B\" font-size=\"10\">Horizontal</text><line x1=\"60\" y1=\"160\" x2=\"220\" y2=\"68\" stroke=\"#38BDF8\" stroke-width=\"4\"/><text x=\"180\" y=\"55\" fill=\"#38BDF8\" font-size=\"11\">Mirror (30\u00b0)</text><line x1=\"140\" y1=\"10\" x2=\"140\" y2=\"114\" stroke=\"#4ADE80\" stroke-width=\"3\"/><polygon points=\"140,70 135,55 145,55\" fill=\"#4ADE80\"/><text x=\"70\" y=\"40\" fill=\"#4ADE80\" font-size=\"11\">Vertical Ray</text><line x1=\"140\" y1=\"114\" x2=\"260\" y2=\"114\" stroke=\"#F43F5E\" stroke-width=\"3\"/><polygon points=\"210,114 195,109 195,119\" fill=\"#F43F5E\"/><text x=\"145\" y=\"140\" fill=\"#FDE047\" font-size=\"11\">Angle with mirror = 60\u00b0</text></svg>",
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nBy the law of reflection, the glancing angle of reflection (angle between reflected ray and mirror surface) is equal to the glancing angle of incidence (angle between incident ray and mirror surface).\n\n\u26a1 **Step-by-Step Derivation:**\n1. Mirror inclination with horizontal = 30\u00b0.\n2. Incident ray is vertical (makes 90\u00b0 with horizontal).\n3. The angle between the incident ray and the mirror surface:\n   \u03b8_glancing = 90\u00b0 - 30\u00b0 = 60\u00b0.\n4. Alternatively, using the normal:\n   Normal to mirror makes 30\u00b0 with vertical.\n   Angle of incidence i = 30\u00b0.\n   Angle of reflection r = 30\u00b0.\n5. Angle between reflected ray and mirror surface:\n   90\u00b0 - r = 90\u00b0 - 30\u00b0 = 60\u00b0.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nGlancing angle of incidence = Glancing angle of reflection = 60\u00b0.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Reflection Angle",
      "RPET 1997",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q20",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Clock Time in Plane Mirror",
    "difficulty": "Easy",
    "questionText": "A watch shows time as 3:25. When seen through a mirror, time appeared will be: [RPMT 1997; JIPMER 2001, 02]",
    "options": [
      "8:35",
      "9:35",
      "7:35",
      "8:25"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nDue to lateral inversion across the vertical axis (12-6 line), the sum of real time and mirror image time on a standard 12-hour clock face equals 12:00 (or 11 hours 60 minutes).\n\n\u26a1 **Step-by-Step Derivation:**\n1. Real time = 3:25.\n2. Subtract real time from 11:60:\n   Hours: 11 - 3 = 8\n   Minutes: 60 - 25 = 35\n3. Mirror time = 8:35.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\n- For 12-hour format: Subtract from 11:60.\n- For 24-hour format: Subtract from 23:60.\n  Here: 11:60 - 3:25 = 8:35.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Clock Time",
      "RPMT 1997",
      "JIPMER 2001",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q21",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Relative Velocity in Plane Mirror",
    "difficulty": "Easy",
    "questionText": "If an observer is walking away from the plane mirror with 6 m/sec, then the velocity of the image with respect to observer will be: [RPMT 1999]",
    "options": [
      "6 m/sec",
      "-6 m/sec",
      "12 m/sec",
      "3 m/sec"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nWhen an observer moves relative to a stationary plane mirror, the image moves in the opposite direction with the same speed relative to the mirror. The relative velocity between observer and image is twice the observer's speed.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Choose coordinates with mirror at x = 0.\n2. Velocity of observer moving away from mirror:\n   v_O = +6 m/s (along +x).\n3. Velocity of image formed behind mirror moving away:\n   v_I = -6 m/s (along -x).\n4. Relative velocity of image with respect to observer:\n   v_rel = |v_I - v_O| = |-6 - 6| = 12 m/s.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nSpeed with respect to mirror = 6 m/s. Speed with respect to observer = 2 \u00d7 6 = 12 m/s.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Relative Velocity",
      "RPMT 1999",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q22",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Speed of Image in Plane Mirror",
    "difficulty": "Easy",
    "questionText": "A man runs towards mirror at a speed of 15 m/s. What is the speed of his image? [CBSE PMT 2000]",
    "options": [
      "7.5 m/s",
      "15 m/s",
      "30 m/s",
      "45 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nThe speed of the image with respect to the mirror is equal in magnitude to the speed of the object with respect to the mirror.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Distance of object to mirror: x_O.\n2. Distance of image to mirror: x_I = x_O.\n3. Speed of image relative to mirror:\n   |v_I| = |dx_I / dt| = |dx_O / dt| = 15 m/s.\n4. Note the question specifies 'speed of his image' (relative to ground/mirror frame), which is 15 m/s.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\n- Speed of image relative to mirror = 15 m/s.\n- Speed of image relative to man = 30 m/s.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Image Speed",
      "CBSE PMT 2000",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q23",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Eye Focusing Distance",
    "difficulty": "Easy",
    "questionText": "A small object is placed 10 cm in front of a plane mirror. If you stand behind the object 30 cm from the mirror and look at its image, the distance focused for your eye will be: [KCET (Engg.) 2001]",
    "options": [
      "60 cm",
      "20 cm",
      "40 cm",
      "80 cm"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nAn observer accommodates and focuses their eye to the physical distance between the eye and the location of the virtual image.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Distance of object from mirror = 10 cm in front.\n2. Position of virtual image = 10 cm behind the mirror.\n3. Position of observer's eye = 30 cm in front of the mirror.\n4. Total distance from eye to image:\n   d = d_eye_to_mirror + d_mirror_to_image\n   d = 30 cm + 10 cm = 40 cm.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nDo not subtract (30 - 10 = 20 cm); 20 cm is the distance between the eye and the object, but the eye is looking at the image in the mirror!",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Focusing Distance",
      "KCET 2001",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q24",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Distance between Object and Image",
    "difficulty": "Easy",
    "questionText": "An object is at a distance of 0.5 m in front of a plane mirror. Distance between the object and image is: [CPMT 2002]",
    "options": [
      "0.5 m",
      "1 m",
      "0.25 m",
      "1.5 m"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nIn a plane mirror, the virtual image is formed at the same perpendicular distance behind the mirror as the object is in front.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Distance of object from mirror = d = 0.5 m.\n2. Distance of image from mirror = d = 0.5 m.\n3. Total separation between object and image:\n   S = d + d = 2d = 2 \u00d7 0.5 m = 1 m.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nObject-to-mirror = d; Object-to-image = 2d.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Object-Image Distance",
      "CPMT 2002",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q25",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Relative Speed of Image to Object",
    "difficulty": "Easy",
    "questionText": "A man runs towards a mirror at a speed 15 m/s. The speed of the image relative to the man is: [Kerala PET 2002]",
    "options": [
      "15 m/s",
      "30 m/s",
      "35 m/s",
      "20 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nWhen an object moves toward a stationary plane mirror with velocity v, the image moves toward the mirror with velocity -v. The relative velocity of the image with respect to the object is v - (-v) = 2v.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Speed of man v_man = 15 m/s.\n2. Relative speed of image to man = 2 \u00d7 v_man = 2 \u00d7 15 m/s = 30 m/s.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nCarefully distinguish whether speed is asked relative to the mirror (15 m/s) or relative to the man (30 m/s).",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Relative Speed",
      "Kerala PET 2002",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q26",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Real Image by Plane Mirror",
    "difficulty": "Easy",
    "questionText": "The light reflected by a plane mirror may form a real image: [KCET (Engg. & Med.) 2002]",
    "options": [
      "If the rays incident on the mirror are diverging",
      "If the rays incident on the mirror are converging",
      "If the object is placed very close to the mirror",
      "Under no circumstances"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nA plane mirror acts as a flat wavefront transformer. When rays incident on a plane mirror converge toward a virtual object located behind the mirror, they reflect and physically converge at a point in front of the mirror, forming a **real image**.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Virtual object has positive object distance (+u).\n2. By plane mirror relation: v = -u.\n3. Negative image distance v corresponds to a real point of intersection in front of the reflecting surface.\n4. Hence, real image requires **converging incident rays**.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nReal object (diverging rays) \u27f9 Virtual image.\nVirtual object (converging rays) \u27f9 Real image.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Real Image",
      "KCET 2002",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q27",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Images in Mirrors Inclined at 72\u00b0",
    "difficulty": "Medium",
    "questionText": "Two plane mirrors are inclined at an angle of 72\u00b0. The number of images of a point object placed between them will be: [KCET (Engg. & Med.) 1999; BCECE 2003]",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nFor two mirrors inclined at angle \u03b8:\n- Calculate m = 360\u00b0 / \u03b8.\n- Here m = 360\u00b0 / 72\u00b0 = 5 (odd integer).\n- When m is an odd integer and the object is placed symmetrically (or by general convention on standard competitive exams), the number of images formed is n = m - 1 = 5 - 1 = 4.\n\n\u26a1 **Step-by-Step Derivation:**\n1. m = 360\u00b0 / 72\u00b0 = 5.\n2. For symmetric placement on the angle bisector:\n   n = m - 1 = 5 - 1 = 4 images.\n3. Therefore, 4 images are formed.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nIf asymmetric placement were specified, n = 5. When unspecified in NEET/CET, standard symmetric position is assumed, giving n = 4.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Multiple Images",
      "KCET 1999",
      "BCECE 2003",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q28",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Angle for Three Images",
    "difficulty": "Easy",
    "questionText": "To get three images of a single object, one should have two plane mirrors at an angle of: [AIEEE 2003]",
    "options": [
      "30\u00b0",
      "60\u00b0",
      "90\u00b0",
      "150\u00b0"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nThe number of images formed by two inclined mirrors is n = (360\u00b0 / \u03b8) - 1.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Number of images n = 3.\n2. 3 = (360\u00b0 / \u03b8) - 1\n3. 360\u00b0 / \u03b8 = 4\n4. \u03b8 = 360\u00b0 / 4 = 90\u00b0.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nAt 90\u00b0, the two mirrors form 3 distinct images regardless of object symmetry.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "AIEEE 2003",
      "Universal Self-Scorer",
      "NEET 2027"
    ]
  },
  {
    "id": "univ-pm-q29",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Minimum Height of Mirror",
    "difficulty": "Easy",
    "questionText": "A man of length h requires a mirror, to see his own complete image of length at least equal to: [MP PET 2003]",
    "options": [
      "h/4",
      "h/3",
      "h/2",
      "h"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nFrom the geometry of ray reflection and similar triangles, the minimum vertical length of a plane mirror required to view a full erect image of height h is h/2.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Let eyes be at height E, head at H, feet at 0.\n2. Ray from head to eye reflects from mirror at height (H + E)/2.\n3. Ray from feet to eye reflects from mirror at height E/2.\n4. Length of mirror required = (H + E)/2 - E/2 = H/2 = h/2.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nMinimum mirror length = h/2. This result is independent of distance from the mirror.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "MP PET 2003",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q30",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Images in Mirrors Inclined at 45\u00b0",
    "difficulty": "Easy",
    "questionText": "Two plane mirrors are at 45\u00b0 to each other. If an object is placed between them, then the number of images will be: [MP PMT 2003]",
    "options": [
      "5",
      "9",
      "7",
      "8"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nNumber of images n = (360\u00b0 / \u03b8) - 1 when 360\u00b0/\u03b8 is an even integer.\n\n\u26a1 **Step-by-Step Derivation:**\n1. m = 360\u00b0 / 45\u00b0 = 8 (even integer).\n2. For even m, n = m - 1 always.\n3. n = 8 - 1 = 7 images.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nFor \u03b8 = 45\u00b0, 7 images are formed.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "MP PMT 2003",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q31",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Identification of Mirror Type",
    "difficulty": "Easy",
    "questionText": "A man having height 6 m observes an image of 2 m height erect, then the mirror used is: [BCECE 2004]",
    "options": [
      "Concave",
      "Convex",
      "Plane",
      "None of these"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nCharacteristics of images for a real object:\n- **Plane mirror:** Virtual, erect, magnification m = +1 (same size).\n- **Concave mirror:** Virtual image is always magnified (m > +1).\n- **Convex mirror:** Virtual image is ALWAYS diminished (0 < m < +1) for any real object.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Object height h_o = 6 m.\n2. Image height h_i = 2 m (erect).\n3. Magnification m = h_i / h_o = +2 / 6 = +1/3.\n4. Since 0 < m < 1 and the image is erect, the mirror must be a **convex mirror**.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nErect and diminished \u27f9 Convex mirror.\nErect and magnified \u27f9 Concave mirror.\nErect and same size \u27f9 Plane mirror.",
    "tags": [
      "Ray Optics",
      "Convex Mirror",
      "Mirror Identification",
      "BCECE 2004",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q32",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Periscope Mirror Rotation",
    "difficulty": "Easy",
    "questionText": "A light beam is being reflected by using two mirrors, as in a periscope used in submarines. If one of the mirrors rotates by an angle \u03b8, the reflected light will deviate from its original path by the angle: [UPSEAT 2004]",
    "options": [
      "2\u03b8",
      "0\u00b0",
      "\u03b8",
      "4\u03b8"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nWhen a plane mirror is rotated through an angle \u03b8 while the incident light beam remains fixed, the reflected light ray is turned through an angle 2\u03b8.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Incident ray on the rotated mirror remains fixed.\n2. Rotating the mirror by \u03b8 rotates its normal by \u03b8.\n3. Therefore, the reflected beam is deflected by 2\u03b8 from its original trajectory.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nA periscope consists of two parallel 45\u00b0 mirrors. If one rotates by \u03b8, the beam leaves at an angle 2\u03b8 relative to original line of sight.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Periscope",
      "UPSEAT 2004",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q33",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Focal Length of Plane Mirror",
    "difficulty": "Easy",
    "questionText": "Focal length of a plane mirror is: [RPMT 2000]",
    "options": [
      "Zero",
      "Infinite",
      "Very less",
      "Indefinite"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nA plane mirror can be considered as a spherical mirror with an infinitely large radius of curvature (R = \u221e).\n\n\u26a1 **Step-by-Step Derivation:**\n1. Radius of curvature R = \u221e.\n2. Focal length f = R / 2 = \u221e / 2 = \u221e (Infinite).\n3. Power of plane mirror P = -1/f = 0.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nFocal length = Infinite; Optical power = Zero.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Focal Length",
      "RPMT 2000",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-pm-q34",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Successive Reflection Geometry",
    "difficulty": "Hard",
    "questionText": "A ray of light is incident at 50\u00b0 on the middle of one of the two mirrors arranged at an angle of 60\u00b0 between them. The ray then touches the second mirror, gets reflected back to the first mirror, making an angle of incidence of: [MP PET 2005]",
    "options": [
      "50\u00b0",
      "60\u00b0",
      "70\u00b0",
      "80\u00b0"
    ],
    "correctAnswer": 2,
    "diagramSvg": "<svg viewBox=\"0 0 320 200\" class=\"w-full h-48 mx-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"200\" fill=\"#0F172A\" rx=\"8\"/><line x1=\"40\" y1=\"170\" x2=\"280\" y2=\"170\" stroke=\"#38BDF8\" stroke-width=\"4\"/><text x=\"250\" y=\"190\" fill=\"#38BDF8\" font-size=\"10\">M\u2081</text><line x1=\"40\" y1=\"170\" x2=\"160\" y2=\"20\" stroke=\"#38BDF8\" stroke-width=\"4\"/><text x=\"165\" y=\"25\" fill=\"#38BDF8\" font-size=\"10\">M\u2082</text><text x=\"65\" y=\"165\" fill=\"#FDE047\" font-size=\"10\">60\u00b0</text><line x1=\"20\" y1=\"110\" x2=\"120\" y2=\"70\" stroke=\"#4ADE80\" stroke-width=\"2.5\"/><text x=\"80\" y=\"65\" fill=\"#4ADE80\" font-size=\"9\">i\u2081=50\u00b0</text><line x1=\"120\" y1=\"70\" x2=\"190\" y2=\"170\" stroke=\"#FBBF24\" stroke-width=\"2.5\"/><text x=\"175\" y=\"160\" fill=\"#F43F5E\" font-size=\"10\" font-weight=\"bold\">i\u2083=70\u00b0</text><text x=\"120\" y=\"195\" fill=\"#94A3B8\" font-size=\"10\">Angle of incidence on M\u2081 = 70\u00b0</text></svg>",
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nTrack the ray through each triangle formed by the two inclined mirrors and the ray segments using the angle of incidence, angle of reflection, and the glancing angle (90\u00b0 - i).\n\n\u26a1 **Step-by-Step Derivation:**\n1. Ray incidents on mirror M\u2081 at angle of incidence i\u2081 = 50\u00b0.\n   Glancing angle with M\u2081: \u03b1\u2081 = 90\u00b0 - 50\u00b0 = 40\u00b0.\n2. Angle between mirrors: \u03b8 = 60\u00b0.\n3. In the triangle formed by the vertex and the reflection points on M\u2081 and M\u2082:\n   Third angle (glancing angle on M\u2082) \u03b1\u2082 = 180\u00b0 - (60\u00b0 + 40\u00b0) = 80\u00b0.\n4. Angle of incidence on mirror M\u2082:\n   i\u2082 = 90\u00b0 - \u03b1\u2082 = 90\u00b0 - 80\u00b0 = 10\u00b0.\n5. By law of reflection at M\u2082, angle of reflection is 10\u00b0, so the ray reflects making an angle of 80\u00b0 with M\u2082 directed away from the vertex.\n6. Now, in the triangle formed by the vertex and the two hits:\n   The interior angle at M\u2082 is 180\u00b0 - 80\u00b0 = 100\u00b0.\n   Vertex angle = 60\u00b0.\n   Glancing angle at M\u2081 for the return hit = 180\u00b0 - (60\u00b0 + 100\u00b0) = 20\u00b0.\n7. Angle of incidence on M\u2081:\n   i\u2083 = 90\u00b0 - 20\u00b0 = 70\u00b0.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nAngle of incidence = 90\u00b0 - glancing angle. Glancing angle on first mirror is 40\u00b0, on second is 80\u00b0, on third is 20\u00b0 \u27f9 Angle of incidence = 90\u00b0 - 20\u00b0 = 70\u00b0.",
    "tags": [
      "Ray Optics",
      "Plane Mirror",
      "Ray Tracing",
      "MP PET 2005",
      "Universal Self-Scorer"
    ]
  }
];

export const UNIVERSAL_SPHERICAL_MIRROR_QUESTIONS: Question[] = [
  {
    "id": "univ-sm-q1",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Convex Mirror Magnification Formula",
    "difficulty": "Medium",
    "questionText": "A convex mirror of focal length f forms an image which is 1/n times the object. The distance of the object from the mirror is:",
    "options": [
      "(n - 1)f",
      "((n - 1)/n)f",
      "((n + 1)/n)f",
      "(n + 1)f"
    ],
    "correctAnswer": 0,
    "diagramSvg": "<svg viewBox=\"0 0 320 180\" class=\"w-full h-44 mx-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#0F172A\" rx=\"8\"/><line x1=\"20\" y1=\"100\" x2=\"300\" y2=\"100\" stroke=\"#64748B\" stroke-width=\"1.5\"/><path d=\"M160,20 Q145,100 160,180\" stroke=\"#38BDF8\" stroke-width=\"4\" fill=\"none\"/><line x1=\"60\" y1=\"100\" x2=\"60\" y2=\"40\" stroke=\"#4ADE80\" stroke-width=\"3\"/><text x=\"45\" y=\"35\" fill=\"#4ADE80\" font-size=\"10\">Object</text><line x1=\"185\" y1=\"100\" x2=\"185\" y2=\"80\" stroke=\"#F43F5E\" stroke-width=\"2.5\"/><text x=\"175\" y=\"75\" fill=\"#F43F5E\" font-size=\"9\">I (1/n)</text><circle cx=\"240\" cy=\"100\" r=\"3\" fill=\"#FDE047\"/><text x=\"235\" y=\"115\" fill=\"#FDE047\" font-size=\"9\">F</text><text x=\"80\" y=\"160\" fill=\"#94A3B8\" font-size=\"11\">u = -(n - 1)f \u27f9 Distance = (n - 1)f</text></svg>",
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nThe transverse magnification for any spherical mirror in terms of focal length f and object distance u is given by:\nm = f / (f - u).\n\n\u26a1 **Step-by-Step Derivation:**\n1. For a convex mirror, the focal length is positive (+f) and the image is virtual and erect, so magnification is positive: m = +1/n.\n2. Substitute into magnification formula:\n   1/n = f / (f - u)\n3. Cross-multiplying:\n   f - u = n \u00b7 f\n   -u = n \u00b7 f - f = (n - 1)f\n   u = -(n - 1)f.\n4. The negative sign denotes that the object is in front of the mirror (real object).\n5. Therefore, the distance of the object from the mirror is (n - 1)f.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nFor convex mirror: u = -(n - 1)f.\nFor concave mirror forming virtual image of magnification n: u = -((n - 1)/n)f.",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Convex Mirror",
      "Magnification",
      "Universal Self-Scorer",
      "NEET 2027"
    ]
  },
  {
    "id": "univ-sm-q2",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Characteristics of Virtual Images",
    "difficulty": "Easy",
    "questionText": "A diminished virtual image can be formed only in: [MP PMT 2002]",
    "options": [
      "Plane mirror",
      "A concave mirror",
      "A convex mirror",
      "Concave-parabolic mirror"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\n- **Plane mirror:** Virtual image is always the **same size** as the object (m = +1).\n- **Concave mirror:** Virtual image is formed when object is between pole and focus (u < f), and is always **magnified** (m > +1).\n- **Convex mirror:** Virtual image is ALWAYS **diminished** (0 < m < +1) for any real object.\n\n\u26a1 **Step-by-Step Derivation:**\n1. m_convex = f / (f + |u|) < 1 since f + |u| > f.\n2. Hence, a virtual and diminished image can only be formed by a **convex mirror**.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\n- Virtual + Same size \u27f9 Plane mirror.\n- Virtual + Enlarged \u27f9 Concave mirror.\n- Virtual + Diminished \u27f9 Convex mirror.",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Convex Mirror",
      "MP PMT 2002",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-sm-q3",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Virtual Image Production",
    "difficulty": "Easy",
    "questionText": "Which of the following could not produce a virtual image?",
    "options": [
      "Plane mirror",
      "Convex mirror",
      "Concave mirror",
      "All the above can produce a virtual image"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nAll three types of mirrors can produce a virtual image:\n1. **Plane mirror:** Produces a virtual image for every real object.\n2. **Convex mirror:** Produces a virtual image for every real object.\n3. **Concave mirror:** Produces a virtual image when the real object is placed between the pole and the principal focus (u < f).\nHence, all of the above can produce a virtual image.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nRead negative questions carefully ('Which of the following could not...'). Since all three can produce a virtual image, option (d) is correct.",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Virtual Image",
      "Universal Self-Scorer",
      "NEET 2027"
    ]
  },
  {
    "id": "univ-sm-q4",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Concave Mirror Numerical",
    "difficulty": "Medium",
    "questionText": "An object 5 cm tall is placed 1 m from a concave spherical mirror which has a radius of curvature of 20 cm. The size of the image is: [MP PET 1993]",
    "options": [
      "0.11 cm",
      "0.50 cm",
      "0.55 cm",
      "0.60 cm"
    ],
    "correctAnswer": 2,
    "diagramSvg": "<svg viewBox=\"0 0 320 180\" class=\"w-full h-44 mx-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#0F172A\" rx=\"8\"/><line x1=\"20\" y1=\"100\" x2=\"300\" y2=\"100\" stroke=\"#64748B\" stroke-width=\"1.5\"/><path d=\"M280,20 Q260,100 280,180\" stroke=\"#38BDF8\" stroke-width=\"4\" fill=\"none\"/><circle cx=\"230\" cy=\"100\" r=\"3\" fill=\"#FDE047\"/><text x=\"225\" y=\"115\" fill=\"#FDE047\" font-size=\"9\">F (10)</text><circle cx=\"180\" cy=\"100\" r=\"3\" fill=\"#FDE047\"/><text x=\"175\" y=\"115\" fill=\"#FDE047\" font-size=\"9\">C (20)</text><line x1=\"50\" y1=\"100\" x2=\"50\" y2=\"40\" stroke=\"#4ADE80\" stroke-width=\"3\"/><text x=\"35\" y=\"35\" fill=\"#4ADE80\" font-size=\"10\">O (5cm)</text><line x1=\"220\" y1=\"100\" x2=\"220\" y2=\"107\" stroke=\"#F43F5E\" stroke-width=\"2.5\"/><text x=\"200\" y=\"125\" fill=\"#F43F5E\" font-size=\"9\">I (0.55 cm)</text><text x=\"80\" y=\"165\" fill=\"#94A3B8\" font-size=\"11\">m = -1/9 \u27f9 h_i = 5/9 = 0.55 cm</text></svg>",
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nFor a concave mirror:\nf = R / 2.\nMagnification m = f / (f - u) = h_i / h_o.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Radius of curvature R = -20 cm \u27f9 f = -10 cm.\n2. Object distance u = -1 m = -100 cm.\n3. Object height h_o = 5 cm.\n4. Compute magnification:\n   m = f / (f - u) = (-10) / [-10 - (-100)] = -10 / 90 = -1/9.\n5. Image size:\n   h_i = |m| \u00d7 h_o = (1/9) \u00d7 5 cm = 5/9 cm \u2248 0.555 cm \u2248 0.55 cm.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\n5/9 = 0.555... cm \u27f9 0.55 cm.",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Concave Mirror",
      "MP PET 1993",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-sm-q5",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Concave Mirror Inverted Image Position",
    "difficulty": "Easy",
    "questionText": "The focal length of a concave mirror is 50 cm. Where should an object be placed so that its image is two times and inverted?",
    "options": [
      "75 cm",
      "72 cm",
      "63 cm",
      "50 cm"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nAn inverted image formed by a concave mirror is a real image. Hence the linear magnification is negative: m = -2.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Focal length f = -50 cm.\n2. Inverted and 2 times \u27f9 m = -2.\n3. Using m = f / (f - u):\n   -2 = -50 / (-50 - u)\n4. Cross-multiplying:\n   -2(-50 - u) = -50\n   100 + 2u = -50\n   2u = -150\n   u = -75 cm.\n5. Therefore, the object should be placed at a distance of 75 cm in front of the mirror (between F and C).\n\n\ud83d\udca1 **Examiner Pro-Tip:**\n- If inverted image: m = -2 \u27f9 u = 75 cm (between F and C).\n- If erect image: m = +2 \u27f9 u = 25 cm (between Pole and F).",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Concave Mirror",
      "Magnification",
      "Universal Self-Scorer",
      "NEET 2027"
    ]
  },
  {
    "id": "univ-sm-q6",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Convex Mirror Image Size",
    "difficulty": "Medium",
    "questionText": "An object of size 7.5 cm is placed in front of a convex mirror of radius of curvature 25 cm at a distance of 40 cm. The size of the image should be:",
    "options": [
      "2.3 cm",
      "1.78 cm",
      "1 cm",
      "0.8 cm"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nFor a convex mirror, the focal length is positive: f = +R / 2.\nMagnification m = f / (f - u).\n\n\u26a1 **Step-by-Step Derivation:**\n1. R = +25 cm \u27f9 f = +12.5 cm.\n2. Object distance u = -40 cm.\n3. Object height h_o = 7.5 cm.\n4. Magnification:\n   m = f / (f - u) = 12.5 / [12.5 - (-40)] = 12.5 / 52.5 = 125 / 525 = 5 / 21.\n5. Image size:\n   h_i = m \u00d7 h_o = (5 / 21) \u00d7 7.5 cm = 37.5 / 21 \u2248 1.7857 cm \u2248 1.78 cm.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\n37.5 / 21 = 1.7857 cm. Round to 1.78 cm.",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Convex Mirror",
      "Image Size",
      "Universal Self-Scorer",
      "NEET 2027"
    ]
  },
  {
    "id": "univ-sm-q7",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Field of View of Mirrors",
    "difficulty": "Easy",
    "questionText": "The field of view is maximum for:",
    "options": [
      "Plane mirror",
      "Concave mirror",
      "Convex mirror",
      "Cylindrical mirror"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nA convex mirror curves outward, diverging reflected rays over a much wider angular cone than plane or concave mirrors. Consequently, it offers the largest field of view.\n\n\u26a1 **Step-by-Step Derivation:**\n1. In a plane mirror, rays reflect parallel or symmetrically, limiting field of view.\n2. In a concave mirror, rays converge toward a focus, giving the narrowest field of view.\n3. In a convex mirror, rays diverge outward, collecting light from a wide perimeter.\n4. For this reason, convex mirrors are used as rear-view mirrors in automobiles.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nMaximum field of view = Convex mirror (used as driver rear-view mirror).",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Field of View",
      "Universal Self-Scorer",
      "NEET 2027"
    ]
  },
  {
    "id": "univ-sm-q8",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Newton's Formula for Spherical Mirrors",
    "difficulty": "Medium",
    "questionText": "The focal length of a concave mirror is f and the distance from the object to the principal focus is x. The ratio of the size of the image to the size of the object is: [Kerala PET 2005]",
    "options": [
      "(f + x)/f",
      "f/x",
      "\u221a(f/x)",
      "f\u00b2/x\u00b2"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nAccording to Newton's formula for spherical mirrors, if object distance from the focus is x and image distance from the focus is y, then:\nx \u00b7 y = f\u00b2.\nThe lateral magnification is given by:\n|m| = h_i / h_o = f / x = y / f.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Object distance from mirror pole: u = -(f + x).\n2. Substitute into magnification formula:\n   m = f / (f - u)\n3. For concave mirror (f is negative, -f):\n   m = (-f) / [(-f) - (-(f + x))] = (-f) / [-f + f + x] = -f / x.\n4. Ratio of the size of image to object:\n   |m| = f / x.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nNewton's magnification forms:\n|m| = f / x = y / f = \u221a(y / x).\nHere x is distance from focus, so |m| = f/x.",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Newtons Formula",
      "Kerala PET 2005",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-sm-q9",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Convex Mirror Image Properties",
    "difficulty": "Easy",
    "questionText": "Image formed by a convex mirror is: [MP PET 1993]",
    "options": [
      "Virtual",
      "Real",
      "Enlarged",
      "Inverted"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nFor any real object placed anywhere in front of a convex mirror, the image formed is always virtual, erect, diminished, and located behind the mirror between the pole and principal focus.\n\n\u26a1 **Step-by-Step Derivation:**\n1. In mirror formula: 1/v = 1/f - 1/u.\n2. For convex mirror: f > 0 and for real object u < 0 (-u).\n3. 1/v = 1/f + 1/|u| > 0 \u27f9 v is always positive (behind the mirror).\n4. A positive image distance signifies a **virtual image**.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nA convex mirror cannot form a real image of a real object!",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Convex Mirror",
      "MP PET 1993",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-sm-q10",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Newton's Relation for Focal Length",
    "difficulty": "Medium",
    "questionText": "In a concave mirror experiment, an object is placed at a distance x\u2081 from the focus and the image is formed at a distance x\u2082 from the focus. The focal length of the mirror would be: [MP PET 1997]",
    "options": [
      "x\u2081x\u2082",
      "\u221a(x\u2081x\u2082)",
      "(x\u2081 + x\u2082)/2",
      "x\u2081/x\u2082"
    ],
    "correctAnswer": 1,
    "diagramSvg": "<svg viewBox=\"0 0 320 180\" class=\"w-full h-44 mx-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#0F172A\" rx=\"8\"/><line x1=\"20\" y1=\"100\" x2=\"300\" y2=\"100\" stroke=\"#64748B\" stroke-width=\"1.5\"/><path d=\"M280,20 Q260,100 280,180\" stroke=\"#38BDF8\" stroke-width=\"4\" fill=\"none\"/><circle cx=\"210\" cy=\"100\" r=\"4\" fill=\"#FDE047\"/><text x=\"205\" y=\"120\" fill=\"#FDE047\" font-size=\"10\" font-weight=\"bold\">F</text><line x1=\"70\" y1=\"100\" x2=\"70\" y2=\"50\" stroke=\"#4ADE80\" stroke-width=\"3\"/><text x=\"55\" y=\"45\" fill=\"#4ADE80\" font-size=\"10\">Object</text><line x1=\"70\" y1=\"90\" x2=\"210\" y2=\"90\" stroke=\"#4ADE80\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/><text x=\"130\" y=\"85\" fill=\"#4ADE80\" font-size=\"10\">x\u2081</text><line x1=\"140\" y1=\"100\" x2=\"140\" y2=\"135\" stroke=\"#F43F5E\" stroke-width=\"2.5\"/><text x=\"130\" y=\"150\" fill=\"#F43F5E\" font-size=\"10\">Image</text><line x1=\"140\" y1=\"110\" x2=\"210\" y2=\"110\" stroke=\"#F43F5E\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/><text x=\"165\" y=\"125\" fill=\"#F43F5E\" font-size=\"10\">x\u2082</text><text x=\"90\" y=\"170\" fill=\"#FDE047\" font-size=\"11\" font-weight=\"bold\">f = \u221a(x\u2081 \u00b7 x\u2082)</text></svg>",
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nNewton's formula for spherical mirrors relates the distances measured from the principal focus:\nx\u2081 \u00b7 x\u2082 = f\u00b2.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Object distance from pole: u = -(f + x\u2081).\n2. Image distance from pole: v = -(f + x\u2082).\n3. Mirror formula: 1/v + 1/u = 1/f.\n4. Substituting:\n   -1/(f + x\u2082) - 1/(f + x\u2081) = -1/f\n   1/(f + x\u2082) + 1/(f + x\u2081) = 1/f\n5. Simplifying:\n   [(f + x\u2081) + (f + x\u2082)] / [(f + x\u2081)(f + x\u2082)] = 1/f\n   f (2f + x\u2081 + x\u2082) = f\u00b2 + f(x\u2081 + x\u2082) + x\u2081x\u2082\n   2f\u00b2 + f(x\u2081 + x\u2082) = f\u00b2 + f(x\u2081 + x\u2082) + x\u2081x\u2082\n   f\u00b2 = x\u2081 \u00b7 x\u2082 \u27f9 f = \u221a(x\u2081 \u00b7 x\u2082).\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nNewton's formula applies ONLY when distances are measured from the focus, not from the pole! f = \u221a(x\u2081x\u2082).",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Newtons Formula",
      "MP PET 1997",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-sm-q11",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Convex Mirror Statements",
    "difficulty": "Easy",
    "questionText": "A convex mirror is used to form the image of an object. Then which of the following statements is wrong? [CPMT 1973]",
    "options": [
      "The image lies between the pole and the focus",
      "The image is diminished in size",
      "The image is erect",
      "The image is real"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nFor a real object, a convex mirror always forms a virtual, erect, and diminished image located between the pole and the principal focus behind the mirror. It can never form a real image of a real object.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Statements (a), (b), and (c) are all experimentally and theoretically true properties of convex mirrors.\n2. Statement (d) claims 'The image is real', which is completely incorrect (wrong).\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nConvex mirror + Real object \u27f9 Always Virtual image.",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Convex Mirror",
      "CPMT 1973",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-sm-q12",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Parallel Beam Production",
    "difficulty": "Easy",
    "questionText": "Given a point source of light, which of the following can produce a parallel beam of light? [CPMT 1974; KCET 2005]",
    "options": [
      "Convex mirror",
      "Concave mirror",
      "Concave lens",
      "Two plane mirrors inclined at an angle of 90\u00b0"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nBy the principle of optical reversibility, when a point source of light is placed at the principal focus of a concave mirror, the reflected rays emerge parallel to the principal axis.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Point source at F (focus) of concave mirror: u = -f.\n2. 1/v = 1/f - 1/u = -1/f - (-1/f) = 0 \u27f9 v = \u221e.\n3. Light rays emerging to infinity form a parallel beam of light.\n4. Convex mirrors and concave lenses diverge light, while 90\u00b0 plane mirrors deviate light without collimating a divergent beam.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nConcave mirrors are used in car headlights and searchlights with the bulb positioned at the focus to create powerful parallel beams.",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Concave Mirror",
      "Searchlight",
      "CPMT 1974",
      "KCET 2005",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-sm-q13",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Convex Mirror Object Distance",
    "difficulty": "Easy",
    "questionText": "The image formed by a convex mirror of focal length 30 cm is a quarter of the size of the object. The distance of the object from the mirror is:",
    "options": [
      "30 cm",
      "90 cm",
      "120 cm",
      "60 cm"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nFor a convex mirror:\nm = f / (f - u).\n\n\u26a1 **Step-by-Step Derivation:**\n1. Convex mirror focal length f = +30 cm.\n2. Magnification m = +1/4.\n3. 1/4 = 30 / (30 - u)\n4. 30 - u = 120\n5. -u = 90 \u27f9 u = -90 cm.\n6. The object distance from the mirror is 90 cm.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nUsing u = -(n - 1)f directly:\nHere n = 4, so u = -(4 - 1)(30) = -3(30) = -90 cm.",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Convex Mirror",
      "Universal Self-Scorer",
      "NEET 2027"
    ]
  },
  {
    "id": "univ-sm-q14",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Mirror Identification by Diminution",
    "difficulty": "Easy",
    "questionText": "A boy stands straight in front of a mirror at a distance of 30 cm away from it. He sees his erect image whose height is 1/5th of his real height. The mirror he is using is: [MP PMT 1993]",
    "options": [
      "Plane mirror",
      "Convex mirror",
      "Concave mirror",
      "Plano-convex mirror"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nA mirror that produces an **erect and diminished** image (m = +1/5 < 1) of a real object is uniquely a **convex mirror**.\n\n\u26a1 **Step-by-Step Derivation:**\n1. A plane mirror always produces m = +1.\n2. A concave mirror produces an erect image only when u < f, but that image is always enlarged (m > 1).\n3. A convex mirror always produces an erect and diminished image (0 < m < 1).\n4. Since m = 1/5 < 1, the mirror is a convex mirror.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nErect + Diminished = Convex Mirror (Always!).",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Convex Mirror",
      "MP PMT 1993",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-sm-q15",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Image Inversion Behavior",
    "difficulty": "Easy",
    "questionText": "A person sees his virtual image by holding a mirror very close to the face. When he moves the mirror away from his face, the image becomes inverted. What type of mirror is he using?",
    "options": [
      "Plane mirror",
      "Convex mirror",
      "Concave mirror",
      "None of these"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nA concave mirror exhibits a transition in image nature depending on object distance:\n- When very close to the face (u < f): Forms a virtual, erect, and magnified image (shaving/makeup mirror).\n- When moved farther away (u > f): The image becomes real and inverted.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Plane mirror: Image is always virtual and erect at all distances.\n2. Convex mirror: Image is always virtual and erect at all distances.\n3. Concave mirror: Switches from virtual & erect (u < f) to real & inverted (u > f).\n4. Hence, the person is using a **concave mirror**.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nThis is the classic dentist/shaving mirror property.",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Concave Mirror",
      "Inversion Transition",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-sm-q16",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Correct Optical Statements",
    "difficulty": "Medium",
    "questionText": "Which one of the following statements is true?",
    "options": [
      "An object situated at the principal focus of a concave lens will have its image formed at infinity",
      "Concave mirror can give diminished virtual image",
      "Given a point source of light, a convex mirror can produce a parallel beam of light",
      "The virtual image formed in a plane mirror can be photographed"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nA virtual image cannot be captured directly on a screen placed at the image location, because rays do not actually intersect there. However, reflected light rays diverging from the virtual image can be received by a camera lens (or the human eye lens), which refracts and converges the rays to form a real image on the camera sensor/film. Therefore, a virtual image CAN be photographed!\n\n\u26a1 **Step-by-Step Derivation:**\n1. Statement (a) is false: For a concave lens, image is always between lens and focus.\n2. Statement (b) is false: Concave mirror produces enlarged virtual images (m > 1).\n3. Statement (c) is false: Convex mirror diverges light, cannot collimate a divergent beam.\n4. Statement (d) is TRUE: Virtual images formed by plane/spherical mirrors can be photographed by a camera.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nA virtual image CANNOT be caught on a screen, but CAN be photographed!",
    "tags": [
      "Ray Optics",
      "Optics Concepts",
      "Virtual Image Photography",
      "Universal Self-Scorer",
      "NEET 2027"
    ]
  },
  {
    "id": "univ-sm-q17",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Linear Magnification Formula",
    "difficulty": "Easy",
    "questionText": "The relation between the linear magnification m, the object distance u and the focal length f is:",
    "options": [
      "m = (f - u)/f",
      "m = f/(f - u)",
      "m = (f + u)/f",
      "m = f/(f + u)"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nFrom the mirror formula:\n1/v + 1/u = 1/f.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Multiply the entire equation by u:\n   u/v + 1 = u/f\n2. Since linear magnification m = -v/u, we have u/v = -1/m:\n   -1/m + 1 = u/f\n   1 - u/f = 1/m\n   (f - u)/f = 1/m\n3. Inverting both sides:\n   m = f / (f - u).\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nTwo master magnification formulas to memorize:\n- In terms of u: m = f / (f - u)\n- In terms of v: m = (f - v) / f.",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Magnification Formula",
      "Universal Self-Scorer",
      "NEET 2027"
    ]
  },
  {
    "id": "univ-sm-q18",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Street Light Reflector",
    "difficulty": "Easy",
    "questionText": "While using an electric bulb, the reflection for street lighting should be from:",
    "options": [
      "Concave mirror",
      "Convex mirror",
      "Cylindrical mirror",
      "Parabolic mirror"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nStreet lamps require diverging the light over as wide a roadway area as possible to illuminate large sections of the street evenly. A **convex mirror** diverges the reflected rays over a wide field, making it the ideal reflector for street lighting.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Concave mirror focuses light into a narrow, concentrated beam (used in torches/headlights).\n2. Convex mirror diverges light across wide angles.\n3. Therefore, convex reflectors provide wide-area street illumination.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\n- Street light reflector: Convex mirror (wide divergence).\n- Car headlight / Searchlight: Concave / Parabolic mirror (parallel beam).",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Convex Mirror",
      "Street Lighting",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-sm-q19",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Concave Mirror Screen Focusing",
    "difficulty": "Medium",
    "questionText": "A concave mirror is used to focus the image of a flower on a nearby screen 120 cm from the flower. If a lateral magnification of 16 is desired, the distance of the flower from the mirror should be: [MP PET 1986]",
    "options": [
      "8 cm",
      "12 cm",
      "80 cm",
      "120 cm"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nSince the image is caught on a screen, it must be a real image. For a real image in a concave mirror, the lateral magnification is negative: m = -v/u = -16 \u27f9 v = 16u.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Let distance of flower from mirror be u.\n2. Distance of image (screen) from mirror: v = 16u.\n3. Distance between flower and screen:\n   d = v - u = 16u - u = 15u.\n4. Given d = 120 cm:\n   15u = 120\n   u = 120 / 15 = 8 cm.\n5. Thus, the flower should be placed at a distance of 8 cm from the mirror.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nDistance between object and real image = (m - 1)u when m > 1.\n120 = (16 - 1)u = 15u \u27f9 u = 8 cm.",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Concave Mirror",
      "MP PET 1986",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-sm-q20",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Enlarged Virtual Image",
    "difficulty": "Easy",
    "questionText": "A virtual image larger than the object can be obtained by: [MP PMT 1986]",
    "options": [
      "Concave mirror",
      "Convex mirror",
      "Plane mirror",
      "Concave lens"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nComparing virtual images formed by optical devices for a real object:\n- **Plane mirror:** Virtual and same size (m = 1).\n- **Convex mirror:** Virtual and diminished (m < 1).\n- **Concave lens:** Virtual and diminished (m < 1).\n- **Concave mirror:** Virtual and **magnified/enlarged** (m > 1) when the object is placed between the pole and focus (u < f).\n\n\u26a1 **Step-by-Step Derivation:**\n1. Concave mirror with u < f yields |v| > |u|, hence m = -v/u > +1.\n2. Therefore, an enlarged virtual image is obtained by a **concave mirror**.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nEnlarged virtual image is the hallmark of a **concave mirror** and a **convex lens**.",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Concave Mirror",
      "MP PMT 1986",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-sm-q21",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Object at Centre of Curvature",
    "difficulty": "Easy",
    "questionText": "An object is placed 40 cm from a concave mirror of focal length 20 cm. The image formed is: [MP PET 1986; MP PMT/PET 1998]",
    "options": [
      "Real, inverted and same in size",
      "Real, inverted and smaller",
      "Virtual, erect and larger",
      "Virtual, erect and smaller"
    ],
    "correctAnswer": 0,
    "diagramSvg": "<svg viewBox=\"0 0 320 180\" class=\"w-full h-44 mx-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#0F172A\" rx=\"8\"/><line x1=\"20\" y1=\"100\" x2=\"300\" y2=\"100\" stroke=\"#64748B\" stroke-width=\"1.5\"/><path d=\"M280,20 Q260,100 280,180\" stroke=\"#38BDF8\" stroke-width=\"4\" fill=\"none\"/><circle cx=\"200\" cy=\"100\" r=\"3\" fill=\"#FDE047\"/><text x=\"195\" y=\"115\" fill=\"#FDE047\" font-size=\"9\">F (20cm)</text><circle cx=\"120\" cy=\"100\" r=\"4\" fill=\"#38BDF8\"/><text x=\"110\" y=\"115\" fill=\"#38BDF8\" font-size=\"10\" font-weight=\"bold\">C (40cm)</text><line x1=\"120\" y1=\"100\" x2=\"120\" y2=\"45\" stroke=\"#4ADE80\" stroke-width=\"3\"/><text x=\"90\" y=\"45\" fill=\"#4ADE80\" font-size=\"10\">Object</text><line x1=\"120\" y1=\"100\" x2=\"120\" y2=\"155\" stroke=\"#F43F5E\" stroke-width=\"3\"/><text x=\"90\" y=\"155\" fill=\"#F43F5E\" font-size=\"10\">Image</text><text x=\"140\" y=\"165\" fill=\"#94A3B8\" font-size=\"11\">At C: m = -1 (Real, inverted, same size)</text></svg>",
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nWhen an object is placed at the centre of curvature C of a concave mirror (u = 2f), the image is also formed at C (v = 2f). The image is real, inverted, and exactly the same size as the object (m = -1).\n\n\u26a1 **Step-by-Step Derivation:**\n1. Focal length f = 20 cm \u27f9 Radius of curvature R = 2f = 40 cm.\n2. Given object distance u = 40 cm = 2f.\n3. 1/v = 1/f - 1/u = -1/20 - (-1/40) = -1/40 \u27f9 v = -40 cm.\n4. Magnification m = -v/u = -(-40)/(-40) = -1.\n5. Negative sign indicates real and inverted; |m| = 1 indicates same size.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nObject at C (2f) \u27f9 Image at C (2f), real, inverted, same size.",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Concave Mirror",
      "Center of Curvature",
      "MP PET 1986",
      "MP PMT 1998",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-sm-q22",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Concave Mirror Virtual Image Distance",
    "difficulty": "Medium",
    "questionText": "A virtual image three times the size of the object is obtained with a concave mirror of radius of curvature 36 cm. The distance of the object from the mirror is: [MP PET 1986]",
    "options": [
      "5 cm",
      "12 cm",
      "10 cm",
      "20 cm"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nA virtual image formed by a concave mirror is erect, so magnification is positive: m = +3.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Radius of curvature R = 36 cm \u27f9 f = -18 cm.\n2. Virtual image \u27f9 m = +3.\n3. Using m = f / (f - u):\n   +3 = -18 / (-18 - u)\n4. Cross-multiplying:\n   3(-18 - u) = -18\n   -54 - 3u = -18\n   -3u = 36\n   u = -12 cm.\n5. The distance of the object from the mirror is 12 cm.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nCheck: u = 12 cm < f = 18 cm, confirming the object is between pole and focus, as required for a virtual image in a concave mirror!",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Concave Mirror",
      "MP PET 1986",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-sm-q23",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Two-Fold Magnification Object Distance",
    "difficulty": "Medium",
    "questionText": "Radius of curvature of concave mirror is 40 cm and the size of image is twice as that of object, then the object distance is: [AFMC 1995]",
    "options": [
      "60 cm",
      "20 cm",
      "40 cm",
      "30 cm"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nA concave mirror can form an image twice the size of the object in two cases:\n1. Real inverted image (m = -2).\n2. Virtual erect image (m = +2).\n\n\u26a1 **Step-by-Step Derivation:**\n1. R = 40 cm \u27f9 f = -20 cm.\n2. Case 1: Real image (m = -2):\n   -2 = -20 / (-20 - u)\n   40 + 2u = -20 \u27f9 2u = -60 \u27f9 u = -30 cm (Distance = 30 cm).\n3. Case 2: Virtual image (m = +2):\n   +2 = -20 / (-20 - u)\n   -40 - 2u = -20 \u27f9 -2u = 20 \u27f9 u = -10 cm (Distance = 10 cm).\n4. Among the given options (60 cm, 20 cm, 40 cm, 30 cm), 30 cm is present!\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nWhen image nature (real/virtual) is not specified, evaluate both m = -2 and m = +2 and match with the options.",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Concave Mirror",
      "AFMC 1995",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-sm-q24",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Optics Exception Analysis",
    "difficulty": "Medium",
    "questionText": "All of the following statements are correct except: [Manipal MEE 1995]",
    "options": [
      "The magnification produced by a convex mirror is always less than one",
      "A virtual, erect, same-sized image can be obtained using a plane mirror",
      "A virtual, erect, magnified image can be formed using a concave mirror",
      "A real, inverted, same-sized image can be formed using a convex mirror"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nLet us evaluate each option:\n- (a) True: For a convex mirror, m = f/(f + |u|) is always strictly less than 1.\n- (b) True: A plane mirror always produces a virtual, erect, same-sized image (m = +1).\n- (c) True: When an object is placed inside the focus of a concave mirror (u < f), it forms a virtual, erect, magnified image (m > 1).\n- (d) FALSE: A convex mirror ALWAYS produces a virtual, erect, and diminished image for any real object. It can never form a real, inverted, same-sized image.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Real, inverted, same-sized image is formed ONLY by a concave mirror (with object at C).\n2. Hence, statement (d) is the incorrect (except) statement.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nWatch out for 'except' questions. A convex mirror never produces real or same-sized images for real objects.",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Mirror Properties",
      "Manipal MEE 1995",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-sm-q25",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Object Placed Inside Focus",
    "difficulty": "Easy",
    "questionText": "If an object is placed 10 cm in front of a concave mirror of focal length 20 cm, the image will be: [MP PMT 1995]",
    "options": [
      "Diminished, upright, virtual",
      "Enlarged, upright, virtual",
      "Diminished, inverted, real",
      "Enlarged, upright, real"
    ],
    "correctAnswer": 1,
    "diagramSvg": "<svg viewBox=\"0 0 320 180\" class=\"w-full h-44 mx-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#0F172A\" rx=\"8\"/><line x1=\"20\" y1=\"100\" x2=\"300\" y2=\"100\" stroke=\"#64748B\" stroke-width=\"1.5\"/><path d=\"M220,20 Q200,100 220,180\" stroke=\"#38BDF8\" stroke-width=\"4\" fill=\"none\"/><circle cx=\"120\" cy=\"100\" r=\"3\" fill=\"#FDE047\"/><text x=\"115\" y=\"115\" fill=\"#FDE047\" font-size=\"9\">F (20cm)</text><line x1=\"170\" y1=\"100\" x2=\"170\" y2=\"60\" stroke=\"#4ADE80\" stroke-width=\"3\"/><text x=\"155\" y=\"55\" fill=\"#4ADE80\" font-size=\"10\">O (10cm)</text><line x1=\"260\" y1=\"100\" x2=\"260\" y2=\"20\" stroke=\"#F43F5E\" stroke-width=\"3\" stroke-dasharray=\"3,3\"/><text x=\"250\" y=\"15\" fill=\"#F43F5E\" font-size=\"10\" font-weight=\"bold\">I (Enlarged, virtual)</text><text x=\"60\" y=\"165\" fill=\"#94A3B8\" font-size=\"11\">u = 10 < f = 20 \u27f9 Virtual, upright, enlarged (m = +2)</text></svg>",
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nWhen a real object is placed between the pole and the principal focus of a concave mirror (u < f):\n- The reflected rays diverge and appear to meet behind the mirror.\n- The image formed is virtual, upright (erect), and enlarged.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Focal length f = -20 cm.\n2. Object distance u = -10 cm.\n3. Magnification:\n   m = f / (f - u) = (-20) / [-20 - (-10)] = -20 / -10 = +2.\n4. Positive sign \u27f9 upright and virtual.\n5. |m| = 2 > 1 \u27f9 enlarged.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nObject within focal length of concave mirror always gives: Enlarged, Upright, Virtual image.",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Concave Mirror",
      "MP PMT 1995",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-sm-q26",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Universal Virtual Erect Image Formation",
    "difficulty": "Medium",
    "questionText": "Which of the following form(s) a virtual and erect image for all positions of the object? [IIT-JEE 1996]",
    "options": [
      "Convex lens",
      "Concave lens",
      "Convex mirror",
      "Concave mirror"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nBoth a **convex mirror** and a **concave lens** diverge light rays originating from any real object placed anywhere along their principal axis, and therefore always form a virtual, erect, and diminished image.\n\n\u26a1 **Step-by-Step Derivation:**\n1. In the context of mirror optics questions:\n   - Concave mirror forms real inverted images for u > f.\n   - Convex lens forms real inverted images for u > f.\n   - Convex mirror ALWAYS forms a virtual, erect image for all positions of a real object.\n   - (Note: Concave lens also shares this property; in IIT-JEE 1996 multiple-correct format, both Concave lens and Convex mirror were correct).\n2. Within standard single-choice mirror curricula, **Convex mirror** is the primary correct answer.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nDiverging elements (Convex mirror, Concave lens) ALWAYS form virtual and erect images for real objects.",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Convex Mirror",
      "IIT-JEE 1996",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-sm-q27",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Object at Distance f from Convex Mirror",
    "difficulty": "Easy",
    "questionText": "A convex mirror has a focal length f. A real object is placed at a distance f in front of it from the pole produces an image at: [AFMC 2005]",
    "options": [
      "Infinity",
      "f",
      "f/2",
      "2f"
    ],
    "correctAnswer": 2,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nUsing the spherical mirror formula:\n1/v + 1/u = 1/f.\n\n\u26a1 **Step-by-Step Derivation:**\n1. For a convex mirror, focal length is positive: +f.\n2. Real object is at distance f in front of the mirror: u = -f.\n3. Substitute into mirror formula:\n   1/v + 1/(-f) = 1/f\n   1/v = 1/f + 1/f = 2/f\n   v = f / 2.\n4. The image is formed at a distance of f/2 behind the mirror.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nStudents often rush and think 'object at f means image at infinity' (confusing with concave mirror!). For convex mirror, image is always inside f, here at f/2.",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Convex Mirror",
      "AFMC 2005",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-sm-q28",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Mirror Selection for Upright Enlarged Image",
    "difficulty": "Hard",
    "questionText": "An object 1 cm tall is placed 4 cm in front of a mirror. In order to produce an upright image of 3 cm height one needs a: [SCRA 1994]",
    "options": [
      "Convex mirror of radius of curvature 12 cm",
      "Concave mirror of radius of curvature 12 cm",
      "Concave mirror of radius of curvature 4 cm",
      "Plane mirror of height 12 cm"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nAn upright image of height 3 cm from an object of height 1 cm has a positive magnification:\nm = +3 / 1 = +3.\nSince m > 1 and the image is upright, it CANNOT be formed by a convex mirror (which only gives m < 1) or a plane mirror (m = 1). It must be formed by a **concave mirror**.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Object distance u = -4 cm.\n2. Magnification m = +3.\n3. Using m = f / (f - u):\n   3 = f / [f - (-4)] = f / (f + 4)\n4. Cross-multiplying:\n   3(f + 4) = f\n   3f + 12 = f\n   2f = -12\n   f = -6 cm.\n5. Radius of curvature:\n   R = 2|f| = 2 \u00d7 6 cm = 12 cm.\n6. Therefore, one requires a **concave mirror of radius of curvature 12 cm**.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nUpright + Magnified (m = +3) \u27f9 Concave mirror with R = 2|f| = 12 cm.",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Concave Mirror",
      "SCRA 1994",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-sm-q29",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Matching Mirror Positions and Magnification",
    "difficulty": "Hard",
    "questionText": "Match List I with List II and select the correct answer using the codes given below the lists: [SCRA 1998]\n\nList I (Position of the object):\n(I) An object is placed at focus before a convex mirror\n(II) An object is placed at centre of curvature before a concave mirror\n(III) An object is placed at focus before a concave mirror\n(IV) An object is placed at centre of curvature before a convex mirror\n\nList II (Magnification):\n(A) Magnification is -\u221e\n(B) Magnification is +0.5\n(C) Magnification is +1\n(D) Magnification is -1\n(E) Magnification is +0.33",
    "options": [
      "I-B, II-D, III-A, IV-E",
      "I-A, II-D, III-C, IV-B",
      "I-C, II-B, III-A, IV-E",
      "I-B, II-E, III-D, IV-C"
    ],
    "correctAnswer": 0,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nEvaluate magnification m = f / (f - u) for each case:\n\n\u26a1 **Step-by-Step Derivation:**\n1. **(I) Object at focus before convex mirror:**\n   f_convex = +f, u = -f\n   m = f / [f - (-f)] = f / (2f) = +0.5 \u27f9 **Matches (B)**.\n\n2. **(II) Object at centre of curvature before concave mirror:**\n   f_concave = -f, u = -2f\n   m = (-f) / [(-f) - (-2f)] = -f / (+f) = -1 \u27f9 **Matches (D)**.\n\n3. **(III) Object at focus before concave mirror:**\n   f_concave = -f, u = -f\n   m = (-f) / [(-f) - (-f)] = -f / 0 = -\u221e \u27f9 **Matches (A)**.\n\n4. **(IV) Object at centre of curvature before convex mirror:**\n   f_convex = +f, u = -2f\n   m = f / [f - (-2f)] = f / (3f) = +1/3 \u2248 +0.33 \u27f9 **Matches (E)**.\n\nMatching Code: **I-B, II-D, III-A, IV-E** (Option a).\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nConvex mirror magnification is always positive and < 1: at F it is +0.5, at 2F it is +0.33.",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Match the Following",
      "SCRA 1998",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-sm-q30",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Concave Mirror Focal Length from Real Image",
    "difficulty": "Medium",
    "questionText": "A concave mirror gives an image three times as large as the object placed at a distance of 20 cm from it. For the image to be real, the focal length should be: [SCRA 1998; JIPMER 2000]",
    "options": [
      "10 cm",
      "15 cm",
      "20 cm",
      "30 cm"
    ],
    "correctAnswer": 1,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nFor a real image in a concave mirror, the magnification is negative: m = -3.\n\n\u26a1 **Step-by-Step Derivation:**\n1. Object distance u = -20 cm.\n2. Magnification m = -3.\n3. Using m = f / (f - u):\n   -3 = f / [f - (-20)] = f / (f + 20)\n4. Cross-multiplying:\n   -3(f + 20) = f\n   -3f - 60 = f\n   -4f = 60\n   f = -15 cm.\n5. The magnitude of the focal length of the concave mirror is 15 cm.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\nCheck: u = 20 cm lies between f = 15 cm and 2f = 30 cm, which correctly forms a real, inverted, magnified image beyond 2f!",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Concave Mirror",
      "SCRA 1998",
      "JIPMER 2000",
      "Universal Self-Scorer"
    ]
  },
  {
    "id": "univ-sm-q31",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Minimum Distance Between Object and Real Image",
    "difficulty": "Easy",
    "questionText": "The minimum distance between the object and its real image for a concave mirror is: [RPMT 1999]",
    "options": [
      "f",
      "2f",
      "4f",
      "Zero"
    ],
    "correctAnswer": 3,
    "explanation": "\ud83d\udcd8 **NCERT Concept:**\nFor a concave mirror, when a real object is placed at the centre of curvature C (u = 2f), its real image is also formed at the centre of curvature C (v = 2f).\n\n\u26a1 **Step-by-Step Derivation:**\n1. Distance between object and its real image:\n   D = |u - v|.\n2. When u = 2f, v = 2f:\n   D = |2f - 2f| = 0.\n3. For any other real object position:\n   - If u > 2f, f < v < 2f \u27f9 D > 0.\n   - If f < u < 2f, v > 2f \u27f9 D > 0.\n4. Hence, the minimum distance between a real object and its real image is **Zero**.\n\n\ud83d\udca1 **Examiner Pro-Tip:**\n- For concave mirror: Minimum distance = 0 (at C).\n- For convex lens: Minimum distance between real object and real image = 4f (at 2F).",
    "tags": [
      "Ray Optics",
      "Spherical Mirror",
      "Concave Mirror",
      "RPMT 1999",
      "Universal Self-Scorer"
    ]
  }
];

export const ALL_UNIVERSAL_RAY_OPTICS_QUESTIONS: Question[] = [
  ...UNIVERSAL_PLANE_MIRROR_QUESTIONS,
  ...UNIVERSAL_SPHERICAL_MIRROR_QUESTIONS
];
