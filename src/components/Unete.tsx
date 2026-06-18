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
                href="https://wa.me/34600000000?text=Hola%2C%20quiero%20ser%20voluntario%20de%20VPM%20Montellano"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-primary px-7 py-3.5 text-sm font-semibold hover:bg-gold-light transition-colors duration-300 min-h-[48px]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                Quiero ser voluntario
              </a>
            </div>

            {/* Colabora card */}
            <div className="bg-white/[0.06] p-7 sm:p-9 text-left hover:bg-white/[0.1] transition-all duration-300 group reveal">
              <h3 className="text-xl font-heading font-semibold text-white mb-4">Colabora con nosotros</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-7">
                Comparte nuestras redes, habla con tus vecinos. Cada gesto suma.
              </p>
              <a
                href="https://wa.me/34600000000?text=Hola%2C%20quiero%20colaborar%20con%20VPM%20Montellano"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-gold text-gold px-7 py-3.5 text-sm font-semibold hover:bg-gold hover:text-primary transition-all duration-300 min-h-[48px]"
              >
                Escríbenos →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
