"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const parts = [
  { key: "hands", label: "Reaching hands", color: "#1d7a85", text: "Two figures reaching for each other. Support is a partnership, and we walk with you, not ahead of you.", x: 30, y: 38 },
  { key: "road", label: "The winding road", color: "#0e2a4d", text: "Every NDIS journey has twists and turns. We help you navigate them, one step at a time.", x: 62, y: 76 },
  { key: "leaves", label: "Growing leaves", color: "#5d8b6c", text: "Growth, wellbeing and capacity building. Each new skill and connection helps you flourish.", x: 84, y: 45 },
  { key: "sun", label: "The rising arc", color: "#f2a33a", text: "Hope and possibility on the horizon. That’s what connecting plans to possibilities is all about.", x: 50, y: 6 },
];

export function LogoStory() {
  const [active, setActive] = useState(0);
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div className="relative mx-auto w-full max-w-xl rounded-[2.5rem] bg-white p-8 shadow-[0_40px_100px_-50px_rgba(14,42,77,0.5)] sm:p-12">
        <div className="relative">
          <Image src="/logo-mark.png" alt="Support Plan Navigators logo mark" width={640} height={327} className="h-auto w-full" />
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
