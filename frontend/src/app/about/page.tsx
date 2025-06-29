import { CrisisBanner } from "@/components/crisis-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Target, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <CrisisBanner />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Luminara</h1>
              <p className="text-xl text-gray-700">
                Founded on the belief that every life has value, Luminara has been a beacon of hope for individuals in
                crisis and their families for over 15 years.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  To provide immediate, compassionate support to individuals experiencing suicidal thoughts and to
                  promote mental health awareness in our community. We believe that with the right support, every person
                  can find hope and healing.
                </p>
                <p className="text-lg text-gray-700">
                  Our comprehensive approach combines crisis intervention, ongoing support, education, and community
                  outreach to create a safety net for those who need it most.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 mb-4">
                  A world where no one faces their darkest moments alone, and where mental health is treated with the
                  same urgency and compassion as physical health.
                </p>
                <div className="flex items-center gap-2 text-blue-600">
                  <Heart className="h-5 w-5" />
                  <span className="font-medium">Hope • Healing • Community</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Compassion</h3>
                  <p className="text-gray-600">
                    We approach every interaction with empathy, understanding, and genuine care.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Community</h3>
                  <p className="text-gray-600">
                    We believe in the power of connection and support from others who understand.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                  <p className="text-gray-600">
                    We maintain the highest standards in training, service delivery, and care.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Hope</h3>
                  <p className="text-gray-600">
                    We believe that recovery is possible and that every person deserves hope.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
              <p className="text-xl text-gray-600">Dedicated professionals committed to saving lives</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">DR</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Dr. Sarah Rodriguez</h3>
                  <p className="text-blue-600 mb-3">Executive Director</p>
                  <p className="text-gray-600 text-sm">
                    Licensed clinical psychologist with 20+ years in crisis intervention and mental health advocacy.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">MJ</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Michael Johnson</h3>
                  <p className="text-green-600 mb-3">Clinical Director</p>
                  <p className="text-gray-600 text-sm">
                    Licensed social worker specializing in suicide prevention and crisis counseling training.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-600">LC</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Lisa Chen</h3>
                  <p className="text-purple-600 mb-3">Program Manager</p>
                  <p className="text-gray-600 text-sm">
                    Mental health advocate with expertise in community outreach and support group facilitation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

        {/* History Section */}
        {/* <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2008
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Foundation</h3>
                    <p className="text-gray-700">
                      Luminara was founded by a group of mental health professionals and community advocates who
                      recognized the urgent need for accessible crisis support services.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    2012
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expansion</h3>
                    <p className="text-gray-700">
                      Launched our 24/7 crisis hotline and began offering support groups for survivors and families
                      affected by suicide.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    2018
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                    <p className="text-gray-700">
                      Introduced digital support platforms and expanded our educational programs to reach more people in
                      our community.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                    2023
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Today</h3>
                    <p className="text-gray-700">
                      Continuing to evolve and expand our services, having helped over 10,000 individuals and families
                      find hope and healing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  )
}
