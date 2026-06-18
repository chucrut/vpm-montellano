import Image from "next/image";

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="py-20 sm:py-28 lg:py-40 px-5 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-28 items-center">
          {/* Image column */}
          <div className="relative reveal max-lg:order-1">
            <div className="relative overflow-hidden">
              <Image
                src="/assets/spot_1.png"
                alt="Vecinos de VPM Montellano reunidos"
                width={800}
                height={560}
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-44 h-44 bg-gold/10 -z-10 hidden lg:block" aria-hidden="true" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/5 -z-10 hidden lg:block" aria-hidden="true" />
          </div>

          {/* Text column */}
          <div className="reveal max-lg:order-2">
            <span className="text-label text-gold mb-5 sm:mb-7 block">
              Quiénes Somos
            </span>
            <h2 className="font-heading font-medium text-text leading-[1.12] mb-7 sm:mb-9">
              Vecinos comprometidos
              <br />
              con Montellano
            </h2>
            <div className="space-y-5 text-text-light leading-relaxed">
              <p>
                <strong className="text-text font-semibold">Vecinos por Montellano</strong>{" "}
                nace de la ilusión de un grupo de montellaneros que creemos que nuestro
                pueblo merece más. No somos políticos profesionales: somos vecinos con
                ganas de trabajar.
              </p>
              <p>
                Nuestro proyecto se basa en la{" "}
                <strong className="text-text font-semibold">participación</strong>, la{" "}
                <strong className="text-text font-semibold">transparencia</strong> y las{" "}
                <strong className="text-text font-semibold">propuestas realistas</strong>.
                Creemos en escuchar antes de decidir y en rendir cuentas siempre.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mt-10 sm:mt-12">
              {[
                { num: "100%", label: "Independientes" },
                { num: "Vecinos", label: "Comprometidos" },
                { num: "0 €", label: "Deuda política" },
                { num: "Tú", label: "En el centro" },
              ].map(({ num, label }) => (
                <div key={label} className="bg-offwhite p-5 sm:p-6 text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-gold">{num}</div>
                  <div className="text-xs text-muted mt-2 tracking-wider uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
