"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const isValid = useMemo(() => {
    return name.trim().length > 1 && email.trim().length > 4
  }, [name, email])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    void submitForm(e)
  }

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid || isSubmitting) return

    setIsSubmitting(true)
    setStatus("idle")

    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("email", email)
      formData.append("Entreprise", company || "Non précisé")
      formData.append("Téléphone", phone || "Non précisé")
      formData.append("Message", message || "Aucun message complémentaire")
      formData.append("_subject", "Demande de contact - Le Prix de l'Inaction")
      formData.append("_captcha", "false")
      formData.append("_template", "table")

      const response = await fetch("https://formsubmit.co/ajax/sf.florido-poka@luwai.fr", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Échec de l'envoi")
      }

      setStatus("success")
      setName("")
      setEmail("")
      setCompany("")
      setPhone("")
      setMessage("")
    } catch {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-spacing px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <Card className="border-2 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-heading">Vous préférez ne pas passer en visio ?</CardTitle>
            <CardDescription className="text-base">
              Laissez vos coordonnées, le message est envoyé directement dans ma boîte mail.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
                    Nom *
                  </label>
                  <Input
                    id="contact-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vous@entreprise.fr"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="contact-company" className="text-sm font-medium text-foreground">
                    Entreprise
                  </label>
                  <Input
                    id="contact-company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Nom de l'entreprise"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-phone" className="text-sm font-medium text-foreground">
                    Téléphone
                  </label>
                  <Input
                    id="contact-phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                  Message (optionnel)
                </label>
                <Input
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Vos besoins, contexte, urgence..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  disabled={!isValid || isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                </Button>
              </div>

              {status === "success" && (
                <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-md px-3 py-2">
                  Message envoyé. Je vous réponds rapidement.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
                  Impossible d&apos;envoyer le message pour le moment. Réessayez dans quelques instants.
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

