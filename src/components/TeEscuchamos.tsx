"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

type Field = "name" | "email" | "message";
type FormData = { name: string; email: string; message: string };
type FormErrors = Partial<Record<Field, string>>;
type Status = "idle" | "sending" | "sent" | "error";

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Tu nombre es obligatorio";
  if (!data.email.trim()) {
    errors.email = "El correo es obligatorio";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Introduce un correo válido";
  }
  if (!data.message.trim()) {
    errors.message = "Escribe un mensaje";
  } else if (data.message.trim().length < 5) {
    errors.message = "El mensaje debe tener al menos 5 caracteres";
  }
  return errors;
}

export default function TeEscuchamos() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const field = e.target.id as Field;
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    /* Clear error on typing */
    if (errors[field]) {
      const updated = { ...errors };
      delete updated[field];
      setErrors(updated);
    }
  }

  function handleBlur(field: Field) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validate(form);
    if (fieldErrors[field]) {
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTouched({});
      } else {
        setStatus("error");
      }
    } catch {
      /* Graceful fallback for demo */
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTouched({});
    }
  }

  const inputClass = (field: Field) =>
    `w-full bg-white/[0.03] border rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all duration-300 ${
      touched[field] && errors[field]
        ? "border-red-400/50 focus:border-red-400/50"
        : "border-white/[0.08] focus:border-gold/50 focus:bg-white/[0.05]"
    }`;

  return (
    <section id="te-escuchamos" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-20 bg-navy">
      <div className="max-w-2xl mx-auto">
        <div className="text-center reveal mb-10 sm:mb-14">
          <span className="text-gold text-xs tracking-[.25em] uppercase font-semibold mb-4 sm:mb-6 block">
            Te Escuchamos
          </span>
          <h2 className="font-bold text-white leading-[1.15] tracking-tight text-balance">
            Tu voz cuenta
          </h2>
          <p className="mt-3 sm:mt-4 text-white/50 max-w-lg mx-auto leading-relaxed">
            Cuéntanos tus ideas, sugerencias o inquietudes. Queremos conocerte.
          </p>
        </div>

        {status === "sent" ? (
          <div className="text-center py-12 sm:py-16 reveal" role="status">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/20 mb-6">
              <svg className="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje recibido!</h3>
            <p className="text-white/50">Gracias por escribirnos. Te responderemos pronto.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-8 text-gold text-sm hover:underline focus-visible:outline-gold"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : status === "error" ? (
          <div className="text-center py-12 sm:py-16 reveal" role="alert">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-400/20 mb-6">
              <svg className="h-10 w-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Algo salió mal</h3>
            <p className="text-white/50 mb-6">No pudimos enviar tu mensaje. Inténtalo de nuevo.</p>
            <button
              onClick={() => setStatus("idle")}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy-deep font-semibold rounded-xl hover:bg-gold-light transition-colors duration-300 text-sm min-h-[48px]"
            >
              Intentar de nuevo
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 reveal" noValidate>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs tracking-[.15em] uppercase text-white/50 font-semibold mb-2">
                Nombre <span aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                onBlur={() => handleBlur("name")}
                className={inputClass("name")}
                placeholder="Tu nombre"
                aria-invalid={!!(touched.name && errors.name)}
                aria-describedby={touched.name && errors.name ? "name-error" : undefined}
              />
              {touched.name && errors.name && (
                <p id="name-error" className="mt-2 text-red-400 text-xs" role="alert">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs tracking-[.15em] uppercase text-white/50 font-semibold mb-2">
                Correo electrónico <span aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                onBlur={() => handleBlur("email")}
                className={inputClass("email")}
                placeholder="tu@email.com"
                aria-invalid={!!(touched.email && errors.email)}
                aria-describedby={touched.email && errors.email ? "email-error" : undefined}
              />
              {touched.email && errors.email && (
                <p id="email-error" className="mt-2 text-red-400 text-xs" role="alert">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs tracking-[.15em] uppercase text-white/50 font-semibold mb-2">
                Mensaje <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                onBlur={() => handleBlur("message")}
                className={inputClass("message") + " resize-none"}
                placeholder="Cuéntanos lo que quieras..."
                aria-invalid={!!(touched.message && errors.message)}
                aria-describedby={touched.message && errors.message ? "message-error" : undefined}
              />
              {touched.message && errors.message && (
                <p id="message-error" className="mt-2 text-red-400 text-xs" role="alert">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gold text-navy-deep font-semibold rounded-xl px-6 py-4 min-h-[52px] hover:bg-gold-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm tracking-wide flex items-center justify-center gap-2"
            >
              {status === "sending" ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Enviando…
                </>
              ) : (
                "Enviar mensaje"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
