import { useMemo, useState } from "react";
import { t, useLocale } from "@/lib/i18n";
import { LabTile } from "./LabTile";

const KNOWN_TOKENS = [
  { name: "--bg-base", hex: "#050507" },
  { name: "--bg-surface", hex: "#0a0a0f" },
  { name: "--bg-raised", hex: "#14141b" },
  { name: "--text-primary", hex: "#f4f4f8" },
  { name: "--text-secondary", hex: "#8b8b9e" },
  { name: "--accent-default", hex: "#22d3ee" },
  { name: "--accent-hover", hex: "#67e8f9" },
  { name: "--success", hex: "#34d399" },
  { name: "--warning", hex: "#fbbf24" },
  { name: "--danger", hex: "#f87171" },
];

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h.padEnd(6, "0").slice(0, 6);
  const num = parseInt(full, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}
function distance(a: string, b: string) {
  const ra = hexToRgb(a);
  const rb = hexToRgb(b);
  return Math.sqrt((ra.r - rb.r) ** 2 + (ra.g - rb.g) ** 2 + (ra.b - rb.b) ** 2);
}

const DEFAULT_SNIPPET = `.card {\n  background: #0b0b10;\n  color: #f5f5f9;\n  border: 1px solid #23d4ef;\n}`;

export function TokenInspector() {
  const { locale } = useLocale();
  const [code, setCode] = useState(DEFAULT_SNIPPET);
  const matches = useMemo(() => {
    const found = [...new Set(code.match(/#[0-9a-fA-F]{3,8}/g) ?? [])];
    return found.map((hex) => {
      const closest = KNOWN_TOKENS.reduce(
        (best, tk) => (distance(hex, tk.hex) < distance(hex, best.hex) ? tk : best),
        KNOWN_TOKENS[0],
      );
      return { hex, closest, exact: distance(hex, closest.hex) < 4 };
    });
  }, [code]);

  return (
    <LabTile
      title={t(locale, "lab.tokenInspector.title")}
      description={t(locale, "lab.tokenInspector.desc")}
    >
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={5}
        spellCheck={false}
        className="border-border-subtle bg-surface text-text-primary mono w-full rounded-md border p-3 text-xs"
      />
      <ul className="mt-3 space-y-2">
        {matches.map((m) => (
          <li key={m.hex} className="flex items-center gap-3 text-xs">
            <span
              className="border-border-subtle h-4 w-4 shrink-0 rounded border"
              style={{ background: m.hex }}
            />
            <span className="text-text-primary mono">{m.hex}</span>
            <span className="text-text-tertiary">→</span>
            <span className={`mono ${m.exact ? "text-success" : "text-warning"}`}>
              {m.closest.name}
            </span>
          </li>
        ))}
        {matches.length === 0 && (
          <li className="text-text-tertiary text-xs">
            {locale === "es"
              ? "Sin hex sueltos — todo limpio."
              : "No loose hex values — all clean."}
          </li>
        )}
      </ul>
    </LabTile>
  );
}
