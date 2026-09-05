import { useLocale } from "@/lib/i18n";

export function LanguageSwitch() {
  const { locale, setLocale } = useLocale();
  return (
    <div className="border-border-subtle bg-glass inline-flex items-center gap-1 rounded-full border p-1 backdrop-blur-xl">
      {(["es", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          aria-label={l === "es" ? "Cambiar a español" : "Switch to English"}
          className={`mono rounded-full px-3 py-1 text-xs uppercase transition-colors ${
            locale === l
              ? "bg-accent text-text-on-accent"
              : "text-text-secondary hover:text-text-primary"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
