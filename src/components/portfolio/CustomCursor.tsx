import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;

    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const target = (e.target as HTMLElement)?.closest?.("[data-cursor]");
      setLabel(target ? (target.getAttribute("data-cursor") ?? null) : null);
    };

    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[70] hidden md:block"
    >
      <div
        className={`border-accent bg-accent/10 mono text-accent -translate-x-1/2 -translate-y-1/2 rounded-full border text-[9px] tracking-widest uppercase transition-all duration-300 ${
          label
            ? "flex size-16 items-center justify-center backdrop-blur-sm"
            : "bg-accent size-2 border-0"
        }`}
      >
        {label}
      </div>
    </div>
  );
}
