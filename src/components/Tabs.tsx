"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

export type TabItem = { label: string; kicker?: string; title: string; text: string; points?: string[] };

/** Vertical tabs on desktop, scrollable pills on mobile. */
export function Tabs({ items, note }: { items: TabItem[]; note?: string }) {
  const [active, setActive] = useState(0);
  const t = items[active];
  return (
    <div className="grid gap-8 lg:grid-cols-[20rem_1fr]">
      <div role="tablist" aria-orientation="vertical" className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
        {items.map((it, i) => (
          <button
            key={it.label}
            role="tab"
            type="button"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`relative shrink-0 rounded-2xl px-6 py-5 text-left transition-colors ${active === i ? "text-white" : "bg-white text-navy ring-1 ring-navy/10 hover:ring-teal/40"}`}
          >
            {active === i && (
              <motion.span layoutId="tab-bg" className="absolute inset-0 rounded-2xl bg-navy" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
            )}
            <span className="relative block text-xs font-bold tracking-[0.16em] uppercase opacity-70">{it.kicker}</span>
            <span className="relative mt-1 block font-display text-lg font-semibold">{it.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          role="tabpanel"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.35 }}
          className="rounded-[2rem] bg-white p-8 shadow-[0_40px_90px_-50px_rgba(13,49,87,0.5)] ring-1 ring-navy/5 sm:p-10"
        >
          <h3 className="font-display text-3xl font-semibold text-navy">{t.title}</h3>
          <p className="mt-4 text-lg leading-relaxed text-muted">{t.text}</p>
          {t.points && (
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {t.points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ochre" aria-hidden />
                  <span className="text-navy">{p}</span>
                </motion.li>
              ))}
            </ul>
          )}
          {note && <p className="mt-8 rounded-2xl bg-cream p-4 text-sm leading-relaxed text-muted">{note}</p>}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
