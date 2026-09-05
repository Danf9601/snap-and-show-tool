import { Link } from "@tanstack/react-router";
import { Reveal, SectionHeader } from "./primitives";
import { DESIGN_SYSTEMS } from "@/data/designSystems";

function Swatches({ steps }: { steps: { step: string; hex: string }[] }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {steps.map((s) => (
        <div key={s.step}>
          <div
            className="border-border-subtle h-14 rounded-sm border"
            style={{ backgroundColor: s.hex }}
          />
          <div className="mono text-text-tertiary mt-2 text-[10px]">{s.step}</div>
        </div>
      ))}
    </div>
  );
}

export function DesignSystems() {
  return (
    <section id="design-systems" className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          name="DESIGN_SYSTEMS"
          index="003"
          title="Dos sistemas propios, en producción."
          intro="No plantillas: escalas de color validadas en contraste AA, roles tipográficos fijos y componentes con estados definidos antes de escribir una línea de UI."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {DESIGN_SYSTEMS.map((system, i) => (
            <Reveal key={system.slug} delay={i * 100}>
              <Link
                to="/design-systems/$slug"
                params={{ slug: system.slug }}
                data-cursor="view"
                className="card-surface glow-hover block h-full p-8 md:p-10"
              >
                <div className="mono text-text-accent text-[11px] tracking-widest">
                  SYSTEM_{String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-3xl">{system.name}</h3>
                <p className="text-text-secondary mt-4 text-sm leading-relaxed">
                  {system.subtitle}
                </p>
                <div className="mt-8">
                  <Swatches
                    steps={
                      system.rampSets?.[0].steps.slice(0, 8) ??
                      system.tokens.slice(0, 8).map((t) => ({ step: t.name, hex: t.hex }))
                    }
                  />
                </div>
                <div className="border-border-subtle mt-8 space-y-3 border-t pt-6">
                  {system.typography.slice(0, 3).map((t) => (
                    <p
                      key={t.role}
                      className="text-text-secondary text-sm"
                      style={{ fontFamily: t.family }}
                    >
                      {t.role}
                    </p>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
