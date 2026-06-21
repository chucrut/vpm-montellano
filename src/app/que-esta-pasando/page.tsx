import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import SocialIcons from "@/components/SocialIcons";
import { updates } from "@/data/site";

export const metadata: Metadata = {
  title: "Qué está pasando",
  description: "Actualidad, publicaciones y asuntos públicos de Vecinos por Montellano.",
  alternates: { canonical: "/que-esta-pasando" },
};

export default function QueEstaPasandoPage() {
  const [featured, ...items] = updates;

  return (
    <SiteShell>
      <PageHero
        eyebrow="QUÉ ESTÁ PASANDO"
        title="El pueblo, en movimiento."
        intro="Actualidad, asuntos públicos y conversaciones que importan en Montellano."
        image="/assets/header_2.png"
        imageAlt="Vista panorámica ilustrada de Montellano"
        imagePosition="right center"
      />

      <section id="contenido" className="featured-update">
        <div className={`featured-update-image is-${featured.imageFit} reveal`}>
          <Image
            src={featured.image}
            alt={`Publicación de VPM: ${featured.title}`}
            fill
            sizes="(max-width: 900px) 100vw, 58vw"
          />
        </div>
        <div className="featured-update-copy reveal">
          <p className="eyebrow">{featured.category}</p>
          <h2>{featured.title}</h2>
          <p>{featured.excerpt}</p>
          <a className="text-link" href={featured.href} target="_blank" rel="noreferrer">Ver publicación <span>↗</span></a>
        </div>
      </section>

      <section className="newsroom">
        <div className="newsroom-heading reveal">
          <p className="eyebrow">ACTUALIDAD VPM</p>
          <h2>Una selección para entender el presente.</h2>
        </div>
        <div className="news-grid">
          {items.map((item) => (
            <article className="news-item reveal" key={item.title}>
              <a className="news-card" href={item.href} target="_blank" rel="noreferrer">
                <div className={`news-image is-${item.imageFit}`}>
                  <Image
                    src={item.image}
                    alt={`Publicación de VPM: ${item.title}`}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                  {item.video && <span className="video-badge">▶ VÍDEO</span>}
                </div>
                <div className="news-card-body">
                  <p>{item.category}</p>
                  <h3>{item.title}</h3>
                  <span>{item.excerpt}</span>
                  <i aria-hidden="true">↗</i>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="video-feature">
        <div className="video-copy reveal">
          <p className="eyebrow">VÍDEO · PLENO MUNICIPAL</p>
          <h2>La transparencia también se ejerce en voz alta.</h2>
          <p>Intervención pública enlazada desde el canal oficial de VPM en Facebook.</p>
          <a className="text-link light" href="https://www.facebook.com/vecinospormontellano/videos/4329589333950842/" target="_blank" rel="noreferrer">Ver vídeo completo <span>↗</span></a>
        </div>
        <a className="video-poster reveal" href="https://www.facebook.com/vecinospormontellano/videos/4329589333950842/" target="_blank" rel="noreferrer" aria-label="Ver vídeo del pleno en Facebook">
          <Image src="/assets/news/pleno-municipal.jpg" alt="Pleno municipal de Montellano" fill sizes="(max-width: 900px) 100vw, 55vw" />
          <span>▶</span>
        </a>
      </section>

      <section className="social-follow" id="canales">
        <p className="eyebrow reveal">SIGUE LA CONVERSACIÓN</p>
        <h2 className="reveal">La actualidad continúa en nuestros canales.</h2>
        <SocialIcons />
      </section>
    </SiteShell>
  );
}
