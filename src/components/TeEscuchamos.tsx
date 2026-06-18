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
      const firstError = (["name", "email", "message"] as Field[]).find(f => validationErrors[f]);
      if (firstError) {
        document.getElementById(firstError)?.focus();
      }
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
      setStatus("error");
    }
  }

  const inputClass = (field: Field) =>
    `w-full border bg-white px-5 py-4 text-text placeholder-muted focus:outline-none focus:ring-1 transition-all duration-300 ${
      touched[field] && errors[field]
        ? "border-red-400 focus:ring-red-400"
        : "border-offwhite-dark focus:border-primary focus:ring-primary/30"
    }`;

  return (
    <section id="te-escuchamos" className="py-20 sm:py-28 lg:py-40 px-5 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center reveal mb-12 sm:mb-16">
          <span className="text-label text-gold mb-5 sm:mb-7 block">
            Te Escuchamos
          </span>
          <h2 className="font-heading font-medium text-text leading-[1.12]">
            Tu voz cuenta
          </h2>
          <p className="mt-4 text-text-light max-w-lg mx-auto leading-relaxed">
            Cuéntanos tus ideas, sugerencias o inquietudes. Queremos conocerte.
          </p>
        </div>

        {status === "sent" ? (
          <div className="text-center py-14 reveal" role="status">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/10 mb-6">
              <svg className="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-semibold text-text mb-3">¡Mensaje recibido!</h3>
            <p className="text-text-light">Gracias por escribirnos. Te responderemos pronto.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-8 text-gold text-sm hover:underline focus-visible:outline-gold"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : status === "error" ? (
          <div className="text-center py-14 reveal" role="alert">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 mb-6">
              <svg className="h-10 w-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-semibold text-text mb-3">Algo salió mal</h3>
            <p className="text-text-light mb-6">No pudimos enviar tu mensaje. Inténtalo de nuevo.</p>
            <button
              onClick={() => setStatus("idle")}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-primary font-semibold hover:bg-gold-light transition-colors duration-300 text-sm min-h-[48px]"
            >
              Intentar de nuevo
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 reveal" noValidate>
            <div>
              <label htmlFor="name" className="block text-xs tracking-[0.15em] uppercase text-muted font-semibold mb-2">
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
                <p id="name-error" className="mt-2 text-red-500 text-xs" role="alert">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs tracking-[0.15em] uppercase text-muted font-semibold mb-2">
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
                <p id="email-error" className="mt-2 text-red-500 text-xs" role="alert">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-xs tracking-[0.15em] uppercase text-muted font-semibold mb-2">
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
                <p id="message-error" className="mt-2 text-red-500 text-xs" role="alert">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-primary text-white font-semibold px-6 py-4 min-h-[52px] hover:bg-primary-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm tracking-wider flex items-center justify-center gap-2"
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
