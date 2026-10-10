# SciencePeaks website

The public landing page explains SciencePeaks’ wearable-based activity, physiology and fatigue/recovery follow-up for oncology care and professional sport. It includes product examples, professional workflows, an activity-volume explainer, FAQs and a demo enquiry form.

The implementation uses Next.js 15.5.27 static export, React 18 and locally hosted Poppins. Landing styles use native CSS; IntersectionObserver controls scroll effects. An interactive activity-volume calculator explains how intensity and duration combine. Reduced-motion preferences are supported.

The internal reference bundle stays outside the deployment output. Reviewed product views, responsive WebP derivatives and six official institution logos have provenance recorded under [`context/landing-redesign/`](context/landing-redesign/). The screenshots combine founder-supplied app captures with native and professional screens using sample data. An accessible image viewer loads larger images on demand, with fit and actual-size modes. The hero presents the complete founder-supplied home dashboard in a glass frame, with eager image loading and full-resolution viewing. The logo strip combines the existing Garmin mark for the wearable integration with ISGlobal’s institutional ecosystem; it does not represent a customer list. Logos continue moving on mouse hover, with a static list for keyboard focus and reduced-motion preferences. Existing legal pages, account deletion and the Formspree contact endpoint are preserved.

The investor-facing refinement adds a navy data-science pipeline and a real experimental HRV outlook, plus a selectable mobile showcase with four native iOS/Android views. Web, iOS and Android are visible in the proposition and application schema. Product panels include physiological histories, personal references, period comparisons and week/day/hour activity exploration. Public store-download links are not inferred from native client availability.

Trends has a dedicated section with the founder-supplied physiology timeline, full-size viewing and explanations of observation coverage, personal references and daily context. Projects is explained through an interactive HTML/CSS/SVG diagram connecting a clinician or coach to a group of participants. Four views cover cohort progress, individual follow-up, comparisons and eligible predictive/statistical models, with reported fatigue and health context. The schematic figures are identified as illustrations, and an expandable actual project workspace complements them. All four explanations are exported as HTML, with keyboard, touch, reduced-motion and JavaScript-free access. [Trends and Projects notes](context/landing-redesign/trends-projects/README.md) record the source and interpretation boundaries.

The Garmin collaboration is visible in a small hero credibility line and a product feature within the platform section. A real Garmin Venu 3S render connects to the SciencePeaks app and professional workspace, with Activity and Overnight HRV selectors, a finite entrance sequence and accessible full-size views. Copy describes the documented approved Health SDK access and reviewed iOS/Android apps. Both explanations remain crawlable, and mobile, reduced-motion and JavaScript-free layouts are supported. [Garmin source and implementation notes](context/landing-redesign/garmin/README.md) record the relationship scope and asset provenance.

The Our team section presents the two co-founders, clinical guidance, innovation management and data science through five locally hosted portraits and native expandable profiles. Names and roles stay visible, with touch, keyboard and JavaScript-free access to biographies and professional links. [Team source notes](context/landing-redesign/team/README.md) record the UCAM, GooVentures, deployed-site and COMT references.

The training-response section provides a guided DLNM explorer with five actual product captures: the exposure–lag heatmap, response curves, seven-day plans, conditional RMSSD trajectories and saved-data calendar. Keyboard-accessible tabs and full-size viewing accompany explanations of load, delay, uncertainty and input coverage. These views use deterministic synthetic demonstration data. [DLNM asset notes](context/landing-redesign/dlnm/README.md) record the supplied captures, transformations and interpretation boundaries.

Legal Notice, Privacy Policy, Cookies Policy and Account Deletion share the landing’s typography, colors, navigation and footer, including the original ISGlobal logo. Their original text, deletion options and Formspree submission contract are preserved. The cookie banner retains the original disclosures and all eight preference categories, with settings available again from the footer after consent is saved.

The [methods evidence](context/landing-redesign/INVESTOR_METHODS_EVIDENCE.md), [founder screenshot provenance](context/landing-redesign/FOUNDER_SCREENSHOT_MANIFEST.json) and [mobile screenshot provenance](context/landing-redesign/MOBILE_ASSET_MANIFEST.json) record the current model contracts, image sources and demonstration-data boundaries.

## Local development and validation

Install dependencies and start the development server at `http://127.0.0.1:4173`:

```sh
npm ci
npm run dev -- --port 4173
```

Run checks and create the static export in `out/`:

```sh
npm run typecheck
npm run lint
npm run build
```

Preview the export at `http://127.0.0.1:4183`:

```sh
npm start
```

The preview command serves the export locally with Node.js and gzip compression. Exported routes use directory indexes so direct legal-page links work on static hosting. Stop local servers when finished. The `deploy` script replaces `docs/`, commits that output and pushes the current branch; commit source changes separately and ensure the intended publication branch is used. Do not run it to preview. GitHub Pages publishes `main/docs`, while the public domain currently resolves to a separately managed Nginx host. Updating Pages alone does not replace that host's files. A production release must update the serving document root and verify the public domain. Enable gzip or Brotli for HTML, CSS, JavaScript and SVG; the local performance results use compressed delivery.

[SEO/AEO and mobile QA](context/landing-redesign/SEO_AEO_QA.md) records the 10 October fixes and verification across 12 viewport sizes. The latest local audit, after adding Trends and Projects, scored 94 for mobile performance and 100 for mobile accessibility, best practices and SEO; desktop scored 100 throughout. Mobile lab LCP was 3.0s, so loading should be measured again on the deployment host against the 2.5s target. [The focused QA record](context/landing-redesign/trends-projects/QA.md) includes interaction checks, screenshots and raw reports. Browser emulation does not establish physical-device or real-user results.

## Branches and context

Active branch: `redesign/landing-2026-10-09`. The prior landing is preserved on the remote [archive/landing-before-redesign-2026-10-09](https://github.com/isglobal-brge/sciencepeaksWeb/tree/archive/landing-before-redesign-2026-10-09) branch at `bcd2cfcc`.

Read the [handoff](LANDING_REDESIGN_HANDOFF.md), [product context](context/landing-redesign/SCIENCEPEAKS_PRODUCT_CONTEXT.md), [design references and attribution](context/landing-redesign/IMPLEMENTATION_REFERENCE_NOTES.md), [landing research](context/landing-redesign/LANDING_REFERENCE_RESEARCH.md) and [implementation QA](context/landing-redesign/IMPLEMENTATION_QA.md).
