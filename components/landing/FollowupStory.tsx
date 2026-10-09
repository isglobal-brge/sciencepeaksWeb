"use client";

import { useEffect, useRef, useState } from "react";
import { ProductScreenshot } from "./ProductScreenshot";
import { Watch, ClipboardText, UsersThree, Check } from "@phosphor-icons/react";

const chapters = [
  {
    title: "See the activity behind the week.",
    text: "Start with the week's activity, then open a day to see when movement happened. The wrist-movement trace helps place a walk, an active afternoon or a quieter day in time.",
    src: "/landing/product/movement-day.webp",
    previewSrc: "/landing/product/movement-day-full.webp",
    width: 1600,
    height: 689,
    alt: "SciencePeaks selected-day activity view with whole-day and six-hour controls and an ENMO wrist-movement trace.",
    caption:
      "A real recorded day. The line shows wrist movement (ENMO) over time; this is used to estimate activity intensity.",
    label: "Physical activity",
    Icon: Watch,
  },
  {
    title: "Give the person a voice in the data.",
    text: "A short check-in records how the person feels. Add treatment dates and personal notes, then review changes in symptoms, activity and physiology around those events.",
    src: "/landing/product/oncology-treatment-calendar.webp",
    previewSrc: undefined,
    width: 1172,
    height: 846,
    alt: "SciencePeaks sample oncology treatment calendar with dated planned treatments and their context.",
    caption:
      "Real product UI with sample data. Treatment dates give the longitudinal record context; they do not establish what caused a change.",
    label: "Symptoms and context",
    Icon: ClipboardText,
  },
  {
    title: "Bring it into professional follow-up.",
    text: "A clinician or coach follows participants in a shared project. Open a person's history, review their week, set or revise a movement plan, and export a report for the next follow-up.",
    src: "/landing/product/professional-group-overview.webp",
    previewSrc: undefined,
    width: 1184,
    height: 626,
    alt: "SciencePeaks professional project overview with sample participants, individual HRV trends and follow-up controls.",
    caption:
      "A real professional workspace with sample participants. Review the group, then open an individual record for the detail.",
    label: "Professional review",
    Icon: UsersThree,
  },
];

export function FollowupStory() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    const desktop = matchMedia("(min-width: 651px)");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActive(Number((entry.target as HTMLElement).dataset.chapter));
        });
      },
      { rootMargin: "-20% 0px -45% 0px", threshold: 0 },
    );
    const sync = () => {
      observer.disconnect();
      if (desktop.matches)
        refs.current.forEach((element) => {
          if (element) observer.observe(element);
        });
    };
    sync();
    desktop.addEventListener("change", sync);
    return () => {
      observer.disconnect();
      desktop.removeEventListener("change", sync);
    };
  }, []);
  const chapter = chapters[active];
  return (
    <div className="sp-story-layout">
      <figure className="sp-story-visual">
        <div className="sp-story-chrome">
          <chapter.Icon size={21} aria-hidden />
          <strong>{chapter.label}</strong>
          <span>SciencePeaks</span>
        </div>
        <div className={`sp-story-image sp-story-image-${active}`}>
          <ProductScreenshot
            src={chapter.src}
            previewSrc={chapter.previewSrc}
            width={chapter.width}
            height={chapter.height}
            alt={chapter.alt}
            title={chapter.label}
            caption={chapter.caption}
            sizes="(max-width: 650px) calc(100vw - 64px), 50vw"
            compact
          />
        </div>
        <div
          className="sp-story-tabs"
          role="group"
          aria-label="Explore the follow-up steps"
        >
          {chapters.map((item, index) => (
            <button
              key={item.label}
              type="button"
              aria-pressed={active === index}
              onClick={() => {
                setActive(index);
                const reduce =
                  matchMedia("(prefers-reduced-motion: reduce)").matches ||
                  document.documentElement.dataset.motionPaused === "true";
                if (matchMedia("(min-width: 651px)").matches)
                  refs.current[index]?.scrollIntoView({
                    behavior: reduce ? "auto" : "smooth",
                    block: "center",
                  });
              }}
            >
              {index + 1}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
        <figcaption>
          Real product screens. Treatment and professional examples use sample
          data.
        </figcaption>
      </figure>
      <div className="sp-story-chapters">
        {chapters.map((item, index) => (
          <article
            className={`sp-story-chapter ${active === index ? "is-active" : ""}`}
            key={item.title}
            data-chapter={index}
            ref={(element) => {
              refs.current[index] = element;
            }}
          >
            <span className="sp-story-number" aria-hidden>
              0{index + 1}
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div className="sp-story-connection">
              <Check size={17} aria-hidden />
              <span>
                {index === 0
                  ? "Activity is estimated from observed movement."
                  : index === 1
                    ? "Personal experience sits alongside physiology."
                    : "Current activity plans use minutes."}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
