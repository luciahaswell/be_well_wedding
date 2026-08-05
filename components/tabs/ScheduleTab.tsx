const BURGUNDY = "#591e2a";
const OLIVE    = "#464719";
const GOLD     = "#C4A870";
const CREAM    = "#DDD5BF";
const SLATE    = "#8899AB";

const days = [
  {
    date: "Thursday, July 29",
    title: "Arrival Day",
    body: "Check-in begins at 4PM. Everyone arrives and settles into cabins, tents, or their room for the weekend. Welcome dinner that evening at 7PM.",
  },
  {
    date: "Friday, July 30",
    title: "The Wedding",
    body: "Ceremony and reception at Beyul. More details on timing and festivities to come.",
  },
  {
    date: "Saturday, July 31",
    title: "Rest & Recovery",
    body: "A slower day to relax, explore the property, and spend time together: the onsen, hikes, and a few planned activities. The formal schedule will be posted here when we finish planning.",
  },
  {
    date: "Sunday, August 1",
    title: "Departure",
    body: "Brunch, then checkout at 10:30AM. Goodbyes.",
  },
];

export default function ScheduleTab() {
  return (
    <div style={{ backgroundColor: BURGUNDY, minHeight: "100svh" }}>
      <div className="max-w-2xl mx-auto px-6 pt-28 pb-24 md:pt-36">
        <p className="font-syne text-xs tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>
          The Weekend
        </p>
        <h2 className="font-display text-5xl md:text-7xl leading-tight mb-12" style={{ color: CREAM }}>
          The Shape of the Weekend
        </h2>

        <div className="flex flex-col gap-5">
          {days.map(({ date, title, body }) => (
            <div
              key={date}
              className="rounded-2xl px-6 py-7"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(221,213,191,0.15)",
              }}
            >
              <p className="font-syne text-[10px] tracking-[0.25em] uppercase mb-2" style={{ color: GOLD }}>
                {date}
              </p>
              <h3 className="font-heading text-xl font-semibold mb-3" style={{ color: CREAM }}>
                {title}
              </h3>
              <p className="font-body text-base leading-relaxed" style={{ color: CREAM, opacity: 0.72 }}>
                {body}
              </p>
            </div>
          ))}
        </div>

        <p className="font-body text-sm text-center mt-10" style={{ color: CREAM, opacity: 0.4 }}>
          More details will be added as planning progresses.
        </p>
      </div>
    </div>
  );
}
