import { Phone } from "lucide-react";
import Image from "next/image";
import { site } from "@/lib/site";
import { Magnetic, Parallax, Reveal } from "./motion";
import { ButtonLink } from "./ui";

export function CtaBand({
  title = "Let’s map out your next step, together.",
  text = "Have a question about your NDIS plan, or ready to get started? Have a free, no-pressure chat with our team. We’ll listen first, then explain your options in plain language.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-x py-20 sm:py-28">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-navy px-6 py-16 sm:px-14 sm:py-20">
          <Parallax className="absolute inset-0 -z-10 scale-125 opacity-60" speed={0.12}>
            <Image src="/images/horizon.jpg" alt="" fill sizes="100vw" className="object-cover" />
          </Parallax>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-teal/40" />
          <div className="absolute -top-24 -right-24 -z-10 h-72 w-72 animate-spin-slow rounded-full border-[18px] border-dashed border-gold/25" />

          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="font-display text-lg text-gold-light italic">{site.tagline}</p>
              <h2 className="mt-3 font-display text-3xl leading-tight font-semibold text-white sm:text-5xl">{title}</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{text}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
              <Magnetic>
                <ButtonLink href="/contact" variant="gold">
                  Book a free chat
                </ButtonLink>
              </Magnetic>
              <Magnetic>
                <ButtonLink href={site.phoneHref} variant="light" icon={false}>
                  <Phone className="h-4 w-4" aria-hidden /> {site.phone}
                </ButtonLink>
              </Magnetic>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
