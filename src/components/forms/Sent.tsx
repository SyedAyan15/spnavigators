"use client";

import { motion } from "framer-motion";

export function Sent({ title, text, onReset }: { title: string; text: string; onReset: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-10 text-center" role="status">
      <svg viewBox="0 0 100 100" className="mx-auto h-28 w-28" aria-hidden>
        <motion.circle cx="50" cy="50" r="44" fill="none" stroke="#5d8b6c" strokeWidth="6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
        <motion.path
          d="M30 52 L45 66 L72 38"
          fill="none"
          stroke="#f2a33a"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />
      </svg>
      <h3 className="mt-6 font-display text-3xl font-semibold text-navy">{title}</h3>
      <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted">{text}</p>
      <button type="button" onClick={onReset} className="mt-6 font-semibold text-teal underline underline-offset-4">
        Send another
      </button>
    </motion.div>
  );
}
