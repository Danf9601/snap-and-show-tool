import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { PROJECTS, type Project } from "@/data/projects";
import { ProjectCover } from "./ProjectCover";
import { Reveal, SectionHeader, StatusBadge } from "./primitives";

function Card({ project }: { project: Project }) {
  const [hover, setHover] = useState(false);
  const big = project.flagship;

  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      data-cursor="view"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`card-surface glow-hover group block h-full overflow-hidden ${
        hover ? "md:-translate-y-1" : ""
      }`}
    >
      <article>
        <div className={`relative overflow-hidden ${big ? "aspect-[16/10]" : "aspect-[16/11]"}`}>
          <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]">
            <ProjectCover cover={project.cover} title={project.title} />
          </div>
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
                className="border-border-subtle text-text-tertiary mono rounded-sm border px-2.5 py-1 text-[11px] tracking-wide"
              >
                {t}
              </span>
            ))}
          </div>
          <span className="text-text-accent mono mt-6 inline-flex items-center gap-2 text-xs tracking-widest uppercase">
            Ver case study →
          </span>
        </div>
      </article>
    </Link>
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
          intro="Nueve productos reales — fintech, movilidad, IA, e-commerce y sistemas de diseño propios. Kinetik Studio y Serenia son flagship: sistemas completos de mi autoría, del token al build."
        />

        <div className="grid gap-5 md:grid-cols-6">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.slug}
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
