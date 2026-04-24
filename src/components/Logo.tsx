export function LogoMark({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Mariage ou Pas"
    >
      <rect width="32" height="32" rx="8" fill="#E11D48" />
      {/* Ring */}
      <circle cx="16" cy="21" r="7" stroke="white" strokeWidth="2.5" fill="none" />
      {/* Diamond */}
      <polygon points="16,6 21,13 16,15.5 11,13" fill="white" />
      <polygon points="16,6 21,13 16,10.5" fill="rgba(255,255,255,0.55)" />
      {/* Shine */}
      <line x1="12.5" y1="8" x2="14" y2="9.5" stroke="rgba(255,255,255,0.75)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function LogoFull({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <LogoMark size={28} />
      <span className="font-semibold text-slate-900 tracking-tight">
        Mariage<span className="text-[#E11D48]"> ou Pas ?</span>
      </span>
    </div>
  );
}
