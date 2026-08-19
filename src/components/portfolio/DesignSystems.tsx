import { Reveal, SectionHeader } from "./primitives";

const KINETIK_RAMP = [
  { name: "gray-950", value: "#050507" },
  { name: "gray-850", value: "#0f0f15" },
  { name: "gray-700", value: "#1c1c25" },
  { name: "gray-400", value: "#5a5a6b" },
  { name: "gray-100", value: "#e2e2ea" },
  { name: "cyan-400", value: "#22d3ee" },
  { name: "cyan-600", value: "#0891b2" },
  { name: "cyan-900", value: "#083344" },
];

const SERENIA_RAMP = [
  { name: "violet-600", value: "#7c3aed" },
  { name: "violet-400", value: "#a78bfa" },
  { name: "emerald-400", value: "#34d399" },
  { name: "sand-100", value: "#efe9e1" },
];

function Swatches({ ramp }: { ramp: { name: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {ramp.map((c) => (
        <div key={c.name}>
          <div
            className="border-border-subtle h-14 rounded-sm border"
            style={{ backgroundColor: c.value }}
          />
          <div className="mono text-text-tertiary mt-2 text-[10px]">{c.name}</div>
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
          <Reveal>
            <div className="card-surface glow-hover h-full p-8 md:p-10">
              <div className="mono text-text-accent text-[11px] tracking-widest">SYSTEM_01</div>
              <h3 className="mt-4 text-3xl">Kinetik Studio · Midnight Pro</h3>
              <p className="text-text-secondary mt-4 text-sm leading-relaxed">
                El sistema que rige este sitio. Rampa de grises de 12 pasos, acento cyan único,
                superficies glass y un lenguaje de "centro de comando": monoespaciada para datos,
                display para jerarquía, sans para lectura.
              </p>
              <div className="mt-8">
                <Swatches ramp={KINETIK_RAMP} />
              </div>
              <div className="border-border-subtle mt-8 space-y-3 border-t pt-6">
                <p className="font-[family-name:var(--font-display)] text-2xl">
                  Space Grotesk — Display
                </p>
                <p className="mono text-text-accent text-sm">JetBrains Mono — 00:00:00 · DATA</p>
                <p className="text-text-secondary text-sm">Inter — UI y párrafos largos</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card-surface glow-hover h-full p-8 md:p-10">
              <div className="mono text-text-accent text-[11px] tracking-widest">SYSTEM_02</div>
              <h3 className="mt-4 text-3xl">Serenia</h3>
              <p className="text-text-secondary mt-4 text-sm leading-relaxed">
                Sistema cálido para una app de meditación: gradientes violeta-esmeralda, ritmo
                vertical amplio, y una familia de siete personajes ilustrados que guían el estado
                emocional de cada sesión.
              </p>
              <div className="mt-8">
                <Swatches ramp={SERENIA_RAMP} />
              </div>
              <div
                className="border-border-subtle mt-8 h-40 rounded-lg border"
                style={{
                  background:
                    "radial-gradient(120% 100% at 20% 20%, #7c3aed 0%, #4c1d95 45%, #34d399 130%)",
                }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
