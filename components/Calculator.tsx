"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  ChartBarIcon,
  BuildingOfficeIcon,
  CpuChipIcon,
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
  ArrowLeftIcon
} from "@heroicons/react/24/outline"
import { calculerCoutInaction, formatCurrency, type Secteur, type NiveauAdoption, type CATranche } from "@/lib/calculator"
import CalendlyButton from "@/components/CalendlyButton"

type Step = 1 | 2 | 3

export default function Calculator() {
  const [step, setStep] = useState<Step>(1)

  // Step 1: Company profile
  const [secteur, setSecteur] = useState<Secteur>('conseil')
  const [nbSalaries, setNbSalaries] = useState<number>(50)
  const [caTranche, setCATranche] = useState<CATranche>('1-5M')

  // Step 2: AI adoption
  const [niveauAdoption, setNiveauAdoption] = useState<NiveauAdoption>('Aucun')
  const [redaction, setRedaction] = useState<number>(70)
  const [veille, setVeille] = useState<number>(60)
  const [reporting, setReporting] = useState<number>(50)
  const [autre, setAutre] = useState<number>(40)

  const results = calculerCoutInaction(
    secteur,
    nbSalaries,
    caTranche,
    niveauAdoption,
    { redaction, veille, reporting, autre }
  )

  const progressPercentage = (step / 3) * 100

  return (
    <section id="calculator" className="section-spacing px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Calculez vos pertes en <span className="text-accent">3 étapes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Évaluation scientifique basée sur votre profil d&apos;entreprise
          </p>

          {/* Progress indicator */}
          <div className="max-w-md mx-auto pt-4">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Étape {step} sur 3</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </div>

        {/* Calculator Card */}
        <Card className="shadow-xl border-2" aria-label="Calculateur de pertes IA">
          <CardHeader className="border-b bg-muted/30">
            <div className="flex items-center gap-3">
              {step === 1 && <BuildingOfficeIcon className="w-8 h-8 text-primary" />}
              {step === 2 && <CpuChipIcon className="w-8 h-8 text-primary" />}
              {step === 3 && <ChartBarIcon className="w-8 h-8 text-primary" />}
              <div>
                <CardTitle className="text-2xl">
                  {step === 1 && "Profil de votre entreprise"}
                  {step === 2 && "Usage actuel de l&apos;IA"}
                  {step === 3 && "Vos résultats"}
                </CardTitle>
                <CardDescription>
                  {step === 1 && "Environ 30 secondes"}
                  {step === 2 && "Environ 45 secondes"}
                  {step === 3 && "Calcul en temps réel"}
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-8 pb-8 space-y-6">
            {/* STEP 1: Company Profile */}
            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                {/* Secteur */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Secteur d&apos;activité <span className="text-accent">*</span>
                  </label>
                  <select
                    value={secteur}
                    onChange={(e) => setSecteur(e.target.value as Secteur)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    aria-label="Sélectionner votre secteur"
                  >
                    <option value="conseil">Conseil / Services</option>
                    <option value="industrie">Industrie</option>
                    <option value="commerce">Commerce</option>
                    <option value="tech">Tech / Digital</option>
                  </select>
                </div>

                {/* Nombre de salariés */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Nombre de salariés <span className="text-accent">*</span>
                  </label>
                  <Input
                    type="number"
                    min={10}
                    max={500}
                    value={nbSalaries}
                    onChange={(e) => setNbSalaries(Number(e.target.value))}
                    className="w-full"
                    aria-label="Nombre de salariés"
                  />
                  <p className="text-xs text-muted-foreground">Entre 10 et 500 salariés</p>
                </div>

                {/* CA annuel */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Chiffre d&apos;affaires annuel <span className="text-accent">*</span>
                  </label>
                  <select
                    value={caTranche}
                    onChange={(e) => setCATranche(e.target.value as CATranche)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    aria-label="Sélectionner votre CA"
                  >
                    <option value="0-1M">0 - 1M€</option>
                    <option value="1-5M">1M€ - 5M€</option>
                    <option value="5-10M">5M€ - 10M€</option>
                    <option value="10M+">10M€ +</option>
                  </select>
                </div>
              </div>
            )}

            {/* STEP 2: AI Adoption */}
            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                {/* Niveau d'adoption */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Niveau d&apos;adoption de l&apos;IA <span className="text-accent">*</span>
                  </label>
                  <select
                    value={niveauAdoption}
                    onChange={(e) => setNiveauAdoption(e.target.value as NiveauAdoption)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    aria-label="Niveau adoption IA"
                  >
                    <option value="Aucun">Aucun usage</option>
                    <option value="Tests ponctuels">Tests ponctuels</option>
                    <option value="Usage occasionnel">Usage occasionnel</option>
                    <option value="Usage régulier">Usage régulier</option>
                  </select>
                </div>

                <div className="pt-4 space-y-6">
                  <p className="text-sm font-semibold text-foreground">
                    Part des processus manuels (%) <span className="text-accent">*</span>
                  </p>

                  {/* Rédaction */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-sm text-foreground">Rédaction (emails, rapports, contenus)</label>
                      <span className="text-sm font-semibold text-primary">{redaction}%</span>
                    </div>
                    <input
                      type="range"
                      value={redaction}
                      onChange={(e) => setRedaction(Number(e.target.value))}
                      min={0}
                      max={100}
                      step={5}
                      className="w-full accent-primary cursor-pointer"
                      aria-label="Pourcentage processus manuels rédaction"
                    />
                  </div>

                  {/* Veille */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-sm text-foreground">Veille et recherche d&apos;information</label>
                      <span className="text-sm font-semibold text-primary">{veille}%</span>
                    </div>
                    <input
                      type="range"
                      value={veille}
                      onChange={(e) => setVeille(Number(e.target.value))}
                      min={0}
                      max={100}
                      step={5}
                      className="w-full accent-primary cursor-pointer"
                      aria-label="Pourcentage processus manuels veille"
                    />
                  </div>

                  {/* Reporting */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-sm text-foreground">Reporting et analyse de données</label>
                      <span className="text-sm font-semibold text-primary">{reporting}%</span>
                    </div>
                    <input
                      type="range"
                      value={reporting}
                      onChange={(e) => setReporting(Number(e.target.value))}
                      min={0}
                      max={100}
                      step={5}
                      className="w-full accent-primary cursor-pointer"
                      aria-label="Pourcentage processus manuels reporting"
                    />
                  </div>

                  {/* Autre */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-sm text-foreground">Autres tâches administratives</label>
                      <span className="text-sm font-semibold text-primary">{autre}%</span>
                    </div>
                    <input
                      type="range"
                      value={autre}
                      onChange={(e) => setAutre(Number(e.target.value))}
                      min={0}
                      max={100}
                      step={5}
                      className="w-full accent-primary cursor-pointer"
                      aria-label="Pourcentage processus manuels autres"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Results */}
            {step === 3 && (
              <div className="space-y-6 animate-fadeIn" aria-live="polite">
                {/* Main result */}
                <div className="text-center p-8 bg-accent/5 rounded-2xl border-2 border-accent/20">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Coût estimé de l&apos;inaction IA</p>
                  <p className="text-5xl md:text-6xl font-black text-accent mb-2">
                    {formatCurrency(results.total)}
                  </p>
                  <p className="text-sm text-muted-foreground">par an</p>
                </div>

                {/* Breakdown */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Inefficacité */}
                  <Card className="border-2">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <ArrowTrendingDownIcon className="w-5 h-5 text-accent" />
                        <CardTitle className="text-base">Inefficacité opérationnelle</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-black text-foreground mb-2">
                        {formatCurrency(results.inefficacite)}
                      </p>
                      <Progress
                        value={(results.inefficacite / results.total) * 100}
                        className="h-2 mb-2"
                      />
                      <p className="text-xs text-muted-foreground">
                        Temps perdu sur tâches automatisables
                      </p>
                    </CardContent>
                  </Card>

                  {/* Opportunités */}
                  <Card className="border-2">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <ArrowTrendingUpIcon className="w-5 h-5 text-green-600" />
                        <CardTitle className="text-base">Croissance manquée</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-black text-foreground mb-2">
                        {formatCurrency(results.opportunites)}
                      </p>
                      <Progress
                        value={(results.opportunites / results.total) * 100}
                        className="h-2 mb-2"
                      />
                      <p className="text-xs text-muted-foreground">
                        Opportunités commerciales non exploitées
                      </p>
                    </CardContent>
                  </Card>

                  {/* Coûts cachés */}
                  <Card className="border-2 md:col-span-2">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <ExclamationTriangleIcon className="w-5 h-5 text-orange-500" />
                        <CardTitle className="text-base">Coûts cachés</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-black text-foreground mb-2">
                        {formatCurrency(results.coutsCache)}
                      </p>
                      <Progress
                        value={(results.coutsCache / results.total) * 100}
                        className="h-2 mb-2"
                      />
                      <p className="text-xs text-muted-foreground">
                        Turnover, formation, erreurs humaines
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Par mois</p>
                    <p className="text-xl font-bold text-foreground">{formatCurrency(results.parMois)}</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Par jour</p>
                    <p className="text-xl font-bold text-foreground">{formatCurrency(results.parJour)}</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 space-y-3">
                  <CalendlyButton
                    source="calculator-results"
                    text="Transformer ces pertes (appel 15 min)"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                  />
                  <Button variant="outline" size="lg" className="w-full py-6 text-lg rounded-xl" asChild>
                    <a href="https://luwai.fr" target="_blank" rel="noopener noreferrer">
                      Voir comment LUWAI accompagne les PME
                    </a>
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Vous repartez avec un plan concret (cas d’usage, ROI, risques, priorités).
                  </p>
                </div>
              </div>
            )}
          </CardContent>

          {/* Navigation */}
          <div className="border-t p-6 flex justify-between items-center bg-muted/20">
            <Button
              variant="ghost"
              onClick={() => setStep((s) => Math.max(1, s - 1) as Step)}
              disabled={step === 1}
              className="group"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Précédent
            </Button>

            {step < 3 && (
              <Button
                onClick={() => setStep((s) => Math.min(3, s + 1) as Step)}
                className="bg-primary hover:bg-primary/90 group"
              >
                Suivant
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}

            {step === 3 && (
              <Button
                variant="outline"
                onClick={() => {
                  setStep(1)
                  // Reset to defaults
                }}
                className="group"
              >
                Recommencer
              </Button>
            )}
          </div>
        </Card>

        {/* Trust footer */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Méthodologie validée par <span className="font-semibold text-foreground">63 entretiens</span> auprès de dirigeants de PME françaises
        </p>
      </div>
    </section>
  )
}
