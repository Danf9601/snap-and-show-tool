import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Locale = "es" | "en";
export type Bi = { es: string; en: string };

type LocaleContextValue = { locale: Locale; setLocale: (l: Locale) => void };
const LocaleContext = createContext<LocaleContextValue>({ locale: "es", setLocale: () => {} });
const STORAGE_KEY = "portfolio-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "es") setLocaleState(stored);
    } catch {
      // localStorage can throw in private browsing / disabled storage — default stays "es".
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore — nothing to persist if storage is unavailable
    }
  };

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}

export const UI_STRINGS: Record<Locale, Record<string, string>> = {
  es: {
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Hablemos",
    "work.back": "← Volver a Work",
    "work.headline": "Case studies donde el diseño y el código son la misma decisión.",
    "work.intro":
      "Diez productos reales — fintech, movilidad, IA, e-commerce y sistemas de diseño propios. Kinetik Studio y Serenia son flagship: sistemas completos de mi autoría, del token al build.",
    "work.viewCaseStudy": "Ver case study →",
    "work.notFound": "Ese case study no existe.",
    "work.section.overview": "Qué era el reto",
    "work.section.features.site": "Qué incluye el sitio",
    "work.section.features.product": "Qué hace el producto",
    "work.section.impact": "Números",
    "work.section.process": "Cómo se construyó",
    "work.section.research": "Pain points por frecuencia",
    "work.section.findings": "Qué aprendimos",
    "work.section.tools": "Con qué se hizo",
    "work.section.wayOfWork": "Ritmo del equipo",
    "designsystem.notFound": "Ese design system no existe.",
    "designsystem.back": "← Design Systems",
    "designsystem.meta.product": "Producto",
    "designsystem.meta.sourceOfTruth": "Fuente de verdad",
    "designsystem.meta.generations": "Generaciones",
    "designsystem.meta.status": "Estado",
    "designsystem.section.construction": "Cómo se construyó",
    "designsystem.section.generations": "Cómo se construyó — generaciones",
    "designsystem.section.tokens": "Tokens",
    "designsystem.section.gradients": "Gradientes",
    "designsystem.section.typography": "Tipografía",
    "designsystem.section.visualLanguage": "Vocabulario visual",
    "designsystem.section.characters": "Los 7 personajes — estado del rediseño",
    "designsystem.section.retiredPalette": "Paleta retirada — no reintroducir",
    "designsystem.section.gaps": "Brechas conocidas",
    "designsystem.section.currentState": "Estado actual",
    "designsystem.status.redesigned": "Rediseñado V2",
    "designsystem.status.unchanged": "Original, sin cambios",
    "designsystem.status.pending": "Rediseño sin decidir",
    "hero.role.line1": "Senior UX/UI Designer",
    "hero.role.line2": "& Front End Developer",
    "hero.experience": "8+ años",
    "hero.headline":
      "Diseño y construyo productos digitales de punta a punta — del design system al código en producción.",
    "hero.cta.work": "Ver trabajo",
    "hero.cta.talk": "Hablemos",
    "about.headline": "Ocho años cerrando la brecha entre diseño y código.",
    "about.bio":
      "Soy Daniel Forero, diseño y programo desde Bogotá. Empecé en dirección de arte, terminé escribiendo el frontend de los productos que diseñaba — y hoy esa doble mirada es exactamente lo que aporto.",
    "about.experienceSummary":
      "Trabajo mejor donde hay complejidad real: datos densos, flujos de pago, sistemas que muchos equipos van a consumir.",
    "uilab.title": "Demos funcionales, no capturas.",
    "uilab.intro":
      "Cada pieza corre en vivo en esta página: estados reales, validación instantánea y animación a 60fps. Abre devtools si quieres — para eso están.",
    "uilab.item.dashboard.title": "AI Command Center",
    "uilab.item.dashboard.desc": "Métricas en vivo, gráfico animado y feed de logs tipo terminal.",
    "uilab.item.checkout": "Checkout rápido",
    "uilab.item.checkout.desc": "Flujo de pago en tres pasos con validación en tiempo real.",
    "uilab.item.quoter": "Cotizador SaaS",
    "uilab.item.quoter.desc": "Alcance y timeline configurables con resumen dinámico.",
    "uilab.item.player": "Player Serenia",
    "uilab.item.player.desc":
      "Única excepción cromática del sitio: paleta violeta/esmeralda de Serenia.",
    "designsystems.headline": "Tres sistemas propios, en producción.",
    "designsystems.intro":
      "No plantillas: escalas de color validadas en contraste AA, roles tipográficos fijos y componentes con estados definidos antes de escribir una línea de UI.",
    "designsystems.kinetik.subtitle": "Kinetik Studio — dark-only, gris + acento cian único",
    "designsystems.serenia.subtitle": "Serenia — V2, tercera generación de identidad visual",
    "designsystems.launchmobility.subtitle":
      "Launch Mobility — arquitectura de tokens y gobernanza",
    "expertise.01.title": "Product Design",
    "expertise.01.body":
      "Descubrimiento, arquitectura de información y flujos. La interfaz sale de una decisión de producto, no de una plantilla.",
    "expertise.02.title": "Design Systems",
    "expertise.02.body":
      "Tokens semánticos, componentes con estados completos y documentación viva. Un sistema que el equipo puede usar sin preguntarme nada.",
    "expertise.03.title": "Frontend Engineering",
    "expertise.03.body":
      "React, TypeScript y Tailwind en producción. Accesibilidad AA, 60fps y bundles que no crecen sin justificación.",
    "expertise.04.title": "Prototipado rápido",
    "expertise.04.body":
      "De la idea a un prototipo funcional en días — la mejor forma de validar una interacción es poder tocarla.",
    "contact.headline": "¿Tienes un producto que merece estar bien construido?",
    "lab.tokenInspector.title": "Token Inspector",
    "lab.tokenInspector.desc":
      "Pega CSS con hex sueltos — te dice qué token semántico debería usar cada uno.",
    "lab.pipeline.title": "Migration Pipeline",
    "lab.pipeline.desc":
      "Réplica del pipeline de build asistido por IA de Launch Mobility (anonimizado).",
    "lab.contrast.title": "Contrast Checker",
    "lab.contrast.desc":
      "WCAG 2.1 en vivo — el mismo criterio que aplico antes de cerrar cualquier pantalla.",
    "lab.fleet.title": "Fleet Map",
    "lab.fleet.desc":
      "Visibilidad de flota en tiempo real — el mismo concepto detrás del flujo de reservas de Launch Mobility.",
    "lab.themeMode.title": "Modo de marca",
    "lab.themeMode.desc":
      "Cambio de marca automático vía tokens — igual al sistema de Modos de Figma en Launch Mobility.",
    "lab.commandPalette.title": "Command Palette",
    "lab.commandPalette.desc": "⌘K / Ctrl+K — navegación real por teclado, no decorativa.",
    "lab.paymentError.title": "Payment Error States",
    "lab.paymentError.desc":
      "Los 14 estados de error reales de Launch Mobility, reproducidos por plataforma.",
    "lab.streak.title": "Streak Engine",
    "lab.streak.desc":
      "La lógica real de rachas de Serenia — cálculo server-side, hitos, sin trucos del cliente.",
    "lab.prTimeline.title": "PR Timeline Replay",
    "lab.prTimeline.desc":
      "Un gap de merge real, detectado leyendo el historial de git en vez de confiar en el build.",
    "lab.localeFormat.title": "Locale Playground",
    "lab.localeFormat.desc":
      "Usa el mismo switch ES/EN del sitio — Intl.NumberFormat y Intl.DateTimeFormat en vivo.",
  },
  en: {
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Let's talk",
    "work.back": "← Back to Work",
    "work.headline": "Case studies where design and code are the same decision.",
    "work.intro":
      "Ten real products — fintech, mobility, AI, e-commerce, and design systems of my own. Kinetik Studio and Serenia are flagships: complete systems of my own authorship, from token to build.",
    "work.viewCaseStudy": "View case study →",
    "work.notFound": "That case study doesn't exist.",
    "work.section.overview": "The challenge",
    "work.section.features.site": "What the site includes",
    "work.section.features.product": "What the product does",
    "work.section.impact": "Numbers",
    "work.section.process": "How it was built",
    "work.section.research": "Pain points by frequency",
    "work.section.findings": "What we learned",
    "work.section.tools": "Built with",
    "work.section.wayOfWork": "Way of work",
    "designsystem.notFound": "That design system doesn't exist.",
    "designsystem.back": "← Design Systems",
    "designsystem.meta.product": "Product",
    "designsystem.meta.sourceOfTruth": "Source of truth",
    "designsystem.meta.generations": "Generations",
    "designsystem.meta.status": "Status",
    "designsystem.section.construction": "How it was built",
    "designsystem.section.generations": "How it was built — generations",
    "designsystem.section.tokens": "Tokens",
    "designsystem.section.gradients": "Gradients",
    "designsystem.section.typography": "Typography",
    "designsystem.section.visualLanguage": "Visual vocabulary",
    "designsystem.section.characters": "The 7 characters — redesign status",
    "designsystem.section.retiredPalette": "Retired palette — do not reintroduce",
    "designsystem.section.gaps": "Known gaps",
    "designsystem.section.currentState": "Current state",
    "designsystem.status.redesigned": "Redesigned V2",
    "designsystem.status.unchanged": "Original, unchanged",
    "designsystem.status.pending": "Redesign undecided",
    "hero.role.line1": "Senior UX/UI Designer",
    "hero.role.line2": "& Front End Developer",
    "hero.experience": "8+ years",
    "hero.headline":
      "I design and build digital products end to end — from the design system to code in production.",
    "hero.cta.work": "See work",
    "hero.cta.talk": "Let's talk",
    "about.headline": "Eight years closing the gap between design and code.",
    "about.bio":
      "I'm Daniel Forero — I design and build from Bogotá. I started in art direction and ended up writing the front end for the products I was designing — and today that dual perspective is exactly what I bring.",
    "about.experienceSummary":
      "I work best where there's real complexity: dense data, payment flows, systems that many teams will end up consuming.",
    "uilab.title": "Functional demos, not screenshots.",
    "uilab.intro":
      "Every piece runs live on this page: real states, instant validation, and animation at 60fps. Open devtools if you want — that's what they're there for.",
    "uilab.item.dashboard.title": "AI Command Center",
    "uilab.item.dashboard.desc": "Live metrics, an animated chart, and a terminal-style log feed.",
    "uilab.item.checkout": "Quick Checkout",
    "uilab.item.checkout.desc": "A three-step payment flow with real-time validation.",
    "uilab.item.quoter": "SaaS Quote Builder",
    "uilab.item.quoter.desc": "Configurable scope and timeline with a dynamic summary.",
    "uilab.item.player": "Serenia Player",
    "uilab.item.player.desc":
      "The site's one chromatic exception: Serenia's violet/emerald palette.",
    "designsystems.headline": "Three systems of my own, in production.",
    "designsystems.intro":
      "No templates: color scales validated for AA contrast, fixed typographic roles, and components with defined states before a single line of UI gets written.",
    "designsystems.kinetik.subtitle": "Kinetik Studio — dark-only, gray + a single cyan accent",
    "designsystems.serenia.subtitle": "Serenia — V2, third generation of visual identity",
    "designsystems.launchmobility.subtitle": "Launch Mobility — token architecture and governance",
    "expertise.01.title": "Product Design",
    "expertise.01.body":
      "Discovery, information architecture, and flows. The interface comes from a product decision, not a template.",
    "expertise.02.title": "Design Systems",
    "expertise.02.body":
      "Semantic tokens, components with complete states, and living documentation. A system the team can use without having to ask me anything.",
    "expertise.03.title": "Frontend Engineering",
    "expertise.03.body":
      "React, TypeScript, and Tailwind in production. AA accessibility, 60fps, and bundles that don't grow without justification.",
    "expertise.04.title": "Rapid Prototyping",
    "expertise.04.body":
      "From idea to a functional prototype in days — the best way to validate an interaction is to be able to touch it.",
    "contact.headline": "Have a product that deserves to be built right?",
    "lab.tokenInspector.title": "Token Inspector",
    "lab.tokenInspector.desc":
      "Paste CSS with loose hex values — it tells you which semantic token each one should be.",
    "lab.pipeline.title": "Migration Pipeline",
    "lab.pipeline.desc": "A replay of Launch Mobility's AI-assisted build pipeline (anonymized).",
    "lab.contrast.title": "Contrast Checker",
    "lab.contrast.desc": "WCAG 2.1 live — the same bar I hold before closing any screen.",
    "lab.fleet.title": "Fleet Map",
    "lab.fleet.desc":
      "Real-time fleet visibility — the same concept behind Launch Mobility's reservation flow.",
    "lab.themeMode.title": "Brand Mode",
    "lab.themeMode.desc":
      "Automatic brand switching via tokens — the same Figma Modes system from Launch Mobility.",
    "lab.commandPalette.title": "Command Palette",
    "lab.commandPalette.desc": "⌘K / Ctrl+K — real keyboard-driven navigation, not decorative.",
    "lab.paymentError.title": "Payment Error States",
    "lab.paymentError.desc": "Launch Mobility's 14 real error states, reproduced per platform.",
    "lab.streak.title": "Streak Engine",
    "lab.streak.desc":
      "Serenia's real streak logic — server-side calculation, milestones, no client-side tricks.",
    "lab.prTimeline.title": "PR Timeline Replay",
    "lab.prTimeline.desc":
      "A real merge gap, caught by reading git history instead of trusting the build's summary.",
    "lab.localeFormat.title": "Locale Playground",
    "lab.localeFormat.desc":
      "Uses the site's own ES/EN switch — Intl.NumberFormat and Intl.DateTimeFormat, live.",
  },
};

export function t(locale: Locale, key: string): string {
  return UI_STRINGS[locale][key] ?? UI_STRINGS.es[key] ?? key;
}
