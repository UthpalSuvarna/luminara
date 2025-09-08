"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Shield, Lightbulb, Phone } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import Image from "next/image"
import { PathToHealingCard } from "@/components/PathToHealingCard"
import { PathToHealingModal } from "@/components/PathToHealingModal"

interface PathToHealing {
  id: number
  title: string
  description: string
  image: string
}

export default function AboutUs() {
  const [pathToHealing, setPathToHealing] = useState<PathToHealing[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState<PathToHealing | null>(null)

  useEffect(() => {
    const fetchPathToHealing = async () => {
      try {
        const response = await fetch("/data/pathToHealing.json")
        const data = await response.json()
        setPathToHealing(data.pathToHealing ?? [])
      } catch (error) {
        console.error("Error loading pathToHealing data:", error)
        setPathToHealing([])
      } finally {
        setLoading(false)
      }
    }

    fetchPathToHealing()
  }, [])

  const handleCardClick = (item: PathToHealing) => {
    setSelectedItem(item)
  }

  const handleCloseModal = () => {
    setSelectedItem(null)
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <Header />

      {/* Crisis Banner */}
      {/* Hero Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 ">Luminara</h1>
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 mx-auto">
            <Image
              src="/luminara.jpg"
              alt="Helpline Hero"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6 ">Your Healing Space</p>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-sans">
            We believe that every life holds light—even in the darkest moments. We are a holistic mental health and
            wellness hub created by the Suicide Lifeline to support individuals navigating emotional pain, mental health
            struggles, or moments of crisis.
          </p>
        </div>
      </section> */}

      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h1>
            <p className="text-xl text-gray-700">
              Need help? We are here to listen.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Objectives */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-none">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Heart className="h-8 w-8 text-blue-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900 ">Mission</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed ">
                  At Luminara, we are committed to breaking the silence around mental health and creating a
                  compassionate, stigma-free space where individuals can access support, rediscover hope, and strengthen
                  their emotional resilience. Through professional care, inclusive outreach, and community education, we
                  empower every person to take meaningful steps toward healing and lasting wellness.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-none">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Lightbulb className="h-8 w-8 text-green-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900 font-sans">Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed font-sans">
                  To build a society where mental health is valued and nurtured, stigma is replaced with understanding
                  and every person finds the support and inner strength to heal and thrive.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-none">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-purple-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900 ">Objectives</h3>
                </div>
                <ul className="text-lg text-gray-700 space-y-3 ">
                  <li>• Build resilience and hope in the face of life's challenges.</li>
                  <li>• Offer compassionate, non-judgmental care to every individual.</li>
                  <li>• Provide equitable access to support, regardless of background.</li>
                  <li>• Empower individuals with tools for mental and emotional well-being.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Help & What We Offer */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 ">Who do we serve...</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-sans">
                We welcome anyone seeking a safe space to talk, heal, or just be heard—whether you're in crisis,
                recovering from trauma, supporting a loved one, or simply looking for tools to improve your emotional
                well-being.
              </p>
              <div className="flex items-center text-blue-600">
                <Users className="h-6 w-6 mr-3" />
                <span className="font-semibold text-lg font-sans">Open to everyone, no exceptions</span>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 ">What We Offer</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-lg text-gray-700 font-sans">Pocket-friendly counseling </span>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-lg text-gray-700 font-sans">Group support sessions</span>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-lg text-gray-700 font-sans">Mental Wellness workshops</span>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-lg text-gray-700 font-sans">Self-care resources</span>
                </div>
              </div>
              <p className="text-lg text-gray-600 mt-6 italic font-sans">
                Our trained mental health professionals are here to listen, guide, and walk beside
                you—without judgment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Roots */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center ">Our Roots</h2>
          <div className="prose prose-xl max-w-none text-gray-700 font-sans">
            <p className="mb-8 text-xl leading-relaxed">
              Luminara is a Suicide Lifeline Initiative, a non-profit unit committed to suicide prevention and mental
              health advocacy. It was born from years of listening to survivors, families, and those in distress, and
              built with care, empathy, and hope.
            </p>
            <p className="mb-8 text-xl leading-relaxed">
              Many of our callers were unable to follow through with professional counselling due to affordability
              issues. Additionally, the community expressed that the Lifeline should have more visibility and that's
              when we decided to have a healing space as a way forward.
            </p>
            <div className="bg-blue-50 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 ">Why Luminara?</h3>
              <p className="text-xl leading-relaxed">
                The name Luminara evokes light, hope, and guidance, symbolizing our commitment to illuminating paths to
                well-being for everyone in our community. "Your Healing Space" emphasizes a safe, supportive, and
                personal environment we strive to create for every individual who walks through our doors or connects
                with our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suicide Helpline Info */}
      <section className="py-16 bg-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">24/7 Suicide Lifeline</h2>
            <div className="flex items-center justify-center mb-8">
              <Phone className="h-10 w-10 text-red-600 mr-4" />
              <span className="text-5xl font-bold text-red-600 font-mono">0824-2983444</span>
            </div>
            <p className="text-2xl text-gray-700 mb-8 font-sans">You are not alone. We are here to help.</p>
          </div>

          <div className="bg-white p-10 rounded-none shadow-sm w-full">
            <p className="text-lg text-gray-700 mb-6 font-sans leading-relaxed">
              Suicide Lifeline was officially launched on October 2nd, 2017 under the aegis of Susheg Charitable Trust
              with support from educational institutions like St. Agnes College, Roshni Nilaya, St. Aloysius College and
              concerned citizens in Mangalore.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-xl font-sans">Our Team</h4>
                <ul className="text-lg text-gray-700 space-y-2 font-sans">
                  <li>• 36 trained first responders available 24/7</li>
                  <li>• 12 back-up clinicians and experts,  Psychiatrists, Psychologists, Counselors</li>
                  <li>• Social workers and lawyers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-xl font-sans">Our Impact</h4>
                <ul className="text-lg text-gray-700 space-y-2 font-sans">
                  <li>• 3,132+ callers assisted to date</li>
                  <li>• Awareness programs on Mental Health & Wellness</li>
                  <li>• Gatekeeper training in institutions</li>
                  <li>• Annual suicide prevention activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Sustainable Path to Healing */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center ">
            A Sustainable Path to Healing
          </h2>
          <p className="text-xl text-gray-700 text-center mb-16 max-w-4xl mx-auto font-sans leading-relaxed">
            At Luminara, we are committed to providing essential mental health and wellness support as a non-profit
            organization, ensuring that affordability is never a barrier to receiving care.
          </p>

          {loading ? (
            <div className="text-center">
              <p className="text-gray-600">Loading...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {pathToHealing.map((item) => (
                <PathToHealingCard key={item.id} item={item} onClick={handleCardClick} />
              ))}
            </div>
          )}
        </div>
        <PathToHealingModal item={selectedItem} isOpen={selectedItem !== null} onClose={handleCloseModal} />
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-10 ">Need Help? We're Here for You</h2>
          <p className="text-2xl mb-10 font-sans">
            If you have thoughts of self harm, please reach out to our 24/7 Lifeline.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10">
            <div className="flex items-center">
              <Phone className="h-8 w-8 mr-3" />
              <span className="text-3xl font-bold font-mono">0824-2983444</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-none">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent rounded-none"
            >
              <Link href="/helpline">Learn More About Our Helpline</Link>
            </Button>
          </div>

          <p className="mt-8 text-gray-300 italic">You are not alone. We are here to listen.</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
