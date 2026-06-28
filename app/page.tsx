"use client";

import { useEffect, useState } from "react";
import MainPage from "@/components/MainPage";
import PasswordGate from "@/components/PasswordGate";
import VideoIntro from "@/components/VideoIntro";

type Phase = "locked" | "video" | "open";

export default function Home() {
  const [phase, setPhase] = useState<Phase | null>(null);

  // Check sessionStorage on mount so returning visitors skip the gate
  useEffect(() => {
    const unlocked = sessionStorage.getItem("unlocked") === "true";
    setPhase(unlocked ? "open" : "locked");
  }, []);

  const handleUnlock = () => {
    sessionStorage.setItem("unlocked", "true");
    setPhase("video");
  };

  const handleVideoClose = () => {
    setPhase("open");
  };

  // Avoid flash before sessionStorage check resolves
  if (phase === null) return null;

  if (phase === "locked") {
    return <PasswordGate onUnlock={handleUnlock} />;
  }

  return (
    <>
      {phase === "video" && <VideoIntro onClose={handleVideoClose} />}
      <MainPage />
    </>
  );
}
