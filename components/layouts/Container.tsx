"use client";

// components/layout/Container.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  fluid?: boolean; // when true, no max-width constraint
}

export default function Container({ children, className, fluid = true }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full", // always full width
        fluid ? "" : "max-w-7xl mx-auto", // only constrain if fluid=false
        className
      )}
    >
      {children}
    </div>
  );
}