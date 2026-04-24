import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Simulateur fiscal mariage ou PACS — Calculez vos économies d\'impôts';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F8F9FA',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Watermark ring — fond décoratif */}
        <div
          style={{
            position: 'absolute',
            right: -120,
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
          }}
        >
          <svg width="700" height="700" viewBox="0 0 700 700" fill="none">
            <circle cx="350" cy="350" r="300" stroke="#E11D48" strokeWidth="4" fill="none" opacity="0.08" />
            <circle cx="350" cy="350" r="230" stroke="#E11D48" strokeWidth="2" fill="none" opacity="0.06" />
            <ellipse cx="350" cy="350" rx="300" ry="45" stroke="#E11D48" strokeWidth="2" fill="none" opacity="0.06" />
            <polygon points="350,60 460,200 350,245 240,200" stroke="#E11D48" strokeWidth="2.5" fill="#E11D48" fillOpacity="0.08" />
            <polygon points="350,60 460,200 350,145 240,200" stroke="#E11D48" strokeWidth="1.5" fill="#E11D48" fillOpacity="0.04" />
            <line x1="350" y1="60" x2="350" y2="245" stroke="#E11D48" strokeWidth="1.5" opacity="0.10" />
            <line x1="240" y1="200" x2="460" y2="200" stroke="#E11D48" strokeWidth="1.5" opacity="0.10" />
          </svg>
        </div>

        {/* Contenu principal */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0 100px',
            maxWidth: 720,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40, gap: 14 }}>
            {/* LogoMark SVG */}
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#E11D48" />
              <circle cx="16" cy="21" r="7" stroke="white" strokeWidth="2.5" fill="none" />
              <polygon points="16,6 21,13 16,15.5 11,13" fill="white" />
              <polygon points="16,6 21,13 16,10.5" fill="rgba(255,255,255,0.55)" />
              <line x1="12.5" y1="8" x2="14" y2="9.5" stroke="rgba(255,255,255,0.75)" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            {/* Satori ne supporte pas les spans imbriqués — flex row */}
            <span style={{ fontSize: 22, fontWeight: 600, color: '#0F172A', letterSpacing: '-0.02em' }}>
              Mariage
            </span>
            <span style={{ fontSize: 22, fontWeight: 600, color: '#E11D48', letterSpacing: '-0.02em', marginLeft: 4 }}>
              {' '}ou Pas ?
            </span>
          </div>

          {/* Headline — div flex row pour éviter l'overlap Satori */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'baseline',
              flexWrap: 'wrap',
              gap: 18,
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontSize: 72,
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#E11D48',
              }}
            >
              Mariage
            </span>
            <span
              style={{
                fontSize: 72,
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#0F172A',
              }}
            >
              ou PACS ?
            </span>
          </div>

          {/* Sous-titre */}
          <div
            style={{
              fontSize: 28,
              color: '#64748B',
              marginBottom: 48,
              fontWeight: 400,
              display: 'flex',
            }}
          >
            Simulateur fiscal gratuit — calculez vos economies d&apos;impots
          </div>

          {/* Badges */}
          <div style={{ display: 'flex', gap: 16 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: '#FFF1F2',
                border: '1.5px solid #FECDD3',
                borderRadius: 12,
                padding: '12px 24px',
                gap: 10,
              }}
            >
              <span style={{ fontSize: 22 }}>⚡</span>
              <span style={{ fontSize: 18, fontWeight: 600, color: '#BE123C' }}>
                Résultat instantané
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: '#F8FAFC',
                border: '1.5px solid #E2E8F0',
                borderRadius: 12,
                padding: '12px 24px',
                gap: 10,
              }}
            >
              <span style={{ fontSize: 22 }}>🔒</span>
              <span style={{ fontSize: 18, fontWeight: 600, color: '#475569' }}>
                100% gratuit
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: '#F8FAFC',
                border: '1.5px solid #E2E8F0',
                borderRadius: 12,
                padding: '12px 24px',
                gap: 10,
              }}
            >
              <span style={{ fontSize: 22 }}>📊</span>
              <span style={{ fontSize: 18, fontWeight: 600, color: '#475569' }}>
                Barème IR 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
