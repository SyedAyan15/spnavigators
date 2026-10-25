import {
  CalendarHeart,
  ClipboardList,
  Compass,
  GraduationCap,
  Hospital,
  Megaphone,
  Repeat,
  Users,
} from "lucide-react";
import Image from "next/image";
import { CompareRoles } from "@/components/CompareRoles";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { FeatureGrid, type Feature } from "@/components/FeatureGrid";
import { Journey } from "@/components/Journey";
import { Marquee } from "@/components/Marquee";
import { Parallax, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/PageHero";
import { RecoveryWheel } from "@/components/RecoveryWheel";
import { ButtonLink, JsonLd, SectionHeading } from "@/components/ui";
import { faqJsonLd, pageMetadata, serviceJsonLd, type FaqItem } from "@/lib/seo";

const description =
  "NDIS Psychosocial Recovery Coaching for people living with psychosocial disability. Our recovery coaches take a person-centred, trauma-informed approach to help you build skills, confidence and connection. Book a free chat.";

export const metadata = pageMetadata({
  title: "NDIS Psychosocial Recovery Coaching | Recovery Coach",
  description,
  path: "/psychosocial-recovery-coaching",
  image: "/images/embrace.jpg",
  keywords: [
    "psychosocial recovery coaching",
    "NDIS psychosocial recovery coach",
    "psychosocial recovery coach",
    "psychosocial disability",
    "mental health recovery",
    "recovery plan",
    "trauma-informed",
    "recovery coach NDIS",
  ],
});

const help: Feature[] = [
  { icon: ClipboardList, title: "Co-design your recovery plan", text: "We work with you to set goals that matter, and break them into small, achievable steps you can actually take." },
  { icon: Repeat, title: "Build routines & living skills", text: "Develop practical day-to-day skills and routines that make life feel more manageable and more like your own." },
  { icon: CalendarHeart, title: "Plan for the ups and downs", text: "Recognise early warning signs and plan ahead for the times when you might need a little more support." },
  { icon: Hospital, title: "Connect with mental health care", text: "We help you navigate and stay connected with GPs, psychologists, psychiatrists and community mental health teams." },
  { icon: Users, title: "Grow your social connections", text: "Rebuild relationships and discover community groups, peer support and activities that bring belonging." },
  { icon: GraduationCap, title: "Work, study & volunteering", text: "Explore your interests and take steps toward education, volunteering or employment, at a pace that’s right for you." },
  { icon: Compass, title: "Coordinate your NDIS supports", text: "Your coach helps you understand your plan and coordinate your providers, always with your recovery in mind." },
  { icon: Megaphone, title: "Speak up for yourself", text: "Build the skills and confidence to make decisions, self-advocate and communicate what you need." },
];

const steps = [
  { tag: "Free chat", title: "We start by listening", text: "Tell us a little about yourself, what’s going on and what you’d like to change. We’ll check your plan and answer your questions." },
  { tag: "Matching", title: "Meet your Recovery Coach", text: "We match you with a coach based on your goals, needs and personality, and you meet them in a setting that feels comfortable." },
  { tag: "Planning", title: "Build your recovery plan", text: "Together you create a personal recovery plan that captures your strengths, goals, supports and what helps when things get tough." },
  { tag: "Coaching", title: "Regular sessions, real steps", text: "Sessions can happen at home, in the community, by phone or by video. Each one focuses on what matters most to you right now." },
  { tag: "Reflecting", title: "Track progress & celebrate", text: "We review your progress together, celebrate wins, adjust your plan and prepare evidence for your next NDIS plan reassessment." },
];

const principles = [
  { title: "Recovery-oriented", text: "Recovery means living a meaningful, contributing life, as you define it, with or without symptoms." },
  { title: "Trauma-informed", text: "We prioritise safety, trust and choice, and recognise how past experiences shape the way support feels." },
  { title: "Strengths-based", text: "We start with what’s strong, not what’s wrong, and build from your skills, interests and values." },
  { title: "Person-led", text: "You set the direction and the pace. Your coach walks alongside you, never ahead of you." },
];

const faqs: FaqItem[] = [
  {
    q: "What is psychosocial disability?",
    a: "Psychosocial disability is the term used to describe a disability that may arise from a mental health condition. Not everyone with a mental health condition has a psychosocial disability, but for those who do, the impact can be significant and long-lasting, affecting daily activities, relationships, work and community participation.",
  },
  {
    q: "What is a Psychosocial Recovery Coach?",
    a: "A Psychosocial Recovery Coach is an NDIS-funded support worker who specialises in working with people living with psychosocial disability. They bring knowledge of mental health recovery, and sometimes their own lived experience, to help you build capacity, plan for your recovery and coordinate your NDIS supports.",
  },
  {
    q: "How is Psychosocial Recovery Coaching funded?",
    a: "Recovery coaching is funded through your NDIS plan, commonly under the Capacity Building – Support Coordination budget. How much coaching you can access depends on the funding in your plan. We’ll go through this with you before we start, and there’s no out-of-pocket cost when it’s funded.",
  },
  {
    q: "Is recovery coaching the same as counselling or therapy?",
    a: "No. Recovery coaching doesn’t replace clinical care from a GP, psychologist or psychiatrist. Instead, it complements it, focusing on practical, everyday steps toward your goals, building skills and connecting you with the right supports.",
  },
  {
    q: "Can I have a Support Coordinator and a Recovery Coach?",
    a: "Some participants have funding for both. When that happens, it’s important that the roles are clearly defined so there is no doubling up. We can help you work out what makes sense for your situation and your plan.",
  },
  {
    q: "What happens in a recovery coaching session?",
    a: "Every session is different and shaped by you. You might work on your recovery plan, practise a new skill, attend an appointment together, explore a community group, or simply check in on how things are going and what you need next.",
  },
  {
    q: "Where do sessions take place?",
    a: "Wherever suits you best. Sessions can happen at home, out in the community, by phone or by video call. We’ll agree on a format and frequency that works for you.",
  },
  {
    q: "What is a recovery plan?",
    a: "A recovery plan is a personal document you create with your coach. It captures your goals, strengths, supports, early warning signs and strategies that help, and it’s reviewed regularly as your life and goals change.",
  },
];

export default function RecoveryCoachingPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Psychosocial Recovery Coaching",
          description,
          path: "/psychosocial-recovery-coaching",
          serviceType: "NDIS Psychosocial Recovery Coaching",
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      <PageHero
        eyebrow="NDIS Psychosocial Recovery Coaching"
        title="Recovery that’s personal, hopeful and yours."
        highlight={["yours"]}
        intro={
          <p>
            One-on-one Psychosocial Recovery Coaching for NDIS participants living with psychosocial disability. A
            dedicated coach walks alongside you to build skills, confidence and connection, at your pace.
          </p>
        }
        image="/images/embrace.jpg"
        imageAlt="Two women sharing a warm, supportive hug on a city street"
        crumbs={[{ name: "Psychosocial Recovery Coaching", path: "/psychosocial-recovery-coaching" }]}
        badge={
          <>
            <p className="text-xs font-bold tracking-[0.16em] text-teal uppercase">Your way</p>
            <p className="mt-2 text-sm leading-snug text-navy">Sessions at home, in the community, by phone or by video.</p>
          </>
        }
      >
        <ButtonLink href="/contact">Book a free chat</ButtonLink>
        <ButtonLink href="/make-a-referral" variant="outline">
          Make a referral
        </ButtonLink>
      </PageHero>

      <Marquee dark items={["Person-led", "Trauma-informed", "Strengths-based", "Recovery-oriented", "Non-judgemental", "Hope-focused"]} />

      {/* What is it */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <Parallax className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]" speed={0.06}>
              <Image
                src="/images/shoulder-support.jpg"
                alt="A person resting their head on a friend’s shoulder for comfort"
                fill
                sizes="(min-width: 1024px) 45vw, 95vw"
                className="scale-110 object-cover"
              />
            </Parallax>
            <Reveal delay={0.3} className="absolute -right-3 -bottom-8 max-w-xs rounded-3xl bg-navy p-6 text-white shadow-2xl sm:-right-8">
              <p className="font-display text-xl leading-snug italic">“Recovery isn’t a straight line. We’re with you for every turn in the road.”</p>
            </Reveal>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="What is Psychosocial Recovery Coaching?"
              title={
                <>
                  Support for your mental health recovery, <span className="text-teal italic">built around you.</span>
                </>
              }
            />
            <Reveal delay={0.2} className="prose-brand mt-6 text-lg">
              <p>
                Psychosocial Recovery Coaching is an NDIS support designed specifically for people living with
                psychosocial disability, a disability that may arise from a mental health condition. A Psychosocial
                Recovery Coach works with you to understand your NDIS plan, design a recovery plan, and take practical
                steps toward a life that feels meaningful to you.
              </p>
              <p>
                Your coach understands that recovery is personal and that it isn’t always linear. There may be good weeks
                and harder weeks. Rather than focusing on symptoms, we focus on <strong>you</strong>: your strengths, your
                hopes and the everyday skills and connections that help you thrive.
              </p>
              <p>
                Recovery coaching works alongside your clinical care, not instead of it. We collaborate with your GP,
                psychologist, psychiatrist or mental health team, with your consent, so everyone is pulling in the same
                direction.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Wheel */}
      <section className="bg-sand/60 py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Every part of your life"
            title={
              <>
                Recovery touches <span className="text-teal italic">everything.</span>
              </>
            }
            intro="Recovery coaching looks at your whole life, not just one part of it. Explore the areas your coach can help you work on."
          />
          <div className="mt-16">
            <RecoveryWheel />
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="How a Recovery Coach can help"
            title={
              <>
                Practical support, <span className="text-teal italic">real progress.</span>
              </>
            }
            intro="Your coach brings knowledge, structure and encouragement. You bring your goals. Together, you build momentum."
          />
          <div className="mt-16">
            <FeatureGrid items={help} />
          </div>
        </div>
      </section>

      {/* Principles with image */}
      <section className="relative isolate overflow-hidden py-28 text-white sm:py-36">
        <Parallax className="absolute inset-0 -z-10 scale-125" speed={0.1}>
          <Image src="/images/hope-signs.jpg" alt="" fill sizes="100vw" className="object-cover" />
        </Parallax>
        <div className="absolute inset-0 -z-10 bg-navy/85" />
        <div className="container-x">
          <SectionHeading
            light
            eyebrow="Our approach"
            title={
              <>
                You are not alone. <span className="text-gold-light italic">You matter.</span>
              </>
            }
            intro="Everything we do as Recovery Coaches is guided by four principles."
          />
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <StaggerItem key={p.title}>
                <div className="h-full rounded-[2rem] bg-white/10 p-8 ring-1 ring-white/15 backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/15">
                  <span className="font-display text-5xl font-semibold text-gold">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/75">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who is it for?"
              title={
                <>
                  Is recovery coaching <span className="text-teal italic">right for me?</span>
                </>
              }
            />
            <Reveal delay={0.2} className="prose-brand mt-6 text-lg">
              <p>Psychosocial Recovery Coaching may suit you if you:</p>
              <ul>
                <li>are an NDIS participant living with psychosocial disability</li>
                <li>have recovery coaching funded in your NDIS plan, or want to explore asking for it</li>
                <li>want support to set and work toward personal recovery goals</li>
                <li>would like help navigating mental health, community and NDIS services</li>
                <li>are ready to build skills, routines and confidence, at your own pace</li>
              </ul>
              <p>
                Not sure whether you’re eligible, or whether recovery coaching is in your plan? Get in touch. We’re happy to
                talk it through, with no obligation.
              </p>
            </Reveal>
          </div>
          <Reveal direction="left" className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-[2rem]">
                <Image src="/images/hands-comfort.jpg" alt="Two people holding hands across a table for comfort" fill sizes="25vw" className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
                <Image src="/images/support-worker-laugh.jpg" alt="A support worker and an older woman sharing a laugh" fill sizes="25vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Getting started"
            title={
              <>
                What working with a <span className="text-teal italic">Recovery Coach</span> looks like.
              </>
            }
          />
          <div className="mt-16">
            <Journey steps={steps} />
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Know the difference"
            title={
              <>
                Recovery Coach or <span className="text-teal italic">Support Coordinator?</span>
              </>
            }
            intro="Both roles help you use your NDIS plan. A Recovery Coach brings a specialised mental health recovery focus."
          />
          <div className="mt-14">
            <CompareRoles />
          </div>
          <Reveal className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-[2rem] bg-white ring-1 ring-navy/5">
            <table className="w-full text-left text-sm sm:text-base">
              <caption className="sr-only">How recovery coaching compares with other supports</caption>
              <thead className="bg-navy text-white">
                <tr>
                  <th scope="col" className="p-4 font-display font-semibold">Support</th>
                  <th scope="col" className="p-4 font-display font-semibold">What it focuses on</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/10">
                {[
                  ["Psychosocial Recovery Coach", "Practical, everyday recovery: goals, skills, routines, connection and coordinating NDIS supports."],
                  ["Counsellor or psychologist", "Clinical, therapeutic treatment of mental health conditions."],
                  ["Support Coordinator", "Implementing your NDIS plan and coordinating providers and services."],
                  ["Life coach", "General personal development goals. Not specific to psychosocial disability or the NDIS."],
                ].map(([a, b], i) => (
                  <tr key={a} className={i === 0 ? "bg-gold-light/20" : ""}>
                    <th scope="row" className="p-4 font-semibold text-navy">{a}</th>
                    <td className="p-4 text-muted">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Recovery coaching FAQs"
              title={
                <>
                  Questions about <span className="text-teal italic">recovery coaching.</span>
                </>
              }
            />
            <Reveal delay={0.3} className="mt-8 rounded-[2rem] bg-gold-light/30 p-6 text-sm leading-relaxed text-navy">
              <strong>Need help right now?</strong> Our services are not crisis services. If you are in immediate danger,
              call 000. For 24/7 crisis support, call Lifeline on 13 11 14 or the Suicide Call Back Service on 1300 659 467.
            </Reveal>
          </div>
          <Reveal direction="left">
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand title="Take the first step in your recovery journey." />
    </>
  );
}
