"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"

type TabId = "chiffres" | "pertes" | "plan"

const tabs: { id: TabId; label: string }[] = [
  { id: "chiffres", label: "Chiffres clés" },
  { id: "pertes", label: "Ce que vous perdez" },
  { id: "plan", label: "Plan d'action" },
]

export default function InfoTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("chiffres")

  return (
    <section id="impact" className="section-spacing px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight">
            Comprendre l&apos;impact, sans surcharge
          </h2>
          <p className="text-muted-foreground text-lg">
            Les informations clés sont regroupées en 3 onglets.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id ? "bg-primary text-primary-foreground" : ""}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        <Card className="border-2 shadow-sm">
          {activeTab === "chiffres" && (
            <>
              <CardHeader>
                <CardTitle className="font-heading">Les preuves chiffrées</CardTitle>
                <CardDescription>Pourquoi l&apos;inaction coûte cher, chiffres à l&apos;appui.</CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg border p-4">
                  <p className="text-2xl font-black text-accent">-40%</p>
                  <p className="font-semibold">temps sur tâches d&apos;écriture</p>
                  <p className="text-muted-foreground mt-1">Avec GenAI sur tâches pro standardisées.</p>
                </div>
                <div className="rounded-lg border p-4">
                  <p className="text-2xl font-black text-accent">$2.6–$4.4T</p>
                  <p className="font-semibold">de valeur annuelle potentielle</p>
                  <p className="text-muted-foreground mt-1">Estimation de l&apos;impact économique global.</p>
                </div>
                <div className="rounded-lg border p-4">
                  <p className="text-2xl font-black text-accent">74%</p>
                  <p className="font-semibold">des entreprises peinent à scaler</p>
                  <p className="text-muted-foreground mt-1">Le vrai risque: rester bloqué en phase test.</p>
                </div>
                <div className="rounded-lg border p-4">
                  <p className="text-2xl font-black text-accent">10%</p>
                  <p className="font-semibold">d&apos;adoption IA en France (2024)</p>
                  <p className="text-muted-foreground mt-1">L&apos;écart entre entreprises se creuse rapidement.</p>
                </div>
              </CardContent>
            </>
          )}

          {activeTab === "pertes" && (
            <>
              <CardHeader>
                <CardTitle className="font-heading">Les 3 pertes invisibles</CardTitle>
                <CardDescription>Ce que votre résultat financier final masque souvent.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="rounded-lg border p-4">
                  <p className="font-semibold">1) Inefficacité opérationnelle</p>
                  <p className="text-muted-foreground mt-1">
                    Trop d&apos;heures humaines sur rédaction, veille, reporting et administratif.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <p className="font-semibold">2) Croissance manquée</p>
                  <p className="text-muted-foreground mt-1">
                    Réponses plus lentes, moins d&apos;offres sorties, moins de leads traités.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <p className="font-semibold">3) Coûts cachés</p>
                  <p className="text-muted-foreground mt-1">
                    Fatigue des équipes, erreurs évitables, retard de montée en compétences.
                  </p>
                </div>
              </CardContent>
            </>
          )}

          {activeTab === "plan" && (
            <>
              <CardHeader>
                <CardTitle className="font-heading">Comment passer à l&apos;action</CardTitle>
                <CardDescription>Simple: diagnostiquer, prioriser, déployer vite.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <ol className="space-y-2 text-muted-foreground">
                  <li>1. Identifier 2 à 3 processus à ROI rapide.</li>
                  <li>2. Chiffrer les gains attendus (temps, qualité, revenus).</li>
                  <li>3. Déployer en 30 jours avec suivi des KPI.</li>
                </ol>
                <Button variant="outline" asChild>
                  <a href="#sources" className="inline-flex items-center gap-1">
                    Voir les sources et méthodologie
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </section>
  )
}

