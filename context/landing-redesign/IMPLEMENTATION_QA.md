# SciencePeaks landing implementation — review and QA

Checked **9 October 2026** against the actual Next.js static export. This is local implementation and browser evidence, not a production deployment or clinical validation report.

## Result and preservation

The homepage has been rebuilt on `redesign/landing-2026-10-09`. The old tracked website is preserved at `bcd2cfccf8105908a1950b38c68af3911894f73c` on the remote [archive/landing-before-redesign-2026-10-09](https://github.com/isglobal-brge/sciencepeaksWeb/tree/archive/landing-before-redesign-2026-10-09) branch. Remote branch identity was checked with `git ls-remote`.

`main` and the existing `docs/` deployment output were not changed. The internal context, original screenshots and reference decks remain in the working folder. `npm run build` exports into ignored `out/`; it does not publish. The existing `deploy` script commits and pushes, and was not run.

## What was built

- Deck Poppins, paper/navy/teal, restrained glass surfaces and an Oasium-inspired collage of actual product screens.
- Immediate platform definition and demo action; equal oncology and professional-sport paths; a connected professional-follow-up story with a participant dashboard and annotated treatment history.
- A slow institution marquee, labelled as ISGlobal's ecosystem rather than customers. Keyboard focus exposes the accessible first copy; reduced motion becomes a static list.
- Sticky desktop scroll chapters, with selectable product views on mobile. Content remains readable without animation.
- Four keyboard-accessible activity views (week, day, hourly rhythm and intensity/volume) and a native-slider MET volume diagram. The initial example is 4 METs × 30 minutes = 2 gross MET·h and 1.5 net MET·h above the 1 MET reference.
- Four actual iOS/Android app views in a selectable three-phone preview, with keyboard navigation, horizontal swipe, full-size screenshots and explicit Web/iOS/Android platform labels. The current source establishes native clients, without inferring public App Store or Google Play listings.
- A navy analytical pipeline connects wearable records, personal history/features, models and AI explanation/professional review. Symptoms, treatment and training context have a parallel lane; they are not drawn as inputs to the current wearable-only HRV classifier. The real experimental forecast describes a specific next-reading event, not a fatigue probability.
- Optional Three.js wearable/data-record illustration, with activity, physiology and context views. It is downloaded only after activation, renders on demand, stops offscreen, caps resolution and frame rate, and disposes GPU resources on close.
- Working enquiry form with required consent and accurate success/failure feedback; the existing Formspree destination and legal disclosures remain.
- Server-rendered content, visible FAQs, descriptive metadata, canonical URL, Organization/WebSite/WebPage/WebApplication structured data, social preview, crawlable static assets and a sitemap containing the indexable homepage.

Next.js 15.5.27, React 18 and the existing static-export architecture are retained. Landing motion uses CSS and IntersectionObserver. Next reports **135 kB first-load JavaScript** for the homepage; the optional Three.js module is outside that initial bundle.

The screenshot refinement adds **eleven complete product views** with responsive WebP derivatives. Six come from the current live app: activity across a week and day, an hourly rhythm, intensity/volume and longitudinal RMSSD. The remaining views use verified archived native/web captures: an overnight RMSSD profile, mobile check-in, treatment calendar, professional group and complete assistant answer/evidence. Native, treatment and participant examples use sample data. No uncropped private source image or authenticated browser state is in the export. [Screenshot provenance](SCREENSHOT_REFINEMENT_MANIFEST.json) records sources, dates, dimensions, crops and hashes.

The investor-facing refinement adds **ten founder-provided anonymous product panels** and **four verified native app views**, with responsive WebP sizes. The web selection now includes a participant project dashboard, six-month HRV/treatment timeline, period distributions, a complete overnight profile, a concrete forecast and week/day/hour/intensity activity views. The mobile selection shows iOS Home, Android Trends, an iOS symptom check-in and treatment calendar. Overlapping native headers are cropped from the last two; feature content is unchanged. No participant identities from the supplied real cohort screen are published. [Founder provenance](FOUNDER_SCREENSHOT_MANIFEST.json), [native provenance](MOBILE_ASSET_MANIFEST.json) and [methods evidence](INVESTOR_METHODS_EVIDENCE.md) preserve the evidence boundaries.

The image viewer uses a native modal dialog with fit/actual-size modes, pan/scroll, Escape and backdrop closing, focus restoration and a native image link without JavaScript. Larger live-app images are downloaded only when a visitor opens the screen. Captions explain HRV, the range bars, activity estimates, treatment context, the project workflow and the evidence behind an AI answer. Served Poppins Latin subsets still total **22,300 bytes**. [Asset hashes and evidence classes](IMPLEMENTATION_ASSET_MANIFEST.json) document the reviewed public bundle. Original product assets remain preserved.

Recording gaps receive one brief FAQ explanation rather than a leading marketing section. Activity intensity remains an estimate; the new nocturnal screenshot shows RMSSD windows and explicitly distinguishes range bars from the nightly mean. Current plans use minutes. MET·h prescribing and health-record integration are future directions. Independent Nature papers are linked as scientific context and do not imply evaluation of SciencePeaks. See [reference and attribution notes](IMPLEMENTATION_REFERENCE_NOTES.md).

## Verification

`npm run build`, `npm run typecheck` and `npm run lint` pass. The build validates types and the scoped lint configuration rather than suppressing those checks. `git diff --check` passes for authored files. Official SVGs, licences and vendored Three.js retain their upstream bytes (including existing whitespace); those files are excluded from that whitespace check and verified through the asset hashes instead.

The browser protocol covers **101 assertions** at widths **320, 390, 768, 1024, 1280 and 1440 px**:

- Heading readability, horizontal overflow, image decoding, illustration containment, canonical/indexing metadata, structured data and anchor targets.
- Mobile-menu focus and Escape; mobile story selection without page jumps; tab arrows/Home and the fourth intensity/volume view; initial, minimum and maximum activity-volume arithmetic.
- Screenshot activation/focus, body-scroll lock, fit and actual-size pan, reset, Escape/backdrop dismissal, portrait containment, style isolation and native no-JavaScript image links. Full-size requests are absent until activation.
- Mobile platform labels, all four complete portrait views, arrow/Home/End selection, horizontal swipe, vertical-gesture rejection, viewer activation/focus restoration and no-JavaScript native image links.
- Required consent, intercepted failure and success, retained input after failure, and reset only after success. **No real enquiry was sent.**
- Accessible marquee focus; global animation pause; no initial scene download; bounded canvas; local/global pause; paused controls; offscreen rendering; graphics-context loss; retry after a failed module download; teardown and focus restoration.
- Reduced-motion layout and focus, server-rendered no-JavaScript content/native form, and direct legal/account-deletion routes.

Landing QA used fresh isolated Chromium sessions without personal profiles or signed-in accounts. Live-app screenshot capture used a separate ephemeral authorized session, closed after capture. Local Playwright provided isolated browser automation. There were no uncaught page errors in the completed protocol. Lazy images were explicitly requested for the decode check; normal runtime loading remains lazy.

A separate seven-check pass confirms header containment at 901, 915, 950, 1000, 1024 and 1440 px and readable isolated styles in the forecast viewer. A final nine-check pass confirms complete-image fit and stable story selection at 320, 390 and 1440 px after reducing the screenshot frame’s letterboxing. The nine-width hero pass confirms the new overnight image clears its caption from 320–1920 px.

The preview server also passed checks for directory redirects, true 404s, traversal rejection, gzip delivery and refusal when `gzip;q=0` is requested. It serves only `out/` on loopback.

## Performance and publication requirement

Lighthouse **13.5.0**, fresh local export, default simulated mobile and desktop preset. The current investor refinement scored **95 performance, 100 accessibility, 100 best practices and 100 SEO** on mobile, with **2.9 s LCP, 10 ms TBT and zero layout shift**. Desktop scored 100 in these four categories. These are laboratory results, not field Core Web Vitals or production measurements. No 3D was activated during performance measurement.

| Check | Mobile | Desktop |
| --- | ---: | ---: |
| Performance | **95** | **100** |
| Accessibility | **100** | **100** |
| Best practices | **100** | **100** |
| SEO | **100** | **100** |
| First contentful paint | 1.1 s | 0.3 s |
| Largest contentful paint | 2.9 s | 0.6 s |
| Total blocking time | 10 ms | 0 ms |
| Cumulative layout shift | 0 | 0 |

These scores use the Node preview's gzip delivery. A controlled identity-encoding run of the original baseline export scored **77 mobile**, with **5.9 s LCP**. The original live-host check returned `Server: nginx` and no `Content-Encoding` to an explicit gzip GET. Therefore publication should **enable and verify gzip/Brotli for text assets**; these preview scores must not be presented as measured production performance. Mobile LCP still exceeds the 2.5 s field target in the simulated run, so confirm real-host delivery and field measurements after publication.

For an existing Nginx public-site server block, a reviewable gzip starting point is below. It is not an installed server change. Keep the existing TLS, routing and access configuration. Nginx includes HTML automatically when gzip is enabled; the listed types extend that set. [Official gzip module documentation](https://nginx.org/en/docs/http/ngx_http_gzip_module.html).

```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_comp_level 5;
gzip_types text/plain text/css application/javascript application/json
           application/manifest+json application/xml image/svg+xml;
```

Verify the real HTML/CSS/JavaScript response encoding and rerun Lighthouse on the published URL. Configure useful cache lifetimes for hashed assets at the host. Sitemap submission, live redirects and real enquiry delivery were not performed. Source SEO and visible answers support discoverability; they do not guarantee rankings or AI citations.

The earlier screenshot refinement also checked word spacing, failed image download and reopening after network recovery. Those component behaviours are preserved. The current visual review inspected the hero, analytical pipeline, mobile preview, project workflow and enlarged web/mobile images; the fresh browser protocol confirms their interactive behaviour.

## Review files and limits

[Mobile showcase](implementation-review/mobile-showcase-desktop.png), [science engine](implementation-review/science-engine-desktop.png), [project workflow](implementation-review/followup-dashboard-desktop.png), [desktop](implementation-review/desktop.png), [mobile](implementation-review/mobile.png), [3D](implementation-review/three-view.png), [full page](implementation-review/full-page.png), [screenshot viewer](implementation-review/screenshot-viewer.png), [mobile viewer](implementation-review/mobile-screenshot-viewer.png), [check results](implementation-review/qa-results.json) and [performance summary](implementation-review/performance-summary.json) accompany this record.

Safari, physical mobile devices and assistive-technology sessions were not run. Responsive Chromium evidence is web evidence, not native-app, clinical, device or release acceptance. Dependency advisories reported during installation were not addressed through forced major upgrades; this record is not a dependency-security signoff.
