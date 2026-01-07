import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";


export const TextFlip = ({
  text = "Specializing as a",
  words = [],
  duration = 3000,
}: {
  text: string;
  words: string[];
  duration?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!words.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length]);

  return (
    <span
      className="inline-flex items-center gap-4 whitespace-nowrap
        text-xl md:text-2xl font-bold tracking-tight"
    >
      {/* Prefix */}
      <span className="shrink-0 text-white drop-shadow-lg">
        {text}
      </span>

      {/* Rotating text (fit to content, left-aligned) */}
      <span
        className="relative inline-flex items-center
          bg-neutral-800/70 px-4 py-3
          text-white font-sans font-bold leading-none
          rounded-xl"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ y: -14, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: 14, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={cn("whitespace-nowrap")}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
};
