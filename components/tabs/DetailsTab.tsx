"use client";

import Script from "next/script";

const SLATE    = "#8899AB";
const GOLD     = "#C4A870";
const CREAM    = "#DDD5BF";
const OLIVE    = "#464719";

export default function DetailsTab() {
  return (
    <div style={{ backgroundColor: SLATE, minHeight: "100svh" }}>
      {/* Pinterest embed script */}
      <Script src="https://assets.pinterest.com/js/pinit.js" strategy="lazyOnload" />

      <div className="max-w-2xl mx-auto px-6 pt-28 pb-24 md:pt-36">
        <p className="font-syne text-xs tracking-[0.3em] uppercase mb-4" style={{ color: OLIVE }}>
          Details
        </p>
        <h2 className="font-display text-5xl md:text-7xl leading-tight mb-12" style={{ color: OLIVE }}>
          Good to Know
        </h2>

        <div className="flex flex-col gap-6">
          {/* Venue */}
          <div
            className="rounded-2xl px-6 py-7"
            style={{ backgroundColor: CREAM, border: "1px solid rgba(70,71,25,0.12)" }}
          >
            <p className="font-syne text-[10px] tracking-[0.25em] uppercase mb-2" style={{ color: GOLD }}>
              The Venue
            </p>
            <h3 className="font-heading text-xl font-semibold mb-3" style={{ color: OLIVE }}>
              <a
                href="https://www.beyulretreat.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: OLIVE, textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Beyul Retreat
              </a>
            </h3>
            <p className="font-body text-base leading-relaxed mb-4" style={{ color: OLIVE }}>
              32 acres of Colorado wilderness in Meredith, CO, our home base for three nights.
              Most guests will be staying on-site. Space is limited; guests book their stay directly
              with the venue.
            </p>
            <a
              href="https://bewellrsvp.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-syne text-xs tracking-[0.2em] uppercase py-2 px-4 rounded-lg transition-opacity hover:opacity-75"
              style={{ backgroundColor: OLIVE, color: CREAM, textDecoration: "none" }}
            >
              RSVP →
            </a>
          </div>

          {/* Dress Code */}
          <div
            className="rounded-2xl px-6 py-7"
            style={{ backgroundColor: CREAM, border: "1px solid rgba(70,71,25,0.12)" }}
          >
            <p className="font-syne text-[10px] tracking-[0.25em] uppercase mb-2" style={{ color: GOLD }}>
              Dress Code
            </p>
            <h3 className="font-heading text-2xl font-semibold mb-3" style={{ color: OLIVE }}>
              Funky Formal
            </h3>
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: OLIVE, opacity: 0.75 }}>
              Colorful, textured, and fun. Think bold patterns, statement pieces, and
              playful accessories, dressed up but never boring.
            </p>

            {/* Pinterest board embed */}
            <div className="w-full overflow-hidden rounded-xl">
              <a
                data-pin-do="embedBoard"
                data-pin-board-width="600"
                data-pin-scale-height="400"
                data-pin-scale-width="80"
                href="https://www.pinterest.com/luciaelenahas/be-well-wedding-guests/"
              />
            </div>

            <p className="font-body text-sm mt-4" style={{ color: OLIVE, opacity: 0.6 }}>
              <a
                href="https://www.pinterest.com/luciaelenahas/be-well-wedding-guests/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: OLIVE, textDecoration: "underline" }}
              >
                Open inspiration board on Pinterest →
              </a>
            </p>
          </div>

          {/* Pack List */}
          <div
            className="rounded-2xl px-6 py-7"
            style={{ backgroundColor: CREAM, border: "1px solid rgba(70,71,25,0.12)" }}
          >
            <p className="font-syne text-[10px] tracking-[0.25em] uppercase mb-2" style={{ color: GOLD }}>
              Pack List
            </p>
            <h3 className="font-heading text-2xl font-semibold mb-3" style={{ color: OLIVE }}>
              Coming Soon
            </h3>
            <p className="font-body text-base leading-relaxed" style={{ color: OLIVE, opacity: 0.7 }}>
              We&apos;ll post a full packing list here closer to the weekend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
