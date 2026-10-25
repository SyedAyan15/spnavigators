"use client";

import { Send } from "lucide-react";
import Link from "next/link";
import { Honeypot, Input, Select, Textarea } from "./Field";
import { Sent } from "./Sent";
import { useSubmit } from "./useSubmit";

export function ComplaintForm() {
  const { status, setStatus, onSubmit } = useSubmit("complaint");

  if (status.state === "sent") {
    return (
      <Sent
        title="Thank you for telling us."
        text="We’ve received your feedback. If you left contact details, we’ll be in touch to acknowledge it and talk about next steps."
        onReset={() => setStatus({ state: "idle" })}
      />
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative grid gap-5 sm:grid-cols-2">
      <Honeypot />
      <div className="sm:col-span-2">
        <Select label="What would you like to share?" name="type" required options={["Complaint", "Suggestion", "Compliment"]} />
      </div>
      <div className="sm:col-span-2">
        <Textarea label="What happened?" name="details" required placeholder="Tell us in your own words. Include dates or names if you can." />
      </div>
      <div className="sm:col-span-2">
        <Textarea label="What would you like to happen? (optional)" name="outcome" rows={3} />
      </div>
      <Input label="Your name (optional)" name="name" autoComplete="name" />
      <Input label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />
      <div className="sm:col-span-2">
        <Input label="Email (optional)" name="email" type="email" autoComplete="email" />
      </div>
      <p className="rounded-2xl bg-cream p-4 text-sm leading-relaxed text-muted sm:col-span-2">
        You can stay anonymous by leaving your details blank, but we won’t be able to reply to you. Your information is
        handled in line with our{" "}
        <Link href="/privacy-policy" className="font-semibold text-teal underline">
          Privacy Policy
        </Link>
        .
      </p>

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
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-teal to-ochre transition-transform duration-500 group-hover:translate-x-0" />
          <span className="relative flex items-center gap-2">
            {status.state === "sending" ? "Sending…" : "Send feedback"}
            <Send className="h-4 w-4" aria-hidden />
          </span>
        </button>
      </div>
    </form>
  );
}
