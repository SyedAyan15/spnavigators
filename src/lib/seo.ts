import type { Metadata } from "next";
import { site } from "./site";

export type FaqItem = { q: string; a: string };

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  image,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
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
      ...(image ? { images: [{ url: image, width: 1800, height: 1200, alt: title }] } : {}),
    },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description },
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
    areaServed: { "@type": "AdministrativeArea", name: "Orana region, New South Wales, Australia" },
    audience: { "@type": "Audience", audienceType: "NDIS participants, families, carers and referrers" },
    provider: { "@id": `${site.url}/#organization` },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
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
  areaServed: { "@type": "AdministrativeArea", name: "Orana region, New South Wales, Australia" },
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
