"use client";

import { useEffect, useState } from "react";
import MainPage from "@/components/MainPage";
import PasswordGate from "@/components/PasswordGate";
import VideoIntro from "@/components/VideoIntro";

type Phase = "locked" | "video" | "open";

export default function Home() {
  const [phase, setPhase] = useState<Phase | null>(null);

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

  if (phase === null) return null;

  return (
    <>
      {phase === "locked" && <PasswordGate onUnlock={handleUnlock} />}
      {phase === "video" && <VideoIntro onClose={handleVideoClose} />}
      {phase === "open" && <MainPage />}
    </>
  );
}
