import type { Metadata } from "next";
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
  Check,
  Plus,
  MoonStars,
  ChartLineUp,
} from "@phosphor-icons/react/ssr";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { MotionEffects } from "@/components/landing/MotionEffects";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
import { GarminIntegration } from "@/components/landing/GarminIntegration";
import { TrendsShowcase } from "@/components/landing/TrendsShowcase";
import { ProjectsShowcase } from "@/components/landing/ProjectsShowcase";
import { ScienceEngine } from "@/components/landing/ScienceEngine";
import { MobileShowcase } from "@/components/landing/MobileShowcase";
import { ActivityExplorer } from "@/components/landing/ActivityExplorer";
import { ActivityVolume } from "@/components/landing/ActivityVolume";
import { DLNMShowcase } from "@/components/landing/DLNMShowcase";
import { OurTeam } from "@/components/landing/OurTeam";
import { ContactRequest } from "@/components/landing/ContactRequest";
import { ProductScreenshot } from "@/components/landing/ProductScreenshot";
import { Footer } from "@/components/footer";

const description =
  "SciencePeaks uses data science, machine learning and AI to connect wearable activity, overnight HRV and symptoms for oncology care and professional sport. Web, iOS and Android.";
export const metadata: Metadata = {
  title: "SciencePeaks | A fuller picture of activity, fatigue and recovery",
  description,
  alternates: { canonical: "https://www.sciencepeaks.ai/" },
  openGraph: {
    type: "website",
    siteName: "SciencePeaks",
    locale: "en_GB",
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
    "SciencePeaks uses data science, machine learning and AI to connect wearable activity estimates, overnight physiological trends, symptoms and personal context. Patients and athletes use the app; clinicians and coaches follow individuals or groups in shared projects. Web, iOS and Android clients support this workflow.",
  ],
  [
    "What makes the platform different?",
    "The connection across days and across perspectives: wearable activity, available overnight profiles, how the person feels, and treatment or training context. Professionals can follow a group in projects, review individual histories and explore analytical tools.",
  ],
  [
    "Which wearables does it use?",
    "SciencePeaks has Garmin-approved access to the Garmin Health SDK following review of its iOS and Android apps. The current recording workflow uses compatible Garmin devices. Movement data inform estimated physical activity; available overnight heartbeat intervals inform HRV analysis. We can confirm the right device and recording setup in your product walkthrough.",
  ],
  [
    "How are activity and fatigue measured?",
    "The wearable observes movement and available heartbeat intervals. SciencePeaks derives physiological metrics and estimates activity intensity and volume. Symptoms add the person’s experience. Recording hours indicate what was observed; missing time is not treated as inactivity. These signals support interpretation rather than a stand-alone fatigue diagnosis.",
  ],
  [
    "Can a clinician or coach follow a group?",
    "Yes. A project is a shared workspace where a clinician or coach follows patients in a care programme or athletes in a team. Supervisors can review cohort progress, individual Trends, reported fatigue and health context, compare participants, manage activity plans and run available models on eligible histories.",
  ],
  [
    "How do data science, machine learning and AI work together?",
    "Data science organizes wearable records and compares them with personal history. An experimental machine-learning model estimates whether the next usable HRV reading may fall in the person’s own lower range. Separately, distributed lag non-linear models (DLNM) explore Training Stress Score (TSS) and later RMSSD, an HRV measure of beat-to-beat variation. The AI assistant explains available records in natural language with supporting evidence. Symptoms and treatment dates provide professional context; they are not inputs to the current HRV classifier.",
  ],
  [
    "Can I use SciencePeaks on my phone and computer?",
    "Yes. SciencePeaks has Web, iOS and Android clients. The mobile app brings daily metrics, trends, symptom check-ins and treatment context into your day; the web workspace gives professionals room to review participants and their histories. Contact us to discuss access for your programme or team.",
  ],
  [
    "Can I prescribe activity in MET·h?",
    "Current professional activity plans use minutes. MET·h describes intensity multiplied by time and is useful for explaining volume. Prescribing in MET·h and integration with electronic health records are future directions.",
  ],
];

const mobileScreens = [
  {
    id: "home",
    title: "Your daily picture",
    caption:
      "Open your day with overnight HRV, related metrics and a trend compared with your personal history. This is the actual iOS home screen.",
    src: "/landing/product/mobile-home.webp",
    width: 402,
    height: 874,
    alt: "SciencePeaks iOS home screen with date navigation, a Garmin connection card, overnight RMSSD, a personal comparison and related metrics.",
  },
  {
    id: "trends",
    title: "Trends over time",
    caption:
      "Explore RMSSD and DFA alpha 1 across a selected date range, with both trends aligned in one view.",
    src: "/landing/product/mobile-trends.webp",
    width: 1320,
    height: 2868,
    alt: "SciencePeaks iOS trends screen showing RMSSD in milliseconds and DFA alpha 1 across 12 September to 9 October, with date-range and comparison controls.",
  },
  {
    id: "check-in",
    title: "A quick daily check-in",
    caption:
      "Give the data your perspective with a check-in designed to take around 30 seconds. Answer a symptom question, confirm treatment context and review your week.",
    src: "/landing/product/mobile-check-in.webp",
    width: 804,
    height: 1560,
    alt: "SciencePeaks iOS oncology view with a short fatigue question, selectable answers, the next treatment and a week of check-ins.",
  },
  {
    id: "plan",
    title: "Treatment context",
    caption:
      "Keep treatment dates in one place and inspect the planned schedule. That context sits alongside activity, symptoms and physiology in professional review.",
    src: "/landing/product/mobile-plan.webp",
    width: 804,
    height: 1560,
    alt: "SciencePeaks iOS treatment-plan view with a monthly calendar, dated treatment markers and a control to add a plan.",
  },
] as const;

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
        operatingSystem: "Web, iOS, Android",
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
                <strong>Data science. Machine learning. AI.</strong>{" "}
                SciencePeaks turns wearable activity, overnight heart patterns
                and symptoms into a connected view of fatigue and recovery.
                Built for patients, athletes and the professionals who follow
                them.
              </p>
              <p className="sp-hero-platforms">
                Web <span aria-hidden>·</span> iOS <span aria-hidden>·</span>{" "}
                Android
              </p>
              <div className="sp-actions">
                <a className="sp-button" href="#contact">
                  Request a demo <ArrowUpRight size={19} aria-hidden />
                </a>
                <a className="sp-text-link" href="#platform">
                  Explore the platform <ArrowRight size={18} aria-hidden />
                </a>
              </div>
              <a className="sp-garmin-proof" href="#garmin-integration">
                <img
                  src="/landing/garmin/garmin-logo.webp"
                  width="240"
                  height="65"
                  alt="Garmin"
                  decoding="async"
                />
                <span>
                  Garmin Health SDK
                  <strong>Approved access</strong>
                </span>
              </a>
            </div>
            <div className="sp-hero-art">
              <ProductScreenshot
                className="sp-hero-dashboard"
                src="/landing/product/home-dashboard.webp"
                previewSrc="/landing/product/home-dashboard-full.webp"
                width={1600}
                height={911}
                title="Your daily overview"
                alt="SciencePeaks home dashboard with a September calendar, an overnight DFA alpha 1 profile, nightly HRV metrics and daily oncology and recovery summaries."
                caption="Founder-supplied home dashboard: a dated calendar, an overnight DFA alpha 1 profile and daily HRV, oncology and recovery summaries."
                sizes="(max-width: 650px) calc(100vw - 56px), (max-width: 900px) 600px, 46vw"
                priority
                compact
              />
              <div className="sp-hero-caption">
                <a className="sp-hero-followup" href="#follow-up">
                  <UsersThree size={20} aria-hidden />
                  <span>See professional follow-up</span>
                  <ArrowRight size={17} aria-hidden />
                </a>
                <p>
                  Real home dashboard · calendar, overnight physiology and daily
                  summaries.
                </p>
              </div>
            </div>
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
                    src="/landing/product/weekly-activity-complete.webp"
                    previewSrc="/landing/product/weekly-activity-complete-full.webp"
                    width={1600}
                    height={442}
                    title="A week of everyday movement"
                    alt="SciencePeaks activity dashboard showing 251 estimated moderate-or-higher minutes and daily movement totals through a recorded week."
                    caption="Estimated moderate-or-higher activity, day by day. This recorded week shows 251 minutes spread across different days, rather than a daily quota."
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
                    src="/landing/product/night-rmssd-current.webp"
                    width={1180}
                    height={553}
                    title="Heart variability across a night"
                    alt="An actual SciencePeaks RMSSD overnight profile with 168 two-minute windows, range bars and the nightly mean."
                    caption="RMSSD describes beat-to-beat variation in milliseconds. Here, bars summarize 12-minute ranges from two-minute windows; the dotted line is the nightly mean."
                    sizes="(max-width: 650px) calc(100vw - 90px), 40vw"
                    compact
                  />
                </div>
                <div className="sp-feature-copy">
                  <Heartbeat size={27} aria-hidden />
                  <h3>Behind the nightly average.</h3>
                  <p>
                    <strong>
                      Explore how heart rate variability (HRV) changes through
                      the night.
                    </strong>{" "}
                    See the pattern behind the summary, compare it with your own
                    history, and review it alongside symptoms, treatment or
                    training.
                  </p>
                  <a className="sp-text-link" href="#follow-up">
                    See the connected workflow{" "}
                    <ArrowUpRight size={17} aria-hidden />
                  </a>
                </div>
              </article>
            </div>
            <GarminIntegration />
          </div>
        </section>

        <ScienceEngine />

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
                      src="/landing/product/hrv-period-comparison.webp"
                      previewSrc="/landing/product/hrv-period-comparison-full.webp"
                      width={1600}
                      height={614}
                      title="Compare your HRV across periods"
                      alt="SciencePeaks compares two periods of RMSSD: their medians, individual daily readings and the distribution of values in milliseconds."
                      caption="Compare periods without reducing them to one number: medians show the central value; each dot shows an individual day. Here the second period’s median is 2.3 ms lower."
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
          className="sp-section sp-mobile-app"
          id="mobile-app"
          aria-labelledby="mobile-title"
        >
          <div className="sp-wrap">
            <div className="sp-section-heading sp-mobile-heading sp-reveal">
              <p className="sp-eyebrow">One platform. Every screen.</p>
              <h2 id="mobile-title">
                Your day, in your pocket.
                <br />
                <span>Your whole picture, connected.</span>
              </h2>
              <p>
                <strong>
                  Check your metrics. Say how you feel. See what changed.
                </strong>{" "}
                The mobile app keeps daily participation simple; the web
                workspace connects that record to professional follow-up.
              </p>
            </div>
            <div className="sp-reveal">
              <MobileShowcase screens={mobileScreens} />
            </div>
            <div className="sp-mobile-foot">
              <p>
                Actual mobile app screens. Home and oncology views use
                demonstration data.
              </p>
              <a className="sp-text-link" href="#contact">
                Explore access for your programme{" "}
                <ArrowUpRight size={17} aria-hidden />
              </a>
            </div>
          </div>
        </section>

        <TrendsShowcase />

        <section
          className="sp-section sp-followup"
          id="follow-up"
          aria-labelledby="followup-title"
        >
          <div className="sp-wrap">
            <div className="sp-section-heading sp-reveal">
              <h2 id="followup-title">
                One project.
                <br />
                <span>Every person in view.</span>
              </h2>
              <p>
                A project is a <strong>shared workspace for a clinician or coach
                to follow a group of patients or athletes</strong>. Review the
                cohort, open individual histories, compare participants and
                explore models, with fatigue and health context in view.
              </p>
            </div>
            <ProjectsShowcase />
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
          </div>
        </section>

        <section
          className="sp-section sp-intelligence"
          aria-labelledby="intelligence-title"
        >
          <div className="sp-wrap">
            <div className="sp-section-heading sp-reveal">
              <h2 id="intelligence-title">
                An AI answer you can inspect.
                <br />
                <span>With evidence behind it.</span>
              </h2>
              <p>
                Ask about your records in plain language and follow the values,
                dates and calculations that support the answer.
              </p>
            </div>
            <div className="sp-intelligence-grid sp-intelligence-single">
              <article className="sp-assistant sp-reveal">
                <div className="sp-intelligence-copy">
                  <ChatCircleText size={29} aria-hidden />
                  <h3>Your records. A clear explanation.</h3>
                  <p>
                    Ask, <strong>“What changed in my recovery data?”</strong>{" "}
                    The AI assistant turns metrics and changes into plain
                    language, with the values, dates and supporting evidence
                    behind its answer.
                  </p>
                </div>
                <ProductScreenshot
                  src="/landing/product/assistant-answer-evidence.webp"
                  width={1487}
                  height={850}
                  title="An answer with its evidence"
                  alt="SciencePeaks assistant showing a complete question and answer, changes in metrics and supporting calculations and dates."
                  caption="A product demonstration: the answer sits beside metric changes, the date window and supporting calculations. Explore available assistant tools during a walkthrough."
                  sizes="(max-width: 650px) calc(100vw - 90px), (max-width: 1000px) calc(100vw - 150px), 55vw"
                />
              </article>
            </div>
          </div>
        </section>

        <DLNMShowcase />

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

        <OurTeam />

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
                Explore the product, the science and the opportunity to bring
                better follow-up to care programmes and professional teams. Talk
                to us about a demo, a research collaboration or investment.
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
      <Footer />
    </div>
  );
}
