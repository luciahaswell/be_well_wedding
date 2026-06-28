"use client";

import { useEffect, useRef, useState } from "react";
import MainPage from "@/components/MainPage";
import PasswordGate from "@/components/PasswordGate";
import VideoIntro from "@/components/VideoIntro";

type Phase = "locked" | "video" | "open";

const OLIVE = "#464719";

export default function Home() {
  const [phase, setPhase] = useState<Phase | null>(null);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const unlocked = sessionStorage.getItem("unlocked") === "true";
    setPhase(unlocked ? "open" : "locked");
  }, []);

  // Play when phase becomes "open"
  useEffect(() => {
    if (phase === "open") {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.volume = 0.3;
          audioRef.current.play().catch(() => {});
        }
      }, 100);
    }
  }, [phase]);

  const handleUnlock = () => {
    sessionStorage.setItem("unlocked", "true");
    setPhase("video");
  };

  const handleVideoClose = () => {
    setPhase("open");
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  if (phase === null) return null;

  return (
    <>
      {/* Always in DOM so ref is ready */}
      <audio ref={audioRef} src="/background.mp3" loop preload="auto" />

      {phase === "locked" && <PasswordGate onUnlock={handleUnlock} />}
      {phase === "video" && <VideoIntro onClose={handleVideoClose} />}
      {phase === "open" && <MainPage />}

      {/* Mute toggle — only visible when playing */}
      {phase === "open" && (
        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute music" : "Mute music"}
          style={{
            position: "fixed",
            bottom: "1.25rem",
            right: "1.25rem",
            zIndex: 40,
            backgroundColor: "rgba(255,255,255,0.25)",
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(70,71,25,0.2)",
            borderRadius: "9999px",
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
            cursor: "pointer",
            color: OLIVE,
            opacity: muted ? 0.5 : 1,
            transition: "opacity 0.2s",
          }}
        >
          {muted ? "🔇" : "♫"}
        </button>
      )}
    </>
  );
}
