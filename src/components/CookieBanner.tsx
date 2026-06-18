"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Read localStorage in effect to avoid SSR mismatch
    const stored = typeof window !== "undefined" ? localStorage.getItem("vpm-cookie-consent") : null;
    if (!stored) {
      // Use requestAnimationFrame to defer the state update
      requestAnimationFrame(() => setVisible(true));
    }
  }, []);

  const accept = (choice: "all" | "essential") => {
    localStorage.setItem("vpm-cookie-consent", choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-[60] border-t border-offwhite-dark bg-white/95 backdrop-blur-md shadow-xl dark:bg-[#242424]/95 dark:border-[#333]"
      role="alertdialog"
      aria-label="Aviso de cookies"
    >
      <div className="max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-12 py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <p className="text-sm text-text-light leading-relaxed flex-1 dark:text-[#999]">
          Usamos cookies para mejorar tu experiencia y analizar el tráfico. Consulta nuestra{" "}
          <a href="/propuestas" className="underline text-primary dark:text-gold hover:opacity-80">
            política de privacidad
          </a>
          .
        </p>
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={() => accept("all")}
            className="px-5 py-2.5 bg-primary text-white text-xs font-semibold uppercase tracking-[0.12em] hover:bg-primary-light transition-colors duration-300 dark:bg-gold dark:text-primary dark:hover:bg-gold-light min-h-[44px]"
          >
            Aceptar todo
          </button>
          <button
            onClick={() => accept("essential")}
            className="px-5 py-2.5 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-[0.12em] hover:bg-primary/5 transition-colors duration-300 dark:border-[#555] dark:text-[#ccc] dark:hover:bg-white/5 min-h-[44px]"
          >
            Solo esenciales
          </button>
        </div>
      </div>
    </div>
  );
}
