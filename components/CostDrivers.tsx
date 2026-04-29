import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline"

const drivers = [
  {
    icon: <ArrowTrendingDownIcon className="w-6 h-6 text-accent" />,
    title: "Inefficacité",
    description: "Temps passé sur des tâches répétitives qui peuvent être assistées (rédaction, recherche, reporting).",
    bullets: ["Temps de cycle plus long", "Qualité inégale", "Coût salarial caché"],
  },
  {
    icon: <ArrowTrendingUpIcon className="w-6 h-6 text-primary" />,
    title: "Croissance manquée",
    description: "Moins d’opportunités captées faute de vitesse (prospection, offres, réponse client, contenus).",
    bullets: ["Réactivité commerciale", "Conversion plus faible", "Moins de volume sans recruter"],
  },
  {
    icon: <ExclamationTriangleIcon className="w-6 h-6 text-orange-600" />,
    title: "Coûts cachés",
    description: "Erreurs, friction interne, turnover et formation. L’inaction IA fatigue vos équipes.",
    bullets: ["Erreurs de process", "Burnout administratif", "Retard de compétences"],
  },
] as const

export default function CostDrivers() {
  return (
    <section className="section-spacing px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading tracking-tight">
            Ce que vous perdez <span className="text-accent">vraiment</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            L’IA n’est pas “un outil de plus”. C’est un multiplicateur de vitesse, de qualité et de capacité.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {drivers.map((d) => (
            <Card key={d.title} className="border-2 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {d.icon}
                  <div>
                    <CardTitle className="text-xl font-heading">{d.title}</CardTitle>
                    <CardDescription className="text-base">{d.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {d.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-primary/70" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

