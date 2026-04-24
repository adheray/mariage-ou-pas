import { SimulationWizard } from "@/components/wizard/SimulationWizard";
import { FAQ } from "@/components/FAQ";
import { CoupleIllustration } from "@/components/illustrations/CoupleIllustration";
import { LogoFull } from "@/components/Logo";

export default function Home() {
  return (
    <main className="relative min-h-screen py-12 px-4 overflow-hidden bg-[#F8F9FA]">

      {/* Watermark ring — grand décor en fond */}
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center" aria-hidden="true">
        <svg width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.035]">
          {/* Outer ring */}
          <circle cx="450" cy="500" r="360" stroke="#E11D48" strokeWidth="3" fill="none" />
          {/* Inner ring */}
          <circle cx="450" cy="500" r="280" stroke="#E11D48" strokeWidth="1.5" fill="none" />
          {/* Band */}
          <ellipse cx="450" cy="500" rx="360" ry="40" stroke="#E11D48" strokeWidth="1" fill="none" />
          {/* Diamond facets */}
          <polygon points="450,80 560,240 450,290 340,240" stroke="#E11D48" strokeWidth="2" fill="#E11D48" fillOpacity="0.15" />
          <polygon points="450,80 560,240 450,180 340,240" stroke="#E11D48" strokeWidth="1" fill="#E11D48" fillOpacity="0.08" />
          <polygon points="340,240 450,290 560,240 450,290" stroke="#E11D48" strokeWidth="1" fill="#E11D48" fillOpacity="0.05" />
          {/* Side facet lines */}
          <line x1="450" y1="80" x2="450" y2="290" stroke="#E11D48" strokeWidth="1" opacity="0.4" />
          <line x1="340" y1="240" x2="560" y2="240" stroke="#E11D48" strokeWidth="1" opacity="0.4" />
          {/* Shine dots */}
          <circle cx="390" cy="130" r="6" fill="#F59E0B" fillOpacity="0.5" />
          <circle cx="700" cy="200" r="4" fill="#E11D48" fillOpacity="0.4" />
          <circle cx="180" cy="280" r="4" fill="#E11D48" fillOpacity="0.3" />
          <circle cx="720" cy="650" r="5" fill="#F59E0B" fillOpacity="0.3" />
          <circle cx="160" cy="680" r="3" fill="#E11D48" fillOpacity="0.3" />
        </svg>
      </div>

      <div className="max-w-md mx-auto relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <LogoFull />
        </div>

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
