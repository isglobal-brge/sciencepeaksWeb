"use client";

import { useEffect } from "react";

export function MotionEffects() {
  useEffect(() => {
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
    return () => {
      reveals.disconnect();
      visibility.disconnect();
      document.documentElement.removeAttribute("data-hero-visible");
    };
  }, []);
  return null;
}
