"use client";

import { useEffect, useRef, useState } from "react";
import { responsiveProductImage } from "./productImages";
import { Watch, ClipboardText, UsersThree, Check } from "@phosphor-icons/react";

const chapters = [
  {
    title: "See the activity behind the week.",
    text: "A walk, an active afternoon, a quieter day. Review estimated intensity and timing from Garmin movement data, rather than relying only on what someone remembers.",
    src: "/landing/product/activity-week.webp",
    alt: "SciencePeaks physical activity view with daily totals and the acceleration profile across a day.",
    label: "Physical activity",
    Icon: Watch,
  },
  {
    title: "Give the person a voice in the data.",
    text: "A short symptom check-in adds how the person feels. Treatment dates, training and personal notes put the physiological record into the context of daily life.",
    src: "/landing/product/oncology-check-in.webp",
    alt: "SciencePeaks symptom check-in asking about fatigue with selectable responses.",
    label: "Symptoms and context",
    Icon: ClipboardText,
  },
  {
    title: "Bring it into professional follow-up.",
    text: "A medical professional or coach can follow a group in a shared project, review individual histories and discuss a weekly activity plan with the person.",
    src: "/landing/product/professional-plan.webp",
    alt: "SciencePeaks professional plan controls for target minutes and a documented clinical review.",
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
          <img
            key={chapter.src}
            src={chapter.src}
            {...responsiveProductImage(
              chapter.src,
              "(max-width: 650px) calc(100vw - 64px), 50vw",
            )}
            width="1440"
            height="1020"
            loading="lazy"
            alt={chapter.alt}
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
          Product examples. The activity view uses a technical record; check-in
          and plan controls use inspection fixtures.
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
