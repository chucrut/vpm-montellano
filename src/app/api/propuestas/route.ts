import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Nombre y mensaje son obligatorios" },
        { status: 400 }
      );
    }

    // Log the proposal (can be replaced with email/Supabase later)
    console.log("[VPM Propuesta]", { name, email, message, at: new Date().toISOString() });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "No se pudo procesar la propuesta" },
      { status: 500 }
    );
  }
}
