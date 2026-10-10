# Trends and Projects landing explanation

Implemented locally on 10 October 2026 following the founder's request to explain longitudinal Trends and the supervisor's project workflow. The landing stays in English. No deployment command was run.

## Content and design

`TrendsShowcase.tsx` sits after the mobile showcase. The supplied screenshot anchors the explanation of 14/28/90-day windows, comparison with a personal reference, observation coverage and selected-day context. An HTML figure connects observed history, personal reference and daily context. A link leads into Projects.

`ProjectsShowcase.tsx` replaces the earlier follow-up presentation while preserving the existing `#follow-up` anchor. The heading and group FAQ explicitly define a project as the clinician or coach's shared workspace for a group of patients or athletes. An HTML diagram connects supervisor → shared project → individual participants. Selecting a participant opens their schematic individual view. Four accessible tabs explain:

- Cohort progress, physiological trends, reported fatigue and recording coverage.
- An individual's activity, personal history, check-ins, health context and professional plan.
- Participant comparisons with personal references and coverage retained.
- Available predictive/statistical models on eligible histories, including HRV outlooks and modelled training scenarios.

Figures use native HTML, CSS and inline SVG in the existing Poppins, navy, teal, pale background and liquid-glass style. The section adds no dependency, canvas loop or automatically cycling content. Motion is a finite entrance/panel transition. Mobile rearranges the diagram and tabs, and reduced-motion preferences remove animation. A native disclosure contains the existing actual professional project overview with demonstration participants.

The accessible tab list supports arrows, Home and End, with a single tab stop and associated panels. The exported HTML contains every explanation. Without JavaScript, all panels are visible and inactive interactive controls are hidden; image links and the native project disclosure remain usable.

## Source and interpretation

The founder supplied `trends-founder-original.png` in the conversation. Its complete 2508×1500 frame is preserved in five responsive WebP derivatives. The displayed screenshot retains its labels, values, dates, annotation and gaps. Larger full-resolution viewing loads on demand. [The manifest](SOURCE_MANIFEST.json) records hashes, dimensions and sizes; the original stays outside the public export.

The screenshot shows a 28-day RMSSD median of 56.5 ms, a 59 ms personal reference, 24 observed days, DFA Alpha1 and selected-day details with a treatment annotation. It illustrates the product interface. It does not establish a clinical outcome, a validated fatigue estimate or treatment causation.

Project participants A–D, their curves and model uncertainty are schematic figures, labelled visibly as workflow illustrations. Reported fatigue is a symptom check-in, physiological measures are separate observations, and model outlooks are estimates for professional interpretation. No diagnostic health score or validated oncology-fatigue prediction is claimed. The actual project screenshot uses demonstration participants, as recorded in the existing product asset notes.

[QA results and screenshots](QA.md) cover the production export, responsive layouts, interaction, accessibility and local loading measurements.
