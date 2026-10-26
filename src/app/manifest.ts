import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "SP Navigators",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f5f9fc",
    theme_color: "#0d3157",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
