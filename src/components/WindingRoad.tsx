"use client";

import { motion } from "framer-motion";

/** The brand's winding road, drawn on load — echoes the path in the logo. */
export function WindingRoad({ className = "" }: { className?: string }) {
  const ease = [0.65, 0, 0.35, 1] as const;
  return (
    <svg viewBox="0 0 600 400" fill="none" className={className} aria-hidden>
      <motion.path
        d="M-20 380 C 120 330, 160 250, 260 240 S 420 260, 470 160 S 560 40, 640 20"
        stroke="var(--color-navy)"
        strokeWidth="22"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, ease }}
      />
      <motion.path
        d="M-20 380 C 120 330, 160 250, 260 240 S 420 260, 470 160 S 560 40, 640 20"
        stroke="var(--color-cream)"
        strokeWidth="3"
        strokeDasharray="14 16"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.2, delay: 0.3, ease }}
      />
      <motion.path
        d="M-20 330 C 100 300, 150 210, 250 200 S 400 220, 440 130 S 520 20, 620 -10"
        stroke="var(--color-teal)"
        strokeWidth="10"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.4, delay: 0.2, ease }}
      />
      <motion.path
        d="M-20 300 C 90 270, 140 180, 240 170 S 380 190, 420 110"
        stroke="var(--color-ochre-light)"
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.4, delay: 0.4, ease }}
      />
    </svg>
  );
}

export function Leaf({ className = "", color = "var(--color-ochre)", delay = 0 }: { className?: string; color?: string; delay?: number }) {
  return (
    <motion.svg
      viewBox="0 0 60 100"
      className={className}
      aria-hidden
      initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, delay, type: "spring", bounce: 0.4 }}
    >
      <g className="animate-float" style={{ transformOrigin: "30px 95px", animationDelay: `${delay}s` }}>
        <path d="M30 98 C 0 70, 2 25, 30 2 C 58 25, 60 70, 30 98 Z" fill={color} />
        <path d="M30 96 L30 10" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round" />
      </g>
    </motion.svg>
  );
}
