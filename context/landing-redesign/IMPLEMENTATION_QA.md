# SciencePeaks landing implementation — review and QA

Checked **9 October 2026** against the actual Next.js static export. This is local implementation and browser evidence, not a production deployment or clinical validation report.

## Result and preservation

The homepage has been rebuilt on `redesign/landing-2026-10-09`. The old tracked website is preserved at `bcd2cfccf8105908a1950b38c68af3911894f73c` on the remote [archive/landing-before-redesign-2026-10-09](https://github.com/isglobal-brge/sciencepeaksWeb/tree/archive/landing-before-redesign-2026-10-09) branch. Remote branch identity was checked with `git ls-remote`.

`main` and the existing `docs/` deployment output were not changed. The internal context, original screenshots and reference decks remain in the working folder. `npm run build` exports into ignored `out/`; it does not publish. The existing `deploy` script commits and pushes, and was not run.

## What was built

- Deck Poppins, paper/navy/teal, restrained glass surfaces and an Oasium-inspired collage of actual product screens.
- Immediate platform definition and demo action; equal oncology and professional-sport paths; a connected professional-follow-up story.
- A slow institution marquee, labelled as ISGlobal's ecosystem rather than customers. Keyboard focus exposes the accessible first copy; reduced motion becomes a static list.
- Sticky desktop scroll chapters, with selectable product views on mobile. Content remains readable without animation.
- Keyboard-accessible activity tabs and a native-slider MET volume diagram. The initial example is 4 METs × 30 minutes = 2 gross MET·h and 1.5 net MET·h above the 1 MET reference.
- Optional Three.js wearable/data-record illustration, with activity, physiology and context views. It is downloaded only after activation, renders on demand, stops offscreen, caps resolution and frame rate, and disposes GPU resources on close.
- Working enquiry form with required consent and accurate success/failure feedback; the existing Formspree destination and legal disclosures remain.
- Server-rendered content, visible FAQs, descriptive metadata, canonical URL, Organization/WebSite/WebPage/WebApplication structured data, social preview, crawlable static assets and a sitemap containing the indexable homepage.

Next.js 15.5.27, React 18 and the existing static-export architecture are retained. Landing motion uses CSS and IntersectionObserver. Next reports **129 kB first-load JavaScript** for the homepage; the optional Three.js module is outside that initial bundle.

The screenshot refinement adds **eleven complete product views** with responsive WebP derivatives. Six come from the current live app: activity across a week and day, an hourly rhythm, intensity/volume and longitudinal RMSSD. The remaining views use verified archived native/web captures: an overnight RMSSD profile, mobile check-in, treatment calendar, professional group and complete assistant answer/evidence. Native, treatment and participant examples use sample data. No uncropped private source image or authenticated browser state is in the export. [Screenshot provenance](SCREENSHOT_REFINEMENT_MANIFEST.json) records sources, dates, dimensions, crops and hashes.

The image viewer uses a native modal dialog with fit/actual-size modes, pan/scroll, Escape and backdrop closing, focus restoration and a native image link without JavaScript. Larger live-app images are downloaded only when a visitor opens the screen. Captions explain HRV, the range bars, activity estimates, treatment context, the project workflow and the evidence behind an AI answer. Served Poppins Latin subsets still total **22,300 bytes**. [Asset hashes and evidence classes](IMPLEMENTATION_ASSET_MANIFEST.json) document the reviewed public bundle. Original product assets remain preserved.

Recording gaps receive one brief FAQ explanation rather than a leading marketing section. Activity intensity remains an estimate; the new nocturnal screenshot shows RMSSD windows and explicitly distinguishes range bars from the nightly mean. Current plans use minutes. MET·h prescribing and health-record integration are future directions. Independent Nature papers are linked as scientific context and do not imply evaluation of SciencePeaks. See [reference and attribution notes](IMPLEMENTATION_REFERENCE_NOTES.md).

## Verification

`npm run build`, `npm run typecheck` and `npm run lint` pass. The build validates types and the scoped lint configuration rather than suppressing those checks. `git diff --check` passes for authored files. Official SVGs, licences and vendored Three.js retain their upstream bytes (including existing whitespace); those files are excluded from that whitespace check and verified through the asset hashes instead.

The browser protocol covers **84 assertions** at widths **320, 390, 768, 1024, 1280 and 1440 px**:

- Heading readability, horizontal overflow, image decoding, illustration containment, canonical/indexing metadata, structured data and anchor targets.
- Mobile-menu focus and Escape; mobile story selection without page jumps; tab arrows/Home and the third intensity view; initial, minimum and maximum activity-volume arithmetic.
- Screenshot activation/focus, body-scroll lock, fit and actual-size pan, reset, Escape/backdrop dismissal, portrait containment, style isolation and native no-JavaScript image links. Full-size requests are absent until activation.
- Required consent, intercepted failure and success, retained input after failure, and reset only after success. **No real enquiry was sent.**
- Accessible marquee focus; global animation pause; no initial scene download; bounded canvas; local/global pause; paused controls; offscreen rendering; graphics-context loss; retry after a failed module download; teardown and focus restoration.
- Reduced-motion layout and focus, server-rendered no-JavaScript content/native form, and direct legal/account-deletion routes.

Landing QA used fresh isolated Chromium sessions without personal profiles or signed-in accounts. Live-app screenshot capture used a separate ephemeral authorized session, closed after capture. The browser service was unavailable, so local Playwright provided the fallback. There were no uncaught page errors in the completed protocol. Lazy images were explicitly requested for the decode check; normal runtime loading remains lazy.

The preview server also passed checks for directory redirects, true 404s, traversal rejection, gzip delivery and refusal when `gzip;q=0` is requested. It serves only `out/` on loopback.

## Performance and publication requirement

Lighthouse **13.5.0**, cold local export, default simulated mobile and desktop preset. The original baseline below predates the screenshot refinement. The fresh mobile refinement run scored **96 performance, 100 accessibility, 100 best practices and 100 SEO**, with **2.8 s LCP, 10 ms TBT and zero layout shift**. It is recorded in the performance summary. These are laboratory results, not field Core Web Vitals or production measurements. No 3D was activated during performance measurement.

| Check | Mobile | Desktop |
| --- | ---: | ---: |
| Performance | **96** | **100** |
| Accessibility | **100** | **100** |
| Best practices | **100** | **100** |
| SEO | **100** | **100** |
| First contentful paint | 1.1 s | 0.3 s |
| Largest contentful paint | 2.8 s | 0.7 s |
| Total blocking time | 0 ms | 0 ms |
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

The final visual review also checked word spacing around bold copy, a failed screenshot download and successful reopening after network recovery. The three supplemental checks passed. A final hero-spacing pass at nine widths (320–1920 px, including 650 px) confirmed that the complete overnight image clears its caption.

## Review files and limits

[Desktop](implementation-review/desktop.png), [mobile](implementation-review/mobile.png), [3D](implementation-review/three-view.png), [full page](implementation-review/full-page.png), [screenshot viewer](implementation-review/screenshot-viewer.png), [mobile viewer](implementation-review/mobile-screenshot-viewer.png), [check results](implementation-review/qa-results.json) and [performance summary](implementation-review/performance-summary.json) accompany this record.

Safari, physical mobile devices and assistive-technology sessions were not run. Responsive Chromium evidence is web evidence, not native-app, clinical, device or release acceptance. Dependency advisories reported during installation were not addressed through forced major upgrades; this record is not a dependency-security signoff.
