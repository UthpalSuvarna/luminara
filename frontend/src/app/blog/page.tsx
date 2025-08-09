import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, } from "lucide-react"
import Image from "next/image"
import fetchBlogs from "@/helpers/getBlogs"


export default async function BlogPage() {
  const blogs = await fetchBlogs();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
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

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


                {blogs.data && blogs.data.map((blog: any) => (
                  <Card key={1} className="rounded-none pt-0 overflow-hidden hover:shadow-lg transition-shadow">
                    <Image
                      src={`${blog.Banner?.url}`}
                      alt={blog.Title}
                      className="w-full h-full object-cover"
                      width={500}
                      height={300}
                    />
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
      </main>

      <Footer />
    </div>
  )
}
