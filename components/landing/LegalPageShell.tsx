import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/ssr";
import { Footer, legalPages } from "@/components/footer";
import "./legal.css";

export function LegalPageShell({
  children,
  currentPage,
}: {
  children: ReactNode;
  currentPage: string;
}) {
  return (
    <div className="sp-site sp-legal-site">
      <a className="sp-skip" href="#legal-content">
        Skip to content
      </a>
      <header className="sp-header">
        <nav
          className="sp-nav sp-wrap sp-legal-header"
          aria-label="Main navigation"
        >
          <Link className="sp-brand" href="/" aria-label="SciencePeaks home">
            <img src="/logo.svg" width="38" height="36" alt="" />
            <span>SciencePeaks</span>
          </Link>
          <Link className="sp-legal-back" href="/">
            <ArrowLeft size={18} aria-hidden /> Back to Home
          </Link>
        </nav>
      </header>
      <main className="sp-wrap sp-legal-main" id="legal-content">
        <nav className="sp-legal-nav" aria-label="Legal pages">
          {legalPages.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={href === currentPage ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <article className="sp-legal-document">{children}</article>
      </main>
      <Footer />
    </div>
  );
}
