// Calculation logic for AI inaction cost calculator
// Based on 63 interviews with French SME leaders

export type Secteur = 'conseil' | 'industrie' | 'commerce' | 'tech'
export type NiveauAdoption = 'Aucun' | 'Tests ponctuels' | 'Usage occasionnel' | 'Usage régulier'
export type CATranche = '0-1M' | '1-5M' | '5-10M' | '10M+'

export interface ProcessusManuel {
  redaction: number // 0-100%
  veille: number // 0-100%
  reporting: number // 0-100%
  autre: number // 0-100%
}

export interface CalculationResult {
  total: number
  inefficacite: number
  opportunites: number
  coutsCache: number
  parMois: number
  parJour: number
}

const secteurCoefficients: Record<Secteur, number> = {
  'conseil': 1.4,
  'industrie': 1.1,
  'commerce': 1.0,
  'tech': 1.6
}

const coutHoraireParTaille: Record<string, number> = {
  '10-25': 42,
  '26-50': 47,
  '51-100': 52,
  '101-200': 58,
  '201+': 65
}

function getCoutHoraire(nbSalaries: number): number {
  if (nbSalaries <= 25) return coutHoraireParTaille['10-25']
  if (nbSalaries <= 50) return coutHoraireParTaille['26-50']
  if (nbSalaries <= 100) return coutHoraireParTaille['51-100']
  if (nbSalaries <= 200) return coutHoraireParTaille['101-200']
  return coutHoraireParTaille['201+']
}

function getFacteurAdoption(niveauAdoption: NiveauAdoption): number {
  const facteurs: Record<NiveauAdoption, number> = {
    'Aucun': 1.0,
    'Tests ponctuels': 0.8,
    'Usage occasionnel': 0.6,
    'Usage régulier': 0.4
  }
  return facteurs[niveauAdoption]
}

function getCAValue(tranche: CATranche): number {
  const values: Record<CATranche, number> = {
    '0-1M': 500000,
    '1-5M': 3000000,
    '5-10M': 7500000,
    '10M+': 15000000
  }
  return values[tranche]
}

export function calculerCoutInaction(
  secteur: Secteur,
  nbSalaries: number,
  caTranche: CATranche,
  niveauAdoption: NiveauAdoption,
  processusManuel: ProcessusManuel
): CalculationResult {
  const coeff = secteurCoefficients[secteur]
  const coutHoraire = getCoutHoraire(nbSalaries)
  const ca = getCAValue(caTranche)

  // Calcul des heures perdues par semaine basé sur les processus manuels
  const heuresPerduesSemaine =
    (processusManuel.redaction / 100 * 0.4) +
    (processusManuel.veille / 100 * 0.3) +
    (processusManuel.reporting / 100 * 0.2) +
    (processusManuel.autre / 100 * 0.1)

  // Coût d'inefficacité annuel (temps perdu sur tâches automatisables)
  const inefficaciteAnnuelle =
    heuresPerduesSemaine * 52 * coutHoraire * nbSalaries * 0.7 * coeff

  // Opportunités de croissance manquées (12% du CA en moyenne)
  const croissanceManquee = ca * 0.12 * coeff

  // Coûts cachés (turnover, formation, erreurs humaines)
  const coutsCache = nbSalaries * 850 * coeff

  // Facteur d'adoption pour ajuster selon usage actuel IA
  const facteurAdoption = getFacteurAdoption(niveauAdoption)

  // Calculs finaux
  const coutTotal = (inefficaciteAnnuelle + croissanceManquee + coutsCache) * facteurAdoption

  return {
    total: Math.round(coutTotal),
    inefficacite: Math.round(inefficaciteAnnuelle * facteurAdoption),
    opportunites: Math.round(croissanceManquee * facteurAdoption),
    coutsCache: Math.round(coutsCache * facteurAdoption),
    parMois: Math.round(coutTotal / 12),
    parJour: Math.round(coutTotal / 250) // 250 jours ouvrés
  }
}

// Helper pour formater les montants
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}
