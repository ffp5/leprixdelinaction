import type { Metadata } from "next"
import { Nunito_Sans, Rubik } from "next/font/google"
import "./globals.css"

const bodyFont = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const headingFont = Rubik({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Le Prix de l'Inaction | Calculateur IA pour PME",
  description: "Découvrez combien votre PME perd chaque jour en n'adoptant pas l'IA",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      </head>
      <body className={`${bodyFont.variable} ${headingFont.variable} antialiased`}>
        {children}
        <script src="https://assets.calendly.com/assets/external/widget.js" async />
      </body>
    </html>
  );
}
