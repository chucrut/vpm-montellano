import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vecinos Por Montellano",
  description:
    "Web oficial de Vecinos por Montellano. Conoce nuestro equipo, propuestas y únete al cambio que Montellano necesita.",
  metadataBase: new URL("https://vpm-montellano.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vecinos Por Montellano",
    description:
      "Conoce nuestro equipo, nuestras propuestas y únete al cambio que Montellano necesita.",
    url: "/",
    siteName: "Vecinos Por Montellano",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/assets/header.png",
        width: 1200,
        height: 630,
        alt: "Vecinos por Montellano",
      },
    ],
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
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <ScrollReveal />
        <a href="#main-content" className="skip-link">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
