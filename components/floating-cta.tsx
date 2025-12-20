"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a href="tel:9599474141">
        <Button
          size="lg"
          className="h-14 rounded-full bg-primary px-6 text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-xl"
        >
          <Phone className="h-5 w-5 animate-pulse" />
          <span className="ml-2 font-semibold">Call Now</span>
        </Button>
      </a>
    </div>
  )
}
