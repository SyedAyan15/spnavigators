import { site } from "@/lib/site";

type Payload = {
  kind?: "contact" | "referral" | "complaint";
  fields?: Record<string, unknown>;
  company?: string; // honeypot
};

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

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
  const rows = Object.entries(fields)
    .map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top">${escape(k)}</td><td style="padding:6px 12px;white-space:pre-wrap">${escape(v)}</td></tr>`)
    .join("");
  const html = `<h2 style="font-family:Georgia,serif;color:#0d3157">${escape(subject)}</h2><table>${rows}</table>`;

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
      from: process.env.CONTACT_FROM_EMAIL ?? `Support Plan Navigators <noreply@spnavigators.com.au>`,
      to: [process.env.CONTACT_TO_EMAIL ?? site.email],
      reply_to: email,
      subject,
      html,
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
