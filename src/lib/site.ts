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
  { label: "About Us", href: "/about" },
  { label: "Complaints", href: "/complaints" },
  { label: "Contact", href: "/contact" },
];
