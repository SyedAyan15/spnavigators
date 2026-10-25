import Image from "next/image";
import { Reveal } from "./motion";

/**
 * Title banner shown at the top of inner pages. The artwork is the dot-art panel from the
 * Support Plan Navigators logo, so it stays the organisation's own artwork rather than an imitation.
 */
export function PageBanner({
  title,
  subtitle = "Regional support for Aboriginal and non-Aboriginal people across the Orana region",
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white" aria-label={`${title} banner`}>
      <div className="pointer-events-none absolute top-1/2 -right-28 -z-10 h-72 w-72 -translate-y-1/2 sm:-right-16 sm:h-[26rem] sm:w-[26rem]" aria-hidden>
        <Image
          src="/images/brand-dot-art.png"
          alt=""
          fill
          priority
          sizes="(min-width: 640px) 26rem, 18rem"
          className="animate-spin-slow object-contain opacity-35 sm:opacity-90"
          style={{ animationDuration: "120s" }}
        />
        <span className="absolute -inset-4 rounded-full border-2 border-dashed border-ochre/40" />
        <span className="absolute -inset-10 rounded-full border border-gold/20" />
      </div>
      <div className="pointer-events-none absolute -bottom-20 -left-20 -z-10 h-56 w-56 opacity-25" aria-hidden>
        <Image src="/images/brand-dot-art.png" alt="" fill sizes="14rem" className="object-contain" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/10" aria-hidden />

      <div className="container-x py-14 sm:py-20">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.2em] text-gold-light uppercase sm:text-sm">Orana region · NSW</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 max-w-2xl font-display text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">{title}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}
