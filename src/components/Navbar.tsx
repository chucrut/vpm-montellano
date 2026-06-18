"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

/* ── SVG Social Icons ── */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

/* ── Bottom nav icons ── */
const HomeIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
  </svg>
);
const TeamIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);
const ProposalIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
  </svg>
);
const ContactIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const socials = [
  { href: "https://facebook.com/vpmmontellano", label: "Facebook", Icon: FacebookIcon },
  { href: "https://youtube.com/@vpmmontellano", label: "YouTube", Icon: YouTubeIcon },
  { href: "https://instagram.com/vpmmontellano", label: "Instagram", Icon: InstagramIcon },
  { href: "https://tiktok.com/@vpmmontellano", label: "TikTok", Icon: TikTokIcon },
  { href: "https://wa.me/34600000000", label: "WhatsApp", Icon: WhatsAppIcon },
];

const links = [
  { label: "Inicio", href: "#inicio", section: "inicio" },
  { label: "Quiénes Somos", href: "#quienes-somos", section: "quienes-somos" },
  { label: "Nuestro Equipo", href: "#nuestro-equipo", section: "nuestro-equipo" },
  { label: "Nuestra Propuesta", href: "#nuestra-propuesta", section: "nuestra-propuesta" },
  { label: "Qué Está Pasando", href: "#que-esta-pasando", section: "que-esta-pasando" },
  { label: "Te Escuchamos", href: "#te-escuchamos", section: "te-escuchamos" },
  { label: "Únete", href: "#unete", section: "unete" },
];

const bottomNavItems = [
  { label: "Inicio", href: "#inicio", Icon: HomeIcon, section: "inicio" },
  { label: "Equipo", href: "#nuestro-equipo", Icon: TeamIcon, section: "nuestro-equipo" },
  { label: "Propuesta", href: "#nuestra-propuesta", Icon: ProposalIcon, section: "nuestra-propuesta" },
  { label: "Contacto", href: "#te-escuchamos", Icon: ContactIcon, section: "te-escuchamos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [activeSection, setActiveSection] = useState("inicio");
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  /* ── Show/hide on scroll ── */
  const onScroll = useCallback(() => {
    const y = window.scrollY;
    setVisible(y < 80 || y < lastScroll);
    setLastScroll(y);

    /* Detect active section for bottom nav */
    const sections = links.map(l => l.section);
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && window.scrollY >= el.offsetTop - 120) {
        setActiveSection(sections[i]);
        break;
      }
    }
  }, [lastScroll]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  /* ── Close on Escape ── */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  /* ── Lock body scroll when menu open ── */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* ── Focus trap inside menu ── */
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        const firstLink = menuRef.current?.querySelector("a") as HTMLElement;
        firstLink?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <>
      {/* ── Top navbar ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-transform duration-400 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
        role="banner"
      >
        <nav className="mx-auto flex items-center justify-between max-w-[96rem] px-4 sm:px-6 py-3 sm:py-5 lg:px-12" aria-label="Navegación principal">
          {/* ── Social icons (desktop left) ── */}
          <div className="hidden lg:flex items-center gap-1">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 text-white/80 hover:text-gold transition-colors duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* ── Logo ── */}
          <a
            href="#inicio"
            className="flex items-center gap-3 shrink-0 group"
            aria-label="VPM Montellano — Ir al inicio"
          >
            <Image
              src="/assets/logo.png"
              alt="Logo VPM Montellano"
              width={40}
              height={40}
              className="rounded-lg transition-transform duration-500 group-hover:scale-105 sm:w-[44px] sm:h-[44px]"
            />
            <span className="text-white font-semibold tracking-wide text-base sm:text-lg">
              VPM
            </span>
          </a>

          {/* ── Hamburger button (mobile + desktop menu trigger) ── */}
          <button
            ref={hamburgerRef}
            onClick={() => setOpen(!open)}
            className="p-3 text-white min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-[1.5px] bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
              <span className={`block h-[1.5px] bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-[1.5px] bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
            </div>
          </button>
        </nav>
      </header>

      {/* ── Dark overlay ── */}
      <div
        className={`fixed inset-0 z-40 bg-navy/60 backdrop-blur-sm transition-opacity duration-400 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* ── Slide-in menu from right ── */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`fixed top-0 right-0 z-50 h-full w-[min(85vw,400px)] bg-navy shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button inside panel */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="p-3 text-white/70 hover:text-white min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Cerrar menú"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 flex flex-col px-8 py-4 gap-1 overflow-y-auto" aria-label="Enlaces de navegación">
          {links.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-gold text-2xl font-light tracking-wide transition-all duration-300 py-4 px-2 rounded-lg hover:bg-white/5"
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms", opacity: open ? 1 : 0, transform: open ? "translateX(0)" : "translateX(24px)" }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Social icons in panel */}
        <div
          className="flex items-center gap-2 px-8 py-6 border-t border-white/[0.06]"
          style={{ transitionDelay: open ? "400ms" : "0ms", opacity: open ? 1 : 0, transition: "opacity 0.4s" }}
        >
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 text-white/50 hover:text-gold transition-colors duration-300 min-w-[48px] min-h-[48px] flex items-center justify-center"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* ── Bottom navigation (mobile < 768px) ── */}
      <nav
        className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-navy-deep/95 backdrop-blur-lg border-t border-white/[0.06] pb-safe"
        aria-label="Navegación rápida"
      >
        <div className="flex items-center justify-around">
          {bottomNavItems.map(({ label, href, Icon, section }) => (
            <a
              key={href}
              href={href}
              className={`flex flex-col items-center gap-1 py-2 px-1 min-w-[48px] min-h-[56px] justify-center transition-colors duration-200 ${
                activeSection === section
                  ? "text-gold"
                  : "text-white/40 hover:text-white/70"
              }`}
              aria-label={label}
              aria-current={activeSection === section ? "page" : undefined}
            >
              <Icon />
              <span className="text-[10px] font-medium tracking-wide">{label}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
