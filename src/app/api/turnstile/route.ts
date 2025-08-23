import { NextResponse } from "next/server";

type VerifyResp = {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  cdata?: string;
};

export async function POST(req: Request) {
  const secret = process.env.TURNSTILE_SECRET_KEY || "";
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: "TURNSTILE_SECRET_KEY missing" },
      { status: 500, headers: { "X-Robots-Tag": "noindex" } }
    );
  }

  const { token } = (await req.json().catch(() => ({}))) as { token?: string };
  if (!token) {
    return NextResponse.json(
      { ok: false, error: "Missing token" },
      { status: 400, headers: { "X-Robots-Tag": "noindex" } }
    );
  }

  // Optional: pass client IP to Cloudflare for better risk scoring
  const ip =
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    undefined;

  const form = new URLSearchParams();
  form.set("secret", secret);
  form.set("response", token);
  if (ip) form.set("remoteip", ip);

  const resp = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    cache: "no-store",
  });

  if (!resp.ok) {
    return NextResponse.json(
      { ok: false, error: `Turnstile HTTP ${resp.status}` },
      { status: 502, headers: { "X-Robots-Tag": "noindex" } }
    );
  }

  const data = (await resp.json()) as VerifyResp;
  if (!data.success) {
    return NextResponse.json(
      { ok: false, error: data["error-codes"]?.join(", ") || "Turnstile failed" },
      { status: 403, headers: { "X-Robots-Tag": "noindex" } }
    );
  }

  return NextResponse.json({ ok: true }, { headers: { "X-Robots-Tag": "noindex" } });
}

