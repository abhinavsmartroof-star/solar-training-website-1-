import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatCounter } from "@/components/stat-counter"
import { FloatingCTA } from "@/components/floating-cta"
import {
  CheckCircle2,
  Award,
  Briefcase,
  Users,
  Zap,
  Shield,
  GraduationCap,
  Phone,
  ArrowRight,
  Sun,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-700/25" />
        <div className="container relative mx-auto px-4 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center space-y-8">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Sun className="h-4 w-4" />
                <span>Professional Solar Training Institute</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-balance text-4xl font-bold tracking-tight lg:text-6xl">
                  Build Your Career in <span className="text-primary">Solar Energy</span>
                </h1>

                <p className="text-pretty text-lg text-muted-foreground lg:text-xl">
                  Professional Solar Training • Industry Certification • Job Assistance*
                </p>

                <p className="text-pretty text-muted-foreground">
                  Join Smartroof Solar Solutions and become a certified solar professional.
                  Learn from industry experts with hands-on training and Job Assistance*.
                </p>

                <p className="text-xs text-muted-foreground">
                  *Job assistance for top candidates post evaluation
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/register">
                  <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
                    Register for Training
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:9599474141">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                    <Phone className="mr-2 h-4 w-4" />
                    Call: 9599474141
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Certified Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Practical Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Job Assistance*</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-auto lg:h-full">
                <img
                  src="/solar-panel-technician-installing-panels-on-roofto.jpg"
                  alt="Solar panel installation training"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />

                <Card className="absolute bottom-6 left-6 right-6 border-0 bg-card/95 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">500+</div>
                        <div className="text-xs text-muted-foreground">Trained</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">1000+</div>
                        <div className="text-xs text-muted-foreground">Installations</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">15+</div>
                        <div className="text-xs text-muted-foreground">Experts</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-muted/30 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <StatCounter end={500} suffix="+" />
              <p className="mt-2 text-muted-foreground">Trained Candidates</p>
              <p className="mt-1 text-sm text-muted-foreground">Successfully certified professionals</p>
            </div>
            <div className="text-center">
              <StatCounter end={1000} suffix="+" />
              <p className="mt-2 text-muted-foreground">Solar Installations</p>
              <p className="mt-1 text-sm text-muted-foreground">Projects completed by our students</p>
            </div>
            <div className="text-center">
              <StatCounter end={15} suffix="+" />
              <p className="mt-2 text-muted-foreground">Industry Experts</p>
              <p className="mt-1 text-sm text-muted-foreground">Experienced trainers and mentors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight lg:text-4xl">
              Why Choose <span className="text-primary">Smartroof Solar Solutions?</span>
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground lg:text-lg">
              Industry-leading solar training with proven results and career support
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                title: "Professional Certification",
                description: "Receive industry-recognized certification upon completion of your training program.",
              },
              {
                icon: Users,
                title: "Expert Trainers",
                description: "Learn from experienced solar professionals with years of field experience.",
              },
              {
                icon: Zap,
                title: "Hands-On Training",
                description: "Practical, on-site training with real solar installations and equipment.",
              },
              {
                icon: Briefcase,
                title: "Job Assistance*",
                description: "Placement guidance and industry connections.",
              },
              {
                icon: Shield,
                title: "Safety First",
                description: "Comprehensive safety training and protocols for all procedures.",
              },
              {
                icon: Award,
                title: "Industry Standards",
                description: "Training curriculum aligned with latest industry practices and standards.",
              },
            ].map((feature, index) => (
              <Card key={index} className="group transition-all hover:shadow-lg hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            *Job assistance for top candidates post evaluation
          </p>
        </div>
      </section>

      {/* Training Preview Section */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight lg:text-4xl">
              Our <span className="text-primary">Training Programs</span>
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground lg:text-lg">
              Choose the right solar training path for your career goals
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Solar Foundation Course */}
            <Card className="group overflow-hidden transition-all hover:shadow-xl hover:border-primary/50">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/worker-cleaning-solar-panels.jpg"
                  alt="Solar foundation course"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                  1 Week
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-3 text-2xl font-bold">Solar Foundation Course</h3>
                <p className="mb-4 text-muted-foreground">
                  Learn solar basics, safety practices, panel cleaning techniques, and field fundamentals.
                </p>
                <ul className="mb-6 space-y-2">
                  {[
                    "Panel cleaning techniques",
                    "Safety equipment usage",
                    "Maintenance protocols",
                    "On-site practical training",
                    "Certificate upon completion",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/programs#foundation">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Solar Masters Course */}
            <Card className="group overflow-hidden transition-all hover:shadow-xl hover:border-primary/50">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/solar-technician-installing-panels-wiring.jpg"
                  alt="Solar masters course"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                  2 Weeks
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-3 text-2xl font-bold">Solar Masters Course</h3>
                <p className="mb-4 text-muted-foreground">
                  Advanced training in solar panel installation, wiring, inverters, and system maintenance.
                </p>
                <ul className="mb-6 space-y-2">
                  {[
                    "Solar panel installation",
                    "Electrical wiring & inverters",
                    "Site survey & planning",
                    "System maintenance",
                    "Certificate + job assistance*",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/programs#masters">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16 text-secondary-foreground lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight lg:text-4xl">
            Ready to Start Your Solar Career?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-secondary-foreground/90">
            Join hundreds of successful graduates and build a rewarding career in the growing solar industry.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/register">
              <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
                Register for Training
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:9599474141">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-secondary-foreground/20 bg-secondary-foreground/10 text-secondary-foreground hover:bg-secondary-foreground/20 sm:w-auto"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call: 9599474141
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
