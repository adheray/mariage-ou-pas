// Barème IR 2024 (revenus 2023)
const TRANCHES_IR = [
  { max: 11294, taux: 0 },
  { max: 28797, taux: 0.11 },
  { max: 82341, taux: 0.30 },
  { max: 177106, taux: 0.41 },
  { max: Infinity, taux: 0.45 },
];

// Plafonnement du quotient familial 2024
const PLAFOND_DEMI_PART = 1759;
// La 1ère demi-part du parent seul bénéficie d'un plafond plus élevé (case T)
const PLAFOND_1ERE_DEMI_PART_SEUL = 4149;

// Seuils de la décote 2024
const DECOTE_SEUL_SEUIL = 1929;
const DECOTE_SEUL_BASE = 873;
const DECOTE_COUPLE_SEUIL = 3191;
const DECOTE_COUPLE_BASE = 1444;

function impotBareme(revenu: number, parts: number): number {
  const q = revenu / parts;
  let impot = 0;
  let restant = q;
  for (let i = 0; i < TRANCHES_IR.length; i++) {
    const min = i === 0 ? 0 : TRANCHES_IR[i - 1].max;
    const montant = Math.min(restant, TRANCHES_IR[i].max - min);
    if (montant <= 0) break;
    impot += montant * TRANCHES_IR[i].taux;
    restant -= montant;
    if (restant <= 0) break;
  }
  return impot * parts;
}

function appliquerPlafonnementQF(
  revenu: number,
  partsBase: number,
  partsTotal: number,
  parentSeul: boolean
): number {
  const demiPartsEnfants = Math.round((partsTotal - partsBase) * 2);
  if (demiPartsEnfants === 0) return impotBareme(revenu, partsBase);

  const impotAvec = impotBareme(revenu, partsTotal);
  const impotSans = impotBareme(revenu, partsBase);

  const plafond = parentSeul
    ? PLAFOND_1ERE_DEMI_PART_SEUL + (demiPartsEnfants - 1) * PLAFOND_DEMI_PART
    : demiPartsEnfants * PLAFOND_DEMI_PART;

  return impotSans - Math.min(impotSans - impotAvec, plafond);
}

function appliquerDecote(impot: number, couple: boolean): number {
  const [seuil, base] = couple
    ? [DECOTE_COUPLE_SEUIL, DECOTE_COUPLE_BASE]
    : [DECOTE_SEUL_SEUIL, DECOTE_SEUL_BASE];
  if (impot >= seuil) return impot;
  const decote = Math.max(0, base - 0.75 * impot);
  return Math.max(0, impot - decote);
}

function calculerIR(
  revenu: number,
  partsBase: number,
  partsTotal: number,
  parentSeul: boolean,
  couple: boolean
): number {
  const brut = appliquerPlafonnementQF(revenu, partsBase, partsTotal, parentSeul);
  return Math.max(0, Math.round(appliquerDecote(brut, couple)));
}

function calculerParts(enfants: number, marie: boolean): number {
  let parts = marie ? 2 : 1;
  if (enfants >= 1) parts += 0.5;
  if (enfants >= 2) parts += 0.5;
  if (enfants >= 3) parts += enfants - 2; // 1 part entière à partir du 3ème enfant
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
  partsMaries: number;
  partsSeulPrincipal: number;
}

function calculerDroitsSuccession(patrimoine: number, marie: boolean): number {
  if (marie) return 0;
  // Concubin = étranger fiscalement : 60% après abattement de 1 594€
  const assiette = Math.max(0, patrimoine - 1594);
  return Math.round(assiette * 0.6);
}

export function simulerImpots(input: SimulationInput): SimulationResult {
  const { revenus1, revenus2, enfants, enfantsANaitre, patrimoine = 0 } = input;
  const totalEnfants = enfants + enfantsANaitre;

  // Scénario 1: Célibataires séparés (enfants rattachés au parent avec le + haut revenu)
  const enfantsParent1 = revenus1 >= revenus2 ? totalEnfants : 0;
  const enfantsParent2 = revenus1 < revenus2 ? totalEnfants : 0;
  const partsSeul1 = calculerParts(enfantsParent1, false);
  const partsSeul2 = calculerParts(enfantsParent2, false);
  const impot1Seul = calculerIR(revenus1, 1, partsSeul1, enfantsParent1 > 0, false);
  const impot2Seul = calculerIR(revenus2, 1, partsSeul2, enfantsParent2 > 0, false);
  const impotCelibataires = impot1Seul + impot2Seul;

  // Scénario 2: Mariés (déclaration commune)
  const partsMaries = calculerParts(totalEnfants, true);
  const impotMaries = calculerIR(revenus1 + revenus2, 2, partsMaries, false, true);

  // Scénario 3: Pacsés (même traitement fiscal que mariés depuis 2005)
  const impotPacses = impotMaries;

  const economieMarriage = impotCelibataires - impotMaries;
  const economiePacs = impotCelibataires - impotPacses;

  const droitsSuccessionConcubin = calculerDroitsSuccession(patrimoine, false);
  const droitsSuccessionMarie = calculerDroitsSuccession(patrimoine, true);
  const avantageSuccession = droitsSuccessionConcubin - droitsSuccessionMarie;

  const hasPatrimoine = patrimoine > 50000;
  let recommandation: 'mariage' | 'pacs' | 'rien';
  let explication: string;

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

  const partsSeulPrincipal = revenus1 >= revenus2 ? partsSeul1 : partsSeul2;

  return {
    impotCelibataires,
    impotMaries,
    impotPacses,
    economieMarriage,
    economiePacs,
    avantageSuccession,
    recommandation,
    explication,
    partsMaries,
    partsSeulPrincipal,
  };
}
