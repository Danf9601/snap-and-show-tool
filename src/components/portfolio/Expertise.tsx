import { Reveal, SectionHeader } from "./primitives";
import { t, useLocale } from "@/lib/i18n";

const PILLAR_KEYS = ["01", "02", "03", "04"] as const;

export function Expertise() {
  const { locale } = useLocale();
  const PILLARS = PILLAR_KEYS.map((n) => ({
    n,
    title: t(locale, `expertise.${n}.title`),
    body: t(locale, `expertise.${n}.body`),
  }));

  return (
    <section className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader name="EXPERTISE" index="004" title={t(locale, "expertise.headline")} />
        <div className="border-border-subtle border-t">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={i * 70}>
              <div className="border-border-subtle hover:bg-surface group grid gap-4 border-b px-1 py-8 transition-colors duration-500 md:grid-cols-[80px_1fr_1.2fr] md:items-baseline md:px-4 md:py-10">
                <span className="mono text-text-tertiary group-hover:text-text-accent text-xs transition-colors">
                  {p.n}
                </span>
                <h3 className="text-2xl md:text-3xl">{p.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
