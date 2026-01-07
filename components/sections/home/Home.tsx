"use client";

import Section from "@/components/layouts/Section";
import Container from "@/components/layouts/Container";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import Terminal from "../../effects/Terminal";
import { TextFlip } from "@/components/effects/TextFlip";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};


// components/sections/home/Home.tsx
export default function Home() {
  const mailtoLink = `
    mailto:youremail@gmail.com
    ?subject=Portfolio%20Contact
    &body=Hi,%0D%0A%0D%0AMy%20name%20is%20...
    `;

  return (
    <Section id="home" className="relative overflow-hidden">
      <Container fluid={false} className="flex flex-col min-h-screen justify-center px-4 sm:px-6 pt-24 sm:pt-28 lg:pt-0">
        {/* ───────────────── SOCIAL LINKS (FLOW, NOT ABSOLUTE) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="absolute left-1/2 z-20 -translate-x-1/2 top-4 sm:top-6 pointer-events-auto"
        >
          <SocialLinks />
        </motion.div>


        {/* ───────────────── MAIN GRID */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr]">
          {/* LEFT — TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex max-w-lg flex-col justify-self-center lg:justify-self-start gap-8"
          >
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl font-headings">
              Architecting systems that inspire and scale.
            </h1>

            <TextFlip
              text="Specializing as a "
              words={[
                "Cloud Solution Architect",
                "AI & Emerging Tech Innovator",
                "Full-Stack Developer",
                "DevOps Practitioner",
                "Creative Technologist",
              ]}
            />

            <p className="text-lg opacity-80">
              Built with precision, systems thinking, and a future-ready mindset.
            </p>

            {/* CTA + SCROLL */}
            <div className="mt-10 flex items-center gap-12">
              <button
                className="rounded-full bg-gradient-to-br from-cyan-500 to-teal-700 
                px-12 py-4 font-bold uppercase tracking-widest text-white cursor-pointer
                transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() =>
                  window.location.href =
                    "mailto:nayanbunny07@gmail.com?subject=Portfolio%20Contact"
                }
              >
                Connect
              </button>

              {/* Scroll Indicator */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-accent p-2">
                  <motion.div
                    className="h-1.5 w-1.5 rounded-full bg-accent"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — TERMINAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}            
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-full justify-self-center"
          >
            <Terminal />
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
