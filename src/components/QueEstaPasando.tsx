import Image from "next/image";

const noticias = [
  {
    title: "Presentación oficial de la candidatura",
    date: "15 junio 2026",
    location: "Plaza del Ayuntamiento",
    time: "20:00",
    excerpt: "Te invitamos a conocer a todo el equipo y nuestras líneas principales de trabajo.",
    tag: "Evento",
  },
  {
    title: "VPM recoge las propuestas de los vecinos",
    date: "10 junio 2026",
    location: "Centro Cultural",
    time: "18:00",
    excerpt: "Más de 200 vecinos participaron en nuestra jornada de escucha activa.",
    tag: "Noticia",
  },
  {
    title: "Compromiso con el comercio local",
    date: "5 junio 2026",
    location: "Mercado de Abastos",
    time: "11:00",
    excerpt: "Nos reunimos con la asociación de comerciantes para diseñar juntos un plan de revitalización.",
    tag: "Noticia",
  },
];

export default function QueEstaPasando() {
  return (
    <section id="que-esta-pasando" className="py-20 sm:py-28 lg:py-40 px-5 sm:px-8 lg:px-12 bg-offwhite">
      <div className="max-w-[90rem] mx-auto">
        <div className="reveal mb-14 lg:mb-20">
          <span className="text-label text-gold mb-5 sm:mb-7 block">
            Qué Está Pasando
          </span>
          <h2 className="font-heading font-medium text-text leading-[1.12]">
            Noticias y eventos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {noticias.map((n) => (
            <article
              key={n.title}
              className="group bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 reveal"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src="/assets/spot_4.png"
                  alt={n.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute top-4 left-4 text-[11px] tracking-[0.15em] uppercase font-semibold bg-gold text-primary px-3 py-1.5">
                  {n.tag}
                </span>
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] tracking-wider uppercase text-muted mb-4 font-medium">
                  <span>{n.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{n.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{n.time}</span>
                </div>
                <h3 className="text-base sm:text-lg font-heading font-semibold text-text mb-2 group-hover:text-gold transition-colors duration-300">
                  {n.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">{n.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
