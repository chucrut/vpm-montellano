"use client";

import {
  Children,
  KeyboardEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

export default function MobileHorizontalScroller({
  children,
  label = "Contenido de la página",
}: {
  children: ReactNode;
  label?: string;
}) {
  const panels = Children.toArray(children);
  const scroller = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    const syncMode = () => {
      document.documentElement.classList.toggle(
        "mobile-horizontal-active",
        media.matches,
      );
      document.body.classList.toggle("mobile-horizontal-active", media.matches);
    };

    syncMode();
    media.addEventListener("change", syncMode);

    return () => {
      media.removeEventListener("change", syncMode);
      document.documentElement.classList.remove("mobile-horizontal-active");
      document.body.classList.remove("mobile-horizontal-active");
    };
  }, []);

  useEffect(() => {
    const alignAfterResize = () => {
      const element = scroller.current;
      if (!element) return;
      element.scrollTo({
        left: active * element.clientWidth,
        behavior: "auto",
      });
    };

    window.addEventListener("resize", alignAfterResize);
    return () => window.removeEventListener("resize", alignAfterResize);
  }, [active]);

  useEffect(
    () => () => {
      if (frame.current !== null) {
        window.cancelAnimationFrame(frame.current);
      }
    },
    [],
  );

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("vpm:horizontal-panel", { detail: { active } }),
    );

    const panel = scroller.current?.children.item(active);
    panel
      ?.querySelectorAll<HTMLElement>(".reveal")
      .forEach((element) => element.classList.add("visible"));
  }, [active]);

  function updateActivePanel() {
    const element = scroller.current;
    if (!element || element.clientWidth === 0) return;
    const next = Math.max(
      0,
      Math.min(panels.length - 1, Math.round(element.scrollLeft / element.clientWidth)),
    );
    setActive(next);
  }

  function handleScroll() {
    if (frame.current !== null) return;
    frame.current = window.requestAnimationFrame(() => {
      updateActivePanel();
      frame.current = null;
    });
  }

  function goTo(index: number) {
    const element = scroller.current;
    if (!element) return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    element.scrollTo({
      left: index * element.clientWidth,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    if (
      target.matches(
        "input, textarea, select, button, a, [contenteditable='true']",
      )
    ) {
      return;
    }

    if (event.key === "ArrowRight" || event.key === "PageDown") {
      event.preventDefault();
      goTo(Math.min(active + 1, panels.length - 1));
    } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      goTo(Math.max(active - 1, 0));
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(panels.length - 1);
    }
  }

  return (
    <div className="mobile-horizontal-shell">
      <div
        ref={scroller}
        className="mobile-horizontal-scroller"
        aria-label={label}
        aria-roledescription="carrusel"
        tabIndex={0}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
      >
        {panels.map((panel, index) => (
          <div
            className={`mobile-horizontal-panel ${index === active ? "is-active" : ""}`}
            role="group"
            aria-roledescription="panel"
            aria-label={`${index + 1} de ${panels.length}`}
            aria-current={index === active ? "step" : undefined}
            key={index}
          >
            {panel}
          </div>
        ))}
      </div>

      <div
        className="mobile-horizontal-progress"
        aria-label={`Panel ${active + 1} de ${panels.length}`}
      >
        <span aria-hidden="true">{String(active + 1).padStart(2, "0")}</span>
        <div>
          {panels.map((_, index) => (
            <button
              className={index === active ? "is-active" : ""}
              type="button"
              aria-label={`Ir al panel ${index + 1}`}
              aria-current={index === active ? "step" : undefined}
              onClick={() => goTo(index)}
              key={index}
            />
          ))}
        </div>
        <span aria-hidden="true">{String(panels.length).padStart(2, "0")}</span>
        {active === 0 && <small aria-hidden="true">DESLIZA →</small>}
      </div>
    </div>
  );
}
