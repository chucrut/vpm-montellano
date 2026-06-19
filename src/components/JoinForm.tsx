"use client";

import { FormEvent, useState } from "react";

export default function JoinForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const response = await fetch("/api/voluntarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: form.get("name"),
        email: form.get("email"),
        telefono: form.get("phone"),
        area: form.get("interest"),
        disponibilidad: form.get("availability"),
        mensaje: form.get("message"),
      }),
    });

    if (response.ok) {
      setStatus("success");
      formElement.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form className="editorial-form form-on-dark" onSubmit={submit}>
      <div className="field-pair">
        <label>Nombre<input name="name" required autoComplete="name" /></label>
        <label>Email<input name="email" type="email" autoComplete="email" /></label>
      </div>
      <div className="field-pair">
        <label>Teléfono<input name="phone" type="tel" autoComplete="tel" /></label>
        <label>Disponibilidad
          <select name="availability" defaultValue="">
            <option value="">Por concretar</option>
            <option>Entre semana</option>
            <option>Fines de semana</option>
            <option>Flexible</option>
          </select>
        </label>
      </div>
      <label>Cómo te gustaría colaborar
        <select name="interest" defaultValue="">
          <option value="" disabled>Selecciona una opción</option>
          <option>Recibir información</option>
          <option>Ayudar en redes</option>
          <option>Participar en actos</option>
          <option>Aportar desde mi sector</option>
          <option>Formar parte del equipo</option>
        </select>
      </label>
      <label>Cuéntanos algo más<textarea name="message" rows={6} /></label>
      <label className="checkbox-field">
        <input name="privacy" type="checkbox" required />
        <span>He leído y acepto la política de privacidad.</span>
      </label>
      <button className="form-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "ENVIANDO…" : "QUIERO PARTICIPAR"} <span>↗</span>
      </button>
      {status === "success" && <p className="form-status">Gracias. Nos pondremos en contacto contigo.</p>}
      {status === "error" && <p className="form-status error">No se ha podido enviar. Inténtalo de nuevo.</p>}
    </form>
  );
}
