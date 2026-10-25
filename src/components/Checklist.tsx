"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

/** A tickable "does this sound like you?" list. */
export function Checklist({ items, doneText }: { items: string[]; doneText: string }) {
  const [ticked, setTicked] = useState<boolean[]>(() => items.map(() => false));
  const count = ticked.filter(Boolean).length;
  return (
    <div>
      <ul className="grid gap-3">
        {items.map((it, i) => (
          <li key={it}>
            <button
              type="button"
              role="checkbox"
              aria-checked={ticked[i]}
              onClick={() => setTicked((t) => t.map((v, j) => (j === i ? !v : v)))}
              className={`flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left transition ${
                ticked[i] ? "bg-ochre/15 ring-2 ring-ochre" : "bg-white ring-1 ring-navy/10 hover:ring-teal/40"
              }`}
            >
              <motion.span
                animate={{ scale: ticked[i] ? [1, 1.3, 1] : 1, backgroundColor: ticked[i] ? "#d4661c" : "#ffffff" }}
                className="grid h-7 w-7 shrink-0 place-items-center rounded-lg ring-2 ring-ochre"
              >
                <Check className={`h-4 w-4 ${ticked[i] ? "text-white" : "text-transparent"}`} aria-hidden />
              </motion.span>
              <span className="font-medium text-navy">{it}</span>
            </button>
          </li>
        ))}
      </ul>
      <motion.p
        initial={false}
        animate={{ opacity: count > 0 ? 1 : 0, y: count > 0 ? 0 : 10 }}
        className="mt-5 rounded-2xl bg-navy px-5 py-4 text-white"
        aria-live="polite"
      >
        {count > 0 ? (
          <>
            You ticked <strong className="text-gold">{count}</strong> of {items.length}. {doneText}
          </>
        ) : (
          " "
        )}
      </motion.p>
    </div>
  );
}
