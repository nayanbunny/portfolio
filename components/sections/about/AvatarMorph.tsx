'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type Particle = {
  left: string
  top: string
  driftX: number
  duration: number
  delay: number
}


// components/sections/about/AvatarMorph.tsx
export default function AvatarMorph() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 10 }).map((_, i) => ({
        left: `${15 + Math.random() * 70}%`,
        top: `${15 + Math.random() * 70}%`,
        driftX: Math.random() * 20 - 10,
        duration: 3 + Math.random() * 2,
        delay: i * 0.3,
      }))
    )
  }, [])

  return (
    <div className="relative aspect-square w-[22rem] sm:w-[24rem] md:w-[24rem] lg:w-[28rem]">
      <div className="absolute inset-0 flex items-center justify-center">

        {/* BLOB */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          animate={{
            borderRadius: [
              '60% 40% 30% 70% / 60% 30% 70% 40%',
              '30% 60% 70% 40% / 50% 60% 30% 60%',
              '40% 60% 60% 40% / 70% 30% 60% 40%',
              '60% 40% 30% 70% / 60% 30% 70% 40%',
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-400 to-emerald-400 opacity-60"
            animate={{ scale: [1, 1.08, 0.96, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-teal-400 to-emerald-500 opacity-45"
            animate={{ rotate: [0, 45, 90, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* PARTICLES */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {particles.map((p, i) => (
            <motion.span
              key={i}
              className="absolute h-2 w-2 rounded-full bg-teal-400"
              style={{ left: p.left, top: p.top }}
              animate={{
                y: [0, -30, 0],
                x: [0, p.driftX, 0],
                opacity: [0.2, 0.9, 0.2],
                scale: [1, 1.6, 1],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
              }}
            />
          ))}
        </div>

        {/* AVATAR */}
        <motion.div
          className="relative z-10 aspect-square w-[78%] overflow-hidden bg-gradient-to-br from-teal-200 via-stone-200 to-amber-100"
          animate={{
            borderRadius: [
              '55% 45% 35% 65% / 55% 35% 65% 45%',
              '35% 65% 65% 35% / 45% 55% 35% 65%',
              '45% 55% 55% 45% / 65% 35% 55% 45%',
              '55% 45% 35% 65% / 55% 35% 65% 45%',
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img
            src="/images/user.png"
            alt="Professional Portrait"
            className="h-full w-full object-cover"
          />
        </motion.div>

      </div>
    </div>
  )
}
