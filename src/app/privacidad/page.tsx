import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = { title: "Privacidad", robots: { index: false, follow: true } };

export default function PrivacidadPage() {
  return (
    <SiteShell>
      <article className="legal-page">
        <h1>Privacidad</h1>
        <p>
          Los formularios solicitan únicamente la información necesaria para responder
          a propuestas o solicitudes de participación. La identidad del responsable,
          correo de ejercicio de derechos y plazos definitivos de conservación están
          pendientes de confirmación por VPM.
        </p>
        <h2>Finalidad</h2>
        <p>
          Atender mensajes vecinales y gestionar solicitudes voluntarias de colaboración.
          Los datos no deben utilizarse para finalidades distintas sin una base legal válida.
        </p>
        <h2>Derechos</h2>
        <p>
          Antes de activar los formularios en producción, VPM debe indicar un canal
          verificable para acceso, rectificación, supresión, oposición y demás derechos aplicables.
        </p>
      </article>
    </SiteShell>
  );
}
