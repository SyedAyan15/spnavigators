import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal, Stagger, StaggerItem, WordReveal } from "@/components/motion";
import { JsonLd } from "@/components/ui";
import { WindingRoad } from "@/components/WindingRoad";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact Us | Book a Free Chat",
  description:
    "Contact Support Plan Navigators about NDIS Support Coordination or Psychosocial Recovery Coaching. Call 0439 953 767, email admin@spnav.com.au or send us a message for a free, no-obligation chat.",
  path: "/contact",
  keywords: ["contact NDIS support coordinator", "book recovery coach", "NDIS support coordination enquiry"],
});

const cards = [
  { icon: Phone, title: "Call us", value: site.phone, href: site.phoneHref, note: "Talk to a real person" },
  { icon: Mail, title: "Email us", value: site.email, href: `mailto:${site.email}`, note: "We reply promptly" },
  { icon: MapPin, title: "Where we work", value: "Orana region, NSW", note: "Face-to-face, phone and video support across the Orana" },
  { icon: Clock, title: "Response time", value: "Within 1 business day", note: "Our aim for every new enquiry" },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" />
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])} />
      <section className="relative overflow-hidden pt-12 pb-24 sm:pb-32">
        <div className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-sky-light/30 blur-3xl" />
        <WindingRoad className="pointer-events-none absolute bottom-0 left-0 w-[70%] max-w-3xl opacity-10" />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <Reveal>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Contact us
              </span>
            </Reveal>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] font-semibold tracking-tight text-navy sm:text-6xl">
              <WordReveal text="Let’s have a chat about what you need." highlight={["chat"]} />
            </h1>
            <Reveal delay={0.4}>
              <p className="mt-6 text-xl leading-relaxed text-muted">
                Whether you have a quick question about your NDIS plan or you’re ready to get started, we’re here to help.
                There’s no cost and no obligation.
              </p>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => {
              const inner = (
                <>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-gold transition group-hover:bg-teal group-hover:text-white">
                    <c.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="mt-5 text-sm font-semibold text-muted">{c.title}</p>
                  <p className="mt-1 font-display text-xl font-semibold break-words text-navy">{c.value}</p>
                  <p className="mt-2 text-sm text-muted">{c.note}</p>
                </>
              );
              return (
                <StaggerItem key={c.title}>
                  {c.href ? (
                    <a href={c.href} className="group block h-full rounded-[2rem] bg-white p-7 ring-1 ring-navy/5 transition hover:-translate-y-1 hover:shadow-xl">
                      {inner}
                    </a>
                  ) : (
                    <div className="group h-full rounded-[2rem] bg-white p-7 ring-1 ring-navy/5">{inner}</div>
                  )}
                </StaggerItem>
              );
            })}
          </Stagger>

          <div className="mx-auto mt-16 max-w-4xl">
            <Reveal className="rounded-[2.5rem] bg-white p-7 shadow-[0_40px_100px_-50px_rgba(13,49,87,0.5)] ring-1 ring-navy/5 sm:p-12">
              <h2 className="font-display text-3xl font-semibold text-navy">Send us a message</h2>
              <p className="mt-2 mb-8 text-muted">Fields marked * are required.</p>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
