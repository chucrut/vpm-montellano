const channels = [
  {
    name: "Facebook",
    handle: "Vecinos por Montellano",
    href: "https://www.facebook.com/vecinospormontellano/",
  },
  {
    name: "Instagram",
    handle: "@vecinospormontellano",
    href: "https://www.instagram.com/vecinospormontellano/",
  },
  {
    name: "TikTok",
    handle: "@vecinos.por.monte",
    href: "https://www.tiktok.com/@vecinos.por.monte",
  },
];

export default function TeEscuchamos() {
  return (
    <section id="te-escuchamos" className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-40">
      <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="reveal">
          <span className="text-label mb-5 block text-gold">Te escuchamos</span>
          <h2 className="max-w-2xl text-text">La conversación continúa en la calle y en las redes.</h2>
        </div>

        <div className="reveal lg:pt-4">
          <p className="max-w-xl text-text-light">
            Comparte una propuesta, plantea una preocupación o cuéntanos qué mejorarías en Montellano. Estos son nuestros canales oficiales.
          </p>
          <div className="mt-10 border-t border-offwhite-dark">
            {channels.map((channel) => (
              <a
                key={channel.name}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-20 items-center justify-between gap-4 border-b border-offwhite-dark py-5 transition-colors hover:text-gold"
              >
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted">{channel.name}</span>
                  <span className="mt-1 block font-heading text-xl text-text group-hover:text-gold">{channel.handle}</span>
                </div>
                <span className="text-2xl transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
