import Image from "next/image";
import Link from "next/link";
import { routes } from "@/data/site";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-statement">
        <p className="eyebrow">VECINOS POR MONTELLANO</p>
        <h2>El futuro del pueblo se construye cerca.</h2>
        <Link className="text-link light" href="/unete">Forma parte del proyecto <span>↗</span></Link>
      </div>

      <div className="footer-grid">
        <Link className="footer-brand" href="/">
          <Image src="/assets/logo-mark-transparent.png" alt="" width={64} height={60} />
          <span>VECINOS<br /><small>POR MONTELLANO</small></span>
        </Link>
        <nav aria-label="Navegación del pie">
          {routes.map((route) => <Link key={route.href} href={route.href}>{route.label}</Link>)}
        </nav>
        <div className="footer-contact">
          <p>Montellano, Sevilla</p>
          <p>Contacto a través de nuestros canales oficiales.</p>
          <SocialIcons />
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Vecinos por Montellano</span>
        <div><Link href="/privacidad">Privacidad</Link><Link href="/aviso-legal">Aviso legal</Link></div>
      </div>
    </footer>
  );
}
