# Support Plan Navigators — www.spnavigators.com.au

Marketing website for **Support Plan Navigators Pty Ltd**: NDIS Support Coordination and Psychosocial Recovery Coaching.

Built with Next.js 16 (App Router, Cache Components), Tailwind CSS v4, framer-motion and lucide-react.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Environment variables

The contact and referral forms post to `/api/contact`, which emails the submission using [Resend](https://resend.com).

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes, in production | Resend API key. Without it, dev logs submissions to the console and production returns a friendly error with the phone and email. |
| `CONTACT_TO_EMAIL` | No | Inbox that receives submissions (default `admin@spnav.com.au`). |
| `CONTACT_FROM_EMAIL` | No | Sender address (default `noreply@spnavigators.com.au`). The domain must be verified in Resend. |

## Pages

| Route | Purpose / main keywords |
| --- | --- |
| `/` | NDIS support coordination, psychosocial recovery coaching |
| `/support-coordination` | NDIS support coordinator, support coordination levels |
| `/psychosocial-recovery-coaching` | psychosocial recovery coach, psychosocial disability, recovery plan |
| `/how-it-works` | getting started, service agreements, funding |
| `/about` | company story, values, logo story, company details |
| `/ndis-resources` | understanding your NDIS plan, plan reassessment checklist, glossary |
| `/faqs` | searchable FAQs (FAQPage schema) |
| `/contact`, `/make-a-referral` | contact form and 4-step referral form |
| `/privacy-policy` | privacy policy |

SEO: per-page metadata and canonicals, Open Graph image, `sitemap.xml`, `robots.txt`, web manifest, and JSON-LD for Organization/LocalBusiness, Service, FAQPage and BreadcrumbList.

## Where to edit

- Business details (phone, email, nav): `src/lib/site.ts`
- FAQ page content: `src/lib/faqs.ts`
- Brand colours and fonts: `src/app/globals.css` (`@theme`) and `src/app/layout.tsx`
- Page copy: `src/app/**/page.tsx`

## Images

All photos in `public/images` are from [Unsplash](https://unsplash.com) under the free Unsplash License (commercial use allowed, no attribution required). Photographers: Elevate, Nathan Anderson, Vitaly Gariev, Priscilla Du Preez, Age Cymru, Centre for Ageing Better, Annie Spratt, arty, Kylli Kittus, Dan Meyers, Zachary Kyra-Derksen, Toa Heftiba, Land O'Lakes Inc., Christina @ wocintechchat.com, Samsung UK, Kelly Sikkema, Matt Palmer and Neil Thomas.

Replace them with real photos of your team and clients (with consent) whenever you can.
