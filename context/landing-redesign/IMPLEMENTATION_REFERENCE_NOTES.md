# SciencePeaks implementation references

Checked **9 October 2026** against the current handoff, product context, UCAM evidence register, Oasium's public page/source, and official institutional sources. Assets and screenshots in this folder are reference material; application implementation is separate.

## Oasium: useful composition and motion

[Oasium's current homepage](https://oasium.ai/) combines an oversized editorial headline, sparse navigation, pale ambient color, dimensional interface illustrations, numbered sections, and a dark closing contact section. Its opening is a scroll-driven collage that resolves into a regular product/service hero. The public CSS makes the opening track 3.7 viewport heights on desktop and 3 on smaller screens. The motion uses SVG/DOM transformations; an animation-frame loop is stopped through an offscreen observer. Reduced motion exposes the regular hero.

Two different proof strips appear: static institution names attributed to workshop/webinar attendees, and a scrolling strip of tools they use. The latter uses two opposing CSS rows, a 90-second linear loop, duplicated content, and fading edges. Reduced motion becomes one wrapping list. These are observed design choices, not evidence of conversion performance.

Public source inspected: [home CSS](https://oasium.ai/_astro/index@_@astro.DKIgsGhA.css), [shared CSS](https://oasium.ai/_astro/Layout.BFpREHrj.css), [opening motion](https://oasium.ai/_astro/HomeIntro.astro_astro_type_script_index_0_lang.BsPY3Tz8.js), and [animation utilities](https://oasium.ai/_astro/scene.JNh9Wm2t.js). Hashed URLs describe the inspected release and can change.

Local screenshots were captured in an isolated Orca tab at an **888 × 812 CSS-pixel viewport**, then visually inspected:

- [Opening collage](brand-reference-assets/oasium-intro-reference.png).
- [Resolved hero](brand-reference-assets/oasium-hero-reference.png).
- [Institution names and editorial section](brand-reference-assets/oasium-flow-reference.png).
- [Scrolling tool strip](brand-reference-assets/oasium-marquee-reference.png).
- [Closing contact section](brand-reference-assets/oasium-contact-reference.png).

Adapt the clear hierarchy, one coherent scene, generous spacing, and measured strip motion. Keep SciencePeaks' Poppins typography, deck palette, liquid glass, and real product story. Show the category, oncology/sport relevance, and contact action immediately. An opening should explain wearable recording → activity/recovery context → professional review without forcing several screens of scrolling before the proposition is visible. Oasium's imagery, proprietary fonts, institution names, and wording are not SciencePeaks assets.

## Logo attribution

Recommended strip heading: **Rooted in the ISGlobal research ecosystem.**

Recommended supporting text: **SciencePeaks originates at ISGlobal. These marks represent ISGlobal’s institutional ecosystem and our clinical research context.**

Each item should retain a short visible relationship caption, or a plainly accessible linked explanation. This lets all six requested marks appear without turning them into a claim that all six use, fund, endorse, or certify SciencePeaks.

| Mark | Relationship established by the reviewed evidence | Concise caption | Source |
| --- | --- | --- | --- |
| ISGlobal | The founder-confirmed scientific origin of SciencePeaks. | **SciencePeaks origin** | [Product context](SCIENCEPEAKS_PRODUCT_CONTEXT.md#scientific-origin-and-product-stage); [UCAM evidence](ucam-hitech-bootcamp/evidence.txt). |
| Hospital Clínic / Clínic Barcelona | Founder-reported studies and continued clinical contact. Separately, Clínic is represented in ISGlobal's governance. The local evidence does not establish a paid customer, institutional endorsement, or detailed study results. | **Clinical research context** | [UCAM evidence](ucam-hitech-bootcamp/evidence.txt); [ISGlobal governance](https://www.isglobal.org/en/governance). |
| “la Caixa” Foundation | Part of ISGlobal's institutional governance/ecosystem; no direct SciencePeaks grant or partnership is established by this bundle. | **ISGlobal institutional network** | [ISGlobal governance](https://www.isglobal.org/en/governance); [official CERCA institute profile](https://cerca.cat/en/centres-cerca/isglobalorg/). |
| Barcelona City Council | Represented in ISGlobal's governance/ecosystem; no direct SciencePeaks city contract or endorsement is established here. | **ISGlobal institutional network** | [ISGlobal governance](https://www.isglobal.org/en/governance); [official CERCA institute profile](https://cerca.cat/en/centres-cerca/isglobalorg/). |
| CERCA | ISGlobal is a member of the CERCA system. This membership belongs to the institute. | **ISGlobal · CERCA centre** | [Official CERCA institute profile](https://cerca.cat/en/centres-cerca/isglobalorg/); [ISGlobal institutional brochure](https://www.isglobal.org/documents/10179/6829011/Brochure%2BWE%2BARE%2BISGlobal.pdf/a32f6053-398a-45f5-941e-3bc51dbe7cff?t=1759312141175). |
| Severo Ochoa | ISGlobal's excellence accreditation was renewed for **2024–2028**. It is not a product certification or clinical clearance for SciencePeaks. | **ISGlobal · 2024–2028 accreditation** | [ISGlobal Severo Ochoa programme](https://www.isglobal.org/en/severo-ochoa). |

“Trusted by,” “Our customers,” “Clinical partners,” and “Backed by” do not accurately describe this mixed set. Origin, research experience, governance, institute membership, and institute accreditation are different relationships. If shorter text is needed, keep **ISGlobal's institutional ecosystem** as the shared label and state SciencePeaks' origin and Clínic research experience separately nearby.

## Official-source logo assets

All originals are preserved byte for byte in [brand-reference-assets](brand-reference-assets/). The [source manifest](brand-reference-assets/SOURCE_MANIFEST.json) records direct asset URL, source page, identity, retrieval date, dimensions, byte size, SHA-256, and rights status.

| Local SVG | Identity | Bytes | Direct official asset |
| --- | --- | ---: | --- |
| [isglobal.svg](brand-reference-assets/isglobal.svg) | ISGlobal — Barcelona Institute for Global Health | 10,034 | [ISGlobal English identity](https://www.isglobal.org/o/isglobal-theme-rounded/assets/images/isglobal/ISGlobal_logo_en.svg) |
| [hospital-clinic.svg](brand-reference-assets/hospital-clinic.svg) | Clínic Barcelona — Hospital Universitari | 6,960 | [Clínic identity on ISGlobal's official site](https://www.isglobal.org/o/isglobal-theme-rounded/images/HClinic_logo.svg) |
| [la-caixa-foundation.svg](brand-reference-assets/la-caixa-foundation.svg) | “la Caixa” Foundation; distinct from CaixaBank | 18,196 | [Foundation identity on ISGlobal's official site](https://www.isglobal.org/o/isglobal-theme-rounded/images/FundacioCaixa_logo_en.svg) |
| [severo-ochoa.svg](brand-reference-assets/severo-ochoa.svg) | Severo Ochoa programme | 4,718 | [Programme identity on ISGlobal's official site](https://www.isglobal.org/o/isglobal-theme-rounded/images/SeveroOchoa_logo.svg) |
| [cerca.svg](brand-reference-assets/cerca.svg) | CERCA | 7,524 | [CERCA identity on ISGlobal's official site](https://www.isglobal.org/o/isglobal-theme-rounded/images/Cerca_logo.svg) |
| [barcelona-city-council.svg](brand-reference-assets/barcelona-city-council.svg) | Ajuntament de Barcelona — Barcelona City Council | 10,796 | [Council identity on Barcelona's official site](https://www.barcelona.cat/assets/images/brand/banner/2025/logo-ajbcn.svg) |

Total logo weight: **58,228 bytes**. All six parse as SVG and contain no script or foreign-object elements. Their owners retain the respective brand/copyright rights; a general redistribution licence was not established by downloading official website files. The manifest does not infer an endorsement or a licence from public availability. Reference screenshots are for internal design comparison and should stay out of the public build.

## Strip implementation recommendation

Use one slow horizontal row with balanced **optical size**, generous separation, a light legible surface, and restrained edge fades. Preserve aspect ratios and avoid substituting CaixaBank, an old Clínic mark, or a generic city crest. Link the first accessible occurrence of each mark to the relevant relationship source and give it an informative text equivalent.

Duplicate the group only for seamless visual looping; set the duplicate `aria-hidden="true"` and exclude its links from keyboard focus. Per the founder’s **10 October 2026** direction, keep the strip moving on mouse hover and omit the page pause/resume control. Keyboard focus still exposes a stable scrollable list, and `prefers-reduced-motion` renders a static wrapping list. The attribution remains visible while the logos move. Avoid placing a Severo Ochoa mark where it can be read as a SciencePeaks clinical-certification badge.

The same direction adds Garmin as a seventh mark using the existing public asset [`garmin-logo.png`](../../public/garmin-logo.png). Its text alternative and the visible strip caption describe the wearable integration, separately from ISGlobal’s institutional network and recognitions. This addition does not establish a commercial partnership or endorsement.
