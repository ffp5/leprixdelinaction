"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: {
        url: string
        prefill?: {
          name?: string
          email?: string
          customAnswers?: Record<string, string>
        }
      }) => void
    }
  }
}

type CalendlyButtonProps = {
  source?: string
  text?: string
  calendlyUsername?: string
  prefill?: {
    name?: string
    email?: string
    customAnswers?: Record<string, string>
  }
  className?: string
  variant?: React.ComponentProps<typeof Button>["variant"]
  size?: React.ComponentProps<typeof Button>["size"]
}

export default function CalendlyButton({
  source = "leprixdelinaction",
  text = "Prendre RDV (15 min)",
  calendlyUsername = "sf-florido-poka-luwai",
  prefill,
  className,
  variant = "default",
  size = "lg",
}: CalendlyButtonProps) {
  const onClick = () => {
    if (!window.Calendly) return

    const baseUrl = `https://calendly.com/${calendlyUsername}`
    const brandColors = new URLSearchParams({
      primary_color: "f97316",
      text_color: "0f172a",
      background_color: "f8fafc",
    })
    const utmParams = new URLSearchParams({
      utm_source: source,
      utm_medium: "website",
      utm_campaign: "discovery-calls",
    })

    const calendlyUrl = `${baseUrl}?${brandColors.toString()}&${utmParams.toString()}`
    window.Calendly.initPopupWidget({ url: calendlyUrl, prefill: prefill || {} })
  }

  return (
    <Button
      type="button"
      onClick={onClick}
      variant={variant}
      size={size}
      className={className}
      aria-label={text}
    >
      {text}
    </Button>
  )
}

