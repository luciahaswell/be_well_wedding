"use client";

import { useState } from "react";

const BURGUNDY = "#591e2a";
const MAUVE    = "#DDD5BF";
const GOLD     = "#C4A870";
const OLIVE    = "#464719";

export default function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim().toLowerCase() === "loosheti") {
      onUnlock();
    } else {
      setError(true);
      setValue("");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: BURGUNDY }}
    >
      <div className="w-full max-w-xs text-center">
        <p
          className="font-display text-5xl md:text-6xl mb-2"
          style={{ color: MAUVE }}
        >
          Etienne
        </p>
        <p className="font-display text-3xl mb-2" style={{ color: GOLD }}>
          &amp;
        </p>
        <p
          className="font-display text-5xl md:text-6xl mb-10"
          style={{ color: MAUVE }}
        >
          Lucia
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <p
            className="font-syne text-[10px] tracking-[0.25em] uppercase"
            style={{ color: MAUVE, opacity: 0.5 }}
          >
            Enter password to continue
          </p>

          <input
            type="password"
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false); }}
            placeholder="••••••••"
            autoFocus
            className="text-center bg-transparent border-b py-3 text-base outline-none placeholder:opacity-30 tracking-widest"
            style={{
              color: MAUVE,
              borderColor: `rgba(214,166,177,0.35)`,
              fontFamily: "inherit",
            }}
          />

          {error && (
            <p className="font-body text-xs" style={{ color: GOLD }}>
              Incorrect password — try again.
            </p>
          )}

          <button
            type="submit"
            className="font-syne text-xs tracking-[0.2em] uppercase py-4 mt-2 transition-opacity hover:opacity-80"
            style={{ backgroundColor: GOLD, color: OLIVE }}
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
