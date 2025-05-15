import Link from "next/link";
import {
  DribbleIcon,
  FacebookIcon,
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from "./icons";

const ACCOUNTS = [
  {
    platform: "Facebook",
    url: "https://www.facebook.com/anderson.almeydatorres/",
    Icon: FacebookIcon,
  },
  {
    platform: "X",
    url: "#",
    Icon: XIcon,
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/anderson-almeyda-torres/",
    Icon: LinkedInIcon,
  },
  {
    platform: "GitHub",
    url: "https://github.com/COMANDO225",
    Icon: GitHubIcon,
  },
];

export function SocialAccounts() {
  return (
    <div className="mt-4.5">
      <h4 className="mb-3.5 font-medium text-dark dark:text-white">
        Follow me on
      </h4>
      <div className="flex items-center justify-center gap-3.5">
        {ACCOUNTS.map(({ Icon, ...item }) => (
          <Link
            key={item.platform}
            href={item.url}
            className="hover:text-primary"
          >
            <span className="sr-only">View {item.platform} Account</span>

            <Icon />
          </Link>
        ))}
      </div>
    </div>
  );
}
