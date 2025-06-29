import Link from "next/link"
import { Phone, MessageCircle, Mail, Heart, Users, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Luminara</h1>
                <p className="text-sm text-gray-600">Suicide Lifeline</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#resources" className="text-gray-700 hover:text-blue-600 font-medium">
                Resources
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
                About
              </Link>
              <Link href="#support" className="text-gray-700 hover:text-blue-600 font-medium">
                Get Support
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Crisis Banner */}
      <div className="bg-red-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 text-center">
            <Phone className="w-5 h-5" />
            <span className="font-semibold">Crisis? Call or Text 988 • Available 24/7 • Free & Confidential</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">You Are Not Alone</h2>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              If you're struggling with thoughts of suicide, experiencing emotional distress, or need someone to talk
              to, we're here for you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call 988 Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg bg-transparent"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Get Immediate Help</h3>
            <p className="text-lg text-gray-600">Multiple ways to reach out when you need support</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-red-200 hover:border-red-300 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-red-600">Call 988</CardTitle>
                <CardDescription>Speak with a trained counselor</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Available 24/7, free and confidential support for people in distress.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">Call Now</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-600">Live Chat</CardTitle>
                <CardDescription>Chat with a crisis counselor</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Connect through our secure chat platform when calling isn't possible.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-300 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-600">Text 988</CardTitle>
                <CardDescription>Text with a crisis counselor</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Text-based support for those who prefer written communication.</p>
                <Button
                  variant="outline"
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  Send Text
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Luminara</h3>
            <p className="text-lg text-gray-600">Professional, compassionate support when you need it most</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">24/7 Availability</h4>
              <p className="text-gray-600">Round-the-clock support whenever you need it</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Confidential</h4>
              <p className="text-gray-600">Your privacy and safety are our top priorities</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Trained Counselors</h4>
              <p className="text-gray-600">Speak with qualified mental health professionals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Compassionate Care</h4>
              <p className="text-gray-600">Non-judgmental support in your time of need</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Additional Resources</h3>
            <p className="text-lg text-gray-600">Find the support that's right for you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Crisis Text Line</CardTitle>
                <CardDescription>Text HOME to 741741</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">24/7 crisis support via text message</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Veterans Crisis Line</CardTitle>
                <CardDescription>Press 1 after calling 988</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Specialized support for veterans and service members</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>LGBTQ+ Support</CardTitle>
                <CardDescription>The Trevor Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Crisis intervention for LGBTQ+ youth</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Luminara Suicide Lifeline</span>
              </div>
              <p className="text-gray-400">
                Providing hope and support to those in crisis, 24 hours a day, 7 days a week.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Crisis Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Mental Health Information
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Support Groups
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Volunteer
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Emergency Contacts</h4>
              <div className="space-y-2 text-gray-400">
                <p>Crisis Line: 988</p>
                <p>Emergency: 911</p>
                <p>Crisis Text: Text HOME to 741741</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Luminara Suicide Lifeline. All rights reserved.</p>
            <p className="mt-2">If you are in immediate danger, please call 911.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
