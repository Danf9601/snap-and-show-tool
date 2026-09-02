import tulLogo from "@/assets/logos/tul-logo.jpg";
import mercadoPagoLogo from "@/assets/logos/mercado-pago-logo.png";
import ontopLogo from "@/assets/logos/ontop-logo.png";
import snapprLogo from "@/assets/logos/snappr-logo.png";

const CLIENT_LOGOS: Record<string, string> = {
  tul: tulLogo,
  "mercado-pago": mercadoPagoLogo,
  ontop: ontopLogo,
  snappr: snapprLogo,
};

type ClientBadgeProps = {
  src: string;
  alt: string;
};

export function ClientBadge({ src, alt }: ClientBadgeProps) {
  const image = CLIENT_LOGOS[src] ?? src;

  return (
    <div
      className="border-glass-stroke bg-glass inline-flex h-11 items-center gap-2 rounded-sm border px-3 backdrop-blur-xl"
      style={{ backdropFilter: "blur(24px)" }}
    >
      <img src={image} alt={alt} className="h-5 w-auto object-contain" />
    </div>
  );
}
