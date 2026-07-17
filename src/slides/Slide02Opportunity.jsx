import SlideShell from "../components/SlideShell.jsx";
import "./slides.css";

const PILLARS = [
  {
    title: "Physical Product Sales",
    body: "Turn attention into transactions. Every machine is a fully-stocked storefront selling real product, on the spot.",
    icon: (
      <>
        <path d="M4 7h16l-1.5 10.5a2 2 0 0 1-2 1.5H7.5a2 2 0 0 1-2-1.5L4 7Z" />
        <path d="M8.5 7a3.5 3.5 0 0 1 7 0" />
      </>
    ),
  },
  {
    title: "Brand Awareness",
    body: "An always-on, fully branded billboard that markets the culture while it sells — putting Cactus X directly in front of the consumer.",
    icon: (
      <>
        <path d="M4 10v4a1 1 0 0 0 1 1h2l6 4V5L7 9H5a1 1 0 0 0-1 1Z" />
        <path d="M17 8.5a4 4 0 0 1 0 7" />
      </>
    ),
  },
  {
    title: "E-commerce & Subscriptions",
    body: "Sell online products and recurring subscriptions straight from the machine — extending each sale far beyond the point of contact.",
    icon: (
      <>
        <path d="M20 12a8 8 0 1 1-2.3-5.6" />
        <path d="M20 4v4h-4" />
      </>
    ),
  },
  {
    title: "Real-Time Intelligence",
    body: "See what's moving as it happens and learn — location by location — exactly what's working, then act on it instantly.",
    icon: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 15l3-4 3 2 4-6" />
      </>
    ),
  },
];

export default function Slide02Opportunity({ index, total, active }) {
  return (
    <>
      <div className="bg-desert" />
      <div className="bg-grain" />

      <SlideShell index={index} total={total}>
        <div className={`opp-slide ${active ? "is-active" : ""}`}>
          <header className="opp-head">
            <p className="eyebrow">The Opportunity</p>
            <h2 className="opp-title">
              Put the brand directly in front of the <span className="accent">consumer</span>.
            </h2>
            <p className="opp-lead">
              Place machines in high-footfall locations — where the culture already gathers.
            </p>
          </header>

          <div className="opp-grid">
            {PILLARS.map((p, i) => (
              <article className="opp-card" key={p.title} style={{ "--i": i }}>
                <span className="opp-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    {p.icon}
                  </svg>
                </span>
                <h3 className="opp-card-title">{p.title}</h3>
                <p className="opp-card-body">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </SlideShell>
    </>
  );
}
