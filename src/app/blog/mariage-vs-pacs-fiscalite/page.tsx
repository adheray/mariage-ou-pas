import Link from 'next/link';
import { LogoFull } from '@/components/Logo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mariage ou PACS : quelle différence fiscale en 2024 ? | Mariage ou Pas',
  description:
    "Mariage et PACS sont fiscalement identiques depuis 2005. Mais ce n'est pas tout : succession, retraite, protection sociale… on vous explique toutes les différences.",
  robots: { index: true, follow: true },
};

export default function MariageVsPacsFiscalite() {
  return (
    <main className="min-h-[100dvh] bg-[#F8F9FA] py-12 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <Link href="/" className="inline-flex mb-8">
            <LogoFull />
          </Link>
          <p className="text-xs font-medium text-[#E11D48] uppercase tracking-widest mb-3">Fiscalité</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">
            Mariage ou PACS : quelle différence fiscale en 2024 ?
          </h1>
          <p className="text-slate-500 text-sm">Mis à jour : avril 2024 — 5 min de lecture</p>
        </div>

        <div className="space-y-8 text-slate-700">

          {/* Intro */}
          <p className="text-base leading-relaxed">
            Depuis 2005, mariage et PACS donnent exactement les mêmes droits en matière d&apos;impôt sur le revenu.
            Le quotient conjugal s&apos;applique dans les deux cas, les déclarations communes sont possibles, les barèmes
            identiques. Pourtant, choisir entre les deux n&apos;est pas neutre : succession, protection sociale, facilité
            de rupture… les différences sont réelles et souvent méconnues.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Impôts sur le revenu : aucune différence</h2>
            <div className="bg-white rounded-xl border border-slate-200 p-5 text-sm space-y-3">
              <p>
                Depuis la loi de finances 2005, pacsés et mariés sont traités à l&apos;identique par l&apos;administration
                fiscale. Dès l&apos;année de la signature du PACS (ou du mariage), vous pouvez opter pour une déclaration
                commune et bénéficier du <strong>quotient conjugal</strong>.
              </p>
              <p>
                Le mécanisme est simple : vos revenus sont additionnés, divisés par 2, soumis au barème, puis le résultat
                est multiplié par 2. Si vos revenus sont inégaux, l&apos;un des deux partenaires &quot;profite&quot; de
                la tranche plus basse de l&apos;autre — ce qui peut générer une économie substantielle.
              </p>
              <p>
                <strong>Résultat :</strong> un couple marié et un couple pacsé avec les mêmes revenus paient exactement
                le même impôt.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Succession : là, ça change tout</h2>
            <div className="bg-white rounded-xl border border-slate-200 p-5 text-sm space-y-3">
              <p>
                C&apos;est le point où mariage, PACS et concubinage divergent radicalement.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-2 pr-4 font-semibold text-slate-900">Situation</th>
                      <th className="text-left py-2 pr-4 font-semibold text-slate-900">Droits de succession</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-2 pr-4">Mariage</td>
                      <td className="py-2 pr-4 text-green-700 font-medium">0 % (exonération totale)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">PACS</td>
                      <td className="py-2 pr-4 text-green-700 font-medium">0 % (exonération totale)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Concubinage</td>
                      <td className="py-2 pr-4 text-red-700 font-medium">60 % au-delà de 1 594 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="pt-1">
                <strong>Exemple concret :</strong> un couple en concubinage avec 300 000 € de patrimoine commun.
                Au décès de l&apos;un d&apos;eux, le survivant paiera environ <strong>178 000 € de droits de succession</strong>.
                En mariage ou PACS : <strong>0 €</strong>. Cela seul justifie souvent de se pacser ou se marier.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Protection sociale</h2>
            <div className="bg-white rounded-xl border border-slate-200 p-5 text-sm space-y-3">
              <p>
                Depuis 2016, le statut d&apos;ayant-droit à l&apos;assurance maladie est accessible à toute personne
                vivant sous le même toit, quel que soit le statut matrimonial. Mariage, PACS et même concubinage
                donnent accès à la couverture maladie via le conjoint.
              </p>
              <p>
                En revanche, pour la <strong>retraite de réversion</strong> (une partie de la pension du conjoint décédé),
                seul le mariage ouvre ce droit. Les pacsés et les concubins n&apos;y ont pas accès — un point souvent
                ignoré et qui peut représenter des centaines d&apos;euros par mois à la retraite.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Divorce vs rupture de PACS</h2>
            <div className="bg-white rounded-xl border border-slate-200 p-5 text-sm space-y-3">
              <p>
                C&apos;est souvent l&apos;argument qui fait hésiter. Le divorce est une procédure judiciaire :
                même à l&apos;amiable (divorce par consentement mutuel), il faut un avocat pour chaque partie,
                une homologation notariale, et plusieurs mois de démarches. Coût : entre 2 000 et 5 000 € minimum.
              </p>
              <p>
                La rupture de PACS est radicalement différente : <strong>l&apos;un des deux partenaires peut y mettre
                fin unilatéralement</strong>, par simple signification à l&apos;autre par huissier, puis déclaration
                en mairie. Délai : quelques semaines. Coût : quelques centaines d&apos;euros.
              </p>
              <p>
                À noter : le PACS n&apos;offre aucune protection automatique sur le logement ou le partage des biens
                en cas de rupture — le contrat de mariage peut prévoir des dispositions que le PACS ne permet pas.
              </p>
            </div>
          </section>

          {/* Section 5 — Tableau récap */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Résumé : quand choisir quoi ?</h2>
            <div className="bg-white rounded-xl border border-slate-200 p-5 text-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-2 pr-4 font-semibold text-slate-900">Critère</th>
                      <th className="text-center py-2 pr-4 font-semibold text-slate-900">Mariage</th>
                      <th className="text-center py-2 pr-4 font-semibold text-slate-900">PACS</th>
                      <th className="text-center py-2 font-semibold text-slate-900">Concubinage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-2 pr-4">Économie IR</td>
                      <td className="py-2 pr-4 text-center text-green-700">Oui</td>
                      <td className="py-2 pr-4 text-center text-green-700">Oui</td>
                      <td className="py-2 text-center text-red-600">Non</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Succession 0 %</td>
                      <td className="py-2 pr-4 text-center text-green-700">Oui</td>
                      <td className="py-2 pr-4 text-center text-green-700">Oui</td>
                      <td className="py-2 text-center text-red-600">Non (60 %)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Retraite de réversion</td>
                      <td className="py-2 pr-4 text-center text-green-700">Oui</td>
                      <td className="py-2 pr-4 text-center text-red-600">Non</td>
                      <td className="py-2 text-center text-red-600">Non</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Rupture simple</td>
                      <td className="py-2 pr-4 text-center text-red-600">Non</td>
                      <td className="py-2 pr-4 text-center text-green-700">Oui</td>
                      <td className="py-2 text-center text-green-700">Oui</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Protection logement</td>
                      <td className="py-2 pr-4 text-center text-green-700">Forte</td>
                      <td className="py-2 pr-4 text-center text-yellow-600">Limitée</td>
                      <td className="py-2 text-center text-red-600">Aucune</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                <strong>Notre conseil :</strong> Si vous êtes en concubinage avec un patrimoine commun, se pacser
                ou se marier est fiscalement évident pour la succession. Pour le choix entre les deux,
                le simulateur ci-dessous vous donnera les chiffres précis pour votre situation IR.
              </p>
            </div>
          </section>

          {/* Liens internes */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Pour aller plus loin</h2>
            <div className="bg-white rounded-xl border border-slate-200 p-5 text-sm space-y-2">
              <p>
                <Link href="/blog/economies-impots-mariage-exemples" className="text-[#E11D48] hover:underline font-medium">
                  Économies d&apos;impôts avec le mariage : 3 exemples concrets →
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
