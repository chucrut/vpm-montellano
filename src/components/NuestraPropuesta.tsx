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
  },
  {
    title: "Educación y Juventud",
    desc: "Más inversión en colegios, actividades extraescolares gratuitas y oportunidades para jóvenes.",
    icon: LibroIcon,
    compromiso: "Ampliar la oferta de actividades extraescolares gratuitas en todos los colegios.",
    badge: "Propuesto" as BadgeStatus,
  },
  {
    title: "Desarrollo Local",
    desc: "Apoyo al comercio de proximidad, atracción de inversiones y creación de empleo estable.",
    icon: CasasIcon,
    compromiso: "Poner en marcha una bolsa de empleo local con seguimiento personalizado.",
    badge: "Propuesto" as BadgeStatus,
  },
  {
    title: "Medio Ambiente",
    desc: "Más zonas verdes, energías renovables en edificios públicos y cuidado del entorno natural.",
    icon: HojaIcon,
    compromiso: "Instalar placas solares en todos los edificios municipales en esta legislatura.",
    badge: "Comprometido" as BadgeStatus,
  },
  {
    title: "Participación Ciudadana",
    desc: "Presupuestos participativos, consultas vecinales y plenos abiertos a la ciudadanía.",
    icon: UrnaIcon,
    compromiso: "Convocar consultas vecinales vinculantes al menos dos veces al año.",
    badge: "Comprometido" as BadgeStatus,
  },
  {
    title: "Transparencia",
    desc: "Publicación de todas las cuentas, retransmisión de plenos y portal de datos abiertos.",
    icon: LupaIcon,
    compromiso: "Publicar todas las cuentas municipales en un portal de datos abiertos.",
    badge: "En desarrollo" as BadgeStatus,
  },
  {
    title: "Infraestructuras",
    desc: "Mejora de calles, accesibilidad, alumbrado eficiente y conexión a internet en todo el municipio.",
    icon: HerramientasIcon,
    compromiso: "Ejecutar un plan de accesibilidad con rampas y aceras adaptadas en todo el pueblo.",
    badge: "Propuesto" as BadgeStatus,
  },
  {
    title: "Comercio Local",
    desc: "Bonos de consumo, campañas de dinamización y reducción de trabas burocráticas.",
    icon: BolsaIcon,
    compromiso: "Lanzar bonos de consumo trimestrales para impulsar el comercio de proximidad.",
    badge: "Propuesto" as BadgeStatus,
  },
];

const badgeStyles: Record<BadgeStatus, string> = {
  Propuesto: "bg-blue-50 text-blue-700 border-blue-200",
  "En desarrollo": "bg-amber-50 text-amber-700 border-amber-200",
  Comprometido: "bg-green-50 text-green-700 border-green-200",
};

export default function NuestraPropuesta() {
  return (
    <section id="nuestra-propuesta" className="py-20 sm:py-28 lg:py-40 px-5 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-[90rem] mx-auto">
        <div className="max-w-2xl reveal mb-14 lg:mb-20">
          <span className="text-label text-gold mb-5 sm:mb-7 block">
            Nuestra Propuesta
          </span>
          <h2 className="font-heading font-medium text-text leading-[1.12]">
            Lo que queremos para Montellano
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {propuestas.map((p) => (
            <div
              key={p.title}
              className="group reveal border border-offwhite-dark p-6 sm:p-7 hover:border-primary/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col"
            >
              <div className="text-gold mb-4 transition-colors duration-300 group-hover:text-primary">
                <p.icon />
              </div>
              <h3 className="text-lg font-heading font-semibold text-text mb-3 group-hover:text-gold transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-text-light text-sm leading-relaxed mb-4">{p.desc}</p>
              <p className="text-xs text-text-light leading-relaxed mb-4 mt-auto">
                <span className="font-semibold text-text">Compromiso:</span> {p.compromiso}
              </p>
              <span className={`inline-flex self-start text-[11px] font-semibold px-2.5 py-1 border rounded-full ${badgeStyles[p.badge]}`}>
                {p.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
