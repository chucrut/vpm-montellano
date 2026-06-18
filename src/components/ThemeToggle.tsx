"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    requestAnimationFrame(() => {
      setMounted(true);
      setDark(isDark);
    });
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("vpm-theme", next ? "dark" : "light");
    } catch {}
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg border border-offwhite-dark text-text hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 dark:bg-[#333] dark:border-[#555] dark:text-[#ccc] dark:hover:bg-[#444]"
    >
      {dark ? (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}
