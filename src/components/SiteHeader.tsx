"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { routes } from "@/data/site";
import SocialIcons from "./SocialIcons";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const trigger = useRef<HTMLButtonElement>(null);
  const overlay = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!open) return;

    const bodyOverflow = document.body.style.overflow;
    const htmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      overlay.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    }, 80);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = htmlOverflow;
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        trigger.current?.focus();
      }

      if (event.key === "Tab" && open && overlay.current) {
        const overlayFocusable = Array.from(
          overlay.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
        );
        const focusable = trigger.current
          ? [trigger.current, ...overlayFocusable]
          : overlayFocusable;

        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "menu-is-open" : ""}`}>
        <SocialIcons className="header-socials" tabIndex={open ? -1 : undefined} />

        <Link
          className="header-brand"
          href="/"
          aria-label="Vecinos por Montellano — inicio"
          onClick={() => setOpen(false)}
          tabIndex={open ? -1 : undefined}
        >
          <Image
            src="/assets/logo-transparent.png"
            alt="Vecinos por Montellano"
            width={1254}
            height={1254}
            priority
          />
        </Link>

        <button
          ref={trigger}
          className="menu-trigger"
          type="button"
          aria-expanded={open}
          aria-controls="overlay-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-trigger-label">{open ? "CERRAR" : "MENÚ"}</span>
          <span className="menu-trigger-icon" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>
      </header>

      <div
        ref={overlay}
        id="overlay-navigation"
        className={`overlay-navigation ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navegación principal"
        aria-hidden={!open}
      >
        <div className="overlay-media" aria-hidden="true">
          <Image
            src="/assets/header_3.png"
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="overlay-media-image"
          />
          <div className="overlay-media-shade" />
          <p>Montellano · Sevilla</p>
        </div>

        <div className="overlay-menu-panel">
          <nav>
            <ol>
              {routes.map((route) => (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                    aria-current={pathname === route.href ? "page" : undefined}
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>

          <div className="overlay-meta">
            <SocialIcons tabIndex={open ? 0 : -1} />
            <div className="overlay-legal">
              <Link href="/aviso-legal" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Aviso legal</Link>
              <Link href="/privacidad" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Privacidad</Link>
            </div>
            <p>Contacto a través de nuestros canales oficiales<br />Montellano · Sevilla</p>
          </div>
        </div>
      </div>
    </>
  );
}
