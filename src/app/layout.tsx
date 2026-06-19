import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  title: {
    default: "Vecinos por Montellano",
    template: "%s — Vecinos por Montellano",
  },
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

/*
 * Vercel Analytics Custom Events:
 *
 * proposal_submit  — fired when a user submits a proposal via form
 * whatsapp_click   — fired when WhatsApp CTA button is clicked
 * join_click       — fired when volunteer/collaborate join button is clicked
 * social_outbound  — fired when user clicks any social media link (Facebook, Instagram, TikTok)
 *
 * Usage: import va from "@vercel/analytics"; va.track("event_name", { property: "value" });
 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* Theme init — inline to prevent flash on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('vpm-theme');
                  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        {/* JSON-LD Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vecinos por Montellano",
              url: "https://vpm-montellano.vercel.app",
              logo: "https://vpm-montellano.vercel.app/assets/logo.png",
              sameAs: [
                "https://www.facebook.com/vecinospormontellano/",
                "https://www.instagram.com/vecinospormontellano/",
                "https://www.tiktok.com/@vecinos.por.monte",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Montellano",
                addressRegion: "Sevilla",
                addressCountry: "ES",
              },
            }),
          }}
        />
      </head>
      <body>
        {process.env.VERCEL ? <Analytics /> : null}
        <ScrollReveal />
        <a href="#main-content" className="skip-link">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
