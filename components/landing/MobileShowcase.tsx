"use client";

import {
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
} from "react";
import {
  AndroidLogoIcon,
  AppleLogoIcon,
  BrowserIcon,
  CalendarCheckIcon,
  ChartLineUpIcon,
  ClipboardTextIcon,
  SunIcon,
} from "@phosphor-icons/react";
import { ProductScreenshot } from "./ProductScreenshot";
import { responsiveProductImage } from "./productImages";
import "./mobile-showcase.css";

export type MobileShowcaseScreen = {
  id: string;
  title: string;
  caption: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  previewSrc?: string;
};

type MobileShowcaseProps = {
  screens: readonly MobileShowcaseScreen[];
};

const screenIcons = [
  SunIcon,
  ChartLineUpIcon,
  ClipboardTextIcon,
  CalendarCheckIcon,
] as const;

export function MobileShowcase({ screens }: MobileShowcaseProps) {
  const id = useId();
  const [selected, setSelected] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const swipe = useRef<{ x: number; y: number; pointerId: number } | null>(
    null,
  );
  const suppressClickUntil = useRef(0);
  const screen = screens[selected] ?? screens[0];
  if (!screen) return null;

  const previous = screens[(selected + screens.length - 1) % screens.length];
  const next = screens[(selected + 1) % screens.length];

  function choose(index: number, moveFocus = false) {
    setSelected(index);
    const button = buttons.current[index];
    if (!button) return;
    if (moveFocus) button.focus({ preventScroll: true });
    const list = button.parentElement;
    if (list) {
      list.scrollTo({
        left: button.offsetLeft - (list.clientWidth - button.offsetWidth) / 2,
        behavior: "instant",
      });
    }
  }

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let target: number;
    if (event.key === "ArrowRight") target = (index + 1) % screens.length;
    else if (event.key === "ArrowLeft")
      target = (index + screens.length - 1) % screens.length;
    else if (event.key === "Home") target = 0;
    else if (event.key === "End") target = screens.length - 1;
    else return;
    event.preventDefault();
    choose(target, true);
  }

  function startSwipe(event: PointerEvent<HTMLDivElement>) {
    if (
      screens.length < 2 ||
      event.pointerType === "mouse" ||
      !event.isPrimary ||
      (event.target instanceof Element && event.target.closest("dialog"))
    ) {
      return;
    }
    swipe.current = {
      x: event.clientX,
      y: event.clientY,
      pointerId: event.pointerId,
    };
  }

  function finishSwipe(event: PointerEvent<HTMLDivElement>) {
    const start = swipe.current;
    if (!start || !event.isPrimary || event.pointerId !== start.pointerId)
      return;
    swipe.current = null;
    const horizontal = event.clientX - start.x;
    const vertical = event.clientY - start.y;
    if (
      Math.abs(horizontal) < 48 ||
      Math.abs(horizontal) < Math.abs(vertical) * 1.5
    )
      return;
    suppressClickUntil.current = performance.now() + 350;
    choose(
      (selected + (horizontal < 0 ? 1 : screens.length - 1)) % screens.length,
    );
  }

  function guardSwipeClick(event: MouseEvent<HTMLDivElement>) {
    if (performance.now() < suppressClickUntil.current) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  return (
    <div className="sp-mobile-showcase">
      <ul className="sp-mobile-platforms" aria-label="SciencePeaks platforms">
        <li>
          <BrowserIcon size={18} aria-hidden="true" />
          Web
        </li>
        <li>
          <AndroidLogoIcon size={18} aria-hidden="true" />
          Android
        </li>
        <li>
          <AppleLogoIcon size={18} aria-hidden="true" />
          iOS
        </li>
      </ul>

      <div
        className="sp-mobile-stage"
        role={screens.length > 1 ? "tabpanel" : "group"}
        id={`${id}-panel`}
        aria-labelledby={
          screens.length > 1 ? `${id}-tab-${selected}` : undefined
        }
        aria-label={screens.length > 1 ? undefined : screen.title}
        aria-describedby={`${id}-caption`}
        onPointerDown={startSwipe}
        onPointerUp={finishSwipe}
        onPointerCancel={() => {
          swipe.current = null;
        }}
        onClickCapture={guardSwipeClick}
      >
        <div className="sp-mobile-stage-floor" aria-hidden="true" />
        {screens.length > 1 && (
          <div
            className="sp-mobile-phone-peek sp-mobile-phone-left"
            aria-hidden="true"
          >
            <div className="sp-mobile-device">
              <img
                src={previous.src}
                {...responsiveProductImage(
                  previous.src,
                  "(max-width: 650px) 140px, 210px",
                )}
                width={previous.width}
                height={previous.height}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        )}
        {screens.length > 2 && (
          <div
            className="sp-mobile-phone-peek sp-mobile-phone-right"
            aria-hidden="true"
          >
            <div className="sp-mobile-device">
              <img
                src={next.src}
                {...responsiveProductImage(
                  next.src,
                  "(max-width: 650px) 140px, 210px",
                )}
                width={next.width}
                height={next.height}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        )}
        <div className="sp-mobile-phone-main" key={screen.id}>
          <ProductScreenshot
            className="sp-mobile-screen"
            src={screen.src}
            previewSrc={screen.previewSrc}
            width={screen.width}
            height={screen.height}
            alt={screen.alt}
            title={screen.title}
            caption={screen.caption}
            sizes="(max-width: 650px) 224px, 284px"
            compact
          />
        </div>
      </div>

      {screens.length > 1 && (
        <div
          className="sp-mobile-selector sp-mobile-interaction"
          role="tablist"
          aria-label="Explore SciencePeaks app screens"
        >
          {screens.map((item, index) => {
            const Icon = screenIcons[index % screenIcons.length];
            return (
              <button
                key={item.id}
                ref={(element) => {
                  buttons.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`${id}-tab-${index}`}
                aria-selected={selected === index}
                aria-controls={`${id}-panel`}
                tabIndex={selected === index ? 0 : -1}
                onClick={() => choose(index)}
                onKeyDown={(event) => navigate(event, index)}
              >
                <span className="sp-mobile-thumbnail" aria-hidden="true">
                  <img
                    src={item.src}
                    {...responsiveProductImage(item.src, "40px")}
                    width={item.width}
                    height={item.height}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="sp-mobile-tab-label">
                  <Icon size={17} aria-hidden="true" />
                  <span>{item.title}</span>
                </span>
              </button>
            );
          })}
        </div>
      )}

      <div className="sp-mobile-caption" aria-live="polite" aria-atomic="true">
        <h3>{screen.title}</h3>
        <p id={`${id}-caption`}>{screen.caption}</p>
      </div>
    </div>
  );
}
