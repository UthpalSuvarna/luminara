import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CrisisBanner } from "@/components/crisis-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Heart, Users, BookOpen, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <CrisisBanner />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">You Are Not Alone</h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Luminara provides compassionate support, crisis intervention, and resources for individuals experiencing
              thoughts of suicide and their loved ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4">
                <Link href="tel:0824 2983444">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 0824 2983444
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-4 bg-transparent">
                <Link href="/Contact">Contact Us Now</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Crisis Help Section */}
        <section className="py-16 bg-red-50 border-l-4 border-red-500">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">In Crisis? Get Immediate Help</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-red-200">
                  <CardContent className="p-6">
                    <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Call 0824 2983444</h3>
                    <p className="text-gray-600 mb-4">
                      Suicide & Crisis Lifeline - Available 24/7, free and confidential
                    </p>
                    <Button asChild className="bg-red-600 hover:bg-red-700">
                      <a href="tel:0824 2983444">Call Now</a>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-red-200">
                  <CardContent className="p-6">
                    <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                    <p className="text-gray-600 mb-4">Reach out to our support team via email for assistance</p>
                    <Button asChild variant="outline" className="border-red-600 text-red-600 bg-transparent">
                      <a href="mailto:support@luminara.org">Email Now</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Can Help</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our comprehensive approach provides support at every stage of your journey
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">24/7 Crisis Support</h3>
                  <p className="text-gray-600">
                    Immediate help when you need it most. Our trained counselors are available around the clock.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Support Groups</h3>
                  <p className="text-gray-600">
                    Connect with others who understand. Join our peer support groups and community programs.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Educational Resources</h3>
                  <p className="text-gray-600">
                    Learn about mental health, warning signs, and how to help yourself and others.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you need immediate help or want to learn more about our programs, we're here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/programs">View Our Programs</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
