// data/socials.ts
import { IconType } from "react-icons";
import { Github } from "lucide-react";
import { FaStackOverflow, FaMicrosoft } from "react-icons/fa";

/* -------------------------------------------------------------------------- */
/* Social Item Interace                                                       */
/* -------------------------------------------------------------------------- */
export type SocialItem = {
  id: string;
  label: string;
  href: string;
  className: string;
  iconClassName: string;
  icon: IconType;
};


/* -------------------------------------------------------------------------- */
/* Social Items Content                                                       */
/* -------------------------------------------------------------------------- */
export const socials: SocialItem[] = [
  { 
    id: "github", 
    label: "GitHub", 
    href: "https://github.com/nayanbunny", 
    className: "text-slate-300 group-hover:text-teal-500",
    iconClassName: "text-slate-300 group-hover:text-teal-500",
    icon: Github, 
  },
  { 
    id: "stack-overflow", 
    label: "Stack Overflow", 
    href: "https://stackoverflow.com/users/9871073/nayan", 
    className: "text-slate-300 hover:border-teal-500",
    iconClassName: "text-slate-300 group-hover:text-teal-500",
    icon: FaStackOverflow,
  },
  { 
    id: "vs-extensions", 
    label: "VS Code Extensions",  
    href: "https://marketplace.visualstudio.com/publishers/nayan", 
    className: "text-slate-300 hover:border-teal-500",
    iconClassName: "text-slate-300 group-hover:text-teal-500",
    icon: FaMicrosoft,
  },
];