import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCallBar } from "@/components/MobileCallBar";
import { MotionProvider } from "@/components/MotionProvider";
import { JsonLd } from "@/components/ui";
import { organizationJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const heading = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "NDIS Support Coordination & Psychosocial Recovery Coaching | Support Plan Navigators",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "NDIS support coordination",
    "NDIS support coordinator",
    "psychosocial recovery coaching",
    "psychosocial recovery coach",
    "psychosocial disability",
    "NDIS plan",
    "NDIS participants",
    "NDIS support coordination Orana",
    "psychosocial recovery coach Orana region",
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: site.name,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  formatDetection: { telephone: true, email: true },
  category: "health",
};

export const viewport: Viewport = {
  themeColor: "#0e2a4d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${heading.variable} ${body.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("spn-text")==="lg")document.documentElement.dataset.text="lg"}catch(e){}`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={organizationJsonLd} />
        <MotionProvider>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <MobileCallBar />
        </MotionProvider>
      </body>
    </html>
  );
}
