"use client";

import { useState, type FormEvent } from "react";

export type Status = { state: "idle" | "sending" | "sent" | "error"; message?: string };

export function useSubmit(kind: "contact" | "referral" | "complaint") {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const company = String(data.get("company") ?? "");
    data.delete("company");
    const fields: Record<string, string> = {};
    for (const [k, v] of data.entries()) {
      fields[k] = fields[k] ? `${fields[k]}, ${v}` : String(v);
    }
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, fields, company }),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!json.ok) throw new Error(json.error ?? "Something went wrong.");
      form.reset();
      setStatus({ state: "sent" });
    } catch (err) {
      setStatus({ state: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  };

  return { status, setStatus, onSubmit };
}
