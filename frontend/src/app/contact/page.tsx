"use client"

import type React from "react"

import { useState } from "react"
import { CrisisBanner } from "@/components/crisis-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmissionStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          inquiryType: "",
        })
      } else {
        setSubmissionStatus("error")
      }
    } catch (error) {
      setSubmissionStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Luminara</h1>
              <p className="text-xl text-gray-700">
                We're here to help. Reach out to us for support, information, or to get involved.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <Card className="rounded-none">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            required
                            className="mt-1 rounded-none"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            required
                            className="mt-1 rounded-none"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            className="mt-1 rounded-none"
                          />
                        </div>
                        <div>
                          <Label htmlFor="inquiryType">Inquiry Type</Label>
                          <Select
                            value={formData.inquiryType}
                            onValueChange={(value) => handleChange("inquiryType", value)}
                          >
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Information</SelectItem>
                              <SelectItem value="programs">Programs & Services</SelectItem>
                              <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                              <SelectItem value="training">Training & Workshops</SelectItem>
                              <SelectItem value="support">Support Groups</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          type="text"
                          value={formData.subject}
                          onChange={(e) => handleChange("subject", e.target.value)}
                          required
                          className="mt-1 rounded-none"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          required
                          rows={5}
                          className="mt-1 rounded-none"
                          placeholder="Please share your message or questions..."
                        />
                      </div>

                      <Button type="submit" className="bg-blue-600 hover:bg-blue-700 w-full rounded-none" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>

                      {submissionStatus === "success" && (
                        <div className="text-green-600">Thank you for your message. We'll get back to you soon.</div>
                      )}
                      {submissionStatus === "error" && (
                        <div className="text-red-600">Something went wrong. Please try again.</div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <Card className="border-red-200 rounded-none">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Heart className="h-6 w-6 text-red-600" />
                        <h3 className="text-xl font-semibold text-red-600">Support</h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Need having thoughts of suicide, please reach out immediately:
                      </p>
                      <div className="space-y-2">
                        <p className="font-semibold">Call: 0824-2983444</p>
                        <p className="font-semibold">Email: luminaramhhub@gmail.com</p>
                        <p className="text-sm text-gray-600">Available 24/7 at your service</p>
                      </div>
                    </CardContent>
                  </Card>


                </div>
              </div>
            </div>
          </div>
        </section>




      </main>

      <Footer />
    </div>
  )
}
