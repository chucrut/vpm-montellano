import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Email válido requerido" },
        { status: 400 }
      );
    }

    // Log the subscription (can be replaced with email service later)
    console.log("[VPM Newsletter]", { email, at: new Date().toISOString() });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "No se pudo procesar la suscripción" },
      { status: 500 }
    );
  }
}
