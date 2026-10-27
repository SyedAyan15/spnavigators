"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { site } from "@/lib/site";
import { Magnetic } from "../motion";
import { ButtonLink } from "../ui";
import { Leaf, WindingRoad } from "../WindingRoad";
import { RiverDivider } from "./RiverDivider";

const words = ["confidence", "clarity", "real support", "hope"];
const steps = ["Plan understood", "Supports connected", "Goals in motion"];
const ease = [0.22, 1, 0.36, 1] as const;

// Scroll parallax is reserved for wider screens; on phones it pushes the card over the photo.
const smQuery = "(min-width: 640px)";
const subscribeSm = (cb: () => void) => {
  const mq = window.matchMedia(smQuery);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const useIsSm = () => useSyncExternalStore(subscribeSm, () => window.matchMedia(smQuery).matches, () => true);

export function HomeHero() {
  const [i, setI] = useState(0);
  const [done, setDone] = useState(0);
  const isSm = useIsSm();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setDone((v) => (v >= steps.length ? 0 : v + 1)), 1300);
    return () => clearInterval(t);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden pt-6 pb-24 sm:pt-10 sm:pb-36 lg:pb-48">
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-[42rem] w-[42rem] rounded-full bg-sky-light/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-40 h-[32rem] w-[32rem] rounded-full bg-teal-light/30 blur-3xl" />
      <WindingRoad className="pointer-events-none absolute -bottom-10 left-0 w-full max-w-5xl opacity-[0.13]" />

      <div className="container-x relative grid items-center gap-8 sm:gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="eyebrow anim-rise tracking-[0.08em] sm:tracking-[0.18em]">
            <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden />
            Dubbo &amp; the Orana Region, NSW
          </span>

          {/* The h1 carries the searchable phrase; the large marketing line below is a paragraph. */}
          <h1 className="anim-rise mt-6 block text-base font-bold tracking-wide text-teal sm:text-lg" style={{ animationDelay: "0.1s" }}>
            NDIS Support Coordination &amp; Psychosocial Recovery Coaching in Dubbo &amp; the Orana Region
          </h1>
          <div>
            <p
              className="anim-rise mt-4 block font-display text-[2.7rem] leading-[1.04] font-semibold tracking-tight text-navy sm:text-6xl xl:text-[4.6rem]"
              style={{ animationDelay: "0.2s" }}
            >
              Navigate your NDIS plan with{" "}
              <span className="relative grid h-[1.12em]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={words[i]}
                    className="col-start-1 row-start-1 italic text-[#0a5559]"
                    initial={{ y: "60%", opacity: 0, filter: "blur(8px)" }}
                    animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: "-60%", opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.55, ease }}
                  >
                    {words[i]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </p>
          </div>

          <p className="anim-rise mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl" style={{ animationDelay: "0.35s" }}>
            We help NDIS participants, families and carers across Dubbo and the Orana region turn a plan on paper into real supports, real
            connections and real progress, with a dedicated navigator who listens first and explains everything in
            plain language.
          </p>

          <div className="anim-rise mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.5s" }}>
            <Magnetic>
              <ButtonLink href="/make-a-referral">Make a Referral</ButtonLink>
            </Magnetic>
            <Magnetic>
              <ButtonLink href="#services" variant="outline">
                Explore our services
              </ButtonLink>
            </Magnetic>
          </div>

          <div className="anim-rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-3" style={{ animationDelay: "0.65s" }}>
            <a href={`mailto:${site.email}`} className="group inline-flex items-center gap-3 text-navy">
              <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold text-navy">
                <span className="absolute inset-0 animate-ping rounded-full bg-gold/50" />
                <Mail className="relative h-5 w-5" aria-hidden />
              </span>
              <span className="text-sm leading-tight">
                <span className="block text-muted">Prefer email? Write to us</span>
                <span className="text-base font-bold break-all group-hover:text-teal sm:text-lg">{site.email}</span>
              </span>
            </a>
            <a href={site.phoneHref} className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-navy">
              <Phone className="h-4 w-4 text-teal" aria-hidden /> or call {site.phone}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[22rem] pb-6 sm:max-w-xl sm:pt-0 sm:pb-0">
          <div className="anim-pop relative ml-auto w-[80%] sm:w-[82%]" style={{ animationDelay: "0.15s" }}>
          <motion.div
            style={isSm ? { y: imgY } : undefined}
            className="relative aspect-[5/6] overflow-hidden rounded-[999px_999px_48px_48px] shadow-[0_40px_100px_-30px_rgba(13,49,87,0.55)] sm:aspect-[4/5]"
          >
            <Image
              src="/images/hero-friends-park.jpg"
              alt="Friends, including a man using a wheelchair, laughing together at an outdoor table"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
          </motion.div>
          </div>

          <div
            className="anim-pop absolute top-[40%] left-0 aspect-square w-[38%] overflow-hidden rounded-full border-4 border-cream shadow-2xl sm:w-[42%] sm:border-[6px]"
            style={{ animationDelay: "0.5s" }}
          >
            <Image
              src="/images/family-support.jpg"
              alt="A young man with family members smiling together"
              fill
              sizes="(min-width: 640px) 15rem, 9rem"
              className="object-cover"
            />
          </div>

          <div className="anim-rise absolute right-0 -bottom-4 w-48 sm:-right-6 sm:bottom-10 sm:w-60" style={{ animationDelay: "0.8s" }}>
          <motion.div
            style={isSm ? { y: cardY } : undefined}
            className="rounded-2xl bg-white/95 p-3.5 shadow-2xl ring-1 ring-navy/5 backdrop-blur sm:rounded-3xl sm:p-5"
          >
            <p className="text-[0.65rem] font-bold tracking-[0.16em] text-muted uppercase sm:text-xs">Your journey</p>
            <ul className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2.5">
              {steps.map((s, idx) => {
                const on = idx < done;
                return (
                  <li key={s} className="flex items-center gap-2 text-xs font-semibold whitespace-nowrap text-navy sm:gap-3 sm:text-sm">
                    <motion.span
                      animate={{ backgroundColor: on ? "#d4661c" : "#e6f0f6", scale: on ? [1, 1.25, 1] : 1 }}
                      transition={{ duration: 0.4 }}
                      className="grid h-5 w-5 shrink-0 place-items-center rounded-full sm:h-6 sm:w-6"
                    >
                      <Check className={`h-3.5 w-3.5 transition ${on ? "text-white" : "text-transparent"}`} aria-hidden />
                    </motion.span>
                    <span className={on ? "" : "text-muted"}>{s}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
          </div>

          <div
            className="anim-pop absolute top-0 left-[4%] h-20 w-20 sm:-top-4 sm:left-[8%] sm:h-36 sm:w-36"
            style={{ animationDelay: "0.9s" }}
            aria-hidden
          >
            <svg viewBox="0 0 200 200" className="h-full w-full animate-spin-slow">
              <defs>
                <path id="seal" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <circle cx="100" cy="100" r="98" fill="#0d3157" />
              <text fill="#f8c96a" fontSize="17" fontWeight="700" letterSpacing="4.2">
                <textPath href="#seal">CONNECTING PLANS • TO POSSIBILITIES •</textPath>
              </text>
            </svg>
            <span className="absolute inset-0 grid place-items-center">
              <span className="rounded-full bg-white p-1">
                <Image src="/logo-mark.png" alt="" width={112} height={92} className="h-auto w-9 sm:w-14" />
              </span>
            </span>
          </div>

          <Leaf className="absolute -right-1 top-8 h-14 w-9 sm:-right-4 sm:top-6 sm:h-24 sm:w-14" color="var(--color-ochre)" delay={1.2} />
          <Leaf className="absolute right-7 top-2 h-10 w-6 sm:right-8 sm:-top-2 sm:h-16 sm:w-10" color="var(--color-gold)" delay={1.4} />
        </div>
      </div>

      <RiverDivider />
    </section>
  );
}
