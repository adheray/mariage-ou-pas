'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, ArrowLeft, RotateCcw, Share2, MessageCircle, Lightbulb } from 'lucide-react';
import { ResultIllustration } from '@/components/illustrations/ResultIllustration';
import { simulerImpots, type SimulationResult } from '@/lib/calculs/impots';

const schema = z.object({
  revenus1: z.number().min(0, 'Revenus requis'),
  statut1: z.string().min(1, 'Statut requis'),
  revenus2: z.number().min(0, 'Revenus requis'),
  statut2: z.string().min(1, 'Statut requis'),
  enfants: z.number().min(0),
  enfantsANaitre: z.number().min(0),
  patrimoine: z.number().min(0),
  situationActuelle: z.string().min(1, 'Situation requise'),
  email: z.string().email('Email invalide').optional().or(z.literal('')),
  ilsSAiment: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

const STEPS = ['Vous', 'Partenaire', 'Famille', 'Patrimoine', 'Email', 'Amour'];

const TIPS: Record<number, string> = {
  0: "Plus l'écart de revenus est grand entre vous deux, plus le mariage est avantageux fiscalement.",
  1: "Si votre partenaire gagne beaucoup moins (ou rien), vous économiserez davantage.",
  2: "À partir du 3ème enfant, chaque enfant compte pour 1 part entière au lieu de 0.5 !",
  3: "En concubinage, votre partenaire paie 60% de droits de succession. Mariés : 0%.",
  4: "On ne vous spammera pas, promis. C'est juste pour le récap.",
};

const STATUTS = [
  { value: 'salarie', label: 'Salarié' },
  { value: 'indep', label: 'Indépendant' },
  { value: 'fonctionnaire', label: 'Fonctionnaire' },
  { value: 'chomage', label: 'Sans emploi' },
  { value: 'retraite', label: 'Retraité' },
];

const SITUATIONS = [
  { value: 'concubins', label: 'Concubins' },
  { value: 'coloc', label: 'Séparés' },
  { value: 'pacses', label: 'Pacsés' },
];

function getMoneyVisual(amount: number): { emoji: string; label: string } {
  if (amount >= 150000) return { emoji: '💎', label: 'Très confortable' };
  if (amount >= 80000) return { emoji: '💰', label: 'Confortable' };
  if (amount >= 45000) return { emoji: '💵', label: 'Bon salaire' };
  if (amount >= 25000) return { emoji: '💸', label: 'Correct' };
  if (amount > 0) return { emoji: '🪙', label: 'Modeste' };
  return { emoji: '✨', label: '' };
}

function getPatrimoineVisual(amount: number): { emoji: string; label: string } {
  if (amount >= 1000000) return { emoji: '🏰', label: 'Château' };
  if (amount >= 500000) return { emoji: '🏡', label: 'Belle propriété' };
  if (amount >= 250000) return { emoji: '🏠', label: 'Maison' };
  if (amount >= 100000) return { emoji: '🏢', label: 'Appartement' };
  if (amount > 0) return { emoji: '🔑', label: 'Petit bien' };
  return { emoji: '🌱', label: '' };
}

function getChildrenVisual(count: number): string {
  if (count === 0) return '';
  if (count === 1) return '👶';
  if (count === 2) return '👶👶';
  if (count === 3) return '👶👶👶';
  return '👶'.repeat(Math.min(count, 4)) + (count > 4 ? '+' : '');
}

function getFutureChildrenVisual(count: number): string {
  if (count === 0) return '';
  return '🍼'.repeat(Math.min(count, 3));
}

function MoneySlider({
  value,
  onChange,
  max = 200000,
  label
}: {
  value: number;
  onChange: (v: number) => void;
  max?: number;
  label: string;
}) {
  const visual = getMoneyVisual(value);
  const pct = (value / max) * 100;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-semibold text-slate-800">{label}</Label>
        <div className="flex items-center gap-2">
          {visual.label && (
            <span className="text-xs text-slate-400 hidden sm:inline">{visual.label}</span>
          )}
          <span className="text-3xl transition-transform duration-300 hover:scale-110">{visual.emoji}</span>
        </div>
      </div>

      <input
        type="range"
        min="0"
        max={max}
        step="1000"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="slider-rose w-full"
        style={{
          background: `linear-gradient(to right, #E11D48 0%, #E11D48 ${pct}%, #E2E8F0 ${pct}%, #E2E8F0 100%)`
        }}
      />

      <div className="flex items-center justify-center gap-2">
        <Input
          type="number"
          value={value || ''}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          placeholder="0"
          className="w-36 h-14 text-center text-2xl font-semibold input-premium rounded-2xl number-display"
        />
        <span className="text-lg font-medium text-slate-400">€/an</span>
      </div>
    </div>
  );
}

function PatrimoineSlider({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const visual = getPatrimoineVisual(value);
  const max = 1000000;
  const pct = (value / max) * 100;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-semibold text-slate-800">Patrimoine immobilier</Label>
        <div className="flex items-center gap-2">
          {visual.label && (
            <span className="text-xs text-slate-400 hidden sm:inline">{visual.label}</span>
          )}
          <span className="text-3xl transition-transform duration-300 hover:scale-110">{visual.emoji}</span>
        </div>
      </div>

      <input
        type="range"
        min="0"
        max={max}
        step="10000"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="slider-gold w-full"
        style={{
          background: `linear-gradient(to right, #CA8A04 0%, #CA8A04 ${pct}%, #FEF3C7 ${pct}%, #FEF3C7 100%)`
        }}
      />

      <div className="flex items-center justify-center gap-2">
        <Input
          type="number"
          value={value || ''}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          placeholder="0"
          className="w-40 h-14 text-center text-2xl font-semibold input-premium rounded-2xl number-display"
        />
        <span className="text-lg font-medium text-slate-400">€</span>
      </div>
    </div>
  );
}

function Tip({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
      <div className="w-7 h-7 rounded-lg bg-white border border-slate-100 flex items-center justify-center shrink-0">
        <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
      </div>
      <p className="text-sm text-slate-500 leading-relaxed pt-0.5">{text}</p>
    </div>
  );
}

export function SimulationWizard() {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<SimulationResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      revenus1: 35000,
      statut1: '',
      revenus2: 32000,
      statut2: '',
      enfants: 0,
      enfantsANaitre: 0,
      patrimoine: 0,
      situationActuelle: '',
      email: '',
      ilsSAiment: undefined,
    },
  });

  const { register, watch, setValue } = form;
  const revenus1 = watch('revenus1') || 0;
  const revenus2 = watch('revenus2') || 0;
  const patrimoine = watch('patrimoine') || 0;
  const enfants = watch('enfants') || 0;
  const enfantsANaitre = watch('enfantsANaitre') || 0;

  const nextStep = () => step < STEPS.length - 1 && setStep(step + 1);
  const prevStep = () => step > 0 && setStep(step - 1);

  const handleCalculate = async () => {
    const data = form.getValues();
    const simulation = simulerImpots({
      revenus1: data.revenus1,
      revenus2: data.revenus2,
      enfants: data.enfants,
      enfantsANaitre: data.enfantsANaitre,
      patrimoine: data.patrimoine,
    });
    setResult(simulation);

    if (data.email) {
      try {
        await fetch('/api/simulation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...data, ...simulation }),
        });
      } catch {}
    }
    nextStep();
  };

  const handleFinalAnswer = (answer: boolean) => {
    setValue('ilsSAiment', answer);
    setShowResult(true);
  };

  const reset = () => {
    setStep(0);
    setResult(null);
    setShowResult(false);
    form.reset();
  };

  const shareText = result
    ? `Je viens de découvrir que je pourrais économiser ${result.economieMarriage.toLocaleString('fr-FR')}€/an en me mariant ! 💍 Faites le test :`
    : '';

  const shareUrl = 'https://mariage-ou-pas.fr';

  const shareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank');
  };

  // Results screen
  if (showResult && result) {
    const eco5 = result.economieMarriage * 5;
    const eco10 = result.economieMarriage * 10;
    const eco20 = result.economieMarriage * 20;

    return (
      <div className="card-premium rounded-3xl p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <ResultIllustration type={result.recommandation as 'mariage' | 'pacs' | 'neutre'} />
          </div>
          <p className="text-sm text-slate-400 uppercase tracking-widest mb-2 font-medium">
            Notre recommandation
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            {result.recommandation === 'mariage' ? 'Mariez-vous !' :
             result.recommandation === 'pacs' ? 'Pacsez-vous !' :
             'Comme vous voulez !'}
          </h2>
        </div>

        {/* Économies annuelles */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className={`rounded-2xl p-5 text-center transition-all ${
            result.economieMarriage > 0
              ? 'bg-emerald-50 border-2 border-emerald-200'
              : 'bg-neutral-50 border-2 border-neutral-200'
          }`}>
            <p className={`text-3xl font-bold number-display ${
              result.economieMarriage > 0 ? 'text-emerald-600' : 'text-neutral-400'
            }`}>
              {result.economieMarriage > 0 ? '+' : ''}{result.economieMarriage.toLocaleString('fr-FR')}€
            </p>
            <p className="text-sm text-neutral-500 mt-1 font-medium">Mariage / an</p>
          </div>
          <div className={`rounded-2xl p-5 text-center transition-all ${
            result.economiePacs > 0
              ? 'bg-blue-50 border-2 border-blue-200'
              : 'bg-neutral-50 border-2 border-neutral-200'
          }`}>
            <p className={`text-3xl font-bold number-display ${
              result.economiePacs > 0 ? 'text-blue-600' : 'text-neutral-400'
            }`}>
              {result.economiePacs > 0 ? '+' : ''}{result.economiePacs.toLocaleString('fr-FR')}€
            </p>
            <p className="text-sm text-neutral-500 mt-1 font-medium">PACS / an</p>
          </div>
        </div>

        {/* Timeline */}
        {result.economieMarriage > 0 && (
          <div className="bg-slate-50 rounded-2xl p-5 mb-6 border border-slate-100">
            <p className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <span>📈</span> Projection dans le temps
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { years: 5, value: eco5 },
                { years: 10, value: eco10 },
                { years: 20, value: eco20 },
              ].map(({ years, value }) => (
                <div key={years} className="text-center bg-white rounded-xl p-3 border border-slate-100">
                  <p className="text-xl font-bold text-[#E11D48] number-display">
                    {value.toLocaleString('fr-FR')}€
                  </p>
                  <p className="text-xs text-slate-400 font-medium">{years} ans</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Succession */}
        {result.avantageSuccession > 0 && (
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 mb-6">
            <p className="text-sm text-amber-800">
              <span className="font-bold">⚠️ Succession :</span>{' '}
              <span className="font-semibold">{result.avantageSuccession.toLocaleString('fr-FR')}€</span> économisés.
              En concubinage, c'est 60% de droits !
            </p>
          </div>
        )}

        <p className="text-sm text-slate-500 mb-6 leading-relaxed text-center">
          {result.explication}
        </p>

        {/* Détails */}
        <div className="text-xs text-slate-400 text-center mb-6 space-y-1">
          <p>Impôts séparés : <span className="font-semibold">{result.impotCelibataires.toLocaleString('fr-FR')}€/an</span></p>
          <p>Impôts ensemble : <span className="font-semibold">{result.impotMaries.toLocaleString('fr-FR')}€/an</span></p>
        </div>

        {/* Affiliation — liens contextuels selon recommandation */}
        <div className="mb-6 space-y-3">
          {result.recommandation === 'mariage' && (
            <a
              href="https://www.fortuneo.fr/compte-courant?codeParrain=AFFILIATE_FORTUNEO" /* TODO: remplacer par lien Awin Fortuneo */
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all cursor-pointer group"
            >
              <span className="text-2xl">🏦</span>
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold text-slate-800">Ouvrez un compte joint chez Fortuneo</p>
                <p className="text-xs text-slate-500">Gratuit, sans conditions de revenus — parfait pour gérer vos finances communes</p>
              </div>
              <span className="text-slate-400 text-xs font-medium group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          )}
          {result.recommandation === 'pacs' && (
            <a
              href="https://www.fortuneo.fr/compte-courant?codeParrain=AFFILIATE_FORTUNEO" /* TODO: remplacer par lien Awin Fortuneo */
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all cursor-pointer group"
            >
              <span className="text-2xl">🏦</span>
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold text-slate-800">Ouvrez un compte joint chez Fortuneo</p>
                <p className="text-xs text-slate-500">Idéal pour les couples pacsés — zéro frais de tenue de compte</p>
              </div>
              <span className="text-slate-400 text-xs font-medium group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          )}
          {(result.economieMarriage > 0 || result.economiePacs > 0) && (
            <a
              href="https://yomoni.fr/?parrain=AFFILIATE_YOMONI" /* TODO: remplacer par lien Yomoni */
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all cursor-pointer group"
            >
              <span className="text-2xl">📈</span>
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold text-slate-800">Placez votre économie avec Yomoni</p>
                <p className="text-xs text-slate-500">
                  {Math.max(result.economieMarriage, result.economiePacs).toLocaleString('fr-FR')}€/an investis = {(Math.max(result.economieMarriage, result.economiePacs) * 10 * 0.05).toLocaleString('fr-FR', { maximumFractionDigits: 0 })}€ en 10 ans (hypothèse 5%/an)
                </p>
              </div>
              <span className="text-slate-400 text-xs font-medium group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          )}
        </div>

        {/* Partage */}
        <div className="flex gap-3 mb-4">
          <button
            onClick={shareTwitter}
            className="flex-1 h-12 rounded-xl border-2 border-[#1DA1F2] text-[#1DA1F2] hover:bg-[#1DA1F2]/10 cursor-pointer font-medium flex items-center justify-center gap-2 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            Twitter
          </button>
          <button
            onClick={shareWhatsApp}
            className="flex-1 h-12 rounded-xl border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 cursor-pointer font-medium flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </button>
        </div>

        <button
          onClick={reset}
          className="w-full h-12 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 cursor-pointer font-medium flex items-center justify-center gap-2 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Nouvelle simulation
        </button>
      </div>
    );
  }

  return (
    <div className="card-premium rounded-3xl p-8">
      {/* Progress */}
      <div className="flex items-center gap-1 mb-8">
        {STEPS.map((_, i) => (
          <div key={i} className="flex items-center gap-1 flex-1">
            <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold transition-all duration-300 ${
              i < step ? 'bg-[#E11D48]/20 text-[#E11D48] ring-1 ring-[#E11D48]/40' :
              i === step ? 'bg-[#E11D48] text-white' :
              'bg-slate-100 text-slate-400'
            }`}>
              {i + 1}
            </div>
            {i < STEPS.length - 1 && (
              <div className={`h-[2px] flex-1 transition-all duration-500 ${i < step ? 'bg-[#E11D48]/30' : 'bg-slate-100'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step 0: Your income */}
      {step === 0 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
          <MoneySlider
            label="Vos revenus annuels nets"
            value={revenus1}
            onChange={(v) => setValue('revenus1', v)}
          />
          <div>
            <Label className="text-sm font-semibold text-slate-800 mb-3 block">Statut</Label>
            <div className="grid grid-cols-2 gap-3">
              {STATUTS.map((s) => (
                <button
                  key={s.value}
                  type="button"
                  onClick={() => setValue('statut1', s.value)}
                  className={`btn-choice h-12 px-4 text-sm font-medium rounded-xl cursor-pointer ${
                    watch('statut1') === s.value ? 'selected' : ''
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
          <Tip text={TIPS[0]} />
        </div>
      )}

      {/* Step 1: Partner income */}
      {step === 1 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
          <MoneySlider
            label="Revenus de votre partenaire"
            value={revenus2}
            onChange={(v) => setValue('revenus2', v)}
          />
          <div>
            <Label className="text-sm font-semibold text-slate-800 mb-3 block">Statut</Label>
            <div className="grid grid-cols-2 gap-3">
              {STATUTS.map((s) => (
                <button
                  key={s.value}
                  type="button"
                  onClick={() => setValue('statut2', s.value)}
                  className={`btn-choice h-12 px-4 text-sm font-medium rounded-xl cursor-pointer ${
                    watch('statut2') === s.value ? 'selected' : ''
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
          <Tip text={TIPS[1]} />
        </div>
      )}

      {/* Step 2: Family */}
      {step === 2 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <Label className="text-sm font-semibold text-slate-800">Enfants actuels</Label>
              <span className="text-3xl">{getChildrenVisual(enfants) || '—'}</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setValue('enfants', Math.max(0, enfants - 1))}
                className="btn-stepper w-16 h-16 rounded-2xl text-3xl cursor-pointer"
              >
                −
              </button>
              <div className="flex-1 text-center">
                <span className="text-6xl font-light text-slate-800 number-display">{enfants}</span>
              </div>
              <button
                type="button"
                onClick={() => setValue('enfants', enfants + 1)}
                className="btn-stepper w-16 h-16 rounded-2xl text-3xl cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <Label className="text-sm font-semibold text-slate-800">Enfants à venir</Label>
              <span className="text-3xl">{getFutureChildrenVisual(enfantsANaitre) || '—'}</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setValue('enfantsANaitre', Math.max(0, enfantsANaitre - 1))}
                className="btn-stepper w-16 h-16 rounded-2xl text-3xl cursor-pointer"
              >
                −
              </button>
              <div className="flex-1 text-center">
                <span className="text-6xl font-light text-slate-800 number-display">{enfantsANaitre}</span>
              </div>
              <button
                type="button"
                onClick={() => setValue('enfantsANaitre', enfantsANaitre + 1)}
                className="btn-stepper w-16 h-16 rounded-2xl text-3xl cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <Label className="text-sm font-semibold text-slate-800 mb-3 block">Situation actuelle</Label>
            <div className="grid grid-cols-3 gap-3">
              {SITUATIONS.map((s) => (
                <button
                  key={s.value}
                  type="button"
                  onClick={() => setValue('situationActuelle', s.value)}
                  className={`btn-choice h-12 px-3 text-sm font-medium rounded-xl cursor-pointer ${
                    watch('situationActuelle') === s.value ? 'selected' : ''
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
          <Tip text={TIPS[2]} />
        </div>
      )}

      {/* Step 3: Patrimoine */}
      {step === 3 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
          <PatrimoineSlider
            value={patrimoine}
            onChange={(v) => setValue('patrimoine', v)}
          />
          <Tip text={TIPS[3]} />
        </div>
      )}

      {/* Step 4: Email */}
      {step === 4 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
          <div>
            <Label className="text-sm font-semibold text-slate-800 mb-3 block">Email (optionnel)</Label>
            <Input
              type="email"
              placeholder="vous@email.com"
              className="h-14 text-lg input-premium rounded-2xl"
              {...register('email')}
            />
          </div>
          <Tip text={TIPS[4]} />
        </div>
      )}

      {/* Step 5: Love question */}
      {step === 5 && (
        <div className="text-center py-8 animate-in fade-in zoom-in-95 duration-500">
          <div className="text-7xl mb-6">💕</div>
          <p className="text-2xl font-semibold text-slate-800 mb-8">
            Vous vous aimez ?
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => handleFinalAnswer(true)}
              className="btn-premium h-14 px-10 rounded-2xl text-white font-semibold cursor-pointer"
            >
              Oui ! 🥰
            </button>
            <button
              onClick={() => handleFinalAnswer(false)}
              className="btn-choice h-14 px-8 rounded-2xl font-semibold cursor-pointer"
            >
              C'est compliqué
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      {step < 5 && (
        <div className="flex gap-3 mt-8">
          {step > 0 && (
            <button
              type="button"
              onClick={prevStep}
              className="btn-stepper h-12 px-5 rounded-xl cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <button
            type="button"
            onClick={step === 4 ? handleCalculate : nextStep}
            className="btn-premium flex-1 h-12 rounded-xl text-white font-semibold cursor-pointer flex items-center justify-center gap-2"
          >
            {step === 4 ? 'Calculer' : 'Continuer'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
