import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: "Smartroof Solar Solutions | Professional Solar Training & Certification",
  description:
    "Build your career in solar energy with Smartroof Solar Solutions. Professional solar training, certification, and job support in Gurgaon, Haryana.",
  keywords:
    "solar training, solar certification, solar technician course, solar panel training, solar jobs, Gurgaon",
  generator: "v0.app",

  icons: {
    icon: "/apple-icon.webp",     // ✅ Browser favicon
    shortcut: "/apple-icon.webp", // ✅ Shortcut icon
    apple: "/apple-icon.webp",    // ✅ iPhone / iOS
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
