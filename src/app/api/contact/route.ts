import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
  hp: z.string().max(0),
});

const submissions = new Map<string, number[]>();
const RATE_LIMIT = 3;
const RATE_WINDOW = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissions.get(ip) || []).filter(
    (t) => now - t < RATE_WINDOW
  );
  submissions.set(ip, timestamps);
  return timestamps.length >= RATE_LIMIT;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const data = schema.parse(body);

    if (data.hp) {
      return NextResponse.json({ ok: true });
    }

    // TODO: Connect real email delivery (Resend, SendGrid, etc.)
    // For now, log to server console so submissions are not silently lost
    console.log("[contact]", {
      name: data.name,
      email: data.email,
      company: data.company || "-",
      message: data.message.slice(0, 120),
      ip,
      ts: new Date().toISOString(),
    });

    const timestamps = submissions.get(ip) || [];
    timestamps.push(Date.now());
    submissions.set(ip, timestamps);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
