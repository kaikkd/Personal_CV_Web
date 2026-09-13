import type { MetadataRoute } from "next";
import { content, locales } from "@/content/portfolio";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-09-13");

  return locales.flatMap((locale) => [
    {
      url: new URL(`/${locale}`, siteUrl).toString(),
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 1,
      alternates: {
        languages: {
          en: new URL("/en", siteUrl).toString(),
          zh: new URL("/zh", siteUrl).toString(),
        },
      },
    },
    ...content[locale].projects.map((project) => ({
      url: new URL(`/${locale}/projects/${project.slug}`, siteUrl).toString(),
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: new URL(`/en/projects/${project.slug}`, siteUrl).toString(),
          zh: new URL(`/zh/projects/${project.slug}`, siteUrl).toString(),
        },
      },
    })),
  ]);
}
