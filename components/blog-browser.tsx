"use client";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/article-card";
import { articles, categories } from "@/data/blog";

export function BlogBrowser() {
  const [query, setQuery] = useState(""); const [category, setCategory] = useState("All");
  const filtered = useMemo(() => articles.filter((article) => (category === "All" || article.category === category) && `${article.title} ${article.description}`.toLowerCase().includes(query.toLowerCase().trim())), [category, query]);
  const reset = () => { setQuery(""); setCategory("All"); };
  return <><div className="blog-tools"><div className="search-box"><Search size={18} aria-hidden="true" /><label className="sr-only" htmlFor="article-search">Search articles</label><input id="article-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles" type="search" /></div><div className="filters" aria-label="Filter articles by category">{categories.map((item) => <button type="button" className={category === item ? "active" : ""} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div></div><p className="results-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? "article" : "articles"}</p>{filtered.length ? <div className="article-grid">{filtered.map((article) => <ArticleCard article={article} key={article.slug} />)}</div> : <div className="empty-state"><X size={28} /><h2>No articles match that search.</h2><p>Try another phrase or clear the filters to browse all insights.</p><button type="button" className="button button-ghost" onClick={reset}>Clear search and filters</button></div>}</>;
}
