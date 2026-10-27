import { BarChart3, Bot, Mail, Megaphone, Search, Share2, type LucideIcon } from "lucide-react";

export const siteConfig = {
  name: "Digital Bibash",
  brand: "Digital Bibash — AI Marketing Freelancer",
  email: "bibashpro2026@gmail.com",
  location: "Your Location",
  bookingUrl: "",
  siteUrl: "https://yourdomain.com",
  socialLinks: [] as { label: string; href: string }[],
};

export const primaryCta = "Book a Free Consultation Call";

export type Service = {
  slug: string; title: string; short: string; problem: string; includes: string[]; benefits: string[]; icon: LucideIcon; number: string;
};

export const services: Service[] = [
  { slug: "ai-marketing-strategy", title: "AI Marketing Strategy & Consulting", short: "Replace guesswork with a clear marketing plan built around your goals, customers, and budget.", problem: "You are trying different marketing activities, but there is no clear plan connecting them to leads and sales.", includes: ["Business and audience review", "Marketing channel priorities", "Practical AI opportunities", "Simple performance measures"], benefits: ["Know what to focus on first", "Spend less time on low-value work", "Make decisions with more confidence"], icon: Bot, number: "01" },
  { slug: "social-media-marketing", title: "Social Media Marketing", short: "Turn random posting into a consistent plan that builds attention, trust, and customer interest.", problem: "You spend time posting, but the content feels inconsistent and does not create enough useful conversations or enquiries.", includes: ["Channel and audience strategy", "Content themes and calendars", "Post planning and creation", "Performance review"], benefits: ["Post with a clear purpose", "Stay consistent with less stress", "Create content your customers value"], icon: Share2, number: "02" },
  { slug: "content-marketing", title: "Content Marketing & AI-Assisted Creation", short: "Create helpful content faster without losing your knowledge, personality, or human voice.", problem: "You know what your customers need to hear, but creating quality content regularly takes too much time.", includes: ["Content strategy", "Topic and message planning", "AI-assisted drafting", "Human editing and quality checks"], benefits: ["Create content more efficiently", "Keep your message clear and consistent", "Reuse strong ideas across channels"], icon: Megaphone, number: "03" },
  { slug: "search-engine-optimization", title: "Search Engine Optimization", short: "Make it easier for the right people to find your business when they search for a solution.", problem: "Your website is difficult to find, attracts the wrong visitors, or does not clearly explain why customers should contact you.", includes: ["Search opportunity review", "On-page content improvements", "Technical SEO priorities", "SEO content plan"], benefits: ["Build stronger search visibility", "Attract more relevant visitors", "Turn website visits into clearer next steps"], icon: Search, number: "04" },
  { slug: "paid-advertising", title: "Paid Advertising", short: "Build focused ad campaigns with the right audience, message, offer, and tracking.", problem: "You are spending money on ads without a clear view of what is working or why people are not converting.", includes: ["Campaign planning", "Audience and message development", "Creative direction", "Tracking and improvement plan"], benefits: ["Reduce wasted ad spend", "Understand campaign performance", "Improve decisions using real data"], icon: BarChart3, number: "05" },
  { slug: "email-automation", title: "Email Marketing & Automation", short: "Follow up with leads and customers consistently without doing every task by hand.", problem: "Leads go cold because follow-up is slow, inconsistent, or dependent on someone remembering every step.", includes: ["Customer journey mapping", "Email sequence planning", "Automation workflow design", "Message and performance review"], benefits: ["Follow up at the right time", "Save time on repeat tasks", "Create a smoother customer journey"], icon: Mail, number: "06" },
];

export const bookingHref = siteConfig.bookingUrl || "/contact#consultation";
