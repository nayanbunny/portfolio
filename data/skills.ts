export type Skill = {
  name: string
  level: number // 0 - 100
}
  
export type SkillCategory = {
  id: string
  label: string
  skills: Skill[]
}
  
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    label: "Front-End",
    skills: [
      { name: "Core Web (HTML / CSS / JS)", level: 90 },
      { name: "Angular", level: 80 },
      { name: "React / Next.js", level: 65 },
      { name: "UI Systems & Styling", level: 85 },
      { name: "UX & Interaction", level: 80 },
      { name: "Frontend Best Practices", level: 90 },
    ],
  },
  {
    id: "backend",
    label: "Back-End",
    skills: [
      { name: ".NET / C#", level: 85 },
      { name: "Python", level: 90 },
      { name: "Low-Level & JVM", level: 55 },
      { name: "Data Stores & Databases", level: 85 },
      { name: "Microservices", level: 85 },
      { name: "APIs & Integration", level: 90 },
      { name: "System Design", level: 90 },
      { name: "Automation & Scripting", level: 75 },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    skills: [
      { name: "Microsoft Azure", level: 90 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 75 },
      { name: "DevOps Practices", level: 85 },
      { name: "CI/CD Automation", level: 80 },
      { name: "Solution Architecture", level: 85 },
      { name: "Cloud Operations", level: 80 },
    ],
  },
  {
    id: "ai",
    label: "AI & Emerging Tech",
    skills: [
      { name: "Generative AI", level: 80 },
      { name: "Machine Learning", level: 75 },
      { name: "AR / VR", level: 65 },
      { name: "Quantum Computing", level: 20 },
      { name: "Responsible Innovation", level: 75 },
    ],
  },
  {
    id: "security",
    label: "Security & Standards",
    skills: [
      { name: "Cybersecurity", level: 65 },
      { name: "Agile Methodologies", level: 75 },
      { name: "Architecture Governance", level: 80 },
    ],
  },
  {
    id: "delivery",
    label: "Delivery & Operations",
    skills: [
      { name: "Creative Media", level: 70 },
      { name: "Data Analytics", level: 80 },
      { name: "Testing & QA", level: 75 },
      { name: "Source Control", level: 85 },
      { name: "Project Management", level: 80 },
      { name: "Team Communication", level: 90 },
      { name: "Productivity Systems", level: 85 },
    ],
  },
  {
    id: "leadership",
    label: "Leadership & Impact",
    skills: [
      { name: "Leadership & Mentoring", level: 85 },
      { name: "Decision Making", level: 90 },
      { name: "Adaptability & Learning", level: 95 },
      { name: "Collaboration", level: 90 },
      { name: "Strategic Thinking", level: 90 },
    ],
  },
]
  
export const RADAR_AXES = [
  "Foundations",
  "Execution",
  "Depth",
  "Impact",
  "Foresight",
]
  