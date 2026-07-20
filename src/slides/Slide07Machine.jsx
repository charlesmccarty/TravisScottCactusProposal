import CactusXMachine from "../components/CactusXMachine.jsx";
import SlideShell from "../components/SlideShell.jsx";
import "./slides.css";

export default function Slide07Machine({ index, total }) {
  return (
    <>
      <div className="bg-desert" />
      <div className="bg-grain" />

      <SlideShell index={index} total={total}>
        <div className="machine-slide">
          <div className="machine-stage machine-stage--solo">
            <CactusXMachine embedded height="100%" />
          </div>
        </div>
      </SlideShell>
    </>
  );
}
