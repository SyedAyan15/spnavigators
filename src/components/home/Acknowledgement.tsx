import { AboriginalFlag } from "../AboriginalFlag";
import { Reveal } from "../motion";
import { TorresStraitFlag } from "../TorresStraitFlag";

export function Acknowledgement() {
  return (
    <section aria-labelledby="acknowledgement" className="bg-navy-deep py-16 text-center text-white sm:py-20">
      <div className="container-x">
        <Reveal className="mx-auto flex w-fit overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/15">
          <AboriginalFlag className="h-20 w-40 sm:h-24 sm:w-48" />
          <span className="w-[3px] bg-white" aria-hidden />
          <TorresStraitFlag className="h-20 w-40 sm:h-24 sm:w-48" />
        </Reveal>
        <Reveal delay={0.15}>
          <h2 id="acknowledgement" className="mt-8 text-sm font-bold tracking-[0.18em] text-gold-light uppercase">
            Acknowledgement of Country
          </h2>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            Support Plan Navigators respectfully acknowledges the Traditional Custodians of the lands across the Orana region
            where we live, work and travel. We honour their deep and ongoing connection to Country, culture and community,
            and pay our respects to Elders, past and present. We extend that respect to every Aboriginal and Torres Strait
            Islander person who walks with us.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
