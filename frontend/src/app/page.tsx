import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Heart, ArrowRight, Globe } from "lucide-react"
import Image from "next/image"
import { RecentBlogs } from "@/components/recentBlogs"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="relative bg-gray-50">
          {/* Simple Background Pattern */}
          <div className="container mx-auto  relative z-10">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center py-10">
                {/* Left Content */}
                <div className="text-gray-900 space-y-8">
                  {/* <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm font-medium text-blue-800"> 5+ Years of Impact</span>
                  </div> */}

                  {/* Main Heading */}
                  <div className="space-y-4">
                    <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                      Luminara
                    </h1>
                    <p className="text-3xl lg:text-4xl">A Mental Health & Wellness Hub</p>
                  </div>

                  {/* Subtitle */}
                  <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                    Luminara is a non-profit organization dedicated to mental health advocacy, crisis intervention, and
                    community support. Together, we create a world where no one faces their darkest moments alone.
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className=" rounded-none bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4" asChild>
                      <Link href="tel:08242983444">
                        <Phone className="mr-2 h-5 w-5" />
                        Call 08242983444
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-none text-lg px-8 py-4 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                      asChild
                    >
                      <Link href="/about">
                        About Us
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>

                </div>

                {/* Right Image Collage */}
                <div className="relative lg:h-[600px] flex items-center justify-center">
                  <div className="relative w-full max-w-lg mx-5">
                    {/* Main Large Image */}
                    <div className="relative z-10">
                      <img
                        src="/img2.jpg?height=400&width=350"
                        alt="Support group meeting"
                        className="w-full h-80 object-cover shadow-2xl"
                      />
                    </div>

                    {/* Top Right Image */}
                    <div className="absolute -top-6 -right-6 z-20">
                      <img
                        src="/img3.jpg?height=150&width=200"
                        alt="Crisis counselor"
                        className="w-48 h-32 object-cover shadow-lg"
                      />
                    </div>

                    {/* Bottom Left Image */}
                    <div className="absolute -bottom-6 -left-6 z-20">
                      <img
                        src="/img4.jpg?height=150&width=200"
                        alt="Community workshop"
                        className="w-48 h-32 object-cover shadow-lg"
                      />
                    </div>

                    {/* Floating Info Cards */}
                    <div className="absolute top-4 left-4 bg-white rounded-none p-3 shadow-lg z-30">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <Phone className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">24/7 Lifeline</div>
                          <div className="text-xs text-gray-600">At Your Service</div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-white rounded-none p-3 shadow-lg z-30">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Heart className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">3132+</div>
                          <div className="text-xs text-gray-600">Callers</div>
                        </div>
                      </div>
                    </div>

                    {/* Background Decoration */}
                    <div className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-500 rounded-none opacity-20 -z-10"></div>
                    <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-500 rounded-none opacity-20 -z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <span className="text-blue-600 font-semibold text-lg">About Luminara</span>
                    <h2 className="text-4xl md:text-4xl font-bold text-blue-600 mt-2 mb-6">
                      Mental Health &
                      <span className="text-blue-600"> Wellness Hub </span>
                    </h2>
                  </div>

                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    As the name suggests,it is a reflection of a place dedicated to offering hope and a way forward for those in need.
                    We are dedicated to changing the narratives on suicide, breaking the silence and reaching out to those in distress through our 24x7 Lifeline.

                    Our ‘ Listening Lounge’ offers a compassionate, safe, non- judgmental healing space for those in search of mental wellness
                    Through the ‘Vintage Vibes’ initiative,we have created a comfort zone for the elderly to stimulate their minds,share their stories ,grow wiser and happier together
                    Parenthood is a beautiful,transformative journey and ‘Mother’s Oasis ‘provides the support and a sense of community as they prepare to welcome the new baby
                  </p>

                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Luminara offers counseling, group support sessions, mindfulness workshops, and self-care resources. Our trained mental health professionals are here to listen, guide, and walk beside you—without judgment.
                  </p>

                  {/* Key Services */}

                  <Button size="lg" asChild className="rounded-none bg-blue-600 hover:bg-blue-700">
                    <Link href="/about" className="inline-flex items-center gap-2">
                      Know More About Us
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                <div className="relative">
                  {/* Main Image */}
                  <div className="relative z-10">
                    <Image
                      src="/img1.jpg?height=500&width=600"
                      alt="Luminara team supporting community"
                      height={500}
                      width={500}
                      className="shadow-2xl w-full md:m-5"
                    />
                  </div>

                  {/* Floating Cards */}
                  <div className="absolute -top-6 -left-6 bg-white p-4  shadow-lg z-20">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Heart className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">3132+</div>
                        <div className="text-sm text-gray-600">Callers</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-none shadow-lg z-20">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Globe className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">24/7</div>
                        <div className="text-sm text-gray-600">At Your Service</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto ">
            <div className="max-w-7xl px-4 mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Blogs & Articles
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover the impact of our crisis support services through expert insights, real stories, and the
                  latest developments in mental health crisis intervention.
                </p>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <RecentBlogs />
              </div>

              {/* View All Blogs Button */}
              <div className="text-center">
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent rounded-none"
                >
                  <Link href="/blog" className="inline-flex items-center gap-2">
                    View All Helpline Articles
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>



      </main>

      <Footer />
    </div>
  )
}
