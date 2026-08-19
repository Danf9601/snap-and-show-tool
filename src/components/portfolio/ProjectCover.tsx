import kinetikImg from "@/assets/kinetik.jpg";
import sereniaImg from "@/assets/serenia.jpg";

/**
 * Generative case-study covers. No third-party imagery: every cover is drawn
 * in code with Midnight Pro tokens (gray base + a single cyan accent).
 */

const ACCENT = "var(--accent-default)";
const LINE = "var(--border-default)";
const SUBTLE = "var(--border-subtle)";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="absolute inset-0"
      style={{ background: "linear-gradient(160deg, var(--gray-900), var(--gray-950))" }}
    >
      {children}
    </div>
  );
}

function Glow({ x = "70%", y = "25%", size = "62%", opacity = 0.3 }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        background: `radial-gradient(${size} ${size} at ${x} ${y}, color-mix(in oklab, var(--accent-default) ${
          opacity * 100
        }%, transparent), transparent 70%)`,
      }}
    />
  );
}

const range = (n: number) => Array.from({ length: n }, (_, i) => i);

function Mobility() {
  return (
    <Frame>
      <Glow x="75%" y="70%" opacity={0.22} />
      <svg viewBox="0 0 400 250" className="absolute inset-0 size-full" aria-hidden>
        {range(9).map((i) => (
          <path
            key={i}
            d={`M -20 ${20 + i * 28} C 90 ${i * 26}, 200 ${60 + i * 22}, 420 ${10 + i * 24}`}
            fill="none"
            stroke={SUBTLE}
            strokeWidth="1"
          />
        ))}
        <path
          d="M -10 200 C 90 190, 130 90, 210 96 C 290 102, 320 60, 410 40"
          fill="none"
          stroke={ACCENT}
          strokeWidth="1.5"
          strokeDasharray="6 5"
        />
        <circle cx="210" cy="96" r="4" fill={ACCENT} />
        <circle cx="210" cy="96" r="12" fill="none" stroke={ACCENT} strokeOpacity="0.35" />
      </svg>
    </Frame>
  );
}

function Tul() {
  return (
    <Frame>
      <Glow x="20%" y="15%" opacity={0.18} />
      <svg viewBox="0 0 400 250" className="absolute inset-0 size-full" aria-hidden>
        {range(11).map((i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="250" stroke={SUBTLE} />
        ))}
        {range(8).map((i) => (
          <line key={`h${i}`} x1="0" y1={i * 32} x2="400" y2={i * 32} stroke={SUBTLE} />
        ))}
        {range(12).map((i) => (
          <rect
            key={`c${i}`}
            x={(i % 4) * 80 + 24}
            y={Math.floor(i / 4) * 70 + 26}
            width="56"
            height="44"
            rx="6"
            fill="var(--glass-fill)"
            stroke={i === 5 ? ACCENT : LINE}
          />
        ))}
      </svg>
    </Frame>
  );
}

function Snappr() {
  return (
    <Frame>
      <Glow x="50%" y="45%" opacity={0.26} />
      <svg viewBox="0 0 400 250" className="absolute inset-0 size-full" aria-hidden>
        {range(25).map((i) => (
          <line key={i} x1="0" y1={i * 10 + 4} x2="400" y2={i * 10 + 4} stroke={SUBTLE} />
        ))}
        {range(28).map((i) => (
          <circle
            key={`p${i}`}
            cx={((i * 53) % 380) + 12}
            cy={((i * 91) % 220) + 16}
            r={i % 5 === 0 ? 2.5 : 1.4}
            fill={i % 5 === 0 ? ACCENT : "var(--gray-400)"}
          />
        ))}
        <rect x="132" y="72" width="136" height="106" rx="10" fill="none" stroke={ACCENT} />
        <line x1="132" y1="118" x2="268" y2="118" stroke={ACCENT} strokeOpacity="0.6" />
      </svg>
    </Frame>
  );
}

function Pos() {
  return (
    <Frame>
      <Glow x="65%" y="30%" opacity={0.24} />
      <svg viewBox="0 0 400 250" className="absolute inset-0 size-full" aria-hidden>
        <rect x="140" y="34" width="120" height="182" rx="22" fill="var(--gray-850)" stroke={LINE} />
        <rect x="158" y="60" width="84" height="30" rx="8" fill="var(--glass-fill)" stroke={SUBTLE} />
        {range(9).map((i) => (
          <rect
            key={i}
            x={158 + (i % 3) * 30}
            y={104 + Math.floor(i / 3) * 30}
            width="24"
            height="24"
            rx="8"
            fill="var(--glass-fill)"
            stroke={i === 8 ? ACCENT : SUBTLE}
          />
        ))}
        <rect x="158" y="194" width="84" height="10" rx="5" fill={ACCENT} />
        <circle cx="70" cy="200" r="46" fill="none" stroke={SUBTLE} />
        <circle cx="330" cy="60" r="60" fill="none" stroke={SUBTLE} />
      </svg>
    </Frame>
  );
}

function Ontop() {
  return (
    <Frame>
      <Glow x="30%" y="70%" opacity={0.22} />
      <div className="absolute inset-0">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute rounded-xl border"
            style={{
              left: `${16 + i * 14}%`,
              top: `${18 + i * 12}%`,
              width: "46%",
              height: "44%",
              background: "var(--glass-fill)",
              borderColor: i === 2 ? "color-mix(in oklab, var(--accent-default) 55%, transparent)" : "var(--glass-stroke)",
              backdropFilter: "blur(24px)",
              transform: `rotate(${-6 + i * 5}deg)`,
              boxShadow: "0 16px 32px -6px rgba(0,0,0,.45)",
            }}
          />
        ))}
      </div>
    </Frame>
  );
}

function Commdesk() {
  return (
    <Frame>
      <Glow x="80%" y="20%" opacity={0.2} />
      <svg viewBox="0 0 400 250" className="absolute inset-0 size-full" aria-hidden>
        {range(6).map((i) => {
          const right = i % 2 === 1;
          const w = 120 + (i % 3) * 40;
          return (
            <rect
              key={i}
              x={right ? 400 - w - 28 : 28}
              y={22 + i * 36}
              width={w}
              height="24"
              rx="12"
              fill="var(--glass-fill)"
              stroke={right ? ACCENT : SUBTLE}
              strokeOpacity={right ? 0.5 : 1}
            />
          );
        })}
        <circle cx="200" cy="230" r="3" fill={ACCENT} />
        <circle cx="214" cy="230" r="3" fill="var(--gray-500)" />
        <circle cx="186" cy="230" r="3" fill="var(--gray-500)" />
      </svg>
    </Frame>
  );
}

function Angelemus() {
  return (
    <Frame>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 20% 10%, color-mix(in oklab, var(--accent-default) 22%, transparent), transparent 60%), radial-gradient(80% 70% at 85% 80%, var(--gray-700), transparent 65%)",
        }}
      />
      <svg viewBox="0 0 400 250" className="absolute inset-0 size-full" aria-hidden>
        {range(14).map((i) => (
          <path
            key={i}
            d={`M ${-40 + i * 20} 260 C ${60 + i * 18} ${180 - i * 8}, ${180 + i * 6} ${120 + i * 6}, ${
              320 + i * 10
            } ${-20 + i * 6}`}
            fill="none"
            stroke={i % 4 === 0 ? ACCENT : SUBTLE}
            strokeOpacity={i % 4 === 0 ? 0.45 : 1}
          />
        ))}
      </svg>
    </Frame>
  );
}

function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      width={1200}
      height={900}
      className="absolute inset-0 size-full object-cover"
    />
  );
}

export function ProjectCover({ cover, title }: { cover: string; title: string }) {
  switch (cover) {
    case "kinetik":
      return <Photo src={kinetikImg} alt={`Portada del proyecto ${title}`} />;
    case "serenia":
      return <Photo src={sereniaImg} alt={`Portada del proyecto ${title}`} />;
    case "mobility":
      return <Mobility />;
    case "tul":
      return <Tul />;
    case "snappr":
      return <Snappr />;
    case "pos":
      return <Pos />;
    case "ontop":
      return <Ontop />;
    case "commdesk":
      return <Commdesk />;
    default:
      return <Angelemus />;
  }
}
