import {
  ArrowUpRight,
  CalendarBlank,
  ChartLine,
  MagnifyingGlass,
  UserCircle,
} from "@phosphor-icons/react/ssr";
import { ProductScreenshot } from "./ProductScreenshot";
import "./trends-projects.css";

export function TrendsShowcase() {
  return (
    <section
      className="sp-section sp-trends"
      id="trends"
      aria-labelledby="trends-title"
    >
      <div className="sp-wrap">
        <div className="sp-section-heading sp-reveal">
          <h2 id="trends-title">
            Follow the trend.
            <br />
            <span>Understand the change.</span>
          </h2>
          <p>
            Trends brings physiology, personal references and daily context into
            one timeline. Follow changes over weeks and months, then open the
            day behind the pattern.
          </p>
        </div>
        <div className="sp-trends-layout sp-reveal">
          <div className="sp-trends-product">
            <div className="sp-trends-product-label">
              <ChartLine size={20} aria-hidden />
              <strong>Trends in SciencePeaks</strong>
              <span>Actual product view</span>
            </div>
            <ProductScreenshot
              src="/landing/product/trends-followup.webp"
              previewSrc="/landing/product/trends-followup-full.webp"
              width={1600}
              height={957}
              title="Physiology over time, with personal context"
              alt="SciencePeaks Trends: a 28-day RMSSD and DFA Alpha1 history, a personal reference, 24 observed days, a selected day's measurements and an immunotherapy annotation."
              caption="Founder-supplied Trends view. The period median is 56.5 ms against a 59 ms personal reference, with observations on 24 of 28 days. Selecting a day reveals its measurements and recorded context. Treatment dates provide context rather than a causal explanation."
              sizes="(max-width: 650px) calc(100vw - 60px), (max-width: 1000px) 85vw, 62vw"
              compact
            />
          </div>
          <div className="sp-trends-reading">
            <h3>Read the pattern in context.</h3>
            <div className="sp-trends-insight">
              <CalendarBlank size={23} aria-hidden />
              <div>
                <h4>Choose your time window</h4>
                <p>
                  Explore 14, 28 or 90 days. See how RMSSD and other available
                  metrics evolve, with observed days and gaps visible.
                </p>
              </div>
            </div>
            <div className="sp-trends-insight">
              <UserCircle size={23} aria-hidden />
              <div>
                <h4>Compare with your own history</h4>
                <p>
                  A personal reference puts the selected period in perspective.
                  Review a change against that person’s usual pattern.
                </p>
              </div>
            </div>
            <div className="sp-trends-insight">
              <MagnifyingGlass size={23} aria-hidden />
              <div>
                <h4>Open the day behind the curve</h4>
                <p>
                  Inspect daily measurements and recorded treatment context.
                  Bring symptoms and activity into the professional review.
                </p>
              </div>
            </div>
          </div>
        </div>
        <figure
          className="sp-trends-flow sp-reveal"
          aria-label="A follow-up starts with the observed history, compares it with a personal reference and brings daily context into professional review."
        >
          <div>
            <span className="sp-trends-flow-icon">
              <ChartLine size={22} aria-hidden />
            </span>
            <strong>Observed history</strong>
            <span>Readings + recording coverage</span>
          </div>
          <span className="sp-flow-line" aria-hidden />
          <div>
            <span className="sp-trends-flow-icon">
              <UserCircle size={22} aria-hidden />
            </span>
            <strong>Personal reference</strong>
            <span>The person’s own baseline</span>
          </div>
          <span className="sp-flow-line" aria-hidden />
          <div>
            <span className="sp-trends-flow-icon">
              <CalendarBlank size={22} aria-hidden />
            </span>
            <strong>Daily context</strong>
            <span>Symptoms, treatment or training</span>
          </div>
        </figure>
        <div className="sp-trends-foot">
          <p>
            RMSSD describes heart rate variability in milliseconds. Symptoms
            describe how the person feels; missing observations remain gaps.
          </p>
          <a className="sp-text-link" href="#follow-up">
            Bring Trends into a project <ArrowUpRight size={18} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
