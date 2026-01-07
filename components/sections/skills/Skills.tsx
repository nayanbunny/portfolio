"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import { SKILL_CATEGORIES } from "@/data/skills";
import { SkillTabs } from "./SkillTabs";
import { SkillBars } from "./SkillBars";
import { SkillRadar } from "./SkillRadar";


// components/sections/skills/Skills.tsx
export default function Skills() {
  const [active, setActive] = useState(SKILL_CATEGORIES[0].id);
  const category = SKILL_CATEGORIES.find((c) => c.id === active)!;

  return (
    <Section id="skills" className="relative overflow-hidden">
      <Container className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10">
        {/* Section Grid */}
        <div className="grid items-start gap-12">
          {/* Title */}
          <h2 className="text-center font-headings text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Skills
          </h2>

          {/* Tabs */}
          <div className="grid place-items-center">
            <SkillTabs
              categories={SKILL_CATEGORIES}
              active={active}
              onChange={setActive}
            />
          </div>

          {/* Content */}
          <div className="relative min-h-[420px]">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid gap-10 md:grid-cols-2"
            >
              {/* Radar */}
              <div className="grid rounded-4xl bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.4)]">
                <SkillRadar skills={category.skills} />
              </div>

              {/* Bars */}
              <div className="grid rounded-4xl bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.4)]">
                <SkillBars skills={category.skills} />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
