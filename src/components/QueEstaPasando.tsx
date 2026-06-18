import Image from "next/image";

const noticias = [
  {
    title: "120.634,72 € para mejorar caminos rurales",
    meta: "Caminos rurales",
    excerpt: "Tres actuaciones trabajadas durante la etapa de VPM al frente de Medio Ambiente reciben financiación.",
    platform: "Facebook",
    image: "/assets/news/caminos-rurales.jpg",
    position: "center",
    href: "https://www.facebook.com/vecinospormontellano/posts/930249613327225/",
  },
  {
    title: "Avances para las colonias felinas de Montellano",
    meta: "Bienestar animal",
    excerpt: "El Pleno aprueba el convenio y el registro municipal de colonias felinas tras más de un año de trabajo.",
    platform: "Facebook",
    image: "/assets/news/colonias-felinas.jpg",
    position: "center",
    href: "https://www.facebook.com/vecinospormontellano/posts/723591780659677/",
  },
  {
    title: "Control y transparencia en el gasto municipal",
    meta: "Intervención en el Pleno",
    excerpt: "José Ignacio Ceballos pide explicaciones sobre facturas, contratos y procedimientos reflejados en los informes municipales.",
    platform: "Facebook · Vídeo",
    image: "/assets/news/pleno-municipal.jpg",
    position: "center",
    href: "https://www.facebook.com/vecinospormontellano/videos/4329589333950842/",
  },
];

export default function QueEstaPasando() {
  return (
    <section id="que-esta-pasando" className="bg-offwhite px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-40">
      <div className="max-w-[90rem] mx-auto">
        <div className="reveal mb-12 grid gap-6 lg:mb-16 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="text-label mb-5 block text-gold">Qué está pasando</span>
            <h2 className="text-text">Últimas publicaciones</h2>
          </div>
          <p className="max-w-xl text-text-light lg:justify-self-end">
            Actividad municipal, propuestas e iniciativas publicadas en nuestros canales oficiales.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {noticias.map((n) => (
            <a
              key={n.title}
              href={n.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${n.title}. Abrir publicación en ${n.platform}`}
              className="group flex min-w-0 flex-col overflow-hidden bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg reveal"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-primary-dark">
                <Image
                  src={n.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  style={{ objectPosition: n.position }}
                />
                <span className="absolute left-4 top-4 bg-primary px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                  {n.platform}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">{n.meta}</p>
                <h3 className="mt-3 text-xl font-heading font-semibold text-text group-hover:text-primary transition-colors duration-300">
                  {n.title}
                </h3>
                <p className="mt-2 text-text-light text-sm leading-relaxed">{n.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  Ver publicación <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="reveal mt-10 flex flex-wrap gap-3">
          {[
            ["Facebook", "https://www.facebook.com/vecinospormontellano/"],
            ["Instagram", "https://www.instagram.com/vecinospormontellano/"],
            ["TikTok", "https://www.tiktok.com/@vecinos.por.monte"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center border border-primary/15 px-5 text-xs font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
            >
              Ver todo en {label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
