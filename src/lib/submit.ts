export async function forwardSubmission(
  kind: "apply" | "align",
  payload: Record<string, unknown>
) {
  const webhook =
    kind === "apply" ? process.env.APPLY_WEBHOOK_URL : process.env.ALIGN_WEBHOOK_URL;
  const to = process.env.FORM_NOTIFY_EMAIL;

  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind, payload, submittedAt: new Date().toISOString() }),
    });
    if (!res.ok) {
      throw new Error(`Webhook failed (${res.status})`);
    }
  }

  console.info(`[dcrbn] ${kind} submission`, {
    to: to || null,
    webhook: Boolean(webhook),
    keys: Object.keys(payload),
  });

  return { ok: true, delivered: Boolean(webhook) };
}
