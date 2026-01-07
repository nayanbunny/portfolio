// components/Footer.tsx
import { motion } from "framer-motion";


export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full h-[30vh] flex flex-col justify-center items-center
                 bg-gradient-to-b from-black-400/20 via-stale-400/20 to-cyan-400/20
                 shadow-2xl px-8 opacity-50"
    >
      <p className="text-white/80 text-lg select-none text-center">
        © {new Date().getFullYear()} Nayan. All rights reserved.
      </p>
    </motion.footer>
  );
}
