const OLIVE    = "#464719";
const BURGUNDY = "#591e2a";
const GOLD     = "#C4A870";
const CREAM    = "#DDD5BF";
const SAGE     = "#7A8A42";

export default function GalleryTab() {
  return (
    <div style={{ backgroundColor: OLIVE, minHeight: "100svh" }}>
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-24 md:pt-36">
        <p className="font-syne text-xs tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>
          Gallery
        </p>
        <h2 className="font-display text-5xl md:text-7xl leading-tight mb-10" style={{ color: CREAM }}>
          Us
        </h2>

        {/* Video player */}
        <div className="rounded-2xl overflow-hidden mb-10" style={{ backgroundColor: "#000" }}>
          <video
            src="/hero-video.mp4"
            controls
            playsInline
            className="w-full"
            style={{ maxHeight: "65svh", objectFit: "cover", display: "block" }}
          />
        </div>
      </div>
    </div>
  );
}
