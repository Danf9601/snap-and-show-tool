import { MagneticLink, Reveal, SectionHeader } from "./primitives";

const LINKS = [
  { label: "Email", value: "hola@danielforero.co", href: "mailto:hola@danielforero.co" },
  { label: "Behance", value: "behance.net/danielforero11", href: "https://www.behance.net/danielforero11" },
  { label: "LinkedIn", value: "linkedin.com/in/danielforero", href: "https://www.linkedin.com/in/danielforero" },
  { label: "GitHub", value: "github.com/danf9601", href: "https://github.com/danf9601" },
];

export function Contact() {
  return (
    <section id="contact" className="border-border-subtle border-t px-5 pt-24 pb-10 md:px-10 md:pt-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          name="CONTACT"
          index="006"
          title="¿Tienes un producto que merece estar bien construido?"
        />

        <Reveal>
          <div className="flex flex-wrap gap-3">
            <MagneticLink href="mailto:hola@danielforero.co">Escríbeme</MagneticLink>
            <MagneticLink
              href="https://www.behance.net/danielforero11"
              variant="ghost"
            >
              Ver Behance
            </MagneticLink>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="border-border-subtle mt-20 grid gap-8 border-t pt-10 md:grid-cols-4">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                data-cursor="open"
                className="group"
              >
                <div className="label-xs">{l.label}</div>
                <div className="group-hover:text-text-accent mt-2 text-sm transition-colors duration-300">
                  {l.value}
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mono text-text-tertiary border-border-subtle mt-16 flex flex-wrap items-center justify-between gap-3 border-t py-6 text-[10px] tracking-widest">
          <span>DANIEL_OS v1.0 — © {new Date().getFullYear()} DANIEL FORERO</span>
          <span>BOGOTÁ, CO · UTC−5</span>
          <span className="text-success">STATUS: AVAILABLE FOR WORK</span>
        </div>
      </div>
    </section>
  );
}
