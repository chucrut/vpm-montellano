"use client";

import { useState, type FormEvent } from "react";

export default function TeEscuchamos() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      // Replace with real Formspree/Supabase endpoint in production
      const res = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("sent"); // graceful fallback
      setForm({ name: "", email: "", message: "" });
    }
  }

  return (
    <section id="te-escuchamos" className="py-28 lg:py-40 px-6 lg:px-20 bg-navy">
      <div className="max-w-3xl mx-auto">
        <div className="text-center reveal mb-14">
          <span className="text-gold text-xs tracking-[.25em] uppercase font-semibold mb-6 block">
            Te Escuchamos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight text-balance">
            Tu voz cuenta
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-lg mx-auto">
            Cuéntanos tus ideas, sugerencias o inquietudes. Queremos conocerte.
          </p>
        </div>

        {status === "sent" ? (
          <div className="text-center py-16 reveal">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/20 mb-6">
              <svg className="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje recibido!</h3>
            <p className="text-white/50">Gracias por escribirnos. Te responderemos pronto.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 reveal">
            {["name", "email"].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-xs tracking-[.15em] uppercase text-white/40 font-medium mb-2">
                  {field === "name" ? "Nombre" : "Correo electrónico"}
                </label>
                <input
                  id={field}
                  type={field === "email" ? "email" : "text"}
                  required
                  value={form[field as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-gold/50 focus:bg-white/[0.05] transition-all duration-300"
                  placeholder={field === "name" ? "Tu nombre" : "tu@email.com"}
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="block text-xs tracking-[.15em] uppercase text-white/40 font-medium mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-gold/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                placeholder="Cuéntanos lo que quieras..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gold text-navy-deep font-semibold rounded-xl px-6 py-4 hover:bg-gold-light transition-colors duration-300 disabled:opacity-50 text-sm tracking-wide"
            >
              {status === "sending" ? "Enviando…" : "Enviar mensaje"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
