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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sucide Helpline</h1>
              <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 mx-auto">
                <Image
                  src="/suicide-helpline.jpg"
                  alt="Helpline Hero"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              {/* <p className="text-xl text-gray-700 mb-8">
                If you're having thoughts of suicide or are in emotional distress, you're not alone. Help is available
                right now.
              </p> */}
              <Alert className="border-blue-200 bg-blue-50 max-w-2xl mx-auto">
                <AlertDescription className="text-blue-800 text-center flex justify-center items-center">
                  <strong>0824-2983444 - A 24X7 Suicide Prevention Helpline of Mangalore</strong>
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="text-justify mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">About Suicide Helpline</h2>
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
