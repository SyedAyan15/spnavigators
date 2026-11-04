import { site } from "@/lib/site";

type Payload = {
  kind?: "contact" | "referral" | "complaint";
  fields?: Record<string, unknown>;
  company?: string; // honeypot
};

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

type Section = { heading: string; fields: [key: string, label: string][] };

// Email layout per form, in the same order and wording as the forms themselves.
const LAYOUT: Record<"contact" | "referral" | "complaint", Section[]> = {
  referral: [
    {
      heading: "Referrer",
      fields: [
        ["selfReferral", "Self-referral"],
        ["referrerName", "Name"],
        ["referrerOrganisation", "Organisation"],
        ["referrerRole", "Role / relationship to participant"],
        ["referrerPhone", "Phone"],
        ["referrerEmail", "Email"],
      ],
    },
    {
      heading: "Participant",
      fields: [
        ["participantName", "Name"],
        ["participantDob", "Date of birth"],
        ["participantPhone", "Phone"],
        ["participantEmail", "Email"],
        ["participantLocation", "Suburb & state"],
        ["ndisNumber", "NDIS number"],
        ["planManagement", "Plan management"],
        ["planEndDate", "Plan end / reassessment date"],
      ],
    },
    {
      heading: "Supports requested",
      fields: [
        ["servicesRequested", "Services"],
        ["referralReason", "Reason for referral & current situation"],
        ["considerations", "Risks, communication or accessibility needs"],
      ],
    },
    {
      heading: "Consent",
      fields: [
        ["participantConsent", "Participant / nominee consent given"],
        ["privacyConsent", "Privacy Policy acknowledged"],
        ["notes", "Anything else"],
      ],
    },
  ],
  contact: [
    {
      heading: "Enquiry",
      fields: [
        ["name", "Name"],
        ["phone", "Phone"],
        ["email", "Email"],
        ["role", "I am a"],
        ["service", "Interested in"],
        ["preferredContact", "Best way to reach them"],
        ["message", "Message"],
        ["consent", "Agreed to be contacted"],
      ],
    },
  ],
  complaint: [
    {
      heading: "Feedback",
      fields: [
        ["type", "Type"],
        ["details", "What happened"],
        ["outcome", "What they would like to happen"],
        ["name", "Name"],
        ["phone", "Phone"],
        ["email", "Email"],
      ],
    },
  ],
};

// Form dates arrive as YYYY-MM-DD; show them the Australian way.
const display = (v: string) => (/^\d{4}-\d{2}-\d{2}$/.test(v) ? v.split("-").reverse().join("/") : v);

function renderEmail(kind: keyof typeof LAYOUT, subject: string, fields: Record<string, string>) {
  const sections = LAYOUT[kind].map((s) => ({ ...s, fields: s.fields.filter(([k]) => fields[k]) }));
  const known = new Set(LAYOUT[kind].flatMap((s) => s.fields.map(([k]) => k)));
  const extra = Object.keys(fields).filter((k) => !known.has(k));
  if (extra.length) sections.push({ heading: "Other", fields: extra.map((k) => [k, k]) });
  const visible = sections.filter((s) => s.fields.length);

  const submitted = new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney", dateStyle: "full", timeStyle: "short" });

  const html =
    `<div style="font-family:Arial,Helvetica,sans-serif;color:#172638;max-width:640px">` +
    `<div style="background:#0d3157;color:#fff;padding:20px 24px;border-radius:12px 12px 0 0">` +
    `<div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#f8c96a">Support Plan Navigators website</div>` +
    `<div style="font-size:20px;font-weight:bold;margin-top:6px">${escape(subject)}</div>` +
    `<div style="font-size:13px;color:#cbd6e2;margin-top:6px">Submitted ${escape(submitted)} (Sydney time)</div></div>` +
    `<div style="border:1px solid #e6f0f6;border-top:0;border-radius:0 0 12px 12px;padding:8px 24px 20px">` +
    visible
      .map(
        (s) =>
          `<h3 style="color:#0d6a6e;font-size:15px;margin:20px 0 8px;border-bottom:2px solid #f2a12a;padding-bottom:4px">${escape(s.heading)}</h3>` +
          `<table style="width:100%;border-collapse:collapse;font-size:14px">` +
          s.fields
            .map(
              ([k, label]) =>
                `<tr><td style="padding:6px 12px 6px 0;width:42%;color:#546179;vertical-align:top">${escape(label)}</td>` +
                `<td style="padding:6px 0;font-weight:600;white-space:pre-wrap;vertical-align:top">${escape(display(fields[k]))}</td></tr>`,
            )
            .join("") +
          `</table>`,
      )
      .join("") +
    `<p style="font-size:12px;color:#546179;margin-top:24px">Reply to this email to respond directly to the person who submitted it.</p></div></div>`;

  const text = [
    subject,
    `Submitted ${submitted} (Sydney time)`,
    ...visible.flatMap((s) => ["", s.heading.toUpperCase(), ...s.fields.map(([k, label]) => `${label}: ${display(fields[k])}`)]),
  ].join("\n");

  return { html, text };
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden field; pretend success so they move on.
  if (body.company) return Response.json({ ok: true });

  const kind = body.kind === "referral" || body.kind === "complaint" ? body.kind : "contact";
  const fields = Object.fromEntries(
    Object.entries(body.fields ?? {})
      .filter(([, v]) => typeof v === "string" && v.trim() !== "")
      .map(([k, v]) => [k, (v as string).trim().slice(0, 4000)]),
  );

  const email = fields.email ?? fields.referrerEmail ?? fields.participantEmail;
  const name = fields.name ?? fields.referrerName ?? fields.participantName;
  // Complaints may be anonymous, so only the description is required.
  if (kind === "complaint") {
    if (!fields.details) {
      return Response.json({ ok: false, error: "Please tell us what happened." }, { status: 422 });
    }
  } else if (!name || (!email && !fields.phone && !fields.referrerPhone && !fields.participantPhone)) {
    return Response.json({ ok: false, error: "Please include a name and a way to contact you." }, { status: 422 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, error: "Please check the email address." }, { status: 422 });
  }

  const subject =
    kind === "referral"
      ? `New referral: ${fields.participantName ?? name}`
      : kind === "complaint"
        ? `Feedback / complaint${name ? ` from ${name}` : " (anonymous)"}`
        : `Website enquiry from ${name}`;
  const { html, text } = renderEmail(kind, subject, fields);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[contact] RESEND_API_KEY not set; ${kind} not emailed`, fields);
      return Response.json({ ok: true });
    }
    return Response.json(
      { ok: false, error: `Our form is temporarily unavailable. Please email ${site.email} or call ${site.phone}.` },
      { status: 503 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      // Resend's shared test sender; it can only deliver to the email the Resend account was created with.
      from: process.env.CONTACT_FROM_EMAIL || process.env.RESEND_FROM_EMAIL || "Support Plan Navigators <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL || process.env.RESEND_TO_EMAIL || "zara@spnavigators.com.au"],
      reply_to: email,
      subject,
      html,
      text,
    }),
  });

  if (!res.ok) {
    console.error("[contact] email send failed", res.status, await res.text());
    return Response.json(
      { ok: false, error: `Sorry, something went wrong. Please email ${site.email} or call ${site.phone}.` },
      { status: 502 },
    );
  }
  return Response.json({ ok: true });
}
