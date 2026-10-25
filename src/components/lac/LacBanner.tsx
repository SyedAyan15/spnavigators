"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Soft cloud: a pill with three bumps along the top. */
function Cloud({ children, tone, className = "", delay = 0 }: { children: ReactNode; tone: string; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay, ease }}
      className={`absolute ${className}`}
    >
      <div className="relative">
        <span className={`absolute -top-[18%] left-[14%] h-[55%] w-[34%] rounded-full ${tone}`} />
        <span className={`absolute -top-[30%] left-[38%] h-[70%] w-[38%] rounded-full ${tone}`} />
        <span className={`absolute -top-[12%] right-[10%] h-[50%] w-[28%] rounded-full ${tone}`} />
        <div className={`relative rounded-[999px] px-5 py-3 text-center sm:px-9 sm:py-5 ${tone}`}>{children}</div>
      </div>
    </motion.div>
  );
}

/** Question bubble with two small trailing circles. */
function Thought({ text, className, tail, delay }: { text: string; className: string; tail: "left" | "right" | "down"; delay: number }) {
  const tailPos = {
    left: "-bottom-3 left-[18%]",
    right: "-bottom-3 right-[18%]",
    down: "-bottom-3 left-1/2 -translate-x-1/2",
  }[tail];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay, type: "spring", bounce: 0.45 }}
      className={`absolute z-20 ${className}`}
    >
      <div className="animate-float" style={{ animationDelay: `${delay}s`, animationDuration: "6s" }}>
        <div className="relative rounded-[50%] bg-[#fdf3dc] px-3 py-2 text-center shadow-[0_15px_30px_-15px_rgba(14,42,77,0.35)] ring-1 ring-gold/25 sm:px-5 sm:py-3 lg:px-7 lg:py-5">
          <span className="block font-display text-[0.8rem] leading-tight font-bold text-navy sm:text-base lg:text-xl">{text}</span>
          <span className={`absolute flex items-end gap-1 ${tailPos}`}>
            <span className="h-3 w-3 rounded-full bg-[#fdf3dc] ring-1 ring-gold/25" />
            <span className="h-2 w-2 rounded-full bg-[#fdf3dc] ring-1 ring-gold/25" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function Sparks({ className, flip = false }: { className: string; flip?: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 40 40"
      className={`absolute hidden h-8 w-8 text-gold sm:block lg:h-10 lg:w-10 ${className}`}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: [0, 1.2, 1] }}
      transition={{ duration: 0.6, delay: 1.4 }}
      aria-hidden
    >
      <g stroke="currentColor" strokeWidth="4" strokeLinecap="round">
        <path d="M6 20h10" />
        <path d="M9 7l7 7" />
        <path d="M9 33l7-7" />
      </g>
    </motion.svg>
  );
}

function QuestionMark({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.span
      className={`absolute font-display font-bold text-[#e98a7a] ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: [0, -10, 0], rotate: [0, 8, 0] }}
      transition={{ opacity: { delay }, y: { duration: 3.5, repeat: Infinity, delay }, rotate: { duration: 3.5, repeat: Infinity, delay } }}
      aria-hidden
    >
      ?
    </motion.span>
  );
}

const swing = (delay: number) => ({
  initial: { opacity: 0, scale: 0.4 },
  animate: { opacity: 1, scale: 1, rotate: [0, -2.5, 0, 2, 0] },
  transition: {
    opacity: { delay, duration: 0.4 },
    scale: { delay, type: "spring" as const, bounce: 0.5 },
    rotate: { delay: delay + 0.6, duration: 5, repeat: Infinity, ease: "easeInOut" as const },
  },
  style: { transformOrigin: "150px 0px", transformBox: "view-box" as const },
});

/** Signpost pointing to the three roles, in place of a person or character. */
function Signpost() {
  return (
    <svg viewBox="0 0 300 420" className="h-auto w-full drop-shadow-[0_20px_30px_rgba(14,42,77,0.18)]" aria-hidden>
      <ellipse cx="150" cy="408" rx="96" ry="10" fill="#0e2a4d" opacity="0.12" />
      {/* leaves at the base, echoing the logo */}
      <path d="M128 404 C 92 390, 82 352, 96 326 C 122 344, 134 372, 128 404 Z" fill="#5d8b6c" />
      <path d="M172 404 C 210 392, 222 360, 210 330 C 182 346, 168 374, 172 404 Z" fill="#f2a33a" />
      <path d="M112 404 C 70 404, 50 384, 46 364 C 76 362, 104 378, 112 404 Z" fill="#b4cfa8" />
      {/* post */}
      <rect x="139" y="58" width="22" height="350" rx="9" fill="#0e2a4d" />
      <rect x="143" y="58" width="5" height="350" rx="2.5" fill="#ffffff" opacity="0.12" />

      <motion.g {...swing(0.7)}>
        <path d="M150 100 H56 L24 132 L56 164 H150 Z" fill="#f9dcd5" stroke="#eab3a8" strokeWidth="2" strokeLinejoin="round" />
        <text x="92" y="142" textAnchor="middle" fontSize="28" fontWeight="800" fill="#b2453a" className="font-display">LAC</text>
      </motion.g>
      <motion.g {...swing(0.9)}>
        <path d="M150 182 H244 L276 216 L244 250 H150 Z" fill="#d4e8ef" stroke="#a9cbd8" strokeWidth="2" strokeLinejoin="round" />
        <text x="207" y="211" textAnchor="middle" fontSize="17" fontWeight="800" fill="#0e2a4d" className="font-display">Support</text>
        <text x="207" y="232" textAnchor="middle" fontSize="17" fontWeight="800" fill="#0e2a4d" className="font-display">Coordinator</text>
      </motion.g>
      <motion.g {...swing(1.1)}>
        <path d="M150 268 H62 L36 292 L62 316 H150 Z" fill="#fde7a6" stroke="#f2c86a" strokeWidth="2" strokeLinejoin="round" />
        <text x="94" y="297" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="#7a5410" className="font-display">Plan Manager</text>
      </motion.g>

      {/* nails */}
      {[132, 216, 292].map((y) => (
        <circle key={y} cx="150" cy={y} r="4" fill="#f9cd78" />
      ))}
      {/* cap */}
      <circle cx="150" cy="44" r="32" fill="#f2a33a" />
      <circle cx="150" cy="44" r="32" fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="3" />
      <text x="150" y="58" textAnchor="middle" fontSize="40" fontWeight="900" fill="#0e2a4d" className="font-display">?</text>
    </svg>
  );
}

export function LacBanner() {
  return (
    <figure className="relative mx-auto w-full max-w-6xl">
      <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#fbeee6] via-cream to-[#e9f1ee] shadow-[0_50px_120px_-60px_rgba(14,42,77,0.6)] ring-1 ring-navy/5 sm:aspect-[16/10] sm:rounded-[2.5rem] lg:aspect-[16/8.5]">
        {/* Soft background shapes */}
        <div className="absolute top-[8%] left-[4%] h-[30%] w-[40%] rounded-full bg-[#f8d9d2]/50 blur-3xl" />
        <div className="absolute top-[6%] right-[4%] h-[30%] w-[40%] rounded-full bg-teal-light/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[45%] w-[60%] -translate-x-1/2 rounded-full bg-gold-light/30 blur-3xl" />

        {/* Titles */}
        <Cloud tone="bg-[#f9dcd5]" className="top-[7%] left-[2%] w-[47%] sm:top-[9%] sm:left-[4%] sm:w-[38%] lg:w-[36%]" delay={0.1}>
          <span className="block font-display text-lg leading-[1.05] font-bold text-[#b2453a] sm:text-3xl lg:text-5xl">
            Local Area Coordinator
          </span>
          <span className="mt-1 block font-display text-base font-bold text-[#b2453a] sm:text-2xl lg:text-3xl">(LAC)</span>
        </Cloud>
        <Cloud tone="bg-[#d4e8ef]" className="top-[9%] right-[2%] w-[45%] sm:top-[9%] sm:right-[4%] sm:w-[36%] lg:w-[34%]" delay={0.25}>
          <span className="block font-display text-lg leading-[1.05] font-bold text-navy sm:text-3xl lg:text-5xl">Support Coordinator</span>
        </Cloud>

        <Sparks className="top-[15%] left-[1.5%]" />
        <Sparks className="top-[14%] right-[1%]" flip />

        {/* VS */}
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring", bounce: 0.5 }}
          className="absolute top-[18%] left-1/2 z-10 -translate-x-1/2 sm:top-[7%]"
        >
          <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#fde7a6] font-display text-xl font-black text-navy shadow-lg sm:h-20 sm:w-20 sm:text-3xl lg:h-24 lg:w-24 lg:text-4xl">
            <span className="absolute inset-[-10%] animate-spin-slow rounded-full border-4 border-dashed border-gold/50" />
            VS
          </span>
        </motion.div>

        {/* A signpost: which way to go? */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease }}
          className="absolute top-[46%] left-1/2 z-10 w-[44%] -translate-x-1/2 sm:top-[42%] sm:w-[23%] lg:top-[38%] lg:w-[22%]"
        >
          <Signpost />
        </motion.div>

        {/* The questions people ask */}
        <Thought text="Do I need both?" tail="down" className="top-[31.5%] left-1/2 -translate-x-1/2 sm:top-[26%] lg:top-[25%]" delay={1} />
        <Thought text="How can I choose?" tail="right" className="top-[48%] left-[2%] max-w-[36%] sm:top-[48%] sm:left-[6%] sm:max-w-none lg:top-[52%] lg:left-[14%]" delay={1.2} />
        <Thought text="What is the difference?" tail="left" className="top-[55%] right-[2%] max-w-[36%] sm:top-[46%] sm:right-[3%] sm:max-w-none lg:top-[50%] lg:right-[12%]" delay={1.4} />

        <QuestionMark className="top-[76%] left-[12%] text-4xl sm:top-[72%] sm:left-[24%] sm:text-5xl lg:left-[27%] lg:text-6xl" delay={1.6} />
        <QuestionMark className="top-[80%] right-[12%] text-4xl sm:top-[70%] sm:right-[24%] sm:text-5xl lg:right-[26%] lg:text-6xl" delay={1.9} />
        <span className="absolute top-[58%] left-[33%] hidden h-3 w-3 rounded-full bg-gold-light sm:block" aria-hidden />
        <span className="absolute top-[64%] right-[33%] hidden h-2.5 w-2.5 rounded-full bg-[#f9dcd5] sm:block" aria-hidden />
      </div>
      <figcaption className="sr-only">
        Local Area Coordinator (LAC) versus Support Coordinator: a signpost points to LAC, Support Coordinator and Plan
        Manager, surrounded by the questions people ask: how can I choose, do I need both, and what is the difference?
      </figcaption>
    </figure>
  );
}
