"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  AcademicCapIcon,
  DocumentChartBarIcon,
  BuildingLibraryIcon,
  ArrowTopRightOnSquareIcon
} from "@heroicons/react/24/outline"

export default function Sources() {
  const sources = [
    {
      icon: <BuildingLibraryIcon className="w-6 h-6" />,
      title: "DARES",
      description: "Évolution des salaires de base dans le secteur privé",
      url: "https://dares.travail-emploi.gouv.fr/sites/default/files/0e273e439d6cfb7f5e63d9632c448a50/Acemo_T2%20definitifs_2025.pdf"
    },
    {
      icon: <DocumentChartBarIcon className="w-6 h-6" />,
      title: "France Num",
      description: "L'IA dans les PME et ETI françaises",
      url: "https://www.francenum.gouv.fr/magazine-du-numerique/lia-dans-les-pme-et-eti-francaises-une-revolution-tranquille"
    },
    {
      icon: <AcademicCapIcon className="w-6 h-6" />,
      title: "Bpifrance Le Lab",
      description: "Étude adoption IA PME françaises 2024",
      url: "https://lelab.bpifrance.fr/content/download/4745/pdf/2025-06_L'IA%20dans%20les%20PME%20et%20ETI%20fran%C3%A7aises_Etude%20Bpifrance%20Le%20Lab.pdf?disposition=inline"
    },
    {
      icon: <DocumentChartBarIcon className="w-6 h-6" />,
      title: "MIT Sloan",
      description: "Generative AI at Work",
      url: "https://economics.mit.edu/sites/default/files/inline-files/Noy_Zhang_1.pdf"
    },
    {
      icon: <AcademicCapIcon className="w-6 h-6" />,
      title: "Boston Consulting Group",
      description: "AI Adoption in 2024: 74% of Companies Struggle",
      url: "https://www.bcg.com/press/24october2024-ai-adoption-in-2024-74-of-companies-struggle-to-achieve-and-scale-value"
    }
  ]

  return (
    <section id="sources" className="section-spacing px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Méthodologie & <span className="text-accent">Sources</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des données fiables issues d&apos;institutions reconnues et d&apos;entretiens terrain
          </p>
        </div>

        {/* Methodology Card */}
        <Card className="mb-8 border-2 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Comment j&apos;ai réfléchi</CardTitle>
            <CardDescription className="text-base">
              Une approche scientifique basée sur des données vérifiables
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose prose-sm max-w-none text-foreground">
              <p className="text-muted-foreground leading-relaxed">
                Ce calculateur s&apos;appuie sur <span className="font-semibold text-foreground">63 entretiens</span> menés
                auprès de dirigeants de PME françaises, croisés avec des données institutionnelles vérifiées.
                La méthodologie combine :
              </p>
              <ul className="space-y-2 mt-4 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Analyse des coûts salariaux secteur privé (DARES 2025)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>État de l&apos;adoption IA dans les PME françaises (France Num, Bpifrance)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Gains de productivité avec l&apos;IA générative (MIT Sloan)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Difficultés de déploiement et coûts cachés (BCG 2024)</span>
                </li>
              </ul>
            </div>

          </CardContent>
        </Card>

        {/* Sources Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {sources.map((source, idx) => (
            <Card key={idx} className="border-2 hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-primary group-hover:text-accent transition-colors">
                    {source.icon}
                  </div>
                  <CardTitle className="text-lg">{source.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {source.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="link"
                  size="sm"
                  className="p-0 h-auto font-medium text-primary group-hover:text-accent"
                  asChild
                >
                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    Consulter la source
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full">
            <AcademicCapIcon className="w-5 h-5 text-accent" />
            <p className="text-sm font-semibold text-foreground">
              Basé sur <span className="text-accent">63 entretiens</span> avec des dirigeants de PME françaises
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
