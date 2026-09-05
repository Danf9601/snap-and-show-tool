import { useState } from "react";
import { t, useLocale } from "@/lib/i18n";
import { LabTile } from "./LabTile";

const CURRENCIES = ["COP", "USD", "EUR"] as const;

export function LocaleFormatPlayground() {
  const { locale } = useLocale();
  const [amount, setAmount] = useState(48200);
  const [currency, setCurrency] = useState<(typeof CURRENCIES)[number]>("COP");
  const intlLocale = locale === "es" ? "es-CO" : "en-US";
  const formattedAmount = new Intl.NumberFormat(intlLocale, { style: "currency", currency }).format(
    amount,
  );
  const formattedDate = new Intl.DateTimeFormat(intlLocale, { dateStyle: "long" }).format(
    new Date(),
  );
  return (
    <LabTile
      title={t(locale, "lab.localeFormat.title")}
      description={t(locale, "lab.localeFormat.desc")}
    >
      <input
        type="range"
        min={1000}
        max={500000}
        step={1000}
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="w-full"
      />
      <div className="mt-2 flex gap-2">
        {CURRENCIES.map((c) => (
          <button
            key={c}
            onClick={() => setCurrency(c)}
            className={`mono rounded-full border px-2 py-1 text-[10px] ${
              currency === c
                ? "border-accent text-text-primary"
                : "border-border-subtle text-text-tertiary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="text-text-primary mono mt-3 text-lg">{formattedAmount}</p>
      <p className="text-text-tertiary text-xs">
        {formattedDate} · {locale === "es" ? "locale activo" : "active locale"}: {intlLocale}
      </p>
    </LabTile>
  );
}
