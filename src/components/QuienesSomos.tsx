export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="py-20 sm:py-28 lg:py-40 px-5 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 reveal lg:col-span-5">
            <span className="text-label text-gold mb-5 sm:mb-7 block">
              Quiénes Somos
            </span>
            <p className="font-heading text-[clamp(2.3rem,4.8vw,5.3rem)] leading-[1.02] tracking-[-0.03em] text-primary">
              La política local vuelve a pertenecer a sus vecinos.
            </p>
          </div>

          <div className="min-w-0 reveal lg:col-span-6 lg:col-start-7 lg:pt-16">
            <h2 className="font-heading font-medium text-text leading-[1.12] mb-7 sm:mb-9">
              Vecinos comprometidos con Montellano
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

            <div className="grid grid-cols-2 border-l border-t border-offwhite-dark mt-10 sm:mt-12">
              {[
                { num: "660", label: "Votos en 2023" },
                { num: "18,70%", label: "Apoyo electoral" },
                { num: "2", label: "Concejales" },
                { num: "2023–27", label: "Legislatura" },
              ].map(({ num, label }) => (
                <div key={label} className="border-r border-b border-offwhite-dark p-5 sm:p-6">
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
