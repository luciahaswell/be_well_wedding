const CREAM    = "#DDD5BF";
const OLIVE    = "#464719";
const BURGUNDY = "#591e2a";
const GOLD     = "#C4A870";

export default function OurStoryTab() {
  return (
    <div style={{ backgroundColor: CREAM, color: OLIVE }}>

      {/* ── How We Met ── */}
      <div className="max-w-2xl mx-auto px-6 pt-28 pb-16 md:pt-36">
        <p className="font-syne text-xs tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>
          Our Story
        </p>
        <h2 className="font-display text-5xl md:text-7xl leading-tight mb-10" style={{ color: BURGUNDY }}>
          How We Met
        </h2>
        <div className="space-y-5 font-body text-lg leading-relaxed" style={{ opacity: 0.85 }}>
          <p>
            It started in a sorority house kitchen at the University of Central Florida.
          </p>
          <p>
            Etienne was a house boy at the Pi Beta Phi house, and Lucia happened to live there.
            Every day he served her food in the kitchen. Every day, a little more conversation.
            What started as passing plates across a counter turned into something neither of them
            planned for.
          </p>
          <p>
            The rest, as they say, is history.
          </p>
        </div>
      </div>
    </div>
  );
}
