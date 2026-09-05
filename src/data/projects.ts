export type ProjectStatus = "AVAILABLE" | "IN PROGRESS" | "SHIPPED";

export type Project = {
  slug: string;
  title: string;
  year: string;
  role: string;
  summary: string;
  tags: string[];
  status: ProjectStatus;
  cover: string;
  flagship?: boolean;
  image?: string;
  clientLogo?: string;
  features?: { title: string; description: string }[];
  stats?: { value: string; label: string }[];
  process?: string[];
  tools?: { name: string; note?: string }[];
  findings?: string[];
  painPoints?: { label: string; value: number }[];
  wayOfWork?: string[];
};


export const PROJECTS: Project[] = [
  {
    slug: "kinetik",
    title: "Kinetik Studio",
    year: "2025",
    role: "Front End Development · UX/UI Design · Estrategia de IA",
    summary:
      "Kinetik Studio es un estudio de automatización e incubadora de productos digitales que construye sistemas inteligentes e interfaces que escalan negocios, sobre tres pilares: automatización de workflows, agentes de IA y diseño/desarrollo web y de producto. Mi rol ahí cubre el front end, el diseño UX/UI y la estrategia de IA de los productos.",
    tags: ["Product Design", "Design System", "Frontend"],
    status: "SHIPPED",
    cover: "kinetik",
    flagship: true,
    features: [
      {
        title: "Workflow & Automatización",
        description:
          "Ingeniería de flujos operacionales que reemplazan trabajo manual repetitivo por código autónomo — la base operativa de los productos de Kinetik.",
      },
      {
        title: "Agentes de IA",
        description:
          "Diseño y estrategia de agentes conversacionales multilingües disponibles 24/7 en varios canales (chat web, WhatsApp, telefonía), con memoria de datos propia y acceso a herramientas.",
      },
      {
        title: "Diseño y desarrollo de producto",
        description:
          "Front end de sitios de alto rendimiento, plataformas SaaS y productos móviles — de Figma a producción, sobre un design system propio.",
      },
      {
        title: "Procesamiento de conocimiento interno",
        description:
          "Vectorización y búsqueda en tiempo real sobre documentación interna, para que los agentes respondan con contexto real del negocio en vez de respuestas genéricas.",
      },
    ],
    stats: [
      { value: "3", label: "Pilares de servicio" },
      { value: "24/7", label: "Agentes disponibles" },
      { value: "3", label: "Canales de agente (web, WhatsApp, telefonía)" },
    ],
    process: [
      'Design system propio ("Midnight Pro") como fuente de verdad antes de construir cualquier pantalla',
      "Front end en Next.js/React/TypeScript sobre los tokens de Figma, sin hex sueltos",
      "Estrategia de agentes de IA: qué canal, qué memoria de datos, qué límites de ejecución autónoma tiene cada agente",
      "Automatización de los procesos operativos que rodean al producto (Make.com/Zapier) para que el agente y el front end no vivan aislados del resto del negocio",
    ],
    findings: [
      'El sistema de diseño "Midnight Pro" de este portafolio es el mismo que diseñé para Kinetik Studio — mismos tokens de color y tipografía, aplicados aquí como portafolio y allá como panel de control tipo terminal/sistema operativo.',
    ],
    tools: [
      { name: "Figma", note: "Diseño y design system" },
      { name: "Next.js", note: "Front end" },
      { name: "React", note: "Front end" },
      { name: "TypeScript", note: "Front end" },
      { name: "Tailwind CSS", note: "Front end" },
      { name: "Claude 3.5 Sonnet", note: "Lógica de IA" },
      { name: "OpenAI API", note: "Lógica de IA" },
      { name: "LangChain", note: "Lógica de IA" },
      { name: "Vercel AI SDK", note: "Lógica de IA" },
      { name: "Supabase", note: "Datos e infraestructura" },
      { name: "PostgreSQL", note: "Datos e infraestructura" },
      { name: "GraphQL", note: "Datos e infraestructura" },
      { name: "Make.com", note: "Automatización" },
      { name: "Zapier", note: "Automatización" },
    ],
  },
  {
    slug: "serenia",
    title: "Serenia",
    year: "2025",
    role: "Founder · Full-Stack Product · Flutter + Supabase",
    summary:
      "App de meditación guiada en Flutter + Supabase. Sistema propio de color y movimiento, siete personajes ilustrados y una sesión de audio que se siente sin fricción desde el primer tap.",
    tags: ["Mobile Product", "Design System", "Flutter"],
    status: "SHIPPED",
    cover: "serenia",
    flagship: true,
    features: [
      {
        title: "Sistema de diseño propio de punta a punta",
        description:
          '"V2 Blueberry + Cream Soda": tokens de color, tipografía y componentes definidos en Figma y llevados 1:1 a Flutter (AppColors/AppTextStyles), con 7 personajes originales generados con Recraft y 88 ilustraciones catalogadas.',
      },
      {
        title: "Coach de bienestar con IA real",
        description:
          "Chat conversacional servido desde una Edge Function que invoca la API de Claude server-side — nunca desde el cliente —, con historial persistente por usuario en Supabase.",
      },
      {
        title: "Catálogo de contenido con fallback resiliente",
        description:
          "Meditaciones, programas guiados multi-día, sonidos ambiente y pistas ASMR viven en Supabase; cada pantalla intenta traerlos primero y cae a un catálogo local si la tabla está vacía o el audio remoto no es válido, para que la app nunca se sienta rota.",
      },
      {
        title: "Gamificación con lógica server-side",
        description:
          "Rachas, minutos acumulados y logros se calculan y desbloquean automáticamente vía Edge Function — nunca confiando en datos que manda el cliente.",
      },
      {
        title: "Suscripciones desacopladas del proveedor",
        description:
          'Serenia Plus vía RevenueCat, con un webhook propio y una columna "provider" genérica en el esquema para poder cambiar de proveedor de pagos sin migrar base de datos.',
      },
      {
        title: "Auditoría de seguridad pre-lanzamiento",
        description:
          "20 puntos verificados contra el código real, incluyendo una vulnerabilidad IDOR encontrada y corregida antes de producción: la función que calculaba rachas confiaba en un user_id enviado por el cliente sin verificar.",
      },
    ],
    stats: [
      { value: "16", label: "Features Flutter" },
      { value: "11", label: "Migraciones SQL sin drift" },
      { value: "16/16", label: "Tablas con RLS" },
      { value: "7", label: "Personajes originales" },
    ],
    process: [
      "Sistema de diseño completo en Figma antes de tocar código: tokens, 7 personajes, 88 ilustraciones",
      "Arquitectura Flutter por features (16 módulos) con Riverpod + go_router",
      "Modelado de datos en Supabase: RLS desde la primera migración, no como parche posterior",
      "Integración de IA real (Claude) para el Coach, servida siempre desde Edge Function",
      "Auditoría de seguridad propia de 20 puntos antes de lanzamiento, con hallazgo y fix de una vulnerabilidad IDOR real",
      "Orquestación de dos agentes de IA en paralelo (frontend/backend) sobre el mismo repo, con un documento técnico vivo como fuente de verdad compartida",
    ],
    findings: [
      'El player tenía un selector de "sonido de fondo" puramente decorativo, sin conectar a audio real — el fix fue conectarlo al catálogo de `sounds` que ya existía en Supabase, con un segundo AudioPlayer en loop a bajo volumen.',
      "El fix de seguridad más importante de la auditoría: `update-streak` derivaba el `user_id` del body de la request sin verificar — cualquiera podía escribir la racha de otro usuario. Se corrigió derivándolo exclusivamente del JWT verificado server-side.",
      "Mantener un documento técnico único y actualizado (no la memoria de cada sesión de IA) fue lo que permitió que dos agentes trabajando en paralelo sobre el mismo repo no se pisaran ni duplicaran trabajo.",
    ],
    tools: [
      { name: "Flutter", note: "App móvil iOS/Android" },
      { name: "Supabase", note: "Postgres, Auth, Edge Functions" },
      { name: "Figma", note: "Sistema de diseño V2" },
      { name: "Recraft", note: "Generación de personajes" },
      { name: "Claude (Anthropic API)", note: "Coach de IA" },
      { name: "RevenueCat", note: "Suscripciones" },
    ],
    wayOfWork: [
      "Founder/builder solo: producto, diseño y desarrollo completo sin equipo.",
      "Dos agentes de IA trabajando en paralelo sobre el mismo repo — uno en frontend/Flutter, otro en backend/Supabase/seguridad — coordinados por un documento técnico vivo, no por memoria de conversación.",
      "Figma como fuente de verdad del diseño; ninguna pantalla se construye sin su referencia visual.",
    ],
  },
  {
    slug: "launch-mobility",
    title: "Launch Mobility — UX/UI Redesign",
    year: "2024",
    role: "UX Research · Product Design · Design System",
    summary:
      "Rediseño end-to-end de una plataforma de gestión de flotas y movilidad — flujos de reserva, visibilidad de flota en tiempo real y experiencia del conductor, en web y mobile. La base fueron 38 entrevistas a fleet managers B2B y riders B2C.",
    tags: ["Design System", "B2B+B2C", "Mobile+Web", "UX Research"],
    status: "SHIPPED",
    cover: "mobility",
    stats: [
      { value: "38", label: "Entrevistas B2B + B2C" },
      { value: "55%", label: "Usuarios con problemas en el flujo de reserva" },
      { value: "+143.5%", label: "Incremento en completion rate" },
      { value: "4.8★", label: "Rating post-rediseño" },
    ],
    process: [
      "Discovery",
      "Search",
      "Select vehicle",
      "Confirm booking",
      "Track ride",
    ],
    painPoints: [
      { label: "Confusión en booking UI", value: 72 },
      { label: "Sin tracking en tiempo real", value: 61 },
      { label: "Carga lenta", value: 48 },
      { label: "Onboarding pobre", value: 39 },
      { label: "Filtros limitados", value: 27 },
    ],
    findings: [
      "El rediseño redujo el drop-off 2.3x.",
      "El tracking en tiempo real alcanzó 91% de adopción en el primer mes.",
      "Design system propio: tokens de color, botones, iconografía, inputs y type scale.",
    ],
    tools: [
      { name: "Figma", note: "Diseño y prototipado" },
      { name: "Photoshop", note: "Retoque y assets visuales" },
    ],
  },
  {
    slug: "tul",
    title: "Tul",
    year: "2022",
    role: "UX/UI Designer · Design System · Webflow",
    summary:
      "Parte del equipo UX/UI a cargo del checkout y las pasarelas de pago, y de la WebApp completa. Creamos un design system nuevo en sinergia con el equipo de desarrollo, y mantuve y produje las landing pages en Webflow, traduciendo requerimientos de todas las áreas en diseño. Un reto de 2 meses.",
    tags: ["E-commerce", "Design System", "Webflow"],
    status: "SHIPPED",
    cover: "tul",
    clientLogo: "tul",
    stats: [
      { value: "78%", label: "Clientes pagando digitalmente" },
      { value: "+14%", label: "Incremento en ventas por el cambio a digital" },
      { value: "2 meses", label: "Duración del reto" },
    ],
    features: [
      {
        title: "Checkout y pasarelas de pago",
        description: "Diseño end-to-end del checkout y la integración de las pasarelas de pago de la WebApp completa.",
      },
      {
        title: "Design system propio",
        description: "Construido en sinergia con desarrollo: cada sprint, un miembro del equipo documentaba y presentaba un componente nuevo al grupo.",
      },
      {
        title: "Producción de landing pages en Webflow",
        description: "Mantenimiento diario del CMS, traduciendo requerimientos de todas las áreas del negocio en diseño y montaje directo en la plataforma.",
      },
      {
        title: "Automatizaciones e integraciones",
        description: "Integración de apps externas para requerimientos especiales y automatización de la recolección de contenido dentro del CMS.",
      },
      {
        title: "Centro de ayuda in-app",
        description: "Chat y llamada directa para resolver problemas de pedidos y datos de facturación, más una sección de tutoriales para nuevos usuarios.",
      },
    ],
    process: [
      "Discovery de requerimientos con todas las áreas del negocio",
      "Diseño del checkout y las pasarelas de pago",
      "Creación colaborativa del design system (1–2 días por sprint)",
      "Producción y mantenimiento diario de landings en Webflow",
      "Refinamiento con el equipo de desarrollo y demo de resultados",
    ],
    tools: [
      { name: "Figma", note: "Prototipado y diseño" },
      { name: "FigJam", note: "Brainstorming" },
      { name: "Adobe CS", note: "Animación, ilustración e iconografía" },
      { name: "Webflow", note: "CMS de landings" },
      { name: "Blender", note: "3D para ilustraciones y animaciones de marca" },
    ],
    wayOfWork: [
      "Sprints de semana y media.",
      "1–2 días de design system por sprint: cada miembro documentaba un componente nuevo.",
      "Refinamiento diario en Webflow.",
      "Demo con el equipo de desarrollo al cierre.",
    ],
  },
  {
    slug: "snappr-ai",
    title: "Snappr AI",
    year: "2024",
    role: "UX Research · Product Design · UI",
    summary:
      "Producto de fotografía asistida por IA para e-commerce: 'toma tus fotos como un pro'. Del research de industria a una UI que cubre login, home, proceso de carga, recomendaciones y selección de fondo.",
    tags: ["AI Product", "Mobile App", "UX Research"],
    status: "IN PROGRESS",
    cover: "snappr",
    clientLogo: "snappr",
    features: [
      {
        title: "Login & Registration",
        description: "Acceso simple con dos caminos claros: iniciar sesión o convertirse en Snappr Partner.",
      },
      {
        title: "Snappr AI — feature central",
        description: "El corazón del producto: transforma fotos tomadas con el celular en fotografía de catálogo lista para publicar.",
      },
      {
        title: "Carga de fotos con recomendaciones",
        description: "Hasta 5 fotos por sesión, subida automática desde el carrete, con guía para evitar distorsión y variar ángulos.",
      },
      {
        title: "Selección de fondo por categoría",
        description: "Fondos de estilo pensados por tipo de producto — hogar, belleza y más — para que el resultado se vea como un shooting profesional.",
      },
      {
        title: "Exportación configurable",
        description: "El usuario elige márgenes de exportación y a dónde enviar las fotos finales.",
      },
      {
        title: "Remove BG",
        description: "Remoción de fondo dedicada para catálogos que necesitan producto aislado, sin escenografía.",
      },
    ],
    process: [
      "Research de la industria: mapeo de apps de fotografía con IA, sus trials limitados y sus fricciones en mobile",
      "Detección de 8 features clave del producto (login, onboarding, home, Snappr AI, carga, mejora, exportación, remoción de fondo)",
      "3 personas de usuario con research de personalidad y de conocimiento tecnológico",
      "Diseño del user flow sobre la persona de Fernando Forero, con puntos de fricción y métricas de permanencia, hotclicks y conversión",
      "Estimación de esfuerzo de desarrollo y recursos por feature",
      "UI final: login, home, carga con recomendaciones, selección de fondo por categoría, exportación configurable",
    ],
    findings: [
      "Germán Medina (marca de ropa): puede evitar el costo de un fotógrafo profesional tomando fotos con el celular y dejando la edición a la IA.",
      "Ana Cuestas (marketing e-commerce B2B): hoy depende del equipo de diseño para quitar fondos, lo que genera cuellos de botella en la publicación de contenido.",
      "Fernando Forero (tienda de muebles): necesita digitalizar su inventario para vender por redes y Mercado Libre sin presupuesto para fotografía profesional.",
    ],
    tools: [
      { name: "Creative Cloud", note: "Retoque y assets" },
      { name: "Photoshop", note: "Edición de producto" },
      { name: "Figma", note: "Prototipado y diseño de UI" },
      { name: "HTML/CSS", note: "Prototipo funcional" },
    ],
  },
  {
    slug: "mercado-pago",
    title: "Mercado Pago POS",
    year: "2023",
    role: "Product Design · Interaction Design",
    summary:
      "App que convierte el celular en punto de venta — pensada para negocios que hoy cobran en efectivo y quieren pasar a digital sin fricción ni costos fijos.",
    tags: ["Fintech", "POS", "Mobile App"],
    status: "SHIPPED",
    cover: "pos",
    clientLogo: "mercado-pago",
    features: [
      {
        title: "Pago en cuotas",
        description: "Hasta 12 cuotas con Visa, Mastercard, Diners Club, Hipercard y Elo.",
      },
      {
        title: "Sin costos de contratación ni mantenimiento",
        description: "El negocio no paga por usar el lector ni por mantenerlo activo.",
      },
      {
        title: "Comprobante de pago por email",
        description: "El cliente firma en pantalla y recibe el recibo directo en su correo.",
      },
      {
        title: "Control de ventas desde el celular",
        description: "Resumen de cobros día a día, sin esperar a fin de mes, con devoluciones en un solo paso.",
      },
      {
        title: "Seguridad para vendedor y cliente",
        description: "Cumple los estándares de seguridad del mercado y elimina el riesgo de trasladar efectivo.",
      },
    ],
    process: [
      "Abrir la app y conectar el lector",
      "Ingresar el monto a cobrar",
      "Elegir método de pago — tarjeta o QR",
      "Procesar el cobro",
      "Confirmación — éxito, error o esperando respuesta",
      "Enviar recibo digital por email",
    ],
    tools: [
      { name: "Figma", note: "Prototipado y diseño" },
      { name: "Creative Cloud", note: "Ilustración y assets" },
    ],
  },

  {
    slug: "claude-figma",
    title: "Claude × Figma API Integration",
    year: "2026",
    role: "AI Workflow Design · Prompt Engineering · Design Systems",
    summary:
      "Integración directa entre Claude y la API REST de Figma para automatizar generación de componentes, layouts dinámicos y flujos lógicos por prompt engineering — aplicada al rediseño de Launch Mobility.",
    tags: ["AI Automation", "Prompt Engineering", "Design Systems"],
    status: "SHIPPED",
    cover: "claude-figma",
    stats: [
      { value: "85%", label: "Reducción de trabajo manual" },
      { value: "2.5×", label: "Velocidad de iteración" },
      { value: "98%", label: "Cumplimiento del design system" },
      { value: "500+", label: "Vehículos visualizados" },
    ],
    features: [
      {
        title: "Input Layer — Intención del usuario",
        description:
          "El diseñador escribe un prompt en lenguaje natural describiendo requerimientos exactos — layouts, densidad de datos, flujos de usuario.",
      },
      {
        title: "Intelligence Layer — Procesamiento con Claude",
        description:
          "Claude traduce la intención a la estructura lógica de Figma — reglas de auto-layout, spacing exacto y jerarquía visual.",
      },
      {
        title: "Integration Layer — Puente con la API REST de Figma",
        description:
          "El JSON generado se conecta vía tokens de autenticación a los endpoints de Figma y se traduce en elementos reales sobre el canvas.",
      },
      {
        title: "Compliance Layer — Inyección del design system",
        description:
          "La IA aplica la librería de componentes oficial de Launch Mobility en cada paso — estilos de botón, paleta, iconografía y spacing, con cero error humano.",
      },
    ],
    findings: [
      '"Generate a bento grid showing battery status for 500 fleet vehicles with real-time status indicators" — ~6 min.',
      '"Create a booking flow with pickup, destination, and date fields using LM DS components" — ~4 min.',
      '"Design a fleet admin dashboard with live map, KPI strip, and sidebar for active trips" — ~9 min.',
    ],
    tools: [
      { name: "Claude", note: "Prompt engineering y generación" },
      { name: "Figma REST API", note: "Escritura de nodos en canvas" },
    ],
  },
  {
    slug: "ontop",
    title: "Ontop — Perks Landing Page",
    year: "2023",
    role: "UI Design · Landing",
    summary:
      "Landing para una plataforma de beneficios corporativos — acceso centralizado a partners, tarjeta propia y renovación automática para que el usuario no pierda beneficios.",
    tags: ["Landing Page", "Benefits", "UI Design"],
    status: "SHIPPED",
    cover: "ontop",
    clientLogo: "ontop",
    features: [
      {
        title: "Beneficios al mejor precio",
        description:
          "Acceso centralizado a partners como Rappi, Netflix, Spotify, Cabify y Foodology.",
      },
      {
        title: "Cobertura sin importar dónde estés",
        description: "Los beneficios viajan con el usuario.",
      },
      {
        title: "Renovación automática",
        description: "Un programa que evita perder el acceso y da tranquilidad.",
      },
      {
        title: "Tarjeta Ontop",
        description: "Pensada para aumentar el revenue del usuario y centralizar el consumo.",
      },
      {
        title: "Redención inmediata",
        description: "El beneficio se activa al instante, sin fricción.",
      },
      {
        title: "Soporte eficiente",
        description: "Equipo de soporte disponible cuando el usuario lo necesita.",
      },
    ],
    tools: [
      { name: "Photoshop" },
      { name: "Illustrator" },
      { name: "Figma" },
    ],
  },
  {
    slug: "commdesk",
    title: "Commdesk — Landing Page",
    year: "2023",
    role: "UI Design · Landing",
    summary:
      "Landing de conversión B2B para EngageCloud — mensajería in-product, mobile y email en un solo relato de scroll, con una acción dominante por sección.",
    tags: ["Landing Page", "SaaS", "UI Design"],
    status: "SHIPPED",
    cover: "commdesk",
    features: [
      {
        title: "Mensajería in-product",
        description:
          "Chats, posts, chatbots, encuestas in-app y product tours en un solo panel.",
      },
      {
        title: "Comunicación mobile",
        description: "Push notifications y carruseles nativos para la app.",
      },
      {
        title: "Email en el mismo flujo",
        description: "Comunicación transaccional y de marketing sin salir del producto.",
      },
      {
        title: "Convierte más clientes",
        description: "Herramientas de conversión pensadas para equipos de ventas.",
      },
      {
        title: "Soporte a escala",
        description: "Atención al cliente 24/7 sin perder personalización.",
      },
      {
        title: "Confianza probada",
        description:
          "Usado por más de 15,000 negocios (Shopify, Slack, Google, Amazon, entre otros).",
      },
    ],
    tools: [{ name: "Creative Cloud" }, { name: "Figma" }],
  },
  {
    slug: "angelemus",
    title: "Angelemus Art",
    year: "2021",
    role: "Web Design · Art Direction · Branding",
    summary:
      "Diseño y desarrollo de un sitio formato galería para la artista Angélica Lemus: navegación por scroll horizontal, ficha detallada por obra con hover states y una sección de origen con contacto directo.",
    tags: ["Web Design", "Art Direction", "Branding"],
    status: "SHIPPED",
    cover: "angelemus",
    features: [
      {
        title: "Navegación por scroll horizontal",
        description:
          "El recorrido de la galería se siente como caminar por una sala de exhibición.",
      },
      {
        title: "Ficha detallada por obra",
        description:
          "Descripción, técnica y contacto directo por pieza, con estados hover.",
      },
      {
        title: "Tipografía Nunito Sans",
        description:
          "Elegida por su geometría limpia, coherente con el lenguaje visual de una galería.",
      },
      {
        title: "Sección de orígenes",
        description: "Historia de la artista y su proceso creativo.",
      },
      {
        title: "Contacto directo",
        description: "Formulario y WhatsApp para consultas sobre las obras.",
      },
    ],
    tools: [
      { name: "XD" },
      { name: "Illustrator" },
      { name: "Photoshop" },
      { name: "Figma" },
    ],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
