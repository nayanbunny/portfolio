"use client";

import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { motion } from "framer-motion";
import { navigation } from "@/data/navigation";
import { useEffect, useState } from "react";


export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];
  
    if (!sections.length) return;
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0.1,
      }
    );
  
    sections.forEach((section) => observer.observe(section));
  
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      aria-label="Section navigation"
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4"
    >
      {/* Glassmorphism container */}
      <ul
        className="flex flex-col items-center gap-5
                  bg-background/20 dark:bg-background/20
                  glass p-3 shadow-lg rounded-full backdrop-blur-md"
      >
        {navigation.map((item) => (
          <li key={item.id}>
            <Link
              href={`/#${item.id}`}
              onClick={() => setActiveSection(item.id)}
              className={`
                group relative grid h-10 w-10 place-items-center rounded-full
                transition-all duration-300 ease-in-out
                ${
                  activeSection === item.id
                    ? 'scale-110 bg-gradient-to-br from-cyan-400 to-teal-700'
                    : 'bg-transparent opacity-60 hover:opacity-100'
                }
              `}
            >
              <span className="sr-only">{item.label}</span>

              <motion.span
                initial={{ opacity: 0.7 }}
                whileHover={{ scale: 1.15, opacity: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon
                  name={item.icon}
                  className="h-5 w-5 text-foreground"
                />

              </motion.span>

              {/* Tooltip */}
              <span
                className="pointer-events-none absolute right-15 whitespace-nowrap rounded-md 
                          bg-popover/80 px-2 py-1 text-sm text-popover-foreground opacity-0 shadow 
                          transition-opacity group-hover:opacity-100 font-bold"
              >
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
