import {
  ArrowUpRight,
  BadgeCheck,
  HandHeart,
  HeartHandshake,
  Languages,
  MessageCircleHeart,
  ShieldCheck,
  Sprout,
  Stethoscope,
  UserRound,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CompareRoles } from "@/components/CompareRoles";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { HomeHero } from "@/components/home/HomeHero";
import { SupportFinder } from "@/components/home/SupportFinder";
import { Journey } from "@/components/Journey";
import { Marquee } from "@/components/Marquee";
import { Counter, Parallax, Reveal, Stagger, StaggerItem, TiltCard } from "@/components/motion";
import { ButtonLink, JsonLd, SectionHeading } from "@/components/ui";
import { faqJsonLd, type FaqItem } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "NDIS Support Coordination & Psychosocial Recovery Coaching | Support Plan Navigators" },
  description:
    "NDIS Support Coordination and Psychosocial Recovery Coaching across Australia. We help NDIS participants understand their plan, connect with the right providers and build a life they value. Book a free chat.",
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

const values = [
  { icon: HeartHandshake, title: "Person-centred, always", text: "Your goals lead. We work at your pace, respect your choices and make sure you have choice and control at every step." },
  { icon: ShieldCheck, title: "Trauma-informed & safe", text: "We create a safe, non-judgemental space and recognise how past experiences can shape the way support feels." },
  { icon: Sprout, title: "Building your capacity", text: "Good support should grow your independence, not your reliance on us. We teach the ‘why’ along with the ‘how’." },
  { icon: Languages, title: "Plain language, no jargon", text: "NDIS terms can be confusing. We explain your plan, budgets and options clearly, and put important things in writing." },
  { icon: MessageCircleHeart, title: "Responsive & reachable", text: "You’ll have a dedicated navigator who knows your story, returns your calls and keeps you informed." },
  { icon: BadgeCheck, title: "Honest advice", text: "We focus on two specialised services, so our recommendations are about what suits you, never about filling our own rosters." },
];

const audiences = [
  { icon: UserRound, title: "NDIS participants", text: "Whether you’re new to the NDIS or have had a plan for years, we help you get more out of it." },
  { icon: Users, title: "Families & carers", text: "We work with the people who matter to you, and share the load so you can focus on being family." },
  { icon: Stethoscope, title: "Clinicians & allied health", text: "GPs, psychologists, mental health teams and therapists can refer with confidence. We keep you in the loop." },
  { icon: HandHeart, title: "LACs & community services", text: "We collaborate with Local Area Coordinators, hospitals, housing and community organisations." },
];

const steps = [
  { tag: "Step one", title: "A free, no-pressure chat", text: "Call, email or send a referral. We’ll listen to what’s happening for you, answer your questions and check what your NDIS plan includes." },
  { tag: "Step two", title: "Getting to know you", text: "We meet in a way that suits you, in person, by phone or video, to understand your goals, your strengths, your supports and what hasn’t worked before." },
  { tag: "Step three", title: "Your plan in action", text: "Together we build a clear action plan or recovery plan, with practical steps, the right providers and a budget that stays on track." },
  { tag: "Step four", title: "Connect, coordinate, grow", text: "We connect you with supports, help set up service agreements and build your skills and confidence to manage more yourself." },
  { tag: "Step five", title: "Review & prepare for what’s next", text: "We check in regularly, celebrate progress and gather the evidence you need for your next NDIS plan reassessment." },
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

      <Marquee
        items={["Person-centred", "Trauma-informed", "Choice & control", "Recovery-oriented", "Strengths-based", "Plain language", "Culturally safe", "Goal focused"]}
      />

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
                    className="group flex h-full flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-[0_40px_90px_-45px_rgba(14,42,77,0.5)] ring-1 ring-navy/5"
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
        </div>
      </section>

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
              eyebrow="It all starts with you"
              title={
                <>
                  Your plan is about your life, <span className="text-teal italic">not paperwork.</span>
                </>
              }
            />
            <Reveal delay={0.2}>
              <div className="prose-brand mt-6 text-lg">
                <p>
                  The NDIS can open real doors, but working out how to use your plan can feel overwhelming. Who do you call?
                  Which providers are any good? What happens when something goes wrong? And what does “capacity building”
                  even mean?
                </p>
                <p>
                  At Support Plan Navigators, we sit beside you and help you find the way. We take the time to understand
                  what matters to you, explain your options honestly, and connect you with supports that fit your life,
                  your culture and your goals. Then we stay with you, adjusting as life changes.
                </p>
              </div>
            </Reveal>
            <Stagger className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: 2, s: "", l: "specialised NDIS services" },
                { n: 1, s: ":1", l: "dedicated navigator for you" },
                { n: 3, s: "", l: "ways to meet: in person, phone or video" },
              ].map((c) => (
                <StaggerItem key={c.l} className="rounded-3xl bg-cream p-5">
                  <p className="font-display text-4xl font-semibold text-navy">
                    <Counter to={c.n} suffix={c.s} />
                  </p>
                  <p className="mt-1 text-sm leading-snug text-muted">{c.l}</p>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/about">About us</ButtonLink>
              <ButtonLink href="/how-it-works" variant="outline">
                How it works
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Support finder */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="pointer-events-none absolute top-20 -right-40 h-[30rem] w-[30rem] rounded-full bg-sage-light/40 blur-3xl" />
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Not sure where to start?"
              title={
                <>
                  Find the support that <span className="text-teal italic">fits you.</span>
                </>
              }
              intro="Answer three quick questions and we’ll suggest whether Support Coordination, Psychosocial Recovery Coaching, or a combination might suit you best. It takes less than a minute, and nothing you choose is stored or shared."
            />
            <Reveal delay={0.3} className="mt-8 hidden lg:block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem]">
                <Image src="/images/hands-comfort.jpg" alt="Two people holding hands across a table in comfort" fill sizes="40vw" className="object-cover" />
              </div>
            </Reveal>
          </div>
          <Reveal direction="left">
            <SupportFinder />
          </Reveal>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-sand/60 py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="How we work together"
            title={
              <>
                Your path from plan <span className="text-teal italic">to possibility.</span>
              </>
            }
            intro="No two journeys are the same, but every one starts with listening. Here’s what working with us usually looks like."
          />
          <div className="mt-16">
            <Journey steps={steps} />
          </div>
          <Reveal className="mt-14 text-center">
            <ButtonLink href="/how-it-works">See the full process</ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why choose Support Plan Navigators"
            title={
              <>
                Support that feels <span className="text-teal italic">human.</span>
              </>
            }
            intro="The right Support Coordinator or Recovery Coach can change how the NDIS feels. Here’s what you can expect from us every single time."
          />
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <StaggerItem key={v.title}>
                <div className="group relative h-full overflow-hidden rounded-[2rem] bg-white p-8 ring-1 ring-navy/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-40px_rgba(14,42,77,0.45)]">
                  <span className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gold-light/0 transition-all duration-700 group-hover:scale-150 group-hover:bg-gold-light/30" />
                  <span
                    className={`relative grid h-14 w-14 place-items-center rounded-2xl text-white transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 ${
                      ["bg-teal", "bg-navy", "bg-sage", "bg-gold", "bg-teal", "bg-navy"][i]
                    }`}
                  >
                    <v.icon className="h-7 w-7" aria-hidden />
                  </span>
                  <h3 className="relative mt-6 font-display text-2xl font-semibold text-navy">{v.title}</h3>
                  <p className="relative mt-3 leading-relaxed text-muted">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Compare */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Know the difference"
            title={
              <>
                Support Coordinator or <span className="text-teal italic">Recovery Coach?</span>
              </>
            }
            intro="Both roles help you use your NDIS plan, but they focus on different things. Tap to compare."
          />
          <div className="mt-14">
            <CompareRoles />
          </div>
        </div>
      </section>

      {/* Who we support */}
      <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
        <div className="pointer-events-none absolute -top-40 left-1/3 h-[30rem] w-[30rem] rounded-full bg-teal/30 blur-3xl" />
        <div className="container-x relative">
          <SectionHeading
            light
            eyebrow="Who we support"
            title={
              <>
                Here for participants, and <span className="text-gold-light italic">everyone in their corner.</span>
              </>
            }
          />
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a) => (
              <StaggerItem key={a.title}>
                <div className="h-full rounded-[2rem] bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10">
                  <a.icon className="h-10 w-10 text-gold" aria-hidden />
                  <h3 className="mt-6 font-display text-2xl font-semibold">{a.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/70">{a.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-12 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/make-a-referral" variant="gold">
              Make a referral
            </ButtonLink>
            <ButtonLink href="/contact" variant="light">
              Talk to our team
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 lg:py-32">
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
