"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Entry =
  | { type: "command"; value: string }
  | { type: "output"; value: React.ReactNode };

type Phase = "typing" | "output" | "idle";

/* 3 commands — last one has NO output */
const COMMANDS = ["whoami", "cat skills", ""] as const;

const skills = [
  "System Design",
  "Microservices",
  "Microsoft Azure",
  "API Development",
  "CI/CD Pipelines",
  "DevOps & Automation",
  "Monitoring & Observability",
  "Cost Optimization",
  "Generative AI",
];

export default function Terminal() {
  const [history, setHistory] = useState<Entry[]>([]);
  const [buffer, setBuffer] = useState("");
  const [cmdIndex, setCmdIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [cursorVisible, setCursorVisible] = useState(true);

  const command = COMMANDS[cmdIndex];
  const executed = useRef(false);

  /* Cursor blink */
  useEffect(() => {
    const i = setInterval(() => setCursorVisible(v => !v), 500);
    return () => clearInterval(i);
  }, []);

  /* TYPE COMMAND */
  useEffect(() => {
    if (phase !== "typing") return;

    executed.current = false;
    let i = 0;
    setBuffer("");

    const interval = setInterval(() => {
      if (i < command.length) {
        setBuffer(command.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);

        if (command) {
          setHistory(h => [...h, { type: "command", value: command }]);
        }

        setBuffer("");
        setPhase("output");
      }
    }, 90);

    return () => clearInterval(interval);
  }, [phase, command]);

  /* EXECUTE OUTPUT (ONLY IF NEEDED) */
  useEffect(() => {
    if (phase !== "output" || executed.current) return;
    executed.current = true;

    /* whoami */
    if (command === "whoami") {
      setHistory(h => [
        ...h,
        {
          type: "output",
          value: <WhoAmI onDone={() => setPhase("idle")} />,
        },
      ]);
      return;
    }

    /* cat skills */
    if (command === "cat skills") {
      setHistory(h => [
        ...h,
        {
          type: "output",
          value: (
            <TypingSkills
              skills={skills}
              onDone={() => setPhase("idle")}
            />
          ),
        },
      ]);
      return;
    }

    /* NO OUTPUT COMMAND */
    setPhase("idle");
  }, [phase, command]);

  /* MOVE TO NEXT COMMAND */
  useEffect(() => {
    if (phase !== "idle") return;

    if (cmdIndex < COMMANDS.length - 1) {
      const t = setTimeout(() => {
        setCmdIndex(i => i + 1);
        setPhase("typing");
      }, 400);

      return () => clearTimeout(t);
    }
  }, [phase, cmdIndex]);

  const sessionDone =
    cmdIndex === COMMANDS.length - 1 && phase === "idle";

  return (
    <div className="flex justify-center origin-bottom-left rotate-x-12 rotate-y-12">
      <motion.div
        className="w-[90vw] lg:w-4/5"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <div className="neumorphic-glass backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
          {/* Title bar */}
          <div className="px-4 py-3 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-600" />
            <div className="w-3 h-3 rounded-full bg-yellow-600" />
            <div className="w-3 h-3 rounded-full bg-green-600" />
          </div>

          {/* Terminal */}
          <div className="p-6 min-h-[400px] text-lg space-y-4">
            {history.map((entry, i) =>
              entry.type === "command" ? (
                <div key={i} className="flex gap-2">
                  <span className="text-green-400">➜</span>
                  <span className="text-teal-400">~</span>
                  <span>{entry.value}</span>
                </div>
              ) : (
                <div key={i} className="ml-6">{entry.value}</div>
              )
            )}

            {/* Final prompt with blinking cursor */}
            {sessionDone && (
              <div className="flex gap-2 pt-2">
                <span className="text-green-400">➜</span>
                <span className="text-teal-400">~</span>
                {cursorVisible && (
                  <span className="w-2 h-5 bg-green-400 inline-block" />
                )}
              </div>
            )}

            {/* Active typing */}
            {!sessionDone && (
              <div className="flex gap-2 pt-2">
                <span className="text-green-400">➜</span>
                <span className="text-teal-400">~</span>
                <span>{buffer}</span>
                {phase === "typing" && cursorVisible && (
                  <span className="w-2 h-5 bg-green-400 inline-block" />
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* OUTPUT COMPONENTS */

function WhoAmI({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-2"
    >
      <div className="text-4xl md:text-5xl font-bold 
        bg-gradient-to-br from-teal-400 via-cyan-400 to-teal-700 
        bg-clip-text text-transparent"
      >
        Nayan
      </div>
      {/* <div className="text-2xl text-teal-400">
        Cloud Architect
      </div> */}
    </motion.div>
  );
}

function TypingSkills({
  skills,
  onDone,
}: {
  skills: string[];
  onDone: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState<string[]>([]);

  useEffect(() => {
    if (index >= skills.length) {
      const t = setTimeout(onDone, 400);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setVisible(v => [...v, skills[index]]);
      setIndex(i => i + 1);
    }, 220);

    return () => clearTimeout(t);
  }, [index, skills, onDone]);

  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {visible.map(skill => (
        <span
          key={skill}
          className="px-3 py-1.5 bg-transparent
            border border-cyan-400/50 rounded-full 
            text-cyan-400 text-xs md:text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
