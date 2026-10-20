import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { breadcrumbJsonLd } from "@/lib/seo";
import { Reveal, WordReveal } from "./motion";
import { JsonLd } from "./ui";
import { Leaf, WindingRoad } from "./WindingRoad";

export function PageHero({
  eyebrow,
  title,
  highlight = [],
  intro,
  image,
  imageAlt,
  crumbs,
  children,
  badge,
}: {
  eyebrow: string;
  title: string;
  highlight?: string[];
  intro: ReactNode;
  image: string;
  imageAlt: string;
  crumbs: { name: string; path: string }[];
  children?: ReactNode;
  badge?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 sm:pb-28">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <div className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-gold-light/30 blur-3xl" />
      <div className="pointer-events-none absolute top-60 -left-40 h-[28rem] w-[28rem] rounded-full bg-teal-light/25 blur-3xl" />
      <WindingRoad className="pointer-events-none absolute bottom-0 left-0 w-[70%] max-w-3xl opacity-[0.12]" />

      <div className="container-x relative">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
            <li>
              <Link href="/" className="inline-block py-1.5 hover:text-teal">
                Home
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.path} className="flex items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                <span aria-current="page" className="font-semibold text-navy">
                  {c.name}
                </span>
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {eyebrow}
              </span>
            </Reveal>
            <h1 className="mt-6 font-display text-[2.6rem] leading-[1.05] font-semibold tracking-tight text-navy sm:text-6xl lg:text-[4.2rem]">
              <WordReveal text={title} highlight={highlight} delay={0.15} />
            </h1>
            <Reveal delay={0.5}>
              <div className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{intro}</div>
            </Reveal>
            {children && (
              <Reveal delay={0.65}>
                <div className="mt-9 flex flex-wrap gap-4">{children}</div>
              </Reveal>
            )}
          </div>

          <Reveal direction="left" delay={0.2} className="relative">
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[45%_55%_48%_52%/55%_45%_55%_45%] shadow-2xl shadow-navy/20 lg:max-w-none">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover transition-transform duration-[2s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
            </div>
            <Leaf className="absolute -top-6 right-6 h-24 w-14" color="var(--color-sage)" delay={0.8} />
            <Leaf className="absolute top-10 -right-2 h-16 w-10 rotate-12" color="var(--color-gold)" delay={1} />
            {badge && (
              <div className="absolute -bottom-6 left-0 max-w-[16rem] rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-navy/5 sm:-left-6">
                {badge}
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
