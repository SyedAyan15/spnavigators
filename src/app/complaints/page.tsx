import { ArrowUpRight, Ear, HeartHandshake, Languages, Mail, MessageSquareText, Phone, Search, ShieldCheck, UserRoundCheck, Wrench } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { ComplaintForm } from "@/components/forms/ComplaintForm";
import { Reveal, Stagger, StaggerItem, WordReveal } from "@/components/motion";
import { JsonLd, SectionHeading } from "@/components/ui";
import { WindingRoad } from "@/components/WindingRoad";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Complaints & Feedback",
  description:
    "Share a complaint, suggestion or compliment with Support Plan Navigators. Learn how we handle feedback, your rights, and how to contact the NDIS Quality and Safeguards Commission.",
  path: "/complaints",
  keywords: ["NDIS provider complaints", "NDIS feedback", "NDIS Quality and Safeguards Commission complaint"],
});

const steps = [
  { icon: Ear, title: "We listen", text: "We acknowledge your feedback promptly and make sure we understand what happened and what you’d like to see." },
  { icon: Search, title: "We look into it", text: "We review the matter fairly and confidentially, and keep you updated along the way." },
  { icon: Wrench, title: "We put it right", text: "We work with you on a fair outcome, and explain what we’ve done and why." },
  { icon: HeartHandshake, title: "We learn from it", text: "Every complaint helps us improve how we support you and everyone we work with." },
];

const rights = [
  { icon: ShieldCheck, text: "Making a complaint will never affect the services you receive from us." },
  { icon: UserRoundCheck, text: "You can have a family member, friend or advocate help you, or speak on your behalf." },
  { icon: MessageSquareText, text: "You can stay anonymous, although we won’t be able to reply to you." },
  { icon: Languages, text: "Need an interpreter? Call TIS National on 131 450 and ask them to contact us." },
];

export default function ComplaintsPage() {
  return (
    <>
      <PageBanner title="Complaints & Feedback" />
      <JsonLd data={breadcrumbJsonLd([{ name: "Complaints & Feedback", path: "/complaints" }])} />

      <section className="relative overflow-hidden pt-12 pb-16 sm:pb-24">
        <div className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-sky-light/30 blur-3xl" />
        <WindingRoad className="pointer-events-none absolute bottom-0 left-0 w-[70%] max-w-3xl opacity-10" />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <Reveal>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Complaints &amp; feedback
              </span>
            </Reveal>
            <p className="mt-6 font-display text-5xl leading-[1.05] font-semibold tracking-tight text-navy sm:text-6xl">
              <WordReveal text="Your voice helps us do better." highlight={["better."]} />
            </p>
            <Reveal delay={0.4}>
              <p className="mt-6 text-xl leading-relaxed text-muted">
                Whether it’s a complaint, a suggestion or a compliment, we want to hear it. Telling us when something isn’t
                right is the best way for us to fix it.
              </p>
            </Reveal>
          </div>

          <Stagger className="mt-12 grid gap-5 sm:grid-cols-3">
            <StaggerItem>
              <a href={`mailto:${site.email}?subject=${encodeURIComponent("Feedback / complaint")}`} className="group block h-full rounded-[2rem] bg-white p-7 ring-1 ring-navy/5 transition hover:-translate-y-1 hover:shadow-xl">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-navy">
                  <Mail className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-5 text-sm font-semibold text-muted">Email us</p>
                <p className="mt-1 font-display text-xl font-semibold break-words text-navy">{site.email}</p>
              </a>
            </StaggerItem>
            <StaggerItem>
              <a href="#feedback-form" className="group block h-full rounded-[2rem] bg-navy p-7 text-white transition hover:-translate-y-1 hover:shadow-xl">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal text-white">
                  <MessageSquareText className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-5 text-sm font-semibold text-white/70">Use our form</p>
                <p className="mt-1 font-display text-xl font-semibold">Send feedback online</p>
              </a>
            </StaggerItem>
            <StaggerItem>
              <a href={site.phoneHref} className="group block h-full rounded-[2rem] bg-white p-7 ring-1 ring-navy/5 transition hover:-translate-y-1 hover:shadow-xl">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cream text-teal">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-5 text-sm font-semibold text-muted">Or call us</p>
                <p className="mt-1 font-display text-xl font-semibold text-navy">{site.phone}</p>
              </a>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="What happens next"
            title={
              <>
                How we handle <span className="text-teal italic">your feedback.</span>
              </>
            }
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="relative h-full rounded-[2rem] bg-cream p-7">
                  <span className="absolute top-6 right-6 font-display text-4xl font-bold text-navy/10">{i + 1}</span>
                  <s.icon className="h-9 w-9 text-teal" aria-hidden />
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="feedback-form" className="scroll-mt-24 py-16 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading align="left" eyebrow="Your rights" title={<>You’re always <span className="text-teal italic">safe to speak up.</span></>} />
            <Stagger as="ul" className="mt-8 grid gap-3">
              {rights.map((r) => (
                <StaggerItem as="li" key={r.text} className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-navy/5">
                  <r.icon className="mt-0.5 h-6 w-6 shrink-0 text-ochre" aria-hidden />
                  <span className="text-navy">{r.text}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal direction="left" className="rounded-[2.5rem] bg-white p-7 shadow-[0_40px_100px_-50px_rgba(13,49,87,0.5)] ring-1 ring-navy/5 sm:p-10">
            <h2 className="font-display text-3xl font-semibold text-navy">Share your feedback</h2>
            <p className="mt-2 mb-8 text-muted">Fields marked * are required.</p>
            <ComplaintForm />
          </Reveal>
        </div>
      </section>

      <section className="container-x pb-16 sm:pb-24">
        <Reveal className="grid gap-8 rounded-[2.5rem] bg-navy p-8 text-white sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">Not happy with how we handled it?</h2>
            <p className="mt-3 leading-relaxed text-white/75">
              You can contact the NDIS Quality and Safeguards Commission at any time, whether or not you’ve raised it with
              us first. For concerns about NDIA decisions or your plan, contact the NDIA. A free, independent disability
              advocate can also support you.
            </p>
          </div>
          <ul className="grid gap-3 text-sm">
            {[
              { label: "NDIS Quality and Safeguards Commission", detail: "1800 035 544", href: "https://www.ndiscommission.gov.au" },
              { label: "NDIA (National Disability Insurance Agency)", detail: "1800 800 110", href: "https://www.ndis.gov.au" },
              { label: "Find a disability advocate", detail: "Disability Advocacy Finder", href: "https://askizzy.org.au/disability-advocacy-finder" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 rounded-2xl bg-white/10 px-5 py-4 transition hover:bg-white/15">
                  <span>
                    <span className="block font-semibold">{l.label}</span>
                    <span className="text-white/70">{l.detail}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-gold transition group-hover:rotate-45" aria-hidden />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  );
}
