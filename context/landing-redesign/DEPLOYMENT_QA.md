# Production landing deployment — 10 October 2026

The approved redesign is live at [sciencepeaks.ai](https://sciencepeaks.ai/), which permanently redirects to [www.sciencepeaks.ai](https://www.sciencepeaks.ai/). The requested `sciencepaks.ai` spelling did not resolve and was treated as a typo for the established product domain.

## Release and publication

- Source completion: [`655041d`](https://github.com/isglobal-brge/sciencepeaksWeb/commit/655041d2fe0ad35b811e2a9223667775711d307c).
- Export and serving configuration: [`4419d0a`](https://github.com/isglobal-brge/sciencepeaksWeb/commit/4419d0afb3e8f9acc0b02bb3c99cdcfe0a34b4d8).
- Both commits, along with the preceding redesign commits, were pushed to `main` and `redesign/landing-2026-10-09` using an atomic fast-forward push. The old source remains on `archive/landing-before-redesign-2026-10-09`.
- [GitHub Pages run 38046174321](https://github.com/isglobal-brge/sciencepeaksWeb/actions/runs/38046174321) succeeded for the export commit. Pages still publishes `main/docs`; the public domain is served by the separate Nginx container, which was also replaced.
- Live image: `sha256:cdfbc16e392bc836176d7d97fb8521ed7673cbef694476bd70d09cb731574a04`, labelled with the full `4419d0a` revision. The production container is healthy and uses `unless-stopped` restart policy.
- Cutover completed at 10:53:14 UTC. The previous container is stopped and preserved as `sciencepeaks-landing-rollback-20261010-bcd2cfc`, with its original image available. The separate candidate container was stopped and removed after verification.

The release copies the validated export into `docs/`, with its canonical CNAME and `.nojekyll`. Forty-eight previous hashed assets are retained for cached-page compatibility; the old HTML is replaced. Internal reference originals, decks, investor deliverables and temporary QA artifacts were left outside the release commits and public export. The serving configuration and rollback sequence are documented in [deploy/landing](../../deploy/landing/README.md).

## Verification

The fresh production build passed compilation, lint and TypeScript validation; the static-export audit passed all 14 checks. The candidate passed Nginx syntax and health checks before the production switch. All 307 served files matched their expected hashes at the candidate, production origin and public HTTPS endpoint. The live homepage SHA-256 is `809350f6675380d1c1cc8a6247178d20dfdf612898aaaf9fd3975d4a986b806f`.

Eighteen serving checks passed, covering homepage/legal routes, correct canonical and preserved form action, gzip for HTML/CSS, HTML revalidation, immutable hashed-asset caching, genuine missing-route/asset 404s, relative directory redirects, web manifest MIME type and the apex-to-www redirect with path/query preservation. Robots, sitemap, social preview and other exported resources were fetched and hash-checked. No real enquiry was submitted.

An initial concurrent asset sweep and browser run received transient public-route 503s. The browser run was repeated on its own and completed with zero failed responses or JavaScript errors. The 109 affected file requests were then repeated sequentially at no more than three per second; every one matched. The origin's bulk verification had no failures. This demonstrates successful normal page loading and paced resource checks; it does not establish a production load-test capacity.

The live browser run passed 12 Trends layouts and 48 Projects layout/mode cases across 320–1440 px, including phone landscape and tablet sizes. It also passed four participant touch selections, five tab keyboard cases, image-viewer sizing/Escape/focus return, the native product disclosure, reduced motion and a JavaScript-free fallback. Ten focused axe scans found no violations; the earlier conservative text-contrast calculations cover gradient cases that axe could not automatically resolve. Mobile Trends and desktop Projects captures were visually inspected.

## Live loading measurements

Fresh Lighthouse audits used the actual public HTTPS URL, default simulated mobile throttling and a separate desktop preset. Other asset/browser tests were stopped during measurement.

| Metric | Mobile | Desktop |
| --- | --- | --- |
| Performance | 92 | 100 |
| Accessibility | 100 | 100 |
| Best practices | 100 | 100 |
| SEO | 100 | 100 |
| First Contentful Paint | 1.7 s | 0.4 s |
| Largest Contentful Paint | 3.3 s | 0.7 s |
| Total Blocking Time | 0 ms | 0 ms |
| Cumulative Layout Shift | 0 | 0 |

Mobile lab LCP remains above the 2.5 s target. These are public-host laboratory results, not field Core Web Vitals or physical-device verification. Search Console/Bing inclusion, real-user performance and later supporting-content/translation phases remain separate follow-up work. HTTP port 80 reachability was not established from this client's network; the verified canonical redirect is between the public HTTPS hostnames.

## Local evidence

Raw reports remain local under `tmp/release-2026-10-10/`: `artifact.json`, `serving-manifest.json`, `candidate-report.json`, `production-origin-4419d0a-report.json`, `public-serving-report.json`, `deployment-4419d0a.json`, `browser/report.json`, the browser captures and `lighthouse-mobile.json`/`lighthouse-desktop.json`. The initial 503 reports are retained separately. The verification scripts in that directory use only GET requests and isolated QA browser profiles.
