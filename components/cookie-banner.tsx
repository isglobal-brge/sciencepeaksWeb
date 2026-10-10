"use client";

import { useState, useEffect, useRef } from "react";
import "./cookie-banner.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { Cookie, Settings, ExternalLink } from "lucide-react";
import { useCookieConsent } from "@/hooks/use-cookie-consent";

const CookieSettingsDialog = dynamic(
  () =>
    import("./cookie-settings-dialog").then(
      (module) => module.CookieSettingsDialog,
    ),
  {
    ssr: false,
    loading: () => (
      <p className="sp-cookie-loading" role="status">
        Loading cookie settings…
      </p>
    ),
  },
);

export function CookieBanner() {
  const [showConfigModal, setShowConfigModal] = useState(false);
  const configurationTrigger = useRef<HTMLElement | null>(null);
  const [configurationRequested, setConfigurationRequested] = useState(false);

  const {
    preferences,
    hasConsent,
    isLoading,
    updatePreferences,
    acceptAll,
    rejectAll,
  } = useCookieConsent();

  useEffect(() => {
    const openSettings = () => {
      configurationTrigger.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
      setConfigurationRequested(true);
      setShowConfigModal(true);
    };
    window.addEventListener("sciencepeaks:cookie-settings", openSettings);
    return () =>
      window.removeEventListener("sciencepeaks:cookie-settings", openSettings);
  }, []);

  const handleAcceptAll = () => {
    acceptAll();
    setShowConfigModal(false);
  };

  const openConfiguration = () => {
    configurationTrigger.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    setConfigurationRequested(true);
    setShowConfigModal(true);
  };

  return (
    <>
      {/* Cookie Banner */}
      {!hasConsent && (
        <aside aria-label="Cookie preferences" className="sp-cookie-banner">
          <div className="sp-cookie-banner-inner">
            <div className="sp-cookie-banner-layout">
              <div className="sp-cookie-banner-copy">
                <div className="sp-cookie-banner-icon">
                  <Cookie
                    className="h-5 w-5 text-teal-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="sp-cookie-banner-text">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Cookies and Privacy
                  </h3>
                  <p className="sp-cookie-introduction">
                    Choose whether to allow optional cookies. Accept, reject or
                    configure your preferences below.
                  </p>
                  <details className="sp-cookie-disclosure">
                    <summary>How cookies and your data are used</summary>
                    <div className="sp-cookie-disclosure-copy">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        This website uses its own cookies and third party cookies to
                        make sure that it works properly, as well as some
                        &quot;optional&quot; cookies to personalise content and
                        advertising, provide social media features and analyse our
                        traffic and how people use the website. They are important
                        for you and for us because they influence your browsing
                        experience, allow us to protect your privacy, and help us to
                        continue improving the content by generating profiles based
                        on browsing habits and thus displaying useful content.
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        By accepting some or all optional cookies you give consent
                        to the processing of your personal data, including transfer
                        to third parties, some in countries outside of the European
                        Economic Area that do not offer the same data protection
                        standards as the country where you live.
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        You can decide which optional cookies to accept by clicking
                        on CONFIGURE, where you can also find more information about
                        how your personal data is processed.{" "}
                        <Link
                          href="/privacy-policy"
                          className="text-teal-600 hover:text-teal-700 underline inline-flex items-center gap-1"
                        >
                          View our Privacy Policy
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </Link>
                      </p>
                    </div>
                  </details>
                </div>
              </div>

              <div className="sp-cookie-banner-actions">
                <Button
                  disabled={isLoading}
                  onClick={handleAcceptAll}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 text-sm"
                >
                  ACCEPT AND NAVIGATE
                </Button>
                <Button
                  disabled={isLoading}
                  onClick={openConfiguration}
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-2 text-sm"
                >
                  <Settings className="h-4 w-4 mr-2" aria-hidden="true" />
                  CONFIGURE
                </Button>
                <Button
                  disabled={isLoading}
                  onClick={rejectAll}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 text-sm"
                >
                  REJECT
                </Button>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Configuration Modal */}
      {configurationRequested && (
        <CookieSettingsDialog
          open={showConfigModal}
          preferences={preferences}
          onOpenChange={setShowConfigModal}
          onSave={(nextPreferences) => {
            updatePreferences(nextPreferences);
            setShowConfigModal(false);
          }}
          onAcceptAll={handleAcceptAll}
          onReturnFocus={() => configurationTrigger.current?.focus()}
        />
      )}
    </>
  );
}
