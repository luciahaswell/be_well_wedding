const CREAM    = "#DDD5BF";
const OLIVE    = "#464719";
const BURGUNDY = "#591e2a";
const GOLD     = "#C4A870";

const VENMO_USERNAME = "luciahaswell";
const VENMO_URL      = `https://venmo.com/${VENMO_USERNAME}`;
const VENMO_QR       = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=464719&bgcolor=DDD5BF&data=${encodeURIComponent(VENMO_URL)}`;

export default function RegistryTab() {
  return (
    <div style={{ backgroundColor: CREAM, minHeight: "100svh", color: OLIVE }}>
      <div className="max-w-2xl mx-auto px-6 pt-28 pb-24 md:pt-36">
        <p className="font-syne text-xs tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>
          Registry
        </p>
        <p className="font-body text-lg mb-12 leading-relaxed" style={{ color: OLIVE, opacity: 0.7 }}>
          Your presence at Beyul is the best gift. But if you&apos;d like to give something,
          we&apos;d love a contribution toward our honeymoon adventures.
        </p>

        {/* Venmo card */}
        <div
          className="rounded-2xl px-8 py-8"
          style={{
            backgroundColor: "rgba(70,71,25,0.07)",
            border: `1px solid rgba(70,71,25,0.18)`,
          }}
        >
          <p className="font-syne text-[10px] tracking-[0.25em] uppercase mb-2" style={{ color: GOLD }}>
            Honeymoon Fund
          </p>
          <h3 className="font-heading text-2xl font-semibold mb-6" style={{ color: BURGUNDY }}>
            Venmo
          </h3>

          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* QR Code */}
            <div className="flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={VENMO_QR}
                alt="Venmo QR code"
                width={160}
                height={160}
                className="rounded-xl"
                style={{ border: `2px solid rgba(70,71,25,0.12)` }}
              />
            </div>

            {/* Instructions */}
            <div className="flex-1 text-center sm:text-left">
              <p className="font-body text-base mb-3" style={{ color: OLIVE, opacity: 0.75 }}>
                Open Venmo, scan the QR code, or search for:
              </p>
              <p
                className="font-heading text-2xl font-semibold mb-5"
                style={{ color: BURGUNDY }}
              >
                @{VENMO_USERNAME}
              </p>
              <a
                href={VENMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-3 px-6 rounded-xl font-syne text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: BURGUNDY,
                  color: CREAM,
                  textDecoration: "none",
                }}
              >
                Open in Venmo →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
