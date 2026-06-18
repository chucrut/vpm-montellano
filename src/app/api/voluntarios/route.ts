import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { nombre, email, telefono, area, disponibilidad, mensaje } = await req.json();

    if (!nombre?.trim()) {
      return NextResponse.json(
        { error: "El nombre es obligatorio" },
        { status: 400 }
      );
    }

    // Log the volunteer registration (can be replaced with email/Supabase later)
    console.log("[VPM Voluntario]", {
      nombre,
      email,
      telefono,
      area,
      disponibilidad,
      mensaje,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "No se pudo procesar la solicitud" },
      { status: 500 }
    );
  }
}
