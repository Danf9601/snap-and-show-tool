import { useEffect, useState } from "react";
import { t, useLocale } from "@/lib/i18n";
import { LanguageSwitch } from "./LanguageSwitch";

const NAV = [
  { label: "Work", href: "#work" },
  { label: "UI Lab", href: "#ui-lab" },
  { label: "Design Systems", href: "#design-systems" },
  { label: "About", href: "#about" },
];

function bogotaTime() {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Bogota",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

export function TopBar() {
  const [clock, setClock] = useState("--:--:--");
  const { locale } = useLocale();

  useEffect(() => {
    setClock(bogotaTime());
    const id = window.setInterval(() => setClock(bogotaTime()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-border-subtle bg-background/80 border-b backdrop-blur-xl">
        <div className="mono text-text-tertiary mx-auto flex max-w-[1400px] items-center gap-3 overflow-hidden px-5 py-2 text-[10px] tracking-widest whitespace-nowrap md:px-10 md:text-[11px]">
          <span className="text-text-secondary">DANIEL_OS v1.0</span>
          <span className="text-text-tertiary">·</span>
          <span className="text-success inline-flex items-center gap-1.5">
            <span
              className="bg-success size-1.5 rounded-full"
              style={{ animation: "pulse-dot 1.8s ease-in-out infinite" }}
            />
            STATUS: AVAILABLE FOR WORK
          </span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline">BOGOTÁ, CO</span>
          <span className="ml-auto pl-3">{clock}</span>
        </div>
      </div>

      <nav className="border-border-subtle bg-background/70 border-b backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 md:px-10">
          <a href="#top" className="font-[family-name:var(--font-display)] text-sm tracking-tight">
            Daniel Forero
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-text-secondary hover:text-text-primary text-xs transition-colors duration-300"
              >
                {n.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitch />
            <a
              href="#contact"
              data-cursor="talk"
              className="border-glass-stroke bg-glass hover:border-accent hover:text-accent rounded-sm border px-4 py-2 text-xs transition-colors duration-300"
            >
              {t(locale, "nav.contact")}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
