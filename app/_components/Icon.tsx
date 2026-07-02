// Maps semantic names to FontAwesome 4.7 classes (bundled with the Industic template).
const FA: Record<string, string> = {
  arrow: "fa-long-arrow-right",
  "arrow-right": "fa-angle-right",
  check: "fa-check",
  phone: "fa-phone",
  mail: "fa-envelope",
  clock: "fa-clock-o",
  pin: "fa-map-marker",
  globe: "fa-globe",
  shield: "fa-shield",
  layers: "fa-cubes",
  flask: "fa-flask",
  cube: "fa-cube",
  diamond: "fa-diamond",
  download: "fa-download",
  doc: "fa-file-text-o",
  grid: "fa-th",
  gauge: "fa-tachometer",
  chevron: "fa-angle-right",
  tooth: "fa-medkit",
  lens: "fa-eye",
  saw: "fa-cog",
  engine: "fa-car",
  chip: "fa-microchip",
  plane: "fa-plane",
  industry: "fa-industry",
  bolt: "fa-bolt",
};

export type IconName = keyof typeof FA;

export default function Icon({
  name,
  className,
  style,
}: {
  name: IconName;
  size?: number; // kept for call-site compatibility; FA scales with font-size
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <i className={`fa ${FA[name] ?? "fa-square-o"}${className ? " " + className : ""}`} style={style} aria-hidden="true" />
  );
}
