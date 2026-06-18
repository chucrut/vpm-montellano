import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a3a2a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
