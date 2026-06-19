import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  imagePosition = "center",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
}) {
  return (
    <section className="page-hero">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        loading="eager"
        sizes="100vw"
        className="page-hero-image"
        style={{ objectPosition: imagePosition }}
      />
      <div className="page-hero-shade" />
      <div className="page-hero-content reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      <a className="scroll-cue" href="#contenido" aria-label="Ir al contenido">
        <span>DESCUBRIR</span><i />
      </a>
    </section>
  );
}
