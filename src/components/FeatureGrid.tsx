import type { LucideIcon } from "lucide-react";
import { Stagger, StaggerItem } from "./motion";

export type Feature = { icon: LucideIcon; title: string; text: string };

const accents = ["bg-teal", "bg-gold", "bg-sage", "bg-navy"];

export function FeatureGrid({ items, cols = 4 }: { items: Feature[]; cols?: 3 | 4 }) {
  return (
    <Stagger className={`grid gap-5 sm:grid-cols-2 ${cols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
      {items.map((f, i) => (
        <StaggerItem key={f.title}>
          <div className="group relative h-full overflow-hidden rounded-[2rem] bg-white p-7 ring-1 ring-navy/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-40px_rgba(14,42,77,0.45)]">
            <span className="absolute right-6 top-5 font-display text-5xl font-bold text-navy/5 transition-colors duration-500 group-hover:text-gold/25">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={`grid h-13 w-13 place-items-center rounded-2xl p-3 text-white transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 ${accents[i % accents.length]}`}
            >
              <f.icon className="h-7 w-7" aria-hidden />
            </span>
            <h3 className="mt-6 font-display text-xl font-semibold text-navy">{f.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{f.text}</p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
