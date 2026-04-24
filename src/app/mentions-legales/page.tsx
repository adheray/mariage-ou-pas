import Link from 'next/link';
import { LogoFull } from '@/components/Logo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales — Mariage ou Pas ?',
  description: 'Mentions légales du simulateur fiscal mariage-ou-pas.fr',
  robots: { index: false, follow: false },
};

export default function MentionsLegales() {
  return (
    <main className="min-h-[100dvh] bg-[#F8F9FA] py-12 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <Link href="/" className="inline-flex mb-8">
            <LogoFull />
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
            Mentions légales
          </h1>
          <p className="text-slate-500 text-sm">Dernière mise à jour : avril 2025</p>
        </div>

        <div className="space-y-8 text-slate-700">

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Éditeur du site</h2>
            <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-1 text-sm">
              <p><span className="font-medium">Raison sociale :</span> Bob le Développeur</p>
              <p><span className="font-medium">Responsable de publication :</span> Alexandre Dairay</p>
              <p><span className="font-medium">Email :</span>{' '}
                <a href="mailto:alexandre@bob-le-developpeur.com" className="text-[#E11D48] hover:underline">
                  alexandre@bob-le-developpeur.com
                </a>
              </p>
              <p><span className="font-medium">Site web :</span>{' '}
                <a href="https://mariage-ou-pas.fr" className="text-[#E11D48] hover:underline">
                  mariage-ou-pas.fr
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Hébergement</h2>
            <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-1 text-sm">
              <p><span className="font-medium">Hébergeur :</span> Vercel Inc.</p>
              <p><span className="font-medium">Adresse :</span> 340 Pine Street, Suite 701, San Francisco, CA 94104, USA</p>
              <p><span className="font-medium">Site :</span>{' '}
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#E11D48] hover:underline">
                  vercel.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Nature du service</h2>
            <p className="text-sm leading-relaxed">
              Mariage-ou-pas.fr est un simulateur fiscal indicatif permettant d&apos;estimer
              les avantages fiscaux du mariage ou du PACS selon le barème de l&apos;impôt
              sur le revenu en vigueur. Les résultats fournis sont des estimations à titre
              informatif et ne constituent en aucun cas un conseil fiscal ou juridique.
            </p>
            <p className="text-sm leading-relaxed mt-3">
              Pour toute question fiscale personnelle, nous recommandons de consulter un
              expert-comptable ou un conseiller fiscal agréé.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Propriété intellectuelle</h2>
            <p className="text-sm leading-relaxed">
              L&apos;ensemble du contenu de ce site (textes, illustrations, code) est la propriété
              de Bob le Développeur et est protégé par les lois relatives à la propriété
              intellectuelle. Toute reproduction sans autorisation expresse est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Liens partenaires</h2>
            <p className="text-sm leading-relaxed">
              Certains liens présents sur ce site sont des liens d&apos;affiliation. Si vous
              cliquez sur ces liens et souscrivez un service, nous pouvons percevoir une
              commission. Cela ne modifie pas le prix que vous payez et ne biaise pas nos
              recommandations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Contact</h2>
            <p className="text-sm leading-relaxed">
              Pour toute question concernant le site :{' '}
              <a href="mailto:alexandre@bob-le-developpeur.com" className="text-[#E11D48] hover:underline">
                alexandre@bob-le-developpeur.com
              </a>
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
