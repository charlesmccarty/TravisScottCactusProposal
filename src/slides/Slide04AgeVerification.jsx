import SlideShell from "../components/SlideShell.jsx";
import "./slides.css";

const FLOW = [
  {
    src: "/age-step-1.png",
    step: "01",
    title: "Quick Age Check",
    body: "The shopper taps start — the machine's own camera runs the check. No app, no ID out of the wallet.",
  },
  {
    src: "/age-step-2.png",
    step: "02",
    title: "Look here",
    body: "Simple on-screen guidance — remove headwear, one person only — for a clean, accurate capture.",
  },
  {
    src: "/age-step-3.png",
    step: "03",
    title: "Age estimation successful",
    body: "AI confirms the shopper clears the threshold in seconds, and checkout unlocks instantly.",
  },
];

const POINTS = [
  {
    title: "Frictionless by default",
    body: "Most customers pass on camera alone — a Yoti-powered ID scan is the fallback only when needed.",
    icon: (
      <>
        <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />
      </>
    ),
  },
  {
    title: "Privacy by design",
    body: "Images are processed for the check and not retained — what's logged is a compliant pass, not a face.",
    icon: (
      <>
        <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3Z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
];

export default function Slide04AgeVerification({ index, total }) {
  return (
    <>
      <div className="bg-desert" />
      <div className="bg-grain" />

      <SlideShell index={index} total={total}>
        <div className="age-slide">
          <header className="age-head">
            <p className="eyebrow">Compliance, Built In</p>
            <h2 className="age-title">
              Sell age-restricted products with{" "}
              <span className="accent">AI-powered age biometrics</span>.
            </h2>
            <p className="age-lead">
              Age is verified right on the machine — turning a regulatory hurdle
              into a frictionless, fully compliant checkout.
            </p>
          </header>

          <div className="age-flow">
            {FLOW.map((f, i) => (
              <figure className="age-shot" key={f.step} style={{ "--i": i }}>
                <div className="age-shot-frame">
                  <img src={f.src} alt={f.title} loading="lazy" />
                  <span className="age-shot-num">{f.step}</span>
                </div>
                <figcaption>
                  <h3 className="age-shot-title">{f.title}</h3>
                  <p className="age-shot-body">{f.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="age-points">
            {POINTS.map((p, i) => (
              <article className="age-point" key={p.title} style={{ "--i": i }}>
                <span className="age-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    {p.icon}
                  </svg>
                </span>
                <div>
                  <h4 className="age-point-title">{p.title}</h4>
                  <p className="age-point-body">{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SlideShell>
    </>
  );
}
