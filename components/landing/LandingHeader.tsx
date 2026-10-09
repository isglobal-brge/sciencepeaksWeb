"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, List, X, Pause, Play } from "@phosphor-icons/react";

export function LandingHeader() {
  const [open, setOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPaused(preference.matches);
    sync();
    preference.addEventListener("change", sync);
    return () => {
      preference.removeEventListener("change", sync);
      document.documentElement.removeAttribute("data-motion-paused");
    };
  }, []);
  useEffect(() => {
    document.documentElement.dataset.motionPaused = String(paused);
  }, [paused]);
  useEffect(() => {
    if (!open) return;
    document.querySelector<HTMLAnchorElement>("#sp-navigation a")?.focus();
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("sp-menu-button")?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className="sp-header">
      <nav className="sp-nav sp-wrap" aria-label="Main navigation">
        <Link className="sp-brand" href="/" aria-label="SciencePeaks home">
          <img src="/logo.svg" width="38" height="36" alt="" />
          <span>SciencePeaks</span>
        </Link>
        <div
          className={`sp-nav-links ${open ? "is-open" : ""}`}
          id="sp-navigation"
        >
          <a href="#platform" onClick={() => setOpen(false)}>
            The platform
          </a>
          <a href="#audiences" onClick={() => setOpen(false)}>
            Who it helps
          </a>
          <a href="#data-science" onClick={() => setOpen(false)}>
            The science
          </a>
          <a href="#mobile-app" onClick={() => setOpen(false)}>
            The app
          </a>
          <a
            className="sp-button sp-nav-cta"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Request a demo <ArrowUpRight aria-hidden size={17} />
          </a>
        </div>
        <div className="sp-nav-tools">
          <button
            className="sp-motion-button"
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            aria-label={
              paused ? "Resume page animations" : "Pause page animations"
            }
            title={paused ? "Resume animations" : "Pause animations"}
          >
            {paused ? (
              <Play aria-hidden size={16} />
            ) : (
              <Pause aria-hidden size={16} />
            )}
          </button>
          <button
            type="button"
            className="sp-menu-button"
            id="sp-menu-button"
            aria-controls="sp-navigation"
            aria-expanded={open}
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((p) => !p)}
          >
            {open ? (
              <X aria-hidden size={22} />
            ) : (
              <List aria-hidden size={22} />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
