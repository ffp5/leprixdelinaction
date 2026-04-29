"use client"

import CalendlyButton from "@/components/CalendlyButton"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircleIcon } from "@heroicons/react/24/outline"

export default function NextStepCTA() {
  return (
    <section className="section-spacing px-4">
      <div className="max-w-6xl mx-auto">
        <Card className="border-2 shadow-xl overflow-hidden py-0 gap-0 md:min-h-[320px]">
          <CardHeader className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-b py-7">
            <CardTitle className="text-3xl font-heading tracking-tight">
              Vous voulez transformer ces pertes en <span className="text-accent">gains</span> ?
            </CardTitle>
            <CardDescription className="text-base">
              Un appel de 15 minutes suffit pour cadrer les 2–3 cas d’usage qui auront l’impact le plus rapide.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-10 pb-8 space-y-7">
            <div className="grid md:grid-cols-3 gap-3 text-sm text-muted-foreground">
              {[
                "Audit rapide de vos processus (où l’IA paie vite)",
                "Estimation ROI + plan 30 jours (priorités, risques, gouvernance)",
                "Démo d’outils + exemples concrets selon votre secteur",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5" />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <CalendlyButton
                source="final-cta"
                text="Réserver mon appel"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              />
              <Button variant="outline" size="lg" className="py-6 text-lg rounded-xl" asChild>
                <a href="https://luwai.fr" target="_blank" rel="noopener noreferrer">
                  Découvrir LUWAI.fr
                </a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              Pas de spam. Vous repartez avec une checklist claire (même si on ne travaille pas ensemble).
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

