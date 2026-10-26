import { ArrowRight, ArrowUpRight, CircleCheckBig, Compass, Heart, MapPin, Users } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Acknowledgement } from "@/components/home/Acknowledgement";
import { HomeHero } from "@/components/home/HomeHero";
import { OranaRegion } from "@/components/home/OranaRegion";
import { Counter, Parallax, Reveal, Stagger, StaggerItem, TiltCard } from "@/components/motion";
import { ButtonLink, JsonLd, SectionHeading } from "@/components/ui";
import { faqJsonLd, type FaqItem } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "NDIS Support Coordination & Psychosocial Recovery Coaching | Support Plan Navigators" },
  description:
    "Local NDIS Support Coordinator and Psychosocial Recovery Coach in the Orana region of NSW, supporting Dubbo, Wellington, Narromine, Gilgandra, Coonamble, Nyngan, Bourke and surrounding communities.",
  alternates: { canonical: "/" },
};

const services = [
  {
    href: "/support-coordination",
    img: "/images/planning-session.jpg",
    alt: "A support coordinator reviewing paperwork with two participants on a sofa",
    eyebrow: "Capacity Building",
    title: "NDIS Support Coordination",
    text: "Your plan, made practical. We help you understand your NDIS funding, choose providers that suit you, set up service agreements and keep everything working together, so you can focus on living.",
    points: ["Plan implementation", "Provider connections", "Plan reassessment preparation"],
    accent: "bg-teal",
  },
  {
    href: "/psychosocial-recovery-coaching",
    img: "/images/coaching-meeting.jpg",
    alt: "A recovery coach and a participant talking together in a bright, relaxed room",
    eyebrow: "Psychosocial Disability",
    title: "Psychosocial Recovery Coaching",
    text: "Recovery on your terms. A dedicated coach works alongside you to set meaningful goals, build skills and routines, and connect with mental health and community supports that help you thrive.",
    points: ["Personal recovery plan", "Skills, routines and confidence", "Mental health and community links"],
    accent: "bg-gold",
  },
];

const whatWeDo = [
  { icon: Compass, title: "Plan Implementation", text: "We help you understand your NDIS plan and put it into action, identifying the right supports and services to meet your goals." },
  { icon: Users, title: "Connecting with Providers", text: "We find and connect you with quality local providers who understand your needs and your community." },
  { icon: CircleCheckBig, title: "Goal Review & Planning", text: "Together we regularly review your progress toward your goals and prepare for your NDIS plan reviews with confidence." },
  { icon: Heart, title: "Navigating the NDIS", text: "The NDIS can feel overwhelming. We simplify the process, advocate for your rights and make sure you receive the support you’re entitled to." },
];

const whyChoose = [
  { icon: MapPin, title: "Local Knowledge", text: "Born and raised in the Orana region, our founder knows the local services, providers and community networks that can make a real difference." },
  { icon: Heart, title: "Culturally Safe Practice", text: "We’re committed to providing culturally safe, respectful and inclusive support for Aboriginal and Torres Strait Islander participants and all community members." },
  { icon: Users, title: "Personalised Support", text: "You are not a case number. We take the time to understand your story, your goals and your family, and we’re with you every step of the way." },
];

const faqs: FaqItem[] = [
  {
    q: "What is NDIS Support Coordination?",
    a: "Support Coordination is a capacity building support funded through your NDIS plan. A Support Coordinator helps you understand and use your plan, connect with providers and community supports, set up service agreements, and build your ability to coordinate your own supports over time.",
  },
  {
    q: "What does a Psychosocial Recovery Coach do?",
    a: "A Psychosocial Recovery Coach works one-on-one with people living with psychosocial disability. They help you design a recovery plan, build everyday skills and routines, manage ups and downs, connect with mental health and community services, and coordinate your NDIS supports with a recovery focus.",
  },
  {
    q: "Does it cost me anything?",
    a: "If Support Coordination or Psychosocial Recovery Coaching is funded in your NDIS plan, our services are paid from that funding, so there are no out-of-pocket costs to you. We’ll always explain how your funding is used and agree on everything with you before we start.",
  },
  {
    q: "How do I know if these supports are in my NDIS plan?",
    a: "Look in your plan for funding under the Capacity Building – Support Coordination budget, or for a stated recovery coaching support. If you’re not sure, send us a copy or call us and we’ll go through it with you for free.",
  },
  {
    q: "Can I change Support Coordinators?",
    a: "Yes. You have choice and control over who provides your supports. If your current provider isn’t the right fit, you can change. We’ll help make the handover smooth, with notice given in line with your existing service agreement.",
  },
  {
    q: "Who can make a referral?",
    a: "Anyone, with the participant’s consent. Participants can self-refer, and families, carers, LACs, NDIA planners, GPs, psychologists, hospitals and community organisations can refer through our online referral form.",
  },
];

export default function Home() {
  return (
    <>
      <HomeHero />


      {/* Services */}
      <section id="services" className="scroll-mt-28 py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our specialised services"
            title={
              <>
                Two specialised supports. <span className="text-teal italic">One clear direction.</span>
              </>
            }
            intro="We focus on just two NDIS services and do them exceptionally well. Whether you need help making your plan work, or support with your mental health recovery, you’ll have someone who genuinely knows your story."
          />

          <Stagger className="mt-16 grid gap-8 lg:grid-cols-2">
            {services.map((s) => (
              <StaggerItem key={s.href}>
                <TiltCard className="h-full rounded-[2.5rem]">
                  <Link
                    href={s.href}
                    className="group flex h-full flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-[0_40px_90px_-45px_rgba(13,49,87,0.5)] ring-1 ring-navy/5"
                  >
                    <div className="relative h-72 overflow-hidden sm:h-80">
                      <Image
                        src={s.img}
                        alt={s.alt}
                        fill
                        sizes="(min-width: 1024px) 45vw, 95vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                      <span className={`absolute top-6 left-6 rounded-full px-4 py-1.5 text-xs font-bold tracking-wider text-white uppercase ${s.accent}`}>
                        {s.eyebrow}
                      </span>
                      <span className="absolute right-6 bottom-6 grid h-14 w-14 place-items-center rounded-full bg-white text-navy transition-all duration-500 group-hover:rotate-45 group-hover:bg-gold">
                        <ArrowUpRight className="h-6 w-6" aria-hidden />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-8 sm:p-10">
                      <h3 className="font-display text-3xl font-semibold text-navy">{s.title}</h3>
                      <p className="mt-4 leading-relaxed text-muted">{s.text}</p>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {s.points.map((p) => (
                          <li key={p} className="rounded-full bg-cream px-4 py-2 text-sm font-semibold text-navy">
                            {p}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-auto pt-8 font-bold text-teal">
                        Learn more
                        <span className="ml-2 inline-block transition-transform group-hover:translate-x-2">→</span>
                      </span>
                    </div>
                  </Link>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-8">
            <Link
              href="/lac-vs-support-coordinator"
              className="group flex flex-col items-start gap-4 rounded-[2rem] bg-white p-6 ring-1 ring-navy/5 transition hover:shadow-xl sm:flex-row sm:items-center sm:p-8"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-ochre font-display text-xl font-bold text-white italic">vs</span>
              <span className="flex-1">
                <span className="block font-display text-xl font-semibold text-navy sm:text-2xl">Local Area Coordinator or Support Coordinator?</span>
                <span className="mt-1 block text-muted">See who does what, who to contact, and whether you need both.</span>
              </span>
              <span className="inline-flex items-center gap-2 font-bold text-teal">
                Read the guide <ArrowUpRight className="h-5 w-5 transition group-hover:rotate-45" aria-hidden />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Support Coordination <span className="text-teal italic">services.</span>
              </>
            }
            intro="As your Support Coordinator, we work with you to understand your goals and connect you with the right services and providers."
          />
          <Stagger className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2">
            {whatWeDo.map((w) => (
              <StaggerItem key={w.title}>
                <div className="group h-full rounded-[2rem] bg-cream p-8 ring-1 ring-sky/25 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-40px_rgba(13,49,87,0.45)]">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-teal shadow-sm transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                    <w.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-navy">{w.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{w.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <OranaRegion />

      {/* Intro / about */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <Parallax className="relative aspect-[5/6] overflow-hidden rounded-[2.5rem]" speed={0.06}>
              <Image
                src="/images/connection-laughing.jpg"
                alt="A young man with Down syndrome sharing a joyful moment with an older man outdoors"
                fill
                sizes="(min-width: 1024px) 45vw, 95vw"
                className="scale-110 object-cover"
              />
            </Parallax>
            <Reveal
              direction="up"
              delay={0.3}
              className="absolute -right-3 -bottom-8 w-56 rounded-3xl bg-navy p-6 text-white shadow-2xl sm:-right-8 sm:w-64"
            >
              <p className="font-display text-5xl font-semibold text-gold">
                <Counter to={100} suffix="%" />
              </p>
              <p className="mt-2 text-sm leading-snug text-white/80">focused on your goals, your choices and your pace.</p>
            </Reveal>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="About Support Plan Navigators"
              title={
                <>
                  A local guide <span className="text-teal italic">you can trust.</span>
                </>
              }
            />
            <Reveal delay={0.2}>
              <div className="prose-brand mt-6 text-lg">
                <p>
                  Support Plan Navigators is led by a dedicated support coordinator with deep roots in the Orana region. We
                  understand the unique needs of our community, from Dubbo to the surrounding towns and Aboriginal communities
                  across the region.
                </p>
                <p>
                  Our mission is simple: to walk alongside you and your family, helping you make the most of your NDIS plan.
                  Whether you’re new to the NDIS or looking for more personalised support, we’re here to help you navigate
                  every step.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3} className="mt-8">
              <Link href="/about" className="group inline-flex items-center gap-2 text-lg font-bold text-teal">
                Learn more <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Acknowledgement />

      {/* Why choose us */}
      <section className="bg-sand/70 py-16 sm:py-24 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why choose us"
            title={
              <>
                Support that feels <span className="text-teal italic">like home.</span>
              </>
            }
          />
          <Stagger className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
            {whyChoose.map((w) => (
              <StaggerItem key={w.title} className="text-center">
                <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-ochre/15 text-ochre transition-transform duration-500 hover:scale-110">
                  <w.icon className="h-8 w-8" aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-navy">{w.title}</h3>
                <p className="mx-auto mt-3 max-w-sm leading-relaxed text-muted">{w.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <JsonLd data={faqJsonLd(faqs)} />
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Questions, answered"
              title={
                <>
                  Got questions? <span className="text-teal italic">We’ve got you.</span>
                </>
              }
              intro="Straight answers about NDIS Support Coordination and Psychosocial Recovery Coaching."
            />
            <Reveal delay={0.3} className="mt-8">
              <ButtonLink href="/faqs" variant="outline">
                View all FAQs
              </ButtonLink>
            </Reveal>
          </div>
          <Reveal direction="left">
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
