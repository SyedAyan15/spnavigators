"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Brain, Briefcase, HeartPulse, Home, Sparkles, Sun, Users, Utensils } from "lucide-react";
import { useState } from "react";

const domains = [
  { icon: Brain, label: "Mental wellbeing", text: "Understand your early warning signs, develop coping strategies and plan ahead for times when you might need extra support." },
  { icon: HeartPulse, label: "Physical health", text: "Build routines around sleep, movement and nutrition, and get support to attend GP, specialist and allied health appointments." },
  { icon: Utensils, label: "Living skills", text: "Develop practical skills such as budgeting, cooking, shopping, managing appointments and keeping on top of household tasks." },
  { icon: Home, label: "Home & housing", text: "Work toward a safe, stable place to live, and the skills and supports that help you feel settled and in control at home." },
  { icon: Users, label: "Relationships", text: "Strengthen connections with family and friends, build healthy boundaries and grow your informal support network." },
  { icon: Sun, label: "Community", text: "Find groups, hobbies, peer support and activities that bring meaning, enjoyment and a sense of belonging." },
  { icon: Briefcase, label: "Work & study", text: "Explore volunteering, study or employment at your own pace, and connect with services that can help you get there." },
  { icon: Sparkles, label: "Identity & hope", text: "Rediscover your strengths, values and sense of self, and build the hope and confidence to keep moving forward." },
];

const colors = ["#0d6a6e", "#d4661c", "#f2a12a", "#0d3157", "#0d6a6e", "#d4661c", "#f2a12a", "#0d3157"];

export function RecoveryWheel() {
  const [active, setActive] = useState(0);
  const d = domains[active];
  const R = 42; // % radius for the orbit

  return (
    <div className="grid items-center gap-14 lg:grid-cols-2">
      <div className="relative mx-auto aspect-square w-full max-w-[32rem]">
        <motion.div
          className="absolute inset-[8%] rounded-full border-2 border-dashed border-navy/15"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-[24%] grid place-items-center rounded-full bg-gradient-to-br from-navy to-teal p-6 text-center text-white shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
              <d.icon className="mx-auto h-10 w-10 text-gold" aria-hidden />
              <p className="mt-2 font-display text-xl font-semibold sm:text-2xl">{d.label}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        {domains.map((dm, i) => {
          const angle = (i / domains.length) * Math.PI * 2 - Math.PI / 2;
          const left = 50 + R * Math.cos(angle);
          const top = 50 + R * Math.sin(angle);
          const on = i === active;
          return (
            <motion.button
              key={dm.label}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              aria-pressed={on}
              aria-label={dm.label}
              className="absolute grid h-[17%] w-[17%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full shadow-lg"
              style={{ left: `${left}%`, top: `${top}%` }}
              animate={{ backgroundColor: on ? colors[i] : "#ffffff", scale: on ? 1.15 : 1 }}
              whileHover={{ scale: 1.12 }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              <dm.icon className="h-1/2 w-1/2" style={{ color: on ? "#fff" : colors[i] }} aria-hidden />
            </motion.button>
          );
        })}
      </div>

      <div>
        <div className="flex flex-wrap gap-2" aria-hidden>
          {domains.map((dm, i) => (
            <button
              key={dm.label}
              type="button"
              tabIndex={-1}
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${i === active ? "bg-navy text-white" : "bg-white text-navy ring-1 ring-navy/10"}`}
            >
              {dm.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="mt-8 rounded-[2rem] bg-white p-8 shadow-[0_40px_90px_-50px_rgba(13,49,87,0.5)] ring-1 ring-navy/5"
            aria-live="polite"
          >
            <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase">How your coach can help</p>
            <h3 className="mt-2 font-display text-3xl font-semibold text-navy">{d.label}</h3>
            <p className="mt-4 text-lg leading-relaxed text-muted">{d.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
