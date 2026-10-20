import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const base =
  "mt-2 block w-full rounded-2xl border-0 bg-cream px-5 py-4 text-navy ring-1 ring-navy/10 transition placeholder:text-muted/60 focus:bg-white focus:ring-2 focus:ring-teal focus:outline-none";

function Label({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="block text-sm font-semibold text-navy">
      {label}
      {required && <span className="text-gold"> *</span>}
      {children}
    </label>
  );
}

export function Input({ label, ...props }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Label label={label} required={props.required}>
      <input {...props} className={base} />
    </Label>
  );
}

export function Textarea({ label, ...props }: { label: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <Label label={label} required={props.required}>
      <textarea rows={5} {...props} className={`${base} resize-y`} />
    </Label>
  );
}

export function Select({
  label,
  options,
  ...props
}: { label: string; options: string[] } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <Label label={label} required={props.required}>
      <select {...props} defaultValue={props.defaultValue ?? ""} className={`${base} appearance-none`}>
        <option value="" disabled>
          Please select
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </Label>
  );
}

export function Honeypot() {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>
        Company
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}
