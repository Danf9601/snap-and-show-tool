import kinetikImg from "@/assets/kinetik.jpg";
import serieniaImg from "@/assets/cover-serenia.jpg";
import mobilityImg from "@/assets/cover-mobility.jpg";
import tulImg from "@/assets/cover-tul.jpg";
import snapprImg from "@/assets/cover-snappr.jpg";
import posImg from "@/assets/cover-pos.jpg";
import ontopImg from "@/assets/cover-ontop.jpg";
import commdeskImg from "@/assets/cover-commdesk.jpg";
import claudeFigmaImg from "@/assets/cover-claude-figma.jpg";
import libertyImg from "@/assets/cover-liberty.jpg";
import angelemusImg from "@/assets/cover-angelemus.jpg";

/**
 * Case-study covers. Each is an AI-generated product-mockup illustration
 * (Magnific) styled to Midnight Pro — dark ground, single cyan accent — with
 * a floating device screen that hints at what the case study actually is
 * (an app, a landing page, a POS terminal, a design canvas), rather than
 * abstract art alone.
 */

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
  const alt = `Portada del proyecto ${title}`;
  switch (cover) {
    case "kinetik":
      return <Photo src={kinetikImg} alt={alt} />;
    case "serenia":
      return <Photo src={serieniaImg} alt={alt} />;
    case "mobility":
      return <Photo src={mobilityImg} alt={alt} />;
    case "tul":
      return <Photo src={tulImg} alt={alt} />;
    case "snappr":
      return <Photo src={snapprImg} alt={alt} />;
    case "pos":
      return <Photo src={posImg} alt={alt} />;
    case "ontop":
      return <Photo src={ontopImg} alt={alt} />;
    case "commdesk":
      return <Photo src={commdeskImg} alt={alt} />;
    case "claude-figma":
      return <Photo src={claudeFigmaImg} alt={alt} />;
    case "liberty":
      return <Photo src={libertyImg} alt={alt} />;
    default:
      return <Photo src={angelemusImg} alt={alt} />;
  }
}
