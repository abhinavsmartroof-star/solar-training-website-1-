import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import {
  Award,
  Briefcase,
  CheckCircle2,
  Users,
  TrendingUp,
  Building2,
  GraduationCap,
  Phone,
  ArrowRight,
  FileCheck,
  Handshake,
  Target,
} from "lucide-react"

export default function CertificatePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Award className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-balance text-4xl font-bold tracking-tight lg:text-5xl">
            Industry-Recognized <span className="text-primary">Certification</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Earn a professional certificate and get comprehensive job placement support to launch your solar career
          </p>
        </div>
      </section>

      {/* Certificate Preview Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Certificate Preview */}
            <div>
              <Card className="overflow-hidden border-2 border-primary/20 shadow-xl">
                <div className="aspect-[1.4/1] bg-gradient-to-br from-card via-card to-muted/30 p-8">
                  <div className="flex h-full flex-col justify-between">
                    {/* Header */}
                    <div className="text-center">
                      <div className="mb-4 flex items-center justify-center gap-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-primary-foreground"
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
                        <div>
                          <div className="text-xl font-bold leading-none">Smartroof</div>
                          <div className="text-xs text-muted-foreground">Solar Solutions</div>
                        </div>
                      </div>
                      <div className="border-b border-primary/20 pb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                        Certificate of Completion
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4 text-center">
                      <p className="text-sm text-muted-foreground">This is to certify that</p>
                      <div className="border-b-2 border-primary/40 pb-2 text-2xl font-bold">[Student Name]</div>
                      <p className="text-sm text-muted-foreground">has successfully completed</p>
                      <div className="text-xl font-semibold text-primary">[Training Program Name]</div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-end justify-between border-t border-border pt-4">
                      <div className="text-center">
                        <div className="h-px w-24 bg-border" />
                        <p className="mt-1 text-xs text-muted-foreground">Director Signature</p>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Date: <span className="font-medium">[Date]</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Sample certificate design • Actual certificate may vary
              </p>
            </div>

            {/* Certificate Details */}
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight lg:text-4xl">
                Your <span className="text-primary">Professional Certificate</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Industry Recognition</h3>
                    <p className="text-sm text-muted-foreground">
                      Certificates are recognized by leading solar companies and accepted across the industry
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <FileCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Verified Credentials</h3>
                    <p className="text-sm text-muted-foreground">
                      Each certificate includes a unique ID for verification and authentication
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Skill Validation</h3>
                    <p className="text-sm text-muted-foreground">
                      Proves your competency in solar installation, maintenance, and safety protocols
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm font-medium">
                    <CheckCircle2 className="mr-2 inline h-4 w-4 text-primary" />
                    Delivered immediately upon successful training completion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Assistance Section */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Comprehensive <span className="text-primary">Job Assistance</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We don't just train you — we help you launch your career with dedicated placement support
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Handshake,
                title: "Direct Placement Support",
                description: "Connect with our network of 50+ solar companies actively hiring trained professionals",
              },
              {
                icon: Users,
                title: "Interview Preparation",
                description: "Get guidance on resume building, interview techniques, and professional presentation",
              },
              {
                icon: Building2,
                title: "Company Connections",
                description:
                  "Access to exclusive job opportunities with leading solar installation and maintenance firms",
              },
              {
                icon: Target,
                title: "Career Counseling",
                description: "One-on-one sessions to help you identify the best career path in the solar industry",
              },
              {
                icon: TrendingUp,
                title: "Skill Enhancement",
                description: "Ongoing support and additional training resources to advance your solar career",
              },
              {
                icon: FileCheck,
                title: "Job Readiness",
                description: "Complete documentation support including resume, portfolio, and reference letters",
              },
            ].map((item, i) => (
              <Card key={i} className="group transition-all hover:border-primary/50 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Stats */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Our <span className="text-primary">Placement Success</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Real results from our training and job assistance program
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="mb-2 text-4xl font-bold text-primary lg:text-5xl">85%</div>
                <p className="font-medium">Placement Rate</p>
                <p className="mt-1 text-sm text-muted-foreground">Students placed within 3 months</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="mb-2 text-4xl font-bold text-primary lg:text-5xl">50+</div>
                <p className="font-medium">Partner Companies</p>
                <p className="mt-1 text-sm text-muted-foreground">Leading solar firms in our network</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="mb-2 text-4xl font-bold text-primary lg:text-5xl">₹15-25K</div>
                <p className="font-medium">Average Starting Salary</p>
                <p className="mt-1 text-sm text-muted-foreground">Monthly earnings for graduates</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight lg:text-4xl">
              What to <span className="text-primary">Expect</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: "During Training",
                  points: [
                    "Comprehensive practical and theoretical learning",
                    "Real-world project experience",
                    "Safety certification and protocols",
                  ],
                },
                {
                  title: "After Completion",
                  points: [
                    "Professional certificate with unique verification ID",
                    "Access to job portal and opportunities",
                    "Resume and interview preparation support",
                  ],
                },
                {
                  title: "Ongoing Support",
                  points: [
                    "Lifetime access to our alumni network",
                    "Job referrals and placement assistance",
                    "Continuous skill development resources",
                  ],
                },
              ].map((section, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-lg font-semibold">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16 text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">Start Your Certified Solar Career Today</h2>
          <p className="mx-auto mt-4 max-w-2xl text-secondary-foreground/90">
            Register now and get access to professional certification and job placement support
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
