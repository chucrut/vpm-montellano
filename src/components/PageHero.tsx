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
      <div className="page-hero-media">
        <Image
          src={image}
          alt=""
          fill
          priority
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="hero-image-ambient"
          style={{ objectPosition: imagePosition }}
        />
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="hero-image-complete"
        />
      </div>
      <div className="page-hero-shade" />
      <div className="page-hero-content">
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
