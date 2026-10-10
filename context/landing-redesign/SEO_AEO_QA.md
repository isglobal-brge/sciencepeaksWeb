# SEO/AEO implementation and mobile QA

Verified locally on 10 October 2026 against the production static export in `out/`, served with gzip at `http://127.0.0.1:4183/`. This record covers the replacement landing on `redesign/landing-2026-10-09`. It does not describe a deployment of the redesign or the older website currently online.

## Changes completed

All four activity views, five DLNM panels and four mobile captions now have their explanations in the exported HTML. JavaScript selects which panel to display; the text no longer requires clicking a tab before it exists. With JavaScript disabled, every explanation is displayed and interactive controls are removed. The existing eight FAQ answers remain in the HTML.

The homepage now exports complete Open Graph metadata, including the previously missing type, site name and locale. Account Deletion has its own server-rendered title, description, canonical and social metadata, and appears in the sitemap. The canonical host remains `https://www.sciencepeaks.ai/` throughout the export. Existing legal-page indexing directives are preserved; the sitemap contains only the homepage and Account Deletion. Organization, WebSite, WebPage and WebApplication data retain the existing substantiated claims, without invented ratings, prices or clinical outcomes.

The cookie banner is present in the initial HTML. A compact introduction and native disclosure replace the large block that appeared after hydration. All three original disclosure paragraphs and all eight preference categories are retained. Configuration loads on request, shows loading feedback, traps focus and returns focus when closed. Without JavaScript, the disclosure sits in the normal page flow and has no unusable action buttons.

Mobile navigation and product selectors have at least 44px-high controls. The activity sliders also have 44px-high touch areas while retaining thin visual tracks, and the chart labels are enlarged for narrow screens. Primary explanatory text is 14px, consent text is 13px, and expanded contact privacy information is 12px. Form fields use 16px text on narrow screens. The existing glass, typography and product presentation remain intact.

The 640px hero preview decreased from 29,512 to 16,412 bytes, a 44% reduction. The 1600px preview decreased from 104,200 to 63,374 bytes. Responsive previews were encoded from the preserved founder PNG with the same complete frame and dimensions. The full-resolution viewer image is unchanged. Updated hashes and encoding settings are in [the founder manifest](FOUNDER_SCREENSHOT_MANIFEST.json). The hero remains eager, has high fetch priority and one matching responsive preload; footer images now load lazily. Only the header logo and hero image are eager in the homepage HTML.

Repeated production exports exposed a bundled Webpack disk-cache restore crash (`WasmHash._updateWithBuffer`, undefined `length`). Production compilations now bypass that cache; development caching remains enabled. Repeated exports, including lint and type validation, passed with this workaround. No dependency upgrade was required.

## Responsive and interaction results

Chrome 154 mobile browser emulation covered these CSS viewport sizes:

| Orientation/use | Sizes |
| --- | --- |
| Phone portrait | 320×568, 360×800, 375×667, 390×844, 412×915, 430×932 |
| Phone landscape | 568×320, 844×390 |
| Tablet | 768×1024, 1024×768 |
| Laptop/desktop | 1280×800, 1440×900 |

All 12 layouts passed checks for horizontal page overflow, clipped explanatory text, header overlap, control height and mobile field sizes. The compact and expanded first-visit cookie banner also fitted 320px portrait, 568px landscape and 390px portrait. Forty-four section captures and three first-visit captures were recorded; representative mobile and desktop sections were visually inspected for text wrapping, product-image framing and form layout.

All 13 product tabs passed touch selection, panel association and populated-content checks. ArrowRight, Home and End keyboard navigation passed. Mobile navigation opens with focus inside and closes with Escape. Touch swiping selects the next mobile view without opening the image viewer. The viewer fits the viewport, supports fit/actual-size modes and returns focus after Escape.

Cookie rejection, individual preference saving, reload persistence, deferred configuration loading and focus return passed. The original configuration disclosure/category JSX was compared before and after extraction and remained unchanged apart from handler references and indentation.

The activity calculator's touch sliders and keyboard controls passed; it correctly produced 12 gross MET·h and 10.5 net MET·h for 8 METs over 90 minutes. Its enlarged chart text fitted the SVG at all 12 viewport sizes. Contact required-field validation, success/reset and failure/preserved-input states passed using two intercepted Formspree responses. No real enquiry was sent.

Reduced-motion checks passed. With JavaScript disabled, the page has one H1, eight FAQs, all five DLNM explanations, all four activity explanations and all four mobile captions, without horizontal overflow. The contact form retains its native submission action. No JavaScript errors or failed local asset responses occurred.

Automated axe WCAG A/AA scans found zero violations in the cookie dialog and the full page at 390px and 1440px after transitions settled. This is browser-emulation evidence, not physical iPhone/Android or Safari testing, and does not constitute a complete accessibility certification.

## Logo and motion follow-up

The founder’s 10 October follow-up adds the existing Garmin logo to the rolling strip, removes mouse-hover pausing and removes the header’s page pause/resume button. The visible caption and Garmin text alternative distinguish its wearable integration from ISGlobal’s institutional network and recognitions. Manual pause state and its unused styles were removed; keyboard focus and system reduced-motion preferences still expose a stable logo list.

The updated production export passed build, lint/type validation and all 14 static-export checks. Focused browser checks passed at 320×568, 390×844, 768×1024, 1024×768 and 1440×900: seven logos load in each loop copy, motion advances while hovered, the loop wraps without a visible jump, duplicate links stay out of keyboard navigation, reduced motion shows all seven marks within the viewport, and the header fits without horizontal overflow. Mobile navigation still opens with focus inside and closes with Escape. No browser errors or failed asset responses occurred. Mobile, desktop and reduced-motion strip screenshots were visually inspected. These checks use Chrome emulation; the Lighthouse scores below precede this small follow-up.

[Focused report](../../tmp/logo-motion-2026-10-10/report.json), [390px strip](../../tmp/logo-motion-2026-10-10/logos-390.png), [1440px strip](../../tmp/logo-motion-2026-10-10/logos-1440.png), [reduced-motion strip](../../tmp/logo-motion-2026-10-10/logos-reduced-390.png) and [320px header](../../tmp/logo-motion-2026-10-10/header-320.png). Reproduce with `node tmp/logo-motion-2026-10-10/verify.mjs` against the local export preview.

## Loading results

Fresh Lighthouse runs used the final production export, default simulated mobile throttling and a separate desktop run. Other browser QA and builds were stopped during measurement.

| Metric | Mobile | Desktop |
| --- | --- | --- |
| Performance | 95 | 100 |
| Accessibility | 100 | 100 |
| Best practices | 100 | 100 |
| SEO | 100 | 100 |
| First Contentful Paint | 1.2s | 0.3s |
| Largest Contentful Paint | 2.8s | 0.6s |
| Total Blocking Time | 10ms | 0ms |
| Cumulative Layout Shift | 0 | 0 |

The fresh pre-change audit measured mobile LCP around 3.0s, with the hydrated cookie disclosure as its largest element. The final largest element is the hero product image. Mobile performance is good in this lab run, but LCP remains above the plan's 2.5s target. These results do not establish real-user Core Web Vitals or INP. Repeat measurement on the intended host, with its actual compression, caching and delivery protocol, and assess field data after publication.

The static-export audit passed all 14 checks: metadata, canonical, schema syntax, populated tab explanations, heading/FAQ counts, unique IDs, tab targets, internal-context exclusion, Account Deletion metadata, sitemap membership and local links/assets. No missing local resource was found.

## Evidence and reproduction

- [Static-export audit](../../tmp/seo-mobile-2026-10-10/qa/seo-export.json)
- [Responsive/interaction/accessibility report](../../tmp/seo-mobile-2026-10-10/qa/report.json)
- [Mobile Lighthouse](../../tmp/seo-mobile-2026-10-10/qa/lighthouse-mobile.json) and [desktop Lighthouse](../../tmp/seo-mobile-2026-10-10/qa/lighthouse-desktop.json)
- [320px hero](../../tmp/seo-mobile-2026-10-10/qa/sp-hero-320.png), [390px activity explorer](../../tmp/seo-mobile-2026-10-10/qa/physical-activity-390.png), [320px contact](../../tmp/seo-mobile-2026-10-10/qa/contact-320.png) and [1440px hero](../../tmp/seo-mobile-2026-10-10/qa/sp-hero-1440.png)

These raw artifacts are local QA files outside the public export. The scripts are in `tmp/seo-mobile-2026-10-10/`: `verify-export.py` uses Beautiful Soup; `verify-mobile.mjs` uses the installed Chrome and the cached Puppeteer path recorded in the script. Build with `npm run build`, preview with `npm start`, then run the scripts against port 4183. Lighthouse 13.5.0 was available in the same local cached tool installation; its JSON reports record exact settings and timings.

## Garmin collaboration follow-up

The approved Garmin proposal is now implemented as a small hero credibility link and an interactive watch → app → professional review feature within the platform section. The visible relationship wording is **Approved Health SDK access**, with reviewed iOS and Android apps; broader certification claims are not added. Both Activity and Overnight HRV explanations are in the exported HTML, and the wearable FAQ includes the same documented relationship scope. The rolling strip reuses the smaller 3,628-byte Garmin wordmark.

The final build and 14 export checks passed. Focused verification passed 24 responsive mode/layout cases, touch and keyboard navigation, full-size viewing, reduced motion and a JavaScript-free fallback. Fresh post-integration Lighthouse scores are mobile 95 performance/100 accessibility, best practices and SEO, with LCP 2.9s; desktop scores are all 100, with LCP 0.7s. CLS is zero in both. Mobile LCP remains above the plan's 2.5s target. The earlier loading table describes the pre-integration audit; [the Garmin QA record](garmin/QA.md) contains the latest results, contrast verification and captures.

## Trends and Projects follow-up

The founder's supplied Trends screenshot now anchors a dedicated section explaining period windows, personal references, recording coverage and daily context. Projects has a clear group-workspace definition, a native HTML/CSS/SVG supervisor-to-participant diagram and four selectable explanations of cohort review, individual follow-up, comparisons and models. Reported fatigue, physiological observations and estimated model outlooks remain distinct. All four explanations are in the exported HTML; the group FAQ uses the same definition. Schematic participants/curves are labelled as illustrations, with the actual demonstration project workspace available in a native disclosure.

Build and all 14 static-export checks passed, plus nine focused content/provenance/contrast checks. Browser verification passed 12 Trends layouts and 48 Projects layout/mode cases across the same 12 viewport sizes, participant touch selection, keyboard navigation, full-size viewing, reduced motion and the JavaScript-free fallback. Ten focused axe scans found no violations; gradient text contrast was checked separately. The latest Lighthouse scores are mobile 94 performance/100 accessibility, best practices and SEO, with LCP 3.0s; desktop is all 100, with LCP 0.7s. CLS is zero in both. Mobile LCP remains above the 2.5s target. [Trends and Projects QA](trends-projects/QA.md) contains the current results, captures and source checks; earlier tables in this document describe prior builds.

## Publication checks remaining

The user confirmed that this redesign has not been deployed. Read-only GitHub inspection found Pages configured from `main/docs`, with `www.sciencepeaks.ai` as the custom domain. DNS currently resolves through the separate Nginx host at `84.88.83.15`, so the active publication route still needs to be established. No Pages setting, DNS record, server configuration, commit or push was changed during this task.

When the redesign is published, verify HTTP-to-HTTPS and apex-to-www redirects, public canonical/robots/sitemap responses, the new social preview image, compressed delivery and mobile LCP. Then inspect the actual redesigned URL in Search Console and Bing Webmaster Tools and follow the inclusion/reporting checks in [the plan](SEO_AEO_PLAN.md). These host/account checks cannot be established by a local export. Supporting pages and reviewed Spanish/Catalan translations remain later phases of the plan.
