"use client";

import { useEffect, useRef, useState } from "react";
import { ProductScreenshot } from "./ProductScreenshot";
import { Watch, ClipboardText, UsersThree, Check } from "@phosphor-icons/react";

const chapters = [
  {
    title: "A project that keeps the person in view.",
    text: "A personal project dashboard brings recent HRV trends, the daily symptom check-in, treatment context and recorded measurements together. The participant and professional have a shared starting point for follow-up.",
    src: "/landing/product/project-participant-dashboard.webp",
    previewSrc: "/landing/product/project-participant-dashboard-full.webp",
    width: 1600,
    height: 759,
    alt: "SciencePeaks participant project dashboard with recent HRV trends, a personal reference, a daily check-in prompt, treatment context and measurement history.",
    caption:
      "A complete participant dashboard: personal trends on the left; treatment context and received measurements on the right.",
    label: "Your project dashboard",
    Icon: Watch,
  },
  {
    title: "See change alongside what happened.",
    text: "Explore months of physiology with treatment dates on the same timeline. A professional can review changes around chemotherapy, radiotherapy or immunotherapy alongside symptoms and activity, then discuss the next step with the person.",
    src: "/landing/product/hrv-treatment-history.webp",
    previewSrc: undefined,
    width: 1593,
    height: 623,
    alt: "SciencePeaks six-month RMSSD history with dated chemotherapy, radiotherapy and immunotherapy annotations beneath the curve.",
    caption:
      "A founder-provided product example of HRV history and treatment annotations. Dates provide context; they do not establish what caused a change.",
    label: "Treatment and trends",
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
          Actual product views. The group workspace uses demonstration
          participants.
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
                  ? "One shared record for the next conversation."
                  : index === 1
                    ? "Physiology and context, on the same timeline."
                    : "Current activity plans use minutes."}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
