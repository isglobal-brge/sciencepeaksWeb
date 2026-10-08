"use client";

import { useEffect, useId, useRef, useState } from "react";
import { responsiveProductImage } from "./productImages";
import {
  ChartBarIcon,
  CubeIcon,
  HeartbeatIcon,
  NotebookIcon,
  PauseIcon,
  PlayIcon,
  SpinnerGapIcon,
  WatchIcon,
  XIcon,
} from "@phosphor-icons/react";

type SceneMode = "activity" | "physiology" | "context";
type Phase = "idle" | "loading" | "ready" | "error";
type SceneController = {
  setActivity: (mets: number, minutes: number) => void;
  setMode: (mode: SceneMode) => void;
  pause: () => void;
  resume: () => void;
  dispose: () => void;
};
type SceneModule = {
  initScene: (options: {
    container: HTMLElement;
    onReady?: (controller: SceneController) => void;
    onError?: (error: Error) => void;
  }) => Promise<SceneController>;
};

const modes = [
  {
    id: "activity",
    label: "Activity",
    icon: ChartBarIcon,
    caption: "An illustrative record of activity intensity and duration.",
  },
  {
    id: "physiology",
    label: "Physiology",
    icon: HeartbeatIcon,
    caption:
      "Explore the shape of an illustrative physiological record over time.",
  },
  {
    id: "context",
    label: "Context",
    icon: NotebookIcon,
    caption:
      "Activity and personal context share a timeline for professional review.",
  },
] as const;

export function WearableScene() {
  const id = useId();
  const stage = useRef<HTMLDivElement>(null);
  const launchButton = useRef<HTMLButtonElement>(null);
  const pauseButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const focusAfterTransition = useRef<"open" | "close" | null>(null);
  const controller = useRef<SceneController | null>(null);
  const mounted = useRef(false);
  const generation = useRef(0);
  const currentMode = useRef<SceneMode>("activity");
  const isPaused = useRef(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [mode, setMode] = useState<SceneMode>("activity");
  const [paused, setPaused] = useState(false);
  const [pagePaused, setPagePaused] = useState(false);

  useEffect(() => {
    const sync = () => {
      const globallyPaused =
        document.documentElement.dataset.motionPaused === "true";
      setPagePaused(globallyPaused);
      if (globallyPaused || isPaused.current) controller.current?.pause();
      else controller.current?.resume();
    };
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-motion-paused"],
    });
    sync();
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    mounted.current = true;
    const hide = (event: PageTransitionEvent) => {
      if (event.persisted) controller.current?.pause();
      else {
        generation.current++;
        controller.current?.dispose();
        controller.current = null;
      }
    };
    const show = (event: PageTransitionEvent) => {
      if (
        event.persisted &&
        !isPaused.current &&
        document.documentElement.dataset.motionPaused !== "true"
      )
        controller.current?.resume();
    };
    window.addEventListener("pagehide", hide);
    window.addEventListener("pageshow", show);
    return () => {
      mounted.current = false;
      // This counter deliberately invalidates any load still pending at cleanup.
      // eslint-disable-next-line react-hooks/exhaustive-deps
      generation.current++;
      controller.current?.dispose();
      controller.current = null;
      window.removeEventListener("pagehide", hide);
      window.removeEventListener("pageshow", show);
    };
  }, []);

  useEffect(() => {
    if (phase === "ready" && focusAfterTransition.current === "open") {
      if (document.documentElement.dataset.motionPaused === "true")
        closeButton.current?.focus();
      else pauseButton.current?.focus();
      focusAfterTransition.current = null;
    } else if (
      (phase === "idle" || phase === "error") &&
      focusAfterTransition.current
    ) {
      launchButton.current?.focus();
      focusAfterTransition.current = null;
    }
  }, [phase]);

  async function loadScene() {
    if (phase === "loading" || controller.current || !stage.current) return;
    const token = ++generation.current;
    focusAfterTransition.current = "open";
    setPhase("loading");
    isPaused.current = false;
    setPaused(false);
    // Paint the loading feedback before compiling optional graphics.
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
    );
    if (!mounted.current || token !== generation.current || !stage.current)
      return;

    function fail() {
      if (!mounted.current || token !== generation.current) return;
      controller.current?.dispose();
      controller.current = null;
      isPaused.current = false;
      setPaused(false);
      setPhase("error");
    }

    try {
      // Browsers cache failed module imports; a deliberate retry needs a fresh URL.
      const sceneUrl = `/landing/scene.js${phase === "error" ? `?retry=${token}` : ""}`;
      const { initScene } = (await import(
        /* webpackIgnore: true */ sceneUrl
      )) as SceneModule;
      if (!mounted.current || token !== generation.current || !stage.current)
        return;
      const ready = await initScene({
        container: stage.current,
        onError: fail,
      });
      if (!mounted.current || token !== generation.current) {
        ready.dispose();
        return;
      }
      controller.current = ready;
      ready.setMode(currentMode.current);
      ready.setActivity(4, 30);
      if (document.documentElement.dataset.motionPaused === "true")
        ready.pause();
      setPhase("ready");
    } catch {
      fail();
    }
  }

  function closeScene() {
    focusAfterTransition.current = "close";
    generation.current++;
    controller.current?.dispose();
    controller.current = null;
    isPaused.current = false;
    setPaused(false);
    setPhase("idle");
  }

  function togglePause() {
    if (!controller.current) return;
    isPaused.current = !isPaused.current;
    if (isPaused.current) controller.current.pause();
    else controller.current.resume();
    setPaused(isPaused.current);
  }

  function selectMode(next: SceneMode) {
    currentMode.current = next;
    setMode(next);
    controller.current?.setMode(next);
  }

  const caption = modes.find((item) => item.id === mode)!.caption;
  const status =
    phase === "loading"
      ? "Preparing the interactive view…"
      : phase === "error"
        ? "3D could not start. The product view remains available."
        : phase === "ready"
          ? pagePaused
            ? "Paused by the page animation control."
            : paused
              ? "Interactive view paused."
              : "Move your pointer or choose a view."
          : "Optional 3D illustration.";

  return (
    <div className="sp-wearable">
      <div className="sp-wearable-header">
        <div>
          <span className="sp-wearable-kicker">A connected picture</span>
          <h3>Bring the record into focus.</h3>
        </div>
        {phase !== "ready" && (
          <button
            ref={launchButton}
            className="sp-wearable-button"
            type="button"
            onClick={loadScene}
            disabled={phase === "loading"}
            aria-controls={`${id}-frame`}
          >
            {phase === "loading" ? (
              <SpinnerGapIcon size={19} aria-hidden="true" />
            ) : (
              <CubeIcon size={19} aria-hidden="true" />
            )}
            {phase === "loading"
              ? "Loading 3D…"
              : phase === "error"
                ? "Try 3D again"
                : "Explore in 3D"}
          </button>
        )}
      </div>
      <figure>
        <div
          className={`sp-wearable-frame${phase === "ready" ? " is-ready" : ""}`}
          id={`${id}-frame`}
        >
          <div className="sp-wearable-poster" aria-hidden={phase === "ready"}>
            <div className="sp-wearable-poster-watch">
              <WatchIcon size={68} weight="duotone" aria-hidden="true" />
              <strong>From a wearable</strong>
              <span>Activity and overnight signals</span>
            </div>
            <div className="sp-wearable-poster-record">
              <span>Overnight physiology</span>
              <img
                src="/landing/product/night-profile.webp"
                {...responsiveProductImage(
                  "/landing/product/night-profile.webp",
                  "(max-width: 650px) 45vw, 420px",
                )}
                alt="SciencePeaks overnight DFA alpha 1 profile, showing its observed interval and variation across the night."
                width={1179}
                height={437}
                loading="lazy"
                decoding="async"
              />
              <span>A product example, over time</span>
            </div>
          </div>
          <div className="sp-wearable-stage" ref={stage} aria-hidden="true" />
        </div>
        <figcaption className="sp-wearable-caption">
          {phase === "ready"
            ? caption
            : "Wearable observations become a record of movement and overnight physiology."}
        </figcaption>
      </figure>
      {phase === "ready" && (
        <div className="sp-wearable-toolbar">
          <div
            className="sp-wearable-modes"
            role="group"
            aria-label="Interactive record views"
          >
            {modes.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  disabled={paused || pagePaused}
                  aria-pressed={mode === item.id}
                  onClick={() => selectMode(item.id)}
                >
                  <Icon size={17} aria-hidden="true" />
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="sp-wearable-actions">
            <button
              ref={pauseButton}
              className="sp-wearable-button"
              type="button"
              onClick={togglePause}
              disabled={pagePaused}
              aria-pressed={paused || pagePaused}
              aria-label={paused ? "Resume 3D view" : "Pause 3D view"}
            >
              {paused ? (
                <PlayIcon size={18} aria-hidden="true" />
              ) : (
                <PauseIcon size={18} aria-hidden="true" />
              )}
              {paused ? "Resume" : "Pause"}
            </button>
            <button
              ref={closeButton}
              className="sp-wearable-close"
              type="button"
              onClick={closeScene}
              aria-label="Close the 3D view"
            >
              <XIcon size={19} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
      <p className="sp-wearable-status" role="status" aria-live="polite">
        {status}
      </p>
    </div>
  );
}
