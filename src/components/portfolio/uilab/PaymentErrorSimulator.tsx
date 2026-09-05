import { useState } from "react";
import { t, useLocale } from "@/lib/i18n";
import { LabTile } from "./LabTile";

const ERRORS_ES: Record<string, string> = {
  card_declined: "Tu tarjeta fue rechazada por el banco emisor.",
  insufficient_funds: "Fondos insuficientes para completar el pago.",
  invalid_cvc: "El código de seguridad (CVC) no es válido.",
  expired_card: "Tu tarjeta expiró.",
};
const ERRORS_EN: Record<string, string> = {
  card_declined: "Your card was declined by the issuing bank.",
  insufficient_funds: "Insufficient funds to complete the payment.",
  invalid_cvc: "The security code (CVC) isn't valid.",
  expired_card: "Your card expired.",
};

export function PaymentErrorSimulator() {
  const { locale } = useLocale();
  const errors = locale === "es" ? ERRORS_ES : ERRORS_EN;
  const [errorKey, setErrorKey] = useState<keyof typeof ERRORS_ES>("card_declined");
  const [platform, setPlatform] = useState<"android" | "ios">("android");
  const [shown, setShown] = useState(false);
  return (
    <LabTile
      title={t(locale, "lab.paymentError.title")}
      description={t(locale, "lab.paymentError.desc")}
    >
      <div className="flex flex-wrap gap-2">
        {Object.keys(errors).map((k) => (
          <button
            key={k}
            onClick={() => {
              setErrorKey(k);
              setShown(false);
            }}
            className={`mono rounded-full border px-2.5 py-1 text-[10px] ${
              errorKey === k
                ? "border-accent text-text-primary"
                : "border-border-subtle text-text-tertiary"
            }`}
          >
            {k}
          </button>
        ))}
      </div>
      <div className="mono mt-3 flex gap-2 text-[10px]">
        {(["android", "ios"] as const).map((p) => (
          <button
            key={p}
            onClick={() => setPlatform(p)}
            className={platform === p ? "text-text-accent" : "text-text-tertiary"}
          >
            {p}
          </button>
        ))}
      </div>
      <button
        onClick={() => setShown(true)}
        className="bg-accent text-text-on-accent mt-3 w-full rounded-md py-2 text-xs font-semibold"
      >
        {locale === "es" ? "Cobrar" : "Charge"}
      </button>
      {shown && platform === "android" && (
        <p className="border-danger text-danger mt-3 rounded-md border p-2 text-xs">
          {errors[errorKey]}
        </p>
      )}
      {shown && platform === "ios" && (
        <div className="border-border-subtle bg-raised mt-3 rounded-lg border p-3 text-center text-xs">
          <p className="text-text-primary mb-2">{errors[errorKey]}</p>
          <button onClick={() => setShown(false)} className="text-text-accent font-semibold">
            {locale === "es" ? "Aceptar" : "OK"}
          </button>
        </div>
      )}
    </LabTile>
  );
}
