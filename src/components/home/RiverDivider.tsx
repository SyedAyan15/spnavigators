"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Centre line of the band; the area below it is filled with the page colour so the hero flows into the next section.
const RIVER = "M-10 70 C 130 22, 230 30, 330 62 S 520 110, 650 72 S 860 24, 990 62 S 1180 106, 1290 70 S 1360 52, 1380 56";
const ease = [0.65, 0, 0.35, 1] as const;

/**
 * A flowing river band that closes the homepage hero, echoing the golden path in the logo.
 * The circle at the end is the dot-art panel from the Support Plan Navigators logo itself.
 */
export function RiverDivider() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10" aria-hidden>
      <div className="relative">
        <svg viewBox="0 0 1440 150" className="block h-auto w-full" preserveAspectRatio="xMidYMax meet">
          <path d={`${RIVER} L 1450 56 L 1450 150 L -10 150 Z`} fill="var(--color-cream)" />
          <motion.path
            d={RIVER}
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth="3"
            strokeLinecap="round"
            transform="translate(0 30)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.6, ease }}
          />
          <motion.path
            d={RIVER}
            fill="none"
            stroke="var(--color-teal)"
            strokeWidth="38"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, delay: 0.3, ease }}
          />
          <motion.path
            d={RIVER}
            fill="none"
            stroke="#ffffff"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="0 15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          />
        </svg>
        <motion.div
          className="absolute right-[1.5%] bottom-[18%] aspect-square w-[9%] min-w-12 rounded-full bg-white p-[0.35%] shadow-lg"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 1.9, type: "spring", bounce: 0.4 }}
        >
          <span className="absolute -inset-[12%] rounded-full border-2 border-dashed border-teal/50" />
          <span className="relative block h-full w-full">
            <Image src="/images/brand-dot-art.png" alt="" fill sizes="10vw" className="rounded-full object-cover" />
          </span>
        </motion.div>
      </div>
    </div>
  );
}
