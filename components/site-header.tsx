"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { bookingHref, primaryCta } from "@/data/site";

const links = [{ href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/services", label: "Services" }, { href: "/blog", label: "Insights" }, { href: "/contact", label: "Contact" }];

export function SiteHeader() {
  const [open, setOpen] = useState(false); const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  return <header className="site-header"><div className="container nav-wrap"><Link href="/" className="header-logo-link" aria-label="Digital Bibash home"><img className="header-logo" src="/digital-bibash-logo-final.png" alt="Digital Bibash" /></Link><nav className="desktop-nav" aria-label="Primary navigation">{links.map((link) => <Link className={pathname === link.href ? "active" : ""} href={link.href} key={link.href}>{link.label}</Link>)}</nav><Link href={bookingHref} className="button button-small header-cta">{primaryCta}</Link><button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button></div><div id="mobile-navigation" className={`mobile-nav ${open ? "open" : ""}`}><nav className="container" aria-label="Mobile navigation">{links.map((link) => <Link className={pathname === link.href ? "active" : ""} href={link.href} key={link.href}>{link.label}</Link>)}<Link href={bookingHref} className="button">{primaryCta}</Link></nav></div></header>;
}
