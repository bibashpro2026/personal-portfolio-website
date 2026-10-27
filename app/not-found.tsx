import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound() { return <main id="main-content" className="not-found"><div><span>404</span><h1>This page wandered off the plan.</h1><p>The page you are looking for does not exist or may have moved.</p><Link className="button" href="/"><ArrowLeft size={17} />Back to homepage</Link></div></main>; }
