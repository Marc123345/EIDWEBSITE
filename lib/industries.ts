export type IndustryProduct = { product: string; note: string }; // product slug + how it's used

export type Industry = {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  cardDesc: string;
  intro: string[];
  products: IndustryProduct[]; // products used in this industry
  why: { title: string; body: string };
  cta: string;
};

export const industries: Industry[] = [
  {
    slug: "dental",
    name: "Dental",
    h1: "Diamond Solutions for Dental Tool Manufacturers",
    metaTitle: "Diamond for Dental Tool Manufacturers | EID",
    metaDesc:
      "Metal bond diamond powder and micron abrasives for dental bur, rotary instrument, and grinding tool manufacturers. Consistent grades, reliable supply.",
    eyebrow: "Industry · Dental",
    cardDesc: "Metal bond diamond for sintered burs, rotary instruments, and grinding tools.",
    intro: [
      "Diamond for dental tool manufacturers.",
      "EID supplies the diamond material that goes into dental burs, rotary instruments, diamond discs, and grinding tools. We don't make dental tools — we supply the manufacturers who do.",
      "Our metal bond diamond powder, natural micron powder, and coated abrasives are used by dental instrument producers to manufacture sintered burs, electroplated points, and diamond-impregnated discs. Consistent grade, consistent supply, competitive pricing.",
    ],
    products: [
      {
        product: "metal-bond",
        note: "The primary material for sintered dental burs. Saw and wheel grades with controlled crystal shape and size distribution.",
      },
      {
        product: "natural-micron",
        note: "For fine finishing and polishing operations in dental instrument production.",
      },
      {
        product: "surface-enhancements",
        note: "Nickel-coated diamond improves retention in sintered bur matrices, reducing pull-out and extending instrument life.",
      },
    ],
    why: {
      title: "Why dental manufacturers choose EID",
      body: "Dental instrument production demands absolute batch-to-batch consistency. A bur that cuts differently from the last batch is a quality failure. EID's in-house QC tests every lot for crystal strength, size distribution, and coating weight — so your production line gets the same material every time.",
    },
    cta: "Request a Quote for Dental Diamond",
  },
  {
    slug: "optics-precision",
    name: "Optics & Precision",
    h1: "Diamond Solutions for Optics & Precision",
    metaTitle: "Diamond for Optics & Precision Tool Manufacturers | EID",
    metaDesc:
      "CVD single crystal, MCD, and fine diamond powders for optics, precision, watch, and luxury tool makers. Nanometer-tolerance finishing.",
    eyebrow: "Industry · Optics & Precision",
    cardDesc: "CVD single crystal, MCD, and fine powders for nanometer-tolerance finishing.",
    intro: [
      "Diamond for optics and precision tool makers.",
      "When the tolerance is measured in nanometers, the diamond has to be perfect. EID supplies CVD single crystal, MCD monocrystalline, and fine micron powders to manufacturers of single-point tools, lens-shaping tools, and ultra-precision finishing systems.",
      "Our customers in this space make the tools that shape infrared optics, contact lenses, watch components, and luxury goods — applications where surface finish and edge geometry are everything.",
    ],
    products: [
      {
        product: "cvd-single-crystal",
        note: "Grown to your specified orientation (<100>, <110>, <111>) for single-point turning and fly-cutting of optical surfaces.",
      },
      {
        product: "mcd",
        note: "HPHT synthesis, controlled edge geometry for turning and dressing tools.",
      },
      {
        product: "polycrystalline-micron",
        note: "Sub-micron grades for final polishing of optical surfaces to Ra values below 1 nm.",
      },
      {
        product: "natural-micron",
        note: "For lapping and intermediate polishing stages.",
      },
    ],
    why: {
      title: "Why optics manufacturers choose EID",
      body: "Optical tool making is unforgiving — a crystal defect or an orientation error ruins the tool and the workpiece. EID's CVD single crystal is grown to your exact specification, and every crystal is inspected for clarity, orientation accuracy, and dislocation density before shipping.",
    },
    cta: "Request a Quote for Optics-Grade Diamond",
  },
  {
    slug: "stone-glass-construction",
    name: "Stone, Glass & Construction",
    h1: "Diamond Solutions for Stone, Glass & Construction",
    metaTitle: "Diamond for Stone, Glass & Construction Tool Manufacturers | EID",
    metaDesc:
      "Metal bond grit, natural diamond, and flexible abrasive materials for stone saw, glass grinding, and construction tool manufacturers.",
    eyebrow: "Industry · Stone, Glass & Construction",
    cardDesc: "Metal bond saw segments and grit for heavy industrial tool makers.",
    intro: [
      "Diamond for stone, glass, and construction tool makers.",
      "Stone saws, glass grinding wheels, concrete core drills, flexible diamond pads — the tools that shape the built environment are built with diamond. EID supplies the grit, powder, and coated abrasives that go into them.",
      "Our metal bond diamond, natural grit, and nickel-coated powders are used by tool manufacturers producing everything from quarry wire saws to precision glass-polishing pads.",
    ],
    products: [
      {
        product: "metal-bond",
        note: "Saw grade for segments, blades, and wire beads; wheel grade for grinding cups and profile wheels.",
      },
      {
        product: "natural-grit",
        note: "For diamond segments and dressing tools.",
      },
      {
        product: "surface-enhancements",
        note: "Nickel-coated diamond for improved retention in sintered segments and longer blade life.",
      },
      {
        product: "resin-bond",
        note: "For flexible abrasive pads and polishing sheets used on glass and stone surfaces.",
      },
    ],
    why: {
      title: "Why stone and glass tool makers choose EID",
      body: "Volume, consistency, and price. Stone and construction tool production consumes large quantities of diamond, and tool performance depends on predictable crystal strength and size distribution. EID's full range means one supplier covers your saw grade, wheel grade, and polishing needs — simplifying procurement and ensuring consistency across your product line.",
    },
    cta: "Request a Quote for Stone & Glass Diamond",
  },
  {
    slug: "automotive-aerospace",
    name: "Automotive & Aerospace",
    h1: "CBN & Diamond Solutions for Automotive & Aerospace",
    metaTitle: "CBN & Diamond for Automotive & Aerospace Tool Manufacturers | EID",
    metaDesc:
      "CBN for hardened steel grinding, PCD for aluminium and composite machining. Superabrasive materials for automotive and aerospace tool makers.",
    eyebrow: "Industry · Automotive & Aerospace",
    cardDesc: "CBN and PCD for grinding superalloys and hardened steel.",
    intro: [
      "Superabrasives for automotive and aerospace tool makers.",
      "Automotive and aerospace manufacturing demand extreme precision on hardened and difficult-to-machine materials — hardened steel gears, cast iron engine blocks, aluminium structural parts, and carbon fibre composites. The tools that machine these parts depend on CBN and diamond.",
      "EID supplies CBN powder for vitrified and resin-bonded grinding wheels, PCD and PCBN blanks for cutting-tool inserts, and CVD polycrystalline logs for wheel dressing — the superabrasive materials that keep automotive and aerospace production lines running.",
    ],
    products: [
      {
        product: "cbn",
        note: "For grinding hardened steel crankshafts, camshafts, gears, and bearings.",
      },
      {
        product: "pcd-pcbn",
        note: "PCBN blanks for hard-turning inserts; PCD blanks for machining aluminium engine blocks and aerospace structural parts.",
      },
      {
        product: "cvd-polycrystalline",
        note: "Dressing logs for truing and dressing the grinding wheels used on automotive grinding lines.",
      },
    ],
    why: {
      title: "Why automotive and aerospace tool makers choose EID",
      body: "Production volumes in automotive grinding are measured in millions of parts per year. A lot of CBN that doesn't match the last one means recalibrating the grinding line — costly downtime. EID's batch-to-batch consistency, backed by in-house QC on every lot, is what keeps the line running without surprises.",
    },
    cta: "Request a Quote for Automotive & Aerospace",
  },
  {
    slug: "electronics-semiconductors",
    name: "Electronics & Semiconductors",
    h1: "Diamond Solutions for Electronics & Semiconductors",
    metaTitle: "Diamond Powder for Electronics & Semiconductor Manufacturing | EID",
    metaDesc:
      "Fine diamond micron powders for wafer dicing, lapping, and precision polishing in electronics and semiconductor manufacturing.",
    eyebrow: "Industry · Electronics & Semiconductors",
    cardDesc: "Fine powders and dicing solutions for high-tech markets.",
    intro: [
      "Diamond for electronics and semiconductor manufacturing.",
      "Semiconductor and electronics manufacturing requires the finest, most consistent diamond powders available — for dicing wafers, lapping substrates, and polishing to the surface finishes that modern chip fabrication demands.",
      "EID supplies monocrystalline and polycrystalline micron powders, MCD scribing tools, and fine natural diamond for the precision operations that underpin electronics manufacturing.",
    ],
    products: [
      {
        product: "polycrystalline-micron",
        note: "Sub-micron grades for final polishing of silicon, sapphire, SiC, and GaN wafers.",
      },
      {
        product: "natural-micron",
        note: "Natural and synthetic micron powder for lapping and intermediate polishing of electronic substrates.",
      },
      {
        product: "mcd",
        note: "For scribing and cleaving semiconductor wafers.",
      },
      {
        product: "metal-bond",
        note: "For dicing blades used to cut finished wafers into individual chips.",
      },
    ],
    why: {
      title: "Why electronics manufacturers choose EID",
      body: "Contamination and size distribution outliers are the enemy of semiconductor polishing. A single oversized particle can scratch a wafer and destroy hundreds of chips. EID's QC process tests every batch for tight particle size distribution with controlled D50 and minimal outliers — the consistency that semiconductor polishing demands.",
    },
    cta: "Request a Quote for Electronics-Grade Diamond",
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
