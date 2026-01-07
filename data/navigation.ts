// data/navigation.ts
export type IconName = "home" | "briefcase" | "layers" | "cpu" | "user";

export type NavigationItem = {
  id: string;
  label: string;
  icon: IconName;
};

export const navigation: NavigationItem[] = [
  { id: "home", label: "Home", icon: "home" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "projects", label: "Projects", icon: "layers" },
  { id: "skills", label: "Skills", icon: "cpu" },
  { id: "about", label: "About", icon: "user" },
];