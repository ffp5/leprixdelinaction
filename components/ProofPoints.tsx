"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowTopRightOnSquareIcon,
  BeakerIcon,
  GlobeAltIcon,
  ChartBarIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline"

const proofPoints = [
  {
    icon: <BeakerIcon className="w-6 h-6" />,
    stat: "-40%",
    title: "Temps sur tâches d’écriture",
    description: "Accès à ChatGPT → 40% de temps en moins et +18% de qualité sur des tâches de rédaction pro.",
    sourceLabel: "MIT (Noy & Zhang, Science, 2023)",
    href: "https://economics.mit.edu/sites/default/files/inline-files/Noy_Zhang_1.pdf",
  },
  {
    icon: <GlobeAltIcon className="w-6 h-6" />,
    stat: "$2.6–$4.4T",
    title: "Valeur annuelle potentielle",
    description: "Estimation de valeur ajoutée annuelle de l’IA générative à l’échelle mondiale (63 cas d’usage).",
    sourceLabel: "McKinsey (MGI, 2023)",
    href: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier",
  },
  {
    icon: <ChartBarIcon className="w-6 h-6" />,
    stat: "74%",
    title: "N’arrivent pas à créer de la valeur",
    description: "La majorité des entreprises restent bloquées au stade pilotes. Les leaders IA surperforment en croissance et rentabilité.",
    sourceLabel: "BCG (Oct. 2024)",
    href: "https://www.bcg.com/press/24october2024-ai-adoption-in-2024-74-of-companies-struggle-to-achieve-and-scale-value",
  },
  {
    icon: <BuildingOffice2Icon className="w-6 h-6" />,
    stat: "10%",
    title: "des entreprises en France (≥10 salariés)",
    description: "En 2024, 10% utilisent au moins une technologie d’IA (vs 6% en 2023). L’écart se creuse.",
    sourceLabel: "INSEE (2024)",
    href: "https://www.insee.fr/fr/statistiques/8616837",
  },
  {
    icon: <BuildingOffice2Icon className="w-6 h-6" />,
    stat: "34%",
    title: "des PME utilisent l’IA",
    description: "Baromètre France Num 2025 : l’usage progresse vite (TPE 26%, PME 34%).",
    sourceLabel: "France Num (Baromètre 2025)",
    href: "https://www.francenum.gouv.fr/files/2025-09/Barom%C3%A8tre%20France%20Num%202025%20-%20Infographie%20VF.pdf",
  },
] as const

export default function ProofPoints() {
  return (
    <section className="section-spacing px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading tracking-tight">
            Le coût de l’inaction est <span className="text-accent">mesurable</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Pas une intuition. Des chiffres publics, des études peer-reviewed, et des tendances France/PME.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {proofPoints.map((p) => (
            <Card key={p.title} className="border-2 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="text-primary">{p.icon}</div>
                    <div>
                      <CardTitle className="text-xl font-heading">{p.stat}</CardTitle>
                      <CardDescription className="text-base">{p.title}</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs text-muted-foreground">{p.sourceLabel}</p>
                  <Button variant="link" size="sm" className="p-0 h-auto" asChild>
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                      Source
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

