import SlideShell from "../components/SlideShell.jsx";
import "./slides.css";

export default function Slide05Closing({ index, total, active }) {
  return (
    <>
      <div className="bg-desert" />
      <div className="bg-grain" />

      <SlideShell index={index} total={total}>
        <div className={`close-slide ${active ? "is-active" : ""}`}>
          <p className="eyebrow close-eyebrow">Thank you</p>

          <h2 className="close-title">
            Thank you, team <span className="accent">Cactus X</span>.
          </h2>

          <p className="close-lead">
            We're excited about what Connected Retail can do for the brand —
            from frictionless, compliant sales to always-on brand presence and
            real-time intelligence. Let's build it together.
          </p>

          <div className="close-cta">
            <p className="close-cta-label">Reach out to learn more</p>
            <p className="close-name">Charles</p>
            <p className="close-role">
              <span className="brand-bb">Bright.Blue</span> · Connected Retail
            </p>
            <a className="close-email" href="mailto:charles@bright.blue">
              charles@bright.blue
            </a>
          </div>

          <div className="close-rule" />
          <p className="close-foot">
            <span className="brand-cactus">Cactus X</span> ×{" "}
            <span className="brand-bb">Bright.Blue</span> — let's put the brand
            in front of the consumer.
          </p>
        </div>
      </SlideShell>
    </>
  );
}
