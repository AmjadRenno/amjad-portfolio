"use client";
import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Disable on touch / pointer-coarse devices (phones/tablets have no cursor)
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setMounted(true);
    const move = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[9990] rounded-full -translate-x-1/2 -translate-y-1/2"
      style={{
        width: "800px",
        height: "800px",
        background: "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)",
        willChange: "transform, left, top",
        contain: "strict",
      }}
    />
  );
}
