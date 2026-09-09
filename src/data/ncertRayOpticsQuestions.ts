import { Question } from '../types';

export const NCERT_RAY_OPTICS_QUESTIONS: Question[] = [
  {
    "id": "ncert-phy-ch24-01",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Deviation Produced by an Equilateral Prism",
    "difficulty": "Easy",
    "questionText": "A ray of light is incident at an angle of 60° on a glass prism of refracting angle 60°. If the refractive index of the prism material is √3, the angle between the incident ray and the emergent ray (angle of deviation) will be: [NCERT Pg. 331]",
    "options": [
      "45°",
      "60°",
      "37°",
      "30°"
    ],
    "correctAnswer": 1,
    "explanation": "At the first face: sin i₁ / sin r₁ = μ => sin 60° / sin r₁ = √3 => (√3/2) / sin r₁ = √3 => sin r₁ = 1/2 => r₁ = 30°.\nInside the prism: r₁ + r₂ = A => 30° + r₂ = 60° => r₂ = 30°.\nBy symmetry, at the second face: i₂ = e = 60° (minimum deviation condition).\nDeviation δ = i + e - A = 60° + 60° - 60° = 60°.",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Prisms"]
  },
  {
    "id": "ncert-phy-ch24-02",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Telescope Tube Length in Strained Eye Adjustment",
    "difficulty": "Medium",
    "questionText": "The focal lengths of the objective and eyepiece of an astronomical telescope are 50 cm and 4 cm respectively. The length of the telescope tube when adjusted for the most strained eye (image at least distance of distinct vision D = 25 cm) is about: [NCERT Pg. 341]",
    "options": [
      "63 cm",
      "45 cm",
      "53 cm",
      "40 cm"
    ],
    "correctAnswer": 2,
    "explanation": "When the final image is formed at D = 25 cm: 1/v_e - 1/u_e = 1/f_e => -1/25 - 1/(-u_e) = 1/4 => 1/u_e = 1/4 + 1/25 = 29 / 100 => u_e = 100 / 29 ≈ 3.45 cm.\nTotal tube length L = f_o + u_e = 50 cm + 3.45 cm = 53.45 cm ≈ 53 cm.",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Optical Instruments"]
  },
  {
    "id": "ncert-phy-ch24-03",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Critical Angle in Terms of Travel Times",
    "difficulty": "Medium",
    "questionText": "Light takes time t₁ to travel a distance 'a' in medium 1, and time t₂ to travel a distance 'b' in medium 2. If medium 2 is optically denser than medium 1, the critical angle for the interface between the two media is: [NCERT Pg. 320]",
    "options": [
      "sin⁻¹[(a · t₂) / (b · t₁)]",
      "sin⁻¹[(b · t₁) / (a · t₂)]",
      "sin⁻¹[(a · t₁) / (b · t₂)]",
      "sin⁻¹[(b · t₂) / (a · t₁)]"
    ],
    "correctAnswer": 1,
    "explanation": "Speed in medium 1: v₁ = a / t₁. Speed in medium 2: v₂ = b / t₂.\nCritical angle for light going from denser medium 2 to rarer medium 1: sin C = v₂ / v₁ = (b / t₂) / (a / t₁) = (b · t₁) / (a · t₂).\nC = sin⁻¹[(b · t₁) / (a · t₂)].",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Total Internal Reflection"]
  },
  {
    "id": "ncert-phy-ch24-04",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Dispersive Power Dependence",
    "difficulty": "Easy",
    "questionText": "The dispersive power (ω) of a prism depends on: [NCERT Pg. 332]",
    "options": [
      "The refracting angle of the prism",
      "The physical size and shape of the prism",
      "The material of the prism",
      "Both the angle and size of the prism"
    ],
    "correctAnswer": 2,
    "explanation": "Dispersive power is defined as ω = (μ_v - μ_r) / (μ_y - 1). It is an intrinsic optical characteristic of the material of the prism and is completely independent of the refracting angle, shape, or geometric dimensions of the prism.",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Dispersion"]
  },
  {
    "id": "ncert-phy-ch24-05",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Refraction at a Spherical Convex Surface",
    "difficulty": "Medium",
    "questionText": "A spherical convex refracting surface of radius of curvature R = 2/9 m separates a rarer medium of refractive index 4/3 from a denser medium of refractive index 3/2. If an object is kept in the first medium at infinity (u = -∞), the position of the image is: [NCERT Pg. 325]",
    "options": [
      "1 m",
      "2 m",
      "1.5 m",
      "0.5 m"
    ],
    "correctAnswer": 0,
    "explanation": "Refraction formula at a spherical interface: μ₂ / v - μ₁ / u = (μ₂ - μ₁) / R.\n(3/2) / v - (4/3) / (-∞) = (3/2 - 4/3) / (2/9).\n(3/2) / v = (1/6) / (2/9) = (1/6) × (9/2) = 9/12 = 3/4.\nv = (3/2) / (3/4) = (3/2) × (4/3) = 2/2 = 1.0 m.",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Refraction at Spherical Surface"]
  },
  {
    "id": "ncert-phy-ch24-06",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Speed of Image for Object Moving Along Lens Axis",
    "difficulty": "Hard",
    "questionText": "A point object is moving with a speed of 8 cm/s along the principal axis of a converging lens of focal length 20 cm towards the lens. When the object is at a distance of 30 cm from the lens, the speed of the image is: [NCERT Pg. 328]",
    "options": [
      "32 cm/s",
      "34 cm/s",
      "20 cm/s",
      "10 cm/s"
    ],
    "correctAnswer": 0,
    "explanation": "Lens formula: 1/v - 1/u = 1/f. For u = -30 cm and f = +20 cm:\n1/v = 1/20 - 1/30 = 1/60 => v = +60 cm.\nTransverse/longitudinal velocity relation: v_image = (v / u)² · v_object = (60 / -30)² × (8 cm/s) = (-2)² × 8 = 4 × 8 = 32 cm/s.",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Lenses"]
  },
  {
    "id": "ncert-phy-ch24-07",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Focal Length of a Glass Equiconvex Lens",
    "difficulty": "Easy",
    "questionText": "A double convex lens of refractive index 1.5 has both radii of curvature equal to 30 cm. Incident rays of light parallel to the principal axis will converge at a distance from the lens equal to: [NCERT Pg. 328]",
    "options": [
      "20 cm",
      "10 cm",
      "15 cm",
      "30 cm"
    ],
    "correctAnswer": 3,
    "explanation": "From Lens Maker's formula: 1/f = (μ - 1) (1/R₁ - 1/R₂) = (1.5 - 1) [1/30 - (-1/30)] = 0.5 × (2/30) = 1/30 => f = 30 cm. Parallel rays converge at the focus, so distance = 30 cm.",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Lenses"]
  },
  {
    "id": "ncert-phy-ch24-08",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Refraction Angle Relation for Half Incident Angle",
    "difficulty": "Medium",
    "questionText": "If the angle of incidence i is half of the angle of refraction r in a medium of refractive index μ relative to the first medium (i.e., r = 2i), then the angle of incidence i is: [NCERT Pg. 317]",
    "options": [
      "cos⁻¹(1 / 2μ)",
      "cos⁻¹(1 / μ)",
      "sin⁻¹(1 / 2μ)",
      "sin⁻¹(1 / μ)"
    ],
    "correctAnswer": 0,
    "explanation": "By Snell's law: sin i / sin r = 1/μ => sin i / sin(2i) = 1/μ.\nsin i / [2 sin i cos i] = 1/μ => 1 / (2 cos i) = 1/μ => cos i = 1 / (2μ) => i = cos⁻¹(1 / 2μ).",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Snell's Law"]
  },
  {
    "id": "ncert-phy-ch24-09",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Concave Mirror Object Distance for Unit Magnification",
    "difficulty": "Easy",
    "questionText": "To obtain a magnification of magnitude equal to one (|m| = 1) for a real image, the distance of a real object from the pole of a concave mirror of focal length 10 cm should be: [NCERT Pg. 314]",
    "options": [
      "10 cm",
      "20 cm",
      "5 cm",
      "15 cm"
    ],
    "correctAnswer": 1,
    "explanation": "A concave mirror produces a real inverted image of the exact same size (|m| = 1) when the object is situated at the centre of curvature C: u = R = 2f = 2 × 10 cm = 20 cm.",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Spherical Mirrors"]
  },
  {
    "id": "ncert-phy-ch24-10",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Wavelength Change in Denser Medium",
    "difficulty": "Easy",
    "questionText": "A beam of monochromatic light of wavelength 3900 Å in air enters into glass of refractive index 1.5. Its wavelength inside the glass will be: [NCERT Pg. 317]",
    "options": [
      "1800 Å",
      "2600 Å",
      "3600 Å",
      "13000 Å"
    ],
    "correctAnswer": 1,
    "explanation": "When light enters a medium of refractive index μ, its frequency remains unchanged while its speed and wavelength decrease by a factor of μ: λ_medium = λ_air / μ = 3900 Å / 1.5 = 2600 Å.",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Refraction"]
  },
  {
    "id": "ncert-phy-ch24-11",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Power of Cut Lens Halves",
    "difficulty": "Easy",
    "questionText": "An equiconvex lens has power P. It is cut into two symmetrical halves by a plane containing the principal axis (longitudinally). The optical power of each individual half will be: [NEET-2019 (Odisha)]",
    "options": [
      "P",
      "0",
      "P / 2",
      "P / 4"
    ],
    "correctAnswer": 0,
    "explanation": "Cutting a lens along a plane containing the principal axis leaves the radii of curvature of both surfaces unchanged. Therefore, by Lens Maker's formula, the focal length f and the optical power P = 1/f of each half remain completely unchanged (P). Only the aperture area is halved, reducing image brightness.",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Lenses", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch24-12",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Radii of Curvature of Convex Lens",
    "difficulty": "Medium",
    "questionText": "A double convex lens has a focal length of 25 cm. The radius of curvature of one surface is double that of the other. If the refractive index of the lens material is 1.5, the two radii of curvature are: [NEET-2019 (Odisha)]",
    "options": [
      "50 cm, 100 cm",
      "100 cm, 50 cm",
      "25 cm, 50 cm",
      "18.75 cm, 37.5 cm"
    ],
    "correctAnswer": 3,
    "explanation": "Let R₁ = R and R₂ = -2R.\n1/f = (μ - 1) [1/R₁ - 1/R₂] => 1/25 = (1.5 - 1) [1/R + 1/(2R)] = 0.5 × (3 / 2R) = 3 / (4R).\n4R = 3 × 25 = 75 => R = 75 / 4 = 18.75 cm.\nSecond radius 2R = 2 × 18.75 = 37.5 cm.",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Lenses", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch24-13",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Glycerine-Filled Lens Combination",
    "difficulty": "Hard",
    "questionText": "Two similar thin equiconvex lenses, of focal length f each, are kept coaxially in contact with each other (focal length F₁). When the intervening space between the lenses is filled with glycerine (refractive index μ = 1.5, same as glass), the equivalent focal length becomes F₂. The ratio F₁ : F₂ is: [NEET-2019]",
    "options": [
      "2 : 1",
      "1 : 2",
      "2 : 3",
      "3 : 4"
    ],
    "correctAnswer": 1,
    "explanation": "Initial combination: 1/F₁ = 1/f + 1/f = 2/f => F₁ = f / 2.\nThe liquid filling the space forms an equiconcave lens with identical curvature radii and refractive index as the glass lenses, so its focal length is f_liquid = -f.\nNew focal length: 1/F₂ = 1/f + 1/(-f) + 1/f = 1/f => F₂ = f.\nRatio F₁ : F₂ = (f/2) / f = 1 : 2.",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Lenses", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch24-14",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Incorrect Statement Regarding Rainbow Formation",
    "difficulty": "Easy",
    "questionText": "Pick the INCORRECT statement in the context of rainbow formation: [NEET-2019]",
    "options": [
      "When light rays undergo two internal reflections in a raindrop, a secondary rainbow is formed",
      "The order of colours is reversed in the secondary rainbow compared to the primary",
      "An observer can see a rainbow when his front is facing towards the sun",
      "A rainbow is formed by the combined effect of dispersion, refraction, and internal reflection of sunlight"
    ],
    "correctAnswer": 2,
    "explanation": "An observer can see a rainbow only when the sun is behind him and water droplets are in front of him. Facing directly towards the sun makes it impossible to see the back-reflected/refracted rays forming the rainbow.",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Optical Phenomena", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch24-15",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Image Displacement in a Concave Mirror",
    "difficulty": "Medium",
    "questionText": "An object is placed at a distance of 40 cm from a concave mirror of focal length 15 cm. If the object is displaced by 20 cm towards the mirror, the displacement of the image will be: [NEET-2018]",
    "options": [
      "30 cm away from the mirror",
      "36 cm away from the mirror",
      "36 cm towards the mirror",
      "30 cm towards the mirror"
    ],
    "correctAnswer": 1,
    "explanation": "Initial position: u₁ = -40 cm, f = -15 cm.\n1/v₁ = 1/(-15) - 1/(-40) = -1/15 + 1/40 = -5/120 = -1/24 => v₁ = -24 cm.\nFinal position: u₂ = -(40 - 20) = -20 cm.\n1/v₂ = 1/(-15) - 1/(-20) = -1/15 + 1/20 = -1/60 => v₂ = -60 cm.\nImage displacement Δv = |v₂| - |v₁| = 60 - 24 = 36 cm away from the mirror.",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Spherical Mirrors", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch24-16",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Plane Mirror Rotation and Reflected Spot Displacement",
    "difficulty": "Medium",
    "questionText": "A beam of light from source L is incident normally on a plane mirror at distance x. The reflected spot falls on a scale just above L. When the mirror is rotated through a small angle θ, the spot shifts through distance y on the scale. The angle θ is: [NEET-2017]",
    "options": [
      "y / (2x)",
      "y / x",
      "x / (2y)",
      "x / y"
    ],
    "correctAnswer": 0,
    "explanation": "When a plane mirror is rotated by an angle θ, the reflected ray is deflected by an angle 2θ. For small angles, the linear shift on a screen at distance x is y = x · (2θ) => 2θ = y / x => θ = y / (2x).",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Plane Mirror", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch24-17",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Achromatic Combination Without Deviation",
    "difficulty": "Medium",
    "questionText": "A thin prism with refracting angle 10° has refractive index 1.42. It is combined with another thin prism of refractive index 1.7 to produce dispersion without deviation. The refracting angle of the second prism should be: [NEET-2017]",
    "options": [
      "4°",
      "6°",
      "8°",
      "10°"
    ],
    "correctAnswer": 1,
    "explanation": "For zero net deviation (dispersion without deviation): δ₁ + δ₂ = 0 => (μ₁ - 1) A₁ + (μ₂ - 1) A₂ = 0.\nA₂ = -[(μ₁ - 1) / (μ₂ - 1)] · A₁ = -[(1.42 - 1) / (1.7 - 1)] × 10° = -[0.42 / 0.70] × 10° = -0.6 × 10° = -6°.\nMagnitude of the refracting angle is 6°.",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Prisms", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch24-18",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Thickness of Glass Slab from Apparent Depths",
    "difficulty": "Easy",
    "questionText": "An air bubble trapped inside a glass slab of refractive index 1.5 appears 5 cm deep when viewed from one surface and 3 cm deep when viewed from the opposite face. The actual thickness of the slab is: [NEET (Phase-2) 2016]",
    "options": [
      "8 cm",
      "10 cm",
      "12 cm",
      "16 cm"
    ],
    "correctAnswer": 2,
    "explanation": "Apparent depth d' = real depth / μ.\nTotal thickness t = d₁ + d₂ = μ d₁' + μ d₂' = μ (d₁' + d₂') = 1.5 × (5 cm + 3 cm) = 1.5 × 8 cm = 12 cm.",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Refraction", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch24-19",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Refraction at Critical Angle",
    "difficulty": "Easy",
    "questionText": "In total internal reflection, when the angle of incidence in the denser medium is exactly equal to the critical angle for the pair of media, the angle of refraction in the rarer medium is: [NEET-2019]",
    "options": [
      "180°",
      "0°",
      "Equal to angle of incidence",
      "90°"
    ],
    "correctAnswer": 3,
    "explanation": "By definition, the critical angle C is the specific angle of incidence in the denser medium for which the corresponding angle of refraction in the rarer medium becomes 90° (the refracted ray grazes the interface).",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Total Internal Reflection", "NEET PYQ"]
  },
  {
    "id": "ncert-phy-ch24-20",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Silvered Plano-Convex Lens on Plane Face",
    "difficulty": "Medium",
    "questionText": "The radius of curvature of the curved surface of a plano-convex lens of refractive index 1.5 is 10 cm. If its plane surface is silvered, it behaves as a concave mirror of focal length:",
    "options": [
      "10 cm",
      "20 cm",
      "15 cm",
      "25 cm"
    ],
    "correctAnswer": 0,
    "explanation": "Focal length of lens: 1/f_L = (1.5 - 1)(1/10) = 0.5/10 = 1/20 => f_L = 20 cm.\nPlane mirror has focal length f_M = ∞.\nPower of combination: P = 2 P_L + P_M = 2 / f_L + 1 / f_M = 2 / 20 + 0 = 1/10 cm⁻¹.\nEquivalent concave mirror focal length F = 1 / P = 10 cm.",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Silvering of Lenses"]
  },
  {
    "id": "ncert-phy-ch24-21",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Displacement Method Object Size",
    "difficulty": "Easy",
    "questionText": "In the lens displacement method, for two positions of a convex lens between an object and a screen, the lengths of the images formed are 18 cm and 8 cm respectively. The actual length of the object is:",
    "options": [
      "10 cm",
      "12 cm",
      "13 cm",
      "14 cm"
    ],
    "correctAnswer": 1,
    "explanation": "In the displacement method, object size O is the geometric mean of the two image heights: O = √(I₁ · I₂) = √(18 × 8) = √144 = 12 cm.",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Displacement Method"]
  },
  {
    "id": "ncert-phy-ch24-22",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Radius of Circular Field of View of Fish",
    "difficulty": "Medium",
    "questionText": "A fish looking up through water (μ = 4/3) sees the entire outside world compressed into a circular horizon on the surface. If the fish is at a depth of 12 cm below the water surface, the radius of this circular horizon is:",
    "options": [
      "16 / √7 cm",
      "26 / √7 cm",
      "36 / √7 cm",
      "46 / √7 cm"
    ],
    "correctAnswer": 2,
    "explanation": "The radius of the circle of illumination is r = h tan C = h / √(μ² - 1).\nHere h = 12 cm and μ = 4/3 => μ² - 1 = 16/9 - 1 = 7/9 => √(μ² - 1) = √7 / 3.\nr = 12 / (√7 / 3) = (12 × 3) / √7 = 36 / √7 cm.",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Total Internal Reflection"]
  },
  {
    "id": "ncert-phy-ch24-23",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Refraction at Spherical Water Boundary",
    "difficulty": "Medium",
    "questionText": "A glass lens (μ_g = 1.5) has a focal length of 25 cm in air. If it is completely submerged in water of refractive index μ_w = 4/3, its new focal length in water will be:",
    "options": [
      "50 cm",
      "75 cm",
      "1 m",
      "1.25 m"
    ],
    "correctAnswer": 2,
    "explanation": "f_water / f_air = [(μ_g - 1) / (μ_g / μ_w - 1)] = [(1.5 - 1) / (1.5 / (4/3) - 1)] = 0.5 / (9/8 - 1) = 0.5 / (1/8) = 4.\nf_water = 4 × f_air = 4 × 25 cm = 100 cm = 1.0 m.",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Lenses"]
  },
  {
    "id": "ncert-phy-ch24-24",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Power of Thin Lens Combination in Contact",
    "difficulty": "Easy",
    "questionText": "A convex lens of focal length 20 cm is placed in contact with a concave lens of focal length 30 cm. The focal length and converging/diverging nature of the combination will be:",
    "options": [
      "60 cm converging",
      "60 cm diverging",
      "12 cm converging",
      "12 cm diverging"
    ],
    "correctAnswer": 0,
    "explanation": "f₁ = +20 cm, f₂ = -30 cm.\n1/F = 1/f₁ + 1/f₂ = 1/20 - 1/30 = (3 - 2)/60 = +1/60 cm⁻¹ => F = +60 cm.\nSince the effective focal length is positive (+60 cm), the combination is converging.",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Lenses"]
  },
  {
    "id": "ncert-phy-ch24-25",
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "Magnification of Compound Microscope Eyepiece and Objective",
    "difficulty": "Medium",
    "questionText": "A compound microscope has a total magnifying power of 48. The focal length of its eyepiece is 5 cm. If the final image is formed at the least distance of distinct vision (D = 25 cm), the linear magnification produced by the objective lens is:",
    "options": [
      "-8",
      "8",
      "-200",
      "200"
    ],
    "correctAnswer": 0,
    "explanation": "Magnification of eyepiece at near point: m_e = 1 + D / f_e = 1 + 25 / 5 = 6.\nTotal magnifying power M = |m_o| · m_e => 48 = |m_o| × 6 => |m_o| = 8.\nSince the objective forms a real, inverted image, m_o = -8.",
    "tags": ["NCERT NEET Physics", "Ray Optics and Optical Instruments", "Optical Instruments"]
  }
];
