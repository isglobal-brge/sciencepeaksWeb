import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { CookieSettingsButton } from "@/components/landing/CookieSettingsButton";

export const legalPages = [
  { href: "/legal-notice/", label: "Legal Notice" },
  { href: "/privacy-policy/", label: "Privacy Policy" },
  { href: "/cookies-policy/", label: "Cookies Policy" },
  { href: "/account-deletion/", label: "Account Deletion" },
];

export function Footer() {
  return (
    <footer className="sp-footer">
      <div className="sp-wrap">
        <div className="sp-footer-top">
          <Link className="sp-brand" href="/">
            <img
              src="/logo.svg"
              width="36"
              height="34"
              alt=""
              loading="lazy"
              decoding="async"
            />
            SciencePeaks
          </Link>
          <p>A fuller picture of activity, fatigue and recovery.</p>
          <Link href="/#contact" className="sp-text-link">
            Let’s talk <ArrowUpRight size={18} aria-hidden />
          </Link>
        </div>
        <div className="sp-footer-bottom">
          <div className="sp-footer-owner">
            <a
              className="sp-footer-isglobal"
              href="https://www.isglobal.org"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ISGlobal (opens in a new tab)"
            >
              <img
                src="/isglobal_logo.png"
                width="180"
                height="180"
                alt="ISGlobal"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p>
              © {new Date().getFullYear()} SciencePeaks. All rights reserved.
            </p>
          </div>
          <nav aria-label="Legal information">
            {legalPages.map(({ href, label }) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
            <CookieSettingsButton />
          </nav>
        </div>
      </div>
    </footer>
  );
}
