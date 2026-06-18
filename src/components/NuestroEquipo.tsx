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
    <section id="nuestro-equipo" className="py-28 lg:py-40 px-6 lg:px-20 bg-cream">
      <div className="max-w-[96rem] mx-auto">
        {/* Header */}
        <div className="max-w-2xl reveal mb-16 lg:mb-20">
          <span className="text-gold-dark text-xs tracking-[.25em] uppercase font-semibold mb-6 block">
            Nuestro Equipo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-[1.15] tracking-tight text-balance">
            Las personas detrás del proyecto
          </h2>
          <p className="mt-5 text-gray-500 text-lg leading-relaxed max-w-xl">
            Un equipo diverso, preparado y con ganas de trabajar. Vecinos como tú, con ilusión y compromiso.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {team.map((m, i) => (
            <div
              key={m.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 reveal"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/assets/spot_2.png"
                  alt={m.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-semibold bg-gold text-navy-deep px-3 py-1.5 rounded-full tracking-wide">
                  {m.role}
                </span>
              </div>
              <div className="p-6 lg:p-7">
                <h3 className="text-xl font-bold text-navy">{m.name}</h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
