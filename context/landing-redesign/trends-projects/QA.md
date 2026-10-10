# Trends and Projects QA — 10 October 2026

The local production export passed lint, TypeScript validation and `npm run build`. Homepage route output is 32.9 kB with 139 kB first-load JavaScript, compared with 29.4/136 kB in the preceding Garmin build. The feature adds no dependency. The redesign remains unpublished; `docs/` was not replaced.

## Responsive and interaction checks

Chrome emulation covered 320×568, 360×800, 375×667, 390×844, 412×915, 430×932, 568×320, 844×390, 768×1024, 1024×768, 1280×800 and 1440×900.

- All 12 Trends layouts retained the complete screenshot frame, loaded images and contained text, with no horizontal overflow.
- All 48 Projects layout/mode cases passed overflow, text, image, tab selection and panel-association checks.
- All four participant touch selections opened the correct individual figure. Project controls meet a minimum 44 px height.
- Five keyboard navigation cases passed: arrow wrapping, selection/focus, Home, End and one tab stop.
- The Trends full-size viewer fitted the mobile viewport, focused Close, closed with Escape and returned focus to its trigger.
- Keyboard opening of the actual project disclosure loaded its image without overflow.
- Reduced-motion layouts had no active section animation at 390 and 1440 px.
- With JavaScript disabled at 320 px, all four project explanations remained visible, inactive controls were hidden and the page had no overflow.
- No browser exceptions or failed asset responses were recorded.

Desktop/mobile captures were visually inspected, including the 320 px Trends view and all desktop project review modes. [The browser report](../../../tmp/trends-projects-2026-10-10/report.json) records each case. Reproduce with `node tmp/trends-projects-2026-10-10/verify.mjs` against the export preview on port 4183; the script uses an isolated Chrome profile and cleans it up.

## Accessibility and exported content

Ten focused axe scans covered Trends and every Projects mode at 390 and 1440 px against WCAG 2 A/AA and 2.1 AA tags. They reported no violations. Gradient backgrounds caused incomplete automated color-contrast results. Separate WCAG contrast calculations used a conservative `#d6ebf0` glass background: muted body text 5.28:1, navy headings 10.58:1, dark teal links 5.37:1 and blue model legend 4.61:1. White selected-tab text is 6.64:1, participant letters 8.43:1, and teal section headings on the page background 4.51:1. These checks do not constitute a full accessibility certification.

The existing SEO/export audit passed all 14 checks, including metadata, schema syntax, IDs, tab targets and local links/assets. Nine additional content/provenance/contrast checks passed: the unique Trends section and image dimensions, all four exported project explanations, all four HTML figures, the project definition and FAQ, original source hash, five matching public/export derivatives, internal-source exclusion, full-size on-demand loading and conservative text contrast. [The additional report](../../../tmp/trends-projects-2026-10-10/export-and-contrast.json) contains the results.

## Loading measurements

Fresh Lighthouse 13.5 audits used the final local gzip-served export. Mobile used default simulated throttling; desktop used the desktop preset. Builds and other browser QA were stopped during measurement.

| Metric | Mobile | Desktop |
| --- | --- | --- |
| Performance | 94 | 100 |
| Accessibility | 100 | 100 |
| Best practices | 100 | 100 |
| SEO | 100 | 100 |
| First Contentful Paint | 1.2 s | 0.3 s |
| Largest Contentful Paint | 3.0 s | 0.7 s |
| Total Blocking Time | 10 ms | 0 ms |
| Cumulative Layout Shift | 0 | 0 |

Mobile LCP remains above the plan's 2.5 s target. These are local laboratory measurements, not physical-device results, real-user Core Web Vitals or a deployed-host audit. Delivery, redirects, compression/caching and field performance need verification when the redesign is published. [Mobile report](../../../tmp/trends-projects-2026-10-10/lighthouse-mobile.json), [desktop report](../../../tmp/trends-projects-2026-10-10/lighthouse-desktop.json).

## Visual captures

- Trends: [320 px](../../../tmp/trends-projects-2026-10-10/trends-320.png), [390 px](../../../tmp/trends-projects-2026-10-10/trends-390.png), [768 px](../../../tmp/trends-projects-2026-10-10/trends-768.png), [1440 px](../../../tmp/trends-projects-2026-10-10/trends-1440.png).
- Projects on mobile: [cohort](../../../tmp/trends-projects-2026-10-10/projects-390-0.png), [individual](../../../tmp/trends-projects-2026-10-10/projects-390-1.png), [compare](../../../tmp/trends-projects-2026-10-10/projects-390-2.png), [models](../../../tmp/trends-projects-2026-10-10/projects-390-3.png).
- Projects on desktop: [cohort](../../../tmp/trends-projects-2026-10-10/projects-1440-0.png), [individual](../../../tmp/trends-projects-2026-10-10/projects-1440-1.png), [compare](../../../tmp/trends-projects-2026-10-10/projects-1440-2.png), [models](../../../tmp/trends-projects-2026-10-10/projects-1440-3.png).
