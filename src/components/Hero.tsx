"use client";

import { useEffect, useState } from "react";

const headers = [
  { src: "/assets/header.png", alt: "Vista panorámica de Montellano" },
  { src: "/assets/header_2.png", alt: "Plaza principal de Montellano" },
  { src: "/assets/header_3.png", alt: "Calles y vecinos de Montellano" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const t = setInterval(() => setCurrent((p) => (p + 1) % headers.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="inicio" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Rotating backgrounds */}
      {headers.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[2s] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            backgroundImage: `url(${img.src})`,
            opacity: i === current ? 1 : 0,
          }}
          role="img"
          aria-label={img.alt}
          aria-hidden={i !== current}
        />
      ))}

      {/* Overlay gradients for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/15 to-primary/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-end h-full px-5 sm:px-8 pb-28 sm:pb-20 lg:px-12 lg:pb-32 max-w-[90rem] mx-auto w-full">
        <div id="main-content" tabIndex={-1} className="max-w-4xl animate-fade-up focus:outline-none">
          <p className="text-gold text-xs sm:text-sm tracking-[0.28em] uppercase mb-5 sm:mb-7 font-semibold font-body">
            Vecinos por Montellano
          </p>
          <h1 className="text-white font-heading font-medium leading-[1.06]">
            Juntos construimos
            <br />
            <span className="text-gold italic">el Montellano</span>
            <br />
            que merecemos
          </h1>
          <p className="mt-6 sm:mt-8 text-white/60 text-base sm:text-lg lg:text-xl max-w-xl font-light leading-relaxed">
            Participa, propón, decide. Un proyecto independiente de vecinos comprometidos con el futuro de nuestro pueblo.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              href="#quienes-somos"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gold text-primary font-semibold hover:bg-gold-light transition-colors duration-300 text-sm tracking-wider min-h-[48px]"
            >
              Conócenos
            </a>
            <a
              href="#unete"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300 text-sm tracking-wider min-h-[48px]"
            >
              Únete al cambio
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-20 sm:bottom-8 right-5 sm:right-8 lg:right-12 animate-float" aria-hidden="true">
          <svg className="h-7 w-7 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
