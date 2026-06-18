import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "Actualidad — Vecinos Por Montellano",
  description:
    "Últimas noticias y publicaciones de Vecinos por Montellano. Actividad municipal, propuestas e iniciativas en nuestros canales oficiales.",
  alternates: { canonical: "/actualidad" },
  openGraph: {
    title: "Actualidad — Vecinos Por Montellano",
    description:
      "Últimas noticias y publicaciones de Vecinos por Montellano. Actividad municipal, propuestas e iniciativas en nuestros canales oficiales.",
    url: "/actualidad",
    siteName: "Vecinos Por Montellano",
    locale: "es_ES",
    type: "website",
  },
};

interface NoticiaItem {
  title: string;
  fecha: string;
  lugar: string;
  hora: string;
  meta: string;
  excerpt: string;
  descripcion: string;
  platform: string;
  image: string;
  position: string;
  href: string;
}

const noticias: NoticiaItem[] = [
  {
    title: "120.634,72 € para mejorar caminos rurales",
    fecha: "15 de junio de 2025",
    lugar: "Montellano",
    hora: "10:00",
    meta: "Caminos rurales",
    excerpt: "Tres actuaciones trabajadas durante la etapa de VPM al frente de Medio Ambiente reciben financiación.",
    descripcion:
      "La Diputación de Sevilla ha aprobado una partida de 120.634,72 euros para la mejora de tres caminos rurales del término municipal de Montellano. Las actuaciones, que incluyen el arreglo del firme, la limpieza de cunetas y la señalización, fueron impulsadas durante la etapa de Vecinos por Montellano al frente de la concejalía de Medio Ambiente. Las obras comenzarán en las próximas semanas y beneficiarán a decenas de agricultores y vecinos de la zona.",
    platform: "Facebook",
    image: "/assets/news/caminos-rurales.jpg",
    position: "center",
    href: "https://www.facebook.com/vecinospormontellano/posts/930249613327225/",
  },
  {
    title: "Avances para las colonias felinas de Montellano",
    fecha: "22 de mayo de 2025",
    lugar: "Salón de Plenos, Ayuntamiento de Montellano",
    hora: "19:30",
    meta: "Bienestar animal",
    excerpt: "El Pleno aprueba el convenio y el registro municipal de colonias felinas tras más de un año de trabajo.",
    descripcion:
      "El Pleno del Ayuntamiento de Montellano ha aprobado por unanimidad el convenio de colaboración para la gestión de las colonias felinas del municipio. Este acuerdo, que establece el registro oficial de colonias y el protocolo CER (Captura, Esterilización y Retorno), es fruto de más de un año de trabajo conjunto entre el grupo municipal de Vecinos por Montellano, las asociaciones protectoras y los voluntarios que alimentan y cuidan a los gatos comunitarios.",
    platform: "Facebook",
    image: "/assets/news/colonias-felinas.jpg",
    position: "center",
    href: "https://www.facebook.com/vecinospormontellano/posts/723591780659677/",
  },
  {
    title: "Control y transparencia en el gasto municipal",
    fecha: "10 de abril de 2025",
    lugar: "Salón de Plenos, Ayuntamiento de Montellano",
    hora: "19:00",
    meta: "Intervención en el Pleno",
    excerpt: "José Ignacio Ceballos pide explicaciones sobre facturas, contratos y procedimientos reflejados en los informes municipales.",
    descripcion:
      "Durante la última sesión plenaria, el portavoz de Vecinos por Montellano, José Ignacio Ceballos, solicitó explicaciones detalladas sobre diversas partidas de gasto recogidas en los informes de intervención municipal. Ceballos pidió acceso a los expedientes de contratación y a las facturas relacionadas con servicios externalizados, insistiendo en la necesidad de garantizar la máxima transparencia en la gestión de los recursos públicos.",
    platform: "Facebook · Vídeo",
    image: "/assets/news/pleno-municipal.jpg",
    position: "center",
    href: "https://www.facebook.com/vecinospormontellano/videos/4329589333950842/",
  },
];

const redesSociales = [
  { label: "Facebook", href: "https://www.facebook.com/vecinospormontellano/" },
  { label: "Instagram", href: "https://www.instagram.com/vecinospormontellano/" },
  { label: "TikTok", href: "https://www.tiktok.com/@vecinos.por.monte" },
];

export default function ActualidadPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-h-screen focus:outline-none">
        <section className="pt-32 sm:pt-40 pb-20 sm:pb-28 lg:pb-40 px-5 sm:px-8 lg:px-12 bg-offwhite dark:bg-[#1a1a1a]">
          <div className="max-w-[90rem] mx-auto">
            <div className="reveal mb-12 grid gap-6 lg:mb-16 lg:grid-cols-2 lg:items-end">
              <div>
                <span className="text-label mb-5 block text-gold">Qué está pasando</span>
                <h1 className="text-text dark:text-[#e5e5e5] font-heading font-medium leading-[1.12]">
                  Actualidad
                </h1>
              </div>
              <p className="max-w-xl text-text-light dark:text-[#999] lg:justify-self-end">
                Todas las publicaciones de Vecinos por Montellano: actividad municipal, propuestas, intervenciones e iniciativas.
              </p>
            </div>

            {/* Separator: Próximos eventos / Pasados */}
            <div className="space-y-10">
              {noticias.map((n, i) => {
                const fechaDate = new Date(n.fecha.replace(" de ", " "));
                const isUpcoming = fechaDate > new Date();

                return (
                  <article
                    key={n.title}
                    className="group grid md:grid-cols-[auto_1fr] gap-6 md:gap-8 bg-white dark:bg-[#242424] border border-offwhite-dark dark:border-[#333] hover:shadow-lg transition-all duration-300 reveal"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="relative aspect-[4/3] md:w-64 md:aspect-auto overflow-hidden bg-primary-dark">
                      <Image
                        src={n.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 256px"
                        className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                        style={{ objectPosition: n.position }}
                      />
                      <span className="absolute left-4 top-4 bg-primary px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                        {n.platform}
                      </span>
                      {isUpcoming && (
                        <span className="absolute right-4 top-4 bg-gold text-primary px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em]">
                          Próximo
                        </span>
                      )}
                    </div>
                    <div className="p-6 sm:p-7 flex flex-col justify-center min-w-0">
                      <div className="flex items-center gap-3 text-xs text-muted dark:text-[#999] mb-3 flex-wrap">
                        <time dateTime={n.fecha}>{n.fecha}</time>
                        <span aria-hidden="true">·</span>
                        <span>{n.lugar}</span>
                        <span aria-hidden="true">·</span>
                        <span>{n.hora}h</span>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold mb-2">{n.meta}</p>
                      <h2 className="text-xl sm:text-2xl font-heading font-semibold text-text dark:text-[#e5e5e5] group-hover:text-primary dark:group-hover:text-gold transition-colors duration-300">
                        {n.title}
                      </h2>
                      <p className="mt-2 text-text-light dark:text-[#999] text-sm leading-relaxed">{n.excerpt}</p>
                      <p className="mt-3 text-text-light dark:text-[#999] text-sm leading-relaxed">{n.descripcion}</p>
                      <div className="flex items-center gap-4 mt-5 flex-wrap">
                        <a
                          href={n.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary dark:text-gold hover:opacity-80 transition-opacity"
                        >
                          Ver publicación <span aria-hidden="true">↗</span>
                        </a>
                        <ShareButtons title={n.title} url={n.href} />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="reveal mt-10 flex flex-wrap gap-3">
              {redesSociales.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center border border-primary/15 dark:border-[#555] px-5 text-xs font-semibold uppercase tracking-[0.14em] text-primary dark:text-[#ccc] transition-colors hover:border-primary hover:bg-primary hover:text-white dark:hover:border-gold dark:hover:bg-gold dark:hover:text-primary"
                >
                  Ver todo en {label} ↗
                </a>
              ))}
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
