const CREAM    = "#DDD5BF";
const OLIVE    = "#464719";
const BURGUNDY = "#591e2a";
const GOLD     = "#C4A870";

const JOY_REGISTRY_URL = "https://withjoy.com/lucia-and-etienne-jul-2027/registry";
const VENMO_USERNAME   = "luciahaswell";
const VENMO_URL        = `https://venmo.com/${VENMO_USERNAME}`;

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

        {/* Honeymoon fund card */}
        <div
          className="rounded-2xl px-8 py-10 text-center"
          style={{
            backgroundColor: "rgba(70,71,25,0.07)",
            border: `1px solid rgba(70,71,25,0.18)`,
          }}
        >
          <p className="font-syne text-[10px] tracking-[0.25em] uppercase mb-2" style={{ color: GOLD }}>
            Honeymoon Fund
          </p>
          <h3 className="font-heading text-2xl font-semibold mb-4" style={{ color: BURGUNDY }}>
            Help us get somewhere wonderful
          </h3>
          <p className="font-body text-base mb-8 max-w-md mx-auto" style={{ color: OLIVE, opacity: 0.75 }}>
            Our fund lives on Joy, where you can pick an experience or give any amount.
            No fees for you or for us.
          </p>
          <a
            href={JOY_REGISTRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-3 px-8 rounded-xl font-syne text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-80"
            style={{
              backgroundColor: BURGUNDY,
              color: CREAM,
              textDecoration: "none",
            }}
          >
            Visit our registry →
          </a>
        </div>

        <p className="font-body text-sm mt-6 text-center" style={{ color: OLIVE, opacity: 0.6 }}>
          Prefer Venmo? You can send to{" "}
          <a
            href={VENMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
            style={{ color: BURGUNDY }}
          >
            @{VENMO_USERNAME}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
