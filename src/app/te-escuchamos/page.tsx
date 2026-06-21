import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import MobileHorizontalScroller from "@/components/MobileHorizontalScroller";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import SocialIcons from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Te escuchamos",
  description: "Envía una idea, preocupación o propuesta a Vecinos por Montellano.",
  alternates: { canonical: "/te-escuchamos" },
};

export default function TeEscuchamosPage() {
  return (
    <SiteShell>
      <MobileHorizontalScroller label="Te escuchamos">
        <PageHero
          eyebrow="TE ESCUCHAMOS"
          title="Tu experiencia también es una propuesta."
          intro="Cuéntanos qué ves, qué falta y qué cambiarías en Montellano."
          image="/assets/header_3.png"
          imageAlt="Vista de la iglesia y el casco urbano de Montellano"
          imagePosition="right center"
        />

      <section id="contenido" className="listening-intro">
        <div className="reveal">
          <p className="eyebrow">ESCUCHAR ANTES DE PROPONER</p>
          <h2>Las mejores decisiones empiezan con una conversación.</h2>
        </div>
        <p className="reveal">
          Puedes escribirnos sobre una calle, un servicio, una idea para tu sector
          o cualquier asunto que afecte a la vida del pueblo. Leeremos cada mensaje.
        </p>
      </section>

        <section className="form-section">
          <div className="form-aside reveal">
            <span>01</span>
            <h2>Cuéntanoslo<br />con calma.</h2>
            <p>Los datos de contacto oficiales adicionales están pendientes de confirmación.</p>
            <SocialIcons includePlaceholders={false} />
          </div>
          <div className="reveal"><ContactForm /></div>
        </section>

        <section className="social-follow">
          <p className="eyebrow reveal">CANALES OFICIALES</p>
          <h2 className="reveal">También puedes encontrarnos en nuestros canales.</h2>
          <SocialIcons includePlaceholders={false} />
        </section>

        <section className="statement-band">
          <p className="reveal">“Las mejores decisiones empiezan con una conversación.”</p>
          <Link className="text-link light reveal" href="/unete">Forma parte del proyecto <span>↗</span></Link>
        </section>
      </MobileHorizontalScroller>
    </SiteShell>
  );
}
