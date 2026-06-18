import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "Nuestra Propuesta — Vecinos Por Montellano",
  description:
    "Conoce todas nuestras propuestas para Montellano: bienestar social, educación, desarrollo local, medio ambiente, participación ciudadana y más.",
  alternates: { canonical: "/propuestas" },
  openGraph: {
    title: "Nuestra Propuesta — Vecinos Por Montellano",
    description:
      "Conoce todas nuestras propuestas para Montellano: bienestar social, educación, desarrollo local, medio ambiente, participación ciudadana y más.",
    url: "/propuestas",
    siteName: "Vecinos Por Montellano",
    locale: "es_ES",
    type: "website",
  },
};

const ManosIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const LibroIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <path d="M8 7h6" />
    <path d="M8 11h8" />
  </svg>
);
const CasasIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M9 22V12h6v10" />
  </svg>
);
const HojaIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 8c-2.7 0-12 4.5-12 12 6-2 12-2.7 12-12z" />
    <path d="M17 8c2.7 0 3.5 5.5 3.5 5.5" />
    <path d="M13.5 3c0 1.5 1 3.5 3.5 5" />
  </svg>
);
const UrnaIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);
const LupaIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);
const HerramientasIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);
const BolsaIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

type BadgeStatus = "Propuesto" | "En desarrollo" | "Comprometido";

const propuestas = [
  {
    title: "Bienestar Social",
    desc: "Refuerzo de servicios sociales, ayuda a domicilio y programas para mayores y dependientes.",
    icon: ManosIcon,
    compromiso: "Crear un servicio de ayuda a domicilio municipal en los primeros 6 meses.",
    badge: "Comprometido" as BadgeStatus,
    detalle: "Nuestro plan de bienestar social incluye la creación de una red de cuidadores municipales, la ampliación de la teleasistencia gratuita para mayores de 75 años, y la apertura de un centro de día con actividades terapéuticas y de ocio. También impulsaremos programas intergeneracionales que conecten a jóvenes y mayores.",
  },
  {
    title: "Educación y Juventud",
    desc: "Más inversión en colegios, actividades extraescolares gratuitas y oportunidades para jóvenes.",
    icon: LibroIcon,
    compromiso: "Ampliar la oferta de actividades extraescolares gratuitas en todos los colegios.",
    badge: "Propuesto" as BadgeStatus,
    detalle: "Proponemos un plan integral de educación que incluya refuerzo escolar gratuito por las tardes, becas de material escolar para familias con menor renta, y un programa de orientación laboral para jóvenes. Queremos que ningún joven de Montellano se quede sin oportunidades por falta de recursos.",
  },
  {
    title: "Desarrollo Local",
    desc: "Apoyo al comercio de proximidad, atracción de inversiones y creación de empleo estable.",
    icon: CasasIcon,
    compromiso: "Poner en marcha una bolsa de empleo local con seguimiento personalizado.",
    badge: "Propuesto" as BadgeStatus,
    detalle: "Impulsaremos una bolsa de empleo municipal que conecte a empresas locales con desempleados del pueblo. Además, crearemos un vivero de empresas en el polígono industrial, y estableceremos bonificaciones fiscales para nuevos negocios durante sus dos primeros años de actividad.",
  },
  {
    title: "Medio Ambiente",
    desc: "Más zonas verdes, energías renovables en edificios públicos y cuidado del entorno natural.",
    icon: HojaIcon,
    compromiso: "Instalar placas solares en todos los edificios municipales en esta legislatura.",
    badge: "Comprometido" as BadgeStatus,
    detalle: "Además de la instalación de placas solares, nuestro plan ambiental recoge la creación de un corredor verde que conecte los parques del municipio, la implantación de puntos de recarga para vehículos eléctricos, y un programa de reforestación participativa en la Sierra de San Pablo.",
  },
  {
    title: "Participación Ciudadana",
    desc: "Presupuestos participativos, consultas vecinales y plenos abiertos a la ciudadanía.",
    icon: UrnaIcon,
    compromiso: "Convocar consultas vecinales vinculantes al menos dos veces al año.",
    badge: "Comprometido" as BadgeStatus,
    detalle: "Queremos que los vecinos decidan directamente sobre una parte del presupuesto municipal. Implementaremos una plataforma digital de participación donde cada vecino pueda proponer, debatir y votar iniciativas. Los plenos serán retransmitidos en directo y abiertos al turno de palabra ciudadano.",
  },
  {
    title: "Transparencia",
    desc: "Publicación de todas las cuentas, retransmisión de plenos y portal de datos abiertos.",
    icon: LupaIcon,
    compromiso: "Publicar todas las cuentas municipales en un portal de datos abiertos.",
    badge: "En desarrollo" as BadgeStatus,
    detalle: "Crearemos un portal de transparencia donde cualquier vecino pueda consultar facturas, contratos, nóminas y presupuestos municipales en tiempo real. Publicaremos las agendas de los concejales y las actas de todas las reuniones de gobierno. La transparencia es la base de la confianza.",
  },
  {
    title: "Infraestructuras",
    desc: "Mejora de calles, accesibilidad, alumbrado eficiente y conexión a internet en todo el municipio.",
    icon: HerramientasIcon,
    compromiso: "Ejecutar un plan de accesibilidad con rampas y aceras adaptadas en todo el pueblo.",
    badge: "Propuesto" as BadgeStatus,
    detalle: "Nuestro plan de infraestructuras contempla la renovación del alumbrado público con tecnología LED de bajo consumo, la eliminación de barreras arquitectónicas en todos los edificios públicos, y la extensión de la fibra óptica a las zonas rurales del término municipal que aún carecen de conexión de calidad.",
  },
  {
    title: "Comercio Local",
    desc: "Bonos de consumo, campañas de dinamización y reducción de trabas burocráticas.",
    icon: BolsaIcon,
    compromiso: "Lanzar bonos de consumo trimestrales para impulsar el comercio de proximidad.",
    badge: "Propuesto" as BadgeStatus,
    detalle: "Pondremos en marcha una campaña permanente de bonos de consumo que beneficie tanto a los vecinos como al pequeño comercio. Simplificaremos las licencias de apertura y crearemos una ventanilla única para emprendedores. Organizaremos ferias comerciales temáticas cada trimestre para dinamizar las calles.",
  },
];

const badgeStyles: Record<BadgeStatus, string> = {
  Propuesto: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800",
  "En desarrollo": "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800",
  Comprometido: "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800",
};

export default function PropuestasPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-h-screen focus:outline-none">
        <section className="pt-32 sm:pt-40 pb-20 sm:pb-28 lg:pb-40 px-5 sm:px-8 lg:px-12 bg-white dark:bg-[#1a1a1a]">
          <div className="max-w-[90rem] mx-auto">
            <div className="max-w-2xl reveal mb-14 lg:mb-20">
              <span className="text-label text-gold mb-5 sm:mb-7 block">
                Nuestra Propuesta
              </span>
              <h1 className="font-heading font-medium text-text dark:text-[#e5e5e5] leading-[1.12]">
                Lo que queremos para Montellano
              </h1>
              <p className="mt-5 text-text-light dark:text-[#999] leading-relaxed max-w-xl">
                Ocho áreas de trabajo con compromisos concretos y medibles. Cada propuesta incluye detalles sobre cómo la llevaríamos a cabo.
              </p>
            </div>

            <div className="space-y-6 max-w-4xl">
              {propuestas.map((p, i) => (
                <details
                  key={p.title}
                  className="group reveal border border-offwhite-dark dark:border-[#333] bg-white dark:bg-[#242424] hover:border-primary/10 dark:hover:border-gold/30 hover:shadow-md transition-all duration-300"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <summary className="cursor-pointer p-6 sm:p-7 flex items-start gap-4 list-none [&::-webkit-details-marker]:hidden">
                    <div className="text-gold shrink-0 mt-0.5 transition-transform duration-300 group-open:rotate-12">
                      <p.icon />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap mb-2">
                        <h3 className="text-lg font-heading font-semibold text-text dark:text-[#e5e5e5] group-hover:text-gold transition-colors duration-300">
                          {p.title}
                        </h3>
                        <span className={`inline-flex text-[11px] font-semibold px-2.5 py-1 border rounded-full ${badgeStyles[p.badge]}`}>
                          {p.badge}
                        </span>
                      </div>
                      <p className="text-text-light dark:text-[#999] text-sm leading-relaxed">{p.desc}</p>
                      <p className="text-xs text-text-light dark:text-[#999] leading-relaxed mt-3">
                        <span className="font-semibold text-text dark:text-[#e5e5e5]">Compromiso:</span> {p.compromiso}
                      </p>
                    </div>
                  </summary>
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 -mt-2 pl-[calc(1.5rem+24px+1rem)] sm:pl-[calc(1.75rem+24px+1rem)]">
                    <p className="text-text-light dark:text-[#999] leading-relaxed text-sm border-t border-offwhite-dark dark:border-[#333] pt-5">
                      {p.detalle}
                    </p>
                  </div>
                </details>
              ))}
            </div>

            <div className="reveal mt-14 lg:mt-20">
              <ShareButtons
                title="Propuestas de Vecinos por Montellano"
                className="justify-center sm:justify-start"
              />
            </div>

            <div className="reveal mt-12 text-center sm:text-left">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-gold hover:opacity-80 transition-opacity"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Volver al inicio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
