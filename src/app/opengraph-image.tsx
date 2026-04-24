import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Simulateur fiscal mariage ou PACS';
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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #FDF2F8 0%, #FBCFE8 50%, #F9A8D4 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
            borderRadius: 32,
            padding: '60px 80px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
            <span style={{ fontSize: 72, marginRight: 16 }}>💒</span>
            <span style={{ fontSize: 48, color: '#9D174D' }}>vs</span>
            <span style={{ fontSize: 72, marginLeft: 16 }}>📋</span>
          </div>
          <h1
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              margin: 0,
              marginBottom: 16,
            }}
          >
            <span style={{ color: '#DB2777' }}>Mariage</span>
            <span style={{ color: '#831843' }}> ou PACS ?</span>
          </h1>
          <p
            style={{
              fontSize: 28,
              color: '#9D174D',
              margin: 0,
              marginBottom: 32,
            }}
          >
            Simulateur fiscal gratuit
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              background: '#FDF2F8',
              padding: '16px 32px',
              borderRadius: 16,
            }}
          >
            <span style={{ fontSize: 36 }}>💰</span>
            <span style={{ fontSize: 32, fontWeight: 'bold', color: '#831843' }}>
              1 847 € d'économie moyenne/an
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
