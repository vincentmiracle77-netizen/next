// All the small icons live in this one file so other files stay clean.
// Each icon is just an <svg>. We pass "className" so we can size/color it with Tailwind.

type IconProps = {
  className?: string;
};

// Shared settings for the "outline" style icons
const outline = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function LockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

export function EyeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function EyeOffIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <path d="M17.9 17.9A10.4 10.4 0 0 1 12 19c-6.5 0-10-7-10-7a17.7 17.7 0 0 1 4.1-5.1M9.9 5.2A9.6 9.6 0 0 1 12 5c6.5 0 10 7 10 7a17.6 17.6 0 0 1-2.2 3.2" />
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
      <path d="m2 2 20 20" />
    </svg>
  );
}

export function CheckCircleIcon({ className }: IconProps) {
  // A filled circle with a white tick inside
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path
        d="m7 12.5 3.2 3.2L17 9"
        fill="none"
        stroke="white"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BoltIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <path d="M12 3 4 6v6c0 4.5 3.2 8 8 9 4.8-1 8-4.5 8-9V6l-8-3Z" />
      <path d="M12 8v8" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.2a6.5 6.5 0 0 1 3.5 5.8" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M11 18h2" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function GoogleIcon({ className }: IconProps) {
  // The multi-colored Google "G"
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="#4285F4"
        d="M22.5 12.2c0-.8-.1-1.5-.2-2.2H12v4.2h5.9a5 5 0 0 1-2.2 3.3v2.7h3.5c2-1.9 3.3-4.7 3.3-8Z"
      />
      <path
        fill="#34A853"
        d="M12 23c3 0 5.4-1 7.2-2.7l-3.5-2.7c-1 .7-2.2 1-3.7 1-2.8 0-5.2-1.9-6-4.5H2.4v2.800A11 11 0 0 0 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M6 14.100a6.600 6.600 0 0 1 0-4.200V7.100H2.400a11 11 0 0 0 0 9.800L6 14.100Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.400c1.600 0 3 .6 4.200 1.600l3.100-3.100A11 11 0 0 0 2.400 7.100L6 9.900c.8-2.600 3.200-4.500 6-4.500Z"
      />
    </svg>
  );
}

// ----- Social icons (used in the footer) -----

export function TwitterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M22 5.9c-.7.3-1.500.5-2.300.6.800-.5 1.500-1.300 1.800-2.200-.8.500-1.700.8-2.600 1a4.100 4.100 0 0 0-7 3.700A11.600 11.600 0 0 1 3.500 4.700a4.100 4.100 0 0 0 1.300 5.500c-.7 0-1.300-.2-1.900-.5 0 2 1.400 3.700 3.300 4.100-.6.200-1.200.2-1.800.1.500 1.600 2 2.800 3.800 2.800A8.300 8.300 0 0 1 2 18.400 11.600 11.600 0 0 0 8.300 20.200c7.500 0 11.700-6.300 11.700-11.700v-.5c.8-.6 1.500-1.300 2-2.100Z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M4.900 8.800H1.500V20h3.400V8.800ZM3.200 3.500a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM20.500 13.600c0-3.400-1.800-5-4.200-5a3.600 3.600 0 0 0-3.200 1.800V8.800H9.800V20h3.300v-6.200c0-1.600.8-2.600 2.100-2.600s1.900.9 1.900 2.600V20h3.400v-6.400Z" />
    </svg>
  );
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.200 19.500c.5.1.7-.2.7-.5v-1.800c-2.800.6-3.400-1.200-3.400-1.200-.5-1.200-1.100-1.500-1.100-1.500-.9-.6.100-.6.100-.6 1 .1 1.500 1 1.500 1 .9 1.500 2.400 1.100 2.900.8.1-.7.4-1.100.6-1.400-2.200-.3-4.600-1.100-4.600-5 0-1.100.4-2 1-2.700-.1-.3-.4-1.300.1-2.700 0 0 .8-.3 2.700 1a9.400 9.400 0 0 1 5 0c1.900-1.300 2.700-1 2.700-1 .5 1.400.2 2.400.1 2.700.6.700 1 1.600 1 2.700 0 3.900-2.300 4.700-4.600 5 .4.300.7.900.7 1.800V21c0 .3.200.6.700.5A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...outline}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.500" cy="6.500" r="0.500" fill="currentColor" />
    </svg>
  );
}
