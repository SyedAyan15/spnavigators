import { CheckCircle2, Phone } from "lucide-react";
import { ReferralForm } from "@/components/forms/ReferralForm";
import { Reveal, Stagger, StaggerItem, WordReveal } from "@/components/motion";
import { ButtonLink, JsonLd } from "@/components/ui";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Make a Referral | NDIS Support Coordination & Recovery Coaching",
  description:
    "Refer an NDIS participant to Support Plan Navigators for Support Coordination or Psychosocial Recovery Coaching. Self-referrals, families, LACs, clinicians and organisations welcome.",
  path: "/make-a-referral",
  keywords: ["NDIS support coordination referral", "psychosocial recovery coach referral", "refer NDIS participant"],
});

const next = [
  "We acknowledge your referral and review it promptly",
  "We contact the participant (or nominee) to introduce ourselves",
  "We arrange a free first meeting at a time that suits them",
  "With consent, we keep referrers updated as supports begin",
];

export default function ReferralPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Make a Referral", path: "/make-a-referral" }])} />
      <section className="relative overflow-hidden pt-12 pb-24 sm:pb-32">
        <div className="pointer-events-none absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-teal-light/25 blur-3xl" />
        <div className="container-x relative grid gap-14 lg:grid-cols-[1fr_1.5fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Referrals
              </span>
            </Reveal>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] font-semibold tracking-tight text-navy sm:text-6xl">
              <WordReveal text="Make a referral" highlight={["referral"]} />
            </h1>
            <Reveal delay={0.3}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                We welcome referrals for NDIS Support Coordination and Psychosocial Recovery Coaching from participants,
                families, carers, Local Area Coordinators, NDIA planners, GPs, psychologists, hospitals and community
                organisations. Please make sure the participant has agreed to the referral.
              </p>
            </Reveal>
            <Reveal delay={0.4} className="mt-10 rounded-[2rem] bg-navy p-8 text-white">
              <h2 className="font-display text-2xl font-semibold">What happens next?</h2>
              <Stagger as="ol" className="mt-5 space-y-4">
                {next.map((n) => (
                  <StaggerItem as="li" key={n} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                    <span className="text-white/85">{n}</span>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
            <Reveal delay={0.5} className="mt-6">
              <p className="text-sm text-muted">Prefer to refer by phone or email?</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <ButtonLink href={site.phoneHref} variant="outline" icon={false}>
                  <Phone className="h-4 w-4" aria-hidden /> {site.phone}
                </ButtonLink>
                <ButtonLink href={`mailto:${site.email}?subject=NDIS%20referral`} variant="outline">
                  Email a referral
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" className="rounded-[2.5rem] bg-white p-7 shadow-[0_40px_100px_-50px_rgba(14,42,77,0.5)] ring-1 ring-navy/5 sm:p-12">
            <ReferralForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
