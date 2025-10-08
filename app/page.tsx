import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Calculator from "@/components/Calculator"
import Sources from "@/components/Sources"

export const metadata: Metadata = {
  title: "Calculez vos pertes dues à l'inaction IA | Le Prix de l'Inaction",
  description: "Découvrez combien votre PME perd chaque jour en n'adoptant pas l'IA. Calculateur scientifique basé sur 63 entretiens dirigeants français.",
  keywords: ["coût inaction IA", "ROI intelligence artificielle", "calculateur IA PME", "pertes financières IA"],
  openGraph: {
    title: "Votre PME perd de l'argent chaque jour sans IA",
    description: "Calculateur scientifique : découvrez vos vraies pertes financières",
    url: "https://leprixdelinaction.fr",
    siteName: "Le Prix de l'Inaction",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculez vos pertes dues à l'inaction IA",
    description: "Découvrez combien votre PME perd chaque jour en n'adoptant pas l'IA",
  }
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <Hero />
        <Calculator />
        <Sources />
      </main>
    </>
  )
}
