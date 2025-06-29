import { CrisisBanner } from "@/components/crisis-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Users, BookOpen, Heart, Shield, MessageCircle, Calendar } from "lucide-react"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      <CrisisBanner />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Programs & Services</h1>
              <p className="text-xl text-gray-700">
                Comprehensive support services designed to meet you wherever you are in your journey
              </p>
            </div>
          </div>
        </section>

        {/* Crisis Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Crisis Intervention Services</h2>
              <p className="text-xl text-gray-600">Immediate help when you need it most</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-red-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Phone className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">24/7 Crisis Hotline</h3>
                  <p className="text-gray-600 mb-4">
                    Immediate phone support from trained crisis counselors. Available 24 hours a day, 7 days a week, 365
                    days a year. All calls are free and confidential.
                  </p>
                  <ul className="text-sm text-gray-600 mb-6 space-y-1">
                    <li>• Immediate crisis intervention</li>
                    <li>• Safety planning</li>
                    <li>• Resource referrals</li>
                    <li>• Follow-up support</li>
                  </ul>
                  <Button asChild className="bg-red-600 hover:bg-red-700">
                    <a href="tel:988">Call 988 Now</a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <MessageCircle className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">Crisis Text Support</h3>
                  <p className="text-gray-600 mb-4">
                    Text-based crisis support for those who prefer written communication. Connect with a trained
                    counselor via text message.
                  </p>
                  <ul className="text-sm text-gray-600 mb-6 space-y-1">
                    <li>• Text HOME to 741741</li>
                    <li>• Anonymous and confidential</li>
                    <li>• Available 24/7</li>
                    <li>• Trained crisis counselors</li>
                  </ul>
                  <Button asChild variant="outline" className="border-blue-600 text-blue-600 bg-transparent">
                    <a href="sms:741741?body=HOME">Text HOME to 741741</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Support Programs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ongoing Support Programs</h2>
              <p className="text-xl text-gray-600">Building resilience and community connections</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Support Groups</h3>
                  <p className="text-gray-600 mb-4">
                    Peer-led support groups for individuals with lived experience and their families.
                  </p>
                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    <li>• Weekly group sessions</li>
                    <li>• Survivor support groups</li>
                    <li>• Family support groups</li>
                    <li>• Online and in-person options</li>
                  </ul>
                  <Button asChild variant="outline">
                    <Link href="/contact">Join a Group</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Heart className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Individual Counseling</h3>
                  <p className="text-gray-600 mb-4">
                    One-on-one counseling sessions with licensed mental health professionals.
                  </p>
                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    <li>• Licensed therapists</li>
                    <li>• Sliding scale fees</li>
                    <li>• Trauma-informed care</li>
                    <li>• Flexible scheduling</li>
                  </ul>
                  <Button asChild variant="outline">
                    <Link href="/contact">Schedule Session</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Safety Planning</h3>
                  <p className="text-gray-600 mb-4">
                    Collaborative safety planning to help individuals stay safe during difficult times.
                  </p>
                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    <li>• Personalized safety plans</li>
                    <li>• Coping strategies</li>
                    <li>• Emergency contacts</li>
                    <li>• Regular plan updates</li>
                  </ul>
                  <Button asChild variant="outline">
                    <Link href="/lifeline">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Educational Programs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Education & Prevention</h2>
              <p className="text-xl text-gray-600">Building awareness and preventing crises</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 text-orange-600 mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">Community Workshops</h3>
                  <p className="text-gray-600 mb-4">
                    Educational workshops for community members, schools, and organizations on suicide prevention and
                    mental health awareness.
                  </p>
                  <ul className="text-sm text-gray-600 mb-6 space-y-1">
                    <li>• Warning signs recognition</li>
                    <li>• How to help someone in crisis</li>
                    <li>• Mental health first aid</li>
                    <li>• Stigma reduction</li>
                  </ul>
                  <Button asChild variant="outline">
                    <Link href="/contact">Request Workshop</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Calendar className="h-12 w-12 text-teal-600 mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">Training Programs</h3>
                  <p className="text-gray-600 mb-4">
                    Professional training for healthcare providers, educators, and community leaders in suicide
                    prevention and intervention.
                  </p>
                  <ul className="text-sm text-gray-600 mb-6 space-y-1">
                    <li>• QPR (Question, Persuade, Refer) training</li>
                    <li>• ASIST (Applied Suicide Intervention Skills)</li>
                    <li>• Youth-specific training</li>
                    <li>• Continuing education credits</li>
                  </ul>
                  <Button asChild variant="outline">
                    <Link href="/contact">View Training Schedule</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Specialized Programs */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized Programs</h2>
              <p className="text-xl text-gray-600">Targeted support for specific populations</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Youth Program</h3>
                  <p className="text-gray-600 text-sm">
                    Specialized support for teens and young adults, including school-based interventions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Veteran Support</h3>
                  <p className="text-gray-600 text-sm">
                    Tailored services for veterans and military families with specialized training.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">LGBTQ+ Support</h3>
                  <p className="text-gray-600 text-sm">
                    Affirming support services for LGBTQ+ individuals and their families.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing a Program?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our team can help you find the right support services for your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <a href="tel:988">Call 988 Now</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
