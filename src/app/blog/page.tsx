import Link from 'next/link';
import { LogoFull } from '@/components/Logo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Mariage, PACS et fiscalité | Mariage ou Pas',
  description:
    "Tout comprendre sur la fiscalité du mariage et du PACS : quotient conjugal, exemples chiffrés, comparaisons mariage vs PACS.",
  robots: { index: true, follow: true },
};

const articles = [
  {
    slug: '/blog/mariage-vs-pacs-fiscalite',
    label: 'Fiscalité',
    title: 'Mariage ou PACS : quelle différence fiscale en 2024 ?',
    description:
      "Mariage et PACS sont fiscalement identiques depuis 2005. Mais pour la succession, la retraite et la rupture, les différences sont importantes. On vous explique tout.",
    readTime: '5 min',
  },
  {
    slug: '/blog/economies-impots-mariage-exemples',
    label: 'Exemples chiffrés',
    title: "Économies d'impôts avec le mariage : 3 exemples concrets",
    description:
      "Combien économise-t-on vraiment en se mariant ou se pacsant ? Trois situations avec des revenus différents pour comprendre qui gagne quoi — et pourquoi.",
    readTime: '5 min',
  },
  {
    slug: '/blog/quotient-conjugal-comment-ca-marche',
    label: 'Guide technique',
    title: 'Quotient conjugal : le mécanisme qui réduit vos impôts',
    description:
      "Le quotient conjugal divise vos revenus par 2 pour calculer l'impôt, puis multiplie par 2. Simple mais très efficace si vos revenus sont inégaux.",
    readTime: '4 min',
  },
];

export default function BlogListing() {
  return (
    <main className="min-h-[100dvh] bg-[#F8F9FA] py-12 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <Link href="/" className="inline-flex mb-8">
            <LogoFull />
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
            Blog — Mariage, PACS et fiscalité
          </h1>
          <p className="text-slate-500 text-sm">
            Comprendre les enjeux fiscaux et patrimoniaux du mariage et du PACS, sans jargon.
          </p>
        </div>

        {/* Articles */}
        <div className="space-y-4">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={article.slug}
              className="block bg-white rounded-xl border border-slate-200 p-5 hover:border-[#E11D48] hover:shadow-sm transition-all group"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-[#E11D48] uppercase tracking-wide">{article.label}</span>
                <span className="text-slate-300">·</span>
                <span className="text-xs text-slate-400">{article.readTime} de lecture</span>
              </div>
              <h2 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-[#E11D48] transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-3">{article.description}</p>
              <span className="text-sm font-medium text-[#E11D48]">
                Lire l&apos;article →
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#FFF1F2] border border-[#FECDD3] rounded-2xl p-6 text-center mt-10">
          <p className="text-lg font-semibold text-slate-900 mb-2">Prêt à simuler votre situation ?</p>
          <p className="text-sm text-slate-600 mb-4">Simulation gratuite en 2 minutes — résultat instantané</p>
          <a
            href="/"
            className="inline-block bg-[#E11D48] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#BE123C] transition-colors"
          >
            Lancer le simulateur →
          </a>
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
