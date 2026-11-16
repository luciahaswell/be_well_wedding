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
            <p className="font-syne text-sm tracking-[0.25em] uppercase mb-3" style={{ color: GOLD }}>
              Good to know
            </p>
            <h3 className="font-heading text-3xl font-semibold mb-3" style={{ color: OLIVE }}>
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
              with the venue. You&apos;ll hear from us and the venue closer to July, and we&apos;ll make sure
              everyone has the information they need to book. Stay patient while we coordinate the
              details. Rooms will be assigned by the bride and groom; if you have an extreme rooming
              preference, reach out to us and we&apos;ll do our best to accommodate it. Trust us to get
              everyone placed properly.
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
            <p className="font-syne text-sm tracking-[0.25em] uppercase mb-3" style={{ color: GOLD }}>
              What to wear
            </p>
            <h3 className="font-heading text-3xl font-semibold mb-3" style={{ color: OLIVE }}>
              Dress Code: Funky Formal
            </h3>
            <p className="font-body text-base leading-relaxed mb-3" style={{ color: OLIVE, opacity: 0.8 }}>
              Color is encouraged. If possible, please avoid black, white, and neutrals.
              Think bright colors, fun textures, and playful accessories.
            </p>
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: OLIVE, opacity: 0.8 }}>
              Maxi dresses for women; suits for men. Dressed up, but never boring.
              For women wearing heels: the ceremony will be on grass, and the reception will be
              half grass and half hard floor, so choose shoes that work comfortably across both.
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
            <p className="font-syne text-sm tracking-[0.25em] uppercase mb-3" style={{ color: GOLD }}>
              Coming soon
            </p>
            <h3 className="font-heading text-3xl font-semibold mb-3" style={{ color: OLIVE }}>
              Packing List
            </h3>
            <p className="font-body text-base leading-relaxed" style={{ color: OLIVE, opacity: 0.7 }}>
              We&apos;ll post a full packing list here closer to the weekend. For late July and early
              August in Meredith, plan for warm days around 67–69°F and cool nights around 40–41°F.
              Pack layers, comfortable shoes, sun protection, and something for a passing afternoon shower.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
