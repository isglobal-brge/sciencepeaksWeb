# Legal pages and footer parity

Validated locally on 9 October 2026 at `http://127.0.0.1:4183/`.

## Preserved content and behavior

- Legal Notice, Privacy Policy, Cookies Policy, Account Deletion and the complete cookie banner/configuration retain the text from the pre-redesign source at `bcd2cfccf8105908a1950b38c68af3911894f73c`.
- Rendered text, body links and form options also match freshly downloaded production `legal-notice.html`, `privacy-policy.html`, `cookies-policy.html` and `account-deletion.html`. Internal URL comparisons normalize trailing slashes for the new static directory exports. Policy dates and the legacy domain mentioned in Privacy Policy are intentionally preserved.
- The ISGlobal footer uses the original `/isglobal_logo.png` asset and `https://www.isglobal.org` link.
- The account and data-only deletion options retain the original Formspree endpoint, payload, required fields, consent, processing feedback and success/error messages.
- Cookie consent retains both original localStorage keys, all eight categories, mandatory necessary cookies, custom preferences, accept all and reject. The footer now allows reopening saved settings.

## Checks

- `npm run typecheck`, `npm run lint`, focused ESLint for the cookie banner/footer, `npm run build`, and `git diff --check` pass.
- Twenty legal-page layout checks pass: all four routes at 1440, 1024, 768, 390 and 320px. No page/document overflow, correct active navigation, and the original footer logo/link are present.
- All four footer links open their corresponding legal document.
- Cookie banner and configuration dialog fit at 320px. Detailed cookie tables scroll within their own panels. Custom save, persistence on reload, reopening, Escape/focus restoration, allow all, reject and accept-and-navigate pass.
- Both deletion request types pass controlled success/error/pending checks. Success clears the form; errors preserve entered data; pending disables submission. Every Formspree request was intercepted locally. No real deletion request was sent.
- Axe reports zero WCAG A/AA/2.1 AA violations across the four legal pages, banner and settings dialog. Browser runtime errors: zero.
- Desktop/mobile screenshots were visually inspected. The existing Our Team section and removal of the optional 3D section remain in place.

## Evidence and scope

The comparison script is `tmp/legal-parity-2026-10-09/verify-legal.mjs`; results and screenshots are under its `qa/` directory. The final build log is `tmp/legal-parity-2026-10-09/build.log`.

The existing Node 24 / Webpack incremental cache error recurred on the initial build (`WasmHash._updateWithBuffer`). Regenerating only `.next/cache/webpack` allowed the production build to pass; previous generated caches were moved to task-specific temporary folders. No dependency/configuration change was made for that environment issue.

These checks establish local source and static-export behavior. No commit, push, deployment or live Formspree delivery occurred. The pre-existing preview server was reused and remains available. Isolated QA browsers and their temporary profiles were closed and removed.
