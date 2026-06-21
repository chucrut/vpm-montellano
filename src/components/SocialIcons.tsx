import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { socialLinks, type SocialKind } from "@/data/site";

const icons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  tiktok: FaTiktok,
  youtube: FaYoutube,
  whatsapp: FaWhatsapp,
} satisfies Record<SocialKind, typeof FaFacebookF>;

export default function SocialIcons({
  className = "",
  includePlaceholders = true,
  tabIndex,
}: {
  className?: string;
  includePlaceholders?: boolean;
  tabIndex?: number;
}) {
  return (
    <div className={`social-icons ${className}`}>
      {socialLinks
        .filter((item) => includePlaceholders || !item.placeholder)
        .map((item) => {
          const Icon = icons[item.kind];
          const external = item.href.startsWith("http");

          return (
            <a
              key={item.label}
              href={item.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={`${item.label}${item.placeholder ? " — canal oficial pendiente de confirmar" : ""}`}
              title={item.placeholder ? `${item.label}: canal oficial pendiente` : item.label}
              data-placeholder={item.placeholder || undefined}
              tabIndex={tabIndex}
            >
              <Icon aria-hidden="true" focusable="false" />
            </a>
          );
        })}
    </div>
  );
}
