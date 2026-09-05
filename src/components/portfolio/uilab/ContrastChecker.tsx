import { useMemo, useState } from "react";
import { t, useLocale } from "@/lib/i18n";
import { LabTile } from "./LabTile";

function luminance(hex: string) {
  const h = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const c = [r, g, b].map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}
function contrastRatio(a: string, b: string) {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

export function ContrastChecker() {
  const { locale } = useLocale();
  const [fg, setFg] = useState("#f4f4f8");
  const [bg, setBg] = useState("#0a0a0f");
  const ratio = useMemo(() => contrastRatio(fg, bg), [fg, bg]);
  const aa = ratio >= 4.5;
  const aaa = ratio >= 7;
  return (
    <LabTile title={t(locale, "lab.contrast.title")} description={t(locale, "lab.contrast.desc")}>
      <div className="flex gap-4">
        <label className="text-text-tertiary flex flex-1 flex-col gap-1 text-xs">
          {locale === "es" ? "Texto" : "Text"}
          <input
            type="color"
            value={fg}
            onChange={(e) => setFg(e.target.value)}
            className="h-8 w-full rounded"
          />
        </label>
        <label className="text-text-tertiary flex flex-1 flex-col gap-1 text-xs">
          {locale === "es" ? "Fondo" : "Background"}
          <input
            type="color"
            value={bg}
            onChange={(e) => setBg(e.target.value)}
            className="h-8 w-full rounded"
          />
        </label>
      </div>
      <div className="mt-3 rounded-md p-4 text-sm" style={{ background: bg, color: fg }}>
        {locale === "es" ? "Texto de muestra sobre este fondo" : "Sample text over this background"}
      </div>
      <div className="mono mt-3 flex items-center gap-3 text-xs">
        <span className="text-text-primary">{ratio.toFixed(2)}:1</span>
        <span className={aa ? "text-success" : "text-danger"}>AA {aa ? "✓" : "✗"}</span>
        <span className={aaa ? "text-success" : "text-danger"}>AAA {aaa ? "✓" : "✗"}</span>
      </div>
    </LabTile>
  );
}
