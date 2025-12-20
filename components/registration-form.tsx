"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, CheckCircle2, Upload } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const totalSteps = 4

  // ✅ BACKEND-COMPATIBLE KEYS
  const [formData, setFormData] = useState({
    full_name: "",
    age: "",
    education_qualification: "",
    mobile: "",
    email: "",
    city: "",
    state: "",
    pincode: "",
    has_experience: "N",          // Y / N
    training_program: "",         // CLEANER / TECHNICIAN
    id_proof_file: "",            // filename only (for now)
  })

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => currentStep < totalSteps && setCurrentStep(currentStep + 1)
  const prevStep = () => currentStep > 1 && setCurrentStep(currentStep - 1)

  // ✅ FINAL SUBMIT → STRUTS API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch(
        "http://localhost/solar/training_register_api.action",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData as any),
        }
      )

      const data = await res.json()

      if (data.status) {
        setIsSubmitted(true)
      } else {
        alert(data.error || "Registration failed")
      }
    } catch (err) {
      alert("Server error. Please try again.")
    }
  }

  // ✅ SUCCESS SCREEN
  if (isSubmitted) {
    return (
      <Card className="mx-auto max-w-2xl">
        <CardContent className="p-12 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>
          <h2 className="mb-4 text-2xl font-bold">Registration Successful!</h2>
          <p className="mb-6 text-muted-foreground">
            Our team will contact you within 24–48 hours.
          </p>
          <p className="text-sm">
            Call us at{" "}
            <a href="tel:9599474141" className="font-semibold text-primary">
              9599474141
            </a>
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader>
        <CardTitle>Training Registration</CardTitle>
        <CardDescription>Complete all steps to register</CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit}>

          {/* STEP 1 */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <Input placeholder="Full Name"
                value={formData.full_name}
                onChange={(e) => updateFormData("full_name", e.target.value)}
                required />

              <Input type="number" placeholder="Age"
                value={formData.age}
                onChange={(e) => updateFormData("age", e.target.value)}
                required />

              <Input placeholder="Education Qualification"
                value={formData.education_qualification}
                onChange={(e) => updateFormData("education_qualification", e.target.value)}
                required />
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <Input placeholder="Mobile"
                value={formData.mobile}
                onChange={(e) => updateFormData("mobile", e.target.value)}
                required />

              <Input placeholder="Email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                required />

              <Input placeholder="City"
                value={formData.city}
                onChange={(e) => updateFormData("city", e.target.value)}
                required />

              <Input placeholder="State"
                value={formData.state}
                onChange={(e) => updateFormData("state", e.target.value)}
                required />

              <Input placeholder="Pincode"
                value={formData.pincode}
                onChange={(e) => updateFormData("pincode", e.target.value)}
                required />
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <RadioGroup
              onValueChange={(v) => updateFormData("has_experience", v)}
              defaultValue="N">
              <div className="flex gap-4">
                <RadioGroupItem value="Y" /> Yes
                <RadioGroupItem value="N" /> No
              </div>
            </RadioGroup>
          )}

          {/* STEP 4 */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <RadioGroup
                onValueChange={(v) => updateFormData("training_program", v)}>
                <RadioGroupItem value="CLEANER" /> Cleaner (1 Week)
                <RadioGroupItem value="TECHNICIAN" /> Technician (2 Weeks)
              </RadioGroup>

              <Input type="file"
                onChange={(e) =>
                  updateFormData("id_proof_file", e.target.files?.[0]?.name || "")
                }
                required />
            </div>
          )}

          {/* NAV BUTTONS */}
          <div className="mt-6 flex justify-between">
            {currentStep > 1 && (
              <Button type="button" variant="outline" onClick={prevStep}>
                <ArrowLeft /> Previous
              </Button>
            )}

            {currentStep < totalSteps ? (
              <Button type="button" onClick={nextStep}>
                Next <ArrowRight />
              </Button>
            ) : (
              <Button type="submit">
                Submit <CheckCircle2 />
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
