import type { Locale } from "@/i18n/routing";
import { products as productsEN, type Product } from "./products";
import { applications as applicationsEN, type Application } from "./applications";

/* =========================================================================
   Locale-aware content with EN fallback-merge.
   EN (lib/products.ts, lib/applications.ts) is the source of truth. Per-locale
   override tables below supply machine-translated strings (reviewed later);
   any field not present in an override falls back to the EN value, so partial
   translations render cleanly. The visible layer (names, card descriptions,
   nav/footer chrome, home hero, CTAs) is translated first; long-form body
   prose currently falls back to EN and is filled in a later batch.
   ========================================================================= */

type Overrides<T> = Partial<Record<Locale, Record<string, Partial<T>>>>;

const mergeBySlug = <T extends { slug: string }>(
  base: T[],
  overrides: Overrides<T>,
  locale: Locale,
): T[] => {
  const table = overrides[locale];
  if (!table) return base;
  return base.map((item) => (table[item.slug] ? { ...item, ...table[item.slug] } : item));
};

/* ------------------------------- PRODUCTS -------------------------------- */
// Only the visible-layer fields are overridden per locale (name, cardDesc, cta,
// eyebrow). Deep prose fields fall back to EN.
const productOverrides: Overrides<Product> = {
  de: {
    "natural-grit": { name: "Naturdiamant-Körnung (Mesh)", cardDesc: "Abgestufte Mesh-Größen für Schleifen, Sägen und Abrichten. Im eigenen Werk gebrochen und klassiert." },
    "natural-micron": { name: "Naturdiamant-Mikronpulver", cardDesc: "Feine Pulver für Läppen, Polieren und Oberflächenfinish. Enge Toleranzen." },
    "metal-bond": { name: "Metallbindung-Diamantpulver", cardDesc: "Säge- und Scheibenqualitäten, beschichtet und QC-veredelt für gesinterte Werkzeuge." },
    "resin-bond": { name: "Kunstharzbindung-Diamantpulver", cardDesc: "Splitternde, mehrkristalline Qualitäten für Feinschliff und Politur." },
    "cbn": { name: "CBN-Pulver (Mesh & Mikron)", cardDesc: "Das Superschleifmittel für gehärtete und eisenhaltige Stähle. Mesh- und Mikronqualitäten." },
    "pcbn": { name: "PCBN-Scheiben & -Rohlinge", cardDesc: "Eine fertige CBN-Form für Hartdreh- und Schneideinsätze an gehärteten Eisenteilen." },
    "cvd-single-crystal": { name: "CVD-Einkristalldiamant", cardDesc: "Weißer Einkristall in mechanischer Qualität, nach Ihrer Orientierung gewachsen." },
    "mcd": { name: "MCD (Monokristallin)", cardDesc: "HPHT-monokristalliner Diamant für Einpunkt- und Präzisionswerkzeuge." },
    "pcd-blanks": { name: "PCD-Scheiben & -Rohlinge", cardDesc: "Fertige Rohlinge für Hersteller von Schneideinsätzen für Nichteisenwerkstoffe." },
    "cvd-polycrystalline": { name: "CVD-Polykristallin (Abrichtlogs)", cardDesc: "Schwarze polykristalline Logs zum Abrichten von Schleifscheiben." },
    "tool-stones": { name: "Natürliche Diamant-Werkzeugsteine", cardDesc: "Roher und geformter Naturdiamant für Einpunkt-Abrichten und Setzwerkzeuge." },
    "polycrystalline-micron": { name: "Polykristallines Diamant-Mikronpulver", cardDesc: "Detonationssynthese-Pulver für anspruchsvollste Polierarbeiten." },
  },
  es: {
    "natural-grit": { name: "Grano de diamante natural (malla)", cardDesc: "Tamaños de malla graduados para rectificado, corte y afinado. Triturado y clasificado en fábrica propia." },
    "natural-micron": { name: "Polvo de micras de diamante natural", cardDesc: "Polvos finos para lapeado, pulido y acabado superficial. Tolerancias estrechas." },
    "metal-bond": { name: "Polvo de diamante de enlace metálico", cardDesc: "Grados de sierra y muela, recubiertos y mejorados por QC para herramientas sinterizadas." },
    "resin-bond": { name: "Polvo de diamante de enlace resinoso", cardDesc: "Grados friables y multicristalinos para rectificado fino y pulido." },
    "cbn": { name: "Polvo de CBN (malla y micras)", cardDesc: "El superabrasivo para aceros endurecidos y ferrosos. Grados de malla y micras." },
    "pcbn": { name: "Discos y preformas de PCBN", cardDesc: "Una forma de CBN acabada para insertos de torneado en duro sobre piezas ferrosas endurecidas." },
    "cvd-single-crystal": { name: "Diamante monocristalino CVD", cardDesc: "Cristal blanco de grado mecánico, crecido según su orientación." },
    "mcd": { name: "MCD (monocristalino)", cardDesc: "Diamante monocristalino HPHT para herramientas de un solo punto y de precisión." },
    "pcd-blanks": { name: "Discos y preformas de PCD", cardDesc: "Preformas acabadas para fabricantes de insertos de corte no ferrosos." },
    "cvd-polycrystalline": { name: "CVD policristalino (barras de diamantar)", cardDesc: "Barras policristalinas negras para diamantar muelas." },
    "tool-stones": { name: "Piedras naturales de diamante para herramientas", cardDesc: "Diamante natural en bruto y conformado para diamantado de un punto y herramientas montadas." },
    "polycrystalline-micron": { name: "Polvo de micras de diamante policristalino", cardDesc: "Polvo de síntesis por detonación para el pulido más exigente." },
  },
  it: {
    "natural-grit": { name: "Grana di diamante naturale (mesh)", cardDesc: "Granulometrie mesh graduate per rettifica, taglio e ravvivatura. Frantumato e classificato in stabilimento proprio." },
    "natural-micron": { name: "Polvere micron di diamante naturale", cardDesc: "Polveri fini per lappatura, lucidatura e finitura superficiale. Tolleranze strette." },
    "metal-bond": { name: "Polvere di diamante a legante metallico", cardDesc: "Qualità da sega e da mola, rivestite e migliorate dal QC per utensili sinterizzati." },
    "resin-bond": { name: "Polvere di diamante a legante resinoide", cardDesc: "Qualità friabili e multicristalline per rettifica fine e lucidatura." },
    "cbn": { name: "Polvere di CBN (mesh e micron)", cardDesc: "Il superabrasivo per acciai temprati e ferrosi. Qualità mesh e micron." },
    "pcbn": { name: "Dischi e billette di PCBN", cardDesc: "Una forma di CBN finita per inserti da tornitura dura su parti ferrose temprate." },
    "cvd-single-crystal": { name: "Diamante monocristallino CVD", cardDesc: "Cristallo bianco di grado meccanico, cresciuto secondo il vostro orientamento." },
    "mcd": { name: "MCD (monocristallino)", cardDesc: "Diamante monocristallino HPHT per utensili monopunta e di precisione." },
    "pcd-blanks": { name: "Dischi e billette di PCD", cardDesc: "Billette finite per produttori di inserti da taglio non ferrosi." },
    "cvd-polycrystalline": { name: "CVD policristallino (barrette ravvivatrici)", cardDesc: "Barrette policristalline nere per la ravvivatura delle mole." },
    "tool-stones": { name: "Pietre naturali di diamante per utensili", cardDesc: "Diamante naturale grezzo e sagomato per ravvivatura monopunta e utensili montati." },
    "polycrystalline-micron": { name: "Polvere micron di diamante policristallino", cardDesc: "Polvere da sintesi per detonazione per la lucidatura più esigente." },
  },
  ja: {
    "natural-grit": { name: "天然ダイヤモンドグリット（メッシュ）", cardDesc: "研削・切断・ドレッシング向けの等級別メッシュサイズ。自社工場で破砕・分級。" },
    "natural-micron": { name: "天然ダイヤモンドミクロンパウダー", cardDesc: "ラッピング・研磨・表面仕上げ向けの微粉。厳しい公差。" },
    "metal-bond": { name: "メタルボンドダイヤモンドパウダー", cardDesc: "焼結工具向けのソー／ホイールグレード。コーティングおよびQCアップグレード済み。" },
    "resin-bond": { name: "レジンボンドダイヤモンドパウダー", cardDesc: "精密研削・研磨向けのフライアブルな多結晶グレード。" },
    "cbn": { name: "CBNパウダー（メッシュ＆ミクロン）", cardDesc: "焼入鋼・鉄系材料向けの超砥粒。メッシュおよびミクロングレード。" },
    "pcbn": { name: "PCBNディスク＆ブランク", cardDesc: "焼入鉄系部品の硬旋削・切削インサート向けの仕上げCBN形態。" },
    "cvd-single-crystal": { name: "CVD単結晶ダイヤモンド", cardDesc: "ご指定の方位で成長させた白色・機械グレードの単結晶。" },
    "mcd": { name: "MCD（単結晶）", cardDesc: "単一点・精密工具向けのHPHT単結晶ダイヤモンド。" },
    "pcd-blanks": { name: "PCDディスク＆ブランク", cardDesc: "非鉄切削インサートメーカー向けの仕上げブランク。" },
    "cvd-polycrystalline": { name: "CVD多結晶（ドレッシングログ）", cardDesc: "研削砥石のツルーイング・ドレッシング用の黒色多結晶ログ。" },
    "tool-stones": { name: "天然ダイヤモンド・ツールストーン", cardDesc: "単一点ドレッシング・セット工具向けの原石および成形天然ダイヤモンド。" },
    "polycrystalline-micron": { name: "多結晶ダイヤモンドミクロンパウダー", cardDesc: "最も要求の厳しい研磨向けの爆轟合成パウダー。" },
  },
};

/* ----------------------------- APPLICATIONS ------------------------------ */
const applicationOverrides: Overrides<Application> = {
  de: {
    "dental": { name: "Dental", cardDesc: "Metallbindung und feine Pulver für gesinterte Bohrer, Rotationsinstrumente und Trennscheiben." },
    "semiconductor-electronics": { name: "Halbleiter & moderne Elektronik", cardDesc: "Feine Mikron- und polykristalline Pulver für Dicing, Läppen und Wafer-Politur." },
    "automotive-aerospace": { name: "Automobil & Luftfahrt", cardDesc: "CBN und PCBN zum Schleifen und Hartdrehen von gehärtetem Stahl; PCD für Aluminium und Verbundwerkstoffe." },
    "tool-and-die": { name: "Werkzeug- & Formenbau", cardDesc: "Einkristall, MCD sowie PCD/PCBN-Rohlinge für Schneid-, Abricht- und Präzisionswerkzeuge." },
    "grinding-cutting-sawing-drilling": { name: "Schleifen, Schneiden, Sägen & Bohren", cardDesc: "Naturkörnung, Metallbindung und CBN für Segmente, Scheiben und Bohrer." },
    "polishing-lapping": { name: "Polieren & Läppen", cardDesc: "Mikron- und polykristalline Pulver für Fein- und optisches Finish." },
  },
  es: {
    "dental": { name: "Dental", cardDesc: "Enlace metálico y polvos finos para fresas sinterizadas, instrumentos rotatorios y discos." },
    "semiconductor-electronics": { name: "Semiconductores y electrónica avanzada", cardDesc: "Polvos finos de micras y policristalinos para corte, lapeado y pulido de obleas." },
    "automotive-aerospace": { name: "Automoción y aeroespacial", cardDesc: "CBN y PCBN para rectificado y torneado en duro de acero endurecido; PCD para aluminio y compuestos." },
    "tool-and-die": { name: "Utillaje y matricería", cardDesc: "Monocristal, MCD y preformas de PCD/PCBN para herramientas de corte, diamantado y precisión." },
    "grinding-cutting-sawing-drilling": { name: "Rectificado, corte, aserrado y perforación", cardDesc: "Grano natural, enlace metálico y CBN para segmentos, muelas y brocas." },
    "polishing-lapping": { name: "Pulido y lapeado", cardDesc: "Polvos de micras y policristalinos para acabado fino y óptico." },
  },
  it: {
    "dental": { name: "Dentale", cardDesc: "Legante metallico e polveri fini per frese sinterizzate, strumenti rotanti e dischi." },
    "semiconductor-electronics": { name: "Semiconduttori ed elettronica avanzata", cardDesc: "Polveri fini micron e policristalline per dicing, lappatura e lucidatura dei wafer." },
    "automotive-aerospace": { name: "Automotive e aerospaziale", cardDesc: "CBN e PCBN per rettifica e tornitura dura dell'acciaio temprato; PCD per alluminio e compositi." },
    "tool-and-die": { name: "Utensili e stampi", cardDesc: "Monocristallo, MCD e billette PCD/PCBN per utensili da taglio, ravvivatura e precisione." },
    "grinding-cutting-sawing-drilling": { name: "Rettifica, taglio, segatura e foratura", cardDesc: "Grana naturale, legante metallico e CBN per segmenti, mole e punte." },
    "polishing-lapping": { name: "Lucidatura e lappatura", cardDesc: "Polveri micron e policristalline per finitura fine e ottica." },
  },
  ja: {
    "dental": { name: "デンタル", cardDesc: "焼結バー、回転器具、ダイヤモンドディスク向けのメタルボンドと微粉。" },
    "semiconductor-electronics": { name: "半導体・先端エレクトロニクス", cardDesc: "ダイシング、ラッピング、ウェーハ研磨向けの微細ミクロン・多結晶パウダー。" },
    "automotive-aerospace": { name: "自動車・航空宇宙", cardDesc: "焼入鋼の研削・硬旋削向けCBN／PCBN、アルミ・複合材向けPCD。" },
    "tool-and-die": { name: "工具・金型", cardDesc: "切削・ドレッシング・精密工具向けの単結晶、MCD、PCD／PCBNブランク。" },
    "grinding-cutting-sawing-drilling": { name: "研削・切断・切削・穴あけ", cardDesc: "セグメント、ホイール、ドリル向けの天然グリット、メタルボンド、CBN。" },
    "polishing-lapping": { name: "研磨・ラッピング", cardDesc: "精密・光学仕上げ向けのミクロン・多結晶パウダー。" },
  },
};

/* ------------------------------- GETTERS --------------------------------- */
export const getProducts = (locale: Locale): Product[] =>
  mergeBySlug(productsEN, productOverrides, locale);
export const getProduct = (locale: Locale, slug: string): Product | undefined =>
  getProducts(locale).find((p) => p.slug === slug);
export const getApplications = (locale: Locale): Application[] =>
  mergeBySlug(applicationsEN, applicationOverrides, locale);
export const getApplication = (locale: Locale, slug: string): Application | undefined =>
  getApplications(locale).find((a) => a.slug === slug);

/* --------------------- PRODUCT GROUP (FAMILY) LABELS --------------------- */
const familyLabels: Record<Locale, Record<string, string>> = {
  en: {},
  de: {
    "Natural Diamond Grit & Powder": "Naturdiamant-Körnung & -Pulver",
    "Metal Bond Diamond": "Metallbindung-Diamant",
    "Resin Bond Diamond": "Kunstharzbindung-Diamant",
    "CBN": "CBN",
    "Single Crystal Diamond (CVD & MCD)": "Einkristalldiamant (CVD & MCD)",
    "Polycrystalline Diamond (PCD & CVD)": "Polykristalliner Diamant (PCD & CVD)",
    "Natural Tool Stones": "Natürliche Werkzeugsteine",
    "Polycrystalline Diamond Powder": "Polykristallines Diamantpulver",
  },
  es: {
    "Natural Diamond Grit & Powder": "Grano y polvo de diamante natural",
    "Metal Bond Diamond": "Diamante de enlace metálico",
    "Resin Bond Diamond": "Diamante de enlace resinoso",
    "CBN": "CBN",
    "Single Crystal Diamond (CVD & MCD)": "Diamante monocristalino (CVD y MCD)",
    "Polycrystalline Diamond (PCD & CVD)": "Diamante policristalino (PCD y CVD)",
    "Natural Tool Stones": "Piedras naturales para herramientas",
    "Polycrystalline Diamond Powder": "Polvo de diamante policristalino",
  },
  it: {
    "Natural Diamond Grit & Powder": "Grana e polvere di diamante naturale",
    "Metal Bond Diamond": "Diamante a legante metallico",
    "Resin Bond Diamond": "Diamante a legante resinoide",
    "CBN": "CBN",
    "Single Crystal Diamond (CVD & MCD)": "Diamante monocristallino (CVD e MCD)",
    "Polycrystalline Diamond (PCD & CVD)": "Diamante policristallino (PCD e CVD)",
    "Natural Tool Stones": "Pietre naturali per utensili",
    "Polycrystalline Diamond Powder": "Polvere di diamante policristallino",
  },
  ja: {
    "Natural Diamond Grit & Powder": "天然ダイヤモンドグリット＆パウダー",
    "Metal Bond Diamond": "メタルボンドダイヤモンド",
    "Resin Bond Diamond": "レジンボンドダイヤモンド",
    "CBN": "CBN",
    "Single Crystal Diamond (CVD & MCD)": "単結晶ダイヤモンド（CVD・MCD）",
    "Polycrystalline Diamond (PCD & CVD)": "多結晶ダイヤモンド（PCD・CVD）",
    "Natural Tool Stones": "天然ツールストーン",
    "Polycrystalline Diamond Powder": "多結晶ダイヤモンドパウダー",
  },
};
export const getFamilyLabel = (locale: Locale, family: string): string =>
  familyLabels[locale]?.[family] ?? family;

/* ------------------------------- UI CHROME ------------------------------- */
type Dict = Record<string, string>;
const ui: Record<Locale, Dict> = {
  en: {},
  de: {
    "Home": "Startseite", "Products": "Produkte", "Applications": "Anwendungen",
    "Quality": "Qualität", "Resources": "Ressourcen", "About": "Über uns", "Blog": "Blog",
    "Contact": "Kontakt", "Request A Quote": "Angebot anfordern", "Request a Quote": "Angebot anfordern",
    "View all products": "Alle Produkte ansehen", "Call Us:": "Anruf:", "Email Us:": "E-Mail:", "Based In:": "Sitz:",
    "Products Overview": "Produktübersicht", "Quality, QC & ISO 9001": "Qualität, QC & ISO 9001",
    "Resources & Guides": "Ressourcen & Leitfäden", "Datasheets": "Datenblätter", "MSDS": "Sicherheitsdatenblätter",
    "ISO 9001 Certified": "ISO 9001 zertifiziert", "In-House QC Laboratory": "Eigenes QC-Labor",
    "Full Diamond & CBN Range": "Komplettes Diamant- & CBN-Programm", "50+ Years' Experience": "50+ Jahre Erfahrung",
    "London, UK": "London, UK", "Company & Resources": "Unternehmen & Ressourcen",
    footerAbout: "Hersteller und Veredler des kompletten Programms industrieller Diamant- und Superschleifmaterialien, weltweit für Werkzeughersteller.",
  },
  es: {
    "Home": "Inicio", "Products": "Productos", "Applications": "Aplicaciones",
    "Quality": "Calidad", "Resources": "Recursos", "About": "Nosotros", "Blog": "Blog",
    "Contact": "Contacto", "Request A Quote": "Solicitar presupuesto", "Request a Quote": "Solicitar presupuesto",
    "View all products": "Ver todos los productos", "Call Us:": "Llámenos:", "Email Us:": "Correo:", "Based In:": "Sede:",
    "Products Overview": "Resumen de productos", "Quality, QC & ISO 9001": "Calidad, QC e ISO 9001",
    "Resources & Guides": "Recursos y guías", "Datasheets": "Fichas técnicas", "MSDS": "Hojas de seguridad",
    "ISO 9001 Certified": "Certificado ISO 9001", "In-House QC Laboratory": "Laboratorio de QC propio",
    "Full Diamond & CBN Range": "Gama completa de diamante y CBN", "50+ Years' Experience": "Más de 50 años de experiencia",
    "London, UK": "Londres, Reino Unido", "Company & Resources": "Empresa y recursos",
    footerAbout: "Fabricante y acabador de la gama completa de materiales de diamante industrial y superabrasivos, suministrando a fabricantes de herramientas de todo el mundo.",
  },
  it: {
    "Home": "Home", "Products": "Prodotti", "Applications": "Applicazioni",
    "Quality": "Qualità", "Resources": "Risorse", "About": "Chi siamo", "Blog": "Blog",
    "Contact": "Contatti", "Request A Quote": "Richiedi un preventivo", "Request a Quote": "Richiedi un preventivo",
    "View all products": "Vedi tutti i prodotti", "Call Us:": "Chiamaci:", "Email Us:": "Email:", "Based In:": "Sede:",
    "Products Overview": "Panoramica prodotti", "Quality, QC & ISO 9001": "Qualità, QC e ISO 9001",
    "Resources & Guides": "Risorse e guide", "Datasheets": "Schede tecniche", "MSDS": "Schede di sicurezza",
    "ISO 9001 Certified": "Certificato ISO 9001", "In-House QC Laboratory": "Laboratorio QC interno",
    "Full Diamond & CBN Range": "Gamma completa diamante e CBN", "50+ Years' Experience": "Oltre 50 anni di esperienza",
    "London, UK": "Londra, Regno Unito", "Company & Resources": "Azienda e risorse",
    footerAbout: "Produttore e finitore della gamma completa di diamante industriale e materiali superabrasivi, al servizio dei produttori di utensili in tutto il mondo.",
  },
  ja: {
    "Home": "ホーム", "Products": "製品", "Applications": "用途",
    "Quality": "品質", "Resources": "リソース", "About": "会社概要", "Blog": "ブログ",
    "Contact": "お問い合わせ", "Request A Quote": "見積もり依頼", "Request a Quote": "見積もり依頼",
    "View all products": "すべての製品を見る", "Call Us:": "電話:", "Email Us:": "メール:", "Based In:": "所在地:",
    "Products Overview": "製品一覧", "Quality, QC & ISO 9001": "品質・QC・ISO 9001",
    "Resources & Guides": "リソース＆ガイド", "Datasheets": "データシート", "MSDS": "安全データシート",
    "ISO 9001 Certified": "ISO 9001 認証", "In-House QC Laboratory": "自社QCラボ",
    "Full Diamond & CBN Range": "ダイヤモンド＆CBN フルレンジ", "50+ Years' Experience": "50年以上の実績",
    "London, UK": "英国ロンドン", "Company & Resources": "会社・リソース",
    footerAbout: "工業用ダイヤモンドおよび超砥粒材料のフルレンジを製造・仕上げし、世界中の工具メーカーに供給しています。",
  },
};
export const t = (locale: Locale, key: string): string => ui[locale]?.[key] ?? key;
