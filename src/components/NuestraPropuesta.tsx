import Image from "next/image";

const propuestas = [
  { title: "Bienestar Social", desc: "Refuerzo de servicios sociales, ayuda a domicilio y programas para mayores y dependientes." },
  { title: "Educación y Juventud", desc: "Más inversión en colegios, actividades extraescolares gratuitas y oportunidades para jóvenes." },
  { title: "Desarrollo Local", desc: "Apoyo al comercio de proximidad, atracción de inversiones y creación de empleo estable." },
  { title: "Medio Ambiente", desc: "Más zonas verdes, energías renovables en edificios públicos y cuidado del entorno natural." },
  { title: "Participación Ciudadana", desc: "Presupuestos participativos, consultas vecinales y plenos abiertos a la ciudadanía." },
  { title: "Transparencia", desc: "Publicación de todas las cuentas, retransmisión de plenos y portal de datos abiertos." },
  { title: "Infraestructuras", desc: "Mejora de calles, accesibilidad, alumbrado eficiente y conexión a internet en todo el municipio." },
  { title: "Comercio Local", desc: "Bonos de consumo, campañas de dinamización y reducción de trabas burocráticas." },
];

export default function NuestraPropuesta() {
  return (
    <section id="nuestra-propuesta" className="py-28 lg:py-40 px-6 lg:px-20">
      <div className="max-w-[96rem] mx-auto">
        {/* Header */}
        <div className="max-w-2xl reveal mb-16">
          <span className="text-gold-dark text-xs tracking-[.25em] uppercase font-semibold mb-6 block">
            Nuestra Propuesta
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-[1.15] tracking-tight text-balance">
            Lo que queremos para Montellano
          </h2>
        </div>

        {/* Featured image */}
        <div className="reveal mb-16 lg:mb-20">
          <Image
            src="/assets/spot_3.png"
            alt="VPM Propuesta"
            width={1400}
            height={500}
            className="rounded-2xl w-full max-h-[400px] object-cover shadow-xl"
          />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {propuestas.map((p) => (
            <div
              key={p.title}
              className="group reveal border border-gray-100 rounded-2xl p-6 lg:p-7 hover:border-navy/10 hover:shadow-lg hover:bg-white transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-gold-dark transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
