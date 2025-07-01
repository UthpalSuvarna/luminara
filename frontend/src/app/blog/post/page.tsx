import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Share2, Heart, MessageCircle, ArrowLeft, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <Header />

      {/* Emergency Banner */}
    
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="relative h-64 md:h-80">
            <Image
              src="/placeholder.svg?height=320&width=800"
              alt="Blog post hero image"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>

          <div className="p-6 md:p-8">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Mental Health
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Self Care
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                Mindfulness
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              5 Simple Mindfulness Techniques to Reduce Daily Stress
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="Dr. Sarah Johnson" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <span>Dr. Sarah Johnson</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>March 15, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                In our fast-paced world, stress has become an unwelcome companion for many of us. The good news is that
                mindfulness offers simple, accessible tools to help us find calm amidst the chaos.
              </p>

              <p className="mb-6">
                Mindfulness isn't about emptying your mind or achieving perfect peace—it's about being present with
                whatever you're experiencing, without judgment. Here are five practical techniques you can use anywhere,
                anytime to reduce stress and cultivate inner calm.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. The 5-4-3-2-1 Grounding Technique</h2>
              <p className="mb-4">When you feel overwhelmed, this technique helps anchor you to the present moment:</p>
              <ul className="mb-6 space-y-2">
                <li>
                  <strong>5 things you can see</strong> - Look around and name five objects
                </li>
                <li>
                  <strong>4 things you can touch</strong> - Feel the texture of your clothes, a surface, etc.
                </li>
                <li>
                  <strong>3 things you can hear</strong> - Notice sounds around you
                </li>
                <li>
                  <strong>2 things you can smell</strong> - Take a moment to identify scents
                </li>
                <li>
                  <strong>1 thing you can taste</strong> - Notice any taste in your mouth
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Box Breathing</h2>
              <p className="mb-6">
                This simple breathing pattern can quickly calm your nervous system. Breathe in for 4 counts, hold for 4,
                exhale for 4, and hold empty for 4. Repeat this cycle 4-6 times.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Body Scan Meditation</h2>
              <p className="mb-6">
                Starting from your toes and moving up to your head, mentally scan each part of your body. Notice any
                tension or sensations without trying to change them. This practice helps you reconnect with your
                physical self and release stored stress.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Mindful Walking</h2>
              <p className="mb-6">
                Transform your daily walks into mindfulness practice. Focus on the sensation of your feet touching the
                ground, the rhythm of your steps, and the movement of your body. If your mind wanders, gently bring
                attention back to walking.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. The STOP Technique</h2>
              <p className="mb-4">When stress peaks, remember STOP:</p>
              <ul className="mb-6 space-y-2">
                <li>
                  <strong>S</strong> - Stop what you're doing
                </li>
                <li>
                  <strong>T</strong> - Take a breath
                </li>
                <li>
                  <strong>O</strong> - Observe your thoughts, feelings, and surroundings
                </li>
                <li>
                  <strong>P</strong> - Proceed with awareness and intention
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
                <p className="text-blue-800">
                  <strong>Remember:</strong> Mindfulness is a practice, not a perfection. Be patient and compassionate
                  with yourself as you develop these skills. Even a few minutes of mindful awareness can make a
                  significant difference in your day.
                </p>
              </div>

              <p className="mb-6">
                These techniques are tools in your wellness toolkit, but they're not a substitute for professional help
                when needed. If you're struggling with persistent stress, anxiety, or other mental health concerns,
                please reach out to a mental health professional or contact our helpline.
              </p>
            </div>

            <Separator className="my-8" />

            {/* Author Bio */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="/placeholder-user.jpg" alt="Dr. Sarah Johnson" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Dr. Sarah Johnson</h3>
                  <p className="text-gray-600 mb-2">Licensed Clinical Psychologist & Mindfulness Instructor</p>
                  <p className="text-sm text-gray-700">
                    Dr. Johnson has over 15 years of experience in mental health counseling and specializes in
                    mindfulness-based interventions. She is a regular contributor to Luminara's wellness programs and
                    workshops.
                  </p>
                </div>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                  <Heart className="w-4 h-4" />
                  <span>Like (24)</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                  <MessageCircle className="w-4 h-4" />
                  <span>Comment</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Understanding Anxiety: Signs, Symptoms, and Support",
                excerpt: "Learn to recognize anxiety and discover effective coping strategies...",
                category: "Mental Health",
                readTime: "7 min read",
              },
              {
                title: "Building Resilience in Difficult Times",
                excerpt: "Practical steps to strengthen your emotional resilience and bounce back...",
                category: "Wellness",
                readTime: "6 min read",
              },
              {
                title: "The Power of Community in Mental Health Recovery",
                excerpt: "How connecting with others can accelerate your healing journey...",
                category: "Community",
                readTime: "4 min read",
              },
            ].map((post, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <div className="relative h-40">
                  <Image
                    src="/placeholder.svg?height=160&width=300"
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {post.category}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                    <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Read More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Support CTA */}
        <Card className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Support Right Now?</h2>
            <p className="mb-6 text-blue-100">
              You don't have to face your struggles alone. Our trained counselors are available 24/7 to listen and
              support you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call 0824-2983444</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              >
                Schedule Counseling
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <Footer />

      {/* Emergency Banner */}
    </div>
  )
}
