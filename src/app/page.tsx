import { SimulationWizard } from "@/components/wizard/SimulationWizard";
import { FAQ } from "@/components/FAQ";
import { TrendingUp, Users, Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4 relative">
      {/* Background image */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px) saturate(0.3)',
          transform: 'scale(1.1)',
        }}
      />
      <div className="fixed inset-0 z-0 bg-white/75" />

      <div className="max-w-md mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            <span className="text-[#DB2777]">Mariage</span>
            {' '}
            <span className="text-[#831843]">ou pas ?</span>
          </h1>
          <p className="text-[#9D174D]/70">
            Simulez votre avantage fiscal en 2 minutes
          </p>
        </div>

        {/* Stat accroche */}
        <div className="bg-white/90 backdrop-blur rounded-2xl p-4 mb-6 border border-[#FBCFE8]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#FDF2F8] flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[#DB2777]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#831843]">1 847 €</p>
              <p className="text-sm text-[#9D174D]/70">Économie moyenne des couples mariés/an</p>
            </div>
          </div>
        </div>

        {/* Wizard */}
        <SimulationWizard />

        {/* Social proof */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#9D174D]/60">
          <Users className="w-4 h-4" />
          <span>
            <strong className="text-[#DB2777]">14 283</strong> couples ont déjà simulé
          </span>
          <Heart className="w-4 h-4 text-[#DB2777]" />
        </div>

        {/* FAQ */}
        <FAQ />

        <footer className="mt-8 text-center">
          <p className="text-xs text-[#831843]/40">
            Simulation indicative · Barème IR 2024
          </p>
        </footer>
      </div>
    </main>
  );
}
