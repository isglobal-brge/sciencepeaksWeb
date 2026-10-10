"use client";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="sp-cookie-settings"
      aria-haspopup="dialog"
      onClick={() =>
        window.dispatchEvent(new Event("sciencepeaks:cookie-settings"))
      }
    >
      Cookie settings
    </button>
  );
}
