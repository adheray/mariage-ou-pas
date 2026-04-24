export function ResultIllustration({
  type,
  className,
}: {
  type: 'mariage' | 'pacs' | 'neutre';
  className?: string;
}) {
  return (
    <svg
      width="120"
      height="100"
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {type === 'mariage' && (
        <>
          {/* Ring large */}
          <circle cx="60" cy="50" r="28" stroke="#E11D48" strokeWidth="4" fill="none" opacity="0.15" />
          <circle cx="60" cy="50" r="20" stroke="#E11D48" strokeWidth="3.5" fill="none" />
          {/* Diamond */}
          <polygon points="60,18 72,32 60,38 48,32" fill="#E11D48" />
          <polygon points="60,18 72,32 60,26 48,32" fill="#BE123C" opacity="0.7" />
          <polygon points="48,32 60,38 72,32 60,38" fill="#E11D48" opacity="0.5" />
          {/* Diamond shine */}
          <line x1="54" y1="22" x2="57" y2="25" stroke="white" strokeWidth="1.5" opacity="0.9" strokeLinecap="round" />
          {/* Sparkles */}
          <g opacity="0.8">
            <line x1="16" y1="16" x2="16" y2="24" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="20" x2="20" y2="20" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
          </g>
          <g opacity="0.8">
            <line x1="104" y1="12" x2="104" y2="20" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" />
            <line x1="100" y1="16" x2="108" y2="16" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" />
          </g>
          <circle cx="98" cy="36" r="3" fill="#F59E0B" opacity="0.6" />
          <circle cx="22" cy="38" r="2.5" fill="#E11D48" opacity="0.5" />
          <circle cx="100" cy="66" r="2" fill="#F59E0B" opacity="0.5" />
          <circle cx="20" cy="64" r="2" fill="#E11D48" opacity="0.4" />
        </>
      )}

      {type === 'pacs' && (
        <>
          {/* Document / scroll */}
          <rect x="32" y="18" width="56" height="68" rx="6" fill="#E11D48" opacity="0.1" stroke="#E11D48" strokeWidth="2" />
          <rect x="38" y="18" width="50" height="62" rx="5" fill="white" stroke="#E2E8F0" strokeWidth="1" />
          {/* Lines on document */}
          <line x1="46" y1="38" x2="82" y2="38" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <line x1="46" y1="48" x2="82" y2="48" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <line x1="46" y1="58" x2="72" y2="58" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          {/* Checkmark */}
          <circle cx="60" cy="76" r="10" fill="#E11D48" opacity="0.12" />
          <polyline points="54,76 58,80 67,71" stroke="#E11D48" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {/* Sparkles */}
          <circle cx="26" cy="30" r="3" fill="#E11D48" opacity="0.4" />
          <circle cx="96" cy="28" r="2.5" fill="#F59E0B" opacity="0.5" />
          <g opacity="0.7">
            <line x1="98" y1="54" x2="98" y2="62" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" />
            <line x1="94" y1="58" x2="102" y2="58" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" />
          </g>
        </>
      )}

      {type === 'neutre' && (
        <>
          {/* Two overlapping circles — equal */}
          <circle cx="44" cy="52" r="26" fill="#E11D48" opacity="0.12" stroke="#E11D48" strokeWidth="2" />
          <circle cx="76" cy="52" r="26" fill="#94A3B8" opacity="0.12" stroke="#94A3B8" strokeWidth="2" />
          {/* Equal sign in center */}
          <line x1="54" y1="48" x2="66" y2="48" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="54" y1="56" x2="66" y2="56" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
          {/* Dots */}
          <circle cx="18" cy="36" r="2.5" fill="#E11D48" opacity="0.4" />
          <circle cx="102" cy="32" r="2.5" fill="#94A3B8" opacity="0.4" />
          <circle cx="20" cy="68" r="2" fill="#94A3B8" opacity="0.3" />
          <circle cx="100" cy="70" r="2" fill="#E11D48" opacity="0.3" />
        </>
      )}
    </svg>
  );
}
