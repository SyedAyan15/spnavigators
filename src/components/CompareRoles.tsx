"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const roles = {
  sc: {
    label: "Support Coordinator",
    href: "/support-coordination",
    focus: "Your NDIS plan and the supports in it",
    summary:
      "A Support Coordinator helps you put your NDIS plan into action. They connect you with providers, help you set up service agreements, coordinate your supports and build your ability to manage them over time.",
    points: [
      "Explains your NDIS plan and budgets in plain language",
      "Researches and connects you with suitable providers",
      "Helps with service agreements and bookings",
      "Monitors how your funding is tracking",
      "Helps resolve problems and coordinate supports in a crisis",
      "Prepares reports and evidence for your plan reassessment",
    ],
  },
  rc: {
    label: "Psychosocial Recovery Coach",
    href: "/psychosocial-recovery-coaching",
    focus: "You, your recovery and your everyday life",
    summary:
      "A Psychosocial Recovery Coach works alongside people with psychosocial disability. They take a recovery-oriented, trauma-informed approach to help you build skills, confidence and connections, and they also coordinate your supports.",
    points: [
      "Co-designs a personal recovery plan with you",
      "Builds daily living skills, routines and resilience",
      "Supports you through ups and downs in your mental health",
      "Connects you with clinical, community and peer supports",
      "Helps you work toward study, work and social goals",
      "Coordinates NDIS supports with a recovery focus",
    ],
  },
};

export function CompareRoles() {
  const [active, setActive] = useState<keyof typeof roles>("sc");
  const r = roles[active];
  return (
    <div className="mx-auto max-w-5xl">
      <div role="tablist" aria-label="Compare roles" className="relative mx-auto grid max-w-xl grid-cols-2 rounded-full bg-white p-1.5 shadow-lg ring-1 ring-navy/5">
        {(Object.keys(roles) as (keyof typeof roles)[]).map((k) => (
          <button
            key={k}
            role="tab"
            type="button"
            aria-selected={active === k}
            onClick={() => setActive(k)}
            className={`relative z-10 rounded-full px-4 py-3.5 text-sm font-bold transition-colors sm:text-base ${active === k ? "text-white" : "text-navy"}`}
          >
            {active === k && (
              <motion.span
                layoutId="role-pill"
                className={`absolute inset-0 -z-10 rounded-full ${k === "sc" ? "bg-teal" : "bg-navy"}`}
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              />
            )}
            {roles[k].label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          role="tabpanel"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4 }}
          className="mt-10 grid gap-8 rounded-[2.5rem] bg-white p-8 shadow-[0_40px_100px_-50px_rgba(14,42,77,0.5)] ring-1 ring-navy/5 sm:p-12 md:grid-cols-[1fr_1.2fr]"
        >
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase">Main focus</p>
            <h3 className="mt-2 font-display text-3xl font-semibold text-navy">{r.focus}</h3>
            <p className="mt-4 leading-relaxed text-muted">{r.summary}</p>
            <Link href={r.href} className="mt-6 inline-flex font-bold text-teal underline decoration-gold decoration-2 underline-offset-4">
              Learn more about {r.label === "Support Coordinator" ? "Support Coordination" : "Recovery Coaching"}
            </Link>
          </div>
          <ul className="grid gap-3">
            {r.points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.06 }}
                className="flex items-start gap-3 rounded-2xl bg-cream px-4 py-3"
              >
                <span className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-white ${active === "sc" ? "bg-teal" : "bg-navy"}`}>
                  <Check className="h-3.5 w-3.5" aria-hidden />
                </span>
                <span className="font-medium text-navy">{p}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
