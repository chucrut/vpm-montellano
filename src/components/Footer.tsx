import Image from "next/image";

/* Same minimal SVG icons used in Navbar */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes Somos", href: "#quienes-somos" },
  { label: "Nuestro Equipo", href: "#nuestro-equipo" },
  { label: "Nuestra Propuesta", href: "#nuestra-propuesta" },
  { label: "Qué Está Pasando", href: "#que-esta-pasando" },
  { label: "Te Escuchamos", href: "#te-escuchamos" },
  { label: "Únete", href: "#unete" },
];

const socials = [
  { href: "https://facebook.com/vpmmontellano", label: "Facebook", Icon: FacebookIcon },
  { href: "https://instagram.com/vpmmontellano", label: "Instagram", Icon: InstagramIcon },
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-[96rem] mx-auto px-6 lg:px-20 py-20 lg:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/assets/logo.png" alt="VPM" width={36} height={36} className="rounded-lg" />
              <span className="text-lg font-semibold tracking-wide">VPM Montellano</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Vecinos por Montellano. Un proyecto independiente, transparente y participativo para construir el pueblo que merecemos.
            </p>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3">
            <h4 className="text-xs tracking-[.2em] uppercase text-white/30 font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2.5">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-white/50 hover:text-gold text-sm transition-colors duration-300">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-[.2em] uppercase text-white/30 font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-1">
              {socials.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="p-2.5 text-white/40 hover:text-gold transition-colors duration-300">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs tracking-[.2em] uppercase text-white/30 font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2.5 text-white/40 text-sm">
              <li>vpm@montellano.es</li>
              <li>+34 600 000 000</li>
              <li>Montellano, Sevilla</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] text-center text-white/20 text-xs tracking-wide">
          &copy; {new Date().getFullYear()} Vecinos por Montellano
        </div>
      </div>
    </footer>
  );
}
