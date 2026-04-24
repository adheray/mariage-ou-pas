import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#E11D48',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
        }}
      >
        {/* Ring */}
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
          {/* Ring band */}
          <circle cx="10" cy="14" r="6.5" stroke="white" stroke-width="2.5" fill="none" />
          {/* Diamond */}
          <polygon points="10,2 14.5,8 10,10.5 5.5,8" fill="white" />
          <polygon points="10,2 14.5,8 10,6" fill="rgba(255,255,255,0.6)" />
          {/* Shine */}
          <line x1="7" y1="4" x2="8.5" y2="5.5" stroke="rgba(255,255,255,0.8)" stroke-width="1" stroke-linecap="round" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
