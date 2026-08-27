import { NextResponse } from "next/server";
import { forwardSubmission } from "@/lib/submit";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>;
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }
  try {
    await forwardSubmission("align", body);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unable to submit." },
      { status: 502 }
    );
  }
}
