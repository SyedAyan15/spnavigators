import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { healthAdvice, site, supportLines, telHref } from "@/lib/site";
import { Logo } from "./Logo";
import { Year } from "./Year";

const cols = [
  {
    title: "Our Services",
    links: [
      { label: "NDIS Support Coordination", href: "/support-coordination" },
      { label: "Psychosocial Recovery Coaching", href: "/psychosocial-recovery-coaching" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Make a Referral", href: "/make-a-referral" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "About Us", href: "/about" },
      { label: "NDIS Resources", href: "/ndis-resources" },
      { label: "LAC vs Support Coordinator", href: "/lac-vs-support-coordinator" },
      { label: "FAQs", href: "/faqs" },
      { label: "Complaints & Feedback", href: "/complaints" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-navy-deep text-white/80">
      <svg className="absolute top-0 left-0 w-full text-cream" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden>
        <path d="M0 0h1440v20c-240 40-480 40-720 10S240 0 0 30z" fill="currentColor" />
      </svg>
      <div className="pointer-events-none absolute -right-40 -bottom-40 h-[28rem] w-[28rem] rounded-full bg-teal/20 blur-3xl" />
      <div className="pointer-events-none absolute -top-20 -left-32 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-x relative grid gap-12 pt-28 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo variant="stacked" />
          <p className="mt-6 max-w-sm font-display text-xl text-white italic">{site.tagline}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            NDIS Support Coordination and Psychosocial Recovery Coaching that helps you understand your
            plan, choose the right supports and move toward the life you want.
          </p>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h2 className="font-display text-lg font-semibold text-white">{c.title}</h2>
            <ul className="mt-4 space-y-1 text-sm">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group inline-flex items-center gap-2 py-2 transition hover:text-gold-light">
                    <span className="h-px w-3 bg-gold transition-all group-hover:w-6" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="font-display text-lg font-semibold text-white">Get in touch</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 transition hover:text-gold-light">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
                  <Phone className="h-4 w-4 text-gold" aria-hidden />
                </span>
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 transition hover:text-gold-light">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
                  <Mail className="h-4 w-4 text-gold" aria-hidden />
                </span>
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mental health and crisis support */}
      <div className="container-x relative pb-10">
        <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-xl font-semibold text-white">Mental health &amp; crisis support</h2>
              <p className="mt-1 text-sm text-white/70">We’re not a crisis service. If you need support right now, please contact:</p>
            </div>
          </div>
          <ul className="mt-6 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {supportLines.map((l) => (
              <li key={l.name} className="flex flex-wrap items-baseline gap-x-2">
                <a href={l.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-light underline decoration-teal-light/40 underline-offset-4 hover:decoration-teal-light">
                  {l.name}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a href={telHref(l.number)} className="font-semibold text-white hover:text-gold-light">
                  {l.number}
                </a>
                {l.note && <span className="text-xs text-white/55">{l.note}</span>}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-white/10 pt-5 text-sm">
            <span className="font-semibold text-white">24-hour health advice:</span>{" "}
            <a href={healthAdvice.url} target="_blank" rel="noopener noreferrer" className="text-teal-light underline underline-offset-4">
              {healthAdvice.name}
            </a>{" "}
            <a href={telHref(healthAdvice.number)} className="font-semibold text-white hover:text-gold-light">
              {healthAdvice.number}
            </a>
          </p>
        </div>
      </div>

      <div className="container-x relative flex flex-col gap-3 py-8 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
        <p>
          © <Year /> {site.legalName}
        </p>
        <p>
          <Link href="/privacy-policy" className="inline-block py-2 hover:text-white">
            Privacy Policy
          </Link>{" "}
          · <span>{site.url.replace("https://", "")}</span>
        </p>
      </div>
    </footer>
  );
}
