import { useState } from "react";
import { t, useLocale } from "@/lib/i18n";
import { LabTile } from "./LabTile";

const MODES = {
  a: { label: "Marca A", accent: "#22d3ee", surface: "#0a0a0f" },
  b: { label: "Marca B", accent: "#ffb020", surface: "#160f08" },
};

export function ThemeModePlayground() {
  const { locale } = useLocale();
  const [mode, setMode] = useState<"a" | "b">("a");
  const theme = MODES[mode];
  return (
    <LabTile title={t(locale, "lab.themeMode.title")} description={t(locale, "lab.themeMode.desc")}>
      <div className="mb-3 flex gap-2">
        {(["a", "b"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`mono rounded-full border px-3 py-1 text-xs ${
              mode === m
                ? "border-accent text-text-primary"
                : "border-border-subtle text-text-tertiary"
            }`}
          >
            {MODES[m].label}
          </button>
        ))}
      </div>
      <div className="rounded-md p-4" style={{ background: theme.surface }}>
        <div className="flex items-center gap-3">
          <button
            className="rounded-md px-3 py-1.5 text-xs font-semibold"
            style={{ background: theme.accent, color: theme.surface }}
          >
            {locale === "es" ? "Confirmar" : "Confirm"}
          </button>
          <span
            className="rounded-full px-2 py-1 text-[10px] font-mono"
            style={{ background: `${theme.accent}22`, color: theme.accent }}
          >
            ACTIVE
          </span>
        </div>
      </div>
    </LabTile>
  );
}
