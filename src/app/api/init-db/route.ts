import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS simulations (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255),
        revenus1 INTEGER,
        statut1 VARCHAR(50),
        revenus2 INTEGER,
        statut2 VARCHAR(50),
        enfants INTEGER DEFAULT 0,
        enfants_a_naitre INTEGER DEFAULT 0,
        patrimoine INTEGER DEFAULT 0,
        situation_actuelle VARCHAR(50),
        economie_mariage INTEGER,
        economie_pacs INTEGER,
        recommandation VARCHAR(20),
        ils_s_aiment BOOLEAN,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;

    return NextResponse.json({ ok: true, message: 'Table created' });
  } catch (error) {
    console.error('Error creating table:', error);
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}
