import type { Bi } from "@/lib/i18n";

export type DesignToken = { name: string; hex: string; note: Bi };
export type GradientToken = { name: string; css: string; stops: Bi };
export type TimelineEra = {
  era: string;
  label: Bi;
  title: Bi;
  description: Bi;
  swatches?: { hex: string; label: string }[];
};
export type CharacterStatus = {
  name: string;
  role: Bi;
  status: "redesigned" | "unchanged" | "pending";
};

export type DesignSystem = {
  slug: string;
  name: string;
  subtitle: Bi;
  accent: string; // color de acento propio de este sistema, para escenar la página
  product: Bi;
  sourceOfTruth: Bi;
  generations: Bi;
  statusLine: Bi;
  constructionNotes: Bi[];
  rampSets?: { label: Bi; steps: { step: string; hex: string }[] }[];
  tokens: DesignToken[];
  gradients?: GradientToken[];
  typography?: { role: Bi; family: string; sample: Bi }[];
  visualLanguage?: Bi[];
  timeline?: TimelineEra[];
  characters?: CharacterStatus[];
  spacingScale?: { label: string; px: number }[];
  radiusScale?: { label: string; px: number | string }[];
  retiredPalette?: { hex: string; label: string }[];
  gaps: Bi[];
  currentStateNote: Bi;
};

// Nota: Kinetik y Serenia se documentaron originalmente en un solo idioma.
// Los strings de estas dos entradas se envuelven con el mismo valor en `es`/`en`
// como placeholder mecánico (no son traducciones reales) — Launch Mobility, más
// abajo, sí trae contenido bilingüe real desde el principio.
const same = (es: string): Bi => ({ es, en: es });

export const DESIGN_SYSTEMS: DesignSystem[] = [
  {
    slug: "kinetik",
    name: "Midnight Pro",
    subtitle: same("Kinetik Studio — dark-only, gris + acento cian único"),
    accent: "#22d3ee",
    product: same('kinetik-site + panel interno "Supercomputer AI / AI Command Center" (Lovable)'),
    sourceOfTruth: same('Figma "Kinetik Studio Design System" — página 🎨 Color'),
    generations: same("Una sola — sin rediseños documentados"),
    statusLine: same("Documentado internamente; no expuesto en texto en el sitio público"),
    constructionNotes: [
      same(
        "A diferencia de Serenia, Midnight Pro no tiene generaciones previas: se construyó de una sola vez como librería de todo el estudio, para que cualquier producto nuevo de Kinetik sea consistente pixel-perfect sin reinventar tokens cada vez.",
      ),
      same(
        'La decisión de diseño más deliberada es el lenguaje visual: en vez de un dashboard SaaS genérico, todo se siente como el panel de control de un sistema en vivo — status bar con reloj corriendo, badges de estado con punto pulsante, terminales simuladas. Es el mismo vocabulario del negocio (agentes autónomos, "trabajadores digitales") traducido a interfaz.',
      ),
    ],
    rampSets: [
      {
        label: same("Gray ramp (950 → 50)"),
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
        label: same("Cyan ramp — único acento"),
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
      { name: "bg-base", hex: "#050507", note: same("Fondo base de toda la app") },
      { name: "bg-surface", hex: "#0a0a0f", note: same("Superficie estándar de paneles") },
      { name: "bg-raised", hex: "#14141b", note: same("Cards y elementos elevados") },
      { name: "bg-overlay", hex: "#0f0f15", note: same("Modales y overlays") },
      { name: "text-primary", hex: "#f4f4f8", note: same("Texto principal") },
      { name: "text-secondary", hex: "#8b8b9e", note: same("Texto de apoyo") },
      { name: "text-tertiary", hex: "#5a5a6b", note: same("Labels, metadatos") },
      { name: "accent-default", hex: "#22d3ee", note: same("Único acento — CTAs, focus, glow") },
      { name: "accent-hover", hex: "#67e8f9", note: same("Estado hover del acento") },
      { name: "accent-muted", hex: "#083344", note: same("Fondos con tinte de acento") },
      { name: "state-success", hex: "#34d399", note: same('Confirmaciones, "[ACTIVE]"') },
      { name: "state-warning", hex: "#fbbf24", note: same("Advertencias") },
      { name: "state-danger", hex: "#f87171", note: same('Errores, "[ERROR]"') },
    ],
    typography: [
      {
        role: same("Space Grotesk"),
        family: "'Space Grotesk', sans-serif",
        sample: same("Títulos y encabezados"),
      },
      {
        role: same("JetBrains Mono"),
        family: "'JetBrains Mono', monospace",
        sample: same("KINETIK_OS v1.0 · STATUS: ONLINE · LATENCY 9ms"),
      },
      {
        role: same("Inter — labels"),
        family: "'Inter', sans-serif",
        sample: same("PROYECTOS · CONEXIONES · GRAY · CYAN"),
      },
    ],
    visualLanguage: [
      same(
        "Status bar: barra superior tipo KINETIK_OS v1.0 con reloj en vivo, siempre en JetBrains Mono.",
      ),
      same(
        "Headers de sección: formato // NOMBRE_SECCION — 00X, numeración con ceros a la izquierda.",
      ),
      same(
        "Badges de estado: [ACTIVE] / [ONLINE] / [ERROR] con punto de color pulsante antes del texto.",
      ),
      same("Conexiones/grafos: línea sólida + glow cian si está activa, punteada gris si no."),
      same(
        'Terminales simuladas: bloques "$ kinetik init --env=prod" con líneas ✓/▸ sobre bg-base.',
      ),
    ],
    gaps: [],
    currentStateNote: same(
      "Es el más maduro de los dos en documentación: rampas completas, capa semántica completa, tres roles tipográficos sin ambigüedad, y un vocabulario de componentes con nombre propio. El único vacío real es de divulgación, no de definición — el detalle de tokens vive en Figma y en la guía interna, no en texto rastreable del sitio público.",
    ),
  },
  {
    slug: "serenia",
    name: "Blueberry + Cream Soda",
    subtitle: same("Serenia — V2, tercera generación de identidad visual"),
    accent: "#6082FF",
    product: same("App Flutter de meditación guiada (iOS/Android)"),
    sourceOfTruth: same("app_colors.dart en código — el Figma va parcialmente rezagado"),
    generations: same('Tres — "Harmonie" → V1 "Serenía" → V2 "Serenia"'),
    statusLine: same("Migración activa — código en V2, arte y Figma poniéndose al día"),
    constructionNotes: [],
    timeline: [
      {
        era: "00",
        label: same("Pre-rebrand"),
        title: same('"Harmonie" — dirección de arte cósmica'),
        description: same(
          "Nunca fue un sistema de tokens formal, sino una dirección de arte: fotografía IA de nebulosas y espacio (session-art/*.jpg). Quedó huérfana a propósito cuando llegó V1 — 5 archivos sin referencias.",
        ),
      },
      {
        era: "01",
        label: same("V1"),
        title: same('"Serenía" (con tilde) — violeta/esmeralda/coral/rosa'),
        description: same(
          'Primer sistema de tokens real: gradiente de marca violeta→esmeralda, dos fondos de pantalla en gradiente de 3 paradas, Sora SemiBold + Inter. Ya acá había drift interno: Button/Badge en Figma quedaron en un gradiente viejo (#7C9CFF → #9BE8C4) que nunca se alineó al gradiente "correcto" documentado.',
        ),
        swatches: [
          { hex: "#6C63FF", label: "violeta" },
          { hex: "#3DDC97", label: "esmeralda" },
          { hex: "#FF8F6B", label: "coral" },
          { hex: "#FF5C8A", label: "rosa/bloom" },
        ],
      },
      {
        era: "02",
        label: same("V2"),
        title: same('"Serenia" (sin tilde) — Blueberry + Cream Soda'),
        description: same(
          'Rebrand cromático completo: fondo profundo "blueberry night" (#0D1329), azul blueberry como acento, amarillo cream soda como CTA. El cambio es sobre todo de acento y profundidad de fondo — los neutros de superficie y texto son exactamente los mismos valores que en V1. La tipografía tampoco cambió (sigue Sora + Inter). También se corrigió el naming: "Serenía" → "Serenia" sin tilde.',
        ),
        swatches: [
          { hex: "#6082FF", label: "blueberry" },
          { hex: "#FFD15C", label: "cream soda" },
        ],
      },
    ],
    tokens: [
      { name: "background", hex: "#0D1329", note: same('"Blueberry night" — fondo base') },
      { name: "surface", hex: "#171B22", note: same("Heredado sin cambios desde V1") },
      { name: "surfaceElevated", hex: "#1F2530", note: same("Modales, cards elevadas") },
      { name: "card", hex: "#2E3654", note: same("Cards de Home/Today — nuevo en V2") },
      { name: "tabBar", hex: "#121729", note: same("Nuevo en V2") },
      { name: "primary", hex: "#6260FF", note: same("Acento principal") },
      { name: "cta", hex: "#FFD15C", note: same("Cream Soda — CTA principal") },
      {
        name: "accentLavender",
        hex: "#E4E4FF",
        note: same("Secundario — reemplaza a la esmeralda de V1"),
      },
      {
        name: "accentSunset",
        hex: "#FF8F6B",
        note: same("Acento cálido residual (sobrevive de V1)"),
      },
      { name: "textPrimary", hex: "#F5F6FA", note: same("Heredado sin cambios desde V1") },
      { name: "textSecondary", hex: "#9AA1B0", note: same("Heredado sin cambios desde V1") },
      {
        name: "success",
        hex: "#3DDC97",
        note: same("Único semántico que sobrevive intacto de V1"),
      },
      { name: "error", hex: "#FF6B6B", note: same("Heredado sin cambios desde V1") },
    ],
    gradients: [
      {
        name: "ctaGradient",
        css: "linear-gradient(135deg,#FFD15C,#FFC43D)",
        stops: same("#FFD15C → #FFC43D"),
      },
      {
        name: "primaryGradient",
        css: "linear-gradient(135deg,#6082FF,#E4E4FF)",
        stops: same("blueberry → accentLavender"),
      },
      {
        name: "screenGradientBlueberry",
        css: "linear-gradient(180deg,#6082FF 0%,#33468C 55%,#0D1329 100%)",
        stops: same("fondo full-bleed V2 — screenGradientA es alias"),
      },
    ],
    typography: [
      {
        role: same("Sora SemiBold"),
        family: "'Sora', sans-serif",
        sample: same("Títulos — sin cambios desde V1"),
      },
      {
        role: same("Inter"),
        family: "'Inter', sans-serif",
        sample: same("Cuerpo de texto — sin cambios desde V1"),
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
        role: same(
          "Mascota de marca — splash, paywall, onboarding. Asset es raster (PNG), no vector puro.",
        ),
        status: "redesigned",
      },
      { name: "Chispa", role: same("Enfoque / racha / energía"), status: "redesigned" },
      { name: "Destello", role: same("Logros / celebración"), status: "redesigned" },
      { name: "Gota", role: same("Calma / ansiedad / avatar del Coach IA"), status: "unchanged" },
      { name: "Nimbo", role: same("Sueño / dormir"), status: "pending" },
      { name: "Coco", role: same("Estados neutros (sin conexión)"), status: "pending" },
      { name: "Brote", role: same("Crecimiento / empty states"), status: "pending" },
    ],
    gaps: [
      same(
        "Figma va detrás del código: Button/Badge siguen en un gradiente que Flutter ya no usa.",
      ),
      same(
        "Arte de personajes a medio migrar: 3 de 7 ya redibujados para V2, los otros 3 sin decisión.",
      ),
      same(
        "Renders finales pendientes: los 7 personajes necesitan pulido en Magnific para fidelidad 100% V2.",
      ),
      same(
        "Catálogo de contenido puente: títulos ya reales, audio detrás sigue siendo el mp3 viejo.",
      ),
    ],
    currentStateNote: same(
      "Código en V2 es la fuente de verdad real y actualizada — Figma y el arte de personajes van parcialmente rezagados detrás del código, no al revés.",
    ),
  },
  {
    slug: "launch-mobility",
    name: "Launch Mobility Design System",
    subtitle: {
      es: "App de conductor para gestión de flotas — arquitectura de tokens y gobernanza multimarca",
      en: "Fleet-management driver app — multi-brand token architecture and governance",
    },
    accent: "#22d3ee",
    product: {
      es: "App de conductor para gestión de flotas, con dos marcas activas (marca principal + una segunda marca)",
      en: "Fleet-management driver app, with two active brands (a primary brand + a second brand)",
    },
    sourceOfTruth: {
      es: "Archivo de producción en Figma — auditado y reconstruido en vivo, con paquete de gobernanza formal",
      en: "Production Figma file — audited and rebuilt live, with a formal governance package",
    },
    generations: {
      es: "Una — diagnóstico y reconstrucción sobre el sistema ya existente",
      en: "One — diagnosis and rebuild of the existing system",
    },
    statusLine: {
      es: "Reconstruido y verificado en producción; 27 pantallas consolidadas",
      en: "Rebuilt and verified in production; 27 screens consolidated",
    },
    constructionNotes: [
      {
        es: "A diferencia de Kinetik y Serenia, este sistema no nació de cero: llevaba años creciendo de forma orgánica y, en la superficie, se veía completo. En la práctica fallaba en silencio — colores sin tokens, dos de cinco sets de componentes corruptos, badges con el mismo color de fondo y texto.",
        en: "Unlike Kinetik and Serenia, this system didn't start from zero: it had grown organically for years and looked complete on the surface. In practice it was quietly failing — colors without tokens, two of five component sets corrupted, badges with the exact same background and text color.",
      },
      {
        es: "Antes de tocar nada se corrió una auditoría estructurada en 4 ejes, con cada hallazgo respaldado por un node ID real, un ratio de contraste medido o un hex exacto.",
        en: "Before touching anything, a structured 4-axis audit ran, every finding backed by a real node ID, a measured contrast ratio, or an exact hex value.",
      },
    ],
    tokens: [
      {
        name: "status/error (semántico)",
        hex: "#B10015",
        note: {
          es: "Migración de marca completa: bordes, iconografía, asteriscos y banners de alerta",
          en: "Full brand-wide migration: borders, iconography, asterisks, and alert banners",
        },
      },
    ],
    visualLanguage: [
      {
        es: "Arquitectura de tokens de 3 niveles: Primitivas alimentando Semánticas, resueltas por marca vía el sistema de Modos de Figma.",
        en: "A 3-tier token architecture: Primitives feeding Semantics, resolved per brand through Figma's Mode system.",
      },
      {
        es: "Trabajo reversible por defecto: la página de producción se duplicó antes de cualquier edición.",
        en: "Reversible work by default: the production page was duplicated before any edit.",
      },
      {
        es: "No rehacer lo que ya funciona: se verificó una librería madura ya existente y se migró en vez de reemplazar.",
        en: "Don't rebuild what already works: an existing mature library was verified and migrated instead of replaced.",
      },
      {
        es: "Verificar contra la lógica real, no contra la apariencia: expuso contenido completamente inventado en un patrón que parecía solo un desajuste visual.",
        en: "Verify against real logic, not appearance: exposed entirely fabricated content in a pattern that looked like a simple visual mismatch.",
      },
    ],
    timeline: [
      {
        era: "00",
        label: { es: "Diagnóstico", en: "Diagnosis" },
        title: { es: "Lo que la auditoría encontró", en: "What the audit found" },
        description: {
          es: "Colores sin tokens; dos sets corruptos (spinner, fila deshabilitada, rating); badges invisibles; botones sin coincidir con producción; sin gobernanza.",
          en: "Colors with no tokens; two corrupted sets (spinner, disabled row, rating); invisible badges; buttons not matching production; no governance.",
        },
      },
      {
        era: "01",
        label: { es: "Reconstrucción", en: "Rebuild" },
        title: { es: "Lo que quedó en pie", en: "What shipped" },
        description: {
          es: "Arquitectura de 3 niveles con cambio de marca automático; sets recuperados; badges corregidos; 27 pantallas verificadas; gobernanza formal documentada.",
          en: "3-tier architecture with automatic brand switching; sets recovered; badges fixed; 27 screens verified; formal governance documented.",
        },
      },
    ],
    gaps: [
      {
        es: "Solo un puñado de componentes tenían maestros propios de la segunda marca — brecha de paridad señalada para el roadmap.",
        en: "Only a handful of components had true masters of the second brand — a parity gap flagged for the roadmap.",
      },
      {
        es: "La corrupción de los sets no era visible desde el panel de capas — puede repetirse sin auditoría periódica.",
        en: "The sets' corruption wasn't visible from the layers panel — it can recur without periodic auditing.",
      },
    ],
    currentStateNote: {
      es: "El sistema ya no depende de la memoria de quien lo tocó por última vez: arquitectura de tokens verificable, librería arrastrable, y gobernanza formal documentada.",
      en: "The system no longer depends on the memory of whoever last touched it: a verifiable token architecture, a draggable library, and formal documented governance.",
    },
  },
];

export function getDesignSystem(slug: string) {
  return DESIGN_SYSTEMS.find((d) => d.slug === slug);
}
