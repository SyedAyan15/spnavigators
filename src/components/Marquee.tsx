import { Leaf } from "lucide-react";

export function Marquee({ items, dark = false }: { items: string[]; dark?: boolean }) {
  const row = [...items, ...items];
  return (
    <div className={`relative overflow-hidden py-6 ${dark ? "bg-navy text-white" : "bg-sand text-navy"}`}>
      <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]" aria-hidden>
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl whitespace-nowrap italic sm:text-3xl">
            {t}
            <Leaf className={`h-6 w-6 ${i % 2 ? "text-gold" : "text-sage"}`} />
          </span>
        ))}
      </div>
      <p className="sr-only">{items.join(", ")}</p>
    </div>
  );
}
