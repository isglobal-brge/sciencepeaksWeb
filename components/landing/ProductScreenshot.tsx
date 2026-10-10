"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
} from "react";
import {
  ArrowsOutSimpleIcon,
  CornersOutIcon,
  MagnifyingGlassPlusIcon,
  XIcon,
} from "@phosphor-icons/react";
import { responsiveProductImage } from "./productImages";
import "./product-screenshot.css";

type ProductScreenshotProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  caption: string;
  sizes?: string;
  className?: string;
  /** Optional larger image for the viewer; the thumbnail still uses src. */
  previewSrc?: string;
  compact?: boolean;
  /** Eagerly fetch the primary hero image; other screenshots remain lazy. */
  priority?: boolean;
};

export function ProductScreenshot({
  src,
  width,
  height,
  alt,
  title,
  caption,
  sizes = "(max-width: 650px) calc(100vw - 48px), 50vw",
  className = "",
  previewSrc,
  compact = false,
  priority = false,
}: ProductScreenshotProps) {
  const id = useId();
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const canvas = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [naturalSize, setNaturalSize] = useState({ width, height });
  const fullSrc = previewSrc || src;

  useEffect(() => {
    if (!open || !dialog.current) return;
    const element = dialog.current;
    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    const gutter = window.innerWidth - document.documentElement.clientWidth;
    if (gutter > 0) {
      const padding = parseFloat(getComputedStyle(body).paddingRight) || 0;
      body.style.paddingRight = `${padding + gutter}px`;
    }
    body.style.overflow = "hidden";
    element.showModal();
    closeButton.current?.focus({ preventScroll: true });
    return () => {
      if (element.open) element.close();
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
      if (returnFocus.current?.isConnected) {
        returnFocus.current.focus({ preventScroll: true });
      }
    };
  }, [open]);

  function openScreen(event: MouseEvent<HTMLElement>) {
    if (
      event.currentTarget.tagName === "A" &&
      (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
    ) {
      return;
    }
    if (!dialog.current || typeof dialog.current.showModal !== "function") {
      // The image link remains a native full-size fallback without dialog support.
      if (event.currentTarget.tagName === "BUTTON")
        window.location.assign(fullSrc);
      return;
    }
    event.preventDefault();
    returnFocus.current = event.currentTarget;
    setNaturalSize({ width, height });
    setImageError(false);
    setDetail(false);
    setOpen(true);
  }

  function closeScreen() {
    if (dialog.current?.open) dialog.current.close();
    setOpen(false);
  }

  function setView(showDetail: boolean) {
    setDetail(showDetail);
    canvas.current?.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }

  return (
    <figure
      className={`sp-shot${compact ? " sp-shot-compact" : ""}${className ? ` ${className}` : ""}`}
    >
      <a
        className="sp-shot-image-link"
        href={fullSrc}
        onClick={openScreen}
        aria-haspopup="dialog"
        aria-label={`View ${title} at full size`}
      >
        <img
          src={src}
          {...responsiveProductImage(src, sizes)}
          width={width}
          height={height}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding="async"
        />
        <span className="sp-shot-image-hint" aria-hidden="true">
          <ArrowsOutSimpleIcon size={19} />
        </span>
      </a>
      <div className="sp-shot-toolbar">
        <span className="sp-shot-title">{title}</span>
        <button
          className="sp-shot-view"
          type="button"
          onClick={openScreen}
          aria-haspopup="dialog"
          aria-label={`View screen: ${title} at full size`}
        >
          View screen <ArrowsOutSimpleIcon size={16} aria-hidden="true" />
        </button>
      </div>
      {!compact && (
        <figcaption className="sp-shot-caption">{caption}</figcaption>
      )}

      <dialog
        ref={dialog}
        className="sp-screen-dialog"
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-caption`}
        onCancel={(event) => {
          event.preventDefault();
          closeScreen();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeScreen();
        }}
      >
        {open && (
          <div className="sp-screen-dialog-shell">
            <div className="sp-screen-heading">
              <div>
                <h2 className="sp-screen-dialog-title" id={`${id}-title`}>
                  {title}
                </h2>
                <p className="sp-screen-dialog-caption" id={`${id}-caption`}>
                  {caption}
                </p>
              </div>
              <button
                ref={closeButton}
                className="sp-screen-close"
                type="button"
                onClick={closeScreen}
                aria-label={`Close ${title} viewer`}
              >
                <XIcon size={21} aria-hidden="true" />
              </button>
            </div>
            <div className="sp-screen-toolbar">
              <div
                className="sp-screen-zoom"
                role="group"
                aria-label="Screenshot size"
              >
                <button
                  type="button"
                  aria-pressed={!detail}
                  onClick={() => setView(false)}
                >
                  <CornersOutIcon size={17} aria-hidden="true" />
                  Fit screen
                </button>
                <button
                  type="button"
                  aria-pressed={detail}
                  onClick={() => setView(true)}
                >
                  <MagnifyingGlassPlusIcon size={17} aria-hidden="true" />
                  Actual size
                </button>
              </div>
              <span className="sp-screen-scale">{detail ? "100%" : "Fit"}</span>
            </div>
            <div
              ref={canvas}
              className={`sp-screen-canvas ${detail ? "is-detail" : "is-fit"}`}
              style={
                {
                  "--sp-shot-natural-width": `${naturalSize.width}px`,
                } as CSSProperties
              }
              tabIndex={0}
              role="region"
              aria-label={`${title}. ${detail ? "Scroll to explore the full-size screenshot." : "Screenshot fitted to the viewer."}`}
            >
              {imageError ? (
                <p className="sp-screen-error" role="alert">
                  This screen could not load. Close the viewer and try again.
                </p>
              ) : (
                <img
                  className="sp-screen-image"
                  src={fullSrc}
                  width={naturalSize.width}
                  height={naturalSize.height}
                  alt={alt}
                  decoding="async"
                  onLoad={(event) => {
                    const image = event.currentTarget;
                    setNaturalSize({
                      width: image.naturalWidth,
                      height: image.naturalHeight,
                    });
                  }}
                  onError={() => setImageError(true)}
                />
              )}
            </div>
            <p className="sp-screen-helper" role="status" aria-live="polite">
              {detail
                ? "Scroll or swipe to inspect the screen."
                : "Select Actual size to read finer details."}
            </p>
          </div>
        )}
      </dialog>
    </figure>
  );
}
