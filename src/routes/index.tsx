import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/portfolio/TopBar";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Hero } from "@/components/portfolio/Hero";
import { Work } from "@/components/portfolio/Work";
import { UILab } from "@/components/portfolio/UILab";
import { DesignSystems } from "@/components/portfolio/DesignSystems";
import { Expertise } from "@/components/portfolio/Expertise";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";

const TITLE = "Daniel Forero — Senior UX/UI Designer & Front End Developer";
const DESCRIPTION =
  "Portafolio de Daniel Forero, Bogotá: 8+ años diseñando y construyendo productos digitales, del design system al código en producción.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <CustomCursor />
      <TopBar />
      <main>
        <Hero />
        <Work />
        <UILab />
        <DesignSystems />
        <Expertise />
        <About />
        <Contact />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Daniel Forero",
            jobTitle: "Senior UX/UI Designer & Front End Developer",
            address: { "@type": "PostalAddress", addressLocality: "Bogotá", addressCountry: "CO" },
            sameAs: [
              "https://www.behance.net/danielforero11",
              "https://github.com/danf9601",
            ],
          }),
        }}
      />
    </>
  );
}
