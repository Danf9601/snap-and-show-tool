import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { t, useLocale } from "@/lib/i18n";
import { LabTile } from "./LabTile";

type Command = { id: string; label: string; run: () => void };

export function CommandPalette() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const commands: Command[] = useMemo(
    () => [
      {
        id: "home",
        label: locale === "es" ? "Ir a Home" : "Go to Home",
        run: () => navigate({ to: "/" }),
      },
      {
        id: "work-serenia",
        label: locale === "es" ? "Abrir case study: Serenia" : "Open case study: Serenia",
        run: () => navigate({ to: "/work/$slug", params: { slug: "serenia" } }),
      },
      {
        id: "work-kinetik",
        label: locale === "es" ? "Abrir case study: Kinetik" : "Open case study: Kinetik",
        run: () => navigate({ to: "/work/$slug", params: { slug: "kinetik" } }),
      },
      { id: "lang-es", label: "Cambiar idioma a Español", run: () => setLocale("es") },
      { id: "lang-en", label: "Switch language to English", run: () => setLocale("en") },
    ],
    [locale, navigate, setLocale],
  );

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => setActive(0), [query]);

  return (
    <LabTile
      title={t(locale, "lab.commandPalette.title")}
      description={t(locale, "lab.commandPalette.desc")}
    >
      <button
        onClick={() => setOpen(true)}
        className="border-border-subtle text-text-secondary mono w-full rounded-md border px-3 py-2 text-left text-xs"
      >
        {locale === "es" ? "Presiona ⌘K o haz clic acá…" : "Press ⌘K or click here…"}
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-32"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="border-border-subtle bg-raised w-full max-w-md rounded-lg border p-2 shadow-xl"
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") setActive((a) => Math.min(a + 1, filtered.length - 1));
                if (e.key === "ArrowUp") setActive((a) => Math.max(a - 1, 0));
                if (e.key === "Enter" && filtered[active]) {
                  filtered[active].run();
                  setOpen(false);
                }
              }}
              placeholder={locale === "es" ? "Escribe un comando…" : "Type a command…"}
              className="text-text-primary mono w-full bg-transparent px-2 py-2 text-sm outline-none"
            />
            <ul className="mt-1">
              {filtered.map((c, i) => (
                <li
                  key={c.id}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => {
                    c.run();
                    setOpen(false);
                  }}
                  className={`cursor-pointer rounded px-3 py-2 text-sm ${
                    i === active ? "bg-accent-muted text-text-primary" : "text-text-secondary"
                  }`}
                >
                  {c.label}
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="text-text-tertiary px-3 py-2 text-sm">
                  {locale === "es" ? "Sin resultados" : "No results"}
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </LabTile>
  );
}
