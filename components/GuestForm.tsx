"use client";

import { useState } from "react";

const PERIWINKLE = "#98a8d9";
const BURGUNDY   = "#591e2a";
const OLIVE      = "#464719";
const MAUVE      = "#d6a6b1";
const GOLD       = "#b4a64b";

export default function GuestForm() {
  const [form, setForm] = useState({ name: "", address: "", email: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_RSVP_WEBHOOK_URL!;
      const url = new URL(webhookUrl);
      url.searchParams.set("name", form.name);
      url.searchParams.set("address", form.address);
      url.searchParams.set("email", form.email);
      await fetch(url.toString(), { method: "GET", mode: "no-cors" });
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong — please try again.");
    }
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.35)",
    border: `1px solid rgba(70,71,25,0.25)`,
    borderRadius: "0.5rem",
    padding: "0.75rem 1rem",
    fontFamily: "inherit",
    fontSize: "1rem",
    color: OLIVE,
    outline: "none",
  };

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <p
          className="font-display text-4xl md:text-5xl mb-3"
          style={{ color: BURGUNDY }}
        >
          You&apos;re on the list!
        </p>
        <p className="font-body text-base" style={{ color: OLIVE, opacity: 0.65 }}>
          We&apos;ll be in touch with more details soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label
          className="font-syne text-xs tracking-widest uppercase"
          style={{ color: OLIVE, opacity: 0.6 }}
        >
          Name
        </label>
        <input
          name="name"
          type="text"
          placeholder="Full name"
          value={form.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="font-syne text-xs tracking-widest uppercase"
          style={{ color: OLIVE, opacity: 0.6 }}
        >
          Mailing Address
        </label>
        <textarea
          name="address"
          placeholder="Street, City, State, ZIP"
          value={form.address}
          onChange={handleChange}
          required
          rows={3}
          style={{ ...inputStyle, resize: "none" }}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="font-syne text-xs tracking-widest uppercase"
          style={{ color: OLIVE, opacity: 0.6 }}
        >
          Email Address
        </label>
        <input
          name="email"
          type="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      </div>

      {errorMsg && (
        <p className="font-body text-xs" style={{ color: BURGUNDY }}>
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="font-syne text-xs tracking-[0.2em] uppercase py-4 rounded-lg transition-opacity hover:opacity-80 disabled:opacity-50"
        style={{ backgroundColor: BURGUNDY, color: MAUVE }}
      >
        {status === "loading" ? "Sending…" : "Send my details"}
      </button>
    </form>
  );
}
