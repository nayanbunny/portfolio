// components/ui/Icon.tsx
import type { IconName } from "@/data/navigation";
import { Home, Briefcase, Layers, Cpu, User } from "lucide-react";

const icons: Record<IconName, React.ElementType> = {
  home: Home,
  briefcase: Briefcase,
  layers: Layers,
  cpu: Cpu,
  user: User,
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Component = icons[name];
  return <Component className={className} aria-hidden="true" />;
}