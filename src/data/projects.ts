import type { Bi } from "@/lib/i18n";

export type ProjectStatus = "AVAILABLE" | "IN PROGRESS" | "SHIPPED";

export type Project = {
  slug: string;
  title: string;
  year: string;
  role: Bi;
  summary: Bi;
  tags: string[];
  status: ProjectStatus;
  cover: string;
  flagship?: boolean;
  image?: string;
  clientLogo?: string;
  features?: { title: Bi; description: Bi }[];
  stats?: { value: string; label: Bi }[];
  process?: Bi[];
  tools?: { name: string; note?: Bi }[];
  findings?: Bi[];
  painPoints?: { label: Bi; value: number }[];
  wayOfWork?: Bi[];
};

export const PROJECTS: Project[] = [
  {
    slug: "kinetik",
    title: "Kinetik Studio",
    year: "2025",
    role: {
      es: "Senior UX/UI Designer · Front-End Developer · Estrategia de IA",
      en: "Senior UX/UI Designer · Front-End Developer · AI Strategy",
    },
    summary: {
      es: "Kinetik Studio es un estudio de automatización e incubadora de productos digitales que construye sistemas inteligentes e interfaces que escalan negocios, sobre tres pilares: automatización de workflows, agentes de IA y diseño/desarrollo web y de producto. Mi rol ahí cubre el front end, el diseño UX/UI y la estrategia de IA de los productos.",
      en: "Kinetik Studio is an automation studio and digital-product incubator that builds intelligent systems and interfaces that scale businesses, on three pillars: workflow automation, AI agents, and web/product design and development. My role there covers the front end, UX/UI design, and AI strategy for the products.",
    },
    tags: ["Product Design", "Design System", "Frontend"],
    status: "SHIPPED",
    cover: "kinetik",
    flagship: true,
    features: [
      {
        title: { es: "Workflow & Automatización", en: "Workflow & Automation" },
        description: {
          es: "Ingeniería de flujos operacionales que reemplazan trabajo manual repetitivo por código autónomo — la base operativa de los productos de Kinetik.",
          en: "Engineering of operational flows that replace repetitive manual work with autonomous code — the operational backbone of Kinetik's products.",
        },
      },
      {
        title: { es: "Agentes de IA", en: "AI Agents" },
        description: {
          es: "Diseño y estrategia de agentes conversacionales multilingües disponibles 24/7 en varios canales (chat web, WhatsApp, telefonía), con memoria de datos propia y acceso a herramientas.",
          en: "Design and strategy for multilingual conversational agents available 24/7 across multiple channels (web chat, WhatsApp, telephony), with their own data memory and tool access.",
        },
      },
      {
        title: { es: "Diseño y desarrollo de producto", en: "Product design and development" },
        description: {
          es: "Front end de sitios de alto rendimiento, plataformas SaaS y productos móviles — de Figma a producción, sobre un design system propio.",
          en: "Front end for high-performance sites, SaaS platforms, and mobile products — from Figma to production, on an in-house design system.",
        },
      },
      {
        title: { es: "Procesamiento de conocimiento interno", en: "Internal knowledge processing" },
        description: {
          es: "Vectorización y búsqueda en tiempo real sobre documentación interna, para que los agentes respondan con contexto real del negocio en vez de respuestas genéricas.",
          en: "Vectorization and real-time search over internal documentation, so agents answer with real business context instead of generic responses.",
        },
      },
    ],
    stats: [
      { value: "3", label: { es: "Pilares de servicio", en: "Service pillars" } },
      { value: "24/7", label: { es: "Agentes disponibles", en: "Agents available" } },
      {
        value: "3",
        label: {
          es: "Canales de agente (web, WhatsApp, telefonía)",
          en: "Agent channels (web, WhatsApp, telephony)",
        },
      },
    ],
    process: [
      {
        es: 'Design system propio ("Midnight Pro") como fuente de verdad',
        en: 'Own design system ("Midnight Pro") as the source of truth',
      },
      {
        es: "Front end en Next.js/React/TypeScript sobre los tokens de Figma",
        en: "Front end in Next.js/React/TypeScript built on Figma tokens",
      },
      {
        es: "Estrategia de agentes de IA: qué canal, qué memoria de datos",
        en: "AI agent strategy: which channel, what data memory",
      },
      {
        es: "Automatización de los procesos operativos (Make.com/Zapier)",
        en: "Automation of operational processes (Make.com/Zapier)",
      },
    ],
    findings: [
      {
        es: 'El sistema de diseño "Midnight Pro" de este portafolio es el mismo que diseñé para Kinetik Studio.',
        en: 'The "Midnight Pro" design system on this portfolio is the exact same one I designed for Kinetik Studio.',
      },
    ],
    tools: [
      { name: "Figma", note: { es: "Diseño y design system", en: "Design and design system" } },
      { name: "Next.js", note: { es: "Front end", en: "Front end" } },
      { name: "React", note: { es: "Front end", en: "Front end" } },
      { name: "TypeScript", note: { es: "Front end", en: "Front end" } },
      { name: "Tailwind CSS", note: { es: "Front end", en: "Front end" } },
      { name: "Claude 3.5 Sonnet", note: { es: "Lógica de IA", en: "AI logic" } },
      { name: "OpenAI API", note: { es: "Lógica de IA", en: "AI logic" } },
      { name: "LangChain", note: { es: "Lógica de IA", en: "AI logic" } },
      { name: "Vercel AI SDK", note: { es: "Lógica de IA", en: "AI logic" } },
      { name: "Supabase", note: { es: "Datos e infraestructura", en: "Data & infrastructure" } },
      { name: "PostgreSQL", note: { es: "Datos e infraestructura", en: "Data & infrastructure" } },
      { name: "GraphQL", note: { es: "Datos e infraestructura", en: "Data & infrastructure" } },
      { name: "Make.com", note: { es: "Automatización", en: "Automation" } },
      { name: "Zapier", note: { es: "Automatización", en: "Automation" } },
    ],
  },
  {
    slug: "serenia",
    title: "Serenia",
    year: "2025",
    role: {
      es: "Founder · Full-Stack Engineer · UX/UI Designer",
      en: "Founder · Full-Stack Engineer · UX/UI Designer",
    },
    summary: {
      es: "App de meditación guiada en Flutter + Supabase. Sistema propio de color y movimiento, siete personajes ilustrados y una sesión de audio que se siente sin fricción desde el primer tap.",
      en: "Guided meditation app built in Flutter + Supabase. A custom color-and-motion system, seven illustrated characters, and an audio session that feels frictionless from the very first tap.",
    },
    tags: ["Mobile Product", "Design System", "Flutter"],
    status: "SHIPPED",
    cover: "serenia",
    flagship: true,
    features: [
      {
        title: {
          es: "Sistema de diseño propio de punta a punta",
          en: "End-to-end proprietary design system",
        },
        description: {
          es: '"V2 Blueberry + Cream Soda": tokens definidos en Figma y llevados 1:1 a Flutter, con 7 personajes originales y 88 ilustraciones catalogadas.',
          en: '"V2 Blueberry + Cream Soda": tokens defined in Figma and carried 1:1 into Flutter, with 7 original characters and 88 cataloged illustrations.',
        },
      },
      {
        title: { es: "Coach de bienestar con IA real", en: "Real AI wellness coach" },
        description: {
          es: "Chat servido desde una Edge Function que invoca la API de Claude server-side, con historial persistente en Supabase.",
          en: "Chat served from an Edge Function that calls the Claude API server-side, with persistent history in Supabase.",
        },
      },
      {
        title: {
          es: "Catálogo de contenido con fallback resiliente",
          en: "Content catalog with a resilient fallback",
        },
        description: {
          es: "Meditaciones y sonidos viven en Supabase; cada pantalla cae a un catálogo local si la tabla está vacía.",
          en: "Meditations and sounds live in Supabase; every screen falls back to a local catalog if the table is empty.",
        },
      },
      {
        title: { es: "Gamificación con lógica server-side", en: "Server-side gamification logic" },
        description: {
          es: "Rachas y logros se calculan vía Edge Function, nunca confiando en datos del cliente.",
          en: "Streaks and achievements are calculated via Edge Function, never trusting client-sent data.",
        },
      },
      {
        title: {
          es: "Suscripciones desacopladas del proveedor",
          en: "Subscriptions decoupled from the provider",
        },
        description: {
          es: 'Serenia Plus vía RevenueCat, con columna "provider" genérica en el esquema.',
          en: 'Serenia Plus via RevenueCat, with a generic "provider" column in the schema.',
        },
      },
      {
        title: { es: "Auditoría de seguridad pre-lanzamiento", en: "Pre-launch security audit" },
        description: {
          es: "20 puntos verificados, incluyendo una vulnerabilidad IDOR encontrada y corregida antes de producción.",
          en: "20 points verified, including an IDOR vulnerability found and fixed before production.",
        },
      },
    ],
    stats: [
      { value: "16", label: { es: "Features Flutter", en: "Flutter features" } },
      { value: "11", label: { es: "Migraciones SQL sin drift", en: "SQL migrations, zero drift" } },
      { value: "16/16", label: { es: "Tablas con RLS", en: "Tables with RLS" } },
      { value: "7", label: { es: "Personajes originales", en: "Original characters" } },
    ],
    process: [
      {
        es: "Sistema de diseño completo en Figma antes de tocar código",
        en: "Complete design system in Figma before writing a line of code",
      },
      {
        es: "Arquitectura Flutter por features (16 módulos) con Riverpod + go_router",
        en: "Feature-based Flutter architecture (16 modules) with Riverpod + go_router",
      },
      {
        es: "Modelado de datos en Supabase: RLS desde la primera migración",
        en: "Data modeling in Supabase: RLS from the very first migration",
      },
      {
        es: "Integración de IA real (Claude) para el Coach, vía Edge Function",
        en: "Real AI integration (Claude) for the Coach, via Edge Function",
      },
      {
        es: "Auditoría de seguridad propia de 20 puntos antes de lanzamiento",
        en: "A 20-point in-house security audit before launch",
      },
      {
        es: "Orquestación de dos agentes de IA en paralelo sobre el mismo repo",
        en: "Two AI agents working in parallel on the same repo",
      },
    ],
    tools: [
      { name: "Flutter", note: { es: "App móvil iOS/Android", en: "iOS/Android mobile app" } },
      {
        name: "Supabase",
        note: { es: "Postgres, Auth, Edge Functions", en: "Postgres, Auth, Edge Functions" },
      },
      { name: "Figma", note: { es: "Sistema de diseño V2", en: "V2 design system" } },
      { name: "Recraft", note: { es: "Generación de personajes", en: "Character generation" } },
      { name: "Claude (Anthropic API)", note: { es: "Coach de IA", en: "AI Coach" } },
      { name: "RevenueCat", note: { es: "Suscripciones", en: "Subscriptions" } },
    ],
    findings: [
      {
        es: "El selector de sonido de fondo era decorativo — el fix fue conectarlo al catálogo real de sonidos en Supabase.",
        en: "The background-sound selector was decorative — fixed by wiring it to the real sounds catalog in Supabase.",
      },
      {
        es: "Fix de seguridad clave: `update-streak` derivaba user_id del body sin verificar. Corregido vía JWT server-side.",
        en: "Key security fix: `update-streak` derived user_id from the request body without verifying it. Fixed via server-side JWT.",
      },
      {
        es: "Un documento técnico único permitió que dos agentes en paralelo no duplicaran trabajo.",
        en: "A single technical document let two parallel agents avoid duplicating work.",
      },
    ],
    wayOfWork: [
      {
        es: "Founder/builder solo: producto, diseño y desarrollo sin equipo.",
        en: "Solo founder/builder: product, design, and development with no team.",
      },
      {
        es: "Dos agentes de IA en paralelo, coordinados por un documento técnico vivo.",
        en: "Two AI agents working in parallel, coordinated by a living technical document.",
      },
      { es: "Figma como fuente de verdad del diseño.", en: "Figma as the design source of truth." },
    ],
  },
  {
    slug: "launch-mobility",
    title: "Launch Mobility — Senior UX/UI Designer & Front-End Developer",
    year: "2024",
    role: {
      es: "Senior UX/UI Designer · Front-End Development · Design Systems",
      en: "Senior UX/UI Designer · Front-End Development · Design Systems",
    },
    summary: {
      es: "Como Senior UX/UI Designer y Front-End Developer en Launch Mobility, mi trabajo va bastante más allá de rediseñar pantallas: dirijo el sistema de diseño de la compañía de punta a punta (gobernanza de tokens multimarca, arquitectura atómica, componentes React Native), diseño y audito el flujo de reservas completo del producto, construyo el puente pixel-perfect entre Figma y código en piezas de producción reales, y produzco todo el material de comunicación de marca — decks, presentaciones, infografías, landing pages y contenido web.",
      en: "As Senior UX/UI Designer and Front-End Developer at Launch Mobility, my work goes well beyond redesigning screens: I run the company's design system end-to-end (multi-brand token governance, atomic architecture, React Native components), design and audit the product's full reservation flow, build the pixel-perfect bridge between Figma and production code, and produce all of the brand's communication material — decks, presentations, infographics, landing pages, and web content.",
    },
    tags: ["Design Systems", "Front-End Development", "Product Design"],
    status: "SHIPPED",
    cover: "mobility",
    features: [
      {
        title: {
          es: "Gobernanza de sistema de diseño multimarca",
          en: "Multi-brand design system governance",
        },
        description: {
          es: "Dirijo el sistema de diseño atómico de la compañía (Fundamentos → Átomos → Moléculas → Organismos → Patrones), incluida la migración a una arquitectura de tokens de tres niveles con cambio automático de marca.",
          en: "I run the company's atomic design system (Foundations → Atoms → Molecules → Organisms → Patterns), including the migration to a three-tier token architecture with automatic brand-mode switching.",
        },
      },
      {
        title: {
          es: "Auditoría y diseño del flujo de reservas",
          en: "Reservation flow audit and design",
        },
        description: {
          es: "Audité las ~44 pantallas del flujo de reservas contra el checklist oficial de journeys y diseñé desde cero los journeys faltantes (actualizar, cancelar y extender reserva).",
          en: "Audited the ~44-screen reservation flow against the official journey checklist and designed the missing journeys from scratch (update, cancel, and extend reservation).",
        },
      },
      {
        title: {
          es: "Sistema de diseño para una migración completa a React Native",
          en: "Design system for a full React Native migration",
        },
        description: {
          es: "En la iniciativa que unifica cuatro bases de código en una sola app React Native, soy el punto de control humano que un pipeline de IA consulta cuando necesita un componente que no existe todavía.",
          en: "In the initiative unifying four codebases into one React Native app, I'm the human checkpoint an AI pipeline escalates to whenever it needs a component that doesn't exist yet.",
        },
      },
      {
        title: {
          es: "Pagos y cumplimiento, verificados contra producción",
          en: "Payments and compliance, verified against production",
        },
        description: {
          es: "Reconstruí pixel-perfect los 14 estados de error de pago para Android e iOS a partir de grabaciones reales de producción.",
          en: "Rebuilt all 14 payment-validation error states pixel-perfect for Android and iOS from real production recordings.",
        },
      },
      {
        title: {
          es: "Diseño-a-código en producción real",
          en: "Design-to-code in real production",
        },
        description: {
          es: "Landing page de partnership construida a mano en HTML/CSS/JS desde un pipeline de extracción vía API de Figma, con QA automatizada en Playwright.",
          en: "A partnership landing page hand-built in HTML/CSS/JS from a Figma-API extraction pipeline, with automated Playwright QA.",
        },
      },
      {
        title: {
          es: "Comunicación de marca de punta a punta",
          en: "End-to-end brand communication",
        },
        description: {
          es: "Pitch decks, presentaciones, infografías, campañas de email y contenido web para la marca corporativa y sus sub-marcas.",
          en: "Pitch decks, presentations, infographics, email campaigns, and web content for the corporate brand and its sub-brands.",
        },
      },
      {
        title: { es: "Decisiones de UX basadas en evidencia", en: "Evidence-based UX decisions" },
        description: {
          es: "Estudié límites de caracteres probando texto real renderizado en Figma, documentando la comparación en una infografía propia.",
          en: "Studied character limits by testing real rendered text in Figma, documenting the comparison in a purpose-built infographic.",
        },
      },
    ],
    stats: [
      {
        value: "44",
        label: {
          es: "pantallas auditadas en el flujo de reservas",
          en: "screens audited in the reservation flow",
        },
      },
      {
        value: "27",
        label: {
          es: "pantallas de producción verificadas y consolidadas",
          en: "production screens verified and consolidated",
        },
      },
      {
        value: "3",
        label: {
          es: "niveles en la arquitectura de tokens multimarca",
          en: "tiers in the multi-brand token architecture",
        },
      },
      {
        value: "14",
        label: {
          es: "estados de error de pago documentados (Android + iOS)",
          en: "payment error states documented (Android + iOS)",
        },
      },
    ],
    process: [
      {
        es: "Auditar antes de tocar nada — nunca asumir un color o un texto sin verificarlo en vivo",
        en: "Audit before touching anything — never assume a color or a string without verifying it live",
      },
      {
        es: "Diseñar o reparar sobre una copia reversible del archivo antes de tocar la versión activa",
        en: "Design or repair on a reversible copy of the file before touching the active version",
      },
      {
        es: "Extraer specs reales vía API en vez de adivinar valores",
        en: "Extract real specs via API instead of guessing values",
      },
      {
        es: "Verificar contra la lógica real de la aplicación, no solo contra su apariencia",
        en: "Verify against the app's real logic, not just its appearance",
      },
      {
        es: "Documentar cada decisión donde vive el trabajo (Control Sheets, UX Notes)",
        en: "Document every decision where the work lives (Control Sheets, UX Notes)",
      },
      {
        es: "Producir el material de comunicación de marca con el mismo control que una pantalla de producto",
        en: "Produce brand communication material held to the same discipline as a product screen",
      },
    ],
    tools: [
      {
        name: "Figma",
        note: {
          es: "Variables, Plugin API, gobernanza de tokens",
          en: "Variables, Plugin API, token governance",
        },
      },
      {
        name: "React Native (Ignite)",
        note: { es: "Catálogo de componentes de producción", en: "Production component catalog" },
      },
      {
        name: "Storybook (CSF3)",
        note: { es: "Documentación viva de componentes", en: "Living component documentation" },
      },
      {
        name: "Stripe",
        note: { es: "Estados de error de pago verificados", en: "Verified payment error states" },
      },
      {
        name: "Playwright",
        note: {
          es: "QA visual y de accesibilidad automatizado",
          en: "Automated visual and accessibility QA",
        },
      },
      {
        name: "GitHub",
        note: {
          es: "Flujo de PRs, recuperación de gaps de merge",
          en: "PR workflow, merge-gap recovery",
        },
      },
    ],
    findings: [
      {
        es: 'Un pipeline de build reportó un componente como "listo" cuando el código nunca había llegado a main — lo detecté leyendo el historial real de git y lo cerré con un PR de seguimiento.',
        en: 'A build pipeline reported a component as "done" when the code had never landed on main — I caught it by reading the real git history and closed it with a follow-up PR.',
      },
      {
        es: "Un patrón que parecía tener solo un desajuste visual resultó ser contenido completamente inventado — ese hallazgo cambió mi proceso de verificación.",
        en: "A pattern that looked like a simple visual mismatch turned out to be entirely fabricated content — that finding changed my verification process.",
      },
      {
        es: "Antes de reconstruir 35 pantallas desde cero, encontré una librería de producción madura ya existente — migrar en vez de rehacer evitó tirar trabajo probado.",
        en: "Before rebuilding 35 screens from scratch, I found an existing mature production library — migrating instead of rebuilding avoided throwing away proven work.",
      },
    ],
    wayOfWork: [
      {
        es: "Nunca reorganiza ni renombra contenido existente sin instrucción explícita.",
        en: "Never reorganizes or renames existing content without an explicit instruction.",
      },
      {
        es: "Prioriza siempre evidencia de producción sobre la suposición de diseño.",
        en: "Always prioritizes production evidence over design assumption.",
      },
      {
        es: "Señala vacíos e inconsistencias para decisión del negocio en vez de resolverlos por su cuenta.",
        en: "Flags gaps and inconsistencies for business decision instead of resolving them unilaterally.",
      },
    ],
  },
  {
    slug: "tul",
    title: "Tul",
    year: "2022",
    role: {
      es: "UX/UI Designer · Design System · Webflow",
      en: "UX/UI Designer · Design System · Webflow",
    },
    summary: {
      es: "Parte del equipo UX/UI a cargo del checkout y las pasarelas de pago, y de la WebApp completa.",
      en: "Part of the UX/UI team responsible for checkout and payment gateways, and for the entire WebApp.",
    },
    tags: ["E-commerce", "Design System", "Webflow"],
    status: "SHIPPED",
    cover: "tul",
    clientLogo: "tul",
    stats: [
      {
        value: "80%",
        label: { es: "Clientes pagando digitalmente", en: "Customers paying digitally" },
      },
      {
        value: "+14%",
        label: {
          es: "Incremento en ventas por el cambio a digital",
          en: "Sales increase from the shift to digital",
        },
      },
      {
        value: "50%",
        label: {
          es: "Reducción en tiempo de creación de frames con el design system",
          en: "Reduction in frame-creation time with the design system",
        },
      },
      { value: "2 meses", label: { es: "Duración del reto", en: "Length of the challenge" } },
    ],
    features: [
      {
        title: { es: "Checkout y pasarelas de pago", en: "Checkout and payment gateways" },
        description: {
          es: "Diseño end-to-end del checkout y la integración de pasarelas.",
          en: "End-to-end design of checkout and payment-gateway integration.",
        },
      },
      {
        title: { es: "Design system propio", en: "In-house design system" },
        description: {
          es: "Cada sprint, un miembro del equipo documentaba y presentaba un componente nuevo.",
          en: "Every sprint, one team member documented and presented a new component.",
        },
      },
      {
        title: {
          es: "Producción de landing pages en Webflow",
          en: "Landing page production in Webflow",
        },
        description: {
          es: "Mantenimiento diario del CMS, traduciendo requerimientos de todas las áreas.",
          en: "Daily CMS upkeep, translating requirements from every area of the business.",
        },
      },
      {
        title: { es: "Automatizaciones e integraciones", en: "Automations and integrations" },
        description: {
          es: "Integración de apps externas para requerimientos especiales.",
          en: "Integrating external apps for special requirements.",
        },
      },
      {
        title: { es: "Centro de ayuda in-app", en: "In-app help center" },
        description: {
          es: "Chat y llamada directa para resolver problemas de pedidos.",
          en: "Chat and direct call to resolve order issues.",
        },
      },
    ],
    process: [
      {
        es: "Discovery de requerimientos con todas las áreas del negocio",
        en: "Requirements discovery across every area of the business",
      },
      {
        es: "Diseño del checkout y las pasarelas de pago",
        en: "Designing checkout and payment gateways",
      },
      { es: "Creación colaborativa del design system", en: "Collaborative design-system building" },
      {
        es: "Producción y mantenimiento diario de landings en Webflow",
        en: "Daily production and upkeep of landing pages in Webflow",
      },
      {
        es: "Refinamiento con desarrollo y demo de resultados",
        en: "Refinement with development and results demo",
      },
    ],
    tools: [
      { name: "Figma", note: { es: "Prototipado y diseño", en: "Prototyping and design" } },
      { name: "FigJam", note: { es: "Brainstorming", en: "Brainstorming" } },
      {
        name: "Adobe CS",
        note: {
          es: "Animación, ilustración e iconografía",
          en: "Animation, illustration, and iconography",
        },
      },
      { name: "Webflow", note: { es: "CMS de landings", en: "Landing-page CMS" } },
      {
        name: "Blender",
        note: {
          es: "3D para ilustraciones y animaciones de marca",
          en: "3D for brand illustrations and animations",
        },
      },
    ],
    wayOfWork: [
      { es: "Sprints de semana y media", en: "Week-and-a-half sprints" },
      { es: "1–2 días de design system por sprint", en: "1–2 design-system days per sprint" },
      { es: "Refinamiento diario en Webflow", en: "Daily refinement in Webflow" },
      { es: "Demo con desarrollo al cierre", en: "Demo with development at close" },
    ],
  },
  {
    slug: "liberty-latin-america",
    title: "Liberty Latin America",
    year: "2023",
    role: {
      es: "Senior UX Designer — agencia The Bridge Social",
      en: "Senior UX Designer — The Bridge Social agency",
    },
    summary: {
      es: "Como Senior UX Designer contratado a través de la agencia The Bridge Social, trabajé directamente con Liberty Latin America (telecomunicaciones) como cliente final, dentro de un equipo de diseño distribuido que entregaba tanto para la App nativa como para la WebApp, en coordinación constante con un equipo de frontend internacional.",
      en: "As a Senior UX Designer staffed through The Bridge Social agency, I worked directly with Liberty Latin America (telecom) as the end client, inside a distributed design team delivering for both the native App and the WebApp, in constant coordination with an international frontend team.",
    },
    tags: ["Product Design", "UX Research", "Agency"],
    status: "SHIPPED",
    cover: "liberty",
    stats: [
      {
        value: "5→3 días",
        label: {
          es: "Tiempo de entrega del producto final, tras implementar guías de diseño para desarrollo",
          en: "Final-product delivery time, after rolling out design guidelines for development",
        },
      },
      {
        value: "1 día",
        label: {
          es: "Tiempo de QA de diseño y desarrollo hasta aprobación o ajustes",
          en: "Design + development QA turnaround to approval or changes",
        },
      },
    ],
    features: [
      {
        title: { es: "Planeación de sprints", en: "Sprint planning" },
        description: {
          es: "Organización de sprints y gestión del equipo según los puntos de diseño disponibles cada semana.",
          en: "Sprint organization and team management based on the design points available each week.",
        },
      },
      {
        title: { es: "Revisión con stakeholders", en: "Stakeholder review" },
        description: {
          es: "Revisión de feedback con stakeholders, gerencia y clientes finales en cada ciclo.",
          en: "Reviewing feedback with stakeholders, management, and end customers every cycle.",
        },
      },
      {
        title: { es: "Diseño desde research existente", en: "Design built on existing research" },
        description: {
          es: "Diseño de experiencia alineado a las necesidades del negocio y a la investigación previa del UX researcher del equipo.",
          en: "Experience design aligned to business needs and the team's UX researcher's prior findings.",
        },
      },
      {
        title: { es: "MVP para App y WebApp", en: "MVP for App and WebApp" },
        description: {
          es: "Diseños de baja y media fidelidad, más el MVP, tanto para la App nativa como para la WebApp.",
          en: "Low- and medium-fidelity designs, plus the MVP, for both the native App and the WebApp.",
        },
      },
      {
        title: {
          es: "Liderazgo de ideación de features",
          en: "Feature ideation leadership",
        },
        description: {
          es: "Arranque de cada feature nueva con journey maps, storyboards, user flows y wireframes.",
          en: "Kicking off every new feature with journey maps, storyboards, user flows, and wireframes.",
        },
      },
      {
        title: { es: "Gestión de diseñadores junior", en: "Junior designer management" },
        description: {
          es: "Liderazgo de un equipo de diseñadores UX junior dentro de la agencia.",
          en: "Leading a team of junior UX designers within the agency.",
        },
      },
      {
        title: {
          es: "Presentaciones al equipo frontend internacional",
          en: "Presentations to the international frontend team",
        },
        description: {
          es: "Facilitación de presentaciones y alineación directa con el equipo de frontend distribuido del cliente.",
          en: "Facilitating presentations and aligning directly with the client's distributed frontend team.",
        },
      },
      {
        title: {
          es: "Alineación con producto e ingeniería",
          en: "Alignment with product and engineering",
        },
        description: {
          es: "Reuniones con product managers, ingenieros y demás áreas para alinear la estrategia de desarrollo del producto.",
          en: "Meetings with product managers, engineers, and other teams to align on the product development strategy.",
        },
      },
    ],
    process: [
      {
        es: "Partir de la investigación previa del UX researcher del equipo",
        en: "Start from the team UX researcher's prior findings",
      },
      {
        es: "Ideación con journey maps, storyboards, user flows y wireframes",
        en: "Ideation with journey maps, storyboards, user flows, and wireframes",
      },
      {
        es: "Diseño de baja y media fidelidad, más el MVP para App y WebApp",
        en: "Low- and medium-fidelity design, plus the MVP for App and WebApp",
      },
      {
        es: "Revisión con stakeholders, gerencia y clientes finales",
        en: "Review with stakeholders, management, and end customers",
      },
      {
        es: "Entrega a desarrollo con guías de diseño (uso de UX, lógica y design system)",
        en: "Handoff to development with design guidelines (UX usage, logic, and the design system)",
      },
    ],
    tools: [
      { name: "Figma", note: { es: "Diseño y prototipado", en: "Design and prototyping" } },
      { name: "FigJam", note: { es: "Journey maps y storyboards", en: "Journey maps and storyboards" } },
    ],
  },
  {
    slug: "snappr-ai",
    title: "Snappr AI",
    year: "2024",
    role: { es: "UX Designer", en: "UX Designer" },
    summary: {
      es: "Producto de fotografía asistida por IA para e-commerce: 'toma tus fotos como un pro'.",
      en: "AI-assisted photography product for e-commerce: 'take your photos like a pro.'",
    },
    tags: ["AI Product", "Mobile App", "UX Research"],
    status: "IN PROGRESS",
    cover: "snappr",
    clientLogo: "snappr",
    features: [
      {
        title: { es: "Login & Registration", en: "Login & Registration" },
        description: {
          es: "Acceso simple: iniciar sesión o convertirse en Snappr Partner.",
          en: "A simple entry point: log in or become a Snappr Partner.",
        },
      },
      {
        title: { es: "Snappr AI — feature central", en: "Snappr AI — the core feature" },
        description: {
          es: "Transforma fotos del celular en fotografía de catálogo lista para publicar.",
          en: "Turns phone-shot photos into publish-ready catalog photography.",
        },
      },
      {
        title: { es: "Carga de fotos con recomendaciones", en: "Photo upload with guidance" },
        description: {
          es: "Hasta 5 fotos por sesión, con guía para evitar distorsión.",
          en: "Up to 5 photos per session, with guidance to avoid distortion.",
        },
      },
      {
        title: { es: "Selección de fondo por categoría", en: "Background selection by category" },
        description: {
          es: "Fondos pensados por tipo de producto.",
          en: "Style backgrounds chosen by product type.",
        },
      },
      {
        title: { es: "Exportación configurable", en: "Configurable export" },
        description: {
          es: "El usuario elige márgenes y destino de las fotos finales.",
          en: "The user chooses export margins and destination.",
        },
      },
      {
        title: { es: "Remove BG", en: "Remove BG" },
        description: {
          es: "Remoción de fondo dedicada para catálogos.",
          en: "Dedicated background removal for catalogs.",
        },
      },
    ],
    process: [
      {
        es: "Research de apps de fotografía con IA y sus fricciones en mobile",
        en: "Research on AI photography apps and their mobile friction points",
      },
      { es: "Detección de 8 features clave", en: "Identifying 8 key features" },
      { es: "3 personas de usuario", en: "3 user personas" },
      {
        es: "Diseño del user flow con métricas de conversión",
        en: "User-flow design with conversion metrics",
      },
      { es: "Estimación de esfuerzo por feature", en: "Effort estimation per feature" },
      { es: "UI final entregada", en: "Final UI delivered" },
    ],
    findings: [
      {
        es: "Germán Medina: evita el costo de un fotógrafo dejando la edición a la IA.",
        en: "Germán Medina: skips the cost of a photographer by leaving editing to the AI.",
      },
      {
        es: "Ana Cuestas: depende del equipo de diseño para quitar fondos, generando cuellos de botella.",
        en: "Ana Cuestas: depends on the design team to remove backgrounds, creating bottlenecks.",
      },
      {
        es: "Fernando Forero: necesita digitalizar inventario sin presupuesto de fotografía.",
        en: "Fernando Forero: needs to digitize inventory with no photography budget.",
      },
    ],
    tools: [
      { name: "Creative Cloud", note: { es: "Retoque y assets", en: "Retouching and assets" } },
      { name: "Photoshop", note: { es: "Edición de producto", en: "Product editing" } },
      {
        name: "Figma",
        note: { es: "Prototipado y diseño de UI", en: "UI prototyping and design" },
      },
      { name: "HTML/CSS", note: { es: "Prototipo funcional", en: "Functional prototype" } },
    ],
  },
  {
    slug: "mercado-pago",
    title: "Mercado Pago POS",
    year: "2023",
    role: { es: "Product Design · Interaction Design", en: "Product Design · Interaction Design" },
    summary: {
      es: "App que convierte el celular en punto de venta, pensada para negocios que hoy cobran en efectivo.",
      en: "An app that turns a phone into a point of sale, for businesses that collect cash today.",
    },
    tags: ["Fintech", "POS", "Mobile App"],
    status: "SHIPPED",
    cover: "pos",
    clientLogo: "mercado-pago",
    features: [
      {
        title: { es: "Pago en cuotas", en: "Installment payments" },
        description: {
          es: "Hasta 12 cuotas con las principales franquicias.",
          en: "Up to 12 installments with the main card networks.",
        },
      },
      {
        title: {
          es: "Sin costos de contratación ni mantenimiento",
          en: "No setup or maintenance fees",
        },
        description: {
          es: "El negocio no paga por usar el lector.",
          en: "The business doesn't pay to use the reader.",
        },
      },
      {
        title: { es: "Comprobante de pago por email", en: "Emailed payment receipt" },
        description: {
          es: "El cliente firma en pantalla y recibe el recibo por correo.",
          en: "The customer signs on screen and gets the receipt by email.",
        },
      },
      {
        title: { es: "Control de ventas desde el celular", en: "Sales tracking from the phone" },
        description: { es: "Resumen de cobros día a día.", en: "Day-by-day payment summary." },
      },
      {
        title: {
          es: "Seguridad para vendedor y cliente",
          en: "Security for both seller and customer",
        },
        description: {
          es: "Cumple estándares de seguridad del mercado.",
          en: "Meets the market's security standards.",
        },
      },
    ],
    process: [
      { es: "Abrir la app y conectar el lector", en: "Open the app and connect the reader" },
      { es: "Ingresar el monto a cobrar", en: "Enter the amount to charge" },
      { es: "Elegir método de pago", en: "Choose payment method" },
      { es: "Procesar el cobro", en: "Process the charge" },
      { es: "Confirmación de resultado", en: "Confirmation of result" },
      { es: "Enviar recibo digital", en: "Send digital receipt" },
    ],
    tools: [
      { name: "Figma", note: { es: "Prototipado y diseño", en: "Prototyping and design" } },
      {
        name: "Creative Cloud",
        note: { es: "Ilustración y assets", en: "Illustration and assets" },
      },
    ],
  },
  {
    slug: "claude-figma",
    title: "Claude × Figma API Integration",
    year: "2026",
    role: {
      es: "AI Workflow Design · Prompt Engineering · Design Systems",
      en: "AI Workflow Design · Prompt Engineering · Design Systems",
    },
    summary: {
      es: "Integración directa entre Claude y la API REST de Figma para automatizar generación de componentes.",
      en: "A direct integration between Claude and the Figma REST API to automate component generation.",
    },
    tags: ["AI Automation", "Prompt Engineering", "Design Systems"],
    status: "SHIPPED",
    cover: "claude-figma",
    stats: [
      {
        value: "85%",
        label: { es: "Reducción de trabajo manual", en: "Reduction in manual work" },
      },
      { value: "2.5×", label: { es: "Velocidad de iteración", en: "Iteration speed" } },
      {
        value: "98%",
        label: { es: "Cumplimiento del design system", en: "Design-system compliance" },
      },
      { value: "500+", label: { es: "Vehículos visualizados", en: "Vehicles visualized" } },
    ],
    features: [
      {
        title: { es: "Input Layer", en: "Input Layer" },
        description: {
          es: "El diseñador describe requerimientos en lenguaje natural.",
          en: "The designer describes requirements in natural language.",
        },
      },
      {
        title: { es: "Intelligence Layer", en: "Intelligence Layer" },
        description: {
          es: "Claude traduce la intención a estructura lógica de Figma.",
          en: "Claude translates that intent into Figma's logical structure.",
        },
      },
      {
        title: { es: "Integration Layer", en: "Integration Layer" },
        description: {
          es: "El JSON se conecta vía tokens a los endpoints.",
          en: "The JSON connects to the endpoints via tokens.",
        },
      },
      {
        title: { es: "Compliance Layer", en: "Compliance Layer" },
        description: {
          es: "La IA aplica la librería oficial de componentes de Launch Mobility.",
          en: "The AI applies Launch Mobility's official component library.",
        },
      },
    ],
    findings: [
      {
        es: "~6 min para un bento grid con 500 vehículos",
        en: "~6 min for a bento grid with 500 vehicles",
      },
      { es: "~4 min para un booking flow", en: "~4 min for a booking flow" },
      {
        es: "~9 min para un dashboard admin con mapa",
        en: "~9 min for an admin dashboard with a map",
      },
    ],
    tools: [
      {
        name: "Claude",
        note: { es: "Prompt engineering y generación", en: "Prompt engineering and generation" },
      },
      {
        name: "Figma REST API",
        note: { es: "Escritura de nodos en canvas", en: "Writing nodes to canvas" },
      },
    ],
  },
  {
    slug: "ontop",
    title: "Ontop — UX Designer",
    year: "2022",
    role: { es: "UX Designer", en: "UX Designer" },
    summary: {
      es: "UX/UI Designer en Ontop: uso avanzado de Webflow y WordPress para las landing pages y el contenido de marketing de toda la organización (incluida la landing de Perks, su plataforma de beneficios corporativos), traducción de requerimientos de negocio a guías de estilo y design system, y liderazgo del sistema de producción de piezas gráficas del área de marca.",
      en: "UX/UI Designer at Ontop: advanced Webflow and WordPress work for the whole organization's landing pages and marketing content (including the Perks corporate-benefits landing page), translating business requirements into style guides and a design system, and leading the brand team's graphic-production system.",
    },
    tags: ["UX/UI Design", "Design System", "Webflow"],
    status: "SHIPPED",
    cover: "ontop",
    clientLogo: "ontop",
    stats: [
      {
        value: "30%",
        label: {
          es: "Reducción en tiempo de creación de piezas gráficas",
          en: "Reduction in time to create graphic pieces",
        },
      },
    ],
    process: [
      {
        es: "CMS avanzado en Webflow y WordPress para landings y contenido automatizado de marketing y marca",
        en: "Advanced Webflow and WordPress CMS work for landing pages and automated marketing/brand content",
      },
      {
        es: "Traducción de requerimientos a guías de estilo, design system y patrones de UI",
        en: "Translating requirements into style guides, a design system, and UI patterns",
      },
      {
        es: "Diseño centrado en el usuario a partir de requerimientos de negocio y feedback real",
        en: "User-centric design built from business requirements and real user feedback",
      },
      {
        es: "Implementación completa del sistema de Perks en Webflow, construyendo y diseñando las landings",
        en: "Full implementation of the Perks system in Webflow, building and designing the landing pages",
      },
      {
        es: "Reestructuración del sistema de creación de piezas gráficas",
        en: "Restructuring the graphic-piece production system",
      },
      {
        es: "Modelo de automatización entre Figma, After Effects, Premiere e Illustrator para el contenido gráfico de cada área",
        en: "An automation model across Figma, After Effects, Premiere, and Illustrator for every area's graphic content",
      },
    ],
    features: [
      {
        title: { es: "Beneficios al mejor precio", en: "Benefits at the best price" },
        description: {
          es: "Acceso centralizado a partners como Rappi, Netflix, Spotify.",
          en: "Centralized access to partners like Rappi, Netflix, Spotify.",
        },
      },
      {
        title: { es: "Cobertura sin importar dónde estés", en: "Coverage no matter where you are" },
        description: {
          es: "Los beneficios viajan con el usuario.",
          en: "Benefits travel with the user.",
        },
      },
      {
        title: { es: "Renovación automática", en: "Automatic renewal" },
        description: { es: "Evita perder el acceso.", en: "Prevents losing access." },
      },
      {
        title: { es: "Tarjeta Ontop", en: "Ontop Card" },
        description: { es: "Aumenta el revenue del usuario.", en: "Boosts the user's revenue." },
      },
      {
        title: { es: "Redención inmediata", en: "Instant redemption" },
        description: {
          es: "El beneficio se activa al instante.",
          en: "The benefit activates instantly.",
        },
      },
      {
        title: { es: "Soporte eficiente", en: "Efficient support" },
        description: {
          es: "Equipo disponible cuando se necesita.",
          en: "A team available whenever needed.",
        },
      },
    ],
    tools: [
      { name: "Webflow" },
      { name: "WordPress" },
      { name: "Figma" },
      { name: "Photoshop" },
      { name: "Illustrator" },
      { name: "After Effects" },
      { name: "Premiere" },
    ],
  },
  {
    slug: "commdesk",
    title: "Commdesk — Landing Page",
    year: "2023",
    role: { es: "UI Design · Landing", en: "UI Design · Landing" },
    summary: {
      es: "Landing de conversión B2B para EngageCloud — mensajería in-product, mobile y email en un solo relato de scroll.",
      en: "A B2B conversion landing page for EngageCloud — in-product messaging, mobile, and email in a single scrolling narrative.",
    },
    tags: ["Landing Page", "SaaS", "UI Design"],
    status: "SHIPPED",
    cover: "commdesk",
    features: [
      {
        title: { es: "Mensajería in-product", en: "In-product messaging" },
        description: {
          es: "Chats, posts, chatbots y product tours en un panel.",
          en: "Chats, posts, chatbots, and product tours in one panel.",
        },
      },
      {
        title: { es: "Comunicación mobile", en: "Mobile communication" },
        description: {
          es: "Push notifications y carruseles nativos.",
          en: "Push notifications and native carousels.",
        },
      },
      {
        title: { es: "Email en el mismo flujo", en: "Email in the same flow" },
        description: {
          es: "Comunicación sin salir del producto.",
          en: "Communication without leaving the product.",
        },
      },
      {
        title: { es: "Convierte más clientes", en: "Convert more customers" },
        description: {
          es: "Herramientas para equipos de ventas.",
          en: "Tools built for sales teams.",
        },
      },
      {
        title: { es: "Soporte a escala", en: "Support at scale" },
        description: {
          es: "Atención 24/7 sin perder personalización.",
          en: "24/7 care without losing personalization.",
        },
      },
      {
        title: { es: "Confianza probada", en: "Proven trust" },
        description: {
          es: "Usado por más de 15,000 negocios.",
          en: "Used by more than 15,000 businesses.",
        },
      },
    ],
    tools: [{ name: "Creative Cloud" }, { name: "Figma" }],
  },
  {
    slug: "angelemus",
    title: "Angelemus Art",
    year: "2021",
    role: {
      es: "Web Design · Art Direction · Branding",
      en: "Web Design · Art Direction · Branding",
    },
    summary: {
      es: "Diseño y desarrollo de un sitio galería para la artista Angélica Lemus.",
      en: "Design and development of a gallery-format site for artist Angélica Lemus.",
    },
    tags: ["Web Design", "Art Direction", "Branding"],
    status: "SHIPPED",
    cover: "angelemus",
    features: [
      {
        title: { es: "Navegación por scroll horizontal", en: "Horizontal scroll navigation" },
        description: {
          es: "Se siente como caminar por una sala de exhibición.",
          en: "Feels like walking through an exhibition hall.",
        },
      },
      {
        title: { es: "Ficha detallada por obra", en: "Detailed page per artwork" },
        description: {
          es: "Descripción, técnica y contacto por pieza.",
          en: "Description, technique, and contact for each piece.",
        },
      },
      {
        title: { es: "Tipografía Nunito Sans", en: "Nunito Sans typography" },
        description: {
          es: "Geometría limpia y coherente con una galería.",
          en: "Clean geometry, consistent with a gallery.",
        },
      },
      {
        title: { es: "Sección de orígenes", en: "Origins section" },
        description: {
          es: "Historia de la artista y su proceso.",
          en: "The artist's story and creative process.",
        },
      },
      {
        title: { es: "Contacto directo", en: "Direct contact" },
        description: {
          es: "Formulario y WhatsApp para consultas.",
          en: "Form and WhatsApp for inquiries.",
        },
      },
    ],
    tools: [{ name: "XD" }, { name: "Illustrator" }, { name: "Photoshop" }, { name: "Figma" }],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
