const propuestas = [
  { title: "Bienestar Social", desc: "Refuerzo de servicios sociales, ayuda a domicilio y programas para mayores y dependientes.", icon: "🤝" },
  { title: "Educación y Juventud", desc: "Más inversión en colegios, actividades extraescolares gratuitas y oportunidades para jóvenes.", icon: "📚" },
  { title: "Desarrollo Local", desc: "Apoyo al comercio de proximidad, atracción de inversiones y creación de empleo estable.", icon: "🏘️" },
  { title: "Medio Ambiente", desc: "Más zonas verdes, energías renovables en edificios públicos y cuidado del entorno natural.", icon: "🌿" },
  { title: "Participación Ciudadana", desc: "Presupuestos participativos, consultas vecinales y plenos abiertos a la ciudadanía.", icon: "🗳️" },
  { title: "Transparencia", desc: "Publicación de todas las cuentas, retransmisión de plenos y portal de datos abiertos.", icon: "🔍" },
  { title: "Infraestructuras", desc: "Mejora de calles, accesibilidad, alumbrado eficiente y conexión a internet en todo el municipio.", icon: "🏗️" },
  { title: "Comercio Local", desc: "Bonos de consumo, campañas de dinamización y reducción de trabas burocráticas.", icon: "🛍️" },
];

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
              className="group reveal border border-offwhite-dark p-6 sm:p-7 hover:border-primary/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white"
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-lg font-heading font-semibold text-text mb-3 group-hover:text-gold transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-text-light text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
