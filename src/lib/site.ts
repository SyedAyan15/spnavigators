export const site = {
  name: "Support Plan Navigators",
  legalName: "Support Plan Navigators Pty Ltd",
  tagline: "Connecting Plans to Possibilities.",
  description:
    "NDIS Support Coordination and Psychosocial Recovery Coaching that puts you in control. Support Plan Navigators helps NDIS participants understand their plan, connect with the right providers and build a life they value.",
  url: "https://www.spnavigators.com.au",
  email: "admin@spnav.com.au",
  phone: "0439 953 767",
  phoneHref: "tel:+61439953767",
  abn: "28 703 292 559",
  acn: "703 292 559",
  country: "Australia",
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  color?: string;
  children?: NavItem[];
};

export const nav: NavItem[] = [
  {
    label: "Services",
    href: "/#services",
    children: [
      {
        label: "NDIS Support Coordination",
        href: "/support-coordination",
        description: "Turn your NDIS plan into real supports, real providers and real progress.",
        badge: "SC",
        color: "bg-teal",
      },
      {
        label: "Psychosocial Recovery Coaching",
        href: "/psychosocial-recovery-coaching",
        description: "One-on-one coaching for people living with psychosocial disability.",
        badge: "RC",
        color: "bg-gold",
      },
    ],
  },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About Us", href: "/about" },
  {
    label: "Resources",
    href: "/ndis-resources",
    children: [
      {
        label: "NDIS Resources",
        href: "/ndis-resources",
        description: "Plain-language guides, a glossary and trusted support services.",
        badge: "NR",
        color: "bg-sage",
      },
      {
        label: "LAC vs Support Coordinator",
        href: "/lac-vs-support-coordinator",
        description: "Who does what, who to contact, and whether you need both.",
        badge: "vs",
        color: "bg-navy",
      },
    ],
  },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];
