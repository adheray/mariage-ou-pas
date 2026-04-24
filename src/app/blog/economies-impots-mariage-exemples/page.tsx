import Link from 'next/link';
import { LogoFull } from '@/components/Logo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Économies d'impôts avec le mariage : exemples concrets 2024 | Mariage ou Pas",
  description:
    "Combien économise-t-on vraiment en se mariant ou se pacsant ? 3 exemples concrets avec des revenus différents pour comprendre le quotient conjugal.",
  robots: { index: true, follow: true },
};

export default function EconomiesImpotsMariageExemples() {
  return (
    <main className="min-h-[100dvh] bg-[#F8F9FA] py-12 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <Link href="/" className="inline-flex mb-8">
            <LogoFull />
          </Link>
          <p className="text-xs font-medium text-[#E11D48] uppercase tracking-widest mb-3">Fiscalité · Exemples chiffrés</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">
            Économies d&apos;impôts avec le mariage : 3 exemples concrets
          </h1>
          <p className="text-slate-500 text-sm">Mis à jour : avril 2024 — 5 min de lecture</p>
        </div>

        <div className="space-y-8 text-slate-700">

          {/* Intro */}
          <p className="text-base leading-relaxed">
            Le quotient conjugal est le mécanisme central qui détermine votre gain fiscal en vous mariant ou vous
            pacsant. Le principe est simple : vos revenus sont mutualisés et imposés comme si chacun gagnait la moitié
            du total. Mais l&apos;économie réelle dépend entièrement de <strong>l&apos;écart de revenus entre les deux
            partenaires</strong>. Voyons ça avec trois situations concrètes.
          </p>

          {/* Exemple 1 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              Exemple 1 — Revenus similaires : économie modeste
            </h2>
            <div className="bg-white rounded-xl border border-slate-200 p-5 text-sm space-y-4">
              <div className="flex gap-4">
                <div className="flex-1 bg-slate-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-slate-500 mb-1">Partenaire A</p>
                  <p className="text-xl font-bold text-slate-900">40 000 €</p>
                  <p className="text-xs text-slate-400">revenu net imposable</p>
                </div>
                <div className="flex-1 bg-slate-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-slate-500 mb-1">Partenaire B</p>
                  <p className="text-xl font-bold text-slate-900">38 000 €</p>
                  <p className="text-xs text-slate-400">revenu net imposable</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-2 pr-4 font-semibold text-slate-900">Situation</th>
                      <th className="text-right py-2 font-semibold text-slate-900">Impôt total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-2 pr-4">Déclarations séparées (célibataires)</td>
                      <td className="py-2 text-right">≈ 8 350 €</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Déclaration commune (mariage/PACS)</td>
                      <td className="py-2 text-right">≈ 8 150 €</td>
                    </tr>
                    <tr className="font-medium">
                      <td className="py-2 pr-4 text-green-700">Économie annuelle</td>
                      <td className="py-2 text-right text-green-700">≈ 200 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500">
                Quand les revenus sont proches, chacun est déjà dans une tranche similaire. Le quotient conjugal
                ne change presque rien. L&apos;avantage fiscal est réel mais marginal.
              </p>
            </div>
          </section>

          {/* Exemple 2 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              Exemple 2 — Revenus déséquilibrés : économie significative
            </h2>
            <div className="bg-white rounded-xl border border-slate-200 p-5 text-sm space-y-4">
              <div className="flex gap-4">
                <div className="flex-1 bg-slate-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-slate-500 mb-1">Partenaire A</p>
                  <p className="text-xl font-bold text-slate-900">60 000 €</p>
                  <p className="text-xs text-slate-400">revenu net imposable</p>
                </div>
                <div className="flex-1 bg-slate-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-slate-500 mb-1">Partenaire B</p>
                  <p className="text-xl font-bold text-slate-900">20 000 €</p>
                  <p className="text-xs text-slate-400">revenu net imposable</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-2 pr-4 font-semibold text-slate-900">Situation</th>
                      <th className="text-right py-2 font-semibold text-slate-900">Impôt total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-2 pr-4">Déclarations séparées</td>
                      <td className="py-2 text-right">≈ 13 800 €</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Déclaration commune</td>
                      <td className="py-2 text-right">≈ 11 400 €</td>
                    </tr>
                    <tr className="font-medium">
                      <td className="py-2 pr-4 text-green-700">Économie annuelle</td>
                      <td className="py-2 text-right text-green-700">≈ 2 400 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500">
                Avec un écart de 40 000 €, le partenaire qui gagne 60 000 € serait seul dans la tranche à 41 %.
                En mutualisant, la base imposable de chacun tombe à 40 000 € — une partie de ses revenus redescend
                dans la tranche à 30 %. Résultat : 200 € d&apos;économie par mois.
              </p>
            </div>
          </section>

          {/* Exemple 3 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              Exemple 3 — Revenus très déséquilibrés : économie maximale
            </h2>
            <div className="bg-white rounded-xl border border-slate-200 p-5 text-sm space-y-4">
              <div className="flex gap-4">
                <div className="flex-1 bg-slate-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-slate-500 mb-1">Partenaire A</p>
                  <p className="text-xl font-bold text-slate-900">80 000 €</p>
                  <p className="text-xs text-slate-400">revenu net imposable</p>
                </div>
                <div className="flex-1 bg-[#FFF1F2] rounded-lg p-3 text-center">
                  <p className="text-xs text-slate-500 mb-1">Partenaire B</p>
                  <p className="text-xl font-bold text-slate-900">0 €</p>
                  <p className="text-xs text-slate-400">sans revenus propres</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-2 pr-4 font-semibold text-slate-900">Situation</th>
                      <th className="text-right py-2 font-semibold text-slate-900">Impôt total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-2 pr-4">Déclaration seul (célibataire)</td>
                      <td className="py-2 text-right">≈ 20 400 €</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Déclaration commune</td>
                      <td className="py-2 text-right">≈ 15 600 €</td>
                    </tr>
                    <tr className="font-medium">
                      <td className="py-2 pr-4 text-green-700">Économie annuelle</td>
                      <td className="py-2 text-right text-green-700">≈ 4 800 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500">
                C&apos;est le cas extrême où le quotient conjugal déploie tout son potentiel. En divisant 80 000 € par 2,
                chaque &quot;demi-revenu&quot; de 40 000 € évite la tranche à 41 %. L&apos;économie dépasse
                400 € par mois — l&apos;équivalent d&apos;une mensualité de crédit.
              </p>
            </div>
          </section>

          {/* Section enfants */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Et avec des enfants ?</h2>
            <div className="bg-white rounded-xl border border-slate-200 p-5 text-sm space-y-3">
              <p>
                Le quotient conjugal (1 part par adulte) se cumule avec le <strong>quotient familial</strong>
                (demi-parts ou parts supplémentaires pour les enfants). Un enfant ajoute 0,5 part pour chacun
                des deux premiers, puis 1 part à partir du troisième.
              </p>
              <p>
                Résultat : un couple marié avec 2 enfants bénéficie de 3 parts fiscales. Cela peut significativement
                amplifier les économies de l&apos;exemple 3, surtout si les revenus sont élevés. Attention toutefois
                au <strong>plafonnement du quotient familial</strong> (1 759 € d&apos;avantage fiscal maximum par
                demi-part en 2024), qui limite le gain au-delà d&apos;un certain seuil de revenus.
              </p>
              <p>
                <Link
                  href="/blog/quotient-conjugal-comment-ca-marche"
                  className="text-[#E11D48] hover:underline font-medium"
                >
                  Comprendre le mécanisme complet du quotient conjugal →
                </Link>
              </p>
            </div>
          </section>

          {/* Liens internes */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Pour aller plus loin</h2>
            <div className="bg-white rounded-xl border border-slate-200 p-5 text-sm space-y-2">
              <p>
                <Link href="/blog/mariage-vs-pacs-fiscalite" className="text-[#E11D48] hover:underline font-medium">
                  Mariage ou PACS : toutes les différences (fiscalité, succession, rupture) →
                </Link>
              </p>
              <p>
                <Link href="/blog/quotient-conjugal-comment-ca-marche" className="text-[#E11D48] hover:underline font-medium">
                  Quotient conjugal : le mécanisme qui réduit vos impôts →
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
