"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { ArrowRightIcon, PlusIcon } from "@phosphor-icons/react";
import { ProductScreenshot } from "./ProductScreenshot";
import "./dlnm-showcase.css";

const views = [
  {
    key: "load-delay",
    label: "Load & delay",
    title: "See load and timing together.",
    description:
      "Training load and HRV can relate across several days. This map shows how the fitted relationship changes with the amount of training and the time that follows it.",
    guide: [
      ["Rows", "Daily training load, measured in TSS."],
      ["Columns", "Days after that training load."],
      [
        "Color",
        "The estimated association relative to the model’s reference load, on the log-RMSSD scale. It is not a change in milliseconds.",
      ],
    ],
    screen: "dlnm-load-delay",
    height: 819,
    screenTitle: "Training load × days after training",
    alt: "SciencePeaks exposure–lag heatmap, with training load in rows and days after training in columns. The selected cell shows the fitted association for 100 TSS at day two.",
    caption:
      "The selected cell explains one load-and-delay combination. Colors describe a modelled association, not a good-or-bad training score.",
  },
  {
    key: "response-curves",
    label: "Read the curves",
    title: "Read the pattern. See the uncertainty.",
    description:
      "Two views make the same model easier to understand: how different training loads compare overall, and how the association is distributed across the following days for a selected load.",
    guide: [
      [
        "Left curve",
        "The cumulative association across the fitted time window.",
      ],
      [
        "Right curve",
        "The association across days at the selected training load.",
      ],
      [
        "Shaded band",
        "The left curve’s 95% confidence interval shows uncertainty in the estimated association. A curve alone does not establish cause.",
      ],
    ],
    screen: "dlnm-response-curves",
    height: 828,
    screenTitle: "Training load and delayed response curves",
    alt: "SciencePeaks fitted cumulative association with a 95% confidence band alongside a lag-response curve for a selected training load, both on the log-RMSSD scale.",
    caption:
      "The example uses 75 TSS as its reference load. Values above or below zero describe higher or lower modelled log RMSSD relative to that reference.",
  },
  {
    key: "plan-week",
    label: "Plan a week",
    title: "Different weeks. The same starting point.",
    description:
      "A coach can lay out alternative seven-day training plans and compare them using the same saved model and recent training history. Change the proposed load while keeping the comparison grounded in the athlete’s records.",
    guide: [
      ["History", "The preceding training days are shared by every scenario."],
      [
        "Plans",
        "Each bar is a proposed daily TSS value; all seven days are explicit.",
      ],
      [
        "Range",
        "Planned loads stay within the fitted model’s supported range. A planned rest day is 0 TSS; missing data are not rest.",
      ],
    ],
    screen: "dlnm-plan-week",
    height: 867,
    screenTitle: "Seven-day training scenario plans",
    alt: "SciencePeaks scenario workspace showing shared preceding training history and three seven-day plans named Control, Build and High load.",
    caption:
      "Control, Build and High load are demonstration plans. They illustrate a comparison workflow, not recommended training doses.",
  },
  {
    key: "compare-outlooks",
    label: "Compare outlooks",
    title: "Compare possible paths from one history.",
    description:
      "See the modelled RMSSD trajectory for each proposed week alongside the athlete’s observed HRV. The load bars share the same dates, so the proposed training and the conditional outlook can be read together.",
    guide: [
      ["Solid line", "Previously observed RMSSD, with gaps left visible."],
      [
        "Dashed lines",
        "Conditional modelled trajectories for the three plans.",
      ],
      [
        "Blue band",
        "95% coefficient uncertainty for Control only. It does not include future measurement noise or uncertainty for the other plans.",
      ],
    ],
    screen: "dlnm-scenario-outlooks",
    height: 1000,
    screenTitle: "Observed HRV and conditional scenario trajectories",
    alt: "SciencePeaks chart aligning observed RMSSD with three dashed scenario trajectories and daily training-load bars. A shaded coefficient-uncertainty interval is shown for Control only.",
    caption:
      "These are conditional estimates from a saved fit and its input history. They are not guaranteed future readings or a fatigue diagnosis.",
  },
  {
    key: "check-data",
    label: "Check the data",
    title: "A model is only as clear as its inputs.",
    description:
      "Before interpreting a pattern, inspect the records used to fit it. The calendar pairs nightly HRV with daily training load and lets a professional review the evidence for an individual day.",
    guide: [
      [
        "Availability",
        "Separate marks show whether HRV and training load were recorded.",
      ],
      [
        "Rest & gaps",
        "Recorded rest and missing training load have different markers.",
      ],
      [
        "Selected day",
        "The original HRV outcome and TSS input remain visible in the saved model’s data snapshot.",
      ],
    ],
    screen: "dlnm-data-calendar",
    height: 948,
    screenTitle: "The records behind a saved model",
    alt: "SciencePeaks saved-data calendar distinguishing observed RMSSD, training, recorded rest and missing values. The selected day shows 53 milliseconds RMSSD and 82 TSS.",
    caption:
      "The saved snapshot makes the fitted data traceable. Coverage is part of interpretation, rather than hidden behind a smooth curve.",
  },
] as const;

export function DLNMShowcase() {
  const id = useId();
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function navigateTabs(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let next: number;
    switch (event.key) {
      case "ArrowRight":
        next = (index + 1) % views.length;
        break;
      case "ArrowLeft":
        next = (index + views.length - 1) % views.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = views.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus({ preventScroll: true });
    tabs.current[next]?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }

  return (
    <section
      className="sp-section sp-dlnm"
      id="training-response"
      aria-labelledby={`${id}-title`}
    >
      <div className="sp-wrap">
        <div className="sp-dlnm-heading sp-reveal">
          <div>
            <p className="sp-eyebrow">
              Training response · For coaches and performance teams
            </p>
            <h2 id={`${id}-title`}>
              Today’s training.
              <br />
              <span>The days that follow.</span>
            </h2>
          </div>
          <div className="sp-dlnm-intro">
            <p>
              Explore how training load relates to later heart-rate variability,
              then compare possible training weeks for the same athlete. The
              DLNM workspace keeps the timing, data and model assumptions in
              view.
            </p>
            <dl className="sp-dlnm-terms">
              <div>
                <dt>TSS</dt>
                <dd>A daily summary of training load.</dd>
              </div>
              <div>
                <dt>RMSSD</dt>
                <dd>
                  An HRV measure of beat-to-beat variation, in milliseconds.
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="sp-dlnm-explorer sp-reveal">
          <div
            className="sp-dlnm-tabs"
            role="tablist"
            aria-label="Explore the training-response workspace"
          >
            {views.map((view, index) => (
              <button
                key={view.key}
                ref={(element) => {
                  tabs.current[index] = element;
                }}
                id={`${id}-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-controls={`${id}-panel-${index}`}
                tabIndex={active === index ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(event) => navigateTabs(event, index)}
              >
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {view.label}
              </button>
            ))}
          </div>
          {views.map((view, index) => (
            <div
              key={view.key}
              id={`${id}-panel-${index}`}
              role="tabpanel"
              aria-labelledby={`${id}-tab-${index}`}
              hidden={active !== index}
              tabIndex={0}
              className="sp-dlnm-panel"
            >
              <div className="sp-dlnm-panel-content">
                <div className="sp-dlnm-copy">
                  <h3>{view.title}</h3>
                  <p>{view.description}</p>
                </div>
                <ProductScreenshot
                  src={`/landing/product/${view.screen}.webp`}
                  previewSrc={`/landing/product/${view.screen}-full.webp`}
                  width={1600}
                  height={view.height}
                  title={view.screenTitle}
                  alt={view.alt}
                  caption={view.caption}
                  sizes="(max-width: 650px) calc(100vw - 80px), (max-width: 1000px) calc(100vw - 150px), 62vw"
                />
                <dl className="sp-dlnm-guide">
                  {view.guide.map(([term, explanation]) => (
                    <div key={term}>
                      <dt>{term}</dt>
                      <dd>{explanation}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
          <p className="sp-dlnm-demo-note">
            Actual product views with demonstration data. Associations and
            scenarios support professional review; they do not establish cause.
          </p>
        </div>

        <div className="sp-dlnm-foot">
          <details className="sp-dlnm-method">
            <summary>
              What does DLNM mean? <PlusIcon size={17} aria-hidden="true" />
            </summary>
            <div>
              <p>
                A <strong>distributed lag non-linear model</strong> is a
                statistical model that describes a relationship across both
                exposure levels and time delays. Here, the exposure is training
                load and the outcome is log RMSSD. It can represent different
                patterns at different loads and across subsequent days, rather
                than assuming one straight-line relationship or an immediate
                response.
              </p>
              <a
                href="https://doi.org/10.1002/sim.3940"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the statistical method{" "}
                <ArrowRightIcon size={16} aria-hidden="true" />
              </a>
            </div>
          </details>
          <a className="sp-text-link" href="#contact">
            Explore it in a walkthrough{" "}
            <ArrowRightIcon size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
      <noscript>
        <style>
          {
            ".sp-dlnm-tabs { display: none; } .sp-dlnm .sp-shot-view { display: none; } .sp-dlnm-panel[hidden] { display: block; } .sp-dlnm-panel + .sp-dlnm-panel { border-top: 1px solid #d4e3e8; }"
          }
        </style>
      </noscript>
    </section>
  );
}
