"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
    const t = setInterval(() => setCurrent((p) => (p + 1) % headers.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="inicio" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Rotating backgrounds */}
      {headers.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1.8s] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            backgroundImage: `url(${img.src})`,
            opacity: i === current ? 1 : 0,
          }}
          role="img"
          aria-label={img.alt}
          aria-hidden={i !== current}
        />
      ))}

      {/* Gradient overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/25 to-navy/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-end h-full px-4 sm:px-6 pb-32 sm:pb-24 lg:px-20 lg:pb-32 max-w-[96rem] mx-auto w-full">
        <div id="main-content" tabIndex={-1} className="max-w-3xl animate-fade-up focus:outline-none">
          <p className="text-gold text-xs sm:text-sm lg:text-base tracking-[.25em] uppercase mb-4 sm:mb-6 font-medium">
            Vecinos por Montellano
          </p>
          <h1 className="font-bold text-white leading-[1.05] tracking-tight text-balance">
            Juntos construimos
            <br />
            <span className="text-gold">el Montellano</span>
            <br />
            que merecemos
          </h1>
          <p className="mt-6 sm:mt-8 text-white/70 text-base sm:text-lg lg:text-xl max-w-xl font-light leading-relaxed">
            Participa, propón, decide. Un proyecto independiente de vecinos comprometidos con el futuro de nuestro pueblo.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href="#quienes-somos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 sm:py-3.5 bg-gold text-navy-deep font-semibold rounded-full hover:bg-gold-light transition-colors duration-300 text-sm tracking-wide min-h-[48px]"
            >
              Conócenos
            </a>
            <a
              href="#unete"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 sm:py-3.5 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 text-sm tracking-wide min-h-[48px]"
            >
              Únete al cambio
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-20 sm:bottom-8 right-4 sm:right-8 lg:right-20 animate-bounce" aria-hidden="true">
          <svg className="h-6 w-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
