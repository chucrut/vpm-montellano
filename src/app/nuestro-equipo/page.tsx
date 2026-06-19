import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import { team } from "@/data/site";

export const metadata: Metadata = {
  title: "Nuestro equipo",
  description: "Las personas contrastadas que representan a Vecinos por Montellano.",
  alternates: { canonical: "/nuestro-equipo" },
};

export default function NuestroEquipoPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="NUESTRO EQUIPO"
        title="Personas al servicio del pueblo."
        intro="Vecinos y profesionales que conocen Montellano porque forman parte de su día a día."
        image="/assets/header_3.png"
        imageAlt="Vista de la iglesia y el casco urbano de Montellano"
        imagePosition="right center"
      />

      <section id="contenido" className="team-intro">
        <h2 className="reveal">Un equipo cercano,<br />con responsabilidades reales.</h2>
        <div className="reveal">
          <p>
            VPM reúne a personas que aportan conocimiento, tiempo y compromiso
            desde distintos ámbitos de la vida local.
          </p>
          <p>
            Mostramos únicamente los cargos e información que han podido ser
            contrastados en fuentes públicas.
          </p>
        </div>
      </section>

      <section className="team-grid">
        {team.map((member) => (
          <article className="team-member reveal" key={member.name}>
            <div className="team-photo">
              <Image src={member.image} alt={`Retrato de ${member.name}`} fill sizes="(max-width: 760px) 100vw, 50vw" />
            </div>
            <div>
              <p>{member.role}</p>
              <h3>{member.name}</h3>
              <span>{member.description}</span>
            </div>
          </article>
        ))}
      </section>

      <section className="statement-band">
        <p className="reveal">“Representar también significa explicar, escuchar y volver a dar la cara.”</p>
        <div className="inline-links reveal">
          <Link className="text-link" href="/quienes-somos">Quiénes somos <span>↗</span></Link>
          <Link className="text-link" href="/unete">Súmate <span>↗</span></Link>
        </div>
      </section>
    </SiteShell>
  );
}
