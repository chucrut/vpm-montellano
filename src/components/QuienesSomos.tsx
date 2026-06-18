import Image from "next/image";

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="py-28 lg:py-40 px-6 lg:px-20">
      <div className="max-w-[96rem] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text column */}
          <div className="reveal max-lg:order-2">
            <span className="text-gold-dark text-xs tracking-[.25em] uppercase font-semibold mb-6 block">
              Quiénes Somos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-[1.15] tracking-tight text-balance mb-8">
              Vecinos comprometidos
              <br />
              con Montellano
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed text-base lg:text-lg">
              <p>
                <strong className="text-navy font-semibold">Vecinos por Montellano</strong>{" "}
                nace de la ilusión de un grupo de montellaneros que creemos que nuestro
                pueblo merece más. No somos políticos profesionales: somos vecinos con
                ganas de trabajar.
              </p>
              <p>
                Nuestro proyecto se basa en la{" "}
                <strong className="text-navy font-semibold">participación</strong>, la{" "}
                <strong className="text-navy font-semibold">transparencia</strong> y las{" "}
                <strong className="text-navy font-semibold">propuestas realistas</strong>.
                Creemos en escuchar antes de decidir y en rendir cuentas siempre.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-3 mt-10">
              {[
                ["100%", "Independientes"],
                ["Vecinos", "Comprometidos"],
                ["0 €", "Deuda política"],
                ["Tú", "En el centro"],
              ].map(([num, label]) => (
                <div key={label} className="bg-cream rounded-2xl p-5 text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-gold-dark">{num}</div>
                  <div className="text-xs text-gray-500 mt-1 tracking-wide uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image column */}
          <div className="relative reveal max-lg:order-1">
            <Image
              src="/assets/spot_1.png"
              alt="VPM Quiénes Somos"
              width={800}
              height={500}
              className="rounded-2xl w-full shadow-2xl"
            />
            <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-gold/20 rounded-2xl -z-10 hidden lg:block" />
            <div className="absolute -top-5 -left-5 w-28 h-28 bg-navy/5 rounded-2xl -z-10 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
