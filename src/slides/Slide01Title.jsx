import SlideShell from "../components/SlideShell.jsx";
import "./slides.css";

export default function Slide01Title({ index, total }) {
  return (
    <>
      <div className="bg-desert" />
      <div className="bg-grain" />

      <SlideShell index={index} total={total}>
        <div className="title-slide title-slide--text">
          <p className="eyebrow title-eyebrow">Iconic products. Endless possibilities.</p>

          <div className="title-block">
            <h1 className="title-wordmark">
              Cactus <span className="accent">X</span>{" "}
              <span className="title-sub">Connected Retail</span>
            </h1>
            <div className="title-rule" />
          </div>
        </div>
      </SlideShell>
    </>
  );
}
