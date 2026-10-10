# DLNM landing feature captures

The founder supplied `/Users/dcayuela/Downloads/SciencePeaks-DLNM-Presentation-2026-10-10` as a source of actual product views and clearer explanations for the landing. The original bundle was captured from the SciencePeaks Expo Web interface using existing deterministic synthetic inspection fixtures. Its [source README](SOURCE_README.txt) and [capture manifest](SOURCE_CAPTURE_MANIFEST.json) are retained here. No production API, patient data or database was used; the screens do not constitute clinical validation.

Five original PNG captures are curated for the public training-response explorer:

| Landing view | Supplied capture | Interpretation |
| --- | --- | --- |
| Load & delay | `05-exposure-lag-heatmap.png` | Daily TSS × days after training; fitted association relative to the reference load, on the log-RMSSD scale. |
| Read the curves | `02-response-curves.png` | Cumulative association across the fitted lag window and the lag-specific curve at a selected load; the left curve includes a 95% confidence band. |
| Plan a week | `11-scenario-planning.png` | Three explicit seven-day load plans compared using the same saved fit and recent training history. |
| Compare outlooks | `13-scenario-trajectories.png` | Observed RMSSD, conditional future trajectories and aligned daily TSS. The blue 95% band is coefficient uncertainty for Control only and excludes future measurement noise. |
| Check the data | `09-fit-data-calendar.png` | Saved model inputs and HRV outcomes, distinguishing observed training, recorded rest and missing values. |

[LANDING_ASSET_MANIFEST.json](LANDING_ASSET_MANIFEST.json) records source SHA-256 hashes, original dimensions and every public derivative. All captures retain their complete frame, without chart edits, cropping, stretching or the supplied 16:9 slide padding. Public WebP images have 320, 640, 960 and 1600px widths; the separate full-size viewer retains the original 2592px width. WebP quality is 94. Original PNGs and internal provenance stay in `context/`, outside the deployment output.

The landing labels the views as demonstration data. It presents DLNM as a statistical model, keeps it distinct from the experimental HRV classifier and the AI assistant, and explains associations and conditional scenarios without implying causality, a validated fatigue diagnosis or a recommended training dose. Missing load is not a recorded rest day. The scenario confidence description does not imply full future-observation uncertainty.

The general definition links to the primary statistical method: Gasparrini, Armstrong and Kenward, [Distributed lag non-linear models](https://doi.org/10.1002/sim.3940), *Statistics in Medicine* (2010). SciencePeaks-specific copy was checked against the [product context](../SCIENCEPEAKS_PRODUCT_CONTEXT.md), [methods evidence](../INVESTOR_METHODS_EVIDENCE.md), the supplied screens and the current frontend DLNM implementation notes.

The explorer presents actual screenshots with reading guides, rather than executing a model in the marketing site. Without JavaScript, the first view and its direct full-size image link remain available, and the method explanation remains a native expandable disclosure.

[Local verification](QA.md) records responsive, keyboard, image-viewer and accessibility checks for this feature.
