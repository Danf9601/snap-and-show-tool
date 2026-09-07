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

const SITE_URL = "https://daniel.globalkinetik.com/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
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
            url: SITE_URL,
            image: "https://daniel.globalkinetik.com/og-image.jpg",
            jobTitle: "Senior UX/UI Designer & Front End Developer",
            email: "mailto:danf9601@gmail.com",
            address: { "@type": "PostalAddress", addressLocality: "Bogotá", addressCountry: "CO" },
            knowsAbout: [
              "UX Design",
              "UI Design",
              "Design Systems",
              "Front-End Development",
              "AI-driven workflow automation",
            ],
            sameAs: [
              "https://www.behance.net/danielforero11",
              "https://github.com/danf9601",
              "https://www.linkedin.com/in/danielforero-uxdesigner/",
            ],
          }),
        }}
      />
    </>
  );
}
