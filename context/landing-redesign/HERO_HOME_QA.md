# Home dashboard hero — 10 October 2026

The founder explicitly requested the supplied home dashboard in the hero. The full capture now leads the hero in a glass frame, with the existing fit/actual-size image viewer and the professional follow-up link beneath it. Detailed overnight and symptom views remain in the platform and mobile sections. The former overlapping collage and its unused tilt handlers/styles were removed.

The 2940 × 1674px PNG is preserved at `implementation-assets/home-dashboard-founder-2026-10-10.png`. The public images retain the complete frame with unchanged names, values and product content; only proportional resizing and WebP compression were applied. [FOUNDER_SCREENSHOT_MANIFEST.json](FOUNDER_SCREENSHOT_MANIFEST.json) records the explicit source authorization, original hash, evidence class, and hashes/dimensions for 320, 640, 960, 1600 and full-resolution derivatives. This own-account capture is not labelled synthetic; its displayed scores are not evidence of clinical validation.

The thumbnail reserves its dimensions, loads eagerly with high fetch priority, and selects responsive derivatives. The 2940px full-resolution image is requested only when the viewer opens. The new optional priority prop preserves lazy loading for other product screenshots.

Local checks passed at 320, 375, 390, 600, 650, 768, 888, 900, 901, 1024, 1100, 1150, 1280, 1440, 1536, 1600 and 1920px. All 17 layouts decoded the home screenshot, preserved its ratio, contained the image and caption, kept the primary CTA above the fold, and showed no horizontal overflow. The follow-up link remains separate and reaches the existing workflow section.

Full-resolution viewing passed at 1440, 390 and 320px, including original dimensions, fit/actual-size modes, contained dialog bounds, initial close-button focus, Escape dismissal and focus return. Three targeted axe checks returned zero WCAG A/AA violations. No browser runtime errors or failed HTTP responses occurred. Without JavaScript, the eager image and direct full-resolution link remain available and the script-dependent viewer button is hidden. Desktop and mobile captures were visually reviewed.

`npm run build`, `npm run lint`, `npm run typecheck` and `git diff --check` passed. Source and derivative hashes and dimensions were independently verified. Results, screenshots and the isolated browser check are in `tmp/hero-home-2026-10-10/`; browser sessions and temporary profiles were closed and removed. The local preview was refreshed. No commit, push or deployment was performed.
