"use client";

import { useState } from "react";

const WA_NUMBER = "34600000000"; // placeholder — replace with real number
const WA_MESSAGE = encodeURIComponent("Hola, quiero enviar mi propuesta para Montellano:");

export default function TeEscuchamos() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/propuestas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || `Error del servidor (${res.status})`);
      }

      setStatus("idle");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "No se pudo enviar. Intenta por WhatsApp.");
    }
  };

  return (
    <section id="te-escuchamos" className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-40">
      <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="reveal">
          <span className="text-label mb-5 block text-gold">Te escuchamos</span>
          <h2 className="max-w-2xl text-text">Envíanos tu propuesta</h2>
          <p className="mt-6 text-text-light max-w-md leading-relaxed">
            ¿Tienes una idea para mejorar Montellano? Cuéntanosla. Todas las propuestas serán leídas y tenidas en cuenta.
          </p>

          <div className="mt-8 border-t border-offwhite-dark pt-8">
            <p className="text-sm text-text-light mb-4">
              ¿Prefieres enviarla por WhatsApp?
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 text-sm font-semibold hover:bg-[#20bd5a] transition-colors duration-300 min-h-[48px]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Enviar por WhatsApp
            </a>
          </div>
        </div>

        <div className="reveal lg:pt-4">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label htmlFor="prop-name" className="block text-sm font-medium text-text mb-2">
                Tu nombre
              </label>
              <input
                id="prop-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="María García"
                className="w-full border border-offwhite-dark bg-offwhite px-4 py-3.5 text-text placeholder:text-muted focus:outline-none focus:border-gold transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="prop-email" className="block text-sm font-medium text-text mb-2">
                Tu email (opcional)
              </label>
              <input
                id="prop-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="maria@example.com"
                className="w-full border border-offwhite-dark bg-offwhite px-4 py-3.5 text-text placeholder:text-muted focus:outline-none focus:border-gold transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="prop-message" className="block text-sm font-medium text-text mb-2">
                Tu propuesta
              </label>
              <textarea
                id="prop-message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Cuéntanos tu idea para mejorar Montellano..."
                className="w-full border border-offwhite-dark bg-offwhite px-4 py-3.5 text-text placeholder:text-muted focus:outline-none focus:border-gold transition-colors duration-300 resize-y"
              />
            </div>

            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
                {errorMsg}
                <span className="block mt-1">
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold hover:text-red-800"
                  >
                    Enviar por WhatsApp en su lugar ↗
                  </a>
                </span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending" || !name.trim() || !message.trim()}
              className="inline-flex items-center gap-2 bg-gold text-primary px-8 py-4 text-sm font-semibold hover:bg-gold-light transition-colors duration-300 min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Enviando..." : "Enviar propuesta"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
