"use client";

import { useState } from "react";
import { GROWTH_LAYERS } from "@/lib/copy";

const FRONTIERS = ["AI", "Blockchain", "Quantum", "Adjacent frontier"] as const;
const STRUCTURES = ["Advisory", "Retainer", "Equity", "Hybrid"] as const;

export function ApplyForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    payload.support = data.getAll("support").join(", ");
    payload.structure = data.getAll("structure").join(", ");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Unable to submit");
      setStatus("done");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Unable to submit");
    }
  }

  if (status === "done") {
    return (
      <p className="rounded-2xl border border-line bg-panel p-8 text-[16px] leading-relaxed text-hi">
        Application received. We review selectively and will be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" id="apply-form">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Founder name" name="founderName" required />
        <Field label="Company name" name="companyName" required />
        <Field label="Website" name="website" type="url" />
        <Field label="Industry" name="industry" />
        <Field label="Stage" name="stage" />
        <Field label="Location" name="location" />
      </div>
      <Area label="What problem are you solving?" name="problem" required />
      <Area label="Why does this problem matter?" name="whyItMatters" required />
      <fieldset>
        <legend className="mb-2 text-[13px] text-hi">
          Are you building in AI, blockchain, quantum, or an adjacent frontier?
        </legend>
        <select
          name="frontier"
          required
          className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-[15px] text-hi"
          defaultValue=""
        >
          <option value="" disabled>
            Select one
          </option>
          {FRONTIERS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </fieldset>
      <Area label="What infrastructure are you building?" name="infrastructure" required />
      <Area label="What traction do you have?" name="traction" required />
      <Area
        label="Do you have paying customers, revenue, LOIs, pilot customers, IP, patents, prior exits, or strong advisors/team members?"
        name="signals"
        required
      />
      <Area label="What would accelerate your growth most right now?" name="accelerate" required />
      <fieldset>
        <legend className="mb-3 text-[13px] text-hi">Where do you need the most support?</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {GROWTH_LAYERS.map((item) => (
            <label key={item} className="flex items-center gap-2 rounded-xl border border-line bg-panel px-3 py-2.5 text-[14px] text-soft">
              <input type="checkbox" name="support" value={item} className="accent-blue" />
              {item}
            </label>
          ))}
        </div>
      </fieldset>
      <Area label="Why DCRBN?" name="whyDcrbn" required />
      <Area label="Why does your solution inspire you?" name="inspire" required />
      <fieldset>
        <legend className="mb-3 text-[13px] text-hi">
          Are you open to advisory, retainer, equity, or hybrid structures?
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {STRUCTURES.map((item) => (
            <label key={item} className="flex items-center gap-2 rounded-xl border border-line bg-panel px-3 py-2.5 text-[14px] text-soft">
              <input type="checkbox" name="structure" value={item} className="accent-blue" />
              {item}
            </label>
          ))}
        </div>
      </fieldset>
      <Field label="Work email" name="email" type="email" required />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-[10px] bg-blue-mid px-6 py-3 text-[14px] font-medium text-white disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Submit Application"}
      </button>
      {status === "error" ? <p className="text-[14px] text-red-300">{message}</p> : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[13px] text-hi">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-[15px] text-hi"
      />
    </label>
  );
}

function Area({ label, name, required }: { label: string; name: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[13px] text-hi">{label}</span>
      <textarea
        name={name}
        required={required}
        rows={4}
        className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-[15px] text-hi"
      />
    </label>
  );
}
