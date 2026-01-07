'use client'

import { motion, useAnimationFrame } from 'framer-motion'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface Project {
  id: string
  year: string
  title: string
  description: string,
  role: string,
  client: string,
  location: string,
  links?: ProjectLink[]
}

export interface ProjectLink {
  label: string,
  url: string
}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export function ProjectsTimeline({
  projects,
  baseSpeed = 47,
}: {
  projects: Project[]
  baseSpeed?: number
}) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const [paused, setPaused] = useState(false)
  const [cursor, setCursor] = useState(0) // -1 → +1
  const [x, setX] = useState(0)
  const [loopWidth, setLoopWidth] = useState(0)

  const data = [...projects, ...projects]

  /* ---------------------------- Measure loop ----------------------------- */

  useLayoutEffect(() => {
    if (!trackRef.current) return
    setLoopWidth(trackRef.current.scrollWidth / 2)
  }, [projects])

  /* --------------------------- Cursor tracking --------------------------- */

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const rect = viewportRef.current?.getBoundingClientRect()
      if (!rect) return
      const ratio = (e.clientX - rect.left) / rect.width
      setCursor(Math.max(-1, Math.min(1, ratio * 2 - 1)))
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  /* ---------------------------- Animation loop --------------------------- */

  useAnimationFrame((_, delta) => {
    if (paused || !loopWidth) return

    const velocity =
  Math.abs(cursor) < 0.05
    ? baseSpeed * 0.5
    : cursor * baseSpeed * 2.4


    setX((prev) => {
      let next = prev - velocity * (delta / 1000)
      if (next <= -loopWidth) next += loopWidth
      if (next >= 0) next -= loopWidth
      return next
    })
  })

  /* ---------------------------------------------------------------------- */

  return (
    <section
    ref={viewportRef}
    className="
      relative w-full overflow-hidden py-75
      [mask-image:linear-gradient(to_right,transparent,rgba(0,0,0,1)_10%,rgba(0,0,0,1)_90%,transparent)]
      [-webkit-mask-image:linear-gradient(to_right,transparent,rgba(0,0,0,1)_10%,rgba(0,0,0,1)_90%,transparent)]"
      
    >
      {/* TIMELINE RAIL (FORCED VISIBLE) */}
      <div
        className="absolute left-0 right-0 top-1/2 mt-[-3] h-[4px] z-10"
        style={{ backgroundColor: '#2a2a2a' }}
      />

      <motion.div
        ref={trackRef}
        style={{ x }}
        className="relative z-20 flex w-max gap-24 sm:gap-32 md:gap-40 px-16 sm:px-24 md:px-40"
      >
        {data.map((p, i) => (
          <TimelineNode
            key={`${p.id}-${i}`}
            project={p}
            index={i}
            onHover={setPaused}
          />
        ))}
      </motion.div>
    </section>
  )
}


function TimelineNode({
    project,
    index,
    onHover,
  }: {
    project: { year: string; title: string; description: string, role: string, client: string, location: string, links?: ProjectLink[] }
    index: number
    onHover: (v: boolean) => void
  }) {
    const [open, setOpen] = useState(false)
    const top = index % 2 === 0
  
    return (
      <div className="relative flex w-44 sm:w-48 md:w-52 flex-col items-center">
        {/* DOT INDICATOR */}
        <div
          className="absolute top-1/2 z-30 h-3 w-3 -translate-y-1/2 rounded-full"
          style={{
            backgroundColor: '#00d3ee',
            boxShadow: '0 0 12px #00d3ee',
          }}
        />
  
        {/* FOLDER (REAL SHAPE) */}
        <motion.div
          onHoverStart={() => onHover(true)}
          onHoverEnd={() => onHover(false)}
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.05 }}
          className={`relative z-40 cursor-pointer ${
            top ? 'mb-31' : 'mt-50'
          }`}
        >
          {/* Back */}
          <div className="absolute inset-0 rounded-3xl bg-[#00a3bb]/30" />

          {/* Tab */}
          <div className="absolute -top-7 left-5 h-7 w-22 rounded-t-xl bg-[#00a3bb]/50">
            <p className="text-xs text-teal-100 text-center pt-2 font-actions font-bold">
              {project.year}
            </p>
          </div>

          {/* FRONT FLAP */}
          <motion.div
            initial={false}
            animate={open ? "open" : "closed"}
            variants={{
              closed: {
                rotateX: 0,
                y: 0,
                x: 0,
              },
              open: {
                rotateX: 28,     // stronger tilt
                y: 7,           // counter-lift to keep bottom aligned
                x: 5
              },
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 20,
            }}
            style={{
              transformOrigin: "bottom center",
            }}
            className=" relative inset-0 z-20 w-50 h-28 -translate-x-1 -translate-y-1 rounded-3xl
              border border-[#008080]/60 bg-[#008080]/55 [transform-style:preserve-3d]
            "
          >
            <div className="flex h-full flex-col justify-center px-4 py-4">
              {/* <p className="text-xs text-teal-100 font-actions font-bold">
                {project.year}
              </p> */}
              <p className="text-sm text-white text-center font-headings">
                {project.title}
              </p>
            </div>
          </motion.div>
        </motion.div>
  
        {/* HOLOGRAM BEAM */}
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 105, opacity: 1 }}
            transition={{ duration: 0.25, ease: 'easeInOut'}}
            className="absolute left-1/2 z-20 w-[3px] -translate-x-1/2 pointer-events-none blur-[2px]"
            style={{
              background:
                top ? 'linear-gradient(to top, #00d3ee, transparent)' : 'linear-gradient(to bottom, #00d3ee, transparent)',
              top: top ? '50%' : undefined,
              bottom: !top ? '50%' : undefined,
              boxShadow: '0 0 20px #00d3ee',
              transformOrigin: top ? 'top center' : 'bottom center',
            }}
          >
            </motion.div>
        )}
  
        {/* HOLOGRAM CARD */}
        <motion.div
          initial={false}
          animate={{
            opacity: open ? 1 : 0,
            y: open ? 0 : top ? -10 : 10,
            pointerEvents: open ? 'auto' : 'none',
          }}
          className={`absolute z-50 w-80 md:w-100 rounded-4xl p-7 ${
            top ? 'top-5/6' : 'bottom-5/6'
          }`}
          style={{
            background:
              top 
              ? 'linear-gradient(180deg, rgba(0,163,187,0.3), rgba(0,163,187,0.2))'
              : 'linear-gradient(0deg, rgba(0,163,187,0.3), rgba(0,163,187,0.2))',
            boxShadow: '0 0 40px rgba(0,163,187,0.25)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Scanlines */}
          <div className="pointer-events-none absolute inset-0 opacity-20 bg-[length:100%_4px]
            bg-[linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)]" 
          />

          <div className="flex items-center text-center font-headings font-semibold justify-center">
            {project.title}
          </div>
            
          <div className="grid grid-cols-2 gap-4 my-3">
            <div className="flex items-center justify-center font-actions text-md text-white leading-relaxed">
              {project.role}
            </div>
            <div className="flex items-center justify-center font-actions text-md text-white leading-relaxed">
              {project.client}
            </div>
          </div>

          <div className="text-sm text-white leading-relaxed my-3">
            {project.description}
          </div>

          {project.links && project.links.length > 0 && (
            <div className="flex items-center font-actions justify-center gap-2 mt-3">
              {project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white no-underline px-3 py-1 rounded-2xl bg-teal-800 hover:bg-teal-700"
                >
                  {link.label || 'Link'}
                </a>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    )
  }
  