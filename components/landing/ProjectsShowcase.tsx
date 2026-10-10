"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChartLine,
  GitBranch,
  Heartbeat,
  Stethoscope,
  UserCircle,
  UsersThree,
} from "@phosphor-icons/react";
import { ProductScreenshot } from "./ProductScreenshot";
import "./trends-projects.css";

const views = [
  {
    label: "Cohort",
    Icon: UsersThree,
    title: "See the group. Keep each person visible.",
    text: "Review the cohort's progress, physiological trends and reported fatigue together. Check which records are available and where a closer individual review is needed.",
    detail:
      "Activity, symptoms and data coverage stay connected to the people behind them.",
  },
  {
    label: "Individual",
    Icon: UserCircle,
    title: "Open one person’s full story.",
    text: "Follow a participant's activity, Trends, symptom check-ins and health context over time. Compare with their personal history and review progress against the professional plan.",
    detail:
      "Reported fatigue adds the person's experience to the wearable record.",
  },
  {
    label: "Compare",
    Icon: ChartLine,
    title: "Compare participants, with context.",
    text: "Review selected participants side by side. Compare activity and physiological patterns while keeping personal references, recording coverage and symptoms in view.",
    detail:
      "Different histories and missing observations matter when reading a comparison.",
  },
  {
    label: "Models",
    Icon: GitBranch,
    title: "Explore what the history can tell you.",
    text: "Run available predictive and statistical models on eligible participant histories. Explore HRV outlooks or modelled training scenarios, then bring the estimates into professional follow-up.",
    detail: "Model estimates support the clinician or coach's interpretation.",
  },
] as const;
const people = ["A", "B", "C", "D"];

/** Schematic curves explain review modes; they are not participant measurements. */
function Pattern({
  variant = 0,
  forecast = false,
}: {
  variant?: number;
  forecast?: boolean;
}) {
  const paths = [
    "M8 59 L37 48 L67 53 L97 32 M124 39 L153 25 L183 37 L213 21 L242 30 L272 15",
    "M8 35 L37 45 L67 31 L97 44 M124 58 L153 48 L183 33 L213 39 L242 25 L272 33",
    "M8 60 L37 57 L67 36 L97 46 M124 31 L153 45 L183 28 L213 22 L242 38 L272 25",
    "M8 22 L37 36 L67 33 L97 51 M124 38 L153 32 L183 46 L213 29 L242 34 L272 19",
  ];
  return (
    <svg
      className="sp-project-pattern"
      viewBox={forecast ? "0 0 360 86" : "0 0 280 86"}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className="sp-project-reference"
        d={forecast ? "M8 43H350" : "M8 43H272"}
      />
      <path className="sp-project-observed" d={paths[variant]} />
      {forecast && (
        <>
          <path
            className="sp-project-uncertainty"
            d="M272 15 L299 3 L325 5 L351 0 L351 43 L325 37 L299 36 Z"
          />
          <path
            className="sp-project-estimate"
            d="M272 15L299 20L325 17L351 12"
          />
        </>
      )}
    </svg>
  );
}

export function ProjectsShowcase() {
  const id = useId();
  const [active, setActive] = useState(0);
  const [person, setPerson] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === "ArrowRight") next = (index + 1) % views.length;
    else if (event.key === "ArrowLeft")
      next = (index + views.length - 1) % views.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = views.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  }
  return (
    <div className="sp-projects" data-project-view={active}>
      <figure
        className="sp-project-map sp-reveal"
        aria-labelledby={`${id}-map-caption`}
      >
        <div className="sp-project-supervisor">
          <span className="sp-project-node-icon">
            <Stethoscope size={31} aria-hidden />
          </span>
          <strong>Your supervisor</strong>
          <span>Clinician or coach</span>
        </div>
        <span className="sp-project-connector" aria-hidden>
          <ArrowRight size={22} />
        </span>
        <div className="sp-project-hub">
          <UsersThree size={35} aria-hidden />
          <strong>One shared project</strong>
          <span>Your care programme or team</span>
          <div className="sp-project-hub-records">
            <span>Trends</span>
            <span>Symptoms</span>
            <span>Activity</span>
          </div>
        </div>
        <span className="sp-project-connector sp-project-branch" aria-hidden>
          <ArrowRight size={22} />
        </span>
        <div className="sp-project-roster">
          <p>Connected participants</p>
          <div>
            {people.map((label, index) => (
              <button
                type="button"
                key={label}
                aria-label={`Explore participant ${label}'s individual follow-up`}
                aria-controls={`${id}-panel-1`}
                aria-pressed={active === 1 && person === index}
                onClick={() => {
                  setPerson(index);
                  setActive(1);
                }}
              >
                <span>{label}</span>
                <UserCircle size={25} aria-hidden />
              </button>
            ))}
          </div>
          <span>Patients or athletes</span>
        </div>
        <figcaption id={`${id}-map-caption`}>
          A project connects a supervisor with a group of participants and their
          individual records.
        </figcaption>
      </figure>
      <div className="sp-project-explorer sp-reveal">
        <div
          className="sp-project-tabs"
          role="tablist"
          aria-label="Explore what a supervisor can do in a project"
        >
          {views.map((view, index) => (
            <button
              type="button"
              role="tab"
              key={view.label}
              id={`${id}-tab-${index}`}
              aria-selected={active === index}
              aria-controls={`${id}-panel-${index}`}
              tabIndex={active === index ? 0 : -1}
              ref={(element) => {
                buttons.current[index] = element;
              }}
              onClick={() => setActive(index)}
              onKeyDown={(event) => navigate(event, index)}
            >
              <view.Icon size={20} aria-hidden />
              {view.label}
            </button>
          ))}
        </div>
        {views.map((view, index) => (
          <div
            className="sp-project-panel"
            key={view.label}
            role="tabpanel"
            id={`${id}-panel-${index}`}
            aria-labelledby={`${id}-tab-${index}`}
            hidden={active !== index}
            tabIndex={0}
          >
            <div className="sp-project-panel-copy">
              <h3>{view.title}</h3>
              <p>{view.text}</p>
              <p className="sp-project-detail">{view.detail}</p>
              {index === 3 && (
                <a className="sp-text-link" href="#training-response">
                  Explore the modelling workflow{" "}
                  <ArrowUpRight size={17} aria-hidden />
                </a>
              )}
            </div>
            <figure className={`sp-project-figure sp-project-figure-${index}`}>
              {index === 0 && (
                <>
                  <div className="sp-project-cohort-lines">
                    {people.map((label, i) => (
                      <div key={label}>
                        <span className="sp-project-person-letter">
                          {label}
                        </span>
                        <Pattern variant={i} />
                        <span className="sp-project-record-mark">
                          <Heartbeat size={18} aria-hidden />
                          <span>Check-in</span>
                        </span>
                      </div>
                    ))}
                  </div>
                  <figcaption>
                    Group view → individual progress, trends and check-ins
                  </figcaption>
                </>
              )}
              {index === 1 && (
                <>
                  <div className="sp-project-person-heading">
                    <span className="sp-project-person-letter">
                      {people[person]}
                    </span>
                    <strong>One participant, connected over time</strong>
                  </div>
                  <div className="sp-project-individual-pattern">
                    <span>Physiological trend</span>
                    <Pattern variant={person} />
                  </div>
                  <div className="sp-project-context-line">
                    <span>
                      <Heartbeat size={18} aria-hidden />
                      Reported fatigue
                    </span>
                    <span>Activity + plan</span>
                    <span>Health context</span>
                  </div>
                  <figcaption>
                    A personal history for the next follow-up
                  </figcaption>
                </>
              )}
              {index === 2 && (
                <>
                  <div className="sp-project-comparison">
                    {[0, 1].map((i) => (
                      <div key={i}>
                        <span className="sp-project-person-letter">
                          {people[i]}
                        </span>
                        <Pattern variant={i} />
                        <span>Own history + coverage</span>
                      </div>
                    ))}
                  </div>
                  <figcaption>
                    Selected participants, compared alongside their context
                  </figcaption>
                </>
              )}
              {index === 3 && (
                <>
                  <div className="sp-project-model-flow">
                    <span>Observed history</span>
                    <ArrowRight size={18} aria-hidden />
                    <span>Model</span>
                    <ArrowRight size={18} aria-hidden />
                    <span>Estimated outlook</span>
                  </div>
                  <Pattern forecast />
                  <div className="sp-project-model-key">
                    <span>Observed</span>
                    <span>Model estimate + uncertainty</span>
                  </div>
                  <figcaption>
                    Eligibility and uncertainty remain part of the review
                  </figcaption>
                </>
              )}
            </figure>
          </div>
        ))}
        <p className="sp-project-illustration-note">
          Interactive workflow illustration. Participants and curves are
          schematic.
        </p>
      </div>
      <details className="sp-project-product">
        <summary>
          <span>See the actual project workspace</span>
          <span className="sp-project-product-plus" aria-hidden>
            +
          </span>
        </summary>
        <div>
          <ProductScreenshot
            src="/landing/product/professional-group-overview.webp"
            width={1184}
            height={626}
            title="The professional project overview"
            alt="SciencePeaks professional project overview with demonstration participants, individual HRV trends and follow-up controls."
            caption="Actual professional workspace with demonstration participants. Supervisors can review the group and open an individual record."
            sizes="(max-width: 650px) calc(100vw - 70px), 75vw"
          />
          <a className="sp-text-link" href="#contact">
            Request a demo <ArrowUpRight size={18} aria-hidden />
          </a>
        </div>
      </details>
    </div>
  );
}
