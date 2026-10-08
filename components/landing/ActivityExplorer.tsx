"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { responsiveProductImage } from "./productImages";
import { CalendarDotsIcon, ClockIcon } from "@phosphor-icons/react";

const views = [
  {
    label: "Week & day",
    icon: CalendarDotsIcon,
    image: "/landing/product/activity-week.webp",
    width: 1440,
    height: 741,
    alt: "SciencePeaks activity view with estimated weekly movement, daily totals and the selected day's wrist-acceleration profile.",
    caption:
      "From a weekly overview to the movement within a day. Product example with estimated activity intensity.",
  },
  {
    label: "Hourly rhythm",
    icon: ClockIcon,
    image: "/landing/product/activity-rhythm.webp",
    width: 1440,
    height: 482,
    alt: "SciencePeaks hourly wrist-movement heatmap, showing how observed movement is distributed through the week.",
    caption:
      "See when movement happened and how the week's rhythm changes. Colour represents observed wrist acceleration.",
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
        <figure className="sp-explorer-frame">
          <img
            src={view.image}
            {...responsiveProductImage(
              view.image,
              "(max-width: 650px) calc(100vw - 60px), calc(100vw - 136px)",
            )}
            alt={view.alt}
            width={view.width}
            height={view.height}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="sp-explorer-caption">
            {view.caption}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
