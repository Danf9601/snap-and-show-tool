import { useEffect, useRef, useState, type ReactNode } from "react";

export function useReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            window.setTimeout(() => setShown(true), delay);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return { ref, className: shown ? "reveal reveal-in" : "reveal" };
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, className: rc } = useReveal<HTMLDivElement>(delay);
  return (
    <div ref={ref} className={`${rc} ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeader({
  name,
  index,
  title,
  intro,
}: {
  name: string;
  index: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-20">
      <div className="mono text-text-accent text-xs tracking-widest">
        // {name} — {index}
      </div>
      <h2 className="mt-4 max-w-4xl text-4xl leading-[1.02] md:text-6xl lg:text-7xl">{title}</h2>
      {intro ? (
        <p className="text-text-secondary mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}

export function StatusBadge({
  label,
  tone = "success",
}: {
  label: string;
  tone?: "success" | "muted" | "warning";
}) {
  const dot =
    tone === "success"
      ? "bg-success"
      : tone === "warning"
        ? "bg-warning"
        : "bg-text-tertiary";
  return (
    <span className="border-border-subtle bg-glass inline-flex items-center gap-2 rounded-sm border px-2 py-1">
      <span
        className={`size-1.5 rounded-full ${dot}`}
        style={{ animation: "pulse-dot 1.8s ease-in-out infinite" }}
      />
      <span className="mono text-text-secondary text-[10px] tracking-widest uppercase">
        {label}
      </span>
    </span>
  );
}

export function MagneticLink({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.25;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.35;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const base =
    "inline-flex items-center gap-3 rounded-md px-6 py-3.5 text-sm transition-[transform,background-color,color,border-color] duration-300 will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-accent text-text-on-accent hover:bg-accent-hover"
      : "bg-glass border border-glass-stroke text-text-primary hover:border-accent";

  return (
    <a
      ref={ref}
      href={href}
      data-cursor="open"
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
