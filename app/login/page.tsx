"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Mail, Lock, Phone } from "lucide-react"

export default function LoginPage() {
  const [loginMethod, setLoginMethod] = useState<"email" | "otp">("email")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    mobile: "",
    otp: "",
  })
  const [otpSent, setOtpSent] = useState(false)

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email/password login
    console.log("Email login:", formData.email, formData.password)
  }

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault()
    // Send OTP to mobile
    console.log("Sending OTP to:", formData.mobile)
    setOtpSent(true)
  }

  const handleOTPLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Verify OTP and login
    console.log("OTP login:", formData.mobile, formData.otp)
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-md">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Welcome Back</CardTitle>
                <CardDescription>Login to access your solar training dashboard</CardDescription>
              </CardHeader>

              <CardContent>
                {/* Login Method Selector */}
                <div className="mb-6 grid grid-cols-2 gap-2 rounded-lg bg-muted p-1">
                  <Button
                    type="button"
                    variant={loginMethod === "email" ? "default" : "ghost"}
                    className={
                      loginMethod === "email"
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "hover:bg-transparent"
                    }
                    onClick={() => {
                      setLoginMethod("email")
                      setOtpSent(false)
                    }}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Button>
                  <Button
                    type="button"
                    variant={loginMethod === "otp" ? "default" : "ghost"}
                    className={
                      loginMethod === "otp"
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "hover:bg-transparent"
                    }
                    onClick={() => {
                      setLoginMethod("otp")
                    }}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    OTP
                  </Button>
                </div>

                {/* Email/Password Login */}
                {loginMethod === "email" && (
                  <form onSubmit={handleEmailLogin} className="space-y-4 animate-fade-in">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          className="pl-10"
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Login
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}

                {/* OTP Login */}
                {loginMethod === "otp" && (
                  <div className="animate-fade-in">
                    {!otpSent ? (
                      <form onSubmit={handleSendOTP} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="mobile">Mobile Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="mobile"
                              type="tel"
                              placeholder="Enter 10-digit mobile number"
                              pattern="[0-9]{10}"
                              className="pl-10"
                              value={formData.mobile}
                              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                              required
                            />
                          </div>
                        </div>

                        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          Send OTP
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    ) : (
                      <form onSubmit={handleOTPLogin} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="otp">Enter OTP</Label>
                          <Input
                            id="otp"
                            type="text"
                            placeholder="Enter 6-digit OTP"
                            maxLength={6}
                            pattern="[0-9]{6}"
                            value={formData.otp}
                            onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                            required
                          />
                          <p className="text-xs text-muted-foreground">
                            OTP sent to {formData.mobile}.{" "}
                            <button
                              type="button"
                              onClick={() => setOtpSent(false)}
                              className="text-primary hover:underline"
                            >
                              Change number
                            </button>
                          </p>
                        </div>

                        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          Verify & Login
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>

                        <Button
                          type="button"
                          variant="outline"
                          className="w-full bg-transparent"
                          onClick={handleSendOTP}
                        >
                          Resend OTP
                        </Button>
                      </form>
                    )}
                  </div>
                )}

                {/* Divider */}
                <div className="my-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs text-muted-foreground">OR</span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                {/* Register Link */}
                <div className="text-center text-sm">
                  <span className="text-muted-foreground">Don't have an account? </span>
                  <Link href="/register" className="font-semibold text-primary hover:underline">
                    Register for training
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Help Text */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Need help? Contact us at{" "}
                <a href="tel:9599474141" className="font-semibold text-primary hover:underline">
                  9599474141
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
