"use client"

import { Button } from "@/components/ui/button"
import { DocumentTextIcon, LightBulbIcon } from "@heroicons/react/24/outline"

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
            <h1 className="text-lg font-bold text-foreground">
              Le Prix de l&apos;<span className="text-accent">Inaction</span>
            </h1>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToCalculator}
              className="font-medium group"
            >
              <LightBulbIcon className="w-4 h-4 mr-2 group-hover:text-accent transition-colors" />
              Prendre conscience
            </Button>

            <Button
              variant="ghost"
              size="sm"
              asChild
              className="font-medium group"
            >
              <a href="#sources">
                <DocumentTextIcon className="w-4 h-4 mr-2 group-hover:text-accent transition-colors" />
                Sources
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
