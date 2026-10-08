# SciencePeaks website

The public landing page explains SciencePeaks’ wearable-based activity, physiology and fatigue/recovery follow-up for oncology care and professional sport. It includes product examples, professional workflows, an activity-volume explainer, FAQs and a demo enquiry form.

The implementation uses Next.js 15.5.27 static export, React 18 and locally hosted Poppins. Landing styles use native CSS; IntersectionObserver controls scroll effects. An optional, user-activated 3D illustration loads locally hosted Three.js 0.186.1, with a product view available before activation. Motion controls and reduced-motion preferences are supported.

The internal reference bundle stays outside the deployment output. Six optimized product WebP images and six official institution logos have provenance recorded under [`context/landing-redesign/`](context/landing-redesign/). The logo strip describes ISGlobal’s institutional ecosystem; it does not represent a customer list. Existing legal pages, account deletion and the Formspree contact endpoint are preserved.

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

The preview command serves the export locally with Node.js and gzip compression. Exported routes use directory indexes so direct legal-page links work on static hosting. Stop local servers when finished. The `deploy` script replaces `docs/`, commits and pushes; do not run it to preview. This redesign task did not deploy production. For publication, enable gzip or Brotli for HTML, CSS, JavaScript and SVG, and verify performance on the real host; the local performance results use compressed delivery.

## Branches and context

Active branch: `redesign/landing-2026-10-09`. The prior landing is preserved on the remote [archive/landing-before-redesign-2026-10-09](https://github.com/isglobal-brge/sciencepeaksWeb/tree/archive/landing-before-redesign-2026-10-09) branch at `bcd2cfcc`.

Read the [handoff](LANDING_REDESIGN_HANDOFF.md), [product context](context/landing-redesign/SCIENCEPEAKS_PRODUCT_CONTEXT.md), [design references and attribution](context/landing-redesign/IMPLEMENTATION_REFERENCE_NOTES.md), [landing research](context/landing-redesign/LANDING_REFERENCE_RESEARCH.md) and [implementation QA](context/landing-redesign/IMPLEMENTATION_QA.md).
