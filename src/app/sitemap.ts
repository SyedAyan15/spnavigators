import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Update this when page content changes meaningfully; a fixed date keeps the sitemap static at build time.
const LAST_UPDATED = "2026-10-28";

const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/support-coordination", priority: 0.95, changeFrequency: "monthly" },
  { path: "/psychosocial-recovery-coaching", priority: 0.95, changeFrequency: "monthly" },
  { path: "/make-a-referral", priority: 0.9, changeFrequency: "monthly" },
  { path: "/lac-vs-support-coordinator", priority: 0.85, changeFrequency: "monthly" },
  { path: "/how-it-works", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ndis-resources", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faqs", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/complaints", priority: 0.6, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: LAST_UPDATED,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
