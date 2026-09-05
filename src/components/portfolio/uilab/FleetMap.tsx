import { useState } from "react";
import { t, useLocale } from "@/lib/i18n";
import { LabTile } from "./LabTile";

const PATH = "M 10 90 C 60 10, 140 10, 190 60 S 280 110, 290 40";
const VEHICLES = [
  { id: "V-104", color: "var(--accent-default)", dur: 6 },
  { id: "V-221", color: "var(--success)", dur: 9 },
  { id: "V-317", color: "var(--warning)", dur: 7.5 },
];

export function FleetMap() {
  const { locale } = useLocale();
  const [speed, setSpeed] = useState(1);
  return (
    <LabTile title={t(locale, "lab.fleet.title")} description={t(locale, "lab.fleet.desc")}>
      <svg viewBox="0 0 300 120" className="w-full">
        <path
          d={PATH}
          fill="none"
          stroke="var(--border-default)"
          strokeWidth={2}
          strokeDasharray="4 4"
        />
        {VEHICLES.map((v) => (
          <circle key={v.id} r={5} fill={v.color}>
            <animateMotion dur={`${v.dur / speed}s`} repeatCount="indefinite" path={PATH} />
          </circle>
        ))}
      </svg>
      <div className="mono mt-3 flex items-center justify-between text-[11px]">
        <span className="text-text-secondary">
          {VEHICLES.length} {locale === "es" ? "vehículos en ruta" : "vehicles en route"}
        </span>
        <label className="text-text-tertiary flex items-center gap-2">
          {locale === "es" ? "velocidad" : "speed"}
          <input
            type="range"
            min={0.5}
            max={3}
            step={0.5}
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
        </label>
      </div>
    </LabTile>
  );
}
