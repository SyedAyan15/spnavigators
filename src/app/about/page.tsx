import { Compass, Eye, Heart, Rainbow } from "lucide-react";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { LogoStory } from "@/components/LogoStory";
import { Marquee } from "@/components/Marquee";
import { Parallax, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Us | NDIS Support Coordination Provider",
  description:
    "Support Plan Navigators provides NDIS Support Coordination and Psychosocial Recovery Coaching across the Orana region of NSW. Learn about our story, our values and our commitment to person-centred support.",
  path: "/about",
  image: "/images/joy-together.jpg",
  keywords: ["about Support Plan Navigators", "NDIS support coordination Orana region"],
});

const pillars = [
  { icon: Compass, title: "Our purpose", text: "To help people with disability and psychosocial disability navigate the NDIS with confidence, and turn their plans into lives they value." },
  { icon: Eye, title: "Our vision", text: "A community where every NDIS participant feels heard, understands their options and has the support to pursue their possibilities." },
  { icon: Heart, title: "Our promise", text: "To listen first, speak plainly, act quickly and always put your goals, your choices and your wellbeing at the centre." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Support Plan Navigators"
        title="Connecting plans to possibilities."
        highlight={["possibilities."]}
        intro={
          <p>
            We’re a provider serving the Orana region, focused on just two things: NDIS Support Coordination and Psychosocial
            Recovery Coaching. Doing less means we can do it better, for you.
          </p>
        }
        image="/images/joy-together.jpg"
        imageAlt="An older man and a young man sharing a joyful laugh outdoors"
        crumbs={[{ name: "About Us", path: "/about" }]}
      >
        <ButtonLink href="/contact">Get in touch</ButtonLink>
      </PageHero>

      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title={
                <>
                  Why we became <span className="text-teal italic">navigators.</span>
                </>
              }
            />
            <Reveal delay={0.2} className="prose-brand mt-6 text-lg">
              <p>
                An NDIS plan can hold so much promise. Yet too many participants and families tell the same story: a plan
                full of funding, but no clear idea how to use it. Providers that don’t call back. Supports that don’t talk
                to each other. And a plan reassessment that arrives before anything has really started.
              </p>
              <p>
                Support Plan Navigators was founded to change that. We believe everyone deserves someone in their corner who
                understands the system, explains it honestly, and stays with them for the whole journey, not just the
                paperwork.
              </p>
              <p>
                That’s why we chose to specialise. By focusing only on Support Coordination and Psychosocial Recovery
                Coaching, we stay deeply knowledgeable and fully focused on what you need, rather than on
                selling other services.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Parallax className="relative mt-16 aspect-[3/4] overflow-hidden rounded-[2rem]" speed={0.08}>
              <Image src="/images/family-support.jpg" alt="A young man smiling with his family" fill sizes="25vw" className="scale-110 object-cover" />
            </Parallax>
            <Parallax className="relative aspect-[3/4] overflow-hidden rounded-[2rem]" speed={-0.06}>
              <Image src="/images/wheelchair-garden.jpg" alt="A woman using a wheelchair in a garden" fill sizes="25vw" className="scale-110 object-cover" />
            </Parallax>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <Stagger className="grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <StaggerItem key={p.title}>
                <div className={`h-full rounded-[2rem] p-10 ${i === 1 ? "bg-navy text-white" : "bg-white text-navy ring-1 ring-navy/5"}`}>
                  <p.icon className="h-10 w-10 text-gold" aria-hidden />
                  <h2 className="mt-6 font-display text-3xl font-semibold">{p.title}</h2>
                  <p className={`mt-4 text-lg leading-relaxed ${i === 1 ? "text-white/80" : "text-muted"}`}>{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-sand/60 py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="The story behind our logo"
            title={
              <>
                Every part of our logo <span className="text-teal italic">means something.</span>
              </>
            }
            intro="Explore the symbols that shape how we work."
          />
          <div className="mt-16">
            <LogoStory />
          </div>
        </div>
      </section>

      <Marquee items={["Respect", "Dignity", "Inclusion", "Honesty", "Hope", "Collaboration"]} />

      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem]">
            <Image src="/images/tree-hand.jpg" alt="A carved wooden hand supporting the branch of a large tree" fill sizes="(min-width:1024px) 40vw, 95vw" className="object-cover" />
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Inclusion"
              title={
                <>
                  Everyone is <span className="text-teal italic">welcome here.</span>
                </>
              }
            />
            <Reveal delay={0.2} className="prose-brand mt-6 text-lg">
              <p>
                We provide culturally safe, respectful support to people of every background. We welcome Aboriginal and
                Torres Strait Islander peoples, people from culturally and linguistically diverse communities, and LGBTIQA+
                people and families, and we’ll work with interpreters and the people you trust whenever you need.
              </p>
              <p className="flex items-center gap-3 font-semibold text-navy">
                <Rainbow className="h-6 w-6 text-gold" aria-hidden /> Your identity, culture and experiences are respected
                at every step.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x pb-8">
        <Reveal className="rounded-[2rem] bg-white p-8 ring-1 ring-navy/5 sm:p-10">
          <h2 className="font-display text-2xl font-semibold text-navy">Company details</h2>
          <dl className="mt-6 grid gap-6 text-sm sm:grid-cols-4">
            {[
              ["Registered name", site.legalName],
              ["ABN", site.abn],
              ["ACN", site.acn],
              ["Website", "www.spnavigators.com.au"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-muted">{k}</dt>
                <dd className="mt-1 font-semibold text-navy">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
