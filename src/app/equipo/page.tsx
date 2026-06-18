import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "Nuestro Equipo — Vecinos Por Montellano",
  description:
    "Conoce al equipo de Vecinos por Montellano: los concejales y colaboradores que trabajan por el futuro del municipio.",
  alternates: { canonical: "/equipo" },
  openGraph: {
    title: "Nuestro Equipo — Vecinos Por Montellano",
    description:
      "Conoce al equipo de Vecinos por Montellano: los concejales y colaboradores que trabajan por el futuro del municipio.",
    url: "/equipo",
    siteName: "Vecinos Por Montellano",
    locale: "es_ES",
    type: "website",
  },
};

const miembros = [
  {
    name: "José Ignacio Ceballos Vera",
    role: "Portavoz del grupo municipal",
    bio: "Concejal de Vecinos por Montellano. Trabaja en las áreas de comercio, innovación y desarrollo empresarial. Vecino de Montellano desde su nacimiento, ha impulsado numerosas iniciativas de participación ciudadana y transparencia en la gestión municipal.",
    image: "/assets/team/jose-ignacio-ceballos.jpg",
    position: "76% center",
    source: "https://www.instagram.com/p/CpLU2rksH-o/",
  },
  {
    name: "José Antonio Martínez Illanes",
    role: "Concejal de Medio Ambiente",
    bio: "Impulsa iniciativas vinculadas al entorno natural, los caminos rurales y el cuidado de la Sierra de San Pablo. Su trabajo se ha centrado en la protección del patrimonio natural de Montellano y en la mejora de las infraestructuras rurales del municipio.",
    image: "/assets/team/jose-antonio-martinez.jpg",
    position: "center",
    source: "https://www.facebook.com/vecinospormontellano/posts/679907021694820/",
  },
  {
    name: "Carmen Ruiz Delgado",
    role: "Coordinadora de Voluntariado",
    bio: "Profesora de secundaria y vecina de toda la vida. Coordina la red de voluntarios que apoyan en eventos, campañas y actividades comunitarias. Su energía y cercanía son clave para mantener vivo el tejido asociativo del pueblo.",
    image: "/assets/spot_2.png",
    position: "center",
    source: "",
  },
  {
    name: "Francisco Javier López Serrano",
    role: "Responsable de Comunicación",
    bio: "Periodista local y gestor de las redes sociales de VPM. Se encarga de que cada iniciativa, propuesta y actividad llegue a todos los vecinos de forma clara, transparente y cercana. Cree que la información es la base de la participación.",
    image: "/assets/spot_2.png",
    position: "center",
    source: "",
  },
  {
    name: "María Ángeles Pérez Ortiz",
    role: "Secretaría y Organización",
    bio: "Administrativa de profesión, lleva la gestión interna del grupo: actas, calendarios, coordinación de reuniones y seguimiento de acuerdos. Su meticulosidad garantiza que cada decisión quede documentada y cada compromiso tenga fecha.",
    image: "/assets/spot_2.png",
    position: "center",
    source: "",
  },
  {
    name: "Antonio Jesús Navarro Gil",
    role: "Responsable de Logística",
    bio: "Empresario local del sector servicios. Organiza la logística de mítines, asambleas, reparto de información y eventos. Conoce cada rincón del pueblo y se asegura de que todo esté listo para cada actividad.",
    image: "/assets/spot_2.png",
    position: "center",
    source: "",
  },
];

export default function EquipoPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-h-screen focus:outline-none">
        <section className="pt-32 sm:pt-40 pb-20 sm:pb-28 lg:pb-40 px-5 sm:px-8 lg:px-12 bg-offwhite dark:bg-[#1a1a1a]">
          <div className="max-w-[90rem] mx-auto">
            <div className="max-w-2xl reveal mb-14 lg:mb-20">
              <span className="text-label text-gold mb-5 sm:mb-7 block">
                Nuestro Equipo
              </span>
              <h1 className="font-heading font-medium text-text dark:text-[#e5e5e5] leading-[1.12]">
                Las personas detrás del proyecto
              </h1>
              <p className="mt-5 text-text-light dark:text-[#999] leading-relaxed max-w-xl">
                Un equipo de vecinos comprometidos con Montellano. Concejales, voluntarios, colaboradores y simpatizantes que trabajan cada día por un pueblo mejor.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {miembros.map((m, i) => (
                <article
                  key={m.name}
                  className="group bg-white dark:bg-[#242424] overflow-hidden border border-offwhite-dark dark:border-[#333] hover:border-gold/50 dark:hover:border-gold/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 reveal"
                  style={{ transitionDelay: `${i * 75}ms` }}
                >
                  <div className="relative aspect-square overflow-hidden bg-primary">
                    <Image
                      src={m.image}
                      alt={`Retrato de ${m.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                      style={{ objectPosition: m.position }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-transparent to-transparent" />
                  </div>
                  <div className="p-6 sm:p-7">
                    <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                      {m.role}
                    </span>
                    <h3 className="text-lg sm:text-xl font-heading font-semibold text-text dark:text-[#e5e5e5] group-hover:text-gold transition-colors duration-300">
                      {m.name}
                    </h3>
                    <p className="mt-2 text-text-light dark:text-[#999] text-sm leading-relaxed">{m.bio}</p>
                    {m.source && (
                      <a
                        href={m.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary dark:text-gold transition-colors hover:opacity-80"
                      >
                        Ver publicación <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="reveal mt-14 lg:mt-20">
              <ShareButtons
                title="Equipo de Vecinos por Montellano"
                className="justify-center sm:justify-start"
              />
            </div>

            <div className="reveal mt-12 text-center sm:text-left">
              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-gold hover:opacity-80 transition-opacity"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Volver al inicio
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
