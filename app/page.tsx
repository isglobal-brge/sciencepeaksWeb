import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Watch,
  Heartbeat,
  ClipboardText,
  Stethoscope,
  PersonSimpleRun,
  UsersThree,
  ChatCircleText,
  Flask,
  Check,
  Plus,
  MoonStars,
  ChartLineUp,
} from "@phosphor-icons/react/ssr";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { MotionEffects } from "@/components/landing/MotionEffects";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
import { FollowupStory } from "@/components/landing/FollowupStory";
import { ActivityExplorer } from "@/components/landing/ActivityExplorer";
import { ActivityVolume } from "@/components/landing/ActivityVolume";
import { WearableScene } from "@/components/landing/WearableScene";
import { ContactRequest } from "@/components/landing/ContactRequest";
import { ProductScreenshot } from "@/components/landing/ProductScreenshot";
import { responsiveProductImage } from "@/components/landing/productImages";
import "./landing.css";

const description =
  "SciencePeaks connects wearable activity, overnight HRV and symptoms to support fatigue and recovery follow-up in oncology care and professional sport.";
export const metadata: Metadata = {
  title: "SciencePeaks | A fuller picture of activity, fatigue and recovery",
  description,
  alternates: { canonical: "https://www.sciencepeaks.ai/" },
  openGraph: {
    title: "SciencePeaks | A fuller picture of fatigue and recovery",
    description,
    url: "https://www.sciencepeaks.ai/",
    images: [
      {
        url: "/landing/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "SciencePeaks wearable activity and physiological trends connected for professional follow-up.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SciencePeaks | A fuller picture of fatigue and recovery",
    description,
    images: ["/landing/social-preview.jpg"],
  },
};

const questions = [
  [
    "What is SciencePeaks?",
    "SciencePeaks is a wearable-based platform that connects physical activity estimates, overnight physiological trends, symptoms and personal context. It supports fatigue and recovery follow-up for oncology care and professional athletes, with a shared workspace for their professionals.",
  ],
  [
    "What makes the platform different?",
    "The connection across days and across perspectives: wearable activity, available overnight profiles, how the person feels, and treatment or training context. Professionals can follow a group in projects, review individual histories and explore analytical tools.",
  ],
  [
    "Which wearables does it use?",
    "The current recording workflow uses compatible Garmin devices. Movement data inform estimated physical activity; available overnight heartbeat intervals inform HRV analysis. We can confirm the right device and recording setup in your product walkthrough.",
  ],
  [
    "How are activity and fatigue measured?",
    "The wearable observes movement and available heartbeat intervals. SciencePeaks derives physiological metrics and estimates activity intensity and volume. Symptoms add the person’s experience. Recording hours indicate what was observed; missing time is not treated as inactivity. These signals support interpretation rather than a stand-alone fatigue diagnosis.",
  ],
  [
    "Can a clinician or coach follow a group?",
    "Yes. The project system supports a supervisor following a group, such as patients in a care programme or athletes in a team. Professionals can review histories, activity plans and reports.",
  ],
  [
    "How do AI and training models help?",
    "The assistant helps explain available metrics and trends in natural language with supporting evidence. In sport, distributed lag non-linear models (DLNM) explore how Training Stress Score (TSS) relates to later RMSSD (root mean square of successive differences), an HRV measure of beat-to-beat variation. Scenarios depend on data and model assumptions. We can show you the available tools during a walkthrough.",
  ],
  [
    "Can I prescribe activity in MET·h?",
    "Current professional activity plans use minutes. MET·h describes intensity multiplied by time and is useful for explaining volume. Prescribing in MET·h and integration with electronic health records are future directions.",
  ],
];

export default function Home() {
  const structured = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.sciencepeaks.ai/#website",
        url: "https://www.sciencepeaks.ai/",
        name: "SciencePeaks",
        inLanguage: "en",
        publisher: { "@id": "https://www.sciencepeaks.ai/#organization" },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.sciencepeaks.ai/#webpage",
        url: "https://www.sciencepeaks.ai/",
        name: "SciencePeaks | A fuller picture of activity, fatigue and recovery",
        description,
        inLanguage: "en",
        isPartOf: { "@id": "https://www.sciencepeaks.ai/#website" },
        about: { "@id": "https://www.sciencepeaks.ai/#application" },
      },
      {
        "@type": "WebApplication",
        "@id": "https://www.sciencepeaks.ai/#application",
        name: "SciencePeaks",
        url: "https://www.sciencepeaks.ai/",
        applicationCategory: "HealthApplication",
        description,
        publisher: { "@id": "https://www.sciencepeaks.ai/#organization" },
      },
    ],
  };
  return (
    <div className="sp-site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }}
      />
      <MotionEffects />
      <a className="sp-skip" href="#main">
        Skip to content
      </a>
      <LandingHeader />
      <main id="main">
        <section className="sp-hero" aria-labelledby="hero-title">
          <div className="sp-hero-light" aria-hidden />
          <div className="sp-hero-lines" aria-hidden />
          <div className="sp-wrap sp-hero-grid">
            <div className="sp-hero-copy">
              <p className="sp-eyebrow">Oncology care + professional sport</p>
              <h1 id="hero-title">
                Fatigue deserves
                <br />
                <em>a fuller picture.</em>
              </h1>
              <p className="sp-hero-lead">
                <strong>
                  Wearable activity, overnight heart patterns and how you feel.
                </strong>{" "}
                SciencePeaks connects the picture across days, with AI
                explanations and a shared workspace for patients, athletes and
                their professionals.
              </p>
              <div className="sp-actions">
                <a className="sp-button" href="#contact">
                  Request a demo <ArrowUpRight size={19} aria-hidden />
                </a>
                <a className="sp-text-link" href="#platform">
                  Explore the platform <ArrowRight size={18} aria-hidden />
                </a>
              </div>
            </div>
            <figure
              className="sp-hero-art"
              aria-label="Real SciencePeaks activity, physiology and symptom views, arranged as a product collage."
            >
              <div className="sp-collage-depth">
                <div className="sp-collage-card sp-collage-activity">
                  <div className="sp-collage-chrome">
                    <Watch size={18} aria-hidden />
                    <span>Everyday movement</span>
                    <span className="sp-chrome-brand">SciencePeaks</span>
                  </div>
                  <img
                    src="/landing/product/movement-week.webp"
                    {...responsiveProductImage(
                      "/landing/product/movement-week.webp",
                      "(max-width: 650px) calc(91vw - 33px), (max-width: 900px) 560px, 42vw",
                    )}
                    width="1600"
                    height="751"
                    alt="SciencePeaks weekly activity and day-detail screen with estimated movement and acceleration."
                    fetchPriority="high"
                  />
                  <div className="sp-collage-footer">
                    <span>Intensity</span>
                    <span>Timing</span>
                    <span>Daily life</span>
                  </div>
                </div>
                <div className="sp-collage-card sp-collage-physiology">
                  <div className="sp-collage-chrome">
                    <Heartbeat size={18} aria-hidden />
                    <span>Overnight physiology</span>
                  </div>
                  <img
                    src="/landing/product/rmssd-night.webp"
                    {...responsiveProductImage(
                      "/landing/product/rmssd-night.webp",
                      "(max-width: 650px) calc(69vw - 25px), (max-width: 900px) 434px, 33vw",
                    )}
                    width="1206"
                    height="590"
                    alt="SciencePeaks overnight RMSSD profile, showing heart rate variability across the night in milliseconds."
                    fetchPriority="low"
                  />
                </div>
                <div className="sp-collage-card sp-collage-checkin">
                  <div className="sp-collage-chrome">
                    <ClipboardText size={17} aria-hidden />
                    <span>The person’s perspective</span>
                  </div>
                  <img
                    src="/landing/product/oncology-check-in.webp"
                    {...responsiveProductImage(
                      "/landing/product/oncology-check-in.webp",
                      "(max-width: 650px) calc(31vw - 11px), (max-width: 900px) 192px, 15vw",
                    )}
                    width="756"
                    height="680"
                    alt="SciencePeaks short fatigue check-in with selectable symptom responses."
                  />
                </div>
                <div className="sp-collage-connector" aria-hidden>
                  <UsersThree size={23} />
                  <span>Connected for follow-up</span>
                </div>
              </div>
              <figcaption className="sp-hero-caption">
                Real product views · wearable activity, overnight HRV and a
                sample symptom check-in.
              </figcaption>
            </figure>
          </div>
        </section>
        <LogoMarquee />

        <section
          className="sp-section sp-platform"
          id="platform"
          aria-labelledby="platform-title"
        >
          <div className="sp-wrap">
            <div className="sp-section-heading sp-reveal">
              <p className="sp-eyebrow">More than a daily number</p>
              <h2 id="platform-title">
                One person.
                <br />
                <span>A connected picture.</span>
              </h2>
              <p>
                Data becomes more useful when it reflects the week behind it.
                SciencePeaks connects{" "}
                <strong>
                  what the wearable observes, how you feel and what happened
                </strong>{" "}
                in a record your professional can review.
              </p>
            </div>
            <div className="sp-feature-grid">
              <article className="sp-feature sp-feature-movement sp-reveal">
                <div className="sp-feature-visual sp-activity-visual">
                  <ProductScreenshot
                    src="/landing/product/movement-week.webp"
                    previewSrc="/landing/product/movement-overview-full.webp"
                    width={1600}
                    height={751}
                    title="Your week, then your day"
                    alt="SciencePeaks weekly movement bars, with a full-size view of daily wrist movement."
                    caption="Each bar shows estimated moderate-or-higher activity minutes. Open the full view to see wrist movement through the selected day."
                    sizes="(max-width: 650px) calc(100vw - 90px), 50vw"
                    compact
                  />
                </div>
                <div className="sp-feature-copy">
                  <Watch size={27} aria-hidden />
                  <h3>Movement, in detail.</h3>
                  <p>
                    See{" "}
                    <strong>
                      how much, when and at what estimated intensity
                    </strong>{" "}
                    you move. A Garmin watch records wrist movement;
                    SciencePeaks turns it into an activity timeline you can
                    review together.
                  </p>
                  <a className="sp-text-link" href="#physical-activity">
                    Explore physical activity{" "}
                    <ArrowUpRight size={17} aria-hidden />
                  </a>
                </div>
              </article>
              <article className="sp-feature sp-feature-physiology sp-reveal">
                <div className="sp-feature-visual sp-night-visual">
                  <div className="sp-night-label">
                    <MoonStars size={24} aria-hidden />
                    <span>Your overnight record</span>
                  </div>
                  <ProductScreenshot
                    src="/landing/product/rmssd-night.webp"
                    width={1206}
                    height={590}
                    title="Heart variability across a night"
                    alt="An actual SciencePeaks RMSSD overnight profile with 199 two-minute windows, range bars and the nightly mean."
                    caption="RMSSD describes beat-to-beat variation in milliseconds. Here, bars summarize 12-minute ranges from two-minute windows; the dotted line is the nightly mean."
                    sizes="(max-width: 650px) calc(100vw - 90px), 40vw"
                    compact
                  />
                </div>
                <div className="sp-feature-copy">
                  <Heartbeat size={27} aria-hidden />
                  <h3>Recovery, in context.</h3>
                  <p>
                    <strong>Heart rate variability (HRV)</strong> describes
                    changes in the time between heartbeats. Explore nightly
                    summaries and overnight patterns alongside your own history,
                    symptoms, treatment or training.
                  </p>
                  <a className="sp-text-link" href="#follow-up">
                    See the connected workflow{" "}
                    <ArrowUpRight size={17} aria-hidden />
                  </a>
                </div>
              </article>
            </div>
            <div className="sp-connected-row sp-reveal">
              <div>
                <Watch size={24} aria-hidden />
                <strong>Wearable observations</strong>
              </div>
              <span aria-hidden className="sp-connection-line" />
              <div>
                <ClipboardText size={24} aria-hidden />
                <strong>Personal experience</strong>
              </div>
              <span aria-hidden className="sp-connection-line" />
              <div>
                <UsersThree size={24} aria-hidden />
                <strong>Professional follow-up</strong>
              </div>
            </div>
          </div>
        </section>

        <section
          className="sp-section sp-audiences"
          id="audiences"
          aria-labelledby="audiences-title"
        >
          <div className="sp-wrap">
            <div className="sp-section-heading sp-reveal">
              <h2 id="audiences-title">
                Different demands.
                <br />
                <span>The same need to understand.</span>
              </h2>
              <p>
                From life during treatment to a demanding training block,
                fatigue has a context. The platform brings it into focus for the
                person and the professional supporting them.
              </p>
            </div>
            <div className="sp-audience-grid">
              <article
                className="sp-audience sp-audience-care sp-reveal"
                id="oncology"
              >
                <div className="sp-audience-heading">
                  <Stethoscope size={32} aria-hidden />
                  <h3>Oncology care</h3>
                </div>
                <p>
                  A patient records{" "}
                  <strong>fatigue, pain, nausea and sleep quality</strong> in a
                  short check-in. Their professional reviews symptoms, activity
                  and overnight trends around treatment dates to discuss whether
                  the movement plan still fits how they feel.
                </p>
                <div className="sp-audience-art sp-care-art">
                  <div className="sp-care-screen">
                    <ProductScreenshot
                      src="/landing/product/oncology-check-in-native.webp"
                      width={756}
                      height={1560}
                      title="Daily check-in"
                      alt="Complete SciencePeaks mobile check-in with symptom responses, treatment context and a weekly history."
                      caption="A real mobile screen with sample data: a short symptom question, the next recorded treatment and the week's check-in history."
                      sizes="(max-width: 650px) 42vw, 200px"
                      compact
                    />
                  </div>
                  <div className="sp-care-context">
                    <div>
                      <ClipboardText size={20} aria-hidden />
                      <span>
                        <strong>Symptoms today</strong>A short check-in
                      </span>
                    </div>
                    <div>
                      <ChartLineUp size={20} aria-hidden />
                      <span>
                        <strong>Activity over time</strong>The recorded week
                      </span>
                    </div>
                    <div>
                      <Stethoscope size={20} aria-hidden />
                      <span>
                        <strong>Treatment dates</strong>Context for the trend
                      </span>
                    </div>
                  </div>
                </div>
                <ul>
                  <li>
                    <Check size={17} aria-hidden />
                    <span>
                      <strong>Less to recall.</strong> Review the activity
                      timeline alongside the patient’s account.
                    </span>
                  </li>
                  <li>
                    <Check size={17} aria-hidden />
                    <span>
                      <strong>A daily voice.</strong> A symptom check-in
                      designed to take around 30 seconds.
                    </span>
                  </li>
                  <li>
                    <Check size={17} aria-hidden />
                    <span>
                      <strong>A shared review.</strong> Discuss activity and
                      recovery within the care plan.
                    </span>
                  </li>
                </ul>
                <a className="sp-text-link" href="#contact">
                  Explore care programmes <ArrowUpRight size={18} aria-hidden />
                </a>
              </article>
              <article
                className="sp-audience sp-audience-sport sp-reveal"
                id="sport"
              >
                <div className="sp-audience-heading">
                  <PersonSimpleRun size={32} aria-hidden />
                  <h3>Professional sport</h3>
                </div>
                <p>
                  Review{" "}
                  <strong>
                    training load, nightly HRV and perceived fatigue
                  </strong>{" "}
                  against the athlete’s own history. Explore how alternative
                  training weeks relate to their modelled physiological
                  response.
                </p>
                <div className="sp-audience-art sp-sport-art">
                  <div className="sp-sport-profile">
                    <div>
                      <MoonStars size={19} aria-hidden />
                      <strong>Your trend, against your history</strong>
                    </div>
                    <ProductScreenshot
                      src="/landing/product/hrv-timeline.webp"
                      previewSrc="/landing/product/hrv-timeline-full.webp"
                      width={1600}
                      height={427}
                      title="Nightly HRV over time"
                      alt="SciencePeaks RMSSD history in milliseconds with a personal reference band and selected daily value."
                      caption="Each point is a nightly RMSSD summary. The shaded reference band helps compare the trend with this person's own history, alongside training and symptoms."
                      sizes="(max-width: 650px) calc(100vw - 90px), 40vw"
                      compact
                    />
                  </div>
                  <div className="sp-sport-equation">
                    <span>
                      Training load<strong>TSS</strong>
                    </span>
                    <div className="sp-sport-delay">
                      <ArrowRight size={23} aria-hidden />
                      <small>Following days</small>
                    </div>
                    <span>
                      Heart variability<strong>RMSSD</strong>
                    </span>
                  </div>
                </div>
                <ul>
                  <li>
                    <Check size={17} aria-hidden />
                    <span>
                      <strong>Depth beyond one summary.</strong> Explore
                      physiological profiles and personal trends.
                    </span>
                  </li>
                  <li>
                    <Check size={17} aria-hidden />
                    <span>
                      <strong>Load and response.</strong> Use statistical models
                      to explore their relationship over days.
                    </span>
                  </li>
                  <li>
                    <Check size={17} aria-hidden />
                    <span>
                      <strong>A team perspective.</strong> Follow athletes
                      together in professional projects.
                    </span>
                  </li>
                </ul>
                <a className="sp-text-link" href="#contact">
                  Explore team follow-up <ArrowUpRight size={18} aria-hidden />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section
          className="sp-section sp-followup"
          id="follow-up"
          aria-labelledby="followup-title"
        >
          <div className="sp-wrap">
            <div className="sp-section-heading sp-reveal">
              <p className="sp-eyebrow">The days between the conversations</p>
              <h2 id="followup-title">
                See the week.
                <br />
                <span>Understand the person.</span>
              </h2>
              <p>
                A clinician or coach organizes people in a{" "}
                <strong>shared project</strong>. Review each person’s week,
                connect changes with their context, and bring the record into
                the next conversation.
              </p>
            </div>
            <FollowupStory />
          </div>
        </section>

        <section
          className="sp-section sp-activity"
          id="physical-activity"
          aria-labelledby="activity-title"
        >
          <div className="sp-wrap">
            <div className="sp-section-heading sp-reveal">
              <h2 id="activity-title">
                “How active have you been?”
                <br />
                <span>Now there’s more to review.</span>
              </h2>
              <p>
                A compatible Garmin watch records wrist movement. SciencePeaks
                uses it to estimate{" "}
                <strong>activity intensity and duration</strong>, giving
                professionals a timeline to review alongside the person’s
                account of their week.
              </p>
            </div>
            <div className="sp-reveal">
              <ActivityExplorer />
            </div>
            <div className="sp-activity-summary">
              <div>
                <Watch size={25} aria-hidden />
                <h3>Everyday movement</h3>
                <p>
                  Wrist movement is recorded; activity intensity is estimated.
                </p>
              </div>
              <div>
                <ChartLineUp size={25} aria-hidden />
                <h3>Intensity and timing</h3>
                <p>
                  Compare daily totals, then explore the hours when movement
                  happened.
                </p>
              </div>
              <div>
                <UsersThree size={25} aria-hidden />
                <h3>A useful conversation</h3>
                <p>
                  Review progress against a movement plan with the patient or
                  athlete.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="sp-section sp-volume-section"
          aria-labelledby="volume-title"
        >
          <div className="sp-wrap">
            <div className="sp-section-heading sp-reveal">
              <h2 id="volume-title">
                Minutes tell you how long.
                <br />
                <span>Intensity adds another dimension.</span>
              </h2>
              <p>
                METs (metabolic equivalents) express estimated intensity
                relative to a resting reference of 1 MET. Multiply intensity by
                time:
                <strong>
                  {" "}
                  30 minutes at 4 METs equals 2 MET·h of gross volume.
                </strong>{" "}
                Move the sliders to see why duration and intensity both matter.
              </p>
            </div>
            <ActivityVolume />
            <div className="sp-volume-foot">
              <p>
                Illustrative arithmetic, not an exercise prescription. Current
                SciencePeaks plans use minutes.
              </p>
              <a className="sp-text-link" href="#faq">
                What is available today? <ArrowRight size={17} aria-hidden />
              </a>
            </div>
            <WearableScene />
          </div>
        </section>

        <section
          className="sp-section sp-intelligence"
          aria-labelledby="intelligence-title"
        >
          <div className="sp-wrap">
            <div className="sp-section-heading sp-reveal">
              <h2 id="intelligence-title">
                Ask about the trend.
                <br />
                <span>Explore the response.</span>
              </h2>
              <p>
                AI explanations and statistical models support different
                questions. One makes the record easier to understand; the other
                helps explore how training load relates to later physiology.
              </p>
            </div>
            <div className="sp-intelligence-grid">
              <article className="sp-assistant sp-reveal">
                <div className="sp-intelligence-copy">
                  <ChatCircleText size={29} aria-hidden />
                  <h3>Data, in natural language.</h3>
                  <p>
                    Ask, <strong>“What changed in my recovery data?”</strong>{" "}
                    The assistant explains trends in plain language and shows
                    the values and dates behind its answer.
                  </p>
                </div>
                <ProductScreenshot
                  src="/landing/product/assistant-answer-evidence.webp"
                  width={1487}
                  height={850}
                  title="An answer with its evidence"
                  alt="SciencePeaks assistant showing a complete question and answer, changes in metrics and supporting calculations and dates."
                  caption="A product demonstration: the answer sits beside metric changes, the date window and supporting calculations. Explore available assistant tools during a walkthrough."
                  sizes="(max-width: 650px) calc(100vw - 90px), 45vw"
                />
              </article>
              <article className="sp-model sp-reveal">
                <Flask size={29} aria-hidden />
                <h3>
                  Training scenarios,
                  <br />
                  with assumptions visible.
                </h3>
                <p>
                  <strong>Training Stress Score (TSS)</strong> summarizes
                  training load;
                  <strong> RMSSD</strong> summarizes beat-to-beat variability.
                  Distributed lag non-linear models (DLNM) explore their
                  relationship across load levels and the following days.
                </p>
                <div className="sp-model-diagram">
                  <span>
                    Training load<strong>TSS</strong>
                  </span>
                  <div>
                    <ArrowRight size={24} aria-hidden />
                    <small>Across days</small>
                  </div>
                  <span>
                    HRV response<strong>RMSSD</strong>
                  </span>
                </div>
                <p className="sp-model-use">
                  Compare modelled RMSSD patterns for alternative weekly
                  training plans, using the athlete’s recorded history.
                </p>
                <p className="sp-small">
                  Scenarios are conditional on data and model assumptions. The
                  relationship is not a causal conclusion or a stand-alone
                  fatigue diagnosis.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="sp-section sp-science"
          id="science"
          aria-labelledby="science-title"
        >
          <div className="sp-wrap">
            <div className="sp-section-heading sp-reveal">
              <p className="sp-eyebrow">
                Scientific roots. A practical purpose.
              </p>
              <h2 id="science-title">
                Evidence shapes the questions.
                <br />
                <span>People build the answers.</span>
              </h2>
            </div>
            <div className="sp-science-grid">
              <div className="sp-science-people sp-reveal">
                <p>
                  SciencePeaks originated within <strong>ISGlobal</strong>,
                  bringing scientific methods and software development into a
                  shared platform for health and sport.
                </p>
                <div className="sp-founders">
                  <div>
                    <img
                      src="/landing/juan-ramon.jpg"
                      width="64"
                      height="76"
                      loading="lazy"
                      alt="Juan Ramón González"
                    />
                    <span>
                      <strong>Juan Ramón González</strong>Scientific direction
                    </span>
                  </div>
                  <div>
                    <img
                      src="/landing/didac.jpg"
                      width="64"
                      height="76"
                      loading="lazy"
                      alt="Dídac Cayuela"
                    />
                    <span>
                      <strong>Dídac Cayuela</strong>Technology &amp; product
                    </span>
                  </div>
                </div>
                <div className="sp-scientific-context">
                  <h3>A wider research ecosystem</h3>
                  <p>
                    The institution strip reflects ISGlobal’s ecosystem:
                    Hospital Clínic, la Caixa Foundation and Barcelona City
                    Council are part of its institutional network; CERCA
                    identifies its research-centre membership, and Severo Ochoa
                    its institute recognition. These affiliations describe
                    ISGlobal’s scientific context.
                  </p>
                  <a
                    href="https://www.isglobal.org/en/governance"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore ISGlobal’s institutions{" "}
                    <ArrowUpRight size={15} aria-hidden />
                  </a>
                </div>
              </div>
              <div className="sp-studies sp-reveal">
                <article>
                  <span>Nature Communications · 2026</span>
                  <h3>Activity patterns matter alongside volume.</h3>
                  <p>
                    Long-term observational research relates sustained activity
                    patterns to chronic disease risk.
                  </p>
                  <a
                    className="sp-text-link"
                    href="https://www.nature.com/articles/s41467-026-69552-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the independent study{" "}
                    <ArrowUpRight size={16} aria-hidden />
                  </a>
                </article>
                <article>
                  <span>Nature Communications · 2025</span>
                  <h3>Intensity belongs in the picture.</h3>
                  <p>
                    Wearable-based observational research examines
                    intensity-specific associations with health outcomes.
                  </p>
                  <a
                    className="sp-text-link"
                    href="https://www.nature.com/articles/s41467-025-63475-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the independent study{" "}
                    <ArrowUpRight size={16} aria-hidden />
                  </a>
                  <a
                    className="sp-study-correction"
                    href="https://www.nature.com/articles/s41467-025-65754-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Publisher correction
                  </a>
                </article>
                <p className="sp-small">
                  Independent research supports the rationale for following
                  activity. These studies did not evaluate SciencePeaks.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="sp-section sp-faq"
          id="faq"
          aria-labelledby="faq-title"
        >
          <div className="sp-wrap sp-faq-layout">
            <div className="sp-faq-heading">
              <h2 id="faq-title">
                A few
                <br />
                <span>clear answers.</span>
              </h2>
              <p>
                The wearable, the methods and the practical details of getting
                started.
              </p>
            </div>
            <div className="sp-faq-list">
              {questions.map(([question, answer], i) => (
                <details key={question} open={i === 0}>
                  <summary>
                    {question}
                    <Plus size={18} aria-hidden />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className="sp-section sp-contact"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="sp-contact-light" aria-hidden />
          <div className="sp-wrap sp-contact-layout">
            <div className="sp-contact-copy sp-reveal">
              <h2 id="contact-title">
                Bring the week
                <br />
                <span>into the conversation.</span>
              </h2>
              <p>
                See SciencePeaks in the context of your care programme,
                professional team or research. Start with a focused walkthrough
                of the product and your follow-up needs.
              </p>
              <div className="sp-contact-audiences">
                <span>
                  <Stethoscope size={20} aria-hidden />
                  Care programmes
                </span>
                <span>
                  <PersonSimpleRun size={20} aria-hidden />
                  Professional teams
                </span>
              </div>
            </div>
            <ContactRequest />
          </div>
        </section>
      </main>
      <footer className="sp-footer">
        <div className="sp-wrap">
          <div className="sp-footer-top">
            <Link className="sp-brand" href="/">
              <img src="/logo.svg" width="36" height="34" alt="" />
              SciencePeaks
            </Link>
            <p>A fuller picture of activity, fatigue and recovery.</p>
            <a href="#contact" className="sp-text-link">
              Let’s talk <ArrowUpRight size={18} aria-hidden />
            </a>
          </div>
          <div className="sp-footer-bottom">
            <p>© {new Date().getFullYear()} SciencePeaks</p>
            <nav aria-label="Legal information">
              <a href="/legal-notice">Legal notice</a>
              <a href="/privacy-policy">Privacy</a>
              <a href="/cookies-policy">Cookies</a>
              <a href="/account-deletion">Account deletion</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
