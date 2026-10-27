"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { FaqItem } from "@/lib/seo";
import { Faq } from "./Faq";

export function FaqExplorer({ categories }: { categories: { name: string; items: FaqItem[] }[] }) {
  const [cat, setCat] = useState("All");
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const pool = cat === "All" ? categories.flatMap((c) => c.items) : (categories.find((c) => c.name === cat)?.items ?? []);
    const q = query.trim().toLowerCase();
    return q ? pool.filter((i) => `${i.q} ${i.a}`.toLowerCase().includes(q)) : pool;
  }, [cat, query, categories]);

  return (
    <div className="mx-auto max-w-4xl">
      <label className="relative block">
        <span className="sr-only">Search FAQs</span>
        <Search className="pointer-events-none absolute top-1/2 left-6 h-5 w-5 -translate-y-1/2 text-muted" aria-hidden />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions, e.g. “plan reassessment”"
          className="w-full rounded-full bg-white py-5 pr-6 pl-14 text-lg text-navy shadow-lg ring-1 ring-navy/10 focus:ring-2 focus:ring-teal focus:outline-none"
        />
      </label>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {["All", ...categories.map((c) => c.name)].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            aria-pressed={cat === c}
            className={`relative rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${cat === c ? "text-white" : "bg-white text-navy ring-1 ring-navy/10"}`}
          >
            {cat === c && <motion.span layoutId="faq-cat" className="absolute inset-0 rounded-full bg-navy" transition={{ type: "spring", bounce: 0.2 }} />}
            <span className="relative">{c}</span>
          </button>
        ))}
      </div>
      <div className="mt-10">
        {items.length ? (
          <>
            <h2 className="sr-only">{cat === "All" ? "All questions" : cat}</h2>
            <Faq key={`${cat}-${query}`} items={items} defaultOpen={null} />
          </>
        ) : (
          <p className="rounded-[2rem] bg-white p-10 text-center text-muted">
            No questions match that search. Try different words, or just ask us directly.
          </p>
        )}
      </div>
    </div>
  );
}
