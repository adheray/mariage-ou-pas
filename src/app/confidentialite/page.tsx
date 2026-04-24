import Link from 'next/link';
import { LogoFull } from '@/components/Logo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Mariage ou Pas ?',
  description: 'Politique de confidentialité et gestion des cookies de mariage-ou-pas.fr',
  robots: { index: false, follow: false },
};

export default function Confidentialite() {
  return (
    <main className="min-h-[100dvh] bg-[#F8F9FA] py-12 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <Link href="/" className="inline-flex mb-8">
            <LogoFull />
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
            Politique de confidentialité
          </h1>
          <p className="text-slate-500 text-sm">Dernière mise à jour : avril 2025</p>
        </div>

        <div className="space-y-8 text-slate-700">

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Données collectées</h2>
            <p className="text-sm leading-relaxed mb-4">
              Mariage-ou-pas.fr collecte uniquement les données strictement nécessaires au
              fonctionnement du service :
            </p>
            <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 text-sm overflow-hidden">
              <div className="p-4 grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-slate-900">Données de simulation</span>
                <span className="text-slate-600">
                  Revenus, situation familiale, patrimoine — traitées en mémoire,
                  non stockées sur nos serveurs sauf si vous renseignez votre email.
                </span>
              </div>
              <div className="p-4 grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-slate-900">Adresse email</span>
                <span className="text-slate-600">
                  Collectée uniquement si vous la saisissez volontairement dans le
                  formulaire de résultats. Utilisée pour vous envoyer votre simulation.
                  Non partagée avec des tiers.
                </span>
              </div>
              <div className="p-4 grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-slate-900">Données de navigation</span>
                <span className="text-slate-600">
                  Pages visitées, durée, pays — collectées via Google Analytics 4
                  (données agrégées et anonymisées).
                </span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Cookies et traceurs</h2>
            <p className="text-sm leading-relaxed mb-4">
              Ce site utilise des cookies de mesure d&apos;audience via Google Analytics 4.
              Ces cookies nous permettent de comprendre comment les visiteurs utilisent le site
              (pages visitées, durée de session, provenance) afin d&apos;améliorer le service.
            </p>
            <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 text-sm overflow-hidden">
              <div className="p-4 grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-slate-900">Google Analytics</span>
                <span className="text-slate-600">
                  Cookies _ga, _ga_* — durée 13 mois. Données traitées par Google LLC
                  (USA). Vous pouvez vous opposer via{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E11D48] hover:underline"
                  >
                    l&apos;extension de désactivation Google
                  </a>.
                </span>
              </div>
              <div className="p-4 grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-slate-900">Liens affiliés</span>
                <span className="text-slate-600">
                  Les liens partenaires (Awin) peuvent déposer des cookies de tracking
                  sur les sites des partenaires, soumis à leurs propres politiques.
                </span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Base légale du traitement</h2>
            <p className="text-sm leading-relaxed">
              Le traitement des données de simulation est effectué sur la base de
              l&apos;<strong>exécution du service</strong> (Art. 6.1.b RGPD). Le traitement
              des données analytiques est effectué sur la base de notre
              <strong> intérêt légitime</strong> à améliorer le service (Art. 6.1.f RGPD),
              les données étant anonymisées et agrégées.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Vos droits</h2>
            <p className="text-sm leading-relaxed mb-3">
              Conformément au RGPD, vous disposez des droits suivants concernant vos données :
            </p>
            <ul className="space-y-2 text-sm">
              {[
                { droit: 'Accès', desc: 'Obtenir une copie de vos données personnelles' },
                { droit: 'Rectification', desc: 'Corriger des données inexactes' },
                { droit: 'Effacement', desc: 'Demander la suppression de vos données' },
                { droit: 'Opposition', desc: 'Vous opposer au traitement pour motif légitime' },
                { droit: 'Portabilité', desc: 'Recevoir vos données dans un format structuré' },
              ].map(({ droit, desc }) => (
                <li key={droit} className="flex gap-2">
                  <span className="text-[#E11D48] font-medium w-24 shrink-0">{droit}</span>
                  <span className="text-slate-600">{desc}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed mt-4">
              Pour exercer ces droits :{' '}
              <a href="mailto:alexandre@bob-le-developpeur.com" className="text-[#E11D48] hover:underline">
                alexandre@bob-le-developpeur.com
              </a>
              {' '}— réponse sous 30 jours. Vous pouvez également introduire une réclamation
              auprès de la{' '}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E11D48] hover:underline"
              >
                CNIL
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Conservation des données</h2>
            <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 text-sm overflow-hidden">
              <div className="p-4 grid grid-cols-[160px_1fr] gap-3">
                <span className="font-medium text-slate-900">Email</span>
                <span className="text-slate-600">Jusqu&apos;à désinscription ou demande de suppression</span>
              </div>
              <div className="p-4 grid grid-cols-[160px_1fr] gap-3">
                <span className="font-medium text-slate-900">Données analytiques</span>
                <span className="text-slate-600">13 mois (paramètre par défaut Google Analytics)</span>
              </div>
              <div className="p-4 grid grid-cols-[160px_1fr] gap-3">
                <span className="font-medium text-slate-900">Simulations</span>
                <span className="text-slate-600">Non persistées si aucun email n&apos;est saisi</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Transferts hors UE</h2>
            <p className="text-sm leading-relaxed">
              Google Analytics implique un transfert de données vers les États-Unis.
              Ce transfert est encadré par les clauses contractuelles types de la Commission
              européenne et le Data Privacy Framework UE-USA.
            </p>
          </section>

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
