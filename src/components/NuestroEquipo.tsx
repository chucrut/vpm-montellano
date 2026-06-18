import Image from "next/image";

const team = [
  {
    name: "José Ignacio Ceballos Vera",
    role: "Portavoz del grupo municipal",
    bio: "Concejal de Vecinos por Montellano. Trabaja en las áreas de comercio, innovación y desarrollo empresarial.",
    image: "/assets/team/jose-ignacio-ceballos.jpg",
    position: "76% center",
    source: "https://www.instagram.com/p/CpLU2rksH-o/",
  },
  {
    name: "José Antonio Martínez Illanes",
    role: "Concejal de Medio Ambiente",
    bio: "Impulsa iniciativas vinculadas al entorno natural, los caminos rurales y el cuidado de la Sierra de San Pablo.",
    image: "/assets/team/jose-antonio-martinez.jpg",
    position: "center",
    source: "https://www.facebook.com/vecinospormontellano/posts/679907021694820/",
  },
  {
    name: "Carmen Ruiz Delgado",
    role: "Coordinadora de Voluntariado",
    bio: "Profesora de secundaria y vecina de toda la vida. Coordina la red de voluntarios que apoyan en eventos y campañas.",
    image: "/assets/spot_2.png",
    position: "center",
    source: "",
  },
  {
    name: "Francisco Javier López Serrano",
    role: "Responsable de Comunicación",
    bio: "Periodista local. Gestiona las redes sociales y se asegura de que cada iniciativa llegue a todos los vecinos.",
    image: "/assets/spot_2.png",
    position: "center",
    source: "",
  },
];

export default function NuestroEquipo() {
  return (
    <section id="nuestro-equipo" className="py-20 sm:py-28 lg:py-40 px-5 sm:px-8 lg:px-12 bg-offwhite dark:bg-[#1a1a1a]">
      <div className="max-w-[90rem] mx-auto">
        <div className="max-w-2xl reveal mb-14 lg:mb-20">
          <span className="text-label text-gold mb-5 sm:mb-7 block">
            Nuestro Equipo
          </span>
          <h2 className="font-heading font-medium text-text dark:text-[#e5e5e5] leading-[1.12]">
            Las personas detrás del proyecto
          </h2>
          <p className="mt-5 text-text-light dark:text-[#999] leading-relaxed max-w-xl">
            Los representantes de Vecinos por Montellano en la corporación municipal 2023–2027 y las personas que hacen posible el proyecto.
          </p>
        </div>

        <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {team.map((m, i) => (
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
                  sizes="(max-width: 640px) 100vw, 50vw"
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

        <div className="reveal mt-8 text-center sm:text-left">
          <a
            href="/equipo"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-gold hover:opacity-80 transition-opacity"
          >
            Ver todo el equipo
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
