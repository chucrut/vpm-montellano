import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MobileHorizontalScroller from "@/components/MobileHorizontalScroller";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import { proposalAreas } from "@/data/site";

export const metadata: Metadata = {
  title: "Nuestra propuesta",
  description: "Una visión de futuro y áreas de trabajo para Montellano.",
  alternates: { canonical: "/nuestra-propuesta" },
};

export default function NuestraPropuestaPage() {
  return (
    <SiteShell>
      <MobileHorizontalScroller label="Nuestra propuesta">
        <PageHero
          eyebrow="NUESTRA PROPUESTA"
          title="Pensar lejos. Actuar cerca."
          intro="Una visión de Montellano construida a partir de prioridades concretas."
          image="/assets/header.png"
          imageAlt="Paisaje y casco urbano de Montellano"
          imagePosition="right center"
        />

        <div className="vision-panel-group">
          <section id="contenido" className="vision-section">
            <p className="eyebrow reveal">MONTELLANO 2037</p>
            <h2 className="reveal">El futuro no llega de una vez.<br />Se decide cada día.</h2>
            <div className="vision-copy reveal">
              <p>
                Nuestra propuesta organiza el trabajo municipal alrededor del cuidado
                del pueblo, las oportunidades, la participación y una gestión abierta.
              </p>
              <p>
                No es un catálogo cerrado: es una conversación que debe crecer con la
                experiencia y las ideas de los vecinos.
              </p>
            </div>
          </section>

          <nav className="proposal-filters reveal" aria-label="Áreas de la propuesta">
            <span>Todas</span>
            {proposalAreas.map((proposal) => <span key={proposal.category}>{proposal.category}</span>)}
          </nav>
        </div>

      <section className="proposal-gallery">
        {proposalAreas.map((proposal) => (
          <article className="proposal-project reveal" key={proposal.title}>
            <div className="proposal-image">
              <Image
                src={proposal.image}
                alt=""
                fill
                sizes="(max-width: 760px) 100vw, 33vw"
                className={proposal.image.includes("/spot_") ? "contain-image" : undefined}
              />
            </div>
            <div className="proposal-caption">
              <span>{proposal.category}</span>
              <h3>{proposal.title}</h3>
              <p>{proposal.description}</p>
            </div>
          </article>
        ))}
      </section>

        <section className="editorial-cta">
          <p className="eyebrow reveal">UNA PROPUESTA ABIERTA</p>
          <h2 className="reveal">¿Qué necesita tu calle, tu barrio o tu sector?</h2>
          <Link className="text-link reveal" href="/te-escuchamos">Cuéntanoslo <span>↗</span></Link>
        </section>
      </MobileHorizontalScroller>
    </SiteShell>
  );
}
