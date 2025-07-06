import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CrisisBanner } from "@/components/crisis-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Heart, Users, BookOpen, ArrowRight, Play, Shield, Globe, Lightbulb } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const blogPosts = [
    {
      title: "24/7 Crisis Support: How Our Helpline Saves Lives",
      excerpt:
        "Discover the impact of round-the-clock crisis intervention and how trained counselors provide immediate support to those in need.",
      author: "Dr. Sarah Rodriguez",
      date: "March 15, 2024",
      category: "Helpline",
      image: "/luminara.jpg?height=300&width=400",
    },
    {
      title: "Training Crisis Counselors: Behind the Scenes",
      excerpt:
        "An inside look at the comprehensive training program that prepares our volunteers to handle crisis calls with compassion and expertise.",
      author: "Michael Johnson",
      date: "March 10, 2024",
      category: "Training",
      image: "/luminara.jpg?height=300&width=400",
    },
    {
      title: "The Evolution of Crisis Support: From Calls to Digital",
      excerpt:
        "How modern technology is transforming crisis intervention, from traditional phone calls to text support and online chat platforms.",
      author: "Lisa Chen",
      date: "March 5, 2024",
      category: "Innovation",
      image: "/luminara.jpg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b to-blue-300 via-blue-100 from-white text-white overflow-hidden">


          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="mb-8">
                <div className="relative w-64 h-64 mx-auto mb-6 mt-10">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-60"></div>
                  <div className="relative w-64 h-64 bg-white rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Image
                      src="/luminara.jpg"
                      alt="Helpline Hero"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
                Luminara
                <br />
                <span className="text-xl md:text-5xl">
                  A Mental Health & Wellness Hub
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-black text-sm md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Luminara is a non-profit organization dedicated to mental health advocacy, crisis intervention, and
                community support. Togethdher, we create a world where no one faces their darkest moments alone.
              </p>


              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 shadow-lg" asChild>
                  <Link href="/helpline">
                    Helpline
                  </Link>
                </Button>
                <Button size="lg" className="bg-blue-600 hover:bg-blueh-700 text-lg px-8 py-4 shadow-lg" asChild>
                  <Link href="/about">
                    Contact Us
                  </Link>
                </Button>
              </div>

            </div>
          </div>

        </section>

        {/* About Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <span className="text-blue-600 font-semibold text-lg">About Luminara</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                      Mental Health
                      <span className="text-blue-600"> Wellness Hub</span>
                    </h2>
                  </div>

                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    At Luminara, we are committed to breaking the silence around mental health and creating a compassionate, stigma-free space where individuals can access support, rediscover hope, and strengthen their emotional resilience. Through professional care, inclusive outreach, and community education, we empower every person to take meaningful steps toward healing and lasting wellness
                  </p>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Luminara offers free counseling, group support sessions, mindfulness workshops, and self-care resources. Our trained mental health volunteers and professionals are here to guide, listen, and walk beside you—without judgment.
                  </p>

                  {/* Key Services */}

                  <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
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
                      src="/luminara.jpg?height=500&width=600"
                      alt="Luminara team supporting community"
                      height={500}
                      width={500}
                      className="rounded-full shadow-2xl w-full md:m-5"
                    />
                  </div>

                  {/* Floating Cards */}
                  {/* <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg z-20">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Heart className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">10,000+</div>
                        <div className="text-sm text-gray-600">Lives Impacted</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg z-20">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Globe className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">24/7</div>
                        <div className="text-sm text-gray-600">Always Available</div>
                      </div>
                    </div>
                  </div> */}

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
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
                {blogPosts.map((post, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>{post.date}</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all bg-transparent"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* View All Blogs Button */}
              <div className="text-center">
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
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
