import { useCallback, useEffect, useRef, useState } from "react";
import "./Deck.css";

export default function Deck({ slides }) {
  const containerRef = useRef(null);
  const slideRefs = useRef([]);
  const [active, setActive] = useState(0);

  const goTo = useCallback((index) => {
    const clamped = Math.max(0, Math.min(slides.length - 1, index));
    const el = slideRefs.current[clamped];
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [slides.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (["ArrowDown", "ArrowRight", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        goTo(active + 1);
      } else if (["ArrowUp", "ArrowLeft", "PageUp"].includes(e.key)) {
        e.preventDefault();
        goTo(active - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(slides.length - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, goTo, slides.length]);

  useEffect(() => {
    const deck = containerRef.current;
    if (!deck) return;
    let locked = false;
    const onWheel = (e) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 12) return;
      e.preventDefault();
      if (locked) return;
      locked = true;
      goTo(active + (delta > 0 ? 1 : -1));
      setTimeout(() => {
        locked = false;
      }, 750);
    };
    deck.addEventListener("wheel", onWheel, { passive: false });
    return () => deck.removeEventListener("wheel", onWheel);
  }, [active, goTo]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setActive(idx);
          }
        });
      },
      { threshold: 0.6 }
    );
    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [slides.length]);

  return (
    <>
      <div className="deck-confidential" role="note">
        <span className="deck-confidential-dot" />
        Confidential — exploratory purposes only · Not for distribution to external partners
      </div>

      <div className="deck" ref={containerRef}>
        {slides.map((slide, i) => (
          <section
            key={slide.id}
            data-index={i}
            ref={(el) => (slideRefs.current[i] = el)}
            className="slide"
          >
            <slide.Component active={active === i} index={i} total={slides.length} />
          </section>
        ))}
      </div>

      <nav className="deck-nav" aria-label="Slide navigation">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            className={active === i ? "active" : ""}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={active === i}
            onClick={() => goTo(i)}
          />
        ))}
      </nav>
    </>
  );
}
