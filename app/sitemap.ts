import type { MetadataRoute } from "next";
import { articles } from "@/data/blog";
import { siteConfig } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap { const pages = ["", "/about", "/services", "/blog", "/contact"].map((path) => ({ url: `${siteConfig.siteUrl}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 })); const posts = articles.map((article) => ({ url: `${siteConfig.siteUrl}/blog/${article.slug}`, lastModified: article.date, changeFrequency: "monthly" as const, priority: 0.7 })); return [...pages, ...posts]; }
