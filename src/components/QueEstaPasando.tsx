"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ShareButtons from "@/components/ShareButtons";
import va from "@vercel/analytics";

interface NoticiaItem {
  title: string;
  fecha: string;
  fechaDate: string; // ISO for comparison
  lugar: string;
  hora: string;
  meta: string;
  excerpt: string;
  descripcion: string;
  platform: string;
  image: string;
  position: string;
  href: string;
}

const noticias: NoticiaItem[] = [
  {
    title: "120.634,72 € para mejorar caminos rurales",
    fecha: "15 de junio de 2025",
    fechaDate: "2025-06-15",
    lugar: "Montellano",
    hora: "10:00",
    meta: "Caminos rurales",
    excerpt: "Tres actuaciones trabajadas durante la etapa de VPM al frente de Medio Ambiente reciben financiación.",
    descripcion:
      "La Diputación de Sevilla ha aprobado una partida de 120.634,72 euros para la mejora de tres caminos rurales del término municipal de Montellano. Las actuaciones incluyen el arreglo del firme, la limpieza de cunetas y la señalización, impulsadas desde la concejalía de Medio Ambiente de VPM.",
    platform: "Facebook",
    image: "/assets/news/caminos-rurales.jpg",
    position: "center",
    href: "https://www.facebook.com/vecinospormontellano/posts/930249613327225/",
  },
  {
    title: "Avances para las colonias felinas de Montellano",
    fecha: "22 de mayo de 2025",
    fechaDate: "2025-05-22",
    lugar: "Salón de Plenos, Ayuntamiento de Montellano",
    hora: "19:30",
    meta: "Bienestar animal",
    excerpt: "El Pleno aprueba el convenio y el registro municipal de colonias felinas tras más de un año de trabajo.",
    descripcion:
      "El Pleno aprobó por unanimidad el convenio de colaboración para la gestión de colonias felinas, que establece el registro oficial y el protocolo CER (Captura, Esterilización y Retorno), fruto del trabajo de VPM, asociaciones protectoras y voluntarios.",
    platform: "Facebook",
    image: "/assets/news/colonias-felinas.jpg",
    position: "center",
    href: "https://www.facebook.com/vecinospormontellano/posts/723591780659677/",
  },
  {
    title: "Control y transparencia en el gasto municipal",
    fecha: "10 de abril de 2025",
    fechaDate: "2025-04-10",
    lugar: "Salón de Plenos, Ayuntamiento de Montellano",
    hora: "19:00",
    meta: "Intervención en el Pleno",
    excerpt: "José Ignacio Ceballos pide explicaciones sobre facturas, contratos y procedimientos reflejados en los informes municipales.",
    descripcion:
      "En la última sesión plenaria, el portavoz de VPM solicitó explicaciones sobre partidas de gasto recogidas en los informes de intervención, pidiendo acceso a expedientes de contratación y facturas de servicios externalizados.",
    platform: "Facebook · Vídeo",
    image: "/assets/news/pleno-municipal.jpg",
    position: "center",
    href: "https://www.facebook.com/vecinospormontellano/videos/4329589333950842/",
  },
];

const redesSociales = [
  ["Facebook", "https://www.facebook.com/vecinospormontellano/"],
  ["Instagram", "https://www.instagram.com/vecinospormontellano/"],
  ["TikTok", "https://www.tiktok.com/@vecinos.por.monte"],
] as const;

function CountdownBadge({ targetDate }: { targetDate: string }) {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const target = new Date(targetDate);
      const diff = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
      setDaysLeft(diff);
    };
    calc();
    const t = setInterval(calc, 1000 * 60 * 60); // update every hour
    return () => clearInterval(t);
  }, [targetDate]);

  if (daysLeft === null) return null;
  if (daysLeft <= 0) return null;

  return (
    <span className="inline-flex items-center gap-1 bg-gold text-primary px-2.5 py-1 text-[11px] font-semibold uppercase rounded-full">
      {daysLeft === 0 ? "Hoy" : `En ${daysLeft} día${daysLeft !== 1 ? "s" : ""}`}
    </span>
  );
}

export default function QueEstaPasando() {
  const now = new Date();
  const futuros = noticias.filter((n) => new Date(n.fechaDate) >= now);
  const pasados = noticias.filter((n) => new Date(n.fechaDate) < now);

  return (
    <section id="que-esta-pasando" className="bg-offwhite dark:bg-[#1a1a1a] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-40">
      <div className="max-w-[90rem] mx-auto">
        <div className="reveal mb-12 grid gap-6 lg:mb-16 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="text-label mb-5 block text-gold">Qué está pasando</span>
            <h2 className="text-text dark:text-[#e5e5e5]">Últimas publicaciones</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 lg:justify-self-end items-start sm:items-center">
            <p className="max-w-xl text-text-light dark:text-[#999] text-sm">
              Actividad municipal, propuestas e iniciativas publicadas en nuestros canales oficiales.
            </p>
            <a
              href="/actualidad"
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary dark:text-gold hover:opacity-80 transition-opacity shrink-0 sm:ml-4"
            >
              Ver todo <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Próximos eventos */}
        {futuros.length > 0 && (
          <div className="mb-10">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-5 flex items-center gap-2">
              <span className="h-2 w-2 bg-gold rounded-full animate-pulse" />
              Próximos eventos
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {futuros.map((n, i) => (
                <a
                  key={n.title}
                  href={n.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => va.track("social_outbound", { platform: "facebook" })}
                  aria-label={`${n.title}. Abrir publicación en ${n.platform}`}
                  className="group flex min-w-0 flex-col overflow-hidden bg-white dark:bg-[#242424] shadow-sm border border-gold/30 dark:border-gold/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-primary-dark">
                    <Image
                      src={n.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                      style={{ objectPosition: n.position }}
                    />
                    <span className="absolute left-4 top-4 bg-gold text-primary px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em]">
                      Próximo
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{n.meta}</p>
                      <CountdownBadge targetDate={n.fechaDate} />
                    </div>
                    <h3 className="mt-1 text-xl font-heading font-semibold text-text dark:text-[#e5e5e5] group-hover:text-primary dark:group-hover:text-gold transition-colors duration-300">
                      {n.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted dark:text-[#999] mt-2">
                      <time dateTime={n.fechaDate}>{n.fecha}</time>
                      <span aria-hidden="true">·</span>
                      <span>{n.hora}h</span>
                    </div>
                    <p className="mt-2 text-text-light dark:text-[#999] text-sm leading-relaxed">{n.excerpt}</p>
                    <p className="mt-2 text-text-light dark:text-[#999] text-sm leading-relaxed">{n.descripcion}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-semibold uppercase tracking-[0.14em] text-primary dark:text-gold">
                      Ver publicación <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Noticias pasadas */}
        {pasados.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-5">
              Noticias recientes
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pasados.map((n, i) => (
                <a
                  key={n.title}
                  href={n.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => va.track("social_outbound", { platform: "facebook" })}
                  aria-label={`${n.title}. Abrir publicación en ${n.platform}`}
                  className="group flex min-w-0 flex-col overflow-hidden bg-white dark:bg-[#242424] shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-500 reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-primary-dark">
                    <Image
                      src={n.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                      style={{ objectPosition: n.position }}
                    />
                    <span className="absolute left-4 top-4 bg-primary px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                      {n.platform}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-center gap-2 text-xs text-muted dark:text-[#999] mb-1">
                      <time dateTime={n.fechaDate}>{n.fecha}</time>
                      <span aria-hidden="true">·</span>
                      <span>{n.hora}h</span>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold mt-1">{n.meta}</p>
                    <h3 className="mt-3 text-xl font-heading font-semibold text-text dark:text-[#e5e5e5] group-hover:text-primary dark:group-hover:text-gold transition-colors duration-300">
                      {n.title}
                    </h3>
                    <p className="mt-2 text-text-light dark:text-[#999] text-sm leading-relaxed">{n.excerpt}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-semibold uppercase tracking-[0.14em] text-primary dark:text-gold">
                      Ver publicación <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="reveal mt-10 flex flex-wrap gap-3">
          {redesSociales.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => va.track("social_outbound", { platform: label.toLowerCase() })}
              className="inline-flex min-h-12 items-center border border-primary/15 dark:border-[#555] px-5 text-xs font-semibold uppercase tracking-[0.14em] text-primary dark:text-[#ccc] transition-colors hover:border-primary hover:bg-primary hover:text-white dark:hover:border-gold dark:hover:bg-gold dark:hover:text-primary"
            >
              Ver todo en {label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
