import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  ChatCircleTextIcon,
  ClipboardTextIcon,
  CpuIcon,
  HeartbeatIcon,
  TreeStructureIcon,
  WatchIcon,
} from "@phosphor-icons/react/ssr";
import { ProductScreenshot } from "./ProductScreenshot";
import "./science-engine.css";

const stages = [
  {
    title: "Capture wearable signals",
    Icon: WatchIcon,
    text: "Garmin records activity and overnight physiology. Usable observations become a record across days.",
    label: "Wearable records",
  },
  {
    title: "Build a personal reference",
    Icon: HeartbeatIcon,
    text: "Align daily measures and derive features. Compare recent changes with the person’s own physiological history.",
    label: "Personal history + features",
  },
  {
    title: "Model patterns",
    Icon: TreeStructureIcon,
    text: "Machine learning estimates a specific HRV event. Distributed lag nonlinear models (DLNM) separately explore training load, delay and later RMSSD.",
    label: "Machine learning / DLNM statistics",
  },
  {
    title: "Explain and review",
    Icon: ChatCircleTextIcon,
    text: "The assistant explains available metrics with supporting data. A clinician or coach reviews the wider record with the person.",
    label: "AI explanation + professional review",
  },
] as const;

export function ScienceEngine() {
  return (
    <section
      className="sp-engine sp-section"
      id="data-science"
      aria-labelledby="sp-engine-title"
    >
      <div className="sp-wrap">
        <header className="sp-engine-heading sp-reveal">
          <p className="sp-engine-kicker">
            <CpuIcon size={18} aria-hidden="true" />
            The SciencePeaks engine
          </p>
          <h2 id="sp-engine-title">
            Data science at work.
            <br />
            <span>AI you can understand.</span>
          </h2>
          <p className="sp-engine-intro">
            Wearable records become{" "}
            <strong>personal trends, modelled outlooks and explanations</strong>{" "}
            that a clinician or coach can review. Here is how the pieces
            connect.
          </p>
        </header>

        <div className="sp-engine-flow sp-reveal">
          <ol className="sp-engine-stages" role="list">
            {stages.map((stage, index) => (
              <li key={stage.title}>
                <div className="sp-engine-station">
                  <span className="sp-engine-step-number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <span className="sp-engine-node">
                    <stage.Icon size={27} weight="regular" aria-hidden="true" />
                  </span>
                  {index < stages.length - 1 && (
                    <ArrowRightIcon
                      className="sp-engine-next"
                      size={17}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <span className="sp-engine-stage-label">{stage.label}</span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </li>
            ))}
          </ol>

          <aside
            className="sp-engine-context"
            aria-label="A parallel lane for personal context"
          >
            <div className="sp-engine-context-records">
              <ClipboardTextIcon size={21} aria-hidden="true" />
              <div>
                <span className="sp-engine-context-label">
                  Alongside the models
                </span>
                <p>
                  <strong>Symptoms</strong>, <strong>treatment dates</strong>{" "}
                  and <strong>training dates</strong>
                </p>
              </div>
            </div>
            <span className="sp-engine-context-bridge" aria-hidden="true" />
            <div className="sp-engine-context-destination">
              <ArrowUpRightIcon size={22} aria-hidden="true" />
              <span>
                Context for explanation
                <br />
                and professional review
              </span>
            </div>
          </aside>
        </div>

        <div className="sp-engine-evidence sp-reveal">
          <div className="sp-engine-outlook">
            <p className="sp-engine-kicker">
              <TreeStructureIcon size={16} aria-hidden="true" />
              Histogram gradient boosting
            </p>
            <h3>
              A personal outlook.
              <br />A specific target.
            </h3>
            <p className="sp-engine-body">
              A <strong>histogram gradient-boosted model</strong> combines
              recent HRV, sleep, resting heart rate, steps and training-load
              features with the person’s own history. It estimates whether the
              <strong>
                {" "}
                next usable HRV reading falls in a personal lower range.
              </strong>
            </p>
            <dl className="sp-engine-target">
              <div>
                <dt>What it estimates</dt>
                <dd>A physiological event</dd>
              </div>
              <div>
                <dt>Usual time window</dt>
                <dd>1–2 days</dd>
              </div>
            </dl>
            <p className="sp-engine-interpretation">
              The probability concerns an HRV reading.{" "}
              <strong>It is not a fatigue percentage or a diagnosis.</strong>
            </p>
          </div>
          <div className="sp-engine-screen">
            <ProductScreenshot
              src="/landing/product/hrv-forecast.webp"
              width={824}
              height={355}
              title="An experimental HRV forecast"
              alt="SciencePeaks experimental HRV outlook showing a 28% estimated chance of the next usable HRV reading falling below a personal boundary of 52 ms, usually within one to two days."
              caption="28% estimated chance that the next usable HRV reading falls below 52 ms, usually within 1–2 days. Here, 52 ms marks the lower range of 28 recent readings from the same source. Experimental wearable estimate."
              sizes="(max-width: 650px) calc(100vw - 70px), (max-width: 1000px) calc(100vw - 138px), 55vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
