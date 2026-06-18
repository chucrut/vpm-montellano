import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VPM — Vecinos por Montellano",
  description:
    "Web oficial de Vecinos por Montellano. Conoce nuestro equipo, propuestas y únete al cambio que Montellano necesita.",
  metadataBase: new URL("https://vpm-montellano.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "VPM — Vecinos por Montellano",
    description:
      "Conoce nuestro equipo, nuestras propuestas y únete al cambio que Montellano necesita.",
    url: "/",
    siteName: "VPM Montellano",
    locale: "es_ES",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans">{children}</body>
    </html>
  );
}
