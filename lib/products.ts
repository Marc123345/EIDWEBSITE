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
  callouts?: Callout[];  // "How metal bond works", coatings section, "when to use", etc.
  applications: string[];
  specs: Spec[];
  quality?: string;      // custom QC paragraph (defaults provided in template)
  cta: string;           // CTA button label
  crossProducts: string[];    // product slugs
  crossApplications: string[]; // application hub slugs
  guides?: string[];     // related guide titles (link to /resources)
};

// The eight locked product groups, in revenue-priority order. Mesh and micron are
// forms within a product, not separate pages. Coatings are folded into the bond
// and CBN pages as sections, with no standalone coatings page.
export const PRODUCT_FAMILIES = [
  "Natural Diamond Grit & Powder",
  "Metal Bond Diamond",
  "Resin Bond Diamond",
  "CBN",
  "Single Crystal Diamond (CVD & MCD)",
  "Polycrystalline Diamond (PCD & CVD)",
  "Natural Tool Stones",
  "Polycrystalline Diamond Powder",
] as const;

export const products: Product[] = [
  {
    slug: "natural-grit",
    name: "Natural Diamond Grit (Mesh)",
    family: "Natural Diamond Grit & Powder",
    h1: "Natural Diamond Grit — Mesh Sizes",
    metaTitle: "Natural Diamond Grit (Mesh Sizes) | Industrial Abrasive | EID",
    metaDesc:
      "Natural diamond grit in graded mesh sizes, crushed and graded in-house for grinding, sawing, and dressing. Consistent size distribution, ISO 9001 QC.",
    eyebrow: "Natural Diamond Grit & Powder · Mesh Grit",
    cardDesc: "Graded mesh sizes for grinding, sawing, and dressing. Crushed and graded in-house.",
    intro: [
      "Natural diamond grit, crushed and graded in our own factory.",
      "EID manufactures natural diamond grit in standard and custom mesh sizes for grinding, sawing, dressing, and lapping. The raw material is crushed, shaped, and graded entirely in-house, then QC-tested before it ships, so the size distribution stays tight and repeatable from one order to the next.",
      "Standard grades ship from stock. Custom mesh specifications are made to order. If you know the sizing you need, the spec table is the starting point. If you are working from an application, tell us the tool and the material and we will specify the grade.",
    ],
    callouts: [
      {
        title: "Natural rotary diamonds",
        body:
          "We also supply natural rotary diamonds for dressing and truing, selected in-house from natural grades. These are enquiry-led rather than stocked to a fixed catalogue. Tell us the wheel and the dressing operation and we will match the stone.",
      },
    ],
    applications: [
      "Grinding wheels and segments for stone, glass, and construction materials.",
      "Saw blades and wire saws for stone and concrete cutting.",
      "Dressing tools for truing conventional grinding wheels.",
      "Lapping and rough polishing of hard, brittle materials.",
      "Non-ferrous, non-metallic work. For hardened or ferrous steels, CBN is the right material instead.",
    ],
    specs: [
      { label: "Mesh size range", value: "FEPA and US mesh, coarse to fine [confirm with Uri]" },
      { label: "Micron equivalent", value: "[confirm micron range for the mesh grades]" },
      { label: "Crystal shape", value: "Blocky, semi-blocky, irregular [confirm available shapes]" },
      { label: "Friability / strength", value: "[confirm grade descriptors]" },
      { label: "Typical grades", value: "[confirm EID grade naming, if branded]" },
      { label: "Packaging", value: "[confirm standard pack sizes]" },
    ],
    quality:
      "Every production run is graded and tested in our QC laboratory for size distribution, crystal shape, and strength. ISO 9001 certified, with full traceability from raw material to shipped lot and a certificate of analysis available on request. Grading is how the consistency is built, and QC is how it is proven.",
    cta: "Request a Quote or Sample",
    crossProducts: ["natural-micron", "tool-stones"],
    crossApplications: ["grinding-cutting-sawing-drilling"],
    guides: ["Diamond grit & micron size chart (mesh-to-micron conversion)", "Diamond vs CBN: which superabrasive for your application?"],
  },
  {
    slug: "natural-micron",
    name: "Natural Diamond Micron Powder",
    family: "Natural Diamond Grit & Powder",
    h1: "Diamond Micron Powder",
    metaTitle: "Diamond Micron Powder for Lapping & Polishing | EID",
    metaDesc:
      "Natural and synthetic diamond micron powder for lapping and polishing, graded in-house to tight tolerances. Datasheets and samples on request.",
    eyebrow: "Natural Diamond Grit & Powder · Micron Powder",
    cardDesc: "Fine powders for lapping, polishing, and surface finishing. Tight tolerances.",
    intro: [
      "Diamond micron powder, graded in-house for lapping and polishing.",
      "EID supplies natural and synthetic diamond micron powder for lapping, polishing, and fine surface finishing. Every batch is graded in our own laboratory to a tight, repeatable particle size distribution, which is the difference between a predictable finish and a surface you have to re-work.",
      "Available from coarse micron down to sub-micron, as dry powder, water or oil suspension, and paste. Tell us the material and the finish you are targeting and we will match the grade and format.",
    ],
    applications: [
      "Lapping of hard, brittle materials such as ceramics, carbide, glass, and sapphire.",
      "Polishing of optical components toward sub-nanometer surface finish.",
      "Superfinishing of PCD and PCBN cutting-tool inserts.",
      "Fine finishing of semiconductor and electronic substrates.",
    ],
    specs: [
      { label: "Size range", value: "Typical 0.25–100 µm [confirm real range with Uri]" },
      { label: "Crystal type", value: "Monocrystalline and polycrystalline [confirm]" },
      { label: "Size distribution", value: "Controlled D50 and span [confirm D-values and tolerance]" },
      { label: "Measurement method", value: "Laser diffraction / Coulter counter [confirm with Uri]" },
      { label: "Formats", value: "Dry powder, water or oil suspension, paste" },
      { label: "Packaging", value: "Syringes, jars, bottles, or custom [confirm]" },
    ],
    quality:
      "Particle size distribution is measured on every batch, with controlled D50 and span so the powder cuts the same way each time you order it. ISO 9001 certified, with a certificate of analysis available per lot. For fine polishing, consistency at the top and bottom of the distribution is what protects the workpiece, and that is exactly what our micron QC verifies.",
    cta: "Request a Quote or Sample",
    crossProducts: ["natural-grit", "polycrystalline-micron"],
    crossApplications: ["polishing-lapping", "semiconductor-electronics"],
    guides: ["How size distribution affects tool performance"],
  },
  {
    slug: "metal-bond",
    name: "Metal Bond Diamond Powder",
    family: "Metal Bond Diamond",
    h1: "Metal Bond Diamond Powder",
    metaTitle: "Metal Bond Diamond Powder (Saw & Wheel Grade) | EID",
    metaDesc:
      "Metal bond synthetic diamond in saw and wheel grades, coated and QC-upgraded for sintered tools. Mesh and micron, finished to your spec.",
    eyebrow: "Metal Bond Diamond · Saw & Wheel Grade",
    cardDesc: "Saw and wheel grades, coated and QC-upgraded for sintered and brazed tools.",
    intro: [
      "Metal bond diamond powder, QC-upgraded to your spec.",
      "Metal bond diamond is the workhorse for tools that cut under high pressure and heat: stone saw segments, core drill bits, grinding cups, and sintered dental burs. EID supplies it in saw grade, wheel grade, and custom formulations, in mesh and micron sizes, coated or uncoated.",
      "Every batch is re-processed and quality-controlled through our facility, graded and upgraded to meet your specification before it ships. That QC pass is what separates a metal bond grade you can build a production run around from one you have to re-qualify every order.",
    ],
    callouts: [
      {
        title: "How metal bond works",
        body:
          "Metal bond holds diamond mechanically in a hard sintered matrix. The bond wears slowly and exposes fresh diamond as it goes, which suits aggressive cutting of stone, concrete, glass, ceramics, and composites. The trade-off is a bond that needs the right crystal strength and shape to hold the diamond without pulling it out early, which is where grade selection and coating come in.",
      },
      {
        title: "Coated metal bond diamond",
        body:
          "Coating a diamond particle before it goes into the bond helps the matrix hold it, adding surface area and a metallurgical bridge so the crystal stays anchored under load instead of pulling out early. The result is longer tool life from the same diamond. EID applies coatings in-house, so you source the grit and the coating from one supplier. Electroless nickel is standard for sintered metal bond tools, applied at your target weight percentage; PVD and copper options are available where the bond system calls for them.",
      },
    ],
    applications: [
      "Stone and concrete saw blades and segments.",
      "Core drill bits for construction and mining.",
      "Diamond grinding cups and profile wheels for stone and glass.",
      "Sintered dental burs and rotary instruments.",
      "Wire saw beads for quarrying and block cutting.",
    ],
    specs: [
      { label: "Forms", value: "Mesh and micron" },
      { label: "Mesh size range", value: "[confirm with Uri]" },
      { label: "Micron size range", value: "[confirm]" },
      { label: "Grades", value: "Saw grade (high impact strength), wheel grade (controlled friability) [confirm]" },
      { label: "Crystal shape", value: "Blocky, semi-blocky [confirm]" },
      { label: "Coating options", value: "Electroless nickel, PVD metallic, copper [confirm available set]" },
      { label: "Packaging", value: "[confirm]" },
    ],
    quality:
      "Crystal strength, size distribution, shape factor, and coating weight are tested on every batch. ISO 9001 certified, and every lot is traceable from incoming material through QC to delivery, with a certificate of analysis on request. For a sintered tool, batch-to-batch consistency in strength and coating weight is what keeps your sinter results repeatable.",
    cta: "Request a Quote or Sample",
    crossProducts: ["resin-bond", "natural-grit"],
    crossApplications: ["dental", "grinding-cutting-sawing-drilling"],
    guides: ["Metal bond vs resin bond vs vitrified"],
  },
  {
    slug: "resin-bond",
    name: "Resin Bond Diamond Powder",
    family: "Resin Bond Diamond",
    h1: "Resin Bond Diamond Powder",
    metaTitle: "Resin Bond Diamond Powder (Friable Grades) | EID",
    metaDesc:
      "Friable, multi-crystalline resin bond diamond in mesh and micron for fine grinding and polishing. Consistent, QC-controlled grades, coatings available.",
    eyebrow: "Resin Bond Diamond · Friable Grades",
    cardDesc: "Friable, multi-crystalline grades for fine grinding and polishing.",
    intro: [
      "Resin bond diamond powder, friable grades for fine work.",
      "Resin bond diamond is built to fracture in a controlled way as it cuts, continuously exposing fresh edges. That makes it the grade for fine grinding, polishing, and finishing, where surface quality matters more than aggressive stock removal.",
      "EID supplies it in mesh and micron, monocrystalline and polycrystalline, coated or uncoated, each batch graded and QC-upgraded through our facility to your specification.",
    ],
    callouts: [
      {
        title: "Why friability matters in a resin bond",
        body:
          "A resin bond is softer than a metal bond and releases the diamond more readily. Pair it with a friable, multi-crystalline diamond and the crystal itself breaks down in a governed way, presenting new cutting points instead of dulling. The tool stays sharp and cuts cool, which protects the finish on carbide, ceramic, and glass. The grade you pick sets how fast that breakdown happens, so matching friability to the operation is the whole game.",
      },
      {
        title: "Coated resin bond diamond",
        body:
          "In a resin system, the coating does two jobs. It improves how the resin grips the diamond, so the crystal holds until it has done its work, and on metallic coatings it helps carry heat away from the cutting zone, which protects both the bond and the workpiece finish. Copper coating is a common choice for resin bonds for its thermal behaviour; nickel is used where retention is the priority. EID applies these coatings in-house, so a single order covers the grit and the coating.",
      },
    ],
    applications: [
      "Resin-bonded grinding wheels for carbide, ceramic, and glass.",
      "Polishing and fine finishing of precision components.",
      "Flexible abrasive products such as sheets, belts, and pads for glass and stone.",
      "Lapping and honing of hardened steels and technical ceramics.",
    ],
    specs: [
      { label: "Forms", value: "Mesh and micron" },
      { label: "Mesh size range", value: "[confirm with Uri]" },
      { label: "Micron size range", value: "[confirm]" },
      { label: "Crystal type", value: "Monocrystalline (blocky to irregular), polycrystalline (self-sharpening) [confirm]" },
      { label: "Friability grades", value: "[confirm EID grade descriptors]" },
      { label: "Coating options", value: "Nickel, copper [confirm available set]" },
      { label: "Packaging", value: "[confirm]" },
    ],
    quality:
      "Size distribution, crystal type, friability, and coating weight are checked on every batch. ISO 9001 certified, with a certificate of analysis per lot on request. For fine grinding and polishing, a grade that breaks down the same way every order is what keeps your finish predictable, and that consistency is what our QC confirms.",
    cta: "Request a Quote or Sample",
    crossProducts: ["metal-bond", "natural-micron"],
    crossApplications: ["semiconductor-electronics", "polishing-lapping"],
    guides: ["Metal bond vs resin bond vs vitrified"],
  },
  {
    slug: "cbn",
    name: "CBN Powder (Mesh & Micron)",
    family: "CBN",
    h1: "CBN Powder — Mesh & Micron",
    metaTitle: "CBN Powder (Mesh & Micron) for Ferrous Grinding | EID",
    metaDesc:
      "Cubic boron nitride (CBN) powder in mesh and micron grades for grinding hardened and ferrous steels where diamond cannot. QC-controlled, coatings available.",
    eyebrow: "CBN · Mesh & Micron",
    cardDesc: "The superabrasive for hardened and ferrous steels. Mesh and micron grades.",
    intro: [
      "CBN, the superabrasive for ferrous metals.",
      "Cubic boron nitride is the second-hardest material after diamond, and the only superabrasive that grinds hardened and ferrous steels efficiently. Diamond reacts chemically with iron at grinding temperatures and wears fast; CBN stays stable and keeps cutting.",
      "EID supplies CBN in mesh and micron grades, monocrystalline and microcrystalline, coated or uncoated, each batch graded and QC-upgraded through our facility. With CBN alongside the full diamond range, one supplier covers both the non-ferrous and the ferrous side of your production.",
    ],
    callouts: [
      {
        title: "CBN or diamond?",
        body:
          "Use diamond for non-ferrous and non-metallic materials: stone, glass, ceramics, carbide, composites. Use CBN for ferrous materials: hardened steel, cast iron, superalloys, high-speed steel. The deciding factor is heat and chemistry, not just hardness. Diamond is harder, but it degrades against iron at the temperatures grinding generates, so for hardened gears, bearings, crankshafts, and camshafts, CBN is the practical choice.",
      },
      {
        title: "Coated CBN",
        body:
          "Coating CBN before it goes into a bonded wheel improves how the matrix holds it, so the crystal stays anchored through the grind instead of releasing early. Nickel improves retention in metal and resin systems; titanium suits vitrified bonds, where it helps the chemical bond between the CBN and the glass matrix. EID applies these coatings in-house, so the grit and the coating come from one order.",
      },
    ],
    applications: [
      "Vitrified and resin-bonded CBN grinding wheels for hardened steel.",
      "Automotive crankshaft, camshaft, and gear grinding.",
      "Aerospace superalloy and turbine-component grinding.",
      "Tool-and-die grinding of hardened tool steels and HSS.",
      "Honing of cylinder and precision bores.",
    ],
    specs: [
      { label: "Forms", value: "Mesh and micron" },
      { label: "Mesh size range", value: "[confirm with Uri]" },
      { label: "Micron size range", value: "[confirm]" },
      { label: "Crystal type", value: "Monocrystalline (blocky, angular), microcrystalline [confirm]" },
      { label: "Toughness index", value: "[confirm with Uri]" },
      { label: "Coating options", value: "Nickel, titanium [confirm available set]" },
      { label: "Packaging", value: "[confirm]" },
    ],
    quality:
      "Crystal strength, size distribution, and coating weight are tested on every batch. ISO 9001 certified, with a certificate of analysis per lot on request. In high-volume ferrous grinding, a CBN lot that matches the last one is what keeps the grinding line from needing a re-set, and that consistency is what our QC confirms.",
    cta: "Request a Quote or Sample",
    crossProducts: ["pcbn", "metal-bond"],
    crossApplications: ["automotive-aerospace", "grinding-cutting-sawing-drilling"],
    guides: ["Diamond vs CBN: which superabrasive for your application?"],
  },
  {
    slug: "pcbn",
    name: "PCBN Discs & Blanks",
    family: "CBN",
    h1: "PCBN — Polycrystalline CBN Discs & Blanks",
    metaTitle: "PCBN Discs & Blanks | Polycrystalline CBN | EID",
    metaDesc:
      "PCBN discs and blanks for hard-turning and finish-machining hardened ferrous materials. A finished CBN form beyond powder. Specs and quotes on request.",
    eyebrow: "CBN · PCBN Discs & Blanks",
    cardDesc: "A finished CBN form for hard-turning and cutting inserts on hardened ferrous parts.",
    intro: [
      "PCBN, the finished CBN form for hard-turning.",
      "PCBN (polycrystalline cubic boron nitride) discs and blanks are the starting material for cutting-tool inserts that machine hardened ferrous parts. CBN grains are sintered under high pressure and temperature into a dense composite, harder and more heat-resistant than carbide, then supplied as discs or blanks ready to be cut into inserts.",
      "EID supplies PCBN in a range of diameters, thicknesses, CBN contents, and grain sizes. Where CBN powder goes into a grinding wheel, PCBN goes into a cutting edge. Both come from the same supplier, alongside the full diamond range.",
    ],
    callouts: [
      {
        title: "Where PCBN fits",
        body:
          "PCBN is for machining ferrous materials that are too hard for carbide and too valuable to grind slowly: hardened steel above roughly 45 HRC, cast iron, powder-metallurgy parts, and superalloys. It lets a shop hard-turn a finished part on a lathe instead of grinding it, which often removes a whole process step. PCBN is the ferrous counterpart to PCD, which does the same job for non-ferrous materials. CBN content and grain size set the trade-off between wear resistance and toughness: high-CBN grades for interrupted cuts and roughing, lower-CBN grades for continuous finishing.",
      },
    ],
    applications: [
      "Hard-turning and finish-machining inserts for hardened powertrain components.",
      "Finish machining of hardened gears and bearings.",
      "High-speed machining of cast iron brake rotors and cylinder liners.",
      "Turning of case-hardened and through-hardened steel parts.",
    ],
    specs: [
      { label: "Form", value: "Discs and blanks" },
      { label: "CBN content grades", value: "High / low CBN grade set [confirm with Uri]" },
      { label: "Grain size", value: "[confirm range]" },
      { label: "Disc diameters", value: "[confirm]" },
      { label: "Thicknesses", value: "[confirm]" },
      { label: "Substrate", value: "Carbide-backed [confirm]" },
      { label: "Custom grades", value: "Available to spec" },
    ],
    quality:
      "Every PCBN grade is checked against its specification for CBN content, grain size, and dimensional tolerance before it ships. ISO 9001 certified, with documentation available per order. For an insert maker cutting blanks to a fixed geometry, a substrate and a grade that match the last order are what keep the insert performance repeatable.",
    cta: "Request a Quote",
    crossProducts: ["cbn", "pcd-blanks"],
    crossApplications: ["automotive-aerospace", "tool-and-die"],
  },
  {
    slug: "cvd-single-crystal",
    name: "CVD Single Crystal Diamond",
    family: "Single Crystal Diamond (CVD & MCD)",
    h1: "CVD Single Crystal Diamond",
    metaTitle: "CVD Single Crystal Diamond (Mechanical Grade) | EID",
    metaDesc:
      "White CVD single crystal diamond, mechanical grade in 2, 3, and 4-point orientation, grown to your exact specification for single-point precision tools.",
    eyebrow: "Single Crystal · CVD",
    cardDesc: "White, mechanical-grade crystal grown to your orientation.",
    intro: [
      "CVD single crystal diamond, grown to your exact specification.",
      "EID supplies white, mechanical-grade CVD single crystal for single-point precision tooling, not gemstones. It is grown to your orientation and specification through an established growth partnership, then finished and inspected in-house, so you get made-to-spec crystal inside a single-source relationship alongside the rest of the diamond range.",
      "Available in 2-point, 3-point, and 4-point orientation, custom sizes, and specific crystallographic faces. Tell us the tool and the tolerance and we will specify the crystal.",
    ],
    callouts: [
      {
        title: "Where CVD single crystal earns its place",
        body:
          "For single-point tools, the crystal's orientation and clarity decide the quality of the finished part. Natural diamond cannot supply that consistently; every stone is different. CVD single crystal is grown to a defined orientation with low dislocation density, so the cutting edge behaves the same way tool to tool. That predictability is why it is the material for dressing and shaping optical surfaces, turning contact lenses to sub-micron tolerance, and machining luxury watch components.",
      },
      {
        title: "Grown to your specification",
        body:
          "Every crystal is grown to the orientation, size, and face you specify, then inspected here for clarity, orientation accuracy, and dislocation density before it ships. If your application needs a face or geometry outside the standard set, send us the drawing and we will confirm feasibility and lead time. This is made-to-order material, so the conversation usually starts with your spec rather than a stock list.",
      },
    ],
    applications: [
      "Single-point diamond dressing tools for precision grinding wheels.",
      "Turning and fly-cutting of infrared optics such as germanium, zinc selenide, and silicon.",
      "Precision machining of contact and intraocular lenses.",
      "Luxury watch component machining.",
      "Wire-drawing dies for fine wire.",
    ],
    specs: [
      { label: "Type", value: "CVD single crystal, white, mechanical grade" },
      { label: "Orientations", value: "2-point, 3-point, 4-point; <100>, <110>, <111> [confirm available faces]" },
      { label: "Sizes", value: "[confirm with Uri]" },
      { label: "Custom shapes / faces", value: "Available to spec" },
      { label: "Clarity", value: "Optical-grade, low dislocation density [confirm descriptors]" },
      { label: "Lead time", value: "Made to order [confirm typical lead time]" },
    ],
    cta: "Request a Custom Quote",
    crossProducts: ["mcd", "cvd-polycrystalline"],
    crossApplications: ["tool-and-die", "semiconductor-electronics", "polishing-lapping"],
    guides: ["CVD, MCD, and natural diamond compared"],
  },
  {
    slug: "mcd",
    name: "MCD (Monocrystalline)",
    family: "Single Crystal Diamond (CVD & MCD)",
    h1: "MCD — Monocrystalline Diamond (HPHT)",
    metaTitle: "MCD Monocrystalline Diamond (HPHT) | EID",
    metaDesc:
      "Monocrystalline (MCD) diamond in the HPHT range for single-point and precision tooling. Reproducible edge geometry, made to spec. Quotes on request.",
    eyebrow: "Single Crystal · MCD",
    cardDesc: "HPHT monocrystalline diamond for single-point and precision tooling.",
    intro: [
      "MCD, high-pressure high-temperature monocrystalline diamond.",
      "MCD (monocrystalline diamond) is grown under high pressure and high temperature into a single, defect-controlled crystal with predictable edge geometry and wear behaviour. It is the reproducible alternative to natural diamond for single-point and precision tooling, giving the tool maker the same edge order after order rather than the variation that comes with natural stones.",
      "EID supplies MCD in a range of sizes, shapes, and orientations for turning, dressing, wire drawing, and scribing. Standard grades and made-to-spec crystals both available.",
    ],
    callouts: [
      {
        title: "Where MCD fits among single crystals",
        body:
          "MCD, CVD single crystal, and natural diamond all give you a single crystal, and each suits a different job. MCD (HPHT) offers reproducible edge geometry at a lower cost than CVD, which makes it the workhorse for single-point turning and dressing where you need consistency across many tools. CVD single crystal is grown to a specified orientation for the most demanding optical and precision work. Natural stone still has a place in specific dressing applications.",
      },
    ],
    applications: [
      "Single-point turning of non-ferrous metals such as aluminium, copper, and brass.",
      "Dressing of conventional and superabrasive grinding wheels.",
      "Wire-drawing dies for copper, aluminium, and gold fine wire.",
      "Scribing and cutting of semiconductor wafers and glass.",
      "Precision engraving tools.",
    ],
    specs: [
      { label: "Type", value: "HPHT monocrystalline diamond" },
      { label: "Shapes", value: "Plate, blocky, octahedral, custom [confirm]" },
      { label: "Sizes", value: "[confirm with Uri]" },
      { label: "Orientations", value: "<100>, <110>, <111> [confirm]" },
      { label: "Quality grades", value: "[confirm EID grading system]" },
      { label: "Custom shapes", value: "Available to spec" },
    ],
    quality:
      "Every MCD grade is inspected against its specification for shape, size, and orientation before it ships. ISO 9001 certified, with documentation available per order. The reason to choose HPHT monocrystalline over natural stone is reproducibility, so consistency is exactly what our QC verifies.",
    cta: "Request a Quote",
    crossProducts: ["cvd-single-crystal", "tool-stones"],
    crossApplications: ["tool-and-die", "semiconductor-electronics"],
    guides: ["CVD, MCD, and natural diamond compared"],
  },
  {
    slug: "pcd-blanks",
    name: "PCD Discs & Blanks",
    family: "Polycrystalline Diamond (PCD & CVD)",
    h1: "PCD Discs & Blanks",
    metaTitle: "PCD Discs & Blanks for Cutting Tools | EID",
    metaDesc:
      "PCD discs and blanks for cutting-tool makers, a finished superabrasive form beyond powder. Grain sizes for non-ferrous machining. Quotes on request.",
    eyebrow: "Polycrystalline · PCD Blanks",
    cardDesc: "Finished blanks for cutting-tool insert makers working non-ferrous materials.",
    intro: [
      "PCD discs and blanks for cutting-tool inserts.",
      "PCD (polycrystalline diamond) discs and blanks are the starting material for insert makers machining non-ferrous and abrasive materials. Diamond grains are sintered under high pressure onto a carbide substrate, giving a cutting material far harder and more wear-resistant than carbide alone, supplied as discs or blanks ready to be laser-cut or EDM-cut into finished inserts.",
      "EID supplies PCD in a range of diameters, thicknesses, grain sizes, and grades. It is the non-ferrous counterpart to PCBN, which does the same job on hardened ferrous parts.",
    ],
    callouts: [
      {
        title: "Where PCD fits",
        body:
          "PCD machines materials that wear carbide out fast but are not ferrous: aluminium and aluminium alloys, copper and brass, carbon and glass-fibre composites, wood-based panels, and abrasive plastics. It holds a sharp edge far longer than carbide in these materials, which is what makes it economic for high-volume runs despite the higher tool cost. Grain size sets the trade-off: coarser grains resist wear and suit abrasive, interrupted work; finer grains take a keener edge and give a better finish. Do not use PCD on ferrous materials; for hardened steel and cast iron, PCBN is the right blank.",
      },
    ],
    applications: [
      "Turning, milling, and boring inserts for aluminium powertrain and structural components.",
      "Machining of aluminium airframe and structural parts.",
      "High-volume machining of composites for aerospace and wind energy.",
      "Cutting-tool inserts for wood-based panel and abrasive-plastic production.",
    ],
    specs: [
      { label: "Form", value: "Discs and blanks" },
      { label: "Grain sizes", value: "Typical 2–25 µm [confirm with Uri]" },
      { label: "Disc diameters", value: "[confirm]" },
      { label: "Thicknesses", value: "[confirm]" },
      { label: "Substrate", value: "Carbide-backed [confirm]" },
      { label: "Grades", value: "[confirm EID grade set by grain size / application]" },
      { label: "Custom grades", value: "Available to spec" },
    ],
    quality:
      "Every PCD grade is checked against its specification for grain size, substrate, and dimensional tolerance before it ships. ISO 9001 certified, with documentation available per order. For an insert maker cutting to a fixed geometry, a blank that matches the last order keeps the insert performance repeatable.",
    cta: "Request a Quote",
    crossProducts: ["cvd-polycrystalline", "pcbn"],
    crossApplications: ["tool-and-die", "automotive-aerospace"],
  },
  {
    slug: "cvd-polycrystalline",
    name: "CVD Polycrystalline (Dressing Logs)",
    family: "Polycrystalline Diamond (PCD & CVD)",
    h1: "CVD Polycrystalline — Dressing Logs",
    metaTitle: "CVD Polycrystalline Diamond Dressing Logs | EID",
    metaDesc:
      "Black polycrystalline CVD dressing logs for truing and dressing grinding wheels. Uniform hardness in every direction, made to spec. Quotes on request.",
    eyebrow: "Polycrystalline · CVD Dressing Logs",
    cardDesc: "Black polycrystalline logs for truing and dressing grinding wheels.",
    intro: [
      "CVD polycrystalline dressing logs, for truing and dressing wheels.",
      "CVD polycrystalline diamond logs true and dress conventional and superabrasive grinding wheels. The crystal structure is randomly oriented, so the log is equally hard in every direction, with no weak planes and no preferential wear. That gives more consistent, longer-lasting dressing than a natural stone, which wears along its cleavage.",
      "EID supplies the logs in standard and custom sizes, made to specification through our CVD growth partnership and finished in-house. Available in black polycrystalline grade.",
    ],
    callouts: [
      {
        title: "Why a polycrystalline log dresses better",
        body:
          "A natural diamond is a single crystal with cleavage planes, so it wears unevenly and can chip along a plane under load. A CVD polycrystalline log is built from countless small, randomly oriented crystals with no shared cleavage direction. As it dresses, it presents a uniform, self-renewing surface in every orientation, which keeps the dressing action consistent and the log lasting. For form dressing and CNC grinding centres, that consistency is what holds the wheel profile true across a production run.",
      },
    ],
    applications: [
      "Rotary dressing of aluminium oxide and silicon carbide grinding wheels.",
      "Form dressing of profile grinding wheels.",
      "Stationary and traverse dressing in CNC grinding centres.",
      "A higher-consistency alternative to natural diamond dressing tools.",
    ],
    specs: [
      { label: "Type", value: "CVD polycrystalline, black" },
      { label: "Log sizes", value: "Typical 3×3×3 mm to 10×10×10 mm [confirm with Uri]" },
      { label: "Custom sizes / shapes", value: "Available to spec" },
      { label: "Crystal structure", value: "Randomly oriented, isotropic hardness" },
      { label: "Lead time", value: "Made to order [confirm typical lead time]" },
    ],
    quality:
      "Every log is inspected against its specification for dimensions and structure before it ships. ISO 9001 certified, with documentation available per order. The reason to run a CVD log instead of a natural stone is consistency, so that is what our QC confirms.",
    cta: "Request a Quote",
    crossProducts: ["pcd-blanks", "tool-stones", "mcd"],
    crossApplications: ["grinding-cutting-sawing-drilling"],
    guides: ["CVD, MCD, and natural diamond compared"],
  },
  {
    slug: "tool-stones",
    name: "Natural Diamond Tool Stones",
    family: "Natural Tool Stones",
    h1: "Natural Diamond Tool Stones",
    metaTitle: "Natural Diamond Tool Stones | Dressing & Single-Point | EID",
    metaDesc:
      "Rough and shaped natural diamond tool stones for single-point dressing and set tools. Selected in-house for crystal quality and orientation.",
    eyebrow: "Natural Tool Stones · Single-Point & Dressing",
    cardDesc: "Rough and shaped natural diamond for single-point dressing and set tools.",
    intro: [
      "Natural diamond tool stones, selected for single-point work.",
      "EID supplies natural diamond tool stones for dressing, turning, and single-point applications. Each stone is inspected and selected in-house for crystal quality, orientation, and freedom from inclusions, because in a single-point tool one flaw in the stone becomes a flaw in every part it touches.",
      "Available as rough stones for setting by the tool maker, or shaped to your specification. This is enquiry-led material, so the conversation usually starts with your application rather than a fixed catalogue.",
    ],
    callouts: [
      {
        title: "Natural stone or a synthetic?",
        body:
          "Natural tool stones are tough and well suited to specific dressing and single-point jobs, and every stone is individual, which is both their character and their variability. Where you need reproducibility across many identical tools, MCD gives a defect-controlled, repeatable edge, and CVD polycrystalline logs give uniform hardness for rotary and form dressing. We supply all three, so the recommendation follows your operation rather than what we happen to stock.",
      },
    ],
    applications: [
      "Single-point dressing of conventional grinding wheels in aluminium oxide and silicon carbide.",
      "Turning and profiling of non-ferrous and non-metallic materials.",
      "Specialty tooling where natural diamond's edge retention and thermal conductivity are the reason to choose it over a synthetic.",
    ],
    specs: [
      { label: "Carat sizes", value: "[confirm with Uri]" },
      { label: "Shapes", value: "Rough, octahedral, macle, or shaped to drawing" },
      { label: "Quality grades", value: "[confirm EID grading / selection criteria]" },
      { label: "Setting", value: "Supplied loose for setting, or shaped to spec" },
    ],
    quality:
      "Because each stone is individual, selection is the quality step: every stone is inspected for crystal quality, orientation, and inclusions before it is matched to your application. ISO 9001 certified. Where you need documented consistency across a batch, we will tell you honestly whether natural stone or a synthetic alternative is the better fit.",
    cta: "Request a Quote",
    crossProducts: ["mcd", "cvd-polycrystalline", "natural-grit"],
    crossApplications: ["tool-and-die"],
    guides: ["CVD, MCD, and natural diamond compared"],
  },
  {
    slug: "polycrystalline-micron",
    name: "Polycrystalline Diamond Micron Powder",
    family: "Polycrystalline Diamond Powder",
    h1: "Polycrystalline Diamond Micron Powder",
    metaTitle: "Polycrystalline Diamond Micron Powder (Polishing) | EID",
    metaDesc:
      "Detonation-synthesis polycrystalline diamond micron powder for the most demanding polishing. Rounded, no-cleavage particles for a finer, uniform finish.",
    eyebrow: "Polycrystalline Diamond Powder · Micron",
    cardDesc: "Detonation-synthesis powder for the most demanding polishing.",
    intro: [
      "Polycrystalline diamond micron powder, for the finest polish.",
      "Polycrystalline diamond powder is made by detonation synthesis, which produces rounded, multi-crystalline particles with no cleavage planes. In use, each particle fractures to expose fresh micro-edges rather than dragging across the surface, so it polishes finer and more uniformly than monocrystalline powder of the same size.",
      "It is the grade for the most demanding polishing and lapping work. EID supplies it from sub-micron up, in dry powder, suspension, and paste. Tell us the material and the finish you need and we will match the grade and format.",
    ],
    callouts: [
      {
        title: "Why the polycrystalline particle polishes finer",
        body:
          "A monocrystalline particle has cleavage planes and sharp corners; under polishing pressure it can plough the surface and leave fine scratches. A detonation-synthesis polycrystalline particle is rounded and built from countless tiny crystals with no cleavage direction. Rather than gouging, it breaks down gradually into fresh cutting points, which produces a lower, more uniform surface roughness. Where the specification is measured in nanometers of Ra, that difference is the reason to choose this powder.",
      },
    ],
    applications: [
      "Final polishing of optical components such as lenses, mirrors, and prisms to sub-nanometer Ra.",
      "Polishing of semiconductor wafers and electronic substrates.",
      "Superfinishing of PCD and PCBN cutting-tool inserts.",
      "Polishing of ceramic and sapphire substrates.",
      "Fine lapping of carbide and hardened-steel precision parts.",
    ],
    specs: [
      { label: "Size range", value: "Typical 0.1–60 µm [confirm with Uri]" },
      { label: "Crystal type", value: "Polycrystalline, rounded, no cleavage" },
      { label: "Formats", value: "Dry powder, water or oil suspension, paste" },
      { label: "Size distribution", value: "Controlled D50 and span [confirm D-values]" },
      { label: "Packaging", value: "Syringes, bottles, or custom [confirm]" },
    ],
    quality:
      "Particle size distribution is measured on every batch, with controlled D50 and span, because in final polishing a single oversized particle can scratch the workpiece and cost the whole part. ISO 9001 certified, with a certificate of analysis per lot on request. Consistency at the top of the distribution is what protects the surface, and that is what our micron QC verifies.",
    cta: "Request a Quote or Sample",
    crossProducts: ["natural-micron", "resin-bond"],
    crossApplications: ["polishing-lapping", "semiconductor-electronics"],
    guides: ["How size distribution affects tool performance"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const productsByFamily = (family: string) =>
  products.filter((p) => p.family === family);
