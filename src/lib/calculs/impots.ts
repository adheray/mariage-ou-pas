// Barème IR 2024 (revenus 2023)
const TRANCHES_IR = [
  { max: 11294, taux: 0 },
  { max: 28797, taux: 0.11 },
  { max: 82341, taux: 0.30 },
  { max: 177106, taux: 0.41 },
  { max: Infinity, taux: 0.45 },
];

function calculerIR(revenuImposable: number, nbParts: number): number {
  const quotient = revenuImposable / nbParts;
  let impot = 0;
  let revenuRestant = quotient;

  for (let i = 0; i < TRANCHES_IR.length; i++) {
    const tranche = TRANCHES_IR[i];
    const min = i === 0 ? 0 : TRANCHES_IR[i - 1].max;
    const montantTranche = Math.min(revenuRestant, tranche.max - min);

    if (montantTranche > 0) {
      impot += montantTranche * tranche.taux;
      revenuRestant -= montantTranche;
    }

    if (revenuRestant <= 0) break;
  }

  return Math.round(impot * nbParts);
}

function calculerParts(enfants: number, marie: boolean): number {
  let parts = marie ? 2 : 1;

  if (enfants >= 1) parts += 0.5;
  if (enfants >= 2) parts += 0.5;
  if (enfants >= 3) parts += enfants - 2; // 1 part par enfant à partir du 3ème

  return parts;
}

export interface SimulationInput {
  revenus1: number;
  revenus2: number;
  enfants: number;
  enfantsANaitre: number;
  patrimoine?: number;
}

export interface SimulationResult {
  impotCelibataires: number;
  impotMaries: number;
  impotPacses: number;
  economieMarriage: number;
  economiePacs: number;
  avantageSuccession: number;
  recommandation: 'mariage' | 'pacs' | 'rien';
  explication: string;
}

function calculerDroitsSuccession(patrimoine: number, marie: boolean): number {
  if (marie) return 0; // Exonération totale entre époux
  // Concubin = étranger fiscalement : 60% après abattement de 1594€
  const assiette = Math.max(0, patrimoine - 1594);
  return Math.round(assiette * 0.6);
}

export function simulerImpots(input: SimulationInput): SimulationResult {
  const { revenus1, revenus2, enfants, enfantsANaitre, patrimoine = 0 } = input;
  const totalEnfants = enfants + enfantsANaitre;

  // Scénario 1: Célibataires séparés (enfants rattachés à un parent, généralement le + haut revenu)
  const enfantsParent1 = revenus1 >= revenus2 ? totalEnfants : 0;
  const enfantsParent2 = revenus1 < revenus2 ? totalEnfants : 0;
  const partsSeul1 = calculerParts(enfantsParent1, false);
  const partsSeul2 = calculerParts(enfantsParent2, false);
  const impot1Seul = calculerIR(revenus1, partsSeul1);
  const impot2Seul = calculerIR(revenus2, partsSeul2);
  const impotCelibataires = impot1Seul + impot2Seul;

  // Scénario 2: Mariés (déclaration commune)
  const partsMaries = calculerParts(totalEnfants, true);
  const impotMaries = calculerIR(revenus1 + revenus2, partsMaries);

  // Scénario 3: Pacsés (même traitement fiscal que mariés)
  const impotPacses = impotMaries;

  // Calcul des économies IR
  const economieMarriage = impotCelibataires - impotMaries;
  const economiePacs = impotCelibataires - impotPacses;

  // Calcul avantage succession (si patrimoine renseigné)
  const droitsSuccessionConcubin = calculerDroitsSuccession(patrimoine, false);
  const droitsSuccessionMarie = calculerDroitsSuccession(patrimoine, true);
  const avantageSuccession = droitsSuccessionConcubin - droitsSuccessionMarie;

  // Recommandation
  let recommandation: 'mariage' | 'pacs' | 'rien';
  let explication: string;

  const economieAnnuelleTotale = economieMarriage;
  const hasPatrimoine = patrimoine > 50000;

  if (economieMarriage > 500 || (hasPatrimoine && avantageSuccession > 10000)) {
    recommandation = 'mariage';
    if (hasPatrimoine && avantageSuccession > economieMarriage * 5) {
      explication = `L'économie IR est de ${economieMarriage.toLocaleString('fr-FR')}€/an, mais surtout le mariage vous éviterait ${avantageSuccession.toLocaleString('fr-FR')}€ de droits de succession (60% pour les concubins !).`;
    } else {
      explication = `Vous économiseriez ${economieMarriage.toLocaleString('fr-FR')}€ par an en vous mariant ! Le mariage offre aussi des avantages successoraux importants.`;
    }
  } else if (economiePacs > 500) {
    recommandation = 'pacs';
    explication = `Le PACS vous ferait économiser ${economiePacs.toLocaleString('fr-FR')}€ par an, avec moins de formalités que le mariage.`;
  } else if (economieMarriage > 0) {
    recommandation = 'pacs';
    explication = `L'économie fiscale est modeste (${economieMarriage.toLocaleString('fr-FR')}€/an). Le PACS est une option simple si vous n'êtes pas prêts pour le mariage.`;
  } else {
    recommandation = 'rien';
    explication = `Avec vos revenus similaires, le mariage ou PACS n'apporte pas d'avantage fiscal significatif. Choisissez selon vos envies !`;
  }

  return {
    impotCelibataires,
    impotMaries,
    impotPacses,
    economieMarriage,
    economiePacs,
    avantageSuccession,
    recommandation,
    explication,
  };
}
