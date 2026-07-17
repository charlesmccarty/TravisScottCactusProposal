import { useEffect, useRef, useState } from "react";
import SlideShell from "../components/SlideShell.jsx";
import "./slides.css";

const START = {
  impressions: 128450,
  clicks: 18220,
  units: 3145,
  online: 42180, // $ online sales
  subs: 512,
};

const fmt = (n) => Math.floor(n).toLocaleString("en-US");
const money = (n) =>
  "$" + Math.floor(n).toLocaleString("en-US", { maximumFractionDigits: 0 });

const rand = (min, max) => min + Math.random() * (max - min);

export default function Slide03Dashboard({ index, total }) {
  const [data, setData] = useState(START);
  const [spark, setSpark] = useState(() =>
    Array.from({ length: 24 }, () => rand(0.25, 1))
  );
  const acc = useRef(START);

  useEffect(() => {
    const id = setInterval(() => {
      const d = acc.current;
      const impDelta = rand(24, 78);
      d.impressions += impDelta;
      d.clicks += rand(4, 14);
      d.units += rand(0.4, 2.6);
      d.online += rand(18, 120);
      if (Math.random() > 0.7) d.subs += 1;
      acc.current = { ...d };
      setData({ ...d });
      setSpark((prev) => {
        const next = prev.slice(1);
        next.push(Math.min(1, 0.35 + (impDelta - 24) / 60));
        return next;
      });
    }, 900);
    return () => clearInterval(id);
  }, []);

  const conversion = ((data.units / data.clicks) * 100).toFixed(1);

  const primary = [
    { label: "Total impressions", value: fmt(data.impressions), sub: "people who saw the screen" },
    { label: "Total clicks", value: fmt(data.clicks), sub: "browsed the machine" },
    { label: "Total units sold", value: fmt(data.units), sub: "in-machine purchases" },
    { label: "Online sales & subs", value: money(data.online), sub: `${fmt(data.subs)} active subscriptions` },
  ];

  return (
    <>
      <div className="bg-desert" />
      <div className="bg-grain" />

      <SlideShell index={index} total={total}>
        <div className="dash-slide">
          <header className="dash-head">
            <div>
              <p className="eyebrow">Live Reporting</p>
              <h2 className="dash-title">
                Every machine reports back <span className="accent">in real time</span>.
              </h2>
            </div>
            <span className="dash-live">
              <span className="dash-live-dot" /> Live
            </span>
          </header>

          <div className="dash-kpis">
            {primary.map((k) => (
              <div className="dash-card" key={k.label}>
                <span className="dash-card-label">{k.label}</span>
                <span className="dash-card-value">{k.value}</span>
                <span className="dash-card-sub">{k.sub}</span>
              </div>
            ))}
          </div>

          <div className="dash-lower">
            <div className="dash-card dash-conv">
              <span className="dash-card-label">Conversion rate</span>
              <span className="dash-card-value dash-conv-value">{conversion}%</span>
              <span className="dash-card-sub">browse → purchase</span>
            </div>

            <div className="dash-card dash-spark-card">
              <span className="dash-card-label">Impressions · last 24 intervals</span>
              <div className="dash-spark">
                {spark.map((h, i) => (
                  <span key={i} className="dash-spark-bar" style={{ height: `${h * 100}%` }} />
                ))}
              </div>
            </div>

            <div className="dash-card">
              <span className="dash-card-label">Top selling product</span>
              <span className="dash-card-value dash-sm">
                <span className="dash-swatch" /> Cactus X Disposable
              </span>
              <span className="dash-card-sub">Purple · 22% of units</span>
            </div>

            <div className="dash-mini-col">
              <div className="dash-card dash-mini">
                <span className="dash-card-label">Best time of day</span>
                <span className="dash-card-value dash-sm">6 – 9 PM</span>
              </div>
              <div className="dash-card dash-mini">
                <span className="dash-card-label">Best day of week</span>
                <span className="dash-card-value dash-sm">Saturday</span>
              </div>
            </div>
          </div>
        </div>
      </SlideShell>
    </>
  );
}
