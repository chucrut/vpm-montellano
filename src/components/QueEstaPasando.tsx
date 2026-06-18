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
    <section id="que-esta-pasando" className="py-28 lg:py-40 px-6 lg:px-20 bg-cream">
      <div className="max-w-[96rem] mx-auto">
        <div className="reveal mb-16 lg:mb-20">
          <span className="text-gold-dark text-xs tracking-[.25em] uppercase font-semibold mb-6 block">
            Qué Está Pasando
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-[1.15] tracking-tight text-balance">
            Noticias y eventos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {noticias.map((n) => (
            <article
              key={n.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 reveal"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/assets/spot_4.png"
                  alt={n.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 text-[10px] tracking-[.15em] uppercase font-bold bg-gold text-navy-deep px-3 py-1.5 rounded-full">
                  {n.tag}
                </span>
              </div>
              <div className="p-6 lg:p-7">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] tracking-wide uppercase text-gray-400 mb-3 font-medium">
                  <span>{n.date}</span>
                  <span>{n.location}</span>
                  <span>{n.time}</span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-gold-dark transition-colors duration-300">
                  {n.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{n.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
