"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  MoonStars,
  PersonSimpleWalk,
} from "@phosphor-icons/react";
import { ProductScreenshot } from "./ProductScreenshot";
import { responsiveProductImage } from "./productImages";
import "./garmin-integration.css";

const views = [
  {
    id: "activity",
    label: "Activity",
    Icon: PersonSimpleWalk,
    observation: "Recorded wrist movement",
    title: "A week of activity",
    explanation:
      "The watch records wrist movement. SciencePeaks estimates activity intensity and volume, shows recording coverage and connects the week with symptoms and your plan.",
    image: "/landing/product/weekly-activity-complete.webp",
    preview: "/landing/product/weekly-activity-complete-full.webp",
    width: 1600,
    height: 442,
    alt: "SciencePeaks weekly activity view with estimated moderate-or-higher activity minutes and daily totals.",
    caption:
      "An actual recorded week in SciencePeaks, with estimated activity minutes distributed across days. Movement is recorded; intensity and activity volume are estimates.",
  },
  {
    id: "overnight",
    label: "Overnight HRV",
    Icon: MoonStars,
    observation: "Available heartbeat intervals",
    title: "The pattern behind the night",
    explanation:
      "Available overnight heartbeat intervals support HRV analysis. SciencePeaks reveals the pattern behind a nightly summary, ready to review with personal history and how you feel.",
    image: "/landing/product/night-rmssd-current.webp",
    preview: undefined,
    width: 1180,
    height: 553,
    alt: "SciencePeaks overnight RMSSD profile showing heart rate variability through observed portions of a night.",
    caption:
      "An actual SciencePeaks overnight HRV view. RMSSD summarizes beat-to-beat variation; recording coverage and signal quality determine which observations can be interpreted.",
  },
] as const;

export function GarminIntegration() {
  const id = useId();
  const [selected, setSelected] = useState(0);
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
    setSelected(next);
    buttons.current[next]?.focus();
  }

  return (
    <section
      className="sp-garmin sp-reveal"
      id="garmin-integration"
      aria-labelledby="garmin-title"
      data-view={views[selected].id}
    >
      <div className="sp-garmin-heading">
        <div>
          <p className="sp-eyebrow">Our Garmin collaboration</p>
          <h3 id="garmin-title">
            Garmin on your wrist.
            <span>A fuller picture in SciencePeaks.</span>
          </h3>
          <p className="sp-garmin-intro">
            Compatible wearables provide activity and available overnight heart
            data. SciencePeaks connects these records with symptoms and personal
            context for professional follow-up.
          </p>
        </div>
        <div className="sp-garmin-approval">
          <img
            src="/landing/garmin/garmin-logo.webp"
            width="240"
            height="65"
            alt="Garmin"
            loading="lazy"
            decoding="async"
          />
          <p>
            <CheckCircle size={18} aria-hidden="true" />
            <strong>Approved Health SDK access</strong>
          </p>
          <span>iOS and Android apps reviewed</span>
        </div>
      </div>

      <div
        className="sp-garmin-tabs"
        role="tablist"
        aria-label="Explore the Garmin recording paths"
      >
        {views.map((view, index) => (
          <button
            key={view.id}
            ref={(element) => {
              buttons.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`${id}-tab-${index}`}
            aria-selected={selected === index}
            aria-controls={`${id}-panel-${index}`}
            tabIndex={selected === index ? 0 : -1}
            onClick={() => setSelected(index)}
            onKeyDown={(event) => navigate(event, index)}
          >
            <view.Icon size={19} aria-hidden="true" />
            {view.label}
          </button>
        ))}
      </div>

      <div className="sp-garmin-scene">
        <figure className="sp-garmin-watch sp-garmin-object">
          <div className="sp-garmin-watch-image">
            <img
              src="/landing/garmin/venu-3s-600.webp"
              srcSet="/landing/garmin/venu-3s-320.webp 320w, /landing/garmin/venu-3s-600.webp 600w"
              sizes="(max-width: 850px) 42vw, 260px"
              width="600"
              height="600"
              alt="Garmin Venu 3S wearable, shown with its original Garmin watch face."
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption>
            <strong>Your compatible Garmin</strong>
            <span>{views[selected].observation}</span>
          </figcaption>
        </figure>

        <span className="sp-garmin-connector" aria-hidden="true">
          <ArrowRight size={20} />
        </span>

        <figure className="sp-garmin-app sp-garmin-object">
          <div className="sp-garmin-phone">
            <img
              src="/landing/product/mobile-check-in.webp"
              {...responsiveProductImage(
                "/landing/product/mobile-check-in.webp",
                "(max-width: 850px) 36vw, 156px",
              )}
              width="804"
              height="1560"
              alt="Actual SciencePeaks symptom check-in screen with fatigue responses and treatment context, using sample data."
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption>
            <strong>Your SciencePeaks app</strong>
            <span>Symptoms + personal context</span>
          </figcaption>
        </figure>

        <span
          className="sp-garmin-connector sp-garmin-connector-review"
          aria-hidden="true"
        >
          <ArrowRight size={20} />
        </span>

        <div className="sp-garmin-review sp-garmin-object">
          {views.map((view, index) => (
            <div
              className="sp-garmin-panel"
              key={view.id}
              role="tabpanel"
              id={`${id}-panel-${index}`}
              aria-labelledby={`${id}-tab-${index}`}
              hidden={selected !== index}
              tabIndex={0}
            >
              <div className="sp-garmin-workspace">
                <div className="sp-garmin-workspace-title">
                  <img src="/logo.svg" width="20" height="20" alt="" loading="lazy" />
                  <span>Professional review</span>
                </div>
                <ProductScreenshot
                  src={view.image}
                  previewSrc={view.preview}
                  width={view.width}
                  height={view.height}
                  title={view.title}
                  alt={view.alt}
                  caption={view.caption}
                  sizes="(max-width: 650px) calc(100vw - 108px), (max-width: 850px) 80vw, 42vw"
                  compact
                />
              </div>
              <p className="sp-garmin-explanation">{view.explanation}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="sp-garmin-footer">
        <p>
          <strong>Already have a compatible Garmin?</strong> Keep your watch.
          Add a connected follow-up.
        </p>
        <a className="sp-text-link" href="#follow-up">
          See professional follow-up <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
      <p className="sp-garmin-note">Actual SciencePeaks screens. App preview uses sample data.</p>
    </section>
  );
}
