/* =========================================================================
   EID PRODUCT HERO VISUALS
   One SVG per product, depicting the actual material — crystal habit,
   bond context, wafer structure, coatings — on the EID midnight system.
   Server components (pure SVG). Dispatcher: <ProductVisual slug="..." />
   Palette: facets #c4d6fc/#7894d6, edges #b3c5ff→#2c3c6c, CBN amber,
   labels Rubik caps #8ea2c9. Designed for the stone-frame viewport.
   ========================================================================= */

import type { ReactNode } from "react";

const VB = "0 0 400 300";
const LBL = {
  fontFamily: "Rubik, sans-serif",
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: "0.12em",
  fill: "#8ea2c9",
} as const;

function Edge({ id }: { id: string }) {
  return (
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#b3c5ff" />
      <stop offset="1" stopColor="#2c3c6c" />
    </linearGradient>
  );
}

/* Irregular angular crystal (natural habit) */
function Grain({
  x, y, s, r = 0, o = 0.5, stroke, amber,
}: { x: number; y: number; s: number; r?: number; o?: number; stroke: string; amber?: boolean }) {
  const fill = amber ? "#e0b25c" : "#c4d6fc";
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <polygon
        points="0,-10 8,-4 9,4 3,10 -6,8 -10,0 -6,-7"
        fill={fill} fillOpacity={o} stroke={stroke} strokeWidth={1.2 / s}
      />
      <path d="M0,-10 L1,3 L3,10 M1,3 L-10,0 M1,3 L9,4" stroke={stroke} strokeWidth={0.8 / s} opacity="0.6" fill="none" />
    </g>
  );
}

/* Blocky cubo-octahedron (synthetic / metal-bond habit) */
function Blocky({
  x, y, s, o = 0.55, stroke, amber,
}: { x: number; y: number; s: number; o?: number; stroke: string; amber?: boolean }) {
  const fill = amber ? "#e0b25c" : "#c4d6fc";
  const dark = amber ? "#8a5a1a" : "#7894d6";
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <polygon points="0,-11 9,-6 9,5 0,11 -9,5 -9,-6" fill={fill} fillOpacity={o} stroke={stroke} strokeWidth={1.2 / s} />
      <polygon points="0,-11 9,-6 0,-1 -9,-6" fill="#fff" fillOpacity={o * 0.5} stroke={stroke} strokeWidth={0.7 / s} />
      <polygon points="0,-1 9,-6 9,5 0,11" fill={dark} fillOpacity={o * 0.55} stroke={stroke} strokeWidth={0.7 / s} />
      <line x1="0" y1="-1" x2="0" y2="11" stroke={stroke} strokeWidth={0.7 / s} opacity="0.7" />
    </g>
  );
}

/* 01 — Natural Diamond Grit (Mesh): sieve grid + graded angular crystals */
export function GritMeshVisual() {
  return (
    <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Natural diamond grit over a sieve mesh">
      <defs><Edge id="g1e" /></defs>
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`v${i}`} x1={40 + i * 40} y1="50" x2={40 + i * 40} y2="230" stroke="#3a4560" strokeWidth="1" opacity="0.55" />
      ))}
      {Array.from({ length: 5 }).map((_, i) => (
        <line key={`h${i}`} x1="40" y1={50 + i * 45} x2="360" y2={50 + i * 45} stroke="#3a4560" strokeWidth="1" opacity="0.55" />
      ))}
      <Grain x={95} y={92} s={2.6} r={18} o={0.55} stroke="url(#g1e)" />
      <Grain x={205} y={80} s={2.1} r={-30} o={0.5} stroke="url(#g1e)" />
      <Grain x={305} y={105} s={1.7} r={64} o={0.5} stroke="url(#g1e)" />
      <Grain x={140} y={172} s={1.4} r={120} o={0.45} stroke="url(#g1e)" />
      <Grain x={250} y={168} s={1.1} r={-80} o={0.45} stroke="url(#g1e)" />
      <Grain x={330} y={195} s={0.8} r={40} o={0.4} stroke="url(#g1e)" />
      <Grain x={72} y={205} s={0.65} r={10} o={0.4} stroke="url(#g1e)" />
      <line x1="40" y1="252" x2="360" y2="252" stroke="#8ea2c9" strokeWidth="1" />
      {[40, 120, 200, 280, 360].map((x) => (
        <line key={x} x1={x} y1="248" x2={x} y2="256" stroke="#8ea2c9" strokeWidth="1" />
      ))}
      <text x="40" y="274" style={LBL}>MESH 16</text>
      <text x="360" y="274" style={LBL} textAnchor="end">MESH 325</text>
      <text x="40" y="34" style={LBL}>SIEVE-GRADED · BLOCKY TO SHARP</text>
    </svg>
  );
}

/* 02 — Natural Micron Powder: particle field + D50 distribution curve */
export function NaturalMicronVisual() {
  const pts = [
    [60,190,2.2],[78,205,1.4],[92,182,2.8],[110,210,1.8],[125,192,3.4],[142,178,2.4],[150,206,1.5],
    [168,188,3.8],[185,200,2.6],[200,180,4.4],[214,204,3],[232,186,4],[248,198,2.4],[262,182,3.2],
    [280,202,2],[295,188,2.6],[312,200,1.6],[326,186,2.1],[340,204,1.2],[104,196,1.2],[220,194,1.4],
    [305,207,1],[70,178,1],[350,192,1.6],[180,212,1.1],[240,212,1.3],
  ] as const;
  return (
    <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Micron diamond powder with size distribution curve">
      <defs><Edge id="g2e" /></defs>
      <path d="M50,150 C110,150 130,52 200,52 C270,52 290,150 350,150" fill="none" stroke="url(#g2e)" strokeWidth="2" />
      <path d="M50,150 C110,150 130,52 200,52 C270,52 290,150 350,150 Z" fill="#2c3c6c" opacity="0.12" />
      <line x1="200" y1="52" x2="200" y2="150" stroke="#b3c5ff" strokeWidth="1" strokeDasharray="4 4" />
      <text x="200" y="40" style={LBL} textAnchor="middle">D50 ±1 µm</text>
      <line x1="50" y1="150" x2="350" y2="150" stroke="#3a4560" strokeWidth="1" />
      {pts.map(([x, y, r], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <polygon
            points={`0,${-r} ${r * 0.9},${-r * 0.3} ${r * 0.7},${r * 0.8} ${-r * 0.6},${r * 0.9} ${-r},0`}
            fill="#c4d6fc" fillOpacity="0.5" stroke="url(#g2e)" strokeWidth="0.7"
          />
        </g>
      ))}
      <text x="50" y="240" style={LBL}>0–0.5 µm</text>
      <text x="350" y="240" style={LBL} textAnchor="end">54–80 µm</text>
      <text x="50" y="276" style={LBL}>TIGHT-SPAN MICRON · LAPPING &amp; POLISHING</text>
    </svg>
  );
}

/* 03 — Natural Tool Stones: single large stone under measurement */
export function ToolStonesVisual() {
  return (
    <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Natural diamond tool stone with measurement marks">
      <defs><Edge id="g3e" /></defs>
      <g transform="translate(200 150)">
        <polygon points="0,-72 52,-26 44,34 0,66 -48,30 -54,-30" fill="#c4d6fc" fillOpacity="0.5" stroke="url(#g3e)" strokeWidth="1.6" />
        <path d="M0,-72 L-6,8 L0,66 M-6,8 L-54,-30 M-6,8 L44,34 M-6,8 L52,-26" stroke="url(#g3e)" strokeWidth="1" opacity="0.75" fill="none" />
        <polygon points="0,-72 52,-26 -6,8" fill="#fff" opacity="0.14" />
        <circle cx="-14" cy="-30" r="10" fill="#fff" opacity="0.28" />
      </g>
      <line x1="120" y1="238" x2="280" y2="238" stroke="#8ea2c9" strokeWidth="1" />
      <line x1="120" y1="232" x2="120" y2="244" stroke="#8ea2c9" strokeWidth="1" />
      <line x1="280" y1="232" x2="280" y2="244" stroke="#8ea2c9" strokeWidth="1" />
      <text x="200" y="258" style={LBL} textAnchor="middle">SELECTED BY SHAPE · POINTS &amp; DRESSERS</text>
      <Grain x={70} y={220} s={1.1} r={30} o={0.4} stroke="url(#g3e)" />
      <Grain x={332} y={212} s={0.9} r={-50} o={0.4} stroke="url(#g3e)" />
      <text x="50" y="40" style={LBL}>HAND-SORTED STONES</text>
    </svg>
  );
}

/* 04 — Metal Bond: blocky crystals embedded in sintered matrix */
export function MetalBondVisual() {
  return (
    <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Blocky diamond crystals embedded in a metal bond matrix">
      <defs>
        <Edge id="g4e" />
        <linearGradient id="g4m" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8a94a6" stopOpacity="0.5" />
          <stop offset="1" stopColor="#4a5260" stopOpacity="0.75" />
        </linearGradient>
      </defs>
      <rect x="40" y="160" width="320" height="90" fill="url(#g4m)" stroke="#8a94a6" strokeWidth="1" rx="2" />
      {[70, 130, 190, 250, 310].map((x, i) => (
        <Blocky key={x} x={x} y={i % 2 ? 178 : 164} s={i % 2 ? 1.5 : 1.9} o={0.7} stroke="url(#g4e)" />
      ))}
      <Blocky x={110} y={92} s={2.6} o={0.6} stroke="url(#g4e)" />
      <Blocky x={225} y={72} s={3.4} o={0.62} stroke="url(#g4e)" />
      <Blocky x={320} y={100} s={2.2} o={0.6} stroke="url(#g4e)" />
      <text x="40" y="40" style={LBL}>BLOCKY · HIGH-STRENGTH CRYSTAL</text>
      <text x="40" y="276" style={LBL}>SINTERED SEGMENTS · SAW &amp; WHEEL GRADES</text>
    </svg>
  );
}

/* 05 — Resin Bond: friable sharp crystals, fresh-edge fracture */
export function ResinBondVisual() {
  return (
    <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Friable diamond crystals for resin bond wheels">
      <defs><Edge id="g5e" /></defs>
      <path d="M40,250 A230,230 0 0 1 360,250" fill="none" stroke="#8a94a6" strokeWidth="10" opacity="0.4" />
      <path d="M40,250 A230,230 0 0 1 360,250" fill="none" stroke="url(#g5e)" strokeWidth="1" opacity="0.6" />
      {([[90,150,2,25],[150,110,2.6,-15],[215,90,3.1,40],[285,115,2.4,-60],[335,160,1.7,10]] as const).map(([x,y,s,r],i)=>(
        <g key={i} transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
          <polygon points="0,-12 7,-2 4,10 -5,9 -8,-3" fill="#c4d6fc" fillOpacity="0.45" stroke="url(#g5e)" strokeWidth={1.2/s} />
          <path d="M-2,-6 L3,2 M0,3 L-5,9" stroke="#b3c5ff" strokeWidth={0.9/s} opacity="0.85" />
        </g>
      ))}
      <g transform="translate(215 90)">
        <path d="M14,-16 L26,-28 M18,-4 L34,-8" stroke="#b3c5ff" strokeWidth="1" opacity="0.7" />
      </g>
      <text x="40" y="40" style={LBL}>FRIABLE · SELF-SHARPENING EDGES</text>
      <text x="40" y="276" style={LBL}>RESIN WHEELS · DRY &amp; WET GRINDING</text>
    </svg>
  );
}

/* 06 — CBN: amber crystals over hatched hardened-steel bar */
export function CbnVisual() {
  return (
    <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Amber CBN crystals above a hardened steel workpiece">
      <defs>
        <Edge id="g6e" />
        <linearGradient id="g6a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f0cf8a" />
          <stop offset="1" stopColor="#8a5a1a" />
        </linearGradient>
        <pattern id="g6h" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="8" stroke="#6a7488" strokeWidth="1.4" />
        </pattern>
      </defs>
      <rect x="40" y="188" width="320" height="58" fill="url(#g6h)" opacity="0.55" stroke="#8a94a6" strokeWidth="1" rx="2" />
      <text x="46" y="266" style={LBL}>HARDENED &amp; FERROUS STEELS · 60+ HRC</text>
      <Blocky x={120} y={120} s={2.8} o={0.7} stroke="url(#g6a)" amber />
      <Blocky x={225} y={92} s={3.6} o={0.72} stroke="url(#g6a)" amber />
      <Blocky x={315} y={128} s={2.2} o={0.68} stroke="url(#g6a)" amber />
      <Blocky x={65} y={158} s={1.4} o={0.6} stroke="url(#g6a)" amber />
      <Blocky x={270} y={162} s={1.2} o={0.6} stroke="url(#g6a)" amber />
      <text x="40" y="40" style={LBL} fill="#d9b26a">CUBIC BORON NITRIDE · STABLE TO 1,200°C</text>
    </svg>
  );
}

/* 07 — CVD Single Crystal: precise plate with growth layers */
export function CvdSingleVisual() {
  return (
    <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CVD single crystal diamond plate with growth layers">
      <defs><Edge id="g7e" /></defs>
      <g transform="translate(200 145)">
        <polygon points="-110,20 0,-38 110,20 0,78" fill="#c4d6fc" fillOpacity="0.32" stroke="url(#g7e)" strokeWidth="1.6" />
        <polygon points="-110,20 -110,44 0,102 0,78" fill="#7894d6" fillOpacity="0.4" stroke="url(#g7e)" strokeWidth="1" />
        <polygon points="110,20 110,44 0,102 0,78" fill="#4a5e96" fillOpacity="0.45" stroke="url(#g7e)" strokeWidth="1" />
        {[-0.6, -0.2, 0.2, 0.6].map((t) => (
          <polygon key={t} points={`${-110},${20 + t * 10} 0,${-38 + t * 10} 110,${20 + t * 10}`}
            fill="none" stroke="#b3c5ff" strokeWidth="0.6" opacity="0.4" />
        ))}
        <circle cx="-34" cy="-4" r="12" fill="#fff" opacity="0.22" />
      </g>
      <g transform="translate(320 60)">
        <line x1="0" y1="30" x2="0" y2="0" stroke="#8ea2c9" strokeWidth="1.2" />
        <polygon points="0,-2 -4,7 4,7" fill="#8ea2c9" />
        <text x="8" y="8" style={LBL}>&lt;100&gt;</text>
      </g>
      <text x="40" y="40" style={LBL}>GROWN TO SPEC · ORIENTATION-CUT</text>
      <text x="40" y="276" style={LBL}>DRESSERS · WIRE DIES · SINGLE-POINT TOOLS</text>
    </svg>
  );
}

/* 08 — CVD Polycrystalline: wafer with grain boundaries */
export function CvdPolyVisual() {
  return (
    <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CVD polycrystalline diamond wafer with grain boundaries">
      <defs>
        <Edge id="g8e" />
        <clipPath id="g8c"><circle cx="200" cy="140" r="88" /></clipPath>
      </defs>
      <circle cx="200" cy="140" r="88" fill="#c4d6fc" fillOpacity="0.2" stroke="url(#g8e)" strokeWidth="1.6" />
      <g clipPath="url(#g8c)" stroke="#b3c5ff" strokeWidth="0.9" opacity="0.75" fill="none">
        <path d="M200,52 L182,108 L120,120 M182,108 L216,150 L288,132 M216,150 L196,228 M216,150 L160,196 L112,182 M160,196 L172,228 M288,180 L242,192 L196,228 M242,192 L216,150" />
        <path d="M120,120 L150,64 M120,120 L112,182" />
      </g>
      <g clipPath="url(#g8c)">
        <polygon points="182,108 216,150 160,196 120,120" fill="#7894d6" opacity="0.22" />
        <polygon points="216,150 288,132 288,180 242,192" fill="#c4d6fc" opacity="0.2" />
      </g>
      <line x1="88" y1="256" x2="312" y2="256" stroke="#8ea2c9" strokeWidth="1" />
      <line x1="88" y1="250" x2="88" y2="262" stroke="#8ea2c9" strokeWidth="1" />
      <line x1="312" y1="250" x2="312" y2="262" stroke="#8ea2c9" strokeWidth="1" />
      <text x="200" y="278" style={LBL} textAnchor="middle">WAFER &amp; PLATE · LASER-CUT BLANKS</text>
      <text x="40" y="40" style={LBL}>POLYCRYSTALLINE · THERMAL &amp; MECHANICAL</text>
    </svg>
  );
}

/* 09 — MCD: long monocrystalline bar with orientation axis */
export function McdVisual() {
  return (
    <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Monocrystalline diamond bar with orientation axis">
      <defs><Edge id="g9e" /></defs>
      <g transform="translate(200 148) rotate(-14)">
        <polygon points="-130,-16 130,-16 148,0 130,16 -130,16 -148,0" fill="#c4d6fc" fillOpacity="0.35" stroke="url(#g9e)" strokeWidth="1.6" />
        <polygon points="-130,16 130,16 148,0 148,26 130,42 -130,42 -148,26 -148,0" fill="#4a5e96" fillOpacity="0.4" stroke="url(#g9e)" strokeWidth="1" />
        <line x1="-160" y1="0" x2="160" y2="0" stroke="#b3c5ff" strokeWidth="0.8" strokeDasharray="6 5" opacity="0.7" />
        <circle cx="-70" cy="-6" r="9" fill="#fff" opacity="0.2" />
      </g>
      <text x="40" y="40" style={LBL}>SINGLE CRYSTAL · NO GRAIN BOUNDARIES</text>
      <text x="40" y="276" style={LBL}>MCD · MIRROR-FINISH TURNING &amp; MILLING</text>
    </svg>
  );
}

/* 10 — PCD / PCBN: two-layer disc on carbide substrate */
export function PcdPcbnVisual() {
  return (
    <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="PCD disc cross-section on tungsten carbide substrate">
      <defs>
        <Edge id="g10e" />
        <pattern id="g10p" width="7" height="7" patternUnits="userSpaceOnUse">
          <circle cx="3.5" cy="3.5" r="1" fill="#c4d6fc" opacity="0.65" />
        </pattern>
      </defs>
      <g transform="translate(200 130)">
        <ellipse cx="0" cy="-30" rx="130" ry="34" fill="url(#g10p)" stroke="url(#g10e)" strokeWidth="1.6" />
        <path d="M-130,-30 L-130,-6 A130,34 0 0 0 130,-6 L130,-30" fill="#c4d6fc" fillOpacity="0.3" stroke="url(#g10e)" strokeWidth="1.2" />
        <path d="M-130,-6 L-130,58 A130,34 0 0 0 130,58 L130,-6" fill="#4a5260" fillOpacity="0.85" stroke="#8a94a6" strokeWidth="1.2" />
        <text x="150" y="-22" style={LBL}>PCD LAYER</text>
        <text x="150" y="34" style={LBL}>WC SUBSTRATE</text>
        <line x1="138" y1="-26" x2="146" y2="-26" stroke="#8ea2c9" strokeWidth="1" />
        <line x1="138" y1="28" x2="146" y2="28" stroke="#8ea2c9" strokeWidth="1" />
      </g>
      <text x="40" y="40" style={LBL}>SINTERED COMPACT · BRAZE-READY</text>
      <text x="40" y="276" style={LBL}>PCD / PCBN · DISCS &amp; CUT SEGMENTS</text>
    </svg>
  );
}

/* 11 — Polycrystalline Micron: rounded self-sharpening aggregates */
export function PolyMicronVisual() {
  const clusters = [
    [130, 120, 30], [230, 96, 24], [292, 156, 20], [172, 190, 26], [86, 190, 16], [330, 100, 13],
  ] as const;
  return (
    <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rounded polycrystalline micron diamond aggregates">
      <defs><Edge id="g11e" /></defs>
      {clusters.map(([cx, cy, r], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={r} fill="#c4d6fc" fillOpacity="0.28" stroke="url(#g11e)" strokeWidth="1.3" />
          {[[-0.4,-0.3],[0.35,-0.25],[0,0.35],[-0.15,0.05],[0.3,0.3]].map(([dx,dy],j)=>(
            <circle key={j} cx={cx + dx * r} cy={cy + dy * r} r={r * 0.26} fill="#7894d6" fillOpacity="0.35" stroke="#b3c5ff" strokeWidth="0.6" opacity="0.85" />
          ))}
        </g>
      ))}
      <text x="40" y="40" style={LBL}>MICRO-GRAIN AGGREGATES · NO CLEAVAGE PLANES</text>
      <text x="40" y="276" style={LBL}>FINE FINISHING · SAPPHIRE · CERAMICS · WAFERS</text>
    </svg>
  );
}

/* 12 — Surface Enhancements: coated crystal, smooth + spiky shells */
export function SurfaceEnhancementsVisual() {
  return (
    <svg viewBox={VB} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diamond crystals with nickel coating shells">
      <defs><Edge id="g12e" /></defs>
      <g transform="translate(140 140)">
        <circle r="62" fill="none" stroke="#9aa8c4" strokeWidth="7" opacity="0.4" />
        <circle r="62" fill="none" stroke="#b3c5ff" strokeWidth="1" strokeDasharray="5 5" opacity="0.8" />
        <Blocky x={0} y={0} s={3.4} o={0.6} stroke="url(#g12e)" />
        <text x="0" y="92" style={LBL} textAnchor="middle">SMOOTH Ni · 30 / 56%</text>
      </g>
      <g transform="translate(295 140)">
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i / 16) * Math.PI * 2;
          const x1 = Math.cos(a) * 46, y1 = Math.sin(a) * 46;
          const x2 = Math.cos(a) * 58, y2 = Math.sin(a) * 58;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#9aa8c4" strokeWidth="3.5" opacity="0.55" strokeLinecap="round" />;
        })}
        <circle r="46" fill="none" stroke="#b3c5ff" strokeWidth="1" strokeDasharray="5 5" opacity="0.8" />
        <Blocky x={0} y={0} s={2.5} o={0.6} stroke="url(#g12e)" />
        <text x="0" y="92" style={LBL} textAnchor="middle">SPIKY Ni · RETENTION</text>
      </g>
      <text x="40" y="40" style={LBL}>COATINGS · Ni · Cu · Ti</text>
      <text x="40" y="276" style={LBL}>HEAT SINK · BOND RETENTION · QC-UPGRADED</text>
    </svg>
  );
}

/* ------------------------------ Dispatcher ------------------------------ */
const VISUALS: Record<string, () => ReactNode> = {
  "natural-grit": GritMeshVisual,
  "natural-micron": NaturalMicronVisual,
  "tool-stones": ToolStonesVisual,
  "metal-bond": MetalBondVisual,
  "resin-bond": ResinBondVisual,
  "cbn": CbnVisual,
  "cvd-single-crystal": CvdSingleVisual,
  "cvd-polycrystalline": CvdPolyVisual,
  "mcd": McdVisual,
  "pcd-blanks": PcdPcbnVisual,
  "pcbn": PcdPcbnVisual,
  "polycrystalline-micron": PolyMicronVisual,
};

export function ProductVisual({ slug }: { slug: string }) {
  const V = VISUALS[slug];
  return V ? <div className="product-visual">{V()}</div> : null;
}
