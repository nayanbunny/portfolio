"use client"

import { motion } from "framer-motion"
import { Skill } from "@/data/skills"


// components/sections/skills/SkillBars.tsx
export function SkillBars({ skills }: { skills: Skill[] }) {
  return (
    <div className="space-y-5">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex items-center justify-between text-sm mb-1">
            <span>{skill.name}</span>
            <span className="text-muted-foreground font-actions">{skill.level}%</span>
          </div>

          <div className="h-2 rounded-full bg-muted">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full rounded-full 
              bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400
              shadow-[0_0_12px_rgba(52,211,153,0.6)]"
          />
          </div>
        </div>
      ))}
    </div>
  )
}
