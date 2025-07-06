import Link from "next/link"
import { CrisisBanner } from "@/components/crisis-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Heart, Brain, Users } from "lucide-react"

export default function BlogPage() {
  const featuredArticle = {
    title: "Understanding the Warning Signs: A Comprehensive Guide",
    excerpt:
      "Learn to recognize the warning signs of suicide and how to respond with compassion and effectiveness. This guide provides practical steps for helping someone in crisis.",
    author: "Dr. Sarah Rodriguez",
    date: "March 15, 2024",
    category: "Prevention",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
  }

  const articles = [
    {
      title: "Building Resilience: Coping Strategies for Difficult Times",
      excerpt:
        "Discover evidence-based techniques for building emotional resilience and managing stress during challenging periods.",
      author: "Michael Johnson",
      date: "March 10, 2024",
      category: "Mental Health",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Supporting a Loved One: A Family Guide",
      excerpt:
        "Practical advice for family members and friends on how to support someone who is struggling with suicidal thoughts.",
      author: "Lisa Chen",
      date: "March 5, 2024",
      category: "Support",
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "The Role of Social Connection in Mental Health",
      excerpt:
        "Exploring how meaningful relationships and community connections contribute to mental wellness and suicide prevention.",
      author: "Dr. Sarah Rodriguez",
      date: "February 28, 2024",
      category: "Research",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Youth Mental Health: Recognizing Signs in Teenagers",
      excerpt:
        "A guide for parents, teachers, and caregivers on identifying mental health concerns in adolescents and young adults.",
      author: "Michael Johnson",
      date: "February 20, 2024",
      category: "Youth",
      readTime: "9 min read",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Creating Safe Spaces: Environmental Factors in Prevention",
      excerpt: "How physical and social environments can be designed to promote mental health and prevent suicide.",
      author: "Lisa Chen",
      date: "February 15, 2024",
      category: "Prevention",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "The Science of Hope: Research on Recovery and Healing",
      excerpt:
        "Latest research findings on recovery from suicidal ideation and the factors that promote long-term healing.",
      author: "Dr. Sarah Rodriguez",
      date: "February 10, 2024",
      category: "Research",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const categories = [
    { name: "Prevention", count: 12, icon: Heart, color: "bg-red-100 text-red-800" },
    { name: "Mental Health", count: 8, icon: Brain, color: "bg-blue-100 text-blue-800" },
    { name: "Support", count: 6, icon: Users, color: "bg-green-100 text-green-800" },
    { name: "Research", count: 4, icon: Calendar, color: "bg-purple-100 text-purple-800" },
    { name: "Youth", count: 3, icon: Heart, color: "bg-orange-100 text-orange-800" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Blog & Resources</h1>
              <p className="text-xl text-gray-700">
                Expert insights, research, and practical guidance on mental health and suicide prevention
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredArticle.image || "/placeholder.svg"}
                      alt={featuredArticle.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <Badge className="mb-4 bg-blue-100 text-blue-800">{featuredArticle.category}</Badge>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredArticle.title}</h3>
                    <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {featuredArticle.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {featuredArticle.date}
                      </div>
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <Button asChild>
                      <Link href="/blog/post" className="inline-flex items-center gap-2">
                        Read Article <ArrowRight className="h-4 w-4" />
                      </Link>

                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
              <div className="grid md:grid-cols-5 gap-4">
                {categories.map((category) => {
                  const IconComponent = category.icon
                  return (
                    <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <IconComponent className="h-8 w-8 mx-auto mb-3 text-gray-600" />
                        <h3 className="font-semibold mb-2">{category.name}</h3>
                        <Badge className={category.color}>{category.count} articles</Badge>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-gray-100 text-gray-800">{article.category}</Badge>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {article.date}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{article.readTime}</span>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="#" className="inline-flex items-center gap-1">
                            Read More <ArrowRight className="h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
              <p className="text-xl mb-8 opacity-90">
                Subscribe to our newsletter for the latest articles, resources, and mental health insights.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                  />
                  <Button variant="secondary" size="lg">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm opacity-75 mt-2">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Resources</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Crisis Resources</h3>
                    <p className="text-gray-600 mb-4">
                      Immediate help and crisis intervention resources available 24/7.
                    </p>
                    <Button asChild variant="outline">
                      <Link href="/lifeline">View Resources</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Support Programs</h3>
                    <p className="text-gray-600 mb-4">
                      Ongoing support groups and counseling services for individuals and families.
                    </p>
                    <Button asChild variant="outline">
                      <Link href="/programs">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Training & Education</h3>
                    <p className="text-gray-600 mb-4">
                      Professional training and community education programs on suicide prevention.
                    </p>
                    <Button asChild variant="outline">
                      <Link href="/contact">Get Training</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
