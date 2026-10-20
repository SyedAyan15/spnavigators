"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

const terms = [
  { t: "Capacity Building supports", d: "Funding to build your independence and skills over time, including Support Coordination, recovery coaching, therapies and skill development." },
  { t: "Choice and control", d: "Your right to decide what supports you use, who provides them and how they are delivered." },
  { t: "Core supports", d: "Funding for everyday activities, such as assistance with daily life, consumables, transport and social and community participation." },
  { t: "Capital supports", d: "Funding for assistive technology, equipment, home or vehicle modifications and Specialist Disability Accommodation." },
  { t: "LAC (Local Area Coordinator)", d: "A partner organisation of the NDIA that helps people understand and access the NDIS, and links them with community supports." },
  { t: "NDIA", d: "The National Disability Insurance Agency, the government agency that runs the NDIS." },
  { t: "NDIS Commission", d: "The NDIS Quality and Safeguards Commission, which regulates NDIS providers and handles complaints." },
  { t: "Plan management", d: "How your NDIS funding is managed and paid: NDIA-managed, plan-managed (by a plan manager) or self-managed, or a combination." },
  { t: "Plan reassessment", d: "The process of reviewing your NDIS plan, usually before it ends or when your circumstances change, to create a new plan." },
  { t: "Psychosocial disability", d: "A disability that may arise from a mental health condition, which affects a person’s ability to take part in daily life." },
  { t: "Recovery plan", d: "A personal plan made with your recovery coach that captures your goals, strengths, supports and strategies for wellbeing." },
  { t: "Service agreement", d: "A written agreement between you and a provider that sets out the supports, costs and responsibilities of each party." },
  { t: "Service booking", d: "A record in the NDIS system that sets aside funding from your plan for a specific provider." },
  { t: "Support Coordinator", d: "A person who helps you understand and implement your NDIS plan and coordinate your supports." },
];

export function Glossary() {
  const [q, setQ] = useState("");
  const list = terms.filter((x) => `${x.t} ${x.d}`.toLowerCase().includes(q.toLowerCase()));
  return (
    <div>
      <label className="relative block max-w-md">
        <span className="sr-only">Search glossary</span>
        <Search className="pointer-events-none absolute top-1/2 left-5 h-5 w-5 -translate-y-1/2 text-muted" aria-hidden />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search NDIS terms…"
          className="w-full rounded-full bg-white py-4 pr-5 pl-13 text-navy ring-1 ring-navy/10 focus:ring-2 focus:ring-teal focus:outline-none"
        />
      </label>
      <motion.dl layout className="mt-8 grid gap-4 md:grid-cols-2">
        <AnimatePresence>
          {list.map((x) => (
            <motion.div
              layout
              key={x.t}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="rounded-2xl bg-white p-6 ring-1 ring-navy/5"
            >
              <dt className="font-display text-lg font-semibold text-navy">{x.t}</dt>
              <dd className="mt-2 leading-relaxed text-muted">{x.d}</dd>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.dl>
      {!list.length && <p className="mt-6 text-muted">No terms match. Ask us, and we’ll explain it.</p>}
    </div>
  );
}
