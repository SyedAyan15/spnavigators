import { HandHeart, Route, type LucideIcon } from "lucide-react";

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
  country: "Australia",
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
  /** Classes for the icon tile; it fills with colour on hover. */
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
        icon: Route,
        color: "bg-teal/10 text-teal group-hover:bg-teal group-hover:text-white",
      },
      {
        label: "Psychosocial Recovery Coaching",
        href: "/psychosocial-recovery-coaching",
        description: "One-on-one coaching for people living with psychosocial disability.",
        icon: HandHeart,
        color: "bg-ochre/10 text-ochre group-hover:bg-ochre group-hover:text-white",
      },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Complaints & Feedback", href: "/complaints" },
  { label: "Contact", href: "/contact" },
];

/** Mental health and crisis lines shown in the footer. Numbers checked October 2026; NSW services chosen for the Orana. */
export const supportLines: { name: string; number: string; url: string; note?: string }[] = [
  { name: "Lifeline", number: "13 11 14", url: "https://www.lifeline.org.au", note: "24/7 crisis support" },
  { name: "13YARN", number: "13 92 76", url: "https://www.13yarn.org.au", note: "24/7, run by Aboriginal & Torres Strait Islander people" },
  { name: "Beyond Blue", number: "1300 22 4636", url: "https://www.beyondblue.org.au" },
  { name: "NSW Mental Health Line", number: "1800 011 511", url: "https://www.health.nsw.gov.au/mentalhealth/Pages/Mental-Health-Line.aspx", note: "24/7" },
  { name: "MensLine Australia", number: "1300 78 99 78", url: "https://mensline.org.au" },
  { name: "Kids Helpline", number: "1800 55 1800", url: "https://kidshelpline.com.au", note: "ages 5–25" },
  { name: "Open Arms", number: "1800 011 046", url: "https://www.openarms.gov.au", note: "veterans & families" },
];

export const healthAdvice = { name: "healthdirect", number: "1800 022 222", url: "https://www.healthdirect.gov.au" };

export const telHref = (n: string) => `tel:${n.replace(/\s/g, "")}`;
