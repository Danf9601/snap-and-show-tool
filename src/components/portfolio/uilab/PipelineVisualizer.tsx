import { useEffect, useState } from "react";
import { t, useLocale } from "@/lib/i18n";
import { LabTile } from "./LabTile";

const STAGES = ["Queued", "Tests", "Implementation", "Escalated", "Done"] as const;
type Stage = (typeof STAGES)[number];
const SCRIPT: { wp: string; stage: Stage }[] = [
  { wp: "WP-1", stage: "Tests" },
  { wp: "WP-2", stage: "Tests" },
  { wp: "WP-1", stage: "Implementation" },
  { wp: "WP-3", stage: "Tests" },
  { wp: "WP-2", stage: "Implementation" },
  { wp: "WP-1", stage: "Escalated" },
  { wp: "WP-1", stage: "Implementation" },
  { wp: "WP-4", stage: "Tests" },
  { wp: "WP-2", stage: "Done" },
  { wp: "WP-3", stage: "Implementation" },
  { wp: "WP-5", stage: "Tests" },
  { wp: "WP-1", stage: "Done" },
  { wp: "WP-3", stage: "Done" },
  { wp: "WP-4", stage: "Implementation" },
  { wp: "WP-5", stage: "Implementation" },
  { wp: "WP-4", stage: "Done" },
  { wp: "WP-5", stage: "Done" },
];

export function PipelineVisualizer() {
  const { locale } = useLocale();
  const [tick, setTick] = useState(0);
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setTick((tc) => (tc + 1) % (SCRIPT.length + 6)), 700);
    return () => clearInterval(id);
  }, [playing]);
  const packages = ["WP-1", "WP-2", "WP-3", "WP-4", "WP-5"].map((id) => {
    const applied = SCRIPT.slice(0, tick)
      .filter((s) => s.wp === id)
      .pop();
    return { id, stage: (applied?.stage ?? "Queued") as Stage };
  });
  const doneCount = packages.filter((p) => p.stage === "Done").length;

  return (
    <LabTile title={t(locale, "lab.pipeline.title")} description={t(locale, "lab.pipeline.desc")}>
      <div className="grid grid-cols-5 gap-2 text-[10px]">
        {STAGES.map((stage) => (
          <div key={stage} className="flex flex-col gap-1">
            <p className="text-text-tertiary mono uppercase">{stage}</p>
            {packages
              .filter((p) => p.stage === stage)
              .map((p) => (
                <span
                  key={p.id}
                  className="bg-accent-muted text-text-primary mono rounded px-1.5 py-1"
                >
                  {p.id}
                </span>
              ))}
          </div>
        ))}
      </div>
      <div className="border-border-subtle mono mt-4 flex items-center justify-between border-t pt-3 text-[11px]">
        <span className="text-text-secondary">
          {locale === "es" ? "iteraciones" : "iterations"}: {Math.min(tick, SCRIPT.length)} ·{" "}
          {locale === "es" ? "listos" : "done"}: {doneCount}/5
        </span>
        <button onClick={() => setPlaying((p) => !p)} className="text-text-accent">
          {playing
            ? locale === "es"
              ? "pausar"
              : "pause"
            : locale === "es"
              ? "reanudar"
              : "resume"}
        </button>
      </div>
    </LabTile>
  );
}
