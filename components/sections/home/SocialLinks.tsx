"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { socials } from "@/data/socials";
import { cn } from "@/lib/utils";


// components/sections/home/SocialLinks.tsx
export default function SocialLinks() {
  return (
    <div
      aria-label="Section Socials"
      className="relative left-1/2 -translate-x-1/2 z-50 flex items-center gap-4"
    >
      {/* Glassmorphism container */}
      <ul className="flex items-center gap-3">
      {
        socials.map((social, index) => {
          const Icon = social.icon;

          return (
            <li key={social.id}>
              <Link
                href={`${social.href}`} target="_blank"
                className={cn(
                  "group relative grid h-12 w-12 place-items-center",
                  "transition-colors rounded-full border hover:text-teal-600",
                  social.className
                )}
              >
                <span className="sr-only">{social.label}</span>
                <motion.span
                  initial={{ opacity: 0.7 }}
                  whileHover={{ scale: 1.15, opacity: 1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* {social.icon.name} */}
                  <Icon className={cn(
                    "h-6 w-6 text-foreground",
                    social.iconClassName
                  )}/>
                </motion.span>
                {/* Tooltip */}
                <span className="pointer-events-none absolute top-15 whitespace-nowrap rounded-md 
                                bg-popover/80 px-2 py-1 text-sm text-popover-foreground opacity-0 shadow 
                                transition-opacity group-hover:opacity-100 font-bold">
                  {social.label}
                </span>
              </Link>
            </li>
          );
        })
      }
      </ul>
    </div>
  );
}
