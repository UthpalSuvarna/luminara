import { CrisisBanner } from "@/components/crisis-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Phone, MessageCircle, Globe, Clock, Shield, AlertTriangle, CheckCircle } from "lucide-react"

export default function LifelinePage() {
  return (
    <div className="min-h-screen bg-white">
      <CrisisBanner />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-red-50 py-20 border-l-4 border-red-500">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Crisis Support & Lifeline</h1>
              <p className="text-xl text-gray-700 mb-8">
                If you're having thoughts of suicide or are in emotional distress, you're not alone. Help is available
                right now.
              </p>
              <Alert className="border-red-200 bg-red-50 max-w-2xl mx-auto">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <strong>If you're in immediate danger, call 0824 2983444 or go to your nearest emergency room.</strong>
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        {/* Immediate Help Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Immediate Help</h2>
              <p className="text-xl text-gray-600">Multiple ways to connect with trained crisis counselors</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-red-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Phone className="h-16 w-16 text-red-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">Call 0824 2983444</h3>
                  <p className="text-gray-600 mb-4">Suicide & Crisis Lifeline</p>
                  <div className="bg-red-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-red-800 mb-2">
                      <Clock className="inline h-4 w-4 mr-1" />
                      Available 24/7
                    </p>
                    <p className="text-sm text-red-800">
                      <Shield className="inline h-4 w-4 mr-1" />
                      Free & Confidential
                    </p>
                  </div>
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 w-full" asChild>
                    <a href="tel:0824 2983444">Call 0824 2983444 Now</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">Text Support</h3>
                  <p className="text-gray-600 mb-4">Crisis Text Line</p>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-blue-800 mb-2">
                      Text <strong>HOME</strong> to <strong>741741</strong>
                    </p>
                    <p className="text-sm text-blue-800">
                      <Shield className="inline h-4 w-4 mr-1" />
                      Anonymous & Secure
                    </p>
                  </div>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 text-blue-600 w-full bg-transparent"
                    asChild
                  >
                    <a href="sms:741741?body=HOME">Text HOME to 741741</a>
                  </Button>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* Warning Signs Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Warning Signs</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">Immediate Risk Signs</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Talking about wanting to die or kill themselves</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Looking for ways to kill themselves</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Talking about feeling hopeless or having no purpose</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Talking about feeling trapped or in unbearable pain</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Talking about being a burden to others</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-orange-600">Other Warning Signs</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Increased use of alcohol or drugs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Acting anxious, agitated, or reckless</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Sleeping too little or too much</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Withdrawing or feeling isolated</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Showing rage or talking about seeking revenge</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How to Help Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Help Someone</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-green-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-green-600">What TO Do</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Ask directly: "Are you thinking about suicide?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Listen without judgment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Stay with them or ensure they're not alone</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Help them connect with professional help</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Follow up and stay connected</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-red-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">What NOT to Do</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Don't promise to keep it a secret</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Don't minimize their problems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Don't leave them alone if at immediate risk</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Don't argue about whether suicide is right or wrong</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Don't promise things you can't deliver</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Planning Section */}
        {/* <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety Planning</h2>
              <p className="text-xl text-gray-600 mb-8">
                A safety plan is a personalized, practical plan that can help you get through thoughts of suicide.
              </p>
              <Card className="text-left">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-center">Key Elements of a Safety Plan</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-600">1. Warning Signs</h4>
                      <p className="text-gray-600 mb-4">
                        Identify personal warning signs that a crisis may be developing
                      </p>

                      <h4 className="font-semibold mb-3 text-blue-600">2. Coping Strategies</h4>
                      <p className="text-gray-600 mb-4">
                        List things you can do on your own to help you not act on thoughts of suicide
                      </p>

                      <h4 className="font-semibold mb-3 text-blue-600">3. Social Support</h4>
                      <p className="text-gray-600">Identify people who provide distraction and support</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-600">4. Professional Contacts</h4>
                      <p className="text-gray-600 mb-4">
                        List mental health professionals and agencies to contact during a crisis
                      </p>

                      <h4 className="font-semibold mb-3 text-blue-600">5. Environment Safety</h4>
                      <p className="text-gray-600 mb-4">
                        Make your environment safer by removing or limiting access to lethal means
                      </p>

                      <h4 className="font-semibold mb-3 text-blue-600">6. Reasons for Living</h4>
                      <p className="text-gray-600">Remind yourself of what makes life worth living</p>
                    </div>
                  </div>
                  <div className="text-center mt-8">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <a href="https://suicidesafetyplan.com/" target="_blank" rel="noopener noreferrer">
                        Create Your Safety Plan
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

        {/* Additional Resources */}
        {/* <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Crisis Resources</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Veterans Crisis Line</h3>
                  <p className="text-sm text-gray-600 mb-3">Specialized support for veterans</p>
                  <p className="font-medium">1-800-273-8255, Press 1</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">LGBTQ National Hotline</h3>
                  <p className="text-sm text-gray-600 mb-3">Support for LGBTQ+ individuals</p>
                  <p className="font-medium">1-888-843-4564</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Teen Line</h3>
                  <p className="text-sm text-gray-600 mb-3">Peer support for teenagers</p>
                  <p className="font-medium">1-800-852-8336</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  )
}
