import { CrisisBanner } from "@/components/crisis-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Phone, MessageCircle, Globe, Clock, Shield, AlertTriangle, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function LifelinePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-cover bg-left mb-5" style={{ backgroundImage: "url('/bg2.jpg')" }}>
          <div className="container mx-auto px-4">
            <div className="flex justify-end">
              <div className="flex flex-col gap-6 md:gap-8 max-w-3xl w-full px-2 sm:px-4">

                {/* Image + Heading Side-by-Side (or stacked on mobile) */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-4 md:gap-6 text-center sm:text-left">
                  <div className="relative w-24 h-24 md:w-28 md:h-28 mb-2 sm:mb-0 flex-shrink-0 mx-auto sm:mx-0">
                    <Image
                      src="/suicide-helpline.jpg"
                      alt="Helpline Hero"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <div className="md:pt-2">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Suicide Lifeline</h1>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-1 md:pl-1">We are here to listen</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium text-center sm:text-left px-1">
                  For free, confidential, and non-judgmental support. <br className="md:block hidden" />
                  Available 24/7.
                </p>

                {/* Contact Info */}
                <div className="text-center sm:text-left">
                  <p className="text-lg font-bold text-gray-900">
                    <span className="text-2xl md:text-4xl">Call: 0824-2983444</span>
                  </p>
                  <p className="text-base text-gray-700 mt-2">
                    Email: <a href="mailto:lifelineconnect25@gmail.com" className="text-blue-600 underline">lifelineconnect25@gmail.com</a>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>




        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="text-justify mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">About Suicide Lifeline</h2>
              <p>Suicide Lifeline was officially launched on October 2nd, 2017 under the aegis of Susheg Charitable Trust (Regd.) with the wholehearted support from educational institutions like St. Agnes College, Roshni Nilaya, St. Aloysius College and a number of concerned citizens and, financial and material support from philanthropists and people of good will in and around Mangalore. The main goal of Lifeline is to prevent suicide and promote mental health and well-being.</p>
              <br></br>
              <p>A 24x7 lifeline (0824 -2983444) was established to respond to callers in distress. An expert team of professionals consisting of Psychiatrists, Counselors, Social Workers, and Lawyers train the volunteers periodically. 36 trained first responders are available in three shifts every day listening to the callers in crisis with compassion and empathy and administering psychological first-aid. If professional follow up (hospitalization, police intervention, etc) is required, the caller is referred for further assistance. There are 12 back-up clinicians/experts including psychiatrists, psychologists, counselors, lawyers, and social workers available to assist the volunteers. To date 3,075 callers have been assisted through the lifeline.</p>

              <br></br>
              <p>Awareness programs on Suicide Prevention and Intervention, Mental Health, Stress Management, Handling Emotions, Life Skills, Cultivating Happiness are conducted in educational institutions, NGOs and for general public in order to sensitize the community. Additionally, students from a number of educational institutions have been trained to be gatekeepers- i.e., being aware of the warning signs, responding to distress in their peers and steering them to safety.</p>

              <br></br>
              <p>International Suicide Prevention Day is commemorated every year by hosting competitions, walkathon and other sensitization activities in order to raise awareness on the suicide epidemic.</p>

              <br></br>

            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  )
}
