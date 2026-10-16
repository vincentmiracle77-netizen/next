import Logo from "./Logo";
import {
  TwitterIcon,
  LinkedInIcon,
  GitHubIcon,
  InstagramIcon,
} from "./Icons";

const columns = [
  { heading: "Quick Links", links: ["Home", "Features", "Pricing", "About"] },
  {
    heading: "Support",
    links: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
  },
];

const socials = [
  { name: "Twitter", icon: TwitterIcon },
  { name: "LinkedIn", icon: LinkedInIcon },
  { name: "GitHub", icon: GitHubIcon },
  { name: "Instagram", icon: InstagramIcon },
];

export default function Footer() {
  return (
    <footer id="about" className="bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
        <div>
          <Logo dark />
          <p className="mt-3 text-xs text-slate-400">Organize. Track. Achieve.</p>
        </div>

        {columns.map((column) => (
          <div key={column.heading}>
            <h4 className="text-sm font-semibold text-white">{column.heading}</h4>
            <ul className="mt-4 space-y-2 text-xs">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-sm font-semibold text-white">Follow Us</h4>
          <div className="mt-4 flex gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-700 hover:bg-indigo-600"
                >
                  <Icon className="h-3.5 w-3.5 text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <p className="mx-auto max-w-6xl px-6 pb-8 text-xs text-slate-400">
        © 2025 TaskFlow. All rights reserved.
      </p>
    </footer>
  );
}
