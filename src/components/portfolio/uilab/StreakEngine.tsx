import { useState } from "react";
import { t, useLocale } from "@/lib/i18n";
import { LabTile } from "./LabTile";

const MILESTONES = [3, 7, 14];

export function StreakEngine() {
  const { locale } = useLocale();
  const [streak, setStreak] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [unlocked, setUnlocked] = useState<number[]>([]);
  const [pulse, setPulse] = useState(false);
  const complete = () => {
    const next = streak + 1;
    setStreak(next);
    setMinutes((m) => m + 10);
    setPulse(true);
    setTimeout(() => setPulse(false), 400);
    if (MILESTONES.includes(next) && !unlocked.includes(next)) setUnlocked((u) => [...u, next]);
  };
  return (
    <LabTile title={t(locale, "lab.streak.title")} description={t(locale, "lab.streak.desc")}>
      <div className="flex items-center gap-4">
        <span className={`text-3xl transition-transform ${pulse ? "scale-125" : "scale-100"}`}>
          🔥
        </span>
        <div>
          <p className="text-text-primary mono text-lg">
            {streak} {locale === "es" ? "días" : "days"}
          </p>
          <p className="text-text-tertiary text-xs">
            {minutes} {locale === "es" ? "min acumulados" : "min accumulated"}
          </p>
        </div>
      </div>
      <button
        onClick={complete}
        className="bg-accent text-text-on-accent mt-3 rounded-md px-3 py-2 text-xs font-semibold"
      >
        {locale === "es" ? "Completar sesión de hoy" : "Complete today's session"}
      </button>
      <div className="mt-3 flex gap-2">
        {MILESTONES.map((m) => (
          <span
            key={m}
            className={`mono rounded-full border px-2 py-1 text-[10px] ${
              unlocked.includes(m)
                ? "border-success text-success"
                : "border-border-subtle text-text-tertiary"
            }`}
          >
            {m}d {unlocked.includes(m) ? "✓" : ""}
          </span>
        ))}
      </div>
      <button
        onClick={() => {
          setStreak(0);
          setMinutes(0);
          setUnlocked([]);
        }}
        className="text-text-tertiary mt-2 text-[10px] underline"
      >
        {locale === "es" ? "reiniciar" : "reset"}
      </button>
    </LabTile>
  );
}
