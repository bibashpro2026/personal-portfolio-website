# AI Marketing Portfolio

A responsive, five-page personal portfolio for an AI Marketing Expert. Built with Next.js-compatible Vinext, TypeScript, React, and CSS. The site is intentionally local-only until the owner details and email integration are configured.

## Local setup

Requirements: Node.js 22.13 or later.

```bash
npm install
npm run dev
```

Open the local URL printed by the development server (normally `http://127.0.0.1:5173`).

Production check:

```bash
npm run build
npm start
```

## Personalize the site

Edit `data/site.ts` to replace the name, brand, email, location, booking URL, production site URL, and social links. When `bookingUrl` is blank, every consultation button goes to `/contact#consultation`. Add a full scheduler URL to send every CTA to one booking destination.

Replace the profile placeholders by editing `components/shared.tsx`. Update the editable background, qualifications, and personal story placeholders in `app/about/page.tsx` before publishing.

## Edit services and articles

Service titles, descriptions, inclusions, and benefits live in `data/site.ts`. The homepage and Services page both render from this list.

Articles live in `data/blog.ts`. Add an object with a unique slug, metadata, introduction, and sections. The listing, filters, sitemap, article page, and related content update automatically.

## Enable email delivery

The server endpoint at `app/api/contact/route.ts` validates submissions and forwards them to the FormSubmit AJAX endpoint. The destination is the email address configured in `data/site.ts`; no API key or email-delivery environment variables are required.

Submit the form once, then open the activation email from FormSubmit and confirm the address. FormSubmit queues submissions until the form is confirmed and delivers them afterward. Check the spam folder if the activation email does not appear in the inbox.

## Deployment checklist

1. Replace every placeholder in `data/site.ts` and the About page.
2. Replace the profile photo placeholder.
3. Confirm the FormSubmit activation email after the first test submission.
4. Add a real booking link or intentionally retain the request flow.
5. Change `siteUrl` so metadata, structured data, sitemap, and robots output use the production domain.
6. Run `npm run build`.

The site has not been published.
