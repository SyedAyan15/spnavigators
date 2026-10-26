"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export type JourneyStep = { title: string; text: string; tag?: string };

export function Journey({ steps }: { steps: JourneyStep[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <ol ref={ref} className="relative mx-auto max-w-5xl">
      {/* Track + animated fill */}
      <div className="absolute top-0 bottom-0 left-6 w-1.5 -translate-x-1/2 rounded-full bg-navy/10 md:left-1/2" aria-hidden />
      <motion.div
        className="absolute top-0 bottom-0 left-6 w-1.5 origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-teal via-ochre to-gold md:left-1/2"
        style={{ scaleY: progress }}
        aria-hidden
      />

      {steps.map((s, i) => {
        const right = i % 2 === 1;
        return (
          <li key={s.title} className="relative grid pb-14 last:pb-0 md:grid-cols-2 md:gap-16">
            <motion.span
              initial={{ scale: 0.4, backgroundColor: "#f5f9fc" }}
              whileInView={{ scale: 1, backgroundColor: "#0d3157" }}
              viewport={{ once: true, margin: "-35% 0px -35% 0px" }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="absolute top-2 left-6 z-10 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full font-display text-lg font-bold text-white ring-8 ring-cream md:left-1/2"
            >
              {i + 1}
            </motion.span>
            <motion.div
              initial={{ opacity: 0, x: right ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`ml-16 rounded-3xl bg-white p-6 shadow-[0_25px_60px_-35px_rgba(13,49,87,0.45)] ring-1 ring-navy/5 sm:p-8 md:ml-0 ${
                right ? "md:col-start-2" : "md:col-start-1 md:text-right"
              }`}
            >
              {s.tag && <span className="text-xs font-bold tracking-[0.18em] text-gold uppercase">{s.tag}</span>}
              <h3 className="mt-2 font-display text-2xl font-semibold text-navy">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
            </motion.div>
          </li>
        );
      })}
    </ol>
  );
}
