import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = { title: "Aviso legal", robots: { index: false, follow: true } };

export default function AvisoLegalPage() {
  return (
    <SiteShell>
      <article className="legal-page">
        <h1>Aviso legal</h1>
        <p>
          Este sitio web ofrece información pública sobre Vecinos por Montellano.
          Los datos identificativos y vías de contacto legales definitivos deben ser
          completados por la organización antes de la publicación institucional.
        </p>
        <h2>Contenido</h2>
        <p>
          La información se ofrece con finalidad informativa. Los enlaces a redes
          sociales conducen a publicaciones y perfiles externos gestionados por sus
          respectivas plataformas.
        </p>
        <h2>Propiedad intelectual</h2>
        <p>
          La identidad y los materiales de VPM pertenecen a sus titulares. No se
          utilizan textos, código, logotipos ni imágenes de la web tomada como referencia visual.
        </p>
      </article>
    </SiteShell>
  );
}
