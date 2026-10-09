"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { ProductScreenshot } from "./ProductScreenshot";
import {
  CalendarDotsIcon,
  ClockIcon,
  ChartBarIcon,
} from "@phosphor-icons/react";

const views = [
  {
    label: "Week & day",
    icon: CalendarDotsIcon,
    image: "/landing/product/movement-overview.webp",
    preview: "/landing/product/movement-overview-full.webp",
    width: 1600,
    height: 1172,
    alt: "SciencePeaks activity view with estimated weekly movement, daily totals and the selected day's wrist-acceleration profile.",
    caption:
      "Bars show estimated moderate-or-higher activity minutes per day. In the app, selecting a day opens the wrist-movement trace beneath it. This example connects the weekly total to the hours when movement happened.",
  },
  {
    label: "Hourly rhythm",
    icon: ClockIcon,
    image: "/landing/product/movement-rhythm.webp",
    preview: "/landing/product/movement-rhythm-full.webp",
    width: 1600,
    height: 675,
    alt: "SciencePeaks hourly wrist-movement heatmap, showing how observed movement is distributed through the week.",
    caption:
      "Each row is a day; each column is an hour. Brighter cells mean higher average wrist acceleration (ENMO). Read across a row to see a day's pattern, or down a column to compare the same hour.",
  },
  {
    label: "Intensity & volume",
    icon: ChartBarIcon,
    image: "/landing/product/movement-intensity.webp",
    preview: "/landing/product/movement-intensity-full.webp",
    width: 1600,
    height: 583,
    alt: "SciencePeaks time spent in estimated activity intensity bands and an hourly active-movement volume profile.",
    caption:
      "On the left, minutes are grouped by estimated intensity. On the right, the hourly pattern combines intensity and time as active volume above the resting reference (MET-min per hour).",
  },
] as const;

export function ActivityExplorer() {
  const id = useId();
  const [selected, setSelected] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const view = views[selected];

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
                aria-controls={`${id}-panel`}
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
      <div
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${selected}`}
        tabIndex={0}
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
          sizes="(max-width: 650px) calc(100vw - 60px), calc(100vw - 136px)"
        />
      </div>
    </div>
  );
}
