import type { Metadata } from "next";
import { site, socialProfiles } from "./site";

export type FaqItem = { q: string; a: string };

/** Logo share card used by pages that don't have their own photo (see src/app/opengraph-image.jpg). */
const DEFAULT_SHARE_IMAGE = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "Support Plan Navigators logo: a circle of people around Aboriginal dot art, mountains and a golden path. Connecting Plans to Possibilities.",
};

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  /** Describes what is in the share image (shown to screen readers on social platforms). */
  imageAlt?: string;
}): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: path,
      type: "website",
      locale: "en_AU",
      siteName: site.name,
      images: [image ? { url: image, width: 1800, height: 1200, alt: imageAlt ?? title } : DEFAULT_SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [image ? { url: image, alt: imageAlt ?? title } : DEFAULT_SHARE_IMAGE],
    },
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${site.url}${t.path}`,
    })),
  };
}

export function serviceJsonLd({ name, description, path, serviceType }: { name: string; description: string; path: string; serviceType: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: `${site.url}${path}`,
    areaServed: ORANA_AREA,
    audience: { "@type": "Audience", audienceType: "NDIS participants, families, carers and referrers" },
    provider: { "@id": `${site.url}/#organization` },
  };
}

const ORANA_AREA = [
    { "@type": "AdministrativeArea", name: "Orana region, New South Wales, Australia" },
    { "@type": "City", name: "Dubbo, NSW" },
    { "@type": "City", name: "Wellington, NSW" },
    { "@type": "City", name: "Narromine, NSW" },
    { "@type": "City", name: "Gilgandra, NSW" },
    { "@type": "City", name: "Coonamble, NSW" },
    { "@type": "City", name: "Nyngan, NSW" },
    { "@type": "City", name: "Bourke, NSW" },
  ];

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/logo-full.png`,
  image: `${site.url}/logo-stacked.png`,
  slogan: site.tagline,
  description: site.description,
  email: site.email,
  telephone: "+61 439 953 767",
  areaServed: ORANA_AREA,
  ...(socialProfiles.length ? { sameAs: socialProfiles } : {}),
  address: { "@type": "PostalAddress", addressRegion: "NSW", addressCountry: "AU" },
  knowsAbout: [
    "NDIS Support Coordination",
    "Psychosocial Recovery Coaching",
    "Psychosocial disability",
    "NDIS plan implementation",
    "Capacity building supports",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+61 439 953 767",
    email: site.email,
    contactType: "customer service",
    areaServed: "AU",
    availableLanguage: ["English"],
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  description: site.description,
  inLanguage: "en-AU",
  publisher: { "@id": `${site.url}/#organization` },
};
