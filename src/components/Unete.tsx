export default function Unete() {
  return (
    <section id="unete" className="py-20 sm:py-28 lg:py-40 px-5 sm:px-8 lg:px-12 bg-primary text-white">
      <div className="max-w-[90rem] mx-auto">
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="text-label text-gold mb-5 sm:mb-7 block">
            Únete
          </span>
          <h2 className="font-heading font-medium text-white leading-[1.12] mb-5 sm:mb-7">
            Forma parte del cambio
          </h2>
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
            No hace falta ser candidato para ayudar. Si compartes nuestra ilusión, hay muchas formas de sumarte.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mt-12 sm:mt-16 max-w-2xl mx-auto">
            {/* Voluntario card */}
            <div className="bg-white/[0.06] p-7 sm:p-9 text-left hover:bg-white/[0.1] transition-all duration-300 group reveal">
              <h3 className="text-xl font-heading font-semibold text-white mb-4">Hazte voluntario</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-7">
                Ayuda en eventos, reparte información, participa en las asambleas.
              </p>
              <a
                href="https://www.instagram.com/vecinospormontellano/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-primary px-7 py-3.5 text-sm font-semibold hover:bg-gold-light transition-colors duration-300 min-h-[48px]"
              >
                Quiero participar ↗
              </a>
            </div>

            {/* Colabora card */}
            <div className="bg-white/[0.06] p-7 sm:p-9 text-left hover:bg-white/[0.1] transition-all duration-300 group reveal">
              <h3 className="text-xl font-heading font-semibold text-white mb-4">Colabora con nosotros</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-7">
                Comparte nuestras redes, habla con tus vecinos. Cada gesto suma.
              </p>
              <a
                href="https://www.facebook.com/vecinospormontellano/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-gold text-gold px-7 py-3.5 text-sm font-semibold hover:bg-gold hover:text-primary transition-all duration-300 min-h-[48px]"
              >
                Escríbenos ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
