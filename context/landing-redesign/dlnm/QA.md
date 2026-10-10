# DLNM landing verification — 10 October 2026

The feature was verified against the local static export at `http://127.0.0.1:4183/#training-response`. These checks establish landing UI behavior and source-asset provenance; they do not validate the statistical model, clinical performance or production deployment.

- `npm run lint`, `npm run typecheck`, `npm run build` and `git diff --check` passed. The build generated all ten static pages. The previously observed local Node/Webpack cache issue was avoided by preserving generated `.next/cache/webpack` in a task-specific temporary folder before the build; no application configuration or dependency versions changed.
- All five curated source PNG hashes match the supplied originals. All 25 public WebP derivatives decode at their declared dimensions and retain the original aspect ratio.
- All five views passed at 1440, 1280, 1200, 1100, 1024, 1000, 768, 650, 390 and 320px: 50 layouts, with no page, panel or text overflow. Exactly one tab is selected and in the tab sequence, with matching panel labels and controls. Tab targets are at least 44px high.
- The assistant’s revised single-panel layout passed at the same ten widths.
- All five full-size viewers passed at 1440 and 390px: original 2592px-wide assets, fit mode, actual-size scrolling, contained dialog bounds, initial close-button focus, Escape dismissal and focus return.
- Right/left arrows, wrapping, Home and End select and focus the correct tab. The method disclosure opens with Enter and links to the primary paper.
- Ten targeted axe checks across the five active views at desktop and mobile widths reported zero WCAG A/AA violations. No browser runtime errors or failed HTTP responses occurred.
- Reduced motion and the landing’s pause control disable the tab-panel entrance animation. With JavaScript disabled, the first view remains visible, its full-size image link works, and inactive tab controls and the script-dependent viewer button are hidden.
- Desktop and mobile screenshots were visually inspected. Mobile places the product image before the detailed reading guide; full captures remain uncropped.

The repeatable browser check is `tmp/dlnm-landing-2026-10-10/verify-dlnm.mjs`; results and screenshots are under `tmp/dlnm-landing-2026-10-10/qa/`. The asset preparation script and final build log are in the same task folder. The isolated browser was closed and its temporary profile removed after verification. The existing preview server was reused.

The Orca landing preview was refreshed at the training-response anchor. `docs/` and the deployed site were not modified; no commit, push or deployment was performed.
