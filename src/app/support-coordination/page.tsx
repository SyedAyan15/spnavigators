import {
  AlarmClock,
  BookOpenCheck,
  FileSignature,
  FileText,
  Network,
  PiggyBank,
  Search,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { Checklist } from "@/components/Checklist";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { FeatureGrid, type Feature } from "@/components/FeatureGrid";
import { Journey } from "@/components/Journey";
import { Marquee } from "@/components/Marquee";
import { Parallax, Reveal } from "@/components/motion";
import { PageHero } from "@/components/PageHero";
import { Tabs, type TabItem } from "@/components/Tabs";
import { ButtonLink, JsonLd, SectionHeading } from "@/components/ui";
import { faqJsonLd, pageMetadata, serviceJsonLd, type FaqItem } from "@/lib/seo";

const description =
  "NDIS Support Coordination that helps you understand your NDIS plan, choose the right providers, set up service agreements and prepare for plan reassessments. Talk to a Support Coordinator today.";

export const metadata = pageMetadata({
  title: "NDIS Support Coordination | Support Coordinators",
  description,
  path: "/support-coordination",
  image: "/images/planning-session.jpg",
  keywords: [
    "NDIS support coordination",
    "NDIS support coordinator",
    "coordination of supports",
    "support connection",
    "NDIS plan implementation",
    "NDIS plan reassessment",
    "NDIS providers",
  ],
});

const help: Feature[] = [
  { icon: BookOpenCheck, title: "Understand your NDIS plan", text: "We walk through your plan, goals and budgets in plain language, so you know exactly what you can use your funding for." },
  { icon: Search, title: "Find the right providers", text: "We research options, share honest pros and cons and connect you with registered and unregistered providers that suit your needs and preferences." },
  { icon: FileSignature, title: "Service agreements & bookings", text: "We help you understand and set up service agreements and service bookings, and make sure the terms work for you." },
  { icon: PiggyBank, title: "Keep your budget on track", text: "We monitor how your funding is tracking, so supports don’t run out early and nothing important is left unused." },
  { icon: Network, title: "Connect to the wider system", text: "We link you with mainstream and community services too, including health, mental health, housing, education, employment and transport." },
  { icon: AlarmClock, title: "Problem-solving & crisis support", text: "When a provider falls through or life changes suddenly, we act quickly to find solutions and keep your supports in place." },
  { icon: TrendingUp, title: "Build your capacity", text: "We coach you to coordinate more of your own supports over time, building skills, confidence and genuine independence." },
  { icon: FileText, title: "Plan reassessment reports", text: "We gather evidence of progress and unmet needs, and prepare a clear report to support your next NDIS plan reassessment." },
];

const levels: TabItem[] = [
  {
    kicker: "Level 1",
    label: "Support Connection",
    title: "Support Connection",
    text: "Short-term help to build your ability to connect with informal, community and funded supports, so you can get the most out of your plan and use it more independently.",
    points: ["Understanding your plan", "Connecting with providers", "Linking with community activities", "Building confidence to self-manage connections"],
  },
  {
    kicker: "Level 2",
    label: "Coordination of Supports",
    title: "Coordination of Supports",
    text: "The most common level of Support Coordination. Your Support Coordinator helps you understand and implement the full range of supports in your plan, and builds your capacity to coordinate them yourself.",
    points: [
      "Designing and implementing your supports",
      "Coordinating multiple providers",
      "Monitoring budgets and service agreements",
      "Resolving points of crisis",
      "Building resilience in your support network",
      "Preparing for plan reassessment",
    ],
  },
  {
    kicker: "Level 3",
    label: "Specialist Support Coordination",
    title: "Specialist Support Coordination",
    text: "A higher level of support for people whose situations are more complex, for example where there are significant risks, multiple service systems involved or a need for specialised expertise. It is delivered by experienced practitioners, often with a health or allied health background.",
    points: ["Managing complex barriers", "Reducing complexity in the support environment", "Working across health, justice or housing systems", "Ensuring consistent, high-quality delivery"],
  },
];

const steps = [
  { tag: "Week one", title: "Introductions & your goals", text: "We meet, get to know you and the people who support you, and read through your NDIS plan together." },
  { tag: "Getting set up", title: "Your support action plan", text: "We map your goals to your funding and agree on priorities, timeframes and the kinds of providers you’re looking for." },
  { tag: "Connecting", title: "Choosing providers", text: "We shortlist options, arrange meet-and-greets and help with service agreements, so you can choose with confidence." },
  { tag: "Ongoing", title: "Coordinating & checking in", text: "We keep your supports working together, track your budget and step in quickly when something isn’t working." },
  { tag: "Looking ahead", title: "Plan reassessment ready", text: "We gather progress notes and evidence, and help you prepare for your next plan meeting so your new plan reflects your needs." },
];

const faqs: FaqItem[] = [
  {
    q: "What does an NDIS Support Coordinator do?",
    a: "A Support Coordinator helps you understand and use your NDIS plan. They connect you with providers and community services, help with service agreements, monitor your budget, help resolve problems and build your ability to manage your own supports over time.",
  },
  {
    q: "How is Support Coordination funded?",
    a: "Support Coordination is funded in the Capacity Building – Support Coordination budget of your NDIS plan. It can only be used for Support Coordination, and the NDIA decides whether it is included and at what level. If it is funded, you don’t pay out of pocket.",
  },
  {
    q: "How do you choose which providers to recommend?",
    a: "We recommend providers based on your goals, needs, location and preferences, and we share honest pros and cons so you can choose. We focus on Support Coordination and Psychosocial Recovery Coaching, so our recommendations are always about what suits you best.",
  },
  {
    q: "How many hours of Support Coordination will I get?",
    a: "It depends on the funding in your plan. We’ll work with you to plan how hours are used across the year, prioritising set-up early on, regular check-ins, and time to prepare for your plan reassessment.",
  },
  {
    q: "Can a Support Coordinator help if I self-manage or am plan-managed?",
    a: "Yes. Support Coordination works with any plan management type: self-managed, plan-managed or NDIA-managed. We work alongside your plan manager if you have one.",
  },
  {
    q: "What if I don’t have Support Coordination in my plan?",
    a: "If you think you need it, you can ask the NDIA to include it at your next plan reassessment, or request a reassessment if your circumstances have changed. We can talk you through what kind of evidence may help.",
  },
];

export default function SupportCoordinationPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "NDIS Support Coordination",
          description,
          path: "/support-coordination",
          serviceType: "NDIS Support Coordination",
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      <PageHero
        eyebrow="NDIS Support Coordination"
        title="Making your NDIS plan work for you."
        highlight={["work"]}
        intro={
          <p>
            NDIS Support Coordination that turns your plan into the right supports, the right providers and
            real progress toward your goals, with a Support Coordinator who knows your story.
          </p>
        }
        image="/images/planning-session.jpg"
        imageAlt="A support coordinator reviewing an NDIS plan with two participants"
        crumbs={[{ name: "Support Coordination", path: "/support-coordination" }]}
        badge={
          <>
            <p className="text-xs font-bold tracking-[0.16em] text-teal uppercase">Funded by your NDIS plan</p>
            <p className="mt-2 text-sm leading-snug text-navy">
              Paid from your Capacity Building – Support Coordination budget, with no out-of-pocket cost.
            </p>
          </>
        }
      >
        <ButtonLink href="/contact">Book a free chat</ButtonLink>
        <ButtonLink href="/make-a-referral" variant="outline">
          Make a referral
        </ButtonLink>
      </PageHero>

      <Marquee dark items={["Understand your plan", "Choose your providers", "Coordinate your supports", "Build your independence", "Prepare for reassessment"]} />

      {/* What is SC */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="What is Support Coordination?"
              title={
                <>
                  A guide who helps you <span className="text-teal italic">use your plan well.</span>
                </>
              }
            />
            <Reveal delay={0.2} className="prose-brand mt-6 text-lg">
              <p>
                NDIS Support Coordination is a capacity building support that helps you put your NDIS plan into action.
                Your Support Coordinator works with you to understand your funding, find and connect with providers,
                and coordinate everything so your supports work together toward your goals.
              </p>
              <p>
                Just as importantly, good Support Coordination builds <strong>your</strong> skills. Over time you’ll feel
                more confident choosing providers, managing service agreements and speaking up for what you need. That’s
                choice and control in practice.
              </p>
              <p>
                At Support Plan Navigators, you’ll have one dedicated Support Coordinator who gets to know you, your
                family and your goals, and who is easy to reach when you need them.
              </p>
            </Reveal>
          </div>
          <div className="relative">
            <Parallax className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]" speed={0.06}>
              <Image
                src="/images/coaching-office.jpg"
                alt="A support coordinator and participant talking at a table in a bright office"
                fill
                sizes="(min-width: 1024px) 45vw, 95vw"
                className="scale-110 object-cover"
              />
            </Parallax>
            <Reveal delay={0.3} className="absolute -bottom-8 -left-4 max-w-xs rounded-3xl bg-gold p-6 text-navy shadow-2xl sm:-left-10">
              <p className="font-display text-xl leading-snug font-semibold italic">
                “We don’t just find you services. We help you build a support network that lasts.”
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="bg-sand/60 py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="How a Support Coordinator can help"
            title={
              <>
                Everything your plan needs, <span className="text-teal italic">in one place.</span>
              </>
            }
            intro="From your first plan to your next reassessment, here’s how our Support Coordinators help you get the most from your NDIS funding."
          />
          <div className="mt-16">
            <FeatureGrid items={help} />
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Levels of Support Coordination"
            title={
              <>
                Three levels, <span className="text-teal italic">tailored to your needs.</span>
              </>
            }
            intro="The NDIA funds Support Coordination at different levels depending on your circumstances. Your plan will show which level you have."
          />
          <div className="mt-14">
            <Tabs
              items={levels}
              note="Not sure which level is in your plan, or whether we can support it? Get in touch and we’ll check your plan with you for free."
            />
          </div>
        </div>
      </section>

      {/* Is it right for me */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square overflow-hidden rounded-full">
              <Image
                src="/images/support-worker-laugh.jpg"
                alt="A support worker and an older woman sharing a laugh"
                fill
                sizes="(min-width: 1024px) 45vw, 95vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-2 grid h-32 w-32 animate-float place-items-center rounded-full bg-teal p-4 text-center text-sm font-bold text-white shadow-xl">
              Your plan, your choice
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Is it right for me?"
              title={
                <>
                  Does any of this <span className="text-teal italic">sound familiar?</span>
                </>
              }
              intro="Tick anything that feels true for you right now."
            />
            <Reveal delay={0.2} className="mt-8">
              <Checklist
                items={[
                  "I’m not sure what my NDIS plan actually covers",
                  "I don’t know how to find good providers",
                  "My supports don’t talk to each other",
                  "I’m worried my funding will run out, or go unused",
                  "My plan reassessment is coming up and I feel unprepared",
                  "Something has changed and my supports aren’t working",
                ]}
                doneText="A Support Coordinator can help with this. Let’s have a chat."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="What to expect"
            title={
              <>
                From first hello to <span className="text-teal italic">plan reassessment.</span>
              </>
            }
          />
          <div className="mt-16">
            <Journey steps={steps} />
          </div>
        </div>
      </section>

      {/* NDIS changes */}
      <section className="container-x pb-8">
        <Reveal className="grid gap-8 rounded-[2.5rem] bg-sage/15 p-8 ring-1 ring-sage/30 sm:p-12 lg:grid-cols-[auto_1fr] lg:items-center">
          <span className="grid h-20 w-20 place-items-center rounded-3xl bg-sage text-3xl text-white">!</span>
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">The NDIS is changing. We’ll keep you informed.</h2>
            <p className="mt-3 leading-relaxed text-muted">
              The NDIS is going through a period of reform, including changes to planning and to how participants will be
              supported to navigate the Scheme in future. These changes are being introduced in stages. We follow
              announcements from the NDIA closely and will explain what any change means for you, in plain language,
              before it affects your supports.
            </p>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading
            align="left"
            eyebrow="Support Coordination FAQs"
            title={
              <>
                Common questions about <span className="text-teal italic">Support Coordination.</span>
              </>
            }
          />
          <Reveal direction="left">
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand title="Ready to make your NDIS plan work harder for you?" />
    </>
  );
}
