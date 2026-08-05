const BURGUNDY = "#591e2a";
const CREAM    = "#DDD5BF";
const GOLD     = "#C4A870";

export default function OurPartyTab() {
  return (
    <div
      className="flex flex-col items-center justify-center text-center px-6"
      style={{ backgroundColor: BURGUNDY, minHeight: "100svh" }}
    >
      <p className="font-syne text-xs tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>
        Our Party
      </p>
      <h2 className="font-display text-5xl md:text-7xl" style={{ color: CREAM }}>
        Coming Soon
      </h2>
    </div>
  );
}
