import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { treatmentPages } from "@/lib/data/treatment-pages";
import { areaPages } from "@/lib/data/areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/treatments",
    "/our-team",
    "/fees",
    "/contact",
    "/testimonials",
    "/case-studies",
    "/news",
    "/patient-portal-help",
    "/areas",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const treatmentRoutes = treatmentPages.map((item) => ({
    url: `${siteConfig.url}/treatments/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const areaRoutes = areaPages.map((area) => ({
    url: `${siteConfig.url}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...treatmentRoutes, ...areaRoutes];
}