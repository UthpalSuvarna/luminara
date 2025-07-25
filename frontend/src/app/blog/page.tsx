import Link from "next/link"
import { CrisisBanner } from "@/components/crisis-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Heart, Brain, Users } from "lucide-react"
import fetchBlogs from "@/helpers/getBlogs"


export default async function BlogPage() {
  const blogs = await fetchBlogs();

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
        {/* <section className="py-16">
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
        </section> */}




        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.data.map((blog: any) => (
                  <Card key={1} className="rounded-none pt-0 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="w-full aspect-[16/9]">
                      <img
                        src={blog.image || "/img2.jpg"}
                        alt={blog.Title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2" style={{ minHeight: "3em" }}>{blog.Title}</h3>
                      <div className="text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          Author : {blog.Author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Published on : {new Date(blog.createdAt).toLocaleString('default', { month: 'long', year: 'numeric' })}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Button variant="outline" size="sm" asChild >
                          <Link href={`/blog/${blog.slug}`} className="inline-flex items-center gap-1 rounded-none">
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
        {/* <section className="py-16 bg-blue-600 text-white">
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
        </section> */}

        {/* Resources Section */}
        {/* <section className="py-16 bg-gray-50">
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
        </section> */}
      </main>

      <Footer />
    </div>
  )
}
