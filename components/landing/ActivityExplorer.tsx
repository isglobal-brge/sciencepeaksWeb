"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { ProductScreenshot } from "./ProductScreenshot";
import {
  CalendarDotsIcon,
  ClockIcon,
  ChartBarIcon,
  WaveformIcon,
} from "@phosphor-icons/react";

const views = [
  {
    label: "The week",
    icon: CalendarDotsIcon,
    image: "/landing/product/weekly-activity-complete.webp",
    preview: "/landing/product/weekly-activity-complete-full.webp",
    width: 1600,
    height: 442,
    alt: "SciencePeaks weekly activity dashboard showing 251 estimated moderate-or-higher activity minutes, with daily totals from 28 September to 4 October.",
    caption:
      "Start with the week: estimated moderate-or-higher activity minutes accumulate across days. This recorded example shows 251 minutes, with different amounts on different days.",
  },
  {
    label: "A day in detail",
    icon: WaveformIcon,
    image: "/landing/product/daily-movement-detail.webp",
    preview: undefined,
    width: 1110,
    height: 510,
    alt: "SciencePeaks wrist-acceleration trace for 30 September with whole-day and six-hour views, showing when movement happened.",
    caption:
      "Then explore a day. The line shows observed wrist movement as ENMO (acceleration in milligravity), with peaks placed in time. Whole-day and six-hour views let you inspect the activity behind the summary.",
  },
  {
    label: "Hourly rhythm",
    icon: ClockIcon,
    image: "/landing/product/weekly-movement-rhythm.webp",
    preview: "/landing/product/weekly-movement-rhythm-full.webp",
    width: 1600,
    height: 548,
    alt: "SciencePeaks seven-day hourly wrist-movement heatmap with 24 columns, revealing how movement is distributed through each day.",
    caption:
      "Each row is a day; each column is an hour. Brighter cells mean higher average wrist acceleration. Read across to see a day’s pattern, or down to compare the same hour across the week. Hatching marks hours without observations.",
  },
  {
    label: "Intensity & volume",
    icon: ChartBarIcon,
    image: "/landing/product/activity-intensity-time.webp",
    preview: undefined,
    width: 802,
    height: 489,
    alt: "SciencePeaks estimated activity-intensity distribution: time in very low, light, moderate and vigorous MET bands.",
    caption:
      "Estimated intensity bands group observed minutes from very low to vigorous movement. The distribution gives the weekly total more meaning.",
  },
] as const;

export function ActivityExplorer() {
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
    <div className="sp-explorer">
      <div className="sp-explorer-toolbar">
        <span className="sp-explorer-label">A closer look at movement</span>
        <div
          className="sp-explorer-tabs"
          role="tablist"
          aria-label="Activity product views"
        >
          {views.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
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
                <Icon size={19} weight="regular" aria-hidden="true" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
      {views.map((view, index) => (
        <div
          key={view.label}
          className="sp-explorer-panel"
          role="tabpanel"
          id={`${id}-panel-${index}`}
          aria-labelledby={`${id}-tab-${index}`}
          hidden={selected !== index}
          tabIndex={0}
        >
          <div
            className={index === 3 ? "sp-explorer-pair" : "sp-explorer-single"}
          >
            <ProductScreenshot
              key={view.image}
              className="sp-explorer-frame"
              src={view.image}
              previewSrc={view.preview}
              title={view.label}
              caption={view.caption}
              alt={view.alt}
              width={view.width}
              height={view.height}
              sizes={
                index === 3
                  ? "(max-width: 650px) calc(100vw - 60px), 45vw"
                  : "(max-width: 650px) calc(100vw - 60px), calc(100vw - 136px)"
              }
            />
            {index === 3 && (
              <ProductScreenshot
                className="sp-explorer-frame"
                src="/landing/product/hourly-active-volume.webp"
                width={824}
                height={482}
                title="When active volume accumulates"
                alt="SciencePeaks hourly active-movement volume profile with a median and minimum-to-maximum band across contributing days, in MET-min per hour."
                caption="The hourly pattern combines estimated intensity and duration as active volume above the resting reference (MET-min per hour). The line shows the median; the band spans the contributing days."
                sizes="(max-width: 650px) calc(100vw - 60px), 45vw"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
