"use client";

import { useState, FormEvent } from "react";
import va from "@vercel/analytics";

export default function Unete() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [area, setArea] = useState("");
  const [disponibilidad, setDisponibilidad] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/voluntarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, telefono, area, disponibilidad, mensaje }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || `Error del servidor (${res.status})`);
      }

      va.track("join_click", { type: "voluntario_form" });
      setStatus("success");
      setNombre("");
      setEmail("");
      setTelefono("");
      setArea("");
      setDisponibilidad("");
      setMensaje("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "No se pudo enviar. Intenta por WhatsApp.");
    }
  };

  return (
    <section id="unete" className="py-20 sm:py-28 lg:py-40 px-5 sm:px-8 lg:px-12 bg-primary dark:bg-[#0f2418] text-white">
      <div className="max-w-[90rem] mx-auto">
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="text-label text-gold mb-5 sm:mb-7 block">
            Únete
          </span>
          <h2 className="font-heading font-medium text-white leading-[1.12] mb-5 sm:mb-7">
            Forma parte del cambio
          </h2>
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
            No hace falta ser candidato para ayudar. Si compartes nuestra ilusión, hay muchas formas de sumarte.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mt-12 sm:mt-16 max-w-2xl mx-auto">
            {/* Voluntario card — WhatsApp quick */}
            <div className="bg-white/[0.06] p-7 sm:p-9 text-left hover:bg-white/[0.1] transition-all duration-300 group reveal">
              <h3 className="text-xl font-heading font-semibold text-white mb-4">Hazte voluntario</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-7">
                Ayuda en eventos, reparte información, participa en las asambleas.
              </p>
              <a
                href="https://wa.me/34600000000?text=Hola%2C%20quiero%20ser%20voluntario%20de%20Vecinos%20por%20Montellano.%20%C2%BFC%C3%B3mo%20puedo%20ayudar%3F"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => va.track("whatsapp_click", { context: "volunteer_quick" })}
                className="inline-flex items-center gap-2 bg-gold text-primary px-7 py-3.5 text-sm font-semibold hover:bg-gold-light transition-colors duration-300 min-h-[48px]"
              >
                Quiero ser voluntario ↗
              </a>
            </div>

            {/* Colabora card — WhatsApp quick */}
            <div className="bg-white/[0.06] p-7 sm:p-9 text-left hover:bg-white/[0.1] transition-all duration-300 group reveal">
              <h3 className="text-xl font-heading font-semibold text-white mb-4">Colabora con nosotros</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-7">
                Comparte nuestras redes, habla con tus vecinos. Cada gesto suma.
              </p>
              <a
                href="https://wa.me/34600000000?text=Hola%2C%20quiero%20colaborar%20con%20Vecinos%20por%20Montellano.%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => va.track("whatsapp_click", { context: "collaborate_quick" })}
                className="inline-flex items-center gap-2 border-2 border-gold text-gold px-7 py-3.5 text-sm font-semibold hover:bg-gold hover:text-primary transition-all duration-300 min-h-[48px]"
              >
                Escríbenos ↗
              </a>
            </div>
          </div>

          {/* Expanded volunteer form */}
          {status === "success" ? (
            <div className="mt-10 sm:mt-14 p-8 bg-white/[0.08] border border-white/[0.1] reveal">
              <svg className="h-12 w-12 text-gold mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-heading font-semibold text-white mb-2">¡Gracias por tu interés!</h3>
              <p className="text-white/60 text-sm">Nos pondremos en contacto contigo pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 sm:mt-14 max-w-xl mx-auto text-left space-y-5 reveal" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="vol-nombre" className="block text-sm font-medium text-white/70 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    id="vol-nombre"
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="María García"
                    className="w-full border border-white/[0.12] bg-white/[0.04] text-white placeholder:text-white/30 px-4 py-3.5 focus:outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="vol-email" className="block text-sm font-medium text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    id="vol-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="maria@example.com"
                    className="w-full border border-white/[0.12] bg-white/[0.04] text-white placeholder:text-white/30 px-4 py-3.5 focus:outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="vol-tel" className="block text-sm font-medium text-white/70 mb-2">
                  Teléfono
                </label>
                <input
                  id="vol-tel"
                  type="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="6XX XXX XXX"
                  className="w-full border border-white/[0.12] bg-white/[0.04] text-white placeholder:text-white/30 px-4 py-3.5 focus:outline-none focus:border-gold transition-colors duration-300"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="vol-area" className="block text-sm font-medium text-white/70 mb-2">
                    Área de interés
                  </label>
                  <select
                    id="vol-area"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full border border-white/[0.12] bg-white/[0.04] text-white px-4 py-3.5 focus:outline-none focus:border-gold transition-colors duration-300 appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                  >
                    <option value="" className="text-text">Selecciona un área</option>
                    <option value="Eventos" className="text-text">Eventos</option>
                    <option value="Puerta a puerta" className="text-text">Puerta a puerta</option>
                    <option value="Redes sociales" className="text-text">Redes sociales</option>
                    <option value="Logística" className="text-text">Logística</option>
                    <option value="Otro" className="text-text">Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="vol-disp" className="block text-sm font-medium text-white/70 mb-2">
                    Disponibilidad
                  </label>
                  <select
                    id="vol-disp"
                    value={disponibilidad}
                    onChange={(e) => setDisponibilidad(e.target.value)}
                    className="w-full border border-white/[0.12] bg-white/[0.04] text-white px-4 py-3.5 focus:outline-none focus:border-gold transition-colors duration-300 appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                  >
                    <option value="" className="text-text">Selecciona disponibilidad</option>
                    <option value="Fines de semana" className="text-text">Fines de semana</option>
                    <option value="Entre semana" className="text-text">Entre semana</option>
                    <option value="Flexible" className="text-text">Flexible</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="vol-mensaje" className="block text-sm font-medium text-white/70 mb-2">
                  Mensaje (opcional)
                </label>
                <textarea
                  id="vol-mensaje"
                  rows={3}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Cuéntanos cómo te gustaría ayudar..."
                  className="w-full border border-white/[0.12] bg-white/[0.04] text-white placeholder:text-white/30 px-4 py-3.5 focus:outline-none focus:border-gold transition-colors duration-300 resize-y"
                />
              </div>

              {status === "error" && (
                <div className="bg-red-900/30 border border-red-700/50 text-red-300 px-4 py-3 text-sm">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending" || !nombre.trim()}
                className="inline-flex items-center gap-2 bg-gold text-primary px-8 py-4 text-sm font-semibold hover:bg-gold-light transition-colors duration-300 min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Enviando..." : "Enviar solicitud"}
              </button>
            </form>
          )}

          {/* WhatsApp fallback */}
          <div className="mt-8 reveal">
            <p className="text-sm text-white/40 mb-3">¿Prefieres contactar directamente?</p>
            <a
              href="https://wa.me/34600000000?text=Hola%2C%20quiero%20ser%20voluntario%20de%20Vecinos%20por%20Montellano.%20%C2%BFC%C3%B3mo%20puedo%20ayudar%3F"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => va.track("whatsapp_click", { context: "volunteer_fallback" })}
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 text-sm font-semibold hover:bg-[#20bd5a] transition-colors duration-300 min-h-[48px]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              Enviar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
