interface Props {
  size?: number;
  withWordmark?: boolean;
  dark?: boolean;
}

/**
 * PYEP mark: three ascending leaf/step forms tracing a rising path — echoing the
 * program's own language of youth moving step by step toward opportunity — set
 * inside a rounded emblem so it reads as an institutional seal rather than a logo
 * that could belong to any startup.
 */
export default function Logo({ size = 40, withWordmark = false, dark = false }: Props) {
  return (
    <span className="flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="PYEP emblem"
      >
        <defs>
          <linearGradient id="pyepBg" x1="2" y1="2" x2="42" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#0A9250" />
            <stop offset="1" stopColor="#056B35" />
          </linearGradient>
          <linearGradient id="pyepLeaf" x1="10" y1="32" x2="34" y2="8" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#EAF7EF" />
            <stop offset="1" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>

        <rect x="1" y="1" width="42" height="42" rx="12" fill="url(#pyepBg)" />
        <rect x="1" y="1" width="42" height="42" rx="12" stroke="#ffffff" strokeOpacity="0.14" />

        {/* three ascending step-leaves */}
        <path
          d="M9.5 30.5c0-2.6 2.1-4.7 4.7-4.7h2.1v4.7c0 2.6-2.1 4.7-4.7 4.7H9.5v-4.7Z"
          fill="url(#pyepLeaf)"
          opacity="0.55"
        />
        <path
          d="M17.3 23.2c0-2.6 2.1-4.7 4.7-4.7h2.1v11.9c0 2.6-2.1 4.7-4.7 4.7h-2.1V23.2Z"
          fill="url(#pyepLeaf)"
          opacity="0.78"
        />
        <path
          d="M25.1 13.4c0-2.6 2.1-4.7 4.7-4.7h2.1v21.7c0 2.6-2.1 4.7-4.7 4.7h-2.1V13.4Z"
          fill="url(#pyepLeaf)"
        />

        {/* rising arrow tracing the path upward */}
        <path
          d="M12 25.5 20 18l4.2 3.6L33 12"
          stroke="#F4FBF6"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M27 11.6h6v6" stroke="#F4FBF6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {withWordmark && (
        <span className="leading-tight">
          <span className={`block font-extrabold tracking-tight ${dark ? "text-white" : "text-ink"}`}>
            PYEP
          </span>
          <span className={`block text-[0.62rem] font-semibold tracking-wide ${dark ? "text-white/60" : "text-sub"}`}>
            Punjab Youth Empowerment
          </span>
        </span>
      )}
    </span>
  );
}
