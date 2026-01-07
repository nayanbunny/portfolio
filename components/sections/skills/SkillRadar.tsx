"use client"

import { Skill } from "@/data/skills"
import { RADAR_AXES } from "@/data/skills"

type Props = {
  skills: Skill[]
}


// components/sections/skills/SkillRadar.tsx
export function SkillRadar({ skills }: Props) {
  const size = 320
  const padding = 32
  const center = size / 2
  const radius = center - padding
  const axes = RADAR_AXES.length

  if (!skills.length) return null

  // ----------------------------
  // 1️⃣ Skill statistics
  // ----------------------------
  const levels = skills.map((s) => s.level)

  const avg = levels.reduce((a, b) => a + b, 0) / levels.length
  const max = Math.max(...levels)

  const variance =
    levels.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / levels.length

  const depth = Math.min(100, variance * 1.5)

  const execution =
    (levels.filter((l) => l >= 70).length / levels.length) * 100

  const foresight =
    (levels.reduce((a, b) => a + Math.pow(b / 100, 2), 0) /
      levels.length) *
    100

  // ----------------------------
  // 2️⃣ Radar values (aligned with axes)
  // ----------------------------
  const radarValues = [
    avg,        // Foundations
    execution,  // Execution
    depth,      // Depth
    max,        // Impact
    foresight,  // Foresight
  ]

  // ----------------------------
  // 3️⃣ Polygon points
  // ----------------------------
  const points = radarValues.map((value, i) => {
    const angle = (Math.PI * 2 * i) / axes
    const r = (value / 100) * radius
    return [
      center + Math.cos(angle - Math.PI / 2) * r,
      center + Math.sin(angle - Math.PI / 2) * r,
    ].join(",")
  })

  return (
    <svg width={size} height={size} className="mx-auto overflow-visible">
      {/* Grid */}
      {[20, 40, 60, 80, 100].map((p) => (
        <circle
          key={p}
          cx={center}
          cy={center}
          r={(p / 100) * radius}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
        />
      ))}

      {/* Axes */}
      {RADAR_AXES.map((_, i) => {
        const angle = (Math.PI * 2 * i) / axes
        return (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={center + Math.cos(angle - Math.PI / 2) * radius}
            y2={center + Math.sin(angle - Math.PI / 2) * radius}
            stroke="rgba(255,255,255,0.08)"
          />
        )
      })}

      {/* Radar Shape */}
      <polygon
        points={points.join(" ")}
        fill="url(#grad)"
        stroke="#60a5fa"
        strokeWidth="2"
        className="drop-shadow-[0_0_24px_rgba(96,165,250,0.6)]"
      />

      {/* Labels */}
      {RADAR_AXES.map((label, i) => {
        const angle = (Math.PI * 2 * i) / axes
        const r = radius + 22
        return (
          <text
            key={label}
            x={center + Math.cos(angle - Math.PI / 2) * r}
            y={center + Math.sin(angle - Math.PI / 2) * r}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-white/60 text-[11px]"
          >
            {label}
          </text>
        )
      })}

      <defs>
        <linearGradient id="grad">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
  )
}
