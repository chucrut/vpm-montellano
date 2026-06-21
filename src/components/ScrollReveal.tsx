"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export default function ScrollReveal() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    elements.forEach((element) => element.classList.remove("visible"));

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("visible"));
      return;
    }

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (
        rect.top < window.innerHeight * 0.92 &&
        rect.bottom > 0 &&
        rect.left < window.innerWidth * 0.92 &&
        rect.right > 0
      ) {
        element.classList.add("visible");
      }
    });
    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    elements
      .filter((element) => !element.classList.contains("visible"))
      .forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
