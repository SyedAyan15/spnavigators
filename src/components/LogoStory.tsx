"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const parts = [
  { key: "circle", label: "A circle of community", color: "#a8261f", text: "Figures joined hand in hand around the circle: participants, families, carers and community, all connected and supporting each other.", x: 50, y: 7 },
  { key: "dots", label: "Dot artwork", color: "#d4661c", text: "The dot artwork honours the Aboriginal cultures and communities of the Orana region, and our commitment to culturally safe support.", x: 30, y: 36 },
  { key: "land", label: "Mountains and water", color: "#1f6fb2", text: "The landscape of the Orana, and the journey every participant travels through it, one step at a time.", x: 72, y: 38 },
  { key: "path", label: "The golden path", color: "#f2a12a", text: "Your plan, turned into a clear way forward. That’s what connecting plans to possibilities is all about.", x: 47, y: 62 },
];

export function LogoStory() {
  const [active, setActive] = useState(0);
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div className="relative mx-auto w-full max-w-xl rounded-[2.5rem] bg-white p-8 shadow-[0_40px_100px_-50px_rgba(13,49,87,0.5)] sm:p-12">
        <div className="relative mx-auto max-w-sm">
          <Image src="/logo-mark.png" alt="Support Plan Navigators logo mark" width={600} height={581} className="h-auto w-full" />
          {parts.map((p, i) => (
            <button
              key={p.key}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              aria-label={p.label}
              aria-pressed={active === i}
              className="absolute grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              <span className="absolute inset-0 animate-ping rounded-full opacity-40" style={{ backgroundColor: p.color }} />
              <span
                className="relative h-5 w-5 rounded-full border-[3px] border-white shadow-md transition-transform"
                style={{ backgroundColor: p.color, transform: active === i ? "scale(1.4)" : undefined }}
              />
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="grid gap-3">
          {parts.map((p, i) => (
            <button
              key={p.key}
              type="button"
              onClick={() => setActive(i)}
              className={`flex items-center gap-4 rounded-2xl px-5 py-4 text-left transition ${active === i ? "bg-white shadow-lg" : "hover:bg-white/60"}`}
            >
              <span className="h-4 w-4 shrink-0 rounded-full" style={{ backgroundColor: p.color }} />
              <span className="font-display text-xl font-semibold text-navy">{p.label}</span>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mt-6 border-l-4 pl-5 text-lg leading-relaxed text-muted"
            style={{ borderColor: parts[active].color }}
            aria-live="polite"
          >
            {parts[active].text}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
