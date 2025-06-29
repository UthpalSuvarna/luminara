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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "",
    })
    alert("Thank you for your message. We'll get back to you soon.")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-white">
      <CrisisBanner />
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
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <Card>
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
                            className="mt-1"
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
                            className="mt-1"
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
                            className="mt-1"
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
                          className="mt-1"
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
                          className="mt-1"
                          placeholder="Please share your message or questions..."
                        />
                      </div>

                      <Button type="submit" className="bg-blue-600 hover:bg-blue-700 w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <Card className="border-red-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Heart className="h-6 w-6 text-red-600" />
                        <h3 className="text-xl font-semibold text-red-600">Crisis Support</h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        If you're in crisis or having thoughts of suicide, please reach out immediately:
                      </p>
                      <div className="space-y-2">
                        <p className="font-semibold">Call 988 - Suicide & Crisis Lifeline</p>
                        <p className="font-semibold">Text HOME to 741741 - Crisis Text Line</p>
                        <p className="text-sm text-gray-600">Available 24/7, free and confidential</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Phone className="h-6 w-6 text-blue-600" />
                        <h3 className="text-xl font-semibold">Phone</h3>
                      </div>
                      <p className="text-gray-700 mb-2">Main Office: (555) 123-4567</p>
                      <p className="text-gray-700">Crisis Line: 988</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Mail className="h-6 w-6 text-green-600" />
                        <h3 className="text-xl font-semibold">Email</h3>
                      </div>
                      <p className="text-gray-700 mb-2">General: info@luminara.org</p>
                      <p className="text-gray-700 mb-2">Programs: programs@luminara.org</p>
                      <p className="text-gray-700">Training: training@luminara.org</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <MapPin className="h-6 w-6 text-purple-600" />
                        <h3 className="text-xl font-semibold">Address</h3>
                      </div>
                      <p className="text-gray-700">
                        123 Hope Street
                        <br />
                        Support City, SC 12345
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Clock className="h-6 w-6 text-orange-600" />
                        <h3 className="text-xl font-semibold">Office Hours</h3>
                      </div>
                      <div className="space-y-1 text-gray-700">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                        <p className="text-sm text-red-600 mt-2">*Crisis support available 24/7</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">How quickly will you respond to my message?</h3>
                    <p className="text-gray-600">
                      We aim to respond to all non-crisis inquiries within 24-48 hours during business days. For
                      immediate crisis support, please call 988 or text HOME to 741741.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Are your services free?</h3>
                    <p className="text-gray-600">
                      Yes, our crisis support services are completely free. Some specialized programs may have sliding
                      scale fees, but we never turn anyone away due to inability to pay.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      Do you offer services in languages other than English?
                    </h3>
                    <p className="text-gray-600">
                      Yes, we have multilingual staff and interpreters available. The 988 Lifeline also provides
                      services in Spanish and has access to interpreters for other languages.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">How can I volunteer or get involved?</h3>
                    <p className="text-gray-600">
                      We welcome volunteers! Please contact us using the form above and select "Volunteer Opportunities"
                      as your inquiry type. We'll provide information about our training programs and current needs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
            <p className="text-xl mb-8 opacity-90">Don't wait. Crisis support is available 24/7.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:988">Call 988 Now</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <a href="sms:741741?body=HOME">Text HOME to 741741</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
