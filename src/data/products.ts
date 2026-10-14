export interface ProductItem {
  id: string;
  category: string;
  name: string;
  subtitle: string;
  gsm: string;
  fabric: string;
  fit: string;
  moq: number;
  image: string;
  tag: string;
  description: string;
  highlights: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  bestFor: string;
  leadTime: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: "cotton-round-neck",
    category: "Heavyweight Cotton",
    name: "100% Cotton Round Neck T-Shirts",
    subtitle: "Classic Bio-Washed Combed Compact Cotton",
    gsm: "180 – 220 GSM",
    fabric: "100% Super-Combed Bio-Washed Single Jersey",
    fit: "Regular Modern Fit with ribbed 1x1 crew neck",
    moq: 50,
    image: "/src/assets/images/product_heavyweight_cotton_1791995086441.jpg",
    tag: "Core Essential",
    description: "Engineered from long-staple combed cotton with zero-shrink bio-polish wash. Features Lycra-ribbed neckband that resists bacon-neck stretch even after 50+ industrial washes.",
    highlights: [
      "Zero-shrink compact yarn",
      "Twin-needle hem & sleeve reinforcement",
      "Silicone enzyme wash for ultra-soft hand feel",
      "Optimal base for high-density DTF and screen printing"
    ],
    colors: [
      { name: "Obsidian Black", hex: "#09090b" },
      { name: "Chalk White", hex: "#f4f4f5" },
      { name: "Washed Slate", hex: "#3f3f46" },
      { name: "Deep Navy", hex: "#0f172a" }
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    bestFor: "Streetwear brands, premium merchandise, creator capsule drops",
    leadTime: "7 - 10 Days"
  },
  {
    id: "cotton-polo",
    category: "Heavyweight Cotton",
    name: "Cotton Polo Collar T-Shirts",
    subtitle: "Heavyweight Pique Knit Luxury Finish",
    gsm: "220 – 260 GSM",
    fabric: "100% Combed Pique Double-Knit Cotton",
    fit: "Tailored Smart-Casual Fit with side vents",
    moq: 50,
    image: "/src/assets/images/product_luxury_polo_1791995086174.jpg",
    tag: "Refined Luxury",
    description: "Architectural structured polo collar with reinforced fused placket. Breathable pique structure ensures thermal regulation while maintaining an unyielding sharp silhouette.",
    highlights: [
      "Reinforced 3-button placket with tone-on-tone buttons",
      "Ribbed collar with anti-curl stay edge",
      "Split tennis hem with herringbone reinforcement tape",
      "Pre-shrunk fabric with deep reactive dye stability"
    ],
    colors: [
      { name: "Pitch Black", hex: "#09090b" },
      { name: "Pristine Ivory", hex: "#f8fafc" },
      { name: "Charcoal Heather", hex: "#27272a" },
      { name: "Midnight Navy", hex: "#172554" }
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    bestFor: "Corporate premium wear, boutique fashion labels, hospitality staff uniforms",
    leadTime: "8 - 12 Days"
  },
  {
    id: "drop-shoulder-oversized",
    category: "Heavyweight Cotton",
    name: "Drop Shoulder Oversized T-Shirts",
    subtitle: "Streetwear Atelier Heavyweight Silhouette",
    gsm: "240 – 300 GSM",
    fabric: "100% Combed Heavy Single Jersey (Interlock Grade)",
    fit: "Boxy Drop-Shoulder Relaxed Streetwear Cut",
    moq: 50,
    image: "/src/assets/images/product_heavyweight_cotton_1791995086441.jpg",
    tag: "Streetwear Flagship",
    description: "The definitive luxury streetwear canvas. Heavy 260–300 GSM drape that falls straight with zero cling. Thick 1.25\" ribbed collar with dropped armholes and exaggerated boxy chest width.",
    highlights: [
      "Ultra-dense 280 GSM textile drape for sculptural silhouette",
      "Thick high-density collar ribbing",
      "Drop-shoulder seam with chain-stitch reinforcement",
      "Vintage garment-dye and pigment-wash capable"
    ],
    colors: [
      { name: "Vintage Washed Black", hex: "#18181b" },
      { name: "Raw Bone White", hex: "#e4e4e7" },
      { name: "Shadow Charcoal", hex: "#3f3f46" },
      { name: "Earth Khaki", hex: "#52525b" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    bestFor: "High-end streetwear brands, luxury drop collections, touring merchandise",
    leadTime: "7 - 12 Days"
  },
  {
    id: "dryfit-round-neck",
    category: "Technical Dry-Fit",
    name: "Polyester Dry-Fit Round Neck T-Shirts",
    subtitle: "Micro-Porous High-Breathability Athletic Knit",
    gsm: "150 – 180 GSM",
    fabric: "100% Hydrophilic Micro-Mesh Polyester",
    fit: "Athletic Ergonomic Fit with raglan / set-in sleeves",
    moq: 50,
    image: "/src/assets/images/product_dryfit_active_1791995086872.jpg",
    tag: "Athletic Performance",
    description: "Constructed with advanced micro-mesh capillary channels that pull sweat away from skin instantly. Anti-odor silver-ion finish maintains freshness during high-intensity training.",
    highlights: [
      "Ultra-fast moisture wicking & rapid air-drying",
      "Flatlock anti-chafe interior seams",
      "Mechanical 4-way stretch without spandex degradation",
      "Featherlight weight with opaque tensile strength"
    ],
    colors: [
      { name: "Carbon Black", hex: "#09090b" },
      { name: "Steel Silver", hex: "#71717a" },
      { name: "Tactical Charcoal", hex: "#27272a" },
      { name: "Royal Cobalt", hex: "#1e3a8a" }
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    bestFor: "Marathons, CrossFit boxes, combat sports gyms, sports tournaments",
    leadTime: "5 - 8 Days"
  },
  {
    id: "dryfit-polo",
    category: "Technical Dry-Fit",
    name: "Polyester Dry-Fit Polo Collar T-Shirts",
    subtitle: "Performance Executive Activewear Knit",
    gsm: "180 – 210 GSM",
    fabric: "100% Technical Micro-Pique Jacquard Polyester",
    fit: "Athletic Tapered Cut with self-fabric structured collar",
    moq: 50,
    image: "/src/assets/images/product_luxury_polo_1791995086174.jpg",
    tag: "Performance Polo",
    description: "Bridges elite sports performance with sharp corporate aesthetics. Engineered micro-pique pattern guarantees thermal cooling on the field, golf course, or in corporate showrooms.",
    highlights: [
      "Permanent anti-odor and anti-bacterial fiber treatment",
      "Laser-cut fused placket with matte non-scratch buttons",
      "Wrinkle-resistant & zero-iron wash-and-wear readiness",
      "UV 30+ sun radiation protection weave"
    ],
    colors: [
      { name: "Stealth Black", hex: "#09090b" },
      { name: "Titanium White", hex: "#f4f4f5" },
      { name: "Navy Blue", hex: "#1e293b" },
      { name: "Asphalt Gray", hex: "#3f3f46" }
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    bestFor: "Golf clubs, corporate sports teams, tech team uniforms, motorsport crews",
    leadTime: "7 - 10 Days"
  },
  {
    id: "sublimation-round-neck",
    category: "Custom Sublimation",
    name: "Customized Sublimation Round Neck T-Shirts",
    subtitle: "360° All-Over Photographic Dye Dispersion",
    gsm: "160 – 200 GSM",
    fabric: "High-Density Filament Sublimation Polyester (Cotton-Feel)",
    fit: "Tailored Performance Cut with full-bleed continuous panel alignment",
    moq: 50,
    image: "/src/assets/images/craft_dtf_sublimation_1791995087878.jpg",
    tag: "All-Over Print",
    description: "Zero-hand-feel, molecular dye fusion. Artwork becomes one with the polymer matrix, guaranteeing zero peeling, zero cracking, and unlimited color gradients across seams and sleeves.",
    highlights: [
      "Edge-to-edge full-bleed all-over print capability",
      "Molecule-level dye fusion with zero fabric breathability loss",
      "Ultra-HD 1440 DPI photographic resolution",
      "Never fades under UV sunlight or chlorine water"
    ],
    colors: [
      { name: "Custom Graphic All-Over", hex: "#18181b" },
      { name: "Monochrome Pattern", hex: "#27272a" },
      { name: "Gradient Spectrum", hex: "#3f3f46" }
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    bestFor: "Esports jerseys, motorsport gear, festival drops, team event shirts",
    leadTime: "7 - 12 Days"
  },
  {
    id: "sublimation-polo",
    category: "Custom Sublimation",
    name: "Customized Sublimation Polo Collar T-Shirts",
    subtitle: "Engineered Panel & Collar Sublimation Print",
    gsm: "190 – 220 GSM",
    fabric: "Premium Micro-Interlock Poly with Poly-Rib Collar",
    fit: "Sport-Luxe Cut with custom printed collar & cuff trims",
    moq: 50,
    image: "/src/assets/images/craft_dtf_sublimation_1791995087878.jpg",
    tag: "Custom Engineered",
    description: "Combines the prestige of a collared polo with full customized sublimation styling. Collar bands, plackets, chest panels, and sleeves can feature custom gradients or vector graphics.",
    highlights: [
      "Custom-printed collar ribs & inner collar neck tapings",
      "Engineered cut-and-sew alignment before sublimation press",
      "High-contrast color depth with deep blacks and rich tones",
      "Pill-resistant filament yarn with smooth drape"
    ],
    colors: [
      { name: "Engineered Team Pattern", hex: "#09090b" },
      { name: "Dual-Tone Contrast", hex: "#27272a" },
      { name: "Architectural Grid", hex: "#3f3f46" }
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    bestFor: "Corporate tournament teams, car club polos, luxury branded uniforms",
    leadTime: "8 - 14 Days"
  },
  {
    id: "custom-dtf-printing",
    category: "Custom Printing",
    name: "Custom DTF Printing (Direct-To-Film)",
    subtitle: "Industrial 1200 DPI Micro-Pigment Heat Transfers",
    gsm: "Universal (160 – 350 GSM)",
    fabric: "Compatible with 100% Cotton, Poly-Blends, Fleece & French Terry",
    fit: "Custom Placement (Chest, Back, Sleeve, Nape, Hem)",
    moq: 30,
    image: "/src/assets/images/craft_dtf_sublimation_1791995087878.jpg",
    tag: "Precision Transfer",
    description: "Industrial Direct-to-Film transfer technology powered by high-elasticity polyurethane powder. Delivers razor-sharp micro-typography, photorealistic gradients, and 50+ wash longevity without edge lifting.",
    highlights: [
      "1200 DPI photographic resolution with pure CMYK+White underbase",
      "High-stretch elastomeric adhesive resists cracked prints",
      "Zero screen charges – ideal for multi-color complex artworks",
      "Hot-peel finish with soft semi-matte textured finish"
    ],
    colors: [
      { name: "Monochrome Black/White", hex: "#09090b" },
      { name: "Full Color Photorealistic", hex: "#3f3f46" },
      { name: "Metallic & High-Density", hex: "#71717a" }
    ],
    sizes: ["Universal Application"],
    bestFor: "Streetwear graphic tees, complex logos, creator merchandise, small & large runs",
    leadTime: "3 - 7 Days"
  }
];

export const BRAND_INFO = {
  name: "LYCAN",
  legalName: "SK Designer Garments",
  tagline: "Professional T-Shirt Manufacturing & Custom Garments",
  email: "skdesignergarments@gmail.com",
  instagramUrl: "https://www.instagram.com/lycan_garments/",
  instagramHandle: "@lycan_garments",
  whatsappInquiry: "Quick response within 2 hours on Instagram DM",
  productionLocation: "India (Global Export & Domestic Supply)",
  metrics: [
    { label: "Fabric Density Range", value: "150–300 GSM" },
    { label: "Monthly Output Capacity", value: "50,000+ Units" },
    { label: "Sample Development Time", value: "3–5 Days" },
    { label: "Wash Longevity Tested", value: "50+ Cycles" }
  ]
};
