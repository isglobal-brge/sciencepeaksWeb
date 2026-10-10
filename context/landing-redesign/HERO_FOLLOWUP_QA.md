# Hero follow-up link — 10 October 2026

Later the same day, the founder requested the home dashboard in the hero. The [home dashboard refinement](HERO_HOME_QA.md) supersedes the collage layout below and preserves the native follow-up link in normal flow. The checks below record the earlier layout.

The original “Connected for follow-up” badge was absolutely positioned inside the tilted collage and obscured by the dashboard card. It has been replaced with a native “See professional follow-up” link to `#follow-up`, below the three product captures. The caption now participates in document flow; the collage retains its existing responsive stage heights. This reserves space for the link and the next section while preserving the landing’s Poppins and teal styling.

The final local static export passed at 320, 375, 390, 600, 650, 768, 888, 900, 901, 1024, 1100, 1150, 1280, 1440, 1536, 1600 and 1920px. Checks cover unobscured link hit testing, separation from all cards at rest and across the existing tilt range, a 44px target, caption containment, no page overflow, decoded screenshots and a visible primary CTA above the fold. The minimum measured gap to a card was 21px. Desktop and mobile screenshots were visually reviewed.

Pointer and keyboard activation reached the follow-up section at 1440 and 390px. The link also worked without JavaScript. The hero returned zero targeted WCAG A/AA axe violations and no browser runtime errors. Reduced motion disabled the collage tilt. The embedded Orca preview also showed an unobscured layout with the caption in normal flow at 888px.

`npm run build` passed, including lint and type validation; a separate lint check and `git diff --check` passed. Results, the repeatable isolated browser check, and before/after captures are in `tmp/hero-followup-2026-10-10/`. Browser sessions and their temporary profiles were closed and removed. The existing local preview was refreshed; no commit, push or deployment was performed.
