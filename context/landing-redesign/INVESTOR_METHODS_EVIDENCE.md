# Investor-facing methods evidence

Verified 9 October 2026. Internal copy and diagram addendum to the landing product context. Source, dated demonstration, retrospective model evaluation and public availability are separate evidence levels. This review used existing files and public URLs; no servers, native builds, credentials, production changes or deployment.

## Recommended four-step story

**Heading:** Data science that connects every day.

**Introduction:** SciencePeaks turns wearable records into personal trends, modelled outlooks and explanations that a clinician or coach can review.

1. **Capture.** Garmin records activity and overnight physiology. People add how they feel and their treatment or training context.
2. **Build a personal reference.** We align records across days, derive physiological and activity features, and compare changes with the person’s own history.
3. **Model what may come next.** Machine learning estimates the chance of the next usable HRV reading falling in a personal lower range. In sport, DLNMs compare training-load scenarios and later RMSSD.
4. **Explain and review.** The AI assistant answers in plain language with supporting data. Professionals follow participants and discuss the next step in shared projects.

**Diagram:** Wearable records → personal features → machine learning / statistical models → AI explanation → professional review. Symptoms and treatment enter a parallel context lane that joins the explanation and professional review. They must not be drawn as inputs to the current HRV probability classifier.

## Concrete machine-learning explanation

**Heading:** A personal outlook, built with machine learning.

**Body:** A gradient-boosted model combines recent HRV, sleep, resting heart rate and activity features with your own physiological history. It estimates the chance that your next usable HRV reading falls in your personal lower range. The example shows 28% below 52 ms, usually within one to two days. It is an experimental wearable estimate for exploring the record.

**Screenshot 5 caption:** 28% estimated chance that the next usable HRV reading falls below 52 ms, usually within 1–2 days. Here, 52 ms marks the lower range of 28 recent readings from the same source. Experimental wearable estimate.

The supplied Spanish screen was visually inspected. It says “28 %”, “por debajo de 52,0 ms”, normally 1–2 days, approximately the lowest 20% of 28 same-source recent readings, and “Experimental”. Its overnight-pattern row says “Señal limitada”. The probability is neither a fatigue percentage nor a clinical risk grade. The 52 ms boundary belongs to this example, not to all users.

## Implemented model and architecture

| Layer | Verified implementation | Appropriate public description |
| --- | --- | --- |
| Daily feature engineering | Backend `daily_local_v1`: 62 ordered numeric features. HRV, resting HR, stress, sleep score/duration, steps, activity TSS/duration; recent level, personal robust deviations, change, short trend, recency/missingness and personal history. Current HRV plus at least 21 prior same-source observations required; history window up to 28 observations. | Personal history gives individual measurements their context. |
| HRV outlook | `p20-personal-v1`, selected `compact_hgb`: scikit-learn `HistGradientBoostingClassifier` after median imputation. Serving target `p20_next_usable_1_2d_v1`: next usable same-source HRV within one or two local days strictly below the person's historical lower-fifth boundary. Versioned bundle, feature contract and immutable input snapshots. | Machine learning estimates a specific near-term physiological event. |
| Overnight shape exploration | Separate `pattern_service.py`: quality-gated overnight RMSSD curves, 36 normalized bins, smoothed shape distance and historical analog matching. Classifier can use overnight two-minute RMSSD mean as fallback; it does not consume the full curve. | Explore the overnight pattern and similar periods in the person's history. |
| Training-load scenarios | R `dlnm` cross-basis for TSS exposure and lag, Gaussian `glm` of log RMSSD. Natural spline exposure/lag with fallback behavior; asynchronous individual fits and conditional weekly scenarios. | Explore how training load relates to later HRV and compare modelled weeks. |
| AI explanation | Separate assistant service and typed evidence/tool workflow. Current source defaults to an OpenAI-compatible `gpt-oss:20b`; September restricted real-model demo records `openai/gpt-oss-20b` at a pinned revision. Model identity is source/demonstration evidence, not a fresh production runtime audit. | Ask questions in plain language and inspect the supporting data. |
| Professional workspace | Shared projects, participants, activity/physiology history, symptoms and treatment context, review and reports. | The clinician or coach brings the observations and context into follow-up. |

**DLNM copy:** Training load can relate to physiological response over several days. Distributed lag nonlinear models map both load and delay, then compare modelled RMSSD trajectories for alternative weekly TSS schedules.

DLNM means **distributed lag nonlinear model**, not deep learning. Do not advertise neural-network fatigue prediction from this evidence.

The classifier's manifest explicitly excludes diagnosis, treatment, symptoms, fatigue, pain, nausea, notes and future/target information. Those contextual records are meaningful in the wider platform, but the current classifier is wearable-only. MET estimates are another derived activity feature family; the inspected classifier features do not currently include MET volume.

Research selected the compact HGB on chronological validation data and evaluated it on a frozen retrospective test block. The matching model artifact reports 4,914 eligible observations from 45 users and 1,012 test rows; AUPRC 0.570 and Brier 0.127 versus personal-frequency baseline 0.302 and 0.160. These are internal retrospective experiment measures, not customer counts, prospective clinical validation or a “79% accuracy” claim. The oncology test slice has only 57 rows and two positive events. Keep detailed evaluation for an investor evidence appendix, with its target and limitations.

## Platform availability

Safe visible copy: **Web · iOS · Android**. Supporting line: **Ask us about access for your programme or team.**

- Current frontend README, Expo config and native source establish all three clients. Web [app.sciencepeaks.ai](https://app.sciencepeaks.ai/) returned HTTP 200 with title “SciencePeaks Performance” during this review.
- Source bundle/package identifier is `com.isglobal.sciencepeaks.performance`; EAS App Store Connect ID is `6760294349`. Existing submit tracks are Android internal/alpha and iOS TestFlight-oriented delivery.
- The [public Google Play URL](https://play.google.com/store/apps/details?id=com.isglobal.sciencepeaks.performance&hl=en&gl=ES) returned 404. Apple's [official Spain lookup](https://itunes.apple.com/lookup?id=6760294349&country=es) returned `resultCount: 0`; the [App Store page](https://apps.apple.com/app/id6760294349) returned 429. Search did not establish a public listing. These checks do not establish absence in every region or account; they do not support public download badges.
- Client existence does not mean every feature is enabled in every project, platform or release. Recovery Insights and the assistant have eligibility and rollout controls. Do not say all visitors can immediately use the complete feature set.

## Source paths and integrity

Absolute local paths are internal reference locators. Do not publish private bundles, row-level derivatives or reference archives as marketing assets.

| Evidence | Current local path | SHA-256 |
| --- | --- | --- |
| User-supplied forecast screen 5 | `/var/folders/7y/yp5p839x7qb78sgcn44jsqrhzvtrps/T/orca-paste-1791540172985-95418824-f5ae-4698-89bd-c298a5fbe81d.png` | `88f51c7e2b94d91d2402f41e2a442ca68254aae8817b1c7be5d316702de5573b` |
| Backend model lock | `/Users/dcayuela/PycharmProjects/TFG_Project/api/src/recovery_insights/model-lock.json` | `dc000e61e0ebe841377c86dc8412b7b006b64601e87a436440202b611bb98f61` |
| Research bundle lock | `/Users/dcayuela/Desktop/sciencepeaks/sciencepeaks-research-lab/research_tracks/engagement_insights/productization/home_recovery_insights/artifacts/bundle-lock.json` | `d82ed1f21007411d609a2709ac479fc0f5a6cd76884040b037df23b3ef8916b5` |
| Research bundle manifest | `/Users/dcayuela/Desktop/sciencepeaks/sciencepeaks-research-lab/research_tracks/engagement_insights/productization/home_recovery_insights/artifacts/bundle-manifest.json` | `c03917a28c5f9362b942134018092857c55fcc4be8028bc504819517e871d4c3` |
| Training/selection pipeline | `/Users/dcayuela/Desktop/sciencepeaks/sciencepeaks-research-lab/research_tracks/engagement_insights/productization/home_recovery_insights/training/pipeline.py` | `e16ec1c5241116ac8b8388fd14c08283c2e0a35c1c0cfe61ed393b4478eac71f` |
| Serving feature builder | `/Users/dcayuela/PycharmProjects/TFG_Project/api/src/services/recovery_insights/feature_service.py` | `a0ff9a8c47d16bd9dad67e526f952f964cb3c40dc7ec4714c3ff6deaf36c605a` |
| Implemented DLNM fitter | `/Users/dcayuela/PycharmProjects/TFG_Project/api/src/services/runners/dlnm_fit.R` | `7ae1e274afea984edb8e8cb19eed1fae3518566129e37949221fbc0acec5ad20` |
| Assistant source defaults | `/Users/dcayuela/PycharmProjects/TFG_Project/assistant_service/src/assistant_service/config.py` | `272eb714213355af18e790bdaf52289f2acf814e5de9ddc9fa412b65af934a9a` |

Backend and research locks both reference bundle SHA-256 `2b8e12e2fce6956d4893c9ca3b6388b8a4e0b67ca5bc156f283d38decfa792ad` and manifest SHA-256 `c03917a28c5f9362b942134018092857c55fcc4be8028bc504819517e871d4c3`. This links the training selection evidence to the backend's pinned artifact; no joblib deserialization or live scoring was performed.

Other inspected sources:

- Research lane `home_recovery_insights/README.md` and `artifacts/result.json`, adjacent to the files above.
- Backend `api/src/services/recovery_insights/{prediction_service,pattern_service,artifact_service}.py` and `api/src/recovery_insights/README.md`.
- Frontend `features/recoveryInsights/types.ts`, `localization/resources/en/home.json`, `app.json`, `eas.json`, `README.md` and `docs/assistant-demo-release-2026-09-22-catalan.md`.
- Landing context `SCIENCEPEAKS_PRODUCT_CONTEXT.md`, `LANDING_REDESIGN_HANDOFF.md` and UCAM `deck/slides.md` slide 10, whose story is quality → personal reference → machine learning → assistant with evidence.
