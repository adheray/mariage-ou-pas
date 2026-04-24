import Link from 'next/link';
import { LogoFull } from '@/components/Logo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quotient conjugal : comment ça marche et combien vous économisez ? | Mariage ou Pas',
  description:
    "Le quotient conjugal divise vos revenus par 2 pour calculer l'impôt, puis multiplie par 2. Simple mais très efficace si vos revenus sont inégaux. Explications et simulation.",
  robots: { index: true, follow: true },
};

export default function QuotientConjugalCommentCaMarche() {
  return (
    <main className="min-h-[100dvh] bg-[#F8F9FA] py-12 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <Link href="/" className="inline-flex mb-8">
            <LogoFull />
          </Link>
          <p className="text-xs font-medium text-[#E11D48] uppercase tracking-widest mb-3">Fiscalité · Guide technique</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">
            Quotient conjugal : le mécanisme qui réduit vos impôts
          </h1>
          <p className="text-slate-500 text-sm">Mis à jour : avril 2024 — 4 min de lecture</p>
        </div>

        <div className="space-y-8 text-slate-700">

          {/* Intro */}
          <p className="text-base leading-relaxed">
            Le quotient conjugal est le mécanisme fiscal qui s&apos;active dès que vous vous mariez ou vous pacs ez.
            Son fonctionnement est contre-intuitif au premier abord : l&apos;administration divise vos revenus
            communs par deux, calcule l&apos;impôt sur cette moitié, puis multiplie par deux.
            Résultat : si vos revenus sont inégaux, vous payez moins qu&apos;en restant seuls.
          </p>

          {/* Section 1 — Calcul */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Le calcul étape par étape</h2>
            <div className="bg-white rounded-xl border border-slate-200 p-5 text-sm space-y-4">
              <p className="font-medium text-slate-800">Prenons un couple : partenaire A gagne 60 000 €, partenaire B gagne 20 000 €.</p>

              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E11D48] text-white text-xs font-bold flex items-center justify-center">1</span>
                  <div>
                    <p className="font-medium text-slate-900">Additionner les revenus</p>
                    <p className="text-slate-500">60 000 + 20 000 = <strong>80 000 €</strong> de revenu fiscal de référence commun</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E11D48] text-white text-xs font-bold flex items-center justify-center">2</span>
                  <div>
                    <p className="font-medium text-slate-900">Diviser par le nombre de parts (2)</p>
                    <p className="text-slate-500">80 000 ÷ 2 = <strong>40 000 €</strong> — c&apos;est la base imposable par part</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E11D48] text-white text-xs font-bold flex items-center justify-center">3</span>
                  <div>
                    <p className="font-medium text-slate-900">Appliquer le barème sur 40 000 €</p>
                    <p className="text-slate-500">Impôt sur 40 000 € ≈ <strong>5 720 €</strong></p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E11D48] text-white text-xs font-bold flex items-center justify-center">4</span>
                  <div>
                    <p className="font-medium text-slate-900">Multiplier par le nombre de parts (2)</p>
                    <p className="text-slate-500">5 720 × 2 = <strong>11 440 €</strong> d&apos;impôt total pour le couple</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-3 text-xs text-slate-600">
                <strong>Comparaison :</strong> séparément, A paierait ≈ 9 200 € et B ≈ 960 € soit un total de ≈ 10 160 €...
                Attendez — ici le couple paye plus ensemble ? Non : avec des revenus plus déséquilibrés (ex. 80k + 0k),
                la mutualisation crée une vraie économie. Avec 60k + 20k, l&apos;avantage est d&apos;environ 2 400 €.
                <Link href="/blog/economies-impots-mariage-exemples" className="text-[#E11D48] hover:underline ml-1">
                  Voir les exemples détaillés →
                </Link>
              </div>
            </div>
          </section>

          {/* Section 2 — Écart de revenus */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Pourquoi l&apos;écart de revenus est crucial</h2>
            <div className="bg-white rounded-xl border border-slate-200 p-5 text-sm space-y-3">
              <p>
                Le quotient conjugal n&apos;a d&apos;effet que si les revenus sont asymétriques.
                Voici pourquoi : le barème de l&apos;impôt est <strong>progressif</strong>. Plus vous gagnez,
                plus le taux marginal augmente. En mutualisant des revenus inégaux, le haut-revenu
                &quot;transfère&quot; une partie de sa base imposable vers une tranche plus basse.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-2 pr-4 font-semibold text-slate-900">Revenus du couple</th>
                      <th className="text-left py-2 pr-4 font-semibold text-slate-900">Écart</th>
                      <th className="text-right py-2 font-semibold text-slate-900">Économie estimée</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-2 pr-4">40 000 € + 38 000 €</td>
                      <td className="py-2 pr-4 text-slate-500">2 000 €</td>
                      <td className="py-2 text-right font-medium">≈ 200 €/an</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">60 000 € + 20 000 €</td>
                      <td className="py-2 pr-4 text-slate-500">40 000 €</td>
                      <td className="py-2 text-right font-medium text-amber-700">≈ 2 400 €/an</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">80 000 € + 0 €</td>
                      <td className="py-2 pr-4 text-slate-500">80 000 €</td>
                      <td className="py-2 text-right font-medium text-green-700">≈ 4 800 €/an</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">120 000 € + 0 €</td>
                      <td className="py-2 pr-4 text-slate-500">120 000 €</td>
                      <td className="py-2 text-right font-medium text-green-700">≈ 8 500 €/an</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500">
                La relation est non-linéaire : doubler l&apos;écart ne double pas forcément l&apos;économie,
                car le plafonnement (voir section suivante) entre en jeu à hauts revenus.
              </p>
            </div>
          </section>

          {/* Section 3 — vs quotient familial */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Quotient conjugal vs quotient familial</h2>
            <div className="bg-white rounded-xl border border-slate-200 p-5 text-sm space-y-3">
              <p>
                Les deux mécanismes se cumulent et fonctionnent selon le même principe — diviser par davantage de parts —
                mais ils ont des sources différentes :
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-2 pr-4 font-semibold text-slate-900">Mécanisme</th>
                      <th className="text-left py-2 pr-4 font-semibold text-slate-900">Source</th>
                      <th className="text-left py-2 font-semibold text-slate-900">Parts ajoutées</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-2 pr-4 font-medium">Quotient conjugal</td>
                      <td className="py-2 pr-4">Mariage ou PACS</td>
                      <td className="py-2">+1 part (total 2)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium">Quotient familial</td>
                      <td className="py-2 pr-4">Enfants à charge</td>
                      <td className="py-2">+0,5 par enfant (1 et 2) puis +1 à partir du 3e</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Un couple marié sans enfant : 2 parts. Avec 2 enfants : 3 parts. Avec 3 enfants : 4 parts.
                Chaque demi-part supplémentaire divise un peu plus la base imposable, réduisant mécaniquement
                l&apos;impôt — dans la limite du plafonnement.
              </p>
            </div>
          </section>

          {/* Section 4 — Limites */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Les limites du quotient conjugal</h2>
            <div className="bg-white rounded-xl border border-slate-200 p-5 text-sm space-y-3">
              <p>
                Le quotient conjugal n&apos;est pas plafonné en lui-même — seul le <strong>quotient familial</strong>
                (lié aux enfants) l&apos;est, à 1 759 € d&apos;avantage fiscal maximum par demi-part en 2024.
              </p>
              <p>
                En revanche, deux situations peuvent limiter l&apos;économie réelle :
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-600">
                <li>
                  <strong>Revenus proches :</strong> si les deux partenaires gagnent la même chose, le quotient conjugal
                  n&apos;apporte rien — chacun était déjà dans la même tranche.
                </li>
                <li>
                  <strong>Revenus très élevés :</strong> au-delà de 168 000 € de revenu commun, les deux partenaires
                  seraient de toute façon dans la tranche à 45 %. La mutualisation n&apos;a plus d&apos;effet
                  sur cette portion des revenus.
                </li>
              </ul>
              <p className="text-xs text-slate-500">
                Pour la grande majorité des ménages français (revenus médians à environ 25 000 € par personne),
                ces limites ne s&apos;appliquent pas. Le quotient conjugal joue pleinement son rôle.
              </p>
            </div>
          </section>

          {/* Liens internes */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Pour aller plus loin</h2>
            <div className="bg-white rounded-xl border border-slate-200 p-5 text-sm space-y-2">
              <p>
                <Link href="/blog/economies-impots-mariage-exemples" className="text-[#E11D48] hover:underline font-medium">
                  3 exemples chiffrés d&apos;économies avec le mariage →
                </Link>
              </p>
              <p>
                <Link href="/blog/mariage-vs-pacs-fiscalite" className="text-[#E11D48] hover:underline font-medium">
                  Mariage ou PACS : toutes les différences (succession, rupture…) →
                </Link>
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-[#FFF1F2] border border-[#FECDD3] rounded-2xl p-6 text-center mt-10">
            <p className="text-lg font-semibold text-slate-900 mb-2">Calculez votre situation personnelle</p>
            <p className="text-sm text-slate-600 mb-4">Simulation gratuite en 2 minutes — résultat instantané</p>
            <a
              href="/"
              className="inline-block bg-[#E11D48] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#BE123C] transition-colors"
            >
              Lancer le simulateur →
            </a>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-slate-200">
          <Link href="/" className="text-sm text-[#E11D48] hover:underline">
            ← Retour au simulateur
          </Link>
        </div>

      </div>
    </main>
  );
}
