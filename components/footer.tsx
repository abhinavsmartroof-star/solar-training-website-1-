import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* Logo Image (same as Header) */}
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
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Training Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/certificate"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Certificate & Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
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
                <Link
                  href="/programs#foundation"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Solar Foundation Course
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#masters"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Solar Masters Course
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
                <span className="text-muted-foreground">
                  Unitech Cyber Park, Gurgaon, Haryana
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:9599474141"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  9599474141
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:enquiry@gosmartroof.com"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  enquiry@gosmartroof.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} SmartRoof Solar Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
