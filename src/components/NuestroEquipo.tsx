import Image from "next/image";

const team = [
  { name: "Candidato/a 1", role: "Cabeza de lista", bio: "Vecino de Montellano desde siempre. Comprometido con el desarrollo local." },
  { name: "Candidato/a 2", role: "Número 2", bio: "Profesional con experiencia en gestión pública y servicios sociales." },
  { name: "Candidato/a 3", role: "Número 3", bio: "Joven emprendedor. Apasionado por la innovación al servicio del pueblo." },
  { name: "Candidato/a 4", role: "Número 4", bio: "Comerciante local. Conoce las necesidades reales de nuestros negocios." },
  { name: "Candidato/a 5", role: "Número 5", bio: "Educadora y madre. Lucha por una educación pública de calidad." },
  { name: "Candidato/a 6", role: "Número 6", bio: "Jubilado activo. Defensor de nuestros mayores y tradiciones." },
];

export default function NuestroEquipo() {
  return (
    <section id="nuestro-equipo" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-20 bg-cream">
      <div className="max-w-[96rem] mx-auto">
        {/* Header */}
        <div className="max-w-2xl reveal mb-12 lg:mb-20">
          <span className="text-gold-dark text-xs tracking-[.25em] uppercase font-semibold mb-4 sm:mb-6 block">
            Nuestro Equipo
          </span>
          <h2 className="font-bold text-navy leading-[1.15] tracking-tight text-balance">
            Las personas detrás del proyecto
          </h2>
          <p className="mt-4 sm:mt-5 text-gray-500 leading-relaxed max-w-xl">
            Un equipo diverso, preparado y con ganas de trabajar. Vecinos como tú, con ilusión y compromiso.
          </p>
        </div>

        {/* Grid: 1 col mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {team.map((m) => (
            <article
              key={m.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 reveal"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <Image
                  src="/assets/spot_2.png"
                  alt={`Foto de ${m.name}, ${m.role} de VPM Montellano`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-semibold bg-gold text-navy-deep px-3 py-1.5 rounded-full tracking-wide">
                  {m.role}
                </span>
              </div>
              <div className="p-5 sm:p-6 lg:p-7">
                <h3 className="text-lg sm:text-xl font-bold text-navy">{m.name}</h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
