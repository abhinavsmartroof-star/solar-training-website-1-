"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/apple-icon.webp"
            alt="SmartRoof Solar Solutions"
            className="h-10 w-10 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-none tracking-tight">
              SmartRoof
            </span>
            <span className="text-xs text-muted-foreground">
              Solar Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/programs" className="text-sm font-medium transition-colors hover:text-primary">
            Training Programs
          </Link>
          <Link href="/certificate" className="text-sm font-medium transition-colors hover:text-primary">
            Certificate & Jobs
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact Us
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <a href="tel:9599474141" className="hidden items-center gap-2 md:flex">
            <Button variant="outline" size="sm">
              <Phone className="h-4 w-4" />
              <span>9599474141</span>
            </Button>
          </a>
          <Link href="/register">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Register Now
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <nav className="container flex flex-col gap-4 px-4 py-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/programs"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Training Programs
            </Link>
            <Link
              href="/certificate"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Certificate & Jobs
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <a href="tel:9599474141" className="border-t border-border pt-4">
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                <Phone className="h-4 w-4" />
                <span>Call: 9599474141</span>
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
