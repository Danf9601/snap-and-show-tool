import { useState } from "react";
import kinetikImg from "@/assets/kinetik.jpg";
import sereniaImg from "@/assets/serenia.jpg";
import fintechImg from "@/assets/fintech.jpg";
import mobilityImg from "@/assets/mobility.jpg";
import { Reveal, SectionHeader, StatusBadge } from "./primitives";

type Project = {
  id: string;
  title: string;
  year: string;
  summary: string;
  tags: string[];
  status: "AVAILABLE" | "IN PROGRESS" | "SHIPPED";
  image: string;
  flagship?: boolean;
};

const PROJECTS: Project[] = [
  {
    id: "kinetik",
    title: "Kinetik Studio",
    year: "2025",
    summary:
      "AI Command Center completo: arquitectura de producto, design system 'Midnight Pro' con tokens semánticos y componentes de dashboard construidos para lectura en tiempo real bajo carga.",
    tags: ["Product Design", "Design System", "Frontend"],
    status: "SHIPPED",
    image: kinetikImg,
    flagship: true,
  },
  {
    id: "serenia",
    title: "Serenia",
    year: "2025",
    summary:
      "App de meditación guiada en Flutter + Supabase. Sistema propio de color y movimiento, siete personajes ilustrados y una sesión de audio que se siente sin fricción desde el primer tap.",
    tags: ["Mobile Product", "Design System", "Flutter"],
    status: "SHIPPED",
    image: sereniaImg,
    flagship: true,
  },
  {
    id: "launch-mobility",
    title: "Launch Mobility — UX/UI Redesign",
    year: "2024",
    summary:
      "Rediseño de la plataforma de operación de flotas: jerarquía de datos reconstruida y flujos de reserva reducidos a la mitad de pasos.",
    tags: ["UX Research", "Product Design"],
    status: "SHIPPED",
    image: mobilityImg,
  },
  {
    id: "mercado-pago",
    title: "Mercado Pago POS",
    year: "2023",
    summary:
      "Interfaz de punto de venta pensada para manos ocupadas: objetivos táctiles grandes, estados de pago inequívocos y recuperación de error sin pérdida de contexto.",
    tags: ["Fintech", "Interaction Design"],
    status: "SHIPPED",
    image: fintechImg,
  },
  {
    id: "snappr-ai",
    title: "Snappr AI",
    year: "2024",
    summary:
      "Capa de producto sobre modelos generativos: control explícito del usuario, estados de espera honestos y resultados comparables lado a lado.",
    tags: ["AI Product", "UI Design"],
    status: "IN PROGRESS",
    image: kinetikImg,
  },
  {
    id: "claude-figma",
    title: "Claude × Figma — Use Case",
    year: "2025",
    summary:
      "Caso de uso de diseño asistido por IA: del prompt a componentes reales de Figma conectados a tokens, sin romper el sistema.",
    tags: ["AI + Design", "Systems"],
    status: "IN PROGRESS",
    image: mobilityImg,
  },
  {
    id: "commdesk",
    title: "Commdesk — Landing Page",
    year: "2023",
    summary:
      "Landing de conversión para una plataforma de comunicación B2B, con narrativa de scroll y una sola acción dominante por sección.",
    tags: ["Landing", "Frontend"],
    status: "SHIPPED",
    image: fintechImg,
  },
  {
    id: "tul",
    title: "Tul",
    year: "2022",
    summary:
      "Interfaces de e-commerce para materiales de construcción en LATAM: catálogo denso resuelto con filtros predecibles y carritos recuperables.",
    tags: ["E-commerce", "Product Design"],
    status: "SHIPPED",
    image: mobilityImg,
  },
  {
    id: "ontop",
    title: "Ontop — Perks Landing Page",
    year: "2023",
    summary:
      "Página de beneficios para trabajadores remotos: valor explicado en tres pantallas de scroll y alta de usuario en un paso.",
    tags: ["Landing", "UI Design"],
    status: "SHIPPED",
    image: kinetikImg,
  },
  {
    id: "angelemus",
    title: "Angelemus Art",
    year: "2021",
    summary:
      "Proyecto creativo de ilustración y dirección de arte — el lado que alimenta el criterio visual del resto del trabajo.",
    tags: ["Art Direction", "Illustration"],
    status: "SHIPPED",
    image: sereniaImg,
  },
];

function Card({ project }: { project: Project }) {
  const [hover, setHover] = useState(false);
  const big = project.flagship;

  return (
    <article
      data-cursor="view"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`card-surface glow-hover group h-full overflow-hidden ${
        hover ? "md:-translate-y-1" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${big ? "aspect-[16/10]" : "aspect-[16/11]"}`}>
        <img
          src={project.image}
          alt={`Vista previa del proyecto ${project.title}`}
          loading="lazy"
          width={1200}
          height={900}
          className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(180deg, transparent 30%, color-mix(in oklab, var(--accent-muted) 70%, transparent))",
          }}
        />
        <div className="absolute top-4 left-4">
          <StatusBadge
            label={project.status}
            tone={project.status === "IN PROGRESS" ? "muted" : "success"}
          />
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className={big ? "text-3xl md:text-4xl" : "text-2xl"}>{project.title}</h3>
          <span className="mono text-text-tertiary text-xs">{project.year}</span>
        </div>
        <p className="text-text-secondary mt-4 max-w-2xl text-sm leading-relaxed">
          {project.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="border-border-subtle text-text-tertiary rounded-sm border px-2.5 py-1 text-[11px] tracking-wide"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          name="WORK"
          index="001"
          title="Case studies donde el diseño y el código son la misma decisión."
          intro="Diez productos reales — fintech, movilidad, IA, e-commerce y sistemas de diseño propios. Kinetik Studio y Serenia son flagship: sistemas completos de mi autoría, del token al build."
        />

        <div className="grid gap-5 md:grid-cols-6">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.id}
              delay={(i % 3) * 80}
              className={p.flagship ? "md:col-span-3" : "md:col-span-2"}
            >
              <Card project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
