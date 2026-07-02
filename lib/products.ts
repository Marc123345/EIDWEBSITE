export type Spec = { label: string; value: string };
export type Callout = { title: string; body: string | string[] };

export type Product = {
  slug: string;
  name: string;          // short label for nav / cards
  family: string;        // grouping for mega-menu + overview
  h1: string;
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  cardDesc: string;      // one-liner for grids
  intro: string[];       // hero/intro paragraphs
  callouts?: Callout[];  // "Why metal bond?", "When to use CBN", etc.
  applications: string[];
  specs: Spec[];
  quality?: string;      // custom QC paragraph (defaults provided in template)
  cta: string;           // CTA button label
  crossProducts: string[];   // product slugs
  crossIndustries: string[]; // industry slugs
  guides?: string[];     // related guide titles (link to /resources)
};

export const PRODUCT_FAMILIES = [
  "Natural Diamond",
  "Bonded Diamond Powders",
  "CBN",
  "Synthetic / Grown Diamond",
  "Finished Forms",
  "Specialist",
] as const;

export const products: Product[] = [
  {
    slug: "natural-grit",
    name: "Natural Diamond Grit (Mesh)",
    family: "Natural Diamond",
    h1: "Natural Diamond Grit — Mesh Sizes",
    metaTitle: "Natural Diamond Grit (Mesh Sizes) | Industrial Abrasive | EID",
    metaDesc:
      "Natural diamond grit in graded mesh sizes, manufactured in-house for grinding, sawing and dressing. Tight, consistent size distribution; ISO 9001 QC.",
    eyebrow: "Natural Diamond · Mesh Grit",
    cardDesc: "Graded mesh sizes for grinding, sawing, and dressing. Manufactured in-house.",
    intro: [
      "Natural diamond grit. Manufactured in-house. Graded to your specification.",
      "EID manufactures natural diamond grit in standard and custom mesh sizes for grinding, sawing, dressing, and lapping applications. Produced entirely in our own factory, every batch is graded and QC-tested to deliver tight, consistent size distribution.",
      "Available in a full range of mesh sizes from coarse to fine. Standard grades ship from stock; custom specifications manufactured to order.",
    ],
    applications: [
      "Grinding wheels and segments for stone, glass, and construction materials.",
      "Saw blades and wire saws for stone and concrete cutting.",
      "Dressing tools for truing conventional grinding wheels.",
      "Lapping and rough polishing of hard materials.",
    ],
    specs: [
      { label: "Available mesh sizes", value: "Full coarse–fine range [confirm with Uri]" },
      { label: "Crystal types", value: "Blocky, semi-blocky, irregular" },
      { label: "Coating options", value: "Nickel, copper, titanium (see Surface Enhancements)" },
      { label: "Packaging", value: "As specified" },
    ],
    cta: "Request a Quote or Sample",
    crossProducts: ["natural-micron", "surface-enhancements"],
    crossIndustries: ["stone-glass-construction"],
    guides: ["Diamond grit & micron size chart (mesh-to-micron conversion)"],
  },
  {
    slug: "natural-micron",
    name: "Natural Diamond Micron Powder",
    family: "Natural Diamond",
    h1: "Diamond Micron Powder",
    metaTitle: "Diamond Micron Powder for Lapping & Polishing | EID",
    metaDesc:
      "Natural and synthetic diamond micron powders for lapping and polishing, graded in-house to tight tolerances. Datasheets and samples on request.",
    eyebrow: "Natural Diamond · Micron Powder",
    cardDesc: "Fine powders for lapping, polishing, and surface finishing. Tight tolerances.",
    intro: [
      "Diamond micron powder. Precision-graded for lapping and polishing.",
      "EID supplies natural and synthetic diamond micron powders for lapping, polishing, and fine surface finishing. Every batch is graded in-house to deliver tight, repeatable particle size distribution — the consistency your process depends on.",
      "Available from coarse micron down to sub-micron. Suspension, paste, and dry powder formats.",
    ],
    applications: [
      "Lapping of hard and brittle materials (ceramics, carbide, glass, sapphire).",
      "Polishing of optical components to sub-nanometer surface finish.",
      "Surface finishing of PCD and PCBN cutting-tool inserts.",
      "Fine finishing of semiconductor and electronic substrates.",
    ],
    specs: [
      { label: "Available sizes", value: "Typical 0.25–100 µm [confirm with Uri]" },
      { label: "Crystal types", value: "Monocrystalline, polycrystalline" },
      { label: "Formats", value: "Dry powder, water or oil suspension, paste" },
      { label: "Packaging", value: "Syringes, jars, or custom" },
    ],
    quality:
      "Particle size distribution tested on every batch using laser diffraction / Coulter counter [confirm method with Uri]. Tight D50 and span control. ISO 9001 certified.",
    cta: "Request a Quote or Sample",
    crossProducts: ["natural-grit", "polycrystalline-micron", "surface-enhancements"],
    crossIndustries: ["optics-precision", "electronics-semiconductors"],
  },
  {
    slug: "tool-stones",
    name: "Natural Tool Stones",
    family: "Natural Diamond",
    h1: "Natural Diamond Tool Stones",
    metaTitle: "Natural Diamond Tool Stones | Single-Point Dressing | EID",
    metaDesc:
      "Natural diamond tool stones for single-point dressing and specialty tooling. Selected, shaped, and quality-checked by EID.",
    eyebrow: "Natural Diamond · Tool Stones",
    cardDesc: "Rough and shaped natural diamond for single-point dressing and specialty tooling.",
    intro: [
      "Natural diamond tool stones. Selected for single-point precision.",
      "Natural diamond tool stones for dressing, turning, and specialty single-point applications. Each stone is selected and inspected for crystal quality, orientation, and freedom from inclusions.",
      "Available as rough stones for setting by the tool maker, or shaped to specification.",
    ],
    applications: [
      "Single-point dressing of conventional (aluminium oxide, silicon carbide) grinding wheels.",
      "Turning and profiling of non-ferrous and non-metallic materials.",
      "Specialty tooling where natural diamond's edge retention and thermal conductivity are required.",
    ],
    specs: [
      { label: "Carat sizes", value: "[confirm with Uri]" },
      { label: "Shapes", value: "Rough, octahedral, macle, or shaped to drawing" },
      { label: "Quality grades", value: "[confirm grading system with Uri]" },
    ],
    cta: "Request a Quote",
    crossProducts: ["cvd-polycrystalline", "natural-grit"],
    crossIndustries: [],
  },
  {
    slug: "metal-bond",
    name: "Metal Bond Diamond Powder",
    family: "Bonded Diamond Powders",
    h1: "Metal Bond Diamond Powder",
    metaTitle: "Metal Bond Diamond Powder (Saw & Wheel Grade) | EID",
    metaDesc:
      "Metal-bond synthetic diamond in saw and wheel grades, coated and QC-upgraded for sintered tools. Mesh and micron, finished to your spec.",
    eyebrow: "Bonded Powders · Metal Bond",
    cardDesc: "Saw and wheel grades, coated and QC-upgraded for sintered and brazed tools.",
    intro: [
      "Metal bond diamond powder. Built for the toughest sintered tools.",
      "EID's metal bond diamond is engineered for tools that work under extreme pressure and heat — stone saw segments, core drill bits, grinding cups, and sintered dental burs. Every batch is QC-upgraded through our facility to meet your exact specification.",
      "Available in saw grade, wheel grade, and custom formulations. Mesh and micron sizes. Coated and uncoated.",
    ],
    callouts: [
      {
        title: "Why metal bond?",
        body:
          "Metal bond holds diamond mechanically in a hard sintered matrix. The bond wears slowly, exposing fresh diamond gradually — ideal for aggressive cutting of stone, concrete, glass, ceramics, and composites. It's the workhorse of the diamond tool industry.",
      },
      {
        title: "Coatings",
        body:
          "Nickel, copper, and titanium coatings improve diamond retention in the metal bond matrix, extend tool life, and reduce diamond pull-out during cutting. See our Surface Enhancements page for the full coating range.",
      },
    ],
    applications: [
      "Stone and concrete saw blades and segments.",
      "Core drill bits for construction and mining.",
      "Diamond grinding cups and wheels for stone and glass processing.",
      "Sintered dental burs and rotary instruments.",
      "Wire saw beads for quarrying and block cutting.",
    ],
    specs: [
      { label: "Mesh sizes", value: "[confirm range with Uri]" },
      { label: "Grades", value: "Saw grade (high impact strength), wheel grade (controlled friability)" },
      { label: "Crystal types", value: "Blocky, semi-blocky" },
      { label: "Coating options", value: "Nickel (30%, 50%, 60%), copper, titanium" },
      { label: "Custom", value: "Custom specs available" },
    ],
    quality:
      "Crystal strength, size distribution, shape factor, and coating weight tested on every batch. Every lot traceable from production through QC to delivery. ISO 9001 certified.",
    cta: "Request a Quote or Sample",
    crossProducts: ["resin-bond", "natural-grit", "surface-enhancements"],
    crossIndustries: ["dental", "stone-glass-construction"],
  },
  {
    slug: "resin-bond",
    name: "Resin Bond Diamond Powder",
    family: "Bonded Diamond Powders",
    h1: "Resin Bond Diamond Powder",
    metaTitle: "Resin Bond Diamond Powder (Friable Grades) | EID",
    metaDesc:
      "Friable, multi-crystalline resin-bond diamond in mesh and micron for fine grinding and polishing. Consistent, QC-controlled grades.",
    eyebrow: "Bonded Powders · Resin Bond",
    cardDesc: "Friable, multi-crystalline grades for fine grinding and polishing.",
    intro: [
      "Resin bond diamond powder. Controlled friability for fine grinding and polishing.",
      "Resin bond diamond is designed to fracture in a controlled way during use, continuously exposing fresh cutting edges. This makes it ideal for fine grinding, polishing, and finishing operations where surface quality matters more than aggressive stock removal.",
      "Available in mesh and micron sizes, monocrystalline and polycrystalline, with optional coatings.",
    ],
    applications: [
      "Resin-bonded grinding wheels for carbide, ceramic, and glass.",
      "Polishing and fine finishing of precision components.",
      "Flexible abrasive products (sheets, belts, pads) for glass and stone.",
      "Lapping and honing of hardened steels and technical ceramics.",
    ],
    specs: [
      { label: "Mesh sizes", value: "[confirm range]" },
      { label: "Micron sizes", value: "[confirm range]" },
      { label: "Crystal types", value: "Monocrystalline (blocky–irregular), polycrystalline (self-sharpening)" },
      { label: "Coating options", value: "Nickel, copper" },
      { label: "Friability grades", value: "[confirm with Uri]" },
    ],
    cta: "Request a Quote or Sample",
    crossProducts: ["metal-bond", "polycrystalline-micron", "natural-micron"],
    crossIndustries: ["stone-glass-construction"],
    guides: ["Metal bond vs resin bond vs vitrified: choosing a diamond bond system"],
  },
  {
    slug: "cbn",
    name: "CBN (Mesh & Micron)",
    family: "CBN",
    h1: "CBN Powder — Mesh & Micron",
    metaTitle: "CBN Powder (Mesh & Micron) for Ferrous Grinding | EID",
    metaDesc:
      "Cubic boron nitride (CBN) powder in mesh and micron grades — ideal for grinding hardened and ferrous steels where diamond cannot. QC-controlled.",
    eyebrow: "CBN · Mesh & Micron",
    cardDesc: "The superabrasive for hardened and ferrous steels. Mesh and micron grades.",
    intro: [
      "CBN. The superabrasive for ferrous metals.",
      "Cubic boron nitride (CBN) is the second-hardest material after diamond — and the only superabrasive that can efficiently grind hardened and ferrous steels. Diamond reacts chemically with iron at grinding temperatures, causing rapid wear. CBN does not.",
      "EID supplies CBN in mesh and micron grades, monocrystalline and microcrystalline, with optional coatings. Quality-controlled through our facility to ensure consistent crystal strength and size distribution.",
    ],
    callouts: [
      {
        title: "When to use CBN instead of diamond",
        body:
          "Use diamond for non-ferrous materials (stone, glass, ceramics, carbide, composites). Use CBN for ferrous materials (hardened steel, cast iron, superalloys, high-speed steel). The chemical stability of CBN at high temperatures makes it the only practical superabrasive for grinding hardened gears, bearings, crankshafts, and camshafts.",
      },
    ],
    applications: [
      "Vitrified and resin-bonded CBN grinding wheels for hardened steel.",
      "Automotive: crankshaft, camshaft, and gear grinding.",
      "Aerospace: superalloy and turbine component grinding.",
      "Tool and die: grinding of hardened tool steels and HSS.",
      "Honing of cylinder bores and precision bores.",
    ],
    specs: [
      { label: "Mesh sizes", value: "[confirm range]" },
      { label: "Micron sizes", value: "[confirm range]" },
      { label: "Crystal types", value: "Monocrystalline (blocky, angular), microcrystalline" },
      { label: "Coating options", value: "Nickel, titanium" },
      { label: "Toughness index", value: "[confirm with Uri]" },
    ],
    cta: "Request a Quote or Sample",
    crossProducts: ["metal-bond", "pcd-pcbn"],
    crossIndustries: ["automotive-aerospace"],
    guides: ["Diamond vs CBN: which superabrasive for your application?"],
  },
  {
    slug: "cvd-single-crystal",
    name: "CVD Single Crystal",
    family: "Synthetic / Grown Diamond",
    h1: "CVD Single Crystal Diamond",
    metaTitle: "CVD Single Crystal Diamond (Mechanical Grade) | EID",
    metaDesc:
      "White CVD single-crystal diamond, mechanical grade in 2/3/4-point orientation, grown to your exact specification for single-point precision tools.",
    eyebrow: "Synthetic / Grown · CVD Single Crystal",
    cardDesc: "White, mechanical-grade single crystal grown to your specification.",
    intro: [
      "CVD single crystal diamond. Grown to your exact specification.",
      "EID's CVD (chemical vapour deposition) single crystal diamond is grown as a flawless, white, mechanical-grade crystal — not a gemstone. It is engineered for single-point precision tooling where edge sharpness, wear resistance, and crystallographic orientation determine the quality of the finished part.",
      "Available in 2-point, 3-point, and 4-point orientation, custom sizes, and specific crystallographic faces. Each crystal is grown to your specification with our dedicated production partner.",
    ],
    callouts: [
      {
        title: "Why CVD single crystal?",
        body:
          "CVD single crystal offers a combination of optical clarity, hardness, and controlled orientation that natural diamond cannot consistently provide. It is the material of choice for dressing and shaping optical surfaces, precision turning of contact lenses, and machining luxury watch components to sub-micron tolerances.",
      },
    ],
    applications: [
      "Single-point diamond dressing tools for precision grinding wheels.",
      "Turning and fly-cutting of infrared optics (germanium, zinc selenide, silicon).",
      "Precision machining of contact lenses and intraocular lenses.",
      "Luxury watch component machining (cases, bezels, indices).",
      "Wire drawing dies for fine wire production.",
    ],
    specs: [
      { label: "Type", value: "CVD single crystal, white, mechanical grade" },
      { label: "Orientations", value: "<100>, <110>, <111> (2-point, 3-point, 4-point)" },
      { label: "Sizes", value: "[confirm with Uri]" },
      { label: "Quality", value: "Optical-grade clarity, low dislocation density" },
    ],
    cta: "Request a Quote",
    crossProducts: ["mcd", "cvd-polycrystalline"],
    crossIndustries: ["optics-precision"],
    guides: ["CVD, MCD, and natural diamond compared"],
  },
  {
    slug: "cvd-polycrystalline",
    name: "CVD Polycrystalline",
    family: "Synthetic / Grown Diamond",
    h1: "CVD Polycrystalline — Dressing Logs",
    metaTitle: "CVD Polycrystalline Diamond Dressing Logs | EID",
    metaDesc:
      "Black polycrystalline CVD dressing logs for truing and dressing grinding wheels. Durable, consistent, made to spec.",
    eyebrow: "Synthetic / Grown · CVD Polycrystalline",
    cardDesc: "Black polycrystalline dressing logs for truing grinding wheels.",
    intro: [
      "CVD polycrystalline dressing logs. The tool that keeps your grinding wheels sharp.",
      "CVD polycrystalline diamond logs are used to true and dress conventional and superabrasive grinding wheels. The randomly oriented crystal structure means uniform hardness in every direction — no weak planes, no preferential wear.",
      "Durable, consistent, and available in standard and custom log sizes.",
    ],
    applications: [
      "Rotary dressing of aluminium oxide and silicon carbide grinding wheels.",
      "Form dressing of profile grinding wheels.",
      "Stationary and traverse dressing in CNC grinding centres.",
      "Alternative to natural diamond dressing tools for higher consistency.",
    ],
    specs: [
      { label: "Type", value: "CVD polycrystalline, black" },
      { label: "Log sizes", value: "Typical 3×3×3 mm to 10×10×10 mm [confirm with Uri]" },
      { label: "Crystal structure", value: "Randomly oriented, isotropic hardness" },
      { label: "Custom", value: "Custom sizes and shapes available" },
    ],
    cta: "Request a Quote",
    crossProducts: ["cvd-single-crystal", "tool-stones"],
    crossIndustries: ["automotive-aerospace"],
  },
  {
    slug: "mcd",
    name: "MCD (Monocrystalline)",
    family: "Synthetic / Grown Diamond",
    h1: "MCD — Monocrystalline Diamond (HPHT)",
    metaTitle: "MCD Monocrystalline Diamond (HPHT) | EID",
    metaDesc:
      "Monocrystalline (MCD) diamond, HPHT range, for single-point and precision tooling — EID's strongest-ranking product line.",
    eyebrow: "Synthetic / Grown · MCD",
    cardDesc: "HPHT monocrystalline diamond for single-point and precision tooling.",
    intro: [
      "MCD. High-pressure, high-temperature monocrystalline diamond.",
      "MCD (monocrystalline diamond) is synthesised under extreme pressure and temperature to produce a single, defect-controlled crystal with predictable edge geometry and wear behaviour. It is the industrial alternative to natural diamond for single-point and precision tooling — offering reproducibility that natural stones cannot match.",
      "EID supplies MCD in a range of sizes, shapes, and orientations for turning, dressing, wire drawing, and scribing applications.",
    ],
    applications: [
      "Single-point turning of non-ferrous metals (aluminium, copper, brass).",
      "Dressing of conventional and superabrasive grinding wheels.",
      "Wire drawing dies for copper, aluminium, and gold fine wire.",
      "Scribing and cutting of semiconductor wafers and glass.",
      "Precision engraving tools.",
    ],
    specs: [
      { label: "Type", value: "HPHT monocrystalline diamond" },
      { label: "Shapes", value: "Plate, blocky, octahedral, custom" },
      { label: "Sizes", value: "[confirm with Uri]" },
      { label: "Orientations", value: "<100>, <110>, <111>" },
      { label: "Quality grades", value: "[confirm grading system]" },
    ],
    cta: "Request a Quote",
    crossProducts: ["cvd-single-crystal", "tool-stones"],
    crossIndustries: ["optics-precision", "electronics-semiconductors"],
  },
  {
    slug: "pcd-pcbn",
    name: "PCD / PCBN",
    family: "Finished Forms",
    h1: "PCD & PCBN Discs and Blanks",
    metaTitle: "PCD & PCBN Discs and Blanks | EID",
    metaDesc:
      "PCD and PCBN discs and blanks for cutting-tool manufacturers — a finished superabrasive form beyond powder. Specs and quotes on request.",
    eyebrow: "Finished Forms · PCD / PCBN",
    cardDesc: "Polycrystalline diamond and CBN discs and blanks for cutting-tool inserts.",
    intro: [
      "PCD and PCBN. Finished superabrasive forms for cutting-tool inserts.",
      "PCD (polycrystalline diamond) and PCBN (polycrystalline cubic boron nitride) discs and blanks are the starting material for cutting-tool insert manufacturers. They are sintered composites of diamond or CBN grains bonded under extreme pressure — harder and more wear-resistant than carbide, and available in shapes ready to be laser-cut or EDM-cut into finished inserts.",
      "EID supplies PCD and PCBN in disc and blank form, in a range of diameters, thicknesses, grain sizes, and grades.",
    ],
    callouts: [
      {
        title: "PCD vs PCBN",
        body: [
          "PCD: for machining non-ferrous materials — aluminium, copper, brass, composites (CFRP, GFRP), wood-based materials, and abrasive plastics.",
          "PCBN: for machining ferrous materials — hardened steel (>45 HRC), cast iron, powder metallurgy parts, and superalloys.",
        ],
      },
    ],
    applications: [
      "Turning, milling, and boring inserts for automotive powertrain components.",
      "Machining of aluminium structural parts for aerospace.",
      "Finish machining of hardened gears and bearings.",
      "High-speed machining of cast iron brake rotors and cylinder liners.",
      "Cutting-tool inserts for composite machining in aerospace and wind energy.",
    ],
    specs: [
      { label: "PCD grain sizes", value: "2 µm to 25 µm" },
      { label: "PCBN", value: "Grain sizes and CBN content grades" },
      { label: "Disc diameters", value: "[confirm with Uri]" },
      { label: "Thicknesses", value: "[confirm]" },
      { label: "Substrate", value: "Carbide-backed; custom grades available" },
    ],
    cta: "Request a Quote",
    crossProducts: ["cbn", "metal-bond"],
    crossIndustries: ["automotive-aerospace"],
  },
  {
    slug: "polycrystalline-micron",
    name: "Polycrystalline Micron Powder",
    family: "Specialist",
    h1: "Polycrystalline Diamond Micron Powder",
    metaTitle: "Polycrystalline Diamond Micron Powder (Polishing) | EID",
    metaDesc:
      "Detonation-synthesis polycrystalline diamond micron powder for the most demanding polishing applications. Ultra-fine, consistent grades.",
    eyebrow: "Specialist · Polycrystalline Micron",
    cardDesc: "Detonation-synthesis powder for ultra-fine polishing.",
    intro: [
      "Polycrystalline diamond micron powder. The finest polish, the tightest tolerances.",
      "Polycrystalline diamond powder is made by detonation synthesis — a process that produces rounded, multi-crystalline particles with no cleavage planes. During polishing, these particles fracture to expose fresh micro-edges rather than ploughing the surface, producing a finer, more uniform finish than monocrystalline powder.",
      "EID supplies polycrystalline micron powder in grades from sub-micron to 60 µm, in dry, suspension, and paste formats.",
    ],
    applications: [
      "Final polishing of optical components (lenses, mirrors, prisms) to sub-nanometer Ra.",
      "Polishing of semiconductor wafers and electronic substrates.",
      "Superfinishing of PCD and PCBN cutting-tool inserts.",
      "Polishing of ceramic and sapphire substrates.",
      "Fine lapping of carbide and hardened steel precision parts.",
    ],
    specs: [
      { label: "Sizes", value: "Typical 0.1–60 µm [confirm range]" },
      { label: "Crystal type", value: "Polycrystalline (rounded, no cleavage)" },
      { label: "Formats", value: "Dry powder, water or oil suspension, paste" },
      { label: "Packaging", value: "Syringes, bottles, or custom" },
    ],
    cta: "Request a Quote or Sample",
    crossProducts: ["natural-micron"],
    crossIndustries: ["optics-precision", "electronics-semiconductors"],
  },
  {
    slug: "surface-enhancements",
    name: "Surface Enhancements",
    family: "Specialist",
    h1: "Surface Enhancements — Coatings, Polish & Etch",
    metaTitle: "Diamond & CBN Coatings | Nickel, Copper, Titanium | EID",
    metaDesc:
      "Nickel, copper, and titanium coatings for diamond and CBN. Plus polish and etch treatments. Improve retention, extend tool life.",
    eyebrow: "Specialist · Surface Enhancements",
    cardDesc: "Nickel, copper, and titanium coatings; polish and etch treatments.",
    intro: [
      "Surface enhancements. Better retention, longer tool life.",
      "Coating diamond and CBN particles before bonding them into a tool improves how the matrix holds the abrasive — reducing pull-out, increasing tool life, and improving cutting performance. EID offers a full range of metallic coatings and surface treatments applied in-house.",
      "Available on any EID diamond or CBN product in mesh or micron sizes.",
    ],
    callouts: [
      {
        title: "Why coat diamond and CBN?",
        body:
          "Uncoated particles rely on mechanical interlocking alone to stay in the bond matrix. Under load, they can pull out prematurely — wasting expensive abrasive and shortening tool life. A metallic coating creates a chemical and mechanical bridge between the particle and the bond, so the diamond or CBN is held securely and wears down through use rather than falling out.",
      },
    ],
    applications: [
      "Nickel coating (30%, 50%, 60% by weight) — the industry standard for metal bond tools. Improves wettability and retention in sintered matrices.",
      "Copper coating — for resin bond and electroplated tools. Enhances thermal conductivity and bonding.",
      "Titanium coating — for vitrified bond tools. Improves chemical bonding between diamond/CBN and the vitrified matrix.",
      "Polish and etch treatments — to modify surface roughness and improve adhesion in specific bonding systems.",
    ],
    specs: [
      { label: "Nickel", value: "30%, 50%, 60% by weight" },
      { label: "Copper", value: "For resin bond and electroplated tools" },
      { label: "Titanium", value: "For vitrified bond tools" },
      { label: "Treatments", value: "Polish and etch" },
      { label: "Applies to", value: "Any EID diamond or CBN product (mesh or micron)" },
    ],
    cta: "Request a Quote",
    crossProducts: ["metal-bond", "resin-bond", "cbn"],
    crossIndustries: [],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const productsByFamily = (family: string) =>
  products.filter((p) => p.family === family);
