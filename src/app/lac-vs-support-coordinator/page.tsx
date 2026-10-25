import { ChevronRight, MapPinned, MousePointerClick, Route } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { ContactMatrix } from "@/components/lac/ContactMatrix";
import { LacBanner } from "@/components/lac/LacBanner";
import { SupportVenn } from "@/components/lac/SupportVenn";
import { Reveal, Stagger, StaggerItem, WordReveal } from "@/components/motion";
import { ButtonLink, JsonLd, SectionHeading } from "@/components/ui";
import { WindingRoad } from "@/components/WindingRoad";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, type FaqItem } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "LAC vs Support Coordinator: What’s the Difference?",
  description:
    "Local Area Coordinator (LAC) vs NDIS Support Coordinator explained. Learn what each role does, who to contact for common situations, how they’re funded and whether you can have both.",
  path: "/lac-vs-support-coordinator",
  image: "/images/coaching-office.jpg",
  keywords: [
    "LAC vs support coordinator",
    "local area coordinator vs support coordinator",
    "difference between LAC and support coordinator",
    "NDIS local area coordinator",
    "can I have an LAC and a support coordinator",
    "plan manager vs support coordinator",
  ],
});

const compare: { label: string; lac: string; sc: string }[] = [
  {
    label: "Who they work for",
    lac: "An NDIA partner organisation in your community. LACs work on behalf of the NDIA.",
    sc: "A provider you choose, such as Support Plan Navigators.",
  },
  {
    label: "How they’re paid",
    lac: "Funded by the NDIA. It doesn’t come out of your plan.",
    sc: "Paid from the Capacity Building – Support Coordination budget in your plan, if it’s funded.",
  },
  {
    label: "Can you choose who?",
    lac: "Usually allocated based on where you live.",
    sc: "Yes. You choose your provider, and you can change if it isn’t the right fit.",
  },
  {
    label: "Main focus",
    lac: "Helping you understand and access the NDIS, create and review your plan, and connect with community and mainstream services.",
    sc: "Putting your plan into action: finding providers, setting up service agreements, coordinating supports and solving problems.",
  },
  {
    label: "How hands-on?",
    lac: "Supports many participants, so help is generally more high-level.",
    sc: "Works closely with you through funded hours, often with regular check-ins.",
  },
  {
    label: "Best for",
    lac: "Getting started, plan questions, NDIA decisions and plan reassessments.",
    sc: "Multiple providers, complex situations, service issues and building your skills to manage supports.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "What is a Local Area Coordinator (LAC)?",
    a: "A Local Area Coordinator works for an NDIA partner organisation in your community. LACs help people understand and access the NDIS, help participants create, use and review their plans, and connect people with community and mainstream services. LAC support is funded by the NDIA, not from your plan.",
  },
  {
    q: "What is the difference between an LAC and a Support Coordinator?",
    a: "An LAC is your local NDIA partner who helps you access the NDIS and understand your plan. A Support Coordinator is a provider you choose, funded from your plan, who works more closely with you to put your plan into action: connecting you with providers, coordinating supports and resolving problems.",
  },
  {
    q: "Can I have an LAC and a Support Coordinator at the same time?",
    a: "Yes. They have different roles. If you have Support Coordination funded in your plan, your Support Coordinator usually becomes your main day-to-day contact for organising supports, while your LAC or the NDIA remains your contact for plan changes, reassessments and NDIA decisions.",
  },
  {
    q: "Do I need to pay for an LAC?",
    a: "No. LAC services are funded by the NDIA and don’t come out of your NDIS plan budget.",
  },
  {
    q: "How do I get Support Coordination in my plan?",
    a: "Talk to your LAC or NDIA planner at your planning meeting or plan reassessment. Explain why you need help to coordinate your supports, for example multiple providers, complex needs or a recent crisis, and provide evidence where you can.",
  },
  {
    q: "What does a Plan Manager do?",
    a: "A Plan Manager pays your providers’ invoices from your plan, tracks your spending and sends you budget statements. They’re different from a Support Coordinator, who helps you find and coordinate supports.",
  },
  {
    q: "What about children under 9?",
    a: "Children younger than 9 and their families are generally supported by early childhood partners rather than LACs. Talk to the NDIA or your local early childhood partner about the right pathway.",
  },
];

export default function LacVsScPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "LAC vs Support Coordinator", path: "/lac-vs-support-coordinator" }])} />
      <JsonLd data={faqJsonLd(faqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:pb-24">
        <div className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-gold-light/30 blur-3xl" />
        <div className="pointer-events-none absolute top-60 -left-40 h-[28rem] w-[28rem] rounded-full bg-ochre-light/30 blur-3xl" />
        <WindingRoad className="pointer-events-none absolute bottom-0 left-0 w-[70%] max-w-3xl opacity-[0.1]" />
        <div className="container-x relative">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
              <li>
                <Link href="/" className="inline-block py-1.5 hover:text-teal">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                <Link href="/ndis-resources" className="inline-block py-1.5 hover:text-teal">
                  Resources
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                <span aria-current="page" className="font-semibold text-navy">
                  LAC vs Support Coordinator
                </span>
              </li>
            </ol>
          </nav>

          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> NDIS roles explained
              </span>
            </Reveal>
            <h1 className="mt-6 font-display text-[2.5rem] leading-[1.05] font-semibold tracking-tight text-navy sm:text-6xl">
              <WordReveal text="LAC vs Support Coordinator: what’s the difference?" highlight={["difference?"]} delay={0.1} />
            </h1>
            <Reveal delay={0.5}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
                Local Area Coordinators and Support Coordinators both help NDIS participants, but they do different jobs.
                Here’s a simple guide to who does what, who to contact, and whether you need both.
              </p>
            </Reveal>
            <Reveal delay={0.65} className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink href="#who-to-contact">Who should I contact?</ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Ask us a question
              </ButtonLink>
            </Reveal>
          </div>
          <Reveal delay={0.3} className="mt-12 sm:mt-16">
            <LacBanner />
          </Reveal>
        </div>
      </section>

      {/* Two roles at a glance */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="The two roles at a glance"
            title={
              <>
                Same goal, <span className="text-teal italic">different jobs.</span>
              </>
            }
            intro="Both roles exist to help you get the most from the NDIS. The difference is where they sit and how closely they work with you."
          />
          <Stagger className="mt-14 grid gap-6 lg:grid-cols-2">
            <StaggerItem>
              <div className="relative h-full overflow-hidden rounded-[2rem] bg-ochre/10 p-8 ring-1 ring-ochre/25 sm:p-10">
                <MapPinned className="absolute -right-6 -bottom-6 h-40 w-40 text-ochre/10" aria-hidden />
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ochre text-white">
                  <MapPinned className="h-7 w-7" aria-hidden />
                </span>
                <h2 className="mt-6 font-display text-3xl font-semibold text-navy">Local Area Coordinator (LAC)</h2>
                <p className="mt-4 leading-relaxed text-muted">
                  Your local connection to the NDIS. LACs work for NDIA partner organisations and help you understand the
                  Scheme, apply, build and review your plan, and link in with community and mainstream services like
                  health, education and transport.
                </p>
                <ul className="mt-6 space-y-2 text-navy">
                  {["Free, funded by the NDIA", "Help applying for the NDIS", "Explains your plan", "Plan reassessments & NDIA decisions"].map((p) => (
                    <li key={p} className="flex items-center gap-3 font-medium">
                      <span className="h-2 w-2 rounded-full bg-ochre" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="relative h-full overflow-hidden rounded-[2rem] bg-navy p-8 text-white sm:p-10">
                <Route className="absolute -right-6 -bottom-6 h-40 w-40 text-white/5" aria-hidden />
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-teal text-white">
                  <Route className="h-7 w-7" aria-hidden />
                </span>
                <h2 className="mt-6 font-display text-3xl font-semibold">Support Coordinator</h2>
                <p className="mt-4 leading-relaxed text-white/75">
                  Your hands-on navigator once you have a plan. A Support Coordinator is a provider you choose, funded from
                  your plan, who helps you find providers, set up services, coordinate everything and build your confidence
                  to manage it yourself.
                </p>
                <ul className="mt-6 space-y-2">
                  {["Funded in your NDIS plan", "You choose your provider", "Finds & connects providers", "Solves problems when things go wrong"].map((p) => (
                    <li key={p} className="flex items-center gap-3 font-medium">
                      <span className="h-2 w-2 rounded-full bg-gold" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Who to contact */}
      <section id="who-to-contact" className="scroll-mt-24 py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Who should I contact?"
            title={
              <>
                “If I already have a Support Coordinator, <span className="text-teal italic">can I still contact my LAC?”</span>
              </>
            }
            intro="Yes, you can. They have different roles. Use this guide to work out who to contact for common situations."
          />
          <Reveal className="mt-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-muted ring-1 ring-navy/10">
              <MousePointerClick className="h-4 w-4 text-gold" aria-hidden /> Tap any situation for more detail
            </span>
          </Reveal>
          <Reveal className="mx-auto mt-10 max-w-5xl">
            <ContactMatrix />
          </Reveal>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted">
            A Plan Manager is only involved if your plan is plan-managed. Support Plan Navigators provides Support Coordination
            and Psychosocial Recovery Coaching; we work alongside your LAC and Plan Manager.
          </p>
        </div>
      </section>

      {/* Side by side */}
      <section className="bg-sand/60 py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Side by side"
            title={
              <>
                LAC vs Support Coordinator, <span className="text-teal italic">compared.</span>
              </>
            }
          />
          <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_100px_-50px_rgba(13,49,87,0.5)] ring-1 ring-navy/5">
            <div className="hidden grid-cols-[12rem_1fr_1fr] bg-navy text-white md:grid">
              <span className="p-5" />
              <span className="flex items-center gap-2 p-5 font-display text-lg font-semibold">
                <span className="h-3 w-3 rounded-full bg-ochre" /> Local Area Coordinator
              </span>
              <span className="flex items-center gap-2 p-5 font-display text-lg font-semibold">
                <span className="h-3 w-3 rounded-full bg-teal-light" /> Support Coordinator
              </span>
            </div>
            <Stagger>
              {compare.map((c) => (
                <StaggerItem key={c.label} className="grid border-b border-navy/5 last:border-0 md:grid-cols-[12rem_1fr_1fr]">
                  <p className="bg-cream/70 px-5 pt-5 pb-2 font-display text-lg font-semibold text-navy md:py-5">{c.label}</p>
                  <div className="px-5 py-3 md:py-5">
                    <p className="mb-1 text-xs font-bold tracking-[0.14em] text-ochre uppercase md:hidden">LAC</p>
                    <p className="leading-relaxed text-muted">{c.lac}</p>
                  </div>
                  <div className="bg-teal/5 px-5 py-3 pb-5 md:py-5">
                    <p className="mb-1 text-xs font-bold tracking-[0.14em] text-teal uppercase md:hidden">Support Coordinator</p>
                    <p className="leading-relaxed text-navy">{c.sc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Do I need both */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Do I need both?"
              title={
                <>
                  Different roles, <span className="text-teal italic">working around you.</span>
                </>
              }
            />
            <Reveal delay={0.2} className="prose-brand mt-6 text-lg">
              <p>
                Every NDIS participant can get help from the NDIA and its partners, including LACs. Support Coordination is
                extra: it’s included in your plan when the NDIA decides you need help to coordinate your supports.
              </p>
              <p>
                If you have both, think of it this way: <strong>your Support Coordinator</strong> is your day-to-day contact
                for organising and coordinating supports, while <strong>your LAC or the NDIA</strong> handles plan changes,
                reassessments and decisions. If you’re plan-managed, <strong>your Plan Manager</strong> looks after
                invoices and spending.
              </p>
              <p>
                When everyone knows their role, you get the best of all three, without doubling up or falling through the
                gaps.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/support-coordination">About Support Coordination</ButtonLink>
            </Reveal>
          </div>
          <Reveal direction="left" className="relative">
            <div className="rounded-[2.5rem] bg-white p-6 shadow-[0_40px_100px_-50px_rgba(13,49,87,0.5)] ring-1 ring-navy/5 sm:p-10">
              <SupportVenn />
            </div>
            <div className="absolute -bottom-8 -left-2 hidden h-36 w-36 overflow-hidden rounded-full border-[6px] border-cream shadow-xl sm:block">
              <Image src="/images/coaching-office.jpg" alt="" fill sizes="9rem" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading
            align="left"
            eyebrow="LAC & Support Coordination FAQs"
            title={
              <>
                Your questions, <span className="text-teal italic">answered.</span>
              </>
            }
            intro="Still unsure who to talk to? Contact us and we’ll point you in the right direction, even if we’re not the right fit."
          />
          <Reveal direction="left">
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand title="Want a Support Coordinator in your corner?" />
    </>
  );
}
