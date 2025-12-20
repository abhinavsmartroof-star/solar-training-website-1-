import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import {
  CheckCircle2,
  Clock,
  Award,
  Briefcase,
  Users,
  BookOpen,
  Shield,
  Wrench,
  ArrowRight,
  Zap,
  FileCheck,
} from "lucide-react"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight lg:text-5xl">
            Solar <span className="text-primary">Training Programs</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Professional certification programs designed to launch your career in the solar energy industry
          </p>
        </div>
      </section>

      {/* Program Comparison */}
      <section className="border-b border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-primary/50">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold">Solar Cleaner Training</h3>
                <div className="mt-2 text-3xl font-bold text-primary">1 Week</div>
                <p className="mt-2 text-sm text-muted-foreground">Entry-level solar maintenance</p>
              </CardContent>
            </Card>
            <Card className="border-primary/50">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold">Solar Technician Training</h3>
                <div className="mt-2 text-3xl font-bold text-primary">2 Weeks</div>
                <p className="mt-2 text-sm text-muted-foreground">Advanced installation & electrical</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solar Cleaner Training Details */}
      <section id="cleaner" className="scroll-mt-20 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/worker-cleaning-solar-panels.jpg"
                  alt="Solar cleaner training"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Clock className="h-4 w-4" />
                <span>1 Week Program</span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">Solar Cleaner Training</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Master the essential skills of solar panel cleaning and maintenance. This program is perfect for those
                looking to start a career in solar energy with minimal prior experience.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                    <BookOpen className="h-5 w-5 text-primary" />
                    What You'll Learn
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Professional solar panel cleaning techniques",
                      "Safety protocols and equipment usage",
                      "Tools and materials identification",
                      "Maintenance schedules and best practices",
                      "On-site practical training sessions",
                      "Quality control and inspection methods",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                    <Award className="h-5 w-5 text-primary" />
                    Program Benefits
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { icon: FileCheck, text: "Industry Certificate" },
                      { icon: Briefcase, text: "Job Assistance" },
                      { icon: Users, text: "Expert Trainers" },
                      { icon: Shield, text: "Safety Training" },
                    ].map((benefit, i) => (
                      <Card key={i}>
                        <CardContent className="flex items-center gap-3 p-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <benefit.icon className="h-5 w-5" />
                          </div>
                          <span className="text-sm font-medium">{benefit.text}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-muted/30 p-6">
                  <h4 className="mb-2 font-semibold">Prerequisites</h4>
                  <p className="text-sm text-muted-foreground">
                    No prior experience required. Basic physical fitness and willingness to work at heights.
                  </p>
                </div>

                <Link href="/register">
                  <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
                    Register for Solar Cleaner Training
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Solar Technician Training Details */}
      <section id="technician" className="scroll-mt-20 bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Clock className="h-4 w-4" />
                <span>2 Week Program</span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">Solar Technician Training</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Comprehensive training program covering solar panel installation, electrical wiring, inverter setup, and
                complete system maintenance. Ideal for those seeking advanced technical skills.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                    <BookOpen className="h-5 w-5 text-primary" />
                    What You'll Learn
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Solar panel installation and mounting systems",
                      "Electrical wiring and circuit connections",
                      "Inverter installation and configuration",
                      "Battery storage system setup",
                      "Site survey and planning techniques",
                      "System troubleshooting and maintenance",
                      "Safety regulations and compliance",
                      "Load calculation and system sizing",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                    <Zap className="h-5 w-5 text-primary" />
                    Program Benefits
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { icon: FileCheck, text: "Professional Certificate" },
                      { icon: Briefcase, text: "Job Placement Support" },
                      { icon: Wrench, text: "Hands-On Experience" },
                      { icon: Users, text: "Industry Mentorship" },
                    ].map((benefit, i) => (
                      <Card key={i}>
                        <CardContent className="flex items-center gap-3 p-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <benefit.icon className="h-5 w-5" />
                          </div>
                          <span className="text-sm font-medium">{benefit.text}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-card p-6">
                  <h4 className="mb-2 font-semibold">Prerequisites</h4>
                  <p className="text-sm text-muted-foreground">
                    Basic understanding of electrical concepts recommended. Experience in electrical or construction
                    work is beneficial but not mandatory.
                  </p>
                </div>

                <Link href="/register">
                  <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
                    Register for Solar Technician Training
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/solar-technician-installing-panels-wiring.jpg"
                  alt="Solar technician training"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Our <span className="text-primary">Training Process</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A structured approach to ensure you gain both theoretical knowledge and practical expertise
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Registration",
                description: "Complete your registration and submit required documents",
              },
              {
                step: "02",
                title: "Classroom Training",
                description: "Learn theoretical concepts and industry best practices",
              },
              {
                step: "03",
                title: "Practical Training",
                description: "Hands-on experience with real solar installations",
              },
              {
                step: "04",
                title: "Certification & Placement",
                description: "Receive certificate and get job placement assistance",
              },
            ].map((item, i) => (
              <Card key={i} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 text-5xl font-bold text-primary/20">{item.step}</div>
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16 text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">Ready to Get Started?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-secondary-foreground/90">
            Register today and take the first step towards a rewarding career in solar energy
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/register">
              <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:9599474141">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-secondary-foreground/20 bg-secondary-foreground/10 text-secondary-foreground hover:bg-secondary-foreground/20 sm:w-auto"
              >
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
