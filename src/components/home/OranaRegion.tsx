import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Parallax, Reveal, Stagger, StaggerItem } from "../motion";

const towns = ["Dubbo", "Narromine", "Wellington", "Gilgandra", "Coonamble", "Nyngan", "Bourke"];

export function OranaRegion() {
  return (
    <section className="relative isolate overflow-hidden py-24 text-white sm:py-32">
      <Parallax className="absolute inset-0 -z-10 scale-125" speed={0.1}>
        <Image
          src="/images/orana-river.jpg"
          alt="Aerial view of a wide inland river winding through bushland under a dramatic sky"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </Parallax>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/95 via-navy/80 to-navy/40" />

      <div className="container-x">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-sm font-bold tracking-[0.18em] text-ochre-light uppercase">Where we serve</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-6xl">
              Proudly serving the <span className="text-gold-light italic">Orana region</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-white/85 sm:text-xl">
              Support Plan Navigators provides NDIS Support Coordination and Psychosocial Recovery Coaching across the Orana
              region of NSW, including Dubbo, Narromine, Wellington, Gilgandra, Coonamble and the surrounding Aboriginal
              communities.
            </p>
          </Reveal>
        </div>

        <Stagger as="ul" className="mt-10 flex max-w-4xl flex-wrap gap-3">
          {[...towns, "Surrounding communities"].map((t) => (
            <StaggerItem as="li" key={t}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 font-semibold ring-1 ring-white/25 backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20">
                <MapPin className="h-4 w-4 text-gold-light" aria-hidden />
                {t}
              </span>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.3} className="mt-10">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 font-semibold text-gold-light underline decoration-gold/50 underline-offset-4 hover:decoration-gold"
          >
            Not sure if we cover your area? Get in touch
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
