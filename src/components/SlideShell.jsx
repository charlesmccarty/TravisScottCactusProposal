export default function SlideShell({ index, total, footerLabel, children }) {
  return (
    <>
      <div className="slide-frame" />
      {children}
      <div className="slide-footer">
        <span>
          <span className="brand-cactus">Cactus X</span> &nbsp;|&nbsp;{" "}
          <span className="brand-bb">Bright.Blue</span> Connected Retail
        </span>
        {footerLabel ? <span>{footerLabel}</span> : <span />}
        <span>
          {String((index ?? 0) + 1).padStart(2, "0")} / {String(total ?? 1).padStart(2, "0")}
        </span>
      </div>
    </>
  );
}
