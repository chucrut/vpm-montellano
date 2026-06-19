export const routes = [
  { label: "INICIO", href: "/" },
  { label: "QUIÉNES SOMOS", href: "/quienes-somos" },
  { label: "NUESTRA PROPUESTA", href: "/nuestra-propuesta" },
  { label: "NUESTRO EQUIPO", href: "/nuestro-equipo" },
  { label: "QUÉ ESTÁ PASANDO", href: "/que-esta-pasando" },
  { label: "TE ESCUCHAMOS", href: "/te-escuchamos" },
  { label: "ÚNETE", href: "/unete" },
] as const;

export type SocialKind = "facebook" | "instagram" | "youtube" | "tiktok" | "whatsapp";

export type SocialLink = {
  label: string;
  href: string;
  kind: SocialKind;
  placeholder?: boolean;
};

export const socialLinks: readonly SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/vecinospormontellano/",
    kind: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/vecinospormontellano/",
    kind: "instagram",
  },
  {
    label: "YouTube",
    href: "/que-esta-pasando#canales",
    kind: "youtube",
    placeholder: true,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@vecinos.por.monte",
    kind: "tiktok",
  },
  {
    label: "WhatsApp",
    href: "/te-escuchamos#contenido",
    kind: "whatsapp",
    placeholder: true,
  },
] as const;

export const proposalAreas = [
  {
    category: "Bienestar",
    title: "Un pueblo que cuida",
    description:
      "Servicios cercanos, atención a mayores y apoyo a quienes más lo necesitan.",
    image: "/assets/news/colonias-felinas.jpg",
  },
  {
    category: "Economía local",
    title: "Actividad y oportunidades",
    description:
      "Comercio de proximidad, emprendimiento y desarrollo empresarial desde Montellano.",
    image: "/assets/spot_2.png",
  },
  {
    category: "Entorno",
    title: "Caminos y paisaje",
    description:
      "Cuidado del medio natural, mejora de caminos rurales y respeto por nuestro territorio.",
    image: "/assets/news/caminos-rurales.jpg",
  },
  {
    category: "Transparencia",
    title: "Instituciones abiertas",
    description:
      "Información accesible, fiscalización y rendición de cuentas a los vecinos.",
    image: "/assets/news/pleno-municipal.jpg",
  },
  {
    category: "Juventud y cultura",
    title: "Razones para quedarse",
    description:
      "Más espacios para aprender, crear, participar y construir un futuro en el pueblo.",
    image: "/assets/spot_3.png",
  },
  {
    category: "Participación",
    title: "Decidir escuchando",
    description:
      "Una política local que incorpora experiencia, propuestas y preocupaciones vecinales.",
    image: "/assets/spot_1.png",
  },
] as const;

export const team = [
  {
    name: "José Ignacio Ceballos Vera",
    role: "Portavoz del grupo municipal",
    description: "Concejal vinculado a Comercio, Innovación y Desarrollo Empresarial.",
    image: "/assets/team/jose-ignacio-ceballos.jpg",
  },
  {
    name: "José Antonio Martínez Illanes",
    role: "Concejal de Medio Ambiente",
    description:
      "Vinculado a iniciativas sobre el entorno natural, los caminos rurales y la Sierra de San Pablo.",
    image: "/assets/team/jose-antonio-martinez.jpg",
  },
] as const;

export type Update = {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
  video?: boolean;
};

export const updates: readonly Update[] = [
  {
    category: "Caminos rurales",
    title: "Financiación para actuaciones en caminos de Montellano",
    excerpt:
      "VPM informó de una inversión de 120.634,72 € para actuaciones en el camino hacia el Brosque, la Vereda de la Maestranza y el camino Cantera–Santa Isabel.",
    image: "/assets/news/caminos-rurales.jpg",
    href: "https://www.facebook.com/vecinospormontellano/posts/930249613327225/",
  },
  {
    category: "Pleno municipal",
    title: "Convenio y registro municipal de colonias felinas",
    excerpt:
      "Una actualización sobre la aprobación en Pleno de medidas para la gestión responsable de colonias felinas.",
    image: "/assets/news/colonias-felinas.jpg",
    href: "https://www.facebook.com/vecinospormontellano/posts/723591780659677/",
  },
  {
    category: "Transparencia",
    title: "Fiscalización del gasto municipal",
    excerpt:
      "Intervención pública sobre facturas, contratos y procedimientos reflejados en informes municipales.",
    image: "/assets/news/pleno-municipal.jpg",
    href: "https://www.facebook.com/vecinospormontellano/videos/4329589333950842/",
    video: true,
  },
  {
    category: "Campaña",
    title: "Proyecto 2037",
    excerpt:
      "Una invitación a pensar a largo plazo el Montellano que queremos dejar a las próximas generaciones.",
    image: "/assets/spot_2.png",
    href: "https://www.facebook.com/vecinospormontellano/",
  },
  {
    category: "Campaña",
    title: "Cerca de nuestra gente",
    excerpt:
      "Una declaración de origen: escuchar la calle y trabajar desde los asuntos cotidianos de Montellano.",
    image: "/assets/spot_1.png",
    href: "https://www.facebook.com/vecinospormontellano/",
  },
  {
    category: "Campaña",
    title: "El cambio nace de sus vecinos",
    excerpt:
      "Una invitación a convertir la participación y las ideas compartidas en trabajo por el pueblo.",
    image: "/assets/spot_3.png",
    href: "https://www.instagram.com/vecinospormontellano/",
  },
  {
    category: "Campaña",
    title: "Transparencia",
    excerpt:
      "Información accesible, decisiones explicadas y rendición de cuentas como base de la confianza.",
    image: "/assets/spot_4.png",
    href: "https://www.facebook.com/vecinospormontellano/",
  },
  {
    category: "Entorno rural",
    title: "Montellano en Tierra y Mar",
    excerpt:
      "Publicación sobre la participación de José Antonio Martínez en una grabación del programa Tierra y Mar.",
    image: "/assets/team/jose-antonio-martinez.jpg",
    href: "https://www.facebook.com/vecinospormontellano/posts/679907021694820/",
  },
] as const;
