# Our Team local verification

Verified 9 October 2026 against the final static export at `http://127.0.0.1:4183/`.

- TypeScript and ESLint pass. Final Next.js build and static export pass.
- Ten viewport widths checked: 320, 390, 650, 768, 930, 1024, 1101, 1150, 1280 and 1440px. All five names and images render; no page, team or navigation overflow. Desktop navigation text stays on one line. The compact navigation now begins at 1024px to accommodate the new team link.
- Enter opens and Space closes every profile. Mobile menu navigation reaches `#team` and closes the menu. Native disclosure remains usable with JavaScript disabled.
- Reduced motion removes portrait transforms and transitions. The existing page pause control also disables portrait motion.
- Axe reports zero WCAG 2 A/AA and WCAG 2.1 AA violations in the team section, with no incomplete checks. No browser runtime errors occurred.
- Final mobile Lighthouse: performance 95; accessibility 100; best practices 100; SEO 100. LCP 2.9 seconds and CLS 0 on the compressed local preview. These are local measurements, not a production-host performance claim; LCP remains above the 2.5-second target.
- The five local portrait assets total 85,082 bytes. Original provenance and derivative hashes match [SOURCE_MANIFEST.json](SOURCE_MANIFEST.json). No client JavaScript dependency was added.
- Visual inspection covers the desktop portrait row, tablet layout, 390px phone layout and expanded Manel biography. The original founder list was removed from the scientific-roots section to avoid duplication.

The pre-existing incremental Webpack cache failed with `WasmHash._updateWithBuffer` under Node 24.7.0. A build with regenerated Webpack cache passed. Build configuration and dependencies were not changed to work around it.

The isolated headless verification browsers were closed. The pre-existing static preview server was reused. No native device, simulator or native build was needed. No commit, push or production deployment was performed.

The local verification script, JSON results, Lighthouse report and screenshots are in `tmp/team-section-research-2026-10-09/qa/`; the script is one directory above. They remain outside the public build.

## Juan Ramón profile follow-up — 10 October 2026

Updated the name to **Prof. Juan Ramón González** and the role to **Scientific direction & project lead**. His visible introduction now highlights 220+ peer-reviewed publications alongside the ISGlobal professorship and Health Analytics Hub coordination. The expanded biography adds verified academic leadership, the UAB adjunct professorship, textbook authorship, research applications and analytical tools. [Source notes](README.md#juan-ramón-profile-refinement--10-october-2026) record the primary sources checked online.

The production build passed lint/type validation and static export. All 14 SEO/export checks passed again, with the full updated profile present in `out/index.html`. Focused browser checks covered 320, 390, 650, 768, 930, 1024, 1101, 1150, 1280 and 1440px, both collapsed and expanded: all 20 states passed without page/team overflow or clipped Juan Ramón text. All five portraits loaded, Enter opened the profile, Space closed it, and the biography remained available with JavaScript disabled. No browser errors or failed resource responses occurred.

The existing UI was retained. Expanded mobile and desktop profiles were visually inspected. [Focused report](../../../tmp/team-profile-2026-10-10/report.json), [390px profile](../../../tmp/team-profile-2026-10-10/team-expanded-390.png) and [1440px profile](../../../tmp/team-profile-2026-10-10/team-expanded-1440.png) are local evidence. Lighthouse was not rerun for this copy change; the earlier scores describe their original build. The isolated test browser was closed, and the existing preview server was preserved. No production deployment was performed.
