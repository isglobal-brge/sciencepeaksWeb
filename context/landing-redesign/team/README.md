# Our Team source notes

Added 9 October 2026 at the founder's request. This section includes exactly the five named people, with Juan Ramón and Dídac first. It replaces the small founder list in the scientific-roots section and adds an Our team navigation anchor.

Design read: a professional health-and-sport landing section, preserving the page's Poppins, blue-white and teal identity with restrained glass disclosures. DESIGN_VARIANCE 5, MOTION_INTENSITY 3, VISUAL_DENSITY 3. Portraits, identities and roles remain visible. Native HTML details provides touch and keyboard interaction, works without JavaScript and keeps longer biographies optional. Five columns on wide screens, a two-founder / three-contributor layout on tablets and compact individual rows on phones. Existing reveal effects and reduced-motion preferences are reused. No auto-advancing carousel or additional runtime dependency.

| Person | SciencePeaks role | Evidence |
| --- | --- | --- |
| Prof. Juan Ramón González | Co-founder; scientific direction and project lead | UCAM deck, slide 13; GooVentures deck, slide 14; project-lead wording confirmed by the founder on 10 October 2026. Research Professor, Health Analytics Hub coordinator, UAB adjunct professorship, 220+ peer-reviewed publications, book authorship and analytical-tool contributions checked against the [official ISGlobal profile](https://www.isglobal.org/our-team/-/profiles/18510) on 10 October 2026. BRGE leadership and sport-related modelling are also documented by [Barça Innovation Hub](https://barcainnovationhub.fcbarcelona.com/blog/juan-ramon-gonzalez-its-not-about-changing-a-training-session-for-a-piece-of-information-but-about-anticipating-with-patterns/). |
| Dídac Cayuela Dolcet | Co-founder; technology and product | Full name confirmed by the founder on 10 October 2026; UCAM deck, slide 13; GooVentures deck, slide 14; [professional portfolio](https://didaccayuela.com/). |
| Dr. Manel González Peris | Clinical advisor on activity and METs | Founder-confirmed relationship in GooVentures slide 14. External background: [COMT interview](https://comt.cat/es/el-dr-manel-gonzalez-escogido-nuevo-presidente-de-la-seccion-de-medicina-del-deporte-del-comt/), [COMT exercise-prescription programme](https://comt.cat/wp-content/uploads/2025/09/PRESCRIPCIO-EXERCICI-FISIC.pdf), and the [2022 PEFS guide](https://scientiasalut.gencat.cat/bitstream/handle/11351/3541.2/guia_prescripcio_exercici_fisic_salut_2022_cas.pdf?isAllowed=y&sequence=12). This is personal clinical advice, not an institutional endorsement or a claim that SciencePeaks already prescribes in MET·h. |
| Clara Morella Teixidor | Innovation management | Fresh [deployed landing](https://www.sciencepeaks.ai/#team), checked 9 October 2026; UCAM slide 13. Professional link is the existing deployed landing's LinkedIn URL. No additional qualifications or executive title inferred. |
| Víctor Nàcher Castellet | Data science | Fresh [deployed landing](https://www.sciencepeaks.ai/#team), checked 9 October 2026; UCAM slide 13. Professional link is the existing deployed landing's LinkedIn URL. No additional qualifications or executive title inferred. |

The short descriptions for Clara and Víctor explain the scope of the published role. They do not claim personal ownership of a particular implemented algorithm, clinical study or commercial outcome.

## Juan Ramón profile refinement — 10 October 2026

The founder requested “Prof.” before Juan Ramón’s name and “project lead” alongside scientific direction. His visible introduction now includes the Research Professor title, Health Analytics Hub coordination and 220+ peer-reviewed publications. The expanded biography explains BRGE leadership, the adjunct professorship at the Autonomous University of Barcelona, biomedical and sport applications, the book *Omic Association Studies with R and Bioconductor*, and contributions to SNPassoc and DataSHIELD. These are personal qualifications and research contributions; their inclusion does not establish clinical validation of SciencePeaks.

Primary sources reviewed online:

- [ISGlobal profile](https://www.isglobal.org/our-team/-/profiles/18510): current title and hub leadership; publication lower bound; UAB role; textbook authorship; statistical, bioinformatics and DataSHIELD/SNPassoc work.
- [Barça Innovation Hub interview, 18 November 2025](https://barcainnovationhub.fcbarcelona.com/blog/juan-ramon-gonzalez-its-not-about-changing-a-training-session-for-a-piece-of-information-but-about-anticipating-with-patterns/): BRGE leadership, publication lower bound and predictive modelling in health and sport.
- [Barça Innovation Hub course faculty](https://barcainnovationhub.fcbarcelona.com/education/certificate-in-physiology-and-internal-load-monitoring/): health and sport data science, predictive modelling and precision-medicine expertise.

The title and qualifications stay in the exported HTML, including the native expandable biography. The existing portraits, layout and disclosure interaction are retained.

Portraits and hashes are recorded in [SOURCE_MANIFEST.json](SOURCE_MANIFEST.json). Founder images come from the specified UCAM deck, Clara and Víctor were downloaded fresh from the deployed site, and Manel's photograph comes from the primary-source COMT interview. The third interview photograph has the clearest face view; its CSS crop keeps his face centred. The COMT source credit is included in his expanded profile. All five public images are local WebP files with dimensions reserved and lazy loading. There is no remote image request at runtime.

The original low-resolution Juan Ramón and Clara portraits were preserved without upscaling or generating new facial detail. Image processing only applies EXIF orientation and proportional WebP resizing. Original downloaded photographs stay in this internal context folder, outside public and deployment output.

Scope: local implementation and validation. No commit, push or production deployment is part of this request.

See [QA.md](QA.md) for the final responsive, keyboard, accessibility and build results.
