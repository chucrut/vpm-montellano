import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import SiteShell from "@/components/SiteShell";
import { updates } from "@/data/site";

const primaryLinks = [
  { title: "Quiénes somos", href: "/quienes-somos", image: "/assets/header_3.png" },
  { title: "Nuestra propuesta", href: "/nuestra-propuesta", image: "/assets/header.png" },
];

const destinations = [
  { title: "Nuestro equipo", href: "/nuestro-equipo", image: "/assets/team/jose-ignacio-ceballos.jpg" },
  { title: "Te escuchamos", href: "/te-escuchamos", image: "/assets/team/jose-antonio-martinez.jpg" },
  { title: "Únete", href: "/unete", image: "/assets/header_2.png" },
];

const values = [
  ["Cercanía", "Escuchar antes de decidir."],
  ["Transparencia", "Explicar y rendir cuentas."],
  ["Responsabilidad", "Trabajar con rigor."],
  ["Participación", "Abrir espacio a más voces."],
  ["Montellano", "Cuidar lo que compartimos."],
];

export default function Home() {
  return (
    <SiteShell>
      <HomeHero />

      <section id="introduccion" className="editorial-intro">
        <div className="intro-lead reveal">
          <h2>Una forma cercana de entender lo público.</h2>
          <p className="section-label">VECINOS POR MONTELLANO<br />MONTELLANO · SEVILLA</p>
        </div>
        <div className="intro-copy reveal">
          <p>
            Vecinos por Montellano es un proyecto local que nace para escuchar,
            trabajar y rendir cuentas desde el lugar que compartimos.
          </p>
          <p>
            Reunimos experiencia vecinal y voluntad de servicio para cuidar el
            presente sin dejar de pensar en el futuro del pueblo.
          </p>
          <Link className="text-link" href="/quienes-somos">Conoce el proyecto <span>→</span></Link>
        </div>
      </section>

      <section className="home-primary-grid" aria-label="Principales áreas de la web">
        {primaryLinks.map((item) => (
          <Link className="home-primary-card reveal" href={item.href} key={item.href}>
            <Image src={item.image} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" />
            <span>{item.title}</span>
          </Link>
        ))}
      </section>

      <section className="home-projects">
        <div className="home-projects-heading reveal">
          <p className="eyebrow">QUÉ ESTÁ PASANDO</p>
          <p>Una selección de asuntos, publicaciones y conversaciones de VPM.</p>
        </div>
        <div className="home-projects-grid">
          {updates.slice(0, 3).map((item, index) => (
            <a className={`home-project home-project-${index + 1} reveal`} href={item.href} target="_blank" rel="noreferrer" key={item.title}>
              <div>
                <Image src={item.image} alt="" fill sizes="(max-width: 700px) 100vw, 38vw" />
              </div>
              <span>{item.title}</span>
            </a>
          ))}
        </div>
        <Link className="text-link home-all-link reveal" href="/que-esta-pasando">Ver toda la actualidad <span>→</span></Link>
      </section>

      <section className="home-values">
        <h2 className="reveal">Lo que guía nuestro trabajo...</h2>
        <div className="home-values-grid">
          {values.map(([title, description]) => (
            <article className="reveal" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-destinations">
        <div className="reveal">
          <p className="eyebrow">VPM · DONDE EL PUEBLO SE ENCUENTRA</p>
          <h2>Conoce, habla<br />y participa.</h2>
        </div>
        <div className="home-destination-grid">
          {destinations.map((item) => (
            <Link className="home-destination-card reveal" href={item.href} key={item.href}>
              <Image src={item.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="closing-visual">
        <Image src="/assets/header.png" alt="Paisaje de Montellano" fill sizes="100vw" style={{ objectPosition: "right center" }} />
        <div className="closing-visual-overlay" />
        <div className="reveal">
          <p className="eyebrow">TU TIEMPO TAMBIÉN CUENTA</p>
          <h2>Montellano se mueve cuando sus vecinos participan.</h2>
          <Link className="text-link light" href="/unete">Únete <span>→</span></Link>
        </div>
      </section>
    </SiteShell>
  );
}
