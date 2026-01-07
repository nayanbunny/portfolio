
import { motion, type Variants } from "framer-motion";
import { MapPin, Download } from "lucide-react";

import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import { about } from "@/data/about";
import AvatarMorph from "./AvatarMorph";


/* ============================
SAFE, STATIC VARIANTS
============================ */
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


// components/sections/about/About.tsx
export default function About() {
  return (
    <Section id="about" className="relative w-full overflow-hidden">
      <Container className="grid gap-16 px-4 py-20 sm:px-6 md:px-10 lg:gap-24">
        {/* Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center font-headings font-semibold tracking-tight text-5xl lg:text-6xl"
        >
          About Me
        </motion.h2>

        {/* Content */}
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 lg:flex-row lg:items-start lg:gap-20">
          {/* Avatar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="shrink-0"
          >
            <AvatarMorph />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl space-y-6 text-base leading-relaxed text-neutral-300 sm:text-lg"
          >
            <p>
              {about.expertise}
            </p>

            <p>
              {about.philosophy}
            </p>

            <p>
              {about.vision}
            </p>

            {/* Footer */}
            <div className="flex flex-wrap items-center gap-6 pt-6">
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <MapPin size={16} />
                India
              </div>

              {/* <a
                href="/resume.pdf"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white 
                  bg-gradient-to-br from-cyan-500 to-teal-700 shadow-md transition-all duration-300 
                  hover:scale-[1.03] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <Download size={16} />
                Download Resume
              </a> */}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
