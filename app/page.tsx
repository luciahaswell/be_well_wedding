"use client";

import { useEffect, useState } from "react";
import WeddingApp from "@/components/WeddingApp";
import PasswordGate from "@/components/PasswordGate";

type Phase = "locked" | "open";

export default function Home() {
  const [phase, setPhase] = useState<Phase | null>(null);

  useEffect(() => {
    const unlocked = sessionStorage.getItem("unlocked") === "true";
    setPhase(unlocked ? "open" : "locked");
  }, []);

  const handleUnlock = () => {
    sessionStorage.setItem("unlocked", "true");
    setPhase("open");
  };

  if (phase === null) return null;

  return (
    <>
      {phase === "locked" && <PasswordGate onUnlock={handleUnlock} />}
      {phase === "open" && <WeddingApp />}
    </>
  );
}
