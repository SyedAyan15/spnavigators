"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useId, useState } from "react";
import type { FaqItem } from "@/lib/seo";

export function Faq({ items, defaultOpen = 0 }: { items: FaqItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const id = useId();
  return (
    <div className="divide-y divide-navy/10 rounded-[2rem] bg-white p-2 shadow-[0_30px_80px_-40px_rgba(14,42,77,0.35)] ring-1 ring-navy/5 sm:p-4">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="px-4 sm:px-6">
            <h3>
              <button
                type="button"
                id={`${id}-q${i}`}
                aria-controls={`${id}-a${i}`}
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className={`font-display text-lg font-semibold transition-colors sm:text-xl ${isOpen ? "text-teal" : "text-navy"}`}>
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0, backgroundColor: isOpen ? "#f2a33a" : "#fbf7ef" }}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-navy"
                >
                  <Plus className="h-5 w-5" aria-hidden />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${id}-a${i}`}
                  role="region"
                  aria-labelledby={`${id}-q${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pr-12 pb-6 leading-relaxed text-muted">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
