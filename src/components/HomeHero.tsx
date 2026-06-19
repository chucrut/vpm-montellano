"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
  { src: "/assets/header.png", alt: "Vista de Montellano y su entorno" },
  { src: "/assets/header_2.png", alt: "Panorámica ilustrada de Montellano" },
  { src: "/assets/header_3.png", alt: "Vista de la iglesia y el casco urbano de Montellano" },
];

export default function HomeHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % images.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="home-hero">
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={index === active ? image.alt : ""}
          fill
          priority={index === 0}
          loading={index === 0 ? "eager" : "lazy"}
          sizes="100vw"
          className={`home-hero-image ${index === active ? "is-active" : ""}`}
        />
      ))}
      <div className="home-hero-overlay" />

      <div className="home-hero-copy">
        <p className="eyebrow">VECINOS POR MONTELLANO</p>
        <h1>Un pueblo se construye<br />con quienes lo viven.</h1>
        <p>Escuchar, cuidar y trabajar desde Montellano.</p>
        <div className="hero-links">
          <Link href="/quienes-somos">Conoce el proyecto <span>↗</span></Link>
          <Link href="/unete">Participa <span>↗</span></Link>
        </div>
      </div>

      <div className="hero-pagination" aria-label="Seleccionar imagen de portada">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Mostrar imagen ${index + 1}`}
            aria-current={active === index}
          >
            <span />
          </button>
        ))}
      </div>

      <a className="scroll-cue" href="#introduccion" aria-label="Continuar">
        <span>DESCUBRIR</span><i />
      </a>
    </section>
  );
}
