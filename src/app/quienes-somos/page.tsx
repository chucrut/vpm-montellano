import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MobileHorizontalScroller from "@/components/MobileHorizontalScroller";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description: "Origen, identidad y principios de Vecinos por Montellano.",
  alternates: { canonical: "/quienes-somos" },
};

const values = [
  ["01", "Cercanía", "Escuchar antes de decidir y mantener el trabajo político unido a la calle."],
  ["02", "Transparencia", "Explicar las decisiones, fiscalizar y facilitar información comprensible."],
  ["03", "Responsabilidad", "Dedicar tiempo y experiencia al pueblo con seriedad y vocación de servicio."],
  ["04", "Participación", "Abrir espacio a ideas y conocimientos que ya existen entre los vecinos."],
];

export default function QuienesSomosPage() {
  return (
    <SiteShell>
      <MobileHorizontalScroller label="Quiénes somos">
        <PageHero
          eyebrow="QUIÉNES SOMOS"
          title="Un proyecto nacido cerca."
          intro="Vecinos que comparten pueblo, preocupaciones y voluntad de trabajar."
          image="/assets/header_2.png"
          imageAlt="Vista panorámica ilustrada de Montellano"
          imagePosition="right center"
        />

      <section id="contenido" className="editorial-story">
        <div className="story-title reveal">
          <p className="eyebrow">NUESTRO ORIGEN</p>
          <h2>La política local vuelve a pertenecer a sus vecinos.</h2>
        </div>
        <div className="story-copy reveal">
          <p>
            Vecinos por Montellano nace de la convicción de que nuestro pueblo
            merece una gestión cercana, transparente y conectada con la vida real.
          </p>
          <p>
            Somos vecinos y profesionales que viven de su trabajo y quieren
            dedicar tiempo, experiencia y responsabilidad a Montellano.
          </p>
        </div>
      </section>

      <section className="values-section">
        <div className="section-heading reveal">
          <p className="eyebrow">LO QUE NOS GUÍA</p>
          <h2>Principios sencillos.<br />Compromiso cotidiano.</h2>
        </div>
        <div className="values-grid">
          {values.map(([number, title, copy]) => (
            <article className="value-item reveal" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="difference-section">
        <div className="difference-image reveal">
          <Image src="/assets/header_2.png" alt="Panorámica ilustrada de Montellano" fill sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
        <div className="difference-copy reveal">
          <p className="eyebrow">LO QUE NOS HACE DIFERENTES</p>
          <h2>Con los pies en Montellano.</h2>
          <p>
            El proyecto se construye desde la experiencia de quienes conocen sus
            calles, su campo, sus comercios y sus servicios porque forman parte de ellos.
          </p>
          <div className="inline-links">
            <Link className="text-link" href="/nuestro-equipo">Conoce al equipo <span>↗</span></Link>
            <Link className="text-link" href="/unete">Participa <span>↗</span></Link>
          </div>
        </div>
      </section>

        <section className="statement-band">
          <p className="reveal">“Lo público funciona mejor cuando permanece cerca de la gente.”</p>
        </section>
      </MobileHorizontalScroller>
    </SiteShell>
  );
}
