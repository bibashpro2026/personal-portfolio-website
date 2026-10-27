import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = { metadataBase: new URL(siteConfig.siteUrl), title: { default: `${siteConfig.name} | AI Marketing Freelancer`, template: `%s | ${siteConfig.name}` }, description: "Practical AI-powered digital marketing that helps small and medium businesses get clearer, work faster, and attract the right customers.", openGraph: { type: "website", title: `${siteConfig.name} — AI Marketing Freelancer`, description: "Turn confusing marketing into a clear, practical plan for business growth.", url: siteConfig.siteUrl }, icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context": "https://schema.org", "@type": "ProfessionalService", name: siteConfig.brand, url: siteConfig.siteUrl, email: siteConfig.email, areaServed: siteConfig.location, description: "AI-powered digital marketing strategy and consulting for small and medium businesses." };
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to main content</a><SiteHeader />{children}<SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
