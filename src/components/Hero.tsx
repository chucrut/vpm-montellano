"use client";

import Image from "next/image";
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
    <section id="inicio" className="relative min-h-[640px] h-[100svh] max-h-[1080px] overflow-hidden bg-primary">
      {/* Rotating backgrounds */}
      {headers.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-[2s] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            opacity: i === current ? 1 : 0,
          }}
          aria-hidden={i !== current}
        >
          <Image
            src={img.src}
            alt={i === current ? img.alt : ""}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-[62%_center] sm:object-center"
          />
        </div>
      ))}

      {/* Overlay gradients for readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #1a3a2a 0%, rgba(26,58,42,.94) 23%, rgba(26,58,42,.58) 55%, rgba(26,58,42,.08) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/25 via-transparent to-primary/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />

      <div className="pointer-events-none absolute left-1/2 top-20 z-[5] h-52 w-52 -translate-x-1/2 opacity-[0.16] sm:top-24 sm:h-64 sm:w-64 lg:hidden" aria-hidden="true">
        <Image
          src="/assets/logo-transparent.png"
          alt=""
          fill
          sizes="256px"
          className="object-contain brightness-0 invert"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-end h-full px-5 sm:px-8 pb-28 sm:pb-20 lg:px-12 lg:pb-32 max-w-[90rem] mx-auto w-full">
        <div className="w-full max-w-4xl min-w-0 animate-fade-up">
          <p className="text-gold text-xs sm:text-sm tracking-[0.28em] uppercase mb-5 sm:mb-7 font-semibold font-body">
            Vecinos por Montellano
          </p>
          <h1 className="text-white font-heading font-medium leading-[1.02]">
            <span className="block">Juntos construimos</span>
            <span className="block text-gold italic">el Montellano</span>
            <span className="block">que merecemos</span>
          </h1>
          <p className="mt-6 sm:mt-8 text-white/75 text-base sm:text-lg lg:text-xl max-w-xl font-light leading-relaxed">
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

        <a
          href="#quienes-somos"
          aria-label="Bajar a Quiénes somos"
          className="absolute bottom-5 left-1/2 z-20 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full text-white/55 transition-colors hover:text-gold sm:bottom-7"
        >
          <svg className="h-7 w-7 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>

        <div className="absolute bottom-20 sm:bottom-9 left-5 sm:left-8 lg:left-12 flex items-center gap-2" aria-label="Seleccionar imagen de portada">
          {headers.map((header, index) => (
            <button
              key={header.src}
              type="button"
              onClick={() => setCurrent(index)}
              className={`h-11 w-11 flex items-center justify-center rounded-full transition-colors ${
                index === current ? "text-gold" : "text-white/45 hover:text-white"
              }`}
              aria-label={`Mostrar imagen ${index + 1}: ${header.alt}`}
              aria-current={index === current ? "true" : undefined}
            >
              <span className={`block h-1 rounded-full transition-all ${index === current ? "w-7 bg-current" : "w-3 bg-current"}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
