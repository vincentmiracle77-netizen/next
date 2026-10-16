import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, index) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-sm font-medium hover:text-indigo-600 ${
                  index === 0 ? "text-indigo-600" : "text-slate-700"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">


          <Link
            href="/"
            className="text-sm font-medium text-slate-700 hover:text-indigo-600"
          >
            Log In
          </Link>
          <a
            href="#cta"
            className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}
