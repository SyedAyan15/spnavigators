import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/support-coordination", priority: 0.95, changeFrequency: "monthly" },
  { path: "/psychosocial-recovery-coaching", priority: 0.95, changeFrequency: "monthly" },
  { path: "/how-it-works", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/ndis-resources", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faqs", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/make-a-referral", priority: 0.8, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
