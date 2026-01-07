'use client';


// app/page.tsx
import Section from "@/components/layouts/Section";
import Container from "@/components/layouts/Container";

import Home from "@/components/sections/home/Home";
import Experience from "@/components/sections/experience/Experience";
import Projects from "@/components/sections/projects/Projects";
import Skills from "@/components/sections/skills/Skills";
import About from "@/components/sections/about/About";
import { DotGridCursorGlow } from "@/components/backgrounds/DotGridCursorGlow";
import Footer from "@/components/layouts/Footer";
import { ShootingStars } from "@/components/effects/ShootingStars";
import { StarsBackground } from "@/components/effects/StarBackground";


export default function Page() {
  return (
    <main className="snap-mandatory h-screen overflow-y-scroll scroll-smooth scroll-hidden">
      <DotGridCursorGlow/>
      <StarsBackground />
      <ShootingStars />

      <Section id="home">
        <Container>
          <Home />
        </Container>
      </Section>

      <Section id="experience">
        <Container>
          <Experience />
        </Container>
      </Section>

      <Section id="projects">
        <Container>
          <Projects />
        </Container>
      </Section>

      <Section id="skills">
        <Container>
          <Skills />
        </Container>
      </Section>

      <Section id="about">
        <Container>
          <About />
        </Container>
      </Section>
      
      <Footer />
    </main>
  );
}
