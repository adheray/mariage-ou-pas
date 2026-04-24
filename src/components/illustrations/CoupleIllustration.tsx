export function CoupleIllustration({ className }: { className?: string }) {
  return (
    <svg
      width="200"
      height="140"
      viewBox="0 0 200 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Ground shadow */}
      <ellipse cx="100" cy="132" rx="55" ry="5" fill="#E11D48" opacity="0.06" />

      {/* === Person 1 (rose) === */}
      {/* Body */}
      <path
        d="M38 115 C38 90 52 80 62 80 C72 80 80 90 80 115 Z"
        fill="#E11D48"
        opacity="0.15"
      />
      <path
        d="M44 115 C44 92 55 84 62 84 C69 84 76 92 76 115 Z"
        fill="#E11D48"
      />
      {/* Neck */}
      <rect x="58" y="72" width="8" height="14" rx="4" fill="#E11D48" opacity="0.9" />
      {/* Head */}
      <circle cx="62" cy="58" r="16" fill="#E11D48" opacity="0.2" />
      <circle cx="62" cy="58" r="13" fill="#E11D48" />
      {/* Hair detail */}
      <path d="M49 52 Q62 44 75 52" stroke="#BE123C" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* === Person 2 (slate) === */}
      {/* Body */}
      <path
        d="M120 115 C120 90 128 80 138 80 C148 80 162 90 162 115 Z"
        fill="#94A3B8"
        opacity="0.2"
      />
      <path
        d="M125 115 C125 93 130 86 138 86 C146 86 155 93 155 115 Z"
        fill="#94A3B8"
      />
      {/* Neck */}
      <rect x="134" y="72" width="8" height="14" rx="4" fill="#94A3B8" opacity="0.9" />
      {/* Head */}
      <circle cx="138" cy="56" r="16" fill="#CBD5E1" opacity="0.35" />
      <circle cx="138" cy="56" r="12" fill="#CBD5E1" />
      {/* Hair detail */}
      <path d="M126 54 Q138 46 150 50" stroke="#94A3B8" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* === Hands / connection === */}
      <path
        d="M76 100 Q100 93 124 100"
        stroke="#E11D48"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      />
      <circle cx="76" cy="100" r="3.5" fill="#E11D48" opacity="0.5" />
      <circle cx="124" cy="100" r="3.5" fill="#94A3B8" opacity="0.5" />

      {/* === Ring above center === */}
      <g transform="translate(100, 22)">
        {/* Band */}
        <circle cx="0" cy="0" r="12" stroke="#F59E0B" strokeWidth="3" fill="none" />
        <path d="M-12 0 Q-12 6 0 8 Q12 6 12 0" fill="#F59E0B" opacity="0.15" />
        {/* Diamond shape */}
        <polygon points="0,-18 7,-9 0,-5 -7,-9" fill="#F59E0B" />
        <polygon points="0,-18 7,-9 0,-13 -7,-9" fill="#FCD34D" />
        <polygon points="-7,-9 0,-5 7,-9 0,-5" fill="#F59E0B" opacity="0.6" />
        {/* Diamond shine */}
        <line x1="-3" y1="-15" x2="-1" y2="-13" stroke="white" strokeWidth="1" opacity="0.8" />
      </g>

      {/* === Sparkles === */}
      {/* Top left */}
      <g transform="translate(22, 20)" opacity="0.7">
        <line x1="0" y1="-5" x2="0" y2="5" stroke="#E11D48" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="-5" y1="0" x2="5" y2="0" stroke="#E11D48" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      {/* Top right */}
      <g transform="translate(178, 16)" opacity="0.7">
        <line x1="0" y1="-4" x2="0" y2="4" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="-4" y1="0" x2="4" y2="0" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      {/* Small dots */}
      <circle cx="155" cy="28" r="2" fill="#E11D48" opacity="0.4" />
      <circle cx="42" cy="30" r="2" fill="#F59E0B" opacity="0.4" />
      <circle cx="170" cy="45" r="1.5" fill="#E11D48" opacity="0.3" />
      <circle cx="28" cy="45" r="1.5" fill="#E11D48" opacity="0.3" />
    </svg>
  );
}
