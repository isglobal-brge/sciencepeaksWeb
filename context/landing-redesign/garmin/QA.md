# Garmin landing feature QA

Verified locally on 10 October 2026 against the production static export in `out/`, served with gzip on port 4183. The [implementation and sources](README.md) describe the approved Health SDK access wording and authentic Garmin/product assets. No deployment, commit or push was performed.

## Build and crawlability

`npm run lint`, `npm run typecheck` and the final `npm run build` passed. The export includes all ten generated entries, with the homepage at 29.4 kB and first-load JavaScript at 136 kB. No runtime dependency was added.

The existing static-export audit passed **14/14 checks**. Both Garmin explanations are present in `out/index.html` (163 and 176 characters), alongside the hero credibility link and updated wearable FAQ. The single H1, eight FAQ answers, metadata, canonical, schema and existing interactive explanations are preserved. Internal references, originals and QA files remain outside the export. All three public Garmin derivatives match their recorded hashes and exported copies.

## Layout and interaction

Chrome 154 browser emulation covered both Activity and Overnight HRV at these twelve viewport sizes: 320×568, 360×800, 375×667, 390×844, 412×915, 430×932, 568×320, 844×390, 768×1024, 1024×768, 1280×800 and 1440×900.

All **24 mode/layout cases passed**: no horizontal page or section overflow, no clipped explanatory text, loaded visible images, complete professional screenshot frames, clear watch captions, correct tab/panel associations and at least 44px-high selectors and follow-up link. Representative 320px, 390px, 768px and 1440px captures were visually inspected. The watch/app pair stacks above the review on narrow screens; complete charts remain available through the existing full-size viewer.

Touch selection passed. ArrowLeft, ArrowRight (including wrapping), Home and End passed five keyboard cases, with one tab stop and focus following selection. The mobile full-size viewer fits, focuses Close, closes with Escape and returns focus to its trigger. Reduced motion removes the feature's animations and perspective. Without JavaScript, both explanations and views display, the unusable selector disappears and the 320px page has no horizontal overflow. No browser errors or failed local asset responses occurred.

The rolling-strip check also passed at five widths after reusing the smaller Garmin wordmark: all seven logos load in both loop copies, mouse hover leaves motion running, the loop wraps smoothly, duplicates stay out of keyboard navigation, reduced motion exposes the static list and the header retains no pause control.

## Accessibility

Focused axe WCAG A/AA scans found **zero violations** at 390px and 1440px. Automated color checks could not resolve the translucent gradients and radial light. A separate WCAG relative-luminance calculation checked a conservative composited background: muted body text 5.17:1, ink 10.36:1, deep-teal text 5.26:1, large teal heading 4.02:1 and the selected tab 6.64:1. These meet their respective 4.5:1 or large-text 3:1 thresholds. The follow-up link uses deep teal on hover.

This is local Chrome emulation and focused accessibility testing; physical iPhone/Android and Safari behavior were not tested.

## Loading

Fresh Lighthouse 13.5.0 runs used the finished export, default simulated mobile throttling and a separate desktop run. Builds and browser QA were stopped during measurement.

| Metric | Mobile | Desktop |
| --- | --- | --- |
| Performance | 95 | 100 |
| Accessibility | 100 | 100 |
| Best practices | 100 | 100 |
| SEO | 100 | 100 |
| First Contentful Paint | 1.2s | 0.3s |
| Largest Contentful Paint | 2.9s | 0.7s |
| Total Blocking Time | 10ms | 0ms |
| Cumulative Layout Shift | 0 | 0 |

The 3,628-byte wordmark is reused across the hero, feature and strip, replacing a 20,611-byte strip PNG request. The 8,940/21,792-byte watch derivatives load lazily. Existing app and professional derivatives are reused; full-size viewer images load on request. The feature uses CSS depth and finite entrance transitions, without WebGL or a new animation loop.

Mobile performance retains the earlier score of 95, while LCP remains above the plan's 2.5s target. These lab results do not establish field Core Web Vitals or deployment readiness. Delivery, cache behavior, canonical redirects and real-user performance still require verification on the intended host after publication, as recorded in [the SEO/AEO QA](../SEO_AEO_QA.md).

## Evidence

- [Responsive and interaction report](../../../tmp/garmin-integration-2026-10-10/report.json)
- [Manual contrast calculations](../../../tmp/garmin-integration-2026-10-10/contrast.json)
- [Mobile Lighthouse](../../../tmp/garmin-integration-2026-10-10/lighthouse-mobile.json) and [desktop Lighthouse](../../../tmp/garmin-integration-2026-10-10/lighthouse-desktop.json)
- [320px activity](../../../tmp/garmin-integration-2026-10-10/garmin-320-activity.png), [390px overnight HRV](../../../tmp/garmin-integration-2026-10-10/garmin-390-overnight.png), [768px activity](../../../tmp/garmin-integration-2026-10-10/garmin-768-activity.png) and [1440px overnight HRV](../../../tmp/garmin-integration-2026-10-10/garmin-1440-overnight.png)
- [Rolling-strip report](../../../tmp/logo-motion-2026-10-10/report.json)
- [Static-export report](../../../tmp/seo-mobile-2026-10-10/qa/seo-export.json)

Reproduce with `npm run build`, `npm start`, `node tmp/garmin-integration-2026-10-10/verify.mjs` and `python3 tmp/seo-mobile-2026-10-10/verify-export.py`. QA browser profiles are isolated and removed when their runs finish; the owned preview server is stopped after verification.
