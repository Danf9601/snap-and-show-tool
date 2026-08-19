import { Reveal, SectionHeader } from "./primitives";

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

const TIMELINE = [
  { years: "2022 — hoy", role: "Senior Frontend Engineer & UX/UI Designer", where: "Producto propio + consultoría (Kinetik Studio, Serenia)" },
  { years: "2019 — 2022", role: "Product Designer / Frontend Lead", where: "Fintech y logística LATAM (Mercado Pago POS, Tul, Ontop)" },
  { years: "2014 — 2019", role: "UX/UI Designer", where: "Agencias y equipos de producto en Bogotá" },
  { years: "2010 — 2014", role: "Diseñador digital & ilustrador", where: "Dirección de arte y trabajo editorial" },
];

export function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader name="ABOUT" index="005" title="Quince años cerrando la brecha entre diseño y código." />

        <div className="grid gap-14 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed md:text-lg">
              <p>
                Soy Daniel Forero, diseño y programo desde Bogotá. Empecé en dirección de arte,
                terminé escribiendo el frontend de los productos que diseñaba — y hoy esa doble
                mirada es exactamente lo que aporto: decisiones de interfaz que ya vienen pensadas
                para ser construidas.
              </p>
              <p className="text-text-secondary">
                Trabajo mejor donde hay complejidad real: datos densos, flujos de pago, sistemas que
                muchos equipos van a consumir. Entrego tokens, componentes y código, no solo
                pantallas bonitas.
              </p>
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
              {TIMELINE.map((t) => (
                <div key={t.years} className="border-border-subtle border-b py-6">
                  <div className="mono text-text-accent text-[11px] tracking-widest">{t.years}</div>
                  <div className="mt-2 text-lg">{t.role}</div>
                  <div className="text-text-secondary mt-1 text-sm">{t.where}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
