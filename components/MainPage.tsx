"use client";

import { MapPin, Calendar } from "lucide-react";

const SAGE       = "#AED9A0";  // light green — hero bg
const BURGUNDY   = "#591e2a";  // deep wine — vibe heading, footer
const GOLD       = "#b4a64b";  // olive gold — accents, labels
const ORANGE     = "#d2682b";  // burnt orange — details section
const PERIWINKLE = "#98a8d9";  // muted blue-lavender — CTA section
const OLIVE      = "#464719";  // dark olive — text, footer bg
const MAUVE      = "#d6a6b1";  // dusty pink — vibe section

const details = [
  {
    icon: MapPin,
    title: "Where",
    body: "Beyul Retreat\nMeredith, Colorado",
  },
  {
    icon: Calendar,
    title: "When",
    body: "July 29 – Aug 1, 2027\nFour days, three nights",
  },
];

export default function MainPage() {
  return (
    <div style={{ backgroundColor: SAGE, color: OLIVE }}>

      {/* ── Hero ── sage green with video */}
      <section
        className="relative w-full flex flex-col items-center justify-center"
        style={{ minHeight: "100svh", backgroundColor: SAGE }}
      >
        {/* Background video — drop hero-video.mp4 into /public to activate */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(30, 60, 25, 0.35)" }}
        />

        {/* Text */}
        <div className="relative z-10 text-center px-5">
          <p
            className="font-syne text-xs tracking-[0.3em] uppercase mb-5"
            style={{ color: OLIVE, opacity: 0.6 }}
          >
            Save the Date
          </p>
          <h1
            className="font-display leading-[0.95] mb-6"
            style={{
              color: OLIVE,
              fontSize: "clamp(4rem, 20vw, 11rem)",
              fontWeight: 700,
            }}
          >
            Etienne
            <br />
            <span style={{ color: BURGUNDY }}>&amp;</span>
            <br />
            Lucia
          </h1>
          <p
            className="font-body text-base md:text-xl"
            style={{ color: OLIVE, opacity: 0.55 }}
          >
            July 29 – August 1, 2027
          </p>
        </div>
      </section>

      {/* ── Vibe ── deep burgundy */}
      <section
        className="px-6 py-16 md:py-24"
        style={{ backgroundColor: BURGUNDY }}
      >
        <div className="max-w-2xl mx-auto">
          <p
            className="font-syne text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: GOLD, opacity: 0.8 }}
          >
            What&apos;s happening
          </p>
          <h2
            className="font-syne leading-[1.1] mb-8"
            style={{
              color: MAUVE,
              fontSize: "clamp(2rem, 7vw, 3.6rem)",
              fontWeight: 800,
            }}
          >
            Four days in the mountains with our favorite people.
          </h2>
          <p
            className="font-body text-[15px] md:text-base leading-relaxed mb-4"
            style={{ color: MAUVE, opacity: 0.7 }}
          >
            It&apos;s our wedding weekend — but really it&apos;s just an excuse
            to get everyone we love in one place. Good food, cold mornings,
            warm nights, and way too many good conversations.
          </p>
          <p
            className="font-body text-[15px] md:text-base leading-relaxed"
            style={{ color: MAUVE, opacity: 0.7 }}
          >
            Come Thursday, leave Sunday after brunch. We want you there for
            all of it.
          </p>
        </div>
      </section>

      {/* ── Details ── burnt orange */}
      <section
        className="px-6 py-14 md:py-20"
        style={{ backgroundColor: ORANGE }}
      >
        <p
          className="font-syne text-xs tracking-[0.3em] uppercase text-center mb-10"
          style={{ color: BURGUNDY }}
        >
          The details
        </p>
        <div className="grid grid-cols-2 gap-5 max-w-sm mx-auto">
          {details.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-3 rounded-2xl px-4 py-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(255,255,255,0.25)",
                  border: "1px solid rgba(255,255,255,0.4)",
                }}
              >
                <Icon size={15} color={BURGUNDY} strokeWidth={2} />
              </div>
              <div>
                <p
                  className="font-syne text-[10px] tracking-widest uppercase mb-2"
                  style={{ color: BURGUNDY }}
                >
                  {title}
                </p>
                {body.split("\n").map((line, i) => (
                  <p
                    key={i}
                    className="font-body text-[13px] leading-snug"
                    style={{ color: BURGUNDY, opacity: 0.85 }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── mauve */}
      <section
        className="px-6 py-16 md:py-24"
        style={{ backgroundColor: MAUVE }}
      >
        <div className="max-w-xl mx-auto">
          <p
            className="font-syne text-xs tracking-[0.3em] uppercase mb-5"
            style={{ color: OLIVE, opacity: 0.55 }}
          >
            One more thing
          </p>
          <h2
            className="font-syne leading-tight mb-5"
            style={{ color: BURGUNDY, fontSize: "clamp(2rem, 7vw, 3.2rem)", fontWeight: 800 }}
          >
            More details on the way.
          </h2>
          <p
            className="font-body text-[15px] leading-relaxed"
            style={{ color: OLIVE, opacity: 0.75 }}
          >
            Invitations, where to stay, what to pack — all coming soon.
            In the meantime, block off the dates and start thinking about
            your Colorado outfits.
          </p>
        </div>
      </section>

      {/* ── Footer ── periwinkle */}
      <footer
        className="px-6 py-8 flex flex-col items-center gap-1"
        style={{ backgroundColor: PERIWINKLE }}
      >
        <p
          className="font-display text-xl"
          style={{ color: BURGUNDY, opacity: 0.7 }}
        >
          Etienne &amp; Lucia
        </p>
        <p
          className="font-syne text-[10px] tracking-[0.25em] uppercase"
          style={{ color: OLIVE, opacity: 0.6 }}
        >
          July 29 – August 1, 2027
        </p>
      </footer>
    </div>
  );
}
