import { FileCheck2, Home, IdCard, ListChecks, MessagesSquare, Phone, Scale, ShieldCheck, Users, Video } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { FeatureGrid, type Feature } from "@/components/FeatureGrid";
import { Journey } from "@/components/Journey";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, JsonLd, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "How NDIS Support Coordination Works",
  description:
    "Getting started with Support Plan Navigators is simple. Learn what happens from your first free chat to your NDIS plan reassessment, what to have ready and how our Support Coordination and Recovery Coaching are funded.",
  path: "/how-it-works",
  image: "/images/coaching-meeting.jpg",
  imageAlt: "A support coordinator and a participant talking in a bright, relaxed room",
  keywords: ["how NDIS support coordination works", "getting started NDIS", "NDIS service agreement", "NDIS plan reassessment"],
});

const steps = [
  { tag: "Step 1", title: "Reach out", text: "Call, email, fill in our contact form or ask someone to refer you. We’ll arrange a free, no-obligation chat at a time that suits you." },
  { tag: "Step 2", title: "Free first conversation", text: "We listen to your story, talk about your goals and check what your NDIS plan includes. You can ask us anything, and there’s no pressure to commit." },
  { tag: "Step 3", title: "Service agreement", text: "If you’d like to go ahead, we prepare a clear, plain-language service agreement explaining what we’ll do, how funding is used and how to contact us." },
  { tag: "Step 4", title: "Your action or recovery plan", text: "Together we map your goals to practical steps, priorities and timeframes, and identify the providers and community supports you need." },
  { tag: "Step 5", title: "Connect & coordinate", text: "We connect you with providers, help set up bookings and keep everything working smoothly, while building your own skills and confidence." },
  { tag: "Step 6", title: "Review & reassessment", text: "We check in regularly, track your budget and progress, and help you prepare evidence and reports for your next NDIS plan reassessment." },
];

const ready: Feature[] = [
  { icon: FileCheck2, title: "A copy of your NDIS plan", text: "So we can see your goals, budgets and the supports that are funded. Don’t worry if you can’t find it. We can help." },
  { icon: IdCard, title: "Your NDIS number", text: "This helps us set up your service booking quickly once you’ve chosen to work with us." },
  { icon: ListChecks, title: "Your goals & priorities", text: "What would you like to be different in six months? Big or small, every goal is a good starting point." },
  { icon: Users, title: "Current supports", text: "Any providers, clinicians or informal supports already involved, plus anything that hasn’t worked well before." },
];

const ways: Feature[] = [
  { icon: Home, title: "In person", text: "At your home, in the community or somewhere you feel comfortable, where available in your area." },
  { icon: Phone, title: "By phone", text: "Quick check-ins and conversations that fit around your day." },
  { icon: Video, title: "By video", text: "Face-to-face connection from wherever you are, with help to set it up if needed." },
];

const rights = [
  { icon: Scale, title: "Choice and control", text: "You choose who supports you and how. You can change providers, including us, at any time in line with your service agreement." },
  { icon: ShieldCheck, title: "Privacy and dignity", text: "Your information is kept confidential and only shared with your consent, except where the law requires otherwise." },
  { icon: MessagesSquare, title: "Feedback and complaints", text: "We welcome feedback. If something isn’t right, tell us and we’ll fix it. You can also contact the NDIS Quality and Safeguards Commission." },
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to get started with NDIS Support Coordination at Support Plan Navigators",
  description: "The six steps from your first free conversation to your next NDIS plan reassessment.",
  step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.text })),
};

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd data={howToJsonLd} />
      <PageHero
        eyebrow="How it works"
        title="Getting started is simpler than you think."
        highlight={["simpler"]}
        intro={<p>From your first conversation to your next plan reassessment, here’s exactly what to expect when you work with Support Plan Navigators.</p>}
        image="/images/coaching-meeting.jpg"
        imageAlt="A navigator and a participant chatting in a relaxed office setting"
        crumbs={[{ name: "How It Works", path: "/how-it-works" }]}
        bannerTitle="How NDIS Support Coordination Works"
      >
        <ButtonLink href="/make-a-referral">Make a Referral</ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          Contact us
        </ButtonLink>
      </PageHero>

      <section className="bg-sand/60 py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Six simple steps"
            title={
              <>
                Your journey with <span className="text-teal italic">us.</span>
              </>
            }
          />
          <div className="mt-16">
            <Journey steps={steps} />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Before we meet"
            title={
              <>
                Helpful things to <span className="text-teal italic">have ready.</span>
              </>
            }
            intro="You don’t need everything on this list to get started, but these will help us hit the ground running."
          />
          <div className="mt-16">
            <FeatureGrid items={ready} />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Funding"
              title={
                <>
                  How our services are <span className="text-teal italic">funded.</span>
                </>
              }
            />
            <Reveal delay={0.2} className="prose-brand mt-6 text-lg">
              <p>
                Support Coordination and Psychosocial Recovery Coaching are paid for from your NDIS plan, usually from the
                <strong> Capacity Building – Support Coordination</strong> budget. When these supports are funded in your
                plan, there’s no out-of-pocket cost to you.
              </p>
              <p>
                Prices are set within the limits of the NDIS Pricing Arrangements and Price Limits, which the NDIA reviews
                each year. Before we start, we’ll explain how your hours will be used and agree on everything in writing.
              </p>
              <p>We work with participants who are NDIA-managed, plan-managed or self-managed.</p>
            </Reveal>
          </div>
          <div>
            <h3 className="sr-only">Ways we can meet</h3>
            <FeatureGrid items={ways} cols={3} />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Your rights"
            title={
              <>
                You’re in charge, <span className="text-teal italic">always.</span>
              </>
            }
          />
          <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
            {rights.map((r) => (
              <StaggerItem key={r.title}>
                <div className="h-full rounded-[2rem] bg-navy p-8 text-white">
                  <r.icon className="h-10 w-10 text-gold" aria-hidden />
                  <h3 className="mt-6 font-display text-2xl font-semibold">{r.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/75">{r.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
