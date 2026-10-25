"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  BarChart3,
  BookOpen,
  Check,
  CircleDollarSign,
  FileSearch,
  FileText,
  Minus,
  Receipt,
  RefreshCw,
  Settings2,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

type Who = "lac" | "sc" | "pm";

const roles: { key: Who; short: string; label: string; sub: string; color: string; tint: string }[] = [
  { key: "lac", short: "LAC", label: "Local Area Coordinator", sub: "Free NDIS guidance", color: "bg-ochre", tint: "bg-ochre/10" },
  { key: "sc", short: "SC", label: "Support Coordinator", sub: "Organises your supports", color: "bg-teal", tint: "bg-teal/10" },
  { key: "pm", short: "PM", label: "Plan Manager", sub: "Pays invoices, tracks funds", color: "bg-gold", tint: "bg-gold/15" },
];

const rows: { icon: LucideIcon; situation: string; who: Who[]; tip: string }[] = [
  { icon: FileText, situation: "I’m applying for the NDIS", who: ["lac"], tip: "Your LAC (or the NDIA directly) can explain eligibility, help you gather evidence and guide you through the access request." },
  { icon: BookOpen, situation: "I don’t understand my NDIS plan", who: ["lac", "sc"], tip: "Your LAC can walk you through your plan. If you have Support Coordination funded, your Support Coordinator will explain each budget and what you can use it for." },
  { icon: CircleDollarSign, situation: "I’m not sure if a support can be claimed", who: ["lac", "sc", "pm"], tip: "Any of the three can help. Your Plan Manager knows how claims and invoices work; your Support Coordinator or LAC can explain whether it fits your plan and goals." },
  { icon: Users, situation: "I want to find a support worker, therapist or other provider", who: ["lac", "sc"], tip: "A Support Coordinator researches providers, arranges meet-and-greets and sets up service agreements. If you don’t have one, your LAC can help you connect." },
  { icon: Settings2, situation: "My providers aren’t communicating, or I have service issues", who: ["sc"], tip: "This is exactly what a Support Coordinator is for: getting your providers on the same page and resolving problems with services." },
  { icon: AlertTriangle, situation: "My regular support has stopped and I need alternatives", who: ["sc"], tip: "Your Support Coordinator can act quickly to find replacement supports and keep you safe and supported in the meantime." },
  { icon: BarChart3, situation: "I’m worried my funding is running low", who: ["lac", "sc", "pm"], tip: "Your Plan Manager can show what’s been spent. Your Support Coordinator can rebalance supports, and your LAC can advise if a plan change may be needed." },
  { icon: Receipt, situation: "I need invoices paid or a spending report", who: ["pm"], tip: "If you’re plan-managed, your Plan Manager pays providers and sends you regular budget statements." },
  { icon: RefreshCw, situation: "My circumstances or support needs have changed", who: ["lac", "sc"], tip: "Talk to your LAC about a plan reassessment. Your Support Coordinator can gather reports and evidence to support it." },
  { icon: FileSearch, situation: "I want to understand an NDIA decision or the review process", who: ["lac"], tip: "Your LAC can explain an NDIA decision and your options for an internal review. Free disability advocates can also help." },
];

export function ContactMatrix() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_100px_-50px_rgba(13,49,87,0.5)] ring-1 ring-navy/5">
      {/* Column headers */}
      <div className="grid grid-cols-[1fr_repeat(3,2.4rem)] items-end gap-1 border-b border-navy/10 bg-cream/70 p-3 sm:grid-cols-[1fr_repeat(3,9.5rem)] sm:gap-3 sm:p-5">
        <p className="pb-1 font-display text-base font-semibold text-navy sm:text-xl">Your situation</p>
        {roles.map((r) => (
          <div key={r.key} className={`rounded-xl p-1.5 text-center sm:rounded-2xl sm:p-3 ${r.tint}`}>
            <span className={`mx-auto grid h-8 w-8 place-items-center rounded-full text-[0.65rem] font-bold text-white sm:h-10 sm:w-10 sm:text-xs ${r.color}`}>
              {r.short}
            </span>
            <p className="mt-1.5 hidden text-sm leading-tight font-semibold text-navy sm:block">{r.label}</p>
            <p className="mt-0.5 hidden text-xs text-muted sm:block">{r.sub}</p>
          </div>
        ))}
      </div>

      <ul>
        {rows.map((row, i) => {
          const open = active === i;
          return (
            <li key={row.situation} className="border-b border-navy/5 last:border-0">
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setActive(open ? null : i)}
                className={`grid w-full grid-cols-[1fr_repeat(3,2.4rem)] items-center gap-1 px-3 py-3 text-left transition sm:grid-cols-[1fr_repeat(3,9.5rem)] sm:gap-3 sm:px-5 sm:py-4 ${
                  open ? "bg-gold-light/20" : "hover:bg-cream/70"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className={`hidden h-9 w-9 shrink-0 place-items-center rounded-xl transition sm:grid ${open ? "bg-navy text-gold" : "bg-cream text-teal"}`}>
                    <row.icon className="h-4.5 w-4.5" aria-hidden />
                  </span>
                  <span className="text-[0.9rem] leading-snug font-semibold text-navy sm:text-base">{row.situation}</span>
                </span>
                {roles.map((r, j) => {
                  const yes = row.who.includes(r.key);
                  return (
                    <span key={r.key} className={`grid h-full place-items-center rounded-lg py-1 ${r.tint}`}>
                      <span className="sr-only">
                        {r.label}: {yes ? "yes" : "no"}
                      </span>
                      {yes ? (
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ type: "spring", bounce: 0.5, delay: 0.05 * i + 0.08 * j }}
                          className={`grid h-6 w-6 place-items-center rounded-full text-white sm:h-8 sm:w-8 ${r.color}`}
                          aria-hidden
                        >
                          <Check className="h-4 w-4" strokeWidth={3} />
                        </motion.span>
                      ) : (
                        <Minus className="h-4 w-4 text-navy/20" aria-hidden />
                      )}
                    </span>
                  );
                })}
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden bg-gold-light/20"
                  >
                    <p className="mx-3 mb-4 rounded-2xl bg-white p-4 text-sm leading-relaxed text-muted ring-1 ring-navy/5 sm:mx-5 sm:text-base">
                      <strong className="text-navy">Who to contact: </strong>
                      {row.tip}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>

      {/* Legend for phones, where column labels are abbreviated */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-navy/10 bg-cream/70 px-4 py-3 text-xs text-muted sm:hidden">
        {roles.map((r) => (
          <span key={r.key} className="inline-flex items-center gap-1.5">
            <span className={`h-2.5 w-2.5 rounded-full ${r.color}`} /> <strong className="text-navy">{r.short}</strong> {r.label}
          </span>
        ))}
      </div>
    </div>
  );
}
