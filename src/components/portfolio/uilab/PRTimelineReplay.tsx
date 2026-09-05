import { useState } from "react";
import { t, useLocale } from "@/lib/i18n";
import { LabTile } from "./LabTile";

const LOG_ES = [
  "$ pipeline: escalando componente faltante — network selector",
  "$ extrayendo specs reales vía Figma API",
  "$ build: componente implementado, tests en verde",
  "$ git: PR mergeado a main",
  "✗ verificación: commit ausente en main pese a PR mergeado",
  "$ diagnóstico: gap de merge detectado en el historial real de git",
  "$ PR de seguimiento abierto y mergeado",
  "✓ verificado contra el repo real — cerrado",
];
const LOG_EN = [
  "$ pipeline: escalating missing component — network selector",
  "$ extracting real specs via Figma API",
  "$ build: component implemented, tests green",
  "$ git: PR merged to main",
  "✗ verification: commit missing from main despite merged PR",
  "$ diagnosis: merge gap found in the real git history",
  "$ follow-up PR opened and merged",
  "✓ verified against the real repo — closed",
];

export function PRTimelineReplay() {
  const { locale } = useLocale();
  const log = locale === "es" ? LOG_ES : LOG_EN;
  const [step, setStep] = useState(0);
  return (
    <LabTile
      title={t(locale, "lab.prTimeline.title")}
      description={t(locale, "lab.prTimeline.desc")}
    >
      <input
        type="range"
        min={0}
        max={log.length}
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
        className="w-full"
      />
      <div className="border-border-subtle bg-surface mono mt-3 h-32 overflow-y-auto rounded-md border p-3 text-[11px]">
        {log.slice(0, step).map((line) => (
          <p
            key={line}
            className={
              line.startsWith("✗")
                ? "text-danger"
                : line.startsWith("✓")
                  ? "text-success"
                  : "text-text-secondary"
            }
          >
            {line}
          </p>
        ))}
        {step === 0 && (
          <p className="text-text-tertiary">
            {locale === "es" ? "mueve el slider para reproducir…" : "move the slider to replay…"}
          </p>
        )}
      </div>
    </LabTile>
  );
}
