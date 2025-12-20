import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary-foreground"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none tracking-tight">Smartroof</span>
                <span className="text-xs text-muted-foreground">Solar Solutions</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional solar training and certification for a sustainable future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-muted-foreground transition-colors hover:text-primary">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link href="/certificate" className="text-muted-foreground transition-colors hover:text-primary">
                  Certificate & Jobs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Training Programs */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Training Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/programs#cleaner" className="text-muted-foreground transition-colors hover:text-primary">
                  Solar Cleaner Training
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#technician"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Solar Technician Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">Unitech Cyber Park, Gurgaon, Haryana</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:9599474141" className="text-muted-foreground transition-colors hover:text-primary">
                  9599474141
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:info@smartroofsolar.com"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  info@smartroofsolar.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Smartroof Solar Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
