import type { MetadataRoute } from "next";
import { vehicles } from "@/lib/fleet";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticRoutes = ["", "/fleet", "/services", "/about", "/contact"].map((p) => ({
    url: `${base}${p}`,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  const fleetRoutes = vehicles.map((v) => ({
    url: `${base}/fleet/${v.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...staticRoutes, ...fleetRoutes];
}
