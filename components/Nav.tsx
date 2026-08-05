"use client";

import { useState } from "react";

const TABS = ["Home", "Our Story", "Schedule", "Details", "Our Party", "Gallery", "Registry"] as const;
export type Tab = typeof TABS[number];

const OLIVE      = "#464719";
const GOLD       = "#C4A870";
const BURGUNDY   = "#591e2a";
const CREAM      = "#DDD5BF";

export default function Nav({ active, onSelect }: { active: Tab; onSelect: (t: Tab) => void }) {
  const [open, setOpen] = useState(false);

  const handleSelect = (t: Tab) => {
    onSelect(t);
    setOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-8"
        style={{
          backgroundColor: OLIVE,
          borderBottom: `1px solid rgba(221,213,191,0.12)`,
          height: "3.25rem",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => handleSelect("Home")}
          className="font-display text-lg leading-none"
          style={{ color: CREAM, fontStyle: "italic" }}
        >
          Etienne &amp; Lucia
        </button>

        {/* Desktop tabs */}
        <nav className="hidden md:flex items-center gap-6">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => handleSelect(t)}
              className="font-syne text-[10px] tracking-[0.2em] uppercase transition-opacity"
              style={{
                color: active === t ? GOLD : CREAM,
                opacity: active === t ? 1 : 0.65,
                borderBottom: active === t ? `2px solid ${BURGUNDY}` : "2px solid transparent",
                paddingBottom: "2px",
              }}
            >
              {t}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            style={{
              display: "block", width: "22px", height: "2px",
              backgroundColor: CREAM,
              transform: open ? "rotate(45deg) translate(5px, 5px)" : "none",
              transition: "transform 0.2s",
            }}
          />
          <span
            style={{
              display: "block", width: "22px", height: "2px",
              backgroundColor: CREAM,
              opacity: open ? 0 : 1,
              transition: "opacity 0.2s",
            }}
          />
          <span
            style={{
              display: "block", width: "22px", height: "2px",
              backgroundColor: CREAM,
              transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none",
              transition: "transform 0.2s",
            }}
          />
        </button>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed top-[3.25rem] left-0 right-0 z-40 md:hidden flex flex-col py-4"
          style={{ backgroundColor: OLIVE, borderBottom: `1px solid rgba(221,213,191,0.15)` }}
        >
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => handleSelect(t)}
              className="font-syne text-[11px] tracking-[0.25em] uppercase text-left px-6 py-3"
              style={{
                color: active === t ? GOLD : CREAM,
                opacity: active === t ? 1 : 0.7,
                borderLeft: active === t ? `3px solid ${BURGUNDY}` : "3px solid transparent",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
