"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { Honeypot, Input, Select, Textarea } from "./Field";
import { Sent } from "./Sent";
import { useSubmit } from "./useSubmit";

const stepNames = ["Referrer", "Participant", "Supports", "Consent"];

export function ReferralForm() {
  const { status, setStatus, onSubmit } = useSubmit("referral");
  const [step, setStep] = useState(0);
  const [self, setSelf] = useState(false);
  const sections = useRef<(HTMLFieldSetElement | null)[]>([]);

  const valid = () => {
    const els = sections.current[step]?.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("input, select, textarea");
    for (const el of els ?? []) if (!el.reportValidity()) return false;
    return true;
  };

  if (status.state === "sent") {
    return (
      <Sent
        title="Referral received. Thank you."
        text="We’ll review the referral and contact the participant (or their nominee) soon, usually within one business day, to introduce ourselves and arrange a first chat."
        onReset={() => {
          setStep(0);
          setStatus({ state: "idle" });
        }}
      />
    );
  }

  return (
    <form
      onSubmit={(e) => {
        if (step < stepNames.length - 1) {
          e.preventDefault();
          if (valid()) setStep((s) => s + 1);
          return;
        }
        onSubmit(e);
      }}
      className="relative"
    >
      <Honeypot />
      <ol className="mb-10 grid grid-cols-4 gap-2" aria-label="Form progress">
        {stepNames.map((n, i) => (
          <li key={n} className="text-center">
            <div className="h-2 overflow-hidden rounded-full bg-sand">
              <motion.div className="h-full bg-gradient-to-r from-teal to-gold" initial={false} animate={{ width: i <= step ? "100%" : "0%" }} />
            </div>
            <span className={`mt-2 block text-xs font-bold sm:text-sm ${i === step ? "text-navy" : "text-muted"}`} aria-current={i === step ? "step" : undefined}>
              {i + 1}. {n}
            </span>
          </li>
        ))}
      </ol>

      {/* All steps stay mounted so FormData includes every field. */}
      <fieldset ref={(el) => { sections.current[0] = el; }} hidden={step !== 0} className="grid gap-5 sm:grid-cols-2">
        <legend className="mb-5 font-display text-2xl font-semibold text-navy sm:col-span-2">About you</legend>
        <label className="flex items-center gap-3 rounded-2xl bg-cream p-4 text-sm font-semibold text-navy sm:col-span-2">
          <input type="checkbox" name="selfReferral" value="Yes" checked={self} onChange={(e) => setSelf(e.target.checked)} className="h-5 w-5 accent-teal" />
          I’m the participant and I’m referring myself
        </label>
        {!self && (
          <>
            <Input label="Your name" name="referrerName" required />
            <Input label="Organisation (if any)" name="referrerOrganisation" />
            <Input label="Your role / relationship to participant" name="referrerRole" required />
            <Input label="Phone" name="referrerPhone" type="tel" required />
            <div className="sm:col-span-2">
              <Input label="Email" name="referrerEmail" type="email" required />
            </div>
          </>
        )}
        {self && <p className="text-muted sm:col-span-2">Great, just add your details on the next step.</p>}
      </fieldset>

      <fieldset ref={(el) => { sections.current[1] = el; }} hidden={step !== 1} className="grid gap-5 sm:grid-cols-2">
        <legend className="mb-5 font-display text-2xl font-semibold text-navy sm:col-span-2">Participant details</legend>
        <Input label="Participant name" name="participantName" required />
        <Input label="Date of birth" name="participantDob" type="date" />
        <Input label="Phone" name="participantPhone" type="tel" required={self} />
        <Input label="Email" name="participantEmail" type="email" />
        <Input label="Suburb & state" name="participantLocation" required />
        <Input label="NDIS number (if known)" name="ndisNumber" inputMode="numeric" />
        <Select label="Plan management type" name="planManagement" options={["NDIA-managed", "Plan-managed", "Self-managed", "Combination", "Not sure"]} />
        <Input label="Plan end / reassessment date (if known)" name="planEndDate" type="date" />
      </fieldset>

      <fieldset ref={(el) => { sections.current[2] = el; }} hidden={step !== 2} className="grid gap-5">
        <legend className="mb-5 font-display text-2xl font-semibold text-navy">Supports requested</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {["NDIS Support Coordination", "Psychosocial Recovery Coaching"].map((s) => (
            <label key={s} className="flex items-center gap-3 rounded-2xl bg-cream p-4 font-semibold text-navy ring-1 ring-navy/10 has-checked:bg-teal/10 has-checked:ring-2 has-checked:ring-teal">
              <input type="checkbox" name="servicesRequested" value={s} className="h-5 w-5 accent-teal" />
              {s}
            </label>
          ))}
        </div>
        <Textarea label="Reason for referral and current situation" name="referralReason" required placeholder="Goals, current supports, any immediate needs…" />
        <Textarea label="Any risks, communication or accessibility needs we should know about?" name="considerations" rows={3} />
      </fieldset>

      <fieldset ref={(el) => { sections.current[3] = el; }} hidden={step !== 3} className="grid gap-5">
        <legend className="mb-5 font-display text-2xl font-semibold text-navy">Consent</legend>
        <label className="flex items-start gap-3 rounded-2xl bg-cream p-5 text-navy">
          <input type="checkbox" name="participantConsent" value="Yes" required className="mt-1 h-5 w-5 accent-teal" />
          <span>The participant (or their legal guardian / nominee) has given consent for this referral and for Support Plan Navigators to contact them.</span>
        </label>
        <label className="flex items-start gap-3 rounded-2xl bg-cream p-5 text-navy">
          <input type="checkbox" name="privacyConsent" value="Yes" required className="mt-1 h-5 w-5 accent-teal" />
          <span>
            I understand the information provided will be handled in line with the{" "}
            <Link href="/privacy-policy" className="font-semibold text-teal underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        <Textarea label="Anything else?" name="notes" rows={3} />
      </fieldset>

      <AnimatePresence>
        {status.state === "error" && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="alert" className="mt-6 rounded-2xl bg-red-50 p-4 text-sm font-medium text-red-800">
            {status.message}
          </motion.p>
        )}
      </AnimatePresence>

      <div className="mt-10 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button type="button" onClick={() => setStep((s) => s - 1)} className="inline-flex items-center gap-2 font-semibold text-muted hover:text-navy">
            <ArrowLeft className="h-4 w-4" aria-hidden /> Back
          </button>
        ) : (
          <span />
        )}
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-navy px-8 py-4 font-bold text-white shadow-xl disabled:opacity-60"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-teal to-sage transition-transform duration-500 group-hover:translate-x-0" />
          <span className="relative flex items-center gap-2">
            {step < stepNames.length - 1 ? (
              <>
                Next <ArrowRight className="h-4 w-4" aria-hidden />
              </>
            ) : status.state === "sending" ? (
              "Sending…"
            ) : (
              <>
                Submit referral <Send className="h-4 w-4" aria-hidden />
              </>
            )}
          </span>
        </button>
      </div>
    </form>
  );
}
