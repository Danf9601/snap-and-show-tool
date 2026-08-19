import { MagneticLink, Reveal } from "./primitives";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-40 pb-24 md:px-10 md:pt-56 md:pb-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 size-[36rem] rounded-full opacity-25 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--accent-default), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-[1400px]">
        <Reveal>
          <p className="mono text-text-accent text-xs tracking-widest">// INDEX — 000</p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-8 leading-[0.9] tracking-[-0.04em] text-[clamp(3rem,11vw,9rem)]">
            Daniel
            <br />
            Forero
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-10 border-t border-border-subtle pt-10 md:grid-cols-[1.2fr_1fr] md:gap-20">
          <Reveal delay={160}>
            <p className="max-w-xl text-xl leading-snug md:text-3xl">
              Diseño y construyo productos digitales de punta a punta — del design system al código
              en producción.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <MagneticLink href="#work">Ver trabajo</MagneticLink>
              <MagneticLink href="#contact" variant="ghost">
                Hablemos
              </MagneticLink>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <dl className="mono grid grid-cols-2 gap-x-8 gap-y-6 text-xs">
              <div>
                <dt className="label-xs">Role</dt>
                <dd className="text-text-primary mt-2 leading-relaxed">
                  Senior Frontend Engineer
                  <br />& Senior UX/UI Designer
                </dd>
              </div>
              <div>
                <dt className="label-xs">Experience</dt>
                <dd className="text-text-primary mt-2">15+ years</dd>
              </div>
              <div>
                <dt className="label-xs">Based in</dt>
                <dd className="text-text-primary mt-2">Bogotá, Colombia</dd>
              </div>
              <div>
                <dt className="label-xs">Focus</dt>
                <dd className="text-text-primary mt-2">
                  Design systems · Product UI · Frontend performance
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
