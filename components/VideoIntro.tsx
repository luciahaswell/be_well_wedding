"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoIntro({ onClose }: { onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [landscape, setLandscape] = useState(false);

  useEffect(() => {
    const check = () => {
      // Rotate only on mobile-sized portrait screens
      setLandscape(window.innerWidth < 768 && window.innerHeight > window.innerWidth);
    };
    check();
    window.addEventListener("resize", check);
    window.addEventListener("orientationchange", check);
    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("orientationchange", check);
    };
  }, []);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <div
      className="fixed inset-0 z-50"
      style={{ backgroundColor: "#000" }}
    >
      {/* Video rotated 90° on mobile portrait so it fills landscape */}
      <div
        style={
          landscape
            ? {
                position: "fixed",
                top: "50%",
                left: "50%",
                width: "100vh",
                height: "100vw",
                transform: "translate(-50%, -50%) rotate(90deg)",
              }
            : { width: "100%", height: "100%" }
        }
      >
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          playsInline
          onEnded={onClose}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Skip button always in real viewport top-right, never rotated */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 flex items-center gap-2 font-syne text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full transition-opacity hover:opacity-70"
        style={{
          backgroundColor: "rgba(255,255,255,0.15)",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.3)",
          backdropFilter: "blur(4px)",
          zIndex: 60,
        }}
      >
        Skip ✕
      </button>
    </div>
  );
}
