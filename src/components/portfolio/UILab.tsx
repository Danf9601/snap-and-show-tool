import { useEffect, useMemo, useRef, useState } from "react";
import { Reveal, SectionHeader, StatusBadge } from "./primitives";

function Frame({
  title,
  chrome = "browser",
  children,
}: {
  title: string;
  chrome?: "browser" | "mobile";
  children: React.ReactNode;
}) {
  if (chrome === "mobile") {
    return (
      <div className="border-glass-stroke bg-overlay mx-auto w-full max-w-[320px] rounded-[28px] border p-3">
        <div className="bg-background overflow-hidden rounded-[20px]">{children}</div>
      </div>
    );
  }
  return (
    <div className="border-glass-stroke bg-overlay overflow-hidden rounded-lg border">
      <div className="border-border-subtle flex items-center gap-2 border-b px-4 py-2.5">
        <span className="bg-danger/70 size-2 rounded-full" />
        <span className="bg-warning/70 size-2 rounded-full" />
        <span className="bg-success/70 size-2 rounded-full" />
        <span className="mono text-text-tertiary ml-3 truncate text-[10px]">{title}</span>
      </div>
      <div className="bg-background">{children}</div>
    </div>
  );
}

/* ---------- Demo 1: AI Command Center ---------- */

const LOG_LINES = [
  "✓ ingest.pipeline — 1.2k events/s",
  "▸ model.route — gpt-router warm",
  "✓ vector.index — rebuilt in 340ms",
  "▸ agent.task#8821 — planning",
  "✓ cache.hit-rate — 94.2%",
  "▸ webhook.retry — queue drained",
];

function DashboardDemo() {
  const [tick, setTick] = useState(0);
  const [logs, setLogs] = useState<string[]>(LOG_LINES.slice(0, 3));
  const [range, setRange] = useState<"1H" | "24H" | "7D">("24H");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setTick((t) => t + 1);
      setLogs((l) => [...l.slice(-5), LOG_LINES[Math.floor(Math.random() * LOG_LINES.length)] ?? LOG_LINES[0]!]);
    }, 1600);
    return () => window.clearInterval(id);
  }, []);

  const points = useMemo(() => {
    const seed = range === "1H" ? 3 : range === "24H" ? 7 : 11;
    return Array.from({ length: 24 }, (_, i) => {
      const v = Math.sin((i + tick) / seed) * 0.5 + Math.sin((i + tick) / 2.7) * 0.25 + 0.5;
      return Math.max(0.06, Math.min(0.96, v));
    });
  }, [tick, range]);

  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${((i / 23) * 100).toFixed(2)} ${((1 - p) * 100).toFixed(2)}`)
    .join(" ");

  return (
    <div className="p-4 md:p-5">
      <div className="flex items-center justify-between">
        <div className="mono text-text-tertiary text-[10px] tracking-widest">
          AI COMMAND CENTER
        </div>
        <StatusBadge label="LIVE" />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { k: "Throughput", v: `${(1.1 + (points[12] ?? 0) * 0.6).toFixed(2)}k/s` },
          { k: "Latency p95", v: `${Math.round(120 + (points[6] ?? 0) * 90)}ms` },
          { k: "Cost / 1k", v: `$${(0.4 + (points[18] ?? 0) * 0.2).toFixed(3)}` },
        ].map((m) => (
          <div key={m.k} className="bg-raised rounded-sm p-3">
            <div className="label-xs text-[10px]">{m.k}</div>
            <div className="mono text-text-primary mt-1.5 text-sm tabular-nums">{m.v}</div>
          </div>
        ))}
      </div>

      <div className="bg-raised mt-2 rounded-sm p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="label-xs text-[10px]">Requests</span>
          <div className="flex gap-1">
            {(["1H", "24H", "7D"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={`mono rounded-sm px-2 py-0.5 text-[10px] transition-colors duration-200 ${
                  range === r
                    ? "bg-accent text-text-on-accent"
                    : "text-text-tertiary hover:text-text-primary"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-24 w-full">
          <path
            d={`${path} L 100 100 L 0 100 Z`}
            fill="var(--accent-muted)"
            opacity="0.6"
            style={{ transition: "d 1.4s ease" }}
          />
          <path
            d={path}
            fill="none"
            stroke="var(--accent-default)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            style={{ transition: "d 1.4s ease" }}
          />
        </svg>
      </div>

      <div className="bg-raised mono mt-2 h-28 overflow-hidden rounded-sm p-3 text-[10px] leading-5">
        {logs.map((l, i) => (
          <div
            key={`${l}-${i}`}
            className={l.startsWith("✓") ? "text-success" : "text-text-secondary"}
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Demo 2: Checkout ---------- */

function CheckoutDemo() {
  const [step, setStep] = useState(0);
  const [card, setCard] = useState("");
  const valid = card.replace(/\s/g, "").length === 16;

  const format = (v: string) =>
    v
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();

  return (
    <div className="p-4 md:p-5">
      <div className="flex items-center gap-1.5">
        {[0, 1, 2].map((s) => (
          <span
            key={s}
            className={`h-0.5 flex-1 rounded-full transition-colors duration-500 ${
              s <= step ? "bg-accent" : "bg-raised"
            }`}
          />
        ))}
      </div>

      <div className="mt-5 min-h-[240px]">
        {step === 0 && (
          <div>
            <div className="label-xs">Total a pagar</div>
            <div className="font-[family-name:var(--font-display)] mt-1 text-4xl tabular-nums">
              $148.000
            </div>
            <div className="mono text-text-tertiary mt-1 text-[10px]">COP · POS #0042</div>
            <ul className="mt-5 space-y-2 text-xs">
              {[
                ["Plan Pro — mensual", "$120.000"],
                ["IVA 19%", "$22.800"],
                ["Servicio", "$5.200"],
              ].map(([k, v]) => (
                <li key={k} className="text-text-secondary flex justify-between">
                  <span>{k}</span>
                  <span className="mono text-text-primary">{v}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setStep(1)}
              className="bg-accent text-text-on-accent hover:bg-accent-hover mt-6 w-full rounded-md py-3 text-sm transition-colors duration-300"
            >
              Continuar
            </button>
          </div>
        )}

        {step === 1 && (
          <div>
            <div className="label-xs">Tarjeta</div>
            <input
              value={card}
              onChange={(e) => setCard(format(e.target.value))}
              inputMode="numeric"
              aria-label="Número de tarjeta"
              placeholder="4242 4242 4242 4242"
              className="mono bg-raised border-border-subtle focus:border-accent mt-2 w-full rounded-sm border px-3 py-3 text-sm outline-none transition-colors duration-300"
            />
            <div
              className={`mono mt-2 text-[10px] transition-colors ${
                card.length === 0
                  ? "text-text-tertiary"
                  : valid
                    ? "text-success"
                    : "text-warning"
              }`}
            >
              {card.length === 0
                ? "16 dígitos"
                : valid
                  ? "✓ tarjeta válida"
                  : `▸ ${16 - card.replace(/\s/g, "").length} dígitos restantes`}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <input
                aria-label="Vencimiento"
                placeholder="MM/AA"
                className="mono bg-raised border-border-subtle focus:border-accent rounded-sm border px-3 py-3 text-sm outline-none"
              />
              <input
                aria-label="CVC"
                placeholder="CVC"
                className="mono bg-raised border-border-subtle focus:border-accent rounded-sm border px-3 py-3 text-sm outline-none"
              />
            </div>
            <button
              disabled={!valid}
              onClick={() => setStep(2)}
              className="bg-accent text-text-on-accent hover:bg-accent-hover mt-6 w-full rounded-md py-3 text-sm transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-30"
            >
              Pagar $148.000
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="border-success text-success grid size-14 place-items-center rounded-full border-2 text-2xl">
              ✓
            </div>
            <p className="mt-5 text-lg">Pago aprobado</p>
            <p className="mono text-text-tertiary mt-1 text-[10px]">AUTH_ID · 8F21-QK09</p>
            <button
              onClick={() => {
                setStep(0);
                setCard("");
              }}
              className="border-glass-stroke bg-glass hover:border-accent mt-6 rounded-sm border px-4 py-2 text-xs transition-colors"
            >
              Reiniciar demo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- Demo 3: Quote flow ---------- */

const SCOPES = [
  { id: "ds", label: "Design System", price: 6800 },
  { id: "ui", label: "Product UI", price: 5200 },
  { id: "fe", label: "Frontend build", price: 7400 },
  { id: "lab", label: "Prototipos", price: 2600 },
];

function QuoteDemo() {
  const [selected, setSelected] = useState<string[]>(["ds"]);
  const [weeks, setWeeks] = useState(6);

  const base = SCOPES.filter((s) => selected.includes(s.id)).reduce((a, s) => a + s.price, 0);
  const rush = weeks < 5 ? 1.25 : weeks > 9 ? 0.92 : 1;
  const total = Math.round(base * rush);

  return (
    <div className="p-4 md:p-5">
      <div className="mono text-text-tertiary text-[10px] tracking-widest">SCOPE_BUILDER</div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {SCOPES.map((s) => {
          const on = selected.includes(s.id);
          return (
            <button
              key={s.id}
              aria-pressed={on}
              onClick={() =>
                setSelected((cur) =>
                  cur.includes(s.id) ? cur.filter((c) => c !== s.id) : [...cur, s.id],
                )
              }
              className={`rounded-sm border px-3 py-3 text-left text-xs transition-all duration-300 ${
                on
                  ? "border-accent bg-accent-muted text-text-primary"
                  : "border-border-subtle bg-raised text-text-secondary hover:border-glass-stroke"
              }`}
            >
              <span className="block">{s.label}</span>
              <span className="mono text-text-tertiary mt-1 block text-[10px]">
                ${s.price.toLocaleString("en-US")}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <span className="label-xs">Timeline</span>
          <span className="mono text-text-primary text-[11px]">{weeks} semanas</span>
        </div>
        <input
          type="range"
          min={3}
          max={12}
          value={weeks}
          aria-label="Semanas de proyecto"
          onChange={(e) => setWeeks(Number(e.target.value))}
          className="accent-[var(--accent-default)] mt-3 w-full"
        />
        <div className="mono text-text-tertiary mt-1 text-[10px]">
          {rush > 1 ? "▸ recargo por entrega acelerada +25%" : rush < 1 ? "✓ descuento por timeline holgado −8%" : "▸ ritmo estándar"}
        </div>
      </div>

      <div className="bg-raised mt-5 flex items-end justify-between rounded-sm p-4">
        <div>
          <div className="label-xs">Estimado</div>
          <div className="mono text-text-accent mt-1 text-2xl tabular-nums transition-all duration-300">
            ${total.toLocaleString("en-US")}
          </div>
        </div>
        <span className="mono text-text-tertiary text-[10px]">
          {selected.length} módulo{selected.length === 1 ? "" : "s"}
        </span>
      </div>
    </div>
  );
}

/* ---------- Demo 4: Serenia player (paleta excepción) ---------- */

function PlayerDemo() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(28);
  const raf = useRef(0);

  useEffect(() => {
    if (!playing) return;
    let last = performance.now();
    const loop = (t: number) => {
      const dt = t - last;
      last = t;
      setProgress((p) => (p + dt / 260) % 100);
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf.current);
  }, [playing]);

  return (
    <div
      className="p-6 text-center"
      style={{
        background: "radial-gradient(120% 90% at 50% 0%, #2e1065 0%, #0a0a0f 70%)",
      }}
    >
      <div className="mono text-[10px] tracking-widest" style={{ color: "#a78bfa" }}>
        SERENIA · SESSION 03
      </div>
      <div
        className="mx-auto mt-6 size-28 rounded-full transition-transform duration-700"
        style={{
          background: "radial-gradient(circle at 35% 30%, #a78bfa, #7c3aed 55%, #34d399 130%)",
          transform: playing ? "scale(1.06)" : "scale(1)",
          boxShadow: playing ? "0 0 60px -10px #7c3aed" : "0 0 30px -18px #7c3aed",
        }}
      />
      <p className="mt-6 font-[family-name:var(--font-display)] text-lg">Respiración profunda</p>
      <p className="text-text-secondary text-xs">Guiada · 12 min</p>

      <div className="bg-glass mt-6 h-1 w-full overflow-hidden rounded-full">
        <div
          className="h-full rounded-full"
          style={{ width: `${progress}%`, background: "linear-gradient(90deg,#a78bfa,#34d399)" }}
        />
      </div>
      <div className="mono text-text-tertiary mt-2 flex justify-between text-[10px]">
        <span>{String(Math.floor((progress / 100) * 12)).padStart(2, "0")}:00</span>
        <span>12:00</span>
      </div>

      <button
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? "Pausar sesión" : "Reproducir sesión"}
        className="mt-6 grid size-12 place-items-center rounded-full text-sm transition-transform duration-300 active:scale-90"
        style={{ background: "#a78bfa", color: "#1e1b4b" }}
      >
        {playing ? "❚❚" : "▶"}
      </button>
    </div>
  );
}

/* ---------- Section ---------- */

export function UILab() {
  return (
    <section id="ui-lab" className="border-border-subtle bg-surface/40 border-y px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          name="UI_LAB"
          index="002"
          title="Demos funcionales, no capturas."
          intro="Cada pieza corre en vivo en esta página: estados reales, validación instantánea y animación a 60fps. Abre devtools si quieres — para eso están."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="card-surface glow-hover h-full p-5 md:p-6">
              <h3 className="text-xl">AI Command Center</h3>
              <p className="text-text-secondary mt-2 mb-5 text-sm">
                Métricas en vivo, gráfico animado y feed de logs tipo terminal.
              </p>
              <Frame title="kinetik.studio/command-center">
                <DashboardDemo />
              </Frame>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card-surface glow-hover h-full p-5 md:p-6">
              <h3 className="text-xl">Checkout rápido</h3>
              <p className="text-text-secondary mt-2 mb-5 text-sm">
                Flujo de pago en tres pasos con validación en tiempo real.
              </p>
              <Frame title="pos.checkout/flow">
                <CheckoutDemo />
              </Frame>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="card-surface glow-hover h-full p-5 md:p-6">
              <h3 className="text-xl">Cotizador SaaS</h3>
              <p className="text-text-secondary mt-2 mb-5 text-sm">
                Alcance y timeline configurables con resumen dinámico.
              </p>
              <Frame title="kinetik.studio/quote">
                <QuoteDemo />
              </Frame>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="card-surface glow-hover h-full p-5 md:p-6">
              <h3 className="text-xl">Player Serenia</h3>
              <p className="text-text-secondary mt-2 mb-5 text-sm">
                Única excepción cromática del sitio: paleta violeta/esmeralda de Serenia.
              </p>
              <Frame title="serenia" chrome="mobile">
                <PlayerDemo />
              </Frame>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
