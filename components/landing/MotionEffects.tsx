"use client";

import { useEffect } from "react";

export function MotionEffects() {
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const reveals = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            reveals.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(".sp-reveal")
      .forEach((element) => reveals.observe(element));
    const ambient = document.querySelector(".sp-hero");
    const visibility = new IntersectionObserver((entries) => {
      document.documentElement.dataset.heroVisible = String(
        entries[0].isIntersecting,
      );
    });
    if (ambient) visibility.observe(ambient);
    const art = document.querySelector<HTMLElement>(".sp-hero-art");
    let frame = 0;
    const move = (event: PointerEvent) => {
      if (
        !art ||
        event.pointerType !== "mouse" ||
        preference.matches ||
        document.documentElement.dataset.motionPaused === "true"
      )
        return;
      const rect = art.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        art.style.setProperty("--tilt-x", `${x * 5}deg`);
        art.style.setProperty("--tilt-y", `${-y * 5}deg`);
      });
    };
    const reset = () => {
      cancelAnimationFrame(frame);
      art?.style.setProperty("--tilt-x", "0deg");
      art?.style.setProperty("--tilt-y", "0deg");
    };
    art?.addEventListener("pointermove", move, { passive: true });
    art?.addEventListener("pointerleave", reset);
    return () => {
      reveals.disconnect();
      visibility.disconnect();
      cancelAnimationFrame(frame);
      art?.removeEventListener("pointermove", move);
      art?.removeEventListener("pointerleave", reset);
      document.documentElement.removeAttribute("data-hero-visible");
    };
  }, []);
  return null;
}
