"use client";

import { useEffect, useRef } from "react";

export default function VideoIntro({ onClose }: { onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "#000" }}
    >
      <video
        ref={videoRef}
        src="/hero-video.mp4"
        playsInline
        onEnded={onClose}
        className="w-full h-full object-cover"
      />

      {/* Close / skip button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 flex items-center gap-2 font-syne text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full transition-opacity hover:opacity-70"
        style={{
          backgroundColor: "rgba(255,255,255,0.15)",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.3)",
          backdropFilter: "blur(4px)",
        }}
      >
        Skip ✕
      </button>
    </div>
  );
}
