export default function Unete() {
  return (
    <section id="unete" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-20">
      <div className="max-w-[96rem] mx-auto">
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="text-gold-dark text-xs tracking-[.25em] uppercase font-semibold mb-4 sm:mb-6 block">
            Únete
          </span>
          <h2 className="font-bold text-navy leading-[1.15] tracking-tight text-balance mb-4 sm:mb-6">
            Forma parte del cambio
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            No hace falta ser candidato para ayudar. Si compartes nuestra ilusión, hay muchas formas de sumarte.
          </p>

          {/* Stack vertical mobile, 2 cols tablet */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-10 sm:mt-14 max-w-2xl mx-auto">
            {/* Voluntario card */}
            <div className="bg-cream rounded-2xl p-6 sm:p-8 text-left hover:shadow-lg transition-all duration-300 group reveal">
              <h3 className="text-lg sm:text-xl font-bold text-navy mb-3">Hazte voluntario</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Ayuda en eventos, reparte información, participa en las asambleas.
              </p>
              <a
                href="https://wa.me/34600000000?text=Hola%2C%20quiero%20ser%20voluntario%20de%20VPM%20Montellano"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-navy text-white rounded-full px-6 py-3.5 text-sm font-semibold hover:bg-navy-light transition-colors duration-300 min-h-[48px]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                Quiero ser voluntario
              </a>
            </div>

            {/* Colabora card */}
            <div className="bg-cream rounded-2xl p-6 sm:p-8 text-left hover:shadow-lg transition-all duration-300 group reveal">
              <h3 className="text-lg sm:text-xl font-bold text-navy mb-3">Colabora con nosotros</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Comparte nuestras redes, habla con tus vecinos. Cada gesto suma.
              </p>
              <a
                href="https://wa.me/34600000000?text=Hola%2C%20quiero%20colaborar%20con%20VPM%20Montellano"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-gold text-navy rounded-full px-6 py-3.5 text-sm font-bold hover:bg-gold hover:text-navy-deep transition-all duration-300 min-h-[48px]"
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
