"use client";

import { MapPin, Calendar } from "lucide-react";
import GuestForm from "./GuestForm";

const SAGE       = "#9DC494";  // muted sage green — hero bg
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

      {/* ── Hero ── sage green */}
      <section
        className="w-full flex flex-col"
        style={{ backgroundColor: SAGE }}
      >
        {/* Replayable video player */}
        <div className="w-full" style={{ backgroundColor: "#000" }}>
          <video
            className="w-full"
            style={{ maxHeight: "70svh", objectFit: "cover", display: "block" }}
            src="/hero-video.mp4"
            controls
            playsInline
          />
        </div>

        {/* Text */}
        <div className="relative text-center px-5 py-14 md:py-20">
          {/* Decorative stars */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" overflow="visible">
            <g fill={BURGUNDY} opacity="0.35">
              <path transform="translate(12%, 22%)" d="M0,-9 L2.2,-2.2 L9,0 L2.2,2.2 L0,9 L-2.2,2.2 L-9,0 L-2.2,-2.2Z" />
              <path transform="translate(88%, 18%)" d="M0,-7 L1.7,-1.7 L7,0 L1.7,1.7 L0,7 L-1.7,1.7 L-7,0 L-1.7,-1.7Z" />
              <path transform="translate(6%, 72%)" d="M0,-6 L1.5,-1.5 L6,0 L1.5,1.5 L0,6 L-1.5,1.5 L-6,0 L-1.5,-1.5Z" />
              <path transform="translate(92%, 68%)" d="M0,-9 L2.2,-2.2 L9,0 L2.2,2.2 L0,9 L-2.2,2.2 L-9,0 L-2.2,-2.2Z" />
              <path transform="translate(20%, 85%)" d="M0,-5 L1.2,-1.2 L5,0 L1.2,1.2 L0,5 L-1.2,1.2 L-5,0 L-1.2,-1.2Z" />
              <path transform="translate(78%, 82%)" d="M0,-7 L1.7,-1.7 L7,0 L1.7,1.7 L0,7 L-1.7,1.7 L-7,0 L-1.7,-1.7Z" />
            </g>
            <g fill={GOLD} opacity="0.4">
              <circle cx="5%" cy="45%" r="4" />
              <circle cx="95%" cy="42%" r="3" />
              <circle cx="15%" cy="58%" r="3" />
              <circle cx="85%" cy="55%" r="4" />
            </g>
          </svg>
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

      {/* Wave divider sage → burgundy */}
      <div style={{ backgroundColor: BURGUNDY, lineHeight: 0 }} aria-hidden="true">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" style={{ width: "100%", display: "block", height: "60px" }}>
          <path d="M0,0 L0,30 C200,80 400,10 600,55 C800,90 1000,15 1200,45 L1200,0 Z" fill={SAGE} />
        </svg>
      </div>

      {/* ── Vibe ── deep burgundy */}
      <section
        className="px-6 py-16 md:py-24"
        style={{
          backgroundColor: BURGUNDY,
          backgroundImage: `repeating-linear-gradient(-45deg, transparent 0px, transparent 22px, rgba(180,166,75,0.08) 22px, rgba(180,166,75,0.08) 23px)`,
        }}
      >
        <div className="max-w-2xl mx-auto">
          <p
            className="font-syne text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: GOLD, opacity: 0.8 }}
          >
            What&apos;s happening
          </p>
          <h2
            className="font-heading leading-[1.1] mb-8"
            style={{
              color: MAUVE,
              fontSize: "clamp(2rem, 7vw, 3.6rem)",
              fontWeight: 800,
            }}
          >
            Three Nights in the mountains with our favorite people.
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

      {/* Wave divider burgundy → orange */}
      <div style={{ backgroundColor: ORANGE, lineHeight: 0 }} aria-hidden="true">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" style={{ width: "100%", display: "block", height: "60px" }}>
          <path d="M0,0 L0,25 C350,78 750,15 1200,60 L1200,0 Z" fill={BURGUNDY} />
        </svg>
      </div>

      {/* ── Details ── burnt orange */}
      <section
        className="px-6 py-14 md:py-20"
        style={{
          backgroundColor: ORANGE,
        }}
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

      {/* Wave divider orange → periwinkle */}
      <div style={{ backgroundColor: PERIWINKLE, lineHeight: 0 }} aria-hidden="true">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" style={{ width: "100%", display: "block", height: "60px" }}>
          <path d="M0,0 L0,55 C300,15 900,72 1200,25 L1200,0 Z" fill={ORANGE} />
        </svg>
      </div>

      {/* ── Guest Info ── periwinkle */}
      <section
        className="px-6 py-16 md:py-24"
        style={{ backgroundColor: PERIWINKLE }}
      >
        <div className="max-w-md mx-auto">
          <h2
            className="font-heading leading-tight mb-2 text-center"
            style={{ color: BURGUNDY, fontSize: "clamp(2rem, 7vw, 3.2rem)", fontWeight: 800 }}
          >
            We&apos;d love your details.
          </h2>
          <p
            className="font-body text-sm mb-8 text-center"
            style={{ color: OLIVE, opacity: 0.6 }}
          >
            So we can send a proper invitation your way.
          </p>
          <GuestForm />
        </div>
      </section>

      {/* Wave divider periwinkle → mauve */}
      <div style={{ backgroundColor: MAUVE, lineHeight: 0 }} aria-hidden="true">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" style={{ width: "100%", display: "block", height: "60px" }}>
          <path d="M0,0 L0,35 C200,78 400,20 600,58 C800,85 1000,25 1200,50 L1200,0 Z" fill={PERIWINKLE} />
        </svg>
      </div>

      {/* ── CTA ── mauve */}
      <section
        className="px-6 py-16 md:py-24"
        style={{
          backgroundColor: MAUVE,
        }}
      >
        <div className="max-w-xl mx-auto">
          <p
            className="font-syne text-xs tracking-[0.3em] uppercase mb-5"
            style={{ color: OLIVE, opacity: 0.55 }}
          >
            One more thing
          </p>
          <h2
            className="font-heading leading-tight mb-5"
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
        className="flex flex-col items-center"
        style={{ backgroundColor: PERIWINKLE }}
      >
        {/* Mountain + tree scene */}
        <svg
          viewBox="0 0 800 160"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", display: "block" }}
          aria-hidden="true"
        >
          {/* Far mountains — soft mauve, hazy */}
          <polygon
            points="0,160 0,95 130,32 280,80 430,22 580,70 720,28 800,55 800,160"
            fill={MAUVE}
            opacity="0.45"
          />
          {/* Near mountains — burgundy */}
          <polygon
            points="0,160 0,118 180,58 350,108 510,52 670,100 800,72 800,160"
            fill={BURGUNDY}
            opacity="0.65"
          />
          {/* Tree line — olive, jagged pine silhouette */}
          <path
            d="M0,160 L0,132 L18,108 L36,132 L58,104 L76,132 L96,106 L114,132 L134,102 L152,132 L172,107 L190,132 L210,103 L228,132 L248,100 L266,132 L286,105 L304,132 L324,101 L342,132 L362,106 L380,132 L400,102 L418,132 L438,107 L456,132 L476,103 L494,132 L514,100 L532,132 L552,106 L570,132 L590,102 L608,132 L628,107 L646,132 L666,103 L684,132 L704,100 L722,132 L742,106 L760,132 L780,102 L800,132 L800,160 Z"
            fill={OLIVE}
          />
        </svg>

        <div className="flex flex-col items-center gap-1 px-6 py-8">
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
        </div>
      </footer>
    </div>
  );
}
