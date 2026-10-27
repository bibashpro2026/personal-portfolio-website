import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { ConsultationCta } from "@/components/shared";
import { articles } from "@/data/blog";

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const article = articles.find((item) => item.slug === slug); return article ? { title: article.title, description: article.description, openGraph: { type: "article", title: article.title, description: article.description, publishedTime: article.date } } : {}; }

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const article = articles.find((item) => item.slug === slug); if (!article) notFound(); const related = articles.filter((item) => item.slug !== slug).slice(0, 2);
  return <main id="main-content"><article><header className="article-hero section-pad"><div className="container article-head"><Link href="/blog" className="back-link"><ArrowLeft size={16} /> Back to insights</Link><div className="meta"><span>{article.category}</span><time dateTime={article.date}>{article.displayDate}</time><span>{article.readTime}</span></div><h1>{article.title}</h1><p>{article.description}</p></div></header><div className="article-layout container section-pad"><aside><p>In this article</p>{article.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}>{String(index + 1).padStart(2, "0")} {section.heading}</a>)}</aside><div className="article-body"><p className="article-intro">{article.intro}</p>{article.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}</div></div></article><section className="related section-pad soft-section"><div className="container"><div className="section-heading split"><h2>Keep reading</h2><Link href="/blog" className="text-link">All insights <ArrowRight size={16} /></Link></div><div className="article-grid related-grid">{related.map((item) => <ArticleCard article={item} key={item.slug} />)}</div></div></section><div className="container section-bottom"><ConsultationCta title="Want to apply these ideas to your business?" /></div></main>;
}
