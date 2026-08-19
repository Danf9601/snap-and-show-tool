import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, PROJECTS } from "@/data/projects";
import { ProjectCover } from "@/components/portfolio/ProjectCover";
import { TopBar } from "@/components/portfolio/TopBar";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Reveal, StatusBadge } from "@/components/portfolio/primitives";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study no disponible — Daniel Forero" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.project.title} — Case study · Daniel Forero`;
    const description = loaderData.project.summary.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: NotFoundCaseStudy,
  component: CaseStudy,
});

function NotFoundCaseStudy() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6">
      <div className="mono text-text-accent text-xs tracking-widest">// 404</div>
      <h1 className="mt-4 text-4xl md:text-5xl">Ese case study no existe.</h1>
      <BackLink className="mt-8" />
    </main>
  );
}

function BackLink({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      hash="work"
      data-cursor="open"
      className={`bg-glass border-glass-stroke text-text-primary hover:border-accent mono inline-flex w-fit items-center gap-2 rounded-md border px-4 py-2.5 text-xs tracking-widest uppercase transition-colors duration-300 ${className}`}
    >
      ← Volver a Work
    </Link>
  );
}

function Section({
  name,
  index,
  title,
  children,
}: {
  name: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="border-border-subtle border-t py-14 md:py-20">
      <div className="mono text-text-accent text-xs tracking-widest">
        // {name} — {index}
      </div>
      <h2 className="mt-4 text-3xl md:text-4xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </Reveal>
  );
}

function CaseStudy() {
  const { project } = Route.useLoaderData();
  let index = 0;
  const next = () => String(++index).padStart(3, "0");

  return (
    <>
      <CustomCursor />
      <TopBar />
      <main className="mx-auto max-w-[1100px] px-5 pt-28 pb-24 md:px-10 md:pt-36">
        <BackLink />

        {/* WindowHeader */}
        <header className="card-surface mt-8 overflow-hidden">
          <div className="border-border-subtle flex items-center gap-2 border-b px-4 py-3">
            <span className="bg-text-tertiary size-2 rounded-full" />
            <span className="bg-text-tertiary size-2 rounded-full" />
            <span className="bg-accent size-2 rounded-full" />
            <span className="mono text-text-tertiary ml-3 truncate text-[11px] tracking-widest uppercase">
              /work/{project.slug}
            </span>
            <span className="ml-auto">
              <StatusBadge
                label={project.status}
                tone={project.status === "IN PROGRESS" ? "muted" : "success"}
              />
            </span>
          </div>

          <div className="relative aspect-[16/7]">
            <ProjectCover cover={project.cover} title={project.title} />
          </div>

          <div className="p-6 md:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h1 className="text-4xl leading-[1.05] md:text-6xl">{project.title}</h1>
              <span className="mono text-text-tertiary text-sm">{project.year}</span>
            </div>
            <p className="mono text-text-secondary mt-4 text-xs tracking-widest uppercase">
              {project.role}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="border-border-subtle bg-glass text-text-secondary mono rounded-sm border px-2.5 py-1 text-[11px] tracking-wide"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </header>

        <Section name="OVERVIEW" index={next()} title="Qué era el reto">
          <p className="text-text-secondary max-w-3xl text-base leading-relaxed md:text-lg">
            {project.summary}
          </p>
        </Section>

        {project.features?.length ? (
          <Section name="FEATURES" index={next()} title="Qué hace el producto">
            <div className="grid gap-4 md:grid-cols-2">
              {project.features.map((f) => (
                <div
                  key={f.title}
                  className="border-glass-stroke bg-glass flex gap-4 rounded-lg border p-5"
                  style={{ backdropFilter: "blur(24px)" }}
                >
                  <span className="bg-accent/10 text-text-accent flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 7.5L5.5 10.5L11.5 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <div className="text-text-primary text-sm font-medium leading-snug">
                      {f.title}
                    </div>
                    <p className="text-text-secondary mt-1 text-sm leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        ) : null}


        {project.stats?.length ? (
          <Section name="IMPACT" index={next()} title="Números">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.stats.map((s) => (
                <div
                  key={s.label}
                  className="border-border-subtle bg-raised rounded-lg border p-6"
                  style={{ boxShadow: "0 2px 4px rgba(0,0,0,.35), 0 6px 12px -2px rgba(0,0,0,.35)" }}
                >
                  <div className="text-text-accent font-display text-3xl font-bold md:text-4xl">
                    {s.value}
                  </div>
                  <div className="text-text-secondary mt-2 text-sm leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </Section>
        ) : null}

        {project.process?.length ? (
          <Section name="PROCESS" index={next()} title="Cómo se construyó">
            <ol className="grid gap-4 md:grid-cols-2">
              {project.process.map((step, i) => (
                <li
                  key={step}
                  className="border-border-subtle bg-glass flex items-start gap-4 rounded-lg border p-5"
                >
                  <span className="mono text-text-accent text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-text-primary text-sm leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </Section>
        ) : null}

        {project.painPoints?.length ? (
          <Section name="RESEARCH" index={next()} title="Pain points por frecuencia">
            <ul className="space-y-4">
              {project.painPoints.map((p) => (
                <li key={p.label}>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-text-primary text-sm">{p.label}</span>
                    <span className="mono text-text-accent text-xs">{p.value}%</span>
                  </div>
                  <div className="bg-raised mt-2 h-1.5 overflow-hidden rounded-full">
                    <div
                      className="bg-accent h-full rounded-full"
                      style={{ width: `${p.value}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        {project.findings?.length ? (
          <Section name="FINDINGS" index={next()} title="Qué aprendimos">
            <ul className="grid gap-4 md:grid-cols-3">
              {project.findings.map((f) => (
                <li
                  key={f}
                  className="border-border-subtle bg-raised text-text-secondary rounded-lg border p-6 text-sm leading-relaxed"
                >
                  {f}
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        {project.tools?.length ? (
          <Section name="TOOLS" index={next()} title="Con qué se hizo">
            <div className="flex flex-wrap gap-3">
              {project.tools.map((t) => (
                <div
                  key={t.name}
                  className="border-glass-stroke bg-glass rounded-md border px-4 py-3"
                  style={{ backdropFilter: "blur(24px)" }}
                >
                  <div className="mono text-text-primary text-xs tracking-widest uppercase">
                    {t.name}
                  </div>
                  {t.note ? (
                    <div className="text-text-tertiary mt-1 text-xs">{t.note}</div>
                  ) : null}
                </div>
              ))}
            </div>
          </Section>
        ) : null}

        {project.wayOfWork?.length ? (
          <Section name="WAY OF WORK" index={next()} title="Ritmo del equipo">
            <ul className="space-y-3">
              {project.wayOfWork.map((w, i) => (
                <li key={w} className="flex gap-4">
                  <span className="mono text-text-accent text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-text-secondary text-sm leading-relaxed">{w}</span>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        <div className="border-border-subtle mt-4 flex flex-wrap gap-3 border-t pt-10">
          <BackLink />
          {PROJECTS.filter((p) => p.slug !== project.slug)
            .slice(0, 3)
            .map((p) => (
              <Link
                key={p.slug}
                to="/work/$slug"
                params={{ slug: p.slug }}
                data-cursor="view"
                className="border-border-subtle text-text-secondary hover:border-accent hover:text-text-primary mono rounded-md border px-4 py-2.5 text-xs tracking-widest uppercase transition-colors duration-300"
              >
                {p.title}
              </Link>
            ))}
        </div>
      </main>
    </>
  );
}
