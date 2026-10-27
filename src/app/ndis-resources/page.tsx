import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Glossary } from "@/components/Glossary";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "NDIS Resources & Plan Guides",
  description:
    "Plain-language NDIS resources: understand your NDIS plan and budgets, prepare for your plan reassessment, learn common NDIS terms and find trusted disability and mental health support services.",
  path: "/ndis-resources",
  image: "/images/planning-notes.jpg",
  imageAlt: "A notebook, pen and coffee ready for NDIS plan preparation",
  keywords: ["understanding my NDIS plan", "NDIS budgets explained", "NDIS plan reassessment checklist", "NDIS glossary"],
});

const budgets = [
  { name: "Core", color: "bg-teal", text: "Everyday supports: help with daily life, consumables, transport and social and community participation. Usually the most flexible budget." },
  { name: "Capacity Building", color: "bg-gold", text: "Supports that build your skills and independence over time, including Support Coordination, recovery coaching, therapies and employment support." },
  { name: "Capital", color: "bg-ochre", text: "One-off investments like assistive technology, equipment, home or vehicle modifications and Specialist Disability Accommodation." },
];

const prep = [
  "Write down what has worked well, and what hasn’t, during this plan",
  "Collect reports from therapists, clinicians and your Support Coordinator or Recovery Coach",
  "Think about your goals for the next plan, both short and long term",
  "Note any changes in your health, living situation or support needs",
  "Check how much of each budget you’ve used, and why",
  "Decide who you’d like with you at the meeting for support",
];

const links = [
  { name: "NDIS (National Disability Insurance Scheme)", href: "https://www.ndis.gov.au", text: "Official information about the NDIS, your plan and pricing." },
  { name: "NDIS Quality and Safeguards Commission", href: "https://www.ndiscommission.gov.au", text: "Provider standards, your rights and how to make a complaint." },
  { name: "Disability Gateway", href: "https://www.disabilitygateway.gov.au", text: "Find disability services and information across Australia." },
  { name: "Lifeline · 13 11 14", href: "https://www.lifeline.org.au", text: "24/7 crisis support and suicide prevention." },
  { name: "Beyond Blue · 1300 22 4636", href: "https://www.beyondblue.org.au", text: "Mental health information and support, any time." },
  { name: "SANE Australia", href: "https://www.sane.org", text: "Support for people living with complex mental health issues." },
  { name: "13YARN · 13 92 76", href: "https://www.13yarn.org.au", text: "24/7 crisis support line run by Aboriginal & Torres Strait Islander people." },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="NDIS Resources"
        title="Understand your NDIS plan, in plain language."
        highlight={["plain"]}
        intro={<p>Practical guides, a jargon-free glossary and trusted services to help you make the most of the NDIS.</p>}
        image="/images/planning-notes.jpg"
        imageAlt="A notebook, pen and coffee on a table, ready for planning"
        crumbs={[{ name: "NDIS Resources", path: "/ndis-resources" }]}
        bannerTitle="NDIS Resources & Plan Guides"
      />

      <section id="understanding-your-plan" className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Guide 1"
            title={
              <>
                Understanding your <span className="text-teal italic">NDIS plan.</span>
              </>
            }
            intro="Your NDIS plan sets out your goals and the funding the NDIA has approved to help you pursue them. Funding is split into three main budgets."
          />
          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {budgets.map((b) => (
              <StaggerItem key={b.name}>
                <div className="h-full overflow-hidden rounded-[2rem] bg-cream ring-1 ring-navy/5">
                  <div className={`h-2 ${b.color}`} />
                  <div className="p-8">
                    <h3 className="font-display text-2xl font-semibold text-navy">{b.name} supports</h3>
                    <p className="mt-3 leading-relaxed text-muted">{b.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="prose-brand mx-auto mt-12 max-w-3xl text-lg">
            <p>
              Your plan also shows how your funding is managed: by the NDIA, by a plan manager, by you (self-managed), or a
              combination. This affects which providers you can use and how invoices are paid. A Support Coordinator or
              Recovery Coach can walk you through every section of your plan so you know exactly what’s possible.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="plan-reassessment" className="py-16 sm:py-24 lg:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Guide 2"
              title={
                <>
                  Preparing for your <span className="text-teal italic">plan reassessment.</span>
                </>
              }
              intro="A little preparation goes a long way. Use this checklist in the months before your plan reassessment."
            />
            <Stagger as="ul" className="mt-8 grid gap-3">
              {prep.map((p) => (
                <StaggerItem as="li" key={p} className="flex items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-navy/5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ochre" aria-hidden />
                  <span className="text-navy">{p}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal direction="left" className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
            <Image src="/images/planning-session.jpg" alt="A participant preparing paperwork with support" fill sizes="(min-width:1024px) 45vw, 95vw" className="object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="container-x pb-16 sm:pb-24">
        <Reveal>
          <Link
            href="/lac-vs-support-coordinator"
            className="group grid items-center gap-6 rounded-[2.5rem] bg-navy p-8 text-white transition hover:shadow-2xl sm:grid-cols-[auto_1fr_auto] sm:p-10"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-gold font-display text-2xl font-bold text-navy italic">vs</span>
            <span>
              <span className="text-xs font-bold tracking-[0.18em] text-gold-light uppercase">Guide 3</span>
              <span className="mt-1 block font-display text-2xl font-semibold sm:text-3xl">LAC vs Support Coordinator: what’s the difference?</span>
              <span className="mt-2 block text-white/75">Who does what, who to contact for common situations, and whether you need both.</span>
            </span>
            <ArrowUpRight className="h-8 w-8 text-gold transition group-hover:rotate-45" aria-hidden />
          </Link>
        </Reveal>
      </section>

      <section id="glossary" className="bg-sand/60 py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            align="left"
            eyebrow="Guide 3"
            title={
              <>
                NDIS terms, <span className="text-teal italic">explained.</span>
              </>
            }
            intro="The NDIS has its own language. Search our glossary of common terms."
          />
          <Reveal className="mt-10">
            <Glossary />
          </Reveal>
        </div>
      </section>

      <section id="helpful-links" className="py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Helpful services"
            title={
              <>
                Trusted places to <span className="text-teal italic">find support.</span>
              </>
            }
            intro="If you need urgent help, call 000. These services can also help."
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((l) => (
              <StaggerItem key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-[2rem] bg-white p-7 ring-1 ring-navy/5 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="flex items-start justify-between gap-4">
                    <span className="font-display text-xl font-semibold text-navy">{l.name}</span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-gold transition group-hover:rotate-45" aria-hidden />
                  </span>
                  <span className="mt-3 text-muted">{l.text}</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand title="Want someone to go through your plan with you?" />
    </>
  );
}
