"use client";

import { motion } from "framer-motion";
import { Compass, MapPinned, Route } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const bubbles = [
  { text: "What’s the difference?", className: "top-[56%] right-0 sm:top-[50%]", delay: 1.1 },
  { text: "Do I need both?", className: "top-[42%] left-1/2 -translate-x-1/2 sm:top-[39%]", delay: 0.9 },
  { text: "Who do I contact?", className: "top-[56%] left-0 sm:top-[50%]", delay: 1.3 },
];

/** Hero illustration: the two roles face each other, with the questions people ask in between. */
export function LacVisual() {
  return (
    <div className="relative mx-auto aspect-[1/1.32] w-full max-w-[34rem] sm:aspect-[1/1.02]" aria-hidden>
      <div className="absolute inset-[6%] rounded-full bg-gradient-to-br from-sage-light/40 via-cream to-teal-light/30" />
      <motion.div
        className="absolute inset-[2%] rounded-full border-2 border-dashed border-navy/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />

      {/* LAC card */}
      <motion.div
        initial={{ opacity: 0, x: -40, rotate: -8 }}
        animate={{ opacity: 1, x: 0, rotate: -5 }}
        transition={{ duration: 0.9, delay: 0.2, ease }}
        className="absolute top-[3%] left-0 w-[45%] rounded-[1.5rem] sm:w-[43%] sm:rounded-[1.75rem] bg-white p-4 shadow-[0_30px_60px_-30px_rgba(14,42,77,0.5)] ring-1 ring-sage/30 sm:p-6"
      >
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sage text-white sm:h-14 sm:w-14">
          <MapPinned className="h-6 w-6 sm:h-7 sm:w-7" />
        </span>
        <p className="mt-3 font-display text-lg leading-tight font-semibold text-navy sm:text-2xl">Local Area Coordinator</p>
        <p className="mt-1 text-[0.7rem] font-bold tracking-[0.14em] text-sage uppercase sm:text-xs">LAC · NDIA partner</p>
      </motion.div>

      {/* SC card */}
      <motion.div
        initial={{ opacity: 0, x: 40, rotate: 8 }}
        animate={{ opacity: 1, x: 0, rotate: 5 }}
        transition={{ duration: 0.9, delay: 0.35, ease }}
        className="absolute top-[3%] right-0 w-[45%] rounded-[1.5rem] sm:w-[43%] sm:rounded-[1.75rem] bg-navy p-4 text-white shadow-[0_30px_60px_-30px_rgba(14,42,77,0.7)] sm:p-6"
      >
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal text-white sm:h-14 sm:w-14">
          <Route className="h-6 w-6 sm:h-7 sm:w-7" />
        </span>
        <p className="mt-3 font-display text-lg leading-tight font-semibold sm:text-2xl">Support Coordinator</p>
        <p className="mt-1 text-[0.7rem] font-bold tracking-[0.14em] text-gold-light uppercase sm:text-xs">Funded in your plan</p>
      </motion.div>

      {/* VS badge */}
      <motion.div
        initial={{ scale: 0, rotate: -120 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.45 }}
        className="absolute top-[11%] left-1/2 z-20 -translate-x-1/2 sm:top-[12%]"
      >
        <span className="relative grid h-14 w-14 place-items-center rounded-full bg-gold font-display text-xl font-bold text-navy shadow-xl ring-[6px] ring-cream sm:h-16 sm:w-16 sm:text-2xl">
          <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" />
          <span className="relative italic">vs</span>
        </span>
      </motion.div>

      {/* Question bubbles */}
      {bubbles.map((b) => (
        <motion.div
          key={b.text}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: b.delay, type: "spring", bounce: 0.4 }}
          className={`absolute z-10 ${b.className}`}
        >
          <div className="animate-float" style={{ animationDelay: `${b.delay}s` }}>
            <span className="relative block rounded-full bg-white px-3 py-2 font-display text-xs font-semibold whitespace-nowrap text-navy italic shadow-lg ring-1 ring-navy/5 sm:px-5 sm:py-2.5 sm:text-base">
              {b.text}
              <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white" />
            </span>
          </div>
        </motion.div>
      ))}

      {/* "You" at the centre of it all */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease }}
        className="absolute bottom-[2%] left-1/2 flex w-[56%] -translate-x-1/2 flex-col items-center"
      >
        <div className="relative grid aspect-square w-[62%] place-items-center rounded-full bg-gradient-to-br from-navy to-teal shadow-2xl ring-8 ring-white">
          <Compass className="h-1/3 w-1/3 text-gold" />
          <motion.span
            className="absolute -top-2 right-[8%] grid h-10 w-10 place-items-center rounded-full bg-gold font-display text-xl font-bold text-navy shadow-lg"
            animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            ?
          </motion.span>
        </div>
        <span className="mt-3 rounded-full bg-white px-5 py-2 text-sm font-bold text-navy shadow-md">You, the participant</span>
      </motion.div>
    </div>
  );
}
