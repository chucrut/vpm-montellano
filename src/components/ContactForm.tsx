"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const response = await fetch("/api/propuestas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        message: [
          `Teléfono: ${form.get("phone") || "No indicado"}`,
          `Zona: ${form.get("area") || "No indicada"}`,
          `Tema: ${form.get("topic") || "No indicado"}`,
          "",
          form.get("message"),
        ].join("\n"),
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
    <form className="editorial-form" onSubmit={submit}>
      <div className="field-pair">
        <label>Nombre<input name="name" required autoComplete="name" /></label>
        <label>Email<input name="email" type="email" autoComplete="email" /></label>
      </div>
      <div className="field-pair">
        <label>Teléfono<input name="phone" type="tel" autoComplete="tel" /></label>
        <label>Zona o barrio<input name="area" /></label>
      </div>
      <label>Tema
        <select name="topic" defaultValue="">
          <option value="" disabled>Selecciona una opción</option>
          <option>Servicios públicos</option>
          <option>Entorno y caminos</option>
          <option>Economía local</option>
          <option>Participación y transparencia</option>
          <option>Otro</option>
        </select>
      </label>
      <label>Tu propuesta o preocupación
        <textarea name="message" rows={7} required />
      </label>
      <label className="checkbox-field">
        <input name="privacy" type="checkbox" required />
        <span>He leído y acepto la política de privacidad.</span>
      </label>
      <button className="form-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "ENVIANDO…" : "ENVIAR MENSAJE"} <span>↗</span>
      </button>
      {status === "success" && <p className="form-status">Gracias. Hemos recibido tu mensaje.</p>}
      {status === "error" && <p className="form-status error">No se ha podido enviar. Inténtalo de nuevo.</p>}
    </form>
  );
}
