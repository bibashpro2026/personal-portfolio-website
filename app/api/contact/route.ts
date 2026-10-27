import { NextResponse } from "next/server";
import { siteConfig } from "@/data/site";

type ContactPayload = { name?: unknown; email?: unknown; business?: unknown; website?: unknown; interest?: unknown; message?: unknown; companyWebsite?: unknown };
type FormSubmitResponse = { success?: boolean | string; message?: string };
const text = (value: unknown, max = 500) => typeof value === "string" ? value.trim().slice(0, max) : "";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try { body = await request.json() as ContactPayload; } catch { return NextResponse.json({ message: "Please submit a valid form." }, { status: 400 }); }
  if (text(body.companyWebsite)) return NextResponse.json({ message: "Thanks." });
  const name = text(body.name, 120); const email = text(body.email, 254); const business = text(body.business, 180); const website = text(body.website, 300); const interest = text(body.interest, 180); const message = text(body.message, 3000);
  if (name.length < 2 || !emailPattern.test(email) || message.length < 20) return NextResponse.json({ message: "Please provide your name, a valid email address, and a message of at least 20 characters." }, { status: 400 });
  if (website) { try { const url = new URL(website); if (!["http:", "https:"].includes(url.protocol)) throw new Error(); } catch { return NextResponse.json({ message: "Please enter a valid website URL beginning with http:// or https://." }, { status: 400 }); } }

  const formUrl = new URL("/contact", request.url).toString();
  const formOrigin = new URL(request.url).origin;
  const formSubmitPayload = {
    name,
    email,
    business: business || "Not provided",
    website: website || "Not provided",
    interest: interest || "Not provided",
    message,
    _replyto: email,
    _subject: `New consultation request from ${name}`,
    _template: "table",
    _captcha: "false",
    _honey: "",
    _url: formUrl,
  };

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: formOrigin,
        Referer: formUrl,
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify(formSubmitPayload),
    });
    const result = await response.json().catch(() => null) as FormSubmitResponse | null;
    const delivered = result?.success === true || result?.success === "true";
    const activationPending = result?.success === "false" && result.message?.toLowerCase().includes("activation");

    if (activationPending) {
      return NextResponse.json(
        { message: "Your request was received. Email delivery is awaiting the site owner’s one-time confirmation." },
        { status: 202 },
      );
    }

    if (!response.ok || !delivered) {
      return NextResponse.json(
        { message: `The message service could not send your request. Please email ${siteConfig.email}.` },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message: "Your consultation request was sent. I’ll follow up using the email address you provided.",
    });
  } catch {
    return NextResponse.json(
      { message: `The message service is temporarily unavailable. Please email ${siteConfig.email}.` },
      { status: 502 },
    );
  }
}
