import Link from "next/link";

// The TaskFlow logo: two overlapping circles + the name.
// Used on the login page, the header and the footer.
type LogoProps = {
  dark?: boolean; // true = white text (for dark backgrounds like the footer)
};

export default function Logo({ dark = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="relative block h-8 w-9">
        <span className="absolute left-0 top-0 h-7 w-7 rounded-full bg-indigo-600" />
        <span className="absolute left-3 top-1 h-7 w-7 rounded-full bg-violet-400/80" />
      </span>
      <span
        className={`text-xl font-bold ${dark ? "text-white" : "text-slate-900"}`}
      >
        TaskFlow
      </span>
    </Link>
  );
}
