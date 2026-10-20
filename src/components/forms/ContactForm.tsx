"use client";

import { Send } from "lucide-react";
import Link from "next/link";
import { Honeypot, Input, Select, Textarea } from "./Field";
import { Sent } from "./Sent";
import { useSubmit } from "./useSubmit";

export function ContactForm() {
  const { status, setStatus, onSubmit } = useSubmit("contact");

  if (status.state === "sent") {
    return (
      <Sent
        title="Thanks, we’ve got your message."
        text="A member of our team will be in touch soon, usually within one business day. If it’s urgent, please give us a call."
        onReset={() => setStatus({ state: "idle" })}
      />
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative grid gap-5 sm:grid-cols-2" noValidate={false}>
      <Honeypot />
      <Input label="Your name" name="name" required autoComplete="name" />
      <Input label="Phone" name="phone" type="tel" autoComplete="tel" />
      <div className="sm:col-span-2">
        <Input label="Email" name="email" type="email" required autoComplete="email" />
      </div>
      <Select label="I am a…" name="role" options={["NDIS participant", "Family member or carer", "Health or community professional", "Other"]} />
      <Select
        label="I’m interested in…"
        name="service"
        options={["NDIS Support Coordination", "Psychosocial Recovery Coaching", "Both", "Not sure yet"]}
      />
      <div className="sm:col-span-2">
        <Textarea label="How can we help?" name="message" placeholder="Tell us a little about what’s happening and what you’re looking for." />
      </div>
      <Select label="Best way to reach you" name="preferredContact" options={["Phone call", "Text message", "Email"]} />
      <div className="flex items-end">
        <label className="flex items-start gap-3 text-sm text-muted">
          <input type="checkbox" name="consent" value="Yes" required className="mt-1 h-5 w-5 rounded accent-teal" />
          <span>
            I agree to Support Plan Navigators contacting me and handling my information in line with the{" "}
            <Link href="/privacy-policy" className="font-semibold text-teal underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
      </div>

      {status.state === "error" && (
        <p role="alert" className="rounded-2xl bg-red-50 p-4 text-sm font-medium text-red-800 sm:col-span-2">
          {status.message}
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-navy px-8 py-4 font-bold text-white shadow-xl transition disabled:opacity-60 sm:w-auto"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-teal to-sage transition-transform duration-500 group-hover:translate-x-0" />
          <span className="relative flex items-center gap-2">
            {status.state === "sending" ? "Sending…" : "Send message"}
            <Send className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
          </span>
        </button>
      </div>
    </form>
  );
}
