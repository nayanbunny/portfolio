"use client";

// components/layout/Section.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  bgClassName?: string; // Tailwind background classes
}

export default function Section({ id, children, className, bgClassName }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full min-h-screen snap-start relative overflow-x-hidden",
        bgClassName,
        className
      )}
    >
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </section>
  );
}