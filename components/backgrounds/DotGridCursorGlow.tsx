"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useEffect, useRef } from "react";

export function DotGridCursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  const maskImage = useMotionTemplate`
    radial-gradient(
      320px at ${x}px ${y}px,
      white 0%,
      transparent 85%
    )
  `;

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none">
      {/* Base grid (very subtle, always visible) */}
      {/* <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(rgba(212,212,212,0.07) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      /> */}

      {/* Glow grid (larger dots, revealed by mask) */}
      <motion.div
        className="absolute inset-0"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,

          background:
            "radial-gradient(rgba(212,212,212,0.55) 1px, transparent 1px)",
          backgroundSize: "18px 18px",

          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />
    </div>
  );
}
