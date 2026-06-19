import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JoinForm from "@/components/JoinForm";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Únete",
  description: "Colabora y participa en Vecinos por Montellano.",
  alternates: { canonical: "/unete" },
};

const pathways = [
  "Recibir información",
  "Ayudar en redes",
  "Participar en actos",
  "Aportar desde mi sector",
  "Colaborar con el equipo",
  "Compartir tiempo e ideas",
];

export default function UnetePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="ÚNETE"
        title="Hay muchas formas de estar cerca."
        intro="Participa con tu tiempo, tus ideas o tu experiencia."
        image="/assets/header.png"
        imageAlt="Paisaje y casco urbano de Montellano"
        imagePosition="right center"
      />

      <section id="contenido" className="participation-intro">
        <p className="eyebrow reveal">PARTICIPAR IMPORTA</p>
        <h2 className="reveal">Un proyecto local crece cuando más vecinos encuentran su forma de aportar.</h2>
        <p className="reveal">
          No hace falta tener experiencia política. Hace falta conocer Montellano,
          querer cuidarlo y encontrar una manera responsable de sumar.
        </p>
      </section>

      <section className="pathways-section">
        <div className="pathways-heading reveal"><span>01</span><h2>Elige tu manera<br />de colaborar.</h2></div>
        <ol>
          {pathways.map((pathway, index) => (
            <li className="reveal" key={pathway}><span>0{index + 1}</span><p>{pathway}</p><i>↗</i></li>
          ))}
        </ol>
      </section>

      <section className="join-form-section">
        <div className="join-form-copy reveal">
          <p className="eyebrow">DA EL PRIMER PASO</p>
          <h2>Cuéntanos cómo quieres participar.</h2>
          <p>El canal oficial de WhatsApp está pendiente de confirmación; mientras tanto puedes usar este formulario.</p>
        </div>
        <div className="reveal"><JoinForm /></div>
      </section>

      <section className="closing-visual compact">
        <Image src="/assets/header.png" alt="Paisaje de Montellano" fill sizes="100vw" />
        <div className="closing-visual-overlay" />
        <div className="reveal">
          <p className="eyebrow">UN PROYECTO DE PERSONAS</p>
          <h2>Conoce a quienes ya están trabajando.</h2>
          <Link className="text-link light" href="/nuestro-equipo">Nuestro equipo <span>↗</span></Link>
        </div>
      </section>
    </SiteShell>
  );
}
