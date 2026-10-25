import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./motion";

type Variant = "primary" | "gold" | "outline" | "light";

const styles: Record<Variant, string> = {
  primary: "bg-navy text-white shadow-xl shadow-navy/20 hover:shadow-2xl",
  gold: "bg-gold text-navy shadow-xl shadow-gold/30 hover:shadow-2xl",
  outline: "bg-white/60 text-navy ring-2 ring-navy/15 backdrop-blur hover:ring-navy/40",
  light: "bg-white text-navy shadow-xl hover:shadow-2xl",
};

const sweep: Record<Variant, string> = {
  primary: "from-teal to-ochre",
  gold: "from-gold-light to-gold",
  outline: "from-white to-sand",
  light: "from-cream to-gold-light",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  icon = true,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: boolean;
}) {
  const external = href.startsWith("tel:") || href.startsWith("mailto:");
  const inner = (
    <>
      <span
        className={`absolute inset-0 -translate-x-[101%] bg-gradient-to-r transition-transform duration-500 ease-out group-hover:translate-x-0 ${sweep[variant]}`}
      />
      <span className="relative flex items-center gap-2">
        {children}
        {icon && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />}
      </span>
    </>
  );
  const cls = `group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-4 text-[0.95rem] font-bold transition-shadow ${styles[variant]} ${className}`;
  return external ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${light ? "bg-white/10 text-gold-light ring-white/15" : ""}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2
          className={`mt-5 font-display text-3xl leading-[1.12] font-semibold tracking-tight sm:text-4xl lg:text-[3.1rem] ${
            light ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.2}>
          <p className={`mt-5 text-lg leading-relaxed ${light ? "text-white/75" : "text-muted"}`}>{intro}</p>
        </Reveal>
      )}
    </div>
  );
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
