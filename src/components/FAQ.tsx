'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Quelle différence fiscale entre mariage et PACS ?",
    a: "Aucune ! Depuis 2005, le PACS offre exactement les mêmes avantages fiscaux que le mariage pour l'impôt sur le revenu. La différence se fait sur la succession et les droits sociaux."
  },
  {
    q: "Quand le mariage est-il avantageux ?",
    a: "Quand les revenus sont très différents entre les deux partenaires. Le quotient conjugal permet de \"lisser\" les revenus et de payer moins d'impôts globalement."
  },
  {
    q: "Et pour la succession ?",
    a: "C'est LE point crucial. En concubinage, votre partenaire est considéré comme un étranger : 60% de droits de succession ! Mariés ou pacsés : 0%. Sur un patrimoine de 300 000€, ça fait 180 000€ de différence."
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold text-[#831843] mb-4 text-center">
        Questions fréquentes
      </h2>
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white/90 backdrop-blur rounded-xl border border-[#FBCFE8] overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full px-4 py-3 flex items-center justify-between text-left cursor-pointer hover:bg-[#FDF2F8]/50 transition-colors"
            >
              <span className="text-sm font-medium text-[#831843]">{faq.q}</span>
              <ChevronDown
                className={`w-4 h-4 text-[#DB2777] transition-transform ${
                  open === i ? 'rotate-180' : ''
                }`}
              />
            </button>
            {open === i && (
              <div className="px-4 pb-3 text-sm text-[#9D174D]/80 leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
