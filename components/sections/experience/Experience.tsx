"use client";

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Container from '@/components/layouts/Container'
import Section from '@/components/layouts/Section'

import { CertificationsContent } from './CertificationsContent'
import { RecognitionsContent } from './RecognitionsContent'
import { WorkContent } from './WorkContent'

/* ============================
   Tabs Configuration
   ============================ */
const TABS = ['Work', 'Certifications', 'Recognitions'] as const
type Tab = (typeof TABS)[number]

export default function Experience() {
  const [activeTab, setActiveTab] = useState<Tab>('Work')

  return (
    <Section id="experience" className="relative overflow-hidden">
      <Container className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10">
        {/* Section Grid */}
        <div className="grid gap-12 items-start">
          {/* Title */}
          <h2 className="text-center font-headings font-semibold tracking-tight text-5xl lg:text-6xl">
            Experience
          </h2>

          {/* Tabs */}
          <div className="grid place-items-center">
            <div className="relative grid auto-cols-max grid-flow-col gap-2 rounded-full p-2">
              {TABS.map((tab) => {
                const isActive = activeTab === tab

                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="relative rounded-full px-5 py-2 font-actions text-sm font-medium glass focus:outline-none"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-pill"
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 30,
                        }}
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-teal-700"
                      />
                    )}

                    <span
                      className={`relative z-10 text-base ${
                        isActive
                          ? 'font-semibold text-white'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {tab}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Content */}
          <div className="relative min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-6"
              >
                {activeTab === 'Work' && <WorkContent />}
                {activeTab === 'Certifications' && <CertificationsContent />}
                {activeTab === 'Recognitions' && <RecognitionsContent />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  )
}
