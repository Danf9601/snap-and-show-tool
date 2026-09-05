import { Reveal, SectionHeader } from "./primitives";
import { t, useLocale, type Bi } from "@/lib/i18n";

const STACK = [
  "Figma",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Next / TanStack",
  "Flutter",
  "Supabase",
  "GSAP / Motion",
  "Storybook",
  "Node",
];

const TIMELINE: { years: string; role: Bi; where: Bi }[] = [
  {
    years: "2023 — hoy",
    role: {
      es: "Senior UX/UI Designer & Front End Developer",
      en: "Senior UX/UI Designer & Front End Developer",
    },
    where: {
      es: "Kinetik Studio (front end, UX/UI, estrategia de IA) + producto propio (Serenia)",
      en: "Kinetik Studio (front end, UX/UI, AI strategy) + own product (Serenia)",
    },
  },
  {
    years: "2021 — 2023",
    role: { es: "Product Designer / Frontend Lead", en: "Product Designer / Frontend Lead" },
    where: {
      es: "Fintech y beneficios corporativos LATAM (Mercado Pago POS, Ontop, Commdesk)",
      en: "Fintech and corporate benefits, LATAM (Mercado Pago POS, Ontop, Commdesk)",
    },
  },
  {
    years: "2018 — 2021",
    role: { es: "UX/UI Designer", en: "UX/UI Designer" },
    where: {
      es: "Tul, agencias y equipos de producto en Bogotá",
      en: "Tul, agencies, and product teams in Bogotá",
    },
  },
];

export function About() {
  const { locale } = useLocale();
  return (
    <section id="about" className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader name="ABOUT" index="005" title={t(locale, "about.headline")} />

        <div className="grid gap-14 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed md:text-lg">
              <p>{t(locale, "about.bio")}</p>
              <p className="text-text-secondary">{t(locale, "about.experienceSummary")}</p>
            </div>

            <div className="mt-10">
              <div className="label-xs">Stack</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {STACK.map((s) => (
                  <span
                    key={s}
                    className="mono border-border-subtle text-text-secondary hover:border-accent hover:text-text-accent rounded-sm border px-3 py-1.5 text-[11px] transition-colors duration-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="border-border-subtle border-t">
              {TIMELINE.map((item) => (
                <div key={item.years} className="border-border-subtle border-b py-6">
                  <div className="mono text-text-accent text-[11px] tracking-widest">
                    {item.years}
                  </div>
                  <div className="mt-2 text-lg">{item.role[locale]}</div>
                  <div className="text-text-secondary mt-1 text-sm">{item.where[locale]}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
