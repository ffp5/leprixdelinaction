"use client"

import { Button } from "@/components/ui/button"
import { DocumentTextIcon, LightBulbIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline"
import CalendlyButton from "@/components/CalendlyButton"

export default function Navbar() {
  const scrollToCalculator = () => {
    const calculator = document.getElementById('calculator')
    calculator?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-lg font-bold tracking-tight text-foreground font-heading">
              Le Prix de l&apos;<span className="text-accent">Inaction</span>
            </h1>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="font-medium group"
            >
              <a href="#impact">
                <LightBulbIcon className="w-4 h-4 mr-2 group-hover:text-accent transition-colors" />
                Impact
              </a>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToCalculator}
              className="font-medium group"
            >
              Calculateur
            </Button>

            <Button
              variant="ghost"
              size="sm"
              asChild
              className="font-medium group hidden sm:inline-flex"
            >
              <a href="#contact">
                <ChatBubbleLeftRightIcon className="w-4 h-4 mr-2 group-hover:text-accent transition-colors" />
                Contact
              </a>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              asChild
              className="font-medium group hidden sm:inline-flex"
            >
              <a href="#sources">
                <DocumentTextIcon className="w-4 h-4 mr-2 group-hover:text-accent transition-colors" />
                Sources
              </a>
            </Button>

            <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex">
              <a href="https://luwai.fr" target="_blank" rel="noopener noreferrer">
                LUWAI.fr
              </a>
            </Button>

            <div className="hidden sm:block">
              <CalendlyButton
                size="sm"
                text="Prendre RDV"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold border-0"
                source="navbar"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
