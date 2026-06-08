import type { MetadataRoute } from "next";
import { getServices, getBlogPosts } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://amanahbusiness.qa";
  const locales = ["en", "ar"];

  const staticRoutes = [
    { path: "", priority: 1.0, changeFreq: "weekly" as const },
    { path: "/about", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/services", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/why-qatar", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/blog", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/contact", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFreq: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFreq: "yearly" as const },
  ];

  const staticPages = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${baseUrl}/${locale}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFreq,
      priority: route.priority,
    }))
  );

  const servicePages = locales.flatMap((locale) =>
    getServices(locale).map((service) => ({
      url: `${baseUrl}/${locale}/services/${service.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

  const blogPages = locales.flatMap((locale) =>
    getBlogPosts(locale).map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.id}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticPages, ...servicePages, ...blogPages];
}
