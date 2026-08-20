import { SocialLink } from "@/lib/data/types";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  LinkIcon,
  MailIcon,
  XIcon,
} from "./icons";

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  instagram: InstagramIcon,
  mail: MailIcon,
  link: LinkIcon,
};

export function SocialLinks({
  links,
  className = "",
}: {
  links: SocialLink[];
  className?: string;
}) {
  return (
    <ul className={`flex items-center gap-1 ${className}`}>
      {links.map((social) => {
        const Icon = iconMap[social.icon] ?? LinkIcon;
        const isMail = social.icon === "mail";
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target={isMail ? undefined : "_blank"}
              rel={isMail ? undefined : "noopener noreferrer"}
              aria-label={social.label}
              title={social.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors duration-150 hover:bg-surface hover:text-accent"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
