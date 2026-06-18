"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
);

const socials = [
  { href: "https://www.facebook.com/vecinospormontellano/", label: "Facebook", Icon: FacebookIcon },
  { href: "https://www.instagram.com/vecinospormontellano/", label: "Instagram", Icon: InstagramIcon },
  { href: "https://www.tiktok.com/@vecinos.por.monte", label: "TikTok", Icon: TikTokIcon },
];

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes Somos", href: "#quienes-somos" },
  { label: "Campañas", href: "#campanas" },
  { label: "Nuestro Equipo", href: "#nuestro-equipo" },
  { label: "Nuestra Propuesta", href: "#nuestra-propuesta" },
  { label: "Qué Está Pasando", href: "#que-esta-pasando" },
  { label: "Te Escuchamos", href: "#te-escuchamos" },
  { label: "Únete", href: "#unete" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const focusableElementsRef = useRef<HTMLElement[]>([]);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  // Close on Escape
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

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Focus first link when menu opens
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        const firstLink = menuRef.current?.querySelector("a") as HTMLElement;
        firstLink?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // Close on desktop resize
  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  // Focus trap inside menu modal
  useEffect(() => {
    if (!open || !menuRef.current) return;

    const menu = menuRef.current;
    const getFocusables = () => {
      return Array.from(
        menu.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
    };

    focusableElementsRef.current = getFocusables();

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const focusables = getFocusables();
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", trapFocus);
    return () => document.removeEventListener("keydown", trapFocus);
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-primary/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <nav className="relative mx-auto flex items-center justify-between max-w-[90rem] px-5 sm:px-8 py-4 lg:px-12" aria-label="Navegación principal">
          {/* Logo */}
          <a href="#inicio" className="group z-50 flex shrink-0 items-center gap-3" aria-label="Vecinos por Montellano — Ir al inicio">
            <span className="relative block h-11 w-11">
              <Image
                src="/assets/logo-mark-transparent.png"
                alt=""
                fill
                sizes="44px"
                className="object-contain brightness-0 invert transition-transform duration-500 group-hover:scale-105"
              />
            </span>
            <span className="font-heading text-sm font-semibold tracking-wide text-white sm:text-lg">
              Vecinos Por Montellano
            </span>
          </a>

          {/* Desktop nav links - visible lg+ */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-white/75 hover:text-gold text-sm tracking-wide transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop socials + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 text-white/55 hover:text-gold transition-colors duration-300"
              >
                <Icon />
              </a>
            ))}
            <a
              href="#te-escuchamos"
              className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-primary text-sm font-semibold hover:bg-gold-light transition-colors duration-300"
            >
              Envía tu propuesta
            </a>
          </div>

          {/* Mobile/tablet hamburger — visible < lg */}
          <div className="lg:hidden absolute right-5 z-50 flex items-center sm:right-8">
            <button
              ref={hamburgerRef}
              onClick={() => setOpen(!open)}
              className={`group flex min-h-[48px] items-center gap-3 px-2 py-3 transition-colors duration-300 ${
                scrolled ? "text-white" : "text-white"
              }`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-white/65 sm:block">
                Menú
              </span>
              <div className="flex w-6 flex-col gap-1.5">
                <span className={`block h-[1.5px] bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
                <span className={`block h-[1.5px] bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
                <span className={`block h-[1.5px] bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-primary/70 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        aria-hidden={!open}
        className={`fixed top-0 right-0 z-50 h-full w-[min(85vw,420px)] bg-primary shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="p-3 text-white/70 hover:text-white min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Cerrar menú"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 flex flex-col px-8 py-6 gap-1 overflow-y-auto" aria-label="Enlaces de navegación">
          {links.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="text-white/70 hover:text-gold text-2xl font-light tracking-wide transition-all duration-300 py-4 px-2"
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms", opacity: open ? 1 : 0, transform: open ? "translateX(0)" : "translateX(24px)" }}
            >
              {label}
            </a>
          ))}
          <a
            href="#te-escuchamos"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="mt-6 inline-flex items-center gap-2 bg-gold text-primary px-6 py-3.5 text-base font-semibold transition-colors duration-300 self-start"
            style={{ transitionDelay: open ? `${links.length * 50}ms` : "0ms", opacity: open ? 1 : 0 }}
          >
            Envía tu propuesta
          </a>
        </nav>

        <div className="flex items-center gap-2 px-8 py-6 border-t border-white/[0.08]">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              tabIndex={open ? 0 : -1}
              className="p-3 text-white/50 hover:text-gold transition-colors duration-300 min-w-[48px] min-h-[48px] flex items-center justify-center"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
