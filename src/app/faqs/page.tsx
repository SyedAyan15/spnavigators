import { CtaBand } from "@/components/CtaBand";
import { PageBanner } from "@/components/PageBanner";
import { FaqExplorer } from "@/components/FaqExplorer";
import { Reveal, WordReveal } from "@/components/motion";
import { JsonLd } from "@/components/ui";
import { WindingRoad } from "@/components/WindingRoad";
import { allFaqs, faqCategories } from "@/lib/faqs";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQs | NDIS Support Coordination & Recovery Coaching Questions",
  description:
    "Answers to common questions about NDIS Support Coordination, Psychosocial Recovery Coaching, NDIS funding, plan reassessments and getting started with Support Plan Navigators.",
  path: "/faqs",
  keywords: ["NDIS support coordination FAQ", "psychosocial recovery coach FAQ", "NDIS funding questions"],
});

export default function FaqsPage() {
  return (
    <>
      <PageBanner title="Frequently Asked Questions" />
      <JsonLd data={faqJsonLd(allFaqs)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "FAQs", path: "/faqs" }])} />
      <section className="relative overflow-hidden pt-16 pb-24 sm:pb-32">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[50rem] -translate-x-1/2 rounded-full bg-sky-light/30 blur-3xl" />
        <WindingRoad className="pointer-events-none absolute bottom-0 left-0 w-full max-w-4xl opacity-10" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Frequently asked questions
              </span>
            </Reveal>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] font-semibold tracking-tight text-navy sm:text-6xl">
              <WordReveal text="Clear answers, no jargon." highlight={["Clear"]} />
            </h1>
            <Reveal delay={0.3}>
              <p className="mt-6 text-xl leading-relaxed text-muted">
                Everything you might want to know about NDIS Support Coordination, Psychosocial Recovery Coaching and
                working with us.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.4} className="mt-14">
            <FaqExplorer categories={faqCategories} />
          </Reveal>
        </div>
      </section>
      <CtaBand title="Still have a question? Just ask." />
    </>
  );
}
