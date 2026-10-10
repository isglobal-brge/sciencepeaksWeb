"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";

export function LandingHeader() {
  const [open, setOpen] = useState(false);
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
          <a href="#team" onClick={() => setOpen(false)}>
            Our team
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
