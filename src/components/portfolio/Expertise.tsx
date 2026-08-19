import { Reveal, SectionHeader } from "./primitives";

const PILLARS = [
  {
    n: "01",
    title: "Product Design",
    body: "Descubrimiento, arquitectura de información y flujos. La interfaz sale de una decisión de producto, no de una plantilla.",
  },
  {
    n: "02",
    title: "Design Systems",
    body: "Tokens semánticos, componentes con estados completos y documentación viva. Un sistema que el equipo puede usar sin preguntarme nada.",
  },
  {
    n: "03",
    title: "Frontend Engineering",
    body: "React, TypeScript y Tailwind en producción. Accesibilidad AA, 60fps y bundles que no crecen sin justificación.",
  },
  {
    n: "04",
    title: "Prototipado rápido",
    body: "De la idea a un prototipo funcional en días — la mejor forma de validar una interacción es poder tocarla.",
  },
];

export function Expertise() {
  return (
    <section className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader name="EXPERTISE" index="004" title="Cómo trabajo." />
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
