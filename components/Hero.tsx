"use client"

import { Button } from "@/components/ui/button"
import { ArrowDownIcon, CalculatorIcon } from "@heroicons/react/24/outline"
import CountUp from "react-countup"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToCalculator = () => {
    const calculator = document.getElementById('calculator')
    calculator?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Subtle gradient background - Linear.app inspired */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30 -z-10" />

      <div className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance leading-tight">
          Calculez le <span className="text-accent">VRAI coût</span> de votre inaction IA
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Votre entreprise perd de l&apos;argent chaque jour. Découvrez combien exactement.
        </p>

        {/* Animated counter - key credibility metric */}
        <div className="inline-flex flex-col items-center gap-2 px-8 py-6 bg-card border border-border rounded-2xl shadow-sm">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl md:text-6xl font-black text-foreground">
              {isVisible && (
                <CountUp
                  end={2.3}
                  decimals={1}
                  duration={2}
                  separator=" "
                  decimal=","
                  suffix="M€"
                />
              )}
            </span>
          </div>
          <p className="text-sm md:text-base text-muted-foreground font-medium">
            perdus par jour par les PME françaises
          </p>
        </div>

        {/* Primary CTA - Stripe-inspired */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            onClick={scrollToCalculator}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 group"
            aria-label="Calculer mes pertes maintenant"
          >
            <CalculatorIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Calculer mes pertes maintenant
          </Button>

          <Button
            onClick={scrollToCalculator}
            variant="ghost"
            size="lg"
            className="font-medium group"
          >
            Voir comment ça marche
            <ArrowDownIcon className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>

        {/* Trust indicator */}
        <p className="text-sm text-muted-foreground pt-4">
          Basé sur <span className="font-semibold text-foreground">63 entretiens</span> avec des dirigeants de PME françaises
        </p>
      </div>
    </section>
  )
}
