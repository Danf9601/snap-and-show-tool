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
    role: "Product Design · Design System · Frontend",
    summary:
      "AI Command Center completo: arquitectura de producto, design system 'Midnight Pro' con tokens semánticos y componentes de dashboard construidos para lectura en tiempo real bajo carga.",
    tags: ["Product Design", "Design System", "Frontend"],
    status: "SHIPPED",
    cover: "kinetik",
    flagship: true,
  },
  {
    slug: "serenia",
    title: "Serenia",
    year: "2025",
    role: "Mobile Product · Design System · Flutter",
    summary:
      "App de meditación guiada en Flutter + Supabase. Sistema propio de color y movimiento, siete personajes ilustrados y una sesión de audio que se siente sin fricción desde el primer tap.",
    tags: ["Mobile Product", "Design System", "Flutter"],
    status: "SHIPPED",
    cover: "serenia",
    flagship: true,
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
    stats: [
      { value: "78%", label: "Clientes pagando digitalmente" },
      { value: "+14%", label: "Incremento en ventas por el cambio a digital" },
      { value: "2 meses", label: "Duración del reto" },
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
    process: [
      "Research de la industria",
      "Detección de features (foto, edición, subida, página de producto, compartir)",
      "Entender a los usuarios: personas + research",
      "Diseño de la experiencia: user flow",
      "Creación de la UI: login, home, carga de fotos, recomendaciones, selección de fondo e importación",
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

export const PROJECT_PATHS = PROJECTS.map((project) => `/work/${project.slug}`);
