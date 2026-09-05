import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getDesignSystem } from "@/data/designSystems";
import type { CharacterStatus } from "@/data/designSystems";
import { TopBar } from "@/components/portfolio/TopBar";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { t, useLocale, type Locale } from "@/lib/i18n";

export const Route = createFileRoute("/design-systems/$slug")({
  loader: ({ params }) => {
    const system = getDesignSystem(params.slug);
    if (!system) throw notFound();
    return { system };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Design system no disponible — Daniel Forero" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.system.name} — Design System · Daniel Forero`;
    const description = loaderData.system.subtitle.es;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: NotFoundDesignSystem,
  component: DesignSystemPage,
});

function NotFoundDesignSystem() {
  const { locale } = useLocale();
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6">
      <div className="mono text-text-accent text-xs tracking-widest">// 404</div>
      <h1 className="mt-4 text-4xl md:text-5xl">{t(locale, "designsystem.notFound")}</h1>
      <BackLink className="mt-8" />
    </main>
  );
}

function BackLink({ className = "" }: { className?: string }) {
  const { locale } = useLocale();
  return (
    <Link
      to="/"
      hash="design-systems"
      data-cursor="open"
      className={`bg-glass border-glass-stroke text-text-primary hover:border-accent mono inline-flex w-fit items-center gap-2 rounded-md border px-4 py-2.5 text-xs tracking-widest uppercase transition-colors duration-300 ${className}`}
    >
      {t(locale, "designsystem.back")}
    </Link>
  );
}

function DesignSystemPage() {
  const { system } = Route.useLoaderData();
  const { locale } = useLocale();

  return (
    <>
      <CustomCursor />
      <TopBar />
      <main
        className="mx-auto max-w-3xl px-5 pt-28 pb-24 md:px-10 md:pt-36"
        style={{ ["--ds-accent" as string]: system.accent }}
      >
        <BackLink />

        <div className="mono mt-8 text-xs tracking-widest text-[var(--ds-accent)]">
          // {system.slug.toUpperCase()}
        </div>
        <h1 className="font-display mt-4 text-4xl leading-[1.05] text-text-primary md:text-5xl">
          {system.name}
        </h1>
        <p className="text-text-secondary mt-3 text-base md:text-lg">{system.subtitle[locale]}</p>

        {/* Meta strip */}
        <div className="border-glass-stroke bg-glass mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-md border sm:grid-cols-4">
          <MetaCell label={t(locale, "designsystem.meta.product")} value={system.product[locale]} />
          <MetaCell
            label={t(locale, "designsystem.meta.sourceOfTruth")}
            value={system.sourceOfTruth[locale]}
          />
          <MetaCell
            label={t(locale, "designsystem.meta.generations")}
            value={system.generations[locale]}
          />
          <MetaCell
            label={t(locale, "designsystem.meta.status")}
            value={system.statusLine[locale]}
          />
        </div>

        {system.constructionNotes.length > 0 && (
          <Section title={t(locale, "designsystem.section.construction")}>
            {system.constructionNotes.map((p) => (
              <p key={p.es} className="text-text-secondary mb-4 leading-relaxed">
                {p[locale]}
              </p>
            ))}
          </Section>
        )}

        {system.timeline && (
          <Section title={t(locale, "designsystem.section.generations")}>
            <div className="flex flex-col">
              {system.timeline.map((era) => (
                <div
                  key={era.era}
                  className="border-border-subtle grid grid-cols-[64px_1fr] gap-4 border-t py-5 first:border-t-0"
                >
                  <div className="mono pt-1 text-xs text-[var(--ds-accent)]">{era.era}</div>
                  <div>
                    <p className="label-xs">{era.label[locale]}</p>
                    <h3 className="text-text-primary mt-1 font-semibold">{era.title[locale]}</h3>
                    <p className="text-text-secondary mt-2 text-sm leading-relaxed">
                      {era.description[locale]}
                    </p>
                    {era.swatches && (
                      <div className="mt-3 flex flex-wrap gap-3">
                        {era.swatches.map((s) => (
                          <span key={s.hex} className="flex items-center gap-2">
                            <span
                              className="border-border-subtle h-4 w-4 rounded border"
                              style={{ background: s.hex }}
                            />
                            <span className="text-text-tertiary mono text-xs">
                              {s.hex} {s.label}
                            </span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {system.rampSets?.map((ramp) => (
          <Section key={ramp.label.es} title={ramp.label[locale]}>
            <div className="border-border-subtle flex overflow-hidden rounded-md border">
              {ramp.steps.map((s) => (
                <div
                  key={s.step}
                  className="h-12 flex-1"
                  style={{ background: s.hex }}
                  title={`${s.step} · ${s.hex}`}
                />
              ))}
            </div>
            <div className="mt-1 flex">
              {ramp.steps.map((s) => (
                <span
                  key={s.step}
                  className="text-text-tertiary mono flex-1 text-center text-[10px]"
                >
                  {s.step}
                </span>
              ))}
            </div>
          </Section>
        ))}

        <Section title={t(locale, "designsystem.section.tokens")}>
          <div className="border-border-subtle border-t">
            {system.tokens.map((token) => (
              <div
                key={token.name}
                className="border-border-subtle grid grid-cols-[32px_1fr_1fr] items-center gap-4 border-b py-3"
              >
                <span
                  className="border-border-subtle h-8 w-8 rounded-md border"
                  style={{ background: token.hex }}
                />
                <span className="mono text-text-primary text-sm">
                  {token.name}
                  <span className="text-text-tertiary block text-xs">{token.hex}</span>
                </span>
                <span className="text-text-secondary text-sm">{token.note[locale]}</span>
              </div>
            ))}
          </div>
        </Section>

        {system.gradients && (
          <Section title={t(locale, "designsystem.section.gradients")}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {system.gradients.map((g) => (
                <div
                  key={g.name}
                  className="border-border-subtle overflow-hidden rounded-md border"
                >
                  <div className="h-16" style={{ background: g.css }} />
                  <div className="bg-raised p-3">
                    <p className="text-text-primary text-sm font-semibold">{g.name}</p>
                    <p className="text-text-tertiary mono text-xs">{g.stops[locale]}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {system.typography && (
          <Section title={t(locale, "designsystem.section.typography")}>
            <div className="border-border-subtle divide-border-subtle divide-y rounded-md border">
              {system.typography.map((tp) => (
                <div key={tp.role.es} className="flex items-baseline justify-between gap-4 p-4">
                  <span className="text-text-tertiary mono w-32 shrink-0 text-xs uppercase">
                    {tp.role[locale]}
                  </span>
                  <span className="text-text-primary flex-1" style={{ fontFamily: tp.family }}>
                    {tp.sample[locale]}
                  </span>
                </div>
              ))}
            </div>
          </Section>
        )}

        {system.visualLanguage && (
          <Section title={t(locale, "designsystem.section.visualLanguage")}>
            <ul className="space-y-2">
              {system.visualLanguage.map((v) => (
                <li
                  key={v.es}
                  className="text-text-secondary border-border-subtle border-b pb-2 text-sm"
                >
                  → {v[locale]}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {system.characters && (
          <Section title={t(locale, "designsystem.section.characters")}>
            <div className="border-border-subtle border-t">
              {system.characters.map((c) => (
                <div
                  key={c.name}
                  className="border-border-subtle grid grid-cols-[100px_1fr_auto] items-center gap-4 border-b py-3"
                >
                  <span className="text-text-primary text-sm font-semibold">{c.name}</span>
                  <span className="text-text-secondary text-sm">{c.role[locale]}</span>
                  <StatusBadge status={c.status} locale={locale} />
                </div>
              ))}
            </div>
          </Section>
        )}

        {system.retiredPalette && (
          <Section title={t(locale, "designsystem.section.retiredPalette")}>
            <div className="border-border-subtle flex flex-wrap gap-4 rounded-md border border-dashed p-4">
              {system.retiredPalette.map((s) => (
                <span key={s.hex} className="flex items-center gap-2">
                  <span
                    className="h-5 w-5 rounded"
                    style={{ background: s.hex, filter: "saturate(.5) brightness(.9)" }}
                  />
                  <span className="text-text-tertiary mono text-xs">
                    {s.hex} {s.label}
                  </span>
                </span>
              ))}
            </div>
          </Section>
        )}

        {system.gaps.length > 0 && (
          <Section title={t(locale, "designsystem.section.gaps")}>
            <ul className="space-y-2">
              {system.gaps.map((g) => (
                <li
                  key={g.es}
                  className="text-text-secondary border-border-subtle border-b pb-2 text-sm"
                >
                  → {g[locale]}
                </li>
              ))}
            </ul>
          </Section>
        )}

        <Section title={t(locale, "designsystem.section.currentState")}>
          <p className="text-text-secondary leading-relaxed">{system.currentStateNote[locale]}</p>
        </Section>

        <div className="border-border-subtle mt-16 border-t pt-10">
          <BackLink />
        </div>
      </main>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <p className="label-xs after:bg-border-subtle mb-4 flex items-center gap-3 after:h-px after:flex-1">
        {title}
      </p>
      {children}
    </section>
  );
}

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-raised p-4">
      <p className="label-xs mb-1">{label}</p>
      <p className="text-text-primary text-sm">{value}</p>
    </div>
  );
}

function StatusBadge({ status, locale }: { status: CharacterStatus["status"]; locale: Locale }) {
  const map = {
    redesigned: { key: "designsystem.status.redesigned", cls: "text-success" },
    unchanged: { key: "designsystem.status.unchanged", cls: "text-text-tertiary" },
    pending: { key: "designsystem.status.pending", cls: "text-warning" },
  } as const;
  const s = map[status];
  return <span className={`mono text-xs ${s.cls}`}>{t(locale, s.key)}</span>;
}
