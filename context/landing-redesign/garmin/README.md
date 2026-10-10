# Garmin collaboration feature

Integrated locally on 10 October 2026 after the founder approved the Garmin landing proposal. The existing hero, platform section, Poppins typography, navy/teal/paper palette, rounded edges and product screenshot viewer are retained.

The hero adds a small Garmin credibility link after the main actions. It reads **Garmin Health SDK · Approved access** and leads to the new feature inside the platform section. That feature replaces the earlier three-icon connection strip with the headline **Garmin on your wrist. A fuller picture in SciencePeaks.** The approval detail says **Approved Health SDK access** and **iOS and Android apps reviewed**.

## Relationship evidence

The founder confirmed an approved Garmin relationship in this conversation. The [UCAM deck](../ucam-hitech-bootcamp/deck/slides.md), slide 4 and its source notes, already records founder confirmation on 3 October 2026 of Garmin-approved Health SDK access after technical review of the iOS and Android apps. The [evidence register](../ucam-hitech-bootcamp/evidence.txt) also identifies the earlier SDK trial milestone. The public copy uses that documented scope; a new commercial-partner badge or broader certification claim is not inferred.

Garmin's [Health SDK overview](https://developer.garmin.com/health-sdk/) describes enterprise integration into Android and iOS apps. [Garmin branding guidance](https://developer.garmin.com/brand-guidelines/) distinguishes branding for its individual programmes. The existing Garmin wordmark is kept separate from the SciencePeaks brand, preserves its colors/proportions and is accompanied by the specific approved-access wording.

## Visual and interaction

The scene connects a real Garmin Venu 3S render, the actual SciencePeaks symptom check-in screen and a professional product view. **Activity** shows the recorded-week activity dashboard; **Overnight HRV** shows the nightly RMSSD profile. The labels distinguish recorded wrist movement and available heartbeat intervals from derived activity estimates and HRV analysis. The mobile screenshot uses sample data; its source is already recorded in the [mobile manifest](../MOBILE_ASSET_MANIFEST.json). The professional captures retain their [founder provenance](../FOUNDER_SCREENSHOT_MANIFEST.json).

One finite entrance sequence reveals the watch, app and professional view in order. The arrows illustrate how the workflow connects; they do not promise live streaming or show an invented connection status. Selecting a recording path changes the watch caption, explanation and professional screenshot. CSS perspective and soft lighting give the existing product views depth. On narrow screens, the watch/app pair sits above the professional view. No WebGL, animation loop or runtime dependency was added.

The two paths use native buttons with tab semantics, roving focus and ArrowLeft/ArrowRight/Home/End navigation. Both explanations and screenshot links are server-rendered. Without JavaScript, both panels appear and the unavailable selector is hidden. Reduced motion removes entrance/panel animations and perspective transforms. Reduced transparency and higher contrast use solid surfaces. The existing image viewer handles full-size inspection, Escape and focus return.

## Assets

The [manifest](SOURCE_MANIFEST.json) records the official Garmin source, original dimensions/hash and the three public derivatives. The watch comes from [Garmin Japan's Venu 3S page](https://www.garmin.co.jp/products/wearables/venu-3s-black/) and its [original product render](https://www.garmin.co.jp/m/jp/g/products/venu3s_BlackSesameSlate_left_watchface_venu3A.jpg). The original 600×600 image remains in this internal folder. Public 320px and 600px WebP files contain the complete frame, watch face and branding without alterations. The small transparent logo derivative comes from the existing `public/garmin-logo.png`.

The new hero wordmark is 3,628 bytes and is reused by the feature and rolling logo strip, replacing the strip's 20,611-byte PNG request. The watch variants are 8,940 and 21,792 bytes and load lazily; the existing app and professional image derivatives are reused. Garmin retains its brand/image rights. Internal source notes and originals remain outside the public export.

The [QA record](QA.md) includes responsive, interaction, accessibility, exported-HTML and fresh Lighthouse results.

Scope: local implementation and verification. No deployment, commit or push.
