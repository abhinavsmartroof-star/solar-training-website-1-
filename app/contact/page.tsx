"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 3000)
  }

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight lg:text-5xl">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Have questions about our solar training programs? We're here to help you get started
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="group transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Call Us</h3>
                <a href="tel:9599474141" className="text-lg font-bold text-primary hover:underline">
                  9599474141
                </a>
                <p className="mt-2 text-sm text-muted-foreground">Mon-Sat: 9:00 AM - 6:00 PM</p>
              </CardContent>
            </Card>

            <Card className="group transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Email Us</h3>
                <a
                  href="mailto:enquiry@gosmartroof.com"
                  className="text-lg font-bold text-primary hover:underline break-all"
                >
                  enquiry@gosmartroof.com
                </a>
                <p className="mt-2 text-sm text-muted-foreground">We'll respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="group transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Visit Us</h3>
                <p className="text-sm font-medium">Unitech Cyber Park</p>
                <p className="text-sm text-muted-foreground">Gurgaon, Haryana</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight lg:text-4xl">
                Send us a <span className="text-primary">Message</span>
              </h2>
              <p className="mb-8 text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible
              </p>

              {isSubmitted ? (
                <Card className="border-primary/50 bg-primary/5">
                  <CardContent className="p-8 text-center">
                    <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for contacting us. We'll get back to you soon.</p>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your inquiry or questions..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>

            {/* Map & Office Hours */}
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-2xl font-bold">Our Location</h3>
                <Card className="overflow-hidden">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2802447865635!2d77.03677731508236!3d28.49472298247018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d41d16ad4b%3A0x3f5b9c3e2b7d3c1a!2sUnitech%20Cyber%20Park!5e0!3m2!1sen!2sin!4v1649999999999!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Smartroof Solar Solutions Location"
                    />
                  </div>
                </Card>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">Office Hours</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium text-destructive">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    For immediate assistance, call us directly at{" "}
                    <a href="tel:9599474141" className="font-semibold text-primary hover:underline">
                      9599474141
                    </a>
                    . Our team is ready to answer your questions about solar training programs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight lg:text-4xl">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  question: "What are the training timings?",
                  answer:
                    "Training sessions are conducted from Monday to Saturday, 9:00 AM - 5:00 PM. We offer flexible batch timings to accommodate different schedules.",
                },
                {
                  question: "How long is the training program?",
                  answer:
                    "Solar Cleaner Training is 1 week, and Solar Technician Training is 2 weeks. Both programs include hands-on practical sessions.",
                },
                {
                  question: "Is accommodation provided?",
                  answer:
                    "We can help arrange accommodation for outstation students. Please contact us for details and partner hotel information.",
                },
                {
                  question: "What documents are required for registration?",
                  answer:
                    "You need a valid ID proof (Aadhar/PAN/Driving License), educational certificates, and passport-size photographs for registration.",
                },
              ].map((faq, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-semibold">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
