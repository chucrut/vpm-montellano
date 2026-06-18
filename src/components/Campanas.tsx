import Image from "next/image";

const campanas = [
  {
    src: "/assets/spot_1.png",
    width: 1914,
    height: 822,
    title: "Cerca de nuestra gente",
    description: "Una declaración de origen: escuchar la calle y trabajar desde lo cotidiano.",
  },
  {
    src: "/assets/spot_2.png",
    width: 1731,
    height: 908,
    title: "Proyecto 2037",
    description: "Una mirada a largo plazo para construir hoy el pueblo que heredarán nuestros hijos.",
  },
  {
    src: "/assets/spot_3.png",
    width: 1916,
    height: 821,
    title: "El cambio nace de sus vecinos",
    description: "Una invitación a participar y convertir las ideas compartidas en futuro.",
  },
  {
    src: "/assets/spot_4.png",
    width: 1672,
    height: 941,
    title: "Transparencia",
    description: "Gestión clara, información accesible y decisiones abiertas a la ciudadanía.",
  },
];

export default function Campanas() {
  return (
    <section id="campanas" className="bg-primary-dark dark:bg-[#0a1a10] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[90rem]">
        <div className="reveal mb-12 grid gap-6 lg:mb-16 lg:grid-cols-2 lg:items-end">
          <div className="min-w-0">
            <span className="text-label mb-5 block text-gold">Campañas</span>
            <h2 className="max-w-3xl text-white">Ideas para mover Montellano</h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-white/60 lg:justify-self-end">
            Mensajes breves para abrir conversación, compartir una visión y poner sobre la mesa lo que importa.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {campanas.map((campana, index) => (
            <article key={campana.src} className="group reveal">
              <div className="overflow-hidden bg-primary">
                <Image
                  src={campana.src}
                  alt={`Campaña de VPM: ${campana.title}`}
                  width={campana.width}
                  height={campana.height}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-4 border-t border-white/15 py-5">
                <span className="pt-1 text-xs tracking-[0.2em] text-gold">0{index + 1}</span>
                <div>
                  <h3 className="text-xl text-white">{campana.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/50">{campana.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
