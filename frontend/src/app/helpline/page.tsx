import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import teamData from '@/../public/data/lifeline-team.json';

interface LifelineTeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export default function LifelinePage() {
  const lifelineTeam: LifelineTeamMember[] = teamData.lifelineTeam;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-white py-10 md:py-16 relative overflow-hidden">
          <div className="container max-w-7xl mx-auto relative px-4">
            <div className="relative rounded-none overflow-hidden shadow-lg max-h-[600px]">
              <div className="aspect-[3/1] w-full">
                <img
                  src="/bg4.jpg"
                  alt="Suicide Helpline Banner"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-end px-6 md:px-12 py-8">
                <div className="max-w-lg text-right">
                  <h1 className="text-base sm:text-xl md:text-2xl lg:text-5xl font-bold text-gray-100">
                    Suicide Lifeline
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base lg:text-2xl font-medium text-gray-50">
                    We are here to listen
                  </p>

                  {/* Visible only on lg and above */}
                  <p className="hidden lg:block text-sm lg:text-lg text-gray-100 mt-4 font-medium">
                    For free, confidential, and non-judgmental support.
                  </p>

                  <p className="text-base sm:text-xl lg:text-4xl font-bold text-gray-100 mt-4">
                    Call: 0824-2983444
                  </p>
                  <p className="text-xs sm:text-sm lg:text-lg text-gray-100">
                    Email: <a href="mailto:lifelineconnect25@gmail.com" className="text-blue-100 underline">lifelineconnect25@gmail.com</a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>




        <section className="py-10">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-justify mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">About Suicide Lifeline</h2>
              <div className="w-64 h-64 relative mx-auto mb-8">
                <Image
                  src="/suicide-helpline.jpg" // Replace with your image path
                  alt="Lifeline Logo"
                  fill
                  className="rounded-full object-contain"
                />
              </div>
              <p>Suicide Lifeline was officially launched on October 2nd, 2017 under the aegis of Susheg Charitable Trust (Regd.) with the wholehearted support from educational institutions like St. Agnes College, Roshni Nilaya, St. Aloysius College and a number of concerned citizens and, financial and material support from philanthropists and people of good will in and around Mangalore. The main goal of Lifeline is to prevent suicide and promote mental health and well-being.</p>
              <br></br>
              <p>A 24x7 lifeline (0824 -2983444) was established to respond to callers in distress. An expert team of professionals consisting of Psychiatrists, Counselors, Social Workers, and Lawyers train the volunteers periodically. 36 trained first responders are available in three shifts every day listening to the callers in crisis with compassion and empathy and administering psychological first-aid. If professional follow up is required such as hospitalization, police intervention, the caller is referred for further assistance. There are 12 back-up clinicians/experts including psychiatrists, psychologists, counselors, lawyers, and social workers available to assist the volunteers. To date 3,075 callers have been assisted through the lifeline.</p>

              <br></br>
              <p>Awareness programs on Suicide Prevention and Intervention, Mental Health, Stress Management, Handling Emotions, Life Skills, Cultivating Happiness are conducted in educational institutions, NGOs and for general public in order to sensitize the community. Additionally, students from a number of educational institutions have been trained to be gatekeepers- i.e., being aware of the warning signs, responding to distress in their peers and steering them to safety.</p>

              <br></br>
              <p>International Suicide Prevention Day is commemorated every year by hosting competitions, walkathon and other sensitization activities in order to raise awareness on the suicide epidemic.</p>

              <br></br>

            </div>
          </div>
        </section>

        <section className="py-10 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Lifeline Training Team</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avatar</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Post</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {lifelineTeam.map((member) => (
                    <tr key={member.name}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {member.imageUrl ? (
                          <Image src={member.imageUrl} alt="Image" width={40} height={40} className="rounded-full" />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{member.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{member.role}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  )
}