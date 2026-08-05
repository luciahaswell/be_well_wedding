const SAGE      = "#7A8A42";
const OLIVE     = "#464719";
const BURGUNDY  = "#591e2a";
const GOLD      = "#C4A870";
const CREAM     = "#DDD5BF";

export default function HomeTab() {
  return (
    <div style={{ backgroundColor: SAGE, color: OLIVE }}>
      {/* Hero */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 md:pt-36 md:pb-28"
        style={{ minHeight: "90svh" }}
      >
        {/* Decorative stars */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" overflow="visible">
          <g fill={BURGUNDY} opacity="0.3">
            <path transform="translate(8%, 20%)"  d="M0,-9 L2.2,-2.2 L9,0 L2.2,2.2 L0,9 L-2.2,2.2 L-9,0 L-2.2,-2.2Z" />
            <path transform="translate(90%, 16%)" d="M0,-7 L1.7,-1.7 L7,0 L1.7,1.7 L0,7 L-1.7,1.7 L-7,0 L-1.7,-1.7Z" />
            <path transform="translate(5%, 70%)"  d="M0,-6 L1.5,-1.5 L6,0 L1.5,1.5 L0,6 L-1.5,1.5 L-6,0 L-1.5,-1.5Z" />
            <path transform="translate(93%, 65%)" d="M0,-9 L2.2,-2.2 L9,0 L2.2,2.2 L0,9 L-2.2,2.2 L-9,0 L-2.2,-2.2Z" />
            <path transform="translate(18%, 85%)" d="M0,-5 L1.2,-1.2 L5,0 L1.2,1.2 L0,5 L-1.2,1.2 L-5,0 L-1.2,-1.2Z" />
            <path transform="translate(80%, 80%)" d="M0,-7 L1.7,-1.7 L7,0 L1.7,1.7 L0,7 L-1.7,1.7 L-7,0 L-1.7,-1.7Z" />
          </g>
          <g fill={GOLD} opacity="0.4">
            <circle cx="4%"  cy="42%" r="4" />
            <circle cx="96%" cy="40%" r="3" />
            <circle cx="14%" cy="60%" r="3" />
            <circle cx="86%" cy="58%" r="4" />
          </g>
        </svg>

        {/* Be Well Wedding wordmark */}
        <div className="flex items-center gap-3 mb-8 relative z-10">
          <div style={{ height: "1px", width: "2rem", backgroundColor: BURGUNDY, opacity: 0.4 }} />
          <p
            className="font-syne tracking-[0.35em] uppercase"
            style={{ fontSize: "0.65rem", color: BURGUNDY, opacity: 0.75 }}
          >
            Be Well Wedding
          </p>
          <div style={{ height: "1px", width: "2rem", backgroundColor: BURGUNDY, opacity: 0.4 }} />
        </div>

        {/* Names */}
        <h1
          className="font-display leading-[0.95] mb-6 relative z-10"
          style={{ color: OLIVE, fontSize: "clamp(3.5rem, 17vw, 10rem)", fontWeight: 700 }}
        >
          Etienne
          <br />
          <span style={{ color: BURGUNDY }}>&amp;</span>
          <br />
          Lucia
        </h1>

        <p className="font-body text-base md:text-xl relative z-10" style={{ color: OLIVE, opacity: 0.55 }}>
          Beyul Retreat · Meredith, Colorado
        </p>
      </div>

      {/* Wave into cream strip */}
      <div style={{ lineHeight: 0, marginBottom: "-1px" }}>
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" style={{ width: "100%", height: "80px", display: "block" }}>
          <path d="M0,80 L0,40 C200,0 400,70 600,30 C800,-5 1000,65 1200,35 L1200,80 Z" fill={CREAM} />
        </svg>
      </div>

      {/* Welcome section */}
      <div className="px-6 py-16 md:py-24" style={{ backgroundColor: CREAM }}>
        <div className="max-w-2xl mx-auto">
          <p className="font-syne text-xs tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>
            Welcome
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight mb-8" style={{ color: BURGUNDY }}>
            Welcome to Our Wedding Weekend
          </h2>
          <div className="space-y-5 font-body text-lg leading-relaxed" style={{ color: OLIVE, opacity: 0.85 }}>
            <p>
              We are getting married, and we want you there for the whole weekend, not just the ceremony.
            </p>
            <p>
              We&apos;re gathering at <strong>Beyul Retreat in Meredith, Colorado</strong> for three nights,
              Thursday, July 29 through Sunday, August 1, 2027. Most everyone will be staying together on-site,
              which is the whole point: a rare chance for the people from all the different parts of our lives.
            </p>
            <p>
              Family, childhood friends, college friends, Denver friends, friends from all walks of life.
              We get to actually spend time together all weekend, not just clink glasses for one night and go home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
