import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vpm-montellano.vercel.app";
  const pages = [
    "",
    "/quienes-somos",
    "/nuestra-propuesta",
    "/nuestro-equipo",
    "/que-esta-pasando",
    "/te-escuchamos",
    "/unete",
  ];

  return pages.map((path, index) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: index === 4 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : .8,
  }));
}
