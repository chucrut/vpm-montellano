import { socialLinks, type SocialKind } from "@/data/site";

type IconProps = { kind: SocialKind };

function SocialIcon({ kind }: IconProps) {
  if (kind === "facebook") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.7 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.7 1.8-1.7h1.9V2.5c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8v2.3H6.8V13h3.1v9h3.8Z"/></svg>;
  }
  if (kind === "instagram") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>;
  }
  if (kind === "youtube") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 8.1a3 3 0 0 0-2.1-2.1C17 5.5 12 5.5 12 5.5S7 5.5 5.1 6A3 3 0 0 0 3 8.1 31 31 0 0 0 2.5 12 31 31 0 0 0 3 15.9 3 3 0 0 0 5.1 18c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-3.9 31 31 0 0 0-.5-3.9Z"/><path d="m10 15.2 5.2-3.2L10 8.8v6.4Z" className="icon-cut"/></svg>;
  }
  if (kind === "tiktok") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.2 3c.3 2 1.4 3.2 3.8 3.4v3.1a8 8 0 0 1-3.8-1.1v6.2a6 6 0 1 1-5.1-5.9v3.2a2.8 2.8 0 1 0 1.9 2.7V3h3.2Z"/></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 1.9 17.7L.3 23.5l5.9-1.6A11.8 11.8 0 0 0 20.5 3.5Zm-8.4 18.2a9.7 9.7 0 0 1-4.9-1.3l-.4-.2-3.5.9.9-3.4-.2-.4a9.7 9.7 0 1 1 8.1 4.4Zm5.3-7.2c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2l-.9 1.1c-.2.2-.3.2-.6.1a8 8 0 0 1-3.9-3.4c-.3-.5.3-.5.9-1.7.1-.2 0-.4 0-.6L9.3 7c-.2-.6-.5-.5-.7-.5H8c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.3 3.4 1.5 3.6c.2.2 2.5 3.8 6 5.3 2.2.9 3.1 1 4.2.8.7-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4l-1.7-.8Z"/></svg>;
}

export default function SocialIcons({
  className = "",
  includePlaceholders = true,
}: {
  className?: string;
  includePlaceholders?: boolean;
}) {
  return (
    <div className={`social-icons ${className}`}>
      {socialLinks
        .filter((item) => includePlaceholders || !item.placeholder)
        .map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.placeholder ? undefined : "_blank"}
            rel={item.placeholder ? undefined : "noreferrer"}
            aria-label={`${item.label}${item.placeholder ? " — enlace pendiente de confirmar" : ""}`}
            title={item.placeholder ? `${item.label}: URL oficial pendiente` : item.label}
            data-placeholder={item.placeholder || undefined}
          >
            <SocialIcon kind={item.kind} />
          </a>
        ))}
    </div>
  );
}
