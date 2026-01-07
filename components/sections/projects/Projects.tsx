"use client";

import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import { ProjectsTimeline } from "./ProjectsTimeline";
import { projects } from "@/data/projects";


// components/sections/projects/Projects.tsx
export default function Projects() {
  return (
    <Section id="projects"
      className="w-screen flex flex-col md:flex-row items-start justify-center relative overflow-hidden">
      <Container className="grid grid-rows-[auto_1fr] gap-6 place-items-center py-20 px-10">

          <h1 className="text-6xl font-semibold font-headings">Projects</h1>
          <ProjectsTimeline projects={projects} />
      </Container>
    </Section>
  );
}