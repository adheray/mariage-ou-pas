import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Skip si pas d'email
    if (!data.email) {
      return NextResponse.json({ ok: true, saved: false });
    }

    await sql`
      INSERT INTO simulations (
        email,
        revenus1,
        statut1,
        revenus2,
        statut2,
        enfants,
        enfants_a_naitre,
        patrimoine,
        situation_actuelle,
        economie_mariage,
        economie_pacs,
        recommandation,
        ils_s_aiment,
        created_at
      ) VALUES (
        ${data.email},
        ${data.revenus1},
        ${data.statut1},
        ${data.revenus2},
        ${data.statut2},
        ${data.enfants || 0},
        ${data.enfantsANaitre || 0},
        ${data.patrimoine || 0},
        ${data.situationActuelle},
        ${data.economieMarriage},
        ${data.economiePacs},
        ${data.recommandation},
        ${data.ilsSAiment},
        NOW()
      )
    `;

    return NextResponse.json({ ok: true, saved: true });
  } catch (error) {
    console.error('Error saving simulation:', error);
    return NextResponse.json({ ok: false, error: 'Failed to save' }, { status: 500 });
  }
}
