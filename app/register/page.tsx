import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { RegistrationForm } from "@/components/registration-form"

export default function RegisterPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight lg:text-5xl">
              Register for <span className="text-primary">Solar Training</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
              Fill out the form below to enroll in our professional solar training program
            </p>
          </div>

          <RegistrationForm />

          {/* Contact Info */}
          <div className="mx-auto mt-8 max-w-2xl text-center">
            <p className="text-sm text-muted-foreground">
              Need help with registration? Call us at{" "}
              <a href="tel:9599474141" className="font-semibold text-primary hover:underline">
                9599474141
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
