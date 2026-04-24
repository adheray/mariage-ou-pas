import { SimulationWizard } from "@/components/wizard/SimulationWizard";
import { FAQ } from "@/components/FAQ";
import { CoupleIllustration } from "@/components/illustrations/CoupleIllustration";

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4 bg-[#F8F9FA]">
      <div className="max-w-md mx-auto">
        {/* Illustration + Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <CoupleIllustration />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            <span className="text-[#E11D48]">Mariage</span>
            {' '}
            <span className="text-slate-900">ou PACS ?</span>
          </h1>
          <p className="text-slate-500">
            Simulateur fiscal gratuit — calculez vos économies d&apos;impôts
          </p>
        </div>

        {/* Ligne de réassurance */}
        <p className="text-center text-sm text-slate-400 mb-6">
          Simulation gratuite · Résultat instantané · Barème IR 2024
        </p>

        {/* Wizard */}
        <SimulationWizard />

        {/* FAQ */}
        <FAQ />

        {/* SEO Content */}
        <section className="mt-10 text-sm text-slate-500 space-y-4">
          <h2 className="text-base font-semibold text-slate-700">
            Pourquoi simuler l&apos;avantage fiscal du mariage ou du PACS ?
          </h2>
          <p>
            Le <strong>mariage</strong> et le <strong>PACS</strong> offrent les mêmes avantages fiscaux
            pour l&apos;impôt sur le revenu depuis 2005. Le quotient conjugal permet de mutualiser
            les revenus du couple et de réduire l&apos;imposition globale, surtout quand les
            revenus sont très différents entre les partenaires.
          </p>
          <p>
            Notre <strong>simulateur fiscal gratuit</strong> calcule instantanément vos économies
            potentielles en fonction de vos revenus, votre situation familiale et votre patrimoine.
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p className="text-xs text-slate-400">
            Simulation indicative · Barème IR 2024
          </p>
        </footer>
      </div>
    </main>
  );
}
