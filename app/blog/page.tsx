import type { Metadata } from "next";
import { BlogBrowser } from "@/components/blog-browser";
import { Eyebrow } from "@/components/shared";
export const metadata: Metadata = { title: "Insights", description: "Practical articles about AI, digital marketing strategy, and automation for business owners." };
export default function BlogPage() { return <main id="main-content"><section className="page-hero centered-hero section-pad"><div className="container narrow"><Eyebrow>Insights for business owners</Eyebrow><h1>Practical marketing ideas, without the <em>noise.</em></h1><p className="hero-lead">Clear guides for using digital marketing and AI thoughtfully—written for business owners, not technicians.</p></div></section><section className="blog-listing section-pad"><div className="container"><BlogBrowser /></div></section></main>; }
