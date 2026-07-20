import SlideShell from "../components/SlideShell.jsx";
import "./slides.css";

const WORK = ["/3.jpg", "/6.jpg", "/4.jpg", "/10.jpg"];

export default function Slide06OurWork({ index, total, active }) {
  return (
    <>
      <div className="bg-desert" />
      <div className="bg-grain" />

      <SlideShell index={index} total={total}>
        <div className={`work-slide ${active ? "is-active" : ""}`}>
          <header className="work-head">
            <h2 className="work-title">Our Work</h2>
          </header>

          <div className="work-grid">
            {WORK.map((src, i) => (
              <figure className="work-tile" key={src} style={{ "--i": i }}>
                <img src={src} alt="Connected retail installation" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </SlideShell>
    </>
  );
}
