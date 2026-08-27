"use client";

import { useState } from "react";
import { ALIGN_PAGE_WAYS } from "@/lib/copy";

export function AlignForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    payload.ways = data.getAll("ways").join(", ");
    try {
      const res = await fetch("/api/align", {
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
        Conversation started. We’ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" id="align-form">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-[13px] text-hi">Name</span>
          <input name="name" required className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-[15px] text-hi" />
        </label>
        <label className="block">
          <span className="mb-2 block text-[13px] text-hi">Email</span>
          <input name="email" type="email" required className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-[15px] text-hi" />
        </label>
        <label className="block md:col-span-2">
          <span className="mb-2 block text-[13px] text-hi">Organization</span>
          <input name="organization" className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-[15px] text-hi" />
        </label>
      </div>
      <fieldset>
        <legend className="mb-3 text-[13px] text-hi">Ways to align</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {ALIGN_PAGE_WAYS.map((item) => (
            <label key={item} className="flex items-center gap-2 rounded-xl border border-line bg-panel px-3 py-2.5 text-[14px] text-soft">
              <input type="checkbox" name="ways" value={item} className="accent-blue" />
              {item}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block">
        <span className="mb-2 block text-[13px] text-hi">How would you like to help inspired founders move faster?</span>
        <textarea name="message" rows={5} required className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-[15px] text-hi" />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-[10px] bg-blue-mid px-6 py-3 text-[14px] font-medium text-white disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Start the Conversation"}
      </button>
      {status === "error" ? <p className="text-[14px] text-red-300">{message}</p> : null}
    </form>
  );
}
