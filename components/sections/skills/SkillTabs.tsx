"use client"

import { motion } from "framer-motion"
import { SkillCategory } from "@/data/skills"

type Props = {
  categories: SkillCategory[]
  active: string
  onChange: (id: string) => void
}


// components/sections/skills/SkillsTabs.tsx
export function SkillTabs({ categories, active, onChange }: Props) {
  return (
    <div className="flex flex-wrap justify-center rounded-full p-2 gap-2">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className="relative glass rounded-full px-5 py-2 text-sm font-medium font-actions"
        >
          {active === cat.id && (
            <motion.span
              layoutId="active-tab"
              className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-teal-700"
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          )}
          <span
            className={`relative z-10 text-base ${
              active === cat.id ? "text-white font-semibold" : "text-muted-foreground"
            }`}
          >
            {cat.label}
          </span>
        </button>
      ))}
    </div>
  )
}
