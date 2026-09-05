export type DesignToken = { name: string; hex: string; note: string };
export type GradientToken = { name: string; css: string; stops: string };
export type TimelineEra = {
  era: string;
  label: string;
  title: string;
  description: string;
  swatches?: { hex: string; label: string }[];
};
export type CharacterStatus = {
  name: string;
  role: string;
  status: "redesigned" | "unchanged" | "pending";
};

export type DesignSystem = {
  slug: string;
  name: string;
  subtitle: string;
  accent: string; // color de acento propio de este sistema, para escenar la página
  product: string;
  sourceOfTruth: string;
  generations: string;
  statusLine: string;
  constructionNotes: string[];
  rampSets?: { label: string; steps: { step: string; hex: string }[] }[];
  tokens: DesignToken[];
  gradients?: GradientToken[];
  typography: { role: string; family: string; sample: string }[];
  visualLanguage?: string[];
  timeline?: TimelineEra[];
  characters?: CharacterStatus[];
  spacingScale?: { label: string; px: number }[];
  radiusScale?: { label: string; px: number | string }[];
  retiredPalette?: { hex: string; label: string }[];
  gaps: string[];
  currentStateNote: string;
};

export const DESIGN_SYSTEMS: DesignSystem[] = [
  {
    slug: "kinetik",
    name: "Midnight Pro",
    subtitle: "Kinetik Studio — dark-only, gris + acento cian único",
    accent: "#22d3ee",
    product: 'kinetik-site + panel interno "Supercomputer AI / AI Command Center" (Lovable)',
    sourceOfTruth: 'Figma "Kinetik Studio Design System" — página 🎨 Color',
    generations: "Una sola — sin rediseños documentados",
    statusLine: "Documentado internamente; no expuesto en texto en el sitio público",
    constructionNotes: [
      "A diferencia de Serenia, Midnight Pro no tiene generaciones previas: se construyó de una sola vez como librería de todo el estudio, para que cualquier producto nuevo de Kinetik sea consistente pixel-perfect sin reinventar tokens cada vez.",
      'La decisión de diseño más deliberada es el lenguaje visual: en vez de un dashboard SaaS genérico, todo se siente como el panel de control de un sistema en vivo — status bar con reloj corriendo, badges de estado con punto pulsante, terminales simuladas. Es el mismo vocabulario del negocio (agentes autónomos, "trabajadores digitales") traducido a interfaz.',
    ],
    rampSets: [
      {
        label: "Gray ramp (950 → 50)",
        steps: [
          { step: "950", hex: "#050507" },
          { step: "900", hex: "#0a0a0f" },
          { step: "850", hex: "#0f0f15" },
          { step: "800", hex: "#14141b" },
          { step: "700", hex: "#1c1c25" },
          { step: "600", hex: "#2a2a36" },
          { step: "500", hex: "#3f3f4d" },
          { step: "400", hex: "#5a5a6b" },
          { step: "300", hex: "#8b8b9e" },
          { step: "200", hex: "#b6b6c5" },
          { step: "100", hex: "#e2e2ea" },
          { step: "50", hex: "#f4f4f8" },
        ],
      },
      {
        label: "Cyan ramp — único acento",
        steps: [
          { step: "900", hex: "#083344" },
          { step: "600", hex: "#0891b2" },
          { step: "500", hex: "#06b6d4" },
          { step: "400", hex: "#22d3ee" },
          { step: "300", hex: "#67e8f9" },
          { step: "50", hex: "#ecfeff" },
        ],
      },
    ],
    tokens: [
      { name: "bg-base", hex: "#050507", note: "Fondo base de toda la app" },
      { name: "bg-surface", hex: "#0a0a0f", note: "Superficie estándar de paneles" },
      { name: "bg-raised", hex: "#14141b", note: "Cards y elementos elevados" },
      { name: "bg-overlay", hex: "#0f0f15", note: "Modales y overlays" },
      { name: "text-primary", hex: "#f4f4f8", note: "Texto principal" },
      { name: "text-secondary", hex: "#8b8b9e", note: "Texto de apoyo" },
      { name: "text-tertiary", hex: "#5a5a6b", note: "Labels, metadatos" },
      { name: "accent-default", hex: "#22d3ee", note: "Único acento — CTAs, focus, glow" },
      { name: "accent-hover", hex: "#67e8f9", note: "Estado hover del acento" },
      { name: "accent-muted", hex: "#083344", note: "Fondos con tinte de acento" },
      { name: "state-success", hex: "#34d399", note: 'Confirmaciones, "[ACTIVE]"' },
      { name: "state-warning", hex: "#fbbf24", note: "Advertencias" },
      { name: "state-danger", hex: "#f87171", note: 'Errores, "[ERROR]"' },
    ],
    typography: [
      {
        role: "Space Grotesk",
        family: "'Space Grotesk', sans-serif",
        sample: "Títulos y encabezados",
      },
      {
        role: "JetBrains Mono",
        family: "'JetBrains Mono', monospace",
        sample: "KINETIK_OS v1.0 · STATUS: ONLINE · LATENCY 9ms",
      },
      {
        role: "Inter — labels",
        family: "'Inter', sans-serif",
        sample: "PROYECTOS · CONEXIONES · GRAY · CYAN",
      },
    ],
    visualLanguage: [
      "Status bar: barra superior tipo KINETIK_OS v1.0 con reloj en vivo, siempre en JetBrains Mono.",
      "Headers de sección: formato // NOMBRE_SECCION — 00X, numeración con ceros a la izquierda.",
      "Badges de estado: [ACTIVE] / [ONLINE] / [ERROR] con punto de color pulsante antes del texto.",
      "Conexiones/grafos: línea sólida + glow cian si está activa, punteada gris si no.",
      'Terminales simuladas: bloques "$ kinetik init --env=prod" con líneas ✓/▸ sobre bg-base.',
    ],
    gaps: [],
    currentStateNote:
      "Es el más maduro de los dos en documentación: rampas completas, capa semántica completa, tres roles tipográficos sin ambigüedad, y un vocabulario de componentes con nombre propio. El único vacío real es de divulgación, no de definición — el detalle de tokens vive en Figma y en la guía interna, no en texto rastreable del sitio público.",
  },
  {
    slug: "serenia",
    name: "Blueberry + Cream Soda",
    subtitle: "Serenia — V2, tercera generación de identidad visual",
    accent: "#6082FF",
    product: "App Flutter de meditación guiada (iOS/Android)",
    sourceOfTruth: "app_colors.dart en código — el Figma va parcialmente rezagado",
    generations: 'Tres — "Harmonie" → V1 "Serenía" → V2 "Serenia"',
    statusLine: "Migración activa — código en V2, arte y Figma poniéndose al día",
    constructionNotes: [],
    timeline: [
      {
        era: "00",
        label: "Pre-rebrand",
        title: '"Harmonie" — dirección de arte cósmica',
        description:
          "Nunca fue un sistema de tokens formal, sino una dirección de arte: fotografía IA de nebulosas y espacio (session-art/*.jpg). Quedó huérfana a propósito cuando llegó V1 — 5 archivos sin referencias.",
      },
      {
        era: "01",
        label: "V1",
        title: '"Serenía" (con tilde) — violeta/esmeralda/coral/rosa',
        description:
          'Primer sistema de tokens real: gradiente de marca violeta→esmeralda, dos fondos de pantalla en gradiente de 3 paradas, Sora SemiBold + Inter. Ya acá había drift interno: Button/Badge en Figma quedaron en un gradiente viejo (#7C9CFF → #9BE8C4) que nunca se alineó al gradiente "correcto" documentado.',
        swatches: [
          { hex: "#6C63FF", label: "violeta" },
          { hex: "#3DDC97", label: "esmeralda" },
          { hex: "#FF8F6B", label: "coral" },
          { hex: "#FF5C8A", label: "rosa/bloom" },
        ],
      },
      {
        era: "02",
        label: "V2",
        title: '"Serenia" (sin tilde) — Blueberry + Cream Soda',
        description:
          'Rebrand cromático completo: fondo profundo "blueberry night" (#0D1329), azul blueberry como acento, amarillo cream soda como CTA. El cambio es sobre todo de acento y profundidad de fondo — los neutros de superficie y texto son exactamente los mismos valores que en V1. La tipografía tampoco cambió (sigue Sora + Inter). También se corrigió el naming: "Serenía" → "Serenia" sin tilde.',
        swatches: [
          { hex: "#6082FF", label: "blueberry" },
          { hex: "#FFD15C", label: "cream soda" },
        ],
      },
    ],
    tokens: [
      { name: "background", hex: "#0D1329", note: '"Blueberry night" — fondo base' },
      { name: "surface", hex: "#171B22", note: "Heredado sin cambios desde V1" },
      { name: "surfaceElevated", hex: "#1F2530", note: "Modales, cards elevadas" },
      { name: "card", hex: "#2E3654", note: "Cards de Home/Today — nuevo en V2" },
      { name: "tabBar", hex: "#121729", note: "Nuevo en V2" },
      { name: "primary", hex: "#6260FF", note: "Acento principal" },
      { name: "cta", hex: "#FFD15C", note: "Cream Soda — CTA principal" },
      {
        name: "accentLavender",
        hex: "#E4E4FF",
        note: "Secundario — reemplaza a la esmeralda de V1",
      },
      { name: "accentSunset", hex: "#FF8F6B", note: "Acento cálido residual (sobrevive de V1)" },
      { name: "textPrimary", hex: "#F5F6FA", note: "Heredado sin cambios desde V1" },
      { name: "textSecondary", hex: "#9AA1B0", note: "Heredado sin cambios desde V1" },
      { name: "success", hex: "#3DDC97", note: "Único semántico que sobrevive intacto de V1" },
      { name: "error", hex: "#FF6B6B", note: "Heredado sin cambios desde V1" },
    ],
    gradients: [
      {
        name: "ctaGradient",
        css: "linear-gradient(135deg,#FFD15C,#FFC43D)",
        stops: "#FFD15C → #FFC43D",
      },
      {
        name: "primaryGradient",
        css: "linear-gradient(135deg,#6082FF,#E4E4FF)",
        stops: "blueberry → accentLavender",
      },
      {
        name: "screenGradientBlueberry",
        css: "linear-gradient(180deg,#6082FF 0%,#33468C 55%,#0D1329 100%)",
        stops: "fondo full-bleed V2 — screenGradientA es alias",
      },
    ],
    typography: [
      {
        role: "Sora SemiBold",
        family: "'Sora', sans-serif",
        sample: "Títulos — sin cambios desde V1",
      },
      {
        role: "Inter",
        family: "'Inter', sans-serif",
        sample: "Cuerpo de texto — sin cambios desde V1",
      },
    ],
    spacingScale: [
      { label: "xs", px: 4 },
      { label: "sm", px: 8 },
      { label: "md", px: 16 },
      { label: "lg", px: 24 },
      { label: "xl", px: 32 },
      { label: "2xl", px: 48 },
    ],
    radiusScale: [
      { label: "md", px: 14 },
      { label: "lg", px: 18 },
      { label: "xl", px: 24 },
      { label: "pill", px: "999" },
    ],
    retiredPalette: [
      { hex: "#6C63FF", label: "violeta" },
      { hex: "#3DDC97", label: "esmeralda" },
      { hex: "#FF8F6B", label: "coral" },
      { hex: "#FF5C8A", label: "rosa/bloom" },
    ],
    characters: [
      {
        name: "Loto",
        role: "Mascota de marca — splash, paywall, onboarding. Asset es raster (PNG), no vector puro.",
        status: "redesigned",
      },
      { name: "Chispa", role: "Enfoque / racha / energía", status: "redesigned" },
      { name: "Destello", role: "Logros / celebración", status: "redesigned" },
      { name: "Gota", role: "Calma / ansiedad / avatar del Coach IA", status: "unchanged" },
      { name: "Nimbo", role: "Sueño / dormir", status: "pending" },
      { name: "Coco", role: "Estados neutros (sin conexión)", status: "pending" },
      { name: "Brote", role: "Crecimiento / empty states", status: "pending" },
    ],
    gaps: [
      "Figma va detrás del código: Button/Badge siguen en un gradiente que Flutter ya no usa.",
      "Arte de personajes a medio migrar: 3 de 7 ya redibujados para V2, los otros 3 sin decisión.",
      "Renders finales pendientes: los 7 personajes necesitan pulido en Magnific para fidelidad 100% V2.",
      "Catálogo de contenido puente: títulos ya reales, audio detrás sigue siendo el mp3 viejo.",
    ],
    currentStateNote:
      "Código en V2 es la fuente de verdad real y actualizada — Figma y el arte de personajes van parcialmente rezagados detrás del código, no al revés.",
  },
];

export function getDesignSystem(slug: string) {
  return DESIGN_SYSTEMS.find((d) => d.slug === slug);
}
